"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[257],{23041:function(oe,p,r){r.r(p),r.d(p,{default:function(){return q}});var ae=r(5187),se=r(70834),le=r(12970),ie=r(27427),ce=r(28165),h=r(17789),l=r(90142),C=r(55471),M=r(74200),z=r(11566),A=r(17125),f=r(88829),O=r(89886),B=r(48453),i=r.n(B),k=r(52902),x=r(75271),L=r(42598);const{useDebugValue:R}=x,{useSyncExternalStoreWithSelector:H}=L;let S=!1;const W=t=>t;function V(t,n=W,o){o&&!S&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),S=!0);const a=H(t.subscribe,t.getState,t.getServerState||t.getInitialState,n,o);return R(a),a}const D=t=>{typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof t=="function"?(0,k.M)(t):t,o=(a,c)=>V(n,a,c);return Object.assign(o,n),o},E=t=>t?D(t):D;var de=t=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),E(t)),m=E(function(){return{mode:"oklch"}}),G=function(n){var o=i()(n).get("lab.l"),a=o<50?i()(n).brighten(2):i()(n).darken(2);return a.hex()},e=r(52676),F,b,P,I=(0,O.kc)(function(t){var n=t.css;return{title:n(F||(F=(0,f.Z)([`
    height: 32px;
  `]))),palette:n(b||(b=(0,f.Z)([`
    border-radius: 6px;
    overflow: hidden;
  `]))),color:n(P||(P=(0,f.Z)([`
    height: 40px;
    font-family: Monaco, Consolas, 'Courier New', monospace;
  `])))}}),K=function(n){var o=n.color,a=n.index,c=I(),d=c.styles,u=m(),v=u.mode,_=(0,x.useMemo)(function(){var s=function(T){return isNaN(T)?"/":T.toFixed(0)};switch(v){case"hex":return o;case"oklch":var ee=i()(o).oklch(),g=(0,h.Z)(ee,3),te=g[0],ne=g[1],re=g[2];return"".concat(s(te*100),",").concat(s(ne*100),",").concat(s(re));case"hsl":var j=i()(o).hsl();return"".concat(s(j[0]),",").concat(s(j[1]*100),"%,").concat(s(j[2]*100),"%");case"hsv":var y=i()(o).hsv();return"".concat(s(y[0]),",").concat(s(y[1]*100),"%,").concat(s(y[2]*100),"%")}},[v,o]);return(0,e.jsxs)(l.D,{horizontal:!0,align:"center",gap:24,distribution:"space-between",style:{background:o,color:G(o)},className:d.color,width:160,children:[(0,e.jsx)(l.D,{style:{paddingLeft:8},children:a}),(0,e.jsx)(l.D,{style:{paddingRight:12},children:_})]})},U=function(n){var o=n.palette,a=I(),c=a.styles;return(0,e.jsx)(l.D,{horizontal:!0,gap:12,children:o.map(function(d){return(0,e.jsxs)(l.D,{width:160,align:"center",children:[(0,e.jsx)("div",{className:c.title,style:{color:d.colors[6]},children:d.key}),(0,e.jsx)(l.D,{className:c.palette,children:d.colors.map(function(u,v){return(0,e.jsx)(K,{index:v,color:u},u)})})]},d.key)})})},Z=U,X=Object.entries(A.F).map(function(t){var n=(0,h.Z)(t,2),o=n[0],a=n[1];return{key:o,colors:a}}),Y=Object.entries(z.F).map(function(t){var n=(0,h.Z)(t,2),o=n[0],a=n[1];return{key:o,colors:a}}),J=function(){var t=m(),n=t.mode;return(0,e.jsxs)(l.D,{children:[(0,e.jsxs)(l.D,{align:"center",horizontal:!0,gap:12,style:{marginBottom:8,alignSelf:"end"},children:["\u8272\u5F69\u6A21\u578B",(0,e.jsx)(M.ZP.Group,{value:n,options:[{label:"OKLCH",value:"oklch"},{label:"HEX",value:"hex"},{label:"HSL",value:"hsl"},{label:"HSV",value:"hsv"}],onChange:function(a){m.setState({mode:a.target.value})}})]}),(0,e.jsx)(C.Z,{padding:24,style:{background:"#fafafa"},children:(0,e.jsx)(Z,{palette:X})}),(0,e.jsx)(C.Z,{padding:24,style:{background:"#000"},children:(0,e.jsx)(Z,{palette:Y})})]})},N=r(42962),Q=r(82456);function $(){var t=(0,N.eL)(),n=t.texts;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u4E3B\u9898",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3B\u9898",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[0].value}),n[1].value]}),(0,e.jsxs)("h2",{id:"\u8272\u677F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8272\u677F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8272\u677F"]}),(0,e.jsx)("p",{children:n[2].value})]}),(0,e.jsx)(J,{})]})}function w(){return(0,e.jsx)(N.dY,{children:(0,e.jsx)(x.Suspense,{fallback:(0,e.jsx)(Q.Z,{}),children:(0,e.jsx)($,{})})})}var q=w}}]);
