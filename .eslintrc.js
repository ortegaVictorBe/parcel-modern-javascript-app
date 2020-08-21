module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        // require file to end with single newline
        "eol-last": 2,
        // use the type-safe equality operators === and !== instead of their regular counterparts == and !=
        "eqeqeq": 1,
        // suggest to use let or const instead of var
        "no-var": 0,
        // If a variable is never modified, using the const declaration is better
        "prefer-const": 2,
        // disallow trailing spaces at the end of lines
        "no-trailing-spaces": 2,
        // disallow the space around a semicolon
        "semi-spacing": 2,
        // require Space Before Blocks
        "space-before-blocks": [2, { "keywords": "always" }],
        // require space before and after arrow function's arrow
        "arrow-spacing": [2, { "before": true, "after": true }],
        // enforces spacing after commas
        "comma-spacing": [2, { "before": false, "after": true }],
        // trailing commas in object literals
        "comma-dangle": [2, "always-multiline"],
        // disallow Use of console
        "no-console": 1,
        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": 1,
        // don't allow unused vars and functions. allow unused function params.
        "no-unused-vars": [1, { "args": "none" }],
        // semicolons must be used any place where they are valid.
        "semi": [2, "always"],
        // only allow single quotes in javascript
        "quotes": [1, "single"],
        // enforce consistent spacing inside braces (object-curly-spacing)
        "object-curly-spacing": [2, "always"],
        // disallow multiple empty lines (no-multiple-empty-lines)
        "no-multiple-empty-lines": [2, { "max": 2 }]

    }
};
