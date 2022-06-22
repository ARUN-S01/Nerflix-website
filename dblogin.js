function userLogin(){
       try{
        var email = document.getElementById("email-field").value;
        sessionStorage.setItem("email",email);
        var pass = document.getElementById("pwd-field").value;
        sessionStorage.setItem("pass",pass);
        var link = "http://localhost:8090/api/users/" + email +"/" + pass +"/"; 
        console.log(link);
        fetch(link)
        .then(response => response.json())
        .then(json =>{
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
            if(json == 0){
                window.alert("error while Logging In");
                return 0;
            }
            else{
                window.location.href = "index.html";
            }
        });
        
    } 
    catch(error){
    console.log(error);

    }
}


