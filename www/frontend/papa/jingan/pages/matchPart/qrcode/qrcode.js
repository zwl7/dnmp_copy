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
const apis_match = require("../../../apis/match.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      apply_id: "",
      qrcodeList: []
    };
  },
  computed: {
    showEmpty() {
      return this.qrcodeList.length === 0;
    }
  },
  onLoad(options) {
    this.apply_id = options.apply_id;
    this.getUserApplyDetailInfo(this.apply_id);
  },
  methods: {
    getUserApplyDetailInfo(apply_id) {
      return __async(this, null, function* () {
        let params = { apply_id };
        let res = yield apis_match.getUserApplyInfo(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.qrcodeList = res.data.apply_personnel;
      });
    }
  }
};
if (!Array) {
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_empty + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.qrcodeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.phone),
        c: item.qrcode,
        d: index
      };
    }),
    b: $options.showEmpty
  }, $options.showEmpty ? {
    c: common_vendor.p({
      marginTop: 45
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9095c975"]]);
wx.createPage(MiniProgramPage);
