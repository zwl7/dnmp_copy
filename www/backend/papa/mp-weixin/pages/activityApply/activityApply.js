"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_activity = require("../../apis/activity.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      activity_id: "",
      signUpList: [],
      formFields: [],
      formData: {},
      isPublish: false
    };
  },
  onLoad(options) {
    this.activity_id = options.activity_id;
    this.getDIVFieldList();
  },
  methods: {
    delInfo(index) {
      console.log(312312);
      this.signUpList.splice(index, 1);
    },
    getDIVFieldList() {
      const params = {
        activity_id: this.activity_id
      };
      apis_activity.getApplyInfo(params).then((res2) => {
        const {
          data
        } = res2;
        let fields = [];
        fields = JSON.parse(data.field_info);
        const fieldIds = [0];
        fields.forEach((item) => {
          fieldIds.push(item.id);
        });
        apis_activity.getWxApplyField({
          field_ids: fieldIds
        }).then((res) => {
          res.data.list.map((e) => {
            if (e.field_type == 4 || e.field_type == 5) {
              e.selec_options = [];
              try {
                let selec_options = JSON.parse(e.field_select_value);
                selec_options.map((option) => {
                  option.text = option.name;
                });
                e.selec_options = selec_options;
              } catch (e2) {
              }
            }
            fields.map((c) => {
              if (e.field_id === c.id) {
                e.m = c.m;
              }
            });
          });
          this.formFields = res.data.list;
          const fieldsEmpty = this.getFieldsEmpty();
          this.signUpList = [{
            fields: [...fieldsEmpty]
          }];
        });
      });
    },
    getFieldsEmpty() {
      const length = this.formFields.length;
      var fieldsEmpty = [];
      for (let i = 0; i < length; i++) {
        fieldsEmpty.push({});
      }
      return fieldsEmpty;
    },
    addSignUp() {
      const fieldsEmpty = this.getFieldsEmpty();
      const signUpData = {
        fields: fieldsEmpty
      };
      this.signUpList.push(signUpData);
    },
    saveSignUpList() {
      if (this.isPublish) {
        this.$showToastNone("正在创建");
        return;
      }
      const signUpList = this.signUpList;
      const formFields = [...this.formFields];
      const signUpDataList = signUpList.map((item) => {
        const obj = {};
        formFields.forEach((res, index) => {
          obj[res.field_id] = item.fields[index].field_value;
        });
        return obj;
      });
      if (signUpDataList.length === 0) {
        this.$showToastNone("请添加报名人员");
        return;
      }
      this.isPublish = true;
      apis_activity.handleApply({
        activity_id: this.activity_id,
        field_info: JSON.stringify(signUpDataList)
      }).then((res) => {
        if (res.code !== 200) {
          this.$showToastNone(res.message);
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/signUpResult/signUpResult?applicant_id=" + res.data.applicant_id
          });
        }
        this.isPublish = false;
      }).catch((err) => {
        this.$showToastNone(err.message);
        this.isPublish = false;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.signUpList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.o(($event) => $options.delInfo(index), index),
        c: "a4505a9d-1-" + i0 + ",a4505a9d-0",
        d: common_vendor.f($data.formFields, (field, i, i1) => {
          return common_vendor.e({
            a: field.field_type == 1 && field.special && field.special == "IDCard"
          }, field.field_type == 1 && field.special && field.special == "IDCard" ? {
            b: "a4505a9d-3-" + i0 + "-" + i1 + "," + ("a4505a9d-2-" + i0 + "-" + i1),
            c: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            d: common_vendor.p({
              type: "text",
              placeholder: field.field_desc,
              modelValue: item.fields[i].field_value
            }),
            e: "a4505a9d-2-" + i0 + "-" + i1 + ",a4505a9d-0",
            f: common_vendor.p({
              required: field.m ? true : false,
              name: field.field_name,
              label: field.field_name
            })
          } : field.field_type == 1 && field.special && field.special == "phone" ? {
            h: "a4505a9d-5-" + i0 + "-" + i1 + "," + ("a4505a9d-4-" + i0 + "-" + i1),
            i: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            j: common_vendor.p({
              type: "text",
              placeholder: field.field_desc,
              modelValue: item.fields[i].field_value
            }),
            k: "a4505a9d-4-" + i0 + "-" + i1 + ",a4505a9d-0",
            l: common_vendor.p({
              required: field.m ? true : false,
              name: field.field_name,
              label: field.field_name
            })
          } : field.field_type == 1 ? {
            n: "a4505a9d-7-" + i0 + "-" + i1 + "," + ("a4505a9d-6-" + i0 + "-" + i1),
            o: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            p: common_vendor.p({
              type: "text",
              placeholder: field.field_desc,
              modelValue: item.fields[i].field_value
            }),
            q: "a4505a9d-6-" + i0 + "-" + i1 + ",a4505a9d-0",
            r: common_vendor.p({
              required: field.m ? true : false,
              name: field.field_name,
              label: field.field_name
            })
          } : field.field_type == 1 ? {
            t: "a4505a9d-9-" + i0 + "-" + i1 + "," + ("a4505a9d-8-" + i0 + "-" + i1),
            v: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            w: common_vendor.p({
              type: "textarea",
              placeholder: field.field_desc,
              modelValue: item.fields[i].field_value
            }),
            x: "a4505a9d-8-" + i0 + "-" + i1 + ",a4505a9d-0",
            y: common_vendor.p({
              required: field.m ? true : false,
              name: field.field_name,
              label: field.field_name
            })
          } : {}, {
            g: field.field_type == 1 && field.special && field.special == "phone",
            m: field.field_type == 1,
            s: field.field_type == 1,
            z: field.field_type == 4
          }, field.field_type == 4 ? {
            A: "a4505a9d-11-" + i0 + "-" + i1 + "," + ("a4505a9d-10-" + i0 + "-" + i1),
            B: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            C: common_vendor.p({
              localdata: field.selec_options,
              modelValue: item.fields[i].field_value
            }),
            D: "a4505a9d-10-" + i0 + "-" + i1 + ",a4505a9d-0",
            E: common_vendor.p({
              label: field.field_name,
              required: field.m ? true : false
            })
          } : {}, {
            F: field.field_type == 5
          }, field.field_type == 5 ? {
            G: "a4505a9d-13-" + i0 + "-" + i1 + "," + ("a4505a9d-12-" + i0 + "-" + i1),
            H: common_vendor.o(($event) => item.fields[i].field_value = $event, i),
            I: common_vendor.p({
              localdata: field.selec_options,
              modelValue: item.fields[i].field_value
            }),
            J: "a4505a9d-12-" + i0 + "-" + i1 + ",a4505a9d-0",
            K: common_vendor.p({
              required: field.m ? true : false,
              label: field.field_name
            })
          } : {}, {
            L: i
          });
        }),
        e: index
      };
    }),
    b: common_vendor.p({
      type: "closeempty",
      size: "20",
      color: "#E4E7ED"
    }),
    c: common_vendor.sr("baseForm", "a4505a9d-0"),
    d: common_vendor.p({
      rules: _ctx.customRules
    }),
    e: common_vendor.o((...args) => $options.addSignUp && $options.addSignUp(...args)),
    f: common_vendor.o((...args) => $options.saveSignUpList && $options.saveSignUpList(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a4505a9d"], ["__file", "E:/gxm/uniapp-shandong/pages/activityApply/activityApply.vue"]]);
wx.createPage(MiniProgramPage);
