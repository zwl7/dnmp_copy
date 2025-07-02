"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_stroageUtils_storageUtil = require("./storageUtil.js");
let tokenKey = "token";
function setToken(data, isSync = false) {
  return utils_stroageUtils_storageUtil.Sets(tokenKey, data, isSync);
}
function getToken(isSync = false) {
  return utils_stroageUtils_storageUtil.Gets(tokenKey, isSync);
}
function clearToken(data, isSync = false) {
  return utils_stroageUtils_storageUtil.Clear(tokenKey, isSync);
}
let globalSearchKey = "globalSearchKey";
function setGlobalSearchKey(data, isSync = true) {
  return utils_stroageUtils_storageUtil.Sets(globalSearchKey, data, isSync);
}
function getGlobalSearchKey(isSync = true) {
  return utils_stroageUtils_storageUtil.Gets(globalSearchKey, isSync);
}
function clearGlobalSearchKey(data, isSync = true) {
  return utils_stroageUtils_storageUtil.Clear(globalSearchKey, isSync);
}
let userInfoKey = "globalUserSearchInfo";
function setUserInfoKey(data, isSync = true) {
  return utils_stroageUtils_storageUtil.Sets(userInfoKey, data, isSync);
}
function getUserInfoKey(isSync = true) {
  return utils_stroageUtils_storageUtil.Gets(userInfoKey, isSync);
}
function getUserInfoKeySync() {
  return common_vendor.index.getStorageSync(userInfoKey);
}
let tabbarListKey = "globalTabbarList";
function setTabbarList(data, isSync = true) {
  return utils_stroageUtils_storageUtil.Sets(tabbarListKey, data, isSync);
}
function getTabbarList(isSync = true) {
  return utils_stroageUtils_storageUtil.Gets(tabbarListKey, isSync);
}
let themeColorKey = "globalThemeColor";
function setThemeColor(data, isSync = true) {
  return utils_stroageUtils_storageUtil.Sets(themeColorKey, data, isSync);
}
function getThemeColor(isSync = true) {
  return utils_stroageUtils_storageUtil.Gets(themeColorKey, isSync);
}
exports.clearGlobalSearchKey = clearGlobalSearchKey;
exports.clearToken = clearToken;
exports.getGlobalSearchKey = getGlobalSearchKey;
exports.getTabbarList = getTabbarList;
exports.getThemeColor = getThemeColor;
exports.getToken = getToken;
exports.getUserInfoKey = getUserInfoKey;
exports.getUserInfoKeySync = getUserInfoKeySync;
exports.setGlobalSearchKey = setGlobalSearchKey;
exports.setTabbarList = setTabbarList;
exports.setThemeColor = setThemeColor;
exports.setToken = setToken;
exports.setUserInfoKey = setUserInfoKey;
