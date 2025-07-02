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
const api_instructorSite_index = require("../../../api/instructorSite/index.js");
const InstructorItem = () => "../../../components/InstructorItem/index.js";
const _sfc_main = {
  name: "SiteInstructors",
  components: {
    InstructorItem
  },
  props: {
    siteId: {
      type: String,
      required: true
    },
    join_status: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      list: [],
      defaultAvatar: "/static/images/default-avatar.png"
    };
  },
  computed: {
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    activitedColor() {
      return this.$store.app.themeConfig["hubei-primary"];
    },
    isJoin() {
      return this.join_status === 1;
    }
  },
  created() {
    this.getInstructorList();
  },
  methods: {
    getInstructorList() {
      return __async(this, null, function* () {
        try {
          const res = yield api_instructorSite_index.getSiteinstructorList({
            instructor_site_id: this.siteId,
            page: 1,
            size: 999
          });
          if (res.code != 200) {
            this.$toast(res.message);
            return;
          }
          res.data.list.map((e) => {
            e.total_service_num = e.voluntary_num;
            e.total_service_duration = e.voluntary_activity_duration;
          });
          this.list = res.data.list;
        } catch (error) {
          console.error("获取指导员列表失败:", error);
        }
      });
    },
    joinInstructorSite() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth({ needReal: true });
        console.log(flag);
        if (!flag) {
          return;
        }
        common_vendor.index.showModal({
          title: "提示",
          content: "加入站点后可在站点指导员列表中显示个人信息，您确定加入站点吗？",
          success: (res) => {
            if (res.confirm) {
              this.joinInstructorSiteApi();
            }
          }
        });
      });
    },
    joinInstructorSiteApi() {
      return __async(this, null, function* () {
        let res = yield this.$api.joinOrQuitInstructorSite({
          instructor_site_id: this.siteId,
          cancel: this.isJoin ? 2 : 1
        });
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        this.$toast("加入站点成功");
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_InstructorItem = common_vendor.resolveComponent("InstructorItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_icon2 + _easycom_uv_button2 + _component_InstructorItem + _component_empty)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: "plus",
      size: "14",
      color: $options.activitedColor
    }),
    b: common_vendor.o($options.joinInstructorSite),
    c: common_vendor.p({
      size: "small",
      plain: true,
      shape: "circle",
      type: "primary"
    }),
    d: $data.list.length
  }, $data.list.length ? {
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "a500cf48-2-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a500cf48"]]);
wx.createComponent(Component);
//# sourceMappingURL=SiteInstructors.js.map
