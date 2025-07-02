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
const common_vendor = require("../../../common/vendor.js");
const serviceCommentItem = () => "../components/serviceCommentItem.js";
const _sfc_main = {
  components: {
    serviceCommentItem
  },
  data() {
    return {
      activityList: [],
      page: 1,
      pageSize: 10,
      loadMoreStatus: "loadmore",
      isRefreshing: false,
      // 模拟数据
      mockActivities: [
        {
          id: 1,
          categoryName: "科学健身指导",
          userName: "陈教练",
          avatar: "/static/images/avatar.png",
          status: "精选",
          createTime: "2024-03-17 09:15:18",
          content: "老年人广场舞培训活动服务现场，大家都积极学习！",
          images: [
            "/static/images/activity1.jpg",
            "/static/images/activity2.jpg",
            "/static/images/activity3.jpg"
          ],
          location: "城南市民健身公园",
          likes: 1
        },
        {
          id: 2,
          categoryName: "科学健身指导",
          userName: "李教练",
          avatar: "/static/images/avatar.png",
          status: "精选",
          createTime: "2024-03-17 09:10:18",
          content: "老年人广场舞培训活动服务现场，大家都积极学习！",
          images: [
            "/static/images/activity1.jpg",
            "/static/images/activity2.jpg",
            "/static/images/activity3.jpg"
          ],
          location: "城南市民健身公园",
          likes: 0
        }
      ]
    };
  },
  mounted() {
    this.getActivityList();
  },
  methods: {
    // 获取活动列表
    getActivityList(isRefresh = false) {
      return __async(this, null, function* () {
        if (isRefresh) {
          this.page = 1;
          this.activityList = [];
        }
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        const list = this.mockActivities.map((item) => __spreadProps(__spreadValues({}, item), {
          id: item.id + this.page * 10
        }));
        if (isRefresh) {
          this.activityList = list;
        } else {
          this.activityList = [...this.activityList, ...list];
        }
        this.loadMoreStatus = list.length < this.pageSize ? "nomore" : "loadmore";
      });
    },
    // 下拉刷新
    onRefresh() {
      return __async(this, null, function* () {
        this.isRefreshing = true;
        yield this.getActivityList(true);
        this.isRefreshing = false;
      });
    },
    // 加载更多
    loadMore() {
      if (this.loadMoreStatus === "nomore")
        return;
      this.page++;
      this.getActivityList();
    },
    // 点击列表项
    handleItemClick(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceDetail/index?id=${item.id}`
      });
    },
    // 点击评论
    handleComment(item) {
      common_vendor.index.showToast({
        title: "评论功能开发中",
        icon: "none"
      });
    },
    // 点击点赞
    handleLike(item) {
      const index = this.activityList.findIndex((i) => i.id === item.id);
      if (index > -1) {
        this.activityList[index].likes = this.activityList[index].likes ? 0 : 1;
      }
    },
    goToPublish() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/serviceStyle/form"
      });
    }
  }
};
if (!Array) {
  const _component_serviceCommentItem = common_vendor.resolveComponent("serviceCommentItem");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  const _easycom_uv_load_more2 = common_vendor.resolveComponent("uv-load-more");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_serviceCommentItem + _easycom_uv_empty2 + _easycom_uv_load_more2 + _component_layout_default_uni)();
}
const _easycom_uv_empty = () => "../../../node-modules/@climblee/uv-ui/components/uv-empty/uv-empty.js";
const _easycom_uv_load_more = () => "../../../node-modules/@climblee/uv-ui/components/uv-load-more/uv-load-more.js";
if (!Math) {
  (_easycom_uv_empty + _easycom_uv_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.activityList, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.handleItemClick, index),
        c: common_vendor.o($options.handleComment, index),
        d: common_vendor.o($options.handleLike, index),
        e: "395b765e-1-" + i0 + ",395b765e-0",
        f: common_vendor.p({
          item
        })
      };
    }),
    b: $data.activityList.length === 0
  }, $data.activityList.length === 0 ? {
    c: common_vendor.p({
      text: "暂无数据"
    })
  } : {}, {
    d: $data.activityList.length > 0
  }, $data.activityList.length > 0 ? {
    e: common_vendor.p({
      status: $data.loadMoreStatus
    })
  } : {}, {
    f: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args)),
    g: common_vendor.o((...args) => $options.onRefresh && $options.onRefresh(...args)),
    h: $data.isRefreshing,
    i: common_vendor.o((...args) => $options.goToPublish && $options.goToPublish(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-395b765e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
