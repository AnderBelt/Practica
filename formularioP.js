  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var dni = document.getElementById("DNI");
  var telcel = document.getElementById("telcel");
  var error = document.getElementById("error");
  var tablaM= [
    {Nombre: "Angel",Apellido: "Cayotopa", DNI: "00000701", Telefono: "982446215"},
    {Nombre: "Joel",Apellido: "Ticliahuanca", DNI: "89005232", Telefono: "987846253"},
    {Nombre: "Jonatan",Apellido: "Canales", DNI: "94828992", Telefono: "927546453"},
    {Nombre: "Joaquin",Apellido: "Bernabe", DNI: "89065272", Telefono: "977547233"},
    {Nombre: "Yulino",Apellido: "Benitez", DNI: "89040789", Telefono: "967946743"}
    ] ;
  var revert = [{}];
 


function agregarFila(){
  validarDatos();
  tablaM.push({Nombre: nombre.value, Apellido: apellido.value, DNI: dni.value, Telefono: telcel.value});
  var fila="<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td>"+dni.value+"</td><td>"+telcel.value+"</td></tr>";
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
    if(dni.value == '' || dni.value == null){
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
  }

  function eliminarFila(){
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length;
 
    if(rowCount <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCount -1);
  }*/

  function eliminarFila(){
    var table = document.getElementById("tabla");
    validarDNI();
    var comp = dni.value;
    var ind = tablaM.findIndex(fil => fil.DNI === comp);
    if (ind != -1){
       tablaM.splice(ind, 1);
       var Tsusti = tablaM.map(function(fila){
        return fila;
      })
      revert = Tsusti.reverse();
      ActualizarT();
    }


    /*
    var rowCount = table.rows.length;
 
    if(rowCount <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCount -1);
      */
  }

  function ActualizarT(){
    var Parent = document.getElementById("tablabody");
      while(Parent.hasChildNodes())
      {
      Parent.removeChild(Parent.firstChild);
        }
    do{
      var temp = revert.pop();
      var fil = "<tr><td>"+temp.Nombre+"</td><td>"+temp.Apellido+"</td><td>"+temp.DNI+"</td><td>"+temp.Telefono+"</td></tr>";
      document.getElementById("tabla").insertRow(-1).innerHTML = fil;
    }while(revert.length!=0);
  }