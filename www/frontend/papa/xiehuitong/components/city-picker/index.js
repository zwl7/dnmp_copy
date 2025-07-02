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
const apis_common = require("../../apis/common.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      loading: true,
      provinces: [],
      //省
      citys: [],
      //市
      areas: [],
      //区
      pickerValue: [0, 0, 0],
      maxDeep: 3
    };
  },
  created() {
    this.getData();
  },
  computed: {
    addressList() {
      if (this.maxDeep == 1) {
        return [this.prototype];
      }
      if (this.maxDeep == 2) {
        return [this.provinces, this.citys];
      }
      return [this.provinces, this.citys, this.areas];
    }
  },
  methods: {
    closed() {
      this.$emit("close");
    },
    open() {
      this.$refs.picker.open();
      this.handlePickValueDefault();
    },
    getData() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        this.maxDeep = this.getMaxDepth(res.data);
        this.provinces = res.data;
        this.handlePickValueDefault();
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
    },
    getMaxDepth(tree) {
      if (!tree || tree.length === 0)
        return 0;
      let maxDepth = 1;
      for (let node of tree) {
        if (node.next && node.next.length > 0) {
          const childDepth = this.getMaxDepth(node.next);
          maxDepth = Math.max(maxDepth, childDepth + 1);
        }
      }
      return maxDepth;
    },
    handlePickValueDefault() {
      var _a, _b;
      this.pickerValue[0] = 0;
      if (this.maxDeep > 1) {
        this.citys = ((_a = this.provinces[0]) == null ? void 0 : _a.next) || [];
      }
      if (this.maxDeep > 2) {
        this.areas = ((_b = this.citys[0]) == null ? void 0 : _b.next) || [];
      }
      this.$refs.picker.setIndexs(
        [this.pickerValue[0], this.pickerValue[1], this.pickerValue[2]],
        true
      );
    },
    change(e) {
      var _a, _b, _c;
      if (this.loading)
        return;
      const { columnIndex, index, indexs } = e;
      if (columnIndex === 0) {
        this.citys = ((_a = this.provinces[index]) == null ? void 0 : _a.next) || [];
        this.areas = ((_b = this.citys[0]) == null ? void 0 : _b.next) || [];
        this.$refs.picker.setIndexs([index, 0, 0], true);
      } else if (columnIndex === 1) {
        this.areas = ((_c = this.citys[index]) == null ? void 0 : _c.next) || [];
        this.$refs.picker.setIndexs(indexs, true);
      }
    },
    confirm(e) {
      console.log("确认选择的地区：", e);
      this.$emit("confirm", e);
    }
  }
};
if (!Array) {
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  _easycom_uv_picker2();
}
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
if (!Math) {
  _easycom_uv_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("picker", "6ce764cd-0"),
    b: common_vendor.o($options.change),
    c: common_vendor.o($options.confirm),
    d: common_vendor.o($options.closed),
    e: common_vendor.p({
      columns: $options.addressList,
      loading: $data.loading,
      keyName: "name"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
