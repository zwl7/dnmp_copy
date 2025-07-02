"use strict";
const configs_useOption_index = require("../configs/useOption/index.js");
const common_vendor = require("../common/vendor.js");
const getDict = (key = "tagList") => {
  return configs_useOption_index.useOptions()[key] || [];
};
const getDictLabel = (source, value, {
  labelKey = "label",
  valueKey = "value",
  childrenKey = "children"
} = {}) => {
  const data = common_vendor.isString(source) ? getDict(source) : source;
  const actions = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    if (item[valueKey] == `${value}`) {
      actions.push(item[labelKey]);
      break;
    }
    const children = item[childrenKey];
    if (children && children.length) {
      const action = getDictLabel(children, value, {
        labelKey,
        valueKey,
        childrenKey
      });
      if (action) {
        actions.push(action);
        break;
      }
    }
  }
  return Object.prototype.toString.call(actions[0]) === "[object Object]" ? actions[0] : actions.join("");
};
const dict = { getDict, getDictLabel };
exports.dict = dict;
//# sourceMappingURL=dict.js.map
