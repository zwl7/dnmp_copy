"use strict";
const common_vendor = require("../common/vendor.js");
function Gets(key, isSync = false) {
  if (typeof key != "string") {
    throw new Error("key is typeof string at storage.Get");
  }
  if (key.Trim() == "") {
    throw new Error("key is not null at storage.Get");
  }
  return new Promise((resolve, reject) => {
    if (isSync) {
      try {
        let result = common_vendor.index.getStorageSync(key.Trim());
        resolve(result);
      } catch (error) {
        resolve();
      }
    } else {
      common_vendor.index.getStorage({
        key: key.Trim(),
        success: function(res) {
          let result = res.data;
          resolve(result);
        },
        fail(error) {
          reject(error.errMsg);
        }
      });
    }
  });
}
function Sets(key, data, isSync = false) {
  if (typeof key != "string") {
    throw new Error("key is typeof string at storage.Set");
  }
  if (key.Trim() == "") {
    throw new Error("key is not null at storage.Set");
  }
  return new Promise((resolve, reject) => {
    if (isSync) {
      common_vendor.index.setStorageSync(key.Trim(), data);
      resolve({
        errMsg: "storage okey"
      });
    } else {
      common_vendor.index.setStorage({
        key: key.Trim(),
        data,
        success: function(res) {
          resolve({
            errMsg: "storage okey"
          });
        }
      });
    }
  });
}
function Clear(key = "", isSync = false) {
  if (typeof key != "string") {
    throw new Error("key is typeof string at storage.Clear");
  }
  return new Promise((resolve, reject) => {
    if (key == "") {
      if (isSync) {
        common_vendor.index.clearStorage({
          success() {
            resolve({
              errMsg: "clearStorage is okey1"
            });
          }
        });
      } else {
        common_vendor.index.clearStorageSync();
        resolve({
          errMsg: "clearStorage is okey2"
        });
      }
    } else {
      if (!isSync) {
        common_vendor.index.removeStorage({
          key: key.Trim(),
          success() {
            resolve({
              errMsg: "clearStorage is okey3"
            });
          }
        });
      } else {
        common_vendor.index.removeStorageSync(key.Trim());
        resolve({
          errMsg: "clearStorage is okey4"
        });
      }
    }
  });
}
String.prototype.Trim = function() {
  return this.replace(/(^s*)|(s*$)/g, "");
};
exports.Clear = Clear;
exports.Gets = Gets;
exports.Sets = Sets;
