"use strict";
const components_wuCalendar_components_wuCalendar_util = require("./util.js");
const uni_modules_wuUiTools_libs_mixin_mpMixin = require("../../../../uni_modules/wu-ui-tools/libs/mixin/mpMixin.js");
const uni_modules_wuUiTools_libs_mixin_mixin = require("../../../../uni_modules/wu-ui-tools/libs/mixin/mixin.js");
const components_wuCalendar_components_wuCalendar_props = require("./props.js");
const common_vendor = require("../../../../common/vendor.js");
const components_wuCalendar_components_i18n_index = require("../i18n/index.js");
const wuCalendarBlock = () => "../wu-calendar-block/wu-calendar-block.js";
const { t } = common_vendor.initVueI18n(components_wuCalendar_components_i18n_index.i18nMessages);
const _sfc_main = {
  mixins: [uni_modules_wuUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_wuUiTools_libs_mixin_mixin.mixin, components_wuCalendar_components_wuCalendar_props.props],
  emits: ["close", "confirm", "change", "monthSwitch", "foldSwitch", "clickRight"],
  components: {
    wuCalendarBlock
  },
  data() {
    return {
      show: false,
      weeks: [],
      preWeeks: [],
      nextWeeks: [],
      weeksMonth: null,
      preWeeksMonth: null,
      nextWeeksMonth: null,
      calendar: {},
      nowDate: "",
      aniMaskShow: false,
      swiperCurrent: 1,
      swiperChangeDirection: "",
      pickerDate: "",
      Fold: null,
      FoldStatus: null,
      weekContentStyle: {},
      preWeekDate: null
    };
  },
  computed: {
    /**
     * for i18n
     */
    okText() {
      return t("wu-calender.ok");
    },
    cancelText() {
      return t("wu-calender.cancel");
    },
    YearText() {
      return t("wu-calender.year");
    },
    MonthText() {
      return t("wu-calender.month");
    },
    todayText() {
      return t("wu-calender.today");
    },
    monText() {
      return t("wu-calender.MON");
    },
    TUEText() {
      return t("wu-calender.TUE");
    },
    WEDText() {
      return t("wu-calender.WED");
    },
    THUText() {
      return t("wu-calender.THU");
    },
    FRIText() {
      return t("wu-calender.FRI");
    },
    SATText() {
      return t("wu-calender.SAT");
    },
    SUNText() {
      return t("wu-calender.SUN");
    },
    swiperStyle() {
      let style = {
        marginTop: "8rpx"
      };
      if (this.type == "year") {
        style.height = "300rpx";
      } else {
        style.height = this.FoldStatus === "open" ? "765rpx" : "128rpx";
      }
      return style;
    },
    getDateType() {
      if (this.type === "year")
        return this.type;
      return this.FoldStatus === "open" ? "month" : "week";
    }
  },
  watch: {
    date(newVal) {
      this.cale.cleanRange();
      this.init(newVal);
      this.pickerDate = newVal;
    },
    mode(newVal) {
      this.cale.cleanRange();
      this.cale.resetMode(newVal);
      this.init(this.date);
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.assignmentWeeks();
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.assignmentWeeks();
    },
    monthShowCurrentMonth(val) {
      this.cale.resetMonthShowCurrentMonth(val);
      this.setDate(this.nowDate.fullDate);
    },
    rangeEndRepick(val) {
      this.cale.resetRangeEndRepick(val);
    },
    rangeSameDay(val) {
      this.cale.resetRangeSameDay(val);
    },
    rangeHaveDisableTruncation(val) {
      this.cale.resetRangeHaveDisableTruncation(val);
      this.cale.cleanRange();
      this.init(this.date);
    },
    selected: {
      handler(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.assignmentWeeks();
        let nowDateInfo = this.cale.canlender.filter(
          (item) => item.fullDate && this.cale.dateEqual(item.fullDate, this.calendar.fullDate)
        );
        if (nowDateInfo.length)
          this.calendar = nowDateInfo[0];
      },
      deep: true
    },
    fold(newVal) {
      this.Fold = newVal;
    },
    type(newVal) {
      this.initFold();
      this.cale.resetFoldStatus(this.FoldStatus);
      this.init(this.date);
    },
    startWeek(newVal) {
      this.cale.cleanRange();
      this.cale.resetStartWeek(newVal);
      this.init(this.date);
    }
  },
  created() {
    this.initFold();
    this.cale = new components_wuCalendar_components_wuCalendar_util.Calendar({
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      mode: this.mode,
      type: this.type,
      startWeek: this.startWeek,
      foldStatus: this.FoldStatus,
      monthShowCurrentMonth: this.monthShowCurrentMonth,
      rangeEndRepick: this.rangeEndRepick,
      rangeSameDay: this.rangeSameDay,
      rangeHaveDisableTruncation: this.rangeHaveDisableTruncation
    });
    this.init(this.date);
  },
  methods: {
    // 取消穿透
    clean() {
      if (this.maskClick)
        this.close();
    },
    bindDateChange(e) {
      const value = e.detail.value + "-1";
      this.setDate(value);
      this.swiperCurrentChangeWeeks();
      const { year, month } = this.cale.getDate(value);
      this.$emit("monthSwitch", {
        year,
        month
      });
    },
    /**
     * 初始化日期显示
     * @param {Object} date
     */
    init(date) {
      let firstDate = this.mode == "single" ? date : date[0];
      if (date) {
        let dateType = Object.prototype.toString.call(date);
        if (this.mode == "single" && dateType != "[object String]") {
          return console.error(`类型错误，mode=${this.mode}时，date=String`);
        } else if (this.mode != "single" && dateType != "[object Array]") {
          return console.error(`类型错误，mode=${this.mode}时，date=Array`);
        }
        if (this.mode === "single") {
          this.preWeekDate = date;
        } else if (this.mode == "multiple") {
          this.cale.multiple = date;
          this.cale._getWeek(this.cale.multiple[this.cale.multiple.length - 1]);
          this.preWeekDate = date[0];
        } else if (this.mode == "range") {
          date[0] ? this.cale.setRange(date[0]) : "";
          date[1] ? this.cale.setRange(date[1]) : "";
          this.preWeekDate = date[0];
        }
      } else if (this.useToday && !this.selected.filter(
        (item) => item.disable && this.cale.dateEqual(item.date, this.cale.date.fullDate)
      ).length) {
        if (this.mode == "multiple") {
          this.cale.multiple = [this.cale.date.fullDate];
          this.cale._getWeek(this.cale.multiple[this.cale.multiple.length - 1]);
        } else if (this.mode == "range") {
          this.cale.setRange(this.cale.date.fullDate);
        }
        this.preWeekDate = this.cale.date.fullDate;
      }
      this.cale.setDate(firstDate);
      this.nowDate = this.cale.getInfo(firstDate);
      this.weeksMonth = this.nowDate.month;
      if (this.useToday && !this.date || this.date) {
        this.calendar = this.nowDate;
      }
      this.updateWeeks(false);
    },
    /**
     * 打开日历弹窗
     */
    open() {
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true;
        }, 50);
      });
    },
    /**
     * 关闭日历弹窗
     */
    close() {
      this.aniMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.$emit("close");
          if (this.clearDate && !this.insert) {
            this.cale.cleanRange();
            this.cale.cleanMultiple();
            this.swiperCurrent = 1;
            this.init(this.date);
          }
        }, 300);
      });
    },
    /**
     * 确认按钮
     */
    confirm() {
      this.setEmit("confirm");
      this.close();
    },
    /**
     * 变化触发
     */
    change() {
      if (!this.insert)
        return;
      this.setEmit("change");
    },
    /**
     * 选择月份触发
     */
    monthSwitch() {
      let { year, month } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month)
      });
    },
    /**
     * 派发事件
     * @param {Object} name
     */
    setEmit(name) {
      let { year, month, date, fullDate, lunar, extraInfo, type, mode } = this.calendar;
      let params = {
        range: this.cale.rangeStatus,
        multiple: this.cale.multiple,
        mode,
        type,
        year,
        month: Number(month),
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {}
      };
      if (this.type === "month" || this.type === "week") {
        params.foldStatus = this.FoldStatus;
      }
      this.$emit(name, params);
    },
    /**
     * 选择天触发
     * @param {Object} weeks
     */
    choiceDate(weeks) {
      if (weeks.disable || weeks.empty || this.disabledChoice)
        return;
      this.calendar = weeks;
      this.preWeekDate = this.calendar.fullDate;
      this.cale.setRange(this.calendar.fullDate);
      this.cale.setMultiple(this.calendar.fullDate);
      if (this.slideSwitchMode !== "none") {
        let weekName = "";
        switch (this.swiperCurrent) {
          case 0:
            weekName = "preWeeks";
            if (this.mode == "range") {
              this.weeks = this.cale._getWeek(
                this.weeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              this.nextWeeks = this.cale._getWeek(
                this.nextWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
            }
            break;
          case 1:
            weekName = "weeks";
            if (this.mode == "range") {
              this.preWeeks = this.cale._getWeek(
                this.preWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              this.nextWeeks = this.cale._getWeek(
                this.nextWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
            }
            break;
          case 2:
            weekName = "nextWeeks";
            if (this.mode == "range") {
              this.weeks = this.cale._getWeek(
                this.weeks[0].find((item) => item.fullDate).fullDate,
                false
              );
              this.preWeeks = this.cale._getWeek(
                this.preWeeks[0].find((item) => item.fullDate).fullDate,
                false
              );
            }
            break;
        }
        this[weekName] = this.cale.weeks;
      } else {
        this.weeks = this.cale.weeks;
      }
      this.change();
    },
    /**
     * 回到今天
     */
    backToday() {
      const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`;
      if (this.cale.rangeStatus.before && !this.cale.rangeStatus.after) {
        this.cale.rangeStatus.before = "";
      }
      this.setDate(this.cale.date.fullDate);
      let date = this.nowDate;
      this.calendar = date;
      this.pickerDate = date.fullDate;
      this.preWeekDate = date.fullDate;
      this.cale.setRange(date.fullDate);
      const todayYearMonth = `${date.year}-${date.month}`;
      if (nowYearMonth !== todayYearMonth) {
        this.monthSwitch();
      }
      this.setDate(this.cale.date.fullDate);
      this.swiperCurrentChangeWeeks();
      this.change();
    },
    /**
     * 上个月
     */
    pre() {
      this.swiperChangeDirection = "pre";
      this.updateWeeks();
    },
    /**
     * 下个月
     */
    next() {
      this.swiperChangeDirection = "next";
      this.updateWeeks();
    },
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date, recordPreWeeksDate = false) {
      this.cale.setDate(date);
      this.assignmentWeeks(recordPreWeeksDate);
      this.nowDate = this.cale.getInfo(date);
    },
    /**
     * 用来将cale.weeks 赋值到 weeks
     */
    assignmentWeeks(recordPreWeeksDate = false) {
      let weekName = "";
      let weekMonthName = "";
      switch (this.swiperCurrent) {
        case 0:
          weekName = "preWeeks";
          weekMonthName = "preWeeksMonth";
          break;
        case 1:
          weekName = "weeks";
          weekMonthName = "weeksMonth";
          break;
        case 2:
          weekName = "nextWeeks";
          weekMonthName = "nextWeeksMonth";
          break;
      }
      this[weekName] = this.cale.weeks;
      this[weekMonthName] = this.cale.selectDate.month;
      if (recordPreWeeksDate) {
        if (this.mode === "single") {
          let newPreWeekDate = this.cale.canlender.filter(
            (item) => item.fullDate === this.calendar.fullDate
          );
          if (newPreWeekDate.length)
            return this.preWeekDate = newPreWeekDate[0].fullDate;
        } else if (this.mode === "range") {
          let afterDate = this.cale.canlender.filter(
            (item) => item.fullDate === this.cale.rangeStatus.after
          );
          if (afterDate.length)
            return this.preWeekDate = afterDate[0].fullDate;
          let beforeDate = this.cale.canlender.filter(
            (item) => item.fullDate === this.cale.rangeStatus.before
          );
          if (beforeDate.length)
            return this.preWeekDate = beforeDate[0].fullDate;
        } else if (this.mode === "multiple" || this.selected.length) {
          let newMultiple = this.cale.multiple.filter(
            (item) => Number(item.split("-")[1]) === Number(this[weekMonthName])
          );
          for (var i = newMultiple.length - 1; i >= 0; i--) {
            let multiple = newMultiple[i];
            let newPreWeekDate = this.cale.canlender.filter((item) => item.fullDate === multiple);
            if (newPreWeekDate.length)
              return this.preWeekDate = newPreWeekDate[0].fullDate;
          }
        }
        if (this.selected.length) {
          let newSelected = this.selected.filter(
            (item) => Number(item.date.split("-")[1]) === Number(this[weekMonthName])
          );
          for (var i = newSelected.length - 1; i >= 0; i--) {
            let selected = newSelected[i];
            let newPreWeekDate = this.cale.canlender.filter(
              (item) => item.fullDate === selected.date
            );
            if (newPreWeekDate.length)
              return this.preWeekDate = newPreWeekDate[0].fullDate;
          }
        }
        for (var i = 0; i < this.cale.canlender.length; i++) {
          let dateDate = this.cale.canlender[i];
          if (dateDate.fullDate) {
            return this.preWeekDate = dateDate.fullDate;
          }
        }
      }
    },
    /**
     * 滑动切换日期
     */
    swiperChange(e) {
      if (e.detail.source !== "touch")
        return;
      let curr = e.detail.current;
      if (curr - this.swiperCurrent == 1 || curr - this.swiperCurrent == -2) {
        this.swiperChangeDirection = "next";
      } else {
        this.swiperChangeDirection = "pre";
      }
      this.swiperCurrent = curr;
      this.updateWeeks();
    },
    /**
     * 更新weeks
     * @param {Boolean} isChange 是否使当前的weeks发生变化
     */
    updateWeeks(isChange = true) {
      this.setDate(
        this.cale.getDate(
          this.nowDate.fullDate,
          isChange ? this.swiperChangeDirection == "next" ? 1 : -1 : 0,
          this.getDateType
        ).fullDate,
        true
      );
      this.swiperCurrentChangeWeeks();
      this.monthSwitch();
      this.pickerDate = this.nowDate.fullDate;
    },
    /**
     * swiperCurrent改变需要改动的weeks
     */
    swiperCurrentChangeWeeks() {
      if (this.slideSwitchMode === "none")
        return;
      this.$nextTick(() => {
        let nextDate = this.cale.getDate(this.nowDate.fullDate, 1, this.getDateType);
        let nextWeeks = this.cale._getWeek(nextDate.fullDate, false);
        let nextWeeksMonth = nextDate.month;
        let preDate = this.cale.getDate(this.nowDate.fullDate, -1, this.getDateType);
        let preWeeks = this.cale._getWeek(preDate.fullDate, false);
        let preWeeksMonth = preDate.month;
        if (this.swiperCurrent == 0) {
          this.weeks = nextWeeks;
          this.weeksMonth = nextWeeksMonth;
          this.nextWeeks = preWeeks;
          this.nextWeeksMonth = preWeeksMonth;
        } else if (this.swiperCurrent == 1) {
          this.nextWeeks = nextWeeks;
          this.nextWeeksMonth = nextWeeksMonth;
          this.preWeeks = preWeeks;
          this.preWeeksMonth = preWeeksMonth;
        } else {
          this.preWeeks = nextWeeks;
          this.preWeeksMonth = nextWeeksMonth;
          this.weeks = preWeeks;
          this.weeksMonth = preWeeksMonth;
        }
      });
    },
    // 点击折叠
    FoldClick() {
      this.FoldStatus = this.FoldStatus === "open" ? "close" : "open";
      this.cale.resetFoldStatus(this.FoldStatus);
      this.setDate(this.preWeekDate);
      this.$nextTick(() => {
        if (this.slideSwitchMode !== "none") {
          let nextDate = this.cale.getDate(this.nowDate.fullDate, 1, this.getDateType);
          let nextWeeks = this.cale._getWeek(nextDate.fullDate, false);
          let nextWeeksMonth = nextDate.month;
          let preDate = this.cale.getDate(this.nowDate.fullDate, -1, this.getDateType);
          let preWeeks = this.cale._getWeek(preDate.fullDate, false);
          let preWeeksMonth = preDate.month;
          if (this.swiperChangeDirection == "next") {
            if (this.swiperCurrent == 0) {
              this.weeks = nextWeeks;
              this.weeksMonth = nextWeeksMonth;
              this.nextWeeks = preWeeks;
              this.nextWeeksMonth = preWeeksMonth;
            } else if (this.swiperCurrent == 1) {
              this.nextWeeks = nextWeeks;
              this.nextWeeksMonth = nextWeeksMonth;
              this.preWeeks = preWeeks;
              this.preWeeksMonth = preWeeksMonth;
            } else {
              this.preWeeks = nextWeeks;
              this.preWeeksMonth = nextWeeksMonth;
              this.weeks = preWeeks;
              this.weeksMonth = preWeeksMonth;
            }
          } else {
            if (this.swiperCurrent == 0) {
              this.nextWeeks = preWeeks;
              this.nextWeeksMonth = preWeeksMonth;
              this.weeks = nextWeeks;
              this.weeksMonth = nextWeeksMonth;
            } else if (this.swiperCurrent == 1) {
              this.preWeeks = preWeeks;
              this.preWeeksMonth = preWeeksMonth;
              this.nextWeeks = nextWeeks;
              this.nextWeeksMonth = nextWeeksMonth;
            } else {
              this.weeks = preWeeks;
              this.weeksMonth = preWeeksMonth;
              this.preWeeks = nextWeeks;
              this.preWeeksMonth = nextWeeksMonth;
            }
          }
        }
      });
      this.$emit("foldSwitch", {
        type: this.type,
        status: this.FoldStatus
      });
    },
    // 初始化折叠
    initFold() {
      if (this.type === "month" || this.type === "week") {
        this.Fold = this.fold === null ? this.type !== "month" : this.fold;
        this.FoldStatus = this.type !== "month" ? "close" : "open";
      }
    },
    // 点击右边所有活动
    handleRight() {
      this.$emit("clickRight");
    }
  }
};
if (!Array) {
  const _component_wuCalendarBlock = common_vendor.resolveComponent("wuCalendarBlock");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_component_wuCalendarBlock + _easycom_uv_icon2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.insert && $data.show
  }, !_ctx.insert && $data.show ? {
    b: $data.aniMaskShow ? 1 : "",
    c: common_vendor.o((...args) => $options.clean && $options.clean(...args))
  } : {}, {
    d: _ctx.insert || $data.show
  }, _ctx.insert || $data.show ? common_vendor.e({
    e: !_ctx.insert
  }, !_ctx.insert ? {
    f: common_vendor.t($options.cancelText),
    g: common_vendor.o((...args) => $options.close && $options.close(...args)),
    h: common_vendor.t($options.okText),
    i: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  } : {}, {
    j: !_ctx.disabledOldHeader
  }, !_ctx.disabledOldHeader ? common_vendor.e({
    k: _ctx.slideSwitchMode == "vertical"
  }, _ctx.slideSwitchMode == "vertical" ? {
    l: common_vendor.o((...args) => $options.pre && $options.pre(...args)),
    m: common_vendor.t(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
    n: $data.pickerDate,
    o: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    p: common_vendor.o((...args) => $options.next && $options.next(...args)),
    q: common_vendor.t($options.todayText),
    r: common_vendor.o((...args) => $options.backToday && $options.backToday(...args))
  } : {
    s: common_vendor.o((...args) => $options.pre && $options.pre(...args)),
    t: common_vendor.t(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
    v: $data.pickerDate,
    w: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    x: common_vendor.o((...args) => $options.next && $options.next(...args)),
    y: common_vendor.t($options.todayText),
    z: common_vendor.o((...args) => $options.backToday && $options.backToday(...args))
  }) : {}, {
    A: _ctx.disabledOldHeader
  }, _ctx.disabledOldHeader ? {
    B: common_vendor.t(($data.nowDate.year || "") + $options.YearText + ($data.nowDate.month || "") + $options.MonthText),
    C: common_vendor.o((...args) => $options.handleRight && $options.handleRight(...args))
  } : {}, {
    D: _ctx.startWeek === "sun"
  }, _ctx.startWeek === "sun" ? {
    E: common_vendor.t($options.SUNText)
  } : {}, {
    F: common_vendor.t($options.monText),
    G: common_vendor.t($options.TUEText),
    H: common_vendor.t($options.WEDText),
    I: common_vendor.t($options.THUText),
    J: common_vendor.t($options.FRIText),
    K: common_vendor.t($options.SATText),
    L: _ctx.startWeek === "mon"
  }, _ctx.startWeek === "mon" ? {
    M: common_vendor.t($options.SUNText)
  } : {}, {
    N: _ctx.slideSwitchMode !== "none"
  }, _ctx.slideSwitchMode !== "none" ? common_vendor.e({
    O: _ctx.type === "month" || _ctx.type === "week"
  }, _ctx.type === "month" || _ctx.type === "week" ? {
    P: common_vendor.o($options.choiceDate),
    Q: common_vendor.p({
      weeks: $data.preWeeks,
      calendar: $data.calendar,
      selected: _ctx.selected,
      lunar: _ctx.lunar,
      color: _ctx.color,
      startText: _ctx.startText,
      endText: _ctx.endText,
      month: $data.preWeeksMonth,
      FoldStatus: $data.FoldStatus,
      showMonth: _ctx.showMonth
    }),
    R: common_vendor.o($options.choiceDate),
    S: common_vendor.p({
      weeks: $data.weeks,
      calendar: $data.calendar,
      selected: _ctx.selected,
      lunar: _ctx.lunar,
      color: _ctx.color,
      startText: _ctx.startText,
      endText: _ctx.endText,
      month: $data.weeksMonth,
      FoldStatus: $data.FoldStatus,
      showMonth: _ctx.showMonth
    }),
    T: common_vendor.o($options.choiceDate),
    U: common_vendor.p({
      weeks: $data.nextWeeks,
      calendar: $data.calendar,
      selected: _ctx.selected,
      lunar: _ctx.lunar,
      color: _ctx.color,
      startText: _ctx.startText,
      endText: _ctx.endText,
      month: $data.nextWeeksMonth,
      FoldStatus: $data.FoldStatus,
      showMonth: _ctx.showMonth
    })
  } : {}, {
    V: common_vendor.s($options.swiperStyle),
    W: _ctx.slideSwitchMode == "vertical",
    X: $data.swiperCurrent,
    Y: common_vendor.o((...args) => $options.swiperChange && $options.swiperChange(...args))
  }) : {
    Z: common_vendor.o($options.choiceDate),
    aa: common_vendor.p({
      weeks: $data.weeks,
      calendar: $data.calendar,
      selected: _ctx.selected,
      lunar: _ctx.lunar,
      color: _ctx.color,
      startText: _ctx.startText,
      endText: _ctx.endText,
      month: $data.nowDate.month,
      FoldStatus: $data.FoldStatus,
      showMonth: _ctx.showMonth
    })
  }, {
    ab: _ctx.type !== "year" && $data.Fold
  }, _ctx.type !== "year" && $data.Fold ? common_vendor.e({
    ac: $data.FoldStatus == "open"
  }, $data.FoldStatus == "open" ? {
    ad: common_vendor.p({
      name: "arrow-up",
      color: "#909399",
      size: "16"
    })
  } : $data.FoldStatus == "close" ? {
    af: common_vendor.p({
      name: "arrow-down",
      color: "#909399",
      size: "16"
    })
  } : {}, {
    ae: $data.FoldStatus == "close",
    ag: common_vendor.o((...args) => $options.FoldClick && $options.FoldClick(...args))
  }) : {}, {
    ah: !_ctx.insert && $data.show
  }, !_ctx.insert && $data.show ? {} : {}, {
    ai: !_ctx.insert ? 1 : "",
    aj: $data.aniMaskShow ? 1 : ""
  }) : {}, {
    ak: common_vendor.o(() => {
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9bb70f0c"]]);
wx.createComponent(Component);
