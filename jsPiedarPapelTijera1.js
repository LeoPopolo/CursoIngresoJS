/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra;
var papel;
var tijera;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);




}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	switch(eleccionMaquina)
	{
		case 1:
		alert("el adversario elegio: " + eleccionMaquina + " ...empate");
		break;

		case 2:
		alert("el adversario elegio: " + eleccionMaquina + " ...usted perdio");
		break;

		case 3:
		alert("el adversario elegio: " + eleccionMaquina + " ..usted gano");
		break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	switch(eleccionMaquina)
	{
		case 1:
		alert("el adversario elegio: " + eleccionMaquina + " ...usted gano");
		break;

		case 2:
		alert("el adversario elegio: " + eleccionMaquina + " ...empate");
		break;

		case 3:
		alert("el adversario elegio: " + eleccionMaquina + " ...usted perdio");
		break;
	}


}//FIN DE LA FUNCIÓN
function tijera()
{
	
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	switch(eleccionMaquina)
	{
		case 1:
		alert("el adversario elegio: " + eleccionMaquina + " ...usted perdio");
		break;

		case 2:
		alert("el adversario elegio: " + eleccionMaquina + " ...usted gano");
		break;

		case 3:
		alert("el adversario elegio: " + eleccionMaquina + " ...empate");
		break;
	}


}//FIN DE LA FUNCIÓN