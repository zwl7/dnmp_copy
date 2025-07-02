"use strict";
const props = {
  props: {
    optionList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      }
    },
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // form label的位置
    formLabelPosition: {
      type: String,
      default: "left"
    },
    formLabelAlign: {
      type: String,
      default: "left"
    },
    errorStyle: {
      type: Object,
      default: () => {
        return {
          display: "block",
          textAlign: "right"
        };
      }
    },
    formLabelStyle: {
      type: Object,
      default: () => {
        return {
          color: "#606266",
          fontSize: "28rpx"
        };
      }
    },
    formLabelWidth: {
      type: [String, Number],
      default: 90
    },
    // formItem样式
    formItemCustomStyle: {
      type: Object,
      default: () => {
        return {
          padding: "14px 0"
        };
      }
    },
    // formItem样式
    formItemLabelWidth: {
      type: [String, Number],
      default: 90
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    // input输入框位置
    inputAlign: {
      type: String,
      default: "left"
    },
    // radioGroup checkbox 默认靠右
    radioGroupCustomStyle: {
      type: Object,
      default: () => {
        return {
          // 'justify-content': 'flex-end',
        };
      }
    }
  }
};
exports.props = props;
