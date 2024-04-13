'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [970],
  {
    40300: function (u, t, e) {
      e.r(t);
      var a = e(82247),
        i = e(57161),
        n = e(50935),
        m = e(86683),
        h = e(46448),
        d = e(50283),
        r = e(50959),
        _ = e(11527);
      function o() {
        var l = (0, d.eL)(),
          s = l.texts;
        return (0, _.jsx)(d.dY, {
          children: (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)('div', {
              className: 'markdown',
              children: [
                (0, _.jsxs)('h1', {
                  id: '\u76EE\u5F55',
                  children: [
                    (0, _.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: '-1',
                      href: '#\u76EE\u5F55',
                      children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                    }),
                    '\u76EE\u5F55',
                  ],
                }),
                (0, _.jsx)('p', { children: s[0].value }),
                (0, _.jsxs)('p', {
                  children: [s[1].value, (0, _.jsx)('code', { children: s[2].value }), s[3].value],
                }),
                (0, _.jsx)(n.Z, { lang: 'markdown', children: s[4].value }),
                (0, _.jsx)('p', { children: s[5].value }),
                (0, _.jsxs)('p', {
                  children: [
                    s[6].value,
                    (0, _.jsx)(d.rU, { to: '/components/toc', children: s[7].value }),
                    s[8].value,
                  ],
                }),
              ],
            }),
          }),
        });
      }
      t.default = o;
    },
  },
]);
