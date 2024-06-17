function checkloginfield(){
    var username = document.getElementById("usr").value;
    var password = document.getElementById("pwd").value;
    if(username == "" || password == ""){
        alert("exit");
        return false;
    }

    if(username == "admin" && password == "admin"){
        window.location.replace("admin.html");
        return true;
    }

    if(username != "admin" && password != "admin"){
        alert("Input valid credentials");
        return true;
    }
    return true;
}