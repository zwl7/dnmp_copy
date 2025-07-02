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
const apis_sportTalent = require("../../../apis/sportTalent.js");
const common_vendor = require("../../../common/vendor.js");
const paFormDetail = () => "../../../components/paForm/paFormDetail.js";
const _sfc_main = {
  components: {
    paFormDetail
  },
  data() {
    return {
      baseFormOptions: [
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "证件类型",
          prop: "identity_type_str"
        },
        {
          label: "证件信息",
          prop: "identity"
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
          label: "擅长项目",
          prop: "sport_tag_str"
        },
        {
          label: "注册所在区域",
          prop: "belong_place"
        },
        {
          label: "个人照片",
          prop: "cover_image_list",
          type: "image"
        },
        {
          label: "简介",
          prop: "remark",
          labelPosition: "top",
          borderBottom: false,
          value: ""
        }
      ],
      customFormOptions: [],
      sport_talent_id: "",
      sport_talent_type_id: "",
      sportTalentUserInfo: {},
      customFields: []
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.sport_talent_id = options.sport_talent_id;
      yield this.getSportTalentDetail(this.sport_talent_id);
      yield this.getSportTalentTypeDetail(this.sport_talent_type_id);
      this.customFormOptions = this.formatCustomProblem();
    });
  },
  methods: {
    // 获取详情
    getSportTalentDetail(sport_talent_id) {
      return __async(this, null, function* () {
        let res = yield apis_sportTalent.getMyWxSportTalent({ sport_talent_id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let baseFormOptions = this.baseFormOptions;
        res.data["cover_image_list"] = res.data.cover_image ? [res.data.cover_image] : [];
        baseFormOptions.map((e) => {
          e.value = res.data[e.prop];
        });
        let levelMap = {
          "-1": "国际级",
          0: "国家级",
          1: "一级",
          2: "二级",
          3: "三级"
        };
        let optionsList = [];
        try {
          res.data.level_info_json_array.forEach((item) => {
            optionsList.push({
              label: item.sport_tag_id_str + "等级",
              prop: item.level,
              value: levelMap[String(item.level)]
            });
          });
        } catch (error) {
          console.error("------getSportTalentDetail------", error);
        }
        baseFormOptions.splice(6, 0, ...optionsList);
        this.baseFormOptions = baseFormOptions;
        this.sport_talent_type_id = res.data.type_id;
        this.sportTalentUserInfo = res.data;
      });
    },
    // 获取类型详情
    getSportTalentTypeDetail(type_id) {
      return __async(this, null, function* () {
        let res = yield apis_sportTalent.getSportTalentType({ type_id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.customFields = res.data.fields;
      });
    },
    // 格式化自定义问题
    formatCustomProblem() {
      let list = [];
      let answerInfo = {};
      try {
        let field_info = JSON.parse(this.sportTalentUserInfo.field_info);
        answerInfo = field_info[0];
      } catch (e) {
        console.error("formatCustomProblem", e);
      }
      console.log(answerInfo);
      this.customFields.map((e) => {
        let obj = { label: e.field_name };
        if (e.field_type == 10) {
          obj.type == "image";
        }
        let isFormatArray = answerInfo[e.field_id] instanceof Array && e.field_type != 10;
        if (isFormatArray) {
          answerInfo[e.field_id] = answerInfo[e.field_id].join(",");
        }
        obj["value"] = answerInfo[e.field_id];
        list.push(obj);
      });
      return list;
    }
  }
};
if (!Array) {
  const _component_paFormDetail = common_vendor.resolveComponent("paFormDetail");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_paFormDetail + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      optionList: $data.baseFormOptions
    }),
    b: $data.customFormOptions.length > 0
  }, $data.customFormOptions.length > 0 ? {} : {}, {
    c: common_vendor.p({
      optionList: $data.customFormOptions
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a568e99e"]]);
wx.createPage(MiniProgramPage);
