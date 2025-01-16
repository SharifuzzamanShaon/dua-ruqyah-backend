const { PrismaClient } = require('@prisma/client')
exports.prisma = new PrismaClient()

// use `prisma` in your application to read and write data in your DB












// const { default: mongoose } = require("mongoose");

// exports.connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_CONNECTION_STR}`);
//     console.log("Db connected");
//   } catch (error) {
//     console.log("Db connecton error", error);
//   }
//   // await mongoose.connect(process.env.DB_url);
// };

//mongodb://127.0.0.1:27017/LMS_tech
