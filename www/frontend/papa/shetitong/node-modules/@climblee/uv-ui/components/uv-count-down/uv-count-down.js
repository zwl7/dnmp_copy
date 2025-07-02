"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-count-down",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$21],
  data() {
    return {
      timer: null,
      // 各单位(天，时，分等)剩余时间
      timeData: common_vendor.parseTimeData(0),
      // 格式化后的时间，如"03:23:21"
      formattedTime: "0",
      // 倒计时是否正在进行中
      runing: false,
      endTime: 0,
      // 结束的毫秒时间戳
      remainTime: 0
      // 剩余的毫秒时间
    };
  },
  watch: {
    time(n) {
      this.reset();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.reset();
    },
    // 开始倒计时
    start() {
      if (this.runing)
        return;
      this.runing = true;
      this.endTime = Date.now() + this.remainTime;
      this.toTick();
    },
    // 根据是否展示毫秒，执行不同操作函数
    toTick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    macroTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        const remain = this.getRemainTime();
        if (!common_vendor.isSameSecond(remain, this.remainTime) || remain === 0) {
          this.setRemainTime(remain);
        }
        if (this.remainTime !== 0) {
          this.macroTick();
        }
      }, 30);
    },
    microTick() {
      this.clearTimeout();
      this.timer = setTimeout(() => {
        this.setRemainTime(this.getRemainTime());
        if (this.remainTime !== 0) {
          this.microTick();
        }
      }, 50);
    },
    // 获取剩余的时间
    getRemainTime() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    // 设置剩余的时间
    setRemainTime(remain) {
      this.remainTime = remain;
      const timeData = common_vendor.parseTimeData(remain);
      this.$emit("change", timeData);
      this.formattedTime = common_vendor.parseFormat(this.format, timeData);
      if (remain <= 0) {
        this.pause();
        this.$emit("finish");
      }
    },
    // 重置倒计时
    reset() {
      this.pause();
      this.remainTime = this.time;
      this.setRemainTime(this.remainTime);
      if (this.autoStart) {
        this.start();
      }
    },
    // 暂停倒计时
    pause() {
      this.runing = false;
      this.clearTimeout();
    },
    // 清空定时器
    clearTimeout() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  unmounted() {
    this.clearTimeout();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.formattedTime),
    b: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f58c3da5"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-count-down.js.map
