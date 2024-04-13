'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [5791],
  {
    51002: function (T, d, n) {
      n.r(d),
        n.d(d, {
          default: function () {
            return I;
          },
        });
      var D = n(90228),
        c = n.n(D),
        M = n(87999),
        j = n.n(M),
        C = n(48305),
        y = n.n(C),
        s = n(50959),
        E = function () {
          var i = (0, s.useState)([]),
            v = y()(i, 2),
            S = v[0],
            u = v[1];
          return (
            (0, s.useEffect)(function () {
              var l = (function () {
                var f = j()(
                  c()().mark(function h() {
                    var m, g;
                    return c()().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                navigator.mediaDevices.enumerateDevices()
                              );
                            case 3:
                              (m = e.sent),
                                (g = m.map(function (t) {
                                  return { deviceId: t.deviceId, kind: t.kind, label: t.label };
                                })),
                                u(g),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.error('Error enumerating media devices:', e.t0),
                                u([]);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      h,
                      null,
                      [[0, 8]],
                    );
                  }),
                );
                return function () {
                  return f.apply(this, arguments);
                };
              })();
              l();
              var o = function () {
                l();
              };
              return (
                navigator.mediaDevices.addEventListener('devicechange', o),
                function () {
                  navigator.mediaDevices.removeEventListener('devicechange', o);
                }
              );
            }, []),
            S
          );
        },
        k = E,
        a = n(11527),
        I = function () {
          var r = k();
          return (
            (0, s.useEffect)(
              function () {
                console.log('Connected media devices:', r);
              },
              [r],
            ),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)('h2', { children: 'Connected Media Devices' }),
                r.length === 0
                  ? (0, a.jsx)('div', { children: 'No media devices found.' })
                  : (0, a.jsx)('ul', {
                      children: r.map(function (i) {
                        return (0, a.jsxs)(
                          'li',
                          { children: [i.label, ' (', i.kind, ')'] },
                          i.deviceId,
                        );
                      }),
                    }),
              ],
            })
          );
        };
    },
  },
]);
