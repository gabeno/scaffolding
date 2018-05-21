/**
 *
 * Initialize a static site
 */

// Dependencies
const fs = require('fs');
const path = require('path');

// code
const baseDir = __dirname; // keep changing depending on the location of this script
const location = path.join(__dirname, process.argv[2]) || baseDir;
console.log(`Creating directories in ${location}`);

/**
 * Function that creates requisite directories for the site
 *
 * @params:
 * @return:
 *
 */
const mkdirs = () => {
  // infers hierarchy
  /*
  const dirNames = [
    src,
    site,
    public: {
      images,
      css,
      javascript*/
  const _d = {name: 'd', children: true, childNames: ['1', '2', '3']};
};


// exports
