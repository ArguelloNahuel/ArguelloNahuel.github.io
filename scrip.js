
//constantes texto
const textoIngresado=document.querySelector(".Seccion__Texto__Area");
const imagenArea2=document.querySelector(".Segunda_Seccion__Imagen");
const TextoArea2=document.querySelector(".Segunda_Seccion__Contenido__Mensaje");
const TextoParrafoArea2=document.getElementById("resultado");


/*Constantes botones*/
const botonEncriptar=document.querySelector(".Texto__Botones__Encriptar");
const botonDesencriptar=document.querySelector(".Texto__Botones__Desencriptar");
const botonCopiar=document.querySelector(".Texto__Botones__Copiar");

//constante matriz 
const  Llave=[
    ["e","enter"], 
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],


];


/*INFORMACION DE MANEJO DE MATRIZ 


javascript
Copiar código
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
En este ejemplo, matriz es un arreglo que contiene tres arreglos internos, y cada uno de esos arreglos contiene tres números.

Acceso a los Elementos
Para acceder a un elemento específico, usa dos índices:

El primer índice especifica el arreglo interno.
El segundo índice especifica el elemento dentro de ese arreglo.
Por ejemplo:

matriz[0] devuelve el primer arreglo: [1, 2, 3].
matriz[1] devuelve el segundo arreglo: [4, 5, 6].
matriz[2] devuelve el tercer arreglo: [7, 8, 9].
Para acceder a un elemento específico dentro de uno de estos arreglos internos:

matriz[0][0] devuelve el primer elemento del primer arreglo: 1.
matriz[0][1] devuelve el segundo elemento del primer arreglo: 2.
matriz[1][2] devuelve el tercer elemento del segundo arreglo: 6.
matriz[2][1] devuelve el segundo elemento del tercer arreglo: 8.*/
//FUNCIONES
function EncriptarMensaje(mensaje){
    /*le paso un mensaje que es una palabra o texto indefinido en tamaño*/

    
    let variableTexto="";
    
    for(let i=0;i<mensaje.length;i++){
        let letraMensaje=mensaje[i];    /*le asigno la letra contenida en esa posicion*/
        let mensajefinal=letraMensaje;

        for(let j=0 ;j<Llave.length;j++){
            if(letraMensaje===Llave[j][0]){
                mensajefinal=Llave[j][1];
            break;
            }
        }
    
    variableTexto+=mensajefinal;
    } 
    return variableTexto;
}


function DesencriptarMensaje(mensaje){
    let mensajeModificable=mensaje;

    for(let i=0;i<Llave.length;i++){
        
        let regex= new RegExp(Llave[i][1],"g"); /*exprecion regular permite identificar patrones en textos*/
        mensajeModificable=mensajeModificable.replace(regex,Llave[i][0]);
        
    }

    return mensajeModificable;
}

//EVENTOS 

textoIngresado.addEventListener("input" , (e)=>{
    imagenArea2.style.display="none";
    /*console.log(e.target.value); para mirar en consola*/
    TextoArea2.textContent="Ingresando Mensaje"; /*RESULTADO TITULO*/
    TextoParrafoArea2.style.display="none";         /*PARRAFO RESULT TEXT*/

})

botonEncriptar.addEventListener("click", (e)=>{
    
    e.preventDefault(); /*PREVIENE EL COMPORTAMIENTO DEL BOTON DEFAULT*/
    TextoParrafoArea2.style.display="grid"; /*AL FINNNNNNNNNNNNNNN SIIIUUUUUUUUUUUUUUUUUUUU */
    
    let mensaje=textoIngresado.value.toLowerCase(); /*convierte el string a minusculas*/
    
    let MensajeEncriptado=EncriptarMensaje(mensaje);
    
    //console.log(MensajeEncriptado); mensaje de prueba

    botonCopiar.classList.remove("hidden");
    
    TextoArea2.textContent="El resultado es :";
    TextoArea2.style.textAlign="center"; /*EAEAEAEA*/

    TextoParrafoArea2.textContent=MensajeEncriptado;
    TextoParrafoArea2.style.textAlign="center";
  
    

    
}
)



if (botonDesencriptar) {
    botonDesencriptar.addEventListener("click", (e) => {
      e.preventDefault();
      
      TextoParrafoArea2.style.display = "grid";
      
      let mensajeDes = textoIngresado.value.toLowerCase();
      let mensajeDesencriptado = DesencriptarMensaje(mensajeDes);
      //console.log(mensajeDesencriptado); MENSAJE DE PRUEBA
      TextoParrafoArea2.textContent = mensajeDesencriptado;
      TextoArea2.textContent="El resultado es :";
      TextoArea2.style.textAlign = "center";
      TextoParrafoArea2.style.textAlign = "center";
      botonCopiar.classList.remove("hidden");
    });
  } else {
    console.error('botonDesencriptar no tiene suficientes elementos.');
  }



  botonCopiar.addEventListener("click" , (e)=>{
    let variableTextoCopiado=TextoParrafoArea2.textContent;
    navigator.clipboard.writeText(variableTextoCopiado).then(()=>{   //portapapeles

    })
    imagenArea2.style.display="block";
    TextoArea2.textContent="El texto fue Copiado";
    botonCopiar.classList.add("hidden");
    TextoParrafoArea2.textContent="";
  })