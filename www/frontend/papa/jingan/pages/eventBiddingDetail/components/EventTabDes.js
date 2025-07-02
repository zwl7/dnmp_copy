"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_util = require("../../../utils/util.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
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
          name: "申办信息",
          value: 1
        },
        {
          name: "赛事说明",
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
    des() {
      return utils_util.formatRichText(this.info.des);
    },
    showEmpty() {
      return this.currentTab == 2 && !this.info.des || this.currentTab == 3 && this.fieldsList.length == 0;
    },
    fieldsList() {
      let list = [];
      if (this.info.event_attach) {
        try {
          list = JSON.parse(this.info.event_attach);
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
      console.log(fileInfo);
      if (utils_util.isFileExtension(fileInfo.url, [".jpg", ".png", ".jpeg", ".gif", ".bmp", ".webp"])) {
        common_vendor.index.previewImage({
          urls: [fileInfo.url]
        });
      } else {
        utils_util.saveFile(fileInfo.url);
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_tabs2 + _component_empty)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
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
    c: common_vendor.t($props.info.apply_contact_person || "暂无"),
    d: common_vendor.t($props.info.contact_phone || "暂无"),
    e: common_vendor.t($props.info.apply_require || "暂无"),
    f: $data.currentTab == 1,
    g: $options.showEmpty
  }, $options.showEmpty ? {
    h: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    i: $options.des,
    j: $data.currentTab == 2,
    k: $options.showEmpty
  }, $options.showEmpty ? {
    l: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    m: common_vendor.f($options.fieldsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickFile(item), index)
      };
    }),
    n: $data.currentTab == 3
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ae2409b"]]);
wx.createComponent(Component);
