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
const TrainItem = () => "../../../components/TrainItem/index.js";
const trainDropDown = () => "./components/trainDropDown.js";
const _sfc_main = {
  components: {
    TrainItem,
    trainDropDown
  },
  data() {
    return {
      area: "",
      urls: [],
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
      searchObj: {},
      train_type: 0
    };
  },
  onLoad(options) {
    console.log("[ options ] >", options);
    if (options.trainType) {
      this.train_type = options.trainType;
    }
    if (options.title) {
      common_vendor.index.setNavigationBarTitle({
        title: options.title
      });
    }
  },
  onHide() {
    var _a;
    (_a = this.$refs.homeDropDownRef) == null ? void 0 : _a.close();
  },
  methods: {
    handleStatus(item) {
      this.pickTab = item.value;
      this.queryList(1, 10);
    },
    search(data) {
      this.searchObj = data;
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
        if (this.train_type != 0) {
          params.train_type = this.train_type;
        }
        let res = yield this.$api.getWxTrainActivityList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
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
          this.dataList = dealData;
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(dealData);
        }
      });
    }
  }
};
if (!Array) {
  const _component_trainDropDown = common_vendor.resolveComponent("trainDropDown");
  const _component_TrainItem = common_vendor.resolveComponent("TrainItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_trainDropDown + _component_TrainItem + _component_empty + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_z_paging = () => "../../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  _easycom_z_paging();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("homeDropDownRef", "637d992e-2,637d992e-1"),
    b: common_vendor.o($options.search),
    c: common_vendor.f($data.dataList, (item, k0, i0) => {
      return {
        a: item,
        b: "637d992e-3-" + i0 + ",637d992e-1",
        c: common_vendor.p({
          item
        })
      };
    }),
    d: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    e: common_vendor.sr("pagingRef", "637d992e-1,637d992e-0"),
    f: common_vendor.o($options.queryList),
    g: common_vendor.o(($event) => $data.dataList = $event),
    h: common_vendor.p({
      ["loading-more-custom-style"]: {
        "padding-bottom": "200rpx"
      },
      modelValue: $data.dataList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-637d992e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=listByType.js.map
