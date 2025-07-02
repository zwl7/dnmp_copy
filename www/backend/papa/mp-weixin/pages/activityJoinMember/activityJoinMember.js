"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_activity = require("../../apis/activity.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  mixins: [core_listMixins.listMixins],
  data() {
    return {
      activity_id: "",
      detail: {}
    };
  },
  onLoad(options) {
    this.activity_id = options.activity_id;
    this.getList();
  },
  onReachBottom() {
    this.loadMore();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.$nextTick(() => {
      this.getList(true);
    });
  },
  methods: {
    async getList(refresh) {
      const param = {
        activity_id: this.activity_id,
        status: "1,5"
      };
      this.loading = true;
      let res = await apis_activity.getApplicantNoPage(param);
      if (res.code === 200) {
        this.list = res.data;
        this.loading = false;
        this.finished = true;
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.list.length > 0
  }, _ctx.list.length > 0 ? {
    b: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-canyuqingkuang",
      size: "20",
      color: "#C0C4CC"
    }),
    c: common_vendor.t(_ctx.list.length)
  } : {}, {
    d: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: item.member_avatar || item.avatar_url,
        b: common_vendor.t(item.member_nick_name || item.name),
        c: index
      };
    }),
    e: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    g: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4f0f3e50"], ["__file", "E:/gxm/uniapp-shandong/pages/activityJoinMember/activityJoinMember.vue"]]);
wx.createPage(MiniProgramPage);
