function log(msg){
    console.log(msg);
}

var msg = 'Hello World';

log(msg);

let a: number = 10;
let b: boolean = true;
let c: string = 'Hello';
let d: any = 23.4;

enum Color {Red, Blue, Green};
let insideColor = Color.Red;

let message;
message = 'abc';
let storedVariable =(<string>message).endsWith('c');

//storing function values using arrow functions
let value = (param) =>{
    console.log('How are you');
}