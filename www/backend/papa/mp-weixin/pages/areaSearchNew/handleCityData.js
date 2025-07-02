"use strict";
const handleCityData = (list) => {
  let obj = {};
  list.map((e) => {
    if (!e.next) {
      let pinyin = getPinYin(e.pinyin);
      if (!obj[pinyin]) {
        obj[pinyin] = [];
      }
      obj[pinyin].push(getItemData(e));
    }
    if (e.next && Array.isArray(e.next)) {
      e.next.map((c) => {
        let pinyin = getPinYin(c.pinyin);
        if (!obj[pinyin]) {
          obj[pinyin] = [];
        }
        obj[pinyin].push(getItemData(c));
      });
    }
  });
  obj = objKeySort(obj);
  return {
    all: obj,
    pinYin: Object.keys(obj)
  };
};
const getPinYin = (str) => {
  const firstChar = str.charAt(0);
  return firstChar.toUpperCase();
};
const getItemData = (obj) => {
  return {
    id: obj.company_area_id,
    name: obj.name,
    fullname: obj.name,
    location: {
      lat: obj.lat,
      lng: obj.lng
    }
  };
};
const objKeySort = (arys) => {
  let newkey = Object.keys(arys).sort();
  let newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = arys[newkey[i]];
  }
  return newObj;
};
exports.handleCityData = handleCityData;
