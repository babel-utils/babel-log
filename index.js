// @flow
const printAST = require('ast-pretty-print');
const ansiStyles = require('ansi-styles');
const util = require('util');

const Node = ansiStyles.dim.open + 'Node: ' + ansiStyles.dim.close;
const NodePath = ansiStyles.dim.open + 'NodePath: ' + ansiStyles.dim.close;

function format(value /*: Object */, colors /*: boolean */ = false) {
  if (value.type) {
    return Node + printAST(value, colors);
  } else if (value.node) {
    return NodePath + printAST(value.node, colors);
  } else {
    return util.inspect(value, {colors});
  }
}

function log(value /*: Object */) {
  console.log(format(value, true));
}

exports.format = format;
exports.log = log;
