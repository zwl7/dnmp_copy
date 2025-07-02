"use strict";
const common_vendor = require("../common/vendor.js");
const apis_stadium = require("../apis/stadium.js");
const apis_mine = require("../apis/mine.js");
const utils_util = require("../utils/util.js");
require("../utils/http.js");
require("../core/config.js");
require("../utils/token.js");
require("../utils/storageUtil.js");
require("../utils/qqmap-wx-jssdk.js");
const stadiumItem = () => "../pages/tabbar/stadium/components/stadiumItem.js";
const _sfc_main = {
  name: "stadiumRecommend",
  components: {
    stadiumItem
  },
  data() {
    return {
      loading: false,
      finished: false,
      page: 1,
      size: 5,
      count: 0,
      flag: 0,
      searchForm: {
        keyword: "",
        sport_tag_id: "",
        street_id: "",
        distance: "",
        large_stadium: 1,
        community_ids: ""
      },
      stadiumsList: []
    };
  },
  created() {
    this.loading = true;
    this.getStadiumsList(1);
  },
  methods: {
    // 获取列表数据
    getStadiumsList(is_recom = 0) {
      const page_data = {
        page: this.page,
        size: this.size,
        longitude: 0,
        latitude: 0,
        is_recom
      };
      const data = Object.assign(this.searchForm, page_data);
      apis_stadium.getWxStadiumList(data).then((res) => {
        this.loading = false;
        this.finished = true;
        if (res.code === 200) {
          res.data.list.map((e) => {
            e.sport_tag_list = e.sport_tag_str.slice(0, 2);
            if (e.sport_tag_str.length >= 3) {
              e.sport_tag_list.push("...");
            }
            e.show_images = e.images_url[0];
          });
          this.stadiumsList = this.stadiumsList.concat(res.data.list);
          if (this.stadiumsList.length > 5) {
            this.stadiumsList.splice(0, 5);
          }
          if (this.stadiumsList.length < 5 && !this.flag) {
            this.getStadiumsList(2);
            this.flag = 1;
          }
        }
      });
    },
    clickMore() {
      getApp().globalData.stadiumRefresh = true;
      common_vendor.index.switchTab({
        url: "/pages/tabbar/stadium/index"
      });
    },
    async handleReserve(item) {
      let flag = await getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
      let stadium_id = item.service_related_id;
      if (item.service_provider) {
        if (item.service_provider === 1) {
          const res = await apis_mine.getWxMemberDateAuth({});
          let app = getApp();
          let obj = {
            stadium_id,
            authdata: res.data,
            longitude: app.globalData.longitude,
            latitude: app.globalData.latitude
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
      this.$showToastNone("预约须知");
    },
    toDetail(item) {
      let {
        stadium_id
      } = item;
      common_vendor.index.redirectTo({
        url: "/pages/stadiumDetail/stadiumDetail?stadium_id=" + stadium_id
      });
    }
  }
};
if (!Array) {
  const _component_stadium_item = common_vendor.resolveComponent("stadium-item");
  _component_stadium_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.stadiumsList, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.handleReserve, index),
        c: common_vendor.o($options.toDetail, index),
        d: "19cc4630-0-" + i0,
        e: common_vendor.p({
          info: item
        })
      };
    }),
    b: common_vendor.o((...args) => $options.clickMore && $options.clickMore(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19cc4630"], ["__file", "E:/gxm/uniapp-shandong/components/stadiumRecommend.vue"]]);
wx.createComponent(Component);
