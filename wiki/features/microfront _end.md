# What are Micro Frontends?
Micro-frontend architecture is a design approach in which a front-end app is decomposed into individual, semi-independent “microapps” working loosely together.The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.

# Core Ideas behind Micro Frontends
- **Be Technology Agnostic**

    Each team should be able to choose and upgrade their stack without having to coordinate with other teams. Custom Elements are a great way to hide implementation details while providing a neutral interface to others.
- **Isolate Team Code**
 
    Don’t share a runtime, even if all teams use the same framework. Build independent apps that are self contained. Don’t rely on shared state or global variables.
- **Establish Team Prefixes**

    Agree on naming conventions where isolation is not possible yet. Namespace CSS, Events, Local Storage and Cookies to avoid collisions and clarify ownership.
- **Favor Native Browser Features over Custom APIs**

    Use Browser Events for communication instead of building a global PubSub system. If you really have to build a cross team API, try keeping it as simple as possible.
- **Build a Resilient Site**

    Your feature should be useful, even if JavaScript failed or hasn’t executed yet. Use Universal Rendering and Progressive Enhancement to improve perceived performance.
    
#  benefits of the micro-frontend pattern
- Micro-frontend architectures may be simpler, and thus easier to reason about and manage.
- Independent development teams can collaborate on a front-end app more easily.
- They can provide a means for migrating from an “old” app by having a “new” app running side by side with it.

# comparision between Monolithic application and microfrontend application 
## Monolithic application
![Monolithic application ](https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png)
## Micro Frontend application
![Micro Frontend application ](https://micro-frontends.org/ressources/diagrams/organisational/verticals-headline.png)
