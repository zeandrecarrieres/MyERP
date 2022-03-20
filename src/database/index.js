const mongoose = require("mongoose")
async function main() {
    await mongoose.connect(process.env.DATABASE_LOCAL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log("MongoDB conectado")
}
main().catch((err) => { console.log(err) })
module.exports = mongoose
