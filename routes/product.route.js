const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);
router.post('/create', product_controller.create);
router.get('/:id', product_controller.show);
router.put('/:id', product_controller.update);
router.delete('/:id', product_controller.delete);
router.get('/', product_controller.index);

module.exports = router;