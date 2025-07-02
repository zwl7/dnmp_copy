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
const apis_site = require("../../../apis/site.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const fitnessReserveItem = () => "../fitnessReserve/components/fitnessReserveItem.js";
const weekCalendar = () => "./components/weekCalendar.js";
const timeSelect = () => "./components/timeSelect.js";
const peopleItem = () => "./components/peopleItem.js";
const addUserPopup = () => "./components/addUserPopup.js";
const noticePopup = () => "./components/noticePopup.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    fitnessReserveItem,
    weekCalendar,
    timeSelect,
    peopleItem,
    bottomButton,
    addUserPopup,
    noticePopup
  },
  data() {
    return {
      health_id: "",
      timeList: [],
      peopleList: [],
      info: {},
      weekData: {},
      timeData: "",
      agreementData: "",
      loading: false,
      choosedPeople: []
    };
  },
  onLoad(options) {
    this.health_id = options.health_id;
    this.getHealth();
    this.getHealthAgreementData();
    this.getDateData();
    this.getWxResservePeopleList();
  },
  methods: {
    getWxResservePeopleList() {
      return __async(this, null, function* () {
        let res = yield apis_site.getWxResservePeopleList({
          page: 1,
          size: 999
        });
        if (res.code == 200) {
          let data = res.data.list;
          this.peopleList = data.map((item) => {
            return __spreadProps(__spreadValues({}, item), {
              card: item.id_card,
              checkValue: []
            });
          });
        }
      });
    },
    // 详情
    handleToDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/fitnessReserveDetail/fitnessReserveDetail?health_id=${item.health_id}`
      });
    },
    deletePeopleItem(e, index) {
      return __async(this, null, function* () {
        let res = yield apis_site.delWxResservePeople({
          reserve_people_id: e.reserve_people_id
        });
        if (res.code == 200) {
          this.peopleList.splice(index, 1);
          this.dealChoosePeople();
        } else {
          this.$showToastNone(res.message);
        }
      });
    },
    getHealth() {
      return __async(this, null, function* () {
        let params = {
          health_id: this.health_id
        };
        let res = yield apis_site.getHealth(params);
        res.data.show_image = "";
        if (res.data.images_url && res.data.images_url.length > 0) {
          res.data.show_image = res.data.images_url[0];
        }
        this.info = res.data;
      });
    },
    getHealthAgreementData() {
      return __async(this, null, function* () {
        let params = {
          health_id: this.health_id
        };
        let res = yield apis_site.getHealthAgreement(params);
        console.log(res);
        this.agreementData = this.$formatRichText(res.data.text);
      });
    },
    // 获取每天的数据
    getDateData(val) {
      return __async(this, null, function* () {
        if (val) {
          this.weekData = val;
        }
        const today = common_vendor.index.$uv.timeFormat((/* @__PURE__ */ new Date()).getTime(), "y-m-d");
        const week = (/* @__PURE__ */ new Date()).getDay();
        let params = {
          health_id: this.health_id,
          date: val ? val.date : today,
          week: val ? val.weeks_num ? val.weeks_num : 7 : week
        };
        let res = yield apis_site.getSeason(params);
        res.data.map((item, index) => {
          if (index === 0)
            ;
          else {
            item.isSelected = false;
          }
        });
        if (val) {
          this.timeData = "";
        }
        this.timeList = res.data;
      });
    },
    getTimeData(val) {
      console.log(val);
      this.timeData = val;
    },
    handleShowNotice() {
      this.$refs["noticePopup"].open();
    },
    addUser() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        console.log("添加预约人");
        this.$refs["addUserPopup"].open();
      });
    },
    getUserData(info) {
      return __async(this, null, function* () {
        let res = yield apis_site.addWxResservePeople({
          id_card: info.card,
          name: info.name
        });
        if (res.code == 200) {
          let { reserve_people_id } = res.data;
          info.reserve_people_id = reserve_people_id;
          this.peopleList.push(info);
        } else {
          this.$showToastNone(res.message);
        }
      });
    },
    dealChoosePeople() {
      let peopleList = this.peopleList, choosedPeople = [];
      peopleList.forEach((item) => {
        if (item.checkValue.toString() != "") {
          choosedPeople.push({
            name: item.name,
            card: item.card
          });
        }
      });
      this.choosedPeople = choosedPeople;
      return choosedPeople;
    },
    handleOrder() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        if (!this.timeData) {
          this.$showToastNone("请选择时间段");
          return;
        }
        this.dealChoosePeople();
        if (this.peopleList.length == 0) {
          this.$showToastNone("请至少添加一位预约人");
          return;
        }
        if (this.choosedPeople.length == 0) {
          this.$showToastNone("请至少选择一位预约人");
          return;
        }
        let reserve_info = [];
        this.choosedPeople.map((e) => {
          reserve_info.push({
            n: e.name,
            id_n: e.card,
            id_t: 1
          });
        });
        const param = {
          health_id: this.health_id,
          week: this.weekData.weeks_num == 0 ? 7 : this.weekData.weeks_num,
          date: this.weekData.date,
          season_time: this.timeData.t,
          reserve_info: JSON.stringify(reserve_info)
        };
        this.loading = true;
        let res = yield apis_site.healthReserve(param);
        if (res.code === 200) {
          common_vendor.index.redirectTo({
            url: `/pagesSub/fitnessReserve/activityApplyResult/activityApplyResult?applicant_id=${this.health_id}&title=预约成功&type=health`
          });
        } else {
          this.$showToastNone(res.message);
        }
        this.loading = false;
      });
    }
  }
};
if (!Array) {
  const _component_fitnessReserveItem = common_vendor.resolveComponent("fitnessReserveItem");
  const _component_weekCalendar = common_vendor.resolveComponent("weekCalendar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_timeSelect = common_vendor.resolveComponent("timeSelect");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_peopleItem = common_vendor.resolveComponent("peopleItem");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_addUserPopup = common_vendor.resolveComponent("addUserPopup");
  const _component_noticePopup = common_vendor.resolveComponent("noticePopup");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_fitnessReserveItem + _component_weekCalendar + _easycom_uv_icon2 + _component_timeSelect + _component_empty + _component_peopleItem + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_addUserPopup + _component_noticePopup + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $options.handleToDetail($data.info)),
    b: common_vendor.p({
      info: $data.info,
      hiddenBtn: true
    }),
    c: common_vendor.o($options.getDateData),
    d: common_vendor.p({
      name: "error-circle",
      color: "#909399",
      size: "16"
    }),
    e: common_vendor.o((...args) => $options.handleShowNotice && $options.handleShowNotice(...args)),
    f: common_vendor.o($options.getTimeData),
    g: common_vendor.p({
      list: $data.timeList
    }),
    h: $data.timeList.length == 0
  }, $data.timeList.length == 0 ? {
    i: common_vendor.p({
      marginTop: 0,
      text: "今日暂未开放, 敬请期待~"
    })
  } : {}, {
    j: $data.timeList.length != 0
  }, $data.timeList.length != 0 ? common_vendor.e({
    k: common_vendor.p({
      name: "plus",
      color: _ctx.themePrimaryColorGetter,
      size: "16"
    }),
    l: common_vendor.o((...args) => $options.addUser && $options.addUser(...args)),
    m: common_vendor.f($data.peopleList, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.deletePeopleItem($event, index), index),
        b: "4408320d-7-" + i0 + ",4408320d-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    n: $data.peopleList.length == 0
  }, $data.peopleList.length == 0 ? {
    o: common_vendor.p({
      marginTop: 10,
      type: "people",
      text: "暂无预约人信息,请添加~"
    })
  } : {}) : {}, {
    p: common_vendor.o($options.handleOrder),
    q: common_vendor.p({
      loading: $data.loading,
      loadingText: "正在提交"
    }),
    r: common_vendor.sr("addUserPopup", "4408320d-11,4408320d-0"),
    s: common_vendor.o($options.getUserData),
    t: common_vendor.sr("noticePopup", "4408320d-12,4408320d-0"),
    v: common_vendor.p({
      agreementData: $data.agreementData
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
