'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [7382],
  {
    61093: function (A, a, o) {
      o.r(a),
        o.d(a, {
          default: function () {
            return h;
          },
        });
      var c = o(48305),
        g = o.n(c),
        u = o(50959),
        f = function () {
          var n = (0, u.useState)({ latitude: null, longitude: null, error: null }),
            r = g()(n, 2),
            t = r[0],
            i = r[1];
          return (
            (0, u.useEffect)(function () {
              var L = function (d) {
                  i({ latitude: d.coords.latitude, longitude: d.coords.longitude, error: null });
                },
                m = function () {
                  i({ latitude: null, longitude: null, error: 'Error getting location data.' });
                },
                x = { enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 },
                s = navigator.geolocation;
              s
                ? s.getCurrentPosition(L, m, x)
                : i({
                    latitude: null,
                    longitude: null,
                    error: 'Geolocation API is not supported in this browser.',
                  });
            }, []),
            t
          );
        },
        v = f,
        e = o(11527),
        h = function () {
          var l = v(),
            n = l.latitude,
            r = l.longitude,
            t = l.error;
          return (
            (0, u.useEffect)(
              function () {
                t
                  ? console.error('Error fetching location:', t)
                  : (console.log('Latitude:', n), console.log('Longitude:', r));
              },
              [t, n, r],
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)('h2', { children: 'Location Data' }),
                t ? (0, e.jsxs)('div', { children: ['Error: ', t] }) : null,
                (0, e.jsxs)('div', { children: ['Latitude: ', n] }),
                (0, e.jsxs)('div', { children: ['Longitude: ', r] }),
              ],
            })
          );
        };
    },
  },
]);
