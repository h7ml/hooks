"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[8494],{64692:function(K,m,t){t.r(m);var g=t(84728),u=t(51118),y=t(77738),p=t(11527);m.default=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsx)(y.Z,{style:{height:600},children:(0,p.jsx)(u.Z,{title:"Ant Design <b>Style</b>",actions:[{text:"\u4E3B\u6309\u94AE",link:"/components/hero"},{text:"\u8F85\u52A9\u6309\u94AE",link:"/"}],description:"\u70AB\u9177\u7684 Hero \u5934\u90E8\u7EC4\u4EF6"})})})}},84728:function(K,m,t){t.d(m,{Z:function(){return r}});var g=t(47828),u=t(79115),y=t(84875),p=t.n(y),c=t(50959),d=t(38860),O=t(22915),C=t(9360),N=t(32699);const i=c.createContext({});var b=c.createContext({message:{},notification:{},modal:{}}),P=t(68268);const S=n=>{const{componentCls:e,colorText:o,fontSize:s,lineHeight:l,fontFamily:x}=n;return{[e]:{color:o,fontSize:s,lineHeight:l,fontFamily:x}}};var z=(0,P.Z)("App",n=>[S(n)]);const Z=()=>c.useContext(b),j=n=>{const{prefixCls:e,children:o,className:s,rootClassName:l,message:x,notification:h,style:D}=n,{getPrefixCls:v}=(0,c.useContext)(d.E_),f=v("app",e),[I,F]=z(f),T=p()(F,f,s,l),B=(0,c.useContext)(i),W=c.useMemo(()=>({message:Object.assign(Object.assign({},B.message),x),notification:Object.assign(Object.assign({},B.notification),h)}),[x,h,B.message,B.notification]),[U,V]=(0,O.Z)(W.message),[G,X]=(0,N.Z)(W.notification),[k,J]=(0,C.Z)(),Q=c.useMemo(()=>({message:U,notification:G,modal:k}),[U,G,k]);return I(c.createElement(b.Provider,{value:Q},c.createElement(i.Provider,{value:W},c.createElement("div",{className:T,style:D},J,V,X,o))))};j.useApp=Z;var H=j,E=t(2515),M=t(11527),L=["children"];function A(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),o.push.apply(o,s)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?A(Object(o),!0).forEach(function(s){(0,g.Z)(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}var r=function(n){var e=n.children,o=(0,u.Z)(n,L);return(0,M.jsx)(E.f,a(a({},o),{},{children:(0,M.jsx)(H,{children:e})}))}},51118:function(K,m,t){t.d(m,{Z:function(){return A}});var g=t(83651),u=t(55469),y=t(56539),p=t(55937),c=t(77738),d=t(96766),O=t(99650),C,N=(0,O.kc)(function(a){var r=a.css,n=a.stylish;return{button:r(C||(C=(0,d.Z)([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),n.heroButtonGradient,n.heroGradientFlow)}}),i=t(11527),R=function(r){var n=r.children,e=N(),o=e.styles;return(0,i.jsx)(u.ZP,{size:"large",shape:"round",type:"primary",className:o.button,children:n})},b=R,P,S,z,Z,j,H,E,M=(0,O.kc)(function(a){var r=a.css,n=a.responsive,e=a.token,o=a.stylish,s=a.isDarkMode;return{container:r(P||(P=(0,d.Z)([`
    position: relative;
    text-align: center;
    box-sizing: border-box;

    + * {
      position: relative;
    }

    > p {
      margin: 32px;
      color: `,`;
      font-size: 20px;
      line-height: 1.6;

      `,`
    }
  `])),e.colorTextSecondary,n({mobile:{fontSize:16}})),titleContainer:r(S||(S=(0,d.Z)([`
    position: relative;
  `]))),title:r(z||(z=(0,d.Z)([`
    font-size: 68px;
    z-index: 10;
    color: transparent;
    margin: 0;
    font-family: AliPuHui, `,`;

    `,`

    b {
      position: relative;
      z-index: 5;
      `,`;
      `,`

      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `])),e.fontFamily,n({mobile:{fontSize:40}}),o.heroGradient,o.heroGradientFlow),titleShadow:r(Z||(Z=(0,d.Z)([`
    position: absolute;
    z-index: 0;
    color: `,`;

    top: 0;
    left: 0;
    font-size: 68px;
    font-family: AliPuHui, `,`;
    font-weight: bold;
    `,`

    `,`

    b {
      color: transparent;
    }
  `])),s?e.colorWhite:e.colorTextBase,e.fontFamily,n({mobile:{fontSize:40}}),o.heroTextShadow),desc:r(j||(j=(0,d.Z)([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),e.fontSizeHeading3,e.colorTextSecondary,n.mobile,e.fontSizeHeading5),actions:r(H||(H=(0,d.Z)([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),n({mobile:{marginTop:24}})),canvas:r(E||(E=(0,d.Z)([`
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    left: 50%;
    transform: translateX(-50%) scale(1.5);
    width: 600px;
    height: 400px;
    opacity: 0.2;
    `,`

    `,` {
      width: 200px;
      height: 300px;
    }
  `])),o.heroBlurBall,n.mobile)}}),L=function(r){var n=r.title,e=r.description,o=r.actions,s=M(),l=s.styles,x=s.cx;return(0,i.jsxs)(p.D,{horizontal:!0,distribution:"center",className:l.container,children:[(0,i.jsx)("div",{className:l.canvas}),(0,i.jsxs)(c.Z,{children:[n&&(0,i.jsxs)("div",{className:l.titleContainer,children:[(0,i.jsx)("h1",{className:l.title,dangerouslySetInnerHTML:{__html:n}}),(0,i.jsx)("div",{className:x(l.titleShadow),dangerouslySetInnerHTML:{__html:n}})]}),e&&(0,i.jsx)("p",{className:l.desc,dangerouslySetInnerHTML:{__html:e}}),!!(o!=null&&o.length)&&(0,i.jsx)(g.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,i.jsx)(p.D,{horizontal:!0,gap:24,className:l.actions,children:o.map(function(h,D){var v=h.text,f=h.link,I=h.openExternal,F=/^(https?:)?\/\//i.test(f),T=D===0?(0,i.jsx)(b,{children:v}):(0,i.jsx)(u.ZP,{size:"large",shape:"round",type:"default",children:v});return F?(0,i.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:T},"".concat(v,"-").concat(D)):(0,i.jsx)(y.rU,{to:f,target:I?"_blank":void 0,rel:"noreferrer",children:T},v)})})})]})]})},A=L}}]);
