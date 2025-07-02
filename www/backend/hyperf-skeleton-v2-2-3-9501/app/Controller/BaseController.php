<?php

declare(strict_types=1);

namespace App\Controller;

use App\Helpers\Log;
use Hyperf\Validation\Contract\ValidatorFactoryInterface;
use App\Constants\ResponseCode;
use App\Exception\ValidateException;
use Hyperf\Context\Context;
use Hyperf\Utils\Codec\Json;

class BaseController extends AbstractController
{
    /**
     * Notes: 自定义控制器验证器
     * User: 闻铃
     * DateTime: 2023/3/29 下午12:36
     * @param mixed ...$arg
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    protected function validate(...$arg)
    {
        $validator = di()->get(ValidatorFactoryInterface::class)->make(...$arg);
        if ($validator->fails()) {
            throw new ValidateException($validator->errors()->first(), ResponseCode::Fail);
        }
    }

    public function buildRes(int $code = 200, string $msg = "success", $data = []): array
    {
        $startTime    = Context::get('startTime');
        $responseData = ['code' => $code, 'msg' => $msg, 'data' => humpUnderlineConversion($data, 1)];
        $this->buildHttpInfo($startTime, $responseData);
        return $responseData;
    }

    /**
     * Notes:记录http请求和响应
     * User: 闻铃
     * DateTime: 2023/3/29 下午3:29
     * @param $startTime
     * @param $responseData
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function buildHttpInfo($startTime, $responseData)
    {
        $time  = microtime(true) - $startTime;
        $debug =  PHP_EOL. '---start---' . PHP_EOL;
        $debug .= 'URI: ' . $this->request->url() . PHP_EOL;
        $debug .= 'Method: ' . $this->request->getMethod() . PHP_EOL;

        $debug .= 'REQUEST_HEADERS: ' . Json::encode($this->request->getHeaders()) . PHP_EOL;
        $debug .= 'REQUEST_BODY: ' . Json::encode($this->request->all()) . PHP_EOL;

        $debug .= 'RESPONSE: ' . Json::encode($responseData) . PHP_EOL;

        $debug .= 'TIME: ' . $time . PHP_EOL;
        $debug .= '---end---' . PHP_EOL;

        Log::HttpLog()->info($debug);
    }

}
