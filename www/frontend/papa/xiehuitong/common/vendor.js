"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
    var fulfilled = (value2) => {
      try {
        step(generator.next(value2));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value2) => {
      try {
        step(generator.throw(value2));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba;
function makeMap(str, expectsLowerCase) {
  const set2 = new Set(str.split(","));
  return (val) => set2.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$2.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$2(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value2) => objectToString.call(value2);
const toRawType = (value2) => {
  return toTypeString(value2).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value2, oldValue) => !Object.is(value2, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value2) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value2
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
function normalizeStyle(value2) {
  if (isArray$1(value2)) {
    const res = {};
    for (let i = 0; i < value2.length; i++) {
      const item = value2[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value2) || isObject$2(value2)) {
    return value2;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value2) {
  let res = "";
  if (isString(value2)) {
    res = value2;
  } else if (isArray$1(value2)) {
    for (let i = 0; i < value2.length; i++) {
      const normalized = normalizeClass(value2[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value2)) {
    for (const name in value2) {
      if (value2[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$2(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$2(val) && !isArray$1(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i = "") => {
  var _a;
  return isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i})` : v2;
};
const isObject$1 = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ Object.create(null);
  }
  interpolate(message, values, delimiters = defaultDelimiters) {
    if (!values) {
      return [message];
    }
    let tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format2, [startDelimiter, endDelimiter]) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format2.length) {
    let char = format2[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      let sub = "";
      char = format2[position++];
      while (char !== void 0 && char !== endDelimiter) {
        sub += char;
        char = format2[position++];
      }
      const isClosed = char === endDelimiter;
      const type2 = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type: type2 });
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile(tokens, values) {
  const compiled = [];
  let index2 = 0;
  const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index2 < tokens.length) {
    const token = tokens[index2];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        } else {
          {
            console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
          }
        }
        break;
      case "unknown":
        {
          console.warn(`Detect 'unknown' type of token!`);
        }
        break;
    }
    index2++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages3) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages3 && messages3[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages3 && Object.keys(messages3).length > 0) {
    locales = Object.keys(messages3);
  }
  const lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
class I18n {
  constructor({ locale, fallbackLocale, messages: messages3, watcher, formater: formater2 }) {
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater2 || defaultFormatter;
    this.messages = messages3 || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  setLocale(locale) {
    const oldLocale = this.locale;
    this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
    if (!this.messages[this.locale]) {
      this.messages[this.locale] = {};
    }
    this.message = this.messages[this.locale];
    if (oldLocale !== this.locale) {
      this.watchers.forEach((watcher) => {
        watcher(this.locale, oldLocale);
      });
    }
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(fn) {
    const index2 = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index2, 1);
    };
  }
  add(locale, message, override = true) {
    const curMessages = this.messages[locale];
    if (curMessages) {
      if (override) {
        Object.assign(curMessages, message);
      } else {
        Object.keys(message).forEach((key) => {
          if (!hasOwn(curMessages, key)) {
            curMessages[key] = message[key];
          }
        });
      }
    } else {
      this.messages[locale] = message;
    }
  }
  f(message, values, delimiters) {
    return this.formater.interpolate(message, values, delimiters).join("");
  }
  t(key, locale, values) {
    let message = this.message;
    if (typeof locale === "string") {
      locale = normalizeLocale(locale, this.messages);
      locale && (message = this.messages[locale]);
    } else {
      values = locale;
    }
    if (!hasOwn(message, key)) {
      console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
      return key;
    }
    return this.formater.interpolate(message[key], values).join("");
  }
}
function watchAppLocale(appVm, i18n) {
  if (appVm.$watchLocale) {
    appVm.$watchLocale((newLocale) => {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(() => appVm.$locale, (newLocale) => {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof index$1 !== "undefined" && index$1.getLocale) {
    return index$1.getLocale();
  }
  if (typeof global !== "undefined" && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale, messages3 = {}, fallbackLocale, watcher) {
  if (typeof locale !== "string") {
    const options = [
      messages3,
      locale
    ];
    locale = options[0];
    messages3 = options[1];
  }
  if (typeof locale !== "string") {
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== "string") {
    fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  const i18n = new I18n({
    locale,
    fallbackLocale,
    messages: messages3,
    watcher
  });
  let t = (key, values) => {
    if (typeof getApp !== "function") {
      t = function(key2, values2) {
        return i18n.t(key2, values2);
      };
    } else {
      let isWatchedAppLocale = false;
      t = function(key2, values2) {
        const appVm = getApp().$vm;
        if (appVm) {
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key2, values2);
      };
    }
    return t(key, values);
  };
  return {
    i18n,
    f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t(key, values) {
      return t(key, values);
    },
    add(locale2, message, override = true) {
      return i18n.add(locale2, message, override);
    },
    watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale() {
      return i18n.getLocale();
    },
    setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_EXIT = "onExit";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_SHARE_CHAT = "onShareChat";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const VIRTUAL_HOST_STYLE = "virtualHostStyle";
const VIRTUAL_HOST_CLASS = "virtualHostClass";
const VIRTUAL_HOST_HIDDEN = "virtualHostHidden";
const VIRTUAL_HOST_ID = "virtualHostId";
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject$2(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
const encode$1 = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode$1) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject$2(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_EXIT,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
function isUniLifecycleHook(name, value2, checkType = true) {
  if (checkType && !isFunction(value2)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  return createErrorHandler2(app);
});
const E = function() {
};
E.prototype = {
  _id: 1,
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx,
      _id: this._id
    });
    return this._id++;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, event) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && event) {
      for (var i = evts.length - 1; i >= 0; i--) {
        if (evts[i].fn === event || evts[i].fn._ === event || evts[i]._id === event) {
          evts.splice(i, 1);
          break;
        }
      }
      liveEvents = evts;
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
/**
* @dcloudio/uni-mp-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}
let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v2) {
    this._dirtyLevel = v2 ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type2, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep,
      {
        target,
        type: type2,
        key
      }
    );
  }
}
function trigger(target, type2, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type2 === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type2) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        4,
        {
          target,
          type: type2,
          key,
          newValue,
          oldValue,
          oldTarget
        }
      );
    }
  }
  resetScheduling();
}
function getDepFromReactive(object3, key) {
  var _a;
  return (_a = targetMap.get(object3)) == null ? void 0 : _a.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value2, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value2) && !isReadonly(value2)) {
        oldValue = toRaw(oldValue);
        value2 = toRaw(value2);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value2)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value2;
          return true;
        }
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value2, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value2);
      } else if (hasChanged(value2, oldValue)) {
        trigger(target, "set", key, value2, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$1(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    {
      warn$2(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    {
      warn$2(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
  true
);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value2) => value2;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value2);
  if (!hadKey) {
    target.add(value2);
    trigger(target, "add", value2, value2);
  }
  return this;
}
function set$1(key, value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value2);
  if (!hadKey) {
    trigger(target, "add", key, value2);
  } else if (hasChanged(value2, oldValue)) {
    trigger(target, "set", key, value2, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach3(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value2, key) => {
      return callback.call(thisArg, wrap(value2), wrap(key), observed);
    });
  };
}
function createIterableMethod(method3, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method3 === "entries" || method3 === Symbol.iterator && targetIsMap;
    const isKeyOnly = method3 === "keys" && targetIsMap;
    const innerIterator = target[method3](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value: value2, done } = innerIterator.next();
        return done ? { value: value2, done } : {
          value: isPair ? [wrap(value2[0]), wrap(value2[1])] : wrap(value2),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type2) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(
        `${capitalize(type2)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type2 === "delete" ? false : type2 === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method3) => {
    mutableInstrumentations2[method3] = createIterableMethod(method3, false, false);
    readonlyInstrumentations2[method3] = createIterableMethod(method3, true, false);
    shallowInstrumentations2[method3] = createIterableMethod(method3, false, true);
    shallowReadonlyInstrumentations2[method3] = createIterableMethod(
      method3,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$1(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type2 = toRawType(target);
    warn$2(
      `Reactive ${type2} contains both the raw and reactive versions of the same object${type2 === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value2) {
  return value2["__v_skip"] || !Object.isExtensible(value2) ? 0 : targetTypeMap(toRawType(value2));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    {
      warn$2(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value2) {
  if (isReadonly(value2)) {
    return isReactive(value2["__v_raw"]);
  }
  return !!(value2 && value2["__v_isReactive"]);
}
function isReadonly(value2) {
  return !!(value2 && value2["__v_isReadonly"]);
}
function isShallow(value2) {
  return !!(value2 && value2["__v_isShallow"]);
}
function isProxy(value2) {
  return isReactive(value2) || isReadonly(value2);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value2) {
  if (Object.isExtensible(value2)) {
    def(value2, "__v_skip", true);
  }
  return value2;
}
const toReactive = (value2) => isObject$2(value2) ? reactive(value2) : value2;
const toReadonly = (value2) => isObject$2(value2) ? readonly(value2) : value2;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      if (this._warnRecursive) {
        warn$2(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
      }
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v2) {
    this.effect.dirty = v2;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      warn$2("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ),
      {
        target: ref2,
        type: "get",
        key: "value"
      }
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel,
      {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      }
    );
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value2) {
  return createRef(value2, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value2, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value2 : toRaw(value2);
    this._value = __v_isShallow ? value2 : toReactive(value2);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value2, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value2)) {
      oldValue.value = value2;
      return true;
    } else {
      return Reflect.set(target, key, value2, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object3) {
  if (!isProxy(object3)) {
    warn$2(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray$1(object3) ? new Array(object3.length) : {};
  for (const key in object3) {
    ret[key] = propertyToRef(object3, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$2(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props2) {
  const res = [];
  const keys = Object.keys(props2);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props2[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value2, raw) {
  if (isString(value2)) {
    value2 = JSON.stringify(value2);
    return raw ? value2 : [`${key}=${value2}`];
  } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
    return raw ? value2 : [`${key}=${value2}`];
  } else if (isRef(value2)) {
    value2 = formatProp(key, toRaw(value2.value), true);
    return raw ? value2 : [`${key}=Ref<`, value2, `>`];
  } else if (isFunction(value2)) {
    return [`${key}=fn${value2.name ? `<${value2.name}>` : ``}`];
  } else {
    value2 = toRaw(value2);
    return raw ? value2 : [`${key}=`, value2];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type2, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type2);
  }
}
function callWithAsyncErrorHandling(fn, instance, type2, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type2, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type2);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type2, args));
  }
  return values;
}
function handleError(err, instance, type2, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type2] || type2;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type2, contextVNode, throwInDev);
}
function logError(err, type2, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type2] || type2;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick$1(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue$1[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue$1.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue$1.length; i++) {
    const cb = queue$1[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue$1.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b2) => getId(a) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b2) => {
  const diff2 = getId(a) - getId(b2);
  if (diff2 === 0) {
    if (a.pre && !b2.pre)
      return -1;
    if (b2.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue$1.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      // fixed by xxxxxx
      // 为 0 是 App，无 parent 是 Page 指向 App
      component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type2, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type2, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props2 = instance.vnode.props || EMPTY_OBJ;
  {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props2) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number3, trim: trim2 } = props2[modifiersKey] || EMPTY_OBJ;
    if (trim2) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number3) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props2[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props2[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props2[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props2[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props2[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$2(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
function resolveAsset(type2, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component2 = instance.type;
    {
      const selfName = getComponentName(
        Component2,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component2;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type2] || Component2[type2], name) || // global registration
      resolve(instance.appContext[type2], name)
    );
    if (!res && maybeSelfReference) {
      return Component2;
    }
    if (warnMissing && !res) {
      const extra = `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`;
      warn$1(`Failed to resolve ${type2.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(
      `resolve${capitalize(type2.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once: once2,
  onTrack,
  onTrigger
} = EMPTY_OBJ) {
  if (cb && once2) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  if (deep !== void 0 && typeof deep === "number") {
    warn$1(
      `watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`
    );
  }
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once2 !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s2) => {
    warn$1(
      `Invalid watch source: `,
      s2,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else {
        warnInvalidSource(s2);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i) => hasChanged(v2, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect$1(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
  const scope = getCurrentScope();
  const unwatch = () => {
    effect2.stop();
    if (scope) {
      remove(scope.effects, effect2);
    }
  };
  {
    effect2.onTrack = onTrack;
    effect2.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect$1(
      effect2.run.bind(effect2),
      instance && instance.suspense
    );
  } else {
    effect2.run();
  }
  return unwatch;
}
function instanceWatch(source, value2, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value2)) {
    cb = value2;
  } else {
    cb = value2.handler;
    options = value2;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value2, depth, currentDepth = 0, seen) {
  if (!isObject$2(value2) || value2["__v_skip"]) {
    return value2;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value2;
    }
    currentDepth++;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value2)) {
    return value2;
  }
  seen.add(value2);
  if (isRef(value2)) {
    traverse(value2.value, depth, currentDepth, seen);
  } else if (isArray$1(value2)) {
    for (let i = 0; i < value2.length; i++) {
      traverse(value2[i], depth, currentDepth, seen);
    }
  } else if (isSet(value2) || isMap(value2)) {
    value2.forEach((v2) => {
      traverse(v2, depth, currentDepth, seen);
    });
  } else if (isPlainObject$2(value2)) {
    for (const key in value2) {
      traverse(value2[key], depth, currentDepth, seen);
    }
  }
  return value2;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$2(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version$1,
      get config() {
        return context.config;
      },
      set config(v2) {
        {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin2) {
        {
          if (!context.mixins.includes(mixin2)) {
            context.mixins.push(mixin2);
          } else {
            warn$1(
              "Mixin has already been applied to target app" + (mixin2.name ? `: ${mixin2.name}` : "")
            );
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      // fixed by xxxxxx
      mount() {
      },
      // fixed by xxxxxx
      unmount() {
      },
      provide(key, value2) {
        if (key in context.provides) {
          warn$1(
            `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
          );
        }
        context.provides[key] = value2;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value2) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value2;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value2);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type2, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type2, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type2, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
  const injected = injectHook(
    type2,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type2], injected);
  }, target);
}
function injectHook(type2, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type2)) {
      target = target.root;
    }
    const hooks = target[type2] || (target[type2] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type2, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(
      (ErrorTypeStrings[type2] || type2.replace(/^on/, "")).replace(/ hook$/, "")
    );
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: (i) => i.__$el || (i.__$el = {}),
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      i.effect.dirty = true;
      queueJob(i.update);
    }),
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props: props2, accessCache, type: type2, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props2[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props2[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type2.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn$1(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value2) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value2;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn$1(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
      data[key] = value2;
      return true;
    } else if (hasOwn$1(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value2
        });
      } else {
        ctx[key] = value2;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn$1(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props2) {
  return isArray$1(props2) ? props2.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props2;
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type2, key) => {
    if (cache[key]) {
      warn$1(`${type2} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type2;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  function initInjections() {
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
  }
  {
    initInjections();
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject$2(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      };
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v2) => c2.value = v2
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  function initProvides() {
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    initProvides();
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register2(_hook.bind(publicThis)));
    } else if (hook) {
      register2(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$2(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type2) {
  callWithAsyncErrorHandling(
    isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type2
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$2(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$2(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m2) => mergeOptions(to, m2, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$1(to) && isArray$1(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props2 = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props2, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props2)) {
      props2[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props2, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props2 : shallowReactive(props2);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props2;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props: props2,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props2);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext() && patchFlag > 0 && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value2 = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value2 !== attrs[key]) {
              attrs[key] = value2;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props2[camelizedKey] = resolvePropValue$1(
              options,
              rawCurrentProps,
              camelizedKey,
              value2,
              instance,
              false
            );
          }
        } else {
          if (value2 !== attrs[key]) {
            attrs[key] = value2;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props2, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$1(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props2[key] = resolvePropValue$1(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props2[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props2, instance);
  }
}
function setFullProps(instance, rawProps, props2, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value2 = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props2[camelKey] = value2;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value2;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value2 !== attrs[key]) {
          attrs[key] = value2;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props2);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props2[key] = resolvePropValue$1(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn$1(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue$1(options, props2, key, value2, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value2 === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value2 = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value2 = propsDefaults[key] = defaultValue.call(
            null,
            props2
          );
          reset();
        }
      } else {
        value2 = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value2 = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value2 === "" || value2 === hyphenate(key))) {
        value2 = true;
      }
    }
  }
  return value2;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props2, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props2);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject$2(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$2(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType$1(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a, b2) {
  return getType$1(a) === getType$1(b2);
}
function getTypeIndex(type2, expectedTypes) {
  if (isArray$1(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type2));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type2) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props2, instance) {
  const resolvedValues = toRaw(props2);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp$1(
      key,
      resolvedValues[key],
      opt,
      shallowReadonly(resolvedValues),
      !hasOwn$1(rawProps, key) && !hasOwn$1(rawProps, hyphenate(key))
    );
  }
}
function validateProp$1(name, value2, prop, props2, isAbsent) {
  const { type: type2, required: required2, validator, skipCheck } = prop;
  if (required2 && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value2 == null && !required2) {
    return;
  }
  if (type2 != null && type2 !== true && !skipCheck) {
    let isValid = false;
    const types2 = isArray$1(type2) ? type2 : [type2];
    const expectedTypes = [];
    for (let i = 0; i < types2.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value2, types2[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage$1(name, value2, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value2, props2)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType$1(value2, type2) {
  let valid;
  const expectedType = getType$1(type2);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value2;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value2 instanceof type2;
    }
  } else if (expectedType === "Object") {
    valid = isObject$2(value2);
  } else if (expectedType === "Array") {
    valid = isArray$1(value2);
  } else if (expectedType === "null") {
    valid = value2 === null;
  } else {
    valid = value2 instanceof type2;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value2, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value2);
  const expectedValue = styleValue$1(value2, expectedType);
  const receivedValue = styleValue$1(value2, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue$1(value2, type2) {
  if (type2 === "String") {
    return `"${value2}"`;
  } else if (type2 === "Number") {
    return `${Number(value2)}`;
  } else {
    return `${value2}`;
  }
}
function isExplicable$1(type2) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type2.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
let supported;
let perf;
function startMeasure(instance, type2) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type2}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type2, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type2) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type2}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type2}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type2, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
const queuePostRenderEffect$1 = queuePostFlushCb;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
function isVNode(value2) {
  return value2 ? value2.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props2) {
  if (!props2)
    return null;
  return isProxy(props2) || InternalObjectKey in props2 ? extend({}, props2) : props2;
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type2 = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type: type2,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type2, appContext),
    emitsOptions: normalizeEmitsOptions(type2, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type2.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null,
    // fixed by xxxxxx 用于存储uni-app的元素缓存
    $uniElements: /* @__PURE__ */ new Map(),
    $templateUniElementRefs: [],
    $templateUniElementStyles: {},
    $eS: {},
    $eA: {}
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  internalSetCurrentInstance = (i) => {
    currentInstance = i;
  };
  setInSSRSetupState = (v2) => {
    isInSSRComponentSetup = v2;
  };
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isSSR && setInSSRSetupState(isSSR);
  const {
    props: props2
    /*, children*/
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props2, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        shallowReadonly(instance.props),
        setupContext
      ]
    );
    resetTracking();
    reset();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$1(
          `setup() returned a Promise, but the version of Vue you are using does not support it yet.`
        );
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject$2(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
const isRuntimeOnly = () => true;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions$1(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  ));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray$1(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed = (getterOrOptions, debugOptions) => {
  const c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c2._warnRecursive = true;
    }
  }
  return c2;
};
const version$1 = "3.4.21";
const warn = warn$1;
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          } else {
            if (currentValue.length < preValue.length) {
              setResult(
                result,
                (path == "" ? "" : path + ".") + key,
                currentValue
              );
            } else {
              currentValue.forEach((item, index2) => {
                _diff(
                  item,
                  preValue[index2],
                  (path == "" ? "" : path + ".") + key + "[" + index2 + "]",
                  result
                );
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          } else {
            for (let subKey in currentValue) {
              _diff(
                currentValue[subKey],
                preValue[subKey],
                (path == "" ? "" : path + ".") + key + "." + subKey,
                result
              );
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v2) {
  result[k] = v2;
}
function hasComponentEffect(instance) {
  return queue$1.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick$1(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(
        fn.bind(instance.proxy),
        instance,
        14
      );
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone$1(src, seen) {
  src = unwrapper(src);
  const type2 = typeof src;
  if (type2 === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray$1(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone$1(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn$1(src, name)) {
          copy[name] = clone$1(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type2 !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone$1(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  data.$eS = instance.$eS || {};
  data.$eA = instance.$eA || {};
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(
    options,
    instance,
    publicThis
  );
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const {
    setupState,
    $templateRefs,
    $templateUniElementRefs,
    ctx: { $scope, $mpPlatform }
  } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$scope || !$templateRefs && !$templateUniElementRefs) {
    return;
  }
  if (isUnmount) {
    $templateRefs && $templateRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
    $templateUniElementRefs && $templateUniElementRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
    return;
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    if (refs.length === 0) {
      return [];
    }
    const mpComponents = (
      // 字节小程序 selectAllComponents 可能返回 null
      // https://github.com/dcloudio/uni-app/issues/3954
      ($scope.selectAllComponents(".r") || []).concat(
        $scope.selectAllComponents(".r-i-f") || []
      )
    );
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    if ($templateRefs) {
      const refs = doSetByRefs($templateRefs);
      if (refs.length && instance.proxy && instance.proxy.$scope) {
        instance.proxy.$scope.setData({ r1: 1 }, () => {
          doSetByRefs(refs);
        });
      }
    }
  };
  if ($templateUniElementRefs && $templateUniElementRefs.length) {
    nextTick(instance, () => {
      $templateUniElementRefs.forEach((templateRef) => {
        if (isArray$1(templateRef.v)) {
          templateRef.v.forEach((v2) => {
            setTemplateRef(templateRef, v2, setupState);
          });
        } else {
          setTemplateRef(templateRef, templateRef.v, setupState);
        }
      });
    });
  }
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value2) {
  if (isObject$2(value2)) {
    markRaw(value2);
  }
  return value2;
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find(
    (com) => com && (com.properties || com.props).uI === id
  );
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return toSkip(mpInstance);
  }
  return null;
}
function setTemplateRef({ r: r2, f: f2 }, refValue, setupState) {
  if (isFunction(r2)) {
    r2(refValue, {});
  } else {
    const _isString = isString(r2);
    const _isRef = isRef(r2);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray$1(r2.value)) {
          r2.value = [];
        }
        const existing = r2.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          if (refValue.$) {
            onBeforeUnmount(() => remove(existing, refValue), refValue.$);
          }
        }
      } else if (_isString) {
        if (hasOwn$1(setupState, r2)) {
          setupState[r2] = refValue;
        }
      } else if (isRef(r2)) {
        r2.value = refValue;
      } else {
        warnRef(r2);
      }
    } else {
      warnRef(r2);
    }
  }
}
function warnRef(ref2) {
  warn("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
const queuePostRenderEffect = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
    startMeasure(instance, `mount`);
  }
  {
    startMeasure(instance, `init`);
  }
  setupComponent(instance);
  {
    endMeasure(instance, `init`);
  }
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
    endMeasure(instance, `mount`);
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const {
    type: Component2,
    vnode,
    proxy,
    withProxy,
    props: props2,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    uid: uid2,
    appContext: {
      app: {
        config: {
          globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 }
        }
      }
    },
    inheritAttrs
  } = instance;
  instance.$uniElementIds = /* @__PURE__ */ new Map();
  instance.$templateRefs = [];
  instance.$templateUniElementRefs = [];
  instance.$templateUniElementStyles = {};
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props2, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(
        proxyToUse,
        proxyToUse,
        renderCache,
        props2,
        setupState,
        data,
        ctx
      );
    } else {
      fallthroughAttrs(
        inheritAttrs,
        props2,
        propsOptions,
        Component2.props ? attrs : getFunctionalFallthrough(attrs)
      );
      const render2 = Component2;
      result = render2.length > 1 ? render2(props2, { attrs, slots, emit: emit2 }) : render2(
        props2,
        null
        /* we know it doesn't need it */
      );
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props2, propsOptions, fallthroughAttrs2) {
  if (props2 && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter(
      (key) => key !== "class" && key !== "style"
    );
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props2[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys.forEach((key) => props2[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(
        data,
        oldScopedSlotData[index2]
      );
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(
    instance
  );
  instance.$updateScopedSlots = () => nextTick$1(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      {
        devtoolsComponentAdded(instance);
      }
    } else {
      const { next, bu, u } = instance;
      {
        pushWarningContext(next || instance.vnode);
      }
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      if (u) {
        queuePostRenderEffect(u);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect2 = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    NOOP,
    () => queueJob(update),
    instance.scope
    // track it in component's effect scope
  );
  const update = instance.update = () => {
    if (effect2.dirty) {
      effect2.run();
    }
  };
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect2.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect2.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  {
    update();
  }
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  {
    const parentInstance = instance.parent;
    if (parentInstance) {
      const $children = parentInstance.ctx.$children;
      const target = getExposeProxy(instance) || instance.proxy;
      const index2 = $children.indexOf(target);
      if (index2 > -1) {
        $children.splice(index2, 1);
      }
    }
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect(um);
  }
  queuePostRenderEffect(() => {
    instance.isUnmounted = true;
  });
  {
    devtoolsComponentRemoved(instance);
  }
}
const oldCreateApp = createAppAPI();
function getTarget() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof my !== "undefined") {
    return my;
  }
}
function createVueApp(rootComponent, rootProps = null) {
  const target = getTarget();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode2 = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent22(initialVNode, options) {
    return mountComponent(createVNode2(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(
      createVNode2({ type: rootComponent }),
      {
        mpType: "app",
        mpInstance: null,
        parentComponent: null,
        slots: [],
        props: null
      }
    );
    app._instance = instance.$;
    {
      devtoolsInitApp(app, version$1);
    }
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn(`Cannot unmount an app.`);
  };
  return app;
}
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    warn(`useCssVars is called without current active component instance.`);
    return;
  }
  initCssVarsRender(instance, getter);
}
function initCssVarsRender(instance, getter) {
  instance.ctx.__cssVars = () => {
    const vars = getter(instance.proxy);
    const cssVars = {};
    for (const key in vars) {
      cssVars[`--${key}`] = vars[key];
    }
    return cssVars;
  };
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray$1(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set$2(target, key, val) {
  return target[key] = val;
}
function $callMethod(method3, ...args) {
  const fn = this[method3];
  if (fn) {
    return fn(...args);
  }
  console.error(`method ${method3} not found`);
  return null;
}
function createErrorHandler(app) {
  const userErrorHandler = app.config.errorHandler;
  return function errorHandler(err, instance, info) {
    if (userErrorHandler) {
      userErrorHandler(err, instance, info);
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    if (appInstance[ON_ERROR]) {
      {
        appInstance.proxy.$callHook(ON_ERROR, err);
      }
    } else {
      logError(err, info, instance ? instance.$.vnode : null, false);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c2) {
    return "%" + ("00" + c2.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index$1.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error2) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + error2.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set$2;
    globalProperties.$applyOptions = applyOptions$2;
    globalProperties.$callMethod = $callMethod;
  }
  {
    index$1.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props2) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props2)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method3 = "createApp";
  if (typeof global !== "undefined" && typeof global[method3] !== "undefined") {
    return global[method3];
  } else if (typeof my !== "undefined") {
    return my[method3];
  }
}
function stringifyStyle(value2) {
  if (isString(value2)) {
    return value2;
  }
  return stringify(normalizeStyle(value2));
}
function stringify(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    ret += `${key.startsWith(`--`) ? key : hyphenate(key)}:${styles[key]};`;
  }
  return ret;
}
function vOn(value2, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq" || ctx.$mpPlatform === "mp-xhs") && (isString(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value2) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value2;
  } else {
    mpInstance[name] = createInvoker(value2, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (instance && instance.ctx.$getTriggerEventDetail) {
      if (typeof e2.detail === "number") {
        e2.detail = instance.ctx.$getTriggerEventDetail(e2.detail);
      }
    }
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray$1(res) || isPromise(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  // touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
  // 'touchstart',
  // 'touchmove',
  // 'touchcancel',
  // 'touchend',
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event, instance) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn$1(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn$1(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject$2(event.detail) && hasOwn$1(event.detail, "checked") && !hasOwn$1(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject$2(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value2) {
  if (isArray$1(value2)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value2.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value2;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray$1(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject$2(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function renderSlot(name, props2 = {}, key) {
  const instance = getCurrentInstance();
  const { parent, isMounted, ctx: { $scope } } = instance;
  const vueIds = ($scope.properties || $scope.props).uI;
  if (!vueIds) {
    return;
  }
  if (!parent && !isMounted) {
    onMounted(() => {
      renderSlot(name, props2, key);
    }, instance);
    return;
  }
  const invoker = findScopedSlotInvoker(vueIds, instance);
  if (invoker) {
    invoker(name, props2, key);
  }
}
function findScopedSlotInvoker(vueId, instance) {
  let parent = instance.parent;
  while (parent) {
    const invokers = parent.$ssi;
    if (invokers && invokers[vueId]) {
      return invokers[vueId];
    }
    parent = parent.parent;
  }
}
function setRef(ref2, id, opts = {}) {
  const { $templateRefs } = getCurrentInstance();
  $templateRefs.push({ i: id, r: ref2, k: opts.k, f: opts.f });
}
function withModelModifiers(fn, { number: number3, trim: trim2 }, isComponent = false) {
  if (isComponent) {
    return (...args) => {
      if (trim2) {
        args = args.map((a) => a.trim());
      } else if (number3) {
        args = args.map(toNumber);
      }
      return fn(...args);
    };
  }
  return (event) => {
    const value2 = event.detail.value;
    if (trim2) {
      event.detail.value = value2.trim();
    } else if (number3) {
      event.detail.value = toNumber(value2);
    }
    return fn(event);
  };
}
const o$1 = (value2, key) => vOn(value2, key);
const f$1 = (source, renderItem) => vFor(source, renderItem);
const r$1 = (name, props2, key) => renderSlot(name, props2, key);
const s$1 = (value2) => stringifyStyle(value2);
const e$1 = (target, ...sources) => extend(target, ...sources);
const n$1 = (value2) => normalizeClass(value2);
const t$1 = (val) => toDisplayString(val);
const p$1 = (props2) => renderProps(props2);
const sr = (ref2, id, opts) => setRef(ref2, id, opts);
const m$1 = (fn, modifiers, isComponent = false) => withModelModifiers(fn, modifiers, isComponent);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
function getLocaleLanguage$1() {
  let localeLanguage = "";
  {
    const appBaseInfo = wx.getAppBaseInfo();
    const language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp(key, data[key], protocol[key], !hasOwn$1(data, key));
    if (isString(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray$1(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp(name, value2, prop, isAbsent) {
  if (!isPlainObject$2(prop)) {
    prop = { type: prop };
  }
  const { type: type2, required: required2, validator } = prop;
  if (required2 && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value2 == null && !required2) {
    return;
  }
  if (type2 != null) {
    let isValid = false;
    const types2 = isArray$1(type2) ? type2 : [type2];
    const expectedTypes = [];
    for (let i = 0; i < types2.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value2, types2[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage(name, value2, expectedTypes);
    }
  }
  if (validator) {
    return validator(value2);
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType(value2, type2) {
  let valid;
  const expectedType = getType(type2);
  if (isSimpleType(expectedType)) {
    const t = typeof value2;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value2 instanceof type2;
    }
  } else if (expectedType === "Object") {
    valid = isObject$2(value2);
  } else if (expectedType === "Array") {
    valid = isArray$1(value2);
  } else {
    {
      valid = value2 instanceof type2;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value2, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value2);
  const expectedValue = styleValue(value2, expectedType);
  const receivedValue = styleValue(value2, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue(value2, type2) {
  if (type2 === "String") {
    return `"${value2}"`;
  } else if (type2 === "Number") {
    return `${Number(value2)}`;
  } else {
    return `${value2}`;
  }
}
function isExplicable(type2) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type2.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject$2(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue(hooks, data, params) {
  let promise2 = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise2) {
      promise2 = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise2 = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise2 || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray$1(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method3, returnValue) {
  const returnValueHooks = [];
  if (isArray$1(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method3];
  if (interceptor && isArray$1(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method3) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method3];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method3, api, options, params) {
  const interceptor = getApiInterceptorHooks(method3);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray$1(interceptor.invoke)) {
      const res = queue(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method3), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject$2(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise2) {
  return promise2;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, fn, extend(args, { success: resolve2, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  args[0];
  {
    return;
  }
}
function invokeSuccess(id, name, res) {
  const result = {
    errMsg: name + ":ok"
  };
  return invokeCallback(id, extend(res || {}, result));
}
function invokeFail(id, name, errMsg, errRes = {}) {
  const errMsgPrefix = name + ":fail";
  let apiErrMsg = "";
  if (!errMsg) {
    apiErrMsg = errMsgPrefix;
  } else if (errMsg.indexOf(errMsgPrefix) === 0) {
    apiErrMsg = errMsg;
  } else {
    apiErrMsg = errMsgPrefix + " " + errMsg;
  }
  {
    delete errRes.errCode;
  }
  let res = extend({ errMsg: apiErrMsg }, errRes);
  return invokeCallback(id, res);
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  const errMsg = formatApiArgs(args);
  if (errMsg) {
    return errMsg;
  }
}
function parseErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    if (typeof globalThis === "undefined" || !globalThis.harmonyChannel) {
      console.error(errMsg.message + "\n" + errMsg.stack);
    }
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, parseErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { windowWidth, pixelRatio, platform: platform2 } = Object.assign({}, wx.getWindowInfo(), {
    platform: wx.getDeviceInfo().platform
  });
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform2 === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number3, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number3 = Number(number3);
  if (number3 === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number3 / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number3 < 0 ? -result : result;
}, Upx2pxProtocol);
function __f__(type2, filename, ...args) {
  if (filename) {
    args.push(filename);
  }
  console[type2].apply(console, args);
}
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray$1(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$1(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method3, interceptor) => {
  if (isString(method3) && isPlainObject$2(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method3] || (scopedInterceptors[method3] = {}), interceptor);
  } else if (isPlainObject$2(method3)) {
    mergeInterceptorHook(globalInterceptors, method3);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method3, interceptor) => {
  if (isString(method3)) {
    if (isPlainObject$2(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method3], interceptor);
    } else {
      delete scopedInterceptors[method3];
    }
  } else if (isPlainObject$2(method3)) {
    removeInterceptorHook(globalInterceptors, method3);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: [Function, Number]
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
class EventBus {
  constructor() {
    this.$emitter = new E$1();
  }
  on(name, callback) {
    return this.$emitter.on(name, callback);
  }
  once(name, callback) {
    return this.$emitter.once(name, callback);
  }
  off(name, callback) {
    if (!name) {
      this.$emitter.e = {};
      return;
    }
    this.$emitter.off(name, callback);
  }
  emit(name, ...args) {
    this.$emitter.emit(name, ...args);
  }
}
const eventBus = new EventBus();
const $on = defineSyncApi(API_ON, (name, callback) => {
  eventBus.on(name, callback);
  return () => eventBus.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  eventBus.once(name, callback);
  return () => eventBus.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!isArray$1(name))
    name = name ? [name] : [];
  name.forEach((n) => {
    eventBus.off(n, callback);
  });
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  eventBus.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve: resolve2, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve2({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|__f__|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|rpx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const TASK_APIS = ["request", "downloadFile", "uploadFile", "connectSocket"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function isTaskApi(name) {
  return TASK_APIS.indexOf(name) !== -1;
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise2 = this.constructor;
    return this.then((value2) => promise2.resolve(onfinally && onfinally()).then(() => value2), (reason) => promise2.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve2,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method3, returnValue) {
    return function(res) {
      return method3(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject$2(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn$1(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key}`);
          } else if (isString(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject$2(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn$1(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction(fromArgs)) {
      if (isFunction(argsOption)) {
        argsOption(fromArgs, {});
      }
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    const realKeepReturnValue = keepReturnValue || false;
    return processArgs(methodName, res, returnValue, {}, realKeepReturnValue);
  }
  return function wrapper(methodName, method3) {
    const hasProtocol = hasOwn$1(protocols2, methodName);
    if (!hasProtocol && typeof wx[methodName] !== "function") {
      return method3;
    }
    const needWrapper = hasProtocol || isFunction(protocols2.returnValue) || isContextApi(methodName) || isTaskApi(methodName);
    const hasMethod = hasProtocol || isFunction(method3);
    if (!hasProtocol && !method3) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    if (!needWrapper || !hasMethod) {
      return method3;
    }
    const protocol = protocols2[methodName];
    return function(arg1, arg2) {
      let options = protocol || {};
      if (isFunction(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isContextApi(methodName) || isTaskApi(methodName)) {
        if (returnValue && !returnValue.__v_skip) {
          returnValue.__v_skip = true;
        }
      }
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return getLocaleLanguage$1();
};
const setLocale = (locale) => {
  const app = isFunction(getApp) && getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function getOSInfo(system, platform2) {
  let osName = "";
  let osVersion = "";
  if (platform2 && false) {
    osName = platform2;
    osVersion = system;
  } else {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  return {
    osName: osName.toLocaleLowerCase(),
    osVersion
  };
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform: platform2, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  const { osName, osVersion } = getOSInfo(system, platform2);
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = (language || "").replace(/_/g, "-");
  const parameters = {
    appId: "",
    appName: "全民健身",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.53",
    uniCompilerVersion: "4.53",
    uniRuntimeVersion: "4.53",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName,
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0,
    isUniAppX: false
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m2 = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m2) !== -1) {
        deviceType = deviceTypeMaps[_m2];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray$1(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model, system = "", platform: platform2 = "" } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    const { osName, osVersion } = getOSInfo(system, platform2);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model,
      osName,
      osVersion
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = (language || "").replace(/_/g, "-");
    const parameters = {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "",
      appName: "全民健身",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      isUniAppX: false,
      uniPlatform: "mp-weixin",
      uniCompileVersion: "4.53",
      uniCompilerVersion: "4.53",
      uniRuntimeVersion: "4.53"
    };
    extend(toRes, parameters);
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const onError = {
  args(fromArgs) {
    const app = getApp({ allowDefault: true }) || {};
    if (!app.$vm) {
      if (!wx.$onErrorHandlers) {
        wx.$onErrorHandlers = [];
      }
      wx.$onErrorHandlers.push(fromArgs);
    } else {
      injectHook(ON_ERROR, fromArgs, app.$vm.$);
    }
  }
};
const offError = {
  args(fromArgs) {
    const app = getApp({ allowDefault: true }) || {};
    if (!app.$vm) {
      if (!wx.$onErrorHandlers) {
        return;
      }
      const index2 = wx.$onErrorHandlers.findIndex((fn) => fn === fromArgs);
      if (index2 !== -1) {
        wx.$onErrorHandlers.splice(index2, 1);
      }
    } else if (fromArgs.__weh) {
      const onErrors = app.$vm.$[ON_ERROR];
      if (onErrors) {
        const index2 = onErrors.indexOf(fromArgs.__weh);
        if (index2 > -1) {
          onErrors.splice(index2, 1);
        }
      }
    }
  }
};
const onSocketOpen = {
  args() {
    if (wx.__uni_console__) {
      if (wx.__uni_console_warned__) {
        return;
      }
      wx.__uni_console_warned__ = true;
      console.warn(`开发模式下小程序日志回显会使用 socket 连接，为了避免冲突，建议使用 SocketTask 的方式去管理 WebSocket 或手动关闭日志回显功能。[详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)`);
    }
  }
};
const onSocketMessage = onSocketOpen;
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  rpx2px: upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback,
  __f__
};
function initUni(api, protocols2, platform2 = wx) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn$1(target, key)) {
        return target[key];
      }
      if (hasOwn$1(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn$1(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper(key, platform2[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction(fail) && fail(res);
    }
    isFunction(complete) && complete(res);
  };
}
const objectKeys = [
  "qy",
  "env",
  "error",
  "version",
  "lanDebug",
  "cloud",
  "serviceMarket",
  "router",
  "worklet",
  "__webpack_require_UNI_MP_PLUGIN__"
];
const singlePageDisableKey = ["lanDebug", "router", "worklet"];
const launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof wx[key] === "function";
}
function initWx() {
  const newWx = {};
  for (const key in wx) {
    if (isWxKey(key)) {
      newWx[key] = wx[key];
    }
  }
  if (typeof globalThis !== "undefined" && typeof requireMiniProgram === "undefined") {
    globalThis.wx = newWx;
  }
  return newWx;
}
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx$2.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    if (component.$scope) {
      return oldIn.call(this, component.$scope);
    }
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
if (!wx$2.canIUse("getAppBaseInfo")) {
  wx$2.getAppBaseInfo = wx$2.getSystemInfoSync;
}
if (!wx$2.canIUse("getWindowInfo")) {
  wx$2.getWindowInfo = wx$2.getSystemInfoSync;
}
if (!wx$2.canIUse("getDeviceInfo")) {
  wx$2.getDeviceInfo = wx$2.getSystemInfoSync;
}
let baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx$2.getSystemInfoSync();
}
const host = baseInfo ? baseInfo.host : null;
const shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createSelectorQuery,
  getProvider,
  shareVideoMessage
});
const compressImage = {
  args(fromArgs, toArgs) {
    if (fromArgs.compressedHeight && !toArgs.compressHeight) {
      toArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !toArgs.compressWidth) {
      toArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compressImage,
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo,
  offError,
  onError,
  onSocketMessage,
  onSocketOpen,
  previewImage,
  redirectTo,
  showActionSheet
});
const wx$1 = initWx();
var index$1 = initUni(shims, protocols, wx$1);
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn$1(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
const WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach((name) => {
      const matches = name.match(WORKLET_RE);
      if (matches) {
        const workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray$1(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function getLocaleLanguage() {
  let localeLanguage = "";
  {
    const appBaseInfo = wx.getAppBaseInfo();
    const language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  {
    Object.defineProperties(ctx, {
      // only id
      [VIRTUAL_HOST_ID]: {
        get() {
          const id = this.$scope.data[VIRTUAL_HOST_ID];
          return id === void 0 ? "" : id;
        }
      }
    });
  }
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray$1(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method3) => {
    ctx[method3] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method3]) {
        return mpInstance[method3].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn$1(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
  // 'onReady', // lifetimes.ready
  // 'onPageScroll', // 影响性能，开发者手动注册
  // 'onShareTimeline', // 右上角菜单，开发者手动注册
  // 'onShareAppMessage' // 右上角菜单，开发者手动注册
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (isUniLifecycleHook(name, vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin2) => findHooks(mixin2, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn$1(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray$1(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin2) => {
        hooks.forEach((hook) => {
          if (hasOwn$1(mixin2, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    // mp-alipay 组件 data 初始化比 onLaunch 早，提前挂载
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope && ctx.$callHook) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  const onErrorHandlers = wx.$onErrorHandlers;
  if (onErrorHandlers) {
    onErrorHandlers.forEach((fn) => {
      injectHook(ON_ERROR, fn, internalInstance);
    });
    onErrorHandlers.length = 0;
  }
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm);
    const app = isFunction(getApp) && getApp({
      allowDefault: true
    });
    if (!app)
      return;
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn$1(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn$1(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(getLocaleLanguage());
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v2) {
      locale.value = v2;
    }
  });
}
const builtInProps = [
  // 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
  // event-opts
  "eO",
  // 组件 ref
  "uR",
  // 组件 ref-in-for
  "uRIF",
  // 组件 id
  "uI",
  // 组件类型 m: 小程序组件
  "uT",
  // 组件 props
  "uP",
  // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
  "uS"
];
function initDefaultProps(options, isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    let observerSlots = function(newVal) {
      const $slots = /* @__PURE__ */ Object.create(null);
      newVal && newVal.forEach((slotName) => {
        $slots[slotName] = true;
      });
      this.setData({
        $slots
      });
    };
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: []
    };
    {
      properties.uS.observer = observerSlots;
    }
  }
  if (options.behaviors) {
    if (options.behaviors.includes("wx://form-field")) {
      if (!options.properties || !options.properties.name) {
        properties.name = {
          type: null,
          value: ""
        };
      }
      if (!options.properties || !options.properties.value) {
        properties.value = {
          type: null,
          value: ""
        };
      }
    }
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties[VIRTUAL_HOST_STYLE] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_CLASS] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_HIDDEN] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_ID] = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type2, defaultValue) {
  if (isArray$1(type2) && type2.length === 1) {
    return type2[0];
  }
  return type2;
}
function normalizePropType(type2, defaultValue) {
  const res = parsePropType(type2);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray$1(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject$2(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject$2(opts)) {
        let value2 = opts.default;
        if (isFunction(value2)) {
          value2 = value2();
        }
        const type2 = opts.type;
        opts.type = normalizePropType(type2);
        properties[key] = {
          type: opts.type,
          value: value2
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(resolvePropValue(properties.uP))) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject$2(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = resolvePropValue(properties[name]);
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray$1(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
    vm.$watch("modelValue", () => {
      vm.$scope && vm.$scope.setData({
        name: vm.name,
        value: vm.modelValue
      });
    }, {
      immediate: true
    });
  }
}
function resolvePropValue(prop) {
  return prop;
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(resolvePropValue(up), this.$vm.$);
    } else if (resolvePropValue(this.properties.uT) === "m") {
      updateMiniProgramComponentProperties(resolvePropValue(up), this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray$1(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray$1(vueProps)) {
          vueProps.push("name");
          vueProps.push("modelValue");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse: parse2, mocks: mocks2, isPage: isPage2, isPageInProject, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray$1(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject$2(item.options)) {
        extend(options, item.options);
      }
    });
  }
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  {
    initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
  }
  if (parse2) {
    parse2(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getAppVm().$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse: parse2, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    isPageInProject: true,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    {
      this.options = query;
    }
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse2 && parse2(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  const newTriggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [
      customizeEvent(event),
      ...args
    ]);
  };
  try {
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error2) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        // vueSlots
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
      if (!isMiniProgramPage) {
        initFormField(this.$vm);
      }
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  handleLink,
  initLifetimes,
  initRelation,
  isPage,
  mocks
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const getActivePinia = () => getCurrentInstance() && inject(piniaSymbol) || activePinia;
const piniaSymbol = Symbol("pinia");
function isPlainObject$1(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = typeof window !== "undefined";
const USE_DEVTOOLS = IS_CLIENT;
const componentStateTypes = [];
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
}
function patchActionForGrouping(store, actionNames) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const trackedStore = new Proxy(store, {
        get(...args) {
          return Reflect.get(...args);
        },
        set(...args) {
          return Reflect.set(...args);
        }
      });
      return actions[actionName].apply(trackedStore, arguments);
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  if (options.state) {
    store._isOptionsAPI = true;
  }
  if (typeof options.state === "function") {
    patchActionForGrouping(
      // @ts-expect-error: can cast the store...
      store,
      Object.keys(options.actions)
    );
    const originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
    };
  }
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p2 = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p2.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && true) {
        toBeInstalled.push(plugin2);
      } else {
        _p2.push(plugin2);
      }
      return this;
    },
    _p: _p2,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
const isUseStore = (fn) => {
  return typeof fn === "function" && typeof fn.$id === "string";
};
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
function acceptHMRUpdate(initialUseStore, hot) {
  return (newModule) => {
    const pinia = hot.data.pinia || initialUseStore._pinia;
    if (!pinia) {
      return;
    }
    hot.data.pinia = pinia;
    for (const exportName in newModule) {
      const useStore = newModule[exportName];
      if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
        const id = useStore.$id;
        if (id !== initialUseStore.$id) {
          console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
          return hot.invalidate();
        }
        const existingStore = pinia._s.get(id);
        if (!existingStore) {
          console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
          return;
        }
        useStore(pinia, existingStore);
      }
    }
  };
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value2, key) => target.set(key, value2));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration");
function skipHydrate(obj) {
  return Object.defineProperty(obj, skipHydrateSymbol, {});
}
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && !hot) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && !hot) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick$1().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError2(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError: onError2
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value2) => {
          triggerSubscriptions(afterCallbackList, value2);
          return value2;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
        if (IS_CLIENT) {
          const getters = setupStore._getters || // @ts-expect-error: same
          (setupStore._getters = markRaw([]));
          getters.push(key);
        }
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject$1(newStateTarget) && isPlainObject$1(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick$1().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
      Object.defineProperty(store, p2, assign({ value: store[p2] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || currentInstance2 && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (IS_CLIENT && currentInstance2 && currentInstance2.proxy && // avoid adding stores that are just built for hot module replacement
    !hot) {
      const vm = currentInstance2.proxy;
      const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
      cache[id] = store;
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
let mapStoreSuffix = "Store";
function setMapStoreSuffix(suffix) {
  mapStoreSuffix = suffix;
}
function mapStores(...stores) {
  if (Array.isArray(stores[0])) {
    console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
    stores = stores[0];
  }
  return stores.reduce((reduced, useStore) => {
    reduced[useStore.$id + mapStoreSuffix] = function() {
      return useStore(this.$pinia);
    };
    return reduced;
  }, {});
}
function mapState(useStore, keysOrMapper) {
  return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
    reduced[key] = function() {
      return useStore(this.$pinia)[key];
    };
    return reduced;
  }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
    reduced[key] = function() {
      const store = useStore(this.$pinia);
      const storeKey = keysOrMapper[key];
      return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
    };
    return reduced;
  }, {});
}
const mapGetters = mapState;
function mapActions(useStore, keysOrMapper) {
  return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
    reduced[key] = function(...args) {
      return useStore(this.$pinia)[key](...args);
    };
    return reduced;
  }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
    reduced[key] = function(...args) {
      return useStore(this.$pinia)[keysOrMapper[key]](...args);
    };
    return reduced;
  }, {});
}
function mapWritableState(useStore, keysOrMapper) {
  return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
    reduced[key] = {
      get() {
        return useStore(this.$pinia)[key];
      },
      set(value2) {
        return useStore(this.$pinia)[key] = value2;
      }
    };
    return reduced;
  }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
    reduced[key] = {
      get() {
        return useStore(this.$pinia)[keysOrMapper[key]];
      },
      set(value2) {
        return useStore(this.$pinia)[keysOrMapper[key]] = value2;
      }
    };
    return reduced;
  }, {});
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value2 = store[key];
      if (isRef(value2) || isReactive(value2)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
const PiniaVuePlugin = function(_Vue) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.pinia) {
        const pinia = options.pinia;
        if (!this._provided) {
          const provideCache = {};
          Object.defineProperty(this, "_provided", {
            get: () => provideCache,
            set: (v2) => Object.assign(provideCache, v2)
          });
        }
        this._provided[piniaSymbol] = pinia;
        if (!this.$pinia) {
          this.$pinia = pinia;
        }
        pinia._a = this;
        if (IS_CLIENT) {
          setActivePinia(pinia);
        }
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(pinia._a);
        }
      } else if (!this.$pinia && options.parent && options.parent.$pinia) {
        this.$pinia = options.parent.$pinia;
      }
    },
    destroyed() {
      delete this._pStores;
    }
  });
};
const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get MutationType() {
    return MutationType;
  },
  PiniaVuePlugin,
  acceptHMRUpdate,
  createPinia,
  defineStore,
  getActivePinia,
  mapActions,
  mapGetters,
  mapState,
  mapStores,
  mapWritableState,
  setActivePinia,
  setMapStoreSuffix,
  skipHydrate,
  storeToRefs
}, Symbol.toStringTag, { value: "Module" }));
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function deepMerge$2() {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge$2(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge$2({}, val);
    } else {
      result[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url3, params, paramsSerializer) {
  if (!params) {
    return url3;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      forEach(val, function parseValue(v2) {
        if (isDate(v2)) {
          v2 = v2.toISOString();
        } else if (isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url3.indexOf("#");
    if (hashmarkIndex !== -1) {
      url3 = url3.slice(0, hashmarkIndex);
    }
    url3 += (url3.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url3;
}
function isAbsoluteURL(url3) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url3);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
function settle(resolve2, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  const status = response.statusCode;
  if (status && (!validateStatus2 || validateStatus2(status))) {
    resolve2(response);
  } else {
    reject(response);
  }
}
const mergeKeys$1 = (keys, config2) => {
  let config3 = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config3[prop] = config2[prop];
    }
  });
  return config3;
};
const adapter = (config2) => {
  return new Promise((resolve2, reject) => {
    let fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params, config2.paramsSerializer);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        response.rawData = response.data;
        try {
          let jsonParseHandle = false;
          const forcedJSONParsingType = typeof config2.forcedJSONParsing;
          if (forcedJSONParsingType === "boolean") {
            jsonParseHandle = config2.forcedJSONParsing;
          } else if (forcedJSONParsingType === "object") {
            const includesMethod = config2.forcedJSONParsing.include || [];
            jsonParseHandle = includesMethod.includes(config2.method);
          }
          if (jsonParseHandle && typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e2) {
        }
        settle(resolve2, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      let otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "timeout",
        "formData"
      ];
      requestTask = index$1.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
    } else if (config2.method === "DOWNLOAD") {
      const optionalKeys = [
        "timeout",
        "filePath"
      ];
      requestTask = index$1.downloadFile(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "enableHttp2",
        "enableQuic",
        "enableCache",
        "enableHttpDNS",
        "httpDNSServiceId",
        "enableChunked",
        "forceCellularNetwork"
      ];
      requestTask = index$1.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
};
const dispatchRequest = (config2) => {
  return adapter(config2);
};
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach2(fn) {
  this.handlers.forEach((h) => {
    if (h !== null) {
      fn(h);
    }
  });
};
const mergeKeys = (keys, globalsConfig, config2) => {
  let config3 = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config3[prop] = config2[prop];
    } else if (!isUndefined(globalsConfig[prop])) {
      config3[prop] = globalsConfig[prop];
    }
  });
  return config3;
};
const mergeConfig = (globalsConfig, config2 = {}) => {
  const method3 = config2.method || globalsConfig.method || "GET";
  let config3 = {
    baseURL: config2.baseURL || globalsConfig.baseURL || "",
    method: method3,
    url: config2.url || "",
    params: config2.params || {},
    custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
    header: deepMerge$2(globalsConfig.header || {}, config2.header || {})
  };
  const defaultToConfig2Keys = ["getTask", "validateStatus", "paramsSerializer", "forcedJSONParsing"];
  config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
  if (method3 === "DOWNLOAD") {
    const downloadKeys = [
      "timeout",
      "filePath"
    ];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(downloadKeys, globalsConfig, config2));
  } else if (method3 === "UPLOAD") {
    delete config3.header["content-type"];
    delete config3.header["Content-Type"];
    const uploadKeys = [
      "filePath",
      "name",
      "timeout",
      "formData"
    ];
    uploadKeys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
      config3["timeout"] = globalsConfig["timeout"];
    }
  } else {
    const defaultsKeys = [
      "data",
      "timeout",
      "dataType",
      "responseType",
      "enableHttp2",
      "enableQuic",
      "enableCache",
      "enableHttpDNS",
      "httpDNSServiceId",
      "enableChunked",
      "forceCellularNetwork"
    ];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
  }
  return config3;
};
const defaults = {
  baseURL: "",
  header: {},
  method: "GET",
  dataType: "json",
  paramsSerializer: null,
  responseType: "text",
  custom: {},
  timeout: 6e4,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  // 是否尝试将响应数据json化
  forcedJSONParsing: true
};
var clone = function() {
  function _instanceof(obj, type2) {
    return type2 != null && obj instanceof type2;
  }
  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    nativeMap = function() {
    };
  }
  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function() {
    };
  }
  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function() {
    };
  }
  function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === "object") {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != "undefined";
    if (typeof circular == "undefined")
      circular = true;
    if (typeof depth == "undefined")
      depth = Infinity;
    function _clone(parent2, depth2) {
      if (parent2 === null)
        return null;
      if (depth2 === 0)
        return parent2;
      var child;
      var proto;
      if (typeof parent2 != "object") {
        return parent2;
      }
      if (_instanceof(parent2, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent2, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent2, nativePromise)) {
        child = new nativePromise(function(resolve2, reject) {
          parent2.then(function(value2) {
            resolve2(_clone(value2, depth2 - 1));
          }, function(err) {
            reject(_clone(err, depth2 - 1));
          });
        });
      } else if (clone2.__isArray(parent2)) {
        child = [];
      } else if (clone2.__isRegExp(parent2)) {
        child = new RegExp(parent2.source, __getRegExpFlags(parent2));
        if (parent2.lastIndex)
          child.lastIndex = parent2.lastIndex;
      } else if (clone2.__isDate(parent2)) {
        child = new Date(parent2.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent2)) {
        if (Buffer.from) {
          child = Buffer.from(parent2);
        } else {
          child = new Buffer(parent2.length);
          parent2.copy(child);
        }
        return child;
      } else if (_instanceof(parent2, Error)) {
        child = Object.create(parent2);
      } else {
        if (typeof prototype == "undefined") {
          proto = Object.getPrototypeOf(parent2);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index2 = allParents.indexOf(parent2);
        if (index2 != -1) {
          return allChildren[index2];
        }
        allParents.push(parent2);
        allChildren.push(child);
      }
      if (_instanceof(parent2, nativeMap)) {
        parent2.forEach(function(value2, key) {
          var keyChild = _clone(key, depth2 - 1);
          var valueChild = _clone(value2, depth2 - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent2, nativeSet)) {
        parent2.forEach(function(value2) {
          var entryChild = _clone(value2, depth2 - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent2) {
        var attrs = Object.getOwnPropertyDescriptor(parent2, i);
        if (attrs) {
          child[i] = _clone(parent2[i], depth2 - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
          if (objProperty.set === "undefined") {
            continue;
          }
          child[i] = _clone(parent2[i], depth2 - 1);
        } catch (e2) {
          if (e2 instanceof TypeError) {
            continue;
          } else if (e2 instanceof ReferenceError) {
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent2);
        for (var i = 0; i < symbols.length; i++) {
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent2[symbol], depth2 - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent2);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent, depth);
  }
  clone2.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
      return null;
    var c = function() {
    };
    c.prototype = parent;
    return new c();
  };
  function __objToStr(o2) {
    return Object.prototype.toString.call(o2);
  }
  clone2.__objToStr = __objToStr;
  function __isDate(o2) {
    return typeof o2 === "object" && __objToStr(o2) === "[object Date]";
  }
  clone2.__isDate = __isDate;
  function __isArray(o2) {
    return typeof o2 === "object" && __objToStr(o2) === "[object Array]";
  }
  clone2.__isArray = __isArray;
  function __isRegExp(o2) {
    return typeof o2 === "object" && __objToStr(o2) === "[object RegExp]";
  }
  clone2.__isRegExp = __isRegExp;
  function __getRegExpFlags(re) {
    var flags = "";
    if (re.global)
      flags += "g";
    if (re.ignoreCase)
      flags += "i";
    if (re.multiline)
      flags += "m";
    return flags;
  }
  clone2.__getRegExpFlags = __getRegExpFlags;
  return clone2;
}();
class Request {
  /**
   * @param {Object} arg - 全局配置
   * @param {String} arg.baseURL - 全局根路径
   * @param {Object} arg.header - 全局header
   * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
   * @param {String} arg.dataType = [json] - 全局默认的dataType
   * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
   * @param {Object} arg.custom - 全局默认的自定义参数
   * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
   * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
   * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
   * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
   * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
   */
  constructor(arg = {}) {
    if (!isPlainObject(arg)) {
      arg = {};
      console.warn("设置全局参数必须接收一个Object");
    }
    this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */
  setConfig(f2) {
    this.config = f2(this.config);
  }
  middleware(config2) {
    config2 = mergeConfig(this.config, config2);
    let chain = [dispatchRequest, void 0];
    let promise2 = Promise.resolve(config2);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise2 = promise2.then(chain.shift(), chain.shift());
    }
    return promise2;
  }
  /**
   * @Function
   * @param {Object} config - 请求配置项
   * @prop {String} options.url - 请求路径
   * @prop {Object} options.data - 请求参数
   * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
   * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
   * @prop {Object} [options.header = config.header] - 请求header
   * @prop {Object} [options.method = config.method] - 请求方法
   * @returns {Promise<unknown>}
   */
  request(config2 = {}) {
    return this.middleware(config2);
  }
  get(url3, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      method: "GET"
    }, options));
  }
  post(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "POST"
    }, options));
  }
  put(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "PUT"
    }, options));
  }
  delete(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "DELETE"
    }, options));
  }
  connect(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "CONNECT"
    }, options));
  }
  head(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "HEAD"
    }, options));
  }
  options(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "OPTIONS"
    }, options));
  }
  trace(url3, data, options = {}) {
    return this.middleware(__spreadValues({
      url: url3,
      data,
      method: "TRACE"
    }, options));
  }
  upload(url3, config2 = {}) {
    config2.url = url3;
    config2.method = "UPLOAD";
    return this.middleware(config2);
  }
  download(url3, config2 = {}) {
    config2.url = url3;
    config2.method = "DOWNLOAD";
    return this.middleware(config2);
  }
  get version() {
    return "3.1.0";
  }
}
function email(value2) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
}
function mobile(value2) {
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value2);
}
function url(value2) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
}
function date(value2) {
  if (!value2)
    return false;
  if (number(value2))
    value2 = +value2;
  return !/Invalid|NaN/.test(new Date(value2).toString());
}
function dateISO(value2) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
}
function number(value2) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
}
function string$1(value2) {
  return typeof value2 === "string";
}
function digits(value2) {
  return /^\d+$/.test(value2);
}
function idCard(value2) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value2
  );
}
function carNo(value2) {
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value2.length === 7) {
    return creg.test(value2);
  }
  if (value2.length === 8) {
    return xreg.test(value2);
  }
  return false;
}
function amount(value2) {
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
}
function chinese(value2) {
  const reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value2);
}
function letter(value2) {
  return /^[a-zA-Z]*$/.test(value2);
}
function enOrNum(value2) {
  const reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value2);
}
function contains(value2, param) {
  return value2.indexOf(param) >= 0;
}
function range$2(value2, param) {
  return value2 >= param[0] && value2 <= param[1];
}
function rangeLength(value2, param) {
  return value2.length >= param[0] && value2.length <= param[1];
}
function landline(value2) {
  const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value2);
}
function empty(value2) {
  switch (typeof value2) {
    case "undefined":
      return true;
    case "string":
      if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!value2)
        return true;
      break;
    case "number":
      if (value2 === 0 || isNaN(value2))
        return true;
      break;
    case "object":
      if (value2 === null || value2.length === 0)
        return true;
      for (const i in value2) {
        return false;
      }
      return true;
  }
  return false;
}
function jsonString(value2) {
  if (typeof value2 === "string") {
    try {
      const obj = JSON.parse(value2);
      if (typeof obj === "object" && obj) {
        return true;
      }
      return false;
    } catch (e2) {
      return false;
    }
  }
  return false;
}
function array(value2) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value2);
  }
  return Object.prototype.toString.call(value2) === "[object Array]";
}
function object(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
function code(value2, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value2);
}
function func(value2) {
  return typeof value2 === "function";
}
function promise(value2) {
  return object(value2) && func(value2.then) && func(value2.catch);
}
function image(value2) {
  const newValue = value2.split("?")[0];
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}
function video(value2) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value2);
}
function regExp(o2) {
  return o2 && Object.prototype.toString.call(o2) === "[object RegExp]";
}
const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  amount,
  array,
  carNo,
  chinese,
  code,
  contains,
  date,
  dateISO,
  digits,
  email,
  empty,
  enOrNum,
  func,
  idCard,
  image,
  jsonString,
  landline,
  letter,
  mobile,
  number,
  object,
  promise,
  range: range$2,
  rangeLength,
  regExp,
  string: string$1,
  url,
  video
}, Symbol.toStringTag, { value: "Module" }));
function strip(num, precision = 15) {
  return +parseFloat(Number(num).toPrecision(precision));
}
function digitLength(num) {
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
function checkBoundary(num) {
  {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(`${num} 超出了精度限制，结果可能不正确`);
    }
  }
}
function iteratorOperation(arr, operation) {
  const [num1, num2, ...others] = arr;
  let res = operation(num1, num2);
  others.forEach((num) => {
    res = operation(res, num);
  });
  return res;
}
function times(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  const baseNum = digitLength(num1) + digitLength(num2);
  const leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function divide(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  const base = Math.pow(10, ratio);
  let result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  return result;
}
function range$1(min = 0, max = 0, value2 = 0) {
  return Math.max(min, Math.min(max, Number(value2)));
}
function getPx(value2, unit = false) {
  if (number(value2)) {
    return unit ? `${value2}px` : Number(value2);
  }
  if (/(rpx|upx)$/.test(value2)) {
    return unit ? `${index$1.upx2px(parseInt(value2))}px` : Number(index$1.upx2px(parseInt(value2)));
  }
  return unit ? `${parseInt(value2)}px` : parseInt(value2);
}
function sleep(value2 = 30) {
  return new Promise((resolve2) => {
    setTimeout(() => {
      resolve2();
    }, value2);
  });
}
function os() {
  return index$1.getSystemInfoSync().platform.toLowerCase();
}
function sys() {
  return index$1.getSystemInfoSync();
}
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}
function guid(len = 32, firstU = true, radix = null) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  radix = radix || chars.length;
  if (len) {
    for (let i = 0; i < len; i++)
      uuid[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
      }
    }
  }
  if (firstU) {
    uuid.shift();
    return `u${uuid.join("")}`;
  }
  return uuid.join("");
}
function $parent(name = void 0) {
  let parent = this.$parent;
  while (parent) {
    if (parent.$options && parent.$options.name !== name) {
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}
function addStyle(customStyle, target = "object") {
  if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
    return customStyle;
  }
  if (target === "object") {
    customStyle = trim(customStyle);
    const styleArray = customStyle.split(";");
    const style = {};
    for (let i = 0; i < styleArray.length; i++) {
      if (styleArray[i]) {
        const item = styleArray[i].split(":");
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  let string2 = "";
  for (const i in customStyle) {
    const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
    string2 += `${key}:${customStyle[i]};`;
  }
  return trim(string2);
}
function addUnit(value2 = "auto", unit = ((_b) => (_b = ((_a) => (_a = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
  value2 = String(value2);
  return number(value2) ? `${value2}${unit}` : value2;
}
function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (cache.has(obj))
    return cache.get(obj);
  let clone2;
  if (obj instanceof Date) {
    clone2 = new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    clone2 = new RegExp(obj);
  } else if (obj instanceof Map) {
    clone2 = new Map(Array.from(obj, ([key, value2]) => [key, deepClone(value2, cache)]));
  } else if (obj instanceof Set) {
    clone2 = new Set(Array.from(obj, (value2) => deepClone(value2, cache)));
  } else if (Array.isArray(obj)) {
    clone2 = obj.map((value2) => deepClone(value2, cache));
  } else if (Object.prototype.toString.call(obj) === "[object Object]") {
    clone2 = Object.create(Object.getPrototypeOf(obj));
    cache.set(obj, clone2);
    for (const [key, value2] of Object.entries(obj)) {
      clone2[key] = deepClone(value2, cache);
    }
  } else {
    clone2 = Object.assign({}, obj);
  }
  cache.set(obj, clone2);
  return clone2;
}
function deepMerge$1(target = {}, source = {}) {
  target = deepClone(target);
  if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
    return target;
  const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
  for (const prop in source) {
    if (!source.hasOwnProperty(prop))
      continue;
    const sourceValue = source[prop];
    const targetValue = merged[prop];
    if (sourceValue instanceof Date) {
      merged[prop] = new Date(sourceValue);
    } else if (sourceValue instanceof RegExp) {
      merged[prop] = new RegExp(sourceValue);
    } else if (sourceValue instanceof Map) {
      merged[prop] = new Map(sourceValue);
    } else if (sourceValue instanceof Set) {
      merged[prop] = new Set(sourceValue);
    } else if (typeof sourceValue === "object" && sourceValue !== null) {
      merged[prop] = deepMerge$1(targetValue, sourceValue);
    } else {
      merged[prop] = sourceValue;
    }
  }
  return merged;
}
function error(err) {
  {
    console.error(`uvui提示：${err}`);
  }
}
function randomArray(array3 = []) {
  return array3.sort(() => Math.random() - 0.5);
}
if (!String.prototype.padStart) {
  String.prototype.padStart = function(maxLength, fillString = " ") {
    if (Object.prototype.toString.call(fillString) !== "[object String]") {
      throw new TypeError(
        "fillString must be String"
      );
    }
    const str = this;
    if (str.length >= maxLength)
      return String(str);
    const fillLength = maxLength - str.length;
    let times2 = Math.ceil(fillLength / fillString.length);
    while (times2 >>= 1) {
      fillString += fillString;
      if (times2 === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}
function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
  let date3;
  if (!dateTime) {
    date3 = /* @__PURE__ */ new Date();
  } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
    date3 = new Date(dateTime * 1e3);
  } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
    date3 = new Date(Number(dateTime));
  } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
    date3 = new Date(dateTime.replace(/-/g, "/"));
  } else {
    date3 = new Date(dateTime);
  }
  const timeSource = {
    "y": date3.getFullYear().toString(),
    // 年
    "m": (date3.getMonth() + 1).toString().padStart(2, "0"),
    // 月
    "d": date3.getDate().toString().padStart(2, "0"),
    // 日
    "h": date3.getHours().toString().padStart(2, "0"),
    // 时
    "M": date3.getMinutes().toString().padStart(2, "0"),
    // 分
    "s": date3.getSeconds().toString().padStart(2, "0")
    // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const key in timeSource) {
    const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
    if (ret) {
      const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }
  return formatStr;
}
function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
  if (timestamp == null)
    timestamp = Number(/* @__PURE__ */ new Date());
  timestamp = parseInt(timestamp);
  if (timestamp.toString().length == 10)
    timestamp *= 1e3;
  let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
  timer = parseInt(timer / 1e3);
  let tips = "";
  switch (true) {
    case timer < 300:
      tips = "刚刚";
      break;
    case (timer >= 300 && timer < 3600):
      tips = `${parseInt(timer / 60)}分钟前`;
      break;
    case (timer >= 3600 && timer < 86400):
      tips = `${parseInt(timer / 3600)}小时前`;
      break;
    case (timer >= 86400 && timer < 2592e3):
      tips = `${parseInt(timer / 86400)}天前`;
      break;
    default:
      if (format2 === false) {
        if (timer >= 2592e3 && timer < 365 * 86400) {
          tips = `${parseInt(timer / (86400 * 30))}个月前`;
        } else {
          tips = `${parseInt(timer / (86400 * 365))}年前`;
        }
      } else {
        tips = timeFormat(timestamp, format2);
      }
  }
  return tips;
}
function trim(str, pos = "both") {
  str = String(str);
  if (pos == "both") {
    return str.replace(/^\s+|\s+$/g, "");
  }
  if (pos == "left") {
    return str.replace(/^\s*/, "");
  }
  if (pos == "right") {
    return str.replace(/(\s*$)/g, "");
  }
  if (pos == "all") {
    return str.replace(/\s+/g, "");
  }
  return str;
}
function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
  const prefix = isPrefix ? "?" : "";
  const _result = [];
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
    arrayFormat = "brackets";
  for (const key in data) {
    const value2 = data[key];
    if (["", void 0, null].indexOf(value2) >= 0) {
      continue;
    }
    if (value2.constructor === Array) {
      switch (arrayFormat) {
        case "indices":
          for (let i = 0; i < value2.length; i++) {
            _result.push(`${key}[${i}]=${value2[i]}`);
          }
          break;
        case "brackets":
          value2.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
          break;
        case "repeat":
          value2.forEach((_value) => {
            _result.push(`${key}=${_value}`);
          });
          break;
        case "comma":
          let commaStr = "";
          value2.forEach((_value) => {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(`${key}=${commaStr}`);
          break;
        default:
          value2.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
      }
    } else {
      _result.push(`${key}=${value2}`);
    }
  }
  return _result.length ? prefix + _result.join("&") : "";
}
function toast(title, duration = 2e3) {
  index$1.showToast({
    title: String(title),
    icon: "none",
    duration
  });
}
function type2icon(type2 = "success", fill = false) {
  if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
    type2 = "success";
  let iconName = "";
  switch (type2) {
    case "primary":
      iconName = "info-circle";
      break;
    case "info":
      iconName = "info-circle";
      break;
    case "error":
      iconName = "close-circle";
      break;
    case "warning":
      iconName = "error-circle";
      break;
    case "success":
      iconName = "checkmark-circle";
      break;
    default:
      iconName = "checkmark-circle";
  }
  if (fill)
    iconName += "-fill";
  return iconName;
}
function priceFormat(number23, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
  number23 = `${number23}`.replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(+number23) ? 0 : +number23;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
  const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
  let s = "";
  s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
function getDuration(value2, unit = true) {
  const valueNum = parseInt(value2);
  if (unit) {
    if (/s$/.test(value2))
      return value2;
    return value2 > 30 ? `${value2}ms` : `${value2}s`;
  }
  if (/ms$/.test(value2))
    return valueNum;
  if (/s$/.test(value2))
    return valueNum > 30 ? valueNum : valueNum * 1e3;
  return valueNum;
}
function padZero$1(value2) {
  return `00${value2}`.slice(-2);
}
function formValidate(instance, event) {
  const formItem = $parent.call(instance, "uv-form-item");
  const form = $parent.call(instance, "uv-form");
  if (formItem && form) {
    form.validateField(formItem.prop, () => {
    }, event);
  }
}
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== "string" || key === "") {
    return "";
  }
  if (key.indexOf(".") !== -1) {
    const keys = key.split(".");
    let firstObj = obj[keys[0]] || {};
    for (let i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}
function setProperty(obj, key, value2) {
  if (!obj) {
    return;
  }
  const inFn = function(_obj, keys, v2) {
    if (keys.length === 1) {
      _obj[keys[0]] = v2;
      return;
    }
    while (keys.length > 1) {
      const k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== "object") {
        _obj[k] = {};
      }
      keys.shift();
      inFn(_obj[k], keys, v2);
    }
  };
  if (typeof key !== "string" || key === "")
    ;
  else if (key.indexOf(".") !== -1) {
    const keys = key.split(".");
    inFn(obj, keys, value2);
  } else {
    obj[key] = value2;
  }
}
function page() {
  var _a;
  const pages2 = getCurrentPages();
  const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
  return `/${route2 ? route2 : ""}`;
}
function pages() {
  const pages2 = getCurrentPages();
  return pages2;
}
function getHistoryPage(back = 0) {
  const pages2 = getCurrentPages();
  const len = pages2.length;
  return pages2[len - 1 + back];
}
function setConfig({
  props: props2 = {},
  config: config2 = {},
  color = {},
  zIndex = {}
}) {
  const {
    deepMerge: deepMerge2
  } = index$1.$uv;
  index$1.$uv.config = deepMerge2(index$1.$uv.config, config2);
  index$1.$uv.props = deepMerge2(index$1.$uv.props, props2);
  index$1.$uv.color = deepMerge2(index$1.$uv.color, color);
  index$1.$uv.zIndex = deepMerge2(index$1.$uv.zIndex, zIndex);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $parent,
  addStyle,
  addUnit,
  deepClone,
  deepMerge: deepMerge$1,
  error,
  formValidate,
  getDuration,
  getHistoryPage,
  getProperty,
  getPx,
  guid,
  os,
  padZero: padZero$1,
  page,
  pages,
  priceFormat,
  queryParams,
  random,
  randomArray,
  range: range$1,
  setConfig,
  setProperty,
  sleep,
  sys,
  timeFormat,
  timeFrom,
  toast,
  trim,
  type2icon
}, Symbol.toStringTag, { value: "Module" }));
class Router {
  constructor() {
    this.config = {
      type: "navigateTo",
      url: "",
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: "pop-in",
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false,
      // 是否需要拦截
      events: {}
      // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
    };
    this.route = this.route.bind(this);
  }
  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  addRootPath(url3) {
    return url3[0] === "/" ? url3 : `/${url3}`;
  }
  // 整合路由参数
  mixinParam(url3, params) {
    url3 = url3 && this.addRootPath(url3);
    let query = "";
    if (/.*\/.*\?.*=.*/.test(url3)) {
      query = queryParams(params, false);
      return url3 += `&${query}`;
    }
    query = queryParams(params);
    return url3 += query;
  }
  // 对外的方法名称
  route() {
    return __async(this, arguments, function* (options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = deepMerge$1(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === page())
        return;
      if (params.intercept) {
        mergeConfig2.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = deepMerge$1(this.config, mergeConfig2);
      if (typeof mergeConfig2.intercept === "function") {
        const isNext = yield new Promise((resolve2, reject) => {
          mergeConfig2.intercept(mergeConfig2, resolve2);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    });
  }
  // 执行路由跳转
  openPage(config2) {
    const {
      url: url3,
      type: type2,
      delta,
      animationType,
      animationDuration,
      events
    } = config2;
    if (config2.type == "navigateTo" || config2.type == "to") {
      index$1.navigateTo({
        url: url3,
        animationType,
        animationDuration,
        events
      });
    }
    if (config2.type == "redirectTo" || config2.type == "redirect") {
      index$1.redirectTo({
        url: url3
      });
    }
    if (config2.type == "switchTab" || config2.type == "tab") {
      index$1.switchTab({
        url: url3
      });
    }
    if (config2.type == "reLaunch" || config2.type == "launch") {
      index$1.reLaunch({
        url: url3
      });
    }
    if (config2.type == "navigateBack" || config2.type == "back") {
      index$1.navigateBack({
        delta
      });
    }
  }
}
const route = new Router().route;
let timeout = null;
function debounce(func2, wait = 500, immediate = false) {
  if (timeout !== null)
    clearTimeout(timeout);
  if (immediate) {
    const callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow)
      typeof func2 === "function" && func2();
  } else {
    timeout = setTimeout(() => {
      typeof func2 === "function" && func2();
    }, wait);
  }
}
let flag;
function throttle(func2, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func2 === "function" && func2();
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    setTimeout(() => {
      flag = false;
      typeof func2 === "function" && func2();
    }, wait);
  }
}
const mixin = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: () => ({})
    },
    customClass: {
      type: String,
      default: ""
    },
    // 跳转的页面路径
    url: {
      type: String,
      default: ""
    },
    // 页面跳转的类型
    linkType: {
      type: String,
      default: "navigateTo"
    }
  },
  data() {
    return {};
  },
  onLoad() {
    this.$uv.getRect = this.$uvGetRect;
  },
  created() {
    this.$uv.getRect = this.$uvGetRect;
  },
  computed: {
    $uv() {
      var _a, _b;
      return __spreadProps(__spreadValues({}, index), {
        test,
        route,
        debounce,
        throttle,
        unit: (_b = (_a = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
      });
    },
    /**
     * 生成bem规则类名
     * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
     * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
     * @param {String} name 组件名称
     * @param {Array} fixed 一直会存在的类名
     * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
     * @returns {Array|string}
     */
    bem() {
      return function(name, fixed, change) {
        const prefix = `uv-${name}--`;
        const classes = {};
        if (fixed) {
          fixed.map((item) => {
            classes[prefix + this[item]] = true;
          });
        }
        if (change) {
          change.map((item) => {
            this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
      };
    }
  },
  methods: {
    // 跳转某一个页面
    openPage(urlKey = "url") {
      const url3 = this[urlKey];
      if (url3) {
        index$1[this.linkType]({
          url: url3
        });
      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uvGetRect(selector, all) {
      return new Promise((resolve2) => {
        index$1.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve2(rect);
          }
          if (!all && rect) {
            resolve2(rect);
          }
        }).exec();
      });
    },
    getParentData(parentName = "") {
      if (!this.parent)
        this.parent = {};
      this.parent = this.$uv.$parent.call(this, parentName);
      if (this.parent.children) {
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        Object.keys(this.parentData).map((key) => {
          this.parentData[key] = this.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent(e2) {
      e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
    },
    // 空操作
    noop(e2) {
      this.preventEvent(e2);
    }
  },
  onReachBottom() {
    index$1.$emit("uvOnReachBottom");
  },
  beforeDestroy() {
    if (this.parent && array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index2) => {
        if (child === this) {
          childrenList.splice(index2, 1);
        }
      });
    }
  },
  // 兼容vue3
  unmounted() {
    if (this.parent && array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index2) => {
        if (child === this) {
          childrenList.splice(index2, 1);
        }
      });
    }
  }
};
const mpMixin = {
  // 将自定义节点设置成虚拟的（去掉自定义组件包裹层），更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true
  }
};
const mpShare = {
  onLoad() {
    index$1.$uv.mpShare = {
      title: "",
      // 默认为小程序名称
      path: "",
      // 默认为当前页面路径
      imageUrl: ""
      // 默认为当前页面的截图
    };
  },
  onShareAppMessage() {
    return index$1.$uv.mpShare;
  }
};
function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
  const startRGB = hexToRgb(startColor, false);
  const startR = startRGB[0];
  const startG = startRGB[1];
  const startB = startRGB[2];
  const endRGB = hexToRgb(endColor, false);
  const endR = endRGB[0];
  const endG = endRGB[1];
  const endB = endRGB[2];
  const sR = (endR - startR) / step;
  const sG = (endG - startG) / step;
  const sB = (endB - startB) / step;
  const colorArr = [];
  for (let i = 0; i < step; i++) {
    let hex2 = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
    if (i === 0)
      hex2 = rgbToHex(startColor);
    if (i === step - 1)
      hex2 = rgbToHex(endColor);
    colorArr.push(hex2);
  }
  return colorArr;
}
function hexToRgb(sColor, str = true) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    if (!str) {
      return sColorChange;
    }
    return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
  }
  if (/^(rgb|RGB)/.test(sColor)) {
    const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map((val) => Number(val));
  }
  return sColor;
}
function rgbToHex(rgb) {
  const _this = rgb;
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex2 = Number(aColor[i]).toString(16);
      hex2 = String(hex2).length == 1 ? `${0}${hex2}` : hex2;
      if (hex2 === "0") {
        hex2 += hex2;
      }
      strHex += hex2;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }
  if (reg.test(_this)) {
    const aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    }
    if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    return `rgba(${sColorChange.join(",")},${alpha})`;
  }
  return sColor;
}
const version = "1.1.20";
{
  console.log(`
 %c uvui V${version} https://www.uvui.cn/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0; border-radius: 5px;");
}
const config = {
  v: version,
  version,
  // 主题名称
  type: [
    "primary",
    "success",
    "info",
    "error",
    "warning"
  ],
  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    "uv-primary": "#2979ff",
    "uv-warning": "#ff9900",
    "uv-success": "#19be6b",
    "uv-error": "#fa3534",
    "uv-info": "#909399",
    "uv-main-color": "#303133",
    "uv-content-color": "#606266",
    "uv-tips-color": "#909399",
    "uv-light-color": "#c0c4cc"
  },
  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: "px"
};
let platform = "none";
platform = "vue3";
platform = "weixin";
platform = "mp";
const platform$1 = platform;
const $uv = __spreadProps(__spreadValues({
  route,
  config,
  test,
  date: timeFormat
}, index), {
  colorGradient,
  hexToRgb,
  rgbToHex,
  colorToRgba,
  http: new Request(),
  debounce,
  throttle,
  platform: platform$1,
  mixin,
  mpMixin
});
index$1.$uv = $uv;
const install = (Vue, options = {}) => {
  var _a, _b;
  const cloneMixin = deepClone(mixin);
  (_a = cloneMixin == null ? void 0 : cloneMixin.props) == null ? true : delete _a.customClass;
  (_b = cloneMixin == null ? void 0 : cloneMixin.props) == null ? true : delete _b.customStyle;
  Vue.mixin(cloneMixin);
  if (options.mpShare) {
    Vue.mixin(mpShare);
  }
  Vue.config.globalProperties.$uv = $uv;
};
const uvUi = {
  install
};
const icons = {
  "uvicon-level": "e68f",
  "uvicon-checkbox-mark": "e659",
  "uvicon-folder": "e694",
  "uvicon-movie": "e67c",
  "uvicon-star-fill": "e61e",
  "uvicon-star": "e618",
  "uvicon-phone-fill": "e6ac",
  "uvicon-phone": "e6ba",
  "uvicon-apple-fill": "e635",
  "uvicon-backspace": "e64d",
  "uvicon-attach": "e640",
  "uvicon-empty-data": "e671",
  "uvicon-empty-address": "e68a",
  "uvicon-empty-favor": "e662",
  "uvicon-empty-car": "e657",
  "uvicon-empty-order": "e66b",
  "uvicon-empty-list": "e672",
  "uvicon-empty-search": "e677",
  "uvicon-empty-permission": "e67d",
  "uvicon-empty-news": "e67e",
  "uvicon-empty-history": "e685",
  "uvicon-empty-coupon": "e69b",
  "uvicon-empty-page": "e60e",
  "uvicon-empty-wifi-off": "e6cc",
  "uvicon-reload": "e627",
  "uvicon-order": "e695",
  "uvicon-server-man": "e601",
  "uvicon-search": "e632",
  "uvicon-more-dot-fill": "e66f",
  "uvicon-scan": "e631",
  "uvicon-map": "e665",
  "uvicon-map-fill": "e6a8",
  "uvicon-tags": "e621",
  "uvicon-tags-fill": "e613",
  "uvicon-eye": "e664",
  "uvicon-eye-fill": "e697",
  "uvicon-eye-off": "e69c",
  "uvicon-eye-off-outline": "e688",
  "uvicon-mic": "e66d",
  "uvicon-mic-off": "e691",
  "uvicon-calendar": "e65c",
  "uvicon-trash": "e623",
  "uvicon-trash-fill": "e6ce",
  "uvicon-play-left": "e6bf",
  "uvicon-play-right": "e6b3",
  "uvicon-minus": "e614",
  "uvicon-plus": "e625",
  "uvicon-info-circle": "e69f",
  "uvicon-info-circle-fill": "e6a7",
  "uvicon-question-circle": "e622",
  "uvicon-question-circle-fill": "e6bc",
  "uvicon-close": "e65a",
  "uvicon-checkmark": "e64a",
  "uvicon-checkmark-circle": "e643",
  "uvicon-checkmark-circle-fill": "e668",
  "uvicon-setting": "e602",
  "uvicon-setting-fill": "e6d0",
  "uvicon-heart": "e6a2",
  "uvicon-heart-fill": "e68b",
  "uvicon-camera": "e642",
  "uvicon-camera-fill": "e650",
  "uvicon-more-circle": "e69e",
  "uvicon-more-circle-fill": "e684",
  "uvicon-chat": "e656",
  "uvicon-chat-fill": "e63f",
  "uvicon-bag": "e647",
  "uvicon-error-circle": "e66e",
  "uvicon-error-circle-fill": "e655",
  "uvicon-close-circle": "e64e",
  "uvicon-close-circle-fill": "e666",
  "uvicon-share": "e629",
  "uvicon-share-fill": "e6bb",
  "uvicon-share-square": "e6c4",
  "uvicon-shopping-cart": "e6cb",
  "uvicon-shopping-cart-fill": "e630",
  "uvicon-bell": "e651",
  "uvicon-bell-fill": "e604",
  "uvicon-list": "e690",
  "uvicon-list-dot": "e6a9",
  "uvicon-zhifubao-circle-fill": "e617",
  "uvicon-weixin-circle-fill": "e6cd",
  "uvicon-weixin-fill": "e620",
  "uvicon-qq-fill": "e608",
  "uvicon-qq-circle-fill": "e6b9",
  "uvicon-moments-circel-fill": "e6c2",
  "uvicon-moments": "e6a0",
  "uvicon-car": "e64f",
  "uvicon-car-fill": "e648",
  "uvicon-warning-fill": "e6c7",
  "uvicon-warning": "e6c1",
  "uvicon-clock-fill": "e64b",
  "uvicon-clock": "e66c",
  "uvicon-edit-pen": "e65d",
  "uvicon-edit-pen-fill": "e679",
  "uvicon-email": "e673",
  "uvicon-email-fill": "e683",
  "uvicon-minus-circle": "e6a5",
  "uvicon-plus-circle": "e603",
  "uvicon-plus-circle-fill": "e611",
  "uvicon-file-text": "e687",
  "uvicon-file-text-fill": "e67f",
  "uvicon-pushpin": "e6d1",
  "uvicon-pushpin-fill": "e6b6",
  "uvicon-grid": "e68c",
  "uvicon-grid-fill": "e698",
  "uvicon-play-circle": "e6af",
  "uvicon-play-circle-fill": "e62a",
  "uvicon-pause-circle-fill": "e60c",
  "uvicon-pause": "e61c",
  "uvicon-pause-circle": "e696",
  "uvicon-gift-fill": "e6b0",
  "uvicon-gift": "e680",
  "uvicon-kefu-ermai": "e660",
  "uvicon-server-fill": "e610",
  "uvicon-coupon-fill": "e64c",
  "uvicon-coupon": "e65f",
  "uvicon-integral": "e693",
  "uvicon-integral-fill": "e6b1",
  "uvicon-home-fill": "e68e",
  "uvicon-home": "e67b",
  "uvicon-account": "e63a",
  "uvicon-account-fill": "e653",
  "uvicon-thumb-down-fill": "e628",
  "uvicon-thumb-down": "e60a",
  "uvicon-thumb-up": "e612",
  "uvicon-thumb-up-fill": "e62c",
  "uvicon-lock-fill": "e6a6",
  "uvicon-lock-open": "e68d",
  "uvicon-lock-opened-fill": "e6a1",
  "uvicon-lock": "e69d",
  "uvicon-red-packet": "e6c3",
  "uvicon-photo-fill": "e6b4",
  "uvicon-photo": "e60d",
  "uvicon-volume-off-fill": "e6c8",
  "uvicon-volume-off": "e6bd",
  "uvicon-volume-fill": "e624",
  "uvicon-volume": "e605",
  "uvicon-download": "e670",
  "uvicon-arrow-up-fill": "e636",
  "uvicon-arrow-down-fill": "e638",
  "uvicon-play-left-fill": "e6ae",
  "uvicon-play-right-fill": "e6ad",
  "uvicon-arrow-downward": "e634",
  "uvicon-arrow-leftward": "e63b",
  "uvicon-arrow-rightward": "e644",
  "uvicon-arrow-upward": "e641",
  "uvicon-arrow-down": "e63e",
  "uvicon-arrow-right": "e63c",
  "uvicon-arrow-left": "e646",
  "uvicon-arrow-up": "e633",
  "uvicon-skip-back-left": "e6c5",
  "uvicon-skip-forward-right": "e61f",
  "uvicon-arrow-left-double": "e637",
  "uvicon-man": "e675",
  "uvicon-woman": "e626",
  "uvicon-en": "e6b8",
  "uvicon-twitte": "e607",
  "uvicon-twitter-circle-fill": "e6cf"
};
const props$r = {
  props: __spreadValues({
    // 图标类名
    name: {
      type: String,
      default: ""
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: "#606266"
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: "16px"
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: false
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: null
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: ""
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: "uvicon"
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: ""
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: "right"
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: "15px"
    },
    // label的颜色
    labelColor: {
      type: String,
      default: "#606266"
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: "3px"
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: "aspectFit"
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: ""
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: ""
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: 0
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: false
    }
  }, (_f = (_e = index$1.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.icon)
};
const props$q = {
  props: __spreadValues({
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: false
    },
    // 显示的内容
    value: {
      type: [Number, String],
      default: ""
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: 999
    },
    // 主题类型，error|warning|success|primary
    type: {
      type: [String, void 0, null],
      default: "error"
    },
    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: false
    },
    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: [String, null],
      default: null
    },
    // 字体颜色
    color: {
      type: [String, null],
      default: null
    },
    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: [String, void 0, null],
      default: "circle"
    },
    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: [String, void 0, null],
      default: "overflow"
    },
    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: () => []
    },
    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: false
    },
    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: false
    }
  }, (_h = (_g = index$1.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.badge)
};
const props$p = {
  props: __spreadValues({
    // 滑块的移动过渡时间，单位ms
    duration: {
      type: Number,
      default: 300
    },
    // tabs标签数组
    list: {
      type: Array,
      default: () => []
    },
    // 滑块颜色
    lineColor: {
      type: String,
      default: "#3c9cff"
    },
    // 菜单选择中时的样式
    activeStyle: {
      type: [String, Object],
      default: () => ({
        color: "#303133"
      })
    },
    // 菜单非选中时的样式
    inactiveStyle: {
      type: [String, Object],
      default: () => ({
        color: "#606266"
      })
    },
    // 滑块长度
    lineWidth: {
      type: [String, Number],
      default: 20
    },
    // 滑块高度
    lineHeight: {
      type: [String, Number],
      default: 3
    },
    // 滑块背景显示大小，当滑块背景设置为图片时使用
    lineBgSize: {
      type: String,
      default: "cover"
    },
    // 菜单item的样式
    itemStyle: {
      type: [String, Object],
      default: () => ({
        height: "44px"
      })
    },
    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: true
    },
    // 当前选中标签的索引
    current: {
      type: [Number, String],
      default: 0
    },
    // 默认读取的键名
    keyName: {
      type: String,
      default: "name"
    }
  }, (_j = (_i = index$1.$uv) == null ? void 0 : _i.props) == null ? void 0 : _j.tabs)
};
const props$o = {
  props: __spreadValues({
    // input的label提示语
    label: {
      type: String,
      default: ""
    },
    // 绑定的值
    prop: {
      type: String,
      default: ""
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [Boolean],
      default: false
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: ""
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: ""
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: ""
    },
    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: false
    },
    leftIconStyle: {
      type: [String, Object],
      default: ""
    }
  }, (_l = (_k = index$1.$uv) == null ? void 0 : _k.props) == null ? void 0 : _l.formItem)
};
const props$n = {
  props: __spreadValues({
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框类型
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: "text"
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: false
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: "#f5f7fa"
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: -1
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: null
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: "input-placeholder"
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc"
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: "done"
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: false
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: false
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: -1
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: 30
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: -1
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: "left"
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: "14px"
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: "#303133"
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: ""
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: ""
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: ""
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: ""
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: "surround"
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: false
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "square"
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: null
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }, (_n = (_m = index$1.$uv) == null ? void 0 : _m.props) == null ? void 0 : _n.input)
};
const props$m = {
  props: __spreadValues({
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: () => ({})
    },
    // 验证规则
    rules: {
      type: [Object, Function, Array],
      default: () => ({})
    },
    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: "message"
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: true
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: "left"
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: 45
    },
    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: "left"
    },
    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: () => ({})
    }
  }, (_p = (_o = index$1.$uv) == null ? void 0 : _o.props) == null ? void 0 : _p.form)
};
const formatRegExp = /%[sdj%]/g;
let warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
  warning = function warning3(type2, errors) {
    if (typeof console !== "undefined" && console.warn) {
      if (errors.every((e2) => typeof e2 === "string")) {
        console.warn(type2, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  const fields = {};
  errors.forEach((error2) => {
    const { field } = error2;
    fields[field] = fields[field] || [];
    fields[field].push(error2);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  let i = 1;
  const f2 = args[0];
  const len = args.length;
  if (typeof f2 === "function") {
    return f2.apply(null, args.slice(1));
  }
  if (typeof f2 === "string") {
    let str = String(f2).replace(formatRegExp, (x) => {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    for (let arg = args[i]; i < len; arg = args[++i]) {
      str += ` ${arg}`;
    }
    return str;
  }
  return f2;
}
function isNativeStringType(type2) {
  return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
}
function isEmptyValue(value2, type2) {
  if (value2 === void 0 || value2 === null) {
    return true;
  }
  if (type2 === "array" && Array.isArray(value2) && !value2.length) {
    return true;
  }
  if (isNativeStringType(type2) && typeof value2 === "string" && !value2) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func2, callback) {
  const results = [];
  let total = 0;
  const arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach((a) => {
    func2(a, count);
  });
}
function asyncSerialArray(arr, func2, callback) {
  let index2 = 0;
  const arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    const original = index2;
    index2 += 1;
    if (original < arrLength) {
      func2(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  const ret = [];
  Object.keys(objArr).forEach((k) => {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func2, callback) {
  if (option.first) {
    const _pending = new Promise((resolve2, reject) => {
      const next = function next2(errors) {
        callback(errors);
        return errors.length ? reject({
          errors,
          fields: convertFieldsError(errors)
        }) : resolve2();
      };
      const flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func2, next);
    });
    _pending.catch((e2) => e2);
    return _pending;
  }
  let firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  const objArrKeys = Object.keys(objArr);
  const objArrLength = objArrKeys.length;
  let total = 0;
  const results = [];
  const pending = new Promise((resolve2, reject) => {
    const next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve2();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve2();
    }
    objArrKeys.forEach((key) => {
      const arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func2, next);
      } else {
        asyncParallelArray(arr, func2, next);
      }
    });
  });
  pending.catch((e2) => e2);
  return pending;
}
function complementError(rule) {
  return function(oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (const s in source) {
      if (source.hasOwnProperty(s)) {
        const value2 = source[s];
        if (typeof value2 === "object" && typeof target[s] === "object") {
          target[s] = __spreadValues(__spreadValues({}, target[s]), value2);
        } else {
          target[s] = value2;
        }
      }
    }
  }
  return target;
}
function required(rule, value2, source, errors, options, type2) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value2, type2 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
function whitespace(rule, value2, source, errors, options) {
  if (/^\s+$/.test(value2) || value2 === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
const pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
    "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
    "i"
  ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value2) {
    return /^(-)?\d+$/.test(value2);
  },
  float: function float(value2) {
    return /^(-)?\d+(\.\d+)?$/.test(value2);
  },
  array: function array2(value2) {
    return Array.isArray(value2);
  },
  regexp: function regexp(value2) {
    if (value2 instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value2);
    } catch (e2) {
      return false;
    }
  },
  date: function date2(value2) {
    return typeof value2.getTime === "function" && typeof value2.getMonth === "function" && typeof value2.getYear === "function";
  },
  number: function number2(value2) {
    if (isNaN(value2)) {
      return false;
    }
    return typeof +value2 === "number";
  },
  object: function object2(value2) {
    return typeof value2 === "object" && !types.array(value2);
  },
  method: function method(value2) {
    return typeof value2 === "function";
  },
  email: function email2(value2) {
    return typeof value2 === "string" && !!value2.match(pattern.email) && value2.length < 255;
  },
  url: function url2(value2) {
    return typeof value2 === "string" && !!value2.match(pattern.url);
  },
  hex: function hex(value2) {
    return typeof value2 === "string" && !!value2.match(pattern.hex);
  }
};
function type(rule, value2, source, errors, options) {
  if (rule.required && value2 === void 0) {
    required(rule, value2, source, errors, options);
    return;
  }
  const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  const ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value2)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value2 !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
function range(rule, value2, source, errors, options) {
  const len = typeof rule.len === "number";
  const min = typeof rule.min === "number";
  const max = typeof rule.max === "number";
  const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  let val = value2;
  let key = null;
  const num = typeof value2 === "number";
  const str = typeof value2 === "string";
  const arr = Array.isArray(value2);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value2.length;
  }
  if (str) {
    val = value2.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
const ENUM = "enum";
function enumerable(rule, value2, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value2) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
}
function pattern$1(rule, value2, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value2)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value2)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
      }
    }
  }
}
const rules = {
  required,
  whitespace,
  type,
  range,
  enum: enumerable,
  pattern: pattern$1
};
function string(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options, "string");
    if (!isEmptyValue(value2, "string")) {
      rules.type(rule, value2, source, errors, options);
      rules.range(rule, value2, source, errors, options);
      rules.pattern(rule, value2, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value2, source, errors, options);
      }
    }
  }
  callback(errors);
}
function method2(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function number22(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (value2 === "") {
      value2 = void 0;
    }
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
      rules.range(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function _boolean(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function regexp2(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (!isEmptyValue(value2)) {
      rules.type(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function integer2(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
      rules.range(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function floatFn(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
      rules.range(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function array22(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2, "array") && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options, "array");
    if (!isEmptyValue(value2, "array")) {
      rules.type(rule, value2, source, errors, options);
      rules.range(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function object22(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules.type(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
const ENUM$1 = "enum";
function enumerable$1(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (value2 !== void 0) {
      rules[ENUM$1](rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function pattern$2(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (!isEmptyValue(value2, "string")) {
      rules.pattern(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function date22(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
    if (!isEmptyValue(value2)) {
      let dateObject;
      if (typeof value2 === "number") {
        dateObject = new Date(value2);
      } else {
        dateObject = value2;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value2, callback, source, options) {
  const errors = [];
  const type2 = Array.isArray(value2) ? "array" : typeof value2;
  rules.required(rule, value2, source, errors, options, type2);
  callback(errors);
}
function type$1(rule, value2, callback, source, options) {
  const ruleType = rule.type;
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options, ruleType);
    if (!isEmptyValue(value2, ruleType)) {
      rules.type(rule, value2, source, errors, options);
    }
  }
  callback(errors);
}
function any(rule, value2, callback, source, options) {
  const errors = [];
  const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value2) && !rule.required) {
      return callback();
    }
    rules.required(rule, value2, source, errors, options);
  }
  callback(errors);
}
const validators = {
  string,
  method: method2,
  number: number22,
  boolean: _boolean,
  regexp: regexp2,
  integer: integer2,
  float: floatFn,
  array: array22,
  object: object22,
  enum: enumerable$1,
  pattern: pattern$2,
  date: date22,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any
};
function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone2() {
      const cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
const messages = newMessages();
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define2(rules2) {
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    let z;
    let item;
    for (z in rules2) {
      if (rules2.hasOwnProperty(z)) {
        item = rules2[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o2, oc) {
    const _this = this;
    if (o2 === void 0) {
      o2 = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    let source = source_;
    let options = o2;
    let callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      let i;
      let errors = [];
      let fields = {};
      function add2(e2) {
        if (Array.isArray(e2)) {
          let _errors;
          errors = (_errors = errors).concat.apply(_errors, e2);
        } else {
          errors.push(e2);
        }
      }
      for (i = 0; i < results.length; i++) {
        add2(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      let messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    let arr;
    let value2;
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach((z) => {
      arr = _this.rules[z];
      value2 = source[z];
      arr.forEach((r) => {
        let rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = __spreadValues({}, source);
          }
          value2 = source[z] = rule.transform(value2);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = __spreadValues({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value: value2,
          source,
          field: z
        });
      });
    });
    const errorFields = {};
    return asyncMap(series, options, (data, doIt) => {
      const { rule } = data;
      let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return __spreadProps(__spreadValues({}, schema), { fullField: `${rule.fullField}.${key}` });
      }
      function cb(e2) {
        if (e2 === void 0) {
          e2 = [];
        }
        let errors = e2;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning("async-validator:", errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          let fieldsSchema = {};
          if (rule.defaultField) {
            for (const k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = __spreadValues(__spreadValues({}, fieldsSchema), data.rule.fields);
          for (const f2 in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f2)) {
              const fieldSchema = Array.isArray(fieldsSchema[f2]) ? fieldsSchema[f2] : [fieldsSchema[f2]];
              fieldsSchema[f2] = fieldSchema.map(addFullfield.bind(null, f2));
            }
          }
          const schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, (errs) => {
            const finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      let res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || `${rule.field} fails`);
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(() => cb(), (e2) => cb(e2));
      }
    }, (results) => {
      complete(results);
    });
  },
  getType: function getType2(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    const keys = Object.keys(rule);
    const messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type2, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type2] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
const props$l = {
  props: __spreadValues({
    // 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    // 自定义导航栏的高度
    customNavHeight: {
      type: [String, Number],
      default: 0
    },
    // 是否禁用吸顶功能
    disabled: {
      type: Boolean,
      default: false
    },
    // 吸顶区域的背景颜色
    bgColor: {
      type: String,
      default: "transparent"
    },
    // z-index值
    zIndex: {
      type: [String, Number],
      default: ""
    },
    // 列表中的索引值
    index: {
      type: [String, Number],
      default: ""
    }
  }, (_r = (_q = index$1.$uv) == null ? void 0 : _q.props) == null ? void 0 : _r.sticky)
};
const props$k = {
  props: __spreadValues({
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框为空时占位符
    placeholder: {
      type: [String, Number],
      default: ""
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: "textarea-placeholder"
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc"
    },
    // 输入框高度
    height: {
      type: [String, Number],
      default: 70
    },
    // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
    confirmType: {
      type: String,
      default: "return"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示统计字数
    count: {
      type: Boolean,
      default: false
    },
    // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
    focus: {
      type: Boolean,
      default: false
    },
    // 是否自动增加高度
    autoHeight: {
      type: Boolean,
      default: false
    },
    // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
    fixed: {
      type: Boolean,
      default: false
    },
    // 指定光标与键盘的距离
    cursorSpacing: {
      type: Number,
      default: 0
    },
    // 指定focus时的光标位置
    cursor: {
      type: [String, Number],
      default: ""
    },
    // 是否显示键盘上方带有”完成“按钮那一栏，
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: Number,
      default: -1
    },
    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: Number,
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 是否去掉 iOS 下的默认内边距，只微信小程序有效
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，只微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: 140
    },
    // 边框类型，surround-四周边框，bottom-底部边框
    border: {
      type: String,
      default: "surround"
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: null
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    // 是否忽略组件内对文本合成系统事件的处理
    confirmHold: {
      type: Boolean,
      default: false
    },
    // 文本样式
    textStyle: {
      type: [Object, String],
      default: () => {
      }
    },
    // 统计数字的样式
    countStyle: {
      type: [Object, String],
      default: () => {
      }
    }
  }, (_t = (_s = index$1.$uv) == null ? void 0 : _s.props) == null ? void 0 : _t.textarea)
};
const props$j = {
  props: __spreadValues({
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: 0
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: true
    },
    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: false
    }
  }, (_v = (_u = index$1.$uv) == null ? void 0 : _u.props) == null ? void 0 : _v.countDown)
};
function padZero(num, targetLength = 2) {
  let str = `${num}`;
  while (str.length < targetLength) {
    str = `0${str}`;
  }
  return str;
}
const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function parseTimeData(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function parseFormat(format2, timeData) {
  let {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  } = timeData;
  if (format2.indexOf("DD") === -1) {
    hours += days * 24;
  } else {
    format2 = format2.replace("DD", padZero(days));
  }
  if (format2.indexOf("HH") === -1) {
    minutes += hours * 60;
  } else {
    format2 = format2.replace("HH", padZero(hours));
  }
  if (format2.indexOf("mm") === -1) {
    seconds += minutes * 60;
  } else {
    format2 = format2.replace("mm", padZero(minutes));
  }
  if (format2.indexOf("ss") === -1) {
    milliseconds += seconds * 1e3;
  } else {
    format2 = format2.replace("ss", padZero(seconds));
  }
  return format2.replace("SSS", padZero(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
const props$i = {
  props: __spreadValues({
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: true
    },
    // 顶部标题
    title: {
      type: String,
      default: ""
    },
    // 弹窗圆角
    round: {
      type: [String, Number],
      default: 0
    },
    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: () => []
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: false
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: 44
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: "确定"
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: "#909193"
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    // 文字颜色
    color: {
      type: String,
      default: ""
    },
    // 选中文字的颜色
    activeColor: {
      type: String,
      default: ""
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: 5
    },
    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: "text"
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否允许点击确认关闭选择器
    closeOnClickConfirm: {
      type: Boolean,
      default: true
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: () => []
    },
    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: true
    }
  }, (_x = (_w = index$1.$uv) == null ? void 0 : _w.props) == null ? void 0 : _x.picker)
};
const props$h = {
  props: __spreadValues({
    // 内置图标名称，或图片路径，建议绝对路径
    icon: {
      type: String,
      default: ""
    },
    // 提示文字
    text: {
      type: String,
      default: ""
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "#c0c4cc"
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: 14
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: "#c0c4cc"
    },
    // 图标的大小
    iconSize: {
      type: [String, Number],
      default: 90
    },
    // 选择预置的图标类型
    mode: {
      type: String,
      default: "data"
    },
    //  图标宽度，单位px
    width: {
      type: [String, Number],
      default: 160
    },
    // 图标高度，单位px
    height: {
      type: [String, Number],
      default: 160
    },
    // 是否显示组件
    show: {
      type: Boolean,
      default: true
    },
    // 组件距离上一个元素之间的距离，默认px单位
    marginTop: {
      type: [String, Number],
      default: 0
    }
  }, (_z = (_y = index$1.$uv) == null ? void 0 : _y.props) == null ? void 0 : _z.empty)
};
const props$g = {
  props: __spreadValues({
    // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
    status: {
      type: String,
      default: "loadmore"
    },
    // 组件背景色
    bgColor: {
      type: String,
      default: "transparent"
    },
    // 是否显示加载中的图标
    icon: {
      type: Boolean,
      default: true
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: 16
    },
    // 字体颜色
    color: {
      type: String,
      default: "#606266"
    },
    // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
    loadingIcon: {
      type: String,
      default: "spinner"
    },
    // 加载前的提示语
    loadmoreText: {
      type: String,
      default: "加载更多"
    },
    // 加载中提示语
    loadingText: {
      type: String,
      default: "正在加载..."
    },
    // 没有更多的提示语
    nomoreText: {
      type: String,
      default: "没有更多了"
    },
    // 在“没有更多”状态下，是否显示粗点
    isDot: {
      type: Boolean,
      default: false
    },
    // 加载中图标的颜色
    iconColor: {
      type: String,
      default: "#b7b7b7"
    },
    // 上边距
    marginTop: {
      type: [String, Number],
      default: 10
    },
    // 下边距
    marginBottom: {
      type: [String, Number],
      default: 10
    },
    // 高度，单位px
    height: {
      type: [String, Number],
      default: "auto"
    },
    // 是否显示左边分割线
    line: {
      type: Boolean,
      default: false
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: "#E6E8EB"
    },
    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: false
    }
  }, (_B = (_A = index$1.$uv) == null ? void 0 : _A.props) == null ? void 0 : _B.loadmore)
};
const props$f = {
  props: __spreadValues({
    // 激活部分的颜色
    activeColor: {
      type: String,
      default: "#19be6b"
    },
    inactiveColor: {
      type: String,
      default: "#ececec"
    },
    // 进度百分比，数值
    percentage: {
      type: [String, Number],
      default: 0
    },
    // 是否在进度条内部显示百分比的值
    showText: {
      type: Boolean,
      default: true
    },
    // 进度条的高度，单位px
    height: {
      type: [String, Number],
      default: 12
    }
  }, (_D = (_C = index$1.$uv) == null ? void 0 : _C.props) == null ? void 0 : _D.lineProgress)
};
const button = {
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String
  }
};
const openType = {
  props: {
    openType: String
  },
  emits: ["getphonenumber", "getuserinfo", "error", "opensetting", "launchapp", "contact", "chooseavatar", "addgroupapp", "chooseaddress", "subscribe", "login", "im"],
  methods: {
    onGetPhoneNumber(event) {
      this.$emit("getphonenumber", event.detail);
    },
    onGetUserInfo(event) {
      this.$emit("getuserinfo", event.detail);
    },
    onError(event) {
      this.$emit("error", event.detail);
    },
    onOpenSetting(event) {
      this.$emit("opensetting", event.detail);
    },
    onLaunchApp(event) {
      this.$emit("launchapp", event.detail);
    },
    onContact(event) {
      this.$emit("contact", event.detail);
    },
    onChooseavatar(event) {
      this.$emit("chooseavatar", event.detail);
    },
    onAgreeprivacyauthorization(event) {
      this.$emit("agreeprivacyauthorization", event.detail);
    },
    onAddgroupapp(event) {
      this.$emit("addgroupapp", event.detail);
    },
    onChooseaddress(event) {
      this.$emit("chooseaddress", event.detail);
    },
    onSubscribe(event) {
      this.$emit("subscribe", event.detail);
    },
    onLogin(event) {
      this.$emit("login", event.detail);
    },
    onIm(event) {
      this.$emit("im", event.detail);
    }
  }
};
const props$e = {
  props: __spreadValues({
    // 是否细边框
    hairline: {
      type: Boolean,
      default: true
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: "info"
    },
    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: "normal"
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: "square"
    },
    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: ""
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: "spinner"
    },
    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: 14
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: ""
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: ""
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: ""
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: true
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: "en"
    },
    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: ""
    },
    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: ""
    },
    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: ""
    },
    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: ""
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: true
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: ""
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: 0
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: 0
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: 200
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: ""
    },
    // 按钮图标
    icon: {
      type: String,
      default: ""
    },
    // 按钮图标大小
    iconSize: {
      type: [String, Number],
      default: ""
    },
    // 按钮图标颜色
    iconColor: {
      type: String,
      default: "#000000"
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: ""
    },
    // 自定义按钮文本样式
    customTextStyle: {
      type: [Object, String],
      default: ""
    }
  }, (_F = (_E = index$1.$uv) == null ? void 0 : _E.props) == null ? void 0 : _F.button)
};
class MPAnimation {
  constructor(options, _this) {
    this.options = options;
    this.animation = index$1.createAnimation(__spreadValues({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  _nvuePushAnimates(type2, args) {
    let aniObj = this.currentStepAnimates[this.next];
    let styles = {};
    if (!aniObj) {
      styles = {
        styles: {},
        config: {}
      };
    } else {
      styles = aniObj;
    }
    if (animateTypes1.includes(type2)) {
      if (!styles.styles.transform) {
        styles.styles.transform = "";
      }
      let unit = "";
      if (type2 === "rotate") {
        unit = "deg";
      }
      styles.styles.transform += `${type2}(${args + unit}) `;
    } else {
      styles.styles[type2] = `${args}`;
    }
    this.currentStepAnimates[this.next] = styles;
  }
  _animateRun(styles = {}, config2 = {}) {
    let ref2 = this.$.$refs["ani"].ref;
    if (!ref2)
      return;
    return new Promise((resolve2, reject) => {
      nvueAnimation.transition(ref2, __spreadValues({
        styles
      }, config2), (res) => {
        resolve2();
      });
    });
  }
  _nvueNextAnimate(animates, step = 0, fn) {
    let obj = animates[step];
    if (obj) {
      let {
        styles,
        config: config2
      } = obj;
      this._animateRun(styles, config2).then(() => {
        step += 1;
        this._nvueNextAnimate(animates, step, fn);
      });
    } else {
      this.currentStepAnimates = {};
      typeof fn === "function" && fn();
      this.isEnd = true;
    }
  }
  step(config2 = {}) {
    this.animation.step(config2);
    return this;
  }
  run(fn) {
    this.$.animationData = this.animation.export();
    this.$.timer = setTimeout(() => {
      typeof fn === "function" && fn();
    }, this.$.durationTime);
  }
}
const animateTypes1 = [
  "matrix",
  "matrix3d",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skew",
  "skewX",
  "skewY",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ"
];
const animateTypes2 = ["opacity", "backgroundColor"];
const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
animateTypes1.concat(animateTypes2, animateTypes3).forEach((type2) => {
  MPAnimation.prototype[type2] = function(...args) {
    this.animation[type2](...args);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this)
    return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
const props$d = {
  props: __spreadValues({
    color: {
      type: String,
      default: "#d6d7d9"
    },
    // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
    length: {
      type: [String, Number],
      default: "100%"
    },
    // 线条方向，col-竖向，row-横向
    direction: {
      type: String,
      default: "row"
    },
    // 是否显示细边框
    hairline: {
      type: Boolean,
      default: true
    },
    // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
    margin: {
      type: [String, Number],
      default: 0
    },
    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: false
    }
  }, (_H = (_G = index$1.$uv) == null ? void 0 : _G.props) == null ? void 0 : _H.line)
};
const props$c = {
  props: {
    //二维码内容
    value: {
      type: [String, Number]
    },
    //选项
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    //二维码大小
    size: {
      type: [String, Number],
      default: 200
    },
    //导出的文件类型
    fileType: {
      type: String,
      default: "png"
    },
    //是否初始化组件后就开始生成
    start: {
      type: Boolean,
      default: true
    },
    //是否数据发生改变自动重绘
    auto: {
      type: Boolean,
      default: true
    },
    //隐藏组件
    hide: {
      type: Boolean,
      default: false
    },
    /**
     * canvas 类型，微信小程序默认使用2d，非2d微信官方已放弃维护，问题比较多
     * 注意：微信小程序type2d手机上正常，PC上微信内打开小程序toDataURL报错，看后期微信官方团队会不会做兼容，不兼容的话只能在自行判断在PC使用非2d，或者直接提示用户请在手机上操作，微信团队的海报中心小程序就是这么做的
     */
    type: {
      type: String,
      default: () => {
        return "2d";
      }
    },
    //队列绘制，主要针对NVue端
    queue: {
      type: Boolean,
      default: false
    },
    //是否队列加载图片，可减少canvas发起的网络资源请求，节省服务器资源
    isQueueLoadImage: {
      type: Boolean,
      default: false
    },
    //loading态
    loading: {
      type: Boolean,
      default: void 0
    },
    //H5保存即自动下载（在支持的环境下），默认false为仅弹层提示用户需要长按图片保存，不会自动下载
    h5SaveIsDownload: {
      type: Boolean,
      default: false
    },
    //H5下载名称
    h5DownloadName: {
      type: String,
      default: "uvQRCode"
    },
    // H5保存二维码时候是否显示提示
    h5SaveTip: {
      type: Boolean,
      default: true
    }
  }
};
function o(o2) {
  this.mode = r.MODE_8BIT_BYTE, this.data = o2;
}
function e(o2, e2) {
  this.typeNumber = o2, this.errorCorrectLevel = e2, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array();
}
o.prototype = { getLength: function(o2) {
  return this.data.length;
}, write: function(o2) {
  for (var e2 = 0; e2 < this.data.length; e2++)
    o2.put(this.data.charCodeAt(e2), 8);
} }, e.prototype = { addData: function(e2) {
  var r = new o(e2);
  this.dataList.push(r), this.dataCache = null;
}, isDark: function(o2, e2) {
  if (o2 < 0 || this.moduleCount <= o2 || e2 < 0 || this.moduleCount <= e2)
    throw new Error(o2 + "," + e2);
  return this.modules[o2][e2];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  if (this.typeNumber < 1) {
    var o2 = 1;
    for (o2 = 1; o2 < 40; o2++) {
      for (var e2 = v.getRSBlocks(o2, this.errorCorrectLevel), r = new p(), t = 0, i = 0; i < e2.length; i++)
        t += e2[i].dataCount;
      for (i = 0; i < this.dataList.length; i++) {
        var n = this.dataList[i];
        r.put(n.mode, 4), r.put(n.getLength(), h.getLengthInBits(n.mode, o2)), n.write(r);
      }
      if (r.getLengthInBits() <= 8 * t)
        break;
    }
    this.typeNumber = o2;
  }
  this.makeImpl(false, this.getBestMaskPattern());
}, makeImpl: function(o2, r) {
  this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
  for (var t = 0; t < this.moduleCount; t++) {
    this.modules[t] = new Array(this.moduleCount);
    for (var i = 0; i < this.moduleCount; i++)
      this.modules[t][i] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(o2, r), this.typeNumber >= 7 && this.setupTypeNumber(o2), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r);
}, setupPositionProbePattern: function(o2, e2) {
  for (var r = -1; r <= 7; r++)
    if (!(o2 + r <= -1 || this.moduleCount <= o2 + r))
      for (var t = -1; t <= 7; t++)
        e2 + t <= -1 || this.moduleCount <= e2 + t || (this.modules[o2 + r][e2 + t] = 0 <= r && r <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= t && t <= 4);
}, getBestMaskPattern: function() {
  for (var o2 = 0, e2 = 0, r = 0; r < 8; r++) {
    this.makeImpl(true, r);
    var t = h.getLostPoint(this);
    (0 == r || o2 > t) && (o2 = t, e2 = r);
  }
  return e2;
}, createMovieClip: function(o2, e2, r) {
  var t = o2.createEmptyMovieClip(e2, r);
  this.make();
  for (var i = 0; i < this.modules.length; i++)
    for (var n = 1 * i, a = 0; a < this.modules[i].length; a++) {
      var d = 1 * a;
      this.modules[i][a] && (t.beginFill(0, 100), t.moveTo(d, n), t.lineTo(d + 1, n), t.lineTo(d + 1, n + 1), t.lineTo(d, n + 1), t.endFill());
    }
  return t;
}, setupTimingPattern: function() {
  for (var o2 = 8; o2 < this.moduleCount - 8; o2++)
    null == this.modules[o2][6] && (this.modules[o2][6] = o2 % 2 == 0);
  for (var e2 = 8; e2 < this.moduleCount - 8; e2++)
    null == this.modules[6][e2] && (this.modules[6][e2] = e2 % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var o2 = h.getPatternPosition(this.typeNumber), e2 = 0; e2 < o2.length; e2++)
    for (var r = 0; r < o2.length; r++) {
      var t = o2[e2], i = o2[r];
      if (null == this.modules[t][i])
        for (var n = -2; n <= 2; n++)
          for (var a = -2; a <= 2; a++)
            this.modules[t + n][i + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a;
    }
}, setupTypeNumber: function(o2) {
  for (var e2 = h.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var t = !o2 && 1 == (e2 >> r & 1);
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = t;
  }
  for (r = 0; r < 18; r++) {
    t = !o2 && 1 == (e2 >> r & 1);
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = t;
  }
}, setupTypeInfo: function(o2, e2) {
  for (var r = this.errorCorrectLevel << 3 | e2, t = h.getBCHTypeInfo(r), i = 0; i < 15; i++) {
    var n = !o2 && 1 == (t >> i & 1);
    i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n;
  }
  for (i = 0; i < 15; i++) {
    n = !o2 && 1 == (t >> i & 1);
    i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n;
  }
  this.modules[this.moduleCount - 8][8] = !o2;
}, mapData: function(o2, e2) {
  for (var r = -1, t = this.moduleCount - 1, i = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2)
    for (6 == a && a--; ; ) {
      for (var d = 0; d < 2; d++)
        if (null == this.modules[t][a - d]) {
          var u = false;
          n < o2.length && (u = 1 == (o2[n] >>> i & 1)), h.getMask(e2, t, a - d) && (u = !u), this.modules[t][a - d] = u, -1 == --i && (n++, i = 7);
        }
      if ((t += r) < 0 || this.moduleCount <= t) {
        t -= r, r = -r;
        break;
      }
    }
} }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(o2, r, t) {
  for (var i = v.getRSBlocks(o2, r), n = new p(), a = 0; a < t.length; a++) {
    var d = t[a];
    n.put(d.mode, 4), n.put(d.getLength(), h.getLengthInBits(d.mode, o2)), d.write(n);
  }
  var u = 0;
  for (a = 0; a < i.length; a++)
    u += i[a].dataCount;
  if (n.getLengthInBits() > 8 * u)
    throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * u + ")");
  for (n.getLengthInBits() + 4 <= 8 * u && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
    n.putBit(false);
  for (; !(n.getLengthInBits() >= 8 * u || (n.put(e.PAD0, 8), n.getLengthInBits() >= 8 * u)); )
    n.put(e.PAD1, 8);
  return e.createBytes(n, i);
}, e.createBytes = function(o2, e2) {
  for (var r = 0, t = 0, i = 0, n = new Array(e2.length), a = new Array(e2.length), d = 0; d < e2.length; d++) {
    var u = e2[d].dataCount, s = e2[d].totalCount - u;
    t = Math.max(t, u), i = Math.max(i, s), n[d] = new Array(u);
    for (var g = 0; g < n[d].length; g++)
      n[d][g] = 255 & o2.buffer[g + r];
    r += u;
    var l = h.getErrorCorrectPolynomial(s), c = new f(n[d], l.getLength() - 1).mod(l);
    a[d] = new Array(l.getLength() - 1);
    for (g = 0; g < a[d].length; g++) {
      var m = g + c.getLength() - a[d].length;
      a[d][g] = m >= 0 ? c.get(m) : 0;
    }
  }
  var v2 = 0;
  for (g = 0; g < e2.length; g++)
    v2 += e2[g].totalCount;
  var p2 = new Array(v2), C2 = 0;
  for (g = 0; g < t; g++)
    for (d = 0; d < e2.length; d++)
      g < n[d].length && (p2[C2++] = n[d][g]);
  for (g = 0; g < i; g++)
    for (d = 0; d < e2.length; d++)
      g < a[d].length && (p2[C2++] = a[d][g]);
  return p2;
};
for (var r = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, t = { L: 1, M: 0, Q: 3, H: 2 }, i = 0, n = 1, a = 2, d = 3, u = 4, s = 5, g = 6, l = 7, h = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(o2) {
  for (var e2 = o2 << 10; h.getBCHDigit(e2) - h.getBCHDigit(h.G15) >= 0; )
    e2 ^= h.G15 << h.getBCHDigit(e2) - h.getBCHDigit(h.G15);
  return (o2 << 10 | e2) ^ h.G15_MASK;
}, getBCHTypeNumber: function(o2) {
  for (var e2 = o2 << 12; h.getBCHDigit(e2) - h.getBCHDigit(h.G18) >= 0; )
    e2 ^= h.G18 << h.getBCHDigit(e2) - h.getBCHDigit(h.G18);
  return o2 << 12 | e2;
}, getBCHDigit: function(o2) {
  for (var e2 = 0; 0 != o2; )
    e2++, o2 >>>= 1;
  return e2;
}, getPatternPosition: function(o2) {
  return h.PATTERN_POSITION_TABLE[o2 - 1];
}, getMask: function(o2, e2, r2) {
  switch (o2) {
    case i:
      return (e2 + r2) % 2 == 0;
    case n:
      return e2 % 2 == 0;
    case a:
      return r2 % 3 == 0;
    case d:
      return (e2 + r2) % 3 == 0;
    case u:
      return (Math.floor(e2 / 2) + Math.floor(r2 / 3)) % 2 == 0;
    case s:
      return e2 * r2 % 2 + e2 * r2 % 3 == 0;
    case g:
      return (e2 * r2 % 2 + e2 * r2 % 3) % 2 == 0;
    case l:
      return (e2 * r2 % 3 + (e2 + r2) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + o2);
  }
}, getErrorCorrectPolynomial: function(o2) {
  for (var e2 = new f([1], 0), r2 = 0; r2 < o2; r2++)
    e2 = e2.multiply(new f([1, c.gexp(r2)], 0));
  return e2;
}, getLengthInBits: function(o2, e2) {
  if (1 <= e2 && e2 < 10)
    switch (o2) {
      case r.MODE_NUMBER:
        return 10;
      case r.MODE_ALPHA_NUM:
        return 9;
      case r.MODE_8BIT_BYTE:
      case r.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + o2);
    }
  else if (e2 < 27)
    switch (o2) {
      case r.MODE_NUMBER:
        return 12;
      case r.MODE_ALPHA_NUM:
        return 11;
      case r.MODE_8BIT_BYTE:
        return 16;
      case r.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + o2);
    }
  else {
    if (!(e2 < 41))
      throw new Error("type:" + e2);
    switch (o2) {
      case r.MODE_NUMBER:
        return 14;
      case r.MODE_ALPHA_NUM:
        return 13;
      case r.MODE_8BIT_BYTE:
        return 16;
      case r.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + o2);
    }
  }
}, getLostPoint: function(o2) {
  for (var e2 = o2.getModuleCount(), r2 = 0, t2 = 0; t2 < e2; t2++)
    for (var i2 = 0; i2 < e2; i2++) {
      for (var n2 = 0, a2 = o2.isDark(t2, i2), d2 = -1; d2 <= 1; d2++)
        if (!(t2 + d2 < 0 || e2 <= t2 + d2))
          for (var u2 = -1; u2 <= 1; u2++)
            i2 + u2 < 0 || e2 <= i2 + u2 || 0 == d2 && 0 == u2 || a2 == o2.isDark(t2 + d2, i2 + u2) && n2++;
      n2 > 5 && (r2 += 3 + n2 - 5);
    }
  for (t2 = 0; t2 < e2 - 1; t2++)
    for (i2 = 0; i2 < e2 - 1; i2++) {
      var s2 = 0;
      o2.isDark(t2, i2) && s2++, o2.isDark(t2 + 1, i2) && s2++, o2.isDark(t2, i2 + 1) && s2++, o2.isDark(t2 + 1, i2 + 1) && s2++, 0 != s2 && 4 != s2 || (r2 += 3);
    }
  for (t2 = 0; t2 < e2; t2++)
    for (i2 = 0; i2 < e2 - 6; i2++)
      o2.isDark(t2, i2) && !o2.isDark(t2, i2 + 1) && o2.isDark(t2, i2 + 2) && o2.isDark(t2, i2 + 3) && o2.isDark(t2, i2 + 4) && !o2.isDark(t2, i2 + 5) && o2.isDark(t2, i2 + 6) && (r2 += 40);
  for (i2 = 0; i2 < e2; i2++)
    for (t2 = 0; t2 < e2 - 6; t2++)
      o2.isDark(t2, i2) && !o2.isDark(t2 + 1, i2) && o2.isDark(t2 + 2, i2) && o2.isDark(t2 + 3, i2) && o2.isDark(t2 + 4, i2) && !o2.isDark(t2 + 5, i2) && o2.isDark(t2 + 6, i2) && (r2 += 40);
  var g2 = 0;
  for (i2 = 0; i2 < e2; i2++)
    for (t2 = 0; t2 < e2; t2++)
      o2.isDark(t2, i2) && g2++;
  return r2 += 10 * (Math.abs(100 * g2 / e2 / e2 - 50) / 5);
} }, c = { glog: function(o2) {
  if (o2 < 1)
    throw new Error("glog(" + o2 + ")");
  return c.LOG_TABLE[o2];
}, gexp: function(o2) {
  for (; o2 < 0; )
    o2 += 255;
  for (; o2 >= 256; )
    o2 -= 255;
  return c.EXP_TABLE[o2];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, m = 0; m < 8; m++)
  c.EXP_TABLE[m] = 1 << m;
for (m = 8; m < 256; m++)
  c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
for (m = 0; m < 255; m++)
  c.LOG_TABLE[c.EXP_TABLE[m]] = m;
function f(o2, e2) {
  if (null == o2.length)
    throw new Error(o2.length + "/" + e2);
  for (var r = 0; r < o2.length && 0 == o2[r]; )
    r++;
  this.num = new Array(o2.length - r + e2);
  for (var t = 0; t < o2.length - r; t++)
    this.num[t] = o2[t + r];
}
function v(o2, e2) {
  this.totalCount = o2, this.dataCount = e2;
}
function p() {
  this.buffer = new Array(), this.length = 0;
}
function C(o2) {
  return o2.setFillStyle = o2.setFillStyle || function(e2) {
    o2.fillStyle = e2;
  }, o2.setFontSize = o2.setFontSize || function(e2) {
    o2.font = `${e2}px`;
  }, o2.setTextAlign = o2.setTextAlign || function(e2) {
    o2.textAlign = e2;
  }, o2.setTextBaseline = o2.setTextBaseline || function(e2) {
    o2.textBaseline = e2;
  }, o2.setGlobalAlpha = o2.setGlobalAlpha || function(e2) {
    o2.globalAlpha = e2;
  }, o2.setStrokeStyle = o2.setStrokeStyle || function(e2) {
    o2.strokeStyle = e2;
  }, o2.setShadow = o2.setShadow || function(e2, r, t, i) {
    o2.shadowOffsetX = e2, o2.shadowOffsetY = r, o2.shadowBlur = t, o2.shadowColor = i;
  }, o2.draw = o2.draw || function(o3, e2) {
    e2 && e2();
  }, o2.clearRect = o2.clearRect || function(e2, r, t, i) {
    o2.draw(false);
  }, o2;
}
function b(o2, e2) {
  var r = this.data = "", t = this.size = 200;
  this.useDynamicSize = false, this.dynamicSize = t;
  var i = this.typeNumber = -1;
  this.errorCorrectLevel = b.errorCorrectLevel.H;
  var n = this.margin = 0;
  this.areaColor = "#FFFFFF", this.backgroundColor = "rgba(255,255,255,0)", this.backgroundImageSrc = void 0;
  var a = this.backgroundImageWidth = void 0, d = this.backgroundImageHeight = void 0, u = this.backgroundImageX = void 0, s = this.backgroundImageY = void 0;
  this.backgroundImageAlpha = 1, this.backgroundImageBorderRadius = 0;
  var g = this.backgroundPadding = 0;
  this.foregroundColor = "#000000", this.foregroundImageSrc = void 0;
  var l = this.foregroundImageWidth = void 0, h = this.foregroundImageHeight = void 0, c = this.foregroundImageX = void 0, m = this.foregroundImageY = void 0, f2 = this.foregroundImagePadding = 0;
  this.foregroundImageBackgroundColor = "#FFFFFF";
  var v2 = this.foregroundImageBorderRadius = 0, p2 = this.foregroundImageShadowOffsetX = 0, k = this.foregroundImageShadowOffsetY = 0, y = this.foregroundImageShadowBlur = 0;
  this.foregroundImageShadowColor = "#808080";
  var w = this.foregroundPadding = 0, I = this.positionProbeBackgroundColor = void 0, B = this.positionProbeForegroundColor = void 0, S = this.separatorColor = void 0, P = this.positionAdjustBackgroundColor = void 0, L = this.positionAdjustForegroundColor = void 0, D = this.timingBackgroundColor = void 0, A = this.timingForegroundColor = void 0, E2 = this.typeNumberBackgroundColor = void 0, T = this.typeNumberForegroundColor = void 0, N = this.darkBlockColor = void 0;
  this.base = void 0, this.modules = [], this.moduleCount = 0, this.drawModules = [];
  var M = this.canvasContext = void 0;
  this.loadImage, this.drawReserve = false, this.isMaked = false, Object.defineProperties(this, { data: { get() {
    if ("" === r || void 0 === r)
      throw console.error("[uQRCode]: data must be set!"), new b.Error("data must be set!");
    return r;
  }, set(o3) {
    r = String(o3);
  } }, size: { get: () => t, set(o3) {
    t = Number(o3);
  } }, typeNumber: { get: () => i, set(o3) {
    i = Number(o3);
  } }, margin: { get: () => n, set(o3) {
    n = Number(o3);
  } }, backgroundImageWidth: { get() {
    return void 0 === a ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * a : a;
  }, set(o3) {
    a = Number(o3);
  } }, backgroundImageHeight: { get() {
    return void 0 === d ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * d : d;
  }, set(o3) {
    d = Number(o3);
  } }, backgroundImageX: { get() {
    return void 0 === u ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * u : u;
  }, set(o3) {
    u = Number(o3);
  } }, backgroundImageY: { get() {
    return void 0 === s ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * s : s;
  }, set(o3) {
    s = Number(o3);
  } }, backgroundPadding: { get: () => g, set(o3) {
    g = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
  } }, foregroundImageWidth: { get() {
    return void 0 === l ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * l : l;
  }, set(o3) {
    l = Number(o3);
  } }, foregroundImageHeight: { get() {
    return void 0 === h ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * h : h;
  }, set(o3) {
    h = Number(o3);
  } }, foregroundImageX: { get() {
    return void 0 === c ? this.dynamicSize / 2 - this.foregroundImageWidth / 2 : this.useDynamicSize ? this.dynamicSize / this.size * c : c;
  }, set(o3) {
    c = Number(o3);
  } }, foregroundImageY: { get() {
    return void 0 === m ? this.dynamicSize / 2 - this.foregroundImageHeight / 2 : this.useDynamicSize ? this.dynamicSize / this.size * m : m;
  }, set(o3) {
    m = Number(o3);
  } }, foregroundImagePadding: { get() {
    return this.useDynamicSize ? this.dynamicSize / this.size * f2 : f2;
  }, set(o3) {
    f2 = Number(o3);
  } }, foregroundImageBorderRadius: { get() {
    return this.useDynamicSize ? this.dynamicSize / this.size * v2 : v2;
  }, set(o3) {
    v2 = Number(o3);
  } }, foregroundImageShadowOffsetX: { get() {
    return this.useDynamicSize ? this.dynamicSize / this.size * p2 : p2;
  }, set(o3) {
    p2 = Number(o3);
  } }, foregroundImageShadowOffsetY: { get() {
    return this.useDynamicSize ? this.dynamicSize / this.size * k : k;
  }, set(o3) {
    k = Number(o3);
  } }, foregroundImageShadowBlur: { get() {
    return this.useDynamicSize ? this.dynamicSize / this.size * y : y;
  }, set(o3) {
    y = Number(o3);
  } }, foregroundPadding: { get: () => w, set(o3) {
    w = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
  } }, positionProbeBackgroundColor: { get() {
    return I || this.backgroundColor;
  }, set(o3) {
    I = o3;
  } }, positionProbeForegroundColor: { get() {
    return B || this.foregroundColor;
  }, set(o3) {
    B = o3;
  } }, separatorColor: { get() {
    return S || this.backgroundColor;
  }, set(o3) {
    S = o3;
  } }, positionAdjustBackgroundColor: { get() {
    return P || this.backgroundColor;
  }, set(o3) {
    P = o3;
  } }, positionAdjustForegroundColor: { get() {
    return L || this.foregroundColor;
  }, set(o3) {
    L = o3;
  } }, timingBackgroundColor: { get() {
    return D || this.backgroundColor;
  }, set(o3) {
    D = o3;
  } }, timingForegroundColor: { get() {
    return A || this.foregroundColor;
  }, set(o3) {
    A = o3;
  } }, typeNumberBackgroundColor: { get() {
    return E2 || this.backgroundColor;
  }, set(o3) {
    E2 = o3;
  } }, typeNumberForegroundColor: { get() {
    return T || this.foregroundColor;
  }, set(o3) {
    T = o3;
  } }, darkBlockColor: { get() {
    return N || this.foregroundColor;
  }, set(o3) {
    N = o3;
  } }, canvasContext: { get() {
    if (void 0 === M)
      throw console.error("[uQRCode]: use drawCanvas, you need to set the canvasContext!"), new b.Error("use drawCanvas, you need to set the canvasContext!");
    return M;
  }, set(o3) {
    M = C(o3);
  } } }), b.plugins.forEach((o3) => o3(b, this, false)), o2 && this.setOptions(o2), e2 && (this.canvasContext = C(e2));
}
f.prototype = { get: function(o2) {
  return this.num[o2];
}, getLength: function() {
  return this.num.length;
}, multiply: function(o2) {
  for (var e2 = new Array(this.getLength() + o2.getLength() - 1), r = 0; r < this.getLength(); r++)
    for (var t = 0; t < o2.getLength(); t++)
      e2[r + t] ^= c.gexp(c.glog(this.get(r)) + c.glog(o2.get(t)));
  return new f(e2, 0);
}, mod: function(o2) {
  if (this.getLength() - o2.getLength() < 0)
    return this;
  for (var e2 = c.glog(this.get(0)) - c.glog(o2.get(0)), r = new Array(this.getLength()), t = 0; t < this.getLength(); t++)
    r[t] = this.get(t);
  for (t = 0; t < o2.getLength(); t++)
    r[t] ^= c.gexp(c.glog(o2.get(t)) + e2);
  return new f(r, 0).mod(o2);
} }, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function(o2, e2) {
  var r = v.getRsBlockTable(o2, e2);
  if (null == r)
    throw new Error("bad rs block @ typeNumber:" + o2 + "/errorCorrectLevel:" + e2);
  for (var t = r.length / 3, i = new Array(), n = 0; n < t; n++)
    for (var a = r[3 * n + 0], d = r[3 * n + 1], u = r[3 * n + 2], s = 0; s < a; s++)
      i.push(new v(d, u));
  return i;
}, v.getRsBlockTable = function(o2, e2) {
  switch (e2) {
    case t.L:
      return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 0];
    case t.M:
      return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 1];
    case t.Q:
      return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 2];
    case t.H:
      return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 3];
    default:
      return;
  }
}, p.prototype = { get: function(o2) {
  var e2 = Math.floor(o2 / 8);
  return 1 == (this.buffer[e2] >>> 7 - o2 % 8 & 1);
}, put: function(o2, e2) {
  for (var r = 0; r < e2; r++)
    this.putBit(1 == (o2 >>> e2 - r - 1 & 1));
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(o2) {
  var e2 = Math.floor(this.length / 8);
  this.buffer.length <= e2 && this.buffer.push(0), o2 && (this.buffer[e2] |= 128 >>> this.length % 8), this.length++;
} }, e.errorCorrectLevel = t, b.errorCorrectLevel = e.errorCorrectLevel, b.Error = function(o2) {
  this.errMsg = "[uQRCode]: " + o2;
}, b.plugins = [], b.use = function(o2) {
  "function" == typeof o2 && b.plugins.push(o2);
}, b.prototype.loadImage = function(o2) {
  return Promise.resolve(o2);
}, b.prototype.setOptions = function(o2) {
  var e2, r, t, i, n, a, d, u, s, g, l, h, c, m, f2, v2, p2, C2, b2, k, y, w, I, B, S, P, L, D, A, E2, T, N, M, z, R, _, O, F, x, H, X, Y, j, W, G, K, Q, U, $, J, q, V, Z, oo, eo, ro;
  o2 && (Object.keys(o2).forEach((e3) => {
    this[e3] = o2[e3];
  }), function(o3 = {}, e3 = {}, r2 = false) {
    let t2;
    t2 = r2 ? o3 : __spreadValues({}, o3);
    for (let o4 in e3) {
      var i2 = e3[o4];
      null != i2 && (i2.constructor == Object ? t2[o4] = this.deepReplace(t2[o4], i2) : i2.constructor != String || i2 ? t2[o4] = i2 : t2[o4] = t2[o4]);
    }
  }(this, { data: o2.data || o2.text, size: o2.size, useDynamicSize: o2.useDynamicSize, typeNumber: o2.typeNumber, errorCorrectLevel: o2.errorCorrectLevel, margin: o2.margin, areaColor: o2.areaColor, backgroundColor: o2.backgroundColor || (null === (e2 = o2.background) || void 0 === e2 ? void 0 : e2.color), backgroundImageSrc: o2.backgroundImageSrc || (null === (r = o2.background) || void 0 === r || null === (t = r.image) || void 0 === t ? void 0 : t.src), backgroundImageWidth: o2.backgroundImageWidth || (null === (i = o2.background) || void 0 === i || null === (n = i.image) || void 0 === n ? void 0 : n.width), backgroundImageHeight: o2.backgroundImageHeight || (null === (a = o2.background) || void 0 === a || null === (d = a.image) || void 0 === d ? void 0 : d.height), backgroundImageX: o2.backgroundImageX || (null === (u = o2.background) || void 0 === u || null === (s = u.image) || void 0 === s ? void 0 : s.x), backgroundImageY: o2.backgroundImageY || (null === (g = o2.background) || void 0 === g || null === (l = g.image) || void 0 === l ? void 0 : l.y), backgroundImageAlpha: o2.backgroundImageAlpha || (null === (h = o2.background) || void 0 === h || null === (c = h.image) || void 0 === c ? void 0 : c.alpha), backgroundImageBorderRadius: o2.backgroundImageBorderRadius || (null === (m = o2.background) || void 0 === m || null === (f2 = m.image) || void 0 === f2 ? void 0 : f2.borderRadius), backgroundPadding: o2.backgroundPadding, foregroundColor: o2.foregroundColor || (null === (v2 = o2.foreground) || void 0 === v2 ? void 0 : v2.color), foregroundImageSrc: o2.foregroundImageSrc || (null === (p2 = o2.foreground) || void 0 === p2 || null === (C2 = p2.image) || void 0 === C2 ? void 0 : C2.src), foregroundImageWidth: o2.foregroundImageWidth || (null === (b2 = o2.foreground) || void 0 === b2 || null === (k = b2.image) || void 0 === k ? void 0 : k.width), foregroundImageHeight: o2.foregroundImageHeight || (null === (y = o2.foreground) || void 0 === y || null === (w = y.image) || void 0 === w ? void 0 : w.height), foregroundImageX: o2.foregroundImageX || (null === (I = o2.foreground) || void 0 === I || null === (B = I.image) || void 0 === B ? void 0 : B.x), foregroundImageY: o2.foregroundImageY || (null === (S = o2.foreground) || void 0 === S || null === (P = S.image) || void 0 === P ? void 0 : P.y), foregroundImagePadding: o2.foregroundImagePadding || (null === (L = o2.foreground) || void 0 === L || null === (D = L.image) || void 0 === D ? void 0 : D.padding), foregroundImageBackgroundColor: o2.foregroundImageBackgroundColor || (null === (A = o2.foreground) || void 0 === A || null === (E2 = A.image) || void 0 === E2 ? void 0 : E2.backgroundColor), foregroundImageBorderRadius: o2.foregroundImageBorderRadius || (null === (T = o2.foreground) || void 0 === T || null === (N = T.image) || void 0 === N ? void 0 : N.borderRadius), foregroundImageShadowOffsetX: o2.foregroundImageShadowOffsetX || (null === (M = o2.foreground) || void 0 === M || null === (z = M.image) || void 0 === z ? void 0 : z.shadowOffsetX), foregroundImageShadowOffsetY: o2.foregroundImageShadowOffsetY || (null === (R = o2.foreground) || void 0 === R || null === (_ = R.image) || void 0 === _ ? void 0 : _.shadowOffsetY), foregroundImageShadowBlur: o2.foregroundImageShadowBlur || (null === (O = o2.foreground) || void 0 === O || null === (F = O.image) || void 0 === F ? void 0 : F.shadowBlur), foregroundImageShadowColor: o2.foregroundImageShadowColor || (null === (x = o2.foreground) || void 0 === x || null === (H = x.image) || void 0 === H ? void 0 : H.shadowColor), foregroundPadding: o2.foregroundPadding, positionProbeBackgroundColor: o2.positionProbeBackgroundColor || (null === (X = o2.positionProbe) || void 0 === X ? void 0 : X.backgroundColor) || (null === (Y = o2.positionDetection) || void 0 === Y ? void 0 : Y.backgroundColor), positionProbeForegroundColor: o2.positionProbeForegroundColor || (null === (j = o2.positionProbe) || void 0 === j ? void 0 : j.foregroundColor) || (null === (W = o2.positionDetection) || void 0 === W ? void 0 : W.foregroundColor), separatorColor: o2.separatorColor || (null === (G = o2.separator) || void 0 === G ? void 0 : G.color), positionAdjustBackgroundColor: o2.positionAdjustBackgroundColor || (null === (K = o2.positionAdjust) || void 0 === K ? void 0 : K.backgroundColor) || (null === (Q = o2.alignment) || void 0 === Q ? void 0 : Q.backgroundColor), positionAdjustForegroundColor: o2.positionAdjustForegroundColor || (null === (U = o2.positionAdjust) || void 0 === U ? void 0 : U.foregroundColor) || (null === ($ = o2.alignment) || void 0 === $ ? void 0 : $.foregroundColor), timingBackgroundColor: o2.timingBackgroundColor || (null === (J = o2.timing) || void 0 === J ? void 0 : J.backgroundColor), timingForegroundColor: o2.timingForegroundColor || (null === (q = o2.timing) || void 0 === q ? void 0 : q.foregroundColor), typeNumberBackgroundColor: o2.typeNumberBackgroundColor || (null === (V = o2.typeNumber) || void 0 === V ? void 0 : V.backgroundColor) || (null === (Z = o2.versionInformation) || void 0 === Z ? void 0 : Z.backgroundColor), typeNumberForegroundColor: o2.typeNumberForegroundColor || (null === (oo = o2.typeNumber) || void 0 === oo ? void 0 : oo.foregroundColor) || (null === (eo = o2.versionInformation) || void 0 === eo ? void 0 : eo.foregroundColor), darkBlockColor: o2.darkBlockColor || (null === (ro = o2.darkBlock) || void 0 === ro ? void 0 : ro.color) }, true));
}, b.prototype.make = function() {
  let { foregroundColor: o2, backgroundColor: r, typeNumber: t, errorCorrectLevel: i, data: n, size: a, margin: d, useDynamicSize: u } = this;
  if (o2 === r)
    throw console.error("[uQRCode]: foregroundColor and backgroundColor cannot be the same!"), new b.Error("foregroundColor and backgroundColor cannot be the same!");
  var s = new e(t, i);
  s.addData(function(o3) {
    o3 = o3.toString();
    for (var e2, r2 = "", t2 = 0; t2 < o3.length; t2++)
      (e2 = o3.charCodeAt(t2)) >= 1 && e2 <= 127 ? r2 += o3.charAt(t2) : e2 > 2047 ? (r2 += String.fromCharCode(224 | e2 >> 12 & 15), r2 += String.fromCharCode(128 | e2 >> 6 & 63), r2 += String.fromCharCode(128 | e2 >> 0 & 63)) : (r2 += String.fromCharCode(192 | e2 >> 6 & 31), r2 += String.fromCharCode(128 | e2 >> 0 & 63));
    return r2;
  }(n)), s.make(), this.base = s, this.typeNumber = s.typeNumber, this.modules = s.modules, this.moduleCount = s.moduleCount, this.dynamicSize = u ? Math.ceil((a - 2 * d) / s.moduleCount) * s.moduleCount + 2 * d : a, function(o3) {
    let { dynamicSize: e2, margin: r2, backgroundColor: t2, backgroundPadding: i2, foregroundColor: n2, foregroundPadding: a2, modules: d2, moduleCount: u2 } = o3, s2 = (e2 - 2 * r2) / u2, g = s2, l = 0;
    i2 > 0 && (l = g * i2 / 2, g -= 2 * l);
    let h = s2, c = 0;
    a2 > 0 && (c = h * a2 / 2, h -= 2 * c);
    for (var m = 0; m < u2; m++)
      for (var f2 = 0; f2 < u2; f2++) {
        var v2 = f2 * s2 + r2, p2 = m * s2 + r2;
        if (d2[m][f2]) {
          var C2 = c, b2 = v2 + c, k = p2 + c, y = h, w = h;
          d2[m][f2] = { type: ["foreground"], color: n2, isBlack: true, isDrawn: false, destX: v2, destY: p2, destWidth: s2, destHeight: s2, x: b2, y: k, width: y, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
        } else
          C2 = l, b2 = v2 + l, k = p2 + l, y = g, w = g, d2[m][f2] = { type: ["background"], color: t2, isBlack: false, isDrawn: false, destX: v2, destY: p2, destWidth: s2, destHeight: s2, x: b2, y: k, width: y, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
      }
  }(this), function(o3) {
    let { modules: e2, moduleCount: r2, positionProbeBackgroundColor: t2, positionProbeForegroundColor: i2 } = o3, n2 = r2 - 7;
    [[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 1], [0, 2, 1], [1, 2, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 0], [6, 2, 1], [0, 3, 1], [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 0], [6, 3, 1], [0, 4, 1], [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0], [6, 4, 1], [0, 5, 1], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 0], [6, 5, 1], [0, 6, 1], [1, 6, 1], [2, 6, 1], [3, 6, 1], [4, 6, 1], [5, 6, 1], [6, 6, 1]].forEach((o4) => {
      var r3 = e2[o4[0]][o4[1]], a2 = e2[o4[0] + n2][o4[1]], d2 = e2[o4[0]][o4[1] + n2];
      d2.type.push("positionProbe"), a2.type.push("positionProbe"), r3.type.push("positionProbe"), r3.color = 1 == o4[2] ? i2 : t2, a2.color = 1 == o4[2] ? i2 : t2, d2.color = 1 == o4[2] ? i2 : t2;
    });
  }(this), function(o3) {
    let { modules: e2, moduleCount: r2, separatorColor: t2 } = o3;
    [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]].forEach((o4) => {
      var i2 = e2[o4[0]][o4[1]], n2 = e2[r2 - o4[0] - 1][o4[1]], a2 = e2[o4[0]][r2 - o4[1] - 1];
      a2.type.push("separator"), n2.type.push("separator"), i2.type.push("separator"), i2.color = t2, n2.color = t2, a2.color = t2;
    });
  }(this), function(o3) {
    let { typeNumber: e2, modules: r2, moduleCount: t2, foregroundColor: i2, backgroundColor: n2, positionAdjustForegroundColor: a2, positionAdjustBackgroundColor: d2, timingForegroundColor: u2, timingBackgroundColor: s2 } = o3;
    const g = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]][e2 - 1];
    if (g) {
      const o4 = [[-2, -2, 1], [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1], [-2, -1, 1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [2, -1, 1], [-2, 0, 1], [-1, 0, 0], [0, 0, 1], [1, 0, 0], [2, 0, 1], [-2, 1, 1], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 1], [-2, 2, 1], [-1, 2, 1], [0, 2, 1], [1, 2, 1], [2, 2, 1]], e3 = g.length;
      for (let l = 0; l < e3; l++)
        for (let h = 0; h < e3; h++) {
          let { x: e4, y: c } = { x: g[l], y: g[h] };
          e4 < 9 && c < 9 || e4 > t2 - 9 - 1 && c < 9 || c > t2 - 9 - 1 && e4 < 9 || o4.forEach((o5) => {
            var t3 = r2[e4 + o5[0]][c + o5[1]];
            t3.type.push("positionAdjust"), t3.type.includes("timing") ? 1 == o5[2] ? t3.color = a2 == i2 ? u2 : a2 : t3.color = a2 == i2 && d2 == n2 ? s2 : d2 : t3.color = 1 == o5[2] ? a2 : d2;
          });
        }
    }
  }(this), function(o3) {
    let { modules: e2, moduleCount: r2, timingForegroundColor: t2, timingBackgroundColor: i2 } = o3, n2 = r2 - 16;
    for (let o4 = 0; o4 < n2; o4++) {
      var a2 = e2[6][8 + o4], d2 = e2[8 + o4][6];
      a2.type.push("timing"), d2.type.push("timing"), a2.color = 1 & o4 ^ 1 ? t2 : i2, d2.color = 1 & o4 ^ 1 ? t2 : i2;
    }
  }(this), function(o3) {
    let { modules: e2, moduleCount: r2, darkBlockColor: t2 } = o3;
    var i2 = e2[r2 - 7 - 1][8];
    i2.type.push("darkBlock"), i2.color = t2;
  }(this), function(o3) {
    let { typeNumber: e2, modules: r2, moduleCount: t2, typeNumberBackgroundColor: i2, typeNumberForegroundColor: n2 } = o3;
    if (e2 < 7)
      return r2;
    const a2 = [0, 0, 0, 0, 0, 0, 0, "000111110010010100", "001000010110111100", "001001101010011001", "001010010011010011", "001011101111110110", "001100011101100010", "001101100001000111", "001110011000001101", "001111100100101000", "010000101101111000", "010001010001011101", "010010101000010111", "010011010100110010", "010100100110100110", "010101011010000011", "010110100011001001", "010111011111101100", "011000111011000100", "011001000111100001", "011010111110101011", "011011000010001110", "011100110000011010", "011101001100111111", "011110110101110101", "011111001001010000", "100000100111010101", "100001011011110000", "100010100010111010", "100011011110011111", "100100101100001011", "100101010000101110", "100110101001100100", "100111010101000001", "101000110001101001"];
    let d2 = a2[e2] + a2[e2], u2 = [t2 - 11, t2 - 10, t2 - 9];
    [[5, u2[2]], [5, u2[1]], [5, u2[0]], [4, u2[2]], [4, u2[1]], [4, u2[0]], [3, u2[2]], [3, u2[1]], [3, u2[0]], [2, u2[2]], [2, u2[1]], [2, u2[0]], [1, u2[2]], [1, u2[1]], [1, u2[0]], [0, u2[2]], [0, u2[1]], [0, u2[0]], [u2[2], 5], [u2[1], 5], [u2[0], 5], [u2[2], 4], [u2[1], 4], [u2[0], 4], [u2[2], 3], [u2[1], 3], [u2[0], 3], [u2[2], 2], [u2[1], 2], [u2[0], 2], [u2[2], 1], [u2[1], 1], [u2[0], 1], [u2[2], 0], [u2[1], 0], [u2[0], 0]].forEach((o4, e3) => {
      var t3 = r2[o4[0]][o4[1]];
      t3.type.push("typeNumber"), t3.color = "1" == d2[e3] ? n2 : i2;
    });
  }(this), this.isMaked = true, this.drawModules = [];
}, b.prototype.getDrawModules = function() {
  if (this.drawModules && this.drawModules.length > 0)
    return this.drawModules;
  let o2 = this.drawModules = [], { modules: e2, moduleCount: r, dynamicSize: t, areaColor: i, backgroundImageSrc: n, backgroundImageX: a, backgroundImageY: d, backgroundImageWidth: u, backgroundImageHeight: s, backgroundImageAlpha: g, backgroundImageBorderRadius: l, foregroundImageSrc: h, foregroundImageX: c, foregroundImageY: m, foregroundImageWidth: f2, foregroundImageHeight: v2, foregroundImagePadding: p2, foregroundImageBackgroundColor: C2, foregroundImageBorderRadius: b2, foregroundImageShadowOffsetX: k, foregroundImageShadowOffsetY: y, foregroundImageShadowBlur: w, foregroundImageShadowColor: I } = this;
  i && o2.push({ name: "area", type: "area", color: i, x: 0, y: 0, width: t, height: t }), n && o2.push({ name: "backgroundImage", type: "image", imageSrc: n, mappingName: "backgroundImageSrc", x: a, y: d, width: u, height: s, alpha: g, borderRadius: l });
  for (var B = 0; B < r; B++)
    for (var S = 0; S < r; S++) {
      var P = e2[B][S];
      P.isDrawn || (P.type.includes("foreground") ? o2.push({ name: "foreground", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }) : o2.push({ name: "background", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }), P.isDrawn = true);
    }
  return h && o2.push({ name: "foregroundImage", type: "image", imageSrc: h, mappingName: "foregroundImageSrc", x: c, y: m, width: f2, height: v2, padding: p2, backgroundColor: C2, borderRadius: b2, shadowOffsetX: k, shadowOffsetY: y, shadowBlur: w, shadowColor: I }), o2;
}, b.prototype.isBlack = function(o2, e2) {
  var r = this.moduleCount;
  return !(0 > o2 || 0 > e2 || o2 >= r || e2 >= r) && this.modules[o2][e2].isBlack;
}, b.prototype.drawCanvas = function() {
  let { isMaked: o2, canvasContext: e2, useDynamicSize: r, dynamicSize: t, foregroundColor: i, foregroundPadding: n, backgroundColor: a, backgroundPadding: d, drawReserve: u, margin: s } = this;
  if (!o2)
    return console.error("[uQRCode]: please execute the make method first!"), Promise.reject(new b.Error("please execute the make method first!"));
  let g = this.getDrawModules(), l = (o3, r2) => __async(this, null, function* () {
    try {
      e2.clearRect(0, 0, t, t), e2.draw(false);
      for (var i2 = 0; i2 < g.length; i2++) {
        var n2 = g[i2];
        switch (e2.save(), n2.type) {
          case "area":
            e2.setFillStyle(n2.color), e2.fillRect(n2.x, n2.y, n2.width, n2.height);
            break;
          case "tile":
            var a2 = n2.x, d2 = n2.y, s2 = n2.width, l2 = n2.height;
            e2.setFillStyle(n2.color), e2.fillRect(a2, d2, s2, l2);
            break;
          case "image":
            if ("backgroundImage" === n2.name) {
              a2 = Math.round(n2.x), d2 = Math.round(n2.y), s2 = Math.round(n2.width), l2 = Math.round(n2.height);
              s2 < 2 * (c = Math.round(n2.borderRadius)) && (c = s2 / 2), l2 < 2 * c && (c = l2 / 2), e2.setGlobalAlpha(n2.alpha), c > 0 && (e2.beginPath(), e2.moveTo(a2 + c, d2), e2.arcTo(a2 + s2, d2, a2 + s2, d2 + l2, c), e2.arcTo(a2 + s2, d2 + l2, a2, d2 + l2, c), e2.arcTo(a2, d2 + l2, a2, d2, c), e2.arcTo(a2, d2, a2 + s2, d2, c), e2.closePath(), e2.setStrokeStyle("rgba(0,0,0,0)"), e2.stroke(), e2.clip());
              try {
                var h = yield this.loadImage(n2.imageSrc);
                e2.drawImage(h, a2, d2, s2, l2);
              } catch (o4) {
                throw console.error(`[uQRCode]: ${n2.mappingName} invalid!`), new b.Error(`${n2.mappingName} invalid!`);
              }
            } else if ("foregroundImage" === n2.name) {
              a2 = Math.round(n2.x), d2 = Math.round(n2.y), s2 = Math.round(n2.width), l2 = Math.round(n2.height);
              var c, m = Math.round(n2.padding);
              s2 < 2 * (c = Math.round(n2.borderRadius)) && (c = s2 / 2), l2 < 2 * c && (c = l2 / 2);
              var f2 = a2 - m, v2 = d2 - m, p2 = s2 + 2 * m, C2 = l2 + 2 * m, k = Math.round(p2 / s2 * c);
              p2 < 2 * k && (k = p2 / 2), C2 < 2 * k && (k = C2 / 2), e2.save(), e2.setShadow(n2.shadowOffsetX, n2.shadowOffsetY, n2.shadowBlur, n2.shadowColor), k > 0 ? (e2.beginPath(), e2.moveTo(f2 + k, v2), e2.arcTo(f2 + p2, v2, f2 + p2, v2 + C2, k), e2.arcTo(f2 + p2, v2 + C2, f2, v2 + C2, k), e2.arcTo(f2, v2 + C2, f2, v2, k), e2.arcTo(f2, v2, f2 + p2, v2, k), e2.closePath(), e2.setFillStyle(n2.backgroundColor), e2.fill()) : (e2.setFillStyle(n2.backgroundColor), e2.fillRect(f2, v2, p2, C2)), e2.restore(), e2.save(), k > 0 ? (e2.beginPath(), e2.moveTo(f2 + k, v2), e2.arcTo(f2 + p2, v2, f2 + p2, v2 + C2, k), e2.arcTo(f2 + p2, v2 + C2, f2, v2 + C2, k), e2.arcTo(f2, v2 + C2, f2, v2, k), e2.arcTo(f2, v2, f2 + p2, v2, k), e2.closePath(), e2.setFillStyle(m > 0 ? n2.backgroundColor : "rgba(0,0,0,0)"), e2.fill()) : (e2.setFillStyle(m > 0 ? n2.backgroundColor : "rgba(0,0,0,0)"), e2.fillRect(f2, v2, p2, C2)), e2.restore(), c > 0 && (e2.beginPath(), e2.moveTo(a2 + c, d2), e2.arcTo(a2 + s2, d2, a2 + s2, d2 + l2, c), e2.arcTo(a2 + s2, d2 + l2, a2, d2 + l2, c), e2.arcTo(a2, d2 + l2, a2, d2, c), e2.arcTo(a2, d2, a2 + s2, d2, c), e2.closePath(), e2.setStrokeStyle("rgba(0,0,0,0)"), e2.stroke(), e2.clip());
              try {
                h = yield this.loadImage(n2.imageSrc);
                e2.drawImage(h, a2, d2, s2, l2);
              } catch (o4) {
                throw console.error(`[uQRCode]: ${n2.mappingName} invalid!`), new b.Error(`${n2.mappingName} invalid!`);
              }
            }
        }
        u && e2.draw(true), e2.restore();
      }
      e2.draw(true), setTimeout(o3, 150);
    } catch (o4) {
      if (!(o4 instanceof b.Error))
        throw o4;
      r2(o4);
    }
  });
  return new Promise((o3, e3) => {
    l(o3, e3);
  });
}, b.prototype.draw = function() {
  return this.drawCanvas();
}, b.prototype.register = function(o2) {
  o2 && o2(b, this, true);
};
function Queue() {
  let waitingQueue = this.waitingQueue = [];
  let isRunning = this.isRunning = false;
  function execute(task, resolve2, reject) {
    task().then((data) => {
      resolve2(data);
    }).catch((e2) => {
      reject(e2);
    }).finally(() => {
      if (waitingQueue.length) {
        const next = waitingQueue.shift();
        execute(next.task, next.resolve, next.reject);
      } else {
        isRunning = false;
      }
    });
  }
  this.exec = function(task) {
    return new Promise((resolve2, reject) => {
      if (isRunning) {
        waitingQueue.push({
          task,
          resolve: resolve2,
          reject
        });
      } else {
        isRunning = true;
        execute(task, resolve2, reject);
      }
    });
  };
}
const queueDraw = new Queue();
const queueLoadImage = new Queue();
const cacheImageList = [];
const props$b = {
  props: __spreadValues({
    // radio的名称
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: ""
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: ""
    },
    // 是否禁止点击提示语选中单选框
    labelDisabled: {
      type: [String, Boolean],
      default: ""
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: ""
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: ""
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: ""
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: ""
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: ""
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ""
    },
    // label的颜色
    labelColor: {
      type: String,
      default: ""
    }
  }, (_J = (_I = index$1.$uv) == null ? void 0 : _I.props) == null ? void 0 : _J.radio)
};
const props$a = {
  props: __spreadValues({
    // 绑定的值
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 是否禁用全部radio
    disabled: {
      type: Boolean,
      default: false
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "circle"
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    // 标识符
    name: {
      type: String,
      default: ""
    },
    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: 18
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: "row"
    },
    // label的文本
    label: {
      type: [String],
      default: ""
    },
    // label的颜色 （默认 '#303133' ）
    labelColor: {
      type: [String],
      default: "#303133"
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: 14
    },
    // 是否禁止点击文本操作checkbox(默认 false )
    labelDisabled: {
      type: Boolean,
      default: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: "#fff"
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: 12
    },
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: false
    },
    // 图标与文字的对齐方式
    iconPlacement: {
      type: String,
      default: "left"
    }
  }, (_L = (_K = index$1.$uv) == null ? void 0 : _K.props) == null ? void 0 : _L.radioGroup)
};
const props$9 = {
  props: __spreadValues({
    // checkbox的名称
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: ""
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: ""
    },
    // 是否默认选中
    checked: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: ""
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: ""
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: ""
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: ""
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ""
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: ""
    },
    // label的颜色
    labelColor: {
      type: String,
      default: ""
    },
    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: ""
    }
  }, (_N = (_M = index$1.$uv) == null ? void 0 : _M.props) == null ? void 0 : _N.checkbox)
};
const props$8 = {
  props: __spreadValues({
    // 绑定的值
    value: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    // 标识符
    name: {
      type: String,
      default: ""
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "square"
    },
    // 是否禁用全部checkbox
    disabled: {
      type: Boolean,
      default: false
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: 18
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: "row"
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: 14
    },
    // label的字体颜色
    labelColor: {
      type: [String],
      default: "#303133"
    },
    // 是否禁止点击文本操作
    labelDisabled: {
      type: Boolean,
      default: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: "#fff"
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: 12
    },
    // 勾选图标的对齐方式，left-左边，right-右边
    iconPlacement: {
      type: String,
      default: "left"
    },
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: false
    }
  }, (_P = (_O = index$1.$uv) == null ? void 0 : _O.props) == null ? void 0 : _P.checkboxGroup)
};
const props$7 = {
  props: __spreadValues({
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 是否打开组件
    show: {
      type: Boolean,
      default: false
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: true
    },
    // 顶部标题
    title: {
      type: String,
      default: ""
    },
    // 展示格式，mode=date为日期选择，mode=time为时间选择，mode=year-month为年月选择，mode=datetime为日期时间选择
    mode: {
      type: String,
      default: "datetime"
    },
    // 可选的最大时间
    maxDate: {
      type: Number,
      // 最大默认值为后10年
      default: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime()
    },
    // 可选的最小时间
    minDate: {
      type: Number,
      // 最小默认值为前10年
      default: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime()
    },
    // 可选的最小小时，仅mode=time有效
    minHour: {
      type: Number,
      default: 0
    },
    // 可选的最大小时，仅mode=time有效
    maxHour: {
      type: Number,
      default: 23
    },
    // 可选的最小分钟，仅mode=time有效
    minMinute: {
      type: Number,
      default: 0
    },
    // 可选的最大分钟，仅mode=time有效
    maxMinute: {
      type: Number,
      default: 59
    },
    // 选项过滤函数
    filter: {
      type: [Function, null],
      default: null
    },
    // 选项格式化函数
    formatter: {
      type: [Function, null],
      default: null
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: false
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: 44
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: "#909193"
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: 5
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否允许点击确认关闭选择器
    closeOnClickConfirm: {
      type: Boolean,
      default: true
    },
    // 是否清空上次选择内容
    clearDate: {
      type: Boolean,
      default: false
    },
    // 圆角
    round: {
      type: [String, Number],
      default: 0
    }
  }, (_R = (_Q = index$1.$uv) == null ? void 0 : _Q.props) == null ? void 0 : _R.datetimePicker)
};
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_dayjs_min = __commonJS({
  "uvuidayjs"(exports2, module2) {
    !function(t, e2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e2();
    }(exports2, function() {
      var t = 1e3, e2 = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o2 = "week", f2 = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e22 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e22[(n2 - 20) % 10] || e22[n2] || e22[0]) + "]";
      } }, m = function(t2, e22, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e22 ? t2 : "" + Array(e22 + 1 - r2.length).join(n2) + t2;
      }, v2 = { s: m, z: function(t2) {
        var e22 = -t2.utcOffset(), n2 = Math.abs(e22), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e22 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e22, n2) {
        if (e22.date() < n2.date())
          return -t2(n2, e22);
        var r2 = 12 * (n2.year() - e22.year()) + (n2.month() - e22.month()), i2 = e22.clone().add(r2, f2), s2 = n2 - i2 < 0, u2 = e22.clone().add(r2 + (s2 ? -1 : 1), f2);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: f2, y: c, w: o2, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p2 = function(t2) {
        return t2 instanceof _;
      }, S = function t2(e22, n2, r2) {
        var i2;
        if (!e22)
          return g;
        if ("string" == typeof e22) {
          var s2 = e22.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e22.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e22.name;
          D[a2] = e22, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, w = function(t2, e22) {
        if (p2(t2))
          return t2.clone();
        var n2 = "object" == typeof e22 ? e22 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, O = v2;
      O.l = S, O.i = p2, O.w = function(t2, e22) {
        return w(t2, { locale: e22.$L, utc: e22.$u, x: e22.$x, $offset: e22.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e22 = t3.date, n2 = t3.utc;
            if (null === e22)
              return /* @__PURE__ */ new Date(NaN);
            if (O.u(e22))
              return /* @__PURE__ */ new Date();
            if (e22 instanceof Date)
              return new Date(e22);
            if ("string" == typeof e22 && !/Z$/i.test(e22)) {
              var r2 = e22.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e22);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e22) {
          var n2 = w(t2);
          return this.startOf(e22) <= n2 && n2 <= this.endOf(e22);
        }, m2.isAfter = function(t2, e22) {
          return w(t2) < this.startOf(e22);
        }, m2.isBefore = function(t2, e22) {
          return this.endOf(e22) < w(t2);
        }, m2.$g = function(t2, e22, n2) {
          return O.u(t2) ? this[e22] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e22) {
          var n2 = this, r2 = !!O.u(e22) || e22, h2 = O.p(t2), l2 = function(t3, e3) {
            var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v22 = "set" + (this.$u ? "UTC" : "");
          switch (h2) {
            case c:
              return r2 ? l2(1, 0) : l2(31, 11);
            case f2:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o2:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v22 + "Hours", 0);
            case u:
              return $2(v22 + "Minutes", 1);
            case s:
              return $2(v22 + "Seconds", 2);
            case i:
              return $2(v22 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e22) {
          var n2, o22 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f2] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o22], $2 = o22 === a ? this.$D + (e22 - this.$W) : e22;
          if (o22 === f2 || o22 === c) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e22) {
          return this.clone().$set(t2, e22);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, h2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = O.p(h2), y2 = function(t2) {
            var e22 = w(l2);
            return O.w(e22.date(e22.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === f2)
            return this.set(f2, this.$M + r2);
          if ($2 === c)
            return this.set(c, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o2)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e2, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e22) {
          return this.add(-1 * t2, e22);
        }, m2.format = function(t2) {
          var e22 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o22 = n2.weekdays, f22 = n2.months, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e22, r2)) || i3[n3].slice(0, s3);
          }, c2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, d2 = n2.meridiem || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f22, 3), MMMM: h2(f22, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o22, 2), ddd: h2(n2.weekdaysShort, this.$W, o22, 3), dddd: o22[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
          return r2.replace(y, function(t3, e3) {
            return e3 || $2[t3] || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e2, v22 = this - M3, g2 = O.m(this, M3);
          return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f2] = g2, $2[h] = g2 / 3, $2[o2] = (v22 - m3) / 6048e5, $2[a] = (v22 - m3) / 864e5, $2[u] = v22 / n, $2[s] = v22 / e2, $2[i] = v22 / t, $2)[y2] || v22, l2 ? g2 : O.a(g2);
        }, m2.daysInMonth = function() {
          return this.endOf(f2).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e22) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = S(t2, e22, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), T = _.prototype;
      return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f2], ["$y", c], ["$D", d]].forEach(function(t2) {
        T[t2[1]] = function(e22) {
          return this.$g(e22, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e22) {
        return t2.$i || (t2(e22, _, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p2, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  }
});
const dayjs = require_dayjs_min();
const props$6 = {
  props: __spreadValues({
    // 是否展示工具条
    show: {
      type: Boolean,
      default: true
    },
    // 是否显示下边框
    showBorder: {
      type: Boolean,
      default: false
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: "#909193"
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    // 标题文字
    title: {
      type: String,
      default: ""
    }
  }, (_T = (_S = index$1.$uv) == null ? void 0 : _S.props) == null ? void 0 : _T.toolbar)
};
const props$5 = {
  props: __spreadValues({
    // 是否显示组件
    show: {
      type: Boolean,
      default: true
    },
    // 颜色
    color: {
      type: String,
      default: "#909193"
    },
    // 提示文字颜色
    textColor: {
      type: String,
      default: "#909193"
    },
    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: false
    },
    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: "spinner"
    },
    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: 24
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: 15
    },
    // 文字样式
    textStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 文字内容
    text: {
      type: [String, Number],
      default: ""
    },
    // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
    timingFunction: {
      type: String,
      default: "linear"
    },
    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: 1200
    },
    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: ""
    }
  }, (_V = (_U = index$1.$uv) == null ? void 0 : _U.props) == null ? void 0 : _V.loadingIcon)
};
const props$4 = {
  props: __spreadValues({
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: false
    },
    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: 10070
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: 300
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: 0.5
    }
  }, (_X = (_W = index$1.$uv) == null ? void 0 : _W.props) == null ? void 0 : _X.overlay)
};
const props$3 = {
  props: {
    bgColor: {
      type: String,
      default: "transparent"
    }
  }
};
const value = {
  computed: {
    // 经处理后需要显示的值
    value() {
      const {
        text,
        mode,
        format: format2,
        href
      } = this;
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(text)) {
          error("金额模式下，text参数需要为金额格式");
        }
        if (func(format2)) {
          return format2(text);
        }
        return priceFormat(text, 2);
      }
      if (mode === "date") {
        !date(text) && error("日期模式下，text参数需要为日期或时间戳格式");
        if (func(format2)) {
          return format2(text);
        }
        if (format2) {
          return timeFormat(text, format2);
        }
        return timeFormat(text, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (func(format2)) {
          return format2(text);
        }
        if (format2 === "encrypt") {
          return `${text.substr(0, 3)}****${text.substr(7)}`;
        }
        return text;
      }
      if (mode === "name") {
        !(typeof text === "string") && error("姓名模式下，text参数需要为字符串格式");
        if (func(format2)) {
          return format2(text);
        }
        if (format2 === "encrypt") {
          return this.formatName(text);
        }
        return text;
      }
      if (mode === "link") {
        !url(href) && error("超链接模式下，href参数需要为URL格式");
        return text;
      }
      return text;
    }
  },
  methods: {
    // 默认的姓名脱敏规则
    formatName(name) {
      let value2 = "";
      if (name.length === 2) {
        value2 = name.substr(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value2 = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value2 = name;
      }
      return value2;
    }
  }
};
const props$2 = {
  props: __spreadValues({
    // 主题颜色
    type: {
      type: String,
      default: ""
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 显示的值
    text: {
      type: [String, Number],
      default: ""
    },
    // 前置图标
    prefixIcon: {
      type: String,
      default: ""
    },
    // 后置图标
    suffixIcon: {
      type: String,
      default: ""
    },
    // 文本处理的匹配模式
    // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
    mode: {
      type: String,
      default: ""
    },
    // mode=link下，配置的链接
    href: {
      type: String,
      default: ""
    },
    // 格式化规则
    format: {
      type: [String, Function],
      default: ""
    },
    // mode=phone时，点击文本是否拨打电话
    call: {
      type: Boolean,
      default: true
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: ""
    },
    // 是否粗体，默认normal
    bold: {
      type: Boolean,
      default: false
    },
    // 是否块状
    block: {
      type: Boolean,
      default: false
    },
    // 文本显示的行数，如果设置，超出此行数，将会显示省略号
    lines: {
      type: [String, Number],
      default: ""
    },
    // 文本颜色
    color: {
      type: String,
      default: "#303133"
    },
    // 字体大小
    size: {
      type: [String, Number],
      default: 15
    },
    // 图标的样式
    iconStyle: {
      type: [Object, String],
      default: () => ({
        fontSize: "15px"
      })
    },
    // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
    decoration: {
      type: String,
      default: "none"
    },
    // 外边距，对象、字符串，数值形式均可
    margin: {
      type: [Object, String, Number],
      default: 0
    },
    // 文本行高
    lineHeight: {
      type: [String, Number],
      default: ""
    },
    // 文本对齐方式，可选值left|center|right
    align: {
      type: String,
      default: "left"
    },
    // 文字换行，可选值break-word|normal|anywhere
    wordWrap: {
      type: String,
      default: "normal"
    }
  }, (_Z = (_Y = index$1.$uv) == null ? void 0 : _Y.props) == null ? void 0 : _Z.text)
};
function pickExclude(obj, keys) {
  if (!["[object Object]", "[object File]"].includes(Object.prototype.toString.call(obj))) {
    return {};
  }
  return Object.keys(obj).reduce((prev, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
function formatImage(res) {
  return res.tempFiles.map((item) => __spreadProps(__spreadValues({}, pickExclude(item, ["path"])), {
    type: "image",
    url: item.path,
    thumb: item.path,
    size: item.size
  }));
}
function formatVideo(res) {
  return [
    __spreadProps(__spreadValues({}, pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"])), {
      type: "video",
      url: res.tempFilePath,
      thumb: res.thumbTempFilePath,
      size: res.size
    })
  ];
}
function formatMedia(res) {
  return res.tempFiles.map((item) => __spreadProps(__spreadValues({}, pickExclude(item, ["fileType", "thumbTempFilePath", "tempFilePath"])), {
    type: res.type,
    url: item.tempFilePath,
    thumb: res.type === "video" ? item.thumbTempFilePath : item.tempFilePath,
    size: item.size
  }));
}
function formatFile(res) {
  return res.tempFiles.map((item) => __spreadProps(__spreadValues({}, pickExclude(item, ["path"])), {
    url: item.path,
    size: item.size
  }));
}
function chooseFile({
  accept,
  multiple,
  capture,
  compressed,
  maxDuration,
  sizeType,
  camera,
  maxCount
}) {
  return new Promise((resolve2, reject) => {
    switch (accept) {
      case "image":
        index$1.chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType,
          success: (res) => resolve2(formatImage(res)),
          fail: reject
        });
        break;
      case "media":
        wx$1.chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          maxDuration,
          sizeType,
          camera,
          success: (res) => resolve2(formatMedia(res)),
          fail: reject
        });
        break;
      case "video":
        index$1.chooseVideo({
          sourceType: capture,
          compressed,
          maxDuration,
          camera,
          success: (res) => resolve2(formatVideo(res)),
          fail: reject
        });
        break;
      case "file":
        wx$1.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: (res) => resolve2(formatFile(res)),
          fail: reject
        });
        break;
      default:
        wx$1.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: "all",
          success: (res) => resolve2(formatFile(res)),
          fail: reject
        });
    }
  });
}
const mixin_accept = {
  watch: {
    // 监听accept的变化，判断是否符合个平台要求
    // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
    accept: {
      immediate: true,
      handler(val) {
      }
    }
  }
};
const props$1 = {
  props: __spreadValues({
    // 接受的文件类型, 可选值为all media image file video
    accept: {
      type: String,
      default: "image"
    },
    // 	图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
    capture: {
      type: [String, Array],
      default: () => ["album", "camera"]
    },
    // 当accept为video时生效，是否压缩视频，默认为true
    compressed: {
      type: Boolean,
      default: true
    },
    // 当accept为video时生效，可选值为back或front
    camera: {
      type: String,
      default: "back"
    },
    // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
    maxDuration: {
      type: Number,
      default: 60
    },
    // 上传区域的图标，只能内置图标
    uploadIcon: {
      type: String,
      default: "camera-fill"
    },
    // 上传区域的图标的颜色，默认
    uploadIconColor: {
      type: String,
      default: "#D3D4D6"
    },
    // 是否开启文件读取前事件
    useBeforeRead: {
      type: Boolean,
      default: false
    },
    // 读取后的处理函数
    afterRead: {
      type: Function,
      default: null
    },
    // 读取前的处理函数
    beforeRead: {
      type: Function,
      default: null
    },
    // 是否开启图片预览功能
    previewFullImage: {
      type: Boolean,
      default: true
    },
    // 是否开启视频预览功能
    previewFullVideo: {
      type: Boolean,
      default: true
    },
    // 最大上传数量
    maxCount: {
      type: [String, Number],
      default: 52
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 预览上传的图片时的裁剪模式，和image组件mode属性一致
    imageMode: {
      type: String,
      default: "aspectFill"
    },
    // 标识符，可以在回调函数的第二项参数中获取
    name: {
      type: String,
      default: ""
    },
    // 所选的图片的尺寸, 可选值为original compressed
    sizeType: {
      type: Array,
      default: () => ["original", "compressed"]
    },
    // 是否开启图片多选，部分安卓机型不支持
    multiple: {
      type: Boolean,
      default: false
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: true
    },
    // 文件大小限制，单位为byte
    maxSize: {
      type: [String, Number],
      default: Number.MAX_VALUE
    },
    // 显示已上传的文件列表
    fileList: {
      type: Array,
      default: () => []
    },
    // 上传区域的提示文字
    uploadText: {
      type: String,
      default: ""
    },
    // 内部预览图片区域和选择图片按钮的区域宽度
    width: {
      type: [String, Number],
      default: 80
    },
    // 内部预览图片区域和选择图片按钮的区域高度
    height: {
      type: [String, Number],
      default: 80
    },
    // 是否在上传完成后展示预览图
    previewImage: {
      type: Boolean,
      default: true
    }
  }, (_$ = (__ = index$1.$uv) == null ? void 0 : __.props) == null ? void 0 : _$.upload)
};
const props = {
  props: __spreadValues({
    // 文字颜色
    color: {
      type: String,
      default: ""
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 是否显示下划线
    underLine: {
      type: Boolean,
      default: false
    },
    // 要跳转的链接
    href: {
      type: String,
      default: ""
    },
    // 小程序中复制到粘贴板的提示语
    mpTips: {
      type: String,
      default: "链接已复制，请在浏览器打开"
    },
    // 下划线颜色
    lineColor: {
      type: String,
      default: ""
    },
    // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
    text: {
      type: String,
      default: ""
    }
  }, (_ba = (_aa = index$1.$uv) == null ? void 0 : _aa.props) == null ? void 0 : _ba.link)
};
exports.Pinia = Pinia;
exports.Schema = Schema;
exports._export_sfc = _export_sfc;
exports.array = array;
exports.b = b;
exports.button = button;
exports.cacheImageList = cacheImageList;
exports.chooseFile = chooseFile;
exports.colorGradient = colorGradient;
exports.createAnimation = createAnimation;
exports.createPinia = createPinia;
exports.createSSRApp = createSSRApp;
exports.dayjs = dayjs;
exports.defineStore = defineStore;
exports.e = e$1;
exports.f = f$1;
exports.func = func;
exports.icons = icons;
exports.image = image;
exports.index = index$1;
exports.initVueI18n = initVueI18n;
exports.isSameSecond = isSameSecond;
exports.m = m$1;
exports.mixin = mixin;
exports.mixin_accept = mixin_accept;
exports.mpMixin = mpMixin;
exports.n = n$1;
exports.o = o$1;
exports.openType = openType;
exports.p = p$1;
exports.parseFormat = parseFormat;
exports.parseTimeData = parseTimeData;
exports.promise = promise;
exports.props = props$h;
exports.props$1 = props$g;
exports.props$10 = props$j;
exports.props$11 = props$i;
exports.props$12 = props$d;
exports.props$13 = props$5;
exports.props$14 = props$f;
exports.props$15 = props$e;
exports.props$16 = props$c;
exports.props$17 = props$b;
exports.props$18 = props$a;
exports.props$19 = props$9;
exports.props$2 = props$r;
exports.props$20 = props$8;
exports.props$21 = props$7;
exports.props$22 = props$6;
exports.props$23 = props$4;
exports.props$24 = props$3;
exports.props$25 = props$2;
exports.props$26 = props$1;
exports.props$27 = props;
exports.props$3 = props$p;
exports.props$4 = props$q;
exports.props$5 = props$o;
exports.props$6 = props$n;
exports.props$7 = props$m;
exports.props$8 = props$l;
exports.props$9 = props$k;
exports.queueDraw = queueDraw;
exports.queueLoadImage = queueLoadImage;
exports.r = r$1;
exports.resolveComponent = resolveComponent;
exports.s = s$1;
exports.sr = sr;
exports.t = t$1;
exports.throttle = throttle;
exports.toRaw = toRaw;
exports.useCssVars = useCssVars;
exports.uvUi = uvUi;
exports.value = value;
exports.video = video;
exports.wx$1 = wx$1;
