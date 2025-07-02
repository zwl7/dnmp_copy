"use strict";
const common_vendor = require("../common/vendor.js");
const utils_storageUtil = require("./storageUtil.js");
let tokenKey = "token";
function setToken(data, isSync = false) {
  return utils_storageUtil.Sets(tokenKey, data, isSync);
}
function getToken(isSync = false) {
  return utils_storageUtil.Gets(tokenKey, isSync);
}
function clearToken(data, isSync = false) {
  return utils_storageUtil.Clear(tokenKey, isSync);
}
let globalSearchKey = "globalSearchKey";
function setGlobalSearchKey(data, isSync = true) {
  return utils_storageUtil.Sets(globalSearchKey, data, isSync);
}
function getGlobalSearchKey(isSync = true) {
  return utils_storageUtil.Gets(globalSearchKey, isSync);
}
function clearGlobalSearchKey(data, isSync = true) {
  return utils_storageUtil.Clear(globalSearchKey, isSync);
}
let userInfoKey = "globalUserSearchInfo";
function setUserInfoKey(data, isSync = true) {
  return utils_storageUtil.Sets(userInfoKey, data, isSync);
}
function getUserInfoKey(isSync = true) {
  return utils_storageUtil.Gets(userInfoKey, isSync);
}
function getUserInfoKeySync() {
  return common_vendor.index.getStorageSync(userInfoKey);
}
exports.clearGlobalSearchKey = clearGlobalSearchKey;
exports.clearToken = clearToken;
exports.getGlobalSearchKey = getGlobalSearchKey;
exports.getToken = getToken;
exports.getUserInfoKey = getUserInfoKey;
exports.getUserInfoKeySync = getUserInfoKeySync;
exports.setGlobalSearchKey = setGlobalSearchKey;
exports.setToken = setToken;
exports.setUserInfoKey = setUserInfoKey;
