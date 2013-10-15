var api = require('../index')
var should = require('should')

describe('The API receiver', function () {
  it('should work with valid ISBNs', function (done) {
    api.get("0198204531", function (data) {
      data.dewey.should.equal("338.94109045")
      data.congress.should.equal("HC256.4")
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
