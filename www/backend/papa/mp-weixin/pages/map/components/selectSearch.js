"use strict";
const apis_stadium = require("../../../apis/stadium.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
const lePicker = () => "../../../components/dropdown/le-picker.js";
const _sfc_main = {
  name: "selectSearch",
  options: {
    styleIsolation: "shared"
  },
  components: {
    lePicker
  },
  data() {
    return {
      current: "",
      themeColor: "#3185FF",
      inactiveColor: "#333",
      menuList: [
        {
          title: "市区"
        },
        {
          title: "全部项目",
          type: "cell"
        },
        {
          title: "距离",
          type: "cell"
        }
      ],
      sport_tag_id: "",
      distance: "",
      keyword: "",
      typeList: [],
      gatheTypeId: 0,
      tagIds: [],
      tags: [],
      distance: "",
      distanceName: "",
      distanceList: [
        {
          text: "全部距离",
          value: 0,
          zoom: 14
        },
        {
          text: "<800m",
          value: 800,
          zoom: 14
        },
        {
          text: "<3km",
          value: 3e3,
          zoom: 13
        },
        {
          text: "<5km",
          value: 5e3,
          zoom: 12
        },
        {
          text: "<10km",
          value: 1e4,
          zoom: 11
        },
        {
          text: "<20km",
          value: 2e4,
          zoom: 10
        }
      ],
      sizer: {
        distance: "0",
        street_id: "",
        gather_type_id: 0,
        search_tag: "",
        community_ids: ""
      },
      streetIds: [],
      companyAreaOptions: [],
      fieldNames: {
        label: "name",
        value: "company_area_id",
        children: "next"
      }
    };
  },
  created() {
    this.getTagList();
    const app = getApp();
    app.getCompanyArea().then((res) => {
      console.log("312313123", res);
      this.companyAreaOptions = res;
    });
  },
  methods: {
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
        ...this.sizer
      };
      this.$emit("getData", params);
    },
    menuClick(index) {
      this.current = index;
      this.$refs["popup" + index].open("bottom");
    },
    popupChange(e, index) {
      console.log(e, index);
      if (!e.show) {
        this.current = -1;
      }
    },
    closePopup() {
      this.$refs["popup" + this.current].close();
    },
    //   获取运动项目列表
    getTagList() {
      const data = {
        page: 1,
        size: 100
      };
      apis_stadium.getWxMapTypeList(data).then((res) => {
        res.data.sort((value1, value2) => {
          if (value1.name.length > value2.name.length) {
            return 1;
          } else if (value1.name.length < value2.name.length) {
            return -1;
          } else {
            return 0;
          }
        });
        res.data.forEach((item) => {
          item.text = item.name;
          item.value = item.gather_type_id;
        });
        this.typeList = this.typeList.concat(res.data);
      });
    },
    selGatherId(id, name) {
      this.gatheTypeId = id;
      this.gatheTypeName = name;
      if (id > 0) {
        apis_stadium.getWxMapTypeTagList({
          gather_type_id: id
        }).then((res) => {
          this.tags = res.data["tag_info"];
          console.log(this.tags);
        });
      } else {
        this.tagIds = [];
        this.tags = [];
      }
    },
    getLeftStyle(value) {
      return {
        background: this.gatheTypeId === value && this.gatheTypeId !== 0 ? "#F3F3F3" : "",
        color: this.gatheTypeId === value && this.gatheTypeId !== 0 ? "#2C65F7" : ""
      };
    },
    getTagStyle(tagId) {
      return {
        border: this.tagIds.indexOf(tagId) > -1 ? "2rpx solid #4374F7" : "2rpx solid #ebebeb"
      };
    },
    selTag(id) {
      const index = this.tagIds.indexOf(id);
      if (index > -1) {
        this.tagIds.splice(index, 1);
      } else {
        this.tagIds.push(id);
      }
    },
    // 类型重置
    reset() {
      this.gatheTypeId = 0;
      this.tagIds = [];
      this.gatheTypeName = "全部类型";
      this.sizer.gather_type_id = "";
      this.sizer.search_tag = "";
      this.emitData();
    },
    // 类型确定
    async confirm() {
      console.log(this.gatheTypeId);
      console.log(this.gatheTypeName);
      let arr = [];
      this.tags.forEach((info) => {
        var empty = [];
        const tagList = info["tag_list"];
        tagList.forEach((tag) => {
          if (this.tagIds.indexOf(tag.tag_id) > -1) {
            empty.push(tag.tag_id);
          }
        });
        if (empty.length > 0) {
          arr.push(empty);
        }
      });
      this.sizer.gather_type_id = this.gatheTypeId;
      this.sizer.search_tag = JSON.stringify(arr);
      this.emitData();
      this.closePopup();
    },
    // 距离重置
    resetDistance() {
      this.distance = 0;
      this.distanceName = "全部距离";
      this.emitData();
    },
    // 距离确定
    okDistance() {
      console.log(this.distance);
      console.log(this.distanceName);
      this.sizer.distance = this.distance.toString();
      this.distanceList.find((option) => {
        return option.value === this.distance;
      });
      this.emitData();
      this.closePopup();
    },
    getDistanceStyle(value) {
      return {
        background: this.distance === value && this.distance !== 0 ? "#F3F3F3" : "",
        color: this.distance === value && this.distance !== 0 ? "#2C65F7" : ""
      };
    },
    selDistance(value, name) {
      this.distance = value;
      this.distanceName = name;
    },
    onFilterConfirm() {
      let title = this.getTitle(this.companyAreaOptions, this.streetIds);
      this.menuList[0].title = title.join("/");
      this.sizer.street_id = this.streetIds[this.streetIds.length - 1];
      this.emitData();
      this.closePopup();
    },
    // 重置筛选
    onFilterReset() {
      this.menuList[0].title = "市区";
      this.streetIds = [];
      this.sizer.street_id = "";
      this.emitData();
      this.closePopup();
    },
    getTitle(options, value) {
      let list = [];
      let len = value.length;
      options.map((e) => {
        if (e.company_area_id == value[0]) {
          list.push(e.name);
          if (len == 2) {
            e.next.map((c) => {
              if (c.company_area_id == value[1]) {
                list.push(c.name);
              }
            });
          }
        }
      });
      return list;
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_le_picker = common_vendor.resolveComponent("le-picker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _component_le_picker + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_popup)();
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
    e: common_vendor.f($data.menuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index === $data.current ? $data.themeColor : $data.inactiveColor,
        c: "28503669-1-" + i0,
        d: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xia",
          size: "18",
          color: index === $data.current ? $data.themeColor : "#e3e5e6"
        }),
        e: common_vendor.n(index === $data.current ? "icon" : ""),
        f: common_vendor.o(($event) => $options.menuClick(index), index),
        g: index
      };
    }),
    f: common_vendor.o($options.closePopup),
    g: common_vendor.p({
      type: "closeempty",
      size: "16"
    }),
    h: common_vendor.o(($event) => $data.streetIds = $event),
    i: common_vendor.p({
      colNum: 2,
      options: $data.companyAreaOptions,
      fieldNames: $data.fieldNames,
      modelValue: $data.streetIds
    }),
    j: common_vendor.o((...args) => $options.onFilterReset && $options.onFilterReset(...args)),
    k: common_vendor.o((...args) => $options.onFilterConfirm && $options.onFilterConfirm(...args)),
    l: common_vendor.sr("popup0", "28503669-2"),
    m: common_vendor.o((e) => {
      $options.popupChange(e, 0);
    }),
    n: common_vendor.p({
      type: "top",
      ["background-color"]: "#fff"
    }),
    o: common_vendor.o($options.closePopup),
    p: common_vendor.p({
      type: "closeempty",
      size: "16"
    }),
    q: common_vendor.f($data.typeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.s($options.getLeftStyle(item.value)),
        d: common_vendor.o(($event) => $options.selGatherId(item.value, item.text), index)
      };
    }),
    r: common_vendor.f($data.tags, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.f(item.tag_list, (tag, i, i1) => {
          return {
            a: common_vendor.t(tag.name),
            b: i,
            c: common_vendor.s($options.getTagStyle(tag.tag_id)),
            d: common_vendor.o(($event) => $options.selTag(tag.tag_id), i)
          };
        }),
        c: index
      };
    }),
    s: common_vendor.o((...args) => $options.reset && $options.reset(...args)),
    t: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    v: common_vendor.sr("popup1", "28503669-5"),
    w: common_vendor.o((e) => {
      $options.popupChange(e, 1);
    }),
    x: common_vendor.p({
      type: "top",
      ["background-color"]: "#fff"
    }),
    y: common_vendor.o($options.closePopup),
    z: common_vendor.p({
      type: "closeempty",
      size: "16"
    }),
    A: common_vendor.f($data.distanceList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.s($options.getDistanceStyle(item.value)),
        d: common_vendor.o(($event) => $options.selDistance(item.value, item.text), index)
      };
    }),
    B: common_vendor.o((...args) => $options.resetDistance && $options.resetDistance(...args)),
    C: common_vendor.o((...args) => $options.okDistance && $options.okDistance(...args)),
    D: common_vendor.sr("popup2", "28503669-7"),
    E: common_vendor.o((e) => {
      $options.popupChange(e, 2);
    }),
    F: common_vendor.p({
      type: "top",
      ["background-color"]: "#fff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28503669"], ["__file", "E:/gxm/uniapp-shandong/pages/map/components/selectSearch.vue"]]);
wx.createComponent(Component);
