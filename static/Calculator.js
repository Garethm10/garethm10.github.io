function myFunc(){
    var name = document.getElementById('input-name').value;
    var cats = document.getElementById('input-CatIntake').value;
    var dogs = document.getElementById('input-DogIntake').value;
     alert("You're a silly goober named " + name + " and there are " + (dogs - cats) + " more dogs than cats" );
     document.getElementById('output-MoreDogsThanCats').value = (dogs - cats)
  }