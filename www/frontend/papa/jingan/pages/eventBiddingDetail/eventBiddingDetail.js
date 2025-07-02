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
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_assets = require("../../common/assets.js");
const navBar = () => "../../components/navBar/index.js";
const CellItem = () => "./components/CellItem.js";
const EventTabDes = () => "./components/EventTabDes.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    CellItem,
    bottomButton,
    EventTabDes
  },
  data() {
    return {
      navColor: "transparent",
      event_plan_id: "",
      event_plan_apply_id: "",
      info: {},
      applyInfo: {},
      isApply: "",
      //是否处于申办中状态 status=3
      isEventApply: false,
      //是否申办过 展示申办信息
      list: [
        {
          label: "申办时间",
          value: "",
          key: "applyTime",
          icon: "/icon-clock.png"
        },
        {
          label: "举办时间",
          value: "",
          key: "time",
          icon: "/icon-clock.png"
        },
        {
          label: "预计每场参加人数",
          value: "",
          key: "num",
          icon: "/icon-people.png"
        },
        {
          label: "预计场次",
          value: "",
          key: "session_num",
          icon: "/icon-date.png"
        },
        {
          label: "主办单位",
          value: "",
          key: "main_unit",
          icon: "/icon-org.png"
        },
        {
          label: "比赛地点",
          value: "",
          key: "address",
          icon: "/icon-location.png"
        }
      ],
      list2: [
        {
          label: "申办人类型",
          key: "type_str",
          value: ""
        },
        {
          label: "申办人姓名",
          key: "name",
          value: ""
        },
        {
          label: "证件类型",
          key: "credentials_type_str",
          value: ""
        },
        {
          label: "证件号码",
          key: "credentials_number",
          value: ""
        },
        {
          label: "联系人",
          key: "contacts_name",
          value: ""
        },
        {
          label: "联系电话",
          key: "contacts_phone",
          value: ""
        },
        {
          label: "备注",
          key: "des",
          value: ""
        }
      ]
    };
  },
  computed: {
    showBtn() {
      return this.isApply && !this.isEventApply;
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      if (options.event_plan_apply_id && options.event_plan_id) {
        this.event_plan_id = options.event_plan_id;
        this.event_plan_apply_id = options.event_plan_apply_id;
        yield this.getDetail();
        yield this.getApplyDetail();
      }
      if (options.event_plan_id && !options.event_plan_apply_id) {
        this.event_plan_id = options.event_plan_id;
        yield this.getDetail();
        yield this.getIsApplyEvent();
      }
      yield this.getIsApplyEvent();
    });
  },
  methods: {
    getBg(status) {
      const bgMap = {
        3: "#6DB4FF",
        2: "#FAAD14",
        4: "#C8C9CC"
      };
      return bgMap[status] || "#6DB4FF";
    },
    getDetail() {
      return __async(this, null, function* () {
        const res = yield apis_jxBidEvent.getWxEventPlanInfo({ event_plan_id: this.event_plan_id });
        if (res.code == 200) {
          if (res.data.apply_start_time) {
            res.data.applyTime = `${res.data.apply_start_time.slice(0, 10)}至${res.data.apply_end_time.slice(0, 10)}`;
            res.data.time = `${res.data.start_time.slice(0, 10)}至${res.data.end_time.slice(0, 10)}`;
          }
          this.info = res.data;
          if (res.data.status == 3) {
            this.isApply = true;
          }
          this.list.forEach((item) => {
            if (item.key in res.data) {
              item.value = res.data[item.key] || "";
            }
          });
        } else {
          this.$toast(res.message, { type: "warning" });
        }
      });
    },
    getIsApplyEvent() {
      return __async(this, null, function* () {
        const res = yield apis_jxBidEvent.isApplyEvent({ event_plan_id: this.event_plan_id });
        if (res.code === 200) {
          this.isEventApply = res.data ? true : false;
          this.event_plan_apply_id = res.data.event_plan_apply_id;
          yield this.getApplyDetail();
        } else {
          this.$toast(res.message, { type: "warning" });
        }
      });
    },
    getApplyDetail() {
      return __async(this, null, function* () {
        if (!this.event_plan_apply_id)
          return;
        const res = yield apis_jxBidEvent.getWxEventApplyInfo({ event_plan_apply_id: this.event_plan_apply_id });
        if (res.code == 200) {
          this.applyInfo = res.data;
          this.list2.forEach((item2) => {
            if (item2.key in res.data) {
              item2.value = res.data[item2.key];
            }
          });
        } else {
          this.$toast(res.message, { type: "warning" });
        }
      });
    },
    handleBid() {
      common_vendor.index.navigateTo({
        url: "/pages/applyHoldEvent/applyHoldEvent?event_plan_id=" + this.info.event_plan_id
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_CellItem = common_vendor.resolveComponent("CellItem");
  const _component_EventTabDes = common_vendor.resolveComponent("EventTabDes");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_CellItem + _component_EventTabDes + _component_bottomButton + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "赛事申办详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_assets._imports_0$2,
    c: common_vendor.t($data.info.name),
    d: common_vendor.t($data.info.status_str),
    e: $options.getBg($data.info.status),
    f: common_vendor.t($data.info.level_str),
    g: common_vendor.t($data.info.sport_tag_str),
    h: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "933f97a2-2-" + i0 + ",933f97a2-0",
        b: common_vendor.p({
          label: item.label,
          ["label-color"]: "#7A869A",
          value: item.value,
          ["value-color"]: "#253858",
          icon: _ctx.$cdnUrl(item.icon)
        }),
        c: index
      };
    }),
    i: $data.isEventApply
  }, $data.isEventApply ? {
    j: common_vendor.f($data.list2, (item, index, i0) => {
      return {
        a: "933f97a2-3-" + i0 + ",933f97a2-0",
        b: common_vendor.p({
          label: item.label,
          value: item.value,
          ["min-width"]: "140rpx"
        }),
        c: index
      };
    })
  } : {}, {
    k: common_vendor.p({
      info: $data.info
    }),
    l: $options.showBtn
  }, $options.showBtn ? {
    m: common_vendor.o($options.handleBid),
    n: common_vendor.p({
      loadingText: "提交中"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-933f97a2"]]);
wx.createPage(MiniProgramPage);
