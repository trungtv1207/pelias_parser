const Tokenizer = require('../../tokenization/Tokenizer')

module.exports = function (req, res) {
  // address parser
  var parser = req.app.locals.parser.address

  // input text
  var text = req.query.address || ''

  // tokenizer
  const t = new Tokenizer(text)
  parser.classify(t)
  parser.solve(t)

  var response = {
    input: {
      body: t.span.body,
      start: t.span.start,
      end: t.span.end
    },
    solutions: t.solution.map(jsonify)
  }.solutions

  if (response.length > 0){
    res.status(200).json(response[0].classifications)
  } else {
    res.status(200).json(response)
  }
}

function jsonify (solution) {
  return {
    score: solution.score,
    classifications: solution.pair.map(c => {
      return {
        label: c.classification.label,
        value: c.span.body
      }
    })
  }
}
