// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)`
// process - info about env where the program is being executed`

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

setTimeout(()=>{
    setInterval(()=>{
        console.log(__dirname);
    },1000);
},5000);