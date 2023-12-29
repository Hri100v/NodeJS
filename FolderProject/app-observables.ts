import { Observable, Observer } from "rx";

let observable = Observable.create((o: Observer<number>) => {
    setTimeout(() => {
        o.onNext(1);
        setTimeout(() => {
            o.onNext(2);
            setTimeout(() => {
                o.onNext(3);
                setTimeout(() => {
                    o.onNext(4);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});

observable.subscribe((n: number) => {
    console.log(`Current number is ${n}`);
});


// const wait = Observable.fromCallback<number, number>(setTimeout);
// const wait = Observable.fromCallback<number>(setTimeout);
// wait(1000)
//     .subscribe(() => {
//         console.log(1001);        
//     });


var myAsynchronousFunction = function (name, callback) {
    setTimeout(() => {
        callback(null, "Finish computation for " + name);     
    }, 1000);    
};
// Test source code
myAsynchronousFunction("John Doe", (err, result) => { console.log(result) });

var myObservableFromCallback = Observable.fromCallback(myAsynchronousFunction);
// var myObservableFromCallback = Observable.fromCallback(myAsynchronousFunction, null, (err, result) => result);
myObservableFromCallback("John Doe II")
    .subscribe(
        result => console.log(result),
        error => console.error(error),
        () => console.log("Done!")
    );


let array = [5, 10, 15, 25];
// let obsArr = Observable.from(array); // work too
let obsArr = Observable.fromArray(array);
obsArr.subscribe(x => console.log(x));


// Convert the Promise returned by Fetch to an Observable
// var result = Observable.fromPromise(fetch('http://myserver.com/'));
// result.subscribe(x => console.log(x), e => console.error(e));







