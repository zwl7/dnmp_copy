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
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const apis_common = require("../../../apis/common.js");
const apis_stadium = require("../../../apis/stadium.js");
const mixins_stadiumReserve = require("../../../mixins/stadiumReserve.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const bottomButton = () => "../../../components/bottomButton.js";
const orderCard = () => "./components/orderCard.js";
const _sfc_main = {
  mixins: [mixins_stadiumReserve.stadiumReserve, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    bottomButton,
    orderCard
  },
  data() {
    return {
      orderCardList1: [
        {
          img_url: "https://img.js.design/assets/img/6582c4f6ef6fba803cfd0df6.png",
          sport_tag_name: "羽毛球",
          sport_tag_id: 12,
          opertor: "订场"
        },
        {
          img_url: "https://img.js.design/assets/img/6582c4f6ef6fba803cfd0df6.png",
          sport_tag_name: "篮球",
          sport_tag_id: 11,
          opertor: "订场"
        }
      ],
      orderCardList2: [
        {
          img_url: "https://img.js.design/assets/img/6582c4f6ef6fba803cfd0df6.png",
          sport_tag_name: "羽毛球",
          sport_tag_id: 12,
          opertor: "购票"
        },
        {
          img_url: "https://img.js.design/assets/img/6582c4f6ef6fba803cfd0df6.png",
          sport_tag_name: "篮球",
          sport_tag_id: 11,
          opertor: "购票"
        }
      ],
      tabList: [
        {
          name: "全部项目",
          id: "0"
        },
        {
          name: "羽毛球",
          id: "1"
        },
        {
          name: "篮球",
          id: "2"
        }
      ],
      //标签列表
      phoneFill: common_assets.phoneFill,
      info: {},
      form: {},
      isCollect: false
    };
  },
  computed: {
    buttonTitle() {
      if (this.info.service_status == 1 && this.info.service_provider !== 0) {
        return "预订";
      } else {
        return "电话咨询";
      }
    }
  },
  onUnload() {
  },
  onLoad(options) {
    if (options.stadium_id) {
      let form = {
        stadium_id: options.stadium_id
      };
      this.form = __spreadValues({}, form);
      this.getDetail();
    }
  },
  methods: {
    buyPick(e) {
      console.log(e);
    },
    orderPick(e) {
      common_vendor.index.navigateTo({
        url: "/pages/bookingVenue/stadiumOrder/stadiumOrder?stadium_id=" + e.stadium_id
      });
    },
    pickTabItem(e) {
      console.log(e);
    },
    toLocation() {
      this.$toLocation(this.info);
    },
    toPhone() {
      if (this.info.service_status == 1 && this.info.service_provider !== 0) {
        this.handleReserve(this.info);
      } else {
        this.$callPhone(this.info);
      }
    },
    toCollect() {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        let isCollect = true;
        if (this.info.is_collect == 1) {
          isCollect = false;
        }
        let params = {
          type_id: 3,
          type: 2,
          // small_type_id: this.info.type_id,
          topic_id: this.form.stadium_id,
          // status: this.isCollect ? 1 : 2,
          status: isCollect ? 1 : 2
        };
        let res = yield apis_common.addWxCollect(params);
        if (res.code == 200) {
          this.starStatus = this.info.is_collect ? 2 : 1;
          if (this.info.is_collect == 1) {
            common_vendor.index.showToast({
              type: "fail",
              title: "取消收藏"
            });
            this.isCollect = false;
            this.info.is_collect = 2;
          } else {
            common_vendor.index.showToast({
              type: "success",
              title: "收藏成功"
            });
            this.isCollect = true;
            this.info.is_collect = 1;
          }
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.message
          });
        }
      }), 1e3);
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_stadium.getWxStadium(this.form);
        if (res.code == 200) {
          res.data.des = this.$formatRichText(res.data.des, "暂无内容");
          if (res.data.images_url && res.data.images_url.length == 0) {
            res.data.images_url = [common_assets.defaultUrl$1];
          }
          this.info = res.data;
          this.isCollect = res.data.is_collect == 1 ? true : false;
        }
      });
    },
    apply(form) {
      uniStorage.set("APPLYFORM", {
        trainId: form.train_activity_id,
        title: form.promote_name
      });
      common_vendor.index.navigateTo({
        url: `/pages/trainApply/index`
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_orderCard = common_vendor.resolveComponent("orderCard");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _easycom_uni_icons2 + _easycom_uv_tabs2 + _component_orderCard + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uni_icons + _easycom_uv_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "场馆详情",
      titleColor: "#333",
      backColor: "#333",
      showBack: true
    }),
    b: common_vendor.f($data.info.images_url, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    c: common_vendor.t($data.info.name),
    d: common_vendor.f($data.info.sport_tag_arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.sport_tag_name),
        b: index
      };
    }),
    e: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    f: common_vendor.t($data.info.start_time),
    g: common_vendor.t($data.info.end_time)
  }, {}, {
    i: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    j: common_vendor.t($data.info.address),
    k: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-dianhua",
      color: _ctx.themePrimaryColorGetter,
      size: "20"
    }),
    l: common_vendor.o(($event) => $options.toPhone($data.info)),
    m: common_vendor.o(($event) => $options.toLocation($data.info)),
    n: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-locationfill",
      size: "20",
      color: _ctx.themePrimaryColorGetter
    }),
    o: common_vendor.o($options.pickTabItem),
    p: common_vendor.p({
      list: $data.tabList,
      scrollable: $data.tabList.length > 3,
      lineColor: _ctx.themeTabsLineColorGetter,
      activeStyle: {
        color: "#253858",
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400"
      }
    }),
    q: $data.orderCardList1.length > 0
  }, $data.orderCardList1.length > 0 ? {
    r: common_vendor.o($options.orderPick),
    s: common_vendor.p({
      title: "订场",
      list: $data.orderCardList1
    })
  } : {}, {
    t: $data.orderCardList2.length > 0
  }, $data.orderCardList2.length > 0 ? {
    v: common_vendor.o($options.buyPick),
    w: common_vendor.p({
      title: "购票",
      list: $data.orderCardList2
    })
  } : {}, {
    x: $data.info.des
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e89186c3"]]);
wx.createPage(MiniProgramPage);
