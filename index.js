// @flow
const printAST = require('ast-pretty-print');

function log(value /*: Object */) {
  console.log(printAST(value, true));
}

module.exports = log;
