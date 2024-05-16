const tp = document.getElementById("tpbtn1")
const tp2 = document.getElementById("tpbtn2")
const tp3 = document.getElementById("tpbtn3")
t=0
const bi = document.getElementById("bi")
const pop1 = document.getElementById("pop1")
bi.addEventListener('click',()=>{
    
    if(t===0){
        pop1.style.top = "70px"
        t=1
    }
    else{
        pop1.style.top = "-450px"
        t=0
    }
})
tp.addEventListener('click',()=>{
    
    if(t===0){
        tp.style.backgroundColor= "grey"
        t=1
    }
    else{
        tp.style.backgroundColor= "transparent"
        t=0
    }
})
tp2.addEventListener('click',()=>{
    if(t===0){
        tp2.style.backgroundColor= "grey"
        t=1
    }
    else{
        tp2.style.backgroundColor= "transparent"
        t=0
    }
})
tp3.addEventListener('click',()=>{
    if(t===0){
        tp3.style.backgroundColor= "grey"
        t=1
    }
    else{
        tp3.style.backgroundColor= "transparent"
        t=0
    }
})