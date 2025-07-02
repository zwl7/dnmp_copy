"use strict";
const common_vendor = require("../common/vendor.js");
require("../store/app/index.js");
const store_user_index = require("../store/user/index.js");
require("../store/dict/index.js");
const utils_index = require("../utils/index.js");
const loginRoute = "/pages/login/index";
const isLogined = () => {
  const userStore = store_user_index.useUserStore();
  return userStore.isLogin;
};
const navigateToInterceptor = {
  invoke({ url }) {
    const path = url.split("?")[0];
    let needLoginPages = [];
    {
      needLoginPages = utils_index.getNeedLoginPages();
    }
    const isNeedLogin = needLoginPages.includes(path);
    if (!isNeedLogin) {
      return true;
    }
    const hasLogin = isLogined();
    if (hasLogin) {
      return true;
    }
    const redirectRoute = `${loginRoute}?redirect=${encodeURIComponent(url)}`;
    common_vendor.index.navigateTo({ url: redirectRoute });
    return false;
  }
};
const routeInterceptor = {
  install() {
    common_vendor.index.addInterceptor("navigateTo", navigateToInterceptor);
    common_vendor.index.addInterceptor("reLaunch", navigateToInterceptor);
    common_vendor.index.addInterceptor("redirectTo", navigateToInterceptor);
    common_vendor.index.addInterceptor("switchTab", navigateToInterceptor);
  }
};
exports.routeInterceptor = routeInterceptor;
//# sourceMappingURL=route.js.map
