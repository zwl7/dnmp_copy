"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dateList: []
    };
  },
  created() {
    this.getDateList();
  },
  methods: {
    getDateList() {
      const dayNum = 7;
      for (let i = 0; i < dayNum; i++) {
        const obj = {
          date_sep: common_vendor.index.$uv.timeFormat((/* @__PURE__ */ new Date()).getTime() + 3600 * 1e3 * 24 * i, "mm-dd"),
          date: common_vendor.index.$uv.timeFormat((/* @__PURE__ */ new Date()).getTime() + 3600 * 1e3 * 24 * i, "yyyy-mm-dd"),
          weeks_str: this.formatW(new Date((/* @__PURE__ */ new Date()).getTime() + 3600 * 1e3 * 24 * i).getDay()),
          weeks_num: new Date((/* @__PURE__ */ new Date()).getTime() + 3600 * 1e3 * 24 * i).getDay(),
          isSelected: false,
          weeks: i
        };
        if (i === 0) {
          obj.isSelected = true;
          this.$emit("date", obj);
        }
        this.dateList.push(obj);
      }
    },
    formatW(time) {
      const weekArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return weekArr[time];
    },
    selectDate(dateObj) {
      var that = this;
      this.dateList.forEach((item, index) => {
        if (item.date === dateObj.date) {
          item.isSelected = true;
          that.$set(that.dateList, index, item);
        } else {
          item.isSelected = false;
          that.$set(that.dateList, index, item);
        }
      });
      this.$emit("date", dateObj);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dateList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.weeks_str),
        b: common_vendor.t(item.date_sep),
        c: common_vendor.n(item.isSelected ? "selected" : ""),
        d: index,
        e: common_vendor.o(($event) => $options.selectDate(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26aeb236"]]);
wx.createComponent(Component);
