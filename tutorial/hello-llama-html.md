# Webpack Primer

## Hello, Llama, in HTML!

Webpack can not only be used to bundle applications into nifty Javascript executables,
it can used to improve distribution of web apps.

We will be working out of this directory.

`apps/hello-llama-html`

Bundling files into a single distributable Javascript file is 
very useful for web applications. In this application we bundle 
both Javascript and CSS into the same file.
  
`hello-llama-html` is designed to allow incrementally activating
the different modules. We start with the two `require` and `import`
statement commented. This will display a simple HTML page
with a heading and an image.

**Bundle the app**

To create the initial bundle, run

`webpack --config webpack.config.js`

from the `apps/hello-llama-html` directory.

Then open `index.html` in a browser.

###Showy

Showy is a class that will some animation to our llama's name.
Uncomment the `import` for Showy.

`// import {Showy} from './lib/Showy';`

to

`import {Showy} from './lib/Showy';`

Bundle the app and refresh the page in the browser.

The llama's name is now animated and there are some buttons
under the llama to stop and start the animation.

This page is still a bit boring. Let's spice it up a bit with
some CSS. Before we can bundle CSS into our application we will
need to add some loaders so that Webpack knows what to do with
CSS files.

From the project root

`npm intall style-loader css-loader --save-dev`

`css-loader` loads and parses CSS from a file.

`style-loader` injects the style tags into the DOM.
 
The next thing to do is to add the loaders to `webpack.config.js`.
We will add only one loader entry to apply both loaders. 
This is because we will chain the loaders using the "!" symbol.
My chaining the loaders we use the output of one for input to 
another enabling us to perform multiple transformations 
on the same files before including them in the bundle.

Now we are ready to add CSS to our application.
Uncomment the `hello-llama.css` require.

`// require('./styles/hello-llama.css');`

to

`require('./styles/hello-llama.css');`

Almost there. Let's make our buttos a bit more exciting by
uncommenting `buttons.css`.

Bundle the app and refresh the page in the browser.

###Llama Namer

This is better. Now let's uncomment `LlamaNamer` so we can change
the llama's name.

Bundle the app and refresh the page in the browser.

Type a name in the new form and press the enter key.
We can now name our llama.

Using Webpack we have now selectively included features into
our application by adding a few lines of code 
at our application's entry point. 
This makes adding/removing features very easy to manage.

[Next](css-scoping.md)