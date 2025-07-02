"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  emits: ["click"],
  data() {
    return {
      list: [
        {
          icon: "https://cdn-static.papa.com.cn/social/home-icon-org.png",
          name: "体育组织",
          path: "/pagesSub/platform/sportsOrg/index"
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/home-icon-stadium.png",
          name: "体育场馆",
          path: "/pagesSub/platform/stadium/index"
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/home-icon-enter.png",
          name: "通知公告",
          path: "/pages-sub/notice/index"
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/home-icon-train.png",
          name: "培训活动",
          path: "/pages/tabbar/train/index"
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/home-icon-site.png",
          name: "指导员站点",
          path: "/pages-sub/instructorSite/index"
        }
      ]
    };
  },
  onLoad(options) {
  },
  methods: {
    handleClick(url) {
      if (!url) {
        common_vendor.index.showToast({
          title: "敬请期待",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url,
        fail() {
          common_vendor.index.switchTab({
            url
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.handleClick(item.path), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c05ade46"]]);
wx.createComponent(Component);
//# sourceMappingURL=KingKongArea.js.map
