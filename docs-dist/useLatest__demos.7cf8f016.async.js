'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [5042],
  {
    3035: function (d, e, _) {
      _.r(e);
      var n = _(48305),
        s = _.n(n),
        o = _(47058),
        u = _(83110),
        t = _(50959),
        r = _(11527);
      e.default = function () {
        var E = t.useState(0),
          a = s()(E, 2),
          l = a[0],
          c = a[1],
          h = (0, o.Z)(l),
          m = function () {
            c(l + 1);
          };
        return (0, r.jsxs)('div', {
          children: [
            (0, r.jsxs)('p', {
              children: [
                '\u6731\u7802\u75E3\u4E45\u96BE\u6D88\uFF0C\u4F60\u662F\u5426\u80FD\u77E5\u9053: ',
                h.current,
              ],
            }),
            (0, r.jsx)(u.ZP, { onClick: m, children: 'Increment' }),
          ],
        });
      };
    },
    47058: function (d, e, _) {
      var n = _(50959),
        s = function (u) {
          var t = (0, n.useRef)(u);
          return (t.current = u), t;
        };
      e.Z = s;
    },
  },
]);
