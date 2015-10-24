'use strict'

var gamut = require('music.gamut')
var operator = require('music.operator')
var notation = require('music.notation')

/**
 * Harmonize a note
 *
 */
function harmonizer (intervals, tonic) {
  if (arguments.length === 1) return function (t) { return harmonizer(intervals, t) }

  return gamut.apply(function (g) {
    var intervals = toIntervals(g)
    var t = notation.arr(tonic)
    return intervals.map(function (i) { return operator.add(i, t) })
  }, intervals)
}

function toIntervals (notes) {
  var t = notes[0]
  return notes.map(function (n) {
    return n.length !== 3 ? operator.subtract(t, n) : n
  })
}

module.exports = harmonizer
