'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [5968],
  {
    1558: function (P, m, n) {
      n.r(m),
        n.d(m, {
          default: function () {
            return k;
          },
        });
      var f = n(48305),
        v = n.n(f),
        h = n(50959),
        C = function () {
          var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
            o = (0, h.useState)(u),
            s = v()(o, 2),
            a = s[0],
            t = s[1],
            x = function () {
              var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
              t(function (d) {
                return d + i;
              });
            },
            j = function () {
              var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
              t(function (d) {
                return d - i;
              });
            },
            S = function () {
              t(u);
            };
          return { count: a, increment: x, decrement: j, reset: S };
        },
        g = C,
        c = n(83110),
        e = n(11527),
        k = function () {
          var r = g(0),
            u = r.count,
            o = r.increment,
            s = r.decrement,
            a = r.reset;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)('div', { children: ['Count: ', u] }),
              (0, e.jsx)(c.ZP, {
                onClick: function () {
                  return o();
                },
                children: 'Increment',
              }),
              (0, e.jsx)(c.ZP, {
                onClick: function () {
                  return s();
                },
                children: 'Decrement',
              }),
              (0, e.jsx)(c.ZP, {
                onClick: function () {
                  return a();
                },
                children: 'Reset',
              }),
            ],
          });
        };
    },
  },
]);
