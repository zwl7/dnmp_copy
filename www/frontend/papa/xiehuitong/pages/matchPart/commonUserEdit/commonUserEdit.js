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
const apis_match = require("../../../apis/match.js");
const commonUserBaseForm = () => "../components/commonUserBaseForm.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  components: {
    commonUserBaseForm,
    bottomButton
  },
  data() {
    return {
      member_apply_personnel_id: "",
      memberInfo: {},
      teamType: "",
      loading: false
    };
  },
  computed: {
    isTeamAddUser() {
      return Boolean(this.teamType);
    }
  },
  onLoad(options) {
    this.member_apply_personnel_id = options.member_apply_personnel_id;
    this.teamType = options.teamType;
    this.getMemberInfo(this.member_apply_personnel_id);
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        let baseInfoFormRef = this.$refs["baseInfoFormRef"];
        let valid = yield baseInfoFormRef.validate();
        if (!valid) {
          return;
        }
        let params = __spreadProps(__spreadValues({}, baseInfoFormRef.getData()), {
          member_apply_personnel_id: this.member_apply_personnel_id
        });
        let res = yield apis_match.editMemberApplyPersonnel(params);
        if (res.code != 200) {
          this.$showToastNone(res.message);
          return;
        } else {
          common_vendor.index.showToast({
            icon: "success",
            title: "提交成功"
          });
          if (this.isTeamAddUser) {
            this.sendDataToTeamAdd(res.data);
          }
        }
      });
    },
    sendDataToTeamAdd(data) {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      prevPage.$vm.getAddPageData({ type: this.teamType, data });
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    getMemberInfo(id) {
      return __async(this, null, function* () {
        var _a;
        let res = yield apis_match.getMemberApplyPersonnel({
          member_apply_personnel_id: id
        });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let id_type_map = {
          1: "身份证",
          2: "护照",
          3: "港澳通行证"
        };
        res.data.sex = String(res.data.sex);
        res.data.id_type = String(res.data.id_type);
        res.data.id_type_str = (_a = id_type_map[res.data.id_type]) != null ? _a : "";
        this.memberInfo = res.data;
      });
    }
  }
};
if (!Array) {
  const _component_commonUserBaseForm = common_vendor.resolveComponent("commonUserBaseForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_commonUserBaseForm + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  _easycom_uv_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("baseInfoFormRef", "26052a5e-1,26052a5e-0"),
    b: common_vendor.p({
      value: $data.memberInfo
    }),
    c: common_vendor.o($options.handleSubmit),
    d: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26052a5e"]]);
wx.createPage(MiniProgramPage);
