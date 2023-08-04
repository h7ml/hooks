import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import { IDumiUserConfig } from 'dumi/dist/types';
import { featuresZh } from './config/features';
import { author, description, name, repository, version } from './package.json';
const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';
const themeConfig: SiteThemeConfig = {
  name,
  github: repository.url,
  logo: '/logo.png',
  footer: false,
  socialLinks: {
    github: repository.url,
  },
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  hero: {
    description,
    actions: [
      {
        type: 'primary',
        text: '开始使用',
        link: '/guide',
      },
      {
        text: 'Github',
        link: 'https://github.com/arvinxx/dumi-theme-antd-style',
        openExternal: true,
      },
    ],
    features: featuresZh,
  },
};
const config: IDumiUserConfig = {
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
  ],

  locales: [{ id: 'zh-CN', name: '中文', suffix: '' }],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  themeConfig,
  outputPath: 'docs-dist',
  apiParser: isProduction ? {} : false,
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  analyze: {
    enable: true,
    analyzerPort: 8888,
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
  // demo: {
  //   lazyLoading: true,
  // },
  // showLineNum: true,
  // nprogress: true,
  // prefersColor: { default: 'auto', switch: true },
  // editLink: true,
  // lastUpdated: true,
  // rtl: true,
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  cacheDirectoryPath: './node_modules/.cache',
  chainWebpack(memo, { env, webpack }: any) {
    memo.plugin('copyright').use(webpack.BannerPlugin, [
      {
        banner: `Version: ${version} - © ${new Date().getFullYear()} ${author.name} <${
          author.mail
        }>. All rights reserved.`,
      },
    ]);
  },
  clickToComponent: {
    editor: 'vscode',
  },
  conventionLayout: true,
  html2sketch: {},
  analytics: {
    // google analytics 的 key (GA 4)
    ga_v2: 'G-abcdefg',
    // 百度统计的 key
    baidu: 'baidu_tongji_key',
  },
  sitemap: { hostname: 'https://hooks.h7ml.cn' },
};
export default defineConfig(config);
