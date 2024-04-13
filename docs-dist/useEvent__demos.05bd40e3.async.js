'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9564],
  {
    18086: function (m, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return k;
          },
        });
      var l = n(48305),
        v = n.n(l),
        s = n(50959),
        f = function (e, c) {
          var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window,
            u = (0, s.useRef)();
          (0, s.useEffect)(
            function () {
              u.current = c;
            },
            [c],
          ),
            (0, s.useEffect)(
              function () {
                var d = t && t.addEventListener;
                if (d) {
                  var i = function (E) {
                    u.current && u.current(E);
                  };
                  return (
                    t.addEventListener(e, i),
                    function () {
                      t.removeEventListener(e, i);
                    }
                  );
                }
              },
              [e, t],
            );
        },
        h = f,
        C = n(83110),
        r = n(11527),
        k = function () {
          var o = (0, s.useState)(0),
            e = v()(o, 2),
            c = e[0],
            t = e[1],
            u = function () {
              t(function (i) {
                return i + 1;
              });
            };
          return (
            h('click', u),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)('h2', { children: 'Click Counter' }),
                (0, r.jsx)(C.ZP, { children: 'Click Me' }),
                (0, r.jsxs)('div', { children: ['Click Count: ', c] }),
              ],
            })
          );
        };
    },
  },
]);
