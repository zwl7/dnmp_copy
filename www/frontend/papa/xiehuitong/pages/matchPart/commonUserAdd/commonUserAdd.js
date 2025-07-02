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
const core_themeMixins = require("../../../core/themeMixins.js");
const commonUserBaseForm = () => "../components/commonUserBaseForm.js";
const ceilLine = () => "../components/ceilLine.js";
const commonUserSelectDialog = () => "../components/commonUserSelectDialog.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  components: {
    commonUserBaseForm,
    bottomButton,
    ceilLine,
    commonUserSelectDialog
  },
  data() {
    return {
      type_id: "",
      loading: false,
      teamType: "",
      memberInfo: {}
    };
  },
  computed: {
    headerTitleCustomStyle() {
      return {
        color: this.themePrimaryColorGetter
      };
    },
    isTeamAddUser() {
      return Boolean(this.teamType);
    },
    headerCustomStyleGetter() {
      return {
        background: `${this.themeConfigGetter["--hubei-card-bg2"]}`,
        borderRadius: "16rpx"
      };
    }
  },
  onLoad(options) {
    this.teamType = options.teamType;
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        let baseInfoFormRef = this.$refs["baseInfoFormRef"];
        let valid = yield baseInfoFormRef.validate();
        if (!valid) {
          return;
        }
        let params = __spreadValues({}, baseInfoFormRef.getData());
        let res = yield apis_match.addMemberApplyPersonnel(params);
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
          } else {
            common_vendor.index.navigateBack();
          }
        }
      });
    },
    sendDataToTeamAdd(data) {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      console.log(prevPage);
      prevPage.$vm.getAddPageData({ type: this.teamType, data });
      common_vendor.index.navigateBack();
    },
    handleShowSelectUser() {
      this.$refs["commonUserSelectDialogRef"].open();
    },
    getCommonUsrData(data) {
      this.memberInfo = data;
      this.sendDataToTeamAdd(data);
    }
  }
};
if (!Array) {
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  const _component_commonUserBaseForm = common_vendor.resolveComponent("commonUserBaseForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_commonUserSelectDialog = common_vendor.resolveComponent("commonUserSelectDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ceilLine + _component_commonUserBaseForm + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_commonUserSelectDialog + _component_layout_default_uni)();
}
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  _easycom_uv_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.isTeamAddUser
  }, $options.isTeamAddUser ? {
    b: common_vendor.o($options.handleShowSelectUser),
    c: common_vendor.p({
      title: "从常用报名人中选择",
      ["is-group"]: true,
      customStyle: $options.headerCustomStyleGetter,
      titleStyle: $options.headerTitleCustomStyle
    })
  } : {}, {
    d: common_vendor.sr("baseInfoFormRef", "9b36e5e9-2,9b36e5e9-0"),
    e: common_vendor.p({
      value: $data.memberInfo
    }),
    f: common_vendor.o($options.handleSubmit),
    g: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    }),
    h: common_vendor.sr("commonUserSelectDialogRef", "9b36e5e9-5,9b36e5e9-0"),
    i: common_vendor.o($options.getCommonUsrData)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b36e5e9"]]);
wx.createPage(MiniProgramPage);
