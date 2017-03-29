<?php
/*
$para      = 'la.parte.imaginaria@gmail.com';
$titulo    = '[Mensaje de pagina web]';
$mensaje   = $_POST['mensaje'];
$texto = str_replace("\n.", "\n..", $mensaje);
$nombre =  $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje_completo = "Nombre de la persona que se contacto es : " . $nombre . " y su   correo es : ". $correo. "el mensaje del cliente es :".$texto;
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


$respuesta = array();

//if(validateUsername($nombre) && validateMsn($texto) && validateEmail($correo)){
    if( mail($para, $titulo,  $mensaje_completo, $cabeceras) ){
        $respuesta["success"] = true;
    } else {
        $respuesta["success"] = false;
        $respuesta['todo'] = [$para, $titulo,  $mensaje_completo , $cabeceras];
    }


echo (json_encode($respuesta));

function validateUsername($nombre){
    //NO cumple longitud minima
    if(strlen($nombre) < 4){
        return false;
    }

    if(!preg_match("/^([A-Z|Ñ|a-z|ñ|Á|É|Í|Ó|Ú|á|é|í|ó|ú]+\s{0,1})+$/", $nombre)){
        return false;
    }

    return true;
}

function validateMsn($texto){
    //NO cumple longitud minima
    if(strlen($texto) < 10){
        return false;
    // SI longitud, SI caracteres A-z
    } else {
         return true;
    }
}


function validateEmail($email){
    //NO hay nada escrito
    if(strlen($email) == 0){
        return false;
    }

    // SI escrito, NO VALIDO email
    if(!filter_var($email, FILTER_SANITIZE_EMAIL)){
        return false;
    }

    // SI rellenado, SI email valido
    return true;
}
*/


$postdata = file_get_contents("php://input");
$data = json_decode($postdata);
$name = $data->name;
$mail = $data->mail;
$phone = $data->phone;
$message = $data->message;


/*
$body = "<html><body>";
$body.= '<h2 style="color:blue;font-family: sans-serif"> Hello Mr. Tadlock! These are the message details: </h2>';
$body.= '<p style="font-family: sans-serif"><span style="font-family: sans-serif">Name:</span>'. $name .'</p>';
$body.= '<p style="font-family: sans-serif"><span style="font-family: sans-serif">Phone:</span>'. $phone .'</p>';
$body.= '<p style="font-family: sans-serif"><span style="font-family: sans-serif">Email:</span>'. $mail .'</p>';
$body.= '<p style="font-family: sans-serif"><span style="font-family: sans-serif">Message:</span>'. $message .'</p>';
$body.= "</body></html>"
*/

$to = "sales@amerivacs.com";
$subject = "Hello AmeriVacS Sales";
$txt ="This is the new message: \n";
$txt.="From: ".$name . "\n";
$txt.='Mail: '.  $mail . "\n";
$txt.='Phone: '. $phone . "\n";
$txt.='Message: '. $message . "\n";
$headers = "From: contact@amerivacs.com";

if(mail($to,$subject,$txt,$headers)){
    echo '0';
} else {
    echo '-1';
}


//echo $name . " \n " . $mail . " \n " . $phone . " \n " . $message;

?>
