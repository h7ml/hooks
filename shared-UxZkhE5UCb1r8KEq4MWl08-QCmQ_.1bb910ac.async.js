"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[5644],{65803:function(ve,D,a){a.d(D,{Z:function(){return I}});var F=a(47622),E=a(50959),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},R=M,h=a(42487),p=function(L,N){return E.createElement(h.Z,(0,F.Z)({},L,{ref:N,icon:R}))},I=E.forwardRef(p)},84728:function(ve,D,a){a.d(D,{Z:function(){return ge}});var F=a(47828),E=a(79115),M=a(84875),R=a.n(M),h=a(50959),p=a(38860),I=a(22915),V=a(9360),L=a(32699);const N=h.createContext({});var G=h.createContext({message:{},notification:{},modal:{}}),se=a(68268);const ie=i=>{const{componentCls:f,colorText:c,fontSize:v,lineHeight:$,fontFamily:u}=i;return{[f]:{color:c,fontSize:v,lineHeight:$,fontFamily:u}}};var ce=(0,se.Z)("App",i=>[ie(i)]);const z=()=>h.useContext(G),J=i=>{const{prefixCls:f,children:c,className:v,rootClassName:$,message:u,notification:W,style:T}=i,{getPrefixCls:ne}=(0,h.useContext)(p.E_),Q=ne("app",f),[te,oe]=ce(Q),re=R()(oe,Q,v,$),Z=(0,h.useContext)(N),A=h.useMemo(()=>({message:Object.assign(Object.assign({},Z.message),u),notification:Object.assign(Object.assign({},Z.notification),W)}),[u,W,Z.message,Z.notification]),[U,ae]=(0,I.Z)(A.message),[X,pe]=(0,L.Z)(A.notification),[d,ue]=(0,V.Z)(),me=h.useMemo(()=>({message:U,notification:X,modal:d}),[U,X,d]);return te(h.createElement(G.Provider,{value:me},h.createElement(N.Provider,{value:A},h.createElement("div",{className:re,style:T},ue,ae,pe,c))))};J.useApp=z;var de=J,Y=a(2515),q=a(11527),fe=["children"];function _(i,f){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);f&&(v=v.filter(function($){return Object.getOwnPropertyDescriptor(i,$).enumerable})),c.push.apply(c,v)}return c}function ee(i){for(var f=1;f<arguments.length;f++){var c=arguments[f]!=null?arguments[f]:{};f%2?_(Object(c),!0).forEach(function(v){(0,F.Z)(i,v,c[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):_(Object(c)).forEach(function(v){Object.defineProperty(i,v,Object.getOwnPropertyDescriptor(c,v))})}return i}var ge=function(i){var f=i.children,c=(0,E.Z)(i,fe);return(0,q.jsx)(Y.f,ee(ee({},c),{},{children:(0,q.jsx)(de,{children:f})}))}},82526:function(ve,D,a){a.d(D,{Z:function(){return Te}});var F=a(47828),E=a(65803),M=a(8863),R=a(84875),h=a.n(R),p=a(50959),I=a(98785),V=a(10725),L=a(25025),N=a(38860);function he(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var G=a(41659),se=a(41076),ie=a(68268),ce=a(56049);const z=(e,o,n)=>{const t=he(n);return{[`${e.componentCls}-${o}`]:{color:e[`color${n}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},J=e=>(0,se.Z)(e,(o,n)=>{let{textColor:t,lightBorderColor:r,lightColor:l,darkColor:s}=n;return{[`${e.componentCls}-${o}`]:{color:t,background:l,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),de=e=>{const{paddingXXS:o,lineWidth:n,tagPaddingHorizontal:t,componentCls:r}=e,l=t-n,s=o-n;return{[r]:Object.assign(Object.assign({},(0,G.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:s,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var Y=(0,ie.Z)("Tag",e=>{const{lineWidth:o,fontSizeIcon:n}=e,t=e.fontSizeSM,r=`${e.lineHeightSM*t}px`,l=(0,ce.TS)(e,{tagFontSize:t,tagLineHeight:r,tagIconSize:n-2*o,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[de(l),J(l),z(l,"success","Success"),z(l,"processing","Info"),z(l,"error","Error"),z(l,"warning","Warning")]},e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText})),q=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},_=e=>{const{prefixCls:o,className:n,checked:t,onChange:r,onClick:l}=e,s=q(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:b}=p.useContext(N.E_),m=C=>{r==null||r(!t),l==null||l(C)},g=b("tag",o),[w,y]=Y(g),O=h()(g,`${g}-checkable`,{[`${g}-checkable-checked`]:t},n,y);return w(p.createElement("span",Object.assign({},s,{className:O,onClick:m})))},ee=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const ge=(e,o)=>{const{prefixCls:n,className:t,rootClassName:r,style:l,children:s,icon:b,color:m,onClose:g,closeIcon:w,closable:y,bordered:O=!0}=e,C=ee(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:x,direction:B,tag:j}=p.useContext(N.E_),[k,S]=p.useState(!0);p.useEffect(()=>{"visible"in C&&S(C.visible)},[C.visible]);const le=(0,I.o2)(m)||(0,I.yT)(m),K=Object.assign(Object.assign({backgroundColor:m&&!le?m:void 0},j==null?void 0:j.style),l),P=x("tag",n),[Ze,we]=Y(P),Ee=h()(P,j==null?void 0:j.className,{[`${P}-${m}`]:le,[`${P}-has-color`]:m&&!le,[`${P}-hidden`]:!k,[`${P}-rtl`]:B==="rtl",[`${P}-borderless`]:!O},t,r,we),be=H=>{H.stopPropagation(),g==null||g(H),!H.defaultPrevented&&S(!1)},[,Ie]=(0,V.Z)(y,w,H=>H===null?p.createElement(M.Z,{className:`${P}-close-icon`,onClick:be}):p.createElement("span",{className:`${P}-close-icon`,onClick:be},H),null,!1),ze=typeof C.onClick=="function"||s&&s.type==="a",Oe=b||null,Ae=Oe?p.createElement(p.Fragment,null,Oe,s&&p.createElement("span",null,s)):s,je=p.createElement("span",Object.assign({},C,{ref:o,className:Ee,style:K}),Ae,Ie);return Ze(ze?p.createElement(L.Z,{component:"Tag"},je):je)},i=p.forwardRef(ge);i.CheckableTag=_;var f=i,c=a(56539),v=a(77738),$=a(55937),u=a(96766),W=a(99650),T=a(96395),ne,Q,te,oe,re,Z,A,U,ae,X,pe=(0,W.kc)(function(e,o){var n=e.token,t=e.prefixCls,r=e.responsive,l=e.css,s=e.stylish,b=e.isDarkMode,m=e.cx,g=o.rowNum,w=o.hasLink,y="".concat(t,"-features"),O="".concat(y,"-cover"),C="".concat(y,"-description"),x="".concat(y,"-title"),B="".concat(y,"-img"),j=20,k=function(K){return l(ne||(ne=(0,u.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),K,K,K*(22/24))},S=l(Q||(Q=(0,u.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:l(te||(te=(0,u.Z)([`
        overflow: hidden;
      `]))),container:l(oe||(oe=(0,u.Z)([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),S,n.colorFillContent,n.colorFillQuaternary,(0,T.$n)(.5,n.colorFillContent),(0,T.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,O,j*g,B,k(100),C,x,w?14:20),title:m(x,S,l(re||(re=(0,u.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:m(C,S,l(Z||(Z=(0,u.Z)([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),n.colorTextSecondary,n.colorTextDescription,b?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:m(O,S,l(A||(A=(0,u.Z)([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),n.colorFillContent,k(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,T.m4)(n.gradientColor2,.3),(0,T.m4)(n.gradientColor2,.3),(0,T.m4)(n.gradientColor1,.3))),img:m(B,S,l(U||(U=(0,u.Z)([`
          `,`;
          color: `,`;
        `])),k(20),n.colorWhite)),link:l(ae||(ae=(0,u.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),S,s.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:l(X||(X=(0,u.Z)([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),s.heroBlurBall,b?.05:.08,r.mobile)}}),d=a(11527),ue=function(o){var n=o.image,t=o.className,r=o.title,l=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||l.test(n)?(0,d.jsx)("img",{className:t,src:n,alt:r}):(0,d.jsx)(v.Z,{className:t,children:n})},me=function(o){var n=o.imageType,t=o.row,r=o.column,l=o.hero,s=o.description,b=o.image,m=o.title,g=o.link,w=o.imageStyle,y=o.openExternal,O=t||7,C=pe({rowNum:O,hasLink:!!g}),x=C.styles,B=C.theme;return(0,d.jsxs)("div",{className:x.container,style:{gridRow:"span ".concat(O),gridColumn:"span ".concat(r||1),cursor:g?"pointer":"default"},onClick:function(){g&&(y?window.open(g):c.m8.push(g))},children:[(0,d.jsxs)("div",{className:x.cell,children:[b&&(0,d.jsx)(v.Z,{"image-style":n,className:x.imgContainer,style:w,children:(0,d.jsx)(ue,{className:x.img,image:b,title:m})}),m&&(0,d.jsxs)($.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:x.title,children:[m,n==="soon"?(0,d.jsx)(f,{color:B.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),s&&(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:s},className:x.desc}),g&&(0,d.jsx)("div",{className:x.link,children:(0,d.jsxs)(c.rU,{to:g,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,d.jsx)(E.Z,{})]})})]}),l&&(0,d.jsx)("div",{className:x.blur})]})},Se=me,Ce,xe,Pe=(0,W.kc)(function(e){var o=e.token,n=e.prefixCls,t=e.responsive,r=e.css,l=e.cx,s="".concat(n,"-features");return{container:l(s,r(Ce||(Ce=(0,u.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),o.contentMaxWidth,t({mobile:r(xe||(xe=(0,u.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function ye(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function Ne(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?ye(Object(n),!0).forEach(function(t){(0,F.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $e=function(o){var n=o.items,t=o.style,r=Pe(),l=r.styles;return n!=null&&n.length?(0,d.jsx)("div",{className:l.container,style:t,children:n.map(function(s){return(0,d.jsx)(Se,Ne({},s),s.title)})}):null},Te=$e}}]);
