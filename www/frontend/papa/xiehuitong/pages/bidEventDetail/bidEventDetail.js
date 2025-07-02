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
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const common_vendor = require("../../common/vendor.js");
const navBar = () => "../../components/navBar.js";
const paFormDetail = () => "../../components/paForm/paFormDetail.js";
const _sfc_main = {
  components: {
    navBar,
    paFormDetail
  },
  data() {
    return {
      navColor: "transparent",
      navTitle: "",
      event_plan_id: "",
      event_plan_apply_id: "",
      baseFormOptions: [
        {
          label: "赛事名称",
          prop: "name"
        },
        {
          label: "赛事地址",
          prop: "address"
        },
        {
          label: "选择项目",
          prop: "sport_tag_str"
        },
        {
          label: "举办年份",
          prop: "year"
        },
        {
          label: "预计参赛人数",
          prop: "num"
        },
        {
          label: "预计举办开始时间",
          prop: "start_time"
        },
        {
          label: "预计举办结束时间",
          prop: "end_time"
        },
        {
          label: "赛事说明",
          prop: "des"
        },
        {
          label: "备注",
          prop: "remark"
        }
      ],
      applyOptions: [
        {
          label: "申办人类型",
          prop: "type_str"
        },
        {
          label: "申办人姓名",
          prop: "name"
        },
        {
          label: "联系人姓名",
          prop: "contacts_name"
        },
        {
          label: "联系电话",
          prop: "contacts_phone"
        },
        {
          label: "所在地",
          prop: "belong_place_id_str"
        },
        {
          label: "证件照片",
          prop: "images_url",
          type: "image"
        }
      ]
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      if (options.event_plan_id && options.event_plan_apply_id) {
        this.event_plan_id = options.event_plan_id;
        this.event_plan_apply_id = options.event_plan_apply_id;
        yield this.getDetail();
        yield this.getApplyDetail();
      }
    });
  },
  methods: {
    getDetail() {
      return __async(this, null, function* () {
        const res = yield apis_jxBidEvent.getWxEventPlanInfo({
          event_plan_id: this.event_plan_id
        });
        if (res.code == 200) {
          this.baseFormOptions.map((e) => {
            e.value = res.data[e.prop];
          });
        } else {
          this.$toast(res.message, { type: "warning" });
        }
      });
    },
    getApplyDetail() {
      return __async(this, null, function* () {
        const res = yield apis_jxBidEvent.getWxEventApplyInfo({
          event_plan_apply_id: this.event_plan_apply_id
        });
        if (res.code == 200) {
          res.data.images_url = res.data.images_url ? [res.data.images_url] : [];
          res.data.belong_place_id_str = `${res.data.province_str} ${res.data.city_str} ${res.data.county_str}`;
          this.applyOptions.map((e) => {
            e.value = res.data[e.prop];
          });
        } else {
          this.$toast(res.message, { type: "warning" });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_paFormDetail = common_vendor.resolveComponent("paFormDetail");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_paFormDetail + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: $data.navTitle,
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.p({
      optionList: $data.baseFormOptions
    }),
    c: common_vendor.p({
      optionList: $data.applyOptions
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24f0146a"]]);
wx.createPage(MiniProgramPage);
