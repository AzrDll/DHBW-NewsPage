function checkloginfield(){
    var username = document.getElementById("usr").value;
    var password = document.getElementById("pwd").value;
    if(username == "" || password == ""){
        alert("Please fill in all fields");
        return false;
    }

    if(username == "admin" && password == "admin"){
        window.location.replace("index.html");
        return true;
    }
    return true;
}