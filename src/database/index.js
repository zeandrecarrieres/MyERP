const mongoose = require("mongoose")
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        process.env.DATABASE_HOST,
        { useNewUrlParser: true, useUnifiedTopology: true }//, (response) => console.log(" Mongoose is connected - ", response)
    );
} catch (e) {
    //console.log("could not connect", e);
}
module.exports = mongoose
