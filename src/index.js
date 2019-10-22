import sayHello from './hello';

// #!if version == "dom"
document.getElementById('root').innerHTML = sayHello();
// #!else
console.log(sayHello());
// #!endif

