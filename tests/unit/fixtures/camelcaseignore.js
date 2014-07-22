function FooBar(testMe) {
  this.testMe = testMe;
}

function Foo_bar(test_me, var_args) {
  this.test_me = test_me;
}

function Foo() {
  this.TEST_ME = 2;
}

var TEST_1, test1, test_1;

function _FooBar(_testMe, opt_fooBar, opt_helloWorld, opt_any_identifier) {
    this.__testMe = _testMe;
}

function _FooBar_(testMe_) {
  this.__testMe__ = testMe_;
  ECMA_require('hello');
}
