
    
    var link1 = "http://localhost:8090/api/getuser/" + sessionStorage.getItem("email") +"/" + sessionStorage.getItem("pass"); 
        fetch(link1)
        .then(response => response.json())
        .then(json =>{
            sessionStorage.setItem("uid",json[0][0].uid);
            document.getElementById("name-t").innerHTML = json[0][0].Username;
            document.getElementById("mail-t").innerHTML = json[0][0].Email;
            document.getElementById("sub-t").innerHTML = json[0][0].Subscription_Status;
            document.getElementById("uid-t").innerHTML = json[0][0].UserId;
            document.getElementById("name-p").innerHTML = json[0][0].Username;
            document.getElementById("add-p").innerHTML = json[0][0].Address;
            document.getElementById("phone-p").innerHTML = json[0][0].Phone_Number;
            document.getElementById("card-p").innerHTML = json[0][0].redit_Card_Number;
           
            // try{
            //     if(json[0][0].uid != null){
            //         window.location.href("View-Profile.html");
            //     }
            //     else{
            //         window.location.href("View-Profile.html");
            //     }
            // }
            // catch(error){
            //     window.alert(error);
            //     console.log(error);
            // }
            
        });
