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
const apis_site = require("../../../apis/site.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    bottomButton
  },
  data() {
    return {
      share: common_assets.share,
      collectFill: common_assets.collectFill,
      collect: common_assets.collect,
      phoneFill: common_assets.phoneFill,
      info: {},
      form: {},
      isCollect: false
    };
  },
  computed: {
    buttonTitle() {
      if (this.info.reservation == 1) {
        return "预约";
      } else {
        return "电话咨询";
      }
    }
  },
  onUnload() {
  },
  onLoad(options) {
    if (options.health_id) {
      let form = {
        health_id: options.health_id
      };
      this.form = __spreadValues({}, form);
      this.getDetail();
    }
  },
  methods: {
    toLocation() {
      this.$toLocation(this.info);
    },
    toPhone(info) {
      if (info.reservation == 1) {
        common_vendor.index.navigateTo({
          url: `/pagesSub/fitnessReserveTime/fitnessReserveTime?health_id=${info.health_id}`
        });
      } else {
        this.$callPhone(this.info);
      }
    },
    toCollect() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
          let isCollect = true;
          if (this.info.is_collect == 1) {
            isCollect = false;
          }
          let params = {
            type_id: 9,
            type: 2,
            // small_type_id: this.info.type_id,
            topic_id: this.form.health_id,
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
      });
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_site.getHealth(this.form);
        if (res.code == 200) {
          res.data.des = this.$formatRichText(res.data.des, "暂无内容");
          if (res.data.images_url && res.data.images_url.length == 0) {
            res.data.images_url = [common_assets.defaultUrl$1];
          }
          res.data.sport_tag_arr = res.data.common_type_ids_str_arr ? res.data.common_type_ids_str_arr : [];
          this.info = res.data;
          this.isCollect = res.data.is_collect == 1 ? true : false;
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _easycom_uni_icons2 + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uni_icons + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "体质检测点详情",
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
        a: common_vendor.t(item),
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
    l: common_vendor.o((...args) => $options.toPhone && $options.toPhone(...args)),
    m: common_vendor.o(($event) => $options.toLocation($data.info)),
    n: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-locationfill",
      size: "20",
      color: _ctx.themePrimaryColorGetter
    }),
    o: $data.info.des,
    p: $data.isCollect ? $data.collectFill : $data.collect,
    q: common_vendor.n({
      collect: $data.isCollect
    }),
    r: common_vendor.o((...args) => $options.toCollect && $options.toCollect(...args)),
    s: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-lianjietiaozhuan",
      size: "20"
    }),
    t: common_vendor.t($options.buttonTitle),
    v: common_vendor.o(($event) => $options.toPhone($data.info))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d14bf3b"]]);
wx.createPage(MiniProgramPage);
