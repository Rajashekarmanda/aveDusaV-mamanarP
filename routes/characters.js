import express from "express";
import {
  createCharacter,
  getCharacters,
} from "../controllers/charactersController.js";

const router = express.Router();

router.get("/", getCharacters);

router.post("/", createCharacter);

export default router;
