console.log(process.argv);

let args = process.argv;
for(i=2; i<args.length; i++){
    console.log(args[i]);
}