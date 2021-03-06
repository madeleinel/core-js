{module, test} = QUnit
module \ES6

test 'Object.keys' (assert)!->
  {keys} = Object
  assert.isFunction keys
  assert.arity keys, 1
  assert.name keys, \keys
  assert.looksNative keys
  assert.nonEnumerable Object, \keys
  fn1 = (@w = 2)->
  fn2 = (@toString = 2)->
  fn1::q = fn2::q = 1
  assert.deepEqual keys([1,2,3]), <[0 1 2]>
  assert.deepEqual keys(new fn1 1), <[w]>
  assert.deepEqual keys(new fn2 1), <[toString]>
  assert.ok \push not in keys Array::
  for value in [42 \foo no]
    assert.ok (try => keys value; on), "accept #{typeof! value}"
  for value in [null void]
    assert.throws (!-> keys value), TypeError, "throws on #value"