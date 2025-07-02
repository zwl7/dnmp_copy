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
const apis_index = require("../../../../apis/index.js");
const common_vendor = require("../../../../common/vendor.js");
const store_app_index = require("../../../../store/app/index.js");
require("../../../../store/user/index.js");
const _sfc_main = {
  name: "HomeNavGrid",
  emits: ["click"],
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    getListData() {
      return __async(this, null, function* () {
        const params = {
          page: 1,
          size: 100,
          code: 1,
          is_enable: 1,
          business_type: 2
        };
        const res = yield apis_index.getWxMenu(params);
        if (res.code !== 200)
          return;
        this.list = (res.data.list || []).map((item) => ({
          id: item.id,
          images: item.logo,
          name: item.title,
          link_url: item.link_url,
          jump_type: item.jump_type,
          out_link_url: item.out_link_url
        }));
        let flag = this.list.findIndex((item) => item.name == "健身指导");
        if (flag != -1) {
          store_app_index.useAppStore().isShowFitness = true;
        }
      });
    },
    clickProject(item) {
      return __async(this, null, function* () {
        this.$jumpPath(item);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.images,
        b: common_vendor.t(item.name),
        c: item.id,
        d: common_vendor.o(($event) => $options.clickProject(item), item.id)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6fb11f60"]]);
wx.createComponent(Component);
