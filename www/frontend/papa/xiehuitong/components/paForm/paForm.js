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
const common_vendor = require("../../common/vendor.js");
const apis_common = require("../../apis/common.js");
const components_paForm_paFormProps = require("./paFormProps.js");
const utils_timeUtil = require("../../utils/timeUtil.js");
const ImgUpload = () => "../upload/imgs.js";
const cityPicker = () => "../city-picker/index.js";
const multiplePicker = () => "../multiple-picker/multiple-picker.js";
const _sfc_main = {
  mixins: [components_paForm_paFormProps.props],
  components: {
    ImgUpload,
    cityPicker,
    multiplePicker
  },
  data() {
    return {
      baseModel: {},
      formRef: "ref" + (/* @__PURE__ */ new Date()).getTime(),
      datePickerValue: /* @__PURE__ */ new Date("1970-01-01"),
      imgLoading: false
      // 图片上传状态
    };
  },
  watch: {
    value: {
      handler(val) {
        this.baseModel = val;
        console.log("------value------", { val });
      },
      immediate: true
    },
    rules: {
      handler(val) {
        if (val && this.$refs[this.formRef] && Object.keys(this.baseModel).length) {
          this.$refs[this.formRef].setRules(this.rules);
        }
      }
    }
  },
  computed: {
    nowTime() {
      const now = /* @__PURE__ */ new Date();
      return now.getTime();
    }
  },
  created() {
  },
  methods: {
    getBorderBottom(item) {
      if (Object.hasOwn(item, "borderBottom")) {
        return item.borderBottom;
      }
      return this.borderBottom;
    },
    closePopUp() {
      common_vendor.index.$emit("SHOW_POPUP", { flag: false });
    },
    // 输入框失去焦点
    inputBlur(e, item) {
      console.log("------inputBlur------", { e, item });
      if (item.confirm instanceof Function) {
        item.confirm(e);
      }
    },
    // picker选择器
    showPickerSelect(item) {
      let refKey = "picker." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    pickerSelectConfirm(e, item) {
      console.log("------pickerSelectConfirm------", { e, item });
      this.baseModel[item.prop] = String(e.value[0].value);
      if (item.strProp) {
        this.baseModel[item.strProp] = e.value[0].label;
      }
      this.$refs[this.formRef].validateField(item.prop);
    },
    pickerSelectChange(e, item) {
      if (item.change instanceof Function) {
        item.change(item);
      }
    },
    // city选择器
    showCityPickerSelect(item) {
      let refKey = "city." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    citySelectConfirm(e, item) {
      console.log("------pickerSelectConfirm------", { e, item });
      let index = e.value.length - 1;
      this.baseModel[item.prop] = String(e.value[index].company_area_id);
      if (item.strProp) {
        this.baseModel[item.strProp] = e.value.map((c) => c.name).join(" ");
      }
    },
    showMultiplePickerSelect(item) {
      let refKey = "multiple." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    multiplePickerConfirm(e, item) {
      console.log(e, item);
      let strList = e.selected.map((c) => {
        return c.label;
      });
      this.baseModel[item.prop] = e.value;
      if (item.strProp) {
        this.baseModel[item.strProp] = strList.join("/");
      }
      if (item.confirm instanceof Function) {
        item.confirm(e);
      }
    },
    // time选择器
    showTimeSelect(item) {
      let refKey = "time." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    timeSelectConfirm(e, item) {
      console.log("------timeSelectConfirm------", { e, item });
      this.baseModel[item.prop] = e.value;
    },
    // 日期选择
    showDateSelect(item) {
      console.log("dateSelect------", { item });
      let refKey = "date." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    dateSelectConfirm(e, item) {
      console.log("----dateSelectConfirm-----", { e, item });
      console.log(utils_timeUtil.formatTimeBase(e.value, "{y}-{m}-{d}"));
      this.datePickerValue = e.value;
      this.baseModel[item.prop] = utils_timeUtil.formatTimeBase(e.value, "{y}-{m}-{d}");
    },
    // 年份选择
    showYearSelect(item) {
      console.log("yearSelect------", { item });
      let refKey = "year." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    yearSelectConfirm(e, item) {
      console.log("----yearSelectConfirm-----", { e, item });
      this.baseModel[item.prop] = utils_timeUtil.formatTimeBase(e.value, "{y}");
    },
    // 获取图片上传状态
    getImgUploadStatus(e, item) {
      console.log("----getImgUploadStatus-----", { e, item });
      if (e == "loading") {
        this.imgLoading = true;
      } else if (e == "finish" || e == "success") {
        this.imgLoading = false;
      }
    },
    // 图片上传
    getFileList(e, item) {
      console.log("----getFileList-----", { e, item });
      let list = e.map((c) => c.url);
      this.baseModel[item.prop] = list;
    },
    changeImageUpload(item) {
      return __async(this, null, function* () {
        let file = yield this.chooseImage();
        apis_common.uploadPic({ filePath: file }).then((resp) => {
          let res = JSON.parse(resp.data);
          if (res.code == 200) {
            this.baseModel[item.prop] = res.data.imgUrl;
          } else {
            this.$showToastNone(res.message);
          }
        });
      });
    },
    chooseImage() {
      return new Promise((resolve, reject) => {
        common_vendor.index.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          success: (res) => {
            res.tempFiles[0].name;
            res.tempFiles[0].size;
            resolve(res.tempFilePaths[0]);
          }
        });
      });
    },
    validate() {
      this.$refs[this.formRef].setRules(this.rules);
      return new Promise((resolve) => {
        this.$refs[this.formRef].validate().then((res) => {
          if (this.imgLoading) {
            resolve(false);
            this.$showToastNone("图片上传中，请稍后");
            return;
          }
          resolve(true);
        }).catch((errors) => {
          resolve(false);
        });
      });
    },
    getData() {
      return this.baseModel;
    },
    getCustomData() {
      let dataCopy = JSON.parse(JSON.stringify(this.baseModel));
      let data = {};
      for (let key in dataCopy) {
        if (!String(key).endsWith("str")) {
          let str = key.replace(/^field_/, "");
          data[str] = dataCopy[key];
        }
      }
      return data;
    },
    // 重置
    reset() {
      this.$refs[this.formRef].resetFields();
      this.$refs[this.formRef].clearValidate();
    },
    hideKeyboard() {
      common_vendor.index.hideKeyboard();
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_radio2 = common_vendor.resolveComponent("uv-radio");
  const _easycom_uv_radio_group2 = common_vendor.resolveComponent("uv-radio-group");
  const _easycom_uv_checkbox2 = common_vendor.resolveComponent("uv-checkbox");
  const _easycom_uv_checkbox_group2 = common_vendor.resolveComponent("uv-checkbox-group");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _component_city_picker = common_vendor.resolveComponent("city-picker");
  const _easycom_multiple_picker2 = common_vendor.resolveComponent("multiple-picker");
  const _easycom_uv_datetime_picker2 = common_vendor.resolveComponent("uv-datetime-picker");
  const _component_ImgUpload = common_vendor.resolveComponent("ImgUpload");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  (_easycom_uv_input2 + _easycom_uv_radio2 + _easycom_uv_radio_group2 + _easycom_uv_checkbox2 + _easycom_uv_checkbox_group2 + _easycom_uv_textarea2 + _easycom_uv_icon2 + _easycom_uv_picker2 + _component_city_picker + _easycom_multiple_picker2 + _easycom_uv_datetime_picker2 + _component_ImgUpload + _easycom_uv_form_item2 + _easycom_uv_form2)();
}
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_radio = () => "../../node-modules/@climblee/uv-ui/components/uv-radio/uv-radio.js";
const _easycom_uv_radio_group = () => "../../node-modules/@climblee/uv-ui/components/uv-radio-group/uv-radio-group.js";
const _easycom_uv_checkbox = () => "../../node-modules/@climblee/uv-ui/components/uv-checkbox/uv-checkbox.js";
const _easycom_uv_checkbox_group = () => "../../node-modules/@climblee/uv-ui/components/uv-checkbox-group/uv-checkbox-group.js";
const _easycom_uv_textarea = () => "../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
const _easycom_multiple_picker = () => "../multiple-picker/multiple-picker.js";
const _easycom_uv_datetime_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-datetime-picker/uv-datetime-picker.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_radio + _easycom_uv_radio_group + _easycom_uv_checkbox + _easycom_uv_checkbox_group + _easycom_uv_textarea + _easycom_uv_icon + _easycom_uv_picker + _easycom_multiple_picker + _easycom_uv_datetime_picker + _easycom_uv_form_item + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.optionList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.type == "input"
      }, item.type == "input" ? {
        b: common_vendor.o((e) => $options.inputBlur(e, item), item.prop),
        c: "87425e30-2-" + i0 + "," + ("87425e30-1-" + i0),
        d: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        e: common_vendor.p({
          inputAlign: _ctx.inputAlign,
          border: "none",
          placeholder: item.placeholder,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        f: item.type == "radio"
      }, item.type == "radio" ? {
        g: common_vendor.f(item.options, (_item, _index, i1) => {
          return {
            a: _index,
            b: "87425e30-4-" + i0 + "-" + i1 + "," + ("87425e30-3-" + i0),
            c: common_vendor.p({
              customStyle: {
                marginRight: "16px"
              },
              label: _item.label,
              name: _item.value
            })
          };
        }),
        h: "87425e30-3-" + i0 + "," + ("87425e30-1-" + i0),
        i: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        j: common_vendor.p({
          customStyle: _ctx.radioGroupCustomStyle,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        k: item.type == "checkbox"
      }, item.type == "checkbox" ? {
        l: common_vendor.f(item.options, (_item, _index, i1) => {
          return {
            a: _index,
            b: "87425e30-6-" + i0 + "-" + i1 + "," + ("87425e30-5-" + i0),
            c: common_vendor.p({
              customStyle: {
                marginRight: "16px"
              },
              label: _item.label,
              name: _item.value
            })
          };
        }),
        m: "87425e30-5-" + i0 + "," + ("87425e30-1-" + i0),
        n: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        o: common_vendor.p({
          shape: "square",
          customStyle: _ctx.radioGroupCustomStyle,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        p: item.type == "textarea"
      }, item.type == "textarea" ? {
        q: "87425e30-7-" + i0 + "," + ("87425e30-1-" + i0),
        r: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        s: common_vendor.p({
          placeholder: item.placeholder,
          maxlength: item.maxlength || 500,
          count: true,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        t: item.type == "picker"
      }, item.type == "picker" ? {
        v: "87425e30-8-" + i0 + "," + ("87425e30-1-" + i0),
        w: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        x: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        y: common_vendor.o(($event) => $options.showPickerSelect(item), item.prop)
      } : {}, {
        z: item.type == "picker"
      }, item.type == "picker" ? {
        A: common_vendor.o(($event) => $options.showPickerSelect(item), item.prop),
        B: "87425e30-9-" + i0 + "," + ("87425e30-1-" + i0),
        C: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        D: item.type == "picker"
      }, item.type == "picker" ? {
        E: common_vendor.sr("picker." + item.prop, "87425e30-10-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        F: "picker." + item.prop,
        G: common_vendor.o((e) => $options.pickerSelectConfirm(e, item), item.prop),
        H: common_vendor.o((e) => $options.pickerSelectChange(e, item), item.prop),
        I: common_vendor.o($options.closePopUp, item.prop),
        J: "87425e30-10-" + i0 + "," + ("87425e30-1-" + i0),
        K: common_vendor.p({
          columns: item.options,
          keyName: "label"
        })
      } : {}, {
        L: item.type == "city"
      }, item.type == "city" ? {
        M: "87425e30-11-" + i0 + "," + ("87425e30-1-" + i0),
        N: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        O: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        P: common_vendor.o(($event) => $options.showCityPickerSelect(item), item.prop)
      } : {}, {
        Q: item.type == "city"
      }, item.type == "city" ? {
        R: common_vendor.o(($event) => $options.showCityPickerSelect(item), item.prop),
        S: "87425e30-12-" + i0 + "," + ("87425e30-1-" + i0),
        T: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        U: item.type == "city"
      }, item.type == "city" ? {
        V: common_vendor.sr("city." + item.prop, "87425e30-13-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        W: "city." + item.prop,
        X: common_vendor.o((e) => $options.citySelectConfirm(e, item), item.prop),
        Y: common_vendor.o($options.closePopUp, item.prop),
        Z: "87425e30-13-" + i0 + "," + ("87425e30-1-" + i0)
      } : {}, {
        aa: item.type == "multiple"
      }, item.type == "multiple" ? {
        ab: "87425e30-14-" + i0 + "," + ("87425e30-1-" + i0),
        ac: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        ad: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        ae: common_vendor.o(($event) => $options.showMultiplePickerSelect(item), item.prop)
      } : {}, {
        af: item.type == "multiple"
      }, item.type == "multiple" ? {
        ag: common_vendor.o(($event) => $options.showMultiplePickerSelect(item), item.prop),
        ah: "87425e30-15-" + i0 + "," + ("87425e30-1-" + i0),
        ai: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        aj: item.type == "multiple"
      }, item.type == "multiple" ? {
        ak: common_vendor.sr("multiple." + item.prop, "87425e30-16-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        al: "multiple." + item.prop,
        am: common_vendor.o((e) => $options.multiplePickerConfirm(e, item), item.prop),
        an: common_vendor.o($options.closePopUp, item.prop),
        ao: "87425e30-16-" + i0 + "," + ("87425e30-1-" + i0),
        ap: common_vendor.p({
          columns: item.options,
          ["default-index"]: $data.baseModel[item.prop]
        })
      } : {}, {
        aq: item.type == "time"
      }, item.type == "time" ? {
        ar: "87425e30-17-" + i0 + "," + ("87425e30-1-" + i0),
        as: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        at: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        av: common_vendor.o(($event) => $options.showTimeSelect(item), item.prop)
      } : {}, {
        aw: item.type == "time"
      }, item.type == "time" ? {
        ax: common_vendor.o(($event) => $options.showTimeSelect(item), item.prop),
        ay: "87425e30-18-" + i0 + "," + ("87425e30-1-" + i0),
        az: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        aA: item.type == "time"
      }, item.type == "time" ? {
        aB: common_vendor.sr("time." + item.prop, "87425e30-19-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        aC: "time." + item.prop,
        aD: common_vendor.o((e) => $options.timeSelectConfirm(e, item), item.prop),
        aE: common_vendor.o($options.closePopUp, item.prop),
        aF: "87425e30-19-" + i0 + "," + ("87425e30-1-" + i0),
        aG: common_vendor.p({
          mode: "time"
        })
      } : {}, {
        aH: item.type == "date"
      }, item.type == "date" ? {
        aI: "87425e30-20-" + i0 + "," + ("87425e30-1-" + i0),
        aJ: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        aK: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        aL: common_vendor.o(($event) => $options.showDateSelect(item), item.prop)
      } : {}, {
        aM: item.type == "date"
      }, item.type == "date" ? {
        aN: common_vendor.o(($event) => $options.showDateSelect(item), item.prop),
        aO: "87425e30-21-" + i0 + "," + ("87425e30-1-" + i0),
        aP: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        aQ: item.type == "date"
      }, item.type == "date" ? {
        aR: common_vendor.sr("date." + item.prop, "87425e30-22-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        aS: "date." + item.prop,
        aT: common_vendor.o((e) => $options.dateSelectConfirm(e, item), item.prop),
        aU: common_vendor.o($options.closePopUp, item.prop),
        aV: "87425e30-22-" + i0 + "," + ("87425e30-1-" + i0),
        aW: common_vendor.o(($event) => $data.datePickerValue = $event, item.prop),
        aX: common_vendor.p({
          mode: "date",
          minDate: item.minDate || -1262304e6,
          modelValue: $data.datePickerValue
        })
      } : {}, {
        aY: item.type == "year"
      }, item.type == "year" ? {
        aZ: "87425e30-23-" + i0 + "," + ("87425e30-1-" + i0),
        ba: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        bb: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        bc: common_vendor.o(($event) => $options.showYearSelect(item), item.prop)
      } : {}, {
        bd: item.type == "year"
      }, item.type == "year" ? {
        be: common_vendor.o(($event) => $options.showYearSelect(item), item.prop),
        bf: "87425e30-24-" + i0 + "," + ("87425e30-1-" + i0),
        bg: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        bh: item.type == "year"
      }, item.type == "year" ? {
        bi: common_vendor.sr("year." + item.prop, "87425e30-25-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        bj: "year." + item.prop,
        bk: common_vendor.o((e) => $options.yearSelectConfirm(e, item), item.prop),
        bl: common_vendor.o($options.closePopUp, item.prop),
        bm: "87425e30-25-" + i0 + "," + ("87425e30-1-" + i0),
        bn: common_vendor.p({
          mode: "year",
          minDate: item.minYear || $options.nowTime
        })
      } : {}, {
        bo: item.type == "image"
      }, item.type == "image" ? {
        bp: common_vendor.o((e) => $options.getFileList(e, item), item.prop),
        bq: common_vendor.o((e) => $options.getImgUploadStatus(e, item), item.prop),
        br: "87425e30-26-" + i0 + "," + ("87425e30-1-" + i0),
        bs: common_vendor.p({
          previewFullImage: true,
          maxCount: item.maxCount ? item.maxCount : 6,
          fileList: $data.baseModel[item.prop],
          customStyle: item.customStyle ? item.customStyle : {}
        })
      } : {}, {
        bt: item.type == "uploadImage"
      }, item.type == "uploadImage" ? common_vendor.e({
        bv: !$data.baseModel[item.prop]
      }, !$data.baseModel[item.prop] ? {} : {
        bw: $data.baseModel[item.prop]
      }, {
        bx: common_vendor.o(($event) => $options.changeImageUpload(item), item.prop)
      }) : {}, {
        by: item.type == "uploadImage"
      }, item.type == "uploadImage" ? {
        bz: common_vendor.o(($event) => $options.changeImageUpload(item), item.prop),
        bA: "87425e30-27-" + i0 + "," + ("87425e30-1-" + i0),
        bB: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        bC: item.prop,
        bD: "87425e30-1-" + i0 + ",87425e30-0",
        bE: common_vendor.p({
          label: item.label,
          prop: item.prop,
          required: item.required,
          labelPosition: item.labelPosition ? item.labelPosition : _ctx.formLabelAlign,
          borderBottom: $options.getBorderBottom(item),
          customStyle: _ctx.formItemCustomStyle,
          labelWidth: _ctx.formItemLabelWidth
        })
      });
    }),
    b: common_vendor.sr($data.formRef, "87425e30-0"),
    c: $data.formRef,
    d: common_vendor.p({
      labelPosition: _ctx.formLabelPosition,
      labelAlign: _ctx.formLabelAlign,
      labelStyle: _ctx.formLabelStyle,
      labelWidth: _ctx.formLabelWidth,
      errorStyle: _ctx.errorStyle,
      model: $data.baseModel
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-87425e30"]]);
wx.createComponent(Component);
