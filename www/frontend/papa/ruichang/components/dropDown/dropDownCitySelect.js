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
const cascadeSelect = () => "./cascadeSelect.js";
const _sfc_main = {
  name: "dropDownCitySelect",
  components: {
    cascadeSelect
  },
  props: {},
  data() {
    return {
      fieldNames: { label: "name", value: "company_area_id", children: "next" },
      areaOptions: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getAreaOption();
  },
  methods: {
    confirm() {
      let data = this.$refs.cascadeSelectRef.getValues();
      this.$emit("confirm", data);
    },
    reset() {
      this.$refs.cascadeSelectRef.reset();
      let data = this.$refs.cascadeSelectRef.getValues();
      this.$emit("reset", data);
    },
    getAreaOption() {
      return __async(this, null, function* () {
        let setting = yield this.$api.getAreaSetting({});
        let params = {
          high_level: setting.data.show_high_level,
          level: setting.data.show_low_level,
          with_up: 0
        };
        const res = yield this.$api.getCompanyAreaByAccount(params);
        this.areaOptions = res.data;
      });
    }
  }
};
if (!Array) {
  const _component_cascadeSelect = common_vendor.resolveComponent("cascadeSelect");
  _component_cascadeSelect();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("cascadeSelectRef", "8522e140-0"),
    b: common_vendor.p({
      options: $data.areaOptions,
      ["field-names"]: $data.fieldNames
    }),
    c: common_vendor.o((...args) => $options.reset && $options.reset(...args)),
    d: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8522e140"]]);
wx.createComponent(Component);
//# sourceMappingURL=dropDownCitySelect.js.map
