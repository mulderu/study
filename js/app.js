/**
 * ref : https://leanpub.com/lodashcookbook/read#leanpub-auto-truthy-and-falsy
 */
const describe = require('describe');
const matches = require('lodash/matches');

describe('matches', () => {
      it('should match strings', () => {
              let f = matches('hello');
                  expect(f('world')).toBe(false);
                      expect(f('hello')).toBe(true);
                        });

        it('should match objects', () => {
                let f = matches([{a: 1}, {b: 2}]);
                    expect(f([{a: 1}, {b: 3}])).toBe(false);
                      });
});


describe("assertions", {
        'basic synchronous expectation': function() {
                    this.expect(42, 42);
                        }
});

const property = require('lodash/property');

describe('property', () => {
      it('should extract property value', () => {
              let f = property('name');
                  expect(f({name: 'Alex'})).toBe('Alex');
                    });
});

var users = [
  {
    "name": "Alex",
    "age": 30,
    "is_premium": false
  },
  {
    "name": "Bob",
    "age": 20,
    "is_premium": true
  },
  {
    "name": "Mary",
    "age": 25,
    "is_premium": false
  }
];


const find = require('lodash/find');

describe('find with different predicates', () => {
  it('should find with a function', () => {
    let user = find(users, user => user.age > 18);
    expect(user).toBeDefined();
    expect(user.name).toBe('Alex');
  });
    it('should find with a property value', () => {
      let user = find(users, 'is_premium');
      expect(user).toBeDefined();
      expect(user.name).toBe('Bob');
    });

    it('should find with an object', () => {
          let user = find(users, { name: 'Alex' });
            expect(user).toBeDefined();
              expect(user.name).toBe('Alex');
    });
});

describe('map with iteratees', () => {
  it('should map with an iteratee function', () => {
    let result = map([1, 2, 3], n => n * 3);
    expect(result).toEqual([3, 6, 9]);
  });
  it('should map with iteratee shorthands', () => {
      let result = map(users, {name: 'Alex'});
      expect(result).toEqual([true, false, false]);

      result = map(users, ['name', 'Alex']);
      expect(result).toEqual([true, false, false]);

      result = map(users, 'name');
      expect(result).toEqual(['Alex', 'Bob', 'Mary']);
    });
});

const map = require('lodash/map');
const bind = require('lodash/bind');

describe('this binding', () => {
  it('should bind to this', () => {
    const obj = {
      val: 10,
      add: function(n) {
        return this.val + n;
      }
    };
    let result = map([1, 2, 3], bind(obj.add, obj));
    expect(result).toEqual([11, 12, 13]);
  });
});


var fruits = [
  {
    "name": "apple",
    "price": 0.99,
    "onSale": true
  },
  {
    "name": "orange",
    "price": 1.99,
    "onSale": false
  },
  {
    "name": "passion fruit",
    "price": 4.99,
    "onSale": false
  }
];

const each = require('lodash/each');

describe('each', () => {
  it('should support basic iteration', () => {
    let sum = 0;
    each([1, 2, 3], val => sum += val);
    expect(sum).toEqual(6);
  });
});




