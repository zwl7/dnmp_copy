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
const apis_home_index = require("../../apis/home/index.js");
const common_vendor = require("../../common/vendor.js");
const TimeLineCard = () => "../../components/TimeLineCard/index.js";
const RatingCard = () => "./components/RatingCard.js";
const _sfc_main = {
  name: "StarRatingRecord",
  components: {
    TimeLineCard,
    RatingCard
  },
  data() {
    return {
      dataList: [
        // {
        //   date: '2024/11/8',
        //   afterLevel: 1,
        //   originalLevel: 2,
        //   score: 66,
        //   reason: '',
        // },
      ],
      dateList: []
    };
  },
  onShow() {
  },
  methods: {
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a, _b;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        let params = {
          page: pageNo,
          size: pageSize,
          is_self: 1
        };
        let res = yield apis_home_index.getWxInstructorStarList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete([]);
          return;
        }
        if (res.code == 200) {
          let dealData = res.data.list.map((item) => {
            let date = item.c_time ? this.$dayjs(item.c_time).format("YYYY/MM/DD") : "";
            let isPush = false;
            if (this.dateList.indexOf(date) === -1) {
              this.dateList.push(date);
              isPush = true;
            }
            let formatObj = {
              date: isPush ? date : "",
              afterLevel: item.new_star,
              originalLevel: item.old_star,
              score: item.score > 100 ? "100+" : item.score,
              reason: item.reason
            };
            return __spreadValues({}, formatObj);
          });
          this.dataList = dealData;
          (_b = this.$refs.pagingRef) == null ? void 0 : _b.complete(dealData);
        }
      });
    },
    change1() {
    }
  }
};
if (!Array) {
  const _component_rating_card = common_vendor.resolveComponent("rating-card");
  const _component_time_line_card = common_vendor.resolveComponent("time-line-card");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_rating_card + _component_time_line_card + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  _easycom_z_paging();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "28c4e408-3-" + i0 + "," + ("28c4e408-2-" + i0),
        b: common_vendor.p({
          data: item
        }),
        c: index,
        d: "28c4e408-2-" + i0 + ",28c4e408-1",
        e: common_vendor.p({
          title: item.date
        })
      };
    }),
    b: common_vendor.sr("pagingRef", "28c4e408-1,28c4e408-0"),
    c: common_vendor.o($options.queryList),
    d: common_vendor.o(($event) => $data.dataList = $event),
    e: common_vendor.p({
      ["empty-view-text"]: "暂无内容",
      ["empty-view-img"]: "/static/images/empty.png",
      ["empty-view-img-style"]: {
        width: "160px",
        height: "160px"
      },
      modelValue: $data.dataList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28c4e408"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
