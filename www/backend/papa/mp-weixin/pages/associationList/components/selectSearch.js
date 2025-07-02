"use strict";
const apis_common = require("../../../apis/common.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
const dropdownMenu = () => "../../../components/dropdown/dropdown-menu.js";
const _sfc_main = {
  name: "selectSearch",
  options: {
    styleIsolation: "shared"
  },
  components: {
    dropdownMenu
  },
  data() {
    return {
      menuList: [
        {
          title: "市区",
          type: "city",
          value: [],
          componentProps: {
            colNum: 2,
            fieldNames: {
              label: "name",
              value: "company_area_id",
              children: "next"
            },
            options: []
          }
        },
        {
          title: "全部类型",
          type: "cell",
          value: "",
          options: [{
            label: "全部类型",
            value: "-1"
          }]
        }
      ],
      site_type: "",
      keyword: "",
      street_id: ""
    };
  },
  created() {
    this.getBaseTag();
    const app = getApp();
    app.getCompanyArea().then((res) => {
      this.menuList[0].componentProps.options = res;
    });
  },
  methods: {
    dropdownConfirm() {
      let length = this.menuList[0].value.length;
      this.street_id = this.menuList[0].value[length - 1];
      this.site_type = this.menuList[1].value;
      this.emitData();
    },
    searchBoxConfirm(e) {
      this.keyword = e.value;
      this.emitData();
    },
    searchBoxClear(e) {
      this.keyword = e.value;
      this.emitData();
    },
    searchBoxCancel(e) {
      this.keyword = "";
      this.emitData();
    },
    emitData() {
      let params = {
        keyword: this.keyword,
        site_type: this.site_type,
        street_id: this.street_id
      };
      this.$emit("getData", params);
    },
    async getBaseTag() {
      let params = {
        page: 1,
        size: 100,
        status: 1
      };
      let res = await apis_common.getSportsOrganizationType(params);
      if (res.code === 200) {
        let list = [{
          label: "全部类型",
          value: "0"
        }];
        res.data.list.map((e) => {
          list.push({
            label: e.name,
            value: e.type_id
          });
        });
        this.menuList[1].options = list;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_dropdownMenu = common_vendor.resolveComponent("dropdownMenu");
  (_easycom_uni_search_bar2 + _component_dropdownMenu)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.searchBoxConfirm),
    b: common_vendor.o($options.searchBoxClear),
    c: common_vendor.o($options.searchBoxCancel),
    d: common_vendor.p({
      radius: "100",
      placeholder: "请输入搜索关键词",
      clearButton: "auto"
    }),
    e: common_vendor.o($options.dropdownConfirm),
    f: common_vendor.o(($event) => $data.menuList = $event),
    g: common_vendor.p({
      menuList: $data.menuList
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-516b4da2"], ["__file", "E:/gxm/uniapp-shandong/pages/associationList/components/selectSearch.vue"]]);
wx.createComponent(Component);
