"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const apis_login = require("../../apis/login.js");
require("../../core/config.js");
require("../../utils/qqmap-wx-jssdk.js");
require("../../utils/http.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      step: 1,
      loading: false,
      avatar: "https://cdn-static.papa.com.cn/shandong/avatar.png",
      sex: "",
      nick_name: "",
      code: "",
      token: ""
    };
  },
  onLoad(options) {
    this.code = options.code;
  },
  methods: {
    showChangeImageSheet() {
      let _this = this;
      common_vendor.index.showActionSheet({
        itemList: ["拍照", "从相册选择"],
        success: function(res) {
          let {
            tapIndex
          } = res;
          let types = {
            1: "album",
            0: "camera"
          };
          _this.changeImage(types[tapIndex]);
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    },
    changeImage(type) {
      let _this = this;
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sizeType: ["original"],
        sourceType: [type],
        success(res) {
          let tempFile = res.tempFiles[0].tempFilePath;
          utils_util.uploadFile(tempFile).then((img_res) => {
            if (img_res.code == 200) {
              _this.avatar = img_res.data.imgUrl;
            }
          });
        },
        fail: (err) => {
          console.log(err);
        }
      });
    },
    changeSex(type) {
      this.sex = type;
    },
    onNicknameChange(e) {
      console.log(e);
      let value = e.detail.value;
      if (value.length > 12) {
        value = value.substr(0, 12);
        common_vendor.index.showToast({
          title: `昵称不得超过12个字符`,
          icon: "none"
        });
      }
      console.log(value);
      this.nick_name = value;
    },
    onNickName(e) {
      console.log("--------", e);
      this.nick_name = e.detail.value;
    },
    handleSave() {
      if (this.loading) {
        this.$showToastNone("请勿重复点击提交");
        return;
      }
      if (this.step == 1) {
        if (!this.sex) {
          this.$showToastNone("请先选择您的性别");
          return;
        }
        this.step = 2;
      } else {
        if (!this.nick_name) {
          this.$showToastNone("请设置你的昵称");
          this.loading = false;
          return;
        }
        if (!this.sex) {
          this.$showToastNone("请选择你的性别");
          this.loading = false;
          return;
        }
        this.loading = true;
        this.fnRequest();
      }
    },
    async fnRequest() {
      let userInfo = {
        sex: this.sex,
        nick_name: String(this.nick_name).trim(),
        code: this.code,
        token: getApp().globalData.token,
        avatar: this.avatar
      };
      let app = getApp();
      let res = await apis_login.miniAuthLogin(userInfo);
      app.globalData.userInfo.avatar_url = res.data.avatar_url;
      app.globalData.userInfo.name = res.data.name;
      app.globalData.userInfo.nick_name = res.data.nick_name;
      app.globalData.userInfo.is_auth = res.data.is_authenticate;
      app.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
      this.loading = false;
      common_vendor.index.reLaunch({
        url: "/pages/tabbar/home/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.n({
      "right": $data.step == 2
    }),
    b: $data.step == 1
  }, $data.step == 1 ? {
    c: $data.sex == 1 ? "/static/girl-sel.png" : "/static/girl-nos.png",
    d: common_vendor.o(($event) => $options.changeSex(1)),
    e: $data.sex == 2 ? "/static/boy-sel.png" : "/static/boy-nos.png",
    f: common_vendor.o(($event) => $options.changeSex(2))
  } : {}, {
    g: $data.step == 2
  }, $data.step == 2 ? {
    h: $data.avatar,
    i: common_vendor.p({
      type: "camera-filled",
      size: "16",
      color: "#fff"
    }),
    j: common_vendor.o((...args) => $options.showChangeImageSheet && $options.showChangeImageSheet(...args)),
    k: common_vendor.o([($event) => $data.nick_name = $event.detail.value, (...args) => $options.onNicknameChange && $options.onNicknameChange(...args)]),
    l: common_vendor.o((...args) => $options.onNickName && $options.onNickName(...args)),
    m: $data.nick_name
  } : {}, {
    n: common_vendor.o((...args) => $options.handleSave && $options.handleSave(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-969f8de0"], ["__file", "E:/gxm/uniapp-shandong/pages/loginInfo/loginInfo.vue"]]);
wx.createPage(MiniProgramPage);
