<?php


namespace App\Exception\Handler;


use App\Constants\ResponseCode;
use Hyperf\ExceptionHandler\ExceptionHandler;
use Psr\Http\Message\ResponseInterface;
use Throwable;
use Hyperf\HttpMessage\Stream\SwooleStream;
use App\Exception\ValidateException;

class ValidateExceptionHandler extends ExceptionHandler
{
    /**
     * Notes: Handle the exception, and return the specified result.
     * User: 闻铃
     * DateTime: 2023/3/29 下午12:32
     * @param Throwable $throwable
     * @param ResponseInterface $response
     * @return ResponseInterface
     */
    public function handle(Throwable $throwable, ResponseInterface $response)
    {

        // 判断被捕获到的异常是希望被捕获的异常
        if ($throwable instanceof ValidateException) {
            // 格式化输出
            $data = json_encode([
                'code'    => $throwable->getCode(),
                'message' => $throwable->getMessage(),
                'data' => [],
            ], JSON_UNESCAPED_UNICODE);

            // 阻止异常冒泡
            $this->stopPropagation();
            return $response->withStatus(ResponseCode::Fail)->withBody(new SwooleStream($data));
        }

        // 交给下一个异常处理器
        return $response;
    }

    /**
     * @param Throwable $throwable
     * Determine if the current exception handler should handle the exception,.
     *
     * @return bool
     * If return true, then this exception handler will handle the exception,
     * If return false, then delegate to next handler
     */
    public function isValid(Throwable $throwable): bool
    {
        return $throwable instanceof ValidateException;
    }
}
