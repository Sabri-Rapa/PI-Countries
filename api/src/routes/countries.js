const {Router} = require('express');
const {Country, Activity} = require('../db')
const {Op} = require('sequelize')

const router = Router()



router.get('/', async (req, res, next) =>{
  const {name, page} = req.query
  let allCountries
    try{
        if(name){
            allCountries = await Country.findAll({
            include: Activity,
            where: {
                name:{
                    [Op.iLike]: '%' + name + '%'
                }
            },
            order:[["name", 'ASC']]
        })

        }else{
            allCountries = await Country.findAll({
            include: Activity,
            order:[["name", 'ASC']]
            })
               
      
        }
        allCountries.length ?
        res.status(200).send(allCountries) :
        res.status(400).send(`${name}: this country doesn't exist`)
    }catch(err){
        next(err)
    }
    

    // try{
    //     if(name){
        
    //         allCountries = await Country.findAll({
    //             include: Activity,
    //                 where: {
    //                     name:{
    //                         [Op.iLike]: '%' + name + '%'
    //                     }
    //                 }
    //             })

    //     }else if(req.query.filter){
    //         allCountries = await Country.findAll({
    //             where:{
    //                 region: req.query.filter
    //             },
    //             limit: 10,
    //             offset: req.query.page,
    //             order:[["name", 'ASC']],
    //             include: {model: Activity},
    //         })

    //     }else{

    //         allCountries = await Country.findAll({
    //             limit: 10,
    //             offset: req.query.page,
    //             order:[["name", 'ASC']],
    //             include: {model: Activity},
    //         })
    //         console.log('page',req.query.page)
    //     }
    //     allCountries.length ?
    //     res.status(200).json(allCountries) :
    //     res.status(400).send(`${name}: this country doesn't exist`)

    // } catch(err) {
    //     next(err)
    // }
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