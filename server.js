require('dotenv').config()
const express= require("express")
const app = express()
const port = process.env.PORT || 5000

// mysql2.js used over mysql due to caching sha2 authentication issue with node 
const sql = require('mysql2')
const db = sql.createConnection({
  host: process.env.MY_HOST,
  user: process.env.MY_USER,
  password: process.env.MY_PASSWORD,
  database: process.env.MY_DATABASE,
})

db.connect((err)=>{
  {err ? console.log(err) : console.log('MYSQL connected...')}
})

app.get("/random_list", (req, res) => {
  let my_list = // Obtains a random list of 15 NSN numbers; benchmark 0.01 sec
  "SELECT concat(FSC, concat('-0', COUNTRY_CODE), '-', IF(LENGTH(NIIN) < 8, LEFT(LPAD(NIIN, 7, 0), 3), SUBSTRING(NIIN, 2, 3) ), '-', RIGHT(LPAD(NIIN, 8, 0), 4)) as nsn\
  FROM nsn \
  WHERE RAND() < 0.0000259 \
  LIMIT 15"
  // 0.0003 gives least variety in sample; 0.0000259 gives most variety with minimal time 

  db.query(my_list, (err, result)=>{  
    if(err){
      res.status(500).json({code: err.code, message: err.sqlMessage})
    }else{
      res.status(200).json(result)
    }
  })
});

app.get("/detail/:nsn", (req, res) =>{
  // obtains details of product given the NSN number, multiple rows possible
  let niin; 
  let param_nsn = req.params.nsn.match(/\d+[^-]/g)
  // some params have dashes and some do not, depending on user input 
  if(param_nsn.length === 1){
    // -9, -3 accounts for niin with country code errors in db
    niin = req.params.nsn.slice(-9)
  }else{
    niin = param_nsn.slice(-3).join('')
  }
  // part number and cage number, along with other fields unique on many products
  let nsn_detail = 
  `SELECT * \
   FROM \
   (SELECT NIIN, NAME, INC, ITEM_NUMBER, PUBLICATION_DATE FROM nsn WHERE NIIN = ${niin}) as t1 \
   LEFT JOIN (SELECT NIIN, MRC, REQUIREMENTS_STATEMENT, CLEAR_TEXT_REPLY FROM nsn_characteristics WHERE NIIN = ${niin}) as t2 ON t1.NIIN = t2.NIIN \
   LEFT JOIN (SELECT NIIN, PART_NUMBER, CAGE_CODE, RNCC, RNVC, DAC, RNAAC, STATUS, MSDS, SADC FROM nsn_flis_parts WHERE NIIN = ${niin}) as t3 ON t1.NIIN = t3.NIIN`
  
  db.query(nsn_detail, (err, result)=>{  
    if(err){
      res.status(500).json({code: err.code, message: err.sqlMessage})
    }else{
      res.status(200).json(result)
    }
  })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})