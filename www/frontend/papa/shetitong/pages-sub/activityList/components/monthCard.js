"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return {
      currentYear,
      currentMonth: (/* @__PURE__ */ new Date()).getMonth() + 1,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yearOptions: Array.from({ length: currentYear - 2023 + 2 }, (_, i) => 2023 + i),
      pickerYearIndex: currentYear - 2023
    };
  },
  computed: {
    activeColor() {
      return this.$store.app.themeConfig["hubei-primary"];
    },
    calendarIcon() {
      return this.$store.app.currentThemeIconByType["CALENDAR_ICON"];
    }
  },
  methods: {
    goToCurrentMonth() {
      this.currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
      this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      this.pickerYearIndex = this.currentYear - 2023;
      this.changeData();
    },
    selectMonth(month) {
      this.currentMonth = month;
      this.changeData();
    },
    onYearChange(event) {
      this.pickerYearIndex = event.detail.value;
      this.currentYear = this.yearOptions[this.pickerYearIndex];
      this.changeData();
    },
    changeData() {
      this.$emit("changeData", { year: this.currentYear, month: this.currentMonth });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_icon2 + _easycom_uv_button2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $options.calendarIcon,
      size: "24"
    }),
    b: common_vendor.t($data.currentYear),
    c: common_vendor.p({
      name: "arrow-down",
      size: "16",
      color: "#323233"
    }),
    d: $data.pickerYearIndex,
    e: $data.yearOptions,
    f: common_vendor.o((...args) => $options.onYearChange && $options.onYearChange(...args)),
    g: common_vendor.t($props.total),
    h: common_vendor.o($options.goToCurrentMonth),
    i: common_vendor.p({
      type: "primary",
      size: "small",
      plain: true,
      shape: "circle"
    }),
    j: common_vendor.f($data.months, (month, index, i0) => {
      return {
        a: common_vendor.t(month),
        b: index,
        c: common_vendor.n($data.currentMonth === month ? "active" : ""),
        d: common_vendor.o(($event) => $options.selectMonth(month), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0cf89ba"]]);
wx.createComponent(Component);
//# sourceMappingURL=monthCard.js.map
