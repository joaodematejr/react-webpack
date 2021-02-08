"use strict"

const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const config = require('./react-webpack')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        color: true,
    }
}).listen(3000, (err) => {
    if (err) {
        return console.log(err)
    } else {
        console.log("Listening or http://localhost:3000")
    }
})