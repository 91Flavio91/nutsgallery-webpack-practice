const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //This plugin here will generate an index.html file with a <script> tag containing the bundles found in 'dist'. I installed this plugin because I set 'clean: true' in the key 'output'. In so doing, everytime that I run 'npx webpack', the index.html that I would create manually inside the 'dist' folder would be constantly erased. Another way to avoid this would be to put the 'index.html' file outside the 'dist' folder avoid the need of this plugin.

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html' //everytime that the command 'npx webpack' executes, a file specified as the value of the key 'template' is used to generate an index.html file
    })
    ]
}