"use strict";
const uni_modules_wuUiTools_libs_mixin_mpMixin = require("../../../../uni_modules/wu-ui-tools/libs/mixin/mpMixin.js");
const uni_modules_wuUiTools_libs_mixin_mixin = require("../../../../uni_modules/wu-ui-tools/libs/mixin/mixin.js");
const components_wuCalendar_components_wuCalendarBlock_props = require("./props.js");
const common_vendor = require("../../../../common/vendor.js");
const components_wuCalendar_components_i18n_index = require("../i18n/index.js");
const wuCalendarItem = () => "../wu-calendar-item/wu-calendar-item.js";
common_vendor.initVueI18n(components_wuCalendar_components_i18n_index.i18nMessages);
const _sfc_main = {
  emits: ["change"],
  mixins: [uni_modules_wuUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_wuUiTools_libs_mixin_mixin.mixin, components_wuCalendar_components_wuCalendarBlock_props.props],
  components: {
    wuCalendarItem
  },
  data() {
    return {
      FoldShowMonth: false
    };
  },
  mounted() {
    this.FoldShowMonth = this.FoldStatus == "open";
  },
  watch: {
    FoldStatus(newVal) {
      this.$nextTick(() => {
        this.FoldShowMonth = this.FoldStatus == "open";
      });
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
if (!Array) {
  const _component_wu_calendar_item = common_vendor.resolveComponent("wu-calendar-item");
  _component_wu_calendar_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.showMonth && $data.FoldShowMonth
  }, _ctx.showMonth && $data.FoldShowMonth ? {
    b: common_vendor.t(_ctx.month)
  } : {}, {
    c: common_vendor.f(_ctx.weeks, (item, weekIndex, i0) => {
      return {
        a: common_vendor.f(item, (weeks, weeksIndex, i1) => {
          return {
            a: common_vendor.o($options.choiceDate, weeksIndex),
            b: "c13df703-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              weeks,
              calendar: _ctx.calendar,
              selected: _ctx.selected,
              lunar: _ctx.lunar,
              color: _ctx.color,
              startText: _ctx.startText,
              endText: _ctx.endText
            }),
            d: weeksIndex
          };
        }),
        b: weekIndex
      };
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c13df703"]]);
wx.createComponent(Component);
