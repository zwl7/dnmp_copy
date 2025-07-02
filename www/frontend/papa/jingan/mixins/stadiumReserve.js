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
const common_vendor = require("../common/vendor.js");
const utils_util = require("../utils/util.js");
const apis_login = require("../apis/login.js");
const stadiumReserve = {
  data() {
    return {};
  },
  methods: {
    handleReserve(item) {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        let stadium_id = item.service_related_id;
        stadium_id = stadium_id.toString();
        if (item.service_provider) {
          if (item.service_provider === 1) {
            const res = yield apis_login.getWxMemberDateAuth({});
            let app = getApp();
            let obj = {
              stadium_id,
              authdata: res.data,
              longitude: app.globalData.longitude,
              latitude: app.globalData.latitude,
              specificEnv: "yuncheng"
            };
            if (utils_util.judgeUrl(stadium_id).isUrl) {
              delete obj.stadium_id;
            }
            let base_url = utils_util.getStadiumUrl(stadium_id);
            let url_query = utils_util.handleUrlQuery(obj);
            let url = `${base_url}${url_query}`;
            console.log(base_url, url);
            this.$openUrl(url);
            return;
          } else if (item.service_provider === 2) {
            common_vendor.index.navigateToMiniProgram({
              appId: item.wx_info.APPID,
              envVersion: "release",
              success(res) {
                console.log(res);
              },
              fail(err) {
                console.log(err);
              }
            });
            return;
          }
        }
        this.$showToastNone("场馆不可预约");
      });
    }
  }
};
exports.stadiumReserve = stadiumReserve;
