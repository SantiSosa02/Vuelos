const validarVuelo=()=>{

    const departing=document.getElementById("departing").value;
    const returning=document.getElementById("returning").value;

    const today=new Date();

    let mensaje="";

    if(departing < today || returning < today){
        mensaje +='Las fechas deben ser mayores ala fecha actual';
    }
    else if(departing > returning){
        mensaje +='La fecha de partida debe ser menor o igual a la de regreso';
    }else{
        mensaje +="Fechas agregadas exitosamente"
    }

    const alertElement=document.getElementById("mensaje");

    if(mensaje.length>0){
        alertElement.style.display="block";
        alertElement.innerHTML=mensaje;
    }else{
        alertElement.style.display="none";
    }
}
document.querySelector("#btnRegistrarVuelo")
.addEventListener('click',()=>validarVuelo())