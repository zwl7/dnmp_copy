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
  props: {
    pageType: {
      type: String,
      default: "level"
    }
  },
  data() {
    return {
      searchFormValue: {},
      selectType: "",
      options: {
        company_area_id: {
          label: "全部区域",
          value: 999999,
          child: [],
          useSlot: true
        },
        tag_id: {
          label: "全部项目",
          value: 999999,
          child: [],
          useSlot: true
        },
        level: {
          label: "全部等级",
          value: 999999,
          activeIndex: 0,
          child: [
            {
              label: "全部等级",
              value: 999999
            },
            {
              label: "国家级",
              value: 0
            },
            {
              label: "一级",
              value: 1
            },
            {
              label: "二级",
              value: 2
            },
            {
              label: "三级",
              value: 3
            },
            {
              label: "其它",
              value: 4
            }
          ]
        }
      }
    };
  },
  computed: {
    themeType() {
      return this.$store.app.themeType;
    }
  },
  watch: {
    pageType: {
      handler(val) {
        if (val == "star") {
          this.options["star_level"] = {
            label: "全部星级",
            value: 999999,
            activeIndex: 0,
            child: [
              {
                label: "全部等级",
                value: 999999
              },
              {
                label: "一星",
                value: 1
              },
              {
                label: "二星",
                value: 2
              },
              {
                label: "三星",
                value: 3
              },
              {
                label: "四星",
                value: 4
              },
              {
                label: "五星",
                value: 5
              }
            ]
          };
        }
      },
      immediate: true
    }
  },
  onLoad(options) {
  },
  created() {
    if (this.themeType == 2) {
      try {
        this.options.level.child[5].label = "青少年社会体育指导员";
      } catch (error) {
      }
    }
  },
  methods: {
    init() {
      this.$refs["dropDown"].init();
    },
    openDrop(e) {
      this.selectType = e.name;
      this.$emit("open", e);
    },
    close() {
      this.$refs["dropDown"].close();
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
      this.options["company_area_id"].label = item ? item.name : "全部区域";
      this.searchFormValue["company_area_id"] = values.length ? values[values.length - 1] : "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 城市选择重置
    citySelectReset() {
      this.options["company_area_id"].label = "全部区域";
      this.searchFormValue["company_area_id"] = "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 项目选择确认
    projectSelectConfirm(e) {
      let item = e.data[e.data.length - 1];
      let values = e.values;
      this.options["tag_id"].label = item ? item.name : "全部项目";
      this.searchFormValue["tag_id"] = values.length ? values[values.length - 1] : "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    // 项目选择重置
    projectSelectReset() {
      this.options["tag_id"].label = "全部项目";
      this.searchFormValue["tag_id"] = "";
      this.$refs["dropDown"].close();
      this.handleSearch();
    },
    handleSearch() {
      let params = JSON.parse(JSON.stringify(this.searchFormValue));
      for (const key in params) {
        const item = params[key];
        if (item === "" || item === 999999) {
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
    c: $data.selectType == "company_area_id",
    d: common_vendor.o($options.projectSelectConfirm),
    e: common_vendor.o($options.projectSelectReset),
    f: $data.selectType == "tag_id",
    g: common_vendor.sr("dropDown", "045aa09a-0"),
    h: common_vendor.o($options.changeDropDown),
    i: common_vendor.o($options.openDrop),
    j: common_vendor.p({
      sign: "trainDropDown",
      options: $data.options
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=instructorDropDown.js.map
