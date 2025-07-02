"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_guid = require("../../utils/guid.js");
const utils_util = require("../../utils/util.js");
require("../../core/config.js");
require("../../utils/qqmap-wx-jssdk.js");
const _sfc_main = {
  name: "mytabs",
  props: {
    // 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
    isScroll: {
      type: Boolean,
      default: true
    },
    //需循环的标签列表
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    // 当前活动tab的索引
    current: {
      type: [Number, String],
      default: 0
    },
    // 导航栏的高度和行高
    height: {
      type: [String, Number],
      default: 80
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 30
    },
    // 过渡动画时长, 单位ms
    duration: {
      type: [String, Number],
      default: 0.5
    },
    // 选中项的主题颜色
    activeColor: {
      type: String,
      default: "#e05830"
    },
    // 未选中项的颜色
    inactiveColor: {
      type: String,
      default: "#303133"
    },
    // 菜单底部移动的bar的宽度，单位rpx
    barWidth: {
      type: [String, Number],
      default: 40
    },
    // 移动bar的高度
    barHeight: {
      type: [String, Number],
      default: 6
    },
    // 单个tab的左或有内边距（左右相同）
    gutter: {
      type: [String, Number],
      default: 30
    },
    // 导航栏的背景颜色
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    // 读取传入的数组对象的属性(tab名称)
    name: {
      type: String,
      default: "name"
    },
    // 读取传入的数组对象的属性(徽标数)
    count: {
      type: String,
      default: "count"
    },
    // 徽标数位置偏移
    offset: {
      type: Array,
      default: () => {
        return [5, 20];
      }
    },
    // 活动tab字体是否加粗
    bold: {
      type: Boolean,
      default: true
    },
    // 当前活动tab item的样式
    activeItemStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 是否显示底部的滑块
    showBar: {
      type: Boolean,
      default: true
    },
    // 底部滑块的自定义样式
    barStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 标签的宽度
    itemWidth: {
      type: [Number, String],
      default: "auto"
    }
  },
  data() {
    return {
      scrollLeft: 0,
      // 滚动scroll-view的左边滚动距离
      tabQueryInfo: [],
      // 存放对tab菜单查询后的节点信息
      componentWidth: 0,
      // 屏幕宽度，单位为px
      scrollBarLeft: 0,
      // 移动bar需要通过translateX()移动的距离
      parentLeft: 0,
      // 父元素(tabs组件)到屏幕左边的距离
      id: utils_guid.guid(),
      // id值
      currentIndex: this.current,
      barFirstTimeMove: true
      // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
    };
  },
  watch: {
    // 监听tab的变化，重新计算tab菜单的布局信息，因为实际使用中菜单可能是通过
    // 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
    list(n, o) {
      if (n.length !== o.length)
        this.currentIndex = 0;
      this.$nextTick(() => {
        this.init();
      });
    },
    current: {
      immediate: true,
      handler(nVal, oVal) {
        this.$nextTick(() => {
          this.currentIndex = nVal;
          this.scrollByIndex();
        });
      }
    }
  },
  computed: {
    // 移动bar的样式
    tabBarStyle() {
      let style = {
        width: this.barWidth + "rpx",
        transform: `translate(${this.scrollBarLeft}px, -100%)`,
        // 滑块在页面渲染后第一次滑动时，无需动画效果
        "transition-duration": `${this.barFirstTimeMove ? 0 : this.duration}s`,
        "background-color": this.activeColor,
        height: this.barHeight + "rpx",
        opacity: this.barFirstTimeMove ? 0 : 1,
        // 设置一个很大的值，它会自动取能用的最大值，不用高度的一半，是因为高度可能是单数，会有小数出现
        "border-radius": `${this.barHeight / 2}px`
      };
      Object.assign(style, this.barStyle);
      return style;
    },
    // tab的样式
    tabItemStyle() {
      return (index) => {
        let style = {
          height: this.height + "rpx",
          "line-height": this.height + "rpx",
          "font-size": this.fontSize + "rpx",
          "transition-duration": `${this.duration}s`,
          padding: this.isScroll ? `0 ${this.gutter}rpx` : "",
          flex: this.isScroll ? "auto" : "1",
          width: this.addUnit(this.itemWidth)
        };
        if (index == this.currentIndex && this.bold)
          style.fontWeight = "bold";
        if (index == this.currentIndex) {
          style.color = this.activeColor;
          style = Object.assign(style, this.activeItemStyle);
        } else {
          style.color = this.inactiveColor;
        }
        return style;
      };
    }
  },
  methods: {
    // 设置一个init方法，方便多处调用
    async init() {
      let tabRect = await this.uGetRect("#" + this.id);
      this.parentLeft = tabRect.left;
      this.componentWidth = tabRect.width;
      this.getTabRect();
    },
    // 点击某一个tab菜单
    clickTab(index) {
      if (index == this.currentIndex)
        return;
      this.$emit("change", index);
    },
    // 查询tab的布局信息
    getTabRect() {
      let query = common_vendor.index.createSelectorQuery().in(this);
      for (let i = 0; i < this.list.length; i++) {
        query.select(`#u-tab-item-${i}`).fields({
          size: true,
          rect: true
        });
      }
      query.exec(
        function(res) {
          this.tabQueryInfo = res;
          this.scrollByIndex();
        }.bind(this)
      );
    },
    // 滚动scroll-view，让活动的tab处于屏幕的中间位置
    scrollByIndex() {
      let tabInfo = this.tabQueryInfo[this.currentIndex];
      if (!tabInfo)
        return;
      let tabWidth = tabInfo.width;
      let offsetLeft = tabInfo.left - this.parentLeft;
      let scrollLeft = offsetLeft - (this.componentWidth - tabWidth) / 2;
      this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
      let left = tabInfo.left + tabInfo.width / 2 - this.parentLeft;
      this.scrollBarLeft = left - common_vendor.index.upx2px(this.barWidth) / 2;
      if (this.barFirstTimeMove == true) {
        setTimeout(() => {
          this.barFirstTimeMove = false;
        }, 100);
      }
    },
    addUnit(value = "auto", unit = "rpx") {
      value = String(value);
      return utils_util.number(value) ? `${value}${unit}` : value;
    },
    uGetRect(selector, all) {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  },
  mounted() {
    this.init();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item[$props.name] || item["name"]),
        b: "u-tab-item-" + index,
        c: index,
        d: common_vendor.o(($event) => $options.clickTab(index), index),
        e: common_vendor.s($options.tabItemStyle(index))
      };
    }),
    b: $props.showBar
  }, $props.showBar ? {
    c: common_vendor.s($options.tabBarStyle)
  } : {}, {
    d: !$props.isScroll ? 1 : "",
    e: $data.scrollLeft,
    f: $data.id,
    g: $props.bgColor
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-810822c8"], ["__file", "E:/gxm/uniapp-shandong/components/tabs/mytabs.vue"]]);
wx.createComponent(Component);
