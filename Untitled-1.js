//Github Source Code: wesleytran77

//sends users to Urban Nails Instagram if u click post
document.querySelectorAll(".post").forEach(post =>{
    post.addEventListener("click", function(){
        window.open("https://www.instagram.com/urbannailweslaco/", "_blank");
    })
})

//contols the burger nav button
const toggleButton= document.querySelector(".toggle-button")
const dropdown= document.querySelector(".dropdown")

toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle('active')
})

//controls "Call Us" buttons
const callButton= document.querySelector(".contact")
callButton.addEventListener("click", () =>{
        window.location.href = "tel:+2105719279";
})

const callButton2= document.querySelector(".contact2")
callButton2.addEventListener("click", () =>{
    window.location.href = "tel:+2105719279";
})



//final touches after launching: test call button, responsiveness