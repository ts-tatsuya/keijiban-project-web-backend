function checkEmailFormat(email) {

    let isValid = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (isValid) {
        isValid = undefined;
        const emailSplit = email.split('@');
        const domain = emailSplit[1];
        const address = emailSplit[0];
        if (domain.length > 63 || address > 255) {
            return false;
        }

        const domainSplit = domain.split('.');
        const domainName = domainSplit[0];
        const domainExtRegExp = new RegExp(`^${domainName}`, 'g')
        const domainExt = domain.replace(domainExtRegExp, '');
        if (domainExt.length < 2) {
            return false;
        }

        return true;
    } else {
        return false;
    }
}

module.exports = { checkEmailFormat };