/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
   var NumeroUno;
   var NumeroDos;
   var suma;
   NumeroUno=document.getElementById('numeroUno').value;
   NumeroDos=document.getElementById('numeroDos').value;
   suma=parseInt(NumeroUno)+ parseInt(NumeroDos);
   alert(suma);
   
}

