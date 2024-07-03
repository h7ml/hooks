"use strict";(self.webpackChunk_dext7r_hooks=self.webpackChunk_dext7r_hooks||[]).push([[1232],{68822:function(o,t,e){e.r(t),e.d(t,{demos:function(){return m}});var n=e(90228),r=e.n(n),u=e(87999),l=e.n(u),s=e(75271),m={"src-utils-date-demo-demos":{component:s.memo(s.lazy(function(){return Promise.all([e.e(2336),e.e(2052),e.e(3482),e.e(2433)]).then(e.bind(e,34049))})),asset:{type:"BLOCK",id:"src-utils-date-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10485).Z},"@dext7r/hooks":{type:"NPM",value:"0.3.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@dext7r/hooks":e(55606),react:e(75271)},renderOpts:{compile:function(){var i=l()(r()().mark(function f(){var d,c=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2303).then(e.bind(e,92303));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,c));case 3:case"end":return a.stop()}},f)}));function h(){return i.apply(this,arguments)}return h}()}}}},90021:function(o,t,e){e.r(t),e.d(t,{demos:function(){return r}});var n=e(75271),r={}},42772:function(o,t,e){e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"Here's a detailed step-by-step explanation of the function:",paraId:0},{value:`Get the current date and store it in the curDate variable. Calculate the target date (defaulted to yesterday) by subtracting n days.
Create the tarDate variable to store the specified date based on the input date parameter. If no date parameter is provided, it defaults to the current date.
Create a string array called dateProperties containing the property names of the date object, including 'getFullYear', 'getMonth', and 'getDate'.
Use the .every function to iterate through each property name in the dateProperties array. For each property, store the corresponding property values of curDate and tarDate in variables and then compare them.
Return the comparison result. If all property values are the same, indicating that the given date is yesterday, the function returns true; otherwise, it returns false.`,paraId:1}]},24707:function(o,t,e){e.r(t),e.d(t,{texts:function(){return n}});const n=[]},10485:function(o,t){t.Z=`import { isYesterday } from '@dext7r/hooks';
import { useEffect, useState } from 'react';

export default () => {
  const [isYesterdayDate, setIsYesterdayDate] = useState<boolean>(false);
  useEffect(() => {
    const flag = isYesterday(new Date());
    setIsYesterdayDate(flag);
  }, []);

  return (
    <>
      <h2>{isYesterdayDate ? 'Yesterday' : 'Not Yesterday'}</h2>
    </>
  );
};
`}}]);
