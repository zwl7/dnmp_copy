"use strict";
const common_assets = require("../../common/assets.js");
const store_app_index = require("../../store/app/index.js");
const useOptions = () => {
  const voteStatusColorList = [
    {
      color: {
        background: "#07C160"
      },
      value: 2,
      label: "进行中"
    },
    {
      color: {
        background: store_app_index.useAppStore().themePrimaryColorGetter
      },
      value: 1,
      label: "未开始"
    },
    {
      color: {
        background: "#A7AAB0"
      },
      value: 3,
      label: "已结束"
    }
  ];
  const pointRecordColorList = [
    {
      color: {
        color: "#F56C6C",
        background: "#FFEFEF"
      },
      value: 2
      // label: '已核销'
    },
    {
      color: {
        color: "#64C42D",
        background: "#E9F9E1"
      },
      value: 1
      // label: '已发货'
    }
    // {
    //   color: {
    //     color: '#FF9900',
    //     background: '#FFF4E4'
    //   },
    //   value: 3,
    //   label: '待核销'
    // }
  ];
  const rankSortBgColorList = [
    {
      value: 1,
      url: "https://cdn-static.papa.com.cn/yuncheng/pointsMall/first.png",
      bgColor: {
        background: "linear-gradient(270deg, #FFFDF8 0%, #FFF1D4 100%)"
      }
    },
    {
      value: 2,
      url: "https://cdn-static.papa.com.cn/yuncheng/pointsMall/second.png",
      bgColor: {
        background: "linear-gradient(270deg, #FAFCFF 0%, #E9F3FF 100%)"
      }
    },
    {
      value: 3,
      url: "https://cdn-static.papa.com.cn/yuncheng/pointsMall/three.png",
      bgColor: {
        background: "linear-gradient(270deg, #FFF9F5 0%, #FFF0E6 100%)"
      }
    }
  ];
  const orderList = [
    {
      value: 0,
      name: "未支付"
    },
    {
      value: 1,
      name: "未支付"
    },
    {
      value: 2,
      name: "已支付"
    },
    {
      value: 3,
      name: "已取消"
    }
  ];
  const orderColorList = [
    {
      color: {
        color: "#FF9900",
        background: "#FFF4E4"
      },
      value: 1,
      label: "未支付"
    },
    {
      color: {
        color: "#64C42D",
        background: "#E9F9E1"
      },
      value: 2,
      label: "已支付"
    },
    {
      color: {
        color: "#F56C6C",
        background: "#FFEFEF"
      },
      value: 3,
      label: "已取消"
    }
  ];
  const activityApplyColorList = [
    {
      color: "#9f9fa0",
      value: 10,
      label: "未开始"
    },
    {
      color: "#4cd964",
      value: 1,
      label: "报名中"
    },
    {
      color: "#9f9fa0",
      value: 2,
      label: "报名截止"
    },
    {
      color: "#1b8bff",
      value: 3,
      label: "进行中"
    },
    {
      color: "#9f9fa0",
      value: 4,
      label: "已结束"
    }
  ];
  const applyColorList = [
    {
      color: "#4cd964",
      value: 1,
      label: "待开始"
    },
    {
      color: "#1b8bff",
      value: 2,
      label: "报名中"
    },
    {
      color: "#9f9fa0",
      value: 3,
      label: "报名结束"
    }
  ];
  const tagList = [
    {
      label: "tag1",
      value: 519
    },
    {
      label: "tag2",
      value: 520
    }
  ];
  const promoteLevelList = [
    {
      label: "一级",
      value: 1,
      url: common_assets.firstLevel,
      color: {
        background: "linear-gradient(270deg, rgba(246, 203, 125, 1) 0%, rgba(249, 213, 155, 1) 100%)",
        color: "rgba(164, 95, 33, 1)"
      }
    },
    {
      label: "二级",
      value: 2,
      url: common_assets.secondLevel,
      color: {
        background: "linear-gradient(214.35deg, rgba(194, 212, 239, 1) 0%, rgba(212, 224, 243, 1) 100%)",
        color: "rgba(66, 90, 129, 1)"
      }
    },
    {
      label: "三级",
      value: 3,
      url: common_assets.threeLevel,
      color: {
        background: "linear-gradient(214.35deg, rgba(211, 212, 227, 1) 0%, rgba(236, 236, 236, 1) 100%)",
        color: "rgba(90, 101, 120, 1)"
      }
    },
    {
      label: "国家级",
      value: 0,
      url: common_assets.nationalLevel,
      color: {
        background: "linear-gradient(90deg, rgba(255, 228, 121, 1) 0%, rgba(255, 202, 71, 1) 100%)",
        color: "rgba(202, 70, 3, 1)"
      }
    },
    {
      label: "国际级",
      value: -1,
      url: common_assets.nationalLevel,
      color: {
        background: "linear-gradient(90deg, rgba(255, 228, 121, 1) 0%, rgba(255, 202, 71, 1) 100%)",
        color: "rgba(202, 70, 3, 1)"
      }
    }
  ];
  const matchApplyColorList = [
    {
      color: "#9f9fa0",
      value: 1,
      label: "未开始"
    },
    {
      color: "#4cd964",
      value: 2,
      label: "报名中"
    },
    {
      color: "#9f9fa0",
      value: 0,
      label: "未知"
    },
    {
      color: "#9f9fa0",
      value: 3,
      label: "已结束"
    }
  ];
  const volunteerStatusColorList = [
    {
      color: "#FF9900",
      bgColor: "#FFECD1",
      value: 3,
      label: "审核中"
    },
    {
      color: "#FF9900",
      bgColor: "#FFECD1",
      value: 4,
      label: "审核中"
    },
    {
      color: "#67C23A",
      bgColor: "#DAF6CC",
      value: 1,
      label: "通过"
    },
    {
      color: "#F56C6C",
      bgColor: "#FEDEDE",
      value: 2,
      label: "驳回"
    },
    {
      color: "#F56C6C",
      bgColor: "#FEDEDE",
      value: "failed",
      label: "驳回"
    },
    {
      color: "#67C23A",
      bgColor: "#DAF6CC",
      value: "success",
      label: "通过"
    }
  ];
  return {
    pointRecordColorList,
    rankSortBgColorList,
    activityApplyColorList,
    orderList,
    orderColorList,
    tagList,
    promoteLevelList,
    applyColorList,
    voteStatusColorList,
    matchApplyColorList,
    volunteerStatusColorList
  };
};
exports.useOptions = useOptions;
