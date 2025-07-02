<?php

use Hyperf\Crontab\Crontab;

return [
    // 是否开启定时任务
    'enable' => false,

    // 通过配置文件定义的定时任务
    'crontab' => [

        // Callback类型定时任务（默认）每两秒执行一次 // * * * * * * 秒 分 时 日 月 周
        (new Crontab())->setName('testCrontab')->setRule('*/2 * * * * *')->setCallback([App\Task\TestTask::class, 'execute'])->setMemo('这是一个示例的定时任务'),


        // Command类型定时任务
        /*(new Crontab())->setType('command')->setName('Bar')->setRule('* * * * *')->setCallback([
            'command' => 'swiftmailer:spool:send',
            // (optional) arguments
            'fooArgument' => 'barValue',
            // (optional) options
            '--message-limit' => 1,
            // 记住要加上，否则会导致主进程退出
            '--disable-event-dispatcher' => true,
        ]),*/
    ],

];
