'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [3065],
  {
    98495: function (o, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return r;
          },
        });
      var s = e(50283),
        t = e(11527),
        d = function () {
          var n = (0, s.YB)(),
            u = (0, s.bU)();
          return (0, t.jsxs)('div', {
            className: 'dumi-default-not-found',
            children: [
              (0, t.jsx)('h1', { children: n.formatMessage({ id: '404.title' }) }),
              (0, t.jsxs)(s.rU, {
                to: 'base' in u ? u.base : '/',
                replace: !0,
                children: [n.formatMessage({ id: '404.back' }), ' \u2192'],
              }),
            ],
          });
        },
        r = d;
    },
  },
]);
