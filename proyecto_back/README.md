Getting Started with Node
Suggest Edits
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

It enables developers to use Javascript for the client side (front end) and the server side.

This tutorial is a reference on how I got started with it

1. Install Node.js - there are installers and packages for all the common operating systems which can be downloaded from here - http://nodejs.org/

If you are on windows I would suggest still using the 32bit version as some packages that you may need in the future may not work with the 64bit version.

Once installed to check it has installed open a command prompt window and run the following:

Text

node --version
This should give you the current version of Node.js which is installed

You should also check to see if NPM (Node Package Manager - more on this later) has also installed, so run the following:

Text

npm --version
Again this should give you the version of npm which is installed.

In order to build web applications we can use Express which is a web framework for Node.js. So we need to install Express and its counterpart Express-Generator.

To install these packages we can use the Node Package Manager (NPM). There are tens of thousands of packages/modules that people have written and released which means we have to write less code!!

So to install Express there are two ways to install it. The first will install it to the local working folder.

Text

npm install express
But we can also install it globally so that we can call on Express from whichever folder we are working in.

Text

npm install -g express
We also need to install Express-Generator which Express uses to create a starting template of directories and files for your web application. This is a huge help so again is worth installing globally.

Text

npm install -g express-generator
So now create a new web application in Node.js and Express we can run this command:

Text

express nodeapp
408
As you can see Express has created a number of directories and files that we will use to build our web application.

Express has a number of dependencies that need to now be installed. To do this we can follow the guidance towards the end of the printed responses.

Text

cd nodeapp && npm install
After a few moments npm will download and install a number of different node packages that Express requires. The progress will be printed in the command window.

598
Once these packages have been installed we can now run the app by running:

App Start

npm start
Open a web browser and type the following address:

Text

http://localhost:3000
