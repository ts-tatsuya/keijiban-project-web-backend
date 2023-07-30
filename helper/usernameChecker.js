function checkUsernameFormat(username) {

    let isValid = username.match(/^[a-zA-Z][a-zA-Z._0-9]*$/g);
    if (isValid) {
        return true;
    } else {
        return false;
    }

}


module.exports = { checkUsernameFormat };