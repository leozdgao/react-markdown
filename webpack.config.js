var path = require('path');
var webpack = require('webpack');
var glob = require('glob');

function getEntries() {
    var entries = {};
    glob.sync(__dirname + '/src/**/*.main.js').forEach(function (name) {
        var n = name.match(/\/([^\/]+?).main.js/)[1];
        entries[n] = name
    });
    return entries;
}

module.exports = {
    entry: getEntries(),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].min.js',
        sourceMapFilename: '[file].map'
    },
    externals: {
        'react': 'React',
        'showdown': 'showdown'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}