"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_cloneDeep = require("../../utils/cloneDeep.js");
const dropdownItem = () => "./dropdown-item.js";
const lePicker = () => "./le-picker.js";
const _sfc_main = {
  name: "dropdown-menu",
  emits: ["open", "close", "update:menuList", "onConfirm", "onChange"],
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    themeColor: {
      type: String,
      default: "#e05830"
    },
    // 没选中的颜色
    inactiveColor: {
      type: String,
      default: "#333333"
    },
    getHeight: {
      type: Boolean,
      default: false
    }
  },
  components: {
    dropdownItem,
    lePicker
  },
  data() {
    return {
      show: false,
      height: 48,
      page_top: 0,
      current: ""
    };
  },
  methods: {
    closeAll() {
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.$refs["item_" + i][0].showPopup) {
          this.$refs["item_" + i][0].close();
        }
      }
    },
    menuClick(index) {
      if (this.getHeight) {
        this.getMenuHeight();
      }
      this.current = index;
      if (this.$refs["item_" + index][0].showPopup) {
        this.$refs["item_" + index][0].close();
        return;
      }
      this.$refs["item_" + index][0].open();
      let showNum = 0;
      for (let i = 0; i < this.menuList.length; i++) {
        if (i != index) {
          this.$refs["item_" + i][0].close();
        }
        if (this.$refs["item_" + i][0].showPopup) {
          showNum += 1;
        }
      }
      this.$emit("getShowNum", showNum);
    },
    dropdownItemChange(e, index) {
      if (this.current == index && !e.show) {
        this.current = "";
      }
    },
    onSelectCell(item, index) {
      const menuList = utils_cloneDeep.deepClone(this.menuList);
      menuList[index].title = item.label;
      menuList[index].value = item.value;
      this.$emit("update:menuList", menuList);
      this.$refs["item_" + index][0].close();
      this.$emit("onConfirm", menuList[index]);
    },
    onFilterConfirm(item, index) {
      const menuList = utils_cloneDeep.deepClone(this.menuList);
      let options = menuList[0].componentProps.options;
      let title = this.getTitle(options, item.value);
      if (title.length) {
        menuList[index].title = title.join("/");
        this.$emit("update:menuList", menuList);
      }
      this.$refs["item_" + index][0].close();
      this.$emit("onConfirm", menuList[index]);
    },
    // 重置筛选
    onFilterReset(item, index) {
      const menuList = utils_cloneDeep.deepClone(this.menuList);
      menuList[index].value = [];
      menuList[index].title = "市区";
      this.$emit("update:menuList", menuList);
      this.$emit("update:menuList", menuList);
    },
    getTitle(options, value) {
      let list = [];
      let len = value.length;
      options.map((e) => {
        if (e.company_area_id == value[0]) {
          list.push(e.name);
          if (len == 2) {
            e.next.map((c) => {
              if (c.company_area_id == value[1]) {
                list.push(c.name);
              }
            });
          }
        }
      });
      return list;
    },
    getMenuHeight() {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select(".dropdown").boundingClientRect((data) => {
        this.page_top = data.top;
      }).exec();
    }
  },
  computed: {
    itemTop() {
      return this.height + this.page_top;
    }
  },
  mounted() {
    this.getMenuHeight();
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_le_picker = common_vendor.resolveComponent("le-picker");
  const _component_dropdownItem = common_vendor.resolveComponent("dropdownItem");
  (_easycom_uni_icons2 + _component_le_picker + _component_dropdownItem)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.menuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index === $data.current ? $props.themeColor : $props.inactiveColor,
        c: "3fcd31ac-0-" + i0,
        d: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xia",
          size: "18",
          color: index === $data.current ? $props.themeColor : "#e3e5e6"
        }),
        e: common_vendor.n(index === $data.current ? "icon" : ""),
        f: common_vendor.o(($event) => $options.menuClick(index), index),
        g: index
      };
    }),
    b: common_vendor.f($props.menuList, (item, index, i0) => {
      return common_vendor.e({
        a: item.type === "cell"
      }, item.type === "cell" ? {
        b: common_vendor.f(item.options, (c_item, k1, i1) => {
          return common_vendor.e({
            a: common_vendor.t(c_item.label),
            b: item.value === c_item.value
          }, item.value === c_item.value ? {
            c: "3fcd31ac-2-" + i0 + "-" + i1 + "," + ("3fcd31ac-1-" + i0),
            d: common_vendor.p({
              type: "checkmarkempty",
              size: "16",
              color: $props.themeColor
            })
          } : {}, {
            e: c_item.value,
            f: common_vendor.n(item.value === c_item.value && "van-cell-active"),
            g: common_vendor.o(($event) => $options.onSelectCell(c_item, index), c_item.value)
          });
        }),
        c: item
      } : {}, {
        d: item.type === "city"
      }, item.type === "city" ? {
        e: "3fcd31ac-3-" + i0 + "," + ("3fcd31ac-1-" + i0),
        f: common_vendor.o(($event) => item.value = $event, index),
        g: common_vendor.p({
          ...item.componentProps,
          modelValue: item.value
        }),
        h: common_vendor.o(($event) => $options.onFilterReset(item, index), index),
        i: common_vendor.t(item.confirmText || "确定"),
        j: common_vendor.o(($event) => $options.onFilterConfirm(item, index), index),
        k: item
      } : {}, {
        l: common_vendor.sr("item_" + index, "3fcd31ac-1-" + i0, {
          "f": 1
        }),
        m: index,
        n: "item_" + index,
        o: common_vendor.o((e) => $options.dropdownItemChange(e, index), index),
        p: "3fcd31ac-1-" + i0
      });
    }),
    c: common_vendor.p({
      itemTop: $options.itemTop
    }),
    d: common_vendor.s(`--dropdownThemeColor:${$props.themeColor};`)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/dropdown/dropdown-menu.vue"]]);
wx.createComponent(Component);
