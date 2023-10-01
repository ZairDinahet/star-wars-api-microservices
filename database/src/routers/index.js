const { Router } = require('express')
const controllers = require('../controllers')
const { validateModel } = require('../middlewares');

const router = Router()


router.get('/:model', validateModel, controllers.getRequets)

router.get('/:model/:id',  validateModel, controllers.oneRequest)

router.post('/:model', validateModel, controllers.postRequest)

router.delete('/:model/:id',  validateModel, controllers.deleteRequest)

router.put('/:model/:id',  validateModel, controllers.putRequest)



module.exports = router