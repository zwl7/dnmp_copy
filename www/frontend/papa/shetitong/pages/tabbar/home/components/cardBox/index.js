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
const common_vendor = require("../../../../../common/vendor.js");
const utils_storages_uniStorage = require("../../../../../utils/storages/uniStorage.js");
const cardHeader = () => "./cardHeader.js";
const _sfc_main = {
  name: "CardBox",
  components: {
    cardHeader
  },
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    modules() {
      return this.dataConfig.cardBoxList || [];
    },
    containerClass() {
      const length = this.modules.length;
      if (length === 1)
        return "single-column";
      if (length === 2)
        return "two-columns";
      if (length === 3)
        return "three-modules-layout";
      return "card-box-container";
    },
    headerShow() {
      return this.dataConfig.headerShow.value == 1;
    },
    headerImageUrl() {
      return this.dataConfig.headerLogoConfig.url;
    }
  },
  methods: {
    getStyle(item, type) {
      if (type == "backgroundImage") {
        return {
          backgroundImage: `url(${item.backgroundImage})`
        };
      }
      if (type == "titleColor") {
        return {
          color: item.titleColor
        };
      }
      if (type == "tipColor") {
        return {
          color: item.tipColor
        };
      }
    },
    // 临时方法
    jumpToPath(item) {
      if (item.value === "/pages-sub/realname/index") {
        this.handleAuth();
        return;
      }
      this.$jumpToPath(item.value);
    },
    handleToInstructor() {
      common_vendor.index.switchTab({
        url: "/pages/instructor/index"
      });
    },
    handleToNotice() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/notice/index"
      });
    },
    handleAuth() {
      return __async(this, null, function* () {
        if (!utils_storages_uniStorage.uniStorage.get("is_login")) {
          try {
            yield this.$dialog("您还未登录,去登录?", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消"
            });
          } catch (error) {
            console.log(error);
            return;
          }
          common_vendor.index.navigateTo({
            url: "/pages/login/index"
          });
          return;
        }
        if (this.$store.user.userInfo.is_auth_instructor == 1) {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/detail"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/index"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_cardHeader = common_vendor.resolveComponent("cardHeader");
  _component_cardHeader();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.headerShow
  }, $options.headerShow ? {
    b: common_vendor.p({
      imageUrl: $options.headerImageUrl
    })
  } : {}, {
    c: common_vendor.f($options.modules, (module2, index, i0) => {
      return {
        a: common_vendor.t(module2.title),
        b: common_vendor.s($options.getStyle(module2, "titleColor")),
        c: common_vendor.t(module2.tip),
        d: common_vendor.s($options.getStyle(module2, "tipColor")),
        e: index,
        f: common_vendor.n(module2.class),
        g: `url(${module2.backgroundImage})`,
        h: common_vendor.o(($event) => $options.jumpToPath(module2), index)
      };
    }),
    d: common_vendor.n($options.containerClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b2708bc"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
