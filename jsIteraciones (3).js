function Mostrar()
{
var intentos=0;
var clave = prompt("ingrese el número clave.");
	while(clave != "utn750" && intentos <3)
	{
		clave= prompt("ingrese el número clave.");
		intentos++;
	}
	if(clave == "utn750")
	{
		alert("clave correcta");
	}
	
}//FIN DE LA FUNCIÓN
