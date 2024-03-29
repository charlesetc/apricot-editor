(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/chevrotain/lib/src/version.js
  var require_version = __commonJS({
    "node_modules/chevrotain/lib/src/version.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.VERSION = void 0;
      exports2.VERSION = "10.4.2";
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports2, module2) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module2.exports = isPrototype;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports2, module2) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module2.exports = overArg;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports2, module2) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module2.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports2, module2) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = baseKeys;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports2, module2) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module2.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports2, module2) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module2.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports2, module2) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module2.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module2.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports2, module2) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module2.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module2.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports2, module2) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module2.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module2.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports2, module2) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module2.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports2, module2) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module2.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports2, module2) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module2.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports2, module2) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module2.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports2, module2) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module2.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports2, module2) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module2.exports = getNative;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module2.exports = DataView;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module2.exports = Map2;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module2.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module2.exports = Set2;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap = getNative(root, "WeakMap");
      module2.exports = WeakMap;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports2, module2) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module2.exports = getTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports2, module2) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module2.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module2.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports2, module2) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module2.exports = isArguments;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports2, module2) {
      var isArray = Array.isArray;
      module2.exports = isArray;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports2, module2) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module2.exports = isLength;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports2, module2) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module2.exports = isArrayLike;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports2, module2) {
      function stubFalse() {
        return false;
      }
      module2.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports2, module2) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module2.exports = isBuffer;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module2.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports2, module2) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module2.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports2, module2) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module2.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports2, module2) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module2.exports = isTypedArray;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports2, module2) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
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
      module2.exports = isEmpty;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports2, module2) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module2.exports = arrayMap;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports2, module2) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module2.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports2, module2) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module2.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module2.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
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
      module2.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module2.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module2.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module2.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports2, module2) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module2.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports2, module2) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module2.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports2, module2) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module2.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports2, module2) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module2.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports2, module2) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module2.exports = stackHas;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports2, module2) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module2.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module2.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports2, module2) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module2.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module2.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module2.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports2, module2) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module2.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module2.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports2, module2) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module2.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports2, module2) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module2.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module2.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module2.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module2.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports2, module2) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module2.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports2, module2) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
      module2.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports2, module2) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack2(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack2.prototype.clear = stackClear;
      Stack2.prototype["delete"] = stackDelete;
      Stack2.prototype.get = stackGet;
      Stack2.prototype.has = stackHas;
      Stack2.prototype.set = stackSet;
      module2.exports = Stack2;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module2.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports2, module2) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module2.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports2, module2) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module2.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports2, module2) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module2.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports2, module2) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module2.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports2, module2) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports2, module2) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module2.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports2, module2) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module2.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports2, module2) {
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module2.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module2.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports2, module2) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module2.exports = arrayPush;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports2, module2) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module2.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports2, module2) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module2.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports2, module2) {
      function stubArray() {
        return [];
      }
      module2.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports2, module2) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module2.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports2, module2) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module2.exports = baseTimes;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports2, module2) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module2.exports = isIndex;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports2, module2) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports2, module2) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module2.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports2, module2) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module2.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports2, module2) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
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
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalObjects;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack2());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack2());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack2());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module2.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports2, module2) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module2.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack2();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module2.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports2, module2) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module2.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports2, module2) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module2.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports2, module2) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module2.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports2, module2) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module2.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module2.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports2, module2) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module2.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports2, module2) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module2.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports2, module2) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
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
      module2.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports2, module2) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module2.exports = stringToPath;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module2.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports2, module2) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module2.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports2, module2) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module2.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports2, module2) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module2.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports2, module2) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module2.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports2, module2) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module2.exports = get;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports2, module2) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module2.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports2, module2) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
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
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module2.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports2, module2) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module2.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports2, module2) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module2.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports2, module2) {
      function identity(value) {
        return value;
      }
      module2.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports2, module2) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module2.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports2, module2) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module2.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports2, module2) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module2.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports2, module2) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module2.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports2, module2) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module2.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports2, module2) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module2.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports2, module2) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module2.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports2, module2) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module2.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports2, module2) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module2.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseMap.js
  var require_baseMap = __commonJS({
    "node_modules/lodash/_baseMap.js"(exports2, module2) {
      var baseEach = require_baseEach();
      var isArrayLike = require_isArrayLike();
      function baseMap(collection, iteratee) {
        var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result[++index] = iteratee(value, key, collection2);
        });
        return result;
      }
      module2.exports = baseMap;
    }
  });

  // node_modules/lodash/map.js
  var require_map = __commonJS({
    "node_modules/lodash/map.js"(exports2, module2) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var baseMap = require_baseMap();
      var isArray = require_isArray();
      function map(collection, iteratee) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, baseIteratee(iteratee, 3));
      }
      module2.exports = map;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports2, module2) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module2.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports2, module2) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module2.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports2, module2) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module2.exports = forEach;
    }
  });

  // node_modules/lodash/_baseValues.js
  var require_baseValues = __commonJS({
    "node_modules/lodash/_baseValues.js"(exports2, module2) {
      var arrayMap = require_arrayMap();
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      module2.exports = baseValues;
    }
  });

  // node_modules/lodash/values.js
  var require_values = __commonJS({
    "node_modules/lodash/values.js"(exports2, module2) {
      var baseValues = require_baseValues();
      var keys = require_keys();
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      module2.exports = values;
    }
  });

  // node_modules/lodash/_baseHas.js
  var require_baseHas = __commonJS({
    "node_modules/lodash/_baseHas.js"(exports2, module2) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      module2.exports = baseHas;
    }
  });

  // node_modules/lodash/has.js
  var require_has = __commonJS({
    "node_modules/lodash/has.js"(exports2, module2) {
      var baseHas = require_baseHas();
      var hasPath = require_hasPath();
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      module2.exports = has;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports2, module2) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module2.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports2, module2) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module2.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports2, module2) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module2.exports = assignValue;
    }
  });

  // node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "node_modules/lodash/_copyObject.js"(exports2, module2) {
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
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
      module2.exports = copyObject;
    }
  });

  // node_modules/lodash/_baseAssign.js
  var require_baseAssign = __commonJS({
    "node_modules/lodash/_baseAssign.js"(exports2, module2) {
      var copyObject = require_copyObject();
      var keys = require_keys();
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      module2.exports = baseAssign;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports2, module2) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports2, module2) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports2, module2) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module2.exports = keysIn;
    }
  });

  // node_modules/lodash/_baseAssignIn.js
  var require_baseAssignIn = __commonJS({
    "node_modules/lodash/_baseAssignIn.js"(exports2, module2) {
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      module2.exports = baseAssignIn;
    }
  });

  // node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "node_modules/lodash/_cloneBuffer.js"(exports2, module2) {
      var root = require_root();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module2.exports = cloneBuffer;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports2, module2) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module2.exports = copyArray;
    }
  });

  // node_modules/lodash/_copySymbols.js
  var require_copySymbols = __commonJS({
    "node_modules/lodash/_copySymbols.js"(exports2, module2) {
      var copyObject = require_copyObject();
      var getSymbols = require_getSymbols();
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      module2.exports = copySymbols;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports2, module2) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module2.exports = getPrototype;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports2, module2) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module2.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_copySymbolsIn.js
  var require_copySymbolsIn = __commonJS({
    "node_modules/lodash/_copySymbolsIn.js"(exports2, module2) {
      var copyObject = require_copyObject();
      var getSymbolsIn = require_getSymbolsIn();
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      module2.exports = copySymbolsIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports2, module2) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module2.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/_initCloneArray.js
  var require_initCloneArray = __commonJS({
    "node_modules/lodash/_initCloneArray.js"(exports2, module2) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      module2.exports = initCloneArray;
    }
  });

  // node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "node_modules/lodash/_cloneArrayBuffer.js"(exports2, module2) {
      var Uint8Array2 = require_Uint8Array();
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      module2.exports = cloneArrayBuffer;
    }
  });

  // node_modules/lodash/_cloneDataView.js
  var require_cloneDataView = __commonJS({
    "node_modules/lodash/_cloneDataView.js"(exports2, module2) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      module2.exports = cloneDataView;
    }
  });

  // node_modules/lodash/_cloneRegExp.js
  var require_cloneRegExp = __commonJS({
    "node_modules/lodash/_cloneRegExp.js"(exports2, module2) {
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      module2.exports = cloneRegExp;
    }
  });

  // node_modules/lodash/_cloneSymbol.js
  var require_cloneSymbol = __commonJS({
    "node_modules/lodash/_cloneSymbol.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      module2.exports = cloneSymbol;
    }
  });

  // node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "node_modules/lodash/_cloneTypedArray.js"(exports2, module2) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module2.exports = cloneTypedArray;
    }
  });

  // node_modules/lodash/_initCloneByTag.js
  var require_initCloneByTag = __commonJS({
    "node_modules/lodash/_initCloneByTag.js"(exports2, module2) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      var cloneDataView = require_cloneDataView();
      var cloneRegExp = require_cloneRegExp();
      var cloneSymbol = require_cloneSymbol();
      var cloneTypedArray = require_cloneTypedArray();
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      module2.exports = initCloneByTag;
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports2, module2) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module2.exports = baseCreate;
    }
  });

  // node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "node_modules/lodash/_initCloneObject.js"(exports2, module2) {
      var baseCreate = require_baseCreate();
      var getPrototype = require_getPrototype();
      var isPrototype = require_isPrototype();
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      module2.exports = initCloneObject;
    }
  });

  // node_modules/lodash/_baseIsMap.js
  var require_baseIsMap = __commonJS({
    "node_modules/lodash/_baseIsMap.js"(exports2, module2) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var mapTag = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      module2.exports = baseIsMap;
    }
  });

  // node_modules/lodash/isMap.js
  var require_isMap = __commonJS({
    "node_modules/lodash/isMap.js"(exports2, module2) {
      var baseIsMap = require_baseIsMap();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      module2.exports = isMap;
    }
  });

  // node_modules/lodash/_baseIsSet.js
  var require_baseIsSet = __commonJS({
    "node_modules/lodash/_baseIsSet.js"(exports2, module2) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var setTag = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      module2.exports = baseIsSet;
    }
  });

  // node_modules/lodash/isSet.js
  var require_isSet = __commonJS({
    "node_modules/lodash/isSet.js"(exports2, module2) {
      var baseIsSet = require_baseIsSet();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      module2.exports = isSet;
    }
  });

  // node_modules/lodash/_baseClone.js
  var require_baseClone = __commonJS({
    "node_modules/lodash/_baseClone.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var arrayEach = require_arrayEach();
      var assignValue = require_assignValue();
      var baseAssign = require_baseAssign();
      var baseAssignIn = require_baseAssignIn();
      var cloneBuffer = require_cloneBuffer();
      var copyArray = require_copyArray();
      var copySymbols = require_copySymbols();
      var copySymbolsIn = require_copySymbolsIn();
      var getAllKeys = require_getAllKeys();
      var getAllKeysIn = require_getAllKeysIn();
      var getTag = require_getTag();
      var initCloneArray = require_initCloneArray();
      var initCloneByTag = require_initCloneByTag();
      var initCloneObject = require_initCloneObject();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isMap = require_isMap();
      var isObject = require_isObject();
      var isSet = require_isSet();
      var keys = require_keys();
      var keysIn = require_keysIn();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_FLAT_FLAG = 2;
      var CLONE_SYMBOLS_FLAG = 4;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack2());
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
          value.forEach(function(subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      module2.exports = baseClone;
    }
  });

  // node_modules/lodash/clone.js
  var require_clone = __commonJS({
    "node_modules/lodash/clone.js"(exports2, module2) {
      var baseClone = require_baseClone();
      var CLONE_SYMBOLS_FLAG = 4;
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      module2.exports = clone;
    }
  });

  // node_modules/@chevrotain/utils/lib/src/print.js
  var require_print = __commonJS({
    "node_modules/@chevrotain/utils/lib/src/print.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.PRINT_WARNING = exports2.PRINT_ERROR = void 0;
      function PRINT_ERROR(msg) {
        if (console && console.error) {
          console.error("Error: ".concat(msg));
        }
      }
      exports2.PRINT_ERROR = PRINT_ERROR;
      function PRINT_WARNING(msg) {
        if (console && console.warn) {
          console.warn("Warning: ".concat(msg));
        }
      }
      exports2.PRINT_WARNING = PRINT_WARNING;
    }
  });

  // node_modules/@chevrotain/utils/lib/src/timer.js
  var require_timer = __commonJS({
    "node_modules/@chevrotain/utils/lib/src/timer.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.timer = void 0;
      function timer(func) {
        var start = new Date().getTime();
        var val = func();
        var end = new Date().getTime();
        var total = end - start;
        return { time: total, value: val };
      }
      exports2.timer = timer;
    }
  });

  // node_modules/@chevrotain/utils/lib/src/to-fast-properties.js
  var require_to_fast_properties = __commonJS({
    "node_modules/@chevrotain/utils/lib/src/to-fast-properties.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toFastProperties = void 0;
      function toFastProperties(toBecomeFast) {
        function FakeConstructor() {
        }
        FakeConstructor.prototype = toBecomeFast;
        var fakeInstance = new FakeConstructor();
        function fakeAccess() {
          return typeof fakeInstance.bar;
        }
        fakeAccess();
        fakeAccess();
        if (1)
          return toBecomeFast;
        eval(toBecomeFast);
      }
      exports.toFastProperties = toFastProperties;
    }
  });

  // node_modules/@chevrotain/utils/lib/src/api.js
  var require_api = __commonJS({
    "node_modules/@chevrotain/utils/lib/src/api.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toFastProperties = exports2.timer = exports2.PRINT_ERROR = exports2.PRINT_WARNING = void 0;
      var print_1 = require_print();
      Object.defineProperty(exports2, "PRINT_WARNING", { enumerable: true, get: function() {
        return print_1.PRINT_WARNING;
      } });
      Object.defineProperty(exports2, "PRINT_ERROR", { enumerable: true, get: function() {
        return print_1.PRINT_ERROR;
      } });
      var timer_1 = require_timer();
      Object.defineProperty(exports2, "timer", { enumerable: true, get: function() {
        return timer_1.timer;
      } });
      var to_fast_properties_1 = require_to_fast_properties();
      Object.defineProperty(exports2, "toFastProperties", { enumerable: true, get: function() {
        return to_fast_properties_1.toFastProperties;
      } });
    }
  });

  // node_modules/lodash/_baseSlice.js
  var require_baseSlice = __commonJS({
    "node_modules/lodash/_baseSlice.js"(exports2, module2) {
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      module2.exports = baseSlice;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module2.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports2, module2) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module2.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports2, module2) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module2.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports2, module2) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module2.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports2, module2) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module2.exports = toInteger;
    }
  });

  // node_modules/lodash/drop.js
  var require_drop = __commonJS({
    "node_modules/lodash/drop.js"(exports2, module2) {
      var baseSlice = require_baseSlice();
      var toInteger = require_toInteger();
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === void 0 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      module2.exports = drop;
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module2.exports = isString;
    }
  });

  // node_modules/lodash/_baseIsRegExp.js
  var require_baseIsRegExp = __commonJS({
    "node_modules/lodash/_baseIsRegExp.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var regexpTag = "[object RegExp]";
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      module2.exports = baseIsRegExp;
    }
  });

  // node_modules/lodash/isRegExp.js
  var require_isRegExp = __commonJS({
    "node_modules/lodash/isRegExp.js"(exports2, module2) {
      var baseIsRegExp = require_baseIsRegExp();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      module2.exports = isRegExp;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports2, module2) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module2.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports2, module2) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module2.exports = basePickBy;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports2, module2) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
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
      module2.exports = pickBy;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports2, module2) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module2.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports2, module2) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
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
      module2.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports2, module2) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module2.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports2, module2) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module2.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports2, module2) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module2.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports2, module2) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module2.exports = setToString;
    }
  });

  // node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS({
    "node_modules/lodash/_baseRest.js"(exports2, module2) {
      var identity = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      module2.exports = baseRest;
    }
  });

  // node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS({
    "node_modules/lodash/_isIterateeCall.js"(exports2, module2) {
      var eq = require_eq();
      var isArrayLike = require_isArrayLike();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      module2.exports = isIterateeCall;
    }
  });

  // node_modules/lodash/_createAssigner.js
  var require_createAssigner = __commonJS({
    "node_modules/lodash/_createAssigner.js"(exports2, module2) {
      var baseRest = require_baseRest();
      var isIterateeCall = require_isIterateeCall();
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
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
      module2.exports = createAssigner;
    }
  });

  // node_modules/lodash/assign.js
  var require_assign = __commonJS({
    "node_modules/lodash/assign.js"(exports2, module2) {
      var assignValue = require_assignValue();
      var copyObject = require_copyObject();
      var createAssigner = require_createAssigner();
      var isArrayLike = require_isArrayLike();
      var isPrototype = require_isPrototype();
      var keys = require_keys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      module2.exports = assign;
    }
  });

  // node_modules/@chevrotain/gast/lib/src/model.js
  var require_model = __commonJS({
    "node_modules/@chevrotain/gast/lib/src/model.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.serializeProduction = exports2.serializeGrammar = exports2.Terminal = exports2.Alternation = exports2.RepetitionWithSeparator = exports2.Repetition = exports2.RepetitionMandatoryWithSeparator = exports2.RepetitionMandatory = exports2.Option = exports2.Alternative = exports2.Rule = exports2.NonTerminal = exports2.AbstractProduction = void 0;
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var isString_1 = __importDefault(require_isString());
      var isRegExp_1 = __importDefault(require_isRegExp());
      var pickBy_1 = __importDefault(require_pickBy());
      var assign_1 = __importDefault(require_assign());
      function tokenLabel2(tokType) {
        if (hasTokenLabel(tokType)) {
          return tokType.LABEL;
        } else {
          return tokType.name;
        }
      }
      function hasTokenLabel(obj) {
        return (0, isString_1.default)(obj.LABEL) && obj.LABEL !== "";
      }
      var AbstractProduction = function() {
        function AbstractProduction2(_definition) {
          this._definition = _definition;
        }
        Object.defineProperty(AbstractProduction2.prototype, "definition", {
          get: function() {
            return this._definition;
          },
          set: function(value) {
            this._definition = value;
          },
          enumerable: false,
          configurable: true
        });
        AbstractProduction2.prototype.accept = function(visitor) {
          visitor.visit(this);
          (0, forEach_1.default)(this.definition, function(prod) {
            prod.accept(visitor);
          });
        };
        return AbstractProduction2;
      }();
      exports2.AbstractProduction = AbstractProduction;
      var NonTerminal2 = function(_super) {
        __extends(NonTerminal3, _super);
        function NonTerminal3(options) {
          var _this = _super.call(this, []) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        Object.defineProperty(NonTerminal3.prototype, "definition", {
          get: function() {
            if (this.referencedRule !== void 0) {
              return this.referencedRule.definition;
            }
            return [];
          },
          set: function(definition) {
          },
          enumerable: false,
          configurable: true
        });
        NonTerminal3.prototype.accept = function(visitor) {
          visitor.visit(this);
        };
        return NonTerminal3;
      }(AbstractProduction);
      exports2.NonTerminal = NonTerminal2;
      var Rule2 = function(_super) {
        __extends(Rule3, _super);
        function Rule3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.orgText = "";
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return Rule3;
      }(AbstractProduction);
      exports2.Rule = Rule2;
      var Alternative2 = function(_super) {
        __extends(Alternative3, _super);
        function Alternative3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.ignoreAmbiguities = false;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return Alternative3;
      }(AbstractProduction);
      exports2.Alternative = Alternative2;
      var Option2 = function(_super) {
        __extends(Option3, _super);
        function Option3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return Option3;
      }(AbstractProduction);
      exports2.Option = Option2;
      var RepetitionMandatory2 = function(_super) {
        __extends(RepetitionMandatory3, _super);
        function RepetitionMandatory3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return RepetitionMandatory3;
      }(AbstractProduction);
      exports2.RepetitionMandatory = RepetitionMandatory2;
      var RepetitionMandatoryWithSeparator2 = function(_super) {
        __extends(RepetitionMandatoryWithSeparator3, _super);
        function RepetitionMandatoryWithSeparator3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return RepetitionMandatoryWithSeparator3;
      }(AbstractProduction);
      exports2.RepetitionMandatoryWithSeparator = RepetitionMandatoryWithSeparator2;
      var Repetition2 = function(_super) {
        __extends(Repetition3, _super);
        function Repetition3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return Repetition3;
      }(AbstractProduction);
      exports2.Repetition = Repetition2;
      var RepetitionWithSeparator2 = function(_super) {
        __extends(RepetitionWithSeparator3, _super);
        function RepetitionWithSeparator3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        return RepetitionWithSeparator3;
      }(AbstractProduction);
      exports2.RepetitionWithSeparator = RepetitionWithSeparator2;
      var Alternation2 = function(_super) {
        __extends(Alternation3, _super);
        function Alternation3(options) {
          var _this = _super.call(this, options.definition) || this;
          _this.idx = 1;
          _this.ignoreAmbiguities = false;
          _this.hasPredicates = false;
          (0, assign_1.default)(_this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
          return _this;
        }
        Object.defineProperty(Alternation3.prototype, "definition", {
          get: function() {
            return this._definition;
          },
          set: function(value) {
            this._definition = value;
          },
          enumerable: false,
          configurable: true
        });
        return Alternation3;
      }(AbstractProduction);
      exports2.Alternation = Alternation2;
      var Terminal2 = function() {
        function Terminal3(options) {
          this.idx = 1;
          (0, assign_1.default)(this, (0, pickBy_1.default)(options, function(v) {
            return v !== void 0;
          }));
        }
        Terminal3.prototype.accept = function(visitor) {
          visitor.visit(this);
        };
        return Terminal3;
      }();
      exports2.Terminal = Terminal2;
      function serializeGrammar2(topRules) {
        return (0, map_1.default)(topRules, serializeProduction2);
      }
      exports2.serializeGrammar = serializeGrammar2;
      function serializeProduction2(node) {
        function convertDefinition(definition) {
          return (0, map_1.default)(definition, serializeProduction2);
        }
        if (node instanceof NonTerminal2) {
          var serializedNonTerminal = {
            type: "NonTerminal",
            name: node.nonTerminalName,
            idx: node.idx
          };
          if ((0, isString_1.default)(node.label)) {
            serializedNonTerminal.label = node.label;
          }
          return serializedNonTerminal;
        } else if (node instanceof Alternative2) {
          return {
            type: "Alternative",
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof Option2) {
          return {
            type: "Option",
            idx: node.idx,
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof RepetitionMandatory2) {
          return {
            type: "RepetitionMandatory",
            idx: node.idx,
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof RepetitionMandatoryWithSeparator2) {
          return {
            type: "RepetitionMandatoryWithSeparator",
            idx: node.idx,
            separator: serializeProduction2(new Terminal2({ terminalType: node.separator })),
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof RepetitionWithSeparator2) {
          return {
            type: "RepetitionWithSeparator",
            idx: node.idx,
            separator: serializeProduction2(new Terminal2({ terminalType: node.separator })),
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof Repetition2) {
          return {
            type: "Repetition",
            idx: node.idx,
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof Alternation2) {
          return {
            type: "Alternation",
            idx: node.idx,
            definition: convertDefinition(node.definition)
          };
        } else if (node instanceof Terminal2) {
          var serializedTerminal = {
            type: "Terminal",
            name: node.terminalType.name,
            label: tokenLabel2(node.terminalType),
            idx: node.idx
          };
          if ((0, isString_1.default)(node.label)) {
            serializedTerminal.terminalLabel = node.label;
          }
          var pattern = node.terminalType.PATTERN;
          if (node.terminalType.PATTERN) {
            serializedTerminal.pattern = (0, isRegExp_1.default)(pattern) ? pattern.source : pattern;
          }
          return serializedTerminal;
        } else if (node instanceof Rule2) {
          return {
            type: "Rule",
            name: node.name,
            orgText: node.orgText,
            definition: convertDefinition(node.definition)
          };
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.serializeProduction = serializeProduction2;
    }
  });

  // node_modules/@chevrotain/gast/lib/src/visitor.js
  var require_visitor = __commonJS({
    "node_modules/@chevrotain/gast/lib/src/visitor.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.GAstVisitor = void 0;
      var model_1 = require_model();
      var GAstVisitor2 = function() {
        function GAstVisitor3() {
        }
        GAstVisitor3.prototype.visit = function(node) {
          var nodeAny = node;
          switch (nodeAny.constructor) {
            case model_1.NonTerminal:
              return this.visitNonTerminal(nodeAny);
            case model_1.Alternative:
              return this.visitAlternative(nodeAny);
            case model_1.Option:
              return this.visitOption(nodeAny);
            case model_1.RepetitionMandatory:
              return this.visitRepetitionMandatory(nodeAny);
            case model_1.RepetitionMandatoryWithSeparator:
              return this.visitRepetitionMandatoryWithSeparator(nodeAny);
            case model_1.RepetitionWithSeparator:
              return this.visitRepetitionWithSeparator(nodeAny);
            case model_1.Repetition:
              return this.visitRepetition(nodeAny);
            case model_1.Alternation:
              return this.visitAlternation(nodeAny);
            case model_1.Terminal:
              return this.visitTerminal(nodeAny);
            case model_1.Rule:
              return this.visitRule(nodeAny);
            default:
              throw Error("non exhaustive match");
          }
        };
        GAstVisitor3.prototype.visitNonTerminal = function(node) {
        };
        GAstVisitor3.prototype.visitAlternative = function(node) {
        };
        GAstVisitor3.prototype.visitOption = function(node) {
        };
        GAstVisitor3.prototype.visitRepetition = function(node) {
        };
        GAstVisitor3.prototype.visitRepetitionMandatory = function(node) {
        };
        GAstVisitor3.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
        };
        GAstVisitor3.prototype.visitRepetitionWithSeparator = function(node) {
        };
        GAstVisitor3.prototype.visitAlternation = function(node) {
        };
        GAstVisitor3.prototype.visitTerminal = function(node) {
        };
        GAstVisitor3.prototype.visitRule = function(node) {
        };
        return GAstVisitor3;
      }();
      exports2.GAstVisitor = GAstVisitor2;
    }
  });

  // node_modules/lodash/_baseSome.js
  var require_baseSome = __commonJS({
    "node_modules/lodash/_baseSome.js"(exports2, module2) {
      var baseEach = require_baseEach();
      function baseSome(collection, predicate) {
        var result;
        baseEach(collection, function(value, index, collection2) {
          result = predicate(value, index, collection2);
          return !result;
        });
        return !!result;
      }
      module2.exports = baseSome;
    }
  });

  // node_modules/lodash/some.js
  var require_some = __commonJS({
    "node_modules/lodash/some.js"(exports2, module2) {
      var arraySome = require_arraySome();
      var baseIteratee = require_baseIteratee();
      var baseSome = require_baseSome();
      var isArray = require_isArray();
      var isIterateeCall = require_isIterateeCall();
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = void 0;
        }
        return func(collection, baseIteratee(predicate, 3));
      }
      module2.exports = some;
    }
  });

  // node_modules/lodash/_arrayEvery.js
  var require_arrayEvery = __commonJS({
    "node_modules/lodash/_arrayEvery.js"(exports2, module2) {
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      module2.exports = arrayEvery;
    }
  });

  // node_modules/lodash/_baseEvery.js
  var require_baseEvery = __commonJS({
    "node_modules/lodash/_baseEvery.js"(exports2, module2) {
      var baseEach = require_baseEach();
      function baseEvery(collection, predicate) {
        var result = true;
        baseEach(collection, function(value, index, collection2) {
          result = !!predicate(value, index, collection2);
          return result;
        });
        return result;
      }
      module2.exports = baseEvery;
    }
  });

  // node_modules/lodash/every.js
  var require_every = __commonJS({
    "node_modules/lodash/every.js"(exports2, module2) {
      var arrayEvery = require_arrayEvery();
      var baseEvery = require_baseEvery();
      var baseIteratee = require_baseIteratee();
      var isArray = require_isArray();
      var isIterateeCall = require_isIterateeCall();
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = void 0;
        }
        return func(collection, baseIteratee(predicate, 3));
      }
      module2.exports = every;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module2.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_baseIsNaN.js
  var require_baseIsNaN = __commonJS({
    "node_modules/lodash/_baseIsNaN.js"(exports2, module2) {
      function baseIsNaN(value) {
        return value !== value;
      }
      module2.exports = baseIsNaN;
    }
  });

  // node_modules/lodash/_strictIndexOf.js
  var require_strictIndexOf = __commonJS({
    "node_modules/lodash/_strictIndexOf.js"(exports2, module2) {
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      module2.exports = strictIndexOf;
    }
  });

  // node_modules/lodash/_baseIndexOf.js
  var require_baseIndexOf = __commonJS({
    "node_modules/lodash/_baseIndexOf.js"(exports2, module2) {
      var baseFindIndex = require_baseFindIndex();
      var baseIsNaN = require_baseIsNaN();
      var strictIndexOf = require_strictIndexOf();
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      module2.exports = baseIndexOf;
    }
  });

  // node_modules/lodash/includes.js
  var require_includes = __commonJS({
    "node_modules/lodash/includes.js"(exports2, module2) {
      var baseIndexOf = require_baseIndexOf();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var toInteger = require_toInteger();
      var values = require_values();
      var nativeMax = Math.max;
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      module2.exports = includes;
    }
  });

  // node_modules/@chevrotain/gast/lib/src/helpers.js
  var require_helpers = __commonJS({
    "node_modules/@chevrotain/gast/lib/src/helpers.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getProductionDslName = exports2.isBranchingProd = exports2.isOptionalProd = exports2.isSequenceProd = void 0;
      var some_1 = __importDefault(require_some());
      var every_1 = __importDefault(require_every());
      var includes_1 = __importDefault(require_includes());
      var model_1 = require_model();
      function isSequenceProd(prod) {
        return prod instanceof model_1.Alternative || prod instanceof model_1.Option || prod instanceof model_1.Repetition || prod instanceof model_1.RepetitionMandatory || prod instanceof model_1.RepetitionMandatoryWithSeparator || prod instanceof model_1.RepetitionWithSeparator || prod instanceof model_1.Terminal || prod instanceof model_1.Rule;
      }
      exports2.isSequenceProd = isSequenceProd;
      function isOptionalProd(prod, alreadyVisited) {
        if (alreadyVisited === void 0) {
          alreadyVisited = [];
        }
        var isDirectlyOptional = prod instanceof model_1.Option || prod instanceof model_1.Repetition || prod instanceof model_1.RepetitionWithSeparator;
        if (isDirectlyOptional) {
          return true;
        }
        if (prod instanceof model_1.Alternation) {
          return (0, some_1.default)(prod.definition, function(subProd) {
            return isOptionalProd(subProd, alreadyVisited);
          });
        } else if (prod instanceof model_1.NonTerminal && (0, includes_1.default)(alreadyVisited, prod)) {
          return false;
        } else if (prod instanceof model_1.AbstractProduction) {
          if (prod instanceof model_1.NonTerminal) {
            alreadyVisited.push(prod);
          }
          return (0, every_1.default)(prod.definition, function(subProd) {
            return isOptionalProd(subProd, alreadyVisited);
          });
        } else {
          return false;
        }
      }
      exports2.isOptionalProd = isOptionalProd;
      function isBranchingProd(prod) {
        return prod instanceof model_1.Alternation;
      }
      exports2.isBranchingProd = isBranchingProd;
      function getProductionDslName(prod) {
        if (prod instanceof model_1.NonTerminal) {
          return "SUBRULE";
        } else if (prod instanceof model_1.Option) {
          return "OPTION";
        } else if (prod instanceof model_1.Alternation) {
          return "OR";
        } else if (prod instanceof model_1.RepetitionMandatory) {
          return "AT_LEAST_ONE";
        } else if (prod instanceof model_1.RepetitionMandatoryWithSeparator) {
          return "AT_LEAST_ONE_SEP";
        } else if (prod instanceof model_1.RepetitionWithSeparator) {
          return "MANY_SEP";
        } else if (prod instanceof model_1.Repetition) {
          return "MANY";
        } else if (prod instanceof model_1.Terminal) {
          return "CONSUME";
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.getProductionDslName = getProductionDslName;
    }
  });

  // node_modules/@chevrotain/gast/lib/src/api.js
  var require_api2 = __commonJS({
    "node_modules/@chevrotain/gast/lib/src/api.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isSequenceProd = exports2.isBranchingProd = exports2.isOptionalProd = exports2.getProductionDslName = exports2.GAstVisitor = exports2.serializeProduction = exports2.serializeGrammar = exports2.Alternative = exports2.Alternation = exports2.RepetitionWithSeparator = exports2.RepetitionMandatoryWithSeparator = exports2.RepetitionMandatory = exports2.Repetition = exports2.Option = exports2.NonTerminal = exports2.Terminal = exports2.Rule = void 0;
      var model_1 = require_model();
      Object.defineProperty(exports2, "Rule", { enumerable: true, get: function() {
        return model_1.Rule;
      } });
      Object.defineProperty(exports2, "Terminal", { enumerable: true, get: function() {
        return model_1.Terminal;
      } });
      Object.defineProperty(exports2, "NonTerminal", { enumerable: true, get: function() {
        return model_1.NonTerminal;
      } });
      Object.defineProperty(exports2, "Option", { enumerable: true, get: function() {
        return model_1.Option;
      } });
      Object.defineProperty(exports2, "Repetition", { enumerable: true, get: function() {
        return model_1.Repetition;
      } });
      Object.defineProperty(exports2, "RepetitionMandatory", { enumerable: true, get: function() {
        return model_1.RepetitionMandatory;
      } });
      Object.defineProperty(exports2, "RepetitionMandatoryWithSeparator", { enumerable: true, get: function() {
        return model_1.RepetitionMandatoryWithSeparator;
      } });
      Object.defineProperty(exports2, "RepetitionWithSeparator", { enumerable: true, get: function() {
        return model_1.RepetitionWithSeparator;
      } });
      Object.defineProperty(exports2, "Alternation", { enumerable: true, get: function() {
        return model_1.Alternation;
      } });
      Object.defineProperty(exports2, "Alternative", { enumerable: true, get: function() {
        return model_1.Alternative;
      } });
      Object.defineProperty(exports2, "serializeGrammar", { enumerable: true, get: function() {
        return model_1.serializeGrammar;
      } });
      Object.defineProperty(exports2, "serializeProduction", { enumerable: true, get: function() {
        return model_1.serializeProduction;
      } });
      var visitor_1 = require_visitor();
      Object.defineProperty(exports2, "GAstVisitor", { enumerable: true, get: function() {
        return visitor_1.GAstVisitor;
      } });
      var helpers_1 = require_helpers();
      Object.defineProperty(exports2, "getProductionDslName", { enumerable: true, get: function() {
        return helpers_1.getProductionDslName;
      } });
      Object.defineProperty(exports2, "isOptionalProd", { enumerable: true, get: function() {
        return helpers_1.isOptionalProd;
      } });
      Object.defineProperty(exports2, "isBranchingProd", { enumerable: true, get: function() {
        return helpers_1.isBranchingProd;
      } });
      Object.defineProperty(exports2, "isSequenceProd", { enumerable: true, get: function() {
        return helpers_1.isSequenceProd;
      } });
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/rest.js
  var require_rest = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/rest.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RestWalker = void 0;
      var drop_1 = __importDefault(require_drop());
      var forEach_1 = __importDefault(require_forEach());
      var gast_1 = require_api2();
      var RestWalker = function() {
        function RestWalker2() {
        }
        RestWalker2.prototype.walk = function(prod, prevRest) {
          var _this = this;
          if (prevRest === void 0) {
            prevRest = [];
          }
          (0, forEach_1.default)(prod.definition, function(subProd, index) {
            var currRest = (0, drop_1.default)(prod.definition, index + 1);
            if (subProd instanceof gast_1.NonTerminal) {
              _this.walkProdRef(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.Terminal) {
              _this.walkTerminal(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.Alternative) {
              _this.walkFlat(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.Option) {
              _this.walkOption(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.RepetitionMandatory) {
              _this.walkAtLeastOne(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.RepetitionMandatoryWithSeparator) {
              _this.walkAtLeastOneSep(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.RepetitionWithSeparator) {
              _this.walkManySep(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.Repetition) {
              _this.walkMany(subProd, currRest, prevRest);
            } else if (subProd instanceof gast_1.Alternation) {
              _this.walkOr(subProd, currRest, prevRest);
            } else {
              throw Error("non exhaustive match");
            }
          });
        };
        RestWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        };
        RestWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        };
        RestWalker2.prototype.walkFlat = function(flatProd, currRest, prevRest) {
          var fullOrRest = currRest.concat(prevRest);
          this.walk(flatProd, fullOrRest);
        };
        RestWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
          var fullOrRest = currRest.concat(prevRest);
          this.walk(optionProd, fullOrRest);
        };
        RestWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          var fullAtLeastOneRest = [
            new gast_1.Option({ definition: atLeastOneProd.definition })
          ].concat(currRest, prevRest);
          this.walk(atLeastOneProd, fullAtLeastOneRest);
        };
        RestWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
          var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
          this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
        };
        RestWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          var fullManyRest = [
            new gast_1.Option({ definition: manyProd.definition })
          ].concat(currRest, prevRest);
          this.walk(manyProd, fullManyRest);
        };
        RestWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
          this.walk(manySepProd, fullManySepRest);
        };
        RestWalker2.prototype.walkOr = function(orProd, currRest, prevRest) {
          var _this = this;
          var fullOrRest = currRest.concat(prevRest);
          (0, forEach_1.default)(orProd.definition, function(alt) {
            var prodWrapper = new gast_1.Alternative({ definition: [alt] });
            _this.walk(prodWrapper, fullOrRest);
          });
        };
        return RestWalker2;
      }();
      exports2.RestWalker = RestWalker;
      function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
        var repSepRest = [
          new gast_1.Option({
            definition: [
              new gast_1.Terminal({ terminalType: repSepProd.separator })
            ].concat(repSepProd.definition)
          })
        ];
        var fullRepSepRest = repSepRest.concat(currRest, prevRest);
        return fullRepSepRest;
      }
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module2.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports2, module2) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module2.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports2, module2) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module2.exports = flatten;
    }
  });

  // node_modules/lodash/_arrayIncludes.js
  var require_arrayIncludes = __commonJS({
    "node_modules/lodash/_arrayIncludes.js"(exports2, module2) {
      var baseIndexOf = require_baseIndexOf();
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      module2.exports = arrayIncludes;
    }
  });

  // node_modules/lodash/_arrayIncludesWith.js
  var require_arrayIncludesWith = __commonJS({
    "node_modules/lodash/_arrayIncludesWith.js"(exports2, module2) {
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      module2.exports = arrayIncludesWith;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports2, module2) {
      function noop() {
      }
      module2.exports = noop;
    }
  });

  // node_modules/lodash/_createSet.js
  var require_createSet = __commonJS({
    "node_modules/lodash/_createSet.js"(exports2, module2) {
      var Set2 = require_Set();
      var noop = require_noop();
      var setToArray = require_setToArray();
      var INFINITY = 1 / 0;
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
        return new Set2(values);
      };
      module2.exports = createSet;
    }
  });

  // node_modules/lodash/_baseUniq.js
  var require_baseUniq = __commonJS({
    "node_modules/lodash/_baseUniq.js"(exports2, module2) {
      var SetCache = require_SetCache();
      var arrayIncludes = require_arrayIncludes();
      var arrayIncludesWith = require_arrayIncludesWith();
      var cacheHas = require_cacheHas();
      var createSet = require_createSet();
      var setToArray = require_setToArray();
      var LARGE_ARRAY_SIZE = 200;
      function baseUniq(array, iteratee, comparator) {
        var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
        if (comparator) {
          isCommon = false;
          includes = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set = iteratee ? null : createSet(array);
          if (set) {
            return setToArray(set);
          }
          isCommon = false;
          includes = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee ? [] : result;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee ? iteratee(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
        return result;
      }
      module2.exports = baseUniq;
    }
  });

  // node_modules/lodash/uniq.js
  var require_uniq = __commonJS({
    "node_modules/lodash/uniq.js"(exports2, module2) {
      var baseUniq = require_baseUniq();
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      module2.exports = uniq;
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/first.js
  var require_first = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/first.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.firstForTerminal = exports2.firstForBranching = exports2.firstForSequence = exports2.first = void 0;
      var flatten_1 = __importDefault(require_flatten());
      var uniq_1 = __importDefault(require_uniq());
      var map_1 = __importDefault(require_map());
      var gast_1 = require_api2();
      var gast_2 = require_api2();
      function first(prod) {
        if (prod instanceof gast_1.NonTerminal) {
          return first(prod.referencedRule);
        } else if (prod instanceof gast_1.Terminal) {
          return firstForTerminal(prod);
        } else if ((0, gast_2.isSequenceProd)(prod)) {
          return firstForSequence(prod);
        } else if ((0, gast_2.isBranchingProd)(prod)) {
          return firstForBranching(prod);
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.first = first;
      function firstForSequence(prod) {
        var firstSet = [];
        var seq = prod.definition;
        var nextSubProdIdx = 0;
        var hasInnerProdsRemaining = seq.length > nextSubProdIdx;
        var currSubProd;
        var isLastInnerProdOptional = true;
        while (hasInnerProdsRemaining && isLastInnerProdOptional) {
          currSubProd = seq[nextSubProdIdx];
          isLastInnerProdOptional = (0, gast_2.isOptionalProd)(currSubProd);
          firstSet = firstSet.concat(first(currSubProd));
          nextSubProdIdx = nextSubProdIdx + 1;
          hasInnerProdsRemaining = seq.length > nextSubProdIdx;
        }
        return (0, uniq_1.default)(firstSet);
      }
      exports2.firstForSequence = firstForSequence;
      function firstForBranching(prod) {
        var allAlternativesFirsts = (0, map_1.default)(prod.definition, function(innerProd) {
          return first(innerProd);
        });
        return (0, uniq_1.default)((0, flatten_1.default)(allAlternativesFirsts));
      }
      exports2.firstForBranching = firstForBranching;
      function firstForTerminal(terminal) {
        return [terminal.terminalType];
      }
      exports2.firstForTerminal = firstForTerminal;
    }
  });

  // node_modules/chevrotain/lib/src/parse/constants.js
  var require_constants = __commonJS({
    "node_modules/chevrotain/lib/src/parse/constants.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.IN = void 0;
      exports2.IN = "_~IN~_";
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/follow.js
  var require_follow = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/follow.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.buildInProdFollowPrefix = exports2.buildBetweenProdsFollowPrefix = exports2.computeAllProdsFollows = exports2.ResyncFollowsWalker = void 0;
      var rest_1 = require_rest();
      var first_1 = require_first();
      var forEach_1 = __importDefault(require_forEach());
      var assign_1 = __importDefault(require_assign());
      var constants_1 = require_constants();
      var gast_1 = require_api2();
      var ResyncFollowsWalker = function(_super) {
        __extends(ResyncFollowsWalker2, _super);
        function ResyncFollowsWalker2(topProd) {
          var _this = _super.call(this) || this;
          _this.topProd = topProd;
          _this.follows = {};
          return _this;
        }
        ResyncFollowsWalker2.prototype.startWalking = function() {
          this.walk(this.topProd);
          return this.follows;
        };
        ResyncFollowsWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        };
        ResyncFollowsWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
          var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
          var fullRest = currRest.concat(prevRest);
          var restProd = new gast_1.Alternative({ definition: fullRest });
          var t_in_topProd_follows = (0, first_1.first)(restProd);
          this.follows[followName] = t_in_topProd_follows;
        };
        return ResyncFollowsWalker2;
      }(rest_1.RestWalker);
      exports2.ResyncFollowsWalker = ResyncFollowsWalker;
      function computeAllProdsFollows(topProductions) {
        var reSyncFollows = {};
        (0, forEach_1.default)(topProductions, function(topProd) {
          var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
          (0, assign_1.default)(reSyncFollows, currRefsFollow);
        });
        return reSyncFollows;
      }
      exports2.computeAllProdsFollows = computeAllProdsFollows;
      function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
        return inner.name + occurenceInParent + constants_1.IN;
      }
      exports2.buildBetweenProdsFollowPrefix = buildBetweenProdsFollowPrefix;
      function buildInProdFollowPrefix(terminal) {
        var terminalName = terminal.terminalType.name;
        return terminalName + terminal.idx + constants_1.IN;
      }
      exports2.buildInProdFollowPrefix = buildInProdFollowPrefix;
    }
  });

  // node_modules/lodash/isUndefined.js
  var require_isUndefined = __commonJS({
    "node_modules/lodash/isUndefined.js"(exports2, module2) {
      function isUndefined(value) {
        return value === void 0;
      }
      module2.exports = isUndefined;
    }
  });

  // node_modules/regexp-to-ast/lib/regexp-to-ast.js
  var require_regexp_to_ast = __commonJS({
    "node_modules/regexp-to-ast/lib/regexp-to-ast.js"(exports2, module2) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module2 === "object" && module2.exports) {
          module2.exports = factory();
        } else {
          root.regexpToAst = factory();
        }
      })(
        typeof self !== "undefined" ? self : exports2,
        function() {
          function RegExpParser() {
          }
          RegExpParser.prototype.saveState = function() {
            return {
              idx: this.idx,
              input: this.input,
              groupIdx: this.groupIdx
            };
          };
          RegExpParser.prototype.restoreState = function(newState) {
            this.idx = newState.idx;
            this.input = newState.input;
            this.groupIdx = newState.groupIdx;
          };
          RegExpParser.prototype.pattern = function(input) {
            this.idx = 0;
            this.input = input;
            this.groupIdx = 0;
            this.consumeChar("/");
            var value = this.disjunction();
            this.consumeChar("/");
            var flags = {
              type: "Flags",
              loc: { begin: this.idx, end: input.length },
              global: false,
              ignoreCase: false,
              multiLine: false,
              unicode: false,
              sticky: false
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
              throw Error(
                "Redundant input: " + this.input.substring(this.idx)
              );
            }
            return {
              type: "Pattern",
              flags,
              value,
              loc: this.loc(0)
            };
          };
          RegExpParser.prototype.disjunction = function() {
            var alts = [];
            var begin = this.idx;
            alts.push(this.alternative());
            while (this.peekChar() === "|") {
              this.consumeChar("|");
              alts.push(this.alternative());
            }
            return { type: "Disjunction", value: alts, loc: this.loc(begin) };
          };
          RegExpParser.prototype.alternative = function() {
            var terms = [];
            var begin = this.idx;
            while (this.isTerm()) {
              terms.push(this.term());
            }
            return { type: "Alternative", value: terms, loc: this.loc(begin) };
          };
          RegExpParser.prototype.term = function() {
            if (this.isAssertion()) {
              return this.assertion();
            } else {
              return this.atom();
            }
          };
          RegExpParser.prototype.assertion = function() {
            var begin = this.idx;
            switch (this.popChar()) {
              case "^":
                return {
                  type: "StartAnchor",
                  loc: this.loc(begin)
                };
              case "$":
                return { type: "EndAnchor", loc: this.loc(begin) };
              case "\\":
                switch (this.popChar()) {
                  case "b":
                    return {
                      type: "WordBoundary",
                      loc: this.loc(begin)
                    };
                  case "B":
                    return {
                      type: "NonWordBoundary",
                      loc: this.loc(begin)
                    };
                }
                throw Error("Invalid Assertion Escape");
              case "(":
                this.consumeChar("?");
                var type;
                switch (this.popChar()) {
                  case "=":
                    type = "Lookahead";
                    break;
                  case "!":
                    type = "NegativeLookahead";
                    break;
                }
                ASSERT_EXISTS(type);
                var disjunction = this.disjunction();
                this.consumeChar(")");
                return {
                  type,
                  value: disjunction,
                  loc: this.loc(begin)
                };
            }
            ASSERT_NEVER_REACH_HERE();
          };
          RegExpParser.prototype.quantifier = function(isBacktracking) {
            var range;
            var begin = this.idx;
            switch (this.popChar()) {
              case "*":
                range = {
                  atLeast: 0,
                  atMost: Infinity
                };
                break;
              case "+":
                range = {
                  atLeast: 1,
                  atMost: Infinity
                };
                break;
              case "?":
                range = {
                  atLeast: 0,
                  atMost: 1
                };
                break;
              case "{":
                var atLeast = this.integerIncludingZero();
                switch (this.popChar()) {
                  case "}":
                    range = {
                      atLeast,
                      atMost: atLeast
                    };
                    break;
                  case ",":
                    var atMost;
                    if (this.isDigit()) {
                      atMost = this.integerIncludingZero();
                      range = {
                        atLeast,
                        atMost
                      };
                    } else {
                      range = {
                        atLeast,
                        atMost: Infinity
                      };
                    }
                    this.consumeChar("}");
                    break;
                }
                if (isBacktracking === true && range === void 0) {
                  return void 0;
                }
                ASSERT_EXISTS(range);
                break;
            }
            if (isBacktracking === true && range === void 0) {
              return void 0;
            }
            ASSERT_EXISTS(range);
            if (this.peekChar(0) === "?") {
              this.consumeChar("?");
              range.greedy = false;
            } else {
              range.greedy = true;
            }
            range.type = "Quantifier";
            range.loc = this.loc(begin);
            return range;
          };
          RegExpParser.prototype.atom = function() {
            var atom;
            var begin = this.idx;
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
            if (atom === void 0 && this.isPatternCharacter()) {
              atom = this.patternCharacter();
            }
            ASSERT_EXISTS(atom);
            atom.loc = this.loc(begin);
            if (this.isQuantifier()) {
              atom.quantifier = this.quantifier();
            }
            return atom;
          };
          RegExpParser.prototype.dotAll = function() {
            this.consumeChar(".");
            return {
              type: "Set",
              complement: true,
              value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
            };
          };
          RegExpParser.prototype.atomEscape = function() {
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
          };
          RegExpParser.prototype.decimalEscapeAtom = function() {
            var value = this.positiveInteger();
            return { type: "GroupBackReference", value };
          };
          RegExpParser.prototype.characterClassEscape = function() {
            var set;
            var complement = false;
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
            ASSERT_EXISTS(set);
            return { type: "Set", value: set, complement };
          };
          RegExpParser.prototype.controlEscapeAtom = function() {
            var escapeCode;
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
                escapeCode = cc("	");
                break;
              case "v":
                escapeCode = cc("\v");
                break;
            }
            ASSERT_EXISTS(escapeCode);
            return { type: "Character", value: escapeCode };
          };
          RegExpParser.prototype.controlLetterEscapeAtom = function() {
            this.consumeChar("c");
            var letter = this.popChar();
            if (/[a-zA-Z]/.test(letter) === false) {
              throw Error("Invalid ");
            }
            var letterCode = letter.toUpperCase().charCodeAt(0) - 64;
            return { type: "Character", value: letterCode };
          };
          RegExpParser.prototype.nulCharacterAtom = function() {
            this.consumeChar("0");
            return { type: "Character", value: cc("\0") };
          };
          RegExpParser.prototype.hexEscapeSequenceAtom = function() {
            this.consumeChar("x");
            return this.parseHexDigits(2);
          };
          RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {
            this.consumeChar("u");
            return this.parseHexDigits(4);
          };
          RegExpParser.prototype.identityEscapeAtom = function() {
            var escapedChar = this.popChar();
            return { type: "Character", value: cc(escapedChar) };
          };
          RegExpParser.prototype.classPatternCharacterAtom = function() {
            switch (this.peekChar()) {
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
              case "\\":
              case "]":
                throw Error("TBD");
              default:
                var nextChar = this.popChar();
                return { type: "Character", value: cc(nextChar) };
            }
          };
          RegExpParser.prototype.characterClass = function() {
            var set = [];
            var complement = false;
            this.consumeChar("[");
            if (this.peekChar(0) === "^") {
              this.consumeChar("^");
              complement = true;
            }
            while (this.isClassAtom()) {
              var from = this.classAtom();
              var isFromSingleChar = from.type === "Character";
              if (isFromSingleChar && this.isRangeDash()) {
                this.consumeChar("-");
                var to = this.classAtom();
                var isToSingleChar = to.type === "Character";
                if (isToSingleChar) {
                  if (to.value < from.value) {
                    throw Error("Range out of order in character class");
                  }
                  set.push({ from: from.value, to: to.value });
                } else {
                  insertToSet(from.value, set);
                  set.push(cc("-"));
                  insertToSet(to.value, set);
                }
              } else {
                insertToSet(from.value, set);
              }
            }
            this.consumeChar("]");
            return { type: "Set", complement, value: set };
          };
          RegExpParser.prototype.classAtom = function() {
            switch (this.peekChar()) {
              case "]":
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
                throw Error("TBD");
              case "\\":
                return this.classEscape();
              default:
                return this.classPatternCharacterAtom();
            }
          };
          RegExpParser.prototype.classEscape = function() {
            this.consumeChar("\\");
            switch (this.peekChar()) {
              case "b":
                this.consumeChar("b");
                return { type: "Character", value: cc("\b") };
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
          };
          RegExpParser.prototype.group = function() {
            var capturing = true;
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
            var value = this.disjunction();
            this.consumeChar(")");
            var groupAst = {
              type: "Group",
              capturing,
              value
            };
            if (capturing) {
              groupAst.idx = this.groupIdx;
            }
            return groupAst;
          };
          RegExpParser.prototype.positiveInteger = function() {
            var number = this.popChar();
            if (decimalPatternNoZero.test(number) === false) {
              throw Error("Expecting a positive integer");
            }
            while (decimalPattern.test(this.peekChar(0))) {
              number += this.popChar();
            }
            return parseInt(number, 10);
          };
          RegExpParser.prototype.integerIncludingZero = function() {
            var number = this.popChar();
            if (decimalPattern.test(number) === false) {
              throw Error("Expecting an integer");
            }
            while (decimalPattern.test(this.peekChar(0))) {
              number += this.popChar();
            }
            return parseInt(number, 10);
          };
          RegExpParser.prototype.patternCharacter = function() {
            var nextChar = this.popChar();
            switch (nextChar) {
              case "\n":
              case "\r":
              case "\u2028":
              case "\u2029":
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
                throw Error("TBD");
              default:
                return { type: "Character", value: cc(nextChar) };
            }
          };
          RegExpParser.prototype.isRegExpFlag = function() {
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
          };
          RegExpParser.prototype.isRangeDash = function() {
            return this.peekChar() === "-" && this.isClassAtom(1);
          };
          RegExpParser.prototype.isDigit = function() {
            return decimalPattern.test(this.peekChar(0));
          };
          RegExpParser.prototype.isClassAtom = function(howMuch) {
            if (howMuch === void 0) {
              howMuch = 0;
            }
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
          };
          RegExpParser.prototype.isTerm = function() {
            return this.isAtom() || this.isAssertion();
          };
          RegExpParser.prototype.isAtom = function() {
            if (this.isPatternCharacter()) {
              return true;
            }
            switch (this.peekChar(0)) {
              case ".":
              case "\\":
              case "[":
              case "(":
                return true;
              default:
                return false;
            }
          };
          RegExpParser.prototype.isAssertion = function() {
            switch (this.peekChar(0)) {
              case "^":
              case "$":
                return true;
              case "\\":
                switch (this.peekChar(1)) {
                  case "b":
                  case "B":
                    return true;
                  default:
                    return false;
                }
              case "(":
                return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
              default:
                return false;
            }
          };
          RegExpParser.prototype.isQuantifier = function() {
            var prevState = this.saveState();
            try {
              return this.quantifier(true) !== void 0;
            } catch (e) {
              return false;
            } finally {
              this.restoreState(prevState);
            }
          };
          RegExpParser.prototype.isPatternCharacter = function() {
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
          };
          RegExpParser.prototype.parseHexDigits = function(howMany) {
            var hexString = "";
            for (var i2 = 0; i2 < howMany; i2++) {
              var hexChar = this.popChar();
              if (hexDigitPattern.test(hexChar) === false) {
                throw Error("Expecting a HexDecimal digits");
              }
              hexString += hexChar;
            }
            var charCode = parseInt(hexString, 16);
            return { type: "Character", value: charCode };
          };
          RegExpParser.prototype.peekChar = function(howMuch) {
            if (howMuch === void 0) {
              howMuch = 0;
            }
            return this.input[this.idx + howMuch];
          };
          RegExpParser.prototype.popChar = function() {
            var nextChar = this.peekChar(0);
            this.consumeChar();
            return nextChar;
          };
          RegExpParser.prototype.consumeChar = function(char) {
            if (char !== void 0 && this.input[this.idx] !== char) {
              throw Error(
                "Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx
              );
            }
            if (this.idx >= this.input.length) {
              throw Error("Unexpected end of input");
            }
            this.idx++;
          };
          RegExpParser.prototype.loc = function(begin) {
            return { begin, end: this.idx };
          };
          var hexDigitPattern = /[0-9a-fA-F]/;
          var decimalPattern = /[0-9]/;
          var decimalPatternNoZero = /[1-9]/;
          function cc(char) {
            return char.charCodeAt(0);
          }
          function insertToSet(item, set) {
            if (item.length !== void 0) {
              item.forEach(function(subItem) {
                set.push(subItem);
              });
            } else {
              set.push(item);
            }
          }
          function addFlag(flagObj, flagKey) {
            if (flagObj[flagKey] === true) {
              throw "duplicate flag " + flagKey;
            }
            flagObj[flagKey] = true;
          }
          function ASSERT_EXISTS(obj) {
            if (obj === void 0) {
              throw Error("Internal Error - Should never get here!");
            }
          }
          function ASSERT_NEVER_REACH_HERE() {
            throw Error("Internal Error - Should never get here!");
          }
          var i;
          var digitsCharCodes = [];
          for (i = cc("0"); i <= cc("9"); i++) {
            digitsCharCodes.push(i);
          }
          var wordCharCodes = [cc("_")].concat(digitsCharCodes);
          for (i = cc("a"); i <= cc("z"); i++) {
            wordCharCodes.push(i);
          }
          for (i = cc("A"); i <= cc("Z"); i++) {
            wordCharCodes.push(i);
          }
          var whitespaceCodes = [
            cc(" "),
            cc("\f"),
            cc("\n"),
            cc("\r"),
            cc("	"),
            cc("\v"),
            cc("	"),
            cc("\xA0"),
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
            cc("\u200A"),
            cc("\u2028"),
            cc("\u2029"),
            cc("\u202F"),
            cc("\u205F"),
            cc("\u3000"),
            cc("\uFEFF")
          ];
          function BaseRegExpVisitor() {
          }
          BaseRegExpVisitor.prototype.visitChildren = function(node) {
            for (var key in node) {
              var child = node[key];
              if (node.hasOwnProperty(key)) {
                if (child.type !== void 0) {
                  this.visit(child);
                } else if (Array.isArray(child)) {
                  child.forEach(function(subChild) {
                    this.visit(subChild);
                  }, this);
                }
              }
            }
          };
          BaseRegExpVisitor.prototype.visit = function(node) {
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
          };
          BaseRegExpVisitor.prototype.visitPattern = function(node) {
          };
          BaseRegExpVisitor.prototype.visitFlags = function(node) {
          };
          BaseRegExpVisitor.prototype.visitDisjunction = function(node) {
          };
          BaseRegExpVisitor.prototype.visitAlternative = function(node) {
          };
          BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {
          };
          BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {
          };
          BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {
          };
          BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {
          };
          BaseRegExpVisitor.prototype.visitLookahead = function(node) {
          };
          BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {
          };
          BaseRegExpVisitor.prototype.visitCharacter = function(node) {
          };
          BaseRegExpVisitor.prototype.visitSet = function(node) {
          };
          BaseRegExpVisitor.prototype.visitGroup = function(node) {
          };
          BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {
          };
          BaseRegExpVisitor.prototype.visitQuantifier = function(node) {
          };
          return {
            RegExpParser,
            BaseRegExpVisitor,
            VERSION: "0.5.0"
          };
        }
      );
    }
  });

  // node_modules/lodash/head.js
  var require_head = __commonJS({
    "node_modules/lodash/head.js"(exports2, module2) {
      function head(array) {
        return array && array.length ? array[0] : void 0;
      }
      module2.exports = head;
    }
  });

  // node_modules/lodash/first.js
  var require_first2 = __commonJS({
    "node_modules/lodash/first.js"(exports2, module2) {
      module2.exports = require_head();
    }
  });

  // node_modules/lodash/compact.js
  var require_compact = __commonJS({
    "node_modules/lodash/compact.js"(exports2, module2) {
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module2.exports = compact;
    }
  });

  // node_modules/lodash/_baseFilter.js
  var require_baseFilter = __commonJS({
    "node_modules/lodash/_baseFilter.js"(exports2, module2) {
      var baseEach = require_baseEach();
      function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result.push(value);
          }
        });
        return result;
      }
      module2.exports = baseFilter;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports2, module2) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module2.exports = negate;
    }
  });

  // node_modules/lodash/reject.js
  var require_reject = __commonJS({
    "node_modules/lodash/reject.js"(exports2, module2) {
      var arrayFilter = require_arrayFilter();
      var baseFilter = require_baseFilter();
      var baseIteratee = require_baseIteratee();
      var isArray = require_isArray();
      var negate = require_negate();
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(baseIteratee(predicate, 3)));
      }
      module2.exports = reject;
    }
  });

  // node_modules/lodash/_baseDifference.js
  var require_baseDifference = __commonJS({
    "node_modules/lodash/_baseDifference.js"(exports2, module2) {
      var SetCache = require_SetCache();
      var arrayIncludes = require_arrayIncludes();
      var arrayIncludesWith = require_arrayIncludesWith();
      var arrayMap = require_arrayMap();
      var baseUnary = require_baseUnary();
      var cacheHas = require_cacheHas();
      var LARGE_ARRAY_SIZE = 200;
      function baseDifference(array, values, iteratee, comparator) {
        var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
        if (!length) {
          return result;
        }
        if (iteratee) {
          values = arrayMap(values, baseUnary(iteratee));
        }
        if (comparator) {
          includes = arrayIncludesWith;
          isCommon = false;
        } else if (values.length >= LARGE_ARRAY_SIZE) {
          includes = cacheHas;
          isCommon = false;
          values = new SetCache(values);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee == null ? value : iteratee(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
        return result;
      }
      module2.exports = baseDifference;
    }
  });

  // node_modules/lodash/isArrayLikeObject.js
  var require_isArrayLikeObject = __commonJS({
    "node_modules/lodash/isArrayLikeObject.js"(exports2, module2) {
      var isArrayLike = require_isArrayLike();
      var isObjectLike = require_isObjectLike();
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      module2.exports = isArrayLikeObject;
    }
  });

  // node_modules/lodash/difference.js
  var require_difference = __commonJS({
    "node_modules/lodash/difference.js"(exports2, module2) {
      var baseDifference = require_baseDifference();
      var baseFlatten = require_baseFlatten();
      var baseRest = require_baseRest();
      var isArrayLikeObject = require_isArrayLikeObject();
      var difference = baseRest(function(array, values) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
      });
      module2.exports = difference;
    }
  });

  // node_modules/lodash/indexOf.js
  var require_indexOf = __commonJS({
    "node_modules/lodash/indexOf.js"(exports2, module2) {
      var baseIndexOf = require_baseIndexOf();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      module2.exports = indexOf;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports2, module2) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module2.exports = createFind;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports2, module2) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module2.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports2, module2) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find = createFind(findIndex);
      module2.exports = find;
    }
  });

  // node_modules/lodash/filter.js
  var require_filter = __commonJS({
    "node_modules/lodash/filter.js"(exports2, module2) {
      var arrayFilter = require_arrayFilter();
      var baseFilter = require_baseFilter();
      var baseIteratee = require_baseIteratee();
      var isArray = require_isArray();
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, baseIteratee(predicate, 3));
      }
      module2.exports = filter;
    }
  });

  // node_modules/lodash/defaults.js
  var require_defaults = __commonJS({
    "node_modules/lodash/defaults.js"(exports2, module2) {
      var baseRest = require_baseRest();
      var eq = require_eq();
      var isIterateeCall = require_isIterateeCall();
      var keysIn = require_keysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var defaults = baseRest(function(object, sources) {
        object = Object(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : void 0;
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
            if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      module2.exports = defaults;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports2, module2) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module2.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports2, module2) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module2.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports2, module2) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module2.exports = reduce;
    }
  });

  // node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
  var require_reg_exp_parser = __commonJS({
    "node_modules/chevrotain/lib/src/scan/reg_exp_parser.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.clearRegExpParserCache = exports2.getRegExpAst = void 0;
      var regexp_to_ast_1 = require_regexp_to_ast();
      var regExpAstCache = {};
      var regExpParser = new regexp_to_ast_1.RegExpParser();
      function getRegExpAst(regExp) {
        var regExpStr = regExp.toString();
        if (regExpAstCache.hasOwnProperty(regExpStr)) {
          return regExpAstCache[regExpStr];
        } else {
          var regExpAst = regExpParser.pattern(regExpStr);
          regExpAstCache[regExpStr] = regExpAst;
          return regExpAst;
        }
      }
      exports2.getRegExpAst = getRegExpAst;
      function clearRegExpParserCache() {
        regExpAstCache = {};
      }
      exports2.clearRegExpParserCache = clearRegExpParserCache;
    }
  });

  // node_modules/chevrotain/lib/src/scan/reg_exp.js
  var require_reg_exp = __commonJS({
    "node_modules/chevrotain/lib/src/scan/reg_exp.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.canMatchCharCode = exports2.firstCharOptimizedIndices = exports2.getOptimizedStartCodesIndices = exports2.failedOptimizationPrefixMsg = void 0;
      var regexp_to_ast_1 = require_regexp_to_ast();
      var isArray_1 = __importDefault(require_isArray());
      var every_1 = __importDefault(require_every());
      var forEach_1 = __importDefault(require_forEach());
      var find_1 = __importDefault(require_find());
      var values_1 = __importDefault(require_values());
      var includes_1 = __importDefault(require_includes());
      var utils_1 = require_api();
      var reg_exp_parser_1 = require_reg_exp_parser();
      var lexer_1 = require_lexer();
      var complementErrorMessage = "Complement Sets are not supported for first char optimization";
      exports2.failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
      function getOptimizedStartCodesIndices(regExp, ensureOptimizations) {
        if (ensureOptimizations === void 0) {
          ensureOptimizations = false;
        }
        try {
          var ast = (0, reg_exp_parser_1.getRegExpAst)(regExp);
          var firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
          return firstChars;
        } catch (e) {
          if (e.message === complementErrorMessage) {
            if (ensureOptimizations) {
              (0, utils_1.PRINT_WARNING)("".concat(exports2.failedOptimizationPrefixMsg) + "	Unable to optimize: < ".concat(regExp.toString(), " >\n") + "	Complement Sets cannot be automatically optimized.\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
            }
          } else {
            var msgSuffix = "";
            if (ensureOptimizations) {
              msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            }
            (0, utils_1.PRINT_ERROR)("".concat(exports2.failedOptimizationPrefixMsg, "\n") + "	Failed parsing: < ".concat(regExp.toString(), " >\n") + "	Using the regexp-to-ast library version: ".concat(regexp_to_ast_1.VERSION, "\n") + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + msgSuffix);
          }
        }
        return [];
      }
      exports2.getOptimizedStartCodesIndices = getOptimizedStartCodesIndices;
      function firstCharOptimizedIndices(ast, result, ignoreCase) {
        switch (ast.type) {
          case "Disjunction":
            for (var i = 0; i < ast.value.length; i++) {
              firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
            }
            break;
          case "Alternative":
            var terms = ast.value;
            for (var i = 0; i < terms.length; i++) {
              var term = terms[i];
              switch (term.type) {
                case "EndAnchor":
                case "GroupBackReference":
                case "Lookahead":
                case "NegativeLookahead":
                case "StartAnchor":
                case "WordBoundary":
                case "NonWordBoundary":
                  continue;
              }
              var atom = term;
              switch (atom.type) {
                case "Character":
                  addOptimizedIdxToResult(atom.value, result, ignoreCase);
                  break;
                case "Set":
                  if (atom.complement === true) {
                    throw Error(complementErrorMessage);
                  }
                  (0, forEach_1.default)(atom.value, function(code) {
                    if (typeof code === "number") {
                      addOptimizedIdxToResult(code, result, ignoreCase);
                    } else {
                      var range = code;
                      if (ignoreCase === true) {
                        for (var rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                          addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                        }
                      } else {
                        for (var rangeCode = range.from; rangeCode <= range.to && rangeCode < lexer_1.minOptimizationVal; rangeCode++) {
                          addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                        }
                        if (range.to >= lexer_1.minOptimizationVal) {
                          var minUnOptVal = range.from >= lexer_1.minOptimizationVal ? range.from : lexer_1.minOptimizationVal;
                          var maxUnOptVal = range.to;
                          var minOptIdx = (0, lexer_1.charCodeToOptimizedIndex)(minUnOptVal);
                          var maxOptIdx = (0, lexer_1.charCodeToOptimizedIndex)(maxUnOptVal);
                          for (var currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
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
                default:
                  throw Error("Non Exhaustive Match");
              }
              var isOptionalQuantifier = atom.quantifier !== void 0 && atom.quantifier.atLeast === 0;
              if (atom.type === "Group" && isWholeOptional(atom) === false || atom.type !== "Group" && isOptionalQuantifier === false) {
                break;
              }
            }
            break;
          default:
            throw Error("non exhaustive match!");
        }
        return (0, values_1.default)(result);
      }
      exports2.firstCharOptimizedIndices = firstCharOptimizedIndices;
      function addOptimizedIdxToResult(code, result, ignoreCase) {
        var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(code);
        result[optimizedCharIdx] = optimizedCharIdx;
        if (ignoreCase === true) {
          handleIgnoreCase(code, result);
        }
      }
      function handleIgnoreCase(code, result) {
        var char = String.fromCharCode(code);
        var upperChar = char.toUpperCase();
        if (upperChar !== char) {
          var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(upperChar.charCodeAt(0));
          result[optimizedCharIdx] = optimizedCharIdx;
        } else {
          var lowerChar = char.toLowerCase();
          if (lowerChar !== char) {
            var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(lowerChar.charCodeAt(0));
            result[optimizedCharIdx] = optimizedCharIdx;
          }
        }
      }
      function findCode(setNode, targetCharCodes) {
        return (0, find_1.default)(setNode.value, function(codeOrRange) {
          if (typeof codeOrRange === "number") {
            return (0, includes_1.default)(targetCharCodes, codeOrRange);
          } else {
            var range_1 = codeOrRange;
            return (0, find_1.default)(targetCharCodes, function(targetCode) {
              return range_1.from <= targetCode && targetCode <= range_1.to;
            }) !== void 0;
          }
        });
      }
      function isWholeOptional(ast) {
        var quantifier = ast.quantifier;
        if (quantifier && quantifier.atLeast === 0) {
          return true;
        }
        if (!ast.value) {
          return false;
        }
        return (0, isArray_1.default)(ast.value) ? (0, every_1.default)(ast.value, isWholeOptional) : isWholeOptional(ast.value);
      }
      var CharCodeFinder = function(_super) {
        __extends(CharCodeFinder2, _super);
        function CharCodeFinder2(targetCharCodes) {
          var _this = _super.call(this) || this;
          _this.targetCharCodes = targetCharCodes;
          _this.found = false;
          return _this;
        }
        CharCodeFinder2.prototype.visitChildren = function(node) {
          if (this.found === true) {
            return;
          }
          switch (node.type) {
            case "Lookahead":
              this.visitLookahead(node);
              return;
            case "NegativeLookahead":
              this.visitNegativeLookahead(node);
              return;
          }
          _super.prototype.visitChildren.call(this, node);
        };
        CharCodeFinder2.prototype.visitCharacter = function(node) {
          if ((0, includes_1.default)(this.targetCharCodes, node.value)) {
            this.found = true;
          }
        };
        CharCodeFinder2.prototype.visitSet = function(node) {
          if (node.complement) {
            if (findCode(node, this.targetCharCodes) === void 0) {
              this.found = true;
            }
          } else {
            if (findCode(node, this.targetCharCodes) !== void 0) {
              this.found = true;
            }
          }
        };
        return CharCodeFinder2;
      }(regexp_to_ast_1.BaseRegExpVisitor);
      function canMatchCharCode(charCodes, pattern) {
        if (pattern instanceof RegExp) {
          var ast = (0, reg_exp_parser_1.getRegExpAst)(pattern);
          var charCodeFinder = new CharCodeFinder(charCodes);
          charCodeFinder.visit(ast);
          return charCodeFinder.found;
        } else {
          return (0, find_1.default)(pattern, function(char) {
            return (0, includes_1.default)(charCodes, char.charCodeAt(0));
          }) !== void 0;
        }
      }
      exports2.canMatchCharCode = canMatchCharCode;
    }
  });

  // node_modules/chevrotain/lib/src/scan/lexer.js
  var require_lexer = __commonJS({
    "node_modules/chevrotain/lib/src/scan/lexer.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.charCodeToOptimizedIndex = exports2.minOptimizationVal = exports2.buildLineBreakIssueMessage = exports2.LineTerminatorOptimizedTester = exports2.isShortPattern = exports2.isCustomPattern = exports2.cloneEmptyGroups = exports2.performWarningRuntimeChecks = exports2.performRuntimeChecks = exports2.addStickyFlag = exports2.addStartOfInput = exports2.findUnreachablePatterns = exports2.findModesThatDoNotExist = exports2.findInvalidGroupType = exports2.findDuplicatePatterns = exports2.findUnsupportedFlags = exports2.findStartOfInputAnchor = exports2.findEmptyMatchRegExps = exports2.findEndOfInputAnchor = exports2.findInvalidPatterns = exports2.findMissingPatterns = exports2.validatePatterns = exports2.analyzeTokenTypes = exports2.enableSticky = exports2.disableSticky = exports2.SUPPORT_STICKY = exports2.MODES = exports2.DEFAULT_MODE = void 0;
      var regexp_to_ast_1 = require_regexp_to_ast();
      var lexer_public_1 = require_lexer_public();
      var first_1 = __importDefault(require_first2());
      var isEmpty_1 = __importDefault(require_isEmpty());
      var compact_1 = __importDefault(require_compact());
      var isArray_1 = __importDefault(require_isArray());
      var values_1 = __importDefault(require_values());
      var flatten_1 = __importDefault(require_flatten());
      var reject_1 = __importDefault(require_reject());
      var difference_1 = __importDefault(require_difference());
      var indexOf_1 = __importDefault(require_indexOf());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var isString_1 = __importDefault(require_isString());
      var isFunction_1 = __importDefault(require_isFunction());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var find_1 = __importDefault(require_find());
      var has_1 = __importDefault(require_has());
      var keys_1 = __importDefault(require_keys());
      var isRegExp_1 = __importDefault(require_isRegExp());
      var filter_1 = __importDefault(require_filter());
      var defaults_1 = __importDefault(require_defaults());
      var reduce_1 = __importDefault(require_reduce());
      var includes_1 = __importDefault(require_includes());
      var utils_1 = require_api();
      var reg_exp_1 = require_reg_exp();
      var reg_exp_parser_1 = require_reg_exp_parser();
      var PATTERN = "PATTERN";
      exports2.DEFAULT_MODE = "defaultMode";
      exports2.MODES = "modes";
      exports2.SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
      function disableSticky() {
        exports2.SUPPORT_STICKY = false;
      }
      exports2.disableSticky = disableSticky;
      function enableSticky() {
        exports2.SUPPORT_STICKY = true;
      }
      exports2.enableSticky = enableSticky;
      function analyzeTokenTypes(tokenTypes, options) {
        options = (0, defaults_1.default)(options, {
          useSticky: exports2.SUPPORT_STICKY,
          debug: false,
          safeMode: false,
          positionTracking: "full",
          lineTerminatorCharacters: ["\r", "\n"],
          tracer: function(msg, action) {
            return action();
          }
        });
        var tracer = options.tracer;
        tracer("initCharCodeToOptimizedIndexMap", function() {
          initCharCodeToOptimizedIndexMap();
        });
        var onlyRelevantTypes;
        tracer("Reject Lexer.NA", function() {
          onlyRelevantTypes = (0, reject_1.default)(tokenTypes, function(currType) {
            return currType[PATTERN] === lexer_public_1.Lexer.NA;
          });
        });
        var hasCustom = false;
        var allTransformedPatterns;
        tracer("Transform Patterns", function() {
          hasCustom = false;
          allTransformedPatterns = (0, map_1.default)(onlyRelevantTypes, function(currType) {
            var currPattern = currType[PATTERN];
            if ((0, isRegExp_1.default)(currPattern)) {
              var regExpSource = currPattern.source;
              if (regExpSource.length === 1 && regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
                return regExpSource;
              } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && !(0, includes_1.default)([
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
                "W"
              ], regExpSource[1])) {
                return regExpSource[1];
              } else {
                return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
              }
            } else if ((0, isFunction_1.default)(currPattern)) {
              hasCustom = true;
              return { exec: currPattern };
            } else if (typeof currPattern === "object") {
              hasCustom = true;
              return currPattern;
            } else if (typeof currPattern === "string") {
              if (currPattern.length === 1) {
                return currPattern;
              } else {
                var escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                var wrappedRegExp = new RegExp(escapedRegExpString);
                return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
              }
            } else {
              throw Error("non exhaustive match");
            }
          });
        });
        var patternIdxToType;
        var patternIdxToGroup;
        var patternIdxToLongerAltIdxArr;
        var patternIdxToPushMode;
        var patternIdxToPopMode;
        tracer("misc mapping", function() {
          patternIdxToType = (0, map_1.default)(onlyRelevantTypes, function(currType) {
            return currType.tokenTypeIdx;
          });
          patternIdxToGroup = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            var groupName = clazz.GROUP;
            if (groupName === lexer_public_1.Lexer.SKIPPED) {
              return void 0;
            } else if ((0, isString_1.default)(groupName)) {
              return groupName;
            } else if ((0, isUndefined_1.default)(groupName)) {
              return false;
            } else {
              throw Error("non exhaustive match");
            }
          });
          patternIdxToLongerAltIdxArr = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            var longerAltType = clazz.LONGER_ALT;
            if (longerAltType) {
              var longerAltIdxArr = (0, isArray_1.default)(longerAltType) ? (0, map_1.default)(longerAltType, function(type) {
                return (0, indexOf_1.default)(onlyRelevantTypes, type);
              }) : [(0, indexOf_1.default)(onlyRelevantTypes, longerAltType)];
              return longerAltIdxArr;
            }
          });
          patternIdxToPushMode = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            return clazz.PUSH_MODE;
          });
          patternIdxToPopMode = (0, map_1.default)(onlyRelevantTypes, function(clazz) {
            return (0, has_1.default)(clazz, "POP_MODE");
          });
        });
        var patternIdxToCanLineTerminator;
        tracer("Line Terminator Handling", function() {
          var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
          patternIdxToCanLineTerminator = (0, map_1.default)(onlyRelevantTypes, function(tokType) {
            return false;
          });
          if (options.positionTracking !== "onlyOffset") {
            patternIdxToCanLineTerminator = (0, map_1.default)(onlyRelevantTypes, function(tokType) {
              if ((0, has_1.default)(tokType, "LINE_BREAKS")) {
                return !!tokType.LINE_BREAKS;
              } else {
                return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && (0, reg_exp_1.canMatchCharCode)(lineTerminatorCharCodes, tokType.PATTERN);
              }
            });
          }
        });
        var patternIdxToIsCustom;
        var patternIdxToShort;
        var emptyGroups;
        var patternIdxToConfig;
        tracer("Misc Mapping #2", function() {
          patternIdxToIsCustom = (0, map_1.default)(onlyRelevantTypes, isCustomPattern);
          patternIdxToShort = (0, map_1.default)(allTransformedPatterns, isShortPattern);
          emptyGroups = (0, reduce_1.default)(onlyRelevantTypes, function(acc, clazz) {
            var groupName = clazz.GROUP;
            if ((0, isString_1.default)(groupName) && !(groupName === lexer_public_1.Lexer.SKIPPED)) {
              acc[groupName] = [];
            }
            return acc;
          }, {});
          patternIdxToConfig = (0, map_1.default)(allTransformedPatterns, function(x, idx) {
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
              tokenType: onlyRelevantTypes[idx]
            };
          });
        });
        var canBeOptimized = true;
        var charCodeToPatternIdxToConfig = [];
        if (!options.safeMode) {
          tracer("First Char Optimization", function() {
            charCodeToPatternIdxToConfig = (0, reduce_1.default)(onlyRelevantTypes, function(result, currTokType, idx) {
              if (typeof currTokType.PATTERN === "string") {
                var charCode = currTokType.PATTERN.charCodeAt(0);
                var optimizedIdx = charCodeToOptimizedIndex(charCode);
                addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
              } else if ((0, isArray_1.default)(currTokType.START_CHARS_HINT)) {
                var lastOptimizedIdx_1;
                (0, forEach_1.default)(currTokType.START_CHARS_HINT, function(charOrInt) {
                  var charCode2 = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
                  var currOptimizedIdx = charCodeToOptimizedIndex(charCode2);
                  if (lastOptimizedIdx_1 !== currOptimizedIdx) {
                    lastOptimizedIdx_1 = currOptimizedIdx;
                    addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
                  }
                });
              } else if ((0, isRegExp_1.default)(currTokType.PATTERN)) {
                if (currTokType.PATTERN.unicode) {
                  canBeOptimized = false;
                  if (options.ensureOptimizations) {
                    (0, utils_1.PRINT_ERROR)("".concat(reg_exp_1.failedOptimizationPrefixMsg) + "	Unable to analyze < ".concat(currTokType.PATTERN.toString(), " > pattern.\n") + "	The regexp unicode flag is not currently supported by the regexp-to-ast library.\n	This will disable the lexer's first char optimizations.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                  }
                } else {
                  var optimizedCodes = (0, reg_exp_1.getOptimizedStartCodesIndices)(currTokType.PATTERN, options.ensureOptimizations);
                  if ((0, isEmpty_1.default)(optimizedCodes)) {
                    canBeOptimized = false;
                  }
                  (0, forEach_1.default)(optimizedCodes, function(code) {
                    addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                  });
                }
              } else {
                if (options.ensureOptimizations) {
                  (0, utils_1.PRINT_ERROR)("".concat(reg_exp_1.failedOptimizationPrefixMsg) + "	TokenType: <".concat(currTokType.name, "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") + "	This will disable the lexer's first char optimizations.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                }
                canBeOptimized = false;
              }
              return result;
            }, []);
          });
        }
        return {
          emptyGroups,
          patternIdxToConfig,
          charCodeToPatternIdxToConfig,
          hasCustom,
          canBeOptimized
        };
      }
      exports2.analyzeTokenTypes = analyzeTokenTypes;
      function validatePatterns(tokenTypes, validModesNames) {
        var errors = [];
        var missingResult = findMissingPatterns(tokenTypes);
        errors = errors.concat(missingResult.errors);
        var invalidResult = findInvalidPatterns(missingResult.valid);
        var validTokenTypes = invalidResult.valid;
        errors = errors.concat(invalidResult.errors);
        errors = errors.concat(validateRegExpPattern(validTokenTypes));
        errors = errors.concat(findInvalidGroupType(validTokenTypes));
        errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
        errors = errors.concat(findUnreachablePatterns(validTokenTypes));
        return errors;
      }
      exports2.validatePatterns = validatePatterns;
      function validateRegExpPattern(tokenTypes) {
        var errors = [];
        var withRegExpPatterns = (0, filter_1.default)(tokenTypes, function(currTokType) {
          return (0, isRegExp_1.default)(currTokType[PATTERN]);
        });
        errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
        errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
        errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
        errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
        errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
        return errors;
      }
      function findMissingPatterns(tokenTypes) {
        var tokenTypesWithMissingPattern = (0, filter_1.default)(tokenTypes, function(currType) {
          return !(0, has_1.default)(currType, PATTERN);
        });
        var errors = (0, map_1.default)(tokenTypesWithMissingPattern, function(currType) {
          return {
            message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
            type: lexer_public_1.LexerDefinitionErrorType.MISSING_PATTERN,
            tokenTypes: [currType]
          };
        });
        var valid = (0, difference_1.default)(tokenTypes, tokenTypesWithMissingPattern);
        return { errors, valid };
      }
      exports2.findMissingPatterns = findMissingPatterns;
      function findInvalidPatterns(tokenTypes) {
        var tokenTypesWithInvalidPattern = (0, filter_1.default)(tokenTypes, function(currType) {
          var pattern = currType[PATTERN];
          return !(0, isRegExp_1.default)(pattern) && !(0, isFunction_1.default)(pattern) && !(0, has_1.default)(pattern, "exec") && !(0, isString_1.default)(pattern);
        });
        var errors = (0, map_1.default)(tokenTypesWithInvalidPattern, function(currType) {
          return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: lexer_public_1.LexerDefinitionErrorType.INVALID_PATTERN,
            tokenTypes: [currType]
          };
        });
        var valid = (0, difference_1.default)(tokenTypes, tokenTypesWithInvalidPattern);
        return { errors, valid };
      }
      exports2.findInvalidPatterns = findInvalidPatterns;
      var end_of_input = /[^\\][$]/;
      function findEndOfInputAnchor(tokenTypes) {
        var EndAnchorFinder = function(_super) {
          __extends(EndAnchorFinder2, _super);
          function EndAnchorFinder2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
          }
          EndAnchorFinder2.prototype.visitEndAnchor = function(node) {
            this.found = true;
          };
          return EndAnchorFinder2;
        }(regexp_to_ast_1.BaseRegExpVisitor);
        var invalidRegex = (0, filter_1.default)(tokenTypes, function(currType) {
          var pattern = currType.PATTERN;
          try {
            var regexpAst = (0, reg_exp_parser_1.getRegExpAst)(pattern);
            var endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
          } catch (e) {
            return end_of_input.test(pattern.source);
          }
        });
        var errors = (0, map_1.default)(invalidRegex, function(currType) {
          return {
            message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
            type: lexer_public_1.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
            tokenTypes: [currType]
          };
        });
        return errors;
      }
      exports2.findEndOfInputAnchor = findEndOfInputAnchor;
      function findEmptyMatchRegExps(tokenTypes) {
        var matchesEmptyString = (0, filter_1.default)(tokenTypes, function(currType) {
          var pattern = currType.PATTERN;
          return pattern.test("");
        });
        var errors = (0, map_1.default)(matchesEmptyString, function(currType) {
          return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
            type: lexer_public_1.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
            tokenTypes: [currType]
          };
        });
        return errors;
      }
      exports2.findEmptyMatchRegExps = findEmptyMatchRegExps;
      var start_of_input = /[^\\[][\^]|^\^/;
      function findStartOfInputAnchor(tokenTypes) {
        var StartAnchorFinder = function(_super) {
          __extends(StartAnchorFinder2, _super);
          function StartAnchorFinder2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
          }
          StartAnchorFinder2.prototype.visitStartAnchor = function(node) {
            this.found = true;
          };
          return StartAnchorFinder2;
        }(regexp_to_ast_1.BaseRegExpVisitor);
        var invalidRegex = (0, filter_1.default)(tokenTypes, function(currType) {
          var pattern = currType.PATTERN;
          try {
            var regexpAst = (0, reg_exp_parser_1.getRegExpAst)(pattern);
            var startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
          } catch (e) {
            return start_of_input.test(pattern.source);
          }
        });
        var errors = (0, map_1.default)(invalidRegex, function(currType) {
          return {
            message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
            type: lexer_public_1.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
            tokenTypes: [currType]
          };
        });
        return errors;
      }
      exports2.findStartOfInputAnchor = findStartOfInputAnchor;
      function findUnsupportedFlags(tokenTypes) {
        var invalidFlags = (0, filter_1.default)(tokenTypes, function(currType) {
          var pattern = currType[PATTERN];
          return pattern instanceof RegExp && (pattern.multiline || pattern.global);
        });
        var errors = (0, map_1.default)(invalidFlags, function(currType) {
          return {
            message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: lexer_public_1.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [currType]
          };
        });
        return errors;
      }
      exports2.findUnsupportedFlags = findUnsupportedFlags;
      function findDuplicatePatterns(tokenTypes) {
        var found = [];
        var identicalPatterns = (0, map_1.default)(tokenTypes, function(outerType) {
          return (0, reduce_1.default)(tokenTypes, function(result, innerType) {
            if (outerType.PATTERN.source === innerType.PATTERN.source && !(0, includes_1.default)(found, innerType) && innerType.PATTERN !== lexer_public_1.Lexer.NA) {
              found.push(innerType);
              result.push(innerType);
              return result;
            }
            return result;
          }, []);
        });
        identicalPatterns = (0, compact_1.default)(identicalPatterns);
        var duplicatePatterns = (0, filter_1.default)(identicalPatterns, function(currIdenticalSet) {
          return currIdenticalSet.length > 1;
        });
        var errors = (0, map_1.default)(duplicatePatterns, function(setOfIdentical) {
          var tokenTypeNames = (0, map_1.default)(setOfIdentical, function(currType) {
            return currType.name;
          });
          var dupPatternSrc = (0, first_1.default)(setOfIdentical).PATTERN;
          return {
            message: "The same RegExp pattern ->".concat(dupPatternSrc, "<-") + "has been used in all of the following Token Types: ".concat(tokenTypeNames.join(", "), " <-"),
            type: lexer_public_1.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical
          };
        });
        return errors;
      }
      exports2.findDuplicatePatterns = findDuplicatePatterns;
      function findInvalidGroupType(tokenTypes) {
        var invalidTypes = (0, filter_1.default)(tokenTypes, function(clazz) {
          if (!(0, has_1.default)(clazz, "GROUP")) {
            return false;
          }
          var group = clazz.GROUP;
          return group !== lexer_public_1.Lexer.SKIPPED && group !== lexer_public_1.Lexer.NA && !(0, isString_1.default)(group);
        });
        var errors = (0, map_1.default)(invalidTypes, function(currType) {
          return {
            message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: lexer_public_1.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [currType]
          };
        });
        return errors;
      }
      exports2.findInvalidGroupType = findInvalidGroupType;
      function findModesThatDoNotExist(tokenTypes, validModes) {
        var invalidModes = (0, filter_1.default)(tokenTypes, function(clazz) {
          return clazz.PUSH_MODE !== void 0 && !(0, includes_1.default)(validModes, clazz.PUSH_MODE);
        });
        var errors = (0, map_1.default)(invalidModes, function(tokType) {
          var msg = "Token Type: ->".concat(tokType.name, "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(tokType.PUSH_MODE, "<-") + "which does not exist";
          return {
            message: msg,
            type: lexer_public_1.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [tokType]
          };
        });
        return errors;
      }
      exports2.findModesThatDoNotExist = findModesThatDoNotExist;
      function findUnreachablePatterns(tokenTypes) {
        var errors = [];
        var canBeTested = (0, reduce_1.default)(tokenTypes, function(result, tokType, idx) {
          var pattern = tokType.PATTERN;
          if (pattern === lexer_public_1.Lexer.NA) {
            return result;
          }
          if ((0, isString_1.default)(pattern)) {
            result.push({ str: pattern, idx, tokenType: tokType });
          } else if ((0, isRegExp_1.default)(pattern) && noMetaChar(pattern)) {
            result.push({ str: pattern.source, idx, tokenType: tokType });
          }
          return result;
        }, []);
        (0, forEach_1.default)(tokenTypes, function(tokType, testIdx) {
          (0, forEach_1.default)(canBeTested, function(_a) {
            var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;
            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
              var msg = "Token: ->".concat(tokenType.name, "<- can never be matched.\n") + "Because it appears AFTER the Token Type ->".concat(tokType.name, "<-") + "in the lexer's definition.\nSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
              errors.push({
                message: msg,
                type: lexer_public_1.LexerDefinitionErrorType.UNREACHABLE_PATTERN,
                tokenTypes: [tokType, tokenType]
              });
            }
          });
        });
        return errors;
      }
      exports2.findUnreachablePatterns = findUnreachablePatterns;
      function testTokenType(str, pattern) {
        if ((0, isRegExp_1.default)(pattern)) {
          var regExpArray = pattern.exec(str);
          return regExpArray !== null && regExpArray.index === 0;
        } else if ((0, isFunction_1.default)(pattern)) {
          return pattern(str, 0, [], {});
        } else if ((0, has_1.default)(pattern, "exec")) {
          return pattern.exec(str, 0, [], {});
        } else if (typeof pattern === "string") {
          return pattern === str;
        } else {
          throw Error("non exhaustive match");
        }
      }
      function noMetaChar(regExp) {
        var metaChars = [
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
          "{"
        ];
        return (0, find_1.default)(metaChars, function(char) {
          return regExp.source.indexOf(char) !== -1;
        }) === void 0;
      }
      function addStartOfInput(pattern) {
        var flags = pattern.ignoreCase ? "i" : "";
        return new RegExp("^(?:".concat(pattern.source, ")"), flags);
      }
      exports2.addStartOfInput = addStartOfInput;
      function addStickyFlag(pattern) {
        var flags = pattern.ignoreCase ? "iy" : "y";
        return new RegExp("".concat(pattern.source), flags);
      }
      exports2.addStickyFlag = addStickyFlag;
      function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
        var errors = [];
        if (!(0, has_1.default)(lexerDefinition, exports2.DEFAULT_MODE)) {
          errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" + exports2.DEFAULT_MODE + "> property in its definition\n",
            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
          });
        }
        if (!(0, has_1.default)(lexerDefinition, exports2.MODES)) {
          errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" + exports2.MODES + "> property in its definition\n",
            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
          });
        }
        if ((0, has_1.default)(lexerDefinition, exports2.MODES) && (0, has_1.default)(lexerDefinition, exports2.DEFAULT_MODE) && !(0, has_1.default)(lexerDefinition.modes, lexerDefinition.defaultMode)) {
          errors.push({
            message: "A MultiMode Lexer cannot be initialized with a ".concat(exports2.DEFAULT_MODE, ": <").concat(lexerDefinition.defaultMode, ">") + "which does not exist\n",
            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
          });
        }
        if ((0, has_1.default)(lexerDefinition, exports2.MODES)) {
          (0, forEach_1.default)(lexerDefinition.modes, function(currModeValue, currModeName) {
            (0, forEach_1.default)(currModeValue, function(currTokType, currIdx) {
              if ((0, isUndefined_1.default)(currTokType)) {
                errors.push({
                  message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + "<".concat(currModeName, "> at index: <").concat(currIdx, ">\n"),
                  type: lexer_public_1.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                });
              } else if ((0, has_1.default)(currTokType, "LONGER_ALT")) {
                var longerAlt = (0, isArray_1.default)(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [currTokType.LONGER_ALT];
                (0, forEach_1.default)(longerAlt, function(currLongerAlt) {
                  if (!(0, isUndefined_1.default)(currLongerAlt) && !(0, includes_1.default)(currModeValue, currLongerAlt)) {
                    errors.push({
                      message: "A MultiMode Lexer cannot be initialized with a longer_alt <".concat(currLongerAlt.name, "> on token <").concat(currTokType.name, "> outside of mode <").concat(currModeName, ">\n"),
                      type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                    });
                  }
                });
              }
            });
          });
        }
        return errors;
      }
      exports2.performRuntimeChecks = performRuntimeChecks;
      function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
        var warnings = [];
        var hasAnyLineBreak = false;
        var allTokenTypes = (0, compact_1.default)((0, flatten_1.default)((0, values_1.default)(lexerDefinition.modes)));
        var concreteTokenTypes = (0, reject_1.default)(allTokenTypes, function(currType) {
          return currType[PATTERN] === lexer_public_1.Lexer.NA;
        });
        var terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
        if (trackLines) {
          (0, forEach_1.default)(concreteTokenTypes, function(tokType) {
            var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
            if (currIssue !== false) {
              var message = buildLineBreakIssueMessage(tokType, currIssue);
              var warningDescriptor = {
                message,
                type: currIssue.issue,
                tokenType: tokType
              };
              warnings.push(warningDescriptor);
            } else {
              if ((0, has_1.default)(tokType, "LINE_BREAKS")) {
                if (tokType.LINE_BREAKS === true) {
                  hasAnyLineBreak = true;
                }
              } else {
                if ((0, reg_exp_1.canMatchCharCode)(terminatorCharCodes, tokType.PATTERN)) {
                  hasAnyLineBreak = true;
                }
              }
            }
          });
        }
        if (trackLines && !hasAnyLineBreak) {
          warnings.push({
            message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
            type: lexer_public_1.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
          });
        }
        return warnings;
      }
      exports2.performWarningRuntimeChecks = performWarningRuntimeChecks;
      function cloneEmptyGroups(emptyGroups) {
        var clonedResult = {};
        var groupKeys = (0, keys_1.default)(emptyGroups);
        (0, forEach_1.default)(groupKeys, function(currKey) {
          var currGroupValue = emptyGroups[currKey];
          if ((0, isArray_1.default)(currGroupValue)) {
            clonedResult[currKey] = [];
          } else {
            throw Error("non exhaustive match");
          }
        });
        return clonedResult;
      }
      exports2.cloneEmptyGroups = cloneEmptyGroups;
      function isCustomPattern(tokenType) {
        var pattern = tokenType.PATTERN;
        if ((0, isRegExp_1.default)(pattern)) {
          return false;
        } else if ((0, isFunction_1.default)(pattern)) {
          return true;
        } else if ((0, has_1.default)(pattern, "exec")) {
          return true;
        } else if ((0, isString_1.default)(pattern)) {
          return false;
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.isCustomPattern = isCustomPattern;
      function isShortPattern(pattern) {
        if ((0, isString_1.default)(pattern) && pattern.length === 1) {
          return pattern.charCodeAt(0);
        } else {
          return false;
        }
      }
      exports2.isShortPattern = isShortPattern;
      exports2.LineTerminatorOptimizedTester = {
        test: function(text) {
          var len = text.length;
          for (var i = this.lastIndex; i < len; i++) {
            var c = text.charCodeAt(i);
            if (c === 10) {
              this.lastIndex = i + 1;
              return true;
            } else if (c === 13) {
              if (text.charCodeAt(i + 1) === 10) {
                this.lastIndex = i + 2;
              } else {
                this.lastIndex = i + 1;
              }
              return true;
            }
          }
          return false;
        },
        lastIndex: 0
      };
      function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
        if ((0, has_1.default)(tokType, "LINE_BREAKS")) {
          return false;
        } else {
          if ((0, isRegExp_1.default)(tokType.PATTERN)) {
            try {
              (0, reg_exp_1.canMatchCharCode)(lineTerminatorCharCodes, tokType.PATTERN);
            } catch (e) {
              return {
                issue: lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
                errMsg: e.message
              };
            }
            return false;
          } else if ((0, isString_1.default)(tokType.PATTERN)) {
            return false;
          } else if (isCustomPattern(tokType)) {
            return { issue: lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
          } else {
            throw Error("non exhaustive match");
          }
        }
      }
      function buildLineBreakIssueMessage(tokType, details) {
        if (details.issue === lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
          return "Warning: unable to identify line terminator usage in pattern.\n" + "	The problem is in the <".concat(tokType.name, "> Token Type\n") + "	 Root cause: ".concat(details.errMsg, ".\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
        } else if (details.issue === lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
          return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + "	The problem is in the <".concat(tokType.name, "> Token Type\n") + "	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.buildLineBreakIssueMessage = buildLineBreakIssueMessage;
      function getCharCodes(charsOrCodes) {
        var charCodes = (0, map_1.default)(charsOrCodes, function(numOrString) {
          if ((0, isString_1.default)(numOrString)) {
            return numOrString.charCodeAt(0);
          } else {
            return numOrString;
          }
        });
        return charCodes;
      }
      function addToMapOfArrays(map, key, value) {
        if (map[key] === void 0) {
          map[key] = [value];
        } else {
          map[key].push(value);
        }
      }
      exports2.minOptimizationVal = 256;
      var charCodeToOptimizedIdxMap = [];
      function charCodeToOptimizedIndex(charCode) {
        return charCode < exports2.minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
      }
      exports2.charCodeToOptimizedIndex = charCodeToOptimizedIndex;
      function initCharCodeToOptimizedIndexMap() {
        if ((0, isEmpty_1.default)(charCodeToOptimizedIdxMap)) {
          charCodeToOptimizedIdxMap = new Array(65536);
          for (var i = 0; i < 65536; i++) {
            charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
          }
        }
      }
    }
  });

  // node_modules/lodash/last.js
  var require_last = __commonJS({
    "node_modules/lodash/last.js"(exports2, module2) {
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : void 0;
      }
      module2.exports = last;
    }
  });

  // node_modules/chevrotain/lib/src/scan/tokens.js
  var require_tokens = __commonJS({
    "node_modules/chevrotain/lib/src/scan/tokens.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isTokenType = exports2.hasExtendingTokensTypesMapProperty = exports2.hasExtendingTokensTypesProperty = exports2.hasCategoriesProperty = exports2.hasShortKeyProperty = exports2.singleAssignCategoriesToksMap = exports2.assignCategoriesMapProp = exports2.assignCategoriesTokensProp = exports2.assignTokenDefaultProps = exports2.expandCategories = exports2.augmentTokenTypes = exports2.tokenIdxToClass = exports2.tokenShortNameIdx = exports2.tokenStructuredMatcherNoCategories = exports2.tokenStructuredMatcher = void 0;
      var isEmpty_1 = __importDefault(require_isEmpty());
      var compact_1 = __importDefault(require_compact());
      var isArray_1 = __importDefault(require_isArray());
      var flatten_1 = __importDefault(require_flatten());
      var difference_1 = __importDefault(require_difference());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var has_1 = __importDefault(require_has());
      var includes_1 = __importDefault(require_includes());
      var clone_1 = __importDefault(require_clone());
      function tokenStructuredMatcher(tokInstance, tokConstructor) {
        var instanceType = tokInstance.tokenTypeIdx;
        if (instanceType === tokConstructor.tokenTypeIdx) {
          return true;
        } else {
          return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
        }
      }
      exports2.tokenStructuredMatcher = tokenStructuredMatcher;
      function tokenStructuredMatcherNoCategories(token, tokType) {
        return token.tokenTypeIdx === tokType.tokenTypeIdx;
      }
      exports2.tokenStructuredMatcherNoCategories = tokenStructuredMatcherNoCategories;
      exports2.tokenShortNameIdx = 1;
      exports2.tokenIdxToClass = {};
      function augmentTokenTypes(tokenTypes) {
        var tokenTypesAndParents = expandCategories(tokenTypes);
        assignTokenDefaultProps(tokenTypesAndParents);
        assignCategoriesMapProp(tokenTypesAndParents);
        assignCategoriesTokensProp(tokenTypesAndParents);
        (0, forEach_1.default)(tokenTypesAndParents, function(tokType) {
          tokType.isParent = tokType.categoryMatches.length > 0;
        });
      }
      exports2.augmentTokenTypes = augmentTokenTypes;
      function expandCategories(tokenTypes) {
        var result = (0, clone_1.default)(tokenTypes);
        var categories = tokenTypes;
        var searching = true;
        while (searching) {
          categories = (0, compact_1.default)((0, flatten_1.default)((0, map_1.default)(categories, function(currTokType) {
            return currTokType.CATEGORIES;
          })));
          var newCategories = (0, difference_1.default)(categories, result);
          result = result.concat(newCategories);
          if ((0, isEmpty_1.default)(newCategories)) {
            searching = false;
          } else {
            categories = newCategories;
          }
        }
        return result;
      }
      exports2.expandCategories = expandCategories;
      function assignTokenDefaultProps(tokenTypes) {
        (0, forEach_1.default)(tokenTypes, function(currTokType) {
          if (!hasShortKeyProperty(currTokType)) {
            exports2.tokenIdxToClass[exports2.tokenShortNameIdx] = currTokType;
            currTokType.tokenTypeIdx = exports2.tokenShortNameIdx++;
          }
          if (hasCategoriesProperty(currTokType) && !(0, isArray_1.default)(currTokType.CATEGORIES)) {
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
      exports2.assignTokenDefaultProps = assignTokenDefaultProps;
      function assignCategoriesTokensProp(tokenTypes) {
        (0, forEach_1.default)(tokenTypes, function(currTokType) {
          currTokType.categoryMatches = [];
          (0, forEach_1.default)(currTokType.categoryMatchesMap, function(val, key) {
            currTokType.categoryMatches.push(exports2.tokenIdxToClass[key].tokenTypeIdx);
          });
        });
      }
      exports2.assignCategoriesTokensProp = assignCategoriesTokensProp;
      function assignCategoriesMapProp(tokenTypes) {
        (0, forEach_1.default)(tokenTypes, function(currTokType) {
          singleAssignCategoriesToksMap([], currTokType);
        });
      }
      exports2.assignCategoriesMapProp = assignCategoriesMapProp;
      function singleAssignCategoriesToksMap(path, nextNode) {
        (0, forEach_1.default)(path, function(pathNode) {
          nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
        });
        (0, forEach_1.default)(nextNode.CATEGORIES, function(nextCategory) {
          var newPath = path.concat(nextNode);
          if (!(0, includes_1.default)(newPath, nextCategory)) {
            singleAssignCategoriesToksMap(newPath, nextCategory);
          }
        });
      }
      exports2.singleAssignCategoriesToksMap = singleAssignCategoriesToksMap;
      function hasShortKeyProperty(tokType) {
        return (0, has_1.default)(tokType, "tokenTypeIdx");
      }
      exports2.hasShortKeyProperty = hasShortKeyProperty;
      function hasCategoriesProperty(tokType) {
        return (0, has_1.default)(tokType, "CATEGORIES");
      }
      exports2.hasCategoriesProperty = hasCategoriesProperty;
      function hasExtendingTokensTypesProperty(tokType) {
        return (0, has_1.default)(tokType, "categoryMatches");
      }
      exports2.hasExtendingTokensTypesProperty = hasExtendingTokensTypesProperty;
      function hasExtendingTokensTypesMapProperty(tokType) {
        return (0, has_1.default)(tokType, "categoryMatchesMap");
      }
      exports2.hasExtendingTokensTypesMapProperty = hasExtendingTokensTypesMapProperty;
      function isTokenType(tokType) {
        return (0, has_1.default)(tokType, "tokenTypeIdx");
      }
      exports2.isTokenType = isTokenType;
    }
  });

  // node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
  var require_lexer_errors_public = __commonJS({
    "node_modules/chevrotain/lib/src/scan/lexer_errors_public.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.defaultLexerErrorProvider = void 0;
      exports2.defaultLexerErrorProvider = {
        buildUnableToPopLexerModeMessage: function(token) {
          return "Unable to pop Lexer Mode after encountering Token ->".concat(token.image, "<- The Mode Stack is empty");
        },
        buildUnexpectedCharactersMessage: function(fullText, startOffset, length, line, column) {
          return "unexpected character: ->".concat(fullText.charAt(startOffset), "<- at offset: ").concat(startOffset, ",") + " skipped ".concat(length, " characters.");
        }
      };
    }
  });

  // node_modules/chevrotain/lib/src/scan/lexer_public.js
  var require_lexer_public = __commonJS({
    "node_modules/chevrotain/lib/src/scan/lexer_public.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Lexer = exports2.LexerDefinitionErrorType = void 0;
      var lexer_1 = require_lexer();
      var noop_1 = __importDefault(require_noop());
      var isEmpty_1 = __importDefault(require_isEmpty());
      var isArray_1 = __importDefault(require_isArray());
      var last_1 = __importDefault(require_last());
      var reject_1 = __importDefault(require_reject());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var keys_1 = __importDefault(require_keys());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var identity_1 = __importDefault(require_identity());
      var assign_1 = __importDefault(require_assign());
      var reduce_1 = __importDefault(require_reduce());
      var clone_1 = __importDefault(require_clone());
      var utils_1 = require_api();
      var tokens_1 = require_tokens();
      var lexer_errors_public_1 = require_lexer_errors_public();
      var reg_exp_parser_1 = require_reg_exp_parser();
      var LexerDefinitionErrorType2;
      (function(LexerDefinitionErrorType3) {
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
        LexerDefinitionErrorType3[LexerDefinitionErrorType3["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
      })(LexerDefinitionErrorType2 = exports2.LexerDefinitionErrorType || (exports2.LexerDefinitionErrorType = {}));
      var DEFAULT_LEXER_CONFIG = {
        deferDefinitionErrorsHandling: false,
        positionTracking: "full",
        lineTerminatorsPattern: /\n|\r\n?/g,
        lineTerminatorCharacters: ["\n", "\r"],
        ensureOptimizations: false,
        safeMode: false,
        errorMessageProvider: lexer_errors_public_1.defaultLexerErrorProvider,
        traceInitPerf: false,
        skipValidations: false,
        recoveryEnabled: true
      };
      Object.freeze(DEFAULT_LEXER_CONFIG);
      var Lexer2 = function() {
        function Lexer3(lexerDefinition, config) {
          if (config === void 0) {
            config = DEFAULT_LEXER_CONFIG;
          }
          var _this = this;
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
          this.TRACE_INIT = function(phaseDesc, phaseImpl) {
            if (_this.traceInitPerf === true) {
              _this.traceInitIndent++;
              var indent = new Array(_this.traceInitIndent + 1).join("	");
              if (_this.traceInitIndent < _this.traceInitMaxIdent) {
                console.log("".concat(indent, "--> <").concat(phaseDesc, ">"));
              }
              var _a = (0, utils_1.timer)(phaseImpl), time = _a.time, value = _a.value;
              var traceMethod = time > 10 ? console.warn : console.log;
              if (_this.traceInitIndent < _this.traceInitMaxIdent) {
                traceMethod("".concat(indent, "<-- <").concat(phaseDesc, "> time: ").concat(time, "ms"));
              }
              _this.traceInitIndent--;
              return value;
            } else {
              return phaseImpl();
            }
          };
          if (typeof config === "boolean") {
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
          }
          this.config = (0, assign_1.default)({}, DEFAULT_LEXER_CONFIG, config);
          var traceInitVal = this.config.traceInitPerf;
          if (traceInitVal === true) {
            this.traceInitMaxIdent = Infinity;
            this.traceInitPerf = true;
          } else if (typeof traceInitVal === "number") {
            this.traceInitMaxIdent = traceInitVal;
            this.traceInitPerf = true;
          }
          this.traceInitIndent = -1;
          this.TRACE_INIT("Lexer Constructor", function() {
            var actualDefinition;
            var hasOnlySingleMode = true;
            _this.TRACE_INIT("Lexer Config handling", function() {
              if (_this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
                _this.config.lineTerminatorsPattern = lexer_1.LineTerminatorOptimizedTester;
              } else {
                if (_this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                  throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                }
              }
              if (config.safeMode && config.ensureOptimizations) {
                throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
              }
              _this.trackStartLines = /full|onlyStart/i.test(_this.config.positionTracking);
              _this.trackEndLines = /full/i.test(_this.config.positionTracking);
              if ((0, isArray_1.default)(lexerDefinition)) {
                actualDefinition = {
                  modes: { defaultMode: (0, clone_1.default)(lexerDefinition) },
                  defaultMode: lexer_1.DEFAULT_MODE
                };
              } else {
                hasOnlySingleMode = false;
                actualDefinition = (0, clone_1.default)(lexerDefinition);
              }
            });
            if (_this.config.skipValidations === false) {
              _this.TRACE_INIT("performRuntimeChecks", function() {
                _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat((0, lexer_1.performRuntimeChecks)(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
              });
              _this.TRACE_INIT("performWarningRuntimeChecks", function() {
                _this.lexerDefinitionWarning = _this.lexerDefinitionWarning.concat((0, lexer_1.performWarningRuntimeChecks)(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
              });
            }
            actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
            (0, forEach_1.default)(actualDefinition.modes, function(currModeValue, currModeName) {
              actualDefinition.modes[currModeName] = (0, reject_1.default)(currModeValue, function(currTokType) {
                return (0, isUndefined_1.default)(currTokType);
              });
            });
            var allModeNames = (0, keys_1.default)(actualDefinition.modes);
            (0, forEach_1.default)(actualDefinition.modes, function(currModDef, currModName) {
              _this.TRACE_INIT("Mode: <".concat(currModName, "> processing"), function() {
                _this.modes.push(currModName);
                if (_this.config.skipValidations === false) {
                  _this.TRACE_INIT("validatePatterns", function() {
                    _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat((0, lexer_1.validatePatterns)(currModDef, allModeNames));
                  });
                }
                if ((0, isEmpty_1.default)(_this.lexerDefinitionErrors)) {
                  (0, tokens_1.augmentTokenTypes)(currModDef);
                  var currAnalyzeResult_1;
                  _this.TRACE_INIT("analyzeTokenTypes", function() {
                    currAnalyzeResult_1 = (0, lexer_1.analyzeTokenTypes)(currModDef, {
                      lineTerminatorCharacters: _this.config.lineTerminatorCharacters,
                      positionTracking: config.positionTracking,
                      ensureOptimizations: config.ensureOptimizations,
                      safeMode: config.safeMode,
                      tracer: _this.TRACE_INIT
                    });
                  });
                  _this.patternIdxToConfig[currModName] = currAnalyzeResult_1.patternIdxToConfig;
                  _this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult_1.charCodeToPatternIdxToConfig;
                  _this.emptyGroups = (0, assign_1.default)({}, _this.emptyGroups, currAnalyzeResult_1.emptyGroups);
                  _this.hasCustom = currAnalyzeResult_1.hasCustom || _this.hasCustom;
                  _this.canModeBeOptimized[currModName] = currAnalyzeResult_1.canBeOptimized;
                }
              });
            });
            _this.defaultMode = actualDefinition.defaultMode;
            if (!(0, isEmpty_1.default)(_this.lexerDefinitionErrors) && !_this.config.deferDefinitionErrorsHandling) {
              var allErrMessages = (0, map_1.default)(_this.lexerDefinitionErrors, function(error) {
                return error.message;
              });
              var allErrMessagesString = allErrMessages.join("-----------------------\n");
              throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
            }
            (0, forEach_1.default)(_this.lexerDefinitionWarning, function(warningDescriptor) {
              (0, utils_1.PRINT_WARNING)(warningDescriptor.message);
            });
            _this.TRACE_INIT("Choosing sub-methods implementations", function() {
              if (lexer_1.SUPPORT_STICKY) {
                _this.chopInput = identity_1.default;
                _this.match = _this.matchWithTest;
              } else {
                _this.updateLastIndex = noop_1.default;
                _this.match = _this.matchWithExec;
              }
              if (hasOnlySingleMode) {
                _this.handleModes = noop_1.default;
              }
              if (_this.trackStartLines === false) {
                _this.computeNewColumn = identity_1.default;
              }
              if (_this.trackEndLines === false) {
                _this.updateTokenEndLineColumnLocation = noop_1.default;
              }
              if (/full/i.test(_this.config.positionTracking)) {
                _this.createTokenInstance = _this.createFullToken;
              } else if (/onlyStart/i.test(_this.config.positionTracking)) {
                _this.createTokenInstance = _this.createStartOnlyToken;
              } else if (/onlyOffset/i.test(_this.config.positionTracking)) {
                _this.createTokenInstance = _this.createOffsetOnlyToken;
              } else {
                throw Error('Invalid <positionTracking> config option: "'.concat(_this.config.positionTracking, '"'));
              }
              if (_this.hasCustom) {
                _this.addToken = _this.addTokenUsingPush;
                _this.handlePayload = _this.handlePayloadWithCustom;
              } else {
                _this.addToken = _this.addTokenUsingMemberAccess;
                _this.handlePayload = _this.handlePayloadNoCustom;
              }
            });
            _this.TRACE_INIT("Failed Optimization Warnings", function() {
              var unOptimizedModes = (0, reduce_1.default)(_this.canModeBeOptimized, function(cannotBeOptimized, canBeOptimized, modeName) {
                if (canBeOptimized === false) {
                  cannotBeOptimized.push(modeName);
                }
                return cannotBeOptimized;
              }, []);
              if (config.ensureOptimizations && !(0, isEmpty_1.default)(unOptimizedModes)) {
                throw Error("Lexer Modes: < ".concat(unOptimizedModes.join(", "), " > cannot be optimized.\n") + '	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n	 Or inspect the console log for details on how to resolve these issues.');
              }
            });
            _this.TRACE_INIT("clearRegExpParserCache", function() {
              (0, reg_exp_parser_1.clearRegExpParserCache)();
            });
            _this.TRACE_INIT("toFastProperties", function() {
              (0, utils_1.toFastProperties)(_this);
            });
          });
        }
        Lexer3.prototype.tokenize = function(text, initialMode) {
          if (initialMode === void 0) {
            initialMode = this.defaultMode;
          }
          if (!(0, isEmpty_1.default)(this.lexerDefinitionErrors)) {
            var allErrMessages = (0, map_1.default)(this.lexerDefinitionErrors, function(error) {
              return error.message;
            });
            var allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
          }
          return this.tokenizeInternal(text, initialMode);
        };
        Lexer3.prototype.tokenizeInternal = function(text, initialMode) {
          var _this = this;
          var i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
          var orgText = text;
          var orgLength = orgText.length;
          var offset = 0;
          var matchedTokensIndex = 0;
          var guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10);
          var matchedTokens = new Array(guessedNumberOfTokens);
          var errors = [];
          var line = this.trackStartLines ? 1 : void 0;
          var column = this.trackStartLines ? 1 : void 0;
          var groups = (0, lexer_1.cloneEmptyGroups)(this.emptyGroups);
          var trackLines = this.trackStartLines;
          var lineTerminatorPattern = this.config.lineTerminatorsPattern;
          var currModePatternsLength = 0;
          var patternIdxToConfig = [];
          var currCharCodeToPatternIdxToConfig = [];
          var modeStack = [];
          var emptyArray = [];
          Object.freeze(emptyArray);
          var getPossiblePatterns;
          function getPossiblePatternsSlow() {
            return patternIdxToConfig;
          }
          function getPossiblePatternsOptimized(charCode) {
            var optimizedCharIdx = (0, lexer_1.charCodeToOptimizedIndex)(charCode);
            var possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            if (possiblePatterns === void 0) {
              return emptyArray;
            } else {
              return possiblePatterns;
            }
          }
          var pop_mode = function(popToken) {
            if (modeStack.length === 1 && popToken.tokenType.PUSH_MODE === void 0) {
              var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
              errors.push({
                offset: popToken.startOffset,
                line: popToken.startLine,
                column: popToken.startColumn,
                length: popToken.image.length,
                message: msg_1
              });
            } else {
              modeStack.pop();
              var newMode = (0, last_1.default)(modeStack);
              patternIdxToConfig = _this.patternIdxToConfig[newMode];
              currCharCodeToPatternIdxToConfig = _this.charCodeToPatternIdxToConfig[newMode];
              currModePatternsLength = patternIdxToConfig.length;
              var modeCanBeOptimized = _this.canModeBeOptimized[newMode] && _this.config.safeMode === false;
              if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                getPossiblePatterns = getPossiblePatternsOptimized;
              } else {
                getPossiblePatterns = getPossiblePatternsSlow;
              }
            }
          };
          function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            var modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
              getPossiblePatterns = getPossiblePatternsOptimized;
            } else {
              getPossiblePatterns = getPossiblePatternsSlow;
            }
          }
          push_mode.call(this, initialMode);
          var currConfig;
          var recoveryEnabled = this.config.recoveryEnabled;
          while (offset < orgLength) {
            matchedImage = null;
            var nextCharCode = orgText.charCodeAt(offset);
            var chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            var chosenPatternsLength = chosenPatternIdxToConfig.length;
            for (i = 0; i < chosenPatternsLength; i++) {
              currConfig = chosenPatternIdxToConfig[i];
              var currPattern = currConfig.pattern;
              payload = null;
              var singleCharCode = currConfig.short;
              if (singleCharCode !== false) {
                if (nextCharCode === singleCharCode) {
                  matchedImage = currPattern;
                }
              } else if (currConfig.isCustom === true) {
                match = currPattern.exec(orgText, offset, matchedTokens, groups);
                if (match !== null) {
                  matchedImage = match[0];
                  if (match.payload !== void 0) {
                    payload = match.payload;
                  }
                } else {
                  matchedImage = null;
                }
              } else {
                this.updateLastIndex(currPattern, offset);
                matchedImage = this.match(currPattern, text, offset);
              }
              if (matchedImage !== null) {
                longerAlt = currConfig.longerAlt;
                if (longerAlt !== void 0) {
                  var longerAltLength = longerAlt.length;
                  for (k = 0; k < longerAltLength; k++) {
                    var longerAltConfig = patternIdxToConfig[longerAlt[k]];
                    var longerAltPattern = longerAltConfig.pattern;
                    altPayload = null;
                    if (longerAltConfig.isCustom === true) {
                      match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                      if (match !== null) {
                        matchAltImage = match[0];
                        if (match.payload !== void 0) {
                          altPayload = match.payload;
                        }
                      } else {
                        matchAltImage = null;
                      }
                    } else {
                      this.updateLastIndex(longerAltPattern, offset);
                      matchAltImage = this.match(longerAltPattern, text, offset);
                    }
                    if (matchAltImage && matchAltImage.length > matchedImage.length) {
                      matchedImage = matchAltImage;
                      payload = altPayload;
                      currConfig = longerAltConfig;
                      break;
                    }
                  }
                }
                break;
              }
            }
            if (matchedImage !== null) {
              imageLength = matchedImage.length;
              group = currConfig.group;
              if (group !== void 0) {
                tokType = currConfig.tokenTypeIdx;
                newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                this.handlePayload(newToken, payload);
                if (group === false) {
                  matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                } else {
                  groups[group].push(newToken);
                }
              }
              text = this.chopInput(text, imageLength);
              offset = offset + imageLength;
              column = this.computeNewColumn(column, imageLength);
              if (trackLines === true && currConfig.canLineTerminator === true) {
                var numOfLTsInMatch = 0;
                var foundTerminator = void 0;
                var lastLTEndOffset = void 0;
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
              this.handleModes(currConfig, pop_mode, push_mode, newToken);
            } else {
              var errorStartOffset = offset;
              var errorLine = line;
              var errorColumn = column;
              var foundResyncPoint = recoveryEnabled === false;
              while (foundResyncPoint === false && offset < orgLength) {
                text = this.chopInput(text, 1);
                offset++;
                for (j = 0; j < currModePatternsLength; j++) {
                  var currConfig_1 = patternIdxToConfig[j];
                  var currPattern = currConfig_1.pattern;
                  var singleCharCode = currConfig_1.short;
                  if (singleCharCode !== false) {
                    if (orgText.charCodeAt(offset) === singleCharCode) {
                      foundResyncPoint = true;
                    }
                  } else if (currConfig_1.isCustom === true) {
                    foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                  } else {
                    this.updateLastIndex(currPattern, offset);
                    foundResyncPoint = currPattern.exec(text) !== null;
                  }
                  if (foundResyncPoint === true) {
                    break;
                  }
                }
              }
              errLength = offset - errorStartOffset;
              msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
              errors.push({
                offset: errorStartOffset,
                line: errorLine,
                column: errorColumn,
                length: errLength,
                message: msg
              });
              if (recoveryEnabled === false) {
                break;
              }
            }
          }
          if (!this.hasCustom) {
            matchedTokens.length = matchedTokensIndex;
          }
          return {
            tokens: matchedTokens,
            groups,
            errors
          };
        };
        Lexer3.prototype.handleModes = function(config, pop_mode, push_mode, newToken) {
          if (config.pop === true) {
            var pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== void 0) {
              push_mode.call(this, pushMode);
            }
          } else if (config.push !== void 0) {
            push_mode.call(this, config.push);
          }
        };
        Lexer3.prototype.chopInput = function(text, length) {
          return text.substring(length);
        };
        Lexer3.prototype.updateLastIndex = function(regExp, newLastIndex) {
          regExp.lastIndex = newLastIndex;
        };
        Lexer3.prototype.updateTokenEndLineColumnLocation = function(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
          var lastCharIsLT, fixForEndingInLT;
          if (group !== void 0) {
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
              newToken.endLine = line + fixForEndingInLT;
              newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
          }
        };
        Lexer3.prototype.computeNewColumn = function(oldColumn, imageLength) {
          return oldColumn + imageLength;
        };
        Lexer3.prototype.createOffsetOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType) {
          return {
            image,
            startOffset,
            tokenTypeIdx,
            tokenType
          };
        };
        Lexer3.prototype.createStartOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
          return {
            image,
            startOffset,
            startLine,
            startColumn,
            tokenTypeIdx,
            tokenType
          };
        };
        Lexer3.prototype.createFullToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
          return {
            image,
            startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine,
            endLine: startLine,
            startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx,
            tokenType
          };
        };
        Lexer3.prototype.addTokenUsingPush = function(tokenVector, index, tokenToAdd) {
          tokenVector.push(tokenToAdd);
          return index;
        };
        Lexer3.prototype.addTokenUsingMemberAccess = function(tokenVector, index, tokenToAdd) {
          tokenVector[index] = tokenToAdd;
          index++;
          return index;
        };
        Lexer3.prototype.handlePayloadNoCustom = function(token, payload) {
        };
        Lexer3.prototype.handlePayloadWithCustom = function(token, payload) {
          if (payload !== null) {
            token.payload = payload;
          }
        };
        Lexer3.prototype.matchWithTest = function(pattern, text, offset) {
          var found = pattern.test(text);
          if (found === true) {
            return text.substring(offset, pattern.lastIndex);
          }
          return null;
        };
        Lexer3.prototype.matchWithExec = function(pattern, text) {
          var regExpArray = pattern.exec(text);
          return regExpArray !== null ? regExpArray[0] : null;
        };
        Lexer3.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
        Lexer3.NA = /NOT_APPLICABLE/;
        return Lexer3;
      }();
      exports2.Lexer = Lexer2;
    }
  });

  // node_modules/chevrotain/lib/src/scan/tokens_public.js
  var require_tokens_public = __commonJS({
    "node_modules/chevrotain/lib/src/scan/tokens_public.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.tokenMatcher = exports2.createTokenInstance = exports2.EOF = exports2.createToken = exports2.hasTokenLabel = exports2.tokenName = exports2.tokenLabel = void 0;
      var isString_1 = __importDefault(require_isString());
      var has_1 = __importDefault(require_has());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var lexer_public_1 = require_lexer_public();
      var tokens_1 = require_tokens();
      function tokenLabel2(tokType) {
        if (hasTokenLabel(tokType)) {
          return tokType.LABEL;
        } else {
          return tokType.name;
        }
      }
      exports2.tokenLabel = tokenLabel2;
      function tokenName2(tokType) {
        return tokType.name;
      }
      exports2.tokenName = tokenName2;
      function hasTokenLabel(obj) {
        return (0, isString_1.default)(obj.LABEL) && obj.LABEL !== "";
      }
      exports2.hasTokenLabel = hasTokenLabel;
      var PARENT = "parent";
      var CATEGORIES = "categories";
      var LABEL = "label";
      var GROUP = "group";
      var PUSH_MODE = "push_mode";
      var POP_MODE = "pop_mode";
      var LONGER_ALT = "longer_alt";
      var LINE_BREAKS = "line_breaks";
      var START_CHARS_HINT = "start_chars_hint";
      function createToken3(config) {
        return createTokenInternal(config);
      }
      exports2.createToken = createToken3;
      function createTokenInternal(config) {
        var pattern = config.pattern;
        var tokenType = {};
        tokenType.name = config.name;
        if (!(0, isUndefined_1.default)(pattern)) {
          tokenType.PATTERN = pattern;
        }
        if ((0, has_1.default)(config, PARENT)) {
          throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
        }
        if ((0, has_1.default)(config, CATEGORIES)) {
          tokenType.CATEGORIES = config[CATEGORIES];
        }
        (0, tokens_1.augmentTokenTypes)([tokenType]);
        if ((0, has_1.default)(config, LABEL)) {
          tokenType.LABEL = config[LABEL];
        }
        if ((0, has_1.default)(config, GROUP)) {
          tokenType.GROUP = config[GROUP];
        }
        if ((0, has_1.default)(config, POP_MODE)) {
          tokenType.POP_MODE = config[POP_MODE];
        }
        if ((0, has_1.default)(config, PUSH_MODE)) {
          tokenType.PUSH_MODE = config[PUSH_MODE];
        }
        if ((0, has_1.default)(config, LONGER_ALT)) {
          tokenType.LONGER_ALT = config[LONGER_ALT];
        }
        if ((0, has_1.default)(config, LINE_BREAKS)) {
          tokenType.LINE_BREAKS = config[LINE_BREAKS];
        }
        if ((0, has_1.default)(config, START_CHARS_HINT)) {
          tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
        }
        return tokenType;
      }
      exports2.EOF = createToken3({ name: "EOF", pattern: lexer_public_1.Lexer.NA });
      (0, tokens_1.augmentTokenTypes)([exports2.EOF]);
      function createTokenInstance2(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
        return {
          image,
          startOffset,
          endOffset,
          startLine,
          endLine,
          startColumn,
          endColumn,
          tokenTypeIdx: tokType.tokenTypeIdx,
          tokenType: tokType
        };
      }
      exports2.createTokenInstance = createTokenInstance2;
      function tokenMatcher2(token, tokType) {
        return (0, tokens_1.tokenStructuredMatcher)(token, tokType);
      }
      exports2.tokenMatcher = tokenMatcher2;
    }
  });

  // node_modules/chevrotain/lib/src/parse/errors_public.js
  var require_errors_public = __commonJS({
    "node_modules/chevrotain/lib/src/parse/errors_public.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.defaultGrammarValidatorErrorProvider = exports2.defaultGrammarResolverErrorProvider = exports2.defaultParserErrorProvider = void 0;
      var tokens_public_1 = require_tokens_public();
      var first_1 = __importDefault(require_first2());
      var map_1 = __importDefault(require_map());
      var reduce_1 = __importDefault(require_reduce());
      var gast_1 = require_api2();
      var gast_2 = require_api2();
      exports2.defaultParserErrorProvider = {
        buildMismatchTokenMessage: function(_a) {
          var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName;
          var hasLabel = (0, tokens_public_1.hasTokenLabel)(expected);
          var expectedMsg = hasLabel ? "--> ".concat((0, tokens_public_1.tokenLabel)(expected), " <--") : "token of type --> ".concat(expected.name, " <--");
          var msg = "Expecting ".concat(expectedMsg, " but found --> '").concat(actual.image, "' <--");
          return msg;
        },
        buildNotAllInputParsedMessage: function(_a) {
          var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;
          return "Redundant input, expecting EOF but found: " + firstRedundant.image;
        },
        buildNoViableAltMessage: function(_a) {
          var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
          var errPrefix = "Expecting: ";
          var actualText = (0, first_1.default)(actual).image;
          var errSuffix = "\nbut found: '" + actualText + "'";
          if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
          } else {
            var allLookAheadPaths = (0, reduce_1.default)(expectedPathsPerAlt, function(result, currAltPaths) {
              return result.concat(currAltPaths);
            }, []);
            var nextValidTokenSequences = (0, map_1.default)(allLookAheadPaths, function(currPath) {
              return "[".concat((0, map_1.default)(currPath, function(currTokenType) {
                return (0, tokens_public_1.tokenLabel)(currTokenType);
              }).join(", "), "]");
            });
            var nextValidSequenceItems = (0, map_1.default)(nextValidTokenSequences, function(itemMsg, idx) {
              return "  ".concat(idx + 1, ". ").concat(itemMsg);
            });
            var calculatedDescription = "one of these possible Token sequences:\n".concat(nextValidSequenceItems.join("\n"));
            return errPrefix + calculatedDescription + errSuffix;
          }
        },
        buildEarlyExitMessage: function(_a) {
          var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
          var errPrefix = "Expecting: ";
          var actualText = (0, first_1.default)(actual).image;
          var errSuffix = "\nbut found: '" + actualText + "'";
          if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
          } else {
            var nextValidTokenSequences = (0, map_1.default)(expectedIterationPaths, function(currPath) {
              return "[".concat((0, map_1.default)(currPath, function(currTokenType) {
                return (0, tokens_public_1.tokenLabel)(currTokenType);
              }).join(","), "]");
            });
            var calculatedDescription = "expecting at least one iteration which starts with one of these possible Token sequences::\n  " + "<".concat(nextValidTokenSequences.join(" ,"), ">");
            return errPrefix + calculatedDescription + errSuffix;
          }
        }
      };
      Object.freeze(exports2.defaultParserErrorProvider);
      exports2.defaultGrammarResolverErrorProvider = {
        buildRuleNotFoundError: function(topLevelRule, undefinedRule) {
          var msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
          return msg;
        }
      };
      exports2.defaultGrammarValidatorErrorProvider = {
        buildDuplicateFoundError: function(topLevelRule, duplicateProds) {
          function getExtraProductionArgument(prod) {
            if (prod instanceof gast_1.Terminal) {
              return prod.terminalType.name;
            } else if (prod instanceof gast_1.NonTerminal) {
              return prod.nonTerminalName;
            } else {
              return "";
            }
          }
          var topLevelName = topLevelRule.name;
          var duplicateProd = (0, first_1.default)(duplicateProds);
          var index = duplicateProd.idx;
          var dslName = (0, gast_2.getProductionDslName)(duplicateProd);
          var extraArgument = getExtraProductionArgument(duplicateProd);
          var hasExplicitIndex = index > 0;
          var msg = "->".concat(dslName).concat(hasExplicitIndex ? index : "", "<- ").concat(extraArgument ? "with argument: ->".concat(extraArgument, "<-") : "", "\n                  appears more than once (").concat(duplicateProds.length, " times) in the top level rule: ->").concat(topLevelName, "<-.                  \n                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ");
          msg = msg.replace(/[ \t]+/g, " ");
          msg = msg.replace(/\s\s+/g, "\n");
          return msg;
        },
        buildNamespaceConflictError: function(rule) {
          var errMsg = "Namespace conflict found in grammar.\n" + "The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(rule.name, ">.\n") + "To resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.";
          return errMsg;
        },
        buildAlternationPrefixAmbiguityError: function(options) {
          var pathMsg = (0, map_1.default)(options.prefixPath, function(currTok) {
            return (0, tokens_public_1.tokenLabel)(currTok);
          }).join(", ");
          var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
          var errMsg = "Ambiguous alternatives: <".concat(options.ambiguityIndices.join(" ,"), "> due to common lookahead prefix\n") + "in <OR".concat(occurrence, "> inside <").concat(options.topLevelRule.name, "> Rule,\n") + "<".concat(pathMsg, "> may appears as a prefix path in all these alternatives.\n") + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.";
          return errMsg;
        },
        buildAlternationAmbiguityError: function(options) {
          var pathMsg = (0, map_1.default)(options.prefixPath, function(currtok) {
            return (0, tokens_public_1.tokenLabel)(currtok);
          }).join(", ");
          var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
          var currMessage = "Ambiguous Alternatives Detected: <".concat(options.ambiguityIndices.join(" ,"), "> in <OR").concat(occurrence, ">") + " inside <".concat(options.topLevelRule.name, "> Rule,\n") + "<".concat(pathMsg, "> may appears as a prefix path in all these alternatives.\n");
          currMessage = currMessage + "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.";
          return currMessage;
        },
        buildEmptyRepetitionError: function(options) {
          var dslName = (0, gast_2.getProductionDslName)(options.repetition);
          if (options.repetition.idx !== 0) {
            dslName += options.repetition.idx;
          }
          var errMsg = "The repetition <".concat(dslName, "> within Rule <").concat(options.topLevelRule.name, "> can never consume any tokens.\n") + "This could lead to an infinite loop.";
          return errMsg;
        },
        buildTokenNameError: function(options) {
          return "deprecated";
        },
        buildEmptyAlternationError: function(options) {
          var errMsg = "Ambiguous empty alternative: <".concat(options.emptyChoiceIdx + 1, ">") + " in <OR".concat(options.alternation.idx, "> inside <").concat(options.topLevelRule.name, "> Rule.\n") + "Only the last alternative may be an empty alternative.";
          return errMsg;
        },
        buildTooManyAlternativesError: function(options) {
          var errMsg = "An Alternation cannot have more than 256 alternatives:\n" + "<OR".concat(options.alternation.idx, "> inside <").concat(options.topLevelRule.name, "> Rule.\n has ").concat(options.alternation.definition.length + 1, " alternatives.");
          return errMsg;
        },
        buildLeftRecursionError: function(options) {
          var ruleName = options.topLevelRule.name;
          var pathNames = (0, map_1.default)(options.leftRecursionPath, function(currRule) {
            return currRule.name;
          });
          var leftRecursivePath = "".concat(ruleName, " --> ").concat(pathNames.concat([ruleName]).join(" --> "));
          var errMsg = "Left Recursion found in grammar.\n" + "rule: <".concat(ruleName, "> can be invoked from itself (directly or indirectly)\n") + "without consuming any Tokens. The grammar path that causes this is: \n ".concat(leftRecursivePath, "\n") + " To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.";
          return errMsg;
        },
        buildInvalidRuleNameError: function(options) {
          return "deprecated";
        },
        buildDuplicateRuleNameError: function(options) {
          var ruleName;
          if (options.topLevelRule instanceof gast_1.Rule) {
            ruleName = options.topLevelRule.name;
          } else {
            ruleName = options.topLevelRule;
          }
          var errMsg = "Duplicate definition, rule: ->".concat(ruleName, "<- is already defined in the grammar: ->").concat(options.grammarName, "<-");
          return errMsg;
        }
      };
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/resolver.js
  var require_resolver = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/resolver.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.GastRefResolverVisitor = exports2.resolveGrammar = void 0;
      var parser_1 = require_parser();
      var forEach_1 = __importDefault(require_forEach());
      var values_1 = __importDefault(require_values());
      var gast_1 = require_api2();
      function resolveGrammar(topLevels, errMsgProvider) {
        var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
        refResolver.resolveRefs();
        return refResolver.errors;
      }
      exports2.resolveGrammar = resolveGrammar;
      var GastRefResolverVisitor = function(_super) {
        __extends(GastRefResolverVisitor2, _super);
        function GastRefResolverVisitor2(nameToTopRule, errMsgProvider) {
          var _this = _super.call(this) || this;
          _this.nameToTopRule = nameToTopRule;
          _this.errMsgProvider = errMsgProvider;
          _this.errors = [];
          return _this;
        }
        GastRefResolverVisitor2.prototype.resolveRefs = function() {
          var _this = this;
          (0, forEach_1.default)((0, values_1.default)(this.nameToTopRule), function(prod) {
            _this.currTopLevel = prod;
            prod.accept(_this);
          });
        };
        GastRefResolverVisitor2.prototype.visitNonTerminal = function(node) {
          var ref = this.nameToTopRule[node.nonTerminalName];
          if (!ref) {
            var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
              message: msg,
              type: parser_1.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
              ruleName: this.currTopLevel.name,
              unresolvedRefName: node.nonTerminalName
            });
          } else {
            node.referencedRule = ref;
          }
        };
        return GastRefResolverVisitor2;
      }(gast_1.GAstVisitor);
      exports2.GastRefResolverVisitor = GastRefResolverVisitor;
    }
  });

  // node_modules/lodash/_arrayAggregator.js
  var require_arrayAggregator = __commonJS({
    "node_modules/lodash/_arrayAggregator.js"(exports2, module2) {
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      module2.exports = arrayAggregator;
    }
  });

  // node_modules/lodash/_baseAggregator.js
  var require_baseAggregator = __commonJS({
    "node_modules/lodash/_baseAggregator.js"(exports2, module2) {
      var baseEach = require_baseEach();
      function baseAggregator(collection, setter, iteratee, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee(value), collection2);
        });
        return accumulator;
      }
      module2.exports = baseAggregator;
    }
  });

  // node_modules/lodash/_createAggregator.js
  var require_createAggregator = __commonJS({
    "node_modules/lodash/_createAggregator.js"(exports2, module2) {
      var arrayAggregator = require_arrayAggregator();
      var baseAggregator = require_baseAggregator();
      var baseIteratee = require_baseIteratee();
      var isArray = require_isArray();
      function createAggregator(setter, initializer) {
        return function(collection, iteratee) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
        };
      }
      module2.exports = createAggregator;
    }
  });

  // node_modules/lodash/groupBy.js
  var require_groupBy = __commonJS({
    "node_modules/lodash/groupBy.js"(exports2, module2) {
      var baseAssignValue = require_baseAssignValue();
      var createAggregator = require_createAggregator();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var groupBy = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          baseAssignValue(result, key, [value]);
        }
      });
      module2.exports = groupBy;
    }
  });

  // node_modules/lodash/flatMap.js
  var require_flatMap = __commonJS({
    "node_modules/lodash/flatMap.js"(exports2, module2) {
      var baseFlatten = require_baseFlatten();
      var map = require_map();
      function flatMap(collection, iteratee) {
        return baseFlatten(map(collection, iteratee), 1);
      }
      module2.exports = flatMap;
    }
  });

  // node_modules/lodash/dropRight.js
  var require_dropRight = __commonJS({
    "node_modules/lodash/dropRight.js"(exports2, module2) {
      var baseSlice = require_baseSlice();
      var toInteger = require_toInteger();
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === void 0 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      module2.exports = dropRight;
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
  var require_interpreter = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/interpreter.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.nextPossibleTokensAfter = exports2.possiblePathsFrom = exports2.NextTerminalAfterAtLeastOneSepWalker = exports2.NextTerminalAfterAtLeastOneWalker = exports2.NextTerminalAfterManySepWalker = exports2.NextTerminalAfterManyWalker = exports2.AbstractNextTerminalAfterProductionWalker = exports2.NextAfterTokenWalker = exports2.AbstractNextPossibleTokensWalker = void 0;
      var rest_1 = require_rest();
      var first_1 = __importDefault(require_first2());
      var isEmpty_1 = __importDefault(require_isEmpty());
      var dropRight_1 = __importDefault(require_dropRight());
      var drop_1 = __importDefault(require_drop());
      var last_1 = __importDefault(require_last());
      var forEach_1 = __importDefault(require_forEach());
      var clone_1 = __importDefault(require_clone());
      var first_2 = require_first();
      var gast_1 = require_api2();
      var AbstractNextPossibleTokensWalker = function(_super) {
        __extends(AbstractNextPossibleTokensWalker2, _super);
        function AbstractNextPossibleTokensWalker2(topProd, path) {
          var _this = _super.call(this) || this;
          _this.topProd = topProd;
          _this.path = path;
          _this.possibleTokTypes = [];
          _this.nextProductionName = "";
          _this.nextProductionOccurrence = 0;
          _this.found = false;
          _this.isAtEndOfPath = false;
          return _this;
        }
        AbstractNextPossibleTokensWalker2.prototype.startWalking = function() {
          this.found = false;
          if (this.path.ruleStack[0] !== this.topProd.name) {
            throw Error("The path does not start with the walker's top Rule!");
          }
          this.ruleStack = (0, clone_1.default)(this.path.ruleStack).reverse();
          this.occurrenceStack = (0, clone_1.default)(this.path.occurrenceStack).reverse();
          this.ruleStack.pop();
          this.occurrenceStack.pop();
          this.updateExpectedNext();
          this.walk(this.topProd);
          return this.possibleTokTypes;
        };
        AbstractNextPossibleTokensWalker2.prototype.walk = function(prod, prevRest) {
          if (prevRest === void 0) {
            prevRest = [];
          }
          if (!this.found) {
            _super.prototype.walk.call(this, prod, prevRest);
          }
        };
        AbstractNextPossibleTokensWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
          if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
            var fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
          }
        };
        AbstractNextPossibleTokensWalker2.prototype.updateExpectedNext = function() {
          if ((0, isEmpty_1.default)(this.ruleStack)) {
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
          } else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
          }
        };
        return AbstractNextPossibleTokensWalker2;
      }(rest_1.RestWalker);
      exports2.AbstractNextPossibleTokensWalker = AbstractNextPossibleTokensWalker;
      var NextAfterTokenWalker = function(_super) {
        __extends(NextAfterTokenWalker2, _super);
        function NextAfterTokenWalker2(topProd, path) {
          var _this = _super.call(this, topProd, path) || this;
          _this.path = path;
          _this.nextTerminalName = "";
          _this.nextTerminalOccurrence = 0;
          _this.nextTerminalName = _this.path.lastTok.name;
          _this.nextTerminalOccurrence = _this.path.lastTokOccurrence;
          return _this;
        }
        NextAfterTokenWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
          if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
            var fullRest = currRest.concat(prevRest);
            var restProd = new gast_1.Alternative({ definition: fullRest });
            this.possibleTokTypes = (0, first_2.first)(restProd);
            this.found = true;
          }
        };
        return NextAfterTokenWalker2;
      }(AbstractNextPossibleTokensWalker);
      exports2.NextAfterTokenWalker = NextAfterTokenWalker;
      var AbstractNextTerminalAfterProductionWalker = function(_super) {
        __extends(AbstractNextTerminalAfterProductionWalker2, _super);
        function AbstractNextTerminalAfterProductionWalker2(topRule, occurrence) {
          var _this = _super.call(this) || this;
          _this.topRule = topRule;
          _this.occurrence = occurrence;
          _this.result = {
            token: void 0,
            occurrence: void 0,
            isEndOfRule: void 0
          };
          return _this;
        }
        AbstractNextTerminalAfterProductionWalker2.prototype.startWalking = function() {
          this.walk(this.topRule);
          return this.result;
        };
        return AbstractNextTerminalAfterProductionWalker2;
      }(rest_1.RestWalker);
      exports2.AbstractNextTerminalAfterProductionWalker = AbstractNextTerminalAfterProductionWalker;
      var NextTerminalAfterManyWalker = function(_super) {
        __extends(NextTerminalAfterManyWalker2, _super);
        function NextTerminalAfterManyWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NextTerminalAfterManyWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          if (manyProd.idx === this.occurrence) {
            var firstAfterMany = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === void 0;
            if (firstAfterMany instanceof gast_1.Terminal) {
              this.result.token = firstAfterMany.terminalType;
              this.result.occurrence = firstAfterMany.idx;
            }
          } else {
            _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);
          }
        };
        return NextTerminalAfterManyWalker2;
      }(AbstractNextTerminalAfterProductionWalker);
      exports2.NextTerminalAfterManyWalker = NextTerminalAfterManyWalker;
      var NextTerminalAfterManySepWalker = function(_super) {
        __extends(NextTerminalAfterManySepWalker2, _super);
        function NextTerminalAfterManySepWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NextTerminalAfterManySepWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          if (manySepProd.idx === this.occurrence) {
            var firstAfterManySep = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === void 0;
            if (firstAfterManySep instanceof gast_1.Terminal) {
              this.result.token = firstAfterManySep.terminalType;
              this.result.occurrence = firstAfterManySep.idx;
            }
          } else {
            _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);
          }
        };
        return NextTerminalAfterManySepWalker2;
      }(AbstractNextTerminalAfterProductionWalker);
      exports2.NextTerminalAfterManySepWalker = NextTerminalAfterManySepWalker;
      var NextTerminalAfterAtLeastOneWalker = function(_super) {
        __extends(NextTerminalAfterAtLeastOneWalker2, _super);
        function NextTerminalAfterAtLeastOneWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NextTerminalAfterAtLeastOneWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          if (atLeastOneProd.idx === this.occurrence) {
            var firstAfterAtLeastOne = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
            if (firstAfterAtLeastOne instanceof gast_1.Terminal) {
              this.result.token = firstAfterAtLeastOne.terminalType;
              this.result.occurrence = firstAfterAtLeastOne.idx;
            }
          } else {
            _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);
          }
        };
        return NextTerminalAfterAtLeastOneWalker2;
      }(AbstractNextTerminalAfterProductionWalker);
      exports2.NextTerminalAfterAtLeastOneWalker = NextTerminalAfterAtLeastOneWalker;
      var NextTerminalAfterAtLeastOneSepWalker = function(_super) {
        __extends(NextTerminalAfterAtLeastOneSepWalker2, _super);
        function NextTerminalAfterAtLeastOneSepWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NextTerminalAfterAtLeastOneSepWalker2.prototype.walkAtLeastOneSep = function(atleastOneSepProd, currRest, prevRest) {
          if (atleastOneSepProd.idx === this.occurrence) {
            var firstAfterfirstAfterAtLeastOneSep = (0, first_1.default)(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
            if (firstAfterfirstAfterAtLeastOneSep instanceof gast_1.Terminal) {
              this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
              this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
          } else {
            _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);
          }
        };
        return NextTerminalAfterAtLeastOneSepWalker2;
      }(AbstractNextTerminalAfterProductionWalker);
      exports2.NextTerminalAfterAtLeastOneSepWalker = NextTerminalAfterAtLeastOneSepWalker;
      function possiblePathsFrom(targetDef, maxLength, currPath) {
        if (currPath === void 0) {
          currPath = [];
        }
        currPath = (0, clone_1.default)(currPath);
        var result = [];
        var i = 0;
        function remainingPathWith(nextDef) {
          return nextDef.concat((0, drop_1.default)(targetDef, i + 1));
        }
        function getAlternativesForProd(definition) {
          var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
          return result.concat(alternatives);
        }
        while (currPath.length < maxLength && i < targetDef.length) {
          var prod = targetDef[i];
          if (prod instanceof gast_1.Alternative) {
            return getAlternativesForProd(prod.definition);
          } else if (prod instanceof gast_1.NonTerminal) {
            return getAlternativesForProd(prod.definition);
          } else if (prod instanceof gast_1.Option) {
            result = getAlternativesForProd(prod.definition);
          } else if (prod instanceof gast_1.RepetitionMandatory) {
            var newDef = prod.definition.concat([
              new gast_1.Repetition({
                definition: prod.definition
              })
            ]);
            return getAlternativesForProd(newDef);
          } else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator) {
            var newDef = [
              new gast_1.Alternative({ definition: prod.definition }),
              new gast_1.Repetition({
                definition: [new gast_1.Terminal({ terminalType: prod.separator })].concat(prod.definition)
              })
            ];
            return getAlternativesForProd(newDef);
          } else if (prod instanceof gast_1.RepetitionWithSeparator) {
            var newDef = prod.definition.concat([
              new gast_1.Repetition({
                definition: [new gast_1.Terminal({ terminalType: prod.separator })].concat(prod.definition)
              })
            ]);
            result = getAlternativesForProd(newDef);
          } else if (prod instanceof gast_1.Repetition) {
            var newDef = prod.definition.concat([
              new gast_1.Repetition({
                definition: prod.definition
              })
            ]);
            result = getAlternativesForProd(newDef);
          } else if (prod instanceof gast_1.Alternation) {
            (0, forEach_1.default)(prod.definition, function(currAlt) {
              if ((0, isEmpty_1.default)(currAlt.definition) === false) {
                result = getAlternativesForProd(currAlt.definition);
              }
            });
            return result;
          } else if (prod instanceof gast_1.Terminal) {
            currPath.push(prod.terminalType);
          } else {
            throw Error("non exhaustive match");
          }
          i++;
        }
        result.push({
          partialPath: currPath,
          suffixDef: (0, drop_1.default)(targetDef, i)
        });
        return result;
      }
      exports2.possiblePathsFrom = possiblePathsFrom;
      function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
        var EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
        var EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
        var EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
        var foundCompletePath = false;
        var tokenVectorLength = tokenVector.length;
        var minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
        var result = [];
        var possiblePaths = [];
        possiblePaths.push({
          idx: -1,
          def: initialDef,
          ruleStack: [],
          occurrenceStack: []
        });
        while (!(0, isEmpty_1.default)(possiblePaths)) {
          var currPath = possiblePaths.pop();
          if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath && (0, last_1.default)(possiblePaths).idx <= minimalAlternativesIndex) {
              possiblePaths.pop();
            }
            continue;
          }
          var currDef = currPath.def;
          var currIdx = currPath.idx;
          var currRuleStack = currPath.ruleStack;
          var currOccurrenceStack = currPath.occurrenceStack;
          if ((0, isEmpty_1.default)(currDef)) {
            continue;
          }
          var prod = currDef[0];
          if (prod === EXIT_NON_TERMINAL) {
            var nextPath = {
              idx: currIdx,
              def: (0, drop_1.default)(currDef),
              ruleStack: (0, dropRight_1.default)(currRuleStack),
              occurrenceStack: (0, dropRight_1.default)(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_1.Terminal) {
            if (currIdx < tokenVectorLength - 1) {
              var nextIdx = currIdx + 1;
              var actualToken = tokenVector[nextIdx];
              if (tokMatcher(actualToken, prod.terminalType)) {
                var nextPath = {
                  idx: nextIdx,
                  def: (0, drop_1.default)(currDef),
                  ruleStack: currRuleStack,
                  occurrenceStack: currOccurrenceStack
                };
                possiblePaths.push(nextPath);
              }
            } else if (currIdx === tokenVectorLength - 1) {
              result.push({
                nextTokenType: prod.terminalType,
                nextTokenOccurrence: prod.idx,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
              });
              foundCompletePath = true;
            } else {
              throw Error("non exhaustive match");
            }
          } else if (prod instanceof gast_1.NonTerminal) {
            var newRuleStack = (0, clone_1.default)(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            var newOccurrenceStack = (0, clone_1.default)(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            var nextPath = {
              idx: currIdx,
              def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, (0, drop_1.default)(currDef)),
              ruleStack: newRuleStack,
              occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_1.Option) {
            var nextPathWithout = {
              idx: currIdx,
              def: (0, drop_1.default)(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            possiblePaths.push(EXIT_ALTERNATIVE);
            var nextPathWith = {
              idx: currIdx,
              def: prod.definition.concat((0, drop_1.default)(currDef)),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_1.RepetitionMandatory) {
            var secondIteration = new gast_1.Repetition({
              definition: prod.definition,
              idx: prod.idx
            });
            var nextDef = prod.definition.concat([secondIteration], (0, drop_1.default)(currDef));
            var nextPath = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator) {
            var separatorGast = new gast_1.Terminal({
              terminalType: prod.separator
            });
            var secondIteration = new gast_1.Repetition({
              definition: [separatorGast].concat(prod.definition),
              idx: prod.idx
            });
            var nextDef = prod.definition.concat([secondIteration], (0, drop_1.default)(currDef));
            var nextPath = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_1.RepetitionWithSeparator) {
            var nextPathWithout = {
              idx: currIdx,
              def: (0, drop_1.default)(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            possiblePaths.push(EXIT_ALTERNATIVE);
            var separatorGast = new gast_1.Terminal({
              terminalType: prod.separator
            });
            var nthRepetition = new gast_1.Repetition({
              definition: [separatorGast].concat(prod.definition),
              idx: prod.idx
            });
            var nextDef = prod.definition.concat([nthRepetition], (0, drop_1.default)(currDef));
            var nextPathWith = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_1.Repetition) {
            var nextPathWithout = {
              idx: currIdx,
              def: (0, drop_1.default)(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            possiblePaths.push(EXIT_ALTERNATIVE);
            var nthRepetition = new gast_1.Repetition({
              definition: prod.definition,
              idx: prod.idx
            });
            var nextDef = prod.definition.concat([nthRepetition], (0, drop_1.default)(currDef));
            var nextPathWith = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_1.Alternation) {
            for (var i = prod.definition.length - 1; i >= 0; i--) {
              var currAlt = prod.definition[i];
              var currAltPath = {
                idx: currIdx,
                def: currAlt.definition.concat((0, drop_1.default)(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
              };
              possiblePaths.push(currAltPath);
              possiblePaths.push(EXIT_ALTERNATIVE);
            }
          } else if (prod instanceof gast_1.Alternative) {
            possiblePaths.push({
              idx: currIdx,
              def: prod.definition.concat((0, drop_1.default)(currDef)),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            });
          } else if (prod instanceof gast_1.Rule) {
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
          } else {
            throw Error("non exhaustive match");
          }
        }
        return result;
      }
      exports2.nextPossibleTokensAfter = nextPossibleTokensAfter;
      function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
        var newRuleStack = (0, clone_1.default)(currRuleStack);
        newRuleStack.push(topRule.name);
        var newCurrOccurrenceStack = (0, clone_1.default)(currOccurrenceStack);
        newCurrOccurrenceStack.push(1);
        return {
          idx: currIdx,
          def: topRule.definition,
          ruleStack: newRuleStack,
          occurrenceStack: newCurrOccurrenceStack
        };
      }
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
  var require_lookahead = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/lookahead.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.areTokenCategoriesNotUsed = exports2.isStrictPrefixOfPath = exports2.containsPath = exports2.getLookaheadPathsForOptionalProd = exports2.getLookaheadPathsForOr = exports2.lookAheadSequenceFromAlternatives = exports2.buildSingleAlternativeLookaheadFunction = exports2.buildAlternativesLookAheadFunc = exports2.buildLookaheadFuncForOptionalProd = exports2.buildLookaheadFuncForOr = exports2.getLookaheadPaths = exports2.getProdType = exports2.PROD_TYPE = void 0;
      var isEmpty_1 = __importDefault(require_isEmpty());
      var flatten_1 = __importDefault(require_flatten());
      var every_1 = __importDefault(require_every());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var has_1 = __importDefault(require_has());
      var reduce_1 = __importDefault(require_reduce());
      var interpreter_1 = require_interpreter();
      var rest_1 = require_rest();
      var tokens_1 = require_tokens();
      var gast_1 = require_api2();
      var gast_2 = require_api2();
      var PROD_TYPE;
      (function(PROD_TYPE2) {
        PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
        PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
        PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
        PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
        PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
        PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
      })(PROD_TYPE = exports2.PROD_TYPE || (exports2.PROD_TYPE = {}));
      function getProdType(prod) {
        if (prod instanceof gast_1.Option || prod === "Option") {
          return PROD_TYPE.OPTION;
        } else if (prod instanceof gast_1.Repetition || prod === "Repetition") {
          return PROD_TYPE.REPETITION;
        } else if (prod instanceof gast_1.RepetitionMandatory || prod === "RepetitionMandatory") {
          return PROD_TYPE.REPETITION_MANDATORY;
        } else if (prod instanceof gast_1.RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") {
          return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
        } else if (prod instanceof gast_1.RepetitionWithSeparator || prod === "RepetitionWithSeparator") {
          return PROD_TYPE.REPETITION_WITH_SEPARATOR;
        } else if (prod instanceof gast_1.Alternation || prod === "Alternation") {
          return PROD_TYPE.ALTERNATION;
        } else {
          throw Error("non exhaustive match");
        }
      }
      exports2.getProdType = getProdType;
      function getLookaheadPaths2(options) {
        var occurrence = options.occurrence, rule = options.rule, prodType = options.prodType, maxLookahead = options.maxLookahead;
        var type = getProdType(prodType);
        if (type === PROD_TYPE.ALTERNATION) {
          return getLookaheadPathsForOr(occurrence, rule, maxLookahead);
        } else {
          return getLookaheadPathsForOptionalProd(occurrence, rule, type, maxLookahead);
        }
      }
      exports2.getLookaheadPaths = getLookaheadPaths2;
      function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
        var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
        var tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
        return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
      }
      exports2.buildLookaheadFuncForOr = buildLookaheadFuncForOr;
      function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
        var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
        var tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
        return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
      }
      exports2.buildLookaheadFuncForOptionalProd = buildLookaheadFuncForOptionalProd;
      function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
        var numOfAlts = alts.length;
        var areAllOneTokenLookahead = (0, every_1.default)(alts, function(currAlt) {
          return (0, every_1.default)(currAlt, function(currPath) {
            return currPath.length === 1;
          });
        });
        if (hasPredicates) {
          return function(orAlts) {
            var predicates = (0, map_1.default)(orAlts, function(currAlt2) {
              return currAlt2.GATE;
            });
            for (var t = 0; t < numOfAlts; t++) {
              var currAlt = alts[t];
              var currNumOfPaths = currAlt.length;
              var currPredicate = predicates[t];
              if (currPredicate !== void 0 && currPredicate.call(this) === false) {
                continue;
              }
              nextPath:
                for (var j = 0; j < currNumOfPaths; j++) {
                  var currPath = currAlt[j];
                  var currPathLength = currPath.length;
                  for (var i = 0; i < currPathLength; i++) {
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher2(nextToken, currPath[i]) === false) {
                      continue nextPath;
                    }
                  }
                  return t;
                }
            }
            return void 0;
          };
        } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
          var singleTokenAlts = (0, map_1.default)(alts, function(currAlt) {
            return (0, flatten_1.default)(currAlt);
          });
          var choiceToAlt_1 = (0, reduce_1.default)(singleTokenAlts, function(result, currAlt, idx) {
            (0, forEach_1.default)(currAlt, function(currTokType) {
              if (!(0, has_1.default)(result, currTokType.tokenTypeIdx)) {
                result[currTokType.tokenTypeIdx] = idx;
              }
              (0, forEach_1.default)(currTokType.categoryMatches, function(currExtendingType) {
                if (!(0, has_1.default)(result, currExtendingType)) {
                  result[currExtendingType] = idx;
                }
              });
            });
            return result;
          }, {});
          return function() {
            var nextToken = this.LA(1);
            return choiceToAlt_1[nextToken.tokenTypeIdx];
          };
        } else {
          return function() {
            for (var t = 0; t < numOfAlts; t++) {
              var currAlt = alts[t];
              var currNumOfPaths = currAlt.length;
              nextPath:
                for (var j = 0; j < currNumOfPaths; j++) {
                  var currPath = currAlt[j];
                  var currPathLength = currPath.length;
                  for (var i = 0; i < currPathLength; i++) {
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher2(nextToken, currPath[i]) === false) {
                      continue nextPath;
                    }
                  }
                  return t;
                }
            }
            return void 0;
          };
        }
      }
      exports2.buildAlternativesLookAheadFunc = buildAlternativesLookAheadFunc;
      function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
        var areAllOneTokenLookahead = (0, every_1.default)(alt, function(currPath) {
          return currPath.length === 1;
        });
        var numOfPaths = alt.length;
        if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
          var singleTokensTypes = (0, flatten_1.default)(alt);
          if (singleTokensTypes.length === 1 && (0, isEmpty_1.default)(singleTokensTypes[0].categoryMatches)) {
            var expectedTokenType = singleTokensTypes[0];
            var expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;
            return function() {
              return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;
            };
          } else {
            var choiceToAlt_2 = (0, reduce_1.default)(singleTokensTypes, function(result, currTokType, idx) {
              result[currTokType.tokenTypeIdx] = true;
              (0, forEach_1.default)(currTokType.categoryMatches, function(currExtendingType) {
                result[currExtendingType] = true;
              });
              return result;
            }, []);
            return function() {
              var nextToken = this.LA(1);
              return choiceToAlt_2[nextToken.tokenTypeIdx] === true;
            };
          }
        } else {
          return function() {
            nextPath:
              for (var j = 0; j < numOfPaths; j++) {
                var currPath = alt[j];
                var currPathLength = currPath.length;
                for (var i = 0; i < currPathLength; i++) {
                  var nextToken = this.LA(i + 1);
                  if (tokenMatcher2(nextToken, currPath[i]) === false) {
                    continue nextPath;
                  }
                }
                return true;
              }
            return false;
          };
        }
      }
      exports2.buildSingleAlternativeLookaheadFunction = buildSingleAlternativeLookaheadFunction;
      var RestDefinitionFinderWalker = function(_super) {
        __extends(RestDefinitionFinderWalker2, _super);
        function RestDefinitionFinderWalker2(topProd, targetOccurrence, targetProdType) {
          var _this = _super.call(this) || this;
          _this.topProd = topProd;
          _this.targetOccurrence = targetOccurrence;
          _this.targetProdType = targetProdType;
          return _this;
        }
        RestDefinitionFinderWalker2.prototype.startWalking = function() {
          this.walk(this.topProd);
          return this.restDef;
        };
        RestDefinitionFinderWalker2.prototype.checkIsTarget = function(node, expectedProdType, currRest, prevRest) {
          if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
          }
          return false;
        };
        RestDefinitionFinderWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
          if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);
          }
        };
        RestDefinitionFinderWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);
          }
        };
        RestDefinitionFinderWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
          if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);
          }
        };
        RestDefinitionFinderWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);
          }
        };
        RestDefinitionFinderWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);
          }
        };
        return RestDefinitionFinderWalker2;
      }(rest_1.RestWalker);
      var InsideDefinitionFinderVisitor = function(_super) {
        __extends(InsideDefinitionFinderVisitor2, _super);
        function InsideDefinitionFinderVisitor2(targetOccurrence, targetProdType, targetRef) {
          var _this = _super.call(this) || this;
          _this.targetOccurrence = targetOccurrence;
          _this.targetProdType = targetProdType;
          _this.targetRef = targetRef;
          _this.result = [];
          return _this;
        }
        InsideDefinitionFinderVisitor2.prototype.checkIsTarget = function(node, expectedProdName) {
          if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
            this.result = node.definition;
          }
        };
        InsideDefinitionFinderVisitor2.prototype.visitOption = function(node) {
          this.checkIsTarget(node, PROD_TYPE.OPTION);
        };
        InsideDefinitionFinderVisitor2.prototype.visitRepetition = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION);
        };
        InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatory = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
        };
        InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
        };
        InsideDefinitionFinderVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
        };
        InsideDefinitionFinderVisitor2.prototype.visitAlternation = function(node) {
          this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
        };
        return InsideDefinitionFinderVisitor2;
      }(gast_2.GAstVisitor);
      function initializeArrayOfArrays(size) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
          result[i] = [];
        }
        return result;
      }
      function pathToHashKeys(path) {
        var keys = [""];
        for (var i = 0; i < path.length; i++) {
          var tokType = path[i];
          var longerKeys = [];
          for (var j = 0; j < keys.length; j++) {
            var currShorterKey = keys[j];
            longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
            for (var t = 0; t < tokType.categoryMatches.length; t++) {
              var categoriesKeySuffix = "_" + tokType.categoryMatches[t];
              longerKeys.push(currShorterKey + categoriesKeySuffix);
            }
          }
          keys = longerKeys;
        }
        return keys;
      }
      function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
        for (var currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
          if (currAltIdx === idx) {
            continue;
          }
          var otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
          for (var searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
            var searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === true) {
              return false;
            }
          }
        }
        return true;
      }
      function lookAheadSequenceFromAlternatives(altsDefs, k) {
        var partialAlts = (0, map_1.default)(altsDefs, function(currAlt) {
          return (0, interpreter_1.possiblePathsFrom)([currAlt], 1);
        });
        var finalResult = initializeArrayOfArrays(partialAlts.length);
        var altsHashes = (0, map_1.default)(partialAlts, function(currAltPaths) {
          var dict = {};
          (0, forEach_1.default)(currAltPaths, function(item) {
            var keys = pathToHashKeys(item.partialPath);
            (0, forEach_1.default)(keys, function(currKey) {
              dict[currKey] = true;
            });
          });
          return dict;
        });
        var newData = partialAlts;
        for (var pathLength = 1; pathLength <= k; pathLength++) {
          var currDataset = newData;
          newData = initializeArrayOfArrays(currDataset.length);
          var _loop_1 = function(altIdx2) {
            var currAltPathsAndSuffixes = currDataset[altIdx2];
            for (var currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
              var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
              var suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
              var prefixKeys = pathToHashKeys(currPathPrefix);
              var isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx2);
              if (isUnique || (0, isEmpty_1.default)(suffixDef) || currPathPrefix.length === k) {
                var currAltResult = finalResult[altIdx2];
                if (containsPath(currAltResult, currPathPrefix) === false) {
                  currAltResult.push(currPathPrefix);
                  for (var j = 0; j < prefixKeys.length; j++) {
                    var currKey = prefixKeys[j];
                    altsHashes[altIdx2][currKey] = true;
                  }
                }
              } else {
                var newPartialPathsAndSuffixes = (0, interpreter_1.possiblePathsFrom)(suffixDef, pathLength + 1, currPathPrefix);
                newData[altIdx2] = newData[altIdx2].concat(newPartialPathsAndSuffixes);
                (0, forEach_1.default)(newPartialPathsAndSuffixes, function(item) {
                  var prefixKeys2 = pathToHashKeys(item.partialPath);
                  (0, forEach_1.default)(prefixKeys2, function(key) {
                    altsHashes[altIdx2][key] = true;
                  });
                });
              }
            }
          };
          for (var altIdx = 0; altIdx < currDataset.length; altIdx++) {
            _loop_1(altIdx);
          }
        }
        return finalResult;
      }
      exports2.lookAheadSequenceFromAlternatives = lookAheadSequenceFromAlternatives;
      function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
        var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
        ruleGrammar.accept(visitor);
        return lookAheadSequenceFromAlternatives(visitor.result, k);
      }
      exports2.getLookaheadPathsForOr = getLookaheadPathsForOr;
      function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
        var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
        ruleGrammar.accept(insideDefVisitor);
        var insideDef = insideDefVisitor.result;
        var afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
        var afterDef = afterDefWalker.startWalking();
        var insideFlat = new gast_1.Alternative({ definition: insideDef });
        var afterFlat = new gast_1.Alternative({ definition: afterDef });
        return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
      }
      exports2.getLookaheadPathsForOptionalProd = getLookaheadPathsForOptionalProd;
      function containsPath(alternative, searchPath) {
        compareOtherPath:
          for (var i = 0; i < alternative.length; i++) {
            var otherPath = alternative[i];
            if (otherPath.length !== searchPath.length) {
              continue;
            }
            for (var j = 0; j < otherPath.length; j++) {
              var searchTok = searchPath[j];
              var otherTok = otherPath[j];
              var matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
              if (matchingTokens === false) {
                continue compareOtherPath;
              }
            }
            return true;
          }
        return false;
      }
      exports2.containsPath = containsPath;
      function isStrictPrefixOfPath(prefix, other) {
        return prefix.length < other.length && (0, every_1.default)(prefix, function(tokType, idx) {
          var otherTokType = other[idx];
          return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
        });
      }
      exports2.isStrictPrefixOfPath = isStrictPrefixOfPath;
      function areTokenCategoriesNotUsed(lookAheadPaths) {
        return (0, every_1.default)(lookAheadPaths, function(singleAltPaths) {
          return (0, every_1.default)(singleAltPaths, function(singlePath) {
            return (0, every_1.default)(singlePath, function(token) {
              return (0, isEmpty_1.default)(token.categoryMatches);
            });
          });
        });
      }
      exports2.areTokenCategoriesNotUsed = areTokenCategoriesNotUsed;
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/checks.js
  var require_checks = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/checks.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports2 && exports2.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.checkPrefixAlternativesAmbiguities = exports2.validateSomeNonEmptyLookaheadPath = exports2.validateTooManyAlts = exports2.RepetitionCollector = exports2.validateAmbiguousAlternationAlternatives = exports2.validateEmptyOrAlternative = exports2.getFirstNoneTerminal = exports2.validateNoLeftRecursion = exports2.validateRuleIsOverridden = exports2.validateRuleDoesNotAlreadyExist = exports2.OccurrenceValidationCollector = exports2.identifyProductionForDuplicates = exports2.validateGrammar = exports2.validateLookahead = void 0;
      var first_1 = __importDefault(require_first2());
      var isEmpty_1 = __importDefault(require_isEmpty());
      var drop_1 = __importDefault(require_drop());
      var flatten_1 = __importDefault(require_flatten());
      var filter_1 = __importDefault(require_filter());
      var reject_1 = __importDefault(require_reject());
      var difference_1 = __importDefault(require_difference());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var groupBy_1 = __importDefault(require_groupBy());
      var reduce_1 = __importDefault(require_reduce());
      var pickBy_1 = __importDefault(require_pickBy());
      var values_1 = __importDefault(require_values());
      var includes_1 = __importDefault(require_includes());
      var flatMap_1 = __importDefault(require_flatMap());
      var clone_1 = __importDefault(require_clone());
      var parser_1 = require_parser();
      var gast_1 = require_api2();
      var lookahead_1 = require_lookahead();
      var interpreter_1 = require_interpreter();
      var gast_2 = require_api2();
      var gast_3 = require_api2();
      var dropRight_1 = __importDefault(require_dropRight());
      var compact_1 = __importDefault(require_compact());
      var tokens_1 = require_tokens();
      function validateLookahead(options) {
        var lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
          rules: options.rules,
          tokenTypes: options.tokenTypes,
          grammarName: options.grammarName
        });
        return (0, map_1.default)(lookaheadValidationErrorMessages, function(errorMessage) {
          return __assign({ type: parser_1.ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage);
        });
      }
      exports2.validateLookahead = validateLookahead;
      function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
        var duplicateErrors = (0, flatMap_1.default)(topLevels, function(currTopLevel) {
          return validateDuplicateProductions(currTopLevel, errMsgProvider);
        });
        var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
        var tooManyAltsErrors = (0, flatMap_1.default)(topLevels, function(curRule) {
          return validateTooManyAlts(curRule, errMsgProvider);
        });
        var duplicateRulesError = (0, flatMap_1.default)(topLevels, function(curRule) {
          return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);
        });
        return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
      }
      exports2.validateGrammar = validateGrammar;
      function validateDuplicateProductions(topLevelRule, errMsgProvider) {
        var collectorVisitor = new OccurrenceValidationCollector();
        topLevelRule.accept(collectorVisitor);
        var allRuleProductions = collectorVisitor.allProductions;
        var productionGroups = (0, groupBy_1.default)(allRuleProductions, identifyProductionForDuplicates);
        var duplicates = (0, pickBy_1.default)(productionGroups, function(currGroup) {
          return currGroup.length > 1;
        });
        var errors = (0, map_1.default)((0, values_1.default)(duplicates), function(currDuplicates) {
          var firstProd = (0, first_1.default)(currDuplicates);
          var msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
          var dslName = (0, gast_1.getProductionDslName)(firstProd);
          var defError = {
            message: msg,
            type: parser_1.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName,
            occurrence: firstProd.idx
          };
          var param = getExtraProductionArgument(firstProd);
          if (param) {
            defError.parameter = param;
          }
          return defError;
        });
        return errors;
      }
      function identifyProductionForDuplicates(prod) {
        return "".concat((0, gast_1.getProductionDslName)(prod), "_#_").concat(prod.idx, "_#_").concat(getExtraProductionArgument(prod));
      }
      exports2.identifyProductionForDuplicates = identifyProductionForDuplicates;
      function getExtraProductionArgument(prod) {
        if (prod instanceof gast_2.Terminal) {
          return prod.terminalType.name;
        } else if (prod instanceof gast_2.NonTerminal) {
          return prod.nonTerminalName;
        } else {
          return "";
        }
      }
      var OccurrenceValidationCollector = function(_super) {
        __extends(OccurrenceValidationCollector2, _super);
        function OccurrenceValidationCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.allProductions = [];
          return _this;
        }
        OccurrenceValidationCollector2.prototype.visitNonTerminal = function(subrule) {
          this.allProductions.push(subrule);
        };
        OccurrenceValidationCollector2.prototype.visitOption = function(option) {
          this.allProductions.push(option);
        };
        OccurrenceValidationCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.allProductions.push(manySep);
        };
        OccurrenceValidationCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.allProductions.push(atLeastOne);
        };
        OccurrenceValidationCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.allProductions.push(atLeastOneSep);
        };
        OccurrenceValidationCollector2.prototype.visitRepetition = function(many) {
          this.allProductions.push(many);
        };
        OccurrenceValidationCollector2.prototype.visitAlternation = function(or) {
          this.allProductions.push(or);
        };
        OccurrenceValidationCollector2.prototype.visitTerminal = function(terminal) {
          this.allProductions.push(terminal);
        };
        return OccurrenceValidationCollector2;
      }(gast_3.GAstVisitor);
      exports2.OccurrenceValidationCollector = OccurrenceValidationCollector;
      function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
        var errors = [];
        var occurrences = (0, reduce_1.default)(allRules, function(result, curRule) {
          if (curRule.name === rule.name) {
            return result + 1;
          }
          return result;
        }, 0);
        if (occurrences > 1) {
          var errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className
          });
          errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
            ruleName: rule.name
          });
        }
        return errors;
      }
      exports2.validateRuleDoesNotAlreadyExist = validateRuleDoesNotAlreadyExist;
      function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
        var errors = [];
        var errMsg;
        if (!(0, includes_1.default)(definedRulesNames, ruleName)) {
          errMsg = "Invalid rule override, rule: ->".concat(ruleName, "<- cannot be overridden in the grammar: ->").concat(className, "<-") + "as it is not defined in any of the super grammars ";
          errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
            ruleName
          });
        }
        return errors;
      }
      exports2.validateRuleIsOverridden = validateRuleIsOverridden;
      function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {
        if (path === void 0) {
          path = [];
        }
        var errors = [];
        var nextNonTerminals = getFirstNoneTerminal(currRule.definition);
        if ((0, isEmpty_1.default)(nextNonTerminals)) {
          return [];
        } else {
          var ruleName = topRule.name;
          var foundLeftRecursion = (0, includes_1.default)(nextNonTerminals, topRule);
          if (foundLeftRecursion) {
            errors.push({
              message: errMsgProvider.buildLeftRecursionError({
                topLevelRule: topRule,
                leftRecursionPath: path
              }),
              type: parser_1.ParserDefinitionErrorType.LEFT_RECURSION,
              ruleName
            });
          }
          var validNextSteps = (0, difference_1.default)(nextNonTerminals, path.concat([topRule]));
          var errorsFromNextSteps = (0, flatMap_1.default)(validNextSteps, function(currRefRule) {
            var newPath = (0, clone_1.default)(path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
          });
          return errors.concat(errorsFromNextSteps);
        }
      }
      exports2.validateNoLeftRecursion = validateNoLeftRecursion;
      function getFirstNoneTerminal(definition) {
        var result = [];
        if ((0, isEmpty_1.default)(definition)) {
          return result;
        }
        var firstProd = (0, first_1.default)(definition);
        if (firstProd instanceof gast_2.NonTerminal) {
          result.push(firstProd.referencedRule);
        } else if (firstProd instanceof gast_2.Alternative || firstProd instanceof gast_2.Option || firstProd instanceof gast_2.RepetitionMandatory || firstProd instanceof gast_2.RepetitionMandatoryWithSeparator || firstProd instanceof gast_2.RepetitionWithSeparator || firstProd instanceof gast_2.Repetition) {
          result = result.concat(getFirstNoneTerminal(firstProd.definition));
        } else if (firstProd instanceof gast_2.Alternation) {
          result = (0, flatten_1.default)((0, map_1.default)(firstProd.definition, function(currSubDef) {
            return getFirstNoneTerminal(currSubDef.definition);
          }));
        } else if (firstProd instanceof gast_2.Terminal) {
        } else {
          throw Error("non exhaustive match");
        }
        var isFirstOptional = (0, gast_1.isOptionalProd)(firstProd);
        var hasMore = definition.length > 1;
        if (isFirstOptional && hasMore) {
          var rest = (0, drop_1.default)(definition);
          return result.concat(getFirstNoneTerminal(rest));
        } else {
          return result;
        }
      }
      exports2.getFirstNoneTerminal = getFirstNoneTerminal;
      var OrCollector = function(_super) {
        __extends(OrCollector2, _super);
        function OrCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.alternations = [];
          return _this;
        }
        OrCollector2.prototype.visitAlternation = function(node) {
          this.alternations.push(node);
        };
        return OrCollector2;
      }(gast_3.GAstVisitor);
      function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
        var orCollector = new OrCollector();
        topLevelRule.accept(orCollector);
        var ors = orCollector.alternations;
        var errors = (0, flatMap_1.default)(ors, function(currOr) {
          var exceptLast = (0, dropRight_1.default)(currOr.definition);
          return (0, flatMap_1.default)(exceptLast, function(currAlternative, currAltIdx) {
            var possibleFirstInAlt = (0, interpreter_1.nextPossibleTokensAfter)([currAlternative], [], tokens_1.tokenStructuredMatcher, 1);
            if ((0, isEmpty_1.default)(possibleFirstInAlt)) {
              return [
                {
                  message: errMsgProvider.buildEmptyAlternationError({
                    topLevelRule,
                    alternation: currOr,
                    emptyChoiceIdx: currAltIdx
                  }),
                  type: parser_1.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
                  ruleName: topLevelRule.name,
                  occurrence: currOr.idx,
                  alternative: currAltIdx + 1
                }
              ];
            } else {
              return [];
            }
          });
        });
        return errors;
      }
      exports2.validateEmptyOrAlternative = validateEmptyOrAlternative;
      function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
        var orCollector = new OrCollector();
        topLevelRule.accept(orCollector);
        var ors = orCollector.alternations;
        ors = (0, reject_1.default)(ors, function(currOr) {
          return currOr.ignoreAmbiguities === true;
        });
        var errors = (0, flatMap_1.default)(ors, function(currOr) {
          var currOccurrence = currOr.idx;
          var actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
          var alternatives = (0, lookahead_1.getLookaheadPathsForOr)(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
          var altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
          var altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
          return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
        });
        return errors;
      }
      exports2.validateAmbiguousAlternationAlternatives = validateAmbiguousAlternationAlternatives;
      var RepetitionCollector = function(_super) {
        __extends(RepetitionCollector2, _super);
        function RepetitionCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.allProductions = [];
          return _this;
        }
        RepetitionCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.allProductions.push(manySep);
        };
        RepetitionCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.allProductions.push(atLeastOne);
        };
        RepetitionCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.allProductions.push(atLeastOneSep);
        };
        RepetitionCollector2.prototype.visitRepetition = function(many) {
          this.allProductions.push(many);
        };
        return RepetitionCollector2;
      }(gast_3.GAstVisitor);
      exports2.RepetitionCollector = RepetitionCollector;
      function validateTooManyAlts(topLevelRule, errMsgProvider) {
        var orCollector = new OrCollector();
        topLevelRule.accept(orCollector);
        var ors = orCollector.alternations;
        var errors = (0, flatMap_1.default)(ors, function(currOr) {
          if (currOr.definition.length > 255) {
            return [
              {
                message: errMsgProvider.buildTooManyAlternativesError({
                  topLevelRule,
                  alternation: currOr
                }),
                type: parser_1.ParserDefinitionErrorType.TOO_MANY_ALTS,
                ruleName: topLevelRule.name,
                occurrence: currOr.idx
              }
            ];
          } else {
            return [];
          }
        });
        return errors;
      }
      exports2.validateTooManyAlts = validateTooManyAlts;
      function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
        var errors = [];
        (0, forEach_1.default)(topLevelRules, function(currTopRule) {
          var collectorVisitor = new RepetitionCollector();
          currTopRule.accept(collectorVisitor);
          var allRuleProductions = collectorVisitor.allProductions;
          (0, forEach_1.default)(allRuleProductions, function(currProd) {
            var prodType = (0, lookahead_1.getProdType)(currProd);
            var actualMaxLookahead = currProd.maxLookahead || maxLookahead;
            var currOccurrence = currProd.idx;
            var paths = (0, lookahead_1.getLookaheadPathsForOptionalProd)(currOccurrence, currTopRule, prodType, actualMaxLookahead);
            var pathsInsideProduction = paths[0];
            if ((0, isEmpty_1.default)((0, flatten_1.default)(pathsInsideProduction))) {
              var errMsg = errMsgProvider.buildEmptyRepetitionError({
                topLevelRule: currTopRule,
                repetition: currProd
              });
              errors.push({
                message: errMsg,
                type: parser_1.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
                ruleName: currTopRule.name
              });
            }
          });
        });
        return errors;
      }
      exports2.validateSomeNonEmptyLookaheadPath = validateSomeNonEmptyLookaheadPath;
      function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
        var foundAmbiguousPaths = [];
        var identicalAmbiguities = (0, reduce_1.default)(alternatives, function(result, currAlt, currAltIdx) {
          if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
            return result;
          }
          (0, forEach_1.default)(currAlt, function(currPath) {
            var altsCurrPathAppearsIn = [currAltIdx];
            (0, forEach_1.default)(alternatives, function(currOtherAlt, currOtherAltIdx) {
              if (currAltIdx !== currOtherAltIdx && (0, lookahead_1.containsPath)(currOtherAlt, currPath) && alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
                altsCurrPathAppearsIn.push(currOtherAltIdx);
              }
            });
            if (altsCurrPathAppearsIn.length > 1 && !(0, lookahead_1.containsPath)(foundAmbiguousPaths, currPath)) {
              foundAmbiguousPaths.push(currPath);
              result.push({
                alts: altsCurrPathAppearsIn,
                path: currPath
              });
            }
          });
          return result;
        }, []);
        var currErrors = (0, map_1.default)(identicalAmbiguities, function(currAmbDescriptor) {
          var ambgIndices = (0, map_1.default)(currAmbDescriptor.alts, function(currAltIdx) {
            return currAltIdx + 1;
          });
          var currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path
          });
          return {
            message: currMessage,
            type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: currAmbDescriptor.alts
          };
        });
        return currErrors;
      }
      function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
        var pathsAndIndices = (0, reduce_1.default)(alternatives, function(result, currAlt, idx) {
          var currPathsAndIdx = (0, map_1.default)(currAlt, function(currPath) {
            return { idx, path: currPath };
          });
          return result.concat(currPathsAndIdx);
        }, []);
        var errors = (0, compact_1.default)((0, flatMap_1.default)(pathsAndIndices, function(currPathAndIdx) {
          var alternativeGast = alternation.definition[currPathAndIdx.idx];
          if (alternativeGast.ignoreAmbiguities === true) {
            return [];
          }
          var targetIdx = currPathAndIdx.idx;
          var targetPath = currPathAndIdx.path;
          var prefixAmbiguitiesPathsAndIndices = (0, filter_1.default)(pathsAndIndices, function(searchPathAndIdx) {
            return alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && (0, lookahead_1.isStrictPrefixOfPath)(searchPathAndIdx.path, targetPath);
          });
          var currPathPrefixErrors = (0, map_1.default)(prefixAmbiguitiesPathsAndIndices, function(currAmbPathAndIdx) {
            var ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
            var occurrence = alternation.idx === 0 ? "" : alternation.idx;
            var message = errMsgProvider.buildAlternationPrefixAmbiguityError({
              topLevelRule: rule,
              alternation,
              ambiguityIndices: ambgIndices,
              prefixPath: currAmbPathAndIdx.path
            });
            return {
              message,
              type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
              ruleName: rule.name,
              occurrence,
              alternatives: ambgIndices
            };
          });
          return currPathPrefixErrors;
        }));
        return errors;
      }
      exports2.checkPrefixAlternativesAmbiguities = checkPrefixAlternativesAmbiguities;
      function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
        var errors = [];
        var tokenNames = (0, map_1.default)(tokenTypes, function(currToken) {
          return currToken.name;
        });
        (0, forEach_1.default)(topLevels, function(currRule) {
          var currRuleName = currRule.name;
          if ((0, includes_1.default)(tokenNames, currRuleName)) {
            var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
              message: errMsg,
              type: parser_1.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
              ruleName: currRuleName
            });
          }
        });
        return errors;
      }
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
  var require_gast_resolver_public = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.validateGrammar = exports2.resolveGrammar = void 0;
      var forEach_1 = __importDefault(require_forEach());
      var defaults_1 = __importDefault(require_defaults());
      var resolver_1 = require_resolver();
      var checks_1 = require_checks();
      var errors_public_1 = require_errors_public();
      function resolveGrammar(options) {
        var actualOptions = (0, defaults_1.default)(options, {
          errMsgProvider: errors_public_1.defaultGrammarResolverErrorProvider
        });
        var topRulesTable = {};
        (0, forEach_1.default)(options.rules, function(rule) {
          topRulesTable[rule.name] = rule;
        });
        return (0, resolver_1.resolveGrammar)(topRulesTable, actualOptions.errMsgProvider);
      }
      exports2.resolveGrammar = resolveGrammar;
      function validateGrammar(options) {
        options = (0, defaults_1.default)(options, {
          errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider
        });
        return (0, checks_1.validateGrammar)(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
      }
      exports2.validateGrammar = validateGrammar;
    }
  });

  // node_modules/chevrotain/lib/src/parse/exceptions_public.js
  var require_exceptions_public = __commonJS({
    "node_modules/chevrotain/lib/src/parse/exceptions_public.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.EarlyExitException = exports2.NotAllInputParsedException = exports2.NoViableAltException = exports2.MismatchedTokenException = exports2.isRecognitionException = void 0;
      var includes_1 = __importDefault(require_includes());
      var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
      var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
      var EARLY_EXIT_EXCEPTION = "EarlyExitException";
      var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
      var RECOGNITION_EXCEPTION_NAMES = [
        MISMATCHED_TOKEN_EXCEPTION,
        NO_VIABLE_ALT_EXCEPTION,
        EARLY_EXIT_EXCEPTION,
        NOT_ALL_INPUT_PARSED_EXCEPTION
      ];
      Object.freeze(RECOGNITION_EXCEPTION_NAMES);
      function isRecognitionException2(error) {
        return (0, includes_1.default)(RECOGNITION_EXCEPTION_NAMES, error.name);
      }
      exports2.isRecognitionException = isRecognitionException2;
      var RecognitionException = function(_super) {
        __extends(RecognitionException2, _super);
        function RecognitionException2(message, token) {
          var _newTarget = this.constructor;
          var _this = _super.call(this, message) || this;
          _this.token = token;
          _this.resyncedTokens = [];
          Object.setPrototypeOf(_this, _newTarget.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
          }
          return _this;
        }
        return RecognitionException2;
      }(Error);
      var MismatchedTokenException2 = function(_super) {
        __extends(MismatchedTokenException3, _super);
        function MismatchedTokenException3(message, token, previousToken) {
          var _this = _super.call(this, message, token) || this;
          _this.previousToken = previousToken;
          _this.name = MISMATCHED_TOKEN_EXCEPTION;
          return _this;
        }
        return MismatchedTokenException3;
      }(RecognitionException);
      exports2.MismatchedTokenException = MismatchedTokenException2;
      var NoViableAltException2 = function(_super) {
        __extends(NoViableAltException3, _super);
        function NoViableAltException3(message, token, previousToken) {
          var _this = _super.call(this, message, token) || this;
          _this.previousToken = previousToken;
          _this.name = NO_VIABLE_ALT_EXCEPTION;
          return _this;
        }
        return NoViableAltException3;
      }(RecognitionException);
      exports2.NoViableAltException = NoViableAltException2;
      var NotAllInputParsedException2 = function(_super) {
        __extends(NotAllInputParsedException3, _super);
        function NotAllInputParsedException3(message, token) {
          var _this = _super.call(this, message, token) || this;
          _this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
          return _this;
        }
        return NotAllInputParsedException3;
      }(RecognitionException);
      exports2.NotAllInputParsedException = NotAllInputParsedException2;
      var EarlyExitException2 = function(_super) {
        __extends(EarlyExitException3, _super);
        function EarlyExitException3(message, token, previousToken) {
          var _this = _super.call(this, message, token) || this;
          _this.previousToken = previousToken;
          _this.name = EARLY_EXIT_EXCEPTION;
          return _this;
        }
        return EarlyExitException3;
      }(RecognitionException);
      exports2.EarlyExitException = EarlyExitException2;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
  var require_recoverable = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.attemptInRepetitionRecovery = exports2.Recoverable = exports2.InRuleRecoveryException = exports2.IN_RULE_RECOVERY_EXCEPTION = exports2.EOF_FOLLOW_KEY = void 0;
      var tokens_public_1 = require_tokens_public();
      var isEmpty_1 = __importDefault(require_isEmpty());
      var dropRight_1 = __importDefault(require_dropRight());
      var flatten_1 = __importDefault(require_flatten());
      var map_1 = __importDefault(require_map());
      var find_1 = __importDefault(require_find());
      var has_1 = __importDefault(require_has());
      var includes_1 = __importDefault(require_includes());
      var clone_1 = __importDefault(require_clone());
      var exceptions_public_1 = require_exceptions_public();
      var constants_1 = require_constants();
      var parser_1 = require_parser();
      exports2.EOF_FOLLOW_KEY = {};
      exports2.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
      var InRuleRecoveryException = function(_super) {
        __extends(InRuleRecoveryException2, _super);
        function InRuleRecoveryException2(message) {
          var _this = _super.call(this, message) || this;
          _this.name = exports2.IN_RULE_RECOVERY_EXCEPTION;
          return _this;
        }
        return InRuleRecoveryException2;
      }(Error);
      exports2.InRuleRecoveryException = InRuleRecoveryException;
      var Recoverable = function() {
        function Recoverable2() {
        }
        Recoverable2.prototype.initRecoverable = function(config) {
          this.firstAfterRepMap = {};
          this.resyncFollows = {};
          this.recoveryEnabled = (0, has_1.default)(config, "recoveryEnabled") ? config.recoveryEnabled : parser_1.DEFAULT_PARSER_CONFIG.recoveryEnabled;
          if (this.recoveryEnabled) {
            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
          }
        };
        Recoverable2.prototype.getTokenToInsert = function(tokType) {
          var tokToInsert = (0, tokens_public_1.createTokenInstance)(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
          tokToInsert.isInsertedInRecovery = true;
          return tokToInsert;
        };
        Recoverable2.prototype.canTokenTypeBeInsertedInRecovery = function(tokType) {
          return true;
        };
        Recoverable2.prototype.canTokenTypeBeDeletedInRecovery = function(tokType) {
          return true;
        };
        Recoverable2.prototype.tryInRepetitionRecovery = function(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
          var _this = this;
          var reSyncTokType = this.findReSyncTokenType();
          var savedLexerState = this.exportLexerState();
          var resyncedTokens = [];
          var passedResyncPoint = false;
          var nextTokenWithoutResync = this.LA(1);
          var currToken = this.LA(1);
          var generateErrorMessage = function() {
            var previousToken = _this.LA(0);
            var msg = _this.errorMessageProvider.buildMismatchTokenMessage({
              expected: expectedTokType,
              actual: nextTokenWithoutResync,
              previous: previousToken,
              ruleName: _this.getCurrRuleFullName()
            });
            var error = new exceptions_public_1.MismatchedTokenException(msg, nextTokenWithoutResync, _this.LA(0));
            error.resyncedTokens = (0, dropRight_1.default)(resyncedTokens);
            _this.SAVE_ERROR(error);
          };
          while (!passedResyncPoint) {
            if (this.tokenMatcher(currToken, expectedTokType)) {
              generateErrorMessage();
              return;
            } else if (lookAheadFunc.call(this)) {
              generateErrorMessage();
              grammarRule.apply(this, grammarRuleArgs);
              return;
            } else if (this.tokenMatcher(currToken, reSyncTokType)) {
              passedResyncPoint = true;
            } else {
              currToken = this.SKIP_TOKEN();
              this.addToResyncTokens(currToken, resyncedTokens);
            }
          }
          this.importLexerState(savedLexerState);
        };
        Recoverable2.prototype.shouldInRepetitionRecoveryBeTried = function(expectTokAfterLastMatch, nextTokIdx, notStuck) {
          if (notStuck === false) {
            return false;
          }
          if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
            return false;
          }
          if (this.isBackTracking()) {
            return false;
          }
          if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
            return false;
          }
          return true;
        };
        Recoverable2.prototype.getFollowsForInRuleRecovery = function(tokType, tokIdxInRule) {
          var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
          var follows = this.getNextPossibleTokenTypes(grammarPath);
          return follows;
        };
        Recoverable2.prototype.tryInRuleRecovery = function(expectedTokType, follows) {
          if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            var tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
          }
          if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            var nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
          }
          throw new InRuleRecoveryException("sad sad panda");
        };
        Recoverable2.prototype.canPerformInRuleRecovery = function(expectedToken, follows) {
          return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
        };
        Recoverable2.prototype.canRecoverWithSingleTokenInsertion = function(expectedTokType, follows) {
          var _this = this;
          if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
            return false;
          }
          if ((0, isEmpty_1.default)(follows)) {
            return false;
          }
          var mismatchedTok = this.LA(1);
          var isMisMatchedTokInFollows = (0, find_1.default)(follows, function(possibleFollowsTokType) {
            return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
          }) !== void 0;
          return isMisMatchedTokInFollows;
        };
        Recoverable2.prototype.canRecoverWithSingleTokenDeletion = function(expectedTokType) {
          if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
            return false;
          }
          var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
          return isNextTokenWhatIsExpected;
        };
        Recoverable2.prototype.isInCurrentRuleReSyncSet = function(tokenTypeIdx) {
          var followKey = this.getCurrFollowKey();
          var currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
          return (0, includes_1.default)(currentRuleReSyncSet, tokenTypeIdx);
        };
        Recoverable2.prototype.findReSyncTokenType = function() {
          var allPossibleReSyncTokTypes = this.flattenFollowSet();
          var nextToken = this.LA(1);
          var k = 2;
          while (true) {
            var foundMatch = (0, find_1.default)(allPossibleReSyncTokTypes, function(resyncTokType) {
              var canMatch = (0, tokens_public_1.tokenMatcher)(nextToken, resyncTokType);
              return canMatch;
            });
            if (foundMatch !== void 0) {
              return foundMatch;
            }
            nextToken = this.LA(k);
            k++;
          }
        };
        Recoverable2.prototype.getCurrFollowKey = function() {
          if (this.RULE_STACK.length === 1) {
            return exports2.EOF_FOLLOW_KEY;
          }
          var currRuleShortName = this.getLastExplicitRuleShortName();
          var currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
          var prevRuleShortName = this.getPreviousExplicitRuleShortName();
          return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
          };
        };
        Recoverable2.prototype.buildFullFollowKeyStack = function() {
          var _this = this;
          var explicitRuleStack = this.RULE_STACK;
          var explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
          return (0, map_1.default)(explicitRuleStack, function(ruleName, idx) {
            if (idx === 0) {
              return exports2.EOF_FOLLOW_KEY;
            }
            return {
              ruleName: _this.shortRuleNameToFullName(ruleName),
              idxInCallingRule: explicitOccurrenceStack[idx],
              inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
          });
        };
        Recoverable2.prototype.flattenFollowSet = function() {
          var _this = this;
          var followStack = (0, map_1.default)(this.buildFullFollowKeyStack(), function(currKey) {
            return _this.getFollowSetFromFollowKey(currKey);
          });
          return (0, flatten_1.default)(followStack);
        };
        Recoverable2.prototype.getFollowSetFromFollowKey = function(followKey) {
          if (followKey === exports2.EOF_FOLLOW_KEY) {
            return [tokens_public_1.EOF];
          }
          var followName = followKey.ruleName + followKey.idxInCallingRule + constants_1.IN + followKey.inRule;
          return this.resyncFollows[followName];
        };
        Recoverable2.prototype.addToResyncTokens = function(token, resyncTokens) {
          if (!this.tokenMatcher(token, tokens_public_1.EOF)) {
            resyncTokens.push(token);
          }
          return resyncTokens;
        };
        Recoverable2.prototype.reSyncTo = function(tokType) {
          var resyncedTokens = [];
          var nextTok = this.LA(1);
          while (this.tokenMatcher(nextTok, tokType) === false) {
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
          }
          return (0, dropRight_1.default)(resyncedTokens);
        };
        Recoverable2.prototype.attemptInRepetitionRecovery = function(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        };
        Recoverable2.prototype.getCurrentGrammarPath = function(tokType, tokIdxInRule) {
          var pathRuleStack = this.getHumanReadableRuleStack();
          var pathOccurrenceStack = (0, clone_1.default)(this.RULE_OCCURRENCE_STACK);
          var grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
          };
          return grammarPath;
        };
        Recoverable2.prototype.getHumanReadableRuleStack = function() {
          var _this = this;
          return (0, map_1.default)(this.RULE_STACK, function(currShortName) {
            return _this.shortRuleNameToFullName(currShortName);
          });
        };
        return Recoverable2;
      }();
      exports2.Recoverable = Recoverable;
      function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
        var firstAfterRepInfo = this.firstAfterRepMap[key];
        if (firstAfterRepInfo === void 0) {
          var currRuleName = this.getCurrRuleFullName();
          var ruleGrammar = this.getGAstProductions()[currRuleName];
          var walker = new nextToksWalker(ruleGrammar, prodOccurrence);
          firstAfterRepInfo = walker.startWalking();
          this.firstAfterRepMap[key] = firstAfterRepInfo;
        }
        var expectTokAfterLastMatch = firstAfterRepInfo.token;
        var nextTokIdx = firstAfterRepInfo.occurrence;
        var isEndOfRule = firstAfterRepInfo.isEndOfRule;
        if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0) {
          expectTokAfterLastMatch = tokens_public_1.EOF;
          nextTokIdx = 1;
        }
        if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
          return;
        }
        if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
          this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
        }
      }
      exports2.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/keys.js
  var require_keys2 = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/keys.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getKeyForAutomaticLookahead = exports2.AT_LEAST_ONE_SEP_IDX = exports2.MANY_SEP_IDX = exports2.AT_LEAST_ONE_IDX = exports2.MANY_IDX = exports2.OPTION_IDX = exports2.OR_IDX = exports2.BITS_FOR_ALT_IDX = exports2.BITS_FOR_RULE_IDX = exports2.BITS_FOR_OCCURRENCE_IDX = exports2.BITS_FOR_METHOD_TYPE = void 0;
      exports2.BITS_FOR_METHOD_TYPE = 4;
      exports2.BITS_FOR_OCCURRENCE_IDX = 8;
      exports2.BITS_FOR_RULE_IDX = 12;
      exports2.BITS_FOR_ALT_IDX = 8;
      exports2.OR_IDX = 1 << exports2.BITS_FOR_OCCURRENCE_IDX;
      exports2.OPTION_IDX = 2 << exports2.BITS_FOR_OCCURRENCE_IDX;
      exports2.MANY_IDX = 3 << exports2.BITS_FOR_OCCURRENCE_IDX;
      exports2.AT_LEAST_ONE_IDX = 4 << exports2.BITS_FOR_OCCURRENCE_IDX;
      exports2.MANY_SEP_IDX = 5 << exports2.BITS_FOR_OCCURRENCE_IDX;
      exports2.AT_LEAST_ONE_SEP_IDX = 6 << exports2.BITS_FOR_OCCURRENCE_IDX;
      function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
        return occurrence | dslMethodIdx | ruleIdx;
      }
      exports2.getKeyForAutomaticLookahead = getKeyForAutomaticLookahead;
      var BITS_START_FOR_ALT_IDX = 32 - exports2.BITS_FOR_ALT_IDX;
    }
  });

  // node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js
  var require_llk_lookahead = __commonJS({
    "node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js"(exports2) {
      "use strict";
      var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.LLkLookaheadStrategy = void 0;
      var flatMap_1 = __importDefault(require_flatMap());
      var isEmpty_1 = __importDefault(require_isEmpty());
      var errors_public_1 = require_errors_public();
      var parser_1 = require_parser();
      var checks_1 = require_checks();
      var lookahead_1 = require_lookahead();
      var LLkLookaheadStrategy2 = function() {
        function LLkLookaheadStrategy3(options) {
          var _a;
          this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;
        }
        LLkLookaheadStrategy3.prototype.validate = function(options) {
          var leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
          if ((0, isEmpty_1.default)(leftRecursionErrors)) {
            var emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
            var ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
            var emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
            var allErrors = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], leftRecursionErrors, true), emptyAltErrors, true), ambiguousAltsErrors, true), emptyRepetitionErrors, true);
            return allErrors;
          }
          return leftRecursionErrors;
        };
        LLkLookaheadStrategy3.prototype.validateNoLeftRecursion = function(rules) {
          return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateNoLeftRecursion)(currTopRule, currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
          });
        };
        LLkLookaheadStrategy3.prototype.validateEmptyOrAlternatives = function(rules) {
          return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateEmptyOrAlternative)(currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
          });
        };
        LLkLookaheadStrategy3.prototype.validateAmbiguousAlternationAlternatives = function(rules, maxLookahead) {
          return (0, flatMap_1.default)(rules, function(currTopRule) {
            return (0, checks_1.validateAmbiguousAlternationAlternatives)(currTopRule, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
          });
        };
        LLkLookaheadStrategy3.prototype.validateSomeNonEmptyLookaheadPath = function(rules, maxLookahead) {
          return (0, checks_1.validateSomeNonEmptyLookaheadPath)(rules, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
        };
        LLkLookaheadStrategy3.prototype.buildLookaheadForAlternation = function(options) {
          return (0, lookahead_1.buildLookaheadFuncForOr)(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, lookahead_1.buildAlternativesLookAheadFunc);
        };
        LLkLookaheadStrategy3.prototype.buildLookaheadForOptional = function(options) {
          return (0, lookahead_1.buildLookaheadFuncForOptionalProd)(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, (0, lookahead_1.getProdType)(options.prodType), lookahead_1.buildSingleAlternativeLookaheadFunction);
        };
        return LLkLookaheadStrategy3;
      }();
      exports2.LLkLookaheadStrategy = LLkLookaheadStrategy2;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
  var require_looksahead = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.collectMethods = exports2.LooksAhead = void 0;
      var forEach_1 = __importDefault(require_forEach());
      var has_1 = __importDefault(require_has());
      var parser_1 = require_parser();
      var keys_1 = require_keys2();
      var gast_1 = require_api2();
      var gast_2 = require_api2();
      var llk_lookahead_1 = require_llk_lookahead();
      var LooksAhead = function() {
        function LooksAhead2() {
        }
        LooksAhead2.prototype.initLooksAhead = function(config) {
          this.dynamicTokensEnabled = (0, has_1.default)(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : parser_1.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
          this.maxLookahead = (0, has_1.default)(config, "maxLookahead") ? config.maxLookahead : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;
          this.lookaheadStrategy = (0, has_1.default)(config, "lookaheadStrategy") ? config.lookaheadStrategy : new llk_lookahead_1.LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
          this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
        };
        LooksAhead2.prototype.preComputeLookaheadFunctions = function(rules) {
          var _this = this;
          (0, forEach_1.default)(rules, function(currRule) {
            _this.TRACE_INIT("".concat(currRule.name, " Rule Lookahead"), function() {
              var _a = collectMethods(currRule), alternation = _a.alternation, repetition = _a.repetition, option = _a.option, repetitionMandatory = _a.repetitionMandatory, repetitionMandatoryWithSeparator = _a.repetitionMandatoryWithSeparator, repetitionWithSeparator = _a.repetitionWithSeparator;
              (0, forEach_1.default)(alternation, function(currProd) {
                var prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                _this.TRACE_INIT("".concat((0, gast_2.getProductionDslName)(currProd)).concat(prodIdx), function() {
                  var laFunc = _this.lookaheadStrategy.buildLookaheadForAlternation({
                    prodOccurrence: currProd.idx,
                    rule: currRule,
                    maxLookahead: currProd.maxLookahead || _this.maxLookahead,
                    hasPredicates: currProd.hasPredicates,
                    dynamicTokensEnabled: _this.dynamicTokensEnabled
                  });
                  var key = (0, keys_1.getKeyForAutomaticLookahead)(_this.fullRuleNameToShort[currRule.name], keys_1.OR_IDX, currProd.idx);
                  _this.setLaFuncCache(key, laFunc);
                });
              });
              (0, forEach_1.default)(repetition, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_IDX, "Repetition", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
              });
              (0, forEach_1.default)(option, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.OPTION_IDX, "Option", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
              });
              (0, forEach_1.default)(repetitionMandatory, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
              });
              (0, forEach_1.default)(repetitionMandatoryWithSeparator, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
              });
              (0, forEach_1.default)(repetitionWithSeparator, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, (0, gast_2.getProductionDslName)(currProd));
              });
            });
          });
        };
        LooksAhead2.prototype.computeLookaheadFunc = function(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
          var _this = this;
          this.TRACE_INIT("".concat(dslMethodName).concat(prodOccurrence === 0 ? "" : prodOccurrence), function() {
            var laFunc = _this.lookaheadStrategy.buildLookaheadForOptional({
              prodOccurrence,
              rule,
              maxLookahead: prodMaxLookahead || _this.maxLookahead,
              dynamicTokensEnabled: _this.dynamicTokensEnabled,
              prodType
            });
            var key = (0, keys_1.getKeyForAutomaticLookahead)(_this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            _this.setLaFuncCache(key, laFunc);
          });
        };
        LooksAhead2.prototype.getKeyForAutomaticLookahead = function(dslMethodIdx, occurrence) {
          var currRuleShortName = this.getLastExplicitRuleShortName();
          return (0, keys_1.getKeyForAutomaticLookahead)(currRuleShortName, dslMethodIdx, occurrence);
        };
        LooksAhead2.prototype.getLaFuncFromCache = function(key) {
          return this.lookAheadFuncsCache.get(key);
        };
        LooksAhead2.prototype.setLaFuncCache = function(key, value) {
          this.lookAheadFuncsCache.set(key, value);
        };
        return LooksAhead2;
      }();
      exports2.LooksAhead = LooksAhead;
      var DslMethodsCollectorVisitor = function(_super) {
        __extends(DslMethodsCollectorVisitor2, _super);
        function DslMethodsCollectorVisitor2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          };
          return _this;
        }
        DslMethodsCollectorVisitor2.prototype.reset = function() {
          this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          };
        };
        DslMethodsCollectorVisitor2.prototype.visitOption = function(option) {
          this.dslMethods.option.push(option);
        };
        DslMethodsCollectorVisitor2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.dslMethods.repetitionWithSeparator.push(manySep);
        };
        DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.dslMethods.repetitionMandatory.push(atLeastOne);
        };
        DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
        };
        DslMethodsCollectorVisitor2.prototype.visitRepetition = function(many) {
          this.dslMethods.repetition.push(many);
        };
        DslMethodsCollectorVisitor2.prototype.visitAlternation = function(or) {
          this.dslMethods.alternation.push(or);
        };
        return DslMethodsCollectorVisitor2;
      }(gast_1.GAstVisitor);
      var collectorVisitor = new DslMethodsCollectorVisitor();
      function collectMethods(rule) {
        collectorVisitor.reset();
        rule.accept(collectorVisitor);
        var dslMethods = collectorVisitor.dslMethods;
        collectorVisitor.reset();
        return dslMethods;
      }
      exports2.collectMethods = collectMethods;
    }
  });

  // node_modules/chevrotain/lib/src/parse/cst/cst.js
  var require_cst = __commonJS({
    "node_modules/chevrotain/lib/src/parse/cst/cst.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.addNoneTerminalToCst = exports2.addTerminalToCst = exports2.setNodeLocationFull = exports2.setNodeLocationOnlyOffset = void 0;
      function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
        if (isNaN(currNodeLocation.startOffset) === true) {
          currNodeLocation.startOffset = newLocationInfo.startOffset;
          currNodeLocation.endOffset = newLocationInfo.endOffset;
        } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
          currNodeLocation.endOffset = newLocationInfo.endOffset;
        }
      }
      exports2.setNodeLocationOnlyOffset = setNodeLocationOnlyOffset;
      function setNodeLocationFull(currNodeLocation, newLocationInfo) {
        if (isNaN(currNodeLocation.startOffset) === true) {
          currNodeLocation.startOffset = newLocationInfo.startOffset;
          currNodeLocation.startColumn = newLocationInfo.startColumn;
          currNodeLocation.startLine = newLocationInfo.startLine;
          currNodeLocation.endOffset = newLocationInfo.endOffset;
          currNodeLocation.endColumn = newLocationInfo.endColumn;
          currNodeLocation.endLine = newLocationInfo.endLine;
        } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
          currNodeLocation.endOffset = newLocationInfo.endOffset;
          currNodeLocation.endColumn = newLocationInfo.endColumn;
          currNodeLocation.endLine = newLocationInfo.endLine;
        }
      }
      exports2.setNodeLocationFull = setNodeLocationFull;
      function addTerminalToCst(node, token, tokenTypeName) {
        if (node.children[tokenTypeName] === void 0) {
          node.children[tokenTypeName] = [token];
        } else {
          node.children[tokenTypeName].push(token);
        }
      }
      exports2.addTerminalToCst = addTerminalToCst;
      function addNoneTerminalToCst(node, ruleName, ruleResult) {
        if (node.children[ruleName] === void 0) {
          node.children[ruleName] = [ruleResult];
        } else {
          node.children[ruleName].push(ruleResult);
        }
      }
      exports2.addNoneTerminalToCst = addNoneTerminalToCst;
    }
  });

  // node_modules/chevrotain/lib/src/lang/lang_extensions.js
  var require_lang_extensions = __commonJS({
    "node_modules/chevrotain/lib/src/lang/lang_extensions.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.defineNameProp = void 0;
      var NAME = "name";
      function defineNameProp(obj, nameValue) {
        Object.defineProperty(obj, NAME, {
          enumerable: false,
          configurable: true,
          writable: false,
          value: nameValue
        });
      }
      exports2.defineNameProp = defineNameProp;
    }
  });

  // node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
  var require_cst_visitor = __commonJS({
    "node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.validateMissingCstMethods = exports2.validateVisitor = exports2.CstVisitorDefinitionError = exports2.createBaseVisitorConstructorWithDefaults = exports2.createBaseSemanticVisitorConstructor = exports2.defaultVisit = void 0;
      var isEmpty_1 = __importDefault(require_isEmpty());
      var compact_1 = __importDefault(require_compact());
      var isArray_1 = __importDefault(require_isArray());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var filter_1 = __importDefault(require_filter());
      var keys_1 = __importDefault(require_keys());
      var isFunction_1 = __importDefault(require_isFunction());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var lang_extensions_1 = require_lang_extensions();
      function defaultVisit(ctx, param) {
        var childrenNames = (0, keys_1.default)(ctx);
        var childrenNamesLength = childrenNames.length;
        for (var i = 0; i < childrenNamesLength; i++) {
          var currChildName = childrenNames[i];
          var currChildArray = ctx[currChildName];
          var currChildArrayLength = currChildArray.length;
          for (var j = 0; j < currChildArrayLength; j++) {
            var currChild = currChildArray[j];
            if (currChild.tokenTypeIdx === void 0) {
              this[currChild.name](currChild.children, param);
            }
          }
        }
      }
      exports2.defaultVisit = defaultVisit;
      function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
        var derivedConstructor = function() {
        };
        (0, lang_extensions_1.defineNameProp)(derivedConstructor, grammarName + "BaseSemantics");
        var semanticProto = {
          visit: function(cstNode, param) {
            if ((0, isArray_1.default)(cstNode)) {
              cstNode = cstNode[0];
            }
            if ((0, isUndefined_1.default)(cstNode)) {
              return void 0;
            }
            return this[cstNode.name](cstNode.children, param);
          },
          validateVisitor: function() {
            var semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!(0, isEmpty_1.default)(semanticDefinitionErrors)) {
              var errorMessages = (0, map_1.default)(semanticDefinitionErrors, function(currDefError) {
                return currDefError.msg;
              });
              throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name, ">:\n	") + "".concat(errorMessages.join("\n\n").replace(/\n/g, "\n	")));
            }
          }
        };
        derivedConstructor.prototype = semanticProto;
        derivedConstructor.prototype.constructor = derivedConstructor;
        derivedConstructor._RULE_NAMES = ruleNames;
        return derivedConstructor;
      }
      exports2.createBaseSemanticVisitorConstructor = createBaseSemanticVisitorConstructor;
      function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
        var derivedConstructor = function() {
        };
        (0, lang_extensions_1.defineNameProp)(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
        var withDefaultsProto = Object.create(baseConstructor.prototype);
        (0, forEach_1.default)(ruleNames, function(ruleName) {
          withDefaultsProto[ruleName] = defaultVisit;
        });
        derivedConstructor.prototype = withDefaultsProto;
        derivedConstructor.prototype.constructor = derivedConstructor;
        return derivedConstructor;
      }
      exports2.createBaseVisitorConstructorWithDefaults = createBaseVisitorConstructorWithDefaults;
      var CstVisitorDefinitionError;
      (function(CstVisitorDefinitionError2) {
        CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
        CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
      })(CstVisitorDefinitionError = exports2.CstVisitorDefinitionError || (exports2.CstVisitorDefinitionError = {}));
      function validateVisitor(visitorInstance, ruleNames) {
        var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
        return missingErrors;
      }
      exports2.validateVisitor = validateVisitor;
      function validateMissingCstMethods(visitorInstance, ruleNames) {
        var missingRuleNames = (0, filter_1.default)(ruleNames, function(currRuleName) {
          return (0, isFunction_1.default)(visitorInstance[currRuleName]) === false;
        });
        var errors = (0, map_1.default)(missingRuleNames, function(currRuleName) {
          return {
            msg: "Missing visitor method: <".concat(currRuleName, "> on ").concat(visitorInstance.constructor.name, " CST Visitor."),
            type: CstVisitorDefinitionError.MISSING_METHOD,
            methodName: currRuleName
          };
        });
        return (0, compact_1.default)(errors);
      }
      exports2.validateMissingCstMethods = validateMissingCstMethods;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
  var require_tree_builder = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.TreeBuilder = void 0;
      var cst_1 = require_cst();
      var noop_1 = __importDefault(require_noop());
      var has_1 = __importDefault(require_has());
      var keys_1 = __importDefault(require_keys());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var cst_visitor_1 = require_cst_visitor();
      var parser_1 = require_parser();
      var TreeBuilder = function() {
        function TreeBuilder2() {
        }
        TreeBuilder2.prototype.initTreeBuilder = function(config) {
          this.CST_STACK = [];
          this.outputCst = config.outputCst;
          this.nodeLocationTracking = (0, has_1.default)(config, "nodeLocationTracking") ? config.nodeLocationTracking : parser_1.DEFAULT_PARSER_CONFIG.nodeLocationTracking;
          if (!this.outputCst) {
            this.cstInvocationStateUpdate = noop_1.default;
            this.cstFinallyStateUpdate = noop_1.default;
            this.cstPostTerminal = noop_1.default;
            this.cstPostNonTerminal = noop_1.default;
            this.cstPostRule = noop_1.default;
          } else {
            if (/full/i.test(this.nodeLocationTracking)) {
              if (this.recoveryEnabled) {
                this.setNodeLocationFromToken = cst_1.setNodeLocationFull;
                this.setNodeLocationFromNode = cst_1.setNodeLocationFull;
                this.cstPostRule = noop_1.default;
                this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
              } else {
                this.setNodeLocationFromToken = noop_1.default;
                this.setNodeLocationFromNode = noop_1.default;
                this.cstPostRule = this.cstPostRuleFull;
                this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
              }
            } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
              if (this.recoveryEnabled) {
                this.setNodeLocationFromToken = cst_1.setNodeLocationOnlyOffset;
                this.setNodeLocationFromNode = cst_1.setNodeLocationOnlyOffset;
                this.cstPostRule = noop_1.default;
                this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
              } else {
                this.setNodeLocationFromToken = noop_1.default;
                this.setNodeLocationFromNode = noop_1.default;
                this.cstPostRule = this.cstPostRuleOnlyOffset;
                this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
              }
            } else if (/none/i.test(this.nodeLocationTracking)) {
              this.setNodeLocationFromToken = noop_1.default;
              this.setNodeLocationFromNode = noop_1.default;
              this.cstPostRule = noop_1.default;
              this.setInitialNodeLocation = noop_1.default;
            } else {
              throw Error('Invalid <nodeLocationTracking> config option: "'.concat(config.nodeLocationTracking, '"'));
            }
          }
        };
        TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(cstNode) {
          cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
          };
        };
        TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRegular = function(cstNode) {
          cstNode.location = {
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
          };
        };
        TreeBuilder2.prototype.setInitialNodeLocationFullRecovery = function(cstNode) {
          cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          };
        };
        TreeBuilder2.prototype.setInitialNodeLocationFullRegular = function(cstNode) {
          var nextToken = this.LA(1);
          cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          };
        };
        TreeBuilder2.prototype.cstInvocationStateUpdate = function(fullRuleName) {
          var cstNode = {
            name: fullRuleName,
            children: /* @__PURE__ */ Object.create(null)
          };
          this.setInitialNodeLocation(cstNode);
          this.CST_STACK.push(cstNode);
        };
        TreeBuilder2.prototype.cstFinallyStateUpdate = function() {
          this.CST_STACK.pop();
        };
        TreeBuilder2.prototype.cstPostRuleFull = function(ruleCstNode) {
          var prevToken = this.LA(0);
          var loc = ruleCstNode.location;
          if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
          } else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
          }
        };
        TreeBuilder2.prototype.cstPostRuleOnlyOffset = function(ruleCstNode) {
          var prevToken = this.LA(0);
          var loc = ruleCstNode.location;
          if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
          } else {
            loc.startOffset = NaN;
          }
        };
        TreeBuilder2.prototype.cstPostTerminal = function(key, consumedToken) {
          var rootCst = this.CST_STACK[this.CST_STACK.length - 1];
          (0, cst_1.addTerminalToCst)(rootCst, consumedToken, key);
          this.setNodeLocationFromToken(rootCst.location, consumedToken);
        };
        TreeBuilder2.prototype.cstPostNonTerminal = function(ruleCstResult, ruleName) {
          var preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
          (0, cst_1.addNoneTerminalToCst)(preCstNode, ruleName, ruleCstResult);
          this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
        };
        TreeBuilder2.prototype.getBaseCstVisitorConstructor = function() {
          if ((0, isUndefined_1.default)(this.baseCstVisitorConstructor)) {
            var newBaseCstVisitorConstructor = (0, cst_visitor_1.createBaseSemanticVisitorConstructor)(this.className, (0, keys_1.default)(this.gastProductionsCache));
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
          }
          return this.baseCstVisitorConstructor;
        };
        TreeBuilder2.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
          if ((0, isUndefined_1.default)(this.baseCstVisitorWithDefaultsConstructor)) {
            var newConstructor = (0, cst_visitor_1.createBaseVisitorConstructorWithDefaults)(this.className, (0, keys_1.default)(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
          }
          return this.baseCstVisitorWithDefaultsConstructor;
        };
        TreeBuilder2.prototype.getLastExplicitRuleShortName = function() {
          var ruleStack = this.RULE_STACK;
          return ruleStack[ruleStack.length - 1];
        };
        TreeBuilder2.prototype.getPreviousExplicitRuleShortName = function() {
          var ruleStack = this.RULE_STACK;
          return ruleStack[ruleStack.length - 2];
        };
        TreeBuilder2.prototype.getLastExplicitRuleOccurrenceIndex = function() {
          var occurrenceStack = this.RULE_OCCURRENCE_STACK;
          return occurrenceStack[occurrenceStack.length - 1];
        };
        return TreeBuilder2;
      }();
      exports2.TreeBuilder = TreeBuilder;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
  var require_lexer_adapter = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.LexerAdapter = void 0;
      var parser_1 = require_parser();
      var LexerAdapter = function() {
        function LexerAdapter2() {
        }
        LexerAdapter2.prototype.initLexerAdapter = function() {
          this.tokVector = [];
          this.tokVectorLength = 0;
          this.currIdx = -1;
        };
        Object.defineProperty(LexerAdapter2.prototype, "input", {
          get: function() {
            return this.tokVector;
          },
          set: function(newInput) {
            if (this.selfAnalysisDone !== true) {
              throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
            }
            this.reset();
            this.tokVector = newInput;
            this.tokVectorLength = newInput.length;
          },
          enumerable: false,
          configurable: true
        });
        LexerAdapter2.prototype.SKIP_TOKEN = function() {
          if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
          } else {
            return parser_1.END_OF_FILE;
          }
        };
        LexerAdapter2.prototype.LA = function(howMuch) {
          var soughtIdx = this.currIdx + howMuch;
          if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
            return parser_1.END_OF_FILE;
          } else {
            return this.tokVector[soughtIdx];
          }
        };
        LexerAdapter2.prototype.consumeToken = function() {
          this.currIdx++;
        };
        LexerAdapter2.prototype.exportLexerState = function() {
          return this.currIdx;
        };
        LexerAdapter2.prototype.importLexerState = function(newState) {
          this.currIdx = newState;
        };
        LexerAdapter2.prototype.resetLexerState = function() {
          this.currIdx = -1;
        };
        LexerAdapter2.prototype.moveToTerminatedState = function() {
          this.currIdx = this.tokVector.length - 1;
        };
        LexerAdapter2.prototype.getLexerPosition = function() {
          return this.exportLexerState();
        };
        return LexerAdapter2;
      }();
      exports2.LexerAdapter = LexerAdapter;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
  var require_recognizer_api = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RecognizerApi = void 0;
      var values_1 = __importDefault(require_values());
      var includes_1 = __importDefault(require_includes());
      var exceptions_public_1 = require_exceptions_public();
      var parser_1 = require_parser();
      var errors_public_1 = require_errors_public();
      var checks_1 = require_checks();
      var gast_1 = require_api2();
      var RecognizerApi = function() {
        function RecognizerApi2() {
        }
        RecognizerApi2.prototype.ACTION = function(impl) {
          return impl.call(this);
        };
        RecognizerApi2.prototype.consume = function(idx, tokType, options) {
          return this.consumeInternal(tokType, idx, options);
        };
        RecognizerApi2.prototype.subrule = function(idx, ruleToCall, options) {
          return this.subruleInternal(ruleToCall, idx, options);
        };
        RecognizerApi2.prototype.option = function(idx, actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, idx);
        };
        RecognizerApi2.prototype.or = function(idx, altsOrOpts) {
          return this.orInternal(altsOrOpts, idx);
        };
        RecognizerApi2.prototype.many = function(idx, actionORMethodDef) {
          return this.manyInternal(idx, actionORMethodDef);
        };
        RecognizerApi2.prototype.atLeastOne = function(idx, actionORMethodDef) {
          return this.atLeastOneInternal(idx, actionORMethodDef);
        };
        RecognizerApi2.prototype.CONSUME = function(tokType, options) {
          return this.consumeInternal(tokType, 0, options);
        };
        RecognizerApi2.prototype.CONSUME1 = function(tokType, options) {
          return this.consumeInternal(tokType, 1, options);
        };
        RecognizerApi2.prototype.CONSUME2 = function(tokType, options) {
          return this.consumeInternal(tokType, 2, options);
        };
        RecognizerApi2.prototype.CONSUME3 = function(tokType, options) {
          return this.consumeInternal(tokType, 3, options);
        };
        RecognizerApi2.prototype.CONSUME4 = function(tokType, options) {
          return this.consumeInternal(tokType, 4, options);
        };
        RecognizerApi2.prototype.CONSUME5 = function(tokType, options) {
          return this.consumeInternal(tokType, 5, options);
        };
        RecognizerApi2.prototype.CONSUME6 = function(tokType, options) {
          return this.consumeInternal(tokType, 6, options);
        };
        RecognizerApi2.prototype.CONSUME7 = function(tokType, options) {
          return this.consumeInternal(tokType, 7, options);
        };
        RecognizerApi2.prototype.CONSUME8 = function(tokType, options) {
          return this.consumeInternal(tokType, 8, options);
        };
        RecognizerApi2.prototype.CONSUME9 = function(tokType, options) {
          return this.consumeInternal(tokType, 9, options);
        };
        RecognizerApi2.prototype.SUBRULE = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 0, options);
        };
        RecognizerApi2.prototype.SUBRULE1 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 1, options);
        };
        RecognizerApi2.prototype.SUBRULE2 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 2, options);
        };
        RecognizerApi2.prototype.SUBRULE3 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 3, options);
        };
        RecognizerApi2.prototype.SUBRULE4 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 4, options);
        };
        RecognizerApi2.prototype.SUBRULE5 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 5, options);
        };
        RecognizerApi2.prototype.SUBRULE6 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 6, options);
        };
        RecognizerApi2.prototype.SUBRULE7 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 7, options);
        };
        RecognizerApi2.prototype.SUBRULE8 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 8, options);
        };
        RecognizerApi2.prototype.SUBRULE9 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 9, options);
        };
        RecognizerApi2.prototype.OPTION = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 0);
        };
        RecognizerApi2.prototype.OPTION1 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 1);
        };
        RecognizerApi2.prototype.OPTION2 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 2);
        };
        RecognizerApi2.prototype.OPTION3 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 3);
        };
        RecognizerApi2.prototype.OPTION4 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 4);
        };
        RecognizerApi2.prototype.OPTION5 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 5);
        };
        RecognizerApi2.prototype.OPTION6 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 6);
        };
        RecognizerApi2.prototype.OPTION7 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 7);
        };
        RecognizerApi2.prototype.OPTION8 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 8);
        };
        RecognizerApi2.prototype.OPTION9 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 9);
        };
        RecognizerApi2.prototype.OR = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 0);
        };
        RecognizerApi2.prototype.OR1 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 1);
        };
        RecognizerApi2.prototype.OR2 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 2);
        };
        RecognizerApi2.prototype.OR3 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 3);
        };
        RecognizerApi2.prototype.OR4 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 4);
        };
        RecognizerApi2.prototype.OR5 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 5);
        };
        RecognizerApi2.prototype.OR6 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 6);
        };
        RecognizerApi2.prototype.OR7 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 7);
        };
        RecognizerApi2.prototype.OR8 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 8);
        };
        RecognizerApi2.prototype.OR9 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 9);
        };
        RecognizerApi2.prototype.MANY = function(actionORMethodDef) {
          this.manyInternal(0, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY1 = function(actionORMethodDef) {
          this.manyInternal(1, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY2 = function(actionORMethodDef) {
          this.manyInternal(2, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY3 = function(actionORMethodDef) {
          this.manyInternal(3, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY4 = function(actionORMethodDef) {
          this.manyInternal(4, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY5 = function(actionORMethodDef) {
          this.manyInternal(5, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY6 = function(actionORMethodDef) {
          this.manyInternal(6, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY7 = function(actionORMethodDef) {
          this.manyInternal(7, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY8 = function(actionORMethodDef) {
          this.manyInternal(8, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY9 = function(actionORMethodDef) {
          this.manyInternal(9, actionORMethodDef);
        };
        RecognizerApi2.prototype.MANY_SEP = function(options) {
          this.manySepFirstInternal(0, options);
        };
        RecognizerApi2.prototype.MANY_SEP1 = function(options) {
          this.manySepFirstInternal(1, options);
        };
        RecognizerApi2.prototype.MANY_SEP2 = function(options) {
          this.manySepFirstInternal(2, options);
        };
        RecognizerApi2.prototype.MANY_SEP3 = function(options) {
          this.manySepFirstInternal(3, options);
        };
        RecognizerApi2.prototype.MANY_SEP4 = function(options) {
          this.manySepFirstInternal(4, options);
        };
        RecognizerApi2.prototype.MANY_SEP5 = function(options) {
          this.manySepFirstInternal(5, options);
        };
        RecognizerApi2.prototype.MANY_SEP6 = function(options) {
          this.manySepFirstInternal(6, options);
        };
        RecognizerApi2.prototype.MANY_SEP7 = function(options) {
          this.manySepFirstInternal(7, options);
        };
        RecognizerApi2.prototype.MANY_SEP8 = function(options) {
          this.manySepFirstInternal(8, options);
        };
        RecognizerApi2.prototype.MANY_SEP9 = function(options) {
          this.manySepFirstInternal(9, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE = function(actionORMethodDef) {
          this.atLeastOneInternal(0, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE1 = function(actionORMethodDef) {
          return this.atLeastOneInternal(1, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE2 = function(actionORMethodDef) {
          this.atLeastOneInternal(2, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE3 = function(actionORMethodDef) {
          this.atLeastOneInternal(3, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE4 = function(actionORMethodDef) {
          this.atLeastOneInternal(4, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE5 = function(actionORMethodDef) {
          this.atLeastOneInternal(5, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE6 = function(actionORMethodDef) {
          this.atLeastOneInternal(6, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE7 = function(actionORMethodDef) {
          this.atLeastOneInternal(7, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE8 = function(actionORMethodDef) {
          this.atLeastOneInternal(8, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE9 = function(actionORMethodDef) {
          this.atLeastOneInternal(9, actionORMethodDef);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP = function(options) {
          this.atLeastOneSepFirstInternal(0, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP1 = function(options) {
          this.atLeastOneSepFirstInternal(1, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP2 = function(options) {
          this.atLeastOneSepFirstInternal(2, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP3 = function(options) {
          this.atLeastOneSepFirstInternal(3, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP4 = function(options) {
          this.atLeastOneSepFirstInternal(4, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP5 = function(options) {
          this.atLeastOneSepFirstInternal(5, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP6 = function(options) {
          this.atLeastOneSepFirstInternal(6, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP7 = function(options) {
          this.atLeastOneSepFirstInternal(7, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP8 = function(options) {
          this.atLeastOneSepFirstInternal(8, options);
        };
        RecognizerApi2.prototype.AT_LEAST_ONE_SEP9 = function(options) {
          this.atLeastOneSepFirstInternal(9, options);
        };
        RecognizerApi2.prototype.RULE = function(name, implementation, config) {
          if (config === void 0) {
            config = parser_1.DEFAULT_RULE_CONFIG;
          }
          if ((0, includes_1.default)(this.definedRulesNames, name)) {
            var errMsg = errors_public_1.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
              topLevelRule: name,
              grammarName: this.className
            });
            var error = {
              message: errMsg,
              type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
              ruleName: name
            };
            this.definitionErrors.push(error);
          }
          this.definedRulesNames.push(name);
          var ruleImplementation = this.defineRule(name, implementation, config);
          this[name] = ruleImplementation;
          return ruleImplementation;
        };
        RecognizerApi2.prototype.OVERRIDE_RULE = function(name, impl, config) {
          if (config === void 0) {
            config = parser_1.DEFAULT_RULE_CONFIG;
          }
          var ruleErrors = (0, checks_1.validateRuleIsOverridden)(name, this.definedRulesNames, this.className);
          this.definitionErrors = this.definitionErrors.concat(ruleErrors);
          var ruleImplementation = this.defineRule(name, impl, config);
          this[name] = ruleImplementation;
          return ruleImplementation;
        };
        RecognizerApi2.prototype.BACKTRACK = function(grammarRule, args) {
          return function() {
            this.isBackTrackingStack.push(1);
            var orgState = this.saveRecogState();
            try {
              grammarRule.apply(this, args);
              return true;
            } catch (e) {
              if ((0, exceptions_public_1.isRecognitionException)(e)) {
                return false;
              } else {
                throw e;
              }
            } finally {
              this.reloadRecogState(orgState);
              this.isBackTrackingStack.pop();
            }
          };
        };
        RecognizerApi2.prototype.getGAstProductions = function() {
          return this.gastProductionsCache;
        };
        RecognizerApi2.prototype.getSerializedGastProductions = function() {
          return (0, gast_1.serializeGrammar)((0, values_1.default)(this.gastProductionsCache));
        };
        return RecognizerApi2;
      }();
      exports2.RecognizerApi = RecognizerApi;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
  var require_recognizer_engine = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RecognizerEngine = void 0;
      var isEmpty_1 = __importDefault(require_isEmpty());
      var isArray_1 = __importDefault(require_isArray());
      var flatten_1 = __importDefault(require_flatten());
      var every_1 = __importDefault(require_every());
      var uniq_1 = __importDefault(require_uniq());
      var isObject_1 = __importDefault(require_isObject());
      var has_1 = __importDefault(require_has());
      var values_1 = __importDefault(require_values());
      var reduce_1 = __importDefault(require_reduce());
      var clone_1 = __importDefault(require_clone());
      var keys_1 = require_keys2();
      var exceptions_public_1 = require_exceptions_public();
      var lookahead_1 = require_lookahead();
      var interpreter_1 = require_interpreter();
      var parser_1 = require_parser();
      var recoverable_1 = require_recoverable();
      var tokens_public_1 = require_tokens_public();
      var tokens_1 = require_tokens();
      var RecognizerEngine = function() {
        function RecognizerEngine2() {
        }
        RecognizerEngine2.prototype.initRecognizerEngine = function(tokenVocabulary, config) {
          this.className = this.constructor.name;
          this.shortRuleNameToFull = {};
          this.fullRuleNameToShort = {};
          this.ruleShortNameIdx = 256;
          this.tokenMatcher = tokens_1.tokenStructuredMatcherNoCategories;
          this.subruleIdx = 0;
          this.definedRulesNames = [];
          this.tokensMap = {};
          this.isBackTrackingStack = [];
          this.RULE_STACK = [];
          this.RULE_OCCURRENCE_STACK = [];
          this.gastProductionsCache = {};
          if ((0, has_1.default)(config, "serializedGrammar")) {
            throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
          }
          if ((0, isArray_1.default)(tokenVocabulary)) {
            if ((0, isEmpty_1.default)(tokenVocabulary)) {
              throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
            }
            if (typeof tokenVocabulary[0].startOffset === "number") {
              throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
            }
          }
          if ((0, isArray_1.default)(tokenVocabulary)) {
            this.tokensMap = (0, reduce_1.default)(tokenVocabulary, function(acc, tokType) {
              acc[tokType.name] = tokType;
              return acc;
            }, {});
          } else if ((0, has_1.default)(tokenVocabulary, "modes") && (0, every_1.default)((0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes)), tokens_1.isTokenType)) {
            var allTokenTypes_1 = (0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes));
            var uniqueTokens = (0, uniq_1.default)(allTokenTypes_1);
            this.tokensMap = (0, reduce_1.default)(uniqueTokens, function(acc, tokType) {
              acc[tokType.name] = tokType;
              return acc;
            }, {});
          } else if ((0, isObject_1.default)(tokenVocabulary)) {
            this.tokensMap = (0, clone_1.default)(tokenVocabulary);
          } else {
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
          }
          this.tokensMap["EOF"] = tokens_public_1.EOF;
          var allTokenTypes = (0, has_1.default)(tokenVocabulary, "modes") ? (0, flatten_1.default)((0, values_1.default)(tokenVocabulary.modes)) : (0, values_1.default)(tokenVocabulary);
          var noTokenCategoriesUsed = (0, every_1.default)(allTokenTypes, function(tokenConstructor) {
            return (0, isEmpty_1.default)(tokenConstructor.categoryMatches);
          });
          this.tokenMatcher = noTokenCategoriesUsed ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
          (0, tokens_1.augmentTokenTypes)((0, values_1.default)(this.tokensMap));
        };
        RecognizerEngine2.prototype.defineRule = function(ruleName, impl, config) {
          if (this.selfAnalysisDone) {
            throw Error("Grammar rule <".concat(ruleName, "> may not be defined after the 'performSelfAnalysis' method has been called'\n") + "Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
          }
          var resyncEnabled = (0, has_1.default)(config, "resyncEnabled") ? config.resyncEnabled : parser_1.DEFAULT_RULE_CONFIG.resyncEnabled;
          var recoveryValueFunc = (0, has_1.default)(config, "recoveryValueFunc") ? config.recoveryValueFunc : parser_1.DEFAULT_RULE_CONFIG.recoveryValueFunc;
          var shortName = this.ruleShortNameIdx << keys_1.BITS_FOR_METHOD_TYPE + keys_1.BITS_FOR_OCCURRENCE_IDX;
          this.ruleShortNameIdx++;
          this.shortRuleNameToFull[shortName] = ruleName;
          this.fullRuleNameToShort[ruleName] = shortName;
          var invokeRuleWithTry;
          if (this.outputCst === true) {
            invokeRuleWithTry = function invokeRuleWithTry2() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              try {
                this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                impl.apply(this, args);
                var cst = this.CST_STACK[this.CST_STACK.length - 1];
                this.cstPostRule(cst);
                return cst;
              } catch (e) {
                return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
              } finally {
                this.ruleFinallyStateUpdate();
              }
            };
          } else {
            invokeRuleWithTry = function invokeRuleWithTryCst() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              try {
                this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
                return impl.apply(this, args);
              } catch (e) {
                return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
              } finally {
                this.ruleFinallyStateUpdate();
              }
            };
          }
          var wrappedGrammarRule = Object.assign(invokeRuleWithTry, { ruleName, originalGrammarAction: impl });
          return wrappedGrammarRule;
        };
        RecognizerEngine2.prototype.invokeRuleCatch = function(e, resyncEnabledConfig, recoveryValueFunc) {
          var isFirstInvokedRule = this.RULE_STACK.length === 1;
          var reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
          if ((0, exceptions_public_1.isRecognitionException)(e)) {
            var recogError = e;
            if (reSyncEnabled) {
              var reSyncTokType = this.findReSyncTokenType();
              if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
                if (this.outputCst) {
                  var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                  partialCstResult.recoveredNode = true;
                  return partialCstResult;
                } else {
                  return recoveryValueFunc();
                }
              } else {
                if (this.outputCst) {
                  var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                  partialCstResult.recoveredNode = true;
                  recogError.partialCstResult = partialCstResult;
                }
                throw recogError;
              }
            } else if (isFirstInvokedRule) {
              this.moveToTerminatedState();
              return recoveryValueFunc();
            } else {
              throw recogError;
            }
          } else {
            throw e;
          }
        };
        RecognizerEngine2.prototype.optionInternal = function(actionORMethodDef, occurrence) {
          var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence);
          return this.optionInternalLogic(actionORMethodDef, occurrence, key);
        };
        RecognizerEngine2.prototype.optionInternalLogic = function(actionORMethodDef, occurrence, key) {
          var _this = this;
          var lookAheadFunc = this.getLaFuncFromCache(key);
          var action;
          if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_1 = actionORMethodDef.GATE;
            if (predicate_1 !== void 0) {
              var orgLookaheadFunction_1 = lookAheadFunc;
              lookAheadFunc = function() {
                return predicate_1.call(_this) && orgLookaheadFunction_1.call(_this);
              };
            }
          } else {
            action = actionORMethodDef;
          }
          if (lookAheadFunc.call(this) === true) {
            return action.call(this);
          }
          return void 0;
        };
        RecognizerEngine2.prototype.atLeastOneInternal = function(prodOccurrence, actionORMethodDef) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence);
          return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        };
        RecognizerEngine2.prototype.atLeastOneInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
          var _this = this;
          var lookAheadFunc = this.getLaFuncFromCache(key);
          var action;
          if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_2 = actionORMethodDef.GATE;
            if (predicate_2 !== void 0) {
              var orgLookaheadFunction_2 = lookAheadFunc;
              lookAheadFunc = function() {
                return predicate_2.call(_this) && orgLookaheadFunction_2.call(_this);
              };
            }
          } else {
            action = actionORMethodDef;
          }
          if (lookAheadFunc.call(this) === true) {
            var notStuck = this.doSingleRepetition(action);
            while (lookAheadFunc.call(this) === true && notStuck === true) {
              notStuck = this.doSingleRepetition(action);
            }
          } else {
            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
          }
          this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, keys_1.AT_LEAST_ONE_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneWalker);
        };
        RecognizerEngine2.prototype.atLeastOneSepFirstInternal = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence);
          this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
        };
        RecognizerEngine2.prototype.atLeastOneSepFirstInternalLogic = function(prodOccurrence, options, key) {
          var _this = this;
          var action = options.DEF;
          var separator = options.SEP;
          var firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
          if (firstIterationLookaheadFunc.call(this) === true) {
            ;
            action.call(this);
            var separatorLookAheadFunc = function() {
              return _this.tokenMatcher(_this.LA(1), separator);
            };
            while (this.tokenMatcher(this.LA(1), separator) === true) {
              this.CONSUME(separator);
              action.call(this);
            }
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
              prodOccurrence,
              separator,
              separatorLookAheadFunc,
              action,
              interpreter_1.NextTerminalAfterAtLeastOneSepWalker
            ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneSepWalker);
          } else {
            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
          }
        };
        RecognizerEngine2.prototype.manyInternal = function(prodOccurrence, actionORMethodDef) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence);
          return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        };
        RecognizerEngine2.prototype.manyInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
          var _this = this;
          var lookaheadFunction = this.getLaFuncFromCache(key);
          var action;
          if (typeof actionORMethodDef !== "function") {
            action = actionORMethodDef.DEF;
            var predicate_3 = actionORMethodDef.GATE;
            if (predicate_3 !== void 0) {
              var orgLookaheadFunction_3 = lookaheadFunction;
              lookaheadFunction = function() {
                return predicate_3.call(_this) && orgLookaheadFunction_3.call(_this);
              };
            }
          } else {
            action = actionORMethodDef;
          }
          var notStuck = true;
          while (lookaheadFunction.call(this) === true && notStuck === true) {
            notStuck = this.doSingleRepetition(action);
          }
          this.attemptInRepetitionRecovery(
            this.manyInternal,
            [prodOccurrence, actionORMethodDef],
            lookaheadFunction,
            keys_1.MANY_IDX,
            prodOccurrence,
            interpreter_1.NextTerminalAfterManyWalker,
            notStuck
          );
        };
        RecognizerEngine2.prototype.manySepFirstInternal = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence);
          this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
        };
        RecognizerEngine2.prototype.manySepFirstInternalLogic = function(prodOccurrence, options, key) {
          var _this = this;
          var action = options.DEF;
          var separator = options.SEP;
          var firstIterationLaFunc = this.getLaFuncFromCache(key);
          if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            var separatorLookAheadFunc = function() {
              return _this.tokenMatcher(_this.LA(1), separator);
            };
            while (this.tokenMatcher(this.LA(1), separator) === true) {
              this.CONSUME(separator);
              action.call(this);
            }
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
              prodOccurrence,
              separator,
              separatorLookAheadFunc,
              action,
              interpreter_1.NextTerminalAfterManySepWalker
            ], separatorLookAheadFunc, keys_1.MANY_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManySepWalker);
          }
        };
        RecognizerEngine2.prototype.repetitionSepSecondInternal = function(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
          while (separatorLookAheadFunc()) {
            this.CONSUME(separator);
            action.call(this);
          }
          this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker
          ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
        };
        RecognizerEngine2.prototype.doSingleRepetition = function(action) {
          var beforeIteration = this.getLexerPosition();
          action.call(this);
          var afterIteration = this.getLexerPosition();
          return afterIteration > beforeIteration;
        };
        RecognizerEngine2.prototype.orInternal = function(altsOrOpts, occurrence) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence);
          var alts = (0, isArray_1.default)(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
          var laFunc = this.getLaFuncFromCache(laKey);
          var altIdxToTake = laFunc.call(this, alts);
          if (altIdxToTake !== void 0) {
            var chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
          }
          this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
        };
        RecognizerEngine2.prototype.ruleFinallyStateUpdate = function() {
          this.RULE_STACK.pop();
          this.RULE_OCCURRENCE_STACK.pop();
          this.cstFinallyStateUpdate();
          if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            var firstRedundantTok = this.LA(1);
            var errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
              firstRedundant: firstRedundantTok,
              ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new exceptions_public_1.NotAllInputParsedException(errMsg, firstRedundantTok));
          }
        };
        RecognizerEngine2.prototype.subruleInternal = function(ruleToCall, idx, options) {
          var ruleResult;
          try {
            var args = options !== void 0 ? options.ARGS : void 0;
            this.subruleIdx = idx;
            ruleResult = ruleToCall.apply(this, args);
            this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
            return ruleResult;
          } catch (e) {
            throw this.subruleInternalError(e, options, ruleToCall.ruleName);
          }
        };
        RecognizerEngine2.prototype.subruleInternalError = function(e, options, ruleName) {
          if ((0, exceptions_public_1.isRecognitionException)(e) && e.partialCstResult !== void 0) {
            this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
            delete e.partialCstResult;
          }
          throw e;
        };
        RecognizerEngine2.prototype.consumeInternal = function(tokType, idx, options) {
          var consumedToken;
          try {
            var nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
              this.consumeToken();
              consumedToken = nextToken;
            } else {
              this.consumeInternalError(tokType, nextToken, options);
            }
          } catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
          }
          this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
          return consumedToken;
        };
        RecognizerEngine2.prototype.consumeInternalError = function(tokType, nextToken, options) {
          var msg;
          var previousToken = this.LA(0);
          if (options !== void 0 && options.ERR_MSG) {
            msg = options.ERR_MSG;
          } else {
            msg = this.errorMessageProvider.buildMismatchTokenMessage({
              expected: tokType,
              actual: nextToken,
              previous: previousToken,
              ruleName: this.getCurrRuleFullName()
            });
          }
          throw this.SAVE_ERROR(new exceptions_public_1.MismatchedTokenException(msg, nextToken, previousToken));
        };
        RecognizerEngine2.prototype.consumeInternalRecovery = function(tokType, idx, eFromConsumption) {
          if (this.recoveryEnabled && eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
            var follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
              return this.tryInRuleRecovery(tokType, follows);
            } catch (eFromInRuleRecovery) {
              if (eFromInRuleRecovery.name === recoverable_1.IN_RULE_RECOVERY_EXCEPTION) {
                throw eFromConsumption;
              } else {
                throw eFromInRuleRecovery;
              }
            }
          } else {
            throw eFromConsumption;
          }
        };
        RecognizerEngine2.prototype.saveRecogState = function() {
          var savedErrors = this.errors;
          var savedRuleStack = (0, clone_1.default)(this.RULE_STACK);
          return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK
          };
        };
        RecognizerEngine2.prototype.reloadRecogState = function(newState) {
          this.errors = newState.errors;
          this.importLexerState(newState.lexerState);
          this.RULE_STACK = newState.RULE_STACK;
        };
        RecognizerEngine2.prototype.ruleInvocationStateUpdate = function(shortName, fullName, idxInCallingRule) {
          this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
          this.RULE_STACK.push(shortName);
          this.cstInvocationStateUpdate(fullName);
        };
        RecognizerEngine2.prototype.isBackTracking = function() {
          return this.isBackTrackingStack.length !== 0;
        };
        RecognizerEngine2.prototype.getCurrRuleFullName = function() {
          var shortName = this.getLastExplicitRuleShortName();
          return this.shortRuleNameToFull[shortName];
        };
        RecognizerEngine2.prototype.shortRuleNameToFullName = function(shortName) {
          return this.shortRuleNameToFull[shortName];
        };
        RecognizerEngine2.prototype.isAtEndOfInput = function() {
          return this.tokenMatcher(this.LA(1), tokens_public_1.EOF);
        };
        RecognizerEngine2.prototype.reset = function() {
          this.resetLexerState();
          this.subruleIdx = 0;
          this.isBackTrackingStack = [];
          this.errors = [];
          this.RULE_STACK = [];
          this.CST_STACK = [];
          this.RULE_OCCURRENCE_STACK = [];
        };
        return RecognizerEngine2;
      }();
      exports2.RecognizerEngine = RecognizerEngine;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
  var require_error_handler = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ErrorHandler = void 0;
      var exceptions_public_1 = require_exceptions_public();
      var has_1 = __importDefault(require_has());
      var clone_1 = __importDefault(require_clone());
      var lookahead_1 = require_lookahead();
      var parser_1 = require_parser();
      var ErrorHandler = function() {
        function ErrorHandler2() {
        }
        ErrorHandler2.prototype.initErrorHandler = function(config) {
          this._errors = [];
          this.errorMessageProvider = (0, has_1.default)(config, "errorMessageProvider") ? config.errorMessageProvider : parser_1.DEFAULT_PARSER_CONFIG.errorMessageProvider;
        };
        ErrorHandler2.prototype.SAVE_ERROR = function(error) {
          if ((0, exceptions_public_1.isRecognitionException)(error)) {
            error.context = {
              ruleStack: this.getHumanReadableRuleStack(),
              ruleOccurrenceStack: (0, clone_1.default)(this.RULE_OCCURRENCE_STACK)
            };
            this._errors.push(error);
            return error;
          } else {
            throw Error("Trying to save an Error which is not a RecognitionException");
          }
        };
        Object.defineProperty(ErrorHandler2.prototype, "errors", {
          get: function() {
            return (0, clone_1.default)(this._errors);
          },
          set: function(newErrors) {
            this._errors = newErrors;
          },
          enumerable: false,
          configurable: true
        });
        ErrorHandler2.prototype.raiseEarlyExitException = function(occurrence, prodType, userDefinedErrMsg) {
          var ruleName = this.getCurrRuleFullName();
          var ruleGrammar = this.getGAstProductions()[ruleName];
          var lookAheadPathsPerAlternative = (0, lookahead_1.getLookaheadPathsForOptionalProd)(occurrence, ruleGrammar, prodType, this.maxLookahead);
          var insideProdPaths = lookAheadPathsPerAlternative[0];
          var actualTokens = [];
          for (var i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
          }
          var msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName
          });
          throw this.SAVE_ERROR(new exceptions_public_1.EarlyExitException(msg, this.LA(1), this.LA(0)));
        };
        ErrorHandler2.prototype.raiseNoAltException = function(occurrence, errMsgTypes) {
          var ruleName = this.getCurrRuleFullName();
          var ruleGrammar = this.getGAstProductions()[ruleName];
          var lookAheadPathsPerAlternative = (0, lookahead_1.getLookaheadPathsForOr)(occurrence, ruleGrammar, this.maxLookahead);
          var actualTokens = [];
          for (var i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
          }
          var previousToken = this.LA(0);
          var errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
          });
          throw this.SAVE_ERROR(new exceptions_public_1.NoViableAltException(errMsg, this.LA(1), previousToken));
        };
        return ErrorHandler2;
      }();
      exports2.ErrorHandler = ErrorHandler;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js
  var require_context_assist = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ContentAssist = void 0;
      var interpreter_1 = require_interpreter();
      var first_1 = __importDefault(require_first2());
      var isUndefined_1 = __importDefault(require_isUndefined());
      var ContentAssist = function() {
        function ContentAssist2() {
        }
        ContentAssist2.prototype.initContentAssist = function() {
        };
        ContentAssist2.prototype.computeContentAssist = function(startRuleName, precedingInput) {
          var startRuleGast = this.gastProductionsCache[startRuleName];
          if ((0, isUndefined_1.default)(startRuleGast)) {
            throw Error("Rule ->".concat(startRuleName, "<- does not exist in this grammar."));
          }
          return (0, interpreter_1.nextPossibleTokensAfter)([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
        };
        ContentAssist2.prototype.getNextPossibleTokenTypes = function(grammarPath) {
          var topRuleName = (0, first_1.default)(grammarPath.ruleStack);
          var gastProductions = this.getGAstProductions();
          var topProduction = gastProductions[topRuleName];
          var nextPossibleTokenTypes = new interpreter_1.NextAfterTokenWalker(topProduction, grammarPath).startWalking();
          return nextPossibleTokenTypes;
        };
        return ContentAssist2;
      }();
      exports2.ContentAssist = ContentAssist;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
  var require_gast_recorder = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.GastRecorder = void 0;
      var last_1 = __importDefault(require_last());
      var isArray_1 = __importDefault(require_isArray());
      var some_1 = __importDefault(require_some());
      var forEach_1 = __importDefault(require_forEach());
      var isFunction_1 = __importDefault(require_isFunction());
      var has_1 = __importDefault(require_has());
      var gast_1 = require_api2();
      var lexer_public_1 = require_lexer_public();
      var tokens_1 = require_tokens();
      var tokens_public_1 = require_tokens_public();
      var parser_1 = require_parser();
      var keys_1 = require_keys2();
      var RECORDING_NULL_OBJECT = {
        description: "This Object indicates the Parser is during Recording Phase"
      };
      Object.freeze(RECORDING_NULL_OBJECT);
      var HANDLE_SEPARATOR = true;
      var MAX_METHOD_IDX = Math.pow(2, keys_1.BITS_FOR_OCCURRENCE_IDX) - 1;
      var RFT = (0, tokens_public_1.createToken)({ name: "RECORDING_PHASE_TOKEN", pattern: lexer_public_1.Lexer.NA });
      (0, tokens_1.augmentTokenTypes)([RFT]);
      var RECORDING_PHASE_TOKEN = (0, tokens_public_1.createTokenInstance)(
        RFT,
        "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
        -1,
        -1,
        -1,
        -1,
        -1,
        -1
      );
      Object.freeze(RECORDING_PHASE_TOKEN);
      var RECORDING_PHASE_CSTNODE = {
        name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
        children: {}
      };
      var GastRecorder = function() {
        function GastRecorder2() {
        }
        GastRecorder2.prototype.initGastRecorder = function(config) {
          this.recordingProdStack = [];
          this.RECORDING_PHASE = false;
        };
        GastRecorder2.prototype.enableRecording = function() {
          var _this = this;
          this.RECORDING_PHASE = true;
          this.TRACE_INIT("Enable Recording", function() {
            var _loop_1 = function(i2) {
              var idx = i2 > 0 ? i2 : "";
              _this["CONSUME".concat(idx)] = function(arg1, arg2) {
                return this.consumeInternalRecord(arg1, i2, arg2);
              };
              _this["SUBRULE".concat(idx)] = function(arg1, arg2) {
                return this.subruleInternalRecord(arg1, i2, arg2);
              };
              _this["OPTION".concat(idx)] = function(arg1) {
                return this.optionInternalRecord(arg1, i2);
              };
              _this["OR".concat(idx)] = function(arg1) {
                return this.orInternalRecord(arg1, i2);
              };
              _this["MANY".concat(idx)] = function(arg1) {
                this.manyInternalRecord(i2, arg1);
              };
              _this["MANY_SEP".concat(idx)] = function(arg1) {
                this.manySepFirstInternalRecord(i2, arg1);
              };
              _this["AT_LEAST_ONE".concat(idx)] = function(arg1) {
                this.atLeastOneInternalRecord(i2, arg1);
              };
              _this["AT_LEAST_ONE_SEP".concat(idx)] = function(arg1) {
                this.atLeastOneSepFirstInternalRecord(i2, arg1);
              };
            };
            for (var i = 0; i < 10; i++) {
              _loop_1(i);
            }
            _this["consume"] = function(idx, arg1, arg2) {
              return this.consumeInternalRecord(arg1, idx, arg2);
            };
            _this["subrule"] = function(idx, arg1, arg2) {
              return this.subruleInternalRecord(arg1, idx, arg2);
            };
            _this["option"] = function(idx, arg1) {
              return this.optionInternalRecord(arg1, idx);
            };
            _this["or"] = function(idx, arg1) {
              return this.orInternalRecord(arg1, idx);
            };
            _this["many"] = function(idx, arg1) {
              this.manyInternalRecord(idx, arg1);
            };
            _this["atLeastOne"] = function(idx, arg1) {
              this.atLeastOneInternalRecord(idx, arg1);
            };
            _this.ACTION = _this.ACTION_RECORD;
            _this.BACKTRACK = _this.BACKTRACK_RECORD;
            _this.LA = _this.LA_RECORD;
          });
        };
        GastRecorder2.prototype.disableRecording = function() {
          var _this = this;
          this.RECORDING_PHASE = false;
          this.TRACE_INIT("Deleting Recording methods", function() {
            var that = _this;
            for (var i = 0; i < 10; i++) {
              var idx = i > 0 ? i : "";
              delete that["CONSUME".concat(idx)];
              delete that["SUBRULE".concat(idx)];
              delete that["OPTION".concat(idx)];
              delete that["OR".concat(idx)];
              delete that["MANY".concat(idx)];
              delete that["MANY_SEP".concat(idx)];
              delete that["AT_LEAST_ONE".concat(idx)];
              delete that["AT_LEAST_ONE_SEP".concat(idx)];
            }
            delete that["consume"];
            delete that["subrule"];
            delete that["option"];
            delete that["or"];
            delete that["many"];
            delete that["atLeastOne"];
            delete that.ACTION;
            delete that.BACKTRACK;
            delete that.LA;
          });
        };
        GastRecorder2.prototype.ACTION_RECORD = function(impl) {
        };
        GastRecorder2.prototype.BACKTRACK_RECORD = function(grammarRule, args) {
          return function() {
            return true;
          };
        };
        GastRecorder2.prototype.LA_RECORD = function(howMuch) {
          return parser_1.END_OF_FILE;
        };
        GastRecorder2.prototype.topLevelRuleRecord = function(name, def) {
          try {
            var newTopLevelRule = new gast_1.Rule({ definition: [], name });
            newTopLevelRule.name = name;
            this.recordingProdStack.push(newTopLevelRule);
            def.call(this);
            this.recordingProdStack.pop();
            return newTopLevelRule;
          } catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== true) {
              try {
                originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording';
              } catch (mutabilityError) {
                throw originalError;
              }
            }
            throw originalError;
          }
        };
        GastRecorder2.prototype.optionInternalRecord = function(actionORMethodDef, occurrence) {
          return recordProd.call(this, gast_1.Option, actionORMethodDef, occurrence);
        };
        GastRecorder2.prototype.atLeastOneInternalRecord = function(occurrence, actionORMethodDef) {
          recordProd.call(this, gast_1.RepetitionMandatory, actionORMethodDef, occurrence);
        };
        GastRecorder2.prototype.atLeastOneSepFirstInternalRecord = function(occurrence, options) {
          recordProd.call(this, gast_1.RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
        };
        GastRecorder2.prototype.manyInternalRecord = function(occurrence, actionORMethodDef) {
          recordProd.call(this, gast_1.Repetition, actionORMethodDef, occurrence);
        };
        GastRecorder2.prototype.manySepFirstInternalRecord = function(occurrence, options) {
          recordProd.call(this, gast_1.RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
        };
        GastRecorder2.prototype.orInternalRecord = function(altsOrOpts, occurrence) {
          return recordOrProd.call(this, altsOrOpts, occurrence);
        };
        GastRecorder2.prototype.subruleInternalRecord = function(ruleToCall, occurrence, options) {
          assertMethodIdxIsValid(occurrence);
          if (!ruleToCall || (0, has_1.default)(ruleToCall, "ruleName") === false) {
            var error = new Error("<SUBRULE".concat(getIdxSuffix(occurrence), "> argument is invalid") + " expecting a Parser method reference but got: <".concat(JSON.stringify(ruleToCall), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
          }
          var prevProd = (0, last_1.default)(this.recordingProdStack);
          var ruleName = ruleToCall.ruleName;
          var newNoneTerminal = new gast_1.NonTerminal({
            idx: occurrence,
            nonTerminalName: ruleName,
            label: options === null || options === void 0 ? void 0 : options.LABEL,
            referencedRule: void 0
          });
          prevProd.definition.push(newNoneTerminal);
          return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
        };
        GastRecorder2.prototype.consumeInternalRecord = function(tokType, occurrence, options) {
          assertMethodIdxIsValid(occurrence);
          if (!(0, tokens_1.hasShortKeyProperty)(tokType)) {
            var error = new Error("<CONSUME".concat(getIdxSuffix(occurrence), "> argument is invalid") + " expecting a TokenType reference but got: <".concat(JSON.stringify(tokType), ">") + "\n inside top level rule: <".concat(this.recordingProdStack[0].name, ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
          }
          var prevProd = (0, last_1.default)(this.recordingProdStack);
          var newNoneTerminal = new gast_1.Terminal({
            idx: occurrence,
            terminalType: tokType,
            label: options === null || options === void 0 ? void 0 : options.LABEL
          });
          prevProd.definition.push(newNoneTerminal);
          return RECORDING_PHASE_TOKEN;
        };
        return GastRecorder2;
      }();
      exports2.GastRecorder = GastRecorder;
      function recordProd(prodConstructor, mainProdArg, occurrence, handleSep) {
        if (handleSep === void 0) {
          handleSep = false;
        }
        assertMethodIdxIsValid(occurrence);
        var prevProd = (0, last_1.default)(this.recordingProdStack);
        var grammarAction = (0, isFunction_1.default)(mainProdArg) ? mainProdArg : mainProdArg.DEF;
        var newProd = new prodConstructor({ definition: [], idx: occurrence });
        if (handleSep) {
          newProd.separator = mainProdArg.SEP;
        }
        if ((0, has_1.default)(mainProdArg, "MAX_LOOKAHEAD")) {
          newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
        }
        this.recordingProdStack.push(newProd);
        grammarAction.call(this);
        prevProd.definition.push(newProd);
        this.recordingProdStack.pop();
        return RECORDING_NULL_OBJECT;
      }
      function recordOrProd(mainProdArg, occurrence) {
        var _this = this;
        assertMethodIdxIsValid(occurrence);
        var prevProd = (0, last_1.default)(this.recordingProdStack);
        var hasOptions = (0, isArray_1.default)(mainProdArg) === false;
        var alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
        var newOrProd = new gast_1.Alternation({
          definition: [],
          idx: occurrence,
          ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
        });
        if ((0, has_1.default)(mainProdArg, "MAX_LOOKAHEAD")) {
          newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
        }
        var hasPredicates = (0, some_1.default)(alts, function(currAlt) {
          return (0, isFunction_1.default)(currAlt.GATE);
        });
        newOrProd.hasPredicates = hasPredicates;
        prevProd.definition.push(newOrProd);
        (0, forEach_1.default)(alts, function(currAlt) {
          var currAltFlat = new gast_1.Alternative({ definition: [] });
          newOrProd.definition.push(currAltFlat);
          if ((0, has_1.default)(currAlt, "IGNORE_AMBIGUITIES")) {
            currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
          } else if ((0, has_1.default)(currAlt, "GATE")) {
            currAltFlat.ignoreAmbiguities = true;
          }
          _this.recordingProdStack.push(currAltFlat);
          currAlt.ALT.call(_this);
          _this.recordingProdStack.pop();
        });
        return RECORDING_NULL_OBJECT;
      }
      function getIdxSuffix(idx) {
        return idx === 0 ? "" : "".concat(idx);
      }
      function assertMethodIdxIsValid(idx) {
        if (idx < 0 || idx > MAX_METHOD_IDX) {
          var error = new Error(
            "Invalid DSL Method idx value: <".concat(idx, ">\n	") + "Idx value must be a none negative value smaller than ".concat(MAX_METHOD_IDX + 1)
          );
          error.KNOWN_RECORDER_ERROR = true;
          throw error;
        }
      }
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
  var require_perf_tracer = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.PerformanceTracer = void 0;
      var has_1 = __importDefault(require_has());
      var utils_1 = require_api();
      var parser_1 = require_parser();
      var PerformanceTracer = function() {
        function PerformanceTracer2() {
        }
        PerformanceTracer2.prototype.initPerformanceTracer = function(config) {
          if ((0, has_1.default)(config, "traceInitPerf")) {
            var userTraceInitPerf = config.traceInitPerf;
            var traceIsNumber = typeof userTraceInitPerf === "number";
            this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
            this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
          } else {
            this.traceInitMaxIdent = 0;
            this.traceInitPerf = parser_1.DEFAULT_PARSER_CONFIG.traceInitPerf;
          }
          this.traceInitIndent = -1;
        };
        PerformanceTracer2.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
          if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("	");
            if (this.traceInitIndent < this.traceInitMaxIdent) {
              console.log("".concat(indent, "--> <").concat(phaseDesc, ">"));
            }
            var _a = (0, utils_1.timer)(phaseImpl), time = _a.time, value = _a.value;
            var traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) {
              traceMethod("".concat(indent, "<-- <").concat(phaseDesc, "> time: ").concat(time, "ms"));
            }
            this.traceInitIndent--;
            return value;
          } else {
            return phaseImpl();
          }
        };
        return PerformanceTracer2;
      }();
      exports2.PerformanceTracer = PerformanceTracer;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js
  var require_apply_mixins = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.applyMixins = void 0;
      function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function(baseCtor) {
          var baseProto = baseCtor.prototype;
          Object.getOwnPropertyNames(baseProto).forEach(function(propName) {
            if (propName === "constructor") {
              return;
            }
            var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
              Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            } else {
              derivedCtor.prototype[propName] = baseCtor.prototype[propName];
            }
          });
        });
      }
      exports2.applyMixins = applyMixins;
    }
  });

  // node_modules/chevrotain/lib/src/parse/parser/parser.js
  var require_parser = __commonJS({
    "node_modules/chevrotain/lib/src/parse/parser/parser.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.EmbeddedActionsParser = exports2.CstParser = exports2.Parser = exports2.EMPTY_ALT = exports2.ParserDefinitionErrorType = exports2.DEFAULT_RULE_CONFIG = exports2.DEFAULT_PARSER_CONFIG = exports2.END_OF_FILE = void 0;
      var isEmpty_1 = __importDefault(require_isEmpty());
      var map_1 = __importDefault(require_map());
      var forEach_1 = __importDefault(require_forEach());
      var values_1 = __importDefault(require_values());
      var has_1 = __importDefault(require_has());
      var clone_1 = __importDefault(require_clone());
      var utils_1 = require_api();
      var follow_1 = require_follow();
      var tokens_public_1 = require_tokens_public();
      var errors_public_1 = require_errors_public();
      var gast_resolver_public_1 = require_gast_resolver_public();
      var recoverable_1 = require_recoverable();
      var looksahead_1 = require_looksahead();
      var tree_builder_1 = require_tree_builder();
      var lexer_adapter_1 = require_lexer_adapter();
      var recognizer_api_1 = require_recognizer_api();
      var recognizer_engine_1 = require_recognizer_engine();
      var error_handler_1 = require_error_handler();
      var context_assist_1 = require_context_assist();
      var gast_recorder_1 = require_gast_recorder();
      var perf_tracer_1 = require_perf_tracer();
      var apply_mixins_1 = require_apply_mixins();
      var checks_1 = require_checks();
      exports2.END_OF_FILE = (0, tokens_public_1.createTokenInstance)(tokens_public_1.EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
      Object.freeze(exports2.END_OF_FILE);
      exports2.DEFAULT_PARSER_CONFIG = Object.freeze({
        recoveryEnabled: false,
        maxLookahead: 3,
        dynamicTokensEnabled: false,
        outputCst: true,
        errorMessageProvider: errors_public_1.defaultParserErrorProvider,
        nodeLocationTracking: "none",
        traceInitPerf: false,
        skipValidations: false
      });
      exports2.DEFAULT_RULE_CONFIG = Object.freeze({
        recoveryValueFunc: function() {
          return void 0;
        },
        resyncEnabled: true
      });
      var ParserDefinitionErrorType2;
      (function(ParserDefinitionErrorType3) {
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
        ParserDefinitionErrorType3[ParserDefinitionErrorType3["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
      })(ParserDefinitionErrorType2 = exports2.ParserDefinitionErrorType || (exports2.ParserDefinitionErrorType = {}));
      function EMPTY_ALT2(value) {
        if (value === void 0) {
          value = void 0;
        }
        return function() {
          return value;
        };
      }
      exports2.EMPTY_ALT = EMPTY_ALT2;
      var Parser2 = function() {
        function Parser3(tokenVocabulary, config) {
          this.definitionErrors = [];
          this.selfAnalysisDone = false;
          var that = this;
          that.initErrorHandler(config);
          that.initLexerAdapter();
          that.initLooksAhead(config);
          that.initRecognizerEngine(tokenVocabulary, config);
          that.initRecoverable(config);
          that.initTreeBuilder(config);
          that.initContentAssist();
          that.initGastRecorder(config);
          that.initPerformanceTracer(config);
          if ((0, has_1.default)(config, "ignoredIssues")) {
            throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
          }
          this.skipValidations = (0, has_1.default)(config, "skipValidations") ? config.skipValidations : exports2.DEFAULT_PARSER_CONFIG.skipValidations;
        }
        Parser3.performSelfAnalysis = function(parserInstance2) {
          throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
        };
        Parser3.prototype.performSelfAnalysis = function() {
          var _this = this;
          this.TRACE_INIT("performSelfAnalysis", function() {
            var defErrorsMsgs;
            _this.selfAnalysisDone = true;
            var className = _this.className;
            _this.TRACE_INIT("toFastProps", function() {
              (0, utils_1.toFastProperties)(_this);
            });
            _this.TRACE_INIT("Grammar Recording", function() {
              try {
                _this.enableRecording();
                (0, forEach_1.default)(_this.definedRulesNames, function(currRuleName) {
                  var wrappedRule = _this[currRuleName];
                  var originalGrammarAction = wrappedRule["originalGrammarAction"];
                  var recordedRuleGast;
                  _this.TRACE_INIT("".concat(currRuleName, " Rule"), function() {
                    recordedRuleGast = _this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                  });
                  _this.gastProductionsCache[currRuleName] = recordedRuleGast;
                });
              } finally {
                _this.disableRecording();
              }
            });
            var resolverErrors = [];
            _this.TRACE_INIT("Grammar Resolving", function() {
              resolverErrors = (0, gast_resolver_public_1.resolveGrammar)({
                rules: (0, values_1.default)(_this.gastProductionsCache)
              });
              _this.definitionErrors = _this.definitionErrors.concat(resolverErrors);
            });
            _this.TRACE_INIT("Grammar Validations", function() {
              if ((0, isEmpty_1.default)(resolverErrors) && _this.skipValidations === false) {
                var validationErrors = (0, gast_resolver_public_1.validateGrammar)({
                  rules: (0, values_1.default)(_this.gastProductionsCache),
                  tokenTypes: (0, values_1.default)(_this.tokensMap),
                  errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,
                  grammarName: className
                });
                var lookaheadValidationErrors = (0, checks_1.validateLookahead)({
                  lookaheadStrategy: _this.lookaheadStrategy,
                  rules: (0, values_1.default)(_this.gastProductionsCache),
                  tokenTypes: (0, values_1.default)(_this.tokensMap),
                  grammarName: className
                });
                _this.definitionErrors = _this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
              }
            });
            if ((0, isEmpty_1.default)(_this.definitionErrors)) {
              if (_this.recoveryEnabled) {
                _this.TRACE_INIT("computeAllProdsFollows", function() {
                  var allFollows = (0, follow_1.computeAllProdsFollows)((0, values_1.default)(_this.gastProductionsCache));
                  _this.resyncFollows = allFollows;
                });
              }
              _this.TRACE_INIT("ComputeLookaheadFunctions", function() {
                var _a, _b;
                (_b = (_a = _this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
                  rules: (0, values_1.default)(_this.gastProductionsCache)
                });
                _this.preComputeLookaheadFunctions((0, values_1.default)(_this.gastProductionsCache));
              });
            }
            if (!Parser3.DEFER_DEFINITION_ERRORS_HANDLING && !(0, isEmpty_1.default)(_this.definitionErrors)) {
              defErrorsMsgs = (0, map_1.default)(_this.definitionErrors, function(defError) {
                return defError.message;
              });
              throw new Error("Parser Definition Errors detected:\n ".concat(defErrorsMsgs.join("\n-------------------------------\n")));
            }
          });
        };
        Parser3.DEFER_DEFINITION_ERRORS_HANDLING = false;
        return Parser3;
      }();
      exports2.Parser = Parser2;
      (0, apply_mixins_1.applyMixins)(Parser2, [
        recoverable_1.Recoverable,
        looksahead_1.LooksAhead,
        tree_builder_1.TreeBuilder,
        lexer_adapter_1.LexerAdapter,
        recognizer_engine_1.RecognizerEngine,
        recognizer_api_1.RecognizerApi,
        error_handler_1.ErrorHandler,
        context_assist_1.ContentAssist,
        gast_recorder_1.GastRecorder,
        perf_tracer_1.PerformanceTracer
      ]);
      var CstParser2 = function(_super) {
        __extends(CstParser3, _super);
        function CstParser3(tokenVocabulary, config) {
          if (config === void 0) {
            config = exports2.DEFAULT_PARSER_CONFIG;
          }
          var configClone = (0, clone_1.default)(config);
          configClone.outputCst = true;
          return _super.call(this, tokenVocabulary, configClone) || this;
        }
        return CstParser3;
      }(Parser2);
      exports2.CstParser = CstParser2;
      var EmbeddedActionsParser3 = function(_super) {
        __extends(EmbeddedActionsParser4, _super);
        function EmbeddedActionsParser4(tokenVocabulary, config) {
          if (config === void 0) {
            config = exports2.DEFAULT_PARSER_CONFIG;
          }
          var configClone = (0, clone_1.default)(config);
          configClone.outputCst = false;
          return _super.call(this, tokenVocabulary, configClone) || this;
        }
        return EmbeddedActionsParser4;
      }(Parser2);
      exports2.EmbeddedActionsParser = EmbeddedActionsParser3;
    }
  });

  // node_modules/@chevrotain/cst-dts-gen/lib/src/model.js
  var require_model2 = __commonJS({
    "node_modules/@chevrotain/cst-dts-gen/lib/src/model.js"(exports2) {
      "use strict";
      var __extends = exports2 && exports2.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.buildModel = void 0;
      var gast_1 = require_api2();
      var map_1 = __importDefault(require_map());
      var flatten_1 = __importDefault(require_flatten());
      var values_1 = __importDefault(require_values());
      var some_1 = __importDefault(require_some());
      var groupBy_1 = __importDefault(require_groupBy());
      var assign_1 = __importDefault(require_assign());
      function buildModel(productions) {
        var generator = new CstNodeDefinitionGenerator();
        var allRules = (0, values_1.default)(productions);
        return (0, map_1.default)(allRules, function(rule) {
          return generator.visitRule(rule);
        });
      }
      exports2.buildModel = buildModel;
      var CstNodeDefinitionGenerator = function(_super) {
        __extends(CstNodeDefinitionGenerator2, _super);
        function CstNodeDefinitionGenerator2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        CstNodeDefinitionGenerator2.prototype.visitRule = function(node) {
          var rawElements = this.visitEach(node.definition);
          var grouped = (0, groupBy_1.default)(rawElements, function(el) {
            return el.propertyName;
          });
          var properties = (0, map_1.default)(grouped, function(group, propertyName) {
            var allNullable = !(0, some_1.default)(group, function(el) {
              return !el.canBeNull;
            });
            var propertyType = group[0].type;
            if (group.length > 1) {
              propertyType = (0, map_1.default)(group, function(g) {
                return g.type;
              });
            }
            return {
              name: propertyName,
              type: propertyType,
              optional: allNullable
            };
          });
          return {
            name: node.name,
            properties
          };
        };
        CstNodeDefinitionGenerator2.prototype.visitAlternative = function(node) {
          return this.visitEachAndOverrideWith(node.definition, { canBeNull: true });
        };
        CstNodeDefinitionGenerator2.prototype.visitOption = function(node) {
          return this.visitEachAndOverrideWith(node.definition, { canBeNull: true });
        };
        CstNodeDefinitionGenerator2.prototype.visitRepetition = function(node) {
          return this.visitEachAndOverrideWith(node.definition, { canBeNull: true });
        };
        CstNodeDefinitionGenerator2.prototype.visitRepetitionMandatory = function(node) {
          return this.visitEach(node.definition);
        };
        CstNodeDefinitionGenerator2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
          return this.visitEach(node.definition).concat({
            propertyName: node.separator.name,
            canBeNull: true,
            type: getType(node.separator)
          });
        };
        CstNodeDefinitionGenerator2.prototype.visitRepetitionWithSeparator = function(node) {
          return this.visitEachAndOverrideWith(node.definition, {
            canBeNull: true
          }).concat({
            propertyName: node.separator.name,
            canBeNull: true,
            type: getType(node.separator)
          });
        };
        CstNodeDefinitionGenerator2.prototype.visitAlternation = function(node) {
          return this.visitEachAndOverrideWith(node.definition, { canBeNull: true });
        };
        CstNodeDefinitionGenerator2.prototype.visitTerminal = function(node) {
          return [
            {
              propertyName: node.label || node.terminalType.name,
              canBeNull: false,
              type: getType(node)
            }
          ];
        };
        CstNodeDefinitionGenerator2.prototype.visitNonTerminal = function(node) {
          return [
            {
              propertyName: node.label || node.nonTerminalName,
              canBeNull: false,
              type: getType(node)
            }
          ];
        };
        CstNodeDefinitionGenerator2.prototype.visitEachAndOverrideWith = function(definition, override) {
          return (0, map_1.default)(this.visitEach(definition), function(definition2) {
            return (0, assign_1.default)({}, definition2, override);
          });
        };
        CstNodeDefinitionGenerator2.prototype.visitEach = function(definition) {
          var _this = this;
          return (0, flatten_1.default)((0, map_1.default)(definition, function(definition2) {
            return _this.visit(definition2);
          }));
        };
        return CstNodeDefinitionGenerator2;
      }(gast_1.GAstVisitor);
      function getType(production) {
        if (production instanceof gast_1.NonTerminal) {
          return {
            kind: "rule",
            name: production.referencedRule.name
          };
        }
        return { kind: "token" };
      }
    }
  });

  // node_modules/lodash/_castSlice.js
  var require_castSlice = __commonJS({
    "node_modules/lodash/_castSlice.js"(exports2, module2) {
      var baseSlice = require_baseSlice();
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === void 0 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      module2.exports = castSlice;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports2, module2) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module2.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_asciiToArray.js
  var require_asciiToArray = __commonJS({
    "node_modules/lodash/_asciiToArray.js"(exports2, module2) {
      function asciiToArray(string) {
        return string.split("");
      }
      module2.exports = asciiToArray;
    }
  });

  // node_modules/lodash/_unicodeToArray.js
  var require_unicodeToArray = __commonJS({
    "node_modules/lodash/_unicodeToArray.js"(exports2, module2) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      module2.exports = unicodeToArray;
    }
  });

  // node_modules/lodash/_stringToArray.js
  var require_stringToArray = __commonJS({
    "node_modules/lodash/_stringToArray.js"(exports2, module2) {
      var asciiToArray = require_asciiToArray();
      var hasUnicode = require_hasUnicode();
      var unicodeToArray = require_unicodeToArray();
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      module2.exports = stringToArray;
    }
  });

  // node_modules/lodash/_createCaseFirst.js
  var require_createCaseFirst = __commonJS({
    "node_modules/lodash/_createCaseFirst.js"(exports2, module2) {
      var castSlice = require_castSlice();
      var hasUnicode = require_hasUnicode();
      var stringToArray = require_stringToArray();
      var toString = require_toString();
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      module2.exports = createCaseFirst;
    }
  });

  // node_modules/lodash/upperFirst.js
  var require_upperFirst = __commonJS({
    "node_modules/lodash/upperFirst.js"(exports2, module2) {
      var createCaseFirst = require_createCaseFirst();
      var upperFirst = createCaseFirst("toUpperCase");
      module2.exports = upperFirst;
    }
  });

  // node_modules/@chevrotain/cst-dts-gen/lib/src/generate.js
  var require_generate = __commonJS({
    "node_modules/@chevrotain/cst-dts-gen/lib/src/generate.js"(exports2) {
      "use strict";
      var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.genDts = void 0;
      var flatten_1 = __importDefault(require_flatten());
      var isArray_1 = __importDefault(require_isArray());
      var map_1 = __importDefault(require_map());
      var reduce_1 = __importDefault(require_reduce());
      var uniq_1 = __importDefault(require_uniq());
      var upperFirst_1 = __importDefault(require_upperFirst());
      function genDts(model, options) {
        var contentParts = [];
        contentParts = contentParts.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";');
        contentParts = contentParts.concat((0, flatten_1.default)((0, map_1.default)(model, function(node) {
          return genCstNodeTypes(node);
        })));
        if (options.includeVisitorInterface) {
          contentParts = contentParts.concat(genVisitor(options.visitorInterfaceName, model));
        }
        return contentParts.join("\n\n") + "\n";
      }
      exports2.genDts = genDts;
      function genCstNodeTypes(node) {
        var nodeCstInterface = genNodeInterface(node);
        var nodeChildrenInterface = genNodeChildrenType(node);
        return [nodeCstInterface, nodeChildrenInterface];
      }
      function genNodeInterface(node) {
        var nodeInterfaceName = getNodeInterfaceName(node.name);
        var childrenTypeName = getNodeChildrenTypeName(node.name);
        return "export interface ".concat(nodeInterfaceName, ' extends CstNode {\n  name: "').concat(node.name, '";\n  children: ').concat(childrenTypeName, ";\n}");
      }
      function genNodeChildrenType(node) {
        var typeName = getNodeChildrenTypeName(node.name);
        return "export type ".concat(typeName, " = {\n  ").concat((0, map_1.default)(node.properties, function(property) {
          return genChildProperty(property);
        }).join("\n  "), "\n};");
      }
      function genChildProperty(prop) {
        var typeName = buildTypeString(prop.type);
        return "".concat(prop.name).concat(prop.optional ? "?" : "", ": ").concat(typeName, "[];");
      }
      function genVisitor(name, nodes) {
        return "export interface ".concat(name, "<IN, OUT> extends ICstVisitor<IN, OUT> {\n  ").concat((0, map_1.default)(nodes, function(node) {
          return genVisitorFunction(node);
        }).join("\n  "), "\n}");
      }
      function genVisitorFunction(node) {
        var childrenTypeName = getNodeChildrenTypeName(node.name);
        return "".concat(node.name, "(children: ").concat(childrenTypeName, ", param?: IN): OUT;");
      }
      function buildTypeString(type) {
        if ((0, isArray_1.default)(type)) {
          var typeNames = (0, uniq_1.default)((0, map_1.default)(type, function(t) {
            return getTypeString(t);
          }));
          var typeString = (0, reduce_1.default)(typeNames, function(sum, t) {
            return sum + " | " + t;
          });
          return "(" + typeString + ")";
        } else {
          return getTypeString(type);
        }
      }
      function getTypeString(type) {
        if (type.kind === "token") {
          return "IToken";
        }
        return getNodeInterfaceName(type.name);
      }
      function getNodeInterfaceName(ruleName) {
        return (0, upperFirst_1.default)(ruleName) + "CstNode";
      }
      function getNodeChildrenTypeName(ruleName) {
        return (0, upperFirst_1.default)(ruleName) + "CstChildren";
      }
    }
  });

  // node_modules/@chevrotain/cst-dts-gen/lib/src/api.js
  var require_api3 = __commonJS({
    "node_modules/@chevrotain/cst-dts-gen/lib/src/api.js"(exports2) {
      "use strict";
      var __assign = exports2 && exports2.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.generateCstDts = void 0;
      var model_1 = require_model2();
      var generate_1 = require_generate();
      var defaultOptions = {
        includeVisitorInterface: true,
        visitorInterfaceName: "ICstNodeVisitor"
      };
      function generateCstDts2(productions, options) {
        var effectiveOptions = __assign(__assign({}, defaultOptions), options);
        var model = (0, model_1.buildModel)(productions);
        return (0, generate_1.genDts)(model, effectiveOptions);
      }
      exports2.generateCstDts = generateCstDts2;
    }
  });

  // node_modules/chevrotain/lib/src/diagrams/render_public.js
  var require_render_public = __commonJS({
    "node_modules/chevrotain/lib/src/diagrams/render_public.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createSyntaxDiagramsCode = void 0;
      var version_1 = require_version();
      function createSyntaxDiagramsCode2(grammar, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? "https://unpkg.com/chevrotain@".concat(version_1.VERSION, "/diagrams/") : _c, _d = _b.css, css = _d === void 0 ? "https://unpkg.com/chevrotain@".concat(version_1.VERSION, "/diagrams/diagrams.css") : _d;
        var header = '\n<!-- This is a generated file -->\n<!DOCTYPE html>\n<meta charset="utf-8">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n';
        var cssHtml = "\n<link rel='stylesheet' href='".concat(css, "'>\n");
        var scripts = "\n<script src='".concat(resourceBase, "vendor/railroad-diagrams.js'><\/script>\n<script src='").concat(resourceBase, "src/diagrams_builder.js'><\/script>\n<script src='").concat(resourceBase, "src/diagrams_behavior.js'><\/script>\n<script src='").concat(resourceBase, "src/main.js'><\/script>\n");
        var diagramsDiv = '\n<div id="diagrams" align="center"></div>    \n';
        var serializedGrammar = "\n<script>\n    window.serializedGrammar = ".concat(JSON.stringify(grammar, null, "  "), ";\n<\/script>\n");
        var initLogic = '\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n<\/script>\n';
        return header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic;
      }
      exports2.createSyntaxDiagramsCode = createSyntaxDiagramsCode2;
    }
  });

  // node_modules/chevrotain/lib/src/api.js
  var require_api4 = __commonJS({
    "node_modules/chevrotain/lib/src/api.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Parser = exports2.createSyntaxDiagramsCode = exports2.clearCache = exports2.generateCstDts = exports2.GAstVisitor = exports2.serializeProduction = exports2.serializeGrammar = exports2.Terminal = exports2.Rule = exports2.RepetitionWithSeparator = exports2.RepetitionMandatoryWithSeparator = exports2.RepetitionMandatory = exports2.Repetition = exports2.Option = exports2.NonTerminal = exports2.Alternative = exports2.Alternation = exports2.defaultLexerErrorProvider = exports2.NoViableAltException = exports2.NotAllInputParsedException = exports2.MismatchedTokenException = exports2.isRecognitionException = exports2.EarlyExitException = exports2.defaultParserErrorProvider = exports2.LLkLookaheadStrategy = exports2.getLookaheadPaths = exports2.tokenName = exports2.tokenMatcher = exports2.tokenLabel = exports2.EOF = exports2.createTokenInstance = exports2.createToken = exports2.LexerDefinitionErrorType = exports2.Lexer = exports2.EMPTY_ALT = exports2.ParserDefinitionErrorType = exports2.EmbeddedActionsParser = exports2.CstParser = exports2.VERSION = void 0;
      var version_1 = require_version();
      Object.defineProperty(exports2, "VERSION", { enumerable: true, get: function() {
        return version_1.VERSION;
      } });
      var parser_1 = require_parser();
      Object.defineProperty(exports2, "CstParser", { enumerable: true, get: function() {
        return parser_1.CstParser;
      } });
      Object.defineProperty(exports2, "EmbeddedActionsParser", { enumerable: true, get: function() {
        return parser_1.EmbeddedActionsParser;
      } });
      Object.defineProperty(exports2, "ParserDefinitionErrorType", { enumerable: true, get: function() {
        return parser_1.ParserDefinitionErrorType;
      } });
      Object.defineProperty(exports2, "EMPTY_ALT", { enumerable: true, get: function() {
        return parser_1.EMPTY_ALT;
      } });
      var lexer_public_1 = require_lexer_public();
      Object.defineProperty(exports2, "Lexer", { enumerable: true, get: function() {
        return lexer_public_1.Lexer;
      } });
      Object.defineProperty(exports2, "LexerDefinitionErrorType", { enumerable: true, get: function() {
        return lexer_public_1.LexerDefinitionErrorType;
      } });
      var tokens_public_1 = require_tokens_public();
      Object.defineProperty(exports2, "createToken", { enumerable: true, get: function() {
        return tokens_public_1.createToken;
      } });
      Object.defineProperty(exports2, "createTokenInstance", { enumerable: true, get: function() {
        return tokens_public_1.createTokenInstance;
      } });
      Object.defineProperty(exports2, "EOF", { enumerable: true, get: function() {
        return tokens_public_1.EOF;
      } });
      Object.defineProperty(exports2, "tokenLabel", { enumerable: true, get: function() {
        return tokens_public_1.tokenLabel;
      } });
      Object.defineProperty(exports2, "tokenMatcher", { enumerable: true, get: function() {
        return tokens_public_1.tokenMatcher;
      } });
      Object.defineProperty(exports2, "tokenName", { enumerable: true, get: function() {
        return tokens_public_1.tokenName;
      } });
      var lookahead_1 = require_lookahead();
      Object.defineProperty(exports2, "getLookaheadPaths", { enumerable: true, get: function() {
        return lookahead_1.getLookaheadPaths;
      } });
      var llk_lookahead_1 = require_llk_lookahead();
      Object.defineProperty(exports2, "LLkLookaheadStrategy", { enumerable: true, get: function() {
        return llk_lookahead_1.LLkLookaheadStrategy;
      } });
      var errors_public_1 = require_errors_public();
      Object.defineProperty(exports2, "defaultParserErrorProvider", { enumerable: true, get: function() {
        return errors_public_1.defaultParserErrorProvider;
      } });
      var exceptions_public_1 = require_exceptions_public();
      Object.defineProperty(exports2, "EarlyExitException", { enumerable: true, get: function() {
        return exceptions_public_1.EarlyExitException;
      } });
      Object.defineProperty(exports2, "isRecognitionException", { enumerable: true, get: function() {
        return exceptions_public_1.isRecognitionException;
      } });
      Object.defineProperty(exports2, "MismatchedTokenException", { enumerable: true, get: function() {
        return exceptions_public_1.MismatchedTokenException;
      } });
      Object.defineProperty(exports2, "NotAllInputParsedException", { enumerable: true, get: function() {
        return exceptions_public_1.NotAllInputParsedException;
      } });
      Object.defineProperty(exports2, "NoViableAltException", { enumerable: true, get: function() {
        return exceptions_public_1.NoViableAltException;
      } });
      var lexer_errors_public_1 = require_lexer_errors_public();
      Object.defineProperty(exports2, "defaultLexerErrorProvider", { enumerable: true, get: function() {
        return lexer_errors_public_1.defaultLexerErrorProvider;
      } });
      var gast_1 = require_api2();
      Object.defineProperty(exports2, "Alternation", { enumerable: true, get: function() {
        return gast_1.Alternation;
      } });
      Object.defineProperty(exports2, "Alternative", { enumerable: true, get: function() {
        return gast_1.Alternative;
      } });
      Object.defineProperty(exports2, "NonTerminal", { enumerable: true, get: function() {
        return gast_1.NonTerminal;
      } });
      Object.defineProperty(exports2, "Option", { enumerable: true, get: function() {
        return gast_1.Option;
      } });
      Object.defineProperty(exports2, "Repetition", { enumerable: true, get: function() {
        return gast_1.Repetition;
      } });
      Object.defineProperty(exports2, "RepetitionMandatory", { enumerable: true, get: function() {
        return gast_1.RepetitionMandatory;
      } });
      Object.defineProperty(exports2, "RepetitionMandatoryWithSeparator", { enumerable: true, get: function() {
        return gast_1.RepetitionMandatoryWithSeparator;
      } });
      Object.defineProperty(exports2, "RepetitionWithSeparator", { enumerable: true, get: function() {
        return gast_1.RepetitionWithSeparator;
      } });
      Object.defineProperty(exports2, "Rule", { enumerable: true, get: function() {
        return gast_1.Rule;
      } });
      Object.defineProperty(exports2, "Terminal", { enumerable: true, get: function() {
        return gast_1.Terminal;
      } });
      var gast_2 = require_api2();
      Object.defineProperty(exports2, "serializeGrammar", { enumerable: true, get: function() {
        return gast_2.serializeGrammar;
      } });
      Object.defineProperty(exports2, "serializeProduction", { enumerable: true, get: function() {
        return gast_2.serializeProduction;
      } });
      Object.defineProperty(exports2, "GAstVisitor", { enumerable: true, get: function() {
        return gast_2.GAstVisitor;
      } });
      var cst_dts_gen_1 = require_api3();
      Object.defineProperty(exports2, "generateCstDts", { enumerable: true, get: function() {
        return cst_dts_gen_1.generateCstDts;
      } });
      function clearCache2() {
        console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n	 It performs no action other than printing this message.\n	 Please avoid using it as it will be completely removed in the future");
      }
      exports2.clearCache = clearCache2;
      var render_public_1 = require_render_public();
      Object.defineProperty(exports2, "createSyntaxDiagramsCode", { enumerable: true, get: function() {
        return render_public_1.createSyntaxDiagramsCode;
      } });
      var Parser2 = function() {
        function Parser3() {
          throw new Error("The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	\nSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0");
        }
        return Parser3;
      }();
      exports2.Parser = Parser2;
    }
  });

  // node_modules/solid-js/dist/solid.js
  var sharedConfig = {};
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }
  var equalFn = (a, b) => a === b;
  var $PROXY = Symbol("solid-proxy");
  var $TRACK = Symbol("solid-track");
  var $DEVCOMP = Symbol("solid-dev-component");
  var signalOptions = {
    equals: equalFn
  };
  var ERROR = null;
  var runEffects = runQueue;
  var STALE = 1;
  var PENDING = 2;
  var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var Owner = null;
  var Transition = null;
  var Scheduler = null;
  var ExternalSourceFactory = null;
  var Listener = null;
  var Updates = null;
  var Effects = null;
  var ExecCount = 0;
  var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
  function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || void 0
    };
    const setter = (value2) => {
      if (typeof value2 === "function") {
        if (Transition && Transition.running && Transition.sources.has(s))
          value2 = value2(s.tValue);
        else
          value2 = value2(s.value);
      }
      return writeSignal(s, value2);
    };
    return [readSignal.bind(s), setter];
  }
  function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running)
      Updates.push(c);
    else
      updateComputation(c);
  }
  function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && lookup(Owner, SuspenseContext.id);
    if (s)
      c.suspense = s;
    c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
  }
  function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || void 0;
    if (Scheduler && Transition && Transition.running) {
      c.tState = STALE;
      Updates.push(c);
    } else
      updateComputation(c);
    return readSignal.bind(c);
  }
  function untrack(fn) {
    const listener = Listener;
    Listener = null;
    try {
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return (prevValue) => {
      let input;
      if (isArray) {
        input = Array(deps.length);
        for (let i = 0; i < deps.length; i++)
          input[i] = deps[i]();
      } else
        input = deps();
      if (defer) {
        defer = false;
        return void 0;
      }
      const result = untrack(() => fn(input, prevInput, prevValue));
      prevInput = input;
      return result;
    };
  }
  function onCleanup(fn) {
    if (Owner === null)
      ;
    else if (Owner.cleanups === null)
      Owner.cleanups = [fn];
    else
      Owner.cleanups.push(fn);
    return fn;
  }
  function startTransition(fn) {
    if (Transition && Transition.running) {
      fn();
      return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(() => {
      Listener = l;
      Owner = o;
      let t;
      if (Scheduler || SuspenseContext) {
        t = Transition || (Transition = {
          sources: /* @__PURE__ */ new Set(),
          effects: [],
          promises: /* @__PURE__ */ new Set(),
          disposed: /* @__PURE__ */ new Set(),
          queue: /* @__PURE__ */ new Set(),
          running: true
        });
        t.done || (t.done = new Promise((res) => t.resolve = res));
        t.running = true;
      }
      runUpdates(fn, false);
      Listener = Owner = null;
      return t ? t.done : void 0;
    });
  }
  function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
      id,
      Provider: createProvider(id),
      defaultValue
    };
  }
  function children(fn) {
    const children2 = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children2()));
    memo.toArray = () => {
      const c = memo();
      return Array.isArray(c) ? c : c != null ? [c] : [];
    };
    return memo;
  }
  var SuspenseContext;
  function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
      if (!runningTransition && this.state === STALE || runningTransition && this.tState === STALE)
        updateComputation(this);
      else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    if (runningTransition && Transition.sources.has(this))
      return this.tValue;
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      if (Transition) {
        const TransitionRunning = Transition.running;
        if (TransitionRunning || !isComp && Transition.sources.has(node)) {
          Transition.sources.add(node);
          node.tValue = value;
        }
        if (!TransitionRunning)
          node.value = value;
      } else
        node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i = 0; i < node.observers.length; i += 1) {
            const o = node.observers[i];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o))
              continue;
            if (TransitionRunning && !o.tState || !TransitionRunning && !o.state) {
              if (o.pure)
                Updates.push(o);
              else
                Effects.push(o);
              if (o.observers)
                markDownstream(o);
            }
            if (TransitionRunning)
              o.tState = STALE;
            else
              o.state = STALE;
          }
          if (Updates.length > 1e6) {
            Updates = [];
            if (false)
              ;
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn)
      return;
    cleanNode(node);
    const owner = Owner, listener = Listener, time = ExecCount;
    Listener = Owner = node;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
    if (Transition && !Transition.running && Transition.sources.has(node)) {
      queueMicrotask(() => {
        runUpdates(() => {
          Transition && (Transition.running = true);
          Listener = Owner = node;
          runComputation(node, node.tValue, time);
          Listener = Owner = null;
        }, false);
      });
    }
    Listener = listener;
    Owner = owner;
  }
  function runComputation(node, value, time) {
    let nextValue;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure)
        Transition && Transition.running ? node.tState = STALE : node.state = STALE;
      handleError(err);
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue, true);
      } else if (Transition && Transition.running && node.pure) {
        Transition.sources.add(node);
        node.tValue = nextValue;
      } else
        node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
      fn,
      state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: null,
      pure
    };
    if (Transition && Transition.running) {
      c.state = 0;
      c.tState = state;
    }
    if (Owner === null)
      ;
    else if (Owner !== UNOWNED) {
      if (Transition && Transition.running && Owner.pure) {
        if (!Owner.tOwned)
          Owner.tOwned = [c];
        else
          Owner.tOwned.push(c);
      } else {
        if (!Owner.owned)
          Owner.owned = [c];
        else
          Owner.owned.push(c);
      }
    }
    if (ExternalSourceFactory) {
      const [track, trigger] = createSignal(void 0, {
        equals: false
      });
      const ordinary = ExternalSourceFactory(c.fn, trigger);
      onCleanup(() => ordinary.dispose());
      const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
      const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
      c.fn = (x) => {
        track();
        return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
      };
    }
    return c;
  }
  function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if (!runningTransition && node.state === 0 || runningTransition && node.tState === 0)
      return;
    if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING)
      return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback))
      return node.suspense.effects.push(node);
    const ancestors = [node];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
      if (runningTransition && Transition.disposed.has(node))
        return;
      if (!runningTransition && node.state || runningTransition && node.tState)
        ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
      node = ancestors[i];
      if (runningTransition) {
        let top = node, prev = ancestors[i + 1];
        while ((top = top.owner) && top !== prev) {
          if (Transition.disposed.has(top))
            return;
        }
      }
      if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) {
        updateComputation(node);
      } else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates)
      return fn();
    let wait = false;
    if (!init)
      Updates = [];
    if (Effects)
      wait = true;
    else
      Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!Updates)
        Effects = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      if (Scheduler && Transition && Transition.running)
        scheduleQueue(Updates);
      else
        runQueue(Updates);
      Updates = null;
    }
    if (wait)
      return;
    let res;
    if (Transition) {
      if (!Transition.promises.size && !Transition.queue.size) {
        const sources = Transition.sources;
        const disposed = Transition.disposed;
        Effects.push.apply(Effects, Transition.effects);
        res = Transition.resolve;
        for (const e2 of Effects) {
          "tState" in e2 && (e2.state = e2.tState);
          delete e2.tState;
        }
        Transition = null;
        runUpdates(() => {
          for (const d of disposed)
            cleanNode(d);
          for (const v of sources) {
            v.value = v.tValue;
            if (v.owned) {
              for (let i = 0, len = v.owned.length; i < len; i++)
                cleanNode(v.owned[i]);
            }
            if (v.tOwned)
              v.owned = v.tOwned;
            delete v.tValue;
            delete v.tOwned;
            v.tState = 0;
          }
          setTransPending(false);
        }, false);
      } else if (Transition.running) {
        Transition.running = false;
        Transition.effects.push.apply(Transition.effects, Effects);
        Effects = null;
        setTransPending(true);
        return;
      }
    }
    const e = Effects;
    Effects = null;
    if (e.length)
      runUpdates(() => runEffects(e), false);
    if (res)
      res();
  }
  function runQueue(queue) {
    for (let i = 0; i < queue.length; i++)
      runTop(queue[i]);
  }
  function scheduleQueue(queue) {
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      const tasks = Transition.queue;
      if (!tasks.has(item)) {
        tasks.add(item);
        Scheduler(() => {
          tasks.delete(item);
          runUpdates(() => {
            Transition.running = true;
            runTop(item);
          }, false);
          Transition && (Transition.running = false);
        });
      }
    }
  }
  function runUserEffects(queue) {
    let i, userLength = 0;
    for (i = 0; i < queue.length; i++) {
      const e = queue[i];
      if (!e.user)
        runTop(e);
      else
        queue[userLength++] = e;
    }
    if (sharedConfig.context)
      setHydrateContext();
    for (i = 0; i < userLength; i++)
      runTop(queue[i]);
  }
  function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition)
      node.tState = 0;
    else
      node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
      const source = node.sources[i];
      if (source.sources) {
        if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
          if (source !== ignore)
            runTop(source);
        } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING)
          lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i = 0; i < node.observers.length; i += 1) {
      const o = node.observers[i];
      if (!runningTransition && !o.state || runningTransition && !o.tState) {
        if (runningTransition)
          o.tState = PENDING;
        else
          o.state = PENDING;
        if (o.pure)
          Updates.push(o);
        else
          Effects.push(o);
        o.observers && markDownstream(o);
      }
    }
  }
  function cleanNode(node) {
    let i;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
          const n = obs.pop(), s = source.observerSlots.pop();
          if (index < obs.length) {
            n.sourceSlots[s] = index;
            obs[index] = n;
            source.observerSlots[index] = s;
          }
        }
      }
    }
    if (Transition && Transition.running && node.pure) {
      if (node.tOwned) {
        for (i = 0; i < node.tOwned.length; i++)
          cleanNode(node.tOwned[i]);
        delete node.tOwned;
      }
      reset(node, true);
    } else if (node.owned) {
      for (i = 0; i < node.owned.length; i++)
        cleanNode(node.owned[i]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i = 0; i < node.cleanups.length; i++)
        node.cleanups[i]();
      node.cleanups = null;
    }
    if (Transition && Transition.running)
      node.tState = 0;
    else
      node.state = 0;
    node.context = null;
  }
  function reset(node, top) {
    if (!top) {
      node.tState = 0;
      Transition.disposed.add(node);
    }
    if (node.owned) {
      for (let i = 0; i < node.owned.length; i++)
        reset(node.owned[i]);
    }
  }
  function castError(err) {
    if (err instanceof Error || typeof err === "string")
      return err;
    return new Error("Unknown error");
  }
  function handleError(err) {
    err = castError(err);
    const fns = ERROR && lookup(Owner, ERROR);
    if (!fns)
      throw err;
    for (const f of fns)
      f(err);
  }
  function lookup(owner, key) {
    return owner ? owner.context && owner.context[key] !== void 0 ? owner.context[key] : lookup(owner.owner, key) : void 0;
  }
  function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length)
      return resolveChildren(children2());
    if (Array.isArray(children2)) {
      const results = [];
      for (let i = 0; i < children2.length; i++) {
        const result = resolveChildren(children2[i]);
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
      }
      return results;
    }
    return children2;
  }
  function createProvider(id, options) {
    return function provider(props) {
      let res;
      createRenderEffect(() => res = untrack(() => {
        Owner.context = {
          [id]: props.value
        };
        return children(() => props.children);
      }), void 0);
      return res;
    };
  }
  var FALLBACK = Symbol("fallback");
  var SuspenseListContext = createContext();

  // frontend/helpers.js
  function sethtml(parent, ...children2) {
    parent.innerHTML = "";
    for (let child of children2) {
      parent.appendChild(child);
    }
  }
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  function inputCursorAtBeginning(input) {
    return input.selectionStart === 0 && input.selectionEnd === 0;
  }
  function contentEditableCursorAtBeginning(div) {
    const selection = document.getSelection();
    console.log("selection", selection);
    return selection.isCollapsed && (div.firstChild && div.firstChild.contains(selection.anchorNode) || div.firstChild === selection.anchorNode || div === selection.anchorNode) && selection.anchorOffset === 0;
  }
  function insertTextAtCaret(text) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    selection.collapseToEnd();
  }

  // node_modules/chevrotain/lib_esm/api_esm.mjs
  var api_esm_exports = {};
  __export(api_esm_exports, {
    Alternation: () => Alternation,
    Alternative: () => Alternative,
    CstParser: () => CstParser,
    EMPTY_ALT: () => EMPTY_ALT,
    EOF: () => EOF,
    EarlyExitException: () => EarlyExitException,
    EmbeddedActionsParser: () => EmbeddedActionsParser,
    GAstVisitor: () => GAstVisitor,
    LLkLookaheadStrategy: () => LLkLookaheadStrategy,
    Lexer: () => Lexer,
    LexerDefinitionErrorType: () => LexerDefinitionErrorType,
    MismatchedTokenException: () => MismatchedTokenException,
    NoViableAltException: () => NoViableAltException,
    NonTerminal: () => NonTerminal,
    NotAllInputParsedException: () => NotAllInputParsedException,
    Option: () => Option,
    Parser: () => Parser,
    ParserDefinitionErrorType: () => ParserDefinitionErrorType,
    Repetition: () => Repetition,
    RepetitionMandatory: () => RepetitionMandatory,
    RepetitionMandatoryWithSeparator: () => RepetitionMandatoryWithSeparator,
    RepetitionWithSeparator: () => RepetitionWithSeparator,
    Rule: () => Rule,
    Terminal: () => Terminal,
    VERSION: () => VERSION,
    clearCache: () => clearCache,
    createSyntaxDiagramsCode: () => createSyntaxDiagramsCode,
    createToken: () => createToken,
    createTokenInstance: () => createTokenInstance,
    default: () => api_esm_default,
    defaultLexerErrorProvider: () => defaultLexerErrorProvider,
    defaultParserErrorProvider: () => defaultParserErrorProvider,
    generateCstDts: () => generateCstDts,
    getLookaheadPaths: () => getLookaheadPaths,
    isRecognitionException: () => isRecognitionException,
    serializeGrammar: () => serializeGrammar,
    serializeProduction: () => serializeProduction,
    tokenLabel: () => tokenLabel,
    tokenMatcher: () => tokenMatcher,
    tokenName: () => tokenName
  });
  var import_api = __toESM(require_api4(), 1);
  var api_esm_default = import_api.default;
  var Alternation = import_api.default.Alternation;
  var Alternative = import_api.default.Alternative;
  var CstParser = import_api.default.CstParser;
  var EMPTY_ALT = import_api.default.EMPTY_ALT;
  var EOF = import_api.default.EOF;
  var EarlyExitException = import_api.default.EarlyExitException;
  var EmbeddedActionsParser = import_api.default.EmbeddedActionsParser;
  var GAstVisitor = import_api.default.GAstVisitor;
  var LLkLookaheadStrategy = import_api.default.LLkLookaheadStrategy;
  var Lexer = import_api.default.Lexer;
  var LexerDefinitionErrorType = import_api.default.LexerDefinitionErrorType;
  var MismatchedTokenException = import_api.default.MismatchedTokenException;
  var NoViableAltException = import_api.default.NoViableAltException;
  var NonTerminal = import_api.default.NonTerminal;
  var NotAllInputParsedException = import_api.default.NotAllInputParsedException;
  var Option = import_api.default.Option;
  var Parser = import_api.default.Parser;
  var ParserDefinitionErrorType = import_api.default.ParserDefinitionErrorType;
  var Repetition = import_api.default.Repetition;
  var RepetitionMandatory = import_api.default.RepetitionMandatory;
  var RepetitionMandatoryWithSeparator = import_api.default.RepetitionMandatoryWithSeparator;
  var RepetitionWithSeparator = import_api.default.RepetitionWithSeparator;
  var Rule = import_api.default.Rule;
  var Terminal = import_api.default.Terminal;
  var VERSION = import_api.default.VERSION;
  var clearCache = import_api.default.clearCache;
  var createSyntaxDiagramsCode = import_api.default.createSyntaxDiagramsCode;
  var createToken = import_api.default.createToken;
  var createTokenInstance = import_api.default.createTokenInstance;
  var defaultLexerErrorProvider = import_api.default.defaultLexerErrorProvider;
  var defaultParserErrorProvider = import_api.default.defaultParserErrorProvider;
  var generateCstDts = import_api.default.generateCstDts;
  var getLookaheadPaths = import_api.default.getLookaheadPaths;
  var isRecognitionException = import_api.default.isRecognitionException;
  var serializeGrammar = import_api.default.serializeGrammar;
  var serializeProduction = import_api.default.serializeProduction;
  var tokenLabel = import_api.default.tokenLabel;
  var tokenMatcher = import_api.default.tokenMatcher;
  var tokenName = import_api.default.tokenName;

  // frontend/compiler.js
  var { createToken: createToken2, EmbeddedActionsParser: EmbeddedActionsParser2 } = api_esm_exports;
  var Find = createToken2({ name: "find", pattern: /find/ });
  var Add = createToken2({ name: "add", pattern: /add/ });
  var Colon = createToken2({ name: "lt", pattern: /:/ });
  var Lt = createToken2({ name: "lt", pattern: /</ });
  var Gt = createToken2({ name: "gt", pattern: />/ });
  var Comma = createToken2({ name: "comma", pattern: /,/ });
  var FieldAccess = createToken2({ name: "fieldAccess", pattern: /\.\w*/ });
  var OpenParen = createToken2({ name: "openParen", pattern: /\(/ });
  var CloseParen = createToken2({ name: "closeParen", pattern: /\)/ });
  var ObjectName = createToken2({ name: "objectName", pattern: /[A-Z]\w*/ });
  var Identifier = createToken2({ name: "identifier", pattern: /[a-z]\w*/ });
  var String2 = createToken2({ name: "string", pattern: /"([^"]|\\")*"/ });
  var Number = createToken2({ name: "number", pattern: /-?\d+/ });
  var Pipe = createToken2({ name: "pipe", pattern: /\|/ });
  var Whitespace = createToken2({
    name: "whitespace",
    pattern: /[\s\t\n]+/,
    group: Lexer.SKIPPED
  });
  var TOKENS = [
    Find,
    Add,
    ObjectName,
    Identifier,
    Pipe,
    FieldAccess,
    Comma,
    Whitespace,
    Lt,
    Colon,
    Gt,
    OpenParen,
    CloseParen,
    String2,
    Number
  ];
  var ApricotLexer = new Lexer(TOKENS);
  var ApricotParser = class extends EmbeddedActionsParser2 {
    constructor() {
      super(TOKENS);
      const $ = this;
      $.RULE("parseObjectLiteral", () => {
        let objectName = $.CONSUME(ObjectName).image;
        let args = {};
        $.CONSUME(OpenParen);
        $.MANY_SEP({
          SEP: Comma,
          DEF: () => {
            let key = $.CONSUME(Identifier).image;
            $.CONSUME(Colon);
            let arg = $.SUBRULE($.expression);
            args[key] = arg;
          }
        });
        $.CONSUME(CloseParen);
        return {
          object: {
            objectName,
            args
          }
        };
      });
      $.RULE("parseString", () => {
        let string = $.CONSUME(String2).image;
        return {
          string
        };
      });
      $.RULE("parseNumber", () => {
        let number = $.CONSUME(Number).image;
        return {
          number
        };
      });
      $.RULE("parseFind", () => {
        $.CONSUME(Find);
        let objectName = $.CONSUME(ObjectName).image;
        return {
          find: {
            objectName
          }
        };
      });
      $.RULE("parseFieldAccess", () => {
        let fieldAccess = $.CONSUME(FieldAccess).image.substring(1);
        return {
          fieldAccess
        };
      });
      $.RULE("parsePipes", () => {
        let pipes = [];
        $.AT_LEAST_ONE_SEP({
          SEP: Pipe,
          DEF: () => {
            $.OR([
              {
                ALT: () => {
                  let find = $.SUBRULE($.parseFind);
                  pipes.push(find);
                }
              },
              {
                ALT: () => {
                  let fieldAccess = $.SUBRULE($.parseFieldAccess);
                  pipes.push(fieldAccess);
                }
              },
              {
                ALT: () => {
                  let objectLiteral = $.SUBRULE($.parseObjectLiteral);
                  pipes.push(objectLiteral);
                }
              },
              {
                ALT: () => {
                  let string = $.SUBRULE($.parseString);
                  pipes.push(string);
                }
              },
              {
                ALT: () => {
                  let number = $.SUBRULE($.parseNumber);
                  pipes.push(number);
                }
              }
            ]);
          }
        });
        if (pipes.length === 1) {
          return pipes[0];
        } else {
          return {
            pipes
          };
        }
      });
      $.RULE("expression", () => {
        return $.SUBRULE($.parsePipes);
      });
      this.performSelfAnalysis();
    }
  };
  var parserInstance = new ApricotParser();

  // node_modules/bourbon-vanilla/jsx-runtime.js
  function Fragment(props, children2) {
    let fragment = document.createDocumentFragment();
    if (Array.isArray(children2)) {
      for (const child of children2 || []) {
        fragment.appendChild(child);
      }
    } else {
      fragment.appendChild(children2);
    }
    return fragment;
  }
  var appendChildren = (parent, children2) => {
    if (children2 === null || children2 === void 0)
      return;
    if (Array.isArray(children2)) {
      for (const child of children2) {
        appendChildren(parent, child);
      }
    } else {
      let child = children2;
      parent.appendChild(
        child?.nodeType ? child : document.createTextNode(child)
      );
    }
  };
  function jsx(tag, { children: children2, ...props }) {
    if (typeof tag === "function") {
      return tag(props, children2);
    }
    const element = document.createElement(tag);
    Object.entries(props || {}).forEach(([name, value]) => {
      if (name.startsWith("on") && name.toLowerCase() in window) {
        element.addEventListener(name.toLowerCase().substr(2), value);
      } else {
        element.setAttribute(name, value);
      }
    });
    appendChildren(element, children2);
    return element;
  }
  var jsxs = jsx;

  // frontend/main.jsx
  var initialValue = {
    stack: {
      type: "vertical",
      contents: [
        { text: { content: "apple" } },
        { text: { content: "banana" } },
        {
          stack: {
            type: "horizontal",
            contents: [
              { text: { content: "pear" } },
              { text: { content: "orange" } },
              { button: { content: "submit" } }
            ]
          }
        }
      ]
    }
  };
  var [currentlySelected, setCurrentlySelected] = createSignal(null);
  var lastSelected = null;
  createEffect(
    on(currentlySelected, (currentlySelected2) => {
      lastSelected?.classList?.remove("selected");
      currentlySelected2?.classList?.add("selected");
      if (currentlySelected2?.onSelected)
        currentlySelected2.onSelected();
      lastSelected = currentlySelected2;
    })
  );
  function removeWidget(div) {
    if (div.previousSibling) {
      setCurrentlySelected(div.previousSibling);
    } else {
      if (div.parentNode.classList.contains("component")) {
        setCurrentlySelected(div.parentNode);
      } else {
        return;
      }
    }
    div.remove();
  }
  function box(div) {
    let [margin, setMargin] = createSignal(20);
    let [padding, setPadding] = createSignal(10);
    let [borderWidth, setBorderWidth] = createSignal(1);
    let [borderColor, setBorderColor] = createSignal("#ffdb29");
    let [backgroundColor, setBackgroundColor] = createSignal();
    let [borderRadius, setBorderRadius] = createSignal(4);
    createEffect(() => {
      div.style.margin = margin() + "px";
    });
    createEffect(() => {
      div.style.padding = padding() + "px";
    });
    createEffect(() => {
      div.style.border = `${borderWidth()}px solid ${borderColor()}`;
      if (borderWidth() > 3) {
        div.classList.remove("no-border");
        div.classList.add("big-border");
      } else if (borderWidth() <= 0) {
        div.classList.remove("big-border");
        div.classList.add("no-border");
      } else {
        div.classList.remove("no-border");
        div.classList.remove("big-border");
      }
    });
    createEffect(() => {
      div.style.borderRadius = borderRadius() + "px";
    });
    createEffect(() => {
      div.style.backgroundColor = backgroundColor();
    });
    div.margin = margin;
    div.setMargin = setMargin;
    div.padding = padding;
    div.setPadding = setPadding;
    div.borderWidth = borderWidth;
    div.setBorderWidth = setBorderWidth;
    div.borderColor = borderColor;
    div.setBorderColor = setBorderColor;
    div.backgroundColor = backgroundColor;
    div.setBackgroundColor = setBackgroundColor;
    div.borderRadius = borderRadius;
    div.setBorderRadius = setBorderRadius;
  }
  function Stack({ contents, type: initialType }) {
    const [type, setType] = createSignal(initialType);
    let childElements = [];
    for (let child of contents) {
      childElements.push(/* @__PURE__ */ jsx(Value, { ...child }));
    }
    let div = /* @__PURE__ */ jsx(
      "div",
      {
        class: "component stack",
        tabIndex: "0",
        onFocus: () => setCurrentlySelected(div),
        onClick: (e) => {
          if (e.target === div) {
            setCurrentlySelected(div);
          }
        },
        children: childElements
      }
    );
    createEffect(() => {
      div.classList.toggle("vertical", type() === "vertical");
      div.classList.toggle("horizontal", type() !== "vertical");
    });
    div.setType = setType;
    div.type = type;
    div.name = "stack";
    div.backspacePressed = (e) => {
      removeWidget(div);
      e.preventDefault();
    };
    div.ondblclick = (e) => {
      if (e.target === div) {
        let chooser = Chooser({ lastSelected: div });
        div.appendChild(chooser);
      }
    };
    box(div);
    return div;
  }
  function Chooser({ lastSelected: lastSelected2 }) {
    let div, input;
    function closeChooser() {
      setCurrentlySelected(lastSelected2);
      try {
        div.remove();
      } catch (e) {
        console.log("error removing chooser", e);
      }
    }
    function insertStack() {
      let stack = /* @__PURE__ */ jsx(Stack, { type: "vertical", contents: [] });
      insertAfter(div, stack);
      try {
        div.remove();
      } catch (e) {
        console.log("error removing chooser", e);
      }
      window.getSelection().removeAllRanges();
      setCurrentlySelected(stack);
    }
    function insertText() {
      let text = /* @__PURE__ */ jsx(Text, { content: "" });
      insertAfter(div, text);
      try {
        div.remove();
      } catch (e) {
        console.log("error removing chooser", e);
      }
      window.getSelection().removeAllRanges();
      setCurrentlySelected(text);
    }
    function insertButton() {
      console.log("trying to insert a button!");
      let button = /* @__PURE__ */ jsx(Button, { content: "submit" });
      insertAfter(div, button);
      try {
        div.remove();
      } catch (e) {
        console.log("error removing chooser", e);
      }
      window.getSelection().removeAllRanges();
      setCurrentlySelected(button);
    }
    let lines = [
      /* @__PURE__ */ jsx(
        "div",
        {
          class: "line",
          onMouseDown: (e) => {
            insertStack();
            e.preventDefault();
            e.stopPropagation();
          },
          children: "stack"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          class: "line",
          onMouseDown: (e) => {
            insertText();
            e.preventDefault();
            e.stopPropagation();
          },
          children: "text"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          class: "line",
          onMouseDown: (e) => {
            insertButton();
            e.preventDefault();
            e.stopPropagation();
          },
          children: "button"
        }
      )
    ];
    let linesContainer = /* @__PURE__ */ jsx("div", { class: "lines", children: lines });
    let filterLines = () => lines.filter((line) => line.textContent.includes(input.value));
    input = /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        onBlur: closeChooser,
        onKeyDown: (e) => {
          if (e.key === "Escape") {
            closeChooser();
            e.preventDefault();
          } else if (e.key === "Backspace" && input.value === "") {
            closeChooser();
            e.preventDefault();
            e.stopPropagation();
          } else if (e.key === "Enter") {
            e.preventDefault();
            let results = filterLines();
            if (results.length > 0) {
              let choice = results[0];
              if (choice.textContent === "stack") {
                insertStack();
              } else if (choice.textContent === "text") {
                insertText();
              } else if (choice.textContent === "button") {
                insertButton();
              }
            }
          }
        },
        onKeyUp: (e) => {
          let value = e.target.value;
          let results = filterLines();
          if (results.length === 0) {
            sethtml(linesContainer, /* @__PURE__ */ jsx("div", { children: "no results" }));
          } else {
            sethtml(linesContainer, ...results);
          }
        }
      }
    );
    div = /* @__PURE__ */ jsxs("div", { class: "chooser", children: [
      input,
      linesContainer
    ] });
    setCurrentlySelected(null);
    setTimeout(() => input.focus(), 10);
    return div;
  }
  var controlPressed = false;
  function slashOpensChooser(e, div, input) {
    if (e.key === "\\" && !controlPressed) {
      e.preventDefault();
      insertAfter(div, /* @__PURE__ */ jsx(Chooser, { lastSelected: div }));
    } else if (e.key === "\\" && controlPressed) {
      let start = input.selectionStart;
      let end = input.selectionEnd;
      let value = input.value;
      input.value = value.slice(0, start) + "\\" + value.slice(end);
      input.selectionStart = input.selectionEnd = start + 1;
    }
  }
  function slashOpensChooserContentEditable(e, div) {
    if (e.key === "\\" && !controlPressed) {
      e.preventDefault();
      e.stopPropagation();
      console.log("here now");
      insertAfter(div, /* @__PURE__ */ jsx(Chooser, { lastSelected: div }));
    } else if (e.key === "\\" && controlPressed) {
      insertTextAtCaret("\\");
      e.preventDefault();
      e.stopPropagation();
    }
  }
  function doubleClickOpensChooser(div) {
    div.ondblclick = (e) => {
      console.log("doubleclick");
      insertAfter(div, /* @__PURE__ */ jsx(Chooser, { lastSelected: div }));
    };
  }
  function Text({ content: initialContent }) {
    let div;
    div = /* @__PURE__ */ jsx(
      "div",
      {
        class: "component text",
        contentEditable: "true",
        onClick: (e) => setCurrentlySelected(div),
        onFocus: () => setCurrentlySelected(div),
        onKeyDown: (e) => {
          if (e.key === "Backspace" && contentEditableCursorAtBeginning(div)) {
            removeWidget(div);
            e.preventDefault(e);
            e.stopPropagation();
          } else if (e.key === "Enter" && !e.customDispatch) {
            const newEvent = new KeyboardEvent("keydown", { key: "Enter" });
            newEvent.customDispatch = true;
            div.dispatchEvent(newEvent);
          } else {
            if (window.getSelection().type !== "None")
              slashOpensChooserContentEditable(e, div);
          }
        },
        children: initialContent
      }
    );
    div.name = "text";
    box(div);
    doubleClickOpensChooser(div);
    div.onSelected = () => {
      const selection = window.getSelection();
      if (!div.contains(selection.anchorNode) && div !== selection.anchorNode) {
        console.log("doing the range thing!!");
        const range = document.createRange();
        let endIndex = div.lastChild ? div.lastChild.length : 0;
        let endNode = div.lastChild || div;
        range.setStart(endNode, endIndex);
        range.setEnd(endNode, endIndex);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
    return div;
  }
  function Button({ content: initialContent }) {
    let div, button, input;
    let [content, setContent] = createSignal(initialContent);
    function editingMode() {
      sethtml(div, input);
      input.focus();
      input.select();
      resizeToTextWidth();
    }
    function onFocus() {
      if (currentlySelected() !== div) {
        setCurrentlySelected(div);
        editingMode();
      }
    }
    button = /* @__PURE__ */ jsx("button", { onFocus, children: content() });
    function resizeToTextWidth() {
      input.style.width = 0;
      input.style.width = input.scrollWidth - 20 + "px";
    }
    input = /* @__PURE__ */ jsx(
      "input",
      {
        value: content(),
        onBlur: (e) => sethtml(div, button),
        onKeyDown: (e) => {
          if (e.key === "Backspace" && inputCursorAtBeginning(input)) {
            removeWidget(div);
            e.preventDefault(e);
            e.stopPropagation();
          } else {
            if (window.getSelection().type !== "None")
              slashOpensChooser(e, div, input);
          }
        },
        onInput: (e) => {
          setContent(e.target.value);
          resizeToTextWidth();
        }
      }
    );
    createEffect(() => {
      button.textContent = content();
    });
    div = /* @__PURE__ */ jsx(
      "div",
      {
        class: "component button",
        onClick: onFocus,
        children: button
      }
    );
    div.name = "button";
    doubleClickOpensChooser(div);
    box(div);
    div.onSelected = () => {
      editingMode();
    };
    return div;
  }
  function Value(value) {
    if (value.stack) {
      return /* @__PURE__ */ jsx(Stack, { ...value.stack });
    } else if (value.text) {
      return /* @__PURE__ */ jsx(Text, { ...value.text });
    } else if (value.button) {
      return /* @__PURE__ */ jsx(Button, { ...value.button });
    } else {
      throw "no such element type";
    }
  }
  function Apricot() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape")
        setCurrentlySelected(null);
    });
    let hovered = null;
    function setHovered(target) {
      if (target.classList.contains("component") && target !== hovered) {
        hovered?.classList.remove("hovered");
        target.classList.add("hovered");
        hovered = target;
      }
    }
    let value = /* @__PURE__ */ jsx(Value, { ...initialValue });
    setCurrentlySelected(value);
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { onMouseMove: (e) => setHovered(e.target), children: [
      /* @__PURE__ */ jsx("p", { children: "Page" }),
      /* @__PURE__ */ jsx("div", { class: "toplevel", children: value })
    ] }) });
  }
  window.onload = () => {
    document.getElementById("root").appendChild(/* @__PURE__ */ jsx(Apricot, {}));
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Control") {
      controlPressed = true;
    } else if (e.key === "h" && e.ctrlKey && currentlySelected()?.parentNode.classList.contains("component")) {
      let type = currentlySelected().parentNode.type();
      let newType = type === "horizontal" ? "vertical" : "horizontal";
      console.log(type, newType);
      currentlySelected().parentNode.setType(newType);
      e.preventDefault();
    } else if (currentlySelected()?.name === "stack") {
      if (e.key === "\\") {
        e.preventDefault();
        currentlySelected().appendChild(
          /* @__PURE__ */ jsx(Chooser, { lastSelected: currentlySelected() })
        );
      } else if (e.key === "Backspace") {
        if (currentlySelected() && currentlySelected().backspacePressed)
          currentlySelected().backspacePressed(e);
      }
    } else if (e.key === "Escape") {
      setCurrentlySelected(null);
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "Control") {
      controlPressed = false;
    }
  });
  document.addEventListener("click", (e) => {
    let toplevelValues = document.getElementsByClassName("toplevel");
    let inAToplevel = Array.from(toplevelValues).some(
      (value) => value.contains(e.target)
    );
    if (!inAToplevel) {
      setCurrentlySelected(null);
    }
  });
})();
