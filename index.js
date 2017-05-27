// @flow
const printAST = require('ast-pretty-print');
const ansiStyles = require('ansi-styles');
const util = require('util');

function prefix(str, colors) {
  let res = '';
  if (colors) res += ansiStyles.dim.open;
  res += str + ': ';
  if (colors) res += ansiStyles.dim.close;
  return res;
}

function format(value /*: Object */, colors /*: boolean */ = false) {
  if (value.node) {
    return prefix('NodePath', colors) + printAST(value.node, colors);
  } else if (value.type) {
    return prefix('Node', colors) + printAST(value, colors);
  } else {
    return util.inspect(value, {colors});
  }
}

function log(value /*: Object */) {
  console.log(format(value, true));
}

exports.format = format;
exports.log = log;
