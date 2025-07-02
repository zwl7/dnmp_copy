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
const apis_activity = require("../../../apis/activity.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const components_paForm_formatData = require("../../../components/paForm/formatData.js");
const ActivityIndexItem = () => "./components/ActivityIndexItem.js";
const RoundButton = () => "./components/RoundButton.js";
const bottomButton = () => "../../../components/bottomButton.js";
const paForm = () => "../../../components/paForm/paForm.js";
const _sfc_main = {
  name: "activityApply",
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    ActivityIndexItem,
    bottomButton,
    RoundButton,
    paForm
  },
  data() {
    return {
      activity_id: "",
      matchDetailInfo: {},
      submitButtonLoading: false,
      submitButtonDisabled: false,
      //报名相关
      applyBaseInfo: {},
      one_apply_num: 1,
      //单人报名人数
      max_apply_num: 1,
      //最大报名人数
      apply_num: 0,
      //当前报名人数
      userList: [],
      // 用户列表
      userOptionList: [],
      //用户表单选项
      userValue: {},
      //用户表单值
      userRules: {},
      //用户表单规则
      formValue: {}
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.activity_id = options.activity_id;
      this.getWxActivityDetail(this.activity_id);
      this.getActivityApplyInfo(this.activity_id);
    });
  },
  methods: {
    // 获取赛事详情
    getWxActivityDetail(activity_id) {
      return __async(this, null, function* () {
        let params = { activity_id };
        let res = yield apis_activity.getWxActivity(params);
        let { data, code } = res;
        if (code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.matchDetailInfo = data;
        console.log(this.matchDetailInfo);
      });
    },
    // 获取报名表单信息
    getActivityApplyInfo(activity_id) {
      return __async(this, null, function* () {
        let params = { activity_id };
        let res = yield apis_activity.getActivityApplyInfo(params);
        let { data, code } = res;
        if (code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.applyBaseInfo = data;
        this.one_apply_num = data.one_apply_num;
        this.max_apply_num = data.max_apply_num;
        this.apply_num = data.apply_num;
        res.data.fields.map((item) => {
          item.is_must = item.must;
        });
        let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(res.data.fields);
        this.formValue = formatBackDataClass.getDefaultData();
        this.userOptionList = formatBackDataClass.getDataList();
        this.userRules = formatBackDataClass.getRules();
        console.log("this.formValue", this.formValue);
        console.log("this.userOptionList", this.userOptionList);
        console.log("this.userRules", this.userRules);
        if (res.data.fields.length !== 0) {
          this.userList.push({
            userValue: Object.assign({}, this.formValue)
          });
        }
      });
    },
    // 提交报名信息
    handleConfirmSubmit() {
      return __async(this, null, function* () {
        try {
          if (this.userList.length === 0) {
            this.$showToastNone("请添加报名人员");
            return;
          }
          this.submitButtonLoading = true;
          let paFormRef = this.$refs["paForm"];
          if (paFormRef) {
            console.log(paFormRef);
            let valid = yield paFormRef.validate();
            if (!valid) {
              this.submitButtonLoading = false;
              return false;
            }
          }
          let userFormData = this.getRefFormData();
          console.log("userFormData", userFormData);
          let params = {
            activity_id: this.activity_id,
            field_info: JSON.stringify(userFormData)
          };
          let res = yield apis_activity.applyWxActivity(params);
          if (res.code !== 200) {
            this.$showToastNone(res.message);
            return;
          }
          common_vendor.index.redirectTo({
            url: `/pagesSub/activityPart/apply/result?applicant_id=${res.data.applicant_id}&type=activity`
          });
          this.submitButtonLoading = false;
        } catch (error) {
          this.submitButtonLoading = false;
        } finally {
          this.submitButtonLoading = false;
        }
      });
    },
    // 验证全部表单
    validateAllForm() {
      return __async(this, null, function* () {
        for (let i = 0; i < this.userList.length; i++) {
          let userFormRefName = "userFormRef" + i;
          let userFormRefValidate = yield this.$refs[userFormRefName][0].validate();
          if (!userFormRefValidate) {
            this.$showToastNone("请将报名信息填写完整");
            return false;
          }
        }
        return true;
      });
    },
    // 获取全部的数据
    getRefFormData() {
      let userFormData = [];
      for (let i = 0; i < this.userList.length; i++) {
        let userFormRefName = "userFormRef" + i;
        let userFormRefData = this.$refs[userFormRefName][0].getCustomData();
        let info = {};
        for (let key in userFormRefData) {
          let item = this.getItemByIdInList(this.userOptionList, key);
          let value = userFormRefData[key];
          if (value instanceof Array) {
            value = value.join(",");
          }
          if (item) {
            info[item.id] = value;
          }
        }
        userFormData.push(info);
      }
      return userFormData;
    },
    // 根据id获取列表中的item
    getItemByIdInList(list, id) {
      return list.find((item) => Number(item.id) == Number(id));
    },
    // 添加报名人员
    handleAddUser(type) {
      return __async(this, null, function* () {
        if (this.userList.length >= this.one_apply_num) {
          this.$toast(`一次最多添加 ${this.one_apply_num} 个报名人员`);
          return;
        }
        let valid = yield this.validateAllForm();
        if (!valid) {
          return;
        }
        this.userList.push({
          userValue: Object.assign({}, this.formValue)
        });
      });
    },
    // 删除报名人员
    handleDeleteUser(index) {
      return __async(this, null, function* () {
        if (this.userList.length <= 1) {
          this.$showToastNone("至少需要添加一个报名人员");
          return;
        }
        this.userList.splice(index, 1);
      });
    }
  }
};
if (!Array) {
  const _component_ActivityIndexItem = common_vendor.resolveComponent("ActivityIndexItem");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_RoundButton = common_vendor.resolveComponent("RoundButton");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ActivityIndexItem + _easycom_uv_icon2 + _easycom_paForm2 + _component_RoundButton + _component_bottomButton + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_paForm = () => "../../../components/paForm/paForm.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_paForm)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      info: $data.matchDetailInfo,
      showButton: false
    }),
    b: common_vendor.f($data.userList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: "48e2cfce-2-" + i0 + ",48e2cfce-0",
        c: common_vendor.o(($event) => $options.handleDeleteUser(index), index),
        d: common_vendor.sr(`userFormRef${index}`, "48e2cfce-3-" + i0 + ",48e2cfce-0", {
          "f": 1
        }),
        e: `userFormRef${index}`,
        f: `userFormRef${index}`,
        g: "48e2cfce-3-" + i0 + ",48e2cfce-0",
        h: common_vendor.p({
          optionList: $data.userOptionList,
          value: item.userValue,
          rules: $data.userRules
        }),
        i: index
      };
    }),
    c: common_vendor.p({
      name: "close",
      color: _ctx.themePrimaryColorGetter,
      size: "20"
    }),
    d: common_vendor.p({
      name: "plus",
      color: _ctx.themePrimaryColorGetter,
      size: "16"
    }),
    e: common_vendor.o(($event) => $options.handleAddUser("user")),
    f: common_vendor.p({
      borderType: "dashed"
    }),
    g: common_vendor.o($options.handleConfirmSubmit),
    h: common_vendor.p({
      disabled: false,
      loading: $data.submitButtonLoading
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-48e2cfce"]]);
wx.createPage(MiniProgramPage);
