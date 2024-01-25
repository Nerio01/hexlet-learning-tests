import { strict as assert } from 'node:assert';
import capitalize from '../lesson-1.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('All good bro!');
