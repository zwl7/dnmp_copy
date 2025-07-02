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
const apis_site = require("../../../apis/site.js");
const navBar = () => "../../../components/navBar.js";
const reportItem = () => "./components/reportItem.js";
const footItem = () => "./components/footItem.js";
const _sfc_main = {
  components: {
    navBar,
    reportItem,
    footItem
  },
  data() {
    return {
      type: "body",
      marginTop: "",
      form: {
        name: "一九",
        year: "234",
        sex: "女",
        time: "2044-06-07"
      },
      list: [],
      info: {
        list: [
          {
            name: "测量项",
            left: "左脚",
            right: "右脚"
          },
          {
            name: "脚长",
            left: "249.3",
            right: "249.3"
          },
          {
            name: "脚长",
            left: "249.3",
            right: "249.3"
          },
          {
            name: "脚长",
            left: "249.3",
            right: "249.3"
          }
        ],
        time: "2024-04-17 12：00",
        footImg: "https://apitest.wesais.cn/images/497/20240410/cd8d7b26b270f48d37035b99ca9af179.jpg"
      },
      fileFlag: false
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight, menuTop, userInfo } = app.globalData;
    this.marginTop = navBarHeight + menuTop;
    if (options.type) {
      this.type = options.type;
      if (this.type == "body") {
        this.getDetail({ specialCode: options.specialCode });
      }
    }
  },
  methods: {
    getDetail(param) {
      return __async(this, null, function* () {
        let res = yield apis_site.getWxFitnessRecord(param);
        let { code, data } = res;
        this.list = data;
      });
    },
    toDetail(item) {
    },
    openFile(filePath, type) {
      common_vendor.index.openDocument({
        filePath,
        showMenu: true,
        fileType: type,
        success: () => {
          console.log("文件打开成功!");
        },
        fail: function(err) {
          console.log("打开失败", err);
        }
      });
    },
    download(item) {
      return __async(this, null, function* () {
        let res = yield apis_site.getWxBodyCheckPdf({
          scan_id: item.scan_id
        });
        if (res.code == 200) {
          common_vendor.index.downloadFile({
            url: res.data,
            success: (downRes) => {
              if (downRes.statusCode === 200) {
                let fileTypes = ["pdf", "doc", "docx"];
                fileTypes.forEach((item2) => {
                  var _a;
                  if (((_a = res.data) == null ? void 0 : _a.indexOf(item2)) !== -1) {
                    this.openFile(downRes.tempFilePath, item2);
                  }
                });
              }
            },
            fail: (err) => {
              common_vendor.index.showToast({
                icon: "none",
                title: "文件下载失败"
              });
            }
          });
        } else {
          common_vendor.index.showToast({
            title: res.message,
            icon: "none"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_reportItem = common_vendor.resolveComponent("reportItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_footItem = common_vendor.resolveComponent("footItem");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_form_item2 + _easycom_uv_form2 + _component_reportItem + _component_empty + _component_footItem + _component_layout_default_uni)();
}
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_form_item + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "#fff",
      title: "体测结果",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.type != "body"
  }, $data.type != "body" ? {
    c: common_vendor.t($data.form.name),
    d: common_vendor.t($data.form.sex),
    e: common_vendor.sr("item1", "7a75c1bd-3,7a75c1bd-2"),
    f: common_vendor.p({
      prop: "name"
    }),
    g: common_vendor.t($data.form.year),
    h: common_vendor.t($data.form.time),
    i: common_vendor.sr("item1", "7a75c1bd-4,7a75c1bd-2"),
    j: common_vendor.p({
      prop: "sex"
    }),
    k: common_vendor.sr("formRef", "7a75c1bd-2,7a75c1bd-0"),
    l: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      labelWidth: "100",
      errorType: "toast"
    })
  } : {}, {
    m: $data.type == "body"
  }, $data.type == "body" ? common_vendor.e({
    n: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDetail(item), index),
        b: common_vendor.o(($event) => $options.download(item), index),
        c: "7a75c1bd-5-" + i0 + ",7a75c1bd-0",
        d: common_vendor.p({
          info: item
        }),
        e: index
      };
    }),
    o: $data.list.length == 0
  }, $data.list.length == 0 ? {} : {}) : {
    p: common_vendor.p({
      info: $data.info
    })
  }, {
    q: $data.marginTop + "rpx"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
