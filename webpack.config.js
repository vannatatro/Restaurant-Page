const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "src/index.html",
})
],
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [
        {
          type: 'file-loader',
        }
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      type: "asset/resource"
    }

  ],
}
};