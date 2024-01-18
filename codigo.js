//Cambio de color que realiza el sol y la luna
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
    //General
    const Carpeta__h2 = document.querySelector(".content__table__h2");
    const Carpeta__img = document.querySelector(".content__table__img");
    const padre = document.querySelector(".content__animals-picture");
    Carpeta__h2.setAttribute("onclick", "CerrarPestaña()");
    Carpeta__img.setAttribute("onclick", "CerrarPestaña()");


    //Celular
    const ElementoTexto__celular = document.createElement("TEXTO__CELULAR");
    ElementoTexto__celular.innerHTML =
`<table id="tabla3">
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

    ElementoTexto__celular.classList.add("texto__celular");
    padre.appendChild(ElementoTexto__celular);


    //Escritorio
    const ElementoTexto__escritorio = document.createElement("TEXTO__ESCRITORIO");
    ElementoTexto__escritorio.innerHTML =
`<table id="tabla3">
    <tr>
        <th><img src="Aves.jpg"></th>
        <th><img src="Reptil.jpg"></th>
        <th><img src="Gatos.jpg"></th>
        <th><img src="Perros.jpg"></th>
        <th><img src="Conejos.jpg"></th>
    </tr>
    <tr>
        <td><p>Aves</p></td>
        <td><p>Reptiles</p></td>
        <td><p>Gatos</p></td>
        <td><p>Perros</p></td>
        <td><p>Conejos</p></td>
    </tr>   
</table>`;
    ElementoTexto__escritorio.classList.add("texto__escritorio");
    padre.appendChild(ElementoTexto__escritorio);
};

function CerrarPestaña(){
    const padre = document.querySelector(".content__animals-picture");
    const Carpeta__h2 = document.querySelector(".content__table__h2");
    const Carpeta__img = document.querySelector(".content__table__img");
    const Lista__elementoTexto__escritorio = document.querySelector(".texto__escritorio");
    const Lista__elementoTexto__celular = document.querySelector(".texto__celular");
    Carpeta__h2.setAttribute("onclick", "AbrirPestaña()");
    Carpeta__img.setAttribute("onclick", "AbrirPestaña()");    
    padre.removeChild(Lista__elementoTexto__escritorio);
    padre.removeChild(Lista__elementoTexto__celular);
};
