
var allPersonas=[];
if(localStorage.getItem("inf") != null){
    allPersonas = JSON.parse(localStorage.getItem("inf"));
    
}



function guardar() {
    infoPersonal=[];
    educacion=[];
    experiencia=[];
    referencias=[];

    persona=[];

    infoPersonal.push($("#nombre").val());
    infoPersonal.push($("#cedula").val());
    infoPersonal.push($("#correo").val());
    infoPersonal.push($("#direccion").val());
    infoPersonal.push($("#barrio").val());
    infoPersonal.push($("#localidad").val());
    infoPersonal.push($("#ciudad").val());
    infoPersonal.push($("#telefono").val());
    infoPersonal.push($("#celular").val());
    infoPersonal.push($("#perfil").val());

    persona.push(infoPersonal);

    educacion.push($("#nivel").val());
    educacion.push($("#institucion").val());
    educacion.push($("#titulo").val());
    educacion.push($("#fechafin").val());

    persona.push(educacion);

    experiencia.push($("#empresa").val());
    experiencia.push($("#cargo").val());
    experiencia.push($("#inicio").val());
    experiencia.push($("#fin").val());
    experiencia.push($("#jefe").val());
    experiencia.push($("#telefonoE").val());

    persona.push(experiencia);

    referencias.push($("#nombreR").val());
    referencias.push($("#telefonoR").val());

    persona.push(referencias);

    allPersonas.push(persona);

    ajson = JSON.stringify(allPersonas);

    localStorage.setItem("inf",ajson);

    limpiar();
    links();

}
function limpiar() {
    $("#nombre").val("");
    $("#cedula").val("");
    $("#correo").val("");
    $("#direccion").val("");
    $("#barrio").val("");
    $("#localidad").val("");
    $("#ciudad").val("");
    $("#telefono").val("");
    $("#celular").val("");
    $("#perfil").val("");

    $("#nivel").val("");
    $("#institucion").val("");
    $("#estado").val("");
    $("#fechaFin").val("");

    $("#empresa").val("");
    $("#cargo").val("");
    $("#inicio").val("");
    $("#fin").val("");
    $("#jefe").val("");
    $("#telefonoE").val("");

    $("#nombreR").val("");
    $("#telefonoR").val("");

}
function links() {
    hv = JSON.parse(localStorage.getItem("inf"));
    $(".bt").remove();
    if(hv != null){
        for(i=0; i< hv.length; i++){
        $("#hojas").append("<button class='bt' onclick=enviar("+i+")>"+hv[i][0][0]+"</button>")
        }
    }
}
function enviar(id) {
    localStorage.setItem("hoja",id);
    window.open("hojaVida.html");
    //mostrar();
}
function mostrar() {
    hojas = JSON.parse(localStorage.getItem("inf"));
    per = localStorage.getItem("hoja");

    $("#Hnombre").append(hojas[per][0][0]);
    $("#Hcedula").append(hojas[per][0][1]);
    $("#Hcorreo").append(hojas[per][0][2]);
    $("#Hdireccion").append(hojas[per][0][3]);
    $("#Hbarrio").append(hojas[per][0][4]);
    $("#Hlocalidad").append(hojas[per][0][5]);
    $("#Hciudad").append(hojas[per][0][6]);
    $("#Htelefono").append(hojas[per][0][7]);
    $("#Hcelular").append(hojas[per][0][8]);
    $("#Hperfil").append(hojas[per][0][9]);

    $("#Hnivel").append(hojas[per][1][0]);
    $("#Hinstitucion").append(hojas[per][1][1]);
    $("#Htitulo").append(hojas[per][1][2]);
    $("#Hfechafin").append(hojas[per][1][3]);

    $("#Hempresa").append(hojas[per][2][0]);
    $("#Hcargo").append(hojas[per][2][1]);
    $("#Hperiodo").append(hojas[per][2][2]);
    $("#Hperiodo").append(" - "+hojas[per][2][3]);
    $("#Hjefe").append(hojas[per][2][4])
    $("#HtelefonoE").append(hojas[per][2][5]);
    
    $("#HnombreR").append(hojas[per][3][0]);
    $("#HtelefonoR").append(hojas[per][3][1]);
}