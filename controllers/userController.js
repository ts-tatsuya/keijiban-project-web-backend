const { Users } = require('../database/schema');
const { checkEmailFormat } = require('../helper');
const bcrypt = require('bcrypt');
const productCountOnPage = 10;

module.exports = {
    fetchAllData: async (req, res) => {
        try {
            const result = await Users.Users.find();
            console.log(result);
            return res.status(200).send(result);
        } catch (error) {
            res.status(error.status || 500).send(error)
        }

    },
    registerUser: async (req, res) => {
        try {
            const { email, username, password, displayName } = req.body;
            console.log(req.body);


            if (checkEmailFormat(email) == false) {
                return res.status(500).send({
                    error: 500,
                    message: "email has wrong format!"
                });
            }

            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);
            const result = await Users.Users.insertMany([{
                email: email,
                username: username,
                password: hashPassword,
                displayName: displayName
            }]);
            return res.status(200).send(result);
        } catch (error) {
            res.status(error.status || 500).send(error)
        }

    }
}