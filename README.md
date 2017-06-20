# gitbook-plugin-localized-header

This gitbook plugin allows adding a custom header to each page on the website output.
Requires `gitbook >=2.6.7` (should also run on 2.5.x, not tested).

The header content is read from a markdown file in each (language) books' content directory (by default `HEADER.md`), so translated content for multi-language is possible.

Custom styles may be applied on the css selector `.localized-header`.

I wrote these ~40 lines, as other header-plugins were removed or insufficient for my needs.
Hoping headers will become functionality of the gitbook core.

## usage

1. add the plugin to your `book.json`, and optionally configure it. default values as example:

    ```js
    {
      "gitbook": "3.2.2",
      "plugins": ["localized-header"],
      "localized-header": {
        "hline": true,            // whether to include an horizontal line above the header
        "filename": "./HEADER.md" // may also be a relative path to the book root
      }
    }
    ```

2. run `gitbook install`

3. fill the header file(s)

    ```md
    *content published under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)*
    ```
    
## license

LGPL-3.0
