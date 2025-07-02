"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_activity = require("../../apis/activity.js");
const utils_buttonClick = require("../../utils/buttonClick.js");
const core_shareMixins = require("../../core/shareMixins.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const stadiumRecommend = () => "../../components/stadiumRecommend.js";
const goodNav = () => "../../components/goodNav/goodNav.js";
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins],
  components: {
    stadiumRecommend,
    goodNav
  },
  data() {
    return {
      load_finish: false,
      activity_id: "",
      activityInfo: {
        list: []
      },
      applyInfo: {
        list: []
      },
      starStatus: 0,
      timeData: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      countdownTime: 0,
      options: [{
        icon: "star",
        text: "收藏",
        color: "rgb(192, 196, 204)"
      }, {
        icon: "paperplane",
        text: "分享",
        is_share: true,
        color: "rgb(192, 196, 204)"
      }],
      customButtonGroup1: [{
        text: "已结束",
        backgroundColor: "linear-gradient(270deg, rgb(255, 157, 20) 0%, rgb(255, 114, 0) 100%);",
        color: "#fff"
      }]
    };
  },
  computed: {
    live_tag() {
      let obj = {
        title: "",
        color: ""
      };
      switch (this.activityInfo.live_flag) {
        case 1:
          obj = {
            title: "有直播",
            color: "rgba(255, 141, 26, 1)"
          };
          break;
        case 2:
          obj = {
            title: "即将直播",
            color: "rgba(79, 188, 145, 1)"
          };
          break;
        case 3:
          obj = {
            title: "即将直播",
            color: "rgba(255, 87, 51, 1)"
          };
          break;
        case 4:
          obj = {
            title: "比赛回放",
            color: "rgba(3, 145, 222, 1)"
          };
          break;
      }
      return obj;
    },
    applyInfoCount() {
      return this.applyInfo.count > 1e3 ? parseInt(this.applyInfo.count / 1e3) + "+" : this.applyInfo.count;
    }
  },
  onLoad(options) {
    console.log(options);
    this.activity_id = options.activity_id;
    this.getActivityDetail();
    this.share = {
      title: "",
      path: "/pages/activityDetail/activityDetail?activity_id=" + this.activity_id,
      withShareTicket: true
    };
  },
  methods: {
    async getActivityDetail() {
      let params = {
        activity_id: this.activity_id
      };
      let res = await apis_activity.getWxActivityDetail(params);
      if (res.code === 200) {
        if (!res.data.images_url[0]) {
          res.data.images_url[0] = this.defaultImgUrl;
        }
        res.data.des = res.data.des.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        this.activityInfo = res.data;
        const today = (/* @__PURE__ */ new Date()).getTime();
        this.countdownTime = res.data.apply_end_time * 1e3 - today;
        if (res.data.apply_end_time != 0) {
          this.getCountdown(this.countdownTime);
        }
        this.starStatus = res.data.is_collect == 1 ? 1 : 0;
        if (res.data.is_collect === 1) {
          this.options[0] = {
            icon: "star-filled",
            text: "收藏",
            color: "rgb(255, 179, 73)"
          };
        } else {
          this.options[0] = {
            icon: "star",
            text: "收藏",
            color: "rgb(192, 196, 204)"
          };
        }
        this.share.title = res.data.name;
        if (res.data.online_apply == 1 && res.data.status == 1) {
          this.customButtonGroup1[0].text = "立即报名";
        } else {
          this.customButtonGroup1[0].text = res.data.status_str;
        }
        this.load_finish = true;
      } else {
        this.$showToastNone(res.message);
      }
      this.getApplicant();
    },
    // 获取最近参与的人
    async getApplicant() {
      const params = {
        activity_id: this.activity_id,
        page: 1,
        status: "1,5",
        size: 5
      };
      let res = await apis_activity.getApplicant(params);
      if (res.code === 200) {
        if (res.data.list.length > 5) {
          res.data.list = res.data.list.slice(0, 5);
        }
        this.applyInfo = res.data;
      }
    },
    // 点击直播按钮
    clickLive() {
      this.$showToastNone("点击直播按钮");
    },
    getCountdown(diff) {
      let times = parseInt(diff / 1e3);
      var days = parseInt(times / (24 * 60 * 60));
      var hours = parseInt(times % (24 * 60 * 60) / (60 * 60));
      var minutes = parseInt(times % (60 * 60) / 60);
      var seconds = times % 60;
      this.timeData.days = days;
      this.timeData.hours = hours;
      this.timeData.minutes = minutes;
      this.timeData.seconds = seconds;
    },
    openMap() {
      common_vendor.index.openLocation({
        latitude: +this.activityInfo.latitude,
        longitude: +this.activityInfo.longitude,
        name: "",
        address: "",
        scale: 16,
        infoUrl: ""
      });
    },
    toActivity() {
      common_vendor.index.navigateTo({
        url: "/pages/activityJoinMember/activityJoinMember?activity_id=" + this.activity_id
      });
    },
    onClickOne(e) {
      if (e.index == 0) {
        this.collect();
      }
    },
    onClickGroup(e) {
      if (e.index == 0) {
        if (this.activityInfo.online_apply == 1 && this.activityInfo.status == 1) {
          common_vendor.index.navigateTo({
            url: "/pages/activityApply/activityApply?activity_id=" + this.activity_id
          });
        } else {
          this.$showToastNone(this.activityInfo.status_str);
        }
      }
    },
    collect: utils_buttonClick.debounce(async function() {
      let flag = await getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
      let params = {
        type_id: 4,
        topic_id: this.activity_id,
        small_type_id: 0,
        type: 2,
        status: this.starStatus === 1 ? 2 : 1
      };
      await apis_activity.addWxCollect(params);
      this.starStatus = this.starStatus == 1 ? 0 : 1;
      let message = this.starStatus ? "收藏成功" : "取消收藏";
      common_vendor.index.showToast({
        icon: "success",
        title: message
      });
      this.getActivityDetail();
    }, 300),
    shareMethod() {
    }
  }
};
if (!Array) {
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _component_stadium_recommend = common_vendor.resolveComponent("stadium-recommend");
  const _component_good_nav = common_vendor.resolveComponent("good-nav");
  (_component_skeleton + _easycom_uni_icons2 + _easycom_uni_countdown2 + _component_stadium_recommend + _component_good_nav)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_countdown)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.load_finish
  }, !$data.load_finish ? {
    b: common_vendor.p({
      type: "detail"
    })
  } : common_vendor.e({
    c: $data.activityInfo.images_url
  }, $data.activityInfo.images_url ? {
    d: common_vendor.f($data.activityInfo.images_url, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    })
  } : {}, {
    e: common_vendor.t($data.activityInfo.name),
    f: $options.live_tag.title
  }, $options.live_tag.title ? {
    g: common_vendor.t($options.live_tag.title),
    h: $options.live_tag.color,
    i: common_vendor.o((...args) => $options.clickLive && $options.clickLive(...args))
  } : {}, {
    j: common_vendor.p({
      type: "eye",
      size: "16",
      color: "#E4E7ED"
    }),
    k: common_vendor.t($data.activityInfo.visit_count),
    l: common_vendor.p({
      type: "star",
      size: "16",
      color: "#E4E7ED"
    }),
    m: common_vendor.t($data.activityInfo.collect_count),
    n: common_vendor.t($data.activityInfo.is_free === 2 ? "收费" : "免费"),
    o: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-time",
      size: "16",
      color: "#C0C4CC"
    }),
    p: common_vendor.t($data.activityInfo.start_time),
    q: common_vendor.t($data.activityInfo.end_time),
    r: $data.activityInfo.apply_end_time != 0
  }, $data.activityInfo.apply_end_time != 0 ? {
    s: common_vendor.p({
      day: $data.timeData.days,
      hour: $data.timeData.hours,
      minute: $data.timeData.minutes,
      second: $data.timeData.seconds,
      color: "#FFFFFF",
      ["background-color"]: "#007AFF"
    })
  } : {}, {
    t: common_vendor.t($data.activityInfo.address),
    v: common_vendor.o($options.openMap),
    w: common_vendor.p({
      type: "location",
      size: "26",
      color: "#C0C4CC"
    }),
    x: common_vendor.f($data.applyInfo.list, (item, index, i0) => {
      return {
        a: index,
        b: "url(" + item.avatar_url + ")"
      };
    }),
    y: $data.applyInfo.count > 5
  }, $data.applyInfo.count > 5 ? {} : {}, {
    z: common_vendor.t($options.applyInfoCount),
    A: common_vendor.o((...args) => $options.toActivity && $options.toActivity(...args)),
    B: $data.activityInfo.des,
    C: common_vendor.o($options.onClickOne),
    D: common_vendor.o($options.onClickGroup),
    E: common_vendor.p({
      fill: true,
      options: $data.options,
      ["button-group"]: $data.customButtonGroup1
    })
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c8aaa9f"], ["__file", "E:/gxm/uniapp-shandong/pages/activityDetail/activityDetail.vue"]]);
wx.createPage(MiniProgramPage);
