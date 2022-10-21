const mongoose = require('mongoose')
require('colors');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.underline.yellow)
    } catch (error) {
        console.error(`Error: ${error.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB 

