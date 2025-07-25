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
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const paForm = () => "../../../components/paForm/paForm.js";
const baseInfoForm = () => "./components/baseInfoForm.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins, core_themeMixins.themeMixins],
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
      pageHidden: false,
      formData: {
        name: "",
        identity_type: "",
        identity_type_str: "",
        identity: "",
        sex: "",
        phone: "",
        cover_image: [],
        sport_tag: [],
        sport_tag_str: null,
        level: null,
        level_str: null,
        belong_place_id: null,
        belong_place_id_str: "",
        remark: ""
      },
      otherFormData: {}
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.setNavigationBarColor();
      if (options.name) {
        common_vendor.index.setNavigationBarTitle({
          title: options.name
        });
      }
      this.type_id = options.type_id;
      yield this.getSportTalentDetail(options.sport_talent_id);
      this.getQuestion(this.type_id);
      common_vendor.index.$on("SHOW_POPUP", (val) => {
        console.log("show_popup", val);
        this.pageHidden = val.flag;
      });
    });
  },
  methods: {
    // 获取运动员详情
    getSportTalentDetail(sport_talent_id) {
      return __async(this, null, function* () {
        let res = yield apis_sportTalent.getMyWxSportTalent({ sport_talent_id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        res.data.level_info_json_array.map((e) => {
          e.level = String(e.level);
        });
        let form = {
          name: res.data.name,
          identity_type: String(res.data.identity_type),
          identity_type_str: res.data.identity_type_str,
          identity: String(res.data.identity),
          sex: String(res.data.sex),
          phone: res.data.phone,
          cover_image: [{ url: res.data.cover_image }],
          sport_tag: res.data.sport_tag.split(","),
          sport_tag_str: res.data.sport_tag_str,
          level: null,
          level_str: null,
          belong_place_id: String(res.data.belong_place_id),
          belong_place_id_str: res.data.belong_place,
          remark: res.data.remark,
          level_info_json_array: res.data.level_info_json_array
        };
        this.formData = form;
        let field_info = {};
        res.data.fields.map((e) => {
          field_info[`field_${e.field_id}`] = e.value;
        });
        this.otherFormData = field_info;
      });
    },
    // 获取问题
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
          this.otherFormValue = Object.assign(formValue, this.otherFormData);
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
    a: common_vendor.sr("baseInfoFormRef", "e77dc390-1,e77dc390-0"),
    b: common_vendor.p({
      formData: $data.formData
    }),
    c: $data.otherFormOptions.length > 0
  }, $data.otherFormOptions.length > 0 ? {} : {}, {
    d: common_vendor.sr("otherFormRef", "e77dc390-2,e77dc390-0"),
    e: common_vendor.p({
      value: $data.otherFormValue,
      optionList: $data.otherFormOptions,
      rules: $data.otherFormRules
    }),
    f: common_vendor.o($options.handleSubmit),
    g: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    }),
    h: $data.pageHidden ? "hidden" : "visible"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e77dc390"]]);
wx.createPage(MiniProgramPage);
