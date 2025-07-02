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
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const TrainApplyForm = () => "./form.js";
const paFormDetail = () => "../../components/paForm/paFormDetail.js";
const _sfc_main = {
  components: {
    TrainApplyForm,
    paFormDetail
  },
  data() {
    return {
      rules: index.rules,
      type: 3,
      readonly: false,
      form: {
        name: ""
      },
      field_info: [],
      customFields: [],
      is_fill_instructor_info: 1,
      customFormOptions: []
    };
  },
  onUnload() {
    utils_storages_uniStorage.uniStorage.remove("TrainApplyId");
  },
  onLoad(options) {
    if (options.train_activity_apply_id) {
      this.getDetail(options.train_activity_apply_id);
    }
  },
  methods: {
    isEdit() {
      this.readonly = false;
      this.$refs.trainApplyForm.changeVisible();
    },
    cancelApply() {
    },
    getDetail(id) {
      return __async(this, null, function* () {
        let res = yield this.$api.getWxTrainActivityApplyItem({ train_activity_apply_id: id });
        if (res.code == 200) {
          this.readonly = true;
          let form = res.data;
          form = __spreadProps(__spreadValues({}, form), {
            title: `${form.province_str}${form.city_str}${form.county_str}${form.promote_level_str || ""}`,
            avatar: form.avatar || form.avatar_str,
            tagIdsStr: (form.tag_ids_arr || []).map((item) => {
              return item.tag_id_str;
            }).join(","),
            promoteTagStr: (form.promote_tag_ids_arr || []).map((item) => {
              return item.tag_id_str;
            }).join(","),
            tagGroup: `${form.province_str}/${form.city_str}/${form.county_str}`,
            nationStr: form.nation_str,
            educationLevelStr: form.education_level_str,
            levelStr: form.level_str,
            guide_type: form.guide_type,
            guideTypeStr: form.guide_type_str,
            personnelFormStr: form.personnel_form_str,
            time: form.first_become_time == 0 ? "" : this.$dayjs(form.first_become_time * 1e3).format("YYYY-MM-DD"),
            now_level_organ_unit_name: form.now_level_organ_unit_name,
            now_level_grant_time: form.now_level_grant_time == 0 ? "" : this.$dayjs(form.now_level_grant_time * 1e3).format("YYYY-MM-DD"),
            status_str: form.status_str || this.$dict.getDictLabel("statusColor", form.status, {}),
            areaRangeStr: form.area_range_str
          });
          this.field_info = res.data.field_info;
          yield this.getTrainDetail(res.data.train_activity_id);
          this.customFormOptions = this.formatCustomProblem();
          console.log(this.customFormOptions);
          this.form = form;
        } else {
          this.$toast(res.message);
        }
      });
    },
    getTrainDetail(train_activity_id) {
      return __async(this, null, function* () {
        let res = yield this.$api.getWxTrainActivityItem({ train_activity_id });
        if (res.code == 200) {
          try {
            this.is_fill_instructor_info = res.data.is_fill_instructor_info;
            this.customFields = res.data.fields;
            console.log("🚀 ~ getTrainDetail ~ customFields:", this.customFields);
          } catch (error) {
            console.error("getTrainDetail", error);
          }
        }
      });
    },
    // 格式化自定义问题
    formatCustomProblem() {
      let list = [];
      let answerInfo = {};
      try {
        let field_info = JSON.parse(this.field_info);
        answerInfo = field_info[0];
      } catch (e) {
        console.error("formatCustomProblem", e);
      }
      this.customFields.map((e) => {
        let obj = { label: e.field_name };
        if (e.field_type == 10) {
          obj.type == "image";
        }
        let isFormatArray = answerInfo[e.field_id] instanceof Array && e.field_type != 10;
        if (isFormatArray) {
          answerInfo[e.field_id] = answerInfo[e.field_id].join(",");
        }
        obj["value"] = answerInfo[e.field_id];
        list.push(obj);
      });
      return list;
    },
    submit() {
      return __async(this, null, function* () {
        try {
          yield this.$refs.trainApplyForm.validate().then(() => __async(this, null, function* () {
            var _a;
            this.form = __spreadValues(__spreadValues({}, this.form), this.$refs.trainApplyForm.form);
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
            let form = __spreadProps(__spreadValues({}, this.form), {
              first_become_time: Date.parse(this.form.time) / 1e3 || 0,
              now_level_grant_time: Date.parse(this.form.now_level_grant_time) / 1e3 || 0
            });
            if (((_a = form.fileList) == null ? void 0 : _a.length) > 0) {
              form.avatar = form.fileList[0].url;
            }
            let res = yield this.$api.editWxTrainActivityItem(form);
            if (res.code == 200) {
              yield this.$toast("编辑成功");
              utils_storages_uniStorage.uniStorage.set("updated", true);
              common_vendor.index.navigateBack();
            } else {
              this.$toast(res.message);
            }
          }));
        } catch (error) {
          console.warn("error", error);
        }
      });
    }
  }
};
if (!Array) {
  const _component_TrainApplyForm = common_vendor.resolveComponent("TrainApplyForm");
  const _component_paFormDetail = common_vendor.resolveComponent("paFormDetail");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_TrainApplyForm + _component_paFormDetail + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.form.promote_name),
    b: common_vendor.t($data.form.promoteTagStr),
    c: common_vendor.t($data.form.promote_level_str),
    d: common_vendor.t($data.form.status_str),
    e: common_vendor.t($data.form.notes)
  }, {}, {
    i: $data.is_fill_instructor_info
  }, $data.is_fill_instructor_info ? {
    j: common_vendor.sr("trainApplyForm", "647e1ee8-1,647e1ee8-0"),
    k: common_vendor.p(__spreadValues({}, {
      formData: $data.form,
      readonly: $data.readonly
    }))
  } : {}, {
    l: $data.customFormOptions.length > 0
  }, $data.customFormOptions.length > 0 ? {} : {}, {
    m: common_vendor.p({
      optionList: $data.customFormOptions
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-647e1ee8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
