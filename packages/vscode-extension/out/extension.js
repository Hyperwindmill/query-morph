'use strict';

var vscode = require('vscode');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var vscode__namespace = /*#__PURE__*/_interopNamespaceDefault(vscode);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$j = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$g = objectProto$j.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$j.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$g.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$i = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$i.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag$3 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag$3);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$h = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$f = objectProto$h.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$f).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (-1);

  while ((++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$e = objectProto$g.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$e.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$2(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$2(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$f;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$e.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$e.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$d.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$6 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$4 = '[object RegExp]',
    setTag$6 = '[object Set]',
    stringTag$4 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$6] = typedArrayTags[numberTag$3] =
typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$4] =
typedArrayTags[setTag$6] = typedArrayTags[stringTag$4] =
typedArrayTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$d.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$c.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$c.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$b.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$b.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$a.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (predicate(value)) {
      {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array) : [];
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$2 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$2 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */
var Set$1 = getNative(root, 'Set');

/** `Object#toString` result references. */
var mapTag$5 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$5 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$3 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
    (Map$1 && getTag(new Map$1) != mapTag$5) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag(new Set$1) != setTag$5) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$3;
        case mapCtorString: return mapTag$5;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$5;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$6.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$3 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object);

    case mapTag$4:
      return new Ctor;

    case numberTag$2:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$3:
      return cloneRegExp(object);

    case setTag$4:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$3;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

/** `Object#toString` result references. */
var setTag$3 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$3;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag$2] =
cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$2] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result;
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
      result = (isFunc) ? {} : initCloneObject(value);
      {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = (getAllKeys)
    ;

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$4.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      var result; 
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = -1,
        iterable = Object(collection);

    while ((++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee), accumulator);
  };
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto$3[key]) && !hasOwnProperty$3.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = value ;

    value = (value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  return func(collection, baseIteratee(predicate));
}

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate));
}

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index);
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee));
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty$2.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$1.call(object, key);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && true) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = 0 ;
  return baseIndexOf(array, value, index);
}

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee), accumulator, initAccum, baseEach);
}

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, negate(baseIteratee(predicate)));
}

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  return func(collection, baseIteratee(predicate));
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set$1 && (1 / setToArray(new Set$1([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (length >= LARGE_ARRAY_SIZE) {
    var set = createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = value;

    value = (value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

function PRINT_ERROR(msg) {
    /* istanbul ignore else - can't override global.console in node.js */
    if (console && console.error) {
        console.error(`Error: ${msg}`);
    }
}
function PRINT_WARNING(msg) {
    /* istanbul ignore else - can't override global.console in node.js*/
    if (console && console.warn) {
        // TODO: modify docs accordingly
        console.warn(`Warning: ${msg}`);
    }
}

function timer(func) {
    const start = new Date().getTime();
    const val = func();
    const end = new Date().getTime();
    const total = end - start;
    return { time: total, value: val };
}

// based on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216
function toFastProperties(toBecomeFast) {
    function FakeConstructor() { }
    // If our object is used as a constructor, it would receive
    FakeConstructor.prototype = toBecomeFast;
    const fakeInstance = new FakeConstructor();
    function fakeAccess() {
        return typeof fakeInstance.bar;
    }
    // help V8 understand this is a "real" prototype by actually using
    // the fake instance.
    fakeAccess();
    fakeAccess();
    // Always true condition to suppress the Firefox warning of unreachable
    // code after a return statement.
    return toBecomeFast;
}

// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function tokenLabel$1(tokType) {
    if (hasTokenLabel$1(tokType)) {
        return tokType.LABEL;
    }
    else {
        return tokType.name;
    }
}
// TODO: duplicated code to avoid extracting another sub-package -- how to avoid?
function hasTokenLabel$1(obj) {
    return isString(obj.LABEL) && obj.LABEL !== "";
}
class AbstractProduction {
    get definition() {
        return this._definition;
    }
    set definition(value) {
        this._definition = value;
    }
    constructor(_definition) {
        this._definition = _definition;
    }
    accept(visitor) {
        visitor.visit(this);
        forEach(this.definition, (prod) => {
            prod.accept(visitor);
        });
    }
}
class NonTerminal extends AbstractProduction {
    constructor(options) {
        super([]);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
    set definition(definition) {
        // immutable
    }
    get definition() {
        if (this.referencedRule !== undefined) {
            return this.referencedRule.definition;
        }
        return [];
    }
    accept(visitor) {
        visitor.visit(this);
        // don't visit children of a reference, we will get cyclic infinite loops if we do so
    }
}
class Rule extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.orgText = "";
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class Alternative extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.ignoreAmbiguities = false;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class Option extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class RepetitionMandatory extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class RepetitionMandatoryWithSeparator extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class Repetition extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class RepetitionWithSeparator extends AbstractProduction {
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class Alternation extends AbstractProduction {
    get definition() {
        return this._definition;
    }
    set definition(value) {
        this._definition = value;
    }
    constructor(options) {
        super(options.definition);
        this.idx = 1;
        this.ignoreAmbiguities = false;
        this.hasPredicates = false;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
}
class Terminal {
    constructor(options) {
        this.idx = 1;
        assign(this, pickBy(options, (v) => v !== undefined));
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
function serializeGrammar(topRules) {
    return map(topRules, serializeProduction);
}
function serializeProduction(node) {
    function convertDefinition(definition) {
        return map(definition, serializeProduction);
    }
    /* istanbul ignore else */
    if (node instanceof NonTerminal) {
        const serializedNonTerminal = {
            type: "NonTerminal",
            name: node.nonTerminalName,
            idx: node.idx,
        };
        if (isString(node.label)) {
            serializedNonTerminal.label = node.label;
        }
        return serializedNonTerminal;
    }
    else if (node instanceof Alternative) {
        return {
            type: "Alternative",
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof Option) {
        return {
            type: "Option",
            idx: node.idx,
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof RepetitionMandatory) {
        return {
            type: "RepetitionMandatory",
            idx: node.idx,
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof RepetitionMandatoryWithSeparator) {
        return {
            type: "RepetitionMandatoryWithSeparator",
            idx: node.idx,
            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof RepetitionWithSeparator) {
        return {
            type: "RepetitionWithSeparator",
            idx: node.idx,
            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof Repetition) {
        return {
            type: "Repetition",
            idx: node.idx,
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof Alternation) {
        return {
            type: "Alternation",
            idx: node.idx,
            definition: convertDefinition(node.definition),
        };
    }
    else if (node instanceof Terminal) {
        const serializedTerminal = {
            type: "Terminal",
            name: node.terminalType.name,
            label: tokenLabel$1(node.terminalType),
            idx: node.idx,
        };
        if (isString(node.label)) {
            serializedTerminal.terminalLabel = node.label;
        }
        const pattern = node.terminalType.PATTERN;
        if (node.terminalType.PATTERN) {
            serializedTerminal.pattern = isRegExp(pattern)
                ? pattern.source
                : pattern;
        }
        return serializedTerminal;
    }
    else if (node instanceof Rule) {
        return {
            type: "Rule",
            name: node.name,
            orgText: node.orgText,
            definition: convertDefinition(node.definition),
        };
        /* c8 ignore next 3 */
    }
    else {
        throw Error("non exhaustive match");
    }
}

class GAstVisitor {
    visit(node) {
        const nodeAny = node;
        switch (nodeAny.constructor) {
            case NonTerminal:
                return this.visitNonTerminal(nodeAny);
            case Alternative:
                return this.visitAlternative(nodeAny);
            case Option:
                return this.visitOption(nodeAny);
            case RepetitionMandatory:
                return this.visitRepetitionMandatory(nodeAny);
            case RepetitionMandatoryWithSeparator:
                return this.visitRepetitionMandatoryWithSeparator(nodeAny);
            case RepetitionWithSeparator:
                return this.visitRepetitionWithSeparator(nodeAny);
            case Repetition:
                return this.visitRepetition(nodeAny);
            case Alternation:
                return this.visitAlternation(nodeAny);
            case Terminal:
                return this.visitTerminal(nodeAny);
            case Rule:
                return this.visitRule(nodeAny);
            /* c8 ignore next 2 */
            default:
                throw Error("non exhaustive match");
        }
    }
    /* c8 ignore next */
    visitNonTerminal(node) { }
    /* c8 ignore next */
    visitAlternative(node) { }
    /* c8 ignore next */
    visitOption(node) { }
    /* c8 ignore next */
    visitRepetition(node) { }
    /* c8 ignore next */
    visitRepetitionMandatory(node) { }
    /* c8 ignore next 3 */
    visitRepetitionMandatoryWithSeparator(node) { }
    /* c8 ignore next */
    visitRepetitionWithSeparator(node) { }
    /* c8 ignore next */
    visitAlternation(node) { }
    /* c8 ignore next */
    visitTerminal(node) { }
    /* c8 ignore next */
    visitRule(node) { }
}

function isSequenceProd(prod) {
    return (prod instanceof Alternative ||
        prod instanceof Option ||
        prod instanceof Repetition ||
        prod instanceof RepetitionMandatory ||
        prod instanceof RepetitionMandatoryWithSeparator ||
        prod instanceof RepetitionWithSeparator ||
        prod instanceof Terminal ||
        prod instanceof Rule);
}
function isOptionalProd(prod, alreadyVisited = []) {
    const isDirectlyOptional = prod instanceof Option ||
        prod instanceof Repetition ||
        prod instanceof RepetitionWithSeparator;
    if (isDirectlyOptional) {
        return true;
    }
    // note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another
    // empty optional top rule
    // may be indirectly optional ((A?B?C?) | (D?E?F?))
    if (prod instanceof Alternation) {
        // for OR its enough for just one of the alternatives to be optional
        return some(prod.definition, (subProd) => {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else if (prod instanceof NonTerminal && includes(alreadyVisited, prod)) {
        // avoiding stack overflow due to infinite recursion
        return false;
    }
    else if (prod instanceof AbstractProduction) {
        if (prod instanceof NonTerminal) {
            alreadyVisited.push(prod);
        }
        return every(prod.definition, (subProd) => {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else {
        return false;
    }
}
function isBranchingProd(prod) {
    return prod instanceof Alternation;
}
function getProductionDslName(prod) {
    /* istanbul ignore else */
    if (prod instanceof NonTerminal) {
        return "SUBRULE";
    }
    else if (prod instanceof Option) {
        return "OPTION";
    }
    else if (prod instanceof Alternation) {
        return "OR";
    }
    else if (prod instanceof RepetitionMandatory) {
        return "AT_LEAST_ONE";
    }
    else if (prod instanceof RepetitionMandatoryWithSeparator) {
        return "AT_LEAST_ONE_SEP";
    }
    else if (prod instanceof RepetitionWithSeparator) {
        return "MANY_SEP";
    }
    else if (prod instanceof Repetition) {
        return "MANY";
    }
    else if (prod instanceof Terminal) {
        return "CONSUME";
        /* c8 ignore next 3 */
    }
    else {
        throw Error("non exhaustive match");
    }
}

/**
 *  A Grammar Walker that computes the "remaining" grammar "after" a productions in the grammar.
 */
class RestWalker {
    walk(prod, prevRest = []) {
        forEach(prod.definition, (subProd, index) => {
            const currRest = drop(prod.definition, index + 1);
            /* istanbul ignore else */
            if (subProd instanceof NonTerminal) {
                this.walkProdRef(subProd, currRest, prevRest);
            }
            else if (subProd instanceof Terminal) {
                this.walkTerminal(subProd, currRest, prevRest);
            }
            else if (subProd instanceof Alternative) {
                this.walkFlat(subProd, currRest, prevRest);
            }
            else if (subProd instanceof Option) {
                this.walkOption(subProd, currRest, prevRest);
            }
            else if (subProd instanceof RepetitionMandatory) {
                this.walkAtLeastOne(subProd, currRest, prevRest);
            }
            else if (subProd instanceof RepetitionMandatoryWithSeparator) {
                this.walkAtLeastOneSep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof RepetitionWithSeparator) {
                this.walkManySep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof Repetition) {
                this.walkMany(subProd, currRest, prevRest);
            }
            else if (subProd instanceof Alternation) {
                this.walkOr(subProd, currRest, prevRest);
            }
            else {
                throw Error("non exhaustive match");
            }
        });
    }
    walkTerminal(terminal, currRest, prevRest) { }
    walkProdRef(refProd, currRest, prevRest) { }
    walkFlat(flatProd, currRest, prevRest) {
        // ABCDEF => after the D the rest is EF
        const fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
    }
    walkOption(optionProd, currRest, prevRest) {
        // ABC(DE)?F => after the (DE)? the rest is F
        const fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F
        const fullAtLeastOneRest = [
            new Option({ definition: atLeastOneProd.definition }),
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
        const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    }
    walkMany(manyProd, currRest, prevRest) {
        // ABC(DE)*F => after the (DE)* the rest is (DE)?F
        const fullManyRest = [
            new Option({ definition: manyProd.definition }),
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
    }
    walkManySep(manySepProd, currRest, prevRest) {
        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
        const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
    }
    walkOr(orProd, currRest, prevRest) {
        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G
        const fullOrRest = currRest.concat(prevRest);
        // walk all different alternatives
        forEach(orProd.definition, (alt) => {
            // wrapping each alternative in a single definition wrapper
            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
            const prodWrapper = new Alternative({ definition: [alt] });
            this.walk(prodWrapper, fullOrRest);
        });
    }
}
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    const repSepRest = [
        new Option({
            definition: [
                new Terminal({ terminalType: repSepProd.separator }),
            ].concat(repSepProd.definition),
        }),
    ];
    const fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
}

function first(prod) {
    /* istanbul ignore else */
    if (prod instanceof NonTerminal) {
        // this could in theory cause infinite loops if
        // (1) prod A refs prod B.
        // (2) prod B refs prod A
        // (3) AB can match the empty set
        // in other words a cycle where everything is optional so the first will keep
        // looking ahead for the next optional part and will never exit
        // currently there is no safeguard for this unique edge case because
        // (1) not sure a grammar in which this can happen is useful for anything (productive)
        return first(prod.referencedRule);
    }
    else if (prod instanceof Terminal) {
        return firstForTerminal(prod);
    }
    else if (isSequenceProd(prod)) {
        return firstForSequence(prod);
    }
    else if (isBranchingProd(prod)) {
        return firstForBranching(prod);
    }
    else {
        throw Error("non exhaustive match");
    }
}
function firstForSequence(prod) {
    let firstSet = [];
    const seq = prod.definition;
    let nextSubProdIdx = 0;
    let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    let currSubProd;
    // so we enter the loop at least once (if the definition is not empty
    let isLastInnerProdOptional = true;
    // scan a sequence until it's end or until we have found a NONE optional production in it
    while (hasInnerProdsRemaining && isLastInnerProdOptional) {
        currSubProd = seq[nextSubProdIdx];
        isLastInnerProdOptional = isOptionalProd(currSubProd);
        firstSet = firstSet.concat(first(currSubProd));
        nextSubProdIdx = nextSubProdIdx + 1;
        hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return uniq(firstSet);
}
function firstForBranching(prod) {
    const allAlternativesFirsts = map(prod.definition, (innerProd) => {
        return first(innerProd);
    });
    return uniq(flatten(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
    return [terminal.terminalType];
}

// TODO: can this be removed? where is it used?
const IN = "_~IN~_";

// This ResyncFollowsWalker computes all of the follows required for RESYNC
// (skipping reference production).
class ResyncFollowsWalker extends RestWalker {
    constructor(topProd) {
        super();
        this.topProd = topProd;
        this.follows = {};
    }
    startWalking() {
        this.walk(this.topProd);
        return this.follows;
    }
    walkTerminal(terminal, currRest, prevRest) {
        // do nothing! just like in the public sector after 13:00
    }
    walkProdRef(refProd, currRest, prevRest) {
        const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) +
            this.topProd.name;
        const fullRest = currRest.concat(prevRest);
        const restProd = new Alternative({ definition: fullRest });
        const t_in_topProd_follows = first(restProd);
        this.follows[followName] = t_in_topProd_follows;
    }
}
function computeAllProdsFollows(topProductions) {
    const reSyncFollows = {};
    forEach(topProductions, (topProd) => {
        const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
        assign(reSyncFollows, currRefsFollow);
    });
    return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + IN;
}

function cc(char) {
    return char.charCodeAt(0);
}
function insertToSet(item, set) {
    if (Array.isArray(item)) {
        item.forEach(function (subItem) {
            set.push(subItem);
        });
    }
    else {
        set.push(item);
    }
}
function addFlag(flagObj, flagKey) {
    if (flagObj[flagKey] === true) {
        throw "duplicate flag " + flagKey;
    }
    flagObj[flagKey];
    flagObj[flagKey] = true;
}
function ASSERT_EXISTS(obj) {
    // istanbul ignore next
    if (obj === undefined) {
        throw Error("Internal Error - Should never get here!");
    }
    return true;
}
// istanbul ignore next
function ASSERT_NEVER_REACH_HERE() {
    throw Error("Internal Error - Should never get here!");
}
function isCharacter(obj) {
    return obj["type"] === "Character";
}

const digitsCharCodes = [];
for (let i = cc("0"); i <= cc("9"); i++) {
    digitsCharCodes.push(i);
}
const wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let i = cc("a"); i <= cc("z"); i++) {
    wordCharCodes.push(i);
}
for (let i = cc("A"); i <= cc("Z"); i++) {
    wordCharCodes.push(i);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes
const whitespaceCodes = [
    cc(" "),
    cc("\f"),
    cc("\n"),
    cc("\r"),
    cc("\t"),
    cc("\v"),
    cc("\t"),
    cc("\u00a0"),
    cc("\u1680"),
    cc("\u2000"),
    cc("\u2001"),
    cc("\u2002"),
    cc("\u2003"),
    cc("\u2004"),
    cc("\u2005"),
    cc("\u2006"),
    cc("\u2007"),
    cc("\u2008"),
    cc("\u2009"),
    cc("\u200a"),
    cc("\u2028"),
    cc("\u2029"),
    cc("\u202f"),
    cc("\u205f"),
    cc("\u3000"),
    cc("\ufeff"),
];

// consts and utilities
const hexDigitPattern = /[0-9a-fA-F]/;
const decimalPattern = /[0-9]/;
const decimalPatternNoZero = /[1-9]/;
// https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983
// https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern
class RegExpParser {
    constructor() {
        this.idx = 0;
        this.input = "";
        this.groupIdx = 0;
    }
    saveState() {
        return {
            idx: this.idx,
            input: this.input,
            groupIdx: this.groupIdx,
        };
    }
    restoreState(newState) {
        this.idx = newState.idx;
        this.input = newState.input;
        this.groupIdx = newState.groupIdx;
    }
    pattern(input) {
        // parser state
        this.idx = 0;
        this.input = input;
        this.groupIdx = 0;
        this.consumeChar("/");
        const value = this.disjunction();
        this.consumeChar("/");
        const flags = {
            type: "Flags",
            loc: { begin: this.idx, end: input.length },
            global: false,
            ignoreCase: false,
            multiLine: false,
            unicode: false,
            sticky: false,
        };
        while (this.isRegExpFlag()) {
            switch (this.popChar()) {
                case "g":
                    addFlag(flags, "global");
                    break;
                case "i":
                    addFlag(flags, "ignoreCase");
                    break;
                case "m":
                    addFlag(flags, "multiLine");
                    break;
                case "u":
                    addFlag(flags, "unicode");
                    break;
                case "y":
                    addFlag(flags, "sticky");
                    break;
            }
        }
        if (this.idx !== this.input.length) {
            throw Error("Redundant input: " + this.input.substring(this.idx));
        }
        return {
            type: "Pattern",
            flags: flags,
            value: value,
            loc: this.loc(0),
        };
    }
    disjunction() {
        const alts = [];
        const begin = this.idx;
        alts.push(this.alternative());
        while (this.peekChar() === "|") {
            this.consumeChar("|");
            alts.push(this.alternative());
        }
        return { type: "Disjunction", value: alts, loc: this.loc(begin) };
    }
    alternative() {
        const terms = [];
        const begin = this.idx;
        while (this.isTerm()) {
            terms.push(this.term());
        }
        return { type: "Alternative", value: terms, loc: this.loc(begin) };
    }
    term() {
        if (this.isAssertion()) {
            return this.assertion();
        }
        else {
            return this.atom();
        }
    }
    assertion() {
        const begin = this.idx;
        switch (this.popChar()) {
            case "^":
                return {
                    type: "StartAnchor",
                    loc: this.loc(begin),
                };
            case "$":
                return { type: "EndAnchor", loc: this.loc(begin) };
            // '\b' or '\B'
            case "\\":
                switch (this.popChar()) {
                    case "b":
                        return {
                            type: "WordBoundary",
                            loc: this.loc(begin),
                        };
                    case "B":
                        return {
                            type: "NonWordBoundary",
                            loc: this.loc(begin),
                        };
                }
                /* c8 ignore next */
                throw Error("Invalid Assertion Escape");
            // '(?=' or '(?!'
            case "(":
                this.consumeChar("?");
                let type;
                switch (this.popChar()) {
                    case "=":
                        type = "Lookahead";
                        break;
                    case "!":
                        type = "NegativeLookahead";
                        break;
                    case "<": {
                        switch (this.popChar()) {
                            case "=":
                                type = "Lookbehind";
                                break;
                            case "!":
                                type = "NegativeLookbehind";
                        }
                        break;
                    }
                }
                ASSERT_EXISTS(type);
                const disjunction = this.disjunction();
                this.consumeChar(")");
                return {
                    type: type,
                    value: disjunction,
                    loc: this.loc(begin),
                };
        }
        // istanbul ignore next
        return ASSERT_NEVER_REACH_HERE();
    }
    quantifier(isBacktracking = false) {
        let range = undefined;
        const begin = this.idx;
        switch (this.popChar()) {
            case "*":
                range = {
                    atLeast: 0,
                    atMost: Infinity,
                };
                break;
            case "+":
                range = {
                    atLeast: 1,
                    atMost: Infinity,
                };
                break;
            case "?":
                range = {
                    atLeast: 0,
                    atMost: 1,
                };
                break;
            case "{":
                const atLeast = this.integerIncludingZero();
                switch (this.popChar()) {
                    case "}":
                        range = {
                            atLeast: atLeast,
                            atMost: atLeast,
                        };
                        break;
                    case ",":
                        let atMost;
                        if (this.isDigit()) {
                            atMost = this.integerIncludingZero();
                            range = {
                                atLeast: atLeast,
                                atMost: atMost,
                            };
                        }
                        else {
                            range = {
                                atLeast: atLeast,
                                atMost: Infinity,
                            };
                        }
                        this.consumeChar("}");
                        break;
                }
                // throwing exceptions from "ASSERT_EXISTS" during backtracking
                // causes severe performance degradations
                if (isBacktracking === true && range === undefined) {
                    return undefined;
                }
                ASSERT_EXISTS(range);
                break;
        }
        // throwing exceptions from "ASSERT_EXISTS" during backtracking
        // causes severe performance degradations
        if (isBacktracking === true && range === undefined) {
            return undefined;
        }
        // istanbul ignore else
        if (ASSERT_EXISTS(range)) {
            if (this.peekChar(0) === "?") {
                this.consumeChar("?");
                range.greedy = false;
            }
            else {
                range.greedy = true;
            }
            range.type = "Quantifier";
            range.loc = this.loc(begin);
            return range;
        }
    }
    atom() {
        let atom;
        const begin = this.idx;
        switch (this.peekChar()) {
            case ".":
                atom = this.dotAll();
                break;
            case "\\":
                atom = this.atomEscape();
                break;
            case "[":
                atom = this.characterClass();
                break;
            case "(":
                atom = this.group();
                break;
        }
        if (atom === undefined && this.isPatternCharacter()) {
            atom = this.patternCharacter();
        }
        // istanbul ignore else
        if (ASSERT_EXISTS(atom)) {
            atom.loc = this.loc(begin);
            if (this.isQuantifier()) {
                atom.quantifier = this.quantifier();
            }
            return atom;
        }
    }
    dotAll() {
        this.consumeChar(".");
        return {
            type: "Set",
            complement: true,
            value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")],
        };
    }
    atomEscape() {
        this.consumeChar("\\");
        switch (this.peekChar()) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return this.decimalEscapeAtom();
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    }
    decimalEscapeAtom() {
        const value = this.positiveInteger();
        return { type: "GroupBackReference", value: value };
    }
    characterClassEscape() {
        let set;
        let complement = false;
        switch (this.popChar()) {
            case "d":
                set = digitsCharCodes;
                break;
            case "D":
                set = digitsCharCodes;
                complement = true;
                break;
            case "s":
                set = whitespaceCodes;
                break;
            case "S":
                set = whitespaceCodes;
                complement = true;
                break;
            case "w":
                set = wordCharCodes;
                break;
            case "W":
                set = wordCharCodes;
                complement = true;
                break;
        }
        // istanbul ignore else
        if (ASSERT_EXISTS(set)) {
            return { type: "Set", value: set, complement: complement };
        }
    }
    controlEscapeAtom() {
        let escapeCode;
        switch (this.popChar()) {
            case "f":
                escapeCode = cc("\f");
                break;
            case "n":
                escapeCode = cc("\n");
                break;
            case "r":
                escapeCode = cc("\r");
                break;
            case "t":
                escapeCode = cc("\t");
                break;
            case "v":
                escapeCode = cc("\v");
                break;
        }
        // istanbul ignore else
        if (ASSERT_EXISTS(escapeCode)) {
            return { type: "Character", value: escapeCode };
        }
    }
    controlLetterEscapeAtom() {
        this.consumeChar("c");
        const letter = this.popChar();
        if (/[a-zA-Z]/.test(letter) === false) {
            throw Error("Invalid ");
        }
        const letterCode = letter.toUpperCase().charCodeAt(0) - 64;
        return { type: "Character", value: letterCode };
    }
    nulCharacterAtom() {
        // TODO implement '[lookahead ∉ DecimalDigit]'
        // TODO: for the deprecated octal escape sequence
        this.consumeChar("0");
        return { type: "Character", value: cc("\0") };
    }
    hexEscapeSequenceAtom() {
        this.consumeChar("x");
        return this.parseHexDigits(2);
    }
    regExpUnicodeEscapeSequenceAtom() {
        this.consumeChar("u");
        return this.parseHexDigits(4);
    }
    identityEscapeAtom() {
        // TODO: implement "SourceCharacter but not UnicodeIDContinue"
        // // http://unicode.org/reports/tr31/#Specific_Character_Adjustments
        const escapedChar = this.popChar();
        return { type: "Character", value: cc(escapedChar) };
    }
    classPatternCharacterAtom() {
        switch (this.peekChar()) {
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
            // istanbul ignore next
            case "\\":
            // istanbul ignore next
            case "]":
                throw Error("TBD");
            default:
                const nextChar = this.popChar();
                return { type: "Character", value: cc(nextChar) };
        }
    }
    characterClass() {
        const set = [];
        let complement = false;
        this.consumeChar("[");
        if (this.peekChar(0) === "^") {
            this.consumeChar("^");
            complement = true;
        }
        while (this.isClassAtom()) {
            const from = this.classAtom();
            from.type === "Character";
            if (isCharacter(from) && this.isRangeDash()) {
                this.consumeChar("-");
                const to = this.classAtom();
                to.type === "Character";
                // a range can only be used when both sides are single characters
                if (isCharacter(to)) {
                    if (to.value < from.value) {
                        throw Error("Range out of order in character class");
                    }
                    set.push({ from: from.value, to: to.value });
                }
                else {
                    // literal dash
                    insertToSet(from.value, set);
                    set.push(cc("-"));
                    insertToSet(to.value, set);
                }
            }
            else {
                insertToSet(from.value, set);
            }
        }
        this.consumeChar("]");
        return { type: "Set", complement: complement, value: set };
    }
    classAtom() {
        switch (this.peekChar()) {
            // istanbul ignore next
            case "]":
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
                throw Error("TBD");
            case "\\":
                return this.classEscape();
            default:
                return this.classPatternCharacterAtom();
        }
    }
    classEscape() {
        this.consumeChar("\\");
        switch (this.peekChar()) {
            // Matches a backspace.
            // (Not to be confused with \b word boundary outside characterClass)
            case "b":
                this.consumeChar("b");
                return { type: "Character", value: cc("\u0008") };
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    }
    group() {
        let capturing = true;
        this.consumeChar("(");
        switch (this.peekChar(0)) {
            case "?":
                this.consumeChar("?");
                this.consumeChar(":");
                capturing = false;
                break;
            default:
                this.groupIdx++;
                break;
        }
        const value = this.disjunction();
        this.consumeChar(")");
        const groupAst = {
            type: "Group",
            capturing: capturing,
            value: value,
        };
        if (capturing) {
            groupAst["idx"] = this.groupIdx;
        }
        return groupAst;
    }
    positiveInteger() {
        let number = this.popChar();
        // istanbul ignore next - can't ever get here due to previous lookahead checks
        // still implementing this error checking in case this ever changes.
        if (decimalPatternNoZero.test(number) === false) {
            throw Error("Expecting a positive integer");
        }
        while (decimalPattern.test(this.peekChar(0))) {
            number += this.popChar();
        }
        return parseInt(number, 10);
    }
    integerIncludingZero() {
        let number = this.popChar();
        if (decimalPattern.test(number) === false) {
            throw Error("Expecting an integer");
        }
        while (decimalPattern.test(this.peekChar(0))) {
            number += this.popChar();
        }
        return parseInt(number, 10);
    }
    patternCharacter() {
        const nextChar = this.popChar();
        switch (nextChar) {
            // istanbul ignore next
            case "\n":
            // istanbul ignore next
            case "\r":
            // istanbul ignore next
            case "\u2028":
            // istanbul ignore next
            case "\u2029":
            // istanbul ignore next
            case "^":
            // istanbul ignore next
            case "$":
            // istanbul ignore next
            case "\\":
            // istanbul ignore next
            case ".":
            // istanbul ignore next
            case "*":
            // istanbul ignore next
            case "+":
            // istanbul ignore next
            case "?":
            // istanbul ignore next
            case "(":
            // istanbul ignore next
            case ")":
            // istanbul ignore next
            case "[":
            // istanbul ignore next
            case "|":
                // istanbul ignore next
                throw Error("TBD");
            default:
                return { type: "Character", value: cc(nextChar) };
        }
    }
    isRegExpFlag() {
        switch (this.peekChar(0)) {
            case "g":
            case "i":
            case "m":
            case "u":
            case "y":
                return true;
            default:
                return false;
        }
    }
    isRangeDash() {
        return this.peekChar() === "-" && this.isClassAtom(1);
    }
    isDigit() {
        return decimalPattern.test(this.peekChar(0));
    }
    isClassAtom(howMuch = 0) {
        switch (this.peekChar(howMuch)) {
            case "]":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    }
    isTerm() {
        return this.isAtom() || this.isAssertion();
    }
    isAtom() {
        if (this.isPatternCharacter()) {
            return true;
        }
        switch (this.peekChar(0)) {
            case ".":
            case "\\": // atomEscape
            case "[": // characterClass
            // TODO: isAtom must be called before isAssertion - disambiguate
            case "(": // group
                return true;
            default:
                return false;
        }
    }
    isAssertion() {
        switch (this.peekChar(0)) {
            case "^":
            case "$":
                return true;
            // '\b' or '\B'
            case "\\":
                switch (this.peekChar(1)) {
                    case "b":
                    case "B":
                        return true;
                    default:
                        return false;
                }
            // '(?=' or '(?!' or `(?<=` or `(?<!`
            case "(":
                return (this.peekChar(1) === "?" &&
                    (this.peekChar(2) === "=" ||
                        this.peekChar(2) === "!" ||
                        (this.peekChar(2) === "<" &&
                            (this.peekChar(3) === "=" || this.peekChar(3) === "!"))));
            default:
                return false;
        }
    }
    isQuantifier() {
        const prevState = this.saveState();
        try {
            return this.quantifier(true) !== undefined;
        }
        catch (e) {
            return false;
        }
        finally {
            this.restoreState(prevState);
        }
    }
    isPatternCharacter() {
        switch (this.peekChar()) {
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
            case "/":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    }
    parseHexDigits(howMany) {
        let hexString = "";
        for (let i = 0; i < howMany; i++) {
            const hexChar = this.popChar();
            if (hexDigitPattern.test(hexChar) === false) {
                throw Error("Expecting a HexDecimal digits");
            }
            hexString += hexChar;
        }
        const charCode = parseInt(hexString, 16);
        return { type: "Character", value: charCode };
    }
    peekChar(howMuch = 0) {
        return this.input[this.idx + howMuch];
    }
    popChar() {
        const nextChar = this.peekChar(0);
        this.consumeChar(undefined);
        return nextChar;
    }
    consumeChar(char) {
        if (char !== undefined && this.input[this.idx] !== char) {
            throw Error("Expected: '" +
                char +
                "' but found: '" +
                this.input[this.idx] +
                "' at offset: " +
                this.idx);
        }
        if (this.idx >= this.input.length) {
            throw Error("Unexpected end of input");
        }
        this.idx++;
    }
    loc(begin) {
        return { begin: begin, end: this.idx };
    }
}

class BaseRegExpVisitor {
    visitChildren(node) {
        for (const key in node) {
            const child = node[key];
            /* istanbul ignore else */
            if (node.hasOwnProperty(key)) {
                if (child.type !== undefined) {
                    this.visit(child);
                }
                else if (Array.isArray(child)) {
                    child.forEach((subChild) => {
                        this.visit(subChild);
                    }, this);
                }
            }
        }
    }
    visit(node) {
        switch (node.type) {
            case "Pattern":
                this.visitPattern(node);
                break;
            case "Flags":
                this.visitFlags(node);
                break;
            case "Disjunction":
                this.visitDisjunction(node);
                break;
            case "Alternative":
                this.visitAlternative(node);
                break;
            case "StartAnchor":
                this.visitStartAnchor(node);
                break;
            case "EndAnchor":
                this.visitEndAnchor(node);
                break;
            case "WordBoundary":
                this.visitWordBoundary(node);
                break;
            case "NonWordBoundary":
                this.visitNonWordBoundary(node);
                break;
            case "Lookahead":
                this.visitLookahead(node);
                break;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                break;
            case "Lookbehind":
                this.visitLookbehind(node);
                break;
            case "NegativeLookbehind":
                this.visitNegativeLookbehind(node);
                break;
            case "Character":
                this.visitCharacter(node);
                break;
            case "Set":
                this.visitSet(node);
                break;
            case "Group":
                this.visitGroup(node);
                break;
            case "GroupBackReference":
                this.visitGroupBackReference(node);
                break;
            case "Quantifier":
                this.visitQuantifier(node);
                break;
        }
        this.visitChildren(node);
    }
    visitPattern(node) { }
    visitFlags(node) { }
    visitDisjunction(node) { }
    visitAlternative(node) { }
    // Assertion
    visitStartAnchor(node) { }
    visitEndAnchor(node) { }
    visitWordBoundary(node) { }
    visitNonWordBoundary(node) { }
    visitLookahead(node) { }
    visitNegativeLookahead(node) { }
    visitLookbehind(node) { }
    visitNegativeLookbehind(node) { }
    // atoms
    visitCharacter(node) { }
    visitSet(node) { }
    visitGroup(node) { }
    visitGroupBackReference(node) { }
    visitQuantifier(node) { }
}

let regExpAstCache = {};
const regExpParser = new RegExpParser();
function getRegExpAst(regExp) {
    const regExpStr = regExp.toString();
    if (regExpAstCache.hasOwnProperty(regExpStr)) {
        return regExpAstCache[regExpStr];
    }
    else {
        const regExpAst = regExpParser.pattern(regExpStr);
        regExpAstCache[regExpStr] = regExpAst;
        return regExpAst;
    }
}
function clearRegExpParserCache() {
    regExpAstCache = {};
}

const complementErrorMessage = "Complement Sets are not supported for first char optimization";
const failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
    try {
        const ast = getRegExpAst(regExp);
        const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
        return firstChars;
    }
    catch (e) {
        /* istanbul ignore next */
        // Testing this relies on the regexp-to-ast library having a bug... */
        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
        if (e.message === complementErrorMessage) {
            if (ensureOptimizations) {
                PRINT_WARNING(`${failedOptimizationPrefixMsg}` +
                    `\tUnable to optimize: < ${regExp.toString()} >\n` +
                    "\tComplement Sets cannot be automatically optimized.\n" +
                    "\tThis will disable the lexer's first char optimizations.\n" +
                    "\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
            }
        }
        else {
            let msgSuffix = "";
            if (ensureOptimizations) {
                msgSuffix =
                    "\n\tThis will disable the lexer's first char optimizations.\n" +
                        "\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            }
            PRINT_ERROR(`${failedOptimizationPrefixMsg}\n` +
                `\tFailed parsing: < ${regExp.toString()} >\n` +
                `\tUsing the @chevrotain/regexp-to-ast library\n` +
                "\tPlease open an issue at: https://github.com/chevrotain/chevrotain/issues" +
                msgSuffix);
        }
    }
    return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
    switch (ast.type) {
        case "Disjunction":
            for (let i = 0; i < ast.value.length; i++) {
                firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
            }
            break;
        case "Alternative":
            const terms = ast.value;
            for (let i = 0; i < terms.length; i++) {
                const term = terms[i];
                // skip terms that cannot effect the first char results
                switch (term.type) {
                    case "EndAnchor":
                    // A group back reference cannot affect potential starting char.
                    // because if a back reference is the first production than automatically
                    // the group being referenced has had to come BEFORE so its codes have already been added
                    case "GroupBackReference":
                    // assertions do not affect potential starting codes
                    case "Lookahead":
                    case "NegativeLookahead":
                    case "Lookbehind":
                    case "NegativeLookbehind":
                    case "StartAnchor":
                    case "WordBoundary":
                    case "NonWordBoundary":
                        continue;
                }
                const atom = term;
                switch (atom.type) {
                    case "Character":
                        addOptimizedIdxToResult(atom.value, result, ignoreCase);
                        break;
                    case "Set":
                        if (atom.complement === true) {
                            throw Error(complementErrorMessage);
                        }
                        forEach(atom.value, (code) => {
                            if (typeof code === "number") {
                                addOptimizedIdxToResult(code, result, ignoreCase);
                            }
                            else {
                                // range
                                const range = code;
                                // cannot optimize when ignoreCase is
                                if (ignoreCase === true) {
                                    for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                }
                                // Optimization (2 orders of magnitude less work for very large ranges)
                                else {
                                    // handle unoptimized values
                                    for (let rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                    // Less common charCode where we optimize for faster init time, by using larger "buckets"
                                    if (range.to >= minOptimizationVal) {
                                        const minUnOptVal = range.from >= minOptimizationVal
                                            ? range.from
                                            : minOptimizationVal;
                                        const maxUnOptVal = range.to;
                                        const minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                                        const maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                                        for (let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                                            result[currOptIdx] = currOptIdx;
                                        }
                                    }
                                }
                            }
                        });
                        break;
                    case "Group":
                        firstCharOptimizedIndices(atom.value, result, ignoreCase);
                        break;
                    /* istanbul ignore next */
                    default:
                        throw Error("Non Exhaustive Match");
                }
                // reached a mandatory production, no more **start** codes can be found on this alternative
                const isOptionalQuantifier = atom.quantifier !== undefined && atom.quantifier.atLeast === 0;
                if (
                // A group may be optional due to empty contents /(?:)/
                // or if everything inside it is optional /((a)?)/
                (atom.type === "Group" && isWholeOptional(atom) === false) ||
                    // If this term is not a group it may only be optional if it has an optional quantifier
                    (atom.type !== "Group" && isOptionalQuantifier === false)) {
                    break;
                }
            }
            break;
        /* istanbul ignore next */
        default:
            throw Error("non exhaustive match!");
    }
    // console.log(Object.keys(result).length)
    return values(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
    const optimizedCharIdx = charCodeToOptimizedIndex(code);
    result[optimizedCharIdx] = optimizedCharIdx;
    if (ignoreCase === true) {
        handleIgnoreCase(code, result);
    }
}
function handleIgnoreCase(code, result) {
    const char = String.fromCharCode(code);
    const upperChar = char.toUpperCase();
    /* istanbul ignore else */
    if (upperChar !== char) {
        const optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
    }
    else {
        const lowerChar = char.toLowerCase();
        if (lowerChar !== char) {
            const optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
            result[optimizedCharIdx] = optimizedCharIdx;
        }
    }
}
function findCode(setNode, targetCharCodes) {
    return find(setNode.value, (codeOrRange) => {
        if (typeof codeOrRange === "number") {
            return includes(targetCharCodes, codeOrRange);
        }
        else {
            // range
            const range = codeOrRange;
            return (find(targetCharCodes, (targetCode) => range.from <= targetCode && targetCode <= range.to) !== undefined);
        }
    });
}
function isWholeOptional(ast) {
    const quantifier = ast.quantifier;
    if (quantifier && quantifier.atLeast === 0) {
        return true;
    }
    if (!ast.value) {
        return false;
    }
    return isArray(ast.value)
        ? every(ast.value, isWholeOptional)
        : isWholeOptional(ast.value);
}
class CharCodeFinder extends BaseRegExpVisitor {
    constructor(targetCharCodes) {
        super();
        this.targetCharCodes = targetCharCodes;
        this.found = false;
    }
    visitChildren(node) {
        // No need to keep looking...
        if (this.found === true) {
            return;
        }
        // switch lookaheads / lookbehinds as they do not actually consume any characters thus
        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
        switch (node.type) {
            case "Lookahead":
                this.visitLookahead(node);
                return;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
            case "Lookbehind":
                this.visitLookbehind(node);
                return;
            case "NegativeLookbehind":
                this.visitNegativeLookbehind(node);
                return;
        }
        super.visitChildren(node);
    }
    visitCharacter(node) {
        if (includes(this.targetCharCodes, node.value)) {
            this.found = true;
        }
    }
    visitSet(node) {
        if (node.complement) {
            if (findCode(node, this.targetCharCodes) === undefined) {
                this.found = true;
            }
        }
        else {
            if (findCode(node, this.targetCharCodes) !== undefined) {
                this.found = true;
            }
        }
    }
}
function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
        const ast = getRegExpAst(pattern);
        const charCodeFinder = new CharCodeFinder(charCodes);
        charCodeFinder.visit(ast);
        return charCodeFinder.found;
    }
    else {
        return (find(pattern, (char) => {
            return includes(charCodes, char.charCodeAt(0));
        }) !== undefined);
    }
}

const PATTERN = "PATTERN";
const DEFAULT_MODE = "defaultMode";
const MODES = "modes";
let SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function analyzeTokenTypes(tokenTypes, options) {
    options = defaults(options, {
        useSticky: SUPPORT_STICKY,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: ["\r", "\n"],
        tracer: (msg, action) => action(),
    });
    const tracer = options.tracer;
    tracer("initCharCodeToOptimizedIndexMap", () => {
        initCharCodeToOptimizedIndexMap();
    });
    let onlyRelevantTypes;
    tracer("Reject Lexer.NA", () => {
        onlyRelevantTypes = reject(tokenTypes, (currType) => {
            return currType[PATTERN] === Lexer.NA;
        });
    });
    let hasCustom = false;
    let allTransformedPatterns;
    tracer("Transform Patterns", () => {
        hasCustom = false;
        allTransformedPatterns = map(onlyRelevantTypes, (currType) => {
            const currPattern = currType[PATTERN];
            /* istanbul ignore else */
            if (isRegExp(currPattern)) {
                const regExpSource = currPattern.source;
                if (regExpSource.length === 1 &&
                    // only these regExp meta characters which can appear in a length one regExp
                    regExpSource !== "^" &&
                    regExpSource !== "$" &&
                    regExpSource !== "." &&
                    !currPattern.ignoreCase) {
                    return regExpSource;
                }
                else if (regExpSource.length === 2 &&
                    regExpSource[0] === "\\" &&
                    // not a meta character
                    !includes([
                        "d",
                        "D",
                        "s",
                        "S",
                        "t",
                        "r",
                        "n",
                        "t",
                        "0",
                        "c",
                        "b",
                        "B",
                        "f",
                        "v",
                        "w",
                        "W",
                    ], regExpSource[1])) {
                    // escaped meta Characters: /\+/ /\[/
                    // or redundant escaping: /\a/
                    // without the escaping "\"
                    return regExpSource[1];
                }
                else {
                    return options.useSticky
                        ? addStickyFlag(currPattern)
                        : addStartOfInput(currPattern);
                }
            }
            else if (isFunction(currPattern)) {
                hasCustom = true;
                // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
                return { exec: currPattern };
            }
            else if (typeof currPattern === "object") {
                hasCustom = true;
                // ICustomPattern
                return currPattern;
            }
            else if (typeof currPattern === "string") {
                if (currPattern.length === 1) {
                    return currPattern;
                }
                else {
                    const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                    const wrappedRegExp = new RegExp(escapedRegExpString);
                    return options.useSticky
                        ? addStickyFlag(wrappedRegExp)
                        : addStartOfInput(wrappedRegExp);
                }
            }
            else {
                throw Error("non exhaustive match");
            }
        });
    });
    let patternIdxToType;
    let patternIdxToGroup;
    let patternIdxToLongerAltIdxArr;
    let patternIdxToPushMode;
    let patternIdxToPopMode;
    tracer("misc mapping", () => {
        patternIdxToType = map(onlyRelevantTypes, (currType) => currType.tokenTypeIdx);
        patternIdxToGroup = map(onlyRelevantTypes, (clazz) => {
            const groupName = clazz.GROUP;
            /* istanbul ignore next */
            if (groupName === Lexer.SKIPPED) {
                return undefined;
            }
            else if (isString(groupName)) {
                return groupName;
            }
            else if (isUndefined(groupName)) {
                return false;
            }
            else {
                throw Error("non exhaustive match");
            }
        });
        patternIdxToLongerAltIdxArr = map(onlyRelevantTypes, (clazz) => {
            const longerAltType = clazz.LONGER_ALT;
            if (longerAltType) {
                const longerAltIdxArr = isArray(longerAltType)
                    ? map(longerAltType, (type) => indexOf(onlyRelevantTypes, type))
                    : [indexOf(onlyRelevantTypes, longerAltType)];
                return longerAltIdxArr;
            }
        });
        patternIdxToPushMode = map(onlyRelevantTypes, (clazz) => clazz.PUSH_MODE);
        patternIdxToPopMode = map(onlyRelevantTypes, (clazz) => has(clazz, "POP_MODE"));
    });
    let patternIdxToCanLineTerminator;
    tracer("Line Terminator Handling", () => {
        const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
        patternIdxToCanLineTerminator = map(onlyRelevantTypes, (tokType) => false);
        if (options.positionTracking !== "onlyOffset") {
            patternIdxToCanLineTerminator = map(onlyRelevantTypes, (tokType) => {
                if (has(tokType, "LINE_BREAKS")) {
                    return !!tokType.LINE_BREAKS;
                }
                else {
                    return (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false &&
                        canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN));
                }
            });
        }
    });
    let patternIdxToIsCustom;
    let patternIdxToShort;
    let emptyGroups;
    let patternIdxToConfig;
    tracer("Misc Mapping #2", () => {
        patternIdxToIsCustom = map(onlyRelevantTypes, isCustomPattern);
        patternIdxToShort = map(allTransformedPatterns, isShortPattern);
        emptyGroups = reduce(onlyRelevantTypes, (acc, clazz) => {
            const groupName = clazz.GROUP;
            if (isString(groupName) && !(groupName === Lexer.SKIPPED)) {
                acc[groupName] = [];
            }
            return acc;
        }, {});
        patternIdxToConfig = map(allTransformedPatterns, (x, idx) => {
            return {
                pattern: allTransformedPatterns[idx],
                longerAlt: patternIdxToLongerAltIdxArr[idx],
                canLineTerminator: patternIdxToCanLineTerminator[idx],
                isCustom: patternIdxToIsCustom[idx],
                short: patternIdxToShort[idx],
                group: patternIdxToGroup[idx],
                push: patternIdxToPushMode[idx],
                pop: patternIdxToPopMode[idx],
                tokenTypeIdx: patternIdxToType[idx],
                tokenType: onlyRelevantTypes[idx],
            };
        });
    });
    let canBeOptimized = true;
    let charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) {
        tracer("First Char Optimization", () => {
            charCodeToPatternIdxToConfig = reduce(onlyRelevantTypes, (result, currTokType, idx) => {
                if (typeof currTokType.PATTERN === "string") {
                    const charCode = currTokType.PATTERN.charCodeAt(0);
                    const optimizedIdx = charCodeToOptimizedIndex(charCode);
                    addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
                }
                else if (isArray(currTokType.START_CHARS_HINT)) {
                    let lastOptimizedIdx;
                    forEach(currTokType.START_CHARS_HINT, (charOrInt) => {
                        const charCode = typeof charOrInt === "string"
                            ? charOrInt.charCodeAt(0)
                            : charOrInt;
                        const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
                        // Avoid adding the config multiple times
                        /* istanbul ignore else */
                        // - Difficult to check this scenario effects as it is only a performance
                        //   optimization that does not change correctness
                        if (lastOptimizedIdx !== currOptimizedIdx) {
                            lastOptimizedIdx = currOptimizedIdx;
                            addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
                        }
                    });
                }
                else if (isRegExp(currTokType.PATTERN)) {
                    if (currTokType.PATTERN.unicode) {
                        canBeOptimized = false;
                        if (options.ensureOptimizations) {
                            PRINT_ERROR(`${failedOptimizationPrefixMsg}` +
                                `\tUnable to analyze < ${currTokType.PATTERN.toString()} > pattern.\n` +
                                "\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n" +
                                "\tThis will disable the lexer's first char optimizations.\n" +
                                "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                        }
                    }
                    else {
                        const optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
                        /* istanbul ignore if */
                        // start code will only be empty given an empty regExp or failure of regexp-to-ast library
                        // the first should be a different validation and the second cannot be tested.
                        if (isEmpty(optimizedCodes)) {
                            // we cannot understand what codes may start possible matches
                            // The optimization correctness requires knowing start codes for ALL patterns.
                            // Not actually sure this is an error, no debug message
                            canBeOptimized = false;
                        }
                        forEach(optimizedCodes, (code) => {
                            addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                        });
                    }
                }
                else {
                    if (options.ensureOptimizations) {
                        PRINT_ERROR(`${failedOptimizationPrefixMsg}` +
                            `\tTokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.\n` +
                            "\tThis will disable the lexer's first char optimizations.\n" +
                            "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                    }
                    canBeOptimized = false;
                }
                return result;
            }, []);
        });
    }
    return {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized,
    };
}
function validatePatterns(tokenTypes, validModesNames) {
    let errors = [];
    const missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    const invalidResult = findInvalidPatterns(missingResult.valid);
    const validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
}
function validateRegExpPattern(tokenTypes) {
    let errors = [];
    const withRegExpPatterns = filter(tokenTypes, (currTokType) => isRegExp(currTokType[PATTERN]));
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
}
function findMissingPatterns(tokenTypes) {
    const tokenTypesWithMissingPattern = filter(tokenTypes, (currType) => {
        return !has(currType, PATTERN);
    });
    const errors = map(tokenTypesWithMissingPattern, (currType) => {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- missing static 'PATTERN' property",
            type: LexerDefinitionErrorType.MISSING_PATTERN,
            tokenTypes: [currType],
        };
    });
    const valid = difference(tokenTypes, tokenTypesWithMissingPattern);
    return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
    const tokenTypesWithInvalidPattern = filter(tokenTypes, (currType) => {
        const pattern = currType[PATTERN];
        return (!isRegExp(pattern) &&
            !isFunction(pattern) &&
            !has(pattern, "exec") &&
            !isString(pattern));
    });
    const errors = map(tokenTypesWithInvalidPattern, (currType) => {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' can only be a RegExp, a" +
                " Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: LexerDefinitionErrorType.INVALID_PATTERN,
            tokenTypes: [currType],
        };
    });
    const valid = difference(tokenTypes, tokenTypesWithInvalidPattern);
    return { errors, valid };
}
const end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
    class EndAnchorFinder extends BaseRegExpVisitor {
        constructor() {
            super(...arguments);
            this.found = false;
        }
        visitEndAnchor(node) {
            this.found = true;
        }
    }
    const invalidRegex = filter(tokenTypes, (currType) => {
        const pattern = currType.PATTERN;
        try {
            const regexpAst = getRegExpAst(pattern);
            const endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return end_of_input.test(pattern.source);
        }
    });
    const errors = map(invalidRegex, (currType) => {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                currType.name +
                "<- static 'PATTERN' cannot contain end of input anchor '$'\n" +
                "\tSee chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
            tokenTypes: [currType],
        };
    });
    return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
    const matchesEmptyString = filter(tokenTypes, (currType) => {
        const pattern = currType.PATTERN;
        return pattern.test("");
    });
    const errors = map(matchesEmptyString, (currType) => {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' must not match an empty string",
            type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
            tokenTypes: [currType],
        };
    });
    return errors;
}
const start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
    class StartAnchorFinder extends BaseRegExpVisitor {
        constructor() {
            super(...arguments);
            this.found = false;
        }
        visitStartAnchor(node) {
            this.found = true;
        }
    }
    const invalidRegex = filter(tokenTypes, (currType) => {
        const pattern = currType.PATTERN;
        try {
            const regexpAst = getRegExpAst(pattern);
            const startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return start_of_input.test(pattern.source);
        }
    });
    const errors = map(invalidRegex, (currType) => {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                currType.name +
                "<- static 'PATTERN' cannot contain start of input anchor '^'\n" +
                "\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
            tokenTypes: [currType],
        };
    });
    return errors;
}
function findUnsupportedFlags(tokenTypes) {
    const invalidFlags = filter(tokenTypes, (currType) => {
        const pattern = currType[PATTERN];
        return pattern instanceof RegExp && (pattern.multiline || pattern.global);
    });
    const errors = map(invalidFlags, (currType) => {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [currType],
        };
    });
    return errors;
}
// This can only test for identical duplicate RegExps, not semantically equivalent ones.
function findDuplicatePatterns(tokenTypes) {
    const found = [];
    let identicalPatterns = map(tokenTypes, (outerType) => {
        return reduce(tokenTypes, (result, innerType) => {
            if (outerType.PATTERN.source === innerType.PATTERN.source &&
                !includes(found, innerType) &&
                innerType.PATTERN !== Lexer.NA) {
                // this avoids duplicates in the result, each Token Type may only appear in one "set"
                // in essence we are creating Equivalence classes on equality relation.
                found.push(innerType);
                result.push(innerType);
                return result;
            }
            return result;
        }, []);
    });
    identicalPatterns = compact(identicalPatterns);
    const duplicatePatterns = filter(identicalPatterns, (currIdenticalSet) => {
        return currIdenticalSet.length > 1;
    });
    const errors = map(duplicatePatterns, (setOfIdentical) => {
        const tokenTypeNames = map(setOfIdentical, (currType) => {
            return currType.name;
        });
        const dupPatternSrc = head(setOfIdentical).PATTERN;
        return {
            message: `The same RegExp pattern ->${dupPatternSrc}<-` +
                `has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
            type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical,
        };
    });
    return errors;
}
function findInvalidGroupType(tokenTypes) {
    const invalidTypes = filter(tokenTypes, (clazz) => {
        if (!has(clazz, "GROUP")) {
            return false;
        }
        const group = clazz.GROUP;
        return group !== Lexer.SKIPPED && group !== Lexer.NA && !isString(group);
    });
    const errors = map(invalidTypes, (currType) => {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [currType],
        };
    });
    return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
    const invalidModes = filter(tokenTypes, (clazz) => {
        return (clazz.PUSH_MODE !== undefined && !includes(validModes, clazz.PUSH_MODE));
    });
    const errors = map(invalidModes, (tokType) => {
        const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-` +
            `which does not exist`;
        return {
            message: msg,
            type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [tokType],
        };
    });
    return errors;
}
function findUnreachablePatterns(tokenTypes) {
    const errors = [];
    const canBeTested = reduce(tokenTypes, (result, tokType, idx) => {
        const pattern = tokType.PATTERN;
        if (pattern === Lexer.NA) {
            return result;
        }
        // a more comprehensive validation for all forms of regExps would require
        // deeper regExp analysis capabilities
        if (isString(pattern)) {
            result.push({ str: pattern, idx, tokenType: tokType });
        }
        else if (isRegExp(pattern) && noMetaChar(pattern)) {
            result.push({ str: pattern.source, idx, tokenType: tokType });
        }
        return result;
    }, []);
    forEach(tokenTypes, (aTokType, aIdx) => {
        forEach(canBeTested, ({ str: bStr, idx: bIdx, tokenType: bTokType }) => {
            if (aIdx < bIdx && tryToMatchStrToPattern(bStr, aTokType.PATTERN)) {
                const msg = `Token: ->${bTokType.name}<- can never be matched.\n` +
                    `Because it appears AFTER the Token Type ->${aTokType.name}<-` +
                    `in the lexer's definition.\n` +
                    `See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
                errors.push({
                    message: msg,
                    type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
                    tokenTypes: [aTokType, bTokType],
                });
            }
        });
    });
    return errors;
}
function tryToMatchStrToPattern(str, pattern) {
    if (isRegExp(pattern)) {
        if (usesLookAheadOrBehind(pattern)) {
            // if lookahead or lookbehind assertions are used
            // we assume they would be responsible for disambiguating the match
            // The alternative is to risk false positive unreachable pattern errors.
            // e.g.: /(?<!a)b/ and /b/ tokens would cause such false positives.
            return false;
        }
        const regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
    }
    else if (isFunction(pattern)) {
        // maintain the API of custom patterns
        return pattern(str, 0, [], {});
    }
    else if (has(pattern, "exec")) {
        // maintain the API of custom patterns
        return pattern.exec(str, 0, [], {});
    }
    else if (typeof pattern === "string") {
        return pattern === str;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function noMetaChar(regExp) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const metaChars = [
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{",
    ];
    return (find(metaChars, (char) => regExp.source.indexOf(char) !== -1) === undefined);
}
function usesLookAheadOrBehind(regExp) {
    return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(regExp.source);
}
function addStartOfInput(pattern) {
    const flags = pattern.ignoreCase ? "i" : "";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`^(?:${pattern.source})`, flags);
}
function addStickyFlag(pattern) {
    const flags = pattern.ignoreCase ? "iy" : "y";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const errors = [];
    // some run time checks to help the end users.
    if (!has(lexerDefinition, DEFAULT_MODE)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                DEFAULT_MODE +
                "> property in its definition\n",
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE,
        });
    }
    if (!has(lexerDefinition, MODES)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                MODES +
                "> property in its definition\n",
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY,
        });
    }
    if (has(lexerDefinition, MODES) &&
        has(lexerDefinition, DEFAULT_MODE) &&
        !has(lexerDefinition.modes, lexerDefinition.defaultMode)) {
        errors.push({
            message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>` +
                `which does not exist\n`,
            type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST,
        });
    }
    if (has(lexerDefinition, MODES)) {
        forEach(lexerDefinition.modes, (currModeValue, currModeName) => {
            forEach(currModeValue, (currTokType, currIdx) => {
                if (isUndefined(currTokType)) {
                    errors.push({
                        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:` +
                            `<${currModeName}> at index: <${currIdx}>\n`,
                        type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED,
                    });
                }
                else if (has(currTokType, "LONGER_ALT")) {
                    const longerAlt = isArray(currTokType.LONGER_ALT)
                        ? currTokType.LONGER_ALT
                        : [currTokType.LONGER_ALT];
                    forEach(longerAlt, (currLongerAlt) => {
                        if (!isUndefined(currLongerAlt) &&
                            !includes(currModeValue, currLongerAlt)) {
                            errors.push({
                                message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>\n`,
                                type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE,
                            });
                        }
                    });
                }
            });
        });
    }
    return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const warnings = [];
    let hasAnyLineBreak = false;
    const allTokenTypes = compact(flatten(values(lexerDefinition.modes)));
    const concreteTokenTypes = reject(allTokenTypes, (currType) => currType[PATTERN] === Lexer.NA);
    const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) {
        forEach(concreteTokenTypes, (tokType) => {
            const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
            if (currIssue !== false) {
                const message = buildLineBreakIssueMessage(tokType, currIssue);
                const warningDescriptor = {
                    message,
                    type: currIssue.issue,
                    tokenType: tokType,
                };
                warnings.push(warningDescriptor);
            }
            else {
                // we don't want to attempt to scan if the user explicitly specified the line_breaks option.
                if (has(tokType, "LINE_BREAKS")) {
                    if (tokType.LINE_BREAKS === true) {
                        hasAnyLineBreak = true;
                    }
                }
                else {
                    if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
                        hasAnyLineBreak = true;
                    }
                }
            }
        });
    }
    if (trackLines && !hasAnyLineBreak) {
        warnings.push({
            message: "Warning: No LINE_BREAKS Found.\n" +
                "\tThis Lexer has been defined to track line and column information,\n" +
                "\tBut none of the Token Types can be identified as matching a line terminator.\n" +
                "\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n" +
                "\tfor details.",
            type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS,
        });
    }
    return warnings;
}
function cloneEmptyGroups(emptyGroups) {
    const clonedResult = {};
    const groupKeys = keys(emptyGroups);
    forEach(groupKeys, (currKey) => {
        const currGroupValue = emptyGroups[currKey];
        /* istanbul ignore else */
        if (isArray(currGroupValue)) {
            clonedResult[currKey] = [];
        }
        else {
            throw Error("non exhaustive match");
        }
    });
    return clonedResult;
}
// TODO: refactor to avoid duplication
function isCustomPattern(tokenType) {
    const pattern = tokenType.PATTERN;
    /* istanbul ignore else */
    if (isRegExp(pattern)) {
        return false;
    }
    else if (isFunction(pattern)) {
        // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
        return true;
    }
    else if (has(pattern, "exec")) {
        // ICustomPattern
        return true;
    }
    else if (isString(pattern)) {
        return false;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function isShortPattern(pattern) {
    if (isString(pattern) && pattern.length === 1) {
        return pattern.charCodeAt(0);
    }
    else {
        return false;
    }
}
/**
 * Faster than using a RegExp for default newline detection during lexing.
 */
const LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function (text) {
        const len = text.length;
        for (let i = this.lastIndex; i < len; i++) {
            const c = text.charCodeAt(i);
            if (c === 10) {
                this.lastIndex = i + 1;
                return true;
            }
            else if (c === 13) {
                if (text.charCodeAt(i + 1) === 10) {
                    this.lastIndex = i + 2;
                }
                else {
                    this.lastIndex = i + 1;
                }
                return true;
            }
        }
        return false;
    },
    lastIndex: 0,
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if (has(tokType, "LINE_BREAKS")) {
        // if the user explicitly declared the line_breaks option we will respect their choice
        // and assume it is correct.
        return false;
    }
    else {
        /* istanbul ignore else */
        if (isRegExp(tokType.PATTERN)) {
            try {
                // TODO: why is the casting suddenly needed?
                canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
            }
            catch (e) {
                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */
                return {
                    issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
                    errMsg: e.message,
                };
            }
            return false;
        }
        else if (isString(tokType.PATTERN)) {
            // string literal patterns can always be analyzed to detect line terminator usage
            return false;
        }
        else if (isCustomPattern(tokType)) {
            // custom token types
            return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
        }
        else {
            throw Error("non exhaustive match");
        }
    }
}
function buildLineBreakIssueMessage(tokType, details) {
    /* istanbul ignore else */
    if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
        return ("Warning: unable to identify line terminator usage in pattern.\n" +
            `\tThe problem is in the <${tokType.name}> Token Type\n` +
            `\t Root cause: ${details.errMsg}.\n` +
            "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR");
    }
    else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
        return ("Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" +
            `\tThe problem is in the <${tokType.name}> Token Type\n` +
            "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK");
    }
    else {
        throw Error("non exhaustive match");
    }
}
function getCharCodes(charsOrCodes) {
    const charCodes = map(charsOrCodes, (numOrString) => {
        if (isString(numOrString)) {
            return numOrString.charCodeAt(0);
        }
        else {
            return numOrString;
        }
    });
    return charCodes;
}
function addToMapOfArrays(map, key, value) {
    if (map[key] === undefined) {
        map[key] = [value];
    }
    else {
        map[key].push(value);
    }
}
const minOptimizationVal = 256;
/**
 * We are mapping charCode above ASCI (256) into buckets each in the size of 256.
 * This is because ASCI are the most common start chars so each one of those will get its own
 * possible token configs vector.
 *
 * Tokens starting with charCodes "above" ASCI are uncommon, so we can "afford"
 * to place these into buckets of possible token configs, What we gain from
 * this is avoiding the case of creating an optimization 'charCodeToPatternIdxToConfig'
 * which would contain 10,000+ arrays of small size (e.g unicode Identifiers scenario).
 * Our 'charCodeToPatternIdxToConfig' max size will now be:
 * 256 + (2^16 / 2^8) - 1 === 511
 *
 * note the hack for fast division integer part extraction
 * See: https://stackoverflow.com/a/4228528
 */
let charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
    return charCode < minOptimizationVal
        ? charCode
        : charCodeToOptimizedIdxMap[charCode];
}
/**
 * This is a compromise between cold start / hot running performance
 * Creating this array takes ~3ms on a modern machine,
 * But if we perform the computation at runtime as needed the CSS Lexer benchmark
 * performance degrades by ~10%
 *
 * TODO: Perhaps it should be lazy initialized only if a charCode > 255 is used.
 */
function initCharCodeToOptimizedIndexMap() {
    if (isEmpty(charCodeToOptimizedIdxMap)) {
        charCodeToOptimizedIdxMap = new Array(65536);
        for (let i = 0; i < 65536; i++) {
            charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
        }
    }
}

function tokenStructuredMatcher(tokInstance, tokConstructor) {
    const instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) {
        return true;
    }
    else {
        return (tokConstructor.isParent === true &&
            tokConstructor.categoryMatchesMap[instanceType] === true);
    }
}
// Optimized tokenMatcher in case our grammar does not use token categories
// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead
function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
let tokenShortNameIdx = 1;
const tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
    // collect the parent Token Types as well.
    const tokenTypesAndParents = expandCategories(tokenTypes);
    // add required tokenType and categoryMatches properties
    assignTokenDefaultProps(tokenTypesAndParents);
    // fill up the categoryMatches
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    forEach(tokenTypesAndParents, (tokType) => {
        tokType.isParent = tokType.categoryMatches.length > 0;
    });
}
function expandCategories(tokenTypes) {
    let result = clone(tokenTypes);
    let categories = tokenTypes;
    let searching = true;
    while (searching) {
        categories = compact(flatten(map(categories, (currTokType) => currTokType.CATEGORIES)));
        const newCategories = difference(categories, result);
        result = result.concat(newCategories);
        if (isEmpty(newCategories)) {
            searching = false;
        }
        else {
            categories = newCategories;
        }
    }
    return result;
}
function assignTokenDefaultProps(tokenTypes) {
    forEach(tokenTypes, (currTokType) => {
        if (!hasShortKeyProperty(currTokType)) {
            tokenIdxToClass[tokenShortNameIdx] = currTokType;
            currTokType.tokenTypeIdx = tokenShortNameIdx++;
        }
        // CATEGORIES? : TokenType | TokenType[]
        if (hasCategoriesProperty(currTokType) &&
            !isArray(currTokType.CATEGORIES)
        // &&
        // !isUndefined(currTokType.CATEGORIES.PATTERN)
        ) {
            currTokType.CATEGORIES = [currTokType.CATEGORIES];
        }
        if (!hasCategoriesProperty(currTokType)) {
            currTokType.CATEGORIES = [];
        }
        if (!hasExtendingTokensTypesProperty(currTokType)) {
            currTokType.categoryMatches = [];
        }
        if (!hasExtendingTokensTypesMapProperty(currTokType)) {
            currTokType.categoryMatchesMap = {};
        }
    });
}
function assignCategoriesTokensProp(tokenTypes) {
    forEach(tokenTypes, (currTokType) => {
        // avoid duplications
        currTokType.categoryMatches = [];
        forEach(currTokType.categoryMatchesMap, (val, key) => {
            currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
        });
    });
}
function assignCategoriesMapProp(tokenTypes) {
    forEach(tokenTypes, (currTokType) => {
        singleAssignCategoriesToksMap([], currTokType);
    });
}
function singleAssignCategoriesToksMap(path, nextNode) {
    forEach(path, (pathNode) => {
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    forEach(nextNode.CATEGORIES, (nextCategory) => {
        const newPath = path.concat(nextNode);
        // avoids infinite loops due to cyclic categories.
        if (!includes(newPath, nextCategory)) {
            singleAssignCategoriesToksMap(newPath, nextCategory);
        }
    });
}
function hasShortKeyProperty(tokType) {
    return has(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
    return has(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
    return has(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
    return has(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
    return has(tokType, "tokenTypeIdx");
}

const defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage(token) {
        return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column, mode) {
        return (`unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset},` + ` skipped ${length} characters.`);
    },
};

var LexerDefinitionErrorType;
(function (LexerDefinitionErrorType) {
    LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
const DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: ["\n", "\r"],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: defaultLexerErrorProvider,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true,
};
Object.freeze(DEFAULT_LEXER_CONFIG);
class Lexer {
    constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG) {
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        // Duplicated from the parser's perf trace trait to allow future extraction
        // of the lexer to a separate package.
        this.TRACE_INIT = (phaseDesc, phaseImpl) => {
            // No need to optimize this using NOOP pattern because
            // It is not called in a hot spot...
            if (this.traceInitPerf === true) {
                this.traceInitIndent++;
                const indent = new Array(this.traceInitIndent + 1).join("\t");
                if (this.traceInitIndent < this.traceInitMaxIdent) {
                    console.log(`${indent}--> <${phaseDesc}>`);
                }
                const { time, value } = timer(phaseImpl);
                /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */
                const traceMethod = time > 10 ? console.warn : console.log;
                if (this.traceInitIndent < this.traceInitMaxIdent) {
                    traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
                }
                this.traceInitIndent--;
                return value;
            }
            else {
                return phaseImpl();
            }
        };
        if (typeof config === "boolean") {
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\n" +
                "a boolean 2nd argument is no longer supported");
        }
        // todo: defaults func?
        this.config = assign({}, DEFAULT_LEXER_CONFIG, config);
        const traceInitVal = this.config.traceInitPerf;
        if (traceInitVal === true) {
            this.traceInitMaxIdent = Infinity;
            this.traceInitPerf = true;
        }
        else if (typeof traceInitVal === "number") {
            this.traceInitMaxIdent = traceInitVal;
            this.traceInitPerf = true;
        }
        this.traceInitIndent = -1;
        this.TRACE_INIT("Lexer Constructor", () => {
            let actualDefinition;
            let hasOnlySingleMode = true;
            this.TRACE_INIT("Lexer Config handling", () => {
                if (this.config.lineTerminatorsPattern ===
                    DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
                    // optimized built-in implementation for the defaults definition of lineTerminators
                    this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
                }
                else {
                    if (this.config.lineTerminatorCharacters ===
                        DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                        throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n" +
                            "\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                    }
                }
                if (config.safeMode && config.ensureOptimizations) {
                    throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                }
                this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
                this.trackEndLines = /full/i.test(this.config.positionTracking);
                // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
                if (isArray(lexerDefinition)) {
                    actualDefinition = {
                        modes: { defaultMode: clone(lexerDefinition) },
                        defaultMode: DEFAULT_MODE,
                    };
                }
                else {
                    // no conversion needed, input should already be a IMultiModeLexerDefinition
                    hasOnlySingleMode = false;
                    actualDefinition = clone(lexerDefinition);
                }
            });
            if (this.config.skipValidations === false) {
                this.TRACE_INIT("performRuntimeChecks", () => {
                    this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
                });
                this.TRACE_INIT("performWarningRuntimeChecks", () => {
                    this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
                });
            }
            // for extra robustness to avoid throwing an none informative error message
            actualDefinition.modes = actualDefinition.modes
                ? actualDefinition.modes
                : {};
            // an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
            // this transformation is to increase robustness in the case of partially invalid lexer definition.
            forEach(actualDefinition.modes, (currModeValue, currModeName) => {
                actualDefinition.modes[currModeName] = reject(currModeValue, (currTokType) => isUndefined(currTokType));
            });
            const allModeNames = keys(actualDefinition.modes);
            forEach(actualDefinition.modes, (currModDef, currModName) => {
                this.TRACE_INIT(`Mode: <${currModName}> processing`, () => {
                    this.modes.push(currModName);
                    if (this.config.skipValidations === false) {
                        this.TRACE_INIT(`validatePatterns`, () => {
                            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
                        });
                    }
                    // If definition errors were encountered, the analysis phase may fail unexpectedly/
                    // Considering a lexer with definition errors may never be used, there is no point
                    // to performing the analysis anyhow...
                    if (isEmpty(this.lexerDefinitionErrors)) {
                        augmentTokenTypes(currModDef);
                        let currAnalyzeResult;
                        this.TRACE_INIT(`analyzeTokenTypes`, () => {
                            currAnalyzeResult = analyzeTokenTypes(currModDef, {
                                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                                positionTracking: config.positionTracking,
                                ensureOptimizations: config.ensureOptimizations,
                                safeMode: config.safeMode,
                                tracer: this.TRACE_INIT,
                            });
                        });
                        this.patternIdxToConfig[currModName] =
                            currAnalyzeResult.patternIdxToConfig;
                        this.charCodeToPatternIdxToConfig[currModName] =
                            currAnalyzeResult.charCodeToPatternIdxToConfig;
                        this.emptyGroups = assign({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
                        this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
                        this.canModeBeOptimized[currModName] =
                            currAnalyzeResult.canBeOptimized;
                    }
                });
            });
            this.defaultMode = actualDefinition.defaultMode;
            if (!isEmpty(this.lexerDefinitionErrors) &&
                !this.config.deferDefinitionErrorsHandling) {
                const allErrMessages = map(this.lexerDefinitionErrors, (error) => {
                    return error.message;
                });
                const allErrMessagesString = allErrMessages.join("-----------------------\n");
                throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
            }
            // Only print warning if there are no errors, This will avoid pl
            forEach(this.lexerDefinitionWarning, (warningDescriptor) => {
                PRINT_WARNING(warningDescriptor.message);
            });
            this.TRACE_INIT("Choosing sub-methods implementations", () => {
                // Choose the relevant internal implementations for this specific parser.
                // These implementations should be in-lined by the JavaScript engine
                // to provide optimal performance in each scenario.
                if (SUPPORT_STICKY) {
                    this.chopInput = identity;
                    this.match = this.matchWithTest;
                }
                else {
                    this.updateLastIndex = noop;
                    this.match = this.matchWithExec;
                }
                if (hasOnlySingleMode) {
                    this.handleModes = noop;
                }
                if (this.trackStartLines === false) {
                    this.computeNewColumn = identity;
                }
                if (this.trackEndLines === false) {
                    this.updateTokenEndLineColumnLocation = noop;
                }
                if (/full/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createFullToken;
                }
                else if (/onlyStart/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createStartOnlyToken;
                }
                else if (/onlyOffset/i.test(this.config.positionTracking)) {
                    this.createTokenInstance = this.createOffsetOnlyToken;
                }
                else {
                    throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
                }
                if (this.hasCustom) {
                    this.addToken = this.addTokenUsingPush;
                    this.handlePayload = this.handlePayloadWithCustom;
                }
                else {
                    this.addToken = this.addTokenUsingMemberAccess;
                    this.handlePayload = this.handlePayloadNoCustom;
                }
            });
            this.TRACE_INIT("Failed Optimization Warnings", () => {
                const unOptimizedModes = reduce(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName) => {
                    if (canBeOptimized === false) {
                        cannotBeOptimized.push(modeName);
                    }
                    return cannotBeOptimized;
                }, []);
                if (config.ensureOptimizations && !isEmpty(unOptimizedModes)) {
                    throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.\n` +
                        '\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n' +
                        "\t Or inspect the console log for details on how to resolve these issues.");
                }
            });
            this.TRACE_INIT("clearRegExpParserCache", () => {
                clearRegExpParserCache();
            });
            this.TRACE_INIT("toFastProperties", () => {
                toFastProperties(this);
            });
        });
    }
    tokenize(text, initialMode = this.defaultMode) {
        if (!isEmpty(this.lexerDefinitionErrors)) {
            const allErrMessages = map(this.lexerDefinitionErrors, (error) => {
                return error.message;
            });
            const allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" +
                allErrMessagesString);
        }
        return this.tokenizeInternal(text, initialMode);
    }
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    // this method also used quite a bit of `!` none null assertions because it is too optimized
    // for `tsc` to always understand it is "safe"
    tokenizeInternal(text, initialMode) {
        let i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, msg, match;
        const orgText = text;
        const orgLength = orgText.length;
        let offset = 0;
        let matchedTokensIndex = 0;
        // initializing the tokensArray to the "guessed" size.
        // guessing too little will still reduce the number of array re-sizes on pushes.
        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
        // but would still have a faster runtime by avoiding (All but one) array resizing.
        const guessedNumberOfTokens = this.hasCustom
            ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.
            : Math.floor(text.length / 10);
        const matchedTokens = new Array(guessedNumberOfTokens);
        const errors = [];
        let line = this.trackStartLines ? 1 : undefined;
        let column = this.trackStartLines ? 1 : undefined;
        const groups = cloneEmptyGroups(this.emptyGroups);
        const trackLines = this.trackStartLines;
        const lineTerminatorPattern = this.config.lineTerminatorsPattern;
        let currModePatternsLength = 0;
        let patternIdxToConfig = [];
        let currCharCodeToPatternIdxToConfig = [];
        const modeStack = [];
        const emptyArray = [];
        Object.freeze(emptyArray);
        let getPossiblePatterns;
        function getPossiblePatternsSlow() {
            return patternIdxToConfig;
        }
        function getPossiblePatternsOptimized(charCode) {
            const optimizedCharIdx = charCodeToOptimizedIndex(charCode);
            const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            if (possiblePatterns === undefined) {
                return emptyArray;
            }
            else {
                return possiblePatterns;
            }
        }
        const pop_mode = (popToken) => {
            // TODO: perhaps avoid this error in the edge case there is no more input?
            if (modeStack.length === 1 &&
                // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
                // So no error should occur.
                popToken.tokenType.PUSH_MODE === undefined) {
                // if we try to pop the last mode there lexer will no longer have ANY mode.
                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
                const msg = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
                errors.push({
                    offset: popToken.startOffset,
                    line: popToken.startLine,
                    column: popToken.startColumn,
                    length: popToken.image.length,
                    message: msg,
                });
            }
            else {
                modeStack.pop();
                const newMode = last(modeStack);
                patternIdxToConfig = this.patternIdxToConfig[newMode];
                currCharCodeToPatternIdxToConfig =
                    this.charCodeToPatternIdxToConfig[newMode];
                currModePatternsLength = patternIdxToConfig.length;
                const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                    getPossiblePatterns = getPossiblePatternsOptimized;
                }
                else {
                    getPossiblePatterns = getPossiblePatternsSlow;
                }
            }
        };
        function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig =
                this.charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                getPossiblePatterns = getPossiblePatternsOptimized;
            }
            else {
                getPossiblePatterns = getPossiblePatternsSlow;
            }
        }
        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
        // seem to matter performance wise.
        push_mode.call(this, initialMode);
        let currConfig;
        const recoveryEnabled = this.config.recoveryEnabled;
        while (offset < orgLength) {
            matchedImage = null;
            const nextCharCode = orgText.charCodeAt(offset);
            const chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            const chosenPatternsLength = chosenPatternIdxToConfig.length;
            for (i = 0; i < chosenPatternsLength; i++) {
                currConfig = chosenPatternIdxToConfig[i];
                const currPattern = currConfig.pattern;
                payload = null;
                // manually in-lined because > 600 chars won't be in-lined in V8
                const singleCharCode = currConfig.short;
                if (singleCharCode !== false) {
                    if (nextCharCode === singleCharCode) {
                        // single character string
                        matchedImage = currPattern;
                    }
                }
                else if (currConfig.isCustom === true) {
                    match = currPattern.exec(orgText, offset, matchedTokens, groups);
                    if (match !== null) {
                        matchedImage = match[0];
                        if (match.payload !== undefined) {
                            payload = match.payload;
                        }
                    }
                    else {
                        matchedImage = null;
                    }
                }
                else {
                    this.updateLastIndex(currPattern, offset);
                    matchedImage = this.match(currPattern, text, offset);
                }
                if (matchedImage !== null) {
                    // even though this pattern matched we must try a another longer alternative.
                    // this can be used to prioritize keywords over identifiers
                    longerAlt = currConfig.longerAlt;
                    if (longerAlt !== undefined) {
                        // TODO: micro optimize, avoid extra prop access
                        // by saving/linking longerAlt on the original config?
                        const longerAltLength = longerAlt.length;
                        for (k = 0; k < longerAltLength; k++) {
                            const longerAltConfig = patternIdxToConfig[longerAlt[k]];
                            const longerAltPattern = longerAltConfig.pattern;
                            altPayload = null;
                            // single Char can never be a longer alt so no need to test it.
                            // manually in-lined because > 600 chars won't be in-lined in V8
                            if (longerAltConfig.isCustom === true) {
                                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                                if (match !== null) {
                                    matchAltImage = match[0];
                                    if (match.payload !== undefined) {
                                        altPayload = match.payload;
                                    }
                                }
                                else {
                                    matchAltImage = null;
                                }
                            }
                            else {
                                this.updateLastIndex(longerAltPattern, offset);
                                matchAltImage = this.match(longerAltPattern, text, offset);
                            }
                            if (matchAltImage && matchAltImage.length > matchedImage.length) {
                                matchedImage = matchAltImage;
                                payload = altPayload;
                                currConfig = longerAltConfig;
                                // Exit the loop early after matching one of the longer alternatives
                                // The first matched alternative takes precedence
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            // successful match
            if (matchedImage !== null) {
                imageLength = matchedImage.length;
                group = currConfig.group;
                if (group !== undefined) {
                    tokType = currConfig.tokenTypeIdx;
                    // TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
                    // createFullToken method
                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                    this.handlePayload(newToken, payload);
                    // TODO: optimize NOOP in case there are no special groups?
                    if (group === false) {
                        matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                    }
                    else {
                        groups[group].push(newToken);
                    }
                }
                text = this.chopInput(text, imageLength);
                offset = offset + imageLength;
                // TODO: with newlines the column may be assigned twice
                column = this.computeNewColumn(column, imageLength);
                if (trackLines === true && currConfig.canLineTerminator === true) {
                    let numOfLTsInMatch = 0;
                    let foundTerminator;
                    let lastLTEndOffset;
                    lineTerminatorPattern.lastIndex = 0;
                    do {
                        foundTerminator = lineTerminatorPattern.test(matchedImage);
                        if (foundTerminator === true) {
                            lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
                            numOfLTsInMatch++;
                        }
                    } while (foundTerminator === true);
                    if (numOfLTsInMatch !== 0) {
                        line = line + numOfLTsInMatch;
                        column = imageLength - lastLTEndOffset;
                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
                    }
                }
                // will be NOOP if no modes present
                this.handleModes(currConfig, pop_mode, push_mode, newToken);
            }
            else {
                // error recovery, drop characters until we identify a valid token's start point
                const errorStartOffset = offset;
                const errorLine = line;
                const errorColumn = column;
                let foundResyncPoint = recoveryEnabled === false;
                while (foundResyncPoint === false && offset < orgLength) {
                    // Identity Func (when sticky flag is enabled)
                    text = this.chopInput(text, 1);
                    offset++;
                    for (j = 0; j < currModePatternsLength; j++) {
                        const currConfig = patternIdxToConfig[j];
                        const currPattern = currConfig.pattern;
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        const singleCharCode = currConfig.short;
                        if (singleCharCode !== false) {
                            if (orgText.charCodeAt(offset) === singleCharCode) {
                                // single character string
                                foundResyncPoint = true;
                            }
                        }
                        else if (currConfig.isCustom === true) {
                            foundResyncPoint =
                                currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                        }
                        else {
                            this.updateLastIndex(currPattern, offset);
                            foundResyncPoint = currPattern.exec(text) !== null;
                        }
                        if (foundResyncPoint === true) {
                            break;
                        }
                    }
                }
                errLength = offset - errorStartOffset;
                column = this.computeNewColumn(column, errLength);
                // at this point we either re-synced or reached the end of the input text
                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn, last(modeStack));
                errors.push({
                    offset: errorStartOffset,
                    line: errorLine,
                    column: errorColumn,
                    length: errLength,
                    message: msg,
                });
                if (recoveryEnabled === false) {
                    break;
                }
            }
        }
        // if we do have custom patterns which push directly into the
        // TODO: custom tokens should not push directly??
        if (!this.hasCustom) {
            // if we guessed a too large size for the tokens array this will shrink it to the right size.
            matchedTokens.length = matchedTokensIndex;
        }
        return {
            tokens: matchedTokens,
            groups: groups,
            errors: errors,
        };
    }
    handleModes(config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
            // need to save the PUSH_MODE property as if the mode is popped
            // patternIdxToPopMode is updated to reflect the new mode after popping the stack
            const pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== undefined) {
                push_mode.call(this, pushMode);
            }
        }
        else if (config.push !== undefined) {
            push_mode.call(this, config.push);
        }
    }
    chopInput(text, length) {
        return text.substring(length);
    }
    updateLastIndex(regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
    }
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
        let lastCharIsLT, fixForEndingInLT;
        if (group !== undefined) {
            // a none skipped multi line Token, need to update endLine/endColumn
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
                // if a token ends in a LT that last LT only affects the line numbering of following Tokens
                newToken.endLine = line + fixForEndingInLT;
                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
                // inclusive to exclusive range.
                newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
            // else single LT in the last character of a token, no need to modify the endLine/EndColumn
        }
    }
    computeNewColumn(oldColumn, imageLength) {
        return oldColumn + imageLength;
    }
    createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
        return {
            image,
            startOffset,
            tokenTypeIdx,
            tokenType,
        };
    }
    createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
            image,
            startOffset,
            startLine,
            startColumn,
            tokenTypeIdx,
            tokenType,
        };
    }
    createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
            image,
            startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine,
            endLine: startLine,
            startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx,
            tokenType,
        };
    }
    addTokenUsingPush(tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
    }
    addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
    }
    handlePayloadNoCustom(token, payload) { }
    handlePayloadWithCustom(token, payload) {
        if (payload !== null) {
            token.payload = payload;
        }
    }
    matchWithTest(pattern, text, offset) {
        const found = pattern.test(text);
        if (found === true) {
            return text.substring(offset, pattern.lastIndex);
        }
        return null;
    }
    matchWithExec(pattern, text) {
        const regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : null;
    }
}
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will " +
    "be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
Lexer.NA = /NOT_APPLICABLE/;

function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) {
        return tokType.LABEL;
    }
    else {
        return tokType.name;
    }
}
function hasTokenLabel(obj) {
    return isString(obj.LABEL) && obj.LABEL !== "";
}
const PARENT = "parent";
const CATEGORIES = "categories";
const LABEL = "label";
const GROUP = "group";
const PUSH_MODE = "push_mode";
const POP_MODE = "pop_mode";
const LONGER_ALT = "longer_alt";
const LINE_BREAKS = "line_breaks";
const START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
    return createTokenInternal(config);
}
function createTokenInternal(config) {
    const pattern = config.pattern;
    const tokenType = {};
    tokenType.name = config.name;
    if (!isUndefined(pattern)) {
        tokenType.PATTERN = pattern;
    }
    if (has(config, PARENT)) {
        throw ("The parent property is no longer supported.\n" +
            "See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.");
    }
    if (has(config, CATEGORIES)) {
        // casting to ANY as this will be fixed inside `augmentTokenTypes``
        tokenType.CATEGORIES = config[CATEGORIES];
    }
    augmentTokenTypes([tokenType]);
    if (has(config, LABEL)) {
        tokenType.LABEL = config[LABEL];
    }
    if (has(config, GROUP)) {
        tokenType.GROUP = config[GROUP];
    }
    if (has(config, POP_MODE)) {
        tokenType.POP_MODE = config[POP_MODE];
    }
    if (has(config, PUSH_MODE)) {
        tokenType.PUSH_MODE = config[PUSH_MODE];
    }
    if (has(config, LONGER_ALT)) {
        tokenType.LONGER_ALT = config[LONGER_ALT];
    }
    if (has(config, LINE_BREAKS)) {
        tokenType.LINE_BREAKS = config[LINE_BREAKS];
    }
    if (has(config, START_CHARS_HINT)) {
        tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    }
    return tokenType;
}
const EOF = createToken({ name: "EOF", pattern: Lexer.NA });
augmentTokenTypes([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
        image,
        startOffset,
        endOffset,
        startLine,
        endLine,
        startColumn,
        endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType,
    };
}
function tokenMatcher(token, tokType) {
    return tokenStructuredMatcher(token, tokType);
}

const defaultParserErrorProvider = {
    buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
        const hasLabel = hasTokenLabel(expected);
        const expectedMsg = hasLabel
            ? `--> ${tokenLabel(expected)} <--`
            : `token of type --> ${expected.name} <--`;
        const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
        return msg;
    },
    buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
        return "Redundant input, expecting EOF but found: " + firstRedundant.image;
    },
    buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName, }) {
        const errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        const actualText = head(actual).image;
        const errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            const allLookAheadPaths = reduce(expectedPathsPerAlt, (result, currAltPaths) => result.concat(currAltPaths), []);
            const nextValidTokenSequences = map(allLookAheadPaths, (currPath) => `[${map(currPath, (currTokenType) => tokenLabel(currTokenType)).join(", ")}]`);
            const nextValidSequenceItems = map(nextValidTokenSequences, (itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
            const calculatedDescription = `one of these possible Token sequences:\n${nextValidSequenceItems.join("\n")}`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
    buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName, }) {
        const errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        const actualText = head(actual).image;
        const errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            const nextValidTokenSequences = map(expectedIterationPaths, (currPath) => `[${map(currPath, (currTokenType) => tokenLabel(currTokenType)).join(",")}]`);
            const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::\n  ` +
                `<${nextValidTokenSequences.join(" ,")}>`;
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
};
Object.freeze(defaultParserErrorProvider);
const defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError(topLevelRule, undefinedRule) {
        const msg = "Invalid grammar, reference to a rule which is not defined: ->" +
            undefinedRule.nonTerminalName +
            "<-\n" +
            "inside top level rule: ->" +
            topLevelRule.name +
            "<-";
        return msg;
    },
};
const defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError(topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
            if (prod instanceof Terminal) {
                return prod.terminalType.name;
            }
            else if (prod instanceof NonTerminal) {
                return prod.nonTerminalName;
            }
            else {
                return "";
            }
        }
        const topLevelName = topLevelRule.name;
        const duplicateProd = head(duplicateProds);
        const index = duplicateProd.idx;
        const dslName = getProductionDslName(duplicateProd);
        const extraArgument = getExtraProductionArgument(duplicateProd);
        const hasExplicitIndex = index > 0;
        let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
    },
    buildNamespaceConflictError(rule) {
        const errMsg = `Namespace conflict found in grammar.\n` +
            `The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.\n` +
            `To resolve this make sure each Terminal and Non-Terminal names are unique\n` +
            `This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n` +
            `and Non-Terminal names start with a lower case letter.`;
        return errMsg;
    },
    buildAlternationPrefixAmbiguityError(options) {
        const pathMsg = map(options.prefixPath, (currTok) => tokenLabel(currTok)).join(", ");
        const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix\n` +
            `in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,\n` +
            `<${pathMsg}> may appears as a prefix path in all these alternatives.\n` +
            `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n` +
            `For Further details.`;
        return errMsg;
    },
    buildAlternationAmbiguityError(options) {
        const pathMsg = map(options.prefixPath, (currtok) => tokenLabel(currtok)).join(", ");
        const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}>` +
            ` inside <${options.topLevelRule.name}> Rule,\n` +
            `<${pathMsg}> may appears as a prefix path in all these alternatives.\n`;
        currMessage =
            currMessage +
                `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\n` +
                `For Further details.`;
        return currMessage;
    },
    buildEmptyRepetitionError(options) {
        let dslName = getProductionDslName(options.repetition);
        if (options.repetition.idx !== 0) {
            dslName += options.repetition.idx;
        }
        const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.\n` +
            `This could lead to an infinite loop.`;
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildTokenNameError(options) {
        /* istanbul ignore next */
        return "deprecated";
    },
    buildEmptyAlternationError(options) {
        const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}>` +
            ` in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n` +
            `Only the last alternative may be an empty alternative.`;
        return errMsg;
    },
    buildTooManyAlternativesError(options) {
        const errMsg = `An Alternation cannot have more than 256 alternatives:\n` +
            `<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.\n has ${options.alternation.definition.length + 1} alternatives.`;
        return errMsg;
    },
    buildLeftRecursionError(options) {
        const ruleName = options.topLevelRule.name;
        const pathNames = map(options.leftRecursionPath, (currRule) => currRule.name);
        const leftRecursivePath = `${ruleName} --> ${pathNames
            .concat([ruleName])
            .join(" --> ")}`;
        const errMsg = `Left Recursion found in grammar.\n` +
            `rule: <${ruleName}> can be invoked from itself (directly or indirectly)\n` +
            `without consuming any Tokens. The grammar path that causes this is: \n ${leftRecursivePath}\n` +
            ` To fix this refactor your grammar to remove the left recursion.\n` +
            `see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
        return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildInvalidRuleNameError(options) {
        /* istanbul ignore next */
        return "deprecated";
    },
    buildDuplicateRuleNameError(options) {
        let ruleName;
        if (options.topLevelRule instanceof Rule) {
            ruleName = options.topLevelRule.name;
        }
        else {
            ruleName = options.topLevelRule;
        }
        const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
        return errMsg;
    },
};

function resolveGrammar$1(topLevels, errMsgProvider) {
    const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
}
class GastRefResolverVisitor extends GAstVisitor {
    constructor(nameToTopRule, errMsgProvider) {
        super();
        this.nameToTopRule = nameToTopRule;
        this.errMsgProvider = errMsgProvider;
        this.errors = [];
    }
    resolveRefs() {
        forEach(values(this.nameToTopRule), (prod) => {
            this.currTopLevel = prod;
            prod.accept(this);
        });
    }
    visitNonTerminal(node) {
        const ref = this.nameToTopRule[node.nonTerminalName];
        if (!ref) {
            const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
                message: msg,
                type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: node.nonTerminalName,
            });
        }
        else {
            node.referencedRule = ref;
        }
    }
}

class AbstractNextPossibleTokensWalker extends RestWalker {
    constructor(topProd, path) {
        super();
        this.topProd = topProd;
        this.path = path;
        this.possibleTokTypes = [];
        this.nextProductionName = "";
        this.nextProductionOccurrence = 0;
        this.found = false;
        this.isAtEndOfPath = false;
    }
    startWalking() {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) {
            throw Error("The path does not start with the walker's top Rule!");
        }
        // immutable for the win
        this.ruleStack = clone(this.path.ruleStack).reverse(); // intelij bug requires assertion
        this.occurrenceStack = clone(this.path.occurrenceStack).reverse(); // intelij bug requires assertion
        // already verified that the first production is valid, we now seek the 2nd production
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
    }
    walk(prod, prevRest = []) {
        // stop scanning once we found the path
        if (!this.found) {
            super.walk(prod, prevRest);
        }
    }
    walkProdRef(refProd, currRest, prevRest) {
        // found the next production, need to keep walking in it
        if (refProd.referencedRule.name === this.nextProductionName &&
            refProd.idx === this.nextProductionOccurrence) {
            const fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
        }
    }
    updateExpectedNext() {
        // need to consume the Terminal
        if (isEmpty(this.ruleStack)) {
            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are
            // really seeking is the last Terminal...
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
        }
        else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
    }
}
class NextAfterTokenWalker extends AbstractNextPossibleTokensWalker {
    constructor(topProd, path) {
        super(topProd, path);
        this.path = path;
        this.nextTerminalName = "";
        this.nextTerminalOccurrence = 0;
        this.nextTerminalName = this.path.lastTok.name;
        this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(terminal, currRest, prevRest) {
        if (this.isAtEndOfPath &&
            terminal.terminalType.name === this.nextTerminalName &&
            terminal.idx === this.nextTerminalOccurrence &&
            !this.found) {
            const fullRest = currRest.concat(prevRest);
            const restProd = new Alternative({ definition: fullRest });
            this.possibleTokTypes = first(restProd);
            this.found = true;
        }
    }
}
/**
 * This walker only "walks" a single "TOP" level in the Grammar Ast, this means
 * it never "follows" production refs
 */
class AbstractNextTerminalAfterProductionWalker extends RestWalker {
    constructor(topRule, occurrence) {
        super();
        this.topRule = topRule;
        this.occurrence = occurrence;
        this.result = {
            token: undefined,
            occurrence: undefined,
            isEndOfRule: undefined,
        };
    }
    startWalking() {
        this.walk(this.topRule);
        return this.result;
    }
}
class NextTerminalAfterManyWalker extends AbstractNextTerminalAfterProductionWalker {
    walkMany(manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
            const firstAfterMany = head(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === undefined;
            if (firstAfterMany instanceof Terminal) {
                this.result.token = firstAfterMany.terminalType;
                this.result.occurrence = firstAfterMany.idx;
            }
        }
        else {
            super.walkMany(manyProd, currRest, prevRest);
        }
    }
}
class NextTerminalAfterManySepWalker extends AbstractNextTerminalAfterProductionWalker {
    walkManySep(manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
            const firstAfterManySep = head(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === undefined;
            if (firstAfterManySep instanceof Terminal) {
                this.result.token = firstAfterManySep.terminalType;
                this.result.occurrence = firstAfterManySep.idx;
            }
        }
        else {
            super.walkManySep(manySepProd, currRest, prevRest);
        }
    }
}
class NextTerminalAfterAtLeastOneWalker extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
            const firstAfterAtLeastOne = head(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;
            if (firstAfterAtLeastOne instanceof Terminal) {
                this.result.token = firstAfterAtLeastOne.terminalType;
                this.result.occurrence = firstAfterAtLeastOne.idx;
            }
        }
        else {
            super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
        }
    }
}
// TODO: reduce code duplication in the AfterWalkers
class NextTerminalAfterAtLeastOneSepWalker extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
            const firstAfterfirstAfterAtLeastOneSep = head(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === undefined;
            if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
                this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
        }
        else {
            super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
        }
    }
}
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
    // avoid side effects
    currPath = clone(currPath);
    let result = [];
    let i = 0;
    // TODO: avoid inner funcs
    function remainingPathWith(nextDef) {
        return nextDef.concat(drop(targetDef, i + 1));
    }
    // TODO: avoid inner funcs
    function getAlternativesForProd(definition) {
        const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
    }
    /**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */
    while (currPath.length < maxLength && i < targetDef.length) {
        const prod = targetDef[i];
        /* istanbul ignore else */
        if (prod instanceof Alternative) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof NonTerminal) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof Option) {
            result = getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof RepetitionMandatory) {
            const newDef = prod.definition.concat([
                new Repetition({
                    definition: prod.definition,
                }),
            ]);
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof RepetitionMandatoryWithSeparator) {
            const newDef = [
                new Alternative({ definition: prod.definition }),
                new Repetition({
                    definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition),
                }),
            ];
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof RepetitionWithSeparator) {
            const newDef = prod.definition.concat([
                new Repetition({
                    definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition),
                }),
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof Repetition) {
            const newDef = prod.definition.concat([
                new Repetition({
                    definition: prod.definition,
                }),
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof Alternation) {
            forEach(prod.definition, (currAlt) => {
                // TODO: this is a limited check for empty alternatives
                //   It would prevent a common case of infinite loops during parser initialization.
                //   However **in-directly** empty alternatives may still cause issues.
                if (isEmpty(currAlt.definition) === false) {
                    result = getAlternativesForProd(currAlt.definition);
                }
            });
            return result;
        }
        else if (prod instanceof Terminal) {
            currPath.push(prod.terminalType);
        }
        else {
            throw Error("non exhaustive match");
        }
        i++;
    }
    result.push({
        partialPath: currPath,
        suffixDef: drop(targetDef, i),
    });
    return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    // to avoid creating a new Array each time.
    const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
    const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    let foundCompletePath = false;
    const tokenVectorLength = tokenVector.length;
    const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    const result = [];
    const possiblePaths = [];
    possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: [],
    });
    while (!isEmpty(possiblePaths)) {
        const currPath = possiblePaths.pop();
        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
        if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath &&
                last(possiblePaths).idx <= minimalAlternativesIndex) {
                // remove irrelevant alternative
                possiblePaths.pop();
            }
            continue;
        }
        const currDef = currPath.def;
        const currIdx = currPath.idx;
        const currRuleStack = currPath.ruleStack;
        const currOccurrenceStack = currPath.occurrenceStack;
        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
        if (isEmpty(currDef)) {
            continue;
        }
        const prod = currDef[0];
        /* istanbul ignore else */
        if (prod === EXIT_NON_TERMINAL) {
            const nextPath = {
                idx: currIdx,
                def: drop(currDef),
                ruleStack: dropRight(currRuleStack),
                occurrenceStack: dropRight(currOccurrenceStack),
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof Terminal) {
            /* istanbul ignore else */
            if (currIdx < tokenVectorLength - 1) {
                const nextIdx = currIdx + 1;
                const actualToken = tokenVector[nextIdx];
                if (tokMatcher(actualToken, prod.terminalType)) {
                    const nextPath = {
                        idx: nextIdx,
                        def: drop(currDef),
                        ruleStack: currRuleStack,
                        occurrenceStack: currOccurrenceStack,
                    };
                    possiblePaths.push(nextPath);
                }
                // end of the line
            }
            else if (currIdx === tokenVectorLength - 1) {
                // IGNORE ABOVE ELSE
                result.push({
                    nextTokenType: prod.terminalType,
                    nextTokenOccurrence: prod.idx,
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack,
                });
                foundCompletePath = true;
            }
            else {
                throw Error("non exhaustive match");
            }
        }
        else if (prod instanceof NonTerminal) {
            const newRuleStack = clone(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            const newOccurrenceStack = clone(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            const nextPath = {
                idx: currIdx,
                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, drop(currDef)),
                ruleStack: newRuleStack,
                occurrenceStack: newOccurrenceStack,
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof Option) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: drop(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            const nextPathWith = {
                idx: currIdx,
                def: prod.definition.concat(drop(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof RepetitionMandatory) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            const secondIteration = new Repetition({
                definition: prod.definition,
                idx: prod.idx,
            });
            const nextDef = prod.definition.concat([secondIteration], drop(currDef));
            const nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof RepetitionMandatoryWithSeparator) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            const separatorGast = new Terminal({
                terminalType: prod.separator,
            });
            const secondIteration = new Repetition({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx,
            });
            const nextDef = prod.definition.concat([secondIteration], drop(currDef));
            const nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof RepetitionWithSeparator) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: drop(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            const separatorGast = new Terminal({
                terminalType: prod.separator,
            });
            const nthRepetition = new Repetition({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx,
            });
            const nextDef = prod.definition.concat([nthRepetition], drop(currDef));
            const nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof Repetition) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            const nextPathWithout = {
                idx: currIdx,
                def: drop(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
            const nthRepetition = new Repetition({
                definition: prod.definition,
                idx: prod.idx,
            });
            const nextDef = prod.definition.concat([nthRepetition], drop(currDef));
            const nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof Alternation) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            for (let i = prod.definition.length - 1; i >= 0; i--) {
                const currAlt = prod.definition[i];
                const currAltPath = {
                    idx: currIdx,
                    def: currAlt.definition.concat(drop(currDef)),
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack,
                };
                possiblePaths.push(currAltPath);
                possiblePaths.push(EXIT_ALTERNATIVE);
            }
        }
        else if (prod instanceof Alternative) {
            possiblePaths.push({
                idx: currIdx,
                def: prod.definition.concat(drop(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack,
            });
        }
        else if (prod instanceof Rule) {
            // last because we should only encounter at most a single one of these per invocation.
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
        }
        else {
            throw Error("non exhaustive match");
        }
    }
    return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    const newRuleStack = clone(currRuleStack);
    newRuleStack.push(topRule.name);
    const newCurrOccurrenceStack = clone(currOccurrenceStack);
    // top rule is always assumed to have been called with occurrence index 1
    newCurrOccurrenceStack.push(1);
    return {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack,
    };
}

var PROD_TYPE;
(function (PROD_TYPE) {
    PROD_TYPE[PROD_TYPE["OPTION"] = 0] = "OPTION";
    PROD_TYPE[PROD_TYPE["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
    /* istanbul ignore else */
    if (prod instanceof Option || prod === "Option") {
        return PROD_TYPE.OPTION;
    }
    else if (prod instanceof Repetition || prod === "Repetition") {
        return PROD_TYPE.REPETITION;
    }
    else if (prod instanceof RepetitionMandatory ||
        prod === "RepetitionMandatory") {
        return PROD_TYPE.REPETITION_MANDATORY;
    }
    else if (prod instanceof RepetitionMandatoryWithSeparator ||
        prod === "RepetitionMandatoryWithSeparator") {
        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    }
    else if (prod instanceof RepetitionWithSeparator ||
        prod === "RepetitionWithSeparator") {
        return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    }
    else if (prod instanceof Alternation || prod === "Alternation") {
        return PROD_TYPE.ALTERNATION;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? tokenStructuredMatcherNoCategories
        : tokenStructuredMatcher;
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
}
/**
 *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare
 *  the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free).
 *
 *  Example: given a production:
 *  ABC(DE)?DF
 *
 *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two
 *  alternatives.
 *
 *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.
 */
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    const tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? tokenStructuredMatcherNoCategories
        : tokenStructuredMatcher;
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
    const numOfAlts = alts.length;
    const areAllOneTokenLookahead = every(alts, (currAlt) => {
        return every(currAlt, (currPath) => {
            return currPath.length === 1;
        });
    });
    // This version takes into account the predicates as well.
    if (hasPredicates) {
        /**
         * @returns {number} - The chosen alternative index
         */
        return function (orAlts) {
            // unfortunately the predicates must be extracted every single time
            // as they cannot be cached due to references to parameters(vars) which are no longer valid.
            // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
            const predicates = map(orAlts, (currAlt) => currAlt.GATE);
            for (let t = 0; t < numOfAlts; t++) {
                const currAlt = alts[t];
                const currNumOfPaths = currAlt.length;
                const currPredicate = predicates[t];
                if (currPredicate !== undefined && currPredicate.call(this) === false) {
                    // if the predicate does not match there is no point in checking the paths
                    continue;
                }
                nextPath: for (let j = 0; j < currNumOfPaths; j++) {
                    const currPath = currAlt[j];
                    const currPathLength = currPath.length;
                    for (let i = 0; i < currPathLength; i++) {
                        const nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
    else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        // optimized (common) case of all the lookaheads paths requiring only
        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
        const singleTokenAlts = map(alts, (currAlt) => {
            return flatten(currAlt);
        });
        const choiceToAlt = reduce(singleTokenAlts, (result, currAlt, idx) => {
            forEach(currAlt, (currTokType) => {
                if (!has(result, currTokType.tokenTypeIdx)) {
                    result[currTokType.tokenTypeIdx] = idx;
                }
                forEach(currTokType.categoryMatches, (currExtendingType) => {
                    if (!has(result, currExtendingType)) {
                        result[currExtendingType] = idx;
                    }
                });
            });
            return result;
        }, {});
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            const nextToken = this.LA(1);
            return choiceToAlt[nextToken.tokenTypeIdx];
        };
    }
    else {
        // optimized lookahead without needing to check the predicates at all.
        // this causes code duplication which is intentional to improve performance.
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            for (let t = 0; t < numOfAlts; t++) {
                const currAlt = alts[t];
                const currNumOfPaths = currAlt.length;
                nextPath: for (let j = 0; j < currNumOfPaths; j++) {
                    const currPath = currAlt[j];
                    const currPathLength = currPath.length;
                    for (let i = 0; i < currPathLength; i++) {
                        const nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
    const areAllOneTokenLookahead = every(alt, (currPath) => {
        return currPath.length === 1;
    });
    const numOfPaths = alt.length;
    // optimized (common) case of all the lookaheads paths requiring only
    // a single token lookahead.
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        const singleTokensTypes = flatten(alt);
        if (singleTokensTypes.length === 1 &&
            isEmpty(singleTokensTypes[0].categoryMatches)) {
            const expectedTokenType = singleTokensTypes[0];
            const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
            return function () {
                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
            };
        }
        else {
            const choiceToAlt = reduce(singleTokensTypes, (result, currTokType, idx) => {
                result[currTokType.tokenTypeIdx] = true;
                forEach(currTokType.categoryMatches, (currExtendingType) => {
                    result[currExtendingType] = true;
                });
                return result;
            }, []);
            return function () {
                const nextToken = this.LA(1);
                return choiceToAlt[nextToken.tokenTypeIdx] === true;
            };
        }
    }
    else {
        return function () {
            nextPath: for (let j = 0; j < numOfPaths; j++) {
                const currPath = alt[j];
                const currPathLength = currPath.length;
                for (let i = 0; i < currPathLength; i++) {
                    const nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) {
                        // mismatch in current path
                        // try the next pth
                        continue nextPath;
                    }
                }
                // found a full path that matches.
                return true;
            }
            // none of the paths matched
            return false;
        };
    }
}
class RestDefinitionFinderWalker extends RestWalker {
    constructor(topProd, targetOccurrence, targetProdType) {
        super();
        this.topProd = topProd;
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
    }
    startWalking() {
        this.walk(this.topProd);
        return this.restDef;
    }
    checkIsTarget(node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
        }
        // performance optimization, do not iterate over the entire Grammar ast after we have found the target
        return false;
    }
    walkOption(optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
            super.walkOption(optionProd, currRest, prevRest);
        }
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
            super.walkOption(atLeastOneProd, currRest, prevRest);
        }
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(atLeastOneSepProd, currRest, prevRest);
        }
    }
    walkMany(manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
            super.walkOption(manyProd, currRest, prevRest);
        }
    }
    walkManySep(manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
            super.walkOption(manySepProd, currRest, prevRest);
        }
    }
}
/**
 * Returns the definition of a target production in a top level level rule.
 */
class InsideDefinitionFinderVisitor extends GAstVisitor {
    constructor(targetOccurrence, targetProdType, targetRef) {
        super();
        this.targetOccurrence = targetOccurrence;
        this.targetProdType = targetProdType;
        this.targetRef = targetRef;
        this.result = [];
    }
    checkIsTarget(node, expectedProdName) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdName &&
            (this.targetRef === undefined || node === this.targetRef)) {
            this.result = node.definition;
        }
    }
    visitOption(node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
    }
    visitRepetition(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
    }
    visitRepetitionMandatory(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    }
}
function initializeArrayOfArrays(size) {
    const result = new Array(size);
    for (let i = 0; i < size; i++) {
        result[i] = [];
    }
    return result;
}
/**
 * A sort of hash function between a Path in the grammar and a string.
 * Note that this returns multiple "hashes" to support the scenario of token categories.
 * -  A single path with categories may match multiple **actual** paths.
 */
function pathToHashKeys(path) {
    let keys = [""];
    for (let i = 0; i < path.length; i++) {
        const tokType = path[i];
        const longerKeys = [];
        for (let j = 0; j < keys.length; j++) {
            const currShorterKey = keys[j];
            longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
            for (let t = 0; t < tokType.categoryMatches.length; t++) {
                const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
                longerKeys.push(currShorterKey + categoriesKeySuffix);
            }
        }
        keys = longerKeys;
    }
    return keys;
}
/**
 * Imperative style due to being called from a hot spot
 */
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
    for (let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
        // We only want to test vs the other alternatives
        if (currAltIdx === idx) {
            continue;
        }
        const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
        for (let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
            const searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === true) {
                return false;
            }
        }
    }
    // None of the SearchPathKeys were found in any of the other alternatives
    return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
    const partialAlts = map(altsDefs, (currAlt) => possiblePathsFrom([currAlt], 1));
    const finalResult = initializeArrayOfArrays(partialAlts.length);
    const altsHashes = map(partialAlts, (currAltPaths) => {
        const dict = {};
        forEach(currAltPaths, (item) => {
            const keys = pathToHashKeys(item.partialPath);
            forEach(keys, (currKey) => {
                dict[currKey] = true;
            });
        });
        return dict;
    });
    let newData = partialAlts;
    // maxLookahead loop
    for (let pathLength = 1; pathLength <= k; pathLength++) {
        const currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        // alternatives loop
        for (let altIdx = 0; altIdx < currDataset.length; altIdx++) {
            const currAltPathsAndSuffixes = currDataset[altIdx];
            // paths in current alternative loop
            for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
                const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
                const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
                const prefixKeys = pathToHashKeys(currPathPrefix);
                const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
                // End of the line for this path.
                if (isUnique || isEmpty(suffixDef) || currPathPrefix.length === k) {
                    const currAltResult = finalResult[altIdx];
                    // TODO: Can we implement a containsPath using Maps/Dictionaries?
                    if (containsPath(currAltResult, currPathPrefix) === false) {
                        currAltResult.push(currPathPrefix);
                        // Update all new  keys for the current path.
                        for (let j = 0; j < prefixKeys.length; j++) {
                            const currKey = prefixKeys[j];
                            altsHashes[altIdx][currKey] = true;
                        }
                    }
                }
                // Expand longer paths
                else {
                    const newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
                    newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
                    // Update keys for new known paths
                    forEach(newPartialPathsAndSuffixes, (item) => {
                        const prefixKeys = pathToHashKeys(item.partialPath);
                        forEach(prefixKeys, (key) => {
                            altsHashes[altIdx][key] = true;
                        });
                    });
                }
            }
        }
    }
    return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
    const visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    const insideDef = insideDefVisitor.result;
    const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    const afterDef = afterDefWalker.startWalking();
    const insideFlat = new Alternative({ definition: insideDef });
    const afterFlat = new Alternative({ definition: afterDef });
    return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
    compareOtherPath: for (let i = 0; i < alternative.length; i++) {
        const otherPath = alternative[i];
        if (otherPath.length !== searchPath.length) {
            continue;
        }
        for (let j = 0; j < otherPath.length; j++) {
            const searchTok = searchPath[j];
            const otherTok = otherPath[j];
            const matchingTokens = searchTok === otherTok ||
                otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== undefined;
            if (matchingTokens === false) {
                continue compareOtherPath;
            }
        }
        return true;
    }
    return false;
}
function isStrictPrefixOfPath(prefix, other) {
    return (prefix.length < other.length &&
        every(prefix, (tokType, idx) => {
            const otherTokType = other[idx];
            return (tokType === otherTokType ||
                otherTokType.categoryMatchesMap[tokType.tokenTypeIdx]);
        }));
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
    return every(lookAheadPaths, (singleAltPaths) => every(singleAltPaths, (singlePath) => every(singlePath, (token) => isEmpty(token.categoryMatches))));
}

function validateLookahead(options) {
    const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
        rules: options.rules,
        tokenTypes: options.tokenTypes,
        grammarName: options.grammarName,
    });
    return map(lookaheadValidationErrorMessages, (errorMessage) => (Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage)));
}
function validateGrammar$1(topLevels, tokenTypes, errMsgProvider, grammarName) {
    const duplicateErrors = flatMap(topLevels, (currTopLevel) => validateDuplicateProductions(currTopLevel, errMsgProvider));
    const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    const tooManyAltsErrors = flatMap(topLevels, (curRule) => validateTooManyAlts(curRule, errMsgProvider));
    const duplicateRulesError = flatMap(topLevels, (curRule) => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
    return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    const collectorVisitor = new OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor);
    const allRuleProductions = collectorVisitor.allProductions;
    const productionGroups = groupBy(allRuleProductions, identifyProductionForDuplicates);
    const duplicates = pickBy(productionGroups, (currGroup) => {
        return currGroup.length > 1;
    });
    const errors = map(values(duplicates), (currDuplicates) => {
        const firstProd = head(currDuplicates);
        const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
        const dslName = getProductionDslName(firstProd);
        const defError = {
            message: msg,
            type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName: dslName,
            occurrence: firstProd.idx,
        };
        const param = getExtraProductionArgument(firstProd);
        if (param) {
            defError.parameter = param;
        }
        return defError;
    });
    return errors;
}
function identifyProductionForDuplicates(prod) {
    return `${getProductionDslName(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
}
function getExtraProductionArgument(prod) {
    if (prod instanceof Terminal) {
        return prod.terminalType.name;
    }
    else if (prod instanceof NonTerminal) {
        return prod.nonTerminalName;
    }
    else {
        return "";
    }
}
class OccurrenceValidationCollector extends GAstVisitor {
    constructor() {
        super(...arguments);
        this.allProductions = [];
    }
    visitNonTerminal(subrule) {
        this.allProductions.push(subrule);
    }
    visitOption(option) {
        this.allProductions.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
    visitAlternation(or) {
        this.allProductions.push(or);
    }
    visitTerminal(terminal) {
        this.allProductions.push(terminal);
    }
}
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    const errors = [];
    const occurrences = reduce(allRules, (result, curRule) => {
        if (curRule.name === rule.name) {
            return result + 1;
        }
        return result;
    }, 0);
    if (occurrences > 1) {
        const errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className,
        });
        errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
            ruleName: rule.name,
        });
    }
    return errors;
}
// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?
// This is not part of the IGrammarErrorProvider because the validation cannot be performed on
// The grammar structure, only at runtime.
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    const errors = [];
    let errMsg;
    if (!includes(definedRulesNames, ruleName)) {
        errMsg =
            `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-` +
                `as it is not defined in any of the super grammars `;
        errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
            ruleName: ruleName,
        });
    }
    return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
    const errors = [];
    const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if (isEmpty(nextNonTerminals)) {
        return [];
    }
    else {
        const ruleName = topRule.name;
        const foundLeftRecursion = includes(nextNonTerminals, topRule);
        if (foundLeftRecursion) {
            errors.push({
                message: errMsgProvider.buildLeftRecursionError({
                    topLevelRule: topRule,
                    leftRecursionPath: path,
                }),
                type: ParserDefinitionErrorType.LEFT_RECURSION,
                ruleName: ruleName,
            });
        }
        // we are only looking for cyclic paths leading back to the specific topRule
        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...
        const validNextSteps = difference(nextNonTerminals, path.concat([topRule]));
        const errorsFromNextSteps = flatMap(validNextSteps, (currRefRule) => {
            const newPath = clone(path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
        });
        return errors.concat(errorsFromNextSteps);
    }
}
function getFirstNoneTerminal(definition) {
    let result = [];
    if (isEmpty(definition)) {
        return result;
    }
    const firstProd = head(definition);
    /* istanbul ignore else */
    if (firstProd instanceof NonTerminal) {
        result.push(firstProd.referencedRule);
    }
    else if (firstProd instanceof Alternative ||
        firstProd instanceof Option ||
        firstProd instanceof RepetitionMandatory ||
        firstProd instanceof RepetitionMandatoryWithSeparator ||
        firstProd instanceof RepetitionWithSeparator ||
        firstProd instanceof Repetition) {
        result = result.concat(getFirstNoneTerminal(firstProd.definition));
    }
    else if (firstProd instanceof Alternation) {
        // each sub definition in alternation is a FLAT
        result = flatten(map(firstProd.definition, (currSubDef) => getFirstNoneTerminal(currSubDef.definition)));
    }
    else if (firstProd instanceof Terminal) ;
    else {
        throw Error("non exhaustive match");
    }
    const isFirstOptional = isOptionalProd(firstProd);
    const hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
        const rest = drop(definition);
        return result.concat(getFirstNoneTerminal(rest));
    }
    else {
        return result;
    }
}
class OrCollector extends GAstVisitor {
    constructor() {
        super(...arguments);
        this.alternations = [];
    }
    visitAlternation(node) {
        this.alternations.push(node);
    }
}
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = flatMap(ors, (currOr) => {
        const exceptLast = dropRight(currOr.definition);
        return flatMap(exceptLast, (currAlternative, currAltIdx) => {
            const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], tokenStructuredMatcher, 1);
            if (isEmpty(possibleFirstInAlt)) {
                return [
                    {
                        message: errMsgProvider.buildEmptyAlternationError({
                            topLevelRule: topLevelRule,
                            alternation: currOr,
                            emptyChoiceIdx: currAltIdx,
                        }),
                        type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
                        ruleName: topLevelRule.name,
                        occurrence: currOr.idx,
                        alternative: currAltIdx + 1,
                    },
                ];
            }
            else {
                return [];
            }
        });
    });
    return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    // New Handling of ignoring ambiguities
    // - https://github.com/chevrotain/chevrotain/issues/869
    ors = reject(ors, (currOr) => currOr.ignoreAmbiguities === true);
    const errors = flatMap(ors, (currOr) => {
        const currOccurrence = currOr.idx;
        const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
        const alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
        const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
    });
    return errors;
}
class RepetitionCollector extends GAstVisitor {
    constructor() {
        super(...arguments);
        this.allProductions = [];
    }
    visitRepetitionWithSeparator(manySep) {
        this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.allProductions.push(many);
    }
}
function validateTooManyAlts(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = flatMap(ors, (currOr) => {
        if (currOr.definition.length > 255) {
            return [
                {
                    message: errMsgProvider.buildTooManyAlternativesError({
                        topLevelRule: topLevelRule,
                        alternation: currOr,
                    }),
                    type: ParserDefinitionErrorType.TOO_MANY_ALTS,
                    ruleName: topLevelRule.name,
                    occurrence: currOr.idx,
                },
            ];
        }
        else {
            return [];
        }
    });
    return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    const errors = [];
    forEach(topLevelRules, (currTopRule) => {
        const collectorVisitor = new RepetitionCollector();
        currTopRule.accept(collectorVisitor);
        const allRuleProductions = collectorVisitor.allProductions;
        forEach(allRuleProductions, (currProd) => {
            const prodType = getProdType(currProd);
            const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
            const currOccurrence = currProd.idx;
            const paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
            const pathsInsideProduction = paths[0];
            if (isEmpty(flatten(pathsInsideProduction))) {
                const errMsg = errMsgProvider.buildEmptyRepetitionError({
                    topLevelRule: currTopRule,
                    repetition: currProd,
                });
                errors.push({
                    message: errMsg,
                    type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: currTopRule.name,
                });
            }
        });
    });
    return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    const foundAmbiguousPaths = [];
    const identicalAmbiguities = reduce(alternatives, (result, currAlt, currAltIdx) => {
        // ignore (skip) ambiguities with this alternative
        if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
            return result;
        }
        forEach(currAlt, (currPath) => {
            const altsCurrPathAppearsIn = [currAltIdx];
            forEach(alternatives, (currOtherAlt, currOtherAltIdx) => {
                if (currAltIdx !== currOtherAltIdx &&
                    containsPath(currOtherAlt, currPath) &&
                    // ignore (skip) ambiguities with this "other" alternative
                    alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
                    altsCurrPathAppearsIn.push(currOtherAltIdx);
                }
            });
            if (altsCurrPathAppearsIn.length > 1 &&
                !containsPath(foundAmbiguousPaths, currPath)) {
                foundAmbiguousPaths.push(currPath);
                result.push({
                    alts: altsCurrPathAppearsIn,
                    path: currPath,
                });
            }
        });
        return result;
    }, []);
    const currErrors = map(identicalAmbiguities, (currAmbDescriptor) => {
        const ambgIndices = map(currAmbDescriptor.alts, (currAltIdx) => currAltIdx + 1);
        const currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation: alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path,
        });
        return {
            message: currMessage,
            type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: currAmbDescriptor.alts,
        };
    });
    return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    // flatten
    const pathsAndIndices = reduce(alternatives, (result, currAlt, idx) => {
        const currPathsAndIdx = map(currAlt, (currPath) => {
            return { idx: idx, path: currPath };
        });
        return result.concat(currPathsAndIdx);
    }, []);
    const errors = compact(flatMap(pathsAndIndices, (currPathAndIdx) => {
        const alternativeGast = alternation.definition[currPathAndIdx.idx];
        // ignore (skip) ambiguities with this alternative
        if (alternativeGast.ignoreAmbiguities === true) {
            return [];
        }
        const targetIdx = currPathAndIdx.idx;
        const targetPath = currPathAndIdx.path;
        const prefixAmbiguitiesPathsAndIndices = filter(pathsAndIndices, (searchPathAndIdx) => {
            // prefix ambiguity can only be created from lower idx (higher priority) path
            return (
            // ignore (skip) ambiguities with this "other" alternative
            alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !==
                true &&
                searchPathAndIdx.idx < targetIdx &&
                // checking for strict prefix because identical lookaheads
                // will be be detected using a different validation.
                isStrictPrefixOfPath(searchPathAndIdx.path, targetPath));
        });
        const currPathPrefixErrors = map(prefixAmbiguitiesPathsAndIndices, (currAmbPathAndIdx) => {
            const ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
            const occurrence = alternation.idx === 0 ? "" : alternation.idx;
            const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
                topLevelRule: rule,
                alternation: alternation,
                ambiguityIndices: ambgIndices,
                prefixPath: currAmbPathAndIdx.path,
            });
            return {
                message: message,
                type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
                ruleName: rule.name,
                occurrence: occurrence,
                alternatives: ambgIndices,
            };
        });
        return currPathPrefixErrors;
    }));
    return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    const errors = [];
    const tokenNames = map(tokenTypes, (currToken) => currToken.name);
    forEach(topLevels, (currRule) => {
        const currRuleName = currRule.name;
        if (includes(tokenNames, currRuleName)) {
            const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
                message: errMsg,
                type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: currRuleName,
            });
        }
    });
    return errors;
}

function resolveGrammar(options) {
    const actualOptions = defaults(options, {
        errMsgProvider: defaultGrammarResolverErrorProvider,
    });
    const topRulesTable = {};
    forEach(options.rules, (rule) => {
        topRulesTable[rule.name] = rule;
    });
    return resolveGrammar$1(topRulesTable, actualOptions.errMsgProvider);
}
function validateGrammar(options) {
    options = defaults(options, {
        errMsgProvider: defaultGrammarValidatorErrorProvider,
    });
    return validateGrammar$1(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
}

const MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
const NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
const EARLY_EXIT_EXCEPTION = "EarlyExitException";
const NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
const RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION,
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
// hacks to bypass no support for custom Errors in javascript/typescript
function isRecognitionException(error) {
    // can't do instanceof on hacked custom js exceptions
    return includes(RECOGNITION_EXCEPTION_NAMES, error.name);
}
class RecognitionException extends Error {
    constructor(message, token) {
        super(message);
        this.token = token;
        this.resyncedTokens = [];
        // fix prototype chain when typescript target is ES5
        Object.setPrototypeOf(this, new.target.prototype);
        /* istanbul ignore next - V8 workaround to remove constructor from stacktrace when typescript target is ES5 */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
class MismatchedTokenException extends RecognitionException {
    constructor(message, token, previousToken) {
        super(message, token);
        this.previousToken = previousToken;
        this.name = MISMATCHED_TOKEN_EXCEPTION;
    }
}
class NoViableAltException extends RecognitionException {
    constructor(message, token, previousToken) {
        super(message, token);
        this.previousToken = previousToken;
        this.name = NO_VIABLE_ALT_EXCEPTION;
    }
}
class NotAllInputParsedException extends RecognitionException {
    constructor(message, token) {
        super(message, token);
        this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
    }
}
class EarlyExitException extends RecognitionException {
    constructor(message, token, previousToken) {
        super(message, token);
        this.previousToken = previousToken;
        this.name = EARLY_EXIT_EXCEPTION;
    }
}

const EOF_FOLLOW_KEY = {};
const IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
class InRuleRecoveryException extends Error {
    constructor(message) {
        super(message);
        this.name = IN_RULE_RECOVERY_EXCEPTION;
    }
}
/**
 * This trait is responsible for the error recovery and fault tolerant logic
 */
class Recoverable {
    initRecoverable(config) {
        this.firstAfterRepMap = {};
        this.resyncFollows = {};
        this.recoveryEnabled = has(config, "recoveryEnabled")
            ? config.recoveryEnabled // assumes end user provides the correct config value/type
            : DEFAULT_PARSER_CONFIG.recoveryEnabled;
        // performance optimization, NOOP will be inlined which
        // effectively means that this optional feature does not exist
        // when not used.
        if (this.recoveryEnabled) {
            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
        }
    }
    getTokenToInsert(tokType) {
        const tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
    }
    canTokenTypeBeInsertedInRecovery(tokType) {
        return true;
    }
    canTokenTypeBeDeletedInRecovery(tokType) {
        return true;
    }
    tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        // TODO: can the resyncTokenType be cached?
        const reSyncTokType = this.findReSyncTokenType();
        const savedLexerState = this.exportLexerState();
        const resyncedTokens = [];
        let passedResyncPoint = false;
        const nextTokenWithoutResync = this.LA(1);
        let currToken = this.LA(1);
        const generateErrorMessage = () => {
            const previousToken = this.LA(0);
            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce
            // the error that would have been thrown
            const msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: expectedTokType,
                actual: nextTokenWithoutResync,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName(),
            });
            const error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
            error.resyncedTokens = dropRight(resyncedTokens);
            this.SAVE_ERROR(error);
        };
        while (!passedResyncPoint) {
            // re-synced to a point where we can safely exit the repetition/
            if (this.tokenMatcher(currToken, expectedTokType)) {
                generateErrorMessage();
                return; // must return here to avoid reverting the inputIdx
            }
            else if (lookAheadFunc.call(this)) {
                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
                generateErrorMessage();
                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
                grammarRule.apply(this, grammarRuleArgs);
                return; // must return here to avoid reverting the inputIdx
            }
            else if (this.tokenMatcher(currToken, reSyncTokType)) {
                passedResyncPoint = true;
            }
            else {
                currToken = this.SKIP_TOKEN();
                this.addToResyncTokens(currToken, resyncedTokens);
            }
        }
        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
        // "between rules" resync recovery later in the flow.
        this.importLexerState(savedLexerState);
    }
    shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
        // Edge case of arriving from a MANY repetition which is stuck
        // Attempting recovery in this case could cause an infinite loop
        if (notStuck === false) {
            return false;
        }
        // no need to recover, next token is what we expect...
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
            return false;
        }
        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
        // and prefer some backtracking path that includes recovered errors.
        if (this.isBackTracking()) {
            return false;
        }
        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
        //noinspection RedundantIfStatementJS
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
            return false;
        }
        return true;
    }
    // Error Recovery functionality
    getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
        const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        const follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
    }
    tryInRuleRecovery(expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            const tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            const nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
    }
    canPerformInRuleRecovery(expectedToken, follows) {
        return (this.canRecoverWithSingleTokenInsertion(expectedToken, follows) ||
            this.canRecoverWithSingleTokenDeletion(expectedToken));
    }
    canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
            return false;
        }
        // must know the possible following tokens to perform single token insertion
        if (isEmpty(follows)) {
            return false;
        }
        const mismatchedTok = this.LA(1);
        const isMisMatchedTokInFollows = find(follows, (possibleFollowsTokType) => {
            return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== undefined;
        return isMisMatchedTokInFollows;
    }
    canRecoverWithSingleTokenDeletion(expectedTokType) {
        if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
            return false;
        }
        const isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
    }
    isInCurrentRuleReSyncSet(tokenTypeIdx) {
        const followKey = this.getCurrFollowKey();
        const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return includes(currentRuleReSyncSet, tokenTypeIdx);
    }
    findReSyncTokenType() {
        const allPossibleReSyncTokTypes = this.flattenFollowSet();
        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
        let nextToken = this.LA(1);
        let k = 2;
        while (true) {
            const foundMatch = find(allPossibleReSyncTokTypes, (resyncTokType) => {
                const canMatch = tokenMatcher(nextToken, resyncTokType);
                return canMatch;
            });
            if (foundMatch !== undefined) {
                return foundMatch;
            }
            nextToken = this.LA(k);
            k++;
        }
    }
    getCurrFollowKey() {
        // the length is at least one as we always add the ruleName to the stack before invoking the rule.
        if (this.RULE_STACK.length === 1) {
            return EOF_FOLLOW_KEY;
        }
        const currRuleShortName = this.getLastExplicitRuleShortName();
        const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        const prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName),
        };
    }
    buildFullFollowKeyStack() {
        const explicitRuleStack = this.RULE_STACK;
        const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        return map(explicitRuleStack, (ruleName, idx) => {
            if (idx === 0) {
                return EOF_FOLLOW_KEY;
            }
            return {
                ruleName: this.shortRuleNameToFullName(ruleName),
                idxInCallingRule: explicitOccurrenceStack[idx],
                inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1]),
            };
        });
    }
    flattenFollowSet() {
        const followStack = map(this.buildFullFollowKeyStack(), (currKey) => {
            return this.getFollowSetFromFollowKey(currKey);
        });
        return flatten(followStack);
    }
    getFollowSetFromFollowKey(followKey) {
        if (followKey === EOF_FOLLOW_KEY) {
            return [EOF];
        }
        const followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
        return this.resyncFollows[followName];
    }
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    addToResyncTokens(token, resyncTokens) {
        if (!this.tokenMatcher(token, EOF)) {
            resyncTokens.push(token);
        }
        return resyncTokens;
    }
    reSyncTo(tokType) {
        const resyncedTokens = [];
        let nextTok = this.LA(1);
        while (this.tokenMatcher(nextTok, tokType) === false) {
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
        }
        // the last token is not part of the error.
        return dropRight(resyncedTokens);
    }
    attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        // by default this is a NO-OP
        // The actual implementation is with the function(not method) below
    }
    getCurrentGrammarPath(tokType, tokIdxInRule) {
        const pathRuleStack = this.getHumanReadableRuleStack();
        const pathOccurrenceStack = clone(this.RULE_OCCURRENCE_STACK);
        const grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule,
        };
        return grammarPath;
    }
    getHumanReadableRuleStack() {
        return map(this.RULE_STACK, (currShortName) => this.shortRuleNameToFullName(currShortName));
    }
}
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    let firstAfterRepInfo = this.firstAfterRepMap[key];
    if (firstAfterRepInfo === undefined) {
        const currRuleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[currRuleName];
        const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking();
        this.firstAfterRepMap[key] = firstAfterRepInfo;
    }
    let expectTokAfterLastMatch = firstAfterRepInfo.token;
    let nextTokIdx = firstAfterRepInfo.occurrence;
    const isEndOfRule = firstAfterRepInfo.isEndOfRule;
    // special edge case of a TOP most repetition after which the input should END.
    // this will force an attempt for inRule recovery in that scenario.
    if (this.RULE_STACK.length === 1 &&
        isEndOfRule &&
        expectTokAfterLastMatch === undefined) {
        expectTokAfterLastMatch = EOF;
        nextTokIdx = 1;
    }
    // We don't have anything to re-sync to...
    // this condition was extracted from `shouldInRepetitionRecoveryBeTried` to act as a type-guard
    if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) {
        return;
    }
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
        // TODO: performance optimization: instead of passing the original args here, we modify
        // the args param (or create a new one) and make sure the lookahead func is explicitly provided
        // to avoid searching the cache for it once more.
        this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
}

// Lookahead keys are 32Bit integers in the form
// TTTTTTTT-ZZZZZZZZZZZZ-YYYY-XXXXXXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Type bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
const BITS_FOR_METHOD_TYPE = 4;
const BITS_FOR_OCCURRENCE_IDX = 8;
// short string used as part of mapping keys.
// being short improves the performance when composing KEYS for maps out of these
// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)
const OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
const OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
const MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
const AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
const MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
const AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
// this actually returns a number, but it is always used as a string (object prop key)
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    return occurrence | dslMethodIdx | ruleIdx;
}

class LLkLookaheadStrategy {
    constructor(options) {
        var _a;
        this.maxLookahead =
            (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : DEFAULT_PARSER_CONFIG.maxLookahead;
    }
    validate(options) {
        const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
        if (isEmpty(leftRecursionErrors)) {
            const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
            const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
            const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
            const allErrors = [
                ...leftRecursionErrors,
                ...emptyAltErrors,
                ...ambiguousAltsErrors,
                ...emptyRepetitionErrors,
            ];
            return allErrors;
        }
        return leftRecursionErrors;
    }
    validateNoLeftRecursion(rules) {
        return flatMap(rules, (currTopRule) => validateNoLeftRecursion(currTopRule, currTopRule, defaultGrammarValidatorErrorProvider));
    }
    validateEmptyOrAlternatives(rules) {
        return flatMap(rules, (currTopRule) => validateEmptyOrAlternative(currTopRule, defaultGrammarValidatorErrorProvider));
    }
    validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
        return flatMap(rules, (currTopRule) => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, defaultGrammarValidatorErrorProvider));
    }
    validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
        return validateSomeNonEmptyLookaheadPath(rules, maxLookahead, defaultGrammarValidatorErrorProvider);
    }
    buildLookaheadForAlternation(options) {
        return buildLookaheadFuncForOr(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
    }
    buildLookaheadForOptional(options) {
        return buildLookaheadFuncForOptionalProd(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, getProdType(options.prodType), buildSingleAlternativeLookaheadFunction);
    }
}

/**
 * Trait responsible for the lookahead related utilities and optimizations.
 */
class LooksAhead {
    initLooksAhead(config) {
        this.dynamicTokensEnabled = has(config, "dynamicTokensEnabled")
            ? config.dynamicTokensEnabled // assumes end user provides the correct config value/type
            : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
        this.maxLookahead = has(config, "maxLookahead")
            ? config.maxLookahead // assumes end user provides the correct config value/type
            : DEFAULT_PARSER_CONFIG.maxLookahead;
        this.lookaheadStrategy = has(config, "lookaheadStrategy")
            ? config.lookaheadStrategy // assumes end user provides the correct config value/type
            : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
        this.lookAheadFuncsCache = new Map();
    }
    preComputeLookaheadFunctions(rules) {
        forEach(rules, (currRule) => {
            this.TRACE_INIT(`${currRule.name} Rule Lookahead`, () => {
                const { alternation, repetition, option, repetitionMandatory, repetitionMandatoryWithSeparator, repetitionWithSeparator, } = collectMethods(currRule);
                forEach(alternation, (currProd) => {
                    const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                    this.TRACE_INIT(`${getProductionDslName(currProd)}${prodIdx}`, () => {
                        const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
                            prodOccurrence: currProd.idx,
                            rule: currRule,
                            maxLookahead: currProd.maxLookahead || this.maxLookahead,
                            hasPredicates: currProd.hasPredicates,
                            dynamicTokensEnabled: this.dynamicTokensEnabled,
                        });
                        const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
                        this.setLaFuncCache(key, laFunc);
                    });
                });
                forEach(repetition, (currProd) => {
                    this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, "Repetition", currProd.maxLookahead, getProductionDslName(currProd));
                });
                forEach(option, (currProd) => {
                    this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, "Option", currProd.maxLookahead, getProductionDslName(currProd));
                });
                forEach(repetitionMandatory, (currProd) => {
                    this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, getProductionDslName(currProd));
                });
                forEach(repetitionMandatoryWithSeparator, (currProd) => {
                    this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
                });
                forEach(repetitionWithSeparator, (currProd) => {
                    this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
                });
            });
        });
    }
    computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
        this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, () => {
            const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
                prodOccurrence,
                rule,
                maxLookahead: prodMaxLookahead || this.maxLookahead,
                dynamicTokensEnabled: this.dynamicTokensEnabled,
                prodType,
            });
            const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            this.setLaFuncCache(key, laFunc);
        });
    }
    // this actually returns a number, but it is always used as a string (object prop key)
    getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
        const currRuleShortName = this.getLastExplicitRuleShortName();
        return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
    }
    getLaFuncFromCache(key) {
        return this.lookAheadFuncsCache.get(key);
    }
    /* istanbul ignore next */
    setLaFuncCache(key, value) {
        this.lookAheadFuncsCache.set(key, value);
    }
}
class DslMethodsCollectorVisitor extends GAstVisitor {
    constructor() {
        super(...arguments);
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: [],
        };
    }
    reset() {
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: [],
        };
    }
    visitOption(option) {
        this.dslMethods.option.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    }
    visitRepetition(many) {
        this.dslMethods.repetition.push(many);
    }
    visitAlternation(or) {
        this.dslMethods.alternation.push(or);
    }
}
const collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
    collectorVisitor.reset();
    rule.accept(collectorVisitor);
    const dslMethods = collectorVisitor.dslMethods;
    // avoid uncleaned references
    collectorVisitor.reset();
    return dslMethods;
}

/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (both start/end offsets exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
    // Once the startOffset has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
}
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (all start/end props exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.startColumn = newLocationInfo.startColumn;
        currNodeLocation.startLine = newLocationInfo.startLine;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
    // Once the start props has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
}
function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === undefined) {
        node.children[tokenTypeName] = [token];
    }
    else {
        node.children[tokenTypeName].push(token);
    }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === undefined) {
        node.children[ruleName] = [ruleResult];
    }
    else {
        node.children[ruleName].push(ruleResult);
    }
}

const NAME = "name";
function defineNameProp(obj, nameValue) {
    Object.defineProperty(obj, NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: nameValue,
    });
}

function defaultVisit(ctx, param) {
    const childrenNames = keys(ctx);
    const childrenNamesLength = childrenNames.length;
    for (let i = 0; i < childrenNamesLength; i++) {
        const currChildName = childrenNames[i];
        const currChildArray = ctx[currChildName];
        const currChildArrayLength = currChildArray.length;
        for (let j = 0; j < currChildArrayLength; j++) {
            const currChild = currChildArray[j];
            // distinction between Tokens Children and CstNode children
            if (currChild.tokenTypeIdx === undefined) {
                this[currChild.name](currChild.children, param);
            }
        }
    }
    // defaultVisit does not support generic out param
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    const derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
    const semanticProto = {
        visit: function (cstNode, param) {
            // enables writing more concise visitor methods when CstNode has only a single child
            if (isArray(cstNode)) {
                // A CST Node's children dictionary can never have empty arrays as values
                // If a key is defined there will be at least one element in the corresponding value array.
                cstNode = cstNode[0];
            }
            // enables passing optional CstNodes concisely.
            if (isUndefined(cstNode)) {
                return undefined;
            }
            return this[cstNode.name](cstNode.children, param);
        },
        validateVisitor: function () {
            const semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!isEmpty(semanticDefinitionErrors)) {
                const errorMessages = map(semanticDefinitionErrors, (currDefError) => currDefError.msg);
                throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:\n\t` +
                    `${errorMessages.join("\n\n").replace(/\n/g, "\n\t")}`);
            }
        },
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    const derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    const withDefaultsProto = Object.create(baseConstructor.prototype);
    forEach(ruleNames, (ruleName) => {
        withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
}
var CstVisitorDefinitionError;
(function (CstVisitorDefinitionError) {
    CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
    const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    return missingErrors;
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
    const missingRuleNames = filter(ruleNames, (currRuleName) => {
        return isFunction(visitorInstance[currRuleName]) === false;
    });
    const errors = map(missingRuleNames, (currRuleName) => {
        return {
            msg: `Missing visitor method: <${currRuleName}> on ${(visitorInstance.constructor.name)} CST Visitor.`,
            type: CstVisitorDefinitionError.MISSING_METHOD,
            methodName: currRuleName,
        };
    });
    return compact(errors);
}

/**
 * This trait is responsible for the CST building logic.
 */
class TreeBuilder {
    initTreeBuilder(config) {
        this.CST_STACK = [];
        // outputCst is no longer exposed/defined in the pubic API
        this.outputCst = config.outputCst;
        this.nodeLocationTracking = has(config, "nodeLocationTracking")
            ? config.nodeLocationTracking // assumes end user provides the correct config value/type
            : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
        if (!this.outputCst) {
            this.cstInvocationStateUpdate = noop;
            this.cstFinallyStateUpdate = noop;
            this.cstPostTerminal = noop;
            this.cstPostNonTerminal = noop;
            this.cstPostRule = noop;
        }
        else {
            if (/full/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = setNodeLocationFull;
                    this.setNodeLocationFromNode = setNodeLocationFull;
                    this.cstPostRule = noop;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
                }
                else {
                    this.setNodeLocationFromToken = noop;
                    this.setNodeLocationFromNode = noop;
                    this.cstPostRule = this.cstPostRuleFull;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
                }
            }
            else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
                    this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
                    this.cstPostRule = noop;
                    this.setInitialNodeLocation =
                        this.setInitialNodeLocationOnlyOffsetRecovery;
                }
                else {
                    this.setNodeLocationFromToken = noop;
                    this.setNodeLocationFromNode = noop;
                    this.cstPostRule = this.cstPostRuleOnlyOffset;
                    this.setInitialNodeLocation =
                        this.setInitialNodeLocationOnlyOffsetRegular;
                }
            }
            else if (/none/i.test(this.nodeLocationTracking)) {
                this.setNodeLocationFromToken = noop;
                this.setNodeLocationFromNode = noop;
                this.cstPostRule = noop;
                this.setInitialNodeLocation = noop;
            }
            else {
                throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
            }
        }
    }
    setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            endOffset: NaN,
        };
    }
    setInitialNodeLocationOnlyOffsetRegular(cstNode) {
        cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN,
        };
    }
    setInitialNodeLocationFullRecovery(cstNode) {
        cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN,
        };
    }
    /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
    setInitialNodeLocationFullRegular(cstNode) {
        const nextToken = this.LA(1);
        cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN,
        };
    }
    cstInvocationStateUpdate(fullRuleName) {
        const cstNode = {
            name: fullRuleName,
            children: Object.create(null),
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    }
    cstFinallyStateUpdate() {
        this.CST_STACK.pop();
    }
    cstPostRuleFull(ruleCstNode) {
        // casts to `required<CstNodeLocation>` are safe because `cstPostRuleFull` should only be invoked when full location is enabled
        const prevToken = this.LA(0);
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
        }
    }
    cstPostRuleOnlyOffset(ruleCstNode) {
        const prevToken = this.LA(0);
        // `location' is not null because `cstPostRuleOnlyOffset` will only be invoked when location tracking is enabled.
        const loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
        }
    }
    cstPostTerminal(key, consumedToken) {
        const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        addTerminalToCst(rootCst, consumedToken, key);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
    }
    cstPostNonTerminal(ruleCstResult, ruleName) {
        const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
        addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
    }
    getBaseCstVisitorConstructor() {
        if (isUndefined(this.baseCstVisitorConstructor)) {
            const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, keys(this.gastProductionsCache));
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
        if (isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
            const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, keys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    }
    getLastExplicitRuleShortName() {
        const ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
    }
    getPreviousExplicitRuleShortName() {
        const ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
        const occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
    }
}

/**
 * Trait responsible abstracting over the interaction with Lexer output (Token vector).
 *
 * This could be generalized to support other kinds of lexers, e.g.
 * - Just in Time Lexing / Lexer-Less parsing.
 * - Streaming Lexer.
 */
class LexerAdapter {
    initLexerAdapter() {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
    }
    set input(newInput) {
        // @ts-ignore - `this parameter` not supported in setters/getters
        //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
        if (this.selfAnalysisDone !== true) {
            throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
        }
        // @ts-ignore - `this parameter` not supported in setters/getters
        //   - https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
        this.reset();
        this.tokVector = newInput;
        this.tokVectorLength = newInput.length;
    }
    get input() {
        return this.tokVector;
    }
    // skips a token and returns the next token
    SKIP_TOKEN() {
        if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
        }
        else {
            return END_OF_FILE;
        }
    }
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    LA(howMuch) {
        const soughtIdx = this.currIdx + howMuch;
        if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
            return END_OF_FILE;
        }
        else {
            return this.tokVector[soughtIdx];
        }
    }
    consumeToken() {
        this.currIdx++;
    }
    exportLexerState() {
        return this.currIdx;
    }
    importLexerState(newState) {
        this.currIdx = newState;
    }
    resetLexerState() {
        this.currIdx = -1;
    }
    moveToTerminatedState() {
        this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
        return this.exportLexerState();
    }
}

/**
 * This trait is responsible for implementing the public API
 * for defining Chevrotain parsers, i.e:
 * - CONSUME
 * - RULE
 * - OPTION
 * - ...
 */
class RecognizerApi {
    ACTION(impl) {
        return impl.call(this);
    }
    consume(idx, tokType, options) {
        return this.consumeInternal(tokType, idx, options);
    }
    subrule(idx, ruleToCall, options) {
        return this.subruleInternal(ruleToCall, idx, options);
    }
    option(idx, actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, idx);
    }
    or(idx, altsOrOpts) {
        return this.orInternal(altsOrOpts, idx);
    }
    many(idx, actionORMethodDef) {
        return this.manyInternal(idx, actionORMethodDef);
    }
    atLeastOne(idx, actionORMethodDef) {
        return this.atLeastOneInternal(idx, actionORMethodDef);
    }
    CONSUME(tokType, options) {
        return this.consumeInternal(tokType, 0, options);
    }
    CONSUME1(tokType, options) {
        return this.consumeInternal(tokType, 1, options);
    }
    CONSUME2(tokType, options) {
        return this.consumeInternal(tokType, 2, options);
    }
    CONSUME3(tokType, options) {
        return this.consumeInternal(tokType, 3, options);
    }
    CONSUME4(tokType, options) {
        return this.consumeInternal(tokType, 4, options);
    }
    CONSUME5(tokType, options) {
        return this.consumeInternal(tokType, 5, options);
    }
    CONSUME6(tokType, options) {
        return this.consumeInternal(tokType, 6, options);
    }
    CONSUME7(tokType, options) {
        return this.consumeInternal(tokType, 7, options);
    }
    CONSUME8(tokType, options) {
        return this.consumeInternal(tokType, 8, options);
    }
    CONSUME9(tokType, options) {
        return this.consumeInternal(tokType, 9, options);
    }
    SUBRULE(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
    }
    SUBRULE1(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
    }
    SUBRULE2(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
    }
    SUBRULE3(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
    }
    SUBRULE4(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
    }
    SUBRULE5(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
    }
    SUBRULE6(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
    }
    SUBRULE7(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
    }
    SUBRULE8(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
    }
    SUBRULE9(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
    }
    OPTION(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
    }
    OPTION1(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
    }
    OPTION2(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
    }
    OPTION3(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
    }
    OPTION4(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
    }
    OPTION5(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
    }
    OPTION6(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
    }
    OPTION7(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
    }
    OPTION8(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
    }
    OPTION9(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
    }
    OR(altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
    }
    OR1(altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
    }
    OR2(altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
    }
    OR3(altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
    }
    OR4(altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
    }
    OR5(altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
    }
    OR6(altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
    }
    OR7(altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
    }
    OR8(altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
    }
    OR9(altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
    }
    MANY(actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
    }
    MANY1(actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
    }
    MANY2(actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
    }
    MANY3(actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
    }
    MANY4(actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
    }
    MANY5(actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
    }
    MANY6(actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
    }
    MANY7(actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
    }
    MANY8(actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
    }
    MANY9(actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
    }
    MANY_SEP(options) {
        this.manySepFirstInternal(0, options);
    }
    MANY_SEP1(options) {
        this.manySepFirstInternal(1, options);
    }
    MANY_SEP2(options) {
        this.manySepFirstInternal(2, options);
    }
    MANY_SEP3(options) {
        this.manySepFirstInternal(3, options);
    }
    MANY_SEP4(options) {
        this.manySepFirstInternal(4, options);
    }
    MANY_SEP5(options) {
        this.manySepFirstInternal(5, options);
    }
    MANY_SEP6(options) {
        this.manySepFirstInternal(6, options);
    }
    MANY_SEP7(options) {
        this.manySepFirstInternal(7, options);
    }
    MANY_SEP8(options) {
        this.manySepFirstInternal(8, options);
    }
    MANY_SEP9(options) {
        this.manySepFirstInternal(9, options);
    }
    AT_LEAST_ONE(actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
    }
    AT_LEAST_ONE1(actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
    }
    AT_LEAST_ONE2(actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
    }
    AT_LEAST_ONE3(actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
    }
    AT_LEAST_ONE4(actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
    }
    AT_LEAST_ONE5(actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
    }
    AT_LEAST_ONE6(actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
    }
    AT_LEAST_ONE7(actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
    }
    AT_LEAST_ONE8(actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
    }
    AT_LEAST_ONE9(actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
    }
    AT_LEAST_ONE_SEP(options) {
        this.atLeastOneSepFirstInternal(0, options);
    }
    AT_LEAST_ONE_SEP1(options) {
        this.atLeastOneSepFirstInternal(1, options);
    }
    AT_LEAST_ONE_SEP2(options) {
        this.atLeastOneSepFirstInternal(2, options);
    }
    AT_LEAST_ONE_SEP3(options) {
        this.atLeastOneSepFirstInternal(3, options);
    }
    AT_LEAST_ONE_SEP4(options) {
        this.atLeastOneSepFirstInternal(4, options);
    }
    AT_LEAST_ONE_SEP5(options) {
        this.atLeastOneSepFirstInternal(5, options);
    }
    AT_LEAST_ONE_SEP6(options) {
        this.atLeastOneSepFirstInternal(6, options);
    }
    AT_LEAST_ONE_SEP7(options) {
        this.atLeastOneSepFirstInternal(7, options);
    }
    AT_LEAST_ONE_SEP8(options) {
        this.atLeastOneSepFirstInternal(8, options);
    }
    AT_LEAST_ONE_SEP9(options) {
        this.atLeastOneSepFirstInternal(9, options);
    }
    RULE(name, implementation, config = DEFAULT_RULE_CONFIG) {
        if (includes(this.definedRulesNames, name)) {
            const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
                topLevelRule: name,
                grammarName: this.className,
            });
            const error = {
                message: errMsg,
                type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
                ruleName: name,
            };
            this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        const ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    OVERRIDE_RULE(name, impl, config = DEFAULT_RULE_CONFIG) {
        const ruleErrors = validateRuleIsOverridden(name, this.definedRulesNames, this.className);
        this.definitionErrors = this.definitionErrors.concat(ruleErrors);
        const ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    }
    BACKTRACK(grammarRule, args) {
        return function () {
            // save org state
            this.isBackTrackingStack.push(1);
            const orgState = this.saveRecogState();
            try {
                grammarRule.apply(this, args);
                // if no exception was thrown we have succeed parsing the rule.
                return true;
            }
            catch (e) {
                if (isRecognitionException(e)) {
                    return false;
                }
                else {
                    throw e;
                }
            }
            finally {
                this.reloadRecogState(orgState);
                this.isBackTrackingStack.pop();
            }
        };
    }
    // GAST export APIs
    getGAstProductions() {
        return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
        return serializeGrammar(values(this.gastProductionsCache));
    }
}

/**
 * This trait is responsible for the runtime parsing engine
 * Used by the official API (recognizer_api.ts)
 */
class RecognizerEngine {
    initRecognizerEngine(tokenVocabulary, config) {
        this.className = this.constructor.name;
        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)
        this.shortRuleNameToFull = {};
        this.fullRuleNameToShort = {};
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = tokenStructuredMatcherNoCategories;
        this.subruleIdx = 0;
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = {};
        if (has(config, "serializedGrammar")) {
            throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n" +
                "\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n" +
                "\tFor Further details.");
        }
        if (isArray(tokenVocabulary)) {
            // This only checks for Token vocabularies provided as arrays.
            // That is good enough because the main objective is to detect users of pre-V4.0 APIs
            // rather than all edge cases of empty Token vocabularies.
            if (isEmpty(tokenVocabulary)) {
                throw Error("A Token Vocabulary cannot be empty.\n" +
                    "\tNote that the first argument for the parser constructor\n" +
                    "\tis no longer a Token vector (since v4.0).");
            }
            if (typeof tokenVocabulary[0].startOffset === "number") {
                throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n" +
                    "\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n" +
                    "\tFor Further details.");
            }
        }
        if (isArray(tokenVocabulary)) {
            this.tokensMap = reduce(tokenVocabulary, (acc, tokType) => {
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        }
        else if (has(tokenVocabulary, "modes") &&
            every(flatten(values(tokenVocabulary.modes)), isTokenType)) {
            const allTokenTypes = flatten(values(tokenVocabulary.modes));
            const uniqueTokens = uniq(allTokenTypes);
            this.tokensMap = reduce(uniqueTokens, (acc, tokType) => {
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        }
        else if (isObject(tokenVocabulary)) {
            this.tokensMap = clone(tokenVocabulary);
        }
        else {
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors," +
                " A dictionary of Token constructors or an IMultiModeLexerDefinition");
        }
        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
        // parsed with a clear error message ("expecting EOF but found ...")
        this.tokensMap["EOF"] = EOF;
        const allTokenTypes = has(tokenVocabulary, "modes")
            ? flatten(values(tokenVocabulary.modes))
            : values(tokenVocabulary);
        const noTokenCategoriesUsed = every(allTokenTypes, (tokenConstructor) => isEmpty(tokenConstructor.categoryMatches));
        this.tokenMatcher = noTokenCategoriesUsed
            ? tokenStructuredMatcherNoCategories
            : tokenStructuredMatcher;
        // Because ES2015+ syntax should be supported for creating Token classes
        // We cannot assume that the Token classes were created using the "extendToken" utilities
        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
        augmentTokenTypes(values(this.tokensMap));
    }
    defineRule(ruleName, impl, config) {
        if (this.selfAnalysisDone) {
            throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'\n` +
                `Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
        }
        const resyncEnabled = has(config, "resyncEnabled")
            ? config.resyncEnabled // assumes end user provides the correct config value/type
            : DEFAULT_RULE_CONFIG.resyncEnabled;
        const recoveryValueFunc = has(config, "recoveryValueFunc")
            ? config.recoveryValueFunc // assumes end user provides the correct config value/type
            : DEFAULT_RULE_CONFIG.recoveryValueFunc;
        // performance optimization: Use small integers as keys for the longer human readable "full" rule names.
        // this greatly improves Map access time (as much as 8% for some performance benchmarks).
        const shortName = this.ruleShortNameIdx << (BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX);
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull[shortName] = ruleName;
        this.fullRuleNameToShort[ruleName] = shortName;
        let invokeRuleWithTry;
        // Micro optimization, only check the condition **once** on rule definition
        // instead of **every single** rule invocation.
        if (this.outputCst === true) {
            invokeRuleWithTry = function invokeRuleWithTry(...args) {
                try {
                    this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                    impl.apply(this, args);
                    const cst = this.CST_STACK[this.CST_STACK.length - 1];
                    this.cstPostRule(cst);
                    return cst;
                }
                catch (e) {
                    return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
                }
                finally {
                    this.ruleFinallyStateUpdate();
                }
            };
        }
        else {
            invokeRuleWithTry = function invokeRuleWithTryCst(...args) {
                try {
                    this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                    return impl.apply(this, args);
                }
                catch (e) {
                    return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
                }
                finally {
                    this.ruleFinallyStateUpdate();
                }
            };
        }
        const wrappedGrammarRule = Object.assign(invokeRuleWithTry, { ruleName, originalGrammarAction: impl });
        return wrappedGrammarRule;
    }
    invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
        const isFirstInvokedRule = this.RULE_STACK.length === 1;
        // note the reSync is always enabled for the first rule invocation, because we must always be able to
        // reSync with EOF and just output some INVALID ParseTree
        // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
        // path is really the most valid one
        const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
        if (isRecognitionException(e)) {
            const recogError = e;
            if (reSyncEnabled) {
                const reSyncTokType = this.findReSyncTokenType();
                if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                    recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
                    if (this.outputCst) {
                        const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        return partialCstResult;
                    }
                    else {
                        return recoveryValueFunc(e);
                    }
                }
                else {
                    if (this.outputCst) {
                        const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        recogError.partialCstResult = partialCstResult;
                    }
                    // to be handled Further up the call stack
                    throw recogError;
                }
            }
            else if (isFirstInvokedRule) {
                // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
                this.moveToTerminatedState();
                // the parser should never throw one of its own errors outside its flow.
                // even if error recovery is disabled
                return recoveryValueFunc(e);
            }
            else {
                // to be recovered Further up the call stack
                throw recogError;
            }
        }
        else {
            // some other Error type which we don't know how to handle (for example a built in JavaScript Error)
            throw e;
        }
    }
    // Implementation of parsing DSL
    optionInternal(actionORMethodDef, occurrence) {
        const key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    }
    optionInternalLogic(actionORMethodDef, occurrence, key) {
        let lookAheadFunc = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = () => {
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            return action.call(this);
        }
        return undefined;
    }
    atLeastOneInternal(prodOccurrence, actionORMethodDef) {
        const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
        return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookAheadFunc = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookAheadFunc;
                lookAheadFunc = () => {
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            let notStuck = this.doSingleRepetition(action);
            while (lookAheadFunc.call(this) === true &&
                notStuck === true) {
                notStuck = this.doSingleRepetition(action);
            }
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        }
        // note that while it may seem that this can cause an error because by using a recursive call to
        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
    }
    atLeastOneSepFirstInternal(prodOccurrence, options) {
        const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
        const action = options.DEF;
        const separator = options.SEP;
        const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLookaheadFunc.call(this) === true) {
            action.call(this);
            //  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
            //  because it is only needed in error recovery scenarios.
            const separatorLookAheadFunc = () => {
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                NextTerminalAfterAtLeastOneSepWalker,
            ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }
    }
    manyInternal(prodOccurrence, actionORMethodDef) {
        const laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
        let lookaheadFunction = this.getLaFuncFromCache(key);
        let action;
        if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            const predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                const orgLookaheadFunction = lookaheadFunction;
                lookaheadFunction = () => {
                    return predicate.call(this) && orgLookaheadFunction.call(this);
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        let notStuck = true;
        while (lookaheadFunction.call(this) === true && notStuck === true) {
            notStuck = this.doSingleRepetition(action);
        }
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.manyInternal, [prodOccurrence, actionORMethodDef], lookaheadFunction, MANY_IDX, prodOccurrence, NextTerminalAfterManyWalker, 
        // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck);
    }
    manySepFirstInternal(prodOccurrence, options) {
        const laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    manySepFirstInternalLogic(prodOccurrence, options, key) {
        const action = options.DEF;
        const separator = options.SEP;
        const firstIterationLaFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            const separatorLookAheadFunc = () => {
                return this.tokenMatcher(this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                NextTerminalAfterManySepWalker,
            ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
        }
    }
    repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while (separatorLookAheadFunc()) {
            // note that this CONSUME will never enter recovery because
            // the separatorLookAheadFunc checks that the separator really does exist.
            this.CONSUME(separator);
            action.call(this);
        }
        // we can only arrive to this function after an error
        // has occurred (hence the name 'second') so the following
        // IF will always be entered, its possible to remove it...
        // however it is kept to avoid confusion and be consistent.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        /* istanbul ignore else */
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker,
        ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
    }
    doSingleRepetition(action) {
        const beforeIteration = this.getLexerPosition();
        action.call(this);
        const afterIteration = this.getLexerPosition();
        // This boolean will indicate if this repetition progressed
        // or if we are "stuck" (potential infinite loop in the repetition).
        return afterIteration > beforeIteration;
    }
    orInternal(altsOrOpts, occurrence) {
        const laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
        const alts = isArray(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
        const laFunc = this.getLaFuncFromCache(laKey);
        const altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== undefined) {
            const chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            const firstRedundantTok = this.LA(1);
            const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: firstRedundantTok,
                ruleName: this.getCurrRuleFullName(),
            });
            this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
        }
    }
    subruleInternal(ruleToCall, idx, options) {
        let ruleResult;
        try {
            const args = options !== undefined ? options.ARGS : undefined;
            this.subruleIdx = idx;
            ruleResult = ruleToCall.apply(this, args);
            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined
                ? options.LABEL
                : ruleToCall.ruleName);
            return ruleResult;
        }
        catch (e) {
            throw this.subruleInternalError(e, options, ruleToCall.ruleName);
        }
    }
    subruleInternalError(e, options, ruleName) {
        if (isRecognitionException(e) && e.partialCstResult !== undefined) {
            this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined
                ? options.LABEL
                : ruleName);
            delete e.partialCstResult;
        }
        throw e;
    }
    consumeInternal(tokType, idx, options) {
        let consumedToken;
        try {
            const nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
                this.consumeToken();
                consumedToken = nextToken;
            }
            else {
                this.consumeInternalError(tokType, nextToken, options);
            }
        }
        catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
        }
        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined
            ? options.LABEL
            : tokType.name, consumedToken);
        return consumedToken;
    }
    consumeInternalError(tokType, nextToken, options) {
        let msg;
        const previousToken = this.LA(0);
        if (options !== undefined && options.ERR_MSG) {
            msg = options.ERR_MSG;
        }
        else {
            msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: tokType,
                actual: nextToken,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName(),
            });
        }
        throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
    }
    consumeInternalRecovery(tokType, idx, eFromConsumption) {
        // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
        // but the original syntax could have been parsed successfully without any backtracking + recovery
        if (this.recoveryEnabled &&
            // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
            eFromConsumption.name === "MismatchedTokenException" &&
            !this.isBackTracking()) {
            const follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
                return this.tryInRuleRecovery(tokType, follows);
            }
            catch (eFromInRuleRecovery) {
                if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
                    // failed in RuleRecovery.
                    // throw the original error in order to trigger reSync error recovery
                    throw eFromConsumption;
                }
                else {
                    throw eFromInRuleRecovery;
                }
            }
        }
        else {
            throw eFromConsumption;
        }
    }
    saveRecogState() {
        // errors is a getter which will clone the errors array
        const savedErrors = this.errors;
        const savedRuleStack = clone(this.RULE_STACK);
        return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK,
        };
    }
    reloadRecogState(newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
    }
    ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        // NOOP when cst is disabled
        this.cstInvocationStateUpdate(fullName);
    }
    isBackTracking() {
        return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
        const shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[shortName];
    }
    shortRuleNameToFullName(shortName) {
        return this.shortRuleNameToFull[shortName];
    }
    isAtEndOfInput() {
        return this.tokenMatcher(this.LA(1), EOF);
    }
    reset() {
        this.resetLexerState();
        this.subruleIdx = 0;
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        // TODO: extract a specific reset for TreeBuilder trait
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
    }
}

/**
 * Trait responsible for runtime parsing errors.
 */
class ErrorHandler {
    initErrorHandler(config) {
        this._errors = [];
        this.errorMessageProvider = has(config, "errorMessageProvider")
            ? config.errorMessageProvider // assumes end user provides the correct config value/type
            : DEFAULT_PARSER_CONFIG.errorMessageProvider;
    }
    SAVE_ERROR(error) {
        if (isRecognitionException(error)) {
            error.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: clone(this.RULE_OCCURRENCE_STACK),
            };
            this._errors.push(error);
            return error;
        }
        else {
            throw Error("Trying to save an Error which is not a RecognitionException");
        }
    }
    get errors() {
        return clone(this._errors);
    }
    set errors(newErrors) {
        this._errors = newErrors;
    }
    // TODO: consider caching the error message computed information
    raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
        const ruleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[ruleName];
        const lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
        const insideProdPaths = lookAheadPathsPerAlternative[0];
        const actualTokens = [];
        for (let i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        const msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName,
        });
        throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
    }
    // TODO: consider caching the error message computed information
    raiseNoAltException(occurrence, errMsgTypes) {
        const ruleName = this.getCurrRuleFullName();
        const ruleGrammar = this.getGAstProductions()[ruleName];
        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
        const lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
        const actualTokens = [];
        for (let i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        const previousToken = this.LA(0);
        const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName(),
        });
        throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
    }
}

class ContentAssist {
    initContentAssist() { }
    computeContentAssist(startRuleName, precedingInput) {
        const startRuleGast = this.gastProductionsCache[startRuleName];
        if (isUndefined(startRuleGast)) {
            throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
        }
        return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
    }
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    getNextPossibleTokenTypes(grammarPath) {
        const topRuleName = head(grammarPath.ruleStack);
        const gastProductions = this.getGAstProductions();
        const topProduction = gastProductions[topRuleName];
        const nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
    }
}

const RECORDING_NULL_OBJECT = {
    description: "This Object indicates the Parser is during Recording Phase",
};
Object.freeze(RECORDING_NULL_OBJECT);
const HANDLE_SEPARATOR = true;
const MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
const RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
augmentTokenTypes([RFT]);
const RECORDING_PHASE_TOKEN = createTokenInstance(RFT, "This IToken indicates the Parser is in Recording Phase\n\t" +
    "" +
    "See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", 
// Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
// cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
-1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
const RECORDING_PHASE_CSTNODE = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n\t" +
        "See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {},
};
/**
 * This trait handles the creation of the GAST structure for Chevrotain Grammars
 */
class GastRecorder {
    initGastRecorder(config) {
        this.recordingProdStack = [];
        this.RECORDING_PHASE = false;
    }
    enableRecording() {
        this.RECORDING_PHASE = true;
        this.TRACE_INIT("Enable Recording", () => {
            /**
             * Warning Dark Voodoo Magic upcoming!
             * We are "replacing" the public parsing DSL methods API
             * With **new** alternative implementations on the Parser **instance**
             *
             * So far this is the only way I've found to avoid performance regressions during parsing time.
             * - Approx 30% performance regression was measured on Chrome 75 Canary when attempting to replace the "internal"
             *   implementations directly instead.
             */
            for (let i = 0; i < 10; i++) {
                const idx = i > 0 ? i : "";
                this[`CONSUME${idx}`] = function (arg1, arg2) {
                    return this.consumeInternalRecord(arg1, i, arg2);
                };
                this[`SUBRULE${idx}`] = function (arg1, arg2) {
                    return this.subruleInternalRecord(arg1, i, arg2);
                };
                this[`OPTION${idx}`] = function (arg1) {
                    return this.optionInternalRecord(arg1, i);
                };
                this[`OR${idx}`] = function (arg1) {
                    return this.orInternalRecord(arg1, i);
                };
                this[`MANY${idx}`] = function (arg1) {
                    this.manyInternalRecord(i, arg1);
                };
                this[`MANY_SEP${idx}`] = function (arg1) {
                    this.manySepFirstInternalRecord(i, arg1);
                };
                this[`AT_LEAST_ONE${idx}`] = function (arg1) {
                    this.atLeastOneInternalRecord(i, arg1);
                };
                this[`AT_LEAST_ONE_SEP${idx}`] = function (arg1) {
                    this.atLeastOneSepFirstInternalRecord(i, arg1);
                };
            }
            // DSL methods with the idx(suffix) as an argument
            this[`consume`] = function (idx, arg1, arg2) {
                return this.consumeInternalRecord(arg1, idx, arg2);
            };
            this[`subrule`] = function (idx, arg1, arg2) {
                return this.subruleInternalRecord(arg1, idx, arg2);
            };
            this[`option`] = function (idx, arg1) {
                return this.optionInternalRecord(arg1, idx);
            };
            this[`or`] = function (idx, arg1) {
                return this.orInternalRecord(arg1, idx);
            };
            this[`many`] = function (idx, arg1) {
                this.manyInternalRecord(idx, arg1);
            };
            this[`atLeastOne`] = function (idx, arg1) {
                this.atLeastOneInternalRecord(idx, arg1);
            };
            this.ACTION = this.ACTION_RECORD;
            this.BACKTRACK = this.BACKTRACK_RECORD;
            this.LA = this.LA_RECORD;
        });
    }
    disableRecording() {
        this.RECORDING_PHASE = false;
        // By deleting these **instance** properties, any future invocation
        // will be deferred to the original methods on the **prototype** object
        // This seems to get rid of any incorrect optimizations that V8 may
        // do during the recording phase.
        this.TRACE_INIT("Deleting Recording methods", () => {
            const that = this;
            for (let i = 0; i < 10; i++) {
                const idx = i > 0 ? i : "";
                delete that[`CONSUME${idx}`];
                delete that[`SUBRULE${idx}`];
                delete that[`OPTION${idx}`];
                delete that[`OR${idx}`];
                delete that[`MANY${idx}`];
                delete that[`MANY_SEP${idx}`];
                delete that[`AT_LEAST_ONE${idx}`];
                delete that[`AT_LEAST_ONE_SEP${idx}`];
            }
            delete that[`consume`];
            delete that[`subrule`];
            delete that[`option`];
            delete that[`or`];
            delete that[`many`];
            delete that[`atLeastOne`];
            delete that.ACTION;
            delete that.BACKTRACK;
            delete that.LA;
        });
    }
    //   Parser methods are called inside an ACTION?
    //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
    // @ts-expect-error -- noop place holder
    ACTION_RECORD(impl) {
        // NO-OP during recording
    }
    // Executing backtracking logic will break our recording logic assumptions
    BACKTRACK_RECORD(grammarRule, args) {
        return () => true;
    }
    // LA is part of the official API and may be used for custom lookahead logic
    // by end users who may forget to wrap it in ACTION or inside a GATE
    LA_RECORD(howMuch) {
        // We cannot use the RECORD_PHASE_TOKEN here because someone may depend
        // On LA return EOF at the end of the input so an infinite loop may occur.
        return END_OF_FILE;
    }
    topLevelRuleRecord(name, def) {
        try {
            const newTopLevelRule = new Rule({ definition: [], name: name });
            newTopLevelRule.name = name;
            this.recordingProdStack.push(newTopLevelRule);
            def.call(this);
            this.recordingProdStack.pop();
            return newTopLevelRule;
        }
        catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== true) {
                try {
                    originalError.message =
                        originalError.message +
                            '\n\t This error was thrown during the "grammar recording phase" For more info see:\n\t' +
                            "https://chevrotain.io/docs/guide/internals.html#grammar-recording";
                }
                catch (mutabilityError) {
                    // We may not be able to modify the original error object
                    throw originalError;
                }
            }
            throw originalError;
        }
    }
    // Implementation of parsing DSL
    optionInternalRecord(actionORMethodDef, occurrence) {
        return recordProd.call(this, Option, actionORMethodDef, occurrence);
    }
    atLeastOneInternalRecord(occurrence, actionORMethodDef) {
        recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
    }
    atLeastOneSepFirstInternalRecord(occurrence, options) {
        recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    }
    manyInternalRecord(occurrence, actionORMethodDef) {
        recordProd.call(this, Repetition, actionORMethodDef, occurrence);
    }
    manySepFirstInternalRecord(occurrence, options) {
        recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    }
    orInternalRecord(altsOrOpts, occurrence) {
        return recordOrProd.call(this, altsOrOpts, occurrence);
    }
    subruleInternalRecord(ruleToCall, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!ruleToCall || has(ruleToCall, "ruleName") === false) {
            const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid` +
                ` expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>` +
                `\n inside top level rule: <${this.recordingProdStack[0].name}>`);
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        const prevProd = last(this.recordingProdStack);
        const ruleName = ruleToCall.ruleName;
        const newNoneTerminal = new NonTerminal({
            idx: occurrence,
            nonTerminalName: ruleName,
            label: options === null || options === void 0 ? void 0 : options.LABEL,
            // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
            referencedRule: undefined,
        });
        prevProd.definition.push(newNoneTerminal);
        return this.outputCst
            ? RECORDING_PHASE_CSTNODE
            : RECORDING_NULL_OBJECT;
    }
    consumeInternalRecord(tokType, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!hasShortKeyProperty(tokType)) {
            const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid` +
                ` expecting a TokenType reference but got: <${JSON.stringify(tokType)}>` +
                `\n inside top level rule: <${this.recordingProdStack[0].name}>`);
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        const prevProd = last(this.recordingProdStack);
        const newNoneTerminal = new Terminal({
            idx: occurrence,
            terminalType: tokType,
            label: options === null || options === void 0 ? void 0 : options.LABEL,
        });
        prevProd.definition.push(newNoneTerminal);
        return RECORDING_PHASE_TOKEN;
    }
}
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = last(this.recordingProdStack);
    const grammarAction = isFunction(mainProdArg) ? mainProdArg : mainProdArg.DEF;
    const newProd = new prodConstructor({ definition: [], idx: occurrence });
    if (handleSep) {
        newProd.separator = mainProdArg.SEP;
    }
    if (has(mainProdArg, "MAX_LOOKAHEAD")) {
        newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    this.recordingProdStack.push(newProd);
    grammarAction.call(this);
    prevProd.definition.push(newProd);
    this.recordingProdStack.pop();
    return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = last(this.recordingProdStack);
    // Only an array of alternatives
    const hasOptions = isArray(mainProdArg) === false;
    const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
    const newOrProd = new Alternation({
        definition: [],
        idx: occurrence,
        ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true,
    });
    if (has(mainProdArg, "MAX_LOOKAHEAD")) {
        newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    const hasPredicates = some(alts, (currAlt) => isFunction(currAlt.GATE));
    newOrProd.hasPredicates = hasPredicates;
    prevProd.definition.push(newOrProd);
    forEach(alts, (currAlt) => {
        const currAltFlat = new Alternative({ definition: [] });
        newOrProd.definition.push(currAltFlat);
        if (has(currAlt, "IGNORE_AMBIGUITIES")) {
            currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES; // assumes end user provides the correct config value/type
        }
        // **implicit** ignoreAmbiguities due to usage of gate
        else if (has(currAlt, "GATE")) {
            currAltFlat.ignoreAmbiguities = true;
        }
        this.recordingProdStack.push(currAltFlat);
        currAlt.ALT.call(this);
        this.recordingProdStack.pop();
    });
    return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
    return idx === 0 ? "" : `${idx}`;
}
function assertMethodIdxIsValid(idx) {
    if (idx < 0 || idx > MAX_METHOD_IDX) {
        const error = new Error(
        // The stack trace will contain all the needed details
        `Invalid DSL Method idx value: <${idx}>\n\t` +
            `Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`);
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
    }
}

/**
 * Trait responsible for runtime parsing errors.
 */
class PerformanceTracer {
    initPerformanceTracer(config) {
        if (has(config, "traceInitPerf")) {
            const userTraceInitPerf = config.traceInitPerf;
            const traceIsNumber = typeof userTraceInitPerf === "number";
            this.traceInitMaxIdent = traceIsNumber
                ? userTraceInitPerf
                : Infinity;
            this.traceInitPerf = traceIsNumber
                ? userTraceInitPerf > 0
                : userTraceInitPerf; // assumes end user provides the correct config value/type
        }
        else {
            this.traceInitMaxIdent = 0;
            this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
        }
        this.traceInitIndent = -1;
    }
    TRACE_INIT(phaseDesc, phaseImpl) {
        // No need to optimize this using NOOP pattern because
        // It is not called in a hot spot...
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            const indent = new Array(this.traceInitIndent + 1).join("\t");
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                console.log(`${indent}--> <${phaseDesc}>`);
            }
            const { time, value } = timer(phaseImpl);
            /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */
            const traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
            }
            this.traceInitIndent--;
            return value;
        }
        else {
            return phaseImpl();
        }
    }
}

function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        const baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach((propName) => {
            if (propName === "constructor") {
                return;
            }
            const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            // Handle Accessors
            if (basePropDescriptor &&
                (basePropDescriptor.get || basePropDescriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            }
            else {
                derivedCtor.prototype[propName] = baseCtor.prototype[propName];
            }
        });
    });
}

const END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
const DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: defaultParserErrorProvider,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false,
});
const DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: () => undefined,
    resyncEnabled: true,
});
var ParserDefinitionErrorType;
(function (ParserDefinitionErrorType) {
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
class Parser {
    /**
     *  @deprecated use the **instance** method with the same name instead
     */
    static performSelfAnalysis(parserInstance) {
        throw Error("The **static** `performSelfAnalysis` method has been deprecated." +
            "\t\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
        this.TRACE_INIT("performSelfAnalysis", () => {
            let defErrorsMsgs;
            this.selfAnalysisDone = true;
            const className = this.className;
            this.TRACE_INIT("toFastProps", () => {
                // Without this voodoo magic the parser would be x3-x4 slower
                // It seems it is better to invoke `toFastProperties` **before**
                // Any manipulations of the `this` object done during the recording phase.
                toFastProperties(this);
            });
            this.TRACE_INIT("Grammar Recording", () => {
                try {
                    this.enableRecording();
                    // Building the GAST
                    forEach(this.definedRulesNames, (currRuleName) => {
                        const wrappedRule = this[currRuleName];
                        const originalGrammarAction = wrappedRule["originalGrammarAction"];
                        let recordedRuleGast;
                        this.TRACE_INIT(`${currRuleName} Rule`, () => {
                            recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                        });
                        this.gastProductionsCache[currRuleName] = recordedRuleGast;
                    });
                }
                finally {
                    this.disableRecording();
                }
            });
            let resolverErrors = [];
            this.TRACE_INIT("Grammar Resolving", () => {
                resolverErrors = resolveGrammar({
                    rules: values(this.gastProductionsCache),
                });
                this.definitionErrors = this.definitionErrors.concat(resolverErrors);
            });
            this.TRACE_INIT("Grammar Validations", () => {
                // only perform additional grammar validations IFF no resolving errors have occurred.
                // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
                if (isEmpty(resolverErrors) && this.skipValidations === false) {
                    const validationErrors = validateGrammar({
                        rules: values(this.gastProductionsCache),
                        tokenTypes: values(this.tokensMap),
                        errMsgProvider: defaultGrammarValidatorErrorProvider,
                        grammarName: className,
                    });
                    const lookaheadValidationErrors = validateLookahead({
                        lookaheadStrategy: this.lookaheadStrategy,
                        rules: values(this.gastProductionsCache),
                        tokenTypes: values(this.tokensMap),
                        grammarName: className,
                    });
                    this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
                }
            });
            // this analysis may fail if the grammar is not perfectly valid
            if (isEmpty(this.definitionErrors)) {
                // The results of these computations are not needed unless error recovery is enabled.
                if (this.recoveryEnabled) {
                    this.TRACE_INIT("computeAllProdsFollows", () => {
                        const allFollows = computeAllProdsFollows(values(this.gastProductionsCache));
                        this.resyncFollows = allFollows;
                    });
                }
                this.TRACE_INIT("ComputeLookaheadFunctions", () => {
                    var _a, _b;
                    (_b = (_a = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
                        rules: values(this.gastProductionsCache),
                    });
                    this.preComputeLookaheadFunctions(values(this.gastProductionsCache));
                });
            }
            if (!Parser.DEFER_DEFINITION_ERRORS_HANDLING &&
                !isEmpty(this.definitionErrors)) {
                defErrorsMsgs = map(this.definitionErrors, (defError) => defError.message);
                throw new Error(`Parser Definition Errors detected:\n ${defErrorsMsgs.join("\n-------------------------------\n")}`);
            }
        });
    }
    constructor(tokenVocabulary, config) {
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        const that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        that.initGastRecorder(config);
        that.initPerformanceTracer(config);
        if (has(config, "ignoredIssues")) {
            throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n\t" +
                "Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n\t" +
                "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n\t" +
                "For further details.");
        }
        this.skipValidations = has(config, "skipValidations")
            ? config.skipValidations // casting assumes the end user passing the correct type
            : DEFAULT_PARSER_CONFIG.skipValidations;
    }
}
// Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
// (normally during the parser's constructor).
// This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
// for example: duplicate rule names, referencing an unresolved subrule, etc...
// This flag should not be enabled during normal usage, it is used in special situations, for example when
// needing to display the parser definition errors in some GUI(online playground).
Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
applyMixins(Parser, [
    Recoverable,
    LooksAhead,
    TreeBuilder,
    LexerAdapter,
    RecognizerEngine,
    RecognizerApi,
    ErrorHandler,
    ContentAssist,
    GastRecorder,
    PerformanceTracer,
]);
class CstParser extends Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
        const configClone = clone(config);
        configClone.outputCst = true;
        super(tokenVocabulary, configClone);
    }
}

const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');

function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

function isExist(v) {
  return typeof v !== 'undefined';
}

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

const defaultOptions$2 = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions$2, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1); else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
}
function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) ; else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

const defaultOptions$1 = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs){
      return tagName
    },
    // skipEmptyListItem: false
    captureMetaData: false,
};
   
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions$1, options);
};

let METADATA_SYMBOL$1;

if (typeof Symbol !== "function") {
  METADATA_SYMBOL$1 = "@@xmlMetadata";
} else {
  METADATA_SYMBOL$1 = Symbol("XML Node Metadata");
}

class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node, startIndex) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else {
      this.child.push( { [node.tagname]: node.child });
    }
    // if requested, add the startIndex
    if (startIndex !== undefined) {
      // Note: for now we just overwrite the metadata. If we had more complex metadata,
      // we might need to do an object append here:  metadata = { ...metadata, startIndex }
      this.child[this.child.length - 1][METADATA_SYMBOL$1] = { startIndex };
    }
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return METADATA_SYMBOL$1;
  }
}

class DocTypeReader{
    constructor(processEntities){
        this.suppressValidationErr = !processEntities;
    }
    
    readDocType(xmlData, i){
    
        const entities = {};
        if( xmlData[i + 3] === 'O' &&
            xmlData[i + 4] === 'C' &&
            xmlData[i + 5] === 'T' &&
            xmlData[i + 6] === 'Y' &&
            xmlData[i + 7] === 'P' &&
            xmlData[i + 8] === 'E')
        {    
            i = i+9;
            let angleBracketsCount = 1;
            let hasBody = false, comment = false;
            let exp = "";
            for(;i<xmlData.length;i++){
                if (xmlData[i] === '<' && !comment) { //Determine the tag type
                    if( hasBody && hasSeq(xmlData, "!ENTITY",i)){
                        i += 7; 
                        let entityName, val;
                        [entityName, val,i] = this.readEntityExp(xmlData,i+1,this.suppressValidationErr);
                        if(val.indexOf("&") === -1) //Parameter entities are not supported
                            entities[ entityName ] = {
                                regx : RegExp( `&${entityName};`,"g"),
                                val: val
                            };
                    }
                    else if( hasBody && hasSeq(xmlData, "!ELEMENT",i))  {
                        i += 8;//Not supported
                        const {index} = this.readElementExp(xmlData,i+1);
                        i = index;
                    }else if( hasBody && hasSeq(xmlData, "!ATTLIST",i)){
                        i += 8;//Not supported
                        // const {index} = this.readAttlistExp(xmlData,i+1);
                        // i = index;
                    }else if( hasBody && hasSeq(xmlData, "!NOTATION",i)) {
                        i += 9;//Not supported
                        const {index} = this.readNotationExp(xmlData,i+1,this.suppressValidationErr);
                        i = index;
                    }else if( hasSeq(xmlData, "!--",i) ) comment = true;
                    else throw new Error(`Invalid DOCTYPE`);

                    angleBracketsCount++;
                    exp = "";
                } else if (xmlData[i] === '>') { //Read tag content
                    if(comment){
                        if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                            comment = false;
                            angleBracketsCount--;
                        }
                    }else {
                        angleBracketsCount--;
                    }
                    if (angleBracketsCount === 0) {
                    break;
                    }
                }else if( xmlData[i] === '['){
                    hasBody = true;
                }else {
                    exp += xmlData[i];
                }
            }
            if(angleBracketsCount !== 0){
                throw new Error(`Unclosed DOCTYPE`);
            }
        }else {
            throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return {entities, i};
    }
    readEntityExp(xmlData, i) {    
        //External entities are not supported
        //    <!ENTITY ext SYSTEM "http://normal-website.com" >

        //Parameter entities are not supported
        //    <!ENTITY entityname "&anotherElement;">

        //Internal entities are supported
        //    <!ENTITY entityname "replacement text">

        // Skip leading whitespace after <!ENTITY
        i = skipWhitespace(xmlData, i);

        // Read entity name
        let entityName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
            entityName += xmlData[i];
            i++;
        }
        validateEntityName(entityName);

        // Skip whitespace after entity name
        i = skipWhitespace(xmlData, i);

        // Check for unsupported constructs (external entities or parameter entities)
        if(!this.suppressValidationErr){
            if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
                throw new Error("External entities are not supported");
            }else if (xmlData[i] === "%") {
                throw new Error("Parameter entities are not supported");
            }
        }

        // Read entity value (internal entity)
        let entityValue = "";
        [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
        i--;
        return [entityName, entityValue, i ];
    }

    readNotationExp(xmlData, i) {
        // Skip leading whitespace after <!NOTATION
        i = skipWhitespace(xmlData, i);

        // Read notation name
        let notationName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
            notationName += xmlData[i];
            i++;
        }
        !this.suppressValidationErr && validateEntityName(notationName);

        // Skip whitespace after notation name
        i = skipWhitespace(xmlData, i);

        // Check identifier type (SYSTEM or PUBLIC)
        const identifierType = xmlData.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
            throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
        }
        i += identifierType.length;

        // Skip whitespace after identifier type
        i = skipWhitespace(xmlData, i);

        // Read public identifier (if PUBLIC)
        let publicIdentifier = null;
        let systemIdentifier = null;

        if (identifierType === "PUBLIC") {
            [i, publicIdentifier ] = this.readIdentifierVal(xmlData, i, "publicIdentifier");

            // Skip whitespace after public identifier
            i = skipWhitespace(xmlData, i);

            // Optionally read system identifier
            if (xmlData[i] === '"' || xmlData[i] === "'") {
                [i, systemIdentifier ] = this.readIdentifierVal(xmlData, i,"systemIdentifier");
            }
        } else if (identifierType === "SYSTEM") {
            // Read system identifier (mandatory for SYSTEM)
            [i, systemIdentifier ] = this.readIdentifierVal(xmlData, i, "systemIdentifier");

            if (!this.suppressValidationErr && !systemIdentifier) {
                throw new Error("Missing mandatory system identifier for SYSTEM notation");
            }
        }
        
        return {notationName, publicIdentifier, systemIdentifier, index: --i};
    }

    readIdentifierVal(xmlData, i, type) {
        let identifierVal = "";
        const startChar = xmlData[i];
        if (startChar !== '"' && startChar !== "'") {
            throw new Error(`Expected quoted string, found "${startChar}"`);
        }
        i++;

        while (i < xmlData.length && xmlData[i] !== startChar) {
            identifierVal += xmlData[i];
            i++;
        }

        if (xmlData[i] !== startChar) {
            throw new Error(`Unterminated ${type} value`);
        }
        i++;
        return [i, identifierVal];
    }

    readElementExp(xmlData, i) {
        // <!ELEMENT br EMPTY>
        // <!ELEMENT div ANY>
        // <!ELEMENT title (#PCDATA)>
        // <!ELEMENT book (title, author+)>
        // <!ELEMENT name (content-model)>
        
        // Skip leading whitespace after <!ELEMENT
        i = skipWhitespace(xmlData, i);

        // Read element name
        let elementName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
            elementName += xmlData[i];
            i++;
        }

        // Validate element name
        if (!this.suppressValidationErr && !isName(elementName)) {
            throw new Error(`Invalid element name: "${elementName}"`);
        }

        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);
        let contentModel = "";
        // Expect '(' to start content model
        if(xmlData[i] === "E" && hasSeq(xmlData, "MPTY",i)) i+=4;
        else if(xmlData[i] === "A" && hasSeq(xmlData, "NY",i)) i+=2;
        else if (xmlData[i] === "(") {
            i++; // Move past '('

            // Read content model
            while (i < xmlData.length && xmlData[i] !== ")") {
                contentModel += xmlData[i];
                i++;
            }
            if (xmlData[i] !== ")") {
                throw new Error("Unterminated content model");
            }

        }else if(!this.suppressValidationErr){
            throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
        }
        
        return {
            elementName,
            contentModel: contentModel.trim(),
            index: i
        };
    }

    readAttlistExp(xmlData, i) {
        // Skip leading whitespace after <!ATTLIST
        i = skipWhitespace(xmlData, i);

        // Read element name
        let elementName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
            elementName += xmlData[i];
            i++;
        }

        // Validate element name
        validateEntityName(elementName);

        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);

        // Read attribute name
        let attributeName = "";
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
            attributeName += xmlData[i];
            i++;
        }

        // Validate attribute name
        if (!validateEntityName(attributeName)) {
            throw new Error(`Invalid attribute name: "${attributeName}"`);
        }

        // Skip whitespace after attribute name
        i = skipWhitespace(xmlData, i);

        // Read attribute type
        let attributeType = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
            attributeType = "NOTATION";
            i += 8; // Move past "NOTATION"

            // Skip whitespace after "NOTATION"
            i = skipWhitespace(xmlData, i);

            // Expect '(' to start the list of notations
            if (xmlData[i] !== "(") {
                throw new Error(`Expected '(', found "${xmlData[i]}"`);
            }
            i++; // Move past '('

            // Read the list of allowed notations
            let allowedNotations = [];
            while (i < xmlData.length && xmlData[i] !== ")") {
                let notation = "";
                while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
                    notation += xmlData[i];
                    i++;
                }

                // Validate notation name
                notation = notation.trim();
                if (!validateEntityName(notation)) {
                    throw new Error(`Invalid notation name: "${notation}"`);
                }

                allowedNotations.push(notation);

                // Skip '|' separator or exit loop
                if (xmlData[i] === "|") {
                    i++; // Move past '|'
                    i = skipWhitespace(xmlData, i); // Skip optional whitespace after '|'
                }
            }

            if (xmlData[i] !== ")") {
                throw new Error("Unterminated list of notations");
            }
            i++; // Move past ')'

            // Store the allowed notations as part of the attribute type
            attributeType += " (" + allowedNotations.join("|") + ")";
        } else {
            // Handle simple types (e.g., CDATA, ID, IDREF, etc.)
            while (i < xmlData.length && !/\s/.test(xmlData[i])) {
                attributeType += xmlData[i];
                i++;
            }

            // Validate simple attribute type
            const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
            if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
                throw new Error(`Invalid attribute type: "${attributeType}"`);
            }
        }

        // Skip whitespace after attribute type
        i = skipWhitespace(xmlData, i);

        // Read default value
        let defaultValue = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
            defaultValue = "#REQUIRED";
            i += 8;
        } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
            defaultValue = "#IMPLIED";
            i += 7;
        } else {
            [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
        }

        return {
            elementName,
            attributeName,
            attributeType,
            defaultValue,
            index: i
        }
    }
}



const skipWhitespace = (data, index) => {
    while (index < data.length && /\s/.test(data[index])) {
        index++;
    }
    return index;
};



function hasSeq(data, seq,i){
    for(let j=0;j<seq.length;j++){
        if(seq[j]!==data[i+j+1]) return false;
    }
    return true;
}

function validateEntityName(name){
    if (isName(name))
	    return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
// const octRegex = /^0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;

 
const consider = {
    hex :  true,
    // oct: false,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true,
    //skipLike: /regex/
};

function toNumber(str, options = {}){
    options = Object.assign({}, consider, options );
    if(!str || typeof str !== "string" ) return str;
    
    let trimmedStr  = str.trim();
    
    if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if(str==="0") return 0;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
    // }else if (options.oct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    }else if (trimmedStr.includes('e') || trimmedStr.includes('E')) { //eNotation
        return resolveEnotation(str,trimmedStr,options);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    }else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        // +00.123 => [ , '+', '00', '.123', ..
        if(match){
            const sign = match[1] || "";
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            const decimalAdjacentToLeadingZeros = sign ? // 0., -00., 000.
                str[leadingZeros.length+1] === "." 
                : str[leadingZeros.length] === ".";

            //trim ending zeros for floating number
            if(!options.leadingZeros //leading zeros are not allowed
                && (leadingZeros.length > 1 
                    || (leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros))){
                // 00, 00.3, +03.24, 03, 03.24
                return str;
            }
            else {//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const parsedStr = String(num);

                if( num === 0) return num;
                if(parsedStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                    if(parsedStr === "0") return num; //0.0
                    else if(parsedStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if( parsedStr === `${sign}${numTrimmedByZeros}`) return num;
                    else return str;
                }
                
                let n = leadingZeros? numTrimmedByZeros : trimmedStr;
                if(leadingZeros){
                    // -009 => -9
                    return (n === parsedStr) || (sign+n === parsedStr) ? num : str
                }else  {
                    // +9
                    return (n === parsedStr) || (n === sign+parsedStr) ? num : str
                }
            }
        }else { //non-numeric string
            return str;
        }
    }
}

const eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str,trimmedStr,options){
    if(!options.eNotation) return str;
    const notation = trimmedStr.match(eNotationRegx); 
    if(notation){
        let sign = notation[1] || "";
        const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
        const leadingZeros = notation[2];
        const eAdjacentToLeadingZeros = sign ? // 0E.
            str[leadingZeros.length+1] === eChar 
            : str[leadingZeros.length] === eChar;

        if(leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
        else if(leadingZeros.length === 1 
            && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)){
                return Number(trimmedStr);
        }else if(options.leadingZeros && !eAdjacentToLeadingZeros){ //accept with leading zeros
            //remove leading 0s
            trimmedStr = (notation[1] || "") + notation[3];
            return Number(trimmedStr);
        }else return str;
    }else {
        return str;
    }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr){
    if(numStr && numStr.indexOf(".") !== -1){//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if(numStr === ".")  numStr = "0";
        else if(numStr[0] === ".")  numStr = "0"+numStr;
        else if(numStr[numStr.length-1] === ".")  numStr = numStr.substring(0,numStr.length-1);
        return numStr;
    }
    return numStr;
}

function parse_int(numStr, base){
    //polyfill
    if(parseInt) return parseInt(numStr, base);
    else if(Number.parseInt) return Number.parseInt(numStr, base);
    else if(window && window.parseInt) return window.parseInt(numStr, base);
    else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")
}

function getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') {
        return ignoreAttributes
    }
    if (Array.isArray(ignoreAttributes)) {
        return (attrName) => {
            for (const pattern of ignoreAttributes) {
                if (typeof pattern === 'string' && attrName === pattern) {
                    return true
                }
                if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true
                }
            }
        }
    }
    return () => false
}

// const regx =
//   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
//   .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
      "num_dec": { regex: /&#([0-9]{1,7});/g, val : (_, str) => String.fromCodePoint(Number.parseInt(str, 10)) },
      "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val : (_, str) => String.fromCodePoint(Number.parseInt(str, 16)) },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue$1;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);

    if(this.options.stopNodes && this.options.stopNodes.length > 0){
      this.stopNodesExact = new Set();
      this.stopNodesWildcard = new Set();
      for(let i = 0; i < this.options.stopNodes.length; i++){
        const stopNodeExp = this.options.stopNodes[i];
        if(typeof stopNodeExp !== 'string') continue;
        if(stopNodeExp.startsWith("*.")){
          this.stopNodesWildcard.add(stopNodeExp.substring(2));
        }else {
          this.stopNodesExact.add(stopNodeExp);
        }
      }
    }
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    };
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else {
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else {
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath) {
  if (this.options.ignoreAttributes !== true && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      if (this.ignoreAttributesFn(attrName, jPath)) {
        continue
      }
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else {
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new XmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  const docTypeReader = new DocTypeReader(this.options.processEntities);
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".")+1);
        if(tagName && this.options.unpairedTags.indexOf(tagName) !== -1 ){
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0;
        if(lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1 ){
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.')-1);
          this.tagsNodeStack.pop();
        }else {
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);

        currentNode = this.tagsNodeStack.pop();//avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags);else {
  
          const childNode = new XmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath);
          }
          this.addChild(currentNode, childNode, jPath, i);
        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.");
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = docTypeReader.readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
        if(val == undefined) val = "";

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else {
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          //console.log(tagExp, tagName)
          const newTagName = this.options.transformTagName(tagName);
          if(tagExp === tagName) {
            tagExp = newTagName;
          }
          tagName = newTagName;
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }
        const startIndex = i;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, jPath, tagName)) {
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            }else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            i = result.closeIndex;
          }
          //unpaired tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            
            i = result.closeIndex;
          }
          //normal tag
          else {
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${rawTagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new XmlNode(tagName);

          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath
            );
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          this.addChild(currentNode, childNode, jPath, startIndex);
        }else {
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            }else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              const newTagName = this.options.transformTagName(tagName);
              if(tagExp === tagName) {
                tagExp = newTagName;
              }
              tagName = newTagName;
            }

            const childNode = new XmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
    //opening tag
          else {
            const childNode = new XmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};

function addChild(currentNode, childNode, jPath, startIndex){
  // unset startIndex if not requested
  if (!this.options.captureMetaData) startIndex = undefined;
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if(result === false); else if(typeof result === "string"){
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  }else {
    currentNode.addChild(childNode, startIndex);
  }
}

const replaceEntitiesValue$1 = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = currentNode.child.length === 0;
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * @param {Set} stopNodesExact
 * @param {Set} stopNodesWildcard
 * @param {string} jPath
 * @param {string} currentTagName
 */
function isItStopNode(stopNodesExact, stopNodesWildcard, jPath, currentTagName){
  if(stopNodesWildcard && stopNodesWildcard.has(currentTagName)) return true;
  if(stopNodesExact && stopNodesExact.has(jPath)) return true;
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else {
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " ";
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else {
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }

  const rawTagName = tagName;
  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
    rawTagName: rawTagName,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.");
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.");
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>');

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}

const METADATA_SYMBOL = XmlNode.getMetaDataSymbol();

/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName$1(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[METADATA_SYMBOL] !== undefined) {
        val[METADATA_SYMBOL] = tagObj[METADATA_SYMBOL]; // copy over metadata
      }

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else {
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else {
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName$1(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  
  if (propCount === 0) {
    return true;
  }

  if (
    propCount === 1 &&
    (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)
  ) {
    return true;
  }

  return false;
}

class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Uint8Array} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData !== "string" && xmlData.toString){
            xmlData = xmlData.toString();
        }else if(typeof xmlData !== "string"){
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else {
            this.externalEntities[key] = value;
        }
    }

    /**
     * Returns a Symbol that can be used to access the metadata
     * property on a node.
     * 
     * If Symbol is not available in the environment, an ordinary property is used
     * and the name of the property is here returned.
     * 
     * The XMLMetaData property is only present when `captureMetaData`
     * is true in the options.
     */
    static getMetaDataSymbol() {
        return XmlNode.getMetaDataSymbol();
    }
}

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        if(tagName === undefined) continue;

        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if(!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            if(!attrMap.hasOwnProperty(attr)) continue;
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}

const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return toXml(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      };
    }
    return this.j2x(jObj, 0, []).val;
  }
};

Builder.prototype.j2x = function(jObj, level, ajPath) {
  let attrStr = '';
  let val = '';
  const jPath = ajPath.join('.');
  for (let key in jObj) {
    if(!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node only if it is not an attribute
      if (this.isAttribute(key)) {
        val += '';
      }
    } else if (jObj[key] === null) {
      // null attribute should be ignored by the attribute list, but should not cause the tag closing
      if (this.isAttribute(key)) {
        val += '';
      } else if (key === this.options.cdataPropName) {
        val += '';
      } else if (key[0] === '?') {
        val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      } else {
        val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      }
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr && !this.ignoreAttributesFn(attr, jPath)) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      } else if (!attr) {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      let listTagAttr = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') ; else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if(this.options.oneListGroup){
            const result = this.j2x(item, level + 1, ajPath.concat(key));
            listTagVal += result.val;
            if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
              listTagAttr += result.attrStr;
            }
          }else {
            listTagVal += this.processTextOrObjNode(item, key, level, ajPath);
          }
        } else {
          if (this.options.oneListGroup) {
            let textValue = this.options.tagValueProcessor(key, item);
            textValue = this.replaceEntitiesValue(textValue);
            listTagVal += textValue;
          } else {
            listTagVal += this.buildTextValNode(item, key, '', level);
          }
        }
      }
      if(this.options.oneListGroup){
        listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level, ajPath);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
};

function processTextOrObjNode (object, key, level, ajPath) {
  const result = this.j2x(object, level + 1, ajPath.concat(key));
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else {

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    // attrStr is an empty string in case the attribute came as undefined or null
    if ((attrStr || attrStr === '') && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
};

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/";
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else {
    closeTag = `></${key}`;
  }
  return closeTag;
};

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else {
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else {
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
};

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
};

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var js = {exports: {}};

var src = {};

var javascript = {exports: {}};

var beautifier$2 = {};

var output = {};

/*jshint node:true */

var hasRequiredOutput;

function requireOutput () {
	if (hasRequiredOutput) return output;
	hasRequiredOutput = 1;

	function OutputLine(parent) {
	  this.__parent = parent;
	  this.__character_count = 0;
	  // use indent_count as a marker for this.__lines that have preserved indentation
	  this.__indent_count = -1;
	  this.__alignment_count = 0;
	  this.__wrap_point_index = 0;
	  this.__wrap_point_character_count = 0;
	  this.__wrap_point_indent_count = -1;
	  this.__wrap_point_alignment_count = 0;

	  this.__items = [];
	}

	OutputLine.prototype.clone_empty = function() {
	  var line = new OutputLine(this.__parent);
	  line.set_indent(this.__indent_count, this.__alignment_count);
	  return line;
	};

	OutputLine.prototype.item = function(index) {
	  if (index < 0) {
	    return this.__items[this.__items.length + index];
	  } else {
	    return this.__items[index];
	  }
	};

	OutputLine.prototype.has_match = function(pattern) {
	  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
	    if (this.__items[lastCheckedOutput].match(pattern)) {
	      return true;
	    }
	  }
	  return false;
	};

	OutputLine.prototype.set_indent = function(indent, alignment) {
	  if (this.is_empty()) {
	    this.__indent_count = indent || 0;
	    this.__alignment_count = alignment || 0;
	    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
	  }
	};

	OutputLine.prototype._set_wrap_point = function() {
	  if (this.__parent.wrap_line_length) {
	    this.__wrap_point_index = this.__items.length;
	    this.__wrap_point_character_count = this.__character_count;
	    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
	    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
	  }
	};

	OutputLine.prototype._should_wrap = function() {
	  return this.__wrap_point_index &&
	    this.__character_count > this.__parent.wrap_line_length &&
	    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
	};

	OutputLine.prototype._allow_wrap = function() {
	  if (this._should_wrap()) {
	    this.__parent.add_new_line();
	    var next = this.__parent.current_line;
	    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
	    next.__items = this.__items.slice(this.__wrap_point_index);
	    this.__items = this.__items.slice(0, this.__wrap_point_index);

	    next.__character_count += this.__character_count - this.__wrap_point_character_count;
	    this.__character_count = this.__wrap_point_character_count;

	    if (next.__items[0] === " ") {
	      next.__items.splice(0, 1);
	      next.__character_count -= 1;
	    }
	    return true;
	  }
	  return false;
	};

	OutputLine.prototype.is_empty = function() {
	  return this.__items.length === 0;
	};

	OutputLine.prototype.last = function() {
	  if (!this.is_empty()) {
	    return this.__items[this.__items.length - 1];
	  } else {
	    return null;
	  }
	};

	OutputLine.prototype.push = function(item) {
	  this.__items.push(item);
	  var last_newline_index = item.lastIndexOf('\n');
	  if (last_newline_index !== -1) {
	    this.__character_count = item.length - last_newline_index;
	  } else {
	    this.__character_count += item.length;
	  }
	};

	OutputLine.prototype.pop = function() {
	  var item = null;
	  if (!this.is_empty()) {
	    item = this.__items.pop();
	    this.__character_count -= item.length;
	  }
	  return item;
	};


	OutputLine.prototype._remove_indent = function() {
	  if (this.__indent_count > 0) {
	    this.__indent_count -= 1;
	    this.__character_count -= this.__parent.indent_size;
	  }
	};

	OutputLine.prototype._remove_wrap_indent = function() {
	  if (this.__wrap_point_indent_count > 0) {
	    this.__wrap_point_indent_count -= 1;
	  }
	};
	OutputLine.prototype.trim = function() {
	  while (this.last() === ' ') {
	    this.__items.pop();
	    this.__character_count -= 1;
	  }
	};

	OutputLine.prototype.toString = function() {
	  var result = '';
	  if (this.is_empty()) {
	    if (this.__parent.indent_empty_lines) {
	      result = this.__parent.get_indent_string(this.__indent_count);
	    }
	  } else {
	    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
	    result += this.__items.join('');
	  }
	  return result;
	};

	function IndentStringCache(options, baseIndentString) {
	  this.__cache = [''];
	  this.__indent_size = options.indent_size;
	  this.__indent_string = options.indent_char;
	  if (!options.indent_with_tabs) {
	    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
	  }

	  // Set to null to continue support for auto detection of base indent
	  baseIndentString = baseIndentString || '';
	  if (options.indent_level > 0) {
	    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
	  }

	  this.__base_string = baseIndentString;
	  this.__base_string_length = baseIndentString.length;
	}

	IndentStringCache.prototype.get_indent_size = function(indent, column) {
	  var result = this.__base_string_length;
	  column = column || 0;
	  if (indent < 0) {
	    result = 0;
	  }
	  result += indent * this.__indent_size;
	  result += column;
	  return result;
	};

	IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
	  var result = this.__base_string;
	  column = column || 0;
	  if (indent_level < 0) {
	    indent_level = 0;
	    result = '';
	  }
	  column += indent_level * this.__indent_size;
	  this.__ensure_cache(column);
	  result += this.__cache[column];
	  return result;
	};

	IndentStringCache.prototype.__ensure_cache = function(column) {
	  while (column >= this.__cache.length) {
	    this.__add_column();
	  }
	};

	IndentStringCache.prototype.__add_column = function() {
	  var column = this.__cache.length;
	  var indent = 0;
	  var result = '';
	  if (this.__indent_size && column >= this.__indent_size) {
	    indent = Math.floor(column / this.__indent_size);
	    column -= indent * this.__indent_size;
	    result = new Array(indent + 1).join(this.__indent_string);
	  }
	  if (column) {
	    result += new Array(column + 1).join(' ');
	  }

	  this.__cache.push(result);
	};

	function Output(options, baseIndentString) {
	  this.__indent_cache = new IndentStringCache(options, baseIndentString);
	  this.raw = false;
	  this._end_with_newline = options.end_with_newline;
	  this.indent_size = options.indent_size;
	  this.wrap_line_length = options.wrap_line_length;
	  this.indent_empty_lines = options.indent_empty_lines;
	  this.__lines = [];
	  this.previous_line = null;
	  this.current_line = null;
	  this.next_line = new OutputLine(this);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = false;
	  // initialize
	  this.__add_outputline();
	}

	Output.prototype.__add_outputline = function() {
	  this.previous_line = this.current_line;
	  this.current_line = this.next_line.clone_empty();
	  this.__lines.push(this.current_line);
	};

	Output.prototype.get_line_number = function() {
	  return this.__lines.length;
	};

	Output.prototype.get_indent_string = function(indent, column) {
	  return this.__indent_cache.get_indent_string(indent, column);
	};

	Output.prototype.get_indent_size = function(indent, column) {
	  return this.__indent_cache.get_indent_size(indent, column);
	};

	Output.prototype.is_empty = function() {
	  return !this.previous_line && this.current_line.is_empty();
	};

	Output.prototype.add_new_line = function(force_newline) {
	  // never newline at the start of file
	  // otherwise, newline only if we didn't just add one or we're forced
	  if (this.is_empty() ||
	    (!force_newline && this.just_added_newline())) {
	    return false;
	  }

	  // if raw output is enabled, don't print additional newlines,
	  // but still return True as though you had
	  if (!this.raw) {
	    this.__add_outputline();
	  }
	  return true;
	};

	Output.prototype.get_code = function(eol) {
	  this.trim(true);

	  // handle some edge cases where the last tokens
	  // has text that ends with newline(s)
	  var last_item = this.current_line.pop();
	  if (last_item) {
	    if (last_item[last_item.length - 1] === '\n') {
	      last_item = last_item.replace(/\n+$/g, '');
	    }
	    this.current_line.push(last_item);
	  }

	  if (this._end_with_newline) {
	    this.__add_outputline();
	  }

	  var sweet_code = this.__lines.join('\n');

	  if (eol !== '\n') {
	    sweet_code = sweet_code.replace(/[\n]/g, eol);
	  }
	  return sweet_code;
	};

	Output.prototype.set_wrap_point = function() {
	  this.current_line._set_wrap_point();
	};

	Output.prototype.set_indent = function(indent, alignment) {
	  indent = indent || 0;
	  alignment = alignment || 0;

	  // Next line stores alignment values
	  this.next_line.set_indent(indent, alignment);

	  // Never indent your first output indent at the start of the file
	  if (this.__lines.length > 1) {
	    this.current_line.set_indent(indent, alignment);
	    return true;
	  }

	  this.current_line.set_indent();
	  return false;
	};

	Output.prototype.add_raw_token = function(token) {
	  for (var x = 0; x < token.newlines; x++) {
	    this.__add_outputline();
	  }
	  this.current_line.set_indent(-1);
	  this.current_line.push(token.whitespace_before);
	  this.current_line.push(token.text);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = false;
	};

	Output.prototype.add_token = function(printable_token) {
	  this.__add_space_before_token();
	  this.current_line.push(printable_token);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = this.current_line._allow_wrap();
	};

	Output.prototype.__add_space_before_token = function() {
	  if (this.space_before_token && !this.just_added_newline()) {
	    if (!this.non_breaking_space) {
	      this.set_wrap_point();
	    }
	    this.current_line.push(' ');
	  }
	};

	Output.prototype.remove_indent = function(index) {
	  var output_length = this.__lines.length;
	  while (index < output_length) {
	    this.__lines[index]._remove_indent();
	    index++;
	  }
	  this.current_line._remove_wrap_indent();
	};

	Output.prototype.trim = function(eat_newlines) {
	  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

	  this.current_line.trim();

	  while (eat_newlines && this.__lines.length > 1 &&
	    this.current_line.is_empty()) {
	    this.__lines.pop();
	    this.current_line = this.__lines[this.__lines.length - 1];
	    this.current_line.trim();
	  }

	  this.previous_line = this.__lines.length > 1 ?
	    this.__lines[this.__lines.length - 2] : null;
	};

	Output.prototype.just_added_newline = function() {
	  return this.current_line.is_empty();
	};

	Output.prototype.just_added_blankline = function() {
	  return this.is_empty() ||
	    (this.current_line.is_empty() && this.previous_line.is_empty());
	};

	Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
	  var index = this.__lines.length - 2;
	  while (index >= 0) {
	    var potentialEmptyLine = this.__lines[index];
	    if (potentialEmptyLine.is_empty()) {
	      break;
	    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
	      potentialEmptyLine.item(-1) !== ends_with) {
	      this.__lines.splice(index + 1, 0, new OutputLine(this));
	      this.previous_line = this.__lines[this.__lines.length - 2];
	      break;
	    }
	    index--;
	  }
	};

	output.Output = Output;
	return output;
}

var token = {};

/*jshint node:true */

var hasRequiredToken;

function requireToken () {
	if (hasRequiredToken) return token;
	hasRequiredToken = 1;

	function Token(type, text, newlines, whitespace_before) {
	  this.type = type;
	  this.text = text;

	  // comments_before are
	  // comments that have a new line before them
	  // and may or may not have a newline after
	  // this is a set of comments before
	  this.comments_before = null; /* inline comment*/


	  // this.comments_after =  new TokenStream(); // no new line before and newline after
	  this.newlines = newlines || 0;
	  this.whitespace_before = whitespace_before || '';
	  this.parent = null;
	  this.next = null;
	  this.previous = null;
	  this.opened = null;
	  this.closed = null;
	  this.directives = null;
	}


	token.Token = Token;
	return token;
}

var acorn = {};

/* jshint node: true, curly: false */

var hasRequiredAcorn;

function requireAcorn () {
	if (hasRequiredAcorn) return acorn;
	hasRequiredAcorn = 1;
	(function (exports$1) {

		// acorn used char codes to squeeze the last bit of performance out
		// Beautifier is okay without that, so we're using regex
		// permit # (23), $ (36), and @ (64). @ is used in ES7 decorators.
		// 65 through 91 are uppercase letters.
		// permit _ (95).
		// 97 through 123 are lowercase letters.
		var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";

		// inside an identifier @ is not allowed but 0-9 are.
		var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";

		// Big ugly regular expressions that match characters in the
		// whitespace, identifier, and identifier-start categories. These
		// are only applied when a character is found to actually have a
		// code point above 128.
		var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
		var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
		//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
		//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

		var unicodeEscapeOrCodePoint = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}";
		var identifierStart = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
		var identifierChars = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";

		exports$1.identifier = new RegExp(identifierStart + identifierChars, 'g');
		exports$1.identifierStart = new RegExp(identifierStart);
		exports$1.identifierMatch = new RegExp("(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");

		// Whether a single character denotes a newline.

		exports$1.newline = /[\n\r\u2028\u2029]/;

		// Matches a whole line break (where CRLF is considered a single
		// line break). Used to count lines.

		// in javascript, these two differ
		// in python they are the same, different methods are called on them
		exports$1.lineBreak = new RegExp('\r\n|' + exports$1.newline.source);
		exports$1.allLineBreaks = new RegExp(exports$1.lineBreak.source, 'g'); 
	} (acorn));
	return acorn;
}

var options$3 = {};

var options$2 = {};

/*jshint node:true */

var hasRequiredOptions$3;

function requireOptions$3 () {
	if (hasRequiredOptions$3) return options$2;
	hasRequiredOptions$3 = 1;

	function Options(options, merge_child_field) {
	  this.raw_options = _mergeOpts(options, merge_child_field);

	  // Support passing the source text back with no change
	  this.disabled = this._get_boolean('disabled');

	  this.eol = this._get_characters('eol', 'auto');
	  this.end_with_newline = this._get_boolean('end_with_newline');
	  this.indent_size = this._get_number('indent_size', 4);
	  this.indent_char = this._get_characters('indent_char', ' ');
	  this.indent_level = this._get_number('indent_level');

	  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
	  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
	  if (!this.preserve_newlines) {
	    this.max_preserve_newlines = 0;
	  }

	  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
	  if (this.indent_with_tabs) {
	    this.indent_char = '\t';

	    // indent_size behavior changed after 1.8.6
	    // It used to be that indent_size would be
	    // set to 1 for indent_with_tabs. That is no longer needed and
	    // actually doesn't make sense - why not use spaces? Further,
	    // that might produce unexpected behavior - tabs being used
	    // for single-column alignment. So, when indent_with_tabs is true
	    // and indent_size is 1, reset indent_size to 4.
	    if (this.indent_size === 1) {
	      this.indent_size = 4;
	    }
	  }

	  // Backwards compat with 1.3.x
	  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

	  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

	  // valid templating languages ['django', 'erb', 'handlebars', 'php', 'smarty', 'angular']
	  // For now, 'auto' = all off for javascript, all except angular on for html (and inline javascript/css).
	  // other values ignored
	  this.templating = this._get_selection_list('templating', ['auto', 'none', 'angular', 'django', 'erb', 'handlebars', 'php', 'smarty'], ['auto']);
	}

	Options.prototype._get_array = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = default_value || [];
	  if (typeof option_value === 'object') {
	    if (option_value !== null && typeof option_value.concat === 'function') {
	      result = option_value.concat();
	    }
	  } else if (typeof option_value === 'string') {
	    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
	  }
	  return result;
	};

	Options.prototype._get_boolean = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = option_value === undefined ? !!default_value : !!option_value;
	  return result;
	};

	Options.prototype._get_characters = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = default_value || '';
	  if (typeof option_value === 'string') {
	    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
	  }
	  return result;
	};

	Options.prototype._get_number = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  default_value = parseInt(default_value, 10);
	  if (isNaN(default_value)) {
	    default_value = 0;
	  }
	  var result = parseInt(option_value, 10);
	  if (isNaN(result)) {
	    result = default_value;
	  }
	  return result;
	};

	Options.prototype._get_selection = function(name, selection_list, default_value) {
	  var result = this._get_selection_list(name, selection_list, default_value);
	  if (result.length !== 1) {
	    throw new Error(
	      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
	      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
	  }

	  return result[0];
	};


	Options.prototype._get_selection_list = function(name, selection_list, default_value) {
	  if (!selection_list || selection_list.length === 0) {
	    throw new Error("Selection list cannot be empty.");
	  }

	  default_value = default_value || [selection_list[0]];
	  if (!this._is_valid_selection(default_value, selection_list)) {
	    throw new Error("Invalid Default Value!");
	  }

	  var result = this._get_array(name, default_value);
	  if (!this._is_valid_selection(result, selection_list)) {
	    throw new Error(
	      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
	      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
	  }

	  return result;
	};

	Options.prototype._is_valid_selection = function(result, selection_list) {
	  return result.length && selection_list.length &&
	    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
	};


	// merges child options up with the parent options object
	// Example: obj = {a: 1, b: {a: 2}}
	//          mergeOpts(obj, 'b')
	//
	//          Returns: {a: 2}
	function _mergeOpts(allOptions, childFieldName) {
	  var finalOpts = {};
	  allOptions = _normalizeOpts(allOptions);
	  var name;

	  for (name in allOptions) {
	    if (name !== childFieldName) {
	      finalOpts[name] = allOptions[name];
	    }
	  }

	  //merge in the per type settings for the childFieldName
	  if (childFieldName && allOptions[childFieldName]) {
	    for (name in allOptions[childFieldName]) {
	      finalOpts[name] = allOptions[childFieldName][name];
	    }
	  }
	  return finalOpts;
	}

	function _normalizeOpts(options) {
	  var convertedOpts = {};
	  var key;

	  for (key in options) {
	    var newKey = key.replace(/-/g, "_");
	    convertedOpts[newKey] = options[key];
	  }
	  return convertedOpts;
	}

	options$2.Options = Options;
	options$2.normalizeOpts = _normalizeOpts;
	options$2.mergeOpts = _mergeOpts;
	return options$2;
}

/*jshint node:true */

var hasRequiredOptions$2;

function requireOptions$2 () {
	if (hasRequiredOptions$2) return options$3;
	hasRequiredOptions$2 = 1;

	var BaseOptions = requireOptions$3().Options;

	var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

	function Options(options) {
	  BaseOptions.call(this, options, 'js');

	  // compatibility, re
	  var raw_brace_style = this.raw_options.brace_style || null;
	  if (raw_brace_style === "expand-strict") { //graceful handling of deprecated option
	    this.raw_options.brace_style = "expand";
	  } else if (raw_brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
	    this.raw_options.brace_style = "collapse,preserve-inline";
	  } else if (this.raw_options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
	    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
	    // } else if (!raw_brace_style) { //Nothing exists to set it
	    //   raw_brace_style = "collapse";
	  }

	  //preserve-inline in delimited string will trigger brace_preserve_inline, everything
	  //else is considered a brace_style and the last one only will have an effect

	  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

	  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
	  this.brace_style = "collapse";

	  for (var bs = 0; bs < brace_style_split.length; bs++) {
	    if (brace_style_split[bs] === "preserve-inline") {
	      this.brace_preserve_inline = true;
	    } else {
	      this.brace_style = brace_style_split[bs];
	    }
	  }

	  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
	  this.break_chained_methods = this._get_boolean('break_chained_methods');
	  this.space_in_paren = this._get_boolean('space_in_paren');
	  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
	  this.jslint_happy = this._get_boolean('jslint_happy');
	  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
	  this.space_after_named_function = this._get_boolean('space_after_named_function');
	  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
	  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
	  this.unescape_strings = this._get_boolean('unescape_strings');
	  this.e4x = this._get_boolean('e4x');
	  this.comma_first = this._get_boolean('comma_first');
	  this.operator_position = this._get_selection('operator_position', validPositionValues);

	  // For testing of beautify preserve:start directive
	  this.test_output_raw = this._get_boolean('test_output_raw');

	  // force this._options.space_after_anon_function to true if this._options.jslint_happy
	  if (this.jslint_happy) {
	    this.space_after_anon_function = true;
	  }

	}
	Options.prototype = new BaseOptions();



	options$3.Options = Options;
	return options$3;
}

var tokenizer$2 = {};

var inputscanner = {};

/*jshint node:true */

var hasRequiredInputscanner;

function requireInputscanner () {
	if (hasRequiredInputscanner) return inputscanner;
	hasRequiredInputscanner = 1;

	var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

	function InputScanner(input_string) {
	  this.__input = input_string || '';
	  this.__input_length = this.__input.length;
	  this.__position = 0;
	}

	InputScanner.prototype.restart = function() {
	  this.__position = 0;
	};

	InputScanner.prototype.back = function() {
	  if (this.__position > 0) {
	    this.__position -= 1;
	  }
	};

	InputScanner.prototype.hasNext = function() {
	  return this.__position < this.__input_length;
	};

	InputScanner.prototype.next = function() {
	  var val = null;
	  if (this.hasNext()) {
	    val = this.__input.charAt(this.__position);
	    this.__position += 1;
	  }
	  return val;
	};

	InputScanner.prototype.peek = function(index) {
	  var val = null;
	  index = index || 0;
	  index += this.__position;
	  if (index >= 0 && index < this.__input_length) {
	    val = this.__input.charAt(index);
	  }
	  return val;
	};

	// This is a JavaScript only helper function (not in python)
	// Javascript doesn't have a match method
	// and not all implementation support "sticky" flag.
	// If they do not support sticky then both this.match() and this.test() method
	// must get the match and check the index of the match.
	// If sticky is supported and set, this method will use it.
	// Otherwise it will check that global is set, and fall back to the slower method.
	InputScanner.prototype.__match = function(pattern, index) {
	  pattern.lastIndex = index;
	  var pattern_match = pattern.exec(this.__input);

	  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
	    if (pattern_match.index !== index) {
	      pattern_match = null;
	    }
	  }

	  return pattern_match;
	};

	InputScanner.prototype.test = function(pattern, index) {
	  index = index || 0;
	  index += this.__position;

	  if (index >= 0 && index < this.__input_length) {
	    return !!this.__match(pattern, index);
	  } else {
	    return false;
	  }
	};

	InputScanner.prototype.testChar = function(pattern, index) {
	  // test one character regex match
	  var val = this.peek(index);
	  pattern.lastIndex = 0;
	  return val !== null && pattern.test(val);
	};

	InputScanner.prototype.match = function(pattern) {
	  var pattern_match = this.__match(pattern, this.__position);
	  if (pattern_match) {
	    this.__position += pattern_match[0].length;
	  } else {
	    pattern_match = null;
	  }
	  return pattern_match;
	};

	InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
	  var val = '';
	  var match;
	  if (starting_pattern) {
	    match = this.match(starting_pattern);
	    if (match) {
	      val += match[0];
	    }
	  }
	  if (until_pattern && (match || !starting_pattern)) {
	    val += this.readUntil(until_pattern, until_after);
	  }
	  return val;
	};

	InputScanner.prototype.readUntil = function(pattern, until_after) {
	  var val = '';
	  var match_index = this.__position;
	  pattern.lastIndex = this.__position;
	  var pattern_match = pattern.exec(this.__input);
	  if (pattern_match) {
	    match_index = pattern_match.index;
	    if (until_after) {
	      match_index += pattern_match[0].length;
	    }
	  } else {
	    match_index = this.__input_length;
	  }

	  val = this.__input.substring(this.__position, match_index);
	  this.__position = match_index;
	  return val;
	};

	InputScanner.prototype.readUntilAfter = function(pattern) {
	  return this.readUntil(pattern, true);
	};

	InputScanner.prototype.get_regexp = function(pattern, match_from) {
	  var result = null;
	  var flags = 'g';
	  if (match_from && regexp_has_sticky) {
	    flags = 'y';
	  }
	  // strings are converted to regexp
	  if (typeof pattern === "string" && pattern !== '') {
	    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
	    result = new RegExp(pattern, flags);
	  } else if (pattern) {
	    result = new RegExp(pattern.source, flags);
	  }
	  return result;
	};

	InputScanner.prototype.get_literal_regexp = function(literal_string) {
	  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
	};

	/* css beautifier legacy helpers */
	InputScanner.prototype.peekUntilAfter = function(pattern) {
	  var start = this.__position;
	  var val = this.readUntilAfter(pattern);
	  this.__position = start;
	  return val;
	};

	InputScanner.prototype.lookBack = function(testVal) {
	  var start = this.__position - 1;
	  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
	    .toLowerCase() === testVal;
	};

	inputscanner.InputScanner = InputScanner;
	return inputscanner;
}

var tokenizer$1 = {};

var tokenstream = {};

/*jshint node:true */

var hasRequiredTokenstream;

function requireTokenstream () {
	if (hasRequiredTokenstream) return tokenstream;
	hasRequiredTokenstream = 1;

	function TokenStream(parent_token) {
	  // private
	  this.__tokens = [];
	  this.__tokens_length = this.__tokens.length;
	  this.__position = 0;
	  this.__parent_token = parent_token;
	}

	TokenStream.prototype.restart = function() {
	  this.__position = 0;
	};

	TokenStream.prototype.isEmpty = function() {
	  return this.__tokens_length === 0;
	};

	TokenStream.prototype.hasNext = function() {
	  return this.__position < this.__tokens_length;
	};

	TokenStream.prototype.next = function() {
	  var val = null;
	  if (this.hasNext()) {
	    val = this.__tokens[this.__position];
	    this.__position += 1;
	  }
	  return val;
	};

	TokenStream.prototype.peek = function(index) {
	  var val = null;
	  index = index || 0;
	  index += this.__position;
	  if (index >= 0 && index < this.__tokens_length) {
	    val = this.__tokens[index];
	  }
	  return val;
	};

	TokenStream.prototype.add = function(token) {
	  if (this.__parent_token) {
	    token.parent = this.__parent_token;
	  }
	  this.__tokens.push(token);
	  this.__tokens_length += 1;
	};

	tokenstream.TokenStream = TokenStream;
	return tokenstream;
}

var whitespacepattern = {};

var pattern = {};

/*jshint node:true */

var hasRequiredPattern;

function requirePattern () {
	if (hasRequiredPattern) return pattern;
	hasRequiredPattern = 1;

	function Pattern(input_scanner, parent) {
	  this._input = input_scanner;
	  this._starting_pattern = null;
	  this._match_pattern = null;
	  this._until_pattern = null;
	  this._until_after = false;

	  if (parent) {
	    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
	    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
	    this._until_pattern = this._input.get_regexp(parent._until_pattern);
	    this._until_after = parent._until_after;
	  }
	}

	Pattern.prototype.read = function() {
	  var result = this._input.read(this._starting_pattern);
	  if (!this._starting_pattern || result) {
	    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
	  }
	  return result;
	};

	Pattern.prototype.read_match = function() {
	  return this._input.match(this._match_pattern);
	};

	Pattern.prototype.until_after = function(pattern) {
	  var result = this._create();
	  result._until_after = true;
	  result._until_pattern = this._input.get_regexp(pattern);
	  result._update();
	  return result;
	};

	Pattern.prototype.until = function(pattern) {
	  var result = this._create();
	  result._until_after = false;
	  result._until_pattern = this._input.get_regexp(pattern);
	  result._update();
	  return result;
	};

	Pattern.prototype.starting_with = function(pattern) {
	  var result = this._create();
	  result._starting_pattern = this._input.get_regexp(pattern, true);
	  result._update();
	  return result;
	};

	Pattern.prototype.matching = function(pattern) {
	  var result = this._create();
	  result._match_pattern = this._input.get_regexp(pattern, true);
	  result._update();
	  return result;
	};

	Pattern.prototype._create = function() {
	  return new Pattern(this._input, this);
	};

	Pattern.prototype._update = function() {};

	pattern.Pattern = Pattern;
	return pattern;
}

/*jshint node:true */

var hasRequiredWhitespacepattern;

function requireWhitespacepattern () {
	if (hasRequiredWhitespacepattern) return whitespacepattern;
	hasRequiredWhitespacepattern = 1;

	var Pattern = requirePattern().Pattern;

	function WhitespacePattern(input_scanner, parent) {
	  Pattern.call(this, input_scanner, parent);
	  if (parent) {
	    this._line_regexp = this._input.get_regexp(parent._line_regexp);
	  } else {
	    this.__set_whitespace_patterns('', '');
	  }

	  this.newline_count = 0;
	  this.whitespace_before_token = '';
	}
	WhitespacePattern.prototype = new Pattern();

	WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
	  whitespace_chars += '\\t ';
	  newline_chars += '\\n\\r';

	  this._match_pattern = this._input.get_regexp(
	    '[' + whitespace_chars + newline_chars + ']+', true);
	  this._newline_regexp = this._input.get_regexp(
	    '\\r\\n|[' + newline_chars + ']');
	};

	WhitespacePattern.prototype.read = function() {
	  this.newline_count = 0;
	  this.whitespace_before_token = '';

	  var resulting_string = this._input.read(this._match_pattern);
	  if (resulting_string === ' ') {
	    this.whitespace_before_token = ' ';
	  } else if (resulting_string) {
	    var matches = this.__split(this._newline_regexp, resulting_string);
	    this.newline_count = matches.length - 1;
	    this.whitespace_before_token = matches[this.newline_count];
	  }

	  return resulting_string;
	};

	WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
	  var result = this._create();
	  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
	  result._update();
	  return result;
	};

	WhitespacePattern.prototype._create = function() {
	  return new WhitespacePattern(this._input, this);
	};

	WhitespacePattern.prototype.__split = function(regexp, input_string) {
	  regexp.lastIndex = 0;
	  var start_index = 0;
	  var result = [];
	  var next_match = regexp.exec(input_string);
	  while (next_match) {
	    result.push(input_string.substring(start_index, next_match.index));
	    start_index = next_match.index + next_match[0].length;
	    next_match = regexp.exec(input_string);
	  }

	  if (start_index < input_string.length) {
	    result.push(input_string.substring(start_index, input_string.length));
	  } else {
	    result.push('');
	  }

	  return result;
	};



	whitespacepattern.WhitespacePattern = WhitespacePattern;
	return whitespacepattern;
}

/*jshint node:true */

var hasRequiredTokenizer$2;

function requireTokenizer$2 () {
	if (hasRequiredTokenizer$2) return tokenizer$1;
	hasRequiredTokenizer$2 = 1;

	var InputScanner = requireInputscanner().InputScanner;
	var Token = requireToken().Token;
	var TokenStream = requireTokenstream().TokenStream;
	var WhitespacePattern = requireWhitespacepattern().WhitespacePattern;

	var TOKEN = {
	  START: 'TK_START',
	  RAW: 'TK_RAW',
	  EOF: 'TK_EOF'
	};

	var Tokenizer = function(input_string, options) {
	  this._input = new InputScanner(input_string);
	  this._options = options || {};
	  this.__tokens = null;

	  this._patterns = {};
	  this._patterns.whitespace = new WhitespacePattern(this._input);
	};

	Tokenizer.prototype.tokenize = function() {
	  this._input.restart();
	  this.__tokens = new TokenStream();

	  this._reset();

	  var current;
	  var previous = new Token(TOKEN.START, '');
	  var open_token = null;
	  var open_stack = [];
	  var comments = new TokenStream();

	  while (previous.type !== TOKEN.EOF) {
	    current = this._get_next_token(previous, open_token);
	    while (this._is_comment(current)) {
	      comments.add(current);
	      current = this._get_next_token(previous, open_token);
	    }

	    if (!comments.isEmpty()) {
	      current.comments_before = comments;
	      comments = new TokenStream();
	    }

	    current.parent = open_token;

	    if (this._is_opening(current)) {
	      open_stack.push(open_token);
	      open_token = current;
	    } else if (open_token && this._is_closing(current, open_token)) {
	      current.opened = open_token;
	      open_token.closed = current;
	      open_token = open_stack.pop();
	      current.parent = open_token;
	    }

	    current.previous = previous;
	    previous.next = current;

	    this.__tokens.add(current);
	    previous = current;
	  }

	  return this.__tokens;
	};


	Tokenizer.prototype._is_first_token = function() {
	  return this.__tokens.isEmpty();
	};

	Tokenizer.prototype._reset = function() {};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  this._readWhitespace();
	  var resulting_string = this._input.read(/.+/g);
	  if (resulting_string) {
	    return this._create_token(TOKEN.RAW, resulting_string);
	  } else {
	    return this._create_token(TOKEN.EOF, '');
	  }
	};

	Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._create_token = function(type, text) {
	  var token = new Token(type, text,
	    this._patterns.whitespace.newline_count,
	    this._patterns.whitespace.whitespace_before_token);
	  return token;
	};

	Tokenizer.prototype._readWhitespace = function() {
	  return this._patterns.whitespace.read();
	};



	tokenizer$1.Tokenizer = Tokenizer;
	tokenizer$1.TOKEN = TOKEN;
	return tokenizer$1;
}

var directives = {};

/*jshint node:true */

var hasRequiredDirectives;

function requireDirectives () {
	if (hasRequiredDirectives) return directives;
	hasRequiredDirectives = 1;

	function Directives(start_block_pattern, end_block_pattern) {
	  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
	  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
	  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
	  this.__directive_pattern = / (\w+)[:](\w+)/g;

	  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
	}

	Directives.prototype.get_directives = function(text) {
	  if (!text.match(this.__directives_block_pattern)) {
	    return null;
	  }

	  var directives = {};
	  this.__directive_pattern.lastIndex = 0;
	  var directive_match = this.__directive_pattern.exec(text);

	  while (directive_match) {
	    directives[directive_match[1]] = directive_match[2];
	    directive_match = this.__directive_pattern.exec(text);
	  }

	  return directives;
	};

	Directives.prototype.readIgnored = function(input) {
	  return input.readUntilAfter(this.__directives_end_ignore_pattern);
	};


	directives.Directives = Directives;
	return directives;
}

var templatablepattern = {};

/*jshint node:true */

var hasRequiredTemplatablepattern;

function requireTemplatablepattern () {
	if (hasRequiredTemplatablepattern) return templatablepattern;
	hasRequiredTemplatablepattern = 1;

	var Pattern = requirePattern().Pattern;


	var template_names = {
	  django: false,
	  erb: false,
	  handlebars: false,
	  php: false,
	  smarty: false,
	  angular: false
	};

	// This lets templates appear anywhere we would do a readUntil
	// The cost is higher but it is pay to play.
	function TemplatablePattern(input_scanner, parent) {
	  Pattern.call(this, input_scanner, parent);
	  this.__template_pattern = null;
	  this._disabled = Object.assign({}, template_names);
	  this._excluded = Object.assign({}, template_names);

	  if (parent) {
	    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
	    this._excluded = Object.assign(this._excluded, parent._excluded);
	    this._disabled = Object.assign(this._disabled, parent._disabled);
	  }
	  var pattern = new Pattern(input_scanner);
	  this.__patterns = {
	    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
	    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
	    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
	    php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
	    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
	    // django coflicts with handlebars a bit.
	    django: pattern.starting_with(/{%/).until_after(/%}/),
	    django_value: pattern.starting_with(/{{/).until_after(/}}/),
	    django_comment: pattern.starting_with(/{#/).until_after(/#}/),
	    smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
	    smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
	    smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
	  };
	}
	TemplatablePattern.prototype = new Pattern();

	TemplatablePattern.prototype._create = function() {
	  return new TemplatablePattern(this._input, this);
	};

	TemplatablePattern.prototype._update = function() {
	  this.__set_templated_pattern();
	};

	TemplatablePattern.prototype.disable = function(language) {
	  var result = this._create();
	  result._disabled[language] = true;
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.read_options = function(options) {
	  var result = this._create();
	  for (var language in template_names) {
	    result._disabled[language] = options.templating.indexOf(language) === -1;
	  }
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.exclude = function(language) {
	  var result = this._create();
	  result._excluded[language] = true;
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.read = function() {
	  var result = '';
	  if (this._match_pattern) {
	    result = this._input.read(this._starting_pattern);
	  } else {
	    result = this._input.read(this._starting_pattern, this.__template_pattern);
	  }
	  var next = this._read_template();
	  while (next) {
	    if (this._match_pattern) {
	      next += this._input.read(this._match_pattern);
	    } else {
	      next += this._input.readUntil(this.__template_pattern);
	    }
	    result += next;
	    next = this._read_template();
	  }

	  if (this._until_after) {
	    result += this._input.readUntilAfter(this._until_pattern);
	  }
	  return result;
	};

	TemplatablePattern.prototype.__set_templated_pattern = function() {
	  var items = [];

	  if (!this._disabled.php) {
	    items.push(this.__patterns.php._starting_pattern.source);
	  }
	  if (!this._disabled.handlebars) {
	    items.push(this.__patterns.handlebars._starting_pattern.source);
	  }
	  if (!this._disabled.angular) {
	    // Handlebars ('{{' and '}}') are also special tokens in Angular)
	    items.push(this.__patterns.handlebars._starting_pattern.source);
	  }
	  if (!this._disabled.erb) {
	    items.push(this.__patterns.erb._starting_pattern.source);
	  }
	  if (!this._disabled.django) {
	    items.push(this.__patterns.django._starting_pattern.source);
	    // The starting pattern for django is more complex because it has different
	    // patterns for value, comment, and other sections
	    items.push(this.__patterns.django_value._starting_pattern.source);
	    items.push(this.__patterns.django_comment._starting_pattern.source);
	  }
	  if (!this._disabled.smarty) {
	    items.push(this.__patterns.smarty._starting_pattern.source);
	  }

	  if (this._until_pattern) {
	    items.push(this._until_pattern.source);
	  }
	  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
	};

	TemplatablePattern.prototype._read_template = function() {
	  var resulting_string = '';
	  var c = this._input.peek();
	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    //if we're in a comment, do something special
	    // We treat all comments as literals, even more than preformatted tags
	    // we just look for the appropriate close tag
	    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
	      resulting_string = resulting_string ||
	        this.__patterns.php.read();
	    }
	    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
	      resulting_string = resulting_string ||
	        this.__patterns.erb.read();
	    }
	  } else if (c === '{') {
	    if (!this._disabled.handlebars && !this._excluded.handlebars) {
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars_comment.read();
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars_unescaped.read();
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars.read();
	    }
	    if (!this._disabled.django) {
	      // django coflicts with handlebars a bit.
	      if (!this._excluded.django && !this._excluded.handlebars) {
	        resulting_string = resulting_string ||
	          this.__patterns.django_value.read();
	      }
	      if (!this._excluded.django) {
	        resulting_string = resulting_string ||
	          this.__patterns.django_comment.read();
	        resulting_string = resulting_string ||
	          this.__patterns.django.read();
	      }
	    }
	    if (!this._disabled.smarty) {
	      // smarty cannot be enabled with django or handlebars enabled
	      if (this._disabled.django && this._disabled.handlebars) {
	        resulting_string = resulting_string ||
	          this.__patterns.smarty_comment.read();
	        resulting_string = resulting_string ||
	          this.__patterns.smarty_literal.read();
	        resulting_string = resulting_string ||
	          this.__patterns.smarty.read();
	      }
	    }
	  }
	  return resulting_string;
	};


	templatablepattern.TemplatablePattern = TemplatablePattern;
	return templatablepattern;
}

/*jshint node:true */

var hasRequiredTokenizer$1;

function requireTokenizer$1 () {
	if (hasRequiredTokenizer$1) return tokenizer$2;
	hasRequiredTokenizer$1 = 1;

	var InputScanner = requireInputscanner().InputScanner;
	var BaseTokenizer = requireTokenizer$2().Tokenizer;
	var BASETOKEN = requireTokenizer$2().TOKEN;
	var Directives = requireDirectives().Directives;
	var acorn = requireAcorn();
	var Pattern = requirePattern().Pattern;
	var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;


	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}


	var TOKEN = {
	  START_EXPR: 'TK_START_EXPR',
	  END_EXPR: 'TK_END_EXPR',
	  START_BLOCK: 'TK_START_BLOCK',
	  END_BLOCK: 'TK_END_BLOCK',
	  WORD: 'TK_WORD',
	  RESERVED: 'TK_RESERVED',
	  SEMICOLON: 'TK_SEMICOLON',
	  STRING: 'TK_STRING',
	  EQUALS: 'TK_EQUALS',
	  OPERATOR: 'TK_OPERATOR',
	  COMMA: 'TK_COMMA',
	  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
	  COMMENT: 'TK_COMMENT',
	  DOT: 'TK_DOT',
	  UNKNOWN: 'TK_UNKNOWN',
	  START: BASETOKEN.START,
	  RAW: BASETOKEN.RAW,
	  EOF: BASETOKEN.EOF
	};


	var directives_core = new Directives(/\/\*/, /\*\//);

	var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;

	var digit = /[0-9]/;

	// Dot "." must be distinguished from "..." and decimal
	var dot_pattern = /[^\d\.]/;

	var positionable_operators = (
	  ">>> === !== &&= ??= ||= " +
	  "<< && >= ** != == <= >> || ?? |> " +
	  "< / - + > : & % ? ^ | *").split(' ');

	// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
	// Also, you must update possitionable operators separately from punct
	var punct =
	  ">>>= " +
	  "... >>= <<= === >>> !== **= &&= ??= ||= " +
	  "=> ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> " +
	  "= ! ? > < : / ^ - + * & % ~ |";

	punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
	// ?. but not if followed by a number 
	punct = '\\?\\.(?!\\d) ' + punct;
	punct = punct.replace(/ /g, '|');

	var punct_pattern = new RegExp(punct);

	// words which should always start on new line.
	var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
	var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as', 'class', 'extends']);
	var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

	// var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

	var in_html_comment;

	var Tokenizer = function(input_string, options) {
	  BaseTokenizer.call(this, input_string, options);

	  this._patterns.whitespace = this._patterns.whitespace.matching(
	    /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
	    /\u2028\u2029/.source);

	  var pattern_reader = new Pattern(this._input);
	  var templatable = new TemplatablePattern(this._input)
	    .read_options(this._options);

	  this.__patterns = {
	    template: templatable,
	    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
	    number: pattern_reader.matching(number_pattern),
	    punct: pattern_reader.matching(punct_pattern),
	    // comment ends just before nearest linefeed or end of file
	    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
	    //  /* ... */ comment ends with nearest */ or end of file
	    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
	    html_comment_start: pattern_reader.matching(/<!--/),
	    html_comment_end: pattern_reader.matching(/-->/),
	    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
	    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
	    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
	    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
	    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
	    template_text: templatable.until(/[`\\$]/),
	    template_expression: templatable.until(/[`}\\]/)
	  };

	};
	Tokenizer.prototype = new BaseTokenizer();

	Tokenizer.prototype._is_comment = function(current_token) {
	  return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
	};

	Tokenizer.prototype._is_opening = function(current_token) {
	  return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) {
	  return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) &&
	    (open_token && (
	      (current_token.text === ']' && open_token.text === '[') ||
	      (current_token.text === ')' && open_token.text === '(') ||
	      (current_token.text === '}' && open_token.text === '{')));
	};

	Tokenizer.prototype._reset = function() {
	  in_html_comment = false;
	};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  var token = null;
	  this._readWhitespace();
	  var c = this._input.peek();

	  if (c === null) {
	    return this._create_token(TOKEN.EOF, '');
	  }

	  token = token || this._read_non_javascript(c);
	  token = token || this._read_string(c);
	  token = token || this._read_pair(c, this._input.peek(1)); // Issue #2062 hack for record type '#{'
	  token = token || this._read_word(previous_token);
	  token = token || this._read_singles(c);
	  token = token || this._read_comment(c);
	  token = token || this._read_regexp(c, previous_token);
	  token = token || this._read_xml(c, previous_token);
	  token = token || this._read_punctuation();
	  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

	  return token;
	};

	Tokenizer.prototype._read_word = function(previous_token) {
	  var resulting_string;
	  resulting_string = this.__patterns.identifier.read();
	  if (resulting_string !== '') {
	    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
	    if (!(previous_token.type === TOKEN.DOT ||
	        (previous_token.type === TOKEN.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get'))) &&
	      reserved_word_pattern.test(resulting_string)) {
	      if ((resulting_string === 'in' || resulting_string === 'of') &&
	        (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) { // hack for 'in' and 'of' operators
	        return this._create_token(TOKEN.OPERATOR, resulting_string);
	      }
	      return this._create_token(TOKEN.RESERVED, resulting_string);
	    }
	    return this._create_token(TOKEN.WORD, resulting_string);
	  }

	  resulting_string = this.__patterns.number.read();
	  if (resulting_string !== '') {
	    return this._create_token(TOKEN.WORD, resulting_string);
	  }
	};

	Tokenizer.prototype._read_singles = function(c) {
	  var token = null;
	  if (c === '(' || c === '[') {
	    token = this._create_token(TOKEN.START_EXPR, c);
	  } else if (c === ')' || c === ']') {
	    token = this._create_token(TOKEN.END_EXPR, c);
	  } else if (c === '{') {
	    token = this._create_token(TOKEN.START_BLOCK, c);
	  } else if (c === '}') {
	    token = this._create_token(TOKEN.END_BLOCK, c);
	  } else if (c === ';') {
	    token = this._create_token(TOKEN.SEMICOLON, c);
	  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
	    token = this._create_token(TOKEN.DOT, c);
	  } else if (c === ',') {
	    token = this._create_token(TOKEN.COMMA, c);
	  }

	  if (token) {
	    this._input.next();
	  }
	  return token;
	};

	Tokenizer.prototype._read_pair = function(c, d) {
	  var token = null;
	  if (c === '#' && d === '{') {
	    token = this._create_token(TOKEN.START_BLOCK, c + d);
	  }

	  if (token) {
	    this._input.next();
	    this._input.next();
	  }
	  return token;
	};

	Tokenizer.prototype._read_punctuation = function() {
	  var resulting_string = this.__patterns.punct.read();

	  if (resulting_string !== '') {
	    if (resulting_string === '=') {
	      return this._create_token(TOKEN.EQUALS, resulting_string);
	    } else if (resulting_string === '?.') {
	      return this._create_token(TOKEN.DOT, resulting_string);
	    } else {
	      return this._create_token(TOKEN.OPERATOR, resulting_string);
	    }
	  }
	};

	Tokenizer.prototype._read_non_javascript = function(c) {
	  var resulting_string = '';

	  if (c === '#') {
	    if (this._is_first_token()) {
	      resulting_string = this.__patterns.shebang.read();

	      if (resulting_string) {
	        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
	      }
	    }

	    // handles extendscript #includes
	    resulting_string = this.__patterns.include.read();

	    if (resulting_string) {
	      return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
	    }

	    c = this._input.next();

	    // Spidermonkey-specific sharp variables for circular references. Considered obsolete.
	    var sharp = '#';
	    if (this._input.hasNext() && this._input.testChar(digit)) {
	      do {
	        c = this._input.next();
	        sharp += c;
	      } while (this._input.hasNext() && c !== '#' && c !== '=');
	      if (c === '#') ; else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
	        sharp += '[]';
	        this._input.next();
	        this._input.next();
	      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
	        sharp += '{}';
	        this._input.next();
	        this._input.next();
	      }
	      return this._create_token(TOKEN.WORD, sharp);
	    }

	    this._input.back();

	  } else if (c === '<' && this._is_first_token()) {
	    resulting_string = this.__patterns.html_comment_start.read();
	    if (resulting_string) {
	      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
	        resulting_string += this._input.next();
	      }
	      in_html_comment = true;
	      return this._create_token(TOKEN.COMMENT, resulting_string);
	    }
	  } else if (in_html_comment && c === '-') {
	    resulting_string = this.__patterns.html_comment_end.read();
	    if (resulting_string) {
	      in_html_comment = false;
	      return this._create_token(TOKEN.COMMENT, resulting_string);
	    }
	  }

	  return null;
	};

	Tokenizer.prototype._read_comment = function(c) {
	  var token = null;
	  if (c === '/') {
	    var comment = '';
	    if (this._input.peek(1) === '*') {
	      // peek for comment /* ... */
	      comment = this.__patterns.block_comment.read();
	      var directives = directives_core.get_directives(comment);
	      if (directives && directives.ignore === 'start') {
	        comment += directives_core.readIgnored(this._input);
	      }
	      comment = comment.replace(acorn.allLineBreaks, '\n');
	      token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
	      token.directives = directives;
	    } else if (this._input.peek(1) === '/') {
	      // peek for comment // ...
	      comment = this.__patterns.comment.read();
	      token = this._create_token(TOKEN.COMMENT, comment);
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_string = function(c) {
	  if (c === '`' || c === "'" || c === '"') {
	    var resulting_string = this._input.next();
	    this.has_char_escapes = false;

	    if (c === '`') {
	      resulting_string += this._read_string_recursive('`', true, '${');
	    } else {
	      resulting_string += this._read_string_recursive(c);
	    }

	    if (this.has_char_escapes && this._options.unescape_strings) {
	      resulting_string = unescape_string(resulting_string);
	    }

	    if (this._input.peek() === c) {
	      resulting_string += this._input.next();
	    }

	    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

	    return this._create_token(TOKEN.STRING, resulting_string);
	  }

	  return null;
	};

	Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
	  // regex and xml can only appear in specific locations during parsing
	  return (previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
	    (previous_token.type === TOKEN.END_EXPR && previous_token.text === ')' &&
	      previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
	    (in_array(previous_token.type, [TOKEN.COMMENT, TOKEN.START_EXPR, TOKEN.START_BLOCK, TOKEN.START,
	      TOKEN.END_BLOCK, TOKEN.OPERATOR, TOKEN.EQUALS, TOKEN.EOF, TOKEN.SEMICOLON, TOKEN.COMMA
	    ]));
	};

	Tokenizer.prototype._read_regexp = function(c, previous_token) {

	  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
	    // handle regexp
	    //
	    var resulting_string = this._input.next();
	    var esc = false;

	    var in_char_class = false;
	    while (this._input.hasNext() &&
	      ((esc || in_char_class || this._input.peek() !== c) &&
	        !this._input.testChar(acorn.newline))) {
	      resulting_string += this._input.peek();
	      if (!esc) {
	        esc = this._input.peek() === '\\';
	        if (this._input.peek() === '[') {
	          in_char_class = true;
	        } else if (this._input.peek() === ']') {
	          in_char_class = false;
	        }
	      } else {
	        esc = false;
	      }
	      this._input.next();
	    }

	    if (this._input.peek() === c) {
	      resulting_string += this._input.next();

	      // regexps may have modifiers /regexp/MOD , so fetch those, too
	      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
	      resulting_string += this._input.read(acorn.identifier);
	    }
	    return this._create_token(TOKEN.STRING, resulting_string);
	  }
	  return null;
	};

	Tokenizer.prototype._read_xml = function(c, previous_token) {

	  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
	    var xmlStr = '';
	    var match = this.__patterns.xml.read_match();
	    // handle e4x xml literals
	    //
	    if (match) {
	      // Trim root tag to attempt to
	      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
	      var isCurlyRoot = rootTag.indexOf('{') === 0;
	      var depth = 0;
	      while (match) {
	        var isEndTag = !!match[1];
	        var tagName = match[2];
	        var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
	        if (!isSingletonTag &&
	          (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
	          if (isEndTag) {
	            --depth;
	          } else {
	            ++depth;
	          }
	        }
	        xmlStr += match[0];
	        if (depth <= 0) {
	          break;
	        }
	        match = this.__patterns.xml.read_match();
	      }
	      // if we didn't close correctly, keep unformatted.
	      if (!match) {
	        xmlStr += this._input.match(/[\s\S]*/g)[0];
	      }
	      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
	      return this._create_token(TOKEN.STRING, xmlStr);
	    }
	  }

	  return null;
	};

	function unescape_string(s) {
	  // You think that a regex would work for this
	  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
	  //         return String.fromCharCode(parseInt(val, 16));
	  //     })
	  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
	  var out = '',
	    escaped = 0;

	  var input_scan = new InputScanner(s);
	  var matched = null;

	  while (input_scan.hasNext()) {
	    // Keep any whitespace, non-slash characters
	    // also keep slash pairs.
	    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

	    if (matched) {
	      out += matched[0];
	    }

	    if (input_scan.peek() === '\\') {
	      input_scan.next();
	      if (input_scan.peek() === 'x') {
	        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
	      } else if (input_scan.peek() === 'u') {
	        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
	        if (!matched) {
	          matched = input_scan.match(/u\{([0-9A-Fa-f]+)\}/g);
	        }
	      } else {
	        out += '\\';
	        if (input_scan.hasNext()) {
	          out += input_scan.next();
	        }
	        continue;
	      }

	      // If there's some error decoding, return the original string
	      if (!matched) {
	        return s;
	      }

	      escaped = parseInt(matched[1], 16);

	      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
	        // we bail out on \x7f..\xff,
	        // leaving whole string escaped,
	        // as it's probably completely binary
	        return s;
	      } else if (escaped >= 0x00 && escaped < 0x20) {
	        // leave 0x00...0x1f escaped
	        out += '\\' + matched[0];
	      } else if (escaped > 0x10FFFF) {
	        // If the escape sequence is out of bounds, keep the original sequence and continue conversion
	        out += '\\' + matched[0];
	      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
	        // single-quote, apostrophe, backslash - escape these
	        out += '\\' + String.fromCharCode(escaped);
	      } else {
	        out += String.fromCharCode(escaped);
	      }
	    }
	  }

	  return out;
	}

	// handle string
	//
	Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
	  var current_char;
	  var pattern;
	  if (delimiter === '\'') {
	    pattern = this.__patterns.single_quote;
	  } else if (delimiter === '"') {
	    pattern = this.__patterns.double_quote;
	  } else if (delimiter === '`') {
	    pattern = this.__patterns.template_text;
	  } else if (delimiter === '}') {
	    pattern = this.__patterns.template_expression;
	  }

	  var resulting_string = pattern.read();
	  var next = '';
	  while (this._input.hasNext()) {
	    next = this._input.next();
	    if (next === delimiter ||
	      (!allow_unescaped_newlines && acorn.newline.test(next))) {
	      this._input.back();
	      break;
	    } else if (next === '\\' && this._input.hasNext()) {
	      current_char = this._input.peek();

	      if (current_char === 'x' || current_char === 'u') {
	        this.has_char_escapes = true;
	      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
	        this._input.next();
	      }
	      next += this._input.next();
	    } else if (start_sub) {
	      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
	        next += this._input.next();
	      }

	      if (start_sub === next) {
	        if (delimiter === '`') {
	          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
	        } else {
	          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
	        }
	        if (this._input.hasNext()) {
	          next += this._input.next();
	        }
	      }
	    }
	    next += pattern.read();
	    resulting_string += next;
	  }

	  return resulting_string;
	};

	tokenizer$2.Tokenizer = Tokenizer;
	tokenizer$2.TOKEN = TOKEN;
	tokenizer$2.positionable_operators = positionable_operators.slice();
	tokenizer$2.line_starters = line_starters.slice();
	return tokenizer$2;
}

/*jshint node:true */

var hasRequiredBeautifier$2;

function requireBeautifier$2 () {
	if (hasRequiredBeautifier$2) return beautifier$2;
	hasRequiredBeautifier$2 = 1;

	var Output = requireOutput().Output;
	var Token = requireToken().Token;
	var acorn = requireAcorn();
	var Options = requireOptions$2().Options;
	var Tokenizer = requireTokenizer$1().Tokenizer;
	var line_starters = requireTokenizer$1().line_starters;
	var positionable_operators = requireTokenizer$1().positionable_operators;
	var TOKEN = requireTokenizer$1().TOKEN;


	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}

	function ltrim(s) {
	  return s.replace(/^\s+/g, '');
	}

	function generateMapFromStrings(list) {
	  var result = {};
	  for (var x = 0; x < list.length; x++) {
	    // make the mapped names underscored instead of dash
	    result[list[x].replace(/-/g, '_')] = list[x];
	  }
	  return result;
	}

	function reserved_word(token, word) {
	  return token && token.type === TOKEN.RESERVED && token.text === word;
	}

	function reserved_array(token, words) {
	  return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
	}
	// Unsure of what they mean, but they work. Worth cleaning up in future.
	var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];

	var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

	// Generate map from array
	var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);

	var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

	var MODE = {
	  BlockStatement: 'BlockStatement', // 'BLOCK'
	  Statement: 'Statement', // 'STATEMENT'
	  ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
	  ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
	  ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
	  Conditional: 'Conditional', //'(COND-EXPRESSION)',
	  Expression: 'Expression' //'(EXPRESSION)'
	};

	function remove_redundant_indentation(output, frame) {
	  // This implementation is effective but has some issues:
	  //     - can cause line wrap to happen too soon due to indent removal
	  //           after wrap points are calculated
	  // These issues are minor compared to ugly indentation.

	  if (frame.multiline_frame ||
	    frame.mode === MODE.ForInitializer ||
	    frame.mode === MODE.Conditional) {
	    return;
	  }

	  // remove one indent from each line inside this section
	  output.remove_indent(frame.start_line_index);
	}

	// we could use just string.split, but
	// IE doesn't like returning empty strings
	function split_linebreaks(s) {
	  //return s.split(/\x0d\x0a|\x0a/);

	  s = s.replace(acorn.allLineBreaks, '\n');
	  var out = [],
	    idx = s.indexOf("\n");
	  while (idx !== -1) {
	    out.push(s.substring(0, idx));
	    s = s.substring(idx + 1);
	    idx = s.indexOf("\n");
	  }
	  if (s.length) {
	    out.push(s);
	  }
	  return out;
	}

	function is_array(mode) {
	  return mode === MODE.ArrayLiteral;
	}

	function is_expression(mode) {
	  return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
	}

	function all_lines_start_with(lines, c) {
	  for (var i = 0; i < lines.length; i++) {
	    var line = lines[i].trim();
	    if (line.charAt(0) !== c) {
	      return false;
	    }
	  }
	  return true;
	}

	function each_line_matches_indent(lines, indent) {
	  var i = 0,
	    len = lines.length,
	    line;
	  for (; i < len; i++) {
	    line = lines[i];
	    // allow empty lines to pass through
	    if (line && line.indexOf(indent) !== 0) {
	      return false;
	    }
	  }
	  return true;
	}


	function Beautifier(source_text, options) {
	  options = options || {};
	  this._source_text = source_text || '';

	  this._output = null;
	  this._tokens = null;
	  this._last_last_text = null;
	  this._flags = null;
	  this._previous_flags = null;

	  this._flag_store = null;
	  this._options = new Options(options);
	}

	Beautifier.prototype.create_flags = function(flags_base, mode) {
	  var next_indent_level = 0;
	  if (flags_base) {
	    next_indent_level = flags_base.indentation_level;
	    if (!this._output.just_added_newline() &&
	      flags_base.line_indent_level > next_indent_level) {
	      next_indent_level = flags_base.line_indent_level;
	    }
	  }

	  var next_flags = {
	    mode: mode,
	    parent: flags_base,
	    last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''), // last token text
	    last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
	    declaration_statement: false,
	    declaration_assignment: false,
	    multiline_frame: false,
	    inline_frame: false,
	    if_block: false,
	    else_block: false,
	    class_start_block: false, // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
	    do_block: false,
	    do_while: false,
	    import_block: false,
	    in_case_statement: false, // switch(..){ INSIDE HERE }
	    in_case: false, // we're on the exact line with "case 0:"
	    case_body: false, // the indented case-action block
	    case_block: false, // the indented case-action block is wrapped with {}
	    indentation_level: next_indent_level,
	    alignment: 0,
	    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
	    start_line_index: this._output.get_line_number(),
	    ternary_depth: 0
	  };
	  return next_flags;
	};

	Beautifier.prototype._reset = function(source_text) {
	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  this._last_last_text = ''; // pre-last token text
	  this._output = new Output(this._options, baseIndentString);

	  // If testing the ignore directive, start with output disable set to true
	  this._output.raw = this._options.test_output_raw;


	  // Stack of parsing/formatting states, including MODE.
	  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
	  // and formatted output.  This makes the beautifier less accurate than full parsers
	  // but also far more tolerant of syntax errors.
	  //
	  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
	  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
	  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
	  // most full parsers would die, but the beautifier gracefully falls back to
	  // MODE.BlockStatement and continues on.
	  this._flag_store = [];
	  this.set_mode(MODE.BlockStatement);
	  var tokenizer = new Tokenizer(source_text, this._options);
	  this._tokens = tokenizer.tokenize();
	  return source_text;
	};

	Beautifier.prototype.beautify = function() {
	  // if disabled, return the input unchanged.
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var sweet_code;
	  var source_text = this._reset(this._source_text);

	  var eol = this._options.eol;
	  if (this._options.eol === 'auto') {
	    eol = '\n';
	    if (source_text && acorn.lineBreak.test(source_text || '')) {
	      eol = source_text.match(acorn.lineBreak)[0];
	    }
	  }

	  var current_token = this._tokens.next();
	  while (current_token) {
	    this.handle_token(current_token);

	    this._last_last_text = this._flags.last_token.text;
	    this._flags.last_token = current_token;

	    current_token = this._tokens.next();
	  }

	  sweet_code = this._output.get_code(eol);

	  return sweet_code;
	};

	Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
	  if (current_token.type === TOKEN.START_EXPR) {
	    this.handle_start_expr(current_token);
	  } else if (current_token.type === TOKEN.END_EXPR) {
	    this.handle_end_expr(current_token);
	  } else if (current_token.type === TOKEN.START_BLOCK) {
	    this.handle_start_block(current_token);
	  } else if (current_token.type === TOKEN.END_BLOCK) {
	    this.handle_end_block(current_token);
	  } else if (current_token.type === TOKEN.WORD) {
	    this.handle_word(current_token);
	  } else if (current_token.type === TOKEN.RESERVED) {
	    this.handle_word(current_token);
	  } else if (current_token.type === TOKEN.SEMICOLON) {
	    this.handle_semicolon(current_token);
	  } else if (current_token.type === TOKEN.STRING) {
	    this.handle_string(current_token);
	  } else if (current_token.type === TOKEN.EQUALS) {
	    this.handle_equals(current_token);
	  } else if (current_token.type === TOKEN.OPERATOR) {
	    this.handle_operator(current_token);
	  } else if (current_token.type === TOKEN.COMMA) {
	    this.handle_comma(current_token);
	  } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
	    this.handle_block_comment(current_token, preserve_statement_flags);
	  } else if (current_token.type === TOKEN.COMMENT) {
	    this.handle_comment(current_token, preserve_statement_flags);
	  } else if (current_token.type === TOKEN.DOT) {
	    this.handle_dot(current_token);
	  } else if (current_token.type === TOKEN.EOF) {
	    this.handle_eof(current_token);
	  } else if (current_token.type === TOKEN.UNKNOWN) {
	    this.handle_unknown(current_token, preserve_statement_flags);
	  } else {
	    this.handle_unknown(current_token, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
	  var newlines = current_token.newlines;
	  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

	  if (current_token.comments_before) {
	    var comment_token = current_token.comments_before.next();
	    while (comment_token) {
	      // The cleanest handling of inline comments is to treat them as though they aren't there.
	      // Just continue formatting and the behavior should be logical.
	      // Also ignore unknown tokens.  Again, this should result in better behavior.
	      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
	      this.handle_token(comment_token, preserve_statement_flags);
	      comment_token = current_token.comments_before.next();
	    }
	  }

	  if (keep_whitespace) {
	    for (var i = 0; i < newlines; i += 1) {
	      this.print_newline(i > 0, preserve_statement_flags);
	    }
	  } else {
	    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
	      newlines = this._options.max_preserve_newlines;
	    }

	    if (this._options.preserve_newlines) {
	      if (newlines > 1) {
	        this.print_newline(false, preserve_statement_flags);
	        for (var j = 1; j < newlines; j += 1) {
	          this.print_newline(true, preserve_statement_flags);
	        }
	      }
	    }
	  }

	};

	var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

	Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
	  force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

	  // Never wrap the first token on a line
	  if (this._output.just_added_newline()) {
	    return;
	  }

	  var shouldPreserveOrForce = (this._options.preserve_newlines && current_token.newlines) || force_linewrap;
	  var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) ||
	    in_array(current_token.text, positionable_operators);

	  if (operatorLogicApplies) {
	    var shouldPrintOperatorNewline = (
	        in_array(this._flags.last_token.text, positionable_operators) &&
	        in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
	      ) ||
	      in_array(current_token.text, positionable_operators);
	    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
	  }

	  if (shouldPreserveOrForce) {
	    this.print_newline(false, true);
	  } else if (this._options.wrap_line_length) {
	    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
	      // These tokens should never have a newline inserted
	      // between them and the following expression.
	      return;
	    }
	    this._output.set_wrap_point();
	  }
	};

	Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
	  if (!preserve_statement_flags) {
	    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
	      var next_token = this._tokens.peek();
	      while (this._flags.mode === MODE.Statement &&
	        !(this._flags.if_block && reserved_word(next_token, 'else')) &&
	        !this._flags.do_block) {
	        this.restore_mode();
	      }
	    }
	  }

	  if (this._output.add_new_line(force_newline)) {
	    this._flags.multiline_frame = true;
	  }
	};

	Beautifier.prototype.print_token_line_indentation = function(current_token) {
	  if (this._output.just_added_newline()) {
	    if (this._options.keep_array_indentation &&
	      current_token.newlines &&
	      (current_token.text === '[' || is_array(this._flags.mode))) {
	      this._output.current_line.set_indent(-1);
	      this._output.current_line.push(current_token.whitespace_before);
	      this._output.space_before_token = false;
	    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
	      this._flags.line_indent_level = this._flags.indentation_level;
	    }
	  }
	};

	Beautifier.prototype.print_token = function(current_token) {
	  if (this._output.raw) {
	    this._output.add_raw_token(current_token);
	    return;
	  }

	  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA &&
	    this._output.just_added_newline()) {
	    if (this._output.previous_line.last() === ',') {
	      var popped = this._output.previous_line.pop();
	      // if the comma was already at the start of the line,
	      // pull back onto that line and reprint the indentation
	      if (this._output.previous_line.is_empty()) {
	        this._output.previous_line.push(popped);
	        this._output.trim(true);
	        this._output.current_line.pop();
	        this._output.trim();
	      }

	      // add the comma in front of the next token
	      this.print_token_line_indentation(current_token);
	      this._output.add_token(',');
	      this._output.space_before_token = true;
	    }
	  }

	  this.print_token_line_indentation(current_token);
	  this._output.non_breaking_space = true;
	  this._output.add_token(current_token.text);
	  if (this._output.previous_token_wrapped) {
	    this._flags.multiline_frame = true;
	  }
	};

	Beautifier.prototype.indent = function() {
	  this._flags.indentation_level += 1;
	  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	};

	Beautifier.prototype.deindent = function() {
	  if (this._flags.indentation_level > 0 &&
	    ((!this._flags.parent) || this._flags.indentation_level > this._flags.parent.indentation_level)) {
	    this._flags.indentation_level -= 1;
	    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	  }
	};

	Beautifier.prototype.set_mode = function(mode) {
	  if (this._flags) {
	    this._flag_store.push(this._flags);
	    this._previous_flags = this._flags;
	  } else {
	    this._previous_flags = this.create_flags(null, mode);
	  }

	  this._flags = this.create_flags(this._previous_flags, mode);
	  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	};


	Beautifier.prototype.restore_mode = function() {
	  if (this._flag_store.length > 0) {
	    this._previous_flags = this._flags;
	    this._flags = this._flag_store.pop();
	    if (this._previous_flags.mode === MODE.Statement) {
	      remove_redundant_indentation(this._output, this._previous_flags);
	    }
	    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	  }
	};

	Beautifier.prototype.start_of_object_property = function() {
	  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (
	    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || (reserved_array(this._flags.last_token, ['get', 'set'])));
	};

	Beautifier.prototype.start_of_statement = function(current_token) {
	  var start = false;
	  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD;
	  start = start || reserved_word(this._flags.last_token, 'do');
	  start = start || (!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement)) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
	  start = start || reserved_word(this._flags.last_token, 'else') &&
	    !(reserved_word(current_token, 'if') && !current_token.comments_before);
	  start = start || (this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional));
	  start = start || (this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement &&
	    !this._flags.in_case &&
	    !(current_token.text === '--' || current_token.text === '++') &&
	    this._last_last_text !== 'function' &&
	    current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED);
	  start = start || (this._flags.mode === MODE.ObjectLiteral && (
	    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || reserved_array(this._flags.last_token, ['get', 'set'])));

	  if (start) {
	    this.set_mode(MODE.Statement);
	    this.indent();

	    this.handle_whitespace_and_comments(current_token, true);

	    // Issue #276:
	    // If starting a new statement with [if, for, while, do], push to a new line.
	    // if (a) if (b) if(c) d(); else e(); else f();
	    if (!this.start_of_object_property()) {
	      this.allow_wrap_or_preserved_newline(current_token,
	        reserved_array(current_token, ['do', 'for', 'if', 'while']));
	    }
	    return true;
	  }
	  return false;
	};

	Beautifier.prototype.handle_start_expr = function(current_token) {
	  // The conditional starts the statement if appropriate.
	  if (!this.start_of_statement(current_token)) {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  var next_mode = MODE.Expression;
	  if (current_token.text === '[') {

	    if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
	      // this is array index specifier, break immediately
	      // a[x], fn()[x]
	      if (reserved_array(this._flags.last_token, line_starters)) {
	        this._output.space_before_token = true;
	      }
	      this.print_token(current_token);
	      this.set_mode(next_mode);
	      this.indent();
	      if (this._options.space_in_paren) {
	        this._output.space_before_token = true;
	      }
	      return;
	    }

	    next_mode = MODE.ArrayLiteral;
	    if (is_array(this._flags.mode)) {
	      if (this._flags.last_token.text === '[' ||
	        (this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}'))) {
	        // ], [ goes to new line
	        // }, [ goes to new line
	        if (!this._options.keep_array_indentation) {
	          this.print_newline();
	        }
	      }
	    }

	    if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
	      this._output.space_before_token = true;
	    }
	  } else {
	    if (this._flags.last_token.type === TOKEN.RESERVED) {
	      if (this._flags.last_token.text === 'for') {
	        this._output.space_before_token = this._options.space_before_conditional;
	        next_mode = MODE.ForInitializer;
	      } else if (in_array(this._flags.last_token.text, ['if', 'while', 'switch'])) {
	        this._output.space_before_token = this._options.space_before_conditional;
	        next_mode = MODE.Conditional;
	      } else if (in_array(this._flags.last_word, ['await', 'async'])) {
	        // Should be a space between await and an IIFE, or async and an arrow function
	        this._output.space_before_token = true;
	      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
	        this._output.space_before_token = false;
	      } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === 'catch') {
	        this._output.space_before_token = true;
	      }
	    } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	      // Support of this kind of newline preservation.
	      // a = (b &&
	      //     (c || d));
	      if (!this.start_of_object_property()) {
	        this.allow_wrap_or_preserved_newline(current_token);
	      }
	    } else if (this._flags.last_token.type === TOKEN.WORD) {
	      this._output.space_before_token = false;

	      // function name() vs function name ()
	      // function* name() vs function* name ()
	      // async name() vs async name ()
	      // In ES6, you can also define the method properties of an object
	      // var obj = {a: function() {}}
	      // It can be abbreviated
	      // var obj = {a() {}}
	      // var obj = { a() {}} vs var obj = { a () {}}
	      // var obj = { * a() {}} vs var obj = { * a () {}}
	      var peek_back_two = this._tokens.peek(-3);
	      if (this._options.space_after_named_function && peek_back_two) {
	        // peek starts at next character so -1 is current token
	        var peek_back_three = this._tokens.peek(-4);
	        if (reserved_array(peek_back_two, ['async', 'function']) ||
	          (peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))) {
	          this._output.space_before_token = true;
	        } else if (this._flags.mode === MODE.ObjectLiteral) {
	          if ((peek_back_two.text === '{' || peek_back_two.text === ',') ||
	            (peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ','))) {
	            this._output.space_before_token = true;
	          }
	        } else if (this._flags.parent && this._flags.parent.class_start_block) {
	          this._output.space_before_token = true;
	        }
	      }
	    } else {
	      // Support preserving wrapped arrow function expressions
	      // a.b('c',
	      //     () => d.e
	      // )
	      this.allow_wrap_or_preserved_newline(current_token);
	    }

	    // function() vs function ()
	    // yield*() vs yield* ()
	    // function*() vs function* ()
	    if ((this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
	      (this._flags.last_token.text === '*' &&
	        (in_array(this._last_last_text, ['function', 'yield']) ||
	          (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
	      this._output.space_before_token = this._options.space_after_anon_function;
	    }
	  }

	  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
	    this.print_newline();
	  } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN.COMMA) {
	    // do nothing on (( and )( and ][ and ]( and .(
	    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
	    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
	  }

	  this.print_token(current_token);
	  this.set_mode(next_mode);
	  if (this._options.space_in_paren) {
	    this._output.space_before_token = true;
	  }

	  // In all cases, if we newline while inside an expression it should be indented.
	  this.indent();
	};

	Beautifier.prototype.handle_end_expr = function(current_token) {
	  // statements inside expressions are not valid syntax, but...
	  // statements must all be closed when their container closes
	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }

	  this.handle_whitespace_and_comments(current_token);

	  if (this._flags.multiline_frame) {
	    this.allow_wrap_or_preserved_newline(current_token,
	      current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
	  }

	  if (this._options.space_in_paren) {
	    if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
	      // () [] no inner space in empty parens like these, ever, ref #320
	      this._output.trim();
	      this._output.space_before_token = false;
	    } else {
	      this._output.space_before_token = true;
	    }
	  }
	  this.deindent();
	  this.print_token(current_token);
	  this.restore_mode();

	  remove_redundant_indentation(this._output, this._previous_flags);

	  // do {} while () // no statement required after
	  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
	    this._previous_flags.mode = MODE.Expression;
	    this._flags.do_block = false;
	    this._flags.do_while = false;

	  }
	};

	Beautifier.prototype.handle_start_block = function(current_token) {
	  this.handle_whitespace_and_comments(current_token);

	  // Check if this is should be treated as a ObjectLiteral
	  var next_token = this._tokens.peek();
	  var second_token = this._tokens.peek(1);
	  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
	    this.set_mode(MODE.BlockStatement);
	    this._flags.in_case_statement = true;
	  } else if (this._flags.case_body) {
	    this.set_mode(MODE.BlockStatement);
	  } else if (second_token && (
	      (in_array(second_token.text, [':', ',']) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED])) ||
	      (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))
	    )) {
	    // We don't support TypeScript,but we didn't break it for a very long time.
	    // We'll try to keep not breaking it.
	    if (in_array(this._last_last_text, ['class', 'interface']) && !in_array(second_token.text, [':', ','])) {
	      this.set_mode(MODE.BlockStatement);
	    } else {
	      this.set_mode(MODE.ObjectLiteral);
	    }
	  } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === '=>') {
	    // arrow function: (param1, paramN) => { statements }
	    this.set_mode(MODE.BlockStatement);
	  } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) ||
	    reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
	  ) {
	    // Detecting shorthand function syntax is difficult by scanning forward,
	    //     so check the surrounding context.
	    // If the block is being returned, imported, export default, passed as arg,
	    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
	    this.set_mode(MODE.ObjectLiteral);
	  } else {
	    this.set_mode(MODE.BlockStatement);
	  }

	  if (this._flags.last_token) {
	    if (reserved_array(this._flags.last_token.previous, ['class', 'extends'])) {
	      this._flags.class_start_block = true;
	    }
	  }

	  var empty_braces = !next_token.comments_before && next_token.text === '}';
	  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' &&
	    this._flags.last_token.type === TOKEN.END_EXPR;

	  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
	  {
	    // search forward for a newline wanted inside this block
	    var index = 0;
	    var check_token = null;
	    this._flags.inline_frame = true;
	    do {
	      index += 1;
	      check_token = this._tokens.peek(index - 1);
	      if (check_token.newlines) {
	        this._flags.inline_frame = false;
	        break;
	      }
	    } while (check_token.type !== TOKEN.EOF &&
	      !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
	  }

	  if ((this._options.brace_style === "expand" ||
	      (this._options.brace_style === "none" && current_token.newlines)) &&
	    !this._flags.inline_frame) {
	    if (this._flags.last_token.type !== TOKEN.OPERATOR &&
	      (empty_anonymous_function ||
	        this._flags.last_token.type === TOKEN.EQUALS ||
	        (reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else'))) {
	      this._output.space_before_token = true;
	    } else {
	      this.print_newline(false, true);
	    }
	  } else { // collapse || inline_frame
	    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
	      if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
	        this._output.space_before_token = true;
	      }

	      if (this._flags.last_token.type === TOKEN.COMMA || (this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame)) {
	        this.allow_wrap_or_preserved_newline(current_token);
	        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
	        this._flags.multiline_frame = false;
	      }
	    }
	    if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
	      if (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.SEMICOLON]) && !this._flags.inline_frame) {
	        this.print_newline();
	      } else {
	        this._output.space_before_token = true;
	      }
	    }
	  }
	  this.print_token(current_token);
	  this.indent();

	  // Except for specific cases, open braces are followed by a new line.
	  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
	    this.print_newline();
	  }
	};

	Beautifier.prototype.handle_end_block = function(current_token) {
	  // statements must all be closed when their container closes
	  this.handle_whitespace_and_comments(current_token);

	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }

	  var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

	  if (this._flags.inline_frame && !empty_braces) { // try inline_frame (only set if this._options.braces-preserve-inline) first
	    this._output.space_before_token = true;
	  } else if (this._options.brace_style === "expand") {
	    if (!empty_braces) {
	      this.print_newline();
	    }
	  } else {
	    // skip {}
	    if (!empty_braces) {
	      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
	        // we REALLY need a newline here, but newliner would skip that
	        this._options.keep_array_indentation = false;
	        this.print_newline();
	        this._options.keep_array_indentation = true;

	      } else {
	        this.print_newline();
	      }
	    }
	  }
	  this.restore_mode();
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_word = function(current_token) {
	  if (current_token.type === TOKEN.RESERVED) {
	    if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
	      current_token.type = TOKEN.WORD;
	    } else if (current_token.text === 'import' && in_array(this._tokens.peek().text, ['(', '.'])) {
	      current_token.type = TOKEN.WORD;
	    } else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
	      current_token.type = TOKEN.WORD;
	    } else if (this._flags.mode === MODE.ObjectLiteral) {
	      var next_token = this._tokens.peek();
	      if (next_token.text === ':') {
	        current_token.type = TOKEN.WORD;
	      }
	    }
	  }

	  if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD) {
	      this._flags.declaration_statement = true;
	    }
	  } else if (current_token.newlines && !is_expression(this._flags.mode) &&
	    (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) &&
	    this._flags.last_token.type !== TOKEN.EQUALS &&
	    (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
	    this.handle_whitespace_and_comments(current_token);
	    this.print_newline();
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  if (this._flags.do_block && !this._flags.do_while) {
	    if (reserved_word(current_token, 'while')) {
	      // do {} ## while ()
	      this._output.space_before_token = true;
	      this.print_token(current_token);
	      this._output.space_before_token = true;
	      this._flags.do_while = true;
	      return;
	    } else {
	      // do {} should always have while as the next word.
	      // if we don't see the expected while, recover
	      this.print_newline();
	      this._flags.do_block = false;
	    }
	  }

	  // if may be followed by else, or not
	  // Bare/inline ifs are tricky
	  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
	  if (this._flags.if_block) {
	    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
	      this._flags.else_block = true;
	    } else {
	      while (this._flags.mode === MODE.Statement) {
	        this.restore_mode();
	      }
	      this._flags.if_block = false;
	      this._flags.else_block = false;
	    }
	  }

	  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
	    this.print_newline();
	    if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
	      // switch cases following one another
	      this.deindent();
	    }
	    this._flags.case_body = false;

	    this.print_token(current_token);
	    this._flags.in_case = true;
	    return;
	  }

	  if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	    if (!this.start_of_object_property() && !(
	        // start of object property is different for numeric values with +/- prefix operators
	        in_array(this._flags.last_token.text, ['+', '-']) && this._last_last_text === ':' && this._flags.parent.mode === MODE.ObjectLiteral)) {
	      this.allow_wrap_or_preserved_newline(current_token);
	    }
	  }

	  if (reserved_word(current_token, 'function')) {
	    if (in_array(this._flags.last_token.text, ['}', ';']) ||
	      (this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN.OPERATOR))) {
	      // make sure there is a nice clean space of at least one blank line
	      // before a new function definition
	      if (!this._output.just_added_blankline() && !current_token.comments_before) {
	        this.print_newline();
	        this.print_newline(true);
	      }
	    }
	    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
	      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
	        reserved_array(this._flags.last_token, newline_restricted_tokens)) {
	        this._output.space_before_token = true;
	      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
	        this._output.space_before_token = true;
	      } else if (this._flags.last_token.text === 'declare') {
	        // accomodates Typescript declare function formatting
	        this._output.space_before_token = true;
	      } else {
	        this.print_newline();
	      }
	    } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === '=') {
	      // foo = function
	      this._output.space_before_token = true;
	    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) ; else {
	      this.print_newline();
	    }

	    this.print_token(current_token);
	    this._flags.last_word = current_token.text;
	    return;
	  }

	  var prefix = 'NONE';

	  if (this._flags.last_token.type === TOKEN.END_BLOCK) {

	    if (this._previous_flags.inline_frame) {
	      prefix = 'SPACE';
	    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
	      prefix = 'NEWLINE';
	    } else {
	      if (this._options.brace_style === "expand" ||
	        this._options.brace_style === "end-expand" ||
	        (this._options.brace_style === "none" && current_token.newlines)) {
	        prefix = 'NEWLINE';
	      } else {
	        prefix = 'SPACE';
	        this._output.space_before_token = true;
	      }
	    }
	  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
	    // TODO: Should this be for STATEMENT as well?
	    prefix = 'NEWLINE';
	  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
	    prefix = 'SPACE';
	  } else if (this._flags.last_token.type === TOKEN.STRING) {
	    prefix = 'NEWLINE';
	  } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD ||
	    (this._flags.last_token.text === '*' &&
	      (in_array(this._last_last_text, ['function', 'yield']) ||
	        (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
	    prefix = 'SPACE';
	  } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
	    if (this._flags.inline_frame) {
	      prefix = 'SPACE';
	    } else {
	      prefix = 'NEWLINE';
	    }
	  } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
	    this._output.space_before_token = true;
	    prefix = 'NEWLINE';
	  }

	  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
	    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
	      prefix = 'SPACE';
	    } else {
	      prefix = 'NEWLINE';
	    }

	  }

	  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
	    if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) ||
	        this._options.brace_style === "expand" ||
	        this._options.brace_style === "end-expand" ||
	        (this._options.brace_style === "none" && current_token.newlines)) &&
	      !this._flags.inline_frame) {
	      this.print_newline();
	    } else {
	      this._output.trim(true);
	      var line = this._output.current_line;
	      // If we trimmed and there's something other than a close block before us
	      // put a newline back in.  Handles '} // comment' scenario.
	      if (line.last() !== '}') {
	        this.print_newline();
	      }
	      this._output.space_before_token = true;
	    }
	  } else if (prefix === 'NEWLINE') {
	    if (reserved_array(this._flags.last_token, special_words)) {
	      // no newline between 'return nnn'
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
	      // accomodates Typescript declare formatting
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
	      if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
	        // no need to force newline on 'var': for (var x = 0...)
	        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
	          // no newline for } else if {
	          this._output.space_before_token = true;
	        } else {
	          this.print_newline();
	        }
	      }
	    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
	      this.print_newline();
	    }
	  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
	    this.print_newline(); // }, in lists get a newline treatment
	  } else if (prefix === 'SPACE') {
	    this._output.space_before_token = true;
	  }
	  if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
	    this._output.space_before_token = true;
	  }
	  this.print_token(current_token);
	  this._flags.last_word = current_token.text;

	  if (current_token.type === TOKEN.RESERVED) {
	    if (current_token.text === 'do') {
	      this._flags.do_block = true;
	    } else if (current_token.text === 'if') {
	      this._flags.if_block = true;
	    } else if (current_token.text === 'import') {
	      this._flags.import_block = true;
	    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
	      this._flags.import_block = false;
	    }
	  }
	};

	Beautifier.prototype.handle_semicolon = function(current_token) {
	  if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    // Semicolon can be the start (and end) of a statement
	    this._output.space_before_token = false;
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  var next_token = this._tokens.peek();
	  while (this._flags.mode === MODE.Statement &&
	    !(this._flags.if_block && reserved_word(next_token, 'else')) &&
	    !this._flags.do_block) {
	    this.restore_mode();
	  }

	  // hacky but effective for the moment
	  if (this._flags.import_block) {
	    this._flags.import_block = false;
	  }
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_string = function(current_token) {
	  if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === '' && (current_token.previous.text === ')' || this._flags.last_token.type === TOKEN.WORD)) ; else if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    // One difference - strings want at least a space before
	    this._output.space_before_token = true;
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	      if (!this.start_of_object_property()) {
	        this.allow_wrap_or_preserved_newline(current_token);
	      }
	    } else if ((current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === ']' || current_token.previous.text === ')') && current_token.newlines === 0)) {
	      this._output.space_before_token = true;
	    } else {
	      this.print_newline();
	    }
	  }
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_equals = function(current_token) {
	  if (this.start_of_statement(current_token)) ; else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  if (this._flags.declaration_statement) {
	    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
	    this._flags.declaration_assignment = true;
	  }
	  this._output.space_before_token = true;
	  this.print_token(current_token);
	  this._output.space_before_token = true;
	};

	Beautifier.prototype.handle_comma = function(current_token) {
	  this.handle_whitespace_and_comments(current_token, true);

	  this.print_token(current_token);
	  this._output.space_before_token = true;
	  if (this._flags.declaration_statement) {
	    if (is_expression(this._flags.parent.mode)) {
	      // do not break on comma, for(var a = 1, b = 2)
	      this._flags.declaration_assignment = false;
	    }

	    if (this._flags.declaration_assignment) {
	      this._flags.declaration_assignment = false;
	      this.print_newline(false, true);
	    } else if (this._options.comma_first) {
	      // for comma-first, we want to allow a newline before the comma
	      // to turn into a newline after the comma, which we will fixup later
	      this.allow_wrap_or_preserved_newline(current_token);
	    }
	  } else if (this._flags.mode === MODE.ObjectLiteral ||
	    (this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)) {
	    if (this._flags.mode === MODE.Statement) {
	      this.restore_mode();
	    }

	    if (!this._flags.inline_frame) {
	      this.print_newline();
	    }
	  } else if (this._options.comma_first) {
	    // EXPR or DO_BLOCK
	    // for comma-first, we want to allow a newline before the comma
	    // to turn into a newline after the comma, which we will fixup later
	    this.allow_wrap_or_preserved_newline(current_token);
	  }
	};

	Beautifier.prototype.handle_operator = function(current_token) {
	  var isGeneratorAsterisk = current_token.text === '*' &&
	    (reserved_array(this._flags.last_token, ['function', 'yield']) ||
	      (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]))
	    );
	  var isUnary = in_array(current_token.text, ['-', '+']) && (
	    in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) ||
	    in_array(this._flags.last_token.text, line_starters) ||
	    this._flags.last_token.text === ','
	  );

	  if (this.start_of_statement(current_token)) ; else {
	    var preserve_statement_flags = !isGeneratorAsterisk;
	    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
	  }

	  // hack for actionscript's import .*;
	  if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
	    this.print_token(current_token);
	    return;
	  }

	  if (current_token.text === '::') {
	    // no spaces around exotic namespacing syntax operator
	    this.print_token(current_token);
	    return;
	  }

	  if (in_array(current_token.text, ['-', '+']) && this.start_of_object_property()) {
	    // numeric value with +/- symbol in front as a property
	    this.print_token(current_token);
	    return;
	  }

	  // Allow line wrapping between operators when operator_position is
	  //   set to before or preserve
	  if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
	    this.allow_wrap_or_preserved_newline(current_token);
	  }

	  if (current_token.text === ':' && this._flags.in_case) {
	    this.print_token(current_token);

	    this._flags.in_case = false;
	    this._flags.case_body = true;
	    if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
	      this.indent();
	      this.print_newline();
	      this._flags.case_block = false;
	    } else {
	      this._flags.case_block = true;
	      this._output.space_before_token = true;
	    }
	    return;
	  }

	  var space_before = true;
	  var space_after = true;
	  var in_ternary = false;
	  if (current_token.text === ':') {
	    if (this._flags.ternary_depth === 0) {
	      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
	      space_before = false;
	    } else {
	      this._flags.ternary_depth -= 1;
	      in_ternary = true;
	    }
	  } else if (current_token.text === '?') {
	    this._flags.ternary_depth += 1;
	  }

	  // let's handle the operator_position option prior to any conflicting logic
	  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
	    var isColon = current_token.text === ':';
	    var isTernaryColon = (isColon && in_ternary);
	    var isOtherColon = (isColon && !in_ternary);

	    switch (this._options.operator_position) {
	      case OPERATOR_POSITION.before_newline:
	        // if the current token is : and it's not a ternary statement then we set space_before to false
	        this._output.space_before_token = !isOtherColon;

	        this.print_token(current_token);

	        if (!isColon || isTernaryColon) {
	          this.allow_wrap_or_preserved_newline(current_token);
	        }

	        this._output.space_before_token = true;
	        return;

	      case OPERATOR_POSITION.after_newline:
	        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
	        //   then print a newline.

	        this._output.space_before_token = true;

	        if (!isColon || isTernaryColon) {
	          if (this._tokens.peek().newlines) {
	            this.print_newline(false, true);
	          } else {
	            this.allow_wrap_or_preserved_newline(current_token);
	          }
	        } else {
	          this._output.space_before_token = false;
	        }

	        this.print_token(current_token);

	        this._output.space_before_token = true;
	        return;

	      case OPERATOR_POSITION.preserve_newline:
	        if (!isOtherColon) {
	          this.allow_wrap_or_preserved_newline(current_token);
	        }

	        // if we just added a newline, or the current token is : and it's not a ternary statement,
	        //   then we set space_before to false
	        space_before = !(this._output.just_added_newline() || isOtherColon);

	        this._output.space_before_token = space_before;
	        this.print_token(current_token);
	        this._output.space_before_token = true;
	        return;
	    }
	  }

	  if (isGeneratorAsterisk) {
	    this.allow_wrap_or_preserved_newline(current_token);
	    space_before = false;
	    var next_token = this._tokens.peek();
	    space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
	  } else if (current_token.text === '...') {
	    this.allow_wrap_or_preserved_newline(current_token);
	    space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
	    space_after = false;
	  } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
	    // unary operators (and binary +/- pretending to be unary) special cases
	    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
	      this.allow_wrap_or_preserved_newline(current_token);
	    }

	    space_before = false;
	    space_after = false;

	    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
	    // if there is a newline between -- or ++ and anything else we should preserve it.
	    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++' || current_token.text === '~')) {
	      var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
	      if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
	        this.restore_mode();
	      }
	      this.print_newline(new_line_needed, true);
	    }

	    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
	      // for (;; ++i)
	      //        ^^^
	      space_before = true;
	    }

	    if (this._flags.last_token.type === TOKEN.RESERVED) {
	      space_before = true;
	    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
	      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
	    } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
	      // a++ + ++b;
	      // a - -b
	      space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(this._flags.last_token.text, ['--', '-', '++', '+']);
	      // + and - are not unary when preceeded by -- or ++ operator
	      // a-- + b
	      // a * +b
	      // a - -b
	      if (in_array(current_token.text, ['+', '-']) && in_array(this._flags.last_token.text, ['--', '++'])) {
	        space_after = true;
	      }
	    }


	    if (((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) || this._flags.mode === MODE.Statement) &&
	      (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
	      // { foo; --i }
	      // foo(); --bar;
	      this.print_newline();
	    }
	  }

	  this._output.space_before_token = this._output.space_before_token || space_before;
	  this.print_token(current_token);
	  this._output.space_before_token = space_after;
	};

	Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
	  if (this._output.raw) {
	    this._output.add_raw_token(current_token);
	    if (current_token.directives && current_token.directives.preserve === 'end') {
	      // If we're testing the raw output behavior, do not allow a directive to turn it off.
	      this._output.raw = this._options.test_output_raw;
	    }
	    return;
	  }

	  if (current_token.directives) {
	    this.print_newline(false, preserve_statement_flags);
	    this.print_token(current_token);
	    if (current_token.directives.preserve === 'start') {
	      this._output.raw = true;
	    }
	    this.print_newline(false, true);
	    return;
	  }

	  // inline block
	  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
	    this._output.space_before_token = true;
	    this.print_token(current_token);
	    this._output.space_before_token = true;
	    return;
	  } else {
	    this.print_block_commment(current_token, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
	  var lines = split_linebreaks(current_token.text);
	  var j; // iterator for this case
	  var javadoc = false;
	  var starless = false;
	  var lastIndent = current_token.whitespace_before;
	  var lastIndentLength = lastIndent.length;

	  // block comment starts with a new line
	  this.print_newline(false, preserve_statement_flags);

	  // first line always indented
	  this.print_token_line_indentation(current_token);
	  this._output.add_token(lines[0]);
	  this.print_newline(false, preserve_statement_flags);


	  if (lines.length > 1) {
	    lines = lines.slice(1);
	    javadoc = all_lines_start_with(lines, '*');
	    starless = each_line_matches_indent(lines, lastIndent);

	    if (javadoc) {
	      this._flags.alignment = 1;
	    }

	    for (j = 0; j < lines.length; j++) {
	      if (javadoc) {
	        // javadoc: reformat and re-indent
	        this.print_token_line_indentation(current_token);
	        this._output.add_token(ltrim(lines[j]));
	      } else if (starless && lines[j]) {
	        // starless: re-indent non-empty content, avoiding trim
	        this.print_token_line_indentation(current_token);
	        this._output.add_token(lines[j].substring(lastIndentLength));
	      } else {
	        // normal comments output raw
	        this._output.current_line.set_indent(-1);
	        this._output.add_token(lines[j]);
	      }

	      // for comments on their own line or  more than one line, make sure there's a new line after
	      this.print_newline(false, preserve_statement_flags);
	    }

	    this._flags.alignment = 0;
	  }
	};


	Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
	  if (current_token.newlines) {
	    this.print_newline(false, preserve_statement_flags);
	  } else {
	    this._output.trim(true);
	  }

	  this._output.space_before_token = true;
	  this.print_token(current_token);
	  this.print_newline(false, preserve_statement_flags);
	};

	Beautifier.prototype.handle_dot = function(current_token) {
	  if (this.start_of_statement(current_token)) ; else {
	    this.handle_whitespace_and_comments(current_token, true);
	  }

	  if (this._flags.last_token.text.match('^[0-9]+$')) {
	    this._output.space_before_token = true;
	  }

	  if (reserved_array(this._flags.last_token, special_words)) {
	    this._output.space_before_token = false;
	  } else {
	    // allow preserved newlines before dots in general
	    // force newlines on dots after close paren when break_chained - for bar().baz()
	    this.allow_wrap_or_preserved_newline(current_token,
	      this._flags.last_token.text === ')' && this._options.break_chained_methods);
	  }

	  // Only unindent chained method dot if this dot starts a new line.
	  // Otherwise the automatic extra indentation removal will handle the over indent
	  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
	    this.deindent();
	  }

	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
	  this.print_token(current_token);

	  if (current_token.text[current_token.text.length - 1] === '\n') {
	    this.print_newline(false, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.handle_eof = function(current_token) {
	  // Unwind any open statements
	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }
	  this.handle_whitespace_and_comments(current_token);
	};

	beautifier$2.Beautifier = Beautifier;
	return beautifier$2;
}

/*jshint node:true */

var hasRequiredJavascript;

function requireJavascript () {
	if (hasRequiredJavascript) return javascript.exports;
	hasRequiredJavascript = 1;

	var Beautifier = requireBeautifier$2().Beautifier,
	  Options = requireOptions$2().Options;

	function js_beautify(js_source_text, options) {
	  var beautifier = new Beautifier(js_source_text, options);
	  return beautifier.beautify();
	}

	javascript.exports = js_beautify;
	javascript.exports.defaultOptions = function() {
	  return new Options();
	};
	return javascript.exports;
}

var css = {exports: {}};

var beautifier$1 = {};

var options$1 = {};

/*jshint node:true */

var hasRequiredOptions$1;

function requireOptions$1 () {
	if (hasRequiredOptions$1) return options$1;
	hasRequiredOptions$1 = 1;

	var BaseOptions = requireOptions$3().Options;

	function Options(options) {
	  BaseOptions.call(this, options, 'css');

	  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
	  this.newline_between_rules = this._get_boolean('newline_between_rules', true);
	  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');
	  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;

	  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);
	  this.brace_style = 'collapse';
	  for (var bs = 0; bs < brace_style_split.length; bs++) {
	    if (brace_style_split[bs] !== 'expand') {
	      // default to collapse, as only collapse|expand is implemented for now
	      this.brace_style = 'collapse';
	    } else {
	      this.brace_style = brace_style_split[bs];
	    }
	  }
	}
	Options.prototype = new BaseOptions();



	options$1.Options = Options;
	return options$1;
}

/*jshint node:true */

var hasRequiredBeautifier$1;

function requireBeautifier$1 () {
	if (hasRequiredBeautifier$1) return beautifier$1;
	hasRequiredBeautifier$1 = 1;

	var Options = requireOptions$1().Options;
	var Output = requireOutput().Output;
	var InputScanner = requireInputscanner().InputScanner;
	var Directives = requireDirectives().Directives;

	var directives_core = new Directives(/\/\*/, /\*\//);

	var lineBreak = /\r\n|[\r\n]/;
	var allLineBreaks = /\r\n|[\r\n]/g;

	// tokenizer
	var whitespaceChar = /\s/;
	var whitespacePattern = /(?:\s|\n)+/g;
	var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
	var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

	function Beautifier(source_text, options) {
	  this._source_text = source_text || '';
	  // Allow the setting of language/file-type specific options
	  // with inheritance of overall settings
	  this._options = new Options(options);
	  this._ch = null;
	  this._input = null;

	  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	  this.NESTED_AT_RULE = {
	    "page": true,
	    "font-face": true,
	    "keyframes": true,
	    // also in CONDITIONAL_GROUP_RULE below
	    "media": true,
	    "supports": true,
	    "document": true
	  };
	  this.CONDITIONAL_GROUP_RULE = {
	    "media": true,
	    "supports": true,
	    "document": true
	  };
	  this.NON_SEMICOLON_NEWLINE_PROPERTY = [
	    "grid-template-areas",
	    "grid-template"
	  ];

	}

	Beautifier.prototype.eatString = function(endChars) {
	  var result = '';
	  this._ch = this._input.next();
	  while (this._ch) {
	    result += this._ch;
	    if (this._ch === "\\") {
	      result += this._input.next();
	    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
	      break;
	    }
	    this._ch = this._input.next();
	  }
	  return result;
	};

	// Skips any white space in the source text from the current position.
	// When allowAtLeastOneNewLine is true, will output new lines for each
	// newline character found; if the user has preserve_newlines off, only
	// the first newline will be output
	Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
	  var result = whitespaceChar.test(this._input.peek());
	  var newline_count = 0;
	  while (whitespaceChar.test(this._input.peek())) {
	    this._ch = this._input.next();
	    if (allowAtLeastOneNewLine && this._ch === '\n') {
	      if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
	        newline_count++;
	        this._output.add_new_line(true);
	      }
	    }
	  }
	  return result;
	};

	// Nested pseudo-class if we are insideRule
	// and the next special character found opens
	// a new block
	Beautifier.prototype.foundNestedPseudoClass = function() {
	  var openParen = 0;
	  var i = 1;
	  var ch = this._input.peek(i);
	  while (ch) {
	    if (ch === "{") {
	      return true;
	    } else if (ch === '(') {
	      // pseudoclasses can contain ()
	      openParen += 1;
	    } else if (ch === ')') {
	      if (openParen === 0) {
	        return false;
	      }
	      openParen -= 1;
	    } else if (ch === ";" || ch === "}") {
	      return false;
	    }
	    i++;
	    ch = this._input.peek(i);
	  }
	  return false;
	};

	Beautifier.prototype.print_string = function(output_string) {
	  this._output.set_indent(this._indentLevel);
	  this._output.non_breaking_space = true;
	  this._output.add_token(output_string);
	};

	Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
	  if (isAfterSpace) {
	    this._output.space_before_token = true;
	  }
	};

	Beautifier.prototype.indent = function() {
	  this._indentLevel++;
	};

	Beautifier.prototype.outdent = function() {
	  if (this._indentLevel > 0) {
	    this._indentLevel--;
	  }
	};

	/*_____________________--------------------_____________________*/

	Beautifier.prototype.beautify = function() {
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var source_text = this._source_text;
	  var eol = this._options.eol;
	  if (eol === 'auto') {
	    eol = '\n';
	    if (source_text && lineBreak.test(source_text || '')) {
	      eol = source_text.match(lineBreak)[0];
	    }
	  }


	  // HACK: newline parsing inconsistent. This brute force normalizes the this._input.
	  source_text = source_text.replace(allLineBreaks, '\n');

	  // reset
	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  this._output = new Output(this._options, baseIndentString);
	  this._input = new InputScanner(source_text);
	  this._indentLevel = 0;
	  this._nestedLevel = 0;

	  this._ch = null;
	  var parenLevel = 0;

	  var insideRule = false;
	  // This is the value side of a property value pair (blue in the following ex)
	  // label { content: blue }
	  var insidePropertyValue = false;
	  var enteringConditionalGroup = false;
	  var insideNonNestedAtRule = false;
	  var insideScssMap = false;
	  var topCharacter = this._ch;
	  var insideNonSemiColonValues = false;
	  var whitespace;
	  var isAfterSpace;
	  var previous_ch;

	  while (true) {
	    whitespace = this._input.read(whitespacePattern);
	    isAfterSpace = whitespace !== '';
	    previous_ch = topCharacter;
	    this._ch = this._input.next();
	    if (this._ch === '\\' && this._input.hasNext()) {
	      this._ch += this._input.next();
	    }
	    topCharacter = this._ch;

	    if (!this._ch) {
	      break;
	    } else if (this._ch === '/' && this._input.peek() === '*') {
	      // /* css comment */
	      // Always start block comments on a new line.
	      // This handles scenarios where a block comment immediately
	      // follows a property definition on the same line or where
	      // minified code is being beautified.
	      this._output.add_new_line();
	      this._input.back();

	      var comment = this._input.read(block_comment_pattern);

	      // Handle ignore directive
	      var directives = directives_core.get_directives(comment);
	      if (directives && directives.ignore === 'start') {
	        comment += directives_core.readIgnored(this._input);
	      }

	      this.print_string(comment);

	      // Ensures any new lines following the comment are preserved
	      this.eatWhitespace(true);

	      // Block comments are followed by a new line so they don't
	      // share a line with other properties
	      this._output.add_new_line();
	    } else if (this._ch === '/' && this._input.peek() === '/') {
	      // // single line comment
	      // Preserves the space before a comment
	      // on the same line as a rule
	      this._output.space_before_token = true;
	      this._input.back();
	      this.print_string(this._input.read(comment_pattern));

	      // Ensures any new lines following the comment are preserved
	      this.eatWhitespace(true);
	    } else if (this._ch === '$') {
	      this.preserveSingleSpace(isAfterSpace);

	      this.print_string(this._ch);

	      // strip trailing space, if present, for hash property checks
	      var variable = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

	      if (variable.match(/[ :]$/)) {
	        // we have a variable or pseudo-class, add it and insert one space before continuing
	        variable = this.eatString(": ").replace(/\s+$/, '');
	        this.print_string(variable);
	        this._output.space_before_token = true;
	      }

	      // might be sass variable
	      if (parenLevel === 0 && variable.indexOf(':') !== -1) {
	        insidePropertyValue = true;
	        this.indent();
	      }
	    } else if (this._ch === '@') {
	      this.preserveSingleSpace(isAfterSpace);

	      // deal with less property mixins @{...}
	      if (this._input.peek() === '{') {
	        this.print_string(this._ch + this.eatString('}'));
	      } else {
	        this.print_string(this._ch);

	        // strip trailing space, if present, for hash property checks
	        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

	        if (variableOrRule.match(/[ :]$/)) {
	          // we have a variable or pseudo-class, add it and insert one space before continuing
	          variableOrRule = this.eatString(": ").replace(/\s+$/, '');
	          this.print_string(variableOrRule);
	          this._output.space_before_token = true;
	        }

	        // might be less variable
	        if (parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
	          insidePropertyValue = true;
	          this.indent();

	          // might be a nesting at-rule
	        } else if (variableOrRule in this.NESTED_AT_RULE) {
	          this._nestedLevel += 1;
	          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
	            enteringConditionalGroup = true;
	          }

	          // might be a non-nested at-rule
	        } else if (parenLevel === 0 && !insidePropertyValue) {
	          insideNonNestedAtRule = true;
	        }
	      }
	    } else if (this._ch === '#' && this._input.peek() === '{') {
	      this.preserveSingleSpace(isAfterSpace);
	      this.print_string(this._ch + this.eatString('}'));
	    } else if (this._ch === '{') {
	      if (insidePropertyValue) {
	        insidePropertyValue = false;
	        this.outdent();
	      }

	      // non nested at rule becomes nested
	      insideNonNestedAtRule = false;

	      // when entering conditional groups, only rulesets are allowed
	      if (enteringConditionalGroup) {
	        enteringConditionalGroup = false;
	        insideRule = (this._indentLevel >= this._nestedLevel);
	      } else {
	        // otherwise, declarations are also allowed
	        insideRule = (this._indentLevel >= this._nestedLevel - 1);
	      }
	      if (this._options.newline_between_rules && insideRule) {
	        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
	          this._output.ensure_empty_line_above('/', ',');
	        }
	      }

	      this._output.space_before_token = true;

	      // The difference in print_string and indent order is necessary to indent the '{' correctly
	      if (this._options.brace_style === 'expand') {
	        this._output.add_new_line();
	        this.print_string(this._ch);
	        this.indent();
	        this._output.set_indent(this._indentLevel);
	      } else {
	        // inside mixin and first param is object
	        if (previous_ch === '(') {
	          this._output.space_before_token = false;
	        } else if (previous_ch !== ',') {
	          this.indent();
	        }
	        this.print_string(this._ch);
	      }

	      this.eatWhitespace(true);
	      this._output.add_new_line();
	    } else if (this._ch === '}') {
	      this.outdent();
	      this._output.add_new_line();
	      if (previous_ch === '{') {
	        this._output.trim(true);
	      }

	      if (insidePropertyValue) {
	        this.outdent();
	        insidePropertyValue = false;
	      }
	      this.print_string(this._ch);
	      insideRule = false;
	      if (this._nestedLevel) {
	        this._nestedLevel--;
	      }

	      this.eatWhitespace(true);
	      this._output.add_new_line();

	      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
	        if (this._input.peek() !== '}') {
	          this._output.add_new_line(true);
	        }
	      }
	      if (this._input.peek() === ')') {
	        this._output.trim(true);
	        if (this._options.brace_style === "expand") {
	          this._output.add_new_line(true);
	        }
	      }
	    } else if (this._ch === ":") {

	      for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
	        if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
	          insideNonSemiColonValues = true;
	          break;
	        }
	      }

	      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideNonNestedAtRule && parenLevel === 0) {
	        // 'property: value' delimiter
	        // which could be in a conditional group query

	        this.print_string(':');
	        if (!insidePropertyValue) {
	          insidePropertyValue = true;
	          this._output.space_before_token = true;
	          this.eatWhitespace(true);
	          this.indent();
	        }
	      } else {
	        // sass/less parent reference don't use a space
	        // sass nested pseudo-class don't use a space

	        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
	        if (this._input.lookBack(" ")) {
	          this._output.space_before_token = true;
	        }
	        if (this._input.peek() === ":") {
	          // pseudo-element
	          this._ch = this._input.next();
	          this.print_string("::");
	        } else {
	          // pseudo-class
	          this.print_string(':');
	        }
	      }
	    } else if (this._ch === '"' || this._ch === '\'') {
	      var preserveQuoteSpace = previous_ch === '"' || previous_ch === '\'';
	      this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
	      this.print_string(this._ch + this.eatString(this._ch));
	      this.eatWhitespace(true);
	    } else if (this._ch === ';') {
	      insideNonSemiColonValues = false;
	      if (parenLevel === 0) {
	        if (insidePropertyValue) {
	          this.outdent();
	          insidePropertyValue = false;
	        }
	        insideNonNestedAtRule = false;
	        this.print_string(this._ch);
	        this.eatWhitespace(true);

	        // This maintains single line comments on the same
	        // line. Block comments are also affected, but
	        // a new line is always output before one inside
	        // that section
	        if (this._input.peek() !== '/') {
	          this._output.add_new_line();
	        }
	      } else {
	        this.print_string(this._ch);
	        this.eatWhitespace(true);
	        this._output.space_before_token = true;
	      }
	    } else if (this._ch === '(') { // may be a url
	      if (this._input.lookBack("url")) {
	        this.print_string(this._ch);
	        this.eatWhitespace();
	        parenLevel++;
	        this.indent();
	        this._ch = this._input.next();
	        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
	          this._input.back();
	        } else if (this._ch) {
	          this.print_string(this._ch + this.eatString(')'));
	          if (parenLevel) {
	            parenLevel--;
	            this.outdent();
	          }
	        }
	      } else {
	        var space_needed = false;
	        if (this._input.lookBack("with")) {
	          // look back is not an accurate solution, we need tokens to confirm without whitespaces
	          space_needed = true;
	        }
	        this.preserveSingleSpace(isAfterSpace || space_needed);
	        this.print_string(this._ch);

	        // handle scss/sass map
	        if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
	          this._output.add_new_line();
	          insideScssMap = true;
	        } else {
	          this.eatWhitespace();
	          parenLevel++;
	          this.indent();
	        }
	      }
	    } else if (this._ch === ')') {
	      if (parenLevel) {
	        parenLevel--;
	        this.outdent();
	      }
	      if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
	        insideScssMap = false;
	        this.outdent();
	        this._output.add_new_line();
	      }
	      this.print_string(this._ch);
	    } else if (this._ch === ',') {
	      this.print_string(this._ch);
	      this.eatWhitespace(true);
	      if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideNonNestedAtRule) {
	        this._output.add_new_line();
	      } else {
	        this._output.space_before_token = true;
	      }
	    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel === 0) {
	      //handle combinator spacing
	      if (this._options.space_around_combinator) {
	        this._output.space_before_token = true;
	        this.print_string(this._ch);
	        this._output.space_before_token = true;
	      } else {
	        this.print_string(this._ch);
	        this.eatWhitespace();
	        // squash extra whitespace
	        if (this._ch && whitespaceChar.test(this._ch)) {
	          this._ch = '';
	        }
	      }
	    } else if (this._ch === ']') {
	      this.print_string(this._ch);
	    } else if (this._ch === '[') {
	      this.preserveSingleSpace(isAfterSpace);
	      this.print_string(this._ch);
	    } else if (this._ch === '=') { // no whitespace before or after
	      this.eatWhitespace();
	      this.print_string('=');
	      if (whitespaceChar.test(this._ch)) {
	        this._ch = '';
	      }
	    } else if (this._ch === '!' && !this._input.lookBack("\\")) { // !important
	      this._output.space_before_token = true;
	      this.print_string(this._ch);
	    } else {
	      var preserveAfterSpace = previous_ch === '"' || previous_ch === '\'';
	      this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
	      this.print_string(this._ch);

	      if (!this._output.just_added_newline() && this._input.peek() === '\n' && insideNonSemiColonValues) {
	        this._output.add_new_line();
	      }
	    }
	  }

	  var sweetCode = this._output.get_code(eol);

	  return sweetCode;
	};

	beautifier$1.Beautifier = Beautifier;
	return beautifier$1;
}

/*jshint node:true */

var hasRequiredCss;

function requireCss () {
	if (hasRequiredCss) return css.exports;
	hasRequiredCss = 1;

	var Beautifier = requireBeautifier$1().Beautifier,
	  Options = requireOptions$1().Options;

	function css_beautify(source_text, options) {
	  var beautifier = new Beautifier(source_text, options);
	  return beautifier.beautify();
	}

	css.exports = css_beautify;
	css.exports.defaultOptions = function() {
	  return new Options();
	};
	return css.exports;
}

var html = {exports: {}};

var beautifier = {};

var options = {};

/*jshint node:true */

var hasRequiredOptions;

function requireOptions () {
	if (hasRequiredOptions) return options;
	hasRequiredOptions = 1;

	var BaseOptions = requireOptions$3().Options;

	function Options(options) {
	  BaseOptions.call(this, options, 'html');
	  if (this.templating.length === 1 && this.templating[0] === 'auto') {
	    this.templating = ['django', 'erb', 'handlebars', 'php'];
	  }

	  this.indent_inner_html = this._get_boolean('indent_inner_html');
	  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
	  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);

	  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
	  this.wrap_attributes = this._get_selection('wrap_attributes',
	    ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
	  this.wrap_attributes_min_attrs = this._get_number('wrap_attributes_min_attrs', 2);
	  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
	  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']);

	  // Block vs inline elements
	  // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
	  // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
	  // https://www.w3.org/TR/html5/dom.html#phrasing-content
	  this.inline = this._get_array('inline', [
	    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
	    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
	    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
	    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
	    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
	    'video', 'wbr', 'text',
	    // obsolete inline tags
	    'acronym', 'big', 'strike', 'tt'
	  ]);
	  this.inline_custom_elements = this._get_boolean('inline_custom_elements', true);
	  this.void_elements = this._get_array('void_elements', [
	    // HTLM void elements - aka self-closing tags - aka singletons
	    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
	    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
	    // NOTE: Optional tags are too complex for a simple list
	    // they are hard coded in _do_optional_end_element

	    // Doctype and xml elements
	    '!doctype', '?xml',

	    // obsolete tags
	    // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
	    // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
	    'basefont', 'isindex'
	  ]);
	  this.unformatted = this._get_array('unformatted', []);
	  this.content_unformatted = this._get_array('content_unformatted', [
	    'pre', 'textarea'
	  ]);
	  this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
	  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);

	}
	Options.prototype = new BaseOptions();



	options.Options = Options;
	return options;
}

var tokenizer = {};

/*jshint node:true */

var hasRequiredTokenizer;

function requireTokenizer () {
	if (hasRequiredTokenizer) return tokenizer;
	hasRequiredTokenizer = 1;

	var BaseTokenizer = requireTokenizer$2().Tokenizer;
	var BASETOKEN = requireTokenizer$2().TOKEN;
	var Directives = requireDirectives().Directives;
	var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;
	var Pattern = requirePattern().Pattern;

	var TOKEN = {
	  TAG_OPEN: 'TK_TAG_OPEN',
	  TAG_CLOSE: 'TK_TAG_CLOSE',
	  CONTROL_FLOW_OPEN: 'TK_CONTROL_FLOW_OPEN',
	  CONTROL_FLOW_CLOSE: 'TK_CONTROL_FLOW_CLOSE',
	  ATTRIBUTE: 'TK_ATTRIBUTE',
	  EQUALS: 'TK_EQUALS',
	  VALUE: 'TK_VALUE',
	  COMMENT: 'TK_COMMENT',
	  TEXT: 'TK_TEXT',
	  UNKNOWN: 'TK_UNKNOWN',
	  START: BASETOKEN.START,
	  RAW: BASETOKEN.RAW,
	  EOF: BASETOKEN.EOF
	};

	var directives_core = new Directives(/<\!--/, /-->/);

	var Tokenizer = function(input_string, options) {
	  BaseTokenizer.call(this, input_string, options);
	  this._current_tag_name = '';

	  // Words end at whitespace or when a tag starts
	  // if we are indenting handlebars, they are considered tags
	  var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
	  var pattern_reader = new Pattern(this._input);

	  this.__patterns = {
	    word: templatable_reader.until(/[\n\r\t <]/),
	    word_control_flow_close_excluded: templatable_reader.until(/[\n\r\t <}]/),
	    single_quote: templatable_reader.until_after(/'/),
	    double_quote: templatable_reader.until_after(/"/),
	    attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
	    element_name: templatable_reader.until(/[\n\r\t >\/]/),

	    angular_control_flow_start: pattern_reader.matching(/\@[a-zA-Z]+[^({]*[({]/),
	    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
	    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
	    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
	    handlebars_raw_close: pattern_reader.until(/}}/),
	    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
	    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
	    // https://en.wikipedia.org/wiki/Conditional_comment
	    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
	    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
	  };

	  if (this._options.indent_handlebars) {
	    this.__patterns.word = this.__patterns.word.exclude('handlebars');
	    this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude('handlebars');
	  }

	  this._unformatted_content_delimiter = null;

	  if (this._options.unformatted_content_delimiter) {
	    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
	    this.__patterns.unformatted_content_delimiter =
	      pattern_reader.matching(literal_regexp)
	      .until_after(literal_regexp);
	  }
	};
	Tokenizer.prototype = new BaseTokenizer();

	Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
	  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
	};

	Tokenizer.prototype._is_opening = function(current_token) {
	  return current_token.type === TOKEN.TAG_OPEN || current_token.type === TOKEN.CONTROL_FLOW_OPEN;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) {
	  return (current_token.type === TOKEN.TAG_CLOSE &&
	    (open_token && (
	      ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<') ||
	      (current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{')))
	  ) || (current_token.type === TOKEN.CONTROL_FLOW_CLOSE &&
	    (current_token.text === '}' && open_token.text.endsWith('{')));
	};

	Tokenizer.prototype._reset = function() {
	  this._current_tag_name = '';
	};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  var token = null;
	  this._readWhitespace();
	  var c = this._input.peek();

	  if (c === null) {
	    return this._create_token(TOKEN.EOF, '');
	  }

	  token = token || this._read_open_handlebars(c, open_token);
	  token = token || this._read_attribute(c, previous_token, open_token);
	  token = token || this._read_close(c, open_token);
	  token = token || this._read_script_and_style(c, previous_token);
	  token = token || this._read_control_flows(c, open_token);
	  token = token || this._read_raw_content(c, previous_token, open_token);
	  token = token || this._read_content_word(c, open_token);
	  token = token || this._read_comment_or_cdata(c);
	  token = token || this._read_processing(c);
	  token = token || this._read_open(c, open_token);
	  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

	  return token;
	};

	Tokenizer.prototype._read_comment_or_cdata = function(c) { // jshint unused:false
	  var token = null;
	  var resulting_string = null;
	  var directives = null;

	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    // We treat all comments as literals, even more than preformatted tags
	    // we only look for the appropriate closing marker
	    if (peek1 === '!') {
	      resulting_string = this.__patterns.comment.read();

	      // only process directive on html comments
	      if (resulting_string) {
	        directives = directives_core.get_directives(resulting_string);
	        if (directives && directives.ignore === 'start') {
	          resulting_string += directives_core.readIgnored(this._input);
	        }
	      } else {
	        resulting_string = this.__patterns.cdata.read();
	      }
	    }

	    if (resulting_string) {
	      token = this._create_token(TOKEN.COMMENT, resulting_string);
	      token.directives = directives;
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_processing = function(c) { // jshint unused:false
	  var token = null;
	  var resulting_string = null;
	  var directives = null;

	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    if (peek1 === '!' || peek1 === '?') {
	      resulting_string = this.__patterns.conditional_comment.read();
	      resulting_string = resulting_string || this.__patterns.processing.read();
	    }

	    if (resulting_string) {
	      token = this._create_token(TOKEN.COMMENT, resulting_string);
	      token.directives = directives;
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_open = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    if (c === '<') {

	      resulting_string = this._input.next();
	      if (this._input.peek() === '/') {
	        resulting_string += this._input.next();
	      }
	      resulting_string += this.__patterns.element_name.read();
	      token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    if ((this._options.templating.includes('angular') || this._options.indent_handlebars) && c === '{' && this._input.peek(1) === '{') {
	      if (this._options.indent_handlebars && this._input.peek(2) === '!') {
	        resulting_string = this.__patterns.handlebars_comment.read();
	        resulting_string = resulting_string || this.__patterns.handlebars.read();
	        token = this._create_token(TOKEN.COMMENT, resulting_string);
	      } else {
	        resulting_string = this.__patterns.handlebars_open.read();
	        token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
	      }
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_control_flows = function(c, open_token) {
	  var resulting_string = '';
	  var token = null;
	  // Only check for control flows if angular templating is set
	  if (!this._options.templating.includes('angular')) {
	    return token;
	  }

	  if (c === '@') {
	    resulting_string = this.__patterns.angular_control_flow_start.read();
	    if (resulting_string === '') {
	      return token;
	    }

	    var opening_parentheses_count = resulting_string.endsWith('(') ? 1 : 0;
	    var closing_parentheses_count = 0;
	    // The opening brace of the control flow is where the number of opening and closing parentheses equal
	    // e.g. @if({value: true} !== null) { 
	    while (!(resulting_string.endsWith('{') && opening_parentheses_count === closing_parentheses_count)) {
	      var next_char = this._input.next();
	      if (next_char === null) {
	        break;
	      } else if (next_char === '(') {
	        opening_parentheses_count++;
	      } else if (next_char === ')') {
	        closing_parentheses_count++;
	      }
	      resulting_string += next_char;
	    }
	    token = this._create_token(TOKEN.CONTROL_FLOW_OPEN, resulting_string);
	  } else if (c === '}' && open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    resulting_string = this._input.next();
	    token = this._create_token(TOKEN.CONTROL_FLOW_CLOSE, resulting_string);
	  }
	  return token;
	};


	Tokenizer.prototype._read_close = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (open_token && open_token.type === TOKEN.TAG_OPEN) {
	    if (open_token.text[0] === '<' && (c === '>' || (c === '/' && this._input.peek(1) === '>'))) {
	      resulting_string = this._input.next();
	      if (c === '/') { //  for close tag "/>"
	        resulting_string += this._input.next();
	      }
	      token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
	    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
	      this._input.next();
	      this._input.next();
	      token = this._create_token(TOKEN.TAG_CLOSE, '}}');
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
	  var token = null;
	  var resulting_string = '';
	  if (open_token && open_token.text[0] === '<') {

	    if (c === '=') {
	      token = this._create_token(TOKEN.EQUALS, this._input.next());
	    } else if (c === '"' || c === "'") {
	      var content = this._input.next();
	      if (c === '"') {
	        content += this.__patterns.double_quote.read();
	      } else {
	        content += this.__patterns.single_quote.read();
	      }
	      token = this._create_token(TOKEN.VALUE, content);
	    } else {
	      resulting_string = this.__patterns.attribute.read();

	      if (resulting_string) {
	        if (previous_token.type === TOKEN.EQUALS) {
	          token = this._create_token(TOKEN.VALUE, resulting_string);
	        } else {
	          token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
	        }
	      }
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._is_content_unformatted = function(tag_name) {
	  // void_elements have no content and so cannot have unformatted content
	  // script and style tags should always be read as unformatted content
	  // finally content_unformatted and unformatted element contents are unformatted
	  return this._options.void_elements.indexOf(tag_name) === -1 &&
	    (this._options.content_unformatted.indexOf(tag_name) !== -1 ||
	      this._options.unformatted.indexOf(tag_name) !== -1);
	};

	Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) { // jshint unused:false
	  var resulting_string = '';
	  if (open_token && open_token.text[0] === '{') {
	    resulting_string = this.__patterns.handlebars_raw_close.read();
	  } else if (previous_token.type === TOKEN.TAG_CLOSE &&
	    previous_token.opened.text[0] === '<' && previous_token.text[0] !== '/') {
	    // ^^ empty tag has no content 
	    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
	    if (this._is_content_unformatted(tag_name)) {

	      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
	    }
	  }

	  if (resulting_string) {
	    return this._create_token(TOKEN.TEXT, resulting_string);
	  }

	  return null;
	};

	Tokenizer.prototype._read_script_and_style = function(c, previous_token) { // jshint unused:false 
	  if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === '<' && previous_token.text[0] !== '/') {
	    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
	    if (tag_name === 'script' || tag_name === 'style') {
	      // Script and style tags are allowed to have comments wrapping their content
	      // or just have regular content.
	      var token = this._read_comment_or_cdata(c);
	      if (token) {
	        token.type = TOKEN.TEXT;
	        return token;
	      }
	      var resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
	      if (resulting_string) {
	        return this._create_token(TOKEN.TEXT, resulting_string);
	      }
	    }
	  }
	  return null;
	};

	Tokenizer.prototype._read_content_word = function(c, open_token) {
	  var resulting_string = '';
	  if (this._options.unformatted_content_delimiter) {
	    if (c === this._options.unformatted_content_delimiter[0]) {
	      resulting_string = this.__patterns.unformatted_content_delimiter.read();
	    }
	  }

	  if (!resulting_string) {
	    resulting_string = (open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read();
	  }
	  if (resulting_string) {
	    return this._create_token(TOKEN.TEXT, resulting_string);
	  }
	  return null;
	};

	tokenizer.Tokenizer = Tokenizer;
	tokenizer.TOKEN = TOKEN;
	return tokenizer;
}

/*jshint node:true */

var hasRequiredBeautifier;

function requireBeautifier () {
	if (hasRequiredBeautifier) return beautifier;
	hasRequiredBeautifier = 1;

	var Options = requireOptions().Options;
	var Output = requireOutput().Output;
	var Tokenizer = requireTokenizer().Tokenizer;
	var TOKEN = requireTokenizer().TOKEN;

	var lineBreak = /\r\n|[\r\n]/;
	var allLineBreaks = /\r\n|[\r\n]/g;

	var Printer = function(options, base_indent_string) { //handles input/output and some other printing functions

	  this.indent_level = 0;
	  this.alignment_size = 0;
	  this.max_preserve_newlines = options.max_preserve_newlines;
	  this.preserve_newlines = options.preserve_newlines;

	  this._output = new Output(options, base_indent_string);

	};

	Printer.prototype.current_line_has_match = function(pattern) {
	  return this._output.current_line.has_match(pattern);
	};

	Printer.prototype.set_space_before_token = function(value, non_breaking) {
	  this._output.space_before_token = value;
	  this._output.non_breaking_space = non_breaking;
	};

	Printer.prototype.set_wrap_point = function() {
	  this._output.set_indent(this.indent_level, this.alignment_size);
	  this._output.set_wrap_point();
	};


	Printer.prototype.add_raw_token = function(token) {
	  this._output.add_raw_token(token);
	};

	Printer.prototype.print_preserved_newlines = function(raw_token) {
	  var newlines = 0;
	  if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
	    newlines = raw_token.newlines ? 1 : 0;
	  }

	  if (this.preserve_newlines) {
	    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
	  }
	  for (var n = 0; n < newlines; n++) {
	    this.print_newline(n > 0);
	  }

	  return newlines !== 0;
	};

	Printer.prototype.traverse_whitespace = function(raw_token) {
	  if (raw_token.whitespace_before || raw_token.newlines) {
	    if (!this.print_preserved_newlines(raw_token)) {
	      this._output.space_before_token = true;
	    }
	    return true;
	  }
	  return false;
	};

	Printer.prototype.previous_token_wrapped = function() {
	  return this._output.previous_token_wrapped;
	};

	Printer.prototype.print_newline = function(force) {
	  this._output.add_new_line(force);
	};

	Printer.prototype.print_token = function(token) {
	  if (token.text) {
	    this._output.set_indent(this.indent_level, this.alignment_size);
	    this._output.add_token(token.text);
	  }
	};

	Printer.prototype.indent = function() {
	  this.indent_level++;
	};

	Printer.prototype.deindent = function() {
	  if (this.indent_level > 0) {
	    this.indent_level--;
	    this._output.set_indent(this.indent_level, this.alignment_size);
	  }
	};

	Printer.prototype.get_full_indent = function(level) {
	  level = this.indent_level + (level || 0);
	  if (level < 1) {
	    return '';
	  }

	  return this._output.get_indent_string(level);
	};

	var get_type_attribute = function(start_token) {
	  var result = null;
	  var raw_token = start_token.next;

	  // Search attributes for a type attribute
	  while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
	    if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === 'type') {
	      if (raw_token.next && raw_token.next.type === TOKEN.EQUALS &&
	        raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
	        result = raw_token.next.next.text;
	      }
	      break;
	    }
	    raw_token = raw_token.next;
	  }

	  return result;
	};

	var get_custom_beautifier_name = function(tag_check, raw_token) {
	  var typeAttribute = null;
	  var result = null;

	  if (!raw_token.closed) {
	    return null;
	  }

	  if (tag_check === 'script') {
	    typeAttribute = 'text/javascript';
	  } else if (tag_check === 'style') {
	    typeAttribute = 'text/css';
	  }

	  typeAttribute = get_type_attribute(raw_token) || typeAttribute;

	  // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
	  // For those without a type attribute use default;
	  if (typeAttribute.search('text/css') > -1) {
	    result = 'css';
	  } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
	    result = 'javascript';
	  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
	    result = 'html';
	  } else if (typeAttribute.search(/test\/null/) > -1) {
	    // Test only mime-type for testing the beautifier when null is passed as beautifing function
	    result = 'null';
	  }

	  return result;
	};

	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}

	function TagFrame(parent, parser_token, indent_level) {
	  this.parent = parent || null;
	  this.tag = parser_token ? parser_token.tag_name : '';
	  this.indent_level = indent_level || 0;
	  this.parser_token = parser_token || null;
	}

	function TagStack(printer) {
	  this._printer = printer;
	  this._current_frame = null;
	}

	TagStack.prototype.get_parser_token = function() {
	  return this._current_frame ? this._current_frame.parser_token : null;
	};

	TagStack.prototype.record_tag = function(parser_token) { //function to record a tag and its parent in this.tags Object
	  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
	  this._current_frame = new_frame;
	};

	TagStack.prototype._try_pop_frame = function(frame) { //function to retrieve the opening tag to the corresponding closer
	  var parser_token = null;

	  if (frame) {
	    parser_token = frame.parser_token;
	    this._printer.indent_level = frame.indent_level;
	    this._current_frame = frame.parent;
	  }

	  return parser_token;
	};

	TagStack.prototype._get_frame = function(tag_list, stop_list) { //function to retrieve the opening tag to the corresponding closer
	  var frame = this._current_frame;

	  while (frame) { //till we reach '' (the initial value);
	    if (tag_list.indexOf(frame.tag) !== -1) { //if this is it use it
	      break;
	    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
	      frame = null;
	      break;
	    }
	    frame = frame.parent;
	  }

	  return frame;
	};

	TagStack.prototype.try_pop = function(tag, stop_list) { //function to retrieve the opening tag to the corresponding closer
	  var frame = this._get_frame([tag], stop_list);
	  return this._try_pop_frame(frame);
	};

	TagStack.prototype.indent_to_tag = function(tag_list) {
	  var frame = this._get_frame(tag_list);
	  if (frame) {
	    this._printer.indent_level = frame.indent_level;
	  }
	};

	function Beautifier(source_text, options, js_beautify, css_beautify) {
	  //Wrapper function to invoke all the necessary constructors and deal with the output.
	  this._source_text = source_text || '';
	  options = options || {};
	  this._js_beautify = js_beautify;
	  this._css_beautify = css_beautify;
	  this._tag_stack = null;

	  // Allow the setting of language/file-type specific options
	  // with inheritance of overall settings
	  var optionHtml = new Options(options, 'html');

	  this._options = optionHtml;

	  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
	  this._is_wrap_attributes_force_expand_multiline = (this._options.wrap_attributes === 'force-expand-multiline');
	  this._is_wrap_attributes_force_aligned = (this._options.wrap_attributes === 'force-aligned');
	  this._is_wrap_attributes_aligned_multiple = (this._options.wrap_attributes === 'aligned-multiple');
	  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
	  this._is_wrap_attributes_preserve_aligned = (this._options.wrap_attributes === 'preserve-aligned');
	}

	Beautifier.prototype.beautify = function() {

	  // if disabled, return the input unchanged.
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var source_text = this._source_text;
	  var eol = this._options.eol;
	  if (this._options.eol === 'auto') {
	    eol = '\n';
	    if (source_text && lineBreak.test(source_text)) {
	      eol = source_text.match(lineBreak)[0];
	    }
	  }

	  // HACK: newline parsing inconsistent. This brute force normalizes the input.
	  source_text = source_text.replace(allLineBreaks, '\n');

	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  var last_token = {
	    text: '',
	    type: ''
	  };

	  var last_tag_token = new TagOpenParserToken(this._options);

	  var printer = new Printer(this._options, baseIndentString);
	  var tokens = new Tokenizer(source_text, this._options).tokenize();

	  this._tag_stack = new TagStack(printer);

	  var parser_token = null;
	  var raw_token = tokens.next();
	  while (raw_token.type !== TOKEN.EOF) {

	    if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
	      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token, tokens);
	      last_tag_token = parser_token;
	    } else if ((raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE) ||
	      (raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete)) {
	      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, last_token);
	    } else if (raw_token.type === TOKEN.TAG_CLOSE) {
	      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
	    } else if (raw_token.type === TOKEN.TEXT) {
	      parser_token = this._handle_text(printer, raw_token, last_tag_token);
	    } else if (raw_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	      parser_token = this._handle_control_flow_open(printer, raw_token);
	    } else if (raw_token.type === TOKEN.CONTROL_FLOW_CLOSE) {
	      parser_token = this._handle_control_flow_close(printer, raw_token);
	    } else {
	      // This should never happen, but if it does. Print the raw token
	      printer.add_raw_token(raw_token);
	    }

	    last_token = parser_token;

	    raw_token = tokens.next();
	  }
	  var sweet_code = printer._output.get_code(eol);

	  return sweet_code;
	};

	Beautifier.prototype._handle_control_flow_open = function(printer, raw_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };
	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (raw_token.newlines) {
	    printer.print_preserved_newlines(raw_token);
	  } else {
	    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  }
	  printer.print_token(raw_token);
	  printer.indent();
	  return parser_token;
	};

	Beautifier.prototype._handle_control_flow_close = function(printer, raw_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };

	  printer.deindent();
	  if (raw_token.newlines) {
	    printer.print_preserved_newlines(raw_token);
	  } else {
	    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  }
	  printer.print_token(raw_token);
	  return parser_token;
	};

	Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };
	  printer.alignment_size = 0;
	  last_tag_token.tag_complete = true;

	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (last_tag_token.is_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else {
	    if (last_tag_token.tag_start_char === '<') {
	      printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >
	      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
	        printer.print_newline(false);
	      }
	    }
	    printer.print_token(raw_token);

	  }

	  if (last_tag_token.indent_content &&
	    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
	    printer.indent();

	    // only indent once per opened tag
	    last_tag_token.indent_content = false;
	  }

	  if (!last_tag_token.is_inline_element &&
	    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
	    printer.set_wrap_point();
	  }

	  return parser_token;
	};

	Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, last_token) {
	  var wrapped = last_tag_token.has_wrapped_attrs;
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };

	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (last_tag_token.is_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN.TEXT) {
	    // For the insides of handlebars allow newlines or a single space between open and contents
	    if (printer.print_preserved_newlines(raw_token)) {
	      raw_token.newlines = 0;
	      printer.add_raw_token(raw_token);
	    } else {
	      printer.print_token(raw_token);
	    }
	  } else {
	    if (raw_token.type === TOKEN.ATTRIBUTE) {
	      printer.set_space_before_token(true);
	    } else if (raw_token.type === TOKEN.EQUALS) { //no space before =
	      printer.set_space_before_token(false);
	    } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) { //no space before value
	      printer.set_space_before_token(false);
	    }

	    if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
	      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
	        printer.traverse_whitespace(raw_token);
	        wrapped = wrapped || raw_token.newlines !== 0;
	      }

	      // Wrap for 'force' options, and if the number of attributes is at least that specified in 'wrap_attributes_min_attrs':
	      // 1. always wrap the second and beyond attributes
	      // 2. wrap the first attribute only if 'force-expand-multiline' is specified
	      if (this._is_wrap_attributes_force &&
	        last_tag_token.attr_count >= this._options.wrap_attributes_min_attrs &&
	        (last_token.type !== TOKEN.TAG_OPEN || // ie. second attribute and beyond
	          this._is_wrap_attributes_force_expand_multiline)) {
	        printer.print_newline(false);
	        wrapped = true;
	      }
	    }
	    printer.print_token(raw_token);
	    wrapped = wrapped || printer.previous_token_wrapped();
	    last_tag_token.has_wrapped_attrs = wrapped;
	  }
	  return parser_token;
	};

	Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: 'TK_CONTENT'
	  };
	  if (last_tag_token.custom_beautifier_name) { //check if we need to format javascript
	    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
	  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else {
	    printer.traverse_whitespace(raw_token);
	    printer.print_token(raw_token);
	  }
	  return parser_token;
	};

	Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
	  var local = this;
	  if (raw_token.text !== '') {

	    var text = raw_token.text,
	      _beautifier,
	      script_indent_level = 1,
	      pre = '',
	      post = '';
	    if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
	      _beautifier = this._js_beautify;
	    } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
	      _beautifier = this._css_beautify;
	    } else if (last_tag_token.custom_beautifier_name === 'html') {
	      _beautifier = function(html_source, options) {
	        var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
	        return beautifier.beautify();
	      };
	    }

	    if (this._options.indent_scripts === "keep") {
	      script_indent_level = 0;
	    } else if (this._options.indent_scripts === "separate") {
	      script_indent_level = -printer.indent_level;
	    }

	    var indentation = printer.get_full_indent(script_indent_level);

	    // if there is at least one empty line at the end of this text, strip it
	    // we'll be adding one back after the text but before the containing tag.
	    text = text.replace(/\n[ \t]*$/, '');

	    // Handle the case where content is wrapped in a comment or cdata.
	    if (last_tag_token.custom_beautifier_name !== 'html' &&
	      text[0] === '<' && text.match(/^(<!--|<!\[CDATA\[)/)) {
	      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);

	      // if we start to wrap but don't finish, print raw
	      if (!matched) {
	        printer.add_raw_token(raw_token);
	        return;
	      }

	      pre = indentation + matched[1] + '\n';
	      text = matched[4];
	      if (matched[5]) {
	        post = indentation + matched[5];
	      }

	      // if there is at least one empty line at the end of this text, strip it
	      // we'll be adding one back after the text but before the containing tag.
	      text = text.replace(/\n[ \t]*$/, '');

	      if (matched[2] || matched[3].indexOf('\n') !== -1) {
	        // if the first line of the non-comment text has spaces
	        // use that as the basis for indenting in null case.
	        matched = matched[3].match(/[ \t]+$/);
	        if (matched) {
	          raw_token.whitespace_before = matched[0];
	        }
	      }
	    }

	    if (text) {
	      if (_beautifier) {

	        // call the Beautifier if avaliable
	        var Child_options = function() {
	          this.eol = '\n';
	        };
	        Child_options.prototype = this._options.raw_options;
	        var child_options = new Child_options();
	        text = _beautifier(indentation + text, child_options);
	      } else {
	        // simply indent the string otherwise
	        var white = raw_token.whitespace_before;
	        if (white) {
	          text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
	        }

	        text = indentation + text.replace(/\n/g, '\n' + indentation);
	      }
	    }

	    if (pre) {
	      if (!text) {
	        text = pre + post;
	      } else {
	        text = pre + text + '\n' + post;
	      }
	    }

	    printer.print_newline(false);
	    if (text) {
	      raw_token.text = text;
	      raw_token.whitespace_before = '';
	      raw_token.newlines = 0;
	      printer.add_raw_token(raw_token);
	      printer.print_newline(true);
	    }
	  }
	};

	Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token, tokens) {
	  var parser_token = this._get_tag_open_token(raw_token);

	  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) &&
	    !last_tag_token.is_empty_element &&
	    raw_token.type === TOKEN.TAG_OPEN && !parser_token.is_start_tag) {
	    // End element tags for unformatted or content_unformatted elements
	    // are printed raw to keep any newlines inside them exactly the same.
	    printer.add_raw_token(raw_token);
	    parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
	  } else {
	    printer.traverse_whitespace(raw_token);
	    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
	    if (!parser_token.is_inline_element) {
	      printer.set_wrap_point();
	    }
	    printer.print_token(raw_token);
	  }

	  // count the number of attributes
	  if (parser_token.is_start_tag && this._is_wrap_attributes_force) {
	    var peek_index = 0;
	    var peek_token;
	    do {
	      peek_token = tokens.peek(peek_index);
	      if (peek_token.type === TOKEN.ATTRIBUTE) {
	        parser_token.attr_count += 1;
	      }
	      peek_index += 1;
	    } while (peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
	  }

	  //indent attributes an auto, forced, aligned or forced-align line-wrap
	  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
	    parser_token.alignment_size = raw_token.text.length + 1;
	  }

	  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
	    printer.alignment_size = parser_token.alignment_size;
	  }

	  return parser_token;
	};

	var TagOpenParserToken = function(options, parent, raw_token) {
	  this.parent = parent || null;
	  this.text = '';
	  this.type = 'TK_TAG_OPEN';
	  this.tag_name = '';
	  this.is_inline_element = false;
	  this.is_unformatted = false;
	  this.is_content_unformatted = false;
	  this.is_empty_element = false;
	  this.is_start_tag = false;
	  this.is_end_tag = false;
	  this.indent_content = false;
	  this.multiline_content = false;
	  this.custom_beautifier_name = null;
	  this.start_tag_token = null;
	  this.attr_count = 0;
	  this.has_wrapped_attrs = false;
	  this.alignment_size = 0;
	  this.tag_complete = false;
	  this.tag_start_char = '';
	  this.tag_check = '';

	  if (!raw_token) {
	    this.tag_complete = true;
	  } else {
	    var tag_check_match;

	    this.tag_start_char = raw_token.text[0];
	    this.text = raw_token.text;

	    if (this.tag_start_char === '<') {
	      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
	      this.tag_check = tag_check_match ? tag_check_match[1] : '';
	    } else {
	      tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
	      this.tag_check = tag_check_match ? tag_check_match[1] : '';

	      // handle "{{#> myPartial}}" or "{{~#> myPartial}}"
	      if ((raw_token.text.startsWith('{{#>') || raw_token.text.startsWith('{{~#>')) && this.tag_check[0] === '>') {
	        if (this.tag_check === '>' && raw_token.next !== null) {
	          this.tag_check = raw_token.next.text.split(' ')[0];
	        } else {
	          this.tag_check = raw_token.text.split('>')[1];
	        }
	      }
	    }

	    this.tag_check = this.tag_check.toLowerCase();

	    if (raw_token.type === TOKEN.COMMENT) {
	      this.tag_complete = true;
	    }

	    this.is_start_tag = this.tag_check.charAt(0) !== '/';
	    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
	    this.is_end_tag = !this.is_start_tag ||
	      (raw_token.closed && raw_token.closed.text === '/>');

	    // if whitespace handler ~ included (i.e. {{~#if true}}), handlebars tags start at pos 3 not pos 2
	    var handlebar_starts = 2;
	    if (this.tag_start_char === '{' && this.text.length >= 3) {
	      if (this.text.charAt(2) === '~') {
	        handlebar_starts = 3;
	      }
	    }

	    // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.
	    // if they start with # or ^, they are still considered single tags if indenting of handlebars is set to false
	    this.is_end_tag = this.is_end_tag ||
	      (this.tag_start_char === '{' && (!options.indent_handlebars || this.text.length < 3 || (/[^#\^]/.test(this.text.charAt(handlebar_starts)))));
	  }
	};

	Beautifier.prototype._get_tag_open_token = function(raw_token) { //function to get a full tag and parse its type
	  var parser_token = new TagOpenParserToken(this._options, this._tag_stack.get_parser_token(), raw_token);

	  parser_token.alignment_size = this._options.wrap_attributes_indent_size;

	  parser_token.is_end_tag = parser_token.is_end_tag ||
	    in_array(parser_token.tag_check, this._options.void_elements);

	  parser_token.is_empty_element = parser_token.tag_complete ||
	    (parser_token.is_start_tag && parser_token.is_end_tag);

	  parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
	  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
	  parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || (this._options.inline_custom_elements && parser_token.tag_name.includes("-")) || parser_token.tag_start_char === '{';

	  return parser_token;
	};

	Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {

	  if (!parser_token.is_empty_element) {
	    if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
	      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
	    } else { // it's a start-tag
	      // check if this tag is starting an element that has optional end element
	      // and do an ending needed
	      if (this._do_optional_end_element(parser_token)) {
	        if (!parser_token.is_inline_element) {
	          printer.print_newline(false);
	        }
	      }

	      this._tag_stack.record_tag(parser_token); //push it on the tag stack

	      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') &&
	        !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
	        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
	      }
	    }
	  }

	  if (in_array(parser_token.tag_check, this._options.extra_liners)) { //check if this double needs an extra line
	    printer.print_newline(false);
	    if (!printer._output.just_added_blankline()) {
	      printer.print_newline(true);
	    }
	  }

	  if (parser_token.is_empty_element) { //if this tag name is a single tag type (either in the list or has a closing /)

	    // if you hit an else case, reset the indent level if you are inside an:
	    // 'if', 'unless', or 'each' block.
	    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
	      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);
	      parser_token.indent_content = true;
	      // Don't add a newline if opening {{#if}} tag is on the current line
	      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
	      if (!foundIfOnCurrentLine) {
	        printer.print_newline(false);
	      }
	    }

	    // Don't add a newline before elements that should remain where they are.
	    if (parser_token.tag_name === '!--' && last_token.type === TOKEN.TAG_CLOSE &&
	      last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) ; else {
	      if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
	        printer.print_newline(false);
	      }
	      this._calcluate_parent_multiline(printer, parser_token);
	    }
	  } else if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
	    var do_end_expand = false;

	    // deciding whether a block is multiline should not be this hard
	    do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
	    do_end_expand = do_end_expand || (!parser_token.is_inline_element &&
	      !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) &&
	      !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) &&
	      last_token.type !== 'TK_CONTENT'
	    );

	    if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
	      do_end_expand = false;
	    }

	    if (do_end_expand) {
	      printer.print_newline(false);
	    }
	  } else { // it's a start-tag
	    parser_token.indent_content = !parser_token.custom_beautifier_name;

	    if (parser_token.tag_start_char === '<') {
	      if (parser_token.tag_name === 'html') {
	        parser_token.indent_content = this._options.indent_inner_html;
	      } else if (parser_token.tag_name === 'head') {
	        parser_token.indent_content = this._options.indent_head_inner_html;
	      } else if (parser_token.tag_name === 'body') {
	        parser_token.indent_content = this._options.indent_body_inner_html;
	      }
	    }

	    if (!(parser_token.is_inline_element || parser_token.is_unformatted) &&
	      (last_token.type !== 'TK_CONTENT' || parser_token.is_content_unformatted)) {
	      printer.print_newline(false);
	    }

	    this._calcluate_parent_multiline(printer, parser_token);
	  }
	};

	Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
	  if (parser_token.parent && printer._output.just_added_newline() &&
	    !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
	    parser_token.parent.multiline_content = true;
	  }
	};

	//To be used for <p> tag special case:
	var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'menu', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];
	var p_parent_excludes = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video'];

	Beautifier.prototype._do_optional_end_element = function(parser_token) {
	  var result = null;
	  // NOTE: cases of "if there is no more content in the parent element"
	  // are handled automatically by the beautifier.
	  // It assumes parent or ancestor close tag closes all children.
	  // https://www.w3.org/TR/html5/syntax.html#optional-tags
	  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
	    return;

	  }

	  if (parser_token.tag_name === 'body') {
	    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
	    result = result || this._tag_stack.try_pop('head');

	    //} else if (parser_token.tag_name === 'body') {
	    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.

	  } else if (parser_token.tag_name === 'li') {
	    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('li', ['ol', 'ul', 'menu']);

	  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
	    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
	    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
	    result = result || this._tag_stack.try_pop('dt', ['dl']);
	    result = result || this._tag_stack.try_pop('dd', ['dl']);


	  } else if (parser_token.parent.tag_name === 'p' && p_closers.indexOf(parser_token.tag_name) !== -1) {
	    // IMPORTANT: this else-if works because p_closers has no overlap with any other element we look for in this method
	    // check for the parent element is an HTML element that is not an <a>, <audio>, <del>, <ins>, <map>, <noscript>, or <video> element,  or an autonomous custom element.
	    // To do this right, this needs to be coded as an inclusion of the inverse of the exclusion above.
	    // But to start with (if we ignore "autonomous custom elements") the exclusion would be fine.
	    var p_parent = parser_token.parent.parent;
	    if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
	      result = result || this._tag_stack.try_pop('p');
	    }
	  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
	    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
	    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
	    result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);

	  } else if (parser_token.tag_name === 'optgroup') {
	    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
	    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('optgroup', ['select']);
	    //result = result || this._tag_stack.try_pop('option', ['select']);

	  } else if (parser_token.tag_name === 'option') {
	    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);

	  } else if (parser_token.tag_name === 'colgroup') {
	    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);

	  } else if (parser_token.tag_name === 'thead') {
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);

	    //} else if (parser_token.tag_name === 'caption') {
	    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.

	  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
	    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
	    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);
	    result = result || this._tag_stack.try_pop('thead', ['table']);
	    result = result || this._tag_stack.try_pop('tbody', ['table']);

	    //} else if (parser_token.tag_name === 'tfoot') {
	    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.

	  } else if (parser_token.tag_name === 'tr') {
	    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);
	    result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);

	  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
	    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
	    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
	    result = result || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
	  }

	  // Start element omission not handled currently
	  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
	  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
	  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)

	  // Fix up the parent of the parser token
	  parser_token.parent = this._tag_stack.get_parser_token();

	  return result;
	};

	beautifier.Beautifier = Beautifier;
	return beautifier;
}

/*jshint node:true */

var hasRequiredHtml;

function requireHtml () {
	if (hasRequiredHtml) return html.exports;
	hasRequiredHtml = 1;

	var Beautifier = requireBeautifier().Beautifier,
	  Options = requireOptions().Options;

	function style_html(html_source, options, js_beautify, css_beautify) {
	  var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
	  return beautifier.beautify();
	}

	html.exports = style_html;
	html.exports.defaultOptions = function() {
	  return new Options();
	};
	return html.exports;
}

/*jshint node:true */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;

	var js_beautify = requireJavascript();
	var css_beautify = requireCss();
	var html_beautify = requireHtml();

	function style_html(html_source, options, js, css) {
	  js = js || js_beautify;
	  css = css || css_beautify;
	  return html_beautify(html_source, options, js, css);
	}
	style_html.defaultOptions = html_beautify.defaultOptions;

	src.js = js_beautify;
	src.css = css_beautify;
	src.html = style_html;
	return src;
}

/*jshint node:true */

var hasRequiredJs;

function requireJs () {
	if (hasRequiredJs) return js.exports;
	hasRequiredJs = 1;
	(function (module) {

		/**
		The following batches are equivalent:

		var beautify_js = require('js-beautify');
		var beautify_js = require('js-beautify').js;
		var beautify_js = require('js-beautify').js_beautify;

		var beautify_css = require('js-beautify').css;
		var beautify_css = require('js-beautify').css_beautify;

		var beautify_html = require('js-beautify').html;
		var beautify_html = require('js-beautify').html_beautify;

		All methods returned accept two arguments, the source string and an options object.
		**/

		function get_beautify(js_beautify, css_beautify, html_beautify) {
		  // the default is js
		  var beautify = function(src, config) {
		    return js_beautify.js_beautify(src, config);
		  };

		  // short aliases
		  beautify.js = js_beautify.js_beautify;
		  beautify.css = css_beautify.css_beautify;
		  beautify.html = html_beautify.html_beautify;

		  // legacy aliases
		  beautify.js_beautify = js_beautify.js_beautify;
		  beautify.css_beautify = css_beautify.css_beautify;
		  beautify.html_beautify = html_beautify.html_beautify;

		  return beautify;
		}

		{
		  (function(mod) {
		    var beautifier = requireSrc();
		    beautifier.js_beautify = beautifier.js;
		    beautifier.css_beautify = beautifier.css;
		    beautifier.html_beautify = beautifier.html;

		    mod.exports = get_beautify(beautifier, beautifier, beautifier);

		  })(module);
		} 
	} (js));
	return js.exports;
}

var jsExports = requireJs();
var Lt = /*@__PURE__*/getDefaultExportFromCjs(jsExports);

var at=createToken({name:"WhiteSpace",pattern:/\s+/,group:Lexer.SKIPPED}),ot=createToken({name:"LineComment",pattern:/\/\/[^\n\r]*/,group:Lexer.SKIPPED}),lt=createToken({name:"BlockComment",pattern:/\/\*[\s\S]*?\*\//,group:Lexer.SKIPPED}),h=createToken({name:"Identifier",pattern:/[a-zA-Z_$][a-zA-Z0-9_.\[\]]*/}),N=createToken({name:"QuotedIdentifier",pattern:/`([^`\\]|\\.)*`/}),L=createToken({name:"From",pattern:/from/i,longer_alt:h}),S=createToken({name:"To",pattern:/to/i,longer_alt:h}),d=createToken({name:"Transform",pattern:/transform/i,longer_alt:h}),B=createToken({name:"Set",pattern:/set/i,longer_alt:h}),T=createToken({name:"Section",pattern:/section/i,longer_alt:h}),C=createToken({name:"Multiple",pattern:/multiple/i,longer_alt:h}),M=createToken({name:"Clone",pattern:/clone/i,longer_alt:h}),v=createToken({name:"Delete",pattern:/delete/i,longer_alt:h}),q=createToken({name:"Define",pattern:/define/i,longer_alt:h}),A=createToken({name:"If",pattern:/if/i,longer_alt:h}),w=createToken({name:"Else",pattern:/else/i,longer_alt:h}),P=createToken({name:"EqualsEquals",pattern:/==/}),b=createToken({name:"EqualsEqualsEquals",pattern:/===/}),I=createToken({name:"NotEquals",pattern:/!=/}),x=createToken({name:"NotEqualsEquals",pattern:/!==/}),_=createToken({name:"LessThanOrEqual",pattern:/<=/}),F=createToken({name:"GreaterThanOrEqual",pattern:/>=/}),D=createToken({name:"LessThan",pattern:/</}),j=createToken({name:"GreaterThan",pattern:/>/}),z=createToken({name:"And",pattern:/&&/}),G=createToken({name:"Or",pattern:/\|\|/}),Y=createToken({name:"Not",pattern:/!/}),y=createToken({name:"Equals",pattern:/=/}),k=createToken({name:"Plus",pattern:/\+/}),R=createToken({name:"Minus",pattern:/-/}),Q=createToken({name:"Times",pattern:/\*/}),V=createToken({name:"Divide",pattern:/\//}),u=createToken({name:"LParen",pattern:/\(/}),c=createToken({name:"RParen",pattern:/\)/}),O=createToken({name:"Comma",pattern:/,/}),$=createToken({name:"StringLiteral",pattern:/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/}),W=createToken({name:"NumericLiteral",pattern:/-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/}),K=[at,ot,lt,L,S,d,B,T,C,M,v,q,A,w,b,P,x,I,_,F,z,G,y,D,j,Y,k,R,Q,V,u,c,O,$,W,N,h],et=new Lexer(K);var H=class extends CstParser{constructor(){super(K),this.performSelfAnalysis();}query=this.RULE("query",()=>{this.CONSUME(L),this.SUBRULE(this.typeFormat,{LABEL:"sourceType"}),this.CONSUME(S),this.SUBRULE1(this.typeFormat,{LABEL:"targetType"}),this.OPTION(()=>{this.CONSUME(d),this.MANY(()=>{this.SUBRULE(this.action);});});});typeFormat=this.RULE("typeFormat",()=>{this.SUBRULE(this.anyIdentifier,{LABEL:"name"}),this.OPTION(()=>{this.CONSUME(u),this.CONSUME($,{LABEL:"parameter"}),this.CONSUME(c);});});anyIdentifier=this.RULE("anyIdentifier",()=>{this.OR([{ALT:()=>this.CONSUME(h)},{ALT:()=>this.CONSUME(N)}]);});literal=this.RULE("literal",()=>{this.OR([{ALT:()=>this.CONSUME($)},{ALT:()=>this.CONSUME(W)}]);});action=this.RULE("action",()=>{this.OR([{ALT:()=>this.SUBRULE(this.setRule)},{ALT:()=>this.SUBRULE(this.sectionRule)},{ALT:()=>this.SUBRULE(this.cloneRule)},{ALT:()=>this.SUBRULE(this.deleteRule)},{ALT:()=>this.SUBRULE(this.ifAction)},{ALT:()=>this.SUBRULE(this.defineRule)}]);});deleteRule=this.RULE("deleteRule",()=>{this.CONSUME(v),this.SUBRULE(this.anyIdentifier,{LABEL:"field"});});ifAction=this.RULE("ifAction",()=>{this.CONSUME(A),this.CONSUME(u),this.SUBRULE(this.expression,{LABEL:"condition"}),this.CONSUME(c),this.CONSUME2(u),this.MANY(()=>{this.SUBRULE(this.action,{LABEL:"thenActions"});}),this.CONSUME2(c),this.OPTION(()=>{this.CONSUME(w),this.CONSUME3(u),this.MANY2(()=>{this.SUBRULE2(this.action,{LABEL:"elseActions"});}),this.CONSUME3(c);});});cloneRule=this.RULE("cloneRule",()=>{this.CONSUME(M),this.OPTION(()=>{this.CONSUME(u),this.MANY_SEP({SEP:O,DEF:()=>{this.SUBRULE(this.anyIdentifier,{LABEL:"fields"});}}),this.CONSUME(c);});});setRule=this.RULE("setRule",()=>{this.CONSUME(B),this.SUBRULE(this.anyIdentifier,{LABEL:"left"}),this.CONSUME(y),this.SUBRULE(this.expression,{LABEL:"right"});});expression=this.RULE("expression",()=>{this.SUBRULE(this.logicalOr);});logicalOr=this.RULE("logicalOr",()=>{this.SUBRULE(this.logicalAnd,{LABEL:"lhs"}),this.MANY(()=>{this.CONSUME(G),this.SUBRULE1(this.logicalAnd,{LABEL:"rhs"});});});logicalAnd=this.RULE("logicalAnd",()=>{this.SUBRULE(this.comparison,{LABEL:"lhs"}),this.MANY(()=>{this.CONSUME(z),this.SUBRULE1(this.comparison,{LABEL:"rhs"});});});comparison=this.RULE("comparison",()=>{this.SUBRULE(this.addition,{LABEL:"lhs"}),this.OPTION(()=>{this.OR([{ALT:()=>this.CONSUME(P,{LABEL:"ops"})},{ALT:()=>this.CONSUME(b,{LABEL:"ops"})},{ALT:()=>this.CONSUME(I,{LABEL:"ops"})},{ALT:()=>this.CONSUME(x,{LABEL:"ops"})},{ALT:()=>this.CONSUME(_,{LABEL:"ops"})},{ALT:()=>this.CONSUME(F,{LABEL:"ops"})},{ALT:()=>this.CONSUME(D,{LABEL:"ops"})},{ALT:()=>this.CONSUME(j,{LABEL:"ops"})}]),this.SUBRULE1(this.addition,{LABEL:"rhs"});});});addition=this.RULE("addition",()=>{this.SUBRULE(this.multiplication,{LABEL:"lhs"}),this.MANY(()=>{this.OR([{ALT:()=>this.CONSUME(k,{LABEL:"ops"})},{ALT:()=>this.CONSUME(R,{LABEL:"ops"})}]),this.SUBRULE1(this.multiplication,{LABEL:"rhs"});});});multiplication=this.RULE("multiplication",()=>{this.SUBRULE(this.unaryExpression,{LABEL:"lhs"}),this.MANY(()=>{this.OR([{ALT:()=>this.CONSUME(Q,{LABEL:"ops"})},{ALT:()=>this.CONSUME(V,{LABEL:"ops"})}]),this.SUBRULE1(this.unaryExpression,{LABEL:"rhs"});});});unaryExpression=this.RULE("unaryExpression",()=>{this.OPTION(()=>{this.OR([{ALT:()=>this.CONSUME(R,{LABEL:"sign"})},{ALT:()=>this.CONSUME(Y,{LABEL:"sign"})}]);}),this.SUBRULE(this.atomic);});atomic=this.RULE("atomic",()=>{this.OR([{ALT:()=>this.SUBRULE(this.literal)},{GATE:()=>this.LA(2).tokenType===u,ALT:()=>this.SUBRULE(this.functionCall)},{ALT:()=>this.SUBRULE(this.anyIdentifier)},{ALT:()=>{this.CONSUME(u),this.SUBRULE(this.expression),this.CONSUME(c);}}]);});functionCall=this.RULE("functionCall",()=>{this.OR([{ALT:()=>this.CONSUME(h,{LABEL:"name"})},{ALT:()=>this.CONSUME(A,{LABEL:"name"})}]),this.CONSUME(u),this.MANY_SEP({SEP:O,DEF:()=>{this.SUBRULE(this.expression,{LABEL:"args"});}}),this.CONSUME(c);});sectionRule=this.RULE("sectionRule",()=>{this.CONSUME(T),this.OPTION(()=>{this.CONSUME(C);}),this.SUBRULE(this.anyIdentifier,{LABEL:"sectionName"}),this.CONSUME(u),this.OPTION1(()=>{this.CONSUME(L,{LABEL:"subqueryFrom"}),this.SUBRULE(this.typeFormat,{LABEL:"subquerySourceType"}),this.CONSUME(S,{LABEL:"subqueryTo"}),this.SUBRULE1(this.typeFormat,{LABEL:"subqueryTargetType"}),this.OPTION2(()=>{this.CONSUME(d,{LABEL:"subqueryTransform"});});}),this.MANY(()=>{this.SUBRULE(this.action);}),this.CONSUME(c),this.OPTION3(()=>{this.CONSUME1(L,{LABEL:"followFrom"}),this.SUBRULE2(this.anyIdentifier,{LABEL:"followPath"});});});defineRule=this.RULE("defineRule",()=>{this.CONSUME(q),this.SUBRULE(this.anyIdentifier,{LABEL:"left"}),this.CONSUME(y),this.SUBRULE(this.expression,{LABEL:"right"});})},E=new H;var rt={substring:r=>{if(r.length<2)throw new Error("substring() requires at least 2 arguments (string, start, [length])");let[t,e,i]=r;return i!==void 0?`String(${t}).slice(${e}, (${e}) + (${i}))`:`String(${t}).slice(${e})`},if:r=>{if(r.length!==3)throw new Error("if() requires exactly 3 arguments (condition, trueValue, falseValue)");let[t,e,i]=r;return `((${t}) ? (${e}) : (${i}))`},text:r=>{if(r.length!==1)throw new Error("text() requires exactly 1 argument (string or number)");let[t]=r;return `String(${t})`},replace:r=>{if(r.length!==3)throw new Error("replace() requires exactly 3 arguments (string, search, replacement)");let[t,e,i]=r;return `String(${t}).replace(${e}, ${i})`},number:r=>{if(r.length!==1)throw new Error("number() requires exactly 1 argument (string)");let[t]=r;return `Number(${t})`},extractnumber:r=>{if(r.length!==1)throw new Error("extractNumber() requires exactly 1 argument (string)");let[t]=r;return `Number(String(${t}).match(/\\d+(\\.\\d+)?/)[0])`},uppercase:r=>{if(r.length!==1)throw new Error("uppercase() requires exactly 1 argument (string)");let[t]=r;return `String(${t}).toUpperCase()`},lowercase:r=>{if(r.length!==1)throw new Error("lowercase() requires exactly 1 argument (string)");let[t]=r;return `String(${t}).toLowerCase()`},xmlnode:r=>{if(r.length<1)throw new Error("xmlnode() requires at least 1 argument (string)");let t=r[0],e=[...r.slice(1)],i="";if(e.length>0){let[s,a]=[e,2];s=[...Array(Math.ceil(s.length/a))].map(o=>s.splice(0,a)).map(([o,l])=>{let p=o;return o.startsWith('"')||o.startsWith("'")?p=`"$${o.slice(1,-1)}"`:p=`["$"+${o}]`,`${p}:${l||"null"}`}),i=","+s.join(",");}else return t;return `{_:${t}${i}}`},split:r=>{if(r.length<1)throw new Error("split() requires at least 1 argument (string)");let[t,e,i]=r,s=e!==void 0?e:'""',a=i!==void 0?`, ${i}`:"";return `String(${t}).split(${s}${a})`},to_base64:r=>{if(r.length!==1)throw new Error("to_base64() requires exactly 1 argument (string)");let[t]=r;return `(typeof btoa === 'function' ? btoa(unescape(encodeURIComponent(String(${t})))) : Buffer.from(String(${t}), 'utf-8').toString('base64'))`},from_base64:r=>{if(r.length!==1)throw new Error("from_base64() requires exactly 1 argument (string)");let[t]=r;return `(typeof atob === 'function' ? decodeURIComponent(escape(atob(String(${t})))) : Buffer.from(String(${t}), 'base64').toString('utf-8'))`},aslist:r=>{if(r.length!==1)throw new Error("aslist() requires exactly 1 argument");let[t]=r;return `(Array.isArray(${t}) ? ${t} : (${t} == null ? [] : [${t}]))`}};var ct=E.getBaseCstVisitorConstructor(),J=class extends ct{constructor(){super(),this.validateVisitor();}query(t){let e=t.action?t.action.map(m=>this.visit(m)):[];t.Transform||e.push("Object.assign(target, source);");let i=this.visit(t.sourceType),s=this.visit(t.targetType),a=i.name,o=s.name,l=s.parameter?`'${s.parameter}'`:"undefined";return {code:`
      return function(input, env) {
        // 1. Parse Input
        const source = env.parse('${a}', input);
        
        // 2. Transform
        const target = {};
        ${e.join(`
        `)}

        // 3. Serialize Output
        return env.serialize('${o}', target ${l!=="undefined"?`, { rootGenerated: ${l} }`:""} );
      }
    `,sourceType:i,targetType:s}}typeFormat(t){let e=this.visit(t.name),i;return t.parameter&&(i=t.parameter[0].image.slice(1,-1)),{name:e.name,parameter:i}}genAccess(t,e){return e.quoted||e.name.includes("-")&&!e.name.includes(".")&&!e.name.includes("[")?`${t}["${e.name}"]`:`${t}.${e.name}`}anyIdentifier(t){if(t.Identifier)return {name:t.Identifier[0].image,quoted:false};if(t.QuotedIdentifier)return {name:t.QuotedIdentifier[0].image.slice(1,-1).replace(/\\(.)/g,"$1"),quoted:true}}literal(t){if(t.StringLiteral)return t.StringLiteral[0].image;if(t.NumericLiteral)return t.NumericLiteral[0].image}action(t){if(t.setRule)return this.visit(t.setRule);if(t.sectionRule)return this.visit(t.sectionRule);if(t.cloneRule)return this.visit(t.cloneRule);if(t.ifAction)return this.visit(t.ifAction);if(t.deleteRule)return this.visit(t.deleteRule);if(t.defineRule)return this.visit(t.defineRule)}deleteRule(t){let e=this.visit(t.field);return `delete ${this.genAccess("target",e)};`}ifAction(t){let e=this.visit(t.condition),i=t.thenActions?t.thenActions.map(a=>this.visit(a)).join(`
`):"",s=t.elseActions?`else { ${t.elseActions.map(a=>this.visit(a)).join(`
`)} }`:"";return `if (${e}) {
       ${i}
     } ${s}`}cloneRule(t){return t.fields?t.fields.map(i=>this.visit(i)).map(i=>`${this.genAccess("target",i)} = ${this.genAccess("source",i)};`).join(`
        `):"Object.assign(target, source);"}setRule(t){let e=this.visit(t.left),i=this.visit(t.right);return `${this.genAccess("target",e)} = ${i};`}defineRule(t){let e=this.visit(t.left),i=this.visit(t.right);return `${this.genAccess("source",e)} = ${i};`}expression(t){return this.visit(t.logicalOr)}logicalOr(t){let e=this.visit(t.lhs);if(t.rhs)for(let i=0;i<t.rhs.length;i++){let s=this.visit(t.rhs[i]);e=`${e} || ${s}`;}return e}logicalAnd(t){let e=this.visit(t.lhs);if(t.rhs)for(let i=0;i<t.rhs.length;i++){let s=this.visit(t.rhs[i]);e=`${e} && ${s}`;}return e}comparison(t){let e=this.visit(t.lhs);if(t.rhs){let i=t.ops[0].image,s=this.visit(t.rhs[0]);e=`${e} ${i} ${s}`;}return e}addition(t){let e=this.visit(t.lhs);if(t.rhs)for(let i=0;i<t.rhs.length;i++){let s=t.ops[i].image,a=this.visit(t.rhs[i]);e=`${e} ${s} ${a}`;}return e}multiplication(t){let e=this.visit(t.lhs);if(t.rhs)for(let i=0;i<t.rhs.length;i++){let s=t.ops[i].image,a=this.visit(t.rhs[i]);e=`${e} ${s} ${a}`;}return e}unaryExpression(t){let e=this.visit(t.atomic);return t.sign?`${t.sign[0].image}${e}`:e}atomic(t){if(t.literal)return this.visit(t.literal);if(t.functionCall)return this.visit(t.functionCall);if(t.anyIdentifier){let e=this.visit(t.anyIdentifier);return ["true","false","null"].includes(e.name)&&!e.quoted?e.name:this.genAccess("source",e)}if(t.expression)return `(${this.visit(t.expression)})`}functionCall(t){let e=t.name[0].image,i=(e.startsWith("`")?e.slice(1,-1):e).toLowerCase(),s=t.args?t.args.map(o=>this.visit(o)):[],a=rt[i];if(a)return a(s);throw new Error(`Unknown function: ${e}`)}sectionRule(t){let e=this.visit(t.sectionName);e.name;let s=this.genAccess("target",e),a=t.followPath?this.visit(t.followPath):e;a.name==="parent"?"":"."+a.name;let l=a.name==="parent"?"source":this.genAccess("source",a),p=!!t.Multiple,m=t.action?t.action.map(f=>this.visit(f)):[];if(!!t.subqueryFrom){let f=this.visit(t.subquerySourceType),g=this.visit(t.subqueryTargetType);t.subqueryTransform||m.push("Object.assign(target, source);");let tt=g.parameter?`, { rootGenerated: "${g.parameter}" }`:"";return p?`
        if (${l} && Array.isArray(${l})) {
          ${s} = ${l}.map(item => {
            const subSource = env.parse('${f.name}', item);
            const source = subSource;
            const target = {};
            ${m.join(`
            `)}
            return env.serialize('${g.name}', target${tt});
          });
        }
        `:`
        if (${l}) {
          ${s} = (function(innerSource) {
            const subSource = env.parse('${f.name}', innerSource);
            const source = subSource;
            const target = {};
            ${m.join(`
            `)}
            return env.serialize('${g.name}', target${tt});
          })(${l});
        }
        `}return p?`
      if (${l} && Array.isArray(${l})) {
        ${s} = ${l}.map(item => {
          const source = item;
          const target = {};
          ${m.join(`
          `)}
          return target;
        });
      }
      `:`
      if (${l}) {
        ${s} = (function(innerSource) {
          const source = innerSource;
          const target = {};
          ${m.join(`
          `)}
          return target;
        })(${l});
      }
      `}},it=new J;var st={};function X(r,t){st[r.toLowerCase()]=t;}function Z(r){let t=st[r.toLowerCase()];if(!t)throw new Error(`No adapter found for format: ${r}`);return t}X("json",{parse:r=>typeof r!="string"?r:JSON.parse(r),serialize:r=>JSON.stringify(r,null,2)});var Et=new Builder({ignoreAttributes:false,attributeNamePrefix:"$",textNodeName:"_",format:true});X("xml",{parse:r=>typeof r!="string"?r:new XMLParser({ignoreAttributes:false,removeNSPrefix:true}).parse(r),serialize:(r,t)=>{let e=t?.rootGenerated??"root";return Et.build({[e]:r})}});X("object",{parse:r=>r,serialize:r=>r});async function qt(r,t){let e=et.tokenize(r);if(e.errors.length>0)throw new Error(`Lexing errors: ${e.errors[0].message}`);E.input=e.tokens;let i=E.query();if(E.errors.length>0)throw new Error(`Parsing errors: ${E.errors[0].message}`);let{code:s}=it.visit(i),a=Lt.js(s,{indent_size:2,space_in_empty_paren:true,end_with_newline:true});return nt(a)}function nt(r){let e=new Function(r)(),i={parse:(a,o)=>Z(a).parse(o),serialize:(a,o,l)=>Z(a).serialize(o,l)},s=(a=>e(a,i));return s.code=r,s}

class MorphQLDiagnosticProvider {
    constructor() {
        this.diagnosticCollection =
            vscode__namespace.languages.createDiagnosticCollection("mql");
    }
    activate(context) {
        // Listen to document changes
        context.subscriptions.push(vscode__namespace.workspace.onDidChangeTextDocument((event) => {
            if (event.document.languageId === "mql") {
                this.scheduleValidation(event.document);
            }
        }));
        // Listen to document open
        context.subscriptions.push(vscode__namespace.workspace.onDidOpenTextDocument((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        }));
        // Listen to document save
        context.subscriptions.push(vscode__namespace.workspace.onDidSaveTextDocument((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        }));
        // Validate all open MorphQL documents
        vscode__namespace.workspace.textDocuments.forEach((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        });
        context.subscriptions.push(this.diagnosticCollection);
    }
    scheduleValidation(document) {
        // Debounce validation to avoid running on every keystroke
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.validateDocument(document);
        }, 500); // 500ms debounce
    }
    async validateDocument(document) {
        const diagnostics = [];
        try {
            // Try to compile the document
            await qt(document.getText());
            // If successful, clear diagnostics
            this.diagnosticCollection.set(document.uri, []);
        }
        catch (error) {
            // Parse error and create diagnostic
            const diagnostic = this.createDiagnostic(error, document);
            if (diagnostic) {
                diagnostics.push(diagnostic);
            }
            this.diagnosticCollection.set(document.uri, diagnostics);
        }
    }
    createDiagnostic(error, document) {
        const message = error.message || String(error);
        let range;
        let line = 0;
        let column = 0;
        let found = false;
        // Try to extract position from Chevrotain token if available
        if (error.token) {
            if (error.token.startLine !== undefined) {
                line = error.token.startLine - 1; // Convert to 0-indexed
                column =
                    error.token.startColumn !== undefined
                        ? error.token.startColumn - 1
                        : 0;
                found = true;
            }
        }
        // Fallback: Try to extract from error message
        if (!found) {
            const lineMatch = message.match(/line[:\s]+(\d+)/i);
            const columnMatch = message.match(/column[:\s]+(\d+)/i);
            if (lineMatch) {
                line = parseInt(lineMatch[1], 10) - 1;
                column = columnMatch ? parseInt(columnMatch[1], 10) - 1 : 0;
                found = true;
            }
        }
        // Fallback: Look for "at offset" or similar patterns
        if (!found) {
            const offsetMatch = message.match(/offset[:\s]+(\d+)/i);
            if (offsetMatch) {
                const offset = parseInt(offsetMatch[1], 10);
                const pos = document.positionAt(offset);
                line = pos.line;
                column = pos.character;
                found = true;
            }
        }
        // Create range
        if (found && line < document.lineCount) {
            const lineText = document.lineAt(line).text;
            // Try to highlight the problematic token
            let endColumn = column;
            // If we have token info, use its length
            if (error.token && error.token.image) {
                endColumn = column + error.token.image.length;
            }
            else {
                // Otherwise, highlight next word or 10 chars
                const remainingText = lineText.substring(column);
                const wordMatch = remainingText.match(/^\S+/);
                endColumn =
                    column +
                        (wordMatch
                            ? wordMatch[0].length
                            : Math.min(10, remainingText.length));
            }
            range = new vscode__namespace.Range(new vscode__namespace.Position(line, column), new vscode__namespace.Position(line, Math.min(endColumn, lineText.length)));
        }
        else {
            // Last resort: highlight first line
            range = new vscode__namespace.Range(new vscode__namespace.Position(0, 0), new vscode__namespace.Position(0, Math.min(10, document.lineAt(0).text.length)));
        }
        return new vscode__namespace.Diagnostic(range, message, vscode__namespace.DiagnosticSeverity.Error);
    }
    dispose() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.diagnosticCollection.dispose();
    }
}

// src/keywords.ts
var KEYWORDS = [
  {
    name: "from",
    category: "control",
    doc: {
      signature: "from <format>",
      description: "Specifies the input data format.",
      parameters: [
        {
          name: "format",
          description: "If used as first keyword: The starting format, one of `json`, `xml`, or `object`. When used after a section, defines its source"
        }
      ],
      example: "from json to xml"
    }
  },
  {
    name: "to",
    category: "control",
    doc: {
      signature: "to <format>",
      description: "Specifies the output data format.",
      parameters: [
        { name: "format", description: "One of: `json`, `xml`, or `object`" }
      ],
      example: "from json to xml"
    }
  },
  {
    name: "transform",
    category: "control",
    doc: {
      signature: "transform",
      description: "Begins the transformation block containing actions.",
      example: "transform\n  set name = firstName"
    }
  },
  {
    name: "set",
    category: "action",
    doc: {
      signature: "set <target> = <expression>",
      description: "Assigns a value to a field in the output.",
      parameters: [
        { name: "target", description: "The field name to set" },
        {
          name: "expression",
          description: "The value or expression to assign"
        }
      ],
      example: 'set fullName = firstName + " " + lastName'
    }
  },
  {
    name: "section",
    category: "action",
    doc: {
      signature: "section [multiple] <name>( [subquery] <actions> ) [from <path>]",
      description: "Creates a nested object or array in the output. Can optionally include a subquery for format conversion.",
      parameters: [
        { name: "multiple", description: "(Optional) Treat as array mapping" },
        { name: "name", description: "The section/field name" },
        {
          name: "subquery",
          description: "(Optional) Nested query: from <format> to <format> [transform]"
        },
        {
          name: "actions",
          description: "Actions to perform within the section"
        },
        {
          name: "from",
          description: "(Optional) Source path for the section data"
        }
      ],
      example: "section metadata(\n  from xml to object\n  transform\n    set name = root.productName\n) from xmlString"
    }
  },
  {
    name: "multiple",
    category: "action",
    doc: {
      signature: "section multiple <name>(...)",
      description: "Modifier for `section` to map over an array.",
      example: "section multiple items(\n  set id = itemId\n) from products"
    }
  },
  {
    name: "clone",
    category: "action",
    doc: {
      signature: "clone([field1, field2, ...])",
      description: "Copies fields from the source to the output.",
      parameters: [
        {
          name: "fields",
          description: "(Optional) Specific fields to clone. If omitted, clones all fields."
        }
      ],
      example: "clone(id, name, email)"
    }
  },
  {
    name: "delete",
    category: "action",
    doc: {
      signature: "delete <field>",
      description: "Removes a field from the output (useful after `clone`).",
      parameters: [{ name: "field", description: "The field name to delete" }],
      example: "clone()\ndelete password"
    }
  },
  {
    name: "define",
    category: "action",
    doc: {
      signature: "define <alias> = <expression>",
      description: "Creates a local variable/alias for use in subsequent expressions.",
      parameters: [
        { name: "alias", description: "The variable name" },
        { name: "expression", description: "The value to assign" }
      ],
      example: "define taxRate = 0.22\nset totalWithTax = total * (1 + taxRate)"
    }
  },
  {
    name: "if",
    category: "control",
    doc: {
      signature: "if (condition) ( actions ) [else ( actions )]",
      description: "Conditional execution of action blocks.",
      parameters: [
        { name: "condition", description: "Boolean expression" },
        { name: "actions", description: "Actions to execute if true/false" }
      ],
      example: 'if (age >= 18) (\n  set status = "adult"\n) else (\n  set status = "minor"\n)'
    }
  },
  {
    name: "else",
    category: "control",
    doc: {
      signature: "else ( actions )",
      description: "Defines the else branch of an `if` statement.",
      example: "if (condition) (\n  ...\n) else (\n  ...\n)"
    }
  }
];

// src/functions.ts
var FUNCTIONS = [
  {
    name: "substring",
    doc: {
      signature: "substring(str, start, [length])",
      description: "Extracts a portion of a string. Supports negative indices.",
      parameters: [
        { name: "str", description: "The source string" },
        {
          name: "start",
          description: "Starting index (0-based, negative counts from end)"
        },
        {
          name: "length",
          description: "(Optional) Number of characters to extract"
        }
      ],
      returns: "string",
      example: 'substring("Hello World", 0, 5)  // "Hello"\nsubstring("Hello World", -5)     // "World"'
    }
  },
  {
    name: "split",
    doc: {
      signature: "split(str, [separator], [limit])",
      description: "Splits a string into an array.",
      parameters: [
        { name: "str", description: "The string to split" },
        {
          name: "separator",
          description: '(Optional) Delimiter string. Default: ""'
        },
        { name: "limit", description: "(Optional) Maximum number of splits" }
      ],
      returns: "array",
      example: 'split("a,b,c", ",")  // ["a", "b", "c"]'
    }
  },
  {
    name: "replace",
    doc: {
      signature: "replace(str, search, replacement)",
      description: "Replaces occurrences in a string.",
      parameters: [
        { name: "str", description: "The source string" },
        { name: "search", description: "The substring to find" },
        { name: "replacement", description: "The replacement string" }
      ],
      returns: "string",
      example: 'replace("Hello World", "World", "MorphQL")  // "Hello MorphQL"'
    }
  },
  {
    name: "text",
    doc: {
      signature: "text(value)",
      description: "Converts a value to a string.",
      parameters: [{ name: "value", description: "The value to convert" }],
      returns: "string",
      example: 'text(123)  // "123"'
    }
  },
  {
    name: "number",
    doc: {
      signature: "number(value)",
      description: "Converts a value to a number.",
      parameters: [{ name: "value", description: "The value to convert" }],
      returns: "number",
      example: 'number("42")  // 42'
    }
  },
  {
    name: "uppercase",
    doc: {
      signature: "uppercase(str)",
      description: "Converts a string to uppercase.",
      parameters: [{ name: "str", description: "The string to convert" }],
      returns: "string",
      example: 'uppercase("hello")  // "HELLO"'
    }
  },
  {
    name: "lowercase",
    doc: {
      signature: "lowercase(str)",
      description: "Converts a string to lowercase.",
      parameters: [{ name: "str", description: "The string to convert" }],
      returns: "string",
      example: 'lowercase("HELLO")  // "hello"'
    }
  },
  {
    name: "extractnumber",
    doc: {
      signature: "extractnumber(str)",
      description: "Extracts the first numeric sequence from a string.",
      parameters: [{ name: "str", description: "The string to extract from" }],
      returns: "number",
      example: 'extractnumber("Price: 100USD")  // 100'
    }
  },
  {
    name: "xmlnode",
    doc: {
      signature: "xmlnode(value, [attrKey, attrVal, ...])",
      description: "Wraps a value for XML output with optional attributes.",
      parameters: [
        { name: "value", description: "The node content" },
        {
          name: "attrKey, attrVal",
          description: "(Optional) Pairs of attribute keys and values"
        }
      ],
      returns: "XML node",
      example: 'xmlnode(content, "id", 1, "type", "text")'
    }
  },
  {
    name: "to_base64",
    doc: {
      signature: "to_base64(value)",
      description: "Encodes a string value to Base64.",
      parameters: [{ name: "value", description: "The string to encode" }],
      returns: "string",
      example: 'to_base64("hello")  // "aGVsbG8="'
    }
  },
  {
    name: "from_base64",
    doc: {
      signature: "from_base64(value)",
      description: "Decodes a Base64 string value.",
      parameters: [
        { name: "value", description: "The Base64 string to decode" }
      ],
      returns: "string",
      example: 'from_base64("aGVsbG8=")  // "hello"'
    }
  },
  {
    name: "aslist",
    doc: {
      signature: "aslist(value)",
      description: "Ensures a value is an array. Useful for XML nodes that might be a single object or an array.",
      parameters: [{ name: "value", description: "The value to normalize" }],
      returns: "array",
      example: "aslist(items)  // Always returns an array"
    }
  }
];
function generateHoverDocs() {
  const keywordDocs = {};
  KEYWORDS.forEach((k) => {
    keywordDocs[k.name] = k.doc;
  });
  const functionDocs = {};
  FUNCTIONS.forEach((f) => {
    functionDocs[f.name] = f.doc;
  });
  return { keywordDocs, functionDocs };
}

const { keywordDocs, functionDocs } = generateHoverDocs();
class MorphQLHoverProvider {
    provideHover(document, position, token) {
        const range = document.getWordRangeAtPosition(position);
        if (!range) {
            return null;
        }
        const word = document.getText(range);
        // Check if it's a keyword
        const keywordDoc = keywordDocs[word.toLowerCase()];
        if (keywordDoc) {
            return new vscode__namespace.Hover(this.formatDocumentation(keywordDoc), range);
        }
        // Check if it's a function
        const functionDoc = functionDocs[word.toLowerCase()];
        if (functionDoc) {
            return new vscode__namespace.Hover(this.formatDocumentation(functionDoc), range);
        }
        return null;
    }
    formatDocumentation(doc) {
        const md = new vscode__namespace.MarkdownString();
        md.isTrusted = true;
        // Signature
        md.appendCodeblock(doc.signature, "mql");
        // Description
        md.appendMarkdown(doc.description);
        md.appendMarkdown("\n\n");
        // Parameters
        if (doc.parameters && doc.parameters.length > 0) {
            md.appendMarkdown("**Parameters:**\n\n");
            doc.parameters.forEach((param) => {
                md.appendMarkdown(`- \`${param.name}\`: ${param.description}\n`);
            });
            md.appendMarkdown("\n");
        }
        // Returns
        if (doc.returns) {
            md.appendMarkdown(`**Returns:** \`${doc.returns}\`\n\n`);
        }
        // Example
        if (doc.example) {
            md.appendMarkdown("**Example:**\n\n");
            md.appendCodeblock(doc.example, "mql");
        }
        return md;
    }
}

let outputChannel;
function activate(context) {
    console.log("MorphQL extension is now active");
    // Create output channel for results
    outputChannel = vscode__namespace.window.createOutputChannel("MorphQL Output");
    // Register diagnostic provider
    const diagnosticProvider = new MorphQLDiagnosticProvider();
    diagnosticProvider.activate(context);
    // Register hover provider
    const hoverProvider = new MorphQLHoverProvider();
    context.subscriptions.push(vscode__namespace.languages.registerHoverProvider("mql", hoverProvider));
    // Register command: Execute with input data
    const executeWithInput = vscode__namespace.commands.registerCommand("mql.executeWithInput", async () => {
        const editor = vscode__namespace.window.activeTextEditor;
        if (!editor || editor.document.languageId !== "mql") {
            vscode__namespace.window.showErrorMessage("Please open an MorphQL file first");
            return;
        }
        const query = editor.document.getText();
        // Ask user for input data
        const inputData = await vscode__namespace.window.showInputBox({
            prompt: "Enter input data (JSON, XML, or leave empty for empty object)",
            placeHolder: '{"firstName": "John", "lastName": "Doe"}',
            ignoreFocusOut: true,
            validateInput: (value) => {
                if (!value)
                    return null; // Empty is OK
                try {
                    // Try to parse as JSON first
                    JSON.parse(value);
                    return null;
                }
                catch {
                    // If not JSON, assume it's XML (will be validated during execution)
                    if (value.trim().startsWith("<")) {
                        return null;
                    }
                    return "Invalid input: must be valid JSON or XML";
                }
            },
        });
        if (inputData === undefined) {
            return; // User cancelled
        }
        await executeQuery(query, inputData || "{}");
    });
    // Register command: Execute with clipboard data
    const executeFromClipboard = vscode__namespace.commands.registerCommand("mql.executeFromClipboard", async () => {
        const editor = vscode__namespace.window.activeTextEditor;
        if (!editor || editor.document.languageId !== "mql") {
            vscode__namespace.window.showErrorMessage("Please open an MorphQL file first");
            return;
        }
        const query = editor.document.getText();
        const clipboardData = await vscode__namespace.env.clipboard.readText();
        if (!clipboardData) {
            vscode__namespace.window.showWarningMessage("Clipboard is empty");
            return;
        }
        await executeQuery(query, clipboardData);
    });
    // Register command: Execute selection (for embedded queries)
    const executeSelection = vscode__namespace.commands.registerCommand("mql.executeSelection", async () => {
        const editor = vscode__namespace.window.activeTextEditor;
        if (!editor) {
            vscode__namespace.window.showErrorMessage("No active editor");
            return;
        }
        // Get selected text or try to extract from tagged template
        let query = "";
        const selection = editor.selection;
        if (!selection.isEmpty) {
            // User has selected text
            query = editor.document.getText(selection);
        }
        else {
            vscode__namespace.window.showErrorMessage("Please select the MorphQL query text to execute");
            return;
        }
        // Ask for input data
        const inputData = await vscode__namespace.window.showInputBox({
            prompt: "Enter input data (JSON, XML, or leave empty for empty object)",
            placeHolder: '{"firstName": "John", "lastName": "Doe"}',
            ignoreFocusOut: true,
            validateInput: (value) => {
                if (!value)
                    return null;
                try {
                    JSON.parse(value);
                    return null;
                }
                catch {
                    if (value.trim().startsWith("<")) {
                        return null;
                    }
                    return "Invalid input: must be valid JSON or XML";
                }
            },
        });
        if (inputData === undefined) {
            return;
        }
        await executeQuery(query, inputData || "{}");
    });
    context.subscriptions.push(executeWithInput, executeFromClipboard, executeSelection, outputChannel);
}
async function executeQuery(query, inputData) {
    try {
        outputChannel.clear();
        outputChannel.show(true);
        outputChannel.appendLine("=".repeat(60));
        outputChannel.appendLine("MorphQL Execution Started");
        outputChannel.appendLine("=".repeat(60));
        outputChannel.appendLine("");
        outputChannel.appendLine("Query:");
        outputChannel.appendLine(query);
        outputChannel.appendLine("");
        outputChannel.appendLine("Input Data:");
        outputChannel.appendLine(inputData);
        outputChannel.appendLine("");
        outputChannel.appendLine("-".repeat(60));
        outputChannel.appendLine("");
        // Compile and execute
        const startTime = Date.now();
        const engine = await qt(query);
        const compileTime = Date.now() - startTime;
        const execStartTime = Date.now();
        const result = engine(inputData);
        const execTime = Date.now() - execStartTime;
        outputChannel.appendLine("✅ Execution Successful!");
        outputChannel.appendLine("");
        outputChannel.appendLine(`Compile Time: ${compileTime}ms`);
        outputChannel.appendLine(`Execution Time: ${execTime}ms`);
        outputChannel.appendLine("");
        outputChannel.appendLine("Result:");
        // Format result for better readability
        if (typeof result === "string") {
            // If result is XML or already formatted, show as-is
            if (result.trim().startsWith("<")) {
                outputChannel.appendLine(formatXml(result));
            }
            else {
                // Try to parse and format as JSON
                try {
                    const parsed = JSON.parse(result);
                    outputChannel.appendLine(JSON.stringify(parsed, null, 2));
                }
                catch {
                    outputChannel.appendLine(result);
                }
            }
        }
        else {
            // Object result, format as JSON
            outputChannel.appendLine(JSON.stringify(result, null, 2));
        }
        outputChannel.appendLine("");
        outputChannel.appendLine("=".repeat(60));
        // Show success message
        vscode__namespace.window.showInformationMessage(`MorphQL executed successfully in ${compileTime + execTime}ms`);
    }
    catch (error) {
        outputChannel.appendLine("");
        outputChannel.appendLine("❌ Execution Failed!");
        outputChannel.appendLine("");
        outputChannel.appendLine("Error:");
        outputChannel.appendLine(error.message || String(error));
        if (error.stack) {
            outputChannel.appendLine("");
            outputChannel.appendLine("Stack Trace:");
            outputChannel.appendLine(error.stack);
        }
        outputChannel.appendLine("");
        outputChannel.appendLine("=".repeat(60));
        vscode__namespace.window.showErrorMessage(`MorphQL execution failed: ${error.message}`);
    }
}
function formatXml(xml) {
    // Simple XML formatting
    let formatted = "";
    let indent = 0;
    const lines = xml.split(/>\s*</);
    lines.forEach((line, i) => {
        if (i > 0)
            line = "<" + line;
        if (i < lines.length - 1)
            line = line + ">";
        if (line.match(/^<\/\w/))
            indent--;
        formatted += "  ".repeat(Math.max(0, indent)) + line + "\n";
        if (line.match(/^<\w[^>]*[^\/]>$/))
            indent++;
    });
    return formatted.trim();
}
function deactivate() {
    if (outputChannel) {
        outputChannel.dispose();
    }
}

exports.activate = activate;
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
