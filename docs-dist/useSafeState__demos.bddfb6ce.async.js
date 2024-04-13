'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9840],
  {
    17172: function (c, n, _) {
      _.r(n);
      var u = _(48305),
        s = _.n(u),
        a = _(67905),
        e = _(83110),
        m = _(50959),
        r = _(11527),
        i = function () {
          var l = (0, a.Z)('\u4E8C\u9009\u4E00\uFF0C\u522B\u9009\u6211'),
            t = s()(l, 2),
            o = t[0],
            d = t[1];
          (0, m.useEffect)(function () {
            setTimeout(function () {
              d('\u5B9A\u65F6\u56683s\u540E\u89E6\u53D1');
            }, 3e3);
          }, []);
          var h = o || 'Loading...';
          return (0, r.jsx)('div', { children: h });
        },
        E = function () {
          var l = (0, m.useState)(!1),
            t = s()(l, 2),
            o = t[0],
            d = t[1];
          return (0, r.jsxs)('div', {
            children: [
              (0, r.jsxs)(e.ZP, {
                type: 'primary',
                onClick: function () {
                  return d(function (D) {
                    return !D;
                  });
                },
                children: ['\u5207\u6362 ', o ? 'unmount' : 'mount'],
              }),
              o && (0, r.jsx)(i, {}),
            ],
          });
        };
      n.default = E;
    },
    67905: function (c, n, _) {
      var u = _(48305),
        s = _.n(u),
        a = _(50959),
        e = _(98070);
      function m(r) {
        var i = (0, e.Z)(),
          E = (0, a.useState)(r),
          f = s()(E, 2),
          l = f[0],
          t = f[1],
          o = (0, a.useCallback)(function (d) {
            i.current || t(d);
          }, []);
        return [l, o];
      }
      n.Z = m;
    },
    98070: function (c, n, _) {
      var u = _(50959),
        s = function () {
          var e = (0, u.useRef)(!1);
          return (
            (0, u.useEffect)(function () {
              return (
                (e.current = !1),
                function () {
                  e.current = !0;
                }
              );
            }, []),
            e
          );
        };
      n.Z = s;
    },
  },
]);
