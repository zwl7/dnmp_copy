"use strict";
const utils_http = require("../utils/http.js");
const getInstitutionList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/institution/list",
    data
  });
};
exports.getInstitutionList = getInstitutionList;
