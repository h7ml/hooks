"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[8780],{93607:function(p,r,t){t.r(r);var c=t(84728),l=t(8266),i=t(11527),m="import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";r.default=function(){return(0,i.jsx)(c.Z,{children:(0,i.jsx)(l.oP,{type:"prism",language:"js",children:m})})}},388:function(p,r,t){t.r(r);var c=t(84728),l=t(8266),i=t(11527),m="import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';";r.default=function(){return(0,i.jsx)(c.Z,{children:(0,i.jsx)(l.oP,{language:"js",children:m})})}},13408:function(p,r,t){t.r(r);var c=t(84728),l=t(8266),i=t(11527),m=`
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
`;r.default=function(){return(0,i.jsx)(c.Z,{children:(0,i.jsx)(l.oP,{language:"tsx",syntaxThemes:{shiki:{dark:"dark-plus"}},children:m})})}},84728:function(p,r,t){t.d(r,{Z:function(){return U}});var c=t(47828),l=t(79115),i=t(84875),m=t.n(i),a=t(50959),D=t(38860),j=t(22915),A=t(9360),k=t(32699);const y=a.createContext({});var P=a.createContext({message:{},notification:{},modal:{}}),B=t(68268);const R=e=>{const{componentCls:s,colorText:n,fontSize:o,lineHeight:u,fontFamily:d}=e;return{[s]:{color:n,fontSize:o,lineHeight:u,fontFamily:d}}};var I=(0,B.Z)("App",e=>[R(e)]);const K=()=>a.useContext(P),v=e=>{const{prefixCls:s,children:n,className:o,rootClassName:u,message:d,notification:x,style:F}=e,{getPrefixCls:H}=(0,a.useContext)(D.E_),T=H("app",s),[N,G]=I(T),z=m()(G,T,o,u),h=(0,a.useContext)(y),f=a.useMemo(()=>({message:Object.assign(Object.assign({},h.message),d),notification:Object.assign(Object.assign({},h.notification),x)}),[d,x,h.message,h.notification]),[E,V]=(0,j.Z)(f.message),[M,J]=(0,k.Z)(f.notification),[S,Q]=(0,A.Z)(),X=a.useMemo(()=>({message:E,notification:M,modal:S}),[E,M,S]);return N(a.createElement(P.Provider,{value:X},a.createElement(y.Provider,{value:f},a.createElement("div",{className:z,style:F},Q,V,J,n))))};v.useApp=K;var W=v,Z=t(2515),O=t(11527),L=["children"];function C(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,o)}return n}function g(e){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?C(Object(n),!0).forEach(function(o){(0,c.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var U=function(e){var s=e.children,n=(0,l.Z)(e,L);return(0,O.jsx)(Z.f,g(g({},n),{},{children:(0,O.jsx)(W,{children:s})}))}}}]);
