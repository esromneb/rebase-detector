const path = require('path');

module.exports = {
  entry: './src/web/main.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    library: 'main',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    fallback: {
      // "assert": require.resolve("assert/"),
      // "util": require.resolve("util/"),
      // "path": require.resolve("path-browserify"),
      // "assert": require.resolve("assert/"),
      // "os": require.resolve("os-browserify/browser"),
      // "stream": require.resolve("stream-browserify"),
      // "constants": require.resolve("constants-browserify"),
      // "buffer": require.resolve("buffer")
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
      {
        test: /\.m?js$/,
        include: /(ape-ecs|\/src)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
};
