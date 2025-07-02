<?php

namespace PPOSLib\Helpers;

use PPOSLib\Exception\PPosException;
use Ppospro\PAGE\Helpers\HttpService;

/**
 * Class ServiceData
 * @package PPOSLib\Helpers
 */
class ServiceData extends HttpService
{


	private $zones = [
		//'dataList' => '/base/personnel/getByIds',
		'getInfoByCp' => '/base/account/getInfoByCp',
		'getStatisticDetailHeadTitle' => '/statistic/tableConfig/getTableConfigOne',
		'getCommunityBranches' => '/infoPlatform/deviceRecordSetting/getBranches',
		'getDeviceRepair' => '/infoPlatform/deviceRepair/get',
		'updateDeviceRepair' => '/infoPlatform/deviceRepair/update',
		'getPersonnelList' => '/base/personnel/list',
		'getMembersByIds' => '/infoPlatform/wxMember/getByMemberIds',
		'getIdentityPerson' => '/infoPlatform/productFactory/getIdentityPerson',
		'getPersonnels' => '/base/cashier/personnel',
		'getFields' => '/infoPlatform/wxField/all',
		'getOneField'=> '/infoPlatform/wxField/getOne',
        'getMemberByKeyword' => '/infoPlatform/wxMember/getMemberByKeyword',//巡检 -> 关键字搜索会员
        'getDeviceRepairListAll' => '/infoPlatform/deviceRepair/listAll',//巡检 -> 关键字搜索报修信息
		'getDevices' => '/infoPlatform/wxDevice/all',
		'getDeviceRecord' => '/infoPlatform/deviceRecord/get',
		'getDeviceRepairs' => '/infoPlatform/wxDeviceRepair/list',
		'getDeviceRecords' => '/infoPlatform/wxDeviceRecord/list',
		'getOpenStadiumClearingSumListHeadTitle' => '/statistic/stadiumUnionClearing/openStadiumSumListHeader',
		'getStadiumGoodExportHeadTitle' => '/statistic/good/getStadiumGoodExportHeader',
		'getActivityApplicantExportHeadTitle' => '/infoPlatform/activity/applicantDetailedHeader',
		'getMemberInfo' => '/member/member/getInfo',
		'getMemberList' => '/member/member/gets',
		'getWxCommunity' => '/infoPlatform/wxCommunity/list',
		'getPayOrderInfo' => '/shop/order/getInfo',
		'getTotalOrderInfo' => '/shop/order/getByIds',  			//获取父订单下的所有子单和item
		'getRefundTotalOrderInfo' => '/shop/order/getRefundByIds',  //获取反向单父订单下的所有子单和item
		'getShopRefundPrice' => '/shop/refund/getPrice',  			//获取退单价格
		'getShopRefundOrderInfo' => '/shop/refund/getInfo',  			//退单详情
		'paymentWayList' => '/cfg/cfgPaymentWay/list', //获取支付方式
		'operator' => '/base/personnel/getByIds',   				//
		'getOperatorInfo' => '/base/personnel/get',   				//
		'getRoleInfo' => '/base/role/get',   				//
		'getMpList' => '/base/mp/list',   				//
		'getBusinessByIds' => '/base/business/getByIds',   				//
		'getStadiumByIds' => '/base/stadium/getByIds',   				//
		'getSalePointByIds' => '/base/salesPoint/getByIds',   				//
		'getAuthInfo' => '/base/auth/get',   				//
		'stadiumById' => '/base/stadium/get',
        'sendMessage' => '/wxMp/message/send', // 发送短信,微信公众号推送

		'orderAuditNotice' => '/shop/order/auditNotice',  			//正向单审批通知
		'refundAuditNotice' => '/shop/order/auditRefundNotice',  	//退单审批通知
		'getAnswerExportHeadTitle' => '/notice/question/getAnswerExportHeadTitle',
		'getTradeTypeInfo' => '/cfg/cfgTrade/getById',  //业务类型详情(小类)
		'getProjectRequirementInfo' => '/events/contestProjectRequirement/get',  //赛事项目需求书申请信息
		'getFieldApplicationInfo' => '/events/contestFieldApplication/get',  //赛事场地申请信息
		'getProjectRequirementByIds' => '/events/contestProjectRequirement/gets',  //赛事项目需求书申请信息(多条)
		'getFieldApplicationByIds' => '/events/contestFieldApplication/gets',  //赛事场地申请信息(多条)
		'projectRequirementAuditNotice' => '/events/contestProjectRequirement/approveNotice',  //赛事项目需求书申请审批通知
		'fieldApplicationAuditNotice' => '/events/contestFieldApplication/approveNotice',  //赛事场地申请审批通知

		'getEnterTeamApplyInfo' => '/talent/enterTeamApply/getInfo',  //后备人才进队申请信息
		'getEnterTeamApplyByIds' => '/talent/enterTeamApply/getByIds',  //后备人才进队申请信息(多条)
		'enterTeamApplyAuditNotice' => '/talent/enterTeamApply/approveNotice',  //后备人才进队申请审批通知

		'getLeaveTeamApplyInfo' => '/talent/leaveTeamApply/getInfo',  //后备人才离队申请信息
		'getLeaveTeamApplyByIds' => '/talent/leaveTeamApply/getByIds',  //后备人才离队申请信息(多条)
		'leaveTeamApplyAuditNotice' => '/talent/leaveTeamApply/approveNotice',  //后备人才离队申请审批通知

		'getLeaveApplyInfo' => '/talent/leaveApply/getInfo',  //后备人才请假申请信息
		'getLeaveApplyByIds' => '/talent/leaveApply/getByIds',  //后备人才请假申请信息(多条)
		'leaveApplyAuditNotice' => '/talent/leaveApply/approveNotice',  //后备人才请假申请审批通知
		'getByCfgCode' => '/cfg/cfgCommon/getByCode',
		'getByOrderNos' => '/shop/order/getByOrderNo',
		'getMemberByMobiles' => '/member/member/getByMobiles',
		'getCfgInvoice' => '/cfg/cfgInvoiceBusiness/get',
		'invoiceNotice' => '/shop/order/invoiceNotice',
		'getOrderInvoiceStatus' => '/field/fieldOrderDetail/getOrderInvoiceStatus',
		'getCompanyBusinessList' => '/base/business/gets',     //获取公司下的中心列表
		'getWxCfg' => '/wxMp/public/get',
		'dataWithdraw' => '/statistic/memberCardRecord/dataWithdraw', // 删除报表中的导入数据
		'studentClassImportClean' => '/class/student/studentClassImportClean', // 学员课时导入数据清理
		'cardImportClean' => '/member/memberCard/cardImportClean', // 会员卡导入数据清理
		'groundList' => '/field/ground/getList', // 场区列表
		'ticketGets' => '/ticket/ticket/gets', // 门票列表
		'cardWorkDataCleaning' => '/cardWork/memberCard/dataCleaning', // 按照场馆清理会员卡订单
		'classDataCleaning' => '/class/student/dataCleaning', // 按照场馆清理学员信息
		'enterAdminDataCleaning' => '/enterAdmin/enterRecord/dataCleaning', // 按照场馆清理出入馆、手环借还信息
		'fieldDataCleaning' => '/field/field/dataCleaning', // 按照场馆清理场地订单、记录信息
		'goodsDataCleaning' => '/goods/goods/dataCleaning', // 按照场馆清理商品订单
		'leaseDataCleaning' => '/lease/leaseProduct/dataCleaning', // 按照场馆清理租赁订单
		'memberDataCleaning' => '/member/member/dataCleaning', // 按照场馆清理会员信息
		'ticketDataCleaning' => '/ticket/ticket/dataCleaning', // 按照场馆清理门票信息
		'statisticDataCleaning' => '/statistic/dataConfig/dataCleaning', // 按照场馆清理报表信息
		'statisticDataCleaning2' => '/statistic/dataConfig/dataCleaning2', // 按照场馆清理报表信息
		'shopDataCleaning' => '/shop/order/dataCleaning', // 按照场馆清理订单信息
		'cosDataCleaning' => '/cos/order/dataCleaning', // 按照场馆清理通用订单信息
		'businessList' => '/base/business/find', //
		'instructionEdit' => '/cfg/instruction/edit', //
        'stateRefundOrder' => '/shop/refund/state',  	//退款订单状态
        'refund' => '/shop/order/refund',
        'getCfgDigitalInvoice' => '/cfg/cfgInvoiceDigitalElectricity/get',//获取数电发票配置
        'sendMessageNew' => '/mc/message/send',
        'getCardTypeInfo' => '/member/cardType/getInfo',
        'groundGets' => '/field/ground/groundGets',
        'goodsGets' => '/goods/goods/goodsGets',
        'getCosInfo' => '/cos/product/getName',//获取通用产品
        'getCourseInfo' => '/class/course/gets',//获取通用产品
        'getLeaseInfo' => '/lease/leaseProduct/getAll',//获取通用产品
        'getLevelingApplyInfo' => '/memberMiddlePlatform/levelingApply/getInfo',  //会员中台调平申请信息获取
        'levelingApplyAuditNotice' => '/memberMiddlePlatform/levelingApply/approveNotice',  //会员中台调平申请信息获取
        'getLevelingApplyByIds' => '/memberMiddlePlatform/levelingApply/getByIds',  //会员中台根据申请id获取信息

        'getAssetsInOutApply' => '/assets/streamWarehouse/getAllEquipment',  //获取物业管理的出库和入库审核信息

        'getAssetsRepairApply' => '/assets/reportRepair/get',  //获取物业管理的报修工单信息
	];



	public function __construct()
	{
		parent::__construct();
	}

    public function getLeaseInfo($product_ids,$column)
    {
        $url = $this->host . $this->zones['getLeaseInfo'];
        $body['product_ids'] = $product_ids;
        $body['column'] = $column;
        return $this->sendRequest($url, "POST", $body);
    }

    public function getCourseInfo($product_ids,$column)
    {
        $url = $this->host . $this->zones['getCourseInfo'];
        $body['course_ids'] = $product_ids;
        $body['column'] = $column;
        return $this->sendRequest($url, "POST", $body);
    }

    public function getCosInfo($business_id){
        $url = $this->host.$this->zones['getCosInfo'];
        $body = array();
        $body["business_id"]= $business_id;
        return $this->sendRequest($url,"POST",$body);
    }

    public function goodsGets($product_ids,$column)
    {
        $url = $this->host . $this->zones['goodsGets'];
        $body['product_ids'] = $product_ids;
        $body['column'] = $column;
        return $this->sendRequest($url, "POST", $body);
    }

    public function groundGets($product_ids,$column)
    {
        $url = $this->host . $this->zones['groundGets'];
        $body['ground_ids'] = $product_ids;
        $body['column'] = $column;
        return $this->sendRequest($url, "POST", $body);
    }

    public function getCardTypeInfo($product_ids,$column)
    {
        $url = $this->host . $this->zones['getCardTypeInfo'];
        $body['product_ids'] = $product_ids;
        $body['column'] = $column;
        return $this->sendRequest($url, "POST", $body);
    }

    public function instructionEdit($data)
    {
        $url = $this->host . $this->zones['instructionEdit'];
        $body = $data;
        return $this->sendRequest($url, "POST", $body);
    }

    public function businessList()
    {
        $url = $this->host . $this->zones['businessList'];
        $body = [];
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * Notes:发送短信,微信公众号推送
     * User: zouqin
     * Email: qin.zou@papa.com.cn
     * Date: 20-10-26
     * Time: 下午9:03
     * @return array
     * @throws PPosException
     */
    public function sendMessage($data)
    {
        $url = $this->host . $this->zones['sendMessage'];
        $body = $data;
        //        if(env("APP_ENV")=="LOCAL" || env("APP_ENV")=="DEV"){
        //            return [];
        //        }
        return $this->sendRequest($url, "POST", $body);
    }

	/**
	 * Notes:获取场馆名称
	 * @return array
	 * @throws PPosException
	 */
	public function stadiumById($id)
	{
		if (!$id) {
			return [];
		}
		$url = $this->host . $this->zones['stadiumById'];
		$body["stadium_id"] = $id;
		return $this->sendRequest($url, "POST", $body);
	}

	public function cosDataCleaning($data)
	{
		$url = $this->host . $this->zones['cosDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function shopDataCleaning($data)
	{
		$url = $this->host . $this->zones['shopDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function statisticDataCleaning2($data)
	{
		$url = $this->host . $this->zones['statisticDataCleaning2'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function statisticDataCleaning($data)
	{
		$url = $this->host . $this->zones['statisticDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function ticketDataCleaning($data)
	{
		$url = $this->host . $this->zones['ticketDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function memberDataCleaning($data)
	{
		$url = $this->host . $this->zones['memberDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function leaseDataCleaning($data)
	{
		$url = $this->host . $this->zones['leaseDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function goodsDataCleaning($data)
	{
		$url = $this->host . $this->zones['goodsDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function fieldDataCleaning($data)
	{
		$url = $this->host . $this->zones['fieldDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function enterAdminDataCleaning($data)
	{
		$url = $this->host . $this->zones['enterAdminDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function classDataCleaning($data)
	{
		$url = $this->host . $this->zones['classDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function cardWorkDataCleaning($data)
	{
		$url = $this->host . $this->zones['cardWorkDataCleaning'];
		$body["stadium_id"] = $data['stadium_id'];
		$body["type"] = $data['type'];
		return $this->sendRequest($url, "POST", $body);
	}

	public function ticketGets($ticket_ids, $column = '')
	{
		$url = $this->host . $this->zones['ticketGets'];
		$body["ticket_ids"] = $ticket_ids;
		$body["column"] = $column;
		return $this->sendRequest($url, "POST", $body);
	}

	public function groundList($page = 1, $size = 10)
	{
		$url = $this->host . $this->zones['groundList'];
		$body["page"] = $page;
		$body["size"] = $size;
		return $this->sendRequest($url, "POST", $body);
	}

	// 会员卡导入数据清理
	public function cardImportClean($data)
	{
		$url = $this->host . $this->zones['cardImportClean'];
		return $this->sendRequest($url, "POST", $data);
	}

	// 学员课时导入数据清理
	public function studentClassImportClean($data)
	{
		$url = $this->host . $this->zones['studentClassImportClean'];
		return $this->sendRequest($url, "POST", $data);
	}

	// 删除报表中的导入数据
	public function dataWithdraw($data)
	{
		$url = $this->host . $this->zones['dataWithdraw'];
		return $this->sendRequest($url, "POST", $data);
	}

	public function getWxCfg($company_id)
	{
		if (!$company_id) {
			return [];
		}
		$url = $this->host . $this->zones['getWxCfg'];
		$body["company_id"] = $company_id;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getCompanyBusinessList($company_id, $column = '', $status = null)
	{
		$url = $this->host . $this->zones['getCompanyBusinessList'];
		$body["company_id"] = $company_id;
		$body["column"] = $column;
		if ($status !== null) {
			$body["status"] = $status;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	public  function  getCommunityList($longitude, $latitude)
	{
		$url = $this->host . $this->zones['getWxCommunity'];
		$body["longitude"] = $longitude;
		$body["latitude"] = $latitude;
		return $this->sendRequest($url, "POST", $body);
	}

	public  function  getCommunityBranches($communityId)
	{
		$url = $this->host . $this->zones['getCommunityBranches'];
		$body["community_id"] = $communityId;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getIdentityPerson($factoryId, $identityId)
	{
		$url = $this->host . $this->zones['getIdentityPerson'];
		$body["factory_id"] = $factoryId;
		$body["identity_id"] = $identityId;
		return $this->sendRequest($url, "POST", $body);
	}
	public function getOrderInvoiceStatus($order_nos)
	{
		$url = $this->host . $this->zones['getOrderInvoiceStatus'];
		$body["order_nos"] = $order_nos;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getAuthInfo($auth_id)
	{
		$url = $this->host . $this->zones['getAuthInfo'];
		$body["auth_id"] = $auth_id;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getRoleInfo($role_id)
	{
		$url = $this->host . $this->zones['getRoleInfo'];
		$body["role_id"] = $role_id;
		return $this->sendRequest($url, "POST", $body);
	}

	public  function getPersonnelList($page, $size, $postBranchId = 0, $search = [])
	{
		$url = $this->host . $this->zones['getPersonnelList'];
		$body["page"] = $page;
		$body["size"] = $size;
		if ($postBranchId) {
			$body["post_branch_id"] = $postBranchId;
		}
		if (isset($search['keyword'])){
            $body["keyword"] = $search['keyword'];
        }
        if (isset($search['status'])){
            $body["status"] = $search['status'];
        }
		return $this->sendRequest($url, "POST", $body);
	}

	public function getMpList($page = 1, $size = 10)
	{
		$url = $this->host . $this->zones['getMpList'];
		$body["page"] = $page;
		$body["size"] = $size;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getBusinessByIds(array $ids, $column = "")
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getBusinessByIds'];
		$body["ids"] = implode(",", $ids);
		$body["column"] = $column;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getStadiumByIds(array $ids, $column = "")
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getStadiumByIds'];
		$body["ids"] = implode(",", $ids);
		$body["column"] = $column;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getSalePointByIds(array $ids, $column = "")
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getSalePointByIds'];
		$body["ids"] = implode(",", $ids);
		$body["column"] = $column;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 *Notes:获取会员列表
	 */
	public function getMemberList(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getMemberList'];
		$body["member_ids"] = implode(",", $ids);;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 子订单发票状态更新
	 * @param $data
	 * @return array
	 */
	public function invoiceNotice($data = array())
	{
		$url = $this->host . $this->zones['invoiceNotice'];
		$body["data"] = json_encode($data);
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才进队申请信息
	 * @param $related_no
	 * @return array
	 */
	public function getEnterTeamApplyInfo($related_no)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getEnterTeamApplyInfo'];
		$body["apply_id"] = $related_no;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才进队申请信息(多条)
	 * @param $ids
	 * @return array
	 */
	public function getEnterTeamApplyByIds(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getEnterTeamApplyByIds'];
		$body["ids"] = implode(",", $ids);
		return $this->sendRequest($url, "POST", $body);
	}

	// 获取用户信息
	public function getInfoByCp()
	{
		$url = $this->host . $this->zones['getInfoByCp'];
		return $this->sendRequest($url, "POST", null);
	}

	/**
	 * 后备人才进队申请审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function enterTeamApplyAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['enterTeamApplyAuditNotice'];
		$body["related_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才离队申请信息
	 * @param $related_no
	 * @return array
	 */
	public function getLeaveTeamApplyInfo($related_no)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getLeaveTeamApplyInfo'];
		$body["apply_id"] = $related_no;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才离队申请信息(多条)
	 * @param $ids
	 * @return array
	 */
	public function getLeaveTeamApplyByIds(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getLeaveTeamApplyByIds'];
		$body["ids"] = implode(",", $ids);
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才离队申请审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function leaveTeamApplyAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['leaveTeamApplyAuditNotice'];
		$body["related_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才请假申请信息
	 * @param $related_no
	 * @return array
	 */
	public function getLeaveApplyInfo($related_no)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getLeaveApplyInfo'];
		$body["apply_id"] = $related_no;
		return $this->sendRequest($url, "POST", $body);
	}

	public function updateDeviceRepair($data)
	{
		if (empty($data) || !isset($data['device_repair_id'])) {
			return [];
		}
		$url = $this->host . $this->zones['updateDeviceRepair'];
		return $this->sendRequest($url, "POST", $data);
	}


	/**
	 * 设备维修
	 * @param $related_no
	 * @return array
	 */
	public function getDeviceRepair($related_no)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getDeviceRepair'];
		$body["device_repair_id"] = $related_no;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getPersonnels()
	{
		$url = $this->host . $this->zones['getPersonnels'];
		$body = [];
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 根据id获取多个设备维修记录
	 * @param $body
	 * @return array
	 */
	public function getDeviceRepairs($body)
	{
		if (empty($body)) {
			return [];
		}
		$body["page"] = 1;
		$body["size"] = 1000;
		$url = $this->host . $this->zones['getDeviceRepairs'];
		return $this->sendRequest($url, "POST", $body);
	}


	/**
	 * 设备巡检
	 * @param $related_no
	 * @return array
	 */
	public function getDeviceRecord($related_no)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getDeviceRecord'];
		$body["device_record_id"] = $related_no;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 根据id获取多个设备巡检记录
	 * @param $deviceRecordIds
	 * @return array
	 */
	public function getDeviceRecords($body)
	{
		if (empty($body)) {
			return [];
		}
		$url = $this->host . $this->zones['getDeviceRecords'];
		$body["page"] = 1;
		$body["size"] = 1000;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才请假申请信息(多条)
	 * @param $ids
	 * @return array
	 */
	public function getLeaveApplyByIds(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getLeaveApplyByIds'];
		$body["ids"] = implode(",", $ids);
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 后备人才请假申请审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function leaveApplyAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['leaveApplyAuditNotice'];
		$body["related_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事项目需求书申请信息(多条)
	 * @param $ids
	 * @return array
	 */
	public function getProjectRequirementByIds(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getProjectRequirementByIds'];
		$body["ids"] = implode(",", $ids);
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事场地申请信息(多条)
	 * @param $ids
	 * @return array
	 */
	public function getFieldApplicationByIds(array $ids)
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['getFieldApplicationByIds'];
		$body["ids"] = implode(",", $ids);
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事项目需求书申请信息
	 * @param $related_no
	 * @return array
	 */
	public function getProjectRequirementInfo($related_no, $business_id = null)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getProjectRequirementInfo'];
		$body["project_requirement_id"] = $related_no;
		if ($business_id !== null) {
			$body["business_id"] = $business_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事场地申请信息
	 * @param $related_no
	 * @return array
	 */
	public function getFieldApplicationInfo($related_no, $business_id = null)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['getFieldApplicationInfo'];
		$body["field_application_id"] = $related_no;
		if ($business_id !== null) {
			$body["business_id"] = $business_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	public function getTradeTypeInfo($trade_type_id)
	{
		if (!$trade_type_id) {
			return [];
		}
		$url = $this->host . $this->zones['getTradeTypeInfo'];
		$body["trade_type_id"] = $trade_type_id;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 正向单审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function orderAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['orderAuditNotice'];
		$body["parent_order_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 退单审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function refundAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info, $audit_position=2)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['refundAuditNotice'];
		$body["parent_order_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		$body["action_position"] = $audit_position;  //审批所处位置类型
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事项目需求书申请审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function projectRequirementAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['projectRequirementAuditNotice'];
		$body["related_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 赛事场地申请审批通知
	 * @param $related_no
	 * @param $action_type
	 * @param $check_id
	 * @param $check_time
	 * @return array
	 */
	public function fieldApplicationAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
	{
		if (!$related_no) {
			return [];
		}
		$url = $this->host . $this->zones['fieldApplicationAuditNotice'];
		$body["related_no"] = $related_no;
		$body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
		$body["check_id"] = $check_id;  ///最终审批人
		$body["check_time"] = $check_time;  //最终审批时间
		$body["action_info"] = $action_info;  //最终审批备注
		return $this->sendRequest($url, "POST", $body);
	}

	public function getOperatorInfo($personnel_id)
	{
		$url = $this->host . $this->zones['getOperatorInfo'];
		$body["post_personnel_id"] = $personnel_id;
		return $this->sendRequest($url, "POST", $body);
	}

	public function operator(array $ids, $column = "")
	{
		if (!$ids) {
			return [];
		}
		$url = $this->host . $this->zones['operator'];
		$body["ids"] = implode(",", $ids);
		$body["column"] = $column;
		$body['column'] = 'width_branch';
		return $this->sendRequest($url, "POST", $body);
	}

	public function paymentWayList($status = null, $business_id = null)
	{
		$url = $this->host . $this->zones['paymentWayList'];
		$body = array();
		if ($status !== null) {
			$body["status"] = $status;
		}
		if ($business_id !== null) {
			$body["business_id"] = $business_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	public function getShopRefundOrderInfo($parent_order_no)
	{
		if (!$parent_order_no) {
			return [];
		}
		$url = $this->host . $this->zones['getShopRefundOrderInfo'];
		$body["parent_order_no"] = $parent_order_no;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getShopRefundPrice($parent_order_no, $sku_items)
	{
		if (!$parent_order_no) {
			return [];
		}
		$url = $this->host . $this->zones['getShopRefundPrice'];
		$body["parent_order_no"] = $parent_order_no;
		$body["sku_items"] = json_encode($sku_items);
		return $this->sendRequest($url, "POST", $body);
	}

	public function getTotalOrderInfo($parent_order_no)
	{
		if (!$parent_order_no) {
			return [];
		}
		$url = $this->host . $this->zones['getTotalOrderInfo'];
		$body["parent_order_no"] = $parent_order_no;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getRefundTotalOrderInfo($parent_order_no)
	{
		if (!$parent_order_no) {
			return [];
		}
		$url = $this->host . $this->zones['getRefundTotalOrderInfo'];
		$body["parent_order_no"] = $parent_order_no;
		return $this->sendRequest($url, "POST", $body);
	}

	public function getPayOrderInfo($order_no, $parent_order_no)
	{
		if (!$order_no || !$parent_order_no) {
			return [];
		}
		$url = $this->host . $this->zones['getPayOrderInfo'];
		$body["order_no"] = $order_no;
		$body["parent_order_no"] = $parent_order_no;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 *Notes:获取会员信息(包含会员下的所有卡信息)
	 *User:huangzhen
	 *Email:zhen.huang@papa.com.cn
	 *Date:19-11-27
	 *Time:上午9:43
	 * @param $keyword   //手机号/用户名/卡号/物理卡号
	 * @param $member_id   //会员id
	 * @return mixed
	 * @throws PPosException
	 */
	public function getMemberInfo($keyword = null, $member_id = null, $with_card = null, $company_id = null)
	{
		$url = $this->host . $this->zones['getMemberInfo'];
		if (empty($keyword) && empty($member_id)) {
			return [];
		}
		$body = [];
		if (!empty($keyword)) {
			$body["keyword"] = $keyword;
		}
		if (!empty($member_id)) {
			$body["member_id"] = $member_id;
		}
		if (!empty($with_card)) {
			$body["with_card"] = $with_card;
		}
		if (!empty($company_id)) {
			$body["company_id"] = $company_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	public function headTitle($api_path, $body)
	{
		if (!$body) {
			return [];
		}
		$url = $this->host . $api_path;
		$data =  $this->sendRequest($url, "POST", $body, 1, false);
		return array_column($data["details_str"], "columnName", "columnKey");
	}

	//答卷导出表头
	public function getAnswerExportHeadTitle($param = array())
	{
		if (!$param) {
			return [];
		}
		$body["question_id"] = isset($param["question_id"]) ? $param["question_id"] : 0;
		$body["company_id"] = isset($param["company_id"]) && !empty($param["company_id"]) ? $param["company_id"] : 0;
		$url = $this->host . $this->zones['getAnswerExportHeadTitle'];
		$data =  $this->sendRequest($url, "POST", $body, 1, true);
		return $data;
	}

	//获取报表明细类列表表头
	public function getStatisticDetailHeadTitle($param = array())
	{
		if (!$param) {
			return [];
		}
		$body["tab_code"] = isset($param["tab_code"]) && !empty($param["tab_code"]) ? $param["tab_code"] : null;
		$body["account_id"] = isset($param["account_id"]) ? $param["account_id"] : 0;
		$url = $this->host . $this->zones['getStatisticDetailHeadTitle'];
		$data =  $this->sendRequest($url, "POST", $body, 1, true);
		return array_column($data["details_str"], "columnName", "columnKey");
	}

	//获取联盟商户开卡馆结算列表表头
	public function getOpenStadiumClearingSumListHeadTitle($param = array())
	{
		if (!$param) {
			return [];
		}
		$body["company_id"] = isset($param["company_id"]) && !empty($param["company_id"]) ? $param["company_id"] : 0;
		$body["business_id"] = isset($param["business_id"]) && !empty($param["business_id"]) ? $param["business_id"] : 0;
		$url = $this->host . $this->zones['getOpenStadiumClearingSumListHeadTitle'];
		$data =  $this->sendRequest($url, "POST", $body, 1, true);
		return array_column($data, "columnName", "columnKey");
	}


	//获取商品明细列表导出任务的表头
	public function getStadiumGoodExportHeadTitle($param = array())
	{
		if (!$param) {
			return [];
		}
		$body["company_id"] = isset($param["company_id"]) && !empty($param["company_id"]) ? $param["company_id"] : 0;
		$body["business_id"] = isset($param["business_id"]) && !empty($param["business_id"]) ? $param["business_id"] : 0;
		$url = $this->host . $this->zones['getStadiumGoodExportHeadTitle'];
		$data =  $this->sendRequest($url, "POST", $body, 1, true);
		return $data;
	}
	//获取商品明细列表导出任务的表头
	public function getActivityApplicantExportHeadTitle($param = array())
	{
		if (!$param) {
			return [];
		}
		$body = $param;
		$body["company_id"] = $param["company_id"] ?? 0;
		$body["business_id"] = $param["business_id"] ?? 0;
		$url = $this->host . $this->zones['getActivityApplicantExportHeadTitle'];
		$data =  $this->sendRequest($url, "POST", $body, 1, true);
		return $data;
	}

	public function getByUrl($param = array(), $url, $method = "POST", $times = 1, $width_account = true, $timeout = 5)
	{
		if (!$param) {
			return [];
		}
		$body = $param;
		$body["company_id"] = $param["company_id"] ?? 0;
		$body["business_id"] = $param["business_id"] ?? 0;
		$url = $this->host . $url;
		$data =  $this->sendRequest($url, $method, $body, $times, $width_account, $timeout);
		return $data;
	}
	public function dataList($api_path, $body)
	{
		if (!$body) {
			return [];
		}
		$url = $this->host . $api_path;
		return $this->sendRequest($url, "POST", $body, 1, false, 60);
	}

	public function getByCfgCode($cfg_codes, $stadium_id = null, $company_id = null, $business_id = null)
	{
		if (!$cfg_codes) {
			return [];
		}
		$url = $this->host . $this->zones['getByCfgCode'];
		$body["cfg_code"] = $cfg_codes;
		if (!empty($stadium_id)) {
			$body["stadium_id"]   = $stadium_id;
		}
		if (!empty($company_id)) {
			$body["company_id"]   = $company_id;
		}
		if (!empty($business_id)) {
			$body["business_id"]   = $business_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	public function getMembersByIds($memberIds)
	{
		if (!$memberIds) {
			return [];
		}
		$url = $this->host . $this->zones['getMembersByIds'];
		$body["member_ids"] = $memberIds;
		return $this->sendRequest($url, "POST", $body);
	}

	// 获取场地
	public function getFields($body = [])
	{
		$url = $this->host . $this->zones['getFields'];
		return $this->sendRequest($url, "POST", $body);
	}
	public function getOneField($body = [])
	{
		$url = $this->host . $this->zones['getOneField'];
		return $this->sendRequest($url, "POST", $body);
	}
    public function getMemberByKeyword($body = [])
    {
        $url = $this->host . $this->zones['getMemberByKeyword'];
        return $this->sendRequest($url, "POST", $body);
    }
    public function getDeviceRepairListAll($body = [])
    {
        $url = $this->host . $this->zones['getDeviceRepairListAll'];
        return $this->sendRequest($url, "POST", $body);
    }
	// 获取设备
	public function getDevices($body = [])
	{
		$url = $this->host . $this->zones['getDevices'];
		return $this->sendRequest($url, "POST", $body);
	}
	public function getByOrderNos($order_nos)
	{
		if (!$order_nos) {
			return [];
		}
		$url = $this->host . $this->zones['getByOrderNos'];
		$body["order_no"] = $order_nos;
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * @param string $phones 手机号字符串（多个用逗号隔开）
	 * @param $business_id
	 * @return mixed
	 */
	public function getMemberByMobiles($phones, $business_id = null)
	{
		$url = $this->host . $this->zones['getMemberByMobiles'];
		if (empty($phones)) {
			return [];
		}
		$body["phones"] = $phones;
		if (!empty($business_id)) {
			$body["business_id"] = $business_id;
		}
		return $this->sendRequest($url, "POST", $body);
	}

	/**
	 * 获取运营端发票配置信息
	 * @param $business_id
	 * @return array
	 */
	public function getCfgInvoice($business_id)
	{
		if (empty($business_id)) {
			return [];
		}
		$url = $this->host . $this->zones['getCfgInvoice'];
		$body["business_id"] = $business_id;
		return $this->sendRequest($url, "POST", $body);
	}

    /**
     * 获取运营端数电发票配置信息
     * @param $business_id
     * @return array
     */
    public function getCfgDigitalInvoice($business_id)
    {
        if (empty($business_id)) {
            return [];
        }
        $url = $this->host . $this->zones['getCfgDigitalInvoice'];
        $body["business_id"] = $business_id;
        return $this->sendRequest($url, "POST", $body);
    }

    public function stateRefundOrder($refund_info){
        $url = $this->host.$this->zones['stateRefundOrder'];
        return $this->sendRequest($url,"POST",$refund_info,1,true,10);
    }

    public function refund($body)
    {
        $url = $this->host . $this->zones['refund'];
        return $this->sendRequest($url, "POST", $body, 1, true, 10);
    }

    /**
     * Notes:发送短信,微信公众号推送（新）
     * User: zouqin
     * Email: qin.zou@papa.com.cn
     * Date: 23-08-17
     * Time: 下午9:03
     * @return array
     * @throws PPosException
     */
    public function sendMessageNew($data)
    {
        $url = $this->host . $this->zones['sendMessageNew'];
        $body = $data;
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * 会员中台调平申请信息获取（单个）
     * @param $related_no
     * @return array
     */
    public function getLevelingApplyInfo($related_no)
    {
        if (!$related_no) {
            return [];
        }
        $url = $this->host . $this->zones['getLevelingApplyInfo'];
        $body["leveling_id"] = $related_no;
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * 会员中台调平申请审批通知
     * @param $related_no
     * @param $action_type
     * @param $check_id
     * @param $check_time
     * @return array
     */
    public function levelingApplyAuditNotice($related_no, $action_type, $check_id, $check_time, $action_info)
    {
        if (!$related_no) {
            return [];
        }
        $url = $this->host . $this->zones['levelingApplyAuditNotice'];
        $body["related_no"] = $related_no;
        $body["action_type"] = $action_type;  //处理的状态 1：审核通过，2：审核不通过；
        $body["check_id"] = $check_id;  ///最终审批人
        $body["check_time"] = $check_time;  //最终审批时间
        $body["action_info"] = $action_info;  //最终审批备注
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * 会员中台根据申请id获取信息(多条)
     * @param $ids
     * @return array
     */
    public function getLevelingApplyByIds(array $ids)
    {
        if (!$ids) {
            return [];
        }
        $url = $this->host . $this->zones['getLevelingApplyByIds'];
        $body["leveling_ids"] = implode(",", $ids);
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * Notes: 资产管理获取设备入库信息
     * User: 闻铃
     * DateTime: 8/21/24 4:42 下午
     * @param $related_no
     * @return array|mixed
     * @throws \Ppospro\PAGE\Exception\PPosException
     */
    public function getAssetsInOutApply($related_no)
    {
        if (!$related_no) {
            return [];
        }
        $url = $this->host . $this->zones['getAssetsInOutApply'];
        $body["stream_no"] = $related_no;
        return $this->sendRequest($url, "POST", $body);
    }

    /**
     * Notes: 资产管理获取报修工单信息
     * User: 闻铃
     * DateTime: 8/21/24 4:42 下午
     * @param $related_no
     * @return array|mixed
     * @throws \Ppospro\PAGE\Exception\PPosException
     */
    public function getAssetsRepairApply($related_no)
    {
        if (!$related_no) {
            return [];
        }
        $url = $this->host . $this->zones['getAssetsRepairApply'];
        $body["repair_order_no"] = $related_no;//
        return $this->sendRequest($url, "POST", $body);
    }
}
