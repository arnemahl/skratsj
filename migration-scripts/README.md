# Migration scripts for Sanity

If you need to migrate data, it's nice to keep those scripts in this directory. Remember to change the projectId in [sanity.js](./sanity.js), and add your own token as described below.

## Create a file `sanityToken.js`:

```js
/*
 * Name:
 * <token name> (Read+Write)
 */
module.exports = <token>
```

Create a token for the project with read and write acces. Export it from `sanityToken.js`. (This file is ignored by git.)

## Run

Run the desired script using Node

```sh
  $ node ./projectTypes.js
```
