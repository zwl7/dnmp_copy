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
const _sfc_main = {
  name: "menus",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      interval: 3e3,
      duration: 500,
      navHigh: 0,
      menuList: [],
      active: 0
    };
  },
  computed: {
    // 基础菜单
    menus() {
      return this.dataConfig.menuConfig.list || [];
    },
    // 是否多行
    isMany() {
      return this.dataConfig.tabConfig.value === 2 || true;
    },
    // 是否显示标题
    showTitle() {
      return this.dataConfig.showTitle.value === 1;
    },
    // 显示个数  0 3个 1 4个 2 五个
    number() {
      return this.dataConfig.number.value;
    },
    // 显示行数  0 2行 1 3行 2 三行
    rowsNum() {
      return this.dataConfig.rowsNum.value;
    },
    // 指示器
    docConfig() {
      return this.dataConfig.docConfig.value;
    },
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    dotColor() {
      return this.themeConfig["hubei-primary"];
    }
  },
  created() {
  },
  mounted() {
    if (this.rowsNum === 0) {
      if (this.number === 0) {
        this.pageNum(6);
      } else if (this.number === 1) {
        this.pageNum(8);
      } else {
        this.pageNum(10);
      }
    } else if (this.rowsNum === 1) {
      if (this.number === 0) {
        this.pageNum(9);
      } else if (this.number === 1) {
        this.pageNum(12);
      } else {
        this.pageNum(15);
      }
    } else {
      if (this.number === 0) {
        this.pageNum(12);
      } else if (this.number === 1) {
        this.pageNum(16);
      } else {
        this.pageNum(20);
      }
    }
    this.$nextTick(() => {
      if (this.menuList.length && this.isMany) {
        let that = this;
        setTimeout(() => {
          that.menuHeight();
        }, 100);
      }
    });
  },
  methods: {
    bannerfun(e) {
      this.active = e.detail.current;
    },
    menuHeight() {
      let that = this;
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#nav0").boundingClientRect((data) => {
        console.log(data.height);
        that.navHigh = data.height;
      }).exec();
    },
    pageNum(num) {
      let count = Math.ceil(this.menus.length / num);
      let goodArray = new Array();
      for (let i = 0; i < count; i++) {
        let list = this.menus.slice(i * num, i * num + num);
        if (list.length)
          goodArray.push({
            list
          });
      }
      this.$set(this, "menuList", goodArray);
    },
    menusTap(item) {
      if (item.value === "/pages-sub/realname/index") {
        this.handleAuth();
        return;
      }
      this.$jumpToPath(item.value);
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.isMany
  }, $options.isMany ? common_vendor.e({
    b: common_vendor.f($data.menuList, (item, indexw, i0) => {
      return {
        a: common_vendor.f(item.list, (itemn, indexn, i1) => {
          return common_vendor.e({
            a: itemn.img
          }, $options.showTitle ? {
            b: common_vendor.t(itemn.title)
          } : {}, {
            c: indexn,
            d: common_vendor.o(($event) => $options.menusTap(itemn), indexn)
          });
        }),
        b: "nav" + indexw,
        c: indexw
      };
    }),
    c: $options.showTitle,
    d: common_vendor.n($options.number === 1 ? "four" : $options.number === 2 ? "five" : ""),
    e: $data.interval,
    f: $data.duration,
    g: common_vendor.s("height:" + $data.navHigh + "px;"),
    h: common_vendor.o((...args) => $options.bannerfun && $options.bannerfun(...args)),
    i: $options.docConfig < 2
  }, $options.docConfig < 2 ? {
    j: common_vendor.f($data.menuList, (item, index, i0) => {
      return {
        a: common_vendor.s($data.active == index ? "background:" + $options.dotColor : ""),
        b: index
      };
    }),
    k: $options.docConfig === 0 ? 1 : "",
    l: $options.docConfig === 1 ? 1 : ""
  } : {}) : {
    m: common_vendor.f($options.menus, (item, index, i0) => {
      return common_vendor.e({
        a: item.img
      }, $options.showTitle ? {
        b: common_vendor.t(item.value)
      } : {}, {
        c: common_vendor.o(($event) => $options.menusTap(item), index),
        d: index
      });
    }),
    n: $options.showTitle
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9cb79776"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
