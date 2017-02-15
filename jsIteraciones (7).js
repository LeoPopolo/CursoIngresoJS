function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta== true)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador + numero;
		contador=contador +1;
		respuesta=confirm("ingresar otro numero?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN