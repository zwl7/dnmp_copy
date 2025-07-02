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
const utils_util = require("../../../../utils/util.js");
const dateBallItem = () => "../../../matchIndex/components/dateBallItem.js";
const bottomButton = () => "../../../../components/bottomButton.js";
const _sfc_main = {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    projectInfo: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    dateBallItem,
    bottomButton
  },
  watch: {
    projectInfo: {
      handler(val, oldval) {
        if (val && val != oldval) {
          this.formatProjectData(val);
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    smallProjectList() {
      let obj = this.sportsListBase.find((item) => item.group_id == this.currentGroupId);
      return obj ? obj.small_project : [];
    },
    // 当前选中的组别
    currentGroupInfo() {
      let obj = this.sportsListBase.find((item) => item.group_id == this.currentGroupId);
      return obj ? obj : {};
    },
    // 当前选中的小项
    currentProjectInfo() {
      let obj = this.smallProjectList.find((item) => item.small_project_id == this.currentProjectId);
      return obj ? obj : {};
    },
    confirmButtonText() {
      const { max_quantity, quantity } = this.currentProjectInfo;
      return max_quantity <= quantity ? "报名人员已满" : "确定";
    },
    confirmButtonDisabled() {
      const { max_quantity, quantity } = this.currentProjectInfo;
      return max_quantity <= quantity ? true : false;
    }
  },
  data() {
    return {
      sportsListTab: [],
      // 项目组别
      sportsListBase: [],
      //项目原始数据
      currentGroupId: null,
      //当前分组id
      currentProjectId: null
      //当前项目id
    };
  },
  methods: {
    open() {
      this.$refs["popup"].open();
    },
    close() {
      this.$refs["popup"].close();
    },
    // 格式化项目数据
    formatProjectData(data) {
      let _sportsList = [];
      data.forEach((item) => {
        const obj = {
          name: item.name,
          value: item.group_id
        };
        _sportsList.push(obj);
      });
      this.currentGroupId = _sportsList.length > 0 ? _sportsList[0].value : 0;
      this.sportsListTab = _sportsList;
      this.sportsListBase = data;
    },
    //切换tab
    changeGroup(e) {
      this.currentGroupId = e.value;
      this.currentProjectId = null;
    },
    changeProject(e) {
      this.currentProjectId = e.small_project_id;
    },
    handleClickSubmit() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        const {
          max_quantity,
          quantity,
          apply_type,
          apply_quantity,
          contest_id,
          small_project_id,
          price
        } = this.currentProjectInfo;
        ({
          currentProjectId: this.currentProjectId,
          currentGroupId: this.currentGroupId
        });
        if (!this.currentProjectId) {
          this.$showToastNone("请选择组别小项");
          return;
        }
        if (max_quantity <= quantity) {
          this.$showToastNone("该小项报名人数已满");
          return;
        }
        let obj = {
          apply_quantity,
          contest_id: this.currentProjectInfo.contest_id,
          project_id: this.info.project_id,
          group_id: this.currentGroupId,
          small_project_id: this.currentProjectId,
          apply_type,
          free: price === "0.00" ? "true" : "false",
          manage_id: this.info.manage_id,
          insurance_product_id: this.info.insurance_product_id,
          insurance_requirement: this.info.insurance_requirement,
          insurance_switch: this.info.insurance_switch,
          date_start: this.info.date_start,
          date_end: this.info.date_end
        };
        let url = `/pages/matchPart/userApply/userApply?${utils_util.objectToQueryString(obj)}`;
        if (apply_type == 2) {
          url = `/pages/matchPart/teamApply/teamApply?${utils_util.objectToQueryString(obj)}`;
        }
        common_vendor.index.navigateTo({
          url
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_dateBallItem = common_vendor.resolveComponent("dateBallItem");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _component_dateBallItem + _component_bottomButton + _easycom_uv_safe_bottom2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: common_vendor.p({
      info: $props.info,
      showButton: false
    }),
    d: common_vendor.f($data.sportsListTab, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.changeGroup(item), index),
        d: common_vendor.n({
          selected: item.value == $data.currentGroupId
        })
      };
    }),
    e: common_vendor.f($options.smallProjectList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.changeProject(item), index),
        d: common_vendor.n({
          selected: item.small_project_id == $data.currentProjectId
        })
      };
    }),
    f: common_vendor.t($options.confirmButtonText),
    g: common_vendor.o($options.handleClickSubmit),
    h: common_vendor.p({
      disabled: $options.confirmButtonDisabled
    }),
    i: common_vendor.sr("popup", "7a037e9c-0"),
    j: common_vendor.p({
      mode: "bottom",
      round: "16",
      ["custom-style"]: "height: 80vh;"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a037e9c"]]);
wx.createComponent(Component);
