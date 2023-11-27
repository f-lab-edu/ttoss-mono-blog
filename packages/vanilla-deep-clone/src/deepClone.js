// type check
import isSet from './isSet';
import isMap from './isMap';
import isDate from './isDate';
import isArray from './isArray';
import isObject from './isObject';
import isSymbol from './isSymbol';
import isRegExp from './isRegExp';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';
import isFunction from './isFunction';
import isTypedArray from './isTypedArray';
// copy
import copySet from './copySet';
import copyMap from './copyMap';
import copyDate from './copyDate';
import copyArray from './copyArray';
import copyObject from './copyObject';
import copySymbol from './copySymbol';
import copyFunction from './copyFunciton';
import copyTypedArray from './copyTypedArray';
import copyRegExp from './copyRegExp';

/** */
const copyValidations = [
  {
    validation: isSymbol,
    copy: copySymbol,
  },
  {
    validation: isArray,
    copy: copyArray,
  },
  {
    validation: isObject,
    copy: copyObject,
  },
  {
    validation: isSet,
    copy: copySet,
  },
  {
    validation: isMap,
    copy: copyMap,
  },
  {
    validation: isDate,
    copy: copyDate,
  },
  {
    validation: isRegExp,
    copy: copyRegExp,
  },
  {
    validation: isWeakMap,
    copy: (source) => source,
  },
  {
    validation: isWeakSet,
    copy: (source) => source,
  },
  {
    validation: isFunction,
    copy: copyFunction,
  },
  {
    validation: isTypedArray,
    copy: (source) => copyTypedArray(source, true),
  },
];

/**
 * 원본 객체에 대한 참조가 끊어진 깊은 복사를 수행한다.
 * @param {*} source
 * @returns {*}
 */
const deepClone = (source) => {
  if (!(source instanceof Object)) return source;

  const { copy } = copyValidations.find(({ validation }) => validation(source));

  if (!copy) throw new Error(`Validation for type '${source}' is not registered.`);
  else {
    const cloned = copy(source);

    Object.entries(cloned).forEach(([key]) => {
      cloned[key] = deepClone(cloned[key]);
    });

    return cloned;
  }
};

export default deepClone;
