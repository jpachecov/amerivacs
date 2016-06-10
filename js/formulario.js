var hayErrores = false;
var error_nombre = {sel:"#error_nombre",desc:"Invalid name.",state:false};
var error_correo = {sel:"#error_correo",desc:"Invalid mail.",state:false};
var error_mensaje = {sel:"#error_mensaje",desc:"Please tell us more!",state:false}
var errores = [error_nombre,error_correo,error_mensaje];
var num_mensajes = 0;
 function verifica(tipo,valor){
     switch(tipo){
      case "nombre":
	     var re = /^[á-źÁ-Źa-zA-Z\s]*$/;;
    	 if(!re.test(valor) || valor.length <= 5){
    	     hayErrores = true;
           error_nombre.state = true;
           break;
    	 } else {
        error_nombre.state = false;
       }
      break;
     case "correo":
        console.log("verificando " + valor + " h");
        console.log(typeof(valor));
       var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	 if(!re.test(valor) || valor === null || valor === ""){
    	    hayErrores = true;
          console.log("hay error ccorreo");
          error_correo.state = true;
          break;
    	 } else {
        error_correo.state = false;
       }
       break;
     case "mensaje":
     if(valor.length <= 10){
          hayErrores = true;
          error_mensaje.state = true;
          break;
       } else {
        error_mensaje.state = false;
       }
       break;
    }
 }

function showError(error){

   $(error.sel).html(error.desc);
   $(error.sel).removeClass("error_formulario");
   $(error.sel).addClass("error_formulario");
   $(error.sel).animate({opacity:0.8},800);
}


function valida_datos(){
  var nombre = document.getElementById("nombre").value;
 var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("comentario").value;

  hayErrores = false;
    verifica("nombre",nombre);
    verifica("correo",correo);
    verifica("mensaje",mensaje);
  if(!hayErrores){
      /*Si ya no hay errores en el formulario pero hay
      errores anteriores aun en pantalla:
     limpiamos errores y limpiamos datos o los ponemos en verde
*/

      errores.forEach(function(error){
          desapareceError(error);
      });



      var parametros = "nombre="+nombre+"&correo="+correo+"&mensaje="+mensaje;
      manda(parametros);
      num_mensajes++;
      $("#boton_form").css("position","relative");

      //Animacion circulo
      $("#boton_form p").animate({opacity:0},300,function(){
        $("#boton_form p").html("Thank you!");
        $("#boton_form p").animate({opacity:1,fontSize:"35px"},300)
      });

      //Animacion mensajes
      $("#mensaje").animate({height:"120px"},180);

      $("#mensaje span").animate({opacity:0},300,function(){
        $("#mensaje span").html("Has mandado " + num_mensajes+ " mensaje(s).");
        $("#mensaje span").animate({opacity:1,fontSize:"25px"},500,function(){
          $("#mensaje span").animate({opacity:0},500,function(){
            $("#mensaje").animate({height:"60px"},180);
            $("#mensaje span").css("font-size","");
            $("#mensaje span").html("¡Mándanos un mensaje!");
            $("#mensaje span").animate({opacity:1},300);
          });
        });
      });

      //Animacion regresa boton
      $("#boton_form").animate({
            borderTopLeftRadius: 500,
            borderTopRightRadius: 500,
            borderBottomLeftRadius: 500,
            borderBottomRightRadius: 500,
            width:"300px",height:"300px",top:"-300px"}, 1500);
            $("#boton_form").animate({opacity:0},900,function(){
              $("#boton_form p").css("font-size","20px");
              $("#boton_form").css("border-radius","");
              $("#boton_form").css("width","");
              $("#boton_form").css("height","");
              $("#boton_form").css("top","");
              $("#boton_form p").html("Send");
            $("#boton_form").animate({opacity:1},1000, function(){
              console.log("termino faceIn");
            });
            //$("#boton_form").fadeIn();
      });

  } else {
 //Hay errores
    //Para desaparecer errores antiguos
    errores.forEach(function(e){
      if(e.state == false){
        desapareceError(e);
      }
    });
    //Aparecermos nuevos errores
    errores.forEach(function(e){
      if(e.state)
        showError(e);
    });
  }
}

function desapareceError(error){
  console.log("desaparece " + error.sel);
  error.state = false;
  $(error.sel).fadeOut();

}




function manda(parametros){
   var ajax = new XMLHttpRequest();
   ajax.open("POST", "php/miFormulario.php", true);
   ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function(){
       if(ajax.status == 200 && ajax.readyState == 4){
          respuesta = JSON.parse(ajax.response);
          console.log(respuesta);
        }
   }
   ajax.send(parametros);
}