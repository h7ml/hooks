"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[2583],{52373:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=(0,r.useState)(null),l=u()(n,2),m=l[0],_=l[1];return(0,r.useEffect)(function(){var d=function(c){var i=c.target;_(i)};return"getBattery"in navigator?navigator.getBattery().then(function(t){_(t),t.addEventListener("levelchange",d),t.addEventListener("chargingchange",d),t.addEventListener("dischargingtimechange",d),t.addEventListener("chargingtimechange",d)}):console.warn("Battery API is not supported in this browser."),function(){m&&(m.removeEventListener("levelchange",d),m.removeEventListener("chargingchange",d),m.removeEventListener("dischargingtimechange",d),m.removeEventListener("chargingtimechange",d))}},[]),m};a.Z=o},53561:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n,l){var m=(0,r.useState)(n),_=u()(m,2),d=_[0],t=_[1],c=n!==void 0;return(0,r.useEffect)(function(){t(c?n:l)},[n,l,c]),[d,c]};a.Z=o},35804:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=function(v){var E,D="; ".concat(document.cookie),O=D.split("; ".concat(v,"="));if(O.length===2)return(E=O.pop())===null||E===void 0?void 0:E.split(";").shift()},m=(0,r.useState)(l(n)),_=u()(m,2),d=_[0],t=_[1],c=(0,r.useCallback)(function(h){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=v.maxAge,D=v.expires,O=v.path,b=v.domain,T=v.secure,P="".concat(n,"=").concat(encodeURIComponent(h));E&&(P+="; max-age=".concat(E)),D&&(P+="; expires=".concat(D.toUTCString())),O&&(P+="; path=".concat(O)),b&&(P+="; domain=".concat(b)),T&&(P+="; secure"),document.cookie=P,t(h)},[n]),i=(0,r.useCallback)(function(){document.cookie="".concat(n,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),t(void 0)},[n]);return[d,c,i]};a.Z=o},36172:function(M,a,e){var s=e(48305),u=e.n(s),r=e(874),o=e.n(r),f=e(75271),n=e(83367),l=function(_){var d=(0,n.Z)(void 0),t=u()(d,2),c=t[0],i=t[1],h=(0,f.useCallback)(function(v){if(!v)return i(void 0);try{var E;o()(v.toString()),i(v.toString()),_==null||(E=_.onSuccess)===null||E===void 0||E.call(_,v.toString())}catch(O){var D;i(void 0),_==null||(D=_.onError)===null||D===void 0||D.call(_,O)}},[_]);return[c,h]};a.Z=l},26537:function(M,a,e){e.r(a),e.d(a,{getHMSTime:function(){return n}});var s=e(48305),u=e.n(s),r=e(6586),o=e(75271),f=function(_){return"".concat(_).length<2?"0".concat(_):"".concat(_)},n=function(_){if(_<=0)return["00","00","00"];if(_>100*3600)return["99","59","59"];var d=Math.floor(_/3600),t=Math.floor((_-d*3600)/60),c=_-d*3600-t*60;return[f(d),f(t),f(c)]},l=function(_){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,t=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=(0,o.useState)(_),h=u()(i,2),v=h[0],E=h[1],D=(0,o.useState)(c?1e3:null),O=u()(D,2),b=O[0],T=O[1];(0,r.Z)(function(){if(v<=0){T(null);return}E(v-1)},b),(0,o.useEffect)(function(){_>0&&v<=0&&t&&t()},[t,v,_]);var P=d(v),g=u()(P,3),L=g[0],A=g[1],k=g[2];return[L,A,k]};a.default=l},97991:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=(0,r.useState)(n),m=u()(l,2),_=m[0],d=m[1],t=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;d(function(E){return E+v})},c=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;d(function(E){return E-v})},i=function(){d(n)};return{count:_,increment:t,decrement:c,reset:i}};a.Z=o},69033:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=(0,r.useState)(0),_=u()(m,2),d=_[0],t=_[1],c=(0,r.useCallback)(function(){t(function(v){return l?(v+1)%n.length:Math.min(v+1,n.length-1)})},[n.length,l]),i=(0,r.useCallback)(function(){t(function(v){return l?(v-1+n.length)%n.length:Math.max(v-1,0)})},[n.length,l]),h=n[d];return[h,c,i]};a.Z=o},12233:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n,l){var m=(0,r.useState)(n),_=u()(m,2),d=_[0],t=_[1];return(0,r.useEffect)(function(){var c=setTimeout(function(){t(n)},l);return function(){return clearTimeout(c)}},[n,l]),d};a.Z=o},633:function(M,a,e){var s=e(75271),u=function(o,f){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,l=(0,s.useRef)();(0,s.useEffect)(function(){l.current=f},[f]),(0,s.useEffect)(function(){var m=n&&n.addEventListener;if(m){var _=function(t){l.current&&l.current(t)};return n.addEventListener(o,_),function(){n.removeEventListener(o,_)}}},[o,n])};a.Z=u},89922:function(M,a,e){var s=e(90228),u=e.n(s),r=e(87999),o=e.n(r),f=e(82846),n=e(75271),l=function(){var _=(0,n.useCallback)(function(){var d=o()(u()().mark(function t(c,i){var h,v,E,D;return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,fetch(c);case 3:if(h=b.sent,h.ok){b.next=6;break}throw new Error("\u4E0B\u8F7D\u6587\u4EF6\u65F6\u51FA\u9519");case 6:return b.next=8,h.blob();case 8:v=b.sent,E=URL.createObjectURL(v),D=document.createElement("a"),D.href=E,D.download=i||"downloaded_file",D.target="_blank",document.body.appendChild(D),D.click(),URL.revokeObjectURL(E),document.body.removeChild(D),f.ZP.success("\u6587\u4EF6\u4E0B\u8F7D\u6210\u529F"),b.next=25;break;case 21:b.prev=21,b.t0=b.catch(0),console.error("\u4E0B\u8F7D\u6587\u4EF6\u65F6\u51FA\u73B0\u9519\u8BEF\uFF1A",b.t0),f.ZP.error("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");case 25:case"end":return b.stop()}},t,null,[[0,21]])}));return function(t,c){return d.apply(this,arguments)}}(),[]);return{downloadFile:_}};a.Z=l},47704:function(M,a,e){var s=e(75271),u=function(){var o=(0,s.useRef)(!0);return(0,s.useEffect)(function(){o.current=!1},[]),o.current};a.Z=u},46961:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=(0,r.useState)({latitude:0,longitude:0,error:null}),l=u()(n,2),m=l[0],_=l[1];return(0,r.useEffect)(function(){var d=function(v){_({latitude:v.coords.latitude,longitude:v.coords.longitude,error:null})},t=function(){_({latitude:0,longitude:0,error:"Geolocation API is not supported in this browser."})},c={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},i=navigator.geolocation;i?i.getCurrentPosition(d,t,c):_({latitude:0,longitude:0,error:"Geolocation API is not supported in this browser."})},[]),m};a.Z=o},9826:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=(0,r.useState)(!1),m=u()(l,2),_=m[0],d=m[1],t=function(){d(!0)},c=function(){d(!1)};return(0,r.useEffect)(function(){var i=n.current;if(i)return i.addEventListener("mouseenter",t),i.addEventListener("mouseleave",c),function(){i.removeEventListener("mouseenter",t),i.removeEventListener("mouseleave",c)}},[n]),_};a.Z=o},75069:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=(0,r.useState)(!1),m=u()(l,2),_=m[0],d=m[1],t=(0,r.useRef)(!1),c=function(){t.current||(d(!0),t.current=!0)},i=function(){t.current&&(d(!1),t.current=!1)};return(0,r.useEffect)(function(){var h=n.current;if(h)return h.addEventListener("mouseover",c),h.addEventListener("mouseout",i),function(){h.removeEventListener("mouseover",c),h.removeEventListener("mouseout",i)}},[n]),_};a.Z=o},1349:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=(0,r.useState)(!1),m=u()(l,2),_=m[0],d=m[1];return(0,r.useEffect)(function(){var t,c=function(v){v.timeRemaining()>0&&d(!0)},i=function(){d(!1),t=requestIdleCallback(c,{timeout:n})};return t=requestIdleCallback(c,{timeout:n}),document.addEventListener("mousemove",i),document.addEventListener("keydown",i),document.addEventListener("visibilitychange",i),function(){document.removeEventListener("mousemove",i),document.removeEventListener("keydown",i),document.removeEventListener("visibilitychange",i),cancelIdleCallback(t)}},[n]),_};a.Z=o},6586:function(M,a,e){var s=e(75271),u=function(o,f){var n=(0,s.useRef)();(0,s.useEffect)(function(){n.current=o},[o]),(0,s.useEffect)(function(){var l=function(){n.current&&n.current()};if(f!==null){var m=setInterval(l,f);return function(){clearInterval(m)}}},[f])};a.Z=u},34299:function(M,a,e){var s=e(75271),u=function(o){var f=(0,s.useRef)(o);return f.current=o,f};a.Z=u},6248:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n,l){var m=function(){try{var D=localStorage.getItem(n);return D?JSON.parse(D):l}catch(O){return console.error('Error parsing localStorage item with key "'.concat(n,'":'),O),l}},_=(0,r.useState)(m),d=u()(_,2),t=d[0],c=d[1],i=(0,r.useCallback)(function(E){try{c(E),localStorage.setItem(n,JSON.stringify(E))}catch(D){console.error('Error setting localStorage item with key "'.concat(n,'":'),D)}},[n]),h=(0,r.useCallback)(function(){return m()},[]),v=(0,r.useCallback)(function(){try{c(l),localStorage.removeItem(n)}catch(E){console.error('Error deleting localStorage item with key "'.concat(n,'":'),E)}},[l,n]);return[t,i,h,v]};a.Z=o},13655:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=(0,r.useState)({latitude:null,longitude:null,error:null}),l=u()(n,2),m=l[0],_=l[1];return(0,r.useEffect)(function(){var d=function(v){_({latitude:v.coords.latitude,longitude:v.coords.longitude,error:null})},t=function(){_({latitude:null,longitude:null,error:"Error getting location data."})},c={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},i=navigator.geolocation;i?i.getCurrentPosition(d,t,c):_({latitude:null,longitude:null,error:"Geolocation API is not supported in this browser."})},[]),m};a.Z=o},99070:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=(0,r.useRef)(null),l=(0,r.useState)({width:0,height:0}),m=u()(l,2),_=m[0],d=m[1];return(0,r.useEffect)(function(){var t=function(){if(n.current){var i=n.current.getBoundingClientRect(),h=i.width,v=i.height;d({width:h,height:v})}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]),[n,_]};a.Z=o},66231:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=(0,r.useState)(!1),m=u()(l,2),_=m[0],d=m[1];return(0,r.useEffect)(function(){var t=window.matchMedia(n),c=function(h){d(h.matches)};return d(t.matches),t.addListener(c),function(){t.removeListener(c)}},[n]),_};a.Z=o},16263:function(M,a,e){var s=e(90228),u=e.n(s),r=e(87999),o=e.n(r),f=e(48305),n=e.n(f),l=e(75271),m=function(){var d=(0,l.useState)([]),t=n()(d,2),c=t[0],i=t[1];return(0,l.useEffect)(function(){var h=function(){var E=o()(u()().mark(function D(){var O,b;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.prev=0,P.next=3,navigator.mediaDevices.enumerateDevices();case 3:O=P.sent,b=O.map(function(g){return{deviceId:g.deviceId,kind:g.kind,label:g.label}}),i(b),P.next=12;break;case 8:P.prev=8,P.t0=P.catch(0),console.error("Error enumerating media devices:",P.t0),i([]);case 12:case"end":return P.stop()}},D,null,[[0,8]])}));return function(){return E.apply(this,arguments)}}();h();var v=function(){h()};return navigator.mediaDevices.addEventListener("devicechange",v),function(){navigator.mediaDevices.removeEventListener("devicechange",v)}},[]),c};a.Z=m},62480:function(M,a,e){var s=e(75271),u=function(o){(0,s.useEffect)(function(){o==null||o()},[])};a.Z=u},92926:function(M,a,e){var s=e(75271),u=function(){var o=(0,s.useRef)(!1);return(0,s.useEffect)(function(){return o.current=!0,function(){o.current=!1}},[]),function(){return o.current}};a.Z=u},60434:function(M,a,e){var s=e(26068),u=e.n(s),r=e(48305),o=e.n(r),f=e(31759),n=e.n(f),l=e(75271),m=function(){if(navigator&&(typeof navigator=="undefined"?"undefined":n()(navigator))==="object"){var t,c,i,h,v,E=navigator;return{rtt:(t=E.connection)===null||t===void 0?void 0:t.rtt,type:((c=E.connection)===null||c===void 0?void 0:c.type)||"unknown",saveData:(i=E.connection)===null||i===void 0?void 0:i.saveData,downlinkMax:((h=E.connection)===null||h===void 0?void 0:h.downlinkMax)||0,effectiveType:(v=E.connection)===null||v===void 0?void 0:v.effectiveType}}},_=function(){var t=m(),c=(0,l.useState)(u()({online:navigator.onLine},t)),i=o()(c,2),h=i[0],v=i[1];return(0,l.useEffect)(function(){var E=function(){v(function(b){return u()(u()({},b),{},{online:!0})})},D=function(){v(function(b){return u()(u()({},b),{},{online:!1})})};return window.addEventListener("online",E),window.addEventListener("offline",D),function(){window.removeEventListener("online",E),window.removeEventListener("offline",D)}},[]),h};a.Z=_},16336:function(M,a,e){var s=e(75271),u=function(o){var f=(0,s.useRef)(void 0),n=(0,s.useRef)(void 0);return(0,s.useEffect)(function(){f.current=n.current,n.current=o}),f.current};a.Z=u},35653:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n){var l=(0,r.useRef)(0),m=(0,r.useState)(n),_=u()(m,2),d=_[0],t=_[1],c=(0,r.useCallback)(function(i){cancelAnimationFrame(l.current),l.current=requestAnimationFrame(function(){t(i)})},[]);return[d,c]};a.Z=o},83367:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=e(9656);function f(n){var l=(0,o.Z)(),m=(0,r.useState)(n),_=u()(m,2),d=_[0],t=_[1],c=(0,r.useCallback)(function(i){l.current||t(i)},[]);return[d,c]}a.Z=f},13630:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n,l){var m=function(){try{var v=sessionStorage.getItem(n);return v?JSON.parse(v):l}catch(E){return console.error('Error parsing sessionStorage item with key "'.concat(n,'":'),E),l}},_=(0,r.useState)(m),d=u()(_,2),t=d[0],c=d[1],i=(0,r.useCallback)(function(h){try{c(h),sessionStorage.setItem(n,JSON.stringify(h))}catch(v){console.error('Error setting sessionStorage item with key "'.concat(n,'":'),v)}},[n]);return[t,i]};a.Z=o},59182:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(n,l){var m=(0,r.useState)(n),_=u()(m,2),d=_[0],t=_[1],c=(0,r.useRef)(null),i=(0,r.useRef)(n);return(0,r.useEffect)(function(){n!==i.current&&(i.current=n,c.current&&clearTimeout(c.current),c.current=setTimeout(function(){t(n)},l))},[n,l]),d};a.Z=o},16887:function(M,a,e){var s=e(48305),u=e.n(s),r=e(75271),o=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,l=(0,r.useState)(n),m=u()(l,2),_=m[0],d=m[1],t=(0,r.useCallback)(function(){d(function(c){return!c})},[]);return[_,t]};a.Z=o},10065:function(M,a,e){var s=e(75271),u=e(34299),r=function(f){var n=(0,u.Z)(f);(0,s.useEffect)(function(){return function(){n.current()}},[])};a.Z=r},9656:function(M,a,e){var s=e(75271),u=function(){var o=(0,s.useRef)(!1);return(0,s.useEffect)(function(){return o.current=!1,function(){o.current=!0}},[]),o};a.Z=u},28745:function(M,a,e){e.d(a,{Z:function(){return o}});var s=e(48305),u=e.n(s),r=e(75271);function o(f,n){var l=n.containerHeight,m=l===void 0?300:l,_=n.itemHeight,d=n.overscan,t=d===void 0?5:d,c=(0,r.useState)(0),i=u()(c,2),h=i[0],v=i[1],E=(0,r.useMemo)(function(){return f?typeof _=="number"?f.length*_:f.reduce(function(p,C,S){return p+_(S)},0):0},[f,_]),D=Math.ceil(m/(typeof _=="number"?_:0)),O=Math.max(0,Math.floor(h/(typeof _=="number"?_:0))-t),b=Math.min(f?f.length-1:0,O+D+2*t),T=(0,r.useMemo)(function(){return f?f.slice(O,b+1).map(function(p,C){return{data:p,index:O+C}}):[]},[f,O,b]),P=(0,r.useRef)(null),g=function(){P.current&&v(P.current.scrollTop)},L=function(C){if(P.current){var S=typeof _=="number"?_:_(C),R=C*S;P.current.scrollTop=R}},A={ref:P,onScroll:g,style:{height:"".concat(m,"px"),overflowY:"auto"}},k={style:{width:"100%",height:"".concat(E,"px"),marginTop:"".concat(O*(typeof _=="number"?_:0),"px")}};return{list:T,scrollTo:L,containerProps:A,wrapperProps:k}}},55606:function(M,a,e){e.r(a),e.d(a,{isYesterday:function(){return W.Z},useBattery:function(){return s.Z},useControlled:function(){return u.Z},useCookie:function(){return r.Z},useCopy:function(){return o.Z},useCountDown:function(){return f.default},useCounter:function(){return n.Z},useCycleList:function(){return l.Z},useDebounce:function(){return m.Z},useEvent:function(){return _.Z},useFileDownloader:function(){return d.Z},useFirstMountState:function(){return t.Z},useGeolocation:function(){return c.Z},useHover:function(){return i.Z},useHoverDirty:function(){return h.Z},useIdle:function(){return v.Z},useInterval:function(){return E.Z},useLatest:function(){return D.Z},useLocalStorage:function(){return O.Z},useLocation:function(){return b.Z},useMeasure:function(){return T.Z},useMedia:function(){return P.Z},useMediaDevices:function(){return g.Z},useMount:function(){return L.Z},useMountedState:function(){return A.Z},useNetwork:function(){return k.Z},usePrevious:function(){return p.Z},useRafState:function(){return C.Z},useSafeState:function(){return S.Z},useSessionStorage:function(){return R.Z},useThrottle:function(){return I.Z},useToggle:function(){return U.Z},useUnmount:function(){return B.Z},useUnmountedRef:function(){return y.Z},useVirtualList:function(){return K.Z}});var s=e(52373),u=e(53561),r=e(35804),o=e(36172),f=e(26537),n=e(97991),l=e(69033),m=e(12233),_=e(633),d=e(89922),t=e(47704),c=e(46961),i=e(9826),h=e(75069),v=e(1349),E=e(6586),D=e(34299),O=e(6248),b=e(13655),T=e(99070),P=e(66231),g=e(16263),L=e(62480),A=e(92926),k=e(60434),p=e(16336),C=e(35653),S=e(83367),R=e(13630),I=e(59182),U=e(16887),B=e(10065),y=e(9656),K=e(28745),W=e(65154)},65154:function(M,a,e){e.d(a,{Z:function(){return s}});function s(u){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,o=new Date;o.setDate(o.getDate()-r);var f=u?new Date(typeof u=="string"&&u.includes("-")?u.replace(/-/g,"/"):u):new Date;return["getFullYear","getMonth","getDate"].every(function(n){return o[n]()===f[n]()})}}}]);
