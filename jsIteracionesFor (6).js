function Mostrar()
{

	var numero = prompt("ingrese numero");
	var cantidadPar=0;
	var i;
	numero=parseInt(numero);
	for(i=1; i<=numero; i++)
	{
		if(i%2==0)
		{
			document.write(i);
			cantidadPar++;
		}
	}
	document.write("la cantidad de numeros pares es: " + cantidadPar);


}//FIN DE LA FUNCIÓN