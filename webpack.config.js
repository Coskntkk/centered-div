var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/CenteredDiv.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'CenteredDiv.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}