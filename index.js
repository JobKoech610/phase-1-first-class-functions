function receivesAFunction (callback){
    callback();
}

function callBackFunction (){
console.log('hey');
}

receivesAFunction(callBackFunction);

function  returnsANamedFunction (){
    return(function oneFunction (callback){
        console.log('hello');
    })
}

function returnsAnAnonymousFunction(){
    return((function (baseNumber){
        console.log('hey2')
    }))
}