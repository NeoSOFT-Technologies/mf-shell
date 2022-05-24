# Micro-Frontend 
A microfrontend is a microservice that exists within a browser.

Microfrontends are sections of your UI, often consisting of dozens of components, that use frameworks like React, Vue, and Angular to render their components. Each microfrontend can be managed by a different team and may be implemented using its own framework. It is practical and suggested to use just one framework for all your microfrontends, although you may add additional frameworks when migrating or when experimenting.

# Step to create a Micro-frontend
### `Step 1` : open Command prompt and run the command 
```
npx create-mf-app
```
>Before add microfrontend understand process of dividing application horizontally and vertically [click here]() to know more

### `Step 2` : write host name

output : 

![image](https://user-images.githubusercontent.com/90671869/169710645-9cfb2712-ef03-4a9e-8b45-700fe7c90832.png)

### `Step 3` : choose Project Type

output : 
![image](https://user-images.githubusercontent.com/90671869/169710674-e23308c1-62e7-4584-9113-088081e59ac0.png)

### `Step 4` : write the port number

output : 
![image](https://user-images.githubusercontent.com/90671869/169710695-7f5840e8-6dbe-4430-baa8-4e1ef9971e96.png)
>port number should be differnet form app-shell and other micro frontends

### `Step 5` : choose Framework

output : 
![image](https://user-images.githubusercontent.com/90671869/169710732-cbe3928a-a601-438a-83c4-3ec2bf3a61bf.png)

### `Step 6` : choose language

output : 
![image](https://user-images.githubusercontent.com/90671869/169710750-0505a003-e24e-472e-b342-fc1a6da50dde.png)

### `Step 7` : choose CSS

output : 
![image](https://user-images.githubusercontent.com/90671869/169710766-f87ab625-79a1-4777-b6de-ea5fb4f847a1.png)

### `Step 8` : go inside the folder that is create in this case `demo` and install the dependences then run micro-frontend

output : 
![image](https://user-images.githubusercontent.com/90671869/169710881-e3855fad-2026-4d61-84d3-988e1a5e7f0a.png)

### `Step 9` : Adding the micro-frontend to the App-shell

location : `mf-shell/application-shell/webpack.config.js` 

 open `webpack.config.js` and under plugin and inside remotes add the micro-frontend
 ```js
  remotes: {
        application: "application_shell@http://localhost:3000/remoteEntry.js",
        component: "component_shell@http://localhost:3001/remoteEntry.js",
        authentication: "authentication_shell@http://localhost:3002/remoteEntry.js"
        demo: "demo@http://localhost:1234/remoteEntry.js"
      },
 ```
### `Step 10` : re-run the application shell
```
npm start
```
