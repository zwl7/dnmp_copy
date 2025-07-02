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
const apis_sportsService_serviceStyle = require("../../../apis/sportsService/serviceStyle.js");
const rules = {
  sport_tag_str: {
    type: "string",
    required: true,
    message: "请选择指导项目",
    trigger: ["blur", "change"]
  },
  realAddress: {
    required: true,
    message: "请选择活动地址",
    trigger: ["blur", "change"]
  },
  is_free: {
    required: true,
    message: "请选择场地收费情况",
    trigger: ["blur", "change"]
  }
  // activity_duration: [
  // 	{
  // 		required: true,
  // 		message: "请填写活动时长",
  // 		trigger: ["blur", "change"]
  // 	}
  // ],
  // join_num: [
  // 	{
  // 		required: true,
  // 		message: "请填写参与人数",
  // 		trigger: ["blur", "change"]
  // 	}
  // ]
};
const Imgs = () => "../../../components/upload/imgs.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  components: {
    Imgs,
    bottomButton
  },
  data() {
    return {
      showPicker: false,
      rules,
      form: {
        content: "",
        fileList: [],
        serveWorkId: ""
      },
      pickSource: {},
      selectAddressOptions: {}
    };
  },
  onLoad(options) {
    console.log({ options });
    this.form.serveWorkId = options.id;
    this.form.realityHours = options.timeGap;
    this.form.realityNum = options.peopleNum;
  },
  methods: {
    handleSelectProject() {
      const tagObj = {
        tagIds: this.form.tagIds || this.form.tag_ids || ""
      };
      common_vendor.index.navigateTo({
        url: "/pages-sub/selectActivetyProject/index",
        success: (res) => {
          res.eventChannel.emit("TAGOBJ", tagObj);
        }
      });
    },
    getFileList(fileList) {
      console.log({ fileList });
      this.form.fileList = fileList;
    },
    submit() {
      return __async(this, null, function* () {
        this.$refs.formRef.validate().then(() => __async(this, null, function* () {
          var _a;
          let params = JSON.parse(JSON.stringify(this.form));
          let result = [];
          Object.keys(this.rules).forEach((key) => {
            if (!params[key]) {
              result.push(this.rules[key]);
            }
          });
          if (params.fileList.length == 0) {
            common_vendor.index.showToast({ title: "请至少上传一张图片", icon: "none" });
            return;
          }
          params.image = (_a = params.fileList) == null ? void 0 : _a.map((item) => item.url).join(",");
          delete params.fileList;
          let res = yield apis_sportsService_serviceStyle.addStyle(params);
          if (res.code == 0) {
            common_vendor.index.showToast({ title: "发布成功", icon: "success" });
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 300);
          } else {
            common_vendor.index.showToast({ title: res.message, icon: "none" });
          }
        }));
      });
    },
    startDragging() {
    }
  }
};
if (!Array) {
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _component_Imgs = common_vendor.resolveComponent("Imgs");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_textarea2 + _easycom_uv_form_item2 + _component_Imgs + _easycom_uv_input2 + _easycom_uv_form2 + _component_layout_default_uni)();
}
const _easycom_uv_textarea = () => "../../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_textarea + _easycom_uv_form_item + _easycom_uv_input + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.content = $event),
    b: common_vendor.p({
      border: "none",
      autoHeight: true,
      placeholder: "分享你的活动",
      maxlength: "100",
      count: true,
      modelValue: $data.form.content
    }),
    c: common_vendor.sr("item1", "13a29669-2,13a29669-1"),
    d: common_vendor.p({
      prop: "text",
      borderBottom: true
    }),
    e: common_vendor.o($options.getFileList),
    f: common_vendor.p({
      previewFullImage: true,
      maxCount: 9,
      fileList: $data.form.fileList
    }),
    g: common_vendor.sr("item1", "13a29669-4,13a29669-1"),
    h: common_vendor.p({
      prop: "imags",
      borderBottom: true
    }),
    i: common_vendor.o(($event) => $data.form.realityHours = $event),
    j: common_vendor.p({
      type: "number",
      border: "none",
      placeholder: "请输入时长",
      modelValue: $data.form.realityHours
    }),
    k: common_vendor.sr("item1", "13a29669-6,13a29669-1"),
    l: common_vendor.p({
      label: "服务时长(小时)",
      prop: "activity_duration",
      borderBottom: true
    }),
    m: common_vendor.o(($event) => $data.form.realityNum = $event),
    n: common_vendor.p({
      border: "none",
      type: "number",
      placeholder: "请输入参与人数",
      modelValue: $data.form.realityNum
    }),
    o: common_vendor.sr("item1", "13a29669-8,13a29669-1"),
    p: common_vendor.p({
      label: "参与人数",
      prop: "join_num",
      borderBottom: true
    }),
    q: common_vendor.sr("formRef", "13a29669-1,13a29669-0"),
    r: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "150",
      errorType: "toast"
    }),
    s: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    t: common_vendor.o((...args) => $options.startDragging && $options.startDragging(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13a29669"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=form.js.map
