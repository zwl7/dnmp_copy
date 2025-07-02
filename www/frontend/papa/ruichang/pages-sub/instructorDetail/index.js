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
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_vendor = require("../../common/vendor.js");
const staticInfoCard = () => "./components/staticInfoCard.js";
const abstractInfoCard = () => "./components/abstractInfoCard.js";
const instructorDetailHeader = () => "./components/instructorDetailHeader.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    staticInfoCard,
    abstractInfoCard,
    instructorDetailHeader
  },
  data() {
    return {
      instructor_id: "",
      instructorInfo: {
        des: ""
      },
      pageType: "level",
      staticData: [
        {
          title: "志愿服务",
          num: "0",
          key: "voluntary_num",
          unit: "次",
          show: true
        },
        {
          title: "服务时长",
          num: "0",
          key: "voluntary_activity_duration",
          unit: "小时",
          show: true
        },
        {
          title: "服务人次",
          num: "0",
          key: "voluntary_service_people_num",
          unit: "人次",
          show: true
        },
        {
          title: "年度排名",
          num: "0",
          key: "rank_num",
          unit: "",
          show: true
        }
      ]
    };
  },
  computed: {
    backgroundImg() {
      return {
        "background-image": `url('${this.$store.app.themeIconMapData["INSTRUCT_BAG_IMG"]}')`
      };
    }
  },
  onLoad(options) {
    this.pageType = this.$store.app.themeType == "SkyBlue" ? "level" : "star";
    if (this.pageType == "star") {
      this.staticData.map((e) => {
        if (e.key === "rank_num") {
          e.show = false;
        }
      });
    }
    this.instructor_id = options.instructor_id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      return __async(this, null, function* () {
        let res = yield this.$api.getWxInstructorDetail({
          post_instructor_id: this.instructor_id
        });
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        let list = JSON.parse(JSON.stringify(this.staticData));
        list.map((item) => {
          if (item.key === "rank_num" && res.data[item.key] > 10 && res.data[item.key] < 1) {
            item.show = false;
          }
          item.num = res.data[item.key];
        });
        this.staticData = list;
        console.log(this.staticData);
        this.instructorInfo = res.data;
      });
    }
  },
  watch: {},
  onShareAppMessage() {
  }
};
if (!Array) {
  const _component_instructorDetailHeader = common_vendor.resolveComponent("instructorDetailHeader");
  const _component_abstractInfoCard = common_vendor.resolveComponent("abstractInfoCard");
  const _component_staticInfoCard = common_vendor.resolveComponent("staticInfoCard");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_instructorDetailHeader + _component_abstractInfoCard + _component_staticInfoCard + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      info: $data.instructorInfo,
      pageType: $data.pageType
    }),
    b: common_vendor.p({
      list: $data.staticData
    }),
    c: common_vendor.p({
      des: $data.instructorInfo.des
    }),
    d: common_vendor.s($options.backgroundImg)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-11b22c0f"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
