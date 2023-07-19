const { Users } = require('../database/schema');
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

    }
}