var wagner = require('wagner-core');
var assert = require('assert');

wagner.factory('bacon', function() {
    return 'bacon';
})

wagner.factory('breakfast', function(bacon) {
  return bacon + " and eggs";
})

var result = wagner.invoke(function(breakfast) {
    assert.equal(breakfast, 'bacon and eggs');
    return breakfast;
})

var localNumber = 5;

wagner.factory('mult', function() {
    return 5;
})

var multResult = wagner.invoke(function(mult) {
    var res = mult * localNumber;
    assert.equal(res, 50);
    return mult * localNumber;
}, {localNumber : localNumber})

console.log(result);

console.log(multResult);