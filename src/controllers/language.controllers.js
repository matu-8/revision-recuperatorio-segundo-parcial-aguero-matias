import { Language } from "../models/language.model.js";

//crear lenguaje
export const createLanguage = async(req, res) => {
   const {id, name, paradigm, release_year } = req.body
    try {
        if(!id || !name || !paradigm)
            return res.status(400).json({message:"Los campos no pueden estar vacios"})
        const uniqueLanguageId = await Language.findOne({where: {id}});
        if(uniqueLanguageId)
            return res.status(400).json({message:"El lenguaje ya existe"})
        const createdLanguage = await Language.create(
            id,
            name,
            paradigm,
            release_year,
        );
        res.status(201).json({message:"El lenguaje se creó", createdLanguage})
    } catch (error) {
        res.status(500).json
        ({err: error.message})
    }
};

 //traer todos los lenguajes

 export const getAllLanguages = async(req, res) => {
    try {
        const language = await Language.findAll();
        if(language)
            return res.status(200).json
        ({message:"Se Trajeron todos los lenguajes"})
    
        res.status(400).json({message:"La base de datos está vacía"})
        
    } catch (error) {
        res.status(500).json({err:error.message});  
    }
 };

 //traer personajes por id

 export const getLanguageById = async (req, res)=> {
    try {
        const language = await Language.findByPk(id)
        if(language)
            return res.status(400).json({message:"No se encontró el lenguaje"})
            res.status(200).json({message:"Se trajo el lenguaje", language})

    } catch (error) {res.status(500).json
            ({err:err.message})        
    }
 }

 //actualizar lenguaje

 export const updLanguage = async (req, res) => {
    const {id, name, paradigm, release_year} = req.body
    try {
        if(!id || !name || !paradigm)
            return res.status(400).json({message:"Los campos no pueden estar vacios"})
        const language = await Language.findOne({where:{name}})
        if(language)
            return res.status(400).json({message:"El nombre ya existe"})

        const updatedLanguage = await Language.update(
            id,
            name,
            paradigm,
            release_year, 
        );
        res.status(200).json({message:"Se actualizó el mensaje", updatedLanguage})
    } catch (error) {
            res.status(500).json({err:error.message});
    }
 };

 //eliminar lenguaje
  export const deleteLanguage = async(req, res) => {
    const language = await Language.findByPk(id)
    if(!language)
        return res.status(400).json
    ({message:"El lenguaje que desea elminar no existe"})
    
    const deletedLanguage = await Language.destroy({where:{id}})
    res.status(200).json({message:"Se eliminó el lenguaje", deletedLanguage})
  };
