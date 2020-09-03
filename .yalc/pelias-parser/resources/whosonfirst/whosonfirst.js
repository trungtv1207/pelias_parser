const fs = require('fs')
const path = require('path')
const pelias = require('../pelias/pelias')
const custom = require('../custom/custom')
const dictPath = path.join(__dirname, `./dictionaries`)
const allPlacetypes = fs.readdirSync(dictPath).filter(p => !p.includes('.'))

function load (set, placetypes, filenames, options) {
  const add = _add(set, options)
  const remove = _remove(set, options)
  placetypes.forEach(placetype => {
    filenames.forEach(filename => {
      let filepath = path.join(dictPath, placetype, filename)
      if (!fs.existsSync(filepath)) { return }
      let dict = fs.readFileSync(filepath, 'utf8')
      dict.split('\n').forEach(row => {
        row.split('|').forEach(add)
      }, this)
    })
  }, this)

  placetypes.forEach(placetype => {
    filenames.forEach(filename => {
      pelias.load(path.join('whosonfirst', placetype, filename), add, remove)
    })
  })

  placetypes.forEach(placetype => {
    filenames.forEach(filename => {
      custom.load(path.join('whosonfirst', placetype, filename), add, remove)
    })
  })
}

function _normalize (cell, options) {
  let value = cell.trim()
  if (options && options.replace) {
    value = value.replace(options.replace[0], options.replace[1])
  }
  if (options && options.minlength) {
    if (value.length < options.minlength) { return '' }
  }
  if (options && options.lowercase) {
    value = value.toLowerCase()
  }
  if (options && options.normalizer && typeof options.normalizer === 'function') {
    value = options.normalizer(value)
  }
  return value
}

function _add (set, options) {
  return cell => {
    const value = _normalize(cell, options)
    if (value && value.length) {
      set.add(value)
    }
  }
}

function _remove (set, options) {
  return cell => {
    const value = _normalize(cell, options)
    if (value && value.length) {
      set.delete(value)
    }
  }
}

module.exports.load = load
module.exports.placetypes = allPlacetypes
