const path = require('path');
const webpack = require('webpack');

const sharedConfig = {
    plugins: [
        new webpack.DefinePlugin({
            __PLUGIN_VERSION_TIMESTAMP__: webpack.DefinePlugin.runtimeValue(() => `${new Date().valueOf()}`, true),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
        }),
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'build/src/')
        ],
    },
}

const sharedNodeConfig = {
    ...sharedConfig,
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: {
        argparse: 'require("argparse")',
        'util.promisify': 'require("util.promisify")',
    },
    plugins: [
        ...sharedConfig.plugins,
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true, entryOnly: true }),
    ],
}

module.exports = [
    {
        node: false,
        entry: path.resolve(__dirname, `build/src/ciftools.js`),
        output: {
            library: 'CIFTools',
            libraryTarget: 'umd',
            filename: `ciftools.js`,
            path: path.resolve(__dirname, `build/dist`)
        },
        ...sharedConfig
    },
    {
        ...sharedNodeConfig,
        entry: path.resolve(__dirname, `build/src/apps/cif2bcif/index.js`),
        output: { filename: `cif2bcif.js`, path: path.resolve(__dirname, `build/bin`) },
    },
    {
        ...sharedNodeConfig,
        entry: path.resolve(__dirname, `build/src/apps/cifschema/index.js`),
        output: { filename: `cifschema.js`, path: path.resolve(__dirname, `build/bin`) },
    }
]