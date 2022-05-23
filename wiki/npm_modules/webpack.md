## WebPack
### What is Webpack?

Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.
Webpack goes through your package and creates what it calls a dependency graph which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.

### Installation Phase
```
npm int
```
Thats right, thats how almost all good things start: plain old npm init. I will be using VS Code, but feel free to use any code editor you like to get things started.

Before you can do any of this, thought, make sure you have the latest nodeJS and the npm version installed locally on your machine. Click on each of those links to know more about the process.
```
$ npm init
```
This will create a starter package and add a package.json file for us. This is where all the dependencies required to build this application will be mentioned.

Now for creating a simple React application, we need two main libraries: React and ReactDOM. So let’s get them added as dependencies into our application using npm.

```
$ npm i react react-dom --save
```
Next up we need to add webpack, so we can bundle our app together. Not only bundle, but we will also require hot reloading which is possible using the webpack dev server.

```
$ npm i webpack webpack-dev-server webpack-cli --save--dev
```
The --save--dev is to specify that these modules are just dev dependencies. Now since we are working with React, we must keep in mind that React uses ES6 classes and import statements, something that all the browsers may not be able to understand. To make sure that the code is readable by all browsers, we need a tool like babel to transpile our code to normal readable code for browsers.

```
$ npm i babel-core babel-loader @babel/preset-react     @babel/preset-env html-webp
```

### Configuration 
You may have noticed that few webpack configurations look exactly alike. This is because webpack's configuration file is a JavaScript file that exports a webpack configuration. This configuration is then processed by webpack based upon its defined properties.

Because it's a standard Node.js CommonJS module, you can do the following:

- Import other files via require(...)
- use utilities on npm via require(...)
- use JavaScript control flow expressions, e.g. the ?: operator
- use constants or variables for often used values
- write and execute functions to generate a part of the configuration
- Use these features when appropriate.

While they are technically feasible, the following practices should be avoided:

- 1. Access CLI arguments, when using the webpack CLI (instead write your own CLI, or use --env)
- 2. Export non-deterministic values (calling webpack twice should result in the same output files)- 
Write long configurations (instead split the configuration into multiple files)
Let’s start by adding a webpack.config.js file in the root of our application structure. Add the following code in your webpack.config file.
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts
  entry:'./src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

```
First we start by requiring the default path module to access the file location and make changes to the file location.

Next we require the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled JavaScript file/files. Read more about HTMLWebpackPlugin by clicking the link.

Then we have the export.module object with some properties in them. The first one is the entry property, which is used to specify which file webpack should start with to get the internal dependency graph created.

```javascript
module.exports = {
  entry:'./src/index.js'
}
```

Next up is the output property specifying where the bundled file should be generated and what the name of the bundled file would be. This is done by the output.path and output.filename properties.

```javascript
module.exports = {
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
}
```
Next up are the loaders. This is to specify what webpack should do for a specific type for file. Remember that webpack out of box only understands JavaScript and JSON, but if your project has any other language used, this would be the place to specify what to do with that new language.
```javascript

module.exports = {
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```
The information should be specified in an object for each module property, which further has an array of rules. There will be an object for every case. I have also specified to exclude everything in my node_modules folder.

Next up is the plugin property. This is used to extend the capabilities of webpack. Before a plugin can be used in the plugin array inside the module exports object, we need to require the same.

```javascript
module.exports = {
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
```
This particular plugin, as explained earlier, will use the specified file in our src folder. It’ll then use that as a template for our HTML file where all the bundled files will be automatically injected. There are a lot of other out of the box plugins that we could use — checkout the official page for more information.

The last thing we need to do is create a .babelrc file to use the babel preset we installed and take care of the ES6 classes and import statements in our code. Add the following lines of code to the .babelrc file.

```javascript
{
  "presets": ["env", "react"]
}```

###Output
The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

You can configure this part of the process by specifying an output field in your configuration:

```javascript
webpack.config.js

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```
### Suported Module Types
Webpack supports the following module types natively:

- ECMAScript modules
- CommonJS modules
- AMD modules
- Assets
- WebAssembly modules
In addition to that webpack supports modules written in a variety of languages and preprocessors via loaders. Loaders describe to webpack how to process non-native modules and include these dependencies into your bundles. The webpack community has built loaders for a wide variety of popular languages and language processors, including:

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus
- Elm
And many others! Overall, webpack provides a powerful and rich API for customization that allows one to use webpack for any stack, while staying non-opinionated about your development, testing, and production workflows.