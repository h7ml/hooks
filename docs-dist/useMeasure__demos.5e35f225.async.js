'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [6598],
  {
    6022: function (w, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return v;
          },
        });
      var c = e(48305),
        h = e.n(c),
        s = e(50959),
        l = function () {
          var t = (0, s.useRef)(null),
            i = (0, s.useState)({ width: 0, height: 0 }),
            n = h()(i, 2),
            g = n[0],
            z = n[1];
          return (
            (0, s.useEffect)(function () {
              var u = function () {
                if (t.current) {
                  var d = t.current.getBoundingClientRect(),
                    x = d.width,
                    m = d.height;
                  z({ width: x, height: m });
                }
              };
              return (
                u(),
                window.addEventListener('resize', u),
                function () {
                  window.removeEventListener('resize', u);
                }
              );
            }, []),
            [t, g]
          );
        },
        f = l,
        r = e(11527),
        v = function () {
          var o = f(),
            t = h()(o, 2),
            i = t[0],
            n = t[1];
          return (
            (0, s.useEffect)(
              function () {
                console.log('Width:', n.width), console.log('Height:', n.height);
              },
              [n],
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)('h2', { children: 'Element Size' }),
                (0, r.jsx)('div', {
                  ref: i,
                  style: { width: '200px', height: '100px', background: 'blue' },
                }),
              ],
            })
          );
        };
    },
  },
]);
