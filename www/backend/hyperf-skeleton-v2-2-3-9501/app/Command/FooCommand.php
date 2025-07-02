<?php

declare(strict_types=1);

namespace App\Command;

use App\Helpers\Log;
use Hyperf\Command\Command as HyperfCommand;
use Hyperf\Command\Annotation\Command;
use Psr\Container\ContainerInterface;

/**
 * @Command
 */
class FooCommand extends HyperfCommand
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;

        parent::__construct('foo:run');
    }

    public function configure()
    {
        parent::configure();
        $this->setDescription('Hyperf Demo Command');
    }

    public function handle()
    {
        $wg = new \Hyperf\Utils\WaitGroup();
        // 计数器加二
        $count = 200;
        $wg->add($count);
        for ($i = 0;$i<$count;$i++) {
//            Log::HttpLog()->info($i);
             go(function () use ($wg) {
                 $client = httpByGuzzle();
                 $content = $client->request("GET",'http://localhost:9501/demo/test')->getBody()->getContents();
                 Log::commonLog()->info($content);
                 $wg->done();
             });
        }
        $wg->wait();
    }
}
