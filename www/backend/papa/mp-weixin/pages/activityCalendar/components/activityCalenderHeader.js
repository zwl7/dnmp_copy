"use strict";
const apis_stadium = require("../../../apis/stadium.js");
const utils_util = require("../../../utils/util.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
require("../../../utils/qqmap-wx-jssdk.js");
const _sfc_main = {
  name: "activityCalenderHeader",
  emits: ["getData"],
  options: {
    styleIsolation: "shared"
  },
  data() {
    return {
      showPoppable: false,
      arrowDown: true,
      info: {
        lunar: true,
        range: true,
        insert: false,
        selected: []
      },
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      year: "",
      month: "",
      day: "",
      days: [],
      defaultDate: /* @__PURE__ */ new Date(),
      dataCurrent: ""
    };
  },
  computed: {
    defaultDateStr() {
      let year = this.defaultDate.getFullYear();
      let month = this.defaultDate.getMonth() + 1;
      let day = this.defaultDate.getDate();
      return year + "-" + month + "-" + day;
    }
  },
  created() {
    this.formatDate(/* @__PURE__ */ new Date());
    this.setDays(/* @__PURE__ */ new Date());
  },
  methods: {
    onSelect(e, ispre = false) {
      let date = new Date(e.fulldate);
      this.defaultDate = new Date(this.year, date.getMonth(), date.getDate());
      this.day = date.getDate();
      this.setDays(date);
    },
    monthSwitch(e) {
      console.log("monthSwitchs 返回:", e);
    },
    handleClick(type) {
      if (type == 1) {
        this.$refs["calender"].pre();
      }
      if (type == 2) {
        this.$refs["calender"].next();
      }
    },
    openPoppable() {
      const myDate = new Date(this.year, this.month, this.day);
      new Date(myDate.getFullYear(), parseInt(this.month + 1), 0).getDate();
      this.formatDate(myDate);
      this.arrowDown = !this.arrowDown;
      this.showPoppable = !this.showPoppable;
      this.$emit("showPoppable", this.showPoppable);
    },
    formatDate(myDate) {
      const year = myDate.getFullYear();
      const month = myDate.getMonth();
      const totalDay = new Date(myDate.getFullYear(), parseInt(myDate.getMonth() + 1), 0).getDate();
      this.year = year;
      this.month = month;
      this.minDate = new Date(year, month, 1);
      this.maxDate = new Date(year, month, totalDay);
      this.dataCurrent = year + "年" + (month + 1) + "月";
      this.getMonthAcNum(year, month, totalDay);
    },
    setDays(now, isClick = false) {
      const week = now.getDay();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      this.$emit("getData", now);
      const maxDay = new Date(this.year, parseInt(this.month + 1), 0).getDate();
      if (this.day <= maxDay) {
        this.day = day;
      }
      const days = [
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        },
        {
          day: 0,
          date: ""
        }
      ];
      const leftNum = week - 0;
      const rightNum = 6 - week;
      if (month != 1 || day != 1) {
        console.log("this circle");
        for (var i = 0; i < leftNum; i++) {
          var newDate = this.cloneDate(now);
          days[i].date = new Date(newDate.setDate(day - leftNum + i));
          days[i].day = day - (leftNum - i);
          if (day - (leftNum - i) <= 0 && month == 1) {
            days[i].day = "";
          } else if (day - (leftNum - i) <= 0) {
            const lastMonth = month - 1 > 0 ? month - 1 : 12;
            const lastMonthTotalDay = new Date(
              newDate.getFullYear(),
              parseInt(lastMonth),
              0
            ).getDate();
            days[i].day = lastMonthTotalDay + (day - (leftNum - i));
            console.log("I am your big brother");
          } else {
            console.log("I am your fucking brother for sure");
          }
        }
      }
      const diff = maxDay - this.day;
      if (rightNum > 0 && (month != 12 || day != 31)) {
        var newDate = this.cloneDate(now);
        let j = 0;
        for (j; j < diff; j++) {
          if (days[j + week + 1]) {
            days[j + week + 1].day = j + 1 + this.day;
            days[j + week + 1].date = new Date(newDate.setDate(this.day + j + 1));
          }
        }
        for (var i = 0; i < rightNum - j; i++) {
          var newDate = this.cloneDate(now);
          if (days[j + i + week + 1]) {
            days[j + i + week + 1].day = i + 1;
            days[i + j + week + 1].date = new Date(newDate.setDate(this.day + i + j + 1));
          }
        }
      }
      days[week].day = day;
      if (days[week].day === this.day) {
        days[week].select = true;
      }
      if (month === 1) {
        console.log("I am really your fucking father for sure");
        const maxDay2 = new Date(this.year - 1, 12, 0).getDate();
        console.log("maxDay:", maxDay2);
        let i2 = 0;
        let index = -1;
        days.forEach((item, idx) => {
          if (!item.day) {
            index = idx;
          }
        });
        const prevDate = new Date(this.year - 1, 12, 0);
        for (let j = index; j >= 0; j--) {
          days[j].day = maxDay2 - i2;
          days[j].date = new Date(prevDate.setDate(maxDay2 - i2));
          i2++;
        }
      } else if (month === 12) {
        console.log("I am really your fucking father for sure");
        let i2 = 1;
        const nextDate = new Date(this.year + 1, 1, 0);
        days.forEach((item) => {
          if (!item.day) {
            item.day = i2;
            item.date = new Date(nextDate.setDate(i2));
            i2++;
          }
        });
      }
      days[week].date = new Date(this.defaultDate);
      this.days = days;
      if (this.day <= maxDay && !isClick) {
        this.getWeekAcNum(days, month);
      } else {
        this.activityList = [];
        this.loading = false;
      }
    },
    cloneDate(date) {
      return new Date(date);
    },
    // 折叠时,选择日期
    onClick(event, index) {
      const item = this.days[index];
      if (item.day == "")
        return;
      this.defaultDate = item.date;
      this.day = item.day;
      this.dataCurrent = `${item.date.getFullYear()}年${item.date.getMonth() + 1}月`;
      this.year = item.date.getFullYear();
      this.month = item.date.getMonth();
      this.setDays(item.date, false);
    },
    lastOrNextMonth(to) {
      this.arrowDown = false;
      this.lock = false;
      if (!this.showPoppable) {
        this.showPoppable = true;
        return;
      }
      if (!to) {
        if (this.month === 0) {
          this.month = 11;
          this.year -= 1;
        } else {
          this.month -= 1;
        }
      } else {
        if (this.month === 11) {
          this.month = 0;
          this.year += 1;
        } else {
          this.month += 1;
        }
      }
      this.dateInit(this.year, this.month);
      let obj = {
        fulldate: new Date(this.year, this.month, this.day)
      };
      this.onSelect(obj, true);
    },
    // 重置年月
    async dateInit(year, month) {
      const totalDay = new Date(year, parseInt(month + 1), 0).getDate();
      this.minDate = new Date(year, month, 1);
      this.maxDate = new Date(year, month, totalDay);
      await this.getMonthAcNum(year, month, totalDay);
      this.dataCurrent = year + "年" + (month + 1) + "月";
    },
    // 获取每个月
    async getMonthAcNum(year, month, totalDay) {
      const data = {
        start_date: utils_util.formatTimeBase(new Date(year, month, 1), "{y}-{m}-{d}"),
        end_date: utils_util.formatTimeBase(new Date(year, month, totalDay), "{y}-{m}-{d}"),
        type: 4
      };
      const res = await apis_stadium.getMothCount(data);
      if (res.data.length > 0) {
        let list = [];
        res.data.map((e) => {
          if (e.num > 0) {
            list.push({
              date: `${this.year}-${String(this.month + 1).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`,
              info: `${e.num}场`
            });
          }
        });
        this.info.selected = list;
        console.log(list);
      }
      return new Promise((resolve) => {
        resolve(1);
      });
    },
    async getWeekAcNum(days, month) {
      let startDay = 0;
      let endDay = 6;
      if (days[0].day == "" && month == 1) {
        startDay = days.findIndex((item) => item.day == 1);
      } else if (days[6].day == "" && month == 12) {
        endDay = days.findIndex((item) => item.day == 31);
      }
      const data = {
        start_date: utils_util.formatTimeBase(new Date(days[startDay].date), "{y}-{m}-{d}"),
        end_date: utils_util.formatTimeBase(new Date(days[endDay].date), "{y}-{m}-{d}"),
        type: 4,
        demo: 1
      };
      const res = await apis_stadium.getMothCount(data);
      const haveAcDays = res.data;
      const new_days = [];
      for (var i = 0; i < 7; i++) {
        if (haveAcDays[i]) {
          new_days.push(Object.assign(haveAcDays[i], days[i]));
        } else {
          new_days.push(days[i]);
        }
      }
      this.days = new_days;
    },
    jumpToAll() {
      this.$emit("jumpToAll");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  (_easycom_uni_icons2 + _easycom_uni_calendar2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_calendar = () => "../../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_calendar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.lastOrNextMonth(0)),
    b: common_vendor.p({
      type: "back",
      size: "16"
    }),
    c: common_vendor.t($data.dataCurrent),
    d: common_vendor.o((...args) => $options.openPoppable && $options.openPoppable(...args)),
    e: common_vendor.o(($event) => $options.lastOrNextMonth(1)),
    f: common_vendor.p({
      type: "forward",
      size: "16"
    }),
    g: common_vendor.o((...args) => $options.jumpToAll && $options.jumpToAll(...args)),
    h: common_vendor.f($data.weekdays, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    i: common_vendor.f($data.days, (item, index, i0) => {
      return {
        a: common_vendor.t(item.day),
        b: common_vendor.t(item.num > 0 ? item.num + "场" : ""),
        c: index,
        d: common_vendor.n(item.select ? "van-calendar__selected-days" : "van-calendar__day_define"),
        e: common_vendor.o(($event) => $options.onClick(item, index), index)
      };
    }),
    j: $data.arrowDown,
    k: common_vendor.p({
      type: "bottom",
      size: "20"
    }),
    l: common_vendor.o((...args) => $options.openPoppable && $options.openPoppable(...args)),
    m: !$data.showPoppable,
    n: common_vendor.sr("calender", "3f24bd22-3"),
    o: $data.showPoppable,
    p: common_vendor.o($options.onSelect),
    q: common_vendor.o($options.monthSwitch),
    r: common_vendor.p({
      date: $options.defaultDateStr,
      selected: $data.info.selected,
      showMonth: true
    }),
    s: !$data.arrowDown,
    t: common_vendor.p({
      type: "top",
      size: "20"
    }),
    v: common_vendor.o((...args) => $options.openPoppable && $options.openPoppable(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f24bd22"], ["__file", "E:/gxm/uniapp-shandong/pages/activityCalendar/components/activityCalenderHeader.vue"]]);
wx.createComponent(Component);
