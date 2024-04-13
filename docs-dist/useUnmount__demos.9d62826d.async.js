'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [9981],
  {
    72378: function (o, u, n) {
      n.r(u);
      var _ = n(84889),
        t = n(58016);
      u.default = function () {
        return (
          (0, _.Z)(function () {
            t.ZP.success(
              'useUnmount: \u5206\u624B\u5E94\u8BE5\u4F53\u9762,\u8C01\u90FD\u4E0D\u8981\u8BF4\u62B1\u6B49',
            );
          }),
          'useUnmount\u53EA\u4F1A\u5728\u51FD\u6570\u9500\u6BC1\u540E\u89E6\u53D1\u3002\u5207\u6362\u5230\u5176\u4ED6\u9875\u9762\u5373\u53EF\u67E5\u770B\u4FE1\u606F'
        );
      };
    },
    47058: function (o, u, n) {
      var _ = n(50959),
        t = function (s) {
          var e = (0, _.useRef)(s);
          return (e.current = s), e;
        };
      u.Z = t;
    },
    84889: function (o, u, n) {
      var _ = n(50959),
        t = n(47058),
        r = function (e) {
          var c = (0, t.Z)(e);
          (0, _.useEffect)(function () {
            return function () {
              c.current();
            };
          }, []);
        };
      u.Z = r;
    },
  },
]);
