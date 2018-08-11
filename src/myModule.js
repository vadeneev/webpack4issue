export const add = () => {
    init();
    console.log('ADD');
}

function init() {
    console.log('INIT');
    init = () => {};
}