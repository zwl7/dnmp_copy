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
use Hyperf\HttpServer\Router\Router;

Router::addRoute(['GET', 'POST', 'HEAD'], '/', 'App\Controller\IndexController@index');

Router::get('/favicon.ico', function () {
    return '';
});

// demo/info
Router::addGroup('/hyperfApi/',function (){

    Router::addGroup('demo/',function (){


        //用户信息
        Router::get('info',[\App\Controller\DemoController::class, 'info'],['middleware' => [\App\Middleware\JwtMiddleware::class]]);

        
        //用户注册
        Router::post('register',[\App\Controller\DemoController::class, 'register']);
        //用户登陆
        Router::post('login',[\App\Controller\DemoController::class, 'login']);

        Router::get('curlTest',[\App\Controller\DemoController::class, 'curlTest']);

        Router::get('test',[\App\Controller\DemoController::class, 'test']);
    });

});
