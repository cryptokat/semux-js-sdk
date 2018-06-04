const assert = require('assert');
const {Key, SemuxApi, SemuxApiConfiguration, Transaction} = require('semux');

assert(typeof Key === 'function');
assert(typeof SemuxApi === 'function');
assert(typeof SemuxApiConfiguration === 'function');
assert(typeof Transaction === 'function');