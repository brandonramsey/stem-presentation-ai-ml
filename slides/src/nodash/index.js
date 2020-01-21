const REGEX_PROPERTY_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g; // Used to match a property names within property paths
const REGEX_ESCAPE_CHARACTER = /\\(\\)?/g; // Used to match backslashes in property paths

export const isUndefined = value => value === void 0;
export const isNull = value => value === null;
export const isNumber = value => typeof value === 'number';
export const isString = value => typeof value === 'string';
export const isArray = value => Array.isArray(value);
export const isSymbol = value => typeof value === 'symbol';
export const isBoolean = value => typeof value === 'boolean';
export const isFunction = value => typeof value === 'function';
export const isObject = value => !isNull(value) && typeof value === 'object';

export const prop = (key, fallback = void 0) => obj => {
  const result = obj[key];
  return isUndefined(result) ? fallback : result;
};

export const defaulter = (checkFunction) =>
  (value, fallback) =>
    (checkFunction(value) ? value : fallback);


/**
 * If _value_ is a number, return it. Otherwise return _fallback_.
 * @param {*} value
 * @param {number} fallback
 * @returns {number}
 */
export const defaultNumber = defaulter(isNumber);
export const defaultString = defaulter(isString);

export const isNil = input => isNull(input) || isUndefined(input);

export const omit = (...paths) => object => {
  if (isNil(object)) return {};
  const result = Object.assign({}, object);
  paths.forEach((path) => {
    delete result[path];
  });
  return result;
};

