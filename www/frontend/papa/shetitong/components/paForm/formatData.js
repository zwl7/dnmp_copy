"use strict";
const TYPE_MAP_LIST = [
  {
    label: "单文本",
    c_type: "input",
    //c端类型
    value: 1
  },
  {
    label: "多文本",
    c_type: "textarea",
    value: 2
  },
  {
    label: "单选框",
    c_type: "radio",
    value: 4
  },
  {
    label: "多选框",
    c_type: "checkbox",
    value: 5
  },
  {
    label: "单选下拉框",
    c_type: "picker",
    value: 6
  },
  {
    label: "多选下拉框",
    c_type: "multiple",
    value: 7
  },
  {
    label: "时间选择器",
    c_type: "time",
    value: 8
  },
  {
    label: "日期选择器",
    c_type: "date",
    value: 9
  },
  {
    label: "图片上传",
    c_type: "image",
    value: 10
  }
];
class FormatBackDataClass {
  // platform 平台  event 赛事
  constructor(list, type = "platform") {
    list.map((e) => {
      e.key = e.key || "field_" + e.field_id;
    });
    this.baseList = list;
    this.typeMap = this.getTypeMap();
    this.handleType = type;
    if (!(list instanceof Array)) {
      throw new Error("请传入数组数据");
    }
  }
  // 获取配置Props
  getDataList() {
    let list = [];
    this.baseList.map((e) => {
      let obj = {};
      obj["label"] = e.field_name;
      obj["prop"] = e.key;
      if (["checkbox", "image", "picker", "multiple"].indexOf(this.typeMap[e.field_type]) != -1) {
        obj["strProp"] = e.key + "_str";
      }
      obj["placeholder"] = e.field_desc;
      obj["type"] = this.typeMap[e.field_type];
      obj["required"] = e.is_must == 1 ? true : false;
      obj["id"] = e.field_id;
      obj["default_value"] = e.field_default_value;
      obj["key"] = e.key;
      if (this.typeMap[e.field_type] == "radio") {
        obj["options"] = this.getSelectValue(e.field_select_value);
      }
      if (this.typeMap[e.field_type] == "checkbox") {
        obj["options"] = this.getSelectValue(e.field_select_value);
      }
      if (this.typeMap[e.field_type] == "picker") {
        obj["options"] = [this.getSelectValue(e.field_select_value)];
      }
      if (this.typeMap[e.field_type] == "multiple") {
        obj["options"] = this.getSelectValue(e.field_select_value);
      }
      list.push(obj);
    });
    return list;
  }
  // 获取rules
  getRules() {
    let obj = {};
    this.baseList.map((e) => {
      if (e.is_must == 1) {
        obj[e.key] = {
          type: ["checkbox", "image", "multiple"].indexOf(this.typeMap[e.field_type]) != -1 ? "array" : "string",
          required: true,
          message: e.field_desc,
          trigger: ["blur", "change"]
        };
      }
    });
    return obj;
  }
  // 获取默认的数据对象
  getDefaultData() {
    let obj = {};
    this.baseList.map((e) => {
      obj[e.key] = ["checkbox", "image", "multiple"].indexOf(this.typeMap[e.field_type]) != -1 ? [] : "";
    });
    return obj;
  }
  // 获取类型的映射表
  getTypeMap() {
    let obj = {};
    TYPE_MAP_LIST.map((e) => {
      obj[e.value] = e.c_type;
    });
    return obj;
  }
  // 获取类型选择
  getSelectValue(value) {
    let list = [];
    try {
      let data = value;
      if (!(value instanceof Array)) {
        data = JSON.parse(value);
      }
      list = data.map((e) => {
        return {
          label: e.name,
          value: this.handleType == "event" ? String(e.value) : String(e.name)
        };
      });
    } catch (e) {
      console.error(e);
    }
    return list;
  }
}
exports.FormatBackDataClass = FormatBackDataClass;
//# sourceMappingURL=formatData.js.map
