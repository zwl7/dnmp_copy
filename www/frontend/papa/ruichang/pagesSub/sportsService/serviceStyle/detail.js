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
const common_vendor = require("../../../common/vendor.js");
const apis_sportsService_serviceStyle = require("../../../apis/sportsService/serviceStyle.js");
const ServiceStyleItem = () => "../components/ServiceStyleItem/index.js";
const _sfc_main = {
  components: {
    ServiceStyleItem
  },
  data() {
    return {
      detailData: {
        id: "",
        category: "",
        title: "",
        avatar: "",
        nickname: "",
        time: "",
        content: "",
        images: [],
        location: "",
        participants: [],
        participantCount: 70,
        likeCount: 66,
        commentCount: 0,
        likeAvatars: [],
        // 点赞用户头像列表
        level: "已认证"
      },
      isRated: false,
      serveMienId: "",
      myComment: false,
      isComment: true,
      loading: true
      // 是否加载中
    };
  },
  onLoad(options) {
    this.serveMienId = options.id;
    this.myComment = Boolean(options.myComment);
    if (this.myComment) {
      this.isComment = false;
    }
    this.handleGetInfo();
  },
  methods: {
    handleGetInfo() {
      return __async(this, null, function* () {
        var _a;
        this.loading = true;
        const res = yield apis_sportsService_serviceStyle.getStyleDetail(this.serveMienId);
        if (res.code === 0) {
          console.log({ res });
          res.data.images = (_a = res.data.image) == null ? void 0 : _a.split(",");
          this.detailData = res.data;
        } else {
          common_vendor.index.showToast({
            title: res.msg,
            icon: "none"
          });
        }
        this.loading = false;
      });
    },
    onLike(item) {
      console.log("点赞", item);
    },
    onComment(item) {
      console.log("评论", item);
    }
  }
};
if (!Array) {
  const _easycom_uv_skeleton2 = common_vendor.resolveComponent("uv-skeleton");
  const _component_ServiceStyleItem = common_vendor.resolveComponent("ServiceStyleItem");
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_skeleton2 + _component_ServiceStyleItem + _easycom_uv_avatar2 + _component_layout_default_uni)();
}
const _easycom_uv_skeleton = () => "../../../node-modules/@climblee/uv-ui/components/uv-skeleton/uv-skeleton.js";
const _easycom_uv_avatar = () => "../../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
if (!Math) {
  (_easycom_uv_skeleton + _easycom_uv_avatar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      loading: $data.loading,
      avatar: true,
      avatarSize: "48",
      titleHeight: "24",
      rowsHeight: "24",
      rows: "4"
    }),
    b: !$data.loading
  }, !$data.loading ? {
    c: common_vendor.o($options.onLike),
    d: common_vendor.o($options.onComment),
    e: common_vendor.o($options.handleGetInfo),
    f: common_vendor.p({
      item: $data.detailData,
      ["is-detail"]: true,
      ["is-rated"]: $data.isRated,
      ["is-comment"]: $data.isComment,
      isShare: false,
      isMyComment: $data.myComment,
      viewType: true
    })
  } : {}, {
    g: $data.detailData.avatarList && $data.detailData.avatarList.length > 0
  }, $data.detailData.avatarList && $data.detailData.avatarList.length > 0 ? {
    h: common_vendor.f($data.detailData.avatarList, (avatar, index, i0) => {
      return {
        a: index,
        b: "60ec64c2-3-" + i0 + ",60ec64c2-0",
        c: common_vendor.p({
          src: avatar,
          size: "32",
          margin: [-10, 0, 0, 0]
        })
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-60ec64c2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
