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
return [
    'handler' => [
        'http' => [
            //验证器异常
            App\Exception\Handler\ValidateExceptionHandler::class,

            //统一异常
            App\Exception\Handler\AppExceptionHandler::class,
        ],
    ],
];
