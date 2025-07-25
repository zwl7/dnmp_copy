"use strict";
const utils_util = require("../../../../utils/util.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
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
          name: "活动说明",
          value: 1
        }
        // {
        //   name: '免责声明',
        //   value: 2,
        // },
        // {
        //   name: '附件下载',
        //   value: 3,
        // },
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
      lineColor: _ctx.themeTabsLineColorGetter,
      activeStyle: {
        color: _ctx.themeTabsFontColorGetter
      }
    }),
    c: $props.info.des,
    d: $data.currentTab == 1,
    e: $options.showEmpty
  }, $options.showEmpty ? {
    f: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    g: $props.info.duty_des,
    h: $data.currentTab == 2,
    i: $options.showEmpty
  }, $options.showEmpty ? {
    j: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    k: common_vendor.f($options.fieldsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickFile(item), index)
      };
    }),
    l: $data.currentTab == 3
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a6fbae0a"]]);
wx.createComponent(Component);
