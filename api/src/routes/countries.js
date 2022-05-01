const {Router} = require('express');
const {Country, Activity} = require('../db')
const {Op} = require('sequelize')

const router = Router()

router.get('/', async (req, res, next) =>{
  const {name} = req.query
  let allCountries
    try{
        if(name){
            allCountries = await Country.findAll({
            include: Activity,
            where: {
                name:{
                    [Op.iLike]: '%' + name + '%'
                }
            }
        })

        }else{
            allCountries = await Country.findAll({
            include: Activity
            })   
      
        }
        allCountries.length ?
        res.status(200).send(allCountries) :
        res.status(400).send(`${name}: this country doesn't exist`)
    }catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) =>{
    const {id} = req.params;
    let aux = id.toUpperCase()
    try{
    const countryId = await Country.findByPk(aux, {
        include: Activity
    })
    // console.log(countryId.name)
    res.json(countryId)

    }catch(err){
        next(err)
    }
})


module.exports = router;