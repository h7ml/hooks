'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [6013],
  {
    60537: function (N, u, e) {
      e.r(u),
        e.d(u, {
          default: function () {
            return g;
          },
        });
      var h = e(26068),
        s = e.n(h),
        x = e(48305),
        y = e.n(x),
        w = e(31759),
        j = e.n(w),
        f = e(50959),
        k = function () {
          if (
            navigator &&
            (typeof navigator == 'undefined' ? 'undefined' : j()(navigator)) === 'object'
          ) {
            var o,
              l,
              r,
              a,
              d,
              n = navigator;
            return {
              rtt: (o = n.connection) === null || o === void 0 ? void 0 : o.rtt,
              type: ((l = n.connection) === null || l === void 0 ? void 0 : l.type) || 'unknown',
              saveData: (r = n.connection) === null || r === void 0 ? void 0 : r.saveData,
              downlinkMax:
                ((a = n.connection) === null || a === void 0 ? void 0 : a.downlinkMax) || 0,
              effectiveType: (d = n.connection) === null || d === void 0 ? void 0 : d.effectiveType,
            };
          }
        },
        S = function () {
          var o = k(),
            l = (0, f.useState)(s()({ online: navigator.onLine }, o)),
            r = y()(l, 2),
            a = r[0],
            d = r[1];
          return (
            (0, f.useEffect)(function () {
              var n = function () {
                  d(function (v) {
                    return s()(s()({}, v), {}, { online: !0 });
                  });
                },
                c = function () {
                  d(function (v) {
                    return s()(s()({}, v), {}, { online: !1 });
                  });
                };
              return (
                window.addEventListener('online', n),
                window.addEventListener('offline', c),
                function () {
                  window.removeEventListener('online', n), window.removeEventListener('offline', c);
                }
              );
            }, []),
            a
          );
        },
        T = S,
        t = e(11527),
        g = function () {
          var i = T(),
            o = i.online,
            l = i.rtt,
            r = i.type,
            a = i.saveData,
            d = i.downlinkMax,
            n = i.effectiveType;
          return (
            (0, f.useEffect)(
              function () {
                console.log('Online:', o);
              },
              [o],
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)('h2', { children: 'Network Connection Status' }),
                (0, t.jsxs)('div', { children: ['Online: ', o ? 'Yes' : 'No'] }),
                (0, t.jsxs)('div', { children: ['RTT: ', l] }),
                (0, t.jsxs)('div', { children: ['Type: ', r] }),
                (0, t.jsxs)('div', { children: ['Save Data: ', a ? 'Yes' : 'No'] }),
                (0, t.jsxs)('div', { children: ['Downlink Max: ', d] }),
                (0, t.jsxs)('div', { children: ['Effective Type: ', n] }),
              ],
            })
          );
        };
    },
  },
]);
