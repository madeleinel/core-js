import { DESCRIPTORS } from '../helpers/constants';

if (DESCRIPTORS) {
  QUnit.test('Function#name', function (assert) {
    assert.ok('name' in Function.prototype);
    assert.nonEnumerable(Function.prototype, 'name');
    function foo() { /* empty */ }
    assert.same(foo.name, 'foo');
    assert.same(function () { /* empty */ }.name, '');
    if (Object.freeze) {
      assert.same(Object.freeze(function () { /* empty */ }).name, '');
    }
    function bar() { /* empty */ }
    bar.toString = function () {
      throw new Error();
    };
    assert.ok(function () {
      try {
        bar.name;
        return true;
      } catch (e) { /* empty */ }
    }());
    var baz = Object(function () { /* empty */ });
    baz.toString = function () {
      return '';
    };
    assert.same(baz.name, '');
  });
}
