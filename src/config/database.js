import { Sequelize } from "sequelize";
import "dotenv/config"

///modelo base de datos
export const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    }
)

///conexion base de datos

export const inicioDB = async() => {
    try {
        await sequelize.authenticate();
        console.log(" >>>Autenticación de base de datos exitosa ");
        await sequelize.sync();
        console.log(" >>>Sincronización con base de datos exitosa");   
    } catch (error) {
        console.log("Error al conectar con base de datos");
    }  
}
