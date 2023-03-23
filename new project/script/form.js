
function test(){

    var name = document.getElementById("name").value;
    var num = document.getElementById("number").value;
    var add = document.getElementById("add").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;


// storing data
    var abc =localStorage.setItem("Name" , name )
    var numb =localStorage.setItem("Mobile Number" , num )
    var address =localStorage.setItem("Address" , add )
    var em =localStorage.setItem("Email" ,email  )
    var da =localStorage.setItem("Date" ,date  )
}



