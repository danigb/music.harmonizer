'use strict'

var gamut = require('music.gamut')
var operator = require('music.pitch.operator')
var notation = require('music.notation')

/**
 * Harmonize a note
 *
 * This function is currified, so it can be partially applied
 *
 * @param {String|Array} source - the intervals or notes
 * @param {String|Array} note - the note to harmonize (as string or array notation)
 * @return {Array} the list of notes
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
    return intervals.map(operator.addTo(t))
  }, intervals)
}

function toIntervals (notes) {
  var t = notes[0]
  return notes.map(function (n) {
    return n && n.length !== 3 ? operator.subtract(t, n) : n
  })
}

module.exports = harmonizer
