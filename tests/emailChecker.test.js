const emailChecker = require('../helper/emailChecker');


test('Return true when email has a proper format', () => {

    expect(emailChecker.checkEmailFormat('tester@gmail.com')).toBe(true);

});

test('Return false when domain is missing', () => {
    expect(emailChecker.checkEmailFormat('tester@')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@gmail')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@gmail.')).toBe(false);
});

test('Return false when domain name has wrong format', () => {
    expect(emailChecker.checkEmailFormat('tester@__.___')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@!gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@.....')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@......com')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@gmail....')).toBe(false);
});

test('Return false when @ is missing', () => {
    expect(emailChecker.checkEmailFormat('testergmail.com')).toBe(false);
});

test('Return false when email has space', () => {

    expect(emailChecker.checkEmailFormat('tester tester@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@g mail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('tester@gmail.co m')).toBe(false);
    expect(emailChecker.checkEmailFormat('tes ter tester@g mail.co m')).toBe(false);
});

test('Return false when username is missing', () => {

    expect(emailChecker.checkEmailFormat('@gmail.com')).toBe(false);

});

test('Return false when email has asian characters or non-roman characters', () => {
    expect(emailChecker.checkEmailFormat('紅莉栖@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('홍리석@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('Курису@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('紅莉棲@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('كوريسو@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('คุริสุ@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('कुरीसु@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('კურისუ@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('קוריסו@gmail.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('குரிசு@gmail.com')).toBe(false);

    expect(emailChecker.checkEmailFormat('mymail@紅莉栖.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@홍리석.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@Курису.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@كوريسو.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@คุริสุ.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@कुरीसु.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@კურისუ.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@קוריסו.com')).toBe(false);
    expect(emailChecker.checkEmailFormat('mymail@குரிசு.com')).toBe(false);
});