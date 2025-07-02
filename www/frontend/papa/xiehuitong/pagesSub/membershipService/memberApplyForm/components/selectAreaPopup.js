"use strict";
const apis_common = require("../../../../apis/common.js");
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const cascadeSelection = () => "../../../../components/cascadeSelection/cascadeSelection.js";
const _sfc_main = {
  name: "selectAreaPopup",
  mixins: [core_themeMixins.themeMixins],
  emits: ["open", "close", "update:visible", "confirm", "onChange"],
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
        res.data.map((e) => {
          e.text = e.name;
          e.value = e.company_area_id;
          if (e.next && e.next.length > 0) {
            e.next.map((s) => {
              s.text = s.name;
              s.value = s.company_area_id;
              if (s.next && s.next.length > 0) {
                s.next.map((t) => {
                  t.text = t.name;
                  t.value = t.company_area_id;
                });
                s.children = s.next;
              }
            });
            e.children = e.next;
          }
        });
        this.itemList = res.data;
      }
    });
  },
  methods: {
    getUserArea(e) {
      this.$emit("confirm", e);
    },
    changeCascade(e) {
      e.value;
      let layer = e.layer;
      if (layer == 2) {
        this.closePopup();
      }
    },
    toggle() {
      this.$refs.areaPopup.open("bottom");
      this.$emit("update:visible", true);
    },
    closePopup() {
      this.$refs.areaPopup.close();
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
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
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
      activeColor: _ctx.themePrimaryColorGetter
    }),
    f: common_vendor.sr("areaPopup", "238a7fc1-0"),
    g: common_vendor.o($options.maskClick),
    h: common_vendor.p({
      backgroundColor: "#fff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
