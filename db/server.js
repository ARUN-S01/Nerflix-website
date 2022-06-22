var result = "";  
var Connection = require('tedious').Connection;  
    var config = {  
        server: 'netflix--clone--server.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sql-netflix', //update me
                password: 'asdf0110@#'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'netflix--clone'  //update me
        }
    }; 
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement();
       
        
    });  

    function start(){
        connection.connect();
    }
    
    
  
    
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  


  
    function executeStatement() {  
        request = new Request("select Rating from Movies where Title = 'Frozen' and Year = 2013;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
            
              } else {  
                result+= column.value + " ";  
              }  
            }); 
            console.log(result);  
            document.getElementById("frozen-ratings").innerHTML = result;
           // result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    };