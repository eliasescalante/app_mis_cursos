/* Servidor */
import express from "express";
import { json } from "sequelize";



const app = express();
const PORT = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));

//Rutas
app.listen(PORT, () => {
    console.log(`arranco el server sin problemillas pillos en : http://localhost:${PORT}`);
})