"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_activity = require("../../apis/activity.js");
const apis_index = require("../../apis/index.js");
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
      site_id: "",
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
        text: "电话咨询",
        backgroundColor: "#e05830",
        color: "#fff"
      }]
    };
  },
  computed: {},
  onLoad(options) {
    this.site_id = options.site_id;
    this.getWxSiteDetail();
    this.share = {
      title: "",
      path: "/pages/associationDetail/associationDetail?site_id" + this.site_id,
      withShareTicket: true
    };
  },
  methods: {
    async getWxSiteDetail() {
      let params = {
        site_id: this.site_id
      };
      let res = await apis_index.getWxSiteDetail(params);
      if (res.code === 200) {
        res.data.des = res.data.des.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        this.activityInfo = res.data;
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
        this.activityInfo.phone = this.activityInfo.phone.replace(/ /g, "");
        if (res.data.service_status == 1 && res.data.service_provider !== 0) {
          this.customButtonGroup1[0].text = "预订";
        } else {
          if (!this.activityInfo.phone) {
            this.customButtonGroup1[0].backgroundColor = "#79cff5";
          }
          this.customButtonGroup1[0].text = "电话咨询";
        }
        this.load_finish = true;
      } else {
        this.$showToastNone(res.message);
      }
    },
    onClickOne(e) {
      if (e.index == 0) {
        this.collect();
      }
    },
    onClickGroup(e) {
      if (e.index == 0) {
        if (e.content.text === "电话咨询") {
          this.clickPhone();
        }
        if (e.content.text === "预订") {
          this.handleReserve();
        }
      }
    },
    collect: utils_buttonClick.debounce(async function() {
      let flag = await getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
      let params = {
        type_id: 1,
        topic_id: this.activityInfo.site_id,
        small_type_id: this.activityInfo.type_id,
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
      this.getWxStadiumDetail();
    }, 300),
    shareMethod() {
    },
    openMap() {
      let {
        latitude,
        longitude
      } = this.activityInfo;
      if (!latitude || !longitude) {
        this.$showToastNone("暂无位置信息");
        return;
      }
      common_vendor.index.openLocation({
        latitude: +latitude,
        longitude: +longitude,
        name: "",
        address: "",
        scale: 16,
        infoUrl: ""
      });
    },
    clickPhone() {
      if (!this.activityInfo.phone) {
        this.$showToastNone("暂无电话");
        return;
      }
      common_vendor.index.makePhoneCall({
        phoneNumber: this.activityInfo.phone,
        fail(err) {
          console.error(err);
        }
      });
    },
    handleReserve() {
      this.$showToastNone("预定");
    }
  }
};
if (!Array) {
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_stadium_recommend = common_vendor.resolveComponent("stadium-recommend");
  const _component_good_nav = common_vendor.resolveComponent("good-nav");
  (_component_skeleton + _component_stadium_recommend + _component_good_nav)();
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
    f: common_vendor.t($data.activityInfo.address),
    g: common_vendor.t($data.activityInfo.start_time),
    h: common_vendor.t($data.activityInfo.end_time),
    i: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    j: $data.activityInfo.phone != ""
  }, $data.activityInfo.phone != "" ? {
    k: common_vendor.o((...args) => $options.clickPhone && $options.clickPhone(...args))
  } : {}, {
    l: $data.activityInfo.des,
    m: common_vendor.o($options.onClickOne),
    n: common_vendor.o($options.onClickGroup),
    o: common_vendor.p({
      fill: true,
      options: $data.options,
      ["button-group"]: $data.customButtonGroup1
    })
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0b7c0e35"], ["__file", "E:/gxm/uniapp-shandong/pages/associationDetail/associationDetail.vue"]]);
wx.createPage(MiniProgramPage);
