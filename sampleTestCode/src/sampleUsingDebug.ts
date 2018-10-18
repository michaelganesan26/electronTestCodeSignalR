/*
    Description: Test the debug script

    Created by: Michael Ganesan
    Date: 10/17/2018
    Note: Test the debug npm module to generate errors

*/
import *  as colors from 'colors';

console.log(colors.magenta("Why is your code not running, Michael!"));

var a = require("debug")('worker:a');
var b = require("debug")('worker:b');


function work(){

  a("doing lots of interesting work!");
  setTimeout(work,Math.random() * 1000);

}

work();

function workb(){
  b("doing some work");
  setTimeout(workb,Math.random()*1000);

}

workb();






