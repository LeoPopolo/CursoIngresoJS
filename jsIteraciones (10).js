function Mostrar()
{

	var numero;
	var acumPos=0;
	var acumNeg=0;
	var cantPos=0;
	var cantNeg=0;
	var cantCero=0;
	var cantPar=0;
	var promPos;
	var promNeg;
	var dif;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero= prompt("ingrese un numero:");
		numero= parseInt(numero);

		if(numero>0)
		{

		acumPos= acumPos + numero;
		cantPos++;

		}
		if(numero<0)
		{
		acumNeg= acumNeg + numero;
		cantNeg++;
		}

		if(numero == 0)
			{
				cantCero++;
			}
		if(numero%2==0 && numero!=0)
			{
				cantPar++
			}
		promPos= acumPos / cantPos;
		promNeg= acumNeg / cantNeg;
		dif= acumPos + acumNeg;

		respuesta= prompt("continuar? [si/no]:");
	
	while(respuesta!= "si" && respuesta != "no")
		{
			respuesta=prompt("ingrese si/no");
		}
	}
	document.write("la suma de los positivos es: " + acumPos + "</br>");
	document.write("la suma de los negativos es: " + acumNeg + "</br>");
	document.write("la cantidad de positivos es: " + cantPos + "</br>");
	document.write("la cantidad de negativos es: " + cantNeg + "</br>");
	document.write("la cantidad de ceros es: " + cantCero + "</br>");
	document.write("la cantidad de pares es: " + cantPar + "</br>");
	document.write("el promedio de positivos es: " + promPos + "</br>");
	document.write("el promedio de negativos es: " + promNeg + "</br>");
	document.write("la diferencia entre positivos y negativos es: " + dif + "</br>");


}//FIN DE LA FUNCIÓN