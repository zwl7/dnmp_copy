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
const common_vendor = require("../../../common/vendor.js");
const dropDown = () => "../../../components/dropDown/index.js";
const dropDownCitySelect = () => "../../../components/dropDown/dropDownCitySelect.js";
const dropDownProjectSelect = () => "../../../components/dropDown/dropDownProjectSelect.js";
const _sfc_main = {
  components: {
    dropDown,
    dropDownCitySelect,
    dropDownProjectSelect
  },
  data() {
    return {
      searchFormValue: {},
      selectType: "",
      popupChange: false,
      options: {
        belong_place_id: {
          label: "全部区域",
          value: 0,
          child: [],
          useSlot: true
        },
        sport_tag_ids: {
          label: "全部项目",
          value: 0,
          child: [],
          useSlot: true
        },
        sort: {
          label: "全部排序",
          value: 0,
          activeIndex: 0,
          child: [
            {
              label: "全部排序",
              value: 0
            },
            {
              label: "热度排序",
              value: 1
            },
            {
              label: "时间排序",
              value: 2
            },
            {
              label: "点赞排序",
              value: 3
            }
          ]
        }
      }
    };
  },
  onLoad(options) {
  },
  methods: {
    init() {
      this.$refs["dropDown"].init();
    },
    openDrop(e) {
      this.selectType = e.name;
      this.$emit("open", e);
    },
    changePopup(e) {
      this.popupChange = e.show;
    },
    changeDropDown(res) {
      let obj = {};
      res.map((e) => {
        obj[e.name] = e.value;
      });
      this.searchFormValue = __spreadValues(__spreadValues({}, this.searchFormValue), obj);
      this.handleSearch();
    },
    //  城市选择确认
    citySelectConfirm(e) {
      let item = e.data[e.data.length - 1];
      let values = e.values;
      this.options["belong_place_id"].label = item ? item.name : "全部区域";
      this.searchFormValue["company_area_id"] = values.length ? values[values.length - 1] : "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 城市选择重置
    citySelectReset() {
      this.options["belong_place_id"].label = "全部区域";
      this.searchFormValue["company_area_id"] = "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 项目选择确认
    projectSelectConfirm(e) {
      let item = e.data[e.data.length - 1];
      let values = e.values;
      this.options["sport_tag_ids"].label = item ? item.name : "全部项目";
      this.searchFormValue["sport_tag_ids"] = values.length ? values[values.length - 1] : "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 项目选择重置
    projectSelectReset() {
      this.options["sport_tag_ids"].label = "全部项目";
      this.searchFormValue["sport_tag_ids"] = "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    handleSearch() {
      console.log(this.searchFormValue);
      let params = JSON.parse(JSON.stringify(this.searchFormValue));
      for (const key in params) {
        const item = params[key];
        if (item == "") {
          delete params[key];
        }
      }
      this.$emit("search", params);
    }
  }
};
if (!Array) {
  const _component_dropDownCitySelect = common_vendor.resolveComponent("dropDownCitySelect");
  const _component_dropDownProjectSelect = common_vendor.resolveComponent("dropDownProjectSelect");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  (_component_dropDownCitySelect + _component_dropDownProjectSelect + _component_dropDown)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.citySelectConfirm),
    b: common_vendor.o($options.citySelectReset),
    c: $data.selectType == "belong_place_id",
    d: common_vendor.o($options.projectSelectConfirm),
    e: common_vendor.o($options.projectSelectReset),
    f: $data.selectType == "sport_tag_ids",
    g: common_vendor.sr("dropDown", "1dafd3d2-0"),
    h: common_vendor.o($options.changeDropDown),
    i: common_vendor.o($options.changePopup),
    j: common_vendor.o($options.openDrop),
    k: common_vendor.p({
      sign: "associationItem",
      options: $data.options,
      sleep: 100
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=homeDropDown.js.map
