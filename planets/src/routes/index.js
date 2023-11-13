const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', controllers.getPlanets);
router.get('/:id', controllers.getOnePlanet);
router.post('/', controllers.createPlanet);
router.delete('/:id', controllers.deletePlanet);
router.put('/:id', controllers.updatePlanet);

module.exports = router;
