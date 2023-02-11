const subscribed = document.getElementById("subscribed");
const toggle = document.getElementById("toggle");
const subscribed1 = document.getElementById("subscribed1");
const subscribed2 = document.getElementById("subscribed2");
const subscribed3 = document.getElementById("subscribed3");

console.log(subscribed)
console.log(toggle)

toggle.addEventListener("click" , () => {
    if(subscribed.style.display === "none"){
        subscribed.style.display = "block"
        toggle.textContent == "subscribe"
    } else{
        subscribed.style.display = "none"
        toggle.textContent == "subscribe"
    }
})
toggle.addEventListener("click" , () => {
    if(subscribed1.style.display === "none"){
        subscribed1.style.display = "block"
    } else{
        subscribed1.style.display = "none"
    }
})
toggle.addEventListener("click" , () => {
    if(subscribed2.style.display === "none"){
        subscribed2.style.display = "block"
    } else{
        subscribed2.style.display = "none"
    }
})
toggle.addEventListener("click" , () => {
    if(subscribed3.style.display === "none"){
        subscribed3.style.display = "block"
    } else{
        subscribed3.style.display = "none"
    }
})



