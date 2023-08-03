import { defineConfig } from 'dumi';
import { author, homepage, name, version ,description} from './package.json';
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
    title:name,
    github: homepage,
    description,
    editLink: true,
    lastUpdated: true,
    logo: 'https://www.h7ml.cn/logo.png',
    // footer: false,
    rtl: true,
    showLineNum: true,
    nprogress: true,
    prefersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: homepage,
    },
    apiHeader: {
      docUrl: `{github}/tree/master/src/{atomId}/index.md`,
      match: ['/components'],
      pkg: name,
      sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
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
});
