"use strict";
const utils_storages_uniStorage = require("./storages/uniStorage.js");
const setToken = (data) => utils_storages_uniStorage.uniStorage.set("token", data);
const getToken = () => utils_storages_uniStorage.uniStorage.get("token");
const removeToken = () => utils_storages_uniStorage.uniStorage.remove("token");
const setIsLogin = (data) => utils_storages_uniStorage.uniStorage.set("is_login", data);
const getIsLogin = () => utils_storages_uniStorage.uniStorage.get("is_login");
exports.getIsLogin = getIsLogin;
exports.getToken = getToken;
exports.removeToken = removeToken;
exports.setIsLogin = setIsLogin;
exports.setToken = setToken;
//# sourceMappingURL=token.js.map
