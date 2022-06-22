function update_db(){
    var em = document.getElementById("text-fde8").value;
    var na = document.getElementById("text-181f").value;
    var pn = document.getElementById("text-f308").value;
    var ad = document.getElementById("text-7a64").value;
    var cr = document.getElementById("text-053e").value;
    
    var link1 = "http://localhost:8090/api/update/"+sessionStorage.getItem("uid")+"/" + em +"/" + na +"/"+pn+"/"+ad+"/"+cr; 
    console.log(link1);
        fetch(link1)
        .then(response => response.json())
        .then(json =>{
            // document.getElementById("name-t").innerHTML = json[0][0].Username;
            // document.getElementById("mail-t").innerHTML = json[0][0].Email;
            // document.getElementById("sub-t").innerHTML = json[0][0].Subscription_Status;
            // document.getElementById("uid-t").innerHTML = json[0][0].UserId;
            // document.getElementById("name-p").innerHTML = json[0][0].Username;
            // document.getElementById("add-p").innerHTML = json[0][0].Address;
            // document.getElementById("phone-p").innerHTML = json[0][0].Phone_Number;
            // document.getElementById("card-p").innerHTML = json[0][0].redit_Card_Number;
            if(json == 1){
                window.alert("Update Sucess");
                sessionStorage.setItem("email",em);
                window.location.href = "View-Profile.html";
            }
            else{
                window.alert("Error While Updating");
            }
            

           
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
}