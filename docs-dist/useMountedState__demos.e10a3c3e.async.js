'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9612],
  {
    71749: function (d, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return a;
          },
        });
      var t = n(50959),
        s = function () {
          var u = (0, t.useRef)(!1);
          return (
            (0, t.useEffect)(function () {
              return (
                (u.current = !0),
                function () {
                  u.current = !1;
                }
              );
            }, []),
            function () {
              return u.current;
            }
          );
        },
        f = s,
        r = n(58016),
        c = n(11527),
        a = function () {
          var e = f();
          return (
            (0, t.useEffect)(
              function () {
                e()
                  ? r.ZP.info('Component is mounted.')
                  : r.ZP.warning('Component is not mounted.');
              },
              [e],
            ),
            (0, c.jsx)('div', { children: 'Component Lifecycle Example' })
          );
        };
    },
  },
]);
