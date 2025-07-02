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
const common_vendor = require("../../../../common/vendor.js");
const apis_common = require("../../../../apis/common.js");
require("../../../../apis/sportsService/javaRequest.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const pcCarousel = () => "./pc-carousel.js";
const _sfc_main = {
  name: "OrganizationSection",
  emits: ["tab", "click", "more"],
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    // customSwiper,
    pcCarousel
    // cutomCardSwiper,
    // elCarousel,
    // elCarouselItem,
  },
  data() {
    return {
      tabs: [
        {
          key: "tab1",
          label: "协会"
        },
        {
          key: "tab2",
          label: "俱乐部"
        },
        {
          key: "tab3",
          label: "其他组织"
        }
      ],
      activeTab: "",
      list: []
    };
  },
  computed: {
    textColor() {
      return this.themeConfigGetter["--hubei-tabbar-font-active-color"];
    }
  },
  mounted() {
    this.list = [
      {
        id: 1,
        image: "/static/newHome/tab-train-act.png",
        title: "健身气功协会1"
      },
      {
        id: 2,
        image: "/static/newHome/tab-train-act.png",
        title: "健身气功协会2"
      },
      {
        id: 3,
        image: "/static/newHome/tab-train-act.png",
        title: "健身气功协会3"
      }
      // {
      //   id: 4,
      //   image: '/static/newHome/tab-train-act.png',
      //   title: '健身气功协会4',
      // },
      // {
      //   id: 5,
      //   image: '/static/newHome/tab-train-act.png',
      //   title: '健身气功协会5',
      // },
    ], this.fetchTabs();
  },
  methods: {
    fetchTabs() {
      return __async(this, null, function* () {
        try {
          const res = yield apis_common.getSportsOrganizationType({ page: 1, size: 1e3, status: 1 });
          if (res.data && res.data.list) {
            this.tabs = res.data.list.map((e) => ({ label: e.name, value: e.type_id }));
            this.activeTab = this.tabs.length ? this.tabs[0].value : "";
            this.fetchList();
          }
        } catch (e) {
        }
      });
    },
    fetchList() {
      return __async(this, null, function* () {
        try {
          const res = yield apis_common.getWxSiteList({ page: 1, size: 20, site_type: this.activeTab, type_id: 8 });
          if (res.code === 200) {
            this.list = res.data.list;
          }
        } catch (e) {
        }
      });
    },
    changeTab(tab) {
      this.activeTab = tab.value;
      this.fetchList();
      this.$emit("tab", tab);
    },
    toListPage() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/platform/sportsOrg/index"
      });
    },
    toDetail(info) {
      console.log(info);
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/sportsOrg/detail?site_id=${info.site_id}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_pcCarousel = common_vendor.resolveComponent("pcCarousel");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_icon2 + _component_pcCarousel + _component_empty)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      size: "16px",
      name: "arrow-right",
      color: $options.textColor
    }),
    b: common_vendor.o((...args) => $options.toListPage && $options.toListPage(...args)),
    c: common_vendor.f($data.tabs, (tab, k0, i0) => {
      return {
        a: common_vendor.t(tab.label || tab.name),
        b: tab.value,
        c: common_vendor.n(tab.value === $data.activeTab ? "active" : ""),
        d: common_vendor.o(($event) => $options.changeTab(tab), tab.value)
      };
    }),
    d: $data.list.length
  }, $data.list.length ? {
    e: common_vendor.o($options.toDetail),
    f: common_vendor.p({
      mode: "single",
      sourceList: $data.list
    })
  } : {}, {
    g: $data.list.length === 0
  }, $data.list.length === 0 ? {
    h: common_vendor.p({
      marginTop: 0
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7933a4f4"]]);
wx.createComponent(Component);
