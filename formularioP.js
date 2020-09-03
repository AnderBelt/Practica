  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var DNI = document.getElementById("DNI");
  var telcel = document.getElementById("telcel");
  var error = document.getElementById("error");


function agregarFila(){
  validarDatos();
  var fila="<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td>"+DNI.value+"</td><td>"+telcel.value+"</td></tr>";
   document.getElementById("tabla").insertRow(-1).innerHTML = fila;
    
  }
  
  function validarNombre(e){
    if(nombre.value == '' || nombre.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>First name please causa</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  function validarApellido(e){
    if(apellido.value == '' || apellido.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>Second name please causa</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }


  function validarDNI(e){
    if(DNI.value == '' || DNI.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>DNI no carnet extranjeria please</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  function validarFono(e){
    if(telcel.value == '' || telcel.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>Fono please</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  function validarDatos(e){
    error.innerHTML='';
    validarNombre(e);
    validarApellido(e);
    validarDNI(e);
    validarFono(e);
  }

   /*function eliminarFila(){
    var table = document.getElementById("tabla");
    var d_nested = table.indexOf(getElementById="00000701");
    table.removeChild(d_nested);
  }*/

  function eliminarFila(){
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length;
 
    if(rowCount <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCount -1);
  }