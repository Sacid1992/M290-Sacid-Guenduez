const validateLib = require('./ValidationLib');

/**
 * Validate form data
 * @param data
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateFormData(data) {
    // Check required fields
    let result = validateLib.checkRequired("firstName", data.firstName,);
    if (result.isNotValid) { return result; }


    result = validateLib.checkRequired("email", data.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", data.lastname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("street", data.street);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("city", data.city);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("canton", data.canton);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", data.phone);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("firstName", data.firstName, 3, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname", data.lastname, 3, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("street", data.street, 3, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("city", data.city, 3, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("canton", data.canton, 3, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("phone", data.phone, 3, 20);
    if (result.isNotValid) { return result; }


    //check email syntax
    result = validateLib.checkEmail("email", data.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateContact: validateFormData
}