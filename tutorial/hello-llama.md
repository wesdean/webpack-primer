# Webpack Primer

## Hello, Llama!

Node does not recognize all the ES6 features we will be using, 
so we will need to install Babel to transpile our ES6 code to ES5 during the bundling process.

The Babel loader requires Webpack to be installed locally to the app, so let's take care of that.

`npm install --save-dev webpack`

The `--save-dev` flag tells NPM to save this package to our project dependencies. 
This makes reinstalling much easier.

Now for Babel and the loader.

`npm install --save-dev babel-loader babel-core babel-preset-es2015`

We will now create our Webpack config file with this content.

`apps/hello-llama/webpack.config.js`
~~~
module.exports = {
  entry: './hello-llama.js',
  output: {
    filename: 'hello-llama.bundle.js',
    path: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
~~~

Let's build and run our app!

`apps/hello-llama`

Be sure to execute all commands from the above directory.

1. Build the package.

   `webpack --config webpack.config.js`

1. Run the app.

   `node hello-llama.bundle.js`
   
Pretty simple, huh?
What we have done is built a simple Node application 
and used Webpack to package all the application files into a single file.

Webpack can perform manipulations on the files before packaging them.
Webpack uses "loaders" to do this. To transpile our ES6 script to ES5 we use a Babel loader.

https://github.com/babel/babel-loader

Using loaders, we can transpile SASS to CSS, embed HTML and CSS into the JS bundle, 
and pretty much anything we need to do to build the package.

The biggest difference between Webpack and task runners like Gulp is its primary purpose.
Task runners exist to run task. One of these can be bundling the app into a single file, but this isn't necessary.
Bundlers, like Webpack, exist to bundle files. Intermediate steps may or may not exist to prepare the files to be bundled,
but the end result is always a bundled file.

[Next](hello-llama-html.md)