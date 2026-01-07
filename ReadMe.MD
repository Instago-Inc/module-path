# @instago/path

Tiny URL joiner to safely stitch path segments without duplicate slashes.

- Version: 1.0.0
- Entry: index.js
- Exports: `{ joinURL }`
- Dependencies: none

## Example
```js
const { joinURL } = require('path@1.0.0');

joinURL('https://example.com/', '/folder/file'); // -> https://example.com/folder/file
```
