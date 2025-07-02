"use strict";
const common_vendor = require("../../../../common/vendor.js");
const store_app_index = require("../../../../store/app/index.js");
const store_user_index = require("../../../../store/user/index.js");
const config_sprosServiceMenu = require("../../../../config/sprosServiceMenu.js");
const _sfc_main = {
  name: "serviceManage",
  data() {
    return {
      iconList: [...config_sprosServiceMenu.sportManageMenu],
      userStore: null,
      appStore: null
    };
  },
  computed: {
    todoCenterData() {
      return this.userStore.userTodoCenterData;
    }
  },
  created() {
    const userStore = store_user_index.useUserStore();
    this.userStore = userStore;
    const appStore = store_app_index.useAppStore();
    this.appStore = appStore;
    userStore.getUserTodoCenterData();
    console.log("todoCenterData", this.todoCenterData);
  },
  methods: {
    routeToPath(path) {
      common_vendor.index.navigateTo({
        url: path
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return common_vendor.e({
    a: (_a = $data.userStore) == null ? void 0 : _a.sportManageMenuGetter.length
  }, ((_b = $data.userStore) == null ? void 0 : _b.sportManageMenuGetter.length) ? {
    b: common_vendor.f((_c = $data.userStore) == null ? void 0 : _c.sportManageMenuGetter, (item, k0, i0) => {
      return common_vendor.e({
        a: item.url,
        b: $options.todoCenterData[item.key] && $options.todoCenterData[item.key] > 0
      }, $options.todoCenterData[item.key] && $options.todoCenterData[item.key] > 0 ? {
        c: common_vendor.t($options.todoCenterData[item.key])
      } : {}, {
        d: common_vendor.t(item.name),
        e: item.name,
        f: common_vendor.o(($event) => $options.routeToPath(item.path), item.name)
      });
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1380fbc3"]]);
wx.createComponent(Component);
