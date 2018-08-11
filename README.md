# webpack4issue
webpack4 function inject optimization error

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

