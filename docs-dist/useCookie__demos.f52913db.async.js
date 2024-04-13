'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [7295],
  {
    98009: function (D, p, e) {
      e.r(p),
        e.d(p, {
          default: function () {
            return U;
          },
        });
      var y = e(48305),
        g = e.n(y),
        C = e(50959),
        P = function (s) {
          var k = function (o) {
              var a,
                n = '; '.concat(document.cookie),
                t = n.split('; '.concat(o, '='));
              if (t.length === 2)
                return (a = t.pop()) === null || a === void 0 ? void 0 : a.split(';').shift();
            },
            u = (0, C.useState)(k(s)),
            v = g()(u, 2),
            m = v[0],
            c = v[1],
            r = (0, C.useCallback)(
              function (d) {
                var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                  a = o.maxAge,
                  n = o.expires,
                  t = o.path,
                  S = o.domain,
                  V = o.secure,
                  l = ''.concat(s, '=').concat(encodeURIComponent(d));
                a && (l += '; max-age='.concat(a)),
                  n && (l += '; expires='.concat(n.toUTCString())),
                  t && (l += '; path='.concat(t)),
                  S && (l += '; domain='.concat(S)),
                  V && (l += '; secure'),
                  (document.cookie = l),
                  c(d);
              },
              [s],
            ),
            f = (0, C.useCallback)(
              function () {
                (document.cookie = ''.concat(
                  s,
                  '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;',
                )),
                  c(void 0);
              },
              [s],
            );
          return [m, r, f];
        },
        Z = P,
        h = e(58016),
        x = e(58600),
        A = e(83110),
        i = e(11527),
        j = function () {
          var s = (0, C.useState)(''),
            k = g()(s, 2),
            u = k[0],
            v = k[1],
            m = Z(u),
            c = g()(m, 3),
            r = c[0],
            f = c[1],
            d = c[2],
            o = function () {
              u && r !== void 0
                ? (f(r, { maxAge: 3600 }), h.ZP.success('Cookie updated successfully!'))
                : h.ZP.error('Please enter a cookie name and value to update the cookie.');
            },
            a = function () {
              u
                ? (d(), h.ZP.success('Cookie deleted successfully!'))
                : h.ZP.error('Please enter a cookie name to delete the cookie.');
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(x.Z, {
                style: { width: 240, marginRight: 8 },
                value: u,
                onChange: function (t) {
                  return v(t.target.value);
                },
                placeholder: 'Enter Cookie Name',
              }),
              (0, i.jsx)(x.Z, {
                style: { width: 240, marginRight: 8 },
                value: r || '',
                onChange: function (t) {
                  return f(t.target.value, { maxAge: 3600 });
                },
                placeholder: 'Enter Cookie Value',
              }),
              (0, i.jsx)(A.ZP, { type: 'primary', onClick: o, children: 'Update Cookie' }),
              (0, i.jsx)(A.ZP, { onClick: a, children: 'Delete Cookie' }),
              (0, i.jsxs)('div', { children: ['Current Cookie Value: ', r || 'N/A'] }),
            ],
          });
        },
        U = j;
    },
  },
]);
