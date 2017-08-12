 var sql = require('mssql');


           var config = {
              user: 'sa',
              password: '123456',
              server: 'Yordan\\Yordan',
              database: 'northwind'
           }

           var DB = sql.connect(config, function(err) {

              if (err){
                 throw err ;
              } else{


                 console.log('connected');
              }

           });


           /*--------------------Connection--------------------------------*/

           module.exports.DB = DB;