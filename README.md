# Webpack Primer

This is a demo app used in a talk about getting started with Webpack.

## Outline

1. **Install Webpack**
   
   The first thing we will do is install webpack. We can't get too far without it.
   
   <img src="http://vignette2.wikia.nocookie.net/iceage/images/c/c5/Shangri.png/revision/latest?cb=20151120193423">
   
   We are going to install Webpack globally because we may want to use pack in other apps in the cosmos.
   
   `npm install -g webpack`
   
   Webpack is now available from anywhere, but we're not done. 
   We need a config file so that Webpack knows how to handle our application.
   
   `touch webpack.config.js`
   
  1. **Add Webpack to NPM Scripts**
  
     Having webpack available is great, 
     but we want an easy way to build our app without always having to specify config file.
     Open `package.json` and a `webpack` npm script.
     
     `
     "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "webpack": "webpack --config webpack.config.js"
       }
     `