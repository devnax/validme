This documentation provides an overview of all the functions available in the `validme` package, categorized into different sections. Each function is described along with its purpose and parameters.

## Package Information
- **Name:** validme
- **GitHub Repository:** [devnax/validme](https://github.com/devnax/validme)
- **NPM Package:** [validme](https://www.npmjs.com/package/validme)

## Table of Contents
- [Package Information](#package-information)
- [Table of Contents](#table-of-contents)
  - [Basic Validations](#basic-validations)
  - [String Validations](#string-validations)
  - [Number Validations](#number-validations)
  - [Date/Time Validations](#datetime-validations)
  - [Boolean Validations](#boolean-validations)
  - [Array Validations](#array-validations)
  - [Object Validations](#object-validations)
  - [File Validations](#file-validations)
  - [Advanced Validations](#advanced-validations)

---

### Basic Validations

| Function      | Description                                         | Parameters        |
| ------------- | --------------------------------------------------- | ----------------- |
| `isRequired`  | Checks if a value is defined and not empty.         | `value`           |
| `minLength`   | Validates that a string's length is at least `min`. | `value`, `min`    |
| `maxLength`   | Validates that a string's length is at most `max`.  | `value`, `max`    |
| `exactLength` | Validates that a string's length matches `length`.  | `value`, `length` |
| `pattern`     | Validates a string against a regex pattern.         | `value`, `regex`  |

---

### String Validations

| Function           | Description                                               | Parameters |
| ------------------ | --------------------------------------------------------- | ---------- |
| `isEmail`          | Validates an email address.                               | `value`    |
| `isURL`            | Validates a URL.                                          | `value`    |
| `isAlpha`          | Checks if a string contains only alphabets.               | `value`    |
| `isAlphaNumeric`   | Checks if a string contains only alphanumeric characters. | `value`    |
| `isSlug`           | Checks if a string is a valid slug.                       | `value`    |
| `isLowercase`      | Checks if a string is in lowercase.                       | `value`    |
| `isUppercase`      | Checks if a string is in uppercase.                       | `value`    |
| `isMixedCase`      | Checks if a string contains both uppercase and lowercase. | `value`    |
| `isStrongPassword` | Validates if a string is a strong password.               | `value`    |
| `isMediumPassword` | Validates if a string is a medium-strength password.      | `value`    |

---

### Number Validations

| Function     | Description                               | Parameters            |
| ------------ | ----------------------------------------- | --------------------- |
| `isNumeric`  | Checks if a value is a number.            | `value`               |
| `isInteger`  | Checks if a value is an integer.          | `value`               |
| `isFloat`    | Checks if a value is a float.             | `value`               |
| `isPositive` | Checks if a value is positive.            | `value`               |
| `isNegative` | Checks if a value is negative.            | `value`               |
| `minValue`   | Validates that a value is at least `min`. | `value`, `min`        |
| `maxValue`   | Validates that a value is at most `max`.  | `value`, `max`        |
| `inRange`    | Validates that a value is within a range. | `value`, `min`, `max` |

---

### Date/Time Validations

| Function      | Description                                      | Parameters      |
| ------------- | ------------------------------------------------ | --------------- |
| `isValidDate` | Checks if a value is a valid date.               | `value`         |
| `minDate`     | Checks if a date is on or after a minimum date.  | `value`, `min`  |
| `maxDate`     | Checks if a date is on or before a maximum date. | `value`, `max`  |
| `beforeDate`  | Checks if a date is before a specific date.      | `value`, `date` |
| `afterDate`   | Checks if a date is after a specific date.       | `value`, `date` |
| `isTime`      | Checks if a value is a valid time format.        | `value`         |
| `isDateTime`  | Checks if a value is a valid datetime.           | `value`         |

---

### Boolean Validations

| Function    | Description                     | Parameters |
| ----------- | ------------------------------- | ---------- |
| `isBoolean` | Checks if a value is a boolean. | `value`    |

---

### Array Validations

| Function      | Description                                           | Parameters             |
| ------------- | ----------------------------------------------------- | ---------------------- |
| `minItems`    | Validates that an array has at least `min` items.     | `value`, `min`         |
| `maxItems`    | Validates that an array has at most `max` items.      | `value`, `max`         |
| `uniqueItems` | Checks if all items in an array are unique.           | `value`                |
| `itemType`    | Checks if all items in an array satisfy a type check. | `value`, `typeCheckFn` |

---

### Object Validations

| Function          | Description                                  | Parameters                  |
| ----------------- | -------------------------------------------- | --------------------------- |
| `hasRequiredKeys` | Checks if an object contains required keys.  | `obj`, `keys`               |
| `keyType`         | Checks if a key in an object matches a type. | `obj`, `key`, `typeCheckFn` |
| `hasExactKeys`    | Checks if an object contains exact keys.     | `obj`, `keys`               |
| `isEmptyObject`   | Checks if an object is empty.                | `obj`                       |

---

### File Validations

| Function      | Description                               | Parameters               |
| ------------- | ----------------------------------------- | ------------------------ |
| `isFileType`  | Checks if a file is of an allowed type.   | `fileName`, `extensions` |
| `maxFileSize` | Checks if a file size is below a maximum. | `fileSize`, `max`        |
| `minFileSize` | Checks if a file size is above a minimum. | `fileSize`, `min`        |

---

### Advanced Validations

| Function        | Description                        | Parameters |
| --------------- | ---------------------------------- | ---------- |
| `isCreditCard`  | Validates a credit card number.    | `value`    |
| `isUUID`        | Validates a UUID.                  | `value`    |
| `isIPAddress`   | Validates an IP address.           | `value`    |
| `isMACAddress`  | Validates a MAC address.           | `value`    |
| `isJSON`        | Checks if a value is valid JSON.   | `value`    |
| `isHexadecimal` | Validates a hexadecimal string.    | `value`    |
| `isBase64`      | Validates a Base64-encoded string. | `value`    |

