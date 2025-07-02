<?php



$title = "请求路径：/infoPlatformPkyd/stadium/list--content-type：application/json; charset=UTF-8--蓝绿环境标识：--请求参数：{\"account_id\":1857,\"account_type\":\"21\",\"branch_id\":0,\"company_id\":421,\"mp_id\":69,\"page\":1,\"personnel_id\":900002816,\"size\":10}
[info] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] ------------ServiceData-------------
url:http://192.168.1.212:8100/base/personnel/getByIds
authorization:
参数:array (
  'ids' => '900002816',
  'column' => 'width_branch',
  'app_id' => '10101',
  'nonce_str' => 'qh33w13sw9mg77e1pp8qejm1hln1o8j4',
)
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] 返回数据:{\"code\":200,\"data\":[{\"address\":\"\",\"allow_login\":1,\"app_id\":10101,\"area_id\":0,\"avatar\":\"images/421/member_avatar/20230331/393e7d0ff9fd05b85b5ac2501f634944.png\",\"avatar_url\":\"https://apitest.wesais.cn/images/421/member_avatar/20230331/393e7d0ff9fd05b85b5ac2501f634944.png\",\"birthday\":0,\"branch_id\":0,\"c_time\":1673607741,\"city_id\":0,\"company_id\":421,\"county_id\":0,\"des\":\"超级管理员\",\"down_level_branch\":[],\"email\":\"\",\"entry_date\":0,\"group_id\":0,\"group_ids\":\"\",\"id\":1669,\"identity_card\":\"\",\"identity_ids\":\"\",\"is_papa_worker\":0,\"mobile\":19973323687,\"open_id\":\"\",\"operator\":1,\"personnel_id\":900002816,\"personnel_name\":\"超管\",\"personnel_remark\":\"\",\"province_id\":0,\"role_ids\":\"\",\"sex\":3,\"status\":1,\"u_time\":1733306056,\"up_level_branch\":[{\"branch_id\":12,\"branch_name\":\"网络传媒\",\"group_id\":0},{\"branch_id\":11,\"branch_name\":\"长体教育\",\"group_id\":0},{\"branch_id\":10,\"branch_name\":\"赛事事业部\",\"group_id\":0},{\"branch_id\":9,\"branch_name\":\"党政办公室\",\"group_id\":0},{\"branch_id\":8,\"branch_name\":\"财务部\",\"group_id\":0},{\"branch_id\":7,\"branch_name\":\"场馆事业部\",\"group_id\":0},{\"branch_id\":6,\"branch_name\":\"田游中心\",\"group_id\":0},{\"branch_id\":5,\"branch_name\":\"采购部\",\"group_id\":0},{\"branch_id\":4,\"branch_name\":\"产品部\",\"group_id\":0},{\"branch_id\":3,\"branch_name\":\"研发部\",\"group_id\":0}],\"work_area_ids\":\"\"}],\"message\":\"SUCCESS\"}------------耗时:0.0493
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] SELECT count(*) as num FROM platform_stadium WHERE 1=1 AND company_id = 421    耗时:0.0011
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] select stadium_id,branch_id,street_id,name,icon,phone,start_time,end_time,address,latitude,longitude,images,status,service_status,service_provider,service_related_id,operator,c_time,u_time,community_id,is_recom FROM platform_stadium WHERE 1=1 AND company_id = 421   Order by c_time DESC  Limit 0 ,10     耗时:0.00149
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] select stadium_id,sport_tag_id FROM platform_stadium_sport_tag WHERE 1=1 AND company_id = 421 AND stadium_id in (111,109,108,76,75,74,49,45,44,37)      耗时:0.00138
[info] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] ------------ServiceData-------------
url:http://192.168.1.212:8100/base/sysOption/list
authorization:
参数:array (
  'type' => 1,
  'account_id' => 1857,
  'account_type' => '21',
  'company_id' => 421,
  'personnel_id' => 900002816,
  'app_id' => '10101',
  'nonce_str' => 'qt0c0hh9eih16tw7vdwc25m8v26qb1nu',
)
[info] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] ------------ServiceData-------------
url:http://192.168.1.212:8100/base/personnel/getByIds
authorization:
参数:array (
  'ids' => '0,0,0,900002816,900002816,900002816,900002816,900002816,900002816,900002816',
  'column' => 'personnel_name,personnel_id',
  'account_id' => 1857,
  'account_type' => '21',
  'company_id' => 421,
  'personnel_id' => 900002816,
  'app_id' => '10101',
  'nonce_str' => 'w1mkgklik3vpvtiueoodi9ujnqjnlwqv',
)
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] 返回数据:{\"code\":200,\"data\":[{\"id\":1669,\"app_id\":10101,\"company_id\":421,\"personnel_id\":900002816,\"open_id\":\"\",\"role_ids\":\"\",\"personnel_name\":\"超管\",\"sex\":3,\"mobile\":19973323687,\"birthday\":0,\"identity_card\":\"\",\"avatar\":\"images/421/member_avatar/20230331/393e7d0ff9fd05b85b5ac2501f634944.png\",\"province_id\":0,\"city_id\":0,\"county_id\":0,\"work_area_ids\":\"\",\"address\":\"\",\"email\":\"\",\"des\":\"超级管理员\",\"personnel_remark\":\"\",\"status\":1,\"entry_date\":0,\"allow_login\":1,\"operator\":1,\"identity_ids\":\"\",\"group_id\":0,\"group_ids\":\"\",\"branch_id\":0,\"is_papa_worker\":0,\"u_time\":1733306056,\"c_time\":1673607741}],\"message\":\"SUCCESS\"}------------耗时:0.0107
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] select * FROM platform_community WHERE 1=1 AND company_id = 421 AND community_id in (0)   Order by id DESC  Limit 0 ,1000     耗时:0.00103
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] ------------sql总耗时:0.005----------------------
[debug] 2025-06-26 14:26:08 <sys-21-21685ce800a8e00> [message] ------------请求耗时:0.0426----------------------
";



var_dump(strlen($title));

