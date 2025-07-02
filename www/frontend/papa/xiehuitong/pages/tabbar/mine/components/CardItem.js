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
const apis_index = require("../../../../apis/index.js");
const apis_login = require("../../../../apis/login.js");
const core_config = require("../../../../core/config.js");
const utils_util = require("../../../../utils/util.js");
const apis_common = require("../../../../apis/common.js");
const apis_stadium = require("../../../../apis/stadium.js");
const feedBackPop = () => "./feedBackPop.js";
const _sfc_main = {
  name: "UserInfo",
  components: {
    feedBackPop
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      feedBackInfo: {}
    };
  },
  methods: {
    getFeedBackInfo(info) {
      return __async(this, null, function* () {
        this.feedBackInfo = info;
        let res = yield apis_index.AddProblemInfo({
          type: 1,
          des: this.feedBackInfo.res
        });
        if (res.code == 200) {
          common_vendor.index.showToast({
            title: "反馈成功"
          });
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.message
          });
        }
      });
    },
    handleClick(item) {
      return __async(this, null, function* () {
        console.log(item);
        common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
          let { path, needRealAuth } = item;
          let flag = yield getApp().judgeIsAuth(needRealAuth ? true : false);
          if (!flag) {
            return;
          }
          if (!path) {
            common_vendor.index.showModal({
              content: "正在建设中～",
              showCancel: false
            });
          } else if (path.includes("feedBackInfo")) {
            this.$refs["feedBackPop"].open();
          } else if (path == "myCoupon") {
            this.goToMyCoupon();
          } else if (path == "scanning") {
            this.authorize();
          } else {
            common_vendor.index.navigateTo({
              url: path
            });
          }
        }), 1e3);
      });
    },
    authorize() {
      return __async(this, null, function* () {
        common_vendor.index.scanCode({
          success: (resData) => __async(this, null, function* () {
            let { result } = resData;
            let param = result.split("?")[1];
            let paramColumn = param.split("&");
            let obj = {};
            paramColumn.forEach((item) => {
              let name = item.split("=")[0];
              let value = item.split("=")[1];
              obj[name] = value;
            });
            let res = yield apis_common.getAuthorize(obj);
            let { code, data, message } = res;
            if (code == 200) {
              obj.code = data.code;
              let baseUrl = decodeURIComponent(obj.redirect_uri);
              delete obj.redirect_uri;
              delete obj.appid;
              delete obj.response_type;
              let query = utils_util.handleUrlQuery(obj);
              let href = `${baseUrl}?${query}`;
              console.log(333333333, href);
              this.$openUrl(href);
            } else {
              common_vendor.index.showToast({
                icon: "none",
                title: message
              });
            }
          })
        });
      });
    },
    goToMyCoupon() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        let params = {
          page: 1,
          discount_activity_id: 1,
          size: 10
        };
        let res = yield apis_stadium.getWxStadiumList(params);
        let stadiumList = [];
        if (res.code === 200) {
          stadiumList = res.data.list;
        }
        let baseUrl = "myCouponList";
        apis_login.getWxMemberDateAuth({}).then((res2) => {
          if (res2.code === 200) {
            let stadiumListFilter = stadiumList.filter((item) => {
              return item.service_related_id;
            });
            let obj = {
              stadium_id: stadiumListFilter.length > 0 ? stadiumListFilter[0].service_related_id : "",
              //不填取不了运城场馆值
              authdata: res2.data,
              redireacturl: "",
              specificEnv: "yuncheng"
            };
            let query = utils_util.handleUrlQuery(obj);
            let href = `${core_config.config.ppos_wx}/${baseUrl}?${query}`;
            this.$openUrl(href);
          }
        });
      });
    }
  }
};
if (!Array) {
  const _component_feedBackPop = common_vendor.resolveComponent("feedBackPop");
  _component_feedBackPop();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.f($props.list, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.name,
        d: common_vendor.o(($event) => $options.handleClick(item), item.name)
      };
    }),
    c: common_vendor.sr("feedBackPop", "76540328-0"),
    d: common_vendor.o($options.getFeedBackInfo)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-76540328"]]);
wx.createComponent(Component);
