# Micro Frontend Boilerplate
Skeleton for Micro Frontend Apps written in JavaScript (with integrated ESLint, Prettier, and Husky)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the Micro Frontend concept and model federation architecture.
## Overview
 - Micro-Frontend is an typescript boilerplate which is basically a set of micro-frontend with an app-shell , built with ReactJs libraries (in our case ReactJS in conjunction with typescript) used to create a quick start boilerplate web application. 

- ReactJS improves performance due to virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. Most of the developers faced the problem when the DOM was updated, which slowed down the performance of the application. ReactJS solved this problem by introducing virtual DOM.

- ReactJS is choosen by most of the web developers. It is because it offers a very rich JavaScript library. The JavaScript library provides more flexibility to the web developers to choose the approch they want to follow.

Take it for a test drive. We'd love to hear any feedback you have or if you've thought of a new feature.
## Motivation

- With this boilerplate, you can easily  quick start a microfront-end  boilerplate using Reactjs.
- Rather than spending time on the project setup, get on with the important stuff right away.

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentations)
- [Miscellaneous](#miscellaneous)
- [Trainings](#trainings)
- [Video Tutorials](#video-tutorials)
- [Contributing To This Project](#contributing-to-this-project)
- [Stay in touch](#stay-in-touch)

## Features

- **Quick start**
- **Integrated ESLint, Prettier and Husky**
- **Simple and Standard scaffolding**
- **Production-Ready Skeleton**
- **Common Error Handler**
- **CSS**
- **Form Validation Using Regex**
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Environment variables**: segregated env files for easier variable management.
- **CI**: Continuous integration
- **Docker support**
- **Git hooks**: with [husky](https://github.com/typicode/husky) 
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## Getting started

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
## Backend 
- Clone the repository 
```
git clone [https://github.com/NeoSOFT-Technologies/mf-shell.git](https://github.com/NeoSOFT-Technologies/rest-node-nestjs)
```
[learn more](https://github.com/NeoSOFT-Technologies/rest-node-nestjs)

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
|`build:dev`                | build in mode development|
|`build:start`              |run the static dist build|
| `lint`                    | Runs ESLint on project files                                                                      |
| `lint:fix`                | Runs ESLint on project files and fixed the auto fix issues                                                                     |
| `format`                  | Runs the file formatter                                                              |




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
| **webpack.config.js**                   | config file for micro-frontend  |
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
## Documentations

### Project flow
![image](https://user-images.githubusercontent.com/90671869/171803889-27019a3c-9aed-4eb1-92d3-2c7982fc4809.png)


## Modules

- [Eslint](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/eslint.md)
- [Axios](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/axios.md)
- [Env](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/features/env.md)
- [Husky](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/husky.md)
- [Prettier](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/prettier.md)
- [React-Dom](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/react-dom.md)
- [React-router-dom](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/react-router-dom.md)
- [React-script](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/react-scripts.md)
- [React-toastify](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/react-toastify.md)
- [Testing](https://github.com/NeoSOFT-Technologies/mf-shell/tree/main/wiki/testing)
- [Tyescript](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/features/typescript.md)
- [rxjs](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/RxJsmdfile.md)
- [babel](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/%40babel-runtime.md)
- [webpack](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/npm_modules/webpack.md)

## Miscellaneous

- [Known Issues](https://github.com/NeoSOFT-Technologies/mf-shell/tree/main/wiki/miscellaneous/known-issues.md)
- [Git commits](https://github.com/NeoSOFT-Technologies/mf-shell/tree/main/wiki/miscellaneous/git-commits.md)
- [Installation Pretteri, Husky & Lint](https://github.com/NeoSOFT-Technologies/mf-shell/tree/main/wiki/miscellaneous/installation-pretteri-husky-lint.md)


## Trainings 
- [Concepts](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/setup/concepts.md)
- [Getting started /Installation](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/howto/getting_started.md)
- [How to create Micro-Frontend](https://github.com/NeoSOFT-Technologies/mf-shell/blob/main/wiki/howto/add_microfrontend.md)
- [Unit Test cases](https://github.com/NeoSOFT-Technologies/mf-shell/blob/mian/wiki/testing/unit-testing.md)
- [How to implement](https://github.com/NeoSOFT-Technologies/mf-shell/mian/wiki/howto/horizontal%26vertical_break.md)
- [API Factory]()

## Video Tutorials
- [Concepts](https://www.youtube.com/watch?v=w58aZjACETQ)
- [Getting started /Installation](https://www.youtube.com/watch?v=lKKsjpH09dU&t=4541s)
- [How to create components](https://www.youtube.com/watch?v=lKKsjpH09dU&t=4541s)
- [Unit Test cases](https://www.youtube.com/watch?v=lKKsjpH09dU&t=4541s)
- [How to implement](https://www.youtube.com/watch?v=s_Fs4AXsTnA)
- [API Factory]()

## Contributing To This Project

Contributions are welcome from anyone and everyone. We encourage you to review the [guiding principles for contributing](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/contribution.md)

* [Bug reports](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/contribution/bug-reports.md)
* [Feature requests](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/contribution/feature-requests.md)
* [Pull requests](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/contribution/pull-requests.md)

## Stay in touch

* Website - [https://www.neosofttech.com/](https://www.neosofttech.com/)
* Twitter - [@neosofttech](https://twitter.com/neosofttech)
* Meetup -  [https://www.meetup.com/neosoft-technologies/](https://www.meetup.com/neosoft-technologies/)
* Medium -  [https://medium.com/@neosofttech-technologies-blog](https://medium.com/@neosofttech-technologies-blog)
* GitHub - [https://github.com/NeoSOFT-Technologies](https://github.com/NeoSOFT-Technologies)
* Discord - [ReactJS](https://discord.gg/9xW5gQhQa4)