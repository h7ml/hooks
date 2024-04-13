'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [2388],
  {
    22705: function (T, a, u) {
      u.r(a),
        u.d(a, {
          default: function () {
            return v;
          },
        });
      var g = u(48305),
        r = u.n(g),
        l = u(50959),
        d = function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
            s = (0, l.useState)(t),
            n = r()(s, 2),
            f = n[0],
            h = n[1],
            m = (0, l.useCallback)(function () {
              h(function (C) {
                return !C;
              });
            }, []);
          return [f, m];
        },
        i = d,
        c = u(83110),
        e = u(11527),
        v = function () {
          var o = i(),
            t = r()(o, 2),
            s = t[0],
            n = t[1];
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)('div', { children: ['\u5F53\u524D\u5E03\u5C14\u503C\uFF1A', String(s)] }),
              (0, e.jsx)(c.ZP, {
                type: 'primary',
                onClick: n,
                children: '\u5207\u6362\u5E03\u5C14\u503C',
              }),
            ],
          });
        };
    },
  },
]);
