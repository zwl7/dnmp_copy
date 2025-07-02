"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "navBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    showBack: {
      type: Boolean,
      default: false
    },
    backColor: {
      type: String,
      default: "#fff"
    },
    titleColor: {
      type: String,
      default: "#fff"
    },
    moduleKey: {
      type: String,
      default: "stadium"
    },
    searchTitle: {
      type: String,
      default: ""
    },
    searchColor: {
      type: String,
      default: "#F7F9FC"
    },
    navColor: {
      type: String,
      default: "#fff"
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      navBarHeight: 0,
      menuRight: 0,
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0
    };
  },
  computed: {
    headerStyle() {
      let obj = {
        height: `${this.navBarHeight}px`,
        paddingLeft: `${this.menuRight * 2}px`,
        paddingRight: `${this.menuRight + this.menuWidth}px`,
        paddingTop: `${this.menuTop}px`,
        backgroundColor: this.navColor
      };
      if (this.isFixed) {
        obj["position"] = "fixed";
      }
      return obj;
    }
  },
  created() {
    const app = getApp();
    let { menuRight, menuTop, navBarHeight, menuHeight, menuWidth } = app.globalData;
    this.menuHeight = menuHeight;
    this.menuTop = menuTop;
    this.navBarHeight = navBarHeight;
    this.menuWidth = menuWidth;
    this.menuRight = menuRight;
  },
  methods: {
    handleSearch() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/platform/search/search?module=" + this.moduleKey
      });
    },
    handleBack() {
      common_vendor.index.navigateBack({
        fail(err) {
          console.log(err);
          common_vendor.index.switchTab({
            url: "/pages/tabbar/newHome/newHome"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showBack
  }, $props.showBack ? {
    b: common_vendor.p({
      type: "left",
      size: "20",
      color: $props.backColor
    }),
    c: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args))
  } : {}, {
    d: common_vendor.t($props.title),
    e: $props.titleColor,
    f: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    g: $props.searchTitle
  }, $props.searchTitle ? {
    h: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-search",
      size: "18",
      color: "#A8ABB2"
    }),
    i: common_vendor.t($props.searchTitle),
    j: $data.menuHeight + "px",
    k: $props.searchColor,
    l: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args))
  } : {}, {
    m: $data.menuHeight + "px",
    n: common_vendor.s($options.headerStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-daf2569b"]]);
wx.createComponent(Component);
