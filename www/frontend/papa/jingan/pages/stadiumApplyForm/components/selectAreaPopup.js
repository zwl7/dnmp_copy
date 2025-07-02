"use strict";
const apis_common = require("../../../apis/common.js");
const utils_util = require("../../../utils/util.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const common_vendor = require("../../../common/vendor.js");
const cascadeSelection = () => "../../../components/cascadeSelection/cascadeSelection.js";
const _sfc_main = {
  name: "selectAreaPopup",
  mixins: [mixins_themeMixins.themeMixins],
  emits: ["open", "close", "update:visible", "conform", "onChange"],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    cascadeSelection
  },
  data() {
    return {
      itemList: [],
      receiveData: []
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.toggle();
      } else {
        this.closePopup();
      }
    }
  },
  created() {
    apis_common.getCompanyAreaAll({
      company_area_id: 0,
      level: 3,
      type: 2
    }).then((res) => {
      if (res.code === 200) {
        console.log(
          utils_util.formatTreeOption(
            res.data,
            ["name", "company_area_id", "name", "company_area_id", "next"],
            2
          )
        );
        this.itemList = utils_util.formatTreeOption(
          res.data,
          ["name", "company_area_id", "name", "company_area_id", "next"],
          2
        );
      }
    });
  },
  methods: {
    getUserArea(e) {
      this.$emit("conform", e);
    },
    changeCascade(e) {
      e.value;
      let layer = e.layer;
      if (layer == 2) {
        this.closePopup();
      }
    },
    toggle() {
      this.$refs.popup.open("bottom");
      this.$emit("update:visible", true);
    },
    closePopup() {
      this.$refs.popup.close();
      this.$emit("update:visible", false);
    },
    maskClick() {
      this.$emit("update:visible", false);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_cascade_selection = common_vendor.resolveComponent("cascade-selection");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uni_icons2 + _component_cascade_selection + _easycom_uv_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "closeempty",
      size: "18"
    }),
    b: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    c: common_vendor.o($options.changeCascade),
    d: common_vendor.o($options.getUserArea),
    e: common_vendor.p({
      height: "415px",
      itemList: $data.itemList,
      activeColor: _ctx.themePrimaryColorGetter,
      lineColor: _ctx.themeTabsLineColorGetter
    }),
    f: common_vendor.sr("popup", "160c29a2-0"),
    g: common_vendor.o($options.maskClick),
    h: common_vendor.p({
      backgroundColor: "#fff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
