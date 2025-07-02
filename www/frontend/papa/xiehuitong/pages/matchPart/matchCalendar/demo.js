"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "matchCalendarDemo",
  data() {
    return {
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      currentDate: /* @__PURE__ */ new Date(),
      currentMonth: (/* @__PURE__ */ new Date()).getMonth(),
      currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
      dates: []
    };
  },
  methods: {
    generateCalendar() {
      const year = this.currentYear;
      const month = this.currentMonth;
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const dates = [];
      const firstDayWeekDay = firstDay.getDay();
      for (let i = firstDayWeekDay - 1; i >= 0; i--) {
        const date = new Date(year, month, -i);
        dates.push({
          day: date.getDate(),
          currentMonth: false,
          isToday: false
        });
      }
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const today = /* @__PURE__ */ new Date();
        dates.push({
          day: i,
          currentMonth: true,
          isToday: today.getDate() === i && today.getMonth() === month && today.getFullYear() === year
        });
      }
      this.dates = dates;
    },
    changeMonth(offset) {
      const newDate = new Date(this.currentYear, this.currentMonth + offset);
      this.currentMonth = newDate.getMonth();
      this.currentYear = newDate.getFullYear();
      this.generateCalendar();
    }
  },
  mounted() {
    this.generateCalendar();
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.changeMonth(-1)),
    b: common_vendor.t($data.currentYear),
    c: common_vendor.t($data.currentMonth + 1),
    d: common_vendor.o(($event) => $options.changeMonth(1)),
    e: common_vendor.f($data.weekDays, (day, k0, i0) => {
      return {
        a: common_vendor.t(day),
        b: day
      };
    }),
    f: common_vendor.f($data.dates, (date, index, i0) => {
      return {
        a: common_vendor.t(date.day),
        b: index,
        c: date.currentMonth ? 1 : "",
        d: date.isToday ? 1 : ""
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-09805f9e"]]);
wx.createPage(MiniProgramPage);
