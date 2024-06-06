/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const path = require('node:path')

module.exports = configure(function (ctx) {
  return {
    eslint: {
      // fix: true,
      // include: [],
      // exclude: [],
      // rawOptions: {},
      warnings: true,
      errors: true,
    },

    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [
      'head',
      { path: 'theme', server: false },
      { path: 'devtools', server: false }, // this boot file gets embedded only on client-side
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: ['app.css'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      iconSet: 'mdi-v5',
      // iconSet: 'svg-mdi-v5',
      config: {},
      // Make spacing utilities responsive
      // cssAddon: true,
      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ['Dark', 'Meta'],
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },

      vueRouterMode: 'history', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},

      vitePlugins: [
        [
          require('@pinegrow/vite-plugin').liveDesigner,
          {
            iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
            devtoolsKey: 'devtoolsKey',
            tailwindcss: {
              /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
              configPath: 'tailwind.config.ts',
              cssPath: '@/css/tailwind.css',
              // themePath: false, // Set to false so that Design Panel is not used
              // restartOnConfigUpdate: true,
              restartOnThemeUpdate: true,
            },
            quasar: {
              /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
              configPath: 'quasar.config.js',
              utilities: false,
              themePath: false, // Set to false so that Design Panel is not used
              // restartOnConfigUpdate: true,
              restartOnThemeUpdate: true,
            },
            // plugins: [
            //   {
            //     name: 'My Awesome Lib 3.0',
            //     key: 'my-awesome-lib',
            //     pluginPath: fileURLToPath(
            //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
            //     ),
            //   },
            // ],
          },
        ],
        [
          require('unplugin-vue-components/vite').default,
          // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
          {
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

            dirs: ['src/components'], // default

            // allow auto load markdown components under ./src/components/
            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            // resolvers: [], // Auto-import using resolvers
            dts: 'components.d.ts',
          },
        ],
        [
          require('unplugin-auto-import/vite').default,
          // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
          {
            include: [
              /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
              /\.vue$/,
              /\.vue\?vue/, // .vue
              /\.md$/, // .md
              // /\.mdx$/, // .mdx
            ],
            exclude: [
              /[\/]node_modules[\/]/,
              /[\/]\.git[\/]/,
              /[\/]\.nuxt[\/]/,
            ],
            imports: [
              'vue',
              'vue-router',
              // 'vue-i18n',
              // 'vue/macros',
              // '@vueuse/head',
              // '@vueuse/core',
              'pinia',
            ],
            dirs: [
              /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
              'src/composables',
              'src/utils',
              'src/stores',
            ],
            vueTemplate: true,
            dts: 'auto-imports.d.ts',
          },
        ],
        [
          require('unocss/vite').default,
          {
            presets: [
              require('@unocss/preset-icons').default({
                prefix: 'i-', // default prefix, do not change
              }),
            ],
          },
        ],
      ],

      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src'),
        '~~': path.join(__dirname, './'),
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      // https: true
      open: false, // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render', // keep this as last one
      ],
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'pg-quasar-tailwindcss',
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: ['my-content-script'],

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    },
  }
})
