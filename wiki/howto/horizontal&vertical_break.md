# How to scale frontend with micro frontends architecture?
To have control over the team's code and how the work between the teams should be allocated to have a well-functioning micro frontends architecture, we must know and understand the best way to split the application's codebase first. So the codebase could be split between the teams according to the vertical slices of business functionality instead of the technical capabilities. In a vertical split, we prioritize business domains and assign each domain to different teams. Since responsibility for the entire interface would be with a single team, it'll gradually help the teams to gain more expertise in that specific business domain.

There are many ways to implement the micro frontend architecture, and the method you choose depends on the application's needs.
## Server-side composition
With server-side composition, a service usually sits between the browser and the application servers. One of the key benefits of using server-side composition is that the page that reaches the customer's browser is already fully assembled before. The micro-frontends are cached at CDN (Content Delivery Network) and then served to the client or the user at the build time. The server composes the micro frontends in a view that is later served at build time, retrieves micro frontends, and organizes and assembles the final page. This helps increase page load speed which is significantly higher than the pure client-side integration techniques. Also, this increases the robustness of the application.
## Build-time integration
The build time integration could be done using web components or any component-driven frameworks. So one of the approaches is to publish the micro frontends as a package and then use a container application to indulge them as the library dependencies. So this integrates the components at the build time and helps keep a fully decoupled build pipeline for each of the frontends. This helps in achieving effective collaboration and code reuse.

If we look at the package.json of the container application that uses the micro frontends as a package.
## Runtime via JavaScript
The runtime Integration approach is bundling and configuring the front-end's micro frontends at Runtime. A package.json is not used to bundle the individual micro frontends. One way to implement runtime integration is via JavaScript.

Runtime integration via Javascript is the most flexible approach the teams use for micro-frontend implementation. In this approach, each micro frontend is incorporated into the page using a `<script>` tag. The script tag doesn't render anything immediately upon load, but they attach global functions as entry points. The container application then determines which micro frontend should be mounted and calls the relevant function to tell a micro frontend when and where to render itself.
 
## Runtime via web components
Another alternative to the approach mentioned above for runtime integration is using web components. In runtime integration via web components, each micro frontend defines an HTML element for the container to represent an instance instead of defining a global function called by the container. Web Components are isolated components that can be (re)used in HTML pages and web applications. These are also known as custom elements.

## Runtime via iframes
One of the simplest ways to compose the application in the browser and build pages from autonomous sub-pages is the Runtime integration via iframes. Developers can get better isolation in global variables and styling with iframes. Iframes are the HTML documents that could be embedded inside another HTML document. SO they make it easy to build pages from independent sub-pages. It has been shared that Spotify uses Iframes to stitch together different parts of the view.

