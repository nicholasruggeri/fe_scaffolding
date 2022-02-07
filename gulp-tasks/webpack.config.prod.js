const path = require('path');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, '../dist/assets/js'),
    },
};
