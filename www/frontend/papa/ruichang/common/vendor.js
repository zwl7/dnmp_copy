"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
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
var _e, _f, _g, _h, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka;
function makeMap$1(str, expectsLowerCase) {
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
const hasOwnProperty$a = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$a.call(val, key);
const isArray$3 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$3 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$6 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return (isObject$6(val) || isFunction$3(val)) && isFunction$3(val.then) && isFunction$3(val.catch);
};
const objectToString$3 = Object.prototype.toString;
const toTypeString = (value2) => objectToString$3.call(value2);
const toRawType = (value2) => {
  return toTypeString(value2).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap$1(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap$1(
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
  return str.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s2 = str ? `on${capitalize(str)}` : ``;
  return s2;
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
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value2) {
  if (isArray$3(value2)) {
    const res = {};
    for (let i = 0; i < value2.length; i++) {
      const item = value2[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value2) || isObject$6(value2)) {
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
  if (isString$1(value2)) {
    res = value2;
  } else if (isArray$3(value2)) {
    for (let i = 0; i < value2.length; i++) {
      const normalized = normalizeClass(value2[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$6(value2)) {
    for (const name in value2) {
      if (value2[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$3(val) || isObject$6(val) && (val.toString === objectToString$3 || !isFunction$3(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
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
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol$1(val)) {
    return stringifySymbol(val);
  } else if (isObject$6(val) && !isArray$3(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
const isObject$5 = (val) => val !== null && typeof val === "object";
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
      tokens = parse$2(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile$1(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse$2(format2, [startDelimiter, endDelimiter]) {
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
function compile$1(tokens, values) {
  const compiled = [];
  let index2 = 0;
  const mode = Array.isArray(values) ? "list" : isObject$5(values) ? "named" : "unknown";
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
const hasOwnProperty$9 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$9.call(val, key);
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
  let t2 = (key, values) => {
    if (typeof getApp !== "function") {
      t2 = function(key2, values2) {
        return i18n.t(key2, values2);
      };
    } else {
      let isWatchedAppLocale = false;
      t2 = function(key2, values2) {
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
    return t2(key, values);
  };
  return {
    i18n,
    f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t(key, values) {
      return t2(key, values);
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
  if (!isString$1(path)) {
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
const encode$2 = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode$2) {
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
  if (checkType && !isFunction$3(value2)) {
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
  if (isFunction$3(app._component.onError)) {
    return createErrorHandler2(app);
  }
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
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn$1(data, key));
    if (isString$1(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray$3(protocol)) {
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
function validateProp$1(name, value2, prop, isAbsent) {
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
    const types2 = isArray$3(type2) ? type2 : [type2];
    const expectedTypes = [];
    for (let i = 0; i < types2.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value2, types2[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value2, expectedTypes);
    }
  }
  if (validator) {
    return validator(value2);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap$1("String,Number,Boolean,Function,Symbol");
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
    valid = isObject$6(value2);
  } else if (expectedType === "Array") {
    valid = isArray$3(value2);
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
function getInvalidTypeMessage$1(name, value2, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
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
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
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
    if (isFunction$3(fn)) {
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
  const hasSuccess = isFunction$3(success);
  const hasFail = isFunction$3(fail);
  const hasComplete = isFunction$3(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction$3(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction$3(beforeSuccess) && beforeSuccess(res, args);
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
function queue$2(hooks, data, params) {
  let promise2 = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise2) {
      promise2 = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise$1(res)) {
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
    if (!isArray$3(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$2(hooks, res, options).then((res2) => {
        return isFunction$3(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method3, returnValue) {
  const returnValueHooks = [];
  if (isArray$3(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor2 = scopedInterceptors[method3];
  if (interceptor2 && isArray$3(interceptor2.returnValue)) {
    returnValueHooks.push(...interceptor2.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method3) {
  const interceptor2 = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor2[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method3];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor2[hook] = (interceptor2[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor2;
}
function invokeApi(method3, api, options, params) {
  const interceptor2 = getApiInterceptorHooks(method3);
  if (interceptor2 && Object.keys(interceptor2).length) {
    if (isArray$3(interceptor2.invoke)) {
      const res = queue$2(interceptor2.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method3), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor2, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject$2(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction$3(args[cb]))) {
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
  if (!errMsg || isString$1(errMsg)) {
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
  const { platform: platform2, pixelRatio, windowWidth: windowWidth2 } = getBaseSystemInfo();
  deviceWidth = windowWidth2;
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
function mergeInterceptorHook(interceptors2, interceptor2) {
  Object.keys(interceptor2).forEach((hook) => {
    if (isFunction$3(interceptor2[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor2[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor2) {
  if (!interceptors2 || !interceptor2) {
    return;
  }
  Object.keys(interceptor2).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor2[name];
    if (isArray$3(hooks) && isFunction$3(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$3(childVal) ? childVal : [childVal] : parentVal;
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
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method3, interceptor2) => {
  if (isString$1(method3) && isPlainObject$2(interceptor2)) {
    mergeInterceptorHook(scopedInterceptors[method3] || (scopedInterceptors[method3] = {}), interceptor2);
  } else if (isPlainObject$2(method3)) {
    mergeInterceptorHook(globalInterceptors, method3);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method3, interceptor2) => {
  if (isString$1(method3)) {
    if (isPlainObject$2(interceptor2)) {
      removeInterceptorHook(scopedInterceptors[method3], interceptor2);
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
  if (!isArray$3(name))
    name = name ? [name] : [];
  name.forEach((n2) => eventBus.off(n2, callback));
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
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
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
  if (!isFunction$3(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction$3(options.success) || isFunction$3(options.fail) || isFunction$3(options.complete)) {
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
      if (isFunction$3(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn$1(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction$3(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key}`);
          } else if (isString$1(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject$2(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction$3(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn$1(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction$3(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction$3(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper(methodName, method3) {
    if (!hasOwn$1(protocols2, methodName)) {
      return method3;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction$3(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = isFunction$3(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale) => {
  const app = isFunction$3(getApp) && getApp();
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
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system: system2 = "", language: language2 = "", theme, version: version2, platform: platform2, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system2.split(" ")[0] || "";
    osVersion = system2.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language2.replace(/_/g, "-");
  const parameters = {
    appId: "",
    appName: "瑞昌市社会体育指导员服务平台",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.32",
    uniCompilerVersion: "4.32",
    uniRuntimeVersion: "4.32",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
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
    if (!isArray$3(urls)) {
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
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language: language2, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language2.replace(/_/g, "-");
    toRes = sortObject(extend(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "",
      appName: "瑞昌市社会体育指导员服务平台",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      isUniAppX: false,
      uniPlatform: "mp-weixin",
      uniCompileVersion: "4.32",
      uniCompilerVersion: "4.32"
    }));
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
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
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
  invokePushCallback
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
      isFunction$3(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction$3(fail) && fail(res);
    }
    isFunction$3(complete) && complete(res);
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
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
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
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
);
function toRaw$1(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw$1(raw) : observed;
}
function isRef$1(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack$1 = [];
function pushWarningContext$1(vnode) {
  stack$1.push(vnode);
}
function popWarningContext$1() {
  stack$1.pop();
}
function warn$1$1(msg, ...args) {
  const instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace$1();
  if (appWarnHandler) {
    callWithErrorHandling$1(
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
          ({ vnode }) => `at <${formatComponentName$1(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace$1(trace));
    }
    console.warn(...warnArgs);
  }
}
function getComponentTrace$1() {
  let currentVNode = stack$1[stack$1.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last2 = normalizedStack[0];
    if (last2 && last2.vnode === currentVNode) {
      last2.recurseCount++;
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
function formatTrace$1(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry$1(entry));
  });
  return logs;
}
function formatTraceEntry$1({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName$1(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps$1(vnode.props), close] : [open + close];
}
function formatProps$1(props2) {
  const res = [];
  const keys = Object.keys(props2);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp$1(key, props2[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp$1(key, value2, raw) {
  if (isString$1(value2)) {
    value2 = JSON.stringify(value2);
    return raw ? value2 : [`${key}=${value2}`];
  } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
    return raw ? value2 : [`${key}=${value2}`];
  } else if (isRef$1(value2)) {
    value2 = formatProp$1(key, toRaw$1(value2.value), true);
    return raw ? value2 : [`${key}=Ref<`, value2, `>`];
  } else if (isFunction$3(value2)) {
    return [`${key}=fn${value2.name ? `<${value2.name}>` : ``}`];
  } else {
    value2 = toRaw$1(value2);
    return raw ? value2 : [`${key}=`, value2];
  }
}
const ErrorTypeStrings$1 = {
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
function callWithErrorHandling$1(fn, instance, type2, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError$1(err, instance, type2);
  }
}
function handleError$1(err, instance, type2, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings$1[type2];
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
      callWithErrorHandling$1(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError$1(err, type2, contextVNode, throwInDev);
}
function logError$1(err, type2, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings$1[type2];
    if (contextVNode) {
      pushWarningContext$1(contextVNode);
    }
    warn$1$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext$1();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
let isFlushing$1 = false;
let isFlushPending$1 = false;
const queue$1 = [];
let flushIndex$1 = 0;
const pendingPostFlushCbs$1 = [];
let activePostFlushCbs$1 = null;
let postFlushIndex$1 = 0;
const resolvedPromise$1 = /* @__PURE__ */ Promise.resolve();
const RECURSION_LIMIT$1 = 100;
function findInsertionIndex$1(id) {
  let start = flushIndex$1 + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue$1[middle];
    const middleJobId = getId$1(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob$1(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing$1 && job.allowRecurse ? flushIndex$1 + 1 : flushIndex$1
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex$1(job.id), 0, job);
    }
    queueFlush$1();
  }
}
function queueFlush$1() {
  if (!isFlushing$1 && !isFlushPending$1) {
    isFlushPending$1 = true;
    resolvedPromise$1.then(flushJobs$1);
  }
}
function queuePostFlushCb$1(cb) {
  if (!isArray$3(cb)) {
    if (!activePostFlushCbs$1 || !activePostFlushCbs$1.includes(
      cb,
      cb.allowRecurse ? postFlushIndex$1 + 1 : postFlushIndex$1
    )) {
      pendingPostFlushCbs$1.push(cb);
    }
  } else {
    pendingPostFlushCbs$1.push(...cb);
  }
  queueFlush$1();
}
function flushPostFlushCbs$1(seen) {
  if (pendingPostFlushCbs$1.length) {
    const deduped = [...new Set(pendingPostFlushCbs$1)].sort(
      (a, b) => getId$1(a) - getId$1(b)
    );
    pendingPostFlushCbs$1.length = 0;
    if (activePostFlushCbs$1) {
      activePostFlushCbs$1.push(...deduped);
      return;
    }
    activePostFlushCbs$1 = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex$1 = 0; postFlushIndex$1 < activePostFlushCbs$1.length; postFlushIndex$1++) {
      if (checkRecursiveUpdates$1(seen, activePostFlushCbs$1[postFlushIndex$1])) {
        continue;
      }
      activePostFlushCbs$1[postFlushIndex$1]();
    }
    activePostFlushCbs$1 = null;
    postFlushIndex$1 = 0;
  }
}
const getId$1 = (job) => job.id == null ? Infinity : job.id;
const comparator$1 = (a, b) => {
  const diff2 = getId$1(a) - getId$1(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs$1(seen) {
  isFlushPending$1 = false;
  isFlushing$1 = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue$1.sort(comparator$1);
  const check = (job) => checkRecursiveUpdates$1(seen, job);
  try {
    for (flushIndex$1 = 0; flushIndex$1 < queue$1.length; flushIndex$1++) {
      const job = queue$1[flushIndex$1];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling$1(job, null, 14);
      }
    }
  } finally {
    flushIndex$1 = 0;
    queue$1.length = 0;
    flushPostFlushCbs$1(seen);
    isFlushing$1 = false;
    if (queue$1.length || pendingPostFlushCbs$1.length) {
      flushJobs$1(seen);
    }
  }
}
function checkRecursiveUpdates$1(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT$1) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName$1(instance.type);
      handleError$1(
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
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent$1(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    instance.effect.dirty = true;
    instance.update();
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob$1(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb$1(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e2) {
      console.error(e2);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1)
        setters.forEach((set2) => set2(v));
      else
        setters[0](v);
    };
  };
  registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => v
  );
  registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup$1 = v
  );
}
let isInSSRComponentSetup$1 = false;
const classifyRE$1 = /(?:^|[-_])(\w)/g;
const classify$1 = (str) => str.replace(classifyRE$1, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName$1(Component2, includeInferred = true) {
  return isFunction$3(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName$1(instance, Component2, isRoot = false) {
  let name = getComponentName$1(Component2);
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
  return name ? classify$1(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent$1(value2) {
  return isFunction$3(value2) && "__vccOpts" in value2;
}
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
        const last2 = this.parent.scopes.pop();
        if (last2 && last2 !== this) {
          this.parent.scopes[this.index] = last2;
          last2.index = this.index;
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
class ReactiveEffect2 {
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
  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
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
  const last2 = trackStack.pop();
  shouldTrack = last2 === void 0 ? true : last2;
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
  } else if (key === "length" && isArray$3(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol$1(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type2) {
      case "add":
        if (!isArray$3(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$3(target)) {
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
const isNonTrackableKeys = /* @__PURE__ */ makeMap$1(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
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
function hasOwnProperty$8(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler2 {
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
    const targetIsArray = isArray$3(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$8;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
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
    if (isObject$6(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler2 extends BaseReactiveHandler2 {
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
      if (!isArray$3(target) && isRef(oldValue) && !isRef(value2)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value2;
          return true;
        }
      }
    }
    const hadKey = isArray$3(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
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
    if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$3(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler2 extends BaseReactiveHandler2 {
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
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler2();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler2();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler2(
  true
);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler2(true);
const toShallow = (value2) => value2;
const getProto = (v) => Reflect.getPrototypeOf(v);
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
function has$2(key, isReadonly2 = false) {
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
    has: has$2,
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
    has: has$2,
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
      return has$2.call(this, key, true);
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
      return has$2.call(this, key, true);
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
  if (!isObject$6(target)) {
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
const toReactive = (value2) => isObject$6(value2) ? reactive(value2) : value2;
const toReadonly = (value2) => isObject$6(value2) ? readonly(value2) : value2;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect2(
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
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$3(getterOrOptions);
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
  const ret = isArray$3(object3) ? new Array(object3.length) : {};
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
  } else if (isFunction$3(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$6(source) && arguments.length > 1) {
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
    const last2 = normalizedStack[0];
    if (last2 && last2.vnode === currentVNode) {
      last2.recurseCount++;
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
  if (isString$1(value2)) {
    value2 = JSON.stringify(value2);
    return raw ? value2 : [`${key}=${value2}`];
  } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
    return raw ? value2 : [`${key}=${value2}`];
  } else if (isRef(value2)) {
    value2 = formatProp(key, toRaw(value2.value), true);
    return raw ? value2 : [`${key}=Ref<`, value2, `>`];
  } else if (isFunction$3(value2)) {
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
  if (isFunction$3(fn)) {
    const res = callWithErrorHandling(fn, instance, type2, args);
    if (res && isPromise$1(res)) {
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
const queue = [];
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
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
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
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
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
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$3(cb)) {
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
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
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
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
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
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
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
        if (isFunction$3(validator)) {
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
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
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
  if (!isFunction$3(comp)) {
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
    if (isObject$6(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$3(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$6(comp)) {
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
  if (!isFunction$3(cb)) {
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
  } else if (isArray$3(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction$3(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else {
        warnInvalidSource(s2);
      }
    });
  } else if (isFunction$3(source)) {
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
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
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
  const effect2 = new ReactiveEffect2(getter, NOOP, scheduler);
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
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$3(value2)) {
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
  if (!isObject$6(value2) || value2["__v_skip"]) {
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
  } else if (isArray$3(value2)) {
    for (let i = 0; i < value2.length; i++) {
      traverse(value2[i], depth, currentDepth, seen);
    }
  } else if (isSet(value2) || isMap(value2)) {
    value2.forEach((v) => {
      traverse(v, depth, currentDepth, seen);
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
    if (!isFunction$3(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$6(rootProps)) {
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
      set config(v) {
        {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction$3(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction$3(plugin2)) {
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
      return treatDefaultAsFactory && isFunction$3(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$3(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
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
const createHook$1 = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook$1("bm");
const onMounted = createHook$1("m");
const onBeforeUpdate = createHook$1("bu");
const onUpdated = createHook$1("u");
const onBeforeUnmount = createHook$1("bum");
const onUnmounted = createHook$1("um");
const onServerPrefetch = createHook$1("sp");
const onRenderTriggered = createHook$1(
  "rtg"
);
const onRenderTracked = createHook$1(
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
    } else if (currentRenderingInstance && (!isString$1(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
  return isArray$3(props2) ? props2.reduce(
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
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$3(methodHandler)) {
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
    if (!isFunction$3(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise$1(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject$6(data)) {
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
      const get2 = isFunction$3(opt) ? opt.bind(publicThis, publicThis) : isFunction$3(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction$3(opt) && isFunction$3(opt.set) ? opt.set.bind(publicThis) : () => {
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
        set: (v) => c2.value = v
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
  {
    if (provideOptions) {
      const provides = isFunction$3(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray$3(hook)) {
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
  if (isArray$3(expose)) {
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
  if (isArray$3(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$6(opt)) {
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
        set: (v) => injected.value = v
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
    isArray$3(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type2
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$3(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction$3(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$6(raw)) {
    if (isArray$3(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction$3(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$3(handler)) {
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
  if (isObject$6(base)) {
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
      isFunction$3(to) ? to.call(this, this) : to,
      isFunction$3(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$3(raw)) {
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
    if (isArray$3(to) && isArray$3(from)) {
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
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
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
    !isInHmrContext(instance) && patchFlag > 0 && !(patchFlag & 16)
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
            props2[camelizedKey] = resolvePropValue(
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
            props2[key] = resolvePropValue(
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
      props2[key] = resolvePropValue(
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
function resolvePropValue(options, props2, key, value2, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value2 === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$3(defaultValue)) {
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
  if (!isFunction$3(comp)) {
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
    if (isObject$6(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$3(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString$1(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject$6(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$3(opt) || isFunction$3(opt) ? { type: opt } : extend({}, opt);
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
  if (isObject$6(comp)) {
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
function getType(ctor) {
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
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type2, expectedTypes) {
  if (isArray$3(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type2));
  } else if (isFunction$3(expectedTypes)) {
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
    validateProp(
      key,
      resolvedValues[key],
      opt,
      shallowReadonly(resolvedValues),
      !hasOwn$1(rawProps, key) && !hasOwn$1(rawProps, hyphenate(key))
    );
  }
}
function validateProp(name, value2, prop, props2, isAbsent) {
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
    const types2 = isArray$3(type2) ? type2 : [type2];
    const expectedTypes = [];
    for (let i = 0; i < types2.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value2, types2[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value2, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value2, props2)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap$1(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value2, type2) {
  let valid;
  const expectedType = getType(type2);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value2;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value2 instanceof type2;
    }
  } else if (expectedType === "Object") {
    valid = isObject$6(value2);
  } else if (expectedType === "Array") {
    valid = isArray$3(value2);
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
function getInvalidTypeMessage(name, value2, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
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
function createComponentInstance(vnode, parent2, suspense) {
  const type2 = vnode.type;
  const appContext = (parent2 ? parent2.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type: type2,
    parent: parent2,
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
    provides: parent2 ? parent2.provides : Object.create(appContext.provides),
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
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent2 ? parent2.root : instance;
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
  setInSSRSetupState = (v) => {
    isInSSRComponentSetup = v;
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
const isBuiltInTag = /* @__PURE__ */ makeMap$1("slot,component");
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
    if (isPromise$1(setupResult)) {
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
  if (isFunction$3(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject$6(setupResult)) {
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
let compile;
const isRuntimeOnly = () => !compile;
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
          if (isArray$3(exposed)) {
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
  return isFunction$3(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
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
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
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
    if (isArray$3(src)) {
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
function deepCopy$1(src) {
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
  data = deepCopy$1(data);
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
    ctx: { $scope, $mpPlatform }
  } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
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
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value2) {
  if (isObject$6(value2)) {
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
  if (isFunction$3(r2)) {
    r2(refValue, {});
  } else {
    const _isString = isString$1(r2);
    const _isRef = isRef(r2);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray$3(r2.value)) {
          r2.value = [];
        }
        const existing = r2.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
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
  instance.$templateRefs = [];
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
    const diffPath = isString$1(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
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
      const { next, bu, u: u2 } = instance;
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
      if (u2) {
        queuePostRenderEffect(u2);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect2 = instance.effect = new ReactiveEffect2(
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
  update();
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
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction$3(hook)) {
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
      if (isArray$3(hooks)) {
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
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
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
  const appConfig = app._context.config;
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
function vOn(value2, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq" || ctx.$mpPlatform === "mp-xhs") && (isString$1(key) || typeof key === "number") ? "_" + key : "";
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
      if (e2.type === "input" && (isArray$3(res) || isPromise$1(res))) {
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
function patchMPEvent(event) {
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
  if (isArray$3(value2)) {
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
  if (isArray$3(source) || isString$1(source)) {
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
  } else if (isObject$6(source)) {
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
  const { parent: parent2, isMounted, ctx: { $scope } } = instance;
  const vueIds = ($scope.properties || $scope.props).uI;
  if (!vueIds) {
    return;
  }
  if (!parent2 && !isMounted) {
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
  let parent2 = instance.parent;
  while (parent2) {
    const invokers = parent2.$ssi;
    if (invokers && invokers[vueId]) {
      return invokers[vueId];
    }
    parent2 = parent2.parent;
  }
}
function stringifyStyle(value2) {
  if (isString$1(value2)) {
    return value2;
  }
  return stringify$2(normalizeStyle(value2));
}
function stringify$2(styles) {
  let ret = "";
  if (!styles || isString$1(styles)) {
    return ret;
  }
  for (const key in styles) {
    ret += `${key.startsWith(`--`) ? key : hyphenate(key)}:${styles[key]};`;
  }
  return ret;
}
function setRef(ref2, id, opts = {}) {
  const { $templateRefs } = getCurrentInstance();
  $templateRefs.push({ i: id, r: ref2, k: opts.k, f: opts.f });
}
const o = (value2, key) => vOn(value2, key);
const f = (source, renderItem) => vFor(source, renderItem);
const r = (name, props2, key) => renderSlot(name, props2, key);
const s = (value2) => stringifyStyle(value2);
const e = (target, ...sources) => extend(target, ...sources);
const n = (value2) => normalizeClass(value2);
const t$1 = (val) => toDisplayString(val);
const p = (props2) => renderProps(props2);
const sr = (ref2, id, opts) => setRef(ref2, id, opts);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
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
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray$3(options.slots) && options.slots.length) {
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
  const app = isFunction$3(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray$3(mixins)) {
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
  const { onError } = internalInstance;
  if (onError) {
    internalInstance.appContext.config.errorHandler = (err) => {
      instance.$callHook(ON_ERROR, err);
    };
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
    const app = isFunction$3(getApp) && getApp({
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
  if (isFunction$3(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction$3(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction$3(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
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
  if (!isArray$3(wxsCallMethods)) {
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
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
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
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
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
  if (isArray$3(type2) && type2.length === 1) {
    return type2[0];
  }
  return type2;
}
function normalizePropType(type2, defaultValue) {
  const res = parsePropType(type2);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray$3(rawProps)) {
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
        if (isFunction$3(value2)) {
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
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject$2(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray$3(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
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
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
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
  if (isArray$3(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray$3(vueProps)) {
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
function parseComponent(vueOptions, { parse: parse2, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray$3(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject$6(item.options)) {
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
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
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
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s2 = "minute", u2 = "hour", a = "day", o2 = "week", c2 = "month", f2 = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
      var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
      return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
    } }, m = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, v = { s: m, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, c2), s3 = n3 - i2 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
      return +(-(r3 + (n3 - i2) / (s3 ? i2 - u3 : u3 - i2)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: c2, y: h, w: o2, d: a, D: d, h: u2, m: s2, s: i, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, g = "en", D = {};
    D[g] = M;
    var p2 = "$isDayjsObject", S = function(t3) {
      return t3 instanceof _ || !(!t3 || !t3[p2]);
    }, w = function t3(e3, n3, r3) {
      var i2;
      if (!e3)
        return g;
      if ("string" == typeof e3) {
        var s3 = e3.toLowerCase();
        D[s3] && (i2 = s3), n3 && (D[s3] = n3, i2 = s3);
        var u3 = e3.split("-");
        if (!i2 && u3.length > 1)
          return t3(u3[0]);
      } else {
        var a2 = e3.name;
        D[a2] = e3, i2 = a2;
      }
      return !r3 && i2 && (g = i2), i2 || !r3 && g;
    }, O = function(t3, e3) {
      if (S(t3))
        return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _(n3);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t3, e3) {
      return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _ = function() {
      function M2(t3) {
        this.$L = w(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
      }
      var m2 = M2.prototype;
      return m2.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(e3))
            return /* @__PURE__ */ new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match($);
            if (r3) {
              var i2 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
            }
          }
          return new Date(e3);
        }(t3), this.init();
      }, m2.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t3, e3) {
        var n3 = O(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m2.isAfter = function(t3, e3) {
        return O(t3) < this.startOf(e3);
      }, m2.isBefore = function(t3, e3) {
        return this.endOf(e3) < O(t3);
      }, m2.$g = function(t3, e3, n3) {
        return b.u(t3) ? this[e3] : this.set(n3, t3);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t3, e3) {
        var n3 = this, r3 = !!b.u(e3) || e3, f3 = b.p(t3), l2 = function(t4, e4) {
          var i2 = b.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i2 : i2.endOf(a);
        }, $2 = function(t4, e4) {
          return b.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f3) {
          case h:
            return r3 ? l2(1, 0) : l2(31, 11);
          case c2:
            return r3 ? l2(1, M3) : l2(0, M3 + 1);
          case o2:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u2:
            return $2(v2 + "Minutes", 1);
          case s2:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m2.$set = function(t3, e3) {
        var n3, o3 = b.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n3 = {}, n3[a] = f3 + "Date", n3[d] = f3 + "Date", n3[c2] = f3 + "Month", n3[h] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o3], $2 = o3 === a ? this.$D + (e3 - this.$W) : e3;
        if (o3 === c2 || o3 === h) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m2.get = function(t3) {
        return this[b.p(t3)]();
      }, m2.add = function(r3, f3) {
        var d2, l2 = this;
        r3 = Number(r3);
        var $2 = b.p(f3), y2 = function(t3) {
          var e3 = O(l2);
          return b.w(e3.date(e3.date() + Math.round(t3 * r3)), l2);
        };
        if ($2 === c2)
          return this.set(c2, this.$M + r3);
        if ($2 === h)
          return this.set(h, this.$y + r3);
        if ($2 === a)
          return y2(1);
        if ($2 === o2)
          return y2(7);
        var M3 = (d2 = {}, d2[s2] = e2, d2[u2] = n2, d2[i] = t2, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
        return b.w(m3, this);
      }, m2.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m2.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || l;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s3 = this.$H, u3 = this.$m, a2 = this.$M, o3 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h2 = function(t4, n4, i3, s4) {
          return t4 && (t4[n4] || t4(e3, r3)) || i3[n4].slice(0, s4);
        }, d2 = function(t4) {
          return b.s(s3 % 12 || 12, t4, "0");
        }, $2 = f3 || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(y, function(t4, r4) {
          return r4 || function(t5) {
            switch (t5) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b.s(e3.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b.s(a2 + 1, 2, "0");
              case "MMM":
                return h2(n3.monthsShort, a2, c3, 3);
              case "MMMM":
                return h2(c3, a2);
              case "D":
                return e3.$D;
              case "DD":
                return b.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h2(n3.weekdaysMin, e3.$W, o3, 2);
              case "ddd":
                return h2(n3.weekdaysShort, e3.$W, o3, 3);
              case "dddd":
                return o3[e3.$W];
              case "H":
                return String(s3);
              case "HH":
                return b.s(s3, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s3, u3, true);
              case "A":
                return $2(s3, u3, false);
              case "m":
                return String(u3);
              case "mm":
                return b.s(u3, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b.s(e3.$s, 2, "0");
              case "SSS":
                return b.s(e3.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t4) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r3, d2, l2) {
        var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e2, g2 = this - m3, D2 = function() {
          return b.m(y2, m3);
        };
        switch (M3) {
          case h:
            $2 = D2() / 12;
            break;
          case c2:
            $2 = D2();
            break;
          case f2:
            $2 = D2() / 3;
            break;
          case o2:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u2:
            $2 = g2 / n2;
            break;
          case s2:
            $2 = g2 / e2;
            break;
          case i:
            $2 = g2 / t2;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : b.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c2).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = w(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k = _.prototype;
    return O.prototype = k, [["$ms", r2], ["$s", i], ["$m", s2], ["$H", u2], ["$W", a], ["$M", c2], ["$y", h], ["$D", d]].forEach(function(t3) {
      k[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), O.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _, O), t3.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t3) {
      return O(1e3 * t3);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs$1 = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var isBetween$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, i) {
    module2.exports = i();
  }(commonjsGlobal, function() {
    return function(e2, i, t2) {
      i.prototype.isBetween = function(e3, i2, s2, f2) {
        var n2 = t2(e3), o2 = t2(i2), r2 = "(" === (f2 = f2 || "()")[0], u2 = ")" === f2[1];
        return (r2 ? this.isAfter(n2, s2) : !this.isBefore(n2, s2)) && (u2 ? this.isBefore(o2, s2) : !this.isAfter(o2, s2)) || (r2 ? this.isBefore(n2, s2) : !this.isAfter(n2, s2)) && (u2 ? this.isAfter(o2, s2) : !this.isBefore(o2, s2));
      };
    };
  });
})(isBetween$1);
var isBetweenExports = isBetween$1.exports;
const isBetween = /* @__PURE__ */ getDefaultExportFromCjs(isBetweenExports);
var duration$1 = { exports: {} };
(function(module2, exports2) {
  !function(t2, s2) {
    module2.exports = s2();
  }(commonjsGlobal, function() {
    var t2, s2, n2 = 1e3, i = 6e4, e2 = 36e5, r2 = 864e5, o2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u2 = 31536e6, d = 2628e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u2, months: d, days: r2, hours: e2, minutes: i, seconds: n2, milliseconds: 1, weeks: 6048e5 }, c2 = function(t3) {
      return t3 instanceof g;
    }, f2 = function(t3, s3, n3) {
      return new g(t3, n3, s3.$l);
    }, m = function(t3) {
      return s2.p(t3) + "s";
    }, l = function(t3) {
      return t3 < 0;
    }, $ = function(t3) {
      return l(t3) ? Math.ceil(t3) : Math.floor(t3);
    }, y = function(t3) {
      return Math.abs(t3);
    }, v = function(t3, s3) {
      return t3 ? l(t3) ? { negative: true, format: "" + y(t3) + s3 } : { negative: false, format: "" + t3 + s3 } : { negative: false, format: "" };
    }, g = function() {
      function l2(t3, s3, n3) {
        var i2 = this;
        if (this.$d = {}, this.$l = n3, void 0 === t3 && (this.$ms = 0, this.parseFromMilliseconds()), s3)
          return f2(t3 * h[m(s3)], this);
        if ("number" == typeof t3)
          return this.$ms = t3, this.parseFromMilliseconds(), this;
        if ("object" == typeof t3)
          return Object.keys(t3).forEach(function(s4) {
            i2.$d[m(s4)] = t3[s4];
          }), this.calMilliseconds(), this;
        if ("string" == typeof t3) {
          var e3 = t3.match(a);
          if (e3) {
            var r3 = e3.slice(2).map(function(t4) {
              return null != t4 ? Number(t4) : 0;
            });
            return this.$d.years = r3[0], this.$d.months = r3[1], this.$d.weeks = r3[2], this.$d.days = r3[3], this.$d.hours = r3[4], this.$d.minutes = r3[5], this.$d.seconds = r3[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y2 = l2.prototype;
      return y2.calMilliseconds = function() {
        var t3 = this;
        this.$ms = Object.keys(this.$d).reduce(function(s3, n3) {
          return s3 + (t3.$d[n3] || 0) * h[n3];
        }, 0);
      }, y2.parseFromMilliseconds = function() {
        var t3 = this.$ms;
        this.$d.years = $(t3 / u2), t3 %= u2, this.$d.months = $(t3 / d), t3 %= d, this.$d.days = $(t3 / r2), t3 %= r2, this.$d.hours = $(t3 / e2), t3 %= e2, this.$d.minutes = $(t3 / i), t3 %= i, this.$d.seconds = $(t3 / n2), t3 %= n2, this.$d.milliseconds = t3;
      }, y2.toISOString = function() {
        var t3 = v(this.$d.years, "Y"), s3 = v(this.$d.months, "M"), n3 = +this.$d.days || 0;
        this.$d.weeks && (n3 += 7 * this.$d.weeks);
        var i2 = v(n3, "D"), e3 = v(this.$d.hours, "H"), r3 = v(this.$d.minutes, "M"), o3 = this.$d.seconds || 0;
        this.$d.milliseconds && (o3 += this.$d.milliseconds / 1e3, o3 = Math.round(1e3 * o3) / 1e3);
        var u3 = v(o3, "S"), d2 = t3.negative || s3.negative || i2.negative || e3.negative || r3.negative || u3.negative, a2 = e3.format || r3.format || u3.format ? "T" : "", h2 = (d2 ? "-" : "") + "P" + t3.format + s3.format + i2.format + a2 + e3.format + r3.format + u3.format;
        return "P" === h2 || "-P" === h2 ? "P0D" : h2;
      }, y2.toJSON = function() {
        return this.toISOString();
      }, y2.format = function(t3) {
        var n3 = t3 || "YYYY-MM-DDTHH:mm:ss", i2 = { Y: this.$d.years, YY: s2.s(this.$d.years, 2, "0"), YYYY: s2.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s2.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s2.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s2.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s2.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s2.s(this.$d.seconds, 2, "0"), SSS: s2.s(this.$d.milliseconds, 3, "0") };
        return n3.replace(o2, function(t4, s3) {
          return s3 || String(i2[t4]);
        });
      }, y2.as = function(t3) {
        return this.$ms / h[m(t3)];
      }, y2.get = function(t3) {
        var s3 = this.$ms, n3 = m(t3);
        return "milliseconds" === n3 ? s3 %= 1e3 : s3 = "weeks" === n3 ? $(s3 / h[n3]) : this.$d[n3], s3 || 0;
      }, y2.add = function(t3, s3, n3) {
        var i2;
        return i2 = s3 ? t3 * h[m(s3)] : c2(t3) ? t3.$ms : f2(t3, this).$ms, f2(this.$ms + i2 * (n3 ? -1 : 1), this);
      }, y2.subtract = function(t3, s3) {
        return this.add(t3, s3, true);
      }, y2.locale = function(t3) {
        var s3 = this.clone();
        return s3.$l = t3, s3;
      }, y2.clone = function() {
        return f2(this.$ms, this);
      }, y2.humanize = function(s3) {
        return t2().add(this.$ms, "ms").locale(this.$l).fromNow(!s3);
      }, y2.valueOf = function() {
        return this.asMilliseconds();
      }, y2.milliseconds = function() {
        return this.get("milliseconds");
      }, y2.asMilliseconds = function() {
        return this.as("milliseconds");
      }, y2.seconds = function() {
        return this.get("seconds");
      }, y2.asSeconds = function() {
        return this.as("seconds");
      }, y2.minutes = function() {
        return this.get("minutes");
      }, y2.asMinutes = function() {
        return this.as("minutes");
      }, y2.hours = function() {
        return this.get("hours");
      }, y2.asHours = function() {
        return this.as("hours");
      }, y2.days = function() {
        return this.get("days");
      }, y2.asDays = function() {
        return this.as("days");
      }, y2.weeks = function() {
        return this.get("weeks");
      }, y2.asWeeks = function() {
        return this.as("weeks");
      }, y2.months = function() {
        return this.get("months");
      }, y2.asMonths = function() {
        return this.as("months");
      }, y2.years = function() {
        return this.get("years");
      }, y2.asYears = function() {
        return this.as("years");
      }, l2;
    }(), p2 = function(t3, s3, n3) {
      return t3.add(s3.years() * n3, "y").add(s3.months() * n3, "M").add(s3.days() * n3, "d").add(s3.hours() * n3, "h").add(s3.minutes() * n3, "m").add(s3.seconds() * n3, "s").add(s3.milliseconds() * n3, "ms");
    };
    return function(n3, i2, e3) {
      t2 = e3, s2 = e3().$utils(), e3.duration = function(t3, s3) {
        var n4 = e3.locale();
        return f2(t3, { $l: n4 }, s3);
      }, e3.isDuration = c2;
      var r3 = i2.prototype.add, o3 = i2.prototype.subtract;
      i2.prototype.add = function(t3, s3) {
        return c2(t3) ? p2(this, t3, 1) : r3.bind(this)(t3, s3);
      }, i2.prototype.subtract = function(t3, s3) {
        return c2(t3) ? p2(this, t3, -1) : o3.bind(this)(t3, s3);
      };
    };
  });
})(duration$1);
var durationExports = duration$1.exports;
const duration = /* @__PURE__ */ getDefaultExportFromCjs(durationExports);
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createHook(ON_SHOW);
const onHide = /* @__PURE__ */ createHook(ON_HIDE);
const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
var isVue2 = false;
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
      if (!this._a && !isVue2) {
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
const { assign: assign$1 } = Object;
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
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
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
  const optionsForPlugin = assign$1({ actions: {} }, options);
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
      assign$1($state, newState);
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
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
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
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign$1(
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
    assign$1(store, setupStore);
    assign$1(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign$1($state, state);
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
      Object.defineProperty(store, p2, assign$1({ value: store[p2] }, nonEnumerable));
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
      assign$1(store, extensions);
    } else {
      assign$1(store, scope.run(() => extender({
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
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign$1({}, options), pinia, true);
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
            set: (v) => Object.assign(provideCache, v)
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
var freeGlobal$2 = typeof global == "object" && global && global.Object === Object && global;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$4 = freeGlobal$2 || freeSelf$1 || Function("return this")();
var Symbol$5 = root$4.Symbol;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var nativeObjectToString$3 = objectProto$9.toString;
var symToStringTag$3 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$2(value2) {
  var isOwn = hasOwnProperty$7.call(value2, symToStringTag$3), tag = value2[symToStringTag$3];
  try {
    value2[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$3.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$3] = tag;
    } else {
      delete value2[symToStringTag$3];
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var nativeObjectToString$2 = objectProto$8.toString;
function objectToString$2(value2) {
  return nativeObjectToString$2.call(value2);
}
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$2(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value2) ? getRawTag$2(value2) : objectToString$2(value2);
}
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag$2(value2) == symbolTag;
}
function arrayMap(array3, iteratee) {
  var index2 = -1, length = array3 == null ? 0 : array3.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array3[index2], index2, array3);
  }
  return result;
}
var isArray$2 = Array.isArray;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$5 ? Symbol$5.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray$2(value2)) {
    return arrayMap(value2, baseToString) + "";
  }
  if (isSymbol(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result;
}
function isObject$4(value2) {
  var type2 = typeof value2;
  return value2 != null && (type2 == "object" || type2 == "function");
}
function identity(value2) {
  return value2;
}
var asyncTag$1 = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$2(value2) {
  if (!isObject$4(value2)) {
    return false;
  }
  var tag = baseGetTag$2(value2);
  return tag == funcTag$1 || tag == genTag$1 || tag == asyncTag$1 || tag == proxyTag$1;
}
var coreJsData$2 = root$4["__core-js_shared__"];
var maskSrcKey$1 = function() {
  var uid2 = /[^.]+$/.exec(coreJsData$2 && coreJsData$2.keys && coreJsData$2.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$2(func2) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func2;
}
var funcProto$3 = Function.prototype;
var funcToString$3 = funcProto$3.toString;
function toSource$2(func2) {
  if (func2 != null) {
    try {
      return funcToString$3.call(func2);
    } catch (e2) {
    }
    try {
      return func2 + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$2 = Function.prototype, objectProto$7 = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var reIsNative$1 = RegExp(
  "^" + funcToString$2.call(hasOwnProperty$6).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$2(value2) {
  if (!isObject$4(value2) || isMasked$2(value2)) {
    return false;
  }
  var pattern2 = isFunction$2(value2) ? reIsNative$1 : reIsHostCtor$1;
  return pattern2.test(toSource$2(value2));
}
function getValue$2(object3, key) {
  return object3 == null ? void 0 : object3[key];
}
function getNative$3(object3, key) {
  var value2 = getValue$2(object3, key);
  return baseIsNative$2(value2) ? value2 : void 0;
}
function apply(func2, thisArg, args) {
  switch (args.length) {
    case 0:
      return func2.call(thisArg);
    case 1:
      return func2.call(thisArg, args[0]);
    case 2:
      return func2.call(thisArg, args[0], args[1]);
    case 3:
      return func2.call(thisArg, args[0], args[1], args[2]);
  }
  return func2.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func2) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func2.apply(void 0, arguments);
  };
}
function constant(value2) {
  return function() {
    return value2;
  };
}
var defineProperty = function() {
  try {
    var func2 = getNative$3(Object, "defineProperty");
    func2({}, "", {});
    return func2;
  } catch (e2) {
  }
}();
var baseSetToString = !defineProperty ? identity : function(func2, string2) {
  return defineProperty(func2, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string2),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function eq$2(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var nativeMax = Math.max;
function overRest(func2, start, transform) {
  start = nativeMax(start === void 0 ? func2.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array3 = Array(length);
    while (++index2 < length) {
      array3[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array3);
    return apply(func2, this, otherArgs);
  };
}
function baseRest(func2, start) {
  return setToString(overRest(func2, start, identity), func2 + "");
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value2, object3) {
  if (isArray$2(value2)) {
    return false;
  }
  var type2 = typeof value2;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value2 == null || isSymbol(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object3 != null && value2 in Object(object3);
}
var nativeCreate$5 = getNative$3(Object, "create");
function hashClear$2() {
  this.__data__ = nativeCreate$5 ? nativeCreate$5(null) : {};
  this.size = 0;
}
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$5) {
    var result = data[key];
    return result === HASH_UNDEFINED$3 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$5 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
function hashSet$2(key, value2) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$5 && value2 === void 0 ? HASH_UNDEFINED$2 : value2;
  return this;
}
function Hash$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$2;
Hash$2.prototype["delete"] = hashDelete$2;
Hash$2.prototype.get = hashGet$2;
Hash$2.prototype.has = hashHas$2;
Hash$2.prototype.set = hashSet$2;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf$5(array3, key) {
  var length = array3.length;
  while (length--) {
    if (eq$2(array3[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index2 = assocIndexOf$5(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet$2(key) {
  var data = this.__data__, index2 = assocIndexOf$5(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas$2(key) {
  return assocIndexOf$5(this.__data__, key) > -1;
}
function listCacheSet$2(key, value2) {
  var data = this.__data__, index2 = assocIndexOf$5(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value2]);
  } else {
    data[index2][1] = value2;
  }
  return this;
}
function ListCache$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$2.prototype.clear = listCacheClear$2;
ListCache$2.prototype["delete"] = listCacheDelete$2;
ListCache$2.prototype.get = listCacheGet$2;
ListCache$2.prototype.has = listCacheHas$2;
ListCache$2.prototype.set = listCacheSet$2;
var Map$3 = getNative$3(root$4, "Map");
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$2(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash$2()
  };
}
function isKeyable$2(value2) {
  var type2 = typeof value2;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value2 !== "__proto__" : value2 === null;
}
function getMapData$5(map2, key) {
  var data = map2.__data__;
  return isKeyable$2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete$2(key) {
  var result = getMapData$5(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet$2(key) {
  return getMapData$5(this, key).get(key);
}
function mapCacheHas$2(key) {
  return getMapData$5(this, key).has(key);
}
function mapCacheSet$2(key, value2) {
  var data = getMapData$5(this, key), size2 = data.size;
  data.set(key, value2);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
function MapCache$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear$2;
MapCache$2.prototype["delete"] = mapCacheDelete$2;
MapCache$2.prototype.get = mapCacheGet$2;
MapCache$2.prototype.has = mapCacheHas$2;
MapCache$2.prototype.set = mapCacheSet$2;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$2(func2, resolver) {
  if (typeof func2 != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func2.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$2)();
  return memoized;
}
memoize$2.Cache = MapCache$2;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func2) {
  var result = memoize$2(func2, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath = memoizeCapped$2(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName$1, function(match, number3, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number3 || match);
  });
  return result;
});
function toString$1(value2) {
  return value2 == null ? "" : baseToString(value2);
}
function castPath(value2, object3) {
  if (isArray$2(value2)) {
    return value2;
  }
  return isKey(value2, object3) ? [value2] : stringToPath(toString$1(value2));
}
var INFINITY = 1 / 0;
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol(value2)) {
    return value2;
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
}
function baseGet(object3, path) {
  path = castPath(path, object3);
  var index2 = 0, length = path.length;
  while (object3 != null && index2 < length) {
    object3 = object3[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object3 : void 0;
}
function baseSlice(array3, start, end) {
  var index2 = -1, length = array3.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array3[index2 + start];
  }
  return result;
}
function last(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? array3[length - 1] : void 0;
}
var stringTag = "[object String]";
function isString(value2) {
  return typeof value2 == "string" || !isArray$2(value2) && isObjectLike(value2) && baseGetTag$2(value2) == stringTag;
}
function parent(object3, path) {
  return path.length < 2 ? object3 : baseGet(object3, baseSlice(path, 0, -1));
}
function baseInvoke(object3, path, args) {
  path = castPath(path, object3);
  object3 = parent(object3, path);
  var func2 = object3 == null ? object3 : object3[toKey(last(path))];
  return func2 == null ? void 0 : apply(func2, object3, args);
}
baseRest(function(path, args) {
  return function(object3) {
    return baseInvoke(object3, path, args);
  };
});
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var Symbol$4 = root$2.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value2) {
  var isOwn = hasOwnProperty$3.call(value2, symToStringTag$1), tag = value2[symToStringTag$1];
  try {
    value2[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$1] = tag;
    } else {
      delete value2[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;
function objectToString$1(value2) {
  return nativeObjectToString.call(value2);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$1(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
}
var _baseGetTag = baseGetTag$1;
function isObject$3(value2) {
  var type2 = typeof value2;
  return value2 != null && (type2 == "object" || type2 == "function");
}
var isObject_1 = isObject$3;
var baseGetTag = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value2) {
  if (!isObject$2(value2)) {
    return false;
  }
  var tag = baseGetTag(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$1;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$1(func2) {
  return !!maskSrcKey && maskSrcKey in func2;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func2) {
  if (func2 != null) {
    try {
      return funcToString$1.call(func2);
    } catch (e2) {
    }
    try {
      return func2 + "";
    } catch (e2) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value2) {
  if (!isObject$1(value2) || isMasked(value2)) {
    return false;
  }
  var pattern2 = isFunction(value2) ? reIsNative : reIsHostCtor;
  return pattern2.test(toSource(value2));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object3, key) {
  return object3 == null ? void 0 : object3[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$2(object3, key) {
  var value2 = getValue(object3, key);
  return baseIsNative(value2) ? value2 : void 0;
}
var _getNative = getNative$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value2) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED : value2;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$1(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_1 = eq$1;
var eq = eq_1;
function assocIndexOf$4(array3, key) {
  var length = array3.length;
  while (length--) {
    if (eq(array3[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value2) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value2]);
  } else {
    data[index2][1] = value2;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype["delete"] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1;
var getNative = _getNative, root = _root;
var Map$2 = getNative(root, "Map");
var _Map = Map$2;
var Hash = _Hash, ListCache = _ListCache, Map$1 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value2) {
  var type2 = typeof value2;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value2) {
  var data = getMapData(this, key), size2 = data.size;
  data.set(key, value2);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func2, resolver) {
  if (typeof func2 != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func2.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func2) {
  var result = memoize(func2, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number3, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match);
  });
  return result;
});
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
var has$1 = Object.prototype.hasOwnProperty;
var hexTable = function() {
  var array3 = [];
  for (var i = 0; i < 256; ++i) {
    array3.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array3;
}();
var compactQueue = function compactQueue2(queue2) {
  var obj;
  while (queue2.length) {
    var item = queue2.pop();
    obj = item.obj[item.prop];
    if (Array.isArray(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
  return obj;
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge2(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (Array.isArray(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$1.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (Array.isArray(target) && !Array.isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (Array.isArray(target) && Array.isArray(source)) {
    source.forEach(function(item, i) {
      if (has$1.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge2(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value2 = source[key];
    if (has$1.call(acc, key)) {
      acc[key] = merge2(acc[key], value2, options);
    } else {
      acc[key] = value2;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, " "));
  } catch (e2) {
    return str;
  }
};
var encode$1 = function encode(str) {
  if (str.length === 0) {
    return str;
  }
  var string2 = typeof str === "string" ? str : String(str);
  var out = "";
  for (var i = 0; i < string2.length; ++i) {
    var c2 = string2.charCodeAt(i);
    if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122) {
      out += string2.charAt(i);
      continue;
    }
    if (c2 < 128) {
      out = out + hexTable[c2];
      continue;
    }
    if (c2 < 2048) {
      out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
      continue;
    }
    if (c2 < 55296 || c2 >= 57344) {
      out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
      continue;
    }
    i += 1;
    c2 = 65536 + ((c2 & 1023) << 10 | string2.charCodeAt(i) & 1023);
    out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
  }
  return out;
};
var compact = function compact2(value2) {
  var queue2 = [{ obj: { o: value2 }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue2.length; ++i) {
    var item = queue2[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue2.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  return compactQueue(queue2);
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (obj === null || typeof obj === "undefined") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var utils$2 = {
  arrayToObject,
  assign,
  compact,
  decode,
  encode: encode$1,
  isBuffer,
  isRegExp,
  merge
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var formats$2 = {
  "default": "RFC3986",
  formatters: {
    RFC1738: function(value2) {
      return replace.call(value2, percentTwenties, "+");
    },
    RFC3986: function(value2) {
      return String(value2);
    }
  },
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var utils$1 = utils$2;
var formats$1 = formats$2;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaults$2 = {
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  serializeDate: function serializeDate(date3) {
    return toISO.call(date3);
  },
  skipNulls: false,
  strictNullHandling: false
};
var stringify$1 = function stringify(object3, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, formatter, encodeValuesOnly) {
  var obj = object3;
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$2.encoder) : prefix;
    }
    obj = "";
  }
  if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean" || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$2.encoder);
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$2.encoder))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (skipNulls && obj[key] === null) {
      continue;
    }
    if (isArray$1(obj)) {
      pushToArray(values, stringify(
        obj[key],
        generateArrayPrefix(prefix, key),
        generateArrayPrefix,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate2,
        formatter,
        encodeValuesOnly
      ));
    } else {
      pushToArray(values, stringify(
        obj[key],
        prefix + (allowDots ? "." + key : "[" + key + "]"),
        generateArrayPrefix,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate2,
        formatter,
        encodeValuesOnly
      ));
    }
  }
  return values;
};
var stringify_1 = function(object3, opts) {
  var obj = object3;
  var options = opts ? utils$1.assign({}, opts) : {};
  if (options.encoder !== null && typeof options.encoder !== "undefined" && typeof options.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var delimiter = typeof options.delimiter === "undefined" ? defaults$2.delimiter : options.delimiter;
  var strictNullHandling = typeof options.strictNullHandling === "boolean" ? options.strictNullHandling : defaults$2.strictNullHandling;
  var skipNulls = typeof options.skipNulls === "boolean" ? options.skipNulls : defaults$2.skipNulls;
  var encode3 = typeof options.encode === "boolean" ? options.encode : defaults$2.encode;
  var encoder = typeof options.encoder === "function" ? options.encoder : defaults$2.encoder;
  var sort = typeof options.sort === "function" ? options.sort : null;
  var allowDots = typeof options.allowDots === "undefined" ? false : options.allowDots;
  var serializeDate2 = typeof options.serializeDate === "function" ? options.serializeDate : defaults$2.serializeDate;
  var encodeValuesOnly = typeof options.encodeValuesOnly === "boolean" ? options.encodeValuesOnly : defaults$2.encodeValuesOnly;
  if (typeof options.format === "undefined") {
    options.format = formats$1["default"];
  } else if (!Object.prototype.hasOwnProperty.call(formats$1.formatters, options.format)) {
    throw new TypeError("Unknown format option provided.");
  }
  var formatter = formats$1.formatters[options.format];
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (options.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = options.arrayFormat;
  } else if ("indices" in options) {
    arrayFormat = options.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (sort) {
    objKeys.sort(sort);
  }
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys, stringify$1(
      obj[key],
      key,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encode3 ? encoder : null,
      filter,
      sort,
      allowDots,
      serializeDate2,
      formatter,
      encodeValuesOnly
    ));
  }
  var joined = keys.join(delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var defaults$1 = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  parameterLimit: 1e3,
  plainObjects: false,
  strictNullHandling: false
};
var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  for (var i = 0; i < parts.length; ++i) {
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults$1.decoder);
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults$1.decoder);
      val = options.decoder(part.slice(pos + 1), defaults$1.decoder);
    }
    if (has.call(obj, key)) {
      obj[key] = [].concat(obj[key]).concat(val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options) {
  var leaf = val;
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root2 = chain[i];
    if (root2 === "[]" && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
      var index2 = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index2) && root2 !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
        obj = [];
        obj[index2] = leaf;
      } else if (cleanRoot !== "__proto__") {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = brackets2.exec(key);
  var parent2 = segment ? key.slice(0, segment.index) : key;
  var keys = [];
  if (parent2) {
    if (!options.plainObjects && has.call(Object.prototype, parent2)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent2);
  }
  var i = 0;
  while ((segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }
  if (segment) {
    keys.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys, val, options);
};
var parse$1 = function(str, opts) {
  var options = opts ? utils.assign({}, opts) : {};
  if (options.decoder !== null && options.decoder !== void 0 && typeof options.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
  options.delimiter = typeof options.delimiter === "string" || utils.isRegExp(options.delimiter) ? options.delimiter : defaults$1.delimiter;
  options.depth = typeof options.depth === "number" ? options.depth : defaults$1.depth;
  options.arrayLimit = typeof options.arrayLimit === "number" ? options.arrayLimit : defaults$1.arrayLimit;
  options.parseArrays = options.parseArrays !== false;
  options.decoder = typeof options.decoder === "function" ? options.decoder : defaults$1.decoder;
  options.allowDots = typeof options.allowDots === "boolean" ? options.allowDots : defaults$1.allowDots;
  options.plainObjects = typeof options.plainObjects === "boolean" ? options.plainObjects : defaults$1.plainObjects;
  options.allowPrototypes = typeof options.allowPrototypes === "boolean" ? options.allowPrototypes : defaults$1.allowPrototypes;
  options.parameterLimit = typeof options.parameterLimit === "number" ? options.parameterLimit : defaults$1.parameterLimit;
  options.strictNullHandling = typeof options.strictNullHandling === "boolean" ? options.strictNullHandling : defaults$1.strictNullHandling;
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$2;
var lib = {
  formats,
  parse,
  stringify: stringify2
};
const qs = /* @__PURE__ */ getDefaultExportFromCjs(lib);
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
function encode2(val) {
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
      forEach(val, function parseValue(v) {
        if (isDate(v)) {
          v = v.toISOString();
        } else if (isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode2(key) + "=" + encode2(v));
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
  function clone2(parent2, circular, depth, prototype, includeNonEnumerable) {
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
    function _clone(parent3, depth2) {
      if (parent3 === null)
        return null;
      if (depth2 === 0)
        return parent3;
      var child;
      var proto;
      if (typeof parent3 != "object") {
        return parent3;
      }
      if (_instanceof(parent3, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent3, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent3, nativePromise)) {
        child = new nativePromise(function(resolve2, reject) {
          parent3.then(function(value2) {
            resolve2(_clone(value2, depth2 - 1));
          }, function(err) {
            reject(_clone(err, depth2 - 1));
          });
        });
      } else if (clone2.__isArray(parent3)) {
        child = [];
      } else if (clone2.__isRegExp(parent3)) {
        child = new RegExp(parent3.source, __getRegExpFlags(parent3));
        if (parent3.lastIndex)
          child.lastIndex = parent3.lastIndex;
      } else if (clone2.__isDate(parent3)) {
        child = new Date(parent3.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent3)) {
        if (Buffer.from) {
          child = Buffer.from(parent3);
        } else {
          child = new Buffer(parent3.length);
          parent3.copy(child);
        }
        return child;
      } else if (_instanceof(parent3, Error)) {
        child = Object.create(parent3);
      } else {
        if (typeof prototype == "undefined") {
          proto = Object.getPrototypeOf(parent3);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index2 = allParents.indexOf(parent3);
        if (index2 != -1) {
          return allChildren[index2];
        }
        allParents.push(parent3);
        allChildren.push(child);
      }
      if (_instanceof(parent3, nativeMap)) {
        parent3.forEach(function(value2, key) {
          var keyChild = _clone(key, depth2 - 1);
          var valueChild = _clone(value2, depth2 - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent3, nativeSet)) {
        parent3.forEach(function(value2) {
          var entryChild = _clone(value2, depth2 - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent3) {
        var attrs = Object.getOwnPropertyDescriptor(parent3, i);
        if (attrs) {
          child[i] = _clone(parent3[i], depth2 - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent3, i);
          if (objProperty.set === "undefined") {
            continue;
          }
          child[i] = _clone(parent3[i], depth2 - 1);
        } catch (e2) {
          if (e2 instanceof TypeError) {
            continue;
          } else if (e2 instanceof ReferenceError) {
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent3);
        for (var i = 0; i < symbols.length; i++) {
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent3, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent3[symbol], depth2 - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent3);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent3, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent3[propertyName], depth2 - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent2, depth);
  }
  clone2.clonePrototype = function clonePrototype(parent2) {
    if (parent2 === null)
      return null;
    var c2 = function() {
    };
    c2.prototype = parent2;
    return new c2();
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
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor2) {
      chain.unshift(interceptor2.fulfilled, interceptor2.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor2) {
      chain.push(interceptor2.fulfilled, interceptor2.rejected);
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
    let r2;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r2 = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r2 & 3 | 8 : r2];
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
  let parent2 = this.$parent;
  while (parent2) {
    if (parent2.$options && parent2.$options.name !== name) {
      parent2 = parent2.$parent;
    } else {
      return parent2;
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
function addUnit$1(value2 = "auto", unit = ((_b) => (_b = ((_a) => (_a = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = index$1 == null ? void 0 : index$1.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
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
function toast(title, duration2 = 2e3) {
  index$1.showToast({
    title: String(title),
    icon: "none",
    duration: duration2
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
  const n2 = !isFinite(+number23) ? 0 : +number23;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
  const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
  let s2 = "";
  s2 = (prec ? round(n2, prec) + "" : `${Math.round(n2)}`).split(".");
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s2[0])) {
    s2[0] = s2[0].replace(re, `$1${sep}$2`);
  }
  if ((s2[1] || "").length < prec) {
    s2[1] = s2[1] || "";
    s2[1] += new Array(prec - s2[1].length + 1).join("0");
  }
  return s2.join(dec);
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
  const inFn = function(_obj, keys, v) {
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    while (keys.length > 1) {
      const k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== "object") {
        _obj[k] = {};
      }
      keys.shift();
      inFn(_obj[k], keys, v);
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
  addUnit: addUnit$1,
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
function debounce(func2, wait2 = 500, immediate = false) {
  if (timeout !== null)
    clearTimeout(timeout);
  if (immediate) {
    const callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait2);
    if (callNow)
      typeof func2 === "function" && func2();
  } else {
    timeout = setTimeout(() => {
      typeof func2 === "function" && func2();
    }, wait2);
  }
}
let flag;
function throttle(func2, wait2 = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func2 === "function" && func2();
      setTimeout(() => {
        flag = false;
      }, wait2);
    }
  } else if (!flag) {
    flag = true;
    setTimeout(() => {
      flag = false;
      typeof func2 === "function" && func2();
    }, wait2);
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
const config$2 = {
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
  config: config$2,
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
const props$G = {
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
  }, (_f = (_e = index$1.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.badge)
};
const props$F = {
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
  }, (_h = (_g = index$1.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.tabs)
};
const zStatic = {
  base64Arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC",
  base64ArrowWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==",
  base64Flower: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC",
  base64FlowerWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=",
  base64Success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC",
  base64SuccessWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC",
  base64Empty: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg==",
  base64Error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII=",
  base64BackToTop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=="
};
const c = {
  // 当前版本号
  version: "2.8.0",
  // 延迟操作的通用时间
  delayTime: 100,
  // 请求失败时候全局emit使用的key
  errorUpdateKey: "z-paging-error-emit",
  // 全局emit complete的key
  completeUpdateKey: "z-paging-complete-emit",
  // z-paging缓存的前缀key
  cachePrefixKey: "z-paging-cache",
  // 虚拟列表中列表index的key
  listCellIndexKey: "zp_index",
  // 虚拟列表中列表的唯一key
  listCellIndexUniqueKey: "zp_unique_index"
};
const zLocalConfig = {};
const storageKey = "Z-PAGING-REFRESHER-TIME-STORAGE-KEY";
let config$1 = null;
let configLoaded = false;
const timeoutMap = {};
function gc(key, defaultValue) {
  return () => {
    _handleDefaultConfig();
    if (!config$1)
      return defaultValue;
    const value2 = config$1[key];
    return value2 === void 0 ? defaultValue : value2;
  };
}
function getTouch(e2) {
  let touch = null;
  if (e2.touches && e2.touches.length) {
    touch = e2.touches[0];
  } else if (e2.changedTouches && e2.changedTouches.length) {
    touch = e2.changedTouches[0];
  } else if (e2.datail && e2.datail != {}) {
    touch = e2.datail;
  } else {
    return { touchX: 0, touchY: 0 };
  }
  return {
    touchX: touch.clientX,
    touchY: touch.clientY
  };
}
function getTouchFromZPaging(target) {
  if (target && target.tagName && target.tagName !== "BODY" && target.tagName !== "UNI-PAGE-BODY") {
    const classList = target.classList;
    if (classList && classList.contains("z-paging-content")) {
      return {
        isFromZp: true,
        isPageScroll: classList.contains("z-paging-content-page"),
        isReachedTop: classList.contains("z-paging-reached-top"),
        isUseChatRecordMode: classList.contains("z-paging-use-chat-record-mode")
      };
    } else {
      return getTouchFromZPaging(target.parentNode);
    }
  } else {
    return { isFromZp: false };
  }
}
function getParent(parent2) {
  if (!parent2)
    return null;
  if (parent2.$refs.paging)
    return parent2;
  return getParent(parent2.$parent);
}
function consoleErr(err) {
  console.error(`[z-paging]${err}`);
}
function delay(callback, ms = c.delayTime, key) {
  const timeout2 = setTimeout(callback, ms);
  if (!!key) {
    timeoutMap[key] && clearTimeout(timeoutMap[key]);
    timeoutMap[key] = timeout2;
  }
  return timeout2;
}
function setRefesrherTime(time, key) {
  const datas = getRefesrherTime() || {};
  datas[key] = time;
  index$1.setStorageSync(storageKey, datas);
}
function getRefesrherTime() {
  return index$1.getStorageSync(storageKey);
}
function getRefesrherTimeByKey(key) {
  const datas = getRefesrherTime();
  return datas && datas[key] ? datas[key] : null;
}
function getRefesrherFormatTimeByKey(key, textMap) {
  const time = getRefesrherTimeByKey(key);
  const timeText = time ? _timeFormat(time, textMap) : textMap.none;
  return `${textMap.title}${timeText}`;
}
function convertToPx(text) {
  const dataType = Object.prototype.toString.call(text);
  if (dataType === "[object Number]")
    return text;
  let isRpx = false;
  if (text.indexOf("rpx") !== -1 || text.indexOf("upx") !== -1) {
    text = text.replace("rpx", "").replace("upx", "");
    isRpx = true;
  } else if (text.indexOf("px") !== -1) {
    text = text.replace("px", "");
  }
  if (!isNaN(text)) {
    if (isRpx)
      return Number(rpx2px(text));
    return Number(text);
  }
  return 0;
}
function rpx2px(rpx) {
  return index$1.upx2px(rpx);
}
function getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function getInstanceId() {
  const s2 = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 10; i++) {
    s2[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
  }
  return s2.join("") + getTime();
}
function wait(ms) {
  return new Promise((resolve2) => {
    setTimeout(resolve2, ms);
  });
}
function isPromise(func2) {
  return Object.prototype.toString.call(func2) === "[object Promise]";
}
function addUnit(value2, unit) {
  if (Object.prototype.toString.call(value2) === "[object String]") {
    let tempValue = value2;
    tempValue = tempValue.replace("rpx", "").replace("upx", "").replace("px", "");
    if (value2.indexOf("rpx") === -1 && value2.indexOf("upx") === -1 && value2.indexOf("px") !== -1) {
      tempValue = parseFloat(tempValue) * 2;
    }
    value2 = tempValue;
  }
  return unit === "rpx" ? value2 + "rpx" : value2 / 2 + "px";
}
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null)
    return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}
function _handleDefaultConfig() {
  if (configLoaded)
    return;
  if (zLocalConfig && Object.keys(zLocalConfig).length) {
    config$1 = zLocalConfig;
  }
  if (!config$1 && index$1.$zp) {
    config$1 = index$1.$zp.config;
  }
  config$1 = config$1 ? Object.keys(config$1).reduce((result, key) => {
    result[_toCamelCase(key)] = config$1[key];
    return result;
  }, {}) : null;
  configLoaded = true;
}
function _timeFormat(time, textMap) {
  const date3 = new Date(time);
  const currentDate = /* @__PURE__ */ new Date();
  const dateDay = new Date(time).setHours(0, 0, 0, 0);
  const currentDateDay = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
  const disTime = dateDay - currentDateDay;
  let dayStr = "";
  const timeStr = _dateTimeFormat(date3);
  if (disTime === 0) {
    dayStr = textMap.today;
  } else if (disTime === -864e5) {
    dayStr = textMap.yesterday;
  } else {
    dayStr = _dateDayFormat(date3, date3.getFullYear() !== currentDate.getFullYear());
  }
  return `${dayStr} ${timeStr}`;
}
function _dateDayFormat(date3, showYear = true) {
  const year = date3.getFullYear();
  const month = date3.getMonth() + 1;
  const day = date3.getDate();
  return showYear ? `${year}-${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}` : `${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}`;
}
function _dateTimeFormat(date3) {
  const hour = date3.getHours();
  const minute = date3.getMinutes();
  return `${_fullZeroToTwo(hour)}:${_fullZeroToTwo(minute)}`;
}
function _fullZeroToTwo(str) {
  str = str.toString();
  return str.length === 1 ? "0" + str : str;
}
function _toCamelCase(value2) {
  return value2.replace(/-([a-z])/g, (_, group1) => group1.toUpperCase());
}
const u = {
  gc,
  setRefesrherTime,
  getRefesrherFormatTimeByKey,
  getTouch,
  getTouchFromZPaging,
  getParent,
  convertToPx,
  getTime,
  getInstanceId,
  consoleErr,
  delay,
  wait,
  isPromise,
  addUnit,
  deepCopy,
  rpx2px
};
const commonLayoutModule = {
  data() {
    return {
      systemInfo: null,
      cssSafeAreaInsetBottom: -1,
      isReadyDestroy: false
    };
  },
  computed: {
    // 顶部可用距离
    windowTop() {
      if (!this.systemInfo)
        return 0;
      return this.systemInfo.windowTop || 0;
    },
    // 底部安全区域高度
    safeAreaBottom() {
      if (!this.systemInfo)
        return 0;
      let safeAreaBottom = 0;
      safeAreaBottom = Math.max(this.cssSafeAreaInsetBottom, 0);
      return safeAreaBottom;
    },
    // 是否是比较老的webview，在一些老的webview中，需要进行一些特殊处理
    isOldWebView() {
      try {
        const systemInfos = index$1.getSystemInfoSync().system.split(" ");
        const deviceType = systemInfos[0];
        const version2 = parseInt(systemInfos[1]);
        if (deviceType === "iOS" && version2 <= 10 || deviceType === "Android" && version2 <= 6) {
          return true;
        }
      } catch (e2) {
        return false;
      }
      return false;
    },
    // 当前组件的$slots，兼容不同平台
    zSlots() {
      return this.$slots;
    }
  },
  beforeDestroy() {
    this.isReadyDestroy = true;
  },
  unmounted() {
    this.isReadyDestroy = true;
  },
  methods: {
    // 更新fixed模式下z-paging的布局
    updateFixedLayout() {
      this.fixed && this.$nextTick(() => {
        this.systemInfo = index$1.getSystemInfoSync();
      });
    },
    // 获取节点尺寸
    _getNodeClientRect(select, inDom = true, scrollOffset = false) {
      if (this.isReadyDestroy) {
        return Promise.resolve(false);
      }
      let res = !!inDom ? index$1.createSelectorQuery().in(inDom === true ? this : inDom) : index$1.createSelectorQuery();
      scrollOffset ? res.select(select).scrollOffset() : res.select(select).boundingClientRect();
      return new Promise((resolve2, reject) => {
        res.exec((data) => {
          resolve2(data && data != "" && data != void 0 && data.length ? data : false);
        });
      });
    },
    // 获取slot="left"和slot="right"宽度并且更新布局
    _updateLeftAndRightWidth(targetStyle, parentNodePrefix) {
      this.$nextTick(() => {
        let delayTime = 0;
        setTimeout(() => {
          ["left", "right"].map((position) => {
            this._getNodeClientRect(`.${parentNodePrefix}-${position}`).then((res) => {
              this.$set(targetStyle, position, res ? res[0].width + "px" : "0px");
            });
          });
        }, delayTime);
      });
    },
    // 通过获取css设置的底部安全区域占位view高度设置bottom距离（直接通过systemInfo在部分平台上无法获取到底部安全区域）
    _getCssSafeAreaInsetBottom(success) {
      this._getNodeClientRect(".zp-safe-area-inset-bottom").then((res) => {
        this.cssSafeAreaInsetBottom = res ? res[0].height : -1;
        res && success && success();
      });
    }
  }
};
const Enum = {
  // 当前加载类型 0.下拉刷新 1.上拉加载更多
  LoadingType: {
    Refresher: 0,
    LoadingMore: 1
  },
  // 下拉刷新状态 0.默认状态 1.松手立即刷新 2.刷新中 3.刷新结束 4.松手进入二楼
  Refresher: {
    Default: 0,
    ReleaseToRefresh: 1,
    Loading: 2,
    Complete: 3,
    GoF2: 4
  },
  // 底部加载更多状态 0.默认状态 1.加载中 2.没有更多数据 3.加载失败
  More: {
    Default: 0,
    Loading: 1,
    NoMore: 2,
    Fail: 3
  },
  // @query触发来源 0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发
  QueryFrom: {
    UserPullDown: 0,
    Reload: 1,
    Refresh: 2,
    LoadingMore: 3
  },
  // 虚拟列表cell高度模式
  CellHeightMode: {
    // 固定高度
    Fixed: "fixed",
    // 动态高度
    Dynamic: "dynamic"
  },
  // 列表缓存模式
  CacheMode: {
    // 默认模式，只会缓存一次
    Default: "default",
    // 总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
    Always: "always"
  }
};
const queryKey = "Query";
const fetchParamsKey = "FetchParams";
const fetchResultKey = "FetchResult";
const language2LocalKey = "Language2Local";
function handleQuery(callback) {
  _addHandleByKey(queryKey, callback);
  return this;
}
function _handleQuery(pageNo, pageSize, from, lastItem) {
  const callback = _getHandleByKey(queryKey);
  return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];
}
function handleFetchParams(callback) {
  _addHandleByKey(fetchParamsKey, callback);
  return this;
}
function _handleFetchParams(parmas, extraParams) {
  const callback = _getHandleByKey(fetchParamsKey);
  return callback ? callback(parmas, extraParams || {}) : __spreadValues({ pageNo: parmas.pageNo, pageSize: parmas.pageSize }, extraParams || {});
}
function handleFetchResult(callback) {
  _addHandleByKey(fetchResultKey, callback);
  return this;
}
function _handleFetchResult(result, paging, params) {
  const callback = _getHandleByKey(fetchResultKey);
  callback && callback(result, paging, params);
  return callback ? true : false;
}
function handleLanguage2Local(callback) {
  _addHandleByKey(language2LocalKey, callback);
  return this;
}
function _handleLanguage2Local(language2, local) {
  const callback = _getHandleByKey(language2LocalKey);
  return callback ? callback(language2, local) : local;
}
function _getApp() {
  return getApp();
}
function _hasGlobalData() {
  return _getApp() && _getApp().globalData;
}
function _addHandleByKey(key, callback) {
  try {
    setTimeout(function() {
      if (_hasGlobalData()) {
        _getApp().globalData[`zp_handle${key}Callback`] = callback;
      }
    }, 1);
  } catch (_) {
  }
}
function _getHandleByKey(key) {
  return _hasGlobalData() ? _getApp().globalData[`zp_handle${key}Callback`] : null;
}
const interceptor = {
  handleQuery,
  _handleQuery,
  handleFetchParams,
  _handleFetchParams,
  handleFetchResult,
  _handleFetchResult,
  handleLanguage2Local,
  _handleLanguage2Local
};
const dataHandleModule = {
  props: {
    // 自定义初始的pageNo，默认为1
    defaultPageNo: {
      type: [Number, String],
      default: u.gc("defaultPageNo", 1),
      observer: function(newVal) {
        this.pageNo = newVal;
      }
    },
    // 自定义pageSize，默认为10
    defaultPageSize: {
      type: [Number, String],
      default: u.gc("defaultPageSize", 10),
      validator: (value2) => {
        if (value2 <= 0)
          u.consoleErr("default-page-size必须大于0！");
        return value2 > 0;
      }
    },
    // 为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效
    dataKey: {
      type: [Number, String, Object],
      default: u.gc("dataKey", null)
    },
    // 使用缓存，若开启将自动缓存第一页的数据，默认为否。请注意，因考虑到切换tab时不同tab数据不同的情况，默认仅会缓存组件首次加载时第一次请求到的数据，后续的下拉刷新操作不会更新缓存。
    useCache: {
      type: Boolean,
      default: u.gc("useCache", false)
    },
    // 使用缓存时缓存的key，用于区分不同列表的缓存数据，useCache为true时必须设置，否则缓存无效
    cacheKey: {
      type: String,
      default: u.gc("cacheKey", null)
    },
    // 缓存模式，默认仅会缓存组件首次加载时第一次请求到的数据，可设置为always，即代表总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
    cacheMode: {
      type: String,
      default: u.gc("cacheMode", Enum.CacheMode.Default)
    },
    // 自动注入的list名，可自动修改父view(包含ref="paging")中对应name的list值
    autowireListName: {
      type: String,
      default: u.gc("autowireListName", "")
    },
    // 自动注入的query名，可自动调用父view(包含ref="paging")中的query方法
    autowireQueryName: {
      type: String,
      default: u.gc("autowireQueryName", "")
    },
    // 获取分页数据Function，功能与@query类似。若设置了fetch则@query将不再触发
    fetch: {
      type: Function,
      default: null
    },
    // fetch的附加参数，fetch配置后有效
    fetchParams: {
      type: Object,
      default: u.gc("fetchParams", null)
    },
    // z-paging mounted后自动调用reload方法(mounted后自动调用接口)，默认为是
    auto: {
      type: Boolean,
      default: u.gc("auto", true)
    },
    // 用户下拉刷新时是否触发reload方法，默认为是
    reloadWhenRefresh: {
      type: Boolean,
      default: u.gc("reloadWhenRefresh", true)
    },
    // reload时自动滚动到顶部，默认为是
    autoScrollToTopWhenReload: {
      type: Boolean,
      default: u.gc("autoScrollToTopWhenReload", true)
    },
    // reload时立即自动清空原list，默认为是，若立即自动清空，则在reload之后、请求回调之前页面是空白的
    autoCleanListWhenReload: {
      type: Boolean,
      default: u.gc("autoCleanListWhenReload", true)
    },
    // 列表刷新时自动显示下拉刷新view，默认为否
    showRefresherWhenReload: {
      type: Boolean,
      default: u.gc("showRefresherWhenReload", false)
    },
    // 列表刷新时自动显示加载更多view，且为加载中状态，默认为否
    showLoadingMoreWhenReload: {
      type: Boolean,
      default: u.gc("showLoadingMoreWhenReload", false)
    },
    // 组件created时立即触发reload(可解决一些情况下先看到页面再看到loading的问题)，auto为true时有效。为否时将在mounted+nextTick后触发reload，默认为否
    createdReload: {
      type: Boolean,
      default: u.gc("createdReload", false)
    },
    // 本地分页时上拉加载更多延迟时间，单位为毫秒，默认200毫秒
    localPagingLoadingTime: {
      type: [Number, String],
      default: u.gc("localPagingLoadingTime", 200)
    },
    // 自动拼接complete中传过来的数组(使用聊天记录模式时无效)
    concat: {
      type: Boolean,
      default: u.gc("concat", true)
    },
    // 请求失败是否触发reject，默认为是
    callNetworkReject: {
      type: Boolean,
      default: u.gc("callNetworkReject", true)
    },
    // 父组件v-model所绑定的list的值
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    modelValue: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      currentData: [],
      totalData: [],
      realTotalData: [],
      totalLocalPagingList: [],
      dataPromiseResultMap: {
        reload: null,
        complete: null,
        localPaging: null
      },
      isSettingCacheList: false,
      pageNo: 1,
      currentRefreshPageSize: 0,
      isLocalPaging: false,
      isAddedData: false,
      isTotalChangeFromAddData: false,
      privateConcat: true,
      myParentQuery: -1,
      firstPageLoaded: false,
      pagingLoaded: false,
      loaded: false,
      isUserReload: true,
      fromEmptyViewReload: false,
      queryFrom: "",
      listRendering: false,
      isHandlingRefreshToPage: false,
      isFirstPageAndNoMore: false,
      totalDataChangeThrow: true
    };
  },
  computed: {
    pageSize() {
      return this.defaultPageSize;
    },
    finalConcat() {
      return this.concat && this.privateConcat;
    },
    finalUseCache() {
      if (this.useCache && !this.cacheKey) {
        u.consoleErr("use-cache为true时，必须设置cache-key，否则缓存无效！");
      }
      return this.useCache && !!this.cacheKey;
    },
    finalCacheKey() {
      return this.cacheKey ? `${c.cachePrefixKey}-${this.cacheKey}` : null;
    },
    isFirstPage() {
      return this.pageNo === this.defaultPageNo;
    }
  },
  watch: {
    totalData(newVal, oldVal) {
      this._totalDataChange(newVal, oldVal, this.totalDataChangeThrow);
      this.totalDataChangeThrow = true;
    },
    currentData(newVal, oldVal) {
      this._currentDataChange(newVal, oldVal);
    },
    useChatRecordMode(newVal, oldVal) {
      if (newVal) {
        this.nLoadingMoreFixedHeight = false;
      }
    },
    value: {
      handler(newVal) {
        if (newVal !== this.totalData) {
          this.totalDataChangeThrow = false;
          this.totalData = newVal;
        }
      },
      immediate: true
    },
    modelValue: {
      handler(newVal) {
        if (newVal !== this.totalData) {
          this.totalDataChangeThrow = false;
          this.totalData = newVal;
        }
      },
      immediate: true
    }
  },
  methods: {
    // 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否成功(默认为是）
    complete(data, success = true) {
      this.customNoMore = -1;
      return this.addData(data, success);
    },
    //【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为dataKey，需与:data-key绑定的一致，第三个参数为是否成功(默认为是）
    completeByKey(data, dataKey = null, success = true) {
      if (dataKey !== null && this.dataKey !== null && dataKey !== this.dataKey) {
        this.isFirstPage && this.endRefresh();
        return new Promise((resolve2) => resolve2());
      }
      this.customNoMore = -1;
      return this.addData(data, success);
    },
    //【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为total(列表总数)，第三个参数为是否成功(默认为是）
    completeByTotal(data, total, success = true) {
      if (total == "undefined") {
        this.customNoMore = -1;
      } else {
        const dataTypeRes = this._checkDataType(data, success, false);
        data = dataTypeRes.data;
        success = dataTypeRes.success;
        if (total >= 0 && success) {
          return new Promise((resolve2, reject) => {
            this.$nextTick(() => {
              let nomore = false;
              const realTotalDataCount = this.pageNo == this.defaultPageNo ? 0 : this.realTotalData.length;
              const dataLength = this.privateConcat ? data.length : 0;
              let exceedCount = realTotalDataCount + dataLength - total;
              if (exceedCount >= 0) {
                nomore = true;
                exceedCount = this.defaultPageSize - exceedCount;
                if (this.privateConcat && exceedCount > 0 && exceedCount < data.length) {
                  data = data.splice(0, exceedCount);
                }
              }
              this.completeByNoMore(data, nomore, success).then((res) => resolve2(res)).catch(() => reject());
            });
          });
        }
      }
      return this.addData(data, success);
    },
    //【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否没有更多数据，第三个参数为是否成功(默认是是）
    completeByNoMore(data, nomore, success = true) {
      if (nomore != "undefined") {
        this.customNoMore = nomore == true ? 1 : 0;
      }
      return this.addData(data, success);
    },
    // 请求结束且请求失败时调用，支持传入请求失败原因
    completeByError(errorMsg) {
      this.customerEmptyViewErrorText = errorMsg;
      return this.complete(false);
    },
    // 与上方complete方法功能一致，新版本中设置服务端回调数组请使用complete方法
    addData(data, success = true) {
      if (!this.fromCompleteEmit) {
        this.disabledCompleteEmit = true;
        this.fromCompleteEmit = false;
      }
      const currentTimeStamp = u.getTime();
      const disTime = currentTimeStamp - this.requestTimeStamp;
      let minDelay = this.minDelay;
      if (this.isFirstPage && this.finalShowRefresherWhenReload) {
        minDelay = Math.max(400, minDelay);
      }
      const addDataDalay = this.requestTimeStamp > 0 && disTime < minDelay ? minDelay - disTime : 0;
      this.$nextTick(() => {
        u.delay(() => {
          this._addData(data, success, false);
        }, this.delay > 0 ? this.delay : addDataDalay);
      });
      return new Promise((resolve2, reject) => {
        this.dataPromiseResultMap.complete = { resolve: resolve2, reject };
      });
    },
    // 从顶部添加数据，不会影响分页的pageNo和pageSize
    addDataFromTop(data, toTop = true, toTopWithAnimate = true) {
      let addFromTop = !this.isChatRecordModeAndNotInversion;
      data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : addFromTop ? data.reverse() : data;
      this.finalUseVirtualList && this._setCellIndex(data, "top");
      this.totalData = addFromTop ? [...data, ...this.totalData] : [...this.totalData, ...data];
      if (toTop) {
        u.delay(() => this.useChatRecordMode ? this.scrollToBottom(toTopWithAnimate) : this.scrollToTop(toTopWithAnimate));
      }
    },
    // 重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)
    resetTotalData(data) {
      this.isTotalChangeFromAddData = true;
      data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : data;
      this.totalData = data;
    },
    // 设置本地分页数据，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）
    setLocalPaging(data, success = true) {
      this.isLocalPaging = true;
      this.$nextTick(() => {
        this._addData(data, success, true);
      });
      return new Promise((resolve2, reject) => {
        this.dataPromiseResultMap.localPaging = { resolve: resolve2, reject };
      });
    },
    // 重新加载分页数据，pageNo会恢复为默认值，相当于下拉刷新的效果(animate为true时会展示下拉刷新动画，默认为false)
    reload(animate = this.showRefresherWhenReload) {
      if (animate) {
        this.privateShowRefresherWhenReload = animate;
        this.isUserPullDown = true;
      }
      if (!this.showLoadingMoreWhenReload) {
        this.listRendering = true;
      }
      this.$nextTick(() => {
        this._preReload(animate, false);
      });
      return new Promise((resolve2, reject) => {
        this.dataPromiseResultMap.reload = { resolve: resolve2, reject };
      });
    },
    // 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
    refresh() {
      return this._handleRefreshWithDisPageNo(this.pageNo - this.defaultPageNo + 1);
    },
    // 刷新列表数据至指定页，例如pageNo=5时则代表刷新列表至第5页，此时pageNo会变为5，列表会展示前5页的数据。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
    refreshToPage(pageNo) {
      this.isHandlingRefreshToPage = true;
      return this._handleRefreshWithDisPageNo(pageNo + this.defaultPageNo - 1);
    },
    // 手动更新列表缓存数据，将自动截取v-model绑定的list中的前pageSize条覆盖缓存，请确保在list数据更新到预期结果后再调用此方法
    updateCache() {
      if (this.finalUseCache && this.totalData.length) {
        this._saveLocalCache(this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize)));
      }
    },
    // 清空分页数据
    clean() {
      this._reload(true);
      this._addData([], true, false);
    },
    // 清空分页数据
    clear() {
      this.clean();
    },
    // reload之前的一些处理
    _preReload(animate = this.showRefresherWhenReload, isFromMounted = true, retryCount = 0) {
      const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
      if (this.customRefresherHeight === -1 && showRefresher) {
        u.delay(() => {
          retryCount++;
          if (retryCount % 10 === 0) {
            this._updateCustomRefresherHeight();
          }
          this._preReload(animate, isFromMounted, retryCount);
        }, c.delayTime / 2);
        return;
      }
      this.isUserReload = true;
      this.loadingType = Enum.LoadingType.Refresher;
      if (animate) {
        this.privateShowRefresherWhenReload = animate;
        if (this.useCustomRefresher) {
          this._doRefresherRefreshAnimate();
        } else {
          this.refresherTriggered = true;
        }
      } else {
        this._refresherEnd(false, false, false, false);
      }
      this._reload(false, isFromMounted);
    },
    // 重新加载分页数据
    _reload(isClean = false, isFromMounted = false, isUserPullDown = false) {
      this.isAddedData = false;
      this.insideOfPaging = -1;
      this.cacheScrollNodeHeight = -1;
      this.pageNo = this.defaultPageNo;
      this._cleanRefresherEndTimeout();
      !this.privateShowRefresherWhenReload && !isClean && this._startLoading(true);
      this.firstPageLoaded = true;
      this.isTotalChangeFromAddData = false;
      if (!this.isSettingCacheList) {
        this.totalData = [];
      }
      if (!isClean) {
        this._emitQuery(this.pageNo, this.defaultPageSize, isUserPullDown ? Enum.QueryFrom.UserPullDown : Enum.QueryFrom.Reload);
        let delay2 = 0;
        u.delay(this._callMyParentQuery, delay2);
        if (!isFromMounted && this.autoScrollToTopWhenReload) {
          this._scrollToTop(false);
        }
      }
    },
    // 处理服务端返回的数组
    _addData(data, success, isLocal) {
      this.isAddedData = true;
      this.fromEmptyViewReload = false;
      this.isTotalChangeFromAddData = true;
      this.refresherTriggered = false;
      this._endSystemLoadingAndRefresh();
      const tempIsUserPullDown = this.isUserPullDown;
      if (this.showRefresherUpdateTime && this.isFirstPage) {
        u.setRefesrherTime(u.getTime(), this.refresherUpdateTimeKey);
        this.$refs.refresh && this.$refs.refresh.updateTime();
      }
      if (!isLocal && tempIsUserPullDown && this.isFirstPage) {
        this.isUserPullDown = false;
      }
      if (!this.isFirstPage) {
        this.listRendering = true;
        this.$nextTick(() => {
          u.delay(() => this.listRendering = false);
        });
      } else {
        this.listRendering = false;
      }
      let dataTypeRes = this._checkDataType(data, success, isLocal);
      data = dataTypeRes.data;
      success = dataTypeRes.success;
      let delayTime = c.delayTime;
      if (this.useChatRecordMode)
        delayTime = 0;
      this.loadingForNow = false;
      u.delay(() => {
        this.pagingLoaded = true;
        this.$nextTick(() => {
          !isLocal && this._refresherEnd(delayTime > 0, true, tempIsUserPullDown);
        });
      });
      if (this.isFirstPage) {
        this.isLoadFailed = !success;
        this.$emit("isLoadFailedChange", this.isLoadFailed);
        if (this.finalUseCache && success && (this.cacheMode === Enum.CacheMode.Always ? true : this.isSettingCacheList)) {
          this._saveLocalCache(data);
        }
      }
      this.isSettingCacheList = false;
      if (success) {
        if (!(this.privateConcat === false && !this.isHandlingRefreshToPage && this.loadingStatus === Enum.More.NoMore)) {
          this.loadingStatus = Enum.More.Default;
        }
        if (isLocal) {
          this.totalLocalPagingList = data;
          const localPageNo = this.defaultPageNo;
          const localPageSize = this.queryFrom !== Enum.QueryFrom.Refresh ? this.defaultPageSize : this.currentRefreshPageSize;
          this._localPagingQueryList(localPageNo, localPageSize, 0, (res) => {
            u.delay(() => {
              this.completeByTotal(res, this.totalLocalPagingList.length);
            }, 0);
          });
        } else {
          let dataChangeDelayTime = 0;
          u.delay(() => {
            this._currentDataChange(data, this.currentData);
            this._callDataPromise(true, this.totalData);
          }, dataChangeDelayTime);
        }
        if (this.isHandlingRefreshToPage) {
          this.isHandlingRefreshToPage = false;
          this.pageNo = this.defaultPageNo + Math.ceil(data.length / this.pageSize) - 1;
          if (data.length % this.pageSize !== 0) {
            this.customNoMore = 1;
          }
        }
      } else {
        this._currentDataChange(data, this.currentData);
        this._callDataPromise(false);
        this.loadingStatus = Enum.More.Fail;
        this.isHandlingRefreshToPage = false;
        if (this.loadingType === Enum.LoadingType.LoadingMore) {
          this.pageNo--;
        }
      }
    },
    // 所有数据改变时调用
    _totalDataChange(newVal, oldVal, eventThrow = true) {
      if ((!this.isUserReload || !this.autoCleanListWhenReload) && this.firstPageLoaded && !newVal.length && oldVal.length) {
        return;
      }
      this._doCheckScrollViewShouldFullHeight(newVal);
      if (!this.realTotalData.length && !newVal.length) {
        eventThrow = false;
      }
      this.realTotalData = newVal;
      if (eventThrow) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
        this.$emit("update:list", newVal);
        this.$emit("listChange", newVal);
        this._callMyParentList(newVal);
      }
      this.firstPageLoaded = false;
      this.isTotalChangeFromAddData = false;
      this.$nextTick(() => {
        u.delay(() => {
          this._getNodeClientRect(".zp-paging-container-content").then((res) => {
            res && this.$emit("contentHeightChanged", res[0].height);
          });
        }, c.delayTime * (this.isIos ? 1 : 3));
      });
    },
    // 当前数据改变时调用
    _currentDataChange(newVal, oldVal) {
      newVal = [...newVal];
      this.finalUseVirtualList && this._setCellIndex(newVal, "bottom");
      if (this.isFirstPage && this.finalConcat) {
        this.totalData = [];
      }
      if (this.customNoMore !== -1) {
        if (this.customNoMore === 1 || this.customNoMore !== 0 && !newVal.length) {
          this.loadingStatus = Enum.More.NoMore;
        }
      } else {
        if (!newVal.length || newVal.length && newVal.length < this.defaultPageSize) {
          this.loadingStatus = Enum.More.NoMore;
        }
      }
      if (!this.totalData.length) {
        this.totalData = newVal;
      } else {
        if (this.finalConcat) {
          const currentScrollTop = this.oldScrollTop;
          this.totalData = [...this.totalData, ...newVal];
          if (!this.isIos && !this.refresherOnly && !this.usePageScroll && newVal.length) {
            this.loadingMoreTimeStamp = u.getTime();
            this.$nextTick(() => {
              this.scrollToY(currentScrollTop);
            });
          }
        } else {
          this.totalData = newVal;
        }
      }
      this.privateConcat = true;
    },
    // 根据pageNo处理refresh操作
    _handleRefreshWithDisPageNo(pageNo) {
      if (!this.isHandlingRefreshToPage && !this.realTotalData.length)
        return this.reload();
      if (pageNo >= 1) {
        this.loading = true;
        this.privateConcat = false;
        const totalPageSize = pageNo * this.pageSize;
        this.currentRefreshPageSize = totalPageSize;
        if (this.isLocalPaging && this.isHandlingRefreshToPage) {
          this._localPagingQueryList(this.defaultPageNo, totalPageSize, 0, (res) => {
            this.complete(res);
          });
        } else {
          this._emitQuery(this.defaultPageNo, totalPageSize, Enum.QueryFrom.Refresh);
          this._callMyParentQuery(this.defaultPageNo, totalPageSize);
        }
      }
      return new Promise((resolve2, reject) => {
        this.dataPromiseResultMap.reload = { resolve: resolve2, reject };
      });
    },
    // 本地分页请求
    _localPagingQueryList(pageNo, pageSize, localPagingLoadingTime, callback) {
      pageNo = Math.max(1, pageNo);
      pageSize = Math.max(1, pageSize);
      const totalPagingList = [...this.totalLocalPagingList];
      const pageNoIndex = (pageNo - 1) * pageSize;
      const finalPageNoIndex = Math.min(totalPagingList.length, pageNoIndex + pageSize);
      const resultPagingList = totalPagingList.splice(pageNoIndex, finalPageNoIndex - pageNoIndex);
      u.delay(() => callback(resultPagingList), localPagingLoadingTime);
    },
    // 存储列表缓存数据
    _saveLocalCache(data) {
      index$1.setStorageSync(this.finalCacheKey, data);
    },
    // 通过缓存数据填充列表数据
    _setListByLocalCache() {
      this.totalData = index$1.getStorageSync(this.finalCacheKey) || [];
      this.isSettingCacheList = true;
    },
    // 修改父view的list
    _callMyParentList(newVal) {
      if (this.autowireListName.length) {
        const myParent = u.getParent(this.$parent);
        if (myParent && myParent[this.autowireListName]) {
          myParent[this.autowireListName] = newVal;
        }
      }
    },
    // 调用父view的query
    _callMyParentQuery(customPageNo = 0, customPageSize = 0) {
      if (this.autowireQueryName) {
        if (this.myParentQuery === -1) {
          const myParent = u.getParent(this.$parent);
          if (myParent && myParent[this.autowireQueryName]) {
            this.myParentQuery = myParent[this.autowireQueryName];
          }
        }
        if (this.myParentQuery !== -1) {
          customPageSize > 0 ? this.myParentQuery(customPageNo, customPageSize) : this.myParentQuery(this.pageNo, this.defaultPageSize);
        }
      }
    },
    // emit query事件
    _emitQuery(pageNo, pageSize, from) {
      this.queryFrom = from;
      this.requestTimeStamp = u.getTime();
      const [lastItem] = this.realTotalData.slice(-1);
      if (this.fetch) {
        const fetchParams = interceptor._handleFetchParams({ pageNo, pageSize, from, lastItem: lastItem || null }, this.fetchParams);
        const fetchResult = this.fetch(fetchParams);
        if (!interceptor._handleFetchResult(fetchResult, this, fetchParams)) {
          u.isPromise(fetchResult) ? fetchResult.then((res) => {
            this.complete(res);
          }).catch((err) => {
            this.complete(false);
          }) : this.complete(fetchResult);
        }
      } else {
        this.$emit("query", ...interceptor._handleQuery(pageNo, pageSize, from, lastItem || null));
      }
    },
    // 触发数据改变promise
    _callDataPromise(success, totalList) {
      for (const key in this.dataPromiseResultMap) {
        const obj = this.dataPromiseResultMap[key];
        if (!obj)
          continue;
        success ? obj.resolve({ totalList, noMore: this.loadingStatus === Enum.More.NoMore }) : this.callNetworkReject && obj.reject(`z-paging-${key}-error`);
      }
    },
    // 检查complete data的类型
    _checkDataType(data, success, isLocal) {
      const dataType = Object.prototype.toString.call(data);
      if (dataType === "[object Boolean]") {
        success = data;
        data = [];
      } else if (dataType !== "[object Array]") {
        data = [];
        if (dataType !== "[object Undefined]" && dataType !== "[object Null]") {
          u.consoleErr(`${isLocal ? "setLocalPaging" : "complete"}参数类型不正确，第一个参数类型必须为Array!`);
        }
      }
      return { data, success };
    }
  }
};
const en = {
  "zp.refresher.default": "Pull down to refresh",
  "zp.refresher.pulling": "Release to refresh",
  "zp.refresher.refreshing": "Refreshing...",
  "zp.refresher.complete": "Refresh succeeded",
  "zp.refresher.f2": "Refresh to enter 2f",
  "zp.loadingMore.default": "Click to load more",
  "zp.loadingMore.loading": "Loading...",
  "zp.loadingMore.noMore": "No more data",
  "zp.loadingMore.fail": "Load failed,click to reload",
  "zp.emptyView.title": "No data",
  "zp.emptyView.reload": "Reload",
  "zp.emptyView.error": "Sorry,load failed",
  "zp.refresherUpdateTime.title": "Last update: ",
  "zp.refresherUpdateTime.none": "None",
  "zp.refresherUpdateTime.today": "Today",
  "zp.refresherUpdateTime.yesterday": "Yesterday",
  "zp.systemLoading.title": "Loading..."
};
const zhHans = {
  "zp.refresher.default": "继续下拉刷新",
  "zp.refresher.pulling": "松开立即刷新",
  "zp.refresher.refreshing": "正在刷新...",
  "zp.refresher.complete": "刷新成功",
  "zp.refresher.f2": "松手进入二楼",
  "zp.loadingMore.default": "点击加载更多",
  "zp.loadingMore.loading": "正在加载...",
  "zp.loadingMore.noMore": "没有更多了",
  "zp.loadingMore.fail": "加载失败，点击重新加载",
  "zp.emptyView.title": "没有数据哦~",
  "zp.emptyView.reload": "重新加载",
  "zp.emptyView.error": "很抱歉，加载失败",
  "zp.refresherUpdateTime.title": "最后更新：",
  "zp.refresherUpdateTime.none": "无",
  "zp.refresherUpdateTime.today": "今天",
  "zp.refresherUpdateTime.yesterday": "昨天",
  "zp.systemLoading.title": "加载中..."
};
const zhHant = {
  "zp.refresher.default": "繼續下拉重繪",
  "zp.refresher.pulling": "鬆開立即重繪",
  "zp.refresher.refreshing": "正在重繪...",
  "zp.refresher.complete": "重繪成功",
  "zp.refresher.f2": "鬆手進入二樓",
  "zp.loadingMore.default": "點擊加載更多",
  "zp.loadingMore.loading": "正在加載...",
  "zp.loadingMore.noMore": "沒有更多了",
  "zp.loadingMore.fail": "加載失敗，點擊重新加載",
  "zp.emptyView.title": "沒有數據哦~",
  "zp.emptyView.reload": "重新加載",
  "zp.emptyView.error": "很抱歉，加載失敗",
  "zp.refresherUpdateTime.title": "最後更新：",
  "zp.refresherUpdateTime.none": "無",
  "zp.refresherUpdateTime.today": "今天",
  "zp.refresherUpdateTime.yesterday": "昨天",
  "zp.systemLoading.title": "加載中..."
};
const messages$1 = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const { t } = initVueI18n(messages$1);
const language = index$1.getSystemInfoSync().language;
const i18nModule = {
  data() {
    return {
      language
    };
  },
  computed: {
    finalLanguage() {
      try {
        const local = index$1.getLocale();
        const language2 = this.language;
        return local === "auto" ? interceptor._handleLanguage2Local(language2, this._language2Local(language2)) : local;
      } catch (e2) {
        return "zh-Hans";
      }
    },
    // 最终的下拉刷新默认状态的文字
    finalRefresherDefaultText() {
      return this._getI18nText("zp.refresher.default", this.refresherDefaultText);
    },
    // 最终的下拉刷新下拉中的文字
    finalRefresherPullingText() {
      return this._getI18nText("zp.refresher.pulling", this.refresherPullingText);
    },
    // 最终的下拉刷新中文字
    finalRefresherRefreshingText() {
      return this._getI18nText("zp.refresher.refreshing", this.refresherRefreshingText);
    },
    // 最终的下拉刷新完成文字
    finalRefresherCompleteText() {
      return this._getI18nText("zp.refresher.complete", this.refresherCompleteText);
    },
    // 最终的下拉刷新上次更新时间文字
    finalRefresherUpdateTimeTextMap() {
      return {
        title: t("zp.refresherUpdateTime.title"),
        none: t("zp.refresherUpdateTime.none"),
        today: t("zp.refresherUpdateTime.today"),
        yesterday: t("zp.refresherUpdateTime.yesterday")
      };
    },
    // 最终的继续下拉进入二楼文字
    finalRefresherGoF2Text() {
      return this._getI18nText("zp.refresher.f2", this.refresherGoF2Text);
    },
    // 最终的底部加载更多默认状态文字
    finalLoadingMoreDefaultText() {
      return this._getI18nText("zp.loadingMore.default", this.loadingMoreDefaultText);
    },
    // 最终的底部加载更多加载中文字
    finalLoadingMoreLoadingText() {
      return this._getI18nText("zp.loadingMore.loading", this.loadingMoreLoadingText);
    },
    // 最终的底部加载更多没有更多数据文字
    finalLoadingMoreNoMoreText() {
      return this._getI18nText("zp.loadingMore.noMore", this.loadingMoreNoMoreText);
    },
    // 最终的底部加载更多加载失败文字
    finalLoadingMoreFailText() {
      return this._getI18nText("zp.loadingMore.fail", this.loadingMoreFailText);
    },
    // 最终的空数据图title
    finalEmptyViewText() {
      return this.isLoadFailed ? this.finalEmptyViewErrorText : this._getI18nText("zp.emptyView.title", this.emptyViewText);
    },
    // 最终的空数据图reload title
    finalEmptyViewReloadText() {
      return this._getI18nText("zp.emptyView.reload", this.emptyViewReloadText);
    },
    // 最终的空数据图加载失败文字
    finalEmptyViewErrorText() {
      return this.customerEmptyViewErrorText || this._getI18nText("zp.emptyView.error", this.emptyViewErrorText);
    },
    // 最终的系统loading title
    finalSystemLoadingText() {
      return this._getI18nText("zp.systemLoading.title", this.systemLoadingText);
    }
  },
  methods: {
    // 获取当前z-paging的语言
    getLanguage() {
      return this.finalLanguage;
    },
    // 获取国际化转换后的文本
    _getI18nText(key, value2) {
      const dataType = Object.prototype.toString.call(value2);
      if (dataType === "[object Object]") {
        const nextValue = value2[this.finalLanguage];
        if (nextValue)
          return nextValue;
      } else if (dataType === "[object String]") {
        return value2;
      }
      return t(key);
    },
    // 系统language转i18n local
    _language2Local(language2) {
      const formatedLanguage = language2.toLowerCase().replace(new RegExp("_", ""), "-");
      if (formatedLanguage.indexOf("zh") !== -1) {
        if (formatedLanguage === "zh" || formatedLanguage === "zh-cn" || formatedLanguage.indexOf("zh-hans") !== -1) {
          return "zh-Hans";
        }
        return "zh-Hant";
      }
      if (formatedLanguage.indexOf("en") !== -1)
        return "en";
      return language2;
    }
  }
};
const nvueModule = {
  props: {},
  data() {
    return {
      nRefresherLoading: false,
      nListIsDragging: false,
      nShowBottom: true,
      nFixFreezing: false,
      nShowRefresherReveal: false,
      nLoadingMoreFixedHeight: false,
      nShowRefresherRevealHeight: 0,
      nOldShowRefresherRevealHeight: -1,
      nRefresherWidth: u.rpx2px(750),
      nF2Opacity: 0
    };
  },
  computed: {},
  mounted() {
  },
  methods: {}
};
const emptyModule = {
  props: {
    // 是否强制隐藏空数据图，默认为否
    hideEmptyView: {
      type: Boolean,
      default: u.gc("hideEmptyView", false)
    },
    // 空数据图描述文字，默认为“没有数据哦~”
    emptyViewText: {
      type: [String, Object],
      default: u.gc("emptyViewText", null)
    },
    // 是否显示空数据图重新加载按钮(无数据时)，默认为否
    showEmptyViewReload: {
      type: Boolean,
      default: u.gc("showEmptyViewReload", false)
    },
    // 加载失败时是否显示空数据图重新加载按钮，默认为是
    showEmptyViewReloadWhenError: {
      type: Boolean,
      default: u.gc("showEmptyViewReloadWhenError", true)
    },
    // 空数据图点击重新加载文字，默认为“重新加载”
    emptyViewReloadText: {
      type: [String, Object],
      default: u.gc("emptyViewReloadText", null)
    },
    // 空数据图图片，默认使用z-paging内置的图片
    emptyViewImg: {
      type: String,
      default: u.gc("emptyViewImg", "")
    },
    // 空数据图“加载失败”描述文字，默认为“很抱歉，加载失败”
    emptyViewErrorText: {
      type: [String, Object],
      default: u.gc("emptyViewErrorText", null)
    },
    // 空数据图“加载失败”图片，默认使用z-paging内置的图片
    emptyViewErrorImg: {
      type: String,
      default: u.gc("emptyViewErrorImg", "")
    },
    // 空数据图样式
    emptyViewStyle: {
      type: Object,
      default: u.gc("emptyViewStyle", {})
    },
    // 空数据图容器样式
    emptyViewSuperStyle: {
      type: Object,
      default: u.gc("emptyViewSuperStyle", {})
    },
    // 空数据图img样式
    emptyViewImgStyle: {
      type: Object,
      default: u.gc("emptyViewImgStyle", {})
    },
    // 空数据图描述文字样式
    emptyViewTitleStyle: {
      type: Object,
      default: u.gc("emptyViewTitleStyle", {})
    },
    // 空数据图重新加载按钮样式
    emptyViewReloadStyle: {
      type: Object,
      default: u.gc("emptyViewReloadStyle", {})
    },
    // 空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging
    emptyViewFixed: {
      type: Boolean,
      default: u.gc("emptyViewFixed", false)
    },
    // 空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示。emptyViewFixed为false时有效
    emptyViewCenter: {
      type: Boolean,
      default: u.gc("emptyViewCenter", true)
    },
    // 加载中时是否自动隐藏空数据图，默认为是
    autoHideEmptyViewWhenLoading: {
      type: Boolean,
      default: u.gc("autoHideEmptyViewWhenLoading", true)
    },
    // 用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图，默认为是
    autoHideEmptyViewWhenPull: {
      type: Boolean,
      default: u.gc("autoHideEmptyViewWhenPull", true)
    },
    // 空数据view的z-index，默认为9
    emptyViewZIndex: {
      type: Number,
      default: u.gc("emptyViewZIndex", 9)
    }
  },
  data() {
    return {
      customerEmptyViewErrorText: ""
    };
  },
  computed: {
    finalEmptyViewImg() {
      return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;
    },
    finalShowEmptyViewReload() {
      return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;
    },
    // 是否展示空数据图
    showEmpty() {
      if (this.refresherOnly || this.hideEmptyView || this.realTotalData.length)
        return false;
      if (this.autoHideEmptyViewWhenLoading) {
        if (this.isAddedData && !this.firstPageLoaded && !this.loading)
          return true;
      } else {
        return true;
      }
      return !this.autoHideEmptyViewWhenPull && !this.isUserReload;
    }
  },
  methods: {
    // 点击了空数据view重新加载按钮
    _emptyViewReload() {
      let callbacked = false;
      this.$emit("emptyViewReload", (reload2) => {
        if (reload2 === void 0 || reload2 === true) {
          this.fromEmptyViewReload = true;
          this.reload().catch(() => {
          });
        }
        callbacked = true;
      });
      this.$nextTick(() => {
        if (!callbacked) {
          this.fromEmptyViewReload = true;
          this.reload().catch(() => {
          });
        }
      });
    },
    // 点击了空数据view
    _emptyViewClick() {
      this.$emit("emptyViewClick");
    }
  }
};
const refresherModule = {
  props: {
    // 下拉刷新的主题样式，支持black，white，默认black
    refresherThemeStyle: {
      type: String,
      default: u.gc("refresherThemeStyle", "")
    },
    // 自定义下拉刷新中左侧图标的样式
    refresherImgStyle: {
      type: Object,
      default: u.gc("refresherImgStyle", {})
    },
    // 自定义下拉刷新中右侧状态描述文字的样式
    refresherTitleStyle: {
      type: Object,
      default: u.gc("refresherTitleStyle", {})
    },
    // 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
    refresherUpdateTimeStyle: {
      type: Object,
      default: u.gc("refresherUpdateTimeStyle", {})
    },
    // 在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否
    watchRefresherTouchmove: {
      type: Boolean,
      default: u.gc("watchRefresherTouchmove", false)
    },
    // 底部加载更多的主题样式，支持black，white，默认black
    loadingMoreThemeStyle: {
      type: String,
      default: u.gc("loadingMoreThemeStyle", "")
    },
    // 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否
    refresherOnly: {
      type: Boolean,
      default: u.gc("refresherOnly", false)
    },
    // 自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效
    refresherDefaultDuration: {
      type: [Number, String],
      default: u.gc("refresherDefaultDuration", 100)
    },
    // 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0
    refresherCompleteDelay: {
      type: [Number, String],
      default: u.gc("refresherCompleteDelay", 0)
    },
    // 自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效
    refresherCompleteDuration: {
      type: [Number, String],
      default: u.gc("refresherCompleteDuration", 300)
    },
    // 自定义下拉刷新中是否允许列表滚动，默认为是
    refresherRefreshingScrollable: {
      type: Boolean,
      default: u.gc("refresherRefreshingScrollable", true)
    },
    // 自定义下拉刷新结束状态下是否允许列表滚动，默认为否
    refresherCompleteScrollable: {
      type: Boolean,
      default: u.gc("refresherCompleteScrollable", false)
    },
    // 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新
    useCustomRefresher: {
      type: Boolean,
      default: u.gc("useCustomRefresher", true)
    },
    // 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题
    refresherFps: {
      type: [Number, String],
      default: u.gc("refresherFps", 40)
    },
    // 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发
    refresherMaxAngle: {
      type: [Number, String],
      default: u.gc("refresherMaxAngle", 40)
    },
    // 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否
    refresherAngleEnableChangeContinued: {
      type: Boolean,
      default: u.gc("refresherAngleEnableChangeContinued", false)
    },
    // 自定义下拉刷新默认状态下的文字
    refresherDefaultText: {
      type: [String, Object],
      default: u.gc("refresherDefaultText", null)
    },
    // 自定义下拉刷新松手立即刷新状态下的文字
    refresherPullingText: {
      type: [String, Object],
      default: u.gc("refresherPullingText", null)
    },
    // 自定义下拉刷新刷新中状态下的文字
    refresherRefreshingText: {
      type: [String, Object],
      default: u.gc("refresherRefreshingText", null)
    },
    // 自定义下拉刷新刷新结束状态下的文字
    refresherCompleteText: {
      type: [String, Object],
      default: u.gc("refresherCompleteText", null)
    },
    // 自定义继续下拉进入二楼文字
    refresherGoF2Text: {
      type: [String, Object],
      default: u.gc("refresherGoF2Text", null)
    },
    // 自定义下拉刷新默认状态下的图片
    refresherDefaultImg: {
      type: String,
      default: u.gc("refresherDefaultImg", null)
    },
    // 自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致
    refresherPullingImg: {
      type: String,
      default: u.gc("refresherPullingImg", null)
    },
    // 自定义下拉刷新刷新中状态下的图片
    refresherRefreshingImg: {
      type: String,
      default: u.gc("refresherRefreshingImg", null)
    },
    // 自定义下拉刷新刷新结束状态下的图片
    refresherCompleteImg: {
      type: String,
      default: u.gc("refresherCompleteImg", null)
    },
    // 自定义下拉刷新刷新中状态下是否展示旋转动画
    refresherRefreshingAnimated: {
      type: Boolean,
      default: u.gc("refresherRefreshingAnimated", true)
    },
    // 是否开启自定义下拉刷新刷新结束回弹效果，默认为是
    refresherEndBounceEnabled: {
      type: Boolean,
      default: u.gc("refresherEndBounceEnabled", true)
    },
    // 是否开启自定义下拉刷新，默认为是
    refresherEnabled: {
      type: Boolean,
      default: u.gc("refresherEnabled", true)
    },
    // 设置自定义下拉刷新阈值，默认为80rpx
    refresherThreshold: {
      type: [Number, String],
      default: u.gc("refresherThreshold", "80rpx")
    },
    // 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black
    refresherDefaultStyle: {
      type: String,
      default: u.gc("refresherDefaultStyle", "black")
    },
    // 设置自定义下拉刷新区域背景
    refresherBackground: {
      type: String,
      default: u.gc("refresherBackground", "transparent")
    },
    // 设置固定的自定义下拉刷新区域背景
    refresherFixedBackground: {
      type: String,
      default: u.gc("refresherFixedBackground", "transparent")
    },
    // 设置固定的自定义下拉刷新区域高度，默认为0
    refresherFixedBacHeight: {
      type: [Number, String],
      default: u.gc("refresherFixedBacHeight", 0)
    },
    // 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)
    refresherOutRate: {
      type: Number,
      default: u.gc("refresherOutRate", 0.65)
    },
    // 是否开启下拉进入二楼功能，默认为否
    refresherF2Enabled: {
      type: Boolean,
      default: u.gc("refresherF2Enabled", false)
    },
    // 下拉进入二楼阈值，默认为200rpx
    refresherF2Threshold: {
      type: [Number, String],
      default: u.gc("refresherF2Threshold", "200rpx")
    },
    // 下拉进入二楼动画时间，单位为毫秒，默认为200毫秒
    refresherF2Duration: {
      type: [Number, String],
      default: u.gc("refresherF2Duration", 200)
    },
    // 下拉进入二楼状态松手后是否弹出二楼，默认为是
    showRefresherF2: {
      type: Boolean,
      default: u.gc("showRefresherF2", true)
    },
    // 设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)
    refresherPullRate: {
      type: Number,
      default: u.gc("refresherPullRate", 0.75)
    },
    // 是否显示最后更新时间，默认为否
    showRefresherUpdateTime: {
      type: Boolean,
      default: u.gc("showRefresherUpdateTime", false)
    },
    // 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
    refresherUpdateTimeKey: {
      type: String,
      default: u.gc("refresherUpdateTimeKey", "default")
    },
    // 下拉刷新时下拉到“松手立即刷新”或“松手进入二楼”状态时是否使手机短振动，默认为否（h5无效）
    refresherVibrate: {
      type: Boolean,
      default: u.gc("refresherVibrate", false)
    },
    // 下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发
    refresherNoTransform: {
      type: Boolean,
      default: u.gc("refresherNoTransform", false)
    },
    // 是否开启下拉刷新状态栏占位，适用于隐藏导航栏时，下拉刷新需要避开状态栏高度的情况，默认为否
    useRefresherStatusBarPlaceholder: {
      type: Boolean,
      default: u.gc("useRefresherStatusBarPlaceholder", false)
    }
  },
  data() {
    return {
      R: Enum.Refresher,
      //下拉刷新状态
      refresherStatus: Enum.Refresher.Default,
      refresherTouchstartY: 0,
      lastRefresherTouchmove: null,
      refresherReachMaxAngle: true,
      refresherTransform: "translateY(0px)",
      refresherTransition: "",
      finalRefresherDefaultStyle: "black",
      refresherRevealStackCount: 0,
      refresherCompleteTimeout: null,
      refresherCompleteSubTimeout: null,
      refresherEndTimeout: null,
      isTouchmovingTimeout: null,
      refresherTriggered: false,
      isTouchmoving: false,
      isTouchEnded: false,
      isUserPullDown: false,
      privateRefresherEnabled: -1,
      privateShowRefresherWhenReload: false,
      customRefresherHeight: -1,
      showCustomRefresher: false,
      doRefreshAnimateAfter: false,
      isRefresherInComplete: false,
      showF2: false,
      f2Transform: "",
      pullDownTimeStamp: 0,
      moveDis: 0,
      oldMoveDis: 0,
      currentDis: 0,
      oldCurrentMoveDis: 0,
      oldRefresherTouchmoveY: 0,
      oldTouchDirection: "",
      oldEmitedTouchDirection: "",
      oldPullingDistance: -1,
      refresherThresholdUpdateTag: 0
    };
  },
  watch: {
    refresherDefaultStyle: {
      handler(newVal) {
        if (newVal.length) {
          this.finalRefresherDefaultStyle = newVal;
        }
      },
      immediate: true
    },
    refresherStatus(newVal) {
      newVal === Enum.Refresher.Loading && this._cleanRefresherEndTimeout();
      this.refresherVibrate && (newVal === Enum.Refresher.ReleaseToRefresh || newVal === Enum.Refresher.GoF2) && this._doVibrateShort();
      this.$emit("refresherStatusChange", newVal);
      this.$emit("update:refresherStatus", newVal);
    },
    // 监听当前下拉刷新启用/禁用状态
    refresherEnabled(newVal) {
      !newVal && this.endRefresh();
    }
  },
  computed: {
    pullDownDisTimeStamp() {
      return 1e3 / this.refresherFps;
    },
    refresherThresholdUnitConverted() {
      return u.addUnit(this.refresherThreshold, this.unit);
    },
    finalRefresherEnabled() {
      if (this.useChatRecordMode)
        return false;
      if (this.privateRefresherEnabled === -1)
        return this.refresherEnabled;
      return this.privateRefresherEnabled === 1;
    },
    finalRefresherThreshold() {
      let refresherThreshold = this.refresherThresholdUnitConverted;
      let idDefault = false;
      if (refresherThreshold === u.addUnit(80, this.unit)) {
        idDefault = true;
        if (this.showRefresherUpdateTime) {
          refresherThreshold = u.addUnit(120, this.unit);
        }
      }
      if (idDefault && this.customRefresherHeight > 0)
        return this.customRefresherHeight + this.finalRefresherThresholdPlaceholder;
      return u.convertToPx(refresherThreshold) + this.finalRefresherThresholdPlaceholder;
    },
    finalRefresherF2Threshold() {
      return u.convertToPx(u.addUnit(this.refresherF2Threshold, this.unit));
    },
    finalRefresherThresholdPlaceholder() {
      return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
    },
    finalRefresherFixedBacHeight() {
      return u.convertToPx(this.refresherFixedBacHeight);
    },
    finalRefresherThemeStyle() {
      return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
    },
    finalRefresherOutRate() {
      let rate = this.refresherOutRate;
      rate = Math.max(0, rate);
      rate = Math.min(1, rate);
      return rate;
    },
    finalRefresherPullRate() {
      let rate = this.refresherPullRate;
      rate = Math.max(0, rate);
      return rate;
    },
    finalRefresherTransform() {
      if (this.refresherNoTransform || this.refresherTransform === "translateY(0px)")
        return "none";
      return this.refresherTransform;
    },
    finalShowRefresherWhenReload() {
      return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
    },
    finalRefresherTriggered() {
      if (!(this.finalRefresherEnabled && !this.useCustomRefresher))
        return false;
      return this.refresherTriggered;
    },
    showRefresher() {
      const showRefresher = this.finalRefresherEnabled || this.useCustomRefresher && !this.useChatRecordMode;
      this.active && this.customRefresherHeight === -1 && showRefresher && this.updateCustomRefresherHeight();
      return showRefresher;
    },
    hasTouchmove() {
      return this.watchRefresherTouchmove;
    }
  },
  methods: {
    // 终止下拉刷新状态
    endRefresh() {
      this.totalData = this.realTotalData;
      this._refresherEnd();
      this._endSystemLoadingAndRefresh();
      this._handleScrollViewBounce({ bounce: true });
      this.$nextTick(() => {
        this.refresherTriggered = false;
      });
    },
    // 手动更新自定义下拉刷新view高度
    updateCustomRefresherHeight() {
      u.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
    },
    // 关闭二楼
    closeF2() {
      this._handleCloseF2();
    },
    // 自定义下拉刷新被触发
    _onRefresh(fromScrollView = false, isUserPullDown = true) {
      if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher))
        return;
      this.$emit("onRefresh");
      this.$emit("Refresh");
      if (this.loading || this.isRefresherInComplete)
        return;
      this.loadingType = Enum.LoadingType.Refresher;
      if (this.nShowRefresherReveal)
        return;
      this.isUserPullDown = isUserPullDown;
      this.isUserReload = !isUserPullDown;
      this._startLoading(true);
      this.refresherTriggered = true;
      if (this.reloadWhenRefresh && isUserPullDown) {
        this.useChatRecordMode ? this._onLoadingMore("click") : this._reload(false, false, isUserPullDown);
      }
    },
    // 自定义下拉刷新被复位
    _onRestore() {
      this.refresherTriggered = "restore";
      this.$emit("onRestore");
      this.$emit("Restore");
    },
    // 进一步处理touch开始结果
    _handleRefresherTouchstart(touch) {
      if (!this.loading && this.isTouchEnded) {
        this.isTouchmoving = false;
      }
      this.loadingType = Enum.LoadingType.Refresher;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.isTouchEnded = false;
      this.refresherTransition = "";
      this.refresherTouchstartY = touch.touchY;
      this.$emit("refresherTouchstart", this.refresherTouchstartY);
      this.lastRefresherTouchmove = touch;
      this._cleanRefresherCompleteTimeout();
      this._cleanRefresherEndTimeout();
    },
    // 非app-ios/android或微信小程序或QQ小程序或h5平台，使用js控制下拉刷新
    // 进一步处理touch中结果
    _handleRefresherTouchmove(moveDis, touch) {
      this.refresherReachMaxAngle = true;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.isTouchmoving = true;
      this.isTouchEnded = false;
      if (moveDis >= this.finalRefresherThreshold) {
        this.refresherStatus = this.refresherF2Enabled && moveDis >= this.finalRefresherF2Threshold ? Enum.Refresher.GoF2 : Enum.Refresher.ReleaseToRefresh;
      } else {
        this.refresherStatus = Enum.Refresher.Default;
      }
      this.moveDis = moveDis;
    },
    // 进一步处理touch结束结果
    _handleRefresherTouchend(moveDis) {
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.refresherReachMaxAngle = true;
      this.isTouchEnded = true;
      const refresherThreshold = this.finalRefresherThreshold;
      if (moveDis >= refresherThreshold && (this.refresherStatus === Enum.Refresher.ReleaseToRefresh || this.refresherStatus === Enum.Refresher.GoF2)) {
        if (this.refresherStatus === Enum.Refresher.GoF2) {
          this._handleGoF2();
          this._refresherEnd();
        } else {
          u.delay(() => {
            this._emitTouchmove({ pullingDistance: refresherThreshold, dy: this.moveDis - refresherThreshold });
          }, 0.1);
          this.moveDis = refresherThreshold;
          this.refresherStatus = Enum.Refresher.Loading;
          this._doRefresherLoad();
        }
      } else {
        this._refresherEnd();
        this.isTouchmovingTimeout = u.delay(() => {
          this.isTouchmoving = false;
        }, this.refresherDefaultDuration);
      }
      this.scrollEnable = true;
      this.$emit("refresherTouchend", moveDis);
    },
    // 处理列表触摸开始事件
    _handleListTouchstart() {
      if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {
        index$1.hideKeyboard();
        this.$emit("hidedKeyboard");
      }
    },
    // 处理scroll-view bounce是否生效
    _handleScrollViewBounce({ bounce }) {
      if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {
        if (this.wxsScrollTop <= 5) {
          this.refresherTransition = "";
          this.scrollEnable = bounce;
        } else if (bounce) {
          this.scrollEnable = bounce;
        }
      }
    },
    // wxs正在下拉状态改变处理
    _handleWxsPullingDownStatusChange(onPullingDown) {
      this.wxsOnPullingDown = onPullingDown;
      if (onPullingDown && !this.useChatRecordMode) {
        this.renderPropScrollTop = 0;
      }
    },
    // wxs正在下拉处理
    _handleWxsPullingDown({ moveDis, diffDis }) {
      this._emitTouchmove({ pullingDistance: moveDis, dy: diffDis });
    },
    // wxs触摸方向改变
    _handleTouchDirectionChange({ direction }) {
      this.$emit("touchDirectionChange", direction);
    },
    // wxs通知更新其props
    _handlePropUpdate() {
      this.wxsPropType = u.getTime().toString();
    },
    // 下拉刷新结束
    _refresherEnd(shouldEndLoadingDelay = true, fromAddData = false, isUserPullDown = false, setLoading = true) {
      if (this.loadingType === Enum.LoadingType.Refresher) {
        const refresherCompleteDelay = fromAddData && (isUserPullDown || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0;
        const refresherStatus = refresherCompleteDelay > 0 ? Enum.Refresher.Complete : Enum.Refresher.Default;
        if (this.finalShowRefresherWhenReload) {
          const stackCount = this.refresherRevealStackCount;
          this.refresherRevealStackCount--;
          if (stackCount > 1)
            return;
        }
        this._cleanRefresherEndTimeout();
        this.refresherEndTimeout = u.delay(() => {
          this.refresherStatus = refresherStatus;
          if (refresherStatus !== Enum.Refresher.Complete) {
            this.isRefresherInComplete = false;
          }
        }, this.refresherStatus !== Enum.Refresher.Default && refresherStatus === Enum.Refresher.Default ? this.refresherCompleteDuration : 0);
        if (refresherCompleteDelay > 0) {
          this.isRefresherInComplete = true;
        }
        this._cleanRefresherCompleteTimeout();
        this.refresherCompleteTimeout = u.delay(() => {
          let animateDuration = 1;
          const animateType = this.refresherEndBounceEnabled && fromAddData ? "cubic-bezier(0.19,1.64,0.42,0.72)" : "linear";
          if (fromAddData) {
            animateDuration = this.refresherEndBounceEnabled ? this.refresherCompleteDuration / 1e3 : this.refresherCompleteDuration / 3e3;
          }
          this.refresherTransition = `transform ${fromAddData ? animateDuration : this.refresherDefaultDuration / 1e3}s ${animateType}`;
          this.wxsPropType = this.refresherTransition + "end" + u.getTime();
          this.moveDis = 0;
          if (refresherStatus === Enum.Refresher.Complete) {
            if (this.refresherCompleteSubTimeout) {
              clearTimeout(this.refresherCompleteSubTimeout);
              this.refresherCompleteSubTimeout = null;
            }
            this.refresherCompleteSubTimeout = u.delay(() => {
              this.$nextTick(() => {
                this.refresherStatus = Enum.Refresher.Default;
                this.isRefresherInComplete = false;
              });
            }, animateDuration * 800);
          }
          this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
        }, refresherCompleteDelay);
      }
      if (setLoading) {
        u.delay(() => this.loading = false, shouldEndLoadingDelay ? 10 : 0);
        isUserPullDown && this._onRestore();
      }
    },
    // 处理进入二楼
    _handleGoF2() {
      if (this.showF2 || !this.refresherF2Enabled)
        return;
      this.$emit("refresherF2Change", "go");
      if (!this.showRefresherF2)
        return;
      this.f2Transform = `translateY(${-this.superContentHeight}px)`;
      this.showF2 = true;
      u.delay(() => {
        this.f2Transform = "translateY(0px)";
      }, 100, "f2ShowDelay");
    },
    // 处理退出二楼
    _handleCloseF2() {
      if (!this.showF2 || !this.refresherF2Enabled)
        return;
      this.$emit("refresherF2Change", "close");
      if (!this.showRefresherF2)
        return;
      this.f2Transform = `translateY(${-this.superContentHeight}px)`;
      u.delay(() => {
        this.showF2 = false;
        this.nF2Opacity = 0;
      }, this.refresherF2Duration, "f2CloseDelay");
    },
    // 模拟用户手动触发下拉刷新
    _doRefresherRefreshAnimate() {
      this._cleanRefresherCompleteTimeout();
      const doRefreshAnimateAfter = !this.doRefreshAnimateAfter && this.finalShowRefresherWhenReload && this.customRefresherHeight === -1 && this.refresherThreshold === u.addUnit(80, this.unit);
      if (doRefreshAnimateAfter) {
        this.doRefreshAnimateAfter = true;
        return;
      }
      this.refresherRevealStackCount++;
      this.wxsPropType = "begin" + u.getTime();
      this.moveDis = this.finalRefresherThreshold;
      this.refresherStatus = Enum.Refresher.Loading;
      this.isTouchmoving = true;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this._doRefresherLoad(false);
    },
    // 触发下拉刷新
    _doRefresherLoad(isUserPullDown = true) {
      this._onRefresh(false, isUserPullDown);
      this.loading = true;
    },
    // 更新自定义下拉刷新view高度
    _updateCustomRefresherHeight() {
      this._getNodeClientRect(".zp-custom-refresher-slot-view").then((res) => {
        this.customRefresherHeight = res ? res[0].height : 0;
        this.showCustomRefresher = this.customRefresherHeight > 0;
        if (this.doRefreshAnimateAfter) {
          this.doRefreshAnimateAfter = false;
          this._doRefresherRefreshAnimate();
        }
      });
    },
    // emit pullingDown事件
    _emitTouchmove(e2) {
      e2.viewHeight = this.finalRefresherThreshold;
      e2.rate = e2.viewHeight > 0 ? e2.pullingDistance / e2.viewHeight : 0;
      this.hasTouchmove && this.oldPullingDistance !== e2.pullingDistance && this.$emit("refresherTouchmove", e2);
      this.oldPullingDistance = e2.pullingDistance;
    },
    // 清除refresherCompleteTimeout
    _cleanRefresherCompleteTimeout() {
      this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
    },
    // 清除refresherEndTimeout
    _cleanRefresherEndTimeout() {
      this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
    }
  }
};
const loadMoreModule = {
  props: {
    // 自定义底部加载更多样式
    loadingMoreCustomStyle: {
      type: Object,
      default: u.gc("loadingMoreCustomStyle", {})
    },
    // 自定义底部加载更多文字样式
    loadingMoreTitleCustomStyle: {
      type: Object,
      default: u.gc("loadingMoreTitleCustomStyle", {})
    },
    // 自定义底部加载更多加载中动画样式
    loadingMoreLoadingIconCustomStyle: {
      type: Object,
      default: u.gc("loadingMoreLoadingIconCustomStyle", {})
    },
    // 自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower
    loadingMoreLoadingIconType: {
      type: String,
      default: u.gc("loadingMoreLoadingIconType", "flower")
    },
    // 自定义底部加载更多加载中动画图标图片
    loadingMoreLoadingIconCustomImage: {
      type: String,
      default: u.gc("loadingMoreLoadingIconCustomImage", "")
    },
    // 底部加载更多加载中view是否展示旋转动画，默认为是
    loadingMoreLoadingAnimated: {
      type: Boolean,
      default: u.gc("loadingMoreLoadingAnimated", true)
    },
    // 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)，默认为是
    loadingMoreEnabled: {
      type: Boolean,
      default: u.gc("loadingMoreEnabled", true)
    },
    // 是否启用滑动到底部加载更多数据，默认为是
    toBottomLoadingMoreEnabled: {
      type: Boolean,
      default: u.gc("toBottomLoadingMoreEnabled", true)
    },
    // 滑动到底部状态为默认状态时，以加载中的状态展示，默认为否。若设置为是，可避免滚动到底部看到默认状态然后立刻变为加载中状态的问题，但分页数量未超过一屏时，不会显示【点击加载更多】
    loadingMoreDefaultAsLoading: {
      type: Boolean,
      default: u.gc("loadingMoreDefaultAsLoading", false)
    },
    // 滑动到底部"默认"文字，默认为【点击加载更多】
    loadingMoreDefaultText: {
      type: [String, Object],
      default: u.gc("loadingMoreDefaultText", null)
    },
    // 滑动到底部"加载中"文字，默认为【正在加载...】
    loadingMoreLoadingText: {
      type: [String, Object],
      default: u.gc("loadingMoreLoadingText", null)
    },
    // 滑动到底部"没有更多"文字，默认为【没有更多了】
    loadingMoreNoMoreText: {
      type: [String, Object],
      default: u.gc("loadingMoreNoMoreText", null)
    },
    // 滑动到底部"加载失败"文字，默认为【加载失败，点击重新加载】
    loadingMoreFailText: {
      type: [String, Object],
      default: u.gc("loadingMoreFailText", null)
    },
    // 当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view，默认为否
    hideNoMoreInside: {
      type: Boolean,
      default: u.gc("hideNoMoreInside", false)
    },
    // 当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。
    hideNoMoreByLimit: {
      type: Number,
      default: u.gc("hideNoMoreByLimit", 0)
    },
    // 是否显示默认的加载更多text，默认为是
    showDefaultLoadingMoreText: {
      type: Boolean,
      default: u.gc("showDefaultLoadingMoreText", true)
    },
    // 是否显示没有更多数据的view
    showLoadingMoreNoMoreView: {
      type: Boolean,
      default: u.gc("showLoadingMoreNoMoreView", true)
    },
    // 是否显示没有更多数据的分割线，默认为是
    showLoadingMoreNoMoreLine: {
      type: Boolean,
      default: u.gc("showLoadingMoreNoMoreLine", true)
    },
    // 自定义底部没有更多数据的分割线样式
    loadingMoreNoMoreLineCustomStyle: {
      type: Object,
      default: u.gc("loadingMoreNoMoreLineCustomStyle", {})
    },
    // 当分页未满一屏时，是否自动加载更多，默认为否(nvue无效)
    insideMore: {
      type: Boolean,
      default: u.gc("insideMore", false)
    },
    // 距底部/右边多远时（单位px），触发 scrolltolower 事件，默认为100rpx
    lowerThreshold: {
      type: [Number, String],
      default: u.gc("lowerThreshold", "100rpx")
    }
  },
  data() {
    return {
      M: Enum.More,
      // 底部加载更多状态
      loadingStatus: Enum.More.Default,
      // 在渲染之后的底部加载更多状态
      loadingStatusAfterRender: Enum.More.Default,
      // 底部加载更多时间戳
      loadingMoreTimeStamp: 0,
      // 底部加载更多slot
      loadingMoreDefaultSlot: null,
      // 是否展示底部加载更多
      showLoadingMore: false,
      // 是否是开发者自定义的加载更多，-1代表交由z-paging自行判断；1代表没有更多了；0代表还有更多数据
      customNoMore: -1
    };
  },
  computed: {
    // 底部加载更多配置
    zLoadMoreConfig() {
      return {
        status: this.loadingStatusAfterRender,
        defaultAsLoading: this.loadingMoreDefaultAsLoading || this.useChatRecordMode && this.chatLoadingMoreDefaultAsLoading,
        defaultThemeStyle: this.finalLoadingMoreThemeStyle,
        customStyle: this.loadingMoreCustomStyle,
        titleCustomStyle: this.loadingMoreTitleCustomStyle,
        iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,
        loadingIconType: this.loadingMoreLoadingIconType,
        loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,
        loadingAnimated: this.loadingMoreLoadingAnimated,
        showNoMoreLine: this.showLoadingMoreNoMoreLine,
        noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,
        defaultText: this.finalLoadingMoreDefaultText,
        loadingText: this.finalLoadingMoreLoadingText,
        noMoreText: this.finalLoadingMoreNoMoreText,
        failText: this.finalLoadingMoreFailText,
        hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering,
        unit: this.unit,
        isChat: this.useChatRecordMode,
        chatDefaultAsLoading: this.chatLoadingMoreDefaultAsLoading
      };
    },
    // 最终的底部加载更多主题
    finalLoadingMoreThemeStyle() {
      return this.loadingMoreThemeStyle.length ? this.loadingMoreThemeStyle : this.defaultThemeStyle;
    },
    // 最终的底部加载更多触发阈值
    finalLowerThreshold() {
      return u.convertToPx(this.lowerThreshold);
    },
    // 是否显示默认状态下的底部加载更多
    showLoadingMoreDefault() {
      return this._showLoadingMore("Default");
    },
    // 是否显示加载中状态下的底部加载更多
    showLoadingMoreLoading() {
      return this._showLoadingMore("Loading");
    },
    // 是否显示没有更多了状态下的底部加载更多
    showLoadingMoreNoMore() {
      return this._showLoadingMore("NoMore");
    },
    // 是否显示加载失败状态下的底部加载更多
    showLoadingMoreFail() {
      return this._showLoadingMore("Fail");
    },
    // 是否显示自定义状态下的底部加载更多
    showLoadingMoreCustom() {
      return this._showLoadingMore("Custom");
    },
    // 底部加载更多固定高度
    loadingMoreFixedHeight() {
      return u.addUnit("80rpx", this.unit);
    }
  },
  methods: {
    // 页面滚动到底部时通知z-paging进行进一步处理
    pageReachBottom() {
      !this.useChatRecordMode && this.toBottomLoadingMoreEnabled && this._onLoadingMore("toBottom");
    },
    // 手动触发上拉加载更多(非必须，可依据具体需求使用)
    doLoadMore(type2) {
      this._onLoadingMore(type2);
    },
    // 通过@scroll事件检测是否滚动到了底部(顺带检测下是否滚动到了顶部)
    _checkScrolledToBottom(scrollDiff, checked = false) {
      if (this.cacheScrollNodeHeight === -1) {
        this._getNodeClientRect(".zp-scroll-view").then((res) => {
          if (res) {
            const scrollNodeHeight = res[0].height;
            this.cacheScrollNodeHeight = scrollNodeHeight;
            if (scrollDiff - scrollNodeHeight <= this.finalLowerThreshold) {
              this._onLoadingMore("toBottom");
            }
          }
        });
      } else {
        if (scrollDiff - this.cacheScrollNodeHeight <= this.finalLowerThreshold) {
          this._onLoadingMore("toBottom");
        } else if (scrollDiff - this.cacheScrollNodeHeight <= 500 && !checked) {
          u.delay(() => {
            this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
              if (res) {
                this.oldScrollTop = res[0].scrollTop;
                const newScrollDiff = res[0].scrollHeight - this.oldScrollTop;
                this._checkScrolledToBottom(newScrollDiff, true);
              }
            });
          }, 150, "checkScrolledToBottomDelay");
        }
        if (this.oldScrollTop <= 150 && this.oldScrollTop !== 0) {
          u.delay(() => {
            if (this.oldScrollTop !== 0) {
              this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                if (res && res[0].scrollTop === 0 && this.oldScrollTop !== 0) {
                  this._onScrollToUpper();
                }
              });
            }
          }, 150, "checkScrolledToTopDelay");
        }
      }
    },
    // 触发加载更多时调用,from:toBottom-滑动到底部触发；1、click-点击加载更多触发
    _onLoadingMore(from = "click") {
      if (this.isIos && from === "toBottom" && !this.scrollToBottomBounceEnabled && this.scrollEnable) {
        this.scrollEnable = false;
        this.$nextTick(() => {
          this.scrollEnable = true;
        });
      }
      this.$emit("scrolltolower", from);
      if (this.refresherOnly || !this.loadingMoreEnabled || !(this.loadingStatus === Enum.More.Default || this.loadingStatus === Enum.More.Fail) || this.loading || this.showEmpty)
        return;
      if (!this.isIos && !this.refresherOnly && !this.usePageScroll) {
        const currentTimestamp = u.getTime();
        if (this.loadingMoreTimeStamp > 0 && currentTimestamp - this.loadingMoreTimeStamp < 100) {
          this.loadingMoreTimeStamp = 0;
          return;
        }
      }
      this._doLoadingMore();
    },
    // 处理开始加载更多
    _doLoadingMore() {
      if (this.pageNo >= this.defaultPageNo && this.loadingStatus !== Enum.More.NoMore) {
        this.pageNo++;
        this._startLoading(false);
        if (this.isLocalPaging) {
          this._localPagingQueryList(this.pageNo, this.defaultPageSize, this.localPagingLoadingTime, (res) => {
            this.completeByTotal(res, this.totalLocalPagingList.length);
            this.queryFrom = Enum.QueryFrom.LoadingMore;
          });
        } else {
          this._emitQuery(this.pageNo, this.defaultPageSize, Enum.QueryFrom.LoadingMore);
          this._callMyParentQuery();
        }
        this.loadingType = Enum.LoadingType.LoadingMore;
      }
    },
    // (预处理)判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
    _preCheckShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode) {
      if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreByLimit > 0 && newVal.length) {
        this.showLoadingMore = newVal.length > this.hideNoMoreByLimit;
      } else if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreInside && newVal.length || this.insideMore && this.insideOfPaging !== false && newVal.length) {
        this.$nextTick(() => {
          this._checkShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode);
        });
        if (this.insideMore && this.insideOfPaging !== false && newVal.length) {
          this.showLoadingMore = newVal.length;
        }
      } else {
        this.showLoadingMore = newVal.length;
      }
    },
    // 判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
    _checkShowNoMoreInside(totalData, oldScrollViewNode, oldPagingContainerNode) {
      return __async(this, null, function* () {
        try {
          const scrollViewNode = oldScrollViewNode || (yield this._getNodeClientRect(".zp-scroll-view"));
          if (this.usePageScroll) {
            if (scrollViewNode) {
              const scrollViewTotalH = scrollViewNode[0].top + scrollViewNode[0].height;
              this.insideOfPaging = scrollViewTotalH < this.windowHeight;
              if (this.hideNoMoreInside) {
                this.showLoadingMore = !this.insideOfPaging;
              }
              this._updateInsideOfPaging();
            }
          } else {
            const pagingContainerNode = oldPagingContainerNode || (yield this._getNodeClientRect(".zp-paging-container-content"));
            const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
            const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
            this.insideOfPaging = pagingContainerH < scrollViewH;
            if (this.hideNoMoreInside) {
              this.showLoadingMore = !this.insideOfPaging;
            }
            this._updateInsideOfPaging();
          }
        } catch (e2) {
          this.insideOfPaging = !totalData.length;
          if (this.hideNoMoreInside) {
            this.showLoadingMore = !this.insideOfPaging;
          }
          this._updateInsideOfPaging();
        }
      });
    },
    // 是否要展示上拉加载更多view
    _showLoadingMore(type2) {
      if (!this.showLoadingMoreWhenReload && (!(this.loadingStatus === Enum.More.Default ? this.nShowBottom : true) || !this.realTotalData.length))
        return false;
      if ((!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) && !this.showLoadingMore || !this.loadingMoreEnabled && (!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) || this.refresherOnly) {
        return false;
      }
      if (this.useChatRecordMode && type2 !== "Loading")
        return false;
      if (!this.zSlots)
        return false;
      if (type2 === "Custom") {
        return this.showDefaultLoadingMoreText && !(this.loadingStatus === Enum.More.NoMore && !this.showLoadingMoreNoMoreView);
      }
      const res = this.loadingStatus === Enum.More[type2] && this.zSlots[`loadingMore${type2}`] && (type2 === "NoMore" ? this.showLoadingMoreNoMoreView : true);
      return res;
    }
  }
};
const loadingModule = {
  props: {
    // 第一次加载后自动隐藏loading slot，默认为是
    autoHideLoadingAfterFirstLoaded: {
      type: Boolean,
      default: u.gc("autoHideLoadingAfterFirstLoaded", true)
    },
    // loading slot是否铺满屏幕并固定，默认为否
    loadingFullFixed: {
      type: Boolean,
      default: u.gc("loadingFullFixed", false)
    },
    // 是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示，默认为false。
    autoShowSystemLoading: {
      type: Boolean,
      default: u.gc("autoShowSystemLoading", false)
    },
    // 显示系统Loading时是否显示透明蒙层，防止触摸穿透，默认为是(H5、App、微信小程序、百度小程序有效)
    systemLoadingMask: {
      type: Boolean,
      default: u.gc("systemLoadingMask", true)
    },
    // 显示系统Loading时显示的文字，默认为"加载中"
    systemLoadingText: {
      type: [String, Object],
      default: u.gc("systemLoadingText", null)
    }
  },
  data() {
    return {
      loading: false,
      loadingForNow: false
    };
  },
  watch: {
    // loading状态
    loadingStatus(newVal) {
      this.$emit("loadingStatusChange", newVal);
      this.$nextTick(() => {
        this.loadingStatusAfterRender = newVal;
      });
      if (this.useChatRecordMode) {
        if (this.isFirstPage && (newVal === Enum.More.NoMore || newVal === Enum.More.Fail)) {
          this.isFirstPageAndNoMore = true;
          return;
        }
      }
      this.isFirstPageAndNoMore = false;
    },
    loading(newVal) {
      if (newVal) {
        this.loadingForNow = newVal;
      }
    }
  },
  computed: {
    // 是否显示loading
    showLoading() {
      if (this.firstPageLoaded || !this.loading || !this.loadingForNow)
        return false;
      if (this.finalShowSystemLoading) {
        index$1.showLoading({
          title: this.finalSystemLoadingText,
          mask: this.systemLoadingMask
        });
      }
      return this.autoHideLoadingAfterFirstLoaded ? this.fromEmptyViewReload ? true : !this.pagingLoaded : this.loadingType === Enum.LoadingType.Refresher;
    },
    // 最终的是否显示系统loading
    finalShowSystemLoading() {
      return this.autoShowSystemLoading && this.loadingType === Enum.LoadingType.Refresher;
    }
  },
  methods: {
    // 处理开始加载更多状态
    _startLoading(isReload = false) {
      if (this.showLoadingMoreWhenReload && !this.isUserPullDown || !isReload) {
        this.loadingStatus = Enum.More.Loading;
      }
      this.loading = true;
    },
    // 停止系统loading和refresh
    _endSystemLoadingAndRefresh() {
      this.finalShowSystemLoading && index$1.hideLoading();
      !this.useCustomRefresher && index$1.stopPullDownRefresh();
    }
  }
};
const chatRecordModerModule = {
  props: {
    // 使用聊天记录模式，默认为否
    useChatRecordMode: {
      type: Boolean,
      default: u.gc("useChatRecordMode", false)
    },
    // 使用聊天记录模式时滚动到顶部后，列表垂直移动偏移距离。默认0rpx。单位px（暂时无效）
    chatRecordMoreOffset: {
      type: [Number, String],
      default: u.gc("chatRecordMoreOffset", "0rpx")
    },
    // 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时候自动隐藏键盘，默认为是
    autoHideKeyboardWhenChat: {
      type: Boolean,
      default: u.gc("autoHideKeyboardWhenChat", true)
    },
    // 使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度，默认为是
    autoAdjustPositionWhenChat: {
      type: Boolean,
      default: u.gc("autoAdjustPositionWhenChat", true)
    },
    // 使用聊天记录模式中键盘弹出时占位高度偏移距离。默认0rpx。单位px
    chatAdjustPositionOffset: {
      type: [Number, String],
      default: u.gc("chatAdjustPositionOffset", "0rpx")
    },
    // 使用聊天记录模式中键盘弹出时是否自动滚动到底部，默认为否
    autoToBottomWhenChat: {
      type: Boolean,
      default: u.gc("autoToBottomWhenChat", false)
    },
    // 使用聊天记录模式中reload时是否显示chatLoading，默认为否
    showChatLoadingWhenReload: {
      type: Boolean,
      default: u.gc("showChatLoadingWhenReload", false)
    },
    // 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示，默认为是。若设置为否，则默认会显示【点击加载更多】，然后才会显示loading
    chatLoadingMoreDefaultAsLoading: {
      type: Boolean,
      default: u.gc("chatLoadingMoreDefaultAsLoading", true)
    }
  },
  data() {
    return {
      // 键盘高度
      keyboardHeight: 0,
      // 键盘高度是否未改变，此时占位高度变化不需要动画效果
      isKeyboardHeightChanged: false
    };
  },
  computed: {
    finalChatRecordMoreOffset() {
      return u.convertToPx(this.chatRecordMoreOffset);
    },
    finalChatAdjustPositionOffset() {
      return u.convertToPx(this.chatAdjustPositionOffset);
    },
    // 聊天记录模式旋转180度style
    chatRecordRotateStyle() {
      let cellStyle;
      cellStyle = this.useChatRecordMode ? { transform: "scaleY(-1)" } : {};
      this.$emit("update:cellStyle", cellStyle);
      this.$emit("cellStyleChange", cellStyle);
      this.$nextTick(() => {
        if (this.isFirstPage && this.isChatRecordModeAndNotInversion) {
          this.$nextTick(() => {
            this._scrollToBottom(false);
            u.delay(() => {
              this._scrollToBottom(false);
              u.delay(() => {
                this._scrollToBottom(false);
              }, 50);
            }, 50);
          });
        }
      });
      return cellStyle;
    },
    // 是否是聊天记录列表并且有配置transform
    isChatRecordModeHasTransform() {
      return this.useChatRecordMode && this.chatRecordRotateStyle && this.chatRecordRotateStyle.transform;
    },
    // 是否是聊天记录列表并且列表未倒置
    isChatRecordModeAndNotInversion() {
      return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(1)";
    },
    // 是否是聊天记录列表并且列表倒置
    isChatRecordModeAndInversion() {
      return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(-1)";
    },
    // 最终的聊天记录模式中底部安全区域的高度，如果开启了底部安全区域并且键盘未弹出，则添加底部区域高度
    chatRecordModeSafeAreaBottom() {
      return this.safeAreaInsetBottom && !this.keyboardHeight ? this.safeAreaBottom : 0;
    }
  },
  mounted() {
    if (this.useChatRecordMode) {
      index$1.onKeyboardHeightChange(this._handleKeyboardHeightChange);
    }
  },
  methods: {
    // 添加聊天记录
    addChatRecordData(data, toBottom = true, toBottomWithAnimate = true) {
      if (!this.useChatRecordMode)
        return;
      this.isTotalChangeFromAddData = true;
      this.addDataFromTop(data, toBottom, toBottomWithAnimate);
    },
    // 手动触发滚动到顶部加载更多，聊天记录模式时有效
    doChatRecordLoadMore() {
      this.useChatRecordMode && this._onLoadingMore("click");
    },
    // 处理键盘高度变化
    _handleKeyboardHeightChange(res) {
      this.$emit("keyboardHeightChange", res);
      if (this.autoAdjustPositionWhenChat) {
        this.isKeyboardHeightChanged = true;
        this.keyboardHeight = res.height > 0 ? res.height + this.finalChatAdjustPositionOffset : res.height;
      }
      if (this.autoToBottomWhenChat && this.keyboardHeight > 0) {
        u.delay(() => {
          this.scrollToBottom(false);
          u.delay(() => {
            this.scrollToBottom(false);
          });
        });
      }
    }
  }
};
const scrollerModule = {
  props: {
    // 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐
    usePageScroll: {
      type: Boolean,
      default: u.gc("usePageScroll", false)
    },
    // 是否可以滚动，使用内置scroll-view和nvue时有效，默认为是
    scrollable: {
      type: Boolean,
      default: u.gc("scrollable", true)
    },
    // 控制是否出现滚动条，默认为是
    showScrollbar: {
      type: Boolean,
      default: u.gc("showScrollbar", true)
    },
    // 是否允许横向滚动，默认为否
    scrollX: {
      type: Boolean,
      default: u.gc("scrollX", false)
    },
    // iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。
    scrollToTopBounceEnabled: {
      type: Boolean,
      default: u.gc("scrollToTopBounceEnabled", false)
    },
    // iOS设备上滚动到底部时是否允许回弹效果，默认为是。
    scrollToBottomBounceEnabled: {
      type: Boolean,
      default: u.gc("scrollToBottomBounceEnabled", true)
    },
    // 在设置滚动条位置时使用动画过渡，默认为否
    scrollWithAnimation: {
      type: Boolean,
      default: u.gc("scrollWithAnimation", false)
    },
    // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
    scrollIntoView: {
      type: String,
      default: u.gc("scrollIntoView", "")
    }
  },
  data() {
    return {
      scrollTop: 0,
      oldScrollTop: 0,
      scrollViewStyle: {},
      scrollViewContainerStyle: {},
      scrollViewInStyle: {},
      pageScrollTop: -1,
      scrollEnable: true,
      privateScrollWithAnimation: -1,
      cacheScrollNodeHeight: -1,
      superContentHeight: 0
    };
  },
  watch: {
    oldScrollTop(newVal) {
      !this.usePageScroll && this._scrollTopChange(newVal, false);
    },
    pageScrollTop(newVal) {
      this.usePageScroll && this._scrollTopChange(newVal, true);
    },
    usePageScroll: {
      handler(newVal) {
        this.loaded && this.autoHeight && this._setAutoHeight(!newVal);
      },
      immediate: true
    },
    finalScrollTop(newVal) {
      this.renderPropScrollTop = newVal < 6 ? 0 : 10;
    }
  },
  computed: {
    finalScrollWithAnimation() {
      if (this.privateScrollWithAnimation !== -1) {
        return this.privateScrollWithAnimation === 1;
      }
      return this.scrollWithAnimation;
    },
    finalScrollViewStyle() {
      if (this.superContentZIndex != 1) {
        this.scrollViewStyle["z-index"] = this.superContentZIndex;
        this.scrollViewStyle["position"] = "relative";
      }
      return this.scrollViewStyle;
    },
    finalScrollTop() {
      return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
    },
    // 当前是否是旧版webview
    finalIsOldWebView() {
      return this.isOldWebView && !this.usePageScroll;
    },
    // 当前scroll-view/list-view是否允许滚动
    finalScrollable() {
      return this.scrollable && !this.usePageScroll && this.scrollEnable && (this.refresherCompleteScrollable ? true : this.refresherStatus !== Enum.Refresher.Complete) && (this.refresherRefreshingScrollable ? true : this.refresherStatus !== Enum.Refresher.Loading);
    }
  },
  methods: {
    // 滚动到顶部，animate为是否展示滚动动画，默认为是
    scrollToTop(animate, checkReverse = true) {
      if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
        this.scrollToBottom(animate, false);
        return;
      }
      this.$nextTick(() => {
        this._scrollToTop(animate, false);
      });
    },
    // 滚动到底部，animate为是否展示滚动动画，默认为是
    scrollToBottom(animate, checkReverse = true) {
      if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
        this.scrollToTop(animate, false);
        return;
      }
      this.$nextTick(() => {
        this._scrollToBottom(animate);
      });
    },
    // 滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewById(sel, offset, animate) {
      this._scrollIntoView(sel, offset, animate);
    },
    // 滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByNodeTop(nodeTop, offset, animate) {
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
      });
    },
    // 滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollToY(y, offset, animate) {
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this._scrollToY(y, offset, animate);
      });
    },
    // 滚动到指定view(nvue中和虚拟列表中有效)。index为需要滚动的view的index(第几个，从0开始)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByIndex(index2, offset, animate) {
      if (index2 >= this.realTotalData.length) {
        u.consoleErr("当前滚动的index超出已渲染列表长度，请先通过refreshToPage加载到对应index页并等待渲染成功后再调用此方法！");
        return;
      }
      this.$nextTick(() => {
        if (this.finalUseVirtualList) {
          const isCellFixed = this.cellHeightMode === Enum.CellHeightMode.Fixed;
          u.delay(() => {
            if (this.finalUseVirtualList) {
              const scrollTop = isCellFixed ? this.virtualCellHeight * index2 : this.virtualHeightCacheList[index2].lastTotalHeight;
              this.scrollToY(scrollTop, offset, animate);
            }
          }, isCellFixed ? 0 : 100);
        }
      });
    },
    // 滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByView(view, offset, animate) {
      this._scrollIntoView(view, offset, animate);
    },
    // 当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新
    updatePageScrollTop(value2) {
      this.pageScrollTop = value2;
    },
    // 当使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法
    updatePageScrollTopHeight() {
      this._updatePageScrollTopOrBottomHeight("top");
    },
    // 当使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法
    updatePageScrollBottomHeight() {
      this._updatePageScrollTopOrBottomHeight("bottom");
    },
    // 更新slot="left"和slot="right"宽度，当slot="left"或slot="right"宽度动态改变时调用
    updateLeftAndRightWidth() {
      if (!this.finalIsOldWebView)
        return;
      this.$nextTick(() => this._updateLeftAndRightWidth(this.scrollViewContainerStyle, "zp-page"));
    },
    // 更新z-paging内置scroll-view的scrollTop
    updateScrollViewScrollTop(scrollTop, animate = true) {
      this._updatePrivateScrollWithAnimation(animate);
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this.scrollTop = scrollTop;
        this.oldScrollTop = this.scrollTop;
      });
    },
    // 当滚动到顶部时
    _onScrollToUpper() {
      this.$emit("scrolltoupper");
      this.$emit("scrollTopChange", 0);
      this.$nextTick(() => {
        this.oldScrollTop = 0;
      });
    },
    // 当滚动到底部时
    _onScrollToLower(e2) {
      (!e2.detail || !e2.detail.direction || e2.detail.direction === "bottom") && this.toBottomLoadingMoreEnabled && this._onLoadingMore(this.useChatRecordMode ? "click" : "toBottom");
    },
    // 滚动到顶部
    _scrollToTop(animate = true, isPrivate = true) {
      if (this.usePageScroll) {
        this.$nextTick(() => {
          index$1.pageScrollTo({
            scrollTop: 0,
            duration: animate ? 100 : 0
          });
        });
        return;
      }
      this._updatePrivateScrollWithAnimation(animate);
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this.scrollTop = 0;
        this.oldScrollTop = this.scrollTop;
      });
    },
    // 滚动到底部
    _scrollToBottom(animate = true) {
      return __async(this, null, function* () {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            index$1.pageScrollTo({
              scrollTop: Number.MAX_VALUE,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        try {
          this._updatePrivateScrollWithAnimation(animate);
          const pagingContainerNode = yield this._getNodeClientRect(".zp-paging-container");
          const scrollViewNode = yield this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
          const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
          if (pagingContainerH > scrollViewH) {
            this.scrollTop = this.oldScrollTop;
            this.$nextTick(() => {
              this.scrollTop = pagingContainerH - scrollViewH + this.virtualPlaceholderTopHeight;
              this.oldScrollTop = this.scrollTop;
            });
          }
        } catch (e2) {
        }
      });
    },
    // 滚动到指定view
    _scrollIntoView(sel, offset = 0, animate = false, finishCallback) {
      try {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._getNodeClientRect("#" + sel.replace("#", ""), this.$parent).then((node) => {
            if (node) {
              let nodeTop = node[0].top;
              this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
              finishCallback && finishCallback();
            }
          });
        });
      } catch (e2) {
      }
    },
    // 通过nodeTop滚动到指定view
    _scrollIntoViewByNodeTop(nodeTop, offset = 0, animate = false) {
      if (this.isChatRecordModeAndInversion) {
        this._getNodeClientRect(".zp-scroll-view").then((sNode) => {
          if (sNode) {
            this._scrollToY(sNode[0].height - nodeTop, offset, animate, true);
          }
        });
      } else {
        this._scrollToY(nodeTop, offset, animate, true);
      }
    },
    // 滚动到指定位置
    _scrollToY(y, offset = 0, animate = false, addScrollTop = false) {
      this._updatePrivateScrollWithAnimation(animate);
      u.delay(() => {
        if (this.usePageScroll) {
          if (addScrollTop && this.pageScrollTop !== -1) {
            y += this.pageScrollTop;
          }
          const scrollTop = y - offset;
          index$1.pageScrollTo({
            scrollTop,
            duration: animate ? 100 : 0
          });
        } else {
          if (addScrollTop) {
            y += this.oldScrollTop;
          }
          this.scrollTop = y - offset;
        }
      }, 10);
    },
    // scroll-view滚动中
    _scroll(e2) {
      this.$emit("scroll", e2);
      const scrollTop = e2.detail.scrollTop;
      this.finalUseVirtualList && this._updateVirtualScroll(scrollTop, this.oldScrollTop - scrollTop);
      this.oldScrollTop = scrollTop;
      const scrollDiff = e2.detail.scrollHeight - this.oldScrollTop;
      !this.isIos && this._checkScrolledToBottom(scrollDiff);
    },
    // 更新内置的scroll-view是否启用滚动动画
    _updatePrivateScrollWithAnimation(animate) {
      this.privateScrollWithAnimation = animate ? 1 : 0;
      u.delay(() => this.$nextTick(() => {
        this.privateScrollWithAnimation = -1;
      }), 100, "updateScrollWithAnimationDelay");
    },
    // 检测scrollView是否要铺满屏幕
    _doCheckScrollViewShouldFullHeight(totalData) {
      if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {
        this.$nextTick(() => {
          this._checkScrollViewShouldFullHeight((scrollViewNode, pagingContainerNode) => {
            this._preCheckShowNoMoreInside(totalData, scrollViewNode, pagingContainerNode);
          });
        });
      } else {
        this._preCheckShowNoMoreInside(totalData);
      }
    },
    // 检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)
    _checkScrollViewShouldFullHeight(callback) {
      return __async(this, null, function* () {
        try {
          const scrollViewNode = yield this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerNode = yield this._getNodeClientRect(".zp-paging-container-content");
          if (!scrollViewNode || !pagingContainerNode)
            return;
          const scrollViewHeight = pagingContainerNode[0].height;
          const scrollViewTop = scrollViewNode[0].top;
          if (this.isAddedData && scrollViewHeight + scrollViewTop <= this.windowHeight) {
            this._setAutoHeight(true, scrollViewNode);
            callback(scrollViewNode, pagingContainerNode);
          } else {
            this._setAutoHeight(false);
            callback(null, null);
          }
        } catch (e2) {
          callback(null, null);
        }
      });
    },
    // 更新缓存中z-paging整个内容容器高度
    _updateCachedSuperContentHeight() {
      return __async(this, null, function* () {
        const superContentNode = yield this._getNodeClientRect(".z-paging-content");
        if (superContentNode) {
          this.superContentHeight = superContentNode[0].height;
        }
      });
    },
    // scrollTop改变时触发
    _scrollTopChange(newVal, isPageScrollTop) {
      this.$emit("scrollTopChange", newVal);
      this.$emit("update:scrollTop", newVal);
      this._checkShouldShowBackToTop(newVal);
      const scrollTop = newVal > 5 ? 6 : 0;
      if (isPageScrollTop && this.wxsPageScrollTop !== scrollTop) {
        this.wxsPageScrollTop = scrollTop;
      } else if (!isPageScrollTop && this.wxsScrollTop !== scrollTop) {
        this.wxsScrollTop = scrollTop;
        if (scrollTop > 6) {
          this.scrollEnable = true;
        }
      }
    },
    // 更新使用页面滚动时slot="top"或"bottom"插入view的高度
    _updatePageScrollTopOrBottomHeight(type2) {
      if (!this.usePageScroll)
        return;
      this._doCheckScrollViewShouldFullHeight(this.realTotalData);
      const node = `.zp-page-${type2}`;
      const marginText = `margin${type2.slice(0, 1).toUpperCase() + type2.slice(1)}`;
      let safeAreaInsetBottomAdd = this.safeAreaInsetBottom;
      this.$nextTick(() => {
        let delayTime = 0;
        u.delay(() => {
          this._getNodeClientRect(node).then((res) => {
            if (res) {
              let pageScrollNodeHeight = res[0].height;
              if (type2 === "bottom") {
                if (safeAreaInsetBottomAdd) {
                  pageScrollNodeHeight += this.safeAreaBottom;
                }
              } else {
                this.cacheTopHeight = pageScrollNodeHeight;
              }
              this.$set(this.scrollViewStyle, marginText, `${pageScrollNodeHeight}px`);
            } else if (safeAreaInsetBottomAdd) {
              this.$set(this.scrollViewStyle, marginText, `${this.safeAreaBottom}px`);
            }
          });
        }, delayTime);
      });
    }
  }
};
const backToTopModule = {
  props: {
    // 自动显示点击返回顶部按钮，默认为否
    autoShowBackToTop: {
      type: Boolean,
      default: u.gc("autoShowBackToTop", false)
    },
    // 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx
    backToTopThreshold: {
      type: [Number, String],
      default: u.gc("backToTopThreshold", "400rpx")
    },
    // 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
    backToTopImg: {
      type: String,
      default: u.gc("backToTopImg", "")
    },
    // 点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是
    backToTopWithAnimate: {
      type: Boolean,
      default: u.gc("backToTopWithAnimate", true)
    },
    // 点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx
    backToTopBottom: {
      type: [Number, String],
      default: u.gc("backToTopBottom", "160rpx")
    },
    // 点击返回顶部按钮的自定义样式
    backToTopStyle: {
      type: Object,
      default: u.gc("backToTopStyle", {})
    },
    // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是
    enableBackToTop: {
      type: Boolean,
      default: u.gc("enableBackToTop", true)
    }
  },
  data() {
    return {
      // 点击返回顶部的class
      backToTopClass: "zp-back-to-top zp-back-to-top-hide",
      // 上次点击返回顶部的时间
      lastBackToTopShowTime: 0,
      // 点击返回顶部显示的class是否在展示中，使得按钮展示/隐藏过度效果更自然
      showBackToTopClass: false
    };
  },
  computed: {
    backToTopThresholdUnitConverted() {
      return u.addUnit(this.backToTopThreshold, this.unit);
    },
    backToTopBottomUnitConverted() {
      return u.addUnit(this.backToTopBottom, this.unit);
    },
    finalEnableBackToTop() {
      return this.usePageScroll ? false : this.enableBackToTop;
    },
    finalBackToTopThreshold() {
      return u.convertToPx(this.backToTopThresholdUnitConverted);
    },
    finalBackToTopStyle() {
      const backToTopStyle = this.backToTopStyle;
      if (!backToTopStyle.bottom) {
        backToTopStyle.bottom = this.windowBottom + u.convertToPx(this.backToTopBottomUnitConverted) + "px";
      }
      if (!backToTopStyle.position) {
        backToTopStyle.position = this.usePageScroll ? "fixed" : "absolute";
      }
      return backToTopStyle;
    },
    finalBackToTopClass() {
      return `${this.backToTopClass} zp-back-to-top-${this.unit}`;
    }
  },
  methods: {
    // 点击了返回顶部
    _backToTopClick() {
      let callbacked = false;
      this.$emit("backToTopClick", (toTop) => {
        (toTop === void 0 || toTop === true) && this._handleToTop();
        callbacked = true;
      });
      this.$nextTick(() => {
        !callbacked && this._handleToTop();
      });
    },
    // 处理滚动到顶部（聊天记录模式中为滚动到底部）
    _handleToTop() {
      !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0);
      !this.useChatRecordMode ? this.scrollToTop(this.backToTopWithAnimate) : this.scrollToBottom(this.backToTopWithAnimate);
    },
    // 判断是否要显示返回顶部按钮
    _checkShouldShowBackToTop(scrollTop) {
      if (!this.autoShowBackToTop) {
        this.showBackToTopClass = false;
        return;
      }
      if (scrollTop > this.finalBackToTopThreshold) {
        if (!this.showBackToTopClass) {
          this.showBackToTopClass = true;
          this.lastBackToTopShowTime = (/* @__PURE__ */ new Date()).getTime();
          u.delay(() => {
            this.backToTopClass = "zp-back-to-top zp-back-to-top-show";
          }, 300);
        }
      } else {
        if (this.showBackToTopClass) {
          this.backToTopClass = "zp-back-to-top zp-back-to-top-hide";
          u.delay(() => {
            this.showBackToTopClass = false;
          }, (/* @__PURE__ */ new Date()).getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300);
        }
      }
    }
  }
};
const virtualListModule = {
  props: {
    // 是否使用虚拟列表，默认为否
    useVirtualList: {
      type: Boolean,
      default: u.gc("useVirtualList", false)
    },
    // 在使用虚拟列表时，是否使用兼容模式，默认为否
    useCompatibilityMode: {
      type: Boolean,
      default: u.gc("useCompatibilityMode", false)
    },
    // 使用兼容模式时传递的附加数据
    extraData: {
      type: Object,
      default: u.gc("extraData", {})
    },
    // 是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true
    useInnerList: {
      type: Boolean,
      default: u.gc("useInnerList", false)
    },
    // 强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况
    forceCloseInnerList: {
      type: Boolean,
      default: u.gc("forceCloseInnerList", false)
    },
    // 内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项
    cellKeyName: {
      type: String,
      default: u.gc("cellKeyName", "")
    },
    // innerList样式
    innerListStyle: {
      type: Object,
      default: u.gc("innerListStyle", {})
    },
    // innerCell样式
    innerCellStyle: {
      type: Object,
      default: u.gc("innerCellStyle", {})
    },
    // 预加载的列表可视范围(列表高度)页数，默认为12，即预加载当前页及上下各12页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题
    preloadPage: {
      type: [Number, String],
      default: u.gc("preloadPage", 12),
      validator: (value2) => {
        if (value2 <= 0)
          u.consoleErr("preload-page必须大于0！");
        return value2 > 0;
      }
    },
    // 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。
    cellHeightMode: {
      type: String,
      default: u.gc("cellHeightMode", Enum.CellHeightMode.Fixed)
    },
    // 固定的cell高度，cellHeightMode=fixed才有效，若设置了值，则不计算第一个cell高度而使用设置的cell高度
    fixedCellHeight: {
      type: [Number, String],
      default: u.gc("fixedCellHeight", 0)
    },
    // 虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2
    virtualListCol: {
      type: [Number, String],
      default: u.gc("virtualListCol", 1)
    },
    // 虚拟列表scroll取样帧率，默认为80，过低容易出现白屏问题，过高容易出现卡顿问题
    virtualScrollFps: {
      type: [Number, String],
      default: u.gc("virtualScrollFps", 80)
    }
  },
  data() {
    return {
      virtualListKey: u.getInstanceId(),
      virtualPageHeight: 0,
      virtualCellHeight: 0,
      virtualScrollTimeStamp: 0,
      virtualList: [],
      virtualPlaceholderTopHeight: 0,
      virtualPlaceholderBottomHeight: 0,
      virtualTopRangeIndex: 0,
      virtualBottomRangeIndex: 0,
      lastVirtualTopRangeIndex: 0,
      lastVirtualBottomRangeIndex: 0,
      virtualItemInsertedCount: 0,
      virtualHeightCacheList: [],
      getCellHeightRetryCount: {
        fixed: 0,
        dynamic: 0
      },
      pagingOrgTop: -1,
      updateVirtualListFromDataChange: false
    };
  },
  watch: {
    // 监听总数据的改变，刷新虚拟列表布局
    realTotalData() {
      this.updateVirtualListRender();
    },
    // 监听虚拟列表渲染数组的改变并emit
    virtualList(newVal) {
      this.$emit("update:virtualList", newVal);
      this.$emit("virtualListChange", newVal);
    },
    // 监听虚拟列表顶部占位高度改变并emit
    virtualPlaceholderTopHeight(newVal) {
      this.$emit("virtualTopHeightChange", newVal);
    }
  },
  computed: {
    virtualCellIndexKey() {
      return c.listCellIndexKey;
    },
    finalUseVirtualList() {
      if (this.useVirtualList && this.usePageScroll) {
        u.consoleErr("使用页面滚动时，开启虚拟列表无效！");
      }
      return this.useVirtualList && !this.usePageScroll;
    },
    finalUseInnerList() {
      return this.useInnerList || this.finalUseVirtualList && !this.forceCloseInnerList;
    },
    finalCellKeyName() {
      return this.cellKeyName;
    },
    finalVirtualPageHeight() {
      return this.virtualPageHeight > 0 ? this.virtualPageHeight : this.windowHeight;
    },
    finalFixedCellHeight() {
      return u.convertToPx(this.fixedCellHeight);
    },
    virtualRangePageHeight() {
      return this.finalVirtualPageHeight * this.preloadPage;
    },
    virtualScrollDisTimeStamp() {
      return 1e3 / this.virtualScrollFps;
    }
  },
  methods: {
    // 在使用动态高度虚拟列表时，若在列表数组中需要插入某个item，需要调用此方法；item:需要插入的item，index:插入的cell位置，若index为2，则插入的item在原list的index=1之后，index从0开始
    doInsertVirtualListItem(item, index2) {
      if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
        return;
      this.virtualItemInsertedCount++;
      if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
        item = { item };
      }
      const cellIndexKey = this.virtualCellIndexKey;
      item[cellIndexKey] = `custom-${this.virtualItemInsertedCount}`;
      item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
      this.$nextTick(() => __async(this, null, function* () {
        let retryCount = 0;
        while (retryCount <= 10) {
          yield u.wait(c.delayTime);
          const cellNode = yield this._getNodeClientRect(`#zp-id-${item[cellIndexKey]}`, this.finalUseInnerList);
          if (!cellNode) {
            retryCount++;
            continue;
          }
          const currentHeight = cellNode ? cellNode[0].height : 0;
          const lastHeightCache = this.virtualHeightCacheList[index2 - 1];
          const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
          this.virtualHeightCacheList.splice(index2, 0, {
            height: currentHeight,
            lastTotalHeight,
            totalHeight: lastTotalHeight + currentHeight
          });
          for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
            const thisNode = this.virtualHeightCacheList[i];
            thisNode.lastTotalHeight += currentHeight;
            thisNode.totalHeight += currentHeight;
          }
          this._updateVirtualScroll(this.oldScrollTop);
          break;
        }
      }));
    },
    // 在使用动态高度虚拟列表时，手动更新指定cell的缓存高度(当cell高度在初始化之后再次改变时调用)；index:需要更新的cell在列表中的位置，从0开始
    didUpdateVirtualListCell(index2) {
      if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
        return;
      const currentNode = this.virtualHeightCacheList[index2];
      this.$nextTick(() => {
        this._getNodeClientRect(`#zp-id-${index2}`, this.finalUseInnerList).then((cellNode) => {
          const cellNodeHeight = cellNode ? cellNode[0].height : 0;
          const heightDis = cellNodeHeight - currentNode.height;
          currentNode.height = cellNodeHeight;
          currentNode.totalHeight = currentNode.lastTotalHeight + cellNodeHeight;
          for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
            const thisNode = this.virtualHeightCacheList[i];
            thisNode.totalHeight += heightDis;
            thisNode.lastTotalHeight += heightDis;
          }
        });
      });
    },
    // 在使用动态高度虚拟列表时，若删除了列表数组中的某个item，需要调用此方法以更新高度缓存数组；index:删除的cell在列表中的位置，从0开始
    didDeleteVirtualListCell(index2) {
      if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
        return;
      const currentNode = this.virtualHeightCacheList[index2];
      for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
        const thisNode = this.virtualHeightCacheList[i];
        thisNode.totalHeight -= currentNode.height;
        thisNode.lastTotalHeight -= currentNode.height;
      }
      this.virtualHeightCacheList.splice(index2, 1);
    },
    // 手动触发虚拟列表渲染更新，可用于解决例如修改了虚拟列表数组中元素，但展示未更新的情况
    updateVirtualListRender() {
      if (this.finalUseVirtualList) {
        this.updateVirtualListFromDataChange = true;
        this.$nextTick(() => {
          this.getCellHeightRetryCount.fixed = 0;
          if (this.realTotalData.length) {
            this.cellHeightMode === Enum.CellHeightMode.Fixed && this.isFirstPage && this._updateFixedCellHeight();
          } else {
            this._resetDynamicListState(!this.isUserPullDown);
          }
          this._updateVirtualScroll(this.oldScrollTop);
        });
      }
    },
    // 初始化虚拟列表
    _virtualListInit() {
      this.$nextTick(() => {
        u.delay(() => {
          this._getNodeClientRect(".zp-scroll-view").then((node) => {
            if (node) {
              this.pagingOrgTop = node[0].top;
              this.virtualPageHeight = node[0].height;
            }
          });
        });
      });
    },
    // cellHeightMode为fixed时获取第一个cell高度
    _updateFixedCellHeight() {
      if (!this.finalFixedCellHeight) {
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(`#zp-id-${0}`, this.finalUseInnerList).then((cellNode) => {
              if (!cellNode) {
                if (this.getCellHeightRetryCount.fixed > 10)
                  return;
                this.getCellHeightRetryCount.fixed++;
                this._updateFixedCellHeight();
              } else {
                this.virtualCellHeight = cellNode[0].height;
                this._updateVirtualScroll(this.oldScrollTop);
              }
            });
          }, c.delayTime, "updateFixedCellHeightDelay");
        });
      } else {
        this.virtualCellHeight = this.finalFixedCellHeight;
      }
    },
    // cellHeightMode为dynamic时获取每个cell高度
    _updateDynamicCellHeight(list, dataFrom = "bottom") {
      const dataFromTop = dataFrom === "top";
      const heightCacheList = this.virtualHeightCacheList;
      const currentCacheList = dataFromTop ? [] : heightCacheList;
      let listTotalHeight = 0;
      this.$nextTick(() => {
        u.delay(() => __async(this, null, function* () {
          for (let i = 0; i < list.length; i++) {
            const cellNode = yield this._getNodeClientRect(`#zp-id-${list[i][this.virtualCellIndexKey]}`, this.finalUseInnerList);
            const currentHeight = cellNode ? cellNode[0].height : 0;
            if (!cellNode) {
              if (this.getCellHeightRetryCount.dynamic <= 10) {
                heightCacheList.splice(heightCacheList.length - i, i);
                this.getCellHeightRetryCount.dynamic++;
                this._updateDynamicCellHeight(list, dataFrom);
              }
              return;
            }
            const lastHeightCache = currentCacheList.length ? currentCacheList.slice(-1)[0] : null;
            const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
            currentCacheList.push({
              height: currentHeight,
              lastTotalHeight,
              totalHeight: lastTotalHeight + currentHeight
            });
            if (dataFromTop) {
              listTotalHeight += currentHeight;
            }
          }
          if (dataFromTop && list.length) {
            for (let i = 0; i < heightCacheList.length; i++) {
              const heightCacheItem = heightCacheList[i];
              heightCacheItem.lastTotalHeight += listTotalHeight;
              heightCacheItem.totalHeight += listTotalHeight;
            }
            this.virtualHeightCacheList = currentCacheList.concat(heightCacheList);
          }
          this._updateVirtualScroll(this.oldScrollTop);
        }), c.delayTime, "updateDynamicCellHeightDelay");
      });
    },
    // 设置cellItem的index
    _setCellIndex(list, dataFrom = "bottom") {
      let currentItemIndex = 0;
      const cellIndexKey = this.virtualCellIndexKey;
      [Enum.QueryFrom.Refresh, Enum.QueryFrom.Reload].indexOf(this.queryFrom) >= 0 && this._resetDynamicListState();
      if (this.totalData.length) {
        if (dataFrom === "bottom") {
          currentItemIndex = this.realTotalData.length;
          const lastItem = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;
          if (lastItem && lastItem[cellIndexKey] !== void 0) {
            currentItemIndex = lastItem[cellIndexKey] + 1;
          }
        } else if (dataFrom === "top") {
          const firstItem = this.realTotalData.length ? this.realTotalData[0] : null;
          if (firstItem && firstItem[cellIndexKey] !== void 0) {
            currentItemIndex = firstItem[cellIndexKey] - list.length;
          }
        }
      } else {
        this._resetDynamicListState();
      }
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
          item = { item };
        }
        if (item[c.listCellIndexUniqueKey]) {
          item = u.deepCopy(item);
        }
        item[cellIndexKey] = currentItemIndex + i;
        item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
        list[i] = item;
      }
      this.getCellHeightRetryCount.dynamic = 0;
      this.cellHeightMode === Enum.CellHeightMode.Dynamic && this._updateDynamicCellHeight(list, dataFrom);
    },
    // 更新scroll滚动（虚拟列表滚动时触发）
    _updateVirtualScroll(scrollTop, scrollDiff = 0) {
      const currentTimeStamp = u.getTime();
      scrollTop === 0 && this._resetTopRange();
      if (scrollTop !== 0 && this.virtualScrollTimeStamp && currentTimeStamp - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp) {
        return;
      }
      this.virtualScrollTimeStamp = currentTimeStamp;
      let scrollIndex = 0;
      const cellHeightMode = this.cellHeightMode;
      if (cellHeightMode === Enum.CellHeightMode.Fixed) {
        scrollIndex = parseInt(scrollTop / this.virtualCellHeight) || 0;
        this._updateFixedTopRangeIndex(scrollIndex);
        this._updateFixedBottomRangeIndex(scrollIndex);
      } else if (cellHeightMode === Enum.CellHeightMode.Dynamic) {
        const scrollDirection = scrollDiff > 0 ? "top" : "bottom";
        const rangePageHeight = this.virtualRangePageHeight;
        const topRangePageOffset = scrollTop - rangePageHeight;
        const bottomRangePageOffset = scrollTop + this.finalVirtualPageHeight + rangePageHeight;
        let virtualBottomRangeIndex = 0;
        let virtualPlaceholderBottomHeight = 0;
        let reachedLimitBottom = false;
        const heightCacheList = this.virtualHeightCacheList;
        const lastHeightCache = !!heightCacheList ? heightCacheList.slice(-1)[0] : null;
        let startTopRangeIndex = this.virtualTopRangeIndex;
        if (scrollDirection === "bottom") {
          for (let i = startTopRangeIndex; i < heightCacheList.length; i++) {
            const heightCacheItem = heightCacheList[i];
            if (heightCacheItem && heightCacheItem.totalHeight > topRangePageOffset) {
              this.virtualTopRangeIndex = i;
              this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
              break;
            }
          }
        } else {
          let topRangeMatched = false;
          for (let i = startTopRangeIndex; i >= 0; i--) {
            const heightCacheItem = heightCacheList[i];
            if (heightCacheItem && heightCacheItem.totalHeight < topRangePageOffset) {
              this.virtualTopRangeIndex = i;
              this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
              topRangeMatched = true;
              break;
            }
          }
          !topRangeMatched && this._resetTopRange();
        }
        for (let i = this.virtualTopRangeIndex; i < heightCacheList.length; i++) {
          const heightCacheItem = heightCacheList[i];
          if (heightCacheItem && heightCacheItem.totalHeight > bottomRangePageOffset) {
            virtualBottomRangeIndex = i;
            virtualPlaceholderBottomHeight = lastHeightCache.totalHeight - heightCacheItem.totalHeight;
            reachedLimitBottom = true;
            break;
          }
        }
        if (!reachedLimitBottom || this.virtualBottomRangeIndex === 0) {
          this.virtualBottomRangeIndex = this.realTotalData.length ? this.realTotalData.length - 1 : this.pageSize;
          this.virtualPlaceholderBottomHeight = 0;
        } else {
          this.virtualBottomRangeIndex = virtualBottomRangeIndex;
          this.virtualPlaceholderBottomHeight = virtualPlaceholderBottomHeight;
        }
        this._updateVirtualList();
      }
    },
    // 更新fixedCell模式下topRangeIndex&placeholderTopHeight
    _updateFixedTopRangeIndex(scrollIndex) {
      let virtualTopRangeIndex = this.virtualCellHeight === 0 ? 0 : scrollIndex - (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * this.preloadPage;
      virtualTopRangeIndex *= this.virtualListCol;
      virtualTopRangeIndex = Math.max(0, virtualTopRangeIndex);
      this.virtualTopRangeIndex = virtualTopRangeIndex;
      this.virtualPlaceholderTopHeight = virtualTopRangeIndex / this.virtualListCol * this.virtualCellHeight;
    },
    // 更新fixedCell模式下bottomRangeIndex&placeholderBottomHeight
    _updateFixedBottomRangeIndex(scrollIndex) {
      let virtualBottomRangeIndex = this.virtualCellHeight === 0 ? this.pageSize : scrollIndex + (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * (this.preloadPage + 1);
      virtualBottomRangeIndex *= this.virtualListCol;
      virtualBottomRangeIndex = Math.min(this.realTotalData.length, virtualBottomRangeIndex);
      this.virtualBottomRangeIndex = virtualBottomRangeIndex;
      this.virtualPlaceholderBottomHeight = (this.realTotalData.length - virtualBottomRangeIndex) * this.virtualCellHeight / this.virtualListCol;
      this._updateVirtualList();
    },
    // 更新virtualList
    _updateVirtualList() {
      const shouldUpdateList = this.updateVirtualListFromDataChange || (this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex || this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex);
      if (shouldUpdateList) {
        this.updateVirtualListFromDataChange = false;
        this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex;
        this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex;
        this.virtualList = this.realTotalData.slice(this.virtualTopRangeIndex, this.virtualBottomRangeIndex + 1);
      }
    },
    // 重置动态cell模式下的高度缓存数据、虚拟列表和滚动状态
    _resetDynamicListState(resetVirtualList = false) {
      this.virtualHeightCacheList = [];
      if (resetVirtualList) {
        this.virtualList = [];
      }
      this.virtualTopRangeIndex = 0;
      this.virtualPlaceholderTopHeight = 0;
    },
    // 重置topRangeIndex和placeholderTopHeight
    _resetTopRange() {
      this.virtualTopRangeIndex = 0;
      this.virtualPlaceholderTopHeight = 0;
      this._updateVirtualList();
    },
    // 检测虚拟列表当前滚动位置，如发现滚动位置不正确则重新计算虚拟列表相关参数(为解决在App中可能出现的长时间进入后台后打开App白屏的问题)
    _checkVirtualListScroll() {
      if (this.finalUseVirtualList) {
        this.$nextTick(() => {
          this._getNodeClientRect(".zp-paging-touch-view").then((node) => {
            const currentTop = node ? node[0].top : 0;
            if (!node || currentTop === this.pagingOrgTop && this.virtualPlaceholderTopHeight !== 0) {
              this._updateVirtualScroll(0);
            }
          });
        });
      }
    },
    // 处理使用内置列表时点击了cell事件
    _innerCellClick(item, index2) {
      this.$emit("innerCellClick", item, index2);
    }
  }
};
const zPagingRefresh = () => "../node-modules/z-paging/components/z-paging/components/z-paging-refresh.js";
const zPagingLoadMore = () => "../node-modules/z-paging/components/z-paging/components/z-paging-load-more.js";
const zPagingEmptyView = () => "../node-modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.js";
const systemInfo = index$1.getSystemInfoSync();
const _sfc_main = {
  name: "z-paging",
  components: {
    zPagingRefresh,
    zPagingLoadMore,
    zPagingEmptyView
  },
  mixins: [
    commonLayoutModule,
    dataHandleModule,
    i18nModule,
    nvueModule,
    emptyModule,
    refresherModule,
    loadMoreModule,
    loadingModule,
    chatRecordModerModule,
    scrollerModule,
    backToTopModule,
    virtualListModule
  ],
  data() {
    return {
      // --------------静态资源---------------
      base64Arrow: zStatic.base64Arrow,
      base64Flower: zStatic.base64Flower,
      base64BackToTop: zStatic.base64BackToTop,
      // -------------全局数据相关--------------
      // 当前加载类型
      loadingType: Enum.LoadingType.Refresher,
      requestTimeStamp: 0,
      wxsPropType: "",
      renderPropScrollTop: -1,
      checkScrolledToBottomTimeOut: null,
      cacheTopHeight: -1,
      statusBarHeight: systemInfo.statusBarHeight,
      // --------------状态&判断---------------
      insideOfPaging: -1,
      isLoadFailed: false,
      isIos: systemInfo.platform === "ios",
      disabledBounce: false,
      fromCompleteEmit: false,
      disabledCompleteEmit: false,
      pageLaunched: false,
      active: false,
      // ---------------wxs相关---------------
      wxsIsScrollTopInTopRange: true,
      wxsScrollTop: 0,
      wxsPageScrollTop: 0,
      wxsOnPullingDown: false
    };
  },
  props: {
    // 调用complete后延迟处理的时间，单位为毫秒，默认0毫秒，优先级高于minDelay
    delay: {
      type: [Number, String],
      default: u.gc("delay", 0)
    },
    // 触发@query后最小延迟处理的时间，单位为毫秒，默认0毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用complete后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟），当show-refresher-when-reload为true或reload(true)时，其最小值为400
    minDelay: {
      type: [Number, String],
      default: u.gc("minDelay", 0)
    },
    // 设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替
    pagingStyle: {
      type: Object,
      default: u.gc("pagingStyle", {})
    },
    // z-paging的高度，优先级低于pagingStyle中设置的height；传字符串，如100px、100rpx、100%
    height: {
      type: String,
      default: u.gc("height", "")
    },
    // z-paging的宽度，优先级低于pagingStyle中设置的width；传字符串，如100px、100rpx、100%
    width: {
      type: String,
      default: u.gc("width", "")
    },
    // z-paging的最大宽度，优先级低于pagingStyle中设置的max-width；传字符串，如100px、100rpx、100%。默认为空，也就是铺满窗口宽度，若设置了特定值则会自动添加margin: 0 auto
    maxWidth: {
      type: String,
      default: u.gc("maxWidth", "")
    },
    // z-paging的背景色，优先级低于pagingStyle中设置的background。传字符串，如"#ffffff"
    bgColor: {
      type: String,
      default: u.gc("bgColor", "")
    },
    // 设置z-paging的容器(插槽的父view)的style
    pagingContentStyle: {
      type: Object,
      default: u.gc("pagingContentStyle", {})
    },
    // z-paging是否自动高度，若自动高度则会自动铺满屏幕
    autoHeight: {
      type: Boolean,
      default: u.gc("autoHeight", false)
    },
    // z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，若需要减少高度，则传负数
    autoHeightAddition: {
      type: [Number, String],
      default: u.gc("autoHeightAddition", "0px")
    },
    // loading(下拉刷新、上拉加载更多)的主题样式，支持black，white，默认black
    defaultThemeStyle: {
      type: String,
      default: u.gc("defaultThemeStyle", "black")
    },
    // z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认为100%，默认为是(当使用内置scroll-view滚动时有效)
    fixed: {
      type: Boolean,
      default: u.gc("fixed", true)
    },
    // 是否开启底部安全区域适配
    safeAreaInsetBottom: {
      type: Boolean,
      default: u.gc("safeAreaInsetBottom", false)
    },
    // 开启底部安全区域适配后，是否使用placeholder形式实现，默认为否。为否时滚动区域会自动避开底部安全区域，也就是所有滚动内容都不会挡住底部安全区域，若设置为是，则滚动时滚动内容会挡住底部安全区域，但是当滚动到底部时才会避开底部安全区域
    useSafeAreaPlaceholder: {
      type: Boolean,
      default: u.gc("useSafeAreaPlaceholder", false)
    },
    // z-paging bottom的背景色，默认透明，传字符串，如"#ffffff"
    bottomBgColor: {
      type: String,
      default: u.gc("bottomBgColor", "")
    },
    // slot="top"的view的z-index，默认为99，仅使用页面滚动时有效
    topZIndex: {
      type: Number,
      default: u.gc("topZIndex", 99)
    },
    // z-paging内容容器父view的z-index，默认为1
    superContentZIndex: {
      type: Number,
      default: u.gc("superContentZIndex", 1)
    },
    // z-paging内容容器部分的z-index，默认为1
    contentZIndex: {
      type: Number,
      default: u.gc("contentZIndex", 1)
    },
    // z-paging二楼的z-index，默认为100
    f2ZIndex: {
      type: Number,
      default: u.gc("f2ZIndex", 100)
    },
    // 使用页面滚动时，是否在不满屏时自动填充满屏幕，默认为是
    autoFullHeight: {
      type: Boolean,
      default: u.gc("autoFullHeight", true)
    },
    // 是否监听列表触摸方向改变，默认为否
    watchTouchDirectionChange: {
      type: Boolean,
      default: u.gc("watchTouchDirectionChange", false)
    },
    // z-paging中布局的单位，默认为rpx
    unit: {
      type: String,
      default: u.gc("unit", "rpx")
    }
  },
  created() {
    if (this.createdReload && !this.refresherOnly && this.auto) {
      this._startLoading();
      this.$nextTick(this._preReload);
    }
  },
  mounted() {
    this.active = true;
    this.wxsPropType = u.getTime().toString();
    this.renderJsIgnore;
    if (!this.createdReload && !this.refresherOnly && this.auto) {
      u.delay(() => this.$nextTick(this._preReload), 0);
    }
    this.finalUseCache && this._setListByLocalCache();
    let delay2 = 0;
    delay2 = c.delayTime;
    this.$nextTick(() => {
      this.systemInfo = index$1.getSystemInfoSync();
      !this.usePageScroll && this.autoHeight && this._setAutoHeight();
      this.loaded = true;
      u.delay(() => {
        this.updateFixedLayout();
        this._updateCachedSuperContentHeight();
      });
    });
    this.updatePageScrollTopHeight();
    this.updatePageScrollBottomHeight();
    this.updateLeftAndRightWidth();
    if (this.finalRefresherEnabled && this.useCustomRefresher) {
      this.$nextTick(() => {
        this.isTouchmoving = true;
      });
    }
    this._onEmit();
    this.finalUseVirtualList && this._virtualListInit();
    this.$nextTick(() => {
      setTimeout(() => {
        this._getCssSafeAreaInsetBottom(() => this.safeAreaInsetBottom && this.updatePageScrollBottomHeight());
      }, delay2);
    });
  },
  destroyed() {
    this._handleUnmounted();
  },
  unmounted() {
    this._handleUnmounted();
  },
  watch: {
    defaultThemeStyle: {
      handler(newVal) {
        if (newVal.length) {
          this.finalRefresherDefaultStyle = newVal;
        }
      },
      immediate: true
    },
    autoHeight(newVal) {
      this.loaded && !this.usePageScroll && this._setAutoHeight(newVal);
    },
    autoHeightAddition(newVal) {
      this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(newVal);
    }
  },
  computed: {
    // 当前z-paging的内置样式
    finalPagingStyle() {
      const pagingStyle = __spreadValues({}, this.pagingStyle);
      if (!this.systemInfo)
        return pagingStyle;
      const { windowTop, windowBottom } = this;
      if (!this.usePageScroll && this.fixed) {
        if (windowTop && !pagingStyle.top) {
          pagingStyle.top = windowTop + "px";
        }
        if (windowBottom && !pagingStyle.bottom) {
          pagingStyle.bottom = windowBottom + "px";
        }
      }
      if (this.bgColor.length && !pagingStyle["background"]) {
        pagingStyle["background"] = this.bgColor;
      }
      if (this.height.length && !pagingStyle["height"]) {
        pagingStyle["height"] = this.height;
      }
      if (this.width.length && !pagingStyle["width"]) {
        pagingStyle["width"] = this.width;
      }
      if (this.maxWidth.length && !pagingStyle["max-width"]) {
        pagingStyle["max-width"] = this.maxWidth;
        pagingStyle["margin"] = "0 auto";
      }
      return pagingStyle;
    },
    // 当前z-paging内容的样式
    finalPagingContentStyle() {
      if (this.contentZIndex != 1) {
        this.pagingContentStyle["z-index"] = this.contentZIndex;
        this.pagingContentStyle["position"] = "relative";
      }
      return this.pagingContentStyle;
    },
    renderJsIgnore() {
      if (this.usePageScroll && this.useChatRecordMode || !this.refresherEnabled && this.scrollable || !this.useCustomRefresher) {
        this.$nextTick(() => {
          this.renderPropScrollTop = 10;
        });
      }
      return 0;
    },
    windowHeight() {
      if (!this.systemInfo)
        return 0;
      return this.systemInfo.windowHeight || 0;
    },
    windowBottom() {
      if (!this.systemInfo)
        return 0;
      let windowBottom = this.systemInfo.windowBottom || 0;
      if (this.safeAreaInsetBottom && !this.useSafeAreaPlaceholder && !this.useChatRecordMode) {
        windowBottom += this.safeAreaBottom;
      }
      return windowBottom;
    },
    isIosAndH5() {
      return false;
    }
  },
  methods: {
    // 当前版本号
    getVersion() {
      return `z-paging v${c.version}`;
    },
    // 设置nvue List的specialEffects
    setSpecialEffects(args) {
      this.setListSpecialEffects(args);
    },
    // 与setSpecialEffects等效，兼容旧版本
    setListSpecialEffects(args) {
      this.nFixFreezing = args && Object.keys(args).length;
      if (this.isIos) {
        this.privateRefresherEnabled = 0;
      }
      !this.usePageScroll && this.$refs["zp-n-list"].setSpecialEffects(args);
    },
    // 使手机发生较短时间的振动（15ms）
    _doVibrateShort() {
      index$1.vibrateShort();
    },
    // 设置z-paging高度
    _setAutoHeight(shouldFullHeight = true, scrollViewNode = null) {
      return __async(this, null, function* () {
        let heightKey = "min-height";
        heightKey = "min-height";
        try {
          if (shouldFullHeight) {
            let finalScrollViewNode = scrollViewNode || (yield this._getNodeClientRect(".zp-scroll-view"));
            let finalScrollBottomNode = yield this._getNodeClientRect(".zp-page-bottom");
            if (finalScrollViewNode) {
              const scrollViewTop = finalScrollViewNode[0].top;
              let scrollViewHeight = this.windowHeight - scrollViewTop;
              scrollViewHeight -= finalScrollBottomNode ? finalScrollBottomNode[0].height : 0;
              const additionHeight = u.convertToPx(this.autoHeightAddition);
              const finalHeight = scrollViewHeight + additionHeight - (this.insideMore ? 1 : 0) + "px !important";
              this.$set(this.scrollViewStyle, heightKey, finalHeight);
              this.$set(this.scrollViewInStyle, heightKey, finalHeight);
            }
          } else {
            this.$delete(this.scrollViewStyle, heightKey);
            this.$delete(this.scrollViewInStyle, heightKey);
          }
        } catch (e2) {
        }
      });
    },
    // 组件销毁后续处理
    _handleUnmounted() {
      this.active = false;
      this._offEmit();
      this.useChatRecordMode && index$1.offKeyboardHeightChange(this._handleKeyboardHeightChange);
    },
    // 触发更新是否超出页面状态
    _updateInsideOfPaging() {
      this.insideMore && this.insideOfPaging === true && setTimeout(this.doLoadMore, 200);
    },
    // 清除timeout
    _cleanTimeout(timeout2) {
      if (timeout2) {
        clearTimeout(timeout2);
        timeout2 = null;
      }
      return timeout2;
    },
    // 添加全局emit监听
    _onEmit() {
      index$1.$on(c.errorUpdateKey, (errorMsg) => {
        if (this.loading) {
          if (!!errorMsg) {
            this.customerEmptyViewErrorText = errorMsg;
          }
          this.complete(false).catch(() => {
          });
        }
      });
      index$1.$on(c.completeUpdateKey, (data) => {
        setTimeout(() => {
          if (this.loading) {
            if (!this.disabledCompleteEmit) {
              const type2 = data.type || "normal";
              const list = data.list || data;
              const rule = data.rule;
              this.fromCompleteEmit = true;
              switch (type2) {
                case "normal":
                  this.complete(list);
                  break;
                case "total":
                  this.completeByTotal(list, rule);
                  break;
                case "nomore":
                  this.completeByNoMore(list, rule);
                  break;
                case "key":
                  this.completeByKey(list, rule);
                  break;
              }
            } else {
              this.disabledCompleteEmit = false;
            }
          }
        }, 1);
      });
    },
    // 销毁全局emit和listener监听
    _offEmit() {
      index$1.$off(c.errorUpdateKey);
      index$1.$off(c.completeUpdateKey);
    }
  }
};
const props$E = {
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
  }, (_m = (_l = index$1.$uv) == null ? void 0 : _l.props) == null ? void 0 : _m.sticky)
};
const props$D = {
  props: __spreadValues({
    // 头像图片路径(不能为相对路径)
    src: {
      type: String,
      default: ""
    },
    // 头像形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "circle"
    },
    // 头像尺寸
    size: {
      type: [String, Number],
      default: 40
    },
    // 裁剪模式
    mode: {
      type: String,
      default: "scaleToFill"
    },
    // 显示的文字
    text: {
      type: String,
      default: ""
    },
    // 背景色
    bgColor: {
      type: String,
      default: "#c0c4cc"
    },
    // 文字颜色
    color: {
      type: String,
      default: "#fff"
    },
    // 文字大小
    fontSize: {
      type: [String, Number],
      default: 18
    },
    // 显示的图标
    icon: {
      type: String,
      default: ""
    },
    // 显示小程序头像，只对百度，微信，QQ小程序有效
    mpAvatar: {
      type: Boolean,
      default: false
    },
    // 是否使用随机背景色
    randomBgColor: {
      type: Boolean,
      default: false
    },
    // 加载失败的默认头像(组件有内置默认图片)
    defaultUrl: {
      type: String,
      default: ""
    },
    // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
    colorIndex: {
      type: [String, Number],
      // 校验参数规则，索引在0-19之间
      validator(n2) {
        return range$2(n2, [0, 19]) || n2 === "";
      },
      default: ""
    },
    // 组件标识符
    name: {
      type: String,
      default: ""
    }
  }, (_o = (_n = index$1.$uv) == null ? void 0 : _n.props) == null ? void 0 : _o.avatar)
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
const props$C = {
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
  }, (_q = (_p = index$1.$uv) == null ? void 0 : _p.props) == null ? void 0 : _q.icon)
};
const props$B = {
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
  }, (_s = (_r = index$1.$uv) == null ? void 0 : _r.props) == null ? void 0 : _s.formItem)
};
const props$A = {
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
  }, (_u = (_t = index$1.$uv) == null ? void 0 : _t.props) == null ? void 0 : _u.input)
};
const props$z = {
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
  }, (_w = (_v = index$1.$uv) == null ? void 0 : _v.props) == null ? void 0 : _w.picker)
};
const props$y = {
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
  }, (_y = (_x = index$1.$uv) == null ? void 0 : _x.props) == null ? void 0 : _y.form)
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
    for (const s2 in source) {
      if (source.hasOwnProperty(s2)) {
        const value2 = source[s2];
        if (typeof value2 === "object" && typeof target[s2] === "object") {
          target[s2] = __spreadValues(__spreadValues({}, target[s2]), value2);
        } else {
          target[s2] = value2;
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
      let messages$12 = this.messages();
      if (messages$12 === messages) {
        messages$12 = newMessages();
      }
      deepMerge(messages$12, options.messages);
      options.messages = messages$12;
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
      arr.forEach((r2) => {
        let rule = r2;
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
const props$x = {
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
  }, (_A = (_z = index$1.$uv) == null ? void 0 : _z.props) == null ? void 0 : _A.button)
};
const props$w = {
  props: __spreadValues({
    // 标签类型info、primary、success、warning、error
    type: {
      type: String,
      default: "primary"
    },
    // 不可用
    disabled: {
      type: [Boolean, String],
      default: false
    },
    // 标签的大小，large，medium，mini
    size: {
      type: String,
      default: "medium"
    },
    // tag的形状，circle（两边半圆形）, square（方形，带圆角）
    shape: {
      type: String,
      default: "square"
    },
    // 标签文字
    text: {
      type: [String, Number],
      default: ""
    },
    // 背景颜色，默认为空字符串，即不处理
    bgColor: {
      type: String,
      default: ""
    },
    // 标签字体颜色，默认为空字符串，即不处理
    color: {
      type: String,
      default: ""
    },
    // 标签的边框颜色
    borderColor: {
      type: String,
      default: ""
    },
    // 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
    name: {
      type: [String, Number],
      default: ""
    },
    // 镂空时是否填充背景色
    plainFill: {
      type: Boolean,
      default: false
    },
    // 是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false
    },
    // 关闭按钮图标的颜色
    closeColor: {
      type: String,
      default: "#C6C7CB"
    },
    // 关闭按钮图标的位置 right（右边）right-top（右上） 默认right-top
    closePlace: {
      type: String,
      default: "right-top"
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 内置图标，或绝对路径的图片
    icon: {
      type: String,
      default: ""
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ""
    },
    // nvue模式下 是否直接显示，在uv-list等cell下面使用就需要设置
    cellChild: {
      type: Boolean,
      default: false
    }
  }, (_C = (_B = index$1.$uv) == null ? void 0 : _B.props) == null ? void 0 : _C.tags)
};
const props$v = {
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
  }, (_E = (_D = index$1.$uv) == null ? void 0 : _D.props) == null ? void 0 : _E.checkbox)
};
const props$u = {
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
  }, (_G = (_F = index$1.$uv) == null ? void 0 : _F.props) == null ? void 0 : _G.checkboxGroup)
};
const props$t = {
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
  }, (_I = (_H = index$1.$uv) == null ? void 0 : _H.props) == null ? void 0 : _I.empty)
};
const props$s = {
  props: __spreadValues({
    // 标题
    title: {
      type: [String, Number],
      default: ""
    },
    // 描述文本
    desc: {
      type: [String, Number],
      default: ""
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: 17
    },
    // 当前步骤是否处于失败状态
    error: {
      type: Boolean,
      default: false
    }
  }, (_K = (_J = index$1.$uv) == null ? void 0 : _J.props) == null ? void 0 : _K.stepsItem)
};
const props$r = {
  props: __spreadValues({
    // 排列方向
    direction: {
      type: String,
      default: "row"
    },
    // 设置第几个步骤
    current: {
      type: [String, Number],
      default: 0
    },
    // 激活状态颜色
    activeColor: {
      type: String,
      default: "#3c9cff"
    },
    // 未激活状态颜色
    inactiveColor: {
      type: String,
      default: "#969799"
    },
    // 激活状态的图标
    activeIcon: {
      type: String,
      default: ""
    },
    // 未激活状态图标
    inactiveIcon: {
      type: String,
      default: ""
    },
    // 是否显示点类型
    dot: {
      type: Boolean,
      default: false
    }
  }, (_M = (_L = index$1.$uv) == null ? void 0 : _L.props) == null ? void 0 : _M.steps)
};
const props$q = {
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
  }, (_O = (_N = index$1.$uv) == null ? void 0 : _N.props) == null ? void 0 : _O.textarea)
};
const props$p = {
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
  }, (_Q = (_P = index$1.$uv) == null ? void 0 : _P.props) == null ? void 0 : _Q.radio)
};
const props$o = {
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
  }, (_S = (_R = index$1.$uv) == null ? void 0 : _R.props) == null ? void 0 : _S.radioGroup)
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
    // 搜索框形状，round-圆形，square-方形
    shape: {
      type: String,
      default: "round"
    },
    // 搜索框背景色，默认值#f2f2f2
    bgColor: {
      type: String,
      default: "#f2f2f2"
    },
    // 占位提示文字
    placeholder: {
      type: String,
      default: "请输入关键字"
    },
    // 是否启用清除控件
    clearabled: {
      type: Boolean,
      default: true
    },
    // 是否自动聚焦
    focus: {
      type: Boolean,
      default: false
    },
    // 是否在搜索框右侧显示取消按钮
    showAction: {
      type: Boolean,
      default: true
    },
    // 右边控件的样式
    actionStyle: {
      type: Object,
      default: () => ({})
    },
    // 取消按钮文字
    actionText: {
      type: String,
      default: "搜索"
    },
    // 输入框内容对齐方式，可选值为 left|center|right
    inputAlign: {
      type: String,
      default: "left"
    },
    // input输入框的样式，可以定义文字颜色，大小等，对象形式
    inputStyle: {
      type: Object,
      default: () => ({})
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: false
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "transparent"
    },
    // 搜索图标的颜色，默认同输入框字体颜色
    searchIconColor: {
      type: String,
      default: "#909399"
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: "#606266"
    },
    // placeholder的颜色
    placeholderColor: {
      type: String,
      default: "#909399"
    },
    // 左边输入框的图标，可以为uvui图标名称或图片路径
    searchIcon: {
      type: String,
      default: "search"
    },
    searchIconSize: {
      type: [Number, String],
      default: 22
    },
    // 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30px"、"30px 20px"等写法
    margin: {
      type: String,
      default: "0"
    },
    // 开启showAction时，是否在input获取焦点时才显示
    animation: {
      type: Boolean,
      default: false
    },
    // 输入框最大能输入的长度，-1为不限制长度(来自uniapp文档)
    maxlength: {
      type: [String, Number],
      default: -1
    },
    // 搜索框高度，单位px
    height: {
      type: [String, Number],
      default: 32
    },
    // 搜索框左侧文本
    label: {
      type: [String, Number, null],
      default: null
    },
    // 搜索框扩展样式
    boxStyle: {
      type: [String, Object],
      default: () => ({})
    }
  }, (_U = (_T = index$1.$uv) == null ? void 0 : _T.props) == null ? void 0 : _U.search)
};
const props$m = {
  props: __spreadValues({
    // 标题
    title: {
      type: [String, Number],
      default: ""
    },
    // 标题下方的描述信息
    label: {
      type: [String, Number],
      default: ""
    },
    // 右侧的内容
    value: {
      type: [String, Number],
      default: ""
    },
    // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
    icon: {
      type: String,
      default: ""
    },
    // 是否禁用cell
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示下边框
    border: {
      type: Boolean,
      default: true
    },
    // 内容是否垂直居中(主要是针对右侧的value部分)
    center: {
      type: Boolean,
      default: true
    },
    // 点击后跳转的URL地址
    url: {
      type: String,
      default: ""
    },
    // 链接跳转的方式，内部使用的是uvui封装的route方法，可能会进行拦截操作
    linkType: {
      type: String,
      default: "navigateTo"
    },
    // 是否开启点击反馈(表现为点击时加上灰色背景)
    clickable: {
      type: Boolean,
      default: false
    },
    // 是否展示右侧箭头并开启点击反馈
    isLink: {
      type: Boolean,
      default: false
    },
    // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
    required: {
      type: Boolean,
      default: false
    },
    // 右侧的图标箭头
    rightIcon: {
      type: String,
      default: "arrow-right"
    },
    // 右侧箭头的方向，可选值为：left，up，down
    arrowDirection: {
      type: String,
      default: ""
    },
    // 左侧图标样式
    iconStyle: {
      type: [Object, String],
      default: () => {
        return {};
      }
    },
    // 右侧箭头图标的样式
    rightIconStyle: {
      type: [Object, String],
      default: () => {
        return {};
      }
    },
    // 标题的样式
    titleStyle: {
      type: [Object, String],
      default: () => {
        return {};
      }
    },
    // 单位元的大小，可选值为large
    size: {
      type: String,
      default: ""
    },
    // 点击cell是否阻止事件传播
    stop: {
      type: Boolean,
      default: true
    },
    // 标识符，cell被点击时返回
    name: {
      type: [Number, String],
      default: ""
    },
    // 单元格自定义样式
    cellStyle: {
      type: [Object, String],
      default: () => {
      }
    }
  }, (_W = (_V = index$1.$uv) == null ? void 0 : _V.props) == null ? void 0 : _W.cell)
};
const props$l = {
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
  }, (_Y = (_X = index$1.$uv) == null ? void 0 : _X.props) == null ? void 0 : _Y.countDown)
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
const config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
  // 行内标签
  inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
  // 要移除的标签
  ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
  // 自闭合的标签
  voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
  // html 实体
  entities: {
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    ensp: " ",
    emsp: " ",
    nbsp: " ",
    semi: ";",
    ndash: "–",
    mdash: "—",
    middot: "·",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
    bull: "•",
    hellip: "…",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓"
  },
  // 默认的标签样式
  tagStyle: {
    address: "font-style:italic",
    big: "display:inline;font-size:1.2em",
    caption: "display:table-caption;text-align:center",
    center: "text-align:center",
    cite: "font-style:italic",
    dd: "margin-left:40px",
    mark: "background-color:yellow",
    pre: "font-family:monospace;white-space:pre",
    s: "text-decoration:line-through",
    small: "display:inline;font-size:0.8em",
    strike: "text-decoration:line-through",
    u: "text-decoration:underline"
  },
  // svg 大小写对照表
  svgDict: {
    animatetransform: "animateTransform",
    lineargradient: "linearGradient",
    viewbox: "viewBox",
    attributename: "attributeName",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur"
  }
};
const tagSelector = {};
const {
  windowWidth,
  system
} = index$1.getSystemInfoSync();
const blankChar = makeMap(" ,\r,\n,	,\f");
let idIndex = 0;
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = list.length; i--; ) {
    map2[list[i]] = true;
  }
  return map2;
}
function decodeEntity(str, amp) {
  let i = str.indexOf("&");
  while (i !== -1) {
    const j = str.indexOf(";", i + 3);
    let code2;
    if (j === -1)
      break;
    if (str[i + 1] === "#") {
      code2 = parseInt((str[i + 2] === "x" ? "0" : "") + str.substring(i + 2, j));
      if (!isNaN(code2)) {
        str = str.substr(0, i) + String.fromCharCode(code2) + str.substr(j + 1);
      }
    } else {
      code2 = str.substring(i + 1, j);
      if (config.entities[code2] || code2 === "amp" && amp) {
        str = str.substr(0, i) + (config.entities[code2] || "&") + str.substr(j + 1);
      }
    }
    i = str.indexOf("&", i + 1);
  }
  return str;
}
function mergeNodes(nodes) {
  let i = nodes.length - 1;
  for (let j = i; j >= -1; j--) {
    if (j === -1 || nodes[j].c || !nodes[j].name || nodes[j].name !== "div" && nodes[j].name !== "p" && nodes[j].name[0] !== "h" || (nodes[j].attrs.style || "").includes("inline")) {
      if (i - j >= 5) {
        nodes.splice(j + 1, i - j, {
          name: "div",
          attrs: {},
          children: nodes.slice(j + 1, i + 1)
        });
      }
      i = j - 1;
    }
  }
}
function Parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.imgList._unloadimgs = 0;
  this.plugins = vm.plugins || [];
  this.attrs = /* @__PURE__ */ Object.create(null);
  this.stack = [];
  this.nodes = [];
  this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
}
Parser.prototype.parse = function(content) {
  for (let i = this.plugins.length; i--; ) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, config) || content;
    }
  }
  new Lexer(this).parse(content);
  while (this.stack.length) {
    this.popNode();
  }
  if (this.nodes.length > 50) {
    mergeNodes(this.nodes);
  }
  return this.nodes;
};
Parser.prototype.expose = function() {
  for (let i = this.stack.length; i--; ) {
    const item = this.stack[i];
    if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
      return;
    item.c = 1;
  }
};
Parser.prototype.hook = function(node) {
  for (let i = this.plugins.length; i--; ) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) === false) {
      return false;
    }
  }
  return true;
};
Parser.prototype.getUrl = function(url3) {
  const domain = this.options.domain;
  if (url3[0] === "/") {
    if (url3[1] === "/") {
      url3 = (domain ? domain.split("://")[0] : "http") + ":" + url3;
    } else if (domain) {
      url3 = domain + url3;
    }
  } else if (!url3.includes("data:") && !url3.includes("://")) {
    if (domain) {
      url3 = domain + "/" + url3;
    }
  }
  return url3;
};
Parser.prototype.parseStyle = function(node) {
  const attrs = node.attrs;
  const list = (this.tagStyle[node.name] || "").split(";").concat((attrs.style || "").split(";"));
  const styleObj = {};
  let tmp = "";
  if (attrs.id && !this.xml) {
    if (this.options.useAnchor) {
      this.expose();
    } else if (node.name !== "img" && node.name !== "a" && node.name !== "video" && node.name !== "audio") {
      attrs.id = void 0;
    }
  }
  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
    attrs.width = void 0;
  }
  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
    attrs.height = void 0;
  }
  for (let i = 0, len = list.length; i < len; i++) {
    const info = list[i].split(":");
    if (info.length < 2)
      continue;
    const key = info.shift().trim().toLowerCase();
    let value2 = info.join(":").trim();
    if (value2[0] === "-" && value2.lastIndexOf("-") > 0 || value2.includes("safe")) {
      tmp += `;${key}:${value2}`;
    } else if (!styleObj[key] || value2.includes("import") || !styleObj[key].includes("import")) {
      if (value2.includes("url")) {
        let j = value2.indexOf("(") + 1;
        if (j) {
          while (value2[j] === '"' || value2[j] === "'" || blankChar[value2[j]]) {
            j++;
          }
          value2 = value2.substr(0, j) + this.getUrl(value2.substr(j));
        }
      } else if (value2.includes("rpx")) {
        value2 = value2.replace(/[0-9.]+\s*rpx/g, ($) => parseFloat($) * windowWidth / 750 + "px");
      }
      styleObj[key] = value2;
    }
  }
  node.attrs.style = tmp;
  return styleObj;
};
Parser.prototype.onTagName = function(name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName === "svg") {
    this.xml = (this.xml || 0) + 1;
    config.ignoreTags.style = void 0;
  }
};
Parser.prototype.onAttrName = function(name) {
  name = this.xml ? name : name.toLowerCase();
  if (name.substr(0, 5) === "data-") {
    if (name === "data-src" && !this.attrs.src) {
      this.attrName = "src";
    } else if (this.tagName === "img" || this.tagName === "a") {
      this.attrName = name;
    } else {
      this.attrName = void 0;
    }
  } else {
    this.attrName = name;
    this.attrs[name] = "T";
  }
};
Parser.prototype.onAttrVal = function(val) {
  const name = this.attrName || "";
  if (name === "style" || name === "href") {
    this.attrs[name] = decodeEntity(val, true);
  } else if (name.includes("src")) {
    this.attrs[name] = this.getUrl(decodeEntity(val, true));
  } else if (name) {
    this.attrs[name] = val;
  }
};
Parser.prototype.onOpenTag = function(selfClose) {
  const node = /* @__PURE__ */ Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs;
  if (this.options.nodes.length) {
    node.type = "node";
  }
  this.attrs = /* @__PURE__ */ Object.create(null);
  const attrs = node.attrs;
  const parent2 = this.stack[this.stack.length - 1];
  const siblings = parent2 ? parent2.children : this.nodes;
  const close = this.xml ? selfClose : config.voidTags[node.name];
  if (tagSelector[node.name]) {
    attrs.class = tagSelector[node.name] + (attrs.class ? " " + attrs.class : "");
  }
  if (node.name === "embed") {
    const src = attrs.src || "";
    if (src.includes(".mp4") || src.includes(".3gp") || src.includes(".m3u8") || (attrs.type || "").includes("video")) {
      node.name = "video";
    } else if (src.includes(".mp3") || src.includes(".wav") || src.includes(".aac") || src.includes(".m4a") || (attrs.type || "").includes("audio")) {
      node.name = "audio";
    }
    if (attrs.autostart) {
      attrs.autoplay = "T";
    }
    attrs.controls = "T";
  }
  if (node.name === "video" || node.name === "audio") {
    if (node.name === "video" && !attrs.id) {
      attrs.id = "v" + idIndex++;
    }
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = "T";
    }
    node.src = [];
    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = void 0;
    }
    this.expose();
  }
  if (close) {
    if (!this.hook(node) || config.ignoreTags[node.name]) {
      if (node.name === "base" && !this.options.domain) {
        this.options.domain = attrs.href;
      } else if (node.name === "source" && parent2 && (parent2.name === "video" || parent2.name === "audio") && attrs.src) {
        parent2.src.push(attrs.src);
      }
      return;
    }
    const styleObj = this.parseStyle(node);
    if (node.name === "img") {
      if (attrs.src) {
        if (attrs.src.includes("webp")) {
          node.webp = "T";
        }
        if (attrs.src.includes("data:") && !attrs["original-src"]) {
          attrs.ignore = "T";
        }
        if (!attrs.ignore || node.webp || attrs.src.includes("cloud://")) {
          for (let i = this.stack.length; i--; ) {
            const item = this.stack[i];
            if (item.name === "a") {
              node.a = item.attrs;
            }
            if (item.name === "table" && !node.webp && !attrs.src.includes("cloud://")) {
              if (!styleObj.display || styleObj.display.includes("inline")) {
                node.t = "inline-block";
              } else {
                node.t = styleObj.display;
              }
              styleObj.display = void 0;
            }
            const style = item.attrs.style || "";
            if (style.includes("flex:") && !style.includes("flex:0") && !style.includes("flex: 0") && (!styleObj.width || parseInt(styleObj.width) > 100)) {
              styleObj.width = "100% !important";
              styleObj.height = "";
              for (let j = i + 1; j < this.stack.length; j++) {
                this.stack[j].attrs.style = (this.stack[j].attrs.style || "").replace("inline-", "");
              }
            } else if (style.includes("flex") && styleObj.width === "100%") {
              for (let j = i + 1; j < this.stack.length; j++) {
                const style2 = this.stack[j].attrs.style || "";
                if (!style2.includes(";width") && !style2.includes(" width") && style2.indexOf("width") !== 0) {
                  styleObj.width = "";
                  break;
                }
              }
            } else if (style.includes("inline-block")) {
              if (styleObj.width && styleObj.width[styleObj.width.length - 1] === "%") {
                item.attrs.style += ";max-width:" + styleObj.width;
                styleObj.width = "";
              } else {
                item.attrs.style += ";max-width:100%";
              }
            }
            item.c = 1;
          }
          attrs.i = this.imgList.length.toString();
          let src = attrs["original-src"] || attrs.src;
          if (this.imgList.includes(src)) {
            let i = src.indexOf("://");
            if (i !== -1) {
              i += 3;
              let newSrc = src.substr(0, i);
              for (; i < src.length; i++) {
                if (src[i] === "/")
                  break;
                newSrc += Math.random() > 0.5 ? src[i].toUpperCase() : src[i];
              }
              newSrc += src.substr(i);
              src = newSrc;
            }
          }
          this.imgList.push(src);
          if (!node.t) {
            this.imgList._unloadimgs += 1;
          }
        }
      }
      if (styleObj.display === "inline") {
        styleObj.display = "";
      }
      if (attrs.ignore) {
        styleObj["max-width"] = styleObj["max-width"] || "100%";
        attrs.style += ";-webkit-touch-callout:none";
      }
      if (parseInt(styleObj.width) > windowWidth) {
        styleObj.height = void 0;
      }
      if (!isNaN(parseInt(styleObj.width))) {
        node.w = "T";
      }
      if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent2 && (parent2.attrs.style || "").includes("height"))) {
        node.h = "T";
      }
    } else if (node.name === "svg") {
      siblings.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }
    for (const key in styleObj) {
      if (styleObj[key]) {
        attrs.style += `;${key}:${styleObj[key].replace(" !important", "")}`;
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
    if (!attrs.style) {
      delete attrs.style;
    }
  } else {
    if ((node.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
      this.pre = node.pre = 1;
    }
    node.children = [];
    this.stack.push(node);
  }
  siblings.push(node);
};
Parser.prototype.onCloseTag = function(name) {
  name = this.xml ? name : name.toLowerCase();
  let i;
  for (i = this.stack.length; i--; ) {
    if (this.stack[i].name === name)
      break;
  }
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name === "p" || name === "br") {
    const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name,
      attrs: {
        class: tagSelector[name] || "",
        style: this.tagStyle[name] || ""
      }
    });
  }
};
Parser.prototype.popNode = function() {
  const node = this.stack.pop();
  let attrs = node.attrs;
  const children = node.children;
  const parent2 = this.stack[this.stack.length - 1];
  const siblings = parent2 ? parent2.children : this.nodes;
  if (!this.hook(node) || config.ignoreTags[node.name]) {
    if (node.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
      index$1.setNavigationBarTitle({
        title: children[0].text
      });
    }
    siblings.pop();
    return;
  }
  if (node.pre && this.pre !== 2) {
    this.pre = node.pre = void 0;
    for (let i = this.stack.length; i--; ) {
      if (this.stack[i].pre) {
        this.pre = 1;
      }
    }
  }
  const styleObj = {};
  if (node.name === "svg") {
    if (this.xml > 1) {
      this.xml--;
      return;
    }
    let src = "";
    const style = attrs.style;
    attrs.style = "";
    attrs.xmlns = "http://www.w3.org/2000/svg";
    (function traversal(node2) {
      if (node2.type === "text") {
        src += node2.text;
        return;
      }
      const name = config.svgDict[node2.name] || node2.name;
      src += "<" + name;
      for (const item in node2.attrs) {
        const val = node2.attrs[item];
        if (val) {
          src += ` ${config.svgDict[item] || item}="${val}"`;
        }
      }
      if (!node2.children) {
        src += "/>";
      } else {
        src += ">";
        for (let i = 0; i < node2.children.length; i++) {
          traversal(node2.children[i]);
        }
        src += "</" + name + ">";
      }
    })(node);
    node.name = "img";
    node.attrs = {
      src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
      style,
      ignore: "T"
    };
    node.children = void 0;
    this.xml = false;
    config.ignoreTags.style = true;
    return;
  }
  if (attrs.align) {
    if (node.name === "table") {
      if (attrs.align === "center") {
        styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
      } else {
        styleObj.float = attrs.align;
      }
    } else {
      styleObj["text-align"] = attrs.align;
    }
    attrs.align = void 0;
  }
  if (attrs.dir) {
    styleObj.direction = attrs.dir;
    attrs.dir = void 0;
  }
  if (node.name === "font") {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = void 0;
    }
    if (attrs.face) {
      styleObj["font-family"] = attrs.face;
      attrs.face = void 0;
    }
    if (attrs.size) {
      let size2 = parseInt(attrs.size);
      if (!isNaN(size2)) {
        if (size2 < 1) {
          size2 = 1;
        } else if (size2 > 7) {
          size2 = 7;
        }
        styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size2 - 1];
      }
      attrs.size = void 0;
    }
  }
  if ((attrs.class || "").includes("align-center")) {
    styleObj["text-align"] = "center";
  }
  Object.assign(styleObj, this.parseStyle(node));
  if (node.name !== "table" && parseInt(styleObj.width) > windowWidth) {
    styleObj["max-width"] = "100%";
    styleObj["box-sizing"] = "border-box";
  }
  if (config.blockTags[node.name]) {
    node.name = "div";
  } else if (!config.trustTags[node.name] && !this.xml) {
    node.name = "span";
  }
  if (node.name === "a" || node.name === "ad") {
    this.expose();
  } else if (node.name === "video") {
    if ((styleObj.height || "").includes("auto")) {
      styleObj.height = void 0;
    }
  } else if ((node.name === "ul" || node.name === "ol") && node.c) {
    const types2 = {
      a: "lower-alpha",
      A: "upper-alpha",
      i: "lower-roman",
      I: "upper-roman"
    };
    if (types2[attrs.type]) {
      attrs.style += ";list-style-type:" + types2[attrs.type];
      attrs.type = void 0;
    }
    for (let i = children.length; i--; ) {
      if (children[i].name === "li") {
        children[i].c = 1;
      }
    }
  } else if (node.name === "table") {
    let padding = parseFloat(attrs.cellpadding);
    let spacing = parseFloat(attrs.cellspacing);
    const border = parseFloat(attrs.border);
    const bordercolor = styleObj["border-color"];
    const borderstyle = styleObj["border-style"];
    if (node.c) {
      if (isNaN(padding)) {
        padding = 2;
      }
      if (isNaN(spacing)) {
        spacing = 2;
      }
    }
    if (border) {
      attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
    }
    if (node.flag && node.c) {
      styleObj.display = "grid";
      if (spacing) {
        styleObj["grid-gap"] = spacing + "px";
        styleObj.padding = spacing + "px";
      } else if (border) {
        attrs.style += ";border-left:0;border-top:0";
      }
      const width = [];
      const trList = [];
      const cells = [];
      const map2 = {};
      (function traversal(nodes) {
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].name === "tr") {
            trList.push(nodes[i]);
          } else {
            traversal(nodes[i].children || []);
          }
        }
      })(children);
      for (let row = 1; row <= trList.length; row++) {
        let col = 1;
        for (let j = 0; j < trList[row - 1].children.length; j++) {
          const td = trList[row - 1].children[j];
          if (td.name === "td" || td.name === "th") {
            while (map2[row + "." + col]) {
              col++;
            }
            let style = td.attrs.style || "";
            let start = style.indexOf("width") ? style.indexOf(";width") : 0;
            if (start !== -1) {
              let end = style.indexOf(";", start + 6);
              if (end === -1) {
                end = style.length;
              }
              if (!td.attrs.colspan) {
                width[col] = style.substring(start ? start + 7 : 6, end);
              }
              style = style.substr(0, start) + style.substr(end);
            }
            style += ";display:flex";
            start = style.indexOf("vertical-align");
            if (start !== -1) {
              const val = style.substr(start + 15, 10);
              if (val.includes("middle")) {
                style += ";align-items:center";
              } else if (val.includes("bottom")) {
                style += ";align-items:flex-end";
              }
            } else {
              style += ";align-items:center";
            }
            start = style.indexOf("text-align");
            if (start !== -1) {
              const val = style.substr(start + 11, 10);
              if (val.includes("center")) {
                style += ";justify-content: center";
              } else if (val.includes("right")) {
                style += ";justify-content: right";
              }
            }
            style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
            if (td.attrs.colspan) {
              style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
              if (!td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
              }
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
              if (!td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
              }
              for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                  map2[row + rowspan + "." + (col - colspan)] = 1;
                }
              }
            }
            if (style) {
              td.attrs.style = style;
            }
            cells.push(td);
            col++;
          }
        }
        if (row === 1) {
          let temp = "";
          for (let i = 1; i < col; i++) {
            temp += (width[i] ? width[i] : "auto") + " ";
          }
          styleObj["grid-template-columns"] = temp;
        }
      }
      node.children = cells;
    } else {
      if (node.c) {
        styleObj.display = "table";
      }
      if (!isNaN(spacing)) {
        styleObj["border-spacing"] = spacing + "px";
      }
      if (border || padding) {
        (function traversal(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            const td = nodes[i];
            if (td.name === "th" || td.name === "td") {
              if (border) {
                td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
              }
              if (padding) {
                td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
              }
            } else if (td.children) {
              traversal(td.children);
            }
          }
        })(children);
      }
    }
    if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
      const table = Object.assign({}, node);
      node.name = "div";
      node.attrs = {
        style: "overflow:auto"
      };
      node.children = [table];
      attrs = table.attrs;
    }
  } else if ((node.name === "td" || node.name === "th") && (attrs.colspan || attrs.rowspan)) {
    for (let i = this.stack.length; i--; ) {
      if (this.stack[i].name === "table") {
        this.stack[i].flag = 1;
        break;
      }
    }
  } else if (node.name === "ruby") {
    node.name = "span";
    for (let i = 0; i < children.length - 1; i++) {
      if (children[i].type === "text" && children[i + 1].name === "rt") {
        children[i] = {
          name: "div",
          attrs: {
            style: "display:inline-block;text-align:center"
          },
          children: [{
            name: "div",
            attrs: {
              style: "font-size:50%;" + (children[i + 1].attrs.style || "")
            },
            children: children[i + 1].children
          }, children[i]]
        };
        children.splice(i + 1, 1);
      }
    }
  } else if (node.c) {
    (function traversal(node2) {
      node2.c = 2;
      for (let i = node2.children.length; i--; ) {
        const child = node2.children[i];
        if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
          traversal(child);
        }
        if (!child.c || child.name === "table") {
          node2.c = 1;
        }
      }
    })(node);
  }
  if ((styleObj.display || "").includes("flex") && !node.c) {
    for (let i = children.length; i--; ) {
      const item = children[i];
      if (item.f) {
        item.attrs.style = (item.attrs.style || "") + item.f;
        item.f = void 0;
      }
    }
  }
  const flex = parent2 && ((parent2.attrs.style || "").includes("flex") || (parent2.attrs.style || "").includes("grid")) && !(node.c && wx$1.getNFCAdapter);
  if (flex) {
    node.f = ";max-width:100%";
  }
  if (children.length >= 50 && node.c && !(styleObj.display || "").includes("flex")) {
    mergeNodes(children);
  }
  for (const key in styleObj) {
    if (styleObj[key]) {
      const val = `;${key}:${styleObj[key].replace(" !important", "")}`;
      if (flex && (key.includes("flex") && key !== "flex-direction" || key === "align-self" || key.includes("grid") || styleObj[key][0] === "-" || key.includes("width") && val.includes("%"))) {
        node.f += val;
        if (key === "width") {
          attrs.style += ";width:100%";
        }
      } else {
        attrs.style += val;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || void 0;
  for (const key in attrs) {
    if (!attrs[key]) {
      delete attrs[key];
    }
  }
};
Parser.prototype.onText = function(text) {
  if (!this.pre) {
    let trim2 = "";
    let flag2;
    for (let i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) {
        trim2 += text[i];
      } else {
        if (trim2[trim2.length - 1] !== " ") {
          trim2 += " ";
        }
        if (text[i] === "\n" && !flag2) {
          flag2 = true;
        }
      }
    }
    if (trim2 === " ") {
      if (flag2)
        return;
      else {
        const parent2 = this.stack[this.stack.length - 1];
        if (parent2 && parent2.name[0] === "t")
          return;
      }
    }
    text = trim2;
  }
  const node = /* @__PURE__ */ Object.create(null);
  node.type = "text";
  node.text = decodeEntity(text);
  if (this.hook(node)) {
    if (this.options.selectable === "force" && system.includes("iOS") && !index$1.canIUse("rich-text.user-select")) {
      this.expose();
    }
    const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node);
  }
};
function Lexer(handler) {
  this.handler = handler;
}
Lexer.prototype.parse = function(content) {
  this.content = content || "";
  this.i = 0;
  this.start = 0;
  this.state = this.text;
  for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
    this.state();
  }
};
Lexer.prototype.checkClose = function(method3) {
  const selfClose = this.content[this.i] === "/";
  if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
    if (method3) {
      this.handler[method3](this.content.substring(this.start, this.i));
    }
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);
    if (this.handler.tagName === "script") {
      this.i = this.content.indexOf("</", this.i);
      if (this.i !== -1) {
        this.i += 2;
        this.start = this.i;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};
Lexer.prototype.text = function() {
  this.i = this.content.indexOf("<", this.i);
  if (this.i === -1) {
    if (this.start < this.content.length) {
      this.handler.onText(this.content.substring(this.start, this.content.length));
    }
    return;
  }
  const c2 = this.content[this.i + 1];
  if (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z") {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c2 === "/" || c2 === "!" || c2 === "?") {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    const next = this.content[this.i + 2];
    if (c2 === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
      this.i += 2;
      this.start = this.i;
      this.state = this.endTag;
      return;
    }
    let end = "-->";
    if (c2 !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
      end = ">";
    }
    this.i = this.content.indexOf(end, this.i);
    if (this.i !== -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else {
    this.i++;
  }
};
Lexer.prototype.tagName = function() {
  if (blankChar[this.content[this.i]]) {
    this.handler.onTagName(this.content.substring(this.start, this.i));
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose("onTagName")) {
    this.i++;
  }
};
Lexer.prototype.attrName = function() {
  let c2 = this.content[this.i];
  if (blankChar[c2] || c2 === "=") {
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    let needVal = c2 === "=";
    const len = this.content.length;
    while (++this.i < len) {
      c2 = this.content[this.i];
      if (!blankChar[c2]) {
        if (this.checkClose())
          return;
        if (needVal) {
          this.start = this.i;
          this.state = this.attrVal;
          return;
        }
        if (this.content[this.i] === "=") {
          needVal = true;
        } else {
          this.start = this.i;
          this.state = this.attrName;
          return;
        }
      }
    }
  } else if (!this.checkClose("onAttrName")) {
    this.i++;
  }
};
Lexer.prototype.attrVal = function() {
  const c2 = this.content[this.i];
  const len = this.content.length;
  if (c2 === '"' || c2 === "'") {
    this.start = ++this.i;
    this.i = this.content.indexOf(c2, this.i);
    if (this.i === -1)
      return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } else {
    for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose("onAttrVal"))
        return;
    }
  }
  while (blankChar[this.content[++this.i]])
    ;
  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};
Lexer.prototype.endTag = function() {
  const c2 = this.content[this.i];
  if (blankChar[c2] || c2 === ">" || c2 === "/") {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));
    if (c2 !== ">") {
      this.i = this.content.indexOf(">", this.i);
      if (this.i === -1)
        return;
    }
    this.start = ++this.i;
    this.state = this.text;
  } else {
    this.i++;
  }
};
const props$k = {
  props: __spreadValues({
    // 标题，有值则显示，同时会显示关闭按钮
    title: {
      type: String,
      default: ""
    },
    // 选项上方的描述信息
    description: {
      type: String,
      default: ""
    },
    // 数据
    actions: {
      type: Array,
      default: () => []
    },
    // 取消按钮的文字，不为空时显示按钮
    cancelText: {
      type: String,
      default: ""
    },
    // 点击某个菜单项时是否关闭弹窗
    closeOnClickAction: {
      type: Boolean,
      default: true
    },
    // 处理底部安全区（默认true）
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: ""
    },
    // 点击遮罩是否允许关闭 (默认true)
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: 0
    }
  }, (__ = (_Z = index$1.$uv) == null ? void 0 : _Z.props) == null ? void 0 : __.actionSheet)
};
const props$j = {
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
  }, (_aa = (_$ = index$1.$uv) == null ? void 0 : _$.props) == null ? void 0 : _aa.datetimePicker)
};
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_dayjs_min = __commonJS({
  "uvuidayjs"(exports2, module2) {
    !function(t2, e2) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e2();
    }(exports2, function() {
      var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s2 = "minute", u2 = "hour", a = "day", o2 = "week", f2 = "month", h = "quarter", c2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t22) {
        var e22 = ["th", "st", "nd", "rd"], n22 = t22 % 100;
        return "[" + t22 + (e22[(n22 - 20) % 10] || e22[n22] || e22[0]) + "]";
      } }, m = function(t22, e22, n22) {
        var r22 = String(t22);
        return !r22 || r22.length >= e22 ? t22 : "" + Array(e22 + 1 - r22.length).join(n22) + t22;
      }, v = { s: m, z: function(t22) {
        var e22 = -t22.utcOffset(), n22 = Math.abs(e22), r22 = Math.floor(n22 / 60), i2 = n22 % 60;
        return (e22 <= 0 ? "+" : "-") + m(r22, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t22(e22, n22) {
        if (e22.date() < n22.date())
          return -t22(n22, e22);
        var r22 = 12 * (n22.year() - e22.year()) + (n22.month() - e22.month()), i2 = e22.clone().add(r22, f2), s22 = n22 - i2 < 0, u22 = e22.clone().add(r22 + (s22 ? -1 : 1), f2);
        return +(-(r22 + (n22 - i2) / (s22 ? i2 - u22 : u22 - i2)) || 0);
      }, a: function(t22) {
        return t22 < 0 ? Math.ceil(t22) || 0 : Math.floor(t22);
      }, p: function(t22) {
        return { M: f2, y: c2, w: o2, d: a, D: d, h: u2, m: s2, s: i, ms: r2, Q: h }[t22] || String(t22 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t22) {
        return void 0 === t22;
      } }, g = "en", D = {};
      D[g] = M;
      var p2 = function(t22) {
        return t22 instanceof _;
      }, S = function t22(e22, n22, r22) {
        var i2;
        if (!e22)
          return g;
        if ("string" == typeof e22) {
          var s22 = e22.toLowerCase();
          D[s22] && (i2 = s22), n22 && (D[s22] = n22, i2 = s22);
          var u22 = e22.split("-");
          if (!i2 && u22.length > 1)
            return t22(u22[0]);
        } else {
          var a2 = e22.name;
          D[a2] = e22, i2 = a2;
        }
        return !r22 && i2 && (g = i2), i2 || !r22 && g;
      }, w = function(t22, e22) {
        if (p2(t22))
          return t22.clone();
        var n22 = "object" == typeof e22 ? e22 : {};
        return n22.date = t22, n22.args = arguments, new _(n22);
      }, O = v;
      O.l = S, O.i = p2, O.w = function(t22, e22) {
        return w(t22, { locale: e22.$L, utc: e22.$u, x: e22.$x, $offset: e22.$offset });
      };
      var _ = function() {
        function M2(t22) {
          this.$L = S(t22.locale, null, true), this.parse(t22);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t22) {
          this.$d = function(t3) {
            var e22 = t3.date, n22 = t3.utc;
            if (null === e22)
              return /* @__PURE__ */ new Date(NaN);
            if (O.u(e22))
              return /* @__PURE__ */ new Date();
            if (e22 instanceof Date)
              return new Date(e22);
            if ("string" == typeof e22 && !/Z$/i.test(e22)) {
              var r22 = e22.match($);
              if (r22) {
                var i2 = r22[2] - 1 || 0, s22 = (r22[7] || "0").substring(0, 3);
                return n22 ? new Date(Date.UTC(r22[1], i2, r22[3] || 1, r22[4] || 0, r22[5] || 0, r22[6] || 0, s22)) : new Date(r22[1], i2, r22[3] || 1, r22[4] || 0, r22[5] || 0, r22[6] || 0, s22);
              }
            }
            return new Date(e22);
          }(t22), this.$x = t22.x || {}, this.init();
        }, m2.init = function() {
          var t22 = this.$d;
          this.$y = t22.getFullYear(), this.$M = t22.getMonth(), this.$D = t22.getDate(), this.$W = t22.getDay(), this.$H = t22.getHours(), this.$m = t22.getMinutes(), this.$s = t22.getSeconds(), this.$ms = t22.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t22, e22) {
          var n22 = w(t22);
          return this.startOf(e22) <= n22 && n22 <= this.endOf(e22);
        }, m2.isAfter = function(t22, e22) {
          return w(t22) < this.startOf(e22);
        }, m2.isBefore = function(t22, e22) {
          return this.endOf(e22) < w(t22);
        }, m2.$g = function(t22, e22, n22) {
          return O.u(t22) ? this[e22] : this.set(n22, t22);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t22, e22) {
          var n22 = this, r22 = !!O.u(e22) || e22, h2 = O.p(t22), l2 = function(t3, e3) {
            var i2 = O.w(n22.$u ? Date.UTC(n22.$y, e3, t3) : new Date(n22.$y, e3, t3), n22);
            return r22 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n22.toDate()[t3].apply(n22.toDate("s"), (r22 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n22);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (h2) {
            case c2:
              return r22 ? l2(1, 0) : l2(31, 11);
            case f2:
              return r22 ? l2(1, M3) : l2(0, M3 + 1);
            case o2:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r22 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u2:
              return $2(v2 + "Minutes", 1);
            case s2:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t22) {
          return this.startOf(t22, false);
        }, m2.$set = function(t22, e22) {
          var n22, o22 = O.p(t22), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n22 = {}, n22[a] = h2 + "Date", n22[d] = h2 + "Date", n22[f2] = h2 + "Month", n22[c2] = h2 + "FullYear", n22[u2] = h2 + "Hours", n22[s2] = h2 + "Minutes", n22[i] = h2 + "Seconds", n22[r2] = h2 + "Milliseconds", n22)[o22], $2 = o22 === a ? this.$D + (e22 - this.$W) : e22;
          if (o22 === f2 || o22 === c2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t22, e22) {
          return this.clone().$set(t22, e22);
        }, m2.get = function(t22) {
          return this[O.p(t22)]();
        }, m2.add = function(r22, h2) {
          var d2, l2 = this;
          r22 = Number(r22);
          var $2 = O.p(h2), y2 = function(t22) {
            var e22 = w(l2);
            return O.w(e22.date(e22.date() + Math.round(t22 * r22)), l2);
          };
          if ($2 === f2)
            return this.set(f2, this.$M + r22);
          if ($2 === c2)
            return this.set(c2, this.$y + r22);
          if ($2 === a)
            return y2(1);
          if ($2 === o2)
            return y2(7);
          var M3 = (d2 = {}, d2[s2] = e2, d2[u2] = n2, d2[i] = t2, d2)[$2] || 1, m3 = this.$d.getTime() + r22 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t22, e22) {
          return this.add(-1 * t22, e22);
        }, m2.format = function(t22) {
          var e22 = this, n22 = this.$locale();
          if (!this.isValid())
            return n22.invalidDate || l;
          var r22 = t22 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s22 = this.$H, u22 = this.$m, a2 = this.$M, o22 = n22.weekdays, f22 = n22.months, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e22, r22)) || i3[n3].slice(0, s3);
          }, c22 = function(t3) {
            return O.s(s22 % 12 || 12, t3, "0");
          }, d2 = n22.meridiem || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n22.monthsShort, a2, f22, 3), MMMM: h2(f22, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n22.weekdaysMin, this.$W, o22, 2), ddd: h2(n22.weekdaysShort, this.$W, o22, 3), dddd: o22[this.$W], H: String(s22), HH: O.s(s22, 2, "0"), h: c22(1), hh: c22(2), a: d2(s22, u22, true), A: d2(s22, u22, false), m: String(u22), mm: O.s(u22, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
          return r22.replace(y, function(t3, e3) {
            return e3 || $2[t3] || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r22, d2, l2) {
          var $2, y2 = O.p(d2), M3 = w(r22), m3 = (M3.utcOffset() - this.utcOffset()) * e2, v2 = this - M3, g2 = O.m(this, M3);
          return g2 = ($2 = {}, $2[c2] = g2 / 12, $2[f2] = g2, $2[h] = g2 / 3, $2[o2] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u2] = v2 / n2, $2[s2] = v2 / e2, $2[i] = v2 / t2, $2)[y2] || v2, l2 ? g2 : O.a(g2);
        }, m2.daysInMonth = function() {
          return this.endOf(f2).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t22, e22) {
          if (!t22)
            return this.$L;
          var n22 = this.clone(), r22 = S(t22, e22, true);
          return r22 && (n22.$L = r22), n22;
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
      return w.prototype = T, [["$ms", r2], ["$s", i], ["$m", s2], ["$H", u2], ["$W", a], ["$M", f2], ["$y", c2], ["$D", d]].forEach(function(t22) {
        T[t22[1]] = function(e22) {
          return this.$g(e22, t22[0], t22[1]);
        };
      }), w.extend = function(t22, e22) {
        return t22.$i || (t22(e22, _, w), t22.$i = true), w;
      }, w.locale = S, w.isDayjs = p2, w.unix = function(t22) {
        return w(1e3 * t22);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  }
});
const dayjs = require_dayjs_min();
const props$i = {
  props: __spreadValues({
    // 是否展示骨架组件
    loading: {
      type: Boolean,
      default: true
    },
    // 是否开启动画效果
    animate: {
      type: Boolean,
      default: true
    },
    // 段落占位图行数
    rows: {
      type: [String, Number],
      default: 0
    },
    // 段落占位图的宽度
    rowsWidth: {
      type: [String, Number, Array],
      default: "100%"
    },
    // 段落占位图的高度
    rowsHeight: {
      type: [String, Number, Array],
      default: 18
    },
    // 段落占位图的左边距
    rowsLeft: {
      type: [String, Number, Array],
      default: 0
    },
    // 是否展示标题占位图
    title: {
      type: Boolean,
      default: true
    },
    // 段落标题的宽度
    titleWidth: {
      type: [String, Number],
      default: "50%"
    },
    // 段落标题的高度
    titleHeight: {
      type: [String, Number],
      default: 18
    },
    // 是否展示头像占位图
    avatar: {
      type: Boolean,
      default: false
    },
    // 头像占位图大小
    avatarSize: {
      type: [String, Number],
      default: 32
    },
    // 头像占位图的形状，circle-圆形，square-方形
    avatarShape: {
      type: String,
      default: "circle"
    }
  }, (_ca = (_ba = index$1.$uv) == null ? void 0 : _ba.props) == null ? void 0 : _ca.skeleton)
};
const props$h = {
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
  }, (_ea = (_da = index$1.$uv) == null ? void 0 : _da.props) == null ? void 0 : _ea.loadmore)
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
const props$g = {
  props: __spreadValues({
    // 显示的内容，数组
    text: {
      type: [Array, String],
      default: () => []
    },
    // 通告滚动模式，row-横向滚动，column-竖向滚动
    direction: {
      type: String,
      default: "row"
    },
    // direction = row时，是否使用步进形式滚动
    step: {
      type: Boolean,
      default: false
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: "volume"
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ""
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: "#f9ae3d"
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#fdf6ec"
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 滚动一个周期的时间长，单位ms
    duration: {
      type: [String, Number],
      default: 2e3
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
    },
    // 是否禁止用手滑动切换
    // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
    disableTouch: {
      type: Boolean,
      default: true
    },
    // 是否禁止滚动，仅`direction="column"生效`
    disableScroll: {
      type: Boolean,
      default: false
    }
  }, (_ga = (_fa = index$1.$uv) == null ? void 0 : _fa.props) == null ? void 0 : _ga.noticeBar)
};
const props$f = {
  props: __spreadValues({
    value: {
      type: [String, Number],
      default: 0
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    // 要显示的星星数量
    count: {
      type: [String, Number],
      default: 5
    },
    // 是否不可选中
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 星星的大小，单位px
    size: {
      type: [String, Number],
      default: 18
    },
    // 未选中时的颜色
    inactiveColor: {
      type: String,
      default: "#b2b2b2"
    },
    // 选中的颜色
    activeColor: {
      type: String,
      default: "#FA3534"
    },
    // 星星之间的间距，单位px
    gutter: {
      type: [String, Number],
      default: 4
    },
    // 最少能选择的星星个数
    minCount: {
      type: [String, Number],
      default: 1
    },
    // 是否允许半星
    allowHalf: {
      type: Boolean,
      default: false
    },
    // 选中时的图标(星星)
    activeIcon: {
      type: String,
      default: "star-fill"
    },
    // 未选中时的图标(星星)
    inactiveIcon: {
      type: String,
      default: "star"
    },
    // 是否可以通过滑动手势选择评分
    touchable: {
      type: Boolean,
      default: false
    }
  }, (_ia = (_ha = index$1.$uv) == null ? void 0 : _ha.props) == null ? void 0 : _ia.rate)
};
const props$e = {
  props: __spreadValues({
    // 宫格的name
    name: {
      type: [String, Number, null],
      default: null
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "transparent"
    }
  }, (_ka = (_ja = index$1.$uv) == null ? void 0 : _ja.props) == null ? void 0 : _ka.gridItem)
};
const props$d = {
  props: __spreadValues({
    // 分成几列
    col: {
      type: [String, Number],
      default: 3
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: false
    },
    // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
    align: {
      type: String,
      default: "left"
    }
  }, (_ma = (_la = index$1.$uv) == null ? void 0 : _la.props) == null ? void 0 : _ma.grid)
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
const props$c = {
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
  }, (_oa = (_na = index$1.$uv) == null ? void 0 : _na.props) == null ? void 0 : _oa.text)
};
const props$b = {
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
  }, (_qa = (_pa = index$1.$uv) == null ? void 0 : _pa.props) == null ? void 0 : _qa.line)
};
const props$a = {
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
  }, (_sa = (_ra = index$1.$uv) == null ? void 0 : _ra.props) == null ? void 0 : _sa.toolbar)
};
const props$9 = {
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
  }, (_ua = (_ta = index$1.$uv) == null ? void 0 : _ta.props) == null ? void 0 : _ua.loadingIcon)
};
const props$8 = {
  props: __spreadValues({
    // 倒计时总秒数
    seconds: {
      type: [String, Number],
      default: 60
    },
    // 尚未开始时提示
    startText: {
      type: String,
      default: "获取验证码"
    },
    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: "X秒重新获取"
    },
    // 倒计时结束时的提示
    endText: {
      type: String,
      default: "重新获取"
    },
    // 是否在H5刷新或各端返回再进入时继续倒计时
    keepRunning: {
      type: Boolean,
      default: false
    },
    // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
    uniqueKey: {
      type: String,
      default: ""
    }
  }, (_wa = (_va = index$1.$uv) == null ? void 0 : _va.props) == null ? void 0 : _wa.code)
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
const props$7 = {
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
  }, (_ya = (_xa = index$1.$uv) == null ? void 0 : _xa.props) == null ? void 0 : _ya.upload)
};
const props$6 = {
  props: __spreadValues({
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    // 是否为加载中状态
    loading: {
      type: Boolean,
      default: false
    },
    // 是否为禁用装填
    disabled: {
      type: Boolean,
      default: false
    },
    // 开关尺寸，单位px
    size: {
      type: [String, Number],
      default: 25
    },
    // 打开时的背景颜色
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 关闭时的背景颜色
    inactiveColor: {
      type: String,
      default: "#fff"
    },
    // switch打开时的值
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    // switch关闭时的值
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    // 是否开启异步变更，开启后需要手动控制输入值
    asyncChange: {
      type: Boolean,
      default: false
    },
    // 圆点与外边框的距离
    space: {
      type: [String, Number],
      default: 0
    }
  }, (_Aa = (_za = index$1.$uv) == null ? void 0 : _za.props) == null ? void 0 : _Aa.switch)
};
const props$5 = {
  props: __spreadValues({
    // 背景颜色（默认transparent）
    bgColor: {
      type: String,
      default: "transparent"
    },
    // 分割槽高度，单位px（默认20）
    height: {
      type: [String, Number],
      default: 20
    },
    // 与上一个组件的距离
    marginTop: {
      type: [String, Number],
      default: 0
    },
    // 与下一个组件的距离
    marginBottom: {
      type: [String, Number],
      default: 0
    }
  }, (_Ca = (_Ba = index$1.$uv) == null ? void 0 : _Ba.props) == null ? void 0 : _Ca.gap)
};
const props$4 = {
  props: __spreadValues({
    // 显示的内容，字符串
    text: {
      type: [Array],
      default: ""
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: "volume"
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ""
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: "#f9ae3d"
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#fdf6ec"
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    },
    // direction = row时，是否使用步进形式滚动
    step: {
      type: Boolean,
      default: false
    },
    // 滚动一个周期的时间长，单位ms
    duration: {
      type: [String, Number],
      default: 1500
    },
    // 是否禁止用手滑动切换，仅`direction="column"生效`
    // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
    disableTouch: {
      type: Boolean,
      default: true
    },
    // 是否禁止滚动，仅`direction="column"生效`
    disableScroll: {
      type: Boolean,
      default: false
    }
  }, (_Ea = (_Da = index$1.$uv) == null ? void 0 : _Da.props) == null ? void 0 : _Ea.columnNotice)
};
const props$3 = {
  props: __spreadValues({
    // 显示的内容，字符串
    text: {
      type: String,
      default: ""
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: "volume"
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ""
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: "#f9ae3d"
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#fdf6ec"
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    }
  }, (_Ga = (_Fa = index$1.$uv) == null ? void 0 : _Fa.props) == null ? void 0 : _Ga.rowNotice)
};
const props$2 = {
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
  }, (_Ia = (_Ha = index$1.$uv) == null ? void 0 : _Ha.props) == null ? void 0 : _Ia.overlay)
};
const props$1 = {
  props: {
    bgColor: {
      type: String,
      default: "transparent"
    }
  }
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
  }, (_Ka = (_Ja = index$1.$uv) == null ? void 0 : _Ja.props) == null ? void 0 : _Ka.link)
};
exports.Enum = Enum;
exports.Parser = Parser;
exports.Pinia = Pinia;
exports.Schema = Schema;
exports._export_sfc = _export_sfc;
exports._sfc_main = _sfc_main;
exports.array = array;
exports.button = button;
exports.chooseFile = chooseFile;
exports.colorGradient = colorGradient;
exports.createAnimation = createAnimation;
exports.createPinia = createPinia;
exports.createSSRApp = createSSRApp;
exports.dayjs = dayjs$1;
exports.dayjs$1 = dayjs;
exports.defineComponent = defineComponent;
exports.defineStore = defineStore;
exports.duration = duration;
exports.e = e;
exports.f = f;
exports.func = func;
exports.icons = icons;
exports.image = image;
exports.index = index$1;
exports.isBetween = isBetween;
exports.isSameSecond = isSameSecond;
exports.isString = isString;
exports.mixin = mixin;
exports.mixin_accept = mixin_accept;
exports.mpMixin = mpMixin;
exports.n = n;
exports.o = o;
exports.onHide = onHide;
exports.onLaunch = onLaunch;
exports.onShow = onShow;
exports.openType = openType;
exports.p = p;
exports.parseFormat = parseFormat;
exports.parseTimeData = parseTimeData;
exports.promise = promise;
exports.props = props$t;
exports.props$1 = props$h;
exports.props$10 = props$z;
exports.props$11 = props$y;
exports.props$12 = props$w;
exports.props$13 = props$v;
exports.props$14 = props$u;
exports.props$15 = props$s;
exports.props$16 = props$r;
exports.props$17 = props$q;
exports.props$18 = props$p;
exports.props$19 = props$o;
exports.props$2 = props$x;
exports.props$20 = props$n;
exports.props$21 = props$m;
exports.props$22 = props$l;
exports.props$23 = props$k;
exports.props$24 = props$j;
exports.props$25 = props$i;
exports.props$26 = props$b;
exports.props$27 = props$9;
exports.props$28 = props$g;
exports.props$29 = props$f;
exports.props$3 = props$C;
exports.props$30 = props$e;
exports.props$31 = props$d;
exports.props$32 = props$c;
exports.props$33 = props$a;
exports.props$34 = props$8;
exports.props$35 = props$7;
exports.props$36 = props$6;
exports.props$37 = props$5;
exports.props$38 = props$4;
exports.props$39 = props$3;
exports.props$4 = props$G;
exports.props$40 = props$2;
exports.props$41 = props$1;
exports.props$42 = props;
exports.props$5 = props$F;
exports.props$6 = props$E;
exports.props$7 = props$D;
exports.props$8 = props$B;
exports.props$9 = props$A;
exports.qs = qs;
exports.r = r;
exports.resolveComponent = resolveComponent;
exports.s = s;
exports.sr = sr;
exports.t = t$1;
exports.throttle = throttle;
exports.u = u;
exports.uvUi = uvUi;
exports.value = value;
exports.video = video;
exports.wx$1 = wx$1;
exports.zStatic = zStatic;
//# sourceMappingURL=vendor.js.map
