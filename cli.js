#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

function bundle(prefix, endPoint, files, separator= '\n') {
    const filesFullPaths = files.map(fileName => path.join(prefix, fileName));
    const endPointFullPath = path.join(prefix, endPoint);

    const separatedResult = [];

    filesFullPaths.forEach(fileName => {
        separatedResult.push(fs.readFileSync(fileName));
    });

    const resultFileData = separatedResult.join(separator);

    fs.writeFileSync(endPointFullPath, resultFileData);
}

function bundleAll(configPath){
    const bundleConfigs = require(configPath);
    bundleConfigs.forEach(config => {
        bundle(
            config.prefix,
            config.endpoint,
            config.files
        )
    });
}

function isPathIsNodeModules() {
    return path.join(__dirname, '..').endsWith('node_modules')
}

function run() {
    const configPath =  isPathIsNodeModules()
        ? path.join(__dirname, '../..', 'simple-file-bundle.config')
        : path.join(__dirname, 'simple-file-bundle.config');

    bundleAll(configPath);
}

run();