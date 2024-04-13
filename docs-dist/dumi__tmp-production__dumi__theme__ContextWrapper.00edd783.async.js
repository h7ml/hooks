'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [1923],
  {
    62092: function (k, s, e) {
      e.r(s),
        e.d(s, {
          default: function () {
            return c;
          },
        });
      var a = e(48305),
        l = e.n(a),
        t = e(50959),
        o = e(50283),
        h = e(53678),
        _ = e(46500),
        m = e(95990),
        d = e(11527),
        u = {};
      function c() {
        var p = (0, o.pC)(),
          g = (0, t.useState)(!1),
          n = l()(g, 2),
          f = n[0],
          E = n[1],
          r = (0, t.useRef)(o.m8.location.pathname);
        return (
          (0, t.useEffect)(function () {
            return o.m8.listen(function (i) {
              i.location.pathname !== r.current &&
                ((r.current = i.location.pathname), document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, d.jsx)(h.D.Provider, {
            value: {
              pkg: {
                name: '@dext7r/hooks',
                description:
                  '@dext7r/hooks is a custom Hooks library for React, designed to provide a convenient and easy-to-use set of Hooks tailored for various scenarios. This library encompasses a range of common frontend request operations, including Axios, Puppeteer, Fetch, Request, and more, to facilitate efficient handling of network requests and browser interactions\u3002@dext7r/hooks \u662F\u4E00\u4E2A\u57FA\u4E8E React \u7684\u81EA\u5B9A\u4E49 Hooks \u5E93\uFF0C\u65E8\u5728\u63D0\u4F9B\u4E00\u5957\u65B9\u4FBF\u3001\u6613\u7528\u7684\u9488\u5BF9\u4E0D\u540C\u573A\u666F\u7684 Hooks \u5C01\u88C5\u3002\u8BE5\u5E93\u6DB5\u76D6\u4E86\u591A\u79CD\u5E38\u89C1\u7684\u524D\u7AEF\u8BF7\u6C42\u64CD\u4F5C\uFF0C\u5305\u62EC Axios\u3001Puppeteer\u3001Fetch\u3001Request \u7B49\uFF0C\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u548C\u6D4F\u89C8\u5668\u64CD\u4F5C',
                version: '0.2.0',
                license: 'Apache-2.0',
                repository: { type: 'git', url: 'https://github.com/h7ml/hooks.git' },
                author: { name: 'h7ml', github: 'https://github.com/h7ml', mail: 'h7ml@qq.com' },
              },
              historyType: 'browser',
              entryExports: u,
              demos: _.DE,
              components: _.wx,
              locales: m.k,
              loading: f,
              setLoading: E,
              hostname: 'https://hooks.h7ml.cn',
              themeConfig: {
                footer: !1,
                prefersColor: { default: 'light', switch: !0 },
                nprogress: !0,
                lastUpdated: !0,
                name: '@dext7r/hooks',
                github: 'https://github.com/h7ml/hooks',
                logo: 'https://www.h7ml.cn/logo.svg',
                nav: [
                  { title: '\u8D77\u6B65', link: '/guide' },
                  { title: 'Hooks', link: '/hooks' },
                  { title: 'Utils', link: '/utils' },
                  { title: '\u66F4\u65B0\u65E5\u5FD7', link: '/changelog' },
                ],
                socialLinks: { github: 'https://github.com/h7ml/hooks' },
                apiHeader: {
                  docUrl: '{github}/tree/master/src/{atomId}/index.md',
                  match: ['/components'],
                  pkg: '@dext7r/hooks',
                  sourceUrl: '{github}/tree/master/src/{atomId}/index.tsx',
                },
                editLink: 'https://github.com/h7ml/hooks/edit/master/{filename}',
              },
              _2_level_nav_available: !0,
            },
            children: p,
          })
        );
      }
    },
  },
]);
