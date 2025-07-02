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
  name: "uv-picker",
  emits: ["confirm", "cancel", "close", "change"],
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$11],
  computed: {
    // 为了解决支付宝不生效
    textStyle() {
      return (index, index1) => {
        const style = {};
        style.display = "block";
        if (this.color) {
          style.color = this.color;
        }
        if (this.activeColor && index1 === this.innerIndex[index]) {
          style.color = this.activeColor;
        }
        return style;
      };
    }
  },
  data() {
    return {
      // 上一次选择的列索引
      lastIndex: [],
      // 索引值 ，对应picker-view的value
      innerIndex: [],
      // 各列的值
      innerColumns: [],
      // 上一次的变化列索引
      columnIndex: 0
    };
  },
  watch: {
    // 监听默认索引的变化，重新设置对应的值
    defaultIndex: {
      immediate: true,
      handler(n) {
        this.setIndexs(n, true);
      }
    },
    // 监听columns参数的变化
    columns: {
      deep: true,
      immediate: true,
      handler(n) {
        this.setColumns(n);
      }
    }
  },
  methods: {
    open() {
      this.$refs.pickerPopup.open();
    },
    close() {
      this.$refs.pickerPopup.close();
    },
    popupChange(e) {
      if (!e.show)
        this.$emit("close");
    },
    // 获取item需要显示的文字，判别为对象还是文本
    getItemText(item) {
      if (this.$uv.test.object(item)) {
        return item[this.keyName];
      } else {
        return item;
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      this.$emit("cancel");
      this.close();
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("confirm", this.$uv.deepClone({
        indexs: this.innerIndex,
        value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
        values: this.innerColumns
      }));
      if (this.closeOnClickConfirm) {
        this.close();
      }
    },
    // 选择器某一列的数据发生变化时触发
    changeHandler(e) {
      const {
        value
      } = e.detail;
      let index = 0, columnIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (this.lastIndex[i] || 0)) {
          columnIndex = i;
          index = item;
          break;
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      this.setLastIndex(value);
      this.setIndexs(value);
      this.$emit("change", {
        value: this.innerColumns.map((item, index2) => item[value[index2]]),
        index,
        indexs: value,
        // values为当前变化列的数组内容
        values,
        columnIndex
      });
    },
    // 设置index索引，此方法可被外部调用设置
    setIndexs(index, setLastIndex) {
      this.innerIndex = this.$uv.deepClone(index);
      if (setLastIndex) {
        this.setLastIndex(index);
      }
    },
    // 记录上一次的各列索引位置
    setLastIndex(index) {
      this.lastIndex = this.$uv.deepClone(index);
    },
    // 设置对应列选项的所有值
    setColumnValues(columnIndex, values) {
      this.innerColumns.splice(columnIndex, 1, values);
      let tmpIndex = this.$uv.deepClone(this.innerIndex);
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      this.setIndexs(tmpIndex);
    },
    // 获取对应列的所有选项
    getColumnValues(columnIndex) {
      (() => __async(this, null, function* () {
        yield this.$uv.sleep();
      }))();
      return this.innerColumns[columnIndex];
    },
    // 设置整体各列的columns的值
    setColumns(columns) {
      this.innerColumns = this.$uv.deepClone(columns);
      if (this.innerIndex.length === 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    // 获取各列选中值对应的索引
    getIndexs() {
      return this.innerIndex;
    },
    // 获取各列选中的值
    getValues() {
      (() => __async(this, null, function* () {
        yield this.$uv.sleep();
      }))();
      return this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
    }
  }
};
if (!Array) {
  const _easycom_uv_toolbar2 = common_vendor.resolveComponent("uv-toolbar");
  const _easycom_uv_loading_icon2 = common_vendor.resolveComponent("uv-loading-icon");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_toolbar2 + _easycom_uv_loading_icon2 + _easycom_uv_popup2)();
}
const _easycom_uv_toolbar = () => "../uv-toolbar/uv-toolbar.js";
const _easycom_uv_loading_icon = () => "../uv-loading-icon/uv-loading-icon.js";
const _easycom_uv_popup = () => "../uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_toolbar + _easycom_uv_loading_icon + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.showToolbar
  }, _ctx.showToolbar ? {
    b: common_vendor.o($options.cancel),
    c: common_vendor.o($options.confirm),
    d: common_vendor.p({
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      title: _ctx.title
    })
  } : {}, {
    e: common_vendor.f($data.innerColumns, (item, index, i0) => {
      return common_vendor.e({
        a: _ctx.$uv.test.array(item)
      }, _ctx.$uv.test.array(item) ? {
        b: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: common_vendor.t($options.getItemText(item1)),
            b: index1,
            c: common_vendor.s({
              height: _ctx.$uv.addUnit(_ctx.itemHeight),
              lineHeight: _ctx.$uv.addUnit(_ctx.itemHeight),
              fontWeight: index1 === $data.innerIndex[index] ? "bold" : "normal"
            }),
            d: common_vendor.s($options.textStyle(index, index1))
          };
        })
      } : {}, {
        c: index
      });
    }),
    f: `height: ${_ctx.$uv.addUnit(_ctx.itemHeight)}`,
    g: $data.innerIndex,
    h: _ctx.immediateChange,
    i: `${_ctx.$uv.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`,
    j: common_vendor.o((...args) => $options.changeHandler && $options.changeHandler(...args)),
    k: _ctx.loading
  }, _ctx.loading ? {
    l: common_vendor.p({
      mode: "circle"
    })
  } : {}, {
    m: common_vendor.sr("pickerPopup", "1e823f87-0"),
    n: common_vendor.o($options.popupChange),
    o: common_vendor.p({
      mode: "bottom",
      round: _ctx.round,
      ["close-on-click-overlay"]: _ctx.closeOnClickOverlay
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e823f87"]]);
wx.createComponent(Component);
