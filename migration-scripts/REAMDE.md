# Migration scripts for Sanity

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
