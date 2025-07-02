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
require("../../../../store/app/index.js");
const store_user_index = require("../../../../store/user/index.js");
const config_sprosServiceMenu = require("../../../../config/sprosServiceMenu.js");
const _sfc_main = {
  name: "ServiceOrderBanner",
  emits: ["click"],
  data() {
    return {
      orderMenu: config_sprosServiceMenu.sportManageMenu[5],
      userStore: null
    };
  },
  mounted() {
    const userStore = store_user_index.useUserStore();
    this.userStore = userStore;
  },
  methods: {
    onClick() {
      return __async(this, null, function* () {
        common_vendor.index.navigateTo({
          url: this.orderMenu.path
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.orderMenu.url,
    b: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47c99fe1"]]);
wx.createComponent(Component);
