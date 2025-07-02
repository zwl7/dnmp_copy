"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
const common_vendor = require("../../../common/vendor.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_stadiumReserve = require("../../../mixins/stadiumReserve.js");
const apis_common = require("../../../apis/common.js");
const apis_stadium = require("../../../apis/stadium.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const dropDown = () => "../../../components/dropDown/index.js";
const stadiumItem = () => "./components/stadiumItem.js";
const dropDownCitySelect = () => "../../../components/dropDown/dropDownCitySelect.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_stadiumReserve.stadiumReserve, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    stadiumItem,
    dropDownCitySelect
  },
  data() {
    return {
      topBgImage: "https://cdn-static.papa.com.cn/social/themeStatic/SkyBlue/stadium_join_card.png",
      status: "nomore",
      navBarHeight: 0,
      navColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      searchParams: {},
      selectType: "",
      areaOptions: [],
      areaSelected: [],
      options: {
        street_id: {
          label: "区域",
          value: "",
          activeIndex: 0,
          child: [],
          useSlot: true
        },
        sport_tag_id: {
          label: "全部项目",
          value: "",
          activeIndex: 0,
          child: []
        },
        distance: {
          label: "距离",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "不限制",
              value: ""
            },
            {
              label: "1km",
              value: "1000"
            },
            {
              label: "3km",
              value: "3000"
            },
            {
              label: "5km",
              value: "5000"
            },
            {
              label: "20km",
              value: "20000"
            }
          ]
        }
        // service_status: {
        //   label: '预订状态',
        //   value: '',
        //   activeIndex: 0,
        //   child: [
        //     {
        //       label: '全部场馆',
        //       value: '',
        //     },
        //     {
        //       label: '可预订',
        //       value: 1,
        //     },
        //     {
        //       label: '不可预订',
        //       value: 2,
        //     },
        //   ],
        // },
      }
    };
  },
  onLoad() {
    getApp();
    this.navBarHeight = this.$store.app.menuInfo.navBarHeight;
    this.getSportTag();
    this.getCompanyAreaList();
    this.getList();
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#cae8fe";
      this.customStyle.backgroundColor = "#cae8fe";
    } else {
      this.navColor = "transparent";
      this.customStyle.backgroundColor = "transparent";
    }
  },
  methods: {
    // 点击顶部背景图
    handleClickTopBg() {
      common_vendor.index.showToast({
        title: "敬请期待",
        icon: "none"
      });
    },
    openDrop(e) {
      console.log(e);
      this.selectType = e.name;
    },
    changeDropDown(res) {
      let obj = {};
      res.map((e) => {
        obj[e.name] = e.value;
      });
      this.searchParams = obj;
      this.resetData();
    },
    // 获取下拉运动项目
    getSportTag() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyProject({ type: 3 });
        let list = [{ label: "全部项目", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.option_name, value: e.option_value });
        });
        this.options.sport_tag_id.child = list;
      });
    },
    getCompanyAreaList() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        this.areaOptions = res.data;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10
          // large_stadium: 1
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_stadium.getWxStadiumList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: "", show_distance: "" }, e);
        if (e.images_url && e.images_url.length > 0) {
          obj.show_image = e.images_url[0];
        }
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    handleClick(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/stadium/detail?stadium_id=${item.stadium_id}`
      });
    },
    // citySelectConfirm(e) {
    //   console.log(e)
    //   this.options['street_id'].label = e ? e.label : '全部区域'
    //   this.searchParams['street_id'] = e.districtId ? e.districtId : ''
    //   this.resetData()
    //   this.$refs['dropDown'].close()
    // },
    citySelectConfirm(e) {
      let item = e.data[e.data.length - 1];
      let values = e.values;
      this.options["street_id"].label = item ? item.name : "全部区域";
      this.searchParams["street_id"] = values.length ? values[values.length - 1] : "";
      this.resetData();
      this.$refs["dropDown"].close();
    },
    citySelectReset() {
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_dropDownCitySelect = common_vendor.resolveComponent("dropDownCitySelect");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_stadiumItem = common_vendor.resolveComponent("stadiumItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_dropDownCitySelect + _component_dropDown + _easycom_uv_sticky2 + _component_stadiumItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  _easycom_uv_sticky();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      isFixed: true,
      titleColor: "#323233",
      title: "场馆",
      searchTitle: "",
      showBack: true,
      moduleKey: "stadium"
    }),
    b: $data.navBarHeight + "px",
    c: $data.topBgImage,
    d: common_vendor.o((...args) => $options.handleClickTopBg && $options.handleClickTopBg(...args)),
    e: common_vendor.o($options.citySelectConfirm),
    f: common_vendor.o($options.citySelectReset),
    g: common_vendor.p({
      defaultSelected: $data.areaSelected,
      options: $data.areaOptions,
      ["show-location"]: false,
      ["show-distance"]: false
    }),
    h: $data.selectType == "street_id",
    i: common_vendor.sr("dropDown", "76cb9a14-3,76cb9a14-2"),
    j: common_vendor.o($options.changeDropDown),
    k: common_vendor.o($options.openDrop),
    l: common_vendor.p({
      sign: "stadium",
      options: $data.options,
      customStyle: $data.customStyle
    }),
    m: common_vendor.p({
      ["offset-top"]: $data.navBarHeight
    }),
    n: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: common_vendor.o(($event) => _ctx.handleReserve(item), index),
        c: "76cb9a14-5-" + i0 + ",76cb9a14-0",
        d: common_vendor.p({
          info: item
        }),
        e: index
      };
    }),
    o: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    p: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    q: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
