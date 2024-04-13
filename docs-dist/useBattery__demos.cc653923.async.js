'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9329],
  {
    57557: function (B, h, n) {
      n.r(h),
        n.d(h, {
          default: function () {
            return f;
          },
        });
      var o = n(48305),
        d = n.n(o),
        i = n(50959),
        l = function () {
          var v = (0, i.useState)(null),
            s = d()(v, 2),
            e = s[0],
            c = s[1];
          return (
            (0, i.useEffect)(function () {
              var t = function (y) {
                var m = y.target;
                c(m);
              };
              return (
                'getBattery' in navigator
                  ? navigator.getBattery().then(function (a) {
                      c(a),
                        a.addEventListener('levelchange', t),
                        a.addEventListener('chargingchange', t),
                        a.addEventListener('dischargingtimechange', t),
                        a.addEventListener('chargingtimechange', t);
                    })
                  : console.warn('Battery API is not supported in this browser.'),
                function () {
                  e &&
                    (e.removeEventListener('levelchange', t),
                    e.removeEventListener('chargingchange', t),
                    e.removeEventListener('dischargingtimechange', t),
                    e.removeEventListener('chargingtimechange', t));
                }
              );
            }, []),
            e
          );
        },
        g = l,
        r = n(11527),
        f = function () {
          var u = g(),
            v = (0, i.useState)(null),
            s = d()(v, 2),
            e = s[0],
            c = s[1];
          return (
            (0, i.useEffect)(
              function () {
                u && c(u.level * 100);
              },
              [u],
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)('h2', { children: 'Battery Status' }),
                e !== null
                  ? (0, r.jsxs)('div', { children: ['Battery Level: ', e.toFixed(2), '%'] })
                  : (0, r.jsx)('div', { children: 'Loading battery status...' }),
              ],
            })
          );
        };
    },
  },
]);
