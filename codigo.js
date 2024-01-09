function CambiarColorSol(){
    const XD = document.querySelector(".CambiarColor")  
    XD.style.color = "white"
    const sol = document.querySelector(".sol")
    sol.setAttribute("src", "luna.png")
    sol.setAttribute("onclick", "CambiarColorLuna()")
    
}
function CambiarColorLuna(){
     const XD = document.querySelector(".CambiarColor")
     XD.style.color = "black"
     const sol = document.querySelector(".sol")
     sol.setAttribute("src", "sol.png")
     sol.setAttribute("onclick", "CambiarColorSol()")
 }