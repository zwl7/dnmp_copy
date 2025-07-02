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
const common_vendor = require("../../../../common/vendor.js");
const utils_util = require("../../../../utils/util.js");
const apis_common = require("../../../../apis/common.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  name: "uploadFileStep",
  emits: ["update:value", "clickInput", "blurInput"],
  props: {
    step: {
      type: Number,
      default: 1
    },
    applyId: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {},
  data() {
    return {
      wechat: "https://cdn-static.papa.com.cn/shandong/wechat.png",
      phone: "https://cdn-static.papa.com.cn/shandong/phone.png",
      upload_str: "",
      loading: false
    };
  },
  methods: {
    showPopup() {
      console.log(this, "ppppppp");
      this.$refs.popup.open("bottom");
    },
    closePopup() {
      this.$refs.popup.close();
    },
    changeImage() {
      let _this = this;
      common_vendor.index.chooseMedia({
        count: 1,
        chooseMedia: ["image"],
        sourceType: ["camera", "album"],
        sizeType: ["original"],
        success: function(e) {
          common_vendor.index.showToast({
            icon: "loading",
            mask: true,
            duration: 2500
          });
          console.log(e);
          let tempFile = e.tempFiles[0].tempFilePath;
          utils_util.uploadFile(tempFile).then((res) => {
            if (res.code === 200) {
              _this.upload_str = res.data.imgUrl;
            }
            common_vendor.index.hideToast();
          }).catch((err) => {
            common_vendor.index.hideToast();
          });
        },
        fail(e) {
          console.log("error", e);
        }
      });
    },
    clearUploadStr() {
      this.upload_str = "";
    },
    // 下载模板
    handleType(type) {
      let path = "https://cdn-static.papa.com.cn/shandong/apply_form.docx";
      if (type == 1) {
        this.shareToFriend();
      }
      if (type == 2) {
        utils_util.saveFile(path);
      }
      this.closePopup();
    },
    // 分享好友
    shareToFriend() {
      common_vendor.index.downloadFile({
        url: "https://cdn-static.papa.com.cn/shandong/apply_form.docx",
        // 下载url
        success(res) {
          if (res.statusCode == 200) {
            common_vendor.index.shareFileMessage({
              filePath: res.tempFilePath,
              success(data) {
                console.log("转发成功！！！", data);
              },
              fileName: "山东省体育场馆协会会员单位申请表.docx",
              fail: console.error
            });
          }
        },
        fileName: "山东省体育场馆协会会员单位申请表",
        fail: console.error
      });
    },
    handleSubmit() {
      if (!this.upload_str) {
        common_vendor.index.showToast({
          icon: "none",
          title: "请先上传会员申请表"
        });
        return;
      }
      if (this.loading) {
        return;
      }
      this.updateApply();
    },
    // 更新字段
    updateApply() {
      return __async(this, null, function* () {
        common_vendor.index.showLoading({
          title: "正在上传"
        });
        let params = {
          member_units_apply_id: this.applyId,
          apply_form: this.upload_str
        };
        apis_common.updateMemberUnitsApply(params).then((res) => {
          common_vendor.index.hideLoading();
          if (res.code === 200) {
            common_vendor.index.showToast({
              icon: "success",
              title: "提交成功",
              duration: 2e3
            });
            let url = `/pages/memberApplyForm/memberApplyResult/memberApplyResult?status=1`;
            common_vendor.index.redirectTo({
              url
            });
          } else {
            common_vendor.index.showToast({
              icon: "none",
              title: res.message,
              duration: 2e3
            });
          }
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uni_icons2 + _easycom_uv_popup2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.upload_str
  }, !$data.upload_str ? {
    b: common_vendor.p({
      type: "image",
      size: "32",
      color: _ctx.themePrimaryColorGetter
    }),
    c: common_vendor.o((...args) => $options.changeImage && $options.changeImage(...args))
  } : {
    d: $data.upload_str,
    e: common_vendor.o($options.clearUploadStr),
    f: common_vendor.p({
      type: "clear",
      size: "20",
      color: "#FF5733"
    })
  }, {
    g: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    h: $data.wechat,
    i: common_vendor.o(($event) => $options.handleType(1)),
    j: $data.phone,
    k: common_vendor.o(($event) => $options.handleType(2)),
    l: common_vendor.sr("popup", "7552540f-2"),
    m: common_vendor.o($options.closePopup),
    n: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
