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
const dateBallItem = () => "../../matchIndex/components/dateBallItem.js";
const matchGroupInfo = () => "./components/matchGroupInfo.js";
const matchUserInfoBox = () => "./components/matchUserInfoBox.js";
const matchTeamUserInfo = () => "./components/matchTeamUserInfo.js";
const matchQrcodeDialog = () => "./components/matchQrcodeDialog.js";
const insuranceCardVue = () => "../../../components/insurance/insuranceCard.js";
const _sfc_main = {
  components: {
    dateBallItem,
    matchGroupInfo,
    matchUserInfoBox,
    matchTeamUserInfo,
    matchQrcodeDialog,
    insuranceCardVue
  },
  data() {
    return {
      contestDetailInfo: {},
      contest_id: "",
      //赛事ID
      apply_id: "",
      //报名id
      teamPersonalList: [],
      applyInfo: {},
      //报名信息
      matchUserInfoList: [],
      //用户和团队信息
      matchTeamUserList: [],
      insure_info: {}
      //保险信息
    };
  },
  computed: {
    matchType() {
      return this.contestDetailInfo.type;
    },
    groupInfo() {
      return {
        groupName: this.groupName,
        projectName: this.projectName
      };
    },
    groupType() {
      return this.applyType == 1 ? "user" : "team";
    },
    groupName() {
      return this.applyInfo.group_name;
    },
    projectName() {
      return this.applyInfo.small_project_name;
    },
    price() {
      return this.applyInfo.price;
    },
    applyType() {
      return this.applyInfo.apply_type;
    },
    showTeamUser() {
      return this.applyType == 2;
    }
  },
  onLoad(options) {
    this.contest_id = options.contest_id;
    this.apply_id = options.apply_id;
    this.getContestDetailInfo(this.contest_id);
    this.getUserApplyDetailInfo(this.apply_id);
  },
  methods: {
    clickQrcode() {
      let url = `/pages/matchPart/qrcode/qrcode?apply_id=${this.apply_id}`;
      common_vendor.index.navigateTo({
        url
      });
    },
    getContestDetailInfo(contest_id) {
      return __async(this, null, function* () {
        let params = { contest_id };
        let res = yield apis_match.getContestInfo(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        res.tagList = [res.data.type_str];
        this.contestDetailInfo = res.data;
      });
    },
    getUserApplyDetailInfo(apply_id) {
      return __async(this, null, function* () {
        let params = { apply_id };
        let res = yield apis_match.getUserApplyInfo(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.teamPersonalList = this.formatPersonalList(
          res.data.apply_personnel_define_form.personnel
        );
        let { apply_info, apply_personnel } = res.data;
        let list = [];
        if (res.data.apply_type == 1) {
          let personal = apply_personnel.length ? apply_personnel[0] : {};
          list = [
            { label: "姓名", value: personal.name },
            { label: "联系方式", value: personal.phone }
          ];
        } else {
          let team_info = JSON.parse(apply_info.team_info);
          list = [
            { label: "团队名称", value: team_info.teamName },
            { label: "领队", value: team_info.name },
            { label: "联系方式", value: apply_info.phone }
          ];
        }
        this.insure_info = res.data.insure_info ? res.data.insure_info : {};
        this.applyInfo = res.data;
        this.matchUserInfoList = list;
      });
    },
    formatPersonalList(list) {
      if (!(list instanceof Array)) {
        return [];
      }
      let teamList = list.map((e, i) => {
        return {
          index: String(i + 1).padStart(2, 0),
          value: `${e.name}  ${e.phone}`
        };
      });
      return teamList;
    }
  }
};
if (!Array) {
  const _component_dateBallItem = common_vendor.resolveComponent("dateBallItem");
  const _component_matchGroupInfo = common_vendor.resolveComponent("matchGroupInfo");
  const _component_matchUserInfoBox = common_vendor.resolveComponent("matchUserInfoBox");
  const _component_matchTeamUserInfo = common_vendor.resolveComponent("matchTeamUserInfo");
  const _component_insuranceCardVue = common_vendor.resolveComponent("insuranceCardVue");
  const _component_matchQrcodeDialog = common_vendor.resolveComponent("matchQrcodeDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_dateBallItem + _component_matchGroupInfo + _component_matchUserInfoBox + _component_matchTeamUserInfo + _component_insuranceCardVue + _component_matchQrcodeDialog + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      info: $data.contestDetailInfo,
      showButton: false,
      showApplyTime: false,
      showApplyStatusTag: false
    }),
    b: common_vendor.o($options.clickQrcode),
    c: common_vendor.p({
      info: $options.groupInfo
    }),
    d: common_vendor.p({
      list: $data.matchUserInfoList,
      type: $options.groupType
    }),
    e: $options.showTeamUser
  }, $options.showTeamUser ? {
    f: common_vendor.p({
      list: $data.teamPersonalList
    })
  } : {}, {
    g: $data.insure_info.is_has_insure
  }, $data.insure_info.is_has_insure ? {
    h: common_vendor.p({
      type: "see",
      insurance_requirement: $data.insure_info.insurance_requirement,
      peopleNum: $data.insure_info.buy_count
    })
  } : {}, {
    i: common_vendor.sr("matchQrcodeDialogRef", "e3ddde18-6,e3ddde18-0")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3ddde18"]]);
wx.createPage(MiniProgramPage);
