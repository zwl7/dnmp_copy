"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-code",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$30],
  data() {
    return {
      secNum: this.seconds,
      timer: null,
      canGetCode: true
      // 是否可以执行验证码操作
    };
  },
  mounted() {
    this.checkKeepRunning();
  },
  watch: {
    seconds: {
      immediate: true,
      handler(n) {
        this.secNum = n;
      }
    }
  },
  methods: {
    checkKeepRunning() {
      let lastTimestamp = Number(common_vendor.index.getStorageSync(this.uniqueKey + "_$uCountDownTimestamp"));
      if (!lastTimestamp)
        return this.changeEvent(this.startText);
      let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
      if (this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
        this.secNum = lastTimestamp - nowTimestamp;
        common_vendor.index.removeStorageSync(this.uniqueKey + "_$uCountDownTimestamp");
        this.start();
      } else {
        this.changeEvent(this.startText);
      }
    },
    // 开始倒计时
    start() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.$emit("start");
      this.canGetCode = false;
      this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
      this.timer = setInterval(() => {
        if (--this.secNum) {
          this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.changeEvent(this.endText);
          this.secNum = this.seconds;
          this.$emit("end");
          this.canGetCode = true;
        }
      }, 1e3);
      this.setTimeToStorage();
    },
    // 重置，可以让用户再次获取验证码
    reset() {
      this.canGetCode = true;
      clearInterval(this.timer);
      this.secNum = this.seconds;
      this.changeEvent(this.endText);
    },
    changeEvent(text) {
      this.$emit("change", text);
    },
    // 保存时间戳，为了防止倒计时尚未结束，H5刷新或者各端的右上角返回上一页再进来
    setTimeToStorage() {
      if (!this.keepRunning || !this.timer)
        return;
      if (this.secNum > 0 && this.secNum <= this.seconds) {
        let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
        common_vendor.index.setStorage({
          key: this.uniqueKey + "_$uCountDownTimestamp",
          data: nowTimestamp + Number(this.secNum)
        });
      }
    }
  },
  // 组件销毁，兼容vue3
  unmounted() {
    this.setTimeToStorage();
    clearTimeout(this.timer);
    this.timer = null;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-code.js.map
