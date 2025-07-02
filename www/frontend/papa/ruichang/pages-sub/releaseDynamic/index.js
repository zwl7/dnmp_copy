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
const common_assets = require("../../common/assets.js");
const utils_storages_uniStorage = require("../../utils/storages/uniStorage.js");
const utils_tree = require("../../utils/tree.js");
require("../../utils/http.js");
const utils_platform = require("../../utils/platform.js");
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
  }
  // is_free: {
  //   required: true,
  //   message: '请选择场地收费情况',
  //   trigger: ['blur', 'change'],
  // },
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
const Imgs = () => "../../components/upload/imgs.js";
const _sfc_main = {
  components: {
    Imgs
  },
  data() {
    return {
      showPicker: false,
      trainApply: common_assets.trainApply,
      rules,
      form: {
        text: "",
        name: "",
        phone: "",
        select: "",
        time: "",
        addr: "",
        latng: "",
        fileList: [],
        is_free: "",
        is_free_note: "",
        instructor_site_id: "",
        instructor_site_id_str: "",
        site_id: "",
        site_id_str: "",
        role_type: "1"
      },
      columns: [],
      tagGroupList: [],
      pickSource: {},
      defaultIndex: [],
      //默认选中
      selectAddressOptions: {}
    };
  },
  methods: {
    radioChange(e) {
      this.form.is_free = e;
    },
    roleRadioChange(e) {
      this.form.role_type = e;
    },
    handleSelectSite() {
      const tagObj = {
        tagIds: this.form.instructor_site_id || ""
      };
      common_vendor.index.navigateTo({
        url: "/pages-sub/selectActivitySite/index",
        success: (res) => {
          res.eventChannel.emit("PUBLISH_SELECT_SITE", tagObj);
        }
      });
    },
    handleSelectOrganization() {
      const tagObj = {
        tagIds: this.form.site_id || ""
      };
      common_vendor.index.navigateTo({
        url: "/pages-sub/selectOrganization/index",
        success: (res) => {
          res.eventChannel.emit("PUBLISH_SELECT_SITE_ORGANIZATION", tagObj);
        }
      });
    },
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
    handleSelectProject_old() {
      this.showPicker = true;
      if (this.form.sport_tag_ids) {
        let result = utils_tree.getPickBackFile(this.form.tagIds, this.pickSource.tagGroup, 2);
        this.defaultIndex = result.defaultIndex;
        this.columns = result.columns;
        return;
      }
      tagData[1] = this.getDefaultColumns(utils_tree.flattenTree(this.pickSource.tagGroup), 1);
      this.columns = [utils_tree.flattenTree(this.pickSource.tagGroup)[0], tagData[1]];
      this.defaultIndex = [0, 0];
    },
    getFileList(fileList) {
      this.form.fileList = fileList;
    },
    // 根据父节点过滤数据
    getDefaultColumns(data = [], rowIndex, columnIndex = 0) {
      return data[rowIndex].filter((item) => {
        return item.parentId == data[rowIndex - 1][columnIndex].id;
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
        e.picker.setColumnValues(1, filterData1);
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
        e.picker.setColumnValues(2, filterData2);
      }
    },
    changeHandler(e) {
      this.dealPickChangeReturn(this.tagGroupList, 2, e);
    },
    handlePickerConfirm(e) {
      this.showPicker = false;
      let tag_ids = [];
      let pickObj = e;
      pickObj.value.map((item) => {
        tag_ids.push(item.id);
        return item.label;
      }).toString();
      if (pickObj.value[pickObj.value.length - 1].id != "-") {
        this.form.sport_tag_ids = pickObj.value[pickObj.value.length - 1].id;
        this.form.sport_tag_str = pickObj.value[pickObj.value.length - 1].label;
        this.form.tagIds = tag_ids;
      } else {
        this.form.sport_tag_ids = "";
        this.form.sport_tag_str = "";
      }
    },
    getDataList() {
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
    submit() {
      return __async(this, null, function* () {
        console.log(this.form);
        this.$refs.formRef.validate().then(() => __async(this, null, function* () {
          let params = JSON.parse(JSON.stringify(this.form));
          let result = [];
          Object.keys(this.rules).forEach((key) => {
            if (!params[key]) {
              result.push(this.rules[key]);
            }
          });
          if (result.length > 0) {
            this.$toast(result[0].message);
            return;
          }
          if (!params.address) {
            params.address = params.realAddress;
          }
          let images = params.fileList.map((item) => {
            return {
              url: item.relativeUrl,
              name: item.name,
              full_url: item.url
            };
          });
          params.images = JSON.stringify(images);
          delete params.fileList;
          this.$loading(true);
          let res = yield this.$api.addVoluntaryActivityItem(params);
          this.$loading(false);
          if (res.code == 200) {
            this.$toast("发布成功", { type: "success" });
            common_vendor.index.redirectTo({ url: "/pages-sub/applyResult/success?type=activity&title=发布成功" });
          } else {
            this.$toast(res.message, { type: "warning" });
          }
        }));
      });
    },
    handleClickSelect(type) {
      console.log(utils_platform.isMp);
      if (!utils_platform.isMp) {
        const key = "ANEBZ-TGY63-BXY3I-OAKSC-ONSHO-NXBS6";
        const url = window.location.href.split("?")[0];
        utils_storages_uniStorage.uniStorage.set("RELEASEFORM", JSON.stringify(this.form));
        window.location.href = `https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${encodeURIComponent(
          url
        )}&key=${key}&referer=社体指导员移动端`;
        return;
      }
      let _this = this;
      common_vendor.index.chooseLocation({
        success: (res) => {
          console.log(res);
          _this.form.lat = res.latitude;
          _this.form.lng = res.longitude;
          _this.form.addr = res.address;
          _this.form.realAddress = res.address + res.name;
        },
        fail(err) {
          console.log(err);
          _this.$toast("选择地址失败：" + err.errMsg);
        }
      });
    }
  },
  onLoad(options) {
    this.getDataList();
    this.selectAddressOptions = options;
    common_vendor.index.$on("TAGOBJ", (data) => {
      this.form = __spreadProps(__spreadValues({}, this.form), {
        sport_tag_str: data.tagIdsStr,
        sport_tag_ids: data.tag_ids,
        tagIds: data.tag_ids
      });
    });
    common_vendor.index.$on("PUBLISH_SELECT_SITE", (data) => {
      this.form.instructor_site_id = data.tagIds;
      this.form.instructor_site_id_str = data.tagIdsStr;
    });
    common_vendor.index.$on("PUBLISH_SELECT_SITE_ORGANIZATION", (data) => {
      this.form.site_id = data.tagIds;
      this.form.site_id_str = data.tagIdsStr;
    });
  },
  watch: {
    $Route: function() {
      utils_storages_uniStorage.uniStorage.remove("RELEASEFORM");
    }
  },
  onShow() {
    const { addr, name, latng, city } = this.selectAddressOptions;
    if (latng) {
      let releaseForm = utils_storages_uniStorage.uniStorage.get("RELEASEFORM") ? JSON.parse(utils_storages_uniStorage.uniStorage.get("RELEASEFORM")) : "";
      let lat = latng.split(",")[0];
      let lng = latng.split(",")[1];
      const obj = {
        addr,
        name,
        lat,
        lng,
        activity_duration: releaseForm.activity_duration,
        join_num: releaseForm.join_num,
        address: releaseForm.address,
        sport_tag_ids: releaseForm.sport_tag_ids,
        tagIds: releaseForm.tagIds,
        sport_tag_str: releaseForm.sport_tag_str,
        text: releaseForm.text,
        fileList: releaseForm.fileList,
        is_free: releaseForm.is_free,
        is_free_note: releaseForm.is_free_note,
        role_type: releaseForm.role_type
      };
      this.form = __spreadProps(__spreadValues({}, obj), { realAddress: addr + city + name });
    }
  }
};
if (!Array) {
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _component_Imgs = common_vendor.resolveComponent("Imgs");
  const _easycom_uv_radio2 = common_vendor.resolveComponent("uv-radio");
  const _easycom_uv_radio_group2 = common_vendor.resolveComponent("uv-radio-group");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_textarea2 + _easycom_uv_form_item2 + _component_Imgs + _easycom_uv_radio2 + _easycom_uv_radio_group2 + _easycom_uv_input2 + _easycom_uv_icon2 + _easycom_uv_form2 + _easycom_uv_picker2 + _easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_uv_textarea = () => "../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_radio = () => "../../node-modules/@climblee/uv-ui/components/uv-radio/uv-radio.js";
const _easycom_uv_radio_group = () => "../../node-modules/@climblee/uv-ui/components/uv-radio-group/uv-radio-group.js";
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_textarea + _easycom_uv_form_item + _easycom_uv_radio + _easycom_uv_radio_group + _easycom_uv_input + _easycom_uv_icon + _easycom_uv_form + _easycom_uv_picker + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.form.text = $event),
    b: common_vendor.p({
      border: "none",
      placeholder: "分享你的活动",
      maxlength: "100",
      height: "100",
      count: true,
      modelValue: $data.form.text
    }),
    c: common_vendor.sr("item1", "17cb9ab9-2,17cb9ab9-1"),
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
    g: common_vendor.sr("item1", "17cb9ab9-4,17cb9ab9-1"),
    h: common_vendor.p({
      prop: "imags",
      borderBottom: true
    }),
    i: common_vendor.p({
      label: "组织者",
      name: "1"
    }),
    j: common_vendor.p({
      label: "参与者",
      name: "2"
    }),
    k: common_vendor.o($options.roleRadioChange),
    l: common_vendor.o(($event) => $data.form.role_type = $event),
    m: common_vendor.p({
      modelValue: $data.form.role_type
    }),
    n: common_vendor.sr("item1", "17cb9ab9-6,17cb9ab9-1"),
    o: common_vendor.p({
      label: "志愿服务角色",
      prop: "role_type",
      borderBottom: true,
      required: true
    }),
    p: common_vendor.o(($event) => $data.form.sport_tag_str = $event),
    q: common_vendor.p({
      readonly: true,
      disabledColor: "#ffffff",
      placeholder: "请选择指导项目",
      border: "none",
      modelValue: $data.form.sport_tag_str
    }),
    r: common_vendor.o((...args) => $options.handleSelectProject && $options.handleSelectProject(...args)),
    s: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    t: common_vendor.sr("item1", "17cb9ab9-10,17cb9ab9-1"),
    v: common_vendor.p({
      label: "活动项目",
      prop: "sport_tag_ids",
      borderBottom: true,
      required: true
    }),
    w: common_vendor.o(($event) => $data.form.realAddress = $event),
    x: common_vendor.p({
      readonly: true,
      disabledColor: "#ffffff",
      placeholder: "请选择活动地址",
      border: "none",
      modelValue: $data.form.realAddress
    }),
    y: common_vendor.o(($event) => $options.handleClickSelect(2)),
    z: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    A: common_vendor.sr("item1", "17cb9ab9-13,17cb9ab9-1"),
    B: common_vendor.p({
      label: "活动地址",
      prop: "lat",
      borderBottom: true,
      required: true
    }),
    C: common_vendor.o(($event) => $data.form.address = $event),
    D: common_vendor.p({
      border: "none",
      placeholder: "请输入详细地址",
      modelValue: $data.form.address
    }),
    E: common_vendor.sr("item1", "17cb9ab9-16,17cb9ab9-1"),
    F: common_vendor.p({
      label: "详细地址",
      prop: "address",
      borderBottom: true
    }),
    G: common_vendor.p({
      label: "1小时",
      name: "1"
    }),
    H: common_vendor.p({
      label: "1.5小时",
      name: "1.5"
    }),
    I: common_vendor.o($options.radioChange),
    J: common_vendor.o(($event) => $data.form.activity_duration = $event),
    K: common_vendor.p({
      modelValue: $data.form.activity_duration
    }),
    L: common_vendor.sr("item1", "17cb9ab9-18,17cb9ab9-1"),
    M: common_vendor.p({
      label: "活动时长(小时)",
      prop: "activity_duration",
      borderBottom: true
    }),
    N: common_vendor.o(($event) => $data.form.join_num = $event),
    O: common_vendor.p({
      border: "none",
      type: "number",
      placeholder: "请输入参与人数",
      modelValue: $data.form.join_num
    }),
    P: common_vendor.sr("item1", "17cb9ab9-22,17cb9ab9-1"),
    Q: common_vendor.p({
      label: "参与人数",
      prop: "join_num",
      borderBottom: true
    }),
    R: common_vendor.o(($event) => $data.form.instructor_site_id_str = $event),
    S: common_vendor.p({
      readonly: true,
      disabledColor: "#ffffff",
      placeholder: "请选择活动站点",
      border: "none",
      modelValue: $data.form.instructor_site_id_str
    }),
    T: common_vendor.o((...args) => $options.handleSelectSite && $options.handleSelectSite(...args)),
    U: common_vendor.o($options.handleSelectSite),
    V: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    W: common_vendor.sr("item1", "17cb9ab9-24,17cb9ab9-1"),
    X: common_vendor.p({
      label: "活动站点",
      prop: "instructor_site_id",
      borderBottom: true
    }),
    Y: common_vendor.o(($event) => $data.form.site_id_str = $event),
    Z: common_vendor.p({
      readonly: true,
      disabledColor: "#ffffff",
      placeholder: "请选择所属组织",
      border: "none",
      modelValue: $data.form.site_id_str
    }),
    aa: common_vendor.o((...args) => $options.handleSelectOrganization && $options.handleSelectOrganization(...args)),
    ab: common_vendor.o($options.handleSelectOrganization),
    ac: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    ad: common_vendor.sr("item1", "17cb9ab9-27,17cb9ab9-1"),
    ae: common_vendor.p({
      label: "所属组织",
      prop: "site_id",
      borderBottom: true
    })
  }, {}, {
    ap: common_vendor.sr("formRef", "17cb9ab9-1,17cb9ab9-0"),
    aq: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "100",
      errorType: "toast"
    }),
    ar: common_vendor.o($options.handlePickerConfirm),
    as: common_vendor.o(($event) => $data.showPicker = false),
    at: common_vendor.o($options.changeHandler),
    av: common_vendor.p({
      defaultIndex: $data.defaultIndex,
      show: $data.showPicker,
      columns: $data.columns,
      keyName: "label"
    }),
    aw: common_vendor.o($options.submit),
    ax: common_vendor.p({
      type: "primary",
      text: "提交",
      shape: "circle",
      size: "medium"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-17cb9ab9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
