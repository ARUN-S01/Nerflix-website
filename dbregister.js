function register(){

    var email = document.getElementById("email-field").value;
    var user_ = document.getElementById("username-field").value;
    var pass_ = document.getElementById("cpwd-field").value;

    try{
        var link_ = "http://localhost:8090/api/users/1034/"+user_+"/"+user_+"/"+email+"/FREE/Madurai/3892391/23456789/9089/"+pass_;
        console.log(link_);
    fetch(link_)
    .then(response => response.json())
        .then(json =>{
            if(json == 1){
                window.alert("Signed Up Successfully");
                window.location.href = "login.html";
            }
            else{
                window.alert("Error Occured");
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
    catch(error){
        console.log(error);
    }
    
    
}