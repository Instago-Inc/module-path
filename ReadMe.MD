# module/path - V8 module

Join two URL segments safely without worrying about duplicate slashes. This module is intentionally small and focused so you can keep your flow code clean and readable.

It runs in the hgi-v8 runtime used by Instago workflows. Learn more at https://instago.ai.

## Technical reference

### Exports
- `joinURL(a, b)` -> string

### Usage
```js
const { joinURL } = require('path@latest');
```

### Configuration
No configuration or environment variables.

### Examples
```js
const { joinURL } = require('path@latest');

const url = joinURL('https://example.com/', '/folder/file');
// url: 'https://example.com/folder/file'
```
