'use strict';

// reads the outputed rebecca.css stylesheets
// and pulls every defined class

const fs = require('fs');
const regex = /\.rb-*(\w{1,50})/gi;
const styleText = fs.readFileSync('rebecca.css').toString();
let extractedClasses = styleText.match(regex);
extractedClasses = extractedClasses.map(el => {
  return el.replace('.','');
});

console.log(extractedClasses);





