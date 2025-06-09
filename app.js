/* Servidor */
import express from "express";
import { json } from "sequelize";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";


const app = express();
const PORT = 8080;

// Configuración de CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
// Middleware para manejar la subida de archivos
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

//Rutas
app.listen(PORT, () => {
    console.log(`arranco el server sin problemillas pillos en : http://localhost:${PORT}`);
})