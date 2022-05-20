# Micro Frontend Boilerplate
Skeleton for Micro Frontend Apps written in JavaScript (with integrated ESLint, Prettier, and Husky)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the Micro Frontend concept and model federation architecture.
### Purpose

Our main purpose with this Skeleton is to start Micro frontend application with model federation architecture.

Try it!! I am happy to hear your feedback or any kind of new features.
## Exciting Features

 ### Quick start
  Create Pages, components, containers, routes, selectors and sagas - and their tests - right from the CLI!
  
  ### Integrated eslint, prettier and husky
   Integrated ESLint, Prettier and Husky helps to take care of your code style, code formatting respectively and is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages respectively. 

  - [Learn more about Eslint](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/eslint.md)
  - [Learn more about Prettier](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/prettier.md)
  - [Learn more about Husky](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/husky.md)
  
  
  ### Instant feedback
  Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!

  ### Integrated Redux Toolkit
  Makes easier to write good redux applications and speeds up development.

- [Learn more about redux-toolkit](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/redux-toolkit.md)
  

### Based on JavaScript
  Use template strings, object destructuring, arrow functions, JSX syntax and more.

  - [Learn more about JavaScript](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/features/typescript.md)

  ### Offline-first
  The next frontier in performant web apps: availability without a network connection from the instant your users load the app.

  ### Static code analysis
  Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.
  
  ### Production Ready Skeleton
  The ease of usability, reliability and availability of software to the users 
  
  ## Purpose

Our main purpose with this Skeleton is to start Micro-frontend application with react with redux toolkit and JavaScript.

Try it!! I am happy to hear your feedback or any kind of new features.

### Start the application

- Clone the repository 
```
git clone https://github.com/NeoSOFT-Technologies/mf-shell.git
```
- Install the dependencies 
```
npm install
```
- Start the application 
```
npm start
```

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:


| Npm Script | Description  |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `build`                   | Full build. Runs ALL build tasks |
| `build:prod`                   | Full production build. Runs ALL build tasks |
| `start:dev`                   | Run the application in dev mode                                       |
| `build:css`                   | Build the css for production environment                                         |
| `lint`                    | Runs ESLint on project files                                                                      |
| `lint:fix`                    | Runs ESLint on project files and fixed the auto fix issues                                                                     |
| `format`             | Runs the file formatter                                                              |




## NPM Modules 

  Node Modules folder is the repository of modules/library which you are using inside your project. What ever you are importing in your project that module or library should present inside the mode_module folder.When you do npm install that time that module or the library install inside the node_module folder and one entry added in package.json file. In your case frontend and backend are different project than obviously there will be 2 different node_modules folder for each of them.
  To check the list of modules used by us in this boilerplate click [here](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/npm_modules/index.md)
  
  ## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **application-shell**                         | Contain the Routes, and integration of the Micro frontend |
| **application-shell/.babelrc**                         |  local configuration for your code in your project |
| **application-shell/Dockerfile**                         |  contain the commands for docker build  |
| **application-shell/src**                         | 	Contains your source code that will be compiled to the build  |
| **application-shell/src/AppRoutes**                         | 	Contains the Routes for the Application  |
| **authentication-shell**                         | 	Contains the pages with are realted to authentication  |
| **authentication-shell/src/utils/api**                         | 	Contains the API Factory   |
| **component-shell**                         | 	Contains the Components like header, footer  |
| **wiki/**                         | You can add project documentation and insructions file here |
| **webpack.config.js                    | config file for micro-frontend  |
| .dockerignore                        | Config to ignore file during the build process  |
| install.sh                        | code toinstall all dependences in a single run  |
| docker-compose.yml                       | Config file for docker build  |
| package.json             | File that contains npm dependencies
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| .eslintrc.json                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |
| prettierrc.json                | Config settings for Prettier code format checking                                                |
| .prettierignore            | Config settings for paths to exclude from formatting                                             |
| **.husky**              | Contains Husky settings and configurations            |
| **node_modules**         | Contains all your npm dependencies                                                            |

  
## Training 
- [Concepts](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/setup/concepts.md)
- [Getting started /Installation](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/howto/getting_started.md)
- [How to create components]()
- [Redux Toolkit Flow of implementation]()
- [Unit Test cases]()
- [How to implement]()
- [API Factory]()

## Video Tutorials
- [Concepts](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/setup/concepts.md)
- [Getting started /Installation](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/howto/getting_started.md)
- [How to create components]()
- [Redux Toolkit Flow of implementation]()
- [Unit Test cases]()
- [How to implement]()
- [API Factory]()