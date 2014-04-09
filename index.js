
var assert = require('assert')

function count(num) {
  assert(num >= 0, 'can count only integers > 0')

  if (num == 0) {
    return 0
  }

  num = Math.floor(num)

  // http://tekpool.wordpress.com/category/bit-count/
  var count = num

  do {
    num = num>>1
    count -= num
  } while(num)

  return count
}

var table = (function() {
  var i
    , result = []

  for (i = 0; i < 256; i++) {
    result[i] = count(i)
  }

  return result
})()

function countNumbers(num) {
  var count = 0
    , bitmask = 0xFF
    , rounds = 0

  do {
    count += table[(num & bitmask) >> 8 * rounds]
    rounds += 1
    bitmask = bitmask << 8
  } while (rounds * 0xFF < num)

  return count
}

function countBuffers(buf) {
  var count = 0
    , i

  for (i = 0; i < buf.length; i++) {
    count += table[buf[i]]
  }

  return count
}

module.exports = function select(arg) {
  if (typeof arg === 'number') {
    return countNumbers(arg)
  } else if (Buffer.isBuffer(arg)) {
    return countBuffers(arg)
  } else {
    throw new Error('unable to count')
  }
}

module.exports.count = count
