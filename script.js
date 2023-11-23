
document.getElementById("submit").onclick = function () {
    document.getElementById("tab").style.display = "block";
  
    var table = document.getElementById("tab");
    var row = table.insertRow(-1);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var address = row.insertCell(2);
    var pincode = row.insertCell(3);
    var gender = row.insertCell(4);
    var food = row.insertCell(5);
    var state = row.insertCell(6);
    var country = row.insertCell(7);
    
    
    fname.innerHTML = document.getElementById("first-name").value;
    lname.innerHTML = document.getElementById("last-name").value;
    address.innerHTML = document.getElementById("address").value;
    pincode.innerHTML= document.getElementById("pincode").value;
    gender.innerHTML =document.querySelector('input[name = gender]:checked').value;
    food.innerHTML = Array.from(document.querySelectorAll("input[type=checkbox][name=foods]:checked"), e => e.value);
    state.innerHTML = document.getElementById("state").value;
    country.innerHTML = document.getElementById("country").value;

    var forms = document.getElementById("form")
   forms.reset();


  
    return false;

    
  }