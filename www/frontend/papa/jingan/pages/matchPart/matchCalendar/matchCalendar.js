"use strict";
var __defProp = Object.defineProperty;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../../../common/vendor.js");
require("../../../utils/stroageUtils/storageUtil.js");
require("../../../utils/thirdPartUtils/md5.js");
require("../../../apis/sportsService/javaRequest.js");
const apis_activity = require("../../../apis/activity.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const dropDown = () => "../../../components/dropDown/index.js";
const wuCalendar = () => "../../../components/wu-calendar/components/wu-calendar/wu-calendar.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    wuCalendar
  },
  data() {
    return {
      selected: [],
      customStyle: {
        backgroundColor: "#fff",
        borderBottom: "1px solid #ebeff4"
      },
      status: "nomore",
      navBarHeight: 0,
      navColor: "#fff",
      selectDate: "",
      curentDate: {
        year: "",
        month: ""
      },
      searchParams: {}
    };
  },
  onLoad() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    this.selectDate = common_vendor.index.$uv.timeFormat((/* @__PURE__ */ new Date()).getTime());
    this.getList();
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
  },
  methods: {
    changeDropDown(res) {
      let obj = {};
      res.map((e) => {
        obj[e.name] = e.value;
      });
      this.searchParams = obj;
      this.resetData();
      this.getMonthAcNum(this.curentDate.year, this.curentDate.month);
    },
    onDayClick(data) {
      common_vendor.index.showLoading({
        mask: true,
        title: "加载中"
      });
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        this.selectDate = data.fulldate;
        this.resetData();
      }), 200);
    },
    monthSwitch(data) {
      if (this.curentDate.year != data.year || this.curentDate.month != data.month) {
        this.curentDate = data;
        this.getMonthAcNum(data.year, data.month);
      }
    },
    clickRight() {
      common_vendor.index.navigateTo({
        url: "/pages/activityAll/activityAll"
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          start_date: this.selectDate,
          end_date: this.selectDate
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_activity.getWxActivityList(param);
        this.getListExtend(res, refresh);
        common_vendor.index.hideLoading();
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: "", show_time: "", show_distance: "" }, e);
        if (e.images_url && e.images_url.length > 0) {
          obj.show_image = e.images_url[0];
        }
        let show_time = this.toSubstring(e.start_time) + "-" + this.toSubstring(e.end_time);
        obj.show_time = show_time;
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    getMonthAcNum(year, month) {
      return __async(this, null, function* () {
        let data = {
          start_date: common_vendor.index.$uv.timeFormat(new Date(year, month - 1, 1).getTime()),
          end_date: common_vendor.index.$uv.timeFormat(new Date(year, month, 0).getTime()),
          type: 4
        };
        data = Object.assign(data, this.searchParams);
        const res = yield apis_activity.getMothCount(data);
        if (res.code === 200) {
          let list = [];
          res.data.map((e) => {
            if (e.num > 0) {
              list.push({
                date: common_vendor.index.$uv.timeFormat(new Date(year, month - 1, e.day).getTime()),
                info: `${e.num}场`,
                topInfo: " ",
                infoColor: this.themePrimaryColorGetter
              });
            }
          });
          this.selected = list;
          console.log(list);
        }
      });
    },
    toSubstring(str) {
      var newStr = str.substring(5, 10);
      newStr = newStr.replace("-", "月") + "日";
      return newStr;
    },
    handleClick(item) {
      common_vendor.index.navigateTo({
        url: `/pages/activityDetail/activityDetail?activity_id=${item.activity_id}`
      });
    }
  }
};
if (!Array) {
  const _component_wuCalendar = common_vendor.resolveComponent("wuCalendar");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_wuCalendar + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("calendar", "b679f1c4-1,b679f1c4-0"),
    b: common_vendor.o($options.clickRight),
    c: common_vendor.o($options.onDayClick),
    d: common_vendor.o($options.monthSwitch),
    e: common_vendor.p({
      type: "week",
      fold: true,
      color: _ctx.themePrimaryColorGetter,
      date: $data.selectDate,
      disabledOldHeader: false,
      selected: $data.selected
    }),
    f: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    g: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    h: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    i: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    j: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
