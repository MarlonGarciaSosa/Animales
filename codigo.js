function CambiarColorSol(){
    const XD = document.querySelector(".CambiarColor");
    XD.style.color = "white";
    const sol = document.querySelector(".sol");
    sol.setAttribute("src", "luna.png");
    sol.setAttribute("onclick", "CambiarColorLuna()");
};

function CambiarColorLuna(){
    const XD = document.querySelector(".CambiarColor");
    XD.style.color = "black";
    const sol = document.querySelector(".sol");
    sol.setAttribute("src", "sol.png");
    sol.setAttribute("onclick", "CambiarColorSol()");
};

function AbrirPestaña(){
    const ElementoTexto = document.createElement("TEXTO");
    const padre = document.querySelector(".animals-picture");
    const Carpeta = document.querySelector(".content__table__h2");
    const Carpeta1 = document.querySelector(".content__table__img");
    ElementoTexto.innerHTML =`<table id="tabla3">
    <tr>
        <th><img src="Aves.jpg"></th>
        <th><img src="Reptil.jpg"></th>
        <th><img src="Gatos.jpg"></th>                                                                                        
    </tr>
    <tr>
        <td><p>Aves</p></td>
        <td><p>Reptiles</p></td>
        <td><p>Gatos</p></td>
    </tr>
</table>
<table id="tabla4">
     <tr>
        <th><img src="Perros.jpg"></th>
        <th><img src="Conejos.jpg"></th>
     </tr>
     <tr>
        <td><p>Perros</p></td>
        <td><p>Conejos</p></td>
     </tr>
</table>`;
    ElementoTexto.classList.add("Texto");
    padre.appendChild(ElementoTexto);
    Carpeta.setAttribute("onclick", "Cerrar()");
    Carpeta1.setAttribute("onclick", "Cerrar()");
};

function Cerrar(){
    const padre = document.querySelector(".animals-picture");
    const Carpeta = document.querySelector(".content__table__h2");
    const Carpeta1 = document.querySelector(".content__table__img");
    const Chorizo = document.querySelector(".Texto");
    Carpeta.setAttribute("onclick", "AbrirPestaña()");
    Carpeta1.setAttribute("onclick", "AbrirPestaña()");    
    padre.removeChild(Chorizo);
};
