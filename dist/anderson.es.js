function rD(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var iy = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zT;
function aD() {
  if (zT) return Rt;
  zT = 1;
  var m = Symbol.for("react.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), ee = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Oe = Symbol.iterator;
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
          case d:
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
  function de() {
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
  } }, Rt.Component = Ve, Rt.Fragment = p, Rt.Profiler = N, Rt.PureComponent = Tt, Rt.StrictMode = S, Rt.Suspense = le, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Rt.act = de, Rt.cloneElement = function(L, Q, Ae) {
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
    return L = { $$typeof: ee, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: I, _context: L }, L.Consumer = L;
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
    return { $$typeof: ue, type: L, compare: Q === void 0 ? null : Q };
  }, Rt.startTransition = function(L) {
    var Q = W.transition;
    W.transition = {};
    try {
      L();
    } finally {
      W.transition = Q;
    }
  }, Rt.unstable_act = de, Rt.useCallback = function(L, Q) {
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
var fv = { exports: {} };
fv.exports;
var FT;
function iD() {
  return FT || (FT = 1, function(m, d) {
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
      var S = "18.3.1", N = Symbol.for("react.element"), I = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), ie = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), jt = Symbol.iterator, Tt = "@@iterator";
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
          var Te = F.map(function(ye) {
            return String(ye);
          });
          Te.unshift("Warning: " + w), Function.prototype.apply.call(console[g], console, Te);
        }
      }
      var de = {};
      function L(g, w) {
        {
          var F = g.constructor, B = F && (F.displayName || F.name) || "ReactClass", ae = B + "." + w;
          if (de[ae])
            return;
          W("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, B), de[ae] = !0;
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
          case I:
            return "Portal";
          case le:
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
            case ue:
              var F = g;
              return Dr(F._context) + ".Provider";
            case Oe:
              return Ga(g, g.render, "ForwardRef");
            case te:
              var B = g.displayName || null;
              return B !== null ? B : Vn(g.type) || "Memo";
            case Ce: {
              var ae = g, Te = ae._payload, ye = ae._init;
              try {
                return Vn(ye(Te));
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
      var ze = function(g, w, F, B, ae, Te, ye) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: N,
          // Built-in properties that belong on the element
          type: g,
          key: w,
          ref: F,
          props: ye,
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
        var B, ae = {}, Te = null, ye = null, $e = null, lt = null;
        if (w != null) {
          or(w) && (ye = w.ref, oe(w)), qr(w) && (fa(w.key), Te = "" + w.key), $e = w.__self === void 0 ? null : w.__self, lt = w.__source === void 0 ? null : w.__source;
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
        if (Te || ye) {
          var tn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Te && Mi(ae, tn), ye && da(ae, tn);
        }
        return ze(g, Te, ye, $e, lt, pt.current, ae);
      }
      function Ut(g, w) {
        var F = ze(g.type, w, g.ref, g._self, g._source, g._owner, g.props);
        return F;
      }
      function ln(g, w, F) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var B, ae = Ae({}, g.props), Te = g.key, ye = g.ref, $e = g._self, lt = g._source, Pt = g._owner;
        if (w != null) {
          or(w) && (ye = w.ref, Pt = pt.current), qr(w) && (fa(w.key), Te = "" + w.key);
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
        return ze(g.type, Te, ye, $e, lt, Pt, ae);
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
        var ye = !1;
        if (g === null)
          ye = !0;
        else
          switch (Te) {
            case "string":
            case "number":
              ye = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case N:
                case I:
                  ye = !0;
              }
          }
        if (ye) {
          var $e = g, lt = ae($e), Pt = B === "" ? sn + ka($e, 0) : B;
          if (On(lt)) {
            var Gt = "";
            Pt != null && (Gt = pa(Pt) + "/"), Da(lt, w, Gt, "", function(sd) {
              return sd;
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
          for (var ol = 0; ol < g.length; ol++)
            Kt = g[ol], rt = Tn + ka(Kt, ol), tn += Da(Kt, w, F, rt, ae);
        else {
          var ns = nt(g);
          if (typeof ns == "function") {
            var $i = g;
            ns === $i.entries && (Wt || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var ll = ns.call($i), rs, ud = 0; !(rs = ll.next()).done; )
              Kt = rs.value, rt = Tn + ka(Kt, ud++), tn += Da(Kt, w, F, rt, ae);
          } else if (Te === "object") {
            var Sc = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (Sc === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : Sc) + "). If you meant to render a collection of children, use an array instead.");
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
      function Jo(g) {
        var w = 0;
        return Ai(g, function() {
          w++;
        }), w;
      }
      function Zo(g, w, F) {
        Ai(g, function() {
          w.apply(this, arguments);
        }, F);
      }
      function Ui(g) {
        return Ai(g, function(w) {
          return w;
        }) || [];
      }
      function el(g) {
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
          $$typeof: ue,
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
              set: function(ye) {
                w.Provider = ye;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(ye) {
                w._currentValue = ye;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(ye) {
                w._currentValue2 = ye;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(ye) {
                w._threadCount = ye;
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
              set: function(ye) {
                ae || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ye), ae = !0);
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
              var ye = g;
              ye._status = ha, ye._result = Te;
            }
          }, function(Te) {
            if (g._status === lr || g._status === va) {
              var ye = g;
              ye._status = Wr, ye._result = Te;
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
        return !!(typeof g == "string" || typeof g == "function" || g === ee || g === le || Ht || g === R || g === ne || g === _e || He || g === Ve || pn || qt || St || typeof g == "object" && g !== null && (g.$$typeof === Ce || g.$$typeof === te || g.$$typeof === ue || g.$$typeof === ie || g.$$typeof === Oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === b || g.getModuleId !== void 0));
      }
      function fe(g, w) {
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
      function ve() {
        var g = Pe.current;
        return g === null && W(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function ct(g) {
        var w = ve();
        if (g._context !== void 0) {
          var F = g._context;
          F.Consumer === g ? W("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === g && W("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(g);
      }
      function Ke(g) {
        var w = ve();
        return w.useState(g);
      }
      function vt(g, w, F) {
        var B = ve();
        return B.useReducer(g, w, F);
      }
      function ot(g) {
        var w = ve();
        return w.useRef(g);
      }
      function Rn(g, w) {
        var F = ve();
        return F.useEffect(g, w);
      }
      function on(g, w) {
        var F = ve();
        return F.useInsertionEffect(g, w);
      }
      function cn(g, w) {
        var F = ve();
        return F.useLayoutEffect(g, w);
      }
      function Tr(g, w) {
        var F = ve();
        return F.useCallback(g, w);
      }
      function Xa(g, w) {
        var F = ve();
        return F.useMemo(g, w);
      }
      function Ft(g, w, F) {
        var B = ve();
        return B.useImperativeHandle(g, w, F);
      }
      function vn(g, w) {
        {
          var F = ve();
          return F.useDebugValue(g, w);
        }
      }
      function et() {
        var g = ve();
        return g.useTransition();
      }
      function pi(g) {
        var w = ve();
        return w.useDeferredValue(g);
      }
      function Fi() {
        var g = ve();
        return g.useId();
      }
      function hc(g, w, F) {
        var B = ve();
        return B.useSyncExternalStore(g, w, F);
      }
      var ji = 0, fo, Qr, Ku, Or, Xu, mc, yc;
      function Hi() {
      }
      Hi.__reactDisabledLog = !0;
      function po() {
        {
          if (ji === 0) {
            fo = console.log, Qr = console.info, Ku = console.warn, Or = console.error, Xu = console.group, mc = console.groupCollapsed, yc = console.groupEnd;
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
                value: fo
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
                value: mc
              }),
              groupEnd: Ae({}, g, {
                value: yc
              })
            });
          }
          ji < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var vi = yt.ReactCurrentDispatcher, vo;
      function ql(g, w, F) {
        {
          if (vo === void 0)
            try {
              throw Error();
            } catch (ae) {
              var B = ae.stack.trim().match(/\n( *(at )?)/);
              vo = B && B[1] || "";
            }
          return `
` + vo + g;
        }
      }
      var Pi = !1, tl;
      {
        var nl = typeof WeakMap == "function" ? WeakMap : Map;
        tl = new nl();
      }
      function ho(g, w) {
        if (!g || Pi)
          return "";
        {
          var F = tl.get(g);
          if (F !== void 0)
            return F;
        }
        var B;
        Pi = !0;
        var ae = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Te;
        Te = vi.current, vi.current = null, po();
        try {
          if (w) {
            var ye = function() {
              throw Error();
            };
            if (Object.defineProperty(ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ye, []);
              } catch (Tn) {
                B = Tn;
              }
              Reflect.construct(g, [], ye);
            } else {
              try {
                ye.call();
              } catch (Tn) {
                B = Tn;
              }
              g.call(ye.prototype);
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
                      return g.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", g.displayName)), typeof g == "function" && tl.set(g, Kt), Kt;
                    }
                  while (Pt >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          Pi = !1, vi.current = Te, Gr(), Error.prepareStackTrace = ae;
        }
        var rt = g ? g.displayName || g.name : "", tn = rt ? ql(rt) : "";
        return typeof g == "function" && tl.set(g, tn), tn;
      }
      function Ju(g, w, F) {
        return ho(g, !1);
      }
      function Zu(g) {
        var w = g.prototype;
        return !!(w && w.isReactComponent);
      }
      function wt(g, w, F) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return ho(g, Zu(g));
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
      function gc(g, w, F, B, ae) {
        {
          var Te = Function.call.bind(Gn);
          for (var ye in g)
            if (Te(g, ye)) {
              var $e = void 0;
              try {
                if (typeof g[ye] != "function") {
                  var lt = Error((B || "React class") + ": " + F + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw lt.name = "Invariant Violation", lt;
                }
                $e = g[ye](w, ye, B, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                $e = Pt;
              }
              $e && !($e instanceof Error) && (bt(ae), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", F, ye, typeof $e), bt(null)), $e instanceof Error && !($e.message in es) && (es[$e.message] = !0, bt(ae), W("Failed %s type: %s", F, $e.message), bt(null));
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
      function rl() {
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
        var w = rl();
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
              for (var Te = ae.call(g), ye; !(ye = Te.next()).done; )
                un(ye.value) && gn(ye.value, w);
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
            gc(F, g.props, "prop", B, g);
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
          Te ? ae += Te : ae += rl();
          var ye;
          g === null ? ye = "null" : On(g) ? ye = "array" : g !== void 0 && g.$$typeof === N ? (ye = "<" + (Vn(g.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof g, W("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ae);
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
      function ld(g) {
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
      function al(g, w) {
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
      function il(g) {
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
      function mo(g) {
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
            var Te = B, ye = !1, $e = {
              then: function(rt, tn) {
                ye = !0, Te.then(function(Tn) {
                  Bi(w), La === 0 ? Xl(Tn, rt, tn) : rt(Tn);
                }, function(Tn) {
                  Bi(w), tn(Tn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ye || (Na = !0, W("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
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
              Vi(B), il(function() {
                B.length === 0 ? (De.current = null, w(g)) : Xl(g, w, F);
              });
            } catch (ae) {
              F(ae);
            }
          else
            w(g);
        }
      }
      var yo = !1;
      function Vi(g) {
        if (!yo) {
          yo = !0;
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
            yo = !1;
          }
        }
      }
      var Jl = _r, ts = Ql, Ma = ld, Zl = {
        map: Ai,
        forEach: Zo,
        count: Jo,
        toArray: Ui,
        only: el
      };
      d.Children = Zl, d.Component = Ge, d.Fragment = ee, d.Profiler = le, d.PureComponent = $t, d.StrictMode = R, d.Suspense = ne, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yt, d.act = mo, d.cloneElement = ts, d.createContext = ci, d.createElement = Jl, d.createFactory = Ma, d.createRef = Qn, d.forwardRef = zi, d.isValidElement = un, d.lazy = di, d.memo = fe, d.startTransition = al, d.unstable_act = mo, d.useCallback = Tr, d.useContext = ct, d.useDebugValue = vn, d.useDeferredValue = pi, d.useEffect = Rn, d.useId = Fi, d.useImperativeHandle = Ft, d.useInsertionEffect = on, d.useLayoutEffect = cn, d.useMemo = Xa, d.useReducer = vt, d.useRef = ot, d.useState = Ke, d.useSyncExternalStore = hc, d.useTransition = et, d.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fv, fv.exports)), fv.exports;
}
var jT;
function pv() {
  if (jT) return iy.exports;
  jT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? iy.exports = aD() : iy.exports = iD(), iy.exports;
}
var co = pv();
const t_ = /* @__PURE__ */ rD(co);
var id = {}, oy = { exports: {} }, Wa = {}, ly = { exports: {} }, FE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HT;
function oD() {
  return HT || (HT = 1, function(m) {
    function d(W, we) {
      var de = W.length;
      W.push(we);
      e: for (; 0 < de; ) {
        var L = de - 1 >>> 1, Q = W[L];
        if (0 < N(Q, we)) W[L] = we, W[de] = Q, de = L;
        else break e;
      }
    }
    function p(W) {
      return W.length === 0 ? null : W[0];
    }
    function S(W) {
      if (W.length === 0) return null;
      var we = W[0], de = W.pop();
      if (de !== we) {
        W[0] = de;
        e: for (var L = 0, Q = W.length, Ae = Q >>> 1; L < Ae; ) {
          var qe = 2 * (L + 1) - 1, Ge = W[qe], st = qe + 1, _t = W[st];
          if (0 > N(Ge, de)) st < Q && 0 > N(_t, Ge) ? (W[L] = _t, W[st] = de, L = st) : (W[L] = Ge, W[qe] = de, L = qe);
          else if (st < Q && 0 > N(_t, de)) W[L] = _t, W[st] = de, L = st;
          else break e;
        }
      }
      return we;
    }
    function N(W, we) {
      var de = W.sortIndex - we.sortIndex;
      return de !== 0 ? de : W.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var I = performance;
      m.unstable_now = function() {
        return I.now();
      };
    } else {
      var ee = Date, R = ee.now();
      m.unstable_now = function() {
        return ee.now() - R;
      };
    }
    var le = [], ue = [], ie = 1, Oe = null, ne = 3, _e = !1, te = !1, Ce = !1, Ve = typeof setTimeout == "function" ? setTimeout : null, jt = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function nt(W) {
      for (var we = p(ue); we !== null; ) {
        if (we.callback === null) S(ue);
        else if (we.startTime <= W) S(ue), we.sortIndex = we.expirationTime, d(le, we);
        else break;
        we = p(ue);
      }
    }
    function Pe(W) {
      if (Ce = !1, nt(W), !te) if (p(le) !== null) te = !0, yt(Ot);
      else {
        var we = p(ue);
        we !== null && ut(Pe, we.startTime - W);
      }
    }
    function Ot(W, we) {
      te = !1, Ce && (Ce = !1, jt(Ye), Ye = -1), _e = !0;
      var de = ne;
      try {
        for (nt(we), Oe = p(le); Oe !== null && (!(Oe.expirationTime > we) || W && !pn()); ) {
          var L = Oe.callback;
          if (typeof L == "function") {
            Oe.callback = null, ne = Oe.priorityLevel;
            var Q = L(Oe.expirationTime <= we);
            we = m.unstable_now(), typeof Q == "function" ? Oe.callback = Q : Oe === p(le) && S(le), nt(we);
          } else S(le);
          Oe = p(le);
        }
        if (Oe !== null) var Ae = !0;
        else {
          var qe = p(ue);
          qe !== null && ut(Pe, qe.startTime - we), Ae = !1;
        }
        return Ae;
      } finally {
        Oe = null, ne = de, _e = !1;
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
      return p(le);
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
      var de = ne;
      ne = we;
      try {
        return W();
      } finally {
        ne = de;
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
      var de = ne;
      ne = W;
      try {
        return we();
      } finally {
        ne = de;
      }
    }, m.unstable_scheduleCallback = function(W, we, de) {
      var L = m.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? L + de : L) : de = L, W) {
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
      return Q = de + Q, W = { id: ie++, callback: we, priorityLevel: W, startTime: de, expirationTime: Q, sortIndex: -1 }, de > L ? (W.sortIndex = de, d(ue, W), p(le) === null && W === p(ue) && (Ce ? (jt(Ye), Ye = -1) : Ce = !0, ut(Pe, de - L))) : (W.sortIndex = Q, d(le, W), te || _e || (te = !0, yt(Ot))), W;
    }, m.unstable_shouldYield = pn, m.unstable_wrapCallback = function(W) {
      var we = ne;
      return function() {
        var de = ne;
        ne = we;
        try {
          return W.apply(this, arguments);
        } finally {
          ne = de;
        }
      };
    };
  }(FE)), FE;
}
var jE = {}, PT;
function lD() {
  return PT || (PT = 1, function(m) {
    var d = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    d.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, S = 5;
      function N(oe, ze) {
        var it = oe.length;
        oe.push(ze), R(oe, ze, it);
      }
      function I(oe) {
        return oe.length === 0 ? null : oe[0];
      }
      function ee(oe) {
        if (oe.length === 0)
          return null;
        var ze = oe[0], it = oe.pop();
        return it !== ze && (oe[0] = it, le(oe, it, 0)), ze;
      }
      function R(oe, ze, it) {
        for (var Ut = it; Ut > 0; ) {
          var ln = Ut - 1 >>> 1, un = oe[ln];
          if (ue(un, ze) > 0)
            oe[ln] = ze, oe[Ut] = un, Ut = ln;
          else
            return;
        }
      }
      function le(oe, ze, it) {
        for (var Ut = it, ln = oe.length, un = ln >>> 1; Ut < un; ) {
          var sn = (Ut + 1) * 2 - 1, Xn = oe[sn], an = sn + 1, Wt = oe[an];
          if (ue(Xn, ze) < 0)
            an < ln && ue(Wt, Xn) < 0 ? (oe[Ut] = Wt, oe[an] = ze, Ut = an) : (oe[Ut] = Xn, oe[sn] = ze, Ut = sn);
          else if (an < ln && ue(Wt, ze) < 0)
            oe[Ut] = Wt, oe[an] = ze, Ut = an;
          else
            return;
        }
      }
      function ue(oe, ze) {
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
      var Pe = 1073741823, Ot = -1, De = 250, pt = 5e3, Ye = 1e4, Cn = Pe, At = [], pn = [], qt = 1, St = null, He = ne, Ht = !1, yt = !1, ut = !1, W = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(oe) {
        for (var ze = I(pn); ze !== null; ) {
          if (ze.callback === null)
            ee(pn);
          else if (ze.startTime <= oe)
            ee(pn), ze.sortIndex = ze.expirationTime, N(At, ze);
          else
            return;
          ze = I(pn);
        }
      }
      function Q(oe) {
        if (ut = !1, L(oe), !yt)
          if (I(At) !== null)
            yt = !0, Nn(Ae);
          else {
            var ze = I(pn);
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
        for (L(it), St = I(At); St !== null && !(St.expirationTime > it && (!oe || Ga())); ) {
          var Ut = St.callback;
          if (typeof Ut == "function") {
            St.callback = null, He = St.priorityLevel;
            var ln = St.expirationTime <= it, un = Ut(ln);
            it = m.unstable_now(), typeof un == "function" ? St.callback = un : St === I(At) && ee(At), L(it);
          } else
            ee(At);
          St = I(At);
        }
        if (St !== null)
          return !0;
        var sn = I(pn);
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
        return ln > Ut ? (an.sortIndex = ln, N(pn, an), I(At) === null && an === I(pn) && (ut ? qr() : ut = !0, or(Q, ln - Ut))) : (an.sortIndex = Xn, N(At, an), !yt && !Ht && (yt = !0, Nn(Ae))), an;
      }
      function Et() {
      }
      function $t() {
        !yt && !Ht && (yt = !0, Nn(Ae));
      }
      function Dn() {
        return I(At);
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
      if (typeof de == "function")
        Kn = function() {
          de(Gn);
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
  }(jE)), jE;
}
var BT;
function n_() {
  if (BT) return ly.exports;
  BT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? ly.exports = oD() : ly.exports = lD(), ly.exports;
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
var VT;
function uD() {
  if (VT) return Wa;
  VT = 1;
  var m = pv(), d = n_();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), N = {};
  function I(n, r) {
    ee(n, r), ee(n + "Capture", r);
  }
  function ee(n, r) {
    for (N[n] = r, n = 0; n < r.length; n++) S.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), le = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ie = {}, Oe = {};
  function ne(n) {
    return le.call(Oe, n) ? !0 : le.call(ie, n) ? !1 : ue.test(n) ? Oe[n] = !0 : (ie[n] = !0, !1);
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
  var de = Object.assign, L;
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
    return de({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
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
    return de({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
  var ln = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function Jo(n, r) {
    return n(r);
  }
  function Zo() {
  }
  var Ui = !1;
  function el(n, r, o) {
    if (Ui) return n(r, o);
    Ui = !0;
    try {
      return Jo(n, r, o);
    } finally {
      Ui = !1, (zt !== null || pa !== null) && (Zo(), Ai());
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
  function fe(n, r, o, u, c, v, E, _, x) {
    if (G.apply(this, arguments), Wr) {
      if (Wr) {
        var H = fi;
        Wr = !1, fi = null;
      } else throw Error(p(198));
      di || (di = !0, zi = H);
    }
  }
  function ve(n) {
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
    if (ve(n) !== n) throw Error(p(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ve(n), r === null) throw Error(p(188));
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
  var on = d.unstable_scheduleCallback, cn = d.unstable_cancelCallback, Tr = d.unstable_shouldYield, Xa = d.unstable_requestPaint, Ft = d.unstable_now, vn = d.unstable_getCurrentPriorityLevel, et = d.unstable_ImmediatePriority, pi = d.unstable_UserBlockingPriority, Fi = d.unstable_NormalPriority, hc = d.unstable_LowPriority, ji = d.unstable_IdlePriority, fo = null, Qr = null;
  function Ku(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(fo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : yc, Xu = Math.log, mc = Math.LN2;
  function yc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xu(n) / mc | 0) | 0;
  }
  var Hi = 64, po = 4194304;
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
  function vo(n, r) {
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
      x === -1 ? ((_ & o) === 0 || (_ & u) !== 0) && (c[E] = vo(_, r)) : x <= r && (n.expiredLanes |= _), v &= ~_;
    }
  }
  function Pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function tl() {
    var n = Hi;
    return Hi <<= 1, (Hi & 4194240) === 0 && (Hi = 64), n;
  }
  function nl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function ho(n, r, o) {
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
  var Wl, bt, gc, hi, We, rl = !1, Jn = [], Kr = null, Lr = null, mi = null, gn = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), Ja = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function ld(n, r, o, u, c) {
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
    var r = dl(n.target);
    if (r !== null) {
      var o = ve(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = ct(o), r !== null) {
            n.blockedOn = r, We(n.priority, function() {
              gc(o);
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
  function al(n) {
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
    al(n) && o.delete(r);
  }
  function Kl() {
    rl = !1, Kr !== null && al(Kr) && (Kr = null), Lr !== null && al(Lr) && (Lr = null), mi !== null && al(mi) && (mi = null), gn.forEach(Gl), Qt.forEach(Gl);
  }
  function il(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rl || (rl = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, Kl)));
  }
  function La(n) {
    function r(c) {
      return il(c, n);
    }
    if (0 < Jn.length) {
      il(Jn[0], n);
      for (var o = 1; o < Jn.length; o++) {
        var u = Jn[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Kr !== null && il(Kr, n), Lr !== null && il(Lr, n), mi !== null && il(mi, n), gn.forEach(r), Qt.forEach(r), o = 0; o < Ja.length; o++) u = Ja[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Ja.length && (o = Ja[0], o.blockedOn === null); ) Ql(o), o.blockedOn === null && Ja.shift();
  }
  var Na = Pe.ReactCurrentBatchConfig, mo = !0;
  function Bi(n, r, o, u) {
    var c = wt, v = Na.transition;
    Na.transition = null;
    try {
      wt = 1, yo(n, r, o, u);
    } finally {
      wt = c, Na.transition = v;
    }
  }
  function Xl(n, r, o, u) {
    var c = wt, v = Na.transition;
    Na.transition = null;
    try {
      wt = 4, yo(n, r, o, u);
    } finally {
      wt = c, Na.transition = v;
    }
  }
  function yo(n, r, o, u) {
    if (mo) {
      var c = Jl(n, r, o, u);
      if (c === null) Ed(n, r, u, Vi, o), _r(n, u);
      else if (ld(c, n, r, o, u)) u.stopPropagation();
      else if (_r(n, u), r & 4 && -1 < Oa.indexOf(n)) {
        for (; c !== null; ) {
          var v = ys(c);
          if (v !== null && Wl(v), v = Jl(n, r, o, u), v === null && Ed(n, r, u, Vi, o), v === c) break;
          c = v;
        }
        c !== null && u.stopPropagation();
      } else Ed(n, r, u, null, o);
    }
  }
  var Vi = null;
  function Jl(n, r, o, u) {
    if (Vi = null, n = an(u), n = dl(n), n !== null) if (r = ve(n), r === null) n = null;
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
          case hc:
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
    return de(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = B);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = B);
    }, persist: function() {
    }, isPersistent: B }), r;
  }
  var ye = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $e = Te(ye), lt = de({}, ye, { view: 0, detail: 0 }), Pt = Te(lt), Gt, Kt, rt, tn = de({}, lt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rt && (rt && n.type === "mousemove" ? (Gt = n.screenX - rt.screenX, Kt = n.screenY - rt.screenY) : Kt = Gt = 0, rt = n), Gt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), Tn = Te(tn), ol = de({}, tn, { dataTransfer: 0 }), ns = Te(ol), $i = de({}, lt, { relatedTarget: 0 }), ll = Te($i), rs = de({}, ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ud = Te(rs), Sc = de({}, ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), sd = Te(Sc), vv = de({}, ye, { data: 0 }), Ec = Te(vv), hv = {
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
  }, mv = {
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
  }, yv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ey(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = yv[n]) ? !!r[n] : !1;
  }
  function Za() {
    return Ey;
  }
  var Cy = de({}, lt, { key: function(n) {
    if (n.key) {
      var r = hv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? mv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), cd = Te(Cy), fd = de({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = Te(fd), Ry = de({}, lt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), Rc = Te(Ry), gv = de({}, ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = Te(gv), Ii = de({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mn = Te(Ii), Yi = [9, 13, 27, 32], as = R && "CompositionEvent" in window, go = null;
  R && "documentMode" in document && (go = document.documentMode);
  var Ty = R && "TextEvent" in window && !go, eu = R && (!as || go && 8 < go && 11 >= go), Sv = " ", Ev = !1;
  function Tc(n, r) {
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
  function Cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var tu = !1;
  function _y(n, r) {
    switch (n) {
      case "compositionend":
        return Cv(r);
      case "keypress":
        return r.which !== 32 ? null : (Ev = !0, Sv);
      case "textInput":
        return n = r.data, n === Sv && Ev ? null : n;
      default:
        return null;
    }
  }
  function Rv(n, r) {
    if (tu) return n === "compositionend" || !as && Tc(n, r) ? (n = w(), g = Zl = Ma = null, tu = !1, n) : null;
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
  var wy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Tv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!wy[n.type] : r === "textarea";
  }
  function _v(n, r, o, u) {
    Da(u), r = vs(r, "onChange"), 0 < r.length && (o = new $e("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var nu = null, yi = null;
  function dd(n) {
    xc(n, 0);
  }
  function is(n) {
    var r = Ne(n);
    if (Qn(r)) return n;
  }
  function wv(n, r) {
    if (n === "change") return r;
  }
  var bv = !1;
  if (R) {
    var pd;
    if (R) {
      var vd = "oninput" in document;
      if (!vd) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), vd = typeof xv.oninput == "function";
      }
      pd = vd;
    } else pd = !1;
    bv = pd && (!document.documentMode || 9 < document.documentMode);
  }
  function kv() {
    nu && (nu.detachEvent("onpropertychange", Dv), yi = nu = null);
  }
  function Dv(n) {
    if (n.propertyName === "value" && is(yi)) {
      var r = [];
      _v(r, yi, n, an(n)), el(dd, r);
    }
  }
  function by(n, r, o) {
    n === "focusin" ? (kv(), nu = r, yi = o, nu.attachEvent("onpropertychange", Dv)) : n === "focusout" && kv();
  }
  function xy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return is(yi);
  }
  function Ov(n, r) {
    if (n === "click") return is(r);
  }
  function ky(n, r) {
    if (n === "input" || n === "change") return is(r);
  }
  function Lv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : Lv;
  function os(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!le.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Nv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Mv(n, r) {
    var o = Nv(n);
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
      o = Nv(o);
    }
  }
  function _c(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? _c(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function So() {
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
  function Av(n) {
    var r = So(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && _c(o.ownerDocument.documentElement, o)) {
      if (u !== null && ru(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, v = Math.min(u.start, c);
          u = u.end === void 0 ? v : Math.min(u.end, c), !n.extend && v > u && (c = u, u = v, v = c), c = Mv(o, v);
          var E = Mv(
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
  var au = R && "documentMode" in document && 11 >= document.documentMode, iu = null, hd = null, ls = null, md = !1;
  function Uv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    md || iu == null || iu !== ir(u) || (u = iu, "selectionStart" in u && ru(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ls && os(ls, u) || (ls = u, u = vs(hd, "onSelect"), 0 < u.length && (r = new $e("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = iu)));
  }
  function us(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ou = { animationend: us("Animation", "AnimationEnd"), animationiteration: us("Animation", "AnimationIteration"), animationstart: us("Animation", "AnimationStart"), transitionend: us("Transition", "TransitionEnd") }, wc = {}, wr = {};
  R && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete ou.animationend.animation, delete ou.animationiteration.animation, delete ou.animationstart.animation), "TransitionEvent" in window || delete ou.transitionend.transition);
  function ss(n) {
    if (wc[n]) return wc[n];
    if (!ou[n]) return n;
    var r = ou[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in wr) return wc[n] = r[o];
    return n;
  }
  var zv = ss("animationend"), Fv = ss("animationiteration"), jv = ss("animationstart"), Hv = ss("transitionend"), Pv = /* @__PURE__ */ new Map(), yd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gi(n, r) {
    Pv.set(n, r), I(r, [n]);
  }
  for (var ul = 0; ul < yd.length; ul++) {
    var gd = yd[ul], cs = gd.toLowerCase(), Dy = gd[0].toUpperCase() + gd.slice(1);
    gi(cs, "on" + Dy);
  }
  gi(zv, "onAnimationEnd"), gi(Fv, "onAnimationIteration"), gi(jv, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(Hv, "onTransitionEnd"), ee("onMouseEnter", ["mouseout", "mouseover"]), ee("onMouseLeave", ["mouseout", "mouseover"]), ee("onPointerEnter", ["pointerout", "pointerover"]), ee("onPointerLeave", ["pointerout", "pointerover"]), I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), I("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Oy = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
  function bc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, fe(u, r, void 0, n), n.currentTarget = null;
  }
  function xc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var v = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var _ = u[E], x = _.instance, H = _.currentTarget;
          if (_ = _.listener, x !== v && c.isPropagationStopped()) break e;
          bc(c, _, H), v = x;
        }
        else for (E = 0; E < u.length; E++) {
          if (_ = u[E], x = _.instance, H = _.currentTarget, _ = _.listener, x !== v && c.isPropagationStopped()) break e;
          bc(c, _, H), v = x;
        }
      }
    }
    if (di) throw n = zi, di = !1, zi = null, n;
  }
  function Bt(n, r) {
    var o = r[Cd];
    o === void 0 && (o = r[Cd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Sd(r, n, 2, !1), o.add(u));
  }
  function Eo(n, r, o) {
    var u = 0;
    r && (u |= 4), Sd(o, n, u, r);
  }
  var ds = "_reactListening" + Math.random().toString(36).slice(2);
  function ps(n) {
    if (!n[ds]) {
      n[ds] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Oy.has(o) || Eo(o, !1, n), Eo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ds] || (r[ds] = !0, Eo("selectionchange", !1, r));
    }
  }
  function Sd(n, r, o, u) {
    switch (ts(r)) {
      case 1:
        var c = Bi;
        break;
      case 4:
        c = Xl;
        break;
      default:
        c = yo;
    }
    o = c.bind(null, r, o, n), c = void 0, !va || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Ed(n, r, o, u, c) {
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
          if (E = dl(_), E === null) return;
          if (x = E.tag, x === 5 || x === 6) {
            u = v = E;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      u = u.return;
    }
    el(function() {
      var H = v, X = an(o), J = [];
      e: {
        var K = Pv.get(n);
        if (K !== void 0) {
          var ge = $e, be = n;
          switch (n) {
            case "keypress":
              if (F(o) === 0) break e;
            case "keydown":
            case "keyup":
              ge = cd;
              break;
            case "focusin":
              be = "focus", ge = ll;
              break;
            case "focusout":
              be = "blur", ge = ll;
              break;
            case "beforeblur":
            case "afterblur":
              ge = ll;
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
              ge = Tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = ns;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = Rc;
              break;
            case zv:
            case Fv:
            case jv:
              ge = ud;
              break;
            case Hv:
              ge = Xr;
              break;
            case "scroll":
              ge = Pt;
              break;
            case "wheel":
              ge = Mn;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = sd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = Cc;
          }
          var ke = (r & 4) !== 0, xn = !ke && n === "scroll", M = ke ? K !== null ? K + "Capture" : null : K;
          ke = [];
          for (var D = H, z; D !== null; ) {
            z = D;
            var re = z.stateNode;
            if (z.tag === 5 && re !== null && (z = re, M !== null && (re = ci(D, M), re != null && ke.push(lu(D, re, z)))), xn) break;
            D = D.return;
          }
          0 < ke.length && (K = new ge(K, be, null, o, X), J.push({ event: K, listeners: ke }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", K && o !== Xn && (be = o.relatedTarget || o.fromElement) && (dl(be) || be[qi])) break e;
          if ((ge || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, ge ? (be = o.relatedTarget || o.toElement, ge = H, be = be ? dl(be) : null, be !== null && (xn = ve(be), be !== xn || be.tag !== 5 && be.tag !== 6) && (be = null)) : (ge = null, be = H), ge !== be)) {
            if (ke = Tn, re = "onMouseLeave", M = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Cc, re = "onPointerLeave", M = "onPointerEnter", D = "pointer"), xn = ge == null ? K : Ne(ge), z = be == null ? K : Ne(be), K = new ke(re, D + "leave", ge, o, X), K.target = xn, K.relatedTarget = z, re = null, dl(X) === H && (ke = new ke(M, D + "enter", be, o, X), ke.target = z, ke.relatedTarget = xn, re = ke), xn = re, ge && be) t: {
              for (ke = ge, M = be, D = 0, z = ke; z; z = sl(z)) D++;
              for (z = 0, re = M; re; re = sl(re)) z++;
              for (; 0 < D - z; ) ke = sl(ke), D--;
              for (; 0 < z - D; ) M = sl(M), z--;
              for (; D--; ) {
                if (ke === M || M !== null && ke === M.alternate) break t;
                ke = sl(ke), M = sl(M);
              }
              ke = null;
            }
            else ke = null;
            ge !== null && kc(J, K, ge, ke, !1), be !== null && xn !== null && kc(J, xn, be, ke, !0);
          }
        }
        e: {
          if (K = H ? Ne(H) : window, ge = K.nodeName && K.nodeName.toLowerCase(), ge === "select" || ge === "input" && K.type === "file") var he = wv;
          else if (Tv(K)) if (bv) he = ky;
          else {
            he = xy;
            var Ue = by;
          }
          else (ge = K.nodeName) && ge.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (he = Ov);
          if (he && (he = he(n, H))) {
            _v(J, he, o, X);
            break e;
          }
          Ue && Ue(n, K, H), n === "focusout" && (Ue = K._wrapperState) && Ue.controlled && K.type === "number" && Ga(K, "number", K.value);
        }
        switch (Ue = H ? Ne(H) : window, n) {
          case "focusin":
            (Tv(Ue) || Ue.contentEditable === "true") && (iu = Ue, hd = H, ls = null);
            break;
          case "focusout":
            ls = hd = iu = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            md = !1, Uv(J, o, X);
            break;
          case "selectionchange":
            if (au) break;
          case "keydown":
          case "keyup":
            Uv(J, o, X);
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
        else tu ? Tc(n, o) && (Qe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (eu && o.locale !== "ko" && (tu || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && tu && (je = w()) : (Ma = X, Zl = "value" in Ma ? Ma.value : Ma.textContent, tu = !0)), Ue = vs(H, Qe), 0 < Ue.length && (Qe = new Ec(Qe, n, null, o, X), J.push({ event: Qe, listeners: Ue }), je ? Qe.data = je : (je = Cv(o), je !== null && (Qe.data = je)))), (je = Ty ? _y(n, o) : Rv(n, o)) && (H = vs(H, "onBeforeInput"), 0 < H.length && (X = new Ec("onBeforeInput", "beforeinput", null, o, X), J.push({ event: X, listeners: H }), X.data = je));
      }
      xc(J, r);
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
  function sl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kc(n, r, o, u, c) {
    for (var v = r._reactName, E = []; o !== null && o !== u; ) {
      var _ = o, x = _.alternate, H = _.stateNode;
      if (x !== null && x === u) break;
      _.tag === 5 && H !== null && (_ = H, c ? (x = ci(o, v), x != null && E.unshift(lu(o, x, _))) : c || (x = ci(o, v), x != null && E.push(lu(o, x, _)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Ly = /\r\n?/g, Bv = /\u0000|\uFFFD/g;
  function Vv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ly, `
`).replace(Bv, "");
  }
  function Dc(n, r, o) {
    if (r = Vv(r), Vv(n) !== r && o) throw Error(p(425));
  }
  function Oc() {
  }
  var cl = null, hs = null;
  function fl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = typeof setTimeout == "function" ? setTimeout : void 0, $v = typeof clearTimeout == "function" ? clearTimeout : void 0, Nc = typeof Promise == "function" ? Promise : void 0, Ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nc < "u" ? function(n) {
    return Nc.resolve(null).then(n).catch(uu);
  } : Lc;
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
  function Mc(n) {
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
  var cu = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + cu, ms = "__reactProps$" + cu, qi = "__reactContainer$" + cu, Cd = "__reactEvents$" + cu, Rd = "__reactListeners$" + cu, fu = "__reactHandles$" + cu;
  function dl(n) {
    var r = n[Aa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[qi] || o[Aa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Mc(n); n !== null; ) {
          if (o = n[Aa]) return o;
          n = Mc(n);
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
  function Ac(n, r, o) {
    if (Sn.current !== ft) throw Error(p(168));
    nn(Sn, r), nn(Un, o);
  }
  function Iv(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(p(108, _t(n) || "Unknown", c));
    return de({}, o, u);
  }
  function pl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ft, Ua = Sn.current, nn(Sn, n), nn(Un, Un.current), !0;
  }
  function za(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(p(169));
    o ? (n = Iv(n, r, Ua), u.__reactInternalMemoizedMergedChildContext = n, Xt(Un), Xt(Sn), nn(Sn, n)) : Xt(Un), nn(Un, o);
  }
  var ni = null, gs = !1, Ss = !1;
  function Co(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  function Td(n) {
    gs = !0, Co(n);
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
  var Ro = [], To = 0, du = null, _o = 0, ur = [], Fn = 0, vl = null, Ar = 1, Ei = "";
  function wo(n, r) {
    Ro[To++] = _o, Ro[To++] = du, du = n, _o = r;
  }
  function Yv(n, r, o) {
    ur[Fn++] = Ar, ur[Fn++] = Ei, ur[Fn++] = vl, vl = n;
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
  function _d(n) {
    n.return !== null && (wo(n, 1), Yv(n, 1, 0));
  }
  function Uc(n) {
    for (; n === du; ) du = Ro[--To], Ro[To] = null, _o = Ro[--To], Ro[To] = null;
    for (; n === vl; ) vl = ur[--Fn], ur[Fn] = null, Ei = ur[--Fn], ur[Fn] = null, Ar = ur[--Fn], ur[Fn] = null;
  }
  var Zr = null, ea = null, fn = !1, ri = null;
  function wd(n, r) {
    var o = Ba(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function bd(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = vl !== null ? { id: Ar, overflow: Ei } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ba(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function kd(n) {
    if (fn) {
      var r = ea;
      if (r) {
        var o = r;
        if (!bd(n, r)) {
          if (xd(n)) throw Error(p(418));
          r = ti(o.nextSibling);
          var u = Zr;
          r && bd(n, r) ? wd(u, o) : (n.flags = n.flags & -4097 | 2, fn = !1, Zr = n);
        }
      } else {
        if (xd(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Zr = n;
      }
    }
  }
  function qv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function _n(n) {
    if (n !== Zr) return !1;
    if (!fn) return qv(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !fl(n.type, n.memoizedProps)), r && (r = ea)) {
      if (xd(n)) throw Wv(), Error(p(418));
      for (; r; ) wd(n, r), r = ti(r.nextSibling);
    }
    if (qv(n), n.tag === 13) {
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
  function Wv() {
    for (var n = ea; n; ) n = ti(n.nextSibling);
  }
  function Qi() {
    ea = Zr = null, fn = !1;
  }
  function Es(n) {
    ri === null ? ri = [n] : ri.push(n);
  }
  var hl = Pe.ReactCurrentBatchConfig;
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
  function Qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gv(n) {
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
      return M = zo(M, D), M.index = 0, M.sibling = null, M;
    }
    function v(M, D, z) {
      return M.index = z, n ? (z = M.alternate, z !== null ? (z = z.index, z < D ? (M.flags |= 2, D) : z) : (M.flags |= 2, D)) : (M.flags |= 1048576, D);
    }
    function E(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function _(M, D, z, re) {
      return D === null || D.tag !== 6 ? (D = Nl(z, M.mode, re), D.return = M, D) : (D = c(D, z), D.return = M, D);
    }
    function x(M, D, z, re) {
      var he = z.type;
      return he === pt ? X(M, D, z.props.children, re, z.key) : D !== null && (D.elementType === he || typeof he == "object" && he !== null && he.$$typeof === yt && Qv(he) === D.type) ? (re = c(D, z.props), re.ref = Cs(M, D, z), re.return = M, re) : (re = Cf(z.type, z.key, z.props, null, M.mode, re), re.ref = Cs(M, D, z), re.return = M, re);
    }
    function H(M, D, z, re) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = ip(z, M.mode, re), D.return = M, D) : (D = c(D, z.children || []), D.return = M, D);
    }
    function X(M, D, z, re, he) {
      return D === null || D.tag !== 7 ? (D = Fo(z, M.mode, re, he), D.return = M, D) : (D = c(D, z), D.return = M, D);
    }
    function J(M, D, z) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Nl("" + D, M.mode, z), D.return = M, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Ot:
            return z = Cf(D.type, D.key, D.props, null, M.mode, z), z.ref = Cs(M, null, D), z.return = M, z;
          case De:
            return D = ip(D, M.mode, z), D.return = M, D;
          case yt:
            var re = D._init;
            return J(M, re(D._payload), z);
        }
        if (Dr(D) || we(D)) return D = Fo(D, M.mode, z, null), D.return = M, D;
        pu(M, D);
      }
      return null;
    }
    function K(M, D, z, re) {
      var he = D !== null ? D.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number") return he !== null ? null : _(M, D, "" + z, re);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ot:
            return z.key === he ? x(M, D, z, re) : null;
          case De:
            return z.key === he ? H(M, D, z, re) : null;
          case yt:
            return he = z._init, K(
              M,
              D,
              he(z._payload),
              re
            );
        }
        if (Dr(z) || we(z)) return he !== null ? null : X(M, D, z, re, null);
        pu(M, z);
      }
      return null;
    }
    function ge(M, D, z, re, he) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return M = M.get(z) || null, _(D, M, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case Ot:
            return M = M.get(re.key === null ? z : re.key) || null, x(D, M, re, he);
          case De:
            return M = M.get(re.key === null ? z : re.key) || null, H(D, M, re, he);
          case yt:
            var Ue = re._init;
            return ge(M, D, z, Ue(re._payload), he);
        }
        if (Dr(re) || we(re)) return M = M.get(z) || null, X(D, M, re, he, null);
        pu(D, re);
      }
      return null;
    }
    function be(M, D, z, re) {
      for (var he = null, Ue = null, je = D, Qe = D = 0, qn = null; je !== null && Qe < z.length; Qe++) {
        je.index > Qe ? (qn = je, je = null) : qn = je.sibling;
        var Lt = K(M, je, z[Qe], re);
        if (Lt === null) {
          je === null && (je = qn);
          break;
        }
        n && je && Lt.alternate === null && r(M, je), D = v(Lt, D, Qe), Ue === null ? he = Lt : Ue.sibling = Lt, Ue = Lt, je = qn;
      }
      if (Qe === z.length) return o(M, je), fn && wo(M, Qe), he;
      if (je === null) {
        for (; Qe < z.length; Qe++) je = J(M, z[Qe], re), je !== null && (D = v(je, D, Qe), Ue === null ? he = je : Ue.sibling = je, Ue = je);
        return fn && wo(M, Qe), he;
      }
      for (je = u(M, je); Qe < z.length; Qe++) qn = ge(je, M, Qe, z[Qe], re), qn !== null && (n && qn.alternate !== null && je.delete(qn.key === null ? Qe : qn.key), D = v(qn, D, Qe), Ue === null ? he = qn : Ue.sibling = qn, Ue = qn);
      return n && je.forEach(function(Ho) {
        return r(M, Ho);
      }), fn && wo(M, Qe), he;
    }
    function ke(M, D, z, re) {
      var he = we(z);
      if (typeof he != "function") throw Error(p(150));
      if (z = he.call(z), z == null) throw Error(p(151));
      for (var Ue = he = null, je = D, Qe = D = 0, qn = null, Lt = z.next(); je !== null && !Lt.done; Qe++, Lt = z.next()) {
        je.index > Qe ? (qn = je, je = null) : qn = je.sibling;
        var Ho = K(M, je, Lt.value, re);
        if (Ho === null) {
          je === null && (je = qn);
          break;
        }
        n && je && Ho.alternate === null && r(M, je), D = v(Ho, D, Qe), Ue === null ? he = Ho : Ue.sibling = Ho, Ue = Ho, je = qn;
      }
      if (Lt.done) return o(
        M,
        je
      ), fn && wo(M, Qe), he;
      if (je === null) {
        for (; !Lt.done; Qe++, Lt = z.next()) Lt = J(M, Lt.value, re), Lt !== null && (D = v(Lt, D, Qe), Ue === null ? he = Lt : Ue.sibling = Lt, Ue = Lt);
        return fn && wo(M, Qe), he;
      }
      for (je = u(M, je); !Lt.done; Qe++, Lt = z.next()) Lt = ge(je, M, Qe, Lt.value, re), Lt !== null && (n && Lt.alternate !== null && je.delete(Lt.key === null ? Qe : Lt.key), D = v(Lt, D, Qe), Ue === null ? he = Lt : Ue.sibling = Lt, Ue = Lt);
      return n && je.forEach(function(qy) {
        return r(M, qy);
      }), fn && wo(M, Qe), he;
    }
    function xn(M, D, z, re) {
      if (typeof z == "object" && z !== null && z.type === pt && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ot:
            e: {
              for (var he = z.key, Ue = D; Ue !== null; ) {
                if (Ue.key === he) {
                  if (he = z.type, he === pt) {
                    if (Ue.tag === 7) {
                      o(M, Ue.sibling), D = c(Ue, z.props.children), D.return = M, M = D;
                      break e;
                    }
                  } else if (Ue.elementType === he || typeof he == "object" && he !== null && he.$$typeof === yt && Qv(he) === Ue.type) {
                    o(M, Ue.sibling), D = c(Ue, z.props), D.ref = Cs(M, Ue, z), D.return = M, M = D;
                    break e;
                  }
                  o(M, Ue);
                  break;
                } else r(M, Ue);
                Ue = Ue.sibling;
              }
              z.type === pt ? (D = Fo(z.props.children, M.mode, re, z.key), D.return = M, M = D) : (re = Cf(z.type, z.key, z.props, null, M.mode, re), re.ref = Cs(M, D, z), re.return = M, M = re);
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
              D = ip(z, M.mode, re), D.return = M, M = D;
            }
            return E(M);
          case yt:
            return Ue = z._init, xn(M, D, Ue(z._payload), re);
        }
        if (Dr(z)) return be(M, D, z, re);
        if (we(z)) return ke(M, D, z, re);
        pu(M, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, D !== null && D.tag === 6 ? (o(M, D.sibling), D = c(D, z), D.return = M, M = D) : (o(M, D), D = Nl(z, M.mode, re), D.return = M, M = D), E(M)) : o(M, D);
    }
    return xn;
  }
  var ai = Gv(!0), sr = Gv(!1), ce = Jr(null), ya = null, br = null, Dd = null;
  function Od() {
    Dd = br = ya = null;
  }
  function Ld(n) {
    var r = ce.current;
    Xt(ce), n._currentValue = r;
  }
  function Nd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function vu(n, r) {
    ya = n, Dd = br = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (tr = !0), n.firstContext = null);
  }
  function It(n) {
    var r = n._currentValue;
    if (Dd !== n) if (n = { context: n, memoizedValue: r, next: null }, br === null) {
      if (ya === null) throw Error(p(308));
      br = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else br = br.next = n;
    return r;
  }
  var ml = null;
  function Md(n) {
    ml === null ? ml = [n] : ml.push(n);
  }
  function Kv(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Md(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ci(n, u);
  }
  function Ci(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Fa = !1;
  function bo(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (mt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ci(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Md(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ci(n, o);
  }
  function zc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Zu(n, o);
    }
  }
  function Jv(n, r) {
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
  function Fc(n, r, o, u) {
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
        var K = _.lane, ge = _.eventTime;
        if ((u & K) === K) {
          X !== null && (X = X.next = {
            eventTime: ge,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var be = n, ke = _;
            switch (K = r, ge = o, ke.tag) {
              case 1:
                if (be = ke.payload, typeof be == "function") {
                  J = be.call(ge, J, K);
                  break e;
                }
                J = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ke.payload, K = typeof be == "function" ? be.call(ge, J, K) : be, K == null) break e;
                J = de({}, J, K);
                break e;
              case 2:
                Fa = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [_] : K.push(_));
        } else ge = { eventTime: ge, lane: K, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, X === null ? (H = X = ge, x = J) : X = X.next = ge, E |= K;
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
      bl |= E, n.lanes = E, n.memoizedState = J;
    }
  }
  function Ad(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(p(191, c));
        c.call(u);
      }
    }
  }
  var hu = {}, Ri = Jr(hu), Rs = Jr(hu), Ts = Jr(hu);
  function yl(n) {
    if (n === hu) throw Error(p(174));
    return n;
  }
  function Ud(n, r) {
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
  function zd(n) {
    yl(Ts.current);
    var r = yl(Ri.current), o = or(r, n.type);
    r !== o && (nn(Rs, n), nn(Ri, o));
  }
  function Fd(n) {
    Rs.current === n && (Xt(Ri), Xt(Rs));
  }
  var hn = Jr(0);
  function jc(n) {
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
  var jd = [];
  function _s() {
    for (var n = 0; n < jd.length; n++) jd[n]._workInProgressVersionPrimary = null;
    jd.length = 0;
  }
  var Me = Pe.ReactCurrentDispatcher, dt = Pe.ReactCurrentBatchConfig, Ct = 0, tt = null, Jt = null, $n = null, Hc = !1, ws = !1, bs = 0, Hd = 0;
  function Y() {
    throw Error(p(321));
  }
  function jn(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ei(n[o], r[o])) return !1;
    return !0;
  }
  function Be(n, r, o, u, c, v) {
    if (Ct = v, tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Me.current = n === null || n.memoizedState === null ? ef : tf, n = o(u, c), ws) {
      v = 0;
      do {
        if (ws = !1, bs = 0, 25 <= v) throw Error(p(301));
        v += 1, $n = Jt = null, r.updateQueue = null, Me.current = Ls, n = o(u, c);
      } while (ws);
    }
    if (Me.current = Yt, r = Jt !== null && Jt.next !== null, Ct = 0, $n = Jt = tt = null, Hc = !1, r) throw Error(p(300));
    return n;
  }
  function ko() {
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
  function gl(n) {
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
          x === null ? (_ = x = J, E = u) : x = x.next = J, tt.lanes |= X, bl |= X;
        }
        H = H.next;
      } while (H !== null && H !== v);
      x === null ? E = u : x.next = _, ei(u, r.memoizedState) || (tr = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = x, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        v = c.lane, tt.lanes |= v, bl |= v, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Do(n) {
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
  function Pc(n, r) {
    var o = tt, u = er(), c = r(), v = !ei(u.memoizedState, c);
    if (v && (u.memoizedState = c, tr = !0), u = u.queue, xs($c.bind(null, o, u, n), [n]), u.getSnapshot !== r || v || $n !== null && $n.memoizedState.tag & 1) {
      if (o.flags |= 2048, Sl(9, Vc.bind(null, o, u, c, r), void 0, null), Hn === null) throw Error(p(349));
      (Ct & 30) !== 0 || Bc(o, r, c);
    }
    return c;
  }
  function Bc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Vc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Ic(r) && Yc(n);
  }
  function $c(n, r, o) {
    return o(function() {
      Ic(r) && Yc(n);
    });
  }
  function Ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ei(n, o);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = Ci(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function qc(n) {
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = Os.bind(null, tt, n), [r.memoizedState, n];
  }
  function Sl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Wc() {
    return er().memoizedState;
  }
  function gu(n, r, o, u) {
    var c = Zn();
    tt.flags |= n, c.memoizedState = Sl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Su(n, r, o, u) {
    var c = er();
    u = u === void 0 ? null : u;
    var v = void 0;
    if (Jt !== null) {
      var E = Jt.memoizedState;
      if (v = E.destroy, u !== null && jn(u, E.deps)) {
        c.memoizedState = Sl(r, o, v, u);
        return;
      }
    }
    tt.flags |= n, c.memoizedState = Sl(1 | r, o, v, u);
  }
  function Qc(n, r) {
    return gu(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Su(2048, 8, n, r);
  }
  function Gc(n, r) {
    return Su(4, 2, n, r);
  }
  function Kc(n, r) {
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
  function El(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(4, 4, ks.bind(null, r, n), o);
  }
  function Ds() {
  }
  function Xc(n, r) {
    var o = er();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && jn(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Jc(n, r) {
    var o = er();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && jn(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Zc(n, r, o) {
    return (Ct & 21) === 0 ? (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = o) : (ei(o, r) || (o = tl(), tt.lanes |= o, bl |= o, n.baseState = !0), r);
  }
  function Zv(n, r) {
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
  function eh(n, r, o) {
    var u = Ca(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Oo(n)) ga(r, o);
    else if (o = Kv(n, r, o, u), o !== null) {
      var c = rn();
      Ra(o, n, u, c), th(o, r, u);
    }
  }
  function Os(n, r, o) {
    var u = Ca(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Oo(n)) ga(r, c);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null)) try {
        var E = r.lastRenderedState, _ = v(E, o);
        if (c.hasEagerState = !0, c.eagerState = _, ei(_, E)) {
          var x = r.interleaved;
          x === null ? (c.next = c, Md(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = Kv(n, r, c, u), o !== null && (c = rn(), Ra(o, n, u, c), th(o, r, u));
    }
  }
  function Oo(n) {
    var r = n.alternate;
    return n === tt || r !== null && r === tt;
  }
  function ga(n, r) {
    ws = Hc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function th(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Zu(n, o);
    }
  }
  var Yt = { readContext: It, useCallback: Y, useContext: Y, useEffect: Y, useImperativeHandle: Y, useInsertionEffect: Y, useLayoutEffect: Y, useMemo: Y, useReducer: Y, useRef: Y, useState: Y, useDebugValue: Y, useDeferredValue: Y, useTransition: Y, useMutableSource: Y, useSyncExternalStore: Y, useId: Y, unstable_isNewReconciler: !1 }, ef = { readContext: It, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: Qc, useImperativeHandle: function(n, r, o) {
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
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = eh.bind(null, tt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: Ds, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = Zv.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = tt, c = Zn();
    if (fn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Hn === null) throw Error(p(349));
      (Ct & 30) !== 0 || Bc(u, r, o);
    }
    c.memoizedState = o;
    var v = { value: o, getSnapshot: r };
    return c.queue = v, Qc($c.bind(
      null,
      u,
      v,
      n
    ), [n]), u.flags |= 2048, Sl(9, Vc.bind(null, u, v, o, r), void 0, null), o;
  }, useId: function() {
    var n = Zn(), r = Hn.identifierPrefix;
    if (fn) {
      var o = Ei, u = Ar;
      o = (u & ~(1 << 32 - Or(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = bs++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Hd++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, tf = {
    readContext: It,
    useCallback: Xc,
    useContext: It,
    useEffect: xs,
    useImperativeHandle: El,
    useInsertionEffect: Gc,
    useLayoutEffect: Kc,
    useMemo: Jc,
    useReducer: gl,
    useRef: Wc,
    useState: function() {
      return gl(ta);
    },
    useDebugValue: Ds,
    useDeferredValue: function(n) {
      var r = er();
      return Zc(r, Jt.memoizedState, n);
    },
    useTransition: function() {
      var n = gl(ta)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: yu,
    useSyncExternalStore: Pc,
    useId: Eu,
    unstable_isNewReconciler: !1
  }, Ls = { readContext: It, useCallback: Xc, useContext: It, useEffect: xs, useImperativeHandle: El, useInsertionEffect: Gc, useLayoutEffect: Kc, useMemo: Jc, useReducer: Do, useRef: Wc, useState: function() {
    return Do(ta);
  }, useDebugValue: Ds, useDeferredValue: function(n) {
    var r = er();
    return Jt === null ? r.memoizedState = n : Zc(r, Jt.memoizedState, n);
  }, useTransition: function() {
    var n = Do(ta)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: yu, useSyncExternalStore: Pc, useId: Eu, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = de({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Pd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : de({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var nf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ve(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = rn(), c = Ca(n), v = Gi(u, c);
    v.payload = r, o != null && (v.callback = o), r = xo(n, v, c), r !== null && (Ra(r, n, c, u), zc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = rn(), c = Ca(n), v = Gi(u, c);
    v.tag = 1, v.payload = r, o != null && (v.callback = o), r = xo(n, v, c), r !== null && (Ra(r, n, c, u), zc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = rn(), u = Ca(n), c = Gi(o, u);
    c.tag = 2, r != null && (c.callback = r), r = xo(n, c, u), r !== null && (Ra(r, n, u, o), zc(r, n, u));
  } };
  function nh(n, r, o, u, c, v, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, v, E) : r.prototype && r.prototype.isPureReactComponent ? !os(o, u) || !os(c, v) : !0;
  }
  function rh(n, r, o) {
    var u = !1, c = ft, v = r.contextType;
    return typeof v == "object" && v !== null ? v = It(v) : (c = zn(r) ? Ua : Sn.current, u = r.contextTypes, v = (u = u != null) ? ma(n, c) : ft), r = new r(o, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function rf(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && nf.enqueueReplaceState(r, r.state, null);
  }
  function Bd(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, bo(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? c.context = It(v) : (v = zn(r) ? Ua : Sn.current, c.context = ma(n, v)), c.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Pd(n, r, v, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && nf.enqueueReplaceState(c, c.state, null), Fc(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Lo(n, r) {
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
  function af(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Vd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var My = typeof WeakMap == "function" ? WeakMap : Map;
  function Ns(n, r, o) {
    o = Gi(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Mo || (Mo = !0, Ps = u), Vd(n, r);
    }, o;
  }
  function ah(n, r, o) {
    o = Gi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Vd(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
      Vd(n, r), typeof u != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function $d(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new My();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = np.bind(null, n, r, o), r.then(n, n));
  }
  function Id(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ih(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Gi(-1, 1), r.tag = 2, xo(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Cl = Pe.ReactCurrentOwner, tr = !1;
  function wn(n, r, o, u) {
    r.child = n === null ? sr(r, null, o, u) : ai(r, n.child, o, u);
  }
  function of(n, r, o, u, c) {
    o = o.render;
    var v = r.ref;
    return vu(r, c), u = Be(n, r, o, u, v, c), o = ko(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && o && _d(r), r.flags |= 1, wn(n, r, u, c), r.child);
  }
  function ra(n, r, o, u, c) {
    if (n === null) {
      var v = o.type;
      return typeof v == "function" && !ap(v) && v.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = v, Rl(n, r, v, u, c)) : (n = Cf(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, (n.lanes & c) === 0) {
      var E = v.memoizedProps;
      if (o = o.compare, o = o !== null ? o : os, o(E, u) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = zo(v, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Rl(n, r, o, u, c) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (os(v, u) && n.ref === r.ref) if (tr = !1, r.pendingProps = u = v, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (tr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return lf(n, r, o, u, c);
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
  function lf(n, r, o, u, c) {
    var v = zn(o) ? Ua : Sn.current;
    return v = ma(r, v), vu(r, c), o = Be(n, r, o, u, v, c), u = ko(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && u && _d(r), r.flags |= 1, wn(n, r, o, c), r.child);
  }
  function Ay(n, r, o, u, c) {
    if (zn(o)) {
      var v = !0;
      pl(r);
    } else v = !1;
    if (vu(r, c), r.stateNode === null) ja(n, r), rh(r, o, u), Bd(r, o, u, c), u = !0;
    else if (n === null) {
      var E = r.stateNode, _ = r.memoizedProps;
      E.props = _;
      var x = E.context, H = o.contextType;
      typeof H == "object" && H !== null ? H = It(H) : (H = zn(o) ? Ua : Sn.current, H = ma(r, H));
      var X = o.getDerivedStateFromProps, J = typeof X == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      J || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (_ !== u || x !== H) && rf(r, E, u, H), Fa = !1;
      var K = r.memoizedState;
      E.state = K, Fc(r, u, E, c), x = r.memoizedState, _ !== u || K !== x || Un.current || Fa ? (typeof X == "function" && (Pd(r, o, X, u), x = r.memoizedState), (_ = Fa || nh(r, o, _, u, K, x, H)) ? (J || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = x), E.props = u, E.state = x, E.context = H, u = _) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, Xv(n, r), _ = r.memoizedProps, H = r.type === r.elementType ? _ : na(r.type, _), E.props = H, J = r.pendingProps, K = E.context, x = o.contextType, typeof x == "object" && x !== null ? x = It(x) : (x = zn(o) ? Ua : Sn.current, x = ma(r, x));
      var ge = o.getDerivedStateFromProps;
      (X = typeof ge == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (_ !== J || K !== x) && rf(r, E, u, x), Fa = !1, K = r.memoizedState, E.state = K, Fc(r, u, E, c);
      var be = r.memoizedState;
      _ !== J || K !== be || Un.current || Fa ? (typeof ge == "function" && (Pd(r, o, ge, u), be = r.memoizedState), (H = Fa || nh(r, o, H, u, K, be, x) || !1) ? (X || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, be, x), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, be, x)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = be), E.props = u, E.state = be, E.context = x, u = H) : (typeof E.componentDidUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Yd(n, r, o, u, v, c);
  }
  function Yd(n, r, o, u, c, v) {
    Ms(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return c && za(r, o, !1), cr(n, r, v);
    u = r.stateNode, Cl.current = r;
    var _ = E && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = ai(r, n.child, null, v), r.child = ai(r, null, _, v)) : wn(n, r, _, v), r.memoizedState = u.state, c && za(r, o, !0), r.child;
  }
  function uf(n) {
    var r = n.stateNode;
    r.pendingContext ? Ac(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ac(n, r.context, !1), Ud(n, r.containerInfo);
  }
  function Cu(n, r, o, u, c) {
    return Qi(), Es(c), r.flags |= 256, wn(n, r, o, u), r.child;
  }
  var qd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function sf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function oh(n, r, o) {
    var u = r.pendingProps, c = hn.current, v = !1, E = (r.flags & 128) !== 0, _;
    if ((_ = E) || (_ = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), _ ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), nn(hn, c & 1), n === null)
      return kd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = u.children, n = u.fallback, v ? (u = r.mode, v = r.child, E = { mode: "hidden", children: E }, (u & 1) === 0 && v !== null ? (v.childLanes = 0, v.pendingProps = E) : v = Ou(E, u, 0, null), n = Fo(n, u, o, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = sf(o), r.memoizedState = qd, n) : As(r, E));
    if (c = n.memoizedState, c !== null && (_ = c.dehydrated, _ !== null)) return lh(n, r, E, u, _, c, o);
    if (v) {
      v = u.fallback, E = r.mode, c = n.child, _ = c.sibling;
      var x = { mode: "hidden", children: u.children };
      return (E & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = x, r.deletions = null) : (u = zo(c, x), u.subtreeFlags = c.subtreeFlags & 14680064), _ !== null ? v = zo(_, v) : (v = Fo(v, E, o, null), v.flags |= 2), v.return = r, u.return = r, u.sibling = v, r.child = u, u = v, v = r.child, E = n.child.memoizedState, E = E === null ? sf(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, v.memoizedState = E, v.childLanes = n.childLanes & ~o, r.memoizedState = qd, u;
    }
    return v = n.child, n = v.sibling, u = zo(v, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function As(n, r) {
    return r = Ou({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function cf(n, r, o, u) {
    return u !== null && Es(u), ai(r, n.child, null, o), n = As(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function lh(n, r, o, u, c, v, E) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = af(Error(p(422))), cf(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = u.fallback, c = r.mode, u = Ou({ mode: "visible", children: u.children }, c, 0, null), v = Fo(v, c, E, null), v.flags |= 2, u.return = r, v.return = r, u.sibling = v, r.child = u, (r.mode & 1) !== 0 && ai(r, n.child, null, E), r.child.memoizedState = sf(E), r.memoizedState = qd, v);
    if ((r.mode & 1) === 0) return cf(n, r, E, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var _ = u.dgst;
      return u = _, v = Error(p(419)), u = af(v, u, void 0), cf(n, r, E, u);
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
      return ep(), u = af(Error(p(421))), cf(n, r, E, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Py.bind(null, n), c._reactRetry = r, null) : (n = v.treeContext, ea = ti(c.nextSibling), Zr = r, fn = !0, ri = null, n !== null && (ur[Fn++] = Ar, ur[Fn++] = Ei, ur[Fn++] = vl, Ar = n.id, Ei = n.overflow, vl = r), r = As(r, u.children), r.flags |= 4096, r);
  }
  function Wd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Nd(n.return, r, o);
  }
  function ff(n, r, o, u, c) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = u, v.tail = o, v.tailMode = c);
  }
  function aa(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, v = u.tail;
    if (wn(n, r, u.children, o), u = hn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Wd(n, o, r);
        else if (n.tag === 19) Wd(n, o, r);
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
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && jc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), ff(r, !1, c, o, v);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        ff(r, !0, o, null, v);
        break;
      case "together":
        ff(r, !1, null, null, void 0);
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
    if (n !== null && (r.dependencies = n.dependencies), bl |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = zo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = zo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function df(n, r, o) {
    switch (r.tag) {
      case 3:
        uf(r), Qi();
        break;
      case 5:
        zd(r);
        break;
      case 1:
        zn(r.type) && pl(r);
        break;
      case 4:
        Ud(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        nn(ce, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (nn(hn, hn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? oh(n, r, o) : (nn(hn, hn.current & 1), n = cr(n, r, o), n !== null ? n.sibling : null);
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
  var Ru, Sa, In, uh;
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
      n = r.stateNode, yl(Ri.current);
      var v = null;
      switch (o) {
        case "input":
          c = On(n, c), u = On(n, u), v = [];
          break;
        case "select":
          c = de({}, c, { value: void 0 }), u = de({}, u, { value: void 0 }), v = [];
          break;
        case "textarea":
          c = Gn(n, c), u = Gn(n, u), v = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Oc);
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
  }, uh = function(n, r, o, u) {
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
  function Qd(n, r, o) {
    var u = r.pendingProps;
    switch (Uc(r), r.tag) {
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
        Fd(r);
        var c = yl(Ts.current);
        if (o = r.type, n !== null && r.stateNode != null) In(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(p(166));
            return xr(r), null;
          }
          if (n = yl(Ri.current), _n(r)) {
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
              E === "children" ? typeof _ == "string" ? u.textContent !== _ && (v.suppressHydrationWarning !== !0 && Dc(u.textContent, _, n), c = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (v.suppressHydrationWarning !== !0 && Dc(
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
                typeof v.onClick == "function" && (u.onclick = Oc);
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = de({}, u, { value: void 0 }), Bt("invalid", n);
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
                  typeof c.onClick == "function" && (n.onclick = Oc);
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
        if (n && r.stateNode != null) uh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(p(166));
          if (o = yl(Ts.current), yl(Ri.current), _n(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Aa] = r, (v = u.nodeValue !== o) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Dc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Dc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            v && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Aa] = r, r.stateNode = u;
        }
        return xr(r), null;
      case 13:
        if (Xt(hn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && ea !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Wv(), Qi(), r.flags |= 98560, v = !1;
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
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (hn.current & 1) !== 0 ? Yn === 0 && (Yn = 3) : ep())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return mu(), Sa(n, r), n === null && ps(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Ld(r.type._context), xr(r), null;
      case 17:
        return zn(r.type) && Si(), xr(r), null;
      case 19:
        if (Xt(hn), v = r.memoizedState, v === null) return xr(r), null;
        if (u = (r.flags & 128) !== 0, E = v.rendering, E === null) if (u) Us(v, !1);
        else {
          if (Yn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = jc(n), E !== null) {
              for (r.flags |= 128, Us(v, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) v = o, n = u, v.flags &= 14680066, E = v.alternate, E === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = E.childLanes, v.lanes = E.lanes, v.child = E.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = E.memoizedProps, v.memoizedState = E.memoizedState, v.updateQueue = E.updateQueue, v.type = E.type, n = E.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return nn(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          v.tail !== null && Ft() > bu && (r.flags |= 128, u = !0, Us(v, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = jc(E), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Us(v, !0), v.tail === null && v.tailMode === "hidden" && !E.alternate && !fn) return xr(r), null;
          } else 2 * Ft() - v.renderingStartTime > bu && o !== 1073741824 && (r.flags |= 128, u = !0, Us(v, !1), r.lanes = 4194304);
          v.isBackwards ? (E.sibling = r.child, r.child = E) : (o = v.last, o !== null ? o.sibling = E : r.child = E, v.last = E);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = Ft(), r.sibling = null, o = hn.current, nn(hn, u ? o & 1 | 2 : o & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Zd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ea & 1073741824) !== 0 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function sh(n, r) {
    switch (Uc(r), r.tag) {
      case 1:
        return zn(r.type) && Si(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Xt(Un), Xt(Sn), _s(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Fd(r), null;
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
        return Ld(r.type._context), null;
      case 22:
      case 23:
        return Zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tl = !1, fr = !1, Uy = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function No(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      En(n, r, u);
    }
    else o.current = null;
  }
  function Gd(n, r, o) {
    try {
      o();
    } catch (u) {
      En(n, r, u);
    }
  }
  var Kd = !1;
  function zy(n, r) {
    if (cl = mo, n = So(), ru(n)) {
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
            for (var ge; J !== o || c !== 0 && J.nodeType !== 3 || (_ = E + c), J !== v || u !== 0 && J.nodeType !== 3 || (x = E + u), J.nodeType === 3 && (E += J.nodeValue.length), (ge = J.firstChild) !== null; )
              K = J, J = ge;
            for (; ; ) {
              if (J === n) break t;
              if (K === o && ++H === c && (_ = E), K === v && ++X === u && (x = E), (ge = J.nextSibling) !== null) break;
              J = K, K = J.parentNode;
            }
            J = ge;
          }
          o = _ === -1 || x === -1 ? null : { start: _, end: x };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (hs = { focusedElem: n, selectionRange: o }, mo = !1, Re = r; Re !== null; ) if (r = Re, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Re = n;
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
    return be = Kd, Kd = !1, be;
  }
  function Tu(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var v = c.destroy;
          c.destroy = void 0, v !== void 0 && Gd(r, o, v);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function pf(n, r) {
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
  function vf(n) {
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
  function ch(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[ms], delete r[Cd], delete r[Rd], delete r[fu])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function hf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function zs(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || hf(n.return)) return null;
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
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Oc));
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
      Qr.onCommitFiberUnmount(fo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        fr || No(o, r);
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
            v = v.tag, E !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && Gd(o, r, E), c = c.next;
          } while (c !== u);
        }
        Ha(n, r, o);
        break;
      case 1:
        if (!fr && (No(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
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
  function fh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Uy()), r.forEach(function(u) {
        var c = By.bind(null, n, u);
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
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) dh(r, n), r = r.sibling;
  }
  function dh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), oi(n), u & 4) {
          try {
            Tu(3, n, n.return), pf(3, n);
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
        ii(r, n), oi(n), u & 512 && o !== null && No(o, o.return);
        break;
      case 5:
        if (ii(r, n), oi(n), u & 512 && o !== null && No(o, o.return), n.flags & 32) {
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
                var ge = v.value;
                ge != null ? Vn(c, !!v.multiple, ge, !1) : K !== !!v.multiple && (v.defaultValue != null ? Vn(
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
        ii(r, n), oi(n), c = n.child, c.flags & 8192 && (v = c.memoizedState !== null, c.stateNode.isHidden = v, !v || c.alternate !== null && c.alternate.memoizedState !== null || (Jd = Ft())), u & 4 && fh(n);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, n.mode & 1 ? (fr = (H = fr) || X, ii(r, n), fr = H) : ii(r, n), oi(n), u & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !X && (n.mode & 1) !== 0) for (Re = n, X = n.child; X !== null; ) {
            for (J = Re = X; Re !== null; ) {
              switch (K = Re, ge = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tu(4, K, K.return);
                  break;
                case 1:
                  No(K, K.return);
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
                  No(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    vh(J);
                    continue;
                  }
              }
              ge !== null ? (ge.return = K, Re = ge) : vh(J);
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
        ii(r, n), oi(n), u & 4 && fh(n);
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
            if (hf(o)) {
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
    Re = n, ph(n);
  }
  function ph(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Re !== null; ) {
      var c = Re, v = c.child;
      if (c.tag === 22 && u) {
        var E = c.memoizedState !== null || Tl;
        if (!E) {
          var _ = c.alternate, x = _ !== null && _.memoizedState !== null || fr;
          _ = Tl;
          var H = fr;
          if (Tl = E, (fr = x) && !H) for (Re = c; Re !== null; ) E = Re, x = E.child, E.tag === 22 && E.memoizedState !== null ? js(c) : x !== null ? (x.return = E, Re = x) : js(c);
          for (; v !== null; ) Re = v, ph(v), v = v.sibling;
          Re = c, Tl = _, fr = H;
        }
        Xd(n);
      } else (c.subtreeFlags & 8772) !== 0 && v !== null ? (v.return = c, Re = v) : Xd(n);
    }
  }
  function Xd(n) {
    for (; Re !== null; ) {
      var r = Re;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || pf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !fr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : na(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var v = r.updateQueue;
              v !== null && Ad(r, v, u);
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
                Ad(r, E, o);
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
          fr || r.flags & 512 && vf(r);
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
  function vh(n) {
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
              pf(4, r);
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
              vf(r);
            } catch (x) {
              En(r, v, x);
            }
            break;
          case 5:
            var E = r.return;
            try {
              vf(r);
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
  var hh = Math.ceil, mf = Pe.ReactCurrentDispatcher, _l = Pe.ReactCurrentOwner, kr = Pe.ReactCurrentBatchConfig, mt = 0, Hn = null, bn = null, dr = 0, Ea = 0, _u = Jr(0), Yn = 0, wl = null, bl = 0, xl = 0, Hs = 0, wu = null, ia = null, Jd = 0, bu = 1 / 0, Xi = null, Mo = !1, Ps = null, Pa = null, yf = !1, Ao = null, Bs = 0, xu = 0, ku = null, kl = -1, Vs = 0;
  function rn() {
    return (mt & 6) !== 0 ? Ft() : kl !== -1 ? kl : kl = Ft();
  }
  function Ca(n) {
    return (n.mode & 1) === 0 ? 1 : (mt & 2) !== 0 && dr !== 0 ? dr & -dr : hl.transition !== null ? (Vs === 0 && (Vs = tl()), Vs) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ts(n.type)), n);
  }
  function Ra(n, r, o, u) {
    if (50 < xu) throw xu = 0, ku = null, Error(p(185));
    ho(n, o, u), ((mt & 2) === 0 || n !== Hn) && (n === Hn && ((mt & 2) === 0 && (xl |= o), Yn === 4 && Uo(n, dr)), nr(n, u), o === 1 && mt === 0 && (r.mode & 1) === 0 && (bu = Ft() + 500, gs && Mr()));
  }
  function nr(n, r) {
    var o = n.callbackNode;
    ql(n, r);
    var u = vi(n, n === Hn ? dr : 0);
    if (u === 0) o !== null && cn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cn(o), r === 1) n.tag === 0 ? Td(qs.bind(null, n)) : Co(qs.bind(null, n)), Ny(function() {
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
        o = Ch(o, mh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function mh(n, r) {
    if (kl = -1, Vs = 0, (mt & 6) !== 0) throw Error(p(327));
    var o = n.callbackNode;
    if (Du() && n.callbackNode !== o) return null;
    var u = vi(n, n === Hn ? dr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Ef(n, u);
    else {
      r = u;
      var c = mt;
      mt |= 2;
      var v = yh();
      (Hn !== n || dr !== r) && (Xi = null, bu = Ft() + 500, Ol(n, r));
      do
        try {
          jy();
          break;
        } catch (_) {
          Sf(n, _);
        }
      while (!0);
      Od(), mf.current = v, mt = c, bn !== null ? r = 0 : (Hn = null, dr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Pi(n), c !== 0 && (u = c, r = $s(n, c))), r === 1) throw o = wl, Ol(n, 0), Uo(n, u), nr(n, Ft()), o;
      if (r === 6) Uo(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Ys(c) && (r = Ef(n, u), r === 2 && (v = Pi(n), v !== 0 && (u = v, r = $s(n, v))), r === 1)) throw o = wl, Ol(n, 0), Uo(n, u), nr(n, Ft()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Ll(n, ia, Xi);
            break;
          case 3:
            if (Uo(n, u), (u & 130023424) === u && (r = Jd + 500 - Ft(), 10 < r)) {
              if (vi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                rn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Lc(Ll.bind(null, n, ia, Xi), r);
              break;
            }
            Ll(n, ia, Xi);
            break;
          case 4:
            if (Uo(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var E = 31 - Or(u);
              v = 1 << E, E = r[E], E > c && (c = E), u &= ~v;
            }
            if (u = c, u = Ft() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * hh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Lc(Ll.bind(null, n, ia, Xi), u);
              break;
            }
            Ll(n, ia, Xi);
            break;
          case 5:
            Ll(n, ia, Xi);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return nr(n, Ft()), n.callbackNode === o ? mh.bind(null, n) : null;
  }
  function $s(n, r) {
    var o = wu;
    return n.current.memoizedState.isDehydrated && (Ol(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = ia, ia = o, r !== null && Is(r)), n;
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
  function Uo(n, r) {
    for (r &= ~Hs, r &= ~xl, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Or(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function qs(n) {
    if ((mt & 6) !== 0) throw Error(p(327));
    Du();
    var r = vi(n, 0);
    if ((r & 1) === 0) return nr(n, Ft()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Pi(n);
      u !== 0 && (r = u, o = $s(n, u));
    }
    if (o === 1) throw o = wl, Ol(n, 0), Uo(n, r), nr(n, Ft()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ll(n, ia, Xi), nr(n, Ft()), null;
  }
  function gf(n, r) {
    var o = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = o, mt === 0 && (bu = Ft() + 500, gs && Mr());
    }
  }
  function Dl(n) {
    Ao !== null && Ao.tag === 0 && (mt & 6) === 0 && Du();
    var r = mt;
    mt |= 1;
    var o = kr.transition, u = wt;
    try {
      if (kr.transition = null, wt = 1, n) return n();
    } finally {
      wt = u, kr.transition = o, mt = r, (mt & 6) === 0 && Mr();
    }
  }
  function Zd() {
    Ea = _u.current, Xt(_u);
  }
  function Ol(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, $v(o)), bn !== null) for (o = bn.return; o !== null; ) {
      var u = o;
      switch (Uc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Si();
          break;
        case 3:
          mu(), Xt(Un), Xt(Sn), _s();
          break;
        case 5:
          Fd(u);
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
          Ld(u.type._context);
          break;
        case 22:
        case 23:
          Zd();
      }
      o = o.return;
    }
    if (Hn = n, bn = n = zo(n.current, null), dr = Ea = r, Yn = 0, wl = null, Hs = xl = bl = 0, ia = wu = null, ml !== null) {
      for (r = 0; r < ml.length; r++) if (o = ml[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, v = o.pending;
        if (v !== null) {
          var E = v.next;
          v.next = c, u.next = E;
        }
        o.pending = u;
      }
      ml = null;
    }
    return n;
  }
  function Sf(n, r) {
    do {
      var o = bn;
      try {
        if (Od(), Me.current = Yt, Hc) {
          for (var u = tt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Hc = !1;
        }
        if (Ct = 0, $n = Jt = tt = null, ws = !1, bs = 0, _l.current = null, o === null || o.return === null) {
          Yn = 1, wl = r, bn = null;
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
            var ge = Id(E);
            if (ge !== null) {
              ge.flags &= -257, ih(ge, E, _, v, r), ge.mode & 1 && $d(v, H, r), r = ge, x = H;
              var be = r.updateQueue;
              if (be === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(x), r.updateQueue = ke;
              } else be.add(x);
              break e;
            } else {
              if ((r & 1) === 0) {
                $d(v, H, r), ep();
                break e;
              }
              x = Error(p(426));
            }
          } else if (fn && _.mode & 1) {
            var xn = Id(E);
            if (xn !== null) {
              (xn.flags & 65536) === 0 && (xn.flags |= 256), ih(xn, E, _, v, r), Es(Lo(x, _));
              break e;
            }
          }
          v = x = Lo(x, _), Yn !== 4 && (Yn = 2), wu === null ? wu = [v] : wu.push(v), v = E;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var M = Ns(v, x, r);
                Jv(v, M);
                break e;
              case 1:
                _ = x;
                var D = v.type, z = v.stateNode;
                if ((v.flags & 128) === 0 && (typeof D.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Pa === null || !Pa.has(z)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var re = ah(v, _, r);
                  Jv(v, re);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        gh(o);
      } catch (he) {
        r = he, bn === o && o !== null && (bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yh() {
    var n = mf.current;
    return mf.current = Yt, n === null ? Yt : n;
  }
  function ep() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Hn === null || (bl & 268435455) === 0 && (xl & 268435455) === 0 || Uo(Hn, dr);
  }
  function Ef(n, r) {
    var o = mt;
    mt |= 2;
    var u = yh();
    (Hn !== n || dr !== r) && (Xi = null, Ol(n, r));
    do
      try {
        Fy();
        break;
      } catch (c) {
        Sf(n, c);
      }
    while (!0);
    if (Od(), mt = o, mf.current = u, bn !== null) throw Error(p(261));
    return Hn = null, dr = 0, Yn;
  }
  function Fy() {
    for (; bn !== null; ) tp(bn);
  }
  function jy() {
    for (; bn !== null && !Tr(); ) tp(bn);
  }
  function tp(n) {
    var r = rp(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? gh(n) : bn = r, _l.current = null;
  }
  function gh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = Qd(o, r, Ea), o !== null) {
          bn = o;
          return;
        }
      } else {
        if (o = sh(o, r), o !== null) {
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
  function Ll(n, r, o) {
    var u = wt, c = kr.transition;
    try {
      kr.transition = null, wt = 1, Hy(n, r, o, u);
    } finally {
      kr.transition = c, wt = u;
    }
    return null;
  }
  function Hy(n, r, o, u) {
    do
      Du();
    while (Ao !== null);
    if ((mt & 6) !== 0) throw Error(p(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = o.lanes | o.childLanes;
    if (Ju(n, v), n === Hn && (bn = Hn = null, dr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || yf || (yf = !0, Ch(Fi, function() {
      return Du(), null;
    })), v = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || v) {
      v = kr.transition, kr.transition = null;
      var E = wt;
      wt = 1;
      var _ = mt;
      mt |= 4, _l.current = null, zy(n, o), dh(o, n), Av(hs), mo = !!cl, hs = cl = null, n.current = o, Fs(o), Xa(), mt = _, wt = E, kr.transition = v;
    } else n.current = o;
    if (yf && (yf = !1, Ao = n, Bs = c), v = n.pendingLanes, v === 0 && (Pa = null), Ku(o.stateNode), nr(n, Ft()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Mo) throw Mo = !1, n = Ps, Ps = null, n;
    return (Bs & 1) !== 0 && n.tag !== 0 && Du(), v = n.pendingLanes, (v & 1) !== 0 ? n === ku ? xu++ : (xu = 0, ku = n) : xu = 0, Mr(), null;
  }
  function Du() {
    if (Ao !== null) {
      var n = es(Bs), r = kr.transition, o = wt;
      try {
        if (kr.transition = null, wt = 16 > n ? 16 : n, Ao === null) var u = !1;
        else {
          if (n = Ao, Ao = null, Bs = 0, (mt & 6) !== 0) throw Error(p(331));
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
                      var K = X.sibling, ge = X.return;
                      if (ch(X), X === H) {
                        Re = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = ge, Re = K;
                        break;
                      }
                      Re = ge;
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
                    pf(9, _);
                }
              } catch (he) {
                En(_, _.return, he);
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
            Qr.onPostCommitFiberRoot(fo, n);
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
  function Sh(n, r, o) {
    r = Lo(o, r), r = Ns(n, r, 1), n = xo(n, r, 1), r = rn(), n !== null && (ho(n, 1, r), nr(n, r));
  }
  function En(n, r, o) {
    if (n.tag === 3) Sh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Sh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Pa === null || !Pa.has(u))) {
          n = Lo(o, n), n = ah(r, n, 1), r = xo(r, n, 1), n = rn(), r !== null && (ho(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function np(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = rn(), n.pingedLanes |= n.suspendedLanes & o, Hn === n && (dr & o) === o && (Yn === 4 || Yn === 3 && (dr & 130023424) === dr && 500 > Ft() - Jd ? Ol(n, 0) : Hs |= o), nr(n, r);
  }
  function Eh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = po, po <<= 1, (po & 130023424) === 0 && (po = 4194304)));
    var o = rn();
    n = Ci(n, r), n !== null && (ho(n, r, o), nr(n, o));
  }
  function Py(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Eh(n, o);
  }
  function By(n, r) {
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
    u !== null && u.delete(r), Eh(n, o);
  }
  var rp;
  rp = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Un.current) tr = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return tr = !1, df(n, r, o);
      tr = (n.flags & 131072) !== 0;
    }
    else tr = !1, fn && (r.flags & 1048576) !== 0 && Yv(r, _o, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ma(r, Sn.current);
        vu(r, o), c = Be(null, r, u, n, c, o);
        var v = ko();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(u) ? (v = !0, pl(r)) : v = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, bo(r), c.updater = nf, r.stateNode = c, c._reactInternals = r, Bd(r, u, n, o), r = Yd(null, r, u, !0, v, o)) : (r.tag = 0, fn && v && _d(r), wn(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = $y(u), n = na(u, n), c) {
            case 0:
              r = lf(null, r, u, n, o);
              break e;
            case 1:
              r = Ay(null, r, u, n, o);
              break e;
            case 11:
              r = of(null, r, u, n, o);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), lf(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), Ay(n, r, u, c, o);
      case 3:
        e: {
          if (uf(r), n === null) throw Error(p(387));
          u = r.pendingProps, v = r.memoizedState, c = v.element, Xv(n, r), Fc(r, u, null, o);
          var E = r.memoizedState;
          if (u = E.element, v.isDehydrated) if (v = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
            c = Lo(Error(p(423)), r), r = Cu(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Lo(Error(p(424)), r), r = Cu(n, r, u, o, c);
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
        return zd(r), n === null && kd(r), u = r.type, c = r.pendingProps, v = n !== null ? n.memoizedProps : null, E = c.children, fl(u, c) ? E = null : v !== null && fl(u, v) && (r.flags |= 32), Ms(n, r), wn(n, r, E, o), r.child;
      case 6:
        return n === null && kd(r), null;
      case 13:
        return oh(n, r, o);
      case 4:
        return Ud(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = ai(r, null, u, o) : wn(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), of(n, r, u, c, o);
      case 7:
        return wn(n, r, r.pendingProps, o), r.child;
      case 8:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, v = r.memoizedProps, E = c.value, nn(ce, u._currentValue), u._currentValue = E, v !== null) if (ei(v.value, E)) {
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
                  v.lanes |= o, x = v.alternate, x !== null && (x.lanes |= o), Nd(
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
              E.lanes |= o, _ = E.alternate, _ !== null && (_.lanes |= o), Nd(E, o, r), E = v.sibling;
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
        return Rl(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : na(u, c), ja(n, r), r.tag = 1, zn(u) ? (n = !0, pl(r)) : n = !1, vu(r, o), rh(r, u, c), Bd(r, u, c, o), Yd(null, r, u, !0, n, o);
      case 19:
        return aa(n, r, o);
      case 22:
        return at(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Ch(n, r) {
    return on(n, r);
  }
  function Vy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, o, u) {
    return new Vy(n, r, o, u);
  }
  function ap(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function $y(n) {
    if (typeof n == "function") return ap(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === qt) return 11;
      if (n === Ht) return 14;
    }
    return 2;
  }
  function zo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ba(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Cf(n, r, o, u, c, v) {
    var E = 2;
    if (u = n, typeof n == "function") ap(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case pt:
        return Fo(o.children, c, v, r);
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
  function Fo(n, r, o, u) {
    return n = Ba(7, n, u, r), n.lanes = o, n;
  }
  function Ou(n, r, o, u) {
    return n = Ba(22, n, u, r), n.elementType = ut, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Nl(n, r, o) {
    return n = Ba(6, n, null, r), n.lanes = o, n;
  }
  function ip(n, r, o) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Rh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, v, E, _, x) {
    return n = new Rh(n, r, o, _, x), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ba(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bo(v), n;
  }
  function Th(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: De, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function _h(n) {
    if (!n) return ft;
    n = n._reactInternals;
    e: {
      if (ve(n) !== n || n.tag !== 1) throw Error(p(170));
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
      if (zn(o)) return Iv(n, o, r);
    }
    return r;
  }
  function op(n, r, o, u, c, v, E, _, x) {
    return n = Rf(o, u, !0, n, c, v, E, _, x), n.context = _h(null), o = n.current, u = rn(), c = Ca(o), v = Gi(u, c), v.callback = r ?? null, xo(o, v, c), n.current.lanes = c, ho(n, c, u), nr(n, u), n;
  }
  function Tf(n, r, o, u) {
    var c = r.current, v = rn(), E = Ca(c);
    return o = _h(o), r.context === null ? r.context = o : r.pendingContext = o, r = Gi(v, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = xo(c, r, E), n !== null && (Ra(n, c, E, v), zc(n, c, E)), E;
  }
  function _f(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function wh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function wf(n, r) {
    wh(n, r), (n = n.alternate) && wh(n, r);
  }
  function bh() {
    return null;
  }
  var lp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function jo(n) {
    this._internalRoot = n;
  }
  bf.prototype.render = jo.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
    Tf(n, r, null, null);
  }, bf.prototype.unmount = jo.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Dl(function() {
        Tf(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function bf(n) {
    this._internalRoot = n;
  }
  bf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = hi();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Ja.length && r !== 0 && r < Ja[o].priority; o++) ;
      Ja.splice(o, 0, n), o === 0 && Ql(n);
    }
  };
  function up(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function xh() {
  }
  function Iy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var v = u;
        u = function() {
          var H = _f(E);
          v.call(H);
        };
      }
      var E = op(r, u, n, 0, null, !1, !1, "", xh);
      return n._reactRootContainer = E, n[qi] = E.current, ps(n.nodeType === 8 ? n.parentNode : n), Dl(), E;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var _ = u;
      u = function() {
        var H = _f(x);
        _.call(H);
      };
    }
    var x = Rf(n, 0, !1, null, null, !1, !1, "", xh);
    return n._reactRootContainer = x, n[qi] = x.current, ps(n.nodeType === 8 ? n.parentNode : n), Dl(function() {
      Tf(r, x, o, u);
    }), x;
  }
  function kf(n, r, o, u, c) {
    var v = o._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof c == "function") {
        var _ = c;
        c = function() {
          var x = _f(E);
          _.call(x);
        };
      }
      Tf(r, E, n, c);
    } else E = Iy(o, r, n, c, u);
    return _f(E);
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
        Dl(function() {
          var u = Ci(n, 1);
          if (u !== null) {
            var c = rn();
            Ra(u, n, 1, c);
          }
        }), wf(n, 1);
    }
  }, bt = function(n) {
    if (n.tag === 13) {
      var r = Ci(n, 134217728);
      if (r !== null) {
        var o = rn();
        Ra(r, n, 134217728, o);
      }
      wf(n, 134217728);
    }
  }, gc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), o = Ci(n, r);
      if (o !== null) {
        var u = rn();
        Ra(o, n, r, u);
      }
      wf(n, r);
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
  }, Jo = gf, Zo = Dl;
  var kh = { usingClientEntryPoint: !1, Events: [ys, Ne, Wi, Da, Ai, gf] }, Ws = { findFiberByHostInstance: dl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Yy = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ot(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber) try {
      fo = Qs.inject(Yy), Qr = Qs;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh, Wa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!up(r)) throw Error(p(200));
    return Th(n, r, null, o);
  }, Wa.createRoot = function(n, r) {
    if (!up(n)) throw Error(p(299));
    var o = !1, u = "", c = lp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[qi] = r.current, ps(n.nodeType === 8 ? n.parentNode : n), new jo(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = ot(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Dl(n);
  }, Wa.hydrate = function(n, r, o) {
    if (!xf(r)) throw Error(p(200));
    return kf(null, n, r, !0, o);
  }, Wa.hydrateRoot = function(n, r, o) {
    if (!up(n)) throw Error(p(405));
    var u = o != null && o.hydratedSources || null, c = !1, v = "", E = lp;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), r = op(r, null, n, 1, o ?? null, c, !1, v, E), n[qi] = r.current, ps(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new bf(r);
  }, Wa.render = function(n, r, o) {
    if (!xf(r)) throw Error(p(200));
    return kf(null, n, r, !1, o);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!xf(n)) throw Error(p(40));
    return n._reactRootContainer ? (Dl(function() {
      kf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = gf, Wa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!xf(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
    return kf(n, r, o, !1, u);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Qa = {}, $T;
function sD() {
  if ($T) return Qa;
  $T = 1;
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
    var d = pv(), p = n_(), S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = !1;
    function I(e) {
      N = e;
    }
    function ee(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("warn", e, a);
      }
    }
    function R(e) {
      if (!N) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("error", e, a);
      }
    }
    function le(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ue = 0, ie = 1, Oe = 2, ne = 3, _e = 4, te = 5, Ce = 6, Ve = 7, jt = 8, Tt = 9, nt = 10, Pe = 11, Ot = 12, De = 13, pt = 14, Ye = 15, Cn = 16, At = 17, pn = 18, qt = 19, St = 21, He = 22, Ht = 23, yt = 24, ut = 25, W = !0, we = !1, de = !1, L = !1, Q = !1, Ae = !0, qe = !0, Ge = !0, st = !0, _t = /* @__PURE__ */ new Set(), Je = {}, Et = {};
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
    function Wt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Ka || t === Nn || t === or, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
    var Jo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Zo = !1;
    function Ui(e) {
      !Zo && Jo.test(e) && (Zo = !0, R("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function el(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Ln(a, t), i.sanitizeURL && Ui("" + a);
        var s = i.attributeName, f = null;
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
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
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
        var f = l.mustUseProperty;
        if (f) {
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
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), b = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), vt = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Ft = "@@iterator";
    function vn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Ft];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, pi = 0, Fi, hc, ji, fo, Qr, Ku, Or;
    function Xu() {
    }
    Xu.__reactDisabledLog = !0;
    function mc() {
      {
        if (pi === 0) {
          Fi = console.log, hc = console.info, ji = console.warn, fo = console.error, Qr = console.group, Ku = console.groupCollapsed, Or = console.groupEnd;
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
    function yc() {
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
              value: hc
            }),
            warn: et({}, e, {
              value: ji
            }),
            error: et({}, e, {
              value: fo
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
    var Hi = S.ReactCurrentDispatcher, po;
    function Gr(e, t, a) {
      {
        if (po === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            po = i && i[1] || "";
          }
        return `
` + po + e;
      }
    }
    var vi = !1, vo;
    {
      var ql = typeof WeakMap == "function" ? WeakMap : Map;
      vo = new ql();
    }
    function Pi(e, t) {
      if (!e || vi)
        return "";
      {
        var a = vo.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      vi = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Hi.current, Hi.current = null, mc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (P) {
              i = P;
            }
            e.call(f.prototype);
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
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && vo.set(e, O), O;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        vi = !1, Hi.current = s, yc(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", j = k ? Gr(k) : "";
      return typeof e == "function" && vo.set(e, j), j;
    }
    function tl(e, t, a) {
      return Pi(e, !0);
    }
    function nl(e, t, a) {
      return Pi(e, !1);
    }
    function ho(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ju(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pi(e, ho(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case fe:
          return Gr("Suspense");
        case ve:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return nl(e.render);
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
        case ue:
        case Oe:
        case Ye:
          return nl(e.type);
        case Pe:
          return nl(e.type.render);
        case ie:
          return tl(e.type);
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
        case fe:
          return "Suspense";
        case ve:
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
            var l = e, s = l._payload, f = l._init;
            try {
              return bt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function gc(e, t, a) {
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
          return gc(a, a.render, "ForwardRef");
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
        case ue:
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
    var rl = S.ReactDebugCurrentFrame, Jn = null, Kr = !1;
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
      rl.getCurrentStack = null, Jn = null, Kr = !1;
    }
    function Qt(e) {
      rl.getCurrentStack = e === null ? null : mi, Jn = e, Kr = !1;
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
    var ld = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ql(e, t) {
      ld[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || R("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || R("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function al(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Gl(e) {
      return e._valueTracker;
    }
    function Kl(e) {
      e._valueTracker = null;
    }
    function il(e) {
      var t = "";
      return e && (al(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function La(e) {
      var t = al(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
        var f = {
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
        return f;
      }
    }
    function Na(e) {
      Gl(e) || (e._valueTracker = La(e));
    }
    function mo(e) {
      if (!e)
        return !1;
      var t = Gl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = il(e);
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
    var Xl = !1, yo = !1, Vi = !1, Jl = !1;
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
      Ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yo && (R("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), yo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Xl && (R("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Xl = !0);
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
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
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
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var h = Yh(f);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            mo(f), w(f, h);
          }
        }
      }
    }
    function Te(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Bi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var ye = !1, $e = !1, lt = !1;
    function Pt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || $e || ($e = !0, R("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (lt || (lt = !0, R("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ye && (R("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ye = !0);
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
    var ol = ["value", "defaultValue"];
    function ns(e) {
      {
        Ql("select", e);
        for (var t = 0; t < ol.length; t++) {
          var a = ol[t];
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
        for (var s = a, f = {}, h = 0; h < s.length; h++)
          f["$" + s[h]] = !0;
        for (var y = 0; y < l.length; y++) {
          var C = f.hasOwnProperty("$" + l[y].value);
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
    function ll(e, t) {
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
    function ud(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? $i(a, !!t.multiple, i, !1) : t.defaultValue != null && $i(a, !!t.multiple, t.defaultValue, !0);
    }
    function Sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? $i(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? $i(a, !!t.multiple, t.defaultValue, !0) : $i(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function sd(e, t) {
      var a = e, i = t.value;
      i != null && $i(a, !!t.multiple, i, !1);
    }
    var vv = !1;
    function Ec(e, t) {
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
    function hv(e, t) {
      var a = e;
      Ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vv && (R("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), vv = !0);
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
    function mv(e, t) {
      var a = e, i = Nr(t.value), l = Nr(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = _r(l));
    }
    function yv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ey(e, t) {
      mv(e, t);
    }
    var Za = "http://www.w3.org/1999/xhtml", Cy = "http://www.w3.org/1998/Math/MathML", cd = "http://www.w3.org/2000/svg";
    function fd(e) {
      switch (e) {
        case "svg":
          return cd;
        case "math":
          return Cy;
        default:
          return Za;
      }
    }
    function Cc(e, t) {
      return e == null || e === Za ? fd(t) : e === cd && t === "foreignObject" ? Za : e;
    }
    var Ry = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Rc, gv = Ry(function(e, t) {
      if (e.namespaceURI === cd && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ii = 3, Mn = 8, Yi = 9, as = 11, go = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ty = {
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
    function Sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(eu).forEach(function(e) {
      Ev.forEach(function(t) {
        eu[Sv(t, e)] = eu[e];
      });
    });
    function Tc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(eu.hasOwnProperty(e) && eu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var Cv = /([A-Z])/g, tu = /^ms-/;
    function _y(e) {
      return e.replace(Cv, "-$1").toLowerCase().replace(tu, "-ms-");
    }
    var Rv = function() {
    };
    {
      var wy = /^(?:webkit|moz|o)[A-Z]/, Tv = /^-ms-/, _v = /-(.)/g, nu = /;\s*$/, yi = {}, dd = {}, is = !1, wv = !1, bv = function(e) {
        return e.replace(_v, function(t, a) {
          return a.toUpperCase();
        });
      }, pd = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, R(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bv(e.replace(Tv, "ms-"))
        ));
      }, vd = function(e) {
        yi.hasOwnProperty(e) && yi[e] || (yi[e] = !0, R("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, xv = function(e, t) {
        dd.hasOwnProperty(t) && dd[t] || (dd[t] = !0, R(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(nu, "")));
      }, kv = function(e, t) {
        is || (is = !0, R("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Dv = function(e, t) {
        wv || (wv = !0, R("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Rv = function(e, t) {
        e.indexOf("-") > -1 ? pd(e) : wy.test(e) ? vd(e) : nu.test(t) && xv(e, t), typeof t == "number" && (isNaN(t) ? kv(e, t) : isFinite(t) || Dv(e, t));
      };
    }
    var by = Rv;
    function xy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : _y(i)) + ":", t += Tc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || by(i, t[i]);
          var s = Tc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ky(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Lv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ty[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ei(e, t) {
      {
        if (!t)
          return;
        var a = Lv(e), i = Lv(t), l = {};
        for (var s in a) {
          var f = a[s], h = i[s];
          if (h && f !== h) {
            var y = f + "," + h;
            if (l[y])
              continue;
            l[y] = !0, R("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ky(e[f]) ? "Removing" : "Updating", f, h);
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
    }, Nv = et({
      menuitem: !0
    }, os), Mv = "__html";
    function _c(e, t) {
      if (t) {
        if (Nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && R("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function So(e, t) {
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
    }, Av = {
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
    }, au = {}, iu = new RegExp("^(aria)-[" + oe + "]*$"), hd = new RegExp("^(aria)[A-Z][" + oe + "]*$");
    function ls(e, t) {
      {
        if (ir.call(au, t) && au[t])
          return !0;
        if (hd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Av.hasOwnProperty(a) ? a : null;
          if (i == null)
            return R("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), au[t] = !0, !0;
          if (t !== i)
            return R("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), au[t] = !0, !0;
        }
        if (iu.test(t)) {
          var l = t.toLowerCase(), s = Av.hasOwnProperty(l) ? l : null;
          if (s == null)
            return au[t] = !0, !1;
          if (t !== s)
            return R("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), au[t] = !0, !0;
        }
      }
      return !0;
    }
    function md(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = ls(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? R("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && R("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Uv(e, t) {
      So(e, t) || md(e, t);
    }
    var us = !1;
    function ou(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !us && (us = !0, e === "select" && t.multiple ? R("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : R("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wc = function() {
    };
    {
      var wr = {}, ss = /^on./, zv = /^on[^A-Z]/, Fv = new RegExp("^(aria)-[" + oe + "]*$"), jv = new RegExp("^(aria)[A-Z][" + oe + "]*$");
      wc = function(e, t, a, i) {
        if (ir.call(wr, t) && wr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return R("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = f.hasOwnProperty(l) ? f[l] : null;
          if (h != null)
            return R("Invalid event handler property `%s`. Did you mean `%s`?", t, h), wr[t] = !0, !0;
          if (ss.test(t))
            return R("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ss.test(t))
          return zv.test(t) && R("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Fv.test(t) || jv.test(t))
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
    var Hv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = wc(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? R("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && R("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Pv(e, t, a) {
      So(e, t) || Hv(e, t, a);
    }
    var yd = 1, gi = 2, ul = 4, gd = yd | gi | ul, cs = null;
    function Dy(e) {
      cs !== null && R("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cs = e;
    }
    function fs() {
      cs === null && R("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cs = null;
    }
    function Oy(e) {
      return e === cs;
    }
    function bc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var xc = null, Bt = null, Eo = null;
    function ds(e) {
      var t = Mu(e);
      if (t) {
        if (typeof xc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          xc(t.stateNode, t.type, i);
        }
      }
    }
    function ps(e) {
      xc = e;
    }
    function Sd(e) {
      Bt ? Eo ? Eo.push(e) : Eo = [e] : Bt = e;
    }
    function Ed() {
      return Bt !== null || Eo !== null;
    }
    function lu() {
      if (Bt) {
        var e = Bt, t = Eo;
        if (Bt = null, Eo = null, ds(e), t)
          for (var a = 0; a < t.length; a++)
            ds(t[a]);
      }
    }
    var vs = function(e, t) {
      return e(t);
    }, sl = function() {
    }, kc = !1;
    function Ly() {
      var e = Ed();
      e && (sl(), lu());
    }
    function Bv(e, t, a) {
      if (kc)
        return e(t, a);
      kc = !0;
      try {
        return vs(e, t, a);
      } finally {
        kc = !1, Ly();
      }
    }
    function Vv(e, t, a) {
      vs = e, sl = a;
    }
    function Dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Oc(e, t, a) {
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
          return !!(a.disabled && Dc(t));
        default:
          return !1;
      }
    }
    function cl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Oc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var hs = !1;
    if (Qn)
      try {
        var fl = {};
        Object.defineProperty(fl, "passive", {
          get: function() {
            hs = !0;
          }
        }), window.addEventListener("test", fl, fl), window.removeEventListener("test", fl, fl);
      } catch {
        hs = !1;
      }
    function Lc(e, t, a, i, l, s, f, h, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var $v = Lc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nc = document.createElement("react");
      $v = function(t, a, i, l, s, f, h, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), O = !1, k = !0, j = window.event, P = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Nc.removeEventListener($, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          O = !0, V(), a.apply(i, pe), k = !1;
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
        if (window.addEventListener("error", A), Nc.addEventListener($, Fe, !1), T.initEvent($, !1, !1), Nc.dispatchEvent(T), P && Object.defineProperty(window, "event", P), O && k && (kt ? gt && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", A), !O)
          return V(), Lc.apply(this, arguments);
      };
    }
    var Ny = $v, uu = !1, su = null, ti = !1, Mc = null, cu = {
      onError: function(e) {
        uu = !0, su = e;
      }
    };
    function Aa(e, t, a, i, l, s, f, h, y) {
      uu = !1, su = null, Ny.apply(cu, arguments);
    }
    function ms(e, t, a, i, l, s, f, h, y) {
      if (Aa.apply(this, arguments), uu) {
        var C = Rd();
        ti || (ti = !0, Mc = C);
      }
    }
    function qi() {
      if (ti) {
        var e = Mc;
        throw ti = !1, Mc = null, e;
      }
    }
    function Cd() {
      return uu;
    }
    function Rd() {
      if (uu) {
        var e = su;
        return uu = !1, su = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fu(e) {
      return e._reactInternals;
    }
    function dl(e) {
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
    ), Ac = (
      /*             */
      16384
    ), Iv = (
      /*               */
      32767
    ), pl = (
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
    ), Co = (
      /*                 */
      4194304
    ), Td = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), Ro = (
      /*              */
      33554432
    ), To = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ht | Ua | 0
    ), du = An | ht | Jr | Xt | Un | zn | Si, _o = ht | nn | Un | Si, ur = ma | Jr, Fn = Co | Td | Ss, vl = S.ReactCurrentOwner;
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
    function wo(e) {
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function Yv(e) {
      return Ar(e) === e;
    }
    function _d(e) {
      {
        var t = vl.current;
        if (t !== null && t.tag === ie) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || R("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = fu(e);
      return l ? Ar(l) === l : !1;
    }
    function Uc(e) {
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
        var f = s.alternate;
        if (f === null) {
          var h = s.return;
          if (h !== null) {
            i = l = h;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return Uc(s), e;
            if (y === l)
              return Uc(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, T = s.child; T; ) {
            if (T === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (T === l) {
              C = !0, l = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = f.child; T; ) {
              if (T === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (T === l) {
                C = !0, l = f, i = s;
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
      return t !== null ? wd(t) : null;
    }
    function wd(e) {
      if (e.tag === te || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== _e) {
          var a = wd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var bd = p.unstable_scheduleCallback, xd = p.unstable_cancelCallback, kd = p.unstable_shouldYield, qv = p.unstable_requestPaint, _n = p.unstable_now, Wv = p.unstable_getCurrentPriorityLevel, Qi = p.unstable_ImmediatePriority, Es = p.unstable_UserBlockingPriority, hl = p.unstable_NormalPriority, Cs = p.unstable_LowPriority, pu = p.unstable_IdlePriority, Qv = p.unstable_yieldValue, Gv = p.unstable_setDisableYieldValue, ai = null, sr = null, ce = null, ya = !1, br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Dd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return R("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        qe && (e = et({}, e, {
          getLaneLabelMap: Md,
          injectProfilingHooks: ml
        })), ai = t.inject(e), sr = t;
      } catch (a) {
        R("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Od(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ai, e, t);
        } catch (a) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", a));
        }
    }
    function Ld(e, t) {
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
                i = hl;
                break;
              case df:
                i = pu;
                break;
              default:
                i = hl;
                break;
            }
            sr.onCommitFiberRoot(ai, e, i, a);
          }
        } catch (l) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", l));
        }
    }
    function Nd(e) {
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
      if (typeof Qv == "function" && (Gv(e), I(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ai, e);
        } catch (t) {
          ya || (ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function ml(e) {
      ce = e;
    }
    function Md() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hd; a++) {
          var i = th(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Kv(e) {
      ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(e);
    }
    function Ci() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function Fa(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function bo() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function Xv(e) {
      ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(e);
    }
    function Gi() {
      ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped();
    }
    function xo(e) {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function zc() {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(e);
    }
    function Fc() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function Ad(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function hu() {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped();
    }
    function Ri(e, t, a) {
      ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(e, t, a);
    }
    function Rs(e, t, a) {
      ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(e, t, a);
    }
    function Ts(e) {
      ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(e);
    }
    function yl() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function Ud(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function mu() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function zd(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function Fd() {
      ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded();
    }
    function hn() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function jc(e) {
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(e);
    }
    function jd(e, t) {
      ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, t);
    }
    function _s(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
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
    ), $n = Math.clz32 ? Math.clz32 : bs, Hc = Math.log, ws = Math.LN2;
    function bs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Hc(t) / ws | 0) | 0;
    }
    var Hd = 31, Y = (
      /*                        */
      0
    ), jn = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), ko = (
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
    ), gl = (
      /*                */
      32
    ), Do = (
      /*                       */
      4194240
    ), yu = (
      /*                        */
      64
    ), Pc = (
      /*                        */
      128
    ), Bc = (
      /*                        */
      256
    ), Vc = (
      /*                        */
      512
    ), $c = (
      /*                        */
      1024
    ), Ic = (
      /*                        */
      2048
    ), Yc = (
      /*                        */
      4096
    ), qc = (
      /*                        */
      8192
    ), Sl = (
      /*                        */
      16384
    ), Wc = (
      /*                       */
      32768
    ), gu = (
      /*                       */
      65536
    ), Su = (
      /*                       */
      131072
    ), Qc = (
      /*                       */
      262144
    ), xs = (
      /*                       */
      524288
    ), Gc = (
      /*                       */
      1048576
    ), Kc = (
      /*                       */
      2097152
    ), ks = (
      /*                            */
      130023424
    ), El = (
      /*                             */
      4194304
    ), Ds = (
      /*                             */
      8388608
    ), Xc = (
      /*                             */
      16777216
    ), Jc = (
      /*                             */
      33554432
    ), Zc = (
      /*                             */
      67108864
    ), Zv = El, Eu = (
      /*          */
      134217728
    ), eh = (
      /*                          */
      268435455
    ), Os = (
      /*               */
      268435456
    ), Oo = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function th(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & ko)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & gl)
          return "TransitionHydration";
        if (e & Do)
          return "Transition";
        if (e & ks)
          return "Retry";
        if (e & Eu)
          return "SelectiveHydration";
        if (e & Os)
          return "IdleHydration";
        if (e & Oo)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var Yt = -1, ef = yu, tf = El;
    function Ls(e) {
      switch (Cl(e)) {
        case Be:
          return Be;
        case ko:
          return ko;
        case Zn:
          return Zn;
        case er:
          return er;
        case ta:
          return ta;
        case gl:
          return gl;
        case yu:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case Sl:
        case Wc:
        case gu:
        case Su:
        case Qc:
        case xs:
        case Gc:
        case Kc:
          return e & Do;
        case El:
        case Ds:
        case Xc:
        case Jc:
        case Zc:
          return e & ks;
        case Eu:
          return Eu;
        case Os:
          return Os;
        case Oo:
          return Oo;
        case ga:
          return ga;
        default:
          return R("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function na(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, l = e.suspendedLanes, s = e.pingedLanes, f = a & eh;
      if (f !== Y) {
        var h = f & ~l;
        if (h !== Y)
          i = Ls(h);
        else {
          var y = f & s;
          y !== Y && (i = Ls(y));
        }
      } else {
        var C = a & ~l;
        C !== Y ? i = Ls(C) : s !== Y && (i = Ls(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === Y) {
        var T = Cl(i), O = Cl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === ta && (O & Do) !== Y
        )
          return t;
      }
      (i & Zn) !== Y && (i |= a & ta);
      var k = e.entangledLanes;
      if (k !== Y)
        for (var j = e.entanglements, P = i & k; P > 0; ) {
          var V = wn(P), pe = 1 << V;
          i |= j[V], P &= ~pe;
        }
      return i;
    }
    function Pd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var l = wn(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function nf(e, t) {
      switch (e) {
        case Be:
        case ko:
        case Zn:
          return t + 250;
        case er:
        case ta:
        case gl:
        case yu:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case Sl:
        case Wc:
        case gu:
        case Su:
        case Qc:
        case xs:
        case Gc:
        case Kc:
          return t + 5e3;
        case El:
        case Ds:
        case Xc:
        case Jc:
        case Zc:
          return Yt;
        case Eu:
        case Os:
        case Oo:
        case ga:
          return Yt;
        default:
          return R("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function nh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = wn(f), y = 1 << h, C = s[h];
        C === Yt ? ((y & i) === Y || (y & l) !== Y) && (s[h] = nf(y, t)) : C <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function rh(e) {
      return Ls(e.pendingLanes);
    }
    function rf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== Y ? t : t & ga ? ga : Y;
    }
    function Bd(e) {
      return (e & Be) !== Y;
    }
    function Lo(e) {
      return (e & eh) !== Y;
    }
    function af(e) {
      return (e & ks) === e;
    }
    function Vd(e) {
      var t = Be | Zn | ta;
      return (e & t) === Y;
    }
    function My(e) {
      return (e & Do) === e;
    }
    function Ns(e, t) {
      var a = ko | Zn | er | ta;
      return (t & a) !== Y;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function $d(e) {
      return (e & Do) !== Y;
    }
    function Id() {
      var e = ef;
      return ef <<= 1, (ef & Do) === Y && (ef = yu), e;
    }
    function ih() {
      var e = tf;
      return tf <<= 1, (tf & ks) === Y && (tf = El), e;
    }
    function Cl(e) {
      return e & -e;
    }
    function tr(e) {
      return Cl(e);
    }
    function wn(e) {
      return 31 - $n(e);
    }
    function of(e) {
      return wn(e);
    }
    function ra(e, t) {
      return (e & t) !== Y;
    }
    function Rl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function lf(e, t) {
      return e & t;
    }
    function Ay(e) {
      return e;
    }
    function Yd(e, t) {
      return e !== jn && e < t ? e : t;
    }
    function uf(e) {
      for (var t = [], a = 0; a < Hd; a++)
        t.push(e);
      return t;
    }
    function Cu(e, t, a) {
      e.pendingLanes |= t, t !== Oo && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, l = of(t);
      i[l] = a;
    }
    function qd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = wn(i), s = 1 << l;
        a[l] = Yt, i &= ~s;
      }
    }
    function sf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function oh(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = wn(f), y = 1 << h;
        i[h] = Y, l[h] = Yt, s[h] = Yt, f &= ~y;
      }
    }
    function As(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = wn(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function cf(e, t) {
      var a = Cl(t), i;
      switch (a) {
        case Zn:
          i = ko;
          break;
        case ta:
          i = er;
          break;
        case yu:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case Sl:
        case Wc:
        case gu:
        case Su:
        case Qc:
        case xs:
        case Gc:
        case Kc:
        case El:
        case Ds:
        case Xc:
        case Jc:
        case Zc:
          i = gl;
          break;
        case Oo:
          i = Os;
          break;
        default:
          i = jn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jn ? jn : i;
    }
    function lh(e, t, a) {
      if (br)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = of(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Wd(e, t) {
      if (br)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = of(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), f.clear()), t &= ~s;
        }
    }
    function ff(e, t) {
      return null;
    }
    var aa = Be, ja = Zn, cr = ta, df = Oo, Ru = jn;
    function Sa() {
      return Ru;
    }
    function In(e) {
      Ru = e;
    }
    function uh(e, t) {
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
    function Qd(e, t) {
      return e !== 0 && e < t;
    }
    function sh(e) {
      var t = Cl(e);
      return Qd(aa, t) ? Qd(ja, t) ? Lo(t) ? cr : df : ja : aa;
    }
    function Tl(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function Uy(e) {
      fr = e;
    }
    function Re(e) {
      fr(e);
    }
    var No;
    function Gd(e) {
      No = e;
    }
    var Kd;
    function zy(e) {
      Kd = e;
    }
    var Tu;
    function pf(e) {
      Tu = e;
    }
    var vf;
    function ch(e) {
      vf = e;
    }
    var hf = !1, zs = [], Ti = null, _i = null, mn = null, Ur = /* @__PURE__ */ new Map(), Ha = /* @__PURE__ */ new Map(), Ki = [], fh = [
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
      return fh.indexOf(e) > -1;
    }
    function dh(e, t, a, i, l) {
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
        var f = dh(t, a, i, l, s);
        if (t !== null) {
          var h = Mu(t);
          h !== null && No(h);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return l !== null && y.indexOf(l) === -1 && y.push(l), e;
    }
    function ph(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Ti = Fs(Ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return _i = Fs(_i, e, t, a, i, f), !0;
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
    function Xd(e) {
      var t = Xs(e.target);
      if (t !== null) {
        var a = Ar(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var l = Ei(a);
            if (l !== null) {
              e.blockedOn = l, vf(e.priority, function() {
                Kd(a);
              });
              return;
            }
          } else if (i === ne) {
            var s = a.stateNode;
            if (Tl(s)) {
              e.blockedOn = wo(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function vh(e) {
      for (var t = Tu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ki.length && Qd(t, Ki[i].priority); i++)
        ;
      Ki.splice(i, 0, a), i === 0 && Xd(a);
    }
    function js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Hs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Dy(s), l.target.dispatchEvent(s), fs();
        } else {
          var f = Mu(i);
          return f !== null && No(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function hh(e, t, a) {
      js(e) && a.delete(t);
    }
    function mf() {
      hf = !1, Ti !== null && js(Ti) && (Ti = null), _i !== null && js(_i) && (_i = null), mn !== null && js(mn) && (mn = null), Ur.forEach(hh), Ha.forEach(hh);
    }
    function _l(e, t) {
      e.blockedOn === t && (e.blockedOn = null, hf || (hf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, mf)));
    }
    function kr(e) {
      if (zs.length > 0) {
        _l(zs[0], e);
        for (var t = 1; t < zs.length; t++) {
          var a = zs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ti !== null && _l(Ti, e), _i !== null && _l(_i, e), mn !== null && _l(mn, e);
      var i = function(h) {
        return _l(h, e);
      };
      Ur.forEach(i), Ha.forEach(i);
      for (var l = 0; l < Ki.length; l++) {
        var s = Ki[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ki.length > 0; ) {
        var f = Ki[0];
        if (f.blockedOn !== null)
          break;
        Xd(f), f.blockedOn === null && Ki.shift();
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
          l = wl;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function _u(e, t, a, i) {
      var l = Sa(), s = mt.transition;
      mt.transition = null;
      try {
        In(aa), wl(e, t, a, i);
      } finally {
        In(l), mt.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var l = Sa(), s = mt.transition;
      mt.transition = null;
      try {
        In(ja), wl(e, t, a, i);
      } finally {
        In(l), mt.transition = s;
      }
    }
    function wl(e, t, a, i) {
      Hn && bl(e, t, a, i);
    }
    function bl(e, t, a, i) {
      var l = Hs(e, t, a, i);
      if (l === null) {
        Zy(e, t, i, xl, a), oi(e, i);
        return;
      }
      if (ph(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (oi(e, i), t & ul && ii(e)) {
        for (; l !== null; ) {
          var s = Mu(l);
          s !== null && Re(s);
          var f = Hs(e, t, a, i);
          if (f === null && Zy(e, t, i, xl, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Zy(e, t, i, null, a);
    }
    var xl = null;
    function Hs(e, t, a, i) {
      xl = null;
      var l = bc(i), s = Xs(l);
      if (s !== null) {
        var f = Ar(s);
        if (f === null)
          s = null;
        else {
          var h = f.tag;
          if (h === De) {
            var y = Ei(f);
            if (y !== null)
              return y;
            s = null;
          } else if (h === ne) {
            var C = f.stateNode;
            if (Tl(C))
              return wo(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return xl = s, null;
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
          var t = Wv();
          switch (t) {
            case Qi:
              return aa;
            case Es:
              return ja;
            case hl:
            case Cs:
              return cr;
            case pu:
              return df;
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
    function Jd(e, t, a) {
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
    var Mo = null, Ps = null, Pa = null;
    function yf(e) {
      return Mo = e, Ps = xu(), !0;
    }
    function Ao() {
      Mo = null, Ps = null, Pa = null;
    }
    function Bs() {
      if (Pa)
        return Pa;
      var e, t = Ps, a = t.length, i, l = xu(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Pa = l.slice(e, h), Pa;
    }
    function xu() {
      return "value" in Mo ? Mo.value : Mo.textContent;
    }
    function ku(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function kl() {
      return !0;
    }
    function Vs() {
      return !1;
    }
    function rn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = kl : this.isDefaultPrevented = Vs, this.isPropagationStopped = Vs, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = kl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = kl);
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
        isPersistent: kl
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
    }), mh = rn(nr), $s, Is, Ys;
    function Uo(e) {
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
      getModifierState: np,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Uo(e), $s);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Is;
      }
    }), gf = rn(qs), Dl = et({}, qs, {
      dataTransfer: 0
    }), Zd = rn(Dl), Ol = et({}, nr, {
      relatedTarget: 0
    }), Sf = rn(Ol), yh = et({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ep = rn(yh), Ef = et({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Fy = rn(Ef), jy = et({}, Ca, {
      data: 0
    }), tp = rn(jy), gh = tp, Ll = {
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
    }, Hy = {
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
        var t = Ll[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ku(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Hy[e.keyCode] || "Unidentified" : "";
    }
    var Sh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function En(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Sh[e];
      return i ? !!a[i] : !1;
    }
    function np(e) {
      return En;
    }
    var Eh = et({}, nr, {
      key: Du,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: np,
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
    }), Py = rn(Eh), By = et({}, qs, {
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
    }), rp = rn(By), Ch = et({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: np
    }), Vy = rn(Ch), Ba = et({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ap = rn(Ba), $y = et({}, qs, {
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
    }), zo = rn($y), Cf = [9, 13, 27, 32], Fo = 229, Ou = Qn && "CompositionEvent" in window, Nl = null;
    Qn && "documentMode" in document && (Nl = document.documentMode);
    var ip = Qn && "TextEvent" in window && !Nl, Rh = Qn && (!Ou || Nl && Nl > 8 && Nl <= 11), Rf = 32, Th = String.fromCharCode(Rf);
    function _h() {
      $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $t("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var op = !1;
    function Tf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function _f(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function wh(e, t) {
      return e === "keydown" && t.keyCode === Fo;
    }
    function wf(e, t) {
      switch (e) {
        case "keyup":
          return Cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function bh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function lp(e) {
      return e.locale === "ko";
    }
    var jo = !1;
    function bf(e, t, a, i, l) {
      var s, f;
      if (Ou ? s = _f(t) : jo ? wf(t, i) && (s = "onCompositionEnd") : wh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Rh && !lp(i) && (!jo && s === "onCompositionStart" ? jo = yf(l) : s === "onCompositionEnd" && jo && (f = Bs()));
      var h = Nh(a, s);
      if (h.length > 0) {
        var y = new tp(s, t, null, i, l);
        if (e.push({
          event: y,
          listeners: h
        }), f)
          y.data = f;
        else {
          var C = bh(i);
          C !== null && (y.data = C);
        }
      }
    }
    function up(e, t) {
      switch (e) {
        case "compositionend":
          return bh(t);
        case "keypress":
          var a = t.which;
          return a !== Rf ? null : (op = !0, Th);
        case "textInput":
          var i = t.data;
          return i === Th && op ? null : i;
        default:
          return null;
      }
    }
    function xf(e, t) {
      if (jo) {
        if (e === "compositionend" || !Ou && wf(e, t)) {
          var a = Bs();
          return Ao(), jo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Tf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Rh && !lp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xh(e, t, a, i, l) {
      var s;
      if (ip ? s = up(t, i) : s = xf(t, i), !s)
        return null;
      var f = Nh(a, "onBeforeInput");
      if (f.length > 0) {
        var h = new gh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: h,
          listeners: f
        }), h.data = s;
      }
    }
    function Iy(e, t, a, i, l, s, f) {
      bf(e, t, a, i, l), xh(e, t, a, i, l);
    }
    var kf = {
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
    function kh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!kf[e.type] : t === "textarea";
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
    function Yy() {
      $t("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Qs(e, t, a, i) {
      Sd(i);
      var l = Nh(t, "onChange");
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
      Qs(t, r, e, bc(e)), Bv(c, t);
    }
    function c(e) {
      p0(e, 0);
    }
    function v(e) {
      var t = Af(e);
      if (mo(t))
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
    function ge(e) {
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
    function M(e, t, a, i, l, s, f) {
      var h = a ? Af(a) : window, y, C;
      if (o(h) ? y = E : kh(h) ? _ ? y = ke : (y = K, C = J) : ge(h) && (y = be), y) {
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
    function z(e, t, a, i, l, s, f) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !Oy(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Xs(C) || Rp(C)))
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
          var pe = gf, Fe = "onMouseLeave", Le = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = rp, Fe = "onPointerLeave", Le = "onPointerEnter", kt = "pointer");
          var gt = k == null ? T : Af(k), A = j == null ? T : Af(j), $ = new pe(Fe, kt + "leave", k, i, l);
          $.target = gt, $.relatedTarget = A;
          var U = null, Z = Xs(l);
          if (Z === a) {
            var Ee = new pe(Le, kt + "enter", j, i, l);
            Ee.target = A, Ee.relatedTarget = gt, U = Ee;
          }
          U_(e, $, U, k, j);
        }
      }
    }
    function re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : re;
    function Ue(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!ir.call(t, s) || !he(e[s], t[s]))
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
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ho(e, l, s, f, h);
    }
    function Ho(e, t, a, i, l) {
      var s = 0, f = -1, h = -1, y = 0, C = 0, T = e, O = null;
      e: for (; ; ) {
        for (var k = null; T === t && (a === 0 || T.nodeType === Ii) && (f = s + a), T === i && (l === 0 || T.nodeType === Ii) && (h = s + l), T.nodeType === Ii && (s += T.nodeValue.length), (k = T.firstChild) !== null; )
          O = T, T = k;
        for (; ; ) {
          if (T === e)
            break e;
          if (O === t && ++y === a && (f = s), O === i && ++C === l && (h = s), (k = T.nextSibling) !== null)
            break;
          T = O, O = T.parentNode;
        }
        T = k;
      }
      return f === -1 || h === -1 ? null : {
        start: f,
        end: h
      };
    }
    function qy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), h = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > h) {
          var y = h;
          h = f, f = y;
        }
        var C = qn(e, f), T = qn(e, h);
        if (C && T) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var O = a.createRange();
          O.setStart(C.node, C.offset), l.removeAllRanges(), f > h ? (l.addRange(O), l.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), l.addRange(O));
        }
      }
    }
    function t0(e) {
      return e && e.nodeType === Ii;
    }
    function n0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : t0(e) ? !1 : t0(t) ? n0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function y_(e) {
      return e && e.ownerDocument && n0(e.ownerDocument.documentElement, e);
    }
    function g_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function r0() {
      for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
        if (g_(t))
          e = t.contentWindow;
        else
          return t;
        t = Bi(e.document);
      }
      return t;
    }
    function Wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function S_() {
      var e = r0();
      return {
        focusedElem: e,
        selectionRange: Wy(e) ? C_(e) : null
      };
    }
    function E_(e) {
      var t = r0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && y_(a)) {
        i !== null && Wy(a) && R_(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var h = l[f];
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
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : qy(e, t);
    }
    var T_ = Qn && "documentMode" in document && document.documentMode <= 11;
    function __() {
      $t("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, Qy = null, sp = null, Gy = !1;
    function w_(e) {
      if ("selectionStart" in e && Wy(e))
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
    function a0(e, t, a) {
      var i = b_(a);
      if (!(Gy || Df == null || Df !== Bi(i))) {
        var l = w_(Df);
        if (!sp || !Ue(sp, l)) {
          sp = l;
          var s = Nh(Qy, "onSelect");
          if (s.length > 0) {
            var f = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Df;
          }
        }
      }
    }
    function x_(e, t, a, i, l, s, f) {
      var h = a ? Af(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (kh(h) || h.contentEditable === "true") && (Df = h, Qy = a, sp = null);
          break;
        case "focusout":
          Df = null, Qy = null, sp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gy = !1, a0(e, i, l);
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
          a0(e, i, l);
      }
    }
    function Dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Of = {
      animationend: Dh("Animation", "AnimationEnd"),
      animationiteration: Dh("Animation", "AnimationIteration"),
      animationstart: Dh("Animation", "AnimationStart"),
      transitionend: Dh("Transition", "TransitionEnd")
    }, Ky = {}, i0 = {};
    Qn && (i0 = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function Oh(e) {
      if (Ky[e])
        return Ky[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in i0)
          return Ky[e] = t[a];
      return e;
    }
    var o0 = Oh("animationend"), l0 = Oh("animationiteration"), u0 = Oh("animationstart"), s0 = Oh("transitionend"), c0 = /* @__PURE__ */ new Map(), f0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Lu(e, t) {
      c0.set(e, t), $t(t, [e]);
    }
    function k_() {
      for (var e = 0; e < f0.length; e++) {
        var t = f0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Lu(a, "on" + i);
      }
      Lu(o0, "onAnimationEnd"), Lu(l0, "onAnimationIteration"), Lu(u0, "onAnimationStart"), Lu("dblclick", "onDoubleClick"), Lu("focusin", "onFocus"), Lu("focusout", "onBlur"), Lu(s0, "onTransitionEnd");
    }
    function D_(e, t, a, i, l, s, f) {
      var h = c0.get(t);
      if (h !== void 0) {
        var y = Ra, C = t;
        switch (t) {
          case "keypress":
            if (ku(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            y = Py;
            break;
          case "focusin":
            C = "focus", y = Sf;
            break;
          case "focusout":
            C = "blur", y = Sf;
            break;
          case "beforeblur":
          case "afterblur":
            y = Sf;
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
            y = gf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Zd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Vy;
            break;
          case o0:
          case l0:
          case u0:
            y = ep;
            break;
          case s0:
            y = ap;
            break;
          case "scroll":
            y = mh;
            break;
          case "wheel":
            y = zo;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = rp;
            break;
        }
        var T = (s & ul) !== 0;
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
    k_(), D(), Yy(), __(), _h();
    function O_(e, t, a, i, l, s, f) {
      D_(e, t, a, i, l, s);
      var h = (s & gd) === 0;
      h && (z(e, t, a, i, l), M(e, t, a, i, l), x_(e, t, a, i, l), Iy(e, t, a, i, l));
    }
    var cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(cp));
    function d0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ms(i, t, void 0, e), e.currentTarget = null;
    }
    function L_(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, h = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          d0(e, y, h), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], O = T.instance, k = T.currentTarget, j = T.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          d0(e, j, k), i = O;
        }
    }
    function p0(e, t) {
      for (var a = (t & ul) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        L_(s, f, a);
      }
      qi();
    }
    function N_(e, t, a, i, l) {
      var s = bc(a), f = [];
      O_(f, e, i, a, s, t), p0(f, t);
    }
    function yn(e, t) {
      Xy.has(e) || R('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ub(t), l = z_(e);
      i.has(l) || (v0(t, e, gi, a), i.add(l));
    }
    function Jy(e, t, a) {
      Xy.has(e) && !t && R('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ul), v0(a, e, i, t);
    }
    var Lh = "_reactListening" + Math.random().toString(36).slice(2);
    function fp(e) {
      if (!e[Lh]) {
        e[Lh] = !0, _t.forEach(function(a) {
          a !== "selectionchange" && (Xy.has(a) || Jy(a, !1, e), Jy(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Lh] || (t[Lh] = !0, Jy("selectionchange", !1, t)));
      }
    }
    function v0(e, t, a, i, l) {
      var s = Ea(e, t, a), f = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? bu(e, t, s, f) : Jd(e, t, s) : f !== void 0 ? Xi(e, t, s, f) : ia(e, t, s);
    }
    function h0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Zy(e, t, a, i, l) {
      var s = i;
      if ((t & yd) === 0 && (t & gi) === 0) {
        var f = l;
        if (i !== null) {
          var h = i;
          e: for (; ; ) {
            if (h === null)
              return;
            var y = h.tag;
            if (y === ne || y === _e) {
              var C = h.stateNode.containerInfo;
              if (h0(C, f))
                break;
              if (y === _e)
                for (var T = h.return; T !== null; ) {
                  var O = T.tag;
                  if (O === ne || O === _e) {
                    var k = T.stateNode.containerInfo;
                    if (h0(k, f))
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
      Bv(function() {
        return N_(e, t, a, s);
      });
    }
    function dp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function M_(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, y = [], C = e, T = null; C !== null; ) {
        var O = C, k = O.stateNode, j = O.tag;
        if (j === te && k !== null && (T = k, h !== null)) {
          var P = cl(C, h);
          P != null && y.push(dp(C, P, T));
        }
        if (l)
          break;
        C = C.return;
      }
      return y;
    }
    function Nh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, h = s.tag;
        if (h === te && f !== null) {
          var y = f, C = cl(l, a);
          C != null && i.unshift(dp(l, C, y));
          var T = cl(l, t);
          T != null && i.push(dp(l, T, y));
        }
        l = l.return;
      }
      return i;
    }
    function Lf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function A_(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Lf(s))
        l++;
      for (var f = 0, h = i; h; h = Lf(h))
        f++;
      for (; l - f > 0; )
        a = Lf(a), l--;
      for (; f - l > 0; )
        i = Lf(i), f--;
      for (var y = l; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Lf(a), i = Lf(i);
      }
      return null;
    }
    function m0(e, t, a, i, l) {
      for (var s = t._reactName, f = [], h = a; h !== null && h !== i; ) {
        var y = h, C = y.alternate, T = y.stateNode, O = y.tag;
        if (C !== null && C === i)
          break;
        if (O === te && T !== null) {
          var k = T;
          if (l) {
            var j = cl(h, s);
            j != null && f.unshift(dp(h, j, k));
          } else if (!l) {
            var P = cl(h, s);
            P != null && f.push(dp(h, P, k));
          }
        }
        h = h.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function U_(e, t, a, i, l) {
      var s = i && l ? A_(i, l) : null;
      i !== null && m0(e, t, i, s, !1), l !== null && a !== null && m0(e, a, l, s, !0);
    }
    function z_(e, t) {
      return e + "__bubble";
    }
    var Va = !1, pp = "dangerouslySetInnerHTML", Mh = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", y0 = "autoFocus", Gs = "children", Ks = "style", Ah = "__html", eg, Uh, vp, g0, zh, S0, E0;
    eg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Uh = function(e, t) {
      Uv(e, t), ou(e, t), Pv(e, t, {
        registrationNameDependencies: Je,
        possibleRegistrationNames: Et
      });
    }, S0 = Qn && !document.documentMode, vp = function(e, t, a) {
      if (!Va) {
        var i = Fh(a), l = Fh(t);
        l !== i && (Va = !0, R("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, g0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), R("Extra attributes from the server: %s", t);
      }
    }, zh = function(e, t) {
      t === !1 ? R("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : R("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, E0 = function(e, t) {
      var a = e.namespaceURI === Za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var F_ = /\r\n?/g, j_ = /\u0000|\uFFFD/g;
    function Fh(e) {
      Vn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(F_, `
`).replace(j_, "");
    }
    function jh(e, t, a, i) {
      var l = Fh(t), s = Fh(e);
      if (s !== l && (i && (Va || (Va = !0, R('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && W))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function C0(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function H_() {
    }
    function Hh(e) {
      e.onclick = H_;
    }
    function P_(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ks)
            f && Object.freeze(f), Ov(t, f);
          else if (s === pp) {
            var h = f ? f[Ah] : void 0;
            h != null && gv(t, h);
          } else if (s === Gs)
            if (typeof f == "string") {
              var y = e !== "textarea" || f !== "";
              y && go(t, f);
            } else typeof f == "number" && go(t, "" + f);
          else s === Mh || s === Nu || s === y0 || (Je.hasOwnProperty(s) ? f != null && (typeof f != "function" && zh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && va(t, s, f, l));
        }
    }
    function B_(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Ks ? Ov(e, f) : s === pp ? gv(e, f) : s === Gs ? go(e, f) : va(e, s, f, i);
      }
    }
    function V_(e, t, a, i) {
      var l, s = C0(a), f, h = i;
      if (h === Za && (h = fd(e)), h === Za) {
        if (l = So(e, t), !l && e !== e.toLowerCase() && R("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          f = y.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(h, e);
      return h === Za && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(eg, e) && (eg[e] = !0, R("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function $_(e, t) {
      return C0(t).createTextNode(e);
    }
    function I_(e, t, a, i) {
      var l = So(t, a);
      Uh(t, a);
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
          for (var f = 0; f < cp.length; f++)
            yn(cp[f], e);
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
          rs(e, a), s = ll(e, a), yn("invalid", e);
          break;
        case "textarea":
          hv(e, a), s = Ec(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (_c(t, s), P_(t, e, i, s, l), t) {
        case "input":
          Na(e), F(e, a, !1);
          break;
        case "textarea":
          Na(e), yv(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          ud(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function Y_(e, t, a, i, l) {
      Uh(t, i);
      var s = null, f, h;
      switch (t) {
        case "input":
          f = Ma(e, a), h = Ma(e, i), s = [];
          break;
        case "select":
          f = ll(e, a), h = ll(e, i), s = [];
          break;
        case "textarea":
          f = Ec(e, a), h = Ec(e, i), s = [];
          break;
        default:
          f = a, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && Hh(e);
          break;
      }
      _c(t, h);
      var y, C, T = null;
      for (y in f)
        if (!(h.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === Ks) {
            var O = f[y];
            for (C in O)
              O.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else y === pp || y === Gs || y === Mh || y === Nu || y === y0 || (Je.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var k = h[y], j = f != null ? f[y] : void 0;
        if (!(!h.hasOwnProperty(y) || k === j || k == null && j == null))
          if (y === Ks)
            if (k && Object.freeze(k), j) {
              for (C in j)
                j.hasOwnProperty(C) && (!k || !k.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in k)
                k.hasOwnProperty(C) && j[C] !== k[C] && (T || (T = {}), T[C] = k[C]);
            } else
              T || (s || (s = []), s.push(y, T)), T = k;
          else if (y === pp) {
            var P = k ? k[Ah] : void 0, V = j ? j[Ah] : void 0;
            P != null && V !== P && (s = s || []).push(y, P);
          } else y === Gs ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(y, "" + k) : y === Mh || y === Nu || (Je.hasOwnProperty(y) ? (k != null && (typeof k != "function" && zh(y, k), y === "onScroll" && yn("scroll", e)), !s && j !== k && (s = [])) : (s = s || []).push(y, k));
      }
      return T && (ei(T, h[Ks]), (s = s || []).push(Ks, T)), s;
    }
    function q_(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && g(e, l);
      var s = So(a, i), f = So(a, l);
      switch (B_(e, t, s, f), a) {
        case "input":
          w(e, l);
          break;
        case "textarea":
          mv(e, l);
          break;
        case "select":
          Sc(e, l);
          break;
      }
    }
    function W_(e) {
      {
        var t = e.toLowerCase();
        return ru.hasOwnProperty(t) && ru[t] || null;
      }
    }
    function Q_(e, t, a, i, l, s, f) {
      var h, y;
      switch (h = So(t, a), Uh(t, a), t) {
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
          for (var C = 0; C < cp.length; C++)
            yn(cp[C], e);
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
          hv(e, a), yn("invalid", e);
          break;
      }
      _c(t, a);
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
            typeof V == "string" ? e.textContent !== V && (a[Nu] !== !0 && jh(e.textContent, V, s, f), j = [Gs, V]) : typeof V == "number" && e.textContent !== "" + V && (a[Nu] !== !0 && jh(e.textContent, V, s, f), j = [Gs, "" + V]);
          else if (Je.hasOwnProperty(P))
            V != null && (typeof V != "function" && zh(P, V), P === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var pe = void 0, Fe = an(P);
            if (a[Nu] !== !0) {
              if (!(P === Mh || P === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              P === "value" || P === "checked" || P === "selected")) {
                if (P === pp) {
                  var Le = e.innerHTML, kt = V ? V[Ah] : void 0;
                  if (kt != null) {
                    var gt = E0(e, kt);
                    gt !== Le && vp(P, Le, gt);
                  }
                } else if (P === Ks) {
                  if (y.delete(P), S0) {
                    var A = xy(V);
                    pe = e.getAttribute("style"), A !== pe && vp(P, pe, A);
                  }
                } else if (h)
                  y.delete(P.toLowerCase()), pe = ci(e, P, V), V !== pe && vp(P, pe, V);
                else if (!un(P, Fe, h) && !Xn(P, V, Fe, h)) {
                  var $ = !1;
                  if (Fe !== null)
                    y.delete(Fe.attributeName), pe = el(e, P, V, Fe);
                  else {
                    var U = i;
                    if (U === Za && (U = fd(t)), U === Za)
                      y.delete(P.toLowerCase());
                    else {
                      var Z = W_(P);
                      Z !== null && Z !== P && ($ = !0, y.delete(Z)), y.delete(P);
                    }
                    pe = ci(e, P, V);
                  }
                  var Ee = Q;
                  !Ee && V !== pe && !$ && vp(P, pe, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Nu] !== !0 && g0(y), t) {
        case "input":
          Na(e), F(e, a, !0);
          break;
        case "textarea":
          Na(e), yv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Hh(e);
          break;
      }
      return j;
    }
    function G_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function tg(e, t) {
      {
        if (Va)
          return;
        Va = !0, R("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ng(e, t) {
      {
        if (Va)
          return;
        Va = !0, R('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function rg(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, R("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ag(e, t) {
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
          Ey(e, a);
          return;
        case "select":
          sd(e, a);
          return;
      }
    }
    var hp = function() {
    }, mp = function() {
    };
    {
      var X_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], R0 = [
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
      ], J_ = R0.concat(["button"]), Z_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], T0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      mp = function(e, t) {
        var a = et({}, e || T0), i = {
          tag: t
        };
        return R0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), J_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), X_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
      }, _0 = {};
      hp = function(e, t, a) {
        a = a || T0;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && R("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ew(e, l) ? null : i, f = s ? null : tw(e, a), h = s || f;
        if (h) {
          var y = h.tag, C = !!s + "|" + e + "|" + y;
          if (!_0[C]) {
            _0[C] = !0;
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
    var Ph = "suppressHydrationWarning", Bh = "$", Vh = "/$", yp = "$?", gp = "$!", nw = "style", ig = null, og = null;
    function rw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case as: {
          t = i === Yi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Cc(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Cc(f, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = mp(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function aw(e, t, a) {
      {
        var i = e, l = Cc(i.namespace, t), s = mp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function MO(e) {
      return e;
    }
    function iw(e) {
      ig = dr(), og = S_();
      var t = null;
      return bn(!1), t;
    }
    function ow(e) {
      E_(og), bn(ig), ig = null, og = null;
    }
    function lw(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (hp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = mp(f.ancestorInfo, e);
          hp(null, h, y);
        }
        s = f.namespace;
      }
      var C = V_(e, t, a, s);
      return Cp(l, C), vg(C, t), C;
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
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = mp(f.ancestorInfo, t);
          hp(null, h, y);
        }
      }
      return Y_(e, t, a, i);
    }
    function lg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fw(e, t, a, i) {
      {
        var l = a;
        hp(null, e, l.ancestorInfo);
      }
      var s = $_(e, t);
      return Cp(i, s), s;
    }
    function dw() {
      var e = window.event;
      return e === void 0 ? cr : wu(e.type);
    }
    var ug = typeof setTimeout == "function" ? setTimeout : void 0, pw = typeof clearTimeout == "function" ? clearTimeout : void 0, sg = -1, w0 = typeof Promise == "function" ? Promise : void 0, vw = typeof queueMicrotask == "function" ? queueMicrotask : typeof w0 < "u" ? function(e) {
      return w0.resolve(null).then(e).catch(hw);
    } : ug;
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
      q_(e, t, a, i, l), vg(e, l);
    }
    function b0(e) {
      go(e, "");
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
      i == null && a.onclick === null && Hh(a);
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
    function cg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Mn) {
          var s = l.data;
          if (s === Vh)
            if (i === 0) {
              e.removeChild(l), kr(t);
              return;
            } else
              i--;
          else (s === Bh || s === yp || s === gp) && i++;
        }
        a = l;
      } while (a);
      kr(t);
    }
    function ww(e, t) {
      e.nodeType === Mn ? cg(e.parentNode, t) : e.nodeType === Xr && cg(e, t), kr(e);
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
      e.style.display = Tc("display", i);
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
    function x0(e) {
      return e.data === yp;
    }
    function fg(e) {
      return e.data === gp;
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
    function $h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Bh || a === gp || a === yp)
            break;
          if (a === Vh)
            return null;
        }
      }
      return e;
    }
    function Sp(e) {
      return $h(e.nextSibling);
    }
    function zw(e) {
      return $h(e.firstChild);
    }
    function Fw(e) {
      return $h(e.firstChild);
    }
    function jw(e) {
      return $h(e.nextSibling);
    }
    function Hw(e, t, a, i, l, s, f) {
      Cp(s, e), vg(e, a);
      var h;
      {
        var y = l;
        h = y.namespace;
      }
      var C = (s.mode & dt) !== Me;
      return Q_(e, t, a, h, i, C, f);
    }
    function Pw(e, t, a, i) {
      return Cp(a, e), a.mode & dt, G_(e, t);
    }
    function Bw(e, t) {
      Cp(t, e);
    }
    function Vw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Vh) {
            if (a === 0)
              return Sp(t);
            a--;
          } else (i === Bh || i === gp || i === yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function k0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Bh || i === gp || i === yp) {
            if (a === 0)
              return t;
            a--;
          } else i === Vh && a++;
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
      jh(t.nodeValue, a, i, l);
    }
    function Ww(e, t, a, i, l, s) {
      if (t[Ph] !== !0) {
        var f = !0;
        jh(i.nodeValue, l, s, f);
      }
    }
    function Qw(e, t) {
      t.nodeType === Xr ? tg(e, t) : t.nodeType === Mn || ng(e, t);
    }
    function Gw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? tg(a, t) : t.nodeType === Mn || ng(a, t));
      }
    }
    function Kw(e, t, a, i, l) {
      (l || t[Ph] !== !0) && (i.nodeType === Xr ? tg(a, i) : i.nodeType === Mn || ng(a, i));
    }
    function Xw(e, t, a) {
      rg(e, t);
    }
    function Jw(e, t) {
      ag(e, t);
    }
    function Zw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && rg(i, t);
      }
    }
    function eb(e, t) {
      {
        var a = e.parentNode;
        a !== null && ag(a, t);
      }
    }
    function tb(e, t, a, i, l, s) {
      (s || t[Ph] !== !0) && rg(a, i);
    }
    function nb(e, t, a, i, l) {
      (l || t[Ph] !== !0) && ag(a, i);
    }
    function rb(e) {
      R("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ab(e) {
      fp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Mf = "__reactFiber$" + Nf, dg = "__reactProps$" + Nf, Ep = "__reactContainer$" + Nf, pg = "__reactEvents$" + Nf, ib = "__reactListeners$" + Nf, ob = "__reactHandles$" + Nf;
    function lb(e) {
      delete e[Mf], delete e[dg], delete e[pg], delete e[ib], delete e[ob];
    }
    function Cp(e, t) {
      t[Mf] = e;
    }
    function Ih(e, t) {
      t[Ep] = e;
    }
    function D0(e) {
      e[Ep] = null;
    }
    function Rp(e) {
      return !!e[Ep];
    }
    function Xs(e) {
      var t = e[Mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ep] || a[Mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = k0(e); l !== null; ) {
              var s = l[Mf];
              if (s)
                return s;
              l = k0(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Mu(e) {
      var t = e[Mf] || e[Ep];
      return t && (t.tag === te || t.tag === Ce || t.tag === De || t.tag === ne) ? t : null;
    }
    function Af(e) {
      if (e.tag === te || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[dg] || null;
    }
    function vg(e, t) {
      e[dg] = t;
    }
    function ub(e) {
      var t = e[pg];
      return t === void 0 && (t = e[pg] = /* @__PURE__ */ new Set()), t;
    }
    var O0 = {}, L0 = S.ReactDebugCurrentFrame;
    function qh(e) {
      if (e) {
        var t = e._owner, a = Ju(e.type, e._source, t ? t.type : null);
        L0.setExtraStackFrame(a);
      } else
        L0.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, l) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              h = C;
            }
            h && !(h instanceof Error) && (qh(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof h), qh(null)), h instanceof Error && !(h.message in O0) && (O0[h.message] = !0, qh(l), R("Failed %s type: %s", a, h.message), qh(null));
          }
      }
    }
    var hg = [], Wh;
    Wh = [];
    var Ml = -1;
    function Au(e) {
      return {
        current: e
      };
    }
    function oa(e, t) {
      if (Ml < 0) {
        R("Unexpected pop.");
        return;
      }
      t !== Wh[Ml] && R("Unexpected Fiber popped."), e.current = hg[Ml], hg[Ml] = null, Wh[Ml] = null, Ml--;
    }
    function la(e, t, a) {
      Ml++, hg[Ml] = e.current, Wh[Ml] = a, e.current = t;
    }
    var mg;
    mg = {};
    var li = {};
    Object.freeze(li);
    var Al = Au(li), Po = Au(!1), yg = li;
    function Uf(e, t, a) {
      return a && Bo(t) ? yg : Al.current;
    }
    function N0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function zf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var h = We(e) || "Unknown";
          Ji(i, s, "context", h);
        }
        return l && N0(e, t, s), s;
      }
    }
    function Qh() {
      return Po.current;
    }
    function Bo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gh(e) {
      oa(Po, e), oa(Al, e);
    }
    function gg(e) {
      oa(Po, e), oa(Al, e);
    }
    function M0(e, t, a) {
      {
        if (Al.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Al, t, e), la(Po, a, e);
      }
    }
    function A0(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = We(e) || "Unknown";
            mg[s] || (mg[s] = !0, R("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var h in f)
          if (!(h in l))
            throw new Error((We(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = We(e) || "Unknown";
          Ji(l, f, "child context", y);
        }
        return et({}, a, f);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return yg = Al.current, la(Al, a, e), la(Po, Po.current, e), !0;
      }
    }
    function U0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = A0(e, t, yg);
          i.__reactInternalMemoizedMergedChildContext = l, oa(Po, e), oa(Al, e), la(Al, l, e), la(Po, a, e);
        } else
          oa(Po, e), la(Po, a, e);
      }
    }
    function sb(e) {
      {
        if (!Yv(e) || e.tag !== ie)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case ie: {
              var a = t.type;
              if (Bo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uu = 0, Xh = 1, Ul = null, Sg = !1, Eg = !1;
    function z0(e) {
      Ul === null ? Ul = [e] : Ul.push(e);
    }
    function cb(e) {
      Sg = !0, z0(e);
    }
    function F0() {
      Sg && zu();
    }
    function zu() {
      if (!Eg && Ul !== null) {
        Eg = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = Ul;
          for (In(aa); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ul = null, Sg = !1;
        } catch (s) {
          throw Ul !== null && (Ul = Ul.slice(e + 1)), bd(Qi, zu), s;
        } finally {
          In(t), Eg = !1;
        }
      }
      return null;
    }
    var Ff = [], jf = 0, Jh = null, Zh = 0, wi = [], bi = 0, Js = null, zl = 1, Fl = "";
    function fb(e) {
      return ec(), (e.flags & gs) !== Ne;
    }
    function db(e) {
      return ec(), Zh;
    }
    function pb() {
      var e = Fl, t = zl, a = t & ~vb(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      ec(), Ff[jf++] = Zh, Ff[jf++] = Jh, Jh = e, Zh = t;
    }
    function j0(e, t, a) {
      ec(), wi[bi++] = zl, wi[bi++] = Fl, wi[bi++] = Js, Js = e;
      var i = zl, l = Fl, s = em(i) - 1, f = i & ~(1 << s), h = a + 1, y = em(t) + s;
      if (y > 30) {
        var C = s - s % 5, T = (1 << C) - 1, O = (f & T).toString(32), k = f >> C, j = s - C, P = em(t) + j, V = h << j, pe = V | k, Fe = O + l;
        zl = 1 << P | pe, Fl = Fe;
      } else {
        var Le = h << s, kt = Le | f, gt = l;
        zl = 1 << y | kt, Fl = gt;
      }
    }
    function Cg(e) {
      ec();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), j0(e, a, i);
      }
    }
    function em(e) {
      return 32 - $n(e);
    }
    function vb(e) {
      return 1 << em(e) - 1;
    }
    function Rg(e) {
      for (; e === Jh; )
        Jh = Ff[--jf], Ff[jf] = null, Zh = Ff[--jf], Ff[jf] = null;
      for (; e === Js; )
        Js = wi[--bi], wi[bi] = null, Fl = wi[--bi], wi[bi] = null, zl = wi[--bi], wi[bi] = null;
    }
    function hb() {
      return ec(), Js !== null ? {
        id: zl,
        overflow: Fl
      } : null;
    }
    function mb(e, t) {
      ec(), wi[bi++] = zl, wi[bi++] = Fl, wi[bi++] = Js, zl = t.id, Fl = t.overflow, Js = e;
    }
    function ec() {
      Fr() || R("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, xi = null, Zi = !1, tc = !1, Fu = null;
    function yb() {
      Zi && R("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function H0() {
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
    function P0(e, t) {
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
    function B0(e, t) {
      P0(e, t);
      var a = _k();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function Tg(e, t) {
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
            var s = e.type, f = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case te: {
                var y = t.type, C = t.pendingProps, T = (e.mode & dt) !== Me;
                tb(
                  s,
                  f,
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
                  f,
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
                var pe = t.pendingProps;
                eb(P, pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function V0(e, t) {
      t.flags = t.flags & -4097 | An, Tg(e, t);
    }
    function $0(e, t) {
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
          var f = Mw(t);
          if (f !== null) {
            var h = {
              dehydrated: f,
              treeContext: hb(),
              retryLane: ga
            };
            e.memoizedState = h;
            var y = wk(f);
            return y.return = e, e.child = y, zr = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function _g(e) {
      return (e.mode & dt) !== Me && (e.flags & ft) === Ne;
    }
    function wg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function bg(e) {
      if (Zi) {
        var t = xi;
        if (!t) {
          _g(e) && (Tg(zr, e), wg()), V0(zr, e), Zi = !1, zr = e;
          return;
        }
        var a = t;
        if (!$0(e, t)) {
          _g(e) && (Tg(zr, e), wg()), t = Sp(a);
          var i = zr;
          if (!t || !$0(e, t)) {
            V0(zr, e), Zi = !1, zr = e;
            return;
          }
          B0(i, a);
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
              var s = l.stateNode.containerInfo, f = (l.mode & dt) !== Me;
              qw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
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
    function I0(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== ne && t.tag !== De; )
        t = t.return;
      zr = t;
    }
    function tm(e) {
      if (e !== zr)
        return !1;
      if (!Zi)
        return I0(e), Zi = !0, !1;
      if (e.tag !== ne && (e.tag !== te || Yw(e.type) && !lg(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (_g(e))
            Y0(e), wg();
          else
            for (; t; )
              B0(e, t), t = Sp(t);
      }
      return I0(e), e.tag === De ? xi = _b(e) : xi = zr ? Sp(e.stateNode) : null, !0;
    }
    function wb() {
      return Zi && xi !== null;
    }
    function Y0(e) {
      for (var t = xi; t; )
        P0(e, t), t = Sp(t);
    }
    function Hf() {
      zr = null, xi = null, Zi = !1, tc = !1;
    }
    function q0() {
      Fu !== null && (HR(Fu), Fu = null);
    }
    function Fr() {
      return Zi;
    }
    function xg(e) {
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
      }, Tp = [], _p = [], wp = [], bp = [], xp = [], kp = [], rc = /* @__PURE__ */ new Set();
      eo.recordUnsafeLifecycleWarnings = function(e, t) {
        rc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillMount == "function" && _p.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillReceiveProps == "function" && bp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillUpdate == "function" && kp.push(e));
      }, eo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(k) {
          e.add(We(k) || "Component"), rc.add(k.type);
        }), Tp = []);
        var t = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(k) {
          t.add(We(k) || "Component"), rc.add(k.type);
        }), _p = []);
        var a = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(k) {
          a.add(We(k) || "Component"), rc.add(k.type);
        }), wp = []);
        var i = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(k) {
          i.add(We(k) || "Component"), rc.add(k.type);
        }), bp = []);
        var l = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(k) {
          l.add(We(k) || "Component"), rc.add(k.type);
        }), xp = []);
        var s = /* @__PURE__ */ new Set();
        if (kp.length > 0 && (kp.forEach(function(k) {
          s.add(We(k) || "Component"), rc.add(k.type);
        }), kp = []), t.size > 0) {
          var f = nc(t);
          R(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
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
      var nm = /* @__PURE__ */ new Map(), W0 = /* @__PURE__ */ new Set();
      eo.recordLegacyContextWarning = function(e, t) {
        var a = Db(e);
        if (a === null) {
          R("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!W0.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, eo.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(We(s) || "Component"), W0.add(s.type);
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
        Tp = [], _p = [], wp = [], bp = [], xp = [], kp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    var kg, Dg, Og, Lg, Ng, Q0 = function(e, t) {
    };
    kg = !1, Dg = !1, Og = {}, Lg = {}, Ng = {}, Q0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = We(t) || "Component";
        Lg[a] || (Lg[a] = !0, R('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ob(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Dp(e, t, a) {
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
          Og[l] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Og[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var h = s;
            if (h.tag !== ie)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = h.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = f;
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
    function rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function am(e) {
      {
        var t = We(e) || "Component";
        if (Ng[t])
          return;
        Ng[t] = !0, R("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function G0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function K0(e) {
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
      function f(A) {
        return e && A.alternate === null && (A.flags |= An), A;
      }
      function h(A, $, U, Z) {
        if ($ === null || $.tag !== Ce) {
          var Ee = xE(U, A.mode, Z);
          return Ee.return = A, Ee;
        } else {
          var me = l($, U);
          return me.return = A, me;
        }
      }
      function y(A, $, U, Z) {
        var Ee = U.type;
        if (Ee === Wr)
          return T(A, $, U.props.children, Z, U.key);
        if ($ !== null && ($.elementType === Ee || // Keep this check inline so it only runs on the false path:
        tT($, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ee == "object" && Ee !== null && Ee.$$typeof === Ke && G0(Ee) === $.type)) {
          var me = l($, U.props);
          return me.ref = Dp(A, $, U), me.return = A, me._debugSource = U._source, me._debugOwner = U._owner, me;
        }
        var Ie = bE(U, A.mode, Z);
        return Ie.ref = Dp(A, $, U), Ie.return = A, Ie;
      }
      function C(A, $, U, Z) {
        if ($ === null || $.tag !== _e || $.stateNode.containerInfo !== U.containerInfo || $.stateNode.implementation !== U.implementation) {
          var Ee = kE(U, A.mode, Z);
          return Ee.return = A, Ee;
        } else {
          var me = l($, U.children || []);
          return me.return = A, me;
        }
      }
      function T(A, $, U, Z, Ee) {
        if ($ === null || $.tag !== Ve) {
          var me = Qu(U, A.mode, Z, Ee);
          return me.return = A, me;
        } else {
          var Ie = l($, U);
          return Ie.return = A, Ie;
        }
      }
      function O(A, $, U) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
          var Z = xE("" + $, A.mode, U);
          return Z.return = A, Z;
        }
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case lr: {
              var Ee = bE($, A.mode, U);
              return Ee.ref = Dp(A, null, $), Ee.return = A, Ee;
            }
            case ha: {
              var me = kE($, A.mode, U);
              return me.return = A, me;
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
          rm(A, $);
        }
        return typeof $ == "function" && am(A), null;
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
              var me = U._payload, Ie = U._init;
              return k(A, $, Ie(me), Z);
            }
          }
          if (rt(U) || vn(U))
            return Ee !== null ? null : T(A, $, U, Z, null);
          rm(A, U);
        }
        return typeof U == "function" && am(A), null;
      }
      function j(A, $, U, Z, Ee) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var me = A.get(U) || null;
          return h($, me, "" + Z, Ee);
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
          rm($, Z);
        }
        return typeof Z == "function" && am($), null;
      }
      function P(A, $, U) {
        {
          if (typeof A != "object" || A === null)
            return $;
          switch (A.$$typeof) {
            case lr:
            case ha:
              Q0(A, U);
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
              var Ee = A._payload, me = A._init;
              P(me(Ee), $, U);
              break;
          }
        }
        return $;
      }
      function V(A, $, U, Z) {
        for (var Ee = null, me = 0; me < U.length; me++) {
          var Ie = U[me];
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
        if (e && xa.forEach(function(ad) {
          return t(A, ad);
        }), Fr()) {
          var Il = Mt;
          Zs(A, Il);
        }
        return Ze;
      }
      function pe(A, $, U, Z) {
        var Ee = vn(U);
        if (typeof Ee != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (Dg || R("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Dg = !0), U.entries === Ee && (kg || R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), kg = !0);
          var me = Ee.call(U);
          if (me)
            for (var Ie = null, Ze = me.next(); !Ze.done; Ze = me.next()) {
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
            var Il = O(A, ba.value, Z);
            Il !== null && (sa = s(Il, sa, Ir), Mt === null ? Wn = Il : Mt.sibling = Il, Mt = Il);
          }
          if (Fr()) {
            var ad = Ir;
            Zs(A, ad);
          }
          return Wn;
        }
        for (var lv = i(A, Pn); !ba.done; Ir++, ba = Nt.next()) {
          var Go = j(lv, A, Ir, ba.value, Z);
          Go !== null && (e && Go.alternate !== null && lv.delete(Go.key === null ? Ir : Go.key), sa = s(Go, sa, Ir), Mt === null ? Wn = Go : Mt.sibling = Go, Mt = Go);
        }
        if (e && lv.forEach(function(nD) {
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
        var me = xE(U, A.mode, Z);
        return me.return = A, me;
      }
      function Le(A, $, U, Z) {
        for (var Ee = U.key, me = $; me !== null; ) {
          if (me.key === Ee) {
            var Ie = U.type;
            if (Ie === Wr) {
              if (me.tag === Ve) {
                a(A, me.sibling);
                var Ze = l(me, U.props.children);
                return Ze.return = A, Ze._debugSource = U._source, Ze._debugOwner = U._owner, Ze;
              }
            } else if (me.elementType === Ie || // Keep this check inline so it only runs on the false path:
            tT(me, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ke && G0(Ie) === me.type) {
              a(A, me.sibling);
              var en = l(me, U.props);
              return en.ref = Dp(A, me, U), en.return = A, en._debugSource = U._source, en._debugOwner = U._owner, en;
            }
            a(A, me);
            break;
          } else
            t(A, me);
          me = me.sibling;
        }
        if (U.type === Wr) {
          var Nt = Qu(U.props.children, A.mode, Z, U.key);
          return Nt.return = A, Nt;
        } else {
          var Wn = bE(U, A.mode, Z);
          return Wn.ref = Dp(A, $, U), Wn.return = A, Wn;
        }
      }
      function kt(A, $, U, Z) {
        for (var Ee = U.key, me = $; me !== null; ) {
          if (me.key === Ee)
            if (me.tag === _e && me.stateNode.containerInfo === U.containerInfo && me.stateNode.implementation === U.implementation) {
              a(A, me.sibling);
              var Ie = l(me, U.children || []);
              return Ie.return = A, Ie;
            } else {
              a(A, me);
              break;
            }
          else
            t(A, me);
          me = me.sibling;
        }
        var Ze = kE(U, A.mode, Z);
        return Ze.return = A, Ze;
      }
      function gt(A, $, U, Z) {
        var Ee = typeof U == "object" && U !== null && U.type === Wr && U.key === null;
        if (Ee && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case lr:
              return f(Le(A, $, U, Z));
            case ha:
              return f(kt(A, $, U, Z));
            case Ke:
              var me = U._payload, Ie = U._init;
              return gt(A, $, Ie(me), Z);
          }
          if (rt(U))
            return V(A, $, U, Z);
          if (vn(U))
            return pe(A, $, U, Z);
          rm(A, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(Fe(A, $, "" + U, Z)) : (typeof U == "function" && am(A), a(A, $));
      }
      return gt;
    }
    var Pf = K0(!0), X0 = K0(!1);
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
    var Mg = Au(null), Ag;
    Ag = {};
    var im = null, Bf = null, Ug = null, om = !1;
    function lm() {
      im = null, Bf = null, Ug = null, om = !1;
    }
    function J0() {
      om = !0;
    }
    function Z0() {
      om = !1;
    }
    function eC(e, t, a) {
      la(Mg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ag && R("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ag;
    }
    function zg(e, t) {
      var a = Mg.current;
      oa(Mg, t), e._currentValue = a;
    }
    function Fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Rl(i.childLanes, t) ? l !== null && !Rl(l.childLanes, t) && (l.childLanes = at(l.childLanes, t)) : (i.childLanes = at(i.childLanes, t), l !== null && (l.childLanes = at(l.childLanes, t))), i === a)
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
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ie) {
                var h = tr(a), y = jl(Yt, h);
                y.tag = sm;
                var C = i.updateQueue;
                if (C !== null) {
                  var T = C.shared, O = T.pending;
                  O === null ? y.next = y : (y.next = O.next, O.next = y), T.pending = y;
                }
              }
              i.lanes = at(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = at(k.lanes, a)), Fg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === nt)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === pn) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = at(j.lanes, a);
          var P = j.alternate;
          P !== null && (P.lanes = at(P.lanes, a)), Fg(j, a, e), l = i.sibling;
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
    function Vf(e, t) {
      im = e, Bf = null, Ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function rr(e) {
      om && R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (im === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, im.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var ac = null;
    function jg(e) {
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
    function tC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, um(e, i);
    }
    function zb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Fb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, jg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, um(e, i);
    }
    function $a(e, t) {
      return um(e, t);
    }
    var jb = um;
    function um(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (An | zn)) !== Ne && XR(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = at(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (l.flags & (An | zn)) !== Ne && XR(e), i = l, l = l.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var nC = 0, rC = 1, sm = 2, Hg = 3, cm = !1, Pg, fm;
    Pg = !1, fm = null;
    function Bg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function aC(e, t) {
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
    function jl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: nC,
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
      if (fm === l && !Pg && (R("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Pg = !0), zx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, jb(e, a);
      } else
        return Fb(e, l, t, a);
    }
    function dm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if ($d(a)) {
          var s = l.lanes;
          s = lf(s, e.pendingLanes);
          var f = at(s, a);
          l.lanes = f, As(e, f);
        }
      }
    }
    function Vg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, h = a.firstBaseUpdate;
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
              f === null ? s = f = C : (f.next = C, f = C), y = y.next;
            } while (y !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
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
        case rC: {
          var f = a.payload;
          if (typeof f == "function") {
            J0();
            var h = f.call(s, i, l);
            {
              if (e.mode & tt) {
                It(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  It(!1);
                }
              }
              Z0();
            }
            return h;
          }
          return f;
        }
        case Hg:
          e.flags = e.flags & -65537 | ft;
        // Intentional fallthrough
        case nC: {
          var y = a.payload, C;
          if (typeof y == "function") {
            J0(), C = y.call(s, i, l);
            {
              if (e.mode & tt) {
                It(!0);
                try {
                  y.call(s, i, l);
                } finally {
                  It(!1);
                }
              }
              Z0();
            }
          } else
            C = y;
          return C == null ? i : et({}, i, C);
        }
        case sm:
          return cm = !0, i;
      }
      return i;
    }
    function pm(e, t, a, i) {
      var l = e.updateQueue;
      cm = !1, fm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, h = l.shared.pending;
      if (h !== null) {
        l.shared.pending = null;
        var y = h, C = y.next;
        y.next = null, f === null ? s = C : f.next = C, f = y;
        var T = e.alternate;
        if (T !== null) {
          var O = T.updateQueue, k = O.lastBaseUpdate;
          k !== f && (k === null ? O.firstBaseUpdate = C : k.next = C, O.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var j = l.baseState, P = Y, V = null, pe = null, Fe = null, Le = s;
        do {
          var kt = Le.lane, gt = Le.eventTime;
          if (Rl(i, kt)) {
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
            Fe === null ? (pe = Fe = A, V = j) : Fe = Fe.next = A, P = at(P, kt);
          }
          if (Le = Le.next, Le === null) {
            if (h = l.shared.pending, h === null)
              break;
            var Ee = h, me = Ee.next;
            Ee.next = null, Le = me, l.lastBaseUpdate = Ee, l.shared.pending = null;
          }
        } while (!0);
        Fe === null && (V = j), l.baseState = V, l.firstBaseUpdate = pe, l.lastBaseUpdate = Fe;
        var Ie = l.shared.interleaved;
        if (Ie !== null) {
          var Ze = Ie;
          do
            P = at(P, Ze.lane), Ze = Ze.next;
          while (Ze !== Ie);
        } else s === null && (l.shared.lanes = Y);
        nv(P), e.lanes = P, e.memoizedState = j;
      }
      fm = null;
    }
    function Pb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function iC() {
      cm = !1;
    }
    function vm() {
      return cm;
    }
    function oC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, Pb(f, a));
        }
    }
    var Op = {}, Hu = Au(Op), Lp = Au(Op), hm = Au(Op);
    function mm(e) {
      if (e === Op)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function lC() {
      var e = mm(hm.current);
      return e;
    }
    function $g(e, t) {
      la(hm, t, e), la(Lp, e, e), la(Hu, Op, e);
      var a = rw(t);
      oa(Hu, e), la(Hu, a, e);
    }
    function $f(e) {
      oa(Hu, e), oa(Lp, e), oa(hm, e);
    }
    function Ig() {
      var e = mm(Hu.current);
      return e;
    }
    function uC(e) {
      mm(hm.current);
      var t = mm(Hu.current), a = aw(t, e.type);
      t !== a && (la(Lp, e, e), la(Hu, a, e));
    }
    function Yg(e) {
      Lp.current === e && (oa(Hu, e), oa(Lp, e));
    }
    var Bb = 0, sC = 1, cC = 1, Np = 2, to = Au(Bb);
    function qg(e, t) {
      return (e & t) !== 0;
    }
    function If(e) {
      return e & sC;
    }
    function Wg(e, t) {
      return e & sC | t;
    }
    function Vb(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      la(to, t, e);
    }
    function Yf(e) {
      oa(to, e);
    }
    function $b(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ym(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || x0(i) || fg(i))
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
    ), Vo = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Qg = [];
    function Gg() {
      for (var e = 0; e < Qg.length; e++) {
        var t = Qg[e];
        t._workInProgressVersionPrimary = null;
      }
      Qg.length = 0;
    }
    function Ib(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Se = S.ReactCurrentDispatcher, Mp = S.ReactCurrentBatchConfig, Kg, qf;
    Kg = /* @__PURE__ */ new Set();
    var ic = Y, Zt = null, hr = null, mr = null, gm = !1, Ap = !1, Up = 0, Yb = 0, qb = 25, q = null, ki = null, Bu = -1, Xg = !1;
    function Vt() {
      {
        var e = q;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function se() {
      {
        var e = q;
        ki !== null && (Bu++, ki[Bu] !== e && Wb(e));
      }
    }
    function Wf(e) {
      e != null && !rt(e) && R("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", q, typeof e);
    }
    function Wb(e) {
      {
        var t = We(Zt);
        if (!Kg.has(t) && (Kg.add(t), ki !== null)) {
          for (var a = "", i = 30, l = 0; l <= Bu; l++) {
            for (var s = ki[l], f = l === Bu ? e : s, h = l + 1 + ". " + s; h.length < i; )
              h += " ";
            h += f + `
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
    function Jg(e, t) {
      if (Xg)
        return !1;
      if (t === null)
        return R("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", q), !1;
      e.length !== t.length && R(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, l, s) {
      ic = s, Zt = t, ki = e !== null ? e._debugHookTypes : null, Bu = -1, Xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? Se.current = NC : ki !== null ? Se.current = LC : Se.current = OC;
      var f = a(i, l);
      if (Ap) {
        var h = 0;
        do {
          if (Ap = !1, Up = 0, h >= qb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, Xg = !1, hr = null, mr = null, t.updateQueue = null, Bu = -1, Se.current = MC, f = a(i, l);
        } while (Ap);
      }
      Se.current = Lm, t._debugHookTypes = ki;
      var y = hr !== null && hr.next !== null;
      if (ic = Y, Zt = null, hr = null, mr = null, q = null, ki = null, Bu = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== Me && R("Internal React error: Expected static flag was missing. Please notify the React team."), gm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Gf() {
      var e = Up !== 0;
      return Up = 0, e;
    }
    function fC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Jt) !== Me ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function dC() {
      if (Se.current = Lm, gm) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gm = !1;
      }
      ic = Y, Zt = null, hr = null, mr = null, ki = null, Bu = -1, q = null, wC = !1, Ap = !1, Up = 0;
    }
    function $o() {
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
    function pC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function eS(e, t, a) {
      var i = $o(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = Xb.bind(null, Zt, s);
      return [i.memoizedState, f];
    }
    function tS(e, t, a) {
      var i = Di(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, h = l.pending;
      if (h !== null) {
        if (f !== null) {
          var y = f.next, C = h.next;
          f.next = C, h.next = y;
        }
        s.baseQueue !== f && R("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = h, l.pending = null;
      }
      if (f !== null) {
        var T = f.next, O = s.baseState, k = null, j = null, P = null, V = T;
        do {
          var pe = V.lane;
          if (Rl(ic, pe)) {
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
              lane: pe,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            P === null ? (j = P = Fe, k = O) : P = P.next = Fe, Zt.lanes = at(Zt.lanes, pe), nv(pe);
          }
          V = V.next;
        } while (V !== null && V !== T);
        P === null ? k = O : P.next = j, he(O, i.memoizedState) || Ip(), i.memoizedState = O, i.baseState = k, i.baseQueue = P, l.lastRenderedState = O;
      }
      var gt = l.interleaved;
      if (gt !== null) {
        var A = gt;
        do {
          var $ = A.lane;
          Zt.lanes = at(Zt.lanes, $), nv($), A = A.next;
        } while (A !== gt);
      } else f === null && (l.lanes = Y);
      var U = l.dispatch;
      return [i.memoizedState, U];
    }
    function nS(e, t, a) {
      var i = Di(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, h = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var y = f.next, C = y;
        do {
          var T = C.action;
          h = e(h, T), C = C.next;
        } while (C !== y);
        he(h, i.memoizedState) || Ip(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), l.lastRenderedState = h;
      }
      return [h, s];
    }
    function AO(e, t, a) {
    }
    function UO(e, t, a) {
    }
    function rS(e, t, a) {
      var i = Zt, l = $o(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), qf || s !== a() && (R("The result of getServerSnapshot should be cached to avoid an infinite loop"), qf = !0);
      } else {
        if (s = t(), !qf) {
          var h = t();
          he(s, h) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
        }
        var y = Km();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(y, ic) || vC(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, Tm(mC.bind(null, i, C, e), [e]), i.flags |= ma, zp(pr | jr, hC.bind(null, i, C, s, t), void 0, null), s;
    }
    function Sm(e, t, a) {
      var i = Zt, l = Di(), s = t();
      if (!qf) {
        var f = t();
        he(s, f) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
      }
      var h = l.memoizedState, y = !he(h, s);
      y && (l.memoizedState = s, Ip());
      var C = l.queue;
      if (jp(mC.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ma, zp(pr | jr, hC.bind(null, i, C, s, t), void 0, null);
        var T = Km();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(T, ic) || vC(i, t, s);
      }
      return s;
    }
    function vC(e, t, a) {
      e.flags |= Ac;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Zt.updateQueue;
      if (l === null)
        l = pC(), Zt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function hC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, yC(t) && gC(e);
    }
    function mC(e, t, a) {
      var i = function() {
        yC(t) && gC(e);
      };
      return a(i);
    }
    function yC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !he(a, i);
      } catch {
        return !0;
      }
    }
    function gC(e) {
      var t = $a(e, Be);
      t !== null && Er(t, e, Be, Yt);
    }
    function Em(e) {
      var t = $o();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jb.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function aS(e) {
      return tS(Zg);
    }
    function iS(e) {
      return nS(Zg);
    }
    function zp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = pC(), Zt.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var h = f.next;
          f.next = l, l.next = h, s.lastEffect = l;
        }
      }
      return l;
    }
    function oS(e) {
      var t = $o();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Cm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Fp(e, t, a, i) {
      var l = $o(), s = i === void 0 ? null : i;
      Zt.flags |= e, l.memoizedState = zp(pr | t, a, void 0, s);
    }
    function Rm(e, t, a, i) {
      var l = Di(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var h = hr.memoizedState;
        if (f = h.destroy, s !== null) {
          var y = h.deps;
          if (Jg(s, y)) {
            l.memoizedState = zp(t, a, f, s);
            return;
          }
        }
      }
      Zt.flags |= e, l.memoizedState = zp(pr | t, a, f, s);
    }
    function Tm(e, t) {
      return (Zt.mode & Jt) !== Me ? Fp(Ro | ma | Td, jr, e, t) : Fp(ma | Td, jr, e, t);
    }
    function jp(e, t) {
      return Rm(ma, jr, e, t);
    }
    function lS(e, t) {
      return Fp(ht, Vo, e, t);
    }
    function _m(e, t) {
      return Rm(ht, Vo, e, t);
    }
    function uS(e, t) {
      var a = ht;
      return a |= Co, (Zt.mode & Jt) !== Me && (a |= Mr), Fp(a, vr, e, t);
    }
    function wm(e, t) {
      return Rm(ht, vr, e, t);
    }
    function SC(e, t) {
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
    function sS(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = ht;
      return l |= Co, (Zt.mode & Jt) !== Me && (l |= Mr), Fp(l, vr, SC.bind(null, t, e), i);
    }
    function bm(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Rm(ht, vr, SC.bind(null, t, e), i);
    }
    function Qb(e, t) {
    }
    var xm = Qb;
    function cS(e, t) {
      var a = $o(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function km(e, t) {
      var a = Di(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Jg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function fS(e, t) {
      var a = $o(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Dm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Jg(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function dS(e) {
      var t = $o();
      return t.memoizedState = e, e;
    }
    function EC(e) {
      var t = Di(), a = hr, i = a.memoizedState;
      return RC(t, i, e);
    }
    function CC(e) {
      var t = Di();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return RC(t, a, e);
    }
    function RC(e, t, a) {
      var i = !Vd(ic);
      if (i) {
        if (!he(a, t)) {
          var l = Id();
          Zt.lanes = at(Zt.lanes, l), nv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function Gb(e, t, a) {
      var i = Sa();
      In(Us(i, ja)), e(!0);
      var l = Mp.transition;
      Mp.transition = {};
      var s = Mp.transition;
      Mp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Mp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function pS() {
      var e = Em(!1), t = e[0], a = e[1], i = Gb.bind(null, a), l = $o();
      return l.memoizedState = i, [t, i];
    }
    function TC() {
      var e = aS(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function _C() {
      var e = iS(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var wC = !1;
    function Kb() {
      return wC;
    }
    function vS() {
      var e = $o(), t = Km(), a = t.identifierPrefix, i;
      if (Fr()) {
        var l = pb();
        i = ":" + a + "R" + l;
        var s = Up++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Yb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Om() {
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
      if (bC(e))
        xC(t, l);
      else {
        var s = tC(e, t, l, i);
        if (s !== null) {
          var f = wa();
          Er(s, e, i, f), kC(s, t, i);
        }
      }
      DC(e, i);
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
      if (bC(e))
        xC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var h;
            h = Se.current, Se.current = no;
            try {
              var y = t.lastRenderedState, C = f(y, a);
              if (l.hasEagerState = !0, l.eagerState = C, he(C, y)) {
                zb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Se.current = h;
            }
          }
        }
        var T = tC(e, t, l, i);
        if (T !== null) {
          var O = wa();
          Er(T, e, i, O), kC(T, t, i);
        }
      }
      DC(e, i);
    }
    function bC(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function xC(e, t) {
      Ap = gm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function kC(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = lf(i, e.pendingLanes);
        var l = at(i, a);
        t.lanes = l, As(e, l);
      }
    }
    function DC(e, t, a) {
      _s(e, t);
    }
    var Lm = {
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
    }, OC = null, LC = null, NC = null, MC = null, Io = null, no = null, Nm = null;
    {
      var hS = function() {
        R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        R("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      OC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Vt(), Wf(t), cS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Vt(), Wf(t), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Vt(), Wf(a), sS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Vt(), Wf(t), lS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Vt(), Wf(t), uS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Vt(), Wf(t);
          var a = Se.current;
          Se.current = Io;
          try {
            return fS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Vt();
          var i = Se.current;
          Se.current = Io;
          try {
            return eS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Vt(), oS(e);
        },
        useState: function(e) {
          q = "useState", Vt();
          var t = Se.current;
          Se.current = Io;
          try {
            return Em(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Vt(), dS(e);
        },
        useTransition: function() {
          return q = "useTransition", Vt(), pS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Vt(), rS(e, t, a);
        },
        useId: function() {
          return q = "useId", Vt(), vS();
        },
        unstable_isNewReconciler: we
      }, LC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), cS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), sS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), lS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), uS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Se.current;
          Se.current = Io;
          try {
            return fS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Se.current;
          Se.current = Io;
          try {
            return eS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), oS(e);
        },
        useState: function(e) {
          q = "useState", se();
          var t = Se.current;
          Se.current = Io;
          try {
            return Em(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), dS(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), pS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), rS(e, t, a);
        },
        useId: function() {
          return q = "useId", se(), vS();
        },
        unstable_isNewReconciler: we
      }, NC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), km(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), wm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Se.current;
          Se.current = no;
          try {
            return Dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Se.current;
          Se.current = no;
          try {
            return tS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), Cm();
        },
        useState: function(e) {
          q = "useState", se();
          var t = Se.current;
          Se.current = no;
          try {
            return aS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), xm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), EC(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), TC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), Sm(e, t);
        },
        useId: function() {
          return q = "useId", se(), Om();
        },
        unstable_isNewReconciler: we
      }, MC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), km(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), wm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Se.current;
          Se.current = Nm;
          try {
            return Dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Se.current;
          Se.current = Nm;
          try {
            return nS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), Cm();
        },
        useState: function(e) {
          q = "useState", se();
          var t = Se.current;
          Se.current = Nm;
          try {
            return iS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), xm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), CC(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), _C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), Sm(e, t);
        },
        useId: function() {
          return q = "useId", se(), Om();
        },
        unstable_isNewReconciler: we
      }, Io = {
        readContext: function(e) {
          return hS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), Vt(), cS(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), Vt(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), Vt(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), Vt(), sS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), Vt(), lS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), Vt(), uS(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), Vt();
          var a = Se.current;
          Se.current = Io;
          try {
            return fS(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), Vt();
          var i = Se.current;
          Se.current = Io;
          try {
            return eS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), Vt(), oS(e);
        },
        useState: function(e) {
          q = "useState", Xe(), Vt();
          var t = Se.current;
          Se.current = Io;
          try {
            return Em(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), Vt(), dS(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), Vt(), pS();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), Vt(), rS(e, t, a);
        },
        useId: function() {
          return q = "useId", Xe(), Vt(), vS();
        },
        unstable_isNewReconciler: we
      }, no = {
        readContext: function(e) {
          return hS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), se(), km(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), se(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), se(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), se(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), se(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), se(), wm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), se();
          var a = Se.current;
          Se.current = no;
          try {
            return Dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), se();
          var i = Se.current;
          Se.current = no;
          try {
            return tS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), se(), Cm();
        },
        useState: function(e) {
          q = "useState", Xe(), se();
          var t = Se.current;
          Se.current = no;
          try {
            return aS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), se(), xm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), se(), EC(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), se(), TC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), se(), Sm(e, t);
        },
        useId: function() {
          return q = "useId", Xe(), se(), Om();
        },
        unstable_isNewReconciler: we
      }, Nm = {
        readContext: function(e) {
          return hS(), rr(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Xe(), se(), km(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Xe(), se(), rr(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Xe(), se(), jp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Xe(), se(), bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Xe(), se(), _m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Xe(), se(), wm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Xe(), se();
          var a = Se.current;
          Se.current = no;
          try {
            return Dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Xe(), se();
          var i = Se.current;
          Se.current = no;
          try {
            return nS(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Xe(), se(), Cm();
        },
        useState: function(e) {
          q = "useState", Xe(), se();
          var t = Se.current;
          Se.current = no;
          try {
            return iS(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Xe(), se(), xm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Xe(), se(), CC(e);
        },
        useTransition: function() {
          return q = "useTransition", Xe(), se(), _C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Xe(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Xe(), se(), Sm(e, t);
        },
        useId: function() {
          return q = "useId", Xe(), se(), Om();
        },
        unstable_isNewReconciler: we
      };
    }
    var Vu = p.unstable_now, AC = 0, Mm = -1, Hp = -1, Am = -1, mS = !1, Um = !1;
    function UC() {
      return mS;
    }
    function Zb() {
      Um = !0;
    }
    function e1() {
      mS = !1, Um = !1;
    }
    function t1() {
      mS = Um, Um = !1;
    }
    function zC() {
      return AC;
    }
    function FC() {
      AC = Vu();
    }
    function yS(e) {
      Hp = Vu(), e.actualStartTime < 0 && (e.actualStartTime = Vu());
    }
    function jC(e) {
      Hp = -1;
    }
    function zm(e, t) {
      if (Hp >= 0) {
        var a = Vu() - Hp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Hp = -1;
      }
    }
    function Yo(e) {
      if (Mm >= 0) {
        var t = Vu() - Mm;
        Mm = -1;
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
    function gS(e) {
      if (Am >= 0) {
        var t = Vu() - Am;
        Am = -1;
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
    function qo() {
      Mm = Vu();
    }
    function SS() {
      Am = Vu();
    }
    function ES(e) {
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
    var CS = {}, RS, TS, _S, wS, bS, HC, Fm, xS, kS, DS, Pp;
    {
      RS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), Pp = /* @__PURE__ */ new Set();
      var PC = /* @__PURE__ */ new Set();
      Fm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          PC.has(a) || (PC.add(a), R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, HC = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          bS.has(a) || (bS.add(a), R("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(CS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(CS);
    }
    function OS(e, t, a, i) {
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
        HC(t, s);
      }
      var f = s == null ? l : et({}, l, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var h = e.updateQueue;
        h.baseState = f;
      }
    }
    var LS = {
      isMounted: _d,
      enqueueSetState: function(e, t, a) {
        var i = fu(e), l = wa(), s = qu(i), f = jl(l, s);
        f.payload = t, a != null && (Fm(a, "setState"), f.callback = a);
        var h = ju(i, f, s);
        h !== null && (Er(h, i, s, l), dm(h, i, s)), _s(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fu(e), l = wa(), s = qu(i), f = jl(l, s);
        f.tag = rC, f.payload = t, a != null && (Fm(a, "replaceState"), f.callback = a);
        var h = ju(i, f, s);
        h !== null && (Er(h, i, s, l), dm(h, i, s)), _s(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fu(e), i = wa(), l = qu(a), s = jl(i, l);
        s.tag = sm, t != null && (Fm(t, "forceUpdate"), s.callback = t);
        var f = ju(a, s, l);
        f !== null && (Er(f, a, l, i), dm(f, a, l)), jd(a, l);
      }
    };
    function BC(e, t, a, i, l, s, f) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & tt) {
            It(!0);
            try {
              y = h.shouldComponentUpdate(i, s, f);
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
        s || (t.prototype && typeof t.prototype.render == "function" ? R("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : R("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && R("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && R("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && R("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Pp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Me && (Pp.add(t), R(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Pp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Me && (Pp.add(t), R(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && R("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !kS.has(t) && (kS.add(t), R("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && R("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && R("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && R("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && R("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && R("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && R("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && R("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && R("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !_S.has(t) && (_S.add(t), R("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && R("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && R("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && R("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var h = i.state;
        h && (typeof h != "object" || rt(h)) && R("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && R("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function VC(e, t) {
      t.updater = LS, e.stateNode = t, ys(t, e), t._reactInternalInstance = CS;
    }
    function $C(e, t, a) {
      var i = !1, l = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === b && f._context === void 0
        );
        if (!h && !DS.has(t)) {
          DS.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", R("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = rr(f);
      else {
        l = Uf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? zf(e, l) : li;
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
      VC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var k = bt(t) || "Component";
          TS.has(k) || (TS.add(k), R("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, T.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var j = null, P = null, V = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? P = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (P = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), j !== null || P !== null || V !== null) {
            var pe = bt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            wS.has(pe) || (wS.add(pe), R(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, Fe, j !== null ? `
  ` + j : "", P !== null ? `
  ` + P : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && N0(e, l, s), T;
    }
    function r1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (R("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(e) || "Component"), LS.enqueueReplaceState(t, t.state, null));
    }
    function IC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = We(e) || "Component";
          RS.has(s) || (RS.add(s), R("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        LS.enqueueReplaceState(t, t.state, null);
      }
    }
    function NS(e, t, a, i) {
      n1(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Bg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = rr(s);
      else {
        var f = Uf(e, t, !0);
        l.context = zf(e, f);
      }
      {
        if (l.state === a) {
          var h = bt(t) || "Component";
          xS.has(h) || (xS.add(h), R("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & tt && eo.recordLegacyContextWarning(e, l), eo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (OS(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (r1(e, l), pm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = ht;
        C |= Co, (e.mode & Jt) !== Me && (C |= Mr), e.flags |= C;
      }
    }
    function a1(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, h = t.contextType, y = li;
      if (typeof h == "object" && h !== null)
        y = rr(h);
      else {
        var C = Uf(e, t, !0);
        y = zf(e, C);
      }
      var T = t.getDerivedStateFromProps, O = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !O && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== y) && IC(e, l, a, y), iC();
      var k = e.memoizedState, j = l.state = k;
      if (pm(e, a, l, i), j = e.memoizedState, s === a && k === j && !Qh() && !vm()) {
        if (typeof l.componentDidMount == "function") {
          var P = ht;
          P |= Co, (e.mode & Jt) !== Me && (P |= Mr), e.flags |= P;
        }
        return !1;
      }
      typeof T == "function" && (OS(e, t, T, a), j = e.memoizedState);
      var V = vm() || BC(e, t, s, a, k, j, y);
      if (V) {
        if (!O && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var pe = ht;
          pe |= Co, (e.mode & Jt) !== Me && (pe |= Mr), e.flags |= pe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Fe = ht;
          Fe |= Co, (e.mode & Jt) !== Me && (Fe |= Mr), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return l.props = a, l.state = j, l.context = y, V;
    }
    function i1(e, t, a, i, l) {
      var s = t.stateNode;
      aC(e, t);
      var f = t.memoizedProps, h = t.type === t.elementType ? f : ro(t.type, f);
      s.props = h;
      var y = t.pendingProps, C = s.context, T = a.contextType, O = li;
      if (typeof T == "object" && T !== null)
        O = rr(T);
      else {
        var k = Uf(t, a, !0);
        O = zf(t, k);
      }
      var j = a.getDerivedStateFromProps, P = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !P && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || C !== O) && IC(t, s, i, O), iC();
      var V = t.memoizedState, pe = s.state = V;
      if (pm(t, i, s, l), pe = t.memoizedState, f === y && V === pe && !Qh() && !vm())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof j == "function" && (OS(t, a, j, i), pe = t.memoizedState);
      var Fe = vm() || BC(t, a, h, i, V, pe, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      de;
      return Fe ? (!P && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, O)), typeof s.componentDidUpdate == "function" && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = O, Fe;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: wt(t),
        digest: null
      };
    }
    function MS(e, t, a) {
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
    function AS(e, t) {
      try {
        var a = o1(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
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
` + f + `

` + ("" + C);
        console.error(O);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var l1 = typeof WeakMap == "function" ? WeakMap : Map;
    function YC(e, t, a) {
      var i = jl(Yt, a);
      i.tag = Hg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Zx(l), AS(e, t);
      }, i;
    }
    function US(e, t, a) {
      var i = jl(Yt, a);
      i.tag = Hg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          nT(e), AS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        nT(e), AS(e, t), typeof l != "function" && Xx(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (ra(e.lanes, Be) || R("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(e) || "Unknown"));
      }), i;
    }
    function qC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new l1(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = ek.bind(null, e, t, a);
        br && rv(e, a), t.then(s, s);
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
      if ((e.mode & dt) === Me && (a === ue || a === Pe || a === Ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function WC(e) {
      var t = e;
      do {
        if (t.tag === De && $b(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function QC(e, t, a, i, l) {
      if ((e.mode & dt) === Me) {
        if (e === t)
          e.flags |= za;
        else {
          if (e.flags |= ft, a.flags |= ni, a.flags &= -52805, a.tag === ie) {
            var s = a.alternate;
            if (s === null)
              a.tag = At;
            else {
              var f = jl(Yt, Be);
              f.tag = sm, ju(a, f, Be);
            }
          }
          a.lanes = at(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= za, e.lanes = l, e;
    }
    function c1(e, t, a, i, l) {
      if (a.flags |= pl, br && rv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        s1(a), Fr() && a.mode & dt && H0();
        var f = WC(t);
        if (f !== null) {
          f.flags &= -257, QC(f, t, a, e, l), f.mode & dt && qC(e, s, l), u1(f, e, s);
          return;
        } else {
          if (!Bd(l)) {
            qC(e, s, l), vE();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Fr() && a.mode & dt) {
        H0();
        var y = WC(t);
        if (y !== null) {
          (y.flags & za) === Ne && (y.flags |= Sn), QC(y, t, a, e, l), xg(oc(i, a));
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
            var k = YC(C, T, O);
            Vg(C, k);
            return;
          }
          case ie:
            var j = i, P = C.type, V = C.stateNode;
            if ((C.flags & ft) === Ne && (typeof P.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !WR(V))) {
              C.flags |= za;
              var pe = tr(l);
              C.lanes = at(C.lanes, pe);
              var Fe = US(C, j, pe);
              Vg(C, Fe);
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
    var Bp = S.ReactCurrentOwner, ao = !1, zS, Vp, FS, jS, HS, lc, PS, jm, $p;
    zS = {}, Vp = {}, FS = {}, jS = {}, HS = {}, lc = !1, PS = {}, jm = {}, $p = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = X0(t, null, a, i) : t.child = Pf(t, e.child, a, i);
    }
    function d1(e, t, a, i) {
      t.child = Pf(t, e.child, null, i), t.child = Pf(t, null, a, i);
    }
    function GC(e, t, a, i, l) {
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
      var f = a.render, h = t.ref, y, C;
      Vf(t, l), Fa(t);
      {
        if (Bp.current = t, Oa(!0), y = Qf(e, t, f, i, h, l), C = Gf(), t.mode & tt) {
          It(!0);
          try {
            y = Qf(e, t, f, i, h, l), C = Gf();
          } finally {
            It(!1);
          }
        }
        Oa(!1);
      }
      return bo(), e !== null && !ao ? (fC(e, t, l), Hl(e, t, l)) : (Fr() && C && Cg(t), t.flags |= Wi, Ta(e, t, y, l), t.child);
    }
    function KC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (yk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = rd(s), t.tag = Ye, t.type = f, $S(t, s), XC(e, t, f, i, l);
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
            $p[y] || (R("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", y), $p[y] = !0);
          }
        }
        var C = wE(a.type, null, i, t, t.mode, l);
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
      var k = e.child, j = GS(e, l);
      if (!j) {
        var P = k.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Ue, V(P, i) && e.ref === t.ref)
          return Hl(e, t, l);
      }
      t.flags |= Wi;
      var pe = dc(k, i);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function XC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var f = s, h = f._payload, y = f._init;
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
          if (ao = !1, t.pendingProps = i = T, GS(e, l))
            (e.flags & ni) !== Ne && (ao = !0);
          else return t.lanes = e.lanes, Hl(e, t, l);
      }
      return BS(e, t, a, i, l);
    }
    function JC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || L)
        if ((t.mode & dt) === Me) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Xm(t, a);
        } else if (ra(a, ga)) {
          var O = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var k = s !== null ? s.baseLanes : a;
          Xm(t, k);
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
          return t.memoizedState = T, t.updateQueue = null, Xm(t, y), null;
        }
      else {
        var j;
        s !== null ? (j = at(s.baseLanes, a), t.memoizedState = null) : j = a, Xm(t, j);
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
    function ZC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Un, t.flags |= Ss);
    }
    function BS(e, t, a, i, l) {
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
      var f;
      {
        var h = Uf(t, a, !0);
        f = zf(t, h);
      }
      var y, C;
      Vf(t, l), Fa(t);
      {
        if (Bp.current = t, Oa(!0), y = Qf(e, t, a, i, f, l), C = Gf(), t.mode & tt) {
          It(!0);
          try {
            y = Qf(e, t, a, i, f, l), C = Gf();
          } finally {
            It(!1);
          }
        }
        Oa(!1);
      }
      return bo(), e !== null && !ao ? (fC(e, t, l), Hl(e, t, l)) : (Fr() && C && Cg(t), t.flags |= Wi, Ta(e, t, y, l), t.child);
    }
    function eR(e, t, a, i, l) {
      {
        switch (Nk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, h = new f(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= za;
            var C = new Error("Simulated error coming from DevTools"), T = tr(l);
            t.lanes = at(t.lanes, T);
            var O = US(t, oc(C, t), T);
            Vg(t, O);
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
      Bo(a) ? (j = !0, Kh(t)) : j = !1, Vf(t, l);
      var P = t.stateNode, V;
      P === null ? (Pm(e, t), $C(t, a, i), NS(t, a, i, l), V = !0) : e === null ? V = a1(t, a, i, l) : V = i1(e, t, a, i, l);
      var pe = VS(e, t, a, V, j, l);
      {
        var Fe = t.stateNode;
        V && Fe.props !== i && (lc || R("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(t) || "a component"), lc = !0);
      }
      return pe;
    }
    function VS(e, t, a, i, l, s) {
      ZC(e, t);
      var f = (t.flags & ft) !== Ne;
      if (!i && !f)
        return l && U0(t, a, !1), Hl(e, t, s);
      var h = t.stateNode;
      Bp.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, jC();
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
        bo();
      }
      return t.flags |= Wi, e !== null && f ? d1(e, t, y, s) : Ta(e, t, y, s), t.memoizedState = h.state, l && U0(t, a, !0), t.child;
    }
    function tR(e) {
      var t = e.stateNode;
      t.pendingContext ? M0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && M0(e, t.context, !1), $g(e, t.containerInfo);
    }
    function m1(e, t, a) {
      if (tR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      aC(e, t), pm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var h = f.element;
      if (l.isDehydrated) {
        var y = {
          element: h,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Sn) {
          var T = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return nR(e, t, h, a, T);
        } else if (h !== s) {
          var O = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return nR(e, t, h, a, O);
        } else {
          Sb(t);
          var k = X0(t, null, h, a);
          t.child = k;
          for (var j = k; j; )
            j.flags = j.flags & -3 | zn, j = j.sibling;
        }
      } else {
        if (Hf(), h === s)
          return Hl(e, t, a);
        Ta(e, t, h, a);
      }
      return t.child;
    }
    function nR(e, t, a, i, l) {
      return Hf(), xg(l), t.flags |= Sn, Ta(e, t, a, i), t.child;
    }
    function y1(e, t, a) {
      uC(t), e === null && bg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, h = lg(i, l);
      return h ? f = null : s !== null && lg(i, s) && (t.flags |= Xt), ZC(e, t), Ta(e, t, f, a), t.child;
    }
    function g1(e, t) {
      return e === null && bg(t), null;
    }
    function S1(e, t, a, i) {
      Pm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, h = s._init, y = h(f);
      t.type = y;
      var C = t.tag = gk(y), T = ro(y, l), O;
      switch (C) {
        case ue:
          return $S(t, y), t.type = y = rd(y), O = BS(null, t, y, T, i), O;
        case ie:
          return t.type = y = SE(y), O = eR(null, t, y, T, i), O;
        case Pe:
          return t.type = y = EE(y), O = GC(null, t, y, T, i), O;
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
          return O = KC(
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
      Pm(e, t), t.tag = ie;
      var s;
      return Bo(a) ? (s = !0, Kh(t)) : s = !1, Vf(t, l), $C(t, a, i), NS(t, a, i, l), VS(null, t, a, !0, s, l);
    }
    function C1(e, t, a, i) {
      Pm(e, t);
      var l = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = zf(t, f);
      }
      Vf(t, i);
      var h, y;
      Fa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = bt(a) || "Unknown";
          zS[C] || (R("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), zS[C] = !0);
        }
        t.mode & tt && eo.recordLegacyContextWarning(t, null), Oa(!0), Bp.current = t, h = Qf(null, t, a, l, s, i), y = Gf(), Oa(!1);
      }
      if (bo(), t.flags |= Wi, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var T = bt(a) || "Unknown";
        Vp[T] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Vp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var O = bt(a) || "Unknown";
          Vp[O] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), Vp[O] = !0);
        }
        t.tag = ie, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Bo(a) ? (k = !0, Kh(t)) : k = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Bg(t), VC(t, h), NS(t, a, l, i), VS(null, t, a, !0, k, i);
      } else {
        if (t.tag = ue, t.mode & tt) {
          It(!0);
          try {
            h = Qf(null, t, a, l, s, i), y = Gf();
          } finally {
            It(!1);
          }
        }
        return Fr() && y && Cg(t), Ta(null, t, h, i), $S(t, a), t.child;
      }
    }
    function $S(e, t) {
      {
        if (t && t.childContextTypes && R("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), HS[l] || (HS[l] = !0, R("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = bt(t) || "Unknown";
          $p[f] || (R("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), $p[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = bt(t) || "Unknown";
          jS[h] || (R("%s: Function components do not support getDerivedStateFromProps.", h), jS[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = bt(t) || "Unknown";
          FS[y] || (R("%s: Function components do not support contextType.", y), FS[y] = !0);
        }
      }
    }
    var IS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jn
    };
    function YS(e) {
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
      return qg(e, Np);
    }
    function _1(e, t) {
      return Ms(e.childLanes, t);
    }
    function rR(e, t, a) {
      var i = t.pendingProps;
      Mk(t) && (t.flags |= ft);
      var l = to.current, s = !1, f = (t.flags & ft) !== Ne;
      if (f || T1(l, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l = Vb(l, cC)), l = If(l), Pu(t, l), e === null) {
        bg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return D1(t, y);
        }
        var C = i.children, T = i.fallback;
        if (s) {
          var O = w1(t, C, T, a), k = t.child;
          return k.memoizedState = YS(a), t.memoizedState = IS, O;
        } else
          return qS(t, C);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var P = j.dehydrated;
          if (P !== null)
            return O1(e, t, f, i, P, j, a);
        }
        if (s) {
          var V = i.fallback, pe = i.children, Fe = x1(e, t, pe, V, a), Le = t.child, kt = e.child.memoizedState;
          return Le.memoizedState = kt === null ? YS(a) : R1(kt, a), Le.childLanes = _1(e, a), t.memoizedState = IS, Fe;
        } else {
          var gt = i.children, A = b1(e, t, gt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function qS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = WS(l, i);
      return s.return = e, e.child = s, s;
    }
    function w1(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, h, y;
      return (l & dt) === Me && s !== null ? (h = s, h.childLanes = Y, h.pendingProps = f, e.mode & Ct && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = Qu(a, l, i, null)) : (h = WS(f, l), y = Qu(a, l, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function WS(e, t, a) {
      return aT(e, t, Y, null);
    }
    function aR(e, t) {
      return dc(e, t);
    }
    function b1(e, t, a, i) {
      var l = e.child, s = l.sibling, f = aR(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Jr) : h.push(s);
      }
      return t.child = f, f;
    }
    function x1(e, t, a, i, l) {
      var s = t.mode, f = e.child, h = f.sibling, y = {
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
        t.child !== f
      ) {
        var T = t.child;
        C = T, C.childLanes = Y, C.pendingProps = y, t.mode & Ct && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = aR(f, y), C.subtreeFlags = f.subtreeFlags & Fn;
      var O;
      return h !== null ? O = dc(h, i) : (O = Qu(i, s, l, null), O.flags |= An), O.return = t, C.return = t, C.sibling = O, t.child = C, O;
    }
    function Hm(e, t, a, i) {
      i !== null && xg(i), Pf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = qS(t, s);
      return f.flags |= An, t.memoizedState = null, f;
    }
    function k1(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, h = WS(f, s), y = Qu(i, s, l, null);
      return y.flags |= An, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & dt) !== Me && Pf(t, e.child, null, l), y;
    }
    function D1(e, t, a) {
      return (e.mode & dt) === Me ? (R("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : fg(t) ? e.lanes = er : e.lanes = ga, null;
    }
    function O1(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Sn) {
          t.flags &= -257;
          var A = MS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var $ = i.children, U = i.fallback, Z = k1(e, t, $, U, f), Ee = t.child;
          return Ee.memoizedState = YS(f), t.memoizedState = IS, Z;
        }
      else {
        if (yb(), (t.mode & dt) === Me)
          return Hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (fg(l)) {
          var h, y, C;
          {
            var T = Aw(l);
            h = T.digest, y = T.message, C = T.stack;
          }
          var O;
          y ? O = new Error(y) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = MS(O, h, C);
          return Hm(e, t, f, k);
        }
        var j = ra(f, e.childLanes);
        if (ao || j) {
          var P = Km();
          if (P !== null) {
            var V = cf(P, f);
            if (V !== jn && V !== s.retryLane) {
              s.retryLane = V;
              var pe = Yt;
              $a(e, V), Er(P, e, V, pe);
            }
          }
          vE();
          var Fe = MS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, f, Fe);
        } else if (x0(l)) {
          t.flags |= ft, t.child = e.child;
          var Le = tk.bind(null, e);
          return Uw(l, Le), null;
        } else {
          Eb(t, l, s.treeContext);
          var kt = i.children, gt = qS(t, kt);
          return gt.flags |= zn, gt;
        }
      }
    }
    function iR(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), Fg(e.return, t, a);
    }
    function L1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var l = i.memoizedState;
          l !== null && iR(i, a, e);
        } else if (i.tag === qt)
          iR(i, a, e);
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
        i !== null && ym(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function M1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !PS[e])
        if (PS[e] = !0, typeof e == "string")
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
      e !== void 0 && !jm[e] && (e !== "collapsed" && e !== "hidden" ? (jm[e] = !0, R('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (jm[e] = !0, R('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oR(e, t) {
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
            if (!oR(e[a], a))
              return;
        } else {
          var i = vn(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!oR(s.value, f))
                  return;
                f++;
              }
          } else
            R('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function QS(e, t, a, i, l) {
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
    function lR(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      M1(l), A1(s, l), U1(f, l), Ta(e, t, f, a);
      var h = to.current, y = qg(h, Np);
      if (y)
        h = Wg(h, Np), t.flags |= ft;
      else {
        var C = e !== null && (e.flags & ft) !== Ne;
        C && L1(t, t.child, a), h = If(h);
      }
      if (Pu(t, h), (t.mode & dt) === Me)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = N1(t.child), O;
            T === null ? (O = t.child, t.child = null) : (O = T.sibling, T.sibling = null), QS(
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
              if (P !== null && ym(P) === null) {
                t.child = j;
                break;
              }
              var V = j.sibling;
              j.sibling = k, k = j, j = V;
            }
            QS(
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
            QS(
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
      $g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Pf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var uR = !1;
    function F1(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, h = s.value;
      {
        "value" in s || uR || (uR = !0, R("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && Ji(y, s, "prop", "Context.Provider");
      }
      if (eC(t, l, h), f !== null) {
        var C = f.value;
        if (he(C, h)) {
          if (f.children === s.children && !Qh())
            return Hl(e, t, a);
        } else
          Mb(t, l, a);
      }
      var T = s.children;
      return Ta(e, t, T, a), t.child;
    }
    var sR = !1;
    function j1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (sR || (sR = !0, R("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && R("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var f = rr(i);
      Fa(t);
      var h;
      return Bp.current = t, Oa(!0), h = s(f), Oa(!1), bo(), t.flags |= Wi, Ta(e, t, h, a), t.child;
    }
    function Ip() {
      ao = !0;
    }
    function Pm(e, t) {
      (t.mode & dt) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= An);
    }
    function Hl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), jC(), nv(t.lanes), ra(a, t.childLanes) ? (Lb(e, t), t.child) : null;
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
    function GS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function P1(e, t, a) {
      switch (t.tag) {
        case ne:
          tR(t), t.stateNode, Hf();
          break;
        case te:
          uC(t);
          break;
        case ie: {
          var i = t.type;
          Bo(i) && Kh(t);
          break;
        }
        case _e:
          $g(t, t.stateNode.containerInfo);
          break;
        case nt: {
          var l = t.memoizedProps.value, s = t.type._context;
          eC(t, s, l);
          break;
        }
        case Ot:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= ht);
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
              return Pu(t, If(to.current)), t.flags |= ft, null;
            var C = t.child, T = C.childLanes;
            if (ra(a, T))
              return rR(e, t, a);
            Pu(t, If(to.current));
            var O = Hl(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Pu(t, If(to.current));
          break;
        }
        case qt: {
          var k = (e.flags & ft) !== Ne, j = ra(a, t.childLanes);
          if (k) {
            if (j)
              return lR(e, t, a);
            t.flags |= ft;
          }
          var P = t.memoizedState;
          if (P !== null && (P.rendering = null, P.tail = null, P.lastEffect = null), Pu(t, to.current), j)
            break;
          return null;
        }
        case He:
        case Ht:
          return t.lanes = Y, JC(e, t, a);
      }
      return Hl(e, t, a);
    }
    function cR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return H1(e, t, wE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ao = !0;
        else {
          var s = GS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ne)
            return ao = !1, P1(e, t, a);
          (e.flags & ni) !== Ne ? ao = !0 : ao = !1;
        }
      } else if (ao = !1, Fr() && fb(t)) {
        var f = t.index, h = db();
        j0(t, h, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Oe:
          return C1(e, t, t.type, a);
        case Cn: {
          var y = t.elementType;
          return S1(e, t, y, a);
        }
        case ue: {
          var C = t.type, T = t.pendingProps, O = t.elementType === C ? T : ro(C, T);
          return BS(e, t, C, O, a);
        }
        case ie: {
          var k = t.type, j = t.pendingProps, P = t.elementType === k ? j : ro(k, j);
          return eR(e, t, k, P, a);
        }
        case ne:
          return m1(e, t, a);
        case te:
          return y1(e, t, a);
        case Ce:
          return g1(e, t);
        case De:
          return rR(e, t, a);
        case _e:
          return z1(e, t, a);
        case Pe: {
          var V = t.type, pe = t.pendingProps, Fe = t.elementType === V ? pe : ro(V, pe);
          return GC(e, t, V, Fe, a);
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
          return gt = ro(Le.type, gt), KC(e, t, Le, gt, a);
        }
        case Ye:
          return XC(e, t, t.type, t.pendingProps, a);
        case At: {
          var $ = t.type, U = t.pendingProps, Z = t.elementType === $ ? U : ro($, U);
          return E1(e, t, $, Z, a);
        }
        case qt:
          return lR(e, t, a);
        case St:
          break;
        case He:
          return JC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= ht;
    }
    function fR(e) {
      e.flags |= Un, e.flags |= Ss;
    }
    var dR, KS, pR, vR;
    dR = function(e, t, a, i) {
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
    }, KS = function(e, t) {
    }, pR = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, h = Ig(), y = cw(f, a, s, i, l, h);
        t.updateQueue = y, y && Kf(t);
      }
    }, vR = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function Yp(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Ne;
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
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = at(a, at(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
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
        return Y0(t), Hf(), t.flags |= Sn | pl | za, !1;
      var i = tm(t);
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
          if (Hf(), (t.flags & ft) === Ne && (t.memoizedState = null), t.flags |= ht, Hr(t), (t.mode & Ct) !== Me) {
            var f = a !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return q0(), !0;
    }
    function hR(e, t, a) {
      var i = t.pendingProps;
      switch (Rg(t), t.tag) {
        case Oe:
        case Cn:
        case Ye:
        case ue:
        case Pe:
        case Ve:
        case jt:
        case Ot:
        case Tt:
        case pt:
          return Hr(t), null;
        case ie: {
          var l = t.type;
          return Bo(l) && Gh(t), Hr(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if ($f(t), gg(t), Gg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = tm(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Sn) !== Ne) && (t.flags |= Ua, q0());
            }
          }
          return KS(e, t), Hr(t), null;
        }
        case te: {
          Yg(t);
          var y = lC(), C = t.type;
          if (e !== null && t.stateNode != null)
            pR(e, t, C, i, y), e.ref !== t.ref && fR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var T = Ig(), O = tm(t);
            if (O)
              Cb(t, y, T) && Kf(t);
            else {
              var k = lw(C, i, y, T, t);
              dR(k, t, !1, !1), t.stateNode = k, sw(k, C, i, y) && Kf(t);
            }
            t.ref !== null && fR(t);
          }
          return Hr(t), null;
        }
        case Ce: {
          var j = i;
          if (e && t.stateNode != null) {
            var P = e.memoizedProps;
            vR(e, t, P, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = lC(), pe = Ig(), Fe = tm(t);
            Fe ? Rb(t) && Kf(t) : t.stateNode = fw(j, V, pe, t);
          }
          return Hr(t), null;
        }
        case De: {
          Yf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = B1(e, t, Le);
            if (!kt)
              return t.flags & za ? t : null;
          }
          if ((t.flags & ft) !== Ne)
            return t.lanes = a, (t.mode & Ct) !== Me && ES(t), t;
          var gt = Le !== null, A = e !== null && e.memoizedState !== null;
          if (gt !== A && gt) {
            var $ = t.child;
            if ($.flags |= Si, (t.mode & dt) !== Me) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              U || qg(to.current, cC) ? Vx() : vE();
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
          return $f(t), KS(e, t), e === null && ab(t.stateNode.containerInfo), Hr(t), null;
        case nt:
          var me = t.type._context;
          return zg(me, t), Hr(t), null;
        case At: {
          var Ie = t.type;
          return Bo(Ie) && Gh(t), Hr(t), null;
        }
        case qt: {
          Yf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Hr(t), null;
          var en = (t.flags & ft) !== Ne, Nt = Ze.rendering;
          if (Nt === null)
            if (en)
              Yp(Ze, !1);
            else {
              var Wn = Ix() && (e === null || (e.flags & ft) === Ne);
              if (!Wn)
                for (var Mt = t.child; Mt !== null; ) {
                  var Pn = ym(Mt);
                  if (Pn !== null) {
                    en = !0, t.flags |= ft, Yp(Ze, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= ht), t.subtreeFlags = Ne, Nb(t, a), Pu(t, Wg(to.current, Np)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              Ze.tail !== null && _n() > zR() && (t.flags |= ft, en = !0, Yp(Ze, !1), t.lanes = Zv);
            }
          else {
            if (!en) {
              var Ir = ym(Nt);
              if (Ir !== null) {
                t.flags |= ft, en = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= ht), Yp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Nt.alternate && !Fr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - Ze.renderingStartTime > zR() && a !== ga && (t.flags |= ft, en = !0, Yp(Ze, !1), t.lanes = Zv);
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
            return en ? ca = Wg(ca, Np) : ca = If(ca), Pu(t, ca), xa;
          }
          return Hr(t), null;
        }
        case St:
          break;
        case He:
        case Ht: {
          pE(t);
          var Il = t.memoizedState, ad = Il !== null;
          if (e !== null) {
            var lv = e.memoizedState, Go = lv !== null;
            Go !== ad && (t.flags |= Si);
          }
          return !ad || (t.mode & dt) === Me ? Hr(t) : ra(Qo, ga) && (Hr(t), t.subtreeFlags & (An | ht) && (t.flags |= Si)), null;
        }
        case yt:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function V1(e, t, a) {
      switch (Rg(t), t.tag) {
        case ie: {
          var i = t.type;
          Bo(i) && Gh(t);
          var l = t.flags;
          return l & za ? (t.flags = l & -65537 | ft, (t.mode & Ct) !== Me && ES(t), t) : null;
        }
        case ne: {
          t.stateNode, $f(t), gg(t), Gg();
          var s = t.flags;
          return (s & za) !== Ne && (s & ft) === Ne ? (t.flags = s & -65537 | ft, t) : null;
        }
        case te:
          return Yg(t), null;
        case De: {
          Yf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var h = t.flags;
          return h & za ? (t.flags = h & -65537 | ft, (t.mode & Ct) !== Me && ES(t), t) : null;
        }
        case qt:
          return Yf(t), null;
        case _e:
          return $f(t), null;
        case nt:
          var y = t.type._context;
          return zg(y, t), null;
        case He:
        case Ht:
          return pE(t), null;
        case yt:
          return null;
        default:
          return null;
      }
    }
    function mR(e, t, a) {
      switch (Rg(t), t.tag) {
        case ie: {
          var i = t.type.childContextTypes;
          i != null && Gh(t);
          break;
        }
        case ne: {
          t.stateNode, $f(t), gg(t), Gg();
          break;
        }
        case te: {
          Yg(t);
          break;
        }
        case _e:
          $f(t);
          break;
        case De:
          Yf(t);
          break;
        case qt:
          Yf(t);
          break;
        case nt:
          var l = t.type._context;
          zg(l, t);
          break;
        case He:
        case Ht:
          pE(t);
          break;
      }
    }
    var yR = null;
    yR = /* @__PURE__ */ new Set();
    var Bm = !1, Pr = !1, $1 = typeof WeakSet == "function" ? WeakSet : Set, xe = null, Xf = null, Jf = null;
    function I1(e) {
      Aa(null, function() {
        throw e;
      }), Rd();
    }
    var Y1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ct)
        try {
          qo(), t.componentWillUnmount();
        } finally {
          Yo(e);
        }
      else
        t.componentWillUnmount();
    };
    function gR(e, t) {
      try {
        $u(vr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function XS(e, t, a) {
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
    function SR(e, t) {
      try {
        CR(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ge && st && e.mode & Ct)
              try {
                qo(), i = a(null);
              } finally {
                Yo(e);
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
    function Vm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var ER = !1;
    function W1(e, t) {
      iw(e.containerInfo), xe = t, Q1();
      var a = ER;
      return ER = !1, a;
    }
    function Q1() {
      for (; xe !== null; ) {
        var e = xe, t = e.child;
        (e.subtreeFlags & To) !== Ne && t !== null ? (t.return = e, xe = t) : G1();
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
          case ue:
          case Pe:
          case Ye:
            break;
          case ie: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && R("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(e) || "instance"), s.state !== e.memoizedState && R("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ro(e.type, i), l);
              {
                var h = yR;
                f === void 0 && !h.has(e.type) && (h.add(e.type), R("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
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
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && ((e & jr) !== Ia ? xo(t) : (e & vr) !== Ia && Ad(t), (e & Vo) !== Ia && av(!0), Vm(t, a, h), (e & Vo) !== Ia && av(!1), (e & jr) !== Ia ? zc() : (e & vr) !== Ia && hu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function $u(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ia ? Xv(t) : (e & vr) !== Ia && Jv(t);
            var f = s.create;
            (e & Vo) !== Ia && av(!0), s.destroy = f(), (e & Vo) !== Ia && av(!1), (e & jr) !== Ia ? Gi() : (e & vr) !== Ia && Fc();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & vr) !== Ne ? y = "useLayoutEffect" : (s.tag & Vo) !== Ne ? y = "useInsertionEffect" : y = "useEffect";
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
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = zC(), h = t.alternate === null ? "mount" : "update";
            UC() && (h = "nested-update"), typeof s == "function" && s(l, h, a, f);
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
      if ((a.flags & _o) !== Ne)
        switch (a.tag) {
          case ue:
          case Pe:
          case Ye: {
            if (!Pr)
              if (a.mode & Ct)
                try {
                  qo(), $u(vr | pr, a);
                } finally {
                  Yo(a);
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
                    qo(), l.componentDidMount();
                  } finally {
                    Yo(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ro(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !lc && (l.props !== a.memoizedProps && R("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), l.state !== a.memoizedState && R("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Ct)
                  try {
                    qo(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yo(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !lc && (l.props !== a.memoizedProps && R("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), l.state !== a.memoizedState && R("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), oC(a, h, l));
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
              oC(a, y, C);
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
              var j = a.memoizedProps, P = j.onCommit, V = j.onRender, pe = a.stateNode.effectDuration, Fe = zC(), Le = t === null ? "mount" : "update";
              UC() && (Le = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof P == "function" && P(a.memoizedProps.id, Le, pe, Fe), Gx(a);
                var kt = a.return;
                e: for (; kt !== null; ) {
                  switch (kt.tag) {
                    case ne:
                      var gt = kt.stateNode;
                      gt.effectDuration += pe;
                      break e;
                    case Ot:
                      var A = kt.stateNode;
                      A.effectDuration += pe;
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
      Pr || a.flags & Un && CR(a);
    }
    function Z1(e) {
      switch (e.tag) {
        case ue:
        case Pe:
        case Ye: {
          if (e.mode & Ct)
            try {
              qo(), gR(e, e.return);
            } finally {
              Yo(e);
            }
          else
            gR(e, e.return);
          break;
        }
        case ie: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && q1(e, e.return, t), SR(e, e.return);
          break;
        }
        case te: {
          SR(e, e.return);
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
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xw(s) : Dw(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
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
    function CR(e) {
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
              qo(), l = t(i);
            } finally {
              Yo(e);
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
    function RR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, RR(t));
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
        if (TR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function TR(e) {
      return e.tag === te || e.tag === ne || e.tag === _e;
    }
    function _R(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || TR(t.return))
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
          t.flags & Xt && (b0(a), t.flags &= -33);
          var i = _R(e);
          ZS(e, i, a);
          break;
        }
        case ne:
        case _e: {
          var l = t.stateNode.containerInfo, s = _R(e);
          JS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function JS(e, t, a) {
      var i = e.tag, l = i === te || i === Ce;
      if (l) {
        var s = e.stateNode;
        t ? Rw(a, s, t) : Ew(a, s);
      } else if (i !== _e) {
        var f = e.child;
        if (f !== null) {
          JS(f, t, a);
          for (var h = f.sibling; h !== null; )
            JS(h, t, a), h = h.sibling;
        }
      }
    }
    function ZS(e, t, a) {
      var i = e.tag, l = i === te || i === Ce;
      if (l) {
        var s = e.stateNode;
        t ? Cw(a, s, t) : Sw(a, s);
      } else if (i !== _e) {
        var f = e.child;
        if (f !== null) {
          ZS(f, t, a);
          for (var h = f.sibling; h !== null; )
            ZS(h, t, a), h = h.sibling;
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
        wR(e, t, a), Br = null, oo = !1;
      }
      tx(a);
    }
    function Iu(e, t, a) {
      for (var i = a.child; i !== null; )
        wR(e, t, i), i = i.sibling;
    }
    function wR(e, t, a) {
      switch (vu(a), a.tag) {
        case te:
          Pr || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ce: {
          {
            var i = Br, l = oo;
            Br = null, Iu(e, t, a), Br = i, oo = l, Br !== null && (oo ? _w(Br, a.stateNode) : Tw(Br, a.stateNode));
          }
          return;
        }
        case pn: {
          Br !== null && (oo ? ww(Br, a.stateNode) : cg(Br, a.stateNode));
          return;
        }
        case _e: {
          {
            var s = Br, f = oo;
            Br = a.stateNode.containerInfo, oo = !0, Iu(e, t, a), Br = s, oo = f;
          }
          return;
        }
        case ue:
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
                  k !== void 0 && ((j & Vo) !== Ia ? Vm(a, t, k) : (j & vr) !== Ia && (Ad(a), a.mode & Ct ? (qo(), Vm(a, t, k), Yo(a)) : Vm(a, t, k), hu())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Iu(e, t, a);
          return;
        }
        case ie: {
          if (!Pr) {
            Zf(a, t);
            var P = a.stateNode;
            typeof P.componentWillUnmount == "function" && XS(a, t, P);
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
    function bR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $1()), t.forEach(function(i) {
          var l = nk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), br)
              if (Xf !== null && Jf !== null)
                rv(Jf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function lx(e, t, a) {
      Xf = a, Jf = e, Qt(t), xR(t, e), Qt(t), Xf = null, Jf = null;
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
      var f = Ja();
      if (t.subtreeFlags & du)
        for (var h = t.child; h !== null; )
          Qt(h), xR(h, e), h = h.sibling;
      Qt(f);
    }
    function xR(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case ue:
        case Pe:
        case pt:
        case Ye: {
          if (lo(t, e), Wo(e), l & ht) {
            try {
              io(Vo | pr, e, e.return), $u(Vo | pr, e);
            } catch (Ie) {
              dn(e, e.return, Ie);
            }
            if (e.mode & Ct) {
              try {
                qo(), io(vr | pr, e, e.return);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
              Yo(e);
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
          lo(t, e), Wo(e), l & Un && i !== null && Zf(i, i.return);
          return;
        }
        case te: {
          lo(t, e), Wo(e), l & Un && i !== null && Zf(i, i.return);
          {
            if (e.flags & Xt) {
              var s = e.stateNode;
              try {
                b0(s);
              } catch (Ie) {
                dn(e, e.return, Ie);
              }
            }
            if (l & ht) {
              var f = e.stateNode;
              if (f != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    yw(f, T, C, y, h, e);
                  } catch (Ie) {
                    dn(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (lo(t, e), Wo(e), l & ht) {
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
          if (lo(t, e), Wo(e), l & ht && i !== null) {
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
          lo(t, e), Wo(e);
          return;
        }
        case De: {
          lo(t, e), Wo(e);
          var V = e.child;
          if (V.flags & Si) {
            var pe = V.stateNode, Fe = V.memoizedState, Le = Fe !== null;
            if (pe.isHidden = Le, Le) {
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
            bR(e);
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
          if (Wo(e), l & Si) {
            var $ = e.stateNode, U = e.memoizedState, Z = U !== null, Ee = e;
            if ($.isHidden = Z, Z && !gt && (Ee.mode & dt) !== Me) {
              xe = Ee;
              for (var me = Ee.child; me !== null; )
                xe = me, sx(me), me = me.sibling;
            }
            ex(Ee, Z);
          }
          return;
        }
        case qt: {
          lo(t, e), Wo(e), l & ht && bR(e);
          return;
        }
        case St:
          return;
        default: {
          lo(t, e), Wo(e);
          return;
        }
      }
    }
    function Wo(e) {
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
      Xf = a, Jf = t, xe = e, kR(e, t, a), Xf = null, Jf = null;
    }
    function kR(e, t, a) {
      for (var i = (e.mode & dt) !== Me; xe !== null; ) {
        var l = xe, s = l.child;
        if (l.tag === He && i) {
          var f = l.memoizedState !== null, h = f || Bm;
          if (h) {
            eE(e, t, a);
            continue;
          } else {
            var y = l.alternate, C = y !== null && y.memoizedState !== null, T = C || Pr, O = Bm, k = Pr;
            Bm = h, Pr = T, Pr && !k && (xe = l, cx(l));
            for (var j = s; j !== null; )
              xe = j, kR(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            xe = l, Bm = O, Pr = k, eE(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & _o) !== Ne && s !== null ? (s.return = l, xe = s) : eE(e, t, a);
      }
    }
    function eE(e, t, a) {
      for (; xe !== null; ) {
        var i = xe;
        if ((i.flags & _o) !== Ne) {
          var l = i.alternate;
          Qt(i);
          try {
            J1(t, l, i, a);
          } catch (f) {
            dn(i, i.return, f);
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
          case ue:
          case Pe:
          case pt:
          case Ye: {
            if (t.mode & Ct)
              try {
                qo(), io(vr, t, t.return);
              } finally {
                Yo(t);
              }
            else
              io(vr, t, t.return);
            break;
          }
          case ie: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && XS(t, t.return, i);
            break;
          }
          case te: {
            Zf(t, t.return);
            break;
          }
          case He: {
            var l = t.memoizedState !== null;
            if (l) {
              DR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, xe = a) : DR(e);
      }
    }
    function DR(e) {
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
            OR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, xe = a) : OR(e);
      }
    }
    function OR(e) {
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
          } catch (f) {
            dn(l, l.return, f);
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
        case ue:
        case Pe:
        case Ye: {
          if (t.mode & Ct) {
            SS();
            try {
              $u(jr | pr, t);
            } finally {
              gS(t);
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
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var h = f.sibling;
                    f.sibling = null, f = h;
                  } while (f !== null);
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
        case ue:
        case Pe:
        case Ye: {
          e.mode & Ct ? (SS(), io(jr | pr, e, e.return), gS(e)) : io(jr | pr, e, e.return);
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
        if (RR(t), t === e) {
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
        case ue:
        case Pe:
        case Ye: {
          e.mode & Ct ? (SS(), io(jr, e, t), gS(e)) : io(jr, e, t);
          break;
        }
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case ue:
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
        case ue:
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
        case ue:
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
          typeof t.componentWillUnmount == "function" && XS(e, e.return, t);
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case ue:
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
      var qp = Symbol.for;
      qp("selector.component"), qp("selector.has_pseudo_class"), qp("selector.role"), qp("selector.test_id"), qp("selector.text");
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
    function LR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && kx.current !== null && R("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ox = Math.ceil, tE = S.ReactCurrentDispatcher, nE = S.ReactCurrentOwner, Vr = S.ReactCurrentBatchConfig, uo = S.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), NR = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Oi = (
      /*                */
      4
    ), Pl = 0, Wp = 1, uc = 2, $m = 3, Qp = 4, MR = 5, rE = 6, xt = yr, _a = null, kn = null, gr = Y, Qo = Y, aE = Au(Y), Sr = Pl, Gp = null, Im = Y, Kp = Y, Ym = Y, Xp = null, Ya = null, iE = 0, AR = 500, UR = 1 / 0, Lx = 500, Bl = null;
    function Jp() {
      UR = _n() + Lx;
    }
    function zR() {
      return UR;
    }
    var qm = !1, oE = null, ed = null, sc = !1, Yu = null, Zp = Y, lE = [], uE = null, Nx = 50, ev = 0, sE = null, cE = !1, Wm = !1, Mx = 50, td = 0, Qm = null, tv = Yt, Gm = Y, FR = !1;
    function Km() {
      return _a;
    }
    function wa() {
      return (xt & ($r | Oi)) !== yr ? _n() : (tv !== Yt || (tv = _n()), tv);
    }
    function qu(e) {
      var t = e.mode;
      if ((t & dt) === Me)
        return Be;
      if ((xt & $r) !== yr && gr !== Y)
        return tr(gr);
      var a = kb() !== xb;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Gm === jn && (Gm = Id()), Gm;
      }
      var l = Sa();
      if (l !== jn)
        return l;
      var s = dw();
      return s;
    }
    function Ax(e) {
      var t = e.mode;
      return (t & dt) === Me ? Be : ih();
    }
    function Er(e, t, a, i) {
      ak(), FR && R("useInsertionEffect must not schedule updates."), cE && (Wm = !0), Cu(e, a, i), (xt & $r) !== Y && e === _a ? lk(t) : (br && lh(e, t, a), uk(t), e === _a && ((xt & $r) === yr && (Kp = at(Kp, a)), Sr === Qp && Wu(e, gr)), qa(e, i), a === Be && xt === yr && (t.mode & dt) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !uo.isBatchingLegacy && (Jp(), F0()));
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
      nh(e, t);
      var i = na(e, e === _a ? gr : Y);
      if (i === Y) {
        a !== null && ZR(a), e.callbackNode = null, e.callbackPriority = jn;
        return;
      }
      var l = Cl(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(uo.current !== null && a !== yE)) {
        a == null && s !== Be && R("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ZR(a);
      var f;
      if (l === Be)
        e.tag === Uu ? (uo.isBatchingLegacy !== null && (uo.didScheduleLegacyUpdate = !0), cb(PR.bind(null, e))) : z0(PR.bind(null, e)), uo.current !== null ? uo.current.push(zu) : vw(function() {
          (xt & ($r | Oi)) === yr && zu();
        }), f = null;
      else {
        var h;
        switch (sh(i)) {
          case aa:
            h = Qi;
            break;
          case ja:
            h = Es;
            break;
          case cr:
            h = hl;
            break;
          case df:
            h = pu;
            break;
          default:
            h = hl;
            break;
        }
        f = gE(h, jR.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function jR(e, t) {
      if (e1(), tv = Yt, Gm = Y, (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $l();
      if (i && e.callbackNode !== a)
        return null;
      var l = na(e, e === _a ? gr : Y);
      if (l === Y)
        return null;
      var s = !Ns(e, l) && !ah(e, l) && !t, f = s ? qx(e, l) : Jm(e, l);
      if (f !== Pl) {
        if (f === uc) {
          var h = rf(e);
          h !== Y && (l = h, f = fE(e, h));
        }
        if (f === Wp) {
          var y = Gp;
          throw cc(e, Y), Wu(e, l), qa(e, _n()), y;
        }
        if (f === rE)
          Wu(e, l);
        else {
          var C = !Ns(e, l), T = e.current.alternate;
          if (C && !jx(T)) {
            if (f = Jm(e, l), f === uc) {
              var O = rf(e);
              O !== Y && (l = O, f = fE(e, O));
            }
            if (f === Wp) {
              var k = Gp;
              throw cc(e, Y), Wu(e, l), qa(e, _n()), k;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, Fx(e, f, l);
        }
      }
      return qa(e, _n()), e.callbackNode === a ? jR.bind(null, e) : null;
    }
    function fE(e, t) {
      var a = Xp;
      if (Tl(e)) {
        var i = cc(e, t);
        i.flags |= Sn, rb(e.containerInfo);
      }
      var l = Jm(e, t);
      if (l !== uc) {
        var s = Ya;
        Ya = a, s !== null && HR(s);
      }
      return l;
    }
    function HR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Fx(e, t, a) {
      switch (t) {
        case Pl:
        case Wp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case uc: {
          fc(e, Ya, Bl);
          break;
        }
        case $m: {
          if (Wu(e, a), af(a) && // do not delay if we're inside an act() scope
          !eT()) {
            var i = iE + AR - _n();
            if (i > 10) {
              var l = na(e, Y);
              if (l !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Rl(s, a)) {
                wa(), sf(e, s);
                break;
              }
              e.timeoutHandle = ug(fc.bind(null, e, Ya, Bl), i);
              break;
            }
          }
          fc(e, Ya, Bl);
          break;
        }
        case Qp: {
          if (Wu(e, a), My(a))
            break;
          if (!eT()) {
            var f = Pd(e, a), h = f, y = _n() - h, C = rk(y) - y;
            if (C > 10) {
              e.timeoutHandle = ug(fc.bind(null, e, Ya, Bl), C);
              break;
            }
          }
          fc(e, Ya, Bl);
          break;
        }
        case MR: {
          fc(e, Ya, Bl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function jx(e) {
      for (var t = e; ; ) {
        if (t.flags & Ac) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, h = s.value;
                try {
                  if (!he(f(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Ac && y !== null) {
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
      t = Ms(t, Ym), t = Ms(t, Kp), qd(e, t);
    }
    function PR(e) {
      if (t1(), (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      $l();
      var t = na(e, Y);
      if (!ra(t, Be))
        return qa(e, _n()), null;
      var a = Jm(e, t);
      if (e.tag !== Uu && a === uc) {
        var i = rf(e);
        i !== Y && (t = i, a = fE(e, i));
      }
      if (a === Wp) {
        var l = Gp;
        throw cc(e, Y), Wu(e, t), qa(e, _n()), l;
      }
      if (a === rE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, fc(e, Ya, Bl), qa(e, _n()), null;
    }
    function Hx(e, t) {
      t !== Y && (As(e, at(t, Be)), qa(e, _n()), (xt & ($r | Oi)) === yr && (Jp(), zu()));
    }
    function dE(e, t) {
      var a = xt;
      xt |= NR;
      try {
        return e(t);
      } finally {
        xt = a, xt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !uo.isBatchingLegacy && (Jp(), F0());
      }
    }
    function Px(e, t, a, i, l) {
      var s = Sa(), f = Vr.transition;
      try {
        return Vr.transition = null, In(aa), e(t, a, i, l);
      } finally {
        In(s), Vr.transition = f, xt === yr && Jp();
      }
    }
    function Vl(e) {
      Yu !== null && Yu.tag === Uu && (xt & ($r | Oi)) === yr && $l();
      var t = xt;
      xt |= NR;
      var a = Vr.transition, i = Sa();
      try {
        return Vr.transition = null, In(aa), e ? e() : void 0;
      } finally {
        In(i), Vr.transition = a, xt = t, (xt & ($r | Oi)) === yr && zu();
      }
    }
    function BR() {
      return (xt & ($r | Oi)) !== yr;
    }
    function Xm(e, t) {
      la(aE, Qo, e), Qo = at(Qo, t);
    }
    function pE(e) {
      Qo = aE.current, oa(aE, e);
    }
    function cc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== sg && (e.timeoutHandle = sg, pw(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var l = i.alternate;
          mR(l, i), i = i.return;
        }
      _a = e;
      var s = dc(e.current, null);
      return kn = s, gr = Qo = t, Sr = Pl, Gp = null, Im = Y, Kp = Y, Ym = Y, Xp = null, Ya = null, Ub(), eo.discardPendingWarnings(), s;
    }
    function VR(e, t) {
      do {
        var a = kn;
        try {
          if (lm(), dC(), gn(), nE.current = null, a === null || a.return === null) {
            Sr = Wp, Gp = t, kn = null;
            return;
          }
          if (Ge && a.mode & Ct && zm(a, !0), qe)
            if (bo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rs(a, i, gr);
            } else
              Ri(a, t, gr);
          c1(e, a.return, a, t, gr), qR(a);
        } catch (l) {
          t = l, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function $R() {
      var e = tE.current;
      return tE.current = Lm, e === null ? Lm : e;
    }
    function IR(e) {
      tE.current = e;
    }
    function Bx() {
      iE = _n();
    }
    function nv(e) {
      Im = at(e, Im);
    }
    function Vx() {
      Sr === Pl && (Sr = $m);
    }
    function vE() {
      (Sr === Pl || Sr === $m || Sr === uc) && (Sr = Qp), _a !== null && (Lo(Im) || Lo(Kp)) && Wu(_a, gr);
    }
    function $x(e) {
      Sr !== Qp && (Sr = uc), Xp === null ? Xp = [e] : Xp.push(e);
    }
    function Ix() {
      return Sr === Pl;
    }
    function Jm(e, t) {
      var a = xt;
      xt |= $r;
      var i = $R();
      if (_a !== e || gr !== t) {
        if (br) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (rv(e, gr), l.clear()), Wd(e, t);
        }
        Bl = ff(), cc(e, t);
      }
      zd(t);
      do
        try {
          Yx();
          break;
        } catch (s) {
          VR(e, s);
        }
      while (!0);
      if (lm(), xt = a, IR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hn(), _a = null, gr = Y, Sr;
    }
    function Yx() {
      for (; kn !== null; )
        YR(kn);
    }
    function qx(e, t) {
      var a = xt;
      xt |= $r;
      var i = $R();
      if (_a !== e || gr !== t) {
        if (br) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (rv(e, gr), l.clear()), Wd(e, t);
        }
        Bl = ff(), Jp(), cc(e, t);
      }
      zd(t);
      do
        try {
          Wx();
          break;
        } catch (s) {
          VR(e, s);
        }
      while (!0);
      return lm(), IR(i), xt = a, kn !== null ? (Fd(), Pl) : (hn(), _a = null, gr = Y, Sr);
    }
    function Wx() {
      for (; kn !== null && !kd(); )
        YR(kn);
    }
    function YR(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Ct) !== Me ? (yS(e), a = hE(t, e, Qo), zm(e, !0)) : a = hE(t, e, Qo), gn(), e.memoizedProps = e.pendingProps, a === null ? qR(e) : kn = a, nE.current = null;
    }
    function qR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & pl) === Ne) {
          Qt(t);
          var l = void 0;
          if ((t.mode & Ct) === Me ? l = hR(a, t, Qo) : (yS(t), l = hR(a, t, Qo), zm(t, !1)), gn(), l !== null) {
            kn = l;
            return;
          }
        } else {
          var s = V1(a, t);
          if (s !== null) {
            s.flags &= Iv, kn = s;
            return;
          }
          if ((t.mode & Ct) !== Me) {
            zm(t, !1);
            for (var f = t.actualDuration, h = t.child; h !== null; )
              f += h.actualDuration, h = h.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= pl, i.subtreeFlags = Ne, i.deletions = null;
          else {
            Sr = rE, kn = null;
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
      Sr === Pl && (Sr = MR);
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
        $l();
      while (Yu !== null);
      if (ik(), (xt & ($r | Oi)) !== yr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Kv(s), l === null)
        return Ci(), null;
      if (s === Y && R("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jn;
      var f = at(l.lanes, l.childLanes);
      oh(e, f), e === _a && (_a = null, kn = null, gr = Y), ((l.subtreeFlags & ur) !== Ne || (l.flags & ur) !== Ne) && (sc || (sc = !0, uE = a, gE(hl, function() {
        return $l(), null;
      })));
      var h = (l.subtreeFlags & (To | du | _o | ur)) !== Ne, y = (l.flags & (To | du | _o | ur)) !== Ne;
      if (h || y) {
        var C = Vr.transition;
        Vr.transition = null;
        var T = Sa();
        In(aa);
        var O = xt;
        xt |= Oi, nE.current = null, W1(e, l), FC(), lx(e, l, s), ow(e.containerInfo), e.current = l, Ts(s), ux(l, e, s), yl(), qv(), xt = O, In(T), Vr.transition = C;
      } else
        e.current = l, FC();
      var k = sc;
      if (sc ? (sc = !1, Yu = e, Zp = s) : (td = 0, Qm = null), f = e.pendingLanes, f === Y && (ed = null), k || KR(e.current, !1), Ld(l.stateNode, i), br && e.memoizedUpdaters.clear(), xx(), qa(e, _n()), t !== null)
        for (var j = e.onRecoverableError, P = 0; P < t.length; P++) {
          var V = t[P], pe = V.stack, Fe = V.digest;
          j(V.value, {
            componentStack: pe,
            digest: Fe
          });
        }
      if (qm) {
        qm = !1;
        var Le = oE;
        throw oE = null, Le;
      }
      return ra(Zp, Be) && e.tag !== Uu && $l(), f = e.pendingLanes, ra(f, Be) ? (Zb(), e === sE ? ev++ : (ev = 0, sE = e)) : ev = 0, zu(), Ci(), null;
    }
    function $l() {
      if (Yu !== null) {
        var e = sh(Zp), t = xr(cr, e), a = Vr.transition, i = Sa();
        try {
          return Vr.transition = null, In(t), Kx();
        } finally {
          In(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Gx(e) {
      lE.push(e), sc || (sc = !0, gE(hl, function() {
        return $l(), null;
      }));
    }
    function Kx() {
      if (Yu === null)
        return !1;
      var e = uE;
      uE = null;
      var t = Yu, a = Zp;
      if (Yu = null, Zp = Y, (xt & ($r | Oi)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      cE = !0, Wm = !1, Ud(a);
      var i = xt;
      xt |= Oi, hx(t.current), fx(t, t.current, a, e);
      {
        var l = lE;
        lE = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          X1(t, f);
        }
      }
      mu(), KR(t.current, !0), xt = i, zu(), Wm ? t === Qm ? td++ : (td = 0, Qm = t) : td = 0, cE = !1, Wm = !1, Nd(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function WR(e) {
      return ed !== null && ed.has(e);
    }
    function Xx(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function Jx(e) {
      qm || (qm = !0, oE = e);
    }
    var Zx = Jx;
    function QR(e, t, a) {
      var i = oc(a, t), l = YC(e, i, Be), s = ju(e, l, Be), f = wa();
      s !== null && (Cu(s, Be, f), qa(s, f));
    }
    function dn(e, t, a) {
      if (I1(a), av(!1), e.tag === ne) {
        QR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          QR(i, e, a);
          return;
        } else if (i.tag === ie) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !WR(s)) {
            var f = oc(a, e), h = US(i, f, Be), y = ju(i, h, Be), C = wa();
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
      sf(e, a), sk(e), _a === e && Rl(gr, a) && (Sr === Qp || Sr === $m && af(gr) && _n() - iE < AR ? cc(e, Y) : Ym = at(Ym, a)), qa(e, l);
    }
    function GR(e, t) {
      t === jn && (t = Ax(e));
      var a = wa(), i = $a(e, t);
      i !== null && (Cu(i, t, a), qa(i, a));
    }
    function tk(e) {
      var t = e.memoizedState, a = jn;
      t !== null && (a = t.retryLane), GR(e, a);
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
      i !== null && i.delete(t), GR(e, a);
    }
    function rk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ox(e / 1960) * 1960;
    }
    function ak() {
      if (ev > Nx)
        throw ev = 0, sE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > Mx && (td = 0, Qm = null, R("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ik() {
      eo.flushLegacyContextWarning(), eo.flushPendingUnsafeLifecycleWarnings();
    }
    function KR(e, t) {
      Qt(e), Zm(e, Mr, _x), t && Zm(e, Ro, wx), Zm(e, Mr, Rx), t && Zm(e, Ro, Tx), gn();
    }
    function Zm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Ne ? i = i.child : ((i.flags & t) !== Ne && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ey = null;
    function XR(e) {
      {
        if ((xt & $r) !== yr || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== Oe && t !== ne && t !== ie && t !== ue && t !== Pe && t !== pt && t !== Ye)
          return;
        var a = We(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Qt(e), R("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : gn();
        }
      }
    }
    var hE;
    {
      var ok = null;
      hE = function(e, t, a) {
        var i = iT(ok, t);
        try {
          return cR(e, t, a);
        } catch (s) {
          if (gb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (lm(), dC(), mR(e, t), iT(t, i), t.mode & Ct && yS(t), Aa(null, cR, null, e, t, a), Cd()) {
            var l = Rd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var JR = !1, mE;
    mE = /* @__PURE__ */ new Set();
    function lk(e) {
      if (Kr && !Kb())
        switch (e.tag) {
          case ue:
          case Pe:
          case Ye: {
            var t = kn && We(kn) || "Unknown", a = t;
            if (!mE.has(a)) {
              mE.add(a);
              var i = We(e) || "Unknown";
              R("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ie: {
            JR || (R("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), JR = !0);
            break;
          }
        }
    }
    function rv(e, t) {
      if (br) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          lh(e, i, t);
        });
      }
    }
    var yE = {};
    function gE(e, t) {
      {
        var a = uo.current;
        return a !== null ? (a.push(t), yE) : bd(e, t);
      }
    }
    function ZR(e) {
      if (e !== yE)
        return xd(e);
    }
    function eT() {
      return uo.current !== null;
    }
    function uk(e) {
      {
        if (e.mode & dt) {
          if (!LR())
            return;
        } else if (!Dx() || xt !== yr || e.tag !== ue && e.tag !== Pe && e.tag !== Ye)
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
      e.tag !== Uu && LR() && uo.current === null && R(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function av(e) {
      FR = e;
    }
    var Li = null, nd = null, ck = function(e) {
      Li = e;
    };
    function rd(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function SE(e) {
      return rd(e);
    }
    function EE(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
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
    function tT(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ie: {
            typeof i == "function" && (l = !0);
            break;
          }
          case ue: {
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
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function nT(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var fk = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $l(), Vl(function() {
          CE(e.current, i, a);
        });
      }
    }, dk = function(e, t) {
      {
        if (e.context !== li)
          return;
        $l(), Vl(function() {
          iv(t, e, null, null);
        });
      }
    };
    function CE(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case ue:
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
          O !== void 0 && (a.has(O) ? T = !0 : t.has(O) && (f === ie ? T = !0 : C = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var k = $a(e, Be);
          k !== null && Er(k, e, Be, Yt);
        }
        l !== null && !T && CE(l, t, a), s !== null && CE(s, t, a);
      }
    }
    var pk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return RE(e.current, i, a), a;
      }
    };
    function RE(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, h = null;
        switch (s) {
          case ue:
          case Ye:
          case ie:
            h = f;
            break;
          case Pe:
            h = f.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? vk(e, a) : i !== null && RE(i, t, a), l !== null && RE(l, t, a);
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
    var TE;
    {
      TE = !1;
      try {
        var rT = Object.preventExtensions({});
      } catch {
        TE = !0;
      }
    }
    function mk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ne, this.subtreeFlags = Ne, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !TE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new mk(e, t, a, i);
    };
    function _E(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yk(e) {
      return typeof e == "function" && !_E(e) && e.defaultProps === void 0;
    }
    function gk(e) {
      if (typeof e == "function")
        return _E(e) ? ie : ue;
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
        case ue:
        case Ye:
          a.type = rd(e.type);
          break;
        case ie:
          a.type = SE(e.type);
          break;
        case Pe:
          a.type = EE(e.type);
          break;
      }
      return a;
    }
    function Sk(e, t) {
      e.flags &= Fn | An;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Ne, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
      return e === Xh ? (i = dt, t === !0 && (i |= tt, i |= Jt)) : i = Me, br && (i |= Ct), ui(ne, null, null, i);
    }
    function wE(e, t, a, i, l, s) {
      var f = Oe, h = e;
      if (typeof e == "function")
        _E(e) ? (f = ie, h = SE(h)) : h = rd(h);
      else if (typeof e == "string")
        f = te;
      else
        e: switch (e) {
          case Wr:
            return Qu(a.children, l, s, t);
          case fi:
            f = jt, l |= tt, (l & dt) !== Me && (l |= Jt);
            break;
          case di:
            return Ck(a, l, s, t);
          case fe:
            return Rk(a, l, s, t);
          case ve:
            return Tk(a, l, s, t);
          case Rn:
            return aT(a, l, s, t);
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
                  f = nt;
                  break e;
                case b:
                  f = Tt;
                  break e;
                case G:
                  f = Pe, h = EE(h);
                  break e;
                case ct:
                  f = pt;
                  break e;
                case Ke:
                  f = Cn, h = null;
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
      var T = ui(f, a, t, l);
      return T.elementType = e, T.type = h, T.lanes = s, T._debugOwner = i, T;
    }
    function bE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, h = wE(l, s, f, i, t, a);
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
      return l.elementType = fe, l.lanes = a, l;
    }
    function Tk(e, t, a, i) {
      var l = ui(qt, e, i, t);
      return l.elementType = ve, l.lanes = a, l;
    }
    function aT(e, t, a, i) {
      var l = ui(He, e, i, t);
      l.elementType = Rn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function xE(e, t, a) {
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
    function kE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = ui(_e, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function iT(e, t) {
      return e === null && (e = ui(Oe, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jn, this.eventTimes = uf(Y), this.expirationTimes = uf(Yt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = uf(Y), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Hd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function oT(e, t, a, i, l, s, f, h, y, C) {
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
      return Bg(O), T;
    }
    var DE = "18.3.1";
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
    var OE, LE;
    OE = !1, LE = {};
    function lT(e) {
      if (!e)
        return li;
      var t = fu(e), a = sb(t);
      if (t.tag === ie) {
        var i = t.type;
        if (Bo(i))
          return A0(t, i, a);
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
          if (!LE[s]) {
            LE[s] = !0;
            var f = Jn;
            try {
              Qt(l), a.mode & tt ? R("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : R("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : gn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function uT(e, t, a, i, l, s, f, h) {
      var y = !1, C = null;
      return oT(e, t, y, C, a, i, l, s, f);
    }
    function sT(e, t, a, i, l, s, f, h, y, C) {
      var T = !0, O = oT(a, i, T, e, l, s, f, h, y);
      O.context = lT(null);
      var k = O.current, j = wa(), P = qu(k), V = jl(j, P);
      return V.callback = t ?? null, ju(k, V, P), Ux(O, P, j), O;
    }
    function iv(e, t, a, i) {
      Od(t, e);
      var l = t.current, s = wa(), f = qu(l);
      jc(f);
      var h = lT(a);
      t.context === null ? t.context = h : t.pendingContext = h, Kr && Jn !== null && !OE && (OE = !0, R(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(Jn) || "Unknown"));
      var y = jl(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && R("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = ju(l, y, f);
      return C !== null && (Er(C, l, f, s), dm(C, l, f)), f;
    }
    function ty(e) {
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
          if (Tl(t)) {
            var a = rh(t);
            Hx(t, a);
          }
          break;
        }
        case De: {
          Vl(function() {
            var l = $a(e, Be);
            if (l !== null) {
              var s = wa();
              Er(l, e, Be, s);
            }
          });
          var i = Be;
          NE(e, i);
          break;
        }
      }
    }
    function cT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yd(a.retryLane, t));
    }
    function NE(e, t) {
      cT(e, t);
      var a = e.alternate;
      a && cT(a, t);
    }
    function Ok(e) {
      if (e.tag === De) {
        var t = Eu, a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        NE(e, t);
      }
    }
    function Lk(e) {
      if (e.tag === De) {
        var t = qu(e), a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        NE(e, t);
      }
    }
    function fT(e) {
      var t = ri(e);
      return t === null ? null : t.stateNode;
    }
    var dT = function(e) {
      return null;
    };
    function Nk(e) {
      return dT(e);
    }
    var pT = function(e) {
      return !1;
    };
    function Mk(e) {
      return pT(e);
    }
    var vT = null, hT = null, mT = null, yT = null, gT = null, ST = null, ET = null, CT = null, RT = null;
    {
      var TT = function(e, t, a) {
        var i = t[a], l = rt(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (rt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = TT(e[i], t, a + 1), l);
      }, _T = function(e, t) {
        return TT(e, t, 0);
      }, wT = function(e, t, a, i) {
        var l = t[i], s = rt(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], rt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = wT(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, bT = function(e, t, a) {
        if (t.length !== a.length) {
          ee("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ee("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return wT(e, t, a, 0);
      }, xT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = rt(e) ? e.slice() : et({}, e);
        return s[l] = xT(e[l], t, a + 1, i), s;
      }, kT = function(e, t, a) {
        return xT(e, t, 0, a);
      }, ME = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      vT = function(e, t, a, i) {
        var l = ME(e, t);
        if (l !== null) {
          var s = kT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = $a(e, Be);
          f !== null && Er(f, e, Be, Yt);
        }
      }, hT = function(e, t, a) {
        var i = ME(e, t);
        if (i !== null) {
          var l = _T(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = et({}, e.memoizedProps);
          var s = $a(e, Be);
          s !== null && Er(s, e, Be, Yt);
        }
      }, mT = function(e, t, a, i) {
        var l = ME(e, t);
        if (l !== null) {
          var s = bT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = $a(e, Be);
          f !== null && Er(f, e, Be, Yt);
        }
      }, yT = function(e, t, a) {
        e.pendingProps = kT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && Er(i, e, Be, Yt);
      }, gT = function(e, t) {
        e.pendingProps = _T(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Be);
        a !== null && Er(a, e, Be, Yt);
      }, ST = function(e, t, a) {
        e.pendingProps = bT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Be);
        i !== null && Er(i, e, Be, Yt);
      }, ET = function(e) {
        var t = $a(e, Be);
        t !== null && Er(t, e, Be, Yt);
      }, CT = function(e) {
        dT = e;
      }, RT = function(e) {
        pT = e;
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
      return Dd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: vT,
        overrideHookStateDeletePath: hT,
        overrideHookStateRenamePath: mT,
        overrideProps: yT,
        overridePropsDeletePath: gT,
        overridePropsRenamePath: ST,
        setErrorHandler: CT,
        setSuspenseHandler: RT,
        scheduleUpdate: ET,
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
        reconcilerVersion: DE
      });
    }
    var DT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function AE(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = AE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? R("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? R("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && R("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = fT(t.current);
          i && i.parentNode !== a && R("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      iv(e, t, null, null);
    }, ny.prototype.unmount = AE.prototype.unmount = function() {
      typeof arguments[0] == "function" && R("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        BR() && R("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Vl(function() {
          iv(null, e, null, null);
        }), D0(t);
      }
    };
    function jk(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      OT(e);
      var a = !1, i = !1, l = "", s = DT;
      t != null && (t.hydrate ? ee("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && R(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = uT(e, Xh, null, a, i, l, s);
      Ih(f.current, e);
      var h = e.nodeType === Mn ? e.parentNode : e;
      return fp(h), new AE(f);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function Hk(e) {
      e && vh(e);
    }
    ny.prototype.unstable_scheduleHydration = Hk;
    function Pk(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      OT(e), t === void 0 && R("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, h = "", y = DT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = sT(t, null, e, Xh, i, s, f, h, y);
      if (Ih(C.current, e), fp(e), l)
        for (var T = 0; T < l.length; T++) {
          var O = l[T];
          Ib(C, O);
        }
      return new ny(C);
    }
    function ry(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === as));
    }
    function ov(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === as || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function OT(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && R("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Rp(e) && (e._reactRootContainer ? R("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : R("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Bk = S.ReactCurrentOwner, LT;
    LT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = fT(e._reactRootContainer.current);
        t && t.parentNode !== e && R("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = UE(e), l = !!(i && Mu(i));
      l && !a && R("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && R("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function UE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function NT() {
    }
    function Vk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = ty(f);
            s.call(k);
          };
        }
        var f = sT(
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
          NT
        );
        e._reactRootContainer = f, Ih(f.current, e);
        var h = e.nodeType === Mn ? e.parentNode : e;
        return fp(h), Vl(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var k = ty(T);
            C.call(k);
          };
        }
        var T = uT(
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
          NT
        );
        e._reactRootContainer = T, Ih(T.current, e);
        var O = e.nodeType === Mn ? e.parentNode : e;
        return fp(O), Vl(function() {
          iv(t, T, a, i);
        }), T;
      }
    }
    function $k(e, t) {
      e !== null && typeof e != "function" && R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, l) {
      LT(a), $k(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Vk(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var h = l;
          l = function() {
            var y = ty(f);
            h.call(y);
          };
        }
        iv(t, f, e, l);
      }
      return ty(f);
    }
    var MT = !1;
    function Ik(e) {
      {
        MT || (MT = !0, R("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Bk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || R("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : kk(e, "findDOMNode");
    }
    function Yk(e, t, a) {
      if (R("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Rp(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function qk(e, t, a) {
      if (R("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Rp(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function Wk(e, t, a, i) {
      if (R("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !dl(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    var AT = !1;
    function Qk(e) {
      if (AT || (AT = !0, R("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !ov(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Rp(e) && e._reactRootContainer === void 0;
        t && R("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = UE(e), i = a && !Mu(a);
          i && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Vl(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, D0(e);
          });
        }), !0;
      } else {
        {
          var l = UE(e), s = !!(l && Mu(l)), f = e.nodeType === Xr && ov(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Uy(Dk), Gd(Ok), zy(Lk), pf(Sa), ch(uh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && R("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ps(K_), Vv(dE, Px, Vl);
    function Gk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return xk(e, t, null, a);
    }
    function Kk(e, t, a, i) {
      return Wk(e, t, a, i);
    }
    var zE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Mu, Af, Yh, Sd, lu, dE]
    };
    function Xk(e, t) {
      return zE.usingClientEntryPoint || R('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t);
    }
    function Jk(e, t, a) {
      return zE.usingClientEntryPoint || R('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Pk(e, t, a);
    }
    function Zk(e) {
      return BR() && R("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Vl(e);
    }
    var eD = Fk({
      findFiberByHostInstance: Xs,
      bundleType: 1,
      version: DE,
      rendererPackageName: "react-dom"
    });
    if (!eD && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var UT = window.location.protocol;
      /^(https?|file):$/.test(UT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (UT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zE, Qa.createPortal = Gk, Qa.createRoot = Xk, Qa.findDOMNode = Ik, Qa.flushSync = Zk, Qa.hydrate = Yk, Qa.hydrateRoot = Jk, Qa.render = qk, Qa.unmountComponentAtNode = Qk, Qa.unstable_batchedUpdates = dE, Qa.unstable_renderSubtreeIntoContainer = Kk, Qa.version = DE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var IT;
function cD() {
  if (IT) return oy.exports;
  IT = 1;
  var m = {};
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (m.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return m.NODE_ENV === "production" ? (d(), oy.exports = uD()) : oy.exports = sD(), oy.exports;
}
var YT;
function fD() {
  if (YT) return id;
  YT = 1;
  var m = {}, d = cD();
  if (m.NODE_ENV === "production")
    id.createRoot = d.createRoot, id.hydrateRoot = d.hydrateRoot;
  else {
    var p = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    id.createRoot = function(S, N) {
      p.usingClientEntryPoint = !0;
      try {
        return d.createRoot(S, N);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    }, id.hydrateRoot = function(S, N, I) {
      p.usingClientEntryPoint = !0;
      try {
        return d.hydrateRoot(S, N, I);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    };
  }
  return id;
}
var dD = fD(), pD = Object.defineProperty, vD = (m, d, p) => d in m ? pD(m, d, { enumerable: !0, configurable: !0, writable: !0, value: p }) : m[d] = p, uy = (m, d, p) => vD(m, typeof d != "symbol" ? d + "" : d, p);
const hD = {
  stringify: (m) => m ? "true" : "false",
  parse: (m) => /^[ty1-9]/i.test(m)
}, mD = {
  stringify: (m) => m.name,
  parse: (m, d, p) => {
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
}, HE = {
  string: SD,
  number: gD,
  boolean: hD,
  function: mD,
  json: yD
};
function ED(m) {
  return m.replace(
    /([a-z0-9])([A-Z])/g,
    (d, p, S) => `${p}-${S.toLowerCase()}`
  );
}
const sy = Symbol.for("r2wc.render"), cy = Symbol.for("r2wc.connected"), pc = Symbol.for("r2wc.context"), Yl = Symbol.for("r2wc.props");
function CD(m, d, p) {
  var S, N, I;
  d.props || (d.props = m.propTypes ? Object.keys(m.propTypes) : []), d.events || (d.events = []);
  const ee = Array.isArray(d.props) ? d.props.slice() : Object.keys(d.props), R = Array.isArray(d.events) ? d.events.slice() : Object.keys(d.events), le = {}, ue = {}, ie = {}, Oe = {};
  for (const _e of ee) {
    le[_e] = Array.isArray(d.props) ? "string" : d.props[_e];
    const te = ED(_e);
    ie[_e] = te, Oe[te] = _e;
  }
  for (const _e of R)
    ue[_e] = Array.isArray(d.events) ? {} : d.events[_e];
  class ne extends HTMLElement {
    constructor() {
      super(), uy(this, I, !0), uy(this, N), uy(this, S, {}), uy(this, "container"), d.shadow ? this.container = this.attachShadow({
        mode: d.shadow
      }) : this.container = this, this[Yl].container = this.container;
      for (const te of ee) {
        const Ce = ie[te], Ve = this.getAttribute(Ce), jt = le[te], Tt = jt ? HE[jt] : null;
        Tt != null && Tt.parse && Ve && (this[Yl][te] = Tt.parse(Ve, Ce, this));
      }
      for (const te of R)
        this[Yl][te] = (Ce) => {
          const Ve = te.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Ve, { detail: Ce, ...ue[te] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Oe);
    }
    connectedCallback() {
      this[cy] = !0, this[sy]();
    }
    disconnectedCallback() {
      this[cy] = !1, this[pc] && p.unmount(this[pc]), delete this[pc];
    }
    attributeChangedCallback(te, Ce, Ve) {
      const jt = Oe[te], Tt = le[jt], nt = Tt ? HE[Tt] : null;
      jt in le && nt != null && nt.parse && Ve && (this[Yl][jt] = nt.parse(Ve, te, this), this[sy]());
    }
    [(I = cy, N = pc, S = Yl, sy)]() {
      this[cy] && (this[pc] ? p.update(this[pc], this[Yl]) : this[pc] = p.mount(
        this.container,
        m,
        this[Yl]
      ));
    }
  }
  for (const _e of ee) {
    const te = ie[_e], Ce = le[_e];
    Object.defineProperty(ne.prototype, _e, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Yl][_e];
      },
      set(Ve) {
        this[Yl][_e] = Ve;
        const jt = Ce ? HE[Ce] : null;
        if (jt != null && jt.stringify) {
          const Tt = jt.stringify(Ve, te, this);
          this.getAttribute(te) !== Tt && this.setAttribute(te, Tt);
        } else
          this[sy]();
      }
    });
  }
  return ne;
}
function RD(m, d, p) {
  const S = dD.createRoot(m), N = t_.createElement(d, p);
  return S.render(N), {
    root: S,
    ReactComponent: d
  };
}
function TD({ root: m, ReactComponent: d }, p) {
  const S = t_.createElement(d, p);
  m.render(S);
}
function _D({ root: m }) {
  m.unmount();
}
function wD(m, d = {}) {
  return CD(m, d, { mount: RD, update: TD, unmount: _D });
}
var fy = { exports: {} }, uv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qT;
function bD() {
  if (qT) return uv;
  qT = 1;
  var m = pv(), d = Symbol.for("react.element"), p = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, N = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(R, le, ue) {
    var ie, Oe = {}, ne = null, _e = null;
    ue !== void 0 && (ne = "" + ue), le.key !== void 0 && (ne = "" + le.key), le.ref !== void 0 && (_e = le.ref);
    for (ie in le) S.call(le, ie) && !I.hasOwnProperty(ie) && (Oe[ie] = le[ie]);
    if (R && R.defaultProps) for (ie in le = R.defaultProps, le) Oe[ie] === void 0 && (Oe[ie] = le[ie]);
    return { $$typeof: d, type: R, key: ne, ref: _e, props: Oe, _owner: N.current };
  }
  return uv.Fragment = p, uv.jsx = ee, uv.jsxs = ee, uv;
}
var sv = {}, WT;
function xD() {
  if (WT) return sv;
  WT = 1;
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
    var d = pv(), p = Symbol.for("react.element"), S = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), le = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), Ce = Symbol.iterator, Ve = "@@iterator";
    function jt(b) {
      if (b === null || typeof b != "object")
        return null;
      var G = Ce && b[Ce] || b[Ve];
      return typeof G == "function" ? G : null;
    }
    var Tt = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function nt(b) {
      {
        for (var G = arguments.length, fe = new Array(G > 1 ? G - 1 : 0), ve = 1; ve < G; ve++)
          fe[ve - 1] = arguments[ve];
        Pe("error", b, fe);
      }
    }
    function Pe(b, G, fe) {
      {
        var ve = Tt.ReactDebugCurrentFrame, ct = ve.getStackAddendum();
        ct !== "" && (G += "%s", fe = fe.concat([ct]));
        var Ke = fe.map(function(vt) {
          return String(vt);
        });
        Ke.unshift("Warning: " + G), Function.prototype.apply.call(console[b], console, Ke);
      }
    }
    var Ot = !1, De = !1, pt = !1, Ye = !1, Cn = !1, At;
    At = Symbol.for("react.module.reference");
    function pn(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === N || b === ee || Cn || b === I || b === ie || b === Oe || Ye || b === te || Ot || De || pt || typeof b == "object" && b !== null && (b.$$typeof === _e || b.$$typeof === ne || b.$$typeof === R || b.$$typeof === le || b.$$typeof === ue || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === At || b.getModuleId !== void 0));
    }
    function qt(b, G, fe) {
      var ve = b.displayName;
      if (ve)
        return ve;
      var ct = G.displayName || G.name || "";
      return ct !== "" ? fe + "(" + ct + ")" : fe;
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
        case I:
          return "StrictMode";
        case ie:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case le:
            var G = b;
            return St(G) + ".Consumer";
          case R:
            var fe = b;
            return St(fe._context) + ".Provider";
          case ue:
            return qt(b, b.render, "ForwardRef");
          case ne:
            var ve = b.displayName || null;
            return ve !== null ? ve : He(b.type) || "Memo";
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
    var Ht = Object.assign, yt = 0, ut, W, we, de, L, Q, Ae;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function Ge() {
      {
        if (yt === 0) {
          ut = console.log, W = console.info, we = console.warn, de = console.error, L = console.group, Q = console.groupCollapsed, Ae = console.groupEnd;
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
              value: de
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
    function Et(b, G, fe) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (ct) {
            var ve = ct.stack.trim().match(/\n( *(at )?)/);
            Je = ve && ve[1] || "";
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
        var fe = Dn.get(b);
        if (fe !== void 0)
          return fe;
      }
      var ve;
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
              ve = vn;
            }
            Reflect.construct(b, [], vt);
          } else {
            try {
              vt.call();
            } catch (vn) {
              ve = vn;
            }
            b.call(vt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vn) {
            ve = vn;
          }
          b();
        }
      } catch (vn) {
        if (vn && ve && typeof vn.stack == "string") {
          for (var ot = vn.stack.split(`
`), Rn = ve.stack.split(`
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
    function On(b, G, fe) {
      return ir(b, !1);
    }
    function Cr(b) {
      var G = b.prototype;
      return !!(G && G.isReactComponent);
    }
    function Bn(b, G, fe) {
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
          case ue:
            return On(b.render);
          case ne:
            return Bn(b.type, G, fe);
          case _e: {
            var ve = b, ct = ve._payload, Ke = ve._init;
            try {
              return Bn(Ke(ct), G, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, fa = {}, Ga = Tt.ReactDebugCurrentFrame;
    function Dr(b) {
      if (b) {
        var G = b._owner, fe = Bn(b.type, b._source, G ? G.type : null);
        Ga.setExtraStackFrame(fe);
      } else
        Ga.setExtraStackFrame(null);
    }
    function Vn(b, G, fe, ve, ct) {
      {
        var Ke = Function.call.bind(Ln);
        for (var vt in b)
          if (Ke(b, vt)) {
            var ot = void 0;
            try {
              if (typeof b[vt] != "function") {
                var Rn = Error((ve || "React class") + ": " + fe + " type `" + vt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[vt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              ot = b[vt](G, vt, ve, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              ot = on;
            }
            ot && !(ot instanceof Error) && (Dr(ct), nt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", fe, vt, typeof ot), Dr(null)), ot instanceof Error && !(ot.message in fa) && (fa[ot.message] = !0, Dr(ct), nt("Failed %s type: %s", fe, ot.message), Dr(null));
          }
      }
    }
    var Gn = Array.isArray;
    function Kn(b) {
      return Gn(b);
    }
    function Rr(b) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, fe = G && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return fe;
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
        var fe = function() {
          da || (da = !0, nt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        fe.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function un(b, G) {
      {
        var fe = function() {
          oe || (oe = !0, nt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        fe.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var sn = function(b, G, fe, ve, ct, Ke, vt) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: b,
        key: G,
        ref: fe,
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
        value: ve
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ct
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function Xn(b, G, fe, ve, ct) {
      {
        var Ke, vt = {}, ot = null, Rn = null;
        fe !== void 0 && (or(fe), ot = "" + fe), it(G) && (or(G.key), ot = "" + G.key), ze(G) && (Rn = G.ref, Ut(G, ct));
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
        return sn(b, ot, Rn, ct, ve, qr.current, vt);
      }
    }
    var an = Tt.ReactCurrentOwner, Wt = Tt.ReactDebugCurrentFrame;
    function zt(b) {
      if (b) {
        var G = b._owner, fe = Bn(b.type, b._source, G ? G.type : null);
        Wt.setExtraStackFrame(fe);
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
    var Jo = {};
    function Zo(b) {
      {
        var G = Da();
        if (!G) {
          var fe = typeof b == "string" ? b : b.displayName || b.name;
          fe && (G = `

Check the top-level render call using <` + fe + ">.");
        }
        return G;
      }
    }
    function Ui(b, G) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var fe = Zo(G);
        if (Jo[fe])
          return;
        Jo[fe] = !0;
        var ve = "";
        b && b._owner && b._owner !== an.current && (ve = " It was passed a child from " + He(b._owner.type) + "."), zt(b), nt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, ve), zt(null);
      }
    }
    function el(b, G) {
      {
        if (typeof b != "object")
          return;
        if (Kn(b))
          for (var fe = 0; fe < b.length; fe++) {
            var ve = b[fe];
            ka(ve) && Ui(ve, G);
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
        var fe;
        if (typeof G == "function")
          fe = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === ue || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === ne))
          fe = G.propTypes;
        else
          return;
        if (fe) {
          var ve = He(G);
          Vn(fe, b.props, "prop", ve, b);
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
        for (var G = Object.keys(b.props), fe = 0; fe < G.length; fe++) {
          var ve = G[fe];
          if (ve !== "children" && ve !== "key") {
            zt(b), nt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), zt(null);
            break;
          }
        }
        b.ref !== null && (zt(b), nt("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var lr = {};
    function ha(b, G, fe, ve, ct, Ke) {
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
        var cn = Xn(b, G, fe, ct, Ke);
        if (cn == null)
          return cn;
        if (vt) {
          var Tr = G.children;
          if (Tr !== void 0)
            if (ve)
              if (Kn(Tr)) {
                for (var Xa = 0; Xa < Tr.length; Xa++)
                  el(Tr[Xa], b);
                Object.freeze && Object.freeze(Tr);
              } else
                nt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              el(Tr, b);
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
    function Wr(b, G, fe) {
      return ha(b, G, fe, !0);
    }
    function fi(b, G, fe) {
      return ha(b, G, fe, !1);
    }
    var di = fi, zi = Wr;
    sv.Fragment = N, sv.jsx = di, sv.jsxs = zi;
  }(), sv;
}
var QT;
function kD() {
  if (QT) return fy.exports;
  QT = 1;
  var m = {};
  return m.NODE_ENV === "production" ? fy.exports = bD() : fy.exports = xD(), fy.exports;
}
var vc = kD();
const DD = (m) => (co.useEffect(() => {
  if (window && document && !document.getElementById("GoSaffeCaptureComponent")) {
    const p = document.createElement("script");
    p.id = "GoSaffeCaptureComponent";
    const S = document.getElementsByTagName("body")[0];
    p.src = "https://go.saffe.ai/cdn/latest", S.appendChild(p), p.addEventListener("load", () => {
      window.GoSaffe.init(
        m.captureKey,
        m.user,
        m.endToEndId,
        m.type
      );
    });
  }
  return () => {
    const d = document.getElementById("GoSaffeCaptureComponent");
    d && d.remove();
  };
}, []), /* @__PURE__ */ vc.jsx("div", {})), Xo = /* @__PURE__ */ Object.create(null);
Xo.open = "0";
Xo.close = "1";
Xo.ping = "2";
Xo.pong = "3";
Xo.message = "4";
Xo.upgrade = "5";
Xo.noop = "6";
const vy = /* @__PURE__ */ Object.create(null);
Object.keys(Xo).forEach((m) => {
  vy[Xo[m]] = m;
});
const IE = { type: "error", data: "parser error" }, r_ = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", a_ = typeof ArrayBuffer == "function", i_ = (m) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(m) : m && m.buffer instanceof ArrayBuffer, KE = ({ type: m, data: d }, p, S) => r_ && d instanceof Blob ? p ? S(d) : GT(d, S) : a_ && (d instanceof ArrayBuffer || i_(d)) ? p ? S(d) : GT(new Blob([d]), S) : S(Xo[m] + (d || "")), GT = (m, d) => {
  const p = new FileReader();
  return p.onload = function() {
    const S = p.result.split(",")[1];
    d("b" + (S || ""));
  }, p.readAsDataURL(m);
};
function KT(m) {
  return m instanceof Uint8Array ? m : m instanceof ArrayBuffer ? new Uint8Array(m) : new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
}
let PE;
function OD(m, d) {
  if (r_ && m.data instanceof Blob)
    return m.data.arrayBuffer().then(KT).then(d);
  if (a_ && (m.data instanceof ArrayBuffer || i_(m.data)))
    return d(KT(m.data));
  KE(m, !1, (p) => {
    PE || (PE = new TextEncoder()), d(PE.encode(p));
  });
}
const XT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dv = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let m = 0; m < XT.length; m++)
  dv[XT.charCodeAt(m)] = m;
const LD = (m) => {
  let d = m.length * 0.75, p = m.length, S, N = 0, I, ee, R, le;
  m[m.length - 1] === "=" && (d--, m[m.length - 2] === "=" && d--);
  const ue = new ArrayBuffer(d), ie = new Uint8Array(ue);
  for (S = 0; S < p; S += 4)
    I = dv[m.charCodeAt(S)], ee = dv[m.charCodeAt(S + 1)], R = dv[m.charCodeAt(S + 2)], le = dv[m.charCodeAt(S + 3)], ie[N++] = I << 2 | ee >> 4, ie[N++] = (ee & 15) << 4 | R >> 2, ie[N++] = (R & 3) << 6 | le & 63;
  return ue;
}, ND = typeof ArrayBuffer == "function", XE = (m, d) => {
  if (typeof m != "string")
    return {
      type: "message",
      data: o_(m, d)
    };
  const p = m.charAt(0);
  return p === "b" ? {
    type: "message",
    data: MD(m.substring(1), d)
  } : vy[p] ? m.length > 1 ? {
    type: vy[p],
    data: m.substring(1)
  } : {
    type: vy[p]
  } : IE;
}, MD = (m, d) => {
  if (ND) {
    const p = LD(m);
    return o_(p, d);
  } else
    return { base64: !0, data: m };
}, o_ = (m, d) => {
  switch (d) {
    case "blob":
      return m instanceof Blob ? m : new Blob([m]);
    case "arraybuffer":
    default:
      return m instanceof ArrayBuffer ? m : m.buffer;
  }
}, l_ = "", AD = (m, d) => {
  const p = m.length, S = new Array(p);
  let N = 0;
  m.forEach((I, ee) => {
    KE(I, !1, (R) => {
      S[ee] = R, ++N === p && d(S.join(l_));
    });
  });
}, UD = (m, d) => {
  const p = m.split(l_), S = [];
  for (let N = 0; N < p.length; N++) {
    const I = XE(p[N], d);
    if (S.push(I), I.type === "error")
      break;
  }
  return S;
};
function zD() {
  return new TransformStream({
    transform(m, d) {
      OD(m, (p) => {
        const S = p.length;
        let N;
        if (S < 126)
          N = new Uint8Array(1), new DataView(N.buffer).setUint8(0, S);
        else if (S < 65536) {
          N = new Uint8Array(3);
          const I = new DataView(N.buffer);
          I.setUint8(0, 126), I.setUint16(1, S);
        } else {
          N = new Uint8Array(9);
          const I = new DataView(N.buffer);
          I.setUint8(0, 127), I.setBigUint64(1, BigInt(S));
        }
        m.data && typeof m.data != "string" && (N[0] |= 128), d.enqueue(N), d.enqueue(p);
      });
    }
  });
}
let BE;
function dy(m) {
  return m.reduce((d, p) => d + p.length, 0);
}
function py(m, d) {
  if (m[0].length === d)
    return m.shift();
  const p = new Uint8Array(d);
  let S = 0;
  for (let N = 0; N < d; N++)
    p[N] = m[0][S++], S === m[0].length && (m.shift(), S = 0);
  return m.length && S < m[0].length && (m[0] = m[0].slice(S)), p;
}
function FD(m, d) {
  BE || (BE = new TextDecoder());
  const p = [];
  let S = 0, N = -1, I = !1;
  return new TransformStream({
    transform(ee, R) {
      for (p.push(ee); ; ) {
        if (S === 0) {
          if (dy(p) < 1)
            break;
          const le = py(p, 1);
          I = (le[0] & 128) === 128, N = le[0] & 127, N < 126 ? S = 3 : N === 126 ? S = 1 : S = 2;
        } else if (S === 1) {
          if (dy(p) < 2)
            break;
          const le = py(p, 2);
          N = new DataView(le.buffer, le.byteOffset, le.length).getUint16(0), S = 3;
        } else if (S === 2) {
          if (dy(p) < 8)
            break;
          const le = py(p, 8), ue = new DataView(le.buffer, le.byteOffset, le.length), ie = ue.getUint32(0);
          if (ie > Math.pow(2, 21) - 1) {
            R.enqueue(IE);
            break;
          }
          N = ie * Math.pow(2, 32) + ue.getUint32(4), S = 3;
        } else {
          if (dy(p) < N)
            break;
          const le = py(p, N);
          R.enqueue(XE(I ? le : BE.decode(le), d)), S = 0;
        }
        if (N === 0 || N > m) {
          R.enqueue(IE);
          break;
        }
      }
    }
  });
}
const u_ = 4;
function ar(m) {
  if (m) return jD(m);
}
function jD(m) {
  for (var d in ar.prototype)
    m[d] = ar.prototype[d];
  return m;
}
ar.prototype.on = ar.prototype.addEventListener = function(m, d) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + m] = this._callbacks["$" + m] || []).push(d), this;
};
ar.prototype.once = function(m, d) {
  function p() {
    this.off(m, p), d.apply(this, arguments);
  }
  return p.fn = d, this.on(m, p), this;
};
ar.prototype.off = ar.prototype.removeListener = ar.prototype.removeAllListeners = ar.prototype.removeEventListener = function(m, d) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var p = this._callbacks["$" + m];
  if (!p) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + m], this;
  for (var S, N = 0; N < p.length; N++)
    if (S = p[N], S === d || S.fn === d) {
      p.splice(N, 1);
      break;
    }
  return p.length === 0 && delete this._callbacks["$" + m], this;
};
ar.prototype.emit = function(m) {
  this._callbacks = this._callbacks || {};
  for (var d = new Array(arguments.length - 1), p = this._callbacks["$" + m], S = 1; S < arguments.length; S++)
    d[S - 1] = arguments[S];
  if (p) {
    p = p.slice(0);
    for (var S = 0, N = p.length; S < N; ++S)
      p[S].apply(this, d);
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
const gy = typeof Promise == "function" && typeof Promise.resolve == "function" ? (d) => Promise.resolve().then(d) : (d, p) => p(d, 0), Ni = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), HD = "arraybuffer";
function s_(m, ...d) {
  return d.reduce((p, S) => (m.hasOwnProperty(S) && (p[S] = m[S]), p), {});
}
const PD = Ni.setTimeout, BD = Ni.clearTimeout;
function Sy(m, d) {
  d.useNativeTimers ? (m.setTimeoutFn = PD.bind(Ni), m.clearTimeoutFn = BD.bind(Ni)) : (m.setTimeoutFn = Ni.setTimeout.bind(Ni), m.clearTimeoutFn = Ni.clearTimeout.bind(Ni));
}
const VD = 1.33;
function $D(m) {
  return typeof m == "string" ? ID(m) : Math.ceil((m.byteLength || m.size) * VD);
}
function ID(m) {
  let d = 0, p = 0;
  for (let S = 0, N = m.length; S < N; S++)
    d = m.charCodeAt(S), d < 128 ? p += 1 : d < 2048 ? p += 2 : d < 55296 || d >= 57344 ? p += 3 : (S++, p += 4);
  return p;
}
function c_() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function YD(m) {
  let d = "";
  for (let p in m)
    m.hasOwnProperty(p) && (d.length && (d += "&"), d += encodeURIComponent(p) + "=" + encodeURIComponent(m[p]));
  return d;
}
function qD(m) {
  let d = {}, p = m.split("&");
  for (let S = 0, N = p.length; S < N; S++) {
    let I = p[S].split("=");
    d[decodeURIComponent(I[0])] = decodeURIComponent(I[1]);
  }
  return d;
}
class WD extends Error {
  constructor(d, p, S) {
    super(d), this.description = p, this.context = S, this.type = "TransportError";
  }
}
class JE extends ar {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(d) {
    super(), this.writable = !1, Sy(this, d), this.opts = d, this.query = d.query, this.socket = d.socket, this.supportsBinary = !d.forceBase64;
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
  onError(d, p, S) {
    return super.emitReserved("error", new WD(d, p, S)), this;
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
  send(d) {
    this.readyState === "open" && this.write(d);
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
  onData(d) {
    const p = XE(d, this.socket.binaryType);
    this.onPacket(p);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(d) {
    super.emitReserved("packet", d);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(d) {
    this.readyState = "closed", super.emitReserved("close", d);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(d) {
  }
  createUri(d, p = {}) {
    return d + "://" + this._hostname() + this._port() + this.opts.path + this._query(p);
  }
  _hostname() {
    const d = this.opts.hostname;
    return d.indexOf(":") === -1 ? d : "[" + d + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(d) {
    const p = YD(d);
    return p.length ? "?" + p : "";
  }
}
class QD extends JE {
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
  pause(d) {
    this.readyState = "pausing";
    const p = () => {
      this.readyState = "paused", d();
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
  onData(d) {
    const p = (S) => {
      if (this.readyState === "opening" && S.type === "open" && this.onOpen(), S.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(S);
    };
    UD(d, this.socket.binaryType).forEach(p), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const d = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? d() : this.once("open", d);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(d) {
    this.writable = !1, AD(d, (p) => {
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
    const d = this.opts.secure ? "https" : "http", p = this.query || {};
    return this.opts.timestampRequests !== !1 && (p[this.opts.timestampParam] = c_()), !this.supportsBinary && !p.sid && (p.b64 = 1), this.createUri(d, p);
  }
}
let f_ = !1;
try {
  f_ = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const GD = f_;
function KD() {
}
class XD extends QD {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(d) {
    if (super(d), typeof location < "u") {
      const p = location.protocol === "https:";
      let S = location.port;
      S || (S = p ? "443" : "80"), this.xd = typeof location < "u" && d.hostname !== location.hostname || S !== d.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(d, p) {
    const S = this.request({
      method: "POST",
      data: d
    });
    S.on("success", p), S.on("error", (N, I) => {
      this.onError("xhr post error", N, I);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const d = this.request();
    d.on("data", this.onData.bind(this)), d.on("error", (p, S) => {
      this.onError("xhr poll error", p, S);
    }), this.pollXhr = d;
  }
}
class Ko extends ar {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(d, p, S) {
    super(), this.createRequest = d, Sy(this, S), this._opts = S, this._method = S.method || "GET", this._uri = p, this._data = S.data !== void 0 ? S.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var d;
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
      (d = this._opts.cookieJar) === null || d === void 0 || d.addCookies(S), "withCredentials" in S && (S.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (S.timeout = this._opts.requestTimeout), S.onreadystatechange = () => {
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
    typeof document < "u" && (this._index = Ko.requestsCount++, Ko.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(d) {
    this.emitReserved("error", d, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(d) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = KD, d)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ko.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const d = this._xhr.responseText;
    d !== null && (this.emitReserved("data", d), this.emitReserved("success"), this._cleanup());
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
Ko.requestsCount = 0;
Ko.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", JT);
  else if (typeof addEventListener == "function") {
    const m = "onpagehide" in Ni ? "pagehide" : "unload";
    addEventListener(m, JT, !1);
  }
}
function JT() {
  for (let m in Ko.requests)
    Ko.requests.hasOwnProperty(m) && Ko.requests[m].abort();
}
const JD = function() {
  const m = d_({
    xdomain: !1
  });
  return m && m.responseType !== null;
}();
class ZD extends XD {
  constructor(d) {
    super(d);
    const p = d && d.forceBase64;
    this.supportsBinary = JD && !p;
  }
  request(d = {}) {
    return Object.assign(d, { xd: this.xd }, this.opts), new Ko(d_, this.uri(), d);
  }
}
function d_(m) {
  const d = m.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!d || GD))
      return new XMLHttpRequest();
  } catch {
  }
  if (!d)
    try {
      return new Ni[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const p_ = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class eO extends JE {
  get name() {
    return "websocket";
  }
  doOpen() {
    const d = this.uri(), p = this.opts.protocols, S = p_ ? {} : s_(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (S.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(d, p, S);
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
    }, this.ws.onclose = (d) => this.onClose({
      description: "websocket connection closed",
      context: d
    }), this.ws.onmessage = (d) => this.onData(d.data), this.ws.onerror = (d) => this.onError("websocket error", d);
  }
  write(d) {
    this.writable = !1;
    for (let p = 0; p < d.length; p++) {
      const S = d[p], N = p === d.length - 1;
      KE(S, this.supportsBinary, (I) => {
        try {
          this.doWrite(S, I);
        } catch {
        }
        N && gy(() => {
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
    const d = this.opts.secure ? "wss" : "ws", p = this.query || {};
    return this.opts.timestampRequests && (p[this.opts.timestampParam] = c_()), this.supportsBinary || (p.b64 = 1), this.createUri(d, p);
  }
}
const VE = Ni.WebSocket || Ni.MozWebSocket;
class tO extends eO {
  createSocket(d, p, S) {
    return p_ ? new VE(d, p, S) : p ? new VE(d, p) : new VE(d);
  }
  doWrite(d, p) {
    this.ws.send(p);
  }
}
class nO extends JE {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (d) {
      return this.emitReserved("error", d);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((d) => {
      this.onError("webtransport error", d);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((d) => {
        const p = FD(Number.MAX_SAFE_INTEGER, this.socket.binaryType), S = d.readable.pipeThrough(p).getReader(), N = zD();
        N.readable.pipeTo(d.writable), this._writer = N.writable.getWriter();
        const I = () => {
          S.read().then(({ done: R, value: le }) => {
            R || (this.onPacket(le), I());
          }).catch((R) => {
          });
        };
        I();
        const ee = { type: "open" };
        this.query.sid && (ee.data = `{"sid":"${this.query.sid}"}`), this._writer.write(ee).then(() => this.onOpen());
      });
    });
  }
  write(d) {
    this.writable = !1;
    for (let p = 0; p < d.length; p++) {
      const S = d[p], N = p === d.length - 1;
      this._writer.write(S).then(() => {
        N && gy(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var d;
    (d = this._transport) === null || d === void 0 || d.close();
  }
}
const rO = {
  websocket: tO,
  webtransport: nO,
  polling: ZD
}, aO = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, iO = [
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
function YE(m) {
  if (m.length > 8e3)
    throw "URI too long";
  const d = m, p = m.indexOf("["), S = m.indexOf("]");
  p != -1 && S != -1 && (m = m.substring(0, p) + m.substring(p, S).replace(/:/g, ";") + m.substring(S, m.length));
  let N = aO.exec(m || ""), I = {}, ee = 14;
  for (; ee--; )
    I[iO[ee]] = N[ee] || "";
  return p != -1 && S != -1 && (I.source = d, I.host = I.host.substring(1, I.host.length - 1).replace(/;/g, ":"), I.authority = I.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), I.ipv6uri = !0), I.pathNames = oO(I, I.path), I.queryKey = lO(I, I.query), I;
}
function oO(m, d) {
  const p = /\/{2,9}/g, S = d.replace(p, "/").split("/");
  return (d.slice(0, 1) == "/" || d.length === 0) && S.splice(0, 1), d.slice(-1) == "/" && S.splice(S.length - 1, 1), S;
}
function lO(m, d) {
  const p = {};
  return d.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(S, N, I) {
    N && (p[N] = I);
  }), p;
}
const qE = typeof addEventListener == "function" && typeof removeEventListener == "function", hy = [];
qE && addEventListener("offline", () => {
  hy.forEach((m) => m());
}, !1);
class Gu extends ar {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(d, p) {
    if (super(), this.binaryType = HD, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, d && typeof d == "object" && (p = d, d = null), d) {
      const S = YE(d);
      p.hostname = S.host, p.secure = S.protocol === "https" || S.protocol === "wss", p.port = S.port, S.query && (p.query = S.query);
    } else p.host && (p.hostname = YE(p.host).host);
    Sy(this, p), this.secure = p.secure != null ? p.secure : typeof location < "u" && location.protocol === "https:", p.hostname && !p.port && (p.port = this.secure ? "443" : "80"), this.hostname = p.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = p.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, p.transports.forEach((S) => {
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
    }, p), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = qD(this.opts.query)), qE && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, hy.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(d) {
    const p = Object.assign({}, this.opts.query);
    p.EIO = u_, p.transport = d, this.id && (p.sid = this.id);
    const S = Object.assign({}, this.opts, {
      query: p,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[d]);
    return new this._transportsByName[d](S);
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
    const d = this.opts.rememberUpgrade && Gu.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const p = this.createTransport(d);
    p.open(), this.setTransport(p);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(d) {
    this.transport && this.transport.removeAllListeners(), this.transport = d, d.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (p) => this._onClose("transport close", p));
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
  _onPacket(d) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", d), this.emitReserved("heartbeat"), d.type) {
        case "open":
          this.onHandshake(JSON.parse(d.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const p = new Error("server error");
          p.code = d.data, this._onError(p);
          break;
        case "message":
          this.emitReserved("data", d.data), this.emitReserved("message", d.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(d) {
    this.emitReserved("handshake", d), this.id = d.sid, this.transport.query.sid = d.sid, this._pingInterval = d.pingInterval, this._pingTimeout = d.pingTimeout, this._maxPayload = d.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const d = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + d, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, d), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const d = this._getWritablePackets();
      this.transport.send(d), this._prevBufferLen = d.length, this.emitReserved("flush");
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
      if (N && (p += $D(N)), S > 0 && p > this._maxPayload)
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
    const d = Date.now() > this._pingTimeoutTime;
    return d && (this._pingTimeoutTime = 0, gy(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), d;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(d, p, S) {
    return this._sendPacket("message", d, p, S), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(d, p, S) {
    return this._sendPacket("message", d, p, S), this;
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
  _sendPacket(d, p, S, N) {
    if (typeof p == "function" && (N = p, p = void 0), typeof S == "function" && (N = S, S = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    S = S || {}, S.compress = S.compress !== !1;
    const I = {
      type: d,
      data: p,
      options: S
    };
    this.emitReserved("packetCreate", I), this.writeBuffer.push(I), N && this.once("flush", N), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const d = () => {
      this._onClose("forced close"), this.transport.close();
    }, p = () => {
      this.off("upgrade", p), this.off("upgradeError", p), d();
    }, S = () => {
      this.once("upgrade", p), this.once("upgradeError", p);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? S() : d();
    }) : this.upgrading ? S() : d()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(d) {
    if (Gu.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", d), this._onClose("transport error", d);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(d, p) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), qE && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const S = hy.indexOf(this._offlineEventListener);
        S !== -1 && hy.splice(S, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", d, p), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Gu.protocol = u_;
class uO extends Gu {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let d = 0; d < this._upgrades.length; d++)
        this._probe(this._upgrades[d]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(d) {
    let p = this.createTransport(d), S = !1;
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
    function I() {
      S || (S = !0, ie(), p.close(), p = null);
    }
    const ee = (Oe) => {
      const ne = new Error("probe error: " + Oe);
      ne.transport = p.name, I(), this.emitReserved("upgradeError", ne);
    };
    function R() {
      ee("transport closed");
    }
    function le() {
      ee("socket closed");
    }
    function ue(Oe) {
      p && Oe.name !== p.name && I();
    }
    const ie = () => {
      p.removeListener("open", N), p.removeListener("error", ee), p.removeListener("close", R), this.off("close", le), this.off("upgrading", ue);
    };
    p.once("open", N), p.once("error", ee), p.once("close", R), this.once("close", le), this.once("upgrading", ue), this._upgrades.indexOf("webtransport") !== -1 && d !== "webtransport" ? this.setTimeoutFn(() => {
      S || p.open();
    }, 200) : p.open();
  }
  onHandshake(d) {
    this._upgrades = this._filterUpgrades(d.upgrades), super.onHandshake(d);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(d) {
    const p = [];
    for (let S = 0; S < d.length; S++)
      ~this.transports.indexOf(d[S]) && p.push(d[S]);
    return p;
  }
}
let sO = class extends uO {
  constructor(d, p = {}) {
    const S = typeof d == "object" ? d : p;
    (!S.transports || S.transports && typeof S.transports[0] == "string") && (S.transports = (S.transports || ["polling", "websocket", "webtransport"]).map((N) => rO[N]).filter((N) => !!N)), super(d, S);
  }
};
function cO(m, d = "", p) {
  let S = m;
  p = p || typeof location < "u" && location, m == null && (m = p.protocol + "//" + p.host), typeof m == "string" && (m.charAt(0) === "/" && (m.charAt(1) === "/" ? m = p.protocol + m : m = p.host + m), /^(https?|wss?):\/\//.test(m) || (typeof p < "u" ? m = p.protocol + "//" + m : m = "https://" + m), S = YE(m)), S.port || (/^(http|ws)$/.test(S.protocol) ? S.port = "80" : /^(http|ws)s$/.test(S.protocol) && (S.port = "443")), S.path = S.path || "/";
  const I = S.host.indexOf(":") !== -1 ? "[" + S.host + "]" : S.host;
  return S.id = S.protocol + "://" + I + ":" + S.port + d, S.href = S.protocol + "://" + I + (p && p.port === S.port ? "" : ":" + S.port), S;
}
const fO = typeof ArrayBuffer == "function", dO = (m) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(m) : m.buffer instanceof ArrayBuffer, v_ = Object.prototype.toString, pO = typeof Blob == "function" || typeof Blob < "u" && v_.call(Blob) === "[object BlobConstructor]", vO = typeof File == "function" || typeof File < "u" && v_.call(File) === "[object FileConstructor]";
function ZE(m) {
  return fO && (m instanceof ArrayBuffer || dO(m)) || pO && m instanceof Blob || vO && m instanceof File;
}
function my(m, d) {
  if (!m || typeof m != "object")
    return !1;
  if (Array.isArray(m)) {
    for (let p = 0, S = m.length; p < S; p++)
      if (my(m[p]))
        return !0;
    return !1;
  }
  if (ZE(m))
    return !0;
  if (m.toJSON && typeof m.toJSON == "function" && arguments.length === 1)
    return my(m.toJSON(), !0);
  for (const p in m)
    if (Object.prototype.hasOwnProperty.call(m, p) && my(m[p]))
      return !0;
  return !1;
}
function hO(m) {
  const d = [], p = m.data, S = m;
  return S.data = WE(p, d), S.attachments = d.length, { packet: S, buffers: d };
}
function WE(m, d) {
  if (!m)
    return m;
  if (ZE(m)) {
    const p = { _placeholder: !0, num: d.length };
    return d.push(m), p;
  } else if (Array.isArray(m)) {
    const p = new Array(m.length);
    for (let S = 0; S < m.length; S++)
      p[S] = WE(m[S], d);
    return p;
  } else if (typeof m == "object" && !(m instanceof Date)) {
    const p = {};
    for (const S in m)
      Object.prototype.hasOwnProperty.call(m, S) && (p[S] = WE(m[S], d));
    return p;
  }
  return m;
}
function mO(m, d) {
  return m.data = QE(m.data, d), delete m.attachments, m;
}
function QE(m, d) {
  if (!m)
    return m;
  if (m && m._placeholder === !0) {
    if (typeof m.num == "number" && m.num >= 0 && m.num < d.length)
      return d[m.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(m))
    for (let p = 0; p < m.length; p++)
      m[p] = QE(m[p], d);
  else if (typeof m == "object")
    for (const p in m)
      Object.prototype.hasOwnProperty.call(m, p) && (m[p] = QE(m[p], d));
  return m;
}
const yO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], gO = 5;
var Dt;
(function(m) {
  m[m.CONNECT = 0] = "CONNECT", m[m.DISCONNECT = 1] = "DISCONNECT", m[m.EVENT = 2] = "EVENT", m[m.ACK = 3] = "ACK", m[m.CONNECT_ERROR = 4] = "CONNECT_ERROR", m[m.BINARY_EVENT = 5] = "BINARY_EVENT", m[m.BINARY_ACK = 6] = "BINARY_ACK";
})(Dt || (Dt = {}));
class SO {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(d) {
    this.replacer = d;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(d) {
    return (d.type === Dt.EVENT || d.type === Dt.ACK) && my(d) ? this.encodeAsBinary({
      type: d.type === Dt.EVENT ? Dt.BINARY_EVENT : Dt.BINARY_ACK,
      nsp: d.nsp,
      data: d.data,
      id: d.id
    }) : [this.encodeAsString(d)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(d) {
    let p = "" + d.type;
    return (d.type === Dt.BINARY_EVENT || d.type === Dt.BINARY_ACK) && (p += d.attachments + "-"), d.nsp && d.nsp !== "/" && (p += d.nsp + ","), d.id != null && (p += d.id), d.data != null && (p += JSON.stringify(d.data, this.replacer)), p;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(d) {
    const p = hO(d), S = this.encodeAsString(p.packet), N = p.buffers;
    return N.unshift(S), N;
  }
}
function ZT(m) {
  return Object.prototype.toString.call(m) === "[object Object]";
}
class e0 extends ar {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(d) {
    super(), this.reviver = d;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(d) {
    let p;
    if (typeof d == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      p = this.decodeString(d);
      const S = p.type === Dt.BINARY_EVENT;
      S || p.type === Dt.BINARY_ACK ? (p.type = S ? Dt.EVENT : Dt.ACK, this.reconstructor = new EO(p), p.attachments === 0 && super.emitReserved("decoded", p)) : super.emitReserved("decoded", p);
    } else if (ZE(d) || d.base64)
      if (this.reconstructor)
        p = this.reconstructor.takeBinaryData(d), p && (this.reconstructor = null, super.emitReserved("decoded", p));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + d);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(d) {
    let p = 0;
    const S = {
      type: Number(d.charAt(0))
    };
    if (Dt[S.type] === void 0)
      throw new Error("unknown packet type " + S.type);
    if (S.type === Dt.BINARY_EVENT || S.type === Dt.BINARY_ACK) {
      const I = p + 1;
      for (; d.charAt(++p) !== "-" && p != d.length; )
        ;
      const ee = d.substring(I, p);
      if (ee != Number(ee) || d.charAt(p) !== "-")
        throw new Error("Illegal attachments");
      S.attachments = Number(ee);
    }
    if (d.charAt(p + 1) === "/") {
      const I = p + 1;
      for (; ++p && !(d.charAt(p) === "," || p === d.length); )
        ;
      S.nsp = d.substring(I, p);
    } else
      S.nsp = "/";
    const N = d.charAt(p + 1);
    if (N !== "" && Number(N) == N) {
      const I = p + 1;
      for (; ++p; ) {
        const ee = d.charAt(p);
        if (ee == null || Number(ee) != ee) {
          --p;
          break;
        }
        if (p === d.length)
          break;
      }
      S.id = Number(d.substring(I, p + 1));
    }
    if (d.charAt(++p)) {
      const I = this.tryParse(d.substr(p));
      if (e0.isPayloadValid(S.type, I))
        S.data = I;
      else
        throw new Error("invalid payload");
    }
    return S;
  }
  tryParse(d) {
    try {
      return JSON.parse(d, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(d, p) {
    switch (d) {
      case Dt.CONNECT:
        return ZT(p);
      case Dt.DISCONNECT:
        return p === void 0;
      case Dt.CONNECT_ERROR:
        return typeof p == "string" || ZT(p);
      case Dt.EVENT:
      case Dt.BINARY_EVENT:
        return Array.isArray(p) && (typeof p[0] == "number" || typeof p[0] == "string" && yO.indexOf(p[0]) === -1);
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
class EO {
  constructor(d) {
    this.packet = d, this.buffers = [], this.reconPack = d;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(d) {
    if (this.buffers.push(d), this.buffers.length === this.reconPack.attachments) {
      const p = mO(this.reconPack, this.buffers);
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
const CO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: e0,
  Encoder: SO,
  get PacketType() {
    return Dt;
  },
  protocol: gO
}, Symbol.toStringTag, { value: "Module" }));
function so(m, d, p) {
  return m.on(d, p), function() {
    m.off(d, p);
  };
}
const RO = Object.freeze({
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
  constructor(d, p, S) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = d, this.nsp = p, S && S.auth && (this.auth = S.auth), this._opts = Object.assign({}, S), this.io._autoConnect && this.open();
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
    const d = this.io;
    this.subs = [
      so(d, "open", this.onopen.bind(this)),
      so(d, "packet", this.onpacket.bind(this)),
      so(d, "error", this.onerror.bind(this)),
      so(d, "close", this.onclose.bind(this))
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
  send(...d) {
    return d.unshift("message"), this.emit.apply(this, d), this;
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
  emit(d, ...p) {
    var S, N, I;
    if (RO.hasOwnProperty(d))
      throw new Error('"' + d.toString() + '" is a reserved event name');
    if (p.unshift(d), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(p), this;
    const ee = {
      type: Dt.EVENT,
      data: p
    };
    if (ee.options = {}, ee.options.compress = this.flags.compress !== !1, typeof p[p.length - 1] == "function") {
      const ie = this.ids++, Oe = p.pop();
      this._registerAckCallback(ie, Oe), ee.id = ie;
    }
    const R = (N = (S = this.io.engine) === null || S === void 0 ? void 0 : S.transport) === null || N === void 0 ? void 0 : N.writable, le = this.connected && !(!((I = this.io.engine) === null || I === void 0) && I._hasPingExpired());
    return this.flags.volatile && !R || (le ? (this.notifyOutgoingListeners(ee), this.packet(ee)) : this.sendBuffer.push(ee)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(d, p) {
    var S;
    const N = (S = this.flags.timeout) !== null && S !== void 0 ? S : this._opts.ackTimeout;
    if (N === void 0) {
      this.acks[d] = p;
      return;
    }
    const I = this.io.setTimeoutFn(() => {
      delete this.acks[d];
      for (let R = 0; R < this.sendBuffer.length; R++)
        this.sendBuffer[R].id === d && this.sendBuffer.splice(R, 1);
      p.call(this, new Error("operation has timed out"));
    }, N), ee = (...R) => {
      this.io.clearTimeoutFn(I), p.apply(this, R);
    };
    ee.withError = !0, this.acks[d] = ee;
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
  emitWithAck(d, ...p) {
    return new Promise((S, N) => {
      const I = (ee, R) => ee ? N(ee) : S(R);
      I.withError = !0, p.push(I), this.emit(d, ...p);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(d) {
    let p;
    typeof d[d.length - 1] == "function" && (p = d.pop());
    const S = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: d,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    d.push((N, ...I) => S !== this._queue[0] ? void 0 : (N !== null ? S.tryCount > this._opts.retries && (this._queue.shift(), p && p(N)) : (this._queue.shift(), p && p(null, ...I)), S.pending = !1, this._drainQueue())), this._queue.push(S), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(d = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const p = this._queue[0];
    p.pending && !d || (p.pending = !0, p.tryCount++, this.flags = p.flags, this.emit.apply(this, p.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(d) {
    d.nsp = this.nsp, this.io._packet(d);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((d) => {
      this._sendConnectPacket(d);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(d) {
    this.packet({
      type: Dt.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, d) : d
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(d) {
    this.connected || this.emitReserved("connect_error", d);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(d, p) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", d, p), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((d) => {
      if (!this.sendBuffer.some((S) => String(S.id) === d)) {
        const S = this.acks[d];
        delete this.acks[d], S.withError && S.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(d) {
    if (d.nsp === this.nsp)
      switch (d.type) {
        case Dt.CONNECT:
          d.data && d.data.sid ? this.onconnect(d.data.sid, d.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Dt.EVENT:
        case Dt.BINARY_EVENT:
          this.onevent(d);
          break;
        case Dt.ACK:
        case Dt.BINARY_ACK:
          this.onack(d);
          break;
        case Dt.DISCONNECT:
          this.ondisconnect();
          break;
        case Dt.CONNECT_ERROR:
          this.destroy();
          const S = new Error(d.data.message);
          S.data = d.data.data, this.emitReserved("connect_error", S);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(d) {
    const p = d.data || [];
    d.id != null && p.push(this.ack(d.id)), this.connected ? this.emitEvent(p) : this.receiveBuffer.push(Object.freeze(p));
  }
  emitEvent(d) {
    if (this._anyListeners && this._anyListeners.length) {
      const p = this._anyListeners.slice();
      for (const S of p)
        S.apply(this, d);
    }
    super.emit.apply(this, d), this._pid && d.length && typeof d[d.length - 1] == "string" && (this._lastOffset = d[d.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(d) {
    const p = this;
    let S = !1;
    return function(...N) {
      S || (S = !0, p.packet({
        type: Dt.ACK,
        id: d,
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
  onack(d) {
    const p = this.acks[d.id];
    typeof p == "function" && (delete this.acks[d.id], p.withError && d.data.unshift(null), p.apply(this, d.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(d, p) {
    this.id = d, this.recovered = p && this._pid === p, this._pid = p, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((d) => this.emitEvent(d)), this.receiveBuffer = [], this.sendBuffer.forEach((d) => {
      this.notifyOutgoingListeners(d), this.packet(d);
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
    this.subs && (this.subs.forEach((d) => d()), this.subs = void 0), this.io._destroy(this);
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
  compress(d) {
    return this.flags.compress = d, this;
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
  timeout(d) {
    return this.flags.timeout = d, this;
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
  onAny(d) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(d), this;
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
  prependAny(d) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(d), this;
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
  offAny(d) {
    if (!this._anyListeners)
      return this;
    if (d) {
      const p = this._anyListeners;
      for (let S = 0; S < p.length; S++)
        if (d === p[S])
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
  onAnyOutgoing(d) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(d), this;
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
  prependAnyOutgoing(d) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(d), this;
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
  offAnyOutgoing(d) {
    if (!this._anyOutgoingListeners)
      return this;
    if (d) {
      const p = this._anyOutgoingListeners;
      for (let S = 0; S < p.length; S++)
        if (d === p[S])
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
  notifyOutgoingListeners(d) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const p = this._anyOutgoingListeners.slice();
      for (const S of p)
        S.apply(this, d.data);
    }
  }
}
function od(m) {
  m = m || {}, this.ms = m.min || 100, this.max = m.max || 1e4, this.factor = m.factor || 2, this.jitter = m.jitter > 0 && m.jitter <= 1 ? m.jitter : 0, this.attempts = 0;
}
od.prototype.duration = function() {
  var m = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var d = Math.random(), p = Math.floor(d * this.jitter * m);
    m = (Math.floor(d * 10) & 1) == 0 ? m - p : m + p;
  }
  return Math.min(m, this.max) | 0;
};
od.prototype.reset = function() {
  this.attempts = 0;
};
od.prototype.setMin = function(m) {
  this.ms = m;
};
od.prototype.setMax = function(m) {
  this.max = m;
};
od.prototype.setJitter = function(m) {
  this.jitter = m;
};
class GE extends ar {
  constructor(d, p) {
    var S;
    super(), this.nsps = {}, this.subs = [], d && typeof d == "object" && (p = d, d = void 0), p = p || {}, p.path = p.path || "/socket.io", this.opts = p, Sy(this, p), this.reconnection(p.reconnection !== !1), this.reconnectionAttempts(p.reconnectionAttempts || 1 / 0), this.reconnectionDelay(p.reconnectionDelay || 1e3), this.reconnectionDelayMax(p.reconnectionDelayMax || 5e3), this.randomizationFactor((S = p.randomizationFactor) !== null && S !== void 0 ? S : 0.5), this.backoff = new od({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(p.timeout == null ? 2e4 : p.timeout), this._readyState = "closed", this.uri = d;
    const N = p.parser || CO;
    this.encoder = new N.Encoder(), this.decoder = new N.Decoder(), this._autoConnect = p.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(d) {
    return arguments.length ? (this._reconnection = !!d, d || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(d) {
    return d === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = d, this);
  }
  reconnectionDelay(d) {
    var p;
    return d === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = d, (p = this.backoff) === null || p === void 0 || p.setMin(d), this);
  }
  randomizationFactor(d) {
    var p;
    return d === void 0 ? this._randomizationFactor : (this._randomizationFactor = d, (p = this.backoff) === null || p === void 0 || p.setJitter(d), this);
  }
  reconnectionDelayMax(d) {
    var p;
    return d === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = d, (p = this.backoff) === null || p === void 0 || p.setMax(d), this);
  }
  timeout(d) {
    return arguments.length ? (this._timeout = d, this) : this._timeout;
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
  open(d) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new sO(this.uri, this.opts);
    const p = this.engine, S = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const N = so(p, "open", function() {
      S.onopen(), d && d();
    }), I = (R) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", R), d ? d(R) : this.maybeReconnectOnOpen();
    }, ee = so(p, "error", I);
    if (this._timeout !== !1) {
      const R = this._timeout, le = this.setTimeoutFn(() => {
        N(), I(new Error("timeout")), p.close();
      }, R);
      this.opts.autoUnref && le.unref(), this.subs.push(() => {
        this.clearTimeoutFn(le);
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
  connect(d) {
    return this.open(d);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const d = this.engine;
    this.subs.push(
      so(d, "ping", this.onping.bind(this)),
      so(d, "data", this.ondata.bind(this)),
      so(d, "error", this.onerror.bind(this)),
      so(d, "close", this.onclose.bind(this)),
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
  ondata(d) {
    try {
      this.decoder.add(d);
    } catch (p) {
      this.onclose("parse error", p);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(d) {
    gy(() => {
      this.emitReserved("packet", d);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(d) {
    this.emitReserved("error", d);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(d, p) {
    let S = this.nsps[d];
    return S ? this._autoConnect && !S.active && S.connect() : (S = new h_(this, d, p), this.nsps[d] = S), S;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(d) {
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
  _packet(d) {
    const p = this.encoder.encode(d);
    for (let S = 0; S < p.length; S++)
      this.engine.write(p[S], d.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((d) => d()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(d, p) {
    var S;
    this.cleanup(), (S = this.engine) === null || S === void 0 || S.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", d, p), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const d = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const p = this.backoff.duration();
      this._reconnecting = !0;
      const S = this.setTimeoutFn(() => {
        d.skipReconnect || (this.emitReserved("reconnect_attempt", d.backoff.attempts), !d.skipReconnect && d.open((N) => {
          N ? (d._reconnecting = !1, d.reconnect(), this.emitReserved("reconnect_error", N)) : d.onreconnect();
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
    const d = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", d);
  }
}
const cv = {};
function yy(m, d) {
  typeof m == "object" && (d = m, m = void 0), d = d || {};
  const p = cO(m, d.path || "/socket.io"), S = p.source, N = p.id, I = p.path, ee = cv[N] && I in cv[N].nsps, R = d.forceNew || d["force new connection"] || d.multiplex === !1 || ee;
  let le;
  return R ? le = new GE(S, d) : (cv[N] || (cv[N] = new GE(S, d)), le = cv[N]), p.query && !d.query && (d.query = p.queryKey), le.socket(p.path, d);
}
Object.assign(yy, {
  Manager: GE,
  Socket: h_,
  io: yy,
  connect: yy
});
const Yr = [];
for (let m = 0; m < 256; ++m)
  Yr.push((m + 256).toString(16).slice(1));
function TO(m, d = 0) {
  return (Yr[m[d + 0]] + Yr[m[d + 1]] + Yr[m[d + 2]] + Yr[m[d + 3]] + "-" + Yr[m[d + 4]] + Yr[m[d + 5]] + "-" + Yr[m[d + 6]] + Yr[m[d + 7]] + "-" + Yr[m[d + 8]] + Yr[m[d + 9]] + "-" + Yr[m[d + 10]] + Yr[m[d + 11]] + Yr[m[d + 12]] + Yr[m[d + 13]] + Yr[m[d + 14]] + Yr[m[d + 15]]).toLowerCase();
}
let $E;
const _O = new Uint8Array(16);
function wO() {
  if (!$E) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $E = crypto.getRandomValues.bind(crypto);
  }
  return $E(_O);
}
const bO = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), e_ = { randomUUID: bO };
function xO(m, d, p) {
  var N;
  if (e_.randomUUID && !m)
    return e_.randomUUID();
  m = m || {};
  const S = m.random ?? ((N = m.rng) == null ? void 0 : N.call(m)) ?? wO();
  if (S.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, TO(S);
}
const m_ = co.createContext(null), kO = ({ children: m }) => {
  const [d, p] = co.useState(null), [S, N] = co.useState(!1), I = xO();
  return co.useEffect(() => {
    const R = yy("https://service-capture-437894375097.us-central1.run.app", { autoConnect: !0 });
    return p(R), R.on("connect", () => {
      N(!0);
    }), R.on("message", () => {
      N(!1);
    }), () => {
      R.disconnect();
    };
  }, []), /* @__PURE__ */ vc.jsx(m_.Provider, { value: { online: S, id: I, socket: d }, children: m });
}, DO = () => {
  const m = co.useContext(m_);
  if (!m)
    throw new Error("useSocket must be used within a SocketContextProvider");
  return m;
}, OO = ({ secret: m, user: d }) => {
  const { online: p, id: S, socket: N } = DO(), I = co.useCallback(({ type: R, data: le }) => {
    let ue = {};
    R === "success" && (ue = {
      type: "success",
      message: "The image capture was successful.",
      ...le
    }, window.dispatchEvent(
      new CustomEvent("multi-event", { detail: { ...ue } })
    )), R === "finish" && (ue = {
      type: "finish"
    }, window.dispatchEvent(
      new CustomEvent("multi-event", { detail: { ...ue } })
    )), R === "close" && (ue = {
      type: "close"
    }, window.dispatchEvent(
      new CustomEvent("multi-event", { detail: { ...ue } })
    )), R === "timeout" && (ue = {
      type: "timeout"
    }, window.dispatchEvent(
      new CustomEvent("multi-event", { detail: { ...ue } })
    ));
  }, []), ee = co.useCallback((R) => {
    if (R.data.source === "go-saffe-capture")
      switch (R.data.payload.event) {
        case "close":
          return I({ type: "close" });
        case "finish":
          return I({ type: "finish" });
        case "timeout":
          return I({ type: "timeout" });
      }
  }, []);
  return co.useEffect(() => (window.addEventListener("message", ee), () => {
    window.removeEventListener("message", ee);
  }), [ee]), co.useEffect(() => {
    if (p)
      return N.on("message", (R) => {
        const le = {
          id: R.end2end_id,
          base64: R.image.base64
        };
        I({ type: "success", data: le });
      }), () => {
        N.off("message");
      };
  }, [p]), /* @__PURE__ */ vc.jsx(vc.Fragment, { children: p && /* @__PURE__ */ vc.jsx(
    DD,
    {
      captureKey: m,
      endToEndId: S,
      type: "verification",
      user: d
    }
  ) });
}, LO = ({ secret: m, user: d }) => /* @__PURE__ */ vc.jsx(kO, { children: /* @__PURE__ */ vc.jsx(
  OO,
  {
    secret: m,
    user: d
  }
) }), NO = wD(LO, {
  props: {
    secret: "string",
    user: "string"
  }
});
customElements.get("multi-id-capture") && customElements.delete("multi-id-capture");
customElements.define("multi-id-capture", NO);
