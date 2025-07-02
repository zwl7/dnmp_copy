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
const common_vendor = require("../../../common/vendor.js");
const apis_match = require("../../../apis/match.js");
const core_listMixins = require("../../../core/listMixins.js");
const navBar = () => "../../../components/navBar.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins],
  components: {
    navBar
  },
  data() {
    return {
      contest_id: "",
      title: ""
    };
  },
  computed: {
    topImgList() {
      return this.list.length > 0 ? [this.list[0]] : [];
    }
  },
  onUnload() {
  },
  onLoad(options) {
    if (options.contest_id) {
      this.contest_id = options.contest_id;
    }
    this.title = options.title;
    this.getList();
  },
  methods: {
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 20,
          contest_id: this.contest_id
        };
        this.loading = true;
        let res = yield apis_match.getEventsWxcontestmiendetailList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      return list.map((e) => e.file_url);
    },
    handleClick(index) {
      common_vendor.index.previewImage({
        urls: this.list,
        current: index
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "赛事风采",
      titleColor: "#333",
      backColor: "#333",
      showBack: true
    }),
    b: _ctx.list.length > 0
  }, _ctx.list.length > 0 ? {
    c: common_vendor.f($options.topImgList, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.o(($event) => _ctx.previewImage(item), index),
        c: index
      };
    }),
    d: common_vendor.t($data.title)
  } : {}, {
    e: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: item,
        b: item,
        c: common_vendor.o(($event) => $options.handleClick(index), item)
      };
    }),
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    g: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    h: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-acaecc86"]]);
wx.createPage(MiniProgramPage);
