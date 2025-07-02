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
const _sfc_main = {
  name: "BannerSwiper",
  emits: ["click"],
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      return __async(this, null, function* () {
        try {
          const res = yield apis_index.getWxRecommend({});
          if (res.code === 200) {
            this.list = res.data || [];
          }
        } catch (e) {
        }
      });
    },
    onClick(item) {
      this.$emit("click", item);
    },
    onChange(e) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7181268"]]);
wx.createComponent(Component);
