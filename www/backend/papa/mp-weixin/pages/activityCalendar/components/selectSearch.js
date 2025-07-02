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
          title: "区域",
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
          title: "全部项目",
          type: "cell",
          value: "",
          options: [{
            label: "全部项目",
            value: 1
          }]
        },
        {
          title: "状态",
          type: "cell",
          value: "",
          options: [
            {
              label: "状态",
              value: 0
            },
            {
              label: "报名中",
              value: 1
            },
            {
              label: "未开始",
              value: 2
            },
            {
              label: "进行中",
              value: 3
            },
            {
              label: "已结束",
              value: 4
            }
          ]
        }
      ],
      sport_tag_id: "",
      status: "",
      keyword: ""
    };
  },
  created() {
    this.getBaseTag();
    const app = getApp();
    app.watchGlobalData("city_id", "activityCalenderSelectSearch", this.watchCity.bind(this));
  },
  methods: {
    watchCity(val) {
      const app = getApp();
      app.getCompanyArea("select", val).then((res) => {
        this.menuList[0].componentProps.options = res;
        if (this.menuList[0].title != "区域") {
          this.menuList[0].title = "区域";
          this.menuList[0].value = [];
          this.emitData();
        }
      });
    },
    dropdownConfirm() {
      this.sport_tag_id = this.menuList[1].value;
      this.status = this.menuList[2].value;
      let length = this.menuList[0].value.length;
      this.street_id = this.menuList[0].value[length - 1];
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
        status: this.status,
        sport_tag_id: this.sport_tag_id,
        street_id: this.street_id
      };
      this.$emit("getData", params);
    },
    async getBaseTag() {
      let params = {
        page: 1,
        size: 10
      };
      let res = await apis_common.getBaseTag(params);
      if (res.code === 200) {
        let list = [{
          label: "全部项目",
          value: "0"
        }];
        res.data.map((e) => {
          list.push({
            label: e.option_name,
            value: e.option_value
          });
        });
        this.menuList[1].options = list;
      }
    },
    getShowNum(e) {
      this.$emit("getShowNum", e);
    },
    closeAll() {
      this.$refs["dropdownMenu"].closeAll();
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
    e: common_vendor.sr("dropdownMenu", "761064f4-1"),
    f: common_vendor.o($options.dropdownConfirm),
    g: common_vendor.o($options.getShowNum),
    h: common_vendor.o(($event) => $data.menuList = $event),
    i: common_vendor.p({
      getHeight: true,
      menuList: $data.menuList
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-761064f4"], ["__file", "E:/gxm/uniapp-shandong/pages/activityCalendar/components/selectSearch.vue"]]);
wx.createComponent(Component);
