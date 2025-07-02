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
const common_vendor = require("../../common/vendor.js");
const TrainApplyForm = () => "../trainApply/form.js";
const _sfc_main = {
  components: {
    TrainApplyForm
  },
  data() {
    return {
      type: 3,
      readonly: true,
      form: {
        name: ""
      }
    };
  },
  onLoad() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      var _a;
      let form = ((_a = this.$store.user.userInfo.instructor_info) == null ? void 0 : _a.rs) || {};
      form = __spreadProps(__spreadValues({}, form), {
        title: `${form.province_str}${form.city_str}${form.county_str}${form.promote_level_str || ""}`,
        avatar: form.avatar_str || form.avatar,
        tagIdsStr: (form.tag_ids_arr || []).map((item) => {
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
      console.log(form);
      this.form = form;
    }
  }
};
if (!Array) {
  const _component_TrainApplyForm = common_vendor.resolveComponent("TrainApplyForm");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_TrainApplyForm + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("trainApplyForm", "74996d59-1,74996d59-0"),
    b: common_vendor.p(__spreadValues({}, {
      formData: $data.form,
      readonly: $data.readonly
    }))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74996d59"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
