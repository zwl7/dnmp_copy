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
const common_vendor = require("../../common/vendor.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_assets = require("../../common/assets.js");
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const utils_platform = require("../../utils/platform.js");
const utils_index = require("../../utils/index.js");
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  data() {
    return {
      form: {
        apply_end_time: 0
      },
      map: common_assets.map,
      call: common_assets.call,
      share: common_assets.share,
      time: 30 * 60 * 60 * 1e3,
      timeData: {},
      customStyle: {}
    };
  },
  onLoad(options) {
    if (options.q) {
      let url = decodeURIComponent(options.q);
      options.id = utils_index.parseQueryParams(url).id;
    }
    if (options.id) {
      let form = {
        id1: options.id,
        title: options.title,
        address1: options.address
      };
      this.form = __spreadValues({}, form);
      this.getDetail();
    }
  },
  methods: {
    toLocation(item) {
      if (!item.address) {
        return this.$toast("暂无地址");
      }
      window.location.href = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${item.lat},${item.lng};title:${item.address};addr:${item.address}&referer=社体指导员移动端`;
    },
    toPhone(phone) {
      if (phone) {
        utils_platform.isMp ? common_vendor.index.makePhoneCall({ phoneNumber: phone }) : window.location.href = `tel:${phone}`;
      } else {
        this.$toast("暂无联系方式");
      }
    },
    countTime(endTime) {
      let now = Date.parse(/* @__PURE__ */ new Date());
      let timeDiff = this.$dayjs.duration(endTime - now);
      return timeDiff.$ms;
    },
    getSwiperList(list = []) {
      let data = list.map((item) => {
        return {
          images_url: item.http_img
        };
      });
      data.length == 0 ? data.push({ images_url: "https://cdn-static.papa.com.cn/social/default.png" }) : "";
      return data;
    },
    getBg(tag) {
      switch (tag) {
        case "报名中":
          return "#4cd964";
        case "未开始":
          return "#1b8bff";
        case "报名结束":
          return "#9f9fa0";
        default:
          return "#1b8bff";
      }
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield this.$api.getWxTrainActivityItem({ train_activity_id: this.form.id1 });
        if (res.code == 200) {
          let form = __spreadValues({
            title1: this.form.title,
            address1: this.form.address1
          }, res.data);
          this.form = __spreadValues({
            formatTitle: form.title1,
            formatAddress: form.address1 + form.address,
            applyEndTime: this.$dayjs(form.apply_end_time * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            applyStartTime: this.$dayjs(form.apply_start_time * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            trainEndTime: this.$dayjs(form.train_end_time * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            trainStartTime: this.$dayjs(form.train_start_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
          }, form);
        } else {
          this.$toast(res.message);
        }
      });
    },
    onChange(e) {
      this.timeData = e;
    },
    apply(form) {
      return __async(this, null, function* () {
        if (!utils_storages_uniStorage.uniStorage.get("is_login")) {
          try {
            yield this.$dialog("您还未登录,去登录?", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消"
            });
          } catch (error) {
            console.log(error);
            return;
          }
          common_vendor.index.navigateTo({
            url: "/pages/login/index"
          });
          return;
        }
        utils_storages_uniStorage.uniStorage.set("APPLYFORM", { trainId: form.train_activity_id, title: form.promote_name });
        common_vendor.index.navigateTo({
          url: `/pages-sub/trainApply/index?id=${form.train_activity_id}`
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_count_down2 = common_vendor.resolveComponent("uv-count-down");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_parse2 = common_vendor.resolveComponent("uv-parse");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_count_down2 + _easycom_uv_icon2 + _easycom_uv_parse2 + _easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_uv_count_down = () => "../../node-modules/@climblee/uv-ui/components/uv-count-down/uv-count-down.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_parse = () => "../../node-modules/@climblee/uv-ui/components/uv-parse/uv-parse.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_count_down + _easycom_uv_icon + _easycom_uv_parse + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.getSwiperList($data.form.cover_img_arr), (item, index, i0) => {
      return {
        a: item.images_url,
        b: index
      };
    }),
    b: common_vendor.t($data.timeData.days),
    c: common_vendor.t($data.timeData.hours > 10 ? $data.timeData.hours : $data.timeData.hours),
    d: common_vendor.t($data.timeData.minutes),
    e: common_vendor.t($data.timeData.seconds),
    f: common_vendor.o($options.onChange),
    g: common_vendor.p({
      time: $options.countTime($data.form.apply_end_time * 1e3),
      format: "DD:HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    h: common_vendor.t($data.form.promote_name),
    i: common_vendor.t($data.form.status_str),
    j: $options.getBg($data.form.status_str),
    k: common_vendor.f($data.form.tag_ids_arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tag_id_str),
        b: index
      };
    }),
    l: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    m: common_vendor.t($data.form.applyStartTime),
    n: common_vendor.t($data.form.applyEndTime),
    o: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    p: common_vendor.t($data.form.trainStartTime),
    q: common_vendor.t($data.form.trainEndTime),
    r: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    s: common_vendor.t($data.form.address),
    t: common_vendor.o(($event) => $options.toLocation($data.form)),
    v: common_vendor.o(($event) => $options.toLocation($data.form)),
    w: common_vendor.p({
      name: $data.map,
      color: "#A5ADBA",
      size: "32"
    }),
    x: common_vendor.t($data.form.main_hold_unit),
    y: common_vendor.t($data.form.help_hold_unit),
    z: common_vendor.t($data.form.real_hold_unit),
    A: common_vendor.p({
      content: $data.form.text
    }),
    B: common_vendor.p({
      name: $data.call,
      size: "22"
    }),
    C: common_vendor.o(($event) => $options.toPhone($data.form.phone)),
    D: common_vendor.t($data.form.status_str),
    E: common_vendor.o(($event) => $options.apply($data.form)),
    F: common_vendor.p({
      disabled: $data.form.status_str != "报名中" || $data.form.wx_is_apply != 1,
      shape: "circle",
      type: "primary",
      customStyle: $data.customStyle
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-30135dab"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
