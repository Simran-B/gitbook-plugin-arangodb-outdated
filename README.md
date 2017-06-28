# gitbook-plugin-arangodb-outdated

This gitbook plugin adds an obsolescence note at the top of each page on the website output.
The message is currently hardcoded for the ArangoDB docs.

## Usage

Add the plugin to your `book.json`, and optionally configure it. default values as example:

    ```js
    {
      "gitbook": "3.2.2",
      "plugins": ["arangodb-outdated"]
    }
    ```
