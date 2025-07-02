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
const common_vendor = require("../../../../common/vendor.js");
const components_paForm_formatData = require("../../../../components/paForm/formatData.js");
const ExtendFormCommonTitle = () => "./ExtendFormCommonTitle.js";
const paForm = () => "../../../../components/paForm/paForm.js";
const _sfc_main = {
  name: "ExtendForm",
  props: {
    applyInfoData: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    ExtendFormCommonTitle,
    paForm
  },
  data() {
    return {
      formList: [],
      optionList: [],
      value: {},
      rules: {},
      showTeamInfo: false,
      // 展示团队信息
      showLeaderInfo: false,
      // 展示领队信息
      showCoachInfo: false,
      // 展示教练信息
      showMemberInfo: false,
      // 展示团队成员信息
      //----------------------
      memberList: [],
      //团队成员列表
      memberOptionList: [],
      //团队成员表单选项
      memberValue: {},
      //团队成员表单值
      memberRules: {},
      //团队成员表单规则
      //----------------------
      coachList: [],
      //教练列表
      coachOptionList: [],
      //教练表单选项
      coachValue: {},
      //教练表单值
      coachRules: {},
      //教练表单规则
      //----------------------
      leaderList: [],
      //领队列表
      leaderOptionList: [],
      //领队表单选项
      leaderValue: {},
      //领队表单值
      leaderRules: {},
      //领队表单规则
      //----------------------
      teamInfo: {},
      //团队信息
      teamOptionList: [],
      //团队表单选项
      teamValue: {},
      //团队表单值
      teamRules: {}
      //团队表单规则
    };
  },
  computed: {
    showBaseInfo() {
      return this.showTeamInfo || this.showLeaderInfo || this.showCoachInfo || this.showMemberInfo;
    }
  },
  methods: {
    submitData() {
      return __async(this, null, function* () {
        this.getRefFormData();
        let validateResult = yield this.validateAllForm();
        if (!validateResult) {
          return;
        }
      });
    },
    // 验证全部表单
    validateAllForm() {
      return __async(this, null, function* () {
        if (this.showTeamInfo) {
          let teamFormRefValidate = yield this.$refs.teamFormRef.validate();
          if (!teamFormRefValidate) {
            this.$showToastNone("请将团队信息填写完整");
            return false;
          }
        }
        if (this.showLeaderInfo) {
          for (let i = 0; i < this.leaderList.length; i++) {
            let leaderFormRefName = "leaderFormRef" + i;
            let leaderFormRefValidate = yield this.$refs[leaderFormRefName][0].validate();
            if (!leaderFormRefValidate) {
              this.$showToastNone("请将领队信息填写完整");
              return false;
            }
          }
        }
        if (this.showCoachInfo) {
          for (let i = 0; i < this.coachList.length; i++) {
            let coachFormRefName = "coachFormRef" + i;
            let coachFormRefValidate = yield this.$refs[coachFormRefName][0].validate();
            if (!coachFormRefValidate) {
              this.$showToastNone("请将教练信息填写完整");
              return false;
            }
          }
        }
        console.log("this.memberOptionList", this.memberOptionList);
        console.log("this.memberList", this.$refs);
        if (this.showMemberInfo) {
          for (let i = 0; i < this.memberList.length; i++) {
            let memberFormRefName = "memberFormRef" + i;
            let memberFormRefValidate = yield this.$refs[memberFormRefName][0].validate();
            if (!memberFormRefValidate) {
              this.$showToastNone("请将团队成员信息填写完整");
              return false;
            }
          }
        }
        return true;
      });
    },
    // 获取全部的数据
    getRefFormData() {
      let teamFormData = { info: [] };
      if (this.showTeamInfo) {
        let teamFormRefData = this.$refs.teamFormRef.getCustomData();
        console.log("teamFormRefData", teamFormRefData);
        console.log("teamOptionList", this.teamOptionList);
        let info = [];
        for (let key in teamFormRefData) {
          let item = this.getItemByIdInList(this.teamOptionList, key);
          let value = teamFormRefData[key];
          if (value instanceof Array) {
            value = value.join(",");
          }
          if (item) {
            info.push({
              field_id: item.id,
              value,
              field_type: item.field_type,
              name: item.label
            });
          }
        }
        teamFormData["info"] = info;
      }
      let leaderFormData = [];
      for (let i = 0; i < this.leaderList.length; i++) {
        let leaderFormRefName = "leaderFormRef" + i;
        let leaderFormRefData = this.showLeaderInfo ? this.$refs[leaderFormRefName][0].getCustomData() : {};
        let info = [];
        for (let key in leaderFormRefData) {
          let item = this.getItemByIdInList(this.leaderOptionList, key);
          let value = leaderFormRefData[key];
          if (value instanceof Array) {
            value = value.join(",");
          }
          if (item) {
            info.push({
              field_id: item.id,
              value,
              field_type: item.field_type,
              name: item.label
            });
          }
        }
        leaderFormData.push(__spreadValues({
          info
        }, this.getUserInfo(this.leaderList[i])));
      }
      let coachFormData = [];
      for (let i = 0; i < this.coachList.length; i++) {
        let coachFormRefName = "coachFormRef" + i;
        let coachFormRefData = this.showCoachInfo ? this.$refs[coachFormRefName][0].getCustomData() : {};
        let info = [];
        for (let key in coachFormRefData) {
          let item = this.getItemByIdInList(this.coachOptionList, key);
          let value = coachFormRefData[key];
          if (value instanceof Array) {
            value = value.join(",");
          }
          if (item) {
            info.push({
              field_id: item.id,
              value,
              field_type: item.field_type,
              name: item.label
            });
          }
        }
        coachFormData.push(__spreadValues({
          info
        }, this.getUserInfo(this.coachList[i])));
      }
      let memberFormData = [];
      for (let i = 0; i < this.memberList.length; i++) {
        let memberFormRefName = "memberFormRef" + i;
        let memberFormRefData = this.showMemberInfo ? this.$refs[memberFormRefName][0].getCustomData() : {};
        let info = [];
        for (let key in memberFormRefData) {
          let item = this.getItemByIdInList(this.memberOptionList, key);
          let value = memberFormRefData[key];
          if (value instanceof Array) {
            value = value.join(",");
          }
          if (item) {
            info.push({
              field_id: item.id,
              value,
              field_type: item.field_type,
              name: item.label
            });
          }
        }
        memberFormData.push(__spreadValues({
          info
        }, this.getUserInfo(this.memberList[i])));
      }
      let data = {
        team: teamFormData,
        leader: leaderFormData,
        coach: coachFormData,
        personnel: memberFormData
      };
      console.log("data", data);
      return data;
    },
    // 根据id获取列表中的item
    getItemByIdInList(list, id) {
      return list.find((item) => Number(item.id) == Number(id));
    },
    // 提取用户指定的字段信息
    getUserInfo(info) {
      let obj = {
        member_apply_personnel_id: info.member_apply_personnel_id,
        member_id: info.member_id,
        name: info.name,
        sex: info.sex,
        phone: info.phone,
        id_number: info.id_number,
        id_type: info.id_type,
        remark: info.remark,
        avatar: info.avatar,
        birthday: info.birthday
      };
      return obj;
    },
    // 格式化团队成员信息--获得问题校验等等
    formatMemberApplyTeamList(personnelList) {
      console.log("personnelList", personnelList);
      console.log("applyInfoData", this.applyInfoData);
      let personnelDefineList = this.applyInfoData.personnel ? this.applyInfoData.personnel.define : [];
      if (personnelDefineList.length !== 0) {
        this.showMemberInfo = true;
      }
      let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(personnelDefineList);
      this.memberOptionList = formatBackDataClass.getDataList();
      console.log("memberOptionList", this.memberOptionList);
      this.memberRules = formatBackDataClass.getRules();
      let memberValue = formatBackDataClass.getDefaultData();
      let memberOptionList = [];
      personnelList.forEach((item) => {
        memberOptionList.push(__spreadValues({
          memberValue: __spreadValues({}, JSON.parse(JSON.stringify(memberValue)))
        }, item));
      });
      this.memberList = memberOptionList;
    },
    // 格式化教练信息--获得问题校验等等
    formatCoachInfo(coachList) {
      let coachDefineList = this.applyInfoData.coach ? this.applyInfoData.coach.define : [];
      if (coachDefineList.length !== 0) {
        this.showCoachInfo = true;
      }
      let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(coachDefineList);
      this.coachOptionList = formatBackDataClass.getDataList();
      console.log("coachOptionList", this.coachOptionList);
      this.coachRules = formatBackDataClass.getRules();
      let coachValue = formatBackDataClass.getDefaultData();
      let coachOptionList = [];
      coachList.forEach((item) => {
        coachOptionList.push(__spreadValues({
          coachValue: __spreadValues({}, JSON.parse(JSON.stringify(coachValue)))
        }, item));
      });
      this.coachList = coachOptionList;
    },
    // 格式化领队信息--获得问题校验等等
    formatLeaderInfo(leaderList) {
      let leaderDefineList = this.applyInfoData.leader ? this.applyInfoData.leader.define : [];
      if (leaderDefineList.length !== 0) {
        this.showLeaderInfo = true;
      }
      let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(leaderDefineList);
      this.leaderOptionList = formatBackDataClass.getDataList();
      console.log("leaderOptionList", this.leaderOptionList);
      this.leaderRules = formatBackDataClass.getRules();
      let leaderValue = formatBackDataClass.getDefaultData();
      let leaderOptionList = [];
      leaderList.forEach((item) => {
        leaderOptionList.push(__spreadValues({
          leaderValue: __spreadValues({}, JSON.parse(JSON.stringify(leaderValue)))
        }, item));
      });
      this.leaderList = leaderOptionList;
    },
    // 格式化团队信息--获得问题校验等等
    formatTeamInfo() {
      let teamDefineList = this.applyInfoData.team ? this.applyInfoData.team.define : [];
      if (teamDefineList.length !== 0) {
        this.showTeamInfo = true;
      }
      let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(teamDefineList);
      this.teamOptionList = formatBackDataClass.getDataList();
      this.teamRules = formatBackDataClass.getRules();
      this.teamValue = formatBackDataClass.getDefaultData();
    }
  },
  created() {
    common_vendor.index.$on("teamApplySelect", (data) => {
      console.log("teamApplySelect", data);
      this.teamApplySelect = data;
      this.formatMemberApplyTeamList(data.personnels);
      this.formatCoachInfo(data.coachs);
      this.formatLeaderInfo([data.leader]);
      this.formatTeamInfo();
    });
  }
};
if (!Array) {
  const _component_extend_form_common_title = common_vendor.resolveComponent("extend-form-common-title");
  const _component_pa_form = common_vendor.resolveComponent("pa-form");
  (_component_extend_form_common_title + _component_pa_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showBaseInfo
  }, $options.showBaseInfo ? common_vendor.e({
    b: $data.showTeamInfo
  }, $data.showTeamInfo ? {
    c: common_vendor.p({
      title: "团队信息"
    }),
    d: common_vendor.sr("teamFormRef", "0a676917-1"),
    e: common_vendor.p({
      optionList: $data.teamOptionList,
      value: $data.teamValue,
      rules: $data.teamRules
    })
  } : {}, {
    f: $data.showLeaderInfo
  }, $data.showLeaderInfo ? {
    g: common_vendor.p({
      title: "领队信息"
    }),
    h: common_vendor.f($data.leaderList, (item, index, i0) => {
      return common_vendor.e($data.leaderList.length > 1 ? {
        a: common_vendor.t(index + 1)
      } : {}, {
        b: common_vendor.t(item.name),
        c: common_vendor.sr(`leaderFormRef${index}`, "0a676917-3-" + i0, {
          "f": 1
        }),
        d: `leaderFormRef${index}`,
        e: `leaderFormRef${index}`,
        f: "0a676917-3-" + i0,
        g: common_vendor.p({
          optionList: $data.leaderOptionList,
          value: item.leaderValue,
          rules: $data.leaderRules
        }),
        h: index
      });
    }),
    i: $data.leaderList.length > 1
  } : {}, {
    j: $data.showCoachInfo
  }, $data.showCoachInfo ? {
    k: common_vendor.p({
      title: "教练信息"
    }),
    l: common_vendor.f($data.coachList, (item, index, i0) => {
      return common_vendor.e($data.coachList.length > 1 ? {
        a: common_vendor.t(index + 1)
      } : {}, {
        b: common_vendor.t(item.name),
        c: common_vendor.sr(`coachFormRef${index}`, "0a676917-5-" + i0, {
          "f": 1
        }),
        d: `coachFormRef${index}`,
        e: `coachFormRef${index}`,
        f: "0a676917-5-" + i0,
        g: common_vendor.p({
          optionList: $data.coachOptionList,
          value: item.coachValue,
          rules: $data.coachRules
        }),
        h: index
      });
    }),
    m: $data.coachList.length > 1
  } : {}, {
    n: $data.showMemberInfo
  }, $data.showMemberInfo ? {
    o: common_vendor.p({
      title: "团队成员信息"
    }),
    p: common_vendor.f($data.memberList, (item, index, i0) => {
      return common_vendor.e($data.memberList.length > 1 ? {
        a: common_vendor.t(index + 1)
      } : {}, {
        b: common_vendor.t(item.name),
        c: common_vendor.sr(`memberFormRef${index}`, "0a676917-7-" + i0, {
          "f": 1
        }),
        d: `memberFormRef${index}`,
        e: `memberFormRef${index}`,
        f: "0a676917-7-" + i0,
        g: common_vendor.p({
          optionList: $data.memberOptionList,
          value: item.memberValue,
          rules: $data.memberRules
        }),
        h: index
      });
    }),
    q: $data.memberList.length > 1
  } : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a676917"]]);
wx.createComponent(Component);
