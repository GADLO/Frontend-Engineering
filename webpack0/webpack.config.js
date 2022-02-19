const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
  entry: {
    index: "./src/main.js",
  },
  output: {
    filename: "bundle_[contenthash:8].js",
  },
  devServer: {
    static: {
      directory: "./",
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /.css$/, // 正则表达式，表示.css后缀的文件
        use: ["style-loader", "css-loader"], // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
      },
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 输出的文件名, 默认为 index.html
      template: "./index.html", // 需处理的文件, 我们的 index.html
    }),
  ],
};
