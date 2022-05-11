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

    let aux = name[0].toUpperCase() + name.slice(1)

    try{
        let newActivity = await Activity.findOrCreate({
            where:{
                name: aux,
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

router.delete("/:id", async(req, res, next) =>{
    const id = req.params.id
    try{
        let act = await Activity.destroy({
            where:{
                id: id
            }
        });
        return res.send('activity deleted succesfully')
    } catch(err){
        next(err)
    }

})

module.exports = router;
