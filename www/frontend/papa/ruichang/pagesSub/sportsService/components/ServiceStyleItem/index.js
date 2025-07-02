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
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const apis_sportsService_serviceStyle = require("../../../../apis/sportsService/serviceStyle.js");
const CircleProgress = () => "../../../../components/CircleProgress/index.js";
const VisitorViewCommentPopup = () => "./components/VisitorViewCommentPopup.js";
const CreaterViewCommentPopup = () => "./components/CreaterViewCommentPopup.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    item: {
      type: Object,
      default: () => ({
        images: []
      })
    },
    isComment: {
      type: Boolean,
      default: false
    },
    isMyComment: {
      type: Boolean,
      default: false
    },
    isShare: {
      type: Boolean,
      default: true
    },
    multipleSize: {
      type: String,
      default: "206rpx"
    },
    viewType: {
      type: Boolean,
      default: false
      // 默认1  2 动态 3我的点赞4详情
    }
  },
  components: {
    CircleProgress,
    VisitorViewCommentPopup,
    CreaterViewCommentPopup
  },
  data() {
    return {
      showComment: false,
      showRatePopup: false,
      rating: 0,
      rateTexts: ["很差", "一般", "满意", "不错", "非常满意"],
      count: 5,
      startcount: 0,
      evaluteMode: "edit",
      // view/edit
      levelMap: {
        1: "https://cdn-static.papa.com.cn/jingAn/icon/nation-level.png",
        2: "https://cdn-static.papa.com.cn/jingAn/icon/first-level.png",
        3: "https://cdn-static.papa.com.cn/jingAn/icon/second-level.png",
        4: "https://cdn-static.papa.com.cn/jingAn/icon/three-level.png",
        5: "https://cdn-static.papa.com.cn/jingAn/icon/other-level.png"
      },
      myEvalue: {
        common: 4,
        detail: 3
      },
      ratingObj: {},
      requesting: false
    };
  },
  mounted() {
  },
  methods: {
    // 点击地址打开地图
    handleShowMap() {
      common_vendor.index.openLocation({
        latitude: this.item.lat,
        longitude: this.item.lng
      });
    },
    toggleComment() {
      this.showComment = !this.showComment;
    },
    handleChangeLike() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsLogin();
        if (!flag) {
          return;
        }
        if (this.item.isLike) {
          this.handleCancelPraise();
        } else {
          this.handleAddPraise();
        }
      });
    },
    // 新增点赞
    handleAddPraise() {
      return __async(this, null, function* () {
        if (this.requesting)
          return;
        this.requesting = true;
        const res = yield apis_sportsService_serviceStyle.praise(this.item.serveWorkId);
        if (res.code === 0) {
          this.item.isLike = 1;
          this.item.likesNum++;
          this.requesting = false;
          this.$emit("refresh");
        }
      });
    },
    // 取消点赞
    handleCancelPraise() {
      return __async(this, null, function* () {
        if (this.requesting)
          return;
        this.requesting = true;
        const res = yield apis_sportsService_serviceStyle.cancelPraise(this.item.serveWorkId);
        if (res.code === 0) {
          this.item.isLike = 0;
          this.item.likesNum--;
          this.requesting = false;
          this.$emit("refresh");
        }
      });
    },
    // 确定评价
    handleCommentSubmit(value) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceStyle.addAppraise({
          serveWorkId: this.item.serveWorkId,
          rating: value
        });
        if (res.code === 0) {
          common_vendor.index.showToast({
            title: "提交成功，感谢您的评价反馈~",
            icon: "none"
          });
          this.item.isRating = 1;
          this.$refs.visitorViewCommentPopup.close();
        }
      });
    },
    // 获取点单人评价
    getMyComment() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceStyle.getAppraise(this.item.serveMienId);
        if (res.code === 0) {
          console.log({ 评论: res });
          this.item.rating = res.data.rating;
          this.ratingObj = res.data;
        }
      });
    },
    // 获取普通评价
    getComment() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceStyle.getMessAppraise(this.item.serveWorkId);
        if (res.code === 0) {
          console.log({ 评论: res });
          this.item.rating = res.data.rating;
          this.ratingObj = res.data;
        }
      });
    },
    // 查看评价
    handleViewComment() {
      return __async(this, null, function* () {
        this.evaluteMode = "view";
        yield this.getComment();
        this.$refs.visitorViewCommentPopup.open();
      });
    },
    handleAddComment() {
      this.evaluteMode = "edit";
      this.$refs.visitorViewCommentPopup.open();
    },
    // 创建者评价
    handleShowCreatePopup() {
      return __async(this, null, function* () {
        yield this.getMyComment();
        this.$refs.createrViewCommentPopup.open();
      });
    },
    onItemClick(item) {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const currentRoute = currentPage.route;
      if (currentRoute === "pagesSub/sportsService/serviceStyle/detail") {
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceStyle/detail?id=${this.item.serveMienId}${this.isMyComment ? "&myComment=true" : ""}`
      });
    },
    handleCustomShare() {
      console.log("666");
      common_vendor.wx$1.showShareMenu({
        withShareTicket: true,
        success: () => {
          common_vendor.wx$1.updateShareMenu({
            withShareTicket: true
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_album2 = common_vendor.resolveComponent("uv-album");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_visitor_view_comment_popup = common_vendor.resolveComponent("visitor-view-comment-popup");
  const _component_creater_view_comment_popup = common_vendor.resolveComponent("creater-view-comment-popup");
  (_easycom_uv_avatar2 + _easycom_uv_album2 + _easycom_uv_icon2 + _component_visitor_view_comment_popup + _component_creater_view_comment_popup)();
}
const _easycom_uv_avatar = () => "../../../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_album = () => "../../../../node-modules/@climblee/uv-ui/components/uv-album/uv-album.js";
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_album + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.item.dictName),
    b: common_vendor.t($props.item.serveWorkName),
    c: common_vendor.p({
      src: $props.item.avatar,
      mode: "aspectFill"
    }),
    d: common_vendor.t($props.item.creatorName),
    e: common_vendor.t($props.item.createTime),
    f: $data.levelMap[$props.item.level],
    g: common_vendor.t($props.item.content),
    h: $props.item.images.length > 0
  }, $props.item.images.length > 0 ? {
    i: common_vendor.p({
      urls: $props.item.images,
      space: "12rpx",
      multipleSize: $props.multipleSize,
      singleSize: "400rpx",
      previewFullImage: $props.viewType
    })
  } : {}, {
    j: common_vendor.p({
      name: "map",
      color: "#a8abb2"
    }),
    k: common_vendor.t($props.item.address),
    l: common_vendor.o((...args) => $options.handleShowMap && $options.handleShowMap(...args)),
    m: common_vendor.t($props.item.realityNum),
    n: $props.isMyComment
  }, $props.isMyComment ? {
    o: common_vendor.p({
      name: "file-text-fill",
      size: "20"
    }),
    p: common_vendor.o((...args) => $options.handleShowCreatePopup && $options.handleShowCreatePopup(...args))
  } : {}, {
    q: common_vendor.p({
      size: "20",
      color: $props.item.isLike ? "#ffc411" : "",
      name: $props.item.isLike ? _ctx.getThemeIcon("thumb_fill") : _ctx.getThemeIcon("thumb")
    }),
    r: common_vendor.t($props.item.likesNum),
    s: common_vendor.o((...args) => $options.handleChangeLike && $options.handleChangeLike(...args)),
    t: $props.isComment && $props.item.isRating
  }, $props.isComment && $props.item.isRating ? {
    v: common_vendor.p({
      name: "file-text-fill",
      size: "20"
    }),
    w: common_vendor.o((...args) => $options.handleViewComment && $options.handleViewComment(...args))
  } : {}, {
    x: $props.isComment && !$props.item.isRating
  }, $props.isComment && !$props.item.isRating ? {
    y: common_vendor.o((...args) => $options.handleAddComment && $options.handleAddComment(...args))
  } : {}, {
    z: common_vendor.o((...args) => $options.onItemClick && $options.onItemClick(...args)),
    A: common_vendor.sr("visitorViewCommentPopup", "aa255743-6"),
    B: common_vendor.o($options.handleCommentSubmit),
    C: common_vendor.p({
      evaluteMode: $data.evaluteMode,
      initStart: $props.item.rating
    }),
    D: common_vendor.sr("createrViewCommentPopup", "aa255743-7"),
    E: common_vendor.p({
      ratingObj: $data.ratingObj
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa255743"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
