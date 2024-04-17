const mongoose = require("mongoose");
// const db = process.env.MONGO_URI;
const db = "mongodb+srv://tour-app:TourApp321@tour-cluster.mr79ygz.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
