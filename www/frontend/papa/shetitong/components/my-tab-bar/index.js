"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const utils_modals_uniapp = require("../../utils/modals/uniapp.js");
const utils_assets_local = require("../../utils/assets/local.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "MyTabBar",
  props: {},
  data() {
    return {
      current: 0,
      list: [
        {
          pagePath: "/pages/tabbar/home/index",
          iconPath: this.getIconByTheme().index.iconPath,
          selectedIconPath: this.getIconByTheme().index.selectedIconPath,
          text: "首页"
        },
        {
          pagePath: "/pages/tabbar/train/index",
          iconPath: this.getIconByTheme().train.iconPath,
          selectedIconPath: this.getIconByTheme().train.selectedIconPath,
          text: "培训"
        },
        {
          pagePath: "",
          iconPath: this.getIconByTheme().center.iconPath,
          selectedIconPath: this.getIconByTheme().center.selectedIconPath,
          text: "服务发布",
          midButton: true
        },
        {
          pagePath: "/pages/tabbar/commonPage/index",
          iconPath: this.getIconByTheme().common.iconPath,
          selectedIconPath: this.getIconByTheme().common.selectedIconPath,
          text: this.getTitle()
        },
        {
          pagePath: "/pages/tabbar/personal/index",
          iconPath: this.getIconByTheme().mine.iconPath,
          selectedIconPath: this.getIconByTheme().mine.selectedIconPath,
          text: "我的"
        }
      ]
    };
  },
  created(options) {
  },
  methods: {
    getIconByTheme() {
      let obj = {
        index: {
          iconPath: utils_assets_local.useAssets("tabbar/blue_index.png"),
          selectedIconPath: utils_assets_local.useAssets("tabbar/blue_index_select.png")
        },
        train: {
          iconPath: utils_assets_local.useAssets("tabbar/blue_train.png"),
          selectedIconPath: utils_assets_local.useAssets("tabbar/blue_train_select.png")
        },
        common: {
          iconPath: utils_assets_local.useAssets("tabbar/blue_instruct.png"),
          selectedIconPath: utils_assets_local.useAssets("tabbar/blue_instruct_select.png")
        },
        mine: {
          iconPath: utils_assets_local.useAssets("tabbar/blue_mine.png"),
          selectedIconPath: utils_assets_local.useAssets("tabbar/blue_mine_select.png")
        },
        center: {
          iconPath: common_assets.center,
          selectedIconPath: common_assets.center
        }
      };
      if (store_index.store.useAppStore().themeType == "2") {
        obj = {
          index: {
            iconPath: this.getTabbarIcon("tabbar-home"),
            selectedIconPath: this.getTabbarIcon("tabbar-home-select")
          },
          train: {
            iconPath: this.getTabbarIcon("tabbar-train"),
            selectedIconPath: this.getTabbarIcon("tabbar-train-select")
          },
          common: {
            iconPath: this.getTabbarIcon("tabbar-zd"),
            selectedIconPath: this.getTabbarIcon("tabbar-zd-select")
          },
          mine: {
            iconPath: this.getTabbarIcon("tabbar-mine"),
            selectedIconPath: this.getTabbarIcon("tabbar-mine-select")
          },
          center: {
            iconPath: common_assets.center2,
            selectedIconPath: common_assets.center2
          }
        };
      }
      return obj;
    },
    getTitle() {
      return store_index.store.useAppStore().themeType == "1" ? "指导员" : "站点";
    },
    getTabbarIcon(icon) {
      return `https://cdn-static.papa.com.cn/social/${icon}.png`;
    },
    setCurrent() {
      const currentRoute = getCurrentPages()[getCurrentPages().length - 1].route;
      const active = this.list.findIndex((i) => i.pagePath.indexOf(currentRoute) !== -1);
      this.current = active;
    },
    handleChangBar(e) {
      if (!this.list[e].pagePath) {
        const userStore = store_index.store.useUserStore();
        if (!userStore.isLogin) {
          common_vendor.index.redirectTo({ url: "/pages/login/index" });
          return;
        }
        const is_auth_instructor = Number(userStore.userInfo.is_auth_instructor);
        if (is_auth_instructor == 0) {
          utils_modals_uniapp.useDialog("发布志愿服务活动需认证为社体指导员", {
            showCancelButton: true,
            confirmText: "去认证"
          }).then(() => {
            common_vendor.index.navigateTo({ url: "/pages-sub/realname/index" });
          }).catch(() => {
          });
          return;
        }
        common_vendor.index.navigateTo({ url: "/pages-sub/releaseDynamic/index" });
        return;
      }
      if (this.current == e)
        return;
      this.setCurrent();
      common_vendor.index.switchTab({
        url: this.list[e].pagePath
      });
    }
  },
  mounted() {
    this.setCurrent();
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: index != 2
      }, index != 2 ? {
        b: "eefdc051-0-" + i0,
        c: common_vendor.p({
          name: $data.current === index ? item.selectedIconPath : item.iconPath,
          color: "#000",
          size: 22
        }),
        d: common_vendor.t(item.text),
        e: common_vendor.n($data.current === index ? "active" : "")
      } : {
        f: "eefdc051-1-" + i0,
        g: common_vendor.p({
          name: $data.current === index ? item.selectedIconPath : item.iconPath,
          color: "#000",
          size: 47
        }),
        h: common_vendor.t(item.text),
        i: common_vendor.n($data.current === index ? "active" : "")
      }, {
        j: item.text,
        k: common_vendor.o(($event) => $options.handleChangBar(index), item.text)
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eefdc051"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
