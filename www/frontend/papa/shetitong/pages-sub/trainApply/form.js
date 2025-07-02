"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const index = require("../../index3.js");
const common_assets = require("../../common/assets.js");
const utils_tree = require("../../utils/tree.js");
const configs_useOption_index = require("../../configs/useOption/index.js");
const utils_index = require("../../utils/index.js");
const { educationLevelList, levelList, guideTypeList, areaRangeList } = configs_useOption_index.useOptions();
const _sfc_main = {
  name: "TrainApplyForm",
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      previewImage: utils_index.previewImage,
      pickTime: 1,
      visible: false,
      currentPick: 1,
      trainApply: common_assets.trainApply,
      rules: index.rules,
      showTime: false,
      showPicker: false,
      form: {
        name: "",
        avatar: "",
        fileList: []
      },
      tagGroupList: [],
      areaGroupList: [],
      nation: [],
      personnel: [],
      educationLevel: [],
      levelList: [],
      guideTypeList: [],
      areaRangeList: [],
      columns: [],
      pickSource: {},
      defaultIndex: [],
      //默认选中
      tempInfo: {}
    };
  },
  watch: {
    formData: {
      handler(value) {
        this.form = value;
      }
    },
    readonly: {
      handler(value) {
        this.visible = Boolean(value);
      }
    }
  },
  created() {
    this.form = this.formData;
    this.visible = Boolean(this.readonly);
    this.getTagGroupList();
    this.getAreaOption();
    this.getConfigSelect("nation").then((res) => {
      this.nation = res;
      this.pickSource.nation = res;
    });
    this.getConfigSelect("personnel_form").then((res) => {
      this.personnel = res;
      this.pickSource.personnel = res;
    });
    this.educationLevel = this.returnPickMap(educationLevelList, ["value", "label"]);
    this.levelList = this.returnPickMap(levelList, ["value", "label"]);
    this.guideTypeList = this.returnPickMap(guideTypeList, ["value", "label"]);
    this.areaRangeList = this.returnPickMap(areaRangeList, ["value", "label"]);
    this.pickSource = __spreadProps(__spreadValues({}, this.pickSource), {
      educationLevel: this.educationLevel,
      levelList: this.levelList,
      guideTypeList: this.guideTypeList,
      areaRangeList: this.areaRangeList
    });
    console.log(this.$refs["formRef"], "------");
    this.$refs["formRef"] && this.$refs["formRef"].setRules(this.rules);
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  mounted() {
    common_vendor.index.$on("TAGOBJ", (data) => {
      this.form = __spreadValues(__spreadValues({}, this.form), data);
    });
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
    getInstructInfo() {
      return __async(this, null, function* () {
        if (this.form.name && this.form.id_card && (this.form.name != this.tempInfo.name || this.form.id_card != this.tempInfo.id_card)) {
          const params = {
            name: this.form.name,
            id_card: this.form.id_card
          };
          this.tempInfo = params;
          const res = yield this.$api.getWxTrainActivityInstructInfo(params);
          if (res.code == 200 && Object.prototype.toString.call(res.data) === "[object Object]") {
            const resData = res.data;
            const form = __spreadProps(__spreadValues({}, resData), {
              avatar: resData.avatar_str || resData.avatar,
              tagIdsStr: (resData.tag_ids_arr || []).map((item) => {
                return item.tag_id_str;
              }).join(","),
              tagGroup: `${resData.province_str}/${resData.city_str}/${resData.county_str}/${resData.street_str}/${resData.community_str}`,
              nationStr: resData.nation_str,
              educationLevelStr: resData.education_level_str,
              levelStr: resData.level_str,
              guide_type: resData.guide_type,
              guideTypeStr: resData.guide_type_str,
              personnelFormStr: resData.personnel_form_str,
              time: resData.first_become_time == 0 ? "" : this.$dayjs(resData.first_become_time * 1e3).format("YYYY-MM-DD"),
              now_level_organ_unit_name: resData.now_level_organ_unit_name,
              now_level_grant_time: resData.now_level_grant_time == 0 ? "" : this.$dayjs(resData.now_level_grant_time * 1e3).format("YYYY-MM-DD"),
              status_str: resData.status_str || this.$dict.getDictLabel("statusColor", resData.status, {}),
              areaRangeStr: resData.area_range_str
            });
            this.form = __spreadValues(__spreadValues({}, form), this.form);
          } else {
            console.log(res.message);
          }
        }
      });
    },
    // 日期选中变化函数
    bindDateChange: function(e, type) {
      if (type == 1) {
        this.form.time = e.detail.value;
      } else {
        this.form.now_level_grant_time = e.detail.value;
      }
    },
    // 获取当前日期
    getDate(type) {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = (month > 9 ? month : "0") + month;
      day = (day > 9 ? day : "0") + day;
      return `${year}-${month}-${day}`;
    },
    // handleTimePick(item) {
    // 	this.pickTime = item;
    // 	this.showTime = true;
    // },
    // 回显数据
    backfill(temp, type, level) {
      let index2 = 0;
      let index1 = 0;
      let index22 = 0;
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      this.pickSource[type].forEach((item, i) => {
        if (item.id == temp[0]) {
          index2 = i;
          if (level != 1) {
            item.children.forEach((val, ind) => {
              if (val.id == temp[1]) {
                index1 = ind;
                if (level != 2) {
                  val.children.forEach((e, n) => {
                    if (e.id == temp[2]) {
                      index22 = n;
                    }
                  });
                }
              }
            });
          }
        }
      });
      arr = this.pickSource[type].map((e) => {
        return { label: e.label, id: e.id, level: 0, parentId: 0 };
      });
      this.columns = [arr];
      this.defaultIndex = [index2];
      if (level != 1) {
        arr1 = this.pickSource[type][index2].children.map((e) => {
          return { label: e.label, id: e.id, level: 1, parentId: this.pickSource[type][index2].id };
        });
        this.columns = [arr, arr1];
        this.defaultIndex = [index2, index1];
        if (level != 2) {
          arr2 = this.pickSource[type][index2].children[index1].children.map((e) => {
            return {
              label: e.label,
              id: e.id,
              level: 2,
              parentId: this.pickSource[type][index2].children[index1].id
            };
          });
          this.columns = [arr, arr1, arr2];
          this.defaultIndex = [index2, index1, index22];
        }
      }
    },
    changeVisible() {
      this.visible = true;
    },
    // 替换头像
    replaceAvatar() {
      return __async(this, null, function* () {
        const res = yield utils_index.chooseImage();
        if (res.status) {
          this.$api.uploadPic({ filePath: res.file }).then((resp) => {
            let res2 = JSON.parse(resp.data);
            if (res2.code == 200) {
              this.form.avatar = res2.data.imgUrl;
            } else {
              this.$toast(res2.message);
            }
          });
        }
      });
    },
    // 校验表单
    validate() {
      return __async(this, null, function* () {
        this.$refs["formRef"] && this.$refs["formRef"].setRules(this.rules);
        let res = yield this.$refs.formRef.validate();
        return res;
      });
    },
    radioChange(e) {
    },
    returnPickMap(data = [], key) {
      return data.map((item) => {
        return {
          id: item[key[0]],
          label: item[key[1]]
        };
      });
    },
    getConfigSelect(type) {
      return __async(this, null, function* () {
        let params = {
          type
        };
        let res = yield this.$api.getConfigSelect(params);
        return this.returnPickMap(res.data, ["id", "name"]);
      });
    },
    dealPickChangeReturn(columnData, level = 1, e) {
      let filterData1 = [];
      let filterData2 = [];
      if (level != 1) {
        filterData1 = this.getDefaultColumns(columnData, 1, e.indexs[0]);
        if (filterData1.length == 0) {
          filterData1.push({
            id: "-",
            label: "无",
            parentId: columnData[0][e.indexs[0]].id
          });
        }
        this.$refs["uvPickerRef"].setColumnValues(1, filterData1);
      }
      if (level == 3) {
        filterData2 = this.getDefaultColumns(columnData, 2, e.indexs[1]);
        if (filterData2.length == 0) {
          filterData2.push({
            id: "-",
            label: "无",
            parentId: columnData[1][e.indexs[1]].id || "-"
          });
        }
        this.$refs["uvPickerRef"].setColumnValues(2, filterData2);
      }
    },
    changeHandler(e) {
      switch (this.currentPick) {
        case 1:
          this.dealPickChangeReturn(this.tagGroupList, 2, e);
          break;
        case 2:
          this.dealPickChangeReturn(this.areaGroupList, 3, e);
          break;
        case 3:
          console.log("民族");
          break;
        case 4:
          console.log("文化程度");
          break;
        case 5:
          console.log("当前指导员级别");
          break;
        case 6:
          console.log("人员构成");
          break;
        case 7:
          console.log("地区分布");
          break;
      }
    },
    getTagGroupList() {
      return __async(this, null, function* () {
        let res = yield this.$api.getTagGroupList({
          page: 1,
          size: 1e3,
          type: "social_sports_project_kind",
          is_show_tag_id: 1
        });
        this.pickSource.tagGroup = utils_tree.formatTreeOption(res.data.list, [
          "name",
          "tag_group_id",
          "tag_id_str",
          "tag_id",
          "tag_id_arr"
        ]);
        this.tagGroupList = utils_tree.flattenTree(this.pickSource.tagGroup);
      });
    },
    // handleTimeConfirm(e) {
    // 	if (this.pickTime == 1) {
    // 		this.form.time = e[0];
    // 	} else {
    // 		this.form.now_level_grant_time = e[0];
    // 	}
    // 	this.showTime = false;
    // },
    // 根据父节点过滤数据
    getDefaultColumns(data = [], rowIndex, columnIndex = 0) {
      return data[rowIndex].filter((item) => {
        return item.parentId == data[rowIndex - 1][columnIndex].id;
      });
    },
    handleClickSelect(type) {
      this.showPicker = true;
      this.$refs["uvPickerRef"].open();
      this.currentPick = type;
      let tagData = JSON.parse(JSON.stringify(this.tagGroupList));
      let areaData = JSON.parse(JSON.stringify(this.areaGroupList));
      switch (type) {
        case 1:
          if (this.form.tagIds) {
            this.backfill(this.form.tagIds, "tagGroup", 2);
            return;
          }
          if (this.form.tagIsNone) {
            this.backfill(this.form.tagIsNone, "tagGroup", 2);
            return;
          }
          tagData[1] = this.getDefaultColumns(tagData, 1);
          this.columns = tagData;
          break;
        case 2:
          if (this.form.tagGroup) {
            this.backfill([this.form.county, this.form.street, this.form.community], "areaGroup", 3);
            return;
          }
          areaData[1] = this.getDefaultColumns(areaData, 1);
          areaData[2] = this.getDefaultColumns(areaData, 2);
          this.columns = areaData;
          break;
        case 3:
          if (this.form.nation) {
            this.backfill([this.form.nation], "nation", 1);
            return;
          }
          this.columns = [this.nation];
          break;
        case 4:
          if (this.form.education_level) {
            this.backfill([this.form.education_level], "educationLevel", 1);
            return;
          }
          this.columns = [this.educationLevel];
          break;
        case 5:
          if (this.form.level) {
            this.backfill([this.form.level], "levelList", 1);
            return;
          }
          this.columns = [this.levelList];
          break;
        case 6:
          if (this.form.personnel_form) {
            this.backfill([this.form.personnel_form], "personnel", 1);
            return;
          }
          this.columns = [this.personnel];
          break;
        case 7:
          if (this.form.area_range) {
            this.backfill([this.form.area_range], "areaRangeList", 1);
            return;
          }
          this.columns = [this.areaRangeList];
          break;
      }
    },
    getAreaOption() {
      return __async(this, null, function* () {
        let setting = yield this.$api.getAreaSetting({});
        let params = {
          high_level: setting.data.show_high_level,
          level: setting.data.show_low_level,
          with_up: 0
        };
        const res = yield this.$api.getCompanyAreaByAccount(params);
        this.pickSource.areaGroup = utils_tree.formatTreeOption(
          res.data,
          ["name", "company_area_id", "name", "company_area_id", "next", "name", "company_area_id"],
          3
        );
        this.areaGroupList = utils_tree.flattenTree(this.pickSource.areaGroup);
      });
    },
    handlePickerConfirm(e) {
      this.showPicker = false;
      let type = this.currentPick;
      let tag_ids = [];
      let pickObj = e;
      pickObj.value.map((item) => {
        tag_ids.push(item.id);
        return item.label;
      }).toString();
      switch (type) {
        case 1:
          if (pickObj.value[pickObj.value.length - 1].id != "-") {
            this.form.tag_ids = pickObj.value[pickObj.value.length - 1].id;
            this.form.tagIds = tag_ids;
            this.form.tagIdsStr = pickObj.value[pickObj.value.length - 1].label;
          } else {
            this.form.tag_ids = "";
            this.form.tagIdsStr = "";
            this.form.tagIsNone = tag_ids;
          }
          break;
        case 2:
          this.form.tagGroup = pickObj.value.map((item) => {
            return item.label;
          }).join("/");
          this.form.company_area_id = pickObj.value.length > 0 ? pickObj.value[pickObj.value.length - 1].id : "";
          break;
        case 3:
          this.form.nation = pickObj.value[0].id;
          this.form.nationStr = pickObj.value[0].label;
          break;
        case 4:
          this.form.education_level = pickObj.value[0].id;
          this.form.educationLevelStr = pickObj.value[0].label;
          break;
        case 5:
          this.form.level = pickObj.value[0].id;
          this.form.levelStr = pickObj.value[0].label;
          break;
        case 6:
          this.form.personnel_form = pickObj.value[0].id;
          this.form.personnelFormStr = pickObj.value[0].label;
          break;
        case 7:
          this.form.area_range = pickObj.value[0].id;
          this.form.areaRangeStr = pickObj.value[0].label;
          break;
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_radio2 = common_vendor.resolveComponent("uv-radio");
  const _easycom_uv_radio_group2 = common_vendor.resolveComponent("uv-radio-group");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  (_easycom_uv_avatar2 + _easycom_uv_form_item2 + _easycom_uv_input2 + _easycom_uv_icon2 + _easycom_uv_textarea2 + _easycom_uv_radio2 + _easycom_uv_radio_group2 + _easycom_uv_form2 + _easycom_uv_picker2)();
}
const _easycom_uv_avatar = () => "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_textarea = () => "../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_radio = () => "../../node-modules/@climblee/uv-ui/components/uv-radio/uv-radio.js";
const _easycom_uv_radio_group = () => "../../node-modules/@climblee/uv-ui/components/uv-radio-group/uv-radio-group.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_form_item + _easycom_uv_input + _easycom_uv_icon + _easycom_uv_textarea + _easycom_uv_radio + _easycom_uv_radio_group + _easycom_uv_form + _easycom_uv_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.visible == false
  }, $data.visible == false ? {
    b: common_vendor.o($options.replaceAvatar),
    c: common_vendor.p({
      src: $data.form.avatar,
      size: "30"
    })
  } : {
    d: common_vendor.o(($event) => $data.previewImage($data.form.avatar)),
    e: common_vendor.p({
      src: $data.form.avatar,
      size: "30"
    })
  }, {
    f: common_vendor.sr("item1", "2cc00de8-1,2cc00de8-0"),
    g: common_vendor.p({
      label: "头像",
      prop: "avatar",
      borderBottom: true
    }),
    h: $data.visible == false
  }, $data.visible == false ? {
    i: common_vendor.o($options.getInstructInfo),
    j: common_vendor.o(($event) => $data.form.name = $event),
    k: common_vendor.p({
      border: "none",
      placeholder: "请输入姓名",
      modelValue: $data.form.name
    })
  } : {
    l: common_vendor.t($data.form.name)
  }, {
    m: common_vendor.sr("item1", "2cc00de8-4,2cc00de8-0"),
    n: common_vendor.p({
      label: "姓名",
      prop: "name",
      borderBottom: true,
      required: true
    }),
    o: $data.visible == false
  }, $data.visible == false ? {
    p: common_vendor.o($options.getInstructInfo),
    q: common_vendor.o(($event) => $data.form.id_card = $event),
    r: common_vendor.p({
      border: "none",
      placeholder: "请输入身份证号",
      modelValue: $data.form.id_card
    })
  } : {
    s: common_vendor.t($data.form.id_card)
  }, {
    t: common_vendor.sr("item1", "2cc00de8-6,2cc00de8-0"),
    v: common_vendor.p({
      label: "身份证号",
      prop: "id_card",
      borderBottom: true,
      required: true
    }),
    w: $data.visible == false
  }, $data.visible == false ? {
    x: common_vendor.o(($event) => $data.form.tagIdsStr = $event),
    y: common_vendor.p({
      readonly: true,
      placeholder: "请选择指导项目",
      border: "none",
      modelValue: $data.form.tagIdsStr
    }),
    z: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    A: common_vendor.o((...args) => $options.handleSelectProject && $options.handleSelectProject(...args))
  } : {
    B: common_vendor.t($data.form.tagIdsStr)
  }, {
    C: common_vendor.sr("item1", "2cc00de8-8,2cc00de8-0"),
    D: common_vendor.p({
      label: "指导项目",
      prop: "tag_ids",
      borderBottom: true
    }),
    E: $data.visible == false
  }, $data.visible == false ? {
    F: common_vendor.o(($event) => $data.form.tagGroup = $event),
    G: common_vendor.p({
      readonly: true,
      placeholder: "请输入归属区域",
      border: "none",
      modelValue: $data.form.tagGroup
    }),
    H: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    })
  } : {
    I: common_vendor.t($data.form.tagGroup)
  }, {
    J: common_vendor.sr("item1", "2cc00de8-11,2cc00de8-0"),
    K: common_vendor.o(($event) => $options.handleClickSelect(2)),
    L: common_vendor.p({
      label: "归属区域",
      prop: "tagGroup",
      borderBottom: true,
      required: true
    }),
    M: $data.visible == false
  }, $data.visible == false ? {
    N: common_vendor.o(($event) => $data.form.address = $event),
    O: common_vendor.p({
      border: "none",
      placeholder: "请输入详细地址",
      autoHeight: true,
      modelValue: $data.form.address
    })
  } : {
    P: common_vendor.t($data.form.address)
  }, {
    Q: common_vendor.sr("item1", "2cc00de8-14,2cc00de8-0"),
    R: common_vendor.p({
      label: "详细地址",
      prop: "address",
      borderBottom: true
    }),
    S: $data.visible == false
  }, $data.visible == false ? {
    T: common_vendor.o(($event) => $data.form.phone = $event),
    U: common_vendor.p({
      border: "none",
      placeholder: "请输入手机号",
      modelValue: $data.form.phone
    })
  } : {
    V: common_vendor.t($data.form.phone)
  }, {
    W: common_vendor.sr("item1", "2cc00de8-16,2cc00de8-0"),
    X: common_vendor.p({
      label: "手机号",
      prop: "phone",
      borderBottom: true,
      required: true
    }),
    Y: $data.visible == false
  }, $data.visible == false ? {
    Z: common_vendor.o(($event) => $data.form.nationStr = $event),
    aa: common_vendor.p({
      readonly: true,
      placeholder: "请选择民族",
      border: "none",
      modelValue: $data.form.nationStr
    }),
    ab: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    ac: common_vendor.o(($event) => $options.handleClickSelect(3))
  } : {
    ad: common_vendor.t($data.form.nationStr)
  }, {
    ae: common_vendor.sr("item1", "2cc00de8-18,2cc00de8-0"),
    af: common_vendor.p({
      label: "民族",
      prop: "nation",
      borderBottom: true,
      required: true
    }),
    ag: $data.visible == false
  }, $data.visible == false ? {
    ah: common_vendor.o(($event) => $data.form.educationLevelStr = $event),
    ai: common_vendor.p({
      readonly: true,
      placeholder: "请选择文化程度",
      border: "none",
      modelValue: $data.form.educationLevelStr
    }),
    aj: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    ak: common_vendor.o(($event) => $options.handleClickSelect(4))
  } : {
    al: common_vendor.t($data.form.educationLevelStr)
  }, {
    am: common_vendor.sr("item1", "2cc00de8-21,2cc00de8-0"),
    an: common_vendor.p({
      label: "文化程度",
      prop: "education_level",
      borderBottom: true,
      required: true
    }),
    ao: $data.visible == false
  }, $data.visible == false ? {
    ap: common_vendor.o(($event) => $data.form.levelStr = $event),
    aq: common_vendor.p({
      readonly: true,
      placeholder: "请选择当前指导员级别",
      border: "none",
      modelValue: $data.form.levelStr
    }),
    ar: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    as: common_vendor.o(($event) => $options.handleClickSelect(5))
  } : {
    at: common_vendor.t($data.form.levelStr)
  }, {
    av: common_vendor.sr("item1", "2cc00de8-24,2cc00de8-0"),
    aw: common_vendor.p({
      label: "当前指导员级别",
      prop: "level",
      borderBottom: true
    }),
    ax: $data.visible == false
  }, $data.visible == false ? {
    ay: common_vendor.f($data.guideTypeList, (item, index2, i0) => {
      return {
        a: index2,
        b: common_vendor.o($options.radioChange, index2),
        c: "2cc00de8-29-" + i0 + ",2cc00de8-28",
        d: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: item.label,
          name: item.id
        })
      };
    }),
    az: common_vendor.o(($event) => $data.form.guide_type = $event),
    aA: common_vendor.p({
      placement: "column",
      modelValue: $data.form.guide_type
    })
  } : {
    aB: common_vendor.t($data.form.guideTypeStr)
  }, {
    aC: common_vendor.sr("item1", "2cc00de8-27,2cc00de8-0"),
    aD: common_vendor.p({
      label: "指导类型",
      prop: "guide_type",
      borderBottom: true,
      required: true
    }),
    aE: $data.visible == false
  }, $data.visible == false ? {
    aF: common_vendor.o(($event) => $data.form.personnelFormStr = $event),
    aG: common_vendor.p({
      readonly: true,
      placeholder: "请选择人员构成",
      border: "none",
      modelValue: $data.form.personnelFormStr
    }),
    aH: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    aI: common_vendor.o(($event) => $options.handleClickSelect(6))
  } : {
    aJ: common_vendor.t($data.form.personnelFormStr)
  }, {
    aK: common_vendor.sr("item1", "2cc00de8-30,2cc00de8-0"),
    aL: common_vendor.p({
      label: "人员构成",
      prop: "name",
      borderBottom: true,
      required: true
    }),
    aM: $data.visible == false
  }, $data.visible == false ? {
    aN: common_vendor.t($data.form.time || "请选择成为社体指导员时间"),
    aO: common_vendor.s($data.form.time ? "" : "color: rgb(192, 196, 204);"),
    aP: $data.form.time,
    aQ: $options.startDate,
    aR: $options.endDate,
    aS: common_vendor.o(($event) => $options.bindDateChange($event, 1)),
    aT: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    })
  } : {
    aU: common_vendor.t($data.form.time)
  }, {
    aV: common_vendor.sr("item1", "2cc00de8-33,2cc00de8-0"),
    aW: common_vendor.p({
      label: "成为社体指导员时间",
      prop: "name",
      borderBottom: true
    }),
    aX: $data.visible == false
  }, $data.visible == false ? {
    aY: common_vendor.t($data.form.now_level_grant_time || "请选择现有等级授予时间"),
    aZ: common_vendor.s($data.form.now_level_grant_time ? "" : "color: rgb(192, 196, 204);"),
    ba: $data.form.now_level_grant_time,
    bb: $options.startDate,
    bc: $options.endDate,
    bd: common_vendor.o(($event) => $options.bindDateChange($event, 2)),
    be: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    })
  } : {
    bf: common_vendor.t($data.form.now_level_grant_time)
  }, {
    bg: common_vendor.sr("item1", "2cc00de8-35,2cc00de8-0"),
    bh: common_vendor.p({
      label: "现有等级授予时间",
      prop: "now_level_grant_time",
      borderBottom: true
    }),
    bi: $data.visible == false
  }, $data.visible == false ? {
    bj: common_vendor.o(($event) => $data.form.now_level_organ_unit_name = $event),
    bk: common_vendor.p({
      placeholder: "请输入现有等级授予部门",
      border: "none",
      modelValue: $data.form.now_level_organ_unit_name
    })
  } : {
    bl: common_vendor.t($data.form.now_level_organ_unit_name)
  }, {
    bm: common_vendor.sr("item1", "2cc00de8-37,2cc00de8-0"),
    bn: common_vendor.p({
      label: "现有等级授予部门",
      prop: "now_level_organ_unit_name",
      borderBottom: true
    }),
    bo: $data.visible == false
  }, $data.visible == false ? {
    bp: common_vendor.o(($event) => $data.form.areaRangeStr = $event),
    bq: common_vendor.p({
      readonly: true,
      placeholder: "请选择地区分布",
      border: "none",
      modelValue: $data.form.areaRangeStr
    }),
    br: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    bs: common_vendor.o(($event) => $options.handleClickSelect(7))
  } : {
    bt: common_vendor.t($data.form.areaRangeStr)
  }, {
    bv: common_vendor.sr("item1", "2cc00de8-39,2cc00de8-0"),
    bw: common_vendor.p({
      label: "地区分布",
      prop: "area_range",
      borderBottom: true,
      required: true
    }),
    bx: common_vendor.sr("formRef", "2cc00de8-0"),
    by: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "100",
      errorType: "toast"
    }),
    bz: common_vendor.sr("uvPickerRef", "2cc00de8-42"),
    bA: common_vendor.o($options.handlePickerConfirm),
    bB: common_vendor.o(($event) => $data.showPicker = false),
    bC: common_vendor.o($options.changeHandler),
    bD: $data.currentPick,
    bE: common_vendor.p({
      show: $data.showPicker,
      columns: $data.columns,
      keyName: "label",
      defaultIndex: $data.defaultIndex
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2cc00de8"]]);
wx.createComponent(Component);
//# sourceMappingURL=form.js.map
