const callButton= document.querySelector(".contact")

//handles call button
callButton.addEventListener("click", function(){
    window.location.href = "tel:+9568544541"
})


//home button functionality
const home= document.querySelector(".title")

home.addEventListener("click", function(){
    document.location.href= "index.html"
})

