const {Router} = require('express');
const {Activity} = require ('../db')

const router = Router()

router.post('/', async (req, res, next) =>{
    const {name, difficulty, duration, season} = req.body;

    try{
        let newActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season,
        })        
        res.status(201).send(newActivity)
    }catch(err){
        next(err)
    }
})

module.exports = router;
