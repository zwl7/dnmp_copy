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
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const bottomButton = () => "../../../components/bottomButton.js";
const roundButton = () => "../components/roundButton.js";
const ceilLine = () => "../components/ceilLine.js";
const commonTeamUserList = () => "../components/commonTeamUserList.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
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
      teamLeaderList: [],
      //领队
      teamCoachList: [],
      //教练
      teamUserList: [],
      //用户
      pageType: ""
      //页面类型 默认新增  eventApply 赛事报名
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
    if (options.type == "eventApply") {
      this.pageType = "eventApply";
    }
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        console.log(this.addTeamForm);
        let params = this.getFormData();
        let validate = this.validateForm(params);
        console.log(params);
        if (!validate) {
          return;
        }
        let res = yield apis_match.addMemberApplyTeam(params);
        if (res.code != 200) {
          this.$showToastNone(res.message);
          return;
        } else {
          common_vendor.index.showToast({
            icon: "success",
            title: "提交成功",
            duration: 2e3
          });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 500);
        }
      });
    },
    validateForm(form) {
      let { name, leader_id, coach_ids, personnel_ids } = form;
      if (!name) {
        this.$showToastNone("请输入团队名称");
        return false;
      }
      if (name.length > 20) {
        this.$showToastNone("团队名称不超过20个字符");
        return false;
      }
      if (!leader_id) {
        this.$showToastNone("请添加领队");
        return false;
      }
      if (!personnel_ids) {
        this.$showToastNone("请添加团队成员");
        return false;
      }
      return true;
    },
    getFormData() {
      let formCopy = JSON.parse(JSON.stringify(this.addTeamForm));
      formCopy.leader_id = this.getDataListByType("leader").map((e) => e.member_apply_personnel_id).join(",");
      formCopy.coach_ids = this.getDataListByType("coach").map((e) => e.member_apply_personnel_id).join(",");
      formCopy.personnel_ids = this.getDataListByType("user").map((e) => e.member_apply_personnel_id).join(",");
      !formCopy.leader_id && delete formCopy.leader_id;
      !formCopy.coach_ids && delete formCopy.coach_ids;
      !formCopy.personnel_ids && delete formCopy.personnel_ids;
      return formCopy;
    },
    handleAddUser(type) {
      common_vendor.index.navigateTo({
        url: `/pages/matchPart/commonUserAdd/commonUserAdd?teamType=${type}`
      });
    },
    handleEditUser(type, event) {
      console.log(event);
      let { data, index } = event;
      let url = `/pages/matchPart/commonUserEdit/commonUserEdit?member_apply_personnel_id=${data.member_apply_personnel_id}&teamType=${type}`;
      common_vendor.index.navigateTo({
        url
      });
    },
    handleDeleteUser(type, event) {
      return __async(this, null, function* () {
        console.log(event);
        let { data, index } = event;
        let deleteFlag = yield this.deleteUserByType(data);
        if (!deleteFlag) {
          return;
        }
        this.getDataListByType(type).splice(index, 1);
      });
    },
    deleteUserByType(info) {
      return new Promise((resolve) => __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "提示",
          confirmText: "确定",
          content: "是否删除当前用户？",
          success: (e) => __async(this, null, function* () {
            if (e.cancel) {
              resolve(false);
            }
            if (e.confirm) {
              let res = yield apis_match.delMemberApplyPersonnel({
                member_apply_personnel_id: info.member_apply_personnel_id
              });
              if (res.code !== 200) {
                this.$showToastNone(res.message);
                resolve(false);
                return;
              }
              resolve(true);
            }
          })
        });
      }));
    },
    getDataListByType(type) {
      let dataMap = {
        leader: "teamLeaderList",
        coach: "teamCoachList",
        user: "teamUserList"
      };
      return this[dataMap[type]];
    },
    getAddPageData(obj) {
      let type = obj.type;
      let data = obj.data;
      console.log(data.member_apply_personnel_id, "member_apply_personnel_id");
      console.log(this.getDataListByType(type), "getDataListByType");
      let isExitIndex = this.getDataListByType(type).findIndex(
        (item) => item.member_apply_personnel_id == data.member_apply_personnel_id
      );
      console.log("----isExitIndex", isExitIndex);
      if (isExitIndex === -1) {
        this.getDataListByType(type).push(data);
      } else {
        this.getDataListByType(type)[isExitIndex] = data;
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _component_commonTeamUserList = common_vendor.resolveComponent("commonTeamUserList");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_roundButton = common_vendor.resolveComponent("roundButton");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_input2 + _component_commonTeamUserList + _easycom_uv_icon2 + _component_roundButton + _component_bottomButton + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(common_vendor.m(($event) => $data.addTeamForm.name = $event, {
      trim: true
    }, true)),
    b: common_vendor.p({
      placeholder: "请输入内容",
      customStyle: $data.inputCustomStyle,
      modelValue: $data.addTeamForm.name
    }),
    c: common_vendor.o((event) => $options.handleEditUser("leader", event)),
    d: common_vendor.o((event) => $options.handleDeleteUser("leader", event)),
    e: common_vendor.p({
      userList: $data.teamLeaderList
    }),
    f: $options.showTeamLeaderAdd
  }, $options.showTeamLeaderAdd ? {
    g: common_vendor.p({
      name: "plus",
      color: _ctx.themePrimaryColorGetter,
      size: "16"
    }),
    h: common_vendor.o(($event) => $options.handleAddUser("leader")),
    i: common_vendor.p({
      borderType: "dashed"
    })
  } : {}, {
    j: common_vendor.o((event) => $options.handleEditUser("coach", event)),
    k: common_vendor.o((event) => $options.handleDeleteUser("coach", event)),
    l: common_vendor.p({
      userList: $data.teamCoachList
    }),
    m: $options.showTeamCoachAdd
  }, $options.showTeamCoachAdd ? {
    n: common_vendor.p({
      name: "plus",
      color: _ctx.themePrimaryColorGetter,
      size: "16"
    }),
    o: common_vendor.o(($event) => $options.handleAddUser("coach")),
    p: common_vendor.p({
      borderType: "dashed"
    })
  } : {}, {
    q: common_vendor.o((event) => $options.handleEditUser("user", event)),
    r: common_vendor.o((event) => $options.handleDeleteUser("user", event)),
    s: common_vendor.p({
      userList: $data.teamUserList
    }),
    t: $options.showTeamUserAdd
  }, $options.showTeamUserAdd ? {
    v: common_vendor.p({
      name: "plus",
      color: _ctx.themePrimaryColorGetter,
      size: "16"
    }),
    w: common_vendor.o(($event) => $options.handleAddUser("user")),
    x: common_vendor.p({
      borderType: "dashed"
    })
  } : {}, {
    y: common_vendor.o($options.handleSubmit),
    z: common_vendor.p({
      disabled: false
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66b035b0"]]);
wx.createPage(MiniProgramPage);
