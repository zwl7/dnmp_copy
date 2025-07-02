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
const apis_instructorSite_index = require("../../../apis/instructorSite/index.js");
const LevelIcon = () => "../../../components/LevelIcon/index.js";
const RankIcon = () => "../../../components/LevelIcon/rank.js";
const _sfc_main = {
  name: "InstructorSiteItem",
  components: {
    LevelIcon,
    RankIcon
  },
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    showTypeIcon() {
      let statusMap = {
        1: {
          text: "待审核",
          type: "warning"
        },
        2: {
          text: "审核通过",
          type: "success"
        },
        3: {
          text: "驳回",
          type: "error"
        }
      };
      return statusMap[this.info.join_status] || {
        text: "未知",
        type: "info"
      };
    },
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
    },
    tagList() {
      return this.info.tag_ids_str ? this.info.tag_ids_str.split(",") : [];
    },
    showImage() {
      return this.info.images_array && this.info.images_array.length > 0 ? this.info.images_array[0] : "https://cdn-static.papa.com.cn/social/site-default.png";
    },
    getClass() {
      if (this.info.rank_num < 4) {
        return "rank_" + this.info.rank_num;
      } else {
        return "rank_4";
      }
    },
    showRank() {
      return this.info.rank_num < 10;
    }
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, {
        labelKey: type
      });
    },
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/instructorSite/detail?instructor_site_id=" + this.info.instructor_site_id
      });
    },
    handleQuit() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要取消加入吗？",
        showCancel: true,
        success: ({ confirm, cancel }) => {
          if (confirm) {
            this.handleQuitConfirm();
          }
        }
      });
    },
    handleQuitConfirm() {
      return __async(this, null, function* () {
        let params = {
          instructor_site_id: this.info.instructor_site_id,
          cancel: 2
        };
        let res = yield apis_instructorSite_index.joinOrQuitInstructorSite(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        this.$toast("取消加入成功");
        this.$emit("refresh");
      });
    },
    handleJoinSite() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth({ needReal: true });
        if (!flag) {
          return;
        }
        common_vendor.index.showModal({
          title: "提示",
          content: "加入站点后可在站点指导员列表中显示个人信息，您确定加入站点吗？",
          showCancel: true,
          success: ({ confirm, cancel }) => {
            if (confirm) {
              this.handleJoinSiteConfirm();
            }
          }
        });
      });
    },
    handleJoinSiteConfirm() {
      return __async(this, null, function* () {
        let params = {
          instructor_site_id: this.info.instructor_site_id,
          cancel: 1
        };
        let res = yield apis_instructorSite_index.joinOrQuitInstructorSite(params);
        if (res.code != 200) {
          this.$toast(res.message);
          return;
        }
        common_vendor.index.showToast({
          title: "提交成功",
          icon: "none"
        });
        this.$emit("refresh");
      });
    }
  }
};
if (!Array) {
  const _component_RankIcon = common_vendor.resolveComponent("RankIcon");
  const _component_paTag = common_vendor.resolveComponent("paTag");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_component_RankIcon + _component_paTag + _easycom_uv_icon2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.info.name),
    b: $props.info.rank
  }, $props.info.rank ? {
    c: common_vendor.p({
      rank: $props.info.rank
    })
  } : {}, {
    d: $options.showRank
  }, $options.showRank ? {
    e: common_vendor.t($props.info.rank_num),
    f: common_vendor.n($options.getClass)
  } : {}, {
    g: $options.showImage,
    h: common_vendor.t($props.info.site_type_str),
    i: common_vendor.f($options.tagList.slice(0, 5), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex,
        c: "930a3fa1-1-" + i0
      };
    }),
    j: $options.tagList.length > 5
  }, $options.tagList.length > 5 ? {} : {}, {
    k: common_vendor.t($props.info.voluntary_num),
    l: common_vendor.t($props.info.activity_duration),
    m: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    n: common_vendor.t($props.info.detail_address ? $props.info.detail_address : "暂无地址"),
    o: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-930a3fa1"]]);
wx.createComponent(Component);
//# sourceMappingURL=InstructorSiteItem.js.map
