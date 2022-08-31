const express = require('express');
const router = express.Router();
const { create, read, readAll, update, destroy } = require('../controllers/CityController'); //traigo los metodos del controller

router.post('/', create); //cuando haga un post a /, ejecuta el metodo create del controller
router.get('/', readAll); //cuando haga un get a /, ejecuta el metodo readAll del controller
router.get('/:id', read); //cuando haga un get a /:id, ejecuta el metodo read del controller
router.put('/:id', update); //cuando haga un put a /:id, ejecuta el metodo update del controller
router.delete('/:id', destroy); //cuando haga un delete a /:id, ejecuta el metodo delete del controller
module.exports = router;
