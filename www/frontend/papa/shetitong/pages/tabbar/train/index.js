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
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const TrainItem = () => "../../../components/TrainItem/index.js";
const trainDropDown = () => "./components/trainDropDown.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    TrainItem,
    trainDropDown
  },
  data() {
    return {
      area: "",
      urls: [],
      pickTab: 0,
      dataList: [],
      areaGroupList: [
        [
          {
            text: "全部区域",
            value: 0
          }
        ]
      ],
      tempDataObj: {},
      searchObj: {}
    };
  },
  computed: {
    activitedColor() {
      return this.$store.app.themeConfig["hubei-primary"];
    },
    themeType() {
      return this.$store.app.themeType;
    },
    showList() {
      if (this.themeType == "1") {
        return [
          {
            value: 0,
            name: "全部活动"
          },
          {
            value: 1,
            name: "晋级培训"
          },
          {
            value: 2,
            name: "技能培训"
          }
        ];
      } else {
        return [
          {
            value: 0,
            name: "全部活动"
          },
          {
            value: 1,
            name: "晋级培训"
          },
          {
            value: 2,
            name: "技能培训"
          },
          {
            value: 3,
            name: "校园培训"
          }
        ];
      }
    }
  },
  onLoad(options) {
  },
  onHide() {
    var _a;
    (_a = this.$refs.homeDropDownRef) == null ? void 0 : _a.close();
  },
  methods: {
    resetData() {
      var _a;
      common_vendor.index.showLoading({
        title: "加载中"
      });
      this.dataList = [];
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete([]);
    },
    handleStatus(item) {
      this.pickTab = item.value;
      this.resetData();
      this.queryList(1, 10);
    },
    search(data) {
      this.searchObj = data;
      this.resetData();
      this.queryList(1, 10);
    },
    getLabel(data = [], key, keyArray = []) {
      let label = [];
      data.forEach((item) => {
        if (item[keyArray[0]] == key) {
          label.push(item[keyArray[1]]);
        }
        if (item[keyArray[2]] && item[keyArray[2]].length > 0) {
          label = label.concat(this.getLabel(item[keyArray[2]], key, keyArray));
        }
      });
      return label;
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        this.tempDataObj.areaGroupList;
        let params = __spreadValues({
          page: pageNo,
          size: pageSize
        }, this.searchObj);
        if (this.pickTab != 0) {
          params.train_type = this.pickTab;
        }
        let res = yield this.$api.getWxTrainActivityList(params);
        if (res.code == 200) {
          let dealData = res.data.list.map((item) => {
            let startTime = this.$dayjs(item.apply_start_time * 1e3).format("YYYY-MM-DD");
            let endTime = this.$dayjs(item.apply_end_time * 1e3).format("YYYY-MM-DD");
            let formatObj = {
              tagStr: item.tag_ids_arr.map((tagItem) => {
                return tagItem.tag_id_str;
              }).toString(),
              startTime,
              endTime
            };
            return __spreadValues(__spreadValues({}, formatObj), item);
          });
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(dealData);
          common_vendor.index.hideLoading();
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_trainDropDown = common_vendor.resolveComponent("trainDropDown");
  const _component_TrainItem = common_vendor.resolveComponent("TrainItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_easycom_uv_tabs2 + _component_trainDropDown + _component_TrainItem + _component_empty + _easycom_z_paging2 + _component_layout_tabbar_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_z_paging = () => "../../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleStatus),
    b: common_vendor.p({
      list: $options.showList,
      scrollable: false,
      lineColor: $options.activitedColor
    }),
    c: common_vendor.sr("homeDropDownRef", "5c5b9982-3,5c5b9982-1"),
    d: common_vendor.o($options.search),
    e: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: index,
        b: "5c5b9982-4-" + i0 + ",5c5b9982-1",
        c: common_vendor.p({
          item
        })
      };
    }),
    f: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    g: common_vendor.sr("pagingRef", "5c5b9982-1,5c5b9982-0"),
    h: common_vendor.o($options.queryList),
    i: common_vendor.o(($event) => $data.dataList = $event),
    j: common_vendor.p({
      ["loading-more-custom-style"]: {
        "padding-bottom": "200rpx"
      },
      modelValue: $data.dataList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5c5b9982"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
