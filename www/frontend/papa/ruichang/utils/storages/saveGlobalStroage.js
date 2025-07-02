"use strict";
const utils_storages_uniStorage = require("./uniStorage.js");
let themeColorKey = "globalThemeColor";
function setThemeColor(data) {
  return utils_storages_uniStorage.uniStorage.set(themeColorKey, data);
}
exports.setThemeColor = setThemeColor;
//# sourceMappingURL=saveGlobalStroage.js.map
