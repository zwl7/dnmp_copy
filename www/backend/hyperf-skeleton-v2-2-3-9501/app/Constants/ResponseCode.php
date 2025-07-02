<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf-cloud/hyperf/blob/master/LICENSE
 */

namespace App\Constants;

use Hyperf\Constants\AbstractConstants;
use Hyperf\Constants\Annotation\Constants;

/**
 * @Constants
 */
class ResponseCode extends AbstractConstants
{
    /**
     * @Message("成功");
     */
    const SUCCESS = 200;

    /**
     * 无效参数 invalid
     * @Message("验证失败");
     */
    const INVALID = 420;

    /**
     * 失败
     * @Message("验证失败");
     */
    const Fail = 422;

    /**
     * 服务异常
     * @Message("验证失败");
     */
    const ERROR = 500;

}
