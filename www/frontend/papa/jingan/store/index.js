"use strict";
const common_vendor = require("../common/vendor.js");
const store_app_index = require("./app/index.js");
const store_user_index = require("./user/index.js");
const store = {
  install(app) {
    app.use(common_vendor.createPinia());
    app.config.globalProperties.$store = {
      app: store_app_index.useAppStore(),
      user: store_user_index.useUserStore()
    };
  },
  useAppStore: store_app_index.useAppStore,
  useUserStore: store_user_index.useUserStore,
  Pinia: common_vendor.Pinia
};
exports.store = store;
