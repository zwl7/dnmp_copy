"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getItemStyle(item) {
      let styleObj = Object.assign({}, this.customStyle);
      if (item.cover) {
        styleObj["background-image"] = `url(${item.cover})`;
      }
      return styleObj;
    },
    clickItem(item) {
      let path = `/pages/newsList/recommend?type_id=${item.type_id}&title=${item.text}`;
      item.path = path;
      this.$emit("customClick", item);
    },
    handleClickRight() {
      this.$emit("more");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.data, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.s($options.getItemStyle(item)),
        d: index != $props.data.length - 1 ? 1 : "",
        e: common_vendor.o(($event) => $options.clickItem(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-af7a4685"]]);
wx.createComponent(Component);
