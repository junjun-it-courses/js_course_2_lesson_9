let obj = {
    name: 'Vova',
    age: 10,
    hasChildren: true
}

function clone(arg) {
    if(typeof arg !== 'object' || arg === null) return 'Error 1';
    if( Object.keys( arg ).length === 0) return 'Error 2';

    const result = {};

    for(let key in arg) {
        result[key] = arg[key];
    }

    return typeof result === 'object' ? result : null;

}

clone(obj)
// console.log();