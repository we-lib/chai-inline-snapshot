import './index.js'
import { expect } from 'chai'

export let test = () => {
  let actual = [
    {
      text: 'https://mp.weixin.qq.com/s/jLMBp1e7BC-PGr2tLEQpRQ\n周日读报',
      type: 'text'
    },
    {
      index: 21,
      type: 'qqface'
    }
  ]
  // 标准缩进
  expect(actual).to.matchInlineSnapshot(`
    [
      {
        "text": "https://mp.weixin.qq.com/s/jLMBp1e7BC-PGr2tLEQpRQ
    周日读报",
        "type": "text",
      },
      {
        "index": 21,
        "type": "qqface",
      },
    ]
  `)
}
