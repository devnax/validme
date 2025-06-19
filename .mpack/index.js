'use strict';Object.defineProperty(exports,'__esModule',{value:true});const isRequired = (value) => value !== undefined && value !== null && value !== '';
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
const isBase64 = (value) => pattern(value, /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/);exports.afterDate=afterDate;exports.beforeDate=beforeDate;exports.exactLength=exactLength;exports.hasExactKeys=hasExactKeys;exports.hasRequiredKeys=hasRequiredKeys;exports.inRange=inRange;exports.isAlpha=isAlpha;exports.isAlphaNumeric=isAlphaNumeric;exports.isBase64=isBase64;exports.isBoolean=isBoolean;exports.isCreditCard=isCreditCard;exports.isDateTime=isDateTime;exports.isEmail=isEmail;exports.isEmptyObject=isEmptyObject;exports.isFileType=isFileType;exports.isFloat=isFloat;exports.isHexadecimal=isHexadecimal;exports.isIPAddress=isIPAddress;exports.isInteger=isInteger;exports.isJSON=isJSON;exports.isLowercase=isLowercase;exports.isMACAddress=isMACAddress;exports.isMediumPassword=isMediumPassword;exports.isMixedCase=isMixedCase;exports.isNegative=isNegative;exports.isNumeric=isNumeric;exports.isPositive=isPositive;exports.isRequired=isRequired;exports.isSlug=isSlug;exports.isStrongPassword=isStrongPassword;exports.isTime=isTime;exports.isURL=isURL;exports.isUUID=isUUID;exports.isUppercase=isUppercase;exports.isValidDate=isValidDate;exports.itemType=itemType;exports.keyType=keyType;exports.maxDate=maxDate;exports.maxFileSize=maxFileSize;exports.maxItems=maxItems;exports.maxLength=maxLength;exports.maxValue=maxValue;exports.minDate=minDate;exports.minFileSize=minFileSize;exports.minItems=minItems;exports.minLength=minLength;exports.minValue=minValue;exports.pattern=pattern;exports.uniqueItems=uniqueItems;//# sourceMappingURL=index.js.map
