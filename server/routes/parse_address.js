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

  // send json
  res.status(200).json({
    input: {
      body: t.span.body,
      start: t.span.start,
      end: t.span.end
    },
    solutions: t.solution.map(jsonify)
  }.solutions[0].classifications)
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
