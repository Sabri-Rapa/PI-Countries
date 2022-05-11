//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')


async function chargeDb(){
  try{
const paises = await axios.get('https://restcountries.com/v2/all')
        let filtrado = paises.data.map(p =>{
          return {
            alpha3Code: p.alpha3Code,
            name: p.name,
            flags: p.flags.svg,
            region: p.region,
            capital: p.capital? p.capital : 'without capital',
            subregion: p.subregion,
            area: p.area,
            population: p.population,
            }
        
    })
    await Country.bulkCreate(filtrado)
  }catch(err){
    console.log(err)
  }
    }

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  await chargeDb();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
