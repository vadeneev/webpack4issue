# webpack4issue
webpack4 Self-Defining Function inject optimization error
## known issue: https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/264
solution:

```javascript
optimization:
            minimizer: [
               
                new UglifyJsPlugin({
                    parallel: true,  // Webpack default
                    cache: true      // Webpack default
                    uglifyOptions: {
                        compress: { inline:false },
                    },
                })
            ],
```
issue description:

```javascript
export const add = () => {
    init();
    console.log('ADD');
}

function init() {
    console.log('INIT');
    init = () => {};
}
```

init expected to run only once (as it was with webpack 3)

after migration to webpack4 init runs every time you call add() in production mode

current output with webpack4:

```javascript
INIT
ADD
INIT
ADD
INIT
ADD
```
expected:
```javascript
INIT
ADD
ADD
ADD
```
