import { allCharacters } from "../utils/dummyData.js";

/** * @desc Controller to handle character-related requests
 * @module controllers/charactersController
 */
// @desc Gel all characters
// @route GET /characters
// @access Public
export const getCharacters = (req, res, next) => {
  res.status(200).json(allCharacters);
};

export const createCharacter = (req, res, next) => {
  const newCharacter = req.body;
  if (
    !newCharacter.name ||
    !newCharacter.description ||
    !newCharacter.image ||
    !newCharacter.weapon
  ) {
    // trigger an error for demonstration via error-middleware
    const error = new Error("Name and description are required");
    error.status = 404;
    return next(error);
  }

  allCharacters.push({
    id: allCharacters.length + 1, // simple ID generation
    ...newCharacter,
  });

  res.status(201).json({
    message: "Character created successfully",
    character: newCharacter,
  });
};
