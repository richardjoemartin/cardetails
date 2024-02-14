
function addCar(){
    car = {
        brand:cbrand.value,
        price:cprice.value,
        id:ckey.value,

    }
    if(car.id==""||car.brand==""||car.price==""){
        alert("Please fill all input fields");
    }
    else{
        if(car.id in localStorage){
            alert("Already exists")
        }else{
            localStorage.setItem(car.id,JSON.stringify(car))//use of this??
            alert("Successfully added")
        }
    }
}

function searchCar(){
    let key = ky.value
    let car = JSON.parse(localStorage.getItem(key))

    result.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-primary">Car Details</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Car Key: ${car.id}</li>
      <li class="list-group-item">Car Brand: ${car.brand}</li>
      <li class="list-group-item">Car Price: ${car.price}</li>
    </ul>
  </div>`;

}

function removeCar(){
    let key = ky1.value
    let removeResult = localStorage.clear();
    if(removeResult!==""){
        alert("Sucessfully Removed")
    }else{
        alert("Not Removed")
    }  
}

function allRemove(){
    let rkey = localStorage.clear()
    if(rkey!== ""){
        alert("All records removed")
    }else {
        alert("Not removed")
    }
    window.location = 'index.html'
}