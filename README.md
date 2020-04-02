# Simple file bundler
The easiest way to merge files into bundles using a single command

[Page in npm](https://www.npmjs.com/package/simple-file-bundler)

## How to install

`npm i simple-file-bundler`

## How to configure

To work, you need to create a configuration file `simple-file-bundle.config.js` in the root of the project.
This file should export an array of settings, just as in the example

```JavaScript
const path = require('path');

module.exports = [
    {
        prefix: __dirname,
        endpoint: 'dist/style.bundle.css',
        files: [
            'src/style1.css',
            'src/style2.css',
            'src/style3.css'
        ],
        separator: '\n'
    }
];
```

Each setting is an object with 4 fields.

+ `prefix` - prefix that is assigned to all files and endpoint
+ `endpoint` - file to merge files into
+ `files` - list of files for combining them
+ `separator` (*optional field*) - a line that separates between files. The default is `\n`

## How to use

You need to enter the console `npx create-bundles`