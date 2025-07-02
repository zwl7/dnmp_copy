"use strict";
const common_vendor = require("../../../../common/vendor.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    info: {
      handler(val, oldval) {
        if (val && val != oldval) {
          this.showInfo = this.formatData(val);
          this.time = this.getCountdownTime(val);
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    showMapIcon() {
      return this.showInfo.latitude && this.showInfo.longitude;
    }
  },
  data() {
    return {
      dotsStyles: {},
      showInfo: {
        banner: [],
        name: "",
        address: "",
        applyTimeStr: "",
        matchTimeStr: "",
        tagList: [],
        latitude: "",
        longitude: "",
        apply_number: 0,
        project_limit: 0
      },
      timeData: {},
      time: 0
    };
  },
  methods: {
    // 格式化数据
    formatData(data) {
      let obj = {
        banner: [data.banner ? data.banner : this.defaultImgUrl],
        name: data.name,
        address: data.address,
        applyTimeStr: this.filterTime(data.apply_start_str, data.apply_end_str),
        matchTimeStr: this.filterTime(data.date_start_str, data.date_end_str),
        tagList: [data.committee_name, data.project_name].filter((e) => e),
        latitude: data.latitude,
        longitude: data.longitude,
        apply_number: data.apply_number,
        project_limit: data.project_limit
      };
      return obj;
    },
    filterTime(timeStart, timeEnd) {
      return `${timeStart} 至 ${timeEnd}`;
    },
    // 倒计时时间
    getCountdownTime(data) {
      let result = 0;
      if (data.apply_end_str !== "") {
        const endTimeStamp = data.apply_end * 1e3;
        const startTimeStamp = (/* @__PURE__ */ new Date()).getTime();
        result = endTimeStamp > startTimeStamp ? endTimeStamp - Math.ceil(startTimeStamp) : 0;
      } else {
        result = (/* @__PURE__ */ new Date()).getTime();
      }
      return Math.ceil(result);
    },
    onChangeTime(e) {
      this.timeData = e;
    },
    // 打开地图
    toLocation() {
      this.$toLocation(this.showInfo);
    },
    jumpToMatchFc() {
      common_vendor.index.navigateTo({
        url: `/pages/matchPart/mien/mien?contest_id=${this.info.contest_id}&title=${this.info.name}`
      });
    },
    jumpToMatchCj() {
      common_vendor.index.navigateTo({
        url: `/pages/matchPart/score/score?contest_id=${this.info.contest_id}&title=${this.info.name}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_count_down2 = common_vendor.resolveComponent("uv-count-down");
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uv_count_down2 + _component_pa_tag + _easycom_uni_icons2)();
}
const _easycom_uv_count_down = () => "../../../../node-modules/@climblee/uv-ui/components/uv-count-down/uv-count-down.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uv_count_down + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.showInfo.banner, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: $data.dotsStyles,
    c: common_vendor.t($data.timeData.days),
    d: common_vendor.t($data.timeData.hours > 10 ? $data.timeData.hours : $data.timeData.hours),
    e: common_vendor.t($data.timeData.minutes),
    f: common_vendor.t($data.timeData.seconds),
    g: common_vendor.o($options.onChangeTime),
    h: common_vendor.p({
      time: $data.time,
      format: "DD:HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    i: common_vendor.t($data.showInfo.name),
    j: common_vendor.f($data.showInfo.tagList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: "a2b9c46f-1-" + i0
      };
    }),
    k: common_vendor.t($data.showInfo.apply_number),
    l: common_vendor.t($data.showInfo.project_limit),
    m: common_vendor.t($data.showInfo.applyTimeStr),
    n: common_vendor.t($data.showInfo.matchTimeStr),
    o: common_vendor.t($data.showInfo.address),
    p: $options.showMapIcon
  }, $options.showMapIcon ? {
    q: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-locationfill",
      size: "20",
      color: _ctx.themePrimaryColorGetter
    })
  } : {}, {
    r: common_vendor.o((...args) => $options.toLocation && $options.toLocation(...args)),
    s: common_assets._imports_0$6,
    t: common_vendor.o((...args) => $options.jumpToMatchFc && $options.jumpToMatchFc(...args)),
    v: common_assets._imports_1$2,
    w: common_vendor.o((...args) => $options.jumpToMatchCj && $options.jumpToMatchCj(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2b9c46f"]]);
wx.createComponent(Component);
