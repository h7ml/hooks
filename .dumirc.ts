import { defineConfig } from 'dumi';
import { featuresZh } from './config/features';
import { author, description, name, repository, version } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: isProduction ? {} : false,
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  themeConfig: {
    name,
    github: repository.url,
    editLink: true,
    lastUpdated: true,
    logo: '/logo.png',
    footer: false,
    rtl: true,
    showLineNum: true,
    nprogress: true,
    prefersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: repository.url,
    },
    apiHeader: {
      docUrl: `{github}/tree/master/src/{atomId}/index.md`,
      match: ['/components'],
      pkg: name,
      sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
    },
    demo: {
      lazyLoading: true,
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
  },
  analyze: {
    enable: true,
    analyzerPort: 8888,
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
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
});
