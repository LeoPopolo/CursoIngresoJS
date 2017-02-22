function Mostrar()
{
	var numero = prompt("ingrese numero");
	var cantidadDiv=0;
	var i;
	numero=parseInt(numero);
	for(i=1; i<=numero; i++)
	{
		if(numero% i ==0)
		{
			document.write(i);
			cantidadDiv++;
		}
	}
	document.write("la cantidad de numeros divisores es: " + cantidadDiv);



}//FIN DE LA FUNCIÓN