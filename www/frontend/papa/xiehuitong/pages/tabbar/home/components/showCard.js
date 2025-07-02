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
const common_vendor = require("../../../../common/vendor.js");
const core_themeMixins = require("../../../../core/themeMixins.js");
const apis_index = require("../../../../apis/index.js");
const UScrollList = () => "../../../../components/scrollList/u-scroll-list.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  components: {
    // commonTitle,
    UScrollList
  },
  props: {
    // list: {
    //   type: Array,
    //   default: () => {
    //     return []
    //   },
    // },
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    clickMore() {
      this.$emit("clickMore");
    },
    clickItem(item) {
      this.$jumpPath(item);
    },
    // 获取列表数据
    getListData() {
      return __async(this, null, function* () {
        const params = {
          page: 1,
          size: 100,
          code: 1,
          is_enable: 1,
          business_type: 2
          // 1:主线 2: 平台
        };
        const res = yield apis_index.getWxMenu(params);
        if (res.code !== 200) {
          return;
        }
        const listData = [];
        res.data.list.forEach((item) => {
          listData.push({
            id: item.id,
            images: item.logo,
            name: item.title,
            link_url: item.link_url,
            jump_type: item.jump_type,
            // 1: 跳转 2: 外链 3: 小程序
            out_link_url: item.out_link_url
          });
        });
        this.list = listData;
        common_vendor.index.$log.info("获取金刚区列表数据", listData);
      });
    }
  },
  created() {
    this.getListData();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.images,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.clickItem(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-821bf6ba"]]);
wx.createComponent(Component);
