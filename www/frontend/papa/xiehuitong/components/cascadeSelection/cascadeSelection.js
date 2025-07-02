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
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "cascadeSelection",
  emits: ["change", "complete"],
  props: {
    /**
     * 如果下一级是请求返回，则为第一级数据，否则所有数据
     * 数据格式
      [{
    	  src: "",
    	  text: "",
    	  subText: "",
    	  value: 0,
    	  children:[{
    		  text: "",
    		  subText: "",
    		  value: 0,
    		  children:[]
       }]
      }]
     * */
    itemList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /*
      初始化默认选中数据
      [{
    text: "",//选中text
    subText: '',//选中subText
    value: '',//选中value
    src: '', //选中src，没有则传空或不传
    index: 0, //选中数据在当前layer索引
    list: [{src: "", text: "", subText: "", value: 101}] //当前layer下所有数据集合
     }];
       
      */
    defaultItemList: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultKey: {
      type: String,
      default: "text"
    },
    //是否显示header底部细线
    headerLine: {
      type: Boolean,
      default: true
    },
    //header背景颜色
    headerBgColor: {
      type: String,
      default: "#FFFFFF"
    },
    //顶部标签栏高度
    tabsHeight: {
      type: String,
      default: "88rpx"
    },
    //默认显示文字
    text: {
      type: String,
      default: "请选择"
    },
    //tabs 文字大小
    size: {
      type: Number,
      default: 28
    },
    //tabs 文字颜色
    color: {
      type: String,
      default: "#555"
    },
    //选中颜色
    activeColor: {
      type: String,
      default: ""
    },
    //选中后文字加粗
    bold: {
      type: Boolean,
      default: true
    },
    //选中后是否显示底部线条
    showLine: {
      type: Boolean,
      default: true
    },
    //线条颜色
    lineColor: {
      type: String,
      default: ""
    },
    //icon 大小
    checkMarkSize: {
      type: Number,
      default: 15
    },
    //icon 颜色
    checkMarkColor: {
      type: String,
      default: ""
    },
    //item 图片宽度
    imgWidth: {
      type: String,
      default: "40rpx"
    },
    //item 图片高度
    imgHeight: {
      type: String,
      default: "40rpx"
    },
    //图片圆角
    radius: {
      type: String,
      default: "50%"
    },
    //item text颜色
    textColor: {
      type: String,
      default: "#333"
    },
    textActiveColor: {
      type: String,
      default: "#333"
    },
    //选中后字体是否加粗
    textBold: {
      type: Boolean,
      default: true
    },
    //item text字体大小
    textSize: {
      type: Number,
      default: 28
    },
    //text 是否不换行
    nowrap: {
      type: Boolean,
      default: false
    },
    //item subText颜色
    subTextColor: {
      type: String,
      default: "#999"
    },
    //item subText字体大小
    subTextSize: {
      type: Number,
      default: 24
    },
    // item padding
    padding: {
      type: String,
      default: "20rpx 30rpx"
    },
    //占位高度，第一条数据距离顶部距离
    firstItemTop: {
      type: String,
      default: "20rpx"
    },
    //swiper 高度
    height: {
      type: String,
      default: "300px"
    },
    //item  swiper 内容部分背景颜色
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    //子集数据是否请求返回（默认false，一次性返回所有数据）
    request: {
      type: Boolean,
      default: false
    },
    //子级数据（当有改变时，默认当前选中项新增子级数据，request=true时生效）
    receiveData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //改变值则重置数据
    reset: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getActiveColor() {
      return this.activeColor || common_vendor.index && common_vendor.index.$tui && common_vendor.index.$tui.color.primary || "#FF7200";
    },
    getLineColor() {
      return this.lineColor || common_vendor.index && common_vendor.index.$tui && common_vendor.index.$tui.color.primary || "#FF7200";
    },
    getCkMarkColor() {
      return this.checkMarkColor || common_vendor.index && common_vendor.index.$tui && common_vendor.index.$tui.color.primary || "#FF7200";
    }
  },
  watch: {
    itemList(val) {
      this.initData(val, -1);
    },
    receiveData(val) {
      this.subLevelData(val, this.currentTab);
    },
    reset() {
      this.initData(this.itemList, -1);
    },
    defaultItemList(val) {
      this.setDefaultData(val);
    }
  },
  created() {
    this.setDefaultData(this.defaultItemList);
  },
  data() {
    return {
      currentTab: 0,
      defTab: 0,
      //tab栏scrollview滚动的位置
      scrollViewId: "id__1",
      selectedArr: []
    };
  },
  methods: {
    setDefaultData(val) {
      let defaultItemList = JSON.parse(JSON.stringify(val || []));
      if (defaultItemList.length > 0) {
        if ((typeof defaultItemList[0] === "string" || typeof defaultItemList[0] === "number") && !this.request) {
          let subi = -1;
          let selectedArr = [];
          for (let j = 0, len = defaultItemList.length; j < len; j++) {
            let item = defaultItemList[j];
            let list = [];
            let obj = {};
            if (j === 0) {
              list = this.getItemList(-1);
            } else {
              list = this.getItemList(j - 1, subi, selectedArr);
            }
            subi = this.getDefaultIndex(list, item);
            if (subi !== -1) {
              obj = list[subi];
              selectedArr.push({
                text: obj.text || this.text,
                value: obj.value || "",
                src: obj.src || "",
                subText: obj.subText || "",
                index: subi,
                scrollViewId: `id_${subi}`,
                list
              });
            }
            if (subi === -1)
              break;
          }
          this.selectedArr = selectedArr;
          this.defTab = this.currentTab;
          this.$nextTick(() => {
            setTimeout(() => {
              this.currentTab = selectedArr.length - 1;
              this.defTab = this.currentTab;
              this.checkCor();
            }, 20);
          });
        } else {
          defaultItemList.map((item) => {
            item.scrollViewId = `id_${item.index}`;
          });
          this.selectedArr = defaultItemList;
          this.defTab = this.currentTab;
          this.$nextTick(() => {
            setTimeout(() => {
              this.currentTab = defaultItemList.length - 1;
              this.defTab = this.currentTab;
              this.checkCor();
            }, 20);
          });
        }
      } else {
        this.initData(this.itemList, -1);
      }
    },
    getDefaultIndex(arr, val) {
      if (!arr || arr.length === 0 || val === void 0)
        return -1;
      let index = -1;
      let key = this.defaultKey || "text";
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i][key] == val) {
          index = i;
          break;
        }
      }
      return index;
    },
    initData(data, layer) {
      if (!data || data.length === 0)
        return;
      if (this.request) {
        this.subLevelData(data, layer);
      } else {
        let selectedValue = this.selectedValue || {};
        if (selectedValue.type) {
          this.setDefaultData(selectedValue);
        } else {
          this.subLevelData(this.getItemList(layer, -1), layer);
        }
      }
    },
    removeChildren(data) {
      let list = data.map((item) => {
        delete item["children"];
        return item;
      });
      return list;
    },
    getItemList(layer, index, selectedArr) {
      let list = [];
      let arr = JSON.parse(JSON.stringify(this.itemList));
      selectedArr = selectedArr || this.selectedArr;
      if (layer == -1) {
        list = this.removeChildren(arr);
      } else {
        let value = selectedArr[0].index;
        value = value === void 0 || value == -1 ? index : value;
        if (arr[value] && arr[value].children) {
          list = arr[value].children;
        }
        if (layer > 0) {
          for (let i = 1; i < layer + 1; i++) {
            let val = layer === i ? index : selectedArr[i].index;
            list = val === -1 ? [] : list[val].children || [];
            if (list.length === 0)
              break;
          }
        }
        list = this.removeChildren(list);
      }
      return list;
    },
    //滚动切换
    switchTab: function(e) {
      this.currentTab = e.detail.current;
      this.checkCor();
    },
    //点击标题切换当
    swichNav: function(e) {
      let cur = e.currentTarget.dataset.current;
      if (this.currentTab != cur) {
        this.defTab = this.currentTab;
        setTimeout(() => {
          this.currentTab = cur;
          this.defTab = this.currentTab;
        }, 20);
      }
    },
    checkCor: function() {
      let item = this.selectedArr[this.currentTab];
      item.scrollViewId = "id__1";
      this.$nextTick(() => {
        setTimeout(() => {
          let val = item.index < 2 ? 0 : Number(item.index - 2);
          item.scrollViewId = `id_${val}`;
        }, 20);
      });
      if (this.currentTab > 1) {
        this.scrollViewId = `id_${this.currentTab - 1}`;
      } else {
        this.scrollViewId = `id_0`;
      }
    },
    change(index, subIndex, subItem) {
      let item = this.selectedArr[index];
      if (item.index == subIndex)
        return;
      item.index = subIndex;
      item.text = subItem.text;
      item.value = subItem.value;
      item.subText = subItem.subText || "";
      item.src = subItem.src || "";
      this.$emit("change", __spreadValues({
        layer: index,
        subIndex
      }, subItem));
      if (!this.request) {
        let data = this.getItemList(index, subIndex);
        this.subLevelData(data, index);
      }
    },
    //新增子级数据时处理
    subLevelData(data, layer) {
      if (!data || data.length === 0) {
        if (layer == -1)
          return;
        let arr = this.selectedArr;
        if (layer < arr.length - 1) {
          let newArr = arr.slice(0, layer + 1);
          this.selectedArr = newArr;
        }
        let result = JSON.parse(JSON.stringify(this.selectedArr));
        let lastItem = result[result.length - 1] || {};
        let text = "";
        result.map((item) => {
          text += item.text;
          delete item["list"];
          delete item["scrollViewId"];
          return item;
        });
        this.$emit("complete", {
          result,
          value: lastItem.value,
          text,
          subText: lastItem.subText,
          src: lastItem.src
        });
      } else {
        let item = [
          {
            text: this.text,
            subText: "",
            value: "",
            src: "",
            index: -1,
            scrollViewId: "id__1",
            list: data
          }
        ];
        if (layer == -1) {
          this.selectedArr = item;
        } else {
          let retainArr = this.selectedArr.slice(0, layer + 1) || [];
          this.selectedArr = retainArr.concat(item);
        }
        let current = this.selectedArr.length - 1;
        if (current >= this.currentTab) {
          this.defTab = this.currentTab;
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.defTab = current;
            this.currentTab = current;
            this.scrollViewId = `id_${this.currentTab > 1 ? this.currentTab - 1 : 0}`;
          }, 50);
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.selectedArr, (item, idx, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.text),
        b: idx === $data.currentTab && $props.showLine
      }, idx === $data.currentTab && $props.showLine ? {
        c: $options.getLineColor
      } : {}, {
        d: idx === $data.currentTab && $props.bold ? 1 : "",
        e: idx === $data.currentTab ? $options.getActiveColor : $props.color,
        f: `id_${idx}`,
        g: common_vendor.o((...args) => $options.swichNav && $options.swichNav(...args), idx),
        h: idx,
        i: idx
      });
    }),
    b: $props.size + "rpx",
    c: $props.tabsHeight,
    d: $props.backgroundColor,
    e: $data.scrollViewId,
    f: $props.headerBgColor,
    g: !$props.headerLine ? 1 : "",
    h: common_vendor.f($data.selectedArr, (item, index, i0) => {
      return {
        a: common_vendor.f(item.list, (subItem, subIndex, i1) => {
          return common_vendor.e({
            a: item.index === subIndex
          }, item.index === subIndex ? {
            b: $options.getCkMarkColor,
            c: $props.checkMarkSize
          } : {}, {
            d: subItem.src
          }, subItem.src ? {
            e: subItem.src,
            f: $props.imgWidth,
            g: $props.imgHeight,
            h: $props.radius
          } : {}, {
            i: common_vendor.t(subItem.text),
            j: item.index === subIndex && $props.textBold ? 1 : "",
            k: item.index === subIndex ? $props.textActiveColor : $props.textColor,
            l: subItem.subText
          }, subItem.subText ? {
            m: common_vendor.t(subItem.subText),
            n: $props.subTextColor,
            o: $props.subTextSize + "rpx"
          } : {}, {
            p: `id_${subIndex}`,
            q: subIndex,
            r: common_vendor.o(($event) => $options.change(index, subIndex, subItem), subIndex)
          });
        }),
        b: item.scrollViewId,
        c: index
      };
    }),
    i: $props.firstItemTop,
    j: $props.nowrap ? 1 : "",
    k: $props.textSize + "rpx",
    l: $props.padding,
    m: $props.backgroundColor,
    n: $props.height,
    o: $data.defTab,
    p: common_vendor.o((...args) => $options.switchTab && $options.switchTab(...args)),
    q: $props.height,
    r: $props.backgroundColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-572517c4"]]);
wx.createComponent(Component);
