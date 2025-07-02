<?php



$str = "
     * @apiParam {Number} [province] 省
     * @apiParam {Number} [city] 市
     * @apiParam {Number} [county] 区县
     * @apiParam {Number} [street] 
     * @apiParam {String} [name] 名称
     * @apiParam {Number} [type] 商户类型:1=自然人，2=法人，默认1
     * @apiParam {Number} [open_service_type_ids] 开通的服务类型ids,多个则逗号拼接（服务类型id:1=赛事活动管理，2=场馆管理，3=协会管理，4=运动保障售卖，5=成功体育商品供应商）
     * @apiParam {String} [create_person_phone] 创建人手机号
     * @apiParam {String} [create_person_name] 创建人姓名
     * @apiParam {Number} [status] 状态，1=启用，2=停用，默认1
     * @apiParam {Number} [company_info_type] 公司信息证件类型，1=企业营业执照，默认1
     * @apiParam {String} [company_info_name] 营业执照名称
     * @apiParam {String} [company_info_social_code] 统一社会信用代码
     * @apiParam {String} [company_info_images] 营业执照照片
     * @apiParam {String} [company_info_start_date] 营业执照有效日期start
     * @apiParam {String} [company_info_end_date] 营业执照有效日期end,有可能是长期或者永久
     * @apiParam {String} [company_info_address] 营业执照经营地址
     * @apiParam {Number} [charge_person_type] 负责人证件类型，1=身份证，默认1
     * @apiParam {String} [charge_person_portrait_image] 人像面
     * @apiParam {String} [charge_person_national_image] 国徽面
     * @apiParam {String} [charge_person_name] 姓名
     * @apiParam {String} [charge_person_id_card] 证件号
     * @apiParam {String} [charge_person_start_date] 有效日期start
     * @apiParam {String} [charge_person_end_date] 有效日期end,有可能是长期或者永久
     ";

// 定义正则表达式匹配
//$pattern = '/\* @apiParam \{(\w+)\} \[(\w+)\] ([\x{4e00}-\x{9fa5}\w:,= ]+)/u';
$pattern = '/\* @apiParam \{(\w+)\} \[(\w+)\] ([\x{4e00}-\x{9fa5}\w:：(),，= ]+)/u';

preg_match_all($pattern, $str, $matches, PREG_SET_ORDER);

$fields = [];

foreach ($matches as $match) {
    $field_type = $match[1];
    $key = $match[2];
    $description = $match[3];

    $fields[] = [
        'description' => $description,
        'field_type' => $field_type,
        'key' => $key,
        'not_null' => -1
    ];
}

$json_output = json_encode($fields, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
echo $json_output;
