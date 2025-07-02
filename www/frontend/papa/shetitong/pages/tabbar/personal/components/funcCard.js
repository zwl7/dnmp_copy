"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "funcCard",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      // dataList: [
      //   {
      //     name: service,
      //     title: '志愿服务',
      //     path: '/pages/tabbar/dynamic/index',
      //   },
      //   {
      //     name: praise,
      //     title: '点赞',
      //     path: '/pages/praise/index',
      //   },
      //   {
      //     name: validate,
      //     title: '指导员认证',
      //     path: 'auth',
      //   },
      //   {
      //     name: record,
      //     title: '报名记录',
      //     path: '/pages/trainRecord/index',
      //   },
      //   {
      //     name: mySite,
      //     title: '我的站点',
      //     path: '/pages-sub/instructorSite/my',
      //   },
      // ],
    };
  },
  computed: {
    menuTitle() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.menuConfig) == null ? void 0 : _b.title) || "";
    },
    menuIcon() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.menuConfig) == null ? void 0 : _b.icon) || "";
    },
    dataList() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.menuConfig) == null ? void 0 : _b.list) || [];
    }
  },
  methods: {
    handleClick(item) {
      if (item.value == "auth") {
        if (this.$store.user.userInfo.is_auth_instructor == 1) {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/detail"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/index"
          });
        }
        return;
      }
      if (item.value) {
        common_vendor.index.navigateTo({
          url: item.value
        });
        return;
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_grid_item2 = common_vendor.resolveComponent("uv-grid-item");
  const _easycom_uv_grid2 = common_vendor.resolveComponent("uv-grid");
  (_easycom_uv_icon2 + _easycom_uv_grid_item2 + _easycom_uv_grid2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_grid_item = () => "../../../../node-modules/@climblee/uv-ui/components/uv-grid-item/uv-grid-item.js";
const _easycom_uv_grid = () => "../../../../node-modules/@climblee/uv-ui/components/uv-grid/uv-grid.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_grid_item + _easycom_uv_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.menuIcon
  }, $options.menuIcon ? {
    b: $options.menuIcon
  } : {}, {
    c: common_vendor.t($options.menuTitle),
    d: common_vendor.f($options.dataList, (baseListItem, baseListIndex, i0) => {
      return {
        a: "19a811ad-2-" + i0 + "," + ("19a811ad-1-" + i0),
        b: common_vendor.p({
          name: baseListItem.img,
          size: 50
        }),
        c: common_vendor.t(baseListItem.title),
        d: baseListIndex,
        e: common_vendor.o(($event) => $options.handleClick(baseListItem), baseListIndex),
        f: "19a811ad-1-" + i0 + ",19a811ad-0"
      };
    }),
    e: common_vendor.p({
      border: false,
      col: 4
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19a811ad"]]);
wx.createComponent(Component);
//# sourceMappingURL=funcCard.js.map
