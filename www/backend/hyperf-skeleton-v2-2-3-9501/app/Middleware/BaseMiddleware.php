<?php

declare(strict_types=1);

namespace App\Middleware;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\Contract\TranslatorInterface;
use Hyperf\Context\Context;

class BaseMiddleware implements MiddlewareInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    protected RequestInterface $request;
    protected TranslatorInterface $translator;

    public function __construct(ContainerInterface $container,RequestInterface $request,TranslatorInterface $translator)
    {
        $this->container = $container;
        $this->request = $request;
        $this->translator = $translator;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        //设置当前请求的多语言
        $langHeader = $this->request->getHeader("Accept-language");
        $langHeader = $langHeader ? $langHeader[0] : "zh_CN" ;
        $lang = config('lang_type');
        $langType = $langHeader;
        if (!in_array($langHeader,$lang)) {
            $langType = 'zh_CN';
        }
        // 只在当前请求或协程生命周期有效
        $this->translator->setLocale($langType);

        // 将 bar 字符串以 foo 为 key 储存到当前协程上下文中
        Context::set('startTime', microtime(true));

        //把请求传递下去
        return $handler->handle($request);
    }

}
