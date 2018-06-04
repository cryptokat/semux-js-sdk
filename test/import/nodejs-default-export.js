const assert = require('assert');
const Semux = require('semux');

assert(typeof Semux.Key === 'function');
assert(typeof Semux.SemuxApi === 'function');
assert(typeof Semux.SemuxApiConfiguration === 'function');
assert(typeof Semux.Transaction === 'function');
