<?php

declare(strict_types=1);

namespace App\Controller;

use App\Constants\Common;
use App\Constants\RedisKey;
use App\Constants\ResponseCode;
use App\Helpers\Jwt;
use App\Helpers\Log;
use App\Model\GinUser;
use App\Model\User;
use Co\Server;
use Hyperf\Context\Context;
use Hyperf\DbConnection\Db;
use Hyperf\DbConnection\Pool\DbPool;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Utils\Coroutine;
use Hyperf\Validation\Contract\ValidatorFactoryInterface;

class DemoController extends BaseController
{

    /**
     * @Inject()
     * @var ValidatorFactoryInterface
     */
    protected ValidatorFactoryInterface $validationFactory;

    public function index(RequestInterface $request, ResponseInterface $response)
    {
        return $response->raw('Hello Hyperf!');
    }

    public function info()
    {

        $userData = Context::get(Common::USER_DATA);
        //var_dump($userData);

        $user = User::query()->where(['id' => $userData['uid']])->first()->toArray();
        //var_dump($user);


        redis()->incr('num');
        return $this->buildRes(ResponseCode::SUCCESS, trans('messages.success'), ['user' => $user]);
    }

    public function login()
    {
        //接收参数
        $requestData = $this->request->post();

        //传递请求数据和验证规则
        $this->validate($requestData, [
            'name'     => 'required|min:2',
            'password' => 'required',
        ]);

        $userData = User::query()->where(['name' => $requestData['name']])->first(['name', 'password', 'id']);
        if (!$userData) {
            return $this->buildRes(ResponseCode::INVALID, "用户不存在");
        }

        if (!password_verify($requestData['password'], $userData['password'])) {
            return $this->buildRes(ResponseCode::INVALID, "密码错误");
        }

        $token = di()->get(\App\Helpers\Jwt::class)->getToken($userData['id']);
        redis()->set(RedisKey::USER_TOKEN . $userData['id'], $token, config('token_time'));
        return $this->buildRes(ResponseCode::SUCCESS, "登陆成功123", ['token' => $token, 'userId' => $userData['id']]);
    }


    public function register()
    {

        //接收参数
        $requestData = $this->request->post();

        //传递请求数据和验证规则
        $this->validate($requestData, [
            'name'     => 'required|min:2',
            'password' => 'required',
        ]);


        $userData = [
            'name'     => $requestData['name'],
            'password' => password_hash($requestData['password'], PASSWORD_DEFAULT),
        ];
        $userId   = User::query()->insertGetId($userData);


        return $this->buildRes(ResponseCode::SUCCESS, trans('messages.success'), ['userId' => $userId]);

    }


    /**
     * Notes: 发起http请求
     * User: 闻铃
     * DateTime: 2023/4/17 下午6:17
     * @return array
     */
    public function curlTest()
    {
//        $client = httpByGuzzle();
        //$content = $client->request("GET",'https://www.baidu.com')->getBody()->getContents();

        //$params = ['coin'=>"USDT",'network'=>'TRX'];

        //$app = \EasyExchange\Factory::binance(config('binance'));
        //$app->basic->ping();

        // 获取服务器时间112
        //var_dump($app->basic->systemTime());

// 交易规范信息
       // var_dump($app->basic->exchangeInfo());
// 系统状态
//        var_dump($app->basic->systemStatus());

        // 系统状态
//        var_dump($app->basic->systemStatus());

//        var_dump($app->wallet->getAll());//1

        // 获取充值地址 (支持多网络)1
       // $app->market->capitalDepositAddress($params);
        // 获取充值地址
//        $address = $app->wallet->capitalDepositAddress($params);
//        var_dump($address);

        return $this->buildRes(ResponseCode::SUCCESS);

    }

    public function test()
    {


        //测试乐观锁
        /*$user = User::query()->where(['id'=>43021])->select(['version','name','age'])->first();

        if ($user['age'] <= 0) {
            return $this->buildRes(ResponseCode::SUCCESS,'selll out');
        }


        // 启用 SQL 数据记录功能
        //\Hyperf\DbConnection\Db::enableQueryLog();

        $affected = Db::update('UPDATE user set age = age - 1, version = version + 1 WHERE id = ? and version = ?', [43021, $user['version']]);


        //var_dump(\Hyperf\Utils\Arr::last(\Hyperf\DbConnection\Db::getQueryLog()));
        //$updateRes = User::query()->where(['id'=>43021,'version'=>$user['version']])->decrement('age',1);
        return $this->buildRes(ResponseCode::SUCCESS,'test',['updateRes'=>$affected]);*/

        //测试悲观锁

        /*Db::beginTransaction();


        try{

            $user = User::query()->where(['id'=>43021])->lockForUpdate()->select(['age'])->first();

            if ($user['age'] <= 0) {
                Db::rollBack();
                return $this->buildRes(ResponseCode::SUCCESS,'selll out');
            }


            // 启用 SQL 数据记录功能
            //\Hyperf\DbConnection\Db::enableQueryLog();

            $affected = Db::update('UPDATE user set age = age - 1 WHERE id = ?', [43021]);


            //var_dump(\Hyperf\Utils\Arr::last(\Hyperf\DbConnection\Db::getQueryLog()));
            //$updateRes = User::query()->where(['id'=>43021,'version'=>$user['version']])->decrement('age',1);
            Db::commit();
            return $this->buildRes(ResponseCode::SUCCESS,'test',['updateRes'=>$affected]);
        } catch(\Throwable $ex){
            var_dump($ex->getMessage());
            Db::rollBack();
        }*/



//        $data = [];
//        //生成大量数据
//        for ($i=0;$i<10;$i++) {
//
//            $data[] = [
//                'name'=>'demo',
//                'gender'=>mt_rand(1,2),
//            ];
//
//        }
        //sleep(15);
        // var_dump(di()->get(DbPool::class)->getConnectionsInChannel());
        // var_dump(di()->get(DbPool::class)->currentConnections());
//        $res = User::query()->insert($data);
        // sleep(20);

        $res = GinUser::query()->first();
        var_dump($res);
        var_dump(redis()->get("qwe"));

        return $this->buildRes(ResponseCode::SUCCESS,'test',['res'=>$res]);

    }
}
