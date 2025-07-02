"use strict";
const utils_reg = require("./utils/reg.js");
const rules = {
  name: {
    type: "string",
    required: true,
    message: "请填写姓名",
    trigger: ["blur", "change"]
  },
  phone: [
    {
      required: true,
      message: "请填写手机号",
      trigger: ["blur", "change"]
    },
    {
      pattern: utils_reg.reg_tel_phone,
      message: "手机号格式不正确"
    }
  ],
  id_card: [
    {
      required: true,
      message: "请填写身份证号",
      trigger: ["blur", "change"]
    },
    {
      pattern: utils_reg.reg_cp,
      message: "身份证号格式不正确"
    }
  ],
  // tagIdsStr: {
  // 	type: "string",
  // 	required: true,
  // 	message: "请选择指导项目",
  // },
  tagGroup: {
    type: "string",
    required: true,
    message: "请选择归属区域"
  },
  nationStr: {
    type: "string",
    required: true,
    message: "请选择民族"
  },
  educationLevelStr: {
    type: "string",
    required: true,
    message: "请选择文化程度"
  },
  // levelStr: {
  // 	type: "string",
  // 	required: true,
  // 	message: "请选择当前指导员级别",
  // },
  guide_type: {
    required: true,
    message: "请选择指导类型"
  },
  personnelFormStr: {
    type: "string",
    required: true,
    message: "请选择人员构成"
  },
  areaRangeStr: {
    type: "string",
    required: true,
    message: "请选择地区分布"
  }
};
exports.rules = rules;
//# sourceMappingURL=index3.js.map
