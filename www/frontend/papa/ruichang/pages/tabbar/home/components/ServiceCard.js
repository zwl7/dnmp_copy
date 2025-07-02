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
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  emits: ["click"],
  data() {
    return {
      urlMap: {
        fwdd: "/pagesSub/sportsService/sprotOrder/form",
        ydtd: "/pages/instructorSite/index",
        ykt: "/pagesSub/platform/yunLesson/index"
      }
    };
  },
  computed: {},
  onLoad(options) {
  },
  methods: {
    handleClick(type) {
      return __async(this, null, function* () {
        const url = this.urlMap[type];
        if (!url) {
          common_vendor.index.showToast({
            title: "敬请期待",
            icon: "none"
          });
          return;
        }
        if (type === "fwdd") {
          let flag = yield getApp().judgeIsAuth();
          if (!flag) {
            return;
          }
        }
        common_vendor.index.navigateTo({
          url
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.handleClick("fwdd")),
    b: common_vendor.o(($event) => $options.handleClick("ykt")),
    c: common_vendor.o(($event) => $options.handleClick("ydtd"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7dd97260"]]);
wx.createComponent(Component);
//# sourceMappingURL=ServiceCard.js.map
