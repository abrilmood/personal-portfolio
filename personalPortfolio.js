var imagenes = document.getElementsByClassName("img-grid");
//Imagen inicial es index 0
var  imagenActual = 0; 
var this_response;

function hacerGrande(n){
    document.getElementById("imagenAgrandada").src= imagenes[n].src; 
    imagenActual = n;
}



function cambiarImagen(n){
    imagenActual= imagenActual+n;
    if(imagenActual>=imagenes.length){
        imagenActual = 0;
    }
    if(imagenActual<0){
        imagenActual = imagenes.length-1;
    }
    document.getElementById("imagenAgrandada").src= imagenes[imagenActual].src;
}

axios({
  method: 'get',
  url: 'https://api.github.com/users/abrilmood/repos',
}).then((response) => {
  var data = response.data;
  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
  var i = 0;
var names = []
 do{
  // console.log(data[i].name)
  var miH2 = document.createElement("h2");
  var contenidoDeH2 = document.createTextNode(data[i].name);
  var contenidoDeHref =document.createTextNode(data[i].url);
  var a= document.createElement('a');

  miH2.appendChild(contenidoDeH2);

  a.setAttribute('href',data[i].svn_url);
  a.setAttribute('target', "_blank")
  a.innerHTML = miH2.innerHTML;
  console.log(a.href)

  var myDivDeProyectos = document.getElementById("divDeProyectos");
  myDivDeProyectos.appendChild(a);
  
 
  
  a.classList.add('proyectos-grid');
  

   i++;
 } while(i< data.length)


//  for(var aux=0; aux < data.length; aux++){
//   console.log(data[aux].name)
//  }

//  for(each_data of data){
//   console.log(each_data.name)
//  }

// data.forEach(datitas => {
//   console.log(datitas.name)
// })

});


