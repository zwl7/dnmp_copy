"use strict";
const common_vendor = require("../common/vendor.js");
const store_app_index = require("./app/index.js");
const store_user_index = require("./user/index.js");
const store_dict_index = require("./dict/index.js");
const store = {
  install(app) {
    app.use(common_vendor.createPinia());
    app.config.globalProperties.$store = {
      app: store_app_index.useAppStore(),
      user: store_user_index.useUserStore(),
      dict: store_dict_index.useDictStore()
    };
  },
  useAppStore: store_app_index.useAppStore,
  useUserStore: store_user_index.useUserStore,
  useDictStore: store_dict_index.useDictStore,
  Pinia: common_vendor.Pinia
};
exports.store = store;
//# sourceMappingURL=index.js.map
