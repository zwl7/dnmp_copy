"use strict";
const common_assets = require("../../common/assets.js");
const useOptions = () => {
  const applyColorList = [
    { color: "#4cd964", value: 1, label: "待开始" },
    { color: "#1b8bff", value: 2, label: "报名中" },
    { color: "#9f9fa0", value: 3, label: "报名结束" }
  ];
  const statusColor = [
    { color: "warning", value: 1, label: "待审核" },
    { color: "success", value: 2, label: "通过" },
    { color: "error", value: 3, label: "拒绝" }
  ];
  const tagList = [
    { label: "tag1", value: 519 },
    { label: "tag2", value: 520 }
  ];
  const trainTypeList = [
    { label: "晋级培训", value: 1 },
    { label: "技能培训", value: 2 }
  ];
  const promoteLevelList = [
    {
      label: "国家级",
      value: 0,
      url: common_assets.gjj,
      color: {
        background: "linear-gradient(90deg, rgba(255, 228, 121, 1) 0%, rgba(255, 202, 71, 1) 100%)",
        color: "rgba(202, 70, 3, 1)"
      }
    },
    {
      label: "一级",
      value: 1,
      url: common_assets.yiji,
      color: {
        background: "linear-gradient(270deg, rgba(246, 203, 125, 1) 0%, rgba(249, 213, 155, 1) 100%)",
        color: "rgba(164, 95, 33, 1)"
      }
    },
    {
      label: "二级",
      value: 2,
      url: common_assets.erji,
      color: {
        background: "linear-gradient(214.35deg, rgba(194, 212, 239, 1) 0%, rgba(212, 224, 243, 1) 100%)",
        color: "rgba(66, 90, 129, 1)"
      }
    },
    {
      label: "三级",
      value: 3,
      url: common_assets.erji,
      color: {
        background: "linear-gradient(214.35deg, rgba(194, 212, 239, 1) 0%, rgba(212, 224, 243, 1) 100%)",
        color: "rgba(66, 90, 129, 1)"
      }
    },
    {
      label: "其他",
      value: 4,
      url: common_assets.erji,
      color: {
        background: "linear-gradient(214.35deg, rgba(194, 212, 239, 1) 0%, rgba(212, 224, 243, 1) 100%)",
        color: "rgba(66, 90, 129, 1)"
      }
    }
  ];
  const allowApplyLevelList = [
    { label: "一级", value: 1 },
    { label: "二级", value: 2 },
    { label: "三级", value: 3 }
  ];
  const nationList = [];
  const educationLevelList = [
    { label: "其他", value: 1 },
    { label: "小学", value: 2 },
    { label: "初中", value: 3 },
    { label: "高中", value: 4 },
    { label: "中专", value: 5 },
    { label: "大专", value: 6 },
    { label: "本科", value: 7 },
    { label: "硕士", value: 8 },
    { label: "博士", value: 9 }
  ];
  const levelList = [
    { label: "国家级", value: 0 },
    { label: "一级", value: 1 },
    { label: "二级", value: 2 },
    { label: "三级", value: 3 },
    { label: "其他", value: 4 }
  ];
  const guideTypeList = [
    { label: "技能指导", value: 1 },
    { label: "组织管理", value: 2 }
  ];
  const areaRangeList = [
    { label: "城市", value: 1 },
    { label: "农村", value: 2 }
  ];
  const personnelFromList = [];
  return {
    tagList,
    trainTypeList,
    promoteLevelList,
    allowApplyLevelList,
    nationList,
    educationLevelList,
    levelList,
    guideTypeList,
    areaRangeList,
    personnelFromList,
    statusColor,
    applyColorList
  };
};
exports.useOptions = useOptions;
//# sourceMappingURL=index.js.map
