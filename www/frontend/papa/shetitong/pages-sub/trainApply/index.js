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
const common_vendor = require("../../common/vendor.js");
const index = require("../../index3.js");
const common_assets = require("../../common/assets.js");
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const components_paForm_formatData = require("../../components/paForm/formatData.js");
const TrainApplyForm = () => "./form.js";
const paForm = () => "../../components/paForm/paForm.js";
const _sfc_main = {
  components: {
    TrainApplyForm,
    paForm
  },
  data() {
    return {
      rules: index.rules,
      readonly: false,
      trainApply: common_assets.trainApply,
      form: {},
      is_fill_instructor_info: 1,
      field_info: [],
      otherFormValue: {},
      otherFormOptions: [],
      otherFormRules: {}
    };
  },
  onLoad(options) {
    let form = utils_storages_uniStorage.uniStorage.get("APPLYFORM");
    console.log("----form", form);
    this.form.title = form.title;
    this.form.train_activity_id = form.trainId;
    if (form.train_activity_id) {
      this.getDetail(form.train_activity_id);
    }
    if (options.id) {
      this.getTrainDetail(options.id);
    }
  },
  methods: {
    getDetail(id) {
      return __async(this, null, function* () {
        let res = yield this.$api.getVoluntaryActivityItem({ train_activity_id: id });
        if (res.code == 200) {
          this.readonly = true;
          this.form = res.data;
        }
      });
    },
    getTrainDetail(id) {
      return __async(this, null, function* () {
        let res = yield this.$api.getWxTrainActivityItem({ train_activity_id: id });
        if (res.code == 200) {
          this.is_fill_instructor_info = res.data.is_fill_instructor_info;
          try {
            let { fields, field_info } = res.data;
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
          } catch (error) {
            console.warn("error", error);
          }
        }
      });
    },
    submit() {
      return __async(this, null, function* () {
        var _a;
        try {
          let baseValidate = false;
          let form = {};
          if (this.is_fill_instructor_info == 1) {
            baseValidate = yield this.$refs.formItem.validate();
            this.form = __spreadValues(__spreadValues({}, this.form), this.$refs.formItem.form);
            let result = [];
            Object.keys(this.rules).forEach((key) => {
              if (!this.form[key]) {
                result.push(this.rules[key]);
              }
            });
            if (result.length > 0) {
              this.$toast(result[0].message);
              return;
            }
            form = __spreadProps(__spreadValues({}, this.form), {
              first_become_time: Date.parse(this.form.time) / 1e3 || 0,
              now_level_grant_time: Date.parse(this.form.now_level_grant_time) / 1e3 || 0
            });
            if (((_a = form.fileList) == null ? void 0 : _a.length) > 0) {
              form.avatar = form.fileList[0].url;
            }
          } else {
            form.train_activity_id = this.form.train_activity_id;
          }
          let otherFormRef = this.$refs["otherFormRef"];
          let flag = yield otherFormRef.validate();
          let customData = otherFormRef.getCustomData();
          if (!baseValidate && this.is_fill_instructor_info == 1 || !flag) {
            return;
          }
          form.field_info = JSON.stringify([customData]);
          form.id && delete form.id;
          let res = yield this.$api.addWxTrainActivityItem(form);
          if (res.code == 200) {
            yield this.$toast("报名成功");
            common_vendor.index.redirectTo({ url: "/pages-sub/applyResult/success?type=train&title=报名成功" });
          } else {
            this.$toast(res.message);
          }
        } catch (error) {
          console.warn("error", error);
        }
      });
    }
  }
};
if (!Array) {
  const _component_TrainApplyForm = common_vendor.resolveComponent("TrainApplyForm");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_TrainApplyForm + _easycom_paForm2 + _easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../components/paForm/paForm.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_paForm + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.form.title),
    b: $data.trainApply,
    c: $data.is_fill_instructor_info
  }, $data.is_fill_instructor_info ? {
    d: common_vendor.sr("formItem", "b29364b4-1,b29364b4-0"),
    e: common_vendor.p(__spreadValues({}, {
      formData: $data.form,
      readonly: $data.readonly
    }))
  } : {}, {
    f: $data.otherFormOptions.length
  }, $data.otherFormOptions.length ? {} : {}, {
    g: common_vendor.sr("otherFormRef", "b29364b4-2,b29364b4-0"),
    h: common_vendor.p({
      value: $data.otherFormValue,
      optionList: $data.otherFormOptions,
      rules: $data.otherFormRules
    }),
    i: common_vendor.o($options.submit),
    j: common_vendor.p({
      type: "primary",
      text: "提交",
      shape: "circle",
      size: "medium"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b29364b4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
