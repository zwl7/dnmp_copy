"use strict";
const common_vendor = require("../../../../common/vendor.js");
const utils_util = require("../../../../utils/util.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  name: "noticeDialog",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      iconUrl: "https://cdn-static.papa.com.cn/yuncheng/notice.png",
      popup: null,
      currentShowList: [],
      currentIndex: 0
    };
  },
  computed: {
    currentItem() {
      var _a;
      return (_a = this.currentShowList[this.currentIndex]) != null ? _a : {};
    }
  },
  watch: {
    list: {
      handler(val, oldval) {
        if (val !== oldval && val.length > 0) {
          setTimeout(() => {
            this.handleNotice(val);
          }, 500);
        }
      },
      deep: true
    }
  },
  methods: {
    //show_status :1=首次登录,2=每次登录
    handleNotice(val) {
      if (getApp().globalData.noticeShowPopup) {
        return;
      }
      let wxIsPopupList = [];
      let first_login = {};
      try {
        let list_str = common_vendor.index.getStorageSync("notice_show_list");
        first_login = JSON.parse(list_str);
      } catch (e) {
      }
      val.map((e) => {
        e.des = utils_util.formatRichText(e.des);
        if (e.wx_is_popup && e.des) {
          if (e.show_status == 1) {
            if (!first_login[e.notice_id]) {
              first_login[e.notice_id] = (/* @__PURE__ */ new Date()).getTime();
            }
            let flag = this.judgeItem(e.notice_id);
            flag ? wxIsPopupList.push(e) : "";
          }
          if (e.show_status == 2) {
            wxIsPopupList.push(e);
          }
        }
      });
      common_vendor.index.setStorageSync("notice_show_list", JSON.stringify(first_login));
      if (wxIsPopupList.length > 0) {
        this.currentIndex = 0;
        this.currentShowList = wxIsPopupList;
        this.open();
      }
      getApp().globalData.noticeShowPopup = true;
    },
    handleKnow() {
      let currentIndex = this.currentIndex + 1;
      if (currentIndex < this.currentShowList.length) {
        this.currentIndex += 1;
      } else {
        this.$refs["noticeDialog"].close();
      }
    },
    judgeItem(item) {
      try {
        let list_str = common_vendor.index.getStorageSync("notice_show_list");
        let list_obj = JSON.parse(list_str);
        if (!list_obj[item]) {
          return true;
        }
        if (this.isYesterday(list_obj[item])) {
          list_obj[item] = (/* @__PURE__ */ new Date()).getTime();
          common_vendor.index.setStorageSync("notice_show_list", JSON.stringify(list_obj));
          return true;
        }
        return false;
      } catch (e) {
      }
      return true;
    },
    isYesterday(timestamp) {
      const date = new Date(timestamp);
      let dateZero = new Date(date.getFullYear(), date.getMonth(), date.getDay()).getTime();
      let nowDate = /* @__PURE__ */ new Date();
      let nowZero = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDay()).getTime();
      return nowZero - dateZero > 864e5;
    },
    open() {
      this.$refs["noticeDialog"].open("center");
    },
    close() {
      this.$refs["noticeDialog"].close();
    },
    change(e) {
      console.log("弹窗状态改变：", e);
    },
    toDetail(item) {
      this.$emit("toDetail", item);
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
  return {
    a: $data.iconUrl,
    b: common_assets._imports_0$4,
    c: common_vendor.t($options.currentItem.name),
    d: common_assets._imports_0$4,
    e: $options.currentItem.des,
    f: common_vendor.o(($event) => $options.toDetail($options.currentItem)),
    g: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-cross",
      size: "24",
      color: "#fff"
    }),
    h: common_vendor.o((...args) => $options.close && $options.close(...args)),
    i: common_vendor.sr("noticeDialog", "697530cc-0"),
    j: common_vendor.o($options.change),
    k: common_vendor.p({
      bgColor: "none"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-697530cc"]]);
wx.createComponent(Component);
