const {Router} = require('express');
const {Activity, Country} = require ('../db');


const router = Router()

router.post('/', async (req, res, next) =>{
    const {name, difficulty, duration, season, country} = req.body;

    try{
        let newActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season,
        })
        
        country?.forEach(async country => {
            let found = await Country.findOne({
                where:{
                    name: country
                }
            })
            await newActivity.addCountry(found)
        })

        res.status(201).send('The activity was created successfully')
    }catch(err){
        next(err)
    }
})

module.exports = router;
