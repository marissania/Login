
const path = require("path");

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/
const stylesHandler = 'style-loader';
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    /** "mode"
     * the environment - development, production, none. tells webpack 
     * to use its built-in optimizations accordingly. default is production 
     */
    mode: "development", 
    /** "entry"
     * the entry point 
     */
    entry: "./index.js", 
    output: {
        /** "path"
         * the folder path of the output file 
         */
        path: path.resolve(__dirname, "public"),
        /** "filename"
         * the name of the output file 
         */
        filename: "main.js"
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is 
     * for browser (client side). Default is "web"
     */
    target: "web",
    devServer: {
        /** "port" 
         * port of dev server
        */
        port: "3005",
        /** "static" 
         * This property tells Webpack what static file it should serve
        */
        static: ["./public"],
        /** "open" 
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js', '.ts','.tsx','.jsx','.json'] ,
        aliasFields: ['browser'],
        alias: {
          '@components': path.resolve(__dirname, 'src', 'components'),
          '@components/icons': path.resolve(__dirname, 'src', 'components/icons'),
          '@components/auth': path.resolve(__dirname, 'src', 'components/auth'),
          '@components/blocks': path.resolve(__dirname, 'src', 'components/blocks'),
         // '@containers': path.resolve(__dirname, 'src', 'containers'),
         // '@utils': path.resolve(__dirname, 'src', 'utils')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/i,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
            ],
        },
        { test: /\.svg$/, loader: 'svg-inline-loader' }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css"
      }),
      new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
  ]
}
