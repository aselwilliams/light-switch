
const imgTag = document.querySelector('img');
const btn = document.querySelector('#btn');
let isLightOn = false;

btn.style.backgroundColor = "coral";
btn.style.width = "120px";
btn.style.border = "3px solid #ccc";
btn.style.borderRadius = "8px";
btn.style.padding = "8px";
btn.style.fontWeight = "bolder";
btn.style.display = "flex";
btn.style.margin = "20px 70px"

btn.addEventListener('click', function() {
    if (isLightOn === true) {
        imgTag.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
        isLightOn = "false";
        btn.innerText = 'Switch Light On';
        btn.style.backgroundColor="green";
        console.log(isLightOn,'it is off')
    } else {
        imgTag.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png"
        isLightOn = true;
        btn.innerText = "Switch Light Off"
        btn.style.backgroundColor = "red";
        console.log(isLightOn,'it is on')
    }
})

console.log(isLightOn)