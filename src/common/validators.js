export const requiredField = value => {
    if(!value){
        return 'Required Field';
    }
    else {
        return undefined
    }
}

// export const minLength = value =>
// value && value.length < 5 ? `Must be ${5} characters or more` : undefined

export const minLength = min => value => {
    if(value && value.length < min){
        return `Need min ${min} symbols`;
    }
    return undefined;
}

export const maxLength = max => value => {
    if(value && value.length > max){
        return `Need max ${max} symbols`;
    }
    return undefined;
}

export const validatePhoneNumber = value => {
    if((value && value.length > 0) && !verifyPhoneNumber(value)){
        return `Phone is not valid`;
    }
    return undefined;
}
function verifyPhoneNumber(phone) {
    var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return re.test(phone);
}

export const validateEmail = value => {
    if(!verifyEmail(value)){
        return `Email is not valid`;
    }
    return undefined;
}
function verifyEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}