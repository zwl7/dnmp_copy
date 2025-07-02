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
var _a, _b;
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-album",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  emits: ["albumWidth"],
  props: __spreadValues({
    // 图片地址，Array<String>|Array<Object>形式
    urls: {
      type: Array,
      default: () => []
    },
    // 指定从数组的对象元素中读取哪个属性作为图片地址
    keyName: {
      type: String,
      default: ""
    },
    // 单图时，图片长边的长度
    singleSize: {
      type: [String, Number],
      default: 180
    },
    // 多图时，图片边长
    multipleSize: {
      type: [String, Number],
      default: 70
    },
    // 多图时，图片水平和垂直之间的间隔
    space: {
      type: [String, Number],
      default: 6
    },
    // 单图时，图片缩放裁剪的模式
    singleMode: {
      type: String,
      default: "scaleToFill"
    },
    // 多图时，图片缩放裁剪的模式
    multipleMode: {
      type: String,
      default: "aspectFill"
    },
    // 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
    maxCount: {
      type: [String, Number],
      default: 9
    },
    // 是否可以预览图片
    previewFullImage: {
      type: Boolean,
      default: true
    },
    // 每行展示图片数量，如设置，singleSize和multipleSize将会无效
    rowCount: {
      type: [String, Number],
      default: 3
    },
    // 超出maxCount时是否显示查看更多的提示
    showMore: {
      type: Boolean,
      default: true
    }
  }, (_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.album),
  data() {
    return {
      // 单图的宽度
      singleWidth: 0,
      // 单图的高度
      singleHeight: 0,
      // 单图时，如果无法获取图片的尺寸信息，让图片宽度默认为容器的一定百分比
      singlePercent: 0.6
    };
  },
  watch: {
    urls: {
      immediate: true,
      handler(newVal) {
        if (newVal.length === 1) {
          this.getImageRect();
        }
      }
    }
  },
  computed: {
    imageStyle() {
      return (index1, index2) => {
        const { space, rowCount, multipleSize, urls } = this;
        const rowLen = this.showUrls.length;
        this.urls.length;
        const style = {
          marginRight: this.$uv.addUnit(space),
          marginBottom: this.$uv.addUnit(space)
        };
        if (index1 === rowLen)
          style.marginBottom = 0;
        if (index2 === rowCount || index1 === rowLen && index2 === this.showUrls[index1 - 1].length)
          style.marginRight = 0;
        return style;
      };
    },
    // 将数组划分为二维数组
    showUrls() {
      const arr = [];
      this.urls.map((item, index) => {
        if (index + 1 <= this.maxCount) {
          const itemIndex = Math.floor(index / this.rowCount);
          if (!arr[itemIndex]) {
            arr[itemIndex] = [];
          }
          arr[itemIndex].push(item);
        }
      });
      return arr;
    },
    imageWidth() {
      return this.$uv.addUnit(
        this.urls.length === 1 ? this.singleWidth : this.multipleSize
      );
    },
    imageHeight() {
      return this.$uv.addUnit(
        this.urls.length === 1 ? this.singleHeight : this.multipleSize
      );
    },
    // 此变量无实际用途，仅仅是为了利用computed特性，让其在urls长度等变化时，重新计算图片的宽度
    // 因为用户在某些特殊的情况下，需要让文字与相册的宽度相等，所以这里事件的形式对外发送
    albumWidth() {
      let width = 0;
      if (this.urls.length === 1) {
        width = this.singleWidth;
      } else {
        width = this.showUrls[0].length * this.$uv.getPx(this.multipleSize) + this.$uv.getPx(this.space) * (this.showUrls[0].length - 1);
      }
      this.$emit("albumWidth", width);
      return width;
    }
  },
  methods: {
    // 预览图片
    onPreviewTap(url) {
      const urls = this.urls.map((item) => {
        return this.getSrc(item);
      });
      common_vendor.index.previewImage({
        current: url,
        urls
      });
    },
    // 获取图片的路径
    getSrc(item) {
      return this.$uv.test.object(item) ? this.keyName && item[this.keyName] || item.src : item;
    },
    // 单图时，获取图片的尺寸
    // 在小程序中，需要将网络图片的的域名添加到小程序的download域名才可能获取尺寸
    // 在没有添加的情况下，让单图宽度默认为盒子的一定宽度(singlePercent)
    getImageRect() {
      const src = this.getSrc(this.urls[0]);
      common_vendor.index.getImageInfo({
        src,
        success: (res) => {
          const isHorizotal = res.width >= res.height;
          this.singleWidth = isHorizotal ? this.singleSize : res.width / res.height * this.$uv.getPx(this.singleSize);
          this.singleHeight = !isHorizotal ? this.singleSize : res.height / res.width * this.singleWidth;
        },
        fail: () => {
          this.getComponentWidth();
        }
      });
    },
    // 获取组件的宽度
    getComponentWidth() {
      return __async(this, null, function* () {
        yield this.$uv.sleep(30);
        this.$uv.getRect(".uv-album__row").then((size) => {
          this.singleWidth = size.width * this.singlePercent;
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_text2 = common_vendor.resolveComponent("uv-text");
  _easycom_uv_text2();
}
const _easycom_uv_text = () => "../uv-text/uv-text.js";
if (!Math) {
  _easycom_uv_text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.showUrls, (arr, index, i0) => {
      return {
        a: common_vendor.f(arr, (item, index1, i1) => {
          return common_vendor.e({
            a: $options.getSrc(item),
            b: $props.showMore && $props.urls.length > $props.rowCount * $options.showUrls.length && index === $options.showUrls.length - 1 && index1 === $options.showUrls[$options.showUrls.length - 1].length - 1
          }, $props.showMore && $props.urls.length > $props.rowCount * $options.showUrls.length && index === $options.showUrls.length - 1 && index1 === $options.showUrls[$options.showUrls.length - 1].length - 1 ? {
            c: "dd839e47-0-" + i0 + "-" + i1,
            d: common_vendor.p({
              text: `+${$props.urls.length - $props.maxCount}`,
              color: "#fff",
              size: _ctx.$uv.getPx($props.multipleSize) * 0.3,
              align: "center",
              customStyle: "justify-content: center"
            })
          } : {}, {
            e: index1,
            f: common_vendor.s($options.imageStyle(index + 1, index1 + 1)),
            g: common_vendor.o(($event) => $props.previewFullImage ? $options.onPreviewTap($options.getSrc(item)) : "", index1)
          });
        }),
        b: index
      };
    }),
    b: $props.urls.length === 1 ? $options.imageHeight > 0 ? $props.singleMode : "widthFix" : $props.multipleMode,
    c: common_vendor.s({
      width: $options.imageWidth,
      height: $options.imageHeight
    }),
    d: $options.albumWidth
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dd839e47"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-album.js.map
