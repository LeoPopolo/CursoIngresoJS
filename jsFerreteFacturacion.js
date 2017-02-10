/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	suma=parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
	alert(suma);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;	
	promedio=parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
	promedio=parseInt(promedio) /3;
	alert(promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	precioFinal=parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
	precioFinal=parseInt(precioFinal) * 1.21;
	alert(precioFinal);
}