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
const store_user_index = require("../../../../store/user/index.js");
const CardType = () => "./CardType.js";
const _sfc_main = {
  components: {
    CardType
  },
  data() {
    return {
      titleInfo: {
        title: "社体指导员专区",
        num: "",
        unit: "",
        color: "#495064",
        arwColor: "#fff"
      },
      list: [
        {
          name: "指导员认证",
          bgImg: "https://cdn-static.papa.com.cn/social/instru-verify.png",
          className: "verify",
          path: "/pages-sub/realname/detail"
        },
        {
          name: "服务风采发布",
          bgImg: "https://cdn-static.papa.com.cn/social/instru-style.png",
          className: "style",
          path: "/pages-sub/releaseDynamic/index"
        },
        {
          name: "我的服务",
          bgImg: "https://cdn-static.papa.com.cn/social/instru-service.png",
          className: "service",
          path: "/pagesSub/sportsService/serviceAssign/talenList"
        }
      ]
    };
  },
  computed: {
    isAuthInstructor() {
      return store_user_index.useUserStore().isAuthInstructor;
    }
  },
  onLoad(options) {
  },
  methods: {
    handleClick() {
      if (!this.isAuthInstructor) {
        common_vendor.index.showModal({
          title: "提示",
          content: "您还未认证社体指导员，请先认证",
          success: (res) => {
            if (res.confirm) {
              common_vendor.index.navigateTo({ url: "/pages-sub/realname/index" });
            }
          }
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages-sub/instructorRegion/index"
      });
    },
    handleClickItem(item) {
      return __async(this, null, function* () {
        if (!this.isAuthInstructor) {
          common_vendor.index.showModal({
            title: "提示",
            content: "您还未认证社体指导员，请先认证",
            success: (res) => {
              if (res.confirm) {
                common_vendor.index.navigateTo({ url: "/pages-sub/realname/index" });
              }
            }
          });
          return;
        }
        common_vendor.index.navigateTo({ url: item.path });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_CardType = common_vendor.resolveComponent("CardType");
  (_easycom_uv_icon2 + _component_CardType)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "arrow-right",
      color: "#fff"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.bgImg,
        b: common_vendor.n(item.className),
        c: common_vendor.t(item.name),
        d: index,
        e: common_vendor.o(($event) => $options.handleClickItem(item), index)
      };
    }),
    c: common_vendor.o($options.handleClick),
    d: common_vendor.p({
      bg: "https://cdn-static.papa.com.cn/social/home-bg4.png",
      titleInfo: $data.titleInfo,
      showTitle: false
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6884b696"]]);
wx.createComponent(Component);
//# sourceMappingURL=InstructorRegion.js.map
