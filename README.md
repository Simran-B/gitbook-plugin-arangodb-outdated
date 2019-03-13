# gitbook-plugin-arangodb-outdated

This gitbook plugin adds an obsolescence note at the top of each page for the website output.
The message is (mostly) hardcoded for the ArangoDB docs.

## Usage

Add the plugin and its dependency to your `book.json`:

```json
{
  "gitbook": "3.2.2",
  "plugins": [
    "callouts@git+https://github.com/Simran-B/gitbook-plugin-callouts.git",
    "arangodb-outdated@git+https://github.com/Simran-B/gitbook-plugin-arangodb-outdated.git"
  ]
}
```

## Configuration

`version` and `pluginsConfig.arangodb-outdated.eolDate` can optionally be supplied:

```js
{
  "version": "v3.5.0-devel" // 'v3.5' is used
  "pluginsConfig": {
    "arangodb-outdated": {
      "eolDate": "2019-03-31" // End of Life date as ISO 8601 string
    }
  }
}
```
