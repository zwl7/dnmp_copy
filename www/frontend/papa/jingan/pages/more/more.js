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
const apis_index = require("../../apis/index.js");
const pages_tabbar_newHome_extend = require("../tabbar/newHome/extend.js");
const navBar = () => "../../components/navBar/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  components: {
    navBar,
    bottomButton
  },
  data() {
    return {
      searchParams: {
        keyword: ""
      },
      marginTop: "",
      searchValue: "",
      page: 1,
      list: pages_tabbar_newHome_extend.showStyleListStatic,
      originValue: ""
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.marginTop = navBarHeight;
    this.getList();
  },
  methods: {
    save() {
      return __async(this, null, function* () {
        let kingkong_ids = [];
        this.list.forEach((item) => {
          if (item.is_select == 1) {
            kingkong_ids.push(item.id);
          }
        });
        if (kingkong_ids.toString() == this.originValue) {
          common_vendor.index.showToast({
            icon: "success",
            title: "保存成功"
          });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          });
        }
        let res = yield apis_index.updateIndexKingkong({
          kingkong_ids: kingkong_ids.toString()
        });
        let { code, message, data } = res;
        if (code == 200) {
          common_vendor.index.showToast({
            icon: "success",
            title: "保存成功"
          });
          setTimeout(() => {
            common_vendor.index.navigateBack({
              delta: 1,
              success() {
                let pages = getCurrentPages();
                pages.forEach((item) => {
                  if (item.route == "pages/tabbar/home/home") {
                    item.$vm.getKingList();
                  }
                });
              }
            });
          }, 2e3);
        } else {
          common_vendor.index.showToast({
            title: message,
            icon: "none"
          });
        }
      });
    },
    changeRadio(item) {
      this.list = this.list.map((e) => {
        let obj = e;
        if (item.name == e.name) {
          obj.is_select = item.is_select == 1 ? 0 : 1;
        }
        return obj;
      });
    },
    getList() {
      return __async(this, null, function* () {
        let res = yield apis_index.getIndexKingkong();
        let { code, message, data } = res;
        if (code == 200) {
          this.list = this.list.map((item) => {
            let obj = item;
            if (Object.prototype.toString.call(data) === "[object Array]") {
              obj.is_select = 1;
            } else {
              this.originValue = data.kingkong_ids;
              data.kingkong_ids.split(",").forEach((id) => {
                if (item.id == id) {
                  obj.is_select = 1;
                }
              });
            }
            return obj;
          });
        } else {
          common_vendor.index.showToast({
            title: message,
            icon: "none"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_sticky2 + _easycom_uv_icon2 + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_sticky + _easycom_uv_icon + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isFixed: false,
      navColor: "#fff",
      title: "更多",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.images,
        b: common_vendor.t(item.name),
        c: item.is_select == 1
      }, item.is_select == 1 ? {
        d: "2d2365fa-3-" + i0 + ",2d2365fa-0",
        e: common_vendor.p({
          name: "checkbox-mark",
          color: "white"
        })
      } : {}, {
        f: common_vendor.o(($event) => $options.changeRadio(item), index),
        g: common_vendor.n({
          "radio-select": item.is_select == 1
        }),
        h: common_vendor.o((...args) => _ctx.handleClick && _ctx.handleClick(...args), index),
        i: index
      });
    }),
    c: common_vendor.o($options.save)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d2365fa"]]);
wx.createPage(MiniProgramPage);
