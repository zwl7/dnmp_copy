<?php


namespace Onetech;


use Onetech\Exceptions\InvalidArgumentException;

class Sign
{

    protected $redis = null;

    // formId的缓存配置
    protected $config = [
        'prefix' => 'sign::',
    ];

    public function __construct(\redis $redis = null, array $config = [])
    {
        if (empty($redis)) {
            throw new InvalidArgumentException('缓存对象不存在');
        }
        $this->redis = $redis;

        if (!empty($config)) {
            $this->config = array_merge($this->config, $config);
        }
    }

    public function getKey($unique)
    {
        return $this->config['prefix'] . $unique;
    }

    /**
     * 签到
     * @param $key
     * @param $date
     */
    public function sign($key, $date)
    {
        $offset = $this->changeOffset($date);
        $this->redis->setBit($key, $offset, 1);
    }

    public function getSign($key)
    {

        $hex_str = unpack("H*", $this->redis->get($key))[1];
// hex str 的长度
        $hex_str_len = strlen($hex_str);
// 为了防止 hex to dec 时发生溢出
// 我们需要切分 hex str，使得每一份 hex str to dec 时都能落在 int 类型的范围内
// 因为 2 位 16 进制表示一个字节，所以用系统 int 类型的字节长度去分组是绝对安全的
        $chunk_size = PHP_INT_SIZE;
// 对 hex str 做分组对齐，否则 str 的最后几位可能会被当作低位数据处理
// 比如 fffff 以 4 位拆分 'ffff', 'f' 后 最后一组 'f' 就被低位数据处理了
// 对齐后 fffff000 分组 'ffff', 'f000' 就能保证 'f' 的数据位了
        $hex_str = str_pad($hex_str, $hex_str_len + ($chunk_size - ($hex_str_len % $chunk_size)), 0, STR_PAD_RIGHT);

// 防止 hexdec 时溢出 使用 PHP_INT_SIZE 个 16 进制字符一组做拆分
// 因 16 进制 2 位标识一个字节 所以 PHP_INT_SIZE 是绝对不会溢出的
        $hex_str_arr = str_split($hex_str, $chunk_size);

        $bitmap_bin_str = '';
        array_walk($hex_str_arr, function ($hex_str_chunk) use (
            &$bitmap_bin_str, $chunk_size
        ) {
            $bitmap_bin_str .= str_pad(decbin(hexdec($hex_str_chunk)), $chunk_size * 4, 0, STR_PAD_LEFT);
        });
        return $bitmap_bin_str;
    }

    /**
     * 检查是否有签到
     * @param $key
     * @param $date
     * @return int
     * @throws InvalidArgumentException
     */
    public function checkSign($key, $date)
    {
        $offset = $this->changeOffset($date);
        return $this->redis->getBit($key, $offset);
    }

    public function changeOffset($date)
    {
        if (!$this->validateDate($date)) {
            throw new InvalidArgumentException($date . ' 无效的日期格式');
        }
        return intval(date('z', strtotime($date)));
    }

    /**
     * 获得签到总天数
     * @param $key
     * @return int
     */
    public function getSignCount($key)
    {
        return $this->redis->bitCount($key);
    }

    /**
     * 获得范围签到情况
     * @param $key
     * @param $start
     * @param $end
     * @return bool|string
     * @throws InvalidArgumentException
     */
    public function getRangeCount($key, $start, $end)
    {
        $start = $this->changeOffset($start);
        $end = $this->changeOffset($end) + 1;

        if ($start > $end) {
            throw new InvalidArgumentException('开始时间不能大于结束时间！');
        }

        $sign = $this->getSign($key);

        return substr($sign, $start, $end - $start);
    }

    /**
     * 获得首次签到的日期
     * @param $key
     * @return int
     */
    public function getFirstSignDate($key)
    {
        return $this->redis->bitpos($key, 1);
    }

    /**
     * 获得当前一周签到的情况
     * @param $key
     * @return bool|string
     * @throws InvalidArgumentException
     */
    public function getWeek($key)
    {
        $monday = date("Y-m-d", strtotime("-1 week Monday"));//当前周周一
        $sunday = date("Y-m-d", strtotime("0 week Sunday"));//当前周周日

        return $this->getRangeCount($key, $monday, $sunday);
    }

    /**
     * 获得当前一个月签到的情况
     * @param $key
     * @return bool|string
     * @throws InvalidArgumentException
     */
    public function getMonth($key)
    {
        $firstDay = date('Y-m-01');
        $lastDay = date('Y-m-d', strtotime("last day of this month"));

        return $this->getRangeCount($key, $firstDay, $lastDay);
    }

    /**
     * 获得最近几天的签到情况【包含今天】
     * @param $key
     * @param int $offset
     * @return bool|string
     * @throws InvalidArgumentException
     */
    public function getLastDays($key, int $offset = 7)
    {
        $offset = $offset - 1;
        $start = date("Y-m-d", strtotime("-${offset} days"));
        $end = date('Y-m-d');

        return $this->getRangeCount($key, $start, $end);
    }

    private function validateDate($date, $format = 'Y-m-d H:i:s')
    {
        $d = \DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) == $date;
    }
}