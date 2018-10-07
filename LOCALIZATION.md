# Localization in Skratsj

Skratsj comes with support for English and Norwegian, though you can [add more languages](#manage-languages) or remove language support if you don't need it.

The implementation is based on the suggested way of adding [localization in the Sanity documentation](https://www.sanity.io/docs/content-studio/localization).

# Manage languages

To change the language support, you need to do a few changes. The quick changes are to your code; your schemas and in your client. When adding a new language you'll also want to update the content in your content studio, which depending on the amount of text to write may take longer.

## 1. Updating schemas

In the [Sanity schemas](./sanity/schemas) directory there are two schemas called [localeString.js](sanity/schemas/localeString.js) and [localeText.js](sanity/schemas/localeText.js).

You will see that `localeString` and `localeText` have two fields with title `English` and `Norwegian`. You can add, remove or change fields to manage which languages are supported in your Content Studio.

Note that changing the schema only affects how the Content Studio _relates_ to the data in the dataset, i.e. how it presents it and what it allows you to input. Changing the schema does _not_ change the content that exists in your dataset.

## 2. Updating data through Content Studio

After updating schemas, you can edit the content in your dataset through your [content studio](./sanity/README.md#content-studio) ([localhost:3333](http://localhost:3333)). (Alternatively, you can [migrate](./migration-scripts/README.md) data using scripts if you have altered the data structure or renamed/removed fields.)

## 3. Updating client

The client relates to localization in three ways, as explained in the following sections.

### I) Selecting language

Firstly, there is a [LanguageSelector](./client/src/pages/Person/LanguageSelector/LanguageSelector.js) component that lets the user select between the available languages. Out of the box, Skratsj links to [skratsj.com](https://skratsj.com) to get English and [skrætsj.no](https://skrætsj.no) to get Norwegian. In [util/localize.js](./client/src/util/localize.js) the `preferredLanguage` is decided based on the current URL.

Update [LanguageSelector](./client/src/pages/Person/LanguageSelector/LanguageSelector.js) and [util/localize.js](./client/src/util/localize.js) to suit your needs.

### II) Querying data

We use the currently selected language when we [query localized data](https://www.sanity.io/docs/localization#querying-localized-data) from Sanity. This is done in [personStore.js](./client/src/pages/Person/personStore.js#L17)), see snipped below.

```js
const localized = {
  english: fieldName => `"${fieldName}": ${fieldName}.en`,
  norwegian: fieldName => `"${fieldName}": coalesce(${fieldName}.nb, ${fieldName}.en)`,
}[preferredLanguage];

function apiCall() {
  return client.fetch(
    `*[_type == 'person'] | [0] {
      name,
      image,
      ${localized('title')},
      ${localized('introduction')},
```

We create a function `localized`, which is different depending on the value of `preferredLanguage` which can be either `"english"` or `"norwegian"`. We then use the `localized` function to build the query, see examples on the last two lines of the snippet.

* If `selectedLanguage` is `"english"`, `${localized('title')}` inlines `"title": title.en` into the query.
* If `selectedLanguage` is `"norwegian"`, `${localized('title')}` inlines `"title": coalesce(title.nb, title.en)` into the query.

### III) Hard-coded titles

The titles for the various sections of the CV are hard-coded inline. If you search in the [client/src/](./client/src/) directory for `}[preferredLanguage]}` you will find 14 matches across 10 files, where you'll need to add support for any new languages you add.
