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
const ActivityItem = () => "../../components/ActivityItem/index.js";
const _sfc_main = {
  components: { ActivityItem },
  data() {
    return {
      type: 4,
      voluntary_activity_id: "",
      item: {},
      images: []
    };
  },
  computed: {
    likeIcon() {
      return this.$store.app.currentThemeIconByType["LIKE_ICON"];
    }
  },
  onLoad(options) {
    this.voluntary_activity_id = options.voluntary_activity_id;
    this.getDetail(this.voluntary_activity_id);
  },
  methods: {
    getUpdate(item) {
      this.getDetail(item.voluntary_activity_id);
    },
    getDetail(id) {
      return __async(this, null, function* () {
        let res = yield this.$api.getVoluntaryActivityItem({ voluntary_activity_id: id });
        if (res.code == 200) {
          let item = res.data;
          let formatObj = {
            addressFormat: item.province_str + item.county_str + item.city_str + item.address,
            startTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
          };
          this.item = __spreadValues(__spreadValues({}, item), formatObj);
          this.images = (this.item.like_members || []).map((likeItem) => {
            return { avatar: likeItem.avatar, name: likeItem.name };
          });
        } else {
          this.$toast(res.message);
        }
      });
    }
  }
};
if (!Array) {
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ActivityItem + _easycom_uv_icon2 + _easycom_uv_avatar2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_avatar = () => "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_avatar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.getUpdate),
    b: common_vendor.p({
      item: $data.item,
      type: $data.type,
      ["show-comment"]: true
    }),
    c: $data.item.love > 0
  }, $data.item.love > 0 ? common_vendor.e({
    d: common_vendor.p({
      name: $options.likeIcon,
      size: "20"
    }),
    e: common_vendor.f($data.images, (likeItem, k0, i0) => {
      return common_vendor.e({
        a: likeItem.avatar
      }, likeItem.avatar ? {
        b: "9f782bff-3-" + i0 + ",9f782bff-0",
        c: common_vendor.p({
          src: likeItem.avatar,
          alt: "头像",
          mode: "aspectFill"
        })
      } : {
        d: "9f782bff-4-" + i0 + ",9f782bff-0",
        e: common_vendor.p({
          text: (likeItem.name || "").substr(2, 5),
          fontSize: "13",
          ["bg-color"]: "rgb(114, 220, 220)"
        })
      }, {
        f: likeItem
      });
    }),
    f: $data.item.love > 5
  }, $data.item.love > 5 ? {
    g: common_vendor.t($data.item.love)
  } : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f782bff"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
