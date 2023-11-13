const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', controllers.getCharacters);
router.get('/:id', controllers.getOneCharacter);
router.delete('/:id', controllers.deleteCharacter);
router.post('/', controllers.createCharacter);
router.put('/:id', controllers.updateCharacter);

module.exports = router;
