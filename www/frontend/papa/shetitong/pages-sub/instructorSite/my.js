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
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const api_instructorSite_index = require("../../api/instructorSite/index.js");
const instructorSiteItem = () => "../../components/InstructorSiteItem/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  components: {
    instructorSiteItem,
    bottomButton
  },
  data() {
    return {
      recordData: [],
      list1: [
        {
          value: 0,
          name: "我加入的"
        },
        {
          value: 1,
          name: "我收藏的"
        }
      ],
      pickTab: 0
    };
  },
  computed: {
    showType() {
      return this.pickTab == 0 ? "check" : "normal";
    },
    activitedColor() {
      return this.$store.app.themeConfig["hubei-primary"];
    }
  },
  onUnload() {
    utils_storages_uniStorage.uniStorage.remove("updated");
  },
  onShow() {
    let refresh = utils_storages_uniStorage.uniStorage.get("updated");
    if (refresh) {
      this.queryList(1, 10);
    }
  },
  methods: {
    getColorStyle(type, status) {
      return this.$dict.getDictLabel("statusColor", status, { labelKey: type });
    },
    handleStatus(item) {
      var _a;
      this.pickTab = item.value;
      this.recordData = [];
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(this.recordData);
      this.queryList(1, 10);
    },
    queryList(pageNo = 1, pageSize = 10) {
      return __async(this, null, function* () {
        var _a;
        common_vendor.index.showLoading({
          title: "加载中",
          mask: true
        });
        let params = {
          page: pageNo,
          size: pageSize,
          list_type: this.pickTab == 0 ? "2" : "3"
        };
        let status = this.pickTab;
        if (status != 0 && status) {
          params.status = status;
        }
        let res = yield api_instructorSite_index.getInstructorSiteList(params);
        if (res.code == 200) {
          let data = res.data.list;
          this.recordData = data;
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(this.recordData);
        } else {
          this.$toast(res.message);
        }
        common_vendor.index.hideLoading();
      });
    },
    joinSite() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/instructorSite/select"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_instructorSiteItem = common_vendor.resolveComponent("instructorSiteItem");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _component_instructorSiteItem + _component_bottomButton + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleStatus),
    b: common_vendor.p({
      list: $data.list1,
      scrollable: false,
      lineColor: $options.activitedColor
    }),
    c: common_vendor.f($data.recordData, (item, index, i0) => {
      return {
        a: common_vendor.o($options.queryList, index),
        b: "2c2def86-3-" + i0 + ",2c2def86-1",
        c: common_vendor.p({
          info: item,
          ["show-type"]: $options.showType
        }),
        d: index
      };
    }),
    d: $data.pickTab === 0
  }, $data.pickTab === 0 ? {
    e: common_vendor.o($options.joinSite),
    f: common_vendor.p({
      type: "primary"
    })
  } : {}, {
    g: common_vendor.sr("pagingRef", "2c2def86-1,2c2def86-0"),
    h: common_vendor.o($options.queryList),
    i: common_vendor.o(($event) => $data.recordData = $event),
    j: common_vendor.p({
      ["auto-height"]: true,
      ["empty-view-text"]: "暂无内容",
      ["empty-view-img"]: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无内容.png",
      ["empty-view-img-style"]: {
        width: "160px",
        height: "160px"
      },
      modelValue: $data.recordData
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c2def86"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=my.js.map
