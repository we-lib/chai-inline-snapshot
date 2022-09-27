import { Assertion, util } from 'chai'
import { format } from 'pretty-format'

export let serialize = v => {
  return format(v, {
    indent: 2,
    printBasicPrototype: false
  })
}

export let ignoreIndent = (text = '') => {
  let regex = /^([ \t]*)/
  let lines = text.split(/\n/)
  let finalValidLine = text.trim().split(/\n/).slice(-1)[0]

  if (lines[0] !== '\n' && lines.length >= 3) {
    lines.unshift('\n')
    let padding = regex.exec(finalValidLine)[1]
    lines[1] = lines[1].replace(/^\s*/, padding)
  }

  let minIndent = Infinity
  lines.forEach(line => {
    if (!line.trim()) return
    let padding = regex.exec(line)[1].length
    minIndent = Math.min(minIndent, padding)
  })
  return lines.map(line => line.slice(minIndent)).join('\n')
}

util.addMethod(Assertion.prototype, 'matchInlineSnapshot', function (expected) {
  // TODO auto insert if expected is not yet provided
  let received = util.flag(this, 'object')
  let actual = serialize(received)

  expected = ignoreIndent(expected)
  expected = expected.trim()
  new Assertion(actual).to.be.equal(expected)
})
