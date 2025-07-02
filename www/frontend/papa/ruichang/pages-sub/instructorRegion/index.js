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
const common_vendor = require("../../common/vendor.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_assets = require("../../common/assets.js");
const ToDoItem = () => "./components/ToDoItem.js";
const LevelIcon = () => "../../components/LevelIcon/index.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    ToDoItem,
    LevelIcon
  },
  data() {
    return {
      navColor: "transparent",
      titleColor: "#333",
      defaultImg: common_assets.defaultAvatar,
      medal: common_assets.Medal,
      voluntary_activity_num: 0,
      activity_duration: 0,
      join_num: 0,
      tagList: ["太极类", "篮球类"],
      functionList: [
        {
          icon: "https://cdn-static.papa.com.cn/social/icon-write.png",
          title: "服务风采发布",
          path: "/pages-sub/releaseDynamic/index",
          num: 0
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/icon-service.png",
          title: "我的服务",
          path: "/pagesSub/sportsService/serviceAssign/talenList",
          num: 0
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/icon-record.png",
          title: "志愿服务记录",
          path: "/pages/tabbar/dynamic/index",
          num: 0
        },
        {
          icon: "https://cdn-static.papa.com.cn/social/icon-location2.png",
          title: "我的站点",
          path: "/pages-sub/instructorSite/my",
          num: 0
        }
      ]
    };
  },
  created() {
    this.getMyVoluntaryData();
  },
  computed: {
    userInfo() {
      return this.$store.user.userInfo;
    },
    themeType() {
      return this.$store.app.themeType;
    },
    showLevel() {
      return this.userInfo.is_auth_instructor && this.themeType == "SkyBlue";
    }
  },
  methods: {
    getMyVoluntaryData() {
      return __async(this, null, function* () {
        let params = {
          member_id: this.$store.user.userInfo.member_id
        };
        let res = yield this.$api.getMyVoluntaryActivityData(params);
        if (res.code == 200) {
          this.voluntary_activity_num = res.data.voluntary_activity_num;
          this.activity_duration = res.data.activity_duration;
          this.join_num = res.data.join_num;
        } else {
          this.$toast(res.message);
        }
      });
    },
    handleClickItem(item) {
      common_vendor.index.navigateTo({
        url: item.path
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_LevelIcon = common_vendor.resolveComponent("LevelIcon");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_LevelIcon + _component_empty + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "社体指导员专区",
      showBack: true,
      fixed: false,
      navColor: $data.navColor,
      titleColor: $data.titleColor,
      backColor: "#333"
    }),
    b: $options.userInfo.avatar,
    c: common_vendor.t($options.userInfo.nick_name),
    d: $options.showLevel
  }, $options.showLevel ? {
    e: common_vendor.p({
      level: $options.userInfo.level
    })
  } : {}, {
    f: common_vendor.f($options.userInfo.tag_ids_arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tag_id_str),
        b: index
      };
    }),
    g: common_vendor.t($data.voluntary_activity_num || 0),
    h: common_vendor.t($data.activity_duration || 0),
    i: common_vendor.t($data.join_num || 0),
    j: common_vendor.f($data.functionList, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $options.handleClickItem(item), index)
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6721982d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
