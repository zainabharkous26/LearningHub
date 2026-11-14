console.log("JavaScript is connected!");
let explore=document.querySelectorAll(".explore");
let popUp=document.querySelector(".pop-container");
let cancel=document.querySelector("#cancel");
let done=document.querySelector("#done");

console.log(explore, popUp, cancel, done);

explore.forEach(function(button){
    button.addEventListener("click", function(){
      popUp.classList.remove("hidden");  

    });
    

});


cancel.addEventListener("click", function() {

    popUp.classList.add("hidden");

});

done.addEventListener("click", function() {

    popUp.classList.add("hidden");

});