"use strict";
const common_vendor = require("../common/vendor.js");
let privacyHandler;
let privacyResolves = /* @__PURE__ */ new Set();
let closeOtherPagePopUpHooks = /* @__PURE__ */ new Set();
if (common_vendor.index.onNeedPrivacyAuthorization) {
  common_vendor.index.onNeedPrivacyAuthorization((resolve) => {
    console.log("触发 onNeedPrivacyAuthorization", privacyHandler);
    if (typeof privacyHandler === "function") {
      privacyHandler(resolve);
    }
  });
}
const closeOtherPagePopUp = (closePopUp) => {
  closeOtherPagePopUpHooks.forEach((hook) => {
    if (closePopUp !== hook) {
      hook();
    }
  });
};
const _sfc_main = {
  name: "PrivacyPopup",
  props: {
    color: {
      type: String,
      default: "#f94e47"
    }
  },
  data() {
    return {
      innerShow: false,
      height: 0
    };
  },
  created() {
    const closePopUp = () => {
      this.disPopUp();
    };
    privacyHandler = (resolve) => {
      privacyResolves.add(resolve);
      this.popUp();
      closeOtherPagePopUp(closePopUp);
    };
    this.closePopUp = closePopUp;
    closeOtherPagePopUpHooks.add(this.closePopUp);
  },
  destroyed() {
    closeOtherPagePopUpHooks.delete(this.closePopUp);
  },
  mounted() {
    if (this.closePopUp) {
      privacyHandler = (resolve) => {
        privacyResolves.add(resolve);
        this.popUp();
        closeOtherPagePopUp(this.closePopUp);
      };
    }
  },
  methods: {
    wrapClose() {
    },
    preventEvent() {
    },
    handleAgree(e) {
      this.disPopUp();
      privacyResolves.forEach((resolve) => {
        resolve({
          event: "agree",
          buttonId: "agree-btn"
        });
      });
      privacyResolves.clear();
    },
    handleDisagree(e) {
      this.disPopUp();
      privacyResolves.forEach((resolve) => {
        resolve({
          event: "disagree"
        });
      });
      privacyResolves.clear();
    },
    popUp() {
      if (this.innerShow === false) {
        this.innerShow = true;
      }
    },
    disPopUp() {
      if (this.innerShow === true) {
        this.innerShow = false;
      }
    },
    openPrivacyContract() {
      common_vendor.index.openPrivacyContract({
        success: (res) => {
          console.log("openPrivacyContract success");
        },
        fail: (res) => {
          console.error("openPrivacyContract fail", res);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.innerShow
  }, $data.innerShow ? {
    b: $props.color,
    c: common_vendor.o((...args) => $options.openPrivacyContract && $options.openPrivacyContract(...args)),
    d: common_vendor.o((...args) => $options.handleDisagree && $options.handleDisagree(...args)),
    e: common_vendor.o((...args) => $options.handleAgree && $options.handleAgree(...args)),
    f: common_vendor.o((...args) => $options.preventEvent && $options.preventEvent(...args)),
    g: common_vendor.o((...args) => $options.wrapClose && $options.wrapClose(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7e6cf080"]]);
wx.createComponent(Component);
