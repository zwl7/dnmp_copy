"use strict";
const utils_reg = require("../../../utils/reg.js");
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
  ]
};
exports.rules = rules;
