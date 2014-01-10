var isbnjs = require('isbn').ISBN
var request = require('request')
var xml2js = require('xml2js').parseString

const ENDPOINT = "http://classify.oclc.org/classify2/Classify?summary=true&isbn="
var lookup = function ( isbn, callback )
{
  var isbn10 = isbnjs.asIsbn10(isbn)
  if (isbn10) {
    getData(isbn10, function (data) {
      if (!data) {
        getData(isbnjs.asIsbn13(isbn), function (data) {
          callback(data)
        })
      } else {
        callback(data)
      }
    })
  } else {
    callback(null)
  }
}

function getData (isbn, callback) {
  request({
      url: ENDPOINT + isbn,
      json: true,
      headers: {
        'User-Agent': 'npm-classify2'
      }
    }, function ( error, response, body) {
      if (error) { callback(null) }
      xml2js(body, function (err, result) {
        result = result.classify
        var response = {}
        try {
          response.status = result.response[0]['$'].code,
          response.dewey = result.recommendations[0].ddc[0].mostPopular[0]['$'].sfa,
          response.congress = result.recommendations[0].lcc[0].mostPopular[0]['$'].sfa
        } catch (e) {
          // foo
        }
        callback(response)
      })
    }
  )
}

module.exports = {
  get: lookup
}
