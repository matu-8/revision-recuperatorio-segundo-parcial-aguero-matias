import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Language = sequelize.define("Language", {
    id:{type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    name:{type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    paradigm:{type:DataTypes.STRING,
        allowNull:false,
    },
    release_year:{type:DataTypes.INTEGER,
    }
})