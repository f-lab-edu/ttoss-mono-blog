/**
 * pathname에서 세그먼트를 매칭하기 위한 정규 표현식
 * @type {RegExp}
 */
export const BASENAME_REGEXP = /\/(\w+(-*\w*)*)/;
/**
 * path parameter를 매칭하기 위한 정규 표현식
 * @type {RegExp}
 */
export const PARAMETER_REGEXP = /:(\w+)/g;
/**
 * 라우터와 매칭될 수 있도록 path parameter를 교체하기 위한 정규 표현식
 * @type {RegExp}
 */
export const URL_REGEXP = '([^\\/]+)';
