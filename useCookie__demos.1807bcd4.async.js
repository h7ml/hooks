"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[7295],{47303:function(A,r,e){e.r(r);var c=e(48305),d=e.n(c),k=e(35804),_=e(82846),u=e(92070),i=e(6816),E=e(75271),o=e(52676),m=function(){var P=(0,E.useState)(""),h=d()(P,2),a=h[0],v=h[1],D=(0,k.Z)(a),t=d()(D,3),n=t[0],C=t[1],M=t[2],O=function(){a&&n!==void 0?(C(n,{maxAge:3600}),_.ZP.success("Cookie updated successfully!")):_.ZP.error("Please enter a cookie name and value to update the cookie.")},f=function(){a?(M(),_.ZP.success("Cookie deleted successfully!")):_.ZP.error("Please enter a cookie name to delete the cookie.")};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{style:{width:240,marginRight:8},value:a,onChange:function(s){return v(s.target.value)},placeholder:"Enter Cookie Name"}),(0,o.jsx)(u.Z,{style:{width:240,marginRight:8},value:n||"",onChange:function(s){return C(s.target.value,{maxAge:3600})},placeholder:"Enter Cookie Value"}),(0,o.jsx)(i.ZP,{type:"primary",onClick:O,children:"Update Cookie"}),(0,o.jsx)(i.ZP,{onClick:f,children:"Delete Cookie"}),(0,o.jsxs)("div",{children:["Current Cookie Value: ",n||"N/A"]})]})};r.default=m}}]);
