<?php

declare(strict_types=1);

namespace App\Listener;

use App\Helpers\Log;
use Hyperf\Crontab\Event\FailToExecute;
use Hyperf\Event\Annotation\Listener;
use Hyperf\Event\Contract\ListenerInterface;

/**
 * @Listener
 */
class FailToExecuteCrontabListener implements ListenerInterface
{
    public function listen(): array
    {
        return [
            FailToExecute::class,
        ];
    }

    /**
     * @param FailToExecute $event
     */
    public function process(object $event)
    {
        Log::crontabLog()->error("name:".$event->crontab->getName().PHP_EOL."msg:".$event->throwable->getMessage().PHP_EOL);
    }
}
