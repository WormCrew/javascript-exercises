<<<<<<< HEAD
const reverseString = require('./reverseString')

describe('reverseString', function() {
  it('reverses single word', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('reverses multiple words', function() {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  it('works with numbers and punctuation', function() {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
});
=======
const reverseString = require('./reverseString')

describe('reverseString', function() {
  it('reverses single word', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('reverses multiple words', function() {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  it('works with numbers and punctuation', function() {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
});
>>>>>>> 9e1798000b696c64ba6837c3e79f1705328e9568
