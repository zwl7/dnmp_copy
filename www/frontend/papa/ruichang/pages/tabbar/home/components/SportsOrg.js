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
const rankIcon = () => "../../../../components/LevelIcon/rank.js";
const _sfc_main = {
  components: {
    CardType,
    rankIcon
  },
  data() {
    return {
      titleInfo: {
        title: "体育组织",
        num: 0,
        unit: "个",
        color: "#E44D4D"
      },
      list: [],
      count: 0
    };
  },
  computed: {},
  created() {
    this.getOrgList();
  },
  onLoad(options) {
  },
  methods: {
    handleClickMore() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/platform/sportsOrg/index"
      });
    },
    handleClickItem(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/sportsOrg/detail?site_id=${item.site_id}`
      });
    },
    getOrgList() {
      return __async(this, null, function* () {
        let res = yield apis_home_index.getSportsOrgList({ page: 1, size: 5, type_id: 8 });
        if (res.code == 200) {
          res.data.list.forEach((item) => {
            item.showImage = item.images_url && item.images_url.length > 0 ? item.images_url[0] : "https://cdn-static.papa.com.cn/social/index-hdfc.png";
          });
          this.list = res.data.list;
          this.count = res.data.count;
        } else {
          this.$toast(res.message);
        }
      });
    }
  }
};
if (!Array) {
  const _component_rankIcon = common_vendor.resolveComponent("rankIcon");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_CardType = common_vendor.resolveComponent("CardType");
  (_component_rankIcon + _component_empty + _component_CardType)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return common_vendor.e({
        a: item.showImage,
        b: item.rank > 0 && item.rank < 11
      }, item.rank > 0 && item.rank < 11 ? {
        c: "865c5c6d-1-" + i0 + ",865c5c6d-0",
        d: common_vendor.p({
          rank: item.rank
        })
      } : {}, {
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.service_num),
        g: common_vendor.t(item.activity_duration),
        h: item.stadium_id,
        i: common_vendor.o(($event) => $options.handleClickItem(item), item.stadium_id)
      });
    }),
    b: $data.list.length == 0
  }, $data.list.length == 0 ? {
    c: common_vendor.p({
      marginTop: 0,
      height: 100
    })
  } : {}, {
    d: common_vendor.o($options.handleClickMore),
    e: common_vendor.p({
      bg: "https://cdn-static.papa.com.cn/social/home-bg1.png",
      titleInfo: __spreadProps(__spreadValues({}, $data.titleInfo), {
        num: $data.count
      })
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-865c5c6d"]]);
wx.createComponent(Component);
//# sourceMappingURL=SportsOrg.js.map
