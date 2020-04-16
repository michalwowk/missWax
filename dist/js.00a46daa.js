// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/underscore/modules/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _;
exports.iteratee = iteratee;
exports.restArguments = restArguments;
exports.forEach = exports.each = each;
exports.collect = exports.map = map;
exports.detect = exports.find = find;
exports.select = exports.filter = filter;
exports.reject = reject;
exports.all = exports.every = every;
exports.any = exports.some = some;
exports.include = exports.includes = exports.contains = contains;
exports.pluck = pluck;
exports.where = where;
exports.findWhere = findWhere;
exports.max = max;
exports.min = min;
exports.shuffle = shuffle;
exports.sample = sample;
exports.sortBy = sortBy;
exports.toArray = toArray;
exports.size = size;
exports.take = exports.head = exports.first = first;
exports.initial = initial;
exports.last = last;
exports.drop = exports.tail = exports.rest = rest;
exports.compact = compact;
exports.flatten = flatten;
exports.unique = exports.uniq = uniq;
exports.intersection = intersection;
exports.unzip = unzip;
exports.object = object;
exports.sortedIndex = sortedIndex;
exports.range = range;
exports.chunk = chunk;
exports.memoize = memoize;
exports.throttle = throttle;
exports.debounce = debounce;
exports.wrap = wrap;
exports.negate = negate;
exports.compose = compose;
exports.after = after;
exports.before = before;
exports.keys = keys;
exports.allKeys = allKeys;
exports.values = values;
exports.mapObject = mapObject;
exports.pairs = pairs;
exports.invert = invert;
exports.methods = exports.functions = functions;
exports.findKey = findKey;
exports.create = create;
exports.clone = clone;
exports.tap = tap;
exports.isMatch = isMatch;
exports.isEqual = isEqual;
exports.isEmpty = isEmpty;
exports.isElement = isElement;
exports.isObject = isObject;
exports.isFinite = isFinite;
exports.isNaN = isNaN;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.has = has;
exports.identity = identity;
exports.constant = constant;
exports.noop = noop;
exports.property = property;
exports.propertyOf = propertyOf;
exports.matches = exports.matcher = matcher;
exports.times = times;
exports.random = random;
exports.result = result;
exports.uniqueId = uniqueId;
exports.template = template;
exports.chain = chain;
exports.mixin = mixin;
exports.templateSettings = exports.unescape = exports.escape = exports.now = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isError = exports.isRegExp = exports.isDate = exports.isNumber = exports.isString = exports.isFunction = exports.isArguments = exports.isArray = exports.defaults = exports.omit = exports.pick = exports.assign = exports.extendOwn = exports.extend = exports.once = exports.defer = exports.delay = exports.bindAll = exports.partial = exports.bind = exports.lastIndexOf = exports.indexOf = exports.findLastIndex = exports.findIndex = exports.zip = exports.difference = exports.union = exports.without = exports.partition = exports.countBy = exports.indexBy = exports.groupBy = exports.invoke = exports.foldr = exports.reduceRight = exports.inject = exports.foldl = exports.reduce = exports.VERSION = void 0;
//     Underscore.js 1.10.2
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
// Baseline setup
// --------------
// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || Function('return this')() || {}; // Save bytes in the minified (but not gzipped) version:

var ArrayProto = Array.prototype,
    ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null; // Create quick reference variables for speed access to core prototypes.

var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
// are declared here.

var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create; // Create references to these builtin functions because we override them.

var _isNaN = root.isNaN,
    _isFinite = root.isFinite; // Naked function reference for surrogate-prototype-swapping.

var Ctor = function () {}; // The Underscore object. All exported functions below are added to it in the
// modules/index-all.js using the mixin function.


function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
} // Current version.


var VERSION = _.VERSION = '1.10.2'; // Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.

exports.VERSION = VERSION;

function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;

  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (value) {
        return func.call(context, value);
      };
    // The 2-argument case is omitted because we’re not using it.

    case 3:
      return function (value, index, collection) {
        return func.call(context, value, index, collection);
      };

    case 4:
      return function (accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }

  return function () {
    return func.apply(context, arguments);
  };
} // An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.


function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray(value)) return matcher(value);
  return property(value);
} // External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.


_.iteratee = iteratee;

function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
} // The function we actually call internally. It invokes _.iteratee if
// overridden, otherwise baseIteratee.


function cb(value, context, argCount) {
  if (_.iteratee !== iteratee) return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
} // Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".


function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function () {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;

    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }

    switch (startIndex) {
      case 0:
        return func.call(this, rest);

      case 1:
        return func.call(this, arguments[0], rest);

      case 2:
        return func.call(this, arguments[0], arguments[1], rest);
    }

    var args = Array(startIndex + 1);

    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }

    args[startIndex] = rest;
    return func.apply(this, args);
  };
} // An internal function for creating a new object that inherits from another.


function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  Ctor.prototype = prototype;
  var result = new Ctor();
  Ctor.prototype = null;
  return result;
}

function shallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}

function _has(obj, path) {
  return obj != null && hasOwnProperty.call(obj, path);
}

function deepGet(obj, path) {
  var length = path.length;

  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }

  return length ? obj : void 0;
} // Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094


var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = shallowProperty('length');

function isArrayLike(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
} // Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.


function each(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context);
  var i, length;

  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);

    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }

  return obj;
}

// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = cb(iteratee, context);

  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      results = Array(length);

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }

  return results;
}

// Create a reducing function iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function (obj, iteratee, memo, initial) {
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;

    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }

    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }

    return memo;
  };

  return function (obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
  };
} // **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.


var reduce = createReduce(1);
exports.inject = exports.foldl = exports.reduce = reduce;
// The right-associative version of reduce, also known as `foldr`.
var reduceRight = createReduce(-1);
exports.foldr = exports.reduceRight = reduceRight;

// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}

// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function (value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}

// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
} // Determine whether all of the elements match a truth test.


function every(obj, predicate, context) {
  predicate = cb(predicate, context);

  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }

  return true;
}

// Determine if at least one element in the object matches a truth test.
function some(obj, predicate, context) {
  predicate = cb(predicate, context);

  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;

  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }

  return false;
}

// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}

// Invoke a method (with arguments) on every item in a collection.
var invoke = restArguments(function (obj, path, args) {
  var contextPath, func;

  if (isFunction(path)) {
    func = path;
  } else if (isArray(path)) {
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }

  return map(obj, function (context) {
    var method = func;

    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }

      if (context == null) return void 0;
      method = context[path];
    }

    return method == null ? method : method.apply(context, args);
  });
}); // Convenience version of a common use case of `map`: fetching a property.

exports.invoke = invoke;

function pluck(obj, key) {
  return map(obj, property(key));
} // Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.


function where(obj, attrs) {
  return filter(obj, matcher(attrs));
} // Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.


function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
} // Return the maximum element (or element-based computation).


function max(obj, iteratee, context) {
  var result = -Infinity,
      lastComputed = -Infinity,
      value,
      computed;

  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);

    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];

      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function (v, index, list) {
      computed = iteratee(v, index, list);

      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }

  return result;
} // Return the minimum element (or element-based computation).


function min(obj, iteratee, context) {
  var result = Infinity,
      lastComputed = Infinity,
      value,
      computed;

  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);

    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];

      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function (v, index, list) {
      computed = iteratee(v, index, list);

      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }

  return result;
} // Shuffle a collection.


function shuffle(obj) {
  return sample(obj, Infinity);
} // Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.


function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }

  var sample = isArrayLike(obj) ? clone(obj) : values(obj);
  var length = getLength(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;

  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }

  return sample.slice(0, n);
} // Sort the object's values by a criterion produced by an iteratee.


function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = cb(iteratee, context);
  return pluck(map(obj, function (value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function (left, right) {
    var a = left.criteria;
    var b = right.criteria;

    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }

    return left.index - right.index;
  }), 'value');
} // An internal function used for aggregate "group by" operations.


function group(behavior, partition) {
  return function (obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = cb(iteratee, context);
    each(obj, function (value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
} // Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.


var groupBy = group(function (result, value, key) {
  if (_has(result, key)) result[key].push(value);else result[key] = [value];
}); // Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.

exports.groupBy = groupBy;
var indexBy = group(function (result, value, key) {
  result[key] = value;
}); // Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.

exports.indexBy = indexBy;
var countBy = group(function (result, value, key) {
  if (_has(result, key)) result[key]++;else result[key] = 1;
});
exports.countBy = countBy;
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g; // Safely create a real, live array from anything iterable.

function toArray(obj) {
  if (!obj) return [];
  if (isArray(obj)) return slice.call(obj);

  if (isString(obj)) {
    // Keep surrogate pair characters together
    return obj.match(reStrSymbol);
  }

  if (isArrayLike(obj)) return map(obj, identity);
  return values(obj);
} // Return the number of elements in an object.


function size(obj) {
  if (obj == null) return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
} // Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.


var partition = group(function (result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true); // Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `map`.

exports.partition = partition;

function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
} // Get the last element of an array. Passing **n** will return the last N
// values in the array.


function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
} // Returns everything but the first entry of the array. Especially useful on
// the arguments object. Passing an **n** will return the rest N values in the
// array.


function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}

// Trim out all falsy values from an array.
function compact(array) {
  return filter(array, Boolean);
} // Internal implementation of a recursive `flatten` function.


function _flatten(input, shallow, strict, output) {
  output = output || [];
  var idx = output.length;

  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];

    if (isArrayLike(value) && (isArray(value) || isArguments(value))) {
      // Flatten current level of array or arguments object.
      if (shallow) {
        var j = 0,
            len = value.length;

        while (j < len) output[idx++] = value[j++];
      } else {
        _flatten(value, shallow, strict, output);

        idx = output.length;
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }

  return output;
} // Flatten out an array, either recursively (by default), or just one level.


function flatten(array, shallow) {
  return _flatten(array, shallow, false);
} // Return a version of the array that does not contain the specified value(s).


var without = restArguments(function (array, otherArrays) {
  return difference(array, otherArrays);
}); // Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.

exports.without = without;

function uniq(array, isSorted, iteratee, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }

  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];

  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;

    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!contains(result, value)) {
      result.push(value);
    }
  }

  return result;
}

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
var union = restArguments(function (arrays) {
  return uniq(_flatten(arrays, true, true));
}); // Produce an array that contains every item shared between all the
// passed-in arrays.

exports.union = union;

function intersection(array) {
  var result = [];
  var argsLength = arguments.length;

  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (contains(result, item)) continue;
    var j;

    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }

    if (j === argsLength) result.push(item);
  }

  return result;
} // Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.


var difference = restArguments(function (array, rest) {
  rest = _flatten(rest, true, true);
  return filter(array, function (value) {
    return !contains(rest, value);
  });
}); // Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.

exports.difference = difference;

function unzip(array) {
  var length = array && max(array, getLength).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = pluck(array, index);
  }

  return result;
} // Zip together multiple lists into a single array -- elements that share
// an index go together.


var zip = restArguments(unzip); // Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of pairs.

exports.zip = zip;

function object(list, values) {
  var result = {};

  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }

  return result;
} // Generator function to create the findIndex and findLastIndex functions.


function createPredicateIndexFinder(dir) {
  return function (array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }

    return -1;
  };
} // Returns the first index on an array-like that passes a predicate test.


var findIndex = createPredicateIndexFinder(1);
exports.findIndex = findIndex;
var findLastIndex = createPredicateIndexFinder(-1); // Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.

exports.findLastIndex = findLastIndex;

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0,
      high = getLength(array);

  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
  }

  return low;
} // Generator function to create the indexOf and lastIndexOf functions.


function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function (array, item, idx) {
    var i = 0,
        length = getLength(array);

    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }

    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN);
      return idx >= 0 ? idx + i : -1;
    }

    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }

    return -1;
  };
} // Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.


var indexOf = createIndexFinder(1, findIndex, sortedIndex);
exports.indexOf = indexOf;
var lastIndexOf = createIndexFinder(-1, findLastIndex); // Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).

exports.lastIndexOf = lastIndexOf;

function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }

  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
} // Chunk a single array into multiple arrays, each containing `count` or fewer
// items.


function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0,
      length = array.length;

  while (i < length) {
    result.push(slice.call(array, i, i += count));
  }

  return result;
} // Function (ahem) Functions
// ------------------
// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.


function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (isObject(result)) return result;
  return self;
} // Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.


var bind = restArguments(function (func, context, args) {
  if (!isFunction(func)) throw new TypeError('Bind must be called on a function');
  var bound = restArguments(function (callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}); // Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `partial.placeholder` for a custom placeholder argument.

exports.bind = bind;
var partial = restArguments(function (func, boundArgs) {
  var placeholder = partial.placeholder;

  var bound = function () {
    var position = 0,
        length = boundArgs.length;
    var args = Array(length);

    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }

    while (position < arguments.length) args.push(arguments[position++]);

    return executeBound(func, bound, this, this, args);
  };

  return bound;
});
exports.partial = partial;
partial.placeholder = _; // Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.

var bindAll = restArguments(function (obj, _keys) {
  _keys = _flatten(_keys, false, false);
  var index = _keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');

  while (index--) {
    var key = _keys[index];
    obj[key] = bind(obj[key], obj);
  }
}); // Memoize an expensive function by storing its results.

exports.bindAll = bindAll;

function memoize(func, hasher) {
  var memoize = function (key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!_has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };

  memoize.cache = {};
  return memoize;
} // Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.


var delay = restArguments(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
}); // Defers a function, scheduling it to run after the current call stack has
// cleared.

exports.delay = delay;
var defer = partial(delay, _, 1); // Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.

exports.defer = defer;

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var _now = now();

    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
} // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function (context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function (args) {
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
} // Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.


function wrap(func, wrapper) {
  return partial(wrapper, func);
} // Returns a negated version of the passed-in predicate.


function negate(predicate) {
  return function () {
    return !predicate.apply(this, arguments);
  };
} // Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.


function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var i = start;
    var result = args[start].apply(this, arguments);

    while (i--) result = args[i].call(this, result);

    return result;
  };
} // Returns a function that will only be executed on and after the Nth call.


function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
} // Returns a function that will only be executed up to (but not including) the Nth call.


function before(times, func) {
  var memo;
  return function () {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }

    if (times <= 1) func = null;
    return memo;
  };
} // Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.


var once = partial(before, 2); // Object Functions
// ----------------
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.

exports.once = once;
var hasEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

function collectNonEnumProps(obj, _keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction(constructor) && constructor.prototype || ObjProto; // Constructor is a special case.

  var prop = 'constructor';
  if (_has(obj, prop) && !contains(_keys, prop)) _keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];

    if (prop in obj && obj[prop] !== proto[prop] && !contains(_keys, prop)) {
      _keys.push(prop);
    }
  }
} // Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.


function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var _keys = [];

  for (var key in obj) if (_has(obj, key)) _keys.push(key); // Ahem, IE < 9.


  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
} // Retrieve all the property names of an object.


function allKeys(obj) {
  if (!isObject(obj)) return [];
  var _keys = [];

  for (var key in obj) _keys.push(key); // Ahem, IE < 9.


  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
} // Retrieve the values of an object's properties.


function values(obj) {
  var _keys = keys(obj);

  var length = _keys.length;
  var values = Array(length);

  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }

  return values;
} // Returns the results of applying the iteratee to each element of the object.
// In contrast to map it returns an object.


function mapObject(obj, iteratee, context) {
  iteratee = cb(iteratee, context);

  var _keys = keys(obj),
      length = _keys.length,
      results = {};

  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }

  return results;
} // Convert an object into a list of `[key, value]` pairs.
// The opposite of object.


function pairs(obj) {
  var _keys = keys(obj);

  var length = _keys.length;
  var pairs = Array(length);

  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }

  return pairs;
} // Invert the keys and values of an object. The values must be serializable.


function invert(obj) {
  var result = {};

  var _keys = keys(obj);

  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }

  return result;
} // Return a sorted list of the function names available on the object.


function functions(obj) {
  var names = [];

  for (var key in obj) {
    if (isFunction(obj[key])) names.push(key);
  }

  return names.sort();
}

// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function (obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;

    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          _keys = keysFunc(source),
          l = _keys.length;

      for (var i = 0; i < l; i++) {
        var key = _keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }

    return obj;
  };
} // Extend a given object with all the properties in passed-in object(s).


var extend = createAssigner(allKeys); // Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

exports.extend = extend;
var extendOwn = createAssigner(keys);
exports.assign = exports.extendOwn = extendOwn;

// Returns the first key on an object that passes a predicate test.
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);

  var _keys = keys(obj),
      key;

  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
} // Internal pick helper function to determine if `obj` has key `key`.


function keyInObj(value, key, obj) {
  return key in obj;
} // Return a copy of the object only containing the whitelisted properties.


var pick = restArguments(function (obj, _keys) {
  var result = {},
      iteratee = _keys[0];
  if (obj == null) return result;

  if (isFunction(iteratee)) {
    if (_keys.length > 1) iteratee = optimizeCb(iteratee, _keys[1]);
    _keys = allKeys(obj);
  } else {
    iteratee = keyInObj;
    _keys = _flatten(_keys, false, false);
    obj = Object(obj);
  }

  for (var i = 0, length = _keys.length; i < length; i++) {
    var key = _keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }

  return result;
}); // Return a copy of the object without the blacklisted properties.

exports.pick = pick;
var omit = restArguments(function (obj, _keys) {
  var iteratee = _keys[0],
      context;

  if (isFunction(iteratee)) {
    iteratee = negate(iteratee);
    if (_keys.length > 1) context = _keys[1];
  } else {
    _keys = map(_flatten(_keys, false, false), String);

    iteratee = function (value, key) {
      return !contains(_keys, key);
    };
  }

  return pick(obj, iteratee, context);
}); // Fill in a given object with default properties.

exports.omit = omit;
var defaults = createAssigner(allKeys, true); // Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.

exports.defaults = defaults;

function create(prototype, props) {
  var result = baseCreate(prototype);
  if (props) extendOwn(result, props);
  return result;
} // Create a (shallow-cloned) duplicate of an object.


function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
} // Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.


function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
} // Returns whether an object has a given set of `key:value` pairs.


function isMatch(object, attrs) {
  var _keys = keys(attrs),
      length = _keys.length;

  if (object == null) return !length;
  var obj = Object(object);

  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }

  return true;
} // Internal recursive comparison function for `isEqual`.


function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case '[object RegExp]': // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;

    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
  }

  var areArrays = className === '[object Array]';

  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = keys(a),
        key;

    length = _keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(_has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
} // Perform a deep comparison to check if two objects are equal.


function isEqual(a, b) {
  return eq(a, b);
} // Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.


function isEmpty(obj) {
  if (obj == null) return true;
  if (isArrayLike(obj) && (isArray(obj) || isString(obj) || isArguments(obj))) return obj.length === 0;
  return keys(obj).length === 0;
} // Is a given value a DOM element?


function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
} // Internal function for creating a toString-based type tester.


function tagTester(name) {
  return function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
} // Is a given value an array?
// Delegates to ECMA5's native Array.isArray


var isArray = nativeIsArray || tagTester('Array'); // Is a given variable an object?

exports.isArray = isArray;

function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
} // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.


var isArguments = tagTester('Arguments');
exports.isArguments = isArguments;
var isFunction = tagTester('Function');
exports.isFunction = isFunction;
var isString = tagTester('String');
exports.isString = isString;
var isNumber = tagTester('Number');
exports.isNumber = isNumber;
var isDate = tagTester('Date');
exports.isDate = isDate;
var isRegExp = tagTester('RegExp');
exports.isRegExp = isRegExp;
var isError = tagTester('Error');
exports.isError = isError;
var isSymbol = tagTester('Symbol');
exports.isSymbol = isSymbol;
var isMap = tagTester('Map');
exports.isMap = isMap;
var isWeakMap = tagTester('WeakMap');
exports.isWeakMap = isWeakMap;
var isSet = tagTester('Set');
exports.isSet = isSet;
var isWeakSet = tagTester('WeakSet'); // Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.

exports.isWeakSet = isWeakSet;

(function () {
  if (!isArguments(arguments)) {
    exports.isArguments = isArguments = function (obj) {
      return _has(obj, 'callee');
    };
  }
})(); // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).


var nodelist = root.document && root.document.childNodes;

if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  exports.isFunction = isFunction = function (obj) {
    return typeof obj == 'function' || false;
  };
} // Is a given object a finite number?


function isFinite(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !_isNaN(parseFloat(obj));
} // Is the given value `NaN`?


function isNaN(obj) {
  return isNumber(obj) && _isNaN(obj);
} // Is a given value a boolean?


function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
} // Is a given value equal to null?


function isNull(obj) {
  return obj === null;
} // Is a given variable undefined?


function isUndefined(obj) {
  return obj === void 0;
} // Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).


function has(obj, path) {
  if (!isArray(path)) {
    return _has(obj, path);
  }

  var length = path.length;

  for (var i = 0; i < length; i++) {
    var key = path[i];

    if (obj == null || !hasOwnProperty.call(obj, key)) {
      return false;
    }

    obj = obj[key];
  }

  return !!length;
} // Utility Functions
// -----------------
// Keep the identity function around for default iteratees.


function identity(value) {
  return value;
} // Predicate-generating functions. Often useful outside of Underscore.


function constant(value) {
  return function () {
    return value;
  };
}

function noop() {} // Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.


function property(path) {
  if (!isArray(path)) {
    return shallowProperty(path);
  }

  return function (obj) {
    return deepGet(obj, path);
  };
} // Generates a function for a given object that returns a given property.


function propertyOf(obj) {
  if (obj == null) {
    return function () {};
  }

  return function (path) {
    return !isArray(path) ? obj[path] : deepGet(obj, path);
  };
} // Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.


function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function (obj) {
    return isMatch(obj, attrs);
  };
}

// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = optimizeCb(iteratee, context, 1);

  for (var i = 0; i < n; i++) accum[i] = iteratee(i);

  return accum;
} // Return a random integer between min and max (inclusive).


function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
} // A (possibly faster) way to get the current timestamp as an integer.


var now = Date.now || function () {
  return new Date().getTime();
}; // List of HTML entities for escaping.


exports.now = now;
var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
var unescapeMap = invert(escapeMap); // Functions for escaping and unescaping strings to/from HTML interpolation.

function createEscaper(map) {
  var escaper = function (match) {
    return map[match];
  }; // Regexes for identifying a key that needs to be escaped.


  var source = '(?:' + keys(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function (string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}

var escape = createEscaper(escapeMap);
exports.escape = escape;
var unescape = createEscaper(unescapeMap); // Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.

exports.unescape = unescape;

function result(obj, path, fallback) {
  if (!isArray(path)) path = [path];
  var length = path.length;

  if (!length) {
    return isFunction(fallback) ? fallback.call(obj) : fallback;
  }

  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];

    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }

    obj = isFunction(prop) ? prop.call(obj) : prop;
  }

  return obj;
} // Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.


var idCounter = 0;

function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
} // By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.


var templateSettings = _.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
}; // When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.

exports.templateSettings = templateSettings;
var noMatch = /(.)^/; // Certain characters need to be escaped so that they can be put into a
// string literal.

var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};
var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function (match) {
  return '\\' + escapes[match];
}; // JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.


function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults({}, settings, _.templateSettings); // Combine delimiters into one regular expression via alternation.

  var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g'); // Compile the template source, escaping string literals appropriately.

  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    } // Adobe VMs need the match returned to produce the correct offset.


    return match;
  });
  source += "';\n"; // If a variable is not specified, place data values in local scope.

  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
  source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
  var render;

  try {
    render = new Function(settings.variable || 'obj', '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function (data) {
    return render.call(this, data, _);
  }; // Provide the compiled source as a convenience for precompilation.


  var argument = settings.variable || 'obj';
  template.source = 'function(' + argument + '){\n' + source + '}';
  return template;
} // Add a "chain" function. Start chaining a wrapped Underscore object.


function chain(obj) {
  var instance = _(obj);

  instance._chain = true;
  return instance;
} // OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.


function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
} // Add your own custom functions to the Underscore object.


function mixin(obj) {
  each(functions(obj), function (name) {
    var func = _[name] = obj[name];

    _.prototype[name] = function () {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
} // Add all mutator Array functions to the wrapper.


each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
  var method = ArrayProto[name];

  _.prototype[name] = function () {
    var obj = this._wrapped;
    method.apply(obj, arguments);
    if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
    return chainResult(this, obj);
  };
}); // Add all accessor Array functions to the wrapper.

each(['concat', 'join', 'slice'], function (name) {
  var method = ArrayProto[name];

  _.prototype[name] = function () {
    return chainResult(this, method.apply(this._wrapped, arguments));
  };
}); // Extracts the result from a wrapped and chained object.

_.prototype.value = function () {
  return this._wrapped;
}; // Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.


_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function () {
  return String(this._wrapped);
};
},{}],"node_modules/underscore/modules/index-default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var allExports = _interopRequireWildcard(require("./index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Add all of the Underscore functions to the wrapper object.
var _ = (0, allExports.mixin)(allExports); // Legacy Node.js API


_._ = _; // Export the Underscore API.

var _default = _;
exports.default = _default;
},{"./index.js":"node_modules/underscore/modules/index.js"}],"node_modules/underscore/modules/index-all.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _indexDefault.default;
  }
});

var _indexDefault = _interopRequireDefault(require("./index-default.js"));

var _index = require("./index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./index-default.js":"node_modules/underscore/modules/index-default.js","./index.js":"node_modules/underscore/modules/index.js"}],"js/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoint = void 0;
var breakpoint = 1200;
exports.breakpoint = breakpoint;
},{}],"js/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elements = void 0;
var elements = {
  bodyElement: document.querySelector("body"),
  navToggler: document.getElementById("navigation-toggler"),
  animatedElements: document.querySelectorAll(".animated-in-view")
};
exports.elements = elements;
},{}],"js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _underscore = require("underscore");

var _config = require("./config");

var _base = require("./base");

var bodyElement = _base.elements.bodyElement,
    navToggler = _base.elements.navToggler;
var isNavOpen = false;

var closeMobileNav = function closeMobileNav() {
  bodyElement.classList.remove("menu-active");
  isNavOpen = false;
  navToggler.setAttribute("aria-expanded", "false");
  navToggler.setAttribute("aria-label", "Pokaż nawigację");
};

var openMobileNav = function openMobileNav() {
  bodyElement.classList.add("menu-active");
  navToggler.setAttribute("aria-expanded", "true");
  navToggler.setAttribute("aria-label", "Zamknij nawigację");
  isNavOpen = true;
};

var handleNavbarTogglerClick = function handleNavbarTogglerClick() {
  if (navToggler) {
    navToggler.addEventListener("click", function () {
      if (isNavOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }
};

var handleNavbarCloseOnHashChange = function handleNavbarCloseOnHashChange() {
  window.addEventListener("hashchange", function () {
    closeMobileNav();
  });
};

var handleMenuOnWindowResize = function handleMenuOnWindowResize() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= _config.breakpoint) {
    closeMobileNav();
  }
};

var handleMenuColorChangeOnScroll = function handleMenuColorChangeOnScroll() {
  if (window.pageYOffset > 0) {
    bodyElement.classList.add("sticky-menu");
  } else {
    bodyElement.classList.remove("sticky-menu");
  }
};

var handleNavigation = function handleNavigation() {
  handleNavbarTogglerClick();
  var debouncedHandleMenuOnWindowResize = (0, _underscore.debounce)(handleMenuOnWindowResize, 50);
  var debouncedHandleMenuColorChangeOnScroll = (0, _underscore.debounce)(handleMenuColorChangeOnScroll, 50);
  window.addEventListener("resize", debouncedHandleMenuOnWindowResize);
  window.addEventListener("scroll", debouncedHandleMenuColorChangeOnScroll);
  window.addEventListener("load", function () {
    debouncedHandleMenuOnWindowResize();
    debouncedHandleMenuColorChangeOnScroll();
    handleNavbarCloseOnHashChange();
  });
};

var _default = handleNavigation;
exports.default = _default;
},{"underscore":"node_modules/underscore/modules/index-all.js","./config":"js/config.js","./base":"js/base.js"}],"js/animations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAnimationsInView = handleAnimationsInView;

var _base = require("./base");

function handleAnimationsInView() {
  var animatedElements = _base.elements.animatedElements;
  var config = {
    rootMargin: "-15%"
  };
  var animationObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated-in-view--active");
      }
    });
  }, config);
  animatedElements.forEach(function (image) {
    animationObserver.observe(image);
  });
}
},{"./base":"js/base.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _navigation = _interopRequireDefault(require("./navigation"));

var _animations = require("./animations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _navigation.default)();
(0, _animations.handleAnimationsInView)();
window.addEventListener("load", function () {
  var swiper = new Swiper(".hero__slider", {
    navigation: {
      nextEl: ".hero__slider-arrow--next",
      prevEl: ".hero__slider-arrow--prev"
    },
    autoHeight: true,
    speed: 1000,
    effect: "slide",
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });
});
},{"./navigation":"js/navigation.js","./animations":"js/animations.js"}],"C:/Users/DevMike/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63310" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/DevMike/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map