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
const _sfc_main = {
  name: "uv-grid-item",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$25],
  emits: ["$uvGridItem", "click"],
  data() {
    return {
      parentData: {
        col: 3,
        // 父组件划分的宫格数
        border: true
        // 是否显示边框，根据父组件决定
      },
      classes: []
      // 类名集合，用于判断是否显示右边和下边框
    };
  },
  created() {
    this.updateParentData();
  },
  mounted() {
    this.init();
  },
  computed: {
    // vue下放到computed中，否则会因为延时造成闪烁
    width() {
      return 100 / Number(this.parentData.col) + "%";
    },
    itemStyle() {
      const style = {
        background: this.bgColor,
        width: this.width
      };
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    }
  },
  methods: {
    init() {
      common_vendor.index.$on("$uvGridItem", () => {
        this.gridItemClasses();
      });
      common_vendor.index.$emit("$uvGridItem");
      this.gridItemClasses();
    },
    // 获取父组件的参数
    updateParentData() {
      this.getParentData("uv-grid");
    },
    clickHandler() {
      var _a;
      let name = this.name;
      const children = (_a = this.parent) == null ? void 0 : _a.children;
      if (children && this.name === null) {
        name = children.findIndex((child) => child === this);
      }
      this.parent && this.parent.childClick(name);
      this.$emit("click", name);
    },
    getItemWidth() {
      return __async(this, null, function* () {
        let width = 0;
        if (this.parent) {
          const parentWidth = yield this.getParentWidth();
          width = parentWidth / Number(this.parentData.col) + "px";
        }
        this.width = width;
      });
    },
    // 获取父元素的尺寸
    getParentWidth() {
    },
    gridItemClasses() {
      if (this.parentData.border) {
        let classes = [];
        this.parent.children.map((child, index) => {
          if (this === child) {
            const len = this.parent.children.length;
            if ((index + 1) % this.parentData.col !== 0 && index + 1 !== len) {
              classes.push("uv-border-right");
            }
            const lessNum = len % this.parentData.col === 0 ? this.parentData.col : len % this.parentData.col;
            if (index < len - lessNum) {
              classes.push("uv-border-bottom");
            }
          }
        });
        this.classes = classes;
      }
    }
  },
  unmounted() {
    common_vendor.index.$off("$uvGridItem");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    b: common_vendor.n($data.classes),
    c: common_vendor.s($options.itemStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-199e6b20"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-grid-item.js.map
