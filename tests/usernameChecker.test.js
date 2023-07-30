const usernameChecker = require('../helper/usernameChecker');


test('Verify proper username', () => {

    expect(usernameChecker.checkUsernameFormat('tester')).toBe(true);
    expect(usernameChecker.checkUsernameFormat('tester1230')).toBe(true);
    expect(usernameChecker.checkUsernameFormat('tester_123')).toBe(true);
    expect(usernameChecker.checkUsernameFormat('tester_tester')).toBe(true);
    expect(usernameChecker.checkUsernameFormat('tester.tester')).toBe(true);
    expect(usernameChecker.checkUsernameFormat('tester.123')).toBe(true);

});

test('Deny username starts with number', () => {

    expect(usernameChecker.checkUsernameFormat('123tester')).toBe(false);

});

test('Deny username starts with period or underscore', () => {

    expect(usernameChecker.checkUsernameFormat('.tester')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('_tester')).toBe(false);

});

test('Deny asian characters or non-roman characters', () => {
    expect(usernameChecker.checkUsernameFormat('紅莉栖')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('홍리석')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('Курису')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('紅莉棲')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('كوريسو')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('คุริสุ')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('कुरीसु')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('კურისუ')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('קוריסו')).toBe(false);
    expect(usernameChecker.checkUsernameFormat('குரிசு')).toBe(false);
});