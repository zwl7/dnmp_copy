"use strict";
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const tabs = () => "../../../../components/tabs/index.js";
const groupDataItem = () => "./groupDataItem.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  components: {
    tabs,
    groupDataItem
  },
  props: {
    info: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  watch: {
    info: {
      handler(val, oldval) {
        if (val && val != oldval) {
          this.formatData(val);
        }
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      sportsListTab: [],
      // 项目组别
      sportsListBase: [],
      //项目原始数据
      currentTabId: 0
    };
  },
  computed: {
    smallProjectList() {
      let obj = this.sportsListBase.find((item) => item.group_id == this.currentTabId);
      return obj ? obj.small_project : [];
    }
  },
  methods: {
    // 格式化数据
    formatData(data) {
      let _sportsList = [];
      data.forEach((item) => {
        const obj = {
          name: item.name,
          value: item.group_id
        };
        _sportsList.push(obj);
      });
      this.currentTabId = _sportsList.length > 0 ? _sportsList[0].value : 0;
      this.sportsListTab = _sportsList;
      this.sportsListBase = data;
    },
    formatSmallProjectData(obj) {
    },
    //切换tab
    changeTab(e) {
      this.currentTabId = e.value;
      this.$nextTick(() => {
        console.log(this.smallProjectList);
      });
    }
  }
};
if (!Array) {
  const _component_tabs = common_vendor.resolveComponent("tabs");
  const _component_groupDataItem = common_vendor.resolveComponent("groupDataItem");
  (_component_tabs + _component_groupDataItem)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.getThemeIcon("match_group_bg"),
    b: _ctx.getThemeIcon("join_icon"),
    c: common_vendor.o($options.changeTab),
    d: common_vendor.p({
      list: $data.sportsListTab
    }),
    e: common_vendor.f($options.smallProjectList, (item, index, i0) => {
      return {
        a: "c45f03bf-1-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c45f03bf"]]);
wx.createComponent(Component);
