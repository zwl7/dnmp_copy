<?php


use App\Helpers\Log;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Logger\LoggerFactory;
use Hyperf\Server\ServerFactory;
use Hyperf\Utils\ApplicationContext;
use Hyperf\Utils\Codec\Json;
use Swoole\Websocket\Frame;
use Swoole\WebSocket\Server as WebSocketServer;
use Hyperf\Redis\Redis;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\Context\Context;

/**
 * Notes: 驼峰/下划线 互转
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:04
 * @param $params
 * @param int $type 默认 0: 驼峰-》下划线；1：下划线-》驼峰"
 * @return array
 */
function humpUnderlineConversion($params, $type = 0)
{
    $newArr = [];
    if (!is_array($params) || empty($params)) return $newArr;
    foreach ($params as $key => $val) {
        if ($type == 1) {
            $newkey = preg_replace_callback('/([-_]+([a-z]{1}))/i', function ($matches) {
                return strtoupper($matches[2]);
            }, $key);
        } else {
            $newkey = $key;
            if (!strstr($key, '_')) {
                $key    = str_replace("_", "", $key);
                $key    = preg_replace_callback('/([A-Z]{1})/', function ($matches) {
                    return '_' . strtolower($matches[0]);
                }, $key);
                $newkey = ltrim($key, "_");
            }
        }

        $newArr[$newkey] = is_array($val) ? humpUnderlineConversion($val, $type) : $val;
    }

    return $newArr;
}

/**
 * Notes: 统一返回响应arr
 * User: 闻铃
 * DateTime: 2023/3/29 下午1:54
 * @param int $code
 * @param string $msg
 * @param array $data
 * @return array
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function res(int $code = 200, string $msg = "success", array $data = []): array
{
    $startTime = Context::get('startTime');
    //buildHttpInfo();
    return ['code' => $code, 'msg' => $msg, 'data' => humpUnderlineConversion($data, 1)];
}



/**
 * 容器实例
 *
 * @return ContainerInterface
 */
function di(): ContainerInterface
{
    return ApplicationContext::getContainer();
}

/**
 * Notes:获取redis对象
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:56
 * @return Redis|mixed
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function redis()
{
    return di()->get(\Hyperf\Redis\Redis::class);
}

/**
 * Notes: Server 实例 基于 Swoole Server
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:56
 * @return \Swoole\Coroutine\Server|\Swoole\Server
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function server()
{
    return di()->get(ServerFactory::class)->getServer()->getServer();
}

/**
 * Notes: WebSocket frame 实例
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:56
 * @return mixed|Frame
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function frame()
{
    return di()->get(Frame::class);
}

/**
 * Notes:WebSocketServer 实例
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:57
 * @return mixed|WebSocketServer
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function websocket()
{
    return di()->get(WebSocketServer::class);
}

/**
 * Notes:简单的缓存
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:57
 * @return mixed|\Psr\SimpleCache\CacheInterface
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function cache()
{
    return di()->get(Psr\SimpleCache\CacheInterface::class);
}

/**
 * Notes: 文件日志
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:57
 * @param string $name
 * @return LoggerInterface
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function logger(string $name = 'APP'): LoggerInterface
{
    return di()->get(LoggerFactory::class)->get($name);
}

/**
 * Notes: Http 请求实例
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:57
 * @return mixed|ServerRequestInterface
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function request()
{
    return di()->get(RequestInterface::class);
}

/**
 * Notes: 请求响应
 * User: 闻铃
 * DateTime: 2023/3/28 下午10:58
 * @return ResponseInterface|mixed
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function response()
{
    return di()->get(ResponseInterface::class);
}

/**
 * Notes: curl请求对象
 * User: 闻铃
 * DateTime: 2023/4/2 下午5:24
 * @param array $options
 * @return \GuzzleHttp\Client
 * @throws \Psr\Container\ContainerExceptionInterface
 * @throws \Psr\Container\NotFoundExceptionInterface
 */
function httpByGuzzle(array $options = ['timeout'  => 8])
{
    return di()->get(\Hyperf\Guzzle\ClientFactory::class)->create($options);
}

/**
 * 获取当前毫秒.
 *
 * @return float
 */
function getMs()
{
    list($ms, $sec) = explode(' ', microtime());

    return (float) sprintf('%.0f', (floatval($ms) + floatval($sec)) * 1000);
}
