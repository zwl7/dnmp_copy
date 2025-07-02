"use strict";
const common_vendor = require("../../../common/vendor.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    info: {
      type: Object,
      default: () => {
      }
    },
    showButton: {
      type: Boolean,
      default: true
    },
    showApplyStatusTag: {
      type: Boolean,
      default: true
    },
    showApplyTime: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    info: {
      handler(val, oldval) {
        if (val && val != oldval) {
          this.showInfo = this.formatData(val);
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      showInfo: {
        banner: "",
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
      background: "#4cd964"
    };
  },
  computed: {
    showUserAvatar() {
      return false;
    },
    showProcress() {
      return this.showInfo.project_limit != this.showInfo.apply_number;
    },
    showAll() {
      return this.showInfo.apply_number !== 0 && this.showInfo.project_limit === this.showInfo.apply_number;
    },
    percent() {
      return this.showInfo.apply_number / this.showInfo.project_limit * 100;
    },
    avatarList() {
      return [];
    },
    buttonStr() {
      if (this.showInfo.apply_status == 2) {
        return "去报名";
      } else {
        return this.showInfo.apply_status_str;
      }
    },
    buttonDiaabled() {
      return this.showInfo.apply_status != 2;
    }
  },
  methods: {
    formatData(data) {
      let obj = {
        banner: data.banner ? data.banner : this.defaultImgUrl,
        name: data.name,
        address: data.address,
        applyTimeStr: data.applyTimeStr ? data.applyTimeStr : this.filterTime(data.apply_start_str, data.apply_end_str),
        matchTimeStr: data.matchTimeStr ? data.matchTimeStr : this.filterTime(data.date_start_str, data.date_start_str),
        tagList: data.tagList ? data.tagList : [data.kind_str, data.project_name],
        latitude: data.latitude,
        longitude: data.longitude,
        apply_number: data.apply_number,
        project_limit: data.project_limit,
        apply_status_str: data.apply_status_str,
        apply_status: data.apply_status,
        project_id: data.project_id,
        contest_id: data.contest_id,
        type: data.type
      };
      return obj;
    },
    filterTime(timeStart, timeEnd) {
      return `${timeStart} 至 ${timeEnd}`;
    },
    handleClick() {
      this.$emit("customClick", this.info);
    },
    getBg(tag) {
      return this.$dict.getDictLabel("matchApplyColorList", tag, {
        labelKey: "color"
      }) || "#9f9fa0";
    },
    toApply(item) {
      common_vendor.index.navigateTo({
        url: `/pages/matchPart/detail/detail?contest_id=${this.showInfo.contest_id}`
      });
    }
  }
};
if (!Array) {
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  (_component_pa_tag + _easycom_uv_icon2 + _easycom_uv_line_progress2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_line_progress = () => "../../../node-modules/@climblee/uv-ui/components/uv-line-progress/uv-line-progress.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_line_progress)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showApplyStatusTag
  }, $props.showApplyStatusTag ? {
    b: common_vendor.t($data.showInfo.apply_status_str),
    c: $options.getBg($data.showInfo.apply_status)
  } : {}, {
    d: $data.showInfo.banner,
    e: common_vendor.t($data.showInfo.name),
    f: common_vendor.f($data.showInfo.tagList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: "83b17afd-0-" + i0
      };
    }),
    g: $props.showApplyTime
  }, $props.showApplyTime ? {
    h: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    i: common_vendor.t($data.showInfo.applyTimeStr)
  } : {}, {
    j: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    k: common_vendor.t($data.showInfo.matchTimeStr),
    l: $data.showInfo.address
  }, $data.showInfo.address ? {
    m: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    n: common_vendor.t($data.showInfo.address)
  } : {}, {
    o: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    p: $props.showButton
  }, $props.showButton ? common_vendor.e({
    q: $options.showUserAvatar
  }, $options.showUserAvatar ? {
    r: common_vendor.f($options.avatarList, (item, k0, i0) => {
      return {
        a: item,
        b: item
      };
    })
  } : {}, {
    s: $options.showProcress
  }, $options.showProcress ? {
    t: common_vendor.p({
      percentage: $options.percent,
      height: "6",
      activeColor: _ctx.themePrimaryColorGetter,
      showText: false
    }),
    v: common_vendor.t($data.showInfo.apply_number),
    w: common_vendor.t($data.showInfo.project_limit !== 0 ? $data.showInfo.project_limit : "无上限")
  } : {}, {
    x: $options.showAll
  }, $options.showAll ? {} : {}, {
    y: common_vendor.t($options.buttonStr),
    z: common_vendor.o(($event) => $options.toApply(_ctx.item)),
    A: $options.buttonDiaabled
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83b17afd"]]);
wx.createComponent(Component);
