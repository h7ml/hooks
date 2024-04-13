'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [3375],
  {
    71814: function (A, l, e) {
      e.r(l),
        e.d(l, {
          default: function () {
            return v;
          },
        });
      var c = e(48305),
        g = e.n(c),
        s = e(50959),
        f = function () {
          var n = (0, s.useState)({ latitude: 0, longitude: 0, error: null }),
            r = g()(n, 2),
            o = r[0],
            u = r[1];
          return (
            (0, s.useEffect)(function () {
              var m = function (d) {
                  u({ latitude: d.coords.latitude, longitude: d.coords.longitude, error: null });
                },
                x = function () {
                  u({
                    latitude: 0,
                    longitude: 0,
                    error: 'Geolocation API is not supported in this browser.',
                  });
                },
                G = { enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 },
                a = navigator.geolocation;
              a
                ? a.getCurrentPosition(m, x, G)
                : u({
                    latitude: 0,
                    longitude: 0,
                    error: 'Geolocation API is not supported in this browser.',
                  });
            }, []),
            o
          );
        },
        h = f,
        t = e(11527),
        v = function () {
          var i = h(),
            n = i.latitude,
            r = i.longitude,
            o = i.error;
          return (
            (0, s.useEffect)(
              function () {
                o
                  ? console.error('Error fetching geolocation:', o)
                  : (console.log('Latitude:', n), console.log('Longitude:', r));
              },
              [o, n, r],
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)('h2', { children: 'Geolocation Data' }),
                o ? (0, t.jsxs)('div', { children: ['Error: ', o] }) : null,
                (0, t.jsxs)('div', { children: ['Latitude: ', n] }),
                (0, t.jsxs)('div', { children: ['Longitude: ', r] }),
              ],
            })
          );
        };
    },
  },
]);
