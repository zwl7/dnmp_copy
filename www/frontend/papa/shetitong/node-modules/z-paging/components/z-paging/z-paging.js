"use strict";
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("_handleListTouchstart", "_handleRefresherTouchstart", "_handleTouchDirectionChange", "_handleScrollViewBounce", "_handleWxsPullingDown", "_handleRefresherTouchmove", "_handleRefresherTouchend", "_handlePropUpdate", "_handleWxsPullingDownStatusChange");
};
const block1 = {};
if (!Array) {
  const _component_z_paging_refresh = common_vendor.resolveComponent("z-paging-refresh");
  const _component_z_paging_load_more = common_vendor.resolveComponent("z-paging-load-more");
  const _easycom_z_paging_empty_view2 = common_vendor.resolveComponent("z-paging-empty-view");
  (_component_z_paging_refresh + _component_z_paging_load_more + _easycom_z_paging_empty_view2)();
}
const _easycom_z_paging_empty_view = () => "../z-paging-empty-view/z-paging-empty-view.js";
if (!Math) {
  _easycom_z_paging_empty_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.cssSafeAreaInsetBottom === -1
  }, _ctx.cssSafeAreaInsetBottom === -1 ? {} : {}, {
    b: _ctx.showF2 && _ctx.showRefresherF2
  }, _ctx.showF2 && _ctx.showRefresherF2 ? {
    c: common_vendor.o(() => {
    }),
    d: common_vendor.s({
      "transform": _ctx.f2Transform,
      "transition": `transform .2s linear`,
      "height": _ctx.superContentHeight + "px",
      "z-index": _ctx.f2ZIndex
    })
  } : {}, {
    e: !_ctx.usePageScroll && _ctx.zSlots.top
  }, !_ctx.usePageScroll && _ctx.zSlots.top ? {} : _ctx.usePageScroll && _ctx.zSlots.top ? {
    g: common_vendor.o(() => {
    }),
    h: common_vendor.s({
      "top": `${_ctx.windowTop}px`,
      "z-index": _ctx.topZIndex
    })
  } : {}, {
    f: _ctx.usePageScroll && _ctx.zSlots.top,
    i: _ctx.zSlots.left
  }, _ctx.zSlots.left ? {
    j: _ctx.finalIsOldWebView ? 1 : ""
  } : {}, {
    k: _ctx.finalRefresherFixedBacHeight > 0
  }, _ctx.finalRefresherFixedBacHeight > 0 ? {
    l: common_vendor.s({
      "background": _ctx.refresherFixedBackground,
      "height": `${_ctx.finalRefresherFixedBacHeight}px`
    })
  } : {}, {
    m: _ctx.showRefresher
  }, _ctx.showRefresher ? common_vendor.e({
    n: _ctx.useRefresherStatusBarPlaceholder
  }, _ctx.useRefresherStatusBarPlaceholder ? {
    o: common_vendor.s({
      "height": `${_ctx.statusBarHeight}px`
    })
  } : {}, {
    p: !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2)
  }, !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2) ? {
    q: common_vendor.r("refresher", {
      refresherStatus: _ctx.refresherStatus
    })
  } : {}, {
    r: _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete
  }, _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete ? {} : _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2 ? {} : !_ctx.showCustomRefresher ? {
    v: common_vendor.sr("refresh", "fb5441fe-0"),
    w: common_vendor.s({
      "height": `${_ctx.finalRefresherThreshold - _ctx.finalRefresherThresholdPlaceholder}px`
    }),
    x: common_vendor.p({
      status: _ctx.refresherStatus,
      defaultThemeStyle: _ctx.finalRefresherThemeStyle,
      defaultText: _ctx.finalRefresherDefaultText,
      pullingText: _ctx.finalRefresherPullingText,
      refreshingText: _ctx.finalRefresherRefreshingText,
      completeText: _ctx.finalRefresherCompleteText,
      goF2Text: _ctx.finalRefresherGoF2Text,
      defaultImg: _ctx.refresherDefaultImg,
      pullingImg: _ctx.refresherPullingImg,
      refreshingImg: _ctx.refresherRefreshingImg,
      completeImg: _ctx.refresherCompleteImg,
      refreshingAnimated: _ctx.refresherRefreshingAnimated,
      showUpdateTime: _ctx.showRefresherUpdateTime,
      updateTimeKey: _ctx.refresherUpdateTimeKey,
      updateTimeTextMap: _ctx.finalRefresherUpdateTimeTextMap,
      imgStyle: _ctx.refresherImgStyle,
      titleStyle: _ctx.refresherTitleStyle,
      updateTimeStyle: _ctx.refresherUpdateTimeStyle,
      unit: _ctx.unit
    })
  } : {}, {
    s: _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2,
    t: !_ctx.showCustomRefresher,
    y: common_vendor.s({
      "height": `${_ctx.finalRefresherThreshold}px`,
      "background": _ctx.refresherBackground
    }),
    z: common_vendor.s({
      "margin-top": `-${_ctx.finalRefresherThreshold + _ctx.refresherThresholdUpdateTag}px`,
      "background": _ctx.refresherBackground,
      "opacity": _ctx.isTouchmoving ? 1 : 0
    })
  }) : {}, {
    A: _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed
  }, _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed ? {} : {}, {
    B: _ctx.useVirtualList
  }, _ctx.useVirtualList ? {
    C: common_vendor.s({
      height: _ctx.virtualPlaceholderTopHeight + "px"
    })
  } : {}, {
    D: _ctx.finalUseInnerList
  }, _ctx.finalUseInnerList ? common_vendor.e({
    E: _ctx.finalUseVirtualList
  }, _ctx.finalUseVirtualList ? {
    F: common_vendor.f(_ctx.virtualList, (item, index, i0) => {
      return common_vendor.e(_ctx.useCompatibilityMode ? {} : {
        a: "cell-" + i0,
        b: common_vendor.r("cell", {
          item,
          index: _ctx.virtualTopRangeIndex + index
        }, i0)
      }, {
        c: `zp-id-${item[_ctx.virtualCellIndexKey]}`,
        d: item["zp_unique_index"],
        e: common_vendor.o(($event) => _ctx._innerCellClick(item, _ctx.virtualTopRangeIndex + index), item["zp_unique_index"])
      });
    }),
    G: _ctx.useCompatibilityMode,
    H: common_vendor.s(_ctx.innerCellStyle)
  } : {
    I: common_vendor.f(_ctx.realTotalData, (item, index, i0) => {
      return {
        a: "cell-" + i0,
        b: common_vendor.r("cell", {
          item,
          index
        }, i0),
        c: index,
        d: common_vendor.o(($event) => _ctx._innerCellClick(item, index), index)
      };
    })
  }, {
    J: common_vendor.s(_ctx.innerListStyle)
  }) : {}, {
    K: _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore
  }, _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore ? common_vendor.e({
    L: _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore
  }, _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore ? {} : common_vendor.e({
    M: _ctx.zSlots.chatLoading
  }, _ctx.zSlots.chatLoading ? {
    N: common_vendor.r("chatLoading", {
      loadingMoreStatus: _ctx.loadingStatus
    })
  } : {
    O: common_vendor.o(($event) => _ctx._onLoadingMore("click")),
    P: common_vendor.p({
      zConfig: _ctx.zLoadMoreConfig
    })
  }), {
    Q: common_vendor.s(_ctx.chatRecordRotateStyle)
  }) : {}, {
    R: _ctx.useVirtualList
  }, _ctx.useVirtualList ? {
    S: common_vendor.s({
      height: _ctx.virtualPlaceholderBottomHeight + "px"
    })
  } : {}, {
    T: _ctx.showLoadingMoreDefault
  }, _ctx.showLoadingMoreDefault ? {} : _ctx.showLoadingMoreLoading ? {} : _ctx.showLoadingMoreNoMore ? {} : _ctx.showLoadingMoreFail ? {} : _ctx.showLoadingMoreCustom ? {
    Y: common_vendor.o(($event) => _ctx._onLoadingMore("click")),
    Z: common_vendor.p({
      zConfig: _ctx.zLoadMoreConfig
    })
  } : {}, {
    U: _ctx.showLoadingMoreLoading,
    V: _ctx.showLoadingMoreNoMore,
    W: _ctx.showLoadingMoreFail,
    X: _ctx.showLoadingMoreCustom,
    aa: _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode
  }, _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode ? {
    ab: common_vendor.s({
      height: _ctx.safeAreaBottom + "px"
    })
  } : {}, {
    ac: common_vendor.s(_ctx.finalPagingContentStyle),
    ad: _ctx.showEmpty
  }, _ctx.showEmpty ? common_vendor.e({
    ae: _ctx.zSlots.empty
  }, _ctx.zSlots.empty ? {
    af: common_vendor.r("empty", {
      isLoadFailed: _ctx.isLoadFailed
    })
  } : {
    ag: common_vendor.o(_ctx._emptyViewReload),
    ah: common_vendor.o(_ctx._emptyViewClick),
    ai: common_vendor.p({
      emptyViewImg: _ctx.finalEmptyViewImg,
      emptyViewText: _ctx.finalEmptyViewText,
      showEmptyViewReload: _ctx.finalShowEmptyViewReload,
      emptyViewReloadText: _ctx.finalEmptyViewReloadText,
      isLoadFailed: _ctx.isLoadFailed,
      emptyViewStyle: _ctx.emptyViewStyle,
      emptyViewTitleStyle: _ctx.emptyViewTitleStyle,
      emptyViewImgStyle: _ctx.emptyViewImgStyle,
      emptyViewReloadStyle: _ctx.emptyViewReloadStyle,
      emptyViewZIndex: _ctx.emptyViewZIndex,
      emptyViewFixed: _ctx.emptyViewFixed,
      unit: _ctx.unit
    })
  }, {
    aj: _ctx.emptyViewCenter ? 1 : "",
    ak: common_vendor.s(_ctx.emptyViewSuperStyle),
    al: common_vendor.s(_ctx.chatRecordRotateStyle)
  }) : {}, {
    am: common_vendor.s({
      justifyContent: _ctx.useChatRecordMode ? "flex-end" : "flex-start"
    }),
    an: common_vendor.s(_ctx.scrollViewInStyle),
    ao: common_vendor.s({
      "transform": _ctx.finalRefresherTransform,
      "transition": _ctx.refresherTransition
    }),
    ap: _ctx.wxsPropType,
    aq: _ctx.finalRefresherThreshold,
    ar: _ctx.refresherF2Enabled,
    as: _ctx.finalRefresherF2Threshold,
    at: _ctx.isIos,
    av: _ctx.loading || _ctx.isRefresherInComplete,
    aw: _ctx.useChatRecordMode,
    ax: _ctx.refresherEnabled,
    ay: _ctx.useCustomRefresher,
    az: _ctx.wxsPageScrollTop,
    aA: _ctx.wxsScrollTop,
    aB: _ctx.refresherMaxAngle,
    aC: _ctx.refresherNoTransform,
    aD: _ctx.refresherAngleEnableChangeContinued,
    aE: _ctx.usePageScroll,
    aF: _ctx.watchTouchDirectionChange,
    aG: _ctx.isTouchmoving,
    aH: _ctx.finalRefresherOutRate,
    aI: _ctx.finalRefresherPullRate,
    aJ: _ctx.hasTouchmove,
    aK: !_ctx.usePageScroll ? 1 : "",
    aL: !_ctx.showScrollbar ? 1 : "",
    aM: common_vendor.s(_ctx.chatRecordRotateStyle),
    aN: _ctx.scrollTop,
    aO: _ctx.scrollX,
    aP: _ctx.finalScrollable,
    aQ: _ctx.finalEnableBackToTop,
    aR: _ctx.showScrollbar,
    aS: _ctx.finalScrollWithAnimation,
    aT: _ctx.scrollIntoView,
    aU: _ctx.finalLowerThreshold,
    aV: _ctx.finalRefresherEnabled && !_ctx.useCustomRefresher,
    aW: _ctx.finalRefresherThreshold,
    aX: _ctx.finalRefresherDefaultStyle,
    aY: _ctx.refresherBackground,
    aZ: _ctx.finalRefresherTriggered,
    ba: common_vendor.o((...args) => _ctx._scroll && _ctx._scroll(...args)),
    bb: common_vendor.o((...args) => _ctx._onScrollToLower && _ctx._onScrollToLower(...args)),
    bc: common_vendor.o((...args) => _ctx._onScrollToUpper && _ctx._onScrollToUpper(...args)),
    bd: common_vendor.o((...args) => _ctx._onRestore && _ctx._onRestore(...args)),
    be: common_vendor.o(($event) => _ctx._onRefresh(true)),
    bf: _ctx.finalIsOldWebView ? 1 : "",
    bg: common_vendor.s(_ctx.scrollViewContainerStyle),
    bh: _ctx.zSlots.right
  }, _ctx.zSlots.right ? {
    bi: _ctx.finalIsOldWebView ? 1 : ""
  } : {}, {
    bj: !_ctx.usePageScroll ? 1 : "",
    bk: common_vendor.s(_ctx.finalScrollViewStyle),
    bl: !_ctx.usePageScroll && _ctx.zSlots.bottom
  }, !_ctx.usePageScroll && _ctx.zSlots.bottom ? {} : _ctx.usePageScroll && _ctx.zSlots.bottom ? {
    bn: common_vendor.o(() => {
    }),
    bo: common_vendor.s({
      "bottom": `${_ctx.windowBottom}px`
    })
  } : {}, {
    bm: _ctx.usePageScroll && _ctx.zSlots.bottom,
    bp: _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat
  }, _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat ? {
    bq: common_vendor.s({
      height: _ctx.chatRecordModeSafeAreaBottom + "px"
    }),
    br: common_vendor.s({
      height: _ctx.keyboardHeight + "px"
    })
  } : {}, {
    bs: _ctx.bottomBgColor,
    bt: _ctx.showBackToTopClass
  }, _ctx.showBackToTopClass ? common_vendor.e({
    bv: _ctx.zSlots.backToTop
  }, _ctx.zSlots.backToTop ? {} : {
    bw: _ctx.useChatRecordMode && !_ctx.backToTopImg.length ? 1 : "",
    bx: _ctx.backToTopImg.length ? _ctx.backToTopImg : _ctx.base64BackToTop
  }, {
    by: common_vendor.n(_ctx.finalBackToTopClass),
    bz: common_vendor.s(_ctx.finalBackToTopStyle),
    bA: common_vendor.o((...args) => _ctx._backToTopClick && _ctx._backToTopClick(...args))
  }) : {}, {
    bB: _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed
  }, _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed ? {} : {}, {
    bC: !_ctx.usePageScroll ? 1 : "",
    bD: !_ctx.usePageScroll && _ctx.fixed ? 1 : "",
    bE: _ctx.usePageScroll ? 1 : "",
    bF: _ctx.renderPropScrollTop < 1 ? 1 : "",
    bG: _ctx.useChatRecordMode ? 1 : "",
    bH: common_vendor.s(_ctx.finalPagingStyle)
  });
}
if (typeof block0 === "function")
  block0(common_vendor._sfc_main);
if (typeof block1 === "function")
  block1(common_vendor._sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(common_vendor._sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb5441fe"]]);
wx.createComponent(Component);
//# sourceMappingURL=z-paging.js.map
