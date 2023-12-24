type ArrayFormatType = 'indices' | 'brackets' | 'repeat' | 'comma';

const arrayPrefixGenerators: {
  [key in Exclude<ArrayFormatType, 'comma'>]: (
    prefix: string,
    index?: number
  ) => string;
} = {
  indices: (prefix, index) => `${prefix}[${index}]`,
  brackets: (prefix) => `${prefix}[]`,
  repeat: (prefix) => prefix,
};

const serialize = (value: unknown) => {
  if (value === null) return '';
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'number' || typeof value === 'boolean') return value;

  return String(value);
};

const encodeQueryParam = (key: string | number | boolean, value: unknown) => {
  const encodedKey = encodeURIComponent(key);
  const encodedValue = encodeURIComponent(serialize(value));

  return `${encodedKey}=${encodedValue}`;
};

const addArrayQueryParam = (key: string, values: unknown[], arrayFormat: ArrayFormatType) => {
  if (arrayFormat === 'comma') return encodeQueryParam(key, values);

  return values
    .map((value, index) => encodeQueryParam(arrayPrefixGenerators[arrayFormat](key, index), value))
    .join('&');
};

const addObjectQueryParam = (parentKey: string, params: object) => (
  Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => paramsSerializer({ [`${parentKey}[${key}]`]: value }))
    .join('&')
);

export const paramsSerializer = (params: object = {}, arrayFormat: ArrayFormatType = 'repeat'): string => (
  Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      if (Array.isArray(value)) return addArrayQueryParam(key, value, arrayFormat);
      if (value instanceof Object) return addObjectQueryParam(key, value);
      return encodeQueryParam(key, value);
    })
    .join('&')
);
