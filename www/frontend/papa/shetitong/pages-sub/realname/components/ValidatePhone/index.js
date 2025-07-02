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
const common_vendor = require("../../../../common/vendor.js");
const api_user_index = require("../../../../api/user/index.js");
const utils_storages_uniStorage = require("../../../../utils/storages/uniStorage.js");
const utils_platform = require("../../../../utils/platform.js");
const _sfc_main = {
  props: {
    handler: {
      type: Function,
      default: () => () => {
      }
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formItemCustomStyle: {
        background: "rgba(246, 248, 252, 1)",
        padding: "24rpx 32rpx",
        borderRadius: "12rpx",
        marginBottom: "24rpx"
      },
      focus: false,
      seconds: 60,
      tips: "",
      formData: {
        phone: "",
        code: ""
      },
      formRules: {
        code: {
          type: "string",
          required: true,
          message: "验证码不能为空",
          trigger: ["blur"]
        }
      }
    };
  },
  computed: {
    userInfo() {
      return this.$store.user.userInfo;
    }
  },
  created() {
    this.formData = __spreadValues(__spreadValues({}, this.formData), this.params);
  },
  mounted() {
    this.$refs.uForm.setRules(this.formRules);
    this.codeStart();
  },
  methods: {
    codeStart() {
      this.focus = true;
      this.$refs.uCodeRef.start();
    },
    handleSubmit() {
      return __async(this, null, function* () {
        if (utils_platform.isMp) {
          this.platFormSubmit();
        } else {
          this.h5Submit();
        }
      });
    },
    h5Submit() {
      return __async(this, null, function* () {
        try {
          yield this.$refs.uForm.validate();
        } catch (error) {
          console.warn("error", error);
          return;
        }
        const params = __spreadProps(__spreadValues({}, this.formData), {
          code: this.formData.code,
          token: utils_storages_uniStorage.uniStorage.get("token")
        });
        this.$loading(true);
        const res = yield api_user_index.codeAuth(params);
        this.$loading(false);
        if (res.code == 200) {
          const codeAuthed = res.data;
          if (codeAuthed) {
            let form = codeAuthed.instructor_info || {};
            this.$store.user.userInfo = __spreadProps(__spreadValues(__spreadValues({}, form), this.$store.user.userInfo), {
              instructor_info: form
            });
            this.$store.user.userInfo.is_authenticate = 1;
            form = __spreadProps(__spreadValues({}, form), {
              avatar: form.avatar_str,
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
              now_level_grant_time: form.now_level_grant_time == 0 ? "" : this.$dayjs(form.now_level_grant_time * 1e3).format("YYYY-MM-DD"),
              status_str: form.status_str || this.$dict.getDictLabel("statusColor", form.status, {}),
              areaRangeStr: form.area_range_str
            });
            this.handler({
              active: 2,
              params: __spreadProps(__spreadValues({}, params), {
                memberInfo: form
              })
            });
          }
        } else {
          common_vendor.index.showModal({
            title: "提示",
            showCancel: false,
            confirmText: "我知道了",
            content: res.message,
            success: (e) => {
              console.log(e);
            }
          });
        }
      });
    },
    platFormSubmit() {
      return __async(this, null, function* () {
        var _a;
        try {
          yield this.$refs.uForm.validate();
        } catch (error) {
          console.warn("error", error);
          return;
        }
        const params = __spreadProps(__spreadValues({}, this.formData), {
          code: this.formData.code,
          token: utils_storages_uniStorage.uniStorage.get("token")
        });
        this.$loading(true);
        const res = yield api_user_index.platformCodeAuth(params);
        this.$loading(false);
        if (res.code == 200) {
          const codeAuthed = res.data;
          if (codeAuthed) {
            this.$store.user.getUserInfo();
            let form = ((_a = codeAuthed.instructor_info) == null ? void 0 : _a.rs) || {};
            form = __spreadProps(__spreadValues({}, form), {
              avatar: form.avatar_str,
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
              now_level_grant_time: form.now_level_grant_time == 0 ? "" : this.$dayjs(form.now_level_grant_time * 1e3).format("YYYY-MM-DD"),
              status_str: form.status_str || this.$dict.getDictLabel("statusColor", form.status, {}),
              areaRangeStr: form.area_range_str
            });
            this.handler({
              active: 2,
              params: __spreadProps(__spreadValues({}, params), {
                memberInfo: form
              })
            });
          }
        } else {
          common_vendor.index.showModal({
            title: "提示",
            showCancel: false,
            confirmText: "我知道了",
            content: res.message,
            success: (e) => {
              console.log(e);
            }
          });
        }
      });
    },
    getCode() {
      return __async(this, null, function* () {
        this.focus = true;
        const params = __spreadValues({}, this.formData);
        yield this.$api.userAuth(params);
        this.$refs.uCodeRef.start();
      });
    },
    codeChange(text) {
      this.tips = text;
    }
  }
};
if (!Array) {
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_code2 = common_vendor.resolveComponent("uv-code");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_form_item2 + _easycom_uv_code2 + _easycom_uv_input2 + _easycom_uv_form2 + _easycom_uv_button2)();
}
const _easycom_uv_form_item = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_code = () => "../../../../node-modules/@climblee/uv-ui/components/uv-code/uv-code.js";
const _easycom_uv_input = () => "../../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_button = () => "../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_form_item + _easycom_uv_code + _easycom_uv_input + _easycom_uv_form + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.formData.phone),
    b: common_vendor.p({
      prop: "phone"
    }),
    c: common_vendor.sr("uCodeRef", "ee947af2-4,ee947af2-3"),
    d: common_vendor.o($options.codeChange),
    e: common_vendor.p({
      seconds: $data.seconds
    }),
    f: common_vendor.t($data.tips),
    g: common_vendor.o((...args) => $options.getCode && $options.getCode(...args)),
    h: common_vendor.o(($event) => $data.formData.code = $event),
    i: common_vendor.p({
      focus: $data.focus,
      border: "none",
      placeholder: "请输入短信验证码",
      modelValue: $data.formData.code
    }),
    j: common_vendor.p({
      prop: "code",
      customStyle: $data.formItemCustomStyle
    }),
    k: common_vendor.sr("uForm", "ee947af2-0"),
    l: common_vendor.p({
      model: $data.formData,
      ["label-width"]: 90,
      ["border-bottom"]: true,
      errorType: "toast",
      ["label-position"]: "left"
    }),
    m: common_vendor.o($options.handleSubmit),
    n: common_vendor.p({
      type: "primary",
      text: "下一步",
      shape: "circle",
      plain: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ee947af2"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
