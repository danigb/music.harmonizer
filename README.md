# music.harmonizer

[![Build Status](https://travis-ci.org/danigb/music.harmonizer.svg?branch=master)](https://travis-ci.org/danigb/music.harmonizer)
[![Test Coverage](https://codeclimate.com/github/danigb/music.harmonizer/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.harmonizer/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/music.harmonizer/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.harmonizer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.harmonizer.svg)](https://www.npmjs.com/package/music.harmonizer)
[![license](https://img.shields.io/npm/l/music.harmonizer.svg)](https://www.npmjs.com/package/music.harmonizer)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

An harmonizer is a function that receives a note and return an array of notes:

```js
var harmonizer = require('music.harmonizer')
var maj7 = harmonizer('1 3 5 7')
maj7('D') // => ['D', 'F#', 'A', 'C#']
dorian = harmonizer('D E F G A B C')
dorian('C') // => ['C', 'D', 'Eb', 'F', 'G' 'A', 'Bb']
```

## Install

Currently only via npm: `npm i --save music.harmonizer`

## Usage

#### Create an harmonizer from a list of intervals

```js
// intervals using number and quality
var majorTriad = harmonizer('1P 3M 5P')
majorTriad('Eb') // => ['Eb', 'G', 'Bb']
// intervals using number and alteration
var minorTriad = harmonizer('1 3b 5')
minorTriad('F') // => ['F', 'Ab', 'C']
```

Take a look to [music.interval.parser](https://github.com/danigb/music.interval.parser) to see the intervals format.

### Create an harmonizer from a list of notes. 

If you give a list of notes, `harmonizer` function will calculate the intervals from the first note of the list to the rest:

```js
var maj7drop2 = harmonizer('C2 E2 G1 B2')
maj7drop2('A2') // => ['A2', 'C#3', 'E2', 'G#3']
```

#### Get harmonizer intervals

Finally, you can get the intervals with the tonic equal `false`:

```js
harmonizer('C D E F G', false) // => ['1P', '2M', '3M', '4P', '5P']
```

#### More ...

Read the [generated documentation here](https://github.com/danigb/music.harmonizer/blob/master/API.md) or take a look to [music.kit](https://github.com/danigb/music.kit)

## License

MIT License
