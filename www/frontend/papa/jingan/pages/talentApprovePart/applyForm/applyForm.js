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
const apis_sportTalent = require("../../../apis/sportTalent.js");
const components_paForm_formatData = require("../../../components/paForm/formatData.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const paForm = () => "../../../components/paForm/paForm.js";
const baseInfoForm = () => "./components/baseInfoForm.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    paForm,
    baseInfoForm,
    bottomButton
  },
  data() {
    return {
      type_id: "",
      loading: false,
      otherFormValue: {},
      otherFormOptions: [],
      otherFormRules: {},
      pageHidden: false
    };
  },
  onLoad(options) {
    this.setNavigationBarColor();
    if (options.name) {
      common_vendor.index.setNavigationBarTitle({
        title: options.name
      });
    }
    this.type_id = options.type_id;
    this.getQuestion(this.type_id);
    common_vendor.index.$on("SHOW_POPUP", (val) => {
      console.log("show_popup", val);
      this.pageHidden = val.flag;
    });
  },
  methods: {
    getQuestion(type_id) {
      return __async(this, null, function* () {
        let res = yield apis_sportTalent.getSportTalentType({ type_id });
        if (res.code != 200) {
          this.$showToastNone(res.message);
          return;
        }
        let { fields, field_info } = res.data;
        try {
          field_info = JSON.parse(field_info);
          let is_must_obj = {};
          field_info.map((e) => {
            is_must_obj[e.id] = e.m;
          });
          fields.map((e) => {
            if (e.field_select_value) {
              e.field_select_value = JSON.parse(e.field_select_value);
            }
            e.is_must = is_must_obj[e.field_id];
          });
          let formatClass = new components_paForm_formatData.FormatBackDataClass(fields);
          let formValue = formatClass.getDefaultData();
          let formRules = formatClass.getRules();
          let formOptions = formatClass.getDataList();
          console.log({ formValue, formRules, formOptions });
          this.otherFormRules = formRules;
          this.otherFormValue = formValue;
          this.otherFormOptions = formOptions;
        } catch (e) {
          console.error("getTypeInfo", e);
        }
      });
    },
    handleSubmit() {
      return __async(this, null, function* () {
        let otherFormRef = this.$refs["otherFormRef"];
        let flag = yield otherFormRef.validate();
        let customData = otherFormRef.getCustomData();
        let baseInfoFormRef = this.$refs["baseInfoFormRef"];
        console.log(baseInfoFormRef.getData());
        let valid = yield baseInfoFormRef.validate();
        if (!valid || !flag) {
          return;
        }
        let params = __spreadProps(__spreadValues({}, baseInfoFormRef.getData()), {
          type_id: this.type_id,
          field_info: JSON.stringify([customData])
        });
        let res = yield apis_sportTalent.addSportTalent(params);
        if (res.code != 200) {
          this.$showToastNone(res.message);
          return;
        } else {
          common_vendor.index.showToast({
            icon: "success",
            title: "提交成功",
            duration: 2e3
          });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 1e3);
        }
      });
    }
  }
};
if (!Array) {
  const _component_baseInfoForm = common_vendor.resolveComponent("baseInfoForm");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_baseInfoForm + _easycom_paForm2 + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../../components/paForm/paForm.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_paForm + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: "overflow:" + ($data.pageHidden ? "hidden" : "visible"),
    b: common_vendor.sr("baseInfoFormRef", "1abcb222-1,1abcb222-0"),
    c: $data.otherFormOptions.length > 0
  }, $data.otherFormOptions.length > 0 ? {} : {}, {
    d: common_vendor.sr("otherFormRef", "1abcb222-2,1abcb222-0"),
    e: common_vendor.p({
      value: $data.otherFormValue,
      optionList: $data.otherFormOptions,
      rules: $data.otherFormRules
    }),
    f: common_vendor.o($options.handleSubmit),
    g: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1abcb222"]]);
wx.createPage(MiniProgramPage);
