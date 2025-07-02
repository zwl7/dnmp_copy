"use strict";
const utils_enum_useOption = require("./useOption.js");
const getDict = (key = "tagList") => {
  return utils_enum_useOption.useOptions()[key] || [];
};
const getDictLabel = (source, value, { labelKey = "label", valueKey = "value", childrenKey = "children" } = {}) => {
  const data = getDict(source);
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
