"use strict";
const components_paForm_paFormProps = require("./paFormProps.js");
const common_vendor = require("../../common/vendor.js");
const ImgUpload = () => "../upload/imgs.js";
const _sfc_main = {
  mixins: [components_paForm_paFormProps.props],
  components: {
    ImgUpload
  },
  data() {
    return {
      baseModel: {},
      formRef: "ref" + (/* @__PURE__ */ new Date()).getTime()
    };
  },
  computed: {
    imageBoxStyle() {
      let styleObj = {};
      if (this.inputAlign == "right") {
        styleObj["justify-content"] = "flex-end";
      }
      if (this.inputAlign == "center") {
        styleObj["justify-content"] = "center";
      }
      if (this.inputAlign == "left") {
        styleObj["justify-content"] = "flex-start";
      }
      return styleObj;
    }
  },
  methods: {
    getCellBoxStyle(item) {
      if (item.labelPosition == "top") {
        return {};
      }
      let styleObj = {
        textAlign: this.inputAlign ? this.inputAlign : "right"
      };
      return styleObj;
    },
    getBorderBottom(item) {
      if (Object.hasOwn(item, "borderBottom")) {
        return item.borderBottom;
      }
      return this.borderBottom;
    }
  }
};
if (!Array) {
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  (_easycom_uv_form_item2 + _easycom_uv_form2)();
}
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_form_item + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.optionList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.type === "image"
      }, item.type === "image" ? {
        b: common_vendor.f(item.value, (citem, cindex, i1) => {
          return {
            a: cindex,
            b: cindex,
            c: citem
          };
        }),
        c: common_vendor.s($options.imageBoxStyle)
      } : {
        d: common_vendor.t(item.value)
      }, {
        e: common_vendor.s($options.getCellBoxStyle(item)),
        f: item.prop,
        g: "22d877b0-1-" + i0 + ",22d877b0-0",
        h: common_vendor.p({
          label: item.label,
          labelPosition: item.labelPosition ? item.labelPosition : _ctx.formLabelAlign,
          borderBottom: $options.getBorderBottom(item),
          customStyle: _ctx.formItemCustomStyle,
          labelWidth: _ctx.formItemLabelWidth
        })
      });
    }),
    b: common_vendor.sr($data.formRef, "22d877b0-0"),
    c: $data.formRef,
    d: common_vendor.p({
      labelPosition: _ctx.formLabelPosition,
      labelAlign: _ctx.formLabelAlign,
      labelStyle: _ctx.formLabelStyle,
      labelWidth: _ctx.formLabelWidth,
      errorStyle: _ctx.errorStyle
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22d877b0"]]);
wx.createComponent(Component);
//# sourceMappingURL=paFormDetail.js.map
