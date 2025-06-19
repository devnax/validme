const isRequired = (value) => value !== undefined && value !== null && value !== '';
const minLength = (value, min) => (value === null || value === void 0 ? void 0 : value.length) >= min;
const maxLength = (value, max) => (value === null || value === void 0 ? void 0 : value.length) <= max;
const exactLength = (value, length) => (value === null || value === void 0 ? void 0 : value.length) === length;
const pattern = (value, regex) => regex.test(value);
// String Validations
const isEmail = (value) => pattern(value, /^[\w-\.]+@[\w-]+\.[a-z]{2,}$/i);
const isURL = (value) => pattern(value, /^(https?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/);
const isAlpha = (value) => pattern(value, /^[a-zA-Z]+$/);
const isAlphaNumeric = (value) => pattern(value, /^[a-zA-Z0-9]+$/);
const isSlug = (value) => pattern(value, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const isLowercase = (value) => value === (value === null || value === void 0 ? void 0 : value.toLowerCase());
const isUppercase = (value) => value === (value === null || value === void 0 ? void 0 : value.toUpperCase());
const isMixedCase = (value) => value !== (value === null || value === void 0 ? void 0 : value.toLowerCase()) && value !== (value === null || value === void 0 ? void 0 : value.toUpperCase());
const isStrongPassword = (value) => pattern(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const isMediumPassword = (value) => pattern(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/);
// Number Validations
const isNumeric = (value) => !isNaN(Number(value));
const isInteger = (value) => Number.isInteger(value);
const isFloat = (value) => Number(value) === value && !Number.isInteger(value);
const isPositive = (value) => value > 0;
const isNegative = (value) => value < 0;
const minValue = (value, min) => value >= min;
const maxValue = (value, max) => value <= max;
const inRange = (value, min, max) => value >= min && value <= max;
// Date/Time Validations
const isValidDate = (value) => !isNaN(new Date(value).getTime());
const minDate = (value, min) => new Date(value) >= new Date(min);
const maxDate = (value, max) => new Date(value) <= new Date(max);
const beforeDate = (value, date) => new Date(value) < new Date(date);
const afterDate = (value, date) => new Date(value) > new Date(date);
const isTime = (value) => pattern(value, /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/);
const isDateTime = (value) => {
    const [datePart, timePart] = value.split('T');
    return isValidDate(datePart) && isTime(timePart);
};
// Boolean Validations
const isBoolean = (value) => typeof value === 'boolean';
// Array Validations
const minItems = (value, min) => Array.isArray(value) && value.length >= min;
const maxItems = (value, max) => Array.isArray(value) && value.length <= max;
const uniqueItems = (value) => Array.isArray(value) && new Set(value).size === value.length;
const itemType = (value, typeCheckFn) => Array.isArray(value) && value.every(typeCheckFn);
// Object Validations
const hasRequiredKeys = (obj, keys) => keys.every((key) => obj.hasOwnProperty(key));
const keyType = (obj, key, typeCheckFn) => obj[key] && typeCheckFn(obj[key]);
const hasExactKeys = (obj, keys) => Object.keys(obj).length === keys.length && hasRequiredKeys(obj, keys);
const isEmptyObject = (obj) => Object.keys(obj).length === 0;
// File Validations
const isFileType = (fileName, extensions) => extensions.some((ext) => fileName.endsWith(ext));
const maxFileSize = (fileSize, max) => fileSize <= max;
const minFileSize = (fileSize, min) => fileSize >= min;
// Advanced Validations
const isCreditCard = (value) => pattern(value, /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/);
const isUUID = (value) => pattern(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
const isIPAddress = (value) => pattern(value, /^(\d{1,3}\.){3}\d{1,3}$/);
const isMACAddress = (value) => pattern(value, /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
const isJSON = (value) => {
    try {
        JSON.parse(value);
        return true;
    }
    catch (_a) {
        return false;
    }
};
const isHexadecimal = (value) => pattern(value, /^[0-9a-fA-F]+$/);
const isBase64 = (value) => pattern(value, /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/);export{afterDate,beforeDate,exactLength,hasExactKeys,hasRequiredKeys,inRange,isAlpha,isAlphaNumeric,isBase64,isBoolean,isCreditCard,isDateTime,isEmail,isEmptyObject,isFileType,isFloat,isHexadecimal,isIPAddress,isInteger,isJSON,isLowercase,isMACAddress,isMediumPassword,isMixedCase,isNegative,isNumeric,isPositive,isRequired,isSlug,isStrongPassword,isTime,isURL,isUUID,isUppercase,isValidDate,itemType,keyType,maxDate,maxFileSize,maxItems,maxLength,maxValue,minDate,minFileSize,minItems,minLength,minValue,pattern,uniqueItems};//# sourceMappingURL=index.mjs.map
