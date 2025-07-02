"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/assetsUtils/local.js");
const store_app_index = require("../../store/app/index.js");
const _sfc_main = {
  name: "my-tab-bar",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentTab: this.value
      // tabList: [
      //   {
      //     pagePath: '/pages/tabbar/home/home',
      //     iconPath: useAssets('tabbar/index.png'),
      //     selectedIconPath: useAssets('tabbar/index-active.png'),
      //     text: '首页',
      //   },
      //   {
      //     pagePath: '/pages/associationList/associationList',
      //     iconPath: useAssets('tabbar/stadium.png'),
      //     selectedIconPath: useAssets('tabbar/stadium-active.png'),
      //     text: '会员单位',
      //   },
      //   {
      //     pagePath: '/pages/matchIndex/matchIndex',
      //     iconPath: useAssets('tabbar/activity.png'),
      //     selectedIconPath: useAssets('tabbar/activity-active.png'),
      //     text: '赛事活动',
      //   },
      //   {
      //     pagePath: '/pages/tabbar/mine/mine',
      //     iconPath: useAssets('tabbar/mine.png'),
      //     selectedIconPath: useAssets('tabbar/mine-active.png'),
      //     text: '我的',
      //   },
      // ],
    };
  },
  computed: {
    tabList() {
      return store_app_index.useAppStore().tabbarListGetter;
    }
  },
  methods: {
    setCurrent() {
      const currentRoute = getCurrentPages()[getCurrentPages().length - 1].route;
      const active = this.tabList.findIndex((i) => i.pagePath.indexOf(currentRoute) !== -1);
      this.currentTab = active;
      if (this.tabList.length === 0) {
        setTimeout(() => {
          this.setCurrent();
        }, 100);
      }
    },
    switchTab(index) {
      if (this.currentTab === index)
        return;
      this.setCurrent();
      common_vendor.index.switchTab({
        url: this.tabList[index].pagePath
      });
    }
  },
  mounted() {
    this.setCurrent();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.tabList, (item, index, i0) => {
      return {
        a: $data.currentTab === index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: index,
        d: $data.currentTab === index ? 1 : "",
        e: common_vendor.o(($event) => $options.switchTab(index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eefdc051"]]);
wx.createComponent(Component);
