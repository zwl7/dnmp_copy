"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const apis_index = require("../../../apis/index.js");
const apis_common = require("../../../apis/common.js");
const mixins_appMount = require("../../../mixins/appMount.js");
const common_assets = require("../../../common/assets.js");
function getWxRecommendList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let res = yield apis_index.getWxRecommend({});
    if (res.code == 200) {
      this.swiperList = res.data;
    } else {
      console.error(res.message);
    }
    resolve(1);
  }));
}
function getWxNoticeList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let res = yield apis_index.getWxNotice({});
    if (res.code == 200) {
      this.noticeList = res.data;
    } else {
      console.error(res.message);
    }
    resolve(1);
  }));
}
function getOrganizationType() {
  return new Promise((resolve) => __async(this, null, function* () {
    let res = yield apis_common.getSportsOrganizationType({
      page: 1,
      size: 1e3,
      status: 1
    });
    let list = [];
    res.data.list.map((e) => {
      list.push({
        name: e.name,
        value: e.type_id
      });
    });
    this.organizationTagList = list;
    this.organizationSiteType = list.length ? list[0].value : [];
    resolve(1);
  }));
}
function getOrganizationList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let param = {
      page: 1,
      size: 5
      // type_id: "8",
      // site_type: this.organizationSiteType
    };
    let res = yield apis_common.getWxMemberList(param);
    res.data.list.map((e) => {
      e.url = e.logo ? e.logo : "https://apitest.wesais.cn/images/20240221/84dfeedf99e52da3f3f98a6cc7c76fcc.png";
      e.imageTitle = e.name;
    });
    this.organizationList = res.data.list;
    resolve(1);
  }));
}
function getNewsTypeList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let param = {
      unique_code: 5
    };
    const res = yield apis_common.getWxNewsType(param);
    const arr = res.data[0].label.split(",");
    const label = [];
    arr.map((e, index) => {
      label.push({
        name: e,
        value: e
      });
    });
    this.informationTagList = label;
    this.informationTag = label[0].value;
    this.informationTagType = res.data[0].value;
    resolve(1);
  }));
}
function getNewsRecommendList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let param = {
      unique_code: 5,
      type: this.informationTagType,
      kind_id: 1,
      tag_ids: this.informationTag,
      page: 1,
      size: 5
    };
    const res = yield apis_common.getNewsList(param);
    let list = res.data.list;
    let showList = [];
    list.forEach((e) => {
      let obj = __spreadValues({
        show_image: "",
        show_time: ""
      }, e);
      if (e.images_url.length > 0) {
        obj.show_image = e.images_url[0];
      }
      let show_time = e.released_time ? e.released_time : e.c_time;
      obj.show_time = mixins_appMount.timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
      showList.push(obj);
    });
    this.informationList = showList;
    resolve(1);
  }));
}
function getRecommendAreaTypeList() {
  return new Promise((resolve) => __async(this, null, function* () {
    let param = {
      kind_id: 2
    };
    const res = yield apis_common.getWxNewsType(param);
    this.recommendAreaTypeList = res.data;
    console.log(this.recommendAreaTypeList, "this.recommendAreaTypeList!!!");
    resolve(1);
  }));
}
const showStyleListStatic = [
  {
    id: 18,
    images: common_assets.asIntro,
    name: "匹克球工作组",
    //江西省排球协会
    // name: "协会介绍",
    path: "/pagesSub/membershipService/associationAbout/associationAbout"
  },
  {
    id: 1,
    images: common_assets.SportInfo,
    name: "体育资讯",
    path: "/pages/newsList/newsList?unique_code=5&title=体育资讯"
  },
  {
    id: 2,
    images: common_assets.HealthKnowledge,
    name: "赛事活动",
    path: "/pages/matchIndex/matchIndex",
    isTabbar: true
  },
  {
    id: 3,
    images: common_assets.CloudClassroom,
    name: "会员单位",
    path: "/pages/associationList/associationList",
    isTabbar: true
  },
  {
    id: 5,
    images: common_assets.SportsOrganizations,
    name: "人才库",
    path: "/pages/talentApprovePart/talentIndex/talentIndex"
  },
  {
    id: 13,
    images: common_assets.Talent,
    name: "专业认证",
    path: "/pages/talentApprovePart/entry/entry"
  },
  {
    id: 15,
    images: common_assets.FeedBack,
    name: "意见反馈",
    path: "/pages/feedBack/feedBack"
  },
  {
    id: 16,
    images: common_assets.eventBidding,
    name: "赛事申办",
    path: "/pages/eventBidding/eventBidding",
    auth: true
  },
  {
    id: 17,
    images: common_assets.wantBid,
    name: "我要办赛",
    path: "/pages/applyBidEvent/applyBidEvent",
    auth: true
  },
  {
    id: 19,
    images: common_assets.asApply,
    name: "入会申请",
    path: "/pagesSub/membershipService/applyEntrance/applyEntrance"
  },
  // 江西省排球协会
  {
    id: 18,
    images: common_assets.insurance,
    name: "体育保险",
    path: "/pages/webView/webView?type=tybx",
    auth: true
  }
];
exports.getNewsRecommendList = getNewsRecommendList;
exports.getNewsTypeList = getNewsTypeList;
exports.getOrganizationList = getOrganizationList;
exports.getOrganizationType = getOrganizationType;
exports.getRecommendAreaTypeList = getRecommendAreaTypeList;
exports.getWxNoticeList = getWxNoticeList;
exports.getWxRecommendList = getWxRecommendList;
exports.showStyleListStatic = showStyleListStatic;
