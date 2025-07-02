"use strict";
const common_vendor = require("../../../common/vendor.js");
const core_listMixins = require("../../../core/listMixins.js");
const apis_stadium = require("../../../apis/stadium.js");
const apis_mine = require("../../../apis/mine.js");
const utils_util = require("../../../utils/util.js");
require("../../../utils/storageUtil.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/qqmap-wx-jssdk.js");
const selectSearch = () => "./components/selectSearch.js";
const stadiumItem = () => "./components/stadiumItem.js";
const _sfc_main = {
  components: {
    selectSearch,
    stadiumItem
  },
  mixins: [core_listMixins.listMixins],
  data() {
    return {
      sport_tag_id: "",
      distance: "",
      keyword: "",
      street_id: ""
    };
  },
  onLoad(options) {
    this.getList();
    getApp();
  },
  onShow(options) {
    let app = getApp();
    if (app.globalData.stadiumRefresh) {
      this.street_id = "";
      this.resetData();
      app.globalData.stadiumRefresh = false;
    }
  },
  onReachBottom() {
    this.loadMore();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.$nextTick(() => {
      this.getList(true);
    });
  },
  methods: {
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        status: 1
      };
      if (this.keyword) {
        param.keyword = this.keyword;
      }
      if (this.sport_tag_id) {
        param.sport_tag_id = this.sport_tag_id;
      }
      if (this.distance) {
        param.distance = this.distance;
      }
      if (this.street_id) {
        param.street_id = this.street_id;
      }
      this.loading = true;
      let res = await apis_stadium.getWxStadiumList(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.map((e) => {
          e.sport_tag_list = e.sport_tag_str.slice(0, 3);
          e.show_images = e.images_url[0];
        });
        this.list = this.list.concat(res.data.list);
        this.count = res.data.count;
        this.loading = false;
        if (res.data.list.length === 0) {
          this.finished = true;
        }
        if (!this.finished) {
          this.$isFullScreen().then((fres) => {
            let {
              windowHeight,
              scrollHeight
            } = fres;
            if (windowHeight + 70 >= scrollHeight) {
              _this.loadMore();
            }
          });
        }
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    },
    getSearchData(data) {
      console.log(data);
      this.sport_tag_id = data.sport_tag_id;
      this.distance = data.distance;
      this.keyword = data.keyword;
      this.street_id = data.street_id;
      this.resetData();
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
      common_vendor.index.navigateTo({
        url: "/pages/stadiumDetail/stadiumDetail?stadium_id=" + stadium_id
      });
    }
  }
};
if (!Array) {
  const _component_select_search = common_vendor.resolveComponent("select-search");
  const _component_stadium_item = common_vendor.resolveComponent("stadium-item");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_select_search + _component_stadium_item + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.getSearchData),
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.handleReserve, index),
        c: common_vendor.o($options.toDetail, index),
        d: "8ef872e6-1-" + i0,
        e: common_vendor.p({
          info: item
        })
      };
    }),
    c: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    e: common_vendor.p({
      paddingTop: "60rpx"
    })
  } : {}, {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8ef872e6"], ["__file", "E:/gxm/uniapp-shandong/pages/tabbar/stadium/index.vue"]]);
wx.createPage(MiniProgramPage);
