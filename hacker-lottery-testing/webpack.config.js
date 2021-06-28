const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    create_lobby: './create_lobby.ts',
    get_all_lobby: './get_all_lobby.ts',
    get_lobby_details: './get_lobby_details.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  stats: {
    colors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
