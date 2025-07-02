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
const apis_sportTalent = require("../../../apis/sportTalent.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const navBar = () => "../../../components/navBar.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins, core_shareMixins.shareMixins],
  components: { navBar },
  data() {
    return {
      load_finish: false,
      navColor: "transparent",
      list: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    clickProject(item) {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        let url = `/pages/talentApprovePart/applyForm/applyForm?type_id=${item.type_id}&name=${item.name}注册/认证`;
        common_vendor.index.navigateTo({
          url
        });
      });
    },
    getData() {
      return __async(this, null, function* () {
        let params = { page: 1, size: 1e3, is_show: 1, status: 1 };
        let res = yield apis_sportTalent.getSportTalentTypeList(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        res.data.list.map((e) => {
          e.imgUrl = this.getThemeIcon("talent_entry_2");
        });
        this.list = res.data.list;
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: _ctx.getThemeIcon("talent_entry_bg"),
    c: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.name),
        c: item.name,
        d: common_vendor.o(($event) => $options.clickProject(item), item.name)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6a7ab17"]]);
wx.createPage(MiniProgramPage);
