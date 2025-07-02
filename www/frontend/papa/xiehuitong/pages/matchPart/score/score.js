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
const apis_match = require("../../../apis/match.js");
const common_vendor = require("../../../common/vendor.js");
const scoreList = () => "./components/scoreList.js";
const navBar = () => "../../../components/navBar.js";
const _sfc_main = {
  components: {
    scoreList,
    navBar
  },
  data() {
    return {
      contest_id: "",
      small_project_id: "",
      scoreDataList: [],
      groupColumns: [],
      projectColumns: [],
      selectGroupValue: "",
      selectprojectValue: "",
      selectGroupTitle: "分组",
      selectProjectTitle: "项目"
    };
  },
  computed: {
    showEmpty() {
      return this.scoreDataList.length == 0;
    }
  },
  watch: {
    selectprojectValue: {
      handler(val) {
        if (val) {
          this.small_project_id = val;
          this.getScoreList();
        } else {
          this.scoreDataList = [];
        }
      },
      immediate: true
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.small_project_id = options.small_project_id;
      this.contest_id = options.contest_id;
      yield this.getGroupList();
    });
  },
  methods: {
    handleShowPoup(type) {
      if (type == "group") {
        this.$refs.groupPicker.open();
      }
      if (type == "project") {
        this.$refs.projectPicker.open();
      }
    },
    groupConfirm(e) {
      this.projectColumns = e.value.length > 0 ? [e.value[0].small_project] : [];
      this.selectGroupValue = e.value.length > 0 ? e.value[0].value : "";
      this.selectGroupTitle = e.value.length > 0 ? e.value[0].label : "分组";
      if (e.value[0].small_project.length) {
        this.selectProjectTitle = e.value[0].small_project[0].label;
        this.selectprojectValue = e.value[0].small_project[0].value;
      } else {
        this.selectProjectTitle = "项目";
        this.selectprojectValue = "";
      }
    },
    projectConfirm(e) {
      this.selectprojectValue = e.value.length > 0 ? e.value[0].value : "";
      this.selectProjectTitle = e.value.length > 0 ? e.value[0].label : "项目";
    },
    getGroupList() {
      return __async(this, null, function* () {
        const param = {
          contest_id: this.contest_id,
          page: 1,
          size: 100
        };
        const res = yield apis_match.getGroupProjectList(param);
        let { data, code } = res;
        if (code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let optionsList = [];
        res.data.list.map((e) => {
          let small_project_list = [];
          if (e.small_project) {
            small_project_list = e.small_project.map((c) => {
              return { label: c.name, value: c.small_project_id };
            });
          }
          let obj = {
            label: e.name,
            value: e.group_id,
            small_project: small_project_list
          };
          optionsList.push(obj);
        });
        if (optionsList.length > 0) {
          this.groupColumns = [optionsList];
          this.selectGroupTitle = optionsList[0].label;
          this.selectGroupValue = optionsList[0].value;
          let small_project = optionsList.length > 0 ? optionsList[0].small_project : [];
          this.projectColumns = [small_project];
          if (small_project.length > 0) {
            this.selectProjectTitle = small_project[0].label;
            this.selectprojectValue = small_project[0].value;
          }
        }
      });
    },
    getScoreList() {
      return __async(this, null, function* () {
        let res = yield apis_match.getContestScore({
          small_project_id: this.small_project_id,
          page: 1,
          size: 100
        });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.scoreDataList = res.data.list;
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_scoreList = common_vendor.resolveComponent("scoreList");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _component_empty + _component_scoreList + _easycom_uv_picker2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_picker = () => "../../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "",
      backColor: "#333",
      showBack: true
    }),
    b: common_vendor.t($data.selectGroupTitle),
    c: common_vendor.p({
      name: "arrow-down",
      color: "#646566",
      size: "12px"
    }),
    d: common_vendor.o(($event) => $options.handleShowPoup("group")),
    e: common_vendor.t($data.selectProjectTitle),
    f: common_vendor.p({
      name: "arrow-down",
      color: "#646566",
      size: "12px"
    }),
    g: common_vendor.o(($event) => $options.handleShowPoup("project")),
    h: $options.showEmpty
  }, $options.showEmpty ? {} : {
    i: common_vendor.p({
      list: $data.scoreDataList
    })
  }, {
    j: common_vendor.sr("groupPicker", "1f3454e0-6,1f3454e0-0"),
    k: common_vendor.o($options.groupConfirm),
    l: common_vendor.p({
      columns: $data.groupColumns,
      keyName: "label"
    }),
    m: common_vendor.sr("projectPicker", "1f3454e0-7,1f3454e0-0"),
    n: common_vendor.o($options.projectConfirm),
    o: common_vendor.p({
      columns: $data.projectColumns,
      keyName: "label"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
