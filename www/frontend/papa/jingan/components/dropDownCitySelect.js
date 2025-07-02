"use strict";
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
const common_vendor = require("../common/vendor.js");
const DEFAULT_FIELDS = {
  label: "name",
  value: "company_area_id",
  children: "next"
};
const app = getApp();
const _sfc_main = {
  name: "dropDownCitySelect",
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          {
            label: "江西省",
            value: "1",
            children: [
              {
                label: "赣州市",
                value: "2",
                children: [
                  {
                    label: "南康区",
                    value: "3"
                  },
                  { label: "信丰", value: "4" }
                ]
              }
            ]
          }
        ];
      }
    },
    fieldNames: {
      type: Object,
      default: () => DEFAULT_FIELDS
    },
    defaultSelected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showLocation: {
      type: Boolean,
      default: true
    },
    showDistance: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cityName: "",
      cityId: "",
      activeIndex: 0,
      //距离栏选中
      labelList: [
        { id: 1, name: "全部", value: 0 },
        { id: 2, name: "1km", value: 1e3 },
        { id: 3, name: "5km", value: 5e3 },
        { id: 4, name: "10km", value: 1e4 },
        { id: 5, name: "20km", value: 2e4 },
        { id: 6, name: "25km", value: 25e4 }
      ],
      distanceForm: {},
      //距离选择
      locationInfo: {},
      //经纬度信息
      wrapContent: [this.options],
      values: [],
      selectItem: []
    };
  },
  computed: {
    labelKey() {
      return this.fieldNames.label || DEFAULT_FIELDS.label;
    },
    valueKey() {
      return this.fieldNames.value || DEFAULT_FIELDS.value;
    },
    childrenKey() {
      return this.fieldNames.children || DEFAULT_FIELDS.children;
    }
  },
  watch: {
    options(n) {
      this.wrapContent = [n];
    },
    values(e) {
      let list = [];
      e.map((c, index) => {
        for (let i = 0; i < this.wrapContent[index].length; i++) {
          let item = this.wrapContent[index][i];
          if (c === item[this.valueKey]) {
            list.push(item);
          }
        }
      });
      console.log("111111111", list);
      this.selectItem = list;
    }
  },
  created() {
  },
  mounted() {
    return __async(this, null, function* () {
      this.cityName = "位置未知";
      this.initDefaultSelected();
      if (!app.globalData.is_get_location) {
        this.cityName = "定位中";
        try {
          yield app.getLocation();
          this.cityName = app.globalData.city;
          this.cityId = app.globalData.city_id;
          this.locationInfo.latitude = app.globalData.latitude;
          this.locationInfo.longitude = app.globalData.longitude;
        } catch (e) {
          this.cityName = "定位失败";
        }
      } else {
        this.cityName = app.globalData.city;
        this.cityId = app.globalData.city_id;
        this.locationInfo.latitude = app.globalData.latitude;
        this.locationInfo.longitude = app.globalData.longitude;
      }
    });
  },
  methods: {
    initDefaultSelected(idx = 0) {
      var _a;
      if ((_a = this.defaultSelected) == null ? void 0 : _a.length) {
        this.wrapContent[idx].forEach((v, i) => {
          var _a2;
          if (this.defaultSelected.includes(v.value) && ((_a2 = v.children) == null ? void 0 : _a2.length)) {
            this.wrapContent[++idx] = v.children;
            this.initDefaultSelected(idx);
          }
        });
        this.values = [...this.defaultSelected];
      }
    },
    itemClick(wrapIdx, i) {
      this.activeIndex = 0;
      this.distanceForm = {};
      this.values[wrapIdx] = this.wrapContent[wrapIdx][i][this.valueKey];
      this.values = this.values.slice(0, wrapIdx + 1);
      let children = this.wrapContent[wrapIdx][i][this.childrenKey];
      if (children == null ? void 0 : children.length) {
        this.wrapContent[++wrapIdx] = children;
        this.wrapContent = this.wrapContent.slice(0, wrapIdx + 1);
        if (this.isFullValue) {
          this.$nextTick(() => {
            this.itemClick(wrapIdx, 0);
          });
        }
      } else
        this.wrapContent = this.wrapContent.slice(0, wrapIdx + 1);
      this.$nextTick(function() {
        this.$emit("change", this.values);
      });
    },
    confirm() {
      if (this.isFullValue) {
        if (this.values.length && this.values.length != this.wrapContent.length)
          return console.log("未选择完整");
      }
      this.$emit("input", false);
      this.$emit("confirm", this.formatValues());
    },
    formatValues() {
      let form = {
        label: "湖北省"
      };
      if (this.activeIndex && this.activeIndex != 1) {
        form.distance = this.distanceForm.value;
        form.label = this.distanceForm.name;
      } else if (this.activeIndex == 1) {
        form.label = this.distanceForm.name;
      } else {
        let lastValue = this.values[this.values.length - 1];
        if (lastValue) {
          let zeroCount = this.countTrailingZeros(String(lastValue));
          let areaMap = {
            2: "cityId",
            4: "provinceId"
          };
          form[areaMap[zeroCount] || "districtId"] = lastValue;
        }
        let item = this.selectItem[this.selectItem.length - 1];
        form.label = item ? item[this.labelKey] : "全部区域";
      }
      if (this.locationInfo.latitude) {
        form.lat = this.locationInfo.latitude;
        form.lng = this.locationInfo.longitude;
      }
      console.log(form);
      return form;
    },
    countTrailingZeros(str) {
      let count = 0;
      for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "0") {
          count++;
        } else {
          break;
        }
      }
      return count;
    },
    reset() {
      if (this.wrapContent.length) {
        this.values = [];
        this.wrapContent = [this.wrapContent[0]];
      }
      this.activeIndex = 0;
      this.distanceForm = {};
    },
    // 选中距离栏
    slectDistance(item) {
      console.log(item);
      this.activeIndex = item.id;
      this.distanceForm = item;
      this.values = [];
    },
    // 重新定位
    resetLocation() {
      return __async(this, null, function* () {
        if (this.cityName === "定位中") {
          return;
        }
        this.cityName = "定位中";
        try {
          yield app.getLocation();
          this.cityName = app.globalData.city;
          this.cityId = app.globalData.cityId;
          this.locationInfo.latitude = app.globalData.latitude;
          this.locationInfo.longitude = app.globalData.longitude;
        } catch (e) {
          console.log(e);
          this.cityName = "定位失败";
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uv_icon2 + _easycom_uni_icons2)();
}
const _easycom_uv_icon = () => "../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showLocation
  }, $props.showLocation ? {
    b: common_vendor.t($data.cityName),
    c: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "15"
    }),
    d: common_vendor.o((...args) => $options.resetLocation && $options.resetLocation(...args))
  } : {}, {
    e: $props.showDistance
  }, $props.showDistance ? {
    f: common_vendor.f($data.labelList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.value,
        c: common_vendor.o(($event) => $options.slectDistance(item), item.value),
        d: common_vendor.n($data.activeIndex === item.id ? "active" : "")
      };
    })
  } : {}, {
    g: common_vendor.f($data.wrapContent, (wrapItem, wrapIdx, i0) => {
      return {
        a: common_vendor.f(wrapItem, (item, i, i1) => {
          return common_vendor.e({
            a: common_vendor.t(item[$options.labelKey]),
            b: item[$options.valueKey] == $data.values[wrapIdx]
          }, item[$options.valueKey] == $data.values[wrapIdx] ? {
            c: "69aa5ca2-1-" + i0 + "-" + i1,
            d: common_vendor.p({
              type: "checkmarkempty",
              size: "14"
            })
          } : {}, {
            e: common_vendor.n({
              active: item[$options.valueKey] === $data.values[wrapIdx]
            }),
            f: i,
            g: common_vendor.o(($event) => $options.itemClick(wrapIdx, i), i)
          });
        }),
        b: wrapIdx,
        c: common_vendor.n({
          "first-line": wrapIdx == 0
        })
      };
    }),
    h: common_vendor.o((...args) => $options.reset && $options.reset(...args)),
    i: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69aa5ca2"]]);
wx.createComponent(Component);
