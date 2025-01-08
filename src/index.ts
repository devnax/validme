// Basic Validations
type ValidationFn<T = any> = (value: T, ...args: any[]) => boolean;

export const isRequired: ValidationFn<string | number | any> = (value) => value !== undefined && value !== null && value !== '';
export const minLength: ValidationFn<string> = (value, min: number) => value?.length >= min;
export const maxLength: ValidationFn<string> = (value, max: number) => value?.length <= max;
export const exactLength: ValidationFn<string> = (value, length: number) => value?.length === length;
export const pattern: ValidationFn<string> = (value, regex: RegExp) => regex.test(value);

// String Validations
export const isEmail: ValidationFn<string> = (value) => pattern(value, /^[\w-\.]+@[\w-]+\.[a-z]{2,}$/i);
export const isURL: ValidationFn<string> = (value) => pattern(value, /^(https?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/);
export const isAlpha: ValidationFn<string> = (value) => pattern(value, /^[a-zA-Z]+$/);
export const isAlphaNumeric: ValidationFn<string> = (value) => pattern(value, /^[a-zA-Z0-9]+$/);
export const isSlug: ValidationFn<string> = (value) => pattern(value, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
export const isLowercase: ValidationFn<string> = (value) => value === value?.toLowerCase();
export const isUppercase: ValidationFn<string> = (value) => value === value?.toUpperCase();
export const isMixedCase: ValidationFn<string> = (value) => value !== value?.toLowerCase() && value !== value?.toUpperCase();
export const isStrongPassword: ValidationFn<string> = (value) => pattern(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
export const isMediumPassword: ValidationFn<string> = (value) => pattern(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/);

// Number Validations
export const isNumeric: ValidationFn<string | number> = (value) => !isNaN(Number(value));
export const isInteger: ValidationFn<number> = (value) => Number.isInteger(value);
export const isFloat: ValidationFn<number> = (value) => Number(value) === value && !Number.isInteger(value);
export const isPositive: ValidationFn<number> = (value) => value > 0;
export const isNegative: ValidationFn<number> = (value) => value < 0;
export const minValue: ValidationFn<number> = (value, min: number) => value >= min;
export const maxValue: ValidationFn<number> = (value, max: number) => value <= max;
export const inRange: ValidationFn<number> = (value, min: number, max: number) => value >= min && value <= max;

// Date/Time Validations
export const isValidDate: ValidationFn<string | Date> = (value) => !isNaN(new Date(value).getTime());
export const minDate: ValidationFn<string | Date> = (value, min: string | Date) => new Date(value) >= new Date(min);
export const maxDate: ValidationFn<string | Date> = (value, max: string | Date) => new Date(value) <= new Date(max);
export const beforeDate: ValidationFn<string | Date> = (value, date: string | Date) => new Date(value) < new Date(date);
export const afterDate: ValidationFn<string | Date> = (value, date: string | Date) => new Date(value) > new Date(date);
export const isTime: ValidationFn<string> = (value) => pattern(value, /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/);
export const isDateTime: ValidationFn<string> = (value) => {
  const [datePart, timePart] = value.split('T');
  return isValidDate(datePart) && isTime(timePart);
};

// Boolean Validations
export const isBoolean: ValidationFn<any> = (value) => typeof value === 'boolean';

// Array Validations
export const minItems: ValidationFn<any[]> = (value, min: number) => Array.isArray(value) && value.length >= min;
export const maxItems: ValidationFn<any[]> = (value, max: number) => Array.isArray(value) && value.length <= max;
export const uniqueItems: ValidationFn<any[]> = (value) => Array.isArray(value) && new Set(value).size === value.length;
export const itemType: ValidationFn<any[]> = (value, typeCheckFn: ValidationFn) => Array.isArray(value) && value.every(typeCheckFn);

// Object Validations
export const hasRequiredKeys: ValidationFn<object> = (obj, keys: string[]) => keys.every((key) => obj.hasOwnProperty(key));
export const keyType: ValidationFn<object> = (obj, key: string, typeCheckFn: ValidationFn) => (obj as any)[key] && typeCheckFn((obj as any)[key]);
export const hasExactKeys: ValidationFn<object> = (obj, keys: string[]) => Object.keys(obj).length === keys.length && hasRequiredKeys(obj, keys);
export const isEmptyObject: ValidationFn<object> = (obj) => Object.keys(obj).length === 0;

// File Validations
export const isFileType: ValidationFn<string> = (fileName, extensions: string[]) => extensions.some((ext) => fileName.endsWith(ext));
export const maxFileSize: ValidationFn<number> = (fileSize, max: number) => fileSize <= max;
export const minFileSize: ValidationFn<number> = (fileSize, min: number) => fileSize >= min;

// Advanced Validations
export const isCreditCard: ValidationFn<string> = (value) => pattern(value, /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/);
export const isUUID: ValidationFn<string> = (value) => pattern(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
export const isIPAddress: ValidationFn<string> = (value) => pattern(value, /^(\d{1,3}\.){3}\d{1,3}$/);
export const isMACAddress: ValidationFn<string> = (value) => pattern(value, /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
export const isJSON: ValidationFn<string> = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};
export const isHexadecimal: ValidationFn<string> = (value) => pattern(value, /^[0-9a-fA-F]+$/);
export const isBase64: ValidationFn<string> = (value) => pattern(value, /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/);