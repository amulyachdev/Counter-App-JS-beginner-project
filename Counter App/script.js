const btn = document.querySelectorAll(".btn");

const value = document.getElementById("value");

let count = 0;

btn.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const style = e.target.classList;
        if(style.contains("decrease")){
            count--;
        } else if (style.contains("increase")){
            count++;
        } else {
            count =0;
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count
    })
})

