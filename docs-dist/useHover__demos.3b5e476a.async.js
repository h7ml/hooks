'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [1043],
  {
    98661: function (L, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return m;
          },
        });
      var i = n(48305),
        f = n.n(i),
        r = n(50959),
        c = function (t) {
          var H = (0, r.useState)(!1),
            a = f()(H, 2),
            E = a[0],
            v = a[1],
            d = function () {
              v(!0);
            },
            l = function () {
              v(!1);
            };
          return (
            (0, r.useEffect)(
              function () {
                var e = t.current;
                if (e)
                  return (
                    e.addEventListener('mouseenter', d),
                    e.addEventListener('mouseleave', l),
                    function () {
                      e.removeEventListener('mouseenter', d),
                        e.removeEventListener('mouseleave', l);
                    }
                  );
              },
              [t],
            ),
            E
          );
        },
        h = c,
        s = n(11527),
        m = function () {
          var u = (0, r.useRef)(null),
            t = h(u);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)('div', {
              ref: u,
              style: { width: 200, height: 100, background: t ? 'red' : 'blue' },
              children: t ? 'Hovering' : 'Not Hovering',
            }),
          });
        };
    },
  },
]);
