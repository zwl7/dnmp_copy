"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "TrainItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      background: "#4cd964"
    };
  },
  computed: {
    showImage() {
      var _a;
      return ((_a = this.item.cover_img_arr[0]) == null ? void 0 : _a.http_img) || "https://cdn-static.papa.com.cn/social/default.png";
    },
    tagList() {
      return this.item.tag_ids_arr ? this.item.tag_ids_arr.map((e) => e.tag_id_str) : [];
    }
  },
  methods: {
    getBg(tag) {
      return this.$dict.getDictLabel("applyColorList", tag, { labelKey: "color", valueKey: "label" }) || "#9f9fa0";
    },
    toApply(item) {
      common_vendor.index.navigateTo({
        url: `/pages-sub/trainDetail/index?id=${item.train_activity_id}`
      });
    }
  },
  watch: {},
  // 组件周期函数--监听组件挂载完毕
  mounted() {
  },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {
  },
  // 组件周期函数--监听组件数据更新之后
  updated() {
  },
  // 组件周期函数--监听组件激活(显示)
  activated() {
  },
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {
  },
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_icon2 + _easycom_uv_button2)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.item.status_str),
    b: $options.getBg($props.item.status_str),
    c: $options.showImage,
    d: common_vendor.t($props.item.promote_name),
    e: common_vendor.f($options.tagList.slice(0, 5), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    f: $options.tagList.length > 5
  }, $options.tagList.length > 5 ? {} : {}, {
    g: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    h: common_vendor.t($props.item.startTime),
    i: common_vendor.t($props.item.endTime),
    j: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    k: common_vendor.t($props.item.address || "暂无地址"),
    l: common_vendor.o(($event) => $options.toApply($props.item)),
    m: common_vendor.t($props.item.train_activity_apply_num),
    n: common_vendor.o(($event) => $options.toApply($props.item)),
    o: common_vendor.p({
      type: "primary",
      shape: "circle",
      size: "small",
      disabled: $props.item.status != 2 || $props.item.wx_is_apply != 1,
      text: "去报名"
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b7ad720d"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
