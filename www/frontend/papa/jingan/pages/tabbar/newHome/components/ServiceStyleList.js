"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const common_vendor = require("../../../../common/vendor.js");
const apis_sportsService_serviceStyle = require("../../../../apis/sportsService/serviceStyle.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const ServiceStyleItem = () => "./ServiceStyleItem/index.js";
const _sfc_main = {
  name: "ServiceStyleList",
  mixins: [mixins_themeMixins.themeMixins],
  emits: ["like", "comment", "more"],
  components: {
    ServiceStyleItem
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    textColor() {
      return this.themeConfigGetter["--hubei-tabbar-font-active-color"];
    }
  },
  mounted() {
  },
  methods: {
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        let params = {
          page: 1,
          size: 2
        };
        const res = yield apis_sportsService_serviceStyle.getStyleList(params);
        if (res.code === 0) {
          const data = res.data.listData.map((item) => {
            var _a;
            return __spreadProps(__spreadValues({}, item), {
              images: (_a = item.image) == null ? void 0 : _a.split(",")
            });
          });
          this.list = data;
        }
      });
    },
    toServiceStylePage() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/serviceStyle/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_ServiceStyleItem = common_vendor.resolveComponent("ServiceStyleItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_icon2 + _component_ServiceStyleItem + _component_empty)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      size: "16px",
      name: "arrow-right",
      color: $options.textColor
    }),
    b: common_vendor.o((...args) => $options.toServiceStylePage && $options.toServiceStylePage(...args)),
    c: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: "0d9d79a8-1-" + i0,
        b: common_vendor.p({
          item,
          isComment: false
        }),
        c: item.id
      };
    }),
    d: $data.list.length === 0
  }, $data.list.length === 0 ? {
    e: common_vendor.p({
      marginTop: 0
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d9d79a8"]]);
wx.createComponent(Component);
