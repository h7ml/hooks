'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [4104],
  {
    60262: function (E, v, r) {
      r.r(v),
        r.d(v, {
          default: function () {
            return H;
          },
        });
      var l = r(48305),
        c = r.n(l),
        n = r(50959),
        h = function (t) {
          var y = (0, n.useState)(!1),
            a = c()(y, 2),
            g = a[0],
            d = a[1],
            u = (0, n.useRef)(!1),
            i = function () {
              u.current || (d(!0), (u.current = !0));
            },
            f = function () {
              u.current && (d(!1), (u.current = !1));
            };
          return (
            (0, n.useEffect)(
              function () {
                var e = t.current;
                if (e)
                  return (
                    e.addEventListener('mouseover', i),
                    e.addEventListener('mouseout', f),
                    function () {
                      e.removeEventListener('mouseover', i), e.removeEventListener('mouseout', f);
                    }
                  );
              },
              [t],
            ),
            g
          );
        },
        m = h,
        s = r(11527),
        H = function () {
          var o = (0, n.useRef)(null),
            t = m(o);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)('div', {
              ref: o,
              style: { width: 200, height: 100, background: t ? 'red' : 'blue' },
              children: t ? 'Hovering' : 'Not Hovering',
            }),
          });
        };
    },
  },
]);
