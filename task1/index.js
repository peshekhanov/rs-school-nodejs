const { crypt } = require("./caesar_crypt.js");
const path = require('path');
const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');
const { Transform } = require('stream');

console.log(crypt("aBc", 1, "decrypt"));