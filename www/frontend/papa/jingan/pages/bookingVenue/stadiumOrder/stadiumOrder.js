"use strict";
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
const navBar = () => "../../../components/navBar/index.js";
const weekCalendar = () => "./components/weekCalendar.js";
const _sfc_main = {
  components: {
    navBar,
    weekCalendar
  },
  data() {
    return {
      currentPickWeek: 1,
      navColor: "transparent",
      stadium_id: "",
      navBarHeight: 0
    };
  },
  onUnload() {
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    if (options.stadium_id) {
      this.stadium_id = options.stadium_id;
      this.getDetail();
    }
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#89baff";
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    handleWeekPick(e) {
      this.currentPickWeek = e;
    },
    getDetail() {
      return __async(this, null, function* () {
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_weekCalendar = common_vendor.resolveComponent("weekCalendar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_weekCalendar + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "场地预定",
      titleColor: "rgba(50, 50, 51, 1)",
      backColor: "rgba(50, 50, 51, 1)",
      showBack: true
    }),
    b: common_vendor.o($options.handleWeekPick),
    c: common_vendor.p({
      currentPick: $data.currentPickWeek
    }),
    d: $data.navBarHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
