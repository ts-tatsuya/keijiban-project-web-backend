const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;

async function connectdb() {
    await mongoose.connect(
        uri,
        {
            dbName: dbName
        });
}
// const connectdb = mongoose.connect(
//     uri
// );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb database has successfully connected');
});

module.exports = { mongoose, connectdb };