'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [2852],
  {
    73848: function (x, r, e) {
      e.r(r),
        e.d(r, {
          default: function () {
            return m;
          },
        });
      var i = e(48305),
        l = e.n(i),
        n = e(50959),
        h = function (c) {
          var v = (0, n.useState)(!1),
            d = l()(v, 2),
            S = d[0],
            u = d[1];
          return (
            (0, n.useEffect)(
              function () {
                var s = window.matchMedia(c),
                  o = function (g) {
                    u(g.matches);
                  };
                return (
                  u(s.matches),
                  s.addListener(o),
                  function () {
                    s.removeListener(o);
                  }
                );
              },
              [c],
            ),
            S
          );
        },
        f = h,
        t = e(11527),
        m = function () {
          var a = f('(max-width: 768px)');
          return (
            (0, n.useEffect)(
              function () {
                console.log(a ? 'Small screen detected.' : 'Large screen detected.');
              },
              [a],
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)('h2', { children: 'Media Query Check' }),
                (0, t.jsxs)('div', { children: ['Screen size: ', a ? 'Small' : 'Large'] }),
              ],
            })
          );
        };
    },
  },
]);
