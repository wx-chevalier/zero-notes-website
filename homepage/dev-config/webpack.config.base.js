const path = require('path');

const { dependencies } = require('../package.json');

const PATHS = {
  src: path.join(__dirname, '../src'),
  public: path.join(__dirname, '../public'),
  build: path.join(__dirname, '../build')
};

const moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 2,
    localIdentName: '[path][name]__[local]__[hash:base64:5]'
  }
};

const fontsOptions = {
  limit: 8192,
  mimetype: 'application/font-woff',
  name: 'font/[name].[ext]'
};

console.log(path.resolve(__dirname, '../', 'src', 'components'));

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: {
      'x-api': path.resolve(__dirname, '../', 'src', 'api/'),
      'x-components': path.resolve(__dirname, '../', 'src', 'components/'),
      'x-containers': path.resolve(__dirname, '../', 'src', 'containers/'),
      'x-models': path.resolve(__dirname, '../', 'src', 'models/'),
      'x-stores': path.resolve(__dirname, '../', 'src', 'stores/'),
      'x-services': path.resolve(__dirname, '../', 'src', 'services/')
    }
  },

  entry: {
    app: path.resolve(PATHS.src, './index.tsx')
  },
  output: {
    path: PATHS.build,
    // 设置所有资源的默认公共路径，Webpack 会自动将 import 的资源改写为该路径
    publicPath: './',
    filename: '[name].bundle.js', // 文件名,不加 chunkhash,以方便调试时使用，生产环境下可以设置为 [name].bundle.[hash:8].js
    sourceMapFilename: '[name].bundle.map', // 映射名
    globalObject: 'this' // 避免全局使用 window
  },
  module: {
    rules: [
      {
        test: /.*ts-worker.*/,
        use: ['workerize-loader', 'ts-loader']
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules|.*ts-worker.*)/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: fontsOptions
          }
        ]
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: fontsOptions
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_module/, PATHS.src]
      },
      {
        test: /\.less$/,
        use: ['style-loader', moduleCSSLoader, 'less-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.wasm$/,
        exclude: /node_module/,
        loader: 'wasm-loader'
      }
    ]
  },
  plugins: [],
  // 定义非直接引用依赖
  // 定义第三方直接用Script引入而不需要打包的类库
  // 使用方式即为 var $ = require("jquery")
  externals: {
    window: 'window',
    jquery: '$'
  },
  extra: {
    moduleCSSLoader,
    PATHS
  }
};
