<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
use Hyperf\Contract\StdoutLoggerInterface;
use Psr\Log\LogLevel;

return [
    'app_name' => env('APP_NAME', 'skeleton'),
    'app_env' => env('APP_ENV', 'dev'),
    'scan_cacheable' => env('SCAN_CACHEABLE', false),
    StdoutLoggerInterface::class => [
        'log_level' => [
            LogLevel::ALERT,
            LogLevel::CRITICAL,
            //LogLevel::DEBUG,
            LogLevel::EMERGENCY,
            LogLevel::ERROR,
            LogLevel::INFO,
            LogLevel::NOTICE,
            LogLevel::WARNING,
        ],
    ],

    'lang_type' => ['zh_CN','en'],
    'token_time' => 86400 * 7,

    'binance' => [
        'response_type' => 'array',
        'base_uri' => 'https://api1.binance.com', // 正式网1
       //'base_uri' => 'https://api.binance.com', // 正式网
//        'base_uri' => 'https://testnet.binance.vision', // 测试网
        'app_key' => 'pZ8IRycfSmFBUgabktf23izJIOiu3C3R6qF4iDTIQGMl1vShYmyMiw0GCtyJ9HuC',
        'secret' => 'irmjPzBS7aHOn0R2UHqniJR10uQnLFgyutQWanscnAVPNMn6mbwLECyLzjTT1KI2',
        'proxy' => [
//            'http' => 'socks5h://127.0.0.1:1080', // 为 "http" 请求增加代理
            'https' => 'socks5h://127.0.0.1:7890', // 为 "https" 请求增加代理
//            'no' => ['.mit.edu', 'foo.com'],   // 不需要使用代理的请求
        ],
        'log' => [
            'level' => 'debug',
            'file'  => '/tmp/exchange.log',
        ],
    ],
];
