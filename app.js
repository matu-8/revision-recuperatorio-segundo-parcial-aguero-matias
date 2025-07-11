import express from "express";
import { inicioDB} from "./src/config/database.js";
import "dotenv/config"
import { routerLanguage } from "./src/routes/language.routes.js";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use("/api", routerLanguage);

export const connectdb = async () => {
    try {
        await inicioDB();
        console.log("inicio de BD exitoso");
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en puerto ${PORT}`)
        })
    } catch (error) {
        console.log("No se conectó con la base de datos");
    }
}
connectdb();

