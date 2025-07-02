<?php


namespace App\Helpers;

class Log
{
    /**
     * Notes: 日志通道
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:31
     * @param string $group
     * @param string $name
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function channel(string $group = 'default', string $name = 'app')
    {
        return di()->get(\Hyperf\Logger\LoggerFactory::class)->get($name, $group);
    }

    /**
     * Notes:debug调试日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function codeDebug()
    {
        return self::channel('code_debug', config('app_env', 'app'));
    }

    /**
     * Notes: 接口请求日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function HttpLog()
    {
        return self::channel('http_log', config('app_env', 'app'));
    }

    /**
     * Notes:sql记录日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function sqlLog()
    {
        return self::channel('sql_log', config('app_env', 'app'));
    }


    /**
     * Notes: 定时任务日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function crontabLog()
    {
        return self::channel('crontab_log', config('app_env', 'app'));
    }

    /**
     * Notes:错误日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function errorLog()
    {
        return self::channel('error_log', config('app_env', 'app'));
    }

    /**
     * Notes:公用日志
     * User: 闻铃
     * DateTime: 2023/3/29 下午1:32
     * @return \Psr\Log\LoggerInterface
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public static function commonLog()
    {
        return self::channel('common_log', config('app_env', 'app'));
    }

}
