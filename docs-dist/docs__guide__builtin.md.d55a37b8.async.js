'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [6538],
  {
    93185: function (o, n, e) {
      e.r(n);
      var u = e(82247),
        a = e(57161),
        d = e(93128),
        r = e(86683),
        h = e(46448),
        t = e(50283),
        m = e(50959),
        _ = e(11527);
      function i() {
        var l = (0, t.eL)(),
          s = l.texts;
        return (0, _.jsx)(t.dY, {
          children: (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)('div', {
                className: 'markdown',
                children: [
                  (0, _.jsxs)('h1', {
                    id: '\u5185\u7F6E\u7EC4\u4EF6',
                    children: [
                      (0, _.jsx)('a', {
                        'aria-hidden': 'true',
                        tabIndex: '-1',
                        href: '#\u5185\u7F6E\u7EC4\u4EF6',
                        children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                      }),
                      '\u5185\u7F6E\u7EC4\u4EF6',
                    ],
                  }),
                  (0, _.jsxs)('p', {
                    children: [
                      s[0].value,
                      (0, _.jsx)('a', {
                        href: 'https://d.umijs.org/guide/markdown#container',
                        children: s[1].value,
                      }),
                      s[2].value,
                    ],
                  }),
                  (0, _.jsxs)('h2', {
                    id: 'markdown-\u9AD8\u4EAE',
                    children: [
                      (0, _.jsx)('a', {
                        'aria-hidden': 'true',
                        tabIndex: '-1',
                        href: '#markdown-\u9AD8\u4EAE',
                        children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                      }),
                      'Markdown \u9AD8\u4EAE',
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(d.Z, {
                type: 'info',
                title: '\u81EA\u5B9A\u4E49\u6807\u9898',
                children: (0, _.jsxs)('p', {
                  children: [s[3].value, (0, _.jsx)('code', { children: s[4].value })],
                }),
              }),
              (0, _.jsx)(d.Z, {
                type: 'success',
                children: (0, _.jsx)('p', { children: s[5].value }),
              }),
              (0, _.jsx)(d.Z, {
                type: 'warning',
                children: (0, _.jsx)('p', { children: s[6].value }),
              }),
              (0, _.jsx)(d.Z, {
                type: 'error',
                children: (0, _.jsx)('p', { children: s[7].value }),
              }),
            ],
          }),
        });
      }
      n.default = i;
    },
  },
]);
