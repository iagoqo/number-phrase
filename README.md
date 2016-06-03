# Exercise description
*The task is to write a program that given any number between 0 and 1,000 inclusive, shows the grammatically-correct English phrase for this number (e.g. given 111 it shows "one hundred and eleven", given 21 it shows "twenty-one"). The code should be production ready and you can choose to complete the task using any technologies you want.*

I decided to make it work from 0 to 9999, since it was cleaner than just 1000.



# Technologies used
- AngularJS
- Bootstrap
- Gulp
- Bower
- Yeoman
- Node.js
- NPM



# Building the project
You will need to have *npm*, *Bower* and *Gulp* installed.

Run to install the dependencies:

    npm install
    bower install

Run to build the project, the resulting files will be in the **dist** folder:

    gulp



# Usage

## Direct usage

The **dist** directory has all the files ready for production. You can copy it to a web server or just open the *index.html* file with your browser.

## Serving with Gulp

Run to serve the development files:

    gulp serve

Run to build and serve the distribution files:

    gulp serve:dist
