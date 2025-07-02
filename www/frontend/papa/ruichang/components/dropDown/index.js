"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../../common/vendor.js");
const uvDropDown = () => "./my-drop-down/uv-drop-down/uv-drop-down.js";
const uvDropDownItem = () => "./my-drop-down/uv-drop-down-item/uv-drop-down-item.js";
const uvDropDownPopup = () => "./my-drop-down/uv-drop-down-popup/uv-drop-down-popup.js";
const _sfc_main = {
  name: "dropDown",
  components: {
    uvDropDown,
    uvDropDownItem,
    uvDropDownPopup
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          order: {
            label: "综合排序",
            value: "all",
            activeIndex: 0,
            child: []
          },
          type: {
            label: "文档格式",
            value: "all",
            activeIndex: 0,
            child: [
              {
                label: "全部",
                value: "all"
              },
              {
                label: "PDF",
                value: "pdf"
              },
              {
                label: "WROD",
                value: "word"
              },
              {
                label: "PPT",
                value: "ppt"
              }
            ]
          }
        };
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return {
          boxShadow: "0px 12px 12px  rgba(44, 101, 158, 0.01)"
        };
      }
    },
    sign: {
      type: String,
      default: "dropDown_1"
    },
    resultArray: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 是否延迟弹出  主要针对首页这种 下拉框在中间的情形
    sleep: {
      type: Number,
      default: 0
    }
  },
  watch: {
    options: {
      deep: true,
      immediate: true,
      handler: function(newval, oldval) {
        if (newval) {
          let keys = Object.keys(newval);
          let defaultValue = [];
          for (let var1 in newval) {
            if (newval[var1].child.length > 0) {
              defaultValue.push(newval[var1].child[0].value);
            }
          }
          keys.map((c) => {
            if (this.$refs[c]) {
              this.$refs[c][0].init();
            }
          });
          this.defaultValue = defaultValue;
        }
      }
    }
  },
  computed: {
    dropItem(name) {
      return (name2) => {
        const result = {};
        if (this.resultArray.length > 0) {
          this.result = this.resultArray;
        }
        const find = this.result.find((item) => item.name === name2);
        if (find) {
          result.label = find.label;
          result.value = find.value;
        } else {
          result.label = this.options[name2].label;
          result.value = this.options[name2].value;
        }
        return result;
      };
    },
    currentDropItem() {
      return __spreadProps(__spreadValues({}, this.options[this.activeName]), {
        activeColor: this.activitedColor
      });
    },
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    activitedColor() {
      return this.$store.app.themeConfig["--hubei-primary"];
    }
  },
  data() {
    return {
      useSlot: false,
      defaultValue: [],
      result: [],
      activeName: ""
    };
  },
  methods: {
    close() {
      this.$refs["dropDownPopup"].close();
    },
    init() {
      this.$refs.dropDown.init();
    },
    change(e) {
      this.$emit("popupChange", e);
    },
    selectMenu(e) {
      const { name, active, type } = e;
      this.activeName = name;
      this.init();
      this.$emit("open", e);
      const find = this.result.find((item) => item.name == this.activeName);
      if (find) {
        const findIndex = this.options[this.activeName].child.findIndex(
          (item) => item.label == find.label && item.value == find.value
        );
        this.options[this.activeName].activeIndex = findIndex;
      } else {
        this.options[this.activeName].activeIndex = 0;
      }
    },
    clickItem(e) {
      let { label, value } = e;
      const findIndex = this.result.findIndex((item) => item.name == this.activeName);
      if (this.defaultValue.indexOf(value) > -1 && this.options[this.activeName].label) {
        label = this.options[this.activeName].label;
      }
      if (findIndex > -1) {
        this.$set(this.result, findIndex, {
          name: this.activeName,
          label,
          value
        });
      } else {
        this.result.push({
          name: this.activeName,
          label,
          value
        });
      }
      this.$emit("change", this.result);
    }
  }
};
if (!Array) {
  const _easycom_uv_drop_down_item2 = common_vendor.resolveComponent("uv-drop-down-item");
  const _easycom_uv_drop_down2 = common_vendor.resolveComponent("uv-drop-down");
  const _easycom_uv_drop_down_popup2 = common_vendor.resolveComponent("uv-drop-down-popup");
  (_easycom_uv_drop_down_item2 + _easycom_uv_drop_down2 + _easycom_uv_drop_down_popup2)();
}
const _easycom_uv_drop_down_item = () => "../../node-modules/@climblee/uv-ui/components/uv-drop-down-item/uv-drop-down-item.js";
const _easycom_uv_drop_down = () => "../../node-modules/@climblee/uv-ui/components/uv-drop-down/uv-drop-down.js";
const _easycom_uv_drop_down_popup = () => "../../node-modules/@climblee/uv-ui/components/uv-drop-down-popup/uv-drop-down-popup.js";
if (!Math) {
  (_easycom_uv_drop_down_item + _easycom_uv_drop_down + _easycom_uv_drop_down_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, index, i0) => {
      return {
        a: common_vendor.sr(index, "95175293-1-" + i0 + ",95175293-0", {
          "f": 1
        }),
        b: index,
        c: index,
        d: "95175293-1-" + i0 + ",95175293-0",
        e: common_vendor.p({
          name: index,
          type: "2",
          sleep: $props.sleep,
          label: $options.dropItem(index).label,
          value: $options.dropItem(index).value
        })
      };
    }),
    b: common_vendor.sr("dropDown", "95175293-0"),
    c: common_vendor.o($options.selectMenu),
    d: common_vendor.p({
      sign: $props.sign,
      ["extra-icon"]: {
        name: "down",
        color: "#CDD0D6",
        size: "16rpx"
      },
      ["extra-active-icon"]: {
        name: "up",
        color: $options.activitedColor,
        size: "16rpx"
      },
      textActiveColor: $options.activitedColor,
      defaultValue: $data.defaultValue,
      ["custom-style"]: $props.customStyle,
      ["text-size"]: "27rpx",
      textActiveSize: "27rpx",
      ["text-color"]: "#606266"
    }),
    e: common_vendor.sr("dropDownPopup", "95175293-2"),
    f: common_vendor.o($options.clickItem),
    g: common_vendor.o($options.change),
    h: common_vendor.p({
      sign: $props.sign,
      ["click-overlay-on-close"]: true,
      currentDropItem: $options.currentDropItem,
      ["use-slot"]: $options.currentDropItem ? $options.currentDropItem.useSlot : false
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-95175293"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
