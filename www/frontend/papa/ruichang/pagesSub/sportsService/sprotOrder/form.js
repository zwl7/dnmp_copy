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
const apis_sportsService_serviceOrder = require("../../../apis/sportsService/serviceOrder.js");
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
require("../../../store/app/index.js");
const store_user_index = require("../../../store/user/index.js");
require("../../../store/dict/index.js");
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  components: {
    bottomButton
  },
  data() {
    return {
      form: {
        contact: "",
        dictName: "",
        dictId: "",
        phone: "",
        name: "",
        address: "",
        peopleNum: "",
        serveStartDate: "",
        serveEndDate: "",
        demandDescription: ""
      },
      startTime: Date.now(),
      endTime: Date.now(),
      typeActions: [
        // { name: '科学健身指导', value: '1' },
        // { name: '广场舞指导', value: '2' },
        // { name: '篮球培训', value: '3' },
      ],
      showTimePicker: false,
      userStore: store_user_index.useUserStore(),
      rules: {
        dictName: {
          required: true,
          trigger: ["change"],
          message: "请选择类型"
        },
        name: {
          required: true,
          trigger: ["change", "blur"],
          message: "请输入服务名称"
        },
        address: {
          required: true,
          trigger: ["change", "blur"],
          message: "请输入服务地址"
        },
        peopleNum: {
          type: "number",
          min: 1,
          required: true,
          trigger: ["change", "blur"],
          message: "请输入正确的参与活动人数"
        },
        serveStartDate: {
          required: true,
          message: "请选择服务开始时间",
          trigger: ["change"]
        },
        serveEndDate: {
          required: true,
          message: "请选择服务结束时间",
          trigger: ["change"]
        }
        // demandDescription: {
        //   required: true,
        //   message: '请输入需求描述',
        //   trigger: ['change', 'blur'],
        // },
      },
      orderAuthor: {},
      submited: false
    };
  },
  mounted() {
    this.handelGetServicesDictPage();
    this.handleJudgeAuth();
  },
  onShow() {
    this.submited = false;
  },
  methods: {
    // 判断权限
    handleJudgeAuth() {
      const app = getApp();
      let { userInfo } = app.globalData;
      if (!userInfo.is_auth) {
        common_vendor.index.showModal({
          title: "提示",
          content: "请先完成实名认证",
          confirmText: "去认证",
          success: (res) => {
            if (res.confirm) {
              common_vendor.index.reLaunch({
                url: "/pagesSub/sportsService/realAuth/realAtuthSubmit"
              });
            } else if (res.cancel) {
              common_vendor.index.navigateBack();
            }
          }
        });
      } else {
        this.handelGetOderSetting();
      }
    },
    // 获取点单配置
    handelGetOderSetting() {
      return __async(this, null, function* () {
        var _a;
        const res = yield apis_sportsService_serviceOrder.getOrderSetting(1);
        if (res.code === 0) {
          const { userInfo } = this.userStore;
          this.orderAuthor = res.data.orderIdentity;
          const isAuth = (_a = userInfo.authTypes) == null ? void 0 : _a.includes("siteManager");
          if (this.orderAuthor === "admin" && !isAuth) {
            common_vendor.index.showModal({
              title: "提示",
              content: "只有站点管理员才能新增需求，您可前往”我的身份“查看自己的身份信息。",
              success: (res2) => {
                if (res2.confirm) {
                  common_vendor.index.reLaunch({
                    url: "/pagesSub/sportsService/realAuth/myIdentity"
                  });
                } else if (res2.cancel) {
                  common_vendor.index.navigateBack();
                }
              }
            });
          }
        }
      });
    },
    // 打开地图选择地址
    openMapSelect() {
      common_vendor.index.chooseLocation({
        success: (res) => {
          console.log({ res });
          this.form.address = res.address + res.name;
          this.form.lat = res.latitude;
          this.form.lng = res.longitude;
        }
      });
    },
    handelGetServicesDictPage() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getServicesDictPage({ dict_type_sign: "service_type" });
        if (res.code === 0) {
          const list = res.data.listData;
          console.log({ list });
          this.typeActions = list;
        }
      });
    },
    openTypeSelect() {
      this.$refs.typeSelect.open();
    },
    onTypeSelect(e) {
      console.log({ e });
      this.form.dictId = e.dictId;
      this.form.dictName = e.name;
    },
    openStartTimeSelect() {
      this.$refs.startTmePicker.open();
    },
    openEndTimeSelect() {
      if (!this.form.serveStartDate) {
        common_vendor.index.showToast({
          title: "请先选择服务开始时间",
          icon: "none"
        });
        return;
      }
      this.$refs.endTimePicker.open();
    },
    onStartTimeConfirm(e) {
      const newDate = utils_timeUtil.formatTimeBase(e.value, "{y}-{m}-{d} {h}:{i}:{s}");
      this.form.serveStartDate = newDate;
    },
    onEndTimeConfirm(e) {
      const newDate = utils_timeUtil.formatTimeBase(e.value, "{y}-{m}-{d} {h}:{i}:{s}");
      this.form.serveEndDate = newDate;
    },
    handleSubmit() {
      return __async(this, null, function* () {
        if (this.submited)
          return;
        this.$refs.formRef.validate().then(() => __async(this, null, function* () {
          if (this.form.peopleNum < 1) {
            common_vendor.index.showToast({
              title: "服务参与人数请输入至少1人",
              icon: "none"
            });
            return;
          }
          this.submited = true;
          const res = yield apis_sportsService_serviceOrder.addOrder(this.form);
          if (res.code === 0) {
            common_vendor.index.showToast({ title: "提交成功", icon: "success" });
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 500);
          } else {
            common_vendor.index.showToast({ title: res.msg, icon: "none" });
          }
        }));
      });
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      if (type === "month") {
        return `${value}月`;
      }
      if (type === "day") {
        return `${value}日`;
      }
      if (type === "hour") {
        return `${value}时`;
      }
      if (type === "minute") {
        return `${value}分`;
      }
      if (type === "second") {
        return `${value}秒`;
      }
      return value;
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_bottom_button = common_vendor.resolveComponent("bottom-button");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_action_sheet2 = common_vendor.resolveComponent("uv-action-sheet");
  const _easycom_uv_datetime_picker2 = common_vendor.resolveComponent("uv-datetime-picker");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_form_item2 + _easycom_uv_input2 + _easycom_uv_icon2 + _easycom_uv_textarea2 + _easycom_uv_form2 + _component_bottom_button + _easycom_uv_safe_bottom2 + _easycom_uv_action_sheet2 + _easycom_uv_datetime_picker2 + _component_layout_default_uni)();
}
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_textarea = () => "../../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_action_sheet = () => "../../../node-modules/@climblee/uv-ui/components/uv-action-sheet/uv-action-sheet.js";
const _easycom_uv_datetime_picker = () => "../../../node-modules/@climblee/uv-ui/components/uv-datetime-picker/uv-datetime-picker.js";
if (!Math) {
  (_easycom_uv_form_item + _easycom_uv_input + _easycom_uv_icon + _easycom_uv_textarea + _easycom_uv_form + _easycom_uv_safe_bottom + _easycom_uv_action_sheet + _easycom_uv_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: "transparent",
      title: "",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.t($data.userStore.userInfo.nick_name || "--"),
    c: common_vendor.p({
      label: "联系人",
      prop: "contact",
      borderBottom: true
    }),
    d: common_vendor.t($data.userStore.userInfo.phone || "--"),
    e: common_vendor.p({
      label: "手机号",
      prop: "phone"
    }),
    f: common_vendor.o(($event) => $data.form.dictName = $event),
    g: common_vendor.p({
      placeholder: "请选择类型",
      inputAlign: "right",
      readonly: true,
      border: "none",
      modelValue: $data.form.dictName
    }),
    h: common_vendor.p({
      name: "arrow-right"
    }),
    i: common_vendor.o($options.openTypeSelect),
    j: common_vendor.p({
      label: "类型",
      prop: "dictName",
      borderBottom: true,
      required: true
    }),
    k: common_vendor.o(($event) => $data.form.name = $event),
    l: common_vendor.p({
      placeholder: "请输入服务名称，不超过20字",
      maxlength: "20",
      inputAlign: "right",
      border: "none",
      modelValue: $data.form.name
    }),
    m: common_vendor.p({
      label: "名称",
      prop: "name",
      borderBottom: true,
      required: true
    }),
    n: common_vendor.o(($event) => $data.form.address = $event),
    o: common_vendor.p({
      inputAlign: "right",
      border: "none",
      readonly: true,
      placeholder: "请输入具体服务地点",
      modelValue: $data.form.address
    }),
    p: common_vendor.p({
      name: "arrow-right"
    }),
    q: common_vendor.o($options.openMapSelect),
    r: common_vendor.p({
      label: "地址",
      borderBottom: true,
      prop: "address",
      required: true
    }),
    s: common_vendor.o(($event) => $data.form.serveStartDate = $event),
    t: common_vendor.p({
      placeholder: "请选择具体服务起始时间",
      inputAlign: "right",
      border: "none",
      readonly: true,
      modelValue: $data.form.serveStartDate
    }),
    v: common_vendor.p({
      name: "arrow-right"
    }),
    w: common_vendor.o($options.openStartTimeSelect),
    x: common_vendor.p({
      label: "服务起始时间",
      borderBottom: true,
      prop: "serveStartDate",
      required: true
    }),
    y: common_vendor.o(($event) => $data.form.serveEndDate = $event),
    z: common_vendor.p({
      placeholder: "请选择具体结束时间",
      inputAlign: "right",
      border: "none",
      readonly: true,
      modelValue: $data.form.serveEndDate
    }),
    A: common_vendor.p({
      name: "arrow-right"
    }),
    B: common_vendor.o($options.openEndTimeSelect),
    C: common_vendor.p({
      label: "服务结束时间",
      borderBottom: true,
      prop: "serveEndDate",
      required: true
    }),
    D: common_vendor.o(($event) => $data.form.peopleNum = $event),
    E: common_vendor.p({
      inputAlign: "right",
      border: "none",
      placeholder: "请输入参与服务活动人数",
      modelValue: $data.form.peopleNum
    }),
    F: common_vendor.p({
      label: "人数",
      prop: "peopleNum",
      required: true
    }),
    G: common_vendor.o(($event) => $data.form.demandDescription = $event),
    H: common_vendor.p({
      placeholder: "请详细输入需求具体内容，包括需要提供服务的具体内容、提供服务人员要求",
      maxlength: "200",
      count: true,
      height: "162",
      border: "none",
      customStyle: "padding: 24rpx;background: #f8fbfd;",
      placeholderStyle: "line-height: 48rpx;font-size: 28rpx;color: rgba(192, 196, 204, 1);",
      modelValue: $data.form.demandDescription
    }),
    I: common_vendor.sr("formRef", "61248808-2,61248808-0"),
    J: common_vendor.p({
      model: $data.form,
      rules: $data.rules,
      ["label-width"]: "200rpx",
      ["label-align"]: "left",
      errorType: "toast"
    }),
    K: common_vendor.o($options.handleSubmit),
    L: common_vendor.sr("typeSelect", "61248808-25,61248808-0"),
    M: common_vendor.o($options.onTypeSelect),
    N: common_vendor.p({
      actions: $data.typeActions,
      title: "请选择类型",
      round: "20"
    }),
    O: common_vendor.sr("startTmePicker", "61248808-26,61248808-0"),
    P: common_vendor.o($options.onStartTimeConfirm),
    Q: common_vendor.o(($event) => $data.startTime = $event),
    R: common_vendor.p({
      type: "datetime",
      formatter: $options.formatter,
      modelValue: $data.startTime
    }),
    S: common_vendor.sr("endTimePicker", "61248808-27,61248808-0"),
    T: common_vendor.o($options.onEndTimeConfirm),
    U: common_vendor.o(($event) => $data.endTime = $event),
    V: common_vendor.p({
      type: "datetime",
      formatter: $options.formatter,
      minDate: $data.form.serveStartDate ? new Date($data.form.serveStartDate).getTime() : Date.now(),
      modelValue: $data.endTime
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-61248808"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=form.js.map
