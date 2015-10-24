var vows = require('vows')
var assert = require('assert')
var harmonizer = require('../')

vows.describe('harmonizer').addBatch({
  'from intervals': function () {
    assert.deepEqual(harmonizer('1 2 3 4 5', 'D'), ['D', 'E', 'F#', 'G', 'A'])
    assert.deepEqual(harmonizer('1 2 3 4 5', 'Bb2'), ['Bb2', 'C3', 'D3', 'Eb3', 'F3'])
    assert.deepEqual(harmonizer('2 9 16', 'G3'), ['A3', 'A4', 'A5'])
  },
  'from notes': function () {
    assert.deepEqual(harmonizer('D E F G A B C', 'F'), ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'])
    assert.deepEqual(harmonizer('C2 E2 G1 B2', 'A4'), ['A4', 'C#5', 'E4', 'G#5'])
  },
  'get intervals': function () {
    assert.deepEqual(harmonizer('d e f g a b c', false), ['1P', '2M', '3m', '4P', '5P', '6M', '7m'])
  },
  'curry': function () {
    var dom7 = harmonizer('1 3 5 7b')
    assert.deepEqual(dom7('A#4'), [ 'A#4', 'C##5', 'E#5', 'G#5' ])
  },
  'invalid': function () {
    assert.deepEqual(harmonizer('1 2', null), [null, null])
    assert.deepEqual(harmonizer(null, 'C'), [])
    assert.deepEqual(harmonizer('blah blah', 'C'), [null, null])
  }
}).export(module)
