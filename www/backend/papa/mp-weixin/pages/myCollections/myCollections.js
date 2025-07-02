"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_common = require("../../apis/common.js");
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
          name: "全部",
          value: "0"
        },
        {
          name: "场馆",
          value: "3"
        },
        {
          name: "赛事活动",
          value: "4"
        },
        {
          name: "体育组织",
          value: "1"
        }
      ],
      type_id: ""
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
      let type_id = this.tab_list[index].value;
      if (type_id == 0) {
        type_id = "";
      }
      this.type_id = type_id;
      this.resetData();
    },
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        type_id: this.type_id
      };
      if (!param.type_id) {
        delete param.type_id;
      }
      this.loading = true;
      let res = await apis_common.getWxCollect(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.forEach((item) => {
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
    toDetail(item) {
      let {
        type_id,
        topic_id
      } = item;
      let url = "";
      switch (type_id) {
        case 4:
          url = "/pages/activityDetail/activityDetail?activity_id=" + topic_id;
          break;
        case 3:
          url = "/pages/stadiumDetail/stadiumDetail?stadium_id=" + topic_id;
          break;
        case 1:
          url = "/pages/associationDetail/associationDetail?site_id=" + topic_id;
          break;
      }
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _component_mytabs = common_vendor.resolveComponent("mytabs");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_mytabs + _easycom_uni_icons2 + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTab),
    b: common_vendor.p({
      list: $data.tab_list,
      current: $data.current,
      ["is-scroll"]: false
    }),
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: item.show_image,
        b: common_vendor.t(item.name),
        c: "82b64c41-1-" + i0,
        d: common_vendor.t(item.address),
        e: "82b64c41-2-" + i0,
        f: common_vendor.t(item.phone === "--" || item.phone === "" ? "暂无联系方式" : item.phone),
        g: index,
        h: common_vendor.o(($event) => $options.toDetail(item), index)
      };
    }),
    d: common_vendor.p({
      type: "location",
      size: "16",
      color: "#909399"
    }),
    e: common_vendor.p({
      type: "phone",
      size: "16",
      color: "#909399"
    }),
    f: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    g: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    h: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82b64c41"], ["__file", "E:/gxm/uniapp-shandong/pages/myCollections/myCollections.vue"]]);
wx.createPage(MiniProgramPage);
