# chai-inline-snapshot

- [x] inline snapshot
- [ ] auto insert
- [ ] indent free

```sh
npm install --dev chai
npm install --dev chai-inline-snapshot
```

```js
import 'chai-inline-snapshot'
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
```

```plain
ζ npm run coverage
> c8 xv

index.test.js
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```
