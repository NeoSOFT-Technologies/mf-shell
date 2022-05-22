# What is Module Federation?
Module Federation is a type of JavaScript architecture I invented and prototyped. Then with the help of my co-creator and the founder of Webpack — it was turned into one of the most exciting features in the Webpack 5 core (there’s some cool stuff in there, and the new API is really powerful and clean).
>I’m proud to present, a long awaited leap forward in JavaScript application architecture. Our contribution to the open-source community:
Module Federation
Module Federation allows a JavaScript application to dynamically load code from another application and  in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by the federated code,  Webpack will download the missing dependency from that federated build origin.

# Terminology
- **Module federation** the same idea as Apollo GraphQL federation — but applied to JavaScript modules. In the browser and in node.js. Universal Module Federation
- **A host**: a Webpack build that is initialized first during a page load (when the onLoad event is triggered)
- **A remote**: another Webpack build, where part of it is being consumed by a “host”
- **Bidirectional-hosts**: when a bundle or Webpack build can work as a host or as a remote. Either consuming other applications or being consumed by others — at runtime

>It’s important to note that this system is designed so that each completely standalone build/app can be in its own repository, deployed independently, and run as its own independent SPA.

These applications are all bi-directional hosts. Any application that’s loaded first, becomes a host.  As you change routes and move through an application, it loads federated modules in the same way you would implement dynamic imports. However if you were to refresh the page, whatever application first starts on that load, becomes a host.
## Example though flow diagram
![image](https://user-images.githubusercontent.com/90671869/169484296-916d14a9-578d-47e2-8c2f-97189f01f7ee.png)

> No direct link between the micro frontends
