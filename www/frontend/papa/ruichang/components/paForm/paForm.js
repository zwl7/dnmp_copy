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
const apis_base_index = require("../../apis/base/index.js");
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
      formRef: "ref" + (/* @__PURE__ */ new Date()).getTime()
    };
  },
  watch: {
    value: {
      handler(val) {
        this.baseModel = val;
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
    // picker选择器
    showPickerSelect(item) {
      let refKey = "picker." + item.prop;
      console.log(this.$refs);
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
      console.log(e);
      let strList = e.selected.map((c) => {
        return c.label;
      });
      this.baseModel[item.prop] = e.value;
      if (item.strProp) {
        this.baseModel[item.strProp] = strList.join("/");
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
    // 日期选择
    showYearSelect(item) {
      console.log("yearSelect------", { item });
      let refKey = "year." + item.prop;
      this.$refs[refKey][0].open();
      common_vendor.index.$emit("SHOW_POPUP", { flag: true });
      this.hideKeyboard();
    },
    dateSelectConfirm(e, item) {
      console.log("----dateSelectConfirm-----", { e, item });
      this.baseModel[item.prop] = utils_timeUtil.formatTimeBase(e.value, "{y}-{m}-{d}");
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
        apis_base_index.uploadPic({ filePath: file }).then((resp) => {
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
          console.log(12321312);
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
        b: "87425e30-2-" + i0 + "," + ("87425e30-1-" + i0),
        c: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        d: common_vendor.p({
          inputAlign: _ctx.inputAlign,
          border: "none",
          placeholder: item.placeholder,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        e: item.type == "radio"
      }, item.type == "radio" ? {
        f: common_vendor.f(item.options, (_item, _index, i1) => {
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
        g: "87425e30-3-" + i0 + "," + ("87425e30-1-" + i0),
        h: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        i: common_vendor.p({
          customStyle: _ctx.radioGroupCustomStyle,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        j: item.type == "checkbox"
      }, item.type == "checkbox" ? {
        k: common_vendor.f(item.options, (_item, _index, i1) => {
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
        l: "87425e30-5-" + i0 + "," + ("87425e30-1-" + i0),
        m: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        n: common_vendor.p({
          shape: "square",
          customStyle: _ctx.radioGroupCustomStyle,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        o: item.type == "textarea"
      }, item.type == "textarea" ? {
        p: "87425e30-7-" + i0 + "," + ("87425e30-1-" + i0),
        q: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        r: common_vendor.p({
          placeholder: item.placeholde,
          count: true,
          modelValue: $data.baseModel[item.prop]
        })
      } : {}, {
        s: item.type == "picker"
      }, item.type == "picker" ? {
        t: "87425e30-8-" + i0 + "," + ("87425e30-1-" + i0),
        v: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        w: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        x: common_vendor.o(($event) => $options.showPickerSelect(item), item.prop)
      } : {}, {
        y: item.type == "picker"
      }, item.type == "picker" ? {
        z: common_vendor.o(($event) => $options.showPickerSelect(item), item.prop),
        A: "87425e30-9-" + i0 + "," + ("87425e30-1-" + i0),
        B: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        C: item.type == "picker"
      }, item.type == "picker" ? {
        D: common_vendor.sr("picker." + item.prop, "87425e30-10-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        E: "picker." + item.prop,
        F: common_vendor.o((e) => $options.pickerSelectConfirm(e, item), item.prop),
        G: common_vendor.o((e) => $options.pickerSelectChange(e, item), item.prop),
        H: common_vendor.o($options.closePopUp, item.prop),
        I: "87425e30-10-" + i0 + "," + ("87425e30-1-" + i0),
        J: common_vendor.p({
          columns: item.options,
          keyName: "label"
        })
      } : {}, {
        K: item.type == "city"
      }, item.type == "city" ? {
        L: "87425e30-11-" + i0 + "," + ("87425e30-1-" + i0),
        M: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        N: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        O: common_vendor.o(($event) => $options.showCityPickerSelect(item), item.prop)
      } : {}, {
        P: item.type == "city"
      }, item.type == "city" ? {
        Q: common_vendor.o(($event) => $options.showCityPickerSelect(item), item.prop),
        R: "87425e30-12-" + i0 + "," + ("87425e30-1-" + i0),
        S: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        T: item.type == "city"
      }, item.type == "city" ? {
        U: common_vendor.sr("city." + item.prop, "87425e30-13-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        V: "city." + item.prop,
        W: common_vendor.o((e) => $options.citySelectConfirm(e, item), item.prop),
        X: common_vendor.o($options.closePopUp, item.prop),
        Y: "87425e30-13-" + i0 + "," + ("87425e30-1-" + i0)
      } : {}, {
        Z: item.type == "multiple"
      }, item.type == "multiple" ? {
        aa: "87425e30-14-" + i0 + "," + ("87425e30-1-" + i0),
        ab: common_vendor.o(($event) => $data.baseModel[item.strProp ? item.strProp : item.prop] = $event, item.prop),
        ac: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.strProp ? item.strProp : item.prop]
        }),
        ad: common_vendor.o(($event) => $options.showMultiplePickerSelect(item), item.prop)
      } : {}, {
        ae: item.type == "multiple"
      }, item.type == "multiple" ? {
        af: common_vendor.o(($event) => $options.showMultiplePickerSelect(item), item.prop),
        ag: "87425e30-15-" + i0 + "," + ("87425e30-1-" + i0),
        ah: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        ai: item.type == "multiple"
      }, item.type == "multiple" ? {
        aj: common_vendor.sr("multiple." + item.prop, "87425e30-16-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        ak: "multiple." + item.prop,
        al: common_vendor.o((e) => $options.multiplePickerConfirm(e, item), item.prop),
        am: common_vendor.o($options.closePopUp, item.prop),
        an: "87425e30-16-" + i0 + "," + ("87425e30-1-" + i0),
        ao: common_vendor.p({
          columns: item.options,
          ["default-index"]: $data.baseModel[item.prop]
        })
      } : {}, {
        ap: item.type == "time"
      }, item.type == "time" ? {
        aq: "87425e30-17-" + i0 + "," + ("87425e30-1-" + i0),
        ar: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        as: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        at: common_vendor.o(($event) => $options.showTimeSelect(item), item.prop)
      } : {}, {
        av: item.type == "time"
      }, item.type == "time" ? {
        aw: common_vendor.o(($event) => $options.showTimeSelect(item), item.prop),
        ax: "87425e30-18-" + i0 + "," + ("87425e30-1-" + i0),
        ay: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        az: item.type == "time"
      }, item.type == "time" ? {
        aA: common_vendor.sr("time." + item.prop, "87425e30-19-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        aB: "time." + item.prop,
        aC: common_vendor.o((e) => $options.timeSelectConfirm(e, item), item.prop),
        aD: common_vendor.o($options.closePopUp, item.prop),
        aE: "87425e30-19-" + i0 + "," + ("87425e30-1-" + i0),
        aF: common_vendor.p({
          mode: "time"
        })
      } : {}, {
        aG: item.type == "date"
      }, item.type == "date" ? {
        aH: "87425e30-20-" + i0 + "," + ("87425e30-1-" + i0),
        aI: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        aJ: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        aK: common_vendor.o(($event) => $options.showDateSelect(item), item.prop)
      } : {}, {
        aL: item.type == "date"
      }, item.type == "date" ? {
        aM: common_vendor.o(($event) => $options.showDateSelect(item), item.prop),
        aN: "87425e30-21-" + i0 + "," + ("87425e30-1-" + i0),
        aO: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        aP: item.type == "date"
      }, item.type == "date" ? {
        aQ: common_vendor.sr("date." + item.prop, "87425e30-22-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        aR: "date." + item.prop,
        aS: common_vendor.o((e) => $options.dateSelectConfirm(e, item), item.prop),
        aT: common_vendor.o($options.closePopUp, item.prop),
        aU: "87425e30-22-" + i0 + "," + ("87425e30-1-" + i0),
        aV: common_vendor.p({
          mode: "date",
          minDate: 0
        })
      } : {}, {
        aW: item.type == "year"
      }, item.type == "year" ? {
        aX: "87425e30-23-" + i0 + "," + ("87425e30-1-" + i0),
        aY: common_vendor.o(($event) => $data.baseModel[item.prop] = $event, item.prop),
        aZ: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          inputAlign: _ctx.inputAlign,
          placeholder: item.placeholder,
          border: "none",
          modelValue: $data.baseModel[item.prop]
        }),
        ba: common_vendor.o(($event) => $options.showYearSelect(item), item.prop)
      } : {}, {
        bb: item.type == "year"
      }, item.type == "year" ? {
        bc: common_vendor.o(($event) => $options.showYearSelect(item), item.prop),
        bd: "87425e30-24-" + i0 + "," + ("87425e30-1-" + i0),
        be: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        bf: item.type == "year"
      }, item.type == "year" ? {
        bg: common_vendor.sr("year." + item.prop, "87425e30-25-" + i0 + "," + ("87425e30-1-" + i0), {
          "f": 1
        }),
        bh: "year." + item.prop,
        bi: common_vendor.o((e) => $options.dateSelectConfirm(e, item), item.prop),
        bj: common_vendor.o($options.closePopUp, item.prop),
        bk: "87425e30-25-" + i0 + "," + ("87425e30-1-" + i0),
        bl: common_vendor.p({
          mode: "year",
          minDate: 2
        })
      } : {}, {
        bm: item.type == "image"
      }, item.type == "image" ? {
        bn: common_vendor.o((e) => $options.getFileList(e, item), item.prop),
        bo: "87425e30-26-" + i0 + "," + ("87425e30-1-" + i0),
        bp: common_vendor.p({
          previewFullImage: true,
          maxCount: item.maxCount ? item.maxCount : 1,
          fileList: $data.baseModel[item.prop],
          customStyle: item.customStyle ? item.customStyle : {}
        })
      } : {}, {
        bq: item.type == "uploadImage"
      }, item.type == "uploadImage" ? common_vendor.e({
        br: !$data.baseModel[item.prop]
      }, !$data.baseModel[item.prop] ? {} : {
        bs: $data.baseModel[item.prop]
      }, {
        bt: common_vendor.o(($event) => $options.changeImageUpload(item), item.prop)
      }) : {}, {
        bv: item.type == "uploadImage"
      }, item.type == "uploadImage" ? {
        bw: common_vendor.o(($event) => $options.changeImageUpload(item), item.prop),
        bx: "87425e30-27-" + i0 + "," + ("87425e30-1-" + i0),
        by: common_vendor.p({
          name: "arrow-right"
        })
      } : {}, {
        bz: item.prop,
        bA: "87425e30-1-" + i0 + ",87425e30-0",
        bB: common_vendor.p({
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
      errorType: _ctx.errorType,
      model: $data.baseModel
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-87425e30"]]);
wx.createComponent(Component);
//# sourceMappingURL=paForm.js.map
