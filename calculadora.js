
//lista de objetos html 
const toWrite=document.getElementsByClassName("toConcatenate"); 
let text=""
let textBox=document.getElementById("textBox")
function putHtmlElementsInList(elementos){
    list=[]
    for (let index = 0; index < elementos.length; index++) {
        list.push(elementos[index])
    }
    return list
} 

putHtmlElementsInList(toWrite).forEach(element => {
    element.addEventListener("click",function(){text=text+element.innerText
        UpdateTextBox()})
});

function UpdateTextBox(){
    textBox.value=text   
}
//borrar ultimo elemento de la cadena texto 
document.getElementById("borrar").addEventListener("click",borrar)
function borrar(){
    text=text.substring(0,text.length-1);
    UpdateTextBox()
    
}
//borrar todo en textBox 
document.getElementById("limpiar").addEventListener("click",function(){text=""; UpdateTextBox()})
//calcular
document.getElementById("result").addEventListener("click",function(){
    try {
        text=eval(text).toString()
        UpdateTextBox()
    } catch (SyntaxError) {
        alert("Entrada no válida")
    }
   


})





