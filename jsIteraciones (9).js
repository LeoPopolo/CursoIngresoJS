function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var numMax;
	var numMin;

	while(respuesta=='si')
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(contador==0)
		{
			numMax=numero;
			numMin=numero;
		}
		else
		{
			if(numero<numMin)
			{
				numMin=numero;
			}
			if(numero>numMax)
			{
				numMax=numero;
			}

		}
		contador=contador+1;
		respuesta=prompt("quiere continuar?");

	}

	document.getElementById('maximo').value=numMax;
	document.getElementById('minimo').value=numMin;




}//FIN DE LA FUNCIÓN