'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [6840],
  {
    29505: function (c, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return f;
          },
        });
      var n = t(50959),
        o = function () {
          var u = (0, n.useRef)(!0);
          return (
            (0, n.useEffect)(function () {
              u.current = !1;
            }, []),
            u.current
          );
        },
        a = o,
        i = t(23722),
        e = t(11527),
        f = function () {
          var r = a();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              r && (0, e.jsx)(i.Z, { message: 'This is the first render!', type: 'info' }),
              (0, e.jsx)('div', { children: 'Component content goes here.' }),
            ],
          });
        };
    },
  },
]);
