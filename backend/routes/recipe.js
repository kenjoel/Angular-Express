const express = require('express');

const router = express.Router();

const recipeRoutes = require('../controllers/controllers');

router.post('/', recipeRoutes.createRecipe);
  
router.get('/', recipeRoutes.findAll);

router.get('/:id', recipeRoutes.findOne);
  
router.put('/:id', recipeRoutes.modifyRecipe);
  
router.delete('/:id', recipeRoutes.deleteRoutes);
  
  