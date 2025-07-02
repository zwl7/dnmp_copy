"use strict";
const common_vendor = require("../common/vendor.js");
const listMixins = {
  data() {
    return {
      list: [],
      page: 1,
      count: 0,
      loading: false,
      finished: false
    };
  },
  computed: {
    loadStatus() {
      if (this.finished) {
        return "nomore";
      } else {
        if (this.loading) {
          return "loading";
        } else {
          return "loadmore";
        }
      }
    },
    showSkeleton() {
      if (this.list.length == 0 && !this.finished && this.loading) {
        return true;
      }
    },
    showEmpty() {
      if (this.list.length == 0 && this.finished && !this.loading) {
        return true;
      }
    },
    showLoadMore() {
      return !this.showEmpty && this.list.length > 0;
    }
  },
  onReachBottom() {
    console.log("触底加载");
    this.loadMore();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.finished = false;
    this.$nextTick(() => {
      this.getList(true);
      common_vendor.index.stopPullDownRefresh();
    });
  },
  methods: {
    loadMore() {
      console.log("触底加载");
      if (this.finished) {
        console.log("加载完成");
        this.loading = false;
        return;
      }
      this.page = this.page + 1;
      this.getList();
    },
    getListExtend(res, refresh = false) {
      try {
        res.data.list = res.data.list || res.data.listData || [];
        res.data.count = res.data.count || res.data.total || 0;
        let _this = this;
        if (res.code === 200 || res.code === 0) {
          if (this.handleDataCallBack instanceof Function) {
            res.data.list = this.handleDataCallBack(res.data.list);
          }
          this.list = this.list.concat(res.data.list);
          this.count = res.data.count;
          this.loading = false;
          if (res.data.list.length === 0) {
            this.finished = true;
          }
          if (!this.finished) {
            this.$isFullScreen().then((fres) => {
              let { windowHeight, scrollHeight } = fres;
              if (windowHeight + 70 >= scrollHeight) {
                _this.loadMore();
              }
            });
          }
          if (refresh) {
            common_vendor.index.stopPullDownRefresh();
          }
        } else {
          this.$showToastNone(res.message);
        }
      } catch (e) {
        console.error("handleList", e);
      }
    },
    resetData() {
      this.finished = false;
      this.loading = false;
      this.page = 1;
      this.list = [];
      this.$nextTick(() => {
        this.getList();
      });
    }
  }
};
exports.listMixins = listMixins;
