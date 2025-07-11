import { Router } from "express";
import { createLanguage, deleteLanguage, getAllLanguages, getLanguageById, updLanguage } from "../controllers/language.controllers.js";

export const routerLanguage = Router();

routerLanguage.get("/language", getAllLanguages)
routerLanguage.get("/language/:id", getLanguageById)
routerLanguage.post("/language", createLanguage)
routerLanguage.put("/language/:id", updLanguage)
routerLanguage.delete("/language/:id", deleteLanguage)