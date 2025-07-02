"use strict";
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
const apis_index = require("../../apis/index.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../mixins/themeMixins.js");
const navBar = () => "../../components/navBar/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    bottomButton
  },
  data() {
    return {
      navColor: "transparent",
      feedBackInfo: {
        des: ""
      },
      rules: {
        des: {
          type: "string",
          required: true,
          message: "请输入建议",
          trigger: ["blur", "change"]
        }
      },
      loading: false
    };
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#cae8fe";
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    confirm() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        if (!this.feedBackInfo.des) {
          common_vendor.index.showToast({
            icon: "none",
            title: "请填写内容"
          });
          return;
        }
        this.loading = true;
        let res = yield apis_index.AddProblemInfo({
          type: 1,
          des: this.feedBackInfo.des
        });
        if (res.code == 200) {
          common_vendor.index.showToast({
            title: "反馈成功"
          });
          setTimeout(() => {
            this.loading = false;
            common_vendor.index.navigateBack();
          }, 1e3);
        } else {
          this.loading = false;
          common_vendor.index.showToast({
            icon: "none",
            title: res.message
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_textarea2 + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_uv_textarea = () => "../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_safe_bottom = () => "../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_textarea + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "意见反馈",
      titleColor: "#333",
      backColor: "#333",
      showBack: true
    }),
    b: _ctx.getThemeIcon("edit_bg"),
    c: common_vendor.o(($event) => $data.feedBackInfo.des = $event),
    d: common_vendor.p({
      placeholder: "请输入建议",
      count: true,
      maxlength: "200",
      autoHeight: true,
      border: "none",
      modelValue: $data.feedBackInfo.des
    }),
    e: common_vendor.o($options.confirm),
    f: common_vendor.p({
      customStyle: {
        height: "96rpx",
        "font-size": "32rpx",
        "font-weight": 600
      },
      loading: $data.loading
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
