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
const apis_match = require("../../../apis/match.js");
const bottomButton = () => "../../../components/bottomButton.js";
const roundButton = () => "../components/roundButton.js";
const ceilLine = () => "../components/ceilLine.js";
const commonTeamUserList = () => "../components/commonTeamUserList.js";
const _sfc_main = {
  components: {
    bottomButton,
    roundButton,
    ceilLine,
    commonTeamUserList
  },
  data() {
    return {
      value: "",
      inputCustomStyle: {
        height: "100rpx",
        backgroundColor: "#fafbfd",
        boxSizing: "border-box",
        border: "none"
      },
      addTeamForm: {
        name: ""
      },
      member_apply_team_id: "",
      teamLeaderList: [],
      //领队
      teamCoachList: [],
      //教练
      teamUserList: []
      //用户
    };
  },
  computed: {
    showTeamLeaderAdd() {
      return this.teamLeaderList.length < 1;
    },
    showTeamCoachAdd() {
      return true;
    },
    showTeamUserAdd() {
      return true;
    }
  },
  onLoad(options) {
    this.member_apply_team_id = options.member_apply_team_id;
    this.getTeamBaseInfo(this.member_apply_team_id);
  },
  methods: {
    getTeamBaseInfo(id) {
      return __async(this, null, function* () {
        let res = yield apis_match.getMemberApplyTeam({ member_apply_team_id: id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.addTeamForm.name = res.data.name;
        this.coach_ids = res.data.coach_ids;
        this.leader_id = res.data.leader_id;
        this.personnel_ids = res.data.personnel_ids;
        this.teamCoachList = this.formatListData(res.data.coachs);
        this.teamLeaderList = res.data.leader ? [res.data.leader] : [];
        this.teamUserList = this.formatListData(res.data.personnels);
      });
    },
    handleDetail(params) {
      let info = params.data;
      let url = `/pages/matchPart/commonUserDetail/commonUserDetail?member_apply_personnel_id=${info.member_apply_personnel_id}`;
      common_vendor.index.navigateTo({
        url
      });
    },
    formatListData(data) {
      if (!(data instanceof Array)) {
        return [];
      }
      return data.filter((e) => e);
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _component_commonTeamUserList = common_vendor.resolveComponent("commonTeamUserList");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_input2 + _component_commonTeamUserList + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
if (!Math) {
  _easycom_uv_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(common_vendor.m(($event) => $data.addTeamForm.name = $event, {
      trim: true
    }, true)),
    b: common_vendor.p({
      placeholder: "请输入内容",
      customStyle: $data.inputCustomStyle,
      modelValue: $data.addTeamForm.name
    }),
    c: common_vendor.o($options.handleDetail),
    d: common_vendor.p({
      userList: $data.teamLeaderList,
      isEdit: false
    }),
    e: common_vendor.o($options.handleDetail),
    f: common_vendor.p({
      userList: $data.teamCoachList,
      isEdit: false
    }),
    g: common_vendor.o($options.handleDetail),
    h: common_vendor.p({
      userList: $data.teamUserList,
      isEdit: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1105cf16"]]);
wx.createPage(MiniProgramPage);
