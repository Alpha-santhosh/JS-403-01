document.addEventListener("keydown",event=>{
    console.log(event.key)
    console.log(event.keyCode)
    
    var press = document.getElementById("press")
    press.innerText="You pressed"
    var key = document.getElementById("key")
    key.innerText = event.key
    key.classList.add("col")

    var  ans = document.getElementById("ans")
    ans.innerText = event.keyCode
    ans.classList.add("col")
})