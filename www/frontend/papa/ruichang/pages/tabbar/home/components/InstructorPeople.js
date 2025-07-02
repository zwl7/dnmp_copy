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
const common_assets = require("../../../../common/assets.js");
const CardType = () => "./CardType.js";
const rankIcon = () => "../../../../components/LevelIcon/rank.js";
const levelIcon = () => "../../../../components/LevelIcon/index.js";
const _sfc_main = {
  components: {
    CardType,
    rankIcon,
    levelIcon
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      defaultImg: common_assets.defaultAvatar,
      titleInfo: {
        title: "社体指导员",
        num: this.count,
        unit: "个",
        color: "#F47E15"
      },
      list: [],
      count: 0
    };
  },
  created() {
    this.getInstructorList();
  },
  methods: {
    handleClickMore() {
      common_vendor.index.switchTab({
        url: "/pages/tabbar/commonPage/index"
      });
    },
    getInstructorList() {
      return __async(this, null, function* () {
        let res = yield apis_home_index.getWxInstructorList({ page: 1, size: 5 });
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
        url: `/pages-sub/instructorDetail/index?instructor_id=${item.instructor_id}`
      });
    }
  }
};
if (!Array) {
  const _component_levelIcon = common_vendor.resolveComponent("levelIcon");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_CardType = common_vendor.resolveComponent("CardType");
  (_component_levelIcon + _component_empty + _component_CardType)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.tag_ids_str),
        c: item.avatar || $data.defaultImg,
        d: "393a2060-1-" + i0 + ",393a2060-0",
        e: common_vendor.p({
          level: item.level
        }),
        f: item.instructor_id,
        g: common_vendor.o(($event) => $options.handleClickItem(item), item.instructor_id)
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
      bg: "https://cdn-static.papa.com.cn/social/home-bg5.png",
      titleInfo: __spreadProps(__spreadValues({}, $data.titleInfo), {
        num: $data.count
      })
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-393a2060"]]);
wx.createComponent(Component);
//# sourceMappingURL=InstructorPeople.js.map
