  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let dni = document.getElementById("DNI");
  let telcel = document.getElementById("telcel");
  let error = document.getElementById("error");
  let tablaM= [
    {Nombre: "Angel",Apellido: "Cayotopa", DNI: "00000701", Telefono: "982446215"},
    {Nombre: "Joel",Apellido: "Ticliahuanca", DNI: "89005232", Telefono: "987846253"},
    {Nombre: "Jonatan",Apellido: "Canales", DNI: "94828992", Telefono: "927546453"},
    {Nombre: "Joaquin",Apellido: "Bernabe", DNI: "89065272", Telefono: "977547233"},
    {Nombre: "Yulino",Apellido: "Benitez", DNI: "89040789", Telefono: "967946743"}
    ] ;
  
 

const agregarFila = () =>{
    agregarFilaA(nombre.value,apellido.value,dni.value,telcel.value); 
}

const eliminarT = () =>{
    tablaM=eliminarFila();
    ActualizarT();

}

const agregarFilaA = (nom,apel,dn,cel) =>{
  validarDatos();
  tablaM.push({Nombre: nom, Apellido: apel, DNI: dn, Telefono: cel});
  let fila="<tr><td>"+nom+"</td><td>"+apel+"</td><td>"+dn+"</td><td>"+cel+"</td></tr>";
  document.getElementById("tabla").insertRow(-1).innerHTML = fila;
  }
  
  const validarNombre = (e) =>{
    if(nombre.value == '' || nombre.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>First name please causa</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  const validarApellido = (e) =>{
    if(apellido.value == '' || apellido.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>Second name please causa</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  const validarDNI = (e) =>{
    if(dni.value == '' || dni.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>DNI no carnet extranjeria please</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  const validarFono = (e) =>{
    if(telcel.value == '' || telcel.value == null){
        error.style.display= 'block';
        error.innerHTML += '<li>Fono please</li>';
        e.preventDefault();
    }else{
        error.style.display = 'none';
    }
  }

  const validarDatos = (e) =>{
    error.innerHTML='';
    validarNombre(e);
    validarApellido(e);
    validarDNI(e);
    validarFono(e);
  }

  const validarDNID = (e) =>{
    error.innerHTML='';
    validarDNI(e);
  }

  const eliminarFila= () =>{
    validarDNID();
    let comp = dni.value;
    let ind = tablaM.findIndex(fil => fil.DNI === comp);
    if (ind != -1){
       tablaM.splice(ind, 1);
       return tablaM;
    }else{
      alert("DNI NO REGISTRADO");
      return tablaM;
     }
  }

  const ActualizarT = () =>{
    let Parent = document.getElementById("tablabody");
      while(Parent.hasChildNodes())
      {
      Parent.removeChild(Parent.firstChild);
        }
      let Tsusti = tablaM.map(function(fila){
          return fila;
        })
      let revert = Tsusti.reverse();
        do{
      let temp = revert.pop();
      let fil = "<tr><td>"+temp.Nombre+"</td><td>"+temp.Apellido+"</td><td>"+temp.DNI+"</td><td>"+temp.Telefono+"</td></tr>";
      document.getElementById("tablabody").insertRow(-1).innerHTML = fil;
    }while(revert.length!=0);
  }

  