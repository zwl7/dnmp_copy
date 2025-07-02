<?php

//我给你这样一个格式的字符串 你帮我返回一个sql语句
//SELECT `id`, `app_id`, `company_id`, `business_id`, `contest_id`, `committee_id`, `project_id`, `manage_id`, `funds`, `type`, `project_limit`, `name`, `apply_start`, `apply_end`, `date_start`, `date_end`, `age_start`, `age_end`, `status`, `operator_id`, `link`, `area`, `kind`, `des`, `duty_des`, `banner`, `safe_money`, `safe_des`, `safe_type`, `click_time`, `share_time`, `collection_time`, `address`, `longitude`, `latitude`, `organizer_unit`, `undertake_unit`, `assist_unit`, `sponsor_unit`, `confirm_man`, `confirm_time`, `confirm_status`, `arrange_info`, `fields`, `audit_type`, `exit_channel`, `begin_notice`, `notice_time`, `insurance_switch`, `insurance_requirement`, `insurance_product_id`, `u_time`, `c_time` FROM `ppospro_contest` WHERE (status = ?) AND (date_start >= ?) ORDER BY id desc [1 1743487500]

function parseAndReplaceSql($input) {
    // 分离 SQL 和数据部分
    if (preg_match('/^(.*?)\s*\[(.*?)\]$/', trim($input), $matches)) {
        $sql = $matches[1];
        $data = explode(' ', trim($matches[2]));
        
        // 替换 SQL 中的问号
        $index = 0;
        $sql = preg_replace_callback('/\?/', function() use (&$data, &$index) {
            $value = $data[$index++];
            
            // 判断是否为数字
            if (is_numeric($value)) {
                return $value;
            } else {
                // 非数字添加引号
                return "'" . addslashes($value) . "'";
            }
        }, $sql);
        
        return $sql;
    }
    
    return "输入格式错误";
}

// 测试用例
$input = " SELECT `id`, `app_id`, `company_id`, `business_id`, `small_project_id`, `project_id`, `contest_id`, `group_id`, `apply_type`, `event_show`, `event_status`, `name`, `checkin_quantity`, `pre_project_limit`, `max_quantity`, `pass_quantity`, `quantity`, `apply_quantity`, `boy_quantity`, `girl_quantity`, `is_onlinepay`, `price`, `seed_num`, `operator_id`, `score_order`, `score_status`, `score_publish_time`, `u_time`, `c_time` FROM `ppospro_contest_small_project` WHERE (app_id = ? ) AND (company_id = ? ) AND (business_id = ? ) AND (group_id = ?) [10101 811 10000812 844]";
$result = parseAndReplaceSql($input);

// 输出结果
echo "转换后的 SQL：\n";
echo $result . "\n";

?>

