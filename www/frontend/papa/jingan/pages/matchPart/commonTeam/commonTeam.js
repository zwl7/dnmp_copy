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
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    bottomButton,
    roundButton,
    ceilLine
  },
  data() {
    return {
      value: "",
      customStyle: {
        borderRadius: "16rpx",
        background: "#FAFBFD"
      },
      commonTeamList: [],
      isManageStatus: false
    };
  },
  computed: {
    showEmpty() {
      return this.commonTeamList.length === 0;
    }
  },
  onLoad() {
    this.setNavigationBarColor();
  },
  onShow() {
    this.getTeamList();
  },
  methods: {
    getTeamList() {
      return __async(this, null, function* () {
        let params = { page: 1, size: 500 };
        let res = yield apis_match.getMemberApplyTeamList(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
        }
        this.commonTeamList = res.data.list;
      });
    },
    handleClickManage() {
      this.isManageStatus = !this.isManageStatus;
    },
    handleEdit(info) {
      let url = `/pages/matchPart/commonTeamEdit/commonTeamEdit?member_apply_team_id=${info.member_apply_team_id}`;
      common_vendor.index.navigateTo({
        url
      });
    },
    handleToUserDetail(info) {
      let url = `/pages/matchPart/commonTeamDetail/commonTeamDetail?member_apply_team_id=${info.member_apply_team_id}`;
      common_vendor.index.navigateTo({
        url
      });
    },
    handleAddTeam() {
      console.log(1312321);
      common_vendor.index.navigateTo({
        url: "/pages/matchPart/commonTeamAdd/commonTeamAdd"
      });
    },
    handleDelete(info) {
      common_vendor.index.showModal({
        title: "提示",
        confirmText: "确定",
        content: "是否删除当前常用团队？",
        success: (e) => __async(this, null, function* () {
          if (e.confirm) {
            this.deleteTeam(info.member_apply_team_id);
          } else if (e.cancel) {
            console.log("用户点击取消");
          }
        })
      });
    },
    deleteTeam(id) {
      return __async(this, null, function* () {
        let res = yield apis_match.delMemberApplyTeam({ member_apply_team_id: id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        common_vendor.index.showToast({
          icon: "success",
          title: "删除成功"
        });
        this.getTeamList();
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_icon2 + _component_ceilLine + _component_empty + _component_bottomButton + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$options.showEmpty
  }, !$options.showEmpty ? {
    b: common_vendor.p({
      name: "setting",
      color: "#646566",
      size: "40rpx"
    }),
    c: common_vendor.o((...args) => $options.handleClickManage && $options.handleClickManage(...args))
  } : {}, {
    d: common_vendor.f($data.commonTeamList, (item, k0, i0) => {
      return common_vendor.e($data.isManageStatus ? {
        a: common_vendor.o(($event) => $options.handleEdit(item), item.member_apply_personnel_id),
        b: "e5552b4e-3-" + i0 + "," + ("e5552b4e-2-" + i0),
        c: common_vendor.p({
          name: "edit-pen",
          size: "40rpx",
          color: "#909399"
        }),
        d: common_vendor.o(($event) => $options.handleDelete(item), item.member_apply_personnel_id),
        e: "e5552b4e-4-" + i0 + "," + ("e5552b4e-2-" + i0),
        f: common_vendor.p({
          name: "trash",
          size: "40rpx",
          color: "#909399"
        })
      } : {
        g: "e5552b4e-5-" + i0 + "," + ("e5552b4e-2-" + i0),
        h: common_vendor.p({
          name: "arrow-right",
          size: "32rpx",
          color: "#909399"
        }),
        i: common_vendor.o(($event) => $options.handleToUserDetail(item), item.member_apply_personnel_id)
      }, {
        j: "e5552b4e-2-" + i0 + ",e5552b4e-0",
        k: common_vendor.p({
          title: item.name,
          isLink: false,
          customStyle: $data.customStyle
        }),
        l: item.member_apply_personnel_id
      });
    }),
    e: $data.isManageStatus,
    f: $options.showEmpty
  }, $options.showEmpty ? {
    g: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    h: common_vendor.p({
      name: "plus",
      color: "#fff",
      size: "16"
    }),
    i: common_vendor.o($options.handleAddTeam)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e5552b4e"]]);
wx.createPage(MiniProgramPage);
