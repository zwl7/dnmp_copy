"use strict";
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const pages_tabbar_home_pageSet_wzConfig = require("./pageSet/wzConfig.js");
const pages_tabbar_home_pageSet_rcConfig = require("./pageSet/rcConfig.js");
const common_vendor = require("../../../common/vendor.js");
const swipers = () => "./components/swipers/index.js";
const ActivityItem = () => "../../../components/ActivityItem/index.js";
const cardBox = () => "./components/cardBox/index.js";
const activityList = () => "./components/activityList/index.js";
const noticeBar = () => "./components/noticeBar/index.js";
const menus = () => "./components/menus/index.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    ActivityItem,
    swipers,
    activityList,
    cardBox,
    noticeBar,
    menus
  },
  data() {
    return {
      // 临时配置
      config: {},
      componentsConfig: []
    };
  },
  onLoad(options) {
    this.config = this.$store.app.themeType == "1" ? pages_tabbar_home_pageSet_rcConfig.config : pages_tabbar_home_pageSet_wzConfig.config;
    this.componentsConfig = this.objToArr(this.config);
  },
  methods: {
    objToArr(data) {
      let obj = Object.keys(data);
      let m = obj.map((key) => data[key]);
      return m;
    }
  }
};
if (!Array) {
  const _component_swipers = common_vendor.resolveComponent("swipers");
  const _component_menus = common_vendor.resolveComponent("menus");
  const _component_noticeBar = common_vendor.resolveComponent("noticeBar");
  const _component_cardBox = common_vendor.resolveComponent("cardBox");
  const _component_activityList = common_vendor.resolveComponent("activityList");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_swipers + _component_menus + _component_noticeBar + _component_cardBox + _component_activityList + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.componentsConfig, (item, index, i0) => {
      return common_vendor.e({
        a: item.name == "swipers"
      }, item.name == "swipers" ? {
        b: "9cbf8dbe-1-" + i0 + ",9cbf8dbe-0",
        c: common_vendor.p({
          dataConfig: item
        })
      } : {}, {
        d: item.name == "menus"
      }, item.name == "menus" ? {
        e: "9cbf8dbe-2-" + i0 + ",9cbf8dbe-0",
        f: common_vendor.p({
          dataConfig: item
        })
      } : {}, {
        g: item.name == "noticeBar"
      }, item.name == "noticeBar" ? {
        h: "9cbf8dbe-3-" + i0 + ",9cbf8dbe-0",
        i: common_vendor.p({
          dataConfig: item
        })
      } : {}, {
        j: item.name == "cardBox"
      }, item.name == "cardBox" ? {
        k: "9cbf8dbe-4-" + i0 + ",9cbf8dbe-0",
        l: common_vendor.p({
          dataConfig: item
        })
      } : {}, {
        m: item.name == "activityList"
      }, item.name == "activityList" ? {
        n: "9cbf8dbe-5-" + i0 + ",9cbf8dbe-0",
        o: common_vendor.p({
          dataConfig: item
        })
      } : {}, {
        p: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9cbf8dbe"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
