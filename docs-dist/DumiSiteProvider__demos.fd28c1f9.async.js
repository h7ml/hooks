'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [8026],
  {
    78910: function (Z, l, t) {
      t.r(l);
      var f = t(16984),
        v = t(97442),
        a = t(97477),
        p = t(51411),
        d = t(32699),
        x = t.n(d),
        O = t(33743),
        r = t(11527),
        g = function () {
          var P = (0, f.A)(),
            E = (0, v.Fg)(),
            C = (0, d.omit)(E, Object.keys(P)),
            h = JSON.stringify(C, null, 2);
          return (0, r.jsxs)(O.D, {
            padding: 16,
            gap: 16,
            children: [
              'DumiSiteProvider \u4E3B\u9898\u914D\u7F6E\uFF1A',
              (0, r.jsx)(a.oP, { language: 'json', children: h }),
            ],
          });
        };
      l.default = function () {
        return (0, r.jsx)(p.Z, { children: (0, r.jsx)(g, {}) });
      };
    },
    51411: function (Z, l, t) {
      t.d(l, {
        Z: function () {
          return N;
        },
      });
      var f = t(68185),
        v = t(50446),
        a = t(50959),
        p = t(82187),
        d = t.n(p),
        x = t(25765),
        O = t(37563),
        r = t(43469),
        g = t(99684),
        i = t(21773),
        P = t(26653);
      const E = (e) => {
          const { componentCls: s, colorText: n, fontSize: o, lineHeight: c, fontFamily: m } = e;
          return { [s]: { color: n, fontSize: o, lineHeight: c, fontFamily: m } };
        },
        C = () => ({});
      var h = (0, P.I$)('App', E, C);
      const L = () => a.useContext(i.Z),
        D = (e) => {
          const {
              prefixCls: s,
              children: n,
              className: o,
              rootClassName: c,
              message: m,
              notification: S,
              style: H,
              component: j = 'div',
            } = e,
            { getPrefixCls: b } = (0, a.useContext)(x.E_),
            B = b('app', s),
            [z, J, V] = h(B),
            $ = d()(J, B, o, c, V),
            u = (0, a.useContext)(i.J),
            y = a.useMemo(
              () => ({
                message: Object.assign(Object.assign({}, u.message), m),
                notification: Object.assign(Object.assign({}, u.notification), S),
              }),
              [m, S, u.message, u.notification],
            ),
            [I, G] = (0, O.Z)(y.message),
            [K, Q] = (0, g.Z)(y.notification),
            [W, X] = (0, r.Z)(),
            Y = a.useMemo(() => ({ message: I, notification: K, modal: W }), [I, K, W]),
            k = j === !1 ? a.Fragment : j,
            w = { className: $, style: H };
          return z(
            a.createElement(
              i.Z.Provider,
              { value: Y },
              a.createElement(
                i.J.Provider,
                { value: y },
                a.createElement(k, Object.assign({}, j === !1 ? void 0 : w), X, G, Q, n),
              ),
            ),
          );
        };
      D.useApp = L;
      var R = D,
        U = t(15919),
        M = t(11527),
        F = ['children'];
      function A(e, s) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          s &&
            (o = o.filter(function (c) {
              return Object.getOwnPropertyDescriptor(e, c).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function T(e) {
        for (var s = 1; s < arguments.length; s++) {
          var n = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? A(Object(n), !0).forEach(function (o) {
                (0, f.Z)(e, o, n[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (o) {
                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
                });
        }
        return e;
      }
      var N = function (e) {
        var s = e.children,
          n = (0, v.Z)(e, F);
        return (0, M.jsx)(U.f, T(T({}, n), {}, { children: (0, M.jsx)(R, { children: s }) }));
      };
    },
  },
]);
