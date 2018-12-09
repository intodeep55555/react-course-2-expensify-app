HOW TO CREATE APP

(Easiest way)—————————————————————

$ create-react-app ‘folder name’
$ cd ‘folder name’

Modify the package.json with below for dev environment
 startdev: “react-scripts start”
(We add “start” for production env later)

Check the code with dev environment
$ npm run startdev

(
Then index.js will load your code 
from App.js and render it to index.html
with id = “root”.
So, make your application code from App.js,
and other js file in /src/components.
In other words, no need to modify index.js dynamically.
)

add react-modal(for showing modal for selected option)
$ npm add react-modal

installing sass for enabling scss styling
$ npm install node-sass

add react-touter-dom
$ npm install --save react-router-dom

add redux
$ npm install redux

add react-redux
$ npm install --save react-redux

add uuid(creating unique ID)
$ npm install uuid

add time library(moment)
$ npm install moment —save

add calender
$ npm install react-dates

add numeral
$ npm add numeral

(add chalk(only for heroku devenv)
$ npm add chalk-—dev) <- seems you don’t have to add this

add Jest(React Testing Components)
$ npm install --save-dev jest

then add “test”: “jest” to scripts in package.json,
writing test code in app.test.js
$ npm test -— -—watch (For test, instead of using “npm start”)

——(git)—————————————————————————————
type the command below in project folder
$ git init

define the untracked files in .gitignore file.

check git tracking status
$ git status

add git(for example adding “package.json”)
$ git add package.json

to add all files except untracked files
$ git add .
$ git status(see files tracked)

to commit with message(-m)
$ git commit -m “Initial commit”

describe git commands in “README.md file”.

——(GitHub)—————————————————————————————
generate ssh key(for ssh connection to Github)
then “id_rsa” and “id_rsa.pub”
$ ssh-keygen -t rsa -b 4096 -C “intodeep55555@gmail.com”

add “id_rsa” to identity
$ ssh-add ~/.ssh/id_rsa

adding a new SSH key to your GitHub accout
the key will copied to your clipboard after command below, then paste
it in “SSH and GPC keys” in account setting of GitHub
$ pbcopy < ~/.ssh/id_rsa.pub

check ssh connection enabled with GitHub
(see the “successfully authenticated“ message after typing command below)
$ ssh -T git@github.com

add origin ssh URL of the project of GitHub
$ git remote add origin git@github.com:intodeep55555/react-course-2-expensify-app.git
($ git remote -v <- check added origin)

push code to GitHub(Then you can see the code of your project is pushed in GitHub)
$ git push -u origin master

—-(Production server with Express)———————————————
Codes for server is defined in “server” directory

add Express for server
$ npm add express

modify “package.json” with below
"scripts": {
    "startpro”:”node server/server.js",

———(Heroku for deploying production)——————

id:intodeep~
pw: ~+

login
$ heroku login

$ heroku create react-course-2-expensify-55555
(see the heroku is also added in git with “$ git remote”)

The main feature is directing to index.html of build folder
after build command below
$ npm run build

Comment out “/build” in .gitignore then,
$ git add .
$ git commit -m "Setup production build and server"

push to GitHub
$ git push

push to heroku
($ git rm yarn.lock)   <- Error may occur without this when using npm
($ git commit -m "Remove yarn lock file") <- Error may occur without this when using npm
$ git push heroku

Then you can accessing deployed URL!!!!
$ heroku open
or direct access URL 
(in this case)“https://react-course-2-expensify-55555.herokuapp.com/“

———————————————————————————————————————





below is customizable way, but not easy!!


live server
$ live-server ‘folder name of index.html file’

install babel
$ sudo npm install -g babel-cli@6.24.1

create “package.json”
$ yarn init

installing babel dependency
$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

define the babel input and output file.
(real time background with ‘—watch’)
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react —watch


<OR>

(first of all, delete all your dependancies above)
($ sudo npm uninstall -g babel-cli live-server)

you can add babel-cli and live-server
$ yarn add live-server babel-cli@6.24.1

and then, add to scripts in package.json like
 “scripts”:{
	“serve”: “live-server public/”.
	“build-babel”: “babel src/app.js —-out-file=public/scripts/app.js —-presets=env,react -—watch”
},

then run below

$ npm run build-bael
$ npm run serve

<OR Webpack :Recommended>——————————————————

add webpack(babel and dom inside)
$ npm add webpack@3.1.0

add below in “scripts” in package.json file
“build”: “webpack -—watch” 

create a webpack.config.js in root folder and configure it.
(no need for webpack v4.0, because it automatically set entry ./src/index.js)
set the “<script src="/bundle.js"></script>” in /public/index.html

add ‘npm validator’
$ sudo npm add validator@8.0.0
(make sure added in dependancy in package.json)

add npm react and react-dom
$ sudo npm install react react-dom

add babel-core and babel-loader(for enabling JSX in react js file)
$ sudo npm add babel-core@6.25.0 babel-loader@7.1.1

set loader in webpack.config.js and .babelrc file.



 
 