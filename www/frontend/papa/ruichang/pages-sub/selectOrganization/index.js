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
const common_vendor = require("../../common/vendor.js");
const apis_common = require("../../apis/common.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      selected: [],
      close: true,
      keyword: "",
      dataList: [],
      tempList: [],
      result: []
    };
  },
  computed: {
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    activeColor() {
      return this.$store.app.themeConfig["--hubei-primary"];
    }
  },
  created() {
    this.getData();
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    this.eventChannel = eventChannel;
    eventChannel.on("PUBLISH_SELECT_SITE_ORGANIZATION", (data) => {
      if (data.tagIds) {
        this.selected = data.tagIds.split(",");
      }
    });
  },
  methods: {
    confirm() {
      let result = this.dataList.filter((item) => {
        return this.selected.some((dItem) => dItem == item.id);
      });
      let tagObj = {
        tagIds: this.selected.toString(),
        tagIdsStr: result.map((item) => {
          return item.label;
        }).toString()
      };
      console.log(tagObj);
      common_vendor.index.$emit("PUBLISH_SELECT_SITE_ORGANIZATION", tagObj);
      common_vendor.index.navigateBack();
    },
    cancel() {
      common_vendor.index.navigateBack();
    },
    search() {
      const keyWord = this.keyword;
      if (keyWord == "") {
        this.tempList = this.dataList;
      } else {
        this.tempList = this.dataList.filter((item) => item.label.includes(keyWord));
      }
    },
    getTabText(value) {
      return this.$dict.getDictLabel(this.dataList, value, { valueKey: "id" });
    },
    handleSelect(item) {
      this.selected = [item.id];
    },
    isSelected(value) {
      return this.selected.filter((item) => value == item).length > 0;
    },
    getData() {
      return __async(this, null, function* () {
        let param = {
          page: 1,
          size: 999,
          type_id: "8"
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_common.getWxSiteList(param);
        const tagGroup = res.data.list.map((e) => {
          return {
            name: e.name,
            label: e.name,
            site_id: e.site_id,
            id: e.site_id
          };
        });
        this.dataList = tagGroup;
        this.tempList = tagGroup;
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tags2 = common_vendor.resolveComponent("uv-tags");
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_cell2 = common_vendor.resolveComponent("uv-cell");
  const _easycom_uv_list_item2 = common_vendor.resolveComponent("uv-list-item");
  const _easycom_uv_list2 = common_vendor.resolveComponent("uv-list");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tags2 + _easycom_uv_search2 + _easycom_uv_icon2 + _easycom_uv_cell2 + _easycom_uv_list_item2 + _easycom_uv_list2 + _easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_uv_tags = () => "../../node-modules/@climblee/uv-ui/components/uv-tags/uv-tags.js";
const _easycom_uv_search = () => "../../node-modules/@climblee/uv-ui/components/uv-search/uv-search.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_cell = () => "../../node-modules/@climblee/uv-ui/components/uv-cell/uv-cell.js";
const _easycom_uv_list_item = () => "../../node-modules/@climblee/uv-ui/components/uv-list-item/uv-list-item.js";
const _easycom_uv_list = () => "../../node-modules/@climblee/uv-ui/components/uv-list/uv-list.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_tags + _easycom_uv_search + _easycom_uv_icon + _easycom_uv_cell + _easycom_uv_list_item + _easycom_uv_list + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.selected, (item, index, i0) => {
      return {
        a: "551ecac6-1-" + i0 + ",551ecac6-0",
        b: common_vendor.p({
          text: $options.getTabText(item),
          plain: true,
          size: "mini",
          color: $options.activeColor,
          borderColor: $options.activeColor
        }),
        c: index
      };
    }),
    b: common_vendor.o($options.search),
    c: common_vendor.o(($event) => $data.keyword = $event),
    d: common_vendor.p({
      placeholder: "搜索组织",
      bgColor: "#F7F9FC",
      showAction: false,
      modelValue: $data.keyword
    }),
    e: common_vendor.f($data.tempList, (item, index, i0) => {
      return common_vendor.e({
        a: $options.isSelected(item.id)
      }, $options.isSelected(item.id) ? {
        b: "551ecac6-6-" + i0 + "," + ("551ecac6-5-" + i0),
        c: common_vendor.p({
          name: "checkbox-mark",
          color: $options.activeColor,
          size: "20"
        })
      } : {}, {
        d: common_vendor.o(($event) => $options.handleSelect(item), index),
        e: "551ecac6-5-" + i0 + "," + ("551ecac6-4-" + i0),
        f: common_vendor.p({
          title: item.label
        }),
        g: index,
        h: "551ecac6-4-" + i0 + ",551ecac6-3"
      });
    }),
    f: common_vendor.o($options.cancel),
    g: common_vendor.p({
      type: "primary",
      plain: true,
      shape: "circle",
      size: "medium"
    }),
    h: common_vendor.o($options.confirm),
    i: common_vendor.p({
      type: "primary",
      shape: "circle",
      size: "medium"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-551ecac6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
