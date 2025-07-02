"use strict";
const reg_tel_phone = /(^((\+86)|(86))?(1[2-9])\d{9}$)|(^(0\d{2,3})-?(\d{7,8})$)/;
const reg_cp = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
exports.reg_cp = reg_cp;
exports.reg_tel_phone = reg_tel_phone;
