"use strict";
require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const handleAuthenticate = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/authenticate",
    data: params
  });
};
exports.handleAuthenticate = handleAuthenticate;
//# sourceMappingURL=login.js.map
