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
const common_vendor = require("../../common/vendor.js");
require("../../store/app/index.js");
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
      currentTab: this.value,
      tabList: [
        {
          pagePath: "/pages/tabbar/newHome/newHome",
          iconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-home.png",
          selectedIconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-home-act.png",
          text: "首页"
        },
        {
          pagePath: "/pages/tabbar/activity/index",
          iconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-train.png",
          selectedIconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-train-act.png",
          text: "活动报名"
        },
        {
          pagePath: "/pagesSub/sportsService/sprotOrder/index",
          iconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-venue.png",
          selectedIconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-venue.png",
          text: ""
        },
        {
          pagePath: "/pages/tabbar/map/map",
          iconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-site.png",
          selectedIconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-site-act.png",
          text: "健身地图"
        },
        {
          pagePath: "/pages/tabbar/newMine/newMine",
          iconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-mine.png",
          selectedIconPath: "https://cdn-static.papa.com.cn/jingAn/tabs/tab-mine-act.png",
          text: "我的"
        }
      ]
    };
  },
  computed: {
    // tabList() {
    //   return useAppStore().tabbarListGetter
    // },
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
      return __async(this, null, function* () {
        if (this.currentTab === index)
          return;
        if (index == 2) {
          common_vendor.index.navigateTo({
            url: this.tabList[index].pagePath
          });
          return;
        }
        this.setCurrent();
        common_vendor.index.switchTab({
          url: this.tabList[index].pagePath
        });
      });
    }
  },
  mounted() {
    this.setCurrent();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabList, (item, index, i0) => {
      return {
        a: $data.currentTab === index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.n({
          "tab-icon-no-text": !Boolean(item.text)
        }),
        c: common_vendor.t(item.text),
        d: index,
        e: $data.currentTab === index ? 1 : "",
        f: common_vendor.o(($event) => $options.switchTab(index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eefdc051"]]);
wx.createComponent(Component);
