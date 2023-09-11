//var name = require("sillyname")           // CJS        type="commonjs"

import name from 'sillyname';               // ES module  type="module"

import hero from 'superheroes';


const myname=name()

console.log(`Hello, my name is ${myname}`)

console.log(`I am ${hero.random()}!`)







