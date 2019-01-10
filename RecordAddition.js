var objectArray = [];
var name = "";
var mobile = "";
var email = "";

function save(){
    name = document.getElementById("name").value;
    mobile = document.getElementById("mobile").value;
    email = document.getElementById("email").value;
    var Valid = isValid(name,mobile,email);
    if(Valid){
        store();
       }
}

function isValid(name,mobile,email){   
    if(name == ""){
        alert("Enter your name");
        document.getElementById("name").focus();
        return false;
        }else if(!(/^[a-zA-Z ]+$/.test(name))){
                alert("Enter a validName");
                document.getElementById("name").focus();
                return false;
        }
    if(mobile == "" ){
        alert("Enter your mobile number");
        document.getElementById("mobile").focus();
        return false;
       }else if(!(/^([6-9][0-9]{9}$)/.test(mobile))){
                alert("enter the valid mobile number");
                document.getElementById("mobile").focus();
                return false;
        } 
    if(email == ""){
        alert("Enter your emaiID");
        document.getElementById("email").focus();
        return false;
        }else if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))){
            alert("Enter a valid emaiID");
            document.getElementById("email").focus();
            return false; 
        }
    for(var i=0;i<objectArray.length;i++){
        if(objectArray[i].mobile == mobile){
            alert("This mobile number is already exist");
            document.getElementById("mobile").focus();
            return false;
            }
        }
        return true;   
}

function store(){
      var obj = {"name":name,"mobile" : mobile,"email" : email,}
      objectArray.push(obj);
      //console.log(objectArray);
      display();
}

function display(){
    var html = "<table id = 'table' border=1px cellspacing = 5 cellpadding=10 class='table' align = 'center'>"
    html += "<thead><tr><th>Name</th><th>Mobile</th><th>Email</th><th>Actions</th></tr>"
    html += "<tr><td><input type='text' id='name'></td>"
    html += "<td><input type='text' id='mobile'></td>"
    html += "<td><input type='text' id='email'></td>"
    html += "<td><input type='submit' id='save' onclick='save()' style='width: 100px; height: 30px'value='SAVE'/>"
    html += "</td></tr>"
    html += "</thead></table>";
    console.log(objectArray);
    for (var currentIndex = objectArray.length -1; currentIndex >= 0; currentIndex--) {
        html+="<tbody><tr>";
        html+="<td>"+objectArray[currentIndex].name+"</td>";
        html+="<td>"+objectArray[currentIndex].mobile+"</td>";
        html+="<td>"+objectArray[currentIndex].email+"</td>";
        html+="<td><input type='button' value='edit' class='btnEdit' /><input type='button' value='delete' class='btnDelete'/></td>"
        html+="</tr>";
    }
    html+="<tbody></table>";
    document.getElementById("table").innerHTML = html;
    
    $(".btnEdit").bind("click",edit);
     $(".btnDelete").bind("click",Delete);
}
var currentMobile = "";

function edit(){
    var par = $(this).parent().parent(); 
    var tdName = par.children("td:nth-child(1)");
    var tdPhone = par.children("td:nth-child(2)");
    var tdEmail = par.children("td:nth-child(3)");
    var tdButtons = par.children("td:nth-child(4)");
    currentMobile=tdPhone.text();
    document.getElementById("name").disabled = true;
    document.getElementById("mobile").disabled = true;
    document.getElementById("email").disabled = true;
    tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
    tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
    tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
    tdButtons.html("<input type= 'button' value='update' class='btnUpdate'>");
    $(".btnEdit").hide();
    $(".btnDelete").hide();
    $(".btnUpdate").bind("click", update);
    
}


function deleteObject(currentMobile){
    

    for(i=0;i<objectArray.length;i++){
        if(objectArray[i].mobile == currentMobile){
              objectArray.splice(i,1);
           }
       
    }
}

function update(){ 
    var par = $(this).parent().parent();
    var tdName = par.children("td:nth-child(1)");
    var tdPhone = par.children("td:nth-child(2)");
    var tdEmail = par.children("td:nth-child(3)");
    var tdButtons = par.children("td:nth-child(4)");
    name = tdName.children("input[type=text]").val();
    mobile = tdPhone.children("input[type=text]").val();
    email=tdEmail.children("input[type=text]").val();
    document.getElementById("name").disabled = false;
    document.getElementById("mobile").disabled = false;
    document.getElementById("email").disabled = false;
    for(var i=0;i<objectArray.length;i++){
        if(objectArray[i].mobile == currentMobile){
              if(( objectArray[i].name != name)|| (objectArray[i].mobile != mobile) || (objectArray[i].email!=email)){
                     objectArray.splice(i,1);
                  var valid = isValid(name,mobile,email);
                 if(valid){
                       store();
                       $(".btnEdit").show();
                       $(".btnDelete").show();
                         }
                 }else{
                     objectArray[i].name = name;
                     objectArray[i].mobile = mobile;
                     objectArray[i].email = email;
                     display();
                 }
               
           }
    }
   
    }

function Delete(){
    console.log("delete is called");
    var par = $(this).parent().parent();
    var tdPhone = par.children("td:nth-child(2)");
    deleteObject(tdPhone.text());
    display();
    
}