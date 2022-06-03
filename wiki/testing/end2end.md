# End-to-End Testing
E2E testing involves techniques that simulate an actual user of an application. By replicating the actions a user would take, the test helps evaluate whether the results comply with the requirements or expected outcome. Examples include testing a user experience such as: Paying for a product or service on a website

## cypress
  Cypress is a great tool for those who want to create useful end to end tests with very little effort. It also makes it very easy to debug issues with its live preview, snapshots, videos and screenshots. It does fall down in certain areas, and may not be the best solution for certain projects.
## Setting up Cypress
To get started, we’ll create a new project and set up Cypress. Initialize a new project by running the following commands:
```
$ mkdir cypress-tutorial
$ cd cypress-tutorial
$ npm init -y
```
Next, install the Cypress package as a development dependency
```
$ npm install --save-dev cypress
```
Open the package.json file in the root of your project and update the scripts property to the following:
```json
"scripts": {
    "test": "npx cypress run",
    "cypress:open": "npx cypress open"
  },

```
Save and close the file, then in the root folder of your project, create a file called cypress.json, which is the configuration file where you can customize Cypress’ behavior for this specific project. Add the following code to the file and save it:
```
{ "chromeWebSecurity": false }
```
We’ll explore the command above in detail later on in the tutorial.
## Writing Cypress end-to-end tests
For those of us who follow the Agile methodology, user stories usually follow a format that looks similar to the following:
>"When a user takes a specific action, then the user should see this."

To determine how to write an E2E test for that specific story, you’ll simulate taking the action the user is expected to take through the test, then assert that the resulting application state matches your expectations. When testing frontend applications, that process can usually be broken down into the following steps:

1. Visit a page on your app
2. Query an element on that page, i.e., buttons, dropdowns, etc.
3. Interact with the element, i.e., clicking on buttons, dragging divs, or filling inputs, etc.
4. Confirm that the new state is correct after the interaction

We’ll write three tests to assert that we can perform certain actions on Wikipedia by mimicking a user’s actions. For each test, we’ll write a user story before writing the actual test.

Although for the sake of this tutorial, we’re using Cypress on a public website, it’s not meant to be used on websites you don’t own.

Before we begin writing the tests, you need to create a special folder to hold your Cypress tests. In the root of your project, run the following commands:

```
$ mkdir cypress && cd cypress
$ mkdir integration && cd integration
```
## Test one: A user performs a search from the homepage

When a user visits the homepage, types in the search box, and clicks on the search icon, then the user should see a new page populated with the results from their search term.

The user story for this example is pretty straightforward, simply asserting the correct behavior for a search action on the homepage by a hypothetical user. Let’s write the test for it.

Inside the cypress/integration folder, create a new test file called homepage_search_spec.js and open it in your favorite text editor:

```js
describe('Testing Wikipedia', () => {
  it('I can search for content', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get("input[type='search']").type('Leo Panthera');
    cy.get("button[type='submit']").click();
    cy.contains('Search results');
    cy.contains('Panthera leo leo');
  });
});
```
Let’s go through the test and see how it matches the user story we defined earlier.

- Line three: Visit a page on your app
- Line four: Query an element on that page and interact with it
- Line five: Query an element on that page and interact with it
- Line six: Confirm that the new state after the interaction is correct
- Line seven: Confirm that the new state after the interaction is correct

A majority of your E2E tests will follow the format above. You don’t need to care about how the app perfoms these actions in the background, instead, all you really need to do is specify the actions that should be performed. The straightforward Cypress syntax makes it easy even for non-programmers to read and understand your tests.

Now, let’s go ahead run the test. Return to your your terminal and run the npm test command. Cypress will look inside the cypress/integration folder and run all the tests there:
![image](https://user-images.githubusercontent.com/90671869/171810185-44513604-145d-4e80-a589-669dbd002dcf.png)
Your terminal isn’t the only way to run your tests. Alternately, you can run them in the browser, where you’ll get a real-time view of the testing process as Cypress executes it according to your specifications.

In your terminal, run the command below:
```
npm run cypress:open
```
A window should pop up that looks like the image below:
![image](https://user-images.githubusercontent.com/90671869/171810520-6065e733-c92b-4383-b52d-d41d30fb0897.png)


```
$ npm test -- --spec .\cypress\integration\homepage_search_definition_spec.js
```

![image](https://user-images.githubusercontent.com/90671869/171810777-7baecf3c-23c5-48e1-b05a-37409953a2ee.png)
