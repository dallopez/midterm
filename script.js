//the given array list
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

var wrapper = document.body.querySelector(".wrapper")
var num = 5;


for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  var Name= document.createElement("h4");
  var Age= document.createElement("h4");

 //style name/age green if above 25
if(list[i].age>25){
    ele.style.color="green";
  }

  //display name and age 
Name.innerHTML ="Name: " + list[i].name;
  Age.innerHTML ="Age: " + list[i].age;
  ele.appendChild(Name);
  ele.appendChild(Age);
  wrapper.appendChild(ele);
}

//create function for counter box
function createBox(){
  var ele = document.createElement("div");
  var num = 5;
  ele.innerHTML ="Counter: "+num;
  wrapper.appendChild(ele)
}

//function output
document.body.querySelector(".clicker").addEventListener("click", function(){
  createBox()
})