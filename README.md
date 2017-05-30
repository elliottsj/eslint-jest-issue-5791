# eslint-jest-issue

[![Greenkeeper badge](https://badges.greenkeeper.io/elliottsj/eslint-jest-issue-5791.svg)](https://greenkeeper.io/)

Demonstration of https://github.com/eslint/eslint/issues/5791.

Run `npm test`, and you should see output similar to this:

```
> eslint-jest-issue@1.0.0 test /Users/spencerelliott/Sites/elliottsj/eslint-jest-issue
> jest

Using Jest CLI v0.10.0, jasmine2
 FAIL  src/__tests__/index-test.js
● Runtime Error
TypeError: Cannot read property 'concat' of undefined
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/eslint/lib/util/module-resolver.js:28:30)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/eslint/lib/config/config-file.js:23:22)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/eslint/lib/config.js:17:18)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/eslint/lib/cli-engine.js:31:14)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/eslint/lib/api.js:10:16)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/src/index.js:1:136)
    at Object.<anonymous> (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/src/__tests__/index-test.js:3:12)
    at jasmine2 (/Users/spencerelliott/Sites/elliottsj/eslint-jest-issue/node_modules/jest-jasmine2/src/index.js:154:16)
```

Try the branch [eslint-2.5](https://github.com/elliottsj/eslint-jest-issue/tree/eslint-2.5) for a successful `npm test` using eslint@2.5.3
