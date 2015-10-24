'use strict'

var gamut = require('music.gamut')
var operator = require('music.operator')
var notation = require('music.notation')

/**
 * Harmonize a note
 *
 * This function is currified, so it can be partially applied
 *
 * @param {String|Array<String>|Array<Array<Integer>>} source - the intervals or notes
 * @param {String|Array<Integer>} note - the note to harmonize
 * @return {Array<String>|Array<Array<Integer>>} the list of notes
 *
 * @example
 * harmonize('1 2 3 4', 'D') // => ['D', 'E', 'F#', 'G']
 * harmonize('d e f g a', 'g') // => ['G', 'A', 'Bb', 'C', 'D']
 * harmonize('d e f g a b c', false) // => ['1P', '2M', '3m', '4P', '5P', '6M', '7m']
 */
function harmonizer (intervals, tonic) {
  if (arguments.length === 1) return function (t) { return harmonizer(intervals, t) }

  return gamut.apply(function (g) {
    var intervals = toIntervals(g)
    if (tonic === false) return intervals
    var t = notation.arr(tonic)
    return intervals.map(function (i) { return operator.add(i, t) })
  }, intervals)
}

function toIntervals (notes) {
  var t = notes[0]
  return notes.map(function (n) {
    return n && n.length !== 3 ? operator.subtract(t, n) : n
  })
}

module.exports = harmonizer
