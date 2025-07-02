"use strict";
const utils_util = require("../../../../utils/util.js");
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  components: {},
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      list: [
        {
          name: "赛事说明",
          value: 1
        },
        {
          name: "免责声明",
          value: 2
        },
        {
          name: "附件下载",
          value: 3
        }
      ],
      currentTab: 1
    };
  },
  computed: {
    showEmpty() {
      return this.currentTab == 2 && !this.info.duty_des || this.currentTab == 3 && this.fieldsList.length == 0;
    },
    fieldsList() {
      let list = [];
      if (this.info.fields) {
        try {
          list = JSON.parse(this.info.fields);
        } catch (e) {
        }
      }
      return list;
    }
  },
  methods: {
    click(item) {
      this.currentTab = item.value;
    },
    clickFile(fileInfo) {
      utils_util.saveFile(fileInfo.url);
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_tabs2 + _component_empty)();
}
const _easycom_uv_tabs = () => "../../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.click),
    b: common_vendor.p({
      list: $data.list,
      lineWidth: "40",
      lineColor: _ctx.themePrimaryColorGetter,
      activeStyle: {
        color: _ctx.themePrimaryColorGetter
      }
    }),
    c: common_vendor.t($props.info.organizer_unit),
    d: common_vendor.t($props.info.undertake_unit),
    e: common_vendor.t($props.info.assist_unit),
    f: common_vendor.t($props.info.sponsor_unit),
    g: $props.info.safe_des,
    h: $props.info.des,
    i: $data.currentTab == 1,
    j: $options.showEmpty
  }, $options.showEmpty ? {
    k: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    l: $props.info.duty_des,
    m: $data.currentTab == 2,
    n: $options.showEmpty
  }, $options.showEmpty ? {
    o: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    p: common_vendor.f($options.fieldsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickFile(item), index)
      };
    }),
    q: $data.currentTab == 3
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-add5944f"]]);
wx.createComponent(Component);
