"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[8780],{6141:function(i,t,n){n.r(t);var s=n(7045),o=n(49900),e=n(52676),r="import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";t.default=function(){return(0,e.jsx)(s.Z,{children:(0,e.jsx)(o.oP,{type:"prism",language:"js",children:r})})}},63103:function(i,t,n){n.r(t);var s=n(7045),o=n(49900),e=n(52676),r="import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";t.default=function(){return(0,e.jsx)(s.Z,{children:(0,e.jsx)(o.oP,{language:"js",children:r})})}},85513:function(i,t,n){n.r(t);var s=n(7045),o=n(49900),e=n(52676),r=`
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
`;t.default=function(){return(0,e.jsx)(s.Z,{children:(0,e.jsx)(o.oP,{language:"tsx",syntaxThemes:{shiki:{dark:"dark-plus"}},children:r})})}}}]);
