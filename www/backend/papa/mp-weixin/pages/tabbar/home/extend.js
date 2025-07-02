"use strict";
const apis_index = require("../../../apis/index.js");
function getWxRecommendList() {
  return new Promise(async (resolve) => {
    let res = await apis_index.getWxRecommend({});
    if (res.code == 200) {
      this.swiperList = res.data;
    } else {
      console.error(res.message);
    }
    resolve(1);
  });
}
function getWxNoticeList() {
  return new Promise(async (resolve) => {
    let res = await apis_index.getWxNotice({});
    if (res.code == 200) {
      this.noticeList = res.data;
    } else {
      console.error(res.message);
    }
    resolve(1);
  });
}
function getFfunBtnPanelList() {
  return new Promise((resolve) => {
    let list = [
      {
        id: 1,
        image: "https://cdn-static.papa.com.cn/shandong/新闻体育.png",
        page: "/pages/newsList/newsList",
        title: "场馆新闻"
      },
      {
        id: 2,
        image: "https://cdn-static.papa.com.cn/shandong/体育+.png",
        page: "/pages/associationAbout/associationAbout",
        title: "协会介绍"
      },
      {
        id: 3,
        image: "https://cdn-static.papa.com.cn/shandong/AI运动.png",
        page: "/pages/associationList/associationList",
        title: "会员单位"
      },
      {
        id: 4,
        image: "https://cdn-static.papa.com.cn/shandong/赛事活动.png",
        page: "/pages/activityCalendar/activityCalendar",
        title: "活动日历"
      },
      {
        id: 5,
        image: "https://cdn-static.papa.com.cn/shandong/场馆服务.png",
        page: "/pages/tabbar/stadium/index",
        is_tabbar: 1,
        title: "场馆预定"
      },
      {
        id: 6,
        image: "https://cdn-static.papa.com.cn/shandong/赛事活动.png",
        page: "/pages/activityAll/activityAll",
        title: "赛事活动"
      },
      {
        id: 7,
        image: "https://cdn-static.papa.com.cn/shandong/体育商城.png",
        page: "/pages/myFeedback/myFeedback",
        title: "反馈建议"
      }
    ];
    this.funBtnPanelList = list;
    resolve(1);
  });
}
function getWxNewsList() {
  return new Promise(async (resolve) => {
    let params = {
      page: 1,
      size: 3
    };
    let res = await apis_index.getWxNews(params);
    if (res.code == 200) {
      this.newsList = res.data.list;
    } else {
      console.error(res.message);
    }
    resolve(1);
  });
}
function getWxStadiumRecommendList() {
  return new Promise(async (resolve) => {
    let params = {
      page: 1,
      size: 5
    };
    let res = await apis_index.getWxStadiumRecommend(params);
    if (res.code == 200) {
      res.data.list.map((e) => {
        e.show_image = e.images_url[0];
        e.tag = e.stadium_mark;
      });
      this.stadiumRecommendList = res.data.list;
    } else {
      console.error(res.message);
    }
    resolve(1);
  });
}
exports.getFfunBtnPanelList = getFfunBtnPanelList;
exports.getWxNewsList = getWxNewsList;
exports.getWxNoticeList = getWxNoticeList;
exports.getWxRecommendList = getWxRecommendList;
exports.getWxStadiumRecommendList = getWxStadiumRecommendList;
