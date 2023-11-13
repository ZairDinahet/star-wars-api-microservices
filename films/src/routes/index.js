const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', controllers.getFilms);
router.get('/:id', controllers.getOneFilm);
router.post('/', controllers.createFilm);
router.delete('/:id', controllers.deleteFilm);
router.put('/:id', controllers.updateFilm);

module.exports = router;
