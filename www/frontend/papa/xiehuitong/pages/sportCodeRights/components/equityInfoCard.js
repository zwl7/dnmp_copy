"use strict";
const common_vendor = require("../../../common/vendor.js");
const equityInfoCardItem = () => "./equityInfoCardItem.js";
const _sfc_main = {
  components: { equityInfoCardItem },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
    // type: {
    //   type: String,
    //   default: "1",
    // },
  },
  data() {
    return {
      // list: [
      //   {
      //     title: "篮球散客票",
      //     image: ballTicket,
      //     content: [
      //       {
      //         name: "适用场馆",
      //         value: "体育馆",
      //       },
      //       {
      //         name: "适用时间",
      //         value: "18：00-20：00",
      //       },
      //       {
      //         name: "有效时长",
      //         value: "30分钟",
      //       },
      //     ],
      //   },
      //   {
      //     title: "羽毛球1号场",
      //     image: site,
      //     content: [
      //       {
      //         name: "适用场馆",
      //         value: "体育馆",
      //       },
      //       {
      //         name: "适用时段",
      //         value: "18：00-20：00",
      //       },
      //     ],
      //   },
      //   {
      //     title: "羽毛球3班",
      //     image: badminton,
      //     content: [
      //       {
      //         name: "适用场馆",
      //         value: "体育馆",
      //       },
      //       {
      //         name: "适用时段",
      //         value: "18：00-20：00",
      //       },
      //     ],
      //   },
      //   {
      //     title: "金卡",
      //     image: card,
      //     content: [
      //       {
      //         name: "适用场馆",
      //         value: "体育馆",
      //       },
      //       {
      //         name: "余额",
      //         value: "1222.00",
      //       },
      //       {
      //         name: "有效时长",
      //         value: "无限期",
      //       },
      //     ],
      //   },
      // ],
      type: "2"
    };
  },
  methods: {
    getTicket() {
      this.$emit("getTicket", this.list);
    }
  }
};
if (!Array) {
  const _component_equityInfoCardItem = common_vendor.resolveComponent("equityInfoCardItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_component_equityInfoCardItem + _component_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.list.length != 0
  }, $props.list.length != 0 ? {} : {
    b: common_vendor.o((...args) => $options.getTicket && $options.getTicket(...args))
  }, {
    c: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: "d1d49b48-0-" + i0,
        b: common_vendor.p({
          item,
          type: $data.type,
          isLast: index == $props.list.length - 1
        }),
        c: index
      };
    }),
    d: $props.list.length == 0
  }, $props.list.length == 0 ? {
    e: common_vendor.p({
      marginTop: 0,
      type: "sportCode"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d1d49b48"]]);
wx.createComponent(Component);
