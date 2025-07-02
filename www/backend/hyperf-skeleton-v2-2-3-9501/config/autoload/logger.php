<?php

declare(strict_types=1);

$appEnv = env('APP_ENV', 'dev');

return [

    'default' => [
        'handler' => [
            'class' => \Monolog\Handler\StreamHandler::class,
            'constructor' => [
                'stream' => BASE_PATH . '/runtime/logs/hyperf.log',
                'level' => \Monolog\Logger::DEBUG,
            ],
        ],
        'formatter' => [
            'class' => \Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => null,
                'allowInlineLineBreaks' => true,
            ]
        ],
    ],

    'common_log' => [
        'handler' => [
            'class' => Monolog\Handler\RotatingFileHandler ::class,
            'constructor' => [
                'filename' => BASE_PATH . '/runtime/logs/common_log/common.log',
                'level' => Monolog\Logger::DEBUG,
            ],
        ],
        'formatter' => [
            'class' => Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
            ],
        ],
    ],

    'http_log' => [
        'handler' => [
            'class' => Monolog\Handler\RotatingFileHandler ::class,
            'constructor' => [
                'filename' => BASE_PATH . '/runtime/logs/http_log/http.log',
                'level' => Monolog\Logger::DEBUG,
            ],
        ],
        'formatter' => [
            'class' => Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
            ],
        ],
    ],

    'crontab_log' => [
        'handler' => [
            'class' => Monolog\Handler\RotatingFileHandler ::class,
            'constructor' => [
                'filename' => BASE_PATH . '/runtime/logs/crontab_log/crontab.log',
                'level' => Monolog\Logger::ERROR,
            ],
        ],
        'formatter' => [
            'class' => Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
            ],
        ],
    ],

    'sql_log' => [
        'handler' => [
            'class' => Monolog\Handler\RotatingFileHandler ::class,
            'constructor' => [
                'filename' => BASE_PATH . '/runtime/logs/sql_log/sql.log',
                'level' => Monolog\Logger::DEBUG,
            ],
        ],
        'formatter' => [
            'class' => Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
            ],
        ],
    ],

    'error_log' => [
        'handler' => [
            'class' => Monolog\Handler\RotatingFileHandler ::class,
            'constructor' => [
                'filename' => BASE_PATH . '/runtime/logs/error_log/error.log',
                'level' => Monolog\Logger::DEBUG,
            ],
        ],
        'formatter' => [
            'class' => Monolog\Formatter\LineFormatter::class,
            'constructor' => [
                'format' => null,
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
            ],
        ],
    ]
];
