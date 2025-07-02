<?php

declare(strict_types=1);

namespace App\Middleware;

use App\Constants\Common;
use App\Constants\RedisKey;
use App\Constants\ResponseCode;
use App\Helpers\Jwt;
use Hyperf\Context\Context;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class JwtMiddleware implements MiddlewareInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $token = $request->getHeader("Authorization");
        if (!$token) {
            return response()->json(
                [
                    'code' => ResponseCode::Fail,
                    'msg' => '请输入token',
                    'data' => [],
                ]
            );
        }

        $valid = di()->get(\App\Helpers\Jwt::class)->verifyToken($token[0]);
        if (!$valid) {
            return response()->json(
                [
                    'code' => ResponseCode::Fail,
                    'msg' => 'token无效',
                    'data' => [],
                ]
            );
        }

        if (redis()->get(RedisKey::USER_TOKEN)) {
            return response()->json(
                [
                    'code' => ResponseCode::Fail,
                    'msg' => 'token过期',
                    'data' => [],
                ]
            );
        };

        Context::set(Common::USER_DATA,$valid);

        return $handler->handle($request);
    }
}
