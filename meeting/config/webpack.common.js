module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|woff2|svg|eot|ttf)$/i,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
            options: {
              stylusOptions: {
                use: [require("nib")()],
                import: ["nib"],
              },
            },
          },
        ],
      },
      {
        test: /\.scss|\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ["", ".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
