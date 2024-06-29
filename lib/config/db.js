import mongoose from "mongoose";

export const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://richieeeojok:j1Md0ChI35o04IME@cluster0.wtdjxfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog')

    console.log("DB Connected");

}





// const MONGODB_URI = process.env.MONGODB_URI

// let cached = (global as any).mongoose || { conn: null, promise: null };

// export const connectToDatabase = async () => {

//     if (cached.conn) return cached.conn;

//     if (!MONGODB_URI) throw new Error('MONGODB_URI is Missing');

//     cached.promise = cached.promise ||mongoose.connect(MONGODB_URI, {

//         dbName: 'CrowdPulse',
//         bufferCommands: false,
//     })

//     cached.conn = await cached.promise;

//     return cached.conn;
// }

