"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const utils_imageCompress = require("../../utils/imageCompress.js");
const _sfc_main = {
  props: {
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: true
    },
    maxCount: {
      type: Number,
      default: 6
    },
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 80
    },
    previewFullImage: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["getFileList"],
  data() {
    return {};
  },
  computed: {
    fileListComputed() {
      let list = this.fileList.map((e) => {
        if (typeof e === "string") {
          return { url: e };
        }
        return e;
      });
      return list;
    }
  },
  methods: {
    getMore() {
      console.log("查看更多");
    },
    deletePic(event) {
      this.fileListComputed.splice(event.index, 1);
      this.$emit("getFileList", this.fileListComputed);
    },
    uploadFile(file) {
      console.log({ file });
      return new Promise((resolve, reject) => __async(this, null, function* () {
        let fileInfo = yield utils_imageCompress.mpImageCompress.set(file.url, 1024 * 5, true);
        console.log({ fileInfo });
        apis_common.uploadPic({ filePath: fileInfo.filePath }).then((resp) => {
          let res = JSON.parse(resp.data);
          if (res.code == 200) {
            resolve(res.data);
          } else {
            this.$showToastNone(res.message);
            reject(res.data);
          }
        });
      }));
    },
    afterRead(event) {
      return __async(this, null, function* () {
        try {
          this.$emit("getStatus", "loading");
          let lists = [].concat(event.file);
          let fileListLen = this[`fileList${event.name}`].length;
          lists.map((item) => {
            this[`fileList${event.name}`].push(__spreadProps(__spreadValues({}, item), {
              status: "uploading",
              message: "上传中"
            }));
            return item;
          });
          for (let i = 0; i < lists.length; i++) {
            try {
              const result = yield this.uploadFile(lists[i]);
              let item = this[`fileList${event.name}`][fileListLen];
              this[`fileList${event.name}`].splice(
                fileListLen,
                1,
                Object.assign(item, {
                  status: "success",
                  message: "",
                  relativeUrl: result.imgPath,
                  url: result.imgUrl,
                  thumb: result.imgUrl
                })
              );
              fileListLen++;
            } catch (e) {
              console.error(e);
              let item = this[`fileList${event.name}`][fileListLen];
              this[`fileList${event.name}`].splice(fileListLen, 1);
            }
          }
          this.$emit("getFileList", this.fileListComputed);
          this.$emit("getStatus", "success");
        } finally {
          this.$emit("getStatus", "finish");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_upload2 = common_vendor.resolveComponent("uv-upload");
  _easycom_uv_upload2();
}
const _easycom_uv_upload = () => "../../node-modules/@climblee/uv-ui/components/uv-upload/uv-upload.js";
if (!Math) {
  _easycom_uv_upload();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.afterRead),
    b: common_vendor.o($options.deletePic),
    c: common_vendor.p({
      fileList: $options.fileListComputed,
      width: $props.width,
      height: $props.height,
      multiple: $props.multiple,
      maxCount: $props.maxCount,
      previewFullImage: $props.previewFullImage,
      customStyle: $props.customStyle
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
