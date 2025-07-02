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
const ImgUpload = () => "../../../components/upload/imgs.js";
const _sfc_main = {
  components: {
    ImgUpload
  },
  data() {
    return {
      formData: {
        title: "",
        content: "",
        images: [],
        serviceTime: "",
        address: "",
        latitude: "",
        longitude: "",
        peopleCount: ""
      },
      showTimePicker: false,
      rules: {
        title: [{ required: true, message: "请输入活动标题" }],
        content: [{ required: true, message: "请输入活动内容" }],
        images: [{ required: true, message: "请上传现场照片" }],
        serviceTime: [{ required: true, message: "请选择服务时间" }],
        address: [{ required: true, message: "请选择服务地点" }],
        peopleCount: [{ required: true, message: "请输入参与人数" }]
      }
    };
  },
  methods: {
    // 处理图片上传成功
    handleUploadSuccess(urls) {
      this.formData.images = this.formData.images.concat(urls);
    },
    // 处理删除图片
    handleDeleteImage(index) {
      this.formData.images.splice(index, 1);
    },
    // 处理时间选择确认
    handleTimeConfirm(e) {
      this.formData.serviceTime = e.value;
      this.showTimePicker = false;
    },
    // 选择地点
    chooseLocation() {
      common_vendor.index.chooseLocation({
        success: (res) => {
          this.formData.address = res.address;
          this.formData.latitude = res.latitude;
          this.formData.longitude = res.longitude;
        },
        fail: (err) => {
          console.error("选择地点失败:", err);
        }
      });
    },
    // 提交表单
    handleSubmit() {
      this.$refs.form.validate((valid) => __async(this, null, function* () {
        if (valid) {
          try {
            common_vendor.index.showLoading({
              title: "提交中..."
            });
            yield new Promise((resolve) => setTimeout(resolve, 1e3));
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "发布成功",
              icon: "success"
            });
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 1500);
          } catch (error) {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "发布失败",
              icon: "error"
            });
          }
        }
      }));
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _component_ImgUpload = common_vendor.resolveComponent("ImgUpload");
  const _easycom_uv_datetime_picker2 = common_vendor.resolveComponent("uv-datetime-picker");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_textarea2 + _component_ImgUpload + _easycom_uv_datetime_picker2 + _easycom_uv_icon2 + _easycom_uv_form2 + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_textarea = () => "../../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_datetime_picker = () => "../../../node-modules/@climblee/uv-ui/components/uv-datetime-picker/uv-datetime-picker.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_textarea + _easycom_uv_datetime_picker + _easycom_uv_icon + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.title = $event),
    b: common_vendor.p({
      placeholder: "请输入活动标题",
      maxlength: 50,
      modelValue: $data.formData.title
    }),
    c: common_vendor.p({
      label: "活动标题",
      prop: "title"
    }),
    d: common_vendor.o(($event) => $data.formData.content = $event),
    e: common_vendor.p({
      placeholder: "请输入活动内容描述",
      maxlength: 500,
      height: "120",
      modelValue: $data.formData.content
    }),
    f: common_vendor.p({
      label: "活动内容",
      prop: "content"
    }),
    g: common_vendor.o($options.handleDeleteImage),
    h: common_vendor.o($options.handleUploadSuccess),
    i: common_vendor.o(($event) => $data.formData.images = $event),
    j: common_vendor.p({
      max: 6,
      modelValue: $data.formData.images
    }),
    k: common_vendor.p({
      label: "现场照片",
      prop: "images"
    }),
    l: common_vendor.o($options.handleTimeConfirm),
    m: common_vendor.o(($event) => $data.showTimePicker = false),
    n: common_vendor.o(($event) => $data.formData.serviceTime = $event),
    o: common_vendor.p({
      mode: "datetime",
      show: $data.showTimePicker,
      modelValue: $data.formData.serviceTime
    }),
    p: common_vendor.t($data.formData.serviceTime || "请选择服务时间"),
    q: common_vendor.p({
      name: "arrow-right",
      size: "16"
    }),
    r: common_vendor.o(($event) => $data.showTimePicker = true),
    s: common_vendor.p({
      label: "服务时间",
      prop: "serviceTime"
    }),
    t: common_vendor.t($data.formData.address || "请选择服务地点"),
    v: common_vendor.p({
      name: "arrow-right",
      size: "16"
    }),
    w: common_vendor.o((...args) => $options.chooseLocation && $options.chooseLocation(...args)),
    x: common_vendor.p({
      label: "服务地点",
      prop: "address"
    }),
    y: common_vendor.o(($event) => $data.formData.peopleCount = $event),
    z: common_vendor.p({
      type: "number",
      placeholder: "请输入参与人数",
      modelValue: $data.formData.peopleCount
    }),
    A: common_vendor.p({
      label: "参与人数",
      prop: "peopleCount"
    }),
    B: common_vendor.sr("form", "7bd6b625-1,7bd6b625-0"),
    C: common_vendor.p({
      model: $data.formData,
      rules: $data.rules
    }),
    D: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7bd6b625"]]);
wx.createPage(MiniProgramPage);
