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
const common_assets = require("../../../../common/assets.js");
const utils_storages_uniStorage = require("../../../../utils/storages/uniStorage.js");
const utils_platform = require("../../../../utils/platform.js");
const LevelIcon = () => "../../../../components/LevelIcon/index.js";
const _sfc_main = {
  name: "ActivityItem",
  components: {
    LevelIcon
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: Number,
      default: 0
      // 默认1  2 动态 3我的点赞4详情
    },
    showComment: {
      type: Boolean,
      default: false
    },
    showAreaTip: {
      // 显示场地免费提示
      type: Boolean,
      default: false
    },
    multipleSize: {
      type: String,
      default: "206rpx"
    }
  },
  data() {
    return {
      praise: common_assets.praise,
      praiseFill: common_assets.praiseFill$1,
      comment: common_assets.comment,
      commentFill: common_assets.commentFill,
      share: common_assets.share,
      hot: common_assets.hot,
      gjj: common_assets.gjj,
      yiji: common_assets.yiji,
      erji: common_assets.erji,
      star: common_assets.star,
      starFill: common_assets.starFill,
      rateValue: 0,
      rateDisabled: false
    };
  },
  computed: {
    commentButtonText() {
      return this.item.is_evaluate ? "已评价" : "评价";
    },
    rateText() {
      let scoreMap = {
        1: "非常差",
        2: "差",
        3: "一般",
        4: "满意",
        5: "非常满意"
      };
      return scoreMap[Number(this.rateValue)] || "";
    },
    tipText() {
      let title = this.item.is_free == 1 ? "场地免费" : "场地收费";
      if (this.item.is_free == 2) {
        title += `:${this.item.is_free_note}`;
      }
      return title;
    },
    commentPopupTitle() {
      return this.item.is_evaluate ? "总体评价" : "您对该服务活动是否满意？";
    },
    showCommentAddButton() {
      return this.item.is_evaluate == 0;
    },
    showName() {
      var _a;
      return ((_a = this.item.instructor_info) == null ? void 0 : _a.name) || this.item.member_name;
    },
    showAvatar() {
      var _a;
      return ((_a = this.item.instructor_info) == null ? void 0 : _a.avatar) || "";
    },
    formattedText() {
      if (!this.item.text) {
        return "";
      }
      return this.item.text.split("\n").map((line) => ({ name: "p", children: [{ type: "text", text: line }] }));
    },
    showImageAlbum() {
      return this.item.images ? this.item.images.map((e) => e.full_url) : [];
    },
    likeIcon() {
      return this.$store.app.themeIconMapData["LIKE_ICON"];
    },
    commentIcon() {
      return this.$store.app.themeIconMapData["COMMENT_ICON"];
    }
  },
  emits: ["deleteVoluntary", "updateVoluntary"],
  unLoad() {
    utils_storages_uniStorage.uniStorage.remove("ACTIVITYITEM");
  },
  methods: {
    returnText(item, type) {
      if (type == 4) {
        return item.text;
      } else {
        const newText = `${item.text.substr(0, 100)}...`;
        return newText;
      }
    },
    toLocation(item) {
      if (!utils_platform.isMp) {
        window.location.href = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${item.lat},${item.lng};title:${item.address};addr:${item.address}&referer=社体指导员移动端`;
        return;
      }
      common_vendor.index.openLocation({
        latitude: item.lat,
        longitude: item.lng,
        name: item.address,
        address: item.address
      });
    },
    previewImage(index) {
      let urlmap = this.item.images.map((e) => e.full_url);
      common_vendor.index.previewImage({
        urls: urlmap,
        current: index,
        longPressActions: {
          success: function(data) {
            console.log(url);
          },
          fail: function(err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    // 点赞
    handlePraise() {
      return __async(this, null, function* () {
        if (!utils_storages_uniStorage.uniStorage.get("is_login")) {
          try {
            yield this.$dialog("您还未登录,去登录?", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消"
            });
          } catch (error) {
            console.log(error);
            return;
          }
          common_vendor.index.navigateTo({
            url: "/pages/login/index"
          });
          return;
        }
        if (this.item.status != 2) {
          return this.$toast("资源未发布,不能点赞");
        }
        this.item.is_love = !this.item.is_love;
        const cancel = this.item.is_love ? 1 : 2;
        const loveNum = Number(this.item.love || 0);
        this.item.love = this.item.is_love ? loveNum + 1 : loveNum - 1;
        const hotNum = Number(this.item.hot || 0);
        this.item.hot = this.item.is_love ? hotNum + 5 : hotNum - 5;
        const res = yield this.$api.voluntaryActivityBehavior({
          voluntary_activity_id: this.item.voluntary_activity_id,
          cancel
        });
        if (res.code == 200) {
          this.$emit("updateVoluntary", this.item);
        } else {
          this.$toast(res.message);
        }
      });
    },
    // 评论
    handleComment() {
      return __async(this, null, function* () {
        if (!utils_storages_uniStorage.uniStorage.get("is_login")) {
          try {
            yield this.$dialog("您还未登录,去登录?", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消"
            });
          } catch (error) {
            console.log(error);
            return;
          }
          common_vendor.index.navigateTo({
            url: "/pages/login/index"
          });
          return;
        }
        if (this.item.is_evaluate == 1) {
          this.getCommentDetail();
        }
        this.$refs["addUserPopup"].open();
        this.$nextTick(() => {
          this.$refs["rateRef"].getRateItemRect();
          this.$refs["rateRef"].getRateIconWrapRect();
        });
      });
    },
    closeComment() {
      this.$refs["addUserPopup"].close();
    },
    changeRate(value) {
      console.log(value);
      this.rateValue = value;
    },
    // 提交评论
    handleSubmitComment() {
      return __async(this, null, function* () {
        if (this.rateValue == 0) {
          return this.$toast("请选择评分");
        }
        this.rateDisabled = true;
        const res = yield this.$api.evaluateAdd({
          voluntary_activity_id: this.item.voluntary_activity_id,
          star_level: this.rateValue
        });
        if (res.code == 200) {
          this.$toast("评价成功");
          this.item.is_evaluate = true;
          this.closeComment();
          this.getCommentDetail();
        } else {
          this.$toast(res.message);
        }
        this.rateDisabled = false;
      });
    },
    // 获取评论详情
    getCommentDetail() {
      return __async(this, null, function* () {
        let res = yield this.$api.evaluateGet({
          voluntary_activity_id: this.item.voluntary_activity_id
        });
        this.rateDisabled = true;
        this.rateValue = res.data.star_level || 0;
      });
    },
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, { labelKey: type });
    },
    getClass(status) {
      let styleClass = "";
      switch (status) {
        case 1:
          styleClass = "warning";
          break;
        case 2:
          styleClass = "success";
          break;
        case 3:
          styleClass = "info";
          break;
        default:
          styleClass = "warning";
          break;
      }
      return styleClass;
    },
    handleClick(item) {
      if (this.type == 4) {
        return;
      }
      if (this.type != 3) {
        common_vendor.index.navigateTo({
          url: "/pages-sub/activityDetail/index?voluntary_activity_id=" + item.voluntary_activity_id
        });
      }
    },
    handleDel() {
      return __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "提示",
          confirmText: "确定",
          content: "确定删除本条动态吗？删除后不可恢复",
          success: (e) => __async(this, null, function* () {
            if (e.confirm) {
              const res = yield this.$api.deleteVoluntaryActivity({
                voluntary_activity_id: this.item.voluntary_activity_id
              });
              if (res.code == 200) {
                this.$emit("deleteVoluntary", true);
              } else {
                this.$toast(res.message);
              }
            } else if (e.cancel) {
              console.log("用户点击取消");
            }
          })
        });
      });
    },
    handleShowTip() {
      common_vendor.index.showToast({
        icon: "none",
        title: "场地费用与平台无关，需要与指导员沟通具体金额"
      });
    }
  },
  watch: {},
  // 组件周期函数--监听组件挂载完毕
  mounted() {
  },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {
  },
  // 组件周期函数--监听组件数据更新之后
  updated() {
  },
  // 组件周期函数--监听组件激活(显示)
  activated() {
  },
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {
  },
  // 组件周期函数--监听组件销毁之前
  beforeUnmount() {
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _component_LevelIcon = common_vendor.resolveComponent("LevelIcon");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_album2 = common_vendor.resolveComponent("uv-album");
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_avatar2 + _component_LevelIcon + _easycom_uv_icon2 + _easycom_uv_album2 + _easycom_uv_rate2 + _component_bottomButton + _easycom_uv_popup2)();
}
const _easycom_uv_avatar = () => "../../../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_album = () => "../../../../node-modules/@climblee/uv-ui/components/uv-album/uv-album.js";
const _easycom_uv_rate = () => "../../../../node-modules/@climblee/uv-ui/components/uv-rate/uv-rate.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_icon + _easycom_uv_album + _easycom_uv_rate + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return common_vendor.e({
    a: common_vendor.p({
      customStyle: {
        marginRight: "24rpx",
        width: "80rpx",
        height: "80rpx",
        borderRadius: "50%",
        flexShrink: 0
      },
      src: $options.showAvatar
    }),
    b: common_vendor.t($options.showName),
    c: common_vendor.p({
      level: (_a = $props.item.instructor_info) == null ? void 0 : _a.level
    }),
    d: common_vendor.t($props.item.startTime),
    e: $props.type == 2
  }, $props.type == 2 ? {
    f: common_vendor.t($props.item.status_str),
    g: common_vendor.n($options.getClass($props.item.status))
  } : {
    h: common_vendor.p({
      name: $data.hot,
      width: "18",
      height: "22"
    }),
    i: common_vendor.t($props.item.hot)
  }, {
    j: common_vendor.o(($event) => $options.handleClick($props.item)),
    k: $options.formattedText,
    l: common_vendor.o(($event) => $options.handleClick($props.item)),
    m: $options.showImageAlbum.length > 0
  }, $options.showImageAlbum.length > 0 ? {
    n: common_vendor.p({
      urls: $options.showImageAlbum,
      space: "16rpx",
      multipleSize: $props.multipleSize,
      singleSize: "220rpx",
      previewFullImage: $props.type === 4
    })
  } : {}, {
    o: common_vendor.o(($event) => $options.handleClick($props.item)),
    p: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    q: common_vendor.t($props.item.address),
    r: common_vendor.o(($event) => $options.toLocation($props.item)),
    s: $props.showAreaTip
  }, $props.showAreaTip ? {
    t: common_vendor.t($options.tipText),
    v: common_vendor.p({
      name: "info-circle",
      color: "#A5ADBA",
      size: "16"
    }),
    w: common_vendor.o((...args) => $options.handleShowTip && $options.handleShowTip(...args))
  } : {}, {
    x: common_vendor.t($props.item.join_num),
    y: common_vendor.p({
      name: $props.item.is_love ? $options.likeIcon : $data.praise,
      size: "20"
    }),
    z: common_vendor.t($props.item.love || 0),
    A: common_vendor.o((...args) => $options.handlePraise && $options.handlePraise(...args)),
    B: $props.showComment
  }, $props.showComment ? {
    C: common_vendor.p({
      name: $props.item.is_evaluate ? $options.commentIcon : $data.comment,
      size: "20"
    }),
    D: common_vendor.t($options.commentButtonText),
    E: common_vendor.o((...args) => $options.handleComment && $options.handleComment(...args))
  } : {}, {
    F: $props.type == 2
  }, $props.type == 2 ? {
    G: common_vendor.p({
      name: "trash",
      color: "#A5ADBA",
      size: "23"
    }),
    H: common_vendor.o((...args) => $options.handleDel && $options.handleDel(...args))
  } : {}, {
    I: common_vendor.p({
      name: "close"
    }),
    J: common_vendor.o((...args) => $options.closeComment && $options.closeComment(...args)),
    K: common_vendor.t($options.commentPopupTitle),
    L: common_vendor.sr("rateRef", "8c116436-11,8c116436-9"),
    M: common_vendor.o($options.changeRate),
    N: common_vendor.p({
      value: $data.rateValue,
      size: "48rpx",
      activeIcon: $data.starFill,
      inactiveIcon: $data.star
    }),
    O: common_vendor.t($options.rateText),
    P: $options.showCommentAddButton
  }, $options.showCommentAddButton ? {
    Q: common_vendor.o($options.handleSubmitComment),
    R: common_vendor.p({
      type: "primary"
    })
  } : {}, {
    S: common_vendor.sr("addUserPopup", "8c116436-9"),
    T: common_vendor.p({
      mode: "bottom",
      round: 16
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8c116436"]]);
wx.createComponent(Component);
//# sourceMappingURL=ServiceStyleItem.js.map
