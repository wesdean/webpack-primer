# Webpack Primer

This is a demo app used in a talk about getting started with Webpack.

## Tutorial

### Installation
1. **Install Webpack**
   
   The first thing we will do is install webpack. We can't get too far without it.
   
   <img src="http://vignette2.wikia.nocookie.net/iceage/images/c/c5/Shangri.png/revision/latest?cb=20151120193423">
   
   We are going to install Webpack globally because we may want to use pack in other apps in the cosmos.
   
   `npm install -g webpack`
   
   Webpack is now available from anywhere!
   
### Create a Bundle

1. **Create Some Files**
   
   Let's start out with a simple "Hello World" app.
   
   `src/apps/hello-world/hello-world.js`
   
1. **Bundle the App**

   From the `hello-world` directory, run webpack.
   
   `webpack hello-world.js hello-world.bundle.js`
   
1. **Run the App**

   `node hello-world.bundle.js`
   
   This was really simple. 
   A one file app to help you get the feel of using Webpack.
   The next app will get a bit more complex, using multiple files and exports.
   
[Next](app-2.md)