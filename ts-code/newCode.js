function log(msg) {
    console.log(msg);
}
var msg = 'Hello World';
log(msg);
var a = 10;
var b = true;
var c = 'Hello';
var d = 23.4;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var insideColor = Color.Red;
var message;
message = 'abc';
var storedVariable = message.endsWith('c');
//storing function values using arrow functions
var value = function (param) {
    console.log('How are you');
};
