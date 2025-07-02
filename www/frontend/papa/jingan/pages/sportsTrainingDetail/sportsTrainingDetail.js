"use strict";
var __defProp = Object.defineProperty;
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
const common_assets = require("../../common/assets.js");
const apis_common = require("../../apis/common.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const utils_util = require("../../utils/util.js");
const mixins_themeMixins = require("../../mixins/themeMixins.js");
const navBar = () => "../../components/navBar/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const coachItem = () => "./components/coachItem.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    bottomButton,
    coachItem
  },
  data() {
    return {
      previewImage: utils_util.previewImage,
      shareIcon: common_assets.share,
      defaultUrl: common_assets.defaultUrl,
      phoneFill: common_assets.phoneFill,
      info: {},
      form: {},
      isCollect: false,
      coachlist: []
    };
  },
  onUnload() {
  },
  onLoad(options) {
    if (options.organization_id) {
      let form = {
        organization_id: options.organization_id
      };
      this.form = __spreadValues({}, form);
      this.getDetail();
    }
    this.share = {
      title: "",
      withShareTicket: true
    };
  },
  computed: {
    showImageUrl() {
      return this.info.img_str ? this.info.img_str : common_assets.defaultUrl;
    }
  },
  methods: {
    handleCoachClick(item) {
      common_vendor.index.navigateTo({
        url: "/pages/coachDetail/coachDetail?organization_coach_id=" + item.organization_coach_id
      });
    },
    toLocation() {
      this.$toLocation(this.info);
    },
    toPhone() {
      this.$callPhone(this.info);
    },
    toCollect() {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        this.starStatus = this.info.is_collect ? 2 : 1;
        if (this.info.is_collect == 1) {
          common_vendor.index.showToast({
            type: "fail",
            title: "取消收藏"
          });
          this.isCollect = false;
        } else {
          common_vendor.index.showToast({
            type: "success",
            title: "收藏成功"
          });
          this.isCollect = true;
        }
        let params = {
          type_id: 1,
          type: 2,
          small_type_id: this.info.type_id,
          topic_id: this.form.site_id,
          status: this.isCollect ? 1 : 2
        };
        yield apis_common.addWxCollect(params);
      }), 1e3);
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_common.getWxOrganizationDetail(this.form);
        let coachListData = yield apis_common.getListCoach({
          organization_id: this.form.organization_id,
          page: 1,
          size: 999
        });
        if (coachListData.code == 200) {
          this.coachlist = coachListData.data.list;
        }
        if (res.code == 200) {
          res.data.des = this.$formatRichText(res.data.des, "暂无内容");
          res.data.phone = res.data.contact_phone;
          this.info = res.data;
          this.isCollect = res.data.is_collect === 1;
          this.share.title = res.data.name;
        }
      });
    },
    apply(form) {
      uniStorage.set("APPLYFORM", {
        trainId: form.train_activity_id,
        title: form.promote_name
      });
      common_vendor.index.navigateTo({
        url: `/pages/trainApply/index`
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_coachItem = common_vendor.resolveComponent("coachItem");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _easycom_uni_icons2 + _component_coachItem + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_safe_bottom = () => "../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uni_icons + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "体育培训",
      titleColor: "#333",
      backColor: "#333",
      showBack: true
    }),
    b: common_vendor.f($data.info.images_url, (item, index, i0) => {
      return {
        a: item || $data.defaultUrl,
        b: index
      };
    }),
    c: ($data.info.images_url || []).length > 1,
    d: _ctx.themePrimaryColorGetter,
    e: common_vendor.t($data.info.name),
    f: common_vendor.f($data.info.sport_tag_str, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    })
  }, {}, {}, {
    k: common_vendor.p({
      name: "map",
      color: "#A5ADBA",
      size: "16"
    }),
    l: common_vendor.t($data.info.address),
    m: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-dianhua",
      color: _ctx.themePrimaryColorGetter,
      size: "20"
    }),
    n: common_vendor.o(($event) => $options.toPhone($data.info)),
    o: common_vendor.o(($event) => $options.toLocation($data.info)),
    p: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-locationfill",
      size: "20",
      color: _ctx.themePrimaryColorGetter
    }),
    q: $data.info.des,
    r: !$data.info.school_running_permit && !$data.info.sports_business_permit && !$data.info.high_risk_project
  }, !$data.info.school_running_permit && !$data.info.sports_business_permit && !$data.info.high_risk_project ? {} : {}, {
    s: $data.info.school_running_permit
  }, $data.info.school_running_permit ? {
    t: $data.info.school_running_permit,
    v: common_vendor.o(($event) => $data.previewImage($data.info.school_running_permit))
  } : {}, {
    w: $data.info.sports_business_permit
  }, $data.info.sports_business_permit ? {
    x: $data.info.sports_business_permit,
    y: common_vendor.o(($event) => $data.previewImage($data.info.sports_business_permit))
  } : {}, {
    z: $data.info.high_risk_project
  }, $data.info.high_risk_project ? {
    A: $data.info.high_risk_project,
    B: common_vendor.o(($event) => $data.previewImage($data.info.high_risk_project))
  } : {}, {
    C: $data.coachlist.length > 0
  }, $data.coachlist.length > 0 ? {
    D: common_vendor.f($data.coachlist, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleCoachClick(item), index),
        b: "3f5358dd-7-" + i0 + ",3f5358dd-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    })
  } : {}, {
    E: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-lianjietiaozhuan",
      size: "20"
    }),
    F: common_vendor.o($options.toPhone)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f5358dd"]]);
wx.createPage(MiniProgramPage);
