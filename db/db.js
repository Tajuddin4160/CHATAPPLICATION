import mongoose from "mongoose";

const dbcon = async () => {

    try {

        mongoose.connect(process.env.MONGODB)
        console.log('db is connected')

    } catch (err) {

        console.log(error)
    }
}

export default dbcon;