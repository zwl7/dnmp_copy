"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_activity = require("../../apis/activity.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const mytabs = () => "../../components/tabs/mytabs.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins],
  components: {
    mytabs
  },
  data() {
    return {
      current: "0",
      tab_list: [
        {
          name: "全部活动",
          value: "0"
        },
        {
          name: "报名中",
          value: "1"
        },
        {
          name: "未开始",
          value: "2"
        },
        {
          name: "进行中",
          value: "3"
        },
        {
          name: "已结束",
          value: "4"
        }
      ]
    };
  },
  onLoad(options) {
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
    changeTab(index) {
      console.log("当前选中的项：" + index);
      this.current = index;
      this.tab_type = this.tab_list[index].value;
      this.resetData();
    },
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        status: this.current
      };
      this.loading = true;
      let res = await apis_activity.getWxActivityMy(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.forEach((item) => {
          var _a, _b;
          let start_time = (_a = item.start_time) == null ? void 0 : _a.replace(/\-/g, "/");
          let end_time = (_b = item.end_time) == null ? void 0 : _b.replace(/\-/g, "/");
          item.start_time = this.transDate2CN(start_time);
          item.end_time = this.transDate2CN(end_time);
          item.show_image = item.images_url[0];
        });
        this.list = this.list.concat(res.data.list);
        this.count = res.data.count;
        this.loading = false;
        if (res.data.list.length === 0) {
          this.finished = true;
        }
        if (!this.finished) {
          this.$isFullScreen().then((fres) => {
            let {
              windowHeight,
              scrollHeight
            } = fres;
            if (windowHeight + 70 >= scrollHeight) {
              _this.loadMore();
            }
          });
        }
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    },
    transDate2CN(dateStr) {
      const d = new Date(dateStr);
      return d.getMonth() + 1 + "月" + d.getDate() + "日";
    },
    goSignUpDetail(applicant_id) {
      common_vendor.index.navigateTo({
        url: "/pages/signUpDetail/signUpDetail?applicant_id=" + applicant_id
      });
    }
  }
};
if (!Array) {
  const _component_mytabs = common_vendor.resolveComponent("mytabs");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_mytabs + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTab),
    b: common_vendor.p({
      list: $data.tab_list,
      current: $data.current
    }),
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: item.show_image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.start_time),
        d: common_vendor.t(item.end_time),
        e: common_vendor.t(item.address),
        f: common_vendor.o(($event) => $options.goSignUpDetail(item.applicant_id), index),
        g: index
      };
    }),
    d: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    e: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-05f3499f"], ["__file", "E:/gxm/uniapp-shandong/pages/myRegistration/myRegistration.vue"]]);
wx.createPage(MiniProgramPage);
