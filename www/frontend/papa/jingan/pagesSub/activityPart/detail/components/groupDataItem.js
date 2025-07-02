"use strict";
const common_assets = require("../../../../common/assets.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  components: {},
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    showMoney() {
      return Number(this.info.price) > 0;
    },
    applyNum() {
      return this.info.pass_quantity;
    },
    percent() {
      return this.applyNum / this.info.max_quantity * 100;
    },
    avatarList() {
      let apply_persons = this.info.apply_persons.slice(0, 3);
      let list = apply_persons.map((e) => {
        return e.avatar ? e.avatar : common_assets.defaultAvatar;
      });
      return list.length > 0 ? list : [common_assets.defaultAvatar];
    }
  },
  data() {
    return {
      showInfo: {
        name: ""
      }
    };
  },
  methods: {
    getShowTypeName(type) {
      return type === 1 ? "个人赛" : "团队赛";
    }
  }
};
if (!Array) {
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  _easycom_uv_line_progress2();
}
const _easycom_uv_line_progress = () => "../../../../node-modules/@climblee/uv-ui/components/uv-line-progress/uv-line-progress.js";
if (!Math) {
  _easycom_uv_line_progress();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.info.name),
    b: common_vendor.t($options.getShowTypeName($props.info.apply_type)),
    c: common_vendor.f($options.avatarList, (item, k0, i0) => {
      return {
        a: item,
        b: item
      };
    }),
    d: common_vendor.p({
      percentage: $options.percent,
      height: "6",
      activeColor: _ctx.themePrimaryColorGetter,
      showText: false
    }),
    e: common_vendor.t($options.applyNum),
    f: common_vendor.t($props.info.max_quantity),
    g: $options.showMoney
  }, $options.showMoney ? {
    h: common_vendor.t($props.info.price)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f67a3d2e"]]);
wx.createComponent(Component);
