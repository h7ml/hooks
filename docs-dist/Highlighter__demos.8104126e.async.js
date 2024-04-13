'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [8780],
  {
    18983: function (p, i, t) {
      t.r(i);
      var a = t(51411),
        c = t(97477),
        e = t(11527),
        l = "import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";
      i.default = function () {
        return (0, e.jsx)(a.Z, {
          children: (0, e.jsx)(c.oP, { type: 'prism', language: 'js', children: l }),
        });
      };
    },
    12089: function (p, i, t) {
      t.r(i);
      var a = t(51411),
        c = t(97477),
        e = t(11527),
        l = "import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";
      i.default = function () {
        return (0, e.jsx)(a.Z, { children: (0, e.jsx)(c.oP, { language: 'js', children: l }) });
      };
    },
    32943: function (p, i, t) {
      t.r(i);
      var a = t(51411),
        c = t(97477),
        e = t(11527),
        l = `
import { ReactElement, useMemo } from 'react';

import { useAntdTheme, useThemeMode } from '@/hooks';
import { PedestalProvider, reactCss } from '@/pedestal';
import { Theme } from '@/types';

import type { ThemeProviderProps } from './type';

type TokenContainerProps<T, S = Record<string, string>> = Pick<
  ThemeProviderProps<T, S>,
  'children' | 'customToken' | 'customStylish' | 'prefixCls'
>;

const TokenContainer: <T, S>(props: TokenContainerProps<T, S>) => ReactElement | null = ({
  children,
  customToken: customTokenOrFn,
  customStylish: stylishOrGetStylish,
  prefixCls = 'ant',
}) => {
  const themeState = useThemeMode();
  const { appearance, isDarkMode } = themeState;
  const { stylish: antdStylish, ...token } = useAntdTheme();

  // \u83B7\u53D6 \u81EA\u5B9A\u4E49 token
  const customToken = useMemo(() => {
    if (customTokenOrFn instanceof Function) {
      return customTokenOrFn({ token, appearance, isDarkMode });
    }

    return customTokenOrFn;
  }, [customTokenOrFn, token, appearance]);

  // \u83B7\u53D6 stylish
  const customStylish = useMemo(() => {
    if (!stylishOrGetStylish) return {};

    return stylishOrGetStylish({
      token: { ...token, ...customToken },
      stylish: antdStylish,
      appearance,
      isDarkMode,
      css: reactCss,
    });
  }, [stylishOrGetStylish, token, customToken, antdStylish, appearance]);

  const stylish = useMemo(
    () => ({ ...customStylish, ...antdStylish }),
    [customStylish, antdStylish],
  );

  const theme: Theme = {
    ...token,
    ...customToken,
    stylish,
    ...themeState,
    prefixCls,
  };

  return <PedestalProvider theme={theme}>{children}</PedestalProvider>;
};

export default TokenContainer;
`;
      i.default = function () {
        return (0, e.jsx)(a.Z, {
          children: (0, e.jsx)(c.oP, {
            language: 'tsx',
            syntaxThemes: { shiki: { dark: 'dark-plus' } },
            children: l,
          }),
        });
      };
    },
    51411: function (p, i, t) {
      t.d(i, {
        Z: function () {
          return F;
        },
      });
      var a = t(68185),
        c = t(50446),
        e = t(50959),
        l = t(82187),
        j = t.n(l),
        S = t(25765),
        D = t(37563),
        A = t(43469),
        k = t(99684),
        u = t(21773),
        B = t(26653);
      const R = (n) => {
          const { componentCls: o, colorText: s, fontSize: r, lineHeight: m, fontFamily: d } = n;
          return { [o]: { color: s, fontSize: r, lineHeight: m, fontFamily: d } };
        },
        I = () => ({});
      var Z = (0, B.I$)('App', R, I);
      const K = () => e.useContext(u.Z),
        P = (n) => {
          const {
              prefixCls: o,
              children: s,
              className: r,
              rootClassName: m,
              message: d,
              notification: C,
              style: H,
              component: f = 'div',
            } = n,
            { getPrefixCls: N } = (0, e.useContext)(S.E_),
            T = N('app', o),
            [G, z, V] = Z(T),
            b = j()(z, T, r, m, V),
            h = (0, e.useContext)(u.J),
            y = e.useMemo(
              () => ({
                message: Object.assign(Object.assign({}, h.message), d),
                notification: Object.assign(Object.assign({}, h.notification), C),
              }),
              [d, C, h.message, h.notification],
            ),
            [E, J] = (0, D.Z)(y.message),
            [x, $] = (0, k.Z)(y.notification),
            [M, Q] = (0, A.Z)(),
            X = e.useMemo(() => ({ message: E, notification: x, modal: M }), [E, x, M]),
            Y = f === !1 ? e.Fragment : f,
            w = { className: b, style: H };
          return G(
            e.createElement(
              u.Z.Provider,
              { value: X },
              e.createElement(
                u.J.Provider,
                { value: y },
                e.createElement(Y, Object.assign({}, f === !1 ? void 0 : w), Q, J, $, s),
              ),
            ),
          );
        };
      P.useApp = K;
      var W = P,
        L = t(15919),
        O = t(11527),
        U = ['children'];
      function v(n, o) {
        var s = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          o &&
            (r = r.filter(function (m) {
              return Object.getOwnPropertyDescriptor(n, m).enumerable;
            })),
            s.push.apply(s, r);
        }
        return s;
      }
      function g(n) {
        for (var o = 1; o < arguments.length; o++) {
          var s = arguments[o] != null ? arguments[o] : {};
          o % 2
            ? v(Object(s), !0).forEach(function (r) {
                (0, a.Z)(n, r, s[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
              : v(Object(s)).forEach(function (r) {
                  Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(s, r));
                });
        }
        return n;
      }
      var F = function (n) {
        var o = n.children,
          s = (0, c.Z)(n, U);
        return (0, O.jsx)(L.f, g(g({}, s), {}, { children: (0, O.jsx)(W, { children: o }) }));
      };
    },
  },
]);
