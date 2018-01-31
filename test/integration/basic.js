/* global describe, it */

var assert = require('assert')
var bigi = require('bigi')
var kapu = require('../../')

describe('kapu-js (basic)', function () {
  it('can generate a random kapu address', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    // generate random keyPair
    var keyPair = kapu.ECPair.makeRandom({ rng: rng })
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'KEEdAcrVMQpW1nkiEQfMCQLJTojtseGTmn')
  })

  it('can generate an address from a SHA256 hash', function () {
    var hash = kapu.crypto.sha256('correct horse battery staple')
    var d = bigi.fromBuffer(hash)

    var keyPair = new kapu.ECPair(d)
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'K7WSZAGiDf7M1BQqhk7RwgjfkjANjQcei9')
  })

  it('can generate a random keypair for alternative networks', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    var bitcoin = kapu.networks.bitcoin

    var keyPair = kapu.ECPair.makeRandom({ network: bitcoin, rng: rng })
    var wif = keyPair.toWIF()
    var address = keyPair.getAddress()

    assert.strictEqual(address, '182UrjSXQHy5DHUp8Xg1Nm5u979SojJY2P')
    assert.strictEqual(wif, 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1')
  })

  it('can import an address via WIF', function () {
    var keyPair = kapu.ECPair.fromWIF('S9aCCSFvm8kNeyFb1t6pLb5oJs9tv96ag6uA8Du6UM7zsmsNHQiz')
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'KTnz9nvdMesTzw3a2gFDHPVsATPd1BHq9K')
  })

})
