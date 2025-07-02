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
const common_vendor = require("../../../../common/vendor.js");
const TrainApplyForm = () => "../../../trainApply/form.js";
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
  components: {
    TrainApplyForm
  },
  data() {
    return {
      form: {},
      readonly: true
    };
  },
  created() {
    this.form = this.params.memberInfo;
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        common_vendor.index.redirectTo({
          url: "/pages-sub/releaseDynamic/index"
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_TrainApplyForm = common_vendor.resolveComponent("TrainApplyForm");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_icon2 + _component_TrainApplyForm + _easycom_uv_button2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "checkmark-circle-fill",
      color: "#07c160",
      size: "80rpx"
    }),
    b: common_vendor.sr("trainApplyForm", "381bdc7b-1"),
    c: common_vendor.p(__spreadValues({}, {
      formData: $props.params.memberInfo,
      readonly: $data.readonly
    })),
    d: common_vendor.o($options.handleSubmit),
    e: common_vendor.p({
      type: "primary",
      text: "发布活动",
      shape: "circle",
      size: "medium"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-381bdc7b"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
