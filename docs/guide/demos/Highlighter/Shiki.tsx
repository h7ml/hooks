import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';
import React from 'react';

const text = `import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';`;

export default () => (
  <DumiSiteProvider>
    <Highlighter language={'js'}>{text}</Highlighter>
  </DumiSiteProvider>
);
