"use strict";
const common_vendor = require("../../../../common/vendor.js");
const store_user_index = require("../../../../store/user/index.js");
const _sfc_main = {
  name: "funcCard",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
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
    },
    todoCenterData() {
      return store_user_index.useUserStore().userTodoCenterData;
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
      if (item.value || item.path) {
        common_vendor.index.navigateTo({
          url: item.value || item.path
        });
        return;
      }
      if (!item.value) {
        common_vendor.index.showToast({
          title: "敬请期待:" + item.title,
          icon: "none"
        });
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
    a: $options.dataList.length > 0
  }, $options.dataList.length > 0 ? common_vendor.e({
    b: $options.menuIcon
  }, $options.menuIcon ? {
    c: $options.menuIcon
  } : {}, {
    d: common_vendor.t($options.menuTitle),
    e: common_vendor.f($options.dataList, (baseListItem, baseListIndex, i0) => {
      return common_vendor.e({
        a: "19a811ad-2-" + i0 + "," + ("19a811ad-1-" + i0),
        b: common_vendor.p({
          name: baseListItem.img,
          size: 44
        }),
        c: $options.todoCenterData[baseListItem.key]
      }, $options.todoCenterData[baseListItem.key] ? {
        d: common_vendor.t($options.todoCenterData[baseListItem.key])
      } : {}, {
        e: common_vendor.t(baseListItem.title),
        f: baseListIndex,
        g: common_vendor.o(($event) => $options.handleClick(baseListItem), baseListIndex),
        h: "19a811ad-1-" + i0 + ",19a811ad-0"
      });
    }),
    f: common_vendor.p({
      ["custom-style"]: {
        marginBottom: "32rpx"
      }
    }),
    g: common_vendor.p({
      border: false,
      col: 4
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19a811ad"]]);
wx.createComponent(Component);
//# sourceMappingURL=funcCard.js.map
