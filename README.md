# React Web Application

## Overview

Follow react web application on Udemy :  
https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content

Version :  

    node -v
    v5.10.1
    npm -v
    3.8.3

## Roadmap

- RW-01 : init project
- RW-02 : hello react

## Development

React IDE :  
https://atom.io/  

Install node modules :  

    $ npm install  

Web pack your files :

    $ webpack

Start server :  

    $ node server.js  

Shut down current server in terminal :

    $ Ctrl + C

Automatic webpack bundling :

    $ webpack -w (it will listen to every changes mede in your files)
    $ node server.js (run in an other CLI windows)


## Debugging

Install React webchrome module at :
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

Launch developement tools in Chrome and go to "React" tab.
In the React tab you can access to the whole React app & states in the main window.

To stop at a certain point you can add "debugger;" anywhere in your code while de developer tool is open to stop your code at this point.
In combination with "source-map" (add this line in your webpack.config : "devtool: 'inline-source-map'") and developer console, debugging become a peace of cake.


## Heroku

Install heroku CLI :
https://devcenter.heroku.com/articles/heroku-cli

Launch and login :

    $ heroku

Init your Git heroku project :

    $ cd your/project
    $ heroku create

Push git repositories :

    $ cd your/project
    $ git remote -v (check what is set)
    $ git push heroku master
