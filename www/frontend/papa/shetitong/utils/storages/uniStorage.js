"use strict";
const common_vendor = require("../../common/vendor.js");
const uniStorage = {
  // 设置永久缓存
  set(key, value) {
    common_vendor.index.setStorageSync(key, value);
  },
  // 获取永久缓存
  get(key) {
    return common_vendor.index.getStorageSync(key);
  },
  // 移除永久缓存
  remove(key) {
    common_vendor.index.removeStorageSync(key);
  },
  // 移除全部永久缓存
  clear() {
    common_vendor.index.clearStorageSync();
  }
};
exports.uniStorage = uniStorage;
//# sourceMappingURL=uniStorage.js.map
