function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor((Math.random() * 10) + 1);
	if(nota>8)
	{
		alert("excelente " + nota);
	}
	if(nota>3 && nota<9)
	{
		alert("aprobo " + nota);
	}
	if(nota<4)
	{
		alert("vamos, la proxima se puede " + nota);
	}
}//FIN DE LA FUNCIÓN