"use strict";
const common_vendor = require("../../../common/vendor.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const instructor = () => "../../instructor/index2.js";
const indexSite = () => "../../instructorSite/index2.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    instructor,
    indexSite
  },
  name: "index",
  data() {
    return {};
  },
  computed: {
    themeType() {
      return this.$store.app.themeType;
    }
  },
  onLoad() {
    let titleMap = {
      SkyBlue: "指导员",
      EcologicalGreen: "站点"
    };
    common_vendor.index.setNavigationBarTitle({
      title: titleMap[this.themeType] || ""
    });
  },
  methods: {}
};
if (!Array) {
  const _component_instructor = common_vendor.resolveComponent("instructor");
  const _component_indexSite = common_vendor.resolveComponent("indexSite");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_instructor + _component_indexSite + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.themeType == "SkyBlue"
  }, $options.themeType == "SkyBlue" ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5ab5f878"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
