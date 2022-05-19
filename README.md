# Micro Frontend Boilerplate
Skeleton for Micro Frontend Apps written in JavaScript (with integrated ESLint, Prettier, and Husky)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the Micro Frontend concept and model federation architecture.
### Purpose

Our main purpose with this Skeleton is to start Micro frontend application with model federation architecture.

Try it!! I am happy to hear your feedback or any kind of new features.
### Common Features

- Quick start
- Integrated eslint, prettier and husky
- Integrated rxjs
- Based on JavaScript Syntax
- Production Ready Skeleton<br/><br/>

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
docker-compose up
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

### Module/Feature
- [Eslint](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/eslint.md)
- [Axios](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/axios.md)
- [Env](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/features/env.md)
- [Husky](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/husky.md)
- [Prettier](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/prettier.md)
- [React-Dom](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/react-dom.md)
- [React-router-dom](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/react-router-dom.md)
- [React-toastify](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/react-toastify.md)
- [rxjs](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/modules/react-toastify.md)
- 
