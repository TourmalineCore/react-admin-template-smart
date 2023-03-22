# react-admin-template-smart
React Admin Template Smart is a versatile template with modern approaches.

It consists of:

* ErrorBoundary
* React-Query
* Skeleton Loader


## Common commands

### `npm ci`

Installs modules guided by the package-lock.json lock file. This allows you to create reproducible builds.: you get exactly what you expect with each installation.

### `npm start`

Run the application in development mode.
Open http://localhost:5173 / to view it in your browser.

The page will automatically reload after any changes to the code.

### `npm test` 
Runs the ava test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run cypress:run`
To work properly, you must first run the command `npm start`.

This command will find all the tests in the project, after it will run all test and output the result to the terminal.

### `npm run cypress:open` 
This command will open the Cypress launchpad where you can choose which testing you want to do.

Here's what the launchpad looks like:
<img src="https://docs.cypress.io/img/guides/core-concepts/cypress-app/the-launchpad.png" alt="cypress board" width="80%"/>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run preview`

The command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

## What we have

### `Dockerfile`
In our projects we use [Docker](https://docs.docker.com/build/) to publish our website and the first thing we need to get it right is Dockerfile.

This is a pre-file, a set of instructions which is needed to write the image. It describes what should be in the image and what commands, dependencies and processes it will contain. 

When you run the docker run command, the program first checks if the required image is in the local storage.

## ⚡ Our list of suggestions for improving the template:

1. ✅ Common commands
2. ✅ Dockerfile
3. ✅ Env vars build 
4. ❌ Helm chart
5. ❌ Mock backend
6. ❌ Demo this template