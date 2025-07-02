"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../../common/vendor.js");
const mixins_listMixins = require("../../mixins/listMixins.js");
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const listSearch = () => "../../components/listSearch.js";
const dropDown = () => "../../components/dropDown/index.js";
const ApplyItem = () => "./components/ApplyItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins],
  components: {
    listSearch,
    dropDown,
    ApplyItem
  },
  data() {
    return {
      searchForm: {},
      customStyle: {
        backgroundColor: "transparent"
      },
      options: {
        level: {
          label: "活动等级",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "省级",
              value: 1
            },
            {
              label: "州市级",
              value: 2
            },
            {
              label: "区县及以下",
              value: 3
            },
            {
              label: "国家级和跨省赛事活动",
              value: 4
            }
          ]
        }
      },
      searchParams: {},
      info: {
        status: "process"
      }
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    getList(refresh) {
      return __async(this, null, function* () {
        const param = {
          page: this.page,
          size: 10
        };
        this.loading = true;
        let res = yield apis_jxBidEvent.getWxEventApplyList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleSearch(e) {
      this.searchForm = { name: e };
      this.resetData();
    },
    toApplyDetail(info) {
      const { event_plan_id, event_plan_apply_id } = info;
      common_vendor.index.navigateTo({
        url: `/pages/bidEventDetail/bidEventDetail?event_plan_id=${event_plan_id}&event_plan_apply_id=${event_plan_apply_id}`
      });
    }
  }
};
if (!Array) {
  const _component_ApplyItem = common_vendor.resolveComponent("ApplyItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ApplyItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toApplyDetail(item), index),
        b: "ddbcb2b8-1-" + i0 + ",ddbcb2b8-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    b: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    c: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    d: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    e: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ddbcb2b8"]]);
wx.createPage(MiniProgramPage);
