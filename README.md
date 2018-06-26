# gitbook-plugin-arangodb-outdated

This gitbook plugin adds an obsolescence note at the top of each page for the website output.
The message is hardcoded for the ArangoDB docs.

## Usage

Add the plugin and its dependency to your `book.json`:

```js
{
  "gitbook": "3.2.2",
  "plugins": [
    "callouts@git+https://github.com/Simran-B/gitbook-plugin-callouts.git",
    "arangodb-outdated@git+https://github.com/Simran-B/gitbook-plugin-arangodb-outdated.git"
  ]
}
```
