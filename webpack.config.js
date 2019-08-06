'use strict'

const path = require('path');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src',
    output: {
        'path': path.resolve(__dirname, "dist"),
        'filename': 'bundle.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
        /*
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
        */
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            //jquery: "jquery/src/jquery"
        }
    },
    externals: {
        //jquery: 'jQuery'
    }
}