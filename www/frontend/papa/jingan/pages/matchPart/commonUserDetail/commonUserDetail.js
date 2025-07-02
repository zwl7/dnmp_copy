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
const apis_match = require("../../../apis/match.js");
const common_vendor = require("../../../common/vendor.js");
const paFormDetail = () => "../../../components/paForm/paFormDetail.js";
const _sfc_main = {
  components: {
    paFormDetail
  },
  data() {
    return {
      member_apply_personnel_id: "",
      baseFormOptions: [
        {
          label: "照片",
          prop: "cover_image_list",
          type: "image"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "性别",
          prop: "sex_str"
        },
        {
          label: "联系方式",
          prop: "phone"
        },
        {
          label: "证件类型",
          prop: "id_type_str"
        },
        {
          label: "证件号码",
          prop: "id_number"
        },
        {
          label: "出生日期",
          prop: "birthday"
        },
        {
          label: "备注",
          prop: "remark",
          // labelPosition: "top",
          borderBottom: false,
          value: ""
        }
      ]
    };
  },
  onLoad(options) {
    this.member_apply_personnel_id = options.member_apply_personnel_id;
    this.getMemberInfo(this.member_apply_personnel_id);
  },
  methods: {
    getMemberInfo(id) {
      return __async(this, null, function* () {
        let res = yield apis_match.getMemberApplyPersonnel({
          member_apply_personnel_id: id
        });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        res.data.cover_image_list = res.data.avatar ? [res.data.avatar] : [];
        this.baseFormOptions.map((e) => {
          e.value = res.data[e.prop];
        });
      });
    }
  }
};
if (!Array) {
  const _component_paFormDetail = common_vendor.resolveComponent("paFormDetail");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_paFormDetail + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      optionList: $data.baseFormOptions
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d9d2367"]]);
wx.createPage(MiniProgramPage);
