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
  name: "dropDownProjectSelect",
  components: {
    cascadeSelect
  },
  props: {},
  data() {
    return {
      fieldNames: { label: "name", value: "tag_id", children: "tag_id_arr" },
      areaOptions: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getTagGroupList();
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
    changeCacade(e) {
      console.log(e);
    },
    getTagGroupList() {
      return __async(this, null, function* () {
        const res = yield this.$api.getTagGroupList({
          page: 1,
          size: 1e3,
          type: "social_sports_project_kind",
          is_show_tag_id: 1
        });
        res.data.list.map((e) => {
          e.tag_id = e.tag_group_id;
          e.tag_id_arr = e.tag_id_arr.map((item) => {
            return {
              name: item.tag_id_str,
              tag_id: item.tag_id
            };
          });
        });
        this.areaOptions = res.data.list;
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
    a: common_vendor.sr("cascadeSelectRef", "86d235eb-0"),
    b: common_vendor.o($options.changeCacade),
    c: common_vendor.p({
      options: $data.areaOptions,
      ["field-names"]: $data.fieldNames,
      ["is-full-value"]: true
    }),
    d: common_vendor.o((...args) => $options.reset && $options.reset(...args)),
    e: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86d235eb"]]);
wx.createComponent(Component);
//# sourceMappingURL=dropDownProjectSelect.js.map
