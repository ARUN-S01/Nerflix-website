

    // var result = "100";  
    // function hello(){
    //     //window.alert("HEYYY");
    //     document.getElementById("frozen-ratings").innerHTML = result;
    // }
    // setInterval('hello()',5000);
    // var Connection = require('tedious').Connection;  
    // var config = {  
    //     server: 'netflix--clone--server.database.windows.net',  //update me
    //     authentication: {
    //         type: 'default',
    //         options: {
    //             userName: 'sql-netflix', //update me
    //             password: 'asdf0110@#'  //update me
    //         }
    //     },
    //     options: {
    //         // If you are on Microsoft Azure, you need encryption:
    //         encrypt: true,
    //         database: 'netflix--clone'  //update me
    //     }
    // }; 
    // var connection = new Connection(config);  
    // connection.on('connect', function(err) {  
    //     // If no error, then good to proceed.  
    //     console.log("Connected");  
    //     executeStatement();
       
        
    // });  
    // //document.getElementById("frozen-ratings").innerHTML = "100";
    // connection.connect();    
    
    // var Request = require('tedious').Request;  
    // var TYPES = require('tedious').TYPES;  


  
    // function executeStatement() {  
    //     request = new Request("select Rating from Movies where Title = 'Frozen' and Year = 2013;", function(err) {  
    //     if (err) {  
    //         console.log(err);}  
    //     });  
        
    //     request.on('row', function(columns) {  
    //         columns.forEach(function(column) {  
    //           if (column.value === null) {  
    //             console.log('NULL');  
            
    //           } else {  
    //             result+= column.value + " ";  
    //           }  
    //         }); 
    //         console.log(result);  
           
    //        // result ="";  
    //     });  
  
    //     request.on('done', function(rowCount, more) {  
    //     console.log(rowCount + ' rows returned');  
    //     });  
        
    //     // Close the connection after the final event emitted by the request, after the callback passes
    //     request.on("requestCompleted", function (rowCount, more) {
    //         connection.close();
    //     });
    //     connection.execSql(request);  
    // };

    var lin = null;
    fetch("http://localhost:8090/api/movies/Frozen/2013")

	// Converting received data to JSON
	.then(response => response.json())
	.then(json => {

        var res = json[0][0].Rating;
        // let li = `<span class="text-white ml-2" id="frozen-ratings">0.0</span>`;
    //     let he = `<h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
    //     data-delay-in="0.6" id="f-h">
    //     Frozen
    //   </h1>`;
		// Create a variable to store HTML
		// let li = `<tr><th>Name</th><th>Email</th></tr>`;
	
		// // Loop through each data and add a table row
		//  json.forEach(user => {
		// 	li += `<tr>
		// 		<td>${user.Title} </td>
		// 		<td>${user.Year}</td>		
		// 	</tr>`;
		// });

        //  json.forEach(user => {
        //     res = user.Ratings;
        // //     he = `<h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
        // //     data-delay-in="0.6" id="f-h">
        // //     ${user.Title}
        // //   </h1>`

        //     //li = `<span class="text-white ml-2" id="frozen-ratings">${user.Rating}</span>`;


		// });

	// Display result
   // const time = json[0][0].Runtime.split(" ");
    document.getElementById("f-h").innerHTML = json[0][0].Title;
	document.getElementById("frozen-ratings").innerHTML = res;
    document.getElementById("sum-f").innerHTML = json[0][0].Short_Summary;
    document.getElementById("star-f").innerHTML = json[0][0].Writers + ',' + json[0][0].Cast.split("|");
    document.getElementById("gen-f").innerHTML = json[0][0].Genres.split("|");
    lin = json[0][0].YouTube_Trailer;
    // var sc = document.getElementById("tra-f");
    // sc[0].setAttribute('data-src','https://www.youtube.com/watch?v=' + json[0][0].YouTube_Trailer);
   // document.getElementById('run-f').innerHTML = time; 
   // document.getElementById('f-h').innerHTML = he;
});

var avg_t = null;
fetch("http://localhost:8090/api/movies/The Avengers/")
.then(response => response.json())
.then(json =>{
    document.getElementById("avg-t").innerHTML = json[0][0].Title;
	document.getElementById("avg-r").innerHTML = json[0][0].Rating;
    document.getElementById("avg-ss").innerHTML = json[0][0].Short_Summary;
    document.getElementById("avg-st").innerHTML = json[0][0].Writers + ',' + json[0][0].Cast.split("|");
    document.getElementById("avg-g").innerHTML = json[0][0].Genres.split("|");
    //avg_t = json[0][0].YouTube_Trailer;
});

var con_t;
fetch("http://localhost:8090/api/movies/The Conjuring")
.then(response => response.json())
.then(json =>{
    document.getElementById("con-t").innerHTML = json[0][0].Title;
	document.getElementById("con-r").innerHTML = json[0][0].Rating;
    document.getElementById("con-ss").innerHTML = json[0][0].Short_Summary;
    document.getElementById("con-st").innerHTML = json[0][0].Writers + ',' + json[0][0].Cast.split("|");
    document.getElementById("con-g").innerHTML = json[0][0].Genres.split("|");
    con_t = json[0][0].YouTube_Trailer;
});

fetch("http://localhost:8090/api/moviedisplay/")
.then(response => response.json())
.then(json =>{
    document.getElementById("tp-1-t").innerHTML = json[0][0].Title;
	document.getElementById("tp-2-t").innerHTML = json[0][1].Title;
    document.getElementById("tp-3-t").innerHTML = json[0][2].Title;
    document.getElementById("tp-4-t").innerHTML = json[0][3].Title;
    document.getElementById("tp-5-t").innerHTML = json[0][4].Title;
    
});

fetch("http://localhost:8090/api/moviedisplay/desc/")
.then(response => response.json())
.then(json =>{
    document.getElementById("pop-t-1").innerHTML = json[0][0].Title;
	document.getElementById("pop-t-2").innerHTML = json[0][1].Title;
    document.getElementById("pop-t-3").innerHTML = json[0][2].Title;
    document.getElementById("pop-t-4").innerHTML = json[0][3].Title;
    document.getElementById("pop-t-5").innerHTML = json[0][4].Title;
    
});

fetch("http://localhost:8090/api/movies/Avatar/")
.then(response => response.json())
.then(json =>{
    document.getElementById("ava-t").innerHTML = json[0][0].Title;
	document.getElementById("ava-r").innerHTML = json[0][0].Rating;
    document.getElementById("ava-ss").innerHTML = json[0][0].Short_Summary;
    
});




function Youtube() {
    //document.getElementById("tra-f").innerHTML = "<div class='video-open playbtn'></div>";

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var player;
function onYouTubeIframeAPIReady() {
    
    player = new YT.Player('tra-f', {
        height: '300',
        width: '300',
        videoId: lin,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
                         
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}


var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        
        done = true;
    }
}
    
function stopVideo() {
    player.stopVideo();
}

           
