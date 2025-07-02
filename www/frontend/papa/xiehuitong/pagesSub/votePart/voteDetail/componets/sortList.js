"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "sortList",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showEnd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      firstBg: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-first-bg.png",
      secondBg: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-second-bg.png",
      threeBg: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-three-bg.png",
      firstNumber: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-first-number.png",
      secondNumber: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-second-number.png",
      threeNumber: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-three-number.png",
      firstAvatar: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-first-avatar.png",
      secondAvatar: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-second-avatar.png",
      threeAvatar: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-sort-three-avatar.png",
      default_img: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-default-avatar.png"
    };
  },
  methods: {
    dealValue(value) {
      if (value === "" || value === void 0) {
        return "--";
      } else {
        return value;
      }
    },
    getUrlOrBgClor(value, type) {
      return this.$dict.getDictLabel("rankSortBgColorList", value, {
        labelKey: type
      }) || { background: "#fff" };
    }
  }
};
if (!Array) {
  const _component_empty = common_vendor.resolveComponent("empty");
  _component_empty();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return common_vendor.e({
    a: $props.showEnd
  }, $props.showEnd ? {
    b: ((_a = $props.list[2]) == null ? void 0 : _a.images) || $data.default_img,
    c: $data.secondAvatar,
    d: $data.secondBg,
    e: common_vendor.t($options.dealValue((_b = $props.list[2]) == null ? void 0 : _b.number)),
    f: common_vendor.t((_c = $props.list[2]) == null ? void 0 : _c.name),
    g: common_vendor.t($options.dealValue((_d = $props.list[2]) == null ? void 0 : _d.vote_count)),
    h: $data.secondNumber,
    i: ((_e = $props.list[1]) == null ? void 0 : _e.images) || $data.default_img,
    j: $data.firstAvatar,
    k: $data.firstBg,
    l: common_vendor.t($options.dealValue((_f = $props.list[1]) == null ? void 0 : _f.number)),
    m: common_vendor.t((_g = $props.list[1]) == null ? void 0 : _g.name),
    n: common_vendor.t($options.dealValue((_h = $props.list[1]) == null ? void 0 : _h.vote_count)),
    o: $data.firstNumber,
    p: ((_i = $props.list[3]) == null ? void 0 : _i.images) || $data.default_img,
    q: $data.threeAvatar,
    r: $data.threeBg,
    s: common_vendor.t($options.dealValue((_j = $props.list[3]) == null ? void 0 : _j.number)),
    t: common_vendor.t((_k = $props.list[3]) == null ? void 0 : _k.name),
    v: common_vendor.t($options.dealValue((_l = $props.list[3]) == null ? void 0 : _l.vote_count)),
    w: $data.threeNumber
  } : {}, {
    x: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: index == 0 && !$props.showEnd
      }, index == 0 && !$props.showEnd ? {
        b: common_vendor.t(item.sortTitle),
        c: common_vendor.t(item.idTitle),
        d: common_vendor.t(item.pointTitle)
      } : !$props.showEnd || index > 3 ? common_vendor.e({
        f: index == 2 || index == 3 || index == 1
      }, index == 2 || index == 3 || index == 1 ? {
        g: $options.getUrlOrBgClor(index, "url")
      } : {
        h: common_vendor.t(index)
      }, {
        i: item.images || $data.default_img,
        j: common_vendor.t(item.number),
        k: common_vendor.t(item.name),
        l: common_vendor.t(item.vote_count),
        m: common_vendor.s($options.getUrlOrBgClor(index, "bgColor"))
      }) : {}, {
        e: !$props.showEnd || index > 3
      }, $props.list.length == 1 ? {
        n: "adaf6c59-0-" + i0,
        o: common_vendor.p({
          marginTop: 10
        })
      } : {}, {
        p: index
      });
    }),
    y: $props.list.length == 1
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-adaf6c59"]]);
wx.createComponent(Component);
