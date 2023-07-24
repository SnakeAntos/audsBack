const userController = require('../../controllers/userController');
const verifyToken = require('../../middlewares/validateJWT');

var express = require('express');
var router = express.Router();

router.post('/new', userController.create);
router.post('/login', userController.login);
router.get('/allusers', userController.obtain);//esta ruta es poco segura ya que muestra
//todos los usuarios sin ningun permiso de por medio, es temporal para chequear la base, etc. 
router.get('/:username', verifyToken, userController.obtainByUser);//por medio del verifyToken solo puedo buscar si estoy logeado.

router.delete('/:id', verifyToken, userController.delete);

module.exports = router;