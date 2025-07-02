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
const DEFAULT_FIELDS = { label: "name", value: "tag_id", children: "tag_id_arr" };
getApp();
const _sfc_main = {
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    fieldNames: {
      type: Object,
      default: () => DEFAULT_FIELDS
    },
    defaultSelected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isFullValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      baseOptions: [],
      wrapContent: [],
      values: [],
      pathData: [],
      selectItem: [],
      maxDepth: 0
    };
  },
  computed: {
    labelKey() {
      return this.fieldNames.label || DEFAULT_FIELDS.label;
    },
    valueKey() {
      return this.fieldNames.value || DEFAULT_FIELDS.value;
    },
    childrenKey() {
      return this.fieldNames.children || DEFAULT_FIELDS.children;
    },
    itemStyle() {
      if (this.maxDepth == 3) {
        return {
          "max-width": "33%"
        };
      } else {
        return {};
      }
    }
  },
  watch: {
    options(n) {
      this.baseOptions = n;
      if (n) {
        this.maxDepth = this.getMaxDepth(n, this.childrenKey);
        this.initDefaultSelected();
      }
    }
  },
  created() {
  },
  mounted() {
    return __async(this, null, function* () {
    });
  },
  methods: {
    reset() {
      this.initDefaultSelected();
      this.values = [];
      this.pathData = [];
      this.$emit("change", { values: this.values, data: this.pathData });
    },
    getValues() {
      return { values: this.values, data: this.pathData };
    },
    initDefaultSelected(idx = 0) {
      let formatList = [this.baseOptions];
      let firstChildren = this.baseOptions;
      while (formatList.length < this.maxDepth) {
        let list = [];
        firstChildren.map((v, i) => {
          var _a;
          if (this.defaultSelected.includes(v[this.valueKey]) && ((_a = v[this.childrenKey]) == null ? void 0 : _a.length)) {
            list = v[this.childrenKey];
          }
        });
        if (list.length == 0) {
          list = firstChildren[0][this.childrenKey];
        }
        firstChildren = list;
        formatList.push(list);
      }
      this.wrapContent = formatList;
      this.values = [...this.defaultSelected];
    },
    itemClick(wrapIdx, i) {
      let currentKey = this.wrapContent[wrapIdx][i][this.valueKey];
      let pathListData = this.findPath(this.baseOptions, currentKey);
      let valueList = pathListData.map((e) => e[this.valueKey]);
      this.values = valueList;
      this.pathData = pathListData;
      let children = this.wrapContent[wrapIdx][i][this.childrenKey];
      if (children == null ? void 0 : children.length) {
        this.wrapContent[++wrapIdx] = children;
        if (this.isFullValue) {
          this.$nextTick(() => {
            this.itemClick(wrapIdx, 0);
          });
        }
      } else {
        if (++wrapIdx < this.maxDepth) {
          this.wrapContent[wrapIdx] = [];
        }
      }
      this.$nextTick(() => {
        this.$emit("change", { values: this.values, data: pathListData });
      });
    },
    //   递归查找路径
    findPath(treeData, targetId) {
      for (let node of treeData) {
        if (node[this.valueKey] === targetId) {
          return [node];
        }
        if (node[this.childrenKey] && node[this.childrenKey].length > 0) {
          let path = this.findPath(node[this.childrenKey], targetId);
          if (path) {
            return [node, ...path];
          }
        }
      }
      return null;
    },
    //   递归获取最大深度
    getMaxDepth(arr, valueKey = "children") {
      if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
      }
      let maxDepth = 0;
      for (let item of arr) {
        if (item && Array.isArray(item[valueKey])) {
          maxDepth = Math.max(maxDepth, this.getMaxDepth(item[valueKey], valueKey));
        }
      }
      return maxDepth + 1;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.wrapContent, (wrapItem, wrapIdx, i0) => {
      return {
        a: common_vendor.f(wrapItem, (item, i, i1) => {
          return common_vendor.e({
            a: common_vendor.t(item[$options.labelKey]),
            b: item[$options.valueKey] == $data.values[wrapIdx]
          }, item[$options.valueKey] == $data.values[wrapIdx] ? {
            c: "9d49307b-0-" + i0 + "-" + i1,
            d: common_vendor.p({
              type: "checkmarkempty",
              size: "14"
            })
          } : {}, {
            e: common_vendor.n({
              active: item[$options.valueKey] === $data.values[wrapIdx]
            }),
            f: i,
            g: common_vendor.o(($event) => $options.itemClick(wrapIdx, i), i)
          });
        }),
        b: wrapIdx,
        c: common_vendor.n({
          "first-line": wrapIdx == 0
        })
      };
    }),
    b: common_vendor.s($options.itemStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9d49307b"]]);
wx.createComponent(Component);
//# sourceMappingURL=cascadeSelect.js.map
