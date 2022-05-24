# Concepts

## 1. Component
### 1. Class Component
   
      a.constructor
      b.state and props
      c.lifecyle methods(componentDidMount,componentDidUpdate,etc)
      d.render
      e.export class component
   
### 2. Functional Component
   
      a. props
      b. useState
      c. useEffect
      d. useRef
      e. return
      f. export function component
   
## 2. React Hooks 
   
      a. useState (react)
      b. useref (react)
      c. useEffect (react)
      d. useLocation (react-router-dom)
      e. useNavigate (react-router-dom)
      f. useParams (react-router-dom)
      g. useSelector (react-redux)
      h. useDispatch (react-redux)
   


## 3. Redux Toolkit
The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store setup, what your state contains, and how you want to build your reducers.

## 4. React-Router-Dom

   a.BrowserRouter      (a component which works as a wrapper for other components which use routing in react)
   
   b.Routes       (a Routes component is similar to a "switch" statement in many programming languages ,    
                  it switches between components according to route path, hence it encapsulates all components 
                  which need to be switched between each other.)
                  
   c.Route         (it defines a particular path for a component to be displayed in react-dom)
   
   e.useLocation   (hook used to access location and data passed through previous component)
   
   f.useNavigate   (hook used to navigate )
   
   g.Navigate (a component used to navigate through react-dom)
   
   h.Link (a component used to navigate through react-dom)

## 5. React-Bootstrap

   a.React-Bootstrap Components     
   b.inline styling   
   c.bootstrap classes

## 6. Bootstrap 

   a.bootstrap components   
   b.bootstrap classes


## 7. Regular Expression
   
   a.create a regular expression   
   b.test data against regular
   

## 8. Axios

   a.GET,POST,PUT,DELETE requests  
   b.headers      
   c.params   
   d.query   
   e.request body
## 9. Axjs

   a.value 
   b.next    
   c.subscribe   
   d.unsubscribe  
## 10.Css

   Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## 11. React-toastify :-
   The React-Toastify package allows the developer to show toasts to display a message and piece of information to the user for a certain period of time.

## 13. Environmental files :- 
   (these files are used to store sensitive data like certain tokens and PORT numbers, connection links ,etc.)
   Apart from the main env file there are further segregation such as :-
   a. env.production - Used to create the environment variables in production phase.
   b. env.staging - Used to create the environment variables in staging phase.
   c. env.test - Used to create the environment variables in Testing phase.
   d. env.development - Used to create the environment variables in Development phase, if not present it will by default use the `.env` file present. 


## NPM Modules


1. "axios": Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library 
            in a small package with a very extensible interface.<br/>
   package-link :- https://www.npmjs.com/package/axios<br/>
   docs :- https://axios-http.com/docs/intro

2. "bootstrap": Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular 
                front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful JavaScript plugins.<br/>
   package-link :- https://www.npmjs.com/package/bootstrap<br/>
   docs :- https://getbootstrap.com/docs/5.1/getting-started/introduction/<br/>


3. "react": The react package contains only the functionality necessary to define React components. It is typically used together
            with a React renderer like react-dom for the web, or react-native for the native environments.<br/>
   package-link :- https://www.npmjs.com/package/react<br/>
   docs :- https://reactjs.org/<br/>

3. "react-bootstrap": React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component,
                   without unneeded dependencies like jQuery.<br/>
   package-link :- https://www.npmjs.com/package/react-bootstrap<br/>
   docs :- https://react-bootstrap.github.io/<br/>

5. "react-dom": This package serves as the entry point to the DOM and server renderers for React. 
               It is intended to be paired with the generic React package, which is shipped as react to npm.<br/>
   package-link :- https://www.npmjs.com/package/react-dom<br/>
   docs :- https://reactjs.org/<br/>



6. "react-router-dom": React Router is a fully-featured client and server-side routing library for React, 
                     a JavaScript library for building user interfaces. React Router runs anywhere React runs                     
                     on the web, on the server with node.js, and on React Native.<br/>
   package-link :- https://www.npmjs.com/package/react-router-dom<br/>
   docs :- https://github.com/remix-run/react-router#readme , https://reactrouter.com/<br/>

7. "react-scripts": This package includes scripts and configuration used by Create React App.
                     Please refer to its documentation<br/>
   package-link :- https://www.npmjs.com/package/react-scripts<br/>
   docs :- https://create-react-app.dev/<br/>

8. "react-toastify": React-Toastify allows you to add notifications to your app with ease.<br/>
   package-link :- https://www.npmjs.com/package/react-toastify<br/>
   docs :- https://github.com/fkhadra/react-toastify#readme, https://fkhadra.github.io/react-toastify/introduction/<br/>


9. "rxjs" : Reactive Extensions Library for JavaScript. This is a rewrite of Reactive-Extensions/RxJS and is the latest production-ready version of RxJS. This rewrite is meant to have better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.<br/>
package-link :- https://www.npmjs.com/package/rxjs<br/>
docs :- https://github.com/reactivex/rxjs/<br/>

10. "babel" :Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
- Source code transformations (codemods)
package-link :- https://www.npmjs.com/package/@babel/runtime<br/>
docs :- https://github.com/babel/babel<br/>

11. "webpack" : Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.<br/>
package-link :- https://www.npmjs.com/package/webpack<br/>
docs :- https://github.com/webpack/webpack<br/>