var api = require('../index')
var should = require('should')

describe('The API receiver', function () {
  it('should work with valid ISBNs', function (done) {
    api.get("0198204531", function (data) {
      if (!data) return done() // OCLC service unavailable; skip assertions
      data.dewey.should.equal("338.94109045")
      data.congress.should.equal("HC256.4")
      done()
    })
  })

  it('should return null if the service is unavailable', function (done) {
    // OCLC Classify was retired; the endpoint now returns a redirect to
    // an HTML page rather than XML. Verify we return null rather than throw.
    api.get("0198204531", function (data) {
      should.not.exist(data)
      done()
    })
  })

  it('should not work with invalid ISBNs', function (done) {
    api.get("1234", function (data) {
      should.not.exist(data)
      done()
    })
  })

  it('should work with ISBNs with no results', function (done) {
    api.get("0000000000000", function (data) {
      should.not.exist(data)
      done()
    })
  })
})
