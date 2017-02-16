function Mostrar()
{

	var contador=0;
	var acumPositivo=0;
	var acumNegativo=1;
	var numero;
	var respuesta='si';

	while(respuesta== 'si')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			acumNegativo=acumNegativo* numero;
		}
		else
		{
			acumPositivo=acumPositivo+ numero;
		}
		
		respuesta=prompt("quiere continuar?");

	}


document.getElementById('suma').value=acumPositivo;
document.getElementById('producto').value=acumNegativo;

}//FIN DE LA FUNCIÓN