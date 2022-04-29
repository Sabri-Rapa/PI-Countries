const { Router } = require('express');
const countriesRoute = require('./countries.js');
const activityRoute = require('./activity.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/countries', countriesRoute)
router.use('/activity', activityRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
