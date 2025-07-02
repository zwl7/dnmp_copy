"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "searchItem",
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    handle() {
      let { news_id, stadium_id, site_id, activity_id } = this.info;
      let path = "";
      if (news_id) {
        path = "/pages/newsDetail/newsDetail?news_id=" + news_id;
      }
      if (stadium_id) {
        path = "/pages/stadiumDetail/stadiumDetail?stadium_id=" + stadium_id;
      }
      if (activity_id) {
        path = "/pages/activityDetail/activityDetail?activity_id=" + activity_id;
      }
      if (site_id) {
        path = "/pages/siteDetail/siteDetail?site_id=" + site_id;
      }
      if (!path) {
        return;
      }
      common_vendor.index.navigateTo({
        url: path
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.info.showImage,
    b: common_vendor.t($props.info.name),
    c: common_vendor.o((...args) => $options.handle && $options.handle(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a424d41f"]]);
wx.createComponent(Component);
