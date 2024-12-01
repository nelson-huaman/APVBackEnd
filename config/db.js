import mongoose from "mongoose";

const conectarDB = async () => {
   try {
      const db = await mongoose.connect(process.env.MONGO_URI, {
         dbName: process.env.DB_NAME
      });
      const url = `${db.connection.host}:${db.connection.port}`;
      console.log(`MongoDB conectado en: ${url}`);
   } catch (error) {
      console.error(`Error al conectar a MongoDB: ${error.message}`);
      process.exit(1);
   }
}

export default conectarDB;