exports.createRecipe = (req, res, next) => {
    const rec = new recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      difficulty: req.body.difficulty,
      time: req.body.time
    });
    rec.save().then(
      () => {
        res.status(201).json({
          message: 'its here!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      })
    };

exports.modifyRecipe = (req, res, next) => {
    const rec = new recipe({
    _id: req.params.id,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time 
    });
    rec.updateOne({_id: req.params.id}, rec).then(
    () => {
    res.status(201).json({
        message: 'Thing updated successfully!'
    });
    }
    ).catch(
    (error) => {
    res.status(400).json({
        error: error
})
}
)};


exports.findAll = (req, res, next) => {
    recipe.find().then((recipe) => {
      res.status(200).json(recipe)
    }).catch((error) => {
      res.status(400).json({
        error:error
      })
    })
};


exports.findOne =  (req, res, next) => {
    recipe.findOne({
      _id: req.params.id
    }).then((recipe) =>{
      res.status(200).json(recipe)
    }).catch((error) => {
      res.status(400).json({
        error: error
      })
    })
};

exports.deleteRoutes = (req, res, next) =>{
    recipe.deleteOne({
      _id: req.params.id
    }).then( (rec) => {
      res.status(200).json(rec)
    }).catch((error) =>{
      res.status(400).json({
        error:error
      })
    })
};

