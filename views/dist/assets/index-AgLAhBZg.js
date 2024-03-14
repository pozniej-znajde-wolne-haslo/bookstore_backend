function Yd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var hu = { exports: {} },
  Vl = {},
  mu = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cr = Symbol.for('react.element'),
  Jd = Symbol.for('react.portal'),
  Xd = Symbol.for('react.fragment'),
  Zd = Symbol.for('react.strict_mode'),
  qd = Symbol.for('react.profiler'),
  bd = Symbol.for('react.provider'),
  ef = Symbol.for('react.context'),
  tf = Symbol.for('react.forward_ref'),
  nf = Symbol.for('react.suspense'),
  rf = Symbol.for('react.memo'),
  lf = Symbol.for('react.lazy'),
  Qs = Symbol.iterator;
function of(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Qs && e[Qs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var vu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gu = Object.assign,
  yu = {};
function zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yu),
    (this.updater = n || vu);
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function xu() {}
xu.prototype = zn.prototype;
function Vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yu),
    (this.updater = n || vu);
}
var Qi = (Vi.prototype = new xu());
Qi.constructor = Vi;
gu(Qi, zn.prototype);
Qi.isPureReactComponent = !0;
var Gs = Array.isArray,
  wu = Object.prototype.hasOwnProperty,
  Gi = { current: null },
  ku = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      wu.call(t, r) && !ku.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Cr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Gi.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: Cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Cr;
}
function af(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ys = /\/+/g;
function go(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? af('' + e.key)
    : t.toString(36);
}
function br(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Cr:
          case Jd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + go(i, 0) : r),
      Gs(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ys, '$&/') + '/'),
          br(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Yi(l) &&
            (l = sf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ys, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Gs(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + go(o, a);
      i += br(o, t, n, u, l);
    }
  else if (((u = of(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + go(o, a++)), (i += br(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    br(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function uf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  el = { transition: null },
  cf = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: el,
    ReactCurrentOwner: Gi,
  };
D.Children = {
  map: zr,
  forEach: function (e, t, n) {
    zr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yi(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
D.Component = zn;
D.Fragment = Xd;
D.Profiler = qd;
D.PureComponent = Vi;
D.StrictMode = Zd;
D.Suspense = nf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = gu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Gi.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      wu.call(t, u) &&
        !ku.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: ef,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bd, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = ju;
D.createFactory = function (e) {
  var t = ju.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: tf, render: e };
};
D.isValidElement = Yi;
D.lazy = function (e) {
  return { $$typeof: lf, _payload: { _status: -1, _result: e }, _init: uf };
};
D.memo = function (e, t) {
  return { $$typeof: rf, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = el.transition;
  el.transition = {};
  try {
    e();
  } finally {
    el.transition = t;
  }
};
D.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
D.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return xe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
D.useId = function () {
  return xe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return xe.current.useRef(e);
};
D.useState = function (e) {
  return xe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return xe.current.useTransition();
};
D.version = '18.2.0';
mu.exports = D;
var g = mu.exports;
const ot = Kd(g),
  df = Yd({ __proto__: null, default: ot }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = g,
  pf = Symbol.for('react.element'),
  hf = Symbol.for('react.fragment'),
  mf = Object.prototype.hasOwnProperty,
  vf = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Su(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) mf.call(t, r) && !gf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: vf.current,
  };
}
Vl.Fragment = hf;
Vl.jsx = Su;
Vl.jsxs = Su;
hu.exports = Vl;
var s = hu.exports,
  Vo = {},
  Nu = { exports: {} },
  Fe = {},
  Cu = { exports: {} },
  Eu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, F) {
    var L = P.length;
    P.push(F);
    e: for (; 0 < L; ) {
      var V = (L - 1) >>> 1,
        q = P[V];
      if (0 < l(q, F)) (P[V] = F), (P[L] = q), (L = V);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var F = P[0],
      L = P.pop();
    if (L !== F) {
      P[0] = L;
      e: for (var V = 0, q = P.length, R = q >>> 1; V < R; ) {
        var O = 2 * (V + 1) - 1,
          M = P[O],
          I = O + 1,
          se = P[I];
        if (0 > l(M, L))
          I < q && 0 > l(se, M)
            ? ((P[V] = se), (P[I] = L), (V = I))
            : ((P[V] = M), (P[O] = L), (V = O));
        else if (I < q && 0 > l(se, L)) (P[V] = se), (P[I] = L), (V = I);
        else break e;
      }
    }
    return F;
  }
  function l(P, F) {
    var L = P.sortIndex - F.sortIndex;
    return L !== 0 ? L : P.id - F.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    h = 1,
    v = null,
    p = 3,
    y = !1,
    x = !1,
    w = !1,
    j = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= P)
        r(c), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(c);
    }
  }
  function k(P) {
    if (((w = !1), m(P), !x))
      if (n(u) !== null) (x = !0), Mt(S);
      else {
        var F = n(c);
        F !== null && be(k, F.startTime - P);
      }
  }
  function S(P, F) {
    (x = !1), w && ((w = !1), d(T), (T = -1)), (y = !0);
    var L = p;
    try {
      for (
        m(F), v = n(u);
        v !== null && (!(v.expirationTime > F) || (P && !te()));

      ) {
        var V = v.callback;
        if (typeof V == 'function') {
          (v.callback = null), (p = v.priorityLevel);
          var q = V(v.expirationTime <= F);
          (F = e.unstable_now()),
            typeof q == 'function' ? (v.callback = q) : v === n(u) && r(u),
            m(F);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var R = !0;
      else {
        var O = n(c);
        O !== null && be(k, O.startTime - F), (R = !1);
      }
      return R;
    } finally {
      (v = null), (p = L), (y = !1);
    }
  }
  var E = !1,
    C = null,
    T = -1,
    $ = 5,
    z = -1;
  function te() {
    return !(e.unstable_now() - z < $);
  }
  function Ze() {
    if (C !== null) {
      var P = e.unstable_now();
      z = P;
      var F = !0;
      try {
        F = C(!0, P);
      } finally {
        F ? qe() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var qe;
  if (typeof f == 'function')
    qe = function () {
      f(Ze);
    };
  else if (typeof MessageChannel < 'u') {
    var rn = new MessageChannel(),
      ln = rn.port2;
    (rn.port1.onmessage = Ze),
      (qe = function () {
        ln.postMessage(null);
      });
  } else
    qe = function () {
      j(Ze, 0);
    };
  function Mt(P) {
    (C = P), E || ((E = !0), qe());
  }
  function be(P, F) {
    T = j(function () {
      P(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || y || ((x = !0), Mt(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = p;
      }
      var L = p;
      p = F;
      try {
        return P();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, F) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = p;
      p = P;
      try {
        return F();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, F, L) {
      var V = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? V + L : V))
          : (L = V),
        P)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = L + q),
        (P = {
          id: h++,
          callback: F,
          priorityLevel: P,
          startTime: L,
          expirationTime: q,
          sortIndex: -1,
        }),
        L > V
          ? ((P.sortIndex = L),
            t(c, P),
            n(u) === null &&
              P === n(c) &&
              (w ? (d(T), (T = -1)) : (w = !0), be(k, L - V)))
          : ((P.sortIndex = q), t(u, P), x || y || ((x = !0), Mt(S))),
        P
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (P) {
      var F = p;
      return function () {
        var L = p;
        p = F;
        try {
          return P.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(Eu);
Cu.exports = Eu;
var yf = Cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pu = g,
  Oe = yf;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var _u = new Set(),
  or = {};
function en(e, t) {
  Cn(e, t), Cn(e + 'Capture', t);
}
function Cn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) _u.add(t[e]);
}
var st = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Qo = Object.prototype.hasOwnProperty,
  xf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ks = {},
  Js = {};
function wf(e) {
  return Qo.call(Js, e)
    ? !0
    : Qo.call(Ks, e)
    ? !1
    : xf.test(e)
    ? (Js[e] = !0)
    : ((Ks[e] = !0), !1);
}
function kf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function jf(e, t, n, r) {
  if (t === null || typeof t > 'u' || kf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    de[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ki = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ki, Ji);
    de[t] = new we(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ki, Ji);
    de[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ki, Ji);
  de[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xi(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (jf(t, n, l, r) && (n = null),
    r || l === null
      ? wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = Pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for('react.element'),
  sn = Symbol.for('react.portal'),
  an = Symbol.for('react.fragment'),
  Zi = Symbol.for('react.strict_mode'),
  Go = Symbol.for('react.profiler'),
  Tu = Symbol.for('react.provider'),
  Ou = Symbol.for('react.context'),
  qi = Symbol.for('react.forward_ref'),
  Yo = Symbol.for('react.suspense'),
  Ko = Symbol.for('react.suspense_list'),
  bi = Symbol.for('react.memo'),
  vt = Symbol.for('react.lazy'),
  Fu = Symbol.for('react.offscreen'),
  Xs = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xs && e[Xs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var K = Object.assign,
  yo;
function Gn(e) {
  if (yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yo = (t && t[1]) || '';
    }
  return (
    `
` +
    yo +
    e
  );
}
var xo = !1;
function wo(e, t) {
  if (!e || xo) return '';
  xo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Gn(e) : '';
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn('Lazy');
    case 13:
      return Gn('Suspense');
    case 19:
      return Gn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = wo(e.type, !1)), e;
    case 11:
      return (e = wo(e.type.render, !1)), e;
    case 1:
      return (e = wo(e.type, !0)), e;
    default:
      return '';
  }
}
function Jo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case an:
      return 'Fragment';
    case sn:
      return 'Portal';
    case Go:
      return 'Profiler';
    case Zi:
      return 'StrictMode';
    case Yo:
      return 'Suspense';
    case Ko:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ou:
        return (e.displayName || 'Context') + '.Consumer';
      case Tu:
        return (e._context.displayName || 'Context') + '.Provider';
      case qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case bi:
        return (
          (t = e.displayName || null), t !== null ? t : Jo(e.type) || 'Memo'
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Jo(e(t));
        } catch {}
    }
  return null;
}
function Nf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Jo(t);
    case 8:
      return t === Zi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ru(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Cf(e) {
  var t = Ru(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ir(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ru(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Lu(e, t) {
  (t = t.checked), t != null && Xi(e, 'checked', t, !1);
}
function Zo(e, t) {
  Lu(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? qo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && qo(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qs(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function qo(e, t, n) {
  (t !== 'number' || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Yn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function bs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Iu(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function $u(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ei(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? $u(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var $r,
  Du = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        $r = $r || document.createElement('div'),
          $r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = $r.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
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
    strokeWidth: !0,
  },
  Ef = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Xn).forEach(function (e) {
  Ef.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
  });
});
function Bu(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Uu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Bu(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pf = K(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function ti(e, t) {
  if (t) {
    if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function ni(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ri = null;
function es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var li = null,
  wn = null,
  kn = null;
function ta(e) {
  if ((e = _r(e))) {
    if (typeof li != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Jl(t)), li(e.stateNode, e.type, t));
  }
}
function Mu(e) {
  wn ? (kn ? kn.push(e) : (kn = [e])) : (wn = e);
}
function Au() {
  if (wn) {
    var e = wn,
      t = kn;
    if (((kn = wn = null), ta(e), t)) for (e = 0; e < t.length; e++) ta(t[e]);
  }
}
function Wu(e, t) {
  return e(t);
}
function Hu() {}
var ko = !1;
function Vu(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return Wu(e, t, n);
  } finally {
    (ko = !1), (wn !== null || kn !== null) && (Hu(), Au());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var oi = !1;
if (st)
  try {
    var Un = {};
    Object.defineProperty(Un, 'passive', {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener('test', Un, Un),
      window.removeEventListener('test', Un, Un);
  } catch {
    oi = !1;
  }
function _f(e, t, n, r, l, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Zn = !1,
  ml = null,
  vl = !1,
  ii = null,
  Tf = {
    onError: function (e) {
      (Zn = !0), (ml = e);
    },
  };
function Of(e, t, n, r, l, o, i, a, u) {
  (Zn = !1), (ml = null), _f.apply(Tf, arguments);
}
function Ff(e, t, n, r, l, o, i, a, u) {
  if ((Of.apply(this, arguments), Zn)) {
    if (Zn) {
      var c = ml;
      (Zn = !1), (ml = null);
    } else throw Error(N(198));
    vl || ((vl = !0), (ii = c));
  }
}
function tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function na(e) {
  if (tn(e) !== e) throw Error(N(188));
}
function Rf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return na(l), e;
        if (o === r) return na(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Gu(e) {
  return (e = Rf(e)), e !== null ? Yu(e) : null;
}
function Yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ku = Oe.unstable_scheduleCallback,
  ra = Oe.unstable_cancelCallback,
  zf = Oe.unstable_shouldYield,
  Lf = Oe.unstable_requestPaint,
  ee = Oe.unstable_now,
  If = Oe.unstable_getCurrentPriorityLevel,
  ts = Oe.unstable_ImmediatePriority,
  Ju = Oe.unstable_UserBlockingPriority,
  gl = Oe.unstable_NormalPriority,
  $f = Oe.unstable_LowPriority,
  Xu = Oe.unstable_IdlePriority,
  Ql = null,
  Je = null;
function Df(e) {
  if (Je && typeof Je.onCommitFiberRoot == 'function')
    try {
      Je.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Mf,
  Bf = Math.log,
  Uf = Math.LN2;
function Mf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bf(e) / Uf) | 0)) | 0;
}
var Dr = 64,
  Br = 4194304;
function Kn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Kn(a)) : ((o &= i), o !== 0 && (r = Kn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Kn(i)) : o !== 0 && (r = Kn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Af(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - He(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Af(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zu() {
  var e = Dr;
  return (Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e;
}
function jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function Hf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - He(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ns(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function qu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bu,
  rs,
  ec,
  tc,
  nc,
  ai = !1,
  Ur = [],
  Nt = null,
  Ct = null,
  Et = null,
  ar = new Map(),
  ur = new Map(),
  yt = [],
  Vf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function la(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Nt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ct = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Et = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ar.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ur.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = _r(t)), t !== null && rs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Nt = Mn(Nt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Ct = Mn(Ct, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Et = Mn(Et, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return ar.set(o, Mn(ar.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), ur.set(o, Mn(ur.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function rc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qu(n)), t !== null)) {
          (e.blockedOn = t),
            nc(e.priority, function () {
              ec(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ri = r), n.target.dispatchEvent(r), (ri = null);
    } else return (t = _r(n)), t !== null && rs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function oa(e, t, n) {
  tl(e) && n.delete(t);
}
function Gf() {
  (ai = !1),
    Nt !== null && tl(Nt) && (Nt = null),
    Ct !== null && tl(Ct) && (Ct = null),
    Et !== null && tl(Et) && (Et = null),
    ar.forEach(oa),
    ur.forEach(oa);
}
function An(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Gf)));
}
function cr(e) {
  function t(l) {
    return An(l, e);
  }
  if (0 < Ur.length) {
    An(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && An(Nt, e),
      Ct !== null && An(Ct, e),
      Et !== null && An(Et, e),
      ar.forEach(t),
      ur.forEach(t),
      n = 0;
    n < yt.length;
    n++
  )
    (r = yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && ((n = yt[0]), n.blockedOn === null); )
    rc(n), n.blockedOn === null && yt.shift();
}
var jn = ft.ReactCurrentBatchConfig,
  xl = !0;
function Yf(e, t, n, r) {
  var l = U,
    o = jn.transition;
  jn.transition = null;
  try {
    (U = 1), ls(e, t, n, r);
  } finally {
    (U = l), (jn.transition = o);
  }
}
function Kf(e, t, n, r) {
  var l = U,
    o = jn.transition;
  jn.transition = null;
  try {
    (U = 4), ls(e, t, n, r);
  } finally {
    (U = l), (jn.transition = o);
  }
}
function ls(e, t, n, r) {
  if (xl) {
    var l = ui(e, t, n, r);
    if (l === null) Ro(e, t, r, wl, n), la(e, r);
    else if (Qf(l, e, t, n, r)) r.stopPropagation();
    else if ((la(e, r), t & 4 && -1 < Vf.indexOf(e))) {
      for (; l !== null; ) {
        var o = _r(l);
        if (
          (o !== null && bu(o),
          (o = ui(e, t, n, r)),
          o === null && Ro(e, t, r, wl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ro(e, t, r, null, n);
  }
}
var wl = null;
function ui(e, t, n, r) {
  if (((wl = null), (e = es(r)), (e = Vt(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wl = e), null;
}
function lc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (If()) {
        case ts:
          return 1;
        case Ju:
          return 4;
        case gl:
        case $f:
          return 16;
        case Xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  os = null,
  nl = null;
function oc() {
  if (nl) return nl;
  var e,
    t = os,
    n = t.length,
    r,
    l = 'value' in kt ? kt.value : kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (nl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function rl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mr() {
  return !0;
}
function ia() {
  return !1;
}
function Re(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Mr
        : ia),
      (this.isPropagationStopped = ia),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Mr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mr));
      },
      persist: function () {},
      isPersistent: Mr,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  is = Re(Ln),
  Pr = K({}, Ln, { view: 0, detail: 0 }),
  Jf = Re(Pr),
  So,
  No,
  Wn,
  Gl = K({}, Pr, {
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
    getModifierState: ss,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wn &&
            (Wn && e.type === 'mousemove'
              ? ((So = e.screenX - Wn.screenX), (No = e.screenY - Wn.screenY))
              : (No = So = 0),
            (Wn = e)),
          So);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : No;
    },
  }),
  sa = Re(Gl),
  Xf = K({}, Gl, { dataTransfer: 0 }),
  Zf = Re(Xf),
  qf = K({}, Pr, { relatedTarget: 0 }),
  Co = Re(qf),
  bf = K({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = Re(bf),
  tp = K({}, Ln, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  np = Re(tp),
  rp = K({}, Ln, { data: 0 }),
  aa = Re(rp),
  lp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  op = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ip = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function sp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function ss() {
  return sp;
}
var ap = K({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = lp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? op[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ss,
    charCode: function (e) {
      return e.type === 'keypress' ? rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? rl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  up = Re(ap),
  cp = K({}, Gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ua = Re(cp),
  dp = K({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ss,
  }),
  fp = Re(dp),
  pp = K({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = Re(pp),
  mp = K({}, Gl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vp = Re(mp),
  gp = [9, 13, 27, 32],
  as = st && 'CompositionEvent' in window,
  qn = null;
st && 'documentMode' in document && (qn = document.documentMode);
var yp = st && 'TextEvent' in window && !qn,
  ic = st && (!as || (qn && 8 < qn && 11 >= qn)),
  ca = ' ',
  da = !1;
function sc(e, t) {
  switch (e) {
    case 'keyup':
      return gp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ac(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var un = !1;
function xp(e, t) {
  switch (e) {
    case 'compositionend':
      return ac(t);
    case 'keypress':
      return t.which !== 32 ? null : ((da = !0), ca);
    case 'textInput':
      return (e = t.data), e === ca && da ? null : e;
    default:
      return null;
  }
}
function wp(e, t) {
  if (un)
    return e === 'compositionend' || (!as && sc(e, t))
      ? ((e = oc()), (nl = os = kt = null), (un = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ic && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var kp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!kp[e.type] : t === 'textarea';
}
function uc(e, t, n, r) {
  Mu(r),
    (t = kl(t, 'onChange')),
    0 < t.length &&
      ((n = new is('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var bn = null,
  dr = null;
function jp(e) {
  wc(e, 0);
}
function Yl(e) {
  var t = fn(e);
  if (zu(t)) return e;
}
function Sp(e, t) {
  if (e === 'change') return t;
}
var cc = !1;
if (st) {
  var Eo;
  if (st) {
    var Po = 'oninput' in document;
    if (!Po) {
      var pa = document.createElement('div');
      pa.setAttribute('oninput', 'return;'),
        (Po = typeof pa.oninput == 'function');
    }
    Eo = Po;
  } else Eo = !1;
  cc = Eo && (!document.documentMode || 9 < document.documentMode);
}
function ha() {
  bn && (bn.detachEvent('onpropertychange', dc), (dr = bn = null));
}
function dc(e) {
  if (e.propertyName === 'value' && Yl(dr)) {
    var t = [];
    uc(t, dr, e, es(e)), Vu(jp, t);
  }
}
function Np(e, t, n) {
  e === 'focusin'
    ? (ha(), (bn = t), (dr = n), bn.attachEvent('onpropertychange', dc))
    : e === 'focusout' && ha();
}
function Cp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Yl(dr);
}
function Ep(e, t) {
  if (e === 'click') return Yl(t);
}
function Pp(e, t) {
  if (e === 'input' || e === 'change') return Yl(t);
}
function _p(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == 'function' ? Object.is : _p;
function fr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Qo.call(t, l) || !Qe(e[l], t[l])) return !1;
  }
  return !0;
}
function ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function va(e, t) {
  var n = ma(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ma(n);
  }
}
function fc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pc() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Tp(e) {
  var t = pc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = va(n, o));
        var i = va(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Op = st && 'documentMode' in document && 11 >= document.documentMode,
  cn = null,
  ci = null,
  er = null,
  di = !1;
function ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    cn == null ||
    cn !== hl(r) ||
    ((r = cn),
    'selectionStart' in r && us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (er && fr(er, r)) ||
      ((er = r),
      (r = kl(ci, 'onSelect')),
      0 < r.length &&
        ((t = new is('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var dn = {
    animationend: Ar('Animation', 'AnimationEnd'),
    animationiteration: Ar('Animation', 'AnimationIteration'),
    animationstart: Ar('Animation', 'AnimationStart'),
    transitionend: Ar('Transition', 'TransitionEnd'),
  },
  _o = {},
  hc = {};
st &&
  ((hc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  'TransitionEvent' in window || delete dn.transitionend.transition);
function Kl(e) {
  if (_o[e]) return _o[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hc) return (_o[e] = t[n]);
  return e;
}
var mc = Kl('animationend'),
  vc = Kl('animationiteration'),
  gc = Kl('animationstart'),
  yc = Kl('transitionend'),
  xc = new Map(),
  ya =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function It(e, t) {
  xc.set(e, t), en(t, [e]);
}
for (var To = 0; To < ya.length; To++) {
  var Oo = ya[To],
    Fp = Oo.toLowerCase(),
    Rp = Oo[0].toUpperCase() + Oo.slice(1);
  It(Fp, 'on' + Rp);
}
It(mc, 'onAnimationEnd');
It(vc, 'onAnimationIteration');
It(gc, 'onAnimationStart');
It('dblclick', 'onDoubleClick');
It('focusin', 'onFocus');
It('focusout', 'onBlur');
It(yc, 'onTransitionEnd');
Cn('onMouseEnter', ['mouseout', 'mouseover']);
Cn('onMouseLeave', ['mouseout', 'mouseover']);
Cn('onPointerEnter', ['pointerout', 'pointerover']);
Cn('onPointerLeave', ['pointerout', 'pointerover']);
en(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
en(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
en('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
en(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
en(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
en(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Jn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  zp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jn));
function xa(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Ff(r, t, void 0, e), (e.currentTarget = null);
}
function wc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          xa(l, a, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          xa(l, a, c), (o = u);
        }
    }
  }
  if (vl) throw ((e = ii), (vl = !1), (ii = null), e);
}
function W(e, t) {
  var n = t[vi];
  n === void 0 && (n = t[vi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (kc(t, e, 2, !1), n.add(r));
}
function Fo(e, t, n) {
  var r = 0;
  t && (r |= 4), kc(n, e, r, t);
}
var Wr = '_reactListening' + Math.random().toString(36).slice(2);
function pr(e) {
  if (!e[Wr]) {
    (e[Wr] = !0),
      _u.forEach(function (n) {
        n !== 'selectionchange' && (zp.has(n) || Fo(n, !1, e), Fo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || ((t[Wr] = !0), Fo('selectionchange', !1, t));
  }
}
function kc(e, t, n, r) {
  switch (lc(t)) {
    case 1:
      var l = Yf;
      break;
    case 4:
      l = Kf;
      break;
    default:
      l = ls;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ro(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Vt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Vu(function () {
    var c = o,
      h = es(n),
      v = [];
    e: {
      var p = xc.get(e);
      if (p !== void 0) {
        var y = is,
          x = e;
        switch (e) {
          case 'keypress':
            if (rl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = up;
            break;
          case 'focusin':
            (x = 'focus'), (y = Co);
            break;
          case 'focusout':
            (x = 'blur'), (y = Co);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Co;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = sa;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Zf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = fp;
            break;
          case mc:
          case vc:
          case gc:
            y = ep;
            break;
          case yc:
            y = hp;
            break;
          case 'scroll':
            y = Jf;
            break;
          case 'wheel':
            y = vp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = np;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = ua;
        }
        var w = (t & 4) !== 0,
          j = !w && e === 'scroll',
          d = w ? (p !== null ? p + 'Capture' : null) : p;
        w = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              d !== null && ((k = sr(f, d)), k != null && w.push(hr(f, k, m)))),
            j)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((p = new y(p, x, null, n, h)), v.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== ri &&
            (x = n.relatedTarget || n.fromElement) &&
            (Vt(x) || x[at]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = c),
              (x = x ? Vt(x) : null),
              x !== null &&
                ((j = tn(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = c)),
          y !== x)
        ) {
          if (
            ((w = sa),
            (k = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ua),
              (k = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (f = 'pointer')),
            (j = y == null ? p : fn(y)),
            (m = x == null ? p : fn(x)),
            (p = new w(k, f + 'leave', y, n, h)),
            (p.target = j),
            (p.relatedTarget = m),
            (k = null),
            Vt(h) === c &&
              ((w = new w(d, f + 'enter', x, n, h)),
              (w.target = m),
              (w.relatedTarget = j),
              (k = w)),
            (j = k),
            y && x)
          )
            t: {
              for (w = y, d = x, f = 0, m = w; m; m = on(m)) f++;
              for (m = 0, k = d; k; k = on(k)) m++;
              for (; 0 < f - m; ) (w = on(w)), f--;
              for (; 0 < m - f; ) (d = on(d)), m--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = on(w)), (d = on(d));
              }
              w = null;
            }
          else w = null;
          y !== null && wa(v, p, y, w, !1),
            x !== null && j !== null && wa(v, j, x, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? fn(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var S = Sp;
        else if (fa(p))
          if (cc) S = Pp;
          else {
            S = Cp;
            var E = Np;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (S = Ep);
        if (S && (S = S(e, c))) {
          uc(v, S, n, h);
          break e;
        }
        E && E(e, p, c),
          e === 'focusout' &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === 'number' &&
            qo(p, 'number', p.value);
      }
      switch (((E = c ? fn(c) : window), e)) {
        case 'focusin':
          (fa(E) || E.contentEditable === 'true') &&
            ((cn = E), (ci = c), (er = null));
          break;
        case 'focusout':
          er = ci = cn = null;
          break;
        case 'mousedown':
          di = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (di = !1), ga(v, n, h);
          break;
        case 'selectionchange':
          if (Op) break;
        case 'keydown':
        case 'keyup':
          ga(v, n, h);
      }
      var C;
      if (as)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        un
          ? sc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (ic &&
          n.locale !== 'ko' &&
          (un || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && un && (C = oc())
            : ((kt = h),
              (os = 'value' in kt ? kt.value : kt.textContent),
              (un = !0))),
        (E = kl(c, T)),
        0 < E.length &&
          ((T = new aa(T, e, null, n, h)),
          v.push({ event: T, listeners: E }),
          C ? (T.data = C) : ((C = ac(n)), C !== null && (T.data = C)))),
        (C = yp ? xp(e, n) : wp(e, n)) &&
          ((c = kl(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new aa('onBeforeInput', 'beforeinput', null, n, h)),
            v.push({ event: h, listeners: c }),
            (h.data = C)));
    }
    wc(v, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = sr(e, n)),
      o != null && r.unshift(hr(e, o, l)),
      (o = sr(e, t)),
      o != null && r.push(hr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function on(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = sr(n, o)), u != null && i.unshift(hr(n, u, a)))
        : l || ((u = sr(n, o)), u != null && i.push(hr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Lp = /\r\n?/g,
  Ip = /\u0000|\uFFFD/g;
function ka(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Lp,
      `
`
    )
    .replace(Ip, '');
}
function Hr(e, t, n) {
  if (((t = ka(t)), ka(e) !== t && n)) throw Error(N(425));
}
function jl() {}
var fi = null,
  pi = null;
function hi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var mi = typeof setTimeout == 'function' ? setTimeout : void 0,
  $p = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ja = typeof Promise == 'function' ? Promise : void 0,
  Dp =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ja < 'u'
      ? function (e) {
          return ja.resolve(null).then(e).catch(Bp);
        }
      : mi;
function Bp(e) {
  setTimeout(function () {
    throw e;
  });
}
function zo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), cr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  cr(t);
}
function Pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Sa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var In = Math.random().toString(36).slice(2),
  Ke = '__reactFiber$' + In,
  mr = '__reactProps$' + In,
  at = '__reactContainer$' + In,
  vi = '__reactEvents$' + In,
  Up = '__reactListeners$' + In,
  Mp = '__reactHandles$' + In;
function Vt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sa(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Sa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _r(e) {
  return (
    (e = e[Ke] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Jl(e) {
  return e[mr] || null;
}
var gi = [],
  pn = -1;
function $t(e) {
  return { current: e };
}
function H(e) {
  0 > pn || ((e.current = gi[pn]), (gi[pn] = null), pn--);
}
function A(e, t) {
  pn++, (gi[pn] = e.current), (e.current = t);
}
var Lt = {},
  ve = $t(Lt),
  Se = $t(!1),
  Jt = Lt;
function En(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function Sl() {
  H(Se), H(ve);
}
function Na(e, t, n) {
  if (ve.current !== Lt) throw Error(N(168));
  A(ve, t), A(Se, n);
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Nf(e) || 'Unknown', l));
  return K({}, n, r);
}
function Nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Jt = ve.current),
    A(ve, e),
    A(Se, Se.current),
    !0
  );
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = jc(e, t, Jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Se),
      H(ve),
      A(ve, e))
    : H(Se),
    A(Se, n);
}
var nt = null,
  Xl = !1,
  Lo = !1;
function Sc(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
function Ap(e) {
  (Xl = !0), Sc(e);
}
function Dt() {
  if (!Lo && nt !== null) {
    Lo = !0;
    var e = 0,
      t = U;
    try {
      var n = nt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nt = null), (Xl = !1);
    } catch (l) {
      throw (nt !== null && (nt = nt.slice(e + 1)), Ku(ts, Dt), l);
    } finally {
      (U = t), (Lo = !1);
    }
  }
  return null;
}
var hn = [],
  mn = 0,
  Cl = null,
  El = 0,
  ze = [],
  Le = 0,
  Xt = null,
  rt = 1,
  lt = '';
function At(e, t) {
  (hn[mn++] = El), (hn[mn++] = Cl), (Cl = e), (El = t);
}
function Nc(e, t, n) {
  (ze[Le++] = rt), (ze[Le++] = lt), (ze[Le++] = Xt), (Xt = e);
  var r = rt;
  e = lt;
  var l = 32 - He(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - He(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (rt = (1 << (32 - He(t) + l)) | (n << l) | r),
      (lt = o + e);
  } else (rt = (1 << o) | (n << l) | r), (lt = e);
}
function cs(e) {
  e.return !== null && (At(e, 1), Nc(e, 1, 0));
}
function ds(e) {
  for (; e === Cl; )
    (Cl = hn[--mn]), (hn[mn] = null), (El = hn[--mn]), (hn[mn] = null);
  for (; e === Xt; )
    (Xt = ze[--Le]),
      (ze[Le] = null),
      (lt = ze[--Le]),
      (ze[Le] = null),
      (rt = ze[--Le]),
      (ze[Le] = null);
}
var Te = null,
  Pe = null,
  Q = !1,
  We = null;
function Cc(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (Pe = Pt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: rt, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (Q) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Ea(e, t)) {
        if (yi(e)) throw Error(N(418));
        t = Pt(n.nextSibling);
        var r = Te;
        t && Ea(e, t)
          ? Cc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Te = e));
      }
    } else {
      if (yi(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Te = e);
    }
  }
}
function Pa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function Vr(e) {
  if (e !== Te) return !1;
  if (!Q) return Pa(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !hi(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (yi(e)) throw (Ec(), Error(N(418)));
    for (; t; ) Cc(e, t), (t = Pt(t.nextSibling));
  }
  if ((Pa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Pe = Pt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = Te ? Pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ec() {
  for (var e = Pe; e; ) e = Pt(e.nextSibling);
}
function Pn() {
  (Pe = Te = null), (Q = !1);
}
function fs(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Wp = ft.ReactCurrentBatchConfig;
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Pl = $t(null),
  _l = null,
  vn = null,
  ps = null;
function hs() {
  ps = vn = _l = null;
}
function ms(e) {
  var t = Pl.current;
  H(Pl), (e._currentValue = t);
}
function wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  (_l = e),
    (ps = vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (ps !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vn === null)) {
      if (_l === null) throw Error(N(308));
      (vn = e), (_l.dependencies = { lanes: 0, firstContext: e });
    } else vn = vn.next = e;
  return t;
}
var Qt = null;
function vs(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
function Pc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), vs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _c(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), vs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
function _a(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Tl(e, t, n, r) {
  var l = e.updateQueue;
  gt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== i &&
        (a === null ? (h.firstBaseUpdate = c) : (a.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (h = c = u = null), (a = o);
    do {
      var p = a.lane,
        y = a.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((p = t), (y = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == 'function')) {
                v = x.call(y, v, p);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (p = typeof x == 'function' ? x.call(y, v, p) : x),
                p == null)
              )
                break e;
              v = K({}, v, p);
              break e;
            case 2:
              gt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((c = h = y), (u = v)) : (h = h.next = y),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = v),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (qt |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function Ta(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Tc = new Pu.Component().refs;
function ki(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = Ot(e),
      o = it(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = _t(e, o, l)),
      t !== null && (Ve(t, e, l, r), ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = Ot(e),
      o = it(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = _t(e, o, l)),
      t !== null && (Ve(t, e, l, r), ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Ot(e),
      l = it(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = _t(e, l, r)),
      t !== null && (Ve(t, e, r, n), ll(t, e, r));
  },
};
function Oa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fr(n, r) || !fr(l, o)
      : !0
  );
}
function Oc(e, t, n) {
  var r = !1,
    l = Lt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = De(o))
      : ((l = Ne(t) ? Jt : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? En(e, l) : Lt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Tc), gs(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = De(o))
    : ((o = Ne(t) ? Jt : ve.current), (l.context = En(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (ki(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Zl.enqueueReplaceState(l, l.state, null),
      Tl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === Tc && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Ra(e) {
  var t = e._init;
  return t(e._payload);
}
function Fc(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [f]), (d.flags |= 16)) : m.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Ft(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((d.flags |= 2), f) : m)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, m, k) {
    return f === null || f.tag !== 6
      ? ((f = Ao(m, d.mode, k)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function u(d, f, m, k) {
    var S = m.type;
    return S === an
      ? h(d, f, m.props.children, k, m.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === vt &&
            Ra(S) === f.type))
      ? ((k = l(f, m.props)), (k.ref = Hn(d, f, m)), (k.return = d), k)
      : ((k = cl(m.type, m.key, m.props, null, d.mode, k)),
        (k.ref = Hn(d, f, m)),
        (k.return = d),
        k);
  }
  function c(d, f, m, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Wo(m, d.mode, k)), (f.return = d), f)
      : ((f = l(f, m.children || [])), (f.return = d), f);
  }
  function h(d, f, m, k, S) {
    return f === null || f.tag !== 7
      ? ((f = Kt(m, d.mode, k, S)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function v(d, f, m) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Ao('' + f, d.mode, m)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Lr:
          return (
            (m = cl(f.type, f.key, f.props, null, d.mode, m)),
            (m.ref = Hn(d, null, f)),
            (m.return = d),
            m
          );
        case sn:
          return (f = Wo(f, d.mode, m)), (f.return = d), f;
        case vt:
          var k = f._init;
          return v(d, k(f._payload), m);
      }
      if (Yn(f) || Bn(f))
        return (f = Kt(f, d.mode, m, null)), (f.return = d), f;
      Qr(d, f);
    }
    return null;
  }
  function p(d, f, m, k) {
    var S = f !== null ? f.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return S !== null ? null : a(d, f, '' + m, k);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Lr:
          return m.key === S ? u(d, f, m, k) : null;
        case sn:
          return m.key === S ? c(d, f, m, k) : null;
        case vt:
          return (S = m._init), p(d, f, S(m._payload), k);
      }
      if (Yn(m) || Bn(m)) return S !== null ? null : h(d, f, m, k, null);
      Qr(d, m);
    }
    return null;
  }
  function y(d, f, m, k, S) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (d = d.get(m) || null), a(f, d, '' + k, S);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Lr:
          return (d = d.get(k.key === null ? m : k.key) || null), u(f, d, k, S);
        case sn:
          return (d = d.get(k.key === null ? m : k.key) || null), c(f, d, k, S);
        case vt:
          var E = k._init;
          return y(d, f, m, E(k._payload), S);
      }
      if (Yn(k) || Bn(k)) return (d = d.get(m) || null), h(f, d, k, S, null);
      Qr(f, k);
    }
    return null;
  }
  function x(d, f, m, k) {
    for (
      var S = null, E = null, C = f, T = (f = 0), $ = null;
      C !== null && T < m.length;
      T++
    ) {
      C.index > T ? (($ = C), (C = null)) : ($ = C.sibling);
      var z = p(d, C, m[T], k);
      if (z === null) {
        C === null && (C = $);
        break;
      }
      e && C && z.alternate === null && t(d, C),
        (f = o(z, f, T)),
        E === null ? (S = z) : (E.sibling = z),
        (E = z),
        (C = $);
    }
    if (T === m.length) return n(d, C), Q && At(d, T), S;
    if (C === null) {
      for (; T < m.length; T++)
        (C = v(d, m[T], k)),
          C !== null &&
            ((f = o(C, f, T)), E === null ? (S = C) : (E.sibling = C), (E = C));
      return Q && At(d, T), S;
    }
    for (C = r(d, C); T < m.length; T++)
      ($ = y(C, d, T, m[T], k)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? T : $.key),
          (f = o($, f, T)),
          E === null ? (S = $) : (E.sibling = $),
          (E = $));
    return (
      e &&
        C.forEach(function (te) {
          return t(d, te);
        }),
      Q && At(d, T),
      S
    );
  }
  function w(d, f, m, k) {
    var S = Bn(m);
    if (typeof S != 'function') throw Error(N(150));
    if (((m = S.call(m)), m == null)) throw Error(N(151));
    for (
      var E = (S = null), C = f, T = (f = 0), $ = null, z = m.next();
      C !== null && !z.done;
      T++, z = m.next()
    ) {
      C.index > T ? (($ = C), (C = null)) : ($ = C.sibling);
      var te = p(d, C, z.value, k);
      if (te === null) {
        C === null && (C = $);
        break;
      }
      e && C && te.alternate === null && t(d, C),
        (f = o(te, f, T)),
        E === null ? (S = te) : (E.sibling = te),
        (E = te),
        (C = $);
    }
    if (z.done) return n(d, C), Q && At(d, T), S;
    if (C === null) {
      for (; !z.done; T++, z = m.next())
        (z = v(d, z.value, k)),
          z !== null &&
            ((f = o(z, f, T)), E === null ? (S = z) : (E.sibling = z), (E = z));
      return Q && At(d, T), S;
    }
    for (C = r(d, C); !z.done; T++, z = m.next())
      (z = y(C, d, T, z.value, k)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? T : z.key),
          (f = o(z, f, T)),
          E === null ? (S = z) : (E.sibling = z),
          (E = z));
    return (
      e &&
        C.forEach(function (Ze) {
          return t(d, Ze);
        }),
      Q && At(d, T),
      S
    );
  }
  function j(d, f, m, k) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === an &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Lr:
          e: {
            for (var S = m.key, E = f; E !== null; ) {
              if (E.key === S) {
                if (((S = m.type), S === an)) {
                  if (E.tag === 7) {
                    n(d, E.sibling),
                      (f = l(E, m.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === vt &&
                    Ra(S) === E.type)
                ) {
                  n(d, E.sibling),
                    (f = l(E, m.props)),
                    (f.ref = Hn(d, E, m)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            m.type === an
              ? ((f = Kt(m.props.children, d.mode, k, m.key)),
                (f.return = d),
                (d = f))
              : ((k = cl(m.type, m.key, m.props, null, d.mode, k)),
                (k.ref = Hn(d, f, m)),
                (k.return = d),
                (d = k));
          }
          return i(d);
        case sn:
          e: {
            for (E = m.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Wo(m, d.mode, k)), (f.return = d), (d = f);
          }
          return i(d);
        case vt:
          return (E = m._init), j(d, f, E(m._payload), k);
      }
      if (Yn(m)) return x(d, f, m, k);
      if (Bn(m)) return w(d, f, m, k);
      Qr(d, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, m)), (f.return = d), (d = f))
          : (n(d, f), (f = Ao(m, d.mode, k)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return j;
}
var _n = Fc(!0),
  Rc = Fc(!1),
  Tr = {},
  Xe = $t(Tr),
  vr = $t(Tr),
  gr = $t(Tr);
function Gt(e) {
  if (e === Tr) throw Error(N(174));
  return e;
}
function ys(e, t) {
  switch ((A(gr, t), A(vr, e), A(Xe, Tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ei(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ei(t, e));
  }
  H(Xe), A(Xe, t);
}
function Tn() {
  H(Xe), H(vr), H(gr);
}
function zc(e) {
  Gt(gr.current);
  var t = Gt(Xe.current),
    n = ei(t, e.type);
  t !== n && (A(vr, e), A(Xe, n));
}
function xs(e) {
  vr.current === e && (H(Xe), H(vr));
}
var G = $t(0);
function Ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Io = [];
function ws() {
  for (var e = 0; e < Io.length; e++)
    Io[e]._workInProgressVersionPrimary = null;
  Io.length = 0;
}
var ol = ft.ReactCurrentDispatcher,
  $o = ft.ReactCurrentBatchConfig,
  Zt = 0,
  Y = null,
  re = null,
  oe = null,
  Fl = !1,
  tr = !1,
  yr = 0,
  Hp = 0;
function fe() {
  throw Error(N(321));
}
function ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function js(e, t, n, r, l, o) {
  if (
    ((Zt = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ol.current = e === null || e.memoizedState === null ? Yp : Kp),
    (e = n(r, l)),
    tr)
  ) {
    o = 0;
    do {
      if (((tr = !1), (yr = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (oe = re = null),
        (t.updateQueue = null),
        (ol.current = Jp),
        (e = n(r, l));
    } while (tr);
  }
  if (
    ((ol.current = Rl),
    (t = re !== null && re.next !== null),
    (Zt = 0),
    (oe = re = Y = null),
    (Fl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Ss() {
  var e = yr !== 0;
  return (yr = 0), e;
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (Y.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Be() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? Y.memoizedState : oe.next;
  if (t !== null) (oe = t), (re = e);
  else {
    if (e === null) throw Error(N(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      oe === null ? (Y.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function xr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Do(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = re,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      c = o;
    do {
      var h = c.lane;
      if ((Zt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = v), (i = r)) : (u = u.next = v),
          (Y.lanes |= h),
          (qt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = a),
      Qe(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (qt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Qe(o, t.memoizedState) || (je = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Lc() {}
function Ic(e, t) {
  var n = Y,
    r = Be(),
    l = t(),
    o = !Qe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (je = !0)),
    (r = r.queue),
    Ns(Bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wr(9, Dc.bind(null, n, r, l, t), void 0, null),
      ie === null)
    )
      throw Error(N(349));
    Zt & 30 || $c(n, t, l);
  }
  return l;
}
function $c(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Uc(t) && Mc(e);
}
function Bc(e, t, n) {
  return n(function () {
    Uc(t) && Mc(e);
  });
}
function Uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function Mc(e) {
  var t = ut(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function za(e) {
  var t = Ye();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gp.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ac() {
  return Be().memoizedState;
}
function il(e, t, n, r) {
  var l = Ye();
  (Y.flags |= e),
    (l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ql(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (((o = i.destroy), r !== null && ks(r, i.deps))) {
      l.memoizedState = wr(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = wr(1 | t, n, o, r));
}
function La(e, t) {
  return il(8390656, 8, e, t);
}
function Ns(e, t) {
  return ql(2048, 8, e, t);
}
function Wc(e, t) {
  return ql(4, 2, e, t);
}
function Hc(e, t) {
  return ql(4, 4, e, t);
}
function Vc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ql(4, 4, Vc.bind(null, t, e), n)
  );
}
function Cs() {}
function Gc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kc(e, t, n) {
  return Zt & 21
    ? (Qe(n, t) || ((n = Zu()), (Y.lanes |= n), (qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Vp(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $o.transition;
  $o.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), ($o.transition = r);
  }
}
function Jc() {
  return Be().memoizedState;
}
function Qp(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xc(e))
  )
    Zc(t, n);
  else if (((n = Pc(e, t, n, r)), n !== null)) {
    var l = ye();
    Ve(n, e, r, l), qc(n, t, r);
  }
}
function Gp(e, t, n) {
  var r = Ot(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xc(e)) Zc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Qe(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), vs(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pc(e, t, l, r)),
      n !== null && ((l = ye()), Ve(n, e, r, l), qc(n, t, r));
  }
}
function Xc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Zc(e, t) {
  tr = Fl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
var Rl = {
    readContext: De,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: La,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        il(4194308, 4, Vc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return il(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return il(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ye();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ye();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qp.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: za,
    useDebugValue: Cs,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = za(!1),
        t = e[0];
      return (e = Vp.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = Ye();
      if (Q) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(N(349));
        Zt & 30 || $c(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        La(Bc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        wr(9, Dc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ye(),
        t = ie.identifierPrefix;
      if (Q) {
        var n = lt,
          r = rt;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = yr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Hp++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: De,
    useCallback: Gc,
    useContext: De,
    useEffect: Ns,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: Do,
    useRef: Ac,
    useState: function () {
      return Do(xr);
    },
    useDebugValue: Cs,
    useDeferredValue: function (e) {
      var t = Be();
      return Kc(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Do(xr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Lc,
    useSyncExternalStore: Ic,
    useId: Jc,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: De,
    useCallback: Gc,
    useContext: De,
    useEffect: Ns,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: Bo,
    useRef: Ac,
    useState: function () {
      return Bo(xr);
    },
    useDebugValue: Cs,
    useDeferredValue: function (e) {
      var t = Be();
      return re === null ? (t.memoizedState = e) : Kc(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Bo(xr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Lc,
    useSyncExternalStore: Ic,
    useId: Jc,
    unstable_isNewReconciler: !1,
  };
function On(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Sf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xp = typeof WeakMap == 'function' ? WeakMap : Map;
function bc(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ll || ((Ll = !0), (zi = r)), Si(e, t);
    }),
    n
  );
}
function ed(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Si(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Si(e, t),
          typeof r != 'function' &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ch.bind(null, e, t, n)), t.then(e, e));
}
function $a(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Da(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), _t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zp = ft.ReactCurrentOwner,
  je = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Rc(t, null, n, r) : _n(t, e.child, n, r);
}
function Ba(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Sn(t, l),
    (r = js(e, t, n, r, o, l)),
    (n = Ss()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Q && n && cs(t), (t.flags |= 1), ge(e, t, r, l), t.child)
  );
}
function Ua(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !zs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), td(e, t, o, r, l))
      : ((e = cl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fr), n(i, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function td(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (fr(o, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Ni(e, t, n, r, l);
}
function nd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(yn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(yn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(yn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(yn, Ee),
      (Ee |= r);
  return ge(e, t, l, n), t.child;
}
function rd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ni(e, t, n, r, l) {
  var o = Ne(n) ? Jt : ve.current;
  return (
    (o = En(t, o)),
    Sn(t, l),
    (n = js(e, t, n, r, o, l)),
    (r = Ss()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Q && r && cs(t), (t.flags |= 1), ge(e, t, n, l), t.child)
  );
}
function Ma(e, t, n, r, l) {
  if (Ne(n)) {
    var o = !0;
    Nl(t);
  } else o = !1;
  if ((Sn(t, l), t.stateNode === null))
    sl(e, t), Oc(t, n, r), ji(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = De(c))
      : ((c = Ne(n) ? Jt : ve.current), (c = En(t, c)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== c) && Fa(t, i, r, c)),
      (gt = !1);
    var p = t.memoizedState;
    (i.state = p),
      Tl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || p !== u || Se.current || gt
        ? (typeof h == 'function' && (ki(t, n, h, r), (u = t.memoizedState)),
          (a = gt || Oa(t, n, a, r, p, u, c))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      _c(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Me(t.type, a)),
      (i.props = c),
      (v = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = De(u))
        : ((u = Ne(n) ? Jt : ve.current), (u = En(t, u)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== v || p !== u) && Fa(t, i, r, u)),
      (gt = !1),
      (p = t.memoizedState),
      (i.state = p),
      Tl(t, r, i, l);
    var x = t.memoizedState;
    a !== v || p !== x || Se.current || gt
      ? (typeof y == 'function' && (ki(t, n, y, r), (x = t.memoizedState)),
        (c = gt || Oa(t, n, c, r, p, x, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ci(e, t, n, r, o, l);
}
function Ci(e, t, n, r, l, o) {
  rd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ca(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (Zp.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _n(t, e.child, null, o)), (t.child = _n(t, null, a, o)))
      : ge(e, t, a, o),
    (t.memoizedState = r.state),
    l && Ca(t, n, !0),
    t.child
  );
}
function ld(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Na(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Na(e, t.context, !1),
    ys(e, t.containerInfo);
}
function Aa(e, t, n, r, l) {
  return Pn(), fs(l), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
  var r = t.pendingProps,
    l = G.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(G, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = to(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Pi(n)),
              (t.memoizedState = Ei),
              e)
            : Es(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return qp(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ft(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Ft(a, o)) : ((o = Kt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Pi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ei),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Es(e, t) {
  return (
    (t = to({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gr(e, t, n, r) {
  return (
    r !== null && fs(r),
    _n(t, e.child, null, n),
    (e = Es(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Uo(Error(N(422)))), Gr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = to({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Kt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && _n(t, e.child, null, i),
        (t.child.memoizedState = Pi(i)),
        (t.memoizedState = Ei),
        o);
  if (!(t.mode & 1)) return Gr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Uo(o, r, void 0)), Gr(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), je || a)) {
    if (((r = ie), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ut(e, l), Ve(r, e, l, -1));
    }
    return Rs(), (r = Uo(Error(N(421)))), Gr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Pe = Pt(l.nextSibling)),
      (Te = t),
      (Q = !0),
      (We = null),
      e !== null &&
        ((ze[Le++] = rt),
        (ze[Le++] = lt),
        (ze[Le++] = Xt),
        (rt = e.id),
        (lt = e.overflow),
        (Xt = t)),
      (t = Es(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wi(e.return, t, n);
}
function Mo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function id(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wa(e, n, t);
        else if (e.tag === 19) Wa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Mo(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Mo(t, !0, n, null, o);
        break;
      case 'together':
        Mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bp(e, t, n) {
  switch (t.tag) {
    case 3:
      ld(t), Pn();
      break;
    case 5:
      zc(t);
      break;
    case 1:
      Ne(t.type) && Nl(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(Pl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? od(e, t, n)
          : (A(G, G.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      A(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return id(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nd(e, t, n);
  }
  return ct(e, t, n);
}
var sd, _i, ad, ud;
sd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
_i = function () {};
ad = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Gt(Xe.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = Xo(e, l)), (r = Xo(e, r)), (o = []);
        break;
      case 'select':
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = bo(e, l)), (r = bo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = jl);
    }
    ti(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (or.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(c, u))
            : c === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(c, '' + u)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (or.hasOwnProperty(c)
                ? (u != null && c === 'onScroll' && W('scroll', e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ud = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function eh(e, t, n) {
  var r = t.pendingProps;
  switch ((ds(t), t.tag)) {
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
      return pe(t), null;
    case 1:
      return Ne(t.type) && Sl(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        H(Se),
        H(ve),
        ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && ($i(We), (We = null)))),
        _i(e, t),
        pe(t),
        null
      );
    case 5:
      xs(t);
      var l = Gt(gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ad(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return pe(t), null;
        }
        if (((e = Gt(Xe.current)), Vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ke] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              W('cancel', r), W('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              W('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Jn.length; l++) W(Jn[l], r);
              break;
            case 'source':
              W('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              W('error', r), W('load', r);
              break;
            case 'details':
              W('toggle', r);
              break;
            case 'input':
              Zs(r, o), W('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                W('invalid', r);
              break;
            case 'textarea':
              bs(r, o), W('invalid', r);
          }
          ti(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : or.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  W('scroll', r);
            }
          switch (n) {
            case 'input':
              Ir(r), qs(r, o, !0);
              break;
            case 'textarea':
              Ir(r), ea(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = jl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = $u(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ke] = t),
            (e[mr] = r),
            sd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ni(n, r)), n)) {
              case 'dialog':
                W('cancel', e), W('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                W('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Jn.length; l++) W(Jn[l], e);
                l = r;
                break;
              case 'source':
                W('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                W('error', e), W('load', e), (l = r);
                break;
              case 'details':
                W('toggle', e), (l = r);
                break;
              case 'input':
                Zs(e, r), (l = Xo(e, r)), W('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  W('invalid', e);
                break;
              case 'textarea':
                bs(e, r), (l = bo(e, r)), W('invalid', e);
                break;
              default:
                l = r;
            }
            ti(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? Uu(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Du(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && ir(e, u)
                    : typeof u == 'number' && ir(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (or.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && W('scroll', e)
                      : u != null && Xi(e, o, u, i));
              }
            switch (n) {
              case 'input':
                Ir(e), qs(e, r, !1);
                break;
              case 'textarea':
                Ir(e), ea(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + zt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = jl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) ud(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = Gt(gr.current)), Gt(Xe.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (o = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (H(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Pe !== null && t.mode & 1 && !(t.flags & 128))
          Ec(), Pn(), (t.flags |= 98560), (o = !1);
        else if (((o = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Ke] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else We !== null && ($i(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? le === 0 && (le = 3) : Rs())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Tn(), _i(e, t), e === null && pr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return ms(t.type._context), pe(t), null;
    case 17:
      return Ne(t.type) && Sl(), pe(t), null;
    case 19:
      if ((H(G), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Vn(o, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Vn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Fn &&
            ((t.flags |= 128), (r = !0), Vn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !Q)
            )
              return pe(t), null;
          } else
            2 * ee() - o.renderingStartTime > Fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          A(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Fs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function th(e, t) {
  switch ((ds(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && Sl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        H(Se),
        H(ve),
        ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xs(t), null;
    case 13:
      if ((H(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(G), null;
    case 4:
      return Tn(), null;
    case 10:
      return ms(t.type._context), null;
    case 22:
    case 23:
      return Fs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1,
  me = !1,
  nh = typeof WeakSet == 'function' ? WeakSet : Set,
  _ = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function Ti(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Ha = !1;
function rh(e, t) {
  if (((fi = xl), (e = pc()), us(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            h = 0,
            v = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              v !== n || (l !== 0 && v.nodeType !== 3) || (a = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (u = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (y = v.firstChild) !== null;

            )
              (p = v), (v = y);
            for (;;) {
              if (v === e) break t;
              if (
                (p === n && ++c === l && (a = i),
                p === o && ++h === r && (u = i),
                (y = v.nextSibling) !== null)
              )
                break;
              (v = p), (p = v.parentNode);
            }
            v = y;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pi = { focusedElem: e, selectionRange: n }, xl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    j = x.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Me(t.type, w),
                      j
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (k) {
          J(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = Ha), (Ha = !1), x;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ti(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function cd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[mr], delete t[vi], delete t[Up], delete t[Mp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Va(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = jl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var ue = null,
  Ae = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) fd(e, t, n), (n = n.sibling);
}
function fd(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == 'function')
    try {
      Je.onCommitFiberUnmount(Ql, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || gn(n, t);
    case 6:
      var r = ue,
        l = Ae;
      (ue = null),
        mt(e, t, n),
        (ue = r),
        (Ae = l),
        ue !== null &&
          (Ae
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ae
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? zo(e.parentNode, n)
              : e.nodeType === 1 && zo(e, n),
            cr(e))
          : zo(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (l = Ae),
        (ue = n.stateNode.containerInfo),
        (Ae = !0),
        mt(e, t, n),
        (ue = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ti(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          J(n, t, a);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), mt(e, t, n), (me = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nh()),
      t.forEach(function (r) {
        var l = fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ue = a.stateNode), (Ae = !1);
              break e;
            case 3:
              (ue = a.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (ue = a.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          a = a.return;
        }
        if (ue === null) throw Error(N(160));
        fd(o, i, l), (ue = null), (Ae = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        J(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pd(t, e), (t = t.sibling);
}
function pd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ge(e), r & 4)) {
        try {
          nr(3, e, e.return), bl(3, e);
        } catch (w) {
          J(e, e.return, w);
        }
        try {
          nr(5, e, e.return);
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ge(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ir(l, '');
        } catch (w) {
          J(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Lu(l, o),
              ni(a, i);
            var c = ni(a, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                v = u[i + 1];
              h === 'style'
                ? Uu(l, v)
                : h === 'dangerouslySetInnerHTML'
                ? Du(l, v)
                : h === 'children'
                ? ir(l, v)
                : Xi(l, h, v, c);
            }
            switch (a) {
              case 'input':
                Zo(l, o);
                break;
              case 'textarea':
                Iu(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? xn(l, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xn(l, !!o.multiple, o.defaultValue, !0)
                      : xn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[mr] = o;
          } catch (w) {
            J(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cr(t.containerInfo);
        } catch (w) {
          J(e, e.return, w);
        }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ts = ee())),
        r & 4 && Qa(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (c = me) || h), Ue(t, e), (me = c)) : Ue(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (v = _ = h; _ !== null; ) {
              switch (((p = _), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, p, p.return);
                  break;
                case 1:
                  gn(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      J(r, n, w);
                    }
                  }
                  break;
                case 5:
                  gn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ya(v);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (_ = y)) : Ya(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = v.stateNode),
                      (u = v.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Bu('display', i)));
              } catch (w) {
                J(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = c ? '' : v.memoizedProps;
              } catch (w) {
                J(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ge(e), r & 4 && Qa(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ir(l, ''), (r.flags &= -33));
          var o = Va(e);
          Ri(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Va(e);
          Fi(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lh(e, t, n) {
  (_ = e), hd(e);
}
function hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Yr;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || me;
        a = Yr;
        var c = me;
        if (((Yr = i), (me = u) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ka(l)
                : u !== null
                ? ((u.return = i), (_ = u))
                : Ka(l);
        for (; o !== null; ) (_ = o), hd(o), (o = o.sibling);
        (_ = l), (Yr = a), (me = c);
      }
      Ga(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ga(e);
  }
}
function Ga(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ta(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ta(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && cr(v);
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
              throw Error(N(163));
          }
        me || (t.flags & 512 && Oi(t));
      } catch (p) {
        J(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ya(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ka(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
          } catch (u) {
            J(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              J(t, l, u);
            }
          }
          var o = t.return;
          try {
            Oi(t);
          } catch (u) {
            J(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oi(t);
          } catch (u) {
            J(t, i, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var oh = Math.ceil,
  zl = ft.ReactCurrentDispatcher,
  Ps = ft.ReactCurrentOwner,
  $e = ft.ReactCurrentBatchConfig,
  B = 0,
  ie = null,
  ne = null,
  ce = 0,
  Ee = 0,
  yn = $t(0),
  le = 0,
  kr = null,
  qt = 0,
  eo = 0,
  _s = 0,
  rr = null,
  ke = null,
  Ts = 0,
  Fn = 1 / 0,
  tt = null,
  Ll = !1,
  zi = null,
  Tt = null,
  Kr = !1,
  jt = null,
  Il = 0,
  lr = 0,
  Li = null,
  al = -1,
  ul = 0;
function ye() {
  return B & 6 ? ee() : al !== -1 ? al : (al = ee());
}
function Ot(e) {
  return e.mode & 1
    ? B & 2 && ce !== 0
      ? ce & -ce
      : Wp.transition !== null
      ? (ul === 0 && (ul = Zu()), ul)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lc(e.type))),
        e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (Li = null), Error(N(185)));
  Er(e, n, r),
    (!(B & 2) || e !== ie) &&
      (e === ie && (!(B & 2) && (eo |= n), le === 4 && xt(e, ce)),
      Ce(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Fn = ee() + 500), Xl && Dt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Wf(e, t);
  var r = yl(e, e === ie ? ce : 0);
  if (r === 0)
    n !== null && ra(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ra(n), t === 1))
      e.tag === 0 ? Ap(Ja.bind(null, e)) : Sc(Ja.bind(null, e)),
        Dp(function () {
          !(B & 6) && Dt();
        }),
        (n = null);
    else {
      switch (qu(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = Ju;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = Xu;
          break;
        default:
          n = gl;
      }
      n = jd(n, md.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function md(e, t) {
  if (((al = -1), (ul = 0), B & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = yl(e, e === ie ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $l(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var o = gd();
    (ie !== e || ce !== t) && ((tt = null), (Fn = ee() + 500), Yt(e, t));
    do
      try {
        ah();
        break;
      } catch (a) {
        vd(e, a);
      }
    while (!0);
    hs(),
      (zl.current = o),
      (B = l),
      ne !== null ? (t = 0) : ((ie = null), (ce = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Ii(e, l)))), t === 1)
    )
      throw ((n = kr), Yt(e, 0), xt(e, r), Ce(e, ee()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ih(l) &&
          ((t = $l(e, r)),
          t === 2 && ((o = si(e)), o !== 0 && ((r = o), (t = Ii(e, o)))),
          t === 1))
      )
        throw ((n = kr), Yt(e, 0), xt(e, r), Ce(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Wt(e, ke, tt);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = Ts + 500 - ee()), 10 < t))
          ) {
            if (yl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = mi(Wt.bind(null, e, ke, tt), t);
            break;
          }
          Wt(e, ke, tt);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - He(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = mi(Wt.bind(null, e, ke, tt), r);
            break;
          }
          Wt(e, ke, tt);
          break;
        case 5:
          Wt(e, ke, tt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ce(e, ee()), e.callbackNode === n ? md.bind(null, e) : null;
}
function Ii(e, t) {
  var n = rr;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = $l(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Qe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xt(e, t) {
  for (
    t &= ~_s,
      t &= ~eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ja(e) {
  if (B & 6) throw Error(N(327));
  Nn();
  var t = yl(e, 0);
  if (!(t & 1)) return Ce(e, ee()), null;
  var n = $l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && ((t = r), (n = Ii(e, r)));
  }
  if (n === 1) throw ((n = kr), Yt(e, 0), xt(e, t), Ce(e, ee()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wt(e, ke, tt),
    Ce(e, ee()),
    null
  );
}
function Os(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Fn = ee() + 500), Xl && Dt());
  }
}
function bt(e) {
  jt !== null && jt.tag === 0 && !(B & 6) && Nn();
  var t = B;
  B |= 1;
  var n = $e.transition,
    r = U;
  try {
    if ((($e.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), ($e.transition = n), (B = t), !(B & 6) && Dt();
  }
}
function Fs() {
  (Ee = yn.current), H(yn);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $p(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((ds(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Sl();
          break;
        case 3:
          Tn(), H(Se), H(ve), ws();
          break;
        case 5:
          xs(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          H(G);
          break;
        case 19:
          H(G);
          break;
        case 10:
          ms(r.type._context);
          break;
        case 22:
        case 23:
          Fs();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ne = e = Ft(e.current, null)),
    (ce = Ee = t),
    (le = 0),
    (kr = null),
    (_s = eo = qt = 0),
    (ke = rr = null),
    Qt !== null)
  ) {
    for (t = 0; t < Qt.length; t++)
      if (((n = Qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Qt = null;
  }
  return e;
}
function vd(e, t) {
  do {
    var n = ne;
    try {
      if ((hs(), (ol.current = Rl), Fl)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Fl = !1;
      }
      if (
        ((Zt = 0),
        (oe = re = Y = null),
        (tr = !1),
        (yr = 0),
        (Ps.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (kr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ce),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var c = u,
            h = a,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = $a(i);
          if (y !== null) {
            (y.flags &= -257),
              Da(y, i, a, o, t),
              y.mode & 1 && Ia(o, c, t),
              (t = y),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ia(o, c, t), Rs();
              break e;
            }
            u = Error(N(426));
          }
        } else if (Q && a.mode & 1) {
          var j = $a(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Da(j, i, a, o, t),
              fs(On(u, a));
            break e;
          }
        }
        (o = u = On(u, a)),
          le !== 4 && (le = 2),
          rr === null ? (rr = [o]) : rr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = bc(o, u, t);
              _a(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Tt === null || !Tt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = ed(o, a, t);
                _a(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      xd(n);
    } catch (S) {
      (t = S), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gd() {
  var e = zl.current;
  return (zl.current = Rl), e === null ? Rl : e;
}
function Rs() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ie === null || (!(qt & 268435455) && !(eo & 268435455)) || xt(ie, ce);
}
function $l(e, t) {
  var n = B;
  B |= 2;
  var r = gd();
  (ie !== e || ce !== t) && ((tt = null), Yt(e, t));
  do
    try {
      sh();
      break;
    } catch (l) {
      vd(e, l);
    }
  while (!0);
  if ((hs(), (B = n), (zl.current = r), ne !== null)) throw Error(N(261));
  return (ie = null), (ce = 0), le;
}
function sh() {
  for (; ne !== null; ) yd(ne);
}
function ah() {
  for (; ne !== null && !zf(); ) yd(ne);
}
function yd(e) {
  var t = kd(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? xd(e) : (ne = t),
    (Ps.current = null);
}
function xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = th(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ne = null);
        return;
      }
    } else if (((n = eh(n, t, Ee)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Wt(e, t, n) {
  var r = U,
    l = $e.transition;
  try {
    ($e.transition = null), (U = 1), uh(e, t, n, r);
  } finally {
    ($e.transition = l), (U = r);
  }
  return null;
}
function uh(e, t, n, r) {
  do Nn();
  while (jt !== null);
  if (B & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hf(e, o),
    e === ie && ((ne = ie = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Kr ||
      ((Kr = !0),
      jd(gl, function () {
        return Nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var i = U;
    U = 1;
    var a = B;
    (B |= 4),
      (Ps.current = null),
      rh(e, n),
      pd(n, e),
      Tp(pi),
      (xl = !!fi),
      (pi = fi = null),
      (e.current = n),
      lh(n),
      Lf(),
      (B = a),
      (U = i),
      ($e.transition = o);
  } else e.current = n;
  if (
    (Kr && ((Kr = !1), (jt = e), (Il = l)),
    (o = e.pendingLanes),
    o === 0 && (Tt = null),
    Df(n.stateNode),
    Ce(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ll) throw ((Ll = !1), (e = zi), (zi = null), e);
  return (
    Il & 1 && e.tag !== 0 && Nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Li ? lr++ : ((lr = 0), (Li = e))) : (lr = 0),
    Dt(),
    null
  );
}
function Nn() {
  if (jt !== null) {
    var e = qu(Il),
      t = $e.transition,
      n = U;
    try {
      if ((($e.transition = null), (U = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (Il = 0), B & 6)) throw Error(N(331));
        var l = B;
        for (B |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, h, o);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (_ = v);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var p = h.sibling,
                        y = h.return;
                      if ((cd(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (_ = p);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (_ = d);
                break e;
              }
              _ = o.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          i = _;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (_ = m);
          else
            e: for (i = f; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bl(9, a);
                  }
                } catch (S) {
                  J(a, a.return, S);
                }
              if (a === i) {
                _ = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (_ = k);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((B = l), Dt(), Je && typeof Je.onPostCommitFiberRoot == 'function')
        )
          try {
            Je.onPostCommitFiberRoot(Ql, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), ($e.transition = t);
    }
  }
  return !1;
}
function Xa(e, t, n) {
  (t = On(n, t)),
    (t = bc(e, t, 1)),
    (e = _t(e, t, 1)),
    (t = ye()),
    e !== null && (Er(e, 1, t), Ce(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Tt === null || !Tt.has(r)))
        ) {
          (e = On(n, e)),
            (e = ed(t, e, 1)),
            (t = _t(t, e, 1)),
            (e = ye()),
            t !== null && (Er(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (ce & n) === n &&
      (le === 4 || (le === 3 && (ce & 130023424) === ce && 500 > ee() - Ts)
        ? Yt(e, 0)
        : (_s |= n)),
    Ce(e, t);
}
function wd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = ye();
  (e = ut(e, t)), e !== null && (Er(e, t, n), Ce(e, n));
}
function dh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wd(e, n);
}
function fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), wd(e, n);
}
var kd;
kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), bp(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), Q && t.flags & 1048576 && Nc(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      sl(e, t), (e = t.pendingProps);
      var l = En(t, ve.current);
      Sn(t, n), (l = js(null, t, r, e, l, n));
      var o = Ss();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), Nl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            gs(t),
            (l.updater = Zl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ji(t, r, e, n),
            (t = Ci(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && cs(t), ge(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (sl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = hh(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = Ma(null, t, r, e, n);
            break e;
          case 11:
            t = Ba(null, t, r, e, n);
            break e;
          case 14:
            t = Ua(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ma(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ld(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          _c(e, t),
          Tl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = On(Error(N(423)), t)), (t = Aa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = On(Error(N(424)), t)), (t = Aa(e, t, r, n, l));
            break e;
          } else
            for (
              Pe = Pt(t.stateNode.containerInfo.firstChild),
                Te = t,
                Q = !0,
                We = null,
                n = Rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zc(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        hi(r, l) ? (i = null) : o !== null && hi(r, o) && (t.flags |= 32),
        rd(e, t),
        ge(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return od(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _n(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ba(e, t, r, l, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(Pl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Qe(o.value, i)) {
            if (o.children === l.children && !Se.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = it(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      wi(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  wi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ge(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Sn(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        Ua(e, t, r, l, n)
      );
    case 15:
      return td(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        sl(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), Nl(t)) : (e = !1),
        Sn(t, n),
        Oc(t, r, l),
        ji(t, r, l, n),
        Ci(null, t, r, !0, e, n)
      );
    case 19:
      return id(e, t, n);
    case 22:
      return nd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function jd(e, t) {
  return Ku(e, t);
}
function ph(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new ph(e, t, n, r);
}
function zs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hh(e) {
  if (typeof e == 'function') return zs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function cl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) zs(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case an:
        return Kt(n.children, l, o, t);
      case Zi:
        (i = 8), (l |= 8);
        break;
      case Go:
        return (
          (e = Ie(12, n, t, l | 2)), (e.elementType = Go), (e.lanes = o), e
        );
      case Yo:
        return (e = Ie(13, n, t, l)), (e.elementType = Yo), (e.lanes = o), e;
      case Ko:
        return (e = Ie(19, n, t, l)), (e.elementType = Ko), (e.lanes = o), e;
      case Fu:
        return to(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tu:
              i = 10;
              break e;
            case Ou:
              i = 9;
              break e;
            case qi:
              i = 11;
              break e;
            case bi:
              i = 14;
              break e;
            case vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ie(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Kt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function to(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Fu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ao(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function Wo(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jo(0)),
    (this.expirationTimes = jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ls(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new mh(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ie(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gs(o),
    e
  );
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sd(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return jc(e, n, t);
  }
  return t;
}
function Nd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = Ls(n, r, !0, e, l, o, i, a, u)),
    (e.context = Sd(null)),
    (n = e.current),
    (r = ye()),
    (l = Ot(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    _t(n, o, l),
    (e.current.lanes = l),
    Er(e, l, r),
    Ce(e, r),
    e
  );
}
function no(e, t, n, r) {
  var l = t.current,
    o = ye(),
    i = Ot(l);
  return (
    (n = Sd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _t(l, t, i)),
    e !== null && (Ve(e, l, i, o), ll(e, l, i)),
    i
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  Za(e, t), (e = e.alternate) && Za(e, t);
}
function gh() {
  return null;
}
var Cd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function $s(e) {
  this._internalRoot = e;
}
ro.prototype.render = $s.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  no(e, t, null, null);
};
ro.prototype.unmount = $s.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function () {
      no(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++);
    yt.splice(n, 0, e), n === 0 && rc(e);
  }
};
function Ds(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function qa() {}
function yh(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = Dl(i);
        o.call(c);
      };
    }
    var i = Nd(t, r, e, 0, null, !1, !1, '', qa);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      bt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = Dl(u);
      a.call(c);
    };
  }
  var u = Ls(e, 0, !1, null, null, !1, !1, '', qa);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    bt(function () {
      no(t, u, n, r);
    }),
    u
  );
}
function oo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Dl(i);
        a.call(u);
      };
    }
    no(t, i, e, l);
  } else i = yh(n, t, e, l, r);
  return Dl(i);
}
bu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kn(t.pendingLanes);
        n !== 0 &&
          (ns(t, n | 1), Ce(t, ee()), !(B & 6) && ((Fn = ee() + 500), Dt()));
      }
      break;
    case 13:
      bt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = ye();
          Ve(r, e, 1, l);
        }
      }),
        Is(e, 1);
  }
};
rs = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ve(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
ec = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = ut(e, t);
    if (n !== null) {
      var r = ye();
      Ve(n, e, t, r);
    }
    Is(e, t);
  }
};
tc = function () {
  return U;
};
nc = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
li = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Zo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Jl(r);
            if (!l) throw Error(N(90));
            zu(r), Zo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Iu(e, n);
      break;
    case 'select':
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
Wu = Os;
Hu = bt;
var xh = { usingClientEntryPoint: !1, Events: [_r, fn, Jl, Mu, Au, Os] },
  Qn = {
    findFiberByHostInstance: Vt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  wh = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || gh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jr.isDisabled && Jr.supportsFiber)
    try {
      (Ql = Jr.inject(wh)), (Je = Jr);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xh;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ds(t)) throw Error(N(200));
  return vh(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Ds(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = Cd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ls(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    new $s(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = Gu(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return bt(e);
};
Fe.hydrate = function (e, t, n) {
  if (!lo(t)) throw Error(N(200));
  return oo(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Ds(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Cd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Nd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    pr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ro(t);
};
Fe.render = function (e, t, n) {
  if (!lo(t)) throw Error(N(200));
  return oo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!lo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (bt(function () {
        oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = Os;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return oo(e, t, n, !1, r);
};
Fe.version = '18.2.0-next-9e3b772b8-20220608';
function Ed() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed);
    } catch (e) {
      console.error(e);
    }
}
Ed(), (Nu.exports = Fe);
var kh = Nu.exports,
  ba = kh;
(Vo.createRoot = ba.createRoot), (Vo.hydrateRoot = ba.hydrateRoot);
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jr() {
  return (
    (jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jr.apply(this, arguments)
  );
}
var St;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(St || (St = {}));
const eu = 'popstate';
function jh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return Di(
      '',
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Bl(l);
  }
  return Nh(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Bs(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sh() {
  return Math.random().toString(36).substr(2, 8);
}
function tu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Di(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    jr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? $n(t) : t,
      { state: n, key: (t && t.key) || r || Sh() }
    )
  );
}
function Bl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function $n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Nh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = St.Pop,
    u = null,
    c = h();
  c == null && ((c = 0), i.replaceState(jr({}, i.state, { idx: c }), ''));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    a = St.Pop;
    let j = h(),
      d = j == null ? null : j - c;
    (c = j), u && u({ action: a, location: w.location, delta: d });
  }
  function p(j, d) {
    a = St.Push;
    let f = Di(w.location, j, d);
    n && n(f, j), (c = h() + 1);
    let m = tu(f, c),
      k = w.createHref(f);
    try {
      i.pushState(m, '', k);
    } catch (S) {
      if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
      l.location.assign(k);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function y(j, d) {
    a = St.Replace;
    let f = Di(w.location, j, d);
    n && n(f, j), (c = h());
    let m = tu(f, c),
      k = w.createHref(f);
    i.replaceState(m, '', k),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function x(j) {
    let d = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      f = typeof j == 'string' ? j : Bl(j);
    return (
      X(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(j) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(eu, v),
        (u = j),
        () => {
          l.removeEventListener(eu, v), (u = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: x,
    encodeLocation(j) {
      let d = x(j);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: p,
    replace: y,
    go(j) {
      return i.go(j);
    },
  };
  return w;
}
var nu;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(nu || (nu = {}));
function Ch(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? $n(t) : t,
    l = Sr(r.pathname || '/', n);
  if (l == null) return null;
  let o = Pd(e);
  Eh(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Ih(o[a], Dh(l));
  return i;
}
function Pd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (X(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Rt([r, u.relativePath]),
      h = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".')
      ),
      Pd(o.children, t, h, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: zh(c, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
      else for (let u of _d(o.path)) l(o, i, u);
    }),
    t
  );
}
function _d(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = _d(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Eh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Lh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ph = /^:\w+$/,
  _h = 3,
  Th = 2,
  Oh = 1,
  Fh = 10,
  Rh = -2,
  ru = (e) => e === '*';
function zh(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ru) && (r += Rh),
    t && (r += Th),
    n
      .filter((l) => !ru(l))
      .reduce((l, o) => l + (Ph.test(o) ? _h : o === '' ? Oh : Fh), r)
  );
}
function Lh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ih(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      h = Bi(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let v = a.route;
    o.push({
      params: r,
      pathname: Rt([l, h.pathname]),
      pathnameBase: Wh(Rt([l, h.pathnameBase])),
      route: v,
    }),
      h.pathnameBase !== '/' && (l = Rt([l, h.pathnameBase]));
  }
  return o;
}
function Bi(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $h(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((c, h, v) => {
      let { paramName: p, isOptional: y } = h;
      if (p === '*') {
        let w = a[v] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const x = a[v];
      return y && !x ? (c[p] = void 0) : (c[p] = Bh(x || '', p)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function $h(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bs(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Dh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Bs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Bh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Bs(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Sr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Uh(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? $n(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Mh(n, t)) : t,
    search: Hh(r),
    hash: Vh(l),
  };
}
function Mh(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ho(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ah(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Td(e, t) {
  let n = Ah(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Od(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = $n(e))
    : ((l = jr({}, e)),
      X(
        !l.pathname || !l.pathname.includes('?'),
        Ho('?', 'pathname', 'search', l)
      ),
      X(
        !l.pathname || !l.pathname.includes('#'),
        Ho('#', 'pathname', 'hash', l)
      ),
      X(!l.search || !l.search.includes('#'), Ho('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let v = t.length - 1;
    if (!r && i.startsWith('..')) {
      let p = i.split('/');
      for (; p[0] === '..'; ) p.shift(), (v -= 1);
      l.pathname = p.join('/');
    }
    a = v >= 0 ? t[v] : '/';
  }
  let u = Uh(l, a),
    c = i && i !== '/' && i.endsWith('/'),
    h = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (c || h) && (u.pathname += '/'), u;
}
const Rt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Wh = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Hh = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Vh = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Qh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Fd = ['post', 'put', 'patch', 'delete'];
new Set(Fd);
const Gh = ['get', ...Fd];
new Set(Gh);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nr.apply(this, arguments)
  );
}
const io = g.createContext(null),
  Rd = g.createContext(null),
  Bt = g.createContext(null),
  so = g.createContext(null),
  pt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zd = g.createContext(null);
function Yh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Or() || X(!1);
  let { basename: r, navigator: l } = g.useContext(Bt),
    { hash: o, pathname: i, search: a } = ao(e, { relative: n }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Rt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function Or() {
  return g.useContext(so) != null;
}
function Dn() {
  return Or() || X(!1), g.useContext(so).location;
}
function Ld(e) {
  g.useContext(Bt).static || g.useLayoutEffect(e);
}
function ht() {
  let { isDataRoute: e } = g.useContext(pt);
  return e ? um() : Kh();
}
function Kh() {
  Or() || X(!1);
  let e = g.useContext(io),
    { basename: t, future: n, navigator: r } = g.useContext(Bt),
    { matches: l } = g.useContext(pt),
    { pathname: o } = Dn(),
    i = JSON.stringify(Td(l, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    Ld(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (c, h) {
        if ((h === void 0 && (h = {}), !a.current)) return;
        if (typeof c == 'number') {
          r.go(c);
          return;
        }
        let v = Od(c, JSON.parse(i), o, h.relative === 'path');
        e == null &&
          t !== '/' &&
          (v.pathname = v.pathname === '/' ? t : Rt([t, v.pathname])),
          (h.replace ? r.replace : r.push)(v, h.state, h);
      },
      [t, r, i, o, e]
    )
  );
}
const Jh = g.createContext(null);
function Xh(e) {
  let t = g.useContext(pt).outlet;
  return t && g.createElement(Jh.Provider, { value: e }, t);
}
function Zh() {
  let { matches: e } = g.useContext(pt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ao(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Bt),
    { matches: l } = g.useContext(pt),
    { pathname: o } = Dn(),
    i = JSON.stringify(Td(l, r.v7_relativeSplatPath));
  return g.useMemo(() => Od(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function qh(e, t) {
  return bh(e, t);
}
function bh(e, t, n, r) {
  Or() || X(!1);
  let { navigator: l } = g.useContext(Bt),
    { matches: o } = g.useContext(pt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let c = Dn(),
    h;
  if (t) {
    var v;
    let j = typeof t == 'string' ? $n(t) : t;
    u === '/' || ((v = j.pathname) != null && v.startsWith(u)) || X(!1),
      (h = j);
  } else h = c;
  let p = h.pathname || '/',
    y = u === '/' ? p : p.slice(u.length) || '/',
    x = Ch(e, { pathname: y }),
    w = lm(
      x &&
        x.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: Rt([
              u,
              l.encodeLocation
                ? l.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === '/'
                ? u
                : Rt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? g.createElement(
        so.Provider,
        {
          value: {
            location: Nr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              h
            ),
            navigationType: St.Pop,
          },
        },
        w
      )
    : w;
}
function em() {
  let e = am(),
    t = Qh(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement('h2', null, 'Unexpected Application Error!'),
    g.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? g.createElement('pre', { style: l }, n) : null,
    null
  );
}
const tm = g.createElement(em, null);
class nm extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          pt.Provider,
          { value: this.props.routeContext },
          g.createElement(zd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function rm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(io);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(pt.Provider, { value: t }, r)
  );
}
function lm(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let h = i.findIndex(
      (v) => v.route.id && (a == null ? void 0 : a[v.route.id])
    );
    h >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let v = i[h];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (c = h),
        v.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          x =
            v.route.loader &&
            p[v.route.id] === void 0 &&
            (!y || y[v.route.id] === void 0);
        if (v.route.lazy || x) {
          (u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, v, p) => {
    let y,
      x = !1,
      w = null,
      j = null;
    n &&
      ((y = a && v.route.id ? a[v.route.id] : void 0),
      (w = v.route.errorElement || tm),
      u &&
        (c < 0 && p === 0
          ? (cm('route-fallback', !1), (x = !0), (j = null))
          : c === p &&
            ((x = !0), (j = v.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, p + 1)),
      f = () => {
        let m;
        return (
          y
            ? (m = w)
            : x
            ? (m = j)
            : v.route.Component
            ? (m = g.createElement(v.route.Component, null))
            : v.route.element
            ? (m = v.route.element)
            : (m = h),
          g.createElement(rm, {
            match: v,
            routeContext: { outlet: h, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (v.route.ErrorBoundary || v.route.errorElement || p === 0)
      ? g.createElement(nm, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: y,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Id = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Id || {}),
  Ul = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ul || {});
function om(e) {
  let t = g.useContext(io);
  return t || X(!1), t;
}
function im(e) {
  let t = g.useContext(Rd);
  return t || X(!1), t;
}
function sm(e) {
  let t = g.useContext(pt);
  return t || X(!1), t;
}
function $d(e) {
  let t = sm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function am() {
  var e;
  let t = g.useContext(zd),
    n = im(Ul.UseRouteError),
    r = $d(Ul.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function um() {
  let { router: e } = om(Id.UseNavigateStable),
    t = $d(Ul.UseNavigateStable),
    n = g.useRef(!1);
  return (
    Ld(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, Nr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const lu = {};
function cm(e, t, n) {
  !t && !lu[e] && (lu[e] = !0);
}
function dm(e) {
  return Xh(e.context);
}
function he(e) {
  X(!1);
}
function fm(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = St.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Or() && X(!1);
  let u = t.replace(/^\/*/, '/'),
    c = g.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Nr({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == 'string' && (r = $n(r));
  let {
      pathname: h = '/',
      search: v = '',
      hash: p = '',
      state: y = null,
      key: x = 'default',
    } = r,
    w = g.useMemo(() => {
      let j = Sr(h, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: v, hash: p, state: y, key: x },
            navigationType: l,
          };
    }, [u, h, v, p, y, x, l]);
  return w == null
    ? null
    : g.createElement(
        Bt.Provider,
        { value: c },
        g.createElement(so.Provider, { children: n, value: w })
      );
}
function pm(e) {
  let { children: t, location: n } = e;
  return qh(Ui(t), n);
}
new Promise(() => {});
function Ui(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, l) => {
      if (!g.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === g.Fragment) {
        n.push.apply(n, Ui(r.props.children, o));
        return;
      }
      r.type !== he && X(!1), !r.props.index || !r.props.children || X(!1);
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Ui(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ml.apply(this, arguments)
  );
}
function Dd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function hm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mm(e, t) {
  return e.button === 0 && (!t || t === '_self') && !hm(e);
}
const vm = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  gm = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  ym = g.createContext({ isTransitioning: !1 }),
  xm = 'startTransition',
  ou = df[xm];
function wm(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = g.useRef();
  o.current == null && (o.current = jh({ window: l, v5Compat: !0 }));
  let i = o.current,
    [a, u] = g.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    h = g.useCallback(
      (v) => {
        c && ou ? ou(() => u(v)) : u(v);
      },
      [u, c]
    );
  return (
    g.useLayoutEffect(() => i.listen(h), [i, h]),
    g.createElement(fm, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const km =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sm = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: c,
        preventScrollReset: h,
        unstable_viewTransition: v,
      } = t,
      p = Dd(t, vm),
      { basename: y } = g.useContext(Bt),
      x,
      w = !1;
    if (typeof c == 'string' && jm.test(c) && ((x = c), km))
      try {
        let m = new URL(window.location.href),
          k = c.startsWith('//') ? new URL(m.protocol + c) : new URL(c),
          S = Sr(k.pathname, y);
        k.origin === m.origin && S != null
          ? (c = S + k.search + k.hash)
          : (w = !0);
      } catch {}
    let j = Yh(c, { relative: l }),
      d = Cm(c, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: v,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || d(m);
    }
    return g.createElement(
      'a',
      Ml({}, p, { href: x || j, onClick: w || o ? r : f, ref: n, target: u })
    );
  }),
  b = g.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: a,
        to: u,
        unstable_viewTransition: c,
        children: h,
      } = t,
      v = Dd(t, gm),
      p = ao(u, { relative: v.relative }),
      y = Dn(),
      x = g.useContext(Rd),
      { navigator: w } = g.useContext(Bt),
      j = x != null && Em(p) && c === !0,
      d = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
      f = y.pathname,
      m =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    l ||
      ((f = f.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (d = d.toLowerCase()));
    const k = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
    let S = f === d || (!i && f.startsWith(d) && f.charAt(k) === '/'),
      E =
        m != null &&
        (m === d || (!i && m.startsWith(d) && m.charAt(d.length) === '/')),
      C = { isActive: S, isPending: E, isTransitioning: j },
      T = S ? r : void 0,
      $;
    typeof o == 'function'
      ? ($ = o(C))
      : ($ = [
          o,
          S ? 'active' : null,
          E ? 'pending' : null,
          j ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let z = typeof a == 'function' ? a(C) : a;
    return g.createElement(
      Sm,
      Ml({}, v, {
        'aria-current': T,
        className: $,
        ref: n,
        style: z,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof h == 'function' ? h(C) : h
    );
  });
var Mi;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Mi || (Mi = {}));
var iu;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(iu || (iu = {}));
function Nm(e) {
  let t = g.useContext(io);
  return t || X(!1), t;
}
function Cm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = ht(),
    c = Dn(),
    h = ao(e, { relative: i });
  return g.useCallback(
    (v) => {
      if (mm(v, n)) {
        v.preventDefault();
        let p = r !== void 0 ? r : Bl(c) === Bl(h);
        u(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [c, u, h, r, l, n, e, o, i, a]
  );
}
function Em(e, t) {
  t === void 0 && (t = {});
  let n = g.useContext(ym);
  n == null && X(!1);
  let { basename: r } = Nm(Mi.useViewTransitionState),
    l = ao(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Sr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Sr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Bi(l.pathname, i) != null || Bi(l.pathname, o) != null;
}
const Z = g.createContext();
function Pm() {
  const [e, t] = g.useState([]),
    { hideUpdateDeleteBookForms: n } = g.useContext(Z);
  g.useEffect(() => {
    async function l() {
      try {
        const o = await fetch(
          'https://logos-bookstore.onrender.com/api/genres'
        );
        if (o.ok) {
          const i = await o.json();
          i.success && t(i.data);
        }
      } catch {}
    }
    l();
  }, []);
  const r = e.sort((l, o) => l.genre.localeCompare(o.genre));
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx('div', {
        className: 'books-genres-container',
        children: r.map((l) =>
          s.jsx(
            'h3',
            {
              className: 'books-genre-name',
              children: s.jsx(b, {
                to: `/books/genre/${l.genre.split(' ').join('_')}`,
                state: l.genre,
                onClick: n,
                children: l.genre,
              }),
            },
            l._id
          )
        ),
      }),
      s.jsx(dm, {}),
    ],
  });
}
const _m = () =>
    s.jsxs('svg', {
      height: '15px',
      width: '15px',
      version: '1.1',
      id: 'Capa_1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 47.94 47.94',
      children: [
        s.jsxs('defs', {
          children: [
            s.jsxs('linearGradient', {
              id: 'gradient',
              children: [
                s.jsx('stop', { offset: '50%', stopColor: '#ff8d1e' }),
                s.jsx('stop', { offset: '50%', stopColor: '#444' }),
              ],
            }),
            s.jsx('style', {}),
          ],
        }),
        s.jsx('path', {
          fill: 'url(#gradient)',
          d: `M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z`,
        }),
      ],
    }),
  su = ({ isFilled: e }) =>
    s.jsx('svg', {
      height: '15px',
      width: '15px',
      version: '1.1',
      id: 'Capa_1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 47.94 47.94',
      children: s.jsx('path', {
        fill: e ? '#ff8d1e' : '#444',
        d: `M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z`,
      }),
    }),
  Bd = ({ rating: e }) => {
    const n = Math.trunc(e),
      r = Math.round(e % 1),
      l = [];
    for (let o = 0; o < 5; o++)
      o < n
        ? l.push(s.jsx(su, { isFilled: !0 }, o))
        : o === n && r > 0
        ? l.push(s.jsx(_m, {}, o))
        : l.push(s.jsx(su, { isFilled: !1 }, o));
    return s.jsx('div', { children: l });
  };
function Fr({ book: e }) {
  var r;
  const t = ht(),
    n = () => {
      const l = e.title.split(' ').join('_');
      t(`/books/${l}/${e._id}`);
    };
  return s.jsxs(
    'div',
    {
      onClick: n,
      className: 'bookCard-container',
      children: [
        s.jsx('img', {
          className: 'bookCard-cover',
          src:
            (r = e == null ? void 0 : e.image) == null ? void 0 : r.thumbnail,
          alt: '',
        }),
        s.jsxs('h2', {
          className: 'bookCard-title',
          children: [
            (e == null ? void 0 : e.title.split(' ').length) < 5
              ? e == null
                ? void 0
                : e.title
              : e == null
              ? void 0
              : e.title.split(' ').slice(0, 4).join(' '),
            (e == null ? void 0 : e.title.split(' ').length) > 4 ? '...' : '',
          ],
        }),
        s.jsx('h3', {
          className: 'bookCard-author',
          children: e == null ? void 0 : e.author,
        }),
        s.jsx(Bd, { rating: e == null ? void 0 : e.avgRating }),
        s.jsxs('p', {
          className: 'bookCard-price',
          children: [e == null ? void 0 : e.price, ' €'],
        }),
        (e == null ? void 0 : e.home) &&
          s.jsxs('p', {
            className: 'bookCard-description',
            children: [
              e == null
                ? void 0
                : e.description.split(' ').slice(0, 10).join(' '),
              '...',
            ],
          }),
      ],
    },
    e == null ? void 0 : e._id
  );
}
function uo({ book: e, singleBook: t }) {
  const { hideUpdateDeleteBookForms: n } = g.useContext(Z),
    r = () => {
      n();
      let l = JSON.parse(localStorage.getItem('cart'));
      if (l)
        e
          ? ((l = [...l, `${e._id} 1`]),
            localStorage.setItem('cart', JSON.stringify(l)))
          : ((l = [...l, `${t._id} 1`]),
            localStorage.setItem('cart', JSON.stringify(l)));
      else if (e) {
        let o = [`${e._id} 1`];
        localStorage.setItem('cart', JSON.stringify(o));
      } else {
        let o = [`${t._id} 1`];
        localStorage.setItem('cart', JSON.stringify(o));
      }
    };
  return s.jsx('button', {
    className: 'btn-bronze',
    onClick: r,
    children: 'Add to cart',
  });
}
function co({ book: e }) {
  const {
      bookToDelete: t,
      setBookToDelete: n,
      setBookToUpdate: r,
    } = g.useContext(Z),
    l = () => {
      r(null), n(t === null ? e : null);
    };
  return s.jsx('button', {
    className: 'btn-steelblue',
    onClick: l,
    children: 'Delete book',
  });
}
function Us({ book: e }) {
  const {
      setBookToDelete: t,
      updateSuccess: n,
      setUpdateSuccess: r,
    } = g.useContext(Z),
    [l, o] = g.useState(''),
    i = () => t(null),
    a = () => {
      const u = sessionStorage.getItem('token');
      u &&
        fetch(
          `https://logos-bookstore.onrender.com/api/books/delete/${e._id}`,
          { method: 'DELETE', headers: { token: u } }
        )
          .then((c) => c.json())
          .then((c) => {
            c.success &&
              (o(c.message),
              setTimeout(() => {
                t(null), o(''), r(!n);
              }, 2e3));
          })
          .catch((c) => console.log(c));
    };
  return s.jsxs('div', {
    className: 'deleteBook-container',
    children: [
      l && s.jsx('p', { className: 'update-delete-book-msg', children: l }),
      s.jsx('p', {
        children:
          "Are you sure you want to remove this book from the shop's database?",
      }),
      s.jsxs('div', {
        className: 'deleteBook-btns-container',
        children: [
          s.jsx('button', {
            className: 'btn-bronze admin-btn-small',
            onClick: a,
            children: 'Yes',
          }),
          s.jsx('button', {
            className: 'btn-steelblue admin-btn-small',
            onClick: i,
            children: 'Cancel',
          }),
        ],
      }),
    ],
  });
}
function fo({ book: e }) {
  const {
      bookToUpdate: t,
      setBookToUpdate: n,
      setBookToDelete: r,
    } = g.useContext(Z),
    l = () => {
      r(null), n(t === null ? e : null);
    };
  return s.jsx('button', {
    className: 'btn-steelblue',
    onClick: l,
    children: 'Update book',
  });
}
function po({ book: e }) {
  const {
      setBookToUpdate: t,
      updateSuccess: n,
      setUpdateSuccess: r,
    } = g.useContext(Z),
    [l, o] = g.useState(''),
    [i, a] = g.useState(''),
    u = () => t(null),
    c = () => {
      o(''), a('');
    },
    h = (p) => {
      var x, w;
      p.preventDefault();
      const y = sessionStorage.getItem('token');
      y &&
        ((w = (x = p.target) == null ? void 0 : x.image) != null && w.value
          ? fetch(
              `https://logos-bookstore.onrender.com/api/books/update/${e._id}`,
              {
                method: 'PATCH',
                headers: { token: y },
                body: new FormData(p.target),
              }
            )
              .then((j) => j.json())
              .then((j) => {
                j.success &&
                  (o(j.message),
                  setTimeout(() => {
                    t(null), o(''), r(!n);
                  }, 2e3));
              })
              .catch((j) => console.log(j))
          : o('Please choose an image and try again.'));
    },
    v = (p) => {
      p.preventDefault();
      const y = {
        title: p.target.title.value,
        author: p.target.author.value,
        year: Number(p.target.year.value),
        publisher: p.target.publisher.value,
        genre: p.target.genre.value,
        description: p.target.description.value,
        pages: Number(p.target.pages.value),
        price: Number(p.target.price.value),
        ISBN: p.target.isbn.value,
      };
      if (
        y.title === '' &&
        y.author === '' &&
        y.publisher === '' &&
        y.genre === '' &&
        y.description === '' &&
        y.ISBN === '' &&
        y.year === 0 &&
        y.pages === 0 &&
        y.price === 0
      )
        a('Please enter the information you wish to update and try again.');
      else {
        const x = sessionStorage.getItem('token');
        x &&
          fetch(
            `https://logos-bookstore.onrender.com/api/books/update/${e._id}`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: x },
              body: JSON.stringify(y),
            }
          )
            .then((w) => w.json())
            .then((w) => {
              w.success &&
                (a(w.message),
                setTimeout(() => {
                  t(null), a(''), r(!n);
                }, 2e3));
            })
            .catch((w) => console.log(w));
      }
    };
  return s.jsxs('div', {
    className: 'updateBook-container',
    children: [
      s.jsxs('form', {
        className: 'updateBook-img-form',
        onSubmit: h,
        children: [
          l && s.jsx('p', { className: 'update-delete-book-msg', children: l }),
          s.jsx('legend', {
            className: 'updateBook-legend',
            children: 'Upload new book image',
          }),
          s.jsx('input', {
            type: 'file',
            name: 'image',
            id: 'image',
            onFocus: c,
          }),
          s.jsxs('div', {
            className: 'updateBook-btns-container',
            children: [
              s.jsx('button', {
                type: 'button',
                className: 'btn-steelblue admin-btn-small',
                onClick: u,
                children: 'Cancel',
              }),
              s.jsx('button', {
                className: 'btn-bronze admin-btn-small',
                onClick: c,
                children: 'Send',
              }),
            ],
          }),
        ],
      }),
      s.jsxs('form', {
        className: 'updateBook-details-form',
        onSubmit: v,
        children: [
          i && s.jsx('p', { className: 'update-delete-book-msg', children: i }),
          s.jsx('legend', {
            className: 'updateBook-legend',
            children: 'Update book details',
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'title', children: 'Title' }),
              s.jsx('input', {
                type: 'text',
                name: 'title',
                id: 'title',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'author', children: 'Author' }),
              s.jsx('input', {
                type: 'text',
                name: 'author',
                id: 'author',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'year', children: 'Year' }),
              s.jsx('input', {
                type: 'number',
                name: 'year',
                id: 'year',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'publisher', children: 'Publisher' }),
              s.jsx('input', {
                type: 'text',
                name: 'publisher',
                id: 'publisher',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'genre', children: 'Genre' }),
              s.jsx('input', {
                type: 'text',
                name: 'genre',
                id: 'genre',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', {
                htmlFor: 'description',
                children: 'Description',
              }),
              s.jsx('textarea', {
                name: 'description',
                id: 'description',
                cols: '23',
                rows: '4',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'pages', children: 'No. of pages' }),
              s.jsx('input', {
                type: 'number',
                step: 'any',
                name: 'pages',
                id: 'pages',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'price', children: 'Price' }),
              s.jsx('input', {
                type: 'number',
                step: 'any',
                name: 'price',
                id: 'price',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('label', { htmlFor: 'isbn', children: 'ISBN' }),
              s.jsx('input', {
                type: 'text',
                name: 'isbn',
                id: 'isbn',
                onFocus: c,
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'updateBook-btns-container',
            children: [
              s.jsx('button', {
                type: 'button',
                className: 'btn-steelblue admin-btn-small',
                onClick: u,
                children: 'Cancel',
              }),
              s.jsx('button', {
                className: 'btn-bronze admin-btn-small',
                onFocus: c,
                children: 'Send',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ms({ booksPerPage: e, totalBooks: t }) {
  const {
      currentPage: n,
      setCurrentPage: r,
      hideUpdateDeleteBookForms: l,
    } = g.useContext(Z),
    o = [];
  for (let a = 1; a <= Math.ceil(t / e); a++) o.push(a);
  const i = (a) => {
    l(), r(a);
  };
  return s.jsx('nav', {
    children: s.jsx('ul', {
      className: 'pagination-container',
      children: o.map((a) =>
        s.jsx(
          'li',
          {
            className:
              n === a
                ? 'pagination-li pagination-active-link'
                : 'pagination-li',
            onClick: () => i(a),
            children: a,
          },
          a
        )
      ),
    }),
  });
}
function Tm() {
  const { state: e } = Dn(),
    {
      booksToGenre: t,
      setBooksToGenre: n,
      user: r,
      bookToUpdate: l,
      bookToDelete: o,
      currentPage: i,
      setCurrentPage: a,
      booksPerPage: u,
      updateSuccess: c,
    } = g.useContext(Z),
    h = () => {
      fetch('https://logos-bookstore.onrender.com/api/books/genre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ genre: e }),
      })
        .then((w) => w.json())
        .then((w) => {
          w.success && (a(1), n(w.data));
        })
        .catch((w) => console.log(w));
    };
  g.useEffect(() => {
    h();
  }, [e]),
    g.useEffect(() => {
      h();
    }, [c]);
  const v = i * u,
    p = v - u,
    x = t
      .sort((w, j) =>
        w.author.split(' ').at(-1).localeCompare(j.author.split(' ').at(-1))
      )
      .slice(p, v);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx('div', {
        className: 'books-container',
        children: x.map((w) =>
          s.jsxs(
            'div',
            {
              children: [
                s.jsxs('div', {
                  className: 'bookCard-and-btns-container',
                  children: [
                    s.jsx(Fr, { book: w }),
                    s.jsxs('div', {
                      className: 'cart-and-admin-btns-container',
                      children: [
                        s.jsx(uo, { book: w }),
                        (r == null ? void 0 : r.role) === 'admin' &&
                          s.jsx(fo, { book: w }),
                        (r == null ? void 0 : r.role) === 'admin' &&
                          s.jsx(co, { book: w }),
                      ],
                    }),
                  ],
                }),
                (l == null ? void 0 : l._id) === w._id &&
                  s.jsx(po, { book: w }),
                (o == null ? void 0 : o._id) === w._id &&
                  s.jsx(Us, { book: w }),
              ],
            },
            w._id
          )
        ),
      }),
      s.jsx(Ms, { booksPerPage: u, totalBooks: t.length }),
    ],
  });
}
function Om() {
  const [e, t] = g.useState();
  return (
    g.useEffect(() => {
      async function n() {
        try {
          const r = await fetch(
            'https://logos-bookstore.onrender.com/api/genres/random'
          );
          if (r.ok) {
            const l = await r.json();
            l.success && t({ ...l.data, home: !0 });
          }
        } catch {}
      }
      n();
    }, []),
    s.jsxs('div', {
      className: 'home-container',
      children: [
        s.jsx('p', {
          className: 'home-p-one',
          children: 'Looking for a good book?',
        }),
        s.jsxs('div', {
          className: 'home-grid',
          children: [
            s.jsx('p', { className: 'home-p-two', children: 'Try' }),
            s.jsx('div', {
              className: 'home-book-container',
              children: s.jsx(Fr, { book: e }),
            }),
          ],
        }),
      ],
    })
  );
}
function As() {
  return s.jsx(s.Fragment, {
    children: s.jsx('div', {
      className: 'continue-container',
      children: s.jsx('button', {
        className: 'continue-button',
        type: 'submit',
        children: 'Continue',
      }),
    }),
  });
}
function Ws({
  loginError: e,
  setLoginError: t,
  errorMSGs: n,
  setErrorMSGs: r,
}) {
  const l = () => {
    e === 'Please make sure your email is correct.' && t(''),
      r({ ...n, email: '' });
  };
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'email-container',
      children: [
        s.jsx('label', {
          className: 'email-label',
          htmlFor: 'email',
          children: 'Email',
        }),
        s.jsx('input', {
          onFocus: l,
          className: 'email-input',
          type: 'email',
          name: 'email',
          id: 'email',
        }),
      ],
    }),
  });
}
function Hs({
  loginError: e,
  setLoginError: t,
  errorMSGs: n,
  setErrorMSGs: r,
}) {
  const l = () => {
    e === 'Please make sure your password is correct.' && t(''),
      r({ ...n, password: '' });
  };
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'password-container',
      children: [
        s.jsx('label', {
          className: 'password-label',
          htmlFor: 'password',
          children: 'Password',
        }),
        s.jsx('input', {
          onFocus: l,
          className: 'password-input',
          type: 'password',
          name: 'password',
          id: 'password',
        }),
      ],
    }),
  });
}
function Fm() {
  const { setUser: e } = g.useContext(Z),
    [t, n] = g.useState(''),
    r = ht(),
    l = (o) => {
      o.preventDefault();
      const i = {
        email: o.target.email.value,
        password: o.target.password.value,
      };
      fetch('https://logos-bookstore.onrender.com/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(i),
      })
        .then((a) => {
          const u = a.headers.get('token');
          return u && sessionStorage.setItem('token', u), a.json();
        })
        .then((a) => {
          a.success ? (e(a.data), r('/profile')) : n(a.message);
        })
        .catch((a) => console.log(a));
    };
  return s.jsxs('div', {
    className: 'login-container',
    children: [
      s.jsx('h2', { className: 'sign-in', children: 'Sign In' }),
      s.jsxs('form', {
        className: 'login-form',
        onSubmit: l,
        children: [
          t === 'Please make sure your email is correct.' &&
            s.jsx('p', { children: t }),
          s.jsx(Ws, { loginError: t, setLoginError: n }),
          t === 'Please make sure your password is correct.' &&
            s.jsx('p', { children: t }),
          s.jsx(Hs, { loginError: t, setLoginError: n }),
          s.jsx(As, {}),
        ],
      }),
    ],
  });
}
function Ud({ errorMSGs: e, setErrorMSGs: t }) {
  const n = () => {
    t({ ...e, firstName: '' });
  };
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'firstName-container',
      children: [
        s.jsx('label', {
          className: 'firstName-label',
          htmlFor: 'firstName',
          children: 'First Name',
        }),
        s.jsx('input', {
          onFocus: n,
          className: 'firstName-input',
          type: 'text',
          name: 'firstName',
          id: 'firstName',
        }),
      ],
    }),
  });
}
function Md({ errorMSGs: e, setErrorMSGs: t }) {
  const n = () => {
    t({ ...e, lastName: '' });
  };
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'lastName-container',
      children: [
        s.jsx('label', {
          className: 'lastName-label',
          htmlFor: 'lastName',
          children: 'Last Name',
        }),
        s.jsx('input', {
          onFocus: n,
          className: 'lastName-input',
          type: 'text',
          name: 'lastName',
          id: 'lastName',
        }),
      ],
    }),
  });
}
function au() {
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'image-container',
      children: [
        s.jsx('label', {
          className: 'image-label',
          htmlFor: 'image',
          children: 'Image',
        }),
        s.jsx('input', {
          className: 'image-input',
          type: 'file',
          name: 'image',
          id: 'image',
        }),
      ],
    }),
  });
}
function Rm() {
  return s.jsx(s.Fragment, {
    children: s.jsx('div', {
      className: 'upload-container',
      children: s.jsx('button', {
        className: 'upload-button continue-button',
        type: 'submit',
        children: 'Upload',
      }),
    }),
  });
}
let zm = { data: '' },
  Lm = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || zm,
  Im = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  $m = /\/\*[^]*?\*\/|  +/g,
  uu = /\n+/g,
  wt = (e, t) => {
    let n = '',
      r = '',
      l = '';
    for (let o in e) {
      let i = e[o];
      o[0] == '@'
        ? o[1] == 'i'
          ? (n = o + ' ' + i + ';')
          : (r +=
              o[1] == 'f'
                ? wt(i, o)
                : o + '{' + wt(i, o[1] == 'k' ? '' : t) + '}')
        : typeof i == 'object'
        ? (r += wt(
            i,
            t
              ? t.replace(/([^,])+/g, (a) =>
                  o.replace(/(^:.*)|([^,])+/g, (u) =>
                    /&/.test(u) ? u.replace(/&/g, a) : a ? a + ' ' + u : u
                  )
                )
              : o
          ))
        : i != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, '-$&').toLowerCase()),
          (l += wt.p ? wt.p(o, i) : o + ':' + i + ';'));
    }
    return n + (t && l ? t + '{' + l + '}' : l) + r;
  },
  et = {},
  Ad = (e) => {
    if (typeof e == 'object') {
      let t = '';
      for (let n in e) t += n + Ad(e[n]);
      return t;
    }
    return e;
  },
  Dm = (e, t, n, r, l) => {
    let o = Ad(e),
      i =
        et[o] ||
        (et[o] = ((u) => {
          let c = 0,
            h = 11;
          for (; c < u.length; ) h = (101 * h + u.charCodeAt(c++)) >>> 0;
          return 'go' + h;
        })(o));
    if (!et[i]) {
      let u =
        o !== e
          ? e
          : ((c) => {
              let h,
                v,
                p = [{}];
              for (; (h = Im.exec(c.replace($m, ''))); )
                h[4]
                  ? p.shift()
                  : h[3]
                  ? ((v = h[3].replace(uu, ' ').trim()),
                    p.unshift((p[0][v] = p[0][v] || {})))
                  : (p[0][h[1]] = h[2].replace(uu, ' ').trim());
              return p[0];
            })(e);
      et[i] = wt(l ? { ['@keyframes ' + i]: u } : u, n ? '' : '.' + i);
    }
    let a = n && et.g ? et.g : null;
    return (
      n && (et.g = et[i]),
      ((u, c, h, v) => {
        v
          ? (c.data = c.data.replace(v, u))
          : c.data.indexOf(u) === -1 && (c.data = h ? u + c.data : c.data + u);
      })(et[i], t, r, a),
      i
    );
  },
  Bm = (e, t, n) =>
    e.reduce((r, l, o) => {
      let i = t[o];
      if (i && i.call) {
        let a = i(n),
          u = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        i = u
          ? '.' + u
          : a && typeof a == 'object'
          ? a.props
            ? ''
            : wt(a, '')
          : a === !1
          ? ''
          : a;
      }
      return r + l + (i ?? '');
    }, '');
function ho(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Dm(
    n.unshift
      ? n.raw
        ? Bm(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {})
      : n,
    Lm(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Wd, Ai, Wi;
ho.bind({ g: 1 });
let dt = ho.bind({ k: 1 });
function Um(e, t, n, r) {
  (wt.p = t), (Wd = e), (Ai = n), (Wi = r);
}
function Ut(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function l(o, i) {
      let a = Object.assign({}, o),
        u = a.className || l.className;
      (n.p = Object.assign({ theme: Ai && Ai() }, a)),
        (n.o = / *go\d+/.test(u)),
        (a.className = ho.apply(n, r) + (u ? ' ' + u : '')),
        t && (a.ref = i);
      let c = e;
      return (
        e[0] && ((c = a.as || e), delete a.as), Wi && c[0] && Wi(a), Wd(c, a)
      );
    }
    return t ? t(l) : l;
  };
}
var Mm = (e) => typeof e == 'function',
  Al = (e, t) => (Mm(e) ? e(t) : e),
  Am = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Hd = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)');
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Wm = 20,
  dl = new Map(),
  Hm = 1e3,
  cu = (e) => {
    if (dl.has(e)) return;
    let t = setTimeout(() => {
      dl.delete(e), nn({ type: 4, toastId: e });
    }, Hm);
    dl.set(e, t);
  },
  Vm = (e) => {
    let t = dl.get(e);
    t && clearTimeout(t);
  },
  Hi = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Wm) };
      case 1:
        return (
          t.toast.id && Vm(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((o) => o.id === n.id)
          ? Hi(e, { type: 1, toast: n })
          : Hi(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? cu(r)
            : e.toasts.forEach((o) => {
                cu(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === r || r === void 0 ? { ...o, visible: !1 } : o
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let l = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + l,
          })),
        };
    }
  },
  fl = [],
  pl = { toasts: [], pausedAt: void 0 },
  nn = (e) => {
    (pl = Hi(pl, e)),
      fl.forEach((t) => {
        t(pl);
      });
  },
  Qm = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Gm = (e = {}) => {
    let [t, n] = g.useState(pl);
    g.useEffect(
      () => (
        fl.push(n),
        () => {
          let l = fl.indexOf(n);
          l > -1 && fl.splice(l, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((l) => {
      var o, i;
      return {
        ...e,
        ...e[l.type],
        ...l,
        duration:
          l.duration ||
          ((o = e[l.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          Qm[l.type],
        style: {
          ...e.style,
          ...((i = e[l.type]) == null ? void 0 : i.style),
          ...l.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  Ym = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Am(),
  }),
  Rr = (e) => (t, n) => {
    let r = Ym(t, e, n);
    return nn({ type: 2, toast: r }), r.id;
  },
  _e = (e, t) => Rr('blank')(e, t);
_e.error = Rr('error');
_e.success = Rr('success');
_e.loading = Rr('loading');
_e.custom = Rr('custom');
_e.dismiss = (e) => {
  nn({ type: 3, toastId: e });
};
_e.remove = (e) => nn({ type: 4, toastId: e });
_e.promise = (e, t, n) => {
  let r = _e.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (l) => (
          _e.success(Al(t.success, l), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          l
        )
      )
      .catch((l) => {
        _e.error(Al(t.error, l), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var Km = (e, t) => {
    nn({ type: 1, toast: { id: e, height: t } });
  },
  Jm = () => {
    nn({ type: 5, time: Date.now() });
  },
  Xm = (e) => {
    let { toasts: t, pausedAt: n } = Gm(e);
    g.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        i = t.map((a) => {
          if (a.duration === 1 / 0) return;
          let u = (a.duration || 0) + a.pauseDuration - (o - a.createdAt);
          if (u < 0) {
            a.visible && _e.dismiss(a.id);
            return;
          }
          return setTimeout(() => _e.dismiss(a.id), u);
        });
      return () => {
        i.forEach((a) => a && clearTimeout(a));
      };
    }, [t, n]);
    let r = g.useCallback(() => {
        n && nn({ type: 6, time: Date.now() });
      }, [n]),
      l = g.useCallback(
        (o, i) => {
          let {
              reverseOrder: a = !1,
              gutter: u = 8,
              defaultPosition: c,
            } = i || {},
            h = t.filter(
              (y) => (y.position || c) === (o.position || c) && y.height
            ),
            v = h.findIndex((y) => y.id === o.id),
            p = h.filter((y, x) => x < v && y.visible).length;
          return h
            .filter((y) => y.visible)
            .slice(...(a ? [p + 1] : [0, p]))
            .reduce((y, x) => y + (x.height || 0) + u, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: Km,
        startPause: Jm,
        endPause: r,
        calculateOffset: l,
      },
    };
  },
  Zm = dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  qm = dt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  bm = dt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  ev = Ut('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qm} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bm} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  tv = dt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  nv = Ut('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${tv} 1s linear infinite;
`,
  rv = dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  lv = dt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  ov = Ut('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${rv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  iv = Ut('div')`
  position: absolute;
`,
  sv = Ut('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  av = dt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  uv = Ut('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${av} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  cv = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == 'string'
        ? g.createElement(uv, null, t)
        : t
      : n === 'blank'
      ? null
      : g.createElement(
          sv,
          null,
          g.createElement(nv, { ...r }),
          n !== 'loading' &&
            g.createElement(
              iv,
              null,
              n === 'error'
                ? g.createElement(ev, { ...r })
                : g.createElement(ov, { ...r })
            )
        );
  },
  dv = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  fv = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  pv = '0%{opacity:0;} 100%{opacity:1;}',
  hv = '0%{opacity:1;} 100%{opacity:0;}',
  mv = Ut('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  vv = Ut('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  gv = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, l] = Hd() ? [pv, hv] : [dv(n), fv(n)];
    return {
      animation: t
        ? `${dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${dt(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  yv = g.memo(({ toast: e, position: t, style: n, children: r }) => {
    let l = e.height
        ? gv(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      o = g.createElement(cv, { toast: e }),
      i = g.createElement(vv, { ...e.ariaProps }, Al(e.message, e));
    return g.createElement(
      mv,
      { className: e.className, style: { ...l, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: o, message: i })
        : g.createElement(g.Fragment, null, o, i)
    );
  });
Um(g.createElement);
var xv = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: l,
  }) => {
    let o = g.useCallback(
      (i) => {
        if (i) {
          let a = () => {
            let u = i.getBoundingClientRect().height;
            r(e, u);
          };
          a(),
            new MutationObserver(a).observe(i, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return g.createElement('div', { ref: o, className: t, style: n }, l);
  },
  wv = (e, t) => {
    let n = e.includes('top'),
      r = n ? { top: 0 } : { bottom: 0 },
      l = e.includes('center')
        ? { justifyContent: 'center' }
        : e.includes('right')
        ? { justifyContent: 'flex-end' }
        : {};
    return {
      left: 0,
      right: 0,
      display: 'flex',
      position: 'absolute',
      transition: Hd() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...l,
    };
  },
  kv = ho`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Xr = 16,
  mo = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: l,
    containerStyle: o,
    containerClassName: i,
  }) => {
    let { toasts: a, handlers: u } = Xm(n);
    return g.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: Xr,
          left: Xr,
          right: Xr,
          bottom: Xr,
          pointerEvents: 'none',
          ...o,
        },
        className: i,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      a.map((c) => {
        let h = c.position || t,
          v = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          p = wv(h, v);
        return g.createElement(
          xv,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? kv : '',
            style: p,
          },
          c.type === 'custom'
            ? Al(c.message, c)
            : l
            ? l(c)
            : g.createElement(yv, { toast: c, position: h })
        );
      })
    );
  },
  Rn = _e;
function Ht({ children: e, update: t }) {
  const { user: n, setUser: r } = g.useContext(Z),
    l = async (o) => {
      var i, a, u, c, h, v, p, y, x, w, j, d;
      o.preventDefault();
      try {
        const f = sessionStorage.getItem('token');
        if (f) {
          let m;
          if (
            (a = (i = o.target) == null ? void 0 : i.firstName) != null &&
            a.value
          )
            m = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: f },
              body: JSON.stringify({ firstName: o.target.firstName.value }),
            };
          else if (
            (c = (u = o.target) == null ? void 0 : u.lastName) != null &&
            c.value
          )
            m = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: f },
              body: JSON.stringify({ lastName: o.target.lastName.value }),
            };
          else if (
            (v = (h = o.target) == null ? void 0 : h.email) != null &&
            v.value
          )
            m = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: f },
              body: JSON.stringify({ email: o.target.email.value }),
            };
          else if (
            (y = (p = o.target) == null ? void 0 : p.password) != null &&
            y.value &&
            (w = (x = o.target) == null ? void 0 : x.reEnter) != null &&
            w.value
          )
            m = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: f },
              body: JSON.stringify({ password: o.target.password.value }),
            };
          else if (
            (d = (j = o.target) == null ? void 0 : j.image) != null &&
            d.value
          )
            m = {
              method: 'PATCH',
              headers: { token: f },
              body: new FormData(o.target),
            };
          else if (
            o.target.street.value &&
            o.target.zip.value &&
            o.target.city.value &&
            o.target.country.value
          ) {
            let S = {
              street: o.target.street.value,
              zip: o.target.zip.value,
              city: o.target.city.value,
              country: o.target.country.value,
            };
            m = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: f },
              body: JSON.stringify({ address: S }),
            };
          }
          const k = await fetch(
            `https://logos-bookstore.onrender.com/api/user/update/${n._id}`,
            m
          );
          if (k.ok) {
            const S = await k.json();
            S.success && (Rn.success('Update successful!'), r(S.data));
          }
        }
      } catch {}
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(mo, { position: 'top-center' }),
      s.jsx('div', {
        className: 'form-container',
        children: s.jsx('form', {
          className: 'form-form',
          onSubmit: l,
          children: s.jsxs('fieldset', {
            className: 'form-fieldset',
            children: [
              s.jsx('legend', { className: 'form-legend', children: t }),
              e,
              s.jsx(As, {}),
            ],
          }),
        }),
      }),
    ],
  });
}
function Vd({ setErrorReEnterPW: e }) {
  const t = () => e('');
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'reEnter-container',
      children: [
        s.jsx('label', {
          className: 'reEnter-label',
          htmlFor: 're-enter',
          children: 'Re-enter password',
        }),
        s.jsx('input', {
          onFocus: t,
          className: 'reEnter-input',
          type: 'password',
          name: 'reEnter',
          id: 'reEnter',
        }),
      ],
    }),
  });
}
function jv() {
  return s.jsx(s.Fragment, {
    children: s.jsxs('div', {
      className: 'combinedName-container',
      children: [
        s.jsx('label', {
          className: 'combinedName-label',
          htmlFor: 'combinedName',
          children: 'Author',
        }),
        s.jsx('input', {
          className: 'combinedName-input',
          type: 'text',
          name: 'combinedName',
          id: 'combinedName',
        }),
      ],
    }),
  });
}
function Sv({
  book: e,
  setBookToReview: t,
  setReviewsChange: n,
  userReviews: r,
}) {
  const { user: l, setReviewBtn: o } = g.useContext(Z),
    [i, a] = g.useState(''),
    u = r.find((p) => p.book === e._id),
    c = async (p) => {
      p.preventDefault();
      let y;
      p.target.review.value
        ? (y = {
            book: e._id,
            text: p.target.review.value,
            rating: Number(p.target.rating.value),
            userId: l._id,
          })
        : (y = {
            book: e._id,
            rating: Number(p.target.rating.value),
            userId: l._id,
          });
      try {
        const x = sessionStorage.getItem('token');
        if (x) {
          const w = await fetch(
            'https://logos-bookstore.onrender.com/api/reviews/new',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', token: x },
              body: JSON.stringify(y),
            }
          );
          if (w.ok) {
            const j = await w.json();
            j.success
              ? (Rn.success('Review submitted!'),
                t(null),
                o(null),
                n(new Date()))
              : a(j.message);
          }
        }
      } catch (x) {
        console.log(x);
      }
    },
    h = () => {
      i !== '' && a('');
    },
    v = async (p) => {
      var x, w, j, d, f, m, k, S;
      p.preventDefault();
      let y;
      (w = (x = p.target) == null ? void 0 : x.review) != null &&
      w.value &&
      (d = (j = p.target) == null ? void 0 : j.rating) != null &&
      d.value
        ? (y = {
            text: p.target.review.value,
            rating: Number(p.target.rating.value),
          })
        : (m = (f = p.target) == null ? void 0 : f.review) != null && m.value
        ? (y = { text: p.target.review.value })
        : (S = (k = p.target) == null ? void 0 : k.rating) != null &&
          S.value &&
          (y = { rating: Number(p.target.rating.value) });
      try {
        const E = sessionStorage.getItem('token');
        if (E) {
          const C = r.find(($) => $.book === e._id),
            T = await fetch(
              `https://logos-bookstore.onrender.com/api/reviews/edit/${C._id}`,
              {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', token: E },
                body: JSON.stringify(y),
              }
            );
          T.ok &&
            (await T.json()).success &&
            (Rn.success('Review updated!'), t(null), o(null));
        }
      } catch (E) {
        console.log(E);
      }
    };
  return s.jsxs('form', {
    className: 'reviewForm-form',
    onSubmit: (p) => (u ? v(p) : c(p)),
    children: [
      s.jsx(mo, { position: 'top-center' }),
      s.jsx('p', {
        className: 'reviewForm-existingReview',
        children: u ? 'New rating' : 'Your rating',
      }),
      i !== '' && s.jsx('p', { children: i }),
      s.jsxs('div', {
        className: 'rating-options-container',
        children: [
          s.jsxs('div', {
            className: 'reviewForm-one',
            children: [
              s.jsx('input', {
                className: 'reviewForm-input',
                type: 'radio',
                name: 'rating',
                id: '1',
                value: '1',
                onClick: h,
              }),
              s.jsx('label', {
                className: 'reviewForm-label',
                htmlFor: '1',
                children: '1',
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'reviewForm-two',
            children: [
              s.jsx('input', {
                className: 'reviewForm-input',
                type: 'radio',
                name: 'rating',
                id: '2',
                value: '2',
                onClick: h,
              }),
              s.jsx('label', {
                className: 'reviewForm-label',
                htmlFor: '2',
                children: '2',
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('input', {
                className: 'reviewForm-input',
                type: 'radio',
                name: 'rating',
                id: '3',
                value: '3',
                onClick: h,
              }),
              s.jsx('label', {
                className: 'reviewForm-label',
                htmlFor: '3',
                children: '3',
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('input', {
                className: 'reviewForm-input',
                type: 'radio',
                name: 'rating',
                id: '4',
                value: '4',
                onClick: h,
              }),
              s.jsx('label', {
                className: 'reviewForm-label',
                htmlFor: '4',
                children: '4',
              }),
            ],
          }),
          s.jsxs('div', {
            children: [
              s.jsx('input', {
                className: 'reviewForm-input',
                type: 'radio',
                name: 'rating',
                id: '5',
                value: '5',
                onClick: h,
              }),
              s.jsx('label', {
                className: 'reviewForm-label',
                htmlFor: '5',
                children: '5',
              }),
            ],
          }),
        ],
      }),
      s.jsx('textarea', {
        className: 'reviewForm-textarea',
        name: 'review',
        id: 'review',
        cols: '30',
        rows: '4',
        placeholder: u
          ? 'write your new review here'
          : 'write your review here',
      }),
      s.jsxs('div', {
        className: 'review-send-cancel',
        children: [
          s.jsx('button', {
            type: 'submit',
            className: 'continue-button',
            children: 'Send',
          }),
          ' ',
          s.jsx('button', {
            onClick: () => {
              t(null), o(null);
            },
            className: 'profile-steelblue',
            children: 'Cancel',
          }),
        ],
      }),
    ],
  });
}
function Nv() {
  var V, q;
  const {
      user: e,
      setUser: t,
      hideUpdateDeleteBookForms: n,
      bookToReview: r,
      setBookToReview: l,
      reviewBtn: o,
      setReviewBtn: i,
    } = g.useContext(Z),
    [a, u] = g.useState([]),
    c = ht(),
    [h, v] = g.useState([]),
    [p, y] = g.useState(null),
    [x, w] = g.useState(!1),
    [j, d] = g.useState(!1),
    [f, m] = g.useState(!1),
    [k, S] = g.useState(!1),
    [E, C] = g.useState(''),
    [T, $] = g.useState(''),
    [z, te] = g.useState('');
  g.useEffect(() => {
    const R = sessionStorage.getItem('token');
    if (R) {
      async function O() {
        try {
          const I = await fetch(
            'https://logos-bookstore.onrender.com/api/orders/user',
            { method: 'GET', headers: { token: R } }
          );
          if (I.ok) {
            const se = await I.json();
            se.success && u(se.data);
          }
        } catch {}
      }
      O();
      async function M() {
        try {
          const I = await fetch(
            'https://logos-bookstore.onrender.com/api/reviews/one_user',
            { method: 'GET', headers: { token: R } }
          );
          if (I.ok) {
            const se = await I.json();
            se.success && v(se.data);
          }
        } catch (I) {
          console.log(I);
        }
      }
      M();
    }
  }, []),
    g.useEffect(() => {
      const R = sessionStorage.getItem('token');
      if (R) {
        async function O() {
          try {
            const M = await fetch(
              'https://logos-bookstore.onrender.com/api/reviews/one_user',
              { method: 'GET', headers: { token: R } }
            );
            if (M.ok) {
              const I = await M.json();
              I.success && v(I.data);
            }
          } catch (M) {
            console.log(M);
          }
        }
        O();
      }
    }, [p]);
  async function Ze(R) {
    R.preventDefault();
    try {
      const O = new FormData(R.target),
        M = sessionStorage.getItem('token');
      if (M) {
        const I = await fetch(
          'https://logos-bookstore.onrender.com/api/books/book',
          { method: 'POST', headers: { token: M }, body: O }
        );
        I.ok
          ? (await I.json()).success &&
            (Rn.success('The upload of the book was successful!'),
            R.target.reset(),
            S(!1))
          : Rn.error(
              'The upload of the book was unsuccessfull! Make sure to fill out all fields.'
            );
      }
    } catch {}
  }
  const qe = async () => {
      try {
        const R = sessionStorage.getItem('token');
        if (R) {
          const O = await fetch(
            `https://logos-bookstore.onrender.com/api/user/delete/${e._id}`,
            { method: 'DELETE', headers: { token: R } }
          );
          O.ok &&
            (await O.json()).success &&
            (t(null), sessionStorage.removeItem('token'), c('/deletedAccount'));
        }
      } catch {}
    },
    rn = () => {
      w(!1), S(!1), d(!1), m(!f);
    },
    ln = () => {
      m(!1), S(!1), d(!1), w(!x);
    },
    Mt = () => {
      m(!1), w(!1), d(!1), S(!k);
    },
    be = () => {
      m(!1), w(!1), S(!1), d(!0);
    },
    P = async (R) => {
      try {
        const O = sessionStorage.getItem('token');
        if (O) {
          const M = await fetch(
            `https://logos-bookstore.onrender.com/api/orders/del/order/${R}`,
            { method: 'DELETE', headers: { token: O } }
          );
          if (M.ok) {
            const I = await M.json();
            I.success && u(I.data);
          }
        }
      } catch {}
    },
    F = async (R, O) => {
      try {
        const M = sessionStorage.getItem('token');
        if (M) {
          const I = await fetch(
            `https://logos-bookstore.onrender.com/api/orders/delete/item/${R}`,
            {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json', token: M },
              body: JSON.stringify({ id: O }),
            }
          );
          if (I.ok) {
            const se = await I.json();
            se.success && u(se.data);
          }
        }
      } catch {}
    },
    L = async (R, O, M) => {
      R.preventDefault();
      try {
        const I = sessionStorage.getItem('token');
        if (I) {
          const se = await fetch(
            `https://logos-bookstore.onrender.com/api/orders/update/${O}`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json', token: I },
              body: JSON.stringify({ qty: R.target.qty.value, book: M }),
            }
          );
          if (se.ok) {
            const Vs = await se.json();
            Vs.success && (u(Vs.data), te(''));
          }
        }
      } catch {}
    };
  return s.jsxs('div', {
    className: 'profile-container',
    children: [
      s.jsx(mo, { position: 'top-center' }),
      s.jsxs('div', {
        className: 'profile-flex-center',
        children: [
          s.jsxs('div', {
            className: 'profile-user',
            children: [
              s.jsx('div', {
                className: 'profile-user-img-container',
                children:
                  ((V = e == null ? void 0 : e.image) == null
                    ? void 0
                    : V.thumbnail) &&
                  s.jsx('img', {
                    className: 'profile-user-img',
                    src:
                      (q = e == null ? void 0 : e.image) == null
                        ? void 0
                        : q.thumbnail,
                    alt: '',
                  }),
              }),
              s.jsxs('div', {
                className: 'profile-user-name',
                children: [
                  s.jsxs('h2', {
                    children: ['Welcome, ', e == null ? void 0 : e.firstName],
                  }),
                  s.jsx('h4', { children: e == null ? void 0 : e.email }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'profile-user-edit-container',
            children: [
              s.jsx('p', {
                className: 'profile-user-edit',
                onClick: rn,
                children: 'Edit your profile',
              }),
              f &&
                s.jsxs('div', {
                  children: [
                    s.jsx(Ht, {
                      update: 'Upload a Profile Image',
                      children: s.jsx(au, {}),
                    }),
                    s.jsx(Ht, {
                      update: 'Update Your First Name',
                      children: s.jsx(Ud, {}),
                    }),
                    s.jsx(Ht, {
                      update: 'Update Your Last Name',
                      children: s.jsx(Md, {}),
                    }),
                    s.jsx(Ht, {
                      update: 'Update Your Email',
                      children: s.jsx(Ws, {}),
                    }),
                    s.jsxs(Ht, {
                      update: 'Update Your Password',
                      children: [s.jsx(Hs, {}), s.jsx(Vd, {})],
                    }),
                    s.jsx('div', {
                      className: 'profile-edit-cancel-div',
                      children: s.jsx('button', {
                        className: 'profile-steelblue',
                        onClick: () => m(!1),
                        children: 'Cancel',
                      }),
                    }),
                  ],
                }),
            ],
          }),
          s.jsxs('div', {
            className: 'profile-orders',
            children: [
              s.jsx('p', {
                className: 'profile-orders-history',
                onClick: ln,
                children: 'Order history',
              }),
              x &&
                a.length === 0 &&
                s.jsx('p', { children: 'No orders yet..' }),
              x &&
                s.jsxs('div', {
                  children: [
                    a.map((R) =>
                      s.jsxs(
                        'div',
                        {
                          children: [
                            s.jsxs('p', {
                              className: 'profile-order-p',
                              children: [
                                s.jsx('span', { children: R.date }),
                                ',',
                                ' ',
                                s.jsxs('span', {
                                  children: [
                                    'Total Price: ',
                                    R.totalPrice,
                                    ' €',
                                  ],
                                }),
                              ],
                            }),
                            T === R._id
                              ? s.jsxs('div', {
                                  children: [
                                    s.jsx('div', {
                                      children: s.jsx('p', {
                                        children:
                                          'Do you really want to delete this order?',
                                      }),
                                    }),
                                    s.jsxs('div', {
                                      className: 'delete-order-btns',
                                      children: [
                                        s.jsx('button', {
                                          className: 'delete-order-yes',
                                          onClick: () => P(R._id),
                                          children: 'Yes',
                                        }),
                                        s.jsx('button', {
                                          className: 'profile-steelblue',
                                          onClick: () => $(''),
                                          children: 'No',
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : s.jsx('div', {
                                  className: 'profile-order-delete-div',
                                  children: s.jsx('button', {
                                    className: 'profile-steelblue',
                                    onClick: () => {
                                      $(R._id), te(''), C(''), l(null), i(null);
                                    },
                                    children: 'Delete Order',
                                  }),
                                }),
                            R.books.map((O) => {
                              var M;
                              return s.jsxs(
                                'div',
                                {
                                  className: 'order-item',
                                  children: [
                                    s.jsxs('div', {
                                      className: 'item-img-title-author',
                                      children: [
                                        s.jsx('img', {
                                          className: 'profile-order-cursor',
                                          onClick: () =>
                                            c(
                                              `/books/${O.title
                                                .split(' ')
                                                .join('_')}/${O._id}`
                                            ),
                                          src:
                                            (M =
                                              O == null ? void 0 : O.image) ==
                                            null
                                              ? void 0
                                              : M.thumbnail,
                                          alt: 'cover',
                                        }),
                                        s.jsxs('div', {
                                          children: [
                                            s.jsxs('p', {
                                              className: 'profile-order-cursor',
                                              onClick: () =>
                                                c(
                                                  `/books/${O.title
                                                    .split(' ')
                                                    .join('_')}/${O._id}`
                                                ),
                                              children: [
                                                '"',
                                                O == null ? void 0 : O.title,
                                                '",',
                                                ' ',
                                              ],
                                            }),
                                            s.jsxs('p', {
                                              children: [
                                                O == null ? void 0 : O.author,
                                                ', ',
                                              ],
                                            }),
                                            s.jsxs('p', {
                                              children: [
                                                O == null ? void 0 : O.price,
                                                ' €',
                                              ],
                                            }),
                                            s.jsxs('p', {
                                              children: [
                                                'Qty:',
                                                R == null
                                                  ? void 0
                                                  : R.quantity.find(
                                                      (I) =>
                                                        (R == null
                                                          ? void 0
                                                          : R.quantity.indexOf(
                                                              I
                                                            )) ===
                                                        R.books.indexOf(O)
                                                    ),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsxs('div', {
                                      className: 'profile-order-updates',
                                      children: [
                                        s.jsx('div', {
                                          className:
                                            'profile-review-form-container',
                                          children:
                                            o === O._id
                                              ? s.jsx('div', {
                                                  className:
                                                    'profile-review-form-div',
                                                  children:
                                                    (r == null
                                                      ? void 0
                                                      : r._id) === O._id &&
                                                    s.jsx(Sv, {
                                                      book: O,
                                                      setBookToReview: l,
                                                      setReviewsChange: y,
                                                      userReviews: h,
                                                    }),
                                                })
                                              : s.jsx('button', {
                                                  className:
                                                    'profile-steelblue',
                                                  onClick: () => {
                                                    l(O),
                                                      te(''),
                                                      C(''),
                                                      i(O._id),
                                                      $('');
                                                  },
                                                  children: h.find(
                                                    (I) => I.book === O._id
                                                  )
                                                    ? 'Edit your review'
                                                    : 'Write a review',
                                                }),
                                        }),
                                        s.jsx('div', {
                                          className: 'profile-qty-container',
                                          children:
                                            z === O._id
                                              ? s.jsxs('div', {
                                                  className: 'profile-qty-div',
                                                  children: [
                                                    s.jsxs('form', {
                                                      className:
                                                        'profile-update-qty-form',
                                                      onSubmit: (I) =>
                                                        L(I, R._id, O._id),
                                                      children: [
                                                        s.jsxs('select', {
                                                          className:
                                                            'profile-select',
                                                          name: 'qty',
                                                          id: 'qty',
                                                          children: [
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '1',
                                                              children: '1',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '2',
                                                              children: '2',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '3',
                                                              children: '3',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '4',
                                                              children: '4',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '5',
                                                              children: '5',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '6',
                                                              children: '6',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '7',
                                                              children: '7',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '8',
                                                              children: '8',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '9',
                                                              children: '9',
                                                            }),
                                                            s.jsx('option', {
                                                              className:
                                                                'cart-option',
                                                              value: '10',
                                                              children: '10',
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsx('button', {
                                                          className:
                                                            'continue-button',
                                                          type: 'submit',
                                                          children: 'Send',
                                                        }),
                                                      ],
                                                    }),
                                                    s.jsx('div', {
                                                      className:
                                                        'profile-qty-cancel-div',
                                                      children: s.jsx(
                                                        'button',
                                                        {
                                                          className:
                                                            'profile-steelblue',
                                                          onClick: () => te(''),
                                                          children: 'Cancel',
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                })
                                              : s.jsx('div', {
                                                  children: s.jsx('button', {
                                                    className:
                                                      'profile-steelblue',
                                                    onClick: () => {
                                                      te(O._id),
                                                        l(null),
                                                        C(''),
                                                        i(null),
                                                        $('');
                                                    },
                                                    children: 'Update Qty',
                                                  }),
                                                }),
                                        }),
                                        s.jsx('div', {
                                          children:
                                            E === O._id
                                              ? s.jsxs('div', {
                                                  className:
                                                    'profile-delete-item-border',
                                                  children: [
                                                    s.jsx('div', {
                                                      className:
                                                        'profile-delete-item-really',
                                                      children: s.jsx('p', {
                                                        children:
                                                          'Do you really want to delete this item from your order?',
                                                      }),
                                                    }),
                                                    s.jsxs('div', {
                                                      className:
                                                        'profile-delete-item-btns',
                                                      children: [
                                                        s.jsx('button', {
                                                          className:
                                                            'delete-order-yes',
                                                          onClick: () =>
                                                            F(O._id, R._id),
                                                          children: 'Yes',
                                                        }),
                                                        s.jsx('button', {
                                                          className:
                                                            'profile-steelblue',
                                                          onClick: () => C(''),
                                                          children: 'No',
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              : s.jsx('div', {
                                                  children: s.jsx('button', {
                                                    className:
                                                      'profile-steelblue',
                                                    onClick: () => {
                                                      C(O._id),
                                                        l(null),
                                                        te(''),
                                                        i(null),
                                                        $('');
                                                    },
                                                    children: 'Delete Item',
                                                  }),
                                                }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                O._id
                              );
                            }),
                          ],
                        },
                        R._id
                      )
                    ),
                    s.jsx('div', {
                      className: 'profile-orders-close',
                      children: s.jsx('button', {
                        className: 'profile-steelblue',
                        onClick: () => w(!1),
                        children: 'Close',
                      }),
                    }),
                  ],
                }),
            ],
          }),
          s.jsx('div', {
            className: 'profile-admin',
            children:
              (e == null ? void 0 : e.role) === 'admin' &&
              s.jsxs(s.Fragment, {
                children: [
                  s.jsxs('div', {
                    className: 'profile-upload-book',
                    children: [
                      s.jsx('p', {
                        className: 'profile-upload-book-p',
                        onClick: Mt,
                        children: 'Upload a book',
                      }),
                      k &&
                        s.jsx('form', {
                          className: 'upload-book-form',
                          onSubmit: Ze,
                          children: s.jsxs('fieldset', {
                            className: 'upload-book-fieldset',
                            children: [
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'title',
                                    children: 'Title',
                                  }),
                                  s.jsx('input', {
                                    type: 'text',
                                    name: 'title',
                                    id: 'title',
                                  }),
                                ],
                              }),
                              s.jsx(jv, {}),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'year',
                                    children: 'Year',
                                  }),
                                  s.jsx('input', {
                                    type: 'number',
                                    name: 'year',
                                    id: 'year',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'publisher',
                                    children: 'Publisher',
                                  }),
                                  s.jsx('input', {
                                    type: 'text',
                                    name: 'publisher',
                                    id: 'publisher',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'genre',
                                    children: 'Genre',
                                  }),
                                  s.jsx('input', {
                                    type: 'text',
                                    name: 'genre',
                                    id: 'genre',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'description',
                                    children: 'Description',
                                  }),
                                  s.jsx('textarea', {
                                    name: 'description',
                                    id: 'description',
                                    cols: '30',
                                    rows: '10',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'pages',
                                    children: 'Number of pages',
                                  }),
                                  s.jsx('input', {
                                    type: 'number',
                                    step: 'any',
                                    name: 'pages',
                                    id: 'pages',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'price',
                                    children: 'Price',
                                  }),
                                  s.jsx('input', {
                                    type: 'number',
                                    step: 'any',
                                    name: 'price',
                                    id: 'price',
                                  }),
                                ],
                              }),
                              s.jsxs('div', {
                                children: [
                                  s.jsx('label', {
                                    htmlFor: 'isbn',
                                    children: 'ISBN',
                                  }),
                                  s.jsx('input', {
                                    type: 'text',
                                    name: 'isbn',
                                    id: 'isbn',
                                  }),
                                ],
                              }),
                              s.jsx(au, {}),
                              s.jsx(Rm, {}),
                              s.jsx('div', {
                                className: 'upload-book-cancel-div',
                                children: s.jsx('button', {
                                  className:
                                    'upload-book-cancel-p profile-steelblue',
                                  onClick: () => S(!1),
                                  children: 'Cancel',
                                }),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  s.jsx('div', {
                    className: 'profile-admin-edit-book',
                    children: s.jsx('p', {
                      className: 'profile-admin-edit-book-p',
                      children: s.jsx(b, {
                        to: '/books/selection',
                        onClick: n,
                        children: 'Edit book information',
                      }),
                    }),
                  }),
                  s.jsx('div', {
                    className: 'profile-admin-delete-book',
                    children: s.jsx('p', {
                      className: 'profile-admin-delete-book-p',
                      children: s.jsx(b, {
                        to: '/books/selection',
                        onClick: n,
                        children: 'Remove a book from assortment',
                      }),
                    }),
                  }),
                ],
              }),
          }),
          s.jsx('div', {
            className: 'profile-delete-account',
            children: j
              ? s.jsxs('div', {
                  children: [
                    s.jsx('div', {
                      className: 'delete-account-really-div',
                      children: s.jsx('p', {
                        children: 'Do you really want to delete your account?',
                      }),
                    }),
                    s.jsxs('div', {
                      className: 'delete-account-btns',
                      children: [
                        s.jsx('button', {
                          className: 'delete-account-yes',
                          onClick: qe,
                          children: 'Yes',
                        }),
                        s.jsx('button', {
                          className: 'profile-steelblue',
                          onClick: () => d(!1),
                          children: 'No',
                        }),
                      ],
                    }),
                  ],
                })
              : s.jsx('p', {
                  className: 'profile-delete-account-p',
                  onClick: be,
                  children: 'DELETE YOUR ACCOUNT',
                }),
          }),
        ],
      }),
    ],
  });
}
function Cv() {
  const { setUser: e } = g.useContext(Z),
    [t, n] = g.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }),
    [r, l] = g.useState(''),
    o = ht(),
    i = (a) => {
      if (
        (a.preventDefault(),
        a.target.password.value !== a.target.reEnter.value &&
          l('Please make sure to enter the same password as above.'),
        a.target.password.value === a.target.reEnter.value)
      ) {
        const u = {
          firstName: a.target.firstName.value,
          lastName: a.target.lastName.value,
          email: a.target.email.value,
          password: a.target.password.value,
        };
        fetch('https://logos-bookstore.onrender.com/api/user/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(u),
        })
          .then((c) => {
            const h = c == null ? void 0 : c.headers.get('token');
            return h && sessionStorage.setItem('token', h), c.json();
          })
          .then((c) => {
            c.success
              ? (Rn.success('Registration successful!'),
                e(c.data),
                setTimeout(() => o('/profile'), 1500))
              : n(
                  c.message.errors.reduce(
                    (h, v) => ((h[v.path] = v.msg), h),
                    {}
                  )
                );
          })
          .catch((c) => console.log(c));
      }
    };
  return s.jsxs('div', {
    className: 'register-container',
    children: [
      s.jsx(mo, { position: 'top-center' }),
      s.jsx('h2', {
        className: 'create-an-account',
        children: 'Create an Account',
      }),
      s.jsxs('form', {
        className: 'register-form',
        onSubmit: i,
        children: [
          t.firstName !== '' && s.jsx('p', { children: t.firstName }),
          s.jsx(Ud, { errorMSGs: t, setErrorMSGs: n }),
          t.lastName && s.jsx('p', { children: t.lastName }),
          s.jsx(Md, { errorMSGs: t, setErrorMSGs: n }),
          t.email && s.jsx('p', { children: t.email }),
          s.jsx(Ws, { errorMSGs: t, setErrorMSGs: n }),
          t.password && s.jsx('p', { children: t.password }),
          s.jsx(Hs, { errorMSGs: t, setErrorMSGs: n }),
          r && s.jsx('p', { children: r }),
          s.jsx(Vd, { errorReEnterPW: r, setErrorReEnterPW: l }),
          s.jsx(As, {}),
        ],
      }),
    ],
  });
}
function Ev() {
  return s.jsx('div', {
    className: 'notFound-container',
    children: s.jsx('h3', { className: 'notFound-msg', children: 'Not Found' }),
  });
}
function Pv() {
  const {
      user: e,
      booksToGenre: t,
      setBooksToGenre: n,
      bookToUpdate: r,
      bookToDelete: l,
      currentPage: o,
      setCurrentPage: i,
      booksPerPage: a,
      updateSuccess: u,
    } = g.useContext(Z),
    c = new URLSearchParams(window.location.search),
    v = (() => {
      let d;
      for (const f of c) d = f[1];
      return d;
    })()
      .split(' ')
      .join('+'),
    p = async () => {
      try {
        const d = await fetch(
          `https://logos-bookstore.onrender.com/api/books/search/${v}`
        );
        if (d.ok) {
          const f = await d.json();
          f.success && (n(f.data), i(1));
        }
      } catch {}
    };
  g.useEffect(() => {
    p();
  }, [v]),
    g.useEffect(() => {
      p();
    }, [u]);
  const y = o * a,
    x = y - a,
    j = t
      .sort((d, f) =>
        d.author.split(' ').at(-1).localeCompare(f.author.split(' ').at(-1))
      )
      .slice(x, y);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx('div', {
        className: 'books-container',
        children: j.map((d) =>
          s.jsxs(
            'div',
            {
              children: [
                s.jsxs('div', {
                  className: 'bookCard-and-btns-container',
                  children: [
                    s.jsx(Fr, { book: d }),
                    s.jsxs('div', {
                      className: 'cart-and-admin-btns-container',
                      children: [
                        s.jsx(uo, { book: d }),
                        (e == null ? void 0 : e.role) === 'admin' &&
                          s.jsx(fo, { book: d }),
                        (e == null ? void 0 : e.role) === 'admin' &&
                          s.jsx(co, { book: d }),
                      ],
                    }),
                  ],
                }),
                (r == null ? void 0 : r._id) === d._id &&
                  s.jsx(po, { book: d }),
                (l == null ? void 0 : l._id) === d._id &&
                  s.jsx(Us, { book: d }),
              ],
            },
            d._id
          )
        ),
      }),
      s.jsx(Ms, { booksPerPage: a, totalBooks: t.length }),
    ],
  });
}
function _v() {
  const [e, t] = g.useState(null),
    [n, r] = g.useState(''),
    [l, o] = g.useState(null),
    {
      user: i,
      bookToUpdate: a,
      bookToDelete: u,
      setBookToDelete: c,
      updateSuccess: h,
    } = g.useContext(Z),
    [v, p] = g.useState(!1),
    { id: y } = Zh(),
    x = ht(),
    w = () => c(null),
    j = async () => {
      try {
        const m = await fetch(
          `https://logos-bookstore.onrender.com/api/reviews/one_book/${y}`
        );
        if (m.ok) {
          const k = await m.json();
          k.success && t(k.data);
        }
      } catch (m) {
        console.log(m);
      }
    },
    d = async () => {
      try {
        const m = await fetch(
          `https://logos-bookstore.onrender.com/api/books/${y}`
        );
        if (m.ok) {
          const k = await m.json();
          k.success && o(k.data);
        }
      } catch (m) {
        console.log(m);
      }
    };
  g.useEffect(() => {
    d(), j();
  }, []),
    g.useEffect(() => {
      d();
    }, [h]);
  const f = () => {
    const m = sessionStorage.getItem('token');
    m &&
      fetch(`https://logos-bookstore.onrender.com/api/books/delete/${l._id}`, {
        method: 'DELETE',
        headers: { token: m },
      })
        .then((k) => k.json())
        .then((k) => {
          k.success &&
            (r(k.message),
            setTimeout(() => {
              x('/books/selection'), c(null), r('');
            }, 2e3));
        })
        .catch((k) => console.log(k));
  };
  return s.jsx(s.Fragment, {
    children:
      l &&
      s.jsxs('div', {
        className: 'singleBook-page',
        children: [
          s.jsxs('div', {
            className: 'bookCard-and-btns-container',
            id: 'singleBook-reset-margin',
            children: [
              s.jsx(Fr, { book: l }),
              s.jsxs('div', {
                className: 'cart-and-admin-btns-container',
                children: [
                  s.jsx(uo, { book: l }),
                  (i == null ? void 0 : i.role) === 'admin' &&
                    s.jsx(fo, { book: l }),
                  (i == null ? void 0 : i.role) === 'admin' &&
                    s.jsx(co, { book: l }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'singleBook-admin-forms',
            children: [
              (a == null ? void 0 : a._id) === l._id &&
                s.jsx('div', {
                  id: 'singleBook-reset-margin-forms',
                  children: s.jsx(po, { book: l }),
                }),
              (u == null ? void 0 : u._id) === l._id &&
                s.jsx('div', {
                  id: 'singleBook-reset-margin-forms',
                  children: s.jsxs('div', {
                    className: 'deleteBook-container',
                    children: [
                      n &&
                        s.jsx('p', {
                          className: 'update-delete-book-msg',
                          children: n,
                        }),
                      s.jsx('p', {
                        children:
                          "Are you sure you want to remove this book from the shop's database?",
                      }),
                      s.jsxs('div', {
                        className: 'deleteBook-btns-container',
                        children: [
                          s.jsx('button', {
                            className: 'btn-bronze admin-btn-small',
                            onClick: f,
                            children: 'Yes',
                          }),
                          s.jsx('button', {
                            type: 'button',
                            className: 'btn-steelblue admin-btn-small',
                            onClick: w,
                            children: 'Cancel',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
          s.jsxs('div', {
            className: 'singleBook-details',
            children: [
              s.jsx('h2', { className: 'singleBook-title', children: l.title }),
              s.jsxs('p', { children: ['by ', l.author] }),
              s.jsx('h3', {
                className: 'singleBook-heading',
                children: 'Details',
              }),
              s.jsxs('p', {
                children: [
                  s.jsx('span', {
                    className: 'singleBook-span',
                    children: ' Publisher:',
                  }),
                  ' ',
                  l.publisher,
                ],
              }),
              s.jsxs('p', {
                children: [
                  s.jsx('span', {
                    className: 'singleBook-span',
                    children: 'Published: ',
                  }),
                  l.year,
                ],
              }),
              s.jsxs('p', {
                children: [
                  s.jsx('span', {
                    className: 'singleBook-span',
                    children: ' Number of pages: ',
                  }),
                  l == null ? void 0 : l.pages,
                ],
              }),
              s.jsxs('p', {
                children: [
                  s.jsx('span', {
                    className: 'singleBook-span',
                    children: 'ISBN: ',
                  }),
                  l.ISBN,
                ],
              }),
              s.jsx('h3', {
                className: 'singleBook-heading',
                children: 'Book description',
              }),
              s.jsxs('p', {
                children: [
                  l.description.split(' ').slice(0, 20).join(' ') + ' ',
                  v
                    ? s.jsxs(s.Fragment, {
                        children: [
                          s.jsx('span', {
                            children:
                              l.description.split(' ').slice(20).join(' ') +
                              ' ',
                          }),
                          s.jsx('span', {
                            className: 'singleBook-show-hide-text',
                            onClick: () => p(!1),
                            children: 'hide',
                          }),
                        ],
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsx('span', { children: '... ' }),
                          s.jsx('span', {
                            className: 'singleBook-show-hide-text',
                            onClick: () => p(!0),
                            children: 'read more',
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'singleBook-reviews',
            children: [
              s.jsx('h3', {
                className: 'singleBook-heading',
                children: 'Reviews',
              }),
              e.length === 0 && s.jsx('p', { children: 'No reviews yet...' }),
              s.jsx('div', {
                children:
                  e &&
                  e.map((m) => {
                    var k;
                    return s.jsxs(
                      'div',
                      {
                        children: [
                          s.jsx('h3', {
                            className: 'singleBook-reviewer',
                            children:
                              (k = m == null ? void 0 : m.userId) == null
                                ? void 0
                                : k.firstName,
                          }),
                          s.jsx(Bd, { rating: m.rating }),
                          s.jsx('p', {
                            className: 'singleBook-review-text',
                            children: m == null ? void 0 : m.text,
                          }),
                        ],
                      },
                      m._id
                    );
                  }),
              }),
            ],
          }),
        ],
      }),
  });
}
let Zr;
const Tv = new Uint8Array(16);
function Ov() {
  if (
    !Zr &&
    ((Zr =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Zr)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return Zr(Tv);
}
const ae = [];
for (let e = 0; e < 256; ++e) ae.push((e + 256).toString(16).slice(1));
function Fv(e, t = 0) {
  return (
    ae[e[t + 0]] +
    ae[e[t + 1]] +
    ae[e[t + 2]] +
    ae[e[t + 3]] +
    '-' +
    ae[e[t + 4]] +
    ae[e[t + 5]] +
    '-' +
    ae[e[t + 6]] +
    ae[e[t + 7]] +
    '-' +
    ae[e[t + 8]] +
    ae[e[t + 9]] +
    '-' +
    ae[e[t + 10]] +
    ae[e[t + 11]] +
    ae[e[t + 12]] +
    ae[e[t + 13]] +
    ae[e[t + 14]] +
    ae[e[t + 15]]
  );
}
const Rv =
    typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  du = { randomUUID: Rv };
function zv(e, t, n) {
  if (du.randomUUID && !t && !e) return du.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Ov)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (let l = 0; l < 16; ++l) t[n + l] = r[l];
    return t;
  }
  return Fv(r);
}
function Lv({ books: e, loading: t }) {
  const { user: n, bookToUpdate: r, bookToDelete: l } = g.useContext(Z);
  return t
    ? s.jsx('h2', { children: 'Loading...' })
    : s.jsx('div', {
        className: 'books-container',
        children: e.map((o) =>
          s.jsxs(
            'div',
            {
              children: [
                s.jsxs('div', {
                  className: 'bookCard-and-btns-container',
                  children: [
                    s.jsx(Fr, { book: o }, o._id),
                    s.jsxs('div', {
                      className: 'cart-and-admin-btns-container',
                      children: [
                        s.jsx(uo, { book: o }, zv()),
                        (n == null ? void 0 : n.role) === 'admin' &&
                          s.jsxs(s.Fragment, {
                            children: [
                              s.jsx(fo, { book: o }),
                              s.jsx(co, { book: o }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (r == null ? void 0 : r._id) === o._id &&
                  s.jsx(po, { book: o }),
                (l == null ? void 0 : l._id) === o._id &&
                  s.jsx(Us, { book: o }),
              ],
            },
            o._id
          )
        ),
      });
}
function Iv() {
  const {
      books: e,
      setBooks: t,
      currentPage: n,
      booksPerPage: r,
      updateSuccess: l,
    } = g.useContext(Z),
    o = async () => {
      try {
        const h = await fetch(
          'https://logos-bookstore.onrender.com/api/books/all'
        );
        if (h.ok) {
          const v = await h.json();
          v.success && t(v.data);
        }
      } catch (h) {
        console.log(h);
      }
    };
  g.useEffect(() => {
    o();
  }, []),
    g.useEffect(() => {
      o();
    }, [l]);
  const i = n * r,
    a = i - r,
    c = e
      .sort((h, v) =>
        h.author.split(' ').at(-1).localeCompare(v.author.split(' ').at(-1))
      )
      .slice(a, i);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(Lv, { books: c }),
      s.jsx(Ms, { booksPerPage: r, totalBooks: e.length }),
    ],
  });
}
function $v() {
  const e = ht(),
    {
      user: t,
      totalPrice: n,
      setTotalPrice: r,
      shoppingCart: l,
      setShoppingCart: o,
    } = g.useContext(Z);
  g.useEffect(() => {
    async function c() {
      var w;
      let p = [],
        y = 0,
        x = JSON.parse(localStorage.getItem('cart'));
      if (x) {
        const j = x.map((d) => h(d.split(' ')[0]));
        (p = await Promise.all(j)), o(p.filter((d) => d));
      }
      for (let j = 0; j < p.length; j++)
        y += (w = p[j]) == null ? void 0 : w.price;
      r(y.toFixed(2));
    }
    async function h(p) {
      try {
        const y = await fetch(
          `https://logos-bookstore.onrender.com/api/books/${p}`
        );
        if (y.ok) {
          const x = await y.json();
          if (x.success) return x.data;
        }
      } catch (y) {
        console.error('Error fetching book data:', y);
      }
    }
    c();
    let v = JSON.parse(localStorage.getItem('cart'));
    if (v) {
      let p = v.map((y) => (y = `${y.slice(0, y.indexOf(' '))} 1`));
      localStorage.setItem('cart', JSON.stringify(p));
    }
  }, []);
  const i = (c) => {
      let h = JSON.parse(localStorage.getItem('cart'));
      if (h) {
        o((x) => x.filter((w) => w._id !== c));
        let v = h.find((x) => x.startsWith(c)).split(' '),
          p = l.find((x) => x._id === c);
        r((x) => (x -= p.price * v[1]).toFixed(2));
        let y = h.filter((x) => !x.startsWith(c));
        localStorage.setItem('cart', JSON.stringify(y));
      }
    },
    a = () => {
      e('/checkout');
    },
    u = (c, h) => {
      let v = JSON.parse(localStorage.getItem('cart'));
      if (v) {
        let p = v.find((d) => d.startsWith(h)).split(' '),
          y = parseInt(c.target.value),
          x = v.indexOf(v.find((d) => d.startsWith(h)));
        v.splice(x, 1, `${p[0]} ${y}`),
          localStorage.setItem('cart', JSON.stringify(v));
        let w = 0,
          j = v.map((d) => d.split(' ')[1]);
        for (let d = 0; d < j.length; d++) w += j[d] * l[d].price;
        r(w.toFixed(2));
      }
    };
  return s.jsxs('div', {
    className: 'cart-container-complete',
    children: [
      s.jsxs('div', {
        className: 'cart-container',
        children: [
          l.length > 0
            ? s.jsxs(s.Fragment, {
                children: [
                  l.map((c, h) => {
                    var v;
                    return s.jsxs(
                      'div',
                      {
                        className: 'cart-item',
                        children: [
                          s.jsx('img', {
                            className: 'cart-cover',
                            src:
                              (v = c == null ? void 0 : c.image) == null
                                ? void 0
                                : v.thumbnail,
                            alt: 'cover',
                          }),
                          s.jsxs('div', {
                            className: 'cart-next-to-cover',
                            children: [
                              s.jsx('h2', {
                                className: 'cart-bookTitle',
                                children: c == null ? void 0 : c.title,
                              }),
                              s.jsx('h3', {
                                className: 'cart-author',
                                children: c == null ? void 0 : c.author,
                              }),
                              s.jsxs('p', {
                                className: 'cart-price',
                                children: [c == null ? void 0 : c.price, ' €'],
                              }),
                              s.jsx('button', {
                                className: 'cart-delete profile-steelblue',
                                onClick: () => i(c._id),
                                children: 'Remove from cart',
                              }),
                              s.jsxs('div', {
                                className: 'cart-quantity-div',
                                children: [
                                  s.jsx('label', {
                                    className: 'cart-label',
                                    htmlFor: 'quantity',
                                    children: 'Qty',
                                  }),
                                  s.jsxs('select', {
                                    className: 'cart-select',
                                    onChange: (p) => u(p, c._id),
                                    name: 'quantity',
                                    id: 'quantity',
                                    children: [
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '1',
                                        children: '1',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '2',
                                        children: '2',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '3',
                                        children: '3',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '4',
                                        children: '4',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '5',
                                        children: '5',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '6',
                                        children: '6',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '7',
                                        children: '7',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '8',
                                        children: '8',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '9',
                                        children: '9',
                                      }),
                                      s.jsx('option', {
                                        className: 'cart-option',
                                        value: '10',
                                        children: '10',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      h
                    );
                  }),
                  s.jsx('div', {
                    className: 'cart-total-price-div',
                    children: s.jsxs('p', {
                      className: 'cart-totalPrice',
                      children: ['Total Price: ', n, ' €'],
                    }),
                  }),
                ],
              })
            : s.jsx('p', {
                className: 'cart-empty',
                children: 'Your cart is empty.',
              }),
          l.length > 0 &&
            t &&
            s.jsx('div', {
              className: 'cart-buy-div',
              children: s.jsx('button', {
                className: 'cart-buy continue-button',
                onClick: a,
                children: 'Buy',
              }),
            }),
        ],
      }),
      !t &&
        s.jsx('p', {
          className: 'cart-please',
          children:
            'Please log in if you want to buy books or create an account.',
        }),
    ],
  });
}
function Dv() {
  return s.jsx(s.Fragment, {
    children: s.jsx('div', {
      className: 'deletedAccount-container',
      children: s.jsx('h3', {
        className: 'deletedAccount-msg',
        children: 'Your account was successfully deleted!',
      }),
    }),
  });
}
function Bv() {
  const {
      user: e,
      totalPrice: t,
      setTotalPrice: n,
      setShoppingCart: r,
      shoppingCart: l,
      setOrderReceived: o,
    } = g.useContext(Z),
    i = ht();
  g.useEffect(() => {
    async function u() {
      let h = [],
        v = 0,
        p = JSON.parse(localStorage.getItem('cart'));
      if (p) {
        const x = p.map((w) => c(w.split(' ')[0]));
        (h = await Promise.all(x)), r(h.filter((w) => w));
      }
      let y = p.map((x) => x.split(' ')[1]);
      for (let x = 0; x < h.length; x++) v += h[x].price * y[x];
      n(v.toFixed(2));
    }
    async function c(h) {
      try {
        const v = await fetch(
          `https://logos-bookstore.onrender.com/api/books/${h}`
        );
        if (v.ok) {
          const p = await v.json();
          if (p.success) return p.data;
        }
      } catch (v) {
        console.error('Error fetching book data:', v);
      }
    }
    u();
  }, []);
  const a = async () => {
    try {
      let c = JSON.parse(localStorage.getItem('cart')).map(
          (m) => m.split(' ')[1]
        ),
        h = new Date(),
        v = h.getFullYear(),
        p = h.getDate(),
        y = h.getMonth(),
        x = h.getHours(),
        w = h.getMinutes(),
        j = [];
      for (let m = 0; m < l.length; m++) j.push(l[m]._id);
      let d = {
        date: `${p}.${y + 1}.${v} - ${x}:${w}`,
        books: j,
        quantity: c,
        totalPrice: t,
        userId: e._id,
      };
      const f = sessionStorage.getItem('token');
      if (f) {
        const m = await fetch(
          'https://logos-bookstore.onrender.com/api/orders/create',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', token: f },
            body: JSON.stringify({ order: d }),
          }
        );
        if (m.ok) {
          const k = await m.json();
          k.success &&
            (o(k.message),
            r([]),
            localStorage.removeItem('cart'),
            i('/thankyou'));
        }
      }
    } catch {}
  };
  return s.jsx('div', {
    className: 'checkout-container-complete',
    children:
      e != null && e.address
        ? s.jsxs('div', {
            className: 'checkout-page-container',
            children: [
              s.jsxs('div', {
                className: 'checkout-address',
                children: [
                  s.jsx('h3', {
                    className: 'checkout-address-p',
                    children: 'Delivery Address',
                  }),
                  s.jsx('p', {
                    className: 'checkout-address-p',
                    children: e.address.street,
                  }),
                  s.jsx('p', {
                    className: 'checkout-address-p',
                    children: e.address.zip,
                  }),
                  s.jsx('p', {
                    className: 'checkout-address-p',
                    children: e.address.city,
                  }),
                  s.jsx('p', {
                    className: 'checkout-address-p',
                    children: e.address.country,
                  }),
                ],
              }),
              s.jsxs(Ht, {
                update: 'Update Your Address',
                children: [
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'street',
                        children: 'Street',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'street',
                        id: 'street',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'zip',
                        children: 'Zip Code',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'zip',
                        id: 'zip',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'city',
                        children: 'City',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'city',
                        id: 'city',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'country',
                        children: 'Country',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'country',
                        id: 'country',
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx('div', {
                className: 'checkout-totalPrice-div',
                children: s.jsxs('p', {
                  className: 'checkout-totalPrice',
                  children: ['Total Price: ', t, ' €'],
                }),
              }),
              s.jsx('div', {
                className: 'checkout-buy-now-div',
                children: s.jsx('button', {
                  className: 'checkout-buy-now continue-button',
                  onClick: a,
                  children: 'Buy now',
                }),
              }),
            ],
          })
        : s.jsxs('div', {
            className: 'checkout-page-container',
            children: [
              s.jsxs(Ht, {
                update: 'Add Your Address',
                children: [
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'street',
                        children: 'Street',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'street',
                        id: 'street',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'zip',
                        children: 'Zip Code',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'zip',
                        id: 'zip',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'city',
                        children: 'City',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'city',
                        id: 'city',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'checkout-container',
                    children: [
                      s.jsx('label', {
                        className: 'checkout-label',
                        htmlFor: 'country',
                        children: 'Country',
                      }),
                      s.jsx('input', {
                        className: 'checkout-input',
                        type: 'text',
                        name: 'country',
                        id: 'country',
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx('div', {
                className: 'checkout-totalPrice-div',
                children: s.jsxs('p', {
                  className: 'checkout-totalPrice',
                  children: ['Total Price: ', t, ' €'],
                }),
              }),
            ],
          }),
  });
}
function Uv() {
  const { orderReceived: e } = g.useContext(Z);
  return s.jsx('div', {
    className: 'thankyou-container',
    children: s.jsx('p', { className: 'thankyou-msg', children: e }),
  });
}
const Mv = () =>
  s.jsx('div', {
    className: 'about-container',
    children: s.jsxs('p', {
      className: 'about-p',
      children: [
        "Hi, we're Ania, Gordon, and Samuel and this is our Final Project from our Web Development course at ",
        s.jsx('span', { children: 'DCI' }),
        '.',
      ],
    }),
  });
var Qd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  fu = ot.createContext && ot.createContext(Qd),
  Av = ['attr', 'size', 'title'];
function Wv(e, t) {
  if (e == null) return {};
  var n = Hv(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Hv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wl.apply(this, arguments)
  );
}
function pu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pu(Object(n), !0).forEach(function (r) {
          Vv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Vv(e, t, n) {
  return (
    (t = Qv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Qv(e) {
  var t = Gv(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function Gv(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Gd(e) {
  return (
    e &&
    e.map((t, n) =>
      ot.createElement(t.tag, Hl({ key: n }, t.attr), Gd(t.child))
    )
  );
}
function vo(e) {
  return (t) =>
    ot.createElement(Yv, Wl({ attr: Hl({}, e.attr) }, t), Gd(e.child));
}
function Yv(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = Wv(e, Av),
      a = l || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      ot.createElement(
        'svg',
        Wl(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: u,
            style: Hl(Hl({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && ot.createElement('title', null, o),
        e.children
      )
    );
  };
  return fu !== void 0
    ? ot.createElement(fu.Consumer, null, (n) => t(n))
    : t(Qd);
}
function Kv(e) {
  return vo({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(e);
}
function Jv(e) {
  return vo({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
        },
        child: [],
      },
    ],
  })(e);
}
function Xv(e) {
  return vo({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
        },
        child: [],
      },
    ],
  })(e);
}
function qr(e) {
  return vo({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z',
        },
        child: [],
      },
    ],
  })(e);
}
function Zv() {
  const e = ht(),
    {
      user: t,
      setUser: n,
      setCurrentPage: r,
      setShoppingCart: l,
      hideUpdateDeleteBookForms: o,
      menuIcon: i,
      setMenuIcon: a,
    } = g.useContext(Z),
    u = () => {
      n(null),
        sessionStorage.removeItem('token'),
        l([]),
        localStorage.removeItem('cart');
    },
    c = async (p) => {
      p.preventDefault();
      const y = p.target.search.value.split(' ').join('+');
      p.target.reset(), e(`/books/request/search?q=${y}`);
    },
    h = () => {
      r(1), o(), e('/books/selection');
    },
    v = new Date().getFullYear();
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(
        'header',
        {
          children: s.jsxs('nav', {
            className: 'header-navbar',
            children: [
              s.jsx('ul', {
                className: 'logo-ul',
                children: s.jsx('li', {
                  onClick: o,
                  children: s.jsx(b, {
                    onClick: () => a(!1),
                    className: 'logos shop-logo',
                    to: '/',
                    children: 'Logos',
                  }),
                }),
              }),
              s.jsx('ul', {
                className: 'search-ul',
                children: s.jsx('li', {
                  children: s.jsxs('form', {
                    onSubmit: c,
                    children: [
                      s.jsx('input', {
                        className: 'search-input',
                        type: 'text',
                        name: 'search',
                        id: 'search',
                      }),
                      s.jsx('button', {
                        className: 'search-btn',
                        type: 'submit',
                        onClick: o,
                        children: s.jsx(Xv, { className: 'icon' }),
                      }),
                    ],
                  }),
                }),
              }),
              s.jsx(Jv, {
                className: 'icon menu',
                onClick: () => a((p) => !p),
              }),
              i &&
                s.jsxs('ul', {
                  className: 'links-ul',
                  onClick: () => a(!1),
                  children: [
                    s.jsx('li', {
                      onClick: o,
                      children: s.jsx(b, {
                        onClick: () => a(!1),
                        className: 'navlink',
                        to: '/',
                        children: 'Home',
                      }),
                    }),
                    s.jsx('li', {
                      onClick: h,
                      children: s.jsx(b, {
                        onClick: () => a(!1),
                        className: 'navlink',
                        to: '/books',
                        children: 'Books',
                      }),
                    }),
                    t
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx('li', {
                              onClick: o,
                              children: s.jsx(b, {
                                onClick: () => a(!1),
                                className: 'navlink',
                                to: '/profile',
                                children: 'Profile',
                              }),
                            }),
                            s.jsx('li', {
                              onClick: o,
                              children: s.jsx(b, {
                                onClick: () => a(!1),
                                className: 'navlink',
                                to: '/cart',
                                children: s.jsx(qr, { className: 'icon' }),
                              }),
                            }),
                            s.jsx('li', {
                              onClick: u,
                              children: s.jsx(b, {
                                onClick: () => a(!1),
                                className: 'navlink logos',
                                to: '/',
                                children: 'Logout',
                              }),
                            }),
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            s.jsx('li', {
                              children: s.jsx(b, {
                                onClick: () => {
                                  a(!1);
                                },
                                className: 'navlink',
                                to: '/register',
                                children: 'Register',
                              }),
                            }),
                            s.jsx('li', {
                              children: s.jsx(b, {
                                onClick: () => a(!1),
                                className: 'navlink',
                                to: '/login',
                                children: 'Login',
                              }),
                            }),
                            s.jsx('li', {
                              onClick: o,
                              children: s.jsx(b, {
                                onClick: () => a(!1),
                                className: 'navlink',
                                to: '/cart',
                                children: s.jsx(qr, { className: 'icon' }),
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              s.jsxs('ul', {
                className: 'desktop-links',
                children: [
                  s.jsx('li', {
                    onClick: o,
                    children: s.jsx(b, {
                      onClick: () => a(!1),
                      className: 'navlink',
                      to: '/',
                      children: 'Home',
                    }),
                  }),
                  s.jsx('li', {
                    onClick: h,
                    children: s.jsx(b, {
                      onClick: () => a(!1),
                      className: 'navlink',
                      to: '/books',
                      children: 'Books',
                    }),
                  }),
                  t
                    ? s.jsxs(s.Fragment, {
                        children: [
                          s.jsx('li', {
                            onClick: o,
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink',
                              to: '/profile',
                              children: 'Profile',
                            }),
                          }),
                          s.jsx('li', {
                            onClick: o,
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink',
                              to: '/cart',
                              children: s.jsx(qr, { className: 'icon' }),
                            }),
                          }),
                          s.jsx('li', {
                            onClick: u,
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink logos',
                              to: '/',
                              children: 'Logout',
                            }),
                          }),
                        ],
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsx('li', {
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink',
                              to: '/register',
                              children: 'Register',
                            }),
                          }),
                          s.jsx('li', {
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink',
                              to: '/login',
                              children: 'Login',
                            }),
                          }),
                          s.jsx('li', {
                            onClick: o,
                            children: s.jsx(b, {
                              onClick: () => a(!1),
                              className: 'navlink',
                              to: '/cart',
                              children: s.jsx(qr, { className: 'icon' }),
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
        },
        'header'
      ),
      s.jsx(
        'main',
        {
          children: s.jsxs(pm, {
            children: [
              s.jsx(he, { path: '/', element: s.jsx(Om, {}) }),
              s.jsxs(he, {
                path: '/books',
                element: s.jsx(Pm, {}),
                children: [
                  s.jsx(he, {
                    path: '/books/genre/:genre',
                    element: s.jsx(Tm, {}),
                  }),
                  s.jsx(he, {
                    path: '/books/selection',
                    element: s.jsx(Iv, {}),
                  }),
                  s.jsx(he, {
                    path: '/books/:title/:id',
                    element: s.jsx(_v, {}),
                  }),
                  s.jsx(he, {
                    path: '/books/request/:search',
                    element: s.jsx(Pv, {}),
                  }),
                ],
              }),
              s.jsx(he, { path: '/register', element: s.jsx(Cv, {}) }),
              s.jsx(he, { path: '/login', element: s.jsx(Fm, {}) }),
              s.jsx(he, { path: '/profile', element: s.jsx(Nv, {}) }),
              s.jsx(he, { path: '/cart', element: s.jsx($v, {}) }),
              s.jsx(he, { path: '/checkout', element: s.jsx(Bv, {}) }),
              s.jsx(he, { path: '/thankyou', element: s.jsx(Uv, {}) }),
              s.jsx(he, { path: '/deletedAccount', element: s.jsx(Dv, {}) }),
              s.jsx(he, { path: '/about', element: s.jsx(Mv, {}) }),
              s.jsx(he, { path: '*', element: s.jsx(Ev, {}) }),
            ],
          }),
        },
        'main'
      ),
      s.jsx('footer', {
        children: s.jsxs('div', {
          className: 'footer-content',
          children: [
            s.jsxs('div', {
              className: 'footer-about-github',
              children: [
                s.jsx('div', {
                  className: 'footer-item',
                  onClick: o,
                  children: s.jsx(b, {
                    className: 'navlink',
                    to: '/about',
                    children: 'About',
                  }),
                }),
                s.jsx('div', {
                  className: 'footer-item',
                  onClick: o,
                  children: s.jsx('a', {
                    href: 'https://github.com/pozniej-znajde-wolne-haslo/final-project_backend',
                    target: '_blank',
                    className: 'footer-link',
                    children: s.jsx(Kv, { className: 'icon' }),
                  }),
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'footer-book-store',
              children: [
                '© ',
                v,
                s.jsx('span', { className: 'footer-text', children: 'Logos' }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function qv({ children: e }) {
  const [t, n] = g.useState(null),
    [r, l] = g.useState([]),
    [o, i] = g.useState(1),
    [a] = g.useState(10),
    [u, c] = g.useState([]),
    [h, v] = g.useState([]),
    [p, y] = g.useState(0),
    [x, w] = g.useState([]),
    [j, d] = g.useState(''),
    [f, m] = g.useState(null),
    [k, S] = g.useState(null),
    [E, C] = g.useState(!1),
    [T, $] = g.useState(null),
    [z, te] = g.useState(null),
    [Ze, qe] = g.useState(!1);
  g.useEffect(() => {
    const ln = sessionStorage.getItem('token');
    if (ln) {
      async function Mt() {
        try {
          const be = await fetch(
            'https://logos-bookstore.onrender.com/api/user/verifytoken',
            { method: 'GET', headers: { token: ln } }
          );
          if (be.ok) {
            const P = await be.json();
            P.success && n(P.data);
          }
        } catch {}
      }
      Mt();
    }
  }, []);
  const rn = () => {
    S(null), m(null);
  };
  return s.jsx(s.Fragment, {
    children: s.jsx(Z.Provider, {
      value: {
        user: t,
        setUser: n,
        books: r,
        setBooks: l,
        currentPage: o,
        setCurrentPage: i,
        booksPerPage: a,
        searchResult: u,
        setSearchResult: c,
        booksToGenre: h,
        setBooksToGenre: v,
        totalPrice: p,
        setTotalPrice: y,
        shoppingCart: x,
        setShoppingCart: w,
        orderReceived: j,
        setOrderReceived: d,
        bookToDelete: f,
        setBookToDelete: m,
        bookToUpdate: k,
        setBookToUpdate: S,
        hideUpdateDeleteBookForms: rn,
        menuIcon: E,
        setMenuIcon: C,
        bookToReview: T,
        setBookToReview: $,
        reviewBtn: z,
        setReviewBtn: te,
        updateSuccess: Ze,
        setUpdateSuccess: qe,
      },
      children: e,
    }),
  });
}
Vo.createRoot(document.getElementById('root')).render(
  s.jsx(ot.StrictMode, {
    children: s.jsx(qv, { children: s.jsx(wm, { children: s.jsx(Zv, {}) }) }),
  })
);
