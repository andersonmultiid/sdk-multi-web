function rD(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var oy = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FT;
function aD() {
  if (FT) return Rt;
  FT = 1;
  var m = Symbol.for("react.element"), f = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), ee = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Se = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Oe = Symbol.iterator;
  function ne(L) {
    return L === null || typeof L != "object" ? null : (L = Oe && L[Oe] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var _e = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, Ce = {};
  function Ve(L, Q, Ae) {
    this.props = L, this.context = Q, this.refs = Ce, this.updater = Ae || _e;
  }
  Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(L, Q) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, Q, "setState");
  }, Ve.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function jt() {
  }
  jt.prototype = Ve.prototype;
  function Tt(L, Q, Ae) {
    this.props = L, this.context = Q, this.refs = Ce, this.updater = Ae || _e;
  }
  var nt = Tt.prototype = new jt();
  nt.constructor = Tt, te(nt, Ve.prototype), nt.isPureReactComponent = !0;
  var Pe = Array.isArray, Ot = Object.prototype.hasOwnProperty, De = { current: null }, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(L, Q, Ae) {
    var qe, Ge = {}, st = null, _t = null;
    if (Q != null) for (qe in Q.ref !== void 0 && (_t = Q.ref), Q.key !== void 0 && (st = "" + Q.key), Q) Ot.call(Q, qe) && !pt.hasOwnProperty(qe) && (Ge[qe] = Q[qe]);
    var Je = arguments.length - 2;
    if (Je === 1) Ge.children = Ae;
    else if (1 < Je) {
      for (var Et = Array(Je), $t = 0; $t < Je; $t++) Et[$t] = arguments[$t + 2];
      Ge.children = Et;
    }
    if (L && L.defaultProps) for (qe in Je = L.defaultProps, Je) Ge[qe] === void 0 && (Ge[qe] = Je[qe]);
    return { $$typeof: m, type: L, key: st, ref: _t, props: Ge, _owner: De.current };
  }
  function Cn(L, Q) {
    return { $$typeof: m, type: L.type, key: Q, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function At(L) {
    return typeof L == "object" && L !== null && L.$$typeof === m;
  }
  function pn(L) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(Ae) {
      return Q[Ae];
    });
  }
  var qt = /\/+/g;
  function St(L, Q) {
    return typeof L == "object" && L !== null && L.key != null ? pn("" + L.key) : Q.toString(36);
  }
  function He(L, Q, Ae, qe, Ge) {
    var st = typeof L;
    (st === "undefined" || st === "boolean") && (L = null);
    var _t = !1;
    if (L === null) _t = !0;
    else switch (st) {
      case "string":
      case "number":
        _t = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case m:
          case f:
            _t = !0;
        }
    }
    if (_t) return _t = L, Ge = Ge(_t), L = qe === "" ? "." + St(_t, 0) : qe, Pe(Ge) ? (Ae = "", L != null && (Ae = L.replace(qt, "$&/") + "/"), He(Ge, Q, Ae, "", function($t) {
      return $t;
    })) : Ge != null && (At(Ge) && (Ge = Cn(Ge, Ae + (!Ge.key || _t && _t.key === Ge.key ? "" : ("" + Ge.key).replace(qt, "$&/") + "/") + L)), Q.push(Ge)), 1;
    if (_t = 0, qe = qe === "" ? "." : qe + ":", Pe(L)) for (var Je = 0; Je < L.length; Je++) {
      st = L[Je];
      var Et = qe + St(st, Je);
      _t += He(st, Q, Ae, Et, Ge);
    }
    else if (Et = ne(L), typeof Et == "function") for (L = Et.call(L), Je = 0; !(st = L.next()).done; ) st = st.value, Et = qe + St(st, Je++), _t += He(st, Q, Ae, Et, Ge);
    else if (st === "object") throw Q = String(L), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
    return _t;
  }
  function Ht(L, Q, Ae) {
    if (L == null) return L;
    var qe = [], Ge = 0;
    return He(L, qe, "", "", function(st) {
      return Q.call(Ae, st, Ge++);
    }), qe;
  }
  function yt(L) {
    if (L._status === -1) {
      var Q = L._result;
      Q = Q(), Q.then(function(Ae) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = Ae);
      }, function(Ae) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = Ae);
      }), L._status === -1 && (L._status = 0, L._result = Q);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ut = { current: null }, W = { transition: null }, we = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: W, ReactCurrentOwner: De };
  function fe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Rt.Children = { map: Ht, forEach: function(L, Q, Ae) {
    Ht(L, function() {
      Q.apply(this, arguments);
    }, Ae);
  }, count: function(L) {
    var Q = 0;
    return Ht(L, function() {
      Q++;
    }), Q;
  }, toArray: function(L) {
    return Ht(L, function(Q) {
      return Q;
    }) || [];
  }, only: function(L) {
    if (!At(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Rt.Component = Ve, Rt.Fragment = p, Rt.Profiler = N, Rt.PureComponent = Tt, Rt.StrictMode = S, Rt.Suspense = ce, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Rt.act = fe, Rt.cloneElement = function(L, Q, Ae) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var qe = te({}, L.props), Ge = L.key, st = L.ref, _t = L._owner;
    if (Q != null) {
      if (Q.ref !== void 0 && (st = Q.ref, _t = De.current), Q.key !== void 0 && (Ge = "" + Q.key), L.type && L.type.defaultProps) var Je = L.type.defaultProps;
      for (Et in Q) Ot.call(Q, Et) && !pt.hasOwnProperty(Et) && (qe[Et] = Q[Et] === void 0 && Je !== void 0 ? Je[Et] : Q[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) qe.children = Ae;
    else if (1 < Et) {
      Je = Array(Et);
      for (var $t = 0; $t < Et; $t++) Je[$t] = arguments[$t + 2];
      qe.children = Je;
    }
    return { $$typeof: m, type: L.type, key: Ge, ref: st, props: qe, _owner: _t };
  }, Rt.createContext = function(L) {
    return L = { $$typeof: ee, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: Y, _context: L }, L.Consumer = L;
  }, Rt.createElement = Ye, Rt.createFactory = function(L) {
    var Q = Ye.bind(null, L);
    return Q.type = L, Q;
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(L) {
    return { $$typeof: R, render: L };
  }, Rt.isValidElement = At, Rt.lazy = function(L) {
    return { $$typeof: ie, _payload: { _status: -1, _result: L }, _init: yt };
  }, Rt.memo = function(L, Q) {
    return { $$typeof: Se, type: L, compare: Q === void 0 ? null : Q };
  }, Rt.startTransition = function(L) {
    var Q = W.transition;
    W.transition = {};
    try {
      L();
    } finally {
      W.transition = Q;
    }
  }, Rt.unstable_act = fe, Rt.useCallback = function(L, Q) {
    return ut.current.useCallback(L, Q);
  }, Rt.useContext = function(L) {
    return ut.current.useContext(L);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(L) {
    return ut.current.useDeferredValue(L);
  }, Rt.useEffect = function(L, Q) {
    return ut.current.useEffect(L, Q);
  }, Rt.useId = function() {
    return ut.current.useId();
  }, Rt.useImperativeHandle = function(L, Q, Ae) {
    return ut.current.useImperativeHandle(L, Q, Ae);
  }, Rt.useInsertionEffect = function(L, Q) {
    return ut.current.useInsertionEffect(L, Q);
  }, Rt.useLayoutEffect = function(L, Q) {
    return ut.current.useLayoutEffect(L, Q);
  }, Rt.useMemo = function(L, Q) {
    return ut.current.useMemo(L, Q);
  }, Rt.useReducer = function(L, Q, Ae) {
    return ut.current.useReducer(L, Q, Ae);
  }, Rt.useRef = function(L) {
    return ut.current.useRef(L);
  }, Rt.useState = function(L) {
    return ut.current.useState(L);
  }, Rt.useSyncExternalStore = function(L, Q, Ae) {
    return ut.current.useSyncExternalStore(L, Q, Ae);
  }, Rt.useTransition = function() {
    return ut.current.useTransition();
  }, Rt.version = "18.3.1", Rt;
}
var dv = { exports: {} };
dv.exports;
var jT;
function iD() {
  return jT || (jT = 1, function(m, f) {
    var p = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    p.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = "18.3.1", N = Symbol.for("react.element"), Y = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), ie = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), jt = Symbol.iterator, Tt = "@@iterator";
      function nt(g) {
        if (g === null || typeof g != "object")
          return null;
        var w = jt && g[jt] || g[Tt];
        return typeof w == "function" ? w : null;
      }
      var Pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ot = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, pt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ye = {}, Cn = null;
      function At(g) {
        Cn = g;
      }
      Ye.setExtraStackFrame = function(g) {
        Cn = g;
      }, Ye.getCurrentStack = null, Ye.getStackAddendum = function() {
        var g = "";
        Cn && (g += Cn);
        var w = Ye.getCurrentStack;
        return w && (g += w() || ""), g;
      };
      var pn = !1, qt = !1, St = !1, He = !1, Ht = !1, yt = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: pt
      };
      yt.ReactDebugCurrentFrame = Ye, yt.ReactCurrentActQueue = De;
      function ut(g) {
        {
          for (var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), B = 1; B < w; B++)
            F[B - 1] = arguments[B];
          we("warn", g, F);
        }
      }
      function W(g) {
        {
          for (var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), B = 1; B < w; B++)
            F[B - 1] = arguments[B];
          we("error", g, F);
        }
      }
      function we(g, w, F) {
        {
          var B = yt.ReactDebugCurrentFrame, ae = B.getStackAddendum();
          ae !== "" && (w += "%s", F = F.concat([ae]));
          var Te = F.map(function(me) {
            return String(me);
          });
          Te.unshift("Warning: " + w), Function.prototype.apply.call(console[g], console, Te);
        }
      }
      var fe = {};
      function L(g, w) {
        {
          var F = g.constructor, B = F && (F.displayName || F.name) || "ReactClass", ae = B + "." + w;
          if (fe[ae])
            return;
          W("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, B), fe[ae] = !0;
        }
      }
      var Q = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, w, F) {
          L(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, w, F, B) {
          L(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, w, F, B) {
          L(g, "setState");
        }
      }, Ae = Object.assign, qe = {};
      Object.freeze(qe);
      function Ge(g, w, F) {
        this.props = g, this.context = w, this.refs = qe, this.updater = F || Q;
      }
      Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(g, w) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, w, "setState");
      }, Ge.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var st = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, _t = function(g, w) {
          Object.defineProperty(Ge.prototype, g, {
            get: function() {
              ut("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Je in st)
          st.hasOwnProperty(Je) && _t(Je, st[Je]);
      }
      function Et() {
      }
      Et.prototype = Ge.prototype;
      function $t(g, w, F) {
        this.props = g, this.context = w, this.refs = qe, this.updater = F || Q;
      }
      var Dn = $t.prototype = new Et();
      Dn.constructor = $t, Ae(Dn, Ge.prototype), Dn.isPureReactComponent = !0;
      function Qn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var ir = Array.isArray;
      function On(g) {
        return ir(g);
      }
      function Cr(g) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, F = w && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return F;
        }
      }
      function Bn(g) {
        try {
          return Ln(g), !1;
        } catch {
          return !0;
        }
      }
      function Ln(g) {
        return "" + g;
      }
      function fa(g) {
        if (Bn(g))
          return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(g)), Ln(g);
      }
      function Ga(g, w, F) {
        var B = g.displayName;
        if (B)
          return B;
        var ae = w.displayName || w.name || "";
        return ae !== "" ? F + "(" + ae + ")" : F;
      }
      function Dr(g) {
        return g.displayName || "Context";
      }
      function Vn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case ee:
            return "Fragment";
          case Y:
            return "Portal";
          case ce:
            return "Profiler";
          case R:
            return "StrictMode";
          case ne:
            return "Suspense";
          case _e:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case ie:
              var w = g;
              return Dr(w) + ".Consumer";
            case Se:
              var F = g;
              return Dr(F._context) + ".Provider";
            case Oe:
              return Ga(g, g.render, "ForwardRef");
            case te:
              var B = g.displayName || null;
              return B !== null ? B : Vn(g.type) || "Memo";
            case Ce: {
              var ae = g, Te = ae._payload, me = ae._init;
              try {
                return Vn(me(Te));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Gn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ka, Nn;
      Nn = {};
      function or(g) {
        if (Gn.call(g, "ref")) {
          var w = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function qr(g) {
        if (Gn.call(g, "key")) {
          var w = Object.getOwnPropertyDescriptor(g, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function Mi(g, w) {
        var F = function() {
          Rr || (Rr = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: F,
          configurable: !0
        });
      }
      function da(g, w) {
        var F = function() {
          Ka || (Ka = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: F,
          configurable: !0
        });
      }
      function oe(g) {
        if (typeof g.ref == "string" && pt.current && g.__self && pt.current.stateNode !== g.__self) {
          var w = Vn(pt.current.type);
          Nn[w] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, g.ref), Nn[w] = !0);
        }
      }
      var ze = function(g, w, F, B, ae, Te, me) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: N,
          // Built-in properties that belong on the element
          type: g,
          key: w,
          ref: F,
          props: me,
          // Record the component responsible for creating this element.
          _owner: Te
        };
        return $e._store = {}, Object.defineProperty($e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($e, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: B
        }), Object.defineProperty($e, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ae
        }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
      };
      function it(g, w, F) {
        var B, ae = {}, Te = null, me = null, $e = null, lt = null;
        if (w != null) {
          or(w) && (me = w.ref, oe(w)), qr(w) && (fa(w.key), Te = "" + w.key), $e = w.__self === void 0 ? null : w.__self, lt = w.__source === void 0 ? null : w.__source;
          for (B in w)
            Gn.call(w, B) && !Kn.hasOwnProperty(B) && (ae[B] = w[B]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          ae.children = F;
        else if (Pt > 1) {
          for (var Gt = Array(Pt), Kt = 0; Kt < Pt; Kt++)
            Gt[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(Gt), ae.children = Gt;
        }
        if (g && g.defaultProps) {
          var rt = g.defaultProps;
          for (B in rt)
            ae[B] === void 0 && (ae[B] = rt[B]);
        }
        if (Te || me) {
          var tn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Te && Mi(ae, tn), me && da(ae, tn);
        }
        return ze(g, Te, me, $e, lt, pt.current, ae);
      }
      function Ut(g, w) {
        var F = ze(g.type, w, g.ref, g._self, g._source, g._owner, g.props);
        return F;
      }
      function ln(g, w, F) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var B, ae = Ae({}, g.props), Te = g.key, me = g.ref, $e = g._self, lt = g._source, Pt = g._owner;
        if (w != null) {
          or(w) && (me = w.ref, Pt = pt.current), qr(w) && (fa(w.key), Te = "" + w.key);
          var Gt;
          g.type && g.type.defaultProps && (Gt = g.type.defaultProps);
          for (B in w)
            Gn.call(w, B) && !Kn.hasOwnProperty(B) && (w[B] === void 0 && Gt !== void 0 ? ae[B] = Gt[B] : ae[B] = w[B]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          ae.children = F;
        else if (Kt > 1) {
          for (var rt = Array(Kt), tn = 0; tn < Kt; tn++)
            rt[tn] = arguments[tn + 2];
          ae.children = rt;
        }
        return ze(g.type, Te, me, $e, lt, Pt, ae);
      }
      function un(g) {
        return typeof g == "object" && g !== null && g.$$typeof === N;
      }
      var sn = ".", Xn = ":";
      function an(g) {
        var w = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, B = g.replace(w, function(ae) {
          return F[ae];
        });
        return "$" + B;
      }
      var Wt = !1, zt = /\/+/g;
      function pa(g) {
        return g.replace(zt, "$&/");
      }
      function ka(g, w) {
        return typeof g == "object" && g !== null && g.key != null ? (fa(g.key), an("" + g.key)) : w.toString(36);
      }
      function Da(g, w, F, B, ae) {
        var Te = typeof g;
        (Te === "undefined" || Te === "boolean") && (g = null);
        var me = !1;
        if (g === null)
          me = !0;
        else
          switch (Te) {
            case "string":
            case "number":
              me = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case N:
                case Y:
                  me = !0;
              }
          }
        if (me) {
          var $e = g, lt = ae($e), Pt = B === "" ? sn + ka($e, 0) : B;
          if (On(lt)) {
            var Gt = "";
            Pt != null && (Gt = pa(Pt) + "/"), Da(lt, w, Gt, "", function(cd) {
              return cd;
            });
          } else lt != null && (un(lt) && (lt.key && (!$e || $e.key !== lt.key) && fa(lt.key), lt = Ut(
            lt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (lt.key && (!$e || $e.key !== lt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + lt.key) + "/"
            ) : "") + Pt
          )), w.push(lt));
          return 1;
        }
        var Kt, rt, tn = 0, Tn = B === "" ? sn : B + Xn;
        if (On(g))
          for (var il = 0; il < g.length; il++)
            Kt = g[il], rt = Tn + ka(Kt, il), tn += Da(Kt, w, F, rt, ae);
        else {
          var ns = nt(g);
          if (typeof ns == "function") {
            var $i = g;
            ns === $i.entries && (Wt || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var ol = ns.call($i), rs, sd = 0; !(rs = ol.next()).done; )
              Kt = rs.value, rt = Tn + ka(Kt, sd++), tn += Da(Kt, w, F, rt, ae);
          } else if (Te === "object") {
            var gc = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function Ai(g, w, F) {
        if (g == null)
          return g;
        var B = [], ae = 0;
        return Da(g, B, "", "", function(Te) {
          return w.call(F, Te, ae++);
        }), B;
      }
      function Xo(g) {
        var w = 0;
        return Ai(g, function() {
          w++;
        }), w;
      }
      function Jo(g, w, F) {
        Ai(g, function() {
          w.apply(this, arguments);
        }, F);
      }
      function Ui(g) {
        return Ai(g, function(w) {
          return w;
        }) || [];
      }
      function Zo(g) {
        if (!un(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function ci(g) {
        var w = {
          $$typeof: ie,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: Se,
          _context: w
        };
        var F = !1, B = !1, ae = !1;
        {
          var Te = {
            $$typeof: ie,
            _context: w
          };
          Object.defineProperties(Te, {
            Provider: {
              get: function() {
                return B || (B = !0, W("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(me) {
                w.Provider = me;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(me) {
                w._currentValue = me;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(me) {
                w._currentValue2 = me;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(me) {
                w._threadCount = me;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, W("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(me) {
                ae || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", me), ae = !0);
              }
            }
          }), w.Consumer = Te;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var va = -1, lr = 0, ha = 1, Wr = 2;
      function fi(g) {
        if (g._status === va) {
          var w = g._result, F = w();
          if (F.then(function(Te) {
            if (g._status === lr || g._status === va) {
              var me = g;
              me._status = ha, me._result = Te;
            }
          }, function(Te) {
            if (g._status === lr || g._status === va) {
              var me = g;
              me._status = Wr, me._result = Te;
            }
          }), g._status === va) {
            var B = g;
            B._status = lr, B._result = F;
          }
        }
        if (g._status === ha) {
          var ae = g._result;
          return ae === void 0 && W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ae), "default" in ae || W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ae), ae.default;
        } else
          throw g._result;
      }
      function di(g) {
        var w = {
          // We use these fields to store the result.
          _status: va,
          _result: g
        }, F = {
          $$typeof: Ce,
          _payload: w,
          _init: fi
        };
        {
          var B, ae;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return B;
              },
              set: function(Te) {
                W("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = Te, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ae;
              },
              set: function(Te) {
                W("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ae = Te, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function zi(g) {
        g != null && g.$$typeof === te ? W("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? W("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && W("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && W("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: Oe,
          render: g
        };
        {
          var F;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(B) {
              F = B, !g.name && !g.displayName && (g.displayName = B);
            }
          });
        }
        return w;
      }
      var b;
      b = Symbol.for("react.module.reference");
      function G(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === ee || g === ce || Ht || g === R || g === ne || g === _e || He || g === Ve || pn || qt || St || typeof g == "object" && g !== null && (g.$$typeof === Ce || g.$$typeof === te || g.$$typeof === Se || g.$$typeof === ie || g.$$typeof === Oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === b || g.getModuleId !== void 0));
      }
      function se(g, w) {
        G(g) || W("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var F = {
          $$typeof: te,
          type: g,
          compare: w === void 0 ? null : w
        };
        {
          var B;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(ae) {
              B = ae, !g.name && !g.displayName && (g.displayName = ae);
            }
          });
        }
        return F;
      }
      function pe() {
        var g = Pe.current;
        return g === null && W(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function ct(g) {
        var w = pe();
        if (g._context !== void 0) {
          var F = g._context;
          F.Consumer === g ? W("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === g && W("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(g);
      }
      function Ke(g) {
        var w = pe();
        return w.useState(g);
      }
      function vt(g, w, F) {
        var B = pe();
        return B.useReducer(g, w, F);
      }
      function ot(g) {
        var w = pe();
        return w.useRef(g);
      }
      function Rn(g, w) {
        var F = pe();
        return F.useEffect(g, w);
      }
      function on(g, w) {
        var F = pe();
        return F.useInsertionEffect(g, w);
      }
      function cn(g, w) {
        var F = pe();
        return F.useLayoutEffect(g, w);
      }
      function Tr(g, w) {
        var F = pe();
        return F.useCallback(g, w);
      }
      function Xa(g, w) {
        var F = pe();
        return F.useMemo(g, w);
      }
      function Ft(g, w, F) {
        var B = pe();
        return B.useImperativeHandle(g, w, F);
      }
      function vn(g, w) {
        {
          var F = pe();
          return F.useDebugValue(g, w);
        }
      }
      function et() {
        var g = pe();
        return g.useTransition();
      }
      function pi(g) {
        var w = pe();
        return w.useDeferredValue(g);
      }
      function Fi() {
        var g = pe();
        return g.useId();
      }
      function vc(g, w, F) {
        var B = pe();
        return B.useSyncExternalStore(g, w, F);
      }
      var ji = 0, co, Qr, Ku, Or, Xu, hc, mc;
      function Hi() {
      }
      Hi.__reactDisabledLog = !0;
      function fo() {
        {
          if (ji === 0) {
            co = console.log, Qr = console.info, Ku = console.warn, Or = console.error, Xu = console.group, hc = console.groupCollapsed, mc = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: Hi,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          ji++;
        }
      }
      function Gr() {
        {
          if (ji--, ji === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ae({}, g, {
                value: co
              }),
              info: Ae({}, g, {
                value: Qr
              }),
              warn: Ae({}, g, {
                value: Ku
              }),
              error: Ae({}, g, {
                value: Or
              }),
              group: Ae({}, g, {
                value: Xu
              }),
              groupCollapsed: Ae({}, g, {
                value: hc
              }),
              groupEnd: Ae({}, g, {
                value: mc
              })
            });
          }
          ji < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var vi = yt.ReactCurrentDispatcher, po;
      function ql(g, w, F) {
        {
          if (po === void 0)
            try {
              throw Error();
            } catch (ae) {
              var B = ae.stack.trim().match(/\n( *(at )?)/);
              po = B && B[1] || "";
            }
          return `
` + po + g;
        }
      }
      var Pi = !1, el;
      {
        var tl = typeof WeakMap == "function" ? WeakMap : Map;
        el = new tl();
      }
      function vo(g, w) {
        if (!g || Pi)
          return "";
        {
          var F = el.get(g);
          if (F !== void 0)
            return F;
        }
        var B;
        Pi = !0;
        var ae = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Te;
        Te = vi.current, vi.current = null, fo();
        try {
          if (w) {
            var me = function() {
              throw Error();
            };
            if (Object.defineProperty(me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(me, []);
              } catch (Tn) {
                B = Tn;
              }
              Reflect.construct(g, [], me);
            } else {
              try {
                me.call();
              } catch (Tn) {
                B = Tn;
              }
              g.call(me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tn) {
              B = Tn;
            }
            g();
          }
        } catch (Tn) {
          if (Tn && B && typeof Tn.stack == "string") {
            for (var $e = Tn.stack.split(`
`), lt = B.stack.split(`
`), Pt = $e.length - 1, Gt = lt.length - 1; Pt >= 1 && Gt >= 0 && $e[Pt] !== lt[Gt]; )
              Gt--;
            for (; Pt >= 1 && Gt >= 0; Pt--, Gt--)
              if ($e[Pt] !== lt[Gt]) {
                if (Pt !== 1 || Gt !== 1)
                  do
                    if (Pt--, Gt--, Gt < 0 || $e[Pt] !== lt[Gt]) {
                      var Kt = `
` + $e[Pt].replace(" at new ", " at ");
                      return g.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", g.displayName)), typeof g == "function" && el.set(g, Kt), Kt;
                    }
                  while (Pt >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          Pi = !1, vi.current = Te, Gr(), Error.prepareStackTrace = ae;
        }
        var rt = g ? g.displayName || g.name : "", tn = rt ? ql(rt) : "";
        return typeof g == "function" && el.set(g, tn), tn;
      }
      function Ju(g, w, F) {
        return vo(g, !1);
      }
      function Zu(g) {
        var w = g.prototype;
        return !!(w && w.isReactComponent);
      }
      function wt(g, w, F) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return vo(g, Zu(g));
        if (typeof g == "string")
          return ql(g);
        switch (g) {
          case ne:
            return ql("Suspense");
          case _e:
            return ql("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case Oe:
              return Ju(g.render);
            case te:
              return wt(g.type, w, F);
            case Ce: {
              var B = g, ae = B._payload, Te = B._init;
              try {
                return wt(Te(ae), w, F);
              } catch {
              }
            }
          }
        return "";
      }
      var es = {}, Wl = yt.ReactDebugCurrentFrame;
      function bt(g) {
        if (g) {
          var w = g._owner, F = wt(g.type, g._source, w ? w.type : null);
          Wl.setExtraStackFrame(F);
        } else
          Wl.setExtraStackFrame(null);
      }
      function yc(g, w, F, B, ae) {
        {
          var Te = Function.call.bind(Gn);
          for (var me in g)
            if (Te(g, me)) {
              var $e = void 0;
              try {
                if (typeof g[me] != "function") {
                  var lt = Error((B || "React class") + ": " + F + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw lt.name = "Invariant Violation", lt;
                }
                $e = g[me](w, me, B, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                $e = Pt;
              }
              $e && !($e instanceof Error) && (bt(ae), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", F, me, typeof $e), bt(null)), $e instanceof Error && !($e.message in es) && (es[$e.message] = !0, bt(ae), W("Failed %s type: %s", F, $e.message), bt(null));
            }
        }
      }
      function hi(g) {
        if (g) {
          var w = g._owner, F = wt(g.type, g._source, w ? w.type : null);
          At(F);
        } else
          At(null);
      }
      var We;
      We = !1;
      function nl() {
        if (pt.current) {
          var g = Vn(pt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function Jn(g) {
        if (g !== void 0) {
          var w = g.fileName.replace(/^.*[\\\/]/, ""), F = g.lineNumber;
          return `

Check your code at ` + w + ":" + F + ".";
        }
        return "";
      }
      function Kr(g) {
        return g != null ? Jn(g.__source) : "";
      }
      var Lr = {};
      function mi(g) {
        var w = nl();
        if (!w) {
          var F = typeof g == "string" ? g : g.displayName || g.name;
          F && (w = `

Check the top-level render call using <` + F + ">.");
        }
        return w;
      }
      function gn(g, w) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var F = mi(w);
          if (!Lr[F]) {
            Lr[F] = !0;
            var B = "";
            g && g._owner && g._owner !== pt.current && (B = " It was passed a child from " + Vn(g._owner.type) + "."), hi(g), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, B), hi(null);
          }
        }
      }
      function Qt(g, w) {
        if (typeof g == "object") {
          if (On(g))
            for (var F = 0; F < g.length; F++) {
              var B = g[F];
              un(B) && gn(B, w);
            }
          else if (un(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ae = nt(g);
            if (typeof ae == "function" && ae !== g.entries)
              for (var Te = ae.call(g), me; !(me = Te.next()).done; )
                un(me.value) && gn(me.value, w);
          }
        }
      }
      function Ja(g) {
        {
          var w = g.type;
          if (w == null || typeof w == "string")
            return;
          var F;
          if (typeof w == "function")
            F = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === Oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === te))
            F = w.propTypes;
          else
            return;
          if (F) {
            var B = Vn(w);
            yc(F, g.props, "prop", B, g);
          } else if (w.PropTypes !== void 0 && !We) {
            We = !0;
            var ae = Vn(w);
            W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(g) {
        {
          for (var w = Object.keys(g.props), F = 0; F < w.length; F++) {
            var B = w[F];
            if (B !== "children" && B !== "key") {
              hi(g), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), hi(null);
              break;
            }
          }
          g.ref !== null && (hi(g), W("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function _r(g, w, F) {
        var B = G(g);
        if (!B) {
          var ae = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Te = Kr(w);
          Te ? ae += Te : ae += nl();
          var me;
          g === null ? me = "null" : On(g) ? me = "array" : g !== void 0 && g.$$typeof === N ? (me = "<" + (Vn(g.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : me = typeof g, W("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, ae);
        }
        var $e = it.apply(this, arguments);
        if ($e == null)
          return $e;
        if (B)
          for (var lt = 2; lt < arguments.length; lt++)
            Qt(arguments[lt], g);
        return g === ee ? Oa($e) : Ja($e), $e;
      }
      var Nr = !1;
      function ud(g) {
        var w = _r.bind(null, g);
        return w.type = g, Nr || (Nr = !0, ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), w;
      }
      function Ql(g, w, F) {
        for (var B = ln.apply(this, arguments), ae = 2; ae < arguments.length; ae++)
          Qt(arguments[ae], B.type);
        return Ja(B), B;
      }
      function rl(g, w) {
        var F = Ot.transition;
        Ot.transition = {};
        var B = Ot.transition;
        Ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Ot.transition = F, F === null && B._updatedFibers) {
            var ae = B._updatedFibers.size;
            ae > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), B._updatedFibers.clear();
          }
        }
      }
      var Gl = !1, Kl = null;
      function al(g) {
        if (Kl === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), F = m && m[w];
            Kl = F.call(m, "timers").setImmediate;
          } catch {
            Kl = function(ae) {
              Gl === !1 && (Gl = !0, typeof MessageChannel > "u" && W("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Te = new MessageChannel();
              Te.port1.onmessage = ae, Te.port2.postMessage(void 0);
            };
          }
        return Kl(g);
      }
      var La = 0, Na = !1;
      function ho(g) {
        {
          var w = La;
          La++, De.current === null && (De.current = []);
          var F = De.isBatchingLegacy, B;
          try {
            if (De.isBatchingLegacy = !0, B = g(), !F && De.didScheduleLegacyUpdate) {
              var ae = De.current;
              ae !== null && (De.didScheduleLegacyUpdate = !1, Vi(ae));
            }
          } catch (rt) {
            throw Bi(w), rt;
          } finally {
            De.isBatchingLegacy = F;
          }
          if (B !== null && typeof B == "object" && typeof B.then == "function") {
            var Te = B, me = !1, $e = {
              then: function(rt, tn) {
                me = !0, Te.then(function(Tn) {
                  Bi(w), La === 0 ? Xl(Tn, rt, tn) : rt(Tn);
                }, function(Tn) {
                  Bi(w), tn(Tn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              me || (Na = !0, W("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $e;
          } else {
            var lt = B;
            if (Bi(w), La === 0) {
              var Pt = De.current;
              Pt !== null && (Vi(Pt), De.current = null);
              var Gt = {
                then: function(rt, tn) {
                  De.current === null ? (De.current = [], Xl(lt, rt, tn)) : rt(lt);
                }
              };
              return Gt;
            } else {
              var Kt = {
                then: function(rt, tn) {
                  rt(lt);
                }
              };
              return Kt;
            }
          }
        }
      }
      function Bi(g) {
        g !== La - 1 && W("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = g;
      }
      function Xl(g, w, F) {
        {
          var B = De.current;
          if (B !== null)
            try {
              Vi(B), al(function() {
                B.length === 0 ? (De.current = null, w(g)) : Xl(g, w, F);
              });
            } catch (ae) {
              F(ae);
            }
          else
            w(g);
        }
      }
      var mo = !1;
      function Vi(g) {
        if (!mo) {
          mo = !0;
          var w = 0;
          try {
            for (; w < g.length; w++) {
              var F = g[w];
              do
                F = F(!0);
              while (F !== null);
            }
            g.length = 0;
          } catch (B) {
            throw g = g.slice(w + 1), B;
          } finally {
            mo = !1;
          }
        }
      }
      var Jl = _r, ts = Ql, Ma = ud, Zl = {
        map: Ai,
        forEach: Jo,
        count: Xo,
        toArray: Ui,
        only: Zo
      };
      f.Children = Zl, f.Component = Ge, f.Fragment = ee, f.Profiler = ce, f.PureComponent = $t, f.StrictMode = R, f.Suspense = ne, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yt, f.act = ho, f.cloneElement = ts, f.createContext = ci, f.createElement = Jl, f.createFactory = Ma, f.createRef = Qn, f.forwardRef = zi, f.isValidElement = un, f.lazy = di, f.memo = se, f.startTransition = rl, f.unstable_act = ho, f.useCallback = Tr, f.useContext = ct, f.useDebugValue = vn, f.useDeferredValue = pi, f.useEffect = Rn, f.useId = Fi, f.useImperativeHandle = Ft, f.useInsertionEffect = on, f.useLayoutEffect = cn, f.useMemo = Xa, f.useReducer = vt, f.useRef = ot, f.useState = Ke, f.useSyncExternalStore = vc, f.useTransition = et, f.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dv, dv.exports)), dv.exports;
}
var HT;
function vv() {
  if (HT) return oy.exports;
  HT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? oy.exports = aD() : oy.exports = iD(), oy.exports;
}
var Yl = vv();
const id = /* @__PURE__ */ rD(Yl);
var ad = {}, ly = { exports: {} }, Wa = {}, uy = { exports: {} }, jE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PT;
function oD() {
  return PT || (PT = 1, function(m) {
    function f(W, we) {
      var fe = W.length;
      W.push(we);
      e: for (; 0 < fe; ) {
        var L = fe - 1 >>> 1, Q = W[L];
        if (0 < N(Q, we)) W[L] = we, W[fe] = Q, fe = L;
        else break e;
      }
    }
    function p(W) {
      return W.length === 0 ? null : W[0];
    }
    function S(W) {
      if (W.length === 0) return null;
      var we = W[0], fe = W.pop();
      if (fe !== we) {
        W[0] = fe;
        e: for (var L = 0, Q = W.length, Ae = Q >>> 1; L < Ae; ) {
          var qe = 2 * (L + 1) - 1, Ge = W[qe], st = qe + 1, _t = W[st];
          if (0 > N(Ge, fe)) st < Q && 0 > N(_t, Ge) ? (W[L] = _t, W[st] = fe, L = st) : (W[L] = Ge, W[qe] = fe, L = qe);
          else if (st < Q && 0 > N(_t, fe)) W[L] = _t, W[st] = fe, L = st;
          else break e;
        }
      }
      return we;
    }
    function N(W, we) {
      var fe = W.sortIndex - we.sortIndex;
      return fe !== 0 ? fe : W.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Y = performance;
      m.unstable_now = function() {
        return Y.now();
      };
    } else {
      var ee = Date, R = ee.now();
      m.unstable_now = function() {
        return ee.now() - R;
      };
    }
    var ce = [], Se = [], ie = 1, Oe = null, ne = 3, _e = !1, te = !1, Ce = !1, Ve = typeof setTimeout == "function" ? setTimeout : null, jt = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function nt(W) {
      for (var we = p(Se); we !== null; ) {
        if (we.callback === null) S(Se);
        else if (we.startTime <= W) S(Se), we.sortIndex = we.expirationTime, f(ce, we);
        else break;
        we = p(Se);
      }
    }
    function Pe(W) {
      if (Ce = !1, nt(W), !te) if (p(ce) !== null) te = !0, yt(Ot);
      else {
        var we = p(Se);
        we !== null && ut(Pe, we.startTime - W);
      }
    }
    function Ot(W, we) {
      te = !1, Ce && (Ce = !1, jt(Ye), Ye = -1), _e = !0;
      var fe = ne;
      try {
        for (nt(we), Oe = p(ce); Oe !== null && (!(Oe.expirationTime > we) || W && !pn()); ) {
          var L = Oe.callback;
          if (typeof L == "function") {
            Oe.callback = null, ne = Oe.priorityLevel;
            var Q = L(Oe.expirationTime <= we);
            we = m.unstable_now(), typeof Q == "function" ? Oe.callback = Q : Oe === p(ce) && S(ce), nt(we);
          } else S(ce);
          Oe = p(ce);
        }
        if (Oe !== null) var Ae = !0;
        else {
          var qe = p(Se);
          qe !== null && ut(Pe, qe.startTime - we), Ae = !1;
        }
        return Ae;
      } finally {
        Oe = null, ne = fe, _e = !1;
      }
    }
    var De = !1, pt = null, Ye = -1, Cn = 5, At = -1;
    function pn() {
      return !(m.unstable_now() - At < Cn);
    }
    function qt() {
      if (pt !== null) {
        var W = m.unstable_now();
        At = W;
        var we = !0;
        try {
          we = pt(!0, W);
        } finally {
          we ? St() : (De = !1, pt = null);
        }
      } else De = !1;
    }
    var St;
    if (typeof Tt == "function") St = function() {
      Tt(qt);
    };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Ht = He.port2;
      He.port1.onmessage = qt, St = function() {
        Ht.postMessage(null);
      };
    } else St = function() {
      Ve(qt, 0);
    };
    function yt(W) {
      pt = W, De || (De = !0, St());
    }
    function ut(W, we) {
      Ye = Ve(function() {
        W(m.unstable_now());
      }, we);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, m.unstable_continueExecution = function() {
      te || _e || (te = !0, yt(Ot));
    }, m.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cn = 0 < W ? Math.floor(1e3 / W) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, m.unstable_getFirstCallbackNode = function() {
      return p(ce);
    }, m.unstable_next = function(W) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ne;
      }
      var fe = ne;
      ne = we;
      try {
        return W();
      } finally {
        ne = fe;
      }
    }, m.unstable_pauseExecution = function() {
    }, m.unstable_requestPaint = function() {
    }, m.unstable_runWithPriority = function(W, we) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var fe = ne;
      ne = W;
      try {
        return we();
      } finally {
        ne = fe;
      }
    }, m.unstable_scheduleCallback = function(W, we, fe) {
      var L = m.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? L + fe : L) : fe = L, W) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return Q = fe + Q, W = { id: ie++, callback: we, priorityLevel: W, startTime: fe, expirationTime: Q, sortIndex: -1 }, fe > L ? (W.sortIndex = fe, f(Se, W), p(ce) === null && W === p(Se) && (Ce ? (jt(Ye), Ye = -1) : Ce = !0, ut(Pe, fe - L))) : (W.sortIndex = Q, f(ce, W), te || _e || (te = !0, yt(Ot))), W;
    }, m.unstable_shouldYield = pn, m.unstable_wrapCallback = function(W) {
      var we = ne;
      return function() {
        var fe = ne;
        ne = we;
        try {
          return W.apply(this, arguments);
        } finally {
          ne = fe;
        }
      };
    };
  }(jE)), jE;
}
var HE = {}, BT;
function lD() {
  return BT || (BT = 1, function(m) {
    var f = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    f.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, S = 5;
      function N(oe, ze) {
        var it = oe.length;
        oe.push(ze), R(oe, ze, it);
      }
      function Y(oe) {
        return oe.length === 0 ? null : oe[0];
      }
      function ee(oe) {
        if (oe.length === 0)
          return null;
        var ze = oe[0], it = oe.pop();
        return it !== ze && (oe[0] = it, ce(oe, it, 0)), ze;
      }
      function R(oe, ze, it) {
        for (var Ut = it; Ut > 0; ) {
          var ln = Ut - 1 >>> 1, un = oe[ln];
          if (Se(un, ze) > 0)
            oe[ln] = ze, oe[Ut] = un, Ut = ln;
          else
            return;
        }
      }
      function ce(oe, ze, it) {
        for (var Ut = it, ln = oe.length, un = ln >>> 1; Ut < un; ) {
          var sn = (Ut + 1) * 2 - 1, Xn = oe[sn], an = sn + 1, Wt = oe[an];
          if (Se(Xn, ze) < 0)
            an < ln && Se(Wt, Xn) < 0 ? (oe[Ut] = Wt, oe[an] = ze, Ut = an) : (oe[Ut] = Xn, oe[sn] = ze, Ut = sn);
          else if (an < ln && Se(Wt, ze) < 0)
            oe[Ut] = Wt, oe[an] = ze, Ut = an;
          else
            return;
        }
      }
      function Se(oe, ze) {
        var it = oe.sortIndex - ze.sortIndex;
        return it !== 0 ? it : oe.id - ze.id;
      }
      var ie = 1, Oe = 2, ne = 3, _e = 4, te = 5;
      function Ce(oe, ze) {
      }
      var Ve = typeof performance == "object" && typeof performance.now == "function";
      if (Ve) {
        var jt = performance;
        m.unstable_now = function() {
          return jt.now();
        };
      } else {
        var Tt = Date, nt = Tt.now();
        m.unstable_now = function() {
          return Tt.now() - nt;
        };
      }
      var Pe = 1073741823, Ot = -1, De = 250, pt = 5e3, Ye = 1e4, Cn = Pe, At = [], pn = [], qt = 1, St = null, He = ne, Ht = !1, yt = !1, ut = !1, W = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(oe) {
        for (var ze = Y(pn); ze !== null; ) {
          if (ze.callback === null)
            ee(pn);
          else if (ze.startTime <= oe)
            ee(pn), ze.sortIndex = ze.expirationTime, N(At, ze);
          else
            return;
          ze = Y(pn);
        }
      }
      function Q(oe) {
        if (ut = !1, L(oe), !yt)
          if (Y(At) !== null)
            yt = !0, Nn(Ae);
          else {
            var ze = Y(pn);
            ze !== null && or(Q, ze.startTime - oe);
          }
      }
      function Ae(oe, ze) {
        yt = !1, ut && (ut = !1, qr()), Ht = !0;
        var it = He;
        try {
          var Ut;
          if (!p) return qe(oe, ze);
        } finally {
          St = null, He = it, Ht = !1;
        }
      }
      function qe(oe, ze) {
        var it = ze;
        for (L(it), St = Y(At); St !== null && !(St.expirationTime > it && (!oe || Ga())); ) {
          var Ut = St.callback;
          if (typeof Ut == "function") {
            St.callback = null, He = St.priorityLevel;
            var ln = St.expirationTime <= it, un = Ut(ln);
            it = m.unstable_now(), typeof un == "function" ? St.callback = un : St === Y(At) && ee(At), L(it);
          } else
            ee(At);
          St = Y(At);
        }
        if (St !== null)
          return !0;
        var sn = Y(pn);
        return sn !== null && or(Q, sn.startTime - it), !1;
      }
      function Ge(oe, ze) {
        switch (oe) {
          case ie:
          case Oe:
          case ne:
          case _e:
          case te:
            break;
          default:
            oe = ne;
        }
        var it = He;
        He = oe;
        try {
          return ze();
        } finally {
          He = it;
        }
      }
      function st(oe) {
        var ze;
        switch (He) {
          case ie:
          case Oe:
          case ne:
            ze = ne;
            break;
          default:
            ze = He;
            break;
        }
        var it = He;
        He = ze;
        try {
          return oe();
        } finally {
          He = it;
        }
      }
      function _t(oe) {
        var ze = He;
        return function() {
          var it = He;
          He = ze;
          try {
            return oe.apply(this, arguments);
          } finally {
            He = it;
          }
        };
      }
      function Je(oe, ze, it) {
        var Ut = m.unstable_now(), ln;
        if (typeof it == "object" && it !== null) {
          var un = it.delay;
          typeof un == "number" && un > 0 ? ln = Ut + un : ln = Ut;
        } else
          ln = Ut;
        var sn;
        switch (oe) {
          case ie:
            sn = Ot;
            break;
          case Oe:
            sn = De;
            break;
          case te:
            sn = Cn;
            break;
          case _e:
            sn = Ye;
            break;
          case ne:
          default:
            sn = pt;
            break;
        }
        var Xn = ln + sn, an = {
          id: qt++,
          callback: ze,
          priorityLevel: oe,
          startTime: ln,
          expirationTime: Xn,
          sortIndex: -1
        };
        return ln > Ut ? (an.sortIndex = ln, N(pn, an), Y(At) === null && an === Y(pn) && (ut ? qr() : ut = !0, or(Q, ln - Ut))) : (an.sortIndex = Xn, N(At, an), !yt && !Ht && (yt = !0, Nn(Ae))), an;
      }
      function Et() {
      }
      function $t() {
        !yt && !Ht && (yt = !0, Nn(Ae));
      }
      function Dn() {
        return Y(At);
      }
      function Qn(oe) {
        oe.callback = null;
      }
      function ir() {
        return He;
      }
      var On = !1, Cr = null, Bn = -1, Ln = S, fa = -1;
      function Ga() {
        var oe = m.unstable_now() - fa;
        return !(oe < Ln);
      }
      function Dr() {
      }
      function Vn(oe) {
        if (oe < 0 || oe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        oe > 0 ? Ln = Math.floor(1e3 / oe) : Ln = S;
      }
      var Gn = function() {
        if (Cr !== null) {
          var oe = m.unstable_now();
          fa = oe;
          var ze = !0, it = !0;
          try {
            it = Cr(ze, oe);
          } finally {
            it ? Kn() : (On = !1, Cr = null);
          }
        } else
          On = !1;
      }, Kn;
      if (typeof fe == "function")
        Kn = function() {
          fe(Gn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ka = Rr.port2;
        Rr.port1.onmessage = Gn, Kn = function() {
          Ka.postMessage(null);
        };
      } else
        Kn = function() {
          W(Gn, 0);
        };
      function Nn(oe) {
        Cr = oe, On || (On = !0, Kn());
      }
      function or(oe, ze) {
        Bn = W(function() {
          oe(m.unstable_now());
        }, ze);
      }
      function qr() {
        we(Bn), Bn = -1;
      }
      var Mi = Dr, da = null;
      m.unstable_IdlePriority = te, m.unstable_ImmediatePriority = ie, m.unstable_LowPriority = _e, m.unstable_NormalPriority = ne, m.unstable_Profiling = da, m.unstable_UserBlockingPriority = Oe, m.unstable_cancelCallback = Qn, m.unstable_continueExecution = $t, m.unstable_forceFrameRate = Vn, m.unstable_getCurrentPriorityLevel = ir, m.unstable_getFirstCallbackNode = Dn, m.unstable_next = st, m.unstable_pauseExecution = Et, m.unstable_requestPaint = Mi, m.unstable_runWithPriority = Ge, m.unstable_scheduleCallback = Je, m.unstable_shouldYield = Ga, m.unstable_wrapCallback = _t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(HE)), HE;
}
var VT;
function n_() {
  if (VT) return uy.exports;
  VT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? uy.exports = oD() : uy.exports = lD(), uy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $T;
function uD() {
  if ($T) return Wa;
  $T = 1;
  var m = vv(), f = n_();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), N = {};
  function Y(n, r) {
    ee(n, r), ee(n + "Capture", r);
  }
  function ee(n, r) {
    for (N[n] = r, n = 0; n < r.length; n++) S.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, Se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ie = {}, Oe = {};
  function ne(n) {
    return ce.call(Oe, n) ? !0 : ce.call(ie, n) ? !1 : Se.test(n) ? Oe[n] = !0 : (ie[n] = !0, !1);
  }
  function _e(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function te(n, r, o, u) {
    if (r === null || typeof r > "u" || _e(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ce(n, r, o, u, c, v, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = E;
  }
  var Ve = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ve[n] = new Ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ve[r] = new Ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ve[n] = new Ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ve[n] = new Ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ve[n] = new Ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ve[n] = new Ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ve[n] = new Ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ve[n] = new Ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ve[n] = new Ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var jt = /[\-:]([a-z])/g;
  function Tt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      jt,
      Tt
    );
    Ve[r] = new Ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(jt, Tt);
    Ve[r] = new Ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(jt, Tt);
    Ve[r] = new Ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ve[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ve.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ve[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function nt(n, r, o, u) {
    var c = Ve.hasOwnProperty(r) ? Ve[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (te(r, o, c, u) && (o = null), u || c === null ? ne(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Pe = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), De = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), At = Symbol.for("react.provider"), pn = Symbol.for("react.context"), qt = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), He = Symbol.for("react.suspense_list"), Ht = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, L;
  function Q(n) {
    if (L === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      L = r && r[1] || "";
    }
    return `
` + L + n;
  }
  var Ae = !1;
  function qe(n, r) {
    if (!n || Ae) return "";
    Ae = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (H) {
          var u = H;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (H) {
          u = H;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (H) {
          u = H;
        }
        n();
      }
    } catch (H) {
      if (H && u && typeof H.stack == "string") {
        for (var c = H.stack.split(`
`), v = u.stack.split(`
`), E = c.length - 1, _ = v.length - 1; 1 <= E && 0 <= _ && c[E] !== v[_]; ) _--;
        for (; 1 <= E && 0 <= _; E--, _--) if (c[E] !== v[_]) {
          if (E !== 1 || _ !== 1)
            do
              if (E--, _--, 0 > _ || c[E] !== v[_]) {
                var x = `
` + c[E].replace(" at new ", " at ");
                return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
              }
            while (1 <= E && 0 <= _);
          break;
        }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Q(n) : "";
  }
  function Ge(n) {
    switch (n.tag) {
      case 5:
        return Q(n.type);
      case 16:
        return Q("Lazy");
      case 13:
        return Q("Suspense");
      case 19:
        return Q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function st(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case pt:
        return "Fragment";
      case De:
        return "Portal";
      case Cn:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case St:
        return "Suspense";
      case He:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case pn:
        return (n.displayName || "Context") + ".Consumer";
      case At:
        return (n._context.displayName || "Context") + ".Provider";
      case qt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ht:
        return r = n.displayName || null, r !== null ? r : st(n.type) || "Memo";
      case yt:
        r = n._payload, n = n._init;
        try {
          return st(n(r));
        } catch {
        }
    }
    return null;
  }
  function _t(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return st(r);
      case 8:
        return r === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Je(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = Et(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, v = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(E) {
        u = "" + E, v.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function Qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = Et(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function On(n, r) {
    var o = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Je(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && nt(n, "checked", r, !1);
  }
  function Ln(n, r) {
    Bn(n, r);
    var o = Je(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, o) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, Je(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Ga(n, r, o) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Dr = Array.isArray;
  function Vn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Je(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(p(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kn(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(p(92));
        if (Dr(o)) {
          if (1 < o.length) throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Je(o) };
  }
  function Rr(n, r) {
    var o = Je(r.value), u = Je(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Ka(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Nn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function or(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Nn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, Mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var oe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), oe[r] = oe[n];
    });
  });
  function it(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || oe.hasOwnProperty(n) && oe[n] ? ("" + r).trim() : r + "px";
  }
  function Ut(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = it(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var ln = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(p(62));
    }
  }
  function sn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xn = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wt = null, zt = null, pa = null;
  function ka(n) {
    if (n = ys(n)) {
      if (typeof Wt != "function") throw Error(p(280));
      var r = n.stateNode;
      r && (r = Wi(r), Wt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    zt ? pa ? pa.push(n) : pa = [n] : zt = n;
  }
  function Ai() {
    if (zt) {
      var n = zt, r = pa;
      if (pa = zt = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function Xo(n, r) {
    return n(r);
  }
  function Jo() {
  }
  var Ui = !1;
  function Zo(n, r, o) {
    if (Ui) return n(r, o);
    Ui = !0;
    try {
      return Xo(n, r, o);
    } finally {
      Ui = !1, (zt !== null || pa !== null) && (Jo(), Ai());
    }
  }
  function ci(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Wi(o);
    if (u === null) return null;
    o = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(p(231, r, typeof o));
    return o;
  }
  var va = !1;
  if (R) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      va = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    va = !1;
  }
  function ha(n, r, o, u, c, v, E, _, x) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, H);
    } catch (X) {
      this.onError(X);
    }
  }
  var Wr = !1, fi = null, di = !1, zi = null, b = { onError: function(n) {
    Wr = !0, fi = n;
  } };
  function G(n, r, o, u, c, v, E, _, x) {
    Wr = !1, fi = null, ha.apply(b, arguments);
  }
  function se(n, r, o, u, c, v, E, _, x) {
    if (G.apply(this, arguments), Wr) {
      if (Wr) {
        var H = fi;
        Wr = !1, fi = null;
      } else throw Error(p(198));
      di || (di = !0, zi = H);
    }
  }
  function pe(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ke(n) {
    if (pe(n) !== n) throw Error(p(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pe(n), r === null) throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var v = c.alternate;
      if (v === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === o) return Ke(c), n;
          if (v === u) return Ke(c), r;
          v = v.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== u.return) o = c, u = v;
      else {
        for (var E = !1, _ = c.child; _; ) {
          if (_ === o) {
            E = !0, o = c, u = v;
            break;
          }
          if (_ === u) {
            E = !0, u = c, o = v;
            break;
          }
          _ = _.sibling;
        }
        if (!E) {
          for (_ = v.child; _; ) {
            if (_ === o) {
              E = !0, o = v, u = c;
              break;
            }
            if (_ === u) {
              E = !0, u = v, o = c;
              break;
            }
            _ = _.sibling;
          }
          if (!E) throw Error(p(189));
        }
      }
      if (o.alternate !== u) throw Error(p(190));
    }
    if (o.tag !== 3) throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function ot(n) {
    return n = vt(n), n !== null ? Rn(n) : null;
  }
  function Rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = f.unstable_scheduleCallback, cn = f.unstable_cancelCallback, Tr = f.unstable_shouldYield, Xa = f.unstable_requestPaint, Ft = f.unstable_now, vn = f.unstable_getCurrentPriorityLevel, et = f.unstable_ImmediatePriority, pi = f.unstable_UserBlockingPriority, Fi = f.unstable_NormalPriority, vc = f.unstable_LowPriority, ji = f.unstable_IdlePriority, co = null, Qr = null;
  function Ku(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(co, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : mc, Xu = Math.log, hc = Math.LN2;
  function mc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xu(n) / hc | 0) | 0;
  }
  var Hi = 64, fo = 4194304;
  function Gr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function vi(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, v = n.pingedLanes, E = o & 268435455;
    if (E !== 0) {
      var _ = E & ~c;
      _ !== 0 ? u = Gr(_) : (v &= E, v !== 0 && (u = Gr(v)));
    } else E = o & ~c, E !== 0 ? u = Gr(E) : v !== 0 && (u = Gr(v));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, v = r & -r, c >= v || c === 16 && (v & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Or(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function po(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ql(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var E = 31 - Or(v), _ = 1 << E, x = c[E];
      x === -1 ? ((_ & o) === 0 || (_ & u) !== 0) && (c[E] = po(_, r)) : x <= r && (n.expiredLanes |= _), v &= ~_;
    }
  }
  function Pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function el() {
    var n = Hi;
    return Hi <<= 1, (Hi & 4194240) === 0 && (Hi = 64), n;
  }
  function tl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function vo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = o;
  }
  function Ju(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Or(o), v = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~v;
    }
  }
  function Zu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Or(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var wt = 0;
  function es(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Wl, bt, yc, hi, We, nl = !1, Jn = [], Kr = null, Lr = null, mi = null, gn = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), Ja = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _r(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        mi = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function Nr(n, r, o, u, c, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: v, targetContainers: [c] }, r !== null && (r = ys(r), r !== null && bt(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ud(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Kr = Nr(Kr, n, r, o, u, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, o, u, c), !0;
      case "mouseover":
        return mi = Nr(mi, n, r, o, u, c), !0;
      case "pointerover":
        var v = c.pointerId;
        return gn.set(v, Nr(gn.get(v) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return v = c.pointerId, Qt.set(v, Nr(Qt.get(v) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function Ql(n) {
    var r = fl(n.target);
    if (r !== null) {
      var o = pe(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = ct(o), r !== null) {
            n.blockedOn = r, We(n.priority, function() {
              yc(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function rl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Jl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        Xn = u, o.target.dispatchEvent(u), Xn = null;
      } else return r = ys(o), r !== null && bt(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Gl(n, r, o) {
    rl(n) && o.delete(r);
  }
  function Kl() {
    nl = !1, Kr !== null && rl(Kr) && (Kr = null), Lr !== null && rl(Lr) && (Lr = null), mi !== null && rl(mi) && (mi = null), gn.forEach(Gl), Qt.forEach(Gl);
  }
  function al(n, r) {
    n.blockedOn === r && (n.blockedOn = null, nl || (nl = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Kl)));
  }
  function La(n) {
    function r(c) {
      return al(c, n);
    }
    if (0 < Jn.length) {
      al(Jn[0], n);
      for (var o = 1; o < Jn.length; o++) {
        var u = Jn[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Kr !== null && al(Kr, n), Lr !== null && al(Lr, n), mi !== null && al(mi, n), gn.forEach(r), Qt.forEach(r), o = 0; o < Ja.length; o++) u = Ja[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Ja.length && (o = Ja[0], o.blockedOn === null); ) Ql(o), o.blockedOn === null && Ja.shift();
  }
  var Na = Pe.ReactCurrentBatchConfig, ho = !0;
  function Bi(n, r, o, u) {
    var c = wt, v = Na.transition;
    Na.transition = null;
    try {
      wt = 1, mo(n, r, o, u);
    } finally {
      wt = c, Na.transition = v;
    }
  }
  function Xl(n, r, o, u) {
    var c = wt, v = Na.transition;
    Na.transition = null;
    try {
      wt = 4, mo(n, r, o, u);
    } finally {
      wt = c, Na.transition = v;
    }
  }
  function mo(n, r, o, u) {
    if (ho) {
      var c = Jl(n, r, o, u);
      if (c === null) Cd(n, r, u, Vi, o), _r(n, u);
      else if (ud(c, n, r, o, u)) u.stopPropagation();
      else if (_r(n, u), r & 4 && -1 < Oa.indexOf(n)) {
        for (; c !== null; ) {
          var v = ys(c);
          if (v !== null && Wl(v), v = Jl(n, r, o, u), v === null && Cd(n, r, u, Vi, o), v === c) break;
          c = v;
        }
        c !== null && u.stopPropagation();
      } else Cd(n, r, u, null, o);
    }
  }
  var Vi = null;
  function Jl(n, r, o, u) {
    if (Vi = null, n = an(u), n = fl(n), n !== null) if (r = pe(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = ct(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function ts(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (vn()) {
          case et:
            return 1;
          case pi:
            return 4;
          case Fi:
          case vc:
            return 16;
          case ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Zl = null, g = null;
  function w() {
    if (g) return g;
    var n, r = Zl, o = r.length, u, c = "value" in Ma ? Ma.value : Ma.textContent, v = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var E = o - n;
    for (u = 1; u <= E && r[o - u] === c[v - u]; u++) ;
    return g = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function B() {
    return !0;
  }
  function ae() {
    return !1;
  }
  function Te(n) {
    function r(o, u, c, v, E) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = v, this.target = E, this.currentTarget = null;
      for (var _ in n) n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(v) : v[_]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? B : ae, this.isPropagationStopped = ae, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = B);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = B);
    }, persist: function() {
    }, isPersistent: B }), r;
  }
  var me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $e = Te(me), lt = fe({}, me, { view: 0, detail: 0 }), Pt = Te(lt), Gt, Kt, rt, tn = fe({}, lt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rt && (rt && n.type === "mousemove" ? (Gt = n.screenX - rt.screenX, Kt = n.screenY - rt.screenY) : Kt = Gt = 0, rt = n), Gt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), Tn = Te(tn), il = fe({}, tn, { dataTransfer: 0 }), ns = Te(il), $i = fe({}, lt, { relatedTarget: 0 }), ol = Te($i), rs = fe({}, me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = Te(rs), gc = fe({}, me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cd = Te(gc), hv = fe({}, me, { data: 0 }), Sc = Te(hv), mv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, yv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cy(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = gv[n]) ? !!r[n] : !1;
  }
  function Za() {
    return Cy;
  }
  var Ry = fe({}, lt, { key: function(n) {
    if (n.key) {
      var r = mv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? yv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), fd = Te(Ry), dd = fe({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = Te(dd), Ty = fe({}, lt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), Cc = Te(Ty), Sv = fe({}, me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = Te(Sv), Ii = fe({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mn = Te(Ii), Yi = [9, 13, 27, 32], as = R && "CompositionEvent" in window, yo = null;
  R && "documentMode" in document && (yo = document.documentMode);
  var _y = R && "TextEvent" in window && !yo, eu = R && (!as || yo && 8 < yo && 11 >= yo), Ev = " ", Cv = !1;
  function Rc(n, r) {
    switch (n) {
      case "keyup":
        return Yi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var tu = !1;
  function wy(n, r) {
    switch (n) {
      case "compositionend":
        return Rv(r);
      case "keypress":
        return r.which !== 32 ? null : (Cv = !0, Ev);
      case "textInput":
        return n = r.data, n === Ev && Cv ? null : n;
      default:
        return null;
    }
  }
  function Tv(n, r) {
    if (tu) return n === "compositionend" || !as && Rc(n, r) ? (n = w(), g = Zl = Ma = null, tu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return eu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var by = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _v(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!by[n.type] : r === "textarea";
  }
  function wv(n, r, o, u) {
    Da(u), r = vs(r, "onChange"), 0 < r.length && (o = new $e("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var nu = null, yi = null;
  function pd(n) {
    bc(n, 0);
  }
  function is(n) {
    var r = Ne(n);
    if (Qn(r)) return n;
  }
  function bv(n, r) {
    if (n === "change") return r;
  }
  var xv = !1;
  if (R) {
    var vd;
    if (R) {
      var hd = "oninput" in document;
      if (!hd) {
        var kv = document.createElement("div");
        kv.setAttribute("oninput", "return;"), hd = typeof kv.oninput == "function";
      }
      vd = hd;
    } else vd = !1;
    xv = vd && (!document.documentMode || 9 < document.documentMode);
  }
  function Dv() {
    nu && (nu.detachEvent("onpropertychange", Ov), yi = nu = null);
  }
  function Ov(n) {
    if (n.propertyName === "value" && is(yi)) {
      var r = [];
      wv(r, yi, n, an(n)), Zo(pd, r);
    }
  }
  function xy(n, r, o) {
    n === "focusin" ? (Dv(), nu = r, yi = o, nu.attachEvent("onpropertychange", Ov)) : n === "focusout" && Dv();
  }
  function ky(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return is(yi);
  }
  function Lv(n, r) {
    if (n === "click") return is(r);
  }
  function Dy(n, r) {
    if (n === "input" || n === "change") return is(r);
  }
  function Nv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : Nv;
  function os(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!ce.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Mv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Av(n, r) {
    var o = Mv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Mv(o);
    }
  }
  function Tc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function go() {
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function ru(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Uv(n) {
    var r = go(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Tc(o.ownerDocument.documentElement, o)) {
      if (u !== null && ru(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, v = Math.min(u.start, c);
          u = u.end === void 0 ? v : Math.min(u.end, c), !n.extend && v > u && (c = u, u = v, v = c), c = Av(o, v);
          var E = Av(
            o,
            u
          );
          c && E && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), v > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var au = R && "documentMode" in document && 11 >= document.documentMode, iu = null, md = null, ls = null, yd = !1;
  function zv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    yd || iu == null || iu !== ir(u) || (u = iu, "selectionStart" in u && ru(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ls && os(ls, u) || (ls = u, u = vs(md, "onSelect"), 0 < u.length && (r = new $e("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = iu)));
  }
  function us(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ou = { animationend: us("Animation", "AnimationEnd"), animationiteration: us("Animation", "AnimationIteration"), animationstart: us("Animation", "AnimationStart"), transitionend: us("Transition", "TransitionEnd") }, _c = {}, wr = {};
  R && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete ou.animationend.animation, delete ou.animationiteration.animation, delete ou.animationstart.animation), "TransitionEvent" in window || delete ou.transitionend.transition);
  function ss(n) {
    if (_c[n]) return _c[n];
    if (!ou[n]) return n;
    var r = ou[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in wr) return _c[n] = r[o];
    return n;
  }
  var Fv = ss("animationend"), jv = ss("animationiteration"), Hv = ss("animationstart"), Pv = ss("transitionend"), Bv = /* @__PURE__ */ new Map(), gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gi(n, r) {
    Bv.set(n, r), Y(r, [n]);
  }
  for (var ll = 0; ll < gd.length; ll++) {
    var Sd = gd[ll], cs = Sd.toLowerCase(), Oy = Sd[0].toUpperCase() + Sd.slice(1);
    gi(cs, "on" + Oy);
  }
  gi(Fv, "onAnimationEnd"), gi(jv, "onAnimationIteration"), gi(Hv, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(Pv, "onTransitionEnd"), ee("onMouseEnter", ["mouseout", "mouseover"]), ee("onMouseLeave", ["mouseout", "mouseover"]), ee("onPointerEnter", ["pointerout", "pointerover"]), ee("onPointerLeave", ["pointerout", "pointerover"]), Y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
  function wc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, se(u, r, void 0, n), n.currentTarget = null;
  }
  function bc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var v = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var _ = u[E], x = _.instance, H = _.currentTarget;
          if (_ = _.listener, x !== v && c.isPropagationStopped()) break e;
          wc(c, _, H), v = x;
        }
        else for (E = 0; E < u.length; E++) {
          if (_ = u[E], x = _.instance, H = _.currentTarget, _ = _.listener, x !== v && c.isPropagationStopped()) break e;
          wc(c, _, H), v = x;
        }
      }
    }
    if (di) throw n = zi, di = !1, zi = null, n;
  }
  function Bt(n, r) {
    var o = r[Rd];
    o === void 0 && (o = r[Rd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Ed(r, n, 2, !1), o.add(u));
  }
  function So(n, r, o) {
    var u = 0;
    r && (u |= 4), Ed(o, n, u, r);
  }
  var ds = "_reactListening" + Math.random().toString(36).slice(2);
  function ps(n) {
    if (!n[ds]) {
      n[ds] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Ly.has(o) || So(o, !1, n), So(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ds] || (r[ds] = !0, So("selectionchange", !1, r));
    }
  }
  function Ed(n, r, o, u) {
    switch (ts(r)) {
      case 1:
        var c = Bi;
        break;
      case 4:
        c = Xl;
        break;
      default:
        c = mo;
    }
    o = c.bind(null, r, o, n), c = void 0, !va || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Cd(n, r, o, u, c) {
    var v = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var _ = u.stateNode.containerInfo;
        if (_ === c || _.nodeType === 8 && _.parentNode === c) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var x = E.tag;
          if ((x === 3 || x === 4) && (x = E.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          E = E.return;
        }
        for (; _ !== null; ) {
          if (E = fl(_), E === null) return;
          if (x = E.tag, x === 5 || x === 6) {
            u = v = E;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      u = u.return;
    }
    Zo(function() {
      var H = v, X = an(o), J = [];
      e: {
        var K = Bv.get(n);
        if (K !== void 0) {
          var ye = $e, be = n;
          switch (n) {
            case "keypress":
              if (F(o) === 0) break e;
            case "keydown":
            case "keyup":
              ye = fd;
              break;
            case "focusin":
              be = "focus", ye = ol;
              break;
            case "focusout":
              be = "blur", ye = ol;
              break;
            case "beforeblur":
            case "afterblur":
              ye = ol;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ye = Tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = ns;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = Cc;
              break;
            case Fv:
            case jv:
            case Hv:
              ye = sd;
              break;
            case Pv:
              ye = Xr;
              break;
            case "scroll":
              ye = Pt;
              break;
            case "wheel":
              ye = Mn;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = cd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = Ec;
          }
          var ke = (r & 4) !== 0, xn = !ke && n === "scroll", M = ke ? K !== null ? K + "Capture" : null : K;
          ke = [];
          for (var D = H, z; D !== null; ) {
            z = D;
            var re = z.stateNode;
            if (z.tag === 5 && re !== null && (z = re, M !== null && (re = ci(D, M), re != null && ke.push(lu(D, re, z)))), xn) break;
            D = D.return;
          }
          0 < ke.length && (K = new ye(K, be, null, o, X), J.push({ event: K, listeners: ke }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", K && o !== Xn && (be = o.relatedTarget || o.fromElement) && (fl(be) || be[qi])) break e;
          if ((ye || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, ye ? (be = o.relatedTarget || o.toElement, ye = H, be = be ? fl(be) : null, be !== null && (xn = pe(be), be !== xn || be.tag !== 5 && be.tag !== 6) && (be = null)) : (ye = null, be = H), ye !== be)) {
            if (ke = Tn, re = "onMouseLeave", M = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Ec, re = "onPointerLeave", M = "onPointerEnter", D = "pointer"), xn = ye == null ? K : Ne(ye), z = be == null ? K : Ne(be), K = new ke(re, D + "leave", ye, o, X), K.target = xn, K.relatedTarget = z, re = null, fl(X) === H && (ke = new ke(M, D + "enter", be, o, X), ke.target = z, ke.relatedTarget = xn, re = ke), xn = re, ye && be) t: {
              for (ke = ye, M = be, D = 0, z = ke; z; z = ul(z)) D++;
              for (z = 0, re = M; re; re = ul(re)) z++;
              for (; 0 < D - z; ) ke = ul(ke), D--;
              for (; 0 < z - D; ) M = ul(M), z--;
              for (; D--; ) {
                if (ke === M || M !== null && ke === M.alternate) break t;
                ke = ul(ke), M = ul(M);
              }
              ke = null;
            }
            else ke = null;
            ye !== null && xc(J, K, ye, ke, !1), be !== null && xn !== null && xc(J, xn, be, ke, !0);
          }
        }
        e: {
          if (K = H ? Ne(H) : window, ye = K.nodeName && K.nodeName.toLowerCase(), ye === "select" || ye === "input" && K.type === "file") var ve = bv;
          else if (_v(K)) if (xv) ve = Dy;
          else {
            ve = ky;
            var Ue = xy;
          }
          else (ye = K.nodeName) && ye.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (ve = Lv);
          if (ve && (ve = ve(n, H))) {
            wv(J, ve, o, X);
            break e;
          }
          Ue && Ue(n, K, H), n === "focusout" && (Ue = K._wrapperState) && Ue.controlled && K.type === "number" && Ga(K, "number", K.value);
        }
        switch (Ue = H ? Ne(H) : window, n) {
          case "focusin":
            (_v(Ue) || Ue.contentEditable === "true") && (iu = Ue, md = H, ls = null);
            break;
          case "focusout":
            ls = md = iu = null;
            break;
          case "mousedown":
            yd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yd = !1, zv(J, o, X);
            break;
          case "selectionchange":
            if (au) break;
          case "keydown":
          case "keyup":
            zv(J, o, X);
        }
        var je;
        if (as) e: {
          switch (n) {
            case "compositionstart":
              var Qe = "onCompositionStart";
              break e;
            case "compositionend":
              Qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Qe = "onCompositionUpdate";
              break e;
          }
          Qe = void 0;
        }
        else tu ? Rc(n, o) && (Qe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (eu && o.locale !== "ko" && (tu || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && tu && (je = w()) : (Ma = X, Zl = "value" in Ma ? Ma.value : Ma.textContent, tu = !0)), Ue = vs(H, Qe), 0 < Ue.length && (Qe = new Sc(Qe, n, null, o, X), J.push({ event: Qe, listeners: Ue }), je ? Qe.data = je : (je = Rv(o), je !== null && (Qe.data = je)))), (je = _y ? wy(n, o) : Tv(n, o)) && (H = vs(H, "onBeforeInput"), 0 < H.length && (X = new Sc("onBeforeInput", "beforeinput", null, o, X), J.push({ event: X, listeners: H }), X.data = je));
      }
      bc(J, r);
    });
  }
  function lu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function vs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, v = c.stateNode;
      c.tag === 5 && v !== null && (c = v, v = ci(n, o), v != null && u.unshift(lu(n, v, c)), v = ci(n, r), v != null && u.push(lu(n, v, c))), n = n.return;
    }
    return u;
  }
  function ul(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xc(n, r, o, u, c) {
    for (var v = r._reactName, E = []; o !== null && o !== u; ) {
      var _ = o, x = _.alternate, H = _.stateNode;
      if (x !== null && x === u) break;
      _.tag === 5 && H !== null && (_ = H, c ? (x = ci(o, v), x != null && E.unshift(lu(o, x, _))) : c || (x = ci(o, v), x != null && E.push(lu(o, x, _)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Ny = /\r\n?/g, Vv = /\u0000|\uFFFD/g;
  function $v(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ny, `
`).replace(Vv, "");
  }
  function kc(n, r, o) {
    if (r = $v(r), $v(n) !== r && o) throw Error(p(425));
  }
  function Dc() {
  }
  var sl = null, hs = null;
  function cl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Oc = typeof setTimeout == "function" ? setTimeout : void 0, Iv = typeof clearTimeout == "function" ? clearTimeout : void 0, Lc = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lc < "u" ? function(n) {
    return Lc.resolve(null).then(n).catch(uu);
  } : Oc;
  function uu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function su(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), La(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    La(r);
  }
  function ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Nc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var cu = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + cu, ms = "__reactProps$" + cu, qi = "__reactContainer$" + cu, Rd = "__reactEvents$" + cu, Td = "__reactListeners$" + cu, fu = "__reactHandles$" + cu;
  function fl(n) {
    var r = n[Aa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[qi] || o[Aa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Nc(n); n !== null; ) {
          if (o = n[Aa]) return o;
          n = Nc(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ys(n) {
    return n = n[Aa] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ne(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(p(33));
  }
  function Wi(n) {
    return n[ms] || null;
  }
  var An = [], ht = -1;
  function Jr(n) {
    return { current: n };
  }
  function Xt(n) {
    0 > ht || (n.current = An[ht], An[ht] = null, ht--);
  }
  function nn(n, r) {
    ht++, An[ht] = n.current, n.current = r;
  }
  var ft = {}, Sn = Jr(ft), Un = Jr(!1), Ua = ft;
  function ma(n, r) {
    var o = n.type.contextTypes;
    if (!o) return ft;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, v;
    for (v in o) c[v] = r[v];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Si() {
    Xt(Un), Xt(Sn);
  }
  function Mc(n, r, o) {
    if (Sn.current !== ft) throw Error(p(168));
    nn(Sn, r), nn(Un, o);
  }
  function Yv(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(p(108, _t(n) || "Unknown", c));
    return fe({}, o, u);
  }
  function dl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ft, Ua = Sn.current, nn(Sn, n), nn(Un, Un.current), !0;
  }
  function za(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
    o ? (n = Yv(n, r, Ua), u.__reactInternalMemoizedMergedChildContext = n, Xt(Un), Xt(Sn), nn(Sn, n)) : Xt(Un), nn(Un, o);
  }
  var ni = null, gs = !1, Ss = !1;
  function Eo(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  function _d(n) {
    gs = !0, Eo(n);
  }
  function Mr() {
    if (!Ss && ni !== null) {
      Ss = !0;
      var n = 0, r = wt;
      try {
        var o = ni;
        for (wt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ni = null, gs = !1;
      } catch (c) {
        throw ni !== null && (ni = ni.slice(n + 1)), on(et, Mr), c;
      } finally {
        wt = r, Ss = !1;
      }
    }
    return null;
  }
  var Co = [], Ro = 0, du = null, To = 0, ur = [], Fn = 0, pl = null, Ar = 1, Ei = "";
  function _o(n, r) {
    Co[Ro++] = To, Co[Ro++] = du, du = n, To = r;
  }
  function qv(n, r, o) {
    ur[Fn++] = Ar, ur[Fn++] = Ei, ur[Fn++] = pl, pl = n;
    var u = Ar;
    n = Ei;
    var c = 32 - Or(u) - 1;
    u &= ~(1 << c), o += 1;
    var v = 32 - Or(r) + c;
    if (30 < v) {
      var E = c - c % 5;
      v = (u & (1 << E) - 1).toString(32), u >>= E, c -= E, Ar = 1 << 32 - Or(r) + c | o << c | u, Ei = v + n;
    } else Ar = 1 << v | o << c | u, Ei = n;
  }
  function wd(n) {
    n.return !== null && (_o(n, 1), qv(n, 1, 0));
  }
  function Ac(n) {
    for (; n === du; ) du = Co[--Ro], Co[Ro] = null, To = Co[--Ro], Co[Ro] = null;
    for (; n === pl; ) pl = ur[--Fn], ur[Fn] = null, Ei = ur[--Fn], ur[Fn] = null, Ar = ur[--Fn], ur[Fn] = null;
  }
  var Zr = null, ea = null, fn = !1, ri = null;
  function bd(n, r) {
    var o = Ba(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function xd(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = pl !== null ? { id: Ar, overflow: Ei } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ba(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function kd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Dd(n) {
    if (fn) {
      var r = ea;
      if (r) {
        var o = r;
        if (!xd(n, r)) {
          if (kd(n)) throw Error(p(418));
          r = ti(o.nextSibling);
          var u = Zr;
          r && xd(n, r) ? bd(u, o) : (n.flags = n.flags & -4097 | 2, fn = !1, Zr = n);
        }
      } else {
        if (kd(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Zr = n;
      }
    }
  }
  function Wv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function _n(n) {
    if (n !== Zr) return !1;
    if (!fn) return Wv(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !cl(n.type, n.memoizedProps)), r && (r = ea)) {
      if (kd(n)) throw Qv(), Error(p(418));
      for (; r; ) bd(n, r), r = ti(r.nextSibling);
    }
    if (Wv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ea = ti(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Zr ? ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Qv() {
    for (var n = ea; n; ) n = ti(n.nextSibling);
  }
  function Qi() {
    ea = Zr = null, fn = !1;
  }
  function Es(n) {
    ri === null ? ri = [n] : ri.push(n);
  }
  var vl = Pe.ReactCurrentBatchConfig;
  function Cs(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(p(147, n));
        var c = u, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(E) {
          var _ = c.refs;
          E === null ? delete _[v] : _[v] = E;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!o._owner) throw Error(p(290, n));
    }
    return n;
  }
  function pu(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Gv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Kv(n) {
    function r(M, D) {
      if (n) {
        var z = M.deletions;
        z === null ? (M.deletions = [D], M.flags |= 16) : z.push(D);
      }
    }
    function o(M, D) {
      if (!n) return null;
      for (; D !== null; ) r(M, D), D = D.sibling;
      return null;
    }
    function u(M, D) {
      for (M = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? M.set(D.key, D) : M.set(D.index, D), D = D.sibling;
      return M;
    }
    function c(M, D) {
      return M = Uo(M, D), M.index = 0, M.sibling = null, M;
    }
    function v(M, D, z) {
      return M.index = z, n ? (z = M.alternate, z !== null ? (z = z.index, z < D ? (M.flags |= 2, D) : z) : (M.flags |= 2, D)) : (M.flags |= 1048576, D);
    }
    function E(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function _(M, D, z, re) {
      return D === null || D.tag !== 6 ? (D = Ll(z, M.mode, re), D.return = M, D) : (D = c(D, z), D.return = M, D);
    }
    function x(M, D, z, re) {
      var ve = z.type;
      return ve === pt ? X(M, D, z.props.children, re, z.key) : D !== null && (D.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === yt && Gv(ve) === D.type) ? (re = c(D, z.props), re.ref = Cs(M, D, z), re.return = M, re) : (re = Ef(z.type, z.key, z.props, null, M.mode, re), re.ref = Cs(M, D, z), re.return = M, re);
    }
    function H(M, D, z, re) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = op(z, M.mode, re), D.return = M, D) : (D = c(D, z.children || []), D.return = M, D);
    }
    function X(M, D, z, re, ve) {
      return D === null || D.tag !== 7 ? (D = zo(z, M.mode, re, ve), D.return = M, D) : (D = c(D, z), D.return = M, D);
    }
    function J(M, D, z) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Ll("" + D, M.mode, z), D.return = M, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Ot:
            return z = Ef(D.type, D.key, D.props, null, M.mode, z), z.ref = Cs(M, null, D), z.return = M, z;
          case De:
            return D = op(D, M.mode, z), D.return = M, D;
          case yt:
            var re = D._init;
            return J(M, re(D._payload), z);
        }
        if (Dr(D) || we(D)) return D = zo(D, M.mode, z, null), D.return = M, D;
        pu(M, D);
      }
      return null;
    }
    function K(M, D, z, re) {
      var ve = D !== null ? D.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number") return ve !== null ? null : _(M, D, "" + z, re);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ot:
            return z.key === ve ? x(M, D, z, re) : null;
          case De:
            return z.key === ve ? H(M, D, z, re) : null;
          case yt:
            return ve = z._init, K(
              M,
              D,
              ve(z._payload),
              re
            );
        }
        if (Dr(z) || we(z)) return ve !== null ? null : X(M, D, z, re, null);
        pu(M, z);
      }
      return null;
    }
    function ye(M, D, z, re, ve) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return M = M.get(z) || null, _(D, M, "" + re, ve);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case Ot:
            return M = M.get(re.key === null ? z : re.key) || null, x(D, M, re, ve);
          case De:
            return M = M.get(re.key === null ? z : re.key) || null, H(D, M, re, ve);
          case yt:
            var Ue = re._init;
            return ye(M, D, z, Ue(re._payload), ve);
        }
        if (Dr(re) || we(re)) return M = M.get(z) || null, X(D, M, re, ve, null);
        pu(D, re);
      }
      return null;
    }
    function be(M, D, z, re) {
      for (var ve = null, Ue = null, je = D, Qe = D = 0, qn = null; je !== null && Qe < z.length; Qe++) {
        je.index > Qe ? (qn = je, je = null) : qn = je.sibling;
        var Lt = K(M, je, z[Qe], re);
        if (Lt === null) {
          je === null && (je = qn);
          break;
        }
        n && je && Lt.alternate === null && r(M, je), D = v(Lt, D, Qe), Ue === null ? ve = Lt : Ue.sibling = Lt, Ue = Lt, je = qn;
      }
      if (Qe === z.length) return o(M, je), fn && _o(M, Qe), ve;
      if (je === null) {
        for (; Qe < z.length; Qe++) je = J(M, z[Qe], re), je !== null && (D = v(je, D, Qe), Ue === null ? ve = je : Ue.sibling = je, Ue = je);
        return fn && _o(M, Qe), ve;
      }
      for (je = u(M, je); Qe < z.length; Qe++) qn = ye(je, M, Qe, z[Qe], re), qn !== null && (n && qn.alternate !== null && je.delete(qn.key === null ? Qe : qn.key), D = v(qn, D, Qe), Ue === null ? ve = qn : Ue.sibling = qn, Ue = qn);
      return n && je.forEach(function(jo) {
        return r(M, jo);
      }), fn && _o(M, Qe), ve;
    }
    function ke(M, D, z, re) {
      var ve = we(z);
      if (typeof ve != "function") throw Error(p(150));
      if (z = ve.call(z), z == null) throw Error(p(151));
      for (var Ue = ve = null, je = D, Qe = D = 0, qn = null, Lt = z.next(); je !== null && !Lt.done; Qe++, Lt = z.next()) {
        je.index > Qe ? (qn = je, je = null) : qn = je.sibling;
        var jo = K(M, je, Lt.value, re);
        if (jo === null) {
          je === null && (je = qn);
          break;
        }
        n && je && jo.alternate === null && r(M, je), D = v(jo, D, Qe), Ue === null ? ve = jo : Ue.sibling = jo, Ue = jo, je = qn;
      }
      if (Lt.done) return o(
        M,
        je
      ), fn && _o(M, Qe), ve;
      if (je === null) {
        for (; !Lt.done; Qe++, Lt = z.next()) Lt = J(M, Lt.value, re), Lt !== null && (D = v(Lt, D, Qe), Ue === null ? ve = Lt : Ue.sibling = Lt, Ue = Lt);
        return fn && _o(M, Qe), ve;
      }
      for (je = u(M, je); !Lt.done; Qe++, Lt = z.next()) Lt = ye(je, M, Qe, Lt.value, re), Lt !== null && (n && Lt.alternate !== null && je.delete(Lt.key === null ? Qe : Lt.key), D = v(Lt, D, Qe), Ue === null ? ve = Lt : Ue.sibling = Lt, Ue = Lt);
      return n && je.forEach(function(Wy) {
        return r(M, Wy);
      }), fn && _o(M, Qe), ve;
    }
    function xn(M, D, z, re) {
      if (typeof z == "object" && z !== null && z.type === pt && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ot:
            e: {
              for (var ve = z.key, Ue = D; Ue !== null; ) {
                if (Ue.key === ve) {
                  if (ve = z.type, ve === pt) {
                    if (Ue.tag === 7) {
                      o(M, Ue.sibling), D = c(Ue, z.props.children), D.return = M, M = D;
                      break e;
                    }
                  } else if (Ue.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === yt && Gv(ve) === Ue.type) {
                    o(M, Ue.sibling), D = c(Ue, z.props), D.ref = Cs(M, Ue, z), D.return = M, M = D;
                    break e;
                  }
                  o(M, Ue);
                  break;
                } else r(M, Ue);
                Ue = Ue.sibling;
              }
              z.type === pt ? (D = zo(z.props.children, M.mode, re, z.key), D.return = M, M = D) : (re = Ef(z.type, z.key, z.props, null, M.mode, re), re.ref = Cs(M, D, z), re.return = M, M = re);
            }
            return E(M);
          case De:
            e: {
              for (Ue = z.key; D !== null; ) {
                if (D.key === Ue) if (D.tag === 4 && D.stateNode.containerInfo === z.containerInfo && D.stateNode.implementation === z.implementation) {
                  o(M, D.sibling), D = c(D, z.children || []), D.return = M, M = D;
                  break e;
                } else {
                  o(M, D);
                  break;
                }
                else r(M, D);
                D = D.sibling;
              }
              D = op(z, M.mode, re), D.return = M, M = D;
            }
            return E(M);
          case yt:
            return Ue = z._init, xn(M, D, Ue(z._payload), re);
        }
        if (Dr(z)) return be(M, D, z, re);
        if (we(z)) return ke(M, D, z, re);
        pu(M, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, D !== null && D.tag === 6 ? (o(M, D.sibling), D = c(D, z), D.return = M, M = D) : (o(M, D), D = Ll(z, M.mode, re), D.return = M, M = D), E(M)) : o(M, D);
    }
    return xn;
  }
  var ai = Kv(!0), sr = Kv(!1), ue = Jr(null), ya = null, br = null, Od = null;
  function Ld() {
    Od = br = ya = null;
  }
  function Nd(n) {
    var r = ue.current;
    Xt(ue), n._currentValue = r;
  }
  function Md(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function vu(n, r) {
    ya = n, Od = br = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (tr = !0), n.firstContext = null);
  }
  function It(n) {
    var r = n._currentValue;
    if (Od !== n) if (n = { context: n, memoizedValue: r, next: null }, br === null) {
      if (ya === null) throw Error(p(308));
      br = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else br = br.next = n;
    return r;
  }
  var hl = null;
  function Ad(n) {
    hl === null ? hl = [n] : hl.push(n);
  }
  function Xv(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Ad(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ci(n, u);
  }
  function Ci(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Fa = !1;
  function wo(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function bo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (mt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ci(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ad(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ci(n, o);
  }
  function Uc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Zu(n, o);
    }
  }
  function Zv(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, v = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var E = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          v === null ? c = v = E : v = v.next = E, o = o.next;
        } while (o !== null);
        v === null ? c = v = r : v = v.next = r;
      } else c = v = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: v, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function zc(n, r, o, u) {
    var c = n.updateQueue;
    Fa = !1;
    var v = c.firstBaseUpdate, E = c.lastBaseUpdate, _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var x = _, H = x.next;
      x.next = null, E === null ? v = H : E.next = H, E = x;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, _ = X.lastBaseUpdate, _ !== E && (_ === null ? X.firstBaseUpdate = H : _.next = H, X.lastBaseUpdate = x));
    }
    if (v !== null) {
      var J = c.baseState;
      E = 0, X = H = x = null, _ = v;
      do {
        var K = _.lane, ye = _.eventTime;
        if ((u & K) === K) {
          X !== null && (X = X.next = {
            eventTime: ye,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var be = n, ke = _;
            switch (K = r, ye = o, ke.tag) {
              case 1:
                if (be = ke.payload, typeof be == "function") {
                  J = be.call(ye, J, K);
                  break e;
                }
                J = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ke.payload, K = typeof be == "function" ? be.call(ye, J, K) : be, K == null) break e;
                J = fe({}, J, K);
                break e;
              case 2:
                Fa = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [_] : K.push(_));
        } else ye = { eventTime: ye, lane: K, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, X === null ? (H = X = ye, x = J) : X = X.next = ye, E |= K;
        if (_ = _.next, _ === null) {
          if (_ = c.shared.pending, _ === null) break;
          K = _, _ = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (X === null && (x = J), c.baseState = x, c.firstBaseUpdate = H, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          E |= c.lane, c = c.next;
        while (c !== r);
      } else v === null && (c.shared.lanes = 0);
      wl |= E, n.lanes = E, n.memoizedState = J;
    }
  }
  function Ud(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(p(191, c));
        c.call(u);
      }
    }
  }
  var hu = {}, Ri = Jr(hu), Rs = Jr(hu), Ts = Jr(hu);
  function ml(n) {
    if (n === hu) throw Error(p(174));
    return n;
  }
  function zd(n, r) {
    switch (nn(Ts, r), nn(Rs, n), nn(Ri, hu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : or(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = or(r, n);
    }
    Xt(Ri), nn(Ri, r);
  }
  function mu() {
    Xt(Ri), Xt(Rs), Xt(Ts);
  }
  function Fd(n) {
    ml(Ts.current);
    var r = ml(Ri.current), o = or(r, n.type);
    r !== o && (nn(Rs, n), nn(Ri, o));
  }
  function jd(n) {
    Rs.current === n && (Xt(Ri), Xt(Rs));
  }
  var hn = Jr(0);
  function Fc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Hd = [];
  function _s() {
    for (var n = 0; n < Hd.length; n++) Hd[n]._workInProgressVersionPrimary = null;
    Hd.length = 0;
  }
  var Me = Pe.ReactCurrentDispatcher, dt = Pe.ReactCurrentBatchConfig, Ct = 0, tt = null, Jt = null, $n = null, jc = !1, ws = !1, bs = 0, Pd = 0;
  function I() {
    throw Error(p(321));
  }
  function jn(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ei(n[o], r[o])) return !1;
    return !0;
  }
  function Be(n, r, o, u, c, v) {
    if (Ct = v, tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Me.current = n === null || n.memoizedState === null ? Zc : ef, n = o(u, c), ws) {
      v = 0;
      do {
        if (ws = !1, bs = 0, 25 <= v) throw Error(p(301));
        v += 1, $n = Jt = null, r.updateQueue = null, Me.current = Ls, n = o(u, c);
      } while (ws);
    }
    if (Me.current = Yt, r = Jt !== null && Jt.next !== null, Ct = 0, $n = Jt = tt = null, jc = !1, r) throw Error(p(300));
    return n;
  }
  function xo() {
    var n = bs !== 0;
    return bs = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return $n === null ? tt.memoizedState = $n = n : $n = $n.next = n, $n;
  }
  function er() {
    if (Jt === null) {
      var n = tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Jt.next;
    var r = $n === null ? tt.memoizedState : $n.next;
    if (r !== null) $n = r, Jt = n;
    else {
      if (n === null) throw Error(p(310));
      Jt = n, n = { memoizedState: Jt.memoizedState, baseState: Jt.baseState, baseQueue: Jt.baseQueue, queue: Jt.queue, next: null }, $n === null ? tt.memoizedState = $n = n : $n = $n.next = n;
    }
    return $n;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function yl(n) {
    var r = er(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = Jt, c = u.baseQueue, v = o.pending;
    if (v !== null) {
      if (c !== null) {
        var E = c.next;
        c.next = v.next, v.next = E;
      }
      u.baseQueue = c = v, o.pending = null;
    }
    if (c !== null) {
      v = c.next, u = u.baseState;
      var _ = E = null, x = null, H = v;
      do {
        var X = H.lane;
        if ((Ct & X) === X) x !== null && (x = x.next = { lane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), u = H.hasEagerState ? H.eagerState : n(u, H.action);
        else {
          var J = {
            lane: X,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          };
          x === null ? (_ = x = J, E = u) : x = x.next = J, tt.lanes |= X, wl |= X;
        }
        H = H.next;
      } while (H !== null && H !== v);
      x === null ? E = u : x.next = _, ei(u, r.memoizedState) || (tr = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = x, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        v = c.lane, tt.lanes |= v, wl |= v, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function ko(n) {
    var r = er(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, v = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var E = c = c.next;
      do
        v = n(v, E.action), E = E.next;
      while (E !== c);
      ei(v, r.memoizedState) || (tr = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), o.lastRenderedState = v;
    }
    return [v, u];
  }
  function yu() {
  }
  function Hc(n, r) {
    var o = tt, u = er(), c = r(), v = !ei(u.memoizedState, c);
    if (v && (u.memoizedState = c, tr = !0), u = u.queue, xs(Vc.bind(null, o, u, n), [n]), u.getSnapshot !== r || v || $n !== null && $n.memoizedState.tag & 1) {
      if (o.flags |= 2048, gl(9, Bc.bind(null, o, u, c, r), void 0, null), Hn === null) throw Error(p(349));
      (Ct & 30) !== 0 || Pc(o, r, c);
    }
    return c;
  }
  function Pc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Bc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, $c(r) && Ic(n);
  }
  function Vc(n, r, o) {
    return o(function() {
      $c(r) && Ic(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ei(n, o);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = Ci(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function Yc(n) {
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = Os.bind(null, tt, n), [r.memoizedState, n];
  }
  function gl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function qc() {
    return er().memoizedState;
  }
  function gu(n, r, o, u) {
    var c = Zn();
    tt.flags |= n, c.memoizedState = gl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Su(n, r, o, u) {
    var c = er();
    u = u === void 0 ? null : u;
    var v = void 0;
    if (Jt !== null) {
      var E = Jt.memoizedState;
      if (v = E.destroy, u !== null && jn(u, E.deps)) {
        c.memoizedState = gl(r, o, v, u);
        return;
      }
    }
    tt.flags |= n, c.memoizedState = gl(1 | r, o, v, u);
  }
  function Wc(n, r) {
    return gu(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Su(2048, 8, n, r);
  }
  function Qc(n, r) {
    return Su(4, 2, n, r);
  }
  function Gc(n, r) {
    return Su(4, 4, n, r);
  }
  function ks(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Sl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(4, 4, ks.bind(null, r, n), o);
  }
  function Ds() {
  }
  function Kc(n, r) {
    var o = er();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && jn(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Xc(n, r) {
    var o = er();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && jn(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Jc(n, r, o) {
    return (Ct & 21) === 0 ? (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = o) : (ei(o, r) || (o = el(), tt.lanes |= o, wl |= o, n.baseState = !0), r);
  }
  function eh(n, r) {
    var o = wt;
    wt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = dt.transition;
    dt.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = o, dt.transition = u;
    }
  }
  function Eu() {
    return er().memoizedState;
  }
  function th(n, r, o) {
    var u = Ca(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Do(n)) ga(r, o);
    else if (o = Xv(n, r, o, u), o !== null) {
      var c = rn();
      Ra(o, n, u, c), nh(o, r, u);
    }
  }
  function Os(n, r, o) {
    var u = Ca(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Do(n)) ga(r, c);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null)) try {
        var E = r.lastRenderedState, _ = v(E, o);
        if (c.hasEagerState = !0, c.eagerState = _, ei(_, E)) {
          var x = r.interleaved;
          x === null ? (c.next = c, Ad(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = Xv(n, r, c, u), o !== null && (c = rn(), Ra(o, n, u, c), nh(o, r, u));
    }
  }
  function Do(n) {
    var r = n.alternate;
    return n === tt || r !== null && r === tt;
  }
  function ga(n, r) {
    ws = jc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function nh(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Zu(n, o);
    }
  }
  var Yt = { readContext: It, useCallback: I, useContext: I, useEffect: I, useImperativeHandle: I, useInsertionEffect: I, useLayoutEffect: I, useMemo: I, useReducer: I, useRef: I, useState: I, useDebugValue: I, useDeferredValue: I, useTransition: I, useMutableSource: I, useSyncExternalStore: I, useId: I, unstable_isNewReconciler: !1 }, Zc = { readContext: It, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: Wc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, gu(
      4194308,
      4,
      ks.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return gu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return gu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Zn();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Zn();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = th.bind(null, tt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: Ds, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = eh.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = tt, c = Zn();
    if (fn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Hn === null) throw Error(p(349));
      (Ct & 30) !== 0 || Pc(u, r, o);
    }
    c.memoizedState = o;
    var v = { value: o, getSnapshot: r };
    return c.queue = v, Wc(Vc.bind(
      null,
      u,
      v,
      n
    ), [n]), u.flags |= 2048, gl(9, Bc.bind(null, u, v, o, r), void 0, null), o;
  }, useId: function() {
    var n = Zn(), r = Hn.identifierPrefix;
    if (fn) {
      var o = Ei, u = Ar;
      o = (u & ~(1 << 32 - Or(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = bs++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Pd++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: It,
    useCallback: Kc,
    useContext: It,
    useEffect: xs,
    useImperativeHandle: Sl,
    useInsertionEffect: Qc,
    useLayoutEffect: Gc,
    useMemo: Xc,
    useReducer: yl,
    useRef: qc,
    useState: function() {
      return yl(ta);
    },
    useDebugValue: Ds,
    useDeferredValue: function(n) {
      var r = er();
      return Jc(r, Jt.memoizedState, n);
    },
    useTransition: function() {
      var n = yl(ta)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: yu,
    useSyncExternalStore: Hc,
    useId: Eu,
    unstable_isNewReconciler: !1
  }, Ls = { readContext: It, useCallback: Kc, useContext: It, useEffect: xs, useImperativeHandle: Sl, useInsertionEffect: Qc, useLayoutEffect: Gc, useMemo: Xc, useReducer: ko, useRef: qc, useState: function() {
    return ko(ta);
  }, useDebugValue: Ds, useDeferredValue: function(n) {
    var r = er();
    return Jt === null ? r.memoizedState = n : Jc(r, Jt.memoizedState, n);
  }, useTransition: function() {
    var n = ko(ta)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: yu, useSyncExternalStore: Hc, useId: Eu, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Bd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : fe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? pe(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = rn(), c = Ca(n), v = Gi(u, c);
    v.payload = r, o != null && (v.callback = o), r = bo(n, v, c), r !== null && (Ra(r, n, c, u), Uc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = rn(), c = Ca(n), v = Gi(u, c);
    v.tag = 1, v.payload = r, o != null && (v.callback = o), r = bo(n, v, c), r !== null && (Ra(r, n, c, u), Uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = rn(), u = Ca(n), c = Gi(o, u);
    c.tag = 2, r != null && (c.callback = r), r = bo(n, c, u), r !== null && (Ra(r, n, u, o), Uc(r, n, u));
  } };
  function rh(n, r, o, u, c, v, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, v, E) : r.prototype && r.prototype.isPureReactComponent ? !os(o, u) || !os(c, v) : !0;
  }
  function ah(n, r, o) {
    var u = !1, c = ft, v = r.contextType;
    return typeof v == "object" && v !== null ? v = It(v) : (c = zn(r) ? Ua : Sn.current, u = r.contextTypes, v = (u = u != null) ? ma(n, c) : ft), r = new r(o, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function nf(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function Vd(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, wo(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? c.context = It(v) : (v = zn(r) ? Ua : Sn.current, c.context = ma(n, v)), c.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Bd(n, r, v, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), zc(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Oo(n, r) {
    try {
      var o = "", u = r;
      do
        o += Ge(u), u = u.return;
      while (u);
      var c = o;
    } catch (v) {
      c = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function rf(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function $d(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Ay = typeof WeakMap == "function" ? WeakMap : Map;
  function Ns(n, r, o) {
    o = Gi(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      No || (No = !0, Ps = u), $d(n, r);
    }, o;
  }
  function ih(n, r, o) {
    o = Gi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        $d(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
      $d(n, r), typeof u != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function Id(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Ay();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = rp.bind(null, n, r, o), r.then(n, n));
  }
  function Yd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function oh(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Gi(-1, 1), r.tag = 2, bo(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var El = Pe.ReactCurrentOwner, tr = !1;
  function wn(n, r, o, u) {
    r.child = n === null ? sr(r, null, o, u) : ai(r, n.child, o, u);
  }
  function af(n, r, o, u, c) {
    o = o.render;
    var v = r.ref;
    return vu(r, c), u = Be(n, r, o, u, v, c), o = xo(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && o && wd(r), r.flags |= 1, wn(n, r, u, c), r.child);
  }
  function ra(n, r, o, u, c) {
    if (n === null) {
      var v = o.type;
      return typeof v == "function" && !ip(v) && v.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = v, Cl(n, r, v, u, c)) : (n = Ef(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, (n.lanes & c) === 0) {
      var E = v.memoizedProps;
      if (o = o.compare, o = o !== null ? o : os, o(E, u) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Uo(v, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Cl(n, r, o, u, c) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (os(v, u) && n.ref === r.ref) if (tr = !1, r.pendingProps = u = v, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (tr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return of(n, r, o, u, c);
  }
  function at(n, r, o) {
    var u = r.pendingProps, c = u.children, v = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nn(_u, Ea), Ea |= o;
    else {
      if ((o & 1073741824) === 0) return n = v !== null ? v.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nn(_u, Ea), Ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = v !== null ? v.baseLanes : o, nn(_u, Ea), Ea |= u;
    }
    else v !== null ? (u = v.baseLanes | o, r.memoizedState = null) : u = o, nn(_u, Ea), Ea |= u;
    return wn(n, r, c, o), r.child;
  }
  function Ms(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function of(n, r, o, u, c) {
    var v = zn(o) ? Ua : Sn.current;
    return v = ma(r, v), vu(r, c), o = Be(n, r, o, u, v, c), u = xo(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && u && wd(r), r.flags |= 1, wn(n, r, o, c), r.child);
  }
  function Uy(n, r, o, u, c) {
    if (zn(o)) {
      var v = !0;
      dl(r);
    } else v = !1;
    if (vu(r, c), r.stateNode === null) ja(n, r), ah(r, o, u), Vd(r, o, u, c), u = !0;
    else if (n === null) {
      var E = r.stateNode, _ = r.memoizedProps;
      E.props = _;
      var x = E.context, H = o.contextType;
      typeof H == "object" && H !== null ? H = It(H) : (H = zn(o) ? Ua : Sn.current, H = ma(r, H));
      var X = o.getDerivedStateFromProps, J = typeof X == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      J || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (_ !== u || x !== H) && nf(r, E, u, H), Fa = !1;
      var K = r.memoizedState;
      E.state = K, zc(r, u, E, c), x = r.memoizedState, _ !== u || K !== x || Un.current || Fa ? (typeof X == "function" && (Bd(r, o, X, u), x = r.memoizedState), (_ = Fa || rh(r, o, _, u, K, x, H)) ? (J || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = x), E.props = u, E.state = x, E.context = H, u = _) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, Jv(n, r), _ = r.memoizedProps, H = r.type === r.elementType ? _ : na(r.type, _), E.props = H, J = r.pendingProps, K = E.context, x = o.contextType, typeof x == "object" && x !== null ? x = It(x) : (x = zn(o) ? Ua : Sn.current, x = ma(r, x));
      var ye = o.getDerivedStateFromProps;
      (X = typeof ye == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (_ !== J || K !== x) && nf(r, E, u, x), Fa = !1, K = r.memoizedState, E.state = K, zc(r, u, E, c);
      var be = r.memoizedState;
      _ !== J || K !== be || Un.current || Fa ? (typeof ye == "function" && (Bd(r, o, ye, u), be = r.memoizedState), (H = Fa || rh(r, o, H, u, K, be, x) || !1) ? (X || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, be, x), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, be, x)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = be), E.props = u, E.state = be, E.context = x, u = H) : (typeof E.componentDidUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return qd(n, r, o, u, v, c);
  }
  function qd(n, r, o, u, c, v) {
    Ms(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return c && za(r, o, !1), cr(n, r, v);
    u = r.stateNode, El.current = r;
    var _ = E && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = ai(r, n.child, null, v), r.child = ai(r, null, _, v)) : wn(n, r, _, v), r.memoizedState = u.state, c && za(r, o, !0), r.child;
  }
  function lf(n) {
    var r = n.stateNode;
    r.pendingContext ? Mc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mc(n, r.context, !1), zd(n, r.containerInfo);
  }
  function Cu(n, r, o, u, c) {
    return Qi(), Es(c), r.flags |= 256, wn(n, r, o, u), r.child;
  }
  var Wd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lh(n, r, o) {
    var u = r.pendingProps, c = hn.current, v = !1, E = (r.flags & 128) !== 0, _;
    if ((_ = E) || (_ = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), _ ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nn(hn, c & 1), n === null)
      return Dd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = u.children, n = u.fallback, v ? (u = r.mode, v = r.child, E = { mode: "hidden", children: E }, (u & 1) === 0 && v !== null ? (v.childLanes = 0, v.pendingProps = E) : v = Ou(E, u, 0, null), n = zo(n, u, o, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = uf(o), r.memoizedState = Wd, n) : As(r, E));
    if (c = n.memoizedState, c !== null && (_ = c.dehydrated, _ !== null)) return uh(n, r, E, u, _, c, o);
    if (v) {
      v = u.fallback, E = r.mode, c = n.child, _ = c.sibling;
      var x = { mode: "hidden", children: u.children };
      return (E & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = x, r.deletions = null) : (u = Uo(c, x), u.subtreeFlags = c.subtreeFlags & 14680064), _ !== null ? v = Uo(_, v) : (v = zo(v, E, o, null), v.flags |= 2), v.return = r, u.return = r, u.sibling = v, r.child = u, u = v, v = r.child, E = n.child.memoizedState, E = E === null ? uf(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, v.memoizedState = E, v.childLanes = n.childLanes & ~o, r.memoizedState = Wd, u;
    }
    return v = n.child, n = v.sibling, u = Uo(v, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function As(n, r) {
    return r = Ou({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function sf(n, r, o, u) {
    return u !== null && Es(u), ai(r, n.child, null, o), n = As(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function uh(n, r, o, u, c, v, E) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = rf(Error(p(422))), sf(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = u.fallback, c = r.mode, u = Ou({ mode: "visible", children: u.children }, c, 0, null), v = zo(v, c, E, null), v.flags |= 2, u.return = r, v.return = r, u.sibling = v, r.child = u, (r.mode & 1) !== 0 && ai(r, n.child, null, E), r.child.memoizedState = uf(E), r.memoizedState = Wd, v);
    if ((r.mode & 1) === 0) return sf(n, r, E, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var _ = u.dgst;
      return u = _, v = Error(p(419)), u = rf(v, u, void 0), sf(n, r, E, u);
    }
    if (_ = (E & n.childLanes) !== 0, tr || _) {
      if (u = Hn, u !== null) {
        switch (E & -E) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (u.suspendedLanes | E)) !== 0 ? 0 : c, c !== 0 && c !== v.retryLane && (v.retryLane = c, Ci(n, c), Ra(u, n, c, -1));
      }
      return tp(), u = rf(Error(p(421))), sf(n, r, E, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = By.bind(null, n), c._reactRetry = r, null) : (n = v.treeContext, ea = ti(c.nextSibling), Zr = r, fn = !0, ri = null, n !== null && (ur[Fn++] = Ar, ur[Fn++] = Ei, ur[Fn++] = pl, Ar = n.id, Ei = n.overflow, pl = r), r = As(r, u.children), r.flags |= 4096, r);
  }
  function Qd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Md(n.return, r, o);
  }
  function cf(n, r, o, u, c) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = u, v.tail = o, v.tailMode = c);
  }
  function aa(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, v = u.tail;
    if (wn(n, r, u.children, o), u = hn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Qd(n, o, r);
        else if (n.tag === 19) Qd(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (nn(hn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Fc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), cf(r, !1, c, o, v);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Fc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        cf(r, !0, o, null, v);
        break;
      case "together":
        cf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), wl |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Uo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Uo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ff(n, r, o) {
    switch (r.tag) {
      case 3:
        lf(r), Qi();
        break;
      case 5:
        Fd(r);
        break;
      case 1:
        zn(r.type) && dl(r);
        break;
      case 4:
        zd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        nn(ue, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (nn(hn, hn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? lh(n, r, o) : (nn(hn, hn.current & 1), n = cr(n, r, o), n !== null ? n.sibling : null);
        nn(hn, hn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return aa(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), nn(hn, hn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, at(n, r, o);
    }
    return cr(n, r, o);
  }
  var Ru, Sa, In, sh;
  Ru = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Sa = function() {
  }, In = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, ml(Ri.current);
      var v = null;
      switch (o) {
        case "input":
          c = On(n, c), u = On(n, u), v = [];
          break;
        case "select":
          c = fe({}, c, { value: void 0 }), u = fe({}, u, { value: void 0 }), v = [];
          break;
        case "textarea":
          c = Gn(n, c), u = Gn(n, u), v = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Dc);
      }
      un(o, u);
      var E;
      o = null;
      for (H in c) if (!u.hasOwnProperty(H) && c.hasOwnProperty(H) && c[H] != null) if (H === "style") {
        var _ = c[H];
        for (E in _) _.hasOwnProperty(E) && (o || (o = {}), o[E] = "");
      } else H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (N.hasOwnProperty(H) ? v || (v = []) : (v = v || []).push(H, null));
      for (H in u) {
        var x = u[H];
        if (_ = c != null ? c[H] : void 0, u.hasOwnProperty(H) && x !== _ && (x != null || _ != null)) if (H === "style") if (_) {
          for (E in _) !_.hasOwnProperty(E) || x && x.hasOwnProperty(E) || (o || (o = {}), o[E] = "");
          for (E in x) x.hasOwnProperty(E) && _[E] !== x[E] && (o || (o = {}), o[E] = x[E]);
        } else o || (v || (v = []), v.push(
          H,
          o
        )), o = x;
        else H === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, _ = _ ? _.__html : void 0, x != null && _ !== x && (v = v || []).push(H, x)) : H === "children" ? typeof x != "string" && typeof x != "number" || (v = v || []).push(H, "" + x) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (N.hasOwnProperty(H) ? (x != null && H === "onScroll" && Bt("scroll", n), v || _ === x || (v = [])) : (v = v || []).push(H, x));
      }
      o && (v = v || []).push("style", o);
      var H = v;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, sh = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Us(n, r) {
    if (!fn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Gd(n, r, o) {
    var u = r.pendingProps;
    switch (Ac(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xr(r), null;
      case 1:
        return zn(r.type) && Si(), xr(r), null;
      case 3:
        return u = r.stateNode, mu(), Xt(Un), Xt(Sn), _s(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (_n(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ri !== null && (Is(ri), ri = null))), Sa(n, r), xr(r), null;
      case 5:
        jd(r);
        var c = ml(Ts.current);
        if (o = r.type, n !== null && r.stateNode != null) In(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return xr(r), null;
          }
          if (n = ml(Ri.current), _n(r)) {
            u = r.stateNode, o = r.type;
            var v = r.memoizedProps;
            switch (u[Aa] = r, u[ms] = v, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Bt("cancel", u), Bt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < fs.length; c++) Bt(fs[c], u);
                break;
              case "source":
                Bt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  u
                ), Bt("load", u);
                break;
              case "details":
                Bt("toggle", u);
                break;
              case "input":
                Cr(u, v), Bt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!v.multiple }, Bt("invalid", u);
                break;
              case "textarea":
                Kn(u, v), Bt("invalid", u);
            }
            un(o, v), c = null;
            for (var E in v) if (v.hasOwnProperty(E)) {
              var _ = v[E];
              E === "children" ? typeof _ == "string" ? u.textContent !== _ && (v.suppressHydrationWarning !== !0 && kc(u.textContent, _, n), c = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (v.suppressHydrationWarning !== !0 && kc(
                u.textContent,
                _,
                n
              ), c = ["children", "" + _]) : N.hasOwnProperty(E) && _ != null && E === "onScroll" && Bt("scroll", u);
            }
            switch (o) {
              case "input":
                Dn(u), fa(u, v, !0);
                break;
              case "textarea":
                Dn(u), Ka(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (u.onclick = Dc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Nn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(o, { is: u.is }) : (n = E.createElement(o), o === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, o), n[Aa] = r, n[ms] = u, Ru(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = sn(o, u), o) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < fs.length; c++) Bt(fs[c], n);
                  c = u;
                  break;
                case "source":
                  Bt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), c = u;
                  break;
                case "details":
                  Bt("toggle", n), c = u;
                  break;
                case "input":
                  Cr(n, u), c = On(n, u), Bt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = fe({}, u, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  Kn(n, u), c = Gn(n, u), Bt("invalid", n);
                  break;
                default:
                  c = u;
              }
              un(o, c), _ = c;
              for (v in _) if (_.hasOwnProperty(v)) {
                var x = _[v];
                v === "style" ? Ut(n, x) : v === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Mi(n, x)) : v === "children" ? typeof x == "string" ? (o !== "textarea" || x !== "") && da(n, x) : typeof x == "number" && da(n, "" + x) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (N.hasOwnProperty(v) ? x != null && v === "onScroll" && Bt("scroll", n) : x != null && nt(n, v, x, E));
              }
              switch (o) {
                case "input":
                  Dn(n), fa(n, u, !1);
                  break;
                case "textarea":
                  Dn(n), Ka(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Je(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, v = u.value, v != null ? Vn(n, !!u.multiple, v, !1) : u.defaultValue != null && Vn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Dc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null) sh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (o = ml(Ts.current), ml(Ri.current), _n(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Aa] = r, (v = u.nodeValue !== o) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                kc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && kc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            v && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Aa] = r, r.stateNode = u;
        }
        return xr(r), null;
      case 13:
        if (Xt(hn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && ea !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Qv(), Qi(), r.flags |= 98560, v = !1;
          else if (v = _n(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!v) throw Error(p(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(p(317));
              v[Aa] = r;
            } else Qi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            xr(r), v = !1;
          } else ri !== null && (Is(ri), ri = null), v = !0;
          if (!v) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (hn.current & 1) !== 0 ? Yn === 0 && (Yn = 3) : tp())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return mu(), Sa(n, r), n === null && ps(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Nd(r.type._context), xr(r), null;
      case 17:
        return zn(r.type) && Si(), xr(r), null;
      case 19:
        if (Xt(hn), v = r.memoizedState, v === null) return xr(r), null;
        if (u = (r.flags & 128) !== 0, E = v.rendering, E === null) if (u) Us(v, !1);
        else {
          if (Yn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = Fc(n), E !== null) {
              for (r.flags |= 128, Us(v, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) v = o, n = u, v.flags &= 14680066, E = v.alternate, E === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = E.childLanes, v.lanes = E.lanes, v.child = E.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = E.memoizedProps, v.memoizedState = E.memoizedState, v.updateQueue = E.updateQueue, v.type = E.type, n = E.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return nn(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          v.tail !== null && Ft() > bu && (r.flags |= 128, u = !0, Us(v, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Fc(E), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Us(v, !0), v.tail === null && v.tailMode === "hidden" && !E.alternate && !fn) return xr(r), null;
          } else 2 * Ft() - v.renderingStartTime > bu && o !== 1073741824 && (r.flags |= 128, u = !0, Us(v, !1), r.lanes = 4194304);
          v.isBackwards ? (E.sibling = r.child, r.child = E) : (o = v.last, o !== null ? o.sibling = E : r.child = E, v.last = E);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = Ft(), r.sibling = null, o = hn.current, nn(hn, u ? o & 1 | 2 : o & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return ep(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ea & 1073741824) !== 0 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function ch(n, r) {
    switch (Ac(r), r.tag) {
      case 1:
        return zn(r.type) && Si(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Xt(Un), Xt(Sn), _s(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return jd(r), null;
      case 13:
        if (Xt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(p(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Xt(hn), null;
      case 4:
        return mu(), null;
      case 10:
        return Nd(r.type._context), null;
      case 22:
      case 23:
        return ep(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rl = !1, fr = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function Lo(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      En(n, r, u);
    }
    else o.current = null;
  }
  function Kd(n, r, o) {
    try {
      o();
    } catch (u) {
      En(n, r, u);
    }
  }
  var Xd = !1;
  function Fy(n, r) {
    if (sl = ho, n = go(), ru(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, v = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, v.nodeType;
          } catch {
            o = null;
            break e;
          }
          var E = 0, _ = -1, x = -1, H = 0, X = 0, J = n, K = null;
          t: for (; ; ) {
            for (var ye; J !== o || c !== 0 && J.nodeType !== 3 || (_ = E + c), J !== v || u !== 0 && J.nodeType !== 3 || (x = E + u), J.nodeType === 3 && (E += J.nodeValue.length), (ye = J.firstChild) !== null; )
              K = J, J = ye;
            for (; ; ) {
              if (J === n) break t;
              if (K === o && ++H === c && (_ = E), K === v && ++X === u && (x = E), (ye = J.nextSibling) !== null) break;
              J = K, K = J.parentNode;
            }
            J = ye;
          }
          o = _ === -1 || x === -1 ? null : { start: _, end: x };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (hs = { focusedElem: n, selectionRange: o }, ho = !1, Re = r; Re !== null; ) if (r = Re, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Re = n;
    else for (; Re !== null; ) {
      r = Re;
      try {
        var be = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (be !== null) {
              var ke = be.memoizedProps, xn = be.memoizedState, M = r.stateNode, D = M.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : na(r.type, ke), xn);
              M.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var z = r.stateNode.containerInfo;
            z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (re) {
        En(r, r.return, re);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Re = n;
        break;
      }
      Re = r.return;
    }
    return be = Xd, Xd = !1, be;
  }
  function Tu(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var v = c.destroy;
          c.destroy = void 0, v !== void 0 && Kd(r, o, v);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function df(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function pf(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function fh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, fh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[ms], delete r[Rd], delete r[Td], delete r[fu])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function zs(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || vf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ti(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Dc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ti(n, r, o), n = n.sibling; n !== null; ) Ti(n, r, o), n = n.sibling;
  }
  function _i(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (_i(n, r, o), n = n.sibling; n !== null; ) _i(n, r, o), n = n.sibling;
  }
  var mn = null, Ur = !1;
  function Ha(n, r, o) {
    for (o = o.child; o !== null; ) Ki(n, r, o), o = o.sibling;
  }
  function Ki(n, r, o) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(co, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        fr || Lo(o, r);
      case 6:
        var u = mn, c = Ur;
        mn = null, Ha(n, r, o), mn = u, Ur = c, mn !== null && (Ur ? (n = mn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : mn.removeChild(o.stateNode));
        break;
      case 18:
        mn !== null && (Ur ? (n = mn, o = o.stateNode, n.nodeType === 8 ? su(n.parentNode, o) : n.nodeType === 1 && su(n, o), La(n)) : su(mn, o.stateNode));
        break;
      case 4:
        u = mn, c = Ur, mn = o.stateNode.containerInfo, Ur = !0, Ha(n, r, o), mn = u, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var v = c, E = v.destroy;
            v = v.tag, E !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && Kd(o, r, E), c = c.next;
          } while (c !== u);
        }
        Ha(n, r, o);
        break;
      case 1:
        if (!fr && (Lo(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (_) {
          En(o, r, _);
        }
        Ha(n, r, o);
        break;
      case 21:
        Ha(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (fr = (u = fr) || o.memoizedState !== null, Ha(n, r, o), fr = u) : Ha(n, r, o);
        break;
      default:
        Ha(n, r, o);
    }
  }
  function dh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new zy()), r.forEach(function(u) {
        var c = Vy.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var v = n, E = r, _ = E;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              mn = _.stateNode, Ur = !1;
              break e;
            case 3:
              mn = _.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              mn = _.stateNode.containerInfo, Ur = !0;
              break e;
          }
          _ = _.return;
        }
        if (mn === null) throw Error(p(160));
        Ki(v, E, c), mn = null, Ur = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (H) {
        En(c, r, H);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) ph(r, n), r = r.sibling;
  }
  function ph(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), oi(n), u & 4) {
          try {
            Tu(3, n, n.return), df(3, n);
          } catch (ke) {
            En(n, n.return, ke);
          }
          try {
            Tu(5, n, n.return);
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 1:
        ii(r, n), oi(n), u & 512 && o !== null && Lo(o, o.return);
        break;
      case 5:
        if (ii(r, n), oi(n), u & 512 && o !== null && Lo(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var v = n.memoizedProps, E = o !== null ? o.memoizedProps : v, _ = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null) try {
            _ === "input" && v.type === "radio" && v.name != null && Bn(c, v), sn(_, E);
            var H = sn(_, v);
            for (E = 0; E < x.length; E += 2) {
              var X = x[E], J = x[E + 1];
              X === "style" ? Ut(c, J) : X === "dangerouslySetInnerHTML" ? Mi(c, J) : X === "children" ? da(c, J) : nt(c, X, J, H);
            }
            switch (_) {
              case "input":
                Ln(c, v);
                break;
              case "textarea":
                Rr(c, v);
                break;
              case "select":
                var K = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!v.multiple;
                var ye = v.value;
                ye != null ? Vn(c, !!v.multiple, ye, !1) : K !== !!v.multiple && (v.defaultValue != null ? Vn(
                  c,
                  !!v.multiple,
                  v.defaultValue,
                  !0
                ) : Vn(c, !!v.multiple, v.multiple ? [] : "", !1));
            }
            c[ms] = v;
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 6:
        if (ii(r, n), oi(n), u & 4) {
          if (n.stateNode === null) throw Error(p(162));
          c = n.stateNode, v = n.memoizedProps;
          try {
            c.nodeValue = v;
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (ii(r, n), oi(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          La(r.containerInfo);
        } catch (ke) {
          En(n, n.return, ke);
        }
        break;
      case 4:
        ii(r, n), oi(n);
        break;
      case 13:
        ii(r, n), oi(n), c = n.child, c.flags & 8192 && (v = c.memoizedState !== null, c.stateNode.isHidden = v, !v || c.alternate !== null && c.alternate.memoizedState !== null || (Zd = Ft())), u & 4 && dh(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (fr = (H = fr) || X, ii(r, n), fr = H) : ii(r, n), oi(n), u & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !X && (n.mode & 1) !== 0) for (Re = n, X = n.child; X !== null; ) {
            for (J = Re = X; Re !== null; ) {
              switch (K = Re, ye = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tu(4, K, K.return);
                  break;
                case 1:
                  Lo(K, K.return);
                  var be = K.stateNode;
                  if (typeof be.componentWillUnmount == "function") {
                    u = K, o = K.return;
                    try {
                      r = u, be.props = r.memoizedProps, be.state = r.memoizedState, be.componentWillUnmount();
                    } catch (ke) {
                      En(u, o, ke);
                    }
                  }
                  break;
                case 5:
                  Lo(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    hh(J);
                    continue;
                  }
              }
              ye !== null ? (ye.return = K, Re = ye) : hh(J);
            }
            X = X.sibling;
          }
          e: for (X = null, J = n; ; ) {
            if (J.tag === 5) {
              if (X === null) {
                X = J;
                try {
                  c = J.stateNode, H ? (v = c.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (_ = J.stateNode, x = J.memoizedProps.style, E = x != null && x.hasOwnProperty("display") ? x.display : null, _.style.display = it("display", E));
                } catch (ke) {
                  En(n, n.return, ke);
                }
              }
            } else if (J.tag === 6) {
              if (X === null) try {
                J.stateNode.nodeValue = H ? "" : J.memoizedProps;
              } catch (ke) {
                En(n, n.return, ke);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === n) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === n) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === n) break e;
              X === J && (X = null), J = J.return;
            }
            X === J && (X = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), oi(n), u & 4 && dh(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), oi(n);
    }
  }
  function oi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (vf(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (da(c, ""), u.flags &= -33);
            var v = zs(n);
            _i(n, v, c);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, _ = zs(n);
            Ti(n, _, E);
            break;
          default:
            throw Error(p(161));
        }
      } catch (x) {
        En(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fs(n, r, o) {
    Re = n, vh(n);
  }
  function vh(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Re !== null; ) {
      var c = Re, v = c.child;
      if (c.tag === 22 && u) {
        var E = c.memoizedState !== null || Rl;
        if (!E) {
          var _ = c.alternate, x = _ !== null && _.memoizedState !== null || fr;
          _ = Rl;
          var H = fr;
          if (Rl = E, (fr = x) && !H) for (Re = c; Re !== null; ) E = Re, x = E.child, E.tag === 22 && E.memoizedState !== null ? js(c) : x !== null ? (x.return = E, Re = x) : js(c);
          for (; v !== null; ) Re = v, vh(v), v = v.sibling;
          Re = c, Rl = _, fr = H;
        }
        Jd(n);
      } else (c.subtreeFlags & 8772) !== 0 && v !== null ? (v.return = c, Re = v) : Jd(n);
    }
  }
  function Jd(n) {
    for (; Re !== null; ) {
      var r = Re;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || df(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !fr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : na(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var v = r.updateQueue;
              v !== null && Ud(r, v, u);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Ud(r, E, o);
              }
              break;
            case 5:
              var _ = r.stateNode;
              if (o === null && r.flags & 4) {
                o = _;
                var x = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && o.focus();
                    break;
                  case "img":
                    x.src && (o.src = x.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var H = r.alternate;
                if (H !== null) {
                  var X = H.memoizedState;
                  if (X !== null) {
                    var J = X.dehydrated;
                    J !== null && La(J);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          fr || r.flags & 512 && pf(r);
        } catch (K) {
          En(r, r.return, K);
        }
      }
      if (r === n) {
        Re = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Re = o;
        break;
      }
      Re = r.return;
    }
  }
  function hh(n) {
    for (; Re !== null; ) {
      var r = Re;
      if (r === n) {
        Re = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Re = o;
        break;
      }
      Re = r.return;
    }
  }
  function js(n) {
    for (; Re !== null; ) {
      var r = Re;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              df(4, r);
            } catch (x) {
              En(r, o, x);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (x) {
                En(r, c, x);
              }
            }
            var v = r.return;
            try {
              pf(r);
            } catch (x) {
              En(r, v, x);
            }
            break;
          case 5:
            var E = r.return;
            try {
              pf(r);
            } catch (x) {
              En(r, E, x);
            }
        }
      } catch (x) {
        En(r, r.return, x);
      }
      if (r === n) {
        Re = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, Re = _;
        break;
      }
      Re = r.return;
    }
  }
  var mh = Math.ceil, hf = Pe.ReactCurrentDispatcher, Tl = Pe.ReactCurrentOwner, kr = Pe.ReactCurrentBatchConfig, mt = 0, Hn = null, bn = null, dr = 0, Ea = 0, _u = Jr(0), Yn = 0, _l = null, wl = 0, bl = 0, Hs = 0, wu = null, ia = null, Zd = 0, bu = 1 / 0, Xi = null, No = !1, Ps = null, Pa = null, mf = !1, Mo = null, Bs = 0, xu = 0, ku = null, xl = -1, Vs = 0;
  function rn() {
    return (mt & 6) !== 0 ? Ft() : xl !== -1 ? xl : xl = Ft();
  }
  function Ca(n) {
    return (n.mode & 1) === 0 ? 1 : (mt & 2) !== 0 && dr !== 0 ? dr & -dr : vl.transition !== null ? (Vs === 0 && (Vs = el()), Vs) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ts(n.type)), n);
  }
  function Ra(n, r, o, u) {
    if (50 < xu) throw xu = 0, ku = null, Error(p(185));
    vo(n, o, u), ((mt & 2) === 0 || n !== Hn) && (n === Hn && ((mt & 2) === 0 && (bl |= o), Yn === 4 && Ao(n, dr)), nr(n, u), o === 1 && mt === 0 && (r.mode & 1) === 0 && (bu = Ft() + 500, gs && Mr()));
  }
  function nr(n, r) {
    var o = n.callbackNode;
    ql(n, r);
    var u = vi(n, n === Hn ? dr : 0);
    if (u === 0) o !== null && cn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cn(o), r === 1) n.tag === 0 ? _d(qs.bind(null, n)) : Eo(qs.bind(null, n)), My(function() {
        (mt & 6) === 0 && Mr();
      }), o = null;
      else {
        switch (es(u)) {
          case 1:
            o = et;
            break;
          case 4:
            o = pi;
            break;
          case 16:
            o = Fi;
            break;
          case 536870912:
            o = ji;
            break;
          default:
            o = Fi;
        }
        o = Rh(o, yh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function yh(n, r) {
    if (xl = -1, Vs = 0, (mt & 6) !== 0) throw Error(p(327));
    var o = n.callbackNode;
    if (Du() && n.callbackNode !== o) return null;
    var u = vi(n, n === Hn ? dr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Sf(n, u);
    else {
      r = u;
      var c = mt;
      mt |= 2;
      var v = gh();
      (Hn !== n || dr !== r) && (Xi = null, bu = Ft() + 500, Dl(n, r));
      do
        try {
          Hy();
          break;
        } catch (_) {
          gf(n, _);
        }
      while (!0);
      Ld(), hf.current = v, mt = c, bn !== null ? r = 0 : (Hn = null, dr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Pi(n), c !== 0 && (u = c, r = $s(n, c))), r === 1) throw o = _l, Dl(n, 0), Ao(n, u), nr(n, Ft()), o;
      if (r === 6) Ao(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Ys(c) && (r = Sf(n, u), r === 2 && (v = Pi(n), v !== 0 && (u = v, r = $s(n, v))), r === 1)) throw o = _l, Dl(n, 0), Ao(n, u), nr(n, Ft()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Ol(n, ia, Xi);
            break;
          case 3:
            if (Ao(n, u), (u & 130023424) === u && (r = Zd + 500 - Ft(), 10 < r)) {
              if (vi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                rn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Oc(Ol.bind(null, n, ia, Xi), r);
              break;
            }
            Ol(n, ia, Xi);
            break;
          case 4:
            if (Ao(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var E = 31 - Or(u);
              v = 1 << E, E = r[E], E > c && (c = E), u &= ~v;
            }
            if (u = c, u = Ft() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * mh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Oc(Ol.bind(null, n, ia, Xi), u);
              break;
            }
            Ol(n, ia, Xi);
            break;
          case 5:
            Ol(n, ia, Xi);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return nr(n, Ft()), n.callbackNode === o ? yh.bind(null, n) : null;
  }
  function $s(n, r) {
    var o = wu;
    return n.current.memoizedState.isDehydrated && (Dl(n, r).flags |= 256), n = Sf(n, r), n !== 2 && (r = ia, ia = o, r !== null && Is(r)), n;
  }
  function Is(n) {
    ia === null ? ia = n : ia.push.apply(ia, n);
  }
  function Ys(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], v = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(v(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ao(n, r) {
    for (r &= ~Hs, r &= ~bl, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Or(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function qs(n) {
    if ((mt & 6) !== 0) throw Error(p(327));
    Du();
    var r = vi(n, 0);
    if ((r & 1) === 0) return nr(n, Ft()), null;
    var o = Sf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Pi(n);
      u !== 0 && (r = u, o = $s(n, u));
    }
    if (o === 1) throw o = _l, Dl(n, 0), Ao(n, r), nr(n, Ft()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ol(n, ia, Xi), nr(n, Ft()), null;
  }
  function yf(n, r) {
    var o = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = o, mt === 0 && (bu = Ft() + 500, gs && Mr());
    }
  }
  function kl(n) {
    Mo !== null && Mo.tag === 0 && (mt & 6) === 0 && Du();
    var r = mt;
    mt |= 1;
    var o = kr.transition, u = wt;
    try {
      if (kr.transition = null, wt = 1, n) return n();
    } finally {
      wt = u, kr.transition = o, mt = r, (mt & 6) === 0 && Mr();
    }
  }
  function ep() {
    Ea = _u.current, Xt(_u);
  }
  function Dl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Iv(o)), bn !== null) for (o = bn.return; o !== null; ) {
      var u = o;
      switch (Ac(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Si();
          break;
        case 3:
          mu(), Xt(Un), Xt(Sn), _s();
          break;
        case 5:
          jd(u);
          break;
        case 4:
          mu();
          break;
        case 13:
          Xt(hn);
          break;
        case 19:
          Xt(hn);
          break;
        case 10:
          Nd(u.type._context);
          break;
        case 22:
        case 23:
          ep();
      }
      o = o.return;
    }
    if (Hn = n, bn = n = Uo(n.current, null), dr = Ea = r, Yn = 0, _l = null, Hs = bl = wl = 0, ia = wu = null, hl !== null) {
      for (r = 0; r < hl.length; r++) if (o = hl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, v = o.pending;
        if (v !== null) {
          var E = v.next;
          v.next = c, u.next = E;
        }
        o.pending = u;
      }
      hl = null;
    }
    return n;
  }
  function gf(n, r) {
    do {
      var o = bn;
      try {
        if (Ld(), Me.current = Yt, jc) {
          for (var u = tt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          jc = !1;
        }
        if (Ct = 0, $n = Jt = tt = null, ws = !1, bs = 0, Tl.current = null, o === null || o.return === null) {
          Yn = 1, _l = r, bn = null;
          break;
        }
        e: {
          var v = n, E = o.return, _ = o, x = r;
          if (r = dr, _.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var H = x, X = _, J = X.tag;
            if ((X.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ye = Yd(E);
            if (ye !== null) {
              ye.flags &= -257, oh(ye, E, _, v, r), ye.mode & 1 && Id(v, H, r), r = ye, x = H;
              var be = r.updateQueue;
              if (be === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(x), r.updateQueue = ke;
              } else be.add(x);
              break e;
            } else {
              if ((r & 1) === 0) {
                Id(v, H, r), tp();
                break e;
              }
              x = Error(p(426));
            }
          } else if (fn && _.mode & 1) {
            var xn = Yd(E);
            if (xn !== null) {
              (xn.flags & 65536) === 0 && (xn.flags |= 256), oh(xn, E, _, v, r), Es(Oo(x, _));
              break e;
            }
          }
          v = x = Oo(x, _), Yn !== 4 && (Yn = 2), wu === null ? wu = [v] : wu.push(v), v = E;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var M = Ns(v, x, r);
                Zv(v, M);
                break e;
              case 1:
                _ = x;
                var D = v.type, z = v.stateNode;
                if ((v.flags & 128) === 0 && (typeof D.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Pa === null || !Pa.has(z)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var re = ih(v, _, r);
                  Zv(v, re);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Sh(o);
      } catch (ve) {
        r = ve, bn === o && o !== null && (bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gh() {
    var n = hf.current;
    return hf.current = Yt, n === null ? Yt : n;
  }
  function tp() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Hn === null || (wl & 268435455) === 0 && (bl & 268435455) === 0 || Ao(Hn, dr);
  }
  function Sf(n, r) {
    var o = mt;
    mt |= 2;
    var u = gh();
    (Hn !== n || dr !== r) && (Xi = null, Dl(n, r));
    do
      try {
        jy();
        break;
      } catch (c) {
        gf(n, c);
      }
    while (!0);
    if (Ld(), mt = o, hf.current = u, bn !== null) throw Error(p(261));
    return Hn = null, dr = 0, Yn;
  }
  function jy() {
    for (; bn !== null; ) np(bn);
  }
  function Hy() {
    for (; bn !== null && !Tr(); ) np(bn);
  }
  function np(n) {
    var r = ap(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? Sh(n) : bn = r, Tl.current = null;
  }
  function Sh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = Gd(o, r, Ea), o !== null) {
          bn = o;
          return;
        }
      } else {
        if (o = ch(o, r), o !== null) {
          o.flags &= 32767, bn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, bn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        bn = r;
        return;
      }
      bn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Ol(n, r, o) {
    var u = wt, c = kr.transition;
    try {
      kr.transition = null, wt = 1, Py(n, r, o, u);
    } finally {
      kr.transition = c, wt = u;
    }
    return null;
  }
  function Py(n, r, o, u) {
    do
      Du();
    while (Mo !== null);
    if ((mt & 6) !== 0) throw Error(p(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = o.lanes | o.childLanes;
    if (Ju(n, v), n === Hn && (bn = Hn = null, dr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || mf || (mf = !0, Rh(Fi, function() {
      return Du(), null;
    })), v = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || v) {
      v = kr.transition, kr.transition = null;
      var E = wt;
      wt = 1;
      var _ = mt;
      mt |= 4, Tl.current = null, Fy(n, o), ph(o, n), Uv(hs), ho = !!sl, hs = sl = null, n.current = o, Fs(o), Xa(), mt = _, wt = E, kr.transition = v;
    } else n.current = o;
    if (mf && (mf = !1, Mo = n, Bs = c), v = n.pendingLanes, v === 0 && (Pa = null), Ku(o.stateNode), nr(n, Ft()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (No) throw No = !1, n = Ps, Ps = null, n;
    return (Bs & 1) !== 0 && n.tag !== 0 && Du(), v = n.pendingLanes, (v & 1) !== 0 ? n === ku ? xu++ : (xu = 0, ku = n) : xu = 0, Mr(), null;
  }
  function Du() {
    if (Mo !== null) {
      var n = es(Bs), r = kr.transition, o = wt;
      try {
        if (kr.transition = null, wt = 16 > n ? 16 : n, Mo === null) var u = !1;
        else {
          if (n = Mo, Mo = null, Bs = 0, (mt & 6) !== 0) throw Error(p(331));
          var c = mt;
          for (mt |= 4, Re = n.current; Re !== null; ) {
            var v = Re, E = v.child;
            if ((Re.flags & 16) !== 0) {
              var _ = v.deletions;
              if (_ !== null) {
                for (var x = 0; x < _.length; x++) {
                  var H = _[x];
                  for (Re = H; Re !== null; ) {
                    var X = Re;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tu(8, X, v);
                    }
                    var J = X.child;
                    if (J !== null) J.return = X, Re = J;
                    else for (; Re !== null; ) {
                      X = Re;
                      var K = X.sibling, ye = X.return;
                      if (fh(X), X === H) {
                        Re = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = ye, Re = K;
                        break;
                      }
                      Re = ye;
                    }
                  }
                }
                var be = v.alternate;
                if (be !== null) {
                  var ke = be.child;
                  if (ke !== null) {
                    be.child = null;
                    do {
                      var xn = ke.sibling;
                      ke.sibling = null, ke = xn;
                    } while (ke !== null);
                  }
                }
                Re = v;
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && E !== null) E.return = v, Re = E;
            else e: for (; Re !== null; ) {
              if (v = Re, (v.flags & 2048) !== 0) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  Tu(9, v, v.return);
              }
              var M = v.sibling;
              if (M !== null) {
                M.return = v.return, Re = M;
                break e;
              }
              Re = v.return;
            }
          }
          var D = n.current;
          for (Re = D; Re !== null; ) {
            E = Re;
            var z = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && z !== null) z.return = E, Re = z;
            else e: for (E = D; Re !== null; ) {
              if (_ = Re, (_.flags & 2048) !== 0) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    df(9, _);
                }
              } catch (ve) {
                En(_, _.return, ve);
              }
              if (_ === E) {
                Re = null;
                break e;
              }
              var re = _.sibling;
              if (re !== null) {
                re.return = _.return, Re = re;
                break e;
              }
              Re = _.return;
            }
          }
          if (mt = c, Mr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(co, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        wt = o, kr.transition = r;
      }
    }
    return !1;
  }
  function Eh(n, r, o) {
    r = Oo(o, r), r = Ns(n, r, 1), n = bo(n, r, 1), r = rn(), n !== null && (vo(n, 1, r), nr(n, r));
  }
  function En(n, r, o) {
    if (n.tag === 3) Eh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Eh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Pa === null || !Pa.has(u))) {
          n = Oo(o, n), n = ih(r, n, 1), r = bo(r, n, 1), n = rn(), r !== null && (vo(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function rp(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = rn(), n.pingedLanes |= n.suspendedLanes & o, Hn === n && (dr & o) === o && (Yn === 4 || Yn === 3 && (dr & 130023424) === dr && 500 > Ft() - Zd ? Dl(n, 0) : Hs |= o), nr(n, r);
  }
  function Ch(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = fo, fo <<= 1, (fo & 130023424) === 0 && (fo = 4194304)));
    var o = rn();
    n = Ci(n, r), n !== null && (vo(n, r, o), nr(n, o));
  }
  function By(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Ch(n, o);
  }
  function Vy(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    u !== null && u.delete(r), Ch(n, o);
  }
  var ap;
  ap = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Un.current) tr = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return tr = !1, ff(n, r, o);
      tr = (n.flags & 131072) !== 0;
    }
    else tr = !1, fn && (r.flags & 1048576) !== 0 && qv(r, To, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ma(r, Sn.current);
        vu(r, o), c = Be(null, r, u, n, c, o);
        var v = xo();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(u) ? (v = !0, dl(r)) : v = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, wo(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, Vd(r, u, n, o), r = qd(null, r, u, !0, v, o)) : (r.tag = 0, fn && v && wd(r), wn(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Iy(u), n = na(u, n), c) {
            case 0:
              r = of(null, r, u, n, o);
              break e;
            case 1:
              r = Uy(null, r, u, n, o);
              break e;
            case 11:
              r = af(null, r, u, n, o);
              break e;
            case 14:
              r = ra(null, r, u, na(u.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), of(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), Uy(n, r, u, c, o);
      case 3:
        e: {
          if (lf(r), n === null) throw Error(p(387));
          u = r.pendingProps, v = r.memoizedState, c = v.element, Jv(n, r), zc(r, u, null, o);
          var E = r.memoizedState;
          if (u = E.element, v.isDehydrated) if (v = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
            c = Oo(Error(p(423)), r), r = Cu(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Oo(Error(p(424)), r), r = Cu(n, r, u, o, c);
            break e;
          } else for (ea = ti(r.stateNode.containerInfo.firstChild), Zr = r, fn = !0, ri = null, o = sr(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Qi(), u === c) {
              r = cr(n, r, o);
              break e;
            }
            wn(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fd(r), n === null && Dd(r), u = r.type, c = r.pendingProps, v = n !== null ? n.memoizedProps : null, E = c.children, cl(u, c) ? E = null : v !== null && cl(u, v) && (r.flags |= 32), Ms(n, r), wn(n, r, E, o), r.child;
      case 6:
        return n === null && Dd(r), null;
      case 13:
        return lh(n, r, o);
      case 4:
        return zd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = ai(r, null, u, o) : wn(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), af(n, r, u, c, o);
      case 7:
        return wn(n, r, r.pendingProps, o), r.child;
      case 8:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, v = r.memoizedProps, E = c.value, nn(ue, u._currentValue), u._currentValue = E, v !== null) if (ei(v.value, E)) {
            if (v.children === c.children && !Un.current) {
              r = cr(n, r, o);
              break e;
            }
          } else for (v = r.child, v !== null && (v.return = r); v !== null; ) {
            var _ = v.dependencies;
            if (_ !== null) {
              E = v.child;
              for (var x = _.firstContext; x !== null; ) {
                if (x.context === u) {
                  if (v.tag === 1) {
                    x = Gi(-1, o & -o), x.tag = 2;
                    var H = v.updateQueue;
                    if (H !== null) {
                      H = H.shared;
                      var X = H.pending;
                      X === null ? x.next = x : (x.next = X.next, X.next = x), H.pending = x;
                    }
                  }
                  v.lanes |= o, x = v.alternate, x !== null && (x.lanes |= o), Md(
                    v.return,
                    o,
                    r
                  ), _.lanes |= o;
                  break;
                }
                x = x.next;
              }
            } else if (v.tag === 10) E = v.type === r.type ? null : v.child;
            else if (v.tag === 18) {
              if (E = v.return, E === null) throw Error(p(341));
              E.lanes |= o, _ = E.alternate, _ !== null && (_.lanes |= o), Md(E, o, r), E = v.sibling;
            } else E = v.child;
            if (E !== null) E.return = v;
            else for (E = v; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (v = E.sibling, v !== null) {
                v.return = E.return, E = v;
                break;
              }
              E = E.return;
            }
            v = E;
          }
          wn(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, vu(r, o), c = It(c), u = u(c), r.flags |= 1, wn(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = na(u, r.pendingProps), c = na(u.type, c), ra(n, r, u, c, o);
      case 15:
        return Cl(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), ja(n, r), r.tag = 1, zn(u) ? (n = !0, dl(r)) : n = !1, vu(r, o), ah(r, u, c), Vd(r, u, c, o), qd(null, r, u, !0, n, o);
      case 19:
        return aa(n, r, o);
      case 22:
        return at(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Rh(n, r) {
    return on(n, r);
  }
  function $y(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, o, u) {
    return new $y(n, r, o, u);
  }
  function ip(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Iy(n) {
    if (typeof n == "function") return ip(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === qt) return 11;
      if (n === Ht) return 14;
    }
    return 2;
  }
  function Uo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ba(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ef(n, r, o, u, c, v) {
    var E = 2;
    if (u = n, typeof n == "function") ip(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case pt:
        return zo(o.children, c, v, r);
      case Ye:
        E = 8, c |= 8;
        break;
      case Cn:
        return n = Ba(12, o, r, c | 2), n.elementType = Cn, n.lanes = v, n;
      case St:
        return n = Ba(13, o, r, c), n.elementType = St, n.lanes = v, n;
      case He:
        return n = Ba(19, o, r, c), n.elementType = He, n.lanes = v, n;
      case ut:
        return Ou(o, c, v, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case At:
            E = 10;
            break e;
          case pn:
            E = 9;
            break e;
          case qt:
            E = 11;
            break e;
          case Ht:
            E = 14;
            break e;
          case yt:
            E = 16, u = null;
            break e;
        }
        throw Error(p(130, n == null ? n : typeof n, ""));
    }
    return r = Ba(E, o, r, c), r.elementType = n, r.type = u, r.lanes = v, r;
  }
  function zo(n, r, o, u) {
    return n = Ba(7, n, u, r), n.lanes = o, n;
  }
  function Ou(n, r, o, u) {
    return n = Ba(22, n, u, r), n.elementType = ut, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Ll(n, r, o) {
    return n = Ba(6, n, null, r), n.lanes = o, n;
  }
  function op(n, r, o) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Th(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tl(0), this.expirationTimes = tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tl(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Cf(n, r, o, u, c, v, E, _, x) {
    return n = new Th(n, r, o, _, x), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ba(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wo(v), n;
  }
  function _h(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: De, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function wh(n) {
    if (!n) return ft;
    n = n._reactInternals;
    e: {
      if (pe(n) !== n || n.tag !== 1) throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (zn(o)) return Yv(n, o, r);
    }
    return r;
  }
  function lp(n, r, o, u, c, v, E, _, x) {
    return n = Cf(o, u, !0, n, c, v, E, _, x), n.context = wh(null), o = n.current, u = rn(), c = Ca(o), v = Gi(u, c), v.callback = r ?? null, bo(o, v, c), n.current.lanes = c, vo(n, c, u), nr(n, u), n;
  }
  function Rf(n, r, o, u) {
    var c = r.current, v = rn(), E = Ca(c);
    return o = wh(o), r.context === null ? r.context = o : r.pendingContext = o, r = Gi(v, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = bo(c, r, E), n !== null && (Ra(n, c, E, v), Uc(n, c, E)), E;
  }
  function Tf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function bh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function _f(n, r) {
    bh(n, r), (n = n.alternate) && bh(n, r);
  }
  function xh() {
    return null;
  }
  var up = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Fo(n) {
    this._internalRoot = n;
  }
  wf.prototype.render = Fo.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    Rf(n, r, null, null);
  }, wf.prototype.unmount = Fo.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      kl(function() {
        Rf(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function wf(n) {
    this._internalRoot = n;
  }
  wf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = hi();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Ja.length && r !== 0 && r < Ja[o].priority; o++) ;
      Ja.splice(o, 0, n), o === 0 && Ql(n);
    }
  };
  function sp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function bf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function kh() {
  }
  function Yy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var v = u;
        u = function() {
          var H = Tf(E);
          v.call(H);
        };
      }
      var E = lp(r, u, n, 0, null, !1, !1, "", kh);
      return n._reactRootContainer = E, n[qi] = E.current, ps(n.nodeType === 8 ? n.parentNode : n), kl(), E;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var _ = u;
      u = function() {
        var H = Tf(x);
        _.call(H);
      };
    }
    var x = Cf(n, 0, !1, null, null, !1, !1, "", kh);
    return n._reactRootContainer = x, n[qi] = x.current, ps(n.nodeType === 8 ? n.parentNode : n), kl(function() {
      Rf(r, x, o, u);
    }), x;
  }
  function xf(n, r, o, u, c) {
    var v = o._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof c == "function") {
        var _ = c;
        c = function() {
          var x = Tf(E);
          _.call(x);
        };
      }
      Rf(r, E, n, c);
    } else E = Yy(o, r, n, c, u);
    return Tf(E);
  }
  Wl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Gr(r.pendingLanes);
          o !== 0 && (Zu(r, o | 1), nr(r, Ft()), (mt & 6) === 0 && (bu = Ft() + 500, Mr()));
        }
        break;
      case 13:
        kl(function() {
          var u = Ci(n, 1);
          if (u !== null) {
            var c = rn();
            Ra(u, n, 1, c);
          }
        }), _f(n, 1);
    }
  }, bt = function(n) {
    if (n.tag === 13) {
      var r = Ci(n, 134217728);
      if (r !== null) {
        var o = rn();
        Ra(r, n, 134217728, o);
      }
      _f(n, 134217728);
    }
  }, yc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), o = Ci(n, r);
      if (o !== null) {
        var u = rn();
        Ra(o, n, r, u);
      }
      _f(n, r);
    }
  }, hi = function() {
    return wt;
  }, We = function(n, r) {
    var o = wt;
    try {
      return wt = n, r();
    } finally {
      wt = o;
    }
  }, Wt = function(n, r, o) {
    switch (r) {
      case "input":
        if (Ln(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Wi(u);
              if (!c) throw Error(p(90));
              Qn(u), Ln(u, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, o);
        break;
      case "select":
        r = o.value, r != null && Vn(n, !!o.multiple, r, !1);
    }
  }, Xo = yf, Jo = kl;
  var Dh = { usingClientEntryPoint: !1, Events: [ys, Ne, Wi, Da, Ai, yf] }, Ws = { findFiberByHostInstance: fl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qy = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ot(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber) try {
      co = Qs.inject(qy), Qr = Qs;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dh, Wa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sp(r)) throw Error(p(200));
    return _h(n, r, null, o);
  }, Wa.createRoot = function(n, r) {
    if (!sp(n)) throw Error(p(299));
    var o = !1, u = "", c = up;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Cf(n, 1, !1, null, null, o, !1, u, c), n[qi] = r.current, ps(n.nodeType === 8 ? n.parentNode : n), new Fo(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = ot(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return kl(n);
  }, Wa.hydrate = function(n, r, o) {
    if (!bf(r)) throw Error(p(200));
    return xf(null, n, r, !0, o);
  }, Wa.hydrateRoot = function(n, r, o) {
    if (!sp(n)) throw Error(p(405));
    var u = o != null && o.hydratedSources || null, c = !1, v = "", E = up;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), r = lp(r, null, n, 1, o ?? null, c, !1, v, E), n[qi] = r.current, ps(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new wf(r);
  }, Wa.render = function(n, r, o) {
    if (!bf(r)) throw Error(p(200));
    return xf(null, n, r, !1, o);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!bf(n)) throw Error(p(40));
    return n._reactRootContainer ? (kl(function() {
      xf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = yf, Wa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!bf(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return xf(n, r, o, !1, u);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Qa = {}, IT;
function sD() {
  if (IT) return Qa;
  IT = 1;
  var m = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return m.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = vv(), p = n_(), S = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = !1;
    function Y(e) {
      N = e;
    }
    function ee(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("warn", e, a);
      }
    }
    function R(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("error", e, a);
      }
    }
    function ce(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Se = 0, ie = 1, Oe = 2, ne = 3, _e = 4, te = 5, Ce = 6, Ve = 7, jt = 8, Tt = 9, nt = 10, Pe = 11, Ot = 12, De = 13, pt = 14, Ye = 15, Cn = 16, At = 17, pn = 18, qt = 19, St = 21, He = 22, Ht = 23, yt = 24, ut = 25, W = !0, we = !1, fe = !1, L = !1, Q = !1, Ae = !0, qe = !0, Ge = !0, st = !0, _t = /* @__PURE__ */ new Set(), Je = {}, Et = {};
    function $t(e, t) {
      Dn(e, t), Dn(e + "Capture", t);
    }
    function Dn(e, t) {
      Je[e] && R("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Je[e] = t;
      {
        var a = e.toLowerCase();
        Et[a] = e, e === "onDoubleClick" && (Et.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        _t.add(t[i]);
    }
    var Qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function On(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Ln(e, t) {
      if (Cr(e))
        return R("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function fa(e) {
      if (Cr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return R("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function Dr(e, t) {
      if (Cr(e))
        return R("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function Vn(e) {
      if (Cr(e))
        return R("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    function Gn(e) {
      if (Cr(e))
        return R("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    var Kn = 0, Rr = 1, Ka = 2, Nn = 3, or = 4, qr = 5, Mi = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", oe = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ze = new RegExp("^[" + da + "][" + oe + "]*$"), it = {}, Ut = {};
    function ln(e) {
      return ir.call(Ut, e) ? !0 : ir.call(it, e) ? !1 : ze.test(e) ? (Ut[e] = !0, !0) : (it[e] = !0, R("Invalid attribute name: `%s`", e), !1);
    }
    function un(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sn(e, t, a, i) {
      if (a !== null && a.type === Kn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || sn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case or:
            return t === !1;
          case qr:
            return isNaN(t);
          case Mi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Wt(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Ka || t === Nn || t === or, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var zt = {}, pa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    pa.forEach(function(e) {
      zt[e] = new Wt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new Wt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Ka,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Ka,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Nn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Wt(
        e,
        or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Mi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      zt[e] = new Wt(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, Da = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      zt[t] = new Wt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      zt[t] = new Wt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      zt[t] = new Wt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ai = "xlinkHref";
    zt[Ai] = new Wt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new Wt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Xo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Jo = !1;
    function Ui(e) {
      !Jo && Xo.test(e) && (Jo = !0, R("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Zo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Ln(a, t), i.sanitizeURL && Ui("" + a);
        var s = i.attributeName, d = null;
        if (i.type === or) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Xn(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          d = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function ci(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Ln(a, t), l === "" + a ? a : l;
      }
    }
    function va(e, t, a, i) {
      var l = an(t);
      if (!un(t, l, i)) {
        if (Xn(t, a, l, i) && (a = null), i || l === null) {
          if (ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Ln(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var h = l.propertyName;
          if (a === null) {
            var y = l.type;
            e[h] = y === Nn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var C = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var O = l.type, k;
          O === Nn || O === or && a === !0 ? k = "" : (Ln(a, C), k = "" + a, l.sanitizeURL && Ui(k.toString())), T ? e.setAttributeNS(T, C, k) : e.setAttribute(C, k);
        }
      }
    }
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), b = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), vt = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Ft = "@@iterator";
    function vn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Ft];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, pi = 0, Fi, vc, ji, co, Qr, Ku, Or;
    function Xu() {
    }
    Xu.__reactDisabledLog = !0;
    function hc() {
      {
        if (pi === 0) {
          Fi = console.log, vc = console.info, ji = console.warn, co = console.error, Qr = console.group, Ku = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Xu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        pi++;
      }
    }
    function mc() {
      {
        if (pi--, pi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, e, {
              value: Fi
            }),
            info: et({}, e, {
              value: vc
            }),
            warn: et({}, e, {
              value: ji
            }),
            error: et({}, e, {
              value: co
            }),
            group: et({}, e, {
              value: Qr
            }),
            groupCollapsed: et({}, e, {
              value: Ku
            }),
            groupEnd: et({}, e, {
              value: Or
            })
          });
        }
        pi < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hi = S.ReactCurrentDispatcher, fo;
    function Gr(e, t, a) {
      {
        if (fo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            fo = i && i[1] || "";
          }
        return `
` + fo + e;
      }
    }
    var vi = !1, po;
    {
      var ql = typeof WeakMap == "function" ? WeakMap : Map;
      po = new ql();
    }
    function Pi(e, t) {
      if (!e || vi)
        return "";
      {
        var a = po.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      vi = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Hi.current, Hi.current = null, hc();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (P) {
              i = P;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            i = P;
          }
          e();
        }
      } catch (P) {
        if (P && i && typeof P.stack == "string") {
          for (var h = P.stack.split(`
`), y = i.stack.split(`
`), C = h.length - 1, T = y.length - 1; C >= 1 && T >= 0 && h[C] !== y[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (h[C] !== y[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || h[C] !== y[T]) {
                    var O = `
` + h[C].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && po.set(e, O), O;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        vi = !1, Hi.current = s, mc(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", j = k ? Gr(k) : "";
      return typeof e == "function" && po.set(e, j), j;
    }
    function el(e, t, a) {
      return Pi(e, !0);
    }
    function tl(e, t, a) {
      return Pi(e, !1);
    }
    function vo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ju(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pi(e, vo(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case se:
          return Gr("Suspense");
        case pe:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return tl(e.render);
          case ct:
            return Ju(e.type, t, a);
          case Ke: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Ju(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zu(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return Gr(e.type);
        case Cn:
          return Gr("Lazy");
        case De:
          return Gr("Suspense");
        case qt:
          return Gr("SuspenseList");
        case Se:
        case Oe:
        case Ye:
          return tl(e.type);
        case Pe:
          return tl(e.type.render);
        case ie:
          return el(e.type);
        default:
          return "";
      }
    }
    function wt(e) {
      try {
        var t = "", a = e;
        do
          t += Zu(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function es(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Wl(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Wr:
          return "Fragment";
        case ha:
          return "Portal";
        case di:
          return "Profiler";
        case fi:
          return "StrictMode";
        case se:
          return "Suspense";
        case pe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var t = e;
            return Wl(t) + ".Consumer";
          case zi:
            var a = e;
            return Wl(a._context) + ".Provider";
          case G:
            return es(e, e.render, "ForwardRef");
          case ct:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case Ke: {
            var l = e, s = l._payload, d = l._init;
            try {
              return bt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function yc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case yt:
          return "Cache";
        case Tt:
          var i = a;
          return hi(i) + ".Consumer";
        case nt:
          var l = a;
          return hi(l._context) + ".Provider";
        case pn:
          return "DehydratedFragment";
        case Pe:
          return yc(a, a.render, "ForwardRef");
        case Ve:
          return "Fragment";
        case te:
          return a;
        case _e:
          return "Portal";
        case ne:
          return "Root";
        case Ce:
          return "Text";
        case Cn:
          return bt(a);
        case jt:
          return a === fi ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case St:
          return "Scope";
        case De:
          return "Suspense";
        case qt:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ie:
        case Se:
        case At:
        case Oe:
        case pt:
        case Ye:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var nl = S.ReactDebugCurrentFrame, Jn = null, Kr = !1;
    function Lr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return We(e);
      }
      return null;
    }
    function mi() {
      return Jn === null ? "" : wt(Jn);
    }
    function gn() {
      nl.getCurrentStack = null, Jn = null, Kr = !1;
    }
    function Qt(e) {
      nl.getCurrentStack = e === null ? null : mi, Jn = e, Kr = !1;
    }
    function Ja() {
      return Jn;
    }
    function Oa(e) {
      Kr = e;
    }
    function _r(e) {
      return "" + e;
    }
    function Nr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Gn(e), e;
        default:
          return "";
      }
    }
    var ud = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ql(e, t) {
      ud[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || R("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || R("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function rl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Gl(e) {
      return e._valueTracker;
    }
    function Kl(e) {
      e._valueTracker = null;
    }
    function al(e) {
      var t = "";
      return e && (rl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function La(e) {
      var t = rl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Gn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(h) {
            Gn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            Gn(h), i = "" + h;
          },
          stopTracking: function() {
            Kl(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Na(e) {
      Gl(e) || (e._valueTracker = La(e));
    }
    function ho(e) {
      if (!e)
        return !1;
      var t = Gl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = al(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Bi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Xl = !1, mo = !1, Vi = !1, Jl = !1;
    function ts(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ma(e, t) {
      var a = e, i = t.checked, l = et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function Zl(e, t) {
      Ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !mo && (R("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), mo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Xl && (R("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Xl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Nr(t.value != null ? t.value : i),
        controlled: ts(t)
      };
    }
    function g(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = ts(t);
        !a._wrapperState.controlled && i && !Jl && (R("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Jl = !0), a._wrapperState.controlled && !i && !Vi && (R("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
      }
      g(e, t);
      var l = Nr(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = _r(l)) : a.value !== _r(l) && (a.value = _r(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Te(a, t.type, l) : t.hasOwnProperty("defaultValue") && Te(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function F(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = _r(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function B(e, t) {
      var a = e;
      w(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ln(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var h = qh(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ho(d), w(d, h);
          }
        }
      }
    }
    function Te(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Bi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var me = !1, $e = !1, lt = !1;
    function Pt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || $e || ($e = !0, R("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (lt || (lt = !0, R("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !me && (R("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), me = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", _r(Nr(t.value)));
    }
    var Kt = Array.isArray;
    function rt(e) {
      return Kt(e);
    }
    var tn;
    tn = !1;
    function Tn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var il = ["value", "defaultValue"];
    function ns(e) {
      {
        Ql("select", e);
        for (var t = 0; t < il.length; t++) {
          var a = il[t];
          if (e[a] != null) {
            var i = rt(e[a]);
            e.multiple && !i ? R("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Tn()) : !e.multiple && i && R("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Tn());
          }
        }
      }
    }
    function $i(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var y = 0; y < l.length; y++) {
          var C = d.hasOwnProperty("$" + l[y].value);
          l[y].selected !== C && (l[y].selected = C), C && i && (l[y].defaultSelected = !0);
        }
      } else {
        for (var T = _r(Nr(a)), O = null, k = 0; k < l.length; k++) {
          if (l[k].value === T) {
            l[k].selected = !0, i && (l[k].defaultSelected = !0);
            return;
          }
          O === null && !l[k].disabled && (O = l[k]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function ol(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function rs(e, t) {
      var a = e;
      ns(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tn && (R("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tn = !0);
    }
    function sd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? $i(a, !!t.multiple, i, !1) : t.defaultValue != null && $i(a, !!t.multiple, t.defaultValue, !0);
    }
    function gc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? $i(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? $i(a, !!t.multiple, t.defaultValue, !0) : $i(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function cd(e, t) {
      var a = e, i = t.value;
      i != null && $i(a, !!t.multiple, i, !1);
    }
    var hv = !1;
    function Sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function mv(e, t) {
      var a = e;
      Ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !hv && (R("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), hv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          R("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (rt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Nr(i)
      };
    }
    function yv(e, t) {
      var a = e, i = Nr(t.value), l = Nr(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = _r(l));
    }
    function gv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Cy(e, t) {
      yv(e, t);
    }
    var Za = "http://www.w3.org/1999/xhtml", Ry = "http://www.w3.org/1998/Math/MathML", fd = "http://www.w3.org/2000/svg";
    function dd(e) {
      switch (e) {
        case "svg":
          return fd;
        case "math":
          return Ry;
        default:
          return Za;
      }
    }
    function Ec(e, t) {
      return e == null || e === Za ? dd(t) : e === fd && t === "foreignObject" ? Za : e;
    }
    var Ty = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Cc, Sv = Ty(function(e, t) {
      if (e.namespaceURI === fd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ii = 3, Mn = 8, Yi = 9, as = 11, yo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, _y = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, eu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ev(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Cv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(eu).forEach(function(e) {
      Cv.forEach(function(t) {
        eu[Ev(t, e)] = eu[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(eu.hasOwnProperty(e) && eu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var Rv = /([A-Z])/g, tu = /^ms-/;
    function wy(e) {
      return e.replace(Rv, "-$1").toLowerCase().replace(tu, "-ms-");
    }
    var Tv = function() {
    };
    {
      var by = /^(?:webkit|moz|o)[A-Z]/, _v = /^-ms-/, wv = /-(.)/g, nu = /;\s*$/, yi = {}, pd = {}, is = !1, bv = !1, xv = function(e) {
        return e.replace(wv, function(t, a) {
          return a.toUpperCase();
        });
      }, vd = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, R(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xv(e.replace(_v, "ms-"))
        ));
      }, hd = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, R("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, kv = function(e, t) {
        pd.hasOwnProperty(t) && pd[t] || (pd[t] = !0, R(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(nu, "")));
      }, Dv = function(e, t) {
        is || (is = !0, R("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ov = function(e, t) {
        bv || (bv = !0, R("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Tv = function(e, t) {
        e.indexOf("-") > -1 ? vd(e) : by.test(e) ? hd(e) : nu.test(t) && kv(e, t), typeof t == "number" && (isNaN(t) ? Dv(e, t) : isFinite(t) || Ov(e, t));
      };
    }
    var xy = Tv;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : wy(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Lv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || xy(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Nv(e) {
      var t = {};
      for (var a in e)
        for (var i = _y[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ei(e, t) {
      {
        if (!t)
          return;
        var a = Nv(e), i = Nv(t), l = {};
        for (var s in a) {
          var d = a[s], h = i[s];
          if (h && d !== h) {
            var y = d + "," + h;
            if (l[y])
              continue;
            l[y] = !0, R("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dy(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var os = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Mv = et({
      menuitem: !0
    }, os), Av = "__html";
    function Tc(e, t) {
      if (t) {
        if (Mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Av in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && R("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function go(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ru = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Uv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, au = {}, iu = new RegExp("^(aria)-[" + oe + "]*$"), md = new RegExp("^(aria)[A-Z][" + oe + "]*$");
    function ls(e, t) {
      {
        if (ir.call(au, t) && au[t])
          return !0;
        if (md.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Uv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return R("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), au[t] = !0, !0;
          if (t !== i)
            return R("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), au[t] = !0, !0;
        }
        if (iu.test(t)) {
          var l = t.toLowerCase(), s = Uv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return au[t] = !0, !1;
          if (t !== s)
            return R("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), au[t] = !0, !0;
        }
      }
      return !0;
    }
    function yd(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = ls(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? R("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && R("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function zv(e, t) {
      go(e, t) || yd(e, t);
    }
    var us = !1;
    function ou(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !us && (us = !0, e === "select" && t.multiple ? R("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : R("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _c = function() {
    };
    {
      var wr = {}, ss = /^on./, Fv = /^on[^A-Z]/, jv = new RegExp("^(aria)-[" + oe + "]*$"), Hv = new RegExp("^(aria)[A-Z][" + oe + "]*$");
      _c = function(e, t, a, i) {
        if (ir.call(wr, t) && wr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return R("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(l) ? d[l] : null;
          if (h != null)
            return R("Invalid event handler property `%s`. Did you mean `%s`?", t, h), wr[t] = !0, !0;
          if (ss.test(t))
            return R("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ss.test(t))
          return Fv.test(t) && R("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (jv.test(t) || Hv.test(t))
          return !0;
        if (l === "innerhtml")
          return R("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (l === "aria")
          return R("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return R("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return R("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var y = an(t), C = y !== null && y.type === Kn;
        if (ru.hasOwnProperty(l)) {
          var T = ru[l];
          if (T !== t)
            return R("Invalid DOM property `%s`. Did you mean `%s`?", t, T), wr[t] = !0, !0;
        } else if (!C && t !== l)
          return R("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), wr[t] = !0, !0;
        return typeof a == "boolean" && sn(t, a, y, !1) ? (a ? R('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : R('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : C ? !0 : sn(t, a, y, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === Nn && (R("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var Pv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = _c(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? R("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && R("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Bv(e, t, a) {
      go(e, t) || Pv(e, t, a);
    }
    var gd = 1, gi = 2, ll = 4, Sd = gd | gi | ll, cs = null;
    function Oy(e) {
      cs !== null && R("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cs = e;
    }
    function fs() {
      cs === null && R("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cs = null;
    }
    function Ly(e) {
      return e === cs;
    }
    function wc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var bc = null, Bt = null, So = null;
    function ds(e) {
      var t = Mu(e);
      if (t) {
        if (typeof bc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = qh(a);
          bc(t.stateNode, t.type, i);
        }
      }
    }
    function ps(e) {
      bc = e;
    }
    function Ed(e) {
      Bt ? So ? So.push(e) : So = [e] : Bt = e;
    }
    function Cd() {
      return Bt !== null || So !== null;
    }
    function lu() {
      if (Bt) {
        var e = Bt, t = So;
        if (Bt = null, So = null, ds(e), t)
          for (var a = 0; a < t.length; a++)
            ds(t[a]);
      }
    }
    var vs = function(e, t) {
      return e(t);
    }, ul = function() {
    }, xc = !1;
    function Ny() {
      var e = Cd();
      e && (ul(), lu());
    }
    function Vv(e, t, a) {
      if (xc)
        return e(t, a);
      xc = !0;
      try {
        return vs(e, t, a);
      } finally {
        xc = !1, Ny();
      }
    }
    function $v(e, t, a) {
      vs = e, ul = a;
    }
    function kc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Dc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && kc(t));
        default:
          return !1;
      }
    }
    function sl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = qh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Dc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var hs = !1;
    if (Qn)
      try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
          get: function() {
            hs = !0;
          }
        }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
      } catch {
        hs = !1;
      }
    function Oc(e, t, a, i, l, s, d, h, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var Iv = Oc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Lc = document.createElement("react");
      Iv = function(t, a, i, l, s, d, h, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), O = !1, k = !0, j = window.event, P = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Lc.removeEventListener($, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          O = !0, V(), a.apply(i, de), k = !1;
        }
        var Le, kt = !1, gt = !1;
        function A(U) {
          if (Le = U.error, kt = !0, Le === null && U.colno === 0 && U.lineno === 0 && (gt = !0), U.defaultPrevented && Le != null && typeof Le == "object")
            try {
              Le._suppressLogging = !0;
            } catch {
            }
        }
        var $ = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Lc.addEventListener($, Fe, !1), T.initEvent($, !1, !1), Lc.dispatchEvent(T), P && Object.defineProperty(window, "event", P), O && k && (kt ? gt && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", A), !O)
          return V(), Oc.apply(this, arguments);
      };
    }
    var My = Iv, uu = !1, su = null, ti = !1, Nc = null, cu = {
      onError: function(e) {
        uu = !0, su = e;
      }
    };
    function Aa(e, t, a, i, l, s, d, h, y) {
      uu = !1, su = null, My.apply(cu, arguments);
    }
    function ms(e, t, a, i, l, s, d, h, y) {
      if (Aa.apply(this, arguments), uu) {
        var C = Td();
        ti || (ti = !0, Nc = C);
      }
    }
    function qi() {
      if (ti) {
        var e = Nc;
        throw ti = !1, Nc = null, e;
      }
    }
    function Rd() {
      return uu;
    }
    function Td() {
      if (uu) {
        var e = su;
        return uu = !1, su = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fu(e) {
      return e._reactInternals;
    }
    function fl(e) {
      return e._reactInternals !== void 0;
    }
    function ys(e, t) {
      e._reactInternals = t;
    }
    var Ne = (
      /*                      */
      0
    ), Wi = (
      /*                */
      1
    ), An = (
      /*                    */
      2
    ), ht = (
      /*                       */
      4
    ), Jr = (
      /*                */
      16
    ), Xt = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), ft = (
      /*                   */
      128
    ), Sn = (
      /*            */
      256
    ), Un = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), ma = (
      /*                      */
      2048
    ), zn = (
      /*                    */
      4096
    ), Si = (
      /*                   */
      8192
    ), Mc = (
      /*             */
      16384
    ), Yv = (
      /*               */
      32767
    ), dl = (
      /*                   */
      32768
    ), za = (
      /*                */
      65536
    ), ni = (
      /* */
      131072
    ), gs = (
      /*                       */
      1048576
    ), Ss = (
      /*                    */
      2097152
    ), Eo = (
      /*                 */
      4194304
    ), _d = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), Co = (
      /*              */
      33554432
    ), Ro = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ht | Ua | 0
    ), du = An | ht | Jr | Xt | Un | zn | Si, To = ht | nn | Un | Si, ur = ma | Jr, Fn = Eo | _d | Ss, pl = S.ReactCurrentOwner;
    function Ar(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (An | zn)) !== Ne && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ne ? a : null;
    }
    function Ei(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function _o(e) {
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function qv(e) {
      return Ar(e) === e;
    }
    function wd(e) {
      {
        var t = pl.current;
        if (t !== null && t.tag === ie) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || R("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = fu(e);
      return l ? Ar(l) === l : !1;
    }
    function Ac(e) {
      if (Ar(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ar(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var h = s.return;
          if (h !== null) {
            i = l = h;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return Ac(s), e;
            if (y === l)
              return Ac(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var C = !1, T = s.child; T; ) {
            if (T === i) {
              C = !0, i = s, l = d;
              break;
            }
            if (T === l) {
              C = !0, l = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = d.child; T; ) {
              if (T === i) {
                C = !0, i = d, l = s;
                break;
              }
              if (T === l) {
                C = !0, l = d, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ne)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Zr(e);
      return t !== null ? fn(t) : null;
    }
    function fn(e) {
      if (e.tag === te || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ri(e) {
      var t = Zr(e);
      return t !== null ? bd(t) : null;
    }
    function bd(e) {
      if (e.tag === te || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== _e) {
          var a = bd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var xd = p.unstable_scheduleCallback, kd = p.unstable_cancelCallback, Dd = p.unstable_shouldYield, Wv = p.unstable_requestPaint, _n = p.unstable_now, Qv = p.unstable_getCurrentPriorityLevel, Qi = p.unstable_ImmediatePriority, Es = p.unstable_UserBlockingPriority, vl = p.unstable_NormalPriority, Cs = p.unstable_LowPriority, pu = p.unstable_IdlePriority, Gv = p.unstable_yieldValue, Kv = p.unstable_setDisableYieldValue, ai = null, sr = null, ue = null, ya = !1, br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Od(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return R("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        qe && (e = et({}, e, {
          getLaneLabelMap: Ad,
          injectProfilingHooks: hl
        })), ai = t.inject(e), sr = t;
      } catch (a) {
        R("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ld(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ai, e, t);
        } catch (a) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", a));
        }
    }
    function Nd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ft) === ft;
          if (Ge) {
            var i;
            switch (t) {
              case aa:
                i = Qi;
                break;
              case ja:
                i = Es;
                break;
              case cr:
                i = vl;
                break;
              case ff:
                i = pu;
                break;
              default:
                i = vl;
                break;
            }
            sr.onCommitFiberRoot(ai, e, i, a);
          }
        } catch (l) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", l));
        }
    }
    function Md(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ai, e);
        } catch (t) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function vu(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ai, e);
        } catch (t) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof Gv == "function" && (Kv(e), Y(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ai, e);
        } catch (t) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function hl(e) {
      ue = e;
    }
    function Ad() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Pd; a++) {
          var i = nh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Xv(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function Ci() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function Fa(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function wo() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function Jv(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function Gi() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function bo(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Uc() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function Zv(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function zc() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function Ud(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function hu() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function Ri(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function Rs(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function Ts(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function ml() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function zd(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function mu() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function Fd(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function jd() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function hn() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function Fc(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Hd(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function _s(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), Ct = (
      /*                    */
      2
    ), tt = (
      /*               */
      8
    ), Jt = (
      /*              */
      16
    ), $n = Math.clz32 ? Math.clz32 : bs, jc = Math.log, ws = Math.LN2;
    function bs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (jc(t) / ws | 0) | 0;
    }
    var Pd = 31, I = (
      /*                        */
      0
    ), jn = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), xo = (
      /*    */
      2
    ), Zn = (
      /*             */
      4
    ), er = (
      /*            */
      8
    ), ta = (
      /*                     */
      16
    ), yl = (
      /*                */
      32
    ), ko = (
      /*                       */
      4194240
    ), yu = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Pc = (
      /*                        */
      256
    ), Bc = (
      /*                        */
      512
    ), Vc = (
      /*                        */
      1024
    ), $c = (
      /*                        */
      2048
    ), Ic = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), gl = (
      /*                        */
      16384
    ), qc = (
      /*                       */
      32768
    ), gu = (
      /*                       */
      65536
    ), Su = (
      /*                       */
      131072
    ), Wc = (
      /*                       */
      262144
    ), xs = (
      /*                       */
      524288
    ), Qc = (
      /*                       */
      1048576
    ), Gc = (
      /*                       */
      2097152
    ), ks = (
      /*                            */
      130023424
    ), Sl = (
      /*                             */
      4194304
    ), Ds = (
      /*                             */
      8388608
    ), Kc = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), Jc = (
      /*                             */
      67108864
    ), eh = Sl, Eu = (
      /*          */
      134217728
    ), th = (
      /*                          */
      268435455
    ), Os = (
      /*               */
      268435456
    ), Do = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function nh(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & xo)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & yl)
          return "TransitionHydration";
        if (e & ko)
          return "Transition";
        if (e & ks)
          return "Retry";
        if (e & Eu)
          return "SelectiveHydration";
        if (e & Os)
          return "IdleHydration";
        if (e & Do)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var Yt = -1, Zc = yu, ef = Sl;
    function Ls(e) {
      switch (El(e)) {
        case Be:
          return Be;
        case xo:
          return xo;
        case Zn:
          return Zn;
        case er:
          return er;
        case ta:
          return ta;
        case yl:
          return yl;
        case yu:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case gl:
        case qc:
        case gu:
        case Su:
        case Wc:
        case xs:
        case Qc:
        case Gc:
          return e & ko;
        case Sl:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
          return e & ks;
        case Eu:
          return Eu;
        case Os:
          return Os;
        case Do:
          return Do;
        case ga:
          return ga;
        default:
          return R("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function na(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, l = e.suspendedLanes, s = e.pingedLanes, d = a & th;
      if (d !== I) {
        var h = d & ~l;
        if (h !== I)
          i = Ls(h);
        else {
          var y = d & s;
          y !== I && (i = Ls(y));
        }
      } else {
        var C = a & ~l;
        C !== I ? i = Ls(C) : s !== I && (i = Ls(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === I) {
        var T = El(i), O = El(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === ta && (O & ko) !== I
        )
          return t;
      }
      (i & Zn) !== I && (i |= a & ta);
      var k = e.entangledLanes;
      if (k !== I)
        for (var j = e.entanglements, P = i & k; P > 0; ) {
          var V = wn(P), de = 1 << V;
          i |= j[V], P &= ~de;
        }
      return i;
    }
    function Bd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var l = wn(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function tf(e, t) {
      switch (e) {
        case Be:
        case xo:
        case Zn:
          return t + 250;
        case er:
        case ta:
        case yl:
        case yu:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case gl:
        case qc:
        case gu:
        case Su:
        case Wc:
        case xs:
        case Qc:
        case Gc:
          return t + 5e3;
        case Sl:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
          return Yt;
        case Eu:
        case Os:
        case Do:
        case ga:
          return Yt;
        default:
          return R("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function rh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = wn(d), y = 1 << h, C = s[h];
        C === Yt ? ((y & i) === I || (y & l) !== I) && (s[h] = tf(y, t)) : C <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function ah(e) {
      return Ls(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== I ? t : t & ga ? ga : I;
    }
    function Vd(e) {
      return (e & Be) !== I;
    }
    function Oo(e) {
      return (e & th) !== I;
    }
    function rf(e) {
      return (e & ks) === e;
    }
    function $d(e) {
      var t = Be | Zn | ta;
      return (e & t) === I;
    }
    function Ay(e) {
      return (e & ko) === e;
    }
    function Ns(e, t) {
      var a = xo | Zn | er | ta;
      return (t & a) !== I;
    }
    function ih(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Id(e) {
      return (e & ko) !== I;
    }
    function Yd() {
      var e = Zc;
      return Zc <<= 1, (Zc & ko) === I && (Zc = yu), e;
    }
    function oh() {
      var e = ef;
      return ef <<= 1, (ef & ks) === I && (ef = Sl), e;
    }
    function El(e) {
      return e & -e;
    }
    function tr(e) {
      return El(e);
    }
    function wn(e) {
      return 31 - $n(e);
    }
    function af(e) {
      return wn(e);
    }
    function ra(e, t) {
      return (e & t) !== I;
    }
    function Cl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function of(e, t) {
      return e & t;
    }
    function Uy(e) {
      return e;
    }
    function qd(e, t) {
      return e !== jn && e < t ? e : t;
    }
    function lf(e) {
      for (var t = [], a = 0; a < Pd; a++)
        t.push(e);
      return t;
    }
    function Cu(e, t, a) {
      e.pendingLanes |= t, t !== Do && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, l = af(t);
      i[l] = a;
    }
    function Wd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = wn(i), s = 1 << l;
        a[l] = Yt, i &= ~s;
      }
    }
    function uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function lh(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = wn(d), y = 1 << h;
        i[h] = I, l[h] = Yt, s[h] = Yt, d &= ~y;
      }
    }
    function As(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = wn(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function sf(e, t) {
      var a = El(t), i;
      switch (a) {
        case Zn:
          i = xo;
          break;
        case ta:
          i = er;
          break;
        case yu:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case gl:
        case qc:
        case gu:
        case Su:
        case Wc:
        case xs:
        case Qc:
        case Gc:
        case Sl:
        case Ds:
        case Kc:
        case Xc:
        case Jc:
          i = yl;
          break;
        case Do:
          i = Os;
          break;
        default:
          i = jn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jn ? jn : i;
    }
    function uh(e, t, a) {
      if (br)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = af(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function Qd(e, t) {
      if (br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = af(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function cf(e, t) {
      return null;
    }
    var aa = Be, ja = Zn, cr = ta, ff = Do, Ru = jn;
    function Sa() {
      return Ru;
    }
    function In(e) {
      Ru = e;
    }
    function sh(e, t) {
      var a = Ru;
      try {
        return Ru = e, t();
      } finally {
        Ru = a;
      }
    }
    function Us(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function Gd(e, t) {
      return e !== 0 && e < t;
    }
    function ch(e) {
      var t = El(e);
      return Gd(aa, t) ? Gd(ja, t) ? Oo(t) ? cr : ff : ja : aa;
    }
    function Rl(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function zy(e) {
      fr = e;
    }
    function Re(e) {
      fr(e);
    }
    var Lo;
    function Kd(e) {
      Lo = e;
    }
    var Xd;
    function Fy(e) {
      Xd = e;
    }
    var Tu;
    function df(e) {
      Tu = e;
    }
    var pf;
    function fh(e) {
      pf = e;
    }
    var vf = !1, zs = [], Ti = null, _i = null, mn = null, Ur = /* @__PURE__ */ new Map(), Ha = /* @__PURE__ */ new Map(), Ki = [], dh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ii(e) {
      return dh.indexOf(e) > -1;
    }
    function ph(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ti = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          mn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ha.delete(i);
          break;
        }
      }
    }
    function Fs(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ph(t, a, i, l, s);
        if (t !== null) {
          var h = Mu(t);
          h !== null && Lo(h);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return l !== null && y.indexOf(l) === -1 && y.push(l), e;
    }
    function vh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Ti = Fs(Ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return _i = Fs(_i, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var h = l;
          return mn = Fs(mn, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var y = l, C = y.pointerId;
          return Ur.set(C, Fs(Ur.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var T = l, O = T.pointerId;
          return Ha.set(O, Fs(Ha.get(O) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Jd(e) {
      var t = Xs(e.target);
      if (t !== null) {
        var a = Ar(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var l = Ei(a);
            if (l !== null) {
              e.blockedOn = l, pf(e.priority, function() {
                Xd(a);
              });
              return;
            }
          } else if (i === ne) {
            var s = a.stateNode;
            if (Rl(s)) {
              e.blockedOn = _o(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function hh(e) {
      for (var t = Tu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ki.length && Gd(t, Ki[i].priority); i++)
        ;
      Ki.splice(i, 0, a), i === 0 && Jd(a);
    }
    function js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Hs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Oy(s), l.target.dispatchEvent(s), fs();
        } else {
          var d = Mu(i);
          return d !== null && Lo(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function mh(e, t, a) {
      js(e) && a.delete(t);
    }
    function hf() {
      vf = !1, Ti !== null && js(Ti) && (Ti = null), _i !== null && js(_i) && (_i = null), mn !== null && js(mn) && (mn = null), Ur.forEach(mh), Ha.forEach(mh);
    }
    function Tl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, hf)));
    }
    function kr(e) {
      if (zs.length > 0) {
        Tl(zs[0], e);
        for (var t = 1; t < zs.length; t++) {
          var a = zs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ti !== null && Tl(Ti, e), _i !== null && Tl(_i, e), mn !== null && Tl(mn, e);
      var i = function(h) {
        return Tl(h, e);
      };
      Ur.forEach(i), Ha.forEach(i);
      for (var l = 0; l < Ki.length; l++) {
        var s = Ki[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ki.length > 0; ) {
        var d = Ki[0];
        if (d.blockedOn !== null)
          break;
        Jd(d), d.blockedOn === null && Ki.shift();
      }
    }
    var mt = S.ReactCurrentBatchConfig, Hn = !0;
    function bn(e) {
      Hn = !!e;
    }
    function dr() {
      return Hn;
    }
    function Ea(e, t, a) {
      var i = wu(t), l;
      switch (i) {
        case aa:
          l = _u;
          break;
        case ja:
          l = Yn;
          break;
        case cr:
        default:
          l = _l;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function _u(e, t, a, i) {
      var l = Sa(), s = mt.transition;
      mt.transition = null;
      try {
        In(aa), _l(e, t, a, i);
      } finally {
        In(l), mt.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var l = Sa(), s = mt.transition;
      mt.transition = null;
      try {
        In(ja), _l(e, t, a, i);
      } finally {
        In(l), mt.transition = s;
      }
    }
    function _l(e, t, a, i) {
      Hn && wl(e, t, a, i);
    }
    function wl(e, t, a, i) {
      var l = Hs(e, t, a, i);
      if (l === null) {
        eg(e, t, i, bl, a), oi(e, i);
        return;
      }
      if (vh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (oi(e, i), t & ll && ii(e)) {
        for (; l !== null; ) {
          var s = Mu(l);
          s !== null && Re(s);
          var d = Hs(e, t, a, i);
          if (d === null && eg(e, t, i, bl, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      eg(e, t, i, null, a);
    }
    var bl = null;
    function Hs(e, t, a, i) {
      bl = null;
      var l = wc(i), s = Xs(l);
      if (s !== null) {
        var d = Ar(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === De) {
            var y = Ei(d);
            if (y !== null)
              return y;
            s = null;
          } else if (h === ne) {
            var C = d.stateNode;
            if (Rl(C))
              return _o(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return bl = s, null;
    }
    function wu(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return aa;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ja;
        case "message": {
          var t = Qv();
          switch (t) {
            case Qi:
              return aa;
            case Es:
              return ja;
            case vl:
            case Cs:
              return cr;
            case pu:
              return ff;
            default:
              return cr;
          }
        }
        default:
          return cr;
      }
    }
    function ia(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Zd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function bu(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Xi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var No = null, Ps = null, Pa = null;
    function mf(e) {
      return No = e, Ps = xu(), !0;
    }
    function Mo() {
      No = null, Ps = null, Pa = null;
    }
    function Bs() {
      if (Pa)
        return Pa;
      var e, t = Ps, a = t.length, i, l = xu(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Pa = l.slice(e, h), Pa;
    }
    function xu() {
      return "value" in No ? No.value : No.textContent;
    }
    function ku(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xl() {
      return !0;
    }
    function Vs() {
      return !1;
    }
    function rn(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = xl : this.isDefaultPrevented = Vs, this.isPropagationStopped = Vs, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xl
      }), t;
    }
    var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ra = rn(Ca), nr = et({}, Ca, {
      view: 0,
      detail: 0
    }), yh = rn(nr), $s, Is, Ys;
    function Ao(e) {
      e !== Ys && (Ys && e.type === "mousemove" ? ($s = e.screenX - Ys.screenX, Is = e.screenY - Ys.screenY) : ($s = 0, Is = 0), Ys = e);
    }
    var qs = et({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ao(e), $s);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Is;
      }
    }), yf = rn(qs), kl = et({}, qs, {
      dataTransfer: 0
    }), ep = rn(kl), Dl = et({}, nr, {
      relatedTarget: 0
    }), gf = rn(Dl), gh = et({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), tp = rn(gh), Sf = et({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), jy = rn(Sf), Hy = et({}, Ca, {
      data: 0
    }), np = rn(Hy), Sh = np, Ol = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Py = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Du(e) {
      if (e.key) {
        var t = Ol[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ku(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Py[e.keyCode] || "Unidentified" : "";
    }
    var Eh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function En(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Eh[e];
      return i ? !!a[i] : !1;
    }
    function rp(e) {
      return En;
    }
    var Ch = et({}, nr, {
      key: Du,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ku(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ku(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), By = rn(Ch), Vy = et({}, qs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ap = rn(Vy), Rh = et({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rp
    }), $y = rn(Rh), Ba = et({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ip = rn(Ba), Iy = et({}, qs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Uo = rn(Iy), Ef = [9, 13, 27, 32], zo = 229, Ou = Qn && "CompositionEvent" in window, Ll = null;
    Qn && "documentMode" in document && (Ll = document.documentMode);
    var op = Qn && "TextEvent" in window && !Ll, Th = Qn && (!Ou || Ll && Ll > 8 && Ll <= 11), Cf = 32, _h = String.fromCharCode(Cf);
    function wh() {
      $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $t("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var lp = !1;
    function Rf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Tf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function bh(e, t) {
      return e === "keydown" && t.keyCode === zo;
    }
    function _f(e, t) {
      switch (e) {
        case "keyup":
          return Ef.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== zo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function up(e) {
      return e.locale === "ko";
    }
    var Fo = !1;
    function wf(e, t, a, i, l) {
      var s, d;
      if (Ou ? s = Tf(t) : Fo ? _f(t, i) && (s = "onCompositionEnd") : bh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Th && !up(i) && (!Fo && s === "onCompositionStart" ? Fo = mf(l) : s === "onCompositionEnd" && Fo && (d = Bs()));
      var h = Mh(a, s);
      if (h.length > 0) {
        var y = new np(s, t, null, i, l);
        if (e.push({
          event: y,
          listeners: h
        }), d)
          y.data = d;
        else {
          var C = xh(i);
          C !== null && (y.data = C);
        }
      }
    }
    function sp(e, t) {
      switch (e) {
        case "compositionend":
          return xh(t);
        case "keypress":
          var a = t.which;
          return a !== Cf ? null : (lp = !0, _h);
        case "textInput":
          var i = t.data;
          return i === _h && lp ? null : i;
        default:
          return null;
      }
    }
    function bf(e, t) {
      if (Fo) {
        if (e === "compositionend" || !Ou && _f(e, t)) {
          var a = Bs();
          return Mo(), Fo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Rf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Th && !up(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kh(e, t, a, i, l) {
      var s;
      if (op ? s = sp(t, i) : s = bf(t, i), !s)
        return null;
      var d = Mh(a, "onBeforeInput");
      if (d.length > 0) {
        var h = new Sh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function Yy(e, t, a, i, l, s, d) {
      wf(e, t, a, i, l), kh(e, t, a, i, l);
    }
    var xf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Dh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ws(e) {
      if (!Qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function qy() {
      $t("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Qs(e, t, a, i) {
      Ed(i);
      var l = Mh(t, "onChange");
      if (l.length > 0) {
        var s = new Ra("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var n = null, r = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      Qs(t, r, e, wc(e)), Vv(c, t);
    }
    function c(e) {
      v0(e, 0);
    }
    function v(e) {
      var t = Mf(e);
      if (ho(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    Qn && (_ = Ws("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", X);
    }
    function H() {
      n && (n.detachEvent("onpropertychange", X), n = null, r = null);
    }
    function X(e) {
      e.propertyName === "value" && v(r) && u(e);
    }
    function J(e, t, a) {
      e === "focusin" ? (H(), x(t, a)) : e === "focusout" && H();
    }
    function K(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return v(r);
    }
    function ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function be(e, t) {
      if (e === "click")
        return v(t);
    }
    function ke(e, t) {
      if (e === "input" || e === "change")
        return v(t);
    }
    function xn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Te(e, "number", e.value);
    }
    function M(e, t, a, i, l, s, d) {
      var h = a ? Mf(a) : window, y, C;
      if (o(h) ? y = E : Dh(h) ? _ ? y = ke : (y = K, C = J) : ye(h) && (y = be), y) {
        var T = y(t, a);
        if (T) {
          Qs(e, T, i, l);
          return;
        }
      }
      C && C(t, h, a), t === "focusout" && xn(h);
    }
    function D() {
      Dn("onMouseEnter", ["mouseout", "mouseover"]), Dn("onMouseLeave", ["mouseout", "mouseover"]), Dn("onPointerEnter", ["pointerout", "pointerover"]), Dn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function z(e, t, a, i, l, s, d) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !Ly(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Xs(C) || Tp(C)))
          return;
      }
      if (!(!y && !h)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var O = l.ownerDocument;
          O ? T = O.defaultView || O.parentWindow : T = window;
        }
        var k, j;
        if (y) {
          var P = i.relatedTarget || i.toElement;
          if (k = a, j = P ? Xs(P) : null, j !== null) {
            var V = Ar(j);
            (j !== V || j.tag !== te && j.tag !== Ce) && (j = null);
          }
        } else
          k = null, j = a;
        if (k !== j) {
          var de = yf, Fe = "onMouseLeave", Le = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = ap, Fe = "onPointerLeave", Le = "onPointerEnter", kt = "pointer");
          var gt = k == null ? T : Mf(k), A = j == null ? T : Mf(j), $ = new de(Fe, kt + "leave", k, i, l);
          $.target = gt, $.relatedTarget = A;
          var U = null, Z = Xs(l);
          if (Z === a) {
            var Ee = new de(Le, kt + "enter", j, i, l);
            Ee.target = A, Ee.relatedTarget = gt, U = Ee;
          }
          U_(e, $, U, k, j);
        }
      }
    }
    function re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : re;
    function Ue(e, t) {
      if (ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!ir.call(t, s) || !ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Qe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qn(e, t) {
      for (var a = je(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ii) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = je(Qe(a));
      }
    }
    function Lt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, h = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return jo(e, l, s, d, h);
    }
    function jo(e, t, a, i, l) {
      var s = 0, d = -1, h = -1, y = 0, C = 0, T = e, O = null;
      e: for (; ; ) {
        for (var k = null; T === t && (a === 0 || T.nodeType === Ii) && (d = s + a), T === i && (l === 0 || T.nodeType === Ii) && (h = s + l), T.nodeType === Ii && (s += T.nodeValue.length), (k = T.firstChild) !== null; )
          O = T, T = k;
        for (; ; ) {
          if (T === e)
            break e;
          if (O === t && ++y === a && (d = s), O === i && ++C === l && (h = s), (k = T.nextSibling) !== null)
            break;
          T = O, O = T.parentNode;
        }
        T = k;
      }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function Wy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > h) {
          var y = h;
          h = d, d = y;
        }
        var C = qn(e, d), T = qn(e, h);
        if (C && T) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var O = a.createRange();
          O.setStart(C.node, C.offset), l.removeAllRanges(), d > h ? (l.addRange(O), l.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), l.addRange(O));
        }
      }
    }
    function n0(e) {
      return e && e.nodeType === Ii;
    }
    function r0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : n0(e) ? !1 : n0(t) ? r0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function y_(e) {
      return e && e.ownerDocument && r0(e.ownerDocument.documentElement, e);
    }
    function g_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function a0() {
      for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
        if (g_(t))
          e = t.contentWindow;
        else
          return t;
        t = Bi(e.document);
      }
      return t;
    }
    function Qy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function S_() {
      var e = a0();
      return {
        focusedElem: e,
        selectionRange: Qy(e) ? C_(e) : null
      };
    }
    function E_(e) {
      var t = a0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && y_(a)) {
        i !== null && Qy(a) && R_(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var h = l[d];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function C_(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Lt(e), t || {
        start: 0,
        end: 0
      };
    }
    function R_(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Wy(e, t);
    }
    var T_ = Qn && "documentMode" in document && document.documentMode <= 11;
    function __() {
      $t("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, Gy = null, cp = null, Ky = !1;
    function w_(e) {
      if ("selectionStart" in e && Qy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function b_(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function i0(e, t, a) {
      var i = b_(a);
      if (!(Ky || kf == null || kf !== Bi(i))) {
        var l = w_(kf);
        if (!cp || !Ue(cp, l)) {
          cp = l;
          var s = Mh(Gy, "onSelect");
          if (s.length > 0) {
            var d = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = kf;
          }
        }
      }
    }
    function x_(e, t, a, i, l, s, d) {
      var h = a ? Mf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Dh(h) || h.contentEditable === "true") && (kf = h, Gy = a, cp = null);
          break;
        case "focusout":
          kf = null, Gy = null, cp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ky = !1, i0(e, i, l);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (T_)
            break;
        // falls through
        case "keydown":
        case "keyup":
          i0(e, i, l);
      }
    }
    function Oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = {
      animationend: Oh("Animation", "AnimationEnd"),
      animationiteration: Oh("Animation", "AnimationIteration"),
      animationstart: Oh("Animation", "AnimationStart"),
      transitionend: Oh("Transition", "TransitionEnd")
    }, Xy = {}, o0 = {};
    Qn && (o0 = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Lh(e) {
      if (Xy[e])
        return Xy[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in o0)
          return Xy[e] = t[a];
      return e;
    }
    var l0 = Lh("animationend"), u0 = Lh("animationiteration"), s0 = Lh("animationstart"), c0 = Lh("transitionend"), f0 = /* @__PURE__ */ new Map(), d0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Lu(e, t) {
      f0.set(e, t), $t(t, [e]);
    }
    function k_() {
      for (var e = 0; e < d0.length; e++) {
        var t = d0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Lu(a, "on" + i);
      }
      Lu(l0, "onAnimationEnd"), Lu(u0, "onAnimationIteration"), Lu(s0, "onAnimationStart"), Lu("dblclick", "onDoubleClick"), Lu("focusin", "onFocus"), Lu("focusout", "onBlur"), Lu(c0, "onTransitionEnd");
    }
    function D_(e, t, a, i, l, s, d) {
      var h = f0.get(t);
      if (h !== void 0) {
        var y = Ra, C = t;
        switch (t) {
          case "keypress":
            if (ku(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            y = By;
            break;
          case "focusin":
            C = "focus", y = gf;
            break;
          case "focusout":
            C = "blur", y = gf;
            break;
          case "beforeblur":
          case "afterblur":
            y = gf;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = $y;
            break;
          case l0:
          case u0:
          case s0:
            y = tp;
            break;
          case c0:
            y = ip;
            break;
          case "scroll":
            y = yh;
            break;
          case "wheel":
            y = Uo;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = jy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ap;
            break;
        }
        var T = (s & ll) !== 0;
        {
          var O = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = M_(a, h, i.type, T, O);
          if (k.length > 0) {
            var j = new y(h, C, null, i, l);
            e.push({
              event: j,
              listeners: k
            });
          }
        }
      }
    }
    k_(), D(), qy(), __(), wh();
    function O_(e, t, a, i, l, s, d) {
      D_(e, t, a, i, l, s);
      var h = (s & Sd) === 0;
      h && (z(e, t, a, i, l), M(e, t, a, i, l), x_(e, t, a, i, l), Yy(e, t, a, i, l));
    }
    var fp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(fp));
    function p0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ms(i, t, void 0, e), e.currentTarget = null;
    }
    function L_(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, h = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          p0(e, y, h), i = d;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], O = T.instance, k = T.currentTarget, j = T.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          p0(e, j, k), i = O;
        }
    }
    function v0(e, t) {
      for (var a = (t & ll) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        L_(s, d, a);
      }
      qi();
    }
    function N_(e, t, a, i, l) {
      var s = wc(a), d = [];
      O_(d, e, i, a, s, t), v0(d, t);
    }
    function yn(e, t) {
      Jy.has(e) || R('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ub(t), l = z_(e);
      i.has(l) || (h0(t, e, gi, a), i.add(l));
    }
    function Zy(e, t, a) {
      Jy.has(e) && !t && R('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ll), h0(a, e, i, t);
    }
    var Nh = "_reactListening" + Math.random().toString(36).slice(2);
    function dp(e) {
      if (!e[Nh]) {
        e[Nh] = !0, _t.forEach(function(a) {
          a !== "selectionchange" && (Jy.has(a) || Zy(a, !1, e), Zy(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Nh] || (t[Nh] = !0, Zy("selectionchange", !1, t)));
      }
    }
    function h0(e, t, a, i, l) {
      var s = Ea(e, t, a), d = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? bu(e, t, s, d) : Zd(e, t, s) : d !== void 0 ? Xi(e, t, s, d) : ia(e, t, s);
    }
    function m0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function eg(e, t, a, i, l) {
      var s = i;
      if ((t & gd) === 0 && (t & gi) === 0) {
        var d = l;
        if (i !== null) {
          var h = i;
          e: for (; ; ) {
            if (h === null)
              return;
            var y = h.tag;
            if (y === ne || y === _e) {
              var C = h.stateNode.containerInfo;
              if (m0(C, d))
                break;
              if (y === _e)
                for (var T = h.return; T !== null; ) {
                  var O = T.tag;
                  if (O === ne || O === _e) {
                    var k = T.stateNode.containerInfo;
                    if (m0(k, d))
                      return;
                  }
                  T = T.return;
                }
              for (; C !== null; ) {
                var j = Xs(C);
                if (j === null)
                  return;
                var P = j.tag;
                if (P === te || P === Ce) {
                  h = s = j;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            h = h.return;
          }
        }
      }
      Vv(function() {
        return N_(e, t, a, s);
      });
    }
    function pp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function M_(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, h = i ? d : t, y = [], C = e, T = null; C !== null; ) {
        var O = C, k = O.stateNode, j = O.tag;
        if (j === te && k !== null && (T = k, h !== null)) {
          var P = sl(C, h);
          P != null && y.push(pp(C, P, T));
        }
        if (l)
          break;
        C = C.return;
      }
      return y;
    }
    function Mh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, h = s.tag;
        if (h === te && d !== null) {
          var y = d, C = sl(l, a);
          C != null && i.unshift(pp(l, C, y));
          var T = sl(l, t);
          T != null && i.push(pp(l, T, y));
        }
        l = l.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function A_(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Of(s))
        l++;
      for (var d = 0, h = i; h; h = Of(h))
        d++;
      for (; l - d > 0; )
        a = Of(a), l--;
      for (; d - l > 0; )
        i = Of(i), d--;
      for (var y = l; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function y0(e, t, a, i, l) {
      for (var s = t._reactName, d = [], h = a; h !== null && h !== i; ) {
        var y = h, C = y.alternate, T = y.stateNode, O = y.tag;
        if (C !== null && C === i)
          break;
        if (O === te && T !== null) {
          var k = T;
          if (l) {
            var j = sl(h, s);
            j != null && d.unshift(pp(h, j, k));
          } else if (!l) {
            var P = sl(h, s);
            P != null && d.push(pp(h, P, k));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function U_(e, t, a, i, l) {
      var s = i && l ? A_(i, l) : null;
      i !== null && y0(e, t, i, s, !1), l !== null && a !== null && y0(e, a, l, s, !0);
    }
    function z_(e, t) {
      return e + "__bubble";
    }
    var Va = !1, vp = "dangerouslySetInnerHTML", Ah = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", g0 = "autoFocus", Gs = "children", Ks = "style", Uh = "__html", tg, zh, hp, S0, Fh, E0, C0;
    tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, zh = function(e, t) {
      zv(e, t), ou(e, t), Bv(e, t, {
        registrationNameDependencies: Je,
        possibleRegistrationNames: Et
      });
    }, E0 = Qn && !document.documentMode, hp = function(e, t, a) {
      if (!Va) {
        var i = jh(a), l = jh(t);
        l !== i && (Va = !0, R("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, S0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), R("Extra attributes from the server: %s", t);
      }
    }, Fh = function(e, t) {
      t === !1 ? R("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : R("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, C0 = function(e, t) {
      var a = e.namespaceURI === Za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var F_ = /\r\n?/g, j_ = /\u0000|\uFFFD/g;
    function jh(e) {
      Vn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(F_, `
`).replace(j_, "");
    }
    function Hh(e, t, a, i) {
      var l = jh(t), s = jh(e);
      if (s !== l && (i && (Va || (Va = !0, R('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && W))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function R0(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function H_() {
    }
    function Ph(e) {
      e.onclick = H_;
    }
    function P_(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Ks)
            d && Object.freeze(d), Lv(t, d);
          else if (s === vp) {
            var h = d ? d[Uh] : void 0;
            h != null && Sv(t, h);
          } else if (s === Gs)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && yo(t, d);
            } else typeof d == "number" && yo(t, "" + d);
          else s === Ah || s === Nu || s === g0 || (Je.hasOwnProperty(s) ? d != null && (typeof d != "function" && Fh(s, d), s === "onScroll" && yn("scroll", t)) : d != null && va(t, s, d, l));
        }
    }
    function B_(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === Ks ? Lv(e, d) : s === vp ? Sv(e, d) : s === Gs ? yo(e, d) : va(e, s, d, i);
      }
    }
    function V_(e, t, a, i) {
      var l, s = R0(a), d, h = i;
      if (h === Za && (h = dd(e)), h === Za) {
        if (l = go(e, t), !l && e !== e.toLowerCase() && R("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          d = y.removeChild(C);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var T = d;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === Za && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !ir.call(tg, e) && (tg[e] = !0, R("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function $_(e, t) {
      return R0(t).createTextNode(e);
    }
    function I_(e, t, a, i) {
      var l = go(t, a);
      zh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < fp.length; d++)
            yn(fp[d], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          Zl(e, a), s = Ma(e, a), yn("invalid", e);
          break;
        case "option":
          Pt(e, a), s = a;
          break;
        case "select":
          rs(e, a), s = ol(e, a), yn("invalid", e);
          break;
        case "textarea":
          mv(e, a), s = Sc(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Tc(t, s), P_(t, e, i, s, l), t) {
        case "input":
          Na(e), F(e, a, !1);
          break;
        case "textarea":
          Na(e), gv(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          sd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ph(e);
          break;
      }
    }
    function Y_(e, t, a, i, l) {
      zh(t, i);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = Ma(e, a), h = Ma(e, i), s = [];
          break;
        case "select":
          d = ol(e, a), h = ol(e, i), s = [];
          break;
        case "textarea":
          d = Sc(e, a), h = Sc(e, i), s = [];
          break;
        default:
          d = a, h = i, typeof d.onClick != "function" && typeof h.onClick == "function" && Ph(e);
          break;
      }
      Tc(t, h);
      var y, C, T = null;
      for (y in d)
        if (!(h.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === Ks) {
            var O = d[y];
            for (C in O)
              O.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else y === vp || y === Gs || y === Ah || y === Nu || y === g0 || (Je.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var k = h[y], j = d != null ? d[y] : void 0;
        if (!(!h.hasOwnProperty(y) || k === j || k == null && j == null))
          if (y === Ks)
            if (k && Object.freeze(k), j) {
              for (C in j)
                j.hasOwnProperty(C) && (!k || !k.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in k)
                k.hasOwnProperty(C) && j[C] !== k[C] && (T || (T = {}), T[C] = k[C]);
            } else
              T || (s || (s = []), s.push(y, T)), T = k;
          else if (y === vp) {
            var P = k ? k[Uh] : void 0, V = j ? j[Uh] : void 0;
            P != null && V !== P && (s = s || []).push(y, P);
          } else y === Gs ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(y, "" + k) : y === Ah || y === Nu || (Je.hasOwnProperty(y) ? (k != null && (typeof k != "function" && Fh(y, k), y === "onScroll" && yn("scroll", e)), !s && j !== k && (s = [])) : (s = s || []).push(y, k));
      }
      return T && (ei(T, h[Ks]), (s = s || []).push(Ks, T)), s;
    }
    function q_(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && g(e, l);
      var s = go(a, i), d = go(a, l);
      switch (B_(e, t, s, d), a) {
        case "input":
          w(e, l);
          break;
        case "textarea":
          yv(e, l);
          break;
        case "select":
          gc(e, l);
          break;
      }
    }
    function W_(e) {
      {
        var t = e.toLowerCase();
        return ru.hasOwnProperty(t) && ru[t] || null;
      }
    }
    function Q_(e, t, a, i, l, s, d) {
      var h, y;
      switch (h = go(t, a), zh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < fp.length; C++)
            yn(fp[C], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          Zl(e, a), yn("invalid", e);
          break;
        case "option":
          Pt(e, a);
          break;
        case "select":
          rs(e, a), yn("invalid", e);
          break;
        case "textarea":
          mv(e, a), yn("invalid", e);
          break;
      }
      Tc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, O = 0; O < T.length; O++) {
          var k = T[O].name.toLowerCase();
          switch (k) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[O].name);
          }
        }
      }
      var j = null;
      for (var P in a)
        if (a.hasOwnProperty(P)) {
          var V = a[P];
          if (P === Gs)
            typeof V == "string" ? e.textContent !== V && (a[Nu] !== !0 && Hh(e.textContent, V, s, d), j = [Gs, V]) : typeof V == "number" && e.textContent !== "" + V && (a[Nu] !== !0 && Hh(e.textContent, V, s, d), j = [Gs, "" + V]);
          else if (Je.hasOwnProperty(P))
            V != null && (typeof V != "function" && Fh(P, V), P === "onScroll" && yn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var de = void 0, Fe = an(P);
            if (a[Nu] !== !0) {
              if (!(P === Ah || P === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              P === "value" || P === "checked" || P === "selected")) {
                if (P === vp) {
                  var Le = e.innerHTML, kt = V ? V[Uh] : void 0;
                  if (kt != null) {
                    var gt = C0(e, kt);
                    gt !== Le && hp(P, Le, gt);
                  }
                } else if (P === Ks) {
                  if (y.delete(P), E0) {
                    var A = ky(V);
                    de = e.getAttribute("style"), A !== de && hp(P, de, A);
                  }
                } else if (h)
                  y.delete(P.toLowerCase()), de = ci(e, P, V), V !== de && hp(P, de, V);
                else if (!un(P, Fe, h) && !Xn(P, V, Fe, h)) {
                  var $ = !1;
                  if (Fe !== null)
                    y.delete(Fe.attributeName), de = Zo(e, P, V, Fe);
                  else {
                    var U = i;
                    if (U === Za && (U = dd(t)), U === Za)
                      y.delete(P.toLowerCase());
                    else {
                      var Z = W_(P);
                      Z !== null && Z !== P && ($ = !0, y.delete(Z)), y.delete(P);
                    }
                    de = ci(e, P, V);
                  }
                  var Ee = Q;
                  !Ee && V !== de && !$ && hp(P, de, V);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Nu] !== !0 && S0(y), t) {
        case "input":
          Na(e), F(e, a, !0);
          break;
        case "textarea":
          Na(e), gv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ph(e);
          break;
      }
      return j;
    }
    function G_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ng(e, t) {
      {
        if (Va)
          return;
        Va = !0, R("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rg(e, t) {
      {
        if (Va)
          return;
        Va = !0, R('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ag(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, R("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, R('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function K_(e, t, a) {
      switch (t) {
        case "input":
          B(e, a);
          return;
        case "textarea":
          Cy(e, a);
          return;
        case "select":
          cd(e, a);
          return;
      }
    }
    var mp = function() {
    }, yp = function() {
    };
    {
      var X_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], T0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], J_ = T0.concat(["button"]), Z_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], _0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      yp = function(e, t) {
        var a = et({}, e || _0), i = {
          tag: t
        };
        return T0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), J_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), X_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ew = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Z_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, tw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, w0 = {};
      mp = function(e, t, a) {
        a = a || _0;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && R("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ew(e, l) ? null : i, d = s ? null : tw(e, a), h = s || d;
        if (h) {
          var y = h.tag, C = !!s + "|" + e + "|" + y;
          if (!w0[C]) {
            w0[C] = !0;
            var T = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var k = "";
              y === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), R("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, O, k);
            } else
              R("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Bh = "suppressHydrationWarning", Vh = "$", $h = "/$", gp = "$?", Sp = "$!", nw = "style", og = null, lg = null;
    function rw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case as: {
          t = i === Yi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Ec(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Ec(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = yp(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function aw(e, t, a) {
      {
        var i = e, l = Ec(i.namespace, t), s = yp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function AO(e) {
      return e;
    }
    function iw(e) {
      og = dr(), lg = S_();
      var t = null;
      return bn(!1), t;
    }
    function ow(e) {
      E_(lg), bn(og), og = null, lg = null;
    }
    function lw(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (mp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = yp(d.ancestorInfo, e);
          mp(null, h, y);
        }
        s = d.namespace;
      }
      var C = V_(e, t, a, s);
      return Rp(l, C), hg(C, t), C;
    }
    function uw(e, t) {
      e.appendChild(t);
    }
    function sw(e, t, a, i, l) {
      switch (I_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function cw(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = yp(d.ancestorInfo, t);
          mp(null, h, y);
        }
      }
      return Y_(e, t, a, i);
    }
    function ug(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fw(e, t, a, i) {
      {
        var l = a;
        mp(null, e, l.ancestorInfo);
      }
      var s = $_(e, t);
      return Rp(i, s), s;
    }
    function dw() {
      var e = window.event;
      return e === void 0 ? cr : wu(e.type);
    }
    var sg = typeof setTimeout == "function" ? setTimeout : void 0, pw = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = -1, b0 = typeof Promise == "function" ? Promise : void 0, vw = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(e) {
      return b0.resolve(null).then(e).catch(hw);
    } : sg;
    function hw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function yw(e, t, a, i, l, s) {
      q_(e, t, a, i, l), hg(e, l);
    }
    function x0(e) {
      yo(e, "");
    }
    function gw(e, t, a) {
      e.nodeValue = a;
    }
    function Sw(e, t) {
      e.appendChild(t);
    }
    function Ew(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ph(a);
    }
    function Cw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Rw(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Tw(e, t) {
      e.removeChild(t);
    }
    function _w(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Mn) {
          var s = l.data;
          if (s === $h)
            if (i === 0) {
              e.removeChild(l), kr(t);
              return;
            } else
              i--;
          else (s === Vh || s === gp || s === Sp) && i++;
        }
        a = l;
      } while (a);
      kr(t);
    }
    function ww(e, t) {
      e.nodeType === Mn ? fg(e.parentNode, t) : e.nodeType === Xr && fg(e, t), kr(e);
    }
    function bw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xw(e) {
      e.nodeValue = "";
    }
    function kw(e, t) {
      e = e;
      var a = t[nw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function Dw(e, t) {
      e.nodeValue = t;
    }
    function Ow(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Lw(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nw(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function Mw(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function k0(e) {
      return e.data === gp;
    }
    function dg(e) {
      return e.data === Sp;
    }
    function Aw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function Uw(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Vh || a === Sp || a === gp)
            break;
          if (a === $h)
            return null;
        }
      }
      return e;
    }
    function Ep(e) {
      return Ih(e.nextSibling);
    }
    function zw(e) {
      return Ih(e.firstChild);
    }
    function Fw(e) {
      return Ih(e.firstChild);
    }
    function jw(e) {
      return Ih(e.nextSibling);
    }
    function Hw(e, t, a, i, l, s, d) {
      Rp(s, e), hg(e, a);
      var h;
      {
        var y = l;
        h = y.namespace;
      }
      var C = (s.mode & dt) !== Me;
      return Q_(e, t, a, h, i, C, d);
    }
    function Pw(e, t, a, i) {
      return Rp(a, e), a.mode & dt, G_(e, t);
    }
    function Bw(e, t) {
      Rp(t, e);
    }
    function Vw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === $h) {
            if (a === 0)
              return Ep(t);
            a--;
          } else (i === Vh || i === Sp || i === gp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function D0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Vh || i === Sp || i === gp) {
            if (a === 0)
              return t;
            a--;
          } else i === $h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $w(e) {
      kr(e);
    }
    function Iw(e) {
      kr(e);
    }
    function Yw(e) {
      return e !== "head" && e !== "body";
    }
    function qw(e, t, a, i) {
      var l = !0;
      Hh(t.nodeValue, a, i, l);
    }
    function Ww(e, t, a, i, l, s) {
      if (t[Bh] !== !0) {
        var d = !0;
        Hh(i.nodeValue, l, s, d);
      }
    }
    function Qw(e, t) {
      t.nodeType === Xr ? ng(e, t) : t.nodeType === Mn || rg(e, t);
    }
    function Gw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ng(a, t) : t.nodeType === Mn || rg(a, t));
      }
    }
    function Kw(e, t, a, i, l) {
      (l || t[Bh] !== !0) && (i.nodeType === Xr ? ng(a, i) : i.nodeType === Mn || rg(a, i));
    }
    function Xw(e, t, a) {
      ag(e, t);
    }
    function Jw(e, t) {
      ig(e, t);
    }
    function Zw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ag(i, t);
      }
    }
    function eb(e, t) {
      {
        var a = e.parentNode;
        a !== null && ig(a, t);
      }
    }
    function tb(e, t, a, i, l, s) {
      (s || t[Bh] !== !0) && ag(a, i);
    }
    function nb(e, t, a, i, l) {
      (l || t[Bh] !== !0) && ig(a, i);
    }
    function rb(e) {
      R("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ab(e) {
      dp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, pg = "__reactProps$" + Lf, Cp = "__reactContainer$" + Lf, vg = "__reactEvents$" + Lf, ib = "__reactListeners$" + Lf, ob = "__reactHandles$" + Lf;
    function lb(e) {
      delete e[Nf], delete e[pg], delete e[vg], delete e[ib], delete e[ob];
    }
    function Rp(e, t) {
      t[Nf] = e;
    }
    function Yh(e, t) {
      t[Cp] = e;
    }
    function O0(e) {
      e[Cp] = null;
    }
    function Tp(e) {
      return !!e[Cp];
    }
    function Xs(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Cp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = D0(e); l !== null; ) {
              var s = l[Nf];
              if (s)
                return s;
              l = D0(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Mu(e) {
      var t = e[Nf] || e[Cp];
      return t && (t.tag === te || t.tag === Ce || t.tag === De || t.tag === ne) ? t : null;
    }
    function Mf(e) {
      if (e.tag === te || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function qh(e) {
      return e[pg] || null;
    }
    function hg(e, t) {
      e[pg] = t;
    }
    function ub(e) {
      var t = e[vg];
      return t === void 0 && (t = e[vg] = /* @__PURE__ */ new Set()), t;
    }
    var L0 = {}, N0 = S.ReactDebugCurrentFrame;
    function Wh(e) {
      if (e) {
        var t = e._owner, a = Ju(e.type, e._source, t ? t.type : null);
        N0.setExtraStackFrame(a);
      } else
        N0.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, l) {
      {
        var s = Function.call.bind(ir);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              h = C;
            }
            h && !(h instanceof Error) && (Wh(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof h), Wh(null)), h instanceof Error && !(h.message in L0) && (L0[h.message] = !0, Wh(l), R("Failed %s type: %s", a, h.message), Wh(null));
          }
      }
    }
    var mg = [], Qh;
    Qh = [];
    var Nl = -1;
    function Au(e) {
      return {
        current: e
      };
    }
    function oa(e, t) {
      if (Nl < 0) {
        R("Unexpected pop.");
        return;
      }
      t !== Qh[Nl] && R("Unexpected Fiber popped."), e.current = mg[Nl], mg[Nl] = null, Qh[Nl] = null, Nl--;
    }
    function la(e, t, a) {
      Nl++, mg[Nl] = e.current, Qh[Nl] = a, e.current = t;
    }
    var yg;
    yg = {};
    var li = {};
    Object.freeze(li);
    var Ml = Au(li), Ho = Au(!1), gg = li;
    function Af(e, t, a) {
      return a && Po(t) ? gg : Ml.current;
    }
    function M0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Uf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var h = We(e) || "Unknown";
          Ji(i, s, "context", h);
        }
        return l && M0(e, t, s), s;
      }
    }
    function Gh() {
      return Ho.current;
    }
    function Po(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Kh(e) {
      oa(Ho, e), oa(Ml, e);
    }
    function Sg(e) {
      oa(Ho, e), oa(Ml, e);
    }
    function A0(e, t, a) {
      {
        if (Ml.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Ml, t, e), la(Ho, a, e);
      }
    }
    function U0(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = We(e) || "Unknown";
            yg[s] || (yg[s] = !0, R("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var h in d)
          if (!(h in l))
            throw new Error((We(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = We(e) || "Unknown";
          Ji(l, d, "child context", y);
        }
        return et({}, a, d);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return gg = Ml.current, la(Ml, a, e), la(Ho, Ho.current, e), !0;
      }
    }
    function z0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = U0(e, t, gg);
          i.__reactInternalMemoizedMergedChildContext = l, oa(Ho, e), oa(Ml, e), la(Ml, l, e), la(Ho, a, e);
        } else
          oa(Ho, e), la(Ho, a, e);
      }
    }
    function sb(e) {
      {
        if (!qv(e) || e.tag !== ie)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case ie: {
              var a = t.type;
              if (Po(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uu = 0, Jh = 1, Al = null, Eg = !1, Cg = !1;
    function F0(e) {
      Al === null ? Al = [e] : Al.push(e);
    }
    function cb(e) {
      Eg = !0, F0(e);
    }
    function j0() {
      Eg && zu();
    }
    function zu() {
      if (!Cg && Al !== null) {
        Cg = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = Al;
          for (In(aa); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Al = null, Eg = !1;
        } catch (s) {
          throw Al !== null && (Al = Al.slice(e + 1)), xd(Qi, zu), s;
        } finally {
          In(t), Cg = !1;
        }
      }
      return null;
    }
    var zf = [], Ff = 0, Zh = null, em = 0, wi = [], bi = 0, Js = null, Ul = 1, zl = "";
    function fb(e) {
      return ec(), (e.flags & gs) !== Ne;
    }
    function db(e) {
      return ec(), em;
    }
    function pb() {
      var e = zl, t = Ul, a = t & ~vb(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      ec(), zf[Ff++] = em, zf[Ff++] = Zh, Zh = e, em = t;
    }
    function H0(e, t, a) {
      ec(), wi[bi++] = Ul, wi[bi++] = zl, wi[bi++] = Js, Js = e;
      var i = Ul, l = zl, s = tm(i) - 1, d = i & ~(1 << s), h = a + 1, y = tm(t) + s;
      if (y > 30) {
        var C = s - s % 5, T = (1 << C) - 1, O = (d & T).toString(32), k = d >> C, j = s - C, P = tm(t) + j, V = h << j, de = V | k, Fe = O + l;
        Ul = 1 << P | de, zl = Fe;
      } else {
        var Le = h << s, kt = Le | d, gt = l;
        Ul = 1 << y | kt, zl = gt;
      }
    }
    function Rg(e) {
      ec();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), H0(e, a, i);
      }
    }
    function tm(e) {
      return 32 - $n(e);
    }
    function vb(e) {
      return 1 << tm(e) - 1;
    }
    function Tg(e) {
      for (; e === Zh; )
        Zh = zf[--Ff], zf[Ff] = null, em = zf[--Ff], zf[Ff] = null;
      for (; e === Js; )
        Js = wi[--bi], wi[bi] = null, zl = wi[--bi], wi[bi] = null, Ul = wi[--bi], wi[bi] = null;
    }
    function hb() {
      return ec(), Js !== null ? {
        id: Ul,
        overflow: zl
      } : null;
    }
    function mb(e, t) {
      ec(), wi[bi++] = Ul, wi[bi++] = zl, wi[bi++] = Js, Ul = t.id, zl = t.overflow, Js = e;
    }
    function ec() {
      Fr() || R("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, xi = null, Zi = !1, tc = !1, Fu = null;
    function yb() {
      Zi && R("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function P0() {
      tc = !0;
    }
    function gb() {
      return tc;
    }
    function Sb(e) {
      var t = e.stateNode.containerInfo;
      return xi = Fw(t), zr = e, Zi = !0, Fu = null, tc = !1, !0;
    }
    function Eb(e, t, a) {
      return xi = jw(t), zr = e, Zi = !0, Fu = null, tc = !1, a !== null && mb(e, a), !0;
    }
    function B0(e, t) {
      switch (e.tag) {
        case ne: {
          Qw(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & dt) !== Me;
          Kw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && Gw(i.dehydrated, t);
          break;
        }
      }
    }
    function V0(e, t) {
      B0(e, t);
      var a = _k();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function _g(e, t) {
      {
        if (tc)
          return;
        switch (e.tag) {
          case ne: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, Xw(a, i);
                break;
              case Ce:
                var l = t.pendingProps;
                Jw(a, l);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case te: {
                var y = t.type, C = t.pendingProps, T = (e.mode & dt) !== Me;
                tb(
                  s,
                  d,
                  h,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Ce: {
                var O = t.pendingProps, k = (e.mode & dt) !== Me;
                nb(
                  s,
                  d,
                  h,
                  O,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case De: {
            var j = e.memoizedState, P = j.dehydrated;
            if (P !== null) switch (t.tag) {
              case te:
                var V = t.type;
                t.pendingProps, Zw(P, V);
                break;
              case Ce:
                var de = t.pendingProps;
                eb(P, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function $0(e, t) {
      t.flags = t.flags & -4097 | An, _g(e, t);
    }
    function I0(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = Lw(t, a);
          return i !== null ? (e.stateNode = i, zr = e, xi = zw(i), !0) : !1;
        }
        case Ce: {
          var l = e.pendingProps, s = Nw(t, l);
          return s !== null ? (e.stateNode = s, zr = e, xi = null, !0) : !1;
        }
        case De: {
          var d = Mw(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: hb(),
              retryLane: ga
            };
            e.memoizedState = h;
            var y = wk(d);
            return y.return = e, e.child = y, zr = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function wg(e) {
      return (e.mode & dt) !== Me && (e.flags & ft) === Ne;
    }
    function bg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function xg(e) {
      if (Zi) {
        var t = xi;
        if (!t) {
          wg(e) && (_g(zr, e), bg()), $0(zr, e), Zi = !1, zr = e;
          return;
        }
        var a = t;
        if (!I0(e, t)) {
          wg(e) && (_g(zr, e), bg()), t = Ep(a);
          var i = zr;
          if (!t || !I0(e, t)) {
            $0(zr, e), Zi = !1, zr = e;
            return;
          }
          V0(i, a);
        }
      }
    }
    function Cb(e, t, a) {
      var i = e.stateNode, l = !tc, s = Hw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Rb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Pw(t, a, e);
      if (i) {
        var l = zr;
        if (l !== null)
          switch (l.tag) {
            case ne: {
              var s = l.stateNode.containerInfo, d = (l.mode & dt) !== Me;
              qw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case te: {
              var h = l.type, y = l.memoizedProps, C = l.stateNode, T = (l.mode & dt) !== Me;
              Ww(
                h,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Tb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Bw(a, e);
    }
    function _b(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Vw(a);
    }
    function Y0(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== ne && t.tag !== De; )
        t = t.return;
      zr = t;
    }
    function nm(e) {
      if (e !== zr)
        return !1;
      if (!Zi)
        return Y0(e), Zi = !0, !1;
      if (e.tag !== ne && (e.tag !== te || Yw(e.type) && !ug(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (wg(e))
            q0(e), bg();
          else
            for (; t; )
              V0(e, t), t = Ep(t);
      }
      return Y0(e), e.tag === De ? xi = _b(e) : xi = zr ? Ep(e.stateNode) : null, !0;
    }
    function wb() {
      return Zi && xi !== null;
    }
    function q0(e) {
      for (var t = xi; t; )
        B0(e, t), t = Ep(t);
    }
    function jf() {
      zr = null, xi = null, Zi = !1, tc = !1;
    }
    function W0() {
      Fu !== null && (PR(Fu), Fu = null);
    }
    function Fr() {
      return Zi;
    }
    function kg(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    var bb = S.ReactCurrentBatchConfig, xb = null;
    function kb() {
      return bb.transition;
    }
    var eo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Db = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tt && (t = a), a = a.return;
        return t;
      }, nc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, _p = [], wp = [], bp = [], xp = [], kp = [], Dp = [], rc = /* @__PURE__ */ new Set();
      eo.recordUnsafeLifecycleWarnings = function(e, t) {
        rc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & tt && typeof t.UNSAFE_componentWillMount == "function" && wp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillReceiveProps == "function" && xp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillUpdate == "function" && Dp.push(e));
      }, eo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(k) {
          e.add(We(k) || "Component"), rc.add(k.type);
        }), _p = []);
        var t = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(k) {
          t.add(We(k) || "Component"), rc.add(k.type);
        }), wp = []);
        var a = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(k) {
          a.add(We(k) || "Component"), rc.add(k.type);
        }), bp = []);
        var i = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(k) {
          i.add(We(k) || "Component"), rc.add(k.type);
        }), xp = []);
        var l = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(k) {
          l.add(We(k) || "Component"), rc.add(k.type);
        }), kp = []);
        var s = /* @__PURE__ */ new Set();
        if (Dp.length > 0 && (Dp.forEach(function(k) {
          s.add(We(k) || "Component"), rc.add(k.type);
        }), Dp = []), t.size > 0) {
          var d = nc(t);
          R(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var h = nc(i);
          R(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var y = nc(s);
          R(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = nc(e);
          ee(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var T = nc(a);
          ee(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var O = nc(l);
          ee(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var rm = /* @__PURE__ */ new Map(), Q0 = /* @__PURE__ */ new Set();
      eo.recordLegacyContextWarning = function(e, t) {
        var a = Db(e);
        if (a === null) {
          R("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Q0.has(e.type)) {
          var i = rm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], rm.set(a, i)), i.push(e));
        }
      }, eo.flushLegacyContextWarning = function() {
        rm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(We(s) || "Component"), Q0.add(s.type);
            });
            var l = nc(i);
            try {
              Qt(a), R(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              gn();
            }
          }
        });
      }, eo.discardPendingWarnings = function() {
        _p = [], wp = [], bp = [], xp = [], kp = [], Dp = [], rm = /* @__PURE__ */ new Map();
      };
    }
    var Dg, Og, Lg, Ng, Mg, G0 = function(e, t) {
    };
    Dg = !1, Og = !1, Lg = {}, Ng = {}, Mg = {}, G0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = We(t) || "Component";
        Ng[a] || (Ng[a] = !0, R('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ob(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Op(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tt || Ae) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ie) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ob(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = We(e) || "Component";
          Lg[l] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Lg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== ie)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          Ga(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(O) {
            var k = y.refs;
            O === null ? delete k[C] : k[C] = O;
          };
          return T._stringRef = C, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function am(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function im(e) {
      {
        var t = We(e) || "Component";
        if (Mg[t])
          return;
        Mg[t] = !0, R("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function K0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function X0(e) {
      function t(A, $) {
        if (e) {
          var U = A.deletions;
          U === null ? (A.deletions = [$], A.flags |= Jr) : U.push($);
        }
      }
      function a(A, $) {
        if (!e)
          return null;
        for (var U = $; U !== null; )
          t(A, U), U = U.sibling;
        return null;
      }
      function i(A, $) {
        for (var U = /* @__PURE__ */ new Map(), Z = $; Z !== null; )
          Z.key !== null ? U.set(Z.key, Z) : U.set(Z.index, Z), Z = Z.sibling;
        return U;
      }
      function l(A, $) {
        var U = dc(A, $);
        return U.index = 0, U.sibling = null, U;
      }
      function s(A, $, U) {
        if (A.index = U, !e)
          return A.flags |= gs, $;
        var Z = A.alternate;
        if (Z !== null) {
          var Ee = Z.index;
          return Ee < $ ? (A.flags |= An, $) : Ee;
        } else
          return A.flags |= An, $;
      }
      function d(A) {
        return e && A.alternate === null && (A.flags |= An), A;
      }
      function h(A, $, U, Z) {
        if ($ === null || $.tag !== Ce) {
          var Ee = kE(U, A.mode, Z);
          return Ee.return = A, Ee;
        } else {
          var he = l($, U);
          return he.return = A, he;
        }
      }
      function y(A, $, U, Z) {
        var Ee = U.type;
        if (Ee === Wr)
          return T(A, $, U.props.children, Z, U.key);
        if ($ !== null && ($.elementType === Ee || // Keep this check inline so it only runs on the false path:
        nT($, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ee == "object" && Ee !== null && Ee.$$typeof === Ke && K0(Ee) === $.type)) {
          var he = l($, U.props);
          return he.ref = Op(A, $, U), he.return = A, he._debugSource = U._source, he._debugOwner = U._owner, he;
        }
        var Ie = xE(U, A.mode, Z);
        return Ie.ref = Op(A, $, U), Ie.return = A, Ie;
      }
      function C(A, $, U, Z) {
        if ($ === null || $.tag !== _e || $.stateNode.containerInfo !== U.containerInfo || $.stateNode.implementation !== U.implementation) {
          var Ee = DE(U, A.mode, Z);
          return Ee.return = A, Ee;
        } else {
          var he = l($, U.children || []);
          return he.return = A, he;
        }
      }
      function T(A, $, U, Z, Ee) {
        if ($ === null || $.tag !== Ve) {
          var he = Qu(U, A.mode, Z, Ee);
          return he.return = A, he;
        } else {
          var Ie = l($, U);
          return Ie.return = A, Ie;
        }
      }
      function O(A, $, U) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
          var Z = kE("" + $, A.mode, U);
          return Z.return = A, Z;
        }
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case lr: {
              var Ee = xE($, A.mode, U);
              return Ee.ref = Op(A, null, $), Ee.return = A, Ee;
            }
            case ha: {
              var he = DE($, A.mode, U);
              return he.return = A, he;
            }
            case Ke: {
              var Ie = $._payload, Ze = $._init;
              return O(A, Ze(Ie), U);
            }
          }
          if (rt($) || vn($)) {
            var en = Qu($, A.mode, U, null);
            return en.return = A, en;
          }
          am(A, $);
        }
        return typeof $ == "function" && im(A), null;
      }
      function k(A, $, U, Z) {
        var Ee = $ !== null ? $.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return Ee !== null ? null : h(A, $, "" + U, Z);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case lr:
              return U.key === Ee ? y(A, $, U, Z) : null;
            case ha:
              return U.key === Ee ? C(A, $, U, Z) : null;
            case Ke: {
              var he = U._payload, Ie = U._init;
              return k(A, $, Ie(he), Z);
            }
          }
          if (rt(U) || vn(U))
            return Ee !== null ? null : T(A, $, U, Z, null);
          am(A, U);
        }
        return typeof U == "function" && im(A), null;
      }
      function j(A, $, U, Z, Ee) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var he = A.get(U) || null;
          return h($, he, "" + Z, Ee);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case lr: {
              var Ie = A.get(Z.key === null ? U : Z.key) || null;
              return y($, Ie, Z, Ee);
            }
            case ha: {
              var Ze = A.get(Z.key === null ? U : Z.key) || null;
              return C($, Ze, Z, Ee);
            }
            case Ke:
              var en = Z._payload, Nt = Z._init;
              return j(A, $, U, Nt(en), Ee);
          }
          if (rt(Z) || vn(Z)) {
            var Wn = A.get(U) || null;
            return T($, Wn, Z, Ee, null);
          }
          am($, Z);
        }
        return typeof Z == "function" && im($), null;
      }
      function P(A, $, U) {
        {
          if (typeof A != "object" || A === null)
            return $;
          switch (A.$$typeof) {
            case lr:
            case ha:
              G0(A, U);
              var Z = A.key;
              if (typeof Z != "string")
                break;
              if ($ === null) {
                $ = /* @__PURE__ */ new Set(), $.add(Z);
                break;
              }
              if (!$.has(Z)) {
                $.add(Z);
                break;
              }
              R("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ke:
              var Ee = A._payload, he = A._init;
              P(he(Ee), $, U);
              break;
          }
        }
        return $;
      }
      function V(A, $, U, Z) {
        for (var Ee = null, he = 0; he < U.length; he++) {
          var Ie = U[he];
          Ee = P(Ie, Ee, A);
        }
        for (var Ze = null, en = null, Nt = $, Wn = 0, Mt = 0, Pn = null; Nt !== null && Mt < U.length; Mt++) {
          Nt.index > Mt ? (Pn = Nt, Nt = null) : Pn = Nt.sibling;
          var sa = k(A, Nt, U[Mt], Z);
          if (sa === null) {
            Nt === null && (Nt = Pn);
            break;
          }
          e && Nt && sa.alternate === null && t(A, Nt), Wn = s(sa, Wn, Mt), en === null ? Ze = sa : en.sibling = sa, en = sa, Nt = Pn;
        }
        if (Mt === U.length) {
          if (a(A, Nt), Fr()) {
            var Ir = Mt;
            Zs(A, Ir);
          }
          return Ze;
        }
        if (Nt === null) {
          for (; Mt < U.length; Mt++) {
            var si = O(A, U[Mt], Z);
            si !== null && (Wn = s(si, Wn, Mt), en === null ? Ze = si : en.sibling = si, en = si);
          }
          if (Fr()) {
            var ba = Mt;
            Zs(A, ba);
          }
          return Ze;
        }
        for (var xa = i(A, Nt); Mt < U.length; Mt++) {
          var ca = j(xa, A, Mt, U[Mt], Z);
          ca !== null && (e && ca.alternate !== null && xa.delete(ca.key === null ? Mt : ca.key), Wn = s(ca, Wn, Mt), en === null ? Ze = ca : en.sibling = ca, en = ca);
        }
        if (e && xa.forEach(function(rd) {
          return t(A, rd);
        }), Fr()) {
          var $l = Mt;
          Zs(A, $l);
        }
        return Ze;
      }
      function de(A, $, U, Z) {
        var Ee = vn(U);
        if (typeof Ee != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (Og || R("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Og = !0), U.entries === Ee && (Dg || R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Dg = !0);
          var he = Ee.call(U);
          if (he)
            for (var Ie = null, Ze = he.next(); !Ze.done; Ze = he.next()) {
              var en = Ze.value;
              Ie = P(en, Ie, A);
            }
        }
        var Nt = Ee.call(U);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Mt = null, Pn = $, sa = 0, Ir = 0, si = null, ba = Nt.next(); Pn !== null && !ba.done; Ir++, ba = Nt.next()) {
          Pn.index > Ir ? (si = Pn, Pn = null) : si = Pn.sibling;
          var xa = k(A, Pn, ba.value, Z);
          if (xa === null) {
            Pn === null && (Pn = si);
            break;
          }
          e && Pn && xa.alternate === null && t(A, Pn), sa = s(xa, sa, Ir), Mt === null ? Wn = xa : Mt.sibling = xa, Mt = xa, Pn = si;
        }
        if (ba.done) {
          if (a(A, Pn), Fr()) {
            var ca = Ir;
            Zs(A, ca);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !ba.done; Ir++, ba = Nt.next()) {
            var $l = O(A, ba.value, Z);
            $l !== null && (sa = s($l, sa, Ir), Mt === null ? Wn = $l : Mt.sibling = $l, Mt = $l);
          }
          if (Fr()) {
            var rd = Ir;
            Zs(A, rd);
          }
          return Wn;
        }
        for (var uv = i(A, Pn); !ba.done; Ir++, ba = Nt.next()) {
          var Qo = j(uv, A, Ir, ba.value, Z);
          Qo !== null && (e && Qo.alternate !== null && uv.delete(Qo.key === null ? Ir : Qo.key), sa = s(Qo, sa, Ir), Mt === null ? Wn = Qo : Mt.sibling = Qo, Mt = Qo);
        }
        if (e && uv.forEach(function(nD) {
          return t(A, nD);
        }), Fr()) {
          var tD = Ir;
          Zs(A, tD);
        }
        return Wn;
      }
      function Fe(A, $, U, Z) {
        if ($ !== null && $.tag === Ce) {
          a(A, $.sibling);
          var Ee = l($, U);
          return Ee.return = A, Ee;
        }
        a(A, $);
        var he = kE(U, A.mode, Z);
        return he.return = A, he;
      }
      function Le(A, $, U, Z) {
        for (var Ee = U.key, he = $; he !== null; ) {
          if (he.key === Ee) {
            var Ie = U.type;
            if (Ie === Wr) {
              if (he.tag === Ve) {
                a(A, he.sibling);
                var Ze = l(he, U.props.children);
                return Ze.return = A, Ze._debugSource = U._source, Ze._debugOwner = U._owner, Ze;
              }
            } else if (he.elementType === Ie || // Keep this check inline so it only runs on the false path:
            nT(he, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ke && K0(Ie) === he.type) {
              a(A, he.sibling);
              var en = l(he, U.props);
              return en.ref = Op(A, he, U), en.return = A, en._debugSource = U._source, en._debugOwner = U._owner, en;
            }
            a(A, he);
            break;
          } else
            t(A, he);
          he = he.sibling;
        }
        if (U.type === Wr) {
          var Nt = Qu(U.props.children, A.mode, Z, U.key);
          return Nt.return = A, Nt;
        } else {
          var Wn = xE(U, A.mode, Z);
          return Wn.ref = Op(A, $, U), Wn.return = A, Wn;
        }
      }
      function kt(A, $, U, Z) {
        for (var Ee = U.key, he = $; he !== null; ) {
          if (he.key === Ee)
            if (he.tag === _e && he.stateNode.containerInfo === U.containerInfo && he.stateNode.implementation === U.implementation) {
              a(A, he.sibling);
              var Ie = l(he, U.children || []);
              return Ie.return = A, Ie;
            } else {
              a(A, he);
              break;
            }
          else
            t(A, he);
          he = he.sibling;
        }
        var Ze = DE(U, A.mode, Z);
        return Ze.return = A, Ze;
      }
      function gt(A, $, U, Z) {
        var Ee = typeof U == "object" && U !== null && U.type === Wr && U.key === null;
        if (Ee && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case lr:
              return d(Le(A, $, U, Z));
            case ha:
              return d(kt(A, $, U, Z));
            case Ke:
              var he = U._payload, Ie = U._init;
              return gt(A, $, Ie(he), Z);
          }
          if (rt(U))
            return V(A, $, U, Z);
          if (vn(U))
            return de(A, $, U, Z);
          am(A, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? d(Fe(A, $, "" + U, Z)) : (typeof U == "function" && im(A), a(A, $));
      }
      return gt;
    }
    var Hf = X0(!0), J0 = X0(!1);
    function Lb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = dc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = dc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nb(e, t) {
      for (var a = e.child; a !== null; )
        Sk(a, t), a = a.sibling;
    }
    var Ag = Au(null), Ug;
    Ug = {};
    var om = null, Pf = null, zg = null, lm = !1;
    function um() {
      om = null, Pf = null, zg = null, lm = !1;
    }
    function Z0() {
      lm = !0;
    }
    function eC() {
      lm = !1;
    }
    function tC(e, t, a) {
      la(Ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ug && R("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ug;
    }
    function Fg(e, t) {
      var a = Ag.current;
      oa(Ag, t), e._currentValue = a;
    }
    function jg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Cl(i.childLanes, t) ? l !== null && !Cl(l.childLanes, t) && (l.childLanes = at(l.childLanes, t)) : (i.childLanes = at(i.childLanes, t), l !== null && (l.childLanes = at(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && R("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mb(e, t, a) {
      Ab(e, t, a);
    }
    function Ab(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === ie) {
                var h = tr(a), y = Fl(Yt, h);
                y.tag = cm;
                var C = i.updateQueue;
                if (C !== null) {
                  var T = C.shared, O = T.pending;
                  O === null ? y.next = y : (y.next = O.next, O.next = y), T.pending = y;
                }
              }
              i.lanes = at(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = at(k.lanes, a)), jg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === nt)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === pn) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = at(j.lanes, a);
          var P = j.alternate;
          P !== null && (P.lanes = at(P.lanes, a)), jg(j, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var V = l.sibling;
            if (V !== null) {
              V.return = l.return, l = V;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Bf(e, t) {
      om = e, Pf = null, zg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Yp(), a.firstContext = null);
      }
    }
    function rr(e) {
      lm && R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (zg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Pf === null) {
          if (om === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pf = a, om.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          Pf = Pf.next = a;
      }
      return t;
    }
    var ac = null;
    function Hg(e) {
      ac === null ? ac = [e] : ac.push(e);
    }
    function Ub() {
      if (ac !== null) {
        for (var e = 0; e < ac.length; e++) {
          var t = ac[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ac = null;
      }
    }
    function nC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, sm(e, i);
    }
    function zb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Fb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, sm(e, i);
    }
    function $a(e, t) {
      return sm(e, t);
    }
    var jb = sm;
    function sm(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (An | zn)) !== Ne && JR(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = at(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (l.flags & (An | zn)) !== Ne && JR(e), i = l, l = l.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var rC = 0, aC = 1, cm = 2, Pg = 3, fm = !1, Bg, dm;
    Bg = !1, dm = null;
    function Vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function iC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Fl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: rC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ju(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (dm === l && !Bg && (R("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Bg = !0), zx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, jb(e, a);
      } else
        return Fb(e, l, t, a);
    }
    function pm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Id(a)) {
          var s = l.lanes;
          s = of(s, e.pendingLanes);
          var d = at(s, a);
          l.lanes = d, As(e, d);
        }
      }
    }
    function $g(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var y = h;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = C : (d.next = C, d = C), y = y.next;
            } while (y !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function Hb(e, t, a, i, l, s) {
      switch (a.tag) {
        case aC: {
          var d = a.payload;
          if (typeof d == "function") {
            Z0();
            var h = d.call(s, i, l);
            {
              if (e.mode & tt) {
                It(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  It(!1);
                }
              }
              eC();
            }
            return h;
          }
          return d;
        }
        case Pg:
          e.flags = e.flags & -65537 | ft;
        // Intentional fallthrough
        case rC: {
          var y = a.payload, C;
          if (typeof y == "function") {
            Z0(), C = y.call(s, i, l);
            {
              if (e.mode & tt) {
                It(!0);
                try {
                  y.call(s, i, l);
                } finally {
                  It(!1);
                }
              }
              eC();
            }
          } else
            C = y;
          return C == null ? i : et({}, i, C);
        }
        case cm:
          return fm = !0, i;
      }
      return i;
    }
    function vm(e, t, a, i) {
      var l = e.updateQueue;
      fm = !1, dm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, h = l.shared.pending;
      if (h !== null) {
        l.shared.pending = null;
        var y = h, C = y.next;
        y.next = null, d === null ? s = C : d.next = C, d = y;
        var T = e.alternate;
        if (T !== null) {
          var O = T.updateQueue, k = O.lastBaseUpdate;
          k !== d && (k === null ? O.firstBaseUpdate = C : k.next = C, O.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var j = l.baseState, P = I, V = null, de = null, Fe = null, Le = s;
        do {
          var kt = Le.lane, gt = Le.eventTime;
          if (Cl(i, kt)) {
            if (Fe !== null) {
              var $ = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jn,
                tag: Le.tag,
                payload: Le.payload,
                callback: Le.callback,
                next: null
              };
              Fe = Fe.next = $;
            }
            j = Hb(e, l, Le, j, t, a);
            var U = Le.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            Le.lane !== jn) {
              e.flags |= nn;
              var Z = l.effects;
              Z === null ? l.effects = [Le] : Z.push(Le);
            }
          } else {
            var A = {
              eventTime: gt,
              lane: kt,
              tag: Le.tag,
              payload: Le.payload,
              callback: Le.callback,
              next: null
            };
            Fe === null ? (de = Fe = A, V = j) : Fe = Fe.next = A, P = at(P, kt);
          }
          if (Le = Le.next, Le === null) {
            if (h = l.shared.pending, h === null)
              break;
            var Ee = h, he = Ee.next;
            Ee.next = null, Le = he, l.lastBaseUpdate = Ee, l.shared.pending = null;
          }
        } while (!0);
        Fe === null && (V = j), l.baseState = V, l.firstBaseUpdate = de, l.lastBaseUpdate = Fe;
        var Ie = l.shared.interleaved;
        if (Ie !== null) {
          var Ze = Ie;
          do
            P = at(P, Ze.lane), Ze = Ze.next;
          while (Ze !== Ie);
        } else s === null && (l.shared.lanes = I);
        rv(P), e.lanes = P, e.memoizedState = j;
      }
      dm = null;
    }
    function Pb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oC() {
      fm = !1;
    }
    function hm() {
      return fm;
    }
    function lC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Pb(d, a));
        }
    }
    var Lp = {}, Hu = Au(Lp), Np = Au(Lp), mm = Au(Lp);
    function ym(e) {
      if (e === Lp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function uC() {
      var e = ym(mm.current);
      return e;
    }
    function Ig(e, t) {
      la(mm, t, e), la(Np, e, e), la(Hu, Lp, e);
      var a = rw(t);
      oa(Hu, e), la(Hu, a, e);
    }
    function Vf(e) {
      oa(Hu, e), oa(Np, e), oa(mm, e);
    }
    function Yg() {
      var e = ym(Hu.current);
      return e;
    }
    function sC(e) {
      ym(mm.current);
      var t = ym(Hu.current), a = aw(t, e.type);
      t !== a && (la(Np, e, e), la(Hu, a, e));
    }
    function qg(e) {
      Np.current === e && (oa(Hu, e), oa(Np, e));
    }
    var Bb = 0, cC = 1, fC = 1, Mp = 2, to = Au(Bb);
    function Wg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & cC;
    }
    function Qg(e, t) {
      return e & cC | t;
    }
    function Vb(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      la(to, t, e);
    }
    function If(e) {
      oa(to, e);
    }
    function $b(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || k0(i) || dg(i))
              return t;
          }
        } else if (t.tag === qt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ft) !== Ne;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Bo = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Gg = [];
    function Kg() {
      for (var e = 0; e < Gg.length; e++) {
        var t = Gg[e];
        t._workInProgressVersionPrimary = null;
      }
      Gg.length = 0;
    }
    function Ib(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ge = S.ReactCurrentDispatcher, Ap = S.ReactCurrentBatchConfig, Xg, Yf;
    Xg = /* @__PURE__ */ new Set();
    var ic = I, Zt = null, hr = null, mr = null, Sm = !1, Up = !1, zp = 0, Yb = 0, qb = 25, q = null, ki = null, Bu = -1, Jg = !1;
    function Vt() {
      {
        var e = q;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function le() {
      {
        var e = q;
        ki !== null && (Bu++, ki[Bu] !== e && Wb(e));
      }
    }
    function qf(e) {
      e != null && !rt(e) && R("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", q, typeof e);
    }
    function Wb(e) {
      {
        var t = We(Zt);
        if (!Xg.has(t) && (Xg.add(t), ki !== null)) {
          for (var a = "", i = 30, l = 0; l <= Bu; l++) {
            for (var s = ki[l], d = l === Bu ? e : s, h = l + 1 + ". " + s; h.length < i; )
              h += " ";
            h += d + `
`, a += h;
          }
          R(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Zg(e, t) {
      if (Jg)
        return !1;
      if (t === null)
        return R("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", q), !1;
      e.length !== t.length && R(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Wf(e, t, a, i, l, s) {
      ic = s, Zt = t, ki = e !== null ? e._debugHookTypes : null, Bu = -1, Jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? ge.current = MC : ki !== null ? ge.current = NC : ge.current = LC;
      var d = a(i, l);
      if (Up) {
        var h = 0;
        do {
          if (Up = !1, zp = 0, h >= qb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, Jg = !1, hr = null, mr = null, t.updateQueue = null, Bu = -1, ge.current = AC, d = a(i, l);
        } while (Up);
      }
      ge.current = Nm, t._debugHookTypes = ki;
      var y = hr !== null && hr.next !== null;
      if (ic = I, Zt = null, hr = null, mr = null, q = null, ki = null, Bu = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== Me && R("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Qf() {
      var e = zp !== 0;
      return zp = 0, e;
    }
    function dC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Jt) !== Me ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function pC() {
      if (ge.current = Nm, Sm) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      ic = I, Zt = null, hr = null, mr = null, ki = null, Bu = -1, q = null, bC = !1, Up = !1, zp = 0;
    }
    function Vo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Zt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Di() {
      var e;
      if (hr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = Zt.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? Zt.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function vC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function eS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function tS(e, t, a) {
      var i = Vo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = Xb.bind(null, Zt, s);
      return [i.memoizedState, d];
    }
    function nS(e, t, a) {
      var i = Di(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = hr, d = s.baseQueue, h = l.pending;
      if (h !== null) {
        if (d !== null) {
          var y = d.next, C = h.next;
          d.next = C, h.next = y;
        }
        s.baseQueue !== d && R("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, l.pending = null;
      }
      if (d !== null) {
        var T = d.next, O = s.baseState, k = null, j = null, P = null, V = T;
        do {
          var de = V.lane;
          if (Cl(ic, de)) {
            if (P !== null) {
              var Le = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              P = P.next = Le;
            }
            if (V.hasEagerState)
              O = V.eagerState;
            else {
              var kt = V.action;
              O = e(O, kt);
            }
          } else {
            var Fe = {
              lane: de,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            P === null ? (j = P = Fe, k = O) : P = P.next = Fe, Zt.lanes = at(Zt.lanes, de), rv(de);
          }
          V = V.next;
        } while (V !== null && V !== T);
        P === null ? k = O : P.next = j, ve(O, i.memoizedState) || Yp(), i.memoizedState = O, i.baseState = k, i.baseQueue = P, l.lastRenderedState = O;
      }
      var gt = l.interleaved;
      if (gt !== null) {
        var A = gt;
        do {
          var $ = A.lane;
          Zt.lanes = at(Zt.lanes, $), rv($), A = A.next;
        } while (A !== gt);
      } else d === null && (l.lanes = I);
      var U = l.dispatch;
      return [i.memoizedState, U];
    }
    function rS(e, t, a) {
      var i = Di(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, h = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var y = d.next, C = y;
        do {
          var T = C.action;
          h = e(h, T), C = C.next;
        } while (C !== y);
        ve(h, i.memoizedState) || Yp(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), l.lastRenderedState = h;
      }
      return [h, s];
    }
    function UO(e, t, a) {
    }
    function zO(e, t, a) {
    }
    function aS(e, t, a) {
      var i = Zt, l = Vo(), s, d = Fr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (R("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var h = t();
          ve(s, h) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var y = Xm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(y, ic) || hC(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, _m(yC.bind(null, i, C, e), [e]), i.flags |= ma, Fp(pr | jr, mC.bind(null, i, C, s, t), void 0, null), s;
    }
    function Em(e, t, a) {
      var i = Zt, l = Di(), s = t();
      if (!Yf) {
        var d = t();
        ve(s, d) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var h = l.memoizedState, y = !ve(h, s);
      y && (l.memoizedState = s, Yp());
      var C = l.queue;
      if (Hp(yC.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ma, Fp(pr | jr, mC.bind(null, i, C, s, t), void 0, null);
        var T = Xm();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(T, ic) || hC(i, t, s);
      }
      return s;
    }
    function hC(e, t, a) {
      e.flags |= Mc;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Zt.updateQueue;
      if (l === null)
        l = vC(), Zt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function mC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, gC(t) && SC(e);
    }
    function yC(e, t, a) {
      var i = function() {
        gC(t) && SC(e);
      };
      return a(i);
    }
    function gC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function SC(e) {
      var t = $a(e, Be);
      t !== null && Er(t, e, Be, Yt);
    }
    function Cm(e) {
      var t = Vo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: eS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jb.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function iS(e) {
      return nS(eS);
    }
    function oS(e) {
      return rS(eS);
    }
    function Fp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = vC(), Zt.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var h = d.next;
          d.next = l, l.next = h, s.lastEffect = l;
        }
      }
      return l;
    }
    function lS(e) {
      var t = Vo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Rm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function jp(e, t, a, i) {
      var l = Vo(), s = i === void 0 ? null : i;
      Zt.flags |= e, l.memoizedState = Fp(pr | t, a, void 0, s);
    }
    function Tm(e, t, a, i) {
      var l = Di(), s = i === void 0 ? null : i, d = void 0;
      if (hr !== null) {
        var h = hr.memoizedState;
        if (d = h.destroy, s !== null) {
          var y = h.deps;
          if (Zg(s, y)) {
            l.memoizedState = Fp(t, a, d, s);
            return;
          }
        }
      }
      Zt.flags |= e, l.memoizedState = Fp(pr | t, a, d, s);
    }
    function _m(e, t) {
      return (Zt.mode & Jt) !== Me ? jp(Co | ma | _d, jr, e, t) : jp(ma | _d, jr, e, t);
    }
    function Hp(e, t) {
      return Tm(ma, jr, e, t);
    }
    function uS(e, t) {
      return jp(ht, Bo, e, t);
    }
    function wm(e, t) {
      return Tm(ht, Bo, e, t);
    }
    function sS(e, t) {
      var a = ht;
      return a |= Eo, (Zt.mode & Jt) !== Me && (a |= Mr), jp(a, vr, e, t);
    }
    function bm(e, t) {
      return Tm(ht, vr, e, t);
    }
    function EC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || R("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function cS(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = ht;
      return l |= Eo, (Zt.mode & Jt) !== Me && (l |= Mr), jp(l, vr, EC.bind(null, t, e), i);
    }
    function xm(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Tm(ht, vr, EC.bind(null, t, e), i);
    }
    function Qb(e, t) {
    }
    var km = Qb;
    function fS(e, t) {
      var a = Vo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Dm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Zg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function dS(e, t) {
      var a = Vo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Om(e, t) {
      var a = Di(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Zg(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function pS(e) {
      var t = Vo();
      return t.memoizedState = e, e;
    }
    function CC(e) {
      var t = Di(), a = hr, i = a.memoizedState;
      return TC(t, i, e);
    }
    function RC(e) {
      var t = Di();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return TC(t, a, e);
    }
    function TC(e, t, a) {
      var i = !$d(ic);
      if (i) {
        if (!ve(a, t)) {
          var l = Yd();
          Zt.lanes = at(Zt.lanes, l), rv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Yp()), e.memoizedState = a, a;
    }
    function Gb(e, t, a) {
      var i = Sa();
      In(Us(i, ja)), e(!0);
      var l = Ap.transition;
      Ap.transition = {};
      var s = Ap.transition;
      Ap.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Ap.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function vS() {
      var e = Cm(!1), t = e[0], a = e[1], i = Gb.bind(null, a), l = Vo();
      return l.memoizedState = i, [t, i];
    }
    function _C() {
      var e = iS(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function wC() {
      var e = oS(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var bC = !1;
    function Kb() {
      return bC;
    }
    function hS() {
      var e = Vo(), t = Xm(), a = t.identifierPrefix, i;
      if (Fr()) {
        var l = pb();
        i = ":" + a + "R" + l;
        var s = zp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Yb++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Lm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Xb(e, t, a) {
      typeof arguments[3] == "function" && R("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (xC(e))
        kC(t, l);
      else {
        var s = nC(e, t, l, i);
        if (s !== null) {
          var d = wa();
          Er(s, e, i, d), DC(s, t, i);
        }
      }
      OC(e, i);
    }
    function Jb(e, t, a) {
      typeof arguments[3] == "function" && R("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (xC(e))
        kC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = ge.current, ge.current = no;
            try {
              var y = t.lastRenderedState, C = d(y, a);
              if (l.hasEagerState = !0, l.eagerState = C, ve(C, y)) {
                zb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ge.current = h;
            }
          }
        }
        var T = nC(e, t, l, i);
        if (T !== null) {
          var O = wa();
          Er(T, e, i, O), DC(T, t, i);
        }
      }
      OC(e, i);
    }
    function xC(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function kC(e, t) {
      Up = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function DC(e, t, a) {
      if (Id(a)) {
        var i = t.lanes;
        i = of(i, e.pendingLanes);
        var l = at(i, a);
        t.lanes = l, As(e, l);
      }
    }
    function OC(e, t, a) {
      _s(e, t);
    }
    var Nm = {
      readContext: rr,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: we
    }, LC = null, NC = null, MC = null, AC = null, $o = null, no = null, Mm = null;
    {
      var mS = function() {
        R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        R("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      LC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Vt(), qf(t), fS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Vt(), qf(t), _m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Vt(), qf(a), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Vt(), qf(t), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Vt(), qf(t), sS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Vt(), qf(t);
          var a = ge.current;
          ge.current = $o;
          try {
            return dS(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Vt();
          var i = ge.current;
          ge.current = $o;
          try {
            return tS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Vt(), lS(e);
        },
        useState: function(e) {
          q = "useState", Vt();
          var t = ge.current;
          ge.current = $o;
          try {
            return Cm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Vt(), pS(e);
        },
        useTransition: function() {
          return q = "useTransition", Vt(), vS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Vt(), aS(e, t, a);
        },
        useId: function() {
          return q = "useId", Vt(), hS();
        },
        unstable_isNewReconciler: we
      }, NC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", le(), fS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", le(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", le(), _m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", le(), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", le(), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", le(), sS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", le();
          var a = ge.current;
          ge.current = $o;
          try {
            return dS(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", le();
          var i = ge.current;
          ge.current = $o;
          try {
            return tS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", le(), lS(e);
        },
        useState: function(e) {
          q = "useState", le();
          var t = ge.current;
          ge.current = $o;
          try {
            return Cm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", le(), pS(e);
        },
        useTransition: function() {
          return q = "useTransition", le(), vS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", le(), aS(e, t, a);
        },
        useId: function() {
          return q = "useId", le(), hS();
        },
        unstable_isNewReconciler: we
      }, MC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", le(), Dm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", le(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", le(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", le(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", le(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", le(), bm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", le();
          var a = ge.current;
          ge.current = no;
          try {
            return Om(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", le();
          var i = ge.current;
          ge.current = no;
          try {
            return nS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", le(), Rm();
        },
        useState: function(e) {
          q = "useState", le();
          var t = ge.current;
          ge.current = no;
          try {
            return iS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", le(), km();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", le(), CC(e);
        },
        useTransition: function() {
          return q = "useTransition", le(), _C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", le(), Em(e, t);
        },
        useId: function() {
          return q = "useId", le(), Lm();
        },
        unstable_isNewReconciler: we
      }, AC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", le(), Dm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", le(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", le(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", le(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", le(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", le(), bm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", le();
          var a = ge.current;
          ge.current = Mm;
          try {
            return Om(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", le();
          var i = ge.current;
          ge.current = Mm;
          try {
            return rS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", le(), Rm();
        },
        useState: function(e) {
          q = "useState", le();
          var t = ge.current;
          ge.current = Mm;
          try {
            return oS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", le(), km();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", le(), RC(e);
        },
        useTransition: function() {
          return q = "useTransition", le(), wC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", le(), Em(e, t);
        },
        useId: function() {
          return q = "useId", le(), Lm();
        },
        unstable_isNewReconciler: we
      }, $o = {
        readContext: function(e) {
          return mS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), Vt(), fS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), Vt(), _m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), Vt(), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), Vt(), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), Vt(), sS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), Vt();
          var a = ge.current;
          ge.current = $o;
          try {
            return dS(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), Vt();
          var i = ge.current;
          ge.current = $o;
          try {
            return tS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), Vt(), lS(e);
        },
        useState: function(e) {
          q = "useState", Xe(), Vt();
          var t = ge.current;
          ge.current = $o;
          try {
            return Cm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), Vt(), pS(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), Vt(), vS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), Vt(), aS(e, t, a);
        },
        useId: function() {
          return q = "useId", Xe(), Vt(), hS();
        },
        unstable_isNewReconciler: we
      }, no = {
        readContext: function(e) {
          return mS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), le(), Dm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), le(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), le(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), le(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), le(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), le(), bm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), le();
          var a = ge.current;
          ge.current = no;
          try {
            return Om(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), le();
          var i = ge.current;
          ge.current = no;
          try {
            return nS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), le(), Rm();
        },
        useState: function(e) {
          q = "useState", Xe(), le();
          var t = ge.current;
          ge.current = no;
          try {
            return iS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), le(), km();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), le(), CC(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), le(), _C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), le(), Em(e, t);
        },
        useId: function() {
          return q = "useId", Xe(), le(), Lm();
        },
        unstable_isNewReconciler: we
      }, Mm = {
        readContext: function(e) {
          return mS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), le(), Dm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), le(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), le(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), le(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), le(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), le(), bm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), le();
          var a = ge.current;
          ge.current = no;
          try {
            return Om(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), le();
          var i = ge.current;
          ge.current = no;
          try {
            return rS(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), le(), Rm();
        },
        useState: function(e) {
          q = "useState", Xe(), le();
          var t = ge.current;
          ge.current = no;
          try {
            return oS(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), le(), km();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), le(), RC(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), le(), wC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), le(), Em(e, t);
        },
        useId: function() {
          return q = "useId", Xe(), le(), Lm();
        },
        unstable_isNewReconciler: we
      };
    }
    var Vu = p.unstable_now, UC = 0, Am = -1, Pp = -1, Um = -1, yS = !1, zm = !1;
    function zC() {
      return yS;
    }
    function Zb() {
      zm = !0;
    }
    function e1() {
      yS = !1, zm = !1;
    }
    function t1() {
      yS = zm, zm = !1;
    }
    function FC() {
      return UC;
    }
    function jC() {
      UC = Vu();
    }
    function gS(e) {
      Pp = Vu(), e.actualStartTime < 0 && (e.actualStartTime = Vu());
    }
    function HC(e) {
      Pp = -1;
    }
    function Fm(e, t) {
      if (Pp >= 0) {
        var a = Vu() - Pp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Pp = -1;
      }
    }
    function Io(e) {
      if (Am >= 0) {
        var t = Vu() - Am;
        Am = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ot:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function SS(e) {
      if (Um >= 0) {
        var t = Vu() - Um;
        Um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ot:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yo() {
      Am = Vu();
    }
    function ES() {
      Um = Vu();
    }
    function CS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ro(e, t) {
      if (e && e.defaultProps) {
        var a = et({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var RS = {}, TS, _S, wS, bS, xS, PC, jm, kS, DS, OS, Bp;
    {
      TS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), Bp = /* @__PURE__ */ new Set();
      var BC = /* @__PURE__ */ new Set();
      jm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          BC.has(a) || (BC.add(a), R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, PC = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          xS.has(a) || (xS.add(a), R("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(RS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(RS);
    }
    function LS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & tt) {
          It(!0);
          try {
            s = a(i, l);
          } finally {
            It(!1);
          }
        }
        PC(t, s);
      }
      var d = s == null ? l : et({}, l, s);
      if (e.memoizedState = d, e.lanes === I) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var NS = {
      isMounted: wd,
      enqueueSetState: function(e, t, a) {
        var i = fu(e), l = wa(), s = qu(i), d = Fl(l, s);
        d.payload = t, a != null && (jm(a, "setState"), d.callback = a);
        var h = ju(i, d, s);
        h !== null && (Er(h, i, s, l), pm(h, i, s)), _s(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fu(e), l = wa(), s = qu(i), d = Fl(l, s);
        d.tag = aC, d.payload = t, a != null && (jm(a, "replaceState"), d.callback = a);
        var h = ju(i, d, s);
        h !== null && (Er(h, i, s, l), pm(h, i, s)), _s(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fu(e), i = wa(), l = qu(a), s = Fl(i, l);
        s.tag = cm, t != null && (jm(t, "forceUpdate"), s.callback = t);
        var d = ju(a, s, l);
        d !== null && (Er(d, a, l, i), pm(d, a, l)), Hd(a, l);
      }
    };
    function VC(e, t, a, i, l, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & tt) {
            It(!0);
            try {
              y = h.shouldComponentUpdate(i, s, d);
            } finally {
              It(!1);
            }
          }
          y === void 0 && R("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ue(a, i) || !Ue(l, s) : !0;
    }
    function n1(e, t, a) {
      var i = e.stateNode;
      {
        var l = bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? R("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : R("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && R("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && R("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && R("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Me && (Bp.add(t), R(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Me && (Bp.add(t), R(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && R("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !DS.has(t) && (DS.add(t), R("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && R("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && R("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && R("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && R("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && R("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && R("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && R("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && R("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !wS.has(t) && (wS.add(t), R("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && R("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && R("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && R("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var h = i.state;
        h && (typeof h != "object" || rt(h)) && R("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && R("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function $C(e, t) {
      t.updater = NS, e.stateNode = t, ys(t, e), t._reactInternalInstance = RS;
    }
    function IC(e, t, a) {
      var i = !1, l = li, s = li, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === b && d._context === void 0
        );
        if (!h && !OS.has(t)) {
          OS.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === zi ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", R("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = rr(d);
      else {
        l = Af(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Uf(e, l) : li;
      }
      var T = new t(a, s);
      if (e.mode & tt) {
        It(!0);
        try {
          T = new t(a, s);
        } finally {
          It(!1);
        }
      }
      var O = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      $C(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var k = bt(t) || "Component";
          _S.has(k) || (_S.add(k), R("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, T.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var j = null, P = null, V = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? P = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (P = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), j !== null || P !== null || V !== null) {
            var de = bt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            bS.has(de) || (bS.add(de), R(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Fe, j !== null ? `
  ` + j : "", P !== null ? `
  ` + P : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && M0(e, l, s), T;
    }
    function r1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (R("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(e) || "Component"), NS.enqueueReplaceState(t, t.state, null));
    }
    function YC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = We(e) || "Component";
          TS.has(s) || (TS.add(s), R("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        NS.enqueueReplaceState(t, t.state, null);
      }
    }
    function MS(e, t, a, i) {
      n1(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = rr(s);
      else {
        var d = Af(e, t, !0);
        l.context = Uf(e, d);
      }
      {
        if (l.state === a) {
          var h = bt(t) || "Component";
          kS.has(h) || (kS.add(h), R("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & tt && eo.recordLegacyContextWarning(e, l), eo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (LS(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (r1(e, l), vm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = ht;
        C |= Eo, (e.mode & Jt) !== Me && (C |= Mr), e.flags |= C;
      }
    }
    function a1(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, h = t.contextType, y = li;
      if (typeof h == "object" && h !== null)
        y = rr(h);
      else {
        var C = Af(e, t, !0);
        y = Uf(e, C);
      }
      var T = t.getDerivedStateFromProps, O = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !O && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== y) && YC(e, l, a, y), oC();
      var k = e.memoizedState, j = l.state = k;
      if (vm(e, a, l, i), j = e.memoizedState, s === a && k === j && !Gh() && !hm()) {
        if (typeof l.componentDidMount == "function") {
          var P = ht;
          P |= Eo, (e.mode & Jt) !== Me && (P |= Mr), e.flags |= P;
        }
        return !1;
      }
      typeof T == "function" && (LS(e, t, T, a), j = e.memoizedState);
      var V = hm() || VC(e, t, s, a, k, j, y);
      if (V) {
        if (!O && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var de = ht;
          de |= Eo, (e.mode & Jt) !== Me && (de |= Mr), e.flags |= de;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Fe = ht;
          Fe |= Eo, (e.mode & Jt) !== Me && (Fe |= Mr), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return l.props = a, l.state = j, l.context = y, V;
    }
    function i1(e, t, a, i, l) {
      var s = t.stateNode;
      iC(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : ro(t.type, d);
      s.props = h;
      var y = t.pendingProps, C = s.context, T = a.contextType, O = li;
      if (typeof T == "object" && T !== null)
        O = rr(T);
      else {
        var k = Af(t, a, !0);
        O = Uf(t, k);
      }
      var j = a.getDerivedStateFromProps, P = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !P && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || C !== O) && YC(t, s, i, O), oC();
      var V = t.memoizedState, de = s.state = V;
      if (vm(t, i, s, l), de = t.memoizedState, d === y && V === de && !Gh() && !hm())
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof j == "function" && (LS(t, a, j, i), de = t.memoizedState);
      var Fe = hm() || VC(t, a, h, i, V, de, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      fe;
      return Fe ? (!P && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, O)), typeof s.componentDidUpdate == "function" && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = O, Fe;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: wt(t),
        digest: null
      };
    }
    function AS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function o1(e, t) {
      return !0;
    }
    function US(e, t) {
      try {
        var a = o1(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ie)
            return;
          console.error(i);
        }
        var h = l ? We(l) : null, y = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === ne)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = We(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var O = y + `
` + d + `

` + ("" + C);
        console.error(O);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var l1 = typeof WeakMap == "function" ? WeakMap : Map;
    function qC(e, t, a) {
      var i = Fl(Yt, a);
      i.tag = Pg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Zx(l), US(e, t);
      }, i;
    }
    function zS(e, t, a) {
      var i = Fl(Yt, a);
      i.tag = Pg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          rT(e), US(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        rT(e), US(e, t), typeof l != "function" && Xx(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (ra(e.lanes, Be) || R("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(e) || "Unknown"));
      }), i;
    }
    function WC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new l1(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = ek.bind(null, e, t, a);
        br && av(e, a), t.then(s, s);
      }
    }
    function u1(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function s1(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === Me && (a === Se || a === Pe || a === Ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function QC(e) {
      var t = e;
      do {
        if (t.tag === De && $b(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function GC(e, t, a, i, l) {
      if ((e.mode & dt) === Me) {
        if (e === t)
          e.flags |= za;
        else {
          if (e.flags |= ft, a.flags |= ni, a.flags &= -52805, a.tag === ie) {
            var s = a.alternate;
            if (s === null)
              a.tag = At;
            else {
              var d = Fl(Yt, Be);
              d.tag = cm, ju(a, d, Be);
            }
          }
          a.lanes = at(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= za, e.lanes = l, e;
    }
    function c1(e, t, a, i, l) {
      if (a.flags |= dl, br && av(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        s1(a), Fr() && a.mode & dt && P0();
        var d = QC(t);
        if (d !== null) {
          d.flags &= -257, GC(d, t, a, e, l), d.mode & dt && WC(e, s, l), u1(d, e, s);
          return;
        } else {
          if (!Vd(l)) {
            WC(e, s, l), hE();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Fr() && a.mode & dt) {
        P0();
        var y = QC(t);
        if (y !== null) {
          (y.flags & za) === Ne && (y.flags |= Sn), GC(y, t, a, e, l), kg(oc(i, a));
          return;
        }
      }
      i = oc(i, a), $x(i);
      var C = t;
      do {
        switch (C.tag) {
          case ne: {
            var T = i;
            C.flags |= za;
            var O = tr(l);
            C.lanes = at(C.lanes, O);
            var k = qC(C, T, O);
            $g(C, k);
            return;
          }
          case ie:
            var j = i, P = C.type, V = C.stateNode;
            if ((C.flags & ft) === Ne && (typeof P.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !QR(V))) {
              C.flags |= za;
              var de = tr(l);
              C.lanes = at(C.lanes, de);
              var Fe = zS(C, j, de);
              $g(C, Fe);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function f1() {
      return null;
    }
    var Vp = S.ReactCurrentOwner, ao = !1, FS, $p, jS, HS, PS, lc, BS, Hm, Ip;
    FS = {}, $p = {}, jS = {}, HS = {}, PS = {}, lc = !1, BS = {}, Hm = {}, Ip = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = J0(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function d1(e, t, a, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, a, i);
    }
    function KC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var d = a.render, h = t.ref, y, C;
      Bf(t, l), Fa(t);
      {
        if (Vp.current = t, Oa(!0), y = Wf(e, t, d, i, h, l), C = Qf(), t.mode & tt) {
          It(!0);
          try {
            y = Wf(e, t, d, i, h, l), C = Qf();
          } finally {
            It(!1);
          }
        }
        Oa(!1);
      }
      return wo(), e !== null && !ao ? (dC(e, t, l), jl(e, t, l)) : (Fr() && C && Rg(t), t.flags |= Wi, Ta(e, t, y, l), t.child);
    }
    function XC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (yk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = nd(s), t.tag = Ye, t.type = d, IS(t, s), JC(e, t, d, i, l);
        }
        {
          var h = s.propTypes;
          if (h && Ji(
            h,
            i,
            // Resolved props
            "prop",
            bt(s)
          ), a.defaultProps !== void 0) {
            var y = bt(s) || "Unknown";
            Ip[y] || (R("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", y), Ip[y] = !0);
          }
        }
        var C = bE(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var T = a.type, O = T.propTypes;
        O && Ji(
          O,
          i,
          // Resolved props
          "prop",
          bt(T)
        );
      }
      var k = e.child, j = KS(e, l);
      if (!j) {
        var P = k.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Ue, V(P, i) && e.ref === t.ref)
          return jl(e, t, l);
      }
      t.flags |= Wi;
      var de = dc(k, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function JC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var d = s, h = d._payload, y = d._init;
          try {
            s = y(h);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && Ji(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Ue(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ao = !1, t.pendingProps = i = T, KS(e, l))
            (e.flags & ni) !== Ne && (ao = !0);
          else return t.lanes = e.lanes, jl(e, t, l);
      }
      return VS(e, t, a, i, l);
    }
    function ZC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || L)
        if ((t.mode & dt) === Me) {
          var d = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Jm(t, a);
        } else if (ra(a, ga)) {
          var O = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var k = s !== null ? s.baseLanes : a;
          Jm(t, k);
        } else {
          var h = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = at(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = ga;
          var T = {
            baseLanes: y,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Jm(t, y), null;
        }
      else {
        var j;
        s !== null ? (j = at(s.baseLanes, a), t.memoizedState = null) : j = a, Jm(t, j);
      }
      return Ta(e, t, l, a), t.child;
    }
    function p1(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function v1(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function h1(e, t, a) {
      {
        t.flags |= ht;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ta(e, t, s, a), t.child;
    }
    function eR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Un, t.flags |= Ss);
    }
    function VS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var d;
      {
        var h = Af(t, a, !0);
        d = Uf(t, h);
      }
      var y, C;
      Bf(t, l), Fa(t);
      {
        if (Vp.current = t, Oa(!0), y = Wf(e, t, a, i, d, l), C = Qf(), t.mode & tt) {
          It(!0);
          try {
            y = Wf(e, t, a, i, d, l), C = Qf();
          } finally {
            It(!1);
          }
        }
        Oa(!1);
      }
      return wo(), e !== null && !ao ? (dC(e, t, l), jl(e, t, l)) : (Fr() && C && Rg(t), t.flags |= Wi, Ta(e, t, y, l), t.child);
    }
    function tR(e, t, a, i, l) {
      {
        switch (Nk(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= za;
            var C = new Error("Simulated error coming from DevTools"), T = tr(l);
            t.lanes = at(t.lanes, T);
            var O = zS(t, oc(C, t), T);
            $g(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && Ji(
            k,
            i,
            // Resolved props
            "prop",
            bt(a)
          );
        }
      }
      var j;
      Po(a) ? (j = !0, Xh(t)) : j = !1, Bf(t, l);
      var P = t.stateNode, V;
      P === null ? (Bm(e, t), IC(t, a, i), MS(t, a, i, l), V = !0) : e === null ? V = a1(t, a, i, l) : V = i1(e, t, a, i, l);
      var de = $S(e, t, a, V, j, l);
      {
        var Fe = t.stateNode;
        V && Fe.props !== i && (lc || R("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(t) || "a component"), lc = !0);
      }
      return de;
    }
    function $S(e, t, a, i, l, s) {
      eR(e, t);
      var d = (t.flags & ft) !== Ne;
      if (!i && !d)
        return l && z0(t, a, !1), jl(e, t, s);
      var h = t.stateNode;
      Vp.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, HC();
      else {
        Fa(t);
        {
          if (Oa(!0), y = h.render(), t.mode & tt) {
            It(!0);
            try {
              h.render();
            } finally {
              It(!1);
            }
          }
          Oa(!1);
        }
        wo();
      }
      return t.flags |= Wi, e !== null && d ? d1(e, t, y, s) : Ta(e, t, y, s), t.memoizedState = h.state, l && z0(t, a, !0), t.child;
    }
    function nR(e) {
      var t = e.stateNode;
      t.pendingContext ? A0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && A0(e, t.context, !1), Ig(e, t.containerInfo);
    }
    function m1(e, t, a) {
      if (nR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      iC(e, t), vm(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (l.isDehydrated) {
        var y = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Sn) {
          var T = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return rR(e, t, h, a, T);
        } else if (h !== s) {
          var O = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return rR(e, t, h, a, O);
        } else {
          Sb(t);
          var k = J0(t, null, h, a);
          t.child = k;
          for (var j = k; j; )
            j.flags = j.flags & -3 | zn, j = j.sibling;
        }
      } else {
        if (jf(), h === s)
          return jl(e, t, a);
        Ta(e, t, h, a);
      }
      return t.child;
    }
    function rR(e, t, a, i, l) {
      return jf(), kg(l), t.flags |= Sn, Ta(e, t, a, i), t.child;
    }
    function y1(e, t, a) {
      sC(t), e === null && xg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, h = ug(i, l);
      return h ? d = null : s !== null && ug(i, s) && (t.flags |= Xt), eR(e, t), Ta(e, t, d, a), t.child;
    }
    function g1(e, t) {
      return e === null && xg(t), null;
    }
    function S1(e, t, a, i) {
      Bm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, h = s._init, y = h(d);
      t.type = y;
      var C = t.tag = gk(y), T = ro(y, l), O;
      switch (C) {
        case Se:
          return IS(t, y), t.type = y = nd(y), O = VS(null, t, y, T, i), O;
        case ie:
          return t.type = y = EE(y), O = tR(null, t, y, T, i), O;
        case Pe:
          return t.type = y = CE(y), O = KC(null, t, y, T, i), O;
        case pt: {
          if (t.type !== t.elementType) {
            var k = y.propTypes;
            k && Ji(
              k,
              T,
              // Resolved for outer only
              "prop",
              bt(y)
            );
          }
          return O = XC(
            null,
            t,
            y,
            ro(y.type, T),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var j = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Ke && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function E1(e, t, a, i, l) {
      Bm(e, t), t.tag = ie;
      var s;
      return Po(a) ? (s = !0, Xh(t)) : s = !1, Bf(t, l), IC(t, a, i), MS(t, a, i, l), $S(null, t, a, !0, s, l);
    }
    function C1(e, t, a, i) {
      Bm(e, t);
      var l = t.pendingProps, s;
      {
        var d = Af(t, a, !1);
        s = Uf(t, d);
      }
      Bf(t, i);
      var h, y;
      Fa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = bt(a) || "Unknown";
          FS[C] || (R("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), FS[C] = !0);
        }
        t.mode & tt && eo.recordLegacyContextWarning(t, null), Oa(!0), Vp.current = t, h = Wf(null, t, a, l, s, i), y = Qf(), Oa(!1);
      }
      if (wo(), t.flags |= Wi, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var T = bt(a) || "Unknown";
        $p[T] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), $p[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var O = bt(a) || "Unknown";
          $p[O] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), $p[O] = !0);
        }
        t.tag = ie, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Po(a) ? (k = !0, Xh(t)) : k = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Vg(t), $C(t, h), MS(t, a, l, i), $S(null, t, a, !0, k, i);
      } else {
        if (t.tag = Se, t.mode & tt) {
          It(!0);
          try {
            h = Wf(null, t, a, l, s, i), y = Qf();
          } finally {
            It(!1);
          }
        }
        return Fr() && y && Rg(t), Ta(null, t, h, i), IS(t, a), t.child;
      }
    }
    function IS(e, t) {
      {
        if (t && t.childContextTypes && R("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), PS[l] || (PS[l] = !0, R("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = bt(t) || "Unknown";
          Ip[d] || (R("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), Ip[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = bt(t) || "Unknown";
          HS[h] || (R("%s: Function components do not support getDerivedStateFromProps.", h), HS[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = bt(t) || "Unknown";
          jS[y] || (R("%s: Function components do not support contextType.", y), jS[y] = !0);
        }
      }
    }
    var YS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jn
    };
    function qS(e) {
      return {
        baseLanes: e,
        cachePool: f1(),
        transitions: null
      };
    }
    function R1(e, t) {
      var a = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function T1(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Wg(e, Mp);
    }
    function _1(e, t) {
      return Ms(e.childLanes, t);
    }
    function aR(e, t, a) {
      var i = t.pendingProps;
      Mk(t) && (t.flags |= ft);
      var l = to.current, s = !1, d = (t.flags & ft) !== Ne;
      if (d || T1(l, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l = Vb(l, fC)), l = $f(l), Pu(t, l), e === null) {
        xg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return D1(t, y);
        }
        var C = i.children, T = i.fallback;
        if (s) {
          var O = w1(t, C, T, a), k = t.child;
          return k.memoizedState = qS(a), t.memoizedState = YS, O;
        } else
          return WS(t, C);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var P = j.dehydrated;
          if (P !== null)
            return O1(e, t, d, i, P, j, a);
        }
        if (s) {
          var V = i.fallback, de = i.children, Fe = x1(e, t, de, V, a), Le = t.child, kt = e.child.memoizedState;
          return Le.memoizedState = kt === null ? qS(a) : R1(kt, a), Le.childLanes = _1(e, a), t.memoizedState = YS, Fe;
        } else {
          var gt = i.children, A = b1(e, t, gt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function WS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = QS(l, i);
      return s.return = e, e.child = s, s;
    }
    function w1(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, y;
      return (l & dt) === Me && s !== null ? (h = s, h.childLanes = I, h.pendingProps = d, e.mode & Ct && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = Qu(a, l, i, null)) : (h = QS(d, l), y = Qu(a, l, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function QS(e, t, a) {
      return iT(e, t, I, null);
    }
    function iR(e, t) {
      return dc(e, t);
    }
    function b1(e, t, a, i) {
      var l = e.child, s = l.sibling, d = iR(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === Me && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Jr) : h.push(s);
      }
      return t.child = d, d;
    }
    function x1(e, t, a, i, l) {
      var s = t.mode, d = e.child, h = d.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & dt) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        C = T, C.childLanes = I, C.pendingProps = y, t.mode & Ct && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = d.selfBaseDuration, C.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        C = iR(d, y), C.subtreeFlags = d.subtreeFlags & Fn;
      var O;
      return h !== null ? O = dc(h, i) : (O = Qu(i, s, l, null), O.flags |= An), O.return = t, C.return = t, C.sibling = O, t.child = C, O;
    }
    function Pm(e, t, a, i) {
      i !== null && kg(i), Hf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = WS(t, s);
      return d.flags |= An, t.memoizedState = null, d;
    }
    function k1(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, h = QS(d, s), y = Qu(i, s, l, null);
      return y.flags |= An, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & dt) !== Me && Hf(t, e.child, null, l), y;
    }
    function D1(e, t, a) {
      return (e.mode & dt) === Me ? (R("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : dg(t) ? e.lanes = er : e.lanes = ga, null;
    }
    function O1(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & Sn) {
          t.flags &= -257;
          var A = AS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Pm(e, t, d, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var $ = i.children, U = i.fallback, Z = k1(e, t, $, U, d), Ee = t.child;
          return Ee.memoizedState = qS(d), t.memoizedState = YS, Z;
        }
      else {
        if (yb(), (t.mode & dt) === Me)
          return Pm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (dg(l)) {
          var h, y, C;
          {
            var T = Aw(l);
            h = T.digest, y = T.message, C = T.stack;
          }
          var O;
          y ? O = new Error(y) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = AS(O, h, C);
          return Pm(e, t, d, k);
        }
        var j = ra(d, e.childLanes);
        if (ao || j) {
          var P = Xm();
          if (P !== null) {
            var V = sf(P, d);
            if (V !== jn && V !== s.retryLane) {
              s.retryLane = V;
              var de = Yt;
              $a(e, V), Er(P, e, V, de);
            }
          }
          hE();
          var Fe = AS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Pm(e, t, d, Fe);
        } else if (k0(l)) {
          t.flags |= ft, t.child = e.child;
          var Le = tk.bind(null, e);
          return Uw(l, Le), null;
        } else {
          Eb(t, l, s.treeContext);
          var kt = i.children, gt = WS(t, kt);
          return gt.flags |= zn, gt;
        }
      }
    }
    function oR(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), jg(e.return, t, a);
    }
    function L1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var l = i.memoizedState;
          l !== null && oR(i, a, e);
        } else if (i.tag === qt)
          oR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function N1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function M1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !BS[e])
        if (BS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              R('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              R('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              R('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          R('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function A1(e, t) {
      e !== void 0 && !Hm[e] && (e !== "collapsed" && e !== "hidden" ? (Hm[e] = !0, R('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Hm[e] = !0, R('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function lR(e, t) {
      {
        var a = rt(e), i = !a && typeof vn(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return R("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function U1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!lR(e[a], a))
              return;
        } else {
          var i = vn(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!lR(s.value, d))
                  return;
                d++;
              }
          } else
            R('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function GS(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function uR(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      M1(l), A1(s, l), U1(d, l), Ta(e, t, d, a);
      var h = to.current, y = Wg(h, Mp);
      if (y)
        h = Qg(h, Mp), t.flags |= ft;
      else {
        var C = e !== null && (e.flags & ft) !== Ne;
        C && L1(t, t.child, a), h = $f(h);
      }
      if (Pu(t, h), (t.mode & dt) === Me)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = N1(t.child), O;
            T === null ? (O = t.child, t.child = null) : (O = T.sibling, T.sibling = null), GS(
              t,
              !1,
              // isBackwards
              O,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var P = j.alternate;
              if (P !== null && gm(P) === null) {
                t.child = j;
                break;
              }
              var V = j.sibling;
              j.sibling = k, k = j, j = V;
            }
            GS(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            GS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function z1(e, t, a) {
      Ig(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var sR = !1;
    function F1(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || sR || (sR = !0, R("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && Ji(y, s, "prop", "Context.Provider");
      }
      if (tC(t, l, h), d !== null) {
        var C = d.value;
        if (ve(C, h)) {
          if (d.children === s.children && !Gh())
            return jl(e, t, a);
        } else
          Mb(t, l, a);
      }
      var T = s.children;
      return Ta(e, t, T, a), t.child;
    }
    var cR = !1;
    function j1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (cR || (cR = !0, R("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && R("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var d = rr(i);
      Fa(t);
      var h;
      return Vp.current = t, Oa(!0), h = s(d), Oa(!1), wo(), t.flags |= Wi, Ta(e, t, h, a), t.child;
    }
    function Yp() {
      ao = !0;
    }
    function Bm(e, t) {
      (t.mode & dt) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= An);
    }
    function jl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), HC(), rv(t.lanes), ra(a, t.childLanes) ? (Lb(e, t), t.child) : null;
    }
    function H1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Jr) : s.push(e), a.flags |= An, a;
      }
    }
    function KS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function P1(e, t, a) {
      switch (t.tag) {
        case ne:
          nR(t), t.stateNode, jf();
          break;
        case te:
          sC(t);
          break;
        case ie: {
          var i = t.type;
          Po(i) && Xh(t);
          break;
        }
        case _e:
          Ig(t, t.stateNode.containerInfo);
          break;
        case nt: {
          var l = t.memoizedProps.value, s = t.type._context;
          tC(t, s, l);
          break;
        }
        case Ot:
          {
            var d = ra(a, t.childLanes);
            d && (t.flags |= ht);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Pu(t, $f(to.current)), t.flags |= ft, null;
            var C = t.child, T = C.childLanes;
            if (ra(a, T))
              return aR(e, t, a);
            Pu(t, $f(to.current));
            var O = jl(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Pu(t, $f(to.current));
          break;
        }
        case qt: {
          var k = (e.flags & ft) !== Ne, j = ra(a, t.childLanes);
          if (k) {
            if (j)
              return uR(e, t, a);
            t.flags |= ft;
          }
          var P = t.memoizedState;
          if (P !== null && (P.rendering = null, P.tail = null, P.lastEffect = null), Pu(t, to.current), j)
            break;
          return null;
        }
        case He:
        case Ht:
          return t.lanes = I, ZC(e, t, a);
      }
      return jl(e, t, a);
    }
    function fR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return H1(e, t, bE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Gh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ao = !0;
        else {
          var s = KS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ne)
            return ao = !1, P1(e, t, a);
          (e.flags & ni) !== Ne ? ao = !0 : ao = !1;
        }
      } else if (ao = !1, Fr() && fb(t)) {
        var d = t.index, h = db();
        H0(t, h, d);
      }
      switch (t.lanes = I, t.tag) {
        case Oe:
          return C1(e, t, t.type, a);
        case Cn: {
          var y = t.elementType;
          return S1(e, t, y, a);
        }
        case Se: {
          var C = t.type, T = t.pendingProps, O = t.elementType === C ? T : ro(C, T);
          return VS(e, t, C, O, a);
        }
        case ie: {
          var k = t.type, j = t.pendingProps, P = t.elementType === k ? j : ro(k, j);
          return tR(e, t, k, P, a);
        }
        case ne:
          return m1(e, t, a);
        case te:
          return y1(e, t, a);
        case Ce:
          return g1(e, t);
        case De:
          return aR(e, t, a);
        case _e:
          return z1(e, t, a);
        case Pe: {
          var V = t.type, de = t.pendingProps, Fe = t.elementType === V ? de : ro(V, de);
          return KC(e, t, V, Fe, a);
        }
        case Ve:
          return p1(e, t, a);
        case jt:
          return v1(e, t, a);
        case Ot:
          return h1(e, t, a);
        case nt:
          return F1(e, t, a);
        case Tt:
          return j1(e, t, a);
        case pt: {
          var Le = t.type, kt = t.pendingProps, gt = ro(Le, kt);
          if (t.type !== t.elementType) {
            var A = Le.propTypes;
            A && Ji(
              A,
              gt,
              // Resolved for outer only
              "prop",
              bt(Le)
            );
          }
          return gt = ro(Le.type, gt), XC(e, t, Le, gt, a);
        }
        case Ye:
          return JC(e, t, t.type, t.pendingProps, a);
        case At: {
          var $ = t.type, U = t.pendingProps, Z = t.elementType === $ ? U : ro($, U);
          return E1(e, t, $, Z, a);
        }
        case qt:
          return uR(e, t, a);
        case St:
          break;
        case He:
          return ZC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Gf(e) {
      e.flags |= ht;
    }
    function dR(e) {
      e.flags |= Un, e.flags |= Ss;
    }
    var pR, XS, vR, hR;
    pR = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === te || l.tag === Ce)
          uw(e, l.stateNode);
        else if (l.tag !== _e) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, XS = function(e, t) {
    }, vR = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, h = Yg(), y = cw(d, a, s, i, l, h);
        t.updateQueue = y, y && Gf(t);
      }
    }, hR = function(e, t, a, i) {
      a !== i && Gf(t);
    };
    function qp(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Ne;
      if (t) {
        if ((e.mode & Ct) !== Me) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = at(a, at(C.lanes, C.childLanes)), i |= C.subtreeFlags & Fn, i |= C.flags & Fn, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = at(a, at(T.lanes, T.childLanes)), i |= T.subtreeFlags & Fn, i |= T.flags & Fn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ct) !== Me) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = at(a, at(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = at(a, at(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function B1(e, t, a) {
      if (wb() && (t.mode & dt) !== Me && (t.flags & ft) === Ne)
        return q0(t), jf(), t.flags |= Sn | dl | za, !1;
      var i = nm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Tb(t), Hr(t), (t.mode & Ct) !== Me) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & ft) === Ne && (t.memoizedState = null), t.flags |= ht, Hr(t), (t.mode & Ct) !== Me) {
            var d = a !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return W0(), !0;
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      switch (Tg(t), t.tag) {
        case Oe:
        case Cn:
        case Ye:
        case Se:
        case Pe:
        case Ve:
        case jt:
        case Ot:
        case Tt:
        case pt:
          return Hr(t), null;
        case ie: {
          var l = t.type;
          return Po(l) && Kh(t), Hr(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if (Vf(t), Sg(t), Kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = nm(t);
            if (d)
              Gf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Sn) !== Ne) && (t.flags |= Ua, W0());
            }
          }
          return XS(e, t), Hr(t), null;
        }
        case te: {
          qg(t);
          var y = uC(), C = t.type;
          if (e !== null && t.stateNode != null)
            vR(e, t, C, i, y), e.ref !== t.ref && dR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var T = Yg(), O = nm(t);
            if (O)
              Cb(t, y, T) && Gf(t);
            else {
              var k = lw(C, i, y, T, t);
              pR(k, t, !1, !1), t.stateNode = k, sw(k, C, i, y) && Gf(t);
            }
            t.ref !== null && dR(t);
          }
          return Hr(t), null;
        }
        case Ce: {
          var j = i;
          if (e && t.stateNode != null) {
            var P = e.memoizedProps;
            hR(e, t, P, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = uC(), de = Yg(), Fe = nm(t);
            Fe ? Rb(t) && Gf(t) : t.stateNode = fw(j, V, de, t);
          }
          return Hr(t), null;
        }
        case De: {
          If(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = B1(e, t, Le);
            if (!kt)
              return t.flags & za ? t : null;
          }
          if ((t.flags & ft) !== Ne)
            return t.lanes = a, (t.mode & Ct) !== Me && CS(t), t;
          var gt = Le !== null, A = e !== null && e.memoizedState !== null;
          if (gt !== A && gt) {
            var $ = t.child;
            if ($.flags |= Si, (t.mode & dt) !== Me) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              U || Wg(to.current, fC) ? Vx() : hE();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= ht), Hr(t), (t.mode & Ct) !== Me && gt) {
            var Ee = t.child;
            Ee !== null && (t.treeBaseDuration -= Ee.treeBaseDuration);
          }
          return null;
        }
        case _e:
          return Vf(t), XS(e, t), e === null && ab(t.stateNode.containerInfo), Hr(t), null;
        case nt:
          var he = t.type._context;
          return Fg(he, t), Hr(t), null;
        case At: {
          var Ie = t.type;
          return Po(Ie) && Kh(t), Hr(t), null;
        }
        case qt: {
          If(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Hr(t), null;
          var en = (t.flags & ft) !== Ne, Nt = Ze.rendering;
          if (Nt === null)
            if (en)
              qp(Ze, !1);
            else {
              var Wn = Ix() && (e === null || (e.flags & ft) === Ne);
              if (!Wn)
                for (var Mt = t.child; Mt !== null; ) {
                  var Pn = gm(Mt);
                  if (Pn !== null) {
                    en = !0, t.flags |= ft, qp(Ze, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= ht), t.subtreeFlags = Ne, Nb(t, a), Pu(t, Qg(to.current, Mp)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              Ze.tail !== null && _n() > FR() && (t.flags |= ft, en = !0, qp(Ze, !1), t.lanes = eh);
            }
          else {
            if (!en) {
              var Ir = gm(Nt);
              if (Ir !== null) {
                t.flags |= ft, en = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= ht), qp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Nt.alternate && !Fr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - Ze.renderingStartTime > FR() && a !== ga && (t.flags |= ft, en = !0, qp(Ze, !1), t.lanes = eh);
            }
            if (Ze.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var ba = Ze.last;
              ba !== null ? ba.sibling = Nt : t.child = Nt, Ze.last = Nt;
            }
          }
          if (Ze.tail !== null) {
            var xa = Ze.tail;
            Ze.rendering = xa, Ze.tail = xa.sibling, Ze.renderingStartTime = _n(), xa.sibling = null;
            var ca = to.current;
            return en ? ca = Qg(ca, Mp) : ca = $f(ca), Pu(t, ca), xa;
          }
          return Hr(t), null;
        }
        case St:
          break;
        case He:
        case Ht: {
          vE(t);
          var $l = t.memoizedState, rd = $l !== null;
          if (e !== null) {
            var uv = e.memoizedState, Qo = uv !== null;
            Qo !== rd && (t.flags |= Si);
          }
          return !rd || (t.mode & dt) === Me ? Hr(t) : ra(Wo, ga) && (Hr(t), t.subtreeFlags & (An | ht) && (t.flags |= Si)), null;
        }
        case yt:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function V1(e, t, a) {
      switch (Tg(t), t.tag) {
        case ie: {
          var i = t.type;
          Po(i) && Kh(t);
          var l = t.flags;
          return l & za ? (t.flags = l & -65537 | ft, (t.mode & Ct) !== Me && CS(t), t) : null;
        }
        case ne: {
          t.stateNode, Vf(t), Sg(t), Kg();
          var s = t.flags;
          return (s & za) !== Ne && (s & ft) === Ne ? (t.flags = s & -65537 | ft, t) : null;
        }
        case te:
          return qg(t), null;
        case De: {
          If(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var h = t.flags;
          return h & za ? (t.flags = h & -65537 | ft, (t.mode & Ct) !== Me && CS(t), t) : null;
        }
        case qt:
          return If(t), null;
        case _e:
          return Vf(t), null;
        case nt:
          var y = t.type._context;
          return Fg(y, t), null;
        case He:
        case Ht:
          return vE(t), null;
        case yt:
          return null;
        default:
          return null;
      }
    }
    function yR(e, t, a) {
      switch (Tg(t), t.tag) {
        case ie: {
          var i = t.type.childContextTypes;
          i != null && Kh(t);
          break;
        }
        case ne: {
          t.stateNode, Vf(t), Sg(t), Kg();
          break;
        }
        case te: {
          qg(t);
          break;
        }
        case _e:
          Vf(t);
          break;
        case De:
          If(t);
          break;
        case qt:
          If(t);
          break;
        case nt:
          var l = t.type._context;
          Fg(l, t);
          break;
        case He:
        case Ht:
          vE(t);
          break;
      }
    }
    var gR = null;
    gR = /* @__PURE__ */ new Set();
    var Vm = !1, Pr = !1, $1 = typeof WeakSet == "function" ? WeakSet : Set, xe = null, Kf = null, Xf = null;
    function I1(e) {
      Aa(null, function() {
        throw e;
      }), Td();
    }
    var Y1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ct)
        try {
          Yo(), t.componentWillUnmount();
        } finally {
          Io(e);
        }
      else
        t.componentWillUnmount();
    };
    function SR(e, t) {
      try {
        $u(vr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function JS(e, t, a) {
      try {
        Y1(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function q1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function ER(e, t) {
      try {
        RR(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ge && st && e.mode & Ct)
              try {
                Yo(), i = a(null);
              } finally {
                Io(e);
              }
            else
              i = a(null);
          } catch (l) {
            dn(e, t, l);
          }
          typeof i == "function" && R("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          a.current = null;
    }
    function $m(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var CR = !1;
    function W1(e, t) {
      iw(e.containerInfo), xe = t, Q1();
      var a = CR;
      return CR = !1, a;
    }
    function Q1() {
      for (; xe !== null; ) {
        var e = xe, t = e.child;
        (e.subtreeFlags & Ro) !== Ne && t !== null ? (t.return = e, xe = t) : G1();
      }
    }
    function G1() {
      for (; xe !== null; ) {
        var e = xe;
        Qt(e);
        try {
          K1(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        gn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, xe = t;
          return;
        }
        xe = e.return;
      }
    }
    function K1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ne) {
        switch (Qt(e), e.tag) {
          case Se:
          case Pe:
          case Ye:
            break;
          case ie: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && R("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(e) || "instance"), s.state !== e.memoizedState && R("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ro(e.type, i), l);
              {
                var h = gR;
                d === void 0 && !h.has(e.type) && (h.add(e.type), R("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case ne: {
            {
              var y = e.stateNode;
              Ow(y.containerInfo);
            }
            break;
          }
          case te:
          case Ce:
          case _e:
          case At:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
      }
    }
    function io(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & jr) !== Ia ? bo(t) : (e & vr) !== Ia && Ud(t), (e & Bo) !== Ia && iv(!0), $m(t, a, h), (e & Bo) !== Ia && iv(!1), (e & jr) !== Ia ? Uc() : (e & vr) !== Ia && hu());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function $u(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ia ? Jv(t) : (e & vr) !== Ia && Zv(t);
            var d = s.create;
            (e & Bo) !== Ia && iv(!0), s.destroy = d(), (e & Bo) !== Ia && iv(!1), (e & jr) !== Ia ? Gi() : (e & vr) !== Ia && zc();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & vr) !== Ne ? y = "useLayoutEffect" : (s.tag & Bo) !== Ne ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                h === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + h, R("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function X1(e, t) {
      if ((t.flags & ht) !== Ne)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = FC(), h = t.alternate === null ? "mount" : "update";
            zC() && (h = "nested-update"), typeof s == "function" && s(l, h, a, d);
            var y = t.return;
            e: for (; y !== null; ) {
              switch (y.tag) {
                case ne:
                  var C = y.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Ot:
                  var T = y.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              y = y.return;
            }
            break;
          }
        }
    }
    function J1(e, t, a, i) {
      if ((a.flags & To) !== Ne)
        switch (a.tag) {
          case Se:
          case Pe:
          case Ye: {
            if (!Pr)
              if (a.mode & Ct)
                try {
                  Yo(), $u(vr | pr, a);
                } finally {
                  Io(a);
                }
              else
                $u(vr | pr, a);
            break;
          }
          case ie: {
            var l = a.stateNode;
            if (a.flags & ht && !Pr)
              if (t === null)
                if (a.type === a.elementType && !lc && (l.props !== a.memoizedProps && R("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), l.state !== a.memoizedState && R("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Ct)
                  try {
                    Yo(), l.componentDidMount();
                  } finally {
                    Io(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ro(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !lc && (l.props !== a.memoizedProps && R("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), l.state !== a.memoizedState && R("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Ct)
                  try {
                    Yo(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Io(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !lc && (l.props !== a.memoizedProps && R("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), l.state !== a.memoizedState && R("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), lC(a, h, l));
            break;
          }
          case ne: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    C = a.child.stateNode;
                    break;
                  case ie:
                    C = a.child.stateNode;
                    break;
                }
              lC(a, y, C);
            }
            break;
          }
          case te: {
            var T = a.stateNode;
            if (t === null && a.flags & ht) {
              var O = a.type, k = a.memoizedProps;
              mw(T, O, k);
            }
            break;
          }
          case Ce:
            break;
          case _e:
            break;
          case Ot: {
            {
              var j = a.memoizedProps, P = j.onCommit, V = j.onRender, de = a.stateNode.effectDuration, Fe = FC(), Le = t === null ? "mount" : "update";
              zC() && (Le = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof P == "function" && P(a.memoizedProps.id, Le, de, Fe), Gx(a);
                var kt = a.return;
                e: for (; kt !== null; ) {
                  switch (kt.tag) {
                    case ne:
                      var gt = kt.stateNode;
                      gt.effectDuration += de;
                      break e;
                    case Ot:
                      var A = kt.stateNode;
                      A.effectDuration += de;
                      break e;
                  }
                  kt = kt.return;
                }
              }
            }
            break;
          }
          case De: {
            ox(e, a);
            break;
          }
          case qt:
          case At:
          case St:
          case He:
          case Ht:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Un && RR(a);
    }
    function Z1(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          if (e.mode & Ct)
            try {
              Yo(), SR(e, e.return);
            } finally {
              Io(e);
            }
          else
            SR(e, e.return);
          break;
        }
        case ie: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && q1(e, e.return, t), ER(e, e.return);
          break;
        }
        case te: {
          ER(e, e.return);
          break;
        }
      }
    }
    function ex(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? bw(l) : kw(i.stateNode, i.memoizedProps);
            } catch (d) {
              dn(e, e.return, d);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xw(s) : Dw(s, i.memoizedProps);
            } catch (d) {
              dn(e, e.return, d);
            }
        } else if (!((i.tag === He || i.tag === Ht) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function RR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case te:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Ct)
            try {
              Yo(), l = t(i);
            } finally {
              Io(e);
            }
          else
            l = t(i);
          typeof l == "function" && R("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          t.hasOwnProperty("current") || R("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", We(e)), t.current = i;
      }
    }
    function tx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function TR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, TR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && lb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function nx(e) {
      for (var t = e.return; t !== null; ) {
        if (_R(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _R(e) {
      return e.tag === te || e.tag === ne || e.tag === _e;
    }
    function wR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || _R(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== Ce && t.tag !== pn; ) {
          if (t.flags & An || t.child === null || t.tag === _e)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & An))
          return t.stateNode;
      }
    }
    function rx(e) {
      var t = nx(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & Xt && (x0(a), t.flags &= -33);
          var i = wR(e);
          eE(e, i, a);
          break;
        }
        case ne:
        case _e: {
          var l = t.stateNode.containerInfo, s = wR(e);
          ZS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ZS(e, t, a) {
      var i = e.tag, l = i === te || i === Ce;
      if (l) {
        var s = e.stateNode;
        t ? Rw(a, s, t) : Ew(a, s);
      } else if (i !== _e) {
        var d = e.child;
        if (d !== null) {
          ZS(d, t, a);
          for (var h = d.sibling; h !== null; )
            ZS(h, t, a), h = h.sibling;
        }
      }
    }
    function eE(e, t, a) {
      var i = e.tag, l = i === te || i === Ce;
      if (l) {
        var s = e.stateNode;
        t ? Cw(a, s, t) : Sw(a, s);
      } else if (i !== _e) {
        var d = e.child;
        if (d !== null) {
          eE(d, t, a);
          for (var h = d.sibling; h !== null; )
            eE(h, t, a), h = h.sibling;
        }
      }
    }
    var Br = null, oo = !1;
    function ax(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case te: {
              Br = i.stateNode, oo = !1;
              break e;
            }
            case ne: {
              Br = i.stateNode.containerInfo, oo = !0;
              break e;
            }
            case _e: {
              Br = i.stateNode.containerInfo, oo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        bR(e, t, a), Br = null, oo = !1;
      }
      tx(a);
    }
    function Iu(e, t, a) {
      for (var i = a.child; i !== null; )
        bR(e, t, i), i = i.sibling;
    }
    function bR(e, t, a) {
      switch (vu(a), a.tag) {
        case te:
          Pr || Jf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ce: {
          {
            var i = Br, l = oo;
            Br = null, Iu(e, t, a), Br = i, oo = l, Br !== null && (oo ? _w(Br, a.stateNode) : Tw(Br, a.stateNode));
          }
          return;
        }
        case pn: {
          Br !== null && (oo ? ww(Br, a.stateNode) : fg(Br, a.stateNode));
          return;
        }
        case _e: {
          {
            var s = Br, d = oo;
            Br = a.stateNode.containerInfo, oo = !0, Iu(e, t, a), Br = s, oo = d;
          }
          return;
        }
        case Se:
        case Pe:
        case pt:
        case Ye: {
          if (!Pr) {
            var h = a.updateQueue;
            if (h !== null) {
              var y = h.lastEffect;
              if (y !== null) {
                var C = y.next, T = C;
                do {
                  var O = T, k = O.destroy, j = O.tag;
                  k !== void 0 && ((j & Bo) !== Ia ? $m(a, t, k) : (j & vr) !== Ia && (Ud(a), a.mode & Ct ? (Yo(), $m(a, t, k), Io(a)) : $m(a, t, k), hu())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Iu(e, t, a);
          return;
        }
        case ie: {
          if (!Pr) {
            Jf(a, t);
            var P = a.stateNode;
            typeof P.componentWillUnmount == "function" && JS(a, t, P);
          }
          Iu(e, t, a);
          return;
        }
        case St: {
          Iu(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
          ) {
            var V = Pr;
            Pr = V || a.memoizedState !== null, Iu(e, t, a), Pr = V;
          } else
            Iu(e, t, a);
          break;
        }
        default: {
          Iu(e, t, a);
          return;
        }
      }
    }
    function ix(e) {
      e.memoizedState;
    }
    function ox(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && Iw(s);
          }
        }
      }
    }
    function xR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $1()), t.forEach(function(i) {
          var l = nk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), br)
              if (Kf !== null && Xf !== null)
                av(Xf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function lx(e, t, a) {
      Kf = a, Xf = e, Qt(t), kR(t, e), Qt(t), Kf = null, Xf = null;
    }
    function lo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            ax(e, t, s);
          } catch (y) {
            dn(s, t, y);
          }
        }
      var d = Ja();
      if (t.subtreeFlags & du)
        for (var h = t.child; h !== null; )
          Qt(h), kR(h, e), h = h.sibling;
      Qt(d);
    }
    function kR(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case Se:
        case Pe:
        case pt:
        case Ye: {
          if (lo(t, e), qo(e), l & ht) {
            try {
              io(Bo | pr, e, e.return), $u(Bo | pr, e);
            } catch (Ie) {
              dn(e, e.return, Ie);
            }
            if (e.mode & Ct) {
              try {
                Yo(), io(vr | pr, e, e.return);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
              Io(e);
            } else
              try {
                io(vr | pr, e, e.return);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
          }
          return;
        }
        case ie: {
          lo(t, e), qo(e), l & Un && i !== null && Jf(i, i.return);
          return;
        }
        case te: {
          lo(t, e), qo(e), l & Un && i !== null && Jf(i, i.return);
          {
            if (e.flags & Xt) {
              var s = e.stateNode;
              try {
                x0(s);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
            }
            if (l & ht) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    yw(d, T, C, y, h, e);
                  } catch (Ie) {
                    dn(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (lo(t, e), qo(e), l & ht) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, k = e.memoizedProps, j = i !== null ? i.memoizedProps : k;
            try {
              gw(O, j, k);
            } catch (Ie) {
              dn(e, e.return, Ie);
            }
          }
          return;
        }
        case ne: {
          if (lo(t, e), qo(e), l & ht && i !== null) {
            var P = i.memoizedState;
            if (P.isDehydrated)
              try {
                $w(t.containerInfo);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
          }
          return;
        }
        case _e: {
          lo(t, e), qo(e);
          return;
        }
        case De: {
          lo(t, e), qo(e);
          var V = e.child;
          if (V.flags & Si) {
            var de = V.stateNode, Fe = V.memoizedState, Le = Fe !== null;
            if (de.isHidden = Le, Le) {
              var kt = V.alternate !== null && V.alternate.memoizedState !== null;
              kt || Bx();
            }
          }
          if (l & ht) {
            try {
              ix(e);
            } catch (Ie) {
              dn(e, e.return, Ie);
            }
            xR(e);
          }
          return;
        }
        case He: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var A = Pr;
            Pr = A || gt, lo(t, e), Pr = A;
          } else
            lo(t, e);
          if (qo(e), l & Si) {
            var $ = e.stateNode, U = e.memoizedState, Z = U !== null, Ee = e;
            if ($.isHidden = Z, Z && !gt && (Ee.mode & dt) !== Me) {
              xe = Ee;
              for (var he = Ee.child; he !== null; )
                xe = he, sx(he), he = he.sibling;
            }
            ex(Ee, Z);
          }
          return;
        }
        case qt: {
          lo(t, e), qo(e), l & ht && xR(e);
          return;
        }
        case St:
          return;
        default: {
          lo(t, e), qo(e);
          return;
        }
      }
    }
    function qo(e) {
      var t = e.flags;
      if (t & An) {
        try {
          rx(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & zn && (e.flags &= -4097);
    }
    function ux(e, t, a) {
      Kf = a, Xf = t, xe = e, DR(e, t, a), Kf = null, Xf = null;
    }
    function DR(e, t, a) {
      for (var i = (e.mode & dt) !== Me; xe !== null; ) {
        var l = xe, s = l.child;
        if (l.tag === He && i) {
          var d = l.memoizedState !== null, h = d || Vm;
          if (h) {
            tE(e, t, a);
            continue;
          } else {
            var y = l.alternate, C = y !== null && y.memoizedState !== null, T = C || Pr, O = Vm, k = Pr;
            Vm = h, Pr = T, Pr && !k && (xe = l, cx(l));
            for (var j = s; j !== null; )
              xe = j, DR(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            xe = l, Vm = O, Pr = k, tE(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & To) !== Ne && s !== null ? (s.return = l, xe = s) : tE(e, t, a);
      }
    }
    function tE(e, t, a) {
      for (; xe !== null; ) {
        var i = xe;
        if ((i.flags & To) !== Ne) {
          var l = i.alternate;
          Qt(i);
          try {
            J1(t, l, i, a);
          } catch (d) {
            dn(i, i.return, d);
          }
          gn();
        }
        if (i === e) {
          xe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, xe = s;
          return;
        }
        xe = i.return;
      }
    }
    function sx(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.child;
        switch (t.tag) {
          case Se:
          case Pe:
          case pt:
          case Ye: {
            if (t.mode & Ct)
              try {
                Yo(), io(vr, t, t.return);
              } finally {
                Io(t);
              }
            else
              io(vr, t, t.return);
            break;
          }
          case ie: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && JS(t, t.return, i);
            break;
          }
          case te: {
            Jf(t, t.return);
            break;
          }
          case He: {
            var l = t.memoizedState !== null;
            if (l) {
              OR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, xe = a) : OR(e);
      }
    }
    function OR(e) {
      for (; xe !== null; ) {
        var t = xe;
        if (t === e) {
          xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, xe = a;
          return;
        }
        xe = t.return;
      }
    }
    function cx(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            LR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, xe = a) : LR(e);
      }
    }
    function LR(e) {
      for (; xe !== null; ) {
        var t = xe;
        Qt(t);
        try {
          Z1(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (gn(), t === e) {
          xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, xe = a;
          return;
        }
        xe = t.return;
      }
    }
    function fx(e, t, a, i) {
      xe = t, dx(t, e, a, i);
    }
    function dx(e, t, a, i) {
      for (; xe !== null; ) {
        var l = xe, s = l.child;
        (l.subtreeFlags & ur) !== Ne && s !== null ? (s.return = l, xe = s) : px(e, t, a, i);
      }
    }
    function px(e, t, a, i) {
      for (; xe !== null; ) {
        var l = xe;
        if ((l.flags & ma) !== Ne) {
          Qt(l);
          try {
            vx(t, l, a, i);
          } catch (d) {
            dn(l, l.return, d);
          }
          gn();
        }
        if (l === e) {
          xe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, xe = s;
          return;
        }
        xe = l.return;
      }
    }
    function vx(e, t, a, i) {
      switch (t.tag) {
        case Se:
        case Pe:
        case Ye: {
          if (t.mode & Ct) {
            ES();
            try {
              $u(jr | pr, t);
            } finally {
              SS(t);
            }
          } else
            $u(jr | pr, t);
          break;
        }
      }
    }
    function hx(e) {
      xe = e, mx();
    }
    function mx() {
      for (; xe !== null; ) {
        var e = xe, t = e.child;
        if ((xe.flags & Jr) !== Ne) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              xe = l, Sx(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var h = d.sibling;
                    d.sibling = null, d = h;
                  } while (d !== null);
                }
              }
            }
            xe = e;
          }
        }
        (e.subtreeFlags & ur) !== Ne && t !== null ? (t.return = e, xe = t) : yx();
      }
    }
    function yx() {
      for (; xe !== null; ) {
        var e = xe;
        (e.flags & ma) !== Ne && (Qt(e), gx(e), gn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, xe = t;
          return;
        }
        xe = e.return;
      }
    }
    function gx(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          e.mode & Ct ? (ES(), io(jr | pr, e, e.return), SS(e)) : io(jr | pr, e, e.return);
          break;
        }
      }
    }
    function Sx(e, t) {
      for (; xe !== null; ) {
        var a = xe;
        Qt(a), Cx(a, t), gn();
        var i = a.child;
        i !== null ? (i.return = a, xe = i) : Ex(e);
      }
    }
    function Ex(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.sibling, i = t.return;
        if (TR(t), t === e) {
          xe = null;
          return;
        }
        if (a !== null) {
          a.return = i, xe = a;
          return;
        }
        xe = i;
      }
    }
    function Cx(e, t) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          e.mode & Ct ? (ES(), io(jr, e, t), SS(e)) : io(jr, e, t);
          break;
        }
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          try {
            $u(vr | pr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case ie: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Tx(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          try {
            $u(jr | pr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function _x(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye: {
          try {
            io(vr | pr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case ie: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && JS(e, e.return, t);
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case Se:
        case Pe:
        case Ye:
          try {
            io(jr | pr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Wp = Symbol.for;
      Wp("selector.component"), Wp("selector.has_pseudo_class"), Wp("selector.role"), Wp("selector.test_id"), Wp("selector.text");
    }
    var bx = [];
    function xx() {
      bx.forEach(function(e) {
        return e();
      });
    }
    var kx = S.ReactCurrentActQueue;
    function Dx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function NR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && kx.current !== null && R("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ox = Math.ceil, nE = S.ReactCurrentDispatcher, rE = S.ReactCurrentOwner, Vr = S.ReactCurrentBatchConfig, uo = S.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), MR = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Oi = (
      /*                */
      4
    ), Hl = 0, Qp = 1, uc = 2, Im = 3, Gp = 4, AR = 5, aE = 6, xt = yr, _a = null, kn = null, gr = I, Wo = I, iE = Au(I), Sr = Hl, Kp = null, Ym = I, Xp = I, qm = I, Jp = null, Ya = null, oE = 0, UR = 500, zR = 1 / 0, Lx = 500, Pl = null;
    function Zp() {
      zR = _n() + Lx;
    }
    function FR() {
      return zR;
    }
    var Wm = !1, lE = null, Zf = null, sc = !1, Yu = null, ev = I, uE = [], sE = null, Nx = 50, tv = 0, cE = null, fE = !1, Qm = !1, Mx = 50, ed = 0, Gm = null, nv = Yt, Km = I, jR = !1;
    function Xm() {
      return _a;
    }
    function wa() {
      return (xt & ($r | Oi)) !== yr ? _n() : (nv !== Yt || (nv = _n()), nv);
    }
    function qu(e) {
      var t = e.mode;
      if ((t & dt) === Me)
        return Be;
      if ((xt & $r) !== yr && gr !== I)
        return tr(gr);
      var a = kb() !== xb;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Km === jn && (Km = Yd()), Km;
      }
      var l = Sa();
      if (l !== jn)
        return l;
      var s = dw();
      return s;
    }
    function Ax(e) {
      var t = e.mode;
      return (t & dt) === Me ? Be : oh();
    }
    function Er(e, t, a, i) {
      ak(), jR && R("useInsertionEffect must not schedule updates."), fE && (Qm = !0), Cu(e, a, i), (xt & $r) !== I && e === _a ? lk(t) : (br && uh(e, t, a), uk(t), e === _a && ((xt & $r) === yr && (Xp = at(Xp, a)), Sr === Gp && Wu(e, gr)), qa(e, i), a === Be && xt === yr && (t.mode & dt) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !uo.isBatchingLegacy && (Zp(), j0()));
    }
    function Ux(e, t, a) {
      var i = e.current;
      i.lanes = t, Cu(e, t, a), qa(e, a);
    }
    function zx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (xt & $r) !== yr
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      rh(e, t);
      var i = na(e, e === _a ? gr : I);
      if (i === I) {
        a !== null && eT(a), e.callbackNode = null, e.callbackPriority = jn;
        return;
      }
      var l = El(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(uo.current !== null && a !== gE)) {
        a == null && s !== Be && R("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && eT(a);
      var d;
      if (l === Be)
        e.tag === Uu ? (uo.isBatchingLegacy !== null && (uo.didScheduleLegacyUpdate = !0), cb(BR.bind(null, e))) : F0(BR.bind(null, e)), uo.current !== null ? uo.current.push(zu) : vw(function() {
          (xt & ($r | Oi)) === yr && zu();
        }), d = null;
      else {
        var h;
        switch (ch(i)) {
          case aa:
            h = Qi;
            break;
          case ja:
            h = Es;
            break;
          case cr:
            h = vl;
            break;
          case ff:
            h = pu;
            break;
          default:
            h = vl;
            break;
        }
        d = SE(h, HR.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function HR(e, t) {
      if (e1(), nv = Yt, Km = I, (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Vl();
      if (i && e.callbackNode !== a)
        return null;
      var l = na(e, e === _a ? gr : I);
      if (l === I)
        return null;
      var s = !Ns(e, l) && !ih(e, l) && !t, d = s ? qx(e, l) : Zm(e, l);
      if (d !== Hl) {
        if (d === uc) {
          var h = nf(e);
          h !== I && (l = h, d = dE(e, h));
        }
        if (d === Qp) {
          var y = Kp;
          throw cc(e, I), Wu(e, l), qa(e, _n()), y;
        }
        if (d === aE)
          Wu(e, l);
        else {
          var C = !Ns(e, l), T = e.current.alternate;
          if (C && !jx(T)) {
            if (d = Zm(e, l), d === uc) {
              var O = nf(e);
              O !== I && (l = O, d = dE(e, O));
            }
            if (d === Qp) {
              var k = Kp;
              throw cc(e, I), Wu(e, l), qa(e, _n()), k;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, Fx(e, d, l);
        }
      }
      return qa(e, _n()), e.callbackNode === a ? HR.bind(null, e) : null;
    }
    function dE(e, t) {
      var a = Jp;
      if (Rl(e)) {
        var i = cc(e, t);
        i.flags |= Sn, rb(e.containerInfo);
      }
      var l = Zm(e, t);
      if (l !== uc) {
        var s = Ya;
        Ya = a, s !== null && PR(s);
      }
      return l;
    }
    function PR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Fx(e, t, a) {
      switch (t) {
        case Hl:
        case Qp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case uc: {
          fc(e, Ya, Pl);
          break;
        }
        case Im: {
          if (Wu(e, a), rf(a) && // do not delay if we're inside an act() scope
          !tT()) {
            var i = oE + UR - _n();
            if (i > 10) {
              var l = na(e, I);
              if (l !== I)
                break;
              var s = e.suspendedLanes;
              if (!Cl(s, a)) {
                wa(), uf(e, s);
                break;
              }
              e.timeoutHandle = sg(fc.bind(null, e, Ya, Pl), i);
              break;
            }
          }
          fc(e, Ya, Pl);
          break;
        }
        case Gp: {
          if (Wu(e, a), Ay(a))
            break;
          if (!tT()) {
            var d = Bd(e, a), h = d, y = _n() - h, C = rk(y) - y;
            if (C > 10) {
              e.timeoutHandle = sg(fc.bind(null, e, Ya, Pl), C);
              break;
            }
          }
          fc(e, Ya, Pl);
          break;
        }
        case AR: {
          fc(e, Ya, Pl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function jx(e) {
      for (var t = e; ; ) {
        if (t.flags & Mc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, h = s.value;
                try {
                  if (!ve(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Mc && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Wu(e, t) {
      t = Ms(t, qm), t = Ms(t, Xp), Wd(e, t);
    }
    function BR(e) {
      if (t1(), (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      Vl();
      var t = na(e, I);
      if (!ra(t, Be))
        return qa(e, _n()), null;
      var a = Zm(e, t);
      if (e.tag !== Uu && a === uc) {
        var i = nf(e);
        i !== I && (t = i, a = dE(e, i));
      }
      if (a === Qp) {
        var l = Kp;
        throw cc(e, I), Wu(e, t), qa(e, _n()), l;
      }
      if (a === aE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, fc(e, Ya, Pl), qa(e, _n()), null;
    }
    function Hx(e, t) {
      t !== I && (As(e, at(t, Be)), qa(e, _n()), (xt & ($r | Oi)) === yr && (Zp(), zu()));
    }
    function pE(e, t) {
      var a = xt;
      xt |= MR;
      try {
        return e(t);
      } finally {
        xt = a, xt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !uo.isBatchingLegacy && (Zp(), j0());
      }
    }
    function Px(e, t, a, i, l) {
      var s = Sa(), d = Vr.transition;
      try {
        return Vr.transition = null, In(aa), e(t, a, i, l);
      } finally {
        In(s), Vr.transition = d, xt === yr && Zp();
      }
    }
    function Bl(e) {
      Yu !== null && Yu.tag === Uu && (xt & ($r | Oi)) === yr && Vl();
      var t = xt;
      xt |= MR;
      var a = Vr.transition, i = Sa();
      try {
        return Vr.transition = null, In(aa), e ? e() : void 0;
      } finally {
        In(i), Vr.transition = a, xt = t, (xt & ($r | Oi)) === yr && zu();
      }
    }
    function VR() {
      return (xt & ($r | Oi)) !== yr;
    }
    function Jm(e, t) {
      la(iE, Wo, e), Wo = at(Wo, t);
    }
    function vE(e) {
      Wo = iE.current, oa(iE, e);
    }
    function cc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== cg && (e.timeoutHandle = cg, pw(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var l = i.alternate;
          yR(l, i), i = i.return;
        }
      _a = e;
      var s = dc(e.current, null);
      return kn = s, gr = Wo = t, Sr = Hl, Kp = null, Ym = I, Xp = I, qm = I, Jp = null, Ya = null, Ub(), eo.discardPendingWarnings(), s;
    }
    function $R(e, t) {
      do {
        var a = kn;
        try {
          if (um(), pC(), gn(), rE.current = null, a === null || a.return === null) {
            Sr = Qp, Kp = t, kn = null;
            return;
          }
          if (Ge && a.mode & Ct && Fm(a, !0), qe)
            if (wo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rs(a, i, gr);
            } else
              Ri(a, t, gr);
          c1(e, a.return, a, t, gr), WR(a);
        } catch (l) {
          t = l, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function IR() {
      var e = nE.current;
      return nE.current = Nm, e === null ? Nm : e;
    }
    function YR(e) {
      nE.current = e;
    }
    function Bx() {
      oE = _n();
    }
    function rv(e) {
      Ym = at(e, Ym);
    }
    function Vx() {
      Sr === Hl && (Sr = Im);
    }
    function hE() {
      (Sr === Hl || Sr === Im || Sr === uc) && (Sr = Gp), _a !== null && (Oo(Ym) || Oo(Xp)) && Wu(_a, gr);
    }
    function $x(e) {
      Sr !== Gp && (Sr = uc), Jp === null ? Jp = [e] : Jp.push(e);
    }
    function Ix() {
      return Sr === Hl;
    }
    function Zm(e, t) {
      var a = xt;
      xt |= $r;
      var i = IR();
      if (_a !== e || gr !== t) {
        if (br) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (av(e, gr), l.clear()), Qd(e, t);
        }
        Pl = cf(), cc(e, t);
      }
      Fd(t);
      do
        try {
          Yx();
          break;
        } catch (s) {
          $R(e, s);
        }
      while (!0);
      if (um(), xt = a, YR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hn(), _a = null, gr = I, Sr;
    }
    function Yx() {
      for (; kn !== null; )
        qR(kn);
    }
    function qx(e, t) {
      var a = xt;
      xt |= $r;
      var i = IR();
      if (_a !== e || gr !== t) {
        if (br) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (av(e, gr), l.clear()), Qd(e, t);
        }
        Pl = cf(), Zp(), cc(e, t);
      }
      Fd(t);
      do
        try {
          Wx();
          break;
        } catch (s) {
          $R(e, s);
        }
      while (!0);
      return um(), YR(i), xt = a, kn !== null ? (jd(), Hl) : (hn(), _a = null, gr = I, Sr);
    }
    function Wx() {
      for (; kn !== null && !Dd(); )
        qR(kn);
    }
    function qR(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Ct) !== Me ? (gS(e), a = mE(t, e, Wo), Fm(e, !0)) : a = mE(t, e, Wo), gn(), e.memoizedProps = e.pendingProps, a === null ? WR(e) : kn = a, rE.current = null;
    }
    function WR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & dl) === Ne) {
          Qt(t);
          var l = void 0;
          if ((t.mode & Ct) === Me ? l = mR(a, t, Wo) : (gS(t), l = mR(a, t, Wo), Fm(t, !1)), gn(), l !== null) {
            kn = l;
            return;
          }
        } else {
          var s = V1(a, t);
          if (s !== null) {
            s.flags &= Yv, kn = s;
            return;
          }
          if ((t.mode & Ct) !== Me) {
            Fm(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= dl, i.subtreeFlags = Ne, i.deletions = null;
          else {
            Sr = aE, kn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          kn = y;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      Sr === Hl && (Sr = AR);
    }
    function fc(e, t, a) {
      var i = Sa(), l = Vr.transition;
      try {
        Vr.transition = null, In(aa), Qx(e, t, a, i);
      } finally {
        Vr.transition = l, In(i);
      }
      return null;
    }
    function Qx(e, t, a, i) {
      do
        Vl();
      while (Yu !== null);
      if (ik(), (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Xv(s), l === null)
        return Ci(), null;
      if (s === I && R("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jn;
      var d = at(l.lanes, l.childLanes);
      lh(e, d), e === _a && (_a = null, kn = null, gr = I), ((l.subtreeFlags & ur) !== Ne || (l.flags & ur) !== Ne) && (sc || (sc = !0, sE = a, SE(vl, function() {
        return Vl(), null;
      })));
      var h = (l.subtreeFlags & (Ro | du | To | ur)) !== Ne, y = (l.flags & (Ro | du | To | ur)) !== Ne;
      if (h || y) {
        var C = Vr.transition;
        Vr.transition = null;
        var T = Sa();
        In(aa);
        var O = xt;
        xt |= Oi, rE.current = null, W1(e, l), jC(), lx(e, l, s), ow(e.containerInfo), e.current = l, Ts(s), ux(l, e, s), ml(), Wv(), xt = O, In(T), Vr.transition = C;
      } else
        e.current = l, jC();
      var k = sc;
      if (sc ? (sc = !1, Yu = e, ev = s) : (ed = 0, Gm = null), d = e.pendingLanes, d === I && (Zf = null), k || XR(e.current, !1), Nd(l.stateNode, i), br && e.memoizedUpdaters.clear(), xx(), qa(e, _n()), t !== null)
        for (var j = e.onRecoverableError, P = 0; P < t.length; P++) {
          var V = t[P], de = V.stack, Fe = V.digest;
          j(V.value, {
            componentStack: de,
            digest: Fe
          });
        }
      if (Wm) {
        Wm = !1;
        var Le = lE;
        throw lE = null, Le;
      }
      return ra(ev, Be) && e.tag !== Uu && Vl(), d = e.pendingLanes, ra(d, Be) ? (Zb(), e === cE ? tv++ : (tv = 0, cE = e)) : tv = 0, zu(), Ci(), null;
    }
    function Vl() {
      if (Yu !== null) {
        var e = ch(ev), t = xr(cr, e), a = Vr.transition, i = Sa();
        try {
          return Vr.transition = null, In(t), Kx();
        } finally {
          In(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Gx(e) {
      uE.push(e), sc || (sc = !0, SE(vl, function() {
        return Vl(), null;
      }));
    }
    function Kx() {
      if (Yu === null)
        return !1;
      var e = sE;
      sE = null;
      var t = Yu, a = ev;
      if (Yu = null, ev = I, (xt & ($r | Oi)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      fE = !0, Qm = !1, zd(a);
      var i = xt;
      xt |= Oi, hx(t.current), fx(t, t.current, a, e);
      {
        var l = uE;
        uE = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          X1(t, d);
        }
      }
      mu(), XR(t.current, !0), xt = i, zu(), Qm ? t === Gm ? ed++ : (ed = 0, Gm = t) : ed = 0, fE = !1, Qm = !1, Md(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function QR(e) {
      return Zf !== null && Zf.has(e);
    }
    function Xx(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function Jx(e) {
      Wm || (Wm = !0, lE = e);
    }
    var Zx = Jx;
    function GR(e, t, a) {
      var i = oc(a, t), l = qC(e, i, Be), s = ju(e, l, Be), d = wa();
      s !== null && (Cu(s, Be, d), qa(s, d));
    }
    function dn(e, t, a) {
      if (I1(a), iv(!1), e.tag === ne) {
        GR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          GR(i, e, a);
          return;
        } else if (i.tag === ie) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !QR(s)) {
            var d = oc(a, e), h = zS(i, d, Be), y = ju(i, h, Be), C = wa();
            y !== null && (Cu(y, Be, C), qa(y, C));
            return;
          }
        }
        i = i.return;
      }
      R(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ek(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = wa();
      uf(e, a), sk(e), _a === e && Cl(gr, a) && (Sr === Gp || Sr === Im && rf(gr) && _n() - oE < UR ? cc(e, I) : qm = at(qm, a)), qa(e, l);
    }
    function KR(e, t) {
      t === jn && (t = Ax(e));
      var a = wa(), i = $a(e, t);
      i !== null && (Cu(i, t, a), qa(i, a));
    }
    function tk(e) {
      var t = e.memoizedState, a = jn;
      t !== null && (a = t.retryLane), KR(e, a);
    }
    function nk(e, t) {
      var a = jn, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case qt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), KR(e, a);
    }
    function rk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ox(e / 1960) * 1960;
    }
    function ak() {
      if (tv > Nx)
        throw tv = 0, cE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > Mx && (ed = 0, Gm = null, R("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ik() {
      eo.flushLegacyContextWarning(), eo.flushPendingUnsafeLifecycleWarnings();
    }
    function XR(e, t) {
      Qt(e), ey(e, Mr, _x), t && ey(e, Co, wx), ey(e, Mr, Rx), t && ey(e, Co, Tx), gn();
    }
    function ey(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Ne ? i = i.child : ((i.flags & t) !== Ne && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ty = null;
    function JR(e) {
      {
        if ((xt & $r) !== yr || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== Oe && t !== ne && t !== ie && t !== Se && t !== Pe && t !== pt && t !== Ye)
          return;
        var a = We(e) || "ReactComponent";
        if (ty !== null) {
          if (ty.has(a))
            return;
          ty.add(a);
        } else
          ty = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Qt(e), R("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : gn();
        }
      }
    }
    var mE;
    {
      var ok = null;
      mE = function(e, t, a) {
        var i = oT(ok, t);
        try {
          return fR(e, t, a);
        } catch (s) {
          if (gb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (um(), pC(), yR(e, t), oT(t, i), t.mode & Ct && gS(t), Aa(null, fR, null, e, t, a), Rd()) {
            var l = Td();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var ZR = !1, yE;
    yE = /* @__PURE__ */ new Set();
    function lk(e) {
      if (Kr && !Kb())
        switch (e.tag) {
          case Se:
          case Pe:
          case Ye: {
            var t = kn && We(kn) || "Unknown", a = t;
            if (!yE.has(a)) {
              yE.add(a);
              var i = We(e) || "Unknown";
              R("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ie: {
            ZR || (R("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), ZR = !0);
            break;
          }
        }
    }
    function av(e, t) {
      if (br) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          uh(e, i, t);
        });
      }
    }
    var gE = {};
    function SE(e, t) {
      {
        var a = uo.current;
        return a !== null ? (a.push(t), gE) : xd(e, t);
      }
    }
    function eT(e) {
      if (e !== gE)
        return kd(e);
    }
    function tT() {
      return uo.current !== null;
    }
    function uk(e) {
      {
        if (e.mode & dt) {
          if (!NR())
            return;
        } else if (!Dx() || xt !== yr || e.tag !== Se && e.tag !== Pe && e.tag !== Ye)
          return;
        if (uo.current === null) {
          var t = Jn;
          try {
            Qt(e), R(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, We(e));
          } finally {
            t ? Qt(e) : gn();
          }
        }
      }
    }
    function sk(e) {
      e.tag !== Uu && NR() && uo.current === null && R(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function iv(e) {
      jR = e;
    }
    var Li = null, td = null, ck = function(e) {
      Li = e;
    };
    function nd(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function EE(e) {
      return nd(e);
    }
    function CE(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function nT(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ie: {
            typeof i == "function" && (l = !0);
            break;
          }
          case Se: {
            (typeof i == "function" || s === Ke) && (l = !0);
            break;
          }
          case Pe: {
            (s === G || s === Ke) && (l = !0);
            break;
          }
          case pt:
          case Ye: {
            (s === ct || s === Ke) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Li(a);
          if (d !== void 0 && d === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function rT(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var fk = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Vl(), Bl(function() {
          RE(e.current, i, a);
        });
      }
    }, dk = function(e, t) {
      {
        if (e.context !== li)
          return;
        Vl(), Bl(function() {
          ov(t, e, null, null);
        });
      }
    };
    function RE(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, h = e.type, y = null;
        switch (d) {
          case Se:
          case Ye:
          case ie:
            y = h;
            break;
          case Pe:
            y = h.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (y !== null) {
          var O = Li(y);
          O !== void 0 && (a.has(O) ? T = !0 : t.has(O) && (d === ie ? T = !0 : C = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var k = $a(e, Be);
          k !== null && Er(k, e, Be, Yt);
        }
        l !== null && !T && RE(l, t, a), s !== null && RE(s, t, a);
      }
    }
    var pk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return TE(e.current, i, a), a;
      }
    };
    function TE(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case Se:
          case Ye:
          case ie:
            h = d;
            break;
          case Pe:
            h = d.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? vk(e, a) : i !== null && TE(i, t, a), l !== null && TE(l, t, a);
      }
    }
    function vk(e, t) {
      {
        var a = hk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case _e:
              t.add(i.stateNode.containerInfo);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function hk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var _E;
    {
      _E = !1;
      try {
        var aT = Object.preventExtensions({});
      } catch {
        _E = !0;
      }
    }
    function mk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ne, this.subtreeFlags = Ne, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !_E && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new mk(e, t, a, i);
    };
    function wE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yk(e) {
      return typeof e == "function" && !wE(e) && e.defaultProps === void 0;
    }
    function gk(e) {
      if (typeof e == "function")
        return wE(e) ? ie : Se;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return Pe;
        if (t === ct)
          return pt;
      }
      return Oe;
    }
    function dc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ne, a.subtreeFlags = Ne, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Oe:
        case Se:
        case Ye:
          a.type = nd(e.type);
          break;
        case ie:
          a.type = EE(e.type);
          break;
        case Pe:
          a.type = CE(e.type);
          break;
      }
      return a;
    }
    function Sk(e, t) {
      e.flags &= Fn | An;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Ne, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ne, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Ek(e, t, a) {
      var i;
      return e === Jh ? (i = dt, t === !0 && (i |= tt, i |= Jt)) : i = Me, br && (i |= Ct), ui(ne, null, null, i);
    }
    function bE(e, t, a, i, l, s) {
      var d = Oe, h = e;
      if (typeof e == "function")
        wE(e) ? (d = ie, h = EE(h)) : h = nd(h);
      else if (typeof e == "string")
        d = te;
      else
        e: switch (e) {
          case Wr:
            return Qu(a.children, l, s, t);
          case fi:
            d = jt, l |= tt, (l & dt) !== Me && (l |= Jt);
            break;
          case di:
            return Ck(a, l, s, t);
          case se:
            return Rk(a, l, s, t);
          case pe:
            return Tk(a, l, s, t);
          case Rn:
            return iT(a, l, s, t);
          case on:
          // eslint-disable-next-line no-fallthrough
          case vt:
          // eslint-disable-next-line no-fallthrough
          case cn:
          // eslint-disable-next-line no-fallthrough
          case Tr:
          // eslint-disable-next-line no-fallthrough
          case ot:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  d = nt;
                  break e;
                case b:
                  d = Tt;
                  break e;
                case G:
                  d = Pe, h = CE(h);
                  break e;
                case ct:
                  d = pt;
                  break e;
                case Ke:
                  d = Cn, h = null;
                  break e;
              }
            var y = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? We(i) : null;
              C && (y += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
          }
        }
      var T = ui(d, a, t, l);
      return T.elementType = e, T.type = h, T.lanes = s, T._debugOwner = i, T;
    }
    function xE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, h = bE(l, s, d, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function Qu(e, t, a, i) {
      var l = ui(Ve, e, i, t);
      return l.lanes = a, l;
    }
    function Ck(e, t, a, i) {
      typeof e.id != "string" && R('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ui(Ot, e, i, t | Ct);
      return l.elementType = di, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Rk(e, t, a, i) {
      var l = ui(De, e, i, t);
      return l.elementType = se, l.lanes = a, l;
    }
    function Tk(e, t, a, i) {
      var l = ui(qt, e, i, t);
      return l.elementType = pe, l.lanes = a, l;
    }
    function iT(e, t, a, i) {
      var l = ui(He, e, i, t);
      l.elementType = Rn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function kE(e, t, a) {
      var i = ui(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function _k() {
      var e = ui(te, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function wk(e) {
      var t = ui(pn, null, null, Me);
      return t.stateNode = e, t;
    }
    function DE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = ui(_e, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function oT(e, t) {
      return e === null && (e = ui(Oe, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jn, this.eventTimes = lf(I), this.expirationTimes = lf(Yt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = lf(I), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Pd; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function lT(e, t, a, i, l, s, d, h, y, C) {
      var T = new bk(e, t, a, h, y), O = Ek(t, s);
      T.current = O, O.stateNode = T;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        O.memoizedState = k;
      }
      return Vg(O), T;
    }
    var OE = "18.3.1";
    function xk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ha,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var LE, NE;
    LE = !1, NE = {};
    function uT(e) {
      if (!e)
        return li;
      var t = fu(e), a = sb(t);
      if (t.tag === ie) {
        var i = t.type;
        if (Po(i))
          return U0(t, i, a);
      }
      return a;
    }
    function kk(e, t) {
      {
        var a = fu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = ea(a);
        if (l === null)
          return null;
        if (l.mode & tt) {
          var s = We(a) || "Component";
          if (!NE[s]) {
            NE[s] = !0;
            var d = Jn;
            try {
              Qt(l), a.mode & tt ? R("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : R("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? Qt(d) : gn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function sT(e, t, a, i, l, s, d, h) {
      var y = !1, C = null;
      return lT(e, t, y, C, a, i, l, s, d);
    }
    function cT(e, t, a, i, l, s, d, h, y, C) {
      var T = !0, O = lT(a, i, T, e, l, s, d, h, y);
      O.context = uT(null);
      var k = O.current, j = wa(), P = qu(k), V = Fl(j, P);
      return V.callback = t ?? null, ju(k, V, P), Ux(O, P, j), O;
    }
    function ov(e, t, a, i) {
      Ld(t, e);
      var l = t.current, s = wa(), d = qu(l);
      Fc(d);
      var h = uT(a);
      t.context === null ? t.context = h : t.pendingContext = h, Kr && Jn !== null && !LE && (LE = !0, R(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(Jn) || "Unknown"));
      var y = Fl(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && R("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = ju(l, y, d);
      return C !== null && (Er(C, l, d, s), pm(C, l, d)), d;
    }
    function ny(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case te:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Dk(e) {
      switch (e.tag) {
        case ne: {
          var t = e.stateNode;
          if (Rl(t)) {
            var a = ah(t);
            Hx(t, a);
          }
          break;
        }
        case De: {
          Bl(function() {
            var l = $a(e, Be);
            if (l !== null) {
              var s = wa();
              Er(l, e, Be, s);
            }
          });
          var i = Be;
          ME(e, i);
          break;
        }
      }
    }
    function fT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = qd(a.retryLane, t));
    }
    function ME(e, t) {
      fT(e, t);
      var a = e.alternate;
      a && fT(a, t);
    }
    function Ok(e) {
      if (e.tag === De) {
        var t = Eu, a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        ME(e, t);
      }
    }
    function Lk(e) {
      if (e.tag === De) {
        var t = qu(e), a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        ME(e, t);
      }
    }
    function dT(e) {
      var t = ri(e);
      return t === null ? null : t.stateNode;
    }
    var pT = function(e) {
      return null;
    };
    function Nk(e) {
      return pT(e);
    }
    var vT = function(e) {
      return !1;
    };
    function Mk(e) {
      return vT(e);
    }
    var hT = null, mT = null, yT = null, gT = null, ST = null, ET = null, CT = null, RT = null, TT = null;
    {
      var _T = function(e, t, a) {
        var i = t[a], l = rt(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (rt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = _T(e[i], t, a + 1), l);
      }, wT = function(e, t) {
        return _T(e, t, 0);
      }, bT = function(e, t, a, i) {
        var l = t[i], s = rt(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], rt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = bT(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, xT = function(e, t, a) {
        if (t.length !== a.length) {
          ee("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ee("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return bT(e, t, a, 0);
      }, kT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = rt(e) ? e.slice() : et({}, e);
        return s[l] = kT(e[l], t, a + 1, i), s;
      }, DT = function(e, t, a) {
        return kT(e, t, 0, a);
      }, AE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      hT = function(e, t, a, i) {
        var l = AE(e, t);
        if (l !== null) {
          var s = DT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var d = $a(e, Be);
          d !== null && Er(d, e, Be, Yt);
        }
      }, mT = function(e, t, a) {
        var i = AE(e, t);
        if (i !== null) {
          var l = wT(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = et({}, e.memoizedProps);
          var s = $a(e, Be);
          s !== null && Er(s, e, Be, Yt);
        }
      }, yT = function(e, t, a, i) {
        var l = AE(e, t);
        if (l !== null) {
          var s = xT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var d = $a(e, Be);
          d !== null && Er(d, e, Be, Yt);
        }
      }, gT = function(e, t, a) {
        e.pendingProps = DT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && Er(i, e, Be, Yt);
      }, ST = function(e, t) {
        e.pendingProps = wT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Be);
        a !== null && Er(a, e, Be, Yt);
      }, ET = function(e, t, a) {
        e.pendingProps = xT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && Er(i, e, Be, Yt);
      }, CT = function(e) {
        var t = $a(e, Be);
        t !== null && Er(t, e, Be, Yt);
      }, RT = function(e) {
        pT = e;
      }, TT = function(e) {
        vT = e;
      };
    }
    function Ak(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function Uk(e) {
      return null;
    }
    function zk() {
      return Jn;
    }
    function Fk(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return Od({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: hT,
        overrideHookStateDeletePath: mT,
        overrideHookStateRenamePath: yT,
        overrideProps: gT,
        overridePropsDeletePath: ST,
        overridePropsRenamePath: ET,
        setErrorHandler: RT,
        setSuspenseHandler: TT,
        scheduleUpdate: CT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Ak,
        findFiberByHostInstance: t || Uk,
        // React Refresh
        findHostInstancesForRefresh: pk,
        scheduleRefresh: fk,
        scheduleRoot: dk,
        setRefreshHandler: ck,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: zk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: OE
      });
    }
    var OT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function UE(e) {
      this._internalRoot = e;
    }
    ry.prototype.render = UE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? R("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ay(arguments[1]) ? R("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && R("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = dT(t.current);
          i && i.parentNode !== a && R("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ov(e, t, null, null);
    }, ry.prototype.unmount = UE.prototype.unmount = function() {
      typeof arguments[0] == "function" && R("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VR() && R("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Bl(function() {
          ov(null, e, null, null);
        }), O0(t);
      }
    };
    function jk(e, t) {
      if (!ay(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      LT(e);
      var a = !1, i = !1, l = "", s = OT;
      t != null && (t.hydrate ? ee("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && R(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = sT(e, Jh, null, a, i, l, s);
      Yh(d.current, e);
      var h = e.nodeType === Mn ? e.parentNode : e;
      return dp(h), new UE(d);
    }
    function ry(e) {
      this._internalRoot = e;
    }
    function Hk(e) {
      e && hh(e);
    }
    ry.prototype.unstable_scheduleHydration = Hk;
    function Pk(e, t, a) {
      if (!ay(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      LT(e), t === void 0 && R("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, h = "", y = OT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = cT(t, null, e, Jh, i, s, d, h, y);
      if (Yh(C.current, e), dp(e), l)
        for (var T = 0; T < l.length; T++) {
          var O = l[T];
          Ib(C, O);
        }
      return new ry(C);
    }
    function ay(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === as));
    }
    function lv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === as || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function LT(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && R("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Tp(e) && (e._reactRootContainer ? R("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : R("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Bk = S.ReactCurrentOwner, NT;
    NT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = dT(e._reactRootContainer.current);
        t && t.parentNode !== e && R("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = zE(e), l = !!(i && Mu(i));
      l && !a && R("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && R("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function zE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function MT() {
    }
    function Vk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = ny(d);
            s.call(k);
          };
        }
        var d = cT(
          t,
          i,
          e,
          Uu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          MT
        );
        e._reactRootContainer = d, Yh(d.current, e);
        var h = e.nodeType === Mn ? e.parentNode : e;
        return dp(h), Bl(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var k = ny(T);
            C.call(k);
          };
        }
        var T = sT(
          e,
          Uu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          MT
        );
        e._reactRootContainer = T, Yh(T.current, e);
        var O = e.nodeType === Mn ? e.parentNode : e;
        return dp(O), Bl(function() {
          ov(t, T, a, i);
        }), T;
      }
    }
    function $k(e, t) {
      e !== null && typeof e != "function" && R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function iy(e, t, a, i, l) {
      NT(a), $k(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = Vk(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var h = l;
          l = function() {
            var y = ny(d);
            h.call(y);
          };
        }
        ov(t, d, e, l);
      }
      return ny(d);
    }
    var AT = !1;
    function Ik(e) {
      {
        AT || (AT = !0, R("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Bk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || R("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : kk(e, "findDOMNode");
    }
    function Yk(e, t, a) {
      if (R("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Tp(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return iy(null, e, t, !0, a);
    }
    function qk(e, t, a) {
      if (R("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Tp(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return iy(null, e, t, !1, a);
    }
    function Wk(e, t, a, i) {
      if (R("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !fl(e))
        throw new Error("parentComponent must be a valid React Component");
      return iy(e, t, a, !1, i);
    }
    var UT = !1;
    function Qk(e) {
      if (UT || (UT = !0, R("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Tp(e) && e._reactRootContainer === void 0;
        t && R("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = zE(e), i = a && !Mu(a);
          i && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Bl(function() {
          iy(null, null, e, !1, function() {
            e._reactRootContainer = null, O0(e);
          });
        }), !0;
      } else {
        {
          var l = zE(e), s = !!(l && Mu(l)), d = e.nodeType === Xr && lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    zy(Dk), Kd(Ok), Fy(Lk), df(Sa), fh(sh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && R("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ps(K_), $v(pE, Px, Bl);
    function Gk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ay(t))
        throw new Error("Target container is not a DOM element.");
      return xk(e, t, null, a);
    }
    function Kk(e, t, a, i) {
      return Wk(e, t, a, i);
    }
    var FE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Mu, Mf, qh, Ed, lu, pE]
    };
    function Xk(e, t) {
      return FE.usingClientEntryPoint || R('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t);
    }
    function Jk(e, t, a) {
      return FE.usingClientEntryPoint || R('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Pk(e, t, a);
    }
    function Zk(e) {
      return VR() && R("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Bl(e);
    }
    var eD = Fk({
      findFiberByHostInstance: Xs,
      bundleType: 1,
      version: OE,
      rendererPackageName: "react-dom"
    });
    if (!eD && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var zT = window.location.protocol;
      /^(https?|file):$/.test(zT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (zT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FE, Qa.createPortal = Gk, Qa.createRoot = Xk, Qa.findDOMNode = Ik, Qa.flushSync = Zk, Qa.hydrate = Yk, Qa.hydrateRoot = Jk, Qa.render = qk, Qa.unmountComponentAtNode = Qk, Qa.unstable_batchedUpdates = pE, Qa.unstable_renderSubtreeIntoContainer = Kk, Qa.version = OE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var YT;
function cD() {
  if (YT) return ly.exports;
  YT = 1;
  var m = {};
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (m.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return m.NODE_ENV === "production" ? (f(), ly.exports = uD()) : ly.exports = sD(), ly.exports;
}
var qT;
function fD() {
  if (qT) return ad;
  qT = 1;
  var m = {}, f = cD();
  if (m.NODE_ENV === "production")
    ad.createRoot = f.createRoot, ad.hydrateRoot = f.hydrateRoot;
  else {
    var p = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    ad.createRoot = function(S, N) {
      p.usingClientEntryPoint = !0;
      try {
        return f.createRoot(S, N);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    }, ad.hydrateRoot = function(S, N, Y) {
      p.usingClientEntryPoint = !0;
      try {
        return f.hydrateRoot(S, N, Y);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    };
  }
  return ad;
}
var dD = fD(), pD = Object.defineProperty, vD = (m, f, p) => f in m ? pD(m, f, { enumerable: !0, configurable: !0, writable: !0, value: p }) : m[f] = p, sy = (m, f, p) => vD(m, typeof f != "symbol" ? f + "" : f, p);
const hD = {
  stringify: (m) => m ? "true" : "false",
  parse: (m) => /^[ty1-9]/i.test(m)
}, mD = {
  stringify: (m) => m.name,
  parse: (m, f, p) => {
    const S = (() => {
      if (typeof window < "u" && m in window)
        return window[m];
      if (typeof global < "u" && m in global)
        return global[m];
    })();
    return typeof S == "function" ? S.bind(p) : void 0;
  }
}, yD = {
  stringify: (m) => JSON.stringify(m),
  parse: (m) => JSON.parse(m)
}, gD = {
  stringify: (m) => `${m}`,
  parse: (m) => parseFloat(m)
}, SD = {
  stringify: (m) => m,
  parse: (m) => m
}, PE = {
  string: SD,
  number: gD,
  boolean: hD,
  function: mD,
  json: yD
};
function ED(m) {
  return m.replace(
    /([a-z0-9])([A-Z])/g,
    (f, p, S) => `${p}-${S.toLowerCase()}`
  );
}
const cy = Symbol.for("r2wc.render"), fy = Symbol.for("r2wc.connected"), pc = Symbol.for("r2wc.context"), Il = Symbol.for("r2wc.props");
function CD(m, f, p) {
  var S, N, Y;
  f.props || (f.props = m.propTypes ? Object.keys(m.propTypes) : []), f.events || (f.events = []);
  const ee = Array.isArray(f.props) ? f.props.slice() : Object.keys(f.props), R = Array.isArray(f.events) ? f.events.slice() : Object.keys(f.events), ce = {}, Se = {}, ie = {}, Oe = {};
  for (const _e of ee) {
    ce[_e] = Array.isArray(f.props) ? "string" : f.props[_e];
    const te = ED(_e);
    ie[_e] = te, Oe[te] = _e;
  }
  for (const _e of R)
    Se[_e] = Array.isArray(f.events) ? {} : f.events[_e];
  class ne extends HTMLElement {
    constructor() {
      super(), sy(this, Y, !0), sy(this, N), sy(this, S, {}), sy(this, "container"), f.shadow ? this.container = this.attachShadow({
        mode: f.shadow
      }) : this.container = this, this[Il].container = this.container;
      for (const te of ee) {
        const Ce = ie[te], Ve = this.getAttribute(Ce), jt = ce[te], Tt = jt ? PE[jt] : null;
        Tt != null && Tt.parse && Ve && (this[Il][te] = Tt.parse(Ve, Ce, this));
      }
      for (const te of R)
        this[Il][te] = (Ce) => {
          const Ve = te.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Ve, { detail: Ce, ...Se[te] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Oe);
    }
    connectedCallback() {
      this[fy] = !0, this[cy]();
    }
    disconnectedCallback() {
      this[fy] = !1, this[pc] && p.unmount(this[pc]), delete this[pc];
    }
    attributeChangedCallback(te, Ce, Ve) {
      const jt = Oe[te], Tt = ce[jt], nt = Tt ? PE[Tt] : null;
      jt in ce && nt != null && nt.parse && Ve && (this[Il][jt] = nt.parse(Ve, te, this), this[cy]());
    }
    [(Y = fy, N = pc, S = Il, cy)]() {
      this[fy] && (this[pc] ? p.update(this[pc], this[Il]) : this[pc] = p.mount(
        this.container,
        m,
        this[Il]
      ));
    }
  }
  for (const _e of ee) {
    const te = ie[_e], Ce = ce[_e];
    Object.defineProperty(ne.prototype, _e, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Il][_e];
      },
      set(Ve) {
        this[Il][_e] = Ve;
        const jt = Ce ? PE[Ce] : null;
        if (jt != null && jt.stringify) {
          const Tt = jt.stringify(Ve, te, this);
          this.getAttribute(te) !== Tt && this.setAttribute(te, Tt);
        } else
          this[cy]();
      }
    });
  }
  return ne;
}
function RD(m, f, p) {
  const S = dD.createRoot(m), N = id.createElement(f, p);
  return S.render(N), {
    root: S,
    ReactComponent: f
  };
}
function TD({ root: m, ReactComponent: f }, p) {
  const S = id.createElement(f, p);
  m.render(S);
}
function _D({ root: m }) {
  m.unmount();
}
function wD(m, f = {}) {
  return CD(m, f, { mount: RD, update: TD, unmount: _D });
}
var dy = { exports: {} }, sv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WT;
function bD() {
  if (WT) return sv;
  WT = 1;
  var m = vv(), f = Symbol.for("react.element"), p = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, N = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(R, ce, Se) {
    var ie, Oe = {}, ne = null, _e = null;
    Se !== void 0 && (ne = "" + Se), ce.key !== void 0 && (ne = "" + ce.key), ce.ref !== void 0 && (_e = ce.ref);
    for (ie in ce) S.call(ce, ie) && !Y.hasOwnProperty(ie) && (Oe[ie] = ce[ie]);
    if (R && R.defaultProps) for (ie in ce = R.defaultProps, ce) Oe[ie] === void 0 && (Oe[ie] = ce[ie]);
    return { $$typeof: f, type: R, key: ne, ref: _e, props: Oe, _owner: N.current };
  }
  return sv.Fragment = p, sv.jsx = ee, sv.jsxs = ee, sv;
}
var cv = {}, QT;
function xD() {
  if (QT) return cv;
  QT = 1;
  var m = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return m.NODE_ENV !== "production" && function() {
    var f = vv(), p = Symbol.for("react.element"), S = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), ce = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), Ce = Symbol.iterator, Ve = "@@iterator";
    function jt(b) {
      if (b === null || typeof b != "object")
        return null;
      var G = Ce && b[Ce] || b[Ve];
      return typeof G == "function" ? G : null;
    }
    var Tt = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function nt(b) {
      {
        for (var G = arguments.length, se = new Array(G > 1 ? G - 1 : 0), pe = 1; pe < G; pe++)
          se[pe - 1] = arguments[pe];
        Pe("error", b, se);
      }
    }
    function Pe(b, G, se) {
      {
        var pe = Tt.ReactDebugCurrentFrame, ct = pe.getStackAddendum();
        ct !== "" && (G += "%s", se = se.concat([ct]));
        var Ke = se.map(function(vt) {
          return String(vt);
        });
        Ke.unshift("Warning: " + G), Function.prototype.apply.call(console[b], console, Ke);
      }
    }
    var Ot = !1, De = !1, pt = !1, Ye = !1, Cn = !1, At;
    At = Symbol.for("react.module.reference");
    function pn(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === N || b === ee || Cn || b === Y || b === ie || b === Oe || Ye || b === te || Ot || De || pt || typeof b == "object" && b !== null && (b.$$typeof === _e || b.$$typeof === ne || b.$$typeof === R || b.$$typeof === ce || b.$$typeof === Se || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === At || b.getModuleId !== void 0));
    }
    function qt(b, G, se) {
      var pe = b.displayName;
      if (pe)
        return pe;
      var ct = G.displayName || G.name || "";
      return ct !== "" ? se + "(" + ct + ")" : se;
    }
    function St(b) {
      return b.displayName || "Context";
    }
    function He(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && nt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case N:
          return "Fragment";
        case S:
          return "Portal";
        case ee:
          return "Profiler";
        case Y:
          return "StrictMode";
        case ie:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case ce:
            var G = b;
            return St(G) + ".Consumer";
          case R:
            var se = b;
            return St(se._context) + ".Provider";
          case Se:
            return qt(b, b.render, "ForwardRef");
          case ne:
            var pe = b.displayName || null;
            return pe !== null ? pe : He(b.type) || "Memo";
          case _e: {
            var ct = b, Ke = ct._payload, vt = ct._init;
            try {
              return He(vt(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ht = Object.assign, yt = 0, ut, W, we, fe, L, Q, Ae;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function Ge() {
      {
        if (yt === 0) {
          ut = console.log, W = console.info, we = console.warn, fe = console.error, L = console.group, Q = console.groupCollapsed, Ae = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        yt++;
      }
    }
    function st() {
      {
        if (yt--, yt === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ht({}, b, {
              value: ut
            }),
            info: Ht({}, b, {
              value: W
            }),
            warn: Ht({}, b, {
              value: we
            }),
            error: Ht({}, b, {
              value: fe
            }),
            group: Ht({}, b, {
              value: L
            }),
            groupCollapsed: Ht({}, b, {
              value: Q
            }),
            groupEnd: Ht({}, b, {
              value: Ae
            })
          });
        }
        yt < 0 && nt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = Tt.ReactCurrentDispatcher, Je;
    function Et(b, G, se) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (ct) {
            var pe = ct.stack.trim().match(/\n( *(at )?)/);
            Je = pe && pe[1] || "";
          }
        return `
` + Je + b;
      }
    }
    var $t = !1, Dn;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      Dn = new Qn();
    }
    function ir(b, G) {
      if (!b || $t)
        return "";
      {
        var se = Dn.get(b);
        if (se !== void 0)
          return se;
      }
      var pe;
      $t = !0;
      var ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = _t.current, _t.current = null, Ge();
      try {
        if (G) {
          var vt = function() {
            throw Error();
          };
          if (Object.defineProperty(vt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(vt, []);
            } catch (vn) {
              pe = vn;
            }
            Reflect.construct(b, [], vt);
          } else {
            try {
              vt.call();
            } catch (vn) {
              pe = vn;
            }
            b.call(vt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vn) {
            pe = vn;
          }
          b();
        }
      } catch (vn) {
        if (vn && pe && typeof vn.stack == "string") {
          for (var ot = vn.stack.split(`
`), Rn = pe.stack.split(`
`), on = ot.length - 1, cn = Rn.length - 1; on >= 1 && cn >= 0 && ot[on] !== Rn[cn]; )
            cn--;
          for (; on >= 1 && cn >= 0; on--, cn--)
            if (ot[on] !== Rn[cn]) {
              if (on !== 1 || cn !== 1)
                do
                  if (on--, cn--, cn < 0 || ot[on] !== Rn[cn]) {
                    var Tr = `
` + ot[on].replace(" at new ", " at ");
                    return b.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", b.displayName)), typeof b == "function" && Dn.set(b, Tr), Tr;
                  }
                while (on >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, _t.current = Ke, st(), Error.prepareStackTrace = ct;
      }
      var Xa = b ? b.displayName || b.name : "", Ft = Xa ? Et(Xa) : "";
      return typeof b == "function" && Dn.set(b, Ft), Ft;
    }
    function On(b, G, se) {
      return ir(b, !1);
    }
    function Cr(b) {
      var G = b.prototype;
      return !!(G && G.isReactComponent);
    }
    function Bn(b, G, se) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return ir(b, Cr(b));
      if (typeof b == "string")
        return Et(b);
      switch (b) {
        case ie:
          return Et("Suspense");
        case Oe:
          return Et("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case Se:
            return On(b.render);
          case ne:
            return Bn(b.type, G, se);
          case _e: {
            var pe = b, ct = pe._payload, Ke = pe._init;
            try {
              return Bn(Ke(ct), G, se);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, fa = {}, Ga = Tt.ReactDebugCurrentFrame;
    function Dr(b) {
      if (b) {
        var G = b._owner, se = Bn(b.type, b._source, G ? G.type : null);
        Ga.setExtraStackFrame(se);
      } else
        Ga.setExtraStackFrame(null);
    }
    function Vn(b, G, se, pe, ct) {
      {
        var Ke = Function.call.bind(Ln);
        for (var vt in b)
          if (Ke(b, vt)) {
            var ot = void 0;
            try {
              if (typeof b[vt] != "function") {
                var Rn = Error((pe || "React class") + ": " + se + " type `" + vt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[vt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              ot = b[vt](G, vt, pe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              ot = on;
            }
            ot && !(ot instanceof Error) && (Dr(ct), nt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", se, vt, typeof ot), Dr(null)), ot instanceof Error && !(ot.message in fa) && (fa[ot.message] = !0, Dr(ct), nt("Failed %s type: %s", se, ot.message), Dr(null));
          }
      }
    }
    var Gn = Array.isArray;
    function Kn(b) {
      return Gn(b);
    }
    function Rr(b) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, se = G && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return se;
      }
    }
    function Ka(b) {
      try {
        return Nn(b), !1;
      } catch {
        return !0;
      }
    }
    function Nn(b) {
      return "" + b;
    }
    function or(b) {
      if (Ka(b))
        return nt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(b)), Nn(b);
    }
    var qr = Tt.ReactCurrentOwner, Mi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, oe;
    function ze(b) {
      if (Ln.call(b, "ref")) {
        var G = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function it(b) {
      if (Ln.call(b, "key")) {
        var G = Object.getOwnPropertyDescriptor(b, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Ut(b, G) {
      typeof b.ref == "string" && qr.current;
    }
    function ln(b, G) {
      {
        var se = function() {
          da || (da = !0, nt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        se.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function un(b, G) {
      {
        var se = function() {
          oe || (oe = !0, nt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        se.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var sn = function(b, G, se, pe, ct, Ke, vt) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: b,
        key: G,
        ref: se,
        props: vt,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ct
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function Xn(b, G, se, pe, ct) {
      {
        var Ke, vt = {}, ot = null, Rn = null;
        se !== void 0 && (or(se), ot = "" + se), it(G) && (or(G.key), ot = "" + G.key), ze(G) && (Rn = G.ref, Ut(G, ct));
        for (Ke in G)
          Ln.call(G, Ke) && !Mi.hasOwnProperty(Ke) && (vt[Ke] = G[Ke]);
        if (b && b.defaultProps) {
          var on = b.defaultProps;
          for (Ke in on)
            vt[Ke] === void 0 && (vt[Ke] = on[Ke]);
        }
        if (ot || Rn) {
          var cn = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ot && ln(vt, cn), Rn && un(vt, cn);
        }
        return sn(b, ot, Rn, ct, pe, qr.current, vt);
      }
    }
    var an = Tt.ReactCurrentOwner, Wt = Tt.ReactDebugCurrentFrame;
    function zt(b) {
      if (b) {
        var G = b._owner, se = Bn(b.type, b._source, G ? G.type : null);
        Wt.setExtraStackFrame(se);
      } else
        Wt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function ka(b) {
      return typeof b == "object" && b !== null && b.$$typeof === p;
    }
    function Da() {
      {
        if (an.current) {
          var b = He(an.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Ai(b) {
      return "";
    }
    var Xo = {};
    function Jo(b) {
      {
        var G = Da();
        if (!G) {
          var se = typeof b == "string" ? b : b.displayName || b.name;
          se && (G = `

Check the top-level render call using <` + se + ">.");
        }
        return G;
      }
    }
    function Ui(b, G) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var se = Jo(G);
        if (Xo[se])
          return;
        Xo[se] = !0;
        var pe = "";
        b && b._owner && b._owner !== an.current && (pe = " It was passed a child from " + He(b._owner.type) + "."), zt(b), nt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, pe), zt(null);
      }
    }
    function Zo(b, G) {
      {
        if (typeof b != "object")
          return;
        if (Kn(b))
          for (var se = 0; se < b.length; se++) {
            var pe = b[se];
            ka(pe) && Ui(pe, G);
          }
        else if (ka(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ct = jt(b);
          if (typeof ct == "function" && ct !== b.entries)
            for (var Ke = ct.call(b), vt; !(vt = Ke.next()).done; )
              ka(vt.value) && Ui(vt.value, G);
        }
      }
    }
    function ci(b) {
      {
        var G = b.type;
        if (G == null || typeof G == "string")
          return;
        var se;
        if (typeof G == "function")
          se = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === Se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === ne))
          se = G.propTypes;
        else
          return;
        if (se) {
          var pe = He(G);
          Vn(se, b.props, "prop", pe, b);
        } else if (G.PropTypes !== void 0 && !pa) {
          pa = !0;
          var ct = He(G);
          nt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ct || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && nt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(b) {
      {
        for (var G = Object.keys(b.props), se = 0; se < G.length; se++) {
          var pe = G[se];
          if (pe !== "children" && pe !== "key") {
            zt(b), nt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), zt(null);
            break;
          }
        }
        b.ref !== null && (zt(b), nt("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var lr = {};
    function ha(b, G, se, pe, ct, Ke) {
      {
        var vt = pn(b);
        if (!vt) {
          var ot = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Ai();
          Rn ? ot += Rn : ot += Da();
          var on;
          b === null ? on = "null" : Kn(b) ? on = "array" : b !== void 0 && b.$$typeof === p ? (on = "<" + (He(b.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : on = typeof b, nt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, ot);
        }
        var cn = Xn(b, G, se, ct, Ke);
        if (cn == null)
          return cn;
        if (vt) {
          var Tr = G.children;
          if (Tr !== void 0)
            if (pe)
              if (Kn(Tr)) {
                for (var Xa = 0; Xa < Tr.length; Xa++)
                  Zo(Tr[Xa], b);
                Object.freeze && Object.freeze(Tr);
              } else
                nt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zo(Tr, b);
        }
        if (Ln.call(G, "key")) {
          var Ft = He(b), vn = Object.keys(G).filter(function(Fi) {
            return Fi !== "key";
          }), et = vn.length > 0 ? "{key: someKey, " + vn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[Ft + et]) {
            var pi = vn.length > 0 ? "{" + vn.join(": ..., ") + ": ...}" : "{}";
            nt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, Ft, pi, Ft), lr[Ft + et] = !0;
          }
        }
        return b === N ? va(cn) : ci(cn), cn;
      }
    }
    function Wr(b, G, se) {
      return ha(b, G, se, !0);
    }
    function fi(b, G, se) {
      return ha(b, G, se, !1);
    }
    var di = fi, zi = Wr;
    cv.Fragment = N, cv.jsx = di, cv.jsxs = zi;
  }(), cv;
}
var GT;
function kD() {
  if (GT) return dy.exports;
  GT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? dy.exports = bD() : dy.exports = xD(), dy.exports;
}
var od = kD(), DD = function(f) {
  return Yl.useEffect(function() {
    if (window && document) {
      var p = document.getElementById("GoSaffeCaptureComponent");
      if (!p) {
        var S = document.createElement("script");
        S.id = "GoSaffeCaptureComponent";
        var N = document.getElementsByTagName("body")[0];
        S.src = "https://go.saffe.ai/cdn/latest", N.appendChild(S), S.addEventListener("load", function() {
          window.GoSaffe.init(f.captureKey, f.user, f.endToEndId, f.type);
        });
      }
    }
  }, []), id.createElement("div", null);
}, OD = function(f) {
  return Yl.useEffect(function() {
    window.addEventListener("message", function(p) {
      if (p.data.source === "go-saffe-capture")
        switch (p.data.payload.event) {
          case "close":
            return f.onClose();
          case "finish":
            return f.onFinish();
          case "timeout":
            return f.onTimeout();
        }
    });
  }, []), id.createElement(id.StrictMode, null, id.createElement(DD, {
    captureKey: f.captureKey,
    endToEndId: f.endToEndId,
    type: f.type,
    user: f.user
  }));
};
const Ko = /* @__PURE__ */ Object.create(null);
Ko.open = "0";
Ko.close = "1";
Ko.ping = "2";
Ko.pong = "3";
Ko.message = "4";
Ko.upgrade = "5";
Ko.noop = "6";
const hy = /* @__PURE__ */ Object.create(null);
Object.keys(Ko).forEach((m) => {
  hy[Ko[m]] = m;
});
const YE = { type: "error", data: "parser error" }, r_ = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", a_ = typeof ArrayBuffer == "function", i_ = (m) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(m) : m && m.buffer instanceof ArrayBuffer, XE = ({ type: m, data: f }, p, S) => r_ && f instanceof Blob ? p ? S(f) : KT(f, S) : a_ && (f instanceof ArrayBuffer || i_(f)) ? p ? S(f) : KT(new Blob([f]), S) : S(Ko[m] + (f || "")), KT = (m, f) => {
  const p = new FileReader();
  return p.onload = function() {
    const S = p.result.split(",")[1];
    f("b" + (S || ""));
  }, p.readAsDataURL(m);
};
function XT(m) {
  return m instanceof Uint8Array ? m : m instanceof ArrayBuffer ? new Uint8Array(m) : new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
}
let BE;
function LD(m, f) {
  if (r_ && m.data instanceof Blob)
    return m.data.arrayBuffer().then(XT).then(f);
  if (a_ && (m.data instanceof ArrayBuffer || i_(m.data)))
    return f(XT(m.data));
  XE(m, !1, (p) => {
    BE || (BE = new TextEncoder()), f(BE.encode(p));
  });
}
const JT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pv = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let m = 0; m < JT.length; m++)
  pv[JT.charCodeAt(m)] = m;
const ND = (m) => {
  let f = m.length * 0.75, p = m.length, S, N = 0, Y, ee, R, ce;
  m[m.length - 1] === "=" && (f--, m[m.length - 2] === "=" && f--);
  const Se = new ArrayBuffer(f), ie = new Uint8Array(Se);
  for (S = 0; S < p; S += 4)
    Y = pv[m.charCodeAt(S)], ee = pv[m.charCodeAt(S + 1)], R = pv[m.charCodeAt(S + 2)], ce = pv[m.charCodeAt(S + 3)], ie[N++] = Y << 2 | ee >> 4, ie[N++] = (ee & 15) << 4 | R >> 2, ie[N++] = (R & 3) << 6 | ce & 63;
  return Se;
}, MD = typeof ArrayBuffer == "function", JE = (m, f) => {
  if (typeof m != "string")
    return {
      type: "message",
      data: o_(m, f)
    };
  const p = m.charAt(0);
  return p === "b" ? {
    type: "message",
    data: AD(m.substring(1), f)
  } : hy[p] ? m.length > 1 ? {
    type: hy[p],
    data: m.substring(1)
  } : {
    type: hy[p]
  } : YE;
}, AD = (m, f) => {
  if (MD) {
    const p = ND(m);
    return o_(p, f);
  } else
    return { base64: !0, data: m };
}, o_ = (m, f) => {
  switch (f) {
    case "blob":
      return m instanceof Blob ? m : new Blob([m]);
    case "arraybuffer":
    default:
      return m instanceof ArrayBuffer ? m : m.buffer;
  }
}, l_ = "", UD = (m, f) => {
  const p = m.length, S = new Array(p);
  let N = 0;
  m.forEach((Y, ee) => {
    XE(Y, !1, (R) => {
      S[ee] = R, ++N === p && f(S.join(l_));
    });
  });
}, zD = (m, f) => {
  const p = m.split(l_), S = [];
  for (let N = 0; N < p.length; N++) {
    const Y = JE(p[N], f);
    if (S.push(Y), Y.type === "error")
      break;
  }
  return S;
};
function FD() {
  return new TransformStream({
    transform(m, f) {
      LD(m, (p) => {
        const S = p.length;
        let N;
        if (S < 126)
          N = new Uint8Array(1), new DataView(N.buffer).setUint8(0, S);
        else if (S < 65536) {
          N = new Uint8Array(3);
          const Y = new DataView(N.buffer);
          Y.setUint8(0, 126), Y.setUint16(1, S);
        } else {
          N = new Uint8Array(9);
          const Y = new DataView(N.buffer);
          Y.setUint8(0, 127), Y.setBigUint64(1, BigInt(S));
        }
        m.data && typeof m.data != "string" && (N[0] |= 128), f.enqueue(N), f.enqueue(p);
      });
    }
  });
}
let VE;
function py(m) {
  return m.reduce((f, p) => f + p.length, 0);
}
function vy(m, f) {
  if (m[0].length === f)
    return m.shift();
  const p = new Uint8Array(f);
  let S = 0;
  for (let N = 0; N < f; N++)
    p[N] = m[0][S++], S === m[0].length && (m.shift(), S = 0);
  return m.length && S < m[0].length && (m[0] = m[0].slice(S)), p;
}
function jD(m, f) {
  VE || (VE = new TextDecoder());
  const p = [];
  let S = 0, N = -1, Y = !1;
  return new TransformStream({
    transform(ee, R) {
      for (p.push(ee); ; ) {
        if (S === 0) {
          if (py(p) < 1)
            break;
          const ce = vy(p, 1);
          Y = (ce[0] & 128) === 128, N = ce[0] & 127, N < 126 ? S = 3 : N === 126 ? S = 1 : S = 2;
        } else if (S === 1) {
          if (py(p) < 2)
            break;
          const ce = vy(p, 2);
          N = new DataView(ce.buffer, ce.byteOffset, ce.length).getUint16(0), S = 3;
        } else if (S === 2) {
          if (py(p) < 8)
            break;
          const ce = vy(p, 8), Se = new DataView(ce.buffer, ce.byteOffset, ce.length), ie = Se.getUint32(0);
          if (ie > Math.pow(2, 21) - 1) {
            R.enqueue(YE);
            break;
          }
          N = ie * Math.pow(2, 32) + Se.getUint32(4), S = 3;
        } else {
          if (py(p) < N)
            break;
          const ce = vy(p, N);
          R.enqueue(JE(Y ? ce : VE.decode(ce), f)), S = 0;
        }
        if (N === 0 || N > m) {
          R.enqueue(YE);
          break;
        }
      }
    }
  });
}
const u_ = 4;
function ar(m) {
  if (m) return HD(m);
}
function HD(m) {
  for (var f in ar.prototype)
    m[f] = ar.prototype[f];
  return m;
}
ar.prototype.on = ar.prototype.addEventListener = function(m, f) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + m] = this._callbacks["$" + m] || []).push(f), this;
};
ar.prototype.once = function(m, f) {
  function p() {
    this.off(m, p), f.apply(this, arguments);
  }
  return p.fn = f, this.on(m, p), this;
};
ar.prototype.off = ar.prototype.removeListener = ar.prototype.removeAllListeners = ar.prototype.removeEventListener = function(m, f) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var p = this._callbacks["$" + m];
  if (!p) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + m], this;
  for (var S, N = 0; N < p.length; N++)
    if (S = p[N], S === f || S.fn === f) {
      p.splice(N, 1);
      break;
    }
  return p.length === 0 && delete this._callbacks["$" + m], this;
};
ar.prototype.emit = function(m) {
  this._callbacks = this._callbacks || {};
  for (var f = new Array(arguments.length - 1), p = this._callbacks["$" + m], S = 1; S < arguments.length; S++)
    f[S - 1] = arguments[S];
  if (p) {
    p = p.slice(0);
    for (var S = 0, N = p.length; S < N; ++S)
      p[S].apply(this, f);
  }
  return this;
};
ar.prototype.emitReserved = ar.prototype.emit;
ar.prototype.listeners = function(m) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + m] || [];
};
ar.prototype.hasListeners = function(m) {
  return !!this.listeners(m).length;
};
const Sy = typeof Promise == "function" && typeof Promise.resolve == "function" ? (f) => Promise.resolve().then(f) : (f, p) => p(f, 0), Ni = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), PD = "arraybuffer";
function s_(m, ...f) {
  return f.reduce((p, S) => (m.hasOwnProperty(S) && (p[S] = m[S]), p), {});
}
const BD = Ni.setTimeout, VD = Ni.clearTimeout;
function Ey(m, f) {
  f.useNativeTimers ? (m.setTimeoutFn = BD.bind(Ni), m.clearTimeoutFn = VD.bind(Ni)) : (m.setTimeoutFn = Ni.setTimeout.bind(Ni), m.clearTimeoutFn = Ni.clearTimeout.bind(Ni));
}
const $D = 1.33;
function ID(m) {
  return typeof m == "string" ? YD(m) : Math.ceil((m.byteLength || m.size) * $D);
}
function YD(m) {
  let f = 0, p = 0;
  for (let S = 0, N = m.length; S < N; S++)
    f = m.charCodeAt(S), f < 128 ? p += 1 : f < 2048 ? p += 2 : f < 55296 || f >= 57344 ? p += 3 : (S++, p += 4);
  return p;
}
function c_() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function qD(m) {
  let f = "";
  for (let p in m)
    m.hasOwnProperty(p) && (f.length && (f += "&"), f += encodeURIComponent(p) + "=" + encodeURIComponent(m[p]));
  return f;
}
function WD(m) {
  let f = {}, p = m.split("&");
  for (let S = 0, N = p.length; S < N; S++) {
    let Y = p[S].split("=");
    f[decodeURIComponent(Y[0])] = decodeURIComponent(Y[1]);
  }
  return f;
}
class QD extends Error {
  constructor(f, p, S) {
    super(f), this.description = p, this.context = S, this.type = "TransportError";
  }
}
class ZE extends ar {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(f) {
    super(), this.writable = !1, Ey(this, f), this.opts = f, this.query = f.query, this.socket = f.socket, this.supportsBinary = !f.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(f, p, S) {
    return super.emitReserved("error", new QD(f, p, S)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(f) {
    this.readyState === "open" && this.write(f);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(f) {
    const p = JE(f, this.socket.binaryType);
    this.onPacket(p);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(f) {
    super.emitReserved("packet", f);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(f) {
    this.readyState = "closed", super.emitReserved("close", f);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(f) {
  }
  createUri(f, p = {}) {
    return f + "://" + this._hostname() + this._port() + this.opts.path + this._query(p);
  }
  _hostname() {
    const f = this.opts.hostname;
    return f.indexOf(":") === -1 ? f : "[" + f + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(f) {
    const p = qD(f);
    return p.length ? "?" + p : "";
  }
}
class GD extends ZE {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(f) {
    this.readyState = "pausing";
    const p = () => {
      this.readyState = "paused", f();
    };
    if (this._polling || !this.writable) {
      let S = 0;
      this._polling && (S++, this.once("pollComplete", function() {
        --S || p();
      })), this.writable || (S++, this.once("drain", function() {
        --S || p();
      }));
    } else
      p();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(f) {
    const p = (S) => {
      if (this.readyState === "opening" && S.type === "open" && this.onOpen(), S.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(S);
    };
    zD(f, this.socket.binaryType).forEach(p), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const f = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? f() : this.once("open", f);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(f) {
    this.writable = !1, UD(f, (p) => {
      this.doWrite(p, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const f = this.opts.secure ? "https" : "http", p = this.query || {};
    return this.opts.timestampRequests !== !1 && (p[this.opts.timestampParam] = c_()), !this.supportsBinary && !p.sid && (p.b64 = 1), this.createUri(f, p);
  }
}
let f_ = !1;
try {
  f_ = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const KD = f_;
function XD() {
}
class JD extends GD {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(f) {
    if (super(f), typeof location < "u") {
      const p = location.protocol === "https:";
      let S = location.port;
      S || (S = p ? "443" : "80"), this.xd = typeof location < "u" && f.hostname !== location.hostname || S !== f.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(f, p) {
    const S = this.request({
      method: "POST",
      data: f
    });
    S.on("success", p), S.on("error", (N, Y) => {
      this.onError("xhr post error", N, Y);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const f = this.request();
    f.on("data", this.onData.bind(this)), f.on("error", (p, S) => {
      this.onError("xhr poll error", p, S);
    }), this.pollXhr = f;
  }
}
class Go extends ar {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(f, p, S) {
    super(), this.createRequest = f, Ey(this, S), this._opts = S, this._method = S.method || "GET", this._uri = p, this._data = S.data !== void 0 ? S.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var f;
    const p = s_(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    p.xdomain = !!this._opts.xd;
    const S = this._xhr = this.createRequest(p);
    try {
      S.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          S.setDisableHeaderCheck && S.setDisableHeaderCheck(!0);
          for (let N in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(N) && S.setRequestHeader(N, this._opts.extraHeaders[N]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          S.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        S.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (f = this._opts.cookieJar) === null || f === void 0 || f.addCookies(S), "withCredentials" in S && (S.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (S.timeout = this._opts.requestTimeout), S.onreadystatechange = () => {
        var N;
        S.readyState === 3 && ((N = this._opts.cookieJar) === null || N === void 0 || N.parseCookies(
          // @ts-ignore
          S.getResponseHeader("set-cookie")
        )), S.readyState === 4 && (S.status === 200 || S.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof S.status == "number" ? S.status : 0);
        }, 0));
      }, S.send(this._data);
    } catch (N) {
      this.setTimeoutFn(() => {
        this._onError(N);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Go.requestsCount++, Go.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(f) {
    this.emitReserved("error", f, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(f) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = XD, f)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Go.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const f = this._xhr.responseText;
    f !== null && (this.emitReserved("data", f), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Go.requestsCount = 0;
Go.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ZT);
  else if (typeof addEventListener == "function") {
    const m = "onpagehide" in Ni ? "pagehide" : "unload";
    addEventListener(m, ZT, !1);
  }
}
function ZT() {
  for (let m in Go.requests)
    Go.requests.hasOwnProperty(m) && Go.requests[m].abort();
}
const ZD = function() {
  const m = d_({
    xdomain: !1
  });
  return m && m.responseType !== null;
}();
class eO extends JD {
  constructor(f) {
    super(f);
    const p = f && f.forceBase64;
    this.supportsBinary = ZD && !p;
  }
  request(f = {}) {
    return Object.assign(f, { xd: this.xd }, this.opts), new Go(d_, this.uri(), f);
  }
}
function d_(m) {
  const f = m.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!f || KD))
      return new XMLHttpRequest();
  } catch {
  }
  if (!f)
    try {
      return new Ni[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const p_ = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class tO extends ZE {
  get name() {
    return "websocket";
  }
  doOpen() {
    const f = this.uri(), p = this.opts.protocols, S = p_ ? {} : s_(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (S.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(f, p, S);
    } catch (N) {
      return this.emitReserved("error", N);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (f) => this.onClose({
      description: "websocket connection closed",
      context: f
    }), this.ws.onmessage = (f) => this.onData(f.data), this.ws.onerror = (f) => this.onError("websocket error", f);
  }
  write(f) {
    this.writable = !1;
    for (let p = 0; p < f.length; p++) {
      const S = f[p], N = p === f.length - 1;
      XE(S, this.supportsBinary, (Y) => {
        try {
          this.doWrite(S, Y);
        } catch {
        }
        N && Sy(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const f = this.opts.secure ? "wss" : "ws", p = this.query || {};
    return this.opts.timestampRequests && (p[this.opts.timestampParam] = c_()), this.supportsBinary || (p.b64 = 1), this.createUri(f, p);
  }
}
const $E = Ni.WebSocket || Ni.MozWebSocket;
class nO extends tO {
  createSocket(f, p, S) {
    return p_ ? new $E(f, p, S) : p ? new $E(f, p) : new $E(f);
  }
  doWrite(f, p) {
    this.ws.send(p);
  }
}
class rO extends ZE {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (f) {
      return this.emitReserved("error", f);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((f) => {
      this.onError("webtransport error", f);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((f) => {
        const p = jD(Number.MAX_SAFE_INTEGER, this.socket.binaryType), S = f.readable.pipeThrough(p).getReader(), N = FD();
        N.readable.pipeTo(f.writable), this._writer = N.writable.getWriter();
        const Y = () => {
          S.read().then(({ done: R, value: ce }) => {
            R || (this.onPacket(ce), Y());
          }).catch((R) => {
          });
        };
        Y();
        const ee = { type: "open" };
        this.query.sid && (ee.data = `{"sid":"${this.query.sid}"}`), this._writer.write(ee).then(() => this.onOpen());
      });
    });
  }
  write(f) {
    this.writable = !1;
    for (let p = 0; p < f.length; p++) {
      const S = f[p], N = p === f.length - 1;
      this._writer.write(S).then(() => {
        N && Sy(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var f;
    (f = this._transport) === null || f === void 0 || f.close();
  }
}
const aO = {
  websocket: nO,
  webtransport: rO,
  polling: eO
}, iO = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, oO = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function qE(m) {
  if (m.length > 8e3)
    throw "URI too long";
  const f = m, p = m.indexOf("["), S = m.indexOf("]");
  p != -1 && S != -1 && (m = m.substring(0, p) + m.substring(p, S).replace(/:/g, ";") + m.substring(S, m.length));
  let N = iO.exec(m || ""), Y = {}, ee = 14;
  for (; ee--; )
    Y[oO[ee]] = N[ee] || "";
  return p != -1 && S != -1 && (Y.source = f, Y.host = Y.host.substring(1, Y.host.length - 1).replace(/;/g, ":"), Y.authority = Y.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), Y.ipv6uri = !0), Y.pathNames = lO(Y, Y.path), Y.queryKey = uO(Y, Y.query), Y;
}
function lO(m, f) {
  const p = /\/{2,9}/g, S = f.replace(p, "/").split("/");
  return (f.slice(0, 1) == "/" || f.length === 0) && S.splice(0, 1), f.slice(-1) == "/" && S.splice(S.length - 1, 1), S;
}
function uO(m, f) {
  const p = {};
  return f.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(S, N, Y) {
    N && (p[N] = Y);
  }), p;
}
const WE = typeof addEventListener == "function" && typeof removeEventListener == "function", my = [];
WE && addEventListener("offline", () => {
  my.forEach((m) => m());
}, !1);
class Gu extends ar {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(f, p) {
    if (super(), this.binaryType = PD, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, f && typeof f == "object" && (p = f, f = null), f) {
      const S = qE(f);
      p.hostname = S.host, p.secure = S.protocol === "https" || S.protocol === "wss", p.port = S.port, S.query && (p.query = S.query);
    } else p.host && (p.hostname = qE(p.host).host);
    Ey(this, p), this.secure = p.secure != null ? p.secure : typeof location < "u" && location.protocol === "https:", p.hostname && !p.port && (p.port = this.secure ? "443" : "80"), this.hostname = p.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = p.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, p.transports.forEach((S) => {
      const N = S.prototype.name;
      this.transports.push(N), this._transportsByName[N] = S;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, p), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = WD(this.opts.query)), WE && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, my.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(f) {
    const p = Object.assign({}, this.opts.query);
    p.EIO = u_, p.transport = f, this.id && (p.sid = this.id);
    const S = Object.assign({}, this.opts, {
      query: p,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[f]);
    return new this._transportsByName[f](S);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const f = this.opts.rememberUpgrade && Gu.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const p = this.createTransport(f);
    p.open(), this.setTransport(p);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(f) {
    this.transport && this.transport.removeAllListeners(), this.transport = f, f.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (p) => this._onClose("transport close", p));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Gu.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(f) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", f), this.emitReserved("heartbeat"), f.type) {
        case "open":
          this.onHandshake(JSON.parse(f.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const p = new Error("server error");
          p.code = f.data, this._onError(p);
          break;
        case "message":
          this.emitReserved("data", f.data), this.emitReserved("message", f.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(f) {
    this.emitReserved("handshake", f), this.id = f.sid, this.transport.query.sid = f.sid, this._pingInterval = f.pingInterval, this._pingTimeout = f.pingTimeout, this._maxPayload = f.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const f = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + f, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, f), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const f = this._getWritablePackets();
      this.transport.send(f), this._prevBufferLen = f.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let p = 1;
    for (let S = 0; S < this.writeBuffer.length; S++) {
      const N = this.writeBuffer[S].data;
      if (N && (p += ID(N)), S > 0 && p > this._maxPayload)
        return this.writeBuffer.slice(0, S);
      p += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const f = Date.now() > this._pingTimeoutTime;
    return f && (this._pingTimeoutTime = 0, Sy(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), f;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(f, p, S) {
    return this._sendPacket("message", f, p, S), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(f, p, S) {
    return this._sendPacket("message", f, p, S), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(f, p, S, N) {
    if (typeof p == "function" && (N = p, p = void 0), typeof S == "function" && (N = S, S = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    S = S || {}, S.compress = S.compress !== !1;
    const Y = {
      type: f,
      data: p,
      options: S
    };
    this.emitReserved("packetCreate", Y), this.writeBuffer.push(Y), N && this.once("flush", N), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const f = () => {
      this._onClose("forced close"), this.transport.close();
    }, p = () => {
      this.off("upgrade", p), this.off("upgradeError", p), f();
    }, S = () => {
      this.once("upgrade", p), this.once("upgradeError", p);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? S() : f();
    }) : this.upgrading ? S() : f()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(f) {
    if (Gu.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", f), this._onClose("transport error", f);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(f, p) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), WE && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const S = my.indexOf(this._offlineEventListener);
        S !== -1 && my.splice(S, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", f, p), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Gu.protocol = u_;
class sO extends Gu {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let f = 0; f < this._upgrades.length; f++)
        this._probe(this._upgrades[f]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(f) {
    let p = this.createTransport(f), S = !1;
    Gu.priorWebsocketSuccess = !1;
    const N = () => {
      S || (p.send([{ type: "ping", data: "probe" }]), p.once("packet", (Oe) => {
        if (!S)
          if (Oe.type === "pong" && Oe.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", p), !p)
              return;
            Gu.priorWebsocketSuccess = p.name === "websocket", this.transport.pause(() => {
              S || this.readyState !== "closed" && (ie(), this.setTransport(p), p.send([{ type: "upgrade" }]), this.emitReserved("upgrade", p), p = null, this.upgrading = !1, this.flush());
            });
          } else {
            const ne = new Error("probe error");
            ne.transport = p.name, this.emitReserved("upgradeError", ne);
          }
      }));
    };
    function Y() {
      S || (S = !0, ie(), p.close(), p = null);
    }
    const ee = (Oe) => {
      const ne = new Error("probe error: " + Oe);
      ne.transport = p.name, Y(), this.emitReserved("upgradeError", ne);
    };
    function R() {
      ee("transport closed");
    }
    function ce() {
      ee("socket closed");
    }
    function Se(Oe) {
      p && Oe.name !== p.name && Y();
    }
    const ie = () => {
      p.removeListener("open", N), p.removeListener("error", ee), p.removeListener("close", R), this.off("close", ce), this.off("upgrading", Se);
    };
    p.once("open", N), p.once("error", ee), p.once("close", R), this.once("close", ce), this.once("upgrading", Se), this._upgrades.indexOf("webtransport") !== -1 && f !== "webtransport" ? this.setTimeoutFn(() => {
      S || p.open();
    }, 200) : p.open();
  }
  onHandshake(f) {
    this._upgrades = this._filterUpgrades(f.upgrades), super.onHandshake(f);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(f) {
    const p = [];
    for (let S = 0; S < f.length; S++)
      ~this.transports.indexOf(f[S]) && p.push(f[S]);
    return p;
  }
}
let cO = class extends sO {
  constructor(f, p = {}) {
    const S = typeof f == "object" ? f : p;
    (!S.transports || S.transports && typeof S.transports[0] == "string") && (S.transports = (S.transports || ["polling", "websocket", "webtransport"]).map((N) => aO[N]).filter((N) => !!N)), super(f, S);
  }
};
function fO(m, f = "", p) {
  let S = m;
  p = p || typeof location < "u" && location, m == null && (m = p.protocol + "//" + p.host), typeof m == "string" && (m.charAt(0) === "/" && (m.charAt(1) === "/" ? m = p.protocol + m : m = p.host + m), /^(https?|wss?):\/\//.test(m) || (typeof p < "u" ? m = p.protocol + "//" + m : m = "https://" + m), S = qE(m)), S.port || (/^(http|ws)$/.test(S.protocol) ? S.port = "80" : /^(http|ws)s$/.test(S.protocol) && (S.port = "443")), S.path = S.path || "/";
  const Y = S.host.indexOf(":") !== -1 ? "[" + S.host + "]" : S.host;
  return S.id = S.protocol + "://" + Y + ":" + S.port + f, S.href = S.protocol + "://" + Y + (p && p.port === S.port ? "" : ":" + S.port), S;
}
const dO = typeof ArrayBuffer == "function", pO = (m) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(m) : m.buffer instanceof ArrayBuffer, v_ = Object.prototype.toString, vO = typeof Blob == "function" || typeof Blob < "u" && v_.call(Blob) === "[object BlobConstructor]", hO = typeof File == "function" || typeof File < "u" && v_.call(File) === "[object FileConstructor]";
function e0(m) {
  return dO && (m instanceof ArrayBuffer || pO(m)) || vO && m instanceof Blob || hO && m instanceof File;
}
function yy(m, f) {
  if (!m || typeof m != "object")
    return !1;
  if (Array.isArray(m)) {
    for (let p = 0, S = m.length; p < S; p++)
      if (yy(m[p]))
        return !0;
    return !1;
  }
  if (e0(m))
    return !0;
  if (m.toJSON && typeof m.toJSON == "function" && arguments.length === 1)
    return yy(m.toJSON(), !0);
  for (const p in m)
    if (Object.prototype.hasOwnProperty.call(m, p) && yy(m[p]))
      return !0;
  return !1;
}
function mO(m) {
  const f = [], p = m.data, S = m;
  return S.data = QE(p, f), S.attachments = f.length, { packet: S, buffers: f };
}
function QE(m, f) {
  if (!m)
    return m;
  if (e0(m)) {
    const p = { _placeholder: !0, num: f.length };
    return f.push(m), p;
  } else if (Array.isArray(m)) {
    const p = new Array(m.length);
    for (let S = 0; S < m.length; S++)
      p[S] = QE(m[S], f);
    return p;
  } else if (typeof m == "object" && !(m instanceof Date)) {
    const p = {};
    for (const S in m)
      Object.prototype.hasOwnProperty.call(m, S) && (p[S] = QE(m[S], f));
    return p;
  }
  return m;
}
function yO(m, f) {
  return m.data = GE(m.data, f), delete m.attachments, m;
}
function GE(m, f) {
  if (!m)
    return m;
  if (m && m._placeholder === !0) {
    if (typeof m.num == "number" && m.num >= 0 && m.num < f.length)
      return f[m.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(m))
    for (let p = 0; p < m.length; p++)
      m[p] = GE(m[p], f);
  else if (typeof m == "object")
    for (const p in m)
      Object.prototype.hasOwnProperty.call(m, p) && (m[p] = GE(m[p], f));
  return m;
}
const gO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], SO = 5;
var Dt;
(function(m) {
  m[m.CONNECT = 0] = "CONNECT", m[m.DISCONNECT = 1] = "DISCONNECT", m[m.EVENT = 2] = "EVENT", m[m.ACK = 3] = "ACK", m[m.CONNECT_ERROR = 4] = "CONNECT_ERROR", m[m.BINARY_EVENT = 5] = "BINARY_EVENT", m[m.BINARY_ACK = 6] = "BINARY_ACK";
})(Dt || (Dt = {}));
class EO {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(f) {
    this.replacer = f;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(f) {
    return (f.type === Dt.EVENT || f.type === Dt.ACK) && yy(f) ? this.encodeAsBinary({
      type: f.type === Dt.EVENT ? Dt.BINARY_EVENT : Dt.BINARY_ACK,
      nsp: f.nsp,
      data: f.data,
      id: f.id
    }) : [this.encodeAsString(f)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(f) {
    let p = "" + f.type;
    return (f.type === Dt.BINARY_EVENT || f.type === Dt.BINARY_ACK) && (p += f.attachments + "-"), f.nsp && f.nsp !== "/" && (p += f.nsp + ","), f.id != null && (p += f.id), f.data != null && (p += JSON.stringify(f.data, this.replacer)), p;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(f) {
    const p = mO(f), S = this.encodeAsString(p.packet), N = p.buffers;
    return N.unshift(S), N;
  }
}
function e_(m) {
  return Object.prototype.toString.call(m) === "[object Object]";
}
class t0 extends ar {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(f) {
    super(), this.reviver = f;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(f) {
    let p;
    if (typeof f == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      p = this.decodeString(f);
      const S = p.type === Dt.BINARY_EVENT;
      S || p.type === Dt.BINARY_ACK ? (p.type = S ? Dt.EVENT : Dt.ACK, this.reconstructor = new CO(p), p.attachments === 0 && super.emitReserved("decoded", p)) : super.emitReserved("decoded", p);
    } else if (e0(f) || f.base64)
      if (this.reconstructor)
        p = this.reconstructor.takeBinaryData(f), p && (this.reconstructor = null, super.emitReserved("decoded", p));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + f);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(f) {
    let p = 0;
    const S = {
      type: Number(f.charAt(0))
    };
    if (Dt[S.type] === void 0)
      throw new Error("unknown packet type " + S.type);
    if (S.type === Dt.BINARY_EVENT || S.type === Dt.BINARY_ACK) {
      const Y = p + 1;
      for (; f.charAt(++p) !== "-" && p != f.length; )
        ;
      const ee = f.substring(Y, p);
      if (ee != Number(ee) || f.charAt(p) !== "-")
        throw new Error("Illegal attachments");
      S.attachments = Number(ee);
    }
    if (f.charAt(p + 1) === "/") {
      const Y = p + 1;
      for (; ++p && !(f.charAt(p) === "," || p === f.length); )
        ;
      S.nsp = f.substring(Y, p);
    } else
      S.nsp = "/";
    const N = f.charAt(p + 1);
    if (N !== "" && Number(N) == N) {
      const Y = p + 1;
      for (; ++p; ) {
        const ee = f.charAt(p);
        if (ee == null || Number(ee) != ee) {
          --p;
          break;
        }
        if (p === f.length)
          break;
      }
      S.id = Number(f.substring(Y, p + 1));
    }
    if (f.charAt(++p)) {
      const Y = this.tryParse(f.substr(p));
      if (t0.isPayloadValid(S.type, Y))
        S.data = Y;
      else
        throw new Error("invalid payload");
    }
    return S;
  }
  tryParse(f) {
    try {
      return JSON.parse(f, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(f, p) {
    switch (f) {
      case Dt.CONNECT:
        return e_(p);
      case Dt.DISCONNECT:
        return p === void 0;
      case Dt.CONNECT_ERROR:
        return typeof p == "string" || e_(p);
      case Dt.EVENT:
      case Dt.BINARY_EVENT:
        return Array.isArray(p) && (typeof p[0] == "number" || typeof p[0] == "string" && gO.indexOf(p[0]) === -1);
      case Dt.ACK:
      case Dt.BINARY_ACK:
        return Array.isArray(p);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class CO {
  constructor(f) {
    this.packet = f, this.buffers = [], this.reconPack = f;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(f) {
    if (this.buffers.push(f), this.buffers.length === this.reconPack.attachments) {
      const p = yO(this.reconPack, this.buffers);
      return this.finishedReconstruction(), p;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const RO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: t0,
  Encoder: EO,
  get PacketType() {
    return Dt;
  },
  protocol: SO
}, Symbol.toStringTag, { value: "Module" }));
function so(m, f, p) {
  return m.on(f, p), function() {
    m.off(f, p);
  };
}
const TO = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class h_ extends ar {
  /**
   * `Socket` constructor.
   */
  constructor(f, p, S) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = f, this.nsp = p, S && S.auth && (this.auth = S.auth), this._opts = Object.assign({}, S), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const f = this.io;
    this.subs = [
      so(f, "open", this.onopen.bind(this)),
      so(f, "packet", this.onpacket.bind(this)),
      so(f, "error", this.onerror.bind(this)),
      so(f, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...f) {
    return f.unshift("message"), this.emit.apply(this, f), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(f, ...p) {
    var S, N, Y;
    if (TO.hasOwnProperty(f))
      throw new Error('"' + f.toString() + '" is a reserved event name');
    if (p.unshift(f), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(p), this;
    const ee = {
      type: Dt.EVENT,
      data: p
    };
    if (ee.options = {}, ee.options.compress = this.flags.compress !== !1, typeof p[p.length - 1] == "function") {
      const ie = this.ids++, Oe = p.pop();
      this._registerAckCallback(ie, Oe), ee.id = ie;
    }
    const R = (N = (S = this.io.engine) === null || S === void 0 ? void 0 : S.transport) === null || N === void 0 ? void 0 : N.writable, ce = this.connected && !(!((Y = this.io.engine) === null || Y === void 0) && Y._hasPingExpired());
    return this.flags.volatile && !R || (ce ? (this.notifyOutgoingListeners(ee), this.packet(ee)) : this.sendBuffer.push(ee)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(f, p) {
    var S;
    const N = (S = this.flags.timeout) !== null && S !== void 0 ? S : this._opts.ackTimeout;
    if (N === void 0) {
      this.acks[f] = p;
      return;
    }
    const Y = this.io.setTimeoutFn(() => {
      delete this.acks[f];
      for (let R = 0; R < this.sendBuffer.length; R++)
        this.sendBuffer[R].id === f && this.sendBuffer.splice(R, 1);
      p.call(this, new Error("operation has timed out"));
    }, N), ee = (...R) => {
      this.io.clearTimeoutFn(Y), p.apply(this, R);
    };
    ee.withError = !0, this.acks[f] = ee;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(f, ...p) {
    return new Promise((S, N) => {
      const Y = (ee, R) => ee ? N(ee) : S(R);
      Y.withError = !0, p.push(Y), this.emit(f, ...p);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(f) {
    let p;
    typeof f[f.length - 1] == "function" && (p = f.pop());
    const S = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: f,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    f.push((N, ...Y) => S !== this._queue[0] ? void 0 : (N !== null ? S.tryCount > this._opts.retries && (this._queue.shift(), p && p(N)) : (this._queue.shift(), p && p(null, ...Y)), S.pending = !1, this._drainQueue())), this._queue.push(S), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(f = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const p = this._queue[0];
    p.pending && !f || (p.pending = !0, p.tryCount++, this.flags = p.flags, this.emit.apply(this, p.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(f) {
    f.nsp = this.nsp, this.io._packet(f);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((f) => {
      this._sendConnectPacket(f);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(f) {
    this.packet({
      type: Dt.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, f) : f
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(f) {
    this.connected || this.emitReserved("connect_error", f);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(f, p) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", f, p), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((f) => {
      if (!this.sendBuffer.some((S) => String(S.id) === f)) {
        const S = this.acks[f];
        delete this.acks[f], S.withError && S.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(f) {
    if (f.nsp === this.nsp)
      switch (f.type) {
        case Dt.CONNECT:
          f.data && f.data.sid ? this.onconnect(f.data.sid, f.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Dt.EVENT:
        case Dt.BINARY_EVENT:
          this.onevent(f);
          break;
        case Dt.ACK:
        case Dt.BINARY_ACK:
          this.onack(f);
          break;
        case Dt.DISCONNECT:
          this.ondisconnect();
          break;
        case Dt.CONNECT_ERROR:
          this.destroy();
          const S = new Error(f.data.message);
          S.data = f.data.data, this.emitReserved("connect_error", S);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(f) {
    const p = f.data || [];
    f.id != null && p.push(this.ack(f.id)), this.connected ? this.emitEvent(p) : this.receiveBuffer.push(Object.freeze(p));
  }
  emitEvent(f) {
    if (this._anyListeners && this._anyListeners.length) {
      const p = this._anyListeners.slice();
      for (const S of p)
        S.apply(this, f);
    }
    super.emit.apply(this, f), this._pid && f.length && typeof f[f.length - 1] == "string" && (this._lastOffset = f[f.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(f) {
    const p = this;
    let S = !1;
    return function(...N) {
      S || (S = !0, p.packet({
        type: Dt.ACK,
        id: f,
        data: N
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(f) {
    const p = this.acks[f.id];
    typeof p == "function" && (delete this.acks[f.id], p.withError && f.data.unshift(null), p.apply(this, f.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(f, p) {
    this.id = f, this.recovered = p && this._pid === p, this._pid = p, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((f) => this.emitEvent(f)), this.receiveBuffer = [], this.sendBuffer.forEach((f) => {
      this.notifyOutgoingListeners(f), this.packet(f);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((f) => f()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Dt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(f) {
    return this.flags.compress = f, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(f) {
    return this.flags.timeout = f, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(f) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(f), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(f) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(f), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(f) {
    if (!this._anyListeners)
      return this;
    if (f) {
      const p = this._anyListeners;
      for (let S = 0; S < p.length; S++)
        if (f === p[S])
          return p.splice(S, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(f) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(f), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(f) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(f), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(f) {
    if (!this._anyOutgoingListeners)
      return this;
    if (f) {
      const p = this._anyOutgoingListeners;
      for (let S = 0; S < p.length; S++)
        if (f === p[S])
          return p.splice(S, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(f) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const p = this._anyOutgoingListeners.slice();
      for (const S of p)
        S.apply(this, f.data);
    }
  }
}
function ld(m) {
  m = m || {}, this.ms = m.min || 100, this.max = m.max || 1e4, this.factor = m.factor || 2, this.jitter = m.jitter > 0 && m.jitter <= 1 ? m.jitter : 0, this.attempts = 0;
}
ld.prototype.duration = function() {
  var m = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var f = Math.random(), p = Math.floor(f * this.jitter * m);
    m = (Math.floor(f * 10) & 1) == 0 ? m - p : m + p;
  }
  return Math.min(m, this.max) | 0;
};
ld.prototype.reset = function() {
  this.attempts = 0;
};
ld.prototype.setMin = function(m) {
  this.ms = m;
};
ld.prototype.setMax = function(m) {
  this.max = m;
};
ld.prototype.setJitter = function(m) {
  this.jitter = m;
};
class KE extends ar {
  constructor(f, p) {
    var S;
    super(), this.nsps = {}, this.subs = [], f && typeof f == "object" && (p = f, f = void 0), p = p || {}, p.path = p.path || "/socket.io", this.opts = p, Ey(this, p), this.reconnection(p.reconnection !== !1), this.reconnectionAttempts(p.reconnectionAttempts || 1 / 0), this.reconnectionDelay(p.reconnectionDelay || 1e3), this.reconnectionDelayMax(p.reconnectionDelayMax || 5e3), this.randomizationFactor((S = p.randomizationFactor) !== null && S !== void 0 ? S : 0.5), this.backoff = new ld({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(p.timeout == null ? 2e4 : p.timeout), this._readyState = "closed", this.uri = f;
    const N = p.parser || RO;
    this.encoder = new N.Encoder(), this.decoder = new N.Decoder(), this._autoConnect = p.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(f) {
    return arguments.length ? (this._reconnection = !!f, f || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(f) {
    return f === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = f, this);
  }
  reconnectionDelay(f) {
    var p;
    return f === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = f, (p = this.backoff) === null || p === void 0 || p.setMin(f), this);
  }
  randomizationFactor(f) {
    var p;
    return f === void 0 ? this._randomizationFactor : (this._randomizationFactor = f, (p = this.backoff) === null || p === void 0 || p.setJitter(f), this);
  }
  reconnectionDelayMax(f) {
    var p;
    return f === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = f, (p = this.backoff) === null || p === void 0 || p.setMax(f), this);
  }
  timeout(f) {
    return arguments.length ? (this._timeout = f, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(f) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new cO(this.uri, this.opts);
    const p = this.engine, S = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const N = so(p, "open", function() {
      S.onopen(), f && f();
    }), Y = (R) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", R), f ? f(R) : this.maybeReconnectOnOpen();
    }, ee = so(p, "error", Y);
    if (this._timeout !== !1) {
      const R = this._timeout, ce = this.setTimeoutFn(() => {
        N(), Y(new Error("timeout")), p.close();
      }, R);
      this.opts.autoUnref && ce.unref(), this.subs.push(() => {
        this.clearTimeoutFn(ce);
      });
    }
    return this.subs.push(N), this.subs.push(ee), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(f) {
    return this.open(f);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const f = this.engine;
    this.subs.push(
      so(f, "ping", this.onping.bind(this)),
      so(f, "data", this.ondata.bind(this)),
      so(f, "error", this.onerror.bind(this)),
      so(f, "close", this.onclose.bind(this)),
      // @ts-ignore
      so(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(f) {
    try {
      this.decoder.add(f);
    } catch (p) {
      this.onclose("parse error", p);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(f) {
    Sy(() => {
      this.emitReserved("packet", f);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(f) {
    this.emitReserved("error", f);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(f, p) {
    let S = this.nsps[f];
    return S ? this._autoConnect && !S.active && S.connect() : (S = new h_(this, f, p), this.nsps[f] = S), S;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(f) {
    const p = Object.keys(this.nsps);
    for (const S of p)
      if (this.nsps[S].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(f) {
    const p = this.encoder.encode(f);
    for (let S = 0; S < p.length; S++)
      this.engine.write(p[S], f.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((f) => f()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(f, p) {
    var S;
    this.cleanup(), (S = this.engine) === null || S === void 0 || S.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", f, p), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const f = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const p = this.backoff.duration();
      this._reconnecting = !0;
      const S = this.setTimeoutFn(() => {
        f.skipReconnect || (this.emitReserved("reconnect_attempt", f.backoff.attempts), !f.skipReconnect && f.open((N) => {
          N ? (f._reconnecting = !1, f.reconnect(), this.emitReserved("reconnect_error", N)) : f.onreconnect();
        }));
      }, p);
      this.opts.autoUnref && S.unref(), this.subs.push(() => {
        this.clearTimeoutFn(S);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const f = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", f);
  }
}
const fv = {};
function gy(m, f) {
  typeof m == "object" && (f = m, m = void 0), f = f || {};
  const p = fO(m, f.path || "/socket.io"), S = p.source, N = p.id, Y = p.path, ee = fv[N] && Y in fv[N].nsps, R = f.forceNew || f["force new connection"] || f.multiplex === !1 || ee;
  let ce;
  return R ? ce = new KE(S, f) : (fv[N] || (fv[N] = new KE(S, f)), ce = fv[N]), p.query && !f.query && (f.query = p.queryKey), ce.socket(p.path, f);
}
Object.assign(gy, {
  Manager: KE,
  Socket: h_,
  io: gy,
  connect: gy
});
const Yr = [];
for (let m = 0; m < 256; ++m)
  Yr.push((m + 256).toString(16).slice(1));
function _O(m, f = 0) {
  return (Yr[m[f + 0]] + Yr[m[f + 1]] + Yr[m[f + 2]] + Yr[m[f + 3]] + "-" + Yr[m[f + 4]] + Yr[m[f + 5]] + "-" + Yr[m[f + 6]] + Yr[m[f + 7]] + "-" + Yr[m[f + 8]] + Yr[m[f + 9]] + "-" + Yr[m[f + 10]] + Yr[m[f + 11]] + Yr[m[f + 12]] + Yr[m[f + 13]] + Yr[m[f + 14]] + Yr[m[f + 15]]).toLowerCase();
}
let IE;
const wO = new Uint8Array(16);
function bO() {
  if (!IE) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    IE = crypto.getRandomValues.bind(crypto);
  }
  return IE(wO);
}
const xO = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), t_ = { randomUUID: xO };
function kO(m, f, p) {
  var N;
  if (t_.randomUUID && !m)
    return t_.randomUUID();
  m = m || {};
  const S = m.random ?? ((N = m.rng) == null ? void 0 : N.call(m)) ?? bO();
  if (S.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, _O(S);
}
const m_ = Yl.createContext(null), DO = ({ children: m }) => {
  const [f, p] = Yl.useState(null), [S, N] = Yl.useState(!1), Y = kO();
  return Yl.useEffect(() => {
    const ee = gy(
      "https://service-capture-437894375097.us-central1.run.app",
      { autoConnect: !0 }
    );
    return p(ee), ee.on("connect", () => {
      console.log("Conectado ao servidor Socket.IO"), N(!0);
    }), ee.on("message", (R) => {
      console.log("Mensagem recebida do servidor:", R), N(!1);
    }), () => {
      ee.disconnect();
    };
  }, []), Yl.useEffect(() => {
    S && f.on("message", (ee) => {
      const R = new CustomEvent("base64", {
        detail: { event: ee },
        cancelable: !0,
        bubbles: !0
      });
      window.dispatchEvent(R);
    });
  }, [S]), /* @__PURE__ */ od.jsx(m_.Provider, { value: { online: S, id: Y }, children: m });
}, OO = () => {
  const m = Yl.useContext(m_);
  if (!m)
    throw new Error("useSocket must be used within a SocketContextProvider");
  return m;
}, LO = ({ secret: m, user: f }) => {
  const { online: p, id: S } = OO();
  return /* @__PURE__ */ od.jsx(od.Fragment, { children: p && /* @__PURE__ */ od.jsx(
    OD,
    {
      captureKey: m,
      endToEndId: S,
      type: "verification",
      user: f,
      onClose: () => console.log("Fechou"),
      onFinish: () => console.log("Fim"),
      onTimeout: () => console.log("Demorou")
    }
  ) });
}, NO = ({ secret: m, user: f }) => /* @__PURE__ */ od.jsx(DO, { children: /* @__PURE__ */ od.jsx(
  LO,
  {
    secret: m,
    user: f
  }
) }), MO = wD(NO, {
  props: {
    secret: "string",
    user: "string"
  }
});
customElements.get("multi-id-capture") || customElements.define("multi-id-capture", MO);
