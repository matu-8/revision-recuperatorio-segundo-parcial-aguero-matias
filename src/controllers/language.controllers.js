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
console.log(typeof paradigm)
        if(typeof paradigm!=="string")
            return res.status(400).json({message:"Paradigm solo debe ser string"})

        const createdLanguage = await Language.create(
            {id,
            name,
            paradigm,
            release_year,}
        );
       return res.status(201).json({message:"El lenguaje se creó", createdLanguage})
    } catch (error) {
        res.status(500).json
        ({err: error.message})
    }
};

 //traer todos los lenguajes

 export const getAllLanguages = async(req, res) => {
    try {
        const language = await Language.findAll();
        if(language.length > 0)
            return res.status(200).json({message:"Se Trajeron todos los lenguajes", language})
        return res.status(400).json({message:"La base de datos está vacía"})
    } catch (error) {
        return res.status(500).json({err:error.message});  
    }
 };

 //traer personajes por id

 export const getLanguageById = async (req, res)=> {
 
    try {
        const language = await Language.findByPk(req.params.id)
        if(language)
            return res.status(400).json
        ({message:"No se encontró el lenguaje"})
            res.status(200).json
            ({message:"Se trajo el lenguaje", language})

    } catch (error) {
        return res.status(500).json
            ({err:error.message})        
    }
 }; 
 //actualizar lenguaje

 export const updLanguage = async (req, res) => {
    const {id, name, paradigm,} = req.body
    let {release_year} = req.body
    try {
        if(!id || !name || !paradigm)
            return res.status(400).json
        ({message:"Los campos no pueden estar vacios"})

        const nameunique = await Language.findOne({where:{name}})
        if(nameunique)

            return res.status(400).json({message:"El nombre de lenguaje ya existe"})

        const updatedLanguage = await Language.update(  

            {
                id,
                name,
                paradigm,
                release_year, 

            }
        );
        res.status(200).json({message:"Se actualizó el mensaje", updatedLanguage})
    } catch (error) {
            return res.status(500).json({err:error.message});
    }
 };

 //eliminar lenguaje
  export const deleteLanguage = async(req, res) => {
    try {
        const language = await Language.findByPk(id)
        if(!language)
            return res.status(400).json({message:"El lenguaje que desea elminar no existe"})
    
        const deletedLanguage = await Language.destroy();
        if(deletedLanguage > 0)
       return res.status(200).json({message:"Se eliminó el lenguaje", deletedLanguage})
        
    } catch (error) {
        return res.status(500).json({err:error.message})
    }
  };
