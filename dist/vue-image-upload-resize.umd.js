(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-image-upload-resize"] = factory(require("vue"));
	else
		root["vue-image-upload-resize"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__9274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3757:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(6573);
__webpack_require__(8100);
__webpack_require__(7936);
__webpack_require__(7467);
__webpack_require__(4732);
__webpack_require__(9577);
__webpack_require__(4979);
/*
 * JavaScript Canvas to Blob
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/* global define, Uint8Array, ArrayBuffer, module */

;
(function (window) {
  'use strict';

  var CanvasPrototype = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;
  var hasBlobConstructor = window.Blob && function () {
    try {
      return Boolean(new Blob());
    } catch (e) {
      return false;
    }
  }();
  var hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && function () {
    try {
      return new Blob([new Uint8Array(100)]).size === 100;
    } catch (e) {
      return false;
    }
  }();
  var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
  var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array && function (dataURI) {
    var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb;
    // Parse the dataURI components as per RFC 2397
    matches = dataURI.match(dataURIPattern);
    if (!matches) {
      throw new Error('invalid data URI');
    }
    // Default to text/plain;charset=US-ASCII
    mediaType = matches[2] ? matches[1] : 'text/plain' + (matches[3] || ';charset=US-ASCII');
    isBase64 = !!matches[4];
    dataString = dataURI.slice(matches[0].length);
    if (isBase64) {
      // Convert base64 to raw binary data held in a string:
      byteString = atob(dataString);
    } else {
      // Convert base64/URLEncoded data component to raw binary:
      byteString = decodeURIComponent(dataString);
    }
    // Write the bytes of the string to an ArrayBuffer:
    arrayBuffer = new ArrayBuffer(byteString.length);
    intArray = new Uint8Array(arrayBuffer);
    for (i = 0; i < byteString.length; i += 1) {
      intArray[i] = byteString.charCodeAt(i);
    }
    // Write the ArrayBuffer (or ArrayBufferView) to a blob:
    if (hasBlobConstructor) {
      return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
        type: mediaType
      });
    }
    bb = new BlobBuilder();
    bb.append(arrayBuffer);
    return bb.getBlob(mediaType);
  };
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
            callback(dataURLtoBlob(self.toDataURL(type, quality)));
          } else {
            callback(self.mozGetAsFile('blob', type));
          }
        });
      };
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      if (CanvasPrototype.msToBlob) {
        CanvasPrototype.toBlob = function (callback, type, quality) {
          var self = this;
          setTimeout(function () {
            if ((type && type !== 'image/png' || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
              callback(dataURLtoBlob(self.toDataURL(type, quality)));
            } else {
              callback(self.msToBlob(type));
            }
          });
        };
      } else {
        CanvasPrototype.toBlob = function (callback, type, quality) {
          var self = this;
          setTimeout(function () {
            callback(dataURLtoBlob(self.toDataURL(type, quality)));
          });
        };
      }
    }
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dataURLtoBlob;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window);

/***/ }),

/***/ 5907:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 9274:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9274__;

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 3506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(1625);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 7811:
/***/ (function(module) {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ 7394:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__(6706);
var classof = __webpack_require__(4576);

var $TypeError = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ 3238:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var arrayBufferByteLength = __webpack_require__(7394);

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var uncurryThis = __webpack_require__(9504);
var uncurryThisAccessor = __webpack_require__(6706);
var toIndex = __webpack_require__(7696);
var isDetached = __webpack_require__(3238);
var arrayBufferByteLength = __webpack_require__(7394);
var detachTransferable = __webpack_require__(4483);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var ArrayBuffer = global.ArrayBuffer;
var DataView = global.DataView;
var TypeError = global.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ 4644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(7811);
var DESCRIPTORS = __webpack_require__(3724);
var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var hasOwn = __webpack_require__(9297);
var classof = __webpack_require__(6955);
var tryToString = __webpack_require__(6823);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineBuiltInAccessor = __webpack_require__(2106);
var isPrototypeOf = __webpack_require__(1625);
var getPrototypeOf = __webpack_require__(2787);
var setPrototypeOf = __webpack_require__(2967);
var wellKnownSymbol = __webpack_require__(8227);
var uid = __webpack_require__(3392);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ 5370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 7628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ 9928:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(6198);
var toIntegerOrInfinity = __webpack_require__(1291);

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(4576);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 2106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var tryNodeRequire = __webpack_require__(9714);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var $ArrayBuffer = global.ArrayBuffer;
var $MessageChannel = global.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 5002:
/***/ (function(module) {

"use strict";

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 7290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 516:
/***/ (function(module) {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 9088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var classof = __webpack_require__(4576);

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var userAgent = __webpack_require__(9392);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8727:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6193:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 4475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(4576);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var setPrototypeOf = __webpack_require__(2967);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(8622);
var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 1108:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3925:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 6395:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 2603:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toString = __webpack_require__(655);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 2787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4475);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 1548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var fails = __webpack_require__(9039);
var V8 = __webpack_require__(7388);
var IS_BROWSER = __webpack_require__(7290);
var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

var structuredClone = global.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7388);
var fails = __webpack_require__(9039);
var global = __webpack_require__(4475);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ 7696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);
var toLength = __webpack_require__(8014);

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 9714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_NODE = __webpack_require__(9088);

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 6823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6573:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var defineBuiltInAccessor = __webpack_require__(2106);
var isDetached = __webpack_require__(3238);

var ArrayBufferPrototype = ArrayBuffer.prototype;

if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ 7936:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ 8100:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


/***/ }),

/***/ 7467:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arrayToReversed = __webpack_require__(7628);
var ArrayBufferViewCore = __webpack_require__(4644);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ 4732:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(4644);
var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);
var arrayFromConstructorAndList = __webpack_require__(5370);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ 9577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arrayWith = __webpack_require__(9928);
var ArrayBufferViewCore = __webpack_require__(4644);
var isBigIntArray = __webpack_require__(1108);
var toIntegerOrInfinity = __webpack_require__(1291);
var toBigInt = __webpack_require__(5854);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


/***/ }),

/***/ 4979:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var global = __webpack_require__(4475);
var getBuiltIn = __webpack_require__(7751);
var createPropertyDescriptor = __webpack_require__(6980);
var defineProperty = (__webpack_require__(4913).f);
var hasOwn = __webpack_require__(9297);
var anInstance = __webpack_require__(679);
var inheritIfRequired = __webpack_require__(3167);
var normalizeStringArgument = __webpack_require__(2603);
var DOMExceptionConstants = __webpack_require__(5002);
var clearErrorStack = __webpack_require__(6193);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; },
  install: function() { return /* reexport */ install; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(9274);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ImageUploader.vue?vue&type=template&id=086078b4

const _hoisted_1 = ["src"];
const _hoisted_2 = ["id", "accept", "capture"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
    src: $data.imagePreview,
    class: "img-preview",
    width: "400"
  }, null, 8, _hoisted_1), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.imagePreview]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    id: $props.id,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)($props.className),
    type: "file",
    onChange: _cache[0] || (_cache[0] = (...args) => $options.uploadFile && $options.uploadFile(...args)),
    accept: $props.accept,
    capture: $props.capture,
    style: {
      "display": "none"
    }
  }, null, 42, _hoisted_2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")]);
}
;// CONCATENATED MODULE: ./src/components/ImageUploader.vue?vue&type=template&id=086078b4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(6573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(8100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(7936);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__(7467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__(4732);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(9577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(4979);
;// CONCATENATED MODULE: ./src/utils/exif.js







/**
  Adapted and simplified from https://github.com/exif-js/exif-js
  MIT License (c) Jacob Seidelin https://github.com/exif-js/exif-js/blob/master/LICENSE.md
*/

var debug = false;
var ExifTags = {
  // version tags
  0x9000: "ExifVersion",
  // EXIF version
  0xa000: "FlashpixVersion",
  // Flashpix format version

  // colorspace tags
  0xa001: "ColorSpace",
  // Color space information tag

  // image configuration
  0xa002: "PixelXDimension",
  // Valid width of meaningful image
  0xa003: "PixelYDimension",
  // Valid height of meaningful image
  0x9101: "ComponentsConfiguration",
  // Information about channels
  0x9102: "CompressedBitsPerPixel",
  // Compressed bits per pixel

  // user information
  0x927c: "MakerNote",
  // Any desired information written by the manufacturer
  0x9286: "UserComment",
  // Comments by user

  // related file
  0xa004: "RelatedSoundFile",
  // Name of related sound file

  // date and time
  0x9003: "DateTimeOriginal",
  // Date and time when the original image was generated
  0x9004: "DateTimeDigitized",
  // Date and time when the image was stored digitally
  0x9290: "SubsecTime",
  // Fractions of seconds for DateTime
  0x9291: "SubsecTimeOriginal",
  // Fractions of seconds for DateTimeOriginal
  0x9292: "SubsecTimeDigitized",
  // Fractions of seconds for DateTimeDigitized

  // picture-taking conditions
  0x829a: "ExposureTime",
  // Exposure time (in seconds)
  0x829d: "FNumber",
  // F number
  0x8822: "ExposureProgram",
  // Exposure program
  0x8824: "SpectralSensitivity",
  // Spectral sensitivity
  0x8827: "ISOSpeedRatings",
  // ISO speed rating
  0x8828: "OECF",
  // Optoelectric conversion factor
  0x9201: "ShutterSpeedValue",
  // Shutter speed
  0x9202: "ApertureValue",
  // Lens aperture
  0x9203: "BrightnessValue",
  // Value of brightness
  0x9204: "ExposureBias",
  // Exposure bias
  0x9205: "MaxApertureValue",
  // Smallest F number of lens
  0x9206: "SubjectDistance",
  // Distance to subject in meters
  0x9207: "MeteringMode",
  // Metering mode
  0x9208: "LightSource",
  // Kind of light source
  0x9209: "Flash",
  // Flash status
  0x9214: "SubjectArea",
  // Location and area of main subject
  0x920a: "FocalLength",
  // Focal length of the lens in mm
  0xa20b: "FlashEnergy",
  // Strobe energy in BCPS
  0xa20c: "SpatialFrequencyResponse",
  //
  0xa20e: "FocalPlaneXResolution",
  // Number of pixels in width direction per FocalPlaneResolutionUnit
  0xa20f: "FocalPlaneYResolution",
  // Number of pixels in height direction per FocalPlaneResolutionUnit
  0xa210: "FocalPlaneResolutionUnit",
  // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
  0xa214: "SubjectLocation",
  // Location of subject in image
  0xa215: "ExposureIndex",
  // Exposure index selected on camera
  0xa217: "SensingMethod",
  // Image sensor type
  0xa300: "FileSource",
  // Image source (3 == DSC)
  0xa301: "SceneType",
  // Scene type (1 == directly photographed)
  0xa302: "CFAPattern",
  // Color filter array geometric pattern
  0xa401: "CustomRendered",
  // Special processing
  0xa402: "ExposureMode",
  // Exposure mode
  0xa403: "WhiteBalance",
  // 1 = auto white balance, 2 = manual
  0xa404: "DigitalZoomRation",
  // Digital zoom ratio
  0xa405: "FocalLengthIn35mmFilm",
  // Equivalent foacl length assuming 35mm film camera (in mm)
  0xa406: "SceneCaptureType",
  // Type of scene
  0xa407: "GainControl",
  // Degree of overall image gain adjustment
  0xa408: "Contrast",
  // Direction of contrast processing applied by camera
  0xa409: "Saturation",
  // Direction of saturation processing applied by camera
  0xa40a: "Sharpness",
  // Direction of sharpness processing applied by camera
  0xa40b: "DeviceSettingDescription",
  //
  0xa40c: "SubjectDistanceRange",
  // Distance to subject

  // other tags
  0xa005: "InteroperabilityIFDPointer",
  0xa420: "ImageUniqueID" // Identifier assigned uniquely to each image
};
var TiffTags = {
  0x0100: "ImageWidth",
  0x0101: "ImageHeight",
  0x8769: "ExifIFDPointer",
  0x8825: "GPSInfoIFDPointer",
  0xa005: "InteroperabilityIFDPointer",
  0x0102: "BitsPerSample",
  0x0103: "Compression",
  0x0106: "PhotometricInterpretation",
  0x0112: "Orientation",
  0x0115: "SamplesPerPixel",
  0x011c: "PlanarConfiguration",
  0x0212: "YCbCrSubSampling",
  0x0213: "YCbCrPositioning",
  0x011a: "XResolution",
  0x011b: "YResolution",
  0x0128: "ResolutionUnit",
  0x0111: "StripOffsets",
  0x0116: "RowsPerStrip",
  0x0117: "StripByteCounts",
  0x0201: "JPEGInterchangeFormat",
  0x0202: "JPEGInterchangeFormatLength",
  0x012d: "TransferFunction",
  0x013e: "WhitePoint",
  0x013f: "PrimaryChromaticities",
  0x0211: "YCbCrCoefficients",
  0x0214: "ReferenceBlackWhite",
  0x0132: "DateTime",
  0x010e: "ImageDescription",
  0x010f: "Make",
  0x0110: "Model",
  0x0131: "Software",
  0x013b: "Artist",
  0x8298: "Copyright"
};
var GPSTags = {
  0x0000: "GPSVersionID",
  0x0001: "GPSLatitudeRef",
  0x0002: "GPSLatitude",
  0x0003: "GPSLongitudeRef",
  0x0004: "GPSLongitude",
  0x0005: "GPSAltitudeRef",
  0x0006: "GPSAltitude",
  0x0007: "GPSTimeStamp",
  0x0008: "GPSSatellites",
  0x0009: "GPSStatus",
  0x000a: "GPSMeasureMode",
  0x000b: "GPSDOP",
  0x000c: "GPSSpeedRef",
  0x000d: "GPSSpeed",
  0x000e: "GPSTrackRef",
  0x000f: "GPSTrack",
  0x0010: "GPSImgDirectionRef",
  0x0011: "GPSImgDirection",
  0x0012: "GPSMapDatum",
  0x0013: "GPSDestLatitudeRef",
  0x0014: "GPSDestLatitude",
  0x0015: "GPSDestLongitudeRef",
  0x0016: "GPSDestLongitude",
  0x0017: "GPSDestBearingRef",
  0x0018: "GPSDestBearing",
  0x0019: "GPSDestDistanceRef",
  0x001a: "GPSDestDistance",
  0x001b: "GPSProcessingMethod",
  0x001c: "GPSAreaInformation",
  0x001d: "GPSDateStamp",
  0x001e: "GPSDifferential"
};

// EXIF 2.3 Spec
var IFD1Tags = {
  0x0100: "ImageWidth",
  0x0101: "ImageHeight",
  0x0102: "BitsPerSample",
  0x0103: "Compression",
  0x0106: "PhotometricInterpretation",
  0x0111: "StripOffsets",
  0x0112: "Orientation",
  0x0115: "SamplesPerPixel",
  0x0116: "RowsPerStrip",
  0x0117: "StripByteCounts",
  0x011a: "XResolution",
  0x011b: "YResolution",
  0x011c: "PlanarConfiguration",
  0x0128: "ResolutionUnit",
  0x0201: "JpegIFOffset",
  // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
  0x0202: "JpegIFByteCount",
  // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
  0x0211: "YCbCrCoefficients",
  0x0212: "YCbCrSubSampling",
  0x0213: "YCbCrPositioning",
  0x0214: "ReferenceBlackWhite"
};
var StringValues = {
  ExposureProgram: {
    0: "Not defined",
    1: "Manual",
    2: "Normal program",
    3: "Aperture priority",
    4: "Shutter priority",
    5: "Creative program",
    6: "Action program",
    7: "Portrait mode",
    8: "Landscape mode"
  },
  MeteringMode: {
    0: "Unknown",
    1: "Average",
    2: "CenterWeightedAverage",
    3: "Spot",
    4: "MultiSpot",
    5: "Pattern",
    6: "Partial",
    255: "Other"
  },
  LightSource: {
    0: "Unknown",
    1: "Daylight",
    2: "Fluorescent",
    3: "Tungsten (incandescent light)",
    4: "Flash",
    9: "Fine weather",
    10: "Cloudy weather",
    11: "Shade",
    12: "Daylight fluorescent (D 5700 - 7100K)",
    13: "Day white fluorescent (N 4600 - 5400K)",
    14: "Cool white fluorescent (W 3900 - 4500K)",
    15: "White fluorescent (WW 3200 - 3700K)",
    17: "Standard light A",
    18: "Standard light B",
    19: "Standard light C",
    20: "D55",
    21: "D65",
    22: "D75",
    23: "D50",
    24: "ISO studio tungsten",
    255: "Other"
  },
  Flash: {
    0x0000: "Flash did not fire",
    0x0001: "Flash fired",
    0x0005: "Strobe return light not detected",
    0x0007: "Strobe return light detected",
    0x0009: "Flash fired, compulsory flash mode",
    0x000d: "Flash fired, compulsory flash mode, return light not detected",
    0x000f: "Flash fired, compulsory flash mode, return light detected",
    0x0010: "Flash did not fire, compulsory flash mode",
    0x0018: "Flash did not fire, auto mode",
    0x0019: "Flash fired, auto mode",
    0x001d: "Flash fired, auto mode, return light not detected",
    0x001f: "Flash fired, auto mode, return light detected",
    0x0020: "No flash function",
    0x0041: "Flash fired, red-eye reduction mode",
    0x0045: "Flash fired, red-eye reduction mode, return light not detected",
    0x0047: "Flash fired, red-eye reduction mode, return light detected",
    0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
    0x004d: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
    0x004f: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
    0x0059: "Flash fired, auto mode, red-eye reduction mode",
    0x005d: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
    0x005f: "Flash fired, auto mode, return light detected, red-eye reduction mode"
  },
  SensingMethod: {
    1: "Not defined",
    2: "One-chip color area sensor",
    3: "Two-chip color area sensor",
    4: "Three-chip color area sensor",
    5: "Color sequential area sensor",
    7: "Trilinear sensor",
    8: "Color sequential linear sensor"
  },
  SceneCaptureType: {
    0: "Standard",
    1: "Landscape",
    2: "Portrait",
    3: "Night scene"
  },
  SceneType: {
    1: "Directly photographed"
  },
  CustomRendered: {
    0: "Normal process",
    1: "Custom process"
  },
  WhiteBalance: {
    0: "Auto white balance",
    1: "Manual white balance"
  },
  GainControl: {
    0: "None",
    1: "Low gain up",
    2: "High gain up",
    3: "Low gain down",
    4: "High gain down"
  },
  Contrast: {
    0: "Normal",
    1: "Soft",
    2: "Hard"
  },
  Saturation: {
    0: "Normal",
    1: "Low saturation",
    2: "High saturation"
  },
  Sharpness: {
    0: "Normal",
    1: "Soft",
    2: "Hard"
  },
  SubjectDistanceRange: {
    0: "Unknown",
    1: "Macro",
    2: "Close view",
    3: "Distant view"
  },
  FileSource: {
    3: "DSC"
  },
  Components: {
    0: "",
    1: "Y",
    2: "Cb",
    3: "Cr",
    4: "R",
    5: "G",
    6: "B"
  }
};
var IptcFieldMap = {
  0x78: "caption",
  0x6e: "credit",
  0x19: "keywords",
  0x37: "dateCreated",
  0x50: "byline",
  0x55: "bylineTitle",
  0x7a: "captionWriter",
  0x69: "headline",
  0x74: "copyright",
  0x0f: "category"
};
function imageHasData(img) {
  return !!img.exifdata;
}
function base64ToArrayBuffer(base64) {
  base64 = base64.replace(/^data:([^;]+);base64,/gim, "");
  var binary = atob(base64);
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}
function objectURLToBlob(url, callback) {
  var http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.responseType = "blob";
  http.onload = function () {
    if (this.status == 200 || this.status === 0) {
      callback(this.response);
    }
  };
  http.send();
}
function getImageData(img, callback) {
  function handleBinaryFile(binFile) {
    var data = findEXIFinJPEG(binFile);
    img.exifdata = data || {};
    var iptcdata = findIPTCinJPEG(binFile);
    img.iptcdata = iptcdata || {};
    if (callback) {
      callback.call(img);
    }
  }
  if (img.src) {
    if (/^data:/i.test(img.src)) {
      // Data URI
      var arrayBuffer = base64ToArrayBuffer(img.src);
      handleBinaryFile(arrayBuffer);
    } else if (/^blob:/i.test(img.src)) {
      // Object URL
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        handleBinaryFile(e.target.result);
      };
      objectURLToBlob(img.src, function (blob) {
        fileReader.readAsArrayBuffer(blob);
      });
    } else {
      var http = new XMLHttpRequest();
      http.onload = function () {
        if (this.status == 200 || this.status === 0) {
          handleBinaryFile(http.response);
        } else {
          throw "Could not load image";
        }
        http = null;
      };
      http.open("GET", img.src, true);
      http.responseType = "arraybuffer";
      http.send(null);
    }
  } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
    fileReader = new FileReader();
    fileReader.onload = function (e) {
      // eslint-disable-next-line
      if (debug) console.log("Got file of length " + e.target.result.byteLength);
      handleBinaryFile(e.target.result);
    };
    fileReader.readAsArrayBuffer(img);
  }
}
function findEXIFinJPEG(file) {
  var dataView = new DataView(file);

  // eslint-disable-next-line
  if (debug) console.log("Got file of length " + file.byteLength);
  if (dataView.getUint8(0) != 0xff || dataView.getUint8(1) != 0xd8) {
    // eslint-disable-next-line
    if (debug) console.log("Not a valid JPEG");
    return false; // not a valid jpeg
  }
  var offset = 2,
    length = file.byteLength,
    marker;
  while (offset < length) {
    if (dataView.getUint8(offset) != 0xff) {
      // eslint-disable-next-line
      if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
      return false; // not a valid marker, something is wrong
    }
    marker = dataView.getUint8(offset + 1);
    // eslint-disable-next-line
    if (debug) console.log(marker);

    // we could implement handling for other markers here,
    // but we're only looking for 0xFFE1 for EXIF data

    if (marker == 225) {
      // eslint-disable-next-line
      if (debug) console.log("Found 0xFFE1 marker");
      return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

      // offset += 2 + file.getShortAt(offset+2, true);
    } else {
      offset += 2 + dataView.getUint16(offset + 2);
    }
  }
}
function findIPTCinJPEG(file) {
  var dataView = new DataView(file);
  // eslint-disable-next-line
  if (debug) console.log("Got file of length " + file.byteLength);
  if (dataView.getUint8(0) != 0xff || dataView.getUint8(1) != 0xd8) {
    // eslint-disable-next-line
    if (debug) console.log("Not a valid JPEG");
    return false; // not a valid jpeg
  }
  var offset = 2,
    length = file.byteLength;
  var isFieldSegmentStart = function (dataView, offset) {
    return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4d && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
  };
  while (offset < length) {
    if (isFieldSegmentStart(dataView, offset)) {
      // Get the length of the name header (which is padded to an even number of bytes)
      var nameHeaderLength = dataView.getUint8(offset + 7);
      if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
      // Check for pre photoshop 6 format
      if (nameHeaderLength === 0) {
        // Always 4
        nameHeaderLength = 4;
      }
      var startOffset = offset + 8 + nameHeaderLength;
      var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
      return readIPTCData(file, startOffset, sectionLength);
    }

    // Not the marker, continue searching
    offset++;
  }
}
function readIPTCData(file, startOffset, sectionLength) {
  var dataView = new DataView(file);
  var data = {};
  var fieldValue, fieldName, dataSize, segmentType;
  var segmentStartPos = startOffset;
  while (segmentStartPos < startOffset + sectionLength) {
    if (dataView.getUint8(segmentStartPos) === 0x1c && dataView.getUint8(segmentStartPos + 1) === 0x02) {
      segmentType = dataView.getUint8(segmentStartPos + 2);
      if (segmentType in IptcFieldMap) {
        dataSize = dataView.getInt16(segmentStartPos + 3);
        fieldName = IptcFieldMap[segmentType];
        fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
        // Check if we already stored a value with this name
        // if (data.hasOwnProperty(fieldName)) {
        //   // Value already stored with this name, create multivalue field
        //   if (data[fieldName] instanceof Array) {
        //     data[fieldName].push(fieldValue)
        //   } else {
        //     data[fieldName] = [data[fieldName], fieldValue]
        //   }
        // } else
        {
          data[fieldName] = fieldValue;
        }
      }
    }
    segmentStartPos++;
  }
  return data;
}
function readTags(file, tiffStart, dirStart, strings, bigEnd) {
  var entries = file.getUint16(dirStart, !bigEnd),
    tags = {},
    entryOffset,
    tag,
    i;
  for (i = 0; i < entries; i++) {
    entryOffset = dirStart + i * 12 + 2;
    tag = strings[file.getUint16(entryOffset, !bigEnd)];
    // eslint-disable-next-line
    if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
    tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
  }
  return tags;
}
function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
  var type = file.getUint16(entryOffset + 2, !bigEnd),
    numValues = file.getUint32(entryOffset + 4, !bigEnd),
    valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
    offset,
    vals,
    val,
    n,
    numerator,
    denominator;
  switch (type) {
    case 1: // byte, 8-bit unsigned int
    case 7:
      // undefined, 8-bit byte, value depending on field
      if (numValues == 1) {
        return file.getUint8(entryOffset + 8, !bigEnd);
      } else {
        offset = numValues > 4 ? valueOffset : entryOffset + 8;
        vals = [];
        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint8(offset + n);
        }
        return vals;
      }
    case 2:
      // ascii, 8-bit byte
      offset = numValues > 4 ? valueOffset : entryOffset + 8;
      return getStringFromDB(file, offset, numValues - 1);
    case 3:
      // short, 16 bit int
      if (numValues == 1) {
        return file.getUint16(entryOffset + 8, !bigEnd);
      } else {
        offset = numValues > 2 ? valueOffset : entryOffset + 8;
        vals = [];
        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
        }
        return vals;
      }
    case 4:
      // long, 32 bit int
      if (numValues == 1) {
        return file.getUint32(entryOffset + 8, !bigEnd);
      } else {
        vals = [];
        for (n = 0; n < numValues; n++) {
          vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
        }
        return vals;
      }
    case 5:
      // rational = two long values, first is numerator, second is denominator
      if (numValues == 1) {
        numerator = file.getUint32(valueOffset, !bigEnd);
        denominator = file.getUint32(valueOffset + 4, !bigEnd);
        val = new Number(numerator / denominator);
        val.numerator = numerator;
        val.denominator = denominator;
        return val;
      } else {
        vals = [];
        for (n = 0; n < numValues; n++) {
          numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
          denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
          vals[n] = new Number(numerator / denominator);
          vals[n].numerator = numerator;
          vals[n].denominator = denominator;
        }
        return vals;
      }
    case 9:
      // slong, 32 bit signed int
      if (numValues == 1) {
        return file.getInt32(entryOffset + 8, !bigEnd);
      } else {
        vals = [];
        for (n = 0; n < numValues; n++) {
          vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
        }
        return vals;
      }
    case 10:
      // signed rational, two slongs, first is numerator, second is denominator
      if (numValues == 1) {
        return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
      } else {
        vals = [];
        for (n = 0; n < numValues; n++) {
          vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
        }
        return vals;
      }
  }
}

/**
 * Given an IFD (Image File Directory) start offset
 * returns an offset to next IFD or 0 if it's the last IFD.
 */
function getNextIFDOffset(dataView, dirStart, bigEnd) {
  //the first 2bytes means the number of directory entries contains in this IFD
  var entries = dataView.getUint16(dirStart, !bigEnd);

  // After last directory entry, there is a 4bytes of data,
  // it means an offset to next IFD.
  // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

  return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
}
function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd) {
  // get the IFD1 offset
  var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart + firstIFDOffset, bigEnd);
  if (!IFD1OffsetPointer) {
    // console.log('******** IFD1Offset is empty, image thumb not found ********');
    return {};
  } else if (IFD1OffsetPointer > dataView.byteLength) {
    // this should not happen
    // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
    return {};
  }
  // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

  var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd);

  // EXIF 2.3 specification for JPEG format thumbnail

  // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
  // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
  // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
  // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
  // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

  if (thumbTags["Compression"]) {
    // console.log('Thumbnail image found!');

    switch (thumbTags["Compression"]) {
      case 6:
        // console.log('Thumbnail image format is JPEG');
        if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
          // extract the thumbnail
          var tOffset = tiffStart + thumbTags.JpegIFOffset;
          var tLength = thumbTags.JpegIFByteCount;
          thumbTags["blob"] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
            type: "image/jpeg"
          });
        }
        break;
      case 1:
        console.warn("Thumbnail image format is TIFF, which is not implemented.");
        break;
      default:
        console.warn("Unknown thumbnail image format '%s'", thumbTags["Compression"]);
    }
  } else if (thumbTags["PhotometricInterpretation"] == 2) {
    console.warn("Thumbnail image format is RGB, which is not implemented.");
  }
  return thumbTags;
}
function getStringFromDB(buffer, start, length) {
  var outstr = "";
  for (var n = start; n < start + length; n++) {
    outstr += String.fromCharCode(buffer.getUint8(n));
  }
  return outstr;
}
function readEXIFData(file, start) {
  if (getStringFromDB(file, start, 4) != "Exif") {
    // eslint-disable-next-line
    if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
    return false;
  }
  var bigEnd,
    tags,
    tag,
    exifData,
    gpsData,
    tiffOffset = start + 6;

  // test for TIFF validity and endianness
  if (file.getUint16(tiffOffset) == 0x4949) {
    bigEnd = false;
  } else if (file.getUint16(tiffOffset) == 0x4d4d) {
    bigEnd = true;
  } else {
    // eslint-disable-next-line
    if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
    return false;
  }
  if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002a) {
    // eslint-disable-next-line
    if (debug) console.log("Not valid TIFF data! (no 0x002A)");
    return false;
  }
  var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
  if (firstIFDOffset < 0x00000008) {
    // eslint-disable-next-line
    if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
    return false;
  }
  tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);
  if (tags.ExifIFDPointer) {
    exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
    for (tag in exifData) {
      switch (tag) {
        case "LightSource":
        case "Flash":
        case "MeteringMode":
        case "ExposureProgram":
        case "SensingMethod":
        case "SceneCaptureType":
        case "SceneType":
        case "CustomRendered":
        case "WhiteBalance":
        case "GainControl":
        case "Contrast":
        case "Saturation":
        case "Sharpness":
        case "SubjectDistanceRange":
        case "FileSource":
          exifData[tag] = StringValues[tag][exifData[tag]];
          break;
        case "ExifVersion":
        case "FlashpixVersion":
          exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
          break;
        case "ComponentsConfiguration":
          exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
          break;
      }
      tags[tag] = exifData[tag];
    }
  }
  if (tags.GPSInfoIFDPointer) {
    gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
    for (tag in gpsData) {
      switch (tag) {
        case "GPSVersionID":
          gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
          break;
      }
      tags[tag] = gpsData[tag];
    }
  }

  // extract thumbnail
  tags["thumbnail"] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);
  return tags;
}
const EXIF = {
  getData: function (img, callback) {
    if ((self.Image && img instanceof self.Image || self.HTMLImageElement && img instanceof self.HTMLImageElement) && !img.complete) return false;
    if (!imageHasData(img)) {
      getImageData(img, callback);
    } else {
      if (callback) {
        callback.call(img);
      }
    }
    return true;
  },
  getTag: function (img, tag) {
    if (!imageHasData(img)) return;
    return img.exifdata[tag];
  }
};
/* harmony default export */ var exif = (EXIF);
// EXTERNAL MODULE: ./node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js
var canvas_to_blob = __webpack_require__(3757);
var canvas_to_blob_default = /*#__PURE__*/__webpack_require__.n(canvas_to_blob);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ImageUploader.vue?vue&type=script&lang=js
/**
 * vue-ImageUploader: a to-the-point vue-component for client-side image upload with resizing of images (JPG, PNG, GIF)
 *
 * Code based on ImageUploader (c) Ross Turner (https://github.com/rossturner/HTML5-ImageUploader) and
 * exif.js (https://github.com/exif-js/exif-js) for JPEG autoRotate functions
 * Adapted for Vue by Svale Fossåskaret / Kartoteket with some modifications.
 *
 *
 * TODO Items:
 * 1. Progress Report
 * 2. Multiple Files / async handling
 * 3. Support custom completion callback
 * 4. Propper unit testing with https://github.com/visionmedia/supertest
 *
 * LICENSE (from original ImageUploader files by Ross Turner):
 *
 * Copyright (c) 2012 Ross Turner and contributors (https://github.com/zsinj)
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/



/* harmony default export */ var ImageUploadervue_type_script_lang_js = ({
  name: "image-uploader",
  props: {
    /**
     * The ID for the file input, required if more than one instance should be used on the same page.
     *
     * @default fileInput
     * @type {String}
     */
    id: {
      type: String,
      default: "fileInput"
    },
    /**
     * An integer in pixels for the maximum width allowed for uploaded images, selected images with a greater width than this value will be scaled down before upload.
     * @default 1024
     * @type {Number}
     */
    maxWidth: {
      type: Number,
      default: 1024
    },
    /**
     * An integer in pixels for the maximum height allowed for uploaded images, selected images with a greater height than this value will be scaled down before upload.
     * @default 1024
     * @type {Number}
     */
    maxHeight: {
      type: Number,
      default: 1024
    },
    /**
     * TODO: Does not make sens to me
     * A float value in megapixels (MP) for the maximum overall size of the image allowed for uploaded images, selected images with a greater size than this value will be scaled down before upload. If the value is null or is not specified, then maximum size restriction is not applied
     * @default null
     * @type {Number}
     */
    maxSize: {
      type: Number,
      default: null
    },
    /**
     * A float between 0 and 1.00 for the image quality to use in the resulting image data, around 0.9 is recommended.
     * @default 1.00
     * @type {Number}
     */
    quality: {
      type: Number,
      default: 1.0
    },
    /**
     * Allows scaling down to a specified fraction of the original size. (Example: a value of 0.5 will reduce the size by half.) Accepts a decimal value between 0 and 1.
     * @default null
     * @type {Number}
     */
    scaleRatio: {
      type: Number,
      default: null
    },
    /**
     * A boolean flag, if true then EXIF information from the image is parsed and the image is rotated correctly before upload. If false, then no processing is performed, and unwanted image flipping can happen.
     * @default false
     * @type {Boolean}
     */
    autoRotate: {
      type: Boolean,
      default: false
    },
    /**
     * A boolean flag to toogle an img-tag displaying the uploaded image. When set to false no img-tag is displayed
     * @default true
     * @type {Boolean}
     */
    preview: {
      type: Boolean,
      default: true
    },
    /**
     * Sets the desired format for the returned image. Available formats are
     * 'string' (base64), 'verbose' (object), 'blob' (object), 'info' (object), 'file' (unmodified File object)
     * @default {string}
     * @type {String}
     */
    outputFormat: {
      type: String,
      default: "string"
    },
    /**
     * Sets the desired class name for the input element
     * @default {fileinput}
     * @type {String or Array}
     */
    className: {
      type: [String, Array],
      default: "fileinput"
    },
    /**
     * Sets an optional capture attribute. (false, camera, user, environment)
     * @default empty
     * @type [String or Boolean]
     */
    capture: {
      type: [String, Boolean],
      default: false
    },
    /**
     * Sets the accept attribute, in case the same input can accept other files
     * Shoub be a comma seperated string, eg 'audio/*,video/*,image/*'
     * @default image/*
     * @type {String}
     */
    accept: {
      type: String,
      default: "image/*"
    },
    /**
     * An array of image's extensions that will not be resized (['gif', 'svg'])
     * If only 1 extension, it can be provided directly as a stringEg ('gif')
     * Disable all resizing with a catch all ('*')
     * If not resized, the returned output will always be the unmodifed File object
     * @default []
     * @type {String or Array}
     */
    doNotResize: {
      type: [String, Array],
      default: () => []
    },
    /**
     * How much to write to the console. 0 = silent. 1 = quite. 2 = loud
     * @default false
     * @type {Boolean}
     */
    debug: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imagePreview: null,
      currentFile: {},
      dimensions: {},
      exifData: {}
    };
  },
  methods: {
    /**
     * Get file from input
     * @param  {object} event
     */
    uploadFile(e) {
      const file = e.target.files && e.target.files.length ? e.target.files[0] : null;
      if (file) {
        this.emitLoad();
        this.handleFile(file);
      }
    },
    /**
     * Emit event with output
     * @param  {mixed} output - The resized image. type can be simple dataUrl string, verbose object or Blob instance
     */
    emitEvent(output) {
      this.log("emitEvent() is called with output:", 2, output);
      this.$emit("input", output);
      this.$emit("change", output);
    },
    emitLoad() {
      this.$emit("onUpload");
    },
    emitComplete() {
      this.$emit("onComplete");
    },
    /**
     * Handels the file manipulation on upload
     * @param  {File}     file The current original uploaded file
     * @return {}         nada (yet)
     */
    handleFile(file) {
      this.log("handleFile() is called with file:", 2, file);
      this.currentFile = file;
      const mimetype = file.type.split("/"); // NB: Not supprted by Safari on iOS !??! @todo: TEST!
      const isImage = mimetype[0] === "image";
      const doNotResize = typeof this.doNotResize === "string" ? [this.doNotResize] : this.doNotResize; // cast to array

      // Don't resize if not image or doNotResize is set
      if (!isImage || doNotResize.includes("*") || doNotResize.includes(mimetype[1])) {
        this.log("No Resize, return file directly");
        this.emitEvent(file); // does NOT respect the output format prop
        this.emitComplete();
      } else {
        const that = this;
        const img = document.createElement("img");
        const reader = new window.FileReader();
        reader.onload = function (e) {
          that.log("reader.onload() is triggered", 2);
          img.src = e.target.result;
          img.onload = function () {
            that.log("img.onload() is triggered", 2);

            // this extracts exifdata if available. Returns an empty object if not
            exif.getData(img, function () {
              that.exifData = this.exifdata;
              if (Object.keys(that.exifData).length === 0) {
                that.log("ImageUploader: exif data found and extracted", 2);
              }
            });
            that.scaleImage(img, that.exifData.Orientation);
          };
        };
        reader.readAsDataURL(file);
      }
    },
    /**
     * Performance orientation and scaling logic
     * @param  {HTMLElement} img -  A document img element containing the uploaded file as a base764 encoded string as source
     * @param  {int} [orientation = 1] - Exif-extracted orientation code
     */
    scaleImage(img, orientation = 1) {
      this.log("scaleImage() is called", 2);
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.save();

      // Good explanation of EXIF orientation is here http://www.daveperrett.com/articles/2012/07/28/exif-orientation-handling-is-a-ghetto/
      if (this.autoRotate && orientation > 1) {
        this.log("ImageUploader: rotating image as per EXIF orientation tag = " + orientation);
        const width = canvas.width;
        const styleWidth = canvas.style.width;
        const height = canvas.height;
        const styleHeight = canvas.style.height;
        if (orientation > 4) {
          canvas.width = height;
          canvas.style.width = styleHeight;
          canvas.height = width;
          canvas.style.height = styleWidth;
        }
        switch (orientation) {
          case 2:
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;
          case 3:
            ctx.translate(width, height);
            ctx.rotate(Math.PI);
            break;
          case 4:
            ctx.translate(0, height);
            ctx.scale(1, -1);
            break;
          case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
          case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -height);
            break;
          case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(width, -height);
            ctx.scale(-1, 1);
            break;
          case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-width, 0);
            break;
        }
      }
      ctx.drawImage(img, 0, 0);
      ctx.restore();

      // Let's find the max available width for scaled image
      const ratio = canvas.width / canvas.height;
      let mWidth = Math.min(this.maxWidth, ratio * this.maxHeight);

      // suggested re-write by https://github.com/ryancramerdesign
      // https://github.com/rossturner/HTML5-ImageUploader/issues/13
      if (this.maxSize > 0 && this.maxSize < canvas.width * canvas.height / 1000000) {
        const mSize = Math.floor(Math.sqrt(this.maxSize * ratio) * 1000);
        mWidth = mWidth > 0 ? Math.min(mWidth, mSize) : mSize;
      }
      if (this.scaleRatio) {
        mWidth = Math.min(mWidth, Math.floor(this.scaleRatio * canvas.width));
      }

      // store dimensions
      this.dimensions.orgWidth = canvas.width;
      this.dimensions.orgHeight = canvas.height;
      this.dimensions.width = mWidth;
      this.dimensions.height = Math.floor(mWidth / ratio);
      this.log("ImageUploader: original image size = " + canvas.width + " X " + canvas.height);
      this.log("ImageUploader: scaled image size = " + mWidth + " X " + Math.floor(mWidth / ratio));
      if (mWidth <= 0) {
        mWidth = 1;
        console.warning("ImageUploader: image size is too small");
      }

      // simple resize with a 2:1 ratio
      while (canvas.width >= 2 * mWidth) {
        canvas = this.getHalfScaleCanvas(canvas);
      }

      // When factor less than 2:1 remains, finish up with alogorithm
      if (canvas.width > mWidth) {
        canvas = this.scaleCanvasWithAlgorithm(canvas, mWidth);
      }

      // suggested re-write by https://github.com/ryancramerdesign
      // https://github.com/rossturner/HTML5-ImageUploader/issues/13
      const quality = this.currentFile.type === "image/jpeg" ? this.quality : 1.0;
      const imageData = canvas.toDataURL(this.currentFile.type, quality);
      if (typeof this.onScale === "function") {
        this.onScale(imageData);
      }
      this.log("New ImageData is ready", 2);

      // Display preview of the new image
      if (this.preview) {
        this.imagePreview = imageData;
      }

      // Return the new image
      // this.emitEvent(this.currentFile) // DEBUG
      this.emitEvent(this.formatOutput(imageData));
      this.emitComplete();
    },
    /**
     * Scale Canvas. Scales the
     * @param {HTMLElement} canvas - canvas element before finale resize
     * @param {int} maxWidth - max image width
     * @returns {HTMLElement} - canvas resized to scale
     */
    scaleCanvasWithAlgorithm(canvas, maxWidth) {
      const scaledCanvas = document.createElement("canvas");
      const scale = maxWidth / canvas.width;
      scaledCanvas.width = canvas.width * scale;
      scaledCanvas.height = canvas.height * scale;
      const srcImgData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
      const destImgData = scaledCanvas.getContext("2d").createImageData(scaledCanvas.width, scaledCanvas.height);
      this.applyBilinearInterpolation(srcImgData, destImgData, scale);
      scaledCanvas.getContext("2d").putImageData(destImgData, 0, 0);
      return scaledCanvas;
    },
    /**
     * Interpolation
     * @param  {ImageData} srcCanvasData - Pixel data of source canvas
     * @param  {ImageData} destCanvasData - Pixel data of destionation canvas
     * @param  {int} scale - Resize scale (max width / original width)
     * @author http://web.archive.org/web/20120123142531/http://www.philou.ch/js-bilinear-interpolation.html
     */
    applyBilinearInterpolation(srcCanvasData, destCanvasData, scale) {
      function inner(f00, f10, f01, f11, x, y) {
        const un_x = 1.0 - x;
        const un_y = 1.0 - y;
        return f00 * un_x * un_y + f10 * x * un_y + f01 * un_x * y + f11 * x * y;
      }
      let i, j;
      let iyv, iy0, iy1, ixv, ix0, ix1;
      let idxD, idxS00, idxS10, idxS01, idxS11;
      let dx, dy;
      let r, g, b, a;
      for (i = 0; i < destCanvasData.height; ++i) {
        iyv = i / scale;
        iy0 = Math.floor(iyv);
        // Math.ceil can go over bounds
        iy1 = Math.ceil(iyv) > srcCanvasData.height - 1 ? srcCanvasData.height - 1 : Math.ceil(iyv);
        for (j = 0; j < destCanvasData.width; ++j) {
          ixv = j / scale;
          ix0 = Math.floor(ixv);
          // Math.ceil can go over bounds
          ix1 = Math.ceil(ixv) > srcCanvasData.width - 1 ? srcCanvasData.width - 1 : Math.ceil(ixv);
          idxD = (j + destCanvasData.width * i) * 4;
          // matrix to vector indices
          idxS00 = (ix0 + srcCanvasData.width * iy0) * 4;
          idxS10 = (ix1 + srcCanvasData.width * iy0) * 4;
          idxS01 = (ix0 + srcCanvasData.width * iy1) * 4;
          idxS11 = (ix1 + srcCanvasData.width * iy1) * 4;
          // overall coordinates to unit square
          dx = ixv - ix0;
          dy = iyv - iy0;
          // I let the r, g, b, a on purpose for debugging
          r = inner(srcCanvasData.data[idxS00], srcCanvasData.data[idxS10], srcCanvasData.data[idxS01], srcCanvasData.data[idxS11], dx, dy);
          destCanvasData.data[idxD] = r;
          g = inner(srcCanvasData.data[idxS00 + 1], srcCanvasData.data[idxS10 + 1], srcCanvasData.data[idxS01 + 1], srcCanvasData.data[idxS11 + 1], dx, dy);
          destCanvasData.data[idxD + 1] = g;
          b = inner(srcCanvasData.data[idxS00 + 2], srcCanvasData.data[idxS10 + 2], srcCanvasData.data[idxS01 + 2], srcCanvasData.data[idxS11 + 2], dx, dy);
          destCanvasData.data[idxD + 2] = b;
          a = inner(srcCanvasData.data[idxS00 + 3], srcCanvasData.data[idxS10 + 3], srcCanvasData.data[idxS01 + 3], srcCanvasData.data[idxS11 + 3], dx, dy);
          destCanvasData.data[idxD + 3] = a;
        }
      }
    },
    /**
     * getHalfScaleCanvas - return a canvas divided by 2
     * @param  {HTMLElement} canvas - input document canvas element
     * @returns  {HTMLElement} half of input canvas
     */
    getHalfScaleCanvas(canvas) {
      const halfCanvas = document.createElement("canvas");
      halfCanvas.width = canvas.width / 2;
      halfCanvas.height = canvas.height / 2;
      halfCanvas.getContext("2d").drawImage(canvas, 0, 0, halfCanvas.width, halfCanvas.height);
      return halfCanvas;
    },
    /**
     * Sets the format of the component output
     * @param  {string} imageData  dataUrl
     * @return {mixed}             Either simple dataUrl string or
     *                                    object with dataURl and metadata or
     *                                    blob or
     *                                    file
     */
    formatOutput(imageData) {
      this.log("ImageUploader: outputFormat: " + this.outputFormat);
      if (this.outputFormat === "file") {
        return this.currentFile;
      }
      if (this.outputFormat === "blob") {
        if (typeof (canvas_to_blob_default()) === "undefined") {
          console.warn('Missing library! blueimp-canvas-to-blob.js must be loaded to output as "blob"');
          console.warn("Falling back to default base64 dataUrl");
          return imageData;
        }
        return canvas_to_blob_default()(imageData);
      }
      const info = {
        name: this.currentFile.name,
        type: this.currentFile.type,
        // size: this.currentFile.size,
        newWidth: this.dimensions.width,
        newHeight: this.dimensions.height,
        orgWidth: this.dimensions.orgWidth,
        orgHeight: this.dimensions.orgHeight,
        aspectRatio: Math.round(this.dimensions.width / this.dimensions.height * 100) / 100,
        //as Float
        modifiedTimestamp: this.currentFile.lastModified,
        modifiedDate: this.currentFile.lastModifiedDate
      };

      // return just info
      if (this.outputFormat === "info") {
        return info;
      }
      if (this.outputFormat === "verbose") {
        const data = {
          dataUrl: imageData,
          info,
          exif: Object.keys(this.exifData).length > 0 ? this.exifData : null
        };
        return data;
      }

      // simple base64 dataUrl string by default
      return imageData;
    },
    /**
     * Debug logger to console
     * @param  {string} msg - Message to console
     * @param  {int} level - Debug level to output
     * @param  {mixed} details - Extra debug details
     */
    log(msg, level = 1, details = null) {
      if (this.debug >= level) {
        // eslint-disable-next-line
        console.info(msg);
        if (details) {
          // eslint-disable-next-line
          console.info(details);
        }
      }
    }
  },
  created() {
    this.log("Initialised ImageUploader");
  }
});
;// CONCATENATED MODULE: ./src/components/ImageUploader.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(5907);
;// CONCATENATED MODULE: ./src/components/ImageUploader.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ImageUploadervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var ImageUploader = (__exports__);
;// CONCATENATED MODULE: ./src/components/index.js
/*!
 * vue-image-upload-resize
 * Based on ImageUploader (c) Ross Turner (https://github.com/rossturner/HTML5-ImageUploader)
 * Adapted by (c) 2018 Svale Fossåskaret (http://kartoteket.as/team/svale.html / @Fossesvale)
 * @license MIT.
 */
// Import vue component


// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('ImageUploader', ImageUploader);
}

// Create module definition for Vue.use()
const components_plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
  GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
  GlobalVue.use(components_plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
ImageUploader.install = install;

// To allow use as module (npm/webpack/etc.) export component
/* harmony default export */ var components = (ImageUploader);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-image-upload-resize.umd.js.map