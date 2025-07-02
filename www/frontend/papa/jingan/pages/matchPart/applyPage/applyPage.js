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
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const apis_match = require("../../../apis/match.js");
const components_paForm_formatData = require("../../../components/paForm/formatData.js");
const common_vendor = require("../../../common/vendor.js");
const navBar = () => "../../../components/navBar/index.js";
const bottomButton = () => "../../../components/bottomButton.js";
const ceilLine = () => "../components/ceilLine.js";
const roundButton = () => "../components/roundButton.js";
const commonTeamDialog = () => "./components/commonTeamDialog.js";
const paForm = () => "../../../components/paForm/paForm.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    ceilLine,
    bottomButton,
    roundButton,
    commonTeamDialog,
    paForm
  },
  data() {
    return {
      navColor: "transparent",
      headerCustomStyle: {
        background: "#F2F8FF",
        borderRadius: "16rpx"
      },
      headerTitleCustomStyle: {
        color: "#409EFF"
      },
      apply_quantity: "",
      group_id: "",
      small_project_id: "",
      apply_type: "",
      //1 个人赛  2 团体赛
      free: "",
      formRules: {},
      formValue: {},
      formOptions: []
    };
  },
  onLoad(options) {
    console.log(options);
    this.apply_quantity = options.apply_quantity;
    this.group_id = options.group_id;
    this.small_project_id = options.small_project_id;
    this.apply_type = options.apply_type;
    this.free = options.free == "true" ? true : false;
    this.getCustomApplyInfo();
  },
  methods: {
    handleSelectTeam() {
      this.$refs["commonTeamDialogRef"].open();
    },
    // 获取自定义表单信息
    getCustomApplyInfo() {
      return __async(this, null, function* () {
        const params = {
          contest_id: this.group_id,
          project_id: this.small_project_id
        };
        let res = yield apis_match.getApplyFromInfo(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(res.data);
        this.formValue = formatBackDataClass.getDefaultData();
        this.formOptions = formatBackDataClass.getDataList();
        this.formRules = formatBackDataClass.getRules();
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_commonTeamDialog = common_vendor.resolveComponent("commonTeamDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_ceilLine + _easycom_paForm2 + _component_bottomButton + _component_commonTeamDialog + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../../components/paForm/paForm.js";
if (!Math) {
  _easycom_paForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "赛事详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.apply_type == 2
  }, $data.apply_type == 2 ? {
    c: common_vendor.o($options.handleSelectTeam),
    d: common_vendor.p({
      ["is-group"]: true,
      customStyle: $data.headerCustomStyle,
      titleStyle: $data.headerTitleCustomStyle,
      title: "选择团队"
    })
  } : {}, {
    e: $data.apply_type == 1
  }, $data.apply_type == 1 ? {
    f: common_vendor.o($options.handleSelectTeam),
    g: common_vendor.p({
      ["is-group"]: true,
      customStyle: $data.headerCustomStyle,
      titleStyle: $data.headerTitleCustomStyle,
      title: "选择报名人"
    })
  } : {}, {
    h: common_vendor.p({
      value: $data.formValue,
      optionList: $data.formOptions,
      rules: $data.formRules
    }),
    i: common_vendor.p({
      disabled: false
    }),
    j: common_vendor.sr("commonTeamDialogRef", "517a89a8-6,517a89a8-0")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-517a89a8"]]);
wx.createPage(MiniProgramPage);
