'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [8463],
  {
    48994: function (r, n, _) {
      _.r(n);
      var e = _(48305),
        t = _.n(e),
        s = _(98070),
        u = _(14838),
        o = _(84889),
        a = _(58016),
        f = _(83110),
        D = _(50959),
        E = _(11527),
        i = function () {
          var c = (0, s.Z)();
          return (
            (0, u.Z)(function () {
              a.ZP.success('\u6731\u7802\u75E3'), console.log('\u521D\u59CB\u5316\uFF1A', c);
            }),
            (0, o.Z)(function () {
              a.ZP.success('\u767D\u6708\u5149'), console.log('\u5378\u8F7D\uFF1A', c);
            }),
            (0, E.jsx)('div', {
              children: '\u5F97\u4E0D\u5230\u7684\u7F8E\u597D,\u603B\u5728\u5FC3\u95F4\u6320',
            })
          );
        },
        P = function () {
          var c = (0, D.useState)(!1),
            d = t()(c, 2),
            l = d[0],
            O = d[1];
          return (0, E.jsxs)('div', {
            children: [
              (0, E.jsxs)(f.ZP, {
                type: 'primary',
                onClick: function () {
                  return O(function (m) {
                    return !m;
                  });
                },
                children: ['\u5207\u6362 ', l ? '\u5378\u8F7D' : '\u521D\u59CB\u5316'],
              }),
              l && (0, E.jsx)(i, {}),
            ],
          });
        };
      n.default = P;
    },
    47058: function (r, n, _) {
      var e = _(50959),
        t = function (u) {
          var o = (0, e.useRef)(u);
          return (o.current = u), o;
        };
      n.Z = t;
    },
    14838: function (r, n, _) {
      var e = _(50959),
        t = function (u) {
          (0, e.useEffect)(function () {
            u == null || u();
          }, []);
        };
      n.Z = t;
    },
    84889: function (r, n, _) {
      var e = _(50959),
        t = _(47058),
        s = function (o) {
          var a = (0, t.Z)(o);
          (0, e.useEffect)(function () {
            return function () {
              a.current();
            };
          }, []);
        };
      n.Z = s;
    },
    98070: function (r, n, _) {
      var e = _(50959),
        t = function () {
          var u = (0, e.useRef)(!1);
          return (
            (0, e.useEffect)(function () {
              return (
                (u.current = !1),
                function () {
                  u.current = !0;
                }
              );
            }, []),
            u
          );
        };
      n.Z = t;
    },
  },
]);
