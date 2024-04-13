'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [3576],
  {
    5571: function (I, v, e) {
      e.r(v),
        e.d(v, {
          default: function () {
            return y;
          },
        });
      var m = e(48305),
        u = e.n(m),
        S = e(50959),
        V = function (t, r) {
          var i = function () {
              try {
                var s = sessionStorage.getItem(t);
                return s ? JSON.parse(s) : r;
              } catch (h) {
                return (
                  console.error('Error parsing sessionStorage item with key "'.concat(t, '":'), h),
                  r
                );
              }
            },
            l = (0, S.useState)(i),
            n = u()(l, 2),
            c = n[0],
            g = n[1],
            d = (0, S.useCallback)(
              function (o) {
                try {
                  g(o), sessionStorage.setItem(t, JSON.stringify(o));
                } catch (s) {
                  console.error('Error setting sessionStorage item with key "'.concat(t, '":'), s);
                }
              },
              [t],
            );
          return [c, d];
        },
        x = V,
        C = e(58600),
        j = e(83110),
        a = e(11527),
        y = function () {
          var f = (0, S.useState)(''),
            t = u()(f, 2),
            r = t[0],
            i = t[1],
            l = x('example_key', ''),
            n = u()(l, 2),
            c = n[0],
            g = n[1],
            d = function (h) {
              i(h.target.value);
            },
            o = function () {
              g(r);
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(C.Z, { style: { width: 240, marginRight: 8 }, value: r, onChange: d }),
              (0, a.jsx)(j.ZP, { onClick: o, children: 'Save to sessionStorage' }),
              (0, a.jsxs)('div', { children: ['Stored Value: ', c] }),
            ],
          });
        };
    },
  },
]);
