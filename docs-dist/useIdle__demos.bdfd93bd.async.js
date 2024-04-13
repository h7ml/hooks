'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [2515],
  {
    61139: function (y, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return h;
          },
        });
      var u = e(48305),
        v = e.n(u),
        d = e(50959),
        f = function (i) {
          var I = (0, d.useState)(!1),
            o = v()(I, 2),
            k = o[0],
            r = o[1];
          return (
            (0, d.useEffect)(
              function () {
                var l,
                  c = function (g) {
                    g.timeRemaining() > 0 && r(!0);
                  },
                  n = function () {
                    r(!1), (l = requestIdleCallback(c, { timeout: i }));
                  };
                return (
                  (l = requestIdleCallback(c, { timeout: i })),
                  document.addEventListener('mousemove', n),
                  document.addEventListener('keydown', n),
                  document.addEventListener('visibilitychange', n),
                  function () {
                    document.removeEventListener('mousemove', n),
                      document.removeEventListener('keydown', n),
                      document.removeEventListener('visibilitychange', n),
                      cancelIdleCallback(l);
                  }
                );
              },
              [i],
            ),
            k
          );
        },
        m = f,
        t = e(11527),
        h = function () {
          var s = m(3e3);
          return (
            (0, d.useEffect)(
              function () {
                console.log(s ? 'User is idle.' : 'User is active.');
              },
              [s],
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)('h2', { children: 'Idle Detection' }),
                (0, t.jsxs)('div', { children: ['User is ', s ? 'idle' : 'active'] }),
              ],
            })
          );
        };
    },
  },
]);
