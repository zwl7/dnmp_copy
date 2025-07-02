"use strict";
const configs_dict_index = require("../configs/dict/index.js");
const common_vendor = require("../common/vendor.js");
function showDictLabel(data, value, {
  labelKey = "dictLabel",
  valueKey = "dictValue",
  childrenKey = "children"
} = {}) {
  const actions = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    if (item[valueKey] == `${value}`) {
      actions.push(item[labelKey]);
      break;
    }
    const children = item[childrenKey];
    if (children && children.length) {
      const action = showDictLabel(children, value, {
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
  return actions.join("");
}
const _showDictLabel = (param, value, options) => {
  const data = common_vendor.isString(param) ? configs_dict_index.dictData[param] : param;
  return showDictLabel(data || {}, value, options);
};
exports._showDictLabel = _showDictLabel;
//# sourceMappingURL=showDictLabel.js.map
