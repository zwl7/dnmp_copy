"use strict";
const flattenTree = function(treeData = [], result = [], childsKey = "children") {
  treeData.forEach((item) => {
    const level = item.level;
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push({
      label: item.label,
      id: item.id,
      parentId: item.parentId,
      level: item.level
    });
    if (item[childsKey] && item[childsKey].length !== 0) {
      flattenTree(item[childsKey], result);
    }
  });
  return result;
};
const formatTreeOption = function(datalist, propList, level = 2) {
  let _list = [];
  datalist.forEach((e) => {
    let obj = {
      label: e[propList[0]],
      id: e[propList[1]],
      level: 0,
      //数组层级
      children: [],
      parentId: 0
    };
    let children = [];
    if (e[propList[4]] && e[propList[4]].length > 0) {
      e[propList[4]].forEach((c, index) => {
        if (level == 2) {
          children.push({
            label: c[propList[2]],
            id: c[propList[3]],
            level: 1,
            parentId: e[propList[1]]
          });
          return 0;
        }
        let obj1 = {
          label: c[propList[2]],
          id: c[propList[3]],
          level: 1,
          parentId: e[propList[1]],
          children: []
        };
        let children1 = [];
        if (c[propList[4]] && c[propList[4]].length > 0) {
          c[propList[4]].forEach((j) => {
            children1.push({
              label: j[propList[5]],
              id: j[propList[6]],
              level: 2,
              parentId: c[propList[3]]
            });
          });
        }
        obj1.children = children1;
        children.push(obj1);
      });
    }
    obj.children = children;
    _list.push(obj);
  });
  return _list;
};
const getPickBackFile = function(temp, data, level) {
  let index = 0;
  let index1 = 0;
  let index2 = 0;
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let result = {};
  data.forEach((item, i) => {
    if (item.id == temp[0]) {
      index = i;
      if (level != 1) {
        item.children.forEach((val, ind) => {
          if (val.id == temp[1]) {
            index1 = ind;
            if (level != 2) {
              val.children.forEach((e, n) => {
                if (e.id == temp[2]) {
                  index2 = n;
                }
              });
            }
          }
        });
      }
    }
  });
  arr = data.map((e) => {
    return { label: e.label, id: e.id, level: 0, parentId: 0 };
  });
  result.columns = [arr];
  result.defaultIndex = [index];
  if (level != 1) {
    arr1 = data[index].children.map((e) => {
      return { label: e.label, id: e.id, level: 1, parentId: data[index].id };
    });
    result.columns = [arr, arr1];
    result.defaultIndex = [index, index1];
    if (level != 2) {
      arr2 = data[index].children[index1].children.map((e) => {
        return { label: e.label, id: e.id, level: 2, parentId: data[index].children[index1].id };
      });
      result.columns = [arr, arr1, arr2];
      result.defaultIndex = [index, index1, index2];
    }
  }
  return result;
};
exports.flattenTree = flattenTree;
exports.formatTreeOption = formatTreeOption;
exports.getPickBackFile = getPickBackFile;
//# sourceMappingURL=tree.js.map
