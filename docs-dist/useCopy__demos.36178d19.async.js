'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9056],
  {
    48387: function (x, r, u) {
      u.r(r),
        u.d(r, {
          default: function () {
            return P;
          },
        });
      var s = u(48305),
        n = u.n(s),
        c = u(874),
        a = u.n(c),
        m = u(50959),
        C = u(67905),
        D = function (e) {
          var h = (0, C.Z)(void 0),
            E = n()(h, 2),
            R = E[0],
            i = E[1],
            T = (0, m.useCallback)(
              function (o) {
                if (!o) return i(void 0);
                try {
                  var l;
                  a()(o.toString()),
                    i(o.toString()),
                    e == null ||
                      (l = e.onSuccess) === null ||
                      l === void 0 ||
                      l.call(e, o.toString());
                } catch (v) {
                  var f;
                  i(void 0), e == null || (f = e.onError) === null || f === void 0 || f.call(e, v);
                }
              },
              [e],
            );
          return [R, T];
        },
        S = D,
        d = u(58016),
        y = u(58600),
        g = u(83110),
        t = u(11527),
        P = function () {
          var M = (0, m.useState)(),
            e = n()(M, 2),
            h = e[0],
            E = e[1],
            R = function (_) {
              d.ZP.success('\u6210\u529F\u590D\u5236: '.concat(_));
            },
            i = function (_) {
              d.ZP.error('\u590D\u5236\u5931\u8D25: '.concat(_.message));
            },
            T = S({ onSuccess: R, onError: i }),
            o = n()(T, 2),
            l = o[0],
            f = o[1];
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)('div', {
                children:
                  '\u590D\u5236\u7684\u518D\u597D\u3002\u4E5F\u590D\u5236\u4E0D\u4E86\u66FE\u7ECF\u7684\u8BB0\u5FC6~',
              }),
              (0, t.jsx)(y.Z, {
                style: { display: 'inline-block', width: 240, marginRight: 8 },
                value: h,
                onChange: function (_) {
                  return E(_.target.value);
                },
              }),
              (0, t.jsx)(g.ZP, {
                type: 'primary',
                onClick: function () {
                  return f(h || '');
                },
                children: '\u590D\u5236',
              }),
              (0, t.jsx)('div', { children: l ? '\u590D\u5236\u7ED3\u679C: '.concat(l) : '' }),
            ],
          });
        };
    },
    67905: function (x, r, u) {
      var s = u(48305),
        n = u.n(s),
        c = u(50959),
        a = u(98070);
      function m(C) {
        var D = (0, a.Z)(),
          S = (0, c.useState)(C),
          d = n()(S, 2),
          y = d[0],
          g = d[1],
          t = (0, c.useCallback)(function (P) {
            D.current || g(P);
          }, []);
        return [y, t];
      }
      r.Z = m;
    },
    98070: function (x, r, u) {
      var s = u(50959),
        n = function () {
          var a = (0, s.useRef)(!1);
          return (
            (0, s.useEffect)(function () {
              return (
                (a.current = !1),
                function () {
                  a.current = !0;
                }
              );
            }, []),
            a
          );
        };
      r.Z = n;
    },
  },
]);
