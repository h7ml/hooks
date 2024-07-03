(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[4860],{99257:function(y,S,s){"use strict";s.d(S,{Z:function(){return M}});var p=s(13238),u=s(75271),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},b=T,a=s(21154),Z=function(g,H){return u.createElement(a.Z,(0,p.Z)({},g,{ref:H,icon:b}))},D=u.forwardRef(Z),M=D},85799:function(y,S,s){"use strict";s.d(S,{Z:function(){return M}});var p=s(13238),u=s(75271),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},b=T,a=s(21154),Z=function(g,H){return u.createElement(a.Z,(0,p.Z)({},g,{ref:H,icon:b}))},D=u.forwardRef(Z),M=D},49776:function(y,S,s){"use strict";s.r(S),s.d(S,{default:function(){return Oo}});var p=s(87846),u=s(42962),T=s(3341),b=s.n(T),a=s(75271),Z=s(7045),D=s(45222),M=s(51151),L=s(32041),g=s(25862),H=s(66292),R=s.n(H);function ne(n){var e=(0,a.useRef)(n);return e.current=n,e}var W=ne,B=function(n){return n!==null&&typeof n=="object"},V=function(n){return typeof n=="function"},re=function(n){return typeof n=="string"},Te=function(n){return typeof n=="boolean"},oe=function(n){return typeof n=="number"},de=function(n){return typeof n=="undefined"},le=!1,fe=le,Me=function(n){fe&&(V(n)||console.error("useUnmount expected parameter is a function, got ".concat(typeof n)));var e=W(n);(0,a.useEffect)(function(){return function(){e.current()}},[])},me=Me;function ae(n,e){var t;fe&&(V(n)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof n)));var r=W(n),l=(t=e==null?void 0:e.wait)!==null&&t!==void 0?t:1e3,i=(0,a.useMemo)(function(){return R()(function(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];return r.current.apply(r,(0,g.ev)([],(0,g.CR)(c),!1))},l,e)},[]);return me(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var he=ae,Ee=function(n){return function(e,t){var r=(0,a.useRef)(!1);n(function(){return function(){r.current=!1}},[]),n(function(){if(!r.current)r.current=!0;else return e()},t)}},Ie=null,se=Ee(a.useEffect);function O(n,e,t){var r=(0,g.CR)((0,a.useState)({}),2),l=r[0],i=r[1],c=he(function(){i({})},t).run;(0,a.useEffect)(function(){return c()},e),se(n,[l])}var U=O,h=s(21910),ve=["setLoading"],Pt=["setLoading"],Rt=typeof window!="undefined",Ne={},Vt=function(e,t){(0,a.useEffect)(function(){a.startTransition(function(){e()})},t)},Ut=function(e,t){U(function(){e()},t,{wait:32,maxWait:96})},Xt=typeof a.startTransition=="function"?Vt:Ut,q=function(e,t,r){var l=(0,h.AC)(),i=r||function(c,d){return l.setState((0,L.Z)({},c,d))};!Rt&&!Ne[e]&&(i(e,t),Ne[e]=!0),Xt(function(){i(e,t)},[t])},Wt={"zh-CN":"\u9996\u9875","en-US":"Home"},Gt=function(e){return{title:Wt[e],link:"/",activePath:"/"}},Yt=(0,a.memo)(function(){var n=(0,u.WF)(),e=(0,u.tx)(),t=(0,u.eL)(),r=(0,u.zh)(),l=(0,u.OK)(),i=(0,u.TH)(),c=(0,u.bU)(),d=(0,h.AC)();return q("siteData",n,function(){var m=n.setLoading,v=(0,M.Z)(n,ve),f=d.getState(),I=f.siteData,j=I.setLoading,k=(0,M.Z)(I,Pt);b()(v,k)||d.setState({siteData:n})}),q("sidebar",e),q("routeMeta",t),q("location",i),q("tabMeta",r),q("locale",c),q("navData",l,function(){var m=n.themeConfig.hideHomeNav?l:[Gt(c.id)].concat((0,D.Z)(l));d.setState({navData:m})}),null}),pe=s(91811),E=s(90142),ke=s(55471),$t=s(75969),ce=s(78610),$=s(13238),Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Qt=Kt,K=s(21154),Jt=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:Qt}))},qt=a.forwardRef(Jt),_t=qt,en=s(24348),x=s(88829),F=s(89886),Ae,Ze,ze,Be,tn=(0,F.kc)(function(n){var e=n.token,t=n.css;return{container:t(Ae||(Ae=(0,x.Z)([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(Ze||(Ze=(0,x.Z)([`
    color: `,`;
    font-size: 12px;
  `])),e.colorTextTertiary),title:t(ze||(ze=(0,x.Z)([`
    font-size: 16px;
  `]))),alignmentEnd:t(Be||(Be=(0,x.Z)([`
    justify-content: flex-end;
  `])))}}),o=s(52676),nn=function(e){var t=e.title,r=e.link,l=e.type,i=tn(),c=i.styles,d=i.cx,m=(0,u.YB)(),v=(0,a.useMemo)(function(){switch(l){case"prev":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_t,{})," ",m.formatMessage({id:"content.footer.actions.previous"})]});case"next":return(0,o.jsxs)(o.Fragment,{children:[m.formatMessage({id:"content.footer.actions.next"})," ",(0,o.jsx)(en.Z,{})]})}},[l]);return(0,o.jsx)(u.rU,{to:r,children:(0,o.jsxs)(E.D,{className:c.container,gap:8,children:[(0,o.jsx)(E.D,{horizontal:!0,gap:4,className:d(c.nav,l==="next"&&c.alignmentEnd),children:v}),(0,o.jsx)(E.D,{horizontal:!0,className:d(c.title,l==="next"&&c.alignmentEnd),children:t})]})})},Fe=(0,a.memo)(nn);function Pe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),t.push.apply(t,r)}return t}function Re(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pe(Object(t),!0).forEach(function(r){(0,L.Z)(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var rn=function(){var e=(0,h.HX)(ce.e9,b()),t=e.prev,r=e.next,l=(0,pe.F)(),i=l.mobile;return(0,o.jsxs)(E.D,{horizontal:!i,gap:i?12:0,distribution:"space-between",style:{margin:i?12:0},children:[t?(0,o.jsx)(Fe,Re({type:"prev"},t)):(0,o.jsx)("div",{}),r?(0,o.jsx)(Fe,Re({type:"next"},r)):(0,o.jsx)("div",{})]})},on=(0,a.memo)(rn),Ve,an=(0,F.kc)(function(n){var e=n.token,t=n.responsive,r=n.isDarkMode,l=n.css;return{content:l(Ve||(Ve=(0,x.Z)([`
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,`;
    box-shadow: `,`;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,`;

      h1,
      h2,
      h3 {
        color: `,`;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;

        opacity: `,`;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,`;
        background: `,`;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,`;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,`;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,`;
        border-left: 3px solid `,`;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,`;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,`;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `])),e.colorBgContainer,e.boxShadowTertiary,t.mobile,r?e.colorTextSecondary:e.colorText,e.colorText,e.colorLink,e.colorLinkHover,e.colorLinkActive,r?.8:1,r?e["cyan-7"]:e.colorPrimaryText,r?e["cyan-1"]:e.colorPrimaryBg,e.colorFillTertiary,e.colorBorderSecondary,e.colorTextDescription,e.colorBorder,e.colorText,e.colorTextTertiary)}}),ln=function(e){var t=e.children,r=(0,h.HX)(function(v){return v.siteData.loading}),l=an(),i=l.styles,c=l.cx,d=(0,pe.F)(),m=d.mobile;return(0,o.jsxs)(E.D,{width:"100%",gap:m?0:24,children:[(0,o.jsxs)("div",{className:c("dumi-antd-style-content",i.content),children:[(0,o.jsx)($t.Z,{active:!0,paragraph:!0,loading:r}),(0,o.jsx)("div",{style:{display:r?"none":void 0},children:t})]}),(0,o.jsx)(on,{})]})},sn=(0,a.memo)(ln),cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z"}}]},name:"medium",theme:"outlined"},un=cn,dn=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:un}))},fn=a.forwardRef(dn),mn=fn,hn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},vn=hn,pn=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:vn}))},gn=a.forwardRef(pn),xn=gn,yn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},bn=yn,jn=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:bn}))},Sn=a.forwardRef(jn),Ue=Sn,wn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},On=wn,Tn=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:On}))},Mn=a.forwardRef(Tn),En=Mn,kn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"},Cn=kn,Dn=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:Cn}))},Hn=a.forwardRef(Dn),Ln=Hn,In={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z"}}]},name:"issues-close",theme:"outlined"},Nn=In,An=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:Nn}))},Zn=a.forwardRef(An),zn=Zn,Bn=s(11127),Xe=function(){var n=[{title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},{title:"\u793E\u533A",items:[{icon:(0,o.jsx)(mn,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(xn,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(Ue,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(Ue,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},{title:"\u5E2E\u52A9",items:[{icon:(0,o.jsx)(En,{}),title:"GitHub",url:"https://github.com/h7ml/hooks.git",openExternal:!0},{icon:(0,o.jsx)(Ln,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog"},{icon:(0,o.jsx)(zn,{}),title:"\u8BA8\u8BBA",url:"https://github.com/h7ml/hooks/issues",openExternal:!0}]},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]}],e=new Date().getFullYear();return(0,o.jsx)(Bn.Z,{bottom:(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:"/sitemap.xml",target:"_blank",children:"\u7AD9\u70B9\u5730\u56FE"})," ","|\xA9 ",e," h7ml Company. All rights reserved."]}),columns:n})},ie=s(17789),We=s(6816),Fn=s(19989);function ge(n){var e=n.pathname,t=n.current,r=n.target,l="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(l).replace(/([^/])\/$/,"$1"):"".concat(l).concat(r.suffix)}var Pn={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},Ge={"zh-CN":"\u4E2D","en-US":"EN"},Rn=function(e){var t=e.locale,r=e.current,l=(0,u.TH)(),i=l.pathname,c=(0,a.useState)(function(){return ge({pathname:i,current:r,target:t})}),d=(0,ie.Z)(c,2),m=d[0],v=d[1];return(0,a.useEffect)(function(){v(ge({pathname:i,current:r,target:t}))},[i,r.id,t.id]),(0,o.jsx)(u.rU,{to:m,children:(0,o.jsx)(We.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:Ge[t.id]})})},Vn=function(){var e=(0,h.HX)(function(r){return r.siteData.locales}),t=(0,h.HX)(function(r){return r.locale});return e.length<=1?null:e.length>2?(0,o.jsx)(Fn.Z,{value:e.findIndex(function(r){return r.id===t.id}),onChange:function(l){console.log(ge({pathname:location.pathname,current:t,target:e[l]})),u.m8.push(ge({pathname:location.pathname,current:t,target:e[l]}))},options:e.map(function(r){return{value:r.id,label:Ge[r.id]}}),renderItem:function(l,i){return"".concat(Pn[e[i].id]," ").concat(e[i].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,o.jsx)(Rn,{locale:e.find(function(r){var l=r.id;return l!==t.id}),current:t})},Un=(0,a.memo)(Vn);function xe(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;if(n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(const[r,l]of n)if(!Object.is(l,e.get(r)))return!1;return!0}if(n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(const r of n)if(!e.has(r))return!1;return!0}const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(const r of t)if(!Object.prototype.hasOwnProperty.call(e,r)||!Object.is(n[r],e[r]))return!1;return!0}var To=(n,e)=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`."),xe(n,e)),Ye=s(36721),$e,Xn=(0,F.kc)(function(n){var e=n.css,t=n.responsive,r=n.token;return e($e||($e=(0,x.Z)([`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,`;
    color: `,`;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;

    `,` {
      font-size: 18px;
    }
  `])),r.fontFamily,r.colorText,t.mobile)}),Wn=function(){var e=(0,h.HX)(function(f){return f.siteData.themeConfig},b()),t=(0,h.HX)(function(f){return f.locale},b()),r=(0,h.HX)(Ye.b8.logo,xe),l=Xn(),i=l.styles,c=l.cx,d=e.name,m=e.hideNameOnHeader,v=m===void 0?!1:m;return e&&(0,o.jsxs)(u.rU,{className:c(i),to:"base"in t?t.base:"/",children:[!!r&&(0,o.jsx)("img",{src:r,alt:e.name,height:32}),!v&&d]})},Ke=(0,a.memo)(Wn),Gn=s(26860),Yn=function(){return a.createElement(a.Fragment,null)},$n=Yn,Qe,Je,Kn=(0,F.kc)(function(n){var e=n.css,t=n.responsive,r=n.token,l=n.stylish,i=n.prefixCls,c=".".concat(i,"-tabs"),d=16,m=6;return{tabs:e(Qe||(Qe=(0,x.Z)([`
      `,"-tab + ",`-tab {
        margin: `,`px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin: `,"px 4px ",`px 0;
          padding: `,`px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: `,`px;
        }
      }

      `,`-nav {
        margin-bottom: 0;
      }

      `,` {
        display: none;
      }
    `])),c,c,d,c,r.colorTextSecondary,d,d,m,r.colorText,r.colorFillTertiary,r.borderRadius,c,t.mobile),link:e(Je||(Je=(0,x.Z)([`
      `,`
    `])),l.resetLinkColor)}}),Qn=function(){var e=Kn(),t=e.styles,r=/^(\w+:)\/\/|^(mailto|tel):/,l=(0,h.HX)(function(c){return c.navData},xe),i=(0,h.HX)(ce.K1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Gn.Z,{onChange:function(d){var m,v=(m=l.find(function(f){return f.activePath===d||f.link===d}))===null||m===void 0?void 0:m.link;!v||r.test(v)||u.m8.push(v)},activeKey:i,className:t.tabs,items:l.map(function(c){return{label:r.test(c.link||"")?(0,o.jsx)("a",{href:c.link,className:t.link,target:"_blank",rel:"noreferrer",children:c.title}):(0,o.jsx)(u.rU,{className:t.link,to:c.link,children:c.title}),key:c.activePath||c.link}})}),(0,o.jsx)($n,{})]})},Jn=(0,a.memo)(Qn),qe=s(85799),qn=Object.defineProperty,_e=Object.getOwnPropertySymbols,_n=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,et=(n,e,t)=>e in n?qn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tr=(n,e)=>{for(var t in e||(e={}))_n.call(e,t)&&et(n,t,e[t]);if(_e)for(var t of _e(e))er.call(e,t)&&et(n,t,e[t]);return n};const tt=n=>a.createElement("svg",tr({viewBox:"0 0 1024 1024"},n),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var Mo="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",nr=function(n,e,t,r){function l(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function d(f){try{v(r.next(f))}catch(I){c(I)}}function m(f){try{v(r.throw(f))}catch(I){c(I)}}function v(f){f.done?i(f.value):l(f.value).then(d,m)}v((r=r.apply(n,e||[])).next())})};function ye(n){let e=0,t=0,r=n;do e+=r.offsetTop||0,t+=r.offsetLeft||0,r=r.offsetParent;while(r);return{top:e,left:t}}class rr{constructor(e){this.element=e}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(e,t){return ye(e).left-ye(t).left}getVerticalElementScrollOffset(e,t){return ye(e).top-ye(t).top}scrollTo(e,t){this.element.scrollLeft=e,this.element.scrollTop=t}}class or{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(e){return(window.scrollX||document.documentElement.scrollLeft)+e.getBoundingClientRect().left}getVerticalElementScrollOffset(e){return(window.scrollY||document.documentElement.scrollTop)+e.getBoundingClientRect().top}scrollTo(e,t){window.scrollTo(e,t)}}const G={elements:[],cancelMethods:[],add:(n,e)=>{G.elements.push(n),G.cancelMethods.push(e)},remove:(n,e)=>{const t=G.elements.indexOf(n);t>-1&&(e&&G.cancelMethods[t](),G.elements.splice(t,1),G.cancelMethods.splice(t,1))}},nt=typeof window!="undefined",ar={cancelOnUserAction:!0,easing:n=>--n*n*n+1,elementToScroll:nt?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function ir(n,e={}){return nr(this,void 0,void 0,function*(){if(nt){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(J=>{J(!1)});let t,r,l,i=Object.assign(Object.assign({},ar),e);const c=i.elementToScroll===window,d=!!i.elementToScroll.nodeName;if(!c&&!d)throw"Element to scroll needs to be either window or DOM element.";const m=c?document.documentElement:i.elementToScroll;getComputedStyle(m).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${m.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const f=c?new or:new rr(i.elementToScroll);if(n instanceof Element){if(l=n,d&&(!i.elementToScroll.contains(l)||i.elementToScroll.isSameNode(l)))throw"options.elementToScroll has to be a parent of scrollToElement";t=f.getHorizontalElementScrollOffset(l,i.elementToScroll),r=f.getVerticalElementScrollOffset(l,i.elementToScroll)}else if(typeof n=="number")t=f.getHorizontalScroll(),r=n;else if(Array.isArray(n)&&n.length===2)t=n[0]===null?f.getHorizontalScroll():n[0],r=n[1]===null?f.getVerticalScroll():n[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;t+=i.horizontalOffset,r+=i.verticalOffset;const I=f.getMaxHorizontalScroll(),j=f.getHorizontalScroll();t>I&&(t=I);const k=t-j,w=f.getMaxVerticalScroll(),C=f.getVerticalScroll();r>w&&(r=w);const N=r-C,z=Math.abs(Math.round(k/1e3*i.speed)),_=Math.abs(Math.round(N/1e3*i.speed));let Y=z>_?z:_;return Y<i.minDuration?Y=i.minDuration:Y>i.maxDuration&&(Y=i.maxDuration),new Promise((J,ue)=>{k===0&&N===0&&J(!0),G.remove(f.element,!0);let A;const ee=()=>{we(),cancelAnimationFrame(A),J(!1)};G.add(f.element,ee);const X=P=>P.preventDefault(),te=i.cancelOnUserAction?ee:X,je=i.cancelOnUserAction?{passive:!0}:{passive:!1},Se=["wheel","touchstart","keydown","mousedown"],we=()=>{Se.forEach(P=>{f.element.removeEventListener(P,te,je)})};Se.forEach(P=>{f.element.addEventListener(P,te,je)});const Le=Date.now(),Oe=()=>{var P=Date.now()-Le,zt=P/Y;const Bt=Math.round(j+k*i.easing(zt)),Ft=Math.round(C+N*i.easing(zt));P<Y&&(Bt!==t||Ft!==r)?(f.scrollTo(Bt,Ft),A=requestAnimationFrame(Oe)):(f.scrollTo(t,r),cancelAnimationFrame(A),we(),G.remove(f.element,!1),J(!0))};A=requestAnimationFrame(Oe)})})}var lr=ir;function Ce(n,e){return dr(n)||ur(n,e)||cr(n,e)||sr()}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(n,e){if(n){if(typeof n=="string")return rt(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rt(n,e)}}function rt(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ur(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,l,i,c,d=[],m=!0,v=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;m=!1}else for(;!(m=(r=i.call(t)).done)&&(d.push(r.value),d.length!==e);m=!0);}catch(f){v=!0,l=f}finally{try{if(!m&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(v)throw l}}return d}}function dr(n){if(Array.isArray(n))return n}var fr=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),a.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),a.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},mr=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},hr=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},vr=function(){return a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},pr={title:fr,page:mr,content:hr,demo:vr},ot=function(e){return a.createElement(a.Fragment,null,e.texts.map(function(t,r){return a.createElement(a.Fragment,{key:r},t.highlighted?a.createElement("mark",null,t.text):t.text)}))},gr=function(e){var t=(0,a.useCallback)(function(){var d=0,m=[];return e.forEach(function(v){v.title&&m.push({type:"title",value:{title:v.title}}),v.hints.forEach(function(f){m.push({type:"hint",activeIndex:d++,value:f})})}),[m,d]},[e]),r=(0,a.useState)(t),l=Ce(r,2),i=l[0],c=l[1];return(0,a.useEffect)(function(){c(t)},[e]),i},xr=function(e){var t=gr(e.data),r=Ce(t,2),l=r[0],i=r[1],c=(0,a.useState)(-1),d=Ce(c,2),m=d[0],v=d[1],f=(0,u.TH)(),I=f.pathname,j=function(C){var N;(N=e.onItemSelect)===null||N===void 0||N.call(e,C);var z=new URL(C==null?void 0:C.link,location.origin);(z==null?void 0:z.pathname)===I&&!z.hash&&setTimeout(function(){lr(0,{maxDuration:300})},1)};(0,a.useEffect)(function(){var w=function(N){if(N.key==="ArrowDown")v((m+1)%i);else if(N.key==="ArrowUp")v((m+i-1)%i);else if(N.key==="Enter"&&m>=0){var z=l.find(function(_){return _.type==="hint"&&_.activeIndex===m}).value;u.m8.push(z.link),j==null||j(z),document.activeElement.blur()}["Escape","Enter"].includes(N.key)&&v(-1)};return document.addEventListener("keydown",w),function(){return document.removeEventListener("keydown",w)}});var k=null;return e.loading?k=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(tt,null),a.createElement(u._H,{id:"search.loading"})):e.data.length?k=a.createElement("dl",null,l.map(function(w,C){return w.type==="title"?a.createElement("dt",{key:String(C)},w.value.title):a.createElement("dd",{key:String(C)},a.createElement(u.rU,{to:w.value.link,"data-active":m===w.activeIndex||void 0,onClick:function(){return j==null?void 0:j(w.value)}},a.createElement(pr[w.value.type]),a.createElement("h4",null,a.createElement(ot,{texts:w.value.highlightTitleTexts})),a.createElement("p",null,a.createElement(ot,{texts:w.value.highlightTexts}))))})):k=a.createElement("div",{className:"dumi-default-search-empty"},a.createElement(tt,null),a.createElement(u._H,{id:"search.not.found"})),a.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return v(-1)},onMouseDownCapture:function(C){return C.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},k)},at=xr,it=(0,a.forwardRef)(function(n,e){var t=(0,u.YB)(),r=(0,a.useRef)(!1),l=(0,a.useRef)(null);return(0,a.useImperativeHandle)(e,function(){return l.current}),(0,o.jsx)("input",{className:n.className,onCompositionStart:function(){return r.current=!0},onCompositionEnd:function(c){r.current=!1,n.onChange(c.currentTarget.value)},onFocus:n.onFocus,onBlur:n.onBlur,onKeyDown:function(c){["ArrowDown","ArrowUp"].includes(c.key)&&c.preventDefault(),c.key==="Escape"&&!r.current&&c.currentTarget.blur()},onChange:function(c){setTimeout(function(){r.current||n.onChange(c.target.value)},1)},placeholder:t.formatMessage({id:"header.search.placeholder"}),ref:l})}),lt,st,ct,yr=(0,F.kc)(function(n){var e=n.token,t=n.css;return{modal:t(lt||(lt=(0,x.Z)([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:t(st||(st=(0,x.Z)([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),e.colorBgMask),content:t(ct||(ct=(0,x.Z)([`
      position: absolute;
      top: 60px;
      background-color: `,`;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `])),e.colorBgElevated)}}),br=function(e){var t=yr(),r=t.styles;return(0,a.useEffect)(function(){if(e.visible)document.body.style.overflow="hidden";else{var l;document.body.style.overflow="",(l=e.onClose)===null||l===void 0||l.call(e)}},[e.visible]),e.visible?(0,o.jsxs)("div",{className:r.modal,children:[(0,o.jsx)("div",{className:r.mask,onClick:e.onMaskClick}),(0,o.jsx)("div",{className:r.content,children:e.children})]}):null},ut,dt,ft,mt,ht,jr=(0,F.kc)(function(n){var e=n.token,t=n.responsive,r=n.css,l=n.cx;return{container:r(ut||(ut=(0,x.Z)([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),shortcut:l("site-header-shortcut",r(dt||(dt=(0,x.Z)([`
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,`;
        border-radius: 11px;
        border: 1px solid `,`;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,` {
          display: none;
        }
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),popover:r(ft||(ft=(0,x.Z)([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,`;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `])),e.colorBgElevated),svg:l(r(mt||(mt=(0,x.Z)([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),e.colorTextPlaceholder)),input:r(ht||(ht=(0,x.Z)([`
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,`;
      font-size: 14px;
      border: 1px solid `,`;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,`;
        background: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,`;
      }
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorBgElevated,e.colorTextPlaceholder)}}),De,vt=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(De=navigator)===null||De===void 0?void 0:De.platform:""),Sr=function(e){return["TEXTAREA","INPUT"].includes(e.tagName)||e.contentEditable==="true"},wr=function(){var e=jr(),t=e.styles,r=(0,a.useState)(!1),l=(0,ie.Z)(r,2),i=l[0],c=l[1],d=(0,a.useRef)(null),m=(0,a.useRef)(null),v=(0,a.useState)("\u2318"),f=(0,ie.Z)(v,2),I=f[0],j=f[1],k=(0,u.OO)(),w=k.keywords,C=k.setKeywords,N=k.result,z=k.loading,_=(0,a.useState)(!1),Y=(0,ie.Z)(_,2),J=Y[0],ue=Y[1];return(0,a.useEffect)(function(){vt||j("Ctrl");var A=function(X){if(((vt?X.metaKey:X.ctrlKey)&&X.key==="k"||X.key==="/"&&!Sr(X.target))&&(X.preventDefault(),d.current)){var te=d.current.getBoundingClientRect(),je=te.top,Se=te.bottom,we=te.left,Le=te.right,Oe=je>=0&&we>=0&&Se<=window.innerHeight&&Le<=window.innerWidth;Oe?d.current.focus():(C(""),ue(!0),setTimeout(function(){var P;(P=m.current)===null||P===void 0||P.focus()}))}X.key==="Escape"&&(X.preventDefault(),ue(!1))};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[]),(0,o.jsxs)("div",{className:t.container,children:[(0,o.jsx)(qe.Z,{className:t.svg}),(0,o.jsx)(it,{onFocus:function(){return c(!0)},onBlur:function(){setTimeout(function(){c(!1)},1)},onChange:function(ee){return C(ee)},ref:d,className:t.input}),(0,o.jsxs)("span",{className:t.shortcut,children:[I," K"]}),w.trim()&&i&&(N.length||!z)&&!J&&(0,o.jsx)("div",{className:t.popover,children:(0,o.jsx)("section",{children:(0,o.jsx)(at,{data:N,loading:z})})}),(0,o.jsxs)(br,{visible:J,onMaskClick:function(){ue(!1)},onClose:function(){return C("")},children:[(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(qe.Z,{className:t.svg}),(0,o.jsx)(it,{className:t.input,onFocus:function(){return c(!0)},onBlur:function(){setTimeout(function(){c(!1)},1)},onChange:function(ee){return C(ee)},ref:m})]}),(0,o.jsx)(at,{data:N,loading:z,onItemSelect:function(){ue(!1)}})]})]})},Or=wr,Tr=s(32065),Mr=s(77486),Er=s(32699),be=s(66494),pt,gt,xt,yt,bt,jt,St,kr=(0,F.kc)(function(n){var e=n.token,t=n.prefixCls,r=n.cx,l=n.css,i=6;return{rect:l(pt||(pt=(0,x.Z)([`
      background: `,`;

      width: 100%;
    `])),(0,be.m4)(e.colorBgContainer,.8)),icon:r("site-burger-icon",l(gt||(gt=(0,x.Z)([`
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,`;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,`px;
        }

        &::after {
          top: -`,`px;
        }
      `])),e.colorTextSecondary,i,i)),active:l(xt||(xt=(0,x.Z)([`
      &::before,
      &::after {
        background: `,`;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `])),e.colorText),container:l(yt||(yt=(0,x.Z)([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),e.controlHeight,e.controlHeight,e.borderRadius),drawerRoot:l(bt||(bt=(0,x.Z)([`
      top: `,`px;

      :focus-visible {
        outline: none;
      }

      .`,`-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,`;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `])),e.headerHeight+1,t,(0,be.m4)(e.colorBgBase,.5)),drawer:l(jt||(jt=(0,x.Z)([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),t,t),menu:l(St||(St=(0,x.Z)([`
      background: transparent;
      border-inline-end: transparent !important;

      > .`,"-menu-item-only-child,.",`-menu-submenu-title {
        background: `,`;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,`px;
        }
      }

      .`,"-menu-sub.",`-menu-inline {
        //background: transparent !important;
        background: `,` !important;
      }
    `])),t,t,(0,be.m4)(e.colorBgContainer,.8),e.borderRadius,t,t,(0,be.m4)(e.colorBgContainer,.2))}}),Cr=function(){var e=(0,a.useState)(!1),t=(0,ie.Z)(e,2),r=t[0],l=t[1],i=kr(),c=i.styles,d=i.cx,m=(0,h.HX)(function(j){return j.navData},b()),v=(0,h.HX)(function(j){return j.sidebar},b()),f=(0,h.HX)(ce.K1),I=(0,h.HX)(function(j){return j.location.pathname});return(0,o.jsxs)(ke.Z,{className:c.container,onClick:function(){l(!r)},children:[(0,o.jsx)("div",{className:d(c.icon,r?c.active:"")}),(0,o.jsxs)(Tr.Z,{open:r,placement:"left",closeIcon:null,rootClassName:c.drawerRoot,className:c.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,o.jsx)("div",{style:{height:24},className:c.rect}),(0,o.jsx)(Mr.Z,{mode:"inline",selectedKeys:(0,Er.uniq)([f,"s-".concat(I)]),openKeys:[f],className:c.menu,items:m.map(function(j){return{label:(0,o.jsx)(u.rU,{to:j.link,children:j.title}),key:j.activePath||j.link,children:(j.activePath||j.link)===f&&(v==null?void 0:v.map(function(k){return!k.link&&{label:k.title,type:"group",children:k.children.map(function(w){return{label:(0,o.jsx)(u.rU,{to:w.link,onClick:function(){l(!1)},children:w.title}),key:"s-".concat(w.link)}})}}))}})}),(0,o.jsx)("div",{style:{flex:1},className:c.rect})]})]})},Dr=Cr,Hr=s(3871),Lr=s(97098),He=s(67371),Ir=function(){var e=(0,h.HX)(He.BB);return e?(0,o.jsx)(Lr.Z,{arrow:!1,title:"Github",children:(0,o.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,o.jsx)(We.ZP,{icon:(0,o.jsx)(Hr.Z,{})})})}):null},Nr=(0,a.memo)(Ir),Ar=s(35115),wt=s(23060),Ot,Tt,Mt,Et,Zr=(0,F.kc)(function(n){var e=n.css,t=n.responsive,r=n.token;return{header:e(Ot||(Ot=(0,x.Z)([`
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,`;
    border-bottom: 1px solid `,`;

    grid-area: head;
    align-self: stretch;

    `,` {
      background: `,`;
    }
  `])),r.zIndexPopupBase-50,r.colorSplit,t.mobile,r.colorBgContainer),content:e(Tt||(Tt=(0,x.Z)([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),t.mobile),left:e(Mt||(Mt=(0,x.Z)([""]))),right:e(Et||(Et=(0,x.Z)([`
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,`;
      }
    }
  `])),t.mobile,r.colorBorder)}}),kt=function(){var e=(0,h.HX)(function(c){return c.siteData.themeConfig.prefersColor.switch}),t=(0,wt.f)(function(c){return c.themeMode}),r=(0,u.OI)(),l=(0,ie.Z)(r,3),i=l[2];return(0,a.useEffect)(function(){return i(t)},[t]),e?(0,o.jsx)(Ar.Z,{value:t,onChange:function(d){wt.f.setState({themeMode:d})}}):null},zr=function(){var e=(0,h.HX)(function(c){return!!c.routeMeta.frontmatter}),t=(0,pe.F)(),r=t.mobile,l=Zr(),i=l.styles;return e?(0,o.jsx)("div",{className:i.header,children:(0,o.jsx)(E.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:i.content,children:r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.D,{children:(0,o.jsx)(Dr,{})}),(0,o.jsx)(E.D,{horizontal:!0,className:i.left,children:(0,o.jsx)(Ke,{})}),(0,o.jsx)(E.D,{children:(0,o.jsx)(kt,{})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.D,{horizontal:!0,className:i.left,children:(0,o.jsx)(Ke,{})}),(0,o.jsx)(E.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,o.jsx)(Jn,{})}),(0,o.jsxs)("section",{className:i.right,children:[(0,o.jsx)("div",{}),(0,o.jsxs)(E.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,o.jsx)(Or,{}),(0,o.jsx)(Un,{}),(0,o.jsx)(Nr,{}),(0,o.jsx)(kt,{})]})]})]})})}):null},Ct=(0,a.memo)(zr),Dt,Br=(0,F.kc)(function(n){var e=n.css,t=n.token;return{sidebar:e(Dt||(Dt=(0,x.Z)([`
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: `,`px;
    max-height: calc(100vh - `,`px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid `,`;

    > dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        margin: 8px 0;
        color: `,`;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          padding: 6px 12px;
          border-radius: 6px;
          display: block;
          font-size: `,`px;
          line-height: `,`;
          text-decoration: none;
          transition: all 0.1s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          color: `,`;

          &:hover {
            color: `,`;
            background: `,`;
          }

          &.active {
            color: `,`;
            background: `,`;

            &:hover {
              color: `,`;
              background: `,`;
            }
          }
        }
      }

      // divider line & gap
      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,`;
      }
    }
  `])),t.headerHeight,t.headerHeight,t.colorSplit,t.colorText,t.fontSize,t.lineHeight,t.colorTextSecondary,t.colorText,t.colorFillTertiary,t.colorPrimaryText,t.colorPrimaryBg,t.colorPrimaryTextHover,t.colorPrimaryBgHover,t.colorBorder)}}),Fr=function(){var e=(0,h.HX)(function(i){return i.sidebar},b()),t=Br(),r=t.styles,l=!e||e.length===0;return l?null:(0,o.jsx)("div",{className:r.sidebar,children:e.map(function(i,c){return(0,o.jsxs)("dl",{children:[i.title&&(0,o.jsx)("dt",{children:i.title}),i.children.map(function(d){return(0,o.jsx)("dd",{children:(0,o.jsx)(u.OL,{to:d.link,title:d.title,end:!0,children:d.title})},d.link)})]},String(c))})})},Pr=(0,a.memo)(Fr),Rr=s(41958),Vr=(0,a.memo)(function(){var n=(0,h.HX)(ce.TL,b());return(0,o.jsx)(Rr.Z,{items:n})}),Ur=Vr,Xr=s(26068),Wr=s.n(Xr),Gr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},Yr=Gr,$r=function(e,t){return a.createElement(K.Z,(0,$.Z)({},e,{ref:t,icon:Yr}))},Kr=a.forwardRef($r),Qr=Kr,Jr=s(48283),qr=(0,a.memo)(function(){var n=(0,h.HX)(Ye.b8.apiHeader),e=n.pkg,t=[{label:"icon",icon:(0,o.jsx)(Qr,{}),children:"demo",url:"https://www.npmjs.com/package/".concat(e)}];return(0,o.jsx)(Jr.$,Wr()({serviceList:t},n))}),_r=qr,eo=s(71991),Ht,Lt,It,to=(0,F.kc)(function(n,e){var t=n.css,r=n.cx,l=n.responsive,i=n.token,c=e.hideToc,d=e.hideSidebar;return{layout:t(Ht||(Ht=(0,x.Z)([`
      background-color: `,`;
      background-image: linear-gradient(
        180deg,
        `,` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,"px 1fr ",`;
      grid-template-rows: `,`px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`," title ",`'
        '`," main ",`'
        '`,` footer footer';
      min-height: 100vh;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),i.colorBgLayout,i.colorBgContainer,i.sidebarWidth,c?"":"".concat(i.tocWidth+24,"px"),i.headerHeight,d?"title":"sidebar",c?"title":".",d?"main":"sidebar",c?"main":"toc",d?"footer":"sidebar",l.mobile),toc:t(Lt||(Lt=(0,x.Z)([`
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),i.tocWidth,l.mobile,i.headerHeight+1,i.colorTextDescription),content:r(t(It||(It=(0,x.Z)([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),t(l({desktop:{maxWidth:i.contentMaxWidth},mobile:{margin:0}})))}}),no=(0,a.memo)(function(){var n=(0,u.pC)(),e=(0,pe.F)(),t=e.mobile,r=(0,h.HX)(function(j){return j.routeMeta.frontmatter},b()),l=(0,h.HX)(eo.Y),i=(0,h.HX)(He.TG),c=(0,h.HX)(function(j){return(0,ce.TL)(j).length===0}),d=r.sidebar===!1,m=r.toc===!1||c,v=to({hideToc:m,hideSidebar:d}),f=v.styles,I=v.theme;return(0,o.jsxs)("div",{className:f.layout,children:[(0,o.jsx)(u.ql,{children:r.title&&(0,o.jsxs)("title",{children:[r.title," - ",i]})}),(0,o.jsx)(Ct,{}),m?null:(0,o.jsx)(Ur,{}),t||d?null:(0,o.jsx)(Pr,{}),l?(0,o.jsx)(E.D,{style:{gridArea:"title",paddingBlock:t?24:void 0},children:(0,o.jsx)(ke.Z,{children:(0,o.jsx)(E.D,{style:{maxWidth:I.contentMaxWidth,width:"100%"},children:(0,o.jsx)(E.D,{style:{paddingBlock:0,paddingInline:t?16:48},children:(0,o.jsx)(_r,{})})})})}):null,(0,o.jsx)(E.D,{style:{zIndex:10,gridArea:"main",margin:t?0:24,marginBottom:t?0:48},children:(0,o.jsx)(ke.Z,{width:"100%",children:(0,o.jsx)(E.D,{className:f.content,children:(0,o.jsx)(E.D,{horizontal:!0,children:(0,o.jsx)(sn,{children:n})})})})}),(0,o.jsx)(Xe,{})]})}),ro=no,oo=s(69556),Nt=function(e){return!!e.routeMeta.frontmatter.hero},ao=function(e){var t,r;return!!((t=e.routeMeta.frontmatter.hero)!==null&&t!==void 0&&t.showCustomContent)||!!((r=e.siteData.themeConfig.hero)!==null&&r!==void 0&&r.showCustomContent)},Q=function(e,t){if(t)return t[e.locale.id]?t[e.locale.id]:t},io=function(e){var t,r;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.title)||((r=Q(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.title)||Q(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},lo=function(e){var t,r;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.description)||((r=Q(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.description)||Q(e,e.siteData.themeConfig.description)},so=function(e){var t,r;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.actions)||((r=Q(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.actions)||Q(e,e.siteData.themeConfig.actions)},co=function(e){var t;return Nt(e)?((t=Q(e,e.siteData.themeConfig.hero))===null||t===void 0?void 0:t.features)||Q(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},uo=function(){var e=(0,h.HX)(co,xe);return e!=null&&e.length?(0,o.jsx)(oo.Z,{items:e,style:{margin:"0 16px"}}):null},fo=uo,mo=s(22252),ho=function(){var e=(0,h.HX)(io),t=(0,h.HX)(lo),r=(0,h.HX)(so);return(0,o.jsx)(mo.Z,{title:e,actions:r,description:t})},vo=ho,At,po=(0,F.kc)(function(n){var e=n.token,t=n.prefixCls,r=n.css,l=n.cx,i="".concat(t,"-home-contents");return{container:l(i,r(At||(At=(0,x.Z)([`
        width: 100%;
        max-width: `,`px;
        padding: 0 16px;
        box-sizing: border-box;
      `])),e.contentMaxWidth))}}),go=(0,a.memo)(function(){var n=(0,h.HX)(He.TG),e=(0,u.pC)(),t=(0,h.HX)(ao),r=po(),l=r.styles;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.ql,{children:(0,o.jsx)("title",{children:n})}),(0,o.jsxs)(E.D,{align:"center",gap:80,children:[(0,o.jsx)(Ct,{}),(0,o.jsx)(vo,{}),(0,o.jsx)(fo,{}),t&&(0,o.jsx)("div",{className:l.container,children:e}),(0,o.jsx)(Xe,{})]})]})}),xo=go,yo=s(62264),Zt,bo=(0,F.vJ)(Zt||(Zt=(0,x.Z)([`
  body {
    margin: 0;
    padding: 0;
    background-color: `,`;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,`; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`])),function(n){return n.theme.colorBgLayout},function(n){var e=n.theme;return e.colorFill}),jo=(0,a.memo)(function(){var n=(0,u.YB)(),e=(0,u.TH)(),t=e.hash,r=(0,h.HX)(function(c){return c.routeMeta.frontmatter}),l=(0,h.HX)(Nt),i=(0,h.HX)(function(c){return c.siteData.loading});return(0,a.useEffect)(function(){var c=t.replace("#","");c&&setTimeout(function(){var d=document.getElementById(decodeURIComponent(c));d&&(d.scrollIntoView(),window.scrollBy({top:-80}))},1)},[i,t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.ql,{children:[(0,o.jsx)("html",{lang:n.locale.replace(/-.+$/,"")}),r.title&&(0,o.jsx)("meta",{property:"og:title",content:r.title}),r.description&&(0,o.jsx)("meta",{name:"description",content:r.description}),r.description&&(0,o.jsx)("meta",{property:"og:description",content:r.description}),r.keywords&&(0,o.jsx)("meta",{name:"keywords",content:r.keywords.join(",")}),r.keywords&&(0,o.jsx)("meta",{property:"og:keywords",content:r.keywords.join(",")})]}),l?(0,o.jsx)(xo,{}):(0,o.jsx)(ro,{})]})});s.g.__ANTD_CACHE__=p.Y.cache;var So=function(e){var t=e.children,r=(0,h.HX)(yo.H,b());return(0,o.jsx)(Z.Z,{cache:p.Y.cache,token:r,children:t})},wo=(0,a.memo)(function(n){var e=n.initState;return(0,o.jsxs)(h.zt,{createStore:function(){return(0,h.MT)(e)},children:[(0,o.jsx)(Yt,{}),(0,o.jsxs)(So,{children:[(0,o.jsx)(bo,{}),(0,o.jsx)(jo,{})]})]})}),Oo=function(){var n=(0,u.WF)(),e=(0,u.tx)(),t=(0,u.eL)(),r=(0,u.zh)(),l=(0,u.OK)(),i=(0,u.TH)(),c=(0,u.bU)(),d=(0,a.useMemo)(function(){return{siteData:n,navData:l,locale:c,location:i,routeMeta:t,tabMeta:r,sidebar:e}},[]);return(0,o.jsx)(wo,{initState:d})}},74396:function(y,S,s){var p=s(29165),u=p.Symbol;y.exports=u},80732:function(y,S,s){var p=s(74396),u=s(31239),T=s(57058),b="[object Null]",a="[object Undefined]",Z=p?p.toStringTag:void 0;function D(M){return M==null?M===void 0?a:b:Z&&Z in Object(M)?u(M):T(M)}y.exports=D},33124:function(y,S,s){var p=s(82996),u=/^\s+/;function T(b){return b&&b.slice(0,p(b)+1).replace(u,"")}y.exports=T},96476:function(y,S,s){var p=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;y.exports=p},31239:function(y,S,s){var p=s(74396),u=Object.prototype,T=u.hasOwnProperty,b=u.toString,a=p?p.toStringTag:void 0;function Z(D){var M=T.call(D,a),L=D[a];try{D[a]=void 0;var g=!0}catch(R){}var H=b.call(D);return g&&(M?D[a]=L:delete D[a]),H}y.exports=Z},57058:function(y){var S=Object.prototype,s=S.toString;function p(u){return s.call(u)}y.exports=p},29165:function(y,S,s){var p=s(96476),u=typeof self=="object"&&self&&self.Object===Object&&self,T=p||u||Function("return this")();y.exports=T},82996:function(y){var S=/\s/;function s(p){for(var u=p.length;u--&&S.test(p.charAt(u)););return u}y.exports=s},66292:function(y,S,s){var p=s(36838),u=s(76668),T=s(12448),b="Expected a function",a=Math.max,Z=Math.min;function D(M,L,g){var H,R,ne,W,B,V,re=0,Te=!1,oe=!1,de=!0;if(typeof M!="function")throw new TypeError(b);L=T(L)||0,p(g)&&(Te=!!g.leading,oe="maxWait"in g,ne=oe?a(T(g.maxWait)||0,L):ne,de="trailing"in g?!!g.trailing:de);function le(O){var U=H,h=R;return H=R=void 0,re=O,W=M.apply(h,U),W}function fe(O){return re=O,B=setTimeout(ae,L),Te?le(O):W}function Me(O){var U=O-V,h=O-re,ve=L-U;return oe?Z(ve,ne-h):ve}function me(O){var U=O-V,h=O-re;return V===void 0||U>=L||U<0||oe&&h>=ne}function ae(){var O=u();if(me(O))return he(O);B=setTimeout(ae,Me(O))}function he(O){return B=void 0,de&&H?le(O):(H=R=void 0,W)}function Ee(){B!==void 0&&clearTimeout(B),re=0,H=V=R=B=void 0}function Ie(){return B===void 0?W:he(u())}function se(){var O=u(),U=me(O);if(H=arguments,R=this,V=O,U){if(B===void 0)return fe(V);if(oe)return clearTimeout(B),B=setTimeout(ae,L),le(V)}return B===void 0&&(B=setTimeout(ae,L)),W}return se.cancel=Ee,se.flush=Ie,se}y.exports=D},36838:function(y){function S(s){var p=typeof s;return s!=null&&(p=="object"||p=="function")}y.exports=S},55073:function(y){function S(s){return s!=null&&typeof s=="object"}y.exports=S},16764:function(y,S,s){var p=s(80732),u=s(55073),T="[object Symbol]";function b(a){return typeof a=="symbol"||u(a)&&p(a)==T}y.exports=b},76668:function(y,S,s){var p=s(29165),u=function(){return p.Date.now()};y.exports=u},12448:function(y,S,s){var p=s(33124),u=s(36838),T=s(16764),b=NaN,a=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,D=/^0o[0-7]+$/i,M=parseInt;function L(g){if(typeof g=="number")return g;if(T(g))return b;if(u(g)){var H=typeof g.valueOf=="function"?g.valueOf():g;g=u(H)?H+"":H}if(typeof g!="string")return g===0?g:+g;g=p(g);var R=Z.test(g);return R||D.test(g)?M(g.slice(2),R?2:8):a.test(g)?b:+g}y.exports=L}}]);
