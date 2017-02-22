function Mostrar()
{
	var numero;
	var bandera=0;
	for(numero=1; numero<=10; numero++)
	{
		if(bandera==0)
		{
			alert(numero);
			bandera=1;
		}
		else
		{
			alert(" - " + numero);
		}
		
	}
}