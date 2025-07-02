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
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const _sfc_main = {
  data() {
    return {
      recordData: [],
      list1: [
        {
          value: 0,
          name: "全部"
        },
        {
          value: 1,
          name: "待审核"
        },
        {
          value: 2,
          name: "通过"
        },
        {
          value: 3,
          name: "拒绝"
        }
      ],
      pickTab: 0
    };
  },
  computed: {
    activitedColor() {
      return this.$store.app.themeConfig["--hubei-primary"];
    }
  },
  onUnload() {
    utils_storages_uniStorage.uniStorage.remove("updated");
  },
  onShow() {
    let refresh = utils_storages_uniStorage.uniStorage.get("updated");
    if (refresh) {
      this.queryList(1, 10);
    }
  },
  methods: {
    toDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pages-sub/trainApply/detail?train_activity_apply_id=${item.train_activity_apply_id}&train_activity_id=${item.train_activity_id}`
      });
    },
    getColorStyle(type, status) {
      return this.$dict.getDictLabel("statusColor", status, { labelKey: type });
    },
    handleStatus(item) {
      this.pickTab = item.value;
      this.queryList(1, 10);
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", this.$refs);
        let params = {
          page: pageNo,
          size: pageSize
        };
        let status = this.pickTab;
        console.log(status);
        if (status != 0 && status) {
          params.status = status;
        }
        let res = yield this.$api.getWxTrainActivityApplyList(params);
        if (res.code == 200) {
          let data = res.data.list;
          data = data.map((item) => {
            return __spreadValues({
              // title: item.province_str + item.city_str + item.county_str + item.promote_level_str + (item.promote_name || ""),
              applayTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss"),
              projectName: item.promote_tag_ids_arr.map((tItem) => {
                return tItem.tag_id_str;
              }).toString()
            }, item);
          });
          this.recordData = data;
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(this.recordData);
        } else {
          this.$toast(res.message);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_tags2 = common_vendor.resolveComponent("uv-tags");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _easycom_uv_tags2 + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_tags = () => "../../node-modules/@climblee/uv-ui/components/uv-tags/uv-tags.js";
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_tags + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleStatus),
    b: common_vendor.p({
      list: $data.list1,
      scrollable: false,
      lineColor: $options.activitedColor
    }),
    c: common_vendor.f($data.recordData, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.promote_name),
        b: "e6691b57-3-" + i0 + ",e6691b57-1",
        c: common_vendor.p({
          text: $options.getColorStyle("label", item.status),
          type: $options.getColorStyle("color", item.status),
          plain: true,
          shape: "circle",
          size: "mini"
        }),
        d: common_vendor.t(item.projectName),
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.id_card),
        g: common_vendor.t(item.applayTime),
        h: item,
        i: common_vendor.o(($event) => $options.toDetail(item), item)
      };
    }),
    d: common_vendor.sr("pagingRef", "e6691b57-1,e6691b57-0"),
    e: common_vendor.o($options.queryList),
    f: common_vendor.o(($event) => $data.recordData = $event),
    g: common_vendor.p({
      ["auto-height"]: true,
      ["empty-view-text"]: "暂无内容",
      ["empty-view-img"]: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无内容.png",
      ["empty-view-img-style"]: {
        width: "160px",
        height: "160px"
      },
      modelValue: $data.recordData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e6691b57"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
