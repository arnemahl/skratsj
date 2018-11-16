# Sanity

Sanity is a headless CMS – basically a database for content where you can easily change the schemas (and more). You get a [content studio](#content-studio) out of the box, which you can open in the browser to edit content. Sanity also has a nice [API](#api) that you can use to query your content in other applications.

## Quick start

Here is how you can quickly create a new Sanity project, creating a CMS for your own CV, and displaying that content in your version of the [client](../client).

1. Create a new Sanity project for your CV at [manage.sanity.io](https://manage.sanity.io/). (You can let the dataset be "Public (world readable)".)
2. Search for `dyub8zvy` and replace with the _project id_ of your new project. (Your project id should be listed on the front page of your project at `manage.sanity.io/projects/<project-id>`, as well as in the URL. There is a match for `dyub8zvy` in [sanity.json](./sanity.json),
[client/src/sanity.js](../client/src/sanity.js), and in [migration-scripts/sanity.js](../migration-scripts/sanity.js)).
3. [Add sample content](#import-sample-content) to your studio

If you already started your [client](../client), just refresh [localhost:3000](http://localhost:3000) and you should now see the sample CV instead of the CV for Arne Mæhlum.

To edit the contents, you can now run the content studio [locally](#run-locally), or deploy it to [production](#online-content-studio).


# Content studio

The content studio is where you edit the content stored in your CMS.

### Install dependencies

1. Install Sanity CLI globally: `$ npm install -g @sanity/cli`
2. Install dependencies in this directory: `$ npm install`

### Add sample content

If you want, you can add some sample content to your content studio.

1. In this directory, run `$ sanity dataset import sample-CV.tar.gz production`.

* _PS: If you haven't done so already, first [install dependencies](#install-dependencies) as described above._

### Run locally

While develping, you might want to make changes to the [schemas](./schemas). Then it's handy to run the content studio locally, which will hot reload whenever you do.

1. `$ npm start`
2. Browse the content studio at [localhost:3333](http://localhost:3333).

* _PS: If you haven't done so already, first [install dependencies](#install-dependencies) as described above._

### Online content studio

To make your content studio available at `<project-name>.sanity.studio`, you need to deploy the content studio to production.

1. In this directory, run `$ sanity deploy`

* _PS: If you haven't done so already, first [install dependencies](#install-dependencies) as described above._


# API

Sanity has created their own query language, [GROQ](https://www.sanity.io/docs/how-queries-work), which resembles GraphQL. In this project, data is queried in [personStore](../client/src/pages/Person/personStore.js).
