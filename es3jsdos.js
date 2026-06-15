var _$r$getItem, _document$hidden, _$r$getItem2, _$r$getItem3, _$r$getItem4, _$r$getItem5, _$r$getItem6, _$r$getItem7, _$r$getItem8, _$r$getItem9;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n29 = 0, F = function F() {}; return { s: F, n: function n() { return _n29 >= r.length ? { done: !0 } : { done: !1, value: r[_n29++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var e = Object.defineProperty,
  t = function t(_t2, n, o) {
    return function (t, n, o) {
      return n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
      }) : t[n] = o;
    }(_t2, "symbol" != _typeof(n) ? n + "" : n, o);
  };
!function () {
  var e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _e3 = _step.value;
        t(_e3);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    new MutationObserver(function (e) {
      var _iterator2 = _createForOfIteratorHelper(e),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n2 = _step2.value;
          if ("childList" === _n2.type) {
            var _iterator3 = _createForOfIteratorHelper(_n2.addedNodes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e2 = _step3.value;
                "LINK" === _e2.tagName && "modulepreload" === _e2.rel && t(_e2);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    var t = function (e) {
      var t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }(e);
    fetch(e.href, t);
  }
}();
var n,
  o,
  r,
  i,
  s,
  a,
  c,
  l,
  u = {},
  d = [],
  p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  f = Array.isArray;
function h(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function m(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function v(e, t, o) {
  var r,
    i,
    s,
    a = {};
  for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : a[s] = t[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : o), "function" == typeof e && null != e.defaultProps) for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
  return y(e, a, r, i, null);
}
function y(e, t, n, i, s) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == s ? ++r : s,
    __i: -1,
    __u: 0
  };
  return null == s && null != o.vnode && o.vnode(a), a;
}
function _() {
  return {
    current: null
  };
}
function g(e) {
  return e.children;
}
function b(e, t) {
  this.props = e, this.context = t;
}
function w(e, t) {
  if (null == t) return e.__ ? w(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? w(e) : null;
}
function k(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return k(e);
  }
}
function x(e) {
  (!e.__d && (e.__d = !0) && i.push(e) && !C.__r++ || s !== o.debounceRendering) && ((s = o.debounceRendering) || a)(C);
}
function C() {
  var e, t, n, r, s, a, l, u, d;
  for (i.sort(c); e = i.shift();) e.__d && (t = i.length, r = void 0, a = (s = (n = e).__v).__e, u = [], d = [], (l = n.__P) && ((r = h({}, s)).__v = s.__v + 1, o.vnode && o.vnode(r), T(l, r, s, n.__n, void 0 !== l.ownerSVGElement, 32 & s.__u ? [a] : null, u, null == a ? w(s) : a, !!(32 & s.__u), d), r.__.__k[r.__i] = r, L(u, r, d), r.__e != a && k(r)), i.length > t && i.sort(c));
  C.__r = 0;
}
function S(e, t, n, o, r, i, s, a, c, l, p) {
  var h,
    m,
    v,
    _,
    b,
    k = o && o.__k || d,
    x = t.length;
  for (n.__d = c, function (e, t, n) {
    var o,
      r,
      i,
      s,
      a,
      c = t.length,
      l = n.length,
      u = l,
      d = 0;
    for (e.__k = [], o = 0; o < c; o++) null != (r = e.__k[o] = null == (r = t[o]) || "boolean" == typeof r || "function" == typeof r ? null : "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? y(null, r, null, null, r) : f(r) ? y(g, {
      children: r
    }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? y(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) ? (r.__ = e, r.__b = e.__b + 1, a = O(r, n, s = o + d, u), r.__i = a, i = null, -1 !== a && (u--, (i = n[a]) && (i.__u |= 131072)), null == i || null === i.__v ? (-1 == a && d--, "function" != typeof r.type && (r.__u |= 65536)) : a !== s && (a === s + 1 ? d++ : a > s ? u > c - s ? d += a - s : d-- : d = a < s && a == s - 1 ? a - s : 0, a !== o + d && (r.__u |= 65536))) : (i = n[o]) && null == i.key && i.__e && (i.__e == e.__d && (e.__d = w(i)), B(i, i, !1), n[o] = null, u--);
    if (u) for (o = 0; o < l; o++) null != (i = n[o]) && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = w(i)), B(i, i));
  }(n, t, k), c = n.__d, h = 0; h < x; h++) null != (v = n.__k[h]) && "boolean" != typeof v && "function" != typeof v && (m = -1 === v.__i ? u : k[v.__i] || u, v.__i = h, T(e, v, m, r, i, s, a, c, l, p), _ = v.__e, v.ref && m.ref != v.ref && (m.ref && z(m.ref, null, v), p.push(v.ref, v.__c || _, v)), null == b && null != _ && (b = _), 65536 & v.__u || m.__k === v.__k ? c = P(v, c, e) : "function" == typeof v.type && void 0 !== v.__d ? c = v.__d : _ && (c = _.nextSibling), v.__d = void 0, v.__u &= -196609);
  n.__d = c, n.__e = b;
}
function P(e, t, n) {
  var o, r;
  if ("function" == typeof e.type) {
    for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = e, t = P(o[r], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function E(e, t) {
  return t = t || [], null == e || "boolean" == typeof e || (f(e) ? e.some(function (e) {
    E(e, t);
  }) : t.push(e)), t;
}
function O(e, t, n, o) {
  var r = e.key,
    i = e.type,
    s = n - 1,
    a = n + 1,
    c = t[n];
  if (null === c || c && r == c.key && i === c.type) return n;
  if (o > (null == c || 131072 & c.__u ? 0 : 1)) for (; s >= 0 || a < t.length;) {
    if (s >= 0) {
      if ((c = t[s]) && !(131072 & c.__u) && r == c.key && i === c.type) return s;
      s--;
    }
    if (a < t.length) {
      if ((c = t[a]) && !(131072 & c.__u) && r == c.key && i === c.type) return a;
      a++;
    }
  }
  return -1;
}
function M(e, t, n) {
  "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px";
}
function j(e, t, n, o, r) {
  var i;
  e: if ("style" === t) {
    if ("string" == typeof n) e.style.cssText = n;else {
      if ("string" == typeof o && (e.style.cssText = o = ""), o) for (t in o) n && t in n || M(e.style, t, "");
      if (n) for (t in n) o && n[t] === o[t] || M(e.style, t, n[t]);
    }
  } else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n.u = o.u : (n.u = Date.now(), e.addEventListener(t, i ? A : D, i)) : e.removeEventListener(t, i ? A : D, i);else {
    if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
      e[t] = null == n ? "" : n;
      break e;
    } catch (s) {}
    "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n));
  }
}
function D(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u) return;
  } else e.t = Date.now();
  return t(o.event ? o.event(e) : e);
}
function A(e) {
  return this.l[e.type + !0](o.event ? o.event(e) : e);
}
function T(e, t, r, i, s, a, c, l, d, p) {
  var v,
    y,
    _,
    k,
    x,
    C,
    P,
    E,
    O,
    M,
    D,
    A,
    T,
    L,
    z,
    B = t.type;
  if (void 0 !== t.constructor) return null;
  128 & r.__u && (d = !!(32 & r.__u), a = [l = t.__e = r.__e]), (v = o.__b) && v(t);
  e: if ("function" == typeof B) try {
    if (E = t.props, O = (v = B.contextType) && i[v.__c], M = v ? O ? O.props.value : v.__ : i, r.__c ? P = (y = t.__c = r.__c).__ = y.__E : ("prototype" in B && B.prototype.render ? t.__c = y = new B(E, M) : (t.__c = y = new b(E, M), y.constructor = B, y.render = I), O && O.sub(y), y.props = E, y.state || (y.state = {}), y.context = M, y.__n = i, _ = y.__d = !0, y.__h = [], y._sb = []), null == y.__s && (y.__s = y.state), null != B.getDerivedStateFromProps && (y.__s == y.state && (y.__s = h({}, y.__s)), h(y.__s, B.getDerivedStateFromProps(E, y.__s))), k = y.props, x = y.state, y.__v = t, _) null == B.getDerivedStateFromProps && null != y.componentWillMount && y.componentWillMount(), null != y.componentDidMount && y.__h.push(y.componentDidMount);else {
      if (null == B.getDerivedStateFromProps && E !== k && null != y.componentWillReceiveProps && y.componentWillReceiveProps(E, M), !y.__e && (null != y.shouldComponentUpdate && !1 === y.shouldComponentUpdate(E, y.__s, M) || t.__v === r.__v)) {
        for (t.__v !== r.__v && (y.props = E, y.state = y.__s, y.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function (e) {
          e && (e.__ = t);
        }), D = 0; D < y._sb.length; D++) y.__h.push(y._sb[D]);
        y._sb = [], y.__h.length && c.push(y);
        break e;
      }
      null != y.componentWillUpdate && y.componentWillUpdate(E, y.__s, M), null != y.componentDidUpdate && y.__h.push(function () {
        y.componentDidUpdate(k, x, C);
      });
    }
    if (y.context = M, y.props = E, y.__P = e, y.__e = !1, A = o.__r, T = 0, "prototype" in B && B.prototype.render) {
      for (y.state = y.__s, y.__d = !1, A && A(t), v = y.render(y.props, y.state, y.context), L = 0; L < y._sb.length; L++) y.__h.push(y._sb[L]);
      y._sb = [];
    } else do {
      y.__d = !1, A && A(t), v = y.render(y.props, y.state, y.context), y.state = y.__s;
    } while (y.__d && ++T < 25);
    y.state = y.__s, null != y.getChildContext && (i = h(h({}, i), y.getChildContext())), _ || null == y.getSnapshotBeforeUpdate || (C = y.getSnapshotBeforeUpdate(k, x)), S(e, f(z = null != v && v.type === g && null == v.key ? v.props.children : v) ? z : [z], t, r, i, s, a, c, l, d, p), y.base = t.__e, t.__u &= -161, y.__h.length && c.push(y), P && (y.__E = y.__ = null);
  } catch (N) {
    t.__v = null, d || null != a ? (t.__e = l, t.__u |= d ? 160 : 32, a[a.indexOf(l)] = null) : (t.__e = r.__e, t.__k = r.__k), o.__e(N, t, r);
  } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = function (e, t, o, r, i, s, a, c, l) {
    var d,
      p,
      h,
      v,
      y,
      _,
      g,
      b = o.props,
      k = t.props,
      x = t.type;
    if ("svg" === x && (i = !0), null != s) for (d = 0; d < s.length; d++) if ((y = s[d]) && "setAttribute" in y == !!x && (x ? y.localName === x : 3 === y.nodeType)) {
      e = y, s[d] = null;
      break;
    }
    if (null == e) {
      if (null === x) return document.createTextNode(k);
      e = i ? document.createElementNS("http://www.w3.org/2000/svg", x) : document.createElement(x, k.is && k), s = null, c = !1;
    }
    if (null === x) b === k || c && e.data === k || (e.data = k);else {
      if (s = s && n.call(e.childNodes), b = o.props || u, !c && null != s) for (b = {}, d = 0; d < e.attributes.length; d++) b[(y = e.attributes[d]).name] = y.value;
      for (d in b) y = b[d], "children" == d || ("dangerouslySetInnerHTML" == d ? h = y : "key" === d || d in k || j(e, d, null, y, i));
      for (d in k) y = k[d], "children" == d ? v = y : "dangerouslySetInnerHTML" == d ? p = y : "value" == d ? _ = y : "checked" == d ? g = y : "key" === d || c && "function" != typeof y || b[d] === y || j(e, d, y, b[d], i);
      if (p) c || h && (p.__html === h.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];else if (h && (e.innerHTML = ""), S(e, f(v) ? v : [v], t, o, r, i && "foreignObject" !== x, s, a, s ? s[0] : o.__k && w(o, 0), c, l), null != s) for (d = s.length; d--;) null != s[d] && m(s[d]);
      c || (d = "value", void 0 !== _ && (_ !== e[d] || "progress" === x && !_ || "option" === x && _ !== b[d]) && j(e, d, _, b[d], !1), d = "checked", void 0 !== g && g !== e[d] && j(e, d, g, b[d], !1));
    }
    return e;
  }(r.__e, t, r, i, s, a, c, d, p);
  (v = o.diffed) && v(t);
}
function L(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) z(n[r], n[++r], n[++r]);
  o.__c && o.__c(t, e), e.some(function (t) {
    try {
      e = t.__h, t.__h = [], e.some(function (e) {
        e.call(t);
      });
    } catch (n) {
      o.__e(n, t.__v);
    }
  });
}
function z(e, t, n) {
  try {
    "function" == typeof e ? e(t) : e.current = t;
  } catch (r) {
    o.__e(r, n);
  }
}
function B(e, t, n) {
  var r, i;
  if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || z(r, null, t)), null != (r = e.__c)) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (s) {
      o.__e(s, t);
    }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && B(r[i], t, n || "function" != typeof e.type);
  n || null == e.__e || m(e.__e), e.__ = e.__e = e.__d = void 0;
}
function I(e, t, n) {
  return this.constructor(e, n);
}
function N(e, t, r) {
  var i, s, a, c;
  o.__ && o.__(e, t), s = (i = "function" == typeof r) ? null : r && r.__k || t.__k, a = [], c = [], T(t, e = (!i && r || t).__k = v(g, null, [e]), s || u, u, void 0 !== t.ownerSVGElement, !i && r ? [r] : s ? null : t.firstChild ? n.call(t.childNodes) : null, a, !i && r ? r : s ? s.__e : t.firstChild, i, c), L(a, e, c);
}
function R(e, t) {
  N(e, t, R);
}
function K(e, t, o) {
  var r,
    i,
    s,
    a,
    c = h({}, e.props);
  for (s in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : c[s] = void 0 === t[s] && void 0 !== a ? a[s] : t[s];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? n.call(arguments, 2) : o), y(e.type, c, r || e.key, i || e.ref, null);
}
function F(e, t) {
  var n = {
    __c: t = "__cC" + l++,
    __: e,
    Consumer: function Consumer(e, t) {
      return e.children(t);
    },
    Provider: function Provider(e) {
      var n, o;
      return this.getChildContext || (n = [], (o = {})[t] = this, this.getChildContext = function () {
        return o;
      }, this.shouldComponentUpdate = function (e) {
        this.props.value !== e.value && n.some(function (e) {
          e.__e = !0, x(e);
        });
      }, this.sub = function (e) {
        n.push(e);
        var t = e.componentWillUnmount;
        e.componentWillUnmount = function () {
          n.splice(n.indexOf(e), 1), t && t.call(e);
        };
      }), e.children;
    }
  };
  return n.Provider.__ = n.Consumer.contextType = n;
}
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
function H(e) {
  if (e.__esModule) return e;
  var t = e["default"];
  if ("function" == typeof t) {
    var n = function e() {
      return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function (t) {
    var o = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(n, t, o.get ? o : {
      enumerable: !0,
      get: function get() {
        return e[t];
      }
    });
  }), n;
}
n = d.slice, o = {
  __e: function __e(e, t, n, o) {
    for (var r, i, s; t = t.__;) if ((r = t.__c) && !r.__) try {
      if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(e)), s = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), s = r.__d), s) return r.__E = r;
    } catch (a) {
      e = a;
    }
    throw e;
  }
}, r = 0, b.prototype.setState = function (e, t) {
  var n;
  n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this._sb.push(t), x(this));
}, b.prototype.forceUpdate = function (e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), x(this));
}, b.prototype.render = g, i = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, c = function c(e, t) {
  return e.__v.__b - t.__v.__b;
}, C.__r = 0, l = 0;
var V,
  W,
  q,
  X,
  G = {
    exports: {}
  },
  $ = {},
  Y = 0,
  Z = [],
  Q = [],
  J = o.__b,
  ee = o.__r,
  te = o.diffed,
  ne = o.__c,
  oe = o.unmount;
function re(e, t) {
  o.__h && o.__h(W, e, Y || t), Y = 0;
  var n = W.__H || (W.__H = {
    __: [],
    __h: []
  });
  return e >= n.__.length && n.__.push({
    __V: Q
  }), n.__[e];
}
function ie(e) {
  return Y = 1, se(ke, e);
}
function se(e, t, n) {
  var o = re(V++, 2);
  if (o.t = e, !o.__c && (o.__ = [n ? n(t) : ke(void 0, t), function (e) {
    var t = o.__N ? o.__N[0] : o.__[0],
      n = o.t(t, e);
    t !== n && (o.__N = [n, o.__[1]], o.__c.setState({}));
  }], o.__c = W, !W.u)) {
    var r = function r(e, t, n) {
      if (!o.__c.__H) return !0;
      var r = o.__c.__H.__.filter(function (e) {
        return e.__c;
      });
      if (r.every(function (e) {
        return !e.__N;
      })) return !i || i.call(this, e, t, n);
      var s = !1;
      return r.forEach(function (e) {
        if (e.__N) {
          var t = e.__[0];
          e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0);
        }
      }), !(!s && o.__c.props === e) && (!i || i.call(this, e, t, n));
    };
    W.u = !0;
    var i = W.shouldComponentUpdate,
      s = W.componentWillUpdate;
    W.componentWillUpdate = function (e, t, n) {
      if (this.__e) {
        var o = i;
        i = void 0, r(e, t, n), i = o;
      }
      s && s.call(this, e, t, n);
    }, W.shouldComponentUpdate = r;
  }
  return o.__N || o.__;
}
function ae(e, t) {
  var n = re(V++, 3);
  !o.__s && we(n.__H, t) && (n.__ = e, n.i = t, W.__H.__h.push(n));
}
function ce(e, t) {
  var n = re(V++, 4);
  !o.__s && we(n.__H, t) && (n.__ = e, n.i = t, W.__h.push(n));
}
function le(e) {
  return Y = 5, de(function () {
    return {
      current: e
    };
  }, []);
}
function ue(e, t, n) {
  Y = 6, ce(function () {
    return "function" == typeof e ? (e(t()), function () {
      return e(null);
    }) : e ? (e.current = t(), function () {
      return e.current = null;
    }) : void 0;
  }, null == n ? n : n.concat(e));
}
function de(e, t) {
  var n = re(V++, 7);
  return we(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function pe(e, t) {
  return Y = 8, de(function () {
    return e;
  }, t);
}
function fe(e) {
  var t = W.context[e.__c],
    n = re(V++, 9);
  return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(W)), t.props.value) : e.__;
}
function he(e, t) {
  o.useDebugValue && o.useDebugValue(t ? t(e) : e);
}
function me() {
  var e = re(V++, 11);
  if (!e.__) {
    for (var t = W.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ve() {
  for (var e; e = Z.shift();) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ge), e.__H.__h.forEach(be), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], o.__e(t, e.__v);
  }
}
o.__b = function (e) {
  W = null, J && J(e);
}, o.__r = function (e) {
  ee && ee(e), V = 0;
  var t = (W = e.__c).__H;
  t && (q === W ? (t.__h = [], W.__h = [], t.__.forEach(function (e) {
    e.__N && (e.__ = e.__N), e.__V = Q, e.__N = e.i = void 0;
  })) : (t.__h.forEach(ge), t.__h.forEach(be), t.__h = [], V = 0)), q = W;
}, o.diffed = function (e) {
  te && te(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (1 !== Z.push(t) && X === o.requestAnimationFrame || ((X = o.requestAnimationFrame) || _e)(ve)), t.__H.__.forEach(function (e) {
    e.i && (e.__H = e.i), e.__V !== Q && (e.__ = e.__V), e.i = void 0, e.__V = Q;
  })), q = W = null;
}, o.__c = function (e, t) {
  t.some(function (e) {
    try {
      e.__h.forEach(ge), e.__h = e.__h.filter(function (e) {
        return !e.__ || be(e);
      });
    } catch (n) {
      t.some(function (e) {
        e.__h && (e.__h = []);
      }), t = [], o.__e(n, e.__v);
    }
  }), ne && ne(e, t);
}, o.unmount = function (e) {
  oe && oe(e);
  var t,
    n = e.__c;
  n && n.__H && (n.__H.__.forEach(function (e) {
    try {
      ge(e);
    } catch (n) {
      t = n;
    }
  }), n.__H = void 0, t && o.__e(t, n.__v));
};
var ye = "function" == typeof requestAnimationFrame;
function _e(e) {
  var t,
    n = function n() {
      clearTimeout(o), ye && cancelAnimationFrame(t), setTimeout(e);
    },
    o = setTimeout(n, 100);
  ye && (t = requestAnimationFrame(n));
}
function ge(e) {
  var t = W,
    n = e.__c;
  "function" == typeof n && (e.__c = void 0, n()), W = t;
}
function be(e) {
  var t = W;
  e.__c = e.__(), W = t;
}
function we(e, t) {
  return !e || e.length !== t.length || t.some(function (t, n) {
    return t !== e[n];
  });
}
function ke(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function xe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ce(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;
  for (var o in t) if ("__source" !== o && e[o] !== t[o]) return !0;
  return !1;
}
function Se(e) {
  this.props = e;
}
function Pe(e, t) {
  function n(e) {
    var n = this.props.ref,
      o = n == e.ref;
    return !o && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !o : Ce(this.props, e);
  }
  function o(t) {
    return this.shouldComponentUpdate = n, v(e, t);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o;
}
(Se.prototype = new b()).isPureReactComponent = !0, Se.prototype.shouldComponentUpdate = function (e, t) {
  return Ce(this.props, e) || Ce(this.state, t);
};
var Ee = o.__b;
o.__b = function (e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ee && Ee(e);
};
var Oe = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref") || 3911;
function Me(e) {
  function t(t) {
    var n = xe({}, t);
    return delete n.ref, e(n, t.ref || null);
  }
  return t.$$typeof = Oe, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var je = function je(e, t) {
    return null == e ? null : E(E(e).map(t));
  },
  De = {
    map: je,
    forEach: je,
    count: function count(e) {
      return e ? E(e).length : 0;
    },
    only: function only(e) {
      var t = E(e);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: E
  },
  Ae = o.__e;
o.__e = function (e, t, n, o) {
  if (e.then) for (var r, i = t; i = i.__;) if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  Ae(e, t, n, o);
};
var Te = o.unmount;
function Le(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function (e) {
    "function" == typeof e.__c && e.__c();
  }), e.__c.__H = null), null != (e = xe({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function (e) {
    return Le(e, t, n);
  })), e;
}
function ze(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function (e) {
    return ze(e, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Be() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ie(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ne(e) {
  var t, n, o;
  function r(r) {
    if (t || (t = e()).then(function (e) {
      n = e["default"] || e;
    }, function (e) {
      o = e;
    }), o) throw o;
    if (!n) throw t;
    return v(n, r);
  }
  return r.displayName = "Lazy", r.__f = !0, r;
}
function Re() {
  this.u = null, this.o = null;
}
o.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Te && Te(e);
}, (Be.prototype = new b()).__c = function (e, t) {
  var n = t.__c,
    o = this;
  null == o.t && (o.t = []), o.t.push(n);
  var r = Ie(o.__v),
    i = !1,
    s = function s() {
      i || (i = !0, n.__R = null, r ? r(a) : a());
    };
  n.__R = s;
  var a = function a() {
    if (! --o.__u) {
      if (o.state.__a) {
        var e = o.state.__a;
        o.__v.__k[0] = ze(e, e.__c.__P, e.__c.__O);
      }
      var t;
      for (o.setState({
        __a: o.__b = null
      }); t = o.t.pop();) t.forceUpdate();
    }
  };
  o.__u++ || 32 & t.__u || o.setState({
    __a: o.__b = o.__v.__k[0]
  }), e.then(s, s);
}, Be.prototype.componentWillUnmount = function () {
  this.t = [];
}, Be.prototype.render = function (e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = Le(this.__b, n, o.__O = o.__P);
    }
    this.__b = null;
  }
  var r = t.__a && v(g, null, e.fallback);
  return r && (r.__u &= -33), [v(g, null, t.__a ? null : e.children), r];
};
var Ke = function Ke(e, t, n) {
  if (++n[1] === n[0] && e.o["delete"](t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
    for (; n.length > 3;) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function Fe(e) {
  return this.getChildContext = function () {
    return e.context;
  }, e.children;
}
function Ue(e) {
  var t = this,
    n = e.i;
  t.componentWillUnmount = function () {
    N(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = {
    nodeType: 1,
    parentNode: n,
    childNodes: [],
    appendChild: function appendChild(e) {
      this.childNodes.push(e), t.i.appendChild(e);
    },
    insertBefore: function insertBefore(e, n) {
      this.childNodes.push(e), t.i.appendChild(e);
    },
    removeChild: function removeChild(e) {
      this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
    }
  }), N(v(Fe, {
    context: t.context
  }, e.__v), t.l);
}
function He(e, t) {
  var n = v(Ue, {
    __v: e,
    i: t
  });
  return n.containerInfo = t, n;
}
(Re.prototype = new b()).__a = function (e) {
  var t = this,
    n = Ie(t.__v),
    o = t.o.get(e);
  return o[0]++, function (r) {
    var i = function i() {
      t.props.revealOrder ? (o.push(r), Ke(t, e, o)) : r();
    };
    n ? n(i) : i();
  };
}, Re.prototype.render = function (e) {
  this.u = null, this.o = new Map();
  var t = E(e.children);
  e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
  for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Re.prototype.componentDidUpdate = Re.prototype.componentDidMount = function () {
  var e = this;
  this.o.forEach(function (t, n) {
    Ke(e, n, t);
  });
};
var Ve = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
  We = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Xe = /[A-Z0-9]/g,
  Ge = "undefined" != typeof document,
  $e = function $e(e) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
function Ye(e, t, n) {
  return null == t.__k && (t.textContent = ""), N(e, t), "function" == typeof n && n(), e ? e.__c : null;
}
function Ze(e, t, n) {
  return R(e, t), "function" == typeof n && n(), e ? e.__c : null;
}
b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
  Object.defineProperty(b.prototype, e, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + e];
    },
    set: function set(t) {
      Object.defineProperty(this, e, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var Qe = o.event;
function Je() {}
function et() {
  return this.cancelBubble;
}
function tt() {
  return this.defaultPrevented;
}
o.event = function (e) {
  return Qe && (e = Qe(e)), e.persist = Je, e.isPropagationStopped = et, e.isDefaultPrevented = tt, e.nativeEvent = e;
};
var nt,
  ot = {
    enumerable: !1,
    configurable: !0,
    get: function get() {
      return this["class"];
    }
  },
  rt = o.vnode;
o.vnode = function (e) {
  "string" == typeof e.type && function (e) {
    var t = e.props,
      n = e.type,
      o = {};
    for (var r in t) {
      var i = t[r];
      if (!("value" === r && "defaultValue" in t && null == i || Ge && "children" === r && "noscript" === n || "class" === r || "className" === r)) {
        var s = r.toLowerCase();
        "defaultValue" === r && "value" in t && null == t.value ? r = "value" : "download" === r && !0 === i ? i = "" : "ondoubleclick" === s ? r = "ondblclick" : "onchange" !== s || "input" !== n && "textarea" !== n || $e(t.type) ? "onfocus" === s ? r = "onfocusin" : "onblur" === s ? r = "onfocusout" : qe.test(r) ? r = s : -1 === n.indexOf("-") && We.test(r) ? r = r.replace(Xe, "-$&").toLowerCase() : null === i && (i = void 0) : s = r = "oninput", "oninput" === s && o[r = s] && (r = "oninputCapture"), o[r] = i;
      }
    }
    "select" == n && o.multiple && Array.isArray(o.value) && (o.value = E(t.children).forEach(function (e) {
      e.props.selected = -1 != o.value.indexOf(e.props.value);
    })), "select" == n && null != o.defaultValue && (o.value = E(t.children).forEach(function (e) {
      e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value;
    })), t["class"] && !t.className ? (o["class"] = t["class"], Object.defineProperty(o, "className", ot)) : (t.className && !t["class"] || t["class"] && t.className) && (o["class"] = o.className = t.className), e.props = o;
  }(e), e.$$typeof = Ve, rt && rt(e);
};
var it = o.__r;
o.__r = function (e) {
  it && it(e), nt = e.__c;
};
var st = o.diffed;
o.diffed = function (e) {
  st && st(e);
  var t = e.props,
    n = e.__e;
  null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value), nt = null;
};
var at = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function readContext(e) {
        return nt.__n[e.__c].props.value;
      }
    }
  }
};
function ct(e) {
  return v.bind(null, e);
}
function lt(e) {
  return !!e && e.$$typeof === Ve;
}
function ut(e) {
  return lt(e) && e.type === g;
}
function dt(e) {
  return lt(e) ? K.apply(null, arguments) : e;
}
function pt(e) {
  return !!e.__k && (N(null, e), !0);
}
function ft(e) {
  return e && (e.base || 1 === e.nodeType && e) || null;
}
var ht = function ht(e, t) {
    return e(t);
  },
  mt = function mt(e, t) {
    return e(t);
  },
  vt = g;
function yt(e) {
  e();
}
function _t(e) {
  return e;
}
function gt() {
  return [!1, yt];
}
var bt = ce,
  wt = lt;
function kt(e, t) {
  var n = t(),
    o = ie({
      h: {
        __: n,
        v: t
      }
    }),
    r = o[0].h,
    i = o[1];
  return ce(function () {
    r.__ = n, r.v = t, xt(r) && i({
      h: r
    });
  }, [e, n, t]), ae(function () {
    return xt(r) && i({
      h: r
    }), e(function () {
      xt(r) && i({
        h: r
      });
    });
  }, [e]), n;
}
function xt(e) {
  var t,
    n,
    o = e.v,
    r = e.__;
  try {
    var i = o();
    return !((t = r) === (n = i) && (0 !== t || 1 / t == 1 / n) || t != t && n != n);
  } catch (s) {
    return !0;
  }
}
var Ct = {
  useState: ie,
  useId: me,
  useReducer: se,
  useEffect: ae,
  useLayoutEffect: ce,
  useInsertionEffect: bt,
  useTransition: gt,
  useDeferredValue: _t,
  useSyncExternalStore: kt,
  startTransition: yt,
  useRef: le,
  useImperativeHandle: ue,
  useMemo: de,
  useCallback: pe,
  useContext: fe,
  useDebugValue: he,
  version: "17.0.2",
  Children: De,
  render: Ye,
  hydrate: Ze,
  unmountComponentAtNode: pt,
  createPortal: He,
  createElement: v,
  createContext: F,
  createFactory: ct,
  cloneElement: dt,
  createRef: _,
  Fragment: g,
  isValidElement: lt,
  isElement: wt,
  isFragment: ut,
  findDOMNode: ft,
  Component: b,
  PureComponent: Se,
  memo: Pe,
  forwardRef: Me,
  flushSync: mt,
  unstable_batchedUpdates: ht,
  StrictMode: vt,
  Suspense: Be,
  SuspenseList: Re,
  lazy: Ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at
};
var St = Object.freeze(Object.defineProperty({
    __proto__: null,
    Children: De,
    Component: b,
    Fragment: g,
    PureComponent: Se,
    StrictMode: vt,
    Suspense: Be,
    SuspenseList: Re,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at,
    cloneElement: dt,
    createContext: F,
    createElement: v,
    createFactory: ct,
    createPortal: He,
    createRef: _,
    "default": Ct,
    findDOMNode: ft,
    flushSync: mt,
    forwardRef: Me,
    hydrate: Ze,
    isElement: wt,
    isFragment: ut,
    isValidElement: lt,
    lazy: Ne,
    memo: Pe,
    render: Ye,
    startTransition: yt,
    unmountComponentAtNode: pt,
    unstable_batchedUpdates: ht,
    useCallback: pe,
    useContext: fe,
    useDebugValue: he,
    useDeferredValue: _t,
    useEffect: ae,
    useErrorBoundary: function useErrorBoundary(e) {
      var t = re(V++, 10),
        n = ie();
      return t.__ = e, W.componentDidCatch || (W.componentDidCatch = function (e, o) {
        t.__ && t.__(e, o), n[1](e);
      }), [n[0], function () {
        n[1](void 0);
      }];
    },
    useId: me,
    useImperativeHandle: ue,
    useInsertionEffect: bt,
    useLayoutEffect: ce,
    useMemo: de,
    useReducer: se,
    useRef: le,
    useState: ie,
    useSyncExternalStore: kt,
    useTransition: gt,
    version: "17.0.2"
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Pt = H(St);
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et = Pt;
var Ot = "function" == typeof Object.is ? Object.is : function (e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  },
  Mt = Et.useState,
  jt = Et.useEffect,
  Dt = Et.useLayoutEffect,
  At = Et.useDebugValue;
function Tt(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch (o) {
    return !0;
  }
}
var Lt = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
  return t();
} : function (e, t) {
  var n = t(),
    o = Mt({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    r = o[0].inst,
    i = o[1];
  return Dt(function () {
    r.value = n, r.getSnapshot = t, Tt(r) && i({
      inst: r
    });
  }, [e, n, t]), jt(function () {
    return Tt(r) && i({
      inst: r
    }), e(function () {
      Tt(r) && i({
        inst: r
      });
    });
  }, [e]), At(n), n;
};
$.useSyncExternalStore = void 0 !== Et.useSyncExternalStore ? Et.useSyncExternalStore : Lt, G.exports = $;
var zt = G.exports,
  Bt = {
    exports: {}
  },
  It = {},
  Nt = Pt,
  Rt = zt;
var Kt = "function" == typeof Object.is ? Object.is : function (e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  },
  Ft = Rt.useSyncExternalStore,
  Ut = Nt.useRef,
  Ht = Nt.useEffect,
  Vt = Nt.useMemo,
  Wt = Nt.useDebugValue;
It.useSyncExternalStoreWithSelector = function (e, t, n, o, r) {
  var i = Ut(null);
  if (null === i.current) {
    var s = {
      hasValue: !1,
      value: null
    };
    i.current = s;
  } else s = i.current;
  i = Vt(function () {
    function e(e) {
      if (!c) {
        if (c = !0, i = e, e = o(e), void 0 !== r && s.hasValue) {
          var t = s.value;
          if (r(t, e)) return a = t;
        }
        return a = e;
      }
      if (t = a, Kt(i, e)) return t;
      var n = o(e);
      return void 0 !== r && r(t, n) ? t : (i = e, a = n);
    }
    var i,
      a,
      c = !1,
      l = void 0 === n ? null : n;
    return [function () {
      return e(t());
    }, null === l ? void 0 : function () {
      return e(l());
    }];
  }, [t, n, o, r]);
  var a = Ft(e, i[0], i[1]);
  return Ht(function () {
    s.hasValue = !0, s.value = a;
  }, [a]), Wt(a), a;
}, Bt.exports = It;
var qt = Bt.exports;
var Xt = function Xt(e) {
  e();
};
var Gt = Symbol["for"]("react-redux-context"),
  $t = "undefined" != typeof globalThis ? globalThis : {};
function Yt() {
  var e;
  if (!F) return {};
  var t = null != (e = $t[Gt]) ? e : $t[Gt] = new Map();
  var n = t.get(F);
  return n || (n = F(null), t.set(F, n)), n;
}
var Zt = Yt();
function Qt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zt;
  return function () {
    return fe(e);
  };
}
var Jt = Qt();
var en = function en() {
  throw new Error("uSES not initialized!");
};
var tn = function tn(e, t) {
  return e === t;
};
function nn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zt;
  var t = e === Zt ? Jt : Qt(e);
  return function (e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _ref = "function" == typeof n ? {
        equalityFn: n
      } : n,
      _ref$equalityFn = _ref.equalityFn,
      o = _ref$equalityFn === void 0 ? tn : _ref$equalityFn,
      r = _ref.stabilityCheck,
      i = _ref.noopCheck,
      _t3 = t(),
      s = _t3.store,
      a = _t3.subscription,
      c = _t3.getServerState,
      l = _t3.stabilityCheck,
      u = _t3.noopCheck;
    le(!0);
    var d = pe(_defineProperty({}, e.name, function (t) {
        return e(t);
      })[e.name], [e, l, r]),
      p = en(a.addNestedSub, s.getState, c || s.getState, d, o);
    return he(p), p;
  };
}
var on = nn();
var rn = {
    exports: {}
  },
  sn = {},
  an = "function" == typeof Symbol && Symbol["for"],
  cn = an ? Symbol["for"]("react.element") : 60103,
  ln = an ? Symbol["for"]("react.portal") : 60106,
  un = an ? Symbol["for"]("react.fragment") : 60107,
  dn = an ? Symbol["for"]("react.strict_mode") : 60108,
  pn = an ? Symbol["for"]("react.profiler") : 60114,
  fn = an ? Symbol["for"]("react.provider") : 60109,
  hn = an ? Symbol["for"]("react.context") : 60110,
  mn = an ? Symbol["for"]("react.async_mode") : 60111,
  vn = an ? Symbol["for"]("react.concurrent_mode") : 60111,
  yn = an ? Symbol["for"]("react.forward_ref") : 60112,
  _n = an ? Symbol["for"]("react.suspense") : 60113,
  gn = an ? Symbol["for"]("react.suspense_list") : 60120,
  bn = an ? Symbol["for"]("react.memo") : 60115,
  wn = an ? Symbol["for"]("react.lazy") : 60116,
  kn = an ? Symbol["for"]("react.block") : 60121,
  xn = an ? Symbol["for"]("react.fundamental") : 60117,
  Cn = an ? Symbol["for"]("react.responder") : 60118,
  Sn = an ? Symbol["for"]("react.scope") : 60119;
function Pn(e) {
  if ("object" == _typeof(e) && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case cn:
        switch (e = e.type) {
          case mn:
          case vn:
          case un:
          case pn:
          case dn:
          case _n:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case hn:
              case yn:
              case wn:
              case bn:
              case fn:
                return e;
              default:
                return t;
            }
        }
      case ln:
        return t;
    }
  }
}
function En(e) {
  return Pn(e) === vn;
}
sn.AsyncMode = mn, sn.ConcurrentMode = vn, sn.ContextConsumer = hn, sn.ContextProvider = fn, sn.Element = cn, sn.ForwardRef = yn, sn.Fragment = un, sn.Lazy = wn, sn.Memo = bn, sn.Portal = ln, sn.Profiler = pn, sn.StrictMode = dn, sn.Suspense = _n, sn.isAsyncMode = function (e) {
  return En(e) || Pn(e) === mn;
}, sn.isConcurrentMode = En, sn.isContextConsumer = function (e) {
  return Pn(e) === hn;
}, sn.isContextProvider = function (e) {
  return Pn(e) === fn;
}, sn.isElement = function (e) {
  return "object" == _typeof(e) && null !== e && e.$$typeof === cn;
}, sn.isForwardRef = function (e) {
  return Pn(e) === yn;
}, sn.isFragment = function (e) {
  return Pn(e) === un;
}, sn.isLazy = function (e) {
  return Pn(e) === wn;
}, sn.isMemo = function (e) {
  return Pn(e) === bn;
}, sn.isPortal = function (e) {
  return Pn(e) === ln;
}, sn.isProfiler = function (e) {
  return Pn(e) === pn;
}, sn.isStrictMode = function (e) {
  return Pn(e) === dn;
}, sn.isSuspense = function (e) {
  return Pn(e) === _n;
}, sn.isValidElementType = function (e) {
  return "string" == typeof e || "function" == typeof e || e === un || e === vn || e === pn || e === dn || e === _n || e === gn || "object" == _typeof(e) && null !== e && (e.$$typeof === wn || e.$$typeof === bn || e.$$typeof === fn || e.$$typeof === hn || e.$$typeof === yn || e.$$typeof === xn || e.$$typeof === Cn || e.$$typeof === Sn || e.$$typeof === kn);
}, sn.typeOf = Pn, rn.exports = sn;
var On = rn.exports,
  Mn = {};
Mn[On.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Mn[On.Memo] = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
};
var jn,
  Dn = {},
  An = Symbol["for"]("react.element"),
  Tn = Symbol["for"]("react.portal"),
  Ln = Symbol["for"]("react.fragment"),
  zn = Symbol["for"]("react.strict_mode"),
  Bn = Symbol["for"]("react.profiler"),
  In = Symbol["for"]("react.provider"),
  Nn = Symbol["for"]("react.context"),
  Rn = Symbol["for"]("react.server_context"),
  Kn = Symbol["for"]("react.forward_ref"),
  Fn = Symbol["for"]("react.suspense"),
  Un = Symbol["for"]("react.suspense_list"),
  Hn = Symbol["for"]("react.memo"),
  Vn = Symbol["for"]("react.lazy"),
  Wn = Symbol["for"]("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qn(e) {
  if ("object" == _typeof(e) && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case An:
        switch (e = e.type) {
          case Ln:
          case Bn:
          case zn:
          case Fn:
          case Un:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case Rn:
              case Nn:
              case Kn:
              case Vn:
              case Hn:
              case In:
                return e;
              default:
                return t;
            }
        }
      case Tn:
        return t;
    }
  }
}
function Xn() {
  var e = Xt;
  var t = null,
    n = null;
  return {
    clear: function clear() {
      t = null, n = null;
    },
    notify: function notify() {
      e(function () {
        var e = t;
        for (; e;) e.callback(), e = e.next;
      });
    },
    get: function get() {
      var e = [],
        n = t;
      for (; n;) e.push(n), n = n.next;
      return e;
    },
    subscribe: function subscribe(e) {
      var o = !0,
        r = n = {
          callback: e,
          next: null,
          prev: n
        };
      return r.prev ? r.prev.next = r : t = r, function () {
        o && null !== t && (o = !1, r.next ? r.next.prev = r.prev : n = r.prev, r.prev ? r.prev.next = r.next : t = r.next);
      };
    }
  };
}
jn = Symbol["for"]("react.module.reference"), Dn.ContextConsumer = Nn, Dn.ContextProvider = In, Dn.Element = An, Dn.ForwardRef = Kn, Dn.Fragment = Ln, Dn.Lazy = Vn, Dn.Memo = Hn, Dn.Portal = Tn, Dn.Profiler = Bn, Dn.StrictMode = zn, Dn.Suspense = Fn, Dn.SuspenseList = Un, Dn.isAsyncMode = function () {
  return !1;
}, Dn.isConcurrentMode = function () {
  return !1;
}, Dn.isContextConsumer = function (e) {
  return qn(e) === Nn;
}, Dn.isContextProvider = function (e) {
  return qn(e) === In;
}, Dn.isElement = function (e) {
  return "object" == _typeof(e) && null !== e && e.$$typeof === An;
}, Dn.isForwardRef = function (e) {
  return qn(e) === Kn;
}, Dn.isFragment = function (e) {
  return qn(e) === Ln;
}, Dn.isLazy = function (e) {
  return qn(e) === Vn;
}, Dn.isMemo = function (e) {
  return qn(e) === Hn;
}, Dn.isPortal = function (e) {
  return qn(e) === Tn;
}, Dn.isProfiler = function (e) {
  return qn(e) === Bn;
}, Dn.isStrictMode = function (e) {
  return qn(e) === zn;
}, Dn.isSuspense = function (e) {
  return qn(e) === Fn;
}, Dn.isSuspenseList = function (e) {
  return qn(e) === Un;
}, Dn.isValidElementType = function (e) {
  return "string" == typeof e || "function" == typeof e || e === Ln || e === Bn || e === zn || e === Fn || e === Un || e === Wn || "object" == _typeof(e) && null !== e && (e.$$typeof === Vn || e.$$typeof === Hn || e.$$typeof === In || e.$$typeof === Nn || e.$$typeof === Kn || e.$$typeof === jn || void 0 !== e.getModuleId);
}, Dn.typeOf = qn;
var Gn = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
var $n = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? ce : ae;
function Yn(_ref2) {
  var e = _ref2.store,
    t = _ref2.context,
    n = _ref2.children,
    o = _ref2.serverState,
    _ref2$stabilityCheck = _ref2.stabilityCheck,
    r = _ref2$stabilityCheck === void 0 ? "once" : _ref2$stabilityCheck,
    _ref2$noopCheck = _ref2.noopCheck,
    i = _ref2$noopCheck === void 0 ? "once" : _ref2$noopCheck;
  var s = de(function () {
      var t = function (e) {
        var t,
          n = Gn,
          o = 0,
          r = !1;
        function i() {
          c.onStateChange && c.onStateChange();
        }
        function s() {
          o++, t || (t = e.subscribe(i), n = Xn());
        }
        function a() {
          o--, t && 0 === o && (t(), t = void 0, n.clear(), n = Gn);
        }
        var c = {
          addNestedSub: function addNestedSub(e) {
            s();
            var t = n.subscribe(e);
            var o = !1;
            return function () {
              o || (o = !0, t(), a());
            };
          },
          notifyNestedSubs: function notifyNestedSubs() {
            n.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function isSubscribed() {
            return r;
          },
          trySubscribe: function trySubscribe() {
            r || (r = !0, s());
          },
          tryUnsubscribe: function tryUnsubscribe() {
            r && (r = !1, a());
          },
          getListeners: function getListeners() {
            return n;
          }
        };
        return c;
      }(e);
      return {
        store: e,
        subscription: t,
        getServerState: o ? function () {
          return o;
        } : void 0,
        stabilityCheck: r,
        noopCheck: i
      };
    }, [e, o, r, i]),
    a = de(function () {
      return e.getState();
    }, [e]);
  $n(function () {
    var t = s.subscription;
    return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), a !== e.getState() && t.notifyNestedSubs(), function () {
      t.tryUnsubscribe(), t.onStateChange = void 0;
    };
  }, [s, a]);
  return v((t || Zt).Provider, {
    value: s
  }, n);
}
function Zn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zt;
  var t = e === Zt ? Jt : Qt(e);
  return function () {
    var _t4 = t(),
      e = _t4.store;
    return e;
  };
}
var Qn = Zn();
function Jn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zt;
  var t = e === Zt ? Qn : Zn(e);
  return function () {
    return t().dispatch;
  };
}
var eo = Jn();
var to;
function no(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function (e) {
    return "'" + e + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function oo(e) {
  return !!e && !!e[Vo];
}
function ro(e) {
  var t;
  return !!e && (function (e) {
    if (!e || "object" != _typeof(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null === t) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || "function" == typeof n && Function.toString.call(n) === Wo;
  }(e) || Array.isArray(e) || !!e[Ho] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Ho]) || uo(e) || po(e));
}
function io(e, t, n) {
  void 0 === n && (n = !1), 0 === so(e) ? (n ? Object.keys : qo)(e).forEach(function (o) {
    n && "symbol" == _typeof(o) || t(o, e[o], e);
  }) : e.forEach(function (n, o) {
    return t(o, n, e);
  });
}
function so(e) {
  var t = e[Vo];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : uo(e) ? 2 : po(e) ? 3 : 0;
}
function ao(e, t) {
  return 2 === so(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function co(e, t, n) {
  var o = so(e);
  2 === o ? e.set(t, n) : 3 === o ? e.add(n) : e[t] = n;
}
function lo(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function uo(e) {
  return Ro && e instanceof Map;
}
function po(e) {
  return Ko && e instanceof Set;
}
function fo(e) {
  return e.o || e.t;
}
function ho(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Xo(e);
  delete t[Vo];
  for (var n = qo(t), o = 0; o < n.length; o++) {
    var r = n[o],
      i = t[r];
    !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[r] = {
      configurable: !0,
      writable: !0,
      enumerable: i.enumerable,
      value: e[r]
    });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function mo(e, t) {
  return void 0 === t && (t = !1), yo(e) || oo(e) || !ro(e) || (so(e) > 1 && (e.set = e.add = e.clear = e["delete"] = vo), Object.freeze(e), t && io(e, function (e, t) {
    return mo(t, !0);
  }, !0)), e;
}
function vo() {
  no(2);
}
function yo(e) {
  return null == e || "object" != _typeof(e) || Object.isFrozen(e);
}
function _o(e) {
  var t = Go[e];
  return t || no(18, e), t;
}
function go() {
  return Io;
}
function bo(e, t) {
  t && (_o("Patches"), e.u = [], e.s = [], e.v = t);
}
function wo(e) {
  ko(e), e.p.forEach(Co), e.p = null;
}
function ko(e) {
  e === Io && (Io = e.l);
}
function xo(e) {
  return Io = {
    p: [],
    l: Io,
    h: e,
    m: !0,
    _: 0
  };
}
function Co(e) {
  var t = e[Vo];
  0 === t.i || 1 === t.i ? t.j() : t.g = !0;
}
function So(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    o = void 0 !== e && e !== n;
  return t.h.O || _o("ES5").S(t, e, o), o ? (n[Vo].P && (wo(t), no(4)), ro(e) && (e = Po(t, e), t.l || Oo(t, e)), t.u && _o("Patches").M(n[Vo].t, e, t.u, t.s)) : e = Po(t, n, []), wo(t), t.u && t.v(t.u, t.s), e !== Uo ? e : void 0;
}
function Po(e, t, n) {
  if (yo(t)) return t;
  var o = t[Vo];
  if (!o) return io(t, function (r, i) {
    return Eo(e, o, t, r, i, n);
  }, !0), t;
  if (o.A !== e) return t;
  if (!o.P) return Oo(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var r = 4 === o.i || 5 === o.i ? o.o = ho(o.k) : o.o,
      i = r,
      s = !1;
    3 === o.i && (i = new Set(r), r.clear(), s = !0), io(i, function (t, i) {
      return Eo(e, o, r, t, i, n, s);
    }), Oo(e, r, !1), n && e.u && _o("Patches").N(o, n, e.u, e.s);
  }
  return o.o;
}
function Eo(e, t, n, o, r, i, s) {
  if (oo(r)) {
    var a = Po(e, r, i && t && 3 !== t.i && !ao(t.R, o) ? i.concat(o) : void 0);
    if (co(n, o, a), !oo(a)) return;
    e.m = !1;
  } else s && n.add(r);
  if (ro(r) && !yo(r)) {
    if (!e.h.D && e._ < 1) return;
    Po(e, r), t && t.A.l || Oo(e, r);
  }
}
function Oo(e, t, n) {
  void 0 === n && (n = !1), !e.l && e.h.D && e.m && mo(t, n);
}
function Mo(e, t) {
  var n = e[Vo];
  return (n ? fo(n) : e)[t];
}
function jo(e, t) {
  if (t in e) for (var n = Object.getPrototypeOf(e); n;) {
    var o = Object.getOwnPropertyDescriptor(n, t);
    if (o) return o;
    n = Object.getPrototypeOf(n);
  }
}
function Do(e) {
  e.P || (e.P = !0, e.l && Do(e.l));
}
function Ao(e) {
  e.o || (e.o = ho(e.t));
}
function To(e, t, n) {
  var o = uo(t) ? _o("MapSet").F(t, n) : po(t) ? _o("MapSet").T(t, n) : e.O ? function (e, t) {
    var n = Array.isArray(e),
      o = {
        i: n ? 1 : 0,
        A: t ? t.A : go(),
        P: !1,
        I: !1,
        R: {},
        l: t,
        t: e,
        k: null,
        o: null,
        j: null,
        C: !1
      },
      r = o,
      i = $o;
    n && (r = [o], i = Yo);
    var s = Proxy.revocable(r, i),
      a = s.revoke,
      c = s.proxy;
    return o.k = c, o.j = a, c;
  }(t, n) : _o("ES5").J(t, n);
  return (n ? n.A : go()).p.push(o), o;
}
function Lo(e) {
  return oo(e) || no(22, e), function e(t) {
    if (!ro(t)) return t;
    var n,
      o = t[Vo],
      r = so(t);
    if (o) {
      if (!o.P && (o.i < 4 || !_o("ES5").K(o))) return o.t;
      o.I = !0, n = zo(t, r), o.I = !1;
    } else n = zo(t, r);
    return io(n, function (t, r) {
      o && function (e, t) {
        return 2 === so(e) ? e.get(t) : e[t];
      }(o.t, t) === r || co(n, t, e(r));
    }), 3 === r ? new Set(n) : n;
  }(e);
}
function zo(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ho(e);
}
to = qt.useSyncExternalStoreWithSelector, en = to, Xt = ht;
var Bo,
  Io,
  No = "undefined" != typeof Symbol && "symbol" == _typeof(Symbol("x")),
  Ro = "undefined" != typeof Map,
  Ko = "undefined" != typeof Set,
  Fo = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
  Uo = No ? Symbol["for"]("immer-nothing") : ((Bo = {})["immer-nothing"] = !0, Bo),
  Ho = No ? Symbol["for"]("immer-draftable") : "__$immer_draftable",
  Vo = No ? Symbol["for"]("immer-state") : "__$immer_state",
  Wo = "" + Object.prototype.constructor,
  qo = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Object.getOwnPropertyNames,
  Xo = Object.getOwnPropertyDescriptors || function (e) {
    var t = {};
    return qo(e).forEach(function (n) {
      t[n] = Object.getOwnPropertyDescriptor(e, n);
    }), t;
  },
  Go = {},
  $o = {
    get: function get(e, t) {
      if (t === Vo) return e;
      var n,
        o,
        r,
        i = fo(e);
      if (!ao(i, t)) return n = e, (r = jo(i, t)) ? "value" in r ? r.value : null === (o = r.get) || void 0 === o ? void 0 : o.call(n.k) : void 0;
      var s = i[t];
      return e.I || !ro(s) ? s : s === Mo(e.t, t) ? (Ao(e), e.o[t] = To(e.A.h, s, e)) : s;
    },
    has: function has(e, t) {
      return t in fo(e);
    },
    ownKeys: function ownKeys(e) {
      return Reflect.ownKeys(fo(e));
    },
    set: function set(e, t, n) {
      var o = jo(fo(e), t);
      if (null == o ? void 0 : o.set) return o.set.call(e.k, n), !0;
      if (!e.P) {
        var r = Mo(fo(e), t),
          i = null == r ? void 0 : r[Vo];
        if (i && i.t === n) return e.o[t] = n, e.R[t] = !1, !0;
        if (lo(n, r) && (void 0 !== n || ao(e.t, t))) return !0;
        Ao(e), Do(e);
      }
      return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
    },
    deleteProperty: function deleteProperty(e, t) {
      return void 0 !== Mo(e.t, t) || t in e.t ? (e.R[t] = !1, Ao(e), Do(e)) : delete e.R[t], e.o && delete e.o[t], !0;
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
      var n = fo(e),
        o = Reflect.getOwnPropertyDescriptor(n, t);
      return o ? {
        writable: !0,
        configurable: 1 !== e.i || "length" !== t,
        enumerable: o.enumerable,
        value: n[t]
      } : o;
    },
    defineProperty: function defineProperty() {
      no(11);
    },
    getPrototypeOf: function getPrototypeOf(e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function setPrototypeOf() {
      no(12);
    }
  },
  Yo = {};
io($o, function (e, t) {
  Yo[e] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Yo.deleteProperty = function (e, t) {
  return Yo.set.call(this, e, t, void 0);
}, Yo.set = function (e, t, n) {
  return $o.set.call(this, e[0], t, n, e[0]);
};
var Zo = function () {
    function e(e) {
      var t = this;
      this.O = Fo, this.D = !0, this.produce = function (e, n, o) {
        if ("function" == typeof e && "function" != typeof n) {
          var r = n;
          n = e;
          var i = t;
          return function (e) {
            var t = this;
            void 0 === e && (e = r);
            for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
            return i.produce(e, function (e) {
              var o;
              return (o = n).call.apply(o, [t, e].concat(s));
            });
          };
        }
        var s;
        if ("function" != typeof n && no(6), void 0 !== o && "function" != typeof o && no(7), ro(e)) {
          var a = xo(t),
            c = To(t, e, void 0),
            l = !0;
          try {
            s = n(c), l = !1;
          } finally {
            l ? wo(a) : ko(a);
          }
          return "undefined" != typeof Promise && s instanceof Promise ? s.then(function (e) {
            return bo(a, o), So(e, a);
          }, function (e) {
            throw wo(a), e;
          }) : (bo(a, o), So(s, a));
        }
        if (!e || "object" != _typeof(e)) {
          if (void 0 === (s = n(e)) && (s = e), s === Uo && (s = void 0), t.D && mo(s, !0), o) {
            var u = [],
              d = [];
            _o("Patches").M(e, s, u, d), o(u, d);
          }
          return s;
        }
        no(21, e);
      }, this.produceWithPatches = function (e, n) {
        if ("function" == typeof e) return function (n) {
          for (var o = arguments.length, r = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) r[i - 1] = arguments[i];
          return t.produceWithPatches(n, function (t) {
            return e.apply(void 0, [t].concat(r));
          });
        };
        var o,
          r,
          i = t.produce(e, n, function (e, t) {
            o = e, r = t;
          });
        return "undefined" != typeof Promise && i instanceof Promise ? i.then(function (e) {
          return [e, o, r];
        }) : [i, o, r];
      }, "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
    }
    var t = e.prototype;
    return t.createDraft = function (e) {
      ro(e) || no(8), oo(e) && (e = Lo(e));
      var t = xo(this),
        n = To(this, e, void 0);
      return n[Vo].C = !0, ko(t), n;
    }, t.finishDraft = function (e, t) {
      var n = (e && e[Vo]).A;
      return bo(n, t), So(void 0, n);
    }, t.setAutoFreeze = function (e) {
      this.D = e;
    }, t.setUseProxies = function (e) {
      e && !Fo && no(20), this.O = e;
    }, t.applyPatches = function (e, t) {
      var n;
      for (n = t.length - 1; n >= 0; n--) {
        var o = t[n];
        if (0 === o.path.length && "replace" === o.op) {
          e = o.value;
          break;
        }
      }
      n > -1 && (t = t.slice(n + 1));
      var r = _o("Patches").$;
      return oo(e) ? r(e, t) : this.produce(e, function (e) {
        return r(e, t);
      });
    }, e;
  }(),
  Qo = new Zo(),
  Jo = Qo.produce;
function er(e) {
  return (er = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  })(e);
}
function tr(e) {
  var t = function (e, t) {
    if ("object" !== er(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var o = n.call(e, t || "default");
      if ("object" !== er(o)) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }(e, "string");
  return "symbol" === er(t) ? t : String(t);
}
function nr(e, t, n) {
  return (t = tr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function or(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? or(Object(n), !0).forEach(function (t) {
      nr(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function ir(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
Qo.produceWithPatches.bind(Qo), Qo.setAutoFreeze.bind(Qo), Qo.setUseProxies.bind(Qo), Qo.applyPatches.bind(Qo), Qo.createDraft.bind(Qo), Qo.finishDraft.bind(Qo);
var sr = "function" == typeof Symbol && Symbol.observable || "@@observable",
  ar = function ar() {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  cr = {
    INIT: "@@redux/INIT" + ar(),
    REPLACE: "@@redux/REPLACE" + ar(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ar();
    }
  };
function lr(e, t, n) {
  var o;
  if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(ir(0));
  if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
    if ("function" != typeof n) throw new Error(ir(1));
    return n(lr)(e, t);
  }
  if ("function" != typeof e) throw new Error(ir(2));
  var r = e,
    i = t,
    s = [],
    a = s,
    c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c) throw new Error(ir(3));
    return i;
  }
  function d(e) {
    if ("function" != typeof e) throw new Error(ir(4));
    if (c) throw new Error(ir(5));
    var t = !0;
    return l(), a.push(e), function () {
      if (t) {
        if (c) throw new Error(ir(6));
        t = !1, l();
        var n = a.indexOf(e);
        a.splice(n, 1), s = null;
      }
    };
  }
  function p(e) {
    if (!function (e) {
      if ("object" != _typeof(e) || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }(e)) throw new Error(ir(7));
    if (void 0 === e.type) throw new Error(ir(8));
    if (c) throw new Error(ir(9));
    try {
      c = !0, i = r(i, e);
    } finally {
      c = !1;
    }
    for (var t = s = a, n = 0; n < t.length; n++) {
      (0, t[n])();
    }
    return e;
  }
  return p({
    type: cr.INIT
  }), (o = {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: function replaceReducer(e) {
      if ("function" != typeof e) throw new Error(ir(10));
      r = e, p({
        type: cr.REPLACE
      });
    }
  })[sr] = function () {
    var e,
      t = d;
    return (e = {
      subscribe: function subscribe(e) {
        if ("object" != _typeof(e) || null === e) throw new Error(ir(11));
        function n() {
          e.next && e.next(u());
        }
        return n(), {
          unsubscribe: t(n)
        };
      }
    })[sr] = function () {
      return this;
    }, e;
  }, o;
}
function ur(e) {
  for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
    var r = t[o];
    "function" == typeof e[r] && (n[r] = e[r]);
  }
  var i,
    s = Object.keys(n);
  try {
    !function (e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t];
        if (void 0 === n(void 0, {
          type: cr.INIT
        })) throw new Error(ir(12));
        if (void 0 === n(void 0, {
          type: cr.PROBE_UNKNOWN_ACTION()
        })) throw new Error(ir(13));
      });
    }(n);
  } catch (a) {
    i = a;
  }
  return function (e, t) {
    if (void 0 === e && (e = {}), i) throw i;
    for (var o = !1, r = {}, a = 0; a < s.length; a++) {
      var c = s[a],
        l = n[c],
        u = e[c],
        d = l(u, t);
      if (void 0 === d) throw t && t.type, new Error(ir(14));
      r[c] = d, o = o || d !== u;
    }
    return (o = o || s.length !== Object.keys(e).length) ? r : e;
  };
}
function dr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return 0 === t.length ? function (e) {
    return e;
  } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
    return function () {
      return e(t.apply(void 0, arguments));
    };
  });
}
function pr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function (e) {
    return function () {
      var n = e.apply(void 0, arguments),
        o = function o() {
          throw new Error(ir(15));
        },
        r = {
          getState: n.getState,
          dispatch: function dispatch() {
            return o.apply(void 0, arguments);
          }
        },
        i = t.map(function (e) {
          return e(r);
        });
      return o = dr.apply(void 0, i)(n.dispatch), rr(rr({}, n), {}, {
        dispatch: o
      });
    };
  };
}
function fr(e) {
  return function (t) {
    var n = t.dispatch,
      o = t.getState;
    return function (t) {
      return function (r) {
        return "function" == typeof r ? r(n, o, e) : t(r);
      };
    };
  };
}
var hr = fr();
hr.withExtraArgument = fr;
var mr = function () {
    var _e4 = function e(t, n) {
      return (_e4 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(t, n);
    };
    return function (t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      function o() {
        this.constructor = t;
      }
      _e4(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o());
    };
  }(),
  vr = function vr(e, t) {
    var n,
      o,
      r,
      i,
      s = {
        label: 0,
        sent: function sent() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
    return i = {
      next: a(0),
      "throw": a(1),
      "return": a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;
    function a(i) {
      return function (a) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (n = 1, o && (r = 2 & i[0] ? o["return"] : i[0] ? o["throw"] || ((r = o["return"]) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
            switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
              case 0:
              case 1:
                r = i;
                break;
              case 4:
                return s.label++, {
                  value: i[1],
                  done: !1
                };
              case 5:
                s.label++, o = i[1], i = [0];
                continue;
              case 7:
                i = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                  s = 0;
                  continue;
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                  s.label = i[1];
                  break;
                }
                if (6 === i[0] && s.label < r[1]) {
                  s.label = r[1], r = i;
                  break;
                }
                if (r && s.label < r[2]) {
                  s.label = r[2], s.ops.push(i);
                  break;
                }
                r[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            i = t.call(e, s);
          } catch (a) {
            i = [6, a], o = 0;
          } finally {
            n = r = 0;
          }
          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, a]);
      };
    }
  },
  yr = function yr(e, t) {
    for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
    return e;
  },
  _r = Object.defineProperty,
  gr = Object.defineProperties,
  br = Object.getOwnPropertyDescriptors,
  wr = Object.getOwnPropertySymbols,
  kr = Object.prototype.hasOwnProperty,
  xr = Object.prototype.propertyIsEnumerable,
  Cr = function Cr(e, t, n) {
    return t in e ? _r(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n;
  },
  Sr = function Sr(e, t) {
    for (var n in t || (t = {})) kr.call(t, n) && Cr(e, n, t[n]);
    if (wr) for (var o = 0, r = wr(t); o < r.length; o++) {
      n = r[o];
      xr.call(t, n) && Cr(e, n, t[n]);
    }
    return e;
  },
  Pr = function Pr(e, t) {
    return gr(e, br(t));
  },
  Er = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (0 !== arguments.length) return "object" == _typeof(arguments[0]) ? dr : dr.apply(null, arguments);
  };
function Or(e, t) {
  function n() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
    if (t) {
      var r = t.apply(void 0, n);
      if (!r) throw new Error("prepareAction did not return an object");
      return Sr(Sr({
        type: e,
        payload: r.payload
      }, "meta" in r && {
        meta: r.meta
      }), "error" in r && {
        error: r.error
      });
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return n.toString = function () {
    return "" + e;
  }, n.type = e, n.match = function (t) {
    return t.type === e;
  }, n;
}
var Mr = function (e) {
    function t() {
      for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
      var r = e.apply(this, n) || this;
      return Object.setPrototypeOf(r, t.prototype), r;
    }
    return mr(t, e), Object.defineProperty(t, Symbol.species, {
      get: function get() {
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.concat = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return e.prototype.concat.apply(this, t);
    }, t.prototype.prepend = function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, yr([void 0], e[0].concat(this))))() : new (t.bind.apply(t, yr([void 0], e.concat(this))))();
    }, t;
  }(Array),
  jr = function (e) {
    function t() {
      for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
      var r = e.apply(this, n) || this;
      return Object.setPrototypeOf(r, t.prototype), r;
    }
    return mr(t, e), Object.defineProperty(t, Symbol.species, {
      get: function get() {
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.concat = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return e.prototype.concat.apply(this, t);
    }, t.prototype.prepend = function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, yr([void 0], e[0].concat(this))))() : new (t.bind.apply(t, yr([void 0], e.concat(this))))();
    }, t;
  }(Array);
function Dr(e) {
  return ro(e) ? Jo(e, function () {}) : e;
}
function Ar() {
  return function (e) {
    return function (e) {
      void 0 === e && (e = {});
      var t = e.thunk,
        n = void 0 === t || t;
      e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
      var o = new Mr();
      n && ("boolean" == typeof n ? o.push(hr) : o.push(hr.withExtraArgument(n.extraArgument)));
      return o;
    }(e);
  };
}
function Tr(e) {
  var t,
    n = Ar(),
    o = e,
    r = o.reducer,
    i = void 0 === r ? void 0 : r,
    s = o.middleware,
    a = void 0 === s ? n() : s,
    c = o.devTools,
    l = void 0 === c || c,
    u = o.preloadedState,
    d = void 0 === u ? void 0 : u,
    p = o.enhancers,
    f = void 0 === p ? void 0 : p;
  if ("function" == typeof i) t = i;else {
    if (!function (e) {
      if ("object" != _typeof(e) || null === e) return !1;
      var t = Object.getPrototypeOf(e);
      if (null === t) return !0;
      for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
      return t === n;
    }(i)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    t = ur(i);
  }
  var h = a;
  "function" == typeof h && (h = h(n));
  var m = pr.apply(void 0, h),
    v = dr;
  l && (v = Er(Sr({
    trace: !1
  }, "object" == _typeof(l) && l)));
  var y = new jr(m),
    _ = y;
  return Array.isArray(f) ? _ = yr([m], f) : "function" == typeof f && (_ = f(y)), lr(t, d, v.apply(void 0, _));
}
function Lr(e) {
  var t,
    n = {},
    o = [],
    r = {
      addCase: function addCase(e, t) {
        var o = "string" == typeof e ? e : e.type;
        if (!o) throw new Error("`builder.addCase` cannot be called with an empty action type");
        if (o in n) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
        return n[o] = t, r;
      },
      addMatcher: function addMatcher(e, t) {
        return o.push({
          matcher: e,
          reducer: t
        }), r;
      },
      addDefaultCase: function addDefaultCase(e) {
        return t = e, r;
      }
    };
  return e(r), [n, o, t];
}
function zr(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  var n,
    o = "function" == typeof e.initialState ? e.initialState : Dr(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    s = {},
    a = {},
    c = {};
  function l() {
    var t = "function" == typeof e.extraReducers ? Lr(e.extraReducers) : [e.extraReducers],
      n = t[0],
      r = void 0 === n ? {} : n,
      i = t[1],
      s = void 0 === i ? [] : i,
      c = t[2],
      l = void 0 === c ? void 0 : c,
      u = Sr(Sr({}, r), a);
    return function (e, t, n, o) {
      void 0 === n && (n = []);
      var r,
        i = "function" == typeof t ? Lr(t) : [t, n, o],
        s = i[0],
        a = i[1],
        c = i[2];
      if ("function" == typeof e) r = function r() {
        return Dr(e());
      };else {
        var l = Dr(e);
        r = function r() {
          return l;
        };
      }
      function u(e, t) {
        void 0 === e && (e = r());
        var n = yr([s[t.type]], a.filter(function (e) {
          return (0, e.matcher)(t);
        }).map(function (e) {
          return e.reducer;
        }));
        return 0 === n.filter(function (e) {
          return !!e;
        }).length && (n = [c]), n.reduce(function (e, n) {
          if (n) {
            var o;
            if (oo(e)) return void 0 === (o = n(e, t)) ? e : o;
            if (ro(e)) return Jo(e, function (e) {
              return n(e, t);
            });
            if (void 0 === (o = n(e, t))) {
              if (null === e) return e;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return o;
          }
          return e;
        }, e);
      }
      return u.getInitialState = r, u;
    }(o, function (e) {
      for (var t in u) e.addCase(t, u[t]);
      for (var n = 0, o = s; n < o.length; n++) {
        var r = o[n];
        e.addMatcher(r.matcher, r.reducer);
      }
      l && e.addDefaultCase(l);
    });
  }
  return i.forEach(function (e) {
    var n,
      o,
      i = r[e],
      l = t + "/" + e;
    "reducer" in i ? (n = i.reducer, o = i.prepare) : n = i, s[e] = n, a[l] = n, c[e] = o ? Or(l, o) : Or(l);
  }), {
    name: t,
    reducer: function reducer(e, t) {
      return n || (n = l()), n(e, t);
    },
    actions: c,
    caseReducers: s,
    getInitialState: function getInitialState() {
      return n || (n = l()), n.getInitialState();
    }
  };
}
var Br = ["name", "message", "stack", "code"],
  Ir = function () {
    return function (e, t) {
      this.payload = e, this.meta = t;
    };
  }(),
  Nr = function () {
    return function (e, t) {
      this.payload = e, this.meta = t;
    };
  }(),
  Rr = function Rr(e) {
    if ("object" == _typeof(e) && null !== e) {
      for (var t = {}, n = 0, o = Br; n < o.length; n++) {
        var r = o[n];
        "string" == typeof e[r] && (t[r] = e[r]);
      }
      return t;
    }
    return {
      message: String(e)
    };
  };
function Kr(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
!function () {
  function e(e, t, n) {
    var o = Or(e + "/fulfilled", function (e, t, n, o) {
        return {
          payload: e,
          meta: Pr(Sr({}, o || {}), {
            arg: n,
            requestId: t,
            requestStatus: "fulfilled"
          })
        };
      }),
      r = Or(e + "/pending", function (e, t, n) {
        return {
          payload: void 0,
          meta: Pr(Sr({}, n || {}), {
            arg: t,
            requestId: e,
            requestStatus: "pending"
          })
        };
      }),
      i = Or(e + "/rejected", function (e, t, o, r, i) {
        return {
          payload: r,
          error: (n && n.serializeError || Rr)(e || "Rejected"),
          meta: Pr(Sr({}, i || {}), {
            arg: o,
            requestId: t,
            rejectedWithValue: !!r,
            requestStatus: "rejected",
            aborted: "AbortError" === (null == e ? void 0 : e.name),
            condition: "ConditionError" === (null == e ? void 0 : e.name)
          })
        };
      }),
      s = "undefined" != typeof AbortController ? AbortController : function () {
        function e() {
          this.signal = {
            aborted: !1,
            addEventListener: function addEventListener() {},
            dispatchEvent: function dispatchEvent() {
              return !1;
            },
            onabort: function onabort() {},
            removeEventListener: function removeEventListener() {},
            reason: void 0,
            throwIfAborted: function throwIfAborted() {}
          };
        }
        return e.prototype.abort = function () {}, e;
      }();
    return Object.assign(function (e) {
      return function (a, c, l) {
        var u,
          d = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : function (e) {
            void 0 === e && (e = 21);
            for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64 * Math.random() | 0];
            return t;
          }(),
          p = new s();
        function f(e) {
          u = e, p.abort();
        }
        var h = function () {
          return s = this, h = null, m = function m() {
            var s, h, m, v, y, _;
            return vr(this, function (g) {
              switch (g.label) {
                case 0:
                  return g.trys.push([0, 4,, 5]), v = null == (s = null == n ? void 0 : n.condition) ? void 0 : s.call(n, e, {
                    getState: c,
                    extra: l
                  }), null === (b = v) || "object" != _typeof(b) || "function" != typeof b.then ? [3, 2] : [4, v];
                case 1:
                  v = g.sent(), g.label = 2;
                case 2:
                  if (!1 === v || p.signal.aborted) throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                  return y = new Promise(function (e, t) {
                    return p.signal.addEventListener("abort", function () {
                      return t({
                        name: "AbortError",
                        message: u || "Aborted"
                      });
                    });
                  }), a(r(d, e, null == (h = null == n ? void 0 : n.getPendingMeta) ? void 0 : h.call(n, {
                    requestId: d,
                    arg: e
                  }, {
                    getState: c,
                    extra: l
                  }))), [4, Promise.race([y, Promise.resolve(t(e, {
                    dispatch: a,
                    getState: c,
                    extra: l,
                    requestId: d,
                    signal: p.signal,
                    abort: f,
                    rejectWithValue: function rejectWithValue(e, t) {
                      return new Ir(e, t);
                    },
                    fulfillWithValue: function fulfillWithValue(e, t) {
                      return new Nr(e, t);
                    }
                  })).then(function (t) {
                    if (t instanceof Ir) throw t;
                    return t instanceof Nr ? o(t.payload, d, e, t.meta) : o(t, d, e);
                  })])];
                case 3:
                  return m = g.sent(), [3, 5];
                case 4:
                  return _ = g.sent(), m = _ instanceof Ir ? i(null, d, e, _.payload, _.meta) : i(_, d, e), [3, 5];
                case 5:
                  return n && !n.dispatchConditionRejection && i.match(m) && m.meta.condition || a(m), [2, m];
              }
              var b;
            });
          }, new Promise(function (e, t) {
            var n = function n(e) {
                try {
                  r(m.next(e));
                } catch (n) {
                  t(n);
                }
              },
              o = function o(e) {
                try {
                  r(m["throw"](e));
                } catch (n) {
                  t(n);
                }
              },
              r = function r(t) {
                return t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
              };
            r((m = m.apply(s, h)).next());
          });
          var s, h, m;
        }();
        return Object.assign(h, {
          abort: f,
          requestId: d,
          arg: e,
          unwrap: function unwrap() {
            return h.then(Kr);
          }
        });
      };
    }, {
      pending: r,
      rejected: i,
      fulfilled: o,
      typePrefix: e
    });
  }
  e.withTypes = function () {
    return e;
  };
}();
var Fr = "listenerMiddleware";
Or(Fr + "/add"), Or(Fr + "/removeAll"), Or(Fr + "/remove"), "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof global ? global : globalThis), function () {
  function e(e, t) {
    var n = s[e];
    return n ? n.enumerable = t : s[e] = n = {
      configurable: !0,
      enumerable: t,
      get: function get() {
        var t = this[Vo];
        return $o.get(t, e);
      },
      set: function set(t) {
        var n = this[Vo];
        $o.set(n, e, t);
      }
    }, n;
  }
  function t(e) {
    for (var t = e.length - 1; t >= 0; t--) {
      var r = e[t][Vo];
      if (!r.P) switch (r.i) {
        case 5:
          o(r) && Do(r);
          break;
        case 4:
          n(r) && Do(r);
      }
    }
  }
  function n(e) {
    for (var t = e.t, n = e.k, o = qo(n), r = o.length - 1; r >= 0; r--) {
      var i = o[r];
      if (i !== Vo) {
        var s = t[i];
        if (void 0 === s && !ao(t, i)) return !0;
        var a = n[i],
          c = a && a[Vo];
        if (c ? c.t !== s : !lo(a, s)) return !0;
      }
    }
    var l = !!t[Vo];
    return o.length !== qo(t).length + (l ? 0 : 1);
  }
  function o(e) {
    var t = e.k;
    if (t.length !== e.t.length) return !0;
    var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
    if (n && !n.get) return !0;
    for (var o = 0; o < t.length; o++) if (!t.hasOwnProperty(o)) return !0;
    return !1;
  }
  var r,
    i,
    s = {};
  i = {
    J: function J(t, n) {
      var o = Array.isArray(t),
        r = function (t, n) {
          if (t) {
            for (var o = Array(n.length), r = 0; r < n.length; r++) Object.defineProperty(o, "" + r, e(r, !0));
            return o;
          }
          var i = Xo(n);
          delete i[Vo];
          for (var s = qo(i), a = 0; a < s.length; a++) {
            var c = s[a];
            i[c] = e(c, t || !!i[c].enumerable);
          }
          return Object.create(Object.getPrototypeOf(n), i);
        }(o, t),
        i = {
          i: o ? 5 : 4,
          A: n ? n.A : go(),
          P: !1,
          I: !1,
          R: {},
          l: n,
          t: t,
          k: r,
          o: null,
          g: !1,
          C: !1
        };
      return Object.defineProperty(r, Vo, {
        value: i,
        writable: !0
      }), r;
    },
    S: function S(e, n, r) {
      r ? oo(n) && n[Vo].A === e && t(e.p) : (e.u && function e(t) {
        if (t && "object" == _typeof(t)) {
          var n = t[Vo];
          if (n) {
            var r = n.t,
              i = n.k,
              s = n.R,
              a = n.i;
            if (4 === a) io(i, function (t) {
              t !== Vo && (void 0 !== r[t] || ao(r, t) ? s[t] || e(i[t]) : (s[t] = !0, Do(n)));
            }), io(r, function (e) {
              void 0 !== i[e] || ao(i, e) || (s[e] = !1, Do(n));
            });else if (5 === a) {
              if (o(n) && (Do(n), s.length = !0), i.length < r.length) for (var c = i.length; c < r.length; c++) s[c] = !1;else for (var l = r.length; l < i.length; l++) s[l] = !0;
              for (var u = Math.min(i.length, r.length), d = 0; d < u; d++) i.hasOwnProperty(d) || (s[d] = !0), void 0 === s[d] && e(i[d]);
            }
          }
        }
      }(e.p[0]), t(e.p));
    },
    K: function K(e) {
      return 4 === e.i ? n(e) : o(e);
    }
  }, Go[r = "ES5"] || (Go[r] = i);
}();
var Ur = {
    ru: {
      click_to_lock: "ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð·Ð°Ñ…Ð²Ð°Ñ‚Ð¸Ñ‚ÑŒ Ð¼Ñ‹ÑˆÑŒ",
      use_esc_key_to_unlock: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ `Esc` Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð¾ÑÐ²Ð¾Ð±Ð¾Ð´Ð¸Ñ‚ÑŒ",
      use_slider_to_change_sensitivity: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ ÑÐ»Ð°Ð¹Ð´ÐµÑ€ ÑÐ»ÐµÐ²Ð° Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ‡ÑƒÐ²ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ",
      current_sensitivity: "Ð¢ÐµÐºÑƒÑ‰Ð°Ñ Ñ‡ÑƒÐ²ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ",
      hello: "ÐŸÑ€Ð¸Ð²ÐµÑ‚",
      hello_guest: "ÐŸÑ€Ð¸Ð²ÐµÑ‚, Ð³Ð¾ÑÑ‚ÑŒ!",
      mobile_controls: "ÐœÐ¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ðµ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",
      mirrored_controls: "ÐžÑ‚Ñ€Ð°Ð·Ð¸Ñ‚ÑŒ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",
      scale_controls: "ÐœÐ°ÑÑˆÑ‚Ð°Ð± ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ",
      enter_name_of_drive: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð´Ð¸ÑÐºÐ°",
      ws_outdated: "ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð¾Ð±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ DOS Ð‘Ñ€Ð°ÑƒÐ·ÐµÑ€",
      update: "ÐžÐ±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ",
      preloading_sockdrive: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° (ÐµÐ´Ð¸Ð½Ð¾Ð¶Ð´Ñ‹)",
      filter: "Ð¤Ð¸Ð»ÑŒÑ‚Ñ€",
      add: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",
      logout: "Ð’Ñ‹Ð¹Ñ‚Ð¸",
      features: "Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¸",
      premium: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ°",
      buy: "ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ",
      experimental_features: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ðº ÑÐºÑÐ¿ÐµÑ€Ð¸ÐµÐ½Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ð¼ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑÐ¼",
      cloud_saves: "ÐžÐ±Ð»Ð°Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ",
      writeable_fat32: "FAT32 Ð´Ð¸ÑÐºÐ¸",
      net_no_limits: "Ð’Ñ‹Ð±Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð° Ð´Ð»Ñ ÑÑ‚ÐµÐ²Ð¾Ð¹ Ð¸Ð³Ñ€Ñ‹",
      unlock_options: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ ÐºÐ¾ Ð²ÑÐµÐ¼ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°Ð¼",
      error: "Ð£Ð¿Ñ... Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº...",
      consult_logs: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð»Ð¾Ð³Ð¸ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°",
      bundle_loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð±Ð°Ð½Ð´Ð»Ð°",
      bundle_config: "Ð§Ñ‚ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸Ð¸",
      try_free: "Ð´Ð½ÐµÐ¹ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾",
      upload_file: "Ð’Ñ‹Ð±Ð¸Ñ€Ð¸Ñ‚Ðµ Ð°Ñ€Ñ…Ð¸Ð² jsdos/zip Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ...",
      emulation_backend: "Ð­Ð¼ÑƒÐ»ÑÑ†Ð¸Ñ",
      render_backend: "Ð ÐµÐ½Ð´ÐµÑ€",
      render_aspect: "Ð¡Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ðµ ÑÑ‚Ð¾Ñ€Ð¾Ð½",
      worker: "Ð¤Ð¾Ð½Ð¾Ð²Ñ‹Ð¹ Ð¿Ð¾Ñ‚Ð¾Ðº",
      mouse_sensitivity: "Ð§ÑƒÐ²ÑÑ‚. Ð¼Ñ‹ÑˆÐ¸",
      mouse_lock: "Ð—Ð°Ñ…Ð²Ð°Ñ‚ Ð¼Ñ‹ÑˆÐ¸",
      volume: "Ð“Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚ÑŒ",
      pause: "ÐŸÐ°ÑƒÐ·Ð°",
      dosboxconf_template: "dosbox.conf ÑˆÐ°Ð±Ð»Ð¾Ð½:",
      preview: "ÐŸÑ€ÐµÐ²ÑŒÑŽ",
      "continue": "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
      skip: "ÐŸÑ€Ð¾Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ",
      loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°",
      extract_loading: "Ð Ð°ÑÐ¿Ð°ÐºÐ¾Ð²ÐºÐ° Ð°Ñ€Ñ…Ð¸Ð²Ð°",
      extract_long_time: "ÐœÐ¾Ð¶ÐµÑ‚ Ð·Ð°Ð½ÑÑ‚ÑŒ Ð´Ð»Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð° Ð¶Ð´Ð¸Ñ‚Ðµ...",
      theme: "Ð¢ÐµÐ¼Ð°",
      create_empty: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð¿ÑƒÑÑ‚Ð¾Ð¹ Ð±Ð°Ð½Ð´Ð»",
      uploading_file: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ñ„Ð°Ð¹Ð»Ð°",
      fs_restart: "Ð’Ñ‹ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð¿ÐµÑ€ÐµÑÐ¾Ð±Ñ€Ð°Ñ‚ÑŒ Ð±Ð°Ð½Ð´Ð» Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑ ÑÑ‚Ñƒ FS?",
      please_wait: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð° Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ",
      making_bundle: "Ð¡Ð¾Ð·Ð´Ð°ÐµÐ¼ Ð±Ð°Ð½Ð´Ð»",
      size: "Ð Ð°Ð·Ð¼ÐµÑ€",
      room: "ÐšÐ¾Ð¼Ð°Ð½Ñ‚Ð°",
      server: "Ð¡ÐµÑ€Ð²ÐµÑ€",
      load_by_url: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ",
      enter_url: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÑÑÑ‹Ð»ÐºÑƒ",
      load: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ",
      stored: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð½Ñ‹Ðµ",
      "delete": "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
      editor: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¾Ñ€",
      download: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ",
      changes: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ",
      loading_saves: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹",
      success: "Ð£ÑÐ¿ÐµÑˆÐ½Ð¾",
      success_save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð¾Ð±Ð»Ð°ÐºÐµ",
      warn_save_no_account: "CÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ (Ð²Ñ‹ Ð½Ðµ Ð²Ð¾ÑˆÐ»Ð¸)",
      warn_save_no_premium: "CÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ (Ð½ÐµÑ‚ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸)",
      warn_save_big_file: "CÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ (Ð±Ð¾Ð»ÑŒÑˆÐ¾Ð¹ Ñ„Ð°Ð¹Ð»)",
      unable_to_save: "ÐžÑˆÐ¸Ð±ÐºÐ° Ð·Ð°Ð¿Ð¸ÑÐ¸",
      not_premium: "ÐŸÐ¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
      copy_net_link: "ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ ÑÑÑ‹Ð»ÐºÑƒ Ð½Ð° Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ",
      copied: "Ð¡ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾",
      image_rendering: "ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ",
      fix: "Ð˜ÑÐ¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
      close: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
      cancle: "ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ",
      manage: "Ð£Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ",
      unable_to_cancle_subscription: "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ñ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
      subscription_cancelled: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ° Ð¾Ñ‚Ð¼ÐµÐ½ÐµÐ½Ð°",
      hardware: "ÐÐ¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ð¾Ðµ ÑƒÑÐºÐ¾Ñ€ÐµÐ½Ð¸Ðµ",
      play: "Ð—Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ",
      system_cursor: "Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ð¹ ÐºÑƒÑ€ÑÐ¾Ñ€",
      no_cloud_access: "Ð§Ñ‚Ð¾ Ð±Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ð±Ð»Ð°Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ",
      no_cloud_access2: "Ð½Ð¸Ð¶Ðµ",
      no_cloud_access3: "Ð‘ÐµÐ· Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÑ‚ÑÑ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ Ð¸ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐ½",
      key: "Ð²Ð°Ñˆ ÐºÐ»ÑŽÑ‡",
      load_archive: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð°Ñ€Ñ…Ð¸Ð²",
      sockdrives: "Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹Ðµ Ð¾Ð±Ñ€Ð°Ð·Ñ‹ (sockdrive)",
      confirm_save: "Ð¥Ð¾Ñ‚Ð¸Ñ‚Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑ?",
      save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ",
      emulation_ended: "Ð­Ð¼ÑƒÐ»ÑÑ†Ð¸Ñ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð°",
      saving_game: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ Ð¸Ð³Ñ€Ñ‹...",
      sockdrive_save_in_the_middle: "Win9x Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½ÐµÐµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÑ‚ÑŒ Ð¿Ð¾ÑÐ»Ðµ Ð²Ñ‹ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹",
      changes_loaded: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½Ñ‹ Ð² Ð¸Ð³Ñ€Ñƒ",
      error_deleting_changes: "ÐžÑˆÐ¸Ð±ÐºÐ° ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ñ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹",
      no_changes_loaded: "ÐÐµÑ‚ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹",
      upload: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ",
      error_uploading_changes: "ÐžÑˆÐ¸Ð±ÐºÐ° Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹",
      delete_changes_confirm: "Ð’Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹ Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ?",
      no_changes_to_save: "ÐÐµÑ‚ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹ Ð´Ð»Ñ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ"
    },
    en: {
      click_to_lock: "Click to capture mouse",
      use_esc_key_to_unlock: "Use `Esc` to unlock",
      use_slider_to_change_sensitivity: "Use slider on the left to change sensitivity",
      current_sensitivity: "Current sensitivity",
      hello: "Hello",
      hello_guest: "Hello, guest!",
      play: "Start",
      system_cursor: "System cursor",
      mobile_controls: "Mobile controls",
      mirrored_controls: "Mirror controls",
      scale_controls: "Scale controls",
      enter_name_of_drive: "Enter name of drive",
      ws_outdated: "Must update DOS Browser App",
      update: "Update",
      preloading_sockdrive: "Loading (once)",
      filter: "Filter",
      add: "Add",
      logout: "Logout",
      features: "Features",
      premium: "Subscription",
      buy: "Buy",
      experimental_features: "Access to all experimental features",
      cloud_saves: "Cloud saves",
      writeable_fat32: "Writable FAT32",
      net_no_limits: "Change the network region",
      unlock_options: "Unlock all configuration options",
      error: "Oops... Something went wrong...",
      consult_logs: "Please check browser logs",
      bundle_loading: "Bundle loading",
      bundle_config: "Reading config",
      try_free: "days for free",
      upload_file: "Select jsdos/zip file to start...",
      emulation_backend: "Emulation",
      render_backend: "Render",
      render_aspect: "Aspect",
      worker: "Worker thread",
      mouse_sensitivity: "Mouse sens...",
      mouse_lock: "Capture mouse",
      volume: "Volume",
      pause: "Pause",
      dosboxconf_template: "dosbox.conf template:",
      preview: "Preview",
      "continue": "Continue",
      skip: "Skip",
      loading: "Loading",
      extract_loading: "Unpacking archive",
      extract_long_time: "Can take long time, please be patient...",
      theme: "Theme",
      create_empty: "Create empty bundle",
      uploading_file: "Uploading file",
      fs_restart: "Do you want to rebuild the bundle using this fs?",
      please_wait: "Please wait",
      making_bundle: "Creating bundle",
      size: "Size",
      room: "Room",
      server: "Server",
      load_by_url: "Load by url",
      enter_url: "Enter url",
      load: "Load",
      stored: "Stored",
      "delete": "Delete",
      editor: "Editor",
      download: "Download",
      changes: "Saves",
      loading_saves: "Loading saves",
      success: "Success",
      success_save: "Saved in cloud",
      warn_save_no_account: "Saved in browser (not logged in)",
      warn_save_no_premium: "Saved in browser (no subscription)",
      warn_save_big_file: "Saved in browser (large file)",
      unable_to_save: "Unable to save",
      not_premium: "Subscribe",
      copy_net_link: "Share this link to connect",
      copied: "Copied",
      image_rendering: "Image rendering",
      fix: "Fix",
      close: "Close",
      cancle: "Cancel",
      manage: "Manage",
      unable_to_cancle_subscription: "Unable to cancel subscription",
      subscription_cancelled: "Subscription cancelled",
      hardware: "Hardware acceleration",
      no_cloud_access: "To enable cloud saves, enter",
      no_cloud_access2: "below",
      no_cloud_access3: "Without a subscription, your progress will only be saved locally in your browser and may be lost",
      key: "your key",
      load_archive: "Load archive",
      sockdrives: "Disk images (sockdrive)",
      confirm_save: "Do you want to save progress?",
      save: "Save",
      emulation_ended: "Emulation ended",
      saving_game: "Saving game...",
      sockdrive_save_in_the_middle: "Win9x is safer to save after shutting down the system",
      changes_loaded: "Changes loaded in game",
      error_deleting_changes: "Error deleting changes",
      no_changes_loaded: "No changes loaded",
      upload: "Upload",
      error_uploading_changes: "Error uploading changes",
      delete_changes_confirm: "Are you sure you want to delete saves?",
      no_changes_to_save: "No changes to save"
    },
    pt: {
      click_to_lock: "Clique para capturar o mouse",
      use_esc_key_to_unlock: "Use `Esc` para desbloquear",
      use_slider_to_change_sensitivity: "Use o slider Ã  esquerda para alterar a sensibilidade",
      current_sensitivity: "Sensibilidade atual",
      hello: "OlÃ¡",
      hello_guest: "OlÃ¡, convidado!",
      play: "Iniciar",
      system_cursor: "Cursor do sistema",
      mobile_controls: "Controles mÃ³veis",
      mirrored_controls: "Controles espelhados",
      scale_controls: "Escalar controles",
      enter_name_of_drive: "Digite o nome da unidade",
      ws_outdated: "VocÃª precisa atualizar o aplicativo DOS Browser",
      update: "Atualizar",
      preloading_sockdrive: "Carregando",
      filter: "Filtrar",
      add: "Adicionar",
      logout: "Sair",
      features: "Recursos",
      premium: "Assinatura",
      buy: "Comprar",
      experimental_features: "Acesso a todos os recursos experimentais",
      cloud_saves: "Salvamentos em nuvem",
      writeable_fat32: "FAT32 gravÃ¡vel",
      net_no_limits: "Alterar a regiÃ£o da rede",
      unlock_options: "Desbloquear todas as opÃ§Ãµes de configuraÃ§Ã£o",
      error: "Oops... Algo deu errado...",
      consult_logs: "Por favor, verifique os logs do navegador",
      bundle_loading: "Carregando pacote",
      bundle_config: "Lendo configuraÃ§Ã£o",
      try_free: "dias grÃ¡tis",
      upload_file: "Selecione um arquivo jsdos/zip para iniciar...",
      emulation_backend: "Emulador",
      render_backend: "RenderizaÃ§Ã£o",
      render_aspect: "Aspecto",
      worker: "Thread de trabalho",
      mouse_sensitivity: "Sensibilidade do mouse...",
      mouse_lock: "Capturar mouse",
      volume: "Volume",
      pause: "Pausar",
      dosboxconf_template: "Modelo dosbox.conf:",
      preview: "PrÃ©-visualizar",
      "continue": "Continuar",
      skip: "Pular",
      loading: "Carregando",
      extract_loading: "Extraindo arquivo",
      extract_long_time: "Pode levar algum tempo, por favor, seja paciente...",
      theme: "Tema",
      create_empty: "Criar pacote vazio",
      uploading_file: "Enviando arquivo",
      fs_restart: "VocÃª deseja reconstruir o pacote usando este sistema de arquivos?",
      please_wait: "Por favor, aguarde",
      making_bundle: "Criando pacote",
      size: "Tamanho",
      room: "Sala",
      server: "Servidor",
      load_by_url: "Carregar por URL",
      enter_url: "Digite a URL",
      load: "Carregar",
      stored: "Armazenado",
      "delete": "Excluir",
      editor: "Editor",
      download: "Download",
      changes: "Salvamentos",
      loading_saves: "Carregando salvamentos",
      success: "Sucesso",
      success_save: "Salvo na nuvem",
      warn_save_no_account: "Salvo no navegador (vocÃª nÃ£o estÃ¡ conectado)",
      warn_save_no_premium: "Salvo no navegador (sem assinatura)",
      warn_save_big_file: "Salvo no navegador (grande arquivo)",
      unable_to_save: "NÃ£o foi possÃ­vel salvar",
      not_premium: "Assine",
      copy_net_link: "Compartilhe este link para se conectar",
      copied: "Copiado",
      image_rendering: "RenderizaÃ§Ã£o de imagem",
      fix: "Corrigir",
      close: "Fechar",
      cancle: "Cancelar",
      manage: "Gerenciar",
      unable_to_cancle_subscription: "NÃ£o foi possÃ­vel cancelar a assinatura",
      subscription_cancelled: "Assinatura cancelada",
      hardware: "AceleraÃ§Ã£o de hardware",
      no_cloud_access: "Para usar o armazenamento em nuvem, insira",
      no_cloud_access2: "abaixo",
      no_cloud_access3: "Sem assinatura, seu progresso serÃ¡ salvo localmente no navegador e pode ser perdido",
      key: "sua chave",
      load_archive: "Carregar arquivo",
      sockdrives: "Imagens de disco (sockdrive)",
      confirm_save: "VocÃª deseja salvar o progresso?",
      save: "Salvar",
      emulation_ended: "EmulaÃ§Ã£o terminada",
      saving_game: "Salvando jogo...",
      sockdrive_save_in_the_middle: "Win9x Ã© mais seguro salvar apÃ³s desligar o sistema",
      changes_loaded: "AlteraÃ§Ãµes carregadas no jogo",
      error_deleting_changes: "Erro ao deletar alteraÃ§Ãµes",
      no_changes_loaded: "Nenhuma alteraÃ§Ã£o carregada",
      upload: "Carregar",
      error_uploading_changes: "Erro ao carregar alteraÃ§Ãµes",
      delete_changes_confirm: "Tem certeza que deseja deletar os salvamentos?",
      no_changes_to_save: "Nenhuma alteraÃ§Ã£o para salvar"
    },
    ro: {
      click_to_lock: "FaceÈ›i clic pentru a captura mouse-ul",
      use_esc_key_to_unlock: "FoloseÈ™te `Esc` pentru a debloca",
      use_slider_to_change_sensitivity: "FoloseÈ™te cursorul din stÃ¢nga pentru a schimba sensibilitatea",
      current_sensitivity: "Sensibilitatea Ã®n prezent",
      hello: "Salutare",
      hello_guest: "Salutare, oaspete!",
      play: "PorneÈ™te",
      system_cursor: "Cursorul sistemului",
      mobile_controls: "Comenzi mobile",
      mirrored_controls: "Comenzi oglindÄƒ",
      scale_controls: "Controale de scalare",
      enter_name_of_drive: "IntroduceÈ›i numele unitÄƒÈ›ii",
      ws_outdated: "Trebuie sÄƒ actualizaÈ›i aplicaÈ›ia de browser DOS",
      update: "Actualizare",
      preloading_sockdrive: "Se Ã®ncarcÄƒ (o datÄƒ)",
      filter: "Filtru",
      add: "AdaugÄƒ",
      logout: "Deconectare",
      features: "Caracteristici",
      premium: "Abonament",
      buy: "CumpÄƒrÄƒ",
      experimental_features: "Acces la toate funcÈ›iile experimentale",
      cloud_saves: "SalveazÄƒ Ã®n cloud",
      writeable_fat32: "FAT32 inscriptibil",
      net_no_limits: "SchimbaÈ›i regiunea reÈ›elei",
      unlock_options: "DeblocaÈ›i toate opÈ›iunile de configurare",
      error: "Ups... Ceva nu a mers bine...",
      consult_logs: "VÄƒ rugÄƒm sÄƒ verificaÈ›i jurnalele browserului",
      bundle_loading: "Pachetul se Ã®ncarcÄƒ",
      bundle_config: "Citirea configuraÈ›iei",
      try_free: "zile gratuite",
      upload_file: "SelectaÈ›i fiÈ™ierul jsdos/zip pentru a Ã®ncepe...",
      emulation_backend: "Emulare",
      render_backend: "RandeazÄƒ",
      render_aspect: "Aspect",
      worker: "Fir de lucru",
      mouse_sensitivity: "Senzor mouse...",
      mouse_lock: "CapturÄƒ mouse",
      volume: "Volum",
      pause: "PauzÄƒ",
      dosboxconf_template: "È˜ablon dosbox.conf:",
      preview: "Previzualizare",
      "continue": "ContinuaÈ›i",
      skip: "Sari peste",
      loading: "Se Ã®ncarcÄƒ",
      extract_loading: "Despachetarea arhivei",
      extract_long_time: "Poate dura mult timp, vÄƒ rog sÄƒ aveÈ›i rÄƒbdare...",
      theme: "TemÄƒ",
      create_empty: "CreaÈ›i un pachet gol",
      uploading_file: "Se Ã®ncarcÄƒ fiÈ™ierul",
      fs_restart: "Vrei sÄƒ reconstruieÈ™ti pachetul folosind acest fs?",
      please_wait: "Va rugÄƒm aÈ™teptaÈ›i",
      making_bundle: "Se creeazÄƒ pachetul",
      size: "Dimensiune",
      room: "CamerÄƒ",
      server: "Server",
      load_by_url: "ÃŽncÄƒrcare dupÄƒ URL",
      enter_url: "IntroduceÈ›i adresa URL",
      load: "ÃŽncarcÄƒ",
      stored: "Stocat",
      "delete": "Åžterge",
      editor: "Editor",
      download: "DescÄƒrcare",
      changes: "SalvÄƒri",
      loading_saves: "Se Ã®ncarcÄƒ salvÄƒrile",
      success: "Succes",
      success_save: "Salvat Ã®n cloud",
      warn_save_no_account: "Salvat Ã®n browser (neconectat)",
      warn_save_no_premium: "Salvat Ã®n browser (fÄƒrÄƒ abonament)",
      warn_save_big_file: "Salvat Ã®n browser (fiÈ™ier mare)",
      unable_to_save: "Nu se poate salva",
      not_premium: "AboneazÄƒ-te",
      copy_net_link: "DistribuiÈ›i acest link pentru a vÄƒ conecta",
      copied: "Copiat",
      image_rendering: "Redarea imaginilor",
      fix: "Reparare",
      close: "ÃŽnchide",
      cancle: "AnuleazÄƒ",
      manage: "GestioneazÄƒ",
      unable_to_cancle_subscription: "Nu se poate anula abonamentul",
      subscription_cancelled: "Abonament anulat",
      hardware: "Accelerare hardware",
      no_cloud_access: "Pentru a activa salvÄƒrile Ã®n cloud, introduceÈ›i",
      no_cloud_access2: "dedesubt",
      no_cloud_access3: "FÄƒrÄƒ un abonament, progresul dvs. va fi salvat doar local Ã®n browser È™i se poate pierde.",
      key: "cheia ta",
      load_archive: "ÃŽncÄƒrcaÈ›i arhiva",
      sockdrives: "Imagini de disc (unitate de tip sock)",
      confirm_save: "Vrei sÄƒ salvezi progresul?",
      save: "SalvaÈ›i",
      emulation_ended: "Emularea s-a Ã®ncheiat",
      saving_game: "Se salveazÄƒ jocul...",
      sockdrive_save_in_the_middle: "Este mai sigur sÄƒ salvaÈ›i fiÈ™ierele Ã®n Win9x dupÄƒ Ã®nchiderea sistemului.",
      changes_loaded: "ModificÄƒri Ã®ncÄƒrcate Ã®n joc",
      error_deleting_changes: "Eroare la È™tergerea modificÄƒrilor",
      no_changes_loaded: "Nicio modificare Ã®ncÄƒrcatÄƒ",
      upload: "ÃŽncÄƒrcaÈ›i",
      error_uploading_changes: "Eroare la Ã®ncÄƒrcarea modificÄƒrilor",
      delete_changes_confirm: "SunteÈ›i sigur cÄƒ doriÈ›i sÄƒ È™tergeÈ›i modificÄƒrile?",
      no_changes_to_save: "Nu existÄƒ modificÄƒri pentru a fi salvate"
    }
  },
  Hr = navigator.language.startsWith("ru") ? "ru" : navigator.language.startsWith("pt") ? "pt" : navigator.language.startsWith("ro") ? "ro" : "en",
  Vr = zr({
    name: "i18n",
    initialState: {
      lang: Hr,
      keys: Ur[Hr]
    },
    reducers: {
      setLang: function setLang(e, t) {
        e.lang = t.payload, e.keys = Ur[t.payload];
      }
    }
  });
function Wr() {
  var e = on(function (e) {
    return e.i18n.keys;
  });
  return function (t) {
    var _e$t;
    return (_e$t = e[t]) !== null && _e$t !== void 0 ? _e$t : t;
  };
}
var qr = [{
    name: "7.xx",
    backend: "dosbox",
    contents: "[sdl]\nautolock=false\n\nfullscreen=false\nfulldouble=false\nfullresolution=original\nwindowresolution=original\noutput=surface\nsensitivity=100\nwaitonerror=true\npriority=higher,normal\nmapperfile=mapper-jsdos.map\nusescancodes=true\nvsync=false\n[dosbox]\nmachine=svga_s3\n\nlanguage=\ncaptures=capture\nmemsize=16\n[cpu]\ncore=auto\ncputype=auto\ncycles=auto\n\ncycleup=10\ncycledown=20\n[mixer]\nnosound=false\nrate=44100\n\nblocksize=1024\nprebuffer=20\n\n[render]\n# frameskip: How many frames DOSBox skips before drawing one.\n#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.\n#    scaler: Scaler used to enlarge/enhance low resolution modes.\n#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.\n#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.\n\nframeskip=0\naspect=false\nscaler=none\n\n[midi]\n#     mpu401: Type of MPU-401 to emulate.\n#             Possible values: intelligent, uart, none.\n# mididevice: Device that will receive the MIDI data from MPU-401.\n#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.\n# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.\n#               See the README/Manual for more details.\n\nmpu401=intelligent\nmididevice=default\nmidiconfig=\n\n[sblaster]\n#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.\n#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.\n#  sbbase: The IO address of the soundblaster.\n#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.\n#     irq: The IRQ number of the soundblaster.\n#          Possible values: 7, 5, 3, 9, 10, 11, 12.\n#     dma: The DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n#    hdma: The High DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.\n# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.\n#          Possible values: auto, cms, opl2, dualopl2, opl3, none.\n#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).\n#          Possible values: default, compat, fast.\n# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).\n#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.\n\nsbtype=sb16\nsbbase=220\nirq=7\ndma=1\nhdma=5\nsbmixer=true\noplmode=auto\noplemu=default\noplrate=44100\n\n[gus]\n#      gus: Enable the Gravis Ultrasound emulation.\n#  gusrate: Sample rate of Ultrasound emulation.\n#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#  gusbase: The IO base address of the Gravis Ultrasound.\n#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.\n#   gusirq: The IRQ number of the Gravis Ultrasound.\n#           Possible values: 5, 3, 7, 9, 10, 11, 12.\n#   gusdma: The DMA channel of the Gravis Ultrasound.\n#           Possible values: 3, 0, 1, 5, 6, 7.\n# ultradir: Path to Ultrasound directory. In this directory\n#           there should be a MIDI directory that contains\n#           the patch files for GUS playback. Patch sets used\n#           with Timidity should work fine.\n\ngus=false\ngusrate=44100\ngusbase=240\ngusirq=5\ngusdma=3\nultradir=C:\\ULTRASND\n\n[speaker]\n# pcspeaker: Enable PC-Speaker emulation.\n#    pcrate: Sample rate of the PC-Speaker sound generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.\n#            Possible values: auto, on, off.\n# tandyrate: Sample rate of the Tandy 3-Voice generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).\n\npcspeaker=true\npcrate=44100\ntandy=auto\ntandyrate=44100\ndisney=true\n\n[joystick]\n# joysticktype: Type of joystick to emulate: auto (default), none,\n#               2axis (supports two joysticks),\n#               4axis (supports one joystick, first joystick used),\n#               4axis_2 (supports one joystick, second joystick used),\n#               fcs (Thrustmaster), ch (CH Flightstick).\n#               none disables joystick emulation.\n#               auto chooses emulation depending on real joystick(s).\n#               (Remember to reset dosbox's mapperfile if you saved it earlier)\n#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.\n#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).\n#     autofire: continuously fires as long as you keep the button pressed.\n#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.\n#   buttonwrap: enable button wrapping at the number of emulated buttons.\n\njoysticktype=auto\ntimed=true\nautofire=false\nswap34=false\nbuttonwrap=false\n\n[serial]\n# serial1: set type of device connected to com port.\n#          Can be disabled, dummy, modem, nullmodem, directserial.\n#          Additional parameters must be in the same line in the form of\n#          parameter:value. Parameter for all types is irq (optional).\n#          for directserial: realport (required), rxdelay (optional).\n#                           (realport:COM1 realport:ttyS0).\n#          for modem: listenport (optional).\n#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,\n#                         transparent, port, inhsocket (all optional).\n#          Example: serial1=modem listenport:5000\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial2: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial3: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial4: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n\nserial1=dummy\nserial2=dummy\nserial3=disabled\nserial4=disabled\n\n[dos]\n#            xms: Enable XMS support.\n#            ems: Enable EMS support.\n#            umb: Enable UMB support.\n# keyboardlayout: Language code of the keyboard layout (or none).\n\nxms=true\nems=true\numb=true\nkeyboardlayout=auto\n\n[ipx]\n# ipx: Enable ipx over UDP/IP emulation.\n\nipx=true\n[autoexec]\necho off\nmount c .\nc:\n\ntype jsdos~1/readme.txt\necho on\n\n# Generated using https://js-dos.com\n# \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6 \xE2\u2013\u02C6  \xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6 \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\n# \xE2\u2013\u02C6 \xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u02C6 \xE2\u2013\u02C6 \xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u201E \xE2\u2013\u02C6 \xE2\u2013\u20AC \xE2\u2013\u201E \xE2\u2013\u02C6 \xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u02C6 \xE2\u2013\u02C6\n# \xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u02C6 \xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u02C6 \xE2\u2013\u20AC \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6 \xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u02C6\n# \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u20AC \xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u20AC \xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\n# \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u201E \xE2\u2013\u20AC \xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E \xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\n# \xE2\u2013\u02C6\xE2\u2013\u20AC \xE2\u2013\u20AC \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E \xE2\u2013\u02C6\xE2\u2013\u20AC \xE2\u2013\u201E \xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u201E\n# \xE2\u2013\u201E \xE2\u2013\u201E\xE2\u2013\u201E \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E \xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6  \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\n#   \xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E \xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u201E\n# \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u20AC \xE2\u2013\u20AC \xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\n# \xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6 \xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E \xE2\u2013\u201E \xE2\u2013\u201E \xE2\u2013\u02C6 \xE2\u2013\u20AC \xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u201E\n# \xE2\u2013\u02C6 \xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u02C6 \xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u02C6\n# \xE2\u2013\u02C6 \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u02C6 \xE2\u2013\u201E\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u02C6\xE2\u2013\u20AC\xE2\u2013\u201E \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u201E\xE2\u2013\u201E\xE2\u2013\u02C6\xE2\u2013\u201E\xE2\u2013\u02C6\n# \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u20AC   \xE2\u2013\u20AC\xE2\u2013\u20AC \xE2\u2013\u20AC  \xE2\u2013\u20AC   \xE2\u2013\u20AC\xE2\u2013\u20AC\xE2\u2013\u20AC\n".replace(/\n/g, "\r\n")
  }, {
    name: "DOS 7.1",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\n\n[dosbox]\ntitle=DOS 7.1\nmemsize=64\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\n\n[sblaster]\nsbtype=sb16vibra\n\n[render]\nscaler=none\n\n[autoexec]\necho off\n\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load DOS 7.1\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(/\n/g, "\r\n")
  }, {
    name: "Win 3.11",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\nmouse emulation=integration\n\n[dosbox]\ntitle=Win 3.11\nmemsize=256\n\n[dos]\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium\ncore=auto\nintegration device=true\n\n[pci]\nvoodoo=false\n\n[sblaster]\nsbtype=sb16vibra\n\n[render]\nscaler=none\n\n[autoexec]\necho off\n\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load Win 3.11\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(/\n/g, "\r\n")
  }, {
    name: "Win 95",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 95\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\n\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 95\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(/\n/g, "\r\n")
  }, {
    name: "Win 98",
    backend: "dosboxX",
    contents: "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 98\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\n\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 98\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(/\n/g, "\r\n")
  }],
  Xr = zr({
    name: "editor",
    initialState: {
      configChanged: !1,
      bundleConfig: null,
      errorMessage: null,
      fs: []
    },
    reducers: {
      init: function init(e, t) {
        null === t.payload ? (e.configChanged = !0, e.bundleConfig = {
          dosboxConf: qr[0].contents,
          jsdosConf: {
            version: "js-dos-v8"
          }
        }) : (e.configChanged = !1, e.bundleConfig = t.payload);
      },
      dosboxConf: function dosboxConf(e, t) {
        e.configChanged = !0, e.bundleConfig.dosboxConf = t.payload;
      }
    }
  });
var Gr = /*#__PURE__*/function () {
  function Gr() {
    _classCallCheck(this, Gr);
    t(this, "length", 0), t(this, "storage", {});
  }
  return _createClass(Gr, [{
    key: "setItem",
    value: function setItem(e, t) {
      this.storage[e] = t, this.length = Object.keys(this.storage).length;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      var t = this.storage[e];
      return void 0 === t ? null : t;
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete this.storage[e], this.length = Object.keys(this.storage).length;
    }
  }, {
    key: "key",
    value: function key(e) {
      var t = Object.keys(this.storage);
      return void 0 === t[e] ? null : t[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.length = 0, this.storage = {};
    }
  }]);
}();
var $r = new (/*#__PURE__*/function () {
    function _class(e, n) {
      var _this = this;
      _classCallCheck(this, _class);
      t(this, "backend"), t(this, "length"), t(this, "prefix"), this.prefix = n;
      try {
        this.backend = e || localStorage, this.testBackend();
      } catch (o) {
        this.backend = new Gr();
      }
      this.length = this.backend.length, "function" == typeof this.backend.sync && (this.sync = function (e) {
        _this.backend.sync(e);
      });
    }
    return _createClass(_class, [{
      key: "testBackend",
      value: function testBackend() {
        var e = this.prefix + ".test.record";
        this.backend.setItem(e, "123");
        var t = this.backend.getItem(e);
        this.backend.removeItem(e);
        if (!("123" === t && null === this.backend.getItem(e))) throw new Error("Storage backend is not working properly");
      }
    }, {
      key: "setLocalStoragePrefix",
      value: function setLocalStoragePrefix(e) {
        this.prefix = e;
      }
    }, {
      key: "clear",
      value: function clear() {
        if (!this.backend.length) return;
        var e = [];
        for (var _t5 = 0; _t5 < this.backend.length; ++_t5) {
          var _n3 = this.backend.key(_t5);
          _n3 && _n3.startsWith(this.prefix) && e.push(_n3);
        }
        for (var _i2 = 0, _e5 = e; _i2 < _e5.length; _i2++) {
          var _t6 = _e5[_i2];
          this.backend.removeItem(_t6);
        }
        this.length = this.backend.length;
      }
    }, {
      key: "key",
      value: function key(e) {
        return this.backend.key(e);
      }
    }, {
      key: "setItem",
      value: function setItem(e, t) {
        if (!t || void 0 === t.length || 0 === t.length) return void this.writeStringToKey(e, "");
        var n = 0;
        for (; n < t.length;) {
          var _o2 = t.substr(n, 1024);
          n += _o2.length, n < t.length && (_o2 += "@"), this.writeStringToKey(e, _o2), e += ".";
        }
      }
    }, {
      key: "getItem",
      value: function getItem(e) {
        var t = this.readStringFromKey(e);
        if (null === t) return null;
        if (0 === t.length) return t;
        for (; "@" === t[t.length - 1];) {
          t = t.substr(0, t.length - 1), e += ".";
          var _n4 = this.readStringFromKey(e);
          t += null === _n4 ? "" : _n4;
        }
        return t;
      }
    }, {
      key: "removeItem",
      value: function removeItem(e) {
        this.backend.removeItem(this.prefix + e), this.length = this.backend.length;
      }
    }, {
      key: "writeStringToKey",
      value: function writeStringToKey(e, t) {
        this.backend.setItem(this.prefix + e, t), this.length = this.backend.length;
      }
    }, {
      key: "readStringFromKey",
      value: function readStringFromKey(e) {
        return this.backend.getItem(this.prefix + e);
      }
    }]);
  }())(void 0, "jsdos.8."),
  Yr = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  Zr = zr({
    name: "js-dos v8s",
    initialState: {
      hidden: !1,
      frame: "none",
      frameXs: !1,
      window: "none",
      theme: ((_$r$getItem = $r.getItem("theme")) !== null && _$r$getItem !== void 0 ? _$r$getItem : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light",
      editor: !1,
      wideScreen: !0,
      fullScreen: !1,
      toast: null,
      toastIntent: "none",
      toastTimeoutId: 0,
      background: null,
      updateWsWarning: !1,
      canSave: !0,
      autoStart: !1,
      countDownStart: 0,
      autoSave: !1,
      kiosk: !1,
      documentHidden: (_document$hidden = document.hidden) !== null && _document$hidden !== void 0 ? _document$hidden : !1,
      noNetworking: !0,
      noCloud: !1,
      warnOnKey: !0,
      warnOnPremium: !1,
      softFullscreen: !1,
      haveQuickSave: !1,
      thinSidebar: !1,
      pointerLocked: !1,
      clickToLockModal: !0
    },
    reducers: {
      theme: function theme(e, t) {
        $r.setItem("theme", t.payload), e.theme = t.payload;
      },
      frameNone: function frameNone(e) {
        e.frame = "none", e.frameXs = !1;
      },
      frameSettings: function frameSettings(e) {
        e.frame = "settings", e.frameXs = !1;
      },
      frameNetwork: function frameNetwork(e) {
        e.frame = "network", e.frameXs = !1;
      },
      frameStats: function frameStats(e) {
        e.frame = "stats", e.frameXs = !1;
      },
      frameConf: function frameConf(e) {
        e.frame = "editor-conf", e.frameXs = !1;
      },
      frameFs: function frameFs(e) {
        e.frame = "editor-fs", e.frameXs = !1;
      },
      framePreRun: function framePreRun(e) {
        e.frame = "prerun", e.frameXs = !1;
      },
      windowSelect: function windowSelect(e) {
        e.window = "select", e.editor = !0;
      },
      background: function background(e, t) {
        e.background = t.payload;
      },
      setEditor: function setEditor(e, t) {
        e.editor = t.payload;
      },
      setWideScreen: function setWideScreen(e, t) {
        e.wideScreen = t.payload;
      },
      setFullScreen: function setFullScreen(e, t) {
        e.fullScreen = t.payload, e.thinSidebar = t.payload;
      },
      showToast: function showToast(e, t) {
        var _t$payload$intent;
        0 !== e.toastTimeoutId && clearInterval(e.toastTimeoutId), e.toast = t.payload.message, e.toastIntent = (_t$payload$intent = t.payload.intent) !== null && _t$payload$intent !== void 0 ? _t$payload$intent : "none", "panic" !== t.payload.intent && (e.toastTimeoutId = setTimeout(function () {
          t.asyncStore(function (e) {
            return e.dispatch(Zr.actions.hideToast());
          });
        }, t.payload["long"] ? 5e3 : 1500));
      },
      hideToast: function hideToast(e) {
        e.toast = null, e.toastTimeoutId = 0;
      },
      updateWsWarning: function updateWsWarning(e, t) {
        e.updateWsWarning = t.payload;
      },
      autoStart: function autoStart(e, t) {
        e.autoStart = t.payload;
      },
      countDownStart: function countDownStart(e, t) {
        e.countDownStart = t.payload, e.autoStart = !0;
      },
      autoSave: function autoSave(e, t) {
        e.autoSave = t.payload;
      },
      kiosk: function kiosk(e, t) {
        e.kiosk = t.payload;
      },
      documentHidden: function documentHidden(e, t) {
        e.documentHidden = t.payload;
      },
      noNetworking: function noNetworking(e, t) {
        e.noNetworking = t.payload;
      },
      noCloud: function noCloud(e, t) {
        e.noCloud = t.payload;
      },
      hidden: function hidden(e, t) {
        e.hidden = t.payload;
      },
      warnOnKey: function warnOnKey(e, t) {
        e.warnOnKey = t.payload, e.frame = "none";
      },
      warnOnPremium: function warnOnPremium(e, t) {
        e.warnOnKey = t.payload, e.frame = "none";
      },
      softFullscreen: function softFullscreen(e, t) {
        e.softFullscreen = t.payload;
      },
      canSave: function canSave(e, t) {
        e.canSave = t.payload;
      },
      setHaveQuickSave: function setHaveQuickSave(e, t) {
        e.haveQuickSave = t.payload;
      },
      thinSidebar: function thinSidebar(e, t) {
        e.thinSidebar = t.payload;
      },
      pointerLocked: function pointerLocked(e, t) {
        e.pointerLocked = t.payload;
      },
      clickToLockModal: function clickToLockModal(e, t) {
        e.clickToLockModal = t.payload;
      }
    },
    extraReducers: function extraReducers(e) {
      e.addCase(Or("dos/bndLoad"), function (e, t) {
        e.window = "loading";
      }).addCase(Or("editor/extract"), function (e, t) {
        e.window = "loading";
      }).addCase(Or("editor/ready"), function (e, t) {
        e.window = "prerun";
      }).addCase(Or("dos/bndReady"), function (e, t) {
        e.autoStart && 0 === e.countDownStart ? t.asyncStore(function (e) {
          e.dispatch(Ci.actions.bndPlay({}));
        }) : e.window = "prerun";
      }).addCase(Or("dos/bndPlay"), function (e, t) {
        e.window = "run", e.frame = "none";
      }).addMatcher(function (e) {
        return e.type.startsWith("dos/") && e.type.endsWith("Error");
      }, function (e, t) {
        e.window = "error";
      });
    }
  }),
  Qr = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net",
  Jr = Qr + "/presign-put",
  ei = Qr + "/presign-delete",
  ti = "/b4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos",
  ni = "cached.jsdos.account",
  oi = zr({
    name: "auth",
    initialState: {
      account: function () {
        var e = $r.getItem(ni);
        if (e) {
          var _t7 = JSON.parse(e);
          if (_t7.email && _t7.email.length > 0 && _t7.token && 5 === _t7.token.length) return _t7;
        }
        return null;
      }()
    },
    reducers: {
      setAccount: function setAccount(e, t) {
        var n = t.payload;
        null !== n ? $r.setItem(ni, JSON.stringify(n)) : $r.removeItem(ni), e.account = n;
      }
    }
  });
function ri(_x) {
  return _ri.apply(this, arguments);
}
function _ri() {
  _ri = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(e) {
    var n, _t91, t;
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (!(!e || 5 !== e.length)) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2, {
            token: e,
            account: null
          });
        case 1:
          n = 0;
        case 2:
          if (!(n < e.length)) {
            _context28.n = 4;
            break;
          }
          _t91 = e.charCodeAt(n);
          if (_t91 > 96 && _t91 < 123) {
            _context28.n = 3;
            break;
          }
          return _context28.a(2, {
            token: e,
            account: null
          });
        case 3:
          ++n;
          _context28.n = 2;
          break;
        case 4:
          _context28.n = 5;
          return fetch("https://cloud.js-dos.com/token/get?id=" + e);
        case 5:
          _context28.n = 6;
          return _context28.v.json();
        case 6:
          t = _context28.v;
          return _context28.a(2, (delete t.success, {
            token: e,
            account: t.email ? t : null
          }));
      }
    }, _callee28);
  }));
  return _ri.apply(this, arguments);
}
var ii = zr({
  name: "storage",
  initialState: {
    recived: 0,
    total: 0,
    changedRecived: 0,
    changedTotal: 0,
    ready: !1
  },
  reducers: {
    reset: function reset(e) {
      e.recived = -1, e.total = 0, e.changedRecived = 0, e.changedTotal = 0, e.ready = !1;
    },
    progress: function progress(e, t) {
      e.recived = t.payload[0], e.total = t.payload[1];
    },
    changedProgress: function changedProgress(e, t) {
      e.changedRecived = t.payload[0], e.changedTotal = t.payload[1];
    },
    ready: function ready(e) {
      e.ready = !0;
    }
  }
});
var si = /*#__PURE__*/function () {
  function si() {
    _classCallCheck(this, si);
  }
  return _createClass(si, [{
    key: "close",
    value: function close() {}
  }, {
    key: "put",
    value: function put(e, t) {
      return Promise.resolve();
    }
  }, {
    key: "get",
    value: function get(e, t) {
      return void 0 !== t ? Promise.resolve(t) : Promise.reject(new Error("Cache is not supported on this host"));
    }
  }, {
    key: "del",
    value: function del(e) {
      return Promise.resolve();
    }
  }, {
    key: "keys",
    value: function keys() {
      return Promise.resolve([]);
    }
  }, {
    key: "forEach",
    value: function forEach(e) {
      return Promise.resolve();
    }
  }]);
}();
var ai = /*#__PURE__*/function () {
  function ai(e, n, o, r, i) {
    var _this2 = this;
    _classCallCheck(this, ai);
    if (t(this, "storeName", "files"), t(this, "indexedDB"), t(this, "db", null), this.storeName = n, this.indexedDB = "undefined" == typeof window ? void 0 : window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.indexedDB) try {
      var _t8 = this.indexedDB.open(e, 1);
      _t8.onerror = function (e) {
        var n;
        i("Can't open cache database: " + (null == (n = _t8.error) ? void 0 : n.message));
      }, _t8.onsuccess = function (e) {
        _this2.db = _t8.result, r(_this2);
      }, _t8.onupgradeneeded = function (e) {
        try {
          _this2.db = _t8.result, _this2.db.onerror = function (e) {
            i("Can't upgrade cache database");
          };
          var _iterator4 = _createForOfIteratorHelper(o),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 3),
                _e6 = _step4$value[0],
                _t9 = _step4$value[1],
                _n5 = _step4$value[2];
              _this2.db.createObjectStore(_e6).createIndex(_t9, "", {
                unique: _n5,
                multiEntry: !1
              });
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } catch (n) {
          i("Can't upgrade cache database");
        }
      };
    } catch (s) {
      i("Can't open cache database: " + s.message);
    } else i("Indexed db is not supported on this host");
  }
  return _createClass(ai, [{
    key: "resultToUint8Array",
    value: function () {
      var _resultToUint8Array = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var _t0, _t1, _t10;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(e instanceof Blob)) {
                _context.n = 2;
                break;
              }
              _t1 = Uint8Array;
              _context.n = 1;
              return e.arrayBuffer();
            case 1:
              _t10 = _context.v;
              _t0 = new _t1(_t10);
              _context.n = 3;
              break;
            case 2:
              _t0 = new Uint8Array(e);
            case 3:
              return _context.a(2, _t0);
          }
        }, _callee);
      }));
      function resultToUint8Array(_x2) {
        return _resultToUint8Array.apply(this, arguments);
      }
      return resultToUint8Array;
    }()
  }, {
    key: "close",
    value: function close() {
      null !== this.db && (this.db.close(), this.db = null);
    }
  }, {
    key: "put",
    value: function put(e, t) {
      var _this3 = this;
      return new Promise(function (n, o) {
        if (null === _this3.db) return void n();
        var r = _this3.db.transaction(_this3.storeName, "readwrite").objectStore(_this3.storeName).put(new Blob([t.buffer]), e);
        r.onerror = function (t) {
          o(new Error("Can't put key '" + e + "'")), console.error(t);
        }, r.onsuccess = function () {
          return n();
        };
      });
    }
  }, {
    key: "del",
    value: function del(e) {
      var _this4 = this;
      return new Promise(function (t, n) {
        if (null === _this4.db) return void t();
        var o = _this4.db.transaction(_this4.storeName, "readwrite").objectStore(_this4.storeName)["delete"](e);
        o.onerror = function () {
          return n;
        }, o.onsuccess = function () {
          return t();
        };
      });
    }
  }, {
    key: "get",
    value: function get(e, t) {
      var _this5 = this;
      return new Promise(function (n, o) {
        function r(e) {
          void 0 === t ? o(new Error(e)) : n(t);
        }
        if (null === _this5.db) return void r("db is not initalized");
        var i = _this5.db.transaction(_this5.storeName, "readonly").objectStore(_this5.storeName).get(e);
        i.onerror = function () {
          return o(new Error("Can't read value for key '" + e + "'"));
        }, i.onsuccess = function () {
          i.result ? n(_this5.resultToUint8Array(i.result)) : r("Result is empty for key '" + e + "', result: " + i.result);
        };
      });
    }
  }, {
    key: "keys",
    value: function keys() {
      var _this6 = this;
      return new Promise(function (e, t) {
        if (null === _this6.db) return void e([]);
        var n = _this6.db.transaction(_this6.storeName, "readonly").objectStore(_this6.storeName).getAllKeys();
        n.onerror = t, n.onsuccess = function (t) {
          n.result ? e(n.result) : e([]);
        };
      });
    }
  }, {
    key: "forEach",
    value: function () {
      var _forEach = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
        var t, _iterator5, _step5, _n6, _t11, _t12;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.n = 1;
              return this.keys();
            case 1:
              t = _context2.v;
              _iterator5 = _createForOfIteratorHelper(t);
              _context2.p = 2;
              _iterator5.s();
            case 3:
              if ((_step5 = _iterator5.n()).done) {
                _context2.n = 6;
                break;
              }
              _n6 = _step5.value;
              _context2.n = 4;
              return this.get(_n6);
            case 4:
              _t11 = _context2.v;
              _t11 && e(_n6, _t11);
            case 5:
              _context2.n = 3;
              break;
            case 6:
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t12 = _context2.v;
              _iterator5.e(_t12);
            case 8:
              _context2.p = 8;
              _iterator5.f();
              return _context2.f(8);
            case 9:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 7, 8, 9]]);
      }));
      function forEach(_x3) {
        return _forEach.apply(this, arguments);
      }
      return forEach;
    }()
  }]);
}();
function ci() {
  return new Promise(function (e) {
    new ai("js-dos-cache (guest)", "files", [["files", "key", !0]], e, function (t) {
      console.error("Can't open IndexedDB cache", t), e(new si());
    });
  });
}
function li(e) {
  return new Promise(function (t) {
    new ai("sockdrive (" + e + ")", "write", [["raw", "range", !1], ["write", "sector", !1]], t, function (e) {
      console.error("Can't open IndexedDB cache", e), t(new si());
    });
  });
}
var ui = -1;
function di() {
  return ui += 1, {
    storeUid: ui,
    slice: zr({
      name: "init",
      initialState: {
        uid: ui
      },
      reducers: {}
    })
  };
}
di().slice;
var pi = function pi(e) {
    return function (t) {
      return function (n) {
        var o = Object.assign({}, n, {
          asyncStore: function asyncStore(t) {
            setTimeout(function () {
              return t(e);
            }, 4);
          }
        });
        t(o);
      };
    };
  },
  fi = {};
function hi(e) {
  return "function" == typeof e.getState ? fi[e.getState().init.uid] : fi[e.init.uid];
}
function mi() {
  return hi(Qn());
}
function vi(e, t, n) {
  e.options.onEvent && setTimeout(function () {
    var o, r;
    null == (r = (o = e.options).onEvent) || r.call(o, t, n);
  }, 4);
}
function yi(e) {
  return e.getState();
}
var _i = "qwertyuiopasdfghjklzxcvbnm1234567890",
  gi = ["dosbox", "dosboxX"],
  bi = ["webgl", "canvas"],
  wi = ["AsIs", "1/1", "5/4", "4/3", "16/10", "16/9", "Fit"],
  ki = 65535,
  xi = ["pixelated", "smooth"],
  Ci = zr({
    name: "dos",
    initialState: {
      step: "emu-init",
      emuVersion: "-",
      error: null,
      bundle: null,
      config: {},
      worker: "false" !== $r.getItem("worker"),
      backend: (_$r$getItem2 = $r.getItem("backend")) !== null && _$r$getItem2 !== void 0 ? _$r$getItem2 : "dosbox",
      backendLocked: !1,
      backendHardware: "false" !== $r.getItem("backendHardware"),
      renderBackend: (_$r$getItem3 = $r.getItem("renderBackend")) !== null && _$r$getItem3 !== void 0 ? _$r$getItem3 : "webgl",
      renderAspect: (_$r$getItem4 = $r.getItem("renderAspect")) !== null && _$r$getItem4 !== void 0 ? _$r$getItem4 : "AsIs",
      volume: Number.parseFloat((_$r$getItem5 = $r.getItem("volume")) !== null && _$r$getItem5 !== void 0 ? _$r$getItem5 : "1.0"),
      mobileControls: !1,
      mirroredControls: "true" === $r.getItem("mirroredControls"),
      scaleControls: Number.parseFloat((_$r$getItem6 = $r.getItem("scaleControls")) !== null && _$r$getItem6 !== void 0 ? _$r$getItem6 : "0.2"),
      mouseSensitivity: Number.parseFloat((_$r$getItem7 = $r.getItem("mouse_sensitivity")) !== null && _$r$getItem7 !== void 0 ? _$r$getItem7 : "0.5"),
      mouseCapture: !1,
      paused: !1,
      stats: {
        cyclesPerMs: 0,
        nonSkippableSleepPreSec: 0,
        sleepPerSec: 0,
        sleepTimePerSec: 0,
        framePerSec: 0,
        soundPerSec: 0,
        msgSentPerSec: 0,
        msgRecvPerSec: 0,
        netRecv: 0,
        netSent: 0,
        driveIo: []
      },
      ipx: {
        backends: [{
          name: "dos.zone",
          host: "wss://netherlands.dos.zone"
        }],
        backend: (_$r$getItem8 = $r.getItem("net.ipx.server")) !== null && _$r$getItem8 !== void 0 ? _$r$getItem8 : "netherlands",
        room: Ei() + Ei() + Ei(),
        status: "disconnected"
      },
      ci: !1,
      ciStartedAt: 0,
      imageRendering: (_$r$getItem9 = $r.getItem("imageRendering")) !== null && _$r$getItem9 !== void 0 ? _$r$getItem9 : "pixelated",
      softKeyboard: !1,
      softKeyboardLayout: [[["{esc} {f1} {f2} {f3} {f4}", "0 1 2 3 4", "5 6 7 8 9", "{ } ( ) {shift}", "{layout} {ctrl} {alt} {space}"], ["{f5} {f6} {f7} {f8}", "{pgup} {pgdown} {bksp}", "", "{up}", "{left} {down} {right}"], ["{f9} {f10} {f11} {f12}", "{del} {kp7} {kp8} {kp9}", "{tab} {kp4} {kp5} {kp6}", "- {kp1} {kp2} {kp3}", "+ {kp0} . {enter}"]], [["{esc} ` 1 2 3 4 5 6 7 8 9 0 ( ) - = {bksp} {enter}", "{tab} q w e r t y u i o p { } \\ [ ] {up}", "{shift} {left} {right} a s d f g h j k l : ; ' [ {down}", "{layout} {symbols} {alt} {ctrl} z x c v b n m , . / ] {space}"]]],
      softKeyboardSymbols: [{
        "{esc}": "â›",
        "{bksp}": "âŒ«",
        "{enter}": "â†µ",
        "{up}": "â†‘",
        "{down}": "â†“",
        "{left}": "â†",
        "{right}": "â†’",
        "{shift}": "â‡‘",
        "{layout}": "âŽ˜",
        "{pgup}": "PgUp",
        "{pgdown}": "PgDown",
        "{kp7}": "â†–",
        "{kp8}": "â†‘",
        "{kp9}": "â†—",
        "{kp5}": "5",
        "{kp4}": "â†",
        "{kp6}": "â†’",
        "{kp1}": "â†™",
        "{kp2}": "â†“",
        "{kp3}": "â†˜",
        "{kp0}": "0",
        "{symbols}": "En/Ru"
      }, {
        q: "Ð¹",
        w: "Ñ†",
        e: "Ñƒ",
        r: "Ðº",
        t: "Ðµ",
        y: "Ð½",
        u: "Ð³",
        i: "Ñˆ",
        o: "Ñ‰",
        p: "Ð·",
        "{": "Ñ…",
        "}": "ÑŠ",
        a: "Ñ„",
        s: "Ñ‹",
        d: "Ð²",
        f: "Ð°",
        g: "Ð¿",
        h: "Ñ€",
        j: "Ð¾",
        k: "Ð»",
        l: "Ð´",
        ";": "Ð¶",
        "'": "Ñ",
        z: "Ñ",
        x: "Ñ‡",
        c: "Ñ",
        v: "Ð¼",
        b: "Ð¸",
        n: "Ñ‚",
        m: "ÑŒ",
        ",": "Ð±",
        ".": "ÑŽ"
      }],
      softKeyboardActiveSymbols: 0,
      softKeyboardActiveLayout: 0,
      noCursor: !1
    },
    reducers: {
      emuReady: function emuReady(e, t) {
        e.step = "emu-ready", e.emuVersion = t.payload;
      },
      emuError: function emuError(e, t) {
        var _t$payload;
        e.step = "emu-error", e.error = (_t$payload = t.payload) !== null && _t$payload !== void 0 ? _t$payload : "Unexpeceted error";
      },
      bndLoad: function bndLoad(e, t) {
        e.step = "bnd-load", e.bundle = t.payload;
      },
      bndError: function bndError(e, t) {
        var _t$payload2;
        e.step = "bnd-error", e.error = (_t$payload2 = t.payload) !== null && _t$payload2 !== void 0 ? _t$payload2 : "Unexpeceted error";
      },
      bndConfig: function bndConfig(e) {
        e.step = "bnd-config";
      },
      bndReady: function bndReady(e, t) {
        e.step = "bnd-ready", e.config = t.payload;
      },
      bndPlay: function bndPlay(e, t) {
        e.step = "bnd-play", t.asyncStore(function (e) {
          vi(hi(e), "bnd-play");
        });
      },
      dosWorker: function dosWorker(e, t) {
        e.worker = t.payload, $r.setItem("worker", e.worker ? "true" : "false");
      },
      dosBackend: function dosBackend(e, t) {
        e.backend = t.payload;
      },
      dosBackendLocked: function dosBackendLocked(e, t) {
        e.backendLocked = t.payload;
      },
      dosBackendHardware: function dosBackendHardware(e, t) {
        e.backendHardware = t.payload, $r.setItem("backendHardware", e.backendHardware ? "true" : "false");
      },
      renderBackend: function renderBackend(e, t) {
        e.renderBackend = t.payload, $r.setItem("renderBackend", e.renderBackend);
      },
      renderAspect: function renderAspect(e, t) {
        e.renderAspect = t.payload, $r.setItem("renderAspect", e.renderAspect);
      },
      imageRendering: function imageRendering(e, t) {
        e.imageRendering = t.payload, $r.setItem("imageRendering", e.imageRendering);
      },
      volume: function volume(e, t) {
        e.volume = t.payload, $r.setItem("volume", e.volume + "");
      },
      mouseSensitivity: function mouseSensitivity(e, t) {
        e.mouseSensitivity = t.payload, $r.setItem("mouse_sensitivity", e.mouseSensitivity + "");
      },
      mouseCapture: function mouseCapture(e, t) {
        e.mouseCapture = t.payload;
      },
      paused: function paused(e, t) {
        e.paused = t.payload;
      },
      stats: function stats(e, t) {
        e.stats = t.payload;
      },
      ci: function ci(e, t) {
        e.ci = t.payload, t.payload && (e.ciStartedAt = Date.now());
      },
      connectIpx: function connectIpx(e, t) {
        if ("connected" === e.ipx.status) throw new Error("Already connected");
        if (!e.ci) throw new Error("DOS is not started");
        var _t$payload3 = t.payload,
          n = _t$payload3.room,
          o = _t$payload3.address;
        e.ipx.status = "connecting", t.asyncStore(function (e) {
          var t = hi(e);
          if (!t.ci) throw new Error("DOS is not started");
          var r = o.endsWith("/") ? o.substring(0, o.length - 1) : o;
          t.ci.networkConnect(0, r + ":1900/ipx/" + n.replaceAll("@", "_")).then(function () {
            e.dispatch(Ci.actions.statusIpx("connected"));
          })["catch"](function (t) {
            e.dispatch(Ci.actions.statusIpx("error")), console.error(t);
          });
        });
      },
      statusIpx: function statusIpx(e, t) {
        e.ipx.status = t.payload;
      },
      disconnectIpx: function disconnectIpx(e, t) {
        e.ipx.status = "disconnected", t.asyncStore(function (e) {
          var t;
          null == (t = hi(e).ci) || t.networkDisconnect(0);
        });
      },
      setRoom: function setRoom(e, t) {
        e.ipx.room = t.payload;
      },
      setIpxBackends: function setIpxBackends(e, t) {
        e.ipx.backends = t.payload;
        var n = $r.getItem("net.ipx.server");
        null !== n && void 0 !== t.payload.find(function (e) {
          return e.name === n;
        }) ? e.ipx.backend = n : (e.ipx.backend = t.payload[0].name, $r.setItem("net.ipx.server", e.ipx.backend));
      },
      setIpxBackend: function setIpxBackend(e, t) {
        var n = e.ipx.backends.find(function (e) {
          return e.name === t.payload;
        });
        n && (e.ipx.backend = n.name, $r.setItem("net.ipx.server", t.payload));
      },
      mobileControls: function mobileControls(e, t) {
        e.mobileControls = t.payload;
      },
      mirroredControls: function mirroredControls(e, t) {
        e.mirroredControls = t.payload, $r.setItem("mirroredControls", t.payload ? "true" : "false");
      },
      scaleControls: function scaleControls(e, t) {
        e.scaleControls = t.payload, $r.setItem("scaleControls", e.scaleControls + "");
      },
      softKeyboard: function softKeyboard(e, t) {
        e.softKeyboard = t.payload;
      },
      softKeyboardLayout: function softKeyboardLayout(e, t) {
        t.payload.length > 0 && Array.isArray(t.payload[0]) ? e.softKeyboardLayout = t.payload : e.softKeyboardLayout = [[t.payload]];
      },
      softKeyboardSymbols: function softKeyboardSymbols(e, t) {
        e.softKeyboardSymbols = t.payload;
      },
      softKeyboardActiveSymbols: function softKeyboardActiveSymbols(e, t) {
        e.softKeyboardActiveSymbols = t.payload;
      },
      softKeyboardActiveLayout: function softKeyboardActiveLayout(e, t) {
        e.softKeyboardActiveLayout = t.payload;
      },
      noCursor: function noCursor(e, t) {
        e.noCursor = t.payload;
      }
    }
  });
var Si = !1;
function Pi(e, t, n) {
  e.dispatch(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var _t13, _t14;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _t13 = Si;
            if (_t13) {
              _context3.n = 2;
              break;
            }
            _context3.n = 1;
            return function (e, t) {
              if (null !== document.querySelector("#emulators-js")) return Promise.resolve();
              return new Promise(function (n, o) {
                var r = document.createElement("script");
                r.id = "emulators-js", r.async = !0, r.type = "text/javascript", r.src = e + "emulators.js" + t, r.onload = function () {
                  emulators.pathPrefix = e, emulators.pathSuffix = t, n();
                }, r.onerror = function (e) {
                  o(new Error("Unable to add emulators.js. Probably you should set the 'pathPrefix' option to point to the js-dos folder."));
                }, document.head.appendChild(r);
              });
            }(t, n);
          case 1:
            Si = !0;
          case 2:
            e(Ci.actions.emuReady(emulators.version));
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t14 = _context3.v;
            console.error("Unable to init emulators.js", _t14), e(Ci.actions.emuError(_t14.message));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
}
function Ei() {
  return _i[Math.round(35 * Math.random())];
}
function Oi(_x5, _x6, _x7) {
  return _Oi.apply(this, arguments);
}
function _Oi() {
  _Oi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(e, t, n) {
    var o,
      r,
      i,
      s,
      a,
      c,
      l,
      _e59,
      _i33,
      _u3,
      _e60,
      _args30 = arguments,
      _t93,
      _t94;
    return _regenerator().w(function (_context30) {
      while (1) switch (_context30.p = _context30.n) {
        case 0:
          o = _args30.length > 3 && _args30[3] !== undefined ? _args30[3] : !1;
          r = _args30.length > 4 && _args30[4] !== undefined ? _args30[4] : null;
          s = t.ci, a = null == (i = t.loadedBundle) ? void 0 : i.bundleChangesUrl;
          if (!(null === s && null === r || !a || !e.ui.canSave)) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2, !1);
        case 1:
          c = function (e) {
            return function (t) {
              var _e$i18n$keys$t;
              return (_e$i18n$keys$t = e.i18n.keys[t]) !== null && _e$i18n$keys$t !== void 0 ? _e$i18n$keys$t : t;
            };
          }(e), l = e.auth.account;
          _context30.p = 2;
          n(Zr.actions.showToast({
            message: c("saving_game"),
            intent: "none",
            "long": !0
          }));
          _e59 = !0;
          _i33 = null === l || null === l.email ? c("warn_save_no_account") : l.premium ? c("warn_save_big_file") : c("warn_save_no_premium");
          _u3 = !1;
          if (!(null === r)) {
            _context30.n = 4;
            break;
          }
          _context30.n = 3;
          return s.persist(!0);
        case 3:
          _e60 = _context30.v;
          r = function (e) {
            if (null === e || e instanceof Uint8Array) return e;
            var t = new TextEncoder(),
              n = [];
            var o = 0;
            var _iterator64 = _createForOfIteratorHelper(e.drives),
              _step64;
            try {
              for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                var _step64$value = _step64.value,
                  _s8 = _step64$value.url,
                  _a4 = _step64$value.persist;
                n.push(t.encode(_s8)), o += _a4.length + n[n.length - 1].length + 8;
              }
            } catch (err) {
              _iterator64.e(err);
            } finally {
              _iterator64.f();
            }
            var r = new Uint8Array(o);
            var i = 0;
            for (var _s7 = 0; _s7 < e.drives.length; _s7++) {
              var _t92 = n[_s7],
                _o33 = e.drives[_s7].persist;
              i = Di(r, _t92.length, i), r.set(_t92, i), i += _t92.length, i = Di(r, _o33.length, i), r.set(_o33, i), i += _o33.length;
            }
            return r;
          }(_e60), _u3 = r !== _e60 && !o;
        case 4:
          _t93 = null !== r;
          if (!_t93) {
            _context30.n = 7;
            break;
          }
          _u3 && n(Zr.actions.showToast({
            message: c("sockdrive_save_in_the_middle"),
            intent: "warning",
            "long": !0
          }));
          if (!Mi(l, r)) {
            _context30.n = 6;
            break;
          }
          _context30.n = 5;
          return function () {
            var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(e, t) {
              var n, o, r, i;
              return _regenerator().w(function (_context29) {
                while (1) switch (_context29.n) {
                  case 0:
                    _context29.n = 1;
                    return fetch(Jr + "?bundleUrl=" + encodeURIComponent(e));
                  case 1:
                    n = _context29.v;
                    _context29.n = 2;
                    return n.json();
                  case 2:
                    o = _context29.v;
                    if (o.success) {
                      _context29.n = 3;
                      break;
                    }
                    throw new Error("Unable to put personal bundle");
                  case 3:
                    r = o.post, i = new FormData();
                    Object.entries(r.fields).forEach(function (_ref34) {
                      var _ref35 = _slicedToArray(_ref34, 2),
                        e = _ref35[0],
                        t = _ref35[1];
                      i.append(e, t);
                    });
                    i.append("acl", "public-read");
                    i.append("file", new Blob([t]));
                    _context29.n = 4;
                    return fetch(r.url, {
                      method: "post",
                      body: i
                    });
                  case 4:
                    n = _context29.v;
                    if (!(200 !== n.status && 204 !== n.status)) {
                      _context29.n = 5;
                      break;
                    }
                    throw new Error("Unable to put changes: " + n.statusText);
                  case 5:
                    return _context29.a(2);
                }
              }, _callee29);
            }));
            return function (_x38, _x39) {
              return _ref33.apply(this, arguments);
            };
          }()(a, r);
        case 5:
          _e59 = !1;
          _context30.n = 7;
          break;
        case 6:
          _context30.n = 7;
          return t.cache.put(a, r);
        case 7:
          null === r ? n(Zr.actions.showToast({
            message: c("no_changes_to_save"),
            intent: "warning",
            "long": !0
          })) : _e59 ? setTimeout(function () {
            n(Zr.actions.showToast({
              message: _i33,
              intent: "success",
              "long": !0
            }));
          }, _u3 ? 3e3 : 4) : n(Zr.actions.showToast({
            message: c("success_save"),
            intent: "success",
            "long": !0
          }));
          return _context30.a(2, !0);
        case 8:
          _context30.p = 8;
          _t94 = _context30.v;
          return _context30.a(2, (n(Zr.actions.showToast({
            message: c("unable_to_save"),
            intent: "error",
            "long": !0
          })), console.error(_t94), !1));
      }
    }, _callee30, null, [[2, 8]]);
  }));
  return _Oi.apply(this, arguments);
}
function Mi(e, t) {
  return !!e && void 0 !== e.email && ("dz.caiiiycuk@gmail.com" === e.email || !0 === e.premium) && (null === t || t.length <= 26214400);
}
function ji(_x8, _x9) {
  return _ji.apply(this, arguments);
}
function _ji() {
  _ji = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(e, t) {
    var n, o, r, i, s, a;
    return _regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          n = new TextDecoder();
          o = 0;
        case 1:
          if (!(o < e.length)) {
            _context31.n = 5;
            break;
          }
          r = Ai(e, o);
          if (!(o += 4, r > 4096)) {
            _context31.n = 2;
            break;
          }
          return _context31.a(2, !1);
        case 2:
          i = n.decode(e.slice(o, o + r));
          if (!(!i.startsWith("http://") && !i.startsWith("https://"))) {
            _context31.n = 3;
            break;
          }
          return _context31.a(2, !1);
        case 3:
          o += r;
          s = Ai(e, o);
          o += 4;
          a = e.slice(o, o + s);
          o += s;
          _context31.n = 4;
          return t(i, a);
        case 4:
          _context31.n = 1;
          break;
        case 5:
          return _context31.a(2, !0);
      }
    }, _callee31);
  }));
  return _ji.apply(this, arguments);
}
function Di(e, t, n) {
  return e[n] = 255 & t, e[n + 1] = (65280 & t) >> 8, e[n + 2] = (16711680 & t) >> 16, e[n + 3] = (4278190080 & t) >> 24, n + 4;
}
function Ai(e, t) {
  return 255 & e[t] | e[t + 1] << 8 & 65280 | e[t + 2] << 16 & 16711680 | e[t + 3] << 24 & 4278190080;
}
function Ti(e) {
  e.sendBackendEvent({
    type: "wc-trigger-event",
    event: "hand_savestate"
  });
}
function Li(e) {
  e.sendBackendEvent({
    type: "wc-trigger-event",
    event: "hand_loadstate"
  });
}
function zi(_x0, _x1, _x10) {
  return _zi.apply(this, arguments);
}
function _zi() {
  _zi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(e, t, n) {
    var o, r, i, s, a, _yield$i$read, _e61, _o34, c, l, _i34, _a5, _u4;
    return _regenerator().w(function (_context32) {
      while (1) switch (_context32.n) {
        case 0:
          o = e.headers.get("Content-Length"), r = null === o ? 0 : Number.parseInt(o), i = e.body.getReader();
          s = 0;
          a = [];
        case 1:
          _context32.n = 2;
          return i.read();
        case 2:
          _yield$i$read = _context32.v;
          _e61 = _yield$i$read.done;
          _o34 = _yield$i$read.value;
          if (!_e61) {
            _context32.n = 3;
            break;
          }
          return _context32.a(3, 5);
        case 3:
          a.push(_o34), s += _o34.length;
          n(Math.min(t.startsWith("https://br.cdn.dos.zone") ? s / 2 : s, r), r);
        case 4:
          _context32.n = 1;
          break;
        case 5:
          c = 0;
          l = new Uint8Array(s);
          for (_i34 = 0, _a5 = a; _i34 < _a5.length; _i34++) {
            _u4 = _a5[_i34];
            l.set(_u4, c), c += _u4.length;
          }
          return _context32.a(2, l);
      }
    }, _callee32);
  }));
  return _zi.apply(this, arguments);
}
function Bi(e, t) {
  return Ni(e.name, function (e, t) {
    return new Promise(function (n) {
      t.dispatch(ii.actions.reset());
      var o = new FileReader();
      o.addEventListener("load", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                n(new Uint8Array(o.result));
              case 1:
                return _context4.a(2);
            }
          }, _callee4);
        }));
        return function (_x11) {
          return _ref4.apply(this, arguments);
        };
      }()), o.addEventListener("progress", function (e) {
        t.dispatch(ii.actions.progress([e.loaded, e.total]));
      }), o.readAsArrayBuffer(e);
    });
  }(e, t), null, null, t);
}
function Ii(_x12, _x13) {
  return _Ii.apply(this, arguments);
}
function _Ii() {
  _Ii = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38(e, t) {
    return _regenerator().w(function (_context38) {
      while (1) switch (_context38.n) {
        case 0:
          return _context38.a(2, Ni(e, function () {
            var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(e, t) {
              var n, o, _t95;
              return _regenerator().w(function (_context33) {
                while (1) switch (_context33.p = _context33.n) {
                  case 0:
                    _context33.p = 0;
                    if (e.endsWith(ti)) {
                      _context33.n = 2;
                      break;
                    }
                    _context33.n = 1;
                    return hi(t).cache.get(e);
                  case 1:
                    return _context33.a(2, _context33.v);
                  case 2:
                    _context33.n = 4;
                    break;
                  case 3:
                    _context33.p = 3;
                    _t95 = _context33.v;
                  case 4:
                    t.dispatch(ii.actions.reset());
                    _context33.n = 5;
                    return fetch(e, {
                      cache: "no-store"
                    });
                  case 5:
                    n = _context33.v;
                    if (!(200 !== n.status)) {
                      _context33.n = 6;
                      break;
                    }
                    throw new Error("Resource not avalible (" + n.status + "): " + n.statusText);
                  case 6:
                    _context33.n = 7;
                    return zi(n, e, function (e, n) {
                      t.dispatch(ii.actions.progress([e, n]));
                    });
                  case 7:
                    o = _context33.v;
                    return _context33.a(2, (hi(t).cache.put(e, o)["catch"](console.error), o));
                }
              }, _callee33, null, [[0, 3]]);
            }));
            return function (_x40, _x41) {
              return _ref36.apply(this, arguments);
            };
          }()(e, t), function () {
            var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37(e, t) {
              var _ref38;
              var n, o, r, _t98;
              return _regenerator().w(function (_context37) {
                while (1) switch (_context37.n) {
                  case 0:
                    n = yi(t).auth.account;
                    o = function (e, t) {
                      var n = function (e, t) {
                        var n = t.lastIndexOf("/");
                        return "personal-v2/dzapi/" + e + "/" + t.substring(n + 1);
                      }(e, t);
                      return "https://storage.yandexcloud.net/doszone-uploads/" + n;
                    }((_ref38 = null == n ? void 0 : n.email) !== null && _ref38 !== void 0 ? _ref38 : "guest", e);
                    _context37.n = 1;
                    return function () {
                      var _ref39 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(e, t, n) {
                        var _t96, _t97;
                        return _regenerator().w(function (_context34) {
                          while (1) switch (_context34.p = _context34.n) {
                            case 0:
                              if (Mi(t, null)) {
                                _context34.n = 2;
                                break;
                              }
                              _context34.n = 1;
                              return hi(n).cache.get(e)["catch"](function () {
                                return null;
                              });
                            case 1:
                              return _context34.a(2, _context34.v);
                            case 2:
                              _context34.p = 2;
                              _context34.n = 3;
                              return fetch(e, {
                                cache: "no-cache"
                              });
                            case 3:
                              _t96 = _context34.v;
                              if (!(200 !== _t96.status)) {
                                _context34.n = 4;
                                break;
                              }
                              throw new Error("Resource not avalible (" + _t96.status + "): " + _t96.statusText);
                            case 4:
                              _context34.n = 5;
                              return zi(_t96, e, function (e, t) {
                                n.dispatch(ii.actions.changedProgress([e, t]));
                              });
                            case 5:
                              return _context34.a(2, _context34.v);
                            case 6:
                              _context34.p = 6;
                              _t97 = _context34.v;
                              _context34.n = 7;
                              return hi(n).cache.get(e)["catch"](function () {
                                return null;
                              });
                            case 7:
                              return _context34.a(2, _context34.v);
                          }
                        }, _callee34, null, [[2, 6]]);
                      }));
                      return function (_x44, _x45, _x46) {
                        return _ref39.apply(this, arguments);
                      };
                    }()(o, n, t);
                  case 1:
                    r = _context37.v;
                    if (!(null !== r && r.length > 1 && (80 !== r[0] || 75 !== r[1]))) {
                      _context37.n = 4;
                      break;
                    }
                    _context37.n = 2;
                    return function () {
                      var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36(e) {
                        return _regenerator().w(function (_context36) {
                          while (1) switch (_context36.n) {
                            case 0:
                              return _context36.a(2, ji(e, /*#__PURE__*/function () {
                                var _ref41 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(e, t) {
                                  var n;
                                  return _regenerator().w(function (_context35) {
                                    while (1) switch (_context35.n) {
                                      case 0:
                                        _context35.n = 1;
                                        return li(e);
                                      case 1:
                                        n = _context35.v;
                                        _context35.n = 2;
                                        return n.put(0, t);
                                      case 2:
                                        n.close();
                                      case 3:
                                        return _context35.a(2);
                                    }
                                  }, _callee35);
                                }));
                                return function (_x48, _x49) {
                                  return _ref41.apply(this, arguments);
                                };
                              }()));
                          }
                        }, _callee36);
                      }));
                      return function (_x47) {
                        return _ref40.apply(this, arguments);
                      };
                    }()(r);
                  case 2:
                    _t98 = _context37.v;
                    if (_t98) {
                      _context37.n = 3;
                      break;
                    }
                    t.dispatch(Zr.actions.showToast({
                      message: "Changes is not a zip file",
                      intent: "error"
                    }));
                  case 3:
                    return _context37.a(2, {
                      url: o,
                      bundle: null,
                      appliedBundleChanges: r
                    });
                  case 4:
                    return _context37.a(2, {
                      url: o,
                      bundle: r,
                      appliedBundleChanges: null
                    });
                }
              }, _callee37);
            }));
            return function (_x42, _x43) {
              return _ref37.apply(this, arguments);
            };
          }()(e, t), e, t));
      }
    }, _callee38);
  }));
  return _Ii.apply(this, arguments);
}
function Ni(_x14, _x15, _x16, _x17, _x18) {
  return _Ni.apply(this, arguments);
}
function _Ni() {
  _Ni = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39(e, t, n, o, r) {
    var _ref42, _ref43, _ref44;
    var i, s, a, c, l;
    return _regenerator().w(function (_context39) {
      while (1) switch (_context39.n) {
        case 0:
          i = hi(r), s = r.dispatch;
          i.loadedBundle = null, s(Ci.actions.bndLoad(e));
          _context39.n = 1;
          return t;
        case 1:
          a = _context39.v;
          s(ii.actions.ready());
          _context39.n = 2;
          return n;
        case 2:
          c = _context39.v;
          s(Ci.actions.bndConfig());
          _context39.n = 3;
          return emulators.bundleConfig(a);
        case 3:
          l = _context39.v;
          s(Xr.actions.init(l)), null === l ? s(Zr.actions.frameConf()) : Ri(l, s), i.loadedBundle = {
            bundleUrl: o,
            bundleChangesUrl: (_ref42 = null == c ? void 0 : c.url) !== null && _ref42 !== void 0 ? _ref42 : null,
            bundle: a,
            bundleChanges: (_ref43 = null == c ? void 0 : c.bundle) !== null && _ref43 !== void 0 ? _ref43 : null,
            appliedBundleChanges: (_ref44 = null == c ? void 0 : c.appliedBundleChanges) !== null && _ref44 !== void 0 ? _ref44 : null,
            initFs: null
          }, s(Ci.actions.bndReady({}));
        case 4:
          return _context39.a(2);
      }
    }, _callee39);
  }));
  return _Ni.apply(this, arguments);
}
function Ri(e, t) {
  Ki(e.dosboxConf, t), t(Ci.actions.mouseCapture(e.dosboxConf.indexOf("autolock=true") >= 0));
}
function Ki(e, t) {
  (e.indexOf("sockdrive") >= 0 || e.indexOf(".qcow2") >= 0) && (t(Ci.actions.dosBackendLocked(!0)), t(Ci.actions.dosBackend("dosboxX")), t(Ci.actions.noCursor(!0)), t(Zr.actions.canSave(-1 === e.indexOf(".qcow2"))));
}
var Fi = 0;
function Ui(e, t, n, r, i, s) {
  var a,
    c,
    l = {};
  for (c in t) "ref" == c ? a = t[c] : l[c] = t[c];
  var u = {
    type: e,
    props: l,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --Fi,
    __i: -1,
    __u: 0,
    __source: i,
    __self: s
  };
  if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === l[c] && (l[c] = a[c]);
  return o.vnode && o.vnode(u), u;
}
function Hi() {
  var e = Wr(),
    t = on(function (e) {
      return e.editor.bundleConfig;
    }),
    n = eo();
  function o(e) {
    var t;
    Ki(t = e, n), n(Ci.actions.mouseCapture(t.indexOf("autolock=true") > 0)), n(Xr.actions.dosboxConf(t));
  }
  return null === t ? null : Ui("div", {
    "class": "editor-conf-frame flex flex-col flex-grow w-full gap-2",
    children: [Ui("div", {
      "class": "",
      children: e("dosboxconf_template")
    }), Ui("div", {
      "class": "flex flex-row flex-wrap items-center gap-2",
      children: qr.map(function (_ref5) {
        var e = _ref5.name,
          t = _ref5.backend,
          o = _ref5.contents;
        return Ui("button", {
          "class": "btn btn-sm",
          onClick: function onClick() {
            n(Ci.actions.dosBackend("dosboxX" === t ? "dosboxX" : "dosbox"));
          },
          children: e
        });
      })
    }), Ui("textarea", {
      "class": "flex-grow",
      value: t.dosboxConf,
      onChange: function onChange(e) {
        var _ref6;
        var t;
        return o((_ref6 = null == (t = e.currentTarget) ? void 0 : t.value) !== null && _ref6 !== void 0 ? _ref6 : "");
      }
    })]
  });
}
var Vi = {
  exports: {}
};
/*! react-checkbox-tree - v1.8.0 | 2022 */
self;
var Wi = U(Vi.exports = function (e) {
  return function () {
    var t = {
        4184: function _(e, t) {
          var n;
          !function () {
            var o = {}.hasOwnProperty;
            function r() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                  var i = _typeof(n);
                  if ("string" === i || "number" === i) e.push(n);else if (Array.isArray(n)) {
                    if (n.length) {
                      var s = r.apply(null, n);
                      s && e.push(s);
                    }
                  } else if ("object" === i) if (n.toString === Object.prototype.toString) for (var a in n) o.call(n, a) && n[a] && e.push(a);else e.push(n.toString());
                }
              }
              return e.join(" ");
            }
            e.exports ? (r["default"] = r, e.exports = r) : void 0 === (n = function () {
              return r;
            }.apply(t, [])) || (e.exports = n);
          }();
        },
        8552: function _(e, t, n) {
          var o = n(852)(n(5639), "DataView");
          e.exports = o;
        },
        1989: function _(e, t, n) {
          var o = n(1789),
            r = n(401),
            i = n(7667),
            s = n(1327),
            a = n(1866);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          c.prototype.clear = o, c.prototype["delete"] = r, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c;
        },
        8407: function _(e, t, n) {
          var o = n(7040),
            r = n(4125),
            i = n(2117),
            s = n(7518),
            a = n(4705);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          c.prototype.clear = o, c.prototype["delete"] = r, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c;
        },
        7071: function _(e, t, n) {
          var o = n(852)(n(5639), "Map");
          e.exports = o;
        },
        3369: function _(e, t, n) {
          var o = n(4785),
            r = n(1285),
            i = n(6e3),
            s = n(9916),
            a = n(5265);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          c.prototype.clear = o, c.prototype["delete"] = r, c.prototype.get = i, c.prototype.has = s, c.prototype.set = a, e.exports = c;
        },
        3818: function _(e, t, n) {
          var o = n(852)(n(5639), "Promise");
          e.exports = o;
        },
        8525: function _(e, t, n) {
          var o = n(852)(n(5639), "Set");
          e.exports = o;
        },
        8668: function _(e, t, n) {
          var o = n(3369),
            r = n(619),
            i = n(2385);
          function s(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new o(); ++t < n;) this.add(e[t]);
          }
          s.prototype.add = s.prototype.push = r, s.prototype.has = i, e.exports = s;
        },
        6384: function _(e, t, n) {
          var o = n(8407),
            r = n(7465),
            i = n(3779),
            s = n(7599),
            a = n(4758),
            c = n(4309);
          function l(e) {
            var t = this.__data__ = new o(e);
            this.size = t.size;
          }
          l.prototype.clear = r, l.prototype["delete"] = i, l.prototype.get = s, l.prototype.has = a, l.prototype.set = c, e.exports = l;
        },
        2705: function _(e, t, n) {
          var o = n(5639).Symbol;
          e.exports = o;
        },
        1149: function _(e, t, n) {
          var o = n(5639).Uint8Array;
          e.exports = o;
        },
        577: function _(e, t, n) {
          var o = n(852)(n(5639), "WeakMap");
          e.exports = o;
        },
        4963: function _(e) {
          e.exports = function (e, t) {
            for (var n = -1, o = null == e ? 0 : e.length, r = 0, i = []; ++n < o;) {
              var s = e[n];
              t(s, n, e) && (i[r++] = s);
            }
            return i;
          };
        },
        4636: function _(e, t, n) {
          var o = n(2545),
            r = n(5694),
            i = n(1469),
            s = n(4144),
            a = n(5776),
            c = n(6719),
            l = Object.prototype.hasOwnProperty;
          e.exports = function (e, t) {
            var n = i(e),
              u = !n && r(e),
              d = !n && !u && s(e),
              p = !n && !u && !d && c(e),
              f = n || u || d || p,
              h = f ? o(e.length, String) : [],
              m = h.length;
            for (var v in e) !t && !l.call(e, v) || f && ("length" == v || d && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, m)) || h.push(v);
            return h;
          };
        },
        2488: function _(e) {
          e.exports = function (e, t) {
            for (var n = -1, o = t.length, r = e.length; ++n < o;) e[r + n] = t[n];
            return e;
          };
        },
        2908: function _(e) {
          e.exports = function (e, t) {
            for (var n = -1, o = null == e ? 0 : e.length; ++n < o;) if (t(e[n], n, e)) return !0;
            return !1;
          };
        },
        8470: function _(e, t, n) {
          var o = n(7813);
          e.exports = function (e, t) {
            for (var n = e.length; n--;) if (o(e[n][0], t)) return n;
            return -1;
          };
        },
        8866: function _(e, t, n) {
          var o = n(2488),
            r = n(1469);
          e.exports = function (e, t, n) {
            var i = t(e);
            return r(e) ? i : o(i, n(e));
          };
        },
        4239: function _(e, t, n) {
          var o = n(2705),
            r = n(9607),
            i = n(2333),
            s = o ? o.toStringTag : void 0;
          e.exports = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? r(e) : i(e);
          };
        },
        9454: function _(e, t, n) {
          var o = n(4239),
            r = n(7005);
          e.exports = function (e) {
            return r(e) && "[object Arguments]" == o(e);
          };
        },
        939: function _(e, t, n) {
          var o = n(2492),
            r = n(7005);
          e.exports = function e(t, n, i, s, a) {
            return t === n || (null == t || null == n || !r(t) && !r(n) ? t != t && n != n : o(t, n, i, s, e, a));
          };
        },
        2492: function _(e, t, n) {
          var o = n(6384),
            r = n(7114),
            i = n(8351),
            s = n(6096),
            a = n(4160),
            c = n(1469),
            l = n(4144),
            u = n(6719),
            d = "[object Arguments]",
            p = "[object Array]",
            f = "[object Object]",
            h = Object.prototype.hasOwnProperty;
          e.exports = function (e, t, n, m, v, y) {
            var _ = c(e),
              g = c(t),
              b = _ ? p : a(e),
              w = g ? p : a(t),
              k = (b = b == d ? f : b) == f,
              x = (w = w == d ? f : w) == f,
              C = b == w;
            if (C && l(e)) {
              if (!l(t)) return !1;
              _ = !0, k = !1;
            }
            if (C && !k) return y || (y = new o()), _ || u(e) ? r(e, t, n, m, v, y) : i(e, t, b, n, m, v, y);
            if (!(1 & n)) {
              var S = k && h.call(e, "__wrapped__"),
                P = x && h.call(t, "__wrapped__");
              if (S || P) {
                var E = S ? e.value() : e,
                  O = P ? t.value() : t;
                return y || (y = new o()), v(E, O, n, m, y);
              }
            }
            return !!C && (y || (y = new o()), s(e, t, n, m, v, y));
          };
        },
        8458: function _(e, t, n) {
          var o = n(3560),
            r = n(5346),
            i = n(3218),
            s = n(346),
            a = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            l = Object.prototype,
            u = c.toString,
            d = l.hasOwnProperty,
            p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          e.exports = function (e) {
            return !(!i(e) || r(e)) && (o(e) ? p : a).test(s(e));
          };
        },
        8749: function _(e, t, n) {
          var o = n(4239),
            r = n(1780),
            i = n(7005),
            s = {};
          s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = function (e) {
            return i(e) && r(e.length) && !!s[o(e)];
          };
        },
        280: function _(e, t, n) {
          var o = n(5726),
            r = n(6916),
            i = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            if (!o(e)) return r(e);
            var t = [];
            for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
            return t;
          };
        },
        2545: function _(e) {
          e.exports = function (e, t) {
            for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
            return o;
          };
        },
        1717: function _(e) {
          e.exports = function (e) {
            return function (t) {
              return e(t);
            };
          };
        },
        4757: function _(e) {
          e.exports = function (e, t) {
            return e.has(t);
          };
        },
        4429: function _(e, t, n) {
          var o = n(5639)["__core-js_shared__"];
          e.exports = o;
        },
        7114: function _(e, t, n) {
          var o = n(8668),
            r = n(2908),
            i = n(4757);
          e.exports = function (e, t, n, s, a, c) {
            var l = 1 & n,
              u = e.length,
              d = t.length;
            if (u != d && !(l && d > u)) return !1;
            var p = c.get(e),
              f = c.get(t);
            if (p && f) return p == t && f == e;
            var h = -1,
              m = !0,
              v = 2 & n ? new o() : void 0;
            for (c.set(e, t), c.set(t, e); ++h < u;) {
              var y = e[h],
                _ = t[h];
              if (s) var g = l ? s(_, y, h, t, e, c) : s(y, _, h, e, t, c);
              if (void 0 !== g) {
                if (g) continue;
                m = !1;
                break;
              }
              if (v) {
                if (!r(t, function (e, t) {
                  if (!i(v, t) && (y === e || a(y, e, n, s, c))) return v.push(t);
                })) {
                  m = !1;
                  break;
                }
              } else if (y !== _ && !a(y, _, n, s, c)) {
                m = !1;
                break;
              }
            }
            return c["delete"](e), c["delete"](t), m;
          };
        },
        8351: function _(e, t, n) {
          var o = n(2705),
            r = n(1149),
            i = n(7813),
            s = n(7114),
            a = n(8776),
            c = n(1814),
            l = o ? o.prototype : void 0,
            u = l ? l.valueOf : void 0;
          e.exports = function (e, t, n, o, l, d, p) {
            switch (n) {
              case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
              case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !d(new r(e), new r(t)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return i(+e, +t);
              case "[object Error]":
                return e.name == t.name && e.message == t.message;
              case "[object RegExp]":
              case "[object String]":
                return e == t + "";
              case "[object Map]":
                var f = a;
              case "[object Set]":
                var h = 1 & o;
                if (f || (f = c), e.size != t.size && !h) return !1;
                var m = p.get(e);
                if (m) return m == t;
                o |= 2, p.set(e, t);
                var v = s(f(e), f(t), o, l, d, p);
                return p["delete"](e), v;
              case "[object Symbol]":
                if (u) return u.call(e) == u.call(t);
            }
            return !1;
          };
        },
        6096: function _(e, t, n) {
          var o = n(8234),
            r = Object.prototype.hasOwnProperty;
          e.exports = function (e, t, n, i, s, a) {
            var c = 1 & n,
              l = o(e),
              u = l.length;
            if (u != o(t).length && !c) return !1;
            for (var d = u; d--;) {
              var p = l[d];
              if (!(c ? p in t : r.call(t, p))) return !1;
            }
            var f = a.get(e),
              h = a.get(t);
            if (f && h) return f == t && h == e;
            var m = !0;
            a.set(e, t), a.set(t, e);
            for (var v = c; ++d < u;) {
              var y = e[p = l[d]],
                _ = t[p];
              if (i) var g = c ? i(_, y, p, t, e, a) : i(y, _, p, e, t, a);
              if (!(void 0 === g ? y === _ || s(y, _, n, i, a) : g)) {
                m = !1;
                break;
              }
              v || (v = "constructor" == p);
            }
            if (m && !v) {
              var b = e.constructor,
                w = t.constructor;
              b == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w || (m = !1);
            }
            return a["delete"](e), a["delete"](t), m;
          };
        },
        1957: function _(e, t, n) {
          var o = "object" == _typeof(n.g) && n.g && n.g.Object === Object && n.g;
          e.exports = o;
        },
        8234: function _(e, t, n) {
          var o = n(8866),
            r = n(9551),
            i = n(3674);
          e.exports = function (e) {
            return o(e, i, r);
          };
        },
        5050: function _(e, t, n) {
          var o = n(7019);
          e.exports = function (e, t) {
            var n = e.__data__;
            return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
          };
        },
        852: function _(e, t, n) {
          var o = n(8458),
            r = n(7801);
          e.exports = function (e, t) {
            var n = r(e, t);
            return o(n) ? n : void 0;
          };
        },
        9607: function _(e, t, n) {
          var o = n(2705),
            r = Object.prototype,
            i = r.hasOwnProperty,
            s = r.toString,
            a = o ? o.toStringTag : void 0;
          e.exports = function (e) {
            var t = i.call(e, a),
              n = e[a];
            try {
              e[a] = void 0;
              var o = !0;
            } catch (c) {}
            var r = s.call(e);
            return o && (t ? e[a] = n : delete e[a]), r;
          };
        },
        9551: function _(e, t, n) {
          var o = n(4963),
            r = n(479),
            i = Object.prototype.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            a = s ? function (e) {
              return null == e ? [] : (e = Object(e), o(s(e), function (t) {
                return i.call(e, t);
              }));
            } : r;
          e.exports = a;
        },
        4160: function _(e, t, n) {
          var o = n(8552),
            r = n(7071),
            i = n(3818),
            s = n(8525),
            a = n(577),
            c = n(4239),
            l = n(346),
            u = "[object Map]",
            d = "[object Promise]",
            p = "[object Set]",
            f = "[object WeakMap]",
            h = "[object DataView]",
            m = l(o),
            v = l(r),
            y = l(i),
            _ = l(s),
            g = l(a),
            b = c;
          (o && b(new o(new ArrayBuffer(1))) != h || r && b(new r()) != u || i && b(i.resolve()) != d || s && b(new s()) != p || a && b(new a()) != f) && (b = function b(e) {
            var t = c(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              o = n ? l(n) : "";
            if (o) switch (o) {
              case m:
                return h;
              case v:
                return u;
              case y:
                return d;
              case _:
                return p;
              case g:
                return f;
            }
            return t;
          }), e.exports = b;
        },
        7801: function _(e) {
          e.exports = function (e, t) {
            return null == e ? void 0 : e[t];
          };
        },
        1789: function _(e, t, n) {
          var o = n(4536);
          e.exports = function () {
            this.__data__ = o ? o(null) : {}, this.size = 0;
          };
        },
        401: function _(e) {
          e.exports = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t;
          };
        },
        7667: function _(e, t, n) {
          var o = n(4536),
            r = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var t = this.__data__;
            if (o) {
              var n = t[e];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return r.call(t, e) ? t[e] : void 0;
          };
        },
        1327: function _(e, t, n) {
          var o = n(4536),
            r = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var t = this.__data__;
            return o ? void 0 !== t[e] : r.call(t, e);
          };
        },
        1866: function _(e, t, n) {
          var o = n(4536);
          e.exports = function (e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this;
          };
        },
        5776: function _(e) {
          var t = /^(?:0|[1-9]\d*)$/;
          e.exports = function (e, n) {
            var o = _typeof(e);
            return !!(n = null == n ? 9007199254740991 : n) && ("number" == o || "symbol" != o && t.test(e)) && e > -1 && e % 1 == 0 && e < n;
          };
        },
        7019: function _(e) {
          e.exports = function (e) {
            var t = _typeof(e);
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
          };
        },
        5346: function _(e, t, n) {
          var o,
            r = n(4429),
            i = (o = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
          e.exports = function (e) {
            return !!i && i in e;
          };
        },
        5726: function _(e) {
          var t = Object.prototype;
          e.exports = function (e) {
            var n = e && e.constructor;
            return e === ("function" == typeof n && n.prototype || t);
          };
        },
        7040: function _(e) {
          e.exports = function () {
            this.__data__ = [], this.size = 0;
          };
        },
        4125: function _(e, t, n) {
          var o = n(8470),
            r = Array.prototype.splice;
          e.exports = function (e) {
            var t = this.__data__,
              n = o(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, 0));
          };
        },
        2117: function _(e, t, n) {
          var o = n(8470);
          e.exports = function (e) {
            var t = this.__data__,
              n = o(t, e);
            return n < 0 ? void 0 : t[n][1];
          };
        },
        7518: function _(e, t, n) {
          var o = n(8470);
          e.exports = function (e) {
            return o(this.__data__, e) > -1;
          };
        },
        4705: function _(e, t, n) {
          var o = n(8470);
          e.exports = function (e, t) {
            var n = this.__data__,
              r = o(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
          };
        },
        4785: function _(e, t, n) {
          var o = n(1989),
            r = n(8407),
            i = n(7071);
          e.exports = function () {
            this.size = 0, this.__data__ = {
              hash: new o(),
              map: new (i || r)(),
              string: new o()
            };
          };
        },
        1285: function _(e, t, n) {
          var o = n(5050);
          e.exports = function (e) {
            var t = o(this, e)["delete"](e);
            return this.size -= t ? 1 : 0, t;
          };
        },
        6e3: function _(e, t, n) {
          var o = n(5050);
          e.exports = function (e) {
            return o(this, e).get(e);
          };
        },
        9916: function _(e, t, n) {
          var o = n(5050);
          e.exports = function (e) {
            return o(this, e).has(e);
          };
        },
        5265: function _(e, t, n) {
          var o = n(5050);
          e.exports = function (e, t) {
            var n = o(this, e),
              r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
          };
        },
        8776: function _(e) {
          e.exports = function (e) {
            var t = -1,
              n = Array(e.size);
            return e.forEach(function (e, o) {
              n[++t] = [o, e];
            }), n;
          };
        },
        4536: function _(e, t, n) {
          var o = n(852)(Object, "create");
          e.exports = o;
        },
        6916: function _(e, t, n) {
          var o = n(5569)(Object.keys, Object);
          e.exports = o;
        },
        1167: function _(e, t, n) {
          e = n.nmd(e);
          var o = n(1957),
            r = t && !t.nodeType && t,
            i = r && e && !e.nodeType && e,
            s = i && i.exports === r && o.process,
            a = function () {
              try {
                return i && i.require && i.require("util").types || s && s.binding && s.binding("util");
              } catch (e) {}
            }();
          e.exports = a;
        },
        2333: function _(e) {
          var t = Object.prototype.toString;
          e.exports = function (e) {
            return t.call(e);
          };
        },
        5569: function _(e) {
          e.exports = function (e, t) {
            return function (n) {
              return e(t(n));
            };
          };
        },
        5639: function _(e, t, n) {
          var o = n(1957),
            r = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
            i = o || r || Function("return this")();
          e.exports = i;
        },
        619: function _(e) {
          e.exports = function (e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this;
          };
        },
        2385: function _(e) {
          e.exports = function (e) {
            return this.__data__.has(e);
          };
        },
        1814: function _(e) {
          e.exports = function (e) {
            var t = -1,
              n = Array(e.size);
            return e.forEach(function (e) {
              n[++t] = e;
            }), n;
          };
        },
        7465: function _(e, t, n) {
          var o = n(8407);
          e.exports = function () {
            this.__data__ = new o(), this.size = 0;
          };
        },
        3779: function _(e) {
          e.exports = function (e) {
            var t = this.__data__,
              n = t["delete"](e);
            return this.size = t.size, n;
          };
        },
        7599: function _(e) {
          e.exports = function (e) {
            return this.__data__.get(e);
          };
        },
        4758: function _(e) {
          e.exports = function (e) {
            return this.__data__.has(e);
          };
        },
        4309: function _(e, t, n) {
          var o = n(8407),
            r = n(7071),
            i = n(3369);
          e.exports = function (e, t) {
            var n = this.__data__;
            if (n instanceof o) {
              var s = n.__data__;
              if (!r || s.length < 199) return s.push([e, t]), this.size = ++n.size, this;
              n = this.__data__ = new i(s);
            }
            return n.set(e, t), this.size = n.size, this;
          };
        },
        346: function _(e) {
          var t = Function.prototype.toString;
          e.exports = function (e) {
            if (null != e) {
              try {
                return t.call(e);
              } catch (n) {}
              try {
                return e + "";
              } catch (n) {}
            }
            return "";
          };
        },
        7813: function _(e) {
          e.exports = function (e, t) {
            return e === t || e != e && t != t;
          };
        },
        5694: function _(e, t, n) {
          var o = n(9454),
            r = n(7005),
            i = Object.prototype,
            s = i.hasOwnProperty,
            a = i.propertyIsEnumerable,
            c = o(function () {
              return arguments;
            }()) ? o : function (e) {
              return r(e) && s.call(e, "callee") && !a.call(e, "callee");
            };
          e.exports = c;
        },
        1469: function _(e) {
          var t = Array.isArray;
          e.exports = t;
        },
        8612: function _(e, t, n) {
          var o = n(3560),
            r = n(1780);
          e.exports = function (e) {
            return null != e && r(e.length) && !o(e);
          };
        },
        4144: function _(e, t, n) {
          e = n.nmd(e);
          var o = n(5639),
            r = n(5062),
            i = t && !t.nodeType && t,
            s = i && e && !e.nodeType && e,
            a = s && s.exports === i ? o.Buffer : void 0,
            c = (a ? a.isBuffer : void 0) || r;
          e.exports = c;
        },
        8446: function _(e, t, n) {
          var o = n(939);
          e.exports = function (e, t) {
            return o(e, t);
          };
        },
        3560: function _(e, t, n) {
          var o = n(4239),
            r = n(3218);
          e.exports = function (e) {
            if (!r(e)) return !1;
            var t = o(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
          };
        },
        1780: function _(e) {
          e.exports = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
          };
        },
        3218: function _(e) {
          e.exports = function (e) {
            var t = _typeof(e);
            return null != e && ("object" == t || "function" == t);
          };
        },
        7005: function _(e) {
          e.exports = function (e) {
            return null != e && "object" == _typeof(e);
          };
        },
        6719: function _(e, t, n) {
          var o = n(8749),
            r = n(1717),
            i = n(1167),
            s = i && i.isTypedArray,
            a = s ? r(s) : o;
          e.exports = a;
        },
        3674: function _(e, t, n) {
          var o = n(4636),
            r = n(280),
            i = n(8612);
          e.exports = function (e) {
            return i(e) ? o(e) : r(e);
          };
        },
        8306: function _(e, t, n) {
          var o = n(3369);
          function r(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
            var _n7 = function n() {
              var o = arguments,
                r = t ? t.apply(this, o) : o[0],
                i = _n7.cache;
              if (i.has(r)) return i.get(r);
              var s = e.apply(this, o);
              return _n7.cache = i.set(r, s) || i, s;
            };
            return _n7.cache = new (r.Cache || o)(), _n7;
          }
          r.Cache = o, e.exports = r;
        },
        479: function _(e) {
          e.exports = function () {
            return [];
          };
        },
        5062: function _(e) {
          e.exports = function () {
            return !1;
          };
        },
        2703: function _(e, t, n) {
          var o = n(414);
          function r() {}
          function i() {}
          i.resetWarningCache = r, e.exports = function () {
            function e(e, t, n, r, i, s) {
              if (s !== o) {
                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a;
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: r
            };
            return n.PropTypes = n, n;
          };
        },
        5697: function _(e, t, n) {
          e.exports = n(2703)();
        },
        414: function _(e) {
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        9787: function _(t) {
          t.exports = e;
        }
      },
      n = {};
    function o(e) {
      var r = n[e];
      if (void 0 !== r) return r.exports;
      var i = n[e] = {
        id: e,
        loaded: !1,
        exports: {}
      };
      return t[e](i, i.exports, o), i.loaded = !0, i.exports;
    }
    o.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return o.d(t, {
        a: t
      }), t;
    }, o.d = function (e, t) {
      for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }, o.g = function () {
      if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
      }
    }(), o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, o.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, o.nmd = function (e) {
      return e.paths = [], e.children || (e.children = []), e;
    };
    var r = {};
    return function () {
      o.r(r), o.d(r, {
        "default": function _default() {
          return le;
        },
        expandNodesToLevel: function expandNodesToLevel() {
          return ce;
        }
      });
      var e = o(4184),
        t = o.n(e),
        n = o(8446),
        i = o.n(n),
        s = o(8306),
        a = o.n(s);
      var c = function c() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
        return crypto.getRandomValues(new Uint8Array(e)).reduce(function (e, t) {
          return e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_");
        }, "");
      };
      var l = o(5697),
        u = o.n(l),
        d = o(9787),
        p = o.n(d);
      function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }
      var h = ["children", "title"];
      function m() {
        return m = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }, m.apply(this, arguments);
      }
      function v(e, t) {
        return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var g = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && v(e, t);
        }(s, e);
        var t,
          n,
          o,
          r,
          i = (o = s, r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }(), function () {
            var e,
              t = y(o);
            if (r) {
              var n = y(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return function (e, t) {
              if (t && ("object" === f(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              }(e);
            }(this, e);
          });
        function s() {
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, s), i.apply(this, arguments);
        }
        return t = s, (n = [{
          key: "render",
          value: function value() {
            var e = this.props,
              t = e.children,
              n = e.title,
              o = function (e, t) {
                if (null == e) return {};
                var n,
                  o,
                  r = function (e, t) {
                    if (null == e) return {};
                    var n,
                      o,
                      r = {},
                      i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                  }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
              }(e, h);
            return p().createElement("button", m({
              "aria-label": n,
              title: n,
              type: "button"
            }, o), t);
          }
        }]) && function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), s;
      }(p().PureComponent);
      _(g, "propTypes", {
        children: u().node.isRequired,
        title: u().string
      }), _(g, "defaultProps", {
        title: null
      });
      var b = g,
        w = {
          ALL: "all",
          PARENT: "parent",
          LEAF: "leaf"
        };
      function k(e) {
        this.message = e, this.stack = Error().stack;
      }
      k.prototype = Object.create(Error.prototype), k.prototype.name = "CheckboxTreeError";
      var x = k;
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, o);
        }
        return n;
      }
      function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var P = w;
      var E = function () {
        function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e), this.props = t, this.flatNodes = n;
        }
        var t, n;
        return t = e, n = [{
          key: "setProps",
          value: function value(e) {
            this.props = e;
          }
        }, {
          key: "clone",
          value: function value() {
            var t = this,
              n = {};
            return Object.keys(this.flatNodes).forEach(function (e) {
              var o = t.flatNodes[e];
              n[e] = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? C(Object(n), !0).forEach(function (t) {
                    S(e, t, n[t]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
                }
                return e;
              }({}, o);
            }), new e(this.props, n);
          }
        }, {
          key: "getNode",
          value: function value(e) {
            return this.flatNodes[e];
          }
        }, {
          key: "reset",
          value: function value() {
            this.flatNodes = {};
          }
        }, {
          key: "flattenNodes",
          value: function value(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (Array.isArray(e) && 0 !== e.length) {
              var r = this.props,
                i = r.disabled,
                s = r.noCascade;
              e.forEach(function (e, r) {
                var a = t.nodeHasChildren(e);
                if (void 0 !== t.flatNodes[e.value]) throw new x("Duplicate value '".concat(e.value, "' detected. All node values must be unique."));
                t.flatNodes[e.value] = {
                  label: e.label,
                  value: e.value,
                  children: e.children,
                  parent: n,
                  isChild: void 0 !== n.value,
                  isParent: a,
                  isLeaf: !a,
                  showCheckbox: void 0 === e.showCheckbox || e.showCheckbox,
                  disabled: t.getDisabledState(e, n, i, s),
                  treeDepth: o,
                  index: r
                }, t.flattenNodes(e.children, e, o + 1);
              });
            }
          }
        }, {
          key: "nodeHasChildren",
          value: function value(e) {
            return Array.isArray(e.children);
          }
        }, {
          key: "getDisabledState",
          value: function value(e, t, n, o) {
            return !!n || !(o || !t.disabled) || Boolean(e.disabled);
          }
        }, {
          key: "deserializeLists",
          value: function value(e) {
            var t = this,
              n = ["checked", "expanded"];
            Object.keys(this.flatNodes).forEach(function (e) {
              n.forEach(function (n) {
                t.flatNodes[e][n] = !1;
              });
            }), n.forEach(function (n) {
              e[n].forEach(function (e) {
                void 0 !== t.flatNodes[e] && (t.flatNodes[e][n] = !0);
              });
            });
          }
        }, {
          key: "serializeList",
          value: function value(e) {
            var t = this,
              n = [];
            return Object.keys(this.flatNodes).forEach(function (o) {
              t.flatNodes[o][e] && n.push(o);
            }), n;
          }
        }, {
          key: "expandAllNodes",
          value: function value(e) {
            var t = this;
            return Object.keys(this.flatNodes).forEach(function (n) {
              t.flatNodes[n].isParent && (t.flatNodes[n].expanded = e);
            }), this;
          }
        }, {
          key: "toggleChecked",
          value: function value(e, t, n, o) {
            var r = this,
              i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              s = this.flatNodes[e.value],
              a = [P.PARENT, P.ALL].indexOf(n) > -1,
              c = [P.LEAF, P.ALL].indexOf(n) > -1;
            if (s.isLeaf || o) {
              if (e.disabled) return this;
              this.toggleNode(e.value, "checked", t);
            } else (a || 0 === s.children.length) && this.toggleNode(e.value, "checked", t), c && s.children.forEach(function (e) {
              r.toggleChecked(e, t, n, o, !1);
            });
            return i && !o && s.isChild && a && this.toggleParentStatus(s.parent, n), this;
          }
        }, {
          key: "toggleParentStatus",
          value: function value(e, t) {
            var n = this.flatNodes[e.value];
            n.isChild ? (t === P.ALL && this.toggleNode(e.value, "checked", this.isEveryChildChecked(n)), this.toggleParentStatus(n.parent, t)) : this.toggleNode(e.value, "checked", this.isEveryChildChecked(n));
          }
        }, {
          key: "isEveryChildChecked",
          value: function value(e) {
            var t = this;
            return e.children.every(function (e) {
              return t.getNode(e.value).checked;
            });
          }
        }, {
          key: "toggleNode",
          value: function value(e, t, n) {
            return this.flatNodes[e][t] = n, this;
          }
        }], n && function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }();
      function O(e) {
        return (O = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }
      function M() {
        return M = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }, M.apply(this, arguments);
      }
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, o);
        }
        return n;
      }
      function D(e, t) {
        return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var L = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && D(e, t);
        }(s, e);
        var t,
          n,
          o,
          r,
          i = (o = s, r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }(), function () {
            var e,
              t = A(o);
            if (r) {
              var n = A(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return function (e, t) {
              if (t && ("object" === O(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              }(e);
            }(this, e);
          });
        function s() {
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, s), i.apply(this, arguments);
        }
        return t = s, n = [{
          key: "componentDidMount",
          value: function value() {
            this.updateDeterminateProperty();
          }
        }, {
          key: "componentDidUpdate",
          value: function value() {
            this.updateDeterminateProperty();
          }
        }, {
          key: "updateDeterminateProperty",
          value: function value() {
            var e = this.props.indeterminate;
            this.checkbox.indeterminate = e;
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
              t = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? j(Object(n), !0).forEach(function (t) {
                    T(e, t, n[t]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
                }
                return e;
              }({}, this.props);
            return delete t.indeterminate, p().createElement("input", M({}, t, {
              ref: function ref(t) {
                e.checkbox = t;
              },
              type: "checkbox"
            }));
          }
        }], n && function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), s;
      }(p().PureComponent);
      T(L, "propTypes", {
        indeterminate: u().bool
      }), T(L, "defaultProps", {
        indeterminate: !1
      });
      var z = L,
        B = u().shape({
          check: u().node,
          uncheck: u().node,
          halfCheck: u().node,
          expandClose: u().node,
          expandOpen: u().node,
          expandAll: u().node,
          collapseAll: u().node,
          parentClose: u().node,
          parentOpen: u().node,
          leaf: u().node
        }),
        I = u().shape({
          collapseAll: u().string.isRequired,
          expandAll: u().string.isRequired,
          toggle: u().string.isRequired
        });
      function N(e) {
        return (N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }
      function R(e, t) {
        return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function K(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var H = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && R(e, t);
        }(a, e);
        var n,
          o,
          r,
          i,
          s = (r = a, i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }(), function () {
            var e,
              t = F(r);
            if (i) {
              var n = F(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return function (e, t) {
              if (t && ("object" === N(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return K(e);
            }(this, e);
          });
        function a(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, a), (t = s.call(this, e)).onCheck = t.onCheck.bind(K(t)), t.onCheckboxKeyPress = t.onCheckboxKeyPress.bind(K(t)), t.onCheckboxKeyUp = t.onCheckboxKeyUp.bind(K(t)), t.onClick = t.onClick.bind(K(t)), t.onExpand = t.onExpand.bind(K(t)), t;
        }
        return n = a, (o = [{
          key: "onCheck",
          value: function value() {
            var e = this.props,
              t = e.value;
            (0, e.onCheck)({
              value: t,
              checked: this.getCheckState({
                toggle: !0
              })
            });
          }
        }, {
          key: "onCheckboxKeyPress",
          value: function value(e) {
            32 === e.which && e.preventDefault();
          }
        }, {
          key: "onCheckboxKeyUp",
          value: function value(e) {
            var t = e.keyCode;
            [13, 32].includes(t) && this.onCheck();
          }
        }, {
          key: "onClick",
          value: function value() {
            var e = this.props,
              t = e.expandOnClick,
              n = e.isParent,
              o = e.value,
              r = e.onClick;
            n && t && this.onExpand(), r({
              value: o,
              checked: this.getCheckState({
                toggle: !1
              })
            });
          }
        }, {
          key: "onExpand",
          value: function value() {
            var e = this.props,
              t = e.expanded,
              n = e.value;
            (0, e.onExpand)({
              value: n,
              expanded: !t
            });
          }
        }, {
          key: "getCheckState",
          value: function value(e) {
            var t = e.toggle,
              n = this.props,
              o = n.checked,
              r = n.optimisticToggle;
            return !(0 !== o || !t) || 1 === o && !t || 2 === o && r;
          }
        }, {
          key: "renderCollapseButton",
          value: function value() {
            var e = this.props,
              t = e.expandDisabled,
              n = e.isLeaf,
              o = e.lang;
            return n ? p().createElement("span", {
              className: "rct-collapse"
            }, p().createElement("span", {
              className: "rct-icon"
            })) : p().createElement(b, {
              className: "rct-collapse rct-collapse-btn",
              disabled: t,
              title: o.toggle,
              onClick: this.onExpand
            }, this.renderCollapseIcon());
          }
        }, {
          key: "renderCollapseIcon",
          value: function value() {
            var e = this.props,
              t = e.expanded,
              n = e.icons,
              o = n.expandClose,
              r = n.expandOpen;
            return t ? r : o;
          }
        }, {
          key: "renderCheckboxIcon",
          value: function value() {
            var e = this.props,
              t = e.checked,
              n = e.icons,
              o = n.uncheck,
              r = n.check,
              i = n.halfCheck;
            return 0 === t ? o : 1 === t ? r : i;
          }
        }, {
          key: "renderNodeIcon",
          value: function value() {
            var e = this.props,
              t = e.expanded,
              n = e.icon,
              o = e.icons,
              r = o.leaf,
              i = o.parentClose,
              s = o.parentOpen,
              a = e.isLeaf;
            return null !== n ? n : a ? r : t ? s : i;
          }
        }, {
          key: "renderBareLabel",
          value: function value(e) {
            var t = this.props,
              n = t.onClick,
              o = t.title,
              r = null !== n;
            return p().createElement("span", {
              className: "rct-bare-label",
              title: o
            }, r ? p().createElement("span", {
              className: "rct-node-clickable",
              onClick: this.onClick,
              onKeyPress: this.onClick,
              role: "button",
              tabIndex: 0
            }, e) : e);
          }
        }, {
          key: "renderCheckboxLabel",
          value: function value(e) {
            var t = this.props,
              n = t.checked,
              o = t.disabled,
              r = t.title,
              i = t.treeId,
              s = t.value,
              a = null !== t.onClick,
              c = "".concat(i, "-").concat(String(s).split(" ").join("_")),
              l = [p().createElement("label", {
                key: 0,
                htmlFor: c,
                title: r
              }, p().createElement(z, {
                checked: 1 === n,
                disabled: o,
                id: c,
                indeterminate: 2 === n,
                onClick: this.onCheck,
                onChange: function onChange() {}
              }), p().createElement("span", {
                "aria-checked": 1 === n,
                "aria-disabled": o,
                className: "rct-checkbox",
                role: "checkbox",
                tabIndex: 0,
                onKeyPress: this.onCheckboxKeyPress,
                onKeyUp: this.onCheckboxKeyUp
              }, this.renderCheckboxIcon()), a ? null : e)];
            return a && l.push(p().createElement("span", {
              key: 1,
              className: "rct-node-clickable",
              onClick: this.onClick,
              onKeyPress: this.onClick,
              role: "link",
              tabIndex: 0
            }, e)), l;
          }
        }, {
          key: "renderLabel",
          value: function value() {
            var e = this.props,
              t = e.label,
              n = e.showCheckbox,
              o = [e.showNodeIcon ? p().createElement("span", {
                key: 0,
                className: "rct-node-icon"
              }, this.renderNodeIcon()) : null, p().createElement("span", {
                key: 1,
                className: "rct-title"
              }, t)];
            return n ? this.renderCheckboxLabel(o) : this.renderBareLabel(o);
          }
        }, {
          key: "renderChildren",
          value: function value() {
            return this.props.expanded ? this.props.children : null;
          }
        }, {
          key: "render",
          value: function value() {
            var e = this.props,
              n = e.className,
              o = e.disabled,
              r = e.expanded,
              i = e.isLeaf,
              s = t()({
                "rct-node": !0,
                "rct-node-leaf": i,
                "rct-node-parent": !i,
                "rct-node-expanded": !i && r,
                "rct-node-collapsed": !i && !r,
                "rct-disabled": o
              }, n);
            return p().createElement("li", {
              className: s
            }, p().createElement("span", {
              className: "rct-text"
            }, this.renderCollapseButton(), this.renderLabel()), this.renderChildren());
          }
        }]) && function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }(n.prototype, o), Object.defineProperty(n, "prototype", {
          writable: !1
        }), a;
      }(p().PureComponent);
      U(H, "propTypes", {
        checked: u().number.isRequired,
        disabled: u().bool.isRequired,
        expandDisabled: u().bool.isRequired,
        expanded: u().bool.isRequired,
        icons: B.isRequired,
        isLeaf: u().bool.isRequired,
        isParent: u().bool.isRequired,
        label: u().node.isRequired,
        lang: I.isRequired,
        optimisticToggle: u().bool.isRequired,
        showNodeIcon: u().bool.isRequired,
        treeId: u().string.isRequired,
        value: u().oneOfType([u().string, u().number]).isRequired,
        onCheck: u().func.isRequired,
        onExpand: u().func.isRequired,
        children: u().node,
        className: u().string,
        expandOnClick: u().bool,
        icon: u().node,
        showCheckbox: u().bool,
        title: u().string,
        onClick: u().func
      }), U(H, "defaultProps", {
        children: null,
        className: null,
        expandOnClick: !1,
        icon: null,
        showCheckbox: !0,
        title: null,
        onClick: function onClick() {}
      });
      var V = H,
        W = u().oneOfType([u().arrayOf(u().string), u().arrayOf(u().number)]);
      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, o);
        }
        return n;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? q(Object(n), !0).forEach(function (t) {
            G(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }
      function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var $ = {
        label: u().node.isRequired,
        value: u().oneOfType([u().string, u().number]).isRequired,
        disabled: u().bool,
        icon: u().node,
        showCheckbox: u().bool,
        title: u().string
      };
      var Y = u().oneOfType([u().shape($), u().shape(X(X({}, $), {}, {
        children: u().arrayOf($).isRequired
      }))]);
      function Z(e) {
        return (Z = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, o);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Q(Object(n), !0).forEach(function (t) {
            re(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }
      function ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      function te(e, t) {
        return (te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function ne(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function oe(e) {
        return (oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function re(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var ie = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && te(e, t);
        }(d, e);
        var n,
          o,
          r,
          s,
          l,
          u = (s = d, l = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          }(), function () {
            var e,
              t = oe(s);
            if (l) {
              var n = oe(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return function (e, t) {
              if (t && ("object" === Z(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return ne(e);
            }(this, e);
          });
        function d(e) {
          var t;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, d), t = u.call(this, e);
          var n = new E(e);
          return n.flattenNodes(e.nodes), n.deserializeLists({
            checked: e.checked,
            expanded: e.expanded
          }), t.state = {
            id: e.id || "rct-".concat(c()),
            model: n,
            prevProps: e
          }, t.onCheck = t.onCheck.bind(ne(t)), t.onExpand = t.onExpand.bind(ne(t)), t.onNodeClick = t.onNodeClick.bind(ne(t)), t.onExpandAll = t.onExpandAll.bind(ne(t)), t.onCollapseAll = t.onCollapseAll.bind(ne(t)), t.combineMemorized = a()(function (e, t) {
            return J(J({}, e), t);
          }).bind(ne(t)), t;
        }
        return n = d, o = [{
          key: "onCheck",
          value: function value(e) {
            var t = this.props,
              n = t.checkModel,
              o = t.noCascade,
              r = t.onCheck,
              i = this.state.model.clone(),
              s = i.getNode(e.value);
            i.toggleChecked(e, e.checked, n, o), r(i.serializeList("checked"), J(J({}, s), e));
          }
        }, {
          key: "onExpand",
          value: function value(e) {
            var t = this.props.onExpand,
              n = this.state.model.clone(),
              o = n.getNode(e.value);
            n.toggleNode(e.value, "expanded", e.expanded), t(n.serializeList("expanded"), J(J({}, o), e));
          }
        }, {
          key: "onNodeClick",
          value: function value(e) {
            (0, this.props.onClick)(J(J({}, this.state.model.getNode(e.value)), e));
          }
        }, {
          key: "onExpandAll",
          value: function value() {
            this.expandAllNodes();
          }
        }, {
          key: "onCollapseAll",
          value: function value() {
            this.expandAllNodes(!1);
          }
        }, {
          key: "expandAllNodes",
          value: function value() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            (0, this.props.onExpand)(this.state.model.clone().expandAllNodes(e).serializeList("expanded"));
          }
        }, {
          key: "determineShallowCheckState",
          value: function value(e, t) {
            var n = this.state.model.getNode(e.value);
            return n.isLeaf || t || 0 === e.children.length ? n.checked ? 1 : 0 : this.isEveryChildChecked(e) ? 1 : this.isSomeChildChecked(e) ? 2 : 0;
          }
        }, {
          key: "isEveryChildChecked",
          value: function value(e) {
            var t = this;
            return e.children.every(function (e) {
              return 1 === t.state.model.getNode(e.value).checkState;
            });
          }
        }, {
          key: "isSomeChildChecked",
          value: function value(e) {
            var t = this;
            return e.children.some(function (e) {
              return t.state.model.getNode(e.value).checkState > 0;
            });
          }
        }, {
          key: "renderTreeNodes",
          value: function value(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = this.props,
              r = o.expandDisabled,
              i = o.expandOnClick,
              s = o.icons,
              a = o.lang,
              c = o.noCascade,
              l = o.onClick,
              u = o.onlyLeafCheckboxes,
              f = o.optimisticToggle,
              h = o.showNodeTitle,
              m = o.showNodeIcon,
              v = this.state,
              y = v.id,
              _ = v.model,
              g = d.defaultProps.icons,
              b = e.map(function (e) {
                var o = e.value,
                  d = _.getNode(e.value),
                  v = d.isParent ? t.renderTreeNodes(e.children, e) : null;
                d.checkState = t.determineShallowCheckState(e, c);
                var b = u ? d.isLeaf : d.showCheckbox;
                return !n.value || _.getNode(n.value).expanded ? p().createElement(V, {
                  key: o,
                  checked: d.checkState,
                  className: e.className,
                  disabled: d.disabled,
                  expandDisabled: r,
                  expandOnClick: i,
                  expanded: d.expanded,
                  icon: e.icon,
                  icons: t.combineMemorized(g, s),
                  label: e.label,
                  lang: a,
                  optimisticToggle: f,
                  isLeaf: d.isLeaf,
                  isParent: d.isParent,
                  showCheckbox: b,
                  showNodeIcon: m,
                  title: h ? e.title || e.label : e.title,
                  treeId: y,
                  value: e.value,
                  onCheck: t.onCheck,
                  onClick: l && t.onNodeClick,
                  onExpand: t.onExpand
                }, v) : null;
              });
            return p().createElement("ol", null, b);
          }
        }, {
          key: "renderExpandAll",
          value: function value() {
            var e = this.props,
              t = e.icons,
              n = t.expandAll,
              o = t.collapseAll,
              r = e.lang;
            return e.showExpandAll ? p().createElement("div", {
              className: "rct-options"
            }, p().createElement(b, {
              className: "rct-option rct-option-expand-all",
              title: r.expandAll,
              onClick: this.onExpandAll
            }, n), p().createElement(b, {
              className: "rct-option rct-option-collapse-all",
              title: r.collapseAll,
              onClick: this.onCollapseAll
            }, o)) : null;
          }
        }, {
          key: "renderHiddenInput",
          value: function value() {
            var e = this.props,
              t = e.name,
              n = e.nameAsArray;
            return void 0 === t ? null : n ? this.renderArrayHiddenInput() : this.renderJoinedHiddenInput();
          }
        }, {
          key: "renderArrayHiddenInput",
          value: function value() {
            var e = this.props,
              t = e.checked,
              n = e.name;
            return t.map(function (e) {
              var t = "".concat(n, "[]");
              return p().createElement("input", {
                key: e,
                name: t,
                type: "hidden",
                value: e
              });
            });
          }
        }, {
          key: "renderJoinedHiddenInput",
          value: function value() {
            var e = this.props,
              t = e.checked,
              n = e.name,
              o = t.join(",");
            return p().createElement("input", {
              name: n,
              type: "hidden",
              value: o
            });
          }
        }, {
          key: "render",
          value: function value() {
            var e,
              n = this.props,
              o = n.direction,
              r = n.disabled,
              i = n.iconsClass,
              s = n.nodes,
              a = n.nativeCheckboxes,
              c = this.state.id,
              l = this.renderTreeNodes(s),
              u = t()((re(e = {
                "react-checkbox-tree": !0,
                "rct-disabled": r
              }, "rct-icons-".concat(i), !0), re(e, "rct-native-display", a), re(e, "rct-direction-rtl", "rtl" === o), e));
            return p().createElement("div", {
              className: u,
              id: c
            }, this.renderExpandAll(), this.renderHiddenInput(), l);
          }
        }], r = [{
          key: "getDerivedStateFromProps",
          value: function value(e, t) {
            var n = t.model,
              o = t.prevProps,
              r = e.disabled,
              s = e.id,
              a = e.nodes,
              c = J(J({}, t), {}, {
                prevProps: e
              });
            return n.setProps(e), i()(o.nodes, a) && o.disabled === r || (n.reset(), n.flattenNodes(a)), null !== s && (c = J(J({}, c), {}, {
              id: s
            })), n.deserializeLists({
              checked: e.checked,
              expanded: e.expanded
            }), c;
          }
        }], o && ee(n.prototype, o), r && ee(n, r), Object.defineProperty(n, "prototype", {
          writable: !1
        }), d;
      }(p().Component);
      function se(e) {
        return function (e) {
          if (Array.isArray(e)) return ae(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return ae(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(e, t) : void 0;
          }
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ae(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function ce(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (n > t) return [];
        var o = [];
        return e.forEach(function (e) {
          e.children && (o = [].concat(se(o), [e.value], se(ce(e.children, t, n + 1))));
        }), o;
      }
      re(ie, "propTypes", {
        nodes: u().arrayOf(Y).isRequired,
        checkModel: u().oneOf([w.LEAF, w.ALL]),
        checked: W,
        direction: u().string,
        disabled: u().bool,
        expandDisabled: u().bool,
        expandOnClick: u().bool,
        expanded: W,
        icons: B,
        iconsClass: u().string,
        id: u().string,
        lang: I,
        name: u().string,
        nameAsArray: u().bool,
        nativeCheckboxes: u().bool,
        noCascade: u().bool,
        onlyLeafCheckboxes: u().bool,
        optimisticToggle: u().bool,
        showExpandAll: u().bool,
        showNodeIcon: u().bool,
        showNodeTitle: u().bool,
        onCheck: u().func,
        onClick: u().func,
        onExpand: u().func
      }), re(ie, "defaultProps", {
        checkModel: w.LEAF,
        checked: [],
        direction: "ltr",
        disabled: !1,
        expandDisabled: !1,
        expandOnClick: !1,
        expanded: [],
        icons: {
          check: p().createElement("span", {
            className: "rct-icon rct-icon-check"
          }),
          uncheck: p().createElement("span", {
            className: "rct-icon rct-icon-uncheck"
          }),
          halfCheck: p().createElement("span", {
            className: "rct-icon rct-icon-half-check"
          }),
          expandClose: p().createElement("span", {
            className: "rct-icon rct-icon-expand-close"
          }),
          expandOpen: p().createElement("span", {
            className: "rct-icon rct-icon-expand-open"
          }),
          expandAll: p().createElement("span", {
            className: "rct-icon rct-icon-expand-all"
          }),
          collapseAll: p().createElement("span", {
            className: "rct-icon rct-icon-collapse-all"
          }),
          parentClose: p().createElement("span", {
            className: "rct-icon rct-icon-parent-close"
          }),
          parentOpen: p().createElement("span", {
            className: "rct-icon rct-icon-parent-open"
          }),
          leaf: p().createElement("span", {
            className: "rct-icon rct-icon-leaf"
          })
        },
        iconsClass: "fa4",
        id: null,
        lang: {
          collapseAll: "Collapse all",
          expandAll: "Expand all",
          toggle: "Toggle"
        },
        name: void 0,
        nameAsArray: !1,
        nativeCheckboxes: !1,
        noCascade: !1,
        onlyLeafCheckboxes: !1,
        optimisticToggle: !0,
        showExpandAll: !1,
        showNodeIcon: !0,
        showNodeTitle: !1,
        onCheck: function onCheck() {},
        onClick: null,
        onExpand: function onExpand() {}
      });
      var le = ie;
    }(), r;
  }();
}(Pt));
function qi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "application/zip";
  var o = new Blob([t], {
    type: n
  });
  !function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = document.createElement("a");
    o.href = t, o.target = n ? "_blank" : "_self", o.download = e, o.style.display = "none", document.body.appendChild(o), o.click(), o.remove();
  }(e, URL.createObjectURL(o));
}
function Xi() {
  var e = Wr(),
    t = on(function (e) {
      return e.dos.ci;
    }),
    n = mi(),
    _ie = ie(0),
    _ie2 = _slicedToArray(_ie, 2),
    o = _ie2[0],
    r = _ie2[1],
    _ie3 = ie(null),
    _ie4 = _slicedToArray(_ie3, 2),
    i = _ie4[0],
    s = _ie4[1],
    _ie5 = ie([]),
    _ie6 = _slicedToArray(_ie5, 2),
    a = _ie6[0],
    c = _ie6[1],
    _ie7 = ie([]),
    _ie8 = _slicedToArray(_ie7, 2),
    l = _ie8[0],
    u = _ie8[1],
    _ie9 = ie(null),
    _ie0 = _slicedToArray(_ie9, 2),
    d = _ie0[0],
    p = _ie0[1],
    _ie1 = ie(!1),
    _ie10 = _slicedToArray(_ie1, 2),
    f = _ie10[0],
    h = _ie10[1];
  function m(e) {
    s(e), r(Math.round(es(e) / 1024 / 1024 * 100) / 100);
  }
  function v() {
    return _v.apply(this, arguments);
  }
  function _v() {
    _v = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _t17, _t18;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (!(m(null), null === n.ci || !t)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            _t17 = m;
            _t18 = Gi;
            _context6.n = 2;
            return n.ci.fsTree();
          case 2:
            _t17(_t18(_context6.v));
          case 3:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _v.apply(this, arguments);
  }
  return ae(function () {
    if (null === n.ci || !t) return;
    var e = !1;
    return n.ci.fsTree().then(function (t) {
      e || m(Gi(t));
    })["catch"](function (t) {
      console.error(t), e || m(null);
    }), function () {
      e = !0;
    };
  }, [t]), Ui("div", {
    "class": "editor-fs-frame frame-root items-start px-4",
    children: [(f || null !== d) && Ui("div", {
      "class": "card card-bordered bg-base-100 shadow-xl w-full",
      children: Ui("div", {
        "class": "card-body",
        children: [Ui("div", {
          "class": "card-title",
          children: e(f ? "please_wait" : "uploading_file")
        }), Ui("span", {
          "class": "break-words",
          children: f ? e("making_bundle") : d
        })]
      })
    }), !f && null === d && i && Ui("div", {
      className: "fs-tree-view",
      children: [Ui(Yi, {
        onRefresh: v,
        onUploadingFile: p,
        onMakingBundle: h,
        onRemoveFile: function () {
          var _onRemoveFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
            var e, _iterator6, _step6, _t15, _t16;
            return _regenerator().w(function (_context5) {
              while (1) switch (_context5.p = _context5.n) {
                case 0:
                  e = n.ci;
                  if (!(null !== e)) {
                    _context5.n = 10;
                    break;
                  }
                  _context5.p = 1;
                  p("DELETE_OPERATION");
                  _iterator6 = _createForOfIteratorHelper(l);
                  _context5.p = 2;
                  _iterator6.s();
                case 3:
                  if ((_step6 = _iterator6.n()).done) {
                    _context5.n = 5;
                    break;
                  }
                  _t15 = _step6.value;
                  _t15.startsWith("./") && (_t15 = _t15.slice(2));
                  _context5.n = 4;
                  return e.fsDeleteFile(_t15);
                case 4:
                  _context5.n = 3;
                  break;
                case 5:
                  _context5.n = 7;
                  break;
                case 6:
                  _context5.p = 6;
                  _t16 = _context5.v;
                  _iterator6.e(_t16);
                case 7:
                  _context5.p = 7;
                  _iterator6.f();
                  return _context5.f(7);
                case 8:
                  _context5.p = 8;
                  p(null);
                  return _context5.f(8);
                case 9:
                  u([]);
                  _context5.n = 10;
                  return v();
                case 10:
                  return _context5.a(2);
              }
            }, _callee5, null, [[2, 6, 7, 8], [1,, 8, 9]]);
          }));
          function onRemoveFile() {
            return _onRemoveFile.apply(this, arguments);
          }
          return onRemoveFile;
        }(),
        canDelete: l.length > 0
      }), Ui("div", {
        "class": "bg-base-200 px-2 py-1 text-right",
        children: [e("size"), ": ", o, " Mb"]
      }), Ui("div", {
        "class": "fs-tree",
        children: Ui(Wi, {
          icons: {
            expandOpen: Ui(Qi, {}),
            expandClose: Ui(Ji, {})
          },
          iconsClass: "icon",
          nativeCheckboxes: !1,
          onlyLeafCheckboxes: !1,
          nodes: i,
          checked: l,
          onCheck: function onCheck(e, t) {
            var n = e.indexOf(t.value);
            t.checked && -1 === n ? e.push(t.value) : t.checked || -1 === n || e.splice(n, 1), u(e);
          },
          expanded: a,
          onExpand: function onExpand(e, t) {
            c(e);
          }
        })
      })]
    })]
  });
}
function Gi(e) {
  var t;
  var n = [];
  var _iterator7 = _createForOfIteratorHelper((null == (t = e.nodes) ? void 0 : t.sort(Zi)) || []),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _o3 = _step7.value;
      n.push($i(_o3, "."));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return n;
}
function $i(e, t) {
  var n = t + "/" + e.name,
    o = {
      label: e.name,
      value: n,
      fsNode: e
    };
  if (null !== e.nodes) {
    var _t19 = e.nodes.sort(Zi).map(function (e) {
      return $i(e, n);
    });
    o.children = _t19;
  }
  return o;
}
function Yi(e) {
  var t = Wr(),
    n = le(null),
    o = le(null),
    r = Qn(),
    i = mi(),
    s = e.onRefresh,
    a = e.onUploadingFile,
    c = e.onMakingBundle,
    l = e.onRemoveFile,
    u = e.canDelete;
  function d(e) {
    var t = (e ? o : n).current;
    null !== t && t.click();
  }
  function p(_x19) {
    return _p.apply(this, arguments);
  }
  function _p() {
    _p = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
      var t, n, _iterator8, _step8, _e7$webkitRelativePat, _e7, _n8, _o4, _t22;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            t = i.ci, n = e.target.files;
            if (!(null !== t && null !== n)) {
              _context0.n = 10;
              break;
            }
            _context0.p = 1;
            _iterator8 = _createForOfIteratorHelper(n);
            _context0.p = 2;
            _iterator8.s();
          case 3:
            if ((_step8 = _iterator8.n()).done) {
              _context0.n = 5;
              break;
            }
            _e7 = _step8.value;
            a(_e7.name);
            _n8 = ((_e7$webkitRelativePat = _e7.webkitRelativePath) !== null && _e7$webkitRelativePat !== void 0 ? _e7$webkitRelativePat : "").split("/");
            _n8.shift();
            _o4 = _n8.join("/");
            _context0.n = 4;
            return t.fsWriteFile(0 == _o4.length ? _e7.name : _o4, _e7.stream());
          case 4:
            _context0.n = 3;
            break;
          case 5:
            _context0.n = 7;
            break;
          case 6:
            _context0.p = 6;
            _t22 = _context0.v;
            _iterator8.e(_t22);
          case 7:
            _context0.p = 7;
            _iterator8.f();
            return _context0.f(7);
          case 8:
            _context0.p = 8;
            a(null);
            return _context0.f(8);
          case 9:
            _context0.n = 10;
            return s();
          case 10:
            return _context0.a(2);
        }
      }, _callee0, null, [[2, 6, 7, 8], [1,, 8, 9]]);
    }));
    return _p.apply(this, arguments);
  }
  return ae(function () {
    null !== n.current && (n.current.setAttribute("directory", ""), n.current.setAttribute("webkitdirectory", ""));
  }, [n]), Ui("div", {
    "class": "h-6 flex flex-row",
    children: [Ui("input", {
      "class": "hidden",
      type: "file",
      multiple: !0,
      ref: n,
      onChange: p
    }), Ui("input", {
      "class": "hidden",
      type: "file",
      multiple: !0,
      ref: o,
      onChange: p
    }), Ui("button", {
      "class": "refresh btn-xs rounded-none",
      onClick: s,
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        })
      })
    }), Ui("button", {
      "class": "add-file btn-xs rounded-none",
      onClick: function onClick() {
        return d(!0);
      },
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        })
      })
    }), Ui("button", {
      "class": "add-dir btn-xs rounded-none",
      onClick: function onClick() {
        return d(!1);
      },
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        })
      })
    }), u && Ui("button", {
      "class": "btn-xs rounded-none text-error",
      onClick: function onClick() {
        return l();
      },
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        })
      })
    }), Ui("div", {
      "class": "flex-grow"
    }), Ui("button", {
      "class": "download btn-xs rounded-none",
      onClick: function () {
        var _onClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
          var e, _t20;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                e = i.ci;
                if (!(null !== e)) {
                  _context7.n = 4;
                  break;
                }
                c(!0);
                _context7.p = 1;
                _context7.n = 2;
                return e.persist(!1);
              case 2:
                _t20 = _context7.v;
                _t20 && qi("bundle.jsdos", _t20);
              case 3:
                _context7.p = 3;
                c(!1);
                return _context7.f(3);
              case 4:
                return _context7.a(2);
            }
          }, _callee7, null, [[1,, 3, 4]]);
        }));
        function onClick() {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }(),
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        })
      })
    }), Ui("button", {
      "class": "restart btn-xs rounded-none",
      onClick: function () {
        var _onClick2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
          var e, _t21;
          return _regenerator().w(function (_context9) {
            while (1) switch (_context9.p = _context9.n) {
              case 0:
                e = i.ci;
                if (!(null !== e && window.confirm(t("fs_restart")))) {
                  _context9.n = 4;
                  break;
                }
                c(!0);
                _context9.p = 1;
                _context9.n = 2;
                return e.persist(!1);
              case 2:
                _t21 = _context9.v;
                _t21 && function () {
                  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e, t, n) {
                    return _regenerator().w(function (_context8) {
                      while (1) switch (_context8.n) {
                        case 0:
                          _context8.n = 1;
                          return Ni("bundle.jsdos", Promise.resolve(e), null, null, n);
                        case 1:
                          n.dispatch(Zr.actions.frameConf());
                        case 2:
                          return _context8.a(2);
                      }
                    }, _callee8);
                  }));
                  return function (_x20, _x21, _x22) {
                    return _ref7.apply(this, arguments);
                  };
                }()(_t21, 0, r);
              case 3:
                _context9.p = 3;
                c(!1);
                return _context9.f(3);
              case 4:
                return _context9.a(2);
            }
          }, _callee9, null, [[1,, 3, 4]]);
        }));
        function onClick() {
          return _onClick2.apply(this, arguments);
        }
        return onClick;
      }(),
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
        })
      })
    })]
  });
}
function Zi(e, t) {
  return null !== e.nodes && null !== t.nodes ? t.name.localeCompare(e.name) : null === e.nodes ? 1 : -1;
}
function Qi() {
  return Ui("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "class": "w-4 h-4 mr-2",
    children: Ui("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })
  });
}
function Ji() {
  return Ui("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "class": "w-4 h-4 mr-2",
    children: Ui("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  });
}
function es(e) {
  if (!e) return 0;
  var t = 0;
  var _iterator9 = _createForOfIteratorHelper(e),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var n = _step9.value;
      null !== n.fsNode.size ? t += n.fsNode.size : t += es(n.children);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return t;
}
function ts(e) {
  var t = le(null);
  return ae(function () {
    null !== t && null !== t.current && (t.current.indeterminate = e.intermediate);
  }, [t, e.intermediate]), Ui("div", {
    className: e["class"] + " form-control option",
    onClick: function onClick() {
      e.onChange && e.onChange(!(!0 === e.checked));
    },
    children: Ui("label", {
      className: "label cursor-pointer",
      children: [Ui("span", {
        className: "label-text mr-6",
        children: e.label
      }), Ui("input", {
        ref: t,
        checked: !0 === e.checked,
        type: "checkbox",
        className: "toggle " + (e.checked ? " toggle-primary " : "") + e.toggleClass,
        disabled: !0 === e.disabled
      })]
    })
  });
}
function ns(e) {
  var t = Wr(),
    n = !0 === e.multiline;
  return Ui("div", {
    "class": e["class"] + " option flex " + (n ? "flex-col" : "flex-row items-center"),
    children: [Ui("div", {
      "class": n ? "mb-2" : "mr-4",
      children: e.label
    }), Ui("div", {
      "class": "flex-grow",
      children: Ui("select", {
        "class": e.selectClass ? e.selectClass : n ? "w-full" : "w-28",
        onChange: function onChange(t) {
          void 0 !== e.onSelect && e.onSelect(t.currentTarget.value);
        },
        disabled: !0 === e.disabled,
        children: e.values.map(function (n) {
          return Ui("option", {
            selected: n === e.selected,
            value: n,
            children: t(n)
          });
        })
      })
    })]
  });
}
function os() {
  var _e$backends$find;
  var e = on(function (e) {
      return e.dos.ipx;
    }),
    t = e.backends,
    n = e.backend,
    o = e.room,
    r = (_e$backends$find = e.backends.find(function (e) {
      return e.name === n;
    })) !== null && _e$backends$find !== void 0 ? _e$backends$find : t[0],
    i = "disconnected" !== e.status,
    s = Wr(),
    a = eo(),
    c = "connected" === e.status ? location.href + function () {
      if (location.href.endsWith("?") || location.href.endsWith("&")) return "";
      return location.href.indexOf("?") > 0 ? "&" : "?";
    }() + "ipx=1&ipxBackend=" + n + "&room=" + o : null;
  return Ui("div", {
    "class": "network-frame frame-root items-start px-4 relative",
    children: [Ui("div", {
      "class": "ml-1 mb-4 w-full flex flex-row items-center",
      children: Ui(ns, {
        "class": "text-sm",
        selectClass: "w-full",
        label: s("server") + ":",
        selected: r.name,
        values: t.map(function (e) {
          return e.name;
        }),
        disabled: i,
        onSelect: function onSelect(e) {
          var t;
          t = e, a(Ci.actions.setIpxBackend(t));
        }
      })
    }), Ui("div", {
      "class": "form-control w-full",
      children: [Ui("label", {
        "class": "label",
        children: Ui("span", {
          "class": "label-text",
          children: [s("room"), ":"]
        })
      }), Ui("input", {
        type: "text",
        "class": "input w-full input-sm input-bordered",
        disabled: i,
        onChange: function onChange(e) {
          return t = e.currentTarget.value, void a(Ci.actions.setRoom(t));
          var t;
        },
        value: o
      })]
    }), Ui(ts, {
      "class": "mt-4 " + ("error" === e.status ? "error" : ""),
      onChange: function onChange() {
        "connected" === e.status ? a(Ci.actions.disconnectIpx({})) : a(Ci.actions.connectIpx({
          room: o,
          address: r.host
        }));
      },
      label: "IPX",
      checked: "connected" === e.status,
      disabled: "connecting" === e.status,
      intermediate: "connecting" === e.status
    }), null !== c && Ui("div", {
      "class": "mt-4 text-sm alert alert-success shadow-lg flex flex-col",
      children: [Ui("div", {
        children: [s("copy_net_link"), ":"]
      }), Ui("div", {
        "class": "flex flex-row",
        children: [Ui("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "class": "w-6 h-6 mx-1 cursor-pointer hover:text-accent-focus flex-shrink-0",
          fill: "none",
          onClick: function onClick() {
            c && (!function () {
              var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(e, t, n) {
                var _t23;
                return _regenerator().w(function (_context1) {
                  while (1) switch (_context1.p = _context1.n) {
                    case 0:
                      if (navigator.clipboard) {
                        _context1.n = 1;
                        break;
                      }
                      return _context1.a(2);
                    case 1:
                      _context1.p = 1;
                      _context1.n = 2;
                      return navigator.clipboard.writeText(e);
                    case 2:
                      n(Zr.actions.showToast({
                        message: t("copied"),
                        intent: "success"
                      }));
                      _context1.n = 4;
                      break;
                    case 3:
                      _context1.p = 3;
                      _t23 = _context1.v;
                      n(Zr.actions.showToast({
                        message: t("error"),
                        intent: "error"
                      }));
                    case 4:
                      return _context1.a(2);
                  }
                }, _callee1, null, [[1, 3]]);
              }));
              return function (_x23, _x24, _x25) {
                return _ref8.apply(this, arguments);
              };
            }()(c, s, a), a(Zr.actions.frameNone()));
          },
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          children: Ui("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          })
        }), Ui("div", {
          "class": "contextmenu underline break-all",
          target: "_blank",
          children: c
        })]
      })]
    })]
  });
}
function rs() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.ui.editor;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("editor"),
    checked: n,
    onChange: function onChange(e) {
      return t(Zr.actions.setEditor(e));
    }
  });
}
function is() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.mouseCapture;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("mouse_lock"),
    checked: n,
    onChange: function onChange(e) {
      return t(Ci.actions.mouseCapture(e));
    }
  });
}
function ss() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return !e.dos.noCursor;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("system_cursor"),
    checked: n,
    onChange: function onChange(e) {
      return t(Ci.actions.noCursor(!e));
    }
  });
}
function as() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.mobileControls;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("mobile_controls"),
    checked: n,
    onChange: function onChange(e) {
      return t(Ci.actions.mobileControls(e));
    }
  });
}
function cs() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.mirroredControls;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("mirrored_controls"),
    checked: n,
    onChange: function onChange(e) {
      return t(Ci.actions.mirroredControls(e));
    }
  });
}
function ls() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.paused;
    }),
    o = "run" !== on(function (e) {
      return e.ui.window;
    });
  return Ui(ts, {
    "class": "mt-4",
    label: e("pause"),
    checked: n,
    disabled: o,
    onChange: function onChange(e) {
      return t(Ci.actions.paused(e));
    }
  });
}
function us() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.worker;
    }),
    o = on(function (e) {
      return e.dos.backendHardware;
    }),
    r = "run" === on(function (e) {
      return e.ui.window;
    }),
    i = mi();
  return o && i.options.backendHardware ? null : Ui(ts, {
    "class": "mt-4",
    label: e("worker"),
    checked: n,
    disabled: r,
    onChange: function onChange(e) {
      return t(Ci.actions.dosWorker(e));
    }
  });
}
function ds() {
  var e = Wr(),
    t = eo(),
    n = on(function (e) {
      return e.dos.backendHardware;
    });
  return mi().options.backendHardware ? Ui(ts, {
    "class": "mt-4",
    label: e("hardware"),
    checked: n,
    onChange: function onChange(e) {
      return t(Ci.actions.dosBackendHardware(e));
    }
  }) : null;
}
function ps(e) {
  var t = on(function (e) {
    return e.dos.backendLocked;
  });
  return Ui(ys, {
    multiline: e.multiline,
    label: "emulation_backend",
    values: [].concat(gi),
    disabled: t,
    selector: function selector(e) {
      return e.dos.backend;
    },
    dispatch: function dispatch(e) {
      return $r.setItem("backend", e), Ci.actions.dosBackend(e);
    }
  });
}
function fs(e) {
  var t = "run" === on(function (e) {
    return e.ui.window;
  });
  return Ui(ys, {
    multiline: e.multiline,
    label: "render_backend",
    values: [].concat(bi),
    disabled: t,
    selector: function selector(e) {
      return e.dos.renderBackend;
    },
    dispatch: function dispatch(e) {
      return Ci.actions.renderBackend(e);
    }
  });
}
function hs(e) {
  return Ui(ys, {
    label: "render_aspect",
    multiline: e.multiline,
    values: [].concat(wi),
    selector: function selector(e) {
      return e.dos.renderAspect;
    },
    dispatch: function dispatch(e) {
      return Ci.actions.renderAspect(e);
    }
  });
}
function ms(e) {
  return Ui(ys, {
    label: "image_rendering",
    multiline: e.multiline,
    values: [].concat(xi),
    selector: function selector(e) {
      return e.dos.imageRendering;
    },
    dispatch: function dispatch(e) {
      return Ci.actions.imageRendering(e);
    }
  });
}
function vs(e) {
  return Ui(ys, {
    "class": e["class"],
    label: "theme",
    values: [].concat(Yr),
    selector: function selector(e) {
      return e.ui.theme;
    },
    dispatch: function dispatch(e) {
      return Zr.actions.theme(e);
    },
    multiline: e.multiline
  });
}
function ys(e) {
  var t = Wr(),
    n = on(e.selector),
    o = eo();
  return Ui(ns, {
    "class": "mt-4 " + e["class"],
    selectClass: e.selectClass,
    disabled: e.disabled,
    multiline: e.multiline,
    label: t(e.label),
    selected: n,
    values: e.values,
    onSelect: function onSelect(t) {
      o(e.dispatch(t));
    }
  });
}
function _s(e) {
  var _e$vertical, _e$bgClass;
  var t = le(null),
    n = le(null),
    o = (_e$vertical = e.vertical) !== null && _e$vertical !== void 0 ? _e$vertical : !1,
    r = (_e$bgClass = e.bgClass) !== null && _e$bgClass !== void 0 ? _e$bgClass : "bg-base-200";
  ae(function () {
    if (null === (null == t ? void 0 : t.current)) return;
    var n = t.current;
    var r = !1;
    function i(t) {
      var r = n.getBoundingClientRect(),
        i = o ? 1 - Math.min(1, Math.max(0, (t.clientY - r.top) / r.height)) : Math.min(1, Math.max(0, (t.clientX - r.left) / r.width));
      e.onChange(i);
    }
    function s(e) {
      r = !0, i(e);
    }
    function a(e) {
      r && i(e);
    }
    function c(e) {
      r = !1;
    }
    return n.addEventListener("pointerdown", s), n.addEventListener("pointermove", a), n.addEventListener("pointerup", c), n.addEventListener("pointercancel", c), n.addEventListener("pointerleave", c), function () {
      n.removeEventListener("pointerdown", s), n.removeEventListener("pointermove", a), n.removeEventListener("pointerup", c), n.removeEventListener("pointercancel", c), n.removeEventListener("pointerleave", c);
    };
  }, [t, o]);
  var i = o ? "" : "rounded-full",
    s = o ? "items-start" : "items-center",
    a = Math.min(Math.max(0, 100 * e.value), 100),
    c = o ? "flex-col" : "flex-row",
    l = o ? "h-full" : "w-full",
    u = o ? "w-4" : "h-16",
    d = o ? "w-2" : "h-2",
    p = o ? {
      active: {
        bottom: 0,
        height: "calc(" + a + "% + 12px)"
      },
      point: {
        left: "-8px",
        bottom: "calc(" + a + "% - 12px)"
      }
    } : {
      active: {
        left: 0,
        width: a + "%"
      },
      point: {
        left: "calc(" + a + "% - 12px)"
      }
    };
  return Ui("div", {
    "class": e["class"] + " slider option " + l,
    children: [e.label && Ui("div", {
      "class": "label w-full flex justify-between gap-2 " + c,
      children: [Ui("p", {
        children: e.label
      }), Ui("p", {
        children: e.value.toFixed(2)
      })]
    }), Ui("div", {
      "class": "touch " + u + " " + l + " " + c + " " + s,
      ref: t,
      children: [Ui("div", {
        "class": "bg " + d + " " + l + " " + r + " " + i
      }), Ui("div", {
        "class": "bg-active " + d + " " + i,
        style: p.active
      }), Ui("div", {
        "class": "point " + e.pointClass,
        ref: n,
        style: p.point,
        children: e.children
      })]
    })]
  });
}
function gs(e) {
  var t = Wr(),
    n = on(function (e) {
      return e.dos.mouseSensitivity;
    }),
    o = eo();
  return Ui(_s, {
    "class": e["class"],
    label: t("mouse_sensitivity"),
    value: n,
    onChange: function onChange(e) {
      return o(Ci.actions.mouseSensitivity(e));
    }
  });
}
function bs(e) {
  var t = Wr(),
    n = on(function (e) {
      return e.dos.scaleControls;
    }),
    o = eo();
  return Ui(_s, {
    "class": e["class"],
    label: t("scale_controls"),
    value: n,
    onChange: function onChange(e) {
      return o(Ci.actions.scaleControls(e));
    }
  });
}
function ws(e) {
  var t = Wr(),
    n = on(function (e) {
      return e.dos.volume;
    }),
    o = eo();
  return Ui(_s, {
    "class": e["class"],
    label: t("volume"),
    value: n,
    onChange: function onChange(e) {
      return o(Ci.actions.volume(e));
    }
  });
}
function ks(e) {
  return Ui("div", {
    "class": "settings-frame frame-root items-start pl-4",
    children: [Ui(ls, {}), Ui(ss, {}), Ui(is, {}), Ui(as, {}), Ui(cs, {}), Ui(gs, {
      "class": "mt-4"
    }), Ui(bs, {}), Ui(ws, {}), Ui(hs, {
      multiline: !0
    }), Ui(ms, {
      multiline: !0
    }), Ui(vs, {
      multiline: !0
    })]
  });
}
function xs() {
  var e = mi(),
    t = on(function (e) {
      return e.dos.backend;
    }),
    n = on(function (e) {
      return e.dos.backendHardware;
    }) && e.options.backendHardware,
    o = on(function (e) {
      return e.dos.emuVersion;
    }),
    r = on(function (e) {
      return e.dos.ciStartedAt;
    }),
    i = on(function (e) {
      return e.dos.stats;
    }),
    s = Math.round(on(function (e) {
      return e.dos.stats.cyclesPerMs;
    }) / 1e3);
  return Ui("div", {
    "class": "stats-frame frame-root items-start px-4",
    children: [Ui("div", {
      "class": "text-center mb-2 text-xs",
      children: ["js-dos/emu: ", "8.3.20", "/", o]
    }), Ui("div", {
      "class": "w-full overflow-x-auto",
      children: Ui("table", {
        "class": "table table-compact w-full",
        children: [Ui("thead", {
          children: Ui("tr", {
            children: [Ui("th", {
              children: "Metric"
            }), Ui("th", {
              children: "Value"
            })]
          })
        }), Ui("tbody", {
          children: [Ui("tr", {
            children: [Ui("td", {
              children: "Emulation"
            }), Ui("td", {
              children: t + " " + (n ? "(WS)" : "(WA)")
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Uptime"
            }), Ui("td", {
              children: [Math.round((Date.now() - r) / 100) / 10, " s"]
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Cycles/ms"
            }), s <= 0 && Ui("td", {
              children: "~ K"
            }), s > 0 && s <= 1e3 && Ui("td", {
              children: [s, " K"]
            }), s > 1e3 && Ui("td", {
              children: [Math.round(s / 1e3), " KK"]
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "NonSkipSleep COUNT/s"
            }), Ui("td", {
              children: i.nonSkippableSleepPreSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Sleep COUNT/s"
            }), Ui("td", {
              children: i.sleepPerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Sleep TIME/s"
            }), Ui("td", {
              children: i.sleepTimePerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Msg FRAME/s"
            }), Ui("td", {
              children: i.framePerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Msg SOUND/s"
            }), Ui("td", {
              children: i.soundPerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Msg SENT/s"
            }), Ui("td", {
              children: i.msgSentPerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Msg RECV/s"
            }), Ui("td", {
              children: i.msgRecvPerSec
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Net SENT/s"
            }), Ui("td", {
              children: [Math.round(i.netSent / 1024 * 100) / 100, "Kb"]
            })]
          }), Ui("tr", {
            children: [Ui("td", {
              children: "Net RECV/s"
            }), Ui("td", {
              children: [Math.round(i.netRecv / 1024 * 100) / 100, "Kb"]
            })]
          }), i.driveIo.map(function (e, t) {
            return Ui(g, {
              children: [Ui("tr", {
                children: [Ui("td", {
                  children: ["HDD ", 0 == t ? "C:" : "D:"]
                }), Ui("td", {
                  children: [e.url.substring(e.url.lastIndexOf("/") + 1), " -", Math.round(100 * e.read / e.total), "%"]
                })]
              }), Ui("tr", {
                children: [Ui("td", {
                  children: "Size"
                }), Ui("td", {
                  children: [Math.round(e.total / 1024 / 1024), " Mb ", Ui("br", {}), Math.round(e.write / 1024), " Kb"]
                })]
              })]
            });
          })]
        })]
      })
    })]
  });
}
var Cs = document.createElement("input");
function Ss(e) {
  var _t24 = function t() {
    Cs.removeEventListener("change", _t24), e(Cs);
  };
  Cs.addEventListener("change", _t24), Cs.click();
}
function Ps() {
  var e = on(function (e) {
    return e.dos.emuVersion;
  });
  return Ui("div", {
    "class": "pre-run-window",
    children: [Ui(js, {}), Ui(Ms, {}), Ui("span", {
      "class": "mt-4 bottom-3 text-ellipsis overflow-hidden text-sm text-neutral/80",
      children: ["js-", "8.3.20", "/emu-", e.substring(0, e.indexOf(" "))]
    })]
  });
}
function Es() {
  var _ref9, _ref0;
  var e, t, n, o;
  var r = Wr(),
    i = mi(),
    _ie11 = ie(!1),
    _ie12 = _slicedToArray(_ie11, 2),
    s = _ie12[0],
    a = _ie12[1],
    c = null == (e = i.loadedBundle) ? void 0 : e.bundleUrl,
    l = null == (t = i.loadedBundle) ? void 0 : t.bundleChangesUrl,
    u = (_ref9 = null == (n = i.loadedBundle) ? void 0 : n.appliedBundleChanges) !== null && _ref9 !== void 0 ? _ref9 : null,
    d = (_ref0 = null == (o = i.loadedBundle) ? void 0 : o.bundleChanges) !== null && _ref0 !== void 0 ? _ref0 : u,
    p = null !== d,
    f = on(function (e) {
      return e.auth.account;
    }),
    h = Qn(),
    m = eo();
  if (null === c || null === l) return null;
  if (s) return Ui("span", {
    "class": "loading loading-spinner loading-md"
  });
  var v = Ui("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: "padding: 2px",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16",
    fill: "currentColor",
    "class": "w-4 h-4 ",
    children: Ui("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
    })
  });
  if (p) return Ui("div", {
    "class": "flex flex-row items-baseline gap-1",
    children: [Ui("p", {
      "class": "text-accent",
      children: r("changes_loaded")
    }), Ui("button", {
      "class": "btn btn-ghost btn-xs text-accent underline self-center",
      onClick: function onClick() {
        qi("changes.bin", d, "application/octet-stream");
      },
      children: [v, r("download")]
    }), Ui("button", {
      "class": "btn btn-ghost btn-xs underline -ml-2",
      onClick: function onClick() {
        window.confirm(r("delete_changes_confirm")) && (a(!0), ci().then(/*#__PURE__*/function () {
          var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(e) {
            var _t25, _t26;
            return _regenerator().w(function (_context11) {
              while (1) switch (_context11.n) {
                case 0:
                  _context11.n = 1;
                  return e.del(l);
                case 1:
                  _t25 = null !== u;
                  if (!_t25) {
                    _context11.n = 2;
                    break;
                  }
                  _context11.n = 2;
                  return ji(u, /*#__PURE__*/function () {
                    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(e, t) {
                      var n;
                      return _regenerator().w(function (_context10) {
                        while (1) switch (_context10.n) {
                          case 0:
                            _context10.n = 1;
                            return li(e);
                          case 1:
                            n = _context10.v;
                            _context10.n = 2;
                            return n.del(0);
                          case 2:
                            n.close();
                          case 3:
                            return _context10.a(2);
                        }
                      }, _callee10);
                    }));
                    return function (_x27, _x28) {
                      return _ref10.apply(this, arguments);
                    };
                  }());
                case 2:
                  _t26 = Mi(f, null) && l;
                  if (!_t26) {
                    _context11.n = 3;
                    break;
                  }
                  _context11.n = 3;
                  return fetch(ei + "?bundleUrl=" + encodeURIComponent(l));
                case 3:
                  _context11.n = 4;
                  return Ii(c, h);
                case 4:
                  return _context11.a(2);
              }
            }, _callee11);
          }));
          return function (_x26) {
            return _ref1.apply(this, arguments);
          };
        }())["catch"](function (e) {
          console.error(e), m(Zr.actions.showToast({
            message: r("error_deleting_changes"),
            intent: "error"
          }));
        })["finally"](function () {
          return a(!1);
        }));
      },
      children: r("delete")
    })]
  });
  function y(_x29) {
    return _y.apply(this, arguments);
  }
  function _y() {
    _y = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(e) {
      var _t27, _t28, _t29, _t30, _t31, _t32, _t33, _t34, _t35;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            _context12.p = 0;
            if (!(null === e.files || 0 === e.files.length)) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            _t27 = e.files[0];
            _t28 = Oi;
            _t29 = h.getState();
            _t30 = i;
            _t31 = m;
            _t32 = !1;
            _t33 = Uint8Array;
            _context12.n = 2;
            return _t27.arrayBuffer();
          case 2:
            _t34 = _context12.v;
            _context12.n = 3;
            return _t28(_t29, _t30, _t31, _t32, new _t33(_t34));
          case 3:
            _context12.n = 4;
            return Ii(c, h);
          case 4:
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t35 = _context12.v;
            console.error(_t35), m(Zr.actions.showToast({
              message: r("error_uploading_changes"),
              intent: "error"
            }));
          case 6:
            _context12.p = 6;
            a(!1);
            return _context12.f(6);
          case 7:
            return _context12.a(2);
        }
      }, _callee12, null, [[0, 5, 6, 7]]);
    }));
    return _y.apply(this, arguments);
  }
  return Ui("div", {
    "class": "flex flex-row items-baseline gap-1",
    children: [r("no_changes_loaded"), Ui("button", {
      "class": "btn btn-ghost btn-xs text-accent underline self-center",
      onClick: function onClick() {
        a(!0), Ss(y);
      },
      children: [v, r("upload")]
    })]
  });
}
Cs.type = "file";
var Os = "-----";
function Ms() {
  var _ref11, _ref12, _t$name;
  var e = Wr(),
    t = on(function (e) {
      return e.auth.account;
    }),
    n = on(function (e) {
      return e.ui.kiosk;
    }),
    o = on(function (e) {
      return e.ui.noCloud;
    }),
    _ie13 = ie((_ref11 = null == t ? void 0 : t.token) !== null && _ref11 !== void 0 ? _ref11 : ""),
    _ie14 = _slicedToArray(_ie13, 2),
    r = _ie14[0],
    i = _ie14[1],
    s = (_ref12 = null == t ? void 0 : t.premium) !== null && _ref12 !== void 0 ? _ref12 : !1,
    a = mi(),
    c = on(function (e) {
      return e.ui.warnOnKey;
    }),
    l = on(function (e) {
      return e.ui.warnOnPremium;
    }),
    u = eo(),
    d = Qn();
  if (n) return null;
  function p(e) {
    e !== Os && (u(Zr.actions.warnOnKey(!1)), u(Zr.actions.warnOnPremium(!1)), Os = e, i(e), ri(e).then(function (_ref13) {
      var e = _ref13.token,
        t = _ref13.account;
      e === Os && (u(oi.actions.setAccount(t)), null !== t && a.options.url ? Ii(a.options.url, d)["catch"](function (e) {
        d.dispatch(Ci.actions.bndError(e.message));
      }) : null === t && 5 === e.length && i(""));
    })["catch"](console.error));
  }
  function f() {
    u(Zr.actions.autoStart(!1)), vi(a, "open-key");
  }
  ae(function () {
    ri(r).then(function (_ref14) {
      var e = _ref14.token,
        t = _ref14.account;
      u(oi.actions.setAccount(t));
    });
  }, []);
  var h = "dz.caiiiycuk@gmail.com" === (null == t ? void 0 : t.email);
  return Ui("div", {
    "class": "bg-base-200/80 mx-4 my-5 px-8 py-4 flex flex-col gap-2 items-center rounded-xl",
    children: Ui("div", {
      "class": "mt-4 flex flex-col items-center gap-2",
      children: [null === t && e("hello_guest"), null !== t && Ui("div", {
        "class": h ? "bg-warning px-2" : "",
        children: [e("hello") + ", " + (h ? "DOS Zone" : (_t$name = t.name) !== null && _t$name !== void 0 ? _t$name : t.email) + "!", Ui("span", {
          "class": "link link-neutral lowercase inline ml-1",
          onClick: function onClick() {
            p(""), u(Zr.actions.autoStart(!1));
          },
          children: ["(", e("logout"), ")"]
        })]
      }), Ui(Es, {}), !o && Ui(g, {
        children: [Ui("div", {
          "class": "mt-2",
          children: null === t && Ui(g, {
            children: [e("no_cloud_access"), Ui("a", {
              href: "https://v8.js-dos.com/key",
              onClick: f,
              target: "_blank",
              "class": "link link-warning ml-1",
              children: e("key")
            }), "Â ", e("no_cloud_access2"), "."]
          })
        }), !1 === s && Ui(g, {
          children: Ui("span", {
            "class": "text-xs",
            children: [e("no_cloud_access3"), null !== t && Ui("a", {
              href: "https://v8.js-dos.com/key",
              onClick: f,
              target: "_blank",
              "class": "link ml-1 lowercase " + (l ? "" : "link-warning"),
              children: ["(", e("fix"), ")"]
            })]
          })
        }), null === t && Ui("div", {
          "class": "-ml-4",
          children: Ui("input", {
            maxLength: 5,
            value: r,
            onChange: function onChange(e) {
              return p(e.currentTarget.value);
            },
            placeholder: "-----",
            "class": "input input-bordered mt-4 mb-4 text-center w-24 bg-blend-multiply bg-opacity-40" + (c ? " input-warning " : ""),
            onClick: function onClick() {
              return u(Zr.actions.autoStart(!1));
            }
          })
        })]
      })]
    })
  });
}
function js(e) {
  var t = on(function (e) {
      return e.editor.configChanged;
    }),
    n = on(function (e) {
      return e.editor.bundleConfig;
    }),
    o = on(function (e) {
      return "none" !== e.ui.frame;
    }),
    r = on(function (e) {
      return e.ui.countDownStart;
    }),
    i = on(function (e) {
      return e.ui.autoStart;
    }),
    s = on(function (e) {
      return e.ui.editor;
    }),
    _ie15 = ie(r),
    _ie16 = _slicedToArray(_ie15, 2),
    a = _ie16[0],
    c = _ie16[1],
    _ie17 = ie(i),
    _ie18 = _slicedToArray(_ie17, 2),
    l = _ie18[0],
    u = _ie18[1],
    d = mi(),
    p = eo(),
    f = Wr(),
    h = l && !o && !s;
  function m() {
    return _m.apply(this, arguments);
  }
  function _m() {
    _m = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var e, _t36, _r2, _o$message, _t37;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (!t) {
              _context13.n = 5;
              break;
            }
            _t36 = n, _r2 = null == (e = d.loadedBundle) ? void 0 : e.bundle;
            if (!(null === _r2 || null === _t36 || !ArrayBuffer.isView(_r2))) {
              _context13.n = 1;
              break;
            }
            throw new Error("Unexpected behaviour (internal state is broken), bundle is null");
          case 1:
            _context13.p = 1;
            _context13.n = 2;
            return emulators.bundleUpdateConfig(_r2, _t36);
          case 2:
            d.loadedBundle.bundle = _context13.v;
            p(Ci.actions.bndPlay({}));
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t37 = _context13.v;
            p(Ci.actions.bndError((_o$message = _t37.message) !== null && _o$message !== void 0 ? _o$message : "unexpected error"));
          case 4:
            _context13.n = 6;
            break;
          case 5:
            p(Ci.actions.bndPlay({}));
          case 6:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 3]]);
    }));
    return _m.apply(this, arguments);
  }
  return ae(function () {
    if (r > 0 && a > 0 && h) {
      var _e8 = setTimeout(function () {
        c(a - 1);
      }, 1e3);
      return function () {
        return clearInterval(_e8);
      };
    }
    0 === a && r > 0 && h && p(Ci.actions.bndPlay({}));
  }, [a, r, h]), ae(function () {
    u(i);
  }, [i]), !0 === e.button ? Ui("div", {
    "class": "btn btn-accent w-full sm:hidden",
    onClick: m,
    children: [Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-6 h-6",
      children: [Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }), Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
      })]
    }), f("play")]
  }) : Ui("div", {
    "class": e["class"] + " relative cursor-pointer w-1/4 h-1/4 min-w-48 min-h-48 max-w-96 max-h-96",
    children: [Ui("div", {
      "class": "relative",
      children: [Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-full h-full play-button",
        onClick: m,
        children: [Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }), Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        })]
      }), r > 0 && h && Ui("div", {
        "class": "absolute top-0 right-0 translate-x-1/2 w-12 h-12 opacity-90 cursor-pointer flex items-center justify-center text-2xl font-bold bg-primary text-primary-content rounded-full animate-pulse cound-down-start",
        onClick: function onClick() {
          return u(!1);
        },
        children: [Ui("div", {
          children: a
        }), Ui("div", {
          children: Ui("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "class": "size-12",
            children: Ui("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            })
          })
        })]
      })]
    }), Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-10 h-10 absolute right-0 bottom-0 cursor-pointer" + (o ? " sidebar-highlight" : ""),
      onClick: function onClick(e) {
        p(o ? Zr.actions.frameNone() : Zr.actions.framePreRun()), e.stopPropagation();
      },
      children: [Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      }), Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      })]
    })]
  });
}
function Ds(e) {
  return Ui("div", {
    "class": "prerun-frame frame-root items-start pl-4",
    children: [Ui(js, {
      button: !0
    }), Ui(ss, {}), Ui(is, {}), Ui(as, {}), Ui(cs, {}), Ui(gs, {
      "class": "mt-4"
    }), Ui(bs, {}), Ui(ws, {}), Ui(ps, {
      multiline: !0
    }), Ui(us, {}), Ui(fs, {
      multiline: !0
    }), Ui(hs, {
      multiline: !0
    }), Ui(ds, {}), Ui(rs, {}), Ui(vs, {
      multiline: !0
    })]
  });
}
function As(e) {
  var t = on(function (e) {
      return e.ui.frame;
    }),
    n = on(function (e) {
      return e.ui.frameXs;
    }),
    o = on(function (e) {
      return e.ui.wideScreen;
    });
  return "none" === t ? null : Ui("div", {
    "class": "frame " + (n ? " frame-xs " : "") + (n || o ? "" : " frame-md"),
    children: ["settings" === t && Ui(ks, {}), "editor-conf" === t && Ui(Hi, {}), "editor-fs" === t && Ui(Xi, {}), "network" === t && Ui(os, {}), "stats" === t && Ui(xs, {}), "prerun" === t && Ui(Ds, {})]
  });
}
function Ts(e, t) {
  _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
    var n, o, r;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          n = t.getState().ui.softFullscreen, o = hi(t), r = o.root;
          if (!e) {
            _context14.n = 13;
            break;
          }
          if (!n) {
            _context14.n = 1;
            break;
          }
          r.classList.add("jsdos-fullscreen-workaround");
          _context14.n = 12;
          break;
        case 1:
          if (!r.requestFullscreen) {
            _context14.n = 3;
            break;
          }
          _context14.n = 2;
          return r.requestFullscreen();
        case 2:
          _context14.n = 12;
          break;
        case 3:
          if (!r.webkitRequestFullscreen) {
            _context14.n = 5;
            break;
          }
          _context14.n = 4;
          return r.webkitRequestFullscreen();
        case 4:
          _context14.n = 12;
          break;
        case 5:
          if (!r.mozRequestFullScreen) {
            _context14.n = 7;
            break;
          }
          _context14.n = 6;
          return r.mozRequestFullScreen();
        case 6:
          _context14.n = 12;
          break;
        case 7:
          if (!r.msRequestFullscreen) {
            _context14.n = 9;
            break;
          }
          _context14.n = 8;
          return r.msRequestFullscreen();
        case 8:
          _context14.n = 12;
          break;
        case 9:
          if (!r.webkitEnterFullscreen) {
            _context14.n = 11;
            break;
          }
          _context14.n = 10;
          return r.webkitEnterFullscreen();
        case 10:
          _context14.n = 12;
          break;
        case 11:
          r.classList.add("jsdos-fullscreen-workaround");
        case 12:
          _context14.n = 14;
          break;
        case 13:
          r.classList.contains("jsdos-fullscreen-workaround") ? r.classList.remove("jsdos-fullscreen-workaround") : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
        case 14:
          t.dispatch(Zr.actions.setFullScreen(e));
          vi(o, "fullscreen-change", e);
        case 15:
          return _context14.a(2);
      }
    }, _callee14);
  }))()["catch"](function (e) {
    console.error("Can't enter fullscreen", e);
  });
}
function Ls(e) {
  var t = on(function (e) {
      return e.ui.fullScreen;
    }),
    n = Qn();
  return Ui("div", {
    "class": "fullscreen-button sidebar-button " + e["class"],
    onClick: function onClick() {
      Ts(!t, n);
    },
    children: Ui("div", {
      "class": "w-full h-full scale-75 hover:scale-90",
      children: [!t && Ui("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        stroke: "none",
        "enable-background": "new 0 0 16 16",
        children: Ui("g", {
          children: Ui("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z"
          })
        })
      }), t && Ui("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        stroke: "none",
        "enable-background": "new 0 0 16 16",
        children: Ui("g", {
          children: Ui("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.99,0.99c0-0.55-0.45-1-1-1c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29V1.99 c0-0.55-0.45-1-1-1s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1.59L15.7,1.7 C15.88,1.52,15.99,1.27,15.99,0.99z M5.99,8.99h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59l-3.29,3.29c-0.18,0.18-0.29,0.43-0.29,0.71 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C6.99,9.44,6.54,8.99,5.99,8.99z"
          })
        })
      })]
    })
  });
}
function zs(e) {
  var t = "network" === on(function (e) {
      return e.ui.frame;
    }),
    n = on(function (e) {
      return "connected" !== e.dos.ipx.status;
    }),
    o = eo();
  return Ui("div", {
    "class": "network-button sidebar-button " + (t ? " sidebar-highlight " : "") + (n ? " inactive " : "") + e["class"],
    onClick: function onClick() {
      o(t ? Zr.actions.frameNone() : Zr.actions.frameNetwork());
    },
    children: Ui("div", {
      "class": "w-full h-full",
      children: [Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-full h-full",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
        })
      }), n && Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-full text-error h-full absolute top-0 left-0",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M4 4L18 18"
        })
      })]
    })
  });
}
function Bs(e) {
  return Ui(Fs, {
    "class": e["class"],
    frame: "editor-conf",
    action: Zr.actions.frameConf(),
    children: Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-full h-full",
      children: Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      })
    })
  });
}
function Is(e) {
  return Ui(Fs, {
    "class": e["class"],
    frame: "editor-fs",
    action: Zr.actions.frameFs(),
    children: Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-full h-full",
      children: Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
      })
    })
  });
}
function Ns() {
  var e = Math.round(on(function (e) {
    return e.dos.stats.cyclesPerMs;
  }) / 1e3);
  return Ui(Fs, {
    "class": "cycles",
    frame: "stats",
    action: Zr.actions.frameStats(),
    children: [e <= 0 && Ui(g, {
      children: [Ui("span", {
        children: "~"
      }), Ui("sup", {
        children: "KC"
      })]
    }), e > 0 && e <= 1e3 && Ui(g, {
      children: [Ui("span", {
        children: e
      }), Ui("sup", {
        children: "KC"
      })]
    }), e > 0 && e > 1e3 && Ui(g, {
      children: [Ui("span", {
        children: Math.round(e / 1e3)
      }), Ui("sup", {
        children: [Ui("strong", {
          children: "K"
        }), "KC"]
      })]
    })]
  });
}
function Rs(e) {
  var t = Qn(),
    n = le(null),
    _ie19 = ie({
      recv: 0,
      enabled: !1,
      delayLedTo: 0
    }),
    _ie20 = _slicedToArray(_ie19, 1),
    o = _ie20[0];
  ae(function () {
    if (n.current) {
      var _e9 = n.current;
      _e9.classList.add("bg-base-300");
      var _r3 = setInterval(function () {
        if (o.delayLedTo <= Date.now()) {
          var _n9 = yi(t).dos.stats.msgSentPerSec,
            _r4 = o.recv !== _n9;
          _r4 !== o.enabled && (_e9.classList.remove("bg-base-300", "bg-green-300", "animate-led"), _r4 ? _e9.classList.add("bg-green-300", "animate-led") : _e9.classList.add("bg-base-300"), o.enabled = _r4), o.delayLedTo = _r4 ? Date.now() + 300 + 1500 * Math.random() : 0, o.recv = _n9;
        }
      }, 150);
      return function () {
        _e9.classList.remove("bg-base-300", "bg-green-300", "animate-led"), clearInterval(_r3);
      };
    }
  }, [n, o]);
  var _ie21 = ie(!1),
    _ie22 = _slicedToArray(_ie21, 2),
    r = _ie22[0],
    i = _ie22[1],
    _ie23 = ie({
      recv: 0,
      timeoutId: null
    }),
    _ie24 = _slicedToArray(_ie23, 2),
    s = _ie24[0],
    a = _ie24[1],
    c = on(function (e) {
      return e.dos.stats.msgRecvPerSec;
    });
  if (s.recv !== c) {
    r || i(!0), s.timeoutId && clearTimeout(s.timeoutId);
    var _e0 = setTimeout(function () {
      i(!1), a({
        recv: c,
        timeoutId: null
      });
    }, 1e3);
    a({
      recv: c,
      timeoutId: _e0
    });
  }
  return Ui("div", {
    ref: n,
    "class": "self-end mr-2 -mt-3 w-2 h-1"
  });
}
function Ks(e) {
  return Ui(Fs, {
    "class": e["class"],
    action: Zr.actions.frameSettings(),
    frame: "settings",
    children: Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-full h-full",
      children: [Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      }), Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      })]
    })
  });
}
function Fs(e) {
  var t = on(function (e) {
      return e.ui.frame;
    }) === e.frame,
    n = eo();
  return Ui("div", {
    "class": "sidebar-button " + (t ? "sidebar-highlight " : "") + e["class"],
    onClick: function onClick() {
      n(t ? Zr.actions.frameNone() : e.action);
    },
    children: e.children
  });
}
function Us(e) {
  var t = on(function (e) {
      return e.dos.softKeyboard;
    }),
    n = eo();
  return Ui("div", {
    "class": "sidebar-button " + (t ? "sidebar-highlight " : "") + e["class"],
    onClick: function onClick() {
      return n(Ci.actions.softKeyboard(!t));
    },
    children: Ui("svg", {
      "class": "w-full h-full",
      fill: "currentColor",
      stroke: "currentColor",
      version: "1.1",
      id: "Layer_1",
      viewBox: "0 0 507.9 507.9",
      children: [Ui("g", {
        id: "SVGRepo_bgCarrier",
        "stroke-width": "0"
      }), Ui("g", {
        id: "SVGRepo_tracerCarrier",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), Ui("g", {
        id: "SVGRepo_iconCarrier",
        children: [" ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M465.7,140.75H268.1v-77.3c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v77.3H42.3c-23.3,0-42.3,19-42.3,42.3 v233.2c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-233.2C508,159.75,489,140.75,465.7,140.75z M465.7,430.35H42.3 c-7.8,0-14.1-6.3-14.1-14.1v-233.2c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v233.2h0.1 C479.8,424.05,473.5,430.35,465.7,430.35z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M440.6,194.05h-85.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h85.4c7.8,0,14.1-6.3,14.1-14.1 C454.7,200.35,448.4,194.05,440.6,194.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M80.9,377.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95,383.35,88.7,377.05,80.9,377.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M303.3,377.05H141.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h161.8c7.8,0,14.1-6.3,14.1-14.1 C317.5,383.35,311.1,377.05,303.3,377.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M80.9,255.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,261.35,88.7,255.05,80.9,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M152.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,261.35,160.6,255.05,152.8,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M224.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,261.35,232.6,255.05,224.8,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M296.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,261.35,304.5,255.05,296.7,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M80.9,194.05H67.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,200.35,88.7,194.05,80.9,194.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M152.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,200.35,160.6,194.05,152.8,194.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M224.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,200.35,232.6,194.05,224.8,194.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M296.7,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,200.35,304.5,194.05,296.7,194.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M368.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,261.35,376.4,255.05,368.7,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M440.6,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,261.35,448.4,255.05,440.6,255.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M368.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,322.35,376.4,316.05,368.7,316.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M440.6,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,322.35,448.4,316.05,440.6,316.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M368.7,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,383.35,376.4,377.05,368.7,377.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M440.6,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,383.35,448.4,377.05,440.6,377.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M80.9,316.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,322.35,88.7,316.05,80.9,316.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M152.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,322.35,160.6,316.05,152.8,316.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M224.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,322.35,232.6,316.05,224.8,316.05z"
            }), " "]
          }), " "]
        }), " ", Ui("g", {
          children: [" ", Ui("g", {
            children: [" ", Ui("path", {
              d: "M296.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,322.35,304.5,316.05,296.7,316.05z"
            }), " "]
          }), " "]
        }), " "]
      })]
    })
  });
}
function Hs(e) {
  return Ui(Fs, {
    "class": e["class"],
    frame: "prerun",
    action: Zr.actions.framePreRun(),
    children: Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-full h-full",
      children: [Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      }), Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      })]
    })
  });
}
function Vs(e) {
  return Ui("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: "padding: 2px",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16",
    fill: "currentColor",
    "class": "w-full h-full rounded-lg " + e["class"],
    children: Ui("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
    })
  });
}
function Ws() {
  var e = on(function (e) {
      return e.ui.haveQuickSave;
    }),
    t = "dosboxX" === on(function (e) {
      return e.dos.backend;
    });
  return Ui("div", {
    "class": "save-buttons flex flex-col justify-center items-center -my-2",
    children: [Ui(Gs, {}), t && Ui(qs, {
      label: "X",
      bgcolor: "bg-primary",
      textcolor: "text-primary-content"
    }), t && e && Ui(Xs, {
      label: "X",
      bgcolor: "bg-primary"
    })]
  });
}
function qs(e) {
  var t = mi(),
    n = eo();
  return Ui("div", {
    "class": "sidebar-button flex justify-center",
    onClick: function onClick() {
      var e = t.ci;
      null !== e && (Ti(e), n(Zr.actions.setHaveQuickSave(!0)));
    },
    children: [Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "absolute left-0 bottom-0 w-6 h-6 opacity-30",
      children: Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      })
    }), Ui("p", {
      "class": "absolute top-0 right-0 font-bold",
      children: "F6"
    })]
  });
}
function Xs(e) {
  var t = mi();
  return Ui("div", {
    "class": "sidebar-button flex justify-center",
    onClick: function onClick() {
      var e = t.ci;
      null !== e && Li(e);
    },
    children: [Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "absolute left-0 bottom-0  w-6 h-6 -scale-y-100 opacity-30",
      children: Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
      })
    }), Ui("p", {
      "class": "absolute top-0 right-0 font-bold",
      children: "F7"
    })]
  });
}
function Gs(e) {
  var _ie25 = ie(!1),
    _ie26 = _slicedToArray(_ie25, 2),
    t = _ie26[0],
    n = _ie26[1],
    o = eo(),
    r = on(function (e) {
      return e.ui.canSave;
    }),
    i = mi(),
    s = Qn();
  if (!r || null === i.loadedBundle || null === i.loadedBundle.bundleChangesUrl) return null;
  return Ui("div", {
    "class": "save-button sidebar-button overflow-hidden " + (t ? " sidebar-highlight " : "") + e["class"],
    onClick: function onClick() {
      t || (n(!0), Oi(yi(s), i, o)["finally"](function () {
        return n(!1);
      }));
    },
    children: Ui("div", {
      "class": "w-full h-full flex justify-center",
      children: [Ui(Vs, {}), t && Ui("div", {
        "class": "sidebar-badge"
      })]
    })
  });
}
function $s(e) {
  var t = on(function (e) {
      return e.ui.window;
    }),
    n = on(function (e) {
      return e.ui.editor;
    }),
    o = on(function (e) {
      return e.ui.kiosk;
    }),
    r = !on(function (e) {
      return e.ui.noNetworking;
    }),
    i = "none" !== on(function (e) {
      return e.ui.frame;
    }),
    s = on(function (e) {
      return e.dos.mouseCapture;
    }),
    a = on(function (e) {
      return e.ui.thinSidebar;
    }),
    c = eo();
  return o ? null : Ui("div", a ? {
    "class": "sidebar-thin",
    children: [Ui("div", {
      "class": "cursor-pointer hover:bg-base-100 w-full h-full flex flex-col items-center justify-center gap-1",
      onClick: function onClick() {
        c(Zr.actions.thinSidebar(!1));
      },
      children: Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "w-4 h-4",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        })
      })
    }), !i && "run" === t && s && Ui(Ys, {})]
  } : {
    "class": "sidebar",
    children: ["run" === t && Ui(Ws, {}), "run" === t && Ui(Us, {}), "run" === t && r && Ui(zs, {}), n && "prerun" === t && Ui(Bs, {}), n && "run" === t && Ui(Is, {}), Ui("div", {
      "class": "contentbar"
    }), "run" === t && Ui(Ls, {}), "run" === t && Ui(Ns, {}), "run" === t && Ui(Rs, {}), "prerun" === t && Ui(Hs, {}), "run" === t && Ui(Ks, {}), !i && "run" === t && s && Ui(Ys, {})]
  });
}
function Ys(e) {
  var t = on(function (e) {
      return e.dos.mouseSensitivity;
    }),
    n = eo();
  return Ui("div", {
    "class": "sidebar-slider",
    children: Ui(_s, {
      bgClass: "bg-base-300",
      vertical: !0,
      label: "",
      value: t,
      onChange: function onChange(e) {
        n(Ci.actions.mouseSensitivity(e));
      },
      children: Ui("svg", {
        "class": "w-6 h-6",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Ui("path", {
          d: "M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })
      })
    })
  });
}
var Zs = 48,
  Qs = 290,
  Js = 291,
  ea = 292,
  ta = 293,
  na = 294,
  oa = 295,
  ra = 296,
  ia = 297,
  sa = 298,
  aa = 299,
  ca = 300,
  la = 301,
  ua = 320,
  da = 321,
  pa = 322,
  fa = 323,
  ha = 324,
  ma = 325,
  va = 326,
  ya = 327,
  _a = 328,
  ga = 329,
  ba = 256,
  wa = 258,
  ka = 259,
  xa = 257,
  Ca = 342,
  Sa = 341,
  Pa = 340,
  Ea = 61,
  Oa = 268,
  Ma = 266,
  ja = 261,
  Da = 269,
  Aa = 267,
  Ta = 263,
  La = 265,
  za = 264,
  Ba = 262,
  Ia = {
    8: 259,
    9: 258,
    13: 257,
    16: Pa,
    17: Sa,
    18: Ca,
    19: 284,
    27: 256,
    32: 32,
    33: 266,
    34: 267,
    35: 269,
    36: 268,
    37: 263,
    38: 265,
    39: 262,
    40: 264,
    45: 260,
    46: 261,
    48: 48,
    49: 49,
    50: 50,
    51: 51,
    52: 52,
    53: 53,
    54: 54,
    55: 55,
    56: 56,
    57: 57,
    59: 59,
    64: 61,
    65: 65,
    66: 66,
    67: 67,
    68: 68,
    69: 69,
    70: 70,
    71: 71,
    72: 72,
    73: 73,
    74: 74,
    75: 75,
    76: 76,
    77: 77,
    78: 78,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83,
    84: 84,
    85: 85,
    86: 86,
    87: 87,
    88: 88,
    89: 89,
    90: 90,
    91: 91,
    93: 93,
    96: 320,
    97: 321,
    98: 322,
    99: 323,
    100: 324,
    101: 325,
    102: 326,
    103: 327,
    104: 328,
    105: 329,
    106: 332,
    111: 331,
    112: 290,
    113: 291,
    114: 292,
    115: 293,
    116: 294,
    117: 295,
    118: 296,
    119: 297,
    120: 298,
    121: 299,
    122: 300,
    123: 301,
    144: 282,
    145: 281,
    173: 45,
    186: 59,
    187: 61,
    188: 44,
    189: 45,
    190: 46,
    191: 47,
    192: 96,
    219: 91,
    220: 92,
    221: 93,
    222: 39
  },
  Na = {
    KBD_NONE: 0,
    KBD_0: 48,
    KBD_1: 49,
    KBD_2: 50,
    KBD_3: 51,
    KBD_4: 52,
    KBD_5: 53,
    KBD_6: 54,
    KBD_7: 55,
    KBD_8: 56,
    KBD_9: 57,
    KBD_a: 65,
    KBD_b: 66,
    KBD_c: 67,
    KBD_d: 68,
    KBD_e: 69,
    KBD_f: 70,
    KBD_g: 71,
    KBD_h: 72,
    KBD_i: 73,
    KBD_j: 74,
    KBD_k: 75,
    KBD_l: 76,
    KBD_m: 77,
    KBD_n: 78,
    KBD_o: 79,
    KBD_p: 80,
    KBD_q: 81,
    KBD_r: 82,
    KBD_s: 83,
    KBD_t: 84,
    KBD_u: 85,
    KBD_v: 86,
    KBD_w: 87,
    KBD_x: 88,
    KBD_y: 89,
    KBD_z: 90,
    KBD_f1: 290,
    KBD_f2: 291,
    KBD_f3: 292,
    KBD_f4: 293,
    KBD_f5: 294,
    KBD_f6: 295,
    KBD_f7: 296,
    KBD_f8: 297,
    KBD_f9: 298,
    KBD_f10: 299,
    KBD_f11: 300,
    KBD_f12: 301,
    KBD_kp0: 320,
    KBD_kp1: 321,
    KBD_kp2: 322,
    KBD_kp3: 323,
    KBD_kp4: 324,
    KBD_kp5: 325,
    KBD_kp6: 326,
    KBD_kp7: 327,
    KBD_kp8: 328,
    KBD_kp9: 329,
    KBD_kpperiod: 330,
    KBD_kpdivide: 331,
    KBD_kpmultiply: 332,
    KBD_kpminus: 333,
    KBD_kpplus: 334,
    KBD_kpenter: 335,
    KBD_esc: 256,
    KBD_tab: 258,
    KBD_backspace: 259,
    KBD_enter: 257,
    KBD_space: 32,
    KBD_leftalt: Ca,
    KBD_rightalt: 346,
    KBD_leftctrl: Sa,
    KBD_rightctrl: 345,
    KBD_leftshift: Pa,
    KBD_rightshift: 344,
    KBD_capslock: 280,
    KBD_scrolllock: 281,
    KBD_numlock: 282,
    KBD_grave: 96,
    KBD_minus: 45,
    KBD_equals: 61,
    KBD_backslash: 92,
    KBD_leftbracket: 91,
    KBD_rightbracket: 93,
    KBD_semicolon: 59,
    KBD_quote: 39,
    KBD_period: 46,
    KBD_comma: 44,
    KBD_slash: 47,
    KBD_printscreen: 283,
    KBD_pause: 284,
    KBD_insert: 260,
    KBD_home: 268,
    KBD_pageup: 266,
    KBD_delete: 261,
    KBD_end: 269,
    KBD_pagedown: 267,
    KBD_left: 263,
    KBD_up: 265,
    KBD_down: 264,
    KBD_right: 262,
    KBD_extra_lt_gt: 348
  },
  Ra = {
    16: {
      1: Pa,
      2: 344
    },
    17: {
      1: Sa,
      2: 345
    },
    18: {
      1: Ca,
      2: 346
    }
  };
function Ka(e, t) {
  var _ref16, _ref17;
  var n;
  return (_ref16 = (_ref17 = null == (n = Ra[e]) ? void 0 : n[t]) !== null && _ref17 !== void 0 ? _ref17 : Ia[e]) !== null && _ref16 !== void 0 ? _ref16 : 0;
}
function Fa(e, t, n, o) {
  var r = e.parentElement.getBoundingClientRect(),
    i = r.width,
    s = r.height;
  if (0 === n) return;
  var a = 65535 === o ? i / s : o !== null && o !== void 0 ? o : t / n;
  var c = i,
    l = i / a;
  l > s && (l = s, c = s * a), e.style.position = "relative", e.style.top = (s - l) / 2 + "px", e.style.left = (i - c) / 2 + "px", e.style.width = c + "px", e.style.height = l + "px";
}
function Ua(e, t, n, o) {
  var _n$gl;
  var r = (_n$gl = n.gl) !== null && _n$gl !== void 0 ? _n$gl : e.getContext("webgl");
  if (null === r) throw new Error("Unable to create webgl context on given canvas");
  n.gl = r;
  var i = function (e, t, n) {
      var o = Ha(e, e.VERTEX_SHADER, t),
        r = Ha(e, e.FRAGMENT_SHADER, n),
        i = e.createProgram();
      if (e.attachShader(i, o), e.attachShader(i, r), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) throw new Error("Unable to initialize the shader program: " + e.getProgramInfoLog(i));
      return i;
    }(r, "\nattribute vec4 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main(void) {\n  gl_Position = aVertexPosition;\n  vTextureCoord = aTextureCoord;\n}\n", "\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\n\nvoid main(void) {\n  highp vec4 color = texture2D(uSampler, vTextureCoord);\n  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);\n}\n"),
    s = r.getAttribLocation(i, "aVertexPosition"),
    a = r.getAttribLocation(i, "aTextureCoord"),
    c = r.getUniformLocation(i, "uSampler");
  !function (e, t, n) {
    var o = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, o);
    var r = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW), e.vertexAttribPointer(t, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(t);
    var i = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, i);
    var s = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(s), e.STATIC_DRAW), e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(n);
  }(r, s, a);
  var l = r.createTexture();
  r.bindTexture(r.TEXTURE_2D, l), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
  var u = new Uint8Array([0, 0, 0]);
  r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, u), r.useProgram(i), r.activeTexture(r.TEXTURE0), r.uniform1i(c, 0);
  var d = 0,
    p = 0,
    f = null,
    h = null,
    m = 0;
  var v = function v() {
      null !== h && (r.texImage2D(r.TEXTURE_2D, 0, m, d, p, 0, m, r.UNSIGNED_BYTE, h), h = null), r.drawArrays(r.TRIANGLES, 0, 6), f = null;
    },
    y = function y() {
      Fa(e, d, p, o);
    },
    _ = function _(t, n) {
      d = t, p = n, e.width = d, e.height = p, h = null, r.viewport(0, 0, d, p), y();
    };
  t.events().onFrameSize(_), t.events().onFrame(function (e, t) {
    h = null != e ? e : t, m = null != e ? r.RGB : r.RGBA, null === f && (f = requestAnimationFrame(v));
  }), _(t.width(), t.height());
  var g = new ResizeObserver(y);
  return g.observe(e.parentElement), window.addEventListener("resize", y), function () {
    n.gl = null, t.events().onFrameSize(function () {}), t.events().onFrame(function () {}), g.disconnect(), window.removeEventListener("resize", y);
  };
}
function Ha(e, t, n) {
  var o = e.createShader(t);
  if (e.shaderSource(o, n), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
    var _t38 = e.getShaderInfoLog(o);
    throw e.deleteShader(o), new Error("An error occurred compiling the shaders: " + _t38);
  }
  return o;
}
function Va(e, t, n) {
  var o = e.getContext("2d");
  if (null === o) throw new Error("Unable to create 2d context on given canvas");
  var r = 0,
    i = 0;
  var s = function s() {
    Fa(e, r, i, n);
  };
  var a = new Uint8ClampedArray(0);
  var c = function c(t, n) {
    r = t, i = n, e.width = r, e.height = i, a = new Uint8ClampedArray(t * n * 4), s();
  };
  t.events().onFrameSize(c), t.events().onFrame(function (e, t) {
    if (null === e && null === t) return;
    var n = null !== e ? e : t;
    var s = 0,
      c = 0;
    for (; c < a.length;) a[c++] = n[s++], a[c++] = n[s++], a[c++] = n[s++], a[c++] = 255, n.length === a.length && s++;
    o.putImageData(new ImageData(a, r, i), 0, 0);
  }), c(t.width(), t.height());
  var l = new ResizeObserver(s);
  return l.observe(e.parentElement), window.addEventListener("resize", s), function () {
    t.events().onFrameSize(function () {}), t.events().onFrame(function () {}), l.disconnect(), window.removeEventListener("resize", s);
  };
}
var Wa = /*#__PURE__*/function () {
  function Wa() {
    _classCallCheck(this, Wa);
    t(this, "samplesQueue", []);
  }
  return _createClass(Wa, [{
    key: "push",
    value: function push(e) {
      this.samplesQueue.push(e);
    }
  }, {
    key: "length",
    value: function length() {
      var e = 0;
      var _iterator0 = _createForOfIteratorHelper(this.samplesQueue),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var _t39 = _step0.value;
          e += _t39.length;
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      return e;
    }
  }, {
    key: "writeTo",
    value: function writeTo(e, t) {
      var n = 0;
      for (; this.samplesQueue.length > 0;) {
        var _o5 = this.samplesQueue[0],
          _r5 = Math.min(t - n, _o5.length);
        if (_r5 === _o5.length ? (e.set(_o5, n), this.samplesQueue.shift()) : (e.set(_o5.slice(0, _r5), n), this.samplesQueue[0] = _o5.slice(_r5)), n += _r5, n === t) break;
      }
      n < t && e.fill(0, n);
    }
  }]);
}();
var qa = {};
function Xa(e, t, n, o) {
  var r = function (e) {
    if (e.type.match(/^touch/)) {
      var _n0 = e,
        _o6 = t.getBoundingClientRect();
      return {
        id: "touch-" + _n0.targetTouches[0].identifier,
        x: _n0.targetTouches[0].clientX - _o6.x,
        y: _n0.targetTouches[0].clientY - _o6.y,
        mX: 0,
        mY: 0
      };
    }
    if (e.type.match(/^pointer/)) {
      var _t40 = e;
      return {
        id: "pointer-" + _t40.pointerId,
        x: _t40.offsetX,
        y: _t40.offsetY,
        mX: _t40.movementX,
        mY: _t40.movementY
      };
    }
    {
      var _t41 = e;
      return {
        id: "mouse",
        x: _t41.offsetX,
        y: _t41.offsetY,
        mX: _t41.movementX,
        mY: _t41.movementY,
        button: 0 === _t41.button ? 0 : 1
      };
    }
  }(e);
  return o || (qa[r.id] ? (r.mX = r.x - qa[r.id].x, r.mY = r.y - qa[r.id].y) : (r.mX = 0, r.mY = 0)), qa[r.id] = {
    x: r.x,
    y: r.y
  }, r.mX = $a(r.mX, n), r.mY = $a(r.mY, n), r;
}
var Ga = function () {
  var e = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
    t = e && !!("ontouchstart" in window),
    n = e && !!window.PointerEvent,
    o = e && !!window.MSPointerEvent;
  var r = !e;
  var i = [],
    s = [],
    a = [],
    c = [],
    l = [];
  return n ? (i.push("pointerdown"), a.push("pointerup", "pointercancel"), s.push("pointermove"), l.push("touchstart", "touchmove", "touchend")) : o ? (i.push("MSPointerDown"), s.push("MSPointerMove"), a.push("MSPointerUp")) : t ? (r = !1, i.push("touchstart", "mousedown"), s.push("touchmove"), a.push("touchend", "touchcancel", "mouseup")) : (i.push("mousedown"), s.push("mousemove"), a.push("mouseup"), c.push("mouseleave")), {
    mobile: e,
    canLock: r,
    starters: i,
    changers: s,
    enders: a,
    prevents: l,
    leavers: c
  };
}();
function $a(e, t) {
  e > 50 ? e = 50 : e < -50 && (e = -50);
  return e *= Math.pow(8, 2 * t - 1);
}
function Ya(e, t, n, o, r, i, s) {
  var a = function a(r) {
      if (r.target !== e) return;
      var i = Xa(r, e, t, n);
      o(i.x, i.y, i.button), r.stopPropagation();
    },
    c = function c(o) {
      if (o.target !== e) return;
      var i = Xa(o, e, t, n);
      r(i.x, i.y, i.mX, i.mY), o.stopPropagation();
    },
    l = function l(o) {
      var r = Xa(o, e, t, n);
      i(r.x, r.y, r.button), o.stopPropagation();
    },
    u = function u(o) {
      if (o.target !== e) return;
      var r = Xa(o, e, t, n);
      s(r.x, r.y), o.stopPropagation();
    },
    d = function d(e) {
      e.stopPropagation();
    },
    p = {
      capture: !1
    };
  var _iterator1 = _createForOfIteratorHelper(Ga.starters),
    _step1;
  try {
    for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
      var _f = _step1.value;
      e.addEventListener(_f, a, p);
    }
  } catch (err) {
    _iterator1.e(err);
  } finally {
    _iterator1.f();
  }
  var _iterator10 = _createForOfIteratorHelper(Ga.changers),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _f2 = _step10.value;
      e.addEventListener(_f2, c, p);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  var _iterator11 = _createForOfIteratorHelper(Ga.enders),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _f3 = _step11.value;
      e.addEventListener(_f3, l, p);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  var _iterator12 = _createForOfIteratorHelper(Ga.prevents),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var _f4 = _step12.value;
      e.addEventListener(_f4, d, p);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  var _iterator13 = _createForOfIteratorHelper(Ga.leavers),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var _f5 = _step13.value;
      e.addEventListener(_f5, u, p);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  return function () {
    var _iterator14 = _createForOfIteratorHelper(Ga.starters),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _t42 = _step14.value;
        e.removeEventListener(_t42, a, p);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    var _iterator15 = _createForOfIteratorHelper(Ga.changers),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _t43 = _step15.value;
        e.removeEventListener(_t43, c, p);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var _iterator16 = _createForOfIteratorHelper(Ga.enders),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _t44 = _step16.value;
        e.removeEventListener(_t44, l, p);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    var _iterator17 = _createForOfIteratorHelper(Ga.prevents),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t45 = _step17.value;
        e.removeEventListener(_t45, d, p);
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    var _iterator18 = _createForOfIteratorHelper(Ga.leavers),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _t46 = _step18.value;
        e.removeEventListener(_t46, u, p);
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  };
}
var Za = .01;
function Qa(e, t, n) {
  var o = function o(e, _o7) {
    return function (e, t, n, o) {
      var _n$getBoundingClientR = n.getBoundingClientRect(),
        r = _n$getBoundingClientR.width,
        i = _n$getBoundingClientR.height,
        s = o.width(),
        a = o.height(),
        c = s / a;
      var l = r,
        u = r / c;
      u > i && (u = i, l = i * c);
      var d = (i - u) / 2,
        p = (r - l) / 2;
      var f = Math.max(0, Math.min(1, (e - p) / l)),
        h = Math.max(0, Math.min(1, (t - d) / u));
      f <= Za && (f = 0);
      f >= .99 && (f = 1);
      h <= Za && (h = 0);
      h >= .99 && (h = 1);
      return {
        x: f,
        y: h
      };
    }(e, _o7, t, n);
  };
  return document.pointerLockElement === t && document.exitPointerLock(), Ya(t, 0, !1, function (t, r, i) {
    var s = o(t, r);
    n.sendMouseMotion(s.x, s.y), n.sendMouseButton(i !== null && i !== void 0 ? i : e, !0);
  }, function (e, t, r, i) {
    var s = o(e, t);
    n.sendMouseMotion(s.x, s.y);
  }, function (t, r, i) {
    var s = o(t, r);
    n.sendMouseMotion(s.x, s.y), n.sendMouseButton(i !== null && i !== void 0 ? i : e, !1);
  }, function (e, t) {
    var r = o(e, t);
    n.sendMouseMotion(r.x, r.y);
  });
}
function Ja(e, t, n, o, r) {
  var i = -1,
    s = 0,
    a = 0,
    c = 0;
  return Ya(o, e, t, function (e, t, n) {
    i = Date.now(), s = 0, a = e, c = t, void 0 !== n && r.sendMouseButton(n, !0);
  }, function (e, t, n, o) {
    void 0 === n && (n = e - a), void 0 === o && (o = t - c), a = e, c = t, 0 === n && 0 === o || (s += Math.abs(n) + Math.abs(o), r.sendMouseRelativeMotion(n, o));
  }, function (e, t, o) {
    if (void 0 !== o) r.sendMouseButton(o, !1);else {
      if (Date.now() - i < 500 && s < 50) {
        var _e1 = o !== null && o !== void 0 ? o : n;
        r.sendMouseButton(_e1, !0), setTimeout(function () {
          return r.sendMouseButton(_e1, !1);
        }, 60);
      }
    }
  }, function () {});
}
function ec(e, t, n, o, r) {
  if (e && !Ga.canLock) return Ja(t, !1, n, o, r);
  if (e) {
    var _e10 = function (e) {
        function t() {
          document.pointerLockElement === e || (e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock).call(e);
        }
        var n = {
          capture: !0
        };
        var _iterator19 = _createForOfIteratorHelper(Ga.starters),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _o9 = _step19.value;
            e.addEventListener(_o9, t, n);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        return function () {
          var _iterator20 = _createForOfIteratorHelper(Ga.starters),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _o8 = _step20.value;
              e.removeEventListener(_o8, t, n);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        };
      }(o),
      _i3 = Ja(t, !0, n, o, r);
    return function () {
      _i3(), _e10();
    };
  }
  return Qa(n, o, r);
}
function tc(e, t) {
  var n = document.createElement("div");
  return n.className = e, void 0 !== t && (n.innerHTML = t), n;
}
var nc = /*#__PURE__*/function () {
  function nc(e, n, o, r) {
    var _this7 = this;
    _classCallCheck(this, nc);
    t(this, "options"), t(this, "root"), t(this, "canvas"), t(this, "mouseOverlay"), t(this, "width"), t(this, "height"), t(this, "keyboardVisible", !1), t(this, "pointerLock", !1), t(this, "pointerDisabled", !1), t(this, "pointerButton", 0), t(this, "toggleKeyboard"), t(this, "onResize"), t(this, "onKeyDown"), t(this, "onKeyUp"), t(this, "onKeyPress"), t(this, "onKeysPress"), this.toggleKeyboard = o, this.options = r, this.root = e, this.root.classList.add("emulator-root"), this.canvas = n, this.canvas.className = "emulator-canvas", this.mouseOverlay = tc("emulator-mouse-overlay", ""), this.root.appendChild(this.mouseOverlay), this.width = e.offsetWidth, this.height = e.offsetHeight, this.onResize = [], this.onKeyDown = function () {}, this.onKeyUp = function () {}, this.onKeyPress = function () {}, this.onKeysPress = function () {}, new ResizeObserver(function (t) {
      var _iterator21 = _createForOfIteratorHelper(t),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _n1 = _step21.value;
          if (_n1.target === e) {
            _this7.width = _n1.contentRect.width, _this7.height = _n1.contentRect.height;
            var _iterator22 = _createForOfIteratorHelper(_this7.onResize),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _e11 = _step22.value;
                _e11(_this7.width, _this7.height);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }).observe(this.root);
  }
  return _createClass(nc, [{
    key: "addOnResize",
    value: function addOnResize(e) {
      this.onResize.push(e);
    }
  }, {
    key: "removeOnResize",
    value: function removeOnResize(e) {
      this.onResize = this.onResize.filter(function (t) {
        return t !== e;
      });
    }
  }, {
    key: "setOnKeyDown",
    value: function setOnKeyDown(e) {
      this.onKeyDown = e;
    }
  }, {
    key: "fireKeyDown",
    value: function fireKeyDown(e) {
      this.onKeyDown(e);
    }
  }, {
    key: "setOnKeyUp",
    value: function setOnKeyUp(e) {
      this.onKeyUp = e;
    }
  }, {
    key: "fireKeyUp",
    value: function fireKeyUp(e) {
      this.onKeyUp(e);
    }
  }, {
    key: "setOnKeyPress",
    value: function setOnKeyPress(e) {
      this.onKeyPress = e;
    }
  }, {
    key: "fireKeyPress",
    value: function fireKeyPress(e) {
      this.onKeyPress(e);
    }
  }, {
    key: "setOnKeysPress",
    value: function setOnKeysPress(e) {
      this.onKeysPress = e;
    }
  }, {
    key: "fireKeysPress",
    value: function fireKeysPress(e) {
      this.onKeysPress(e);
    }
  }]);
}();
function oc(e) {
  return void 0 !== e.layersConfig ? (1 === e.layersConfig.version && function (e) {
    var _iterator23 = _createForOfIteratorHelper(e.layers),
      _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var _t47 = _step23.value;
        var _iterator24 = _createForOfIteratorHelper(_t47.controls),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _e12 = _step24.value;
            if ("Key" === _e12.type) {
              var _t48 = _e12;
              "number" == typeof _t48.mapTo && (_t48.mapTo = [_t48.mapTo]);
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
  }(e.layersConfig), e.layersConfig) : void 0 !== e.layers ? e.layers : null;
}
var rc = function () {
  var e = {};
  for (var _i4 = 0, _Object$keys = Object.keys(Na); _i4 < _Object$keys.length; _i4++) {
    var _t49 = _Object$keys[_i4];
    e[Na[_t49]] = _t49.substr(4, 2);
  }
  return e;
}();
function ic(e, t, n) {
  var o = Math.round(.6 * n),
    r = Math.round(.5 * n),
    i = Math.max(1, Math.round(n / 20)),
    s = fc[e.toLowerCase()],
    a = void 0 === s ? e : "",
    c = sc("emulator-button-touch-zone"),
    l = sc("emulator-button"),
    u = sc("emulator-button-text", void 0 === s ? void 0 === a || 0 === a.length ? "â–¡" : a.substr(0, 1).toUpperCase() : "");
  void 0 !== s && (l.style.backgroundImage = 'url("' + s + '")'), l.style.width = o + "px", l.style.height = o + "px", u.style.fontSize = r + "px", c.widthPx = n - 2 * i, c.heightPx = n - 2 * i, c.style.width = c.widthPx + "px", c.style.height = c.heightPx + "px", c.style.borderWidth = i + "px", c.appendChild(l), c.appendChild(u);
  var d = function d(e) {
      void 0 !== t.onDown && t.onDown(), void 0 !== t.onClick && t.onClick(), e.stopPropagation(), e.preventDefault();
    },
    p = function p(e) {
      void 0 !== t.onUp && t.onUp(), e.stopPropagation(), e.preventDefault();
    },
    f = function f(e) {
      e.stopPropagation(), e.preventDefault();
    },
    h = {
      capture: !0
    };
  var _iterator25 = _createForOfIteratorHelper(Ga.starters),
    _step25;
  try {
    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
      var _m2 = _step25.value;
      c.addEventListener(_m2, d, h);
    }
  } catch (err) {
    _iterator25.e(err);
  } finally {
    _iterator25.f();
  }
  var _iterator26 = _createForOfIteratorHelper(Ga.enders),
    _step26;
  try {
    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
      var _m3 = _step26.value;
      c.addEventListener(_m3, p, h);
    }
  } catch (err) {
    _iterator26.e(err);
  } finally {
    _iterator26.f();
  }
  var _iterator27 = _createForOfIteratorHelper(Ga.changers),
    _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
      var _m4 = _step27.value;
      c.addEventListener(_m4, f, h);
    }
  } catch (err) {
    _iterator27.e(err);
  } finally {
    _iterator27.f();
  }
  var _iterator28 = _createForOfIteratorHelper(Ga.leavers),
    _step28;
  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
      var _m5 = _step28.value;
      c.addEventListener(_m5, f, h);
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }
  var _iterator29 = _createForOfIteratorHelper(Ga.prevents),
    _step29;
  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
      var _m6 = _step29.value;
      c.addEventListener(_m6, f, h);
    }
  } catch (err) {
    _iterator29.e(err);
  } finally {
    _iterator29.f();
  }
  return c;
}
function sc(e, t) {
  var n = document.createElement("div");
  return n.className = e, void 0 !== t && (n.innerHTML = t), n;
}
function ac(e) {
  return "number" == typeof e ? rc[e] : e;
}
function cc(e, t) {
  return "click" === e.action ? {
    onClick: function onClick() {
      return t.fireKeyPress(e.mapTo);
    }
  } : {
    onDown: function onDown() {
      return t.fireKeyDown(e.mapTo);
    },
    onUp: function onUp() {
      return t.fireKeyUp(e.mapTo);
    }
  };
}
var lc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  uc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  dc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  pc = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  fc = {
    fullscreen: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    save: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
    options: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    keyboard: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    up: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    down: lc,
    "do": lc,
    dw: lc,
    dwn: lc,
    left: uc,
    le: uc,
    lft: uc,
    right: dc,
    ri: dc,
    rght: dc,
    rgh: dc,
    enter: pc,
    en: pc,
    enr: pc,
    ent: pc,
    entr: pc
  };
function hc(e, t) {
  var n = e.mouseOverlay,
    o = function o(n, _o0) {
      return function (e, t, n, o) {
        var r = n.width(),
          i = n.height(),
          s = o.width,
          a = o.height,
          c = r / i;
        var l = s,
          u = s / c;
        u > a && (u = a, l = a * c);
        var d = (a - u) / 2,
          p = (s - l) / 2;
        var f = Math.max(0, Math.min(1, (e - p) / l)),
          h = Math.max(0, Math.min(1, (t - d) / u));
        f <= mc && (f = 0);
        f >= 1 - mc && (f = 1);
        h <= mc && (h = 0);
        h >= 1 - mc && (h = 1);
        return {
          x: f,
          y: h
        };
      }(n, _o0, t, e);
    };
  return document.pointerLockElement === n && document.exitPointerLock(), vc(n, e, 0, !1, function (e, n, r) {
    var i = o(e, n);
    t.sendMouseMotion(i.x, i.y), t.sendMouseButton(r, !0);
  }, function (e, n, r, i) {
    var s = o(e, n);
    t.sendMouseMotion(s.x, s.y);
  }, function (e, n, r) {
    var i = o(e, n);
    t.sendMouseMotion(i.x, i.y), t.sendMouseButton(r, !1);
  }, function (e, n) {
    var r = o(e, n);
    t.sendMouseMotion(r.x, r.y);
  });
}
var mc = .01;
function vc(e, t, n, o, r, i, s, a) {
  var c = 0;
  var l = function l(i) {
      if (i.target !== e) return;
      if (t.pointerDisabled) return void i.stopPropagation();
      var s = Xa(i, e, n, o);
      c = s.button || t.pointerButton, r(s.x, s.y, c), i.stopPropagation();
    },
    u = function u(r) {
      if (r.target !== e) return;
      if (t.pointerDisabled) return void r.stopPropagation();
      var s = Xa(r, e, n, o);
      i(s.x, s.y, s.mX, s.mY), r.stopPropagation();
    },
    d = function d(r) {
      if (t.pointerDisabled) return void r.stopPropagation();
      var i = Xa(r, e, n, o);
      s(i.x, i.y, c), r.stopPropagation();
    },
    p = function p(r) {
      if (r.target !== e) return;
      if (t.pointerDisabled) return void r.stopPropagation();
      var i = Xa(r, e, n, o);
      a(i.x, i.y), r.stopPropagation();
    },
    f = function f(e) {
      e.stopPropagation();
    },
    h = {
      capture: !1
    };
  var _iterator30 = _createForOfIteratorHelper(Ga.starters),
    _step30;
  try {
    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
      var _m7 = _step30.value;
      e.addEventListener(_m7, l, h);
    }
  } catch (err) {
    _iterator30.e(err);
  } finally {
    _iterator30.f();
  }
  var _iterator31 = _createForOfIteratorHelper(Ga.changers),
    _step31;
  try {
    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      var _m8 = _step31.value;
      e.addEventListener(_m8, u, h);
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
  }
  var _iterator32 = _createForOfIteratorHelper(Ga.enders),
    _step32;
  try {
    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
      var _m9 = _step32.value;
      e.addEventListener(_m9, d, h);
    }
  } catch (err) {
    _iterator32.e(err);
  } finally {
    _iterator32.f();
  }
  var _iterator33 = _createForOfIteratorHelper(Ga.prevents),
    _step33;
  try {
    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
      var _m0 = _step33.value;
      e.addEventListener(_m0, f, h);
    }
  } catch (err) {
    _iterator33.e(err);
  } finally {
    _iterator33.f();
  }
  var _iterator34 = _createForOfIteratorHelper(Ga.leavers),
    _step34;
  try {
    for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
      var _m1 = _step34.value;
      e.addEventListener(_m1, p, h);
    }
  } catch (err) {
    _iterator34.e(err);
  } finally {
    _iterator34.f();
  }
  return function () {
    var _iterator35 = _createForOfIteratorHelper(Ga.starters),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var _t50 = _step35.value;
        e.removeEventListener(_t50, l, h);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    var _iterator36 = _createForOfIteratorHelper(Ga.changers),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var _t51 = _step36.value;
        e.removeEventListener(_t51, u, h);
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
    var _iterator37 = _createForOfIteratorHelper(Ga.enders),
      _step37;
    try {
      for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
        var _t52 = _step37.value;
        e.removeEventListener(_t52, d, h);
      }
    } catch (err) {
      _iterator37.e(err);
    } finally {
      _iterator37.f();
    }
    var _iterator38 = _createForOfIteratorHelper(Ga.prevents),
      _step38;
    try {
      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
        var _t53 = _step38.value;
        e.removeEventListener(_t53, f, h);
      }
    } catch (err) {
      _iterator38.e(err);
    } finally {
      _iterator38.f();
    }
    var _iterator39 = _createForOfIteratorHelper(Ga.leavers),
      _step39;
    try {
      for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
        var _t54 = _step39.value;
        e.removeEventListener(_t54, p, h);
      }
    } catch (err) {
      _iterator39.e(err);
    } finally {
      _iterator39.f();
    }
  };
}
function yc(e, t, n, o) {
  return e && !Ga.canLock ? function (e, t, n) {
    var o = t.mouseOverlay;
    var r = -1,
      i = 0;
    return vc(o, t, e, !1, function (e, t) {
      r = Date.now(), i = 0;
    }, function (e, t, o, r) {
      0 === o && 0 === r || (i += Math.abs(o) + Math.abs(r), n.sendMouseRelativeMotion(o, r));
    }, function (e, o) {
      if (Date.now() - r < 500 && i < 50) {
        var _e13 = t.pointerButton || 0;
        n.sendMouseButton(_e13, !0), setTimeout(function () {
          return n.sendMouseButton(_e13, !1);
        }, 60);
      }
    }, function () {});
  }(t, n, o) : e ? function (e, t, n) {
    var o = t.mouseOverlay;
    function r() {
      return document.pointerLockElement !== o;
    }
    return vc(o, t, e, !0, function (e, t, i) {
      r() ? (o.requestPointerLock || o.mozRequestPointerLock || o.webkitRequestPointerLock).call(o) : n.sendMouseButton(i, !0);
    }, function (e, t, o, i) {
      r() || 0 === o && 0 === i || n.sendMouseRelativeMotion(o, i);
    }, function (e, t, o) {
      r() || n.sendMouseButton(o, !1);
    }, function (e, t) {});
  }(t, n, o) : hc(n, o);
}
var _c = function _c(e, t) {
    var n = t.x - e.x,
      o = t.y - e.y;
    return Math.sqrt(n * n + o * o);
  },
  gc = function gc(e) {
    return e * (Math.PI / 180);
  },
  bc = function bc(e) {
    return e * (180 / Math.PI);
  },
  wc = new Map(),
  kc = function kc(e) {
    wc.has(e) && clearTimeout(wc.get(e)), wc.set(e, setTimeout(e, 100));
  },
  xc = function xc(e, t, n) {
    var o = t.split(/[ ,]+/g);
    var r;
    for (var _i5 = 0; _i5 < o.length; _i5 += 1) r = o[_i5], e.addEventListener ? e.addEventListener(r, n, !1) : e.attachEvent && e.attachEvent(r, n);
  },
  Cc = function Cc(e, t, n) {
    var o = t.split(/[ ,]+/g);
    var r;
    for (var _i6 = 0; _i6 < o.length; _i6 += 1) r = o[_i6], e.removeEventListener ? e.removeEventListener(r, n) : e.detachEvent && e.detachEvent(r, n);
  },
  Sc = function Sc(e) {
    return e.preventDefault(), e.type.match(/^touch/) ? e.changedTouches : e;
  },
  Pc = function Pc() {
    return {
      x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
      y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    };
  },
  Ec = function Ec(e, t) {
    t.top || t.right || t.bottom || t.left ? (e.style.top = t.top, e.style.right = t.right, e.style.bottom = t.bottom, e.style.left = t.left) : (e.style.left = t.x + "px", e.style.top = t.y + "px");
  },
  Oc = function Oc(e, t, n) {
    var o = Mc(e);
    for (var _r6 in o) if (o.hasOwnProperty(_r6)) if ("string" == typeof t) o[_r6] = t + " " + n;else {
      var _e14 = "";
      for (var _o1 = 0, _r7 = t.length; _o1 < _r7; _o1 += 1) _e14 += t[_o1] + " " + n + ", ";
      o[_r6] = _e14.slice(0, -2);
    }
    return o;
  },
  Mc = function Mc(e) {
    var t = {};
    t[e] = "";
    return ["webkit", "Moz", "o"].forEach(function (n) {
      t[n + e.charAt(0).toUpperCase() + e.slice(1)] = "";
    }), t;
  },
  jc = function jc(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  },
  Dc = function Dc(e, t) {
    if (e.length) for (var n = 0, _o10 = e.length; n < _o10; n += 1) t(e[n]);else t(e);
  };
var Ac,
  Tc = !!("ontouchstart" in window),
  Lc = !!window.PointerEvent,
  zc = !!window.MSPointerEvent,
  Bc = {
    start: "mousedown",
    move: "mousemove",
    end: "mouseup"
  },
  Ic = {};
function Nc() {}
function Rc(e, t) {
  return this.identifier = t.identifier, this.position = t.position, this.frontPosition = t.frontPosition, this.collection = e, this.defaults = {
    size: 100,
    threshold: .1,
    color: "white",
    fadeTime: 250,
    dataOnly: !1,
    restJoystick: !0,
    restOpacity: .5,
    mode: "dynamic",
    zone: document.body,
    lockX: !1,
    lockY: !1,
    shape: "circle"
  }, this.config(t), "dynamic" === this.options.mode && (this.options.restOpacity = 0), this.id = Rc.id, Rc.id += 1, this.buildEl().stylize(), this.instance = {
    el: this.ui.el,
    on: this.on.bind(this),
    off: this.off.bind(this),
    show: this.show.bind(this),
    hide: this.hide.bind(this),
    add: this.addToDom.bind(this),
    remove: this.removeFromDom.bind(this),
    destroy: this.destroy.bind(this),
    setPosition: this.setPosition.bind(this),
    resetDirection: this.resetDirection.bind(this),
    computeDirection: this.computeDirection.bind(this),
    trigger: this.trigger.bind(this),
    position: this.position,
    frontPosition: this.frontPosition,
    ui: this.ui,
    identifier: this.identifier,
    id: this.id,
    options: this.options
  }, this.instance;
}
function Kc(e, t) {
  var n = this;
  n.nipples = [], n.idles = [], n.actives = [], n.ids = [], n.pressureIntervals = {}, n.manager = e, n.id = Kc.id, Kc.id += 1, n.defaults = {
    zone: document.body,
    multitouch: !1,
    maxNumberOfNipples: 10,
    mode: "dynamic",
    position: {
      top: 0,
      left: 0
    },
    catchDistance: 200,
    size: 100,
    threshold: .1,
    color: "white",
    fadeTime: 250,
    dataOnly: !1,
    restJoystick: !0,
    restOpacity: .5,
    lockX: !1,
    lockY: !1,
    shape: "circle",
    dynamicPage: !1,
    follow: !1
  }, n.config(t), "static" !== n.options.mode && "semi" !== n.options.mode || (n.options.multitouch = !1), n.options.multitouch || (n.options.maxNumberOfNipples = 1);
  var o = getComputedStyle(n.options.zone.parentElement);
  return o && "flex" === o.display && (n.parentIsFlex = !0), n.updateBox(), n.prepareNipples(), n.bindings(), n.begin(), n.nipples;
}
function Fc(e) {
  var t = this;
  t.ids = {}, t.index = 0, t.collections = [], t.scroll = Pc(), t.config(e), t.prepareCollections();
  var n = function n() {
    var e;
    t.collections.forEach(function (n) {
      n.forEach(function (n) {
        e = n.el.getBoundingClientRect(), n.position = {
          x: t.scroll.x + e.left,
          y: t.scroll.y + e.top
        };
      });
    });
  };
  xc(window, "resize", function () {
    kc(n);
  });
  var o = function o() {
    t.scroll = Pc();
  };
  return xc(window, "scroll", function () {
    kc(o);
  }), t.collections;
}
Lc ? Ac = {
  start: "pointerdown",
  move: "pointermove",
  end: "pointerup, pointercancel"
} : zc ? Ac = {
  start: "MSPointerDown",
  move: "MSPointerMove",
  end: "MSPointerUp"
} : Tc ? (Ac = {
  start: "touchstart",
  move: "touchmove",
  end: "touchend, touchcancel"
}, Ic = Bc) : Ac = Bc, Nc.prototype.on = function (e, t) {
  var n,
    o = this,
    r = e.split(/[ ,]+/g);
  o._handlers_ = o._handlers_ || {};
  for (var i = 0; i < r.length; i += 1) n = r[i], o._handlers_[n] = o._handlers_[n] || [], o._handlers_[n].push(t);
  return o;
}, Nc.prototype.off = function (e, t) {
  var n = this;
  return n._handlers_ = n._handlers_ || {}, void 0 === e ? n._handlers_ = {} : void 0 === t ? n._handlers_[e] = null : n._handlers_[e] && n._handlers_[e].indexOf(t) >= 0 && n._handlers_[e].splice(n._handlers_[e].indexOf(t), 1), n;
}, Nc.prototype.trigger = function (e, t) {
  var n,
    o = this,
    r = e.split(/[ ,]+/g);
  o._handlers_ = o._handlers_ || {};
  for (var i = 0; i < r.length; i += 1) n = r[i], o._handlers_[n] && o._handlers_[n].length && o._handlers_[n].forEach(function (e) {
    e.call(o, {
      type: n,
      target: o
    }, t);
  });
}, Nc.prototype.config = function (e) {
  var t = this;
  t.options = t.defaults || {}, e && (t.options = function (e, t) {
    var n = {};
    for (var _o11 in e) e.hasOwnProperty(_o11) && t.hasOwnProperty(_o11) ? n[_o11] = t[_o11] : e.hasOwnProperty(_o11) && (n[_o11] = e[_o11]);
    return n;
  }(t.options, e));
}, Nc.prototype.bindEvt = function (e, t) {
  var n = this;
  return n._domHandlers_ = n._domHandlers_ || {}, n._domHandlers_[t] = function () {
    "function" == typeof n["on" + t] ? n["on" + t].apply(n, arguments) : console.warn('[WARNING] : Missing "on' + t + '" handler.');
  }, xc(e, Ac[t], n._domHandlers_[t]), Ic[t] && xc(e, Ic[t], n._domHandlers_[t]), n;
}, Nc.prototype.unbindEvt = function (e, t) {
  var n = this;
  return n._domHandlers_ = n._domHandlers_ || {}, Cc(e, Ac[t], n._domHandlers_[t]), Ic[t] && Cc(e, Ic[t], n._domHandlers_[t]), delete n._domHandlers_[t], this;
}, Rc.prototype = new Nc(), Rc.constructor = Rc, Rc.id = 0, Rc.prototype.buildEl = function (e) {
  return this.ui = {}, this.options.dataOnly || (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front)), this;
}, Rc.prototype.stylize = function () {
  if (this.options.dataOnly) return this;
  var e = this.options.fadeTime + "ms",
    t = function (e, t) {
      var n = Mc(e);
      for (var _o12 in n) n.hasOwnProperty(_o12) && (n[_o12] = t);
      return n;
    }("borderRadius", "50%"),
    n = Oc("transition", "opacity", e),
    o = {};
  return o.el = {
    position: "absolute",
    opacity: this.options.restOpacity,
    display: "block",
    zIndex: 999
  }, o.back = {
    position: "absolute",
    display: "block",
    width: this.options.size + "px",
    height: this.options.size + "px",
    left: 0,
    marginLeft: -this.options.size / 2 + "px",
    marginTop: -this.options.size / 2 + "px",
    background: this.options.color,
    opacity: ".5"
  }, o.front = {
    width: this.options.size / 2 + "px",
    height: this.options.size / 2 + "px",
    position: "absolute",
    display: "block",
    left: 0,
    marginLeft: -this.options.size / 4 + "px",
    marginTop: -this.options.size / 4 + "px",
    background: this.options.color,
    opacity: ".5",
    transform: "translate(0px, 0px)"
  }, jc(o.el, n), "circle" === this.options.shape && jc(o.back, t), jc(o.front, t), this.applyStyles(o), this;
}, Rc.prototype.applyStyles = function (e) {
  for (var t in this.ui) if (this.ui.hasOwnProperty(t)) for (var n in e[t]) this.ui[t].style[n] = e[t][n];
  return this;
}, Rc.prototype.addToDom = function () {
  return this.options.dataOnly || document.body.contains(this.ui.el) || this.options.zone.appendChild(this.ui.el), this;
}, Rc.prototype.removeFromDom = function () {
  return this.options.dataOnly || !document.body.contains(this.ui.el) || this.options.zone.removeChild(this.ui.el), this;
}, Rc.prototype.destroy = function () {
  clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off();
}, Rc.prototype.show = function (e) {
  var t = this;
  return t.options.dataOnly || (clearTimeout(t.removeTimeout), clearTimeout(t.showTimeout), clearTimeout(t.restTimeout), t.addToDom(), t.restCallback(), setTimeout(function () {
    t.ui.el.style.opacity = 1;
  }, 0), t.showTimeout = setTimeout(function () {
    t.trigger("shown", t.instance), "function" == typeof e && e.call(this);
  }, t.options.fadeTime)), t;
}, Rc.prototype.hide = function (e) {
  var t = this;
  if (t.options.dataOnly) return t;
  if (t.ui.el.style.opacity = t.options.restOpacity, clearTimeout(t.removeTimeout), clearTimeout(t.showTimeout), clearTimeout(t.restTimeout), t.removeTimeout = setTimeout(function () {
    var n = "dynamic" === t.options.mode ? "none" : "block";
    t.ui.el.style.display = n, "function" == typeof e && e.call(t), t.trigger("hidden", t.instance);
  }, t.options.fadeTime), t.options.restJoystick) {
    var n = t.options.restJoystick,
      _o13 = {};
    _o13.x = !0 === n || !1 !== n.x ? 0 : t.instance.frontPosition.x, _o13.y = !0 === n || !1 !== n.y ? 0 : t.instance.frontPosition.y, t.setPosition(e, _o13);
  }
  return t;
}, Rc.prototype.setPosition = function (e, t) {
  var n = this;
  n.frontPosition = {
    x: t.x,
    y: t.y
  };
  var o = n.options.fadeTime + "ms",
    r = {};
  r.front = Oc("transition", ["transform"], o);
  var i = {
    front: {}
  };
  i.front = {
    transform: "translate(" + n.frontPosition.x + "px," + n.frontPosition.y + "px)"
  }, n.applyStyles(r), n.applyStyles(i), n.restTimeout = setTimeout(function () {
    "function" == typeof e && e.call(n), n.restCallback();
  }, n.options.fadeTime);
}, Rc.prototype.restCallback = function () {
  var e = this,
    t = {};
  t.front = Oc("transition", "none", ""), e.applyStyles(t), e.trigger("rested", e.instance);
}, Rc.prototype.resetDirection = function () {
  this.direction = {
    x: !1,
    y: !1,
    angle: !1
  };
}, Rc.prototype.computeDirection = function (e) {
  var t,
    n,
    o,
    r = e.angle.radian,
    i = Math.PI / 4,
    s = Math.PI / 2;
  if (r > i && r < 3 * i && !e.lockX ? t = "up" : r > -i && r <= i && !e.lockY ? t = "left" : r > 3 * -i && r <= -i && !e.lockX ? t = "down" : e.lockY || (t = "right"), e.lockY || (n = r > -s && r < s ? "left" : "right"), e.lockX || (o = r > 0 ? "up" : "down"), e.force > this.options.threshold) {
    var a,
      c = {};
    for (a in this.direction) this.direction.hasOwnProperty(a) && (c[a] = this.direction[a]);
    var l = {};
    for (a in this.direction = {
      x: n,
      y: o,
      angle: t
    }, e.direction = this.direction, c) c[a] === this.direction[a] && (l[a] = !0);
    if (l.x && l.y && l.angle) return e;
    l.x && l.y || this.trigger("plain", e), l.x || this.trigger("plain:" + n, e), l.y || this.trigger("plain:" + o, e), l.angle || this.trigger("dir dir:" + t, e);
  } else this.resetDirection();
  return e;
}, Kc.prototype = new Nc(), Kc.constructor = Kc, Kc.id = 0, Kc.prototype.prepareNipples = function () {
  var e = this,
    t = e.nipples;
  t.on = e.on.bind(e), t.off = e.off.bind(e), t.options = e.options, t.destroy = e.destroy.bind(e), t.ids = e.ids, t.id = e.id, t.processOnMove = e.processOnMove.bind(e), t.processOnEnd = e.processOnEnd.bind(e), t.get = function (e) {
    if (void 0 === e) return t[0];
    for (var n = 0, o = t.length; n < o; n += 1) if (t[n].identifier === e) return t[n];
    return !1;
  };
}, Kc.prototype.bindings = function () {
  var e = this;
  e.bindEvt(e.options.zone, "start"), e.options.zone.style.touchAction = "none", e.options.zone.style.msTouchAction = "none";
}, Kc.prototype.begin = function () {
  var e = this,
    t = e.options;
  if ("static" === t.mode) {
    var n = e.createNipple(t.position, e.manager.getIdentifier());
    n.add(), e.idles.push(n);
  }
}, Kc.prototype.createNipple = function (e, t) {
  var n = this,
    o = n.manager.scroll,
    r = {},
    i = n.options,
    s = n.parentIsFlex ? o.x : o.x + n.box.left,
    a = n.parentIsFlex ? o.y : o.y + n.box.top;
  if (e.x && e.y) r = {
    x: e.x - s,
    y: e.y - a
  };else if (e.top || e.right || e.bottom || e.left) {
    var c = document.createElement("DIV");
    c.style.display = "hidden", c.style.top = e.top, c.style.right = e.right, c.style.bottom = e.bottom, c.style.left = e.left, c.style.position = "absolute", i.zone.appendChild(c);
    var l = c.getBoundingClientRect();
    i.zone.removeChild(c), r = e, e = {
      x: l.left + o.x,
      y: l.top + o.y
    };
  }
  var u = new Rc(n, {
    color: i.color,
    size: i.size,
    threshold: i.threshold,
    fadeTime: i.fadeTime,
    dataOnly: i.dataOnly,
    restJoystick: i.restJoystick,
    restOpacity: i.restOpacity,
    mode: i.mode,
    identifier: t,
    position: e,
    zone: i.zone,
    frontPosition: {
      x: 0,
      y: 0
    },
    shape: i.shape
  });
  return i.dataOnly || (Ec(u.ui.el, r), Ec(u.ui.front, u.frontPosition)), n.nipples.push(u), n.trigger("added " + u.identifier + ":added", u), n.manager.trigger("added " + u.identifier + ":added", u), n.bindNipple(u), u;
}, Kc.prototype.updateBox = function () {
  this.box = this.options.zone.getBoundingClientRect();
}, Kc.prototype.bindNipple = function (e) {
  var t,
    n = this,
    o = function o(e, _o14) {
      t = e.type + " " + _o14.id + ":" + e.type, n.trigger(t, _o14);
    };
  e.on("destroyed", n.onDestroyed.bind(n)), e.on("shown hidden rested dir plain", o), e.on("dir:up dir:right dir:down dir:left", o), e.on("plain:up plain:right plain:down plain:left", o);
}, Kc.prototype.pressureFn = function (e, t, n) {
  var o = this,
    r = 0;
  clearInterval(o.pressureIntervals[n]), o.pressureIntervals[n] = setInterval(function () {
    var n = e.force || e.pressure || e.webkitForce || 0;
    n !== r && (t.trigger("pressure", n), o.trigger("pressure " + t.identifier + ":pressure", n), r = n);
  }.bind(o), 100);
}, Kc.prototype.onstart = function (e) {
  var t = this,
    n = t.options,
    o = e;
  e = Sc(e), t.updateBox();
  return Dc(e, function (r) {
    t.actives.length < n.maxNumberOfNipples ? t.processOnStart(r) : o.type.match(/^touch/) && (Object.keys(t.manager.ids).forEach(function (n) {
      if (Object.values(o.touches).findIndex(function (e) {
        return e.identifier === n;
      }) < 0) {
        var r = [e[0]];
        r.identifier = n, t.processOnEnd(r);
      }
    }), t.actives.length < n.maxNumberOfNipples && t.processOnStart(r));
  }), t.manager.bindDocument(), !1;
}, Kc.prototype.processOnStart = function (e) {
  var t,
    n = this,
    o = n.options,
    r = n.manager.getIdentifier(e),
    i = e.force || e.pressure || e.webkitForce || 0,
    s = {
      x: e.pageX,
      y: e.pageY
    },
    a = n.getOrCreate(r, s);
  a.identifier !== r && n.manager.removeIdentifier(a.identifier), a.identifier = r;
  var c = function c(t) {
    t.trigger("start", t), n.trigger("start " + t.id + ":start", t), t.show(), i > 0 && n.pressureFn(e, t, t.identifier), n.processOnMove(e);
  };
  if ((t = n.idles.indexOf(a)) >= 0 && n.idles.splice(t, 1), n.actives.push(a), n.ids.push(a.identifier), "semi" !== o.mode) c(a);else {
    if (!(_c(s, a.position) <= o.catchDistance)) return a.destroy(), void n.processOnStart(e);
    c(a);
  }
  return a;
}, Kc.prototype.getOrCreate = function (e, t) {
  var n,
    o = this,
    r = o.options;
  return /(semi|static)/.test(r.mode) ? (n = o.idles[0]) ? (o.idles.splice(0, 1), n) : "semi" === r.mode ? o.createNipple(t, e) : (console.warn("Coudln't find the needed nipple."), !1) : n = o.createNipple(t, e);
}, Kc.prototype.processOnMove = function (e) {
  var t = this,
    n = t.options,
    o = t.manager.getIdentifier(e),
    r = t.nipples.get(o),
    i = t.manager.scroll;
  if (function (e) {
    return isNaN(e.buttons) ? 0 !== e.pressure : 0 !== e.buttons;
  }(e)) {
    if (!r) return console.error("Found zombie joystick with ID " + o), void t.manager.removeIdentifier(o);
    if (n.dynamicPage) {
      var s = r.el.getBoundingClientRect();
      r.position = {
        x: i.x + s.left,
        y: i.y + s.top
      };
    }
    r.identifier = o;
    var a = r.options.size / 2,
      c = {
        x: e.pageX,
        y: e.pageY
      };
    n.lockX && (c.y = r.position.y), n.lockY && (c.x = r.position.x);
    var l,
      u,
      d = _c(c, r.position),
      p = function (e, t) {
        var n = t.x - e.x,
          o = t.y - e.y;
        return bc(Math.atan2(o, n));
      }(c, r.position),
      f = gc(p),
      h = d / a,
      m = {
        distance: d,
        position: c
      };
    if ("circle" === r.options.shape ? (l = Math.min(d, a), u = function (e, t, n) {
      var o = {
        x: 0,
        y: 0
      };
      return n = gc(n), o.x = e.x - t * Math.cos(n), o.y = e.y - t * Math.sin(n), o;
    }(r.position, l, p)) : (u = function (e, t, n) {
      return {
        x: Math.min(Math.max(e.x, t.x - n), t.x + n),
        y: Math.min(Math.max(e.y, t.y - n), t.y + n)
      };
    }(c, r.position, a), l = _c(u, r.position)), n.follow) {
      if (d > a) {
        var _e15 = c.x - u.x,
          _n10 = c.y - u.y;
        r.position.x += _e15, r.position.y += _n10, r.el.style.top = r.position.y - (t.box.top + i.y) + "px", r.el.style.left = r.position.x - (t.box.left + i.x) + "px", d = _c(c, r.position);
      }
    } else c = u, d = l;
    var v = c.x - r.position.x,
      y = c.y - r.position.y;
    r.frontPosition = {
      x: v,
      y: y
    }, n.dataOnly || (r.ui.front.style.transform = "translate(" + v + "px," + y + "px)");
    var _ = {
      identifier: r.identifier,
      position: c,
      force: h,
      pressure: e.force || e.pressure || e.webkitForce || 0,
      distance: d,
      angle: {
        radian: f,
        degree: p
      },
      vector: {
        x: v / a,
        y: -y / a
      },
      raw: m,
      instance: r,
      lockX: n.lockX,
      lockY: n.lockY
    };
    (_ = r.computeDirection(_)).angle = {
      radian: gc(180 - p),
      degree: 180 - p
    }, r.trigger("move", _), t.trigger("move " + r.id + ":move", _);
  } else this.processOnEnd(e);
}, Kc.prototype.processOnEnd = function (e) {
  var t = this,
    n = t.options,
    o = t.manager.getIdentifier(e),
    r = t.nipples.get(o),
    i = t.manager.removeIdentifier(r.identifier);
  r && (n.dataOnly || r.hide(function () {
    "dynamic" === n.mode && (r.trigger("removed", r), t.trigger("removed " + r.id + ":removed", r), t.manager.trigger("removed " + r.id + ":removed", r), r.destroy());
  }), clearInterval(t.pressureIntervals[r.identifier]), r.resetDirection(), r.trigger("end", r), t.trigger("end " + r.id + ":end", r), t.ids.indexOf(r.identifier) >= 0 && t.ids.splice(t.ids.indexOf(r.identifier), 1), t.actives.indexOf(r) >= 0 && t.actives.splice(t.actives.indexOf(r), 1), /(semi|static)/.test(n.mode) ? t.idles.push(r) : t.nipples.indexOf(r) >= 0 && t.nipples.splice(t.nipples.indexOf(r), 1), t.manager.unbindDocument(), /(semi|static)/.test(n.mode) && (t.manager.ids[i.id] = i.identifier));
}, Kc.prototype.onDestroyed = function (e, t) {
  var n = this;
  n.nipples.indexOf(t) >= 0 && n.nipples.splice(n.nipples.indexOf(t), 1), n.actives.indexOf(t) >= 0 && n.actives.splice(n.actives.indexOf(t), 1), n.idles.indexOf(t) >= 0 && n.idles.splice(n.idles.indexOf(t), 1), n.ids.indexOf(t.identifier) >= 0 && n.ids.splice(n.ids.indexOf(t.identifier), 1), n.manager.removeIdentifier(t.identifier), n.manager.unbindDocument();
}, Kc.prototype.destroy = function () {
  var e = this;
  for (var t in e.unbindEvt(e.options.zone, "start"), e.nipples.forEach(function (e) {
    e.destroy();
  }), e.pressureIntervals) e.pressureIntervals.hasOwnProperty(t) && clearInterval(e.pressureIntervals[t]);
  e.trigger("destroyed", e.nipples), e.manager.unbindDocument(), e.off();
}, Fc.prototype = new Nc(), Fc.constructor = Fc, Fc.prototype.prepareCollections = function () {
  var e = this;
  e.collections.create = e.create.bind(e), e.collections.on = e.on.bind(e), e.collections.off = e.off.bind(e), e.collections.destroy = e.destroy.bind(e), e.collections.get = function (t) {
    var n;
    return e.collections.every(function (e) {
      return !(n = e.get(t));
    }), n;
  };
}, Fc.prototype.create = function (e) {
  return this.createCollection(e);
}, Fc.prototype.createCollection = function (e) {
  var t = this,
    n = new Kc(t, e);
  return t.bindCollection(n), t.collections.push(n), n;
}, Fc.prototype.bindCollection = function (e) {
  var t,
    n = this,
    o = function o(e, _o15) {
      t = e.type + " " + _o15.id + ":" + e.type, n.trigger(t, _o15);
    };
  e.on("destroyed", n.onDestroyed.bind(n)), e.on("shown hidden rested dir plain", o), e.on("dir:up dir:right dir:down dir:left", o), e.on("plain:up plain:right plain:down plain:left", o);
}, Fc.prototype.bindDocument = function () {
  var e = this;
  e.binded || (e.bindEvt(document, "move").bindEvt(document, "end"), e.binded = !0);
}, Fc.prototype.unbindDocument = function (e) {
  var t = this;
  Object.keys(t.ids).length && !0 !== e || (t.unbindEvt(document, "move").unbindEvt(document, "end"), t.binded = !1);
}, Fc.prototype.getIdentifier = function (e) {
  var t;
  return e ? void 0 === (t = void 0 === e.identifier ? e.pointerId : e.identifier) && (t = this.latest || 0) : t = this.index, void 0 === this.ids[t] && (this.ids[t] = this.index, this.index += 1), this.latest = t, this.ids[t];
}, Fc.prototype.removeIdentifier = function (e) {
  var t = {};
  for (var n in this.ids) if (this.ids[n] === e) {
    t.id = n, t.identifier = this.ids[n], delete this.ids[n];
    break;
  }
  return t;
}, Fc.prototype.onmove = function (e) {
  return this.onAny("move", e), !1;
}, Fc.prototype.onend = function (e) {
  return this.onAny("end", e), !1;
}, Fc.prototype.oncancel = function (e) {
  return this.onAny("end", e), !1;
}, Fc.prototype.onAny = function (e, t) {
  var n,
    o = this,
    r = "processOn" + e.charAt(0).toUpperCase() + e.slice(1);
  t = Sc(t);
  var i = function i(e, t, n) {
    n.ids.indexOf(t) >= 0 && (n[r](e), e._found_ = !0);
  };
  return Dc(t, function (e) {
    n = o.getIdentifier(e), Dc(o.collections, i.bind(null, e, n)), e._found_ || o.removeIdentifier(n);
  }), !1;
}, Fc.prototype.destroy = function () {
  var e = this;
  e.unbindDocument(!0), e.ids = {}, e.index = 0, e.collections.forEach(function (e) {
    e.destroy();
  }), e.off();
}, Fc.prototype.onDestroyed = function (e, t) {
  var n = this;
  if (n.collections.indexOf(t) < 0) return !1;
  n.collections.splice(n.collections.indexOf(t), 1);
};
var Uc = new Fc(),
  Hc = function Hc(e) {
    return Uc.create(e);
  };
function Vc(e, t, n, o, r, i) {
  var s = Math.round(o / 4);
  var a = !1;
  var c = function c() {
      var e = a ? "flex" : "none";
      var _iterator40 = _createForOfIteratorHelper(l),
        _step40;
      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _t55 = _step40.value;
          _t55 != u && (_t55.style.display = e);
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    },
    l = [Wc(t, n), ic("keyboard", {
      onClick: function onClick() {
        e.toggleKeyboard(), a && (a = !1, c());
      }
    }, o), ic("options", {
      onClick: function onClick() {
        a = !a, c();
      }
    }, o)],
    u = l[l.length - 1],
    d = tc("emulator-options");
  for (var _i7 = 0, _l2 = l; _i7 < _l2.length; _i7++) {
    var _p2 = _l2[_i7];
    _p2 !== u && _p2.classList.add("emulator-button-control"), _p2.style.marginRight = s + "px", _p2.style.marginBottom = s + "px", _p2 !== u && (_p2.style.display = "none"), d.appendChild(_p2);
  }
  return d.style.position = "absolute", d.style.right = i + "px", d.style.top = r + "px", e.mouseOverlay.appendChild(d), function () {
    e.mouseOverlay.removeChild(d);
  };
}
function Wc(e, t) {
  if (e.length <= 1) return document.createElement("div");
  var n = document.createElement("select");
  n.classList.add("emulator-control-select");
  var _iterator41 = _createForOfIteratorHelper(e),
    _step41;
  try {
    for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
      var _o16 = _step41.value;
      var _e16 = document.createElement("option");
      _e16.value = _o16, _e16.innerHTML = _o16, n.appendChild(_e16);
    }
  } catch (err) {
    _iterator41.e(err);
  } finally {
    _iterator41.f();
  }
  return n.onchange = function (e) {
    var n = e.target.value;
    t(n);
  }, function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    var n = function n(e) {
        e.stopPropagation();
      },
      o = function o(e) {
        e.stopPropagation(), t && e.preventDefault();
      },
      r = {
        capture: !1
      };
    var _iterator42 = _createForOfIteratorHelper(Ga.starters),
      _step42;
    try {
      for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
        var _i8 = _step42.value;
        e.addEventListener(_i8, n, r);
      }
    } catch (err) {
      _iterator42.e(err);
    } finally {
      _iterator42.f();
    }
    var _iterator43 = _createForOfIteratorHelper(Ga.enders),
      _step43;
    try {
      for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
        var _i9 = _step43.value;
        e.addEventListener(_i9, n, r);
      }
    } catch (err) {
      _iterator43.e(err);
    } finally {
      _iterator43.f();
    }
    var _iterator44 = _createForOfIteratorHelper(Ga.prevents),
      _step44;
    try {
      for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
        var _i0 = _step44.value;
        e.addEventListener(_i0, o, r);
      }
    } catch (err) {
      _iterator44.e(err);
    } finally {
      _iterator44.f();
    }
  }(n, !1), n;
}
function qc(e, t, n) {
  var o = n || {};
  function r(e) {
    return void 0 !== o[e] ? o[e] : e;
  }
  return e.setOnKeyDown(function (e) {
    t.sendKeyEvent(r(e), !0);
  }), e.setOnKeyUp(function (e) {
    t.sendKeyEvent(r(e), !1);
  }), e.setOnKeyPress(function (e) {
    t.simulateKeyPress(r(e));
  }), e.setOnKeysPress(function (e) {
    t.simulateKeyPress.apply(t, _toConsumableArray(e));
  }), function () {
    e.setOnKeyDown(function (e) {}), e.setOnKeyUp(function (e) {}), e.setOnKeyPress(function (e) {}), e.setOnKeysPress(function (e) {});
  };
}
function Xc(e, t, n, o) {
  var r;
  var i = Object.keys(n),
    s = {
      keyboard: function keyboard() {},
      mouse: function mouse() {},
      gestures: function gestures() {},
      buttons: function buttons() {}
    },
    a = function a(r) {
      s.keyboard(), s.mouse(), s.gestures(), s.buttons(), s.keyboard = function () {}, s.mouse = function () {}, s.gestures = function () {}, s.buttons = function () {};
      var i = n[r];
      void 0 !== i && (s.keyboard = qc(t, o, i.mapper), void 0 !== i.gestures && i.gestures.length > 0 ? s.gestures = function (e, t, n) {
        var o = Hc({
          zone: e.mouseOverlay,
          multitouch: !0,
          maxNumberOfNipples: 2
        });
        var r = -1;
        var i = function i() {
            -1 !== r && (e.fireKeyUp(r), r = -1);
          },
          s = {},
          a = {},
          c = {};
        var _iterator45 = _createForOfIteratorHelper(n),
          _step45;
        try {
          var _loop = function _loop() {
            var u = _step45.value;
            "end:release" === u.event ? s[u.joystickId] = !0 : 0 !== u.mapTo && ("tap" === u.event ? a[u.joystickId] = u.mapTo : o.on(u.event, function () {
              var t;
              c[u.joystickId] = Date.now(), i(), t = u.mapTo, e.fireKeyDown(t), r = t;
            }));
          };
          for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator45.e(err);
        } finally {
          _iterator45.f();
        }
        var l = {};
        return o.on("start", function () {
          var e = o.ids.length - 1;
          l[e] = Date.now();
        }), o.on("end", function () {
          var t = o.ids.length - 1,
            n = Date.now() - l[t];
          !0 === s[t] && i(), a[t] && n < 500 && c[t] < l[t] && e.fireKeyPress(a[t]);
        }), function () {
          return o.destroy();
        };
      }(t, 0, i.gestures) : s.mouse = yc(e.autolock, e.sensitivity, t, o), void 0 !== i.buttons && i.buttons.length && (s.buttons = function (e, t, n, o) {
        var r = Math.round(o / 4),
          i = [];
        var _iterator46 = _createForOfIteratorHelper(n),
          _step46;
        try {
          for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
            var _s2 = _step46.value;
            if (0 === _s2.mapTo) continue;
            var _t57 = ic((_s2.symbol || ac(_s2.mapTo)).toUpperCase(), cc(_s2, e), o);
            _t57.style.position = "absolute";
            var _n11 = _s2.style;
            if (_n11) for (var _i11 = 0, _Object$keys2 = Object.keys(_n11); _i11 < _Object$keys2.length; _i11++) {
              var _e17 = _Object$keys2[_i11];
              _t57.style[_e17] = _n11[_e17];
            }
            if (void 0 !== _s2.position) {
              var _e18 = _s2.position.left,
                _n12 = _s2.position.top,
                _i12 = _s2.position.bottom,
                _a2 = _s2.position.right;
              void 0 !== _e18 && (_t57.style.left = r * _e18 + o * (_e18 - 1) + "px"), void 0 !== _a2 && (_t57.style.right = r * _a2 + o * (_a2 - 1) + "px"), void 0 !== _n12 && (_t57.style.top = r * _n12 + o * (_n12 - 1) + "px"), void 0 !== _i12 && (_t57.style.bottom = r * _i12 + o * (_i12 - 1) + "px");
            }
            e.mouseOverlay.appendChild(_t57), i.push(_t57);
          }
        } catch (err) {
          _iterator46.e(err);
        } finally {
          _iterator46.f();
        }
        return function () {
          for (var _i10 = 0, _i1 = i; _i10 < _i1.length; _i10++) {
            var _t56 = _i1[_i10];
            _t56.parentElement === e.mouseOverlay && e.mouseOverlay.removeChild(_t56);
          }
        };
      }(t, 0, i.buttons, 54)));
    },
    c = 0 === (null == (r = t.options.optionControls) ? void 0 : r.length) ? function () {} : Vc(t, i, a, 54, 13.5, 0);
  return a("default"), function () {
    s.gestures(), s.buttons(), s.mouse(), s.keyboard(), c();
  };
}
function Gc(e) {
  switch (e) {
    case "square":
      return function () {
        var e = /*#__PURE__*/function () {
          function e() {
            _classCallCheck(this, e);
            t(this, "aspect", .625);
          }
          return _createClass(e, [{
            key: "getConfiguration",
            value: function getConfiguration(_e19, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              var o = this.getCols(),
                r = this.getRows(),
                i = Math.floor(o / 2),
                s = Math.floor(r / 2),
                a = 5 * _e19 / 100 / 2,
                c = a,
                l = (_e19 - 2 * a) / o * n,
                u = (t - 2 * c) / r * n,
                d = Math.min(l, u),
                p = [];
              for (var _f6 = 0; _f6 < r; ++_f6) {
                var _n13 = [];
                for (var _l3 = 0; _l3 < o; ++_l3) _n13.push({
                  centerX: _l3 < i ? a + d * (_l3 + .5) : _e19 - a - d * (o - _l3 - 1 + .5),
                  centerY: _f6 < s ? c + d * (_f6 + .5) : t - c - d * (r - _f6 - 1 + .5)
                });
                p.push(_n13);
              }
              return {
                gridType: "square",
                cells: p,
                columnWidth: d,
                rowHeight: d,
                columnsPadding: a,
                rowsPadding: c,
                width: _e19,
                height: t
              };
            }
          }, {
            key: "getCols",
            value: function getCols() {
              return 10;
            }
          }, {
            key: "getRows",
            value: function getRows() {
              return Math.floor(this.getCols() * this.aspect) + 1;
            }
          }]);
        }();
        return new e();
      }();
    case "honeycomb":
      return function () {
        var e = /*#__PURE__*/function () {
          function e() {
            _classCallCheck(this, e);
            t(this, "aspect", .625);
          }
          return _createClass(e, [{
            key: "getConfiguration",
            value: function getConfiguration(_e20, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              var o = this.getCols(),
                r = this.getRows(),
                i = Math.floor(o / 2),
                s = Math.floor(r / 2),
                a = 5 * _e20 / 100 / 2,
                c = a,
                l = (_e20 - 2 * a) / o * n,
                u = (t - 2 * c) / r * n,
                d = Math.min(l, u),
                p = [];
              for (var _f7 = 0; _f7 < r; ++_f7) {
                var _n14 = [],
                  _l4 = _f7 % 2 == 0 ? o : o - 1,
                  _u = _f7 % 2 == 0 ? 0 : d / 2;
                for (var _p3 = 0; _p3 < _l4; ++_p3) _n14.push({
                  centerX: _p3 < i ? _u + a + d * (_p3 + .5) : _u + _e20 - a - d * (o - _p3 - 1 + .5),
                  centerY: _f7 < s ? c + d * (_f7 + .5) : t - c - d * (r - _f7 - 1 + .5)
                });
                p.push(_n14);
              }
              return {
                gridType: "honeycomb",
                cells: p,
                columnWidth: d,
                rowHeight: d,
                columnsPadding: a,
                rowsPadding: c,
                width: _e20,
                height: t
              };
            }
          }, {
            key: "getCols",
            value: function getCols() {
              return 10;
            }
          }, {
            key: "getRows",
            value: function getRows() {
              return Math.floor(this.getCols() * this.aspect) + 1;
            }
          }]);
        }();
        return new e();
      }();
  }
  throw new Error("Unknown grid type " + e);
}
function $c(e, t, n, o, r, i, s) {
  var a = t.layers[0];
  if (void 0 !== s) {
    var _iterator47 = _createForOfIteratorHelper(t.layers),
      _step47;
    try {
      for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
        var _c2 = _step47.value;
        if (_c2.title === s) {
          a = _c2;
          break;
        }
      }
    } catch (err) {
      _iterator47.e(err);
    } finally {
      _iterator47.f();
    }
  }
  return function (e, t, n, o, r, i) {
    var s = qc(t, n),
      a = yc(o.autolock, o.sensitivity, t, n),
      c = [];
    function l(s, a) {
      var l;
      var _iterator48 = _createForOfIteratorHelper(c),
        _step48;
      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var _e23 = _step48.value;
          _e23();
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }
      c.splice(0, c.length);
      var u = Gc(e.grid).getConfiguration(s, a, i),
        d = new Yc();
      var _iterator49 = _createForOfIteratorHelper(e.controls),
        _step49;
      try {
        for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
          var _t60 = _step49.value;
          var _e24 = _t60.row,
            _n17 = _t60.column,
            _o18 = _t60.type;
          "NippleActivator" === _o18 && el(u, _e24, _n17);
        }
      } catch (err) {
        _iterator49.e(err);
      } finally {
        _iterator49.f();
      }
      var p = -1;
      if (0 === (null == (l = t.options.optionControls) ? void 0 : l.length)) {
        var _iterator50 = _createForOfIteratorHelper(e.controls),
          _step50;
        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
            var _t58 = _step50.value;
            var _e21 = _t58.row,
              _n15 = _t58.type;
            if ("Options" === _n15) {
              p = _e21;
              break;
            }
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }
      }
      var f = {};
      if (r) {
        var _iterator51 = _createForOfIteratorHelper(e.controls),
          _step51;
        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var _t59 = _step51.value;
            var _e22 = _t59.row;
            var _n16 = _t59.column;
            var _o17 = u.cells[_e22].length,
              _r8 = _o17 / 2;
            _e22 === p && _n16 >= _r8 && (_n16 = Math.min(_n16 + 1, _o17 - 1)), void 0 === f[_e22] && (f[_e22] = {
              leftStart: _r8,
              leftEnd: 0,
              rightStart: _o17 - 1,
              rightEnd: _r8
            }), _n16 < _r8 ? (f[_e22].leftStart = Math.min(f[_e22].leftStart, _n16), f[_e22].leftEnd = Math.max(f[_e22].leftEnd, _n16)) : (f[_e22].rightStart = Math.min(f[_e22].rightStart, _n16), f[_e22].rightEnd = Math.max(f[_e22].rightEnd, _n16));
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
      }
      var _iterator52 = _createForOfIteratorHelper(e.controls),
        _step52;
      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
          var _i13 = _step52.value;
          var _e25 = Zc[_i13.type];
          if (void 0 === _e25) {
            console.error("Factory for control '" + _i13.type + "' is not defined");
            continue;
          }
          var _s3 = _objectSpread({}, _i13),
            _a3 = u.cells[_i13.row].length,
            _l5 = _a3 / 2;
          if (p === _i13.row && _i13.column >= _l5 && (_s3.column = Math.min(_s3.column + 1, _a3 - 1)), r) {
            var _f$_s3$row = f[_s3.row],
              _e26 = _f$_s3$row.leftStart,
              _t61 = _f$_s3$row.leftEnd,
              _n18 = _f$_s3$row.rightStart,
              _o19 = _f$_s3$row.rightEnd,
              _r9 = _s3.column < _l5;
            _r9 ? _s3.column += _l5 + (_l5 - _t61) - _e26 - 1 : _s3.column -= _l5 + (_n18 - _l5) - (_a3 - _o19) + 1, _s3.column >= _a3 ? (console.error("Column", _s3.column, "is out of bound", _a3, _r9 ? "[leftSide]" : "[rightSide]", f), _s3.column = _a3 - 1) : _s3.column < 0 && (console.error("Column", _s3.column, "is out of bound", 0, _r9 ? "[leftSide]" : "[rightSide]", f), _s3.column = 0);
          }
          var _h = _e25(_s3, t, n, u, d, o);
          c.push(_h);
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }
    }
    return t.addOnResize(l), l(t.width, t.height), function () {
      t.removeOnResize(l), s(), a();
      for (var _i14 = 0, _c3 = c; _i14 < _c3.length; _i14++) {
        var _e27 = _c3[_i14];
        _e27();
      }
    };
  }(a, e, n, o, r, i);
}
var Yc = /*#__PURE__*/function () {
  function Yc() {
    _classCallCheck(this, Yc);
    t(this, "sensors", {});
  }
  return _createClass(Yc, [{
    key: "activate",
    value: function activate(e, t) {
      var n = this.sensors[t + "_" + e];
      void 0 !== n && n.activate();
    }
  }, {
    key: "deactivate",
    value: function deactivate(e, t) {
      var n = this.sensors[t + "_" + e];
      void 0 !== n && n.deactivate();
    }
  }, {
    key: "register",
    value: function register(e, t, n) {
      this.sensors[t + "_" + e] = n;
    }
  }]);
}();
var Zc = {
  Key: function Key(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      _s$c$l = s[c][l],
      u = _s$c$l.centerX,
      d = _s$c$l.centerY,
      p = {
        onDown: function onDown() {
          var _iterator53 = _createForOfIteratorHelper(e.mapTo),
            _step53;
          try {
            for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
              var _t62 = _step53.value;
              n.sendKeyEvent(_t62, !0);
            }
          } catch (err) {
            _iterator53.e(err);
          } finally {
            _iterator53.f();
          }
        },
        onUp: function onUp() {
          var _iterator54 = _createForOfIteratorHelper(e.mapTo),
            _step54;
          try {
            for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
              var _t63 = _step54.value;
              n.sendKeyEvent(_t63, !1);
            }
          } catch (err) {
            _iterator54.e(err);
          } finally {
            _iterator54.f();
          }
        }
      };
    if (r.register(c, l, {
      activate: p.onDown,
      deactivate: p.onUp
    }), Jc(o, c, l)) return function () {};
    var f = ic(e.symbol, p, a);
    return f.style.position = "absolute", f.style.left = u - f.widthPx / 2 + "px", f.style.top = d - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), function () {
      return t.mouseOverlay.removeChild(f);
    };
  },
  Options: function Options(e, t, n, o, r, i) {
    var s;
    if (0 === (null == (s = t.options.optionControls) ? void 0 : s.length)) return function () {};
    if (void 0 !== t.options.optionControls && 1 === t.options.optionControls.length && "keyboard" === t.options.optionControls[0]) return Qc(e, t, n, o);
    var a = o.cells,
      c = o.columnWidth,
      l = o.rowHeight,
      u = e.row,
      d = e.column,
      _a$u$d = a[u][d],
      p = _a$u$d.centerX,
      f = _a$u$d.centerY,
      h = f - l / 2,
      m = p - c / 2,
      v = o.width - m - c;
    return Vc(t, ["default"], function () {}, c, h, v);
  },
  Keyboard: Qc,
  Switch: function Switch(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      _s$c$l2 = s[c][l],
      u = _s$c$l2.centerX,
      d = _s$c$l2.centerY,
      p = ic(e.symbol, {
        onUp: function onUp() {
          return i.setActiveConfig(i.getActiveConfig(), e.layerName);
        }
      }, a);
    return p.style.position = "absolute", p.style.left = u - p.widthPx / 2 + "px", p.style.top = d - p.heightPx / 2 + "px", t.mouseOverlay.appendChild(p), function () {
      t.mouseOverlay.removeChild(p);
    };
  },
  ScreenMove: function ScreenMove(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      _s$c$l3 = s[c][l],
      u = _s$c$l3.centerX,
      d = _s$c$l3.centerY;
    var p = .5,
      f = .5;
    e.direction.indexOf("up") >= 0 && (f = 0);
    e.direction.indexOf("down") >= 0 && (f = 1);
    e.direction.indexOf("left") >= 0 && (p = 0);
    e.direction.indexOf("right") >= 0 && (p = 1);
    var h = {
      onDown: function onDown() {
        n.sendMouseMotion(p, f);
      },
      onUp: function onUp() {
        n.sendMouseMotion(.5, .5);
      }
    };
    if (r.register(c, l, {
      activate: h.onDown,
      deactivate: h.onUp
    }), Jc(o, c, l)) return function () {};
    var m = ic(e.symbol, h, a);
    return m.style.position = "absolute", m.style.left = u - m.widthPx / 2 + "px", m.style.top = d - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), function () {
      return t.mouseOverlay.removeChild(m);
    };
  },
  PointerButton: function PointerButton(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      u = e.click,
      _s$c$l4 = s[c][l],
      d = _s$c$l4.centerX,
      p = _s$c$l4.centerY,
      f = {
        onDown: function onDown() {
          u ? n.sendMouseButton(e.button, !0) : t.pointerButton = e.button;
        },
        onUp: function onUp() {
          u ? n.sendMouseButton(e.button, !1) : t.pointerButton = 0;
        }
      };
    if (r.register(c, l, {
      activate: f.onDown,
      deactivate: f.onUp
    }), Jc(o, c, l)) return function () {};
    var h = ic(e.symbol, f, a);
    return h.style.position = "absolute", h.style.left = d - h.widthPx / 2 + "px", h.style.top = p - h.heightPx / 2 + "px", t.mouseOverlay.appendChild(h), function () {
      return t.mouseOverlay.removeChild(h);
    };
  },
  PointerMove: function PointerMove(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      u = e.x,
      d = e.y,
      _s$c$l5 = s[c][l],
      p = _s$c$l5.centerX,
      f = _s$c$l5.centerY,
      h = {
        onDown: function onDown() {
          n.sendMouseMotion(u, d);
        },
        onUp: function onUp() {
          n.sendMouseMotion(u, d);
        }
      };
    if (r.register(c, l, {
      activate: h.onDown,
      deactivate: h.onUp
    }), Jc(o, c, l)) return function () {};
    var m = ic(e.symbol, h, a);
    return m.style.position = "absolute", m.style.left = p - m.widthPx / 2 + "px", m.style.top = f - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), function () {
      return t.mouseOverlay.removeChild(m);
    };
  },
  PointerReset: function PointerReset(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      _s$c$l6 = s[c][l],
      u = _s$c$l6.centerX,
      d = _s$c$l6.centerY,
      p = {
        onDown: function onDown() {
          n.sendMouseSync();
        }
      };
    if (r.register(c, l, {
      activate: p.onDown,
      deactivate: function deactivate() {}
    }), Jc(o, c, l)) return function () {};
    var f = ic(e.symbol, p, a);
    return f.style.position = "absolute", f.style.left = u - f.widthPx / 2 + "px", f.style.top = d - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), function () {
      return t.mouseOverlay.removeChild(f);
    };
  },
  PointerToggle: function PointerToggle(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = e.row,
      l = e.column,
      _s$c$l7 = s[c][l],
      u = _s$c$l7.centerX,
      d = _s$c$l7.centerY,
      p = {
        onDown: function onDown() {
          t.pointerDisabled = !t.pointerDisabled, t.pointerDisabled ? f.classList.contains("emulator-button-highlight") || f.classList.add("emulator-button-highlight") : f.classList.remove("emulator-button-highlight");
        }
      };
    if (r.register(c, l, {
      activate: p.onDown,
      deactivate: function deactivate() {}
    }), Jc(o, c, l)) return function () {};
    var f = ic(e.symbol, p, a);
    return f.style.position = "absolute", f.style.left = u - f.widthPx / 2 + "px", f.style.top = d - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), function () {
      return t.mouseOverlay.removeChild(f);
    };
  },
  NippleActivator: function NippleActivator(e, t, n, o, r, i) {
    var s = o.cells,
      a = o.columnWidth,
      c = o.rowHeight,
      l = o.width,
      u = o.height,
      d = e.row,
      p = e.column,
      _s$d$p = s[d][p],
      f = _s$d$p.centerX,
      h = _s$d$p.centerY,
      m = document.createElement("div"),
      v = 1.5,
      y = Math.max(0, f - a * v),
      _ = Math.max(0, h - c * v),
      g = Math.max(0, l - f - a * v),
      b = Math.max(0, u - h - c * v);
    m.style.position = "absolute", m.style.zIndex = "999", m.style.left = y + "px", m.style.top = _ + "px", m.style.right = g + "px", m.style.bottom = b + "px", t.mouseOverlay.appendChild(m);
    var w = Hc({
      zone: m,
      multitouch: !1,
      maxNumberOfNipples: 1,
      mode: "static",
      follow: !1,
      dynamicPage: !0,
      size: 1.5 * Math.max(a, c),
      position: {
        left: (l - g - y) / 2 + "px",
        top: (u - b - _) / 2 + "px"
      }
    });
    var k = -1,
      x = -1;
    w.on("move", function (e, t) {
      if (t.distance < 10) return r.deactivate(x, k), k = -1, void (x = -1);
      var n = -1,
        o = -1;
      var i = 22.5,
        s = t.angle.degree;
      s > i && s <= 67.5 ? (n = p + 1, o = d - 1) : s > 67.5 && s <= 112.5 ? (n = p, o = d - 1) : s > 112.5 && s <= 157.5 ? (n = p - 1, o = d - 1) : s > 157.5 && s <= 202.5 ? (n = p - 1, o = d) : s > 202.5 && s <= 247.5 ? (n = p - 1, o = d + 1) : s > 247.5 && s <= 292.5 ? (n = p, o = d + 1) : s > 292.5 && s <= 337.5 ? (n = p + 1, o = d + 1) : (n = p + 1, o = d), k === n && x === o || (r.deactivate(x, k), r.activate(o, n), k = n, x = o);
    });
    var C = !1;
    w.on("start", function () {
      C = !0;
    }), w.on("end", function () {
      C = !1, r.deactivate(x, k), x = -1, k = -1;
    });
    var S = {
      capture: !0
    };
    function P(e) {
      C && w.processOnEnd(e);
    }
    var _iterator55 = _createForOfIteratorHelper(Ga.enders),
      _step55;
    try {
      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
        var _E = _step55.value;
        t.mouseOverlay.addEventListener(_E, P, S);
      }
    } catch (err) {
      _iterator55.e(err);
    } finally {
      _iterator55.f();
    }
    return function () {
      w.destroy(), t.mouseOverlay.removeChild(m);
      var _iterator56 = _createForOfIteratorHelper(Ga.enders),
        _step56;
      try {
        for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
          var _e28 = _step56.value;
          t.mouseOverlay.removeEventListener(_e28, P, S);
        }
      } catch (err) {
        _iterator56.e(err);
      } finally {
        _iterator56.f();
      }
    };
  }
};
function Qc(e, t, n, o, r, i) {
  var s = o.cells,
    a = o.columnWidth,
    c = e.row,
    l = e.column,
    _s$c$l8 = s[c][l],
    u = _s$c$l8.centerX,
    d = _s$c$l8.centerY,
    p = ic("keyboard", {
      onUp: function onUp() {
        return t.toggleKeyboard();
      }
    }, a);
  return p.style.position = "absolute", p.style.left = u - p.widthPx / 2 + "px", p.style.top = d - p.heightPx / 2 + "px", t.mouseOverlay.appendChild(p), function () {
    t.mouseOverlay.removeChild(p);
  };
}
function Jc(e, t, n) {
  return !0 === e.cells[t][n].hidden;
}
function el(e, t, n) {
  function o(o, r) {
    if ((o !== t || r !== n) && o >= 0 && o < e.cells.length) {
      var _t64 = e.cells[o];
      r >= 0 && r < _t64.length && (_t64[r].hidden = !0);
    }
  }
  for (var _r0 = t - 1; _r0 <= t + 1; ++_r0) for (var _e29 = n - 1; _e29 <= n + 1; ++_e29) o(_r0, _e29);
}
function tl(e, t) {
  !function (e) {
    var t = eo();
    ae(function () {
      e.events().onMessage(function (e) {
        var o;
        "error" === e && (null == (o = arguments.length <= 1 ? undefined : arguments[1]) ? void 0 : o.startsWith("[panic]")) && t(Zr.actions.showToast({
          message: arguments.length <= 1 ? undefined : arguments[1],
          intent: "panic"
        }));
      });
    }, [e, t]);
  }(t), function (e) {
    var t = on(function (e) {
      return e.dos.imageRendering;
    });
    ae(function () {
      e.style.imageRendering = "smooth" === t ? "auto" : t;
    }, [e, t]);
  }(e), function (e) {
    var t = eo(),
      n = Wr();
    ae(function () {
      var o = 0,
        r = 0,
        i = 0,
        s = 48,
        a = 0,
        c = 0,
        l = 0,
        u = 0,
        d = Date.now();
      var p = setInterval(function () {
        e.asyncifyStats().then(function (e) {
          var p = Date.now() - d,
            f = p / 1e3;
          if (f > 0) {
            var _structuredClone;
            var _h2 = {
              cyclesPerMs: Math.round((e.cycles - o) / p),
              nonSkippableSleepPreSec: Math.round((e.nonSkippableSleepCount - r) / f),
              sleepPerSec: Math.round((e.sleepCount - i) / f),
              sleepTimePerSec: Math.round((e.sleepTime - s) / f),
              framePerSec: Math.round((e.messageFrame - a) / f),
              soundPerSec: Math.round((e.messageSound - c) / f),
              msgSentPerSec: Math.round((e.messageSent - l) / f),
              msgRecvPerSec: Math.round((e.messageReceived - u) / f),
              netSent: e.netSent,
              netRecv: e.netRecv,
              driveIo: (_structuredClone = structuredClone(e.driveIo)) !== null && _structuredClone !== void 0 ? _structuredClone : []
            };
            if (t(Ci.actions.stats(_h2)), _h2.driveIo.length > 0) {
              var _e30 = n("preloading_sockdrive"),
                _o20 = !1;
              for (var _t65 = 0; _t65 < _h2.driveIo.length; _t65++) {
                var _n19 = _h2.driveIo[_t65],
                  _r1 = Math.min(100, Math.round(100 * _n19.read / _n19.preload));
                _e30 += " " + (0 === _t65 ? "C: " : ", D: ") + " " + _r1 + "%", _o20 = _o20 || _r1 < 100;
              }
              _o20 && t(Zr.actions.showToast({
                message: _e30,
                "long": !0
              }));
            }
            o = e.cycles, r = e.nonSkippableSleepCount, i = e.sleepCount, s = e.sleepTime, a = e.messageFrame, c = e.messageSound, l = e.messageSent, u = e.messageReceived, d = Date.now();
          }
        });
      }, 1e3);
      return function () {
        clearInterval(p);
      };
    }, [t, e]);
  }(t), function (e) {
    var t = on(function (e) {
        return e.dos.paused;
      }),
      n = on(function (e) {
        return e.ui.documentHidden;
      });
    ae(function () {
      t || n ? e.pause() : e.resume();
    }, [t, n, e]);
  }(t), function (e) {
    var t = eo(),
      n = "dosboxX" === on(function (e) {
        return e.dos.backend;
      });
    ae(function () {
      return function (e, t, n, o) {
        var r = new Set();
        function i() {
          r.forEach(function (e) {
            t.sendKeyEvent(e, !1);
          }), r.clear();
        }
        function s(e) {
          if ("text" === e.target.type) return;
          n && ("F6" === e.key && (Ti(t), o(Zr.actions.setHaveQuickSave(!0))), "F7" === e.key && Li(t));
          var i = Ka(e.keyCode, e.location);
          t.sendKeyEvent(i, !0), r.add(i), e.stopPropagation(), e.preventDefault();
        }
        function a(e) {
          if ("text" === e.target.type) return;
          var n = Ka(e.keyCode, e.location);
          t.sendKeyEvent(n, !1), r["delete"](n), e.stopPropagation(), e.preventDefault();
        }
        function c() {
          i();
        }
        return e.addEventListener("keydown", s), e.addEventListener("keyup", a), e.addEventListener("blur", c), function () {
          i(), e.removeEventListener("keydown", s), e.removeEventListener("keyup", a), e.removeEventListener("blur", c);
        };
      }(window, e, n, t);
    }, [e, n, t]);
  }(t), function (e, t) {
    var n = on(function (e) {
        return e.dos.mobileControls;
      }),
      o = on(function (e) {
        return e.dos.mouseCapture;
      }),
      r = on(function (e) {
        return e.dos.mouseSensitivity;
      });
    ae(function () {
      if (!n) return ec(o, r, 0, e, t);
    }, [e, t, o, r, n]);
  }(e, t), function (e, t) {
    var n = mi(),
      o = on(function (e) {
        return e.dos.mouseCapture;
      }),
      r = on(function (e) {
        return e.dos.mirroredControls;
      }),
      i = 1 + on(function (e) {
        return e.dos.scaleControls;
      }),
      s = .1 + 3 * on(function (e) {
        return e.dos.mouseSensitivity;
      }),
      a = on(function (e) {
        return e.dos.mobileControls;
      }),
      c = eo();
    var l = on(function (e) {
      return e.dos.softKeyboard;
    });
    function u() {
      l = !l, c(Ci.actions.softKeyboard(l));
    }
    ae(function () {
      a ? null === n.layers ? (n.layers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        var n, a, c, l, d, p, _t66;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.n) {
            case 0:
              n = new nc(e.parentElement, e, u, {});
              _t66 = oc;
              _context15.n = 1;
              return t.config();
            case 1:
              a = _t66(_context15.v.jsdosConf);
              l = null, d = function d() {};
              p = {
                config: a,
                layers: n,
                autolock: o,
                sensitivity: s,
                mirroredControls: r,
                scaleControls: i,
                activeLayer: c,
                getActiveConfig: function getActiveConfig() {
                  return l;
                },
                setActiveConfig: function setActiveConfig(e, o) {
                  l = e, c = o, d(), null === e ? (d = function d() {}, n.mouseOverlay.style.display = "none") : void 0 === e.version ? (n.mouseOverlay.style.display = "block", d = Xc(p, n, e, t)) : (n.mouseOverlay.style.display = "block", d = $c(n, e, t, p, p.mirroredControls, p.scaleControls, o));
                }
              };
              return _context15.a(2, (p.setActiveConfig(a), p));
          }
        }, _callee15);
      }))(), n.layers["catch"](console.error)) : n.layers.then(function (e) {
        var _e$getActiveConfig;
        e.autolock = o, e.sensitivity = s, e.mirroredControls = r, e.scaleControls = i, e.setActiveConfig((_e$getActiveConfig = e.getActiveConfig()) !== null && _e$getActiveConfig !== void 0 ? _e$getActiveConfig : e.config, e.activeLayer);
      }) : null !== n.layers && n.layers.then(function (e) {
        return e.setActiveConfig(null);
      });
    }, [t, o, s, a, r, i]);
  }(e, t), function (e, t) {
    var n = mi(),
      o = on(function (e) {
        return e.dos.renderBackend;
      }),
      r = on(function (e) {
        return e.dos.renderAspect;
      });
    var i;
    switch (r) {
      case "1/1":
        i = 1;
        break;
      case "5/4":
        i = 5 / 4;
        break;
      case "4/3":
        i = 4 / 3;
        break;
      case "16/10":
        i = 1.6;
        break;
      case "16/9":
        i = 16 / 9;
        break;
      case "Fit":
        i = ki;
    }
    ae(function () {
      var r = function r() {};
      if ("canvas" === o) r = Va(e, t, i);else try {
        r = Ua(e, t, n, i);
      } catch (s) {
        console.error("Unalbe to start webgl render", s), r = Va(e, t, i);
      }
      return r;
    }, [e, t, o, i]);
  }(e, t), function (e) {
    var t = Qn();
    ae(function () {
      var n = function (e, t) {
        var n = e.soundFrequency();
        if (0 === n) return console.warn("Can't create audio node with sampleRate === 0, ingnoring"), function () {};
        var o = null;
        if ("undefined" != typeof AudioContext ? o = new AudioContext({
          sampleRate: n,
          latencyHint: "interactive"
        }) : void 0 !== window.webkitAudioContext && (o = new window.webkitAudioContext({
          sampleRate: n,
          latencyHint: "interactive"
        })), null == o) return function () {};
        var r = new Wa();
        e.events().onSoundPush(function (e) {
          r.length() < 6144 && r.push(e);
        });
        var i = o.createScriptProcessor(2048, 0, 1);
        var s = !1;
        i.onaudioprocess = function (e) {
          var t = e.outputBuffer.length,
            n = e.outputBuffer.numberOfChannels,
            o = r.length();
          if (s || (s = o >= 2048), s) for (var _i15 = 0; _i15 < n; _i15++) {
            var _n20 = e.outputBuffer.getChannelData(_i15);
            r.writeTo(_n20, t);
          }
        };
        var a = o.createGain();
        var c;
        a.connect(o.destination), i.connect(a), a.gain.value = 1, c = t(function (e) {
          a.gain.value = e;
        });
        var l = function l() {
          null !== o && "suspended" === o.state && o.resume();
        };
        return document.addEventListener("pointerdown", l, {
          once: !0
        }), document.addEventListener("keydown", l, {
          once: !0
        }), function () {
          e.events().onSoundPush(function () {}), null !== o && (i.disconnect(), a.disconnect(), o.close()["catch"](console.error), o = null), void 0 !== c && c(), document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", l);
        };
      }(e, function (e) {
        var n = 1;
        var o = function o() {
          var o = yi(t).dos.volume;
          Math.abs(n - o) >= .05 && (e(o), n = o);
        };
        return t.subscribe(o);
      });
      return n;
    }, [e]);
  }(t);
}
var nl = [{
  cpu: "a7",
  width: 640,
  height: 1136,
  model: "iPhone 5/iPhone 5s"
}, {
  cpu: "a7",
  width: 1536,
  height: 2048,
  model: "iPad Air/iPad Mini 2/iPad Mini 3"
}, {
  cpu: "a8",
  width: 640,
  height: 1136,
  model: "iPod touch (6th gen)"
}, {
  cpu: "a8",
  width: 750,
  height: 1334,
  model: "iPhone 6"
}, {
  cpu: "a8",
  width: 1242,
  height: 2208,
  model: "iPhone 6 Plus"
}, {
  cpu: "a8",
  width: 1536,
  height: 2048,
  model: "iPad Air 2/iPad Mini 4"
}, {
  cpu: "a9",
  width: 640,
  height: 1136,
  model: "iPhone SE"
}, {
  cpu: "a9",
  width: 750,
  height: 1334,
  model: "iPhone 6s"
}, {
  cpu: "a9",
  width: 1242,
  height: 2208,
  model: "iPhone 6s Plus"
}, {
  cpu: "a9x",
  width: 1536,
  height: 2048,
  model: "iPad Pro (1st gen 9.7-inch)"
}, {
  cpu: "a9x",
  width: 2048,
  height: 2732,
  model: "iPad Pro (1st gen 12.9-inch)"
}, {
  cpu: "a10",
  width: 750,
  height: 1334,
  model: "iPhone 7"
}, {
  cpu: "a10",
  width: 1242,
  height: 2208,
  model: "iPhone 7 Plus"
}, {
  cpu: "a10x",
  width: 1668,
  height: 2224,
  model: "iPad Pro (2th gen 10.5-inch)"
}, {
  cpu: "a10x",
  width: 2048,
  height: 2732,
  model: "iPad Pro (2th gen 12.9-inch)"
}, {
  cpu: "a11",
  width: 750,
  height: 1334,
  model: "iPhone 8"
}, {
  cpu: "a11",
  width: 1242,
  height: 2208,
  model: "iPhone 8 Plus"
}, {
  cpu: "a11",
  width: 1125,
  height: 2436,
  model: "iPhone X"
}, {
  cpu: "a12",
  width: 828,
  height: 1792,
  model: "iPhone Xr"
}, {
  cpu: "a12",
  width: 1125,
  height: 2436,
  model: "iPhone Xs"
}, {
  cpu: "a12",
  width: 1242,
  height: 2688,
  model: "iPhone Xs Max"
}, {
  cpu: "a12x",
  width: 1668,
  height: 2388,
  model: "iPad Pro (3rd gen 11-inch)"
}, {
  cpu: "a12x",
  width: 2048,
  height: 2732,
  model: "iPad Pro (3rd gen 12.9-inch)"
}, {
  cpu: "a13",
  width: 828,
  height: 1792,
  model: "iPhone 11"
}, {
  cpu: "a13",
  width: 1125,
  height: 2436,
  model: "iPhone 11 Pro"
}, {
  cpu: "a13",
  width: 1242,
  height: 2688,
  model: "iPhone 11 Pro Max"
}, {
  cpu: "a14",
  width: 1080,
  height: 2340,
  model: "iPhone 12 Mini"
}, {
  cpu: "a14",
  width: 1170,
  height: 2532,
  model: "iPhone 12"
}, {
  cpu: "a14",
  width: 1284,
  height: 2778,
  model: "iPhone 12 Pro Max"
}, {
  cpu: "a15",
  width: 1080,
  height: 2340,
  model: "iPhone 13 Mini"
}, {
  cpu: "a15",
  width: 1170,
  height: 2532,
  model: "iPhone 13"
}, {
  cpu: "a15",
  width: 1284,
  height: 2778,
  model: "iPhone 13 Pro Max"
}, {
  cpu: "a15",
  width: 1170,
  height: 2532,
  model: "iPhone 14"
}, {
  cpu: "a15",
  width: 1284,
  height: 2778,
  model: "iPhone 14 Plus"
}, {
  cpu: "a16",
  width: 1179,
  height: 2556,
  model: "iPhone 14 Pro"
}, {
  cpu: "a16",
  width: 1290,
  height: 2796,
  model: "iPhone 14 Pro Max"
}, {
  cpu: "a16",
  width: 1179,
  height: 2556,
  model: "iPhone 15"
}, {
  cpu: "a16",
  width: 1290,
  height: 2796,
  model: "iPhone 15 Plus"
}, {
  cpu: "a17",
  width: 1179,
  height: 2556,
  model: "iPhone 15 Pro"
}, {
  cpu: "a17",
  width: 1290,
  height: 2796,
  model: "iPhone 15 Pro Max"
}, {
  cpu: "a18",
  width: 1179,
  height: 2556,
  model: "iPhone 16"
}, {
  cpu: "a18",
  width: 1290,
  height: 2796,
  model: "iPhone 16 Plus"
}, {
  cpu: "a18",
  width: 1206,
  height: 2622,
  model: "iPhone 16 Pro"
}, {
  cpu: "a18",
  width: 1320,
  height: 2868,
  model: "iPhone 16 Pro Max"
}];
function ol(e) {
  var _o$version;
  var t = navigator.userAgent + " ";
  function n(e, t, n) {
    var o = RegExp(e, "i").exec(t);
    return o && o[n];
  }
  var o = function () {
      var e = {
        Yandex: {
          prefixs: ["YaApp", "YaBrowser"]
        },
        Firefox: {
          prefixs: ["Firefox"]
        },
        Opera: {
          prefixs: ["OPR"]
        },
        Edge: {
          prefixs: ["Edg"]
        },
        "Samsung Browser": {
          prefixs: ["SamsungBrowser"]
        },
        "Internet Explorer": {
          prefixs: ["Trident", "MSIE"]
        },
        Chrome: {
          prefixs: ["Chrome"]
        },
        "Chrome on iOS": {
          prefixs: ["CriOS"]
        },
        "Firefox on iOS": {
          prefixs: ["FxiOS"]
        },
        Safari: {
          prefixs: ["Safari"]
        },
        Facebook: {
          prefixs: ["FBSV"],
          regExp: "[/;](.*?)[;\\)]"
        }
      };
      for (var _i16 = 0, _Object$entries = Object.entries(e); _i16 < _Object$entries.length; _i16++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i16], 2),
          _o21 = _Object$entries$_i[0],
          _r10 = _Object$entries$_i[1];
        var _iterator57 = _createForOfIteratorHelper(_r10.prefixs),
          _step57;
        try {
          for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
            var _e31 = _step57.value;
            var _i17 = n(_e31 + (_r10.regExp || "[/ ](.*?)[ \\)]"), t, 1);
            if (null !== _i17) return "Safari" === _o21 && (_i17 = n("Version/(.*?) ", t, 1)), "Internet Explorer" === _o21 && (_i17 = n("rv:(.*?)\\)? ", t, 1) || _i17), {
              name: _o21,
              version: _i17
            };
          }
        } catch (err) {
          _iterator57.e(err);
        } finally {
          _iterator57.f();
        }
      }
      return {
        name: "",
        version: ""
      };
    }(),
    r = function () {
      var e = {
        Android: ["Android ([0-9_.]+)"],
        Windows: ["Windows (.*?)[;)]"],
        iOS: ["iPhone OS ([0-9_.]+)", "iPad.*? OS ([0-9_.]+)"],
        macOS: ["Mac OS X ([0-9_.]+)"],
        Linux: ["FreeBSD( )", "OpenBSD( )", "Linux|X11()"],
        "Search Bot": ["bot|google|baidu|bing|msn|teoma|slurp|yandex"]
      };
      for (var _i18 = 0, _Object$entries2 = Object.entries(e); _i18 < _Object$entries2.length; _i18++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i18], 2),
          _o22 = _Object$entries2$_i[0],
          _r11 = _Object$entries2$_i[1];
        var _iterator58 = _createForOfIteratorHelper(_r11),
          _step58;
        try {
          for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
            var _e32 = _step58.value;
            var _r12 = n(_e32, t, 1);
            if (null != _r12) {
              if (_r12 = _r12.replace(/_/g, "."), "Windows" === _o22) {
                _r12 = {
                  "NT 5.0": "2000",
                  "NT 5.1": "XP",
                  "NT 5.2": "Server 2003",
                  "NT 6.0": "Vista",
                  "NT 6.1": "7",
                  "NT 6.2": "8",
                  "NT 6.3": "8.1",
                  "NT 10.0": "10"
                }[_r12] || _r12;
              }
              return {
                name: _o22,
                version: _r12
              };
            }
          }
        } catch (err) {
          _iterator58.e(err);
        } finally {
          _iterator58.f();
        }
      }
      return {
        name: "",
        version: ""
      };
    }(),
    i = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && void 0 !== navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
    s = navigator.hardwareConcurrency,
    a = function (e) {
      var t = e.getExtension("WEBGL_debug_renderer_info");
      if (t) return e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "-";
      return "-";
    }(e),
    c = function () {
      var e = window.devicePixelRatio || 1;
      return {
        width: Math.min(screen.width, screen.height) * e,
        height: Math.max(screen.width, screen.height) * e
      };
    }(),
    l = c.height,
    u = c.width;
  return {
    browser: o.name,
    browserVersion: (_o$version = o.version) !== null && _o$version !== void 0 ? _o$version : "???",
    mobile: i,
    os: r.name,
    osVersion: r.version,
    gpu: a,
    deviceModel: rl(i, a, {
      width: u,
      height: l
    }),
    cpu: (s || 0).toString(),
    emscripten: "3.1.68"
  };
}
function rl(e, t, n) {
  if (!e) return "desktop/laptop";
  return t.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i) ? function (e) {
    var t = "";
    var _iterator59 = _createForOfIteratorHelper(nl),
      _step59;
    try {
      for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
        var _n21 = _step59.value;
        e.width === Math.min(_n21.width, _n21.height) && e.height === Math.max(_n21.width, _n21.height) && (t += t.length > 0 ? "/" + _n21.model : _n21.model);
      }
    } catch (err) {
      _iterator59.e(err);
    } finally {
      _iterator59.f();
    }
    return t.length > 0 ? t : "unknown iPhone";
  }(n) : function (e) {
    var t = [/Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/, /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android(.+)Build/];
    for (var _i19 = 0, _t67 = t; _i19 < _t67.length; _i19++) {
      var _n22 = _t67[_i19];
      var _t68 = e.match(_n22);
      if (_t68 && _t68.length > 0) return _t68[1];
    }
    return "unknown Android";
  }(navigator.userAgent);
}
function il(e) {
  var _u$pc;
  var t = e.ci,
    n = mi(),
    o = on(function (e) {
      return e.dos.backend;
    }),
    r = on(function (e) {
      return e.dos.worker;
    }),
    i = on(function (e) {
      var t;
      return null == (t = e.auth.account) ? void 0 : t.token;
    }),
    s = on(function (e) {
      return e.dos.emuVersion;
    }),
    a = on(function (e) {
      return e.dos.backendHardware;
    }) && n.options.backendHardware,
    _ie27 = ie(!1),
    _ie28 = _slicedToArray(_ie27, 2),
    c = _ie28[0],
    l = _ie28[1],
    _ie29 = ie({
      runs: 0,
      time: 0,
      vax: 0,
      pc: null
    }),
    _ie30 = _slicedToArray(_ie29, 2),
    u = _ie30[0],
    d = _ie30[1],
    _ie31 = ie({
      sleepPerSec: 0,
      cyclesPerMs: 0
    }),
    _ie32 = _slicedToArray(_ie31, 2),
    p = _ie32[0],
    f = _ie32[1];
  return ae(function () {
    var e = [];
    t.events().onStdout(function (t) {
      for (var _i20 = 0, _e33 = e; _i20 < _e33.length; _i20++) {
        var _n23 = _e33[_i20];
        _n23(t);
      }
    });
    var c = t.events().onStdout;
    t.events().onStdout = function (t) {
      e.push(t);
    };
    var u = Date.now(),
      p = 0,
      h = 0;
    return t.events().onStdout(function (e) {
      if (!e.startsWith("dhry2:")) return;
      t.asyncifyStats().then(function (e) {
        var t = Date.now() - u;
        f({
          sleepPerSec: Math.round(1e3 * (e.sleepCount - p) / t),
          cyclesPerMs: Math.round((e.cycles - h) / t)
        }), u = Date.now(), p = e.sleepCount, h = e.cycles;
      });
      var _e$split = e.split(" "),
        _e$split2 = _slicedToArray(_e$split, 4),
        c = _e$split2[0],
        m = _e$split2[1],
        v = _e$split2[2],
        y = _e$split2[3],
        _ = Number.parseInt(m),
        g = Number.parseFloat(v),
        b = Number.parseFloat(y);
      g >= 5e3 ? (d({
        runs: _,
        time: Math.round(10 * g) / 10,
        vax: Math.round(100 * b) / 100,
        pc: sl(b)
      }), _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        var e, _t69;
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              e = n.gl;
              if (!e) {
                _context16.n = 1;
                break;
              }
              _t69 = _objectSpread({
                token: i !== null && i !== void 0 ? i : "",
                test: "dhry2",
                jsdos: "8.3.20",
                emu: s,
                backend: o,
                worker: r,
                hardware: !1 !== a && null != a,
                result: Math.round(100 * b) / 100
              }, ol(e));
              _context16.n = 1;
              return fetch(Qr + "/perf/set", {
                method: "POST",
                body: JSON.stringify(_t69)
              });
            case 1:
              return _context16.a(2);
          }
        }, _callee16);
      }))()["catch"](console.error)["finally"](function () {
        return l(!0);
      })) : d({
        runs: _,
        time: Math.round(10 * g) / 10,
        vax: Math.round(100 * b) / 100,
        pc: null
      });
    }), function () {
      t.events().onStdout = c;
    };
  }, [t]), Ui("div", {
    "class": "dhry2-window",
    children: [Ui("div", {
      "class": "title",
      children: "Dhrystone 2 Benchmark"
    }), Ui("div", {
      "class": "backend",
      children: ["Backend: ", o + "-" + (r ? "worker" : "direct"), " ", a ? "(WS)" : "(WA)"]
    }), Ui("div", {
      "class": "results",
      children: [Ui("div", {
        children: "VAX:"
      }), Ui("div", {
        children: u.vax
      }), Ui("div", {
        children: "Cycles p/ms:"
      }), Ui("div", {
        children: p.cyclesPerMs
      }), Ui("div", {
        children: "Sleep p/sec:"
      }), Ui("div", {
        children: p.sleepPerSec
      }), Ui("div", {
        children: "Runs:"
      }), Ui("div", {
        children: u.runs
      }), Ui("div", {
        children: "Time:"
      }), Ui("div", {
        children: [u.time, " ", Ui("span", {
          children: "ms"
        })]
      }), c && null !== u.pc && Ui("div", {
        children: "PC:"
      }), c && null !== u.pc && Ui("div", {
        children: (_u$pc = u.pc) !== null && _u$pc !== void 0 ? _u$pc : "..."
      })]
    }), !c && Ui("div", {
      "class": "mt-14 text-yellow-500",
      children: "Please wait until this message disappears"
    }), !c && !i && Ui("div", {
      "class": "mt-14 text-yellow-500",
      children: "Please enter your key to submit results"
    })]
  });
}
function sl(e) {
  var t = 0;
  for (; 2 * t + 1 < al.length && !(al[2 * t + 1] >= e);) t++;
  return t = Math.min(al.length / 2 - 1, t), (al[2 * t] + "").trim();
}
var al = ["AMD 80386 40MHz", 13.7, "IBM 486D2 50MHz", 22.4, "80486 DX2 66MHz", 35.3, "IBM 486BL 100MHz", 40.9, "AMD 5X86 133MHz", 84.5, "Pentium 75MHz", 87.1, "Cyrix P150 120MHz", 160, "Pentium 100MHz", 122, "Cyrix PP166 133MHz", 180, "IBM 6x86 150MHz", 188, "Pentium 133MHz", 181, "Pentium 166MHz", 189, "Cyrix PR233 188MHz", 232, "Pentium 200MHz", 269, "Pentium MMX 200MHz", 276, "AMD K6 200MHz", 289, "Pentium Pro 200MHz", 312, "Celeron A 300MHz", 484, "Pentium II 300MHz", 477, "AMD K62 500MHz", 606, "AMD K63 450MHz", 645, "Pentium II 450MHz", 713, "Celeron A 450MHz", 720, "Pentium III 450MHz", 722, "Pentium III 600MHz", 959, "Athlon 600MHz", 942, "Duron 600MHz", 999, "Pentium III 1000MHz", 1595, "PIII Tualatin 1200MHz", 1907, "Pentium 4 1700MHz", 1843, "Athlon Tbird 1000MHz", 1659, "Duron 1000MHz", 1674, "Celeron M 1295MHz", 2273, "Atom 1600MHz", 1828, "Pentium 4 1900MHz", 2003, "Atom 1666MHz", 1948, "P4 Xeon 2200MHz", 2265, "Atom Z8300 1840MHz", 2686, "Athlon 4 1600MHz", 2830, "Pentium M 1862MHz", 3933, "Ath4 Barton 1800MHz", 3172, "Pentium 4E 3000MHz", 3553, "Athlon XP 2080MHz", 3700, "Turion 64 M 1900MHz", 3742, "Pentium 4 3066MHz", 4012, "Opteron 1991MHz", 3985, "Core 2 Duo M 1830MHz", 4952, "Athlon XP 2338MHz", 4160, "Athlon 64 2150MHz", 4288, "Pentium 4 3678MHz", 4227, "Athlon 64 2211MHz", 4462, "Celeron C2 M 2000MHz", 5275, "Core 2 Duo 1 CP 2400MHz", 6446, "Core i5 2467M 2300MHz", 4752, "Phenom II 1 CP 3000MHz", 7615, "Core i7 930 3066MHz", 8684, "Core i7 860 3460MHz", 9978, "Core i7 3930K 3800MHz", 11197, "Core i7 4820K 3900MHz", 11867, "Core i7 4820K 3900MHz", 11978, "Core i7 3930K", 13877],
  cl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"'],
  ll = [91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 62, 90, 63, 64, 65, 66, 91, 67, 68, 69, 70, 71, 91, 72, 73, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 74, 75, 76, 77, 78, 79, 80, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 81, 91, 82, 83, 84, 85, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 86, 87, 88, 89, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91];
var ul = 0;
var dl = function dl(e) {
    var t = e.length;
    var n = "",
      o = 0,
      r = 0,
      i = 0;
    for (ul = 0; ul < t; ++ul) o |= (255 & e[ul]) << r, r += 8, r > 13 && (i = 8191 & o, i > 88 ? (o >>= 13, r -= 13) : (i = 16383 & o, o >>= 14, r -= 14), n += cl[i % 91], n += cl[i / 91 | 0]);
    return r > 0 && (n += cl[o % 91], (r > 7 || o > 90) && (n += cl[o / 91 | 0])), n;
  },
  pl = function pl(e) {
    var t = e.length;
    var n = t / 1.2297 | 0;
    var o = 0,
      r = 0,
      i = -1,
      s = 0,
      a = -1,
      c = 0,
      l = new Array(n);
    for (s = 0; s < t; ++s) if (c = e.charCodeAt(s), 91 !== ll[c]) if (-1 === i) i = ll[c];else {
      i += 91 * ll[c], o |= i << r, r += (8191 & i) > 88 ? 13 : 14;
      do {
        ++a >= n ? l.push(255 & o) : l[a] = 255 & o, o >>= 8, r -= 8;
      } while (r > 7);
      i = -1;
    }
    -1 !== i && (++a >= n ? l.push(o | i << r) : l[a] = o | i << r), a > -1 && a < n - 1 && (l = l.slice(0, a + 1));
    var u = new Uint8Array(l.length);
    for (s = 0, t = l.length; s < t; ++s) u[s] = l[s];
    return u;
  },
  fl = new TextDecoder(),
  hl = new TextEncoder(),
  ml = 2e8,
  vl = {};
["wc-install", "wc-run", "wc-pack-fs-to-bundle", "wc-add-key", "wc-mouse-move", "wc-mouse-button", "wc-mouse-sync", "wc-exit", "wc-sync-sleep", "wc-pause", "wc-resume", "wc-mute", "wc-unmute", "wc-connect", "wc-disconnect", "wc-backend-event", "wc-asyncify-stats", "wc-fs-tree", "wc-fs-get-file", "wc-send-data-chunk", "wc-net-connected", "wc-net-received", "wc-sockdrive-opened", "wc-sockdrive-new-range", "wc-unload"].forEach(function (e, t) {
  return vl[e] = t;
});
var yl = {};
["ws-extract-progress", "ws-ready", "ws-server-ready", "ws-frame-set-size", "ws-update-lines", "ws-log", "ws-warn", "ws-err", "ws-stdout", "ws-exit", "ws-persist", "ws-sound-init", "ws-sound-push", "ws-config", "ws-sync-sleep", "ws-connected", "ws-disconnected", "ws-asyncify-stats", "ws-fs-tree", "ws-send-data-chunk", "ws-net-connect", "ws-net-disconnect", "ws-net-send", "ws-sockdrive-open", "ws-sockdrive-ready", "ws-sockdrive-close", "ws-sockdrive-load-range", "ws-sockdrive-write-sector", "ws-unload"].forEach(function (e, t) {
  return yl[t] = e;
});
var _l = /*#__PURE__*/function () {
  function _l(e) {
    _classCallCheck(this, _l);
    t(this, "socket"), this.socket = e;
  }
  return _createClass(_l, [{
    key: "send",
    value: function send(e) {
      this.socket.send(e);
    }
  }, {
    key: "onMessage",
    value: function onMessage(e) {
      var t = null,
        n = null,
        o = 0,
        r = [];
      var i = function i(_i23) {
          if (null === t || t < 7) {
            if (null === t) {
              if (_i23.length < 6 || 1 !== _i23[0] || 1 !== Ai(_i23, 1)) return void console.error("unparsable version message on transport layer, blob size:", _i23.length, " error: too short");
              t = _i23[5];
            }
            e(_i23);
          } else null === n ? (n = Ai(_i23, 0), r.push(_i23.slice(4)), o += _i23.length - 4) : (r.push(_i23), o += _i23.length);
          if (null !== n && o === n) {
            var _t70 = new Uint8Array(n);
            var _i21 = 0;
            for (var _i22 = 0, _r13 = r; _i22 < _r13.length; _i22++) {
              var _e34 = _r13[_i22];
              _t70.set(_e34, _i21), _i21 += _e34.length;
            }
            r = [], o = 0, n = null, e(_t70);
          }
        },
        s = [];
      var a = !1;
      this.socket.addEventListener("message", function (e) {
        s.push({
          size: e.data.size,
          buffer: e.data.arrayBuffer()
        }), a || (a = !0, c()["catch"](console.error)["finally"](function () {
          return a = !1;
        }));
      });
      var c = /*#__PURE__*/function () {
        var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
          var _s$shift, _t71, _n24, _e35, _t72, _t73, _t74;
          return _regenerator().w(function (_context17) {
            while (1) switch (_context17.p = _context17.n) {
              case 0:
                if (!(s.length > 0)) {
                  _context17.n = 5;
                  break;
                }
                _s$shift = s.shift(), _t71 = _s$shift.size, _n24 = _s$shift.buffer;
                _context17.p = 1;
                _t72 = Uint8Array;
                _context17.n = 2;
                return _n24;
              case 2:
                _t73 = _context17.v;
                _e35 = new _t72(_t73);
                i(_e35);
                _context17.n = 4;
                break;
              case 3:
                _context17.p = 3;
                _t74 = _context17.v;
                console.error("unparsable message on transport layer, blob size:", _t71, " error:", _t74.message), console.error(_t74);
              case 4:
                _context17.n = 0;
                break;
              case 5:
                return _context17.a(2);
            }
          }, _callee17, null, [[1, 3]]);
        }));
        return function c() {
          return _ref20.apply(this, arguments);
        };
      }();
    }
  }, {
    key: "onError",
    value: function onError(e) {
      var _this8 = this;
      this.socket.addEventListener("error", function (t) {
        e(t), _this8.socket.close();
      });
    }
  }]);
}();
var gl = /*#__PURE__*/function () {
  function gl(e, n) {
    var _this9 = this;
    _classCallCheck(this, gl);
    t(this, "socket"), t(this, "sessionId", Date.now() + ""), t(this, "hardware"), t(this, "onInit", function () {}), t(this, "cycles", 0), t(this, "version", 0), t(this, "handler", function () {}), this.socket = e, this.socket.onError(function (e) {
      var _e$message;
      _this9.handler("ws-err", {
        tag: "ws",
        message: (_e$message = e.message) !== null && _e$message !== void 0 ? _e$message : "Unknown transport layer error"
      }), _this9.handler("ws-exit", {});
    }), this.socket.onMessage(this.onMessage.bind(this)), this.sendMessageToSocket("wc-install"), this.hardware = null, this.onInit = n;
  }
  return _createClass(gl, [{
    key: "readUint64",
    value: function readUint64(e, t) {
      return Ai(e, t) + Ai(e, t + 4) * Math.pow(2, 32);
    }
  }, {
    key: "sendMessageToSocket",
    value: function sendMessageToSocket(e) {
      var n = 1;
      for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        t[_key - 1] = arguments[_key];
      }
      for (var _i24 = 0, _t75 = t; _i24 < _t75.length; _i24++) {
        var _ref21;
        var _i25 = _t75[_i24];
        n += 4 + ((_ref21 = null == _i25 ? void 0 : _i25.length) !== null && _ref21 !== void 0 ? _ref21 : 0);
      }
      var o = new Uint8Array(n);
      o[0] = "string" == typeof e ? vl[e] : e;
      var r = 1;
      for (var _i26 = 0, _t76 = t; _i26 < _t76.length; _i26++) {
        var _ref22;
        var _i27 = _t76[_i26];
        Di(o, (_ref22 = null == _i27 ? void 0 : _i27.length) !== null && _ref22 !== void 0 ? _ref22 : 0, r), r += 4, _i27 && (o.set(_i27, r), r += _i27.length);
      }
      this.socket.send(o);
    }
  }, {
    key: "readMessage",
    value: function readMessage(e) {
      var t = [];
      var n = 1;
      for (; n + 4 <= e.length;) {
        var _o23 = Ai(e, n);
        if (n += 4, n + _o23 > e.length) throw new Error("read_message out of bounds");
        t.push(e.slice(n, n + _o23)), n += _o23;
      }
      return {
        id: e[0],
        payload: t
      };
    }
  }, {
    key: "onMessage",
    value: function onMessage(e) {
      var t;
      var _this$readMessage = this.readMessage(e),
        n = _this$readMessage.id,
        o = _this$readMessage.payload,
        r = yl[n];
      switch (r) {
        case "ws-ready":
          this.version = o && o[0] && o.length > 0 ? o[0][0] : 0, this.onInit(this.version), this.handler(r, {});
          break;
        case "ws-server-ready":
        case "ws-exit":
          "ws-server-ready" !== r && this.handler(r, {});
          break;
        case "ws-stdout":
        case "ws-log":
        case "ws-warn":
        case "ws-err":
          this.handler(r, {
            tag: fl.decode(o[0]),
            message: fl.decode(o[1])
          });
          break;
        case "ws-send-data-chunk":
          {
            var _e36 = {
              type: fl.decode(o[0]),
              name: fl.decode(o[1]),
              data: o[2]
            };
            this.handler(r, {
              chunk: _e36
            });
          }
          break;
        case "ws-config":
          this.handler(r, {
            dosboxConf: o[0],
            jsdosConf: fl.decode(o[1])
          });
          break;
        case "ws-sound-init":
          this.handler(r, {
            freq: Ai(o[0], 0)
          }), this.handler("ws-server-ready", {});
          break;
        case "ws-sound-push":
          this.handler(r, {
            samples: new Float32Array(o[0].buffer)
          });
          break;
        case "ws-frame-set-size":
          this.handler(r, {
            width: Ai(o[0], 0),
            height: Ai(o[0], 4)
          });
          break;
        case "ws-update-lines":
          if (o.length > 0) {
            var _e37 = [];
            var _iterator60 = _createForOfIteratorHelper(o),
              _step60;
            try {
              for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                var _t77 = _step60.value;
                _e37.push({
                  start: Ai(_t77, 0),
                  heapu8: _t77.slice(4)
                });
              }
            } catch (err) {
              _iterator60.e(err);
            } finally {
              _iterator60.f();
            }
            this.handler(r, {
              lines: _e37
            });
          }
          break;
        case "ws-asyncify-stats":
          {
            this.cycles += Ai(o[0], 0);
            var _e38 = {
              messageSent: Ai(o[0], 4),
              messageReceived: Ai(o[0], 8),
              messageFrame: Ai(o[0], 12),
              messageSound: Ai(o[0], 16),
              nonSkippableSleepCount: 0,
              sleepCount: 0,
              sleepTime: 0,
              cycles: this.cycles,
              netSent: 0,
              netRecv: 0,
              driveBufferedAmount: 0,
              driveIo: []
            };
            this.handler(r, _e38);
          }
          break;
        case "ws-connected":
          this.handler(r, {
            networkType: o[0][0],
            address: fl.decode(o[1])
          });
          break;
        case "ws-disconnected":
          this.handler(r, {
            networkType: o[0][0]
          });
          break;
        case "ws-fs-tree":
          {
            var _e39 = function _e39(e) {
              var t;
              var n = e.split("/");
              var o = _i28;
              var _loop2 = function _loop2() {
                var i = n[_r14];
                if (o = null == (t = o.nodes) ? void 0 : t.find(function (e) {
                  return e.name == i;
                }), !o) throw new Error("Unable to find node " + e + ", subdir " + i);
              };
              for (var _r14 = 1; _r14 < n.length - 1; ++_r14) {
                _loop2();
              }
              return [o, n[n.length - 1]];
            };
            var _n25 = [];
            for (var _t78 = 0; _t78 < o.length - 1; ++_t78) _n25.push({
              name: fl.decode(o[_t78]),
              size: null
            });
            var _r15 = o[o.length - 1];
            for (var _t79 = 0; _t79 < _n25.length; ++_t79) {
              var _e40 = Ai(_r15, 4 * _t79);
              _n25[_t79].size = _e40 < 0 ? null : _e40;
            }
            var _i28 = {
              name: ".",
              nodes: [],
              size: null
            };
            for (var _i29 = 0, _n26 = _n25; _i29 < _n26.length; _i29++) {
              var _n26$_i = _n26[_i29],
                _o24 = _n26$_i.name,
                _s4 = _n26$_i.size;
              var _e41 = _e39(_o24),
                _e42 = _slicedToArray(_e41, 2),
                _n27 = _e42[0],
                _r16 = _e42[1];
              null == (t = _n27.nodes) || t.push({
                name: _r16,
                size: _s4,
                nodes: null === _s4 ? [] : null
              });
            }
            this.handler("ws-fs-tree", {
              fsTree: _i28
            });
          }
          break;
        case "ws-persist":
          this.handler("ws-persist", {
            bundle: o.length > 0 ? o[0] : null
          });
          break;
        case "ws-net-connect":
          {
            var _e43 = fl.decode(o[0]);
            _e43.startsWith("wss://") || _e43.startsWith("ws://") || (_e43 = ("http:" === window.location.protocol && "localhost" !== window.location.hostname ? "ws://" : "wss://") + _e43), this.handler("ws-net-connect", {
              address: _e43
            });
          }
          break;
        case "ws-net-send":
          this.handler("ws-net-send", {
            networkId: Ai(o[0], 0),
            data: o[1]
          });
          break;
        case "ws-net-disconnect":
          this.handler("ws-net-disconnect", {
            networkId: Ai(o[0], 0)
          });
          break;
        case "ws-unload":
          this.handler("ws-unload", {});
          break;
        case "ws-sockdrive-open":
          this.handler("ws-sockdrive-open", {
            handle: Ai(o[0], 0),
            url: fl.decode(o[1])
          });
          break;
        case "ws-sockdrive-ready":
          this.handler("ws-sockdrive-ready", {
            handle: Ai(o[0], 0)
          });
          break;
        case "ws-sockdrive-close":
          this.handler("ws-sockdrive-close", {
            handle: Ai(o[0], 0)
          });
          break;
        case "ws-sockdrive-load-range":
          this.handler("ws-sockdrive-load-range", {
            handle: Ai(o[0], 0),
            range: Ai(o[0], 4)
          });
          break;
        case "ws-sockdrive-write-sector":
          this.handler("ws-sockdrive-write-sector", {
            handle: Ai(o[0], 0),
            sector: Ai(o[0], 4),
            data: o[1]
          });
          break;
        default:
          console.warn("WARN! Unhandled server message", r);
      }
    }
  }, {
    key: "sendMessageToServer",
    value: function () {
      var _sendMessageToServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(e, t) {
        var n, _t$token, _e44, _e45, _e46, _o25, _e47, _o26, _e48, _e49, _e50, _e51, _e52, _o27, _r17, _i30, _s5, a, _c4, _l6, _u2, d, _p4, _iterator61, _step61, _t80, _e53, _o28, _r18, _i31, _t81;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.n) {
            case 0:
              if (!(void 0 === t || (null == t ? void 0 : t.sessionId) !== this.sessionId)) {
                _context18.n = 1;
                break;
              }
              return _context18.a(2);
            case 1:
              n = vl[e];
              _t81 = e;
              _context18.n = _t81 === "wc-run" ? 2 : _t81 === "wc-send-data-chunk" ? 3 : _t81 === "wc-asyncify-stats" ? 4 : _t81 === "wc-fs-tree" ? 4 : _t81 === "wc-unload" ? 4 : _t81 === "wc-add-key" ? 5 : _t81 === "wc-mouse-move" ? 6 : _t81 === "wc-mouse-button" ? 7 : _t81 === "wc-mouse-sync" ? 8 : _t81 === "wc-connect" ? 9 : _t81 === "wc-pack-fs-to-bundle" ? 10 : _t81 === "wc-net-connected" ? 11 : _t81 === "wc-net-received" ? 12 : _t81 === "wc-sockdrive-opened" ? 13 : _t81 === "wc-sockdrive-new-range" ? 14 : 15;
              break;
            case 2:
              _e44 = (_t$token = t.token) !== null && _t$token !== void 0 ? _t$token : "";
              this.sendMessageToSocket(n, hl.encode(_e44));
              return _context18.a(3, 16);
            case 3:
              _e45 = t.chunk;
              this.sendMessageToSocket(n, hl.encode(_e45.type), hl.encode(_e45.name), _e45.data ? new Uint8Array(_e45.data) : null);
              return _context18.a(3, 16);
            case 4:
              this.sendMessageToSocket(n);
              return _context18.a(3, 16);
            case 5:
              _e46 = new Uint8Array(12);
              _o25 = 0;
              _o25 = Di(_e46, t.key, _o25), _o25 = Di(_e46, t.pressed ? 1 : 0, _o25), Di(_e46, t.timeMs, _o25), this.sendMessageToSocket(n, _e46);
              return _context18.a(3, 16);
            case 6:
              _e47 = new Uint8Array(15);
              _o26 = 0;
              _o26 = Di(_e47, Math.abs(t.x) * ml, _o26), _o26 = Di(_e47, Math.abs(t.y) * ml, _o26), _o26 = Di(_e47, t.timeMs, _o26), _e47[_o26] = t.relative ? 1 : 0, _e47[_o26 + 1] = t.x >= 0 ? 0 : 1, _e47[_o26 + 2] = t.y >= 0 ? 0 : 1, this.sendMessageToSocket(n, _e47);
              return _context18.a(3, 16);
            case 7:
              _e48 = new Uint8Array(6);
              _e48[0] = t.button, _e48[1] = t.pressed ? 1 : 0, Di(_e48, t.timeMs, 2), this.sendMessageToSocket(n, _e48);
              return _context18.a(3, 16);
            case 8:
              _e49 = new Uint8Array(4);
              Di(_e49, t.timeMs, 0), this.sendMessageToSocket(n, _e49);
              return _context18.a(3, 16);
            case 9:
              this.sendMessageToSocket(n, new Uint8Array([t.networkType]), hl.encode(t.address));
              return _context18.a(3, 16);
            case 10:
              this.sendMessageToSocket(n, new Uint8Array([t.onlyChanges ? 1 : 0]));
              return _context18.a(3, 16);
            case 11:
              _e50 = new Uint8Array(4);
              Di(_e50, t.networkId + 1, 0), this.sendMessageToSocket(n, _e50);
              return _context18.a(3, 16);
            case 12:
              _e51 = new Uint8Array(4);
              Di(_e51, t.networkId, 0), this.sendMessageToSocket(n, _e51, new Uint8Array(t.data));
              return _context18.a(3, 16);
            case 13:
              _e52 = t.handle, _o27 = t.sectorSize, _r17 = t.emptyRangesCount, _i30 = t.emptyRanges, _s5 = t.size, a = t.heads, _c4 = t.cylinders, _l6 = t.sectors, _u2 = t.aheadRange, d = new Uint8Array(12 + 4 * _r17 + 4 + 4 + 4 + 4 + 4);
              _p4 = 0;
              _p4 = Di(d, _e52, _p4), _p4 = Di(d, _o27, _p4), _p4 = Di(d, _r17, _p4);
              _iterator61 = _createForOfIteratorHelper(_i30);
              try {
                for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                  _t80 = _step61.value;
                  _p4 = Di(d, _t80, _p4);
                }
              } catch (err) {
                _iterator61.e(err);
              } finally {
                _iterator61.f();
              }
              _p4 = Di(d, _s5, _p4), _p4 = Di(d, a, _p4), _p4 = Di(d, _c4, _p4), _p4 = Di(d, _l6, _p4), _p4 = Di(d, _u2, _p4), this.sendMessageToSocket(n, d);
              return _context18.a(3, 16);
            case 14:
              _e53 = t.handle, _o28 = t.range, _r18 = t.buffer, _i31 = new Uint8Array(8);
              Di(_i31, _e53, 0), Di(_i31, _o28, 4), this.sendMessageToSocket(n, _i31, new Uint8Array(_r18));
              return _context18.a(3, 16);
            case 15:
              console.log("Unhandled client message (wc):", e, n, t);
            case 16:
              return _context18.a(2);
          }
        }, _callee18, this);
      }));
      function sendMessageToServer(_x30, _x31) {
        return _sendMessageToServer.apply(this, arguments);
      }
      return sendMessageToServer;
    }()
  }, {
    key: "initMessageHandler",
    value: function initMessageHandler(e) {
      var _this0 = this;
      this.handler = function (t, n) {
        n.sessionId = _this0.sessionId, e(t, n);
      };
    }
  }, {
    key: "exit",
    value: function exit() {
      this.sendMessageToSocket("wc-exit");
    }
  }]);
}();
var bl = /*#__PURE__*/function () {
  function bl() {
    var _this1 = this;
    _classCallCheck(this, bl);
    t(this, "handler", function () {}), window.wsMessage = function (e) {
      _this1.handler(pl(e));
    };
  }
  return _createClass(bl, [{
    key: "send",
    value: function send(e) {
      window.android.wcMessage(dl(e));
    }
  }, {
    key: "onMessage",
    value: function onMessage(e) {
      this.handler = e;
    }
  }, {
    key: "onError",
    value: function onError(e) {}
  }]);
}();
function wl(e) {
  var t = e.ci,
    n = on(function (e) {
      return e.dos.softKeyboard;
    }),
    o = on(function (e) {
      return e.dos.softKeyboardLayout;
    }),
    r = on(function (e) {
      return e.dos.softKeyboardSymbols;
    }),
    i = on(function (e) {
      return e.dos.softKeyboardActiveSymbols;
    }),
    s = on(function (e) {
      return e.dos.softKeyboardActiveLayout;
    }),
    a = eo(),
    c = r[i % r.length],
    l = o[s % o.length];
  if (!n || null === t) return null;
  function u(e, n) {
    if (null !== t) if ("{symbols}" === e) {
      if (n) {
        var _e54 = (i + 1) % r.length;
        _e54 !== i && a(Ci.actions.softKeyboardActiveSymbols(_e54));
      }
    } else if ("{layout}" === e) {
      if (n) {
        var _e55 = (s + 1) % o.length;
        _e55 !== s && a(Ci.actions.softKeyboardActiveLayout(_e55));
      }
    } else {
      var _iterator62 = _createForOfIteratorHelper(function (e) {
          switch (e) {
            case "{enter}":
              return [xa];
            case "{shift}":
              return [Pa];
            case "{bksp}":
              return [ka];
            case "{lock}":
              return [280];
            case "{tab}":
              return [wa];
            case "{space}":
              return [32];
            case "{esc}":
              return [ba];
            case "{ctrl}":
              return [Sa];
            case "{alt}":
              return [Ca];
            case "{up}":
              return [La];
            case "{down}":
              return [za];
            case "{left}":
              return [Ta];
            case "{right}":
              return [Ba];
            case ",":
              return [44];
            case ".":
              return [46];
            case "'":
              return [39];
            case ":":
              return [Pa, 59];
            case "{":
              return [Pa, 91];
            case "}":
              return [Pa, 93];
            case "(":
              return [Pa, 57];
            case ")":
              return [Pa, Zs];
            case "{f1}":
              return [Qs];
            case "{f2}":
              return [Js];
            case "{f3}":
              return [ea];
            case "{f4}":
              return [ta];
            case "{f5}":
              return [na];
            case "{f6}":
              return [oa];
            case "{f7}":
              return [ra];
            case "{f8}":
              return [ia];
            case "{f9}":
              return [sa];
            case "{f10}":
              return [aa];
            case "{f11}":
              return [ca];
            case "{f12}":
              return [la];
            case "{kp1}":
              return [da];
            case "{kp2}":
              return [pa];
            case "{kp3}":
              return [fa];
            case "{kp4}":
              return [ha];
            case "{kp5}":
              return [ma];
            case "{kp6}":
              return [va];
            case "{kp7}":
              return [ya];
            case "{kp8}":
              return [_a];
            case "{kp9}":
              return [ga];
            case "{kp0}":
              return [ua];
            case "{pgup}":
              return [Ma];
            case "{pgdown}":
              return [Aa];
            case "{del}":
              return [ja];
            case "{home}":
              return [Oa];
            case "{end}":
              return [Da];
            case "-":
              return [45];
            case "=":
              return [Ea];
            case "+":
              return [Pa, Ea];
            default:
              if (e.length > 1) return console.warn("Unknown button", e), [];
          }
          var t = Ka(e.toUpperCase().charCodeAt(0), 0);
          if (0 === t) return [];
          return [t];
        }(e)),
        _step62;
      try {
        for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
          var _o29 = _step62.value;
          t.sendKeyEvent(_o29, n);
        }
      } catch (err) {
        _iterator62.e(err);
      } finally {
        _iterator62.f();
      }
    }
  }
  function d(e) {
    return e.length > 2 && e.startsWith("{") && e.endsWith("}") ? e[1].toUpperCase() + e.substring(2, e.length - 1) : e;
  }
  return Ui("div", {
    "class": "soft-keyboard my-4 mx-2",
    children: Ui("div", {
      "class": "flex flex-row gap-2 flex-wrap justify-evenly items-center",
      children: l.map(function (e, t) {
        return Ui("div", {
          "class": "flex flex-col gap-2 flex-wrap" + (1 === l.length || 1 === t ? " items-center" : 0 === t ? " items-start" : " items-end"),
          children: e.map(function (e) {
            return Ui("div", {
              "class": "flex flex-row gap-2 flex-wrap items-center",
              children: 0 === e.length ? Ui("div", {
                "class": "kbd-md"
              }) : e.split(" ").map(function (e) {
                var _ref23, _c$e;
                return Ui("kbd", {
                  "class": "kbd kbd-md cursor-pointer hover:bg-accent-focus",
                  onPointerDown: function onPointerDown() {
                    return u(e, !0);
                  },
                  onPointerUp: function onPointerUp() {
                    return u(e, !1);
                  },
                  onPointerCancel: function onPointerCancel() {
                    return u(e, !1);
                  },
                  children: (_ref23 = (_c$e = c[e]) !== null && _c$e !== void 0 ? _c$e : r[0][e]) !== null && _ref23 !== void 0 ? _ref23 : d(e)
                });
              })
            });
          })
        });
      })
    })
  });
}
function kl(e) {
  var _on;
  var t = le(null),
    _ie33 = ie(null),
    _ie34 = _slicedToArray(_ie33, 2),
    n = _ie34[0],
    o = _ie34[1],
    r = (_on = on(function (e) {
      var t;
      return null == (t = e.auth.account) ? void 0 : t.token;
    })) !== null && _on !== void 0 ? _on : "",
    i = on(function (e) {
      return e.dos.worker;
    }),
    s = on(function (e) {
      return e.dos.backend;
    }),
    a = on(function (e) {
      return e.dos.backendHardware;
    }),
    c = on(function (e) {
      return e.dos.noCursor;
    }),
    l = on(function (e) {
      return e.ui.pointerLocked;
    }),
    u = on(function (e) {
      return e.dos.mouseCapture;
    }),
    d = eo(),
    p = mi(),
    f = Ga.canLock && u && !l ? "cursor-pointer" : c ? "cursor-none" : "";
  return ae(function () {
    try {
      var _e56 = p.loadedBundle;
      var _t82 = null !== _e56.bundleChanges ? [_e56.bundle, _e56.bundleChanges] : _e56.bundle;
      if (null !== _e56.initFs) if (Array.isArray(_t82) || (_t82 = [_t82]), Array.isArray(_e56.initFs)) {
        var _iterator63 = _createForOfIteratorHelper(_e56.initFs),
          _step63;
        try {
          for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
            var _o30 = _step63.value;
            _t82.push(_o30);
          }
        } catch (err) {
          _iterator63.e(err);
        } finally {
          _iterator63.f();
        }
      } else _t82.push(_e56.initFs);
      _e56.bundle = null, _e56.bundleChanges = null, _e56.appliedBundleChanges = null, _e56.initFs = null;
      var _n28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
        var _o31, e, n, _t83, _t84;
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              if (!(a && p.options.backendHardware)) {
                _context19.n = 3;
                break;
              }
              _context19.n = 1;
              return p.options.backendHardware(s);
            case 1:
              _o31 = _context19.v;
              if (!(null !== _o31)) {
                _context19.n = 3;
                break;
              }
              _t83 = emulators;
              _t84 = _t82;
              _context19.n = 2;
              return e = _o31, n = function n(e) {
                e < 5 && d(Zr.actions.updateWsWarning(!0)), console.log("wsServer:", e, " expected:", 5);
              }, new Promise(function (t) {
                var o = !1;
                var r = setInterval(function () {
                  if (!o) if (o = !0, "android://" === e) clearInterval(r), console.log("Connected to", e), t(new gl(new bl(), n));else {
                    var _i32 = new WebSocket(e),
                      _s6 = function _s6() {
                        clearInterval(r), console.log("Connected to", e), t(new gl(new _l(_i32), n));
                      };
                    _i32.addEventListener("error", function (t) {
                      console.error("Can't conect to ", e, t), _i32.removeEventListener("open", _s6), _i32.close(), o = !1;
                    }), _i32.addEventListener("open", _s6);
                  }
                }, 1e3);
              });
            case 2:
              return _context19.a(2, _t83.backend.call(_t83, _t84, _context19.v, {
                token: r
              }));
            case 3:
              return _context19.a(2, emulators[("dosbox" !== s && "dosboxX" !== s ? "dosbox" : s) + (i ? "Worker" : "Direct")](_t82, {
                token: r
              }));
          }
        }, _callee19);
      }))();
      return _n28.then(function (e) {
        o(e), d(Ci.actions.ci(!0)), Ga.mobile && e.config().then(function (e) {
          d(Ci.actions.mobileControls(null !== oc(e.jsdosConf)));
        })["catch"](function (e) {
          return d(Ci.actions.emuError(e.message));
        }), p.ci = e, vi(p, "ci-ready", e);
      })["catch"](function (e) {
        return d(Ci.actions.emuError(e.message));
      }), function () {
        _n28.then(function (e) {
          d(Ci.actions.ci(!1)), p.ci = null, e.exit();
        });
      };
    } catch (e) {
      d(Ci.actions.emuError(e.message));
    }
  }, [i, s, r]), Ui("div", {
    "class": "flex flex-col flex-grow h-full overflow-hidden",
    children: [Ui("div", {
      "class": "bg-black h-full flex-grow overflow-hidden relative",
      children: [Ui("canvas", {
        "class": f,
        ref: t
      }), t.current && n && Ui(Cl, {
        canvas: t.current,
        ci: n
      }), Ui(xl, {})]
    }), Ui(wl, {
      ci: n
    })]
  });
}
function xl() {
  var e = on(function (e) {
      return e.ui.pointerLocked;
    }),
    t = on(function (e) {
      return e.dos.mouseCapture;
    }),
    n = on(function (e) {
      return e.dos.mouseSensitivity;
    }),
    o = on(function (e) {
      return e.ui.clickToLockModal;
    }),
    r = Wr();
  return !e && Ga.canLock && t ? Ui("div", o ? {
    "class": "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black/70 gap-2 px-4 py-2 text-white text-center",
    children: [Ui("div", {
      "class": "text-4xl",
      children: r("click_to_lock")
    }), Ui("div", {
      "class": "text-xl",
      children: r("use_esc_key_to_unlock")
    }), Ui("div", {
      "class": "text-xl",
      children: r("use_slider_to_change_sensitivity")
    }), Ui("div", {
      "class": "text-sm",
      children: [r("current_sensitivity"), ": ", n.toFixed(2)]
    })]
  } : {
    "class": "absolute top-6 left-0 w-full pointer-events-none flex flex-row items-center justify-center",
    children: Ui("div", {
      "class": "flex flex-col items-center justify-center bg-black/70 gap-2 px-4 py-2 text-white text-center rounded-lg",
      children: [Ui("div", {
        "class": "text-4xl",
        children: r("click_to_lock")
      }), Ui("div", {
        "class": "text-xl",
        children: r("use_esc_key_to_unlock")
      }), Ui("div", {
        "class": "text-xl",
        children: r("use_slider_to_change_sensitivity")
      }), Ui("div", {
        "class": "text-sm",
        children: [r("current_sensitivity"), ": ", n.toFixed(2)]
      })]
    })
  }) : null;
}
function Cl(e) {
  var t = e.canvas,
    n = e.ci,
    o = on(function (e) {
      return e.dos.bundle;
    });
  return tl(t, n), Ui(g, {
    children: [Ui(Pl, {
      ci: n
    }), (null == o ? void 0 : o.endsWith(ti)) && Ui(il, {
      ci: n
    })]
  });
}
var Sl = function Sl() {};
function Pl(e) {
  var t = e.ci,
    n = Wr(),
    o = Qn(),
    r = mi(),
    _ie35 = ie(!1),
    _ie36 = _slicedToArray(_ie35, 2),
    i = _ie36[0],
    s = _ie36[1],
    _ie37 = ie(!1),
    _ie38 = _slicedToArray(_ie37, 2),
    a = _ie38[0],
    c = _ie38[1],
    _ie39 = ie(null),
    _ie40 = _slicedToArray(_ie39, 2),
    l = _ie40[0],
    u = _ie40[1];
  return ae(function () {
    if (null !== l) {
      c(!0);
      var _e57 = function _e57() {
        c(!1), Sl();
      };
      l ? Oi(o.getState(), r, o.dispatch, !0)["catch"](console.error)["finally"](_e57) : _e57();
    }
  }, [l]), ae(function () {
    t.events().onUnload(function () {
      return new Promise(function (e) {
        s(!0), Sl = e;
      });
    });
  }, [t]), i ? Ui("dialog", {
    id: "save-dialog",
    className: "modal",
    open: !0,
    children: Ui("div", {
      className: "modal-box",
      children: [Ui("h3", {
        className: "font-bold text-lg",
        children: n("emulation_ended")
      }), Ui("p", {
        className: "py-4",
        children: n("confirm_save")
      }), Ui("div", {
        className: "modal-action",
        children: Ui("form", {
          method: "dialog",
          className: "join",
          children: [Ui("button", {
            className: "btn btn-neutral join-item",
            onClick: function onClick() {
              s(!1), u(!1);
            },
            children: n("close")
          }), Ui("button", {
            className: "btn btn-primary join-item",
            onClick: function onClick() {
              s(!1), u(!0);
            },
            children: n("save")
          })]
        })
      })]
    })
  }) : a ? Ui("dialog", {
    id: "busy-dialog",
    className: "modal",
    open: !0,
    children: Ui("div", {
      className: "modal-box",
      children: [Ui("h3", {
        className: "font-bold text-lg",
        children: n("emulation_ended")
      }), Ui("div", {
        "class": "flex flex-row gap-4 py-4 items-center",
        children: [Ui("span", {
          "class": "loading loading-spinner loading-lg"
        }), Ui("p", {
          children: n("saving_game")
        })]
      })]
    })
  }) : null;
}
function El(e) {
  var _e$error;
  var t = Wr(),
    n = (_e$error = e.error) !== null && _e$error !== void 0 ? _e$error : "Unexpected error";
  return Ui("div", {
    "class": "flex-grow flex flex-col items-center justify-center px-8 m-auto",
    children: [Ui("div", {
      "class": "text-2xl text-center",
      children: t("error")
    }), Ui("div", {
      "class": "text-red-400 mt-8 text-2xl text-center",
      children: ['"', n, '"']
    }), Ui("div", {
      "class": "mt-8 text-sm text-center",
      children: t("consult_logs")
    }), e.onSkip && Ui("button", {
      "class": "mt-8 btn-primary",
      onClick: e.onSkip,
      children: t("skip")
    })]
  });
}
function Ol() {
  return Ui(El, {
    error: on(function (e) {
      return e.dos.error;
    })
  });
}
function Ml(e) {
  var t = e.head,
    n = e.message;
  return Ui("div", {
    "class": "flex flex-col items-center justify-center frame-color px-8",
    children: [Ui("div", {
      "class": "text-2xl text-center",
      children: t
    }), Ui("div", {
      "class": "mt-2 text-center",
      children: n
    })]
  });
}
function jl(e) {
  return e < 1024 ? e + "b" : (e /= 1024) < 1024 ? Math.round(e) + "kb" : (e /= 1024, Math.round(10 * e) / 10 + "mb");
}
function Dl() {
  var e = Wr(),
    t = on(function (e) {
      return e.dos.step;
    }),
    n = on(function (e) {
      return e.storage.recived;
    }),
    o = on(function (e) {
      return e.storage.total;
    }),
    r = on(function (e) {
      return e.storage.changedRecived;
    }),
    i = on(function (e) {
      return e.storage.changedTotal;
    });
  var s = e("loading"),
    a = "100%",
    c = "";
  switch (t) {
    case "bnd-load":
      s = e("bundle_loading"), n > 0 && (a = "".concat(jl(n), " / ").concat(jl(o)), o > 0 && (a += " (".concat(Math.round(1e3 * n / o) / 10, "%)"))), r > 0 && (c = "".concat(jl(r), " / ").concat(jl(i)), i > 0 && (c += " (".concat(Math.round(1e3 * r / i) / 10, "%)")));
      break;
    case "bnd-config":
      s = e("bundle_config");
  }
  return Ui("div", {
    "class": "flex flex-col w-full h-full items-center justify-center",
    children: [Ui(Ml, {
      head: s,
      message: a
    }), "" !== c && Ui(g, {
      children: [Ui("br", {}), Ui(Ml, {
        head: e("changes"),
        message: c
      })]
    })]
  });
}
function Al() {
  var e = Wr(),
    t = Qn(),
    _ie41 = ie(!1),
    _ie42 = _slicedToArray(_ie41, 2),
    n = _ie42[0],
    o = _ie42[1];
  if (n) return Ui("div", {
    "class": "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8 py-8",
    children: Ui(Tl, {})
  });
  function r(_x32) {
    return _r19.apply(this, arguments);
  }
  function _r19() {
    _r19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(e) {
      var n, _o$message2, _t86;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            if (!(null === e.files || 0 === e.files.length)) {
              _context23.n = 1;
              break;
            }
            return _context23.a(2);
          case 1:
            n = e.files[0];
            _context23.p = 2;
            _context23.n = 3;
            return Bi(n, t)["catch"](function (e) {
              return t.dispatch(Ci.actions.bndError(e.message));
            });
          case 3:
            _context23.n = 5;
            break;
          case 4:
            _context23.p = 4;
            _t86 = _context23.v;
            t.dispatch(Ci.actions.bndError((_o$message2 = _t86.message) !== null && _o$message2 !== void 0 ? _o$message2 : "unexpected error"));
          case 5:
            return _context23.a(2);
        }
      }, _callee23, null, [[2, 4]]);
    }));
    return _r19.apply(this, arguments);
  }
  function i() {
    Ss(r);
  }
  return Ui("div", {
    "class": "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8",
    children: [Ui("div", {
      "class": "mb-4 text-center underline cursor-pointer hover:text-accent",
      onClick: function onClick() {
        return o(!0);
      },
      children: e("load_by_url")
    }), Ui(Ll, {
      onUpload: i
    }), Ui("div", {
      "class": "mt-4 text-center",
      children: e("upload_file")
    }), Ui("div", {
      "class": "flex flex-row flex-wrap gap-4",
      children: [Ui("div", {
        "class": "mt-4 text-center underline cursor-pointer hover:text-accent",
        onClick: i,
        children: e("load_archive")
      }), Ui("div", {
        "class": "mt-4 text-center underline cursor-pointer hover:text-accent",
        onClick: function () {
          var _onClick3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
            var _e$message2, _t85;
            return _regenerator().w(function (_context22) {
              while (1) switch (_context22.p = _context22.n) {
                case 0:
                  _context22.p = 0;
                  _context22.n = 1;
                  return function () {
                    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(e) {
                      return _regenerator().w(function (_context21) {
                        while (1) switch (_context21.n) {
                          case 0:
                            _context21.n = 1;
                            return Ni("empty.jsdos", _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
                              return _regenerator().w(function (_context20) {
                                while (1) switch (_context20.n) {
                                  case 0:
                                    _context20.n = 1;
                                    return emulators.bundle();
                                  case 1:
                                    return _context20.a(2, _context20.v.toUint8Array());
                                }
                              }, _callee20);
                            }))(), null, null, e);
                          case 1:
                            e.dispatch(Zr.actions.frameConf());
                            e.dispatch(Zr.actions.setEditor(!0));
                          case 2:
                            return _context21.a(2);
                        }
                      }, _callee21);
                    }));
                    return function (_x33) {
                      return _ref25.apply(this, arguments);
                    };
                  }()(t)["catch"](console.error);
                case 1:
                  _context22.n = 3;
                  break;
                case 2:
                  _context22.p = 2;
                  _t85 = _context22.v;
                  t.dispatch(Ci.actions.bndError((_e$message2 = _t85.message) !== null && _e$message2 !== void 0 ? _e$message2 : "unexpected error"));
                case 3:
                  return _context22.a(2);
              }
            }, _callee22, null, [[0, 2]]);
          }));
          function onClick() {
            return _onClick3.apply(this, arguments);
          }
          return onClick;
        }(),
        children: e("create_empty")
      })]
    }), Ui("div", {
      "class": "mt-4 text-center",
      children: [e("sockdrives"), ":"]
    }), Ui("div", {
      "class": "flex flex-row flex-wrap gap-4",
      children: [{
        url: "https://br.cdn.dos.zone/js-dos/system/system-dos7.1-v1.jsdos",
        label: "DOS v7.1"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win311-v1.jsdos",
        label: "Windows 3.11"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win311-ru.jsdos",
        label: "Windows 3.11 (RU)"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win95-v1.jsdos",
        label: "Windows 95 v1"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win95-v2.jsdos",
        label: "Windows 95 v2"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win95-ru.jsdos",
        label: "Windows 95 (RU)"
      }, {
        url: "https://br.cdn.dos.zone/js-dos/system/system-win98-v1.jsdos",
        label: "Windows 98"
      }].map(function (_ref27) {
        var e = _ref27.url,
          t = _ref27.label;
        return Ui("a", {
          href: e,
          target: "_blank",
          "class": "mt-4 text-center underline cursor-pointer hover:text-accent",
          children: t
        });
      })
    })]
  });
}
function Tl() {
  var e = Wr(),
    t = Qn(),
    n = eo(),
    _ie43 = ie(""),
    _ie44 = _slicedToArray(_ie43, 2),
    o = _ie44[0],
    r = _ie44[1],
    _ie45 = ie(null),
    _ie46 = _slicedToArray(_ie45, 2),
    i = _ie46[0],
    s = _ie46[1];
  return Ui(g, {
    children: [Ui("div", {
      "class": "form-control w-3/4 mb-4",
      children: [Ui("label", {
        "class": "label",
        children: Ui("span", {
          "class": "label-text",
          children: [e("enter_url"), ":"]
        })
      }), Ui("input", {
        type: "text",
        "class": "input w-full input-sm input-bordered",
        onChange: function onChange(e) {
          var _e$currentTarget$valu;
          return r((_e$currentTarget$valu = e.currentTarget.value) !== null && _e$currentTarget$valu !== void 0 ? _e$currentTarget$valu : "");
        },
        value: o
      })]
    }), Ui("div", {
      "class": "mt-4 text-center underline cursor-pointer hover:text-accent",
      onClick: function onClick() {
        return function () {
          var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(e) {
            var o, _r$message, _t87, _t88;
            return _regenerator().w(function (_context24) {
              while (1) switch (_context24.p = _context24.n) {
                case 0:
                  n(Zr.actions.frameNone());
                  _context24.p = 1;
                  o = new URL(e);
                  _context24.n = 3;
                  break;
                case 2:
                  _context24.p = 2;
                  _t87 = _context24.v;
                  return _context24.a(2, void s(_t87.message));
                case 3:
                  _context24.p = 3;
                  _context24.n = 4;
                  return Ii(o.toString(), t);
                case 4:
                  _context24.n = 6;
                  break;
                case 5:
                  _context24.p = 5;
                  _t88 = _context24.v;
                  n(Ci.actions.bndError((_r$message = _t88.message) !== null && _r$message !== void 0 ? _r$message : "unexpected error"));
                case 6:
                  return _context24.a(2);
              }
            }, _callee24, null, [[3, 5], [1, 2]]);
          }));
          return function (_x34) {
            return _ref28.apply(this, arguments);
          };
        }()(o);
      },
      children: e("load")
    }), null !== i && Ui("div", {
      "class": "mt-8 text-center text-error",
      children: i
    })]
  });
}
function Ll(e) {
  return Ui("div", {
    "class": "cursor-pointer",
    onClick: e.onUpload,
    children: Ui("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "class": "w-48 h-48 play-button",
      children: Ui("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
      })
    })
  });
}
function zl(e) {
  var t = "none" !== on(function (e) {
      return e.ui.frame;
    }),
    n = on(function (e) {
      return e.ui.frameXs;
    }),
    o = on(function (e) {
      return e.ui.window;
    }),
    r = on(function (e) {
      return e.ui.background;
    }),
    i = on(function (e) {
      return e.ui.kiosk;
    }),
    s = on(function (e) {
      return e.ui.thinSidebar;
    });
  var a = Ui(Bl, {});
  switch (o) {
    case "error":
      a = Ui(Ol, {});
      break;
    case "loading":
      a = Ui(Dl, {});
      break;
    case "prerun":
      a = Ui(Ps, {});
      break;
    case "run":
      a = Ui(kl, {});
      break;
    case "select":
      a = Ui(Al, {});
  }
  var c = "left-12",
    l = "w-12";
  return s && !t ? (l = "w-4", c = "left-4") : t && (l = n ? "w-24" : "w-96"), Ui("div", {
    "class": "window absolute w-full h-full bg-base-100",
    children: [Ui("div", {
      "class": "background-image " + c,
      style: {
        backgroundImage: r ? "url(" + r + ")" : void 0
      }
    }), Ui("div", {
      "class": "relative flex flex-row h-full w-full items-start justify-start overflow-auto",
      children: [!i && Ui("div", {
        "class": l + " flex-shrink-0"
      }), a]
    })]
  });
}
function Bl() {
  return Ui("div", {
    "class": "w-full h-full flex justify-center items-center",
    children: Ui("div", {
      "class": "radial-progress animate-spin",
      style: "--value:70;"
    })
  });
}
var Il = Zr.getInitialState().wideScreen;
function Nl() {
  var e = le(null),
    t = on(function (e) {
      return e.ui.hidden;
    }),
    n = on(function (e) {
      return e.ui.theme;
    }),
    o = eo();
  return ae(function () {
    if (t || null === e || null === e.current) return;
    var n = e.current;
    function r() {
      var e = n.getBoundingClientRect().width > 640;
      e !== Il && (Il = e, o(Zr.actions.setWideScreen(Il)));
    }
    var i = new ResizeObserver(r);
    return i.observe(n), window.addEventListener("resize", r), function () {
      i.disconnect(), window.removeEventListener("resize", r);
    };
  }, [t, e, o]), t ? null : Ui("div", {
    ref: e,
    "class": "w-full h-full relative",
    "data-theme": n,
    children: [Ui(zl, {}), Ui(As, {}), Ui($s, {}), Ui(Rl, {}), Ui(Kl, {})]
  });
}
function Rl() {
  var e = on(function (e) {
      return e.ui.toast;
    }),
    t = on(function (e) {
      return e.ui.toastIntent;
    }),
    n = "panic" === t ? "error" : t;
  if (null === e) return null;
  var o = Ui("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  });
  return "warning" === t && (o = Ui("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  })), "error" !== t && "panic" !== t || (o = Ui("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  })), Ui("div", {
    "class": "absolute right-10 bottom-10 pointer-events-none " + ("error" === t || "panic" === t || "warning" === t ? "opacity-80" : "opacity-50"),
    children: Ui("div", {
      "class": "alert alert-" + n + " text-" + n + "-content",
      children: [Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "class": "shrink-0 w-6 h-6",
        children: o
      }), Ui("span", {
        "class": "break-words",
        children: e
      })]
    })
  });
}
function Kl() {
  var e = on(function (e) {
      return e.ui.updateWsWarning;
    }),
    t = Wr(),
    n = eo();
  if (!e) return null;
  return Ui("div", {
    "class": "absolute left-20 right-10 top-10 flex justify-center",
    children: Ui("div", {
      "class": "alert w-auto",
      children: [Ui("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "class": "size-6 text-error",
        children: Ui("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        })
      }), Ui("span", {
        children: t("ws_outdated")
      }), Ui("div", {
        children: [Ui("button", {
          "class": "btn btn-sm btn-primary mr-2",
          onClick: function onClick() {
            window.open("https://dos.zone/download/", "_blank"), n(Zr.actions.updateWsWarning(!1));
          },
          children: t("update")
        }), Ui("button", {
          "class": "btn btn-sm",
          onClick: function onClick() {
            n(Zr.actions.updateWsWarning(!1));
          },
          children: t("close")
        })]
      })]
    })
  });
}
window.Dos = function (e) {
  var _t$pathPrefix, _t$pathSuffix;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n;
  var o = function (e) {
      return {
        root: null,
        loadedBundle: null,
        ci: null,
        cache: new si(),
        options: e,
        layers: null,
        gl: null
      };
    }(t),
    r = function (e) {
      var _di = di(),
        t = _di.storeUid,
        n = _di.slice,
        o = Tr({
          reducer: {
            init: n.reducer,
            i18n: Vr.reducer,
            auth: oi.reducer,
            ui: Zr.reducer,
            dos: Ci.reducer,
            storage: ii.reducer,
            editor: Xr.reducer
          },
          middleware: function middleware(e) {
            var t = e();
            return t.push(pi), t;
          }
        });
      return fi[t] = e, o;
    }(o),
    i = ci();
  !function (e, t, n) {
    function o() {
      n.dispatch(Zr.actions.documentHidden(document.hidden));
    }
    t.root = e, e.classList.add("jsdos-rso"), e.addEventListener("contextmenu", function (e) {
      var t;
      if (null === e.target || !(null == (t = e.target.classList) ? void 0 : t.contains("contextmenu"))) return e.stopPropagation(), e.preventDefault(), !1;
    }), document.addEventListener("fullscreenchange", function (o) {
      if (!n.getState().ui.softFullscreen) {
        var _o32 = document.fullscreenElement === e;
        n.dispatch(Zr.actions.setFullScreen(_o32)), !_o32 && n.getState().ui.autoSave && Oi(yi(n), t, n.dispatch);
      }
    }), document.addEventListener("pointerlockchange", function () {
      n.dispatch(Zr.actions.pointerLocked(null !== document.pointerLockElement)), null !== document.pointerLockElement && n.getState().ui.clickToLockModal && n.dispatch(Zr.actions.clickToLockModal(!1)), null === document.pointerLockElement && n.getState().ui.autoSave && Oi(yi(n), t, n.dispatch);
    }), document.addEventListener("visibilitychange", o);
  }(e, o, r), null == (n = navigator.keyboard) || n.lock(["KeyW", "Escape"]);
  var s = "none";
  function a(e) {
    r.dispatch(Zr.actions.theme(e));
  }
  function c(e) {
    r.dispatch(Vr.actions.setLang(e));
  }
  function l(e) {
    r.dispatch(Ci.actions.dosBackend(e));
  }
  function u(e) {
    r.dispatch(Ci.actions.dosBackendLocked(e));
  }
  function d(e) {
    r.dispatch(Ci.actions.dosWorker(e));
  }
  function p(e) {
    r.dispatch(Ci.actions.mouseCapture(e));
  }
  function f(e) {
    r.dispatch(Ci.actions.setIpxBackends(e));
  }
  function h(e) {
    r.dispatch(Ci.actions.setIpxBackend(e));
  }
  function m(e) {
    r.dispatch(Ci.actions.setRoom(e));
  }
  function v(e) {
    r.dispatch(Zr.actions.background(e));
  }
  function y(e) {
    Ts(e, r);
  }
  function _(e) {
    r.dispatch(Zr.actions.autoStart(e));
  }
  function g(e) {
    r.dispatch(Zr.actions.countDownStart(e));
  }
  function b(e) {
    r.dispatch(Zr.actions.autoSave(e));
  }
  function w(e) {
    r.dispatch(Zr.actions.kiosk(e));
  }
  function k(e) {
    r.dispatch(Ci.actions.imageRendering(e));
  }
  function x(e) {
    r.dispatch(Ci.actions.renderBackend(e));
  }
  function C(e) {
    r.dispatch(Ci.actions.renderAspect(e));
  }
  function S(e) {
    r.dispatch(Zr.actions.noNetworking(e));
  }
  function P(e) {
    r.dispatch(Zr.actions.noCloud(e));
  }
  function E(e) {
    r.dispatch(Ci.actions.scaleControls(e));
  }
  function O(e) {
    r.dispatch(Ci.actions.mouseSensitivity(e));
  }
  function M(e) {
    r.dispatch(Ci.actions.noCursor(e));
  }
  function j(e) {
    r.dispatch(Ci.actions.softKeyboardLayout(e));
  }
  function D(e) {
    r.dispatch(Ci.actions.softKeyboardSymbols(e));
  }
  function A(e) {
    r.dispatch(Ci.actions.volume(e));
  }
  function T(e) {
    null === e || 5 !== e.length ? r.dispatch(oi.actions.setAccount(null)) : ri(e).then(function (_ref29) {
      var e = _ref29.account;
      r.dispatch(oi.actions.setAccount(e));
    })["catch"](console.error);
  }
  function L(e) {
    r.dispatch(Zr.actions.softFullscreen(e));
  }
  function z(e) {
    r.dispatch(Zr.actions.thinSidebar(e));
  }
  return r.subscribe(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
      var e, n, _o$options$jsdosConf, _o$options$initFs, _e58, _t89, _t90;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            e = yi(r), n = e.dos.step;
            if (!(n !== s)) {
              _context26.n = 10;
              break;
            }
            _t89 = (s = n, e.dos.step);
            _context26.n = _t89 === "bnd-ready" ? 1 : _t89 === "emu-ready" ? 2 : 10;
            break;
          case 1:
            void 0 !== t.mouseCapture && p(t.mouseCapture);
            return _context26.a(3, 10);
          case 2:
            _context26.n = 3;
            return i;
          case 3:
            o.cache = _context26.v;
            if (!o.options.url) {
              _context26.n = 8;
              break;
            }
            _context26.p = 4;
            _context26.n = 5;
            return Ii(o.options.url, r);
          case 5:
            _context26.n = 7;
            break;
          case 6:
            _context26.p = 6;
            _t90 = _context26.v;
            r.dispatch(Ci.actions.bndError(_t90.message));
          case 7:
            _context26.n = 9;
            break;
          case 8:
            if (o.options.dosboxConf) {
              _e58 = (_o$options$jsdosConf = o.options.jsdosConf) !== null && _o$options$jsdosConf !== void 0 ? _o$options$jsdosConf : {
                version: "8"
              };
              _e58.version || (_e58.version = "8"), function () {
                var _ref31 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(e, t, n) {
                  var o, r;
                  return _regenerator().w(function (_context25) {
                    while (1) switch (_context25.n) {
                      case 0:
                        o = hi(n), r = n.dispatch;
                        o.loadedBundle = null, r(Xr.actions.init(e)), Ri(e, r), o.loadedBundle = {
                          bundleUrl: null,
                          bundleChangesUrl: null,
                          bundle: e,
                          bundleChanges: null,
                          appliedBundleChanges: null,
                          initFs: t
                        }, r(Ci.actions.bndReady({}));
                      case 1:
                        return _context25.a(2);
                    }
                  }, _callee25);
                }));
                return function (_x35, _x36, _x37) {
                  return _ref31.apply(this, arguments);
                };
              }()({
                dosboxConf: o.options.dosboxConf,
                jsdosConf: _e58
              }, (_o$options$initFs = o.options.initFs) !== null && _o$options$initFs !== void 0 ? _o$options$initFs : null, r);
            } else r.dispatch(Zr.actions.windowSelect());
          case 9:
            vi(o, "emu-ready");
          case 10:
            return _context26.a(2);
        }
      }, _callee26, null, [[4, 6]]);
    }))()["catch"](console.error);
  }), Pi(r, (_t$pathPrefix = t.pathPrefix) !== null && _t$pathPrefix !== void 0 ? _t$pathPrefix : "https://v8.js-dos.com/latest/emulators/", (_t$pathSuffix = t.pathSuffix) !== null && _t$pathSuffix !== void 0 ? _t$pathSuffix : ""), t.theme && a(t.theme), t.lang && c(t.lang), t.backend && l(t.backend), t.backendLocked && u(t.backendLocked), void 0 !== t.workerThread && d(t.workerThread), t.ipx && f(t.ipx), t.ipxBackend && h(t.ipxBackend), t.room && m(t.room), t.background && v(t.background), void 0 !== t.fullScreen && y(t.fullScreen), void 0 !== t.autoStart && _(t.autoStart), void 0 !== t.countDownStart && g(t.countDownStart), void 0 !== t.autoSave && b(t.autoSave), void 0 !== t.kiosk && w(t.kiosk), void 0 !== t.imageRendering && k(t.imageRendering), void 0 !== t.renderBackend && x(t.renderBackend), void 0 !== t.renderAspect && C(t.renderAspect), void 0 !== t.noNetworking && S(t.noNetworking), void 0 !== t.noCloud && P(t.noCloud), void 0 !== t.scaleControls && E(t.scaleControls), void 0 !== t.mouseSensitivity && O(t.mouseSensitivity), void 0 !== t.noCursor && M(t.noCursor), void 0 !== t.softKeyboardLayout && j(t.softKeyboardLayout), void 0 !== t.softKeyboardSymbols && D(t.softKeyboardSymbols), void 0 !== t.volume && A(t.volume), void 0 !== t.key && T(t.key), void 0 !== t.backendHardware && L(!0), void 0 !== t.softFullscreen && L(t.softFullscreen), void 0 !== t.thinSidebar && z(t.thinSidebar), N(Ui(Yn, {
    store: r,
    children: Ui(Nl, {})
  }), e), {
    getVersion: function getVersion() {
      return ["8.3.20", r.getState().dos.emuVersion];
    },
    getToken: function getToken() {
      var _ref32;
      var e;
      return (_ref32 = null == (e = yi(r).auth.account) ? void 0 : e.token) !== null && _ref32 !== void 0 ? _ref32 : null;
    },
    setTheme: a,
    setLang: c,
    setBackend: l,
    setBackendLocked: u,
    setWorkerThread: d,
    setMouseCapture: p,
    setIpx: f,
    setIpxBackend: h,
    setRoom: m,
    setFrame: function setFrame(e) {
      r.dispatch(Zr.actions.frameNetwork());
    },
    setBackground: v,
    setFullScreen: y,
    setAutoStart: _,
    setCountDownStart: g,
    setAutoSave: b,
    setKiosk: w,
    setImageRendering: k,
    setRenderBackend: x,
    setRenderAspect: C,
    setNoNetworking: S,
    setNoCloud: P,
    setPaused: function setPaused(e) {
      r.dispatch(Ci.actions.paused(e));
    },
    setScaleControls: E,
    setMouseSensitivity: O,
    setNoCursor: M,
    setSoftKeyboardLayout: j,
    setSoftKeyboardSymbols: D,
    setVolume: A,
    setKey: T,
    setSoftFullscreen: L,
    setThinSidebar: z,
    save: function save() {
      return Oi(yi(r), o, r.dispatch);
    },
    stop: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
        var e;
        return _regenerator().w(function (_context27) {
          while (1) switch (_context27.n) {
            case 0:
              r.dispatch(Zr.actions.hidden(!0));
              e = hi(r);
              if (!e.ci) {
                _context27.n = 1;
                break;
              }
              return _context27.a(2, e.ci.exit());
            case 1:
              return _context27.a(2);
          }
        }, _callee27);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  };
};