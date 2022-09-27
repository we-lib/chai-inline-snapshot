import { Assertion, util } from 'chai'
import { format } from 'pretty-format'

let serialize = v => {
  return format(v, {
    indent: 2,
    printBasicPrototype: false
  })
}

util.addMethod(Assertion.prototype, 'matchInlineSnapshot', function (expected) {
  // TODO auto insert if expected is not yet provided
  let received = util.flag(this, 'object')
  let actual = serialize(received)
  new Assertion(actual).to.be.equal(expected.trim())
})
