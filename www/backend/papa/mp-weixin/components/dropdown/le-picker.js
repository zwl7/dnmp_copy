"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "le-picker",
  props: {
    // 双向绑定
    modelValue: {
      type: Array,
      default: []
    },
    // 展示的列数
    colNum: {
      type: Number,
      default: 1
    },
    // options 数据
    options: {
      type: Array,
      default: []
    },
    // 自定义节点 label、value、children 的字段
    fieldNames: {
      type: Object,
      default: () => {
        return {
          label: "label",
          value: "value",
          children: "children"
        };
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const colList = common_vendor.computed(() => {
      var _a;
      const arr = [];
      let option = props.options;
      for (let i = 0; i < props.colNum; i++) {
        if (props.modelValue[i] != void 0 && option || props.modelValue[i - 1] && option || i === 0 && option) {
          arr.push(funOptions(option));
          const index = option == null ? void 0 : option.findIndex((item) => item[props.fieldNames.value] == props.modelValue[i]);
          option = option[index] && ((_a = option[index]) == null ? void 0 : _a[props.fieldNames.children]) || [];
        }
      }
      return arr;
    });
    const funOptions = (data) => {
      return data.map((item) => {
        return {
          label: item[props.fieldNames.label],
          value: item[props.fieldNames.value],
          children: item[props.fieldNames.children] || []
        };
      });
    };
    const onSelect = (index, item, indexs) => {
      var _a;
      const modelValue = JSON.parse(JSON.stringify(props.modelValue));
      if (modelValue[index] != item.value) {
        modelValue[index] = item.value;
        let option = item[props.fieldNames.children] || [];
        for (let i = index + 1; i < props.colNum; i++) {
          if (option[0]) {
            modelValue[i] = option[0][props.fieldNames.value];
            option = ((_a = option[0]) == null ? void 0 : _a[props.fieldNames.children]) || [];
          } else if (modelValue[i]) {
            modelValue.splice(i, modelValue.length);
          }
        }
      }
      emits("update:modelValue", modelValue);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.colNum, (num, index, i0) => {
          return {
            a: common_vendor.f(common_vendor.unref(colList)[index], (item, indexs, i1) => {
              return {
                a: common_vendor.t(item.label),
                b: common_vendor.n(__props.modelValue[index] == item.value && "picker-view-item-active"),
                c: indexs,
                d: common_vendor.o(($event) => onSelect(index, item), indexs)
              };
            }),
            b: index,
            c: index === 0 ? "#F6F6F6" : "#FFFFFF"
          };
        }),
        b: `${1 / __props.colNum * 100}%`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c828dfb5"], ["__file", "E:/gxm/uniapp-shandong/components/dropdown/le-picker.vue"]]);
wx.createComponent(Component);
