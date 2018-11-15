# Client

This directory contains the code for the web app. The project is set up with [create-react-app](https://github.com/facebook/create-react-app), uses [styled components](https://www.styled-components.com/) for styling and [@sanity/client](https://www.npmjs.com/package/@sanity/client) to fetch content from the Sanity API.

To get started, run the following commands in this directory:

1. `$ yarn`
2. `$ yarn start`

`yarn start` shoud automatically open [localhost:3000](http://localhost:3000) in a new browser tab, and hot reload whenever you make changes to the source code (in [src/](./src/)).

If you haven't gone through the setup in the [sanity](../sanity) directory yet, [localhost:3000](http://localhost:3000) should show the CV for Arne Mæhlum.


## Host with Firebase Hosting

If you want to host your web app online, there are many ways to do it. I have used [Firebase Hosting](https://firebase.google.com/docs/hosting/). It is free and pretty easy to get started with.
