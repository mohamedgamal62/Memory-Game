document.querySelector(".button span").onclick = function (){
    let your  =prompt("what's your name")
    if (your == null || your == ''){
        document.querySelector(".name span").innerHTML = "Unknwon"
    }else {
        document.querySelector(".name span").innerHTML = your
    }
    document.querySelector(".button").remove()
    document.querySelector(".start").play()
}
let duration = 1000;
let infoCountainer = document.querySelector(".countainer")
let blocks = Array.from(infoCountainer.children)
// let orderRange = [...Array(blocks.length).keys()]
let orderRange = Array.from(Array(blocks.length).keys())
shuffel(orderRange)

function flip (block){
    block.classList.add("is")
    let allFlipped = blocks.filter(flipBlock => flipBlock.classList.contains("is"))
    if (allFlipped.length === 2){
        stopClick()
        check(allFlipped[0] , allFlipped[1])
    }
}

    function stopClick (){
        infoCountainer.classList.add("removeClick")
        setTimeout(() => {
            infoCountainer.classList.remove("removeClick")
        },duration)

    }

    function check (first , second){
        let tries = document.querySelector(".tries span")
        if (first.dataset.technology === second.dataset.technology){
            first.classList.remove("is")
            second.classList.remove("is")

            first.classList.add("match")
            second.classList.add("match")

            document.querySelector(".good").play()
        }else{
            tries.innerHTML++
            setTimeout (() => {
                first.classList.remove("is")
                second.classList.remove("is")
            }, duration)
            document.querySelector(".bad").play()
        }
    }

    blocks.forEach((block , index) => {
    block.style.order = orderRange[index];
    block.addEventListener("click" ,()=> {
        flip(block)
    })
})

function shuffel (array){
    let current = array.length
    while(current > 0){
        let random = Math.floor(Math.random() * current);
        current--;
        let temp = array[current]
        array[current] = array[random]
        array[random] = temp
    }
    return array
}
