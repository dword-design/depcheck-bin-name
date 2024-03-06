import self from './index.js'

export default [
  () => expect(self`foo${1}`).toEqual('foo1'),
  () => expect(self`foo${1}`).toEqual('foo1'),
]
