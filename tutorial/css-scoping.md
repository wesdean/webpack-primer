# Webpack Primer

## CSS Scoping

Using Webpack loaders we can scope our CSS to isolate some styles
to specific elements. Let's take a glimpse at how powerful this
can be.

We will be working from this directory.

`apps/css-scoping`

First of all, if you open `index.html` without creating the
bundle you will notice a very broken page.

Let's bundle the application before we go any further.

`webpack --config webpack.bundle.js`

If you take a look inside the `index.html` file, you will notice
that the code each of our llama friends is exactly the same except
for their names and `id` attributes. The names are arbitrary, but
the `id` attributes will be used to identify each llama in code.

The `css-loader` loader for Webpack allows use to use `css-modules`.
This enables use to scope CSS classes. When we `require` a CSS file
an object containing unique IDs is exported base on the "local" classes
we created.

Local classes are created using the `:local` function within the CSS file.
Take a look at our llama's CSS files in the `styles` directory for examples.

For up to use these scoped classes, their local class names will need to be
added to the elements where we want them applied. This application has a Llama
class already being imported that will do this.

You can now uncomment the instatiation of our llama objects all at once,
or one by one for effect.

[Next](outro.md)