const {Router} = require('express');
const {Activity, Country} = require ('../db');


const router = Router()

router.get('/all', async (req, res, next) =>{
    try{

        allActivities = await Activity.findAll({
            include: Country
            })   

            allActivities.length ?
            res.status(200).send(allActivities) :
            res.status(400).send(`No activities created`)
    
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    const {name, difficulty, duration, season, country} = req.body;

    /* return  Activity.create({
        
            name,
            difficulty,
            duration,
            season,
        
    })
    .then(response => {
        country.forEach( async country => {
            let found = await Country.findOne({
                where:{
                    name: country
                }
            })
            return await response.addCountry(found)
        })
        res.status(201).send('The activity was created successfully')
    })
    .catch(err=>next(err)) */

    try{
        let newActivity = await Activity.findOrCreate({
            where:{
                name,
                difficulty,
                duration,
                season,
        }})
        
        country.forEach(async country => {
            let found = await Country.findOne({
                where:{
                    name: country
                }
            })
            await newActivity[0].addCountry(found)
        })

        res.status(201).send('The activity was created successfully')
    }catch(err){
        next(err)
    }
})

module.exports = router;
