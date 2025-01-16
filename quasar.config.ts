// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file
//@ts-nocheck

import { defineConfig } from '#q-app/wrappers'
import { fileURLToPath, URL } from 'node:url'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { unheadVueComposablesImports } from '@unhead/vue'

import Markdown from 'unplugin-vue-markdown/vite'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from 'markdown-it-shiki'
import VueDevTools from 'vite-plugin-vue-devtools'

// import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig((ctx) => {
  return {
    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: ['head', { path: 'theme', server: false }, 'i18n', 'axios', 'unocss'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ['app.css'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      'mdi-v7',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      typescript: {
        strict: true,
        vueShim: true,
        // extendTsConfig (tsConfig) {}
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

      extendViteConf(viteConf) {
        const vueVitePluginIdx = viteConf.plugins?.findIndex(
          (plugin) =>
            plugin.name === 'vite-plugin-vue' || plugin.name === 'vite:vue',
        )

        const vueRouterPlugin = [
          VueRouter({
            // routesFolder: 'src/pages', // default
            dts: 'typed-router.d.ts',
          }),
        ]
        if (vueVitePluginIdx > -1) {
          viteConf.plugins.splice(vueVitePluginIdx, 0, vueRouterPlugin)
        }

        viteConf.plugins?.push(
          Unocss({
            presets: [
              presetIcons({
                prefix: 'i-', // default prefix, do not change
              }),
            ],
            content: {
              pipeline: {
                include: ['./src/**/*'],
              },
            },
          }),
        )
      },

      viteVuePluginOptions: {
        include: [/\.vue$/, /\.md$/],
      },

      vitePlugins: [
        Layouts(),
        Markdown({
          headEnabled: true,
          markdownItSetup(md) {
            // https://github.com/antfu/markdown-it-shiki
            md.use(Shiki, {
              // theme: {
              //   dark: 'min-dark',
              //   light: 'min-light',
              // },
            })
            md.use(LinkAttributes, {
              matcher: (link: string) => /^https?:\/\//.test(link),
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            })
          },
        }),
        // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
        AutoImportAPIs({
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
            /\.md$/, // .md
            /\.mdx$/, // .mdx
          ],
          imports: [
            'vue',
            VueRouterAutoImports, // Remove 'vue-router',
            // 'vue-i18n',
            // 'vue/macros',
            unheadVueComposablesImports,
            '@vueuse/core',
            'pinia',
          ],
          dirs: [
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
            'src/composables',
            'src/utils',
            'src/stores',
            '**/pg-*/**', // To auto-import composables from Vue Designer plugins.
          ],
          vueTemplate: true,
          dts: 'auto-imports.d.ts',
        }),
        // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
        AutoImportComponents({
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

          dirs: ['src/components'],

          // allow auto load markdown components under ./src/components/
          extensions: ['vue', 'md'],

          // allow auto import and register components used in markdown
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],

          // resolvers: [], // Auto-import using resolvers
          dts: 'components.d.ts',
        }),
        [
          '@intlify/unplugin-vue-i18n/vite',
          {
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            // compositionOnly: false,

            // if you want to use named tokens in your Vue I18n messages, such as 'Hello {name}',
            // you need to set `runtimeOnly: false`
            // runtimeOnly: false,

            ssr: ctx.modeName === 'ssr',

            // you need to set i18n resource including paths !
            include: [fileURLToPath(new URL('./src/i18n', import.meta.url))],
          },
        ],
        // [
        //   'vite-plugin-checker',
        //   {
        //     vueTsc: true,
        //     eslint: {
        //       lintCommand: 'eslint -c ./eslint.config.mjs',
        //       useFlatConfig: true,
        //     },
        //   },
        //   { server: false },
        // ],
        VueDevTools(),
        liveDesigner({
          iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
          tailwindcss: {
            configPath: 'tailwind.config.ts',
            cssPath: '@/css/tailwind.css',
            // themePath: false, // Set to false so that Design Panel is not used
            // restartOnConfigUpdate: true,
            restartOnThemeUpdate: true,
          },
          quasar: {
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
            configPath: 'quasar.config.ts',
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
          //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
          //     ),
          //   },
          // ],
        }),
      ],
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
    devServer: {
      // https: true,
      open: false, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
    framework: {
      config: {},
      iconSet: 'mdi-v7',
      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ['Dark' /*, 'Meta'*/],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
    //   pwaServiceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    //   bexManifestFile: 'src-bex/manifest.json
    // },

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render', // keep this as last one
      ],

      // extendPackageJson (json) {},
      // extendSSRWebserverConf (esbuildConf) {},

      // manualStoreSerialization: true,
      // manualStoreSsrContextInjection: true,
      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      pwa: false,
      // pwaOfflineHtmlFilename: 'offline.html', // do NOT use index.html as name!

      // pwaExtendGenerateSWOptions (cfg) {},
      // pwaExtendInjectManifestOptions (cfg) {}
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      // swFilename: 'sw.js',
      // manifestFilename: 'manifest.json',
      // extendManifestJson (json) {},
      // useCredentialsForManifestTag: true,
      // injectPwaMetaTags: false,
      // extendPWACustomSWConf (esbuildConf) {},
      // extendGenerateSWOptions (cfg) {},
      // extendInjectManifestOptions (cfg) {}
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
      // extendElectronMainConf (esbuildConf) {},
      // extendElectronPreloadConf (esbuildConf) {},

      // extendPackageJson (json) {},

      // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
      preloadScripts: ['electron-preload'],

      // specify the debugging port to use for the Electron app when running in development mode
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
      // extendBexScriptsConf (esbuildConf) {},
      // extendBexManifestJson (json) {},

      /**
       * The list of extra scripts (js/ts) not in your bex manifest that you want to
       * compile and use in your browser extension. Maybe dynamic use them?
       *
       * Each entry in the list should be a relative filename to /src-bex/
       *
       * @example [ 'my-script.ts', 'sub-folder/my-other-script.js' ]
       */
      extraScripts: [],
    },
  }
})
