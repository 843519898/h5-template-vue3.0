const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //打包分析的包
const resolve = function (dir) {
    return path.join(__dirname, dir);
};
// 获取 VUE_APP_ENV 非 NODE_ENV，测试环境依然 console
const IS_PROD = ['production', 'prod'].includes(process.env.VUE_APP_ENV)
// const plugins = [
//     [
//         'import',
//         {
//             libraryName: 'vant',
//             libraryDirectory: 'es',
//             style: true
//         },
//         'vant'
//     ]
// ]
// externals
// const externals = {
//   vue: 'Vue',
//   'vue-router': 'VueRouter',
//   vuex: 'Vuex',
//   vant: 'vant',
//   axios: 'axios'
// }
// CDN外链，会插入到index.html中
// const cdn = {
//   // 开发环境
//   dev: {
//     css: [],
//     js: []
//   },
//   // 生产环境
//   build: {
//     css: ['https://cdn.jsdelivr.net/npm/vant@2.4.7/lib/index.css'],
//     js: [
//       'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
//       'https://cdn.jsdelivr.net/npm/vue-router@3.1.5/dist/vue-router.min.js',
//       'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
//       'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
//       'https://cdn.jsdelivr.net/npm/vant@2.4.7/lib/index.min.js'
//     ]
//   }
// }
// 去除 console.log
// if (IS_PROD) {
//     plugins.push('transform-remove-console')
// }

// module.exports = {

//   }
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    css: {
        extract: false
    },
    devServer: {
        //host: "192.168.1.107",
        host: "0.0.0.0", //局域网和本地访问
        port: "9020",
        hot: true,
        /* 自动打开浏览器 */
        open: true,
        overlay: {
            warning: false,
            error: true
        },
        /* 跨域代理 */
        proxy: {
            "/api": {
                /* 目标代理服务器地址 */
                target: "http://m260048y71.zicp.vip", //
                // target: "http://192.168.1.102:8888", //
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config.entry('app').clear().add('./src/main.ts') //修改webpack打包的入口文件。需要在根目录建两个对应入口js文件
        /**
         * 打包分析
         */
        if (IS_PROD) {
            config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin, [{
                analyzerMode: 'static'
            }])
        }

        config.resolve.alias
            .set("@", resolve("src"))
            .set("@v", resolve("src/views"))
            .set("@c", resolve("src/components"))
            .set("@u", resolve("src/utils"))
            .set("@s", resolve("src/service")); /* 别名配置 */


        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(!IS_PROD, config => config.devtool('cheap-source-map'))

        config.when(IS_PROD, config => {
            config.plugin('compressionPlugin')
                .use(new CompressionPlugin({
                    algorithm: 'gzip', // 使用gzip压缩  ng 也要打开响应的配置
                    test: /\.js$|\.html$|\.css$/, // 匹配文件名
                    filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
                    minRatio: 0.8, // 压缩率小于1才会压缩
                    threshold: 10240, // 对超过10k的数据压缩
                    deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
                }));
            config
                .plugin('ScriptExtHtmlWebpackPlugin')
                .after('html')
                .use('script-ext-html-webpack-plugin', [{
                    // 将 runtime 作为内联引入不单独存在
                    inline: /runtime\..*\.js$/
                }])
                .end()
            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                    // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
                    commons: {
                        name: 'chunk-commons',
                        test: resolve('src/components'),
                        minChunks: 3, //  被至少用三次以上打包分离
                        priority: 5, // 优先级
                        reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
                    },
                    node_vendors: {
                        name: 'chunk-libs',
                        chunks: 'initial', // 只打包初始时依赖的第三方
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10
                    },
                    vantUI: {
                        name: 'chunk-vantUI', // 单独将 vantUI 拆包
                        priority: 20, // 数字大权重到，满足多个 cacheGroups 的条件时候分到权重高的
                        test: /[\\/]node_modules[\\/]_?vant(.*)/
                    }
                }
            })
        })
        config.optimization.runtimeChunk("single");
    },
    configureWebpack: config => {

    },



};