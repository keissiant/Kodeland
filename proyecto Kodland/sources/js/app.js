document.addEventListener("DOMContentLoaded",()=>{
    
    // variables
    let flechaIzq = document.querySelector(".flechaIzq");
    let flechaDer = document.querySelector(".flechaDer");
    let flechaIzqBton = document.querySelector(".flechaIzqBton");
    let flechaDerBton = document.querySelector(".flechaDerBton");
    let flechas = document.querySelectorAll(".flechas");
    let imagenPaleta = document.querySelector(".imagen__paleta");
    let imagenPaletaRoja = document.querySelector(".imagen__paletaRoja");
    let imagenBeneficios = document.querySelector(".seccionBeneficios");
    let header = document.querySelector(".header");
    


    //cambio de imagen paleta header

    // Funcion que lee el link de la imagen y la cambia por el
    // de la siguiente imagen, a su vez cambia el color de fondo del header
    let index = 0;
    function cambioPaletaHeader(){
        if(index==0){
            imagenPaleta.classList.add("imagen__paletaDos");
            imagenPaletaRoja.classList.add("imagen__paletaRojaA");
            header.style.backgroundColor = "#fc2e20";
            index = 1;
        }else{
            imagenPaleta.classList.remove("imagen__paletaDos");
            imagenPaletaRoja.classList.remove("imagen__paletaRojaA");
            header.style.backgroundColor = "#ffbf69";
            index = 0;
        }
    }
    // Se le adjunta un eventListener a cada flecha para escuchar
    // por el click en cada una de ellas y llamar la funcion cambioPaletaHeader
    flechaIzq.addEventListener("click", cambioPaletaHeader);
    flechaDer.addEventListener("click", cambioPaletaHeader);

    //cambio fondo de la seccion beneficios

    function cambioBeneficios(){
        if(imagenBeneficios.classList.contains("seccionBeneficiosDos")){
            imagenBeneficios.classList.remove("seccionBeneficiosDos");
            flechas.forEach((flecha)=>{
                flecha.style.fill = "#FFBF69";
            })
        }else{
            imagenBeneficios.classList.add("seccionBeneficiosDos");
            flechas.forEach((flecha)=>{
                flecha.style.fill = "#FD7F20";
            })
        }
    }
    flechaIzqBton.addEventListener("click", cambioBeneficios);
    flechaDerBton.addEventListener("click", cambioBeneficios);
})