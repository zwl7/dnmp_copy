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
const apis_home_index = require("../../../../apis/home/index.js");
const CardType = () => "./CardType.js";
const _sfc_main = {
  components: {
    CardType
  },
  data() {
    return {
      list: [],
      count: 0,
      titleInfo: {
        title: "体育场馆",
        num: this.count,
        unit: "个",
        color: "#3576DF"
      }
    };
  },
  created() {
    this.getSportsStadiumList();
  },
  onLoad(options) {
  },
  methods: {
    handleClickMore() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/platform/stadium/index"
      });
    },
    getSportsStadiumList() {
      return __async(this, null, function* () {
        let res = yield apis_home_index.getStadiumList({ page: 1, size: 5 });
        if (res.code == 200) {
          this.list = res.data.list;
          this.count = res.data.count;
        } else {
          this.$toast(res.message);
        }
      });
    },
    handleClickItem(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/stadium/detail?stadium_id=${item.stadium_id}`
      });
    }
  }
};
if (!Array) {
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_CardType = common_vendor.resolveComponent("CardType");
  (_component_empty + _component_CardType)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.images_url[0],
        b: common_vendor.t(item.distance || ""),
        c: common_vendor.t(item.name),
        d: item.stadium_id,
        e: common_vendor.o(($event) => $options.handleClickItem(item), item.stadium_id)
      };
    }),
    b: $data.list.length == 0
  }, $data.list.length == 0 ? {
    c: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    d: common_vendor.o($options.handleClickMore),
    e: common_vendor.p({
      bg: "https://cdn-static.papa.com.cn/social/home-bg2.png",
      titleInfo: __spreadProps(__spreadValues({}, $data.titleInfo), {
        num: $data.count
      })
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c70da0be"]]);
wx.createComponent(Component);
//# sourceMappingURL=Stadium.js.map
