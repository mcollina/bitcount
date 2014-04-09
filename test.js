
var test        = require('tap').test
  , util        = require('util')
  , bitcount    = require('./')
  , baseCount   = bitcount.count

function numTest(num, expected, func) {
  if (!func) {
    func = baseCount
  }

  test(util.format('%d has %d bits', num, expected), function(t) {
    t.plan(1)
    t.equal(func(num), expected, 'wrong count')
  })
}

function cacheTest(num) {
  numTest(num, baseCount(num), bitcount)
}

function bufTest(num, expected) {
  var bytes = []
    , renum = num

  do {
    bytes.unshift(renum & 0xFF)
    renum = renum >> 8
  } while(renum > 0)

  test(util.format('buffer - %d has %d bits', num, expected), function(t) {
    t.plan(1)
    t.equal(bitcount(new Buffer(bytes)), expected, 'wrong count')
  })
}

function bufCacheTest(num) {
  bufTest(num, baseCount(num), bitcount)
}

numTest(1, 1)
numTest(2, 1)
numTest(3, 2)
numTest(5, 2)

cacheTest(5)
cacheTest(255)
cacheTest(256)
cacheTest(1024)
cacheTest(1023)
cacheTest(1023 * 42)

bufTest(1, 1)
bufTest(2, 1)
bufTest(3, 2)
bufTest(5, 2)

bufCacheTest(5)
bufCacheTest(255)
bufCacheTest(256)
bufCacheTest(1024)
bufCacheTest(1023)
bufCacheTest(1023 * 42)
bufCacheTest(1023 * 7 * 1024 + 1)
