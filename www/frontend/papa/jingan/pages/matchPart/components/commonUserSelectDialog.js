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
const roundButton = () => "./roundButton.js";
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
    },
    showOperaiton: {
      type: Boolean,
      default: false
    }
  },
  components: {
    bottomButton,
    roundButton
  },
  data() {
    return {
      commonUserList: [],
      selectedIndex: -1
    };
  },
  computed: {
    showEmpty() {
      return this.commonUserList.length == 0;
    }
  },
  created() {
  },
  methods: {
    open() {
      this.getMemberList();
      this.$refs["popup"].open();
    },
    close() {
      this.$refs["popup"].close();
    },
    handleClickUser(index) {
      this.selectedIndex = index;
      setTimeout(() => {
        this.handleSubmit();
      }, 100);
    },
    handleClickSet() {
      common_vendor.index.navigateTo({
        url: "/pages/matchPart/commonUser/commonUser"
      });
      setTimeout(() => {
        this.close();
      }, 100);
    },
    handleClickAdd() {
      common_vendor.index.navigateTo({
        url: "/pages/matchPart/commonUserAdd/commonUserAdd"
      });
      setTimeout(() => {
        this.close();
      }, 100);
    },
    // 格式化项目数据
    formatProjectData(data) {
    },
    getMemberList() {
      return __async(this, null, function* () {
        let params = { page: 1, size: 500 };
        let res = yield apis_match.getMemberApplyPersonnelList(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
        }
        this.commonUserList = res.data.list;
      });
    },
    handleSubmit() {
      var _a;
      if (this.selectedIndex == -1) {
        return;
      }
      let userInfo = this.commonUserList[this.selectedIndex];
      let id_type_map = {
        1: "身份证",
        2: "护照",
        3: "港澳通行证"
      };
      userInfo.sex = String(userInfo.sex);
      userInfo.id_type = String(userInfo.id_type);
      userInfo.id_type_str = (_a = id_type_map[userInfo.id_type]) != null ? _a : "";
      this.$emit("sendData", userInfo);
      this.close();
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_roundButton = common_vendor.resolveComponent("roundButton");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _component_empty + _component_roundButton + _component_bottomButton + _easycom_uv_safe_bottom2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: $options.showEmpty
  }, $options.showEmpty ? {
    d: common_vendor.p({
      marginTop: 32
    })
  } : {}, {
    e: common_vendor.f($data.commonUserList, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClickUser(index), index),
        b: "1736ce44-3-" + i0 + ",1736ce44-0",
        c: common_vendor.p({
          title: item.name,
          isSelect: index == $data.selectedIndex,
          customStyle: {
            color: "#909399",
            borderRadius: "16rpx"
          }
        }),
        d: index
      };
    }),
    f: common_vendor.p({
      name: "setting",
      color: "#646566",
      size: "16"
    }),
    g: common_vendor.o($options.handleClickSet),
    h: common_vendor.p({
      borderType: "dashed"
    }),
    i: common_vendor.p({
      name: "plus",
      color: "#fff",
      size: "16"
    }),
    j: common_vendor.o($options.handleClickAdd),
    k: common_vendor.p({
      disabled: false
    }),
    l: common_vendor.sr("popup", "1736ce44-0"),
    m: common_vendor.p({
      mode: "bottom",
      round: "16",
      ["custom-style"]: "height: 80vh;"
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1736ce44"]]);
wx.createComponent(Component);
