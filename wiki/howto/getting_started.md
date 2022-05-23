# How To Guide
For getting started with the micro-frontend-boilerplate you need to follow the following steps :

`Step 1` :  Cloning the repository
```
git clone https://github.com/NeoSOFT-Technologies/mf-shell.git
```
after the successful run of thē command you will have folder name `mf-shell`

`Step 2` :  Installation of the all packages, dependences and dev-dependences. Go inside the each folder `application-shell, authentication-shell, component-shell ` and run :
```
npm install
```
-----------------------------------------------------------------------------or------------------------------------------------------------------------------

Double click on `install.sh` file

after the successful run of thē command you will have folder name `node_modules` inside every folder 

>Note : if the above command gives you the error you can force the installation by using  `npm install -f`

`Step 3` :For running the project. Go inside the each folder `application-shell, authentication-shell, component-shell ` and run : : 
```
npm start
```
after the successful run of thē command you will find app shell   output on the browser on port number `3000`

`Step 4`(optional) : Add a micro-forntend for the application by running the below command
```
npx create-mf-app
```
For more deatils [click Here]()


`Step 5` : Now you can add pages  to your project. For adding pages you need to understand the file structure for that you can refer to `README.md` file and under stand how to divide a applcation(horizontally and vertically) into micro-frontends for more info [Click Here]().

### For adding a page you have to ensure the right micro-frontend :
For Further explaination we procced with an example by adding a `DemoPage` inside `authentication-shell/src/pages/`
Location : `mf-shell/authentication-shell/src/pages`
```
📂 pages
 |- 📁 login
 |- 📁 register
 |- 📁 user

```
 

`Step 6` : Adding the folder for the page with two files in it as below

```
📂 demopage
 |- 📝 DemoPage.jsx
 |- 📝 DemoPage.css
```
## 📝 DemoPage.css
This file will contain the custom scss code for the page.
## 📝 DemoPage.jsx
This file will contain the main code and the functionality with a basic boilerplate as below
```js
import React from 'react'

export default function DemoPage() {
//logic here 
  return (
  //render part here
    <div>DemoPage</div>
  )
}
```
>Note : keep in mind about the naming convension for reference check eslint rules in `.eslintrc.json`


`Step 7` : Exposing the page through webpack.config.js
Now under plugin and inside exposes you need to add the page as an object where key is the export name and the value is the location of the page
```js
exposes: {
        "./Login": "./src/pages/login/Login.jsx",
        "./Register": "./src/pages/register/Register.jsx",
        "./Users": "./src/pages/users/Users.jsx",
        "./UserDetails": "./src/pages/users/UserDetails.jsx",
        "./Demopage": "./src/pages/demopage/Demopage.jsx",
      },
```
`Step 8` : Re-Build the application by stop the current `npm start` and re-run command
```
npm start
```
> check the change in the webpack through `http://localhost:3002/remoteEntry.js`
`Step 11` : add Routes for the page go AppRoutes.jsx andencloase that into a error bourday
location : `mf-shell/application-shell/src/AppRoutes.jsx `
```js 
const Demopage = lazy(
  () => import("authentication/Demopage")
);
.
.
.
<Route path="/" element={<HomePageLayout />}>
            <Route path="" element={<PageErrorBounday><Home /></PageErrorBounday>} />
            <Route path="users" element={<PageErrorBounday><Users /></PageErrorBounday>} />
            <Route path="users/:id" element={<PageErrorBounday><UserDetails /></PageErrorBounday>} />
            <Route path="demopage" element={<PageErrorBounday><Demopage /></PageErrorBounday>} />
          </Route>
        </Routes>
.
.
```
>for full screen layout add this outside HomePageLayout route
