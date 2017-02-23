function Mostrar()
/*se ingresara los datos de los alumnos del curso de ingreso,
a partir de estos datos, deberemos informar lo siguiente: 
1- la mejor nota.
2- promedio de notas.
3- cantidad de mujeres aprobadas mayores a 25 años.
4- el sexo y el nombre de la ultima persona que se saco 10.
5- la cantidad de hombres desaprobados.
6- la cantidad de mujeres aprobadas.
7- el promedio de nota de las mujeres.
8- el promedio de notas de los hombres mayores a 30.
9- que sexo desaprobo mas.
10- cuantas personas menores a 30 años desaprobaron el examen.
los datos de los alumnos son:
-nombre, edad, nota y sexo*/
{
	var nombre;
	var edad;
	var nota;
	var sexo;
	var respuesta=true;
	var contador=0;
	var notaMax;
	var notaMin;
	var sumaNotas=0;
	var promedio;
	var contadorMuj=0;
	var sexo10;
	var nombre10;
	var contHomDesap=0;
	var contMujDesap=0;
	var contMujAprob=0;
	var promNotaMujeres;
	var contNotaMuj=0;
	var cantMujNota=0;
	var promNotaHombres;
	var contNotaHom=0;
	var cantHomNota=0;
	var cantidadNotH=0;
	var sexoAprobado;
	var personasDesap=0;

	

	while(respuesta==true)
	{

	nombre=prompt("ingrese nombre: ");
	edad=prompt("ingrese edad: ");
	edad=parseInt(edad);
	while(edad<10 || edad >100)
	{
		edad=prompt("error, ingrese edad: ");
		edad=parseInt(edad);
	}
	nota=prompt("ingrese la nota: ");
	nota=parseInt(nota);
	while(nota<0 || nota>10)
	{
		nota=prompt("error, ingrese la nota: ");
		nota=parseInt(nota);
	}
	sexo=prompt("sexo: ingrese m o f segun corresponda");
	sumaNotas+=nota;
	

	if(contador==0)
	{
		notaMax=nota;
		nombre10=nombre;
		sexo10=sexo;

	}

	if(sexo=="f" && edad>25 && nota>3)
		{
			contadorMuj++;
		}	

	if(nota==10)
		{
			sexo10=sexo;
			nombre10=nombre;
		}

	if(sexo=="m" && nota <4)
		{
			contHomDesap++;
		}

	if(sexo=="f" && nota >3)
		{
			contMujAprob++;
		}


	if(sexo=="f" && nota>3)
		{
			contNotaMuj=contNotaMuj+nota;
		}

	if(sexo=="f" && nota>0)
		{
			cantMujNota++;
		}

	promNotaMujeres=contNotaMuj/cantMujNota;


	if(sexo=="m" && nota>0 && edad>30)

		{
			contNotaHom=contNotaHom+nota;
		}

	if(sexo=="m" && nota>0 && edad>30)
		{
			cantHomNota++;
		}

	promNotaHombres=contNotaHom/cantHomNota;

	if(sexo=="m" && nota>0)
		{
			cantidadNotH++;
		}

	if(sexo=="f" && nota<4)

		{
			contMujDesap++;
		}


	if(contador==0)
		{
			notaMax=nota;
		}	
		else
		{
			if(nota>notaMax)
			{
				notaMax=nota;
			}
		}



	if(edad<30 && nota<4)
		{
			personasDesap++;
		}
	if(contMujDesap<contHomDesap)
	{
		sexoAprobado="las mujeres son mas inteligentes";
	}	
	else if(contMujDesap>contHomDesap)
	{ 	
		sexoAprobado="los hombres son mas inteligentes";
		
	}
	else
	{
		sexoAprobado="somos todos seres humanos";
	}




	contador++;

	respuesta=confirm("desea continuar? si/no");

	}
	promedio=sumaNotas/contador;

	document.write("1- la persona con mejor nota es: "+"</br>"+"-"+nombre10+"</br>");
	document.write("2- el promedio de notas es: "+"</br>"+"-"+promedio+"</br>");
	document.write("3- la cantidad de mujeres aprobadas mayores a 25 es: "+"<br/>"+"-"+contadorMuj+"</br>");
	document.write("4- la ultima persona que se saco 10 es: "+"</br>"+"-"+nombre10
		+"y es: " + sexo10+"</br>");
	document.write("5- la cantidad de hombres desaprobados es: "+"</br>"+"-"+contHomDesap+"</br>");
	document.write("6- la cantidad de mujeres aprobadas es: "+"</br>"+"-"+contMujAprob+"</br>");
	document.write("7- el promedio de las notas de las mujeres es: "+"</br>"+"-"+promNotaMujeres+"</br>");
	document.write("8- el promedio de hombres aprobados mayores a 30 es: "+"</br>"+"-"+promNotaHombres+"</br>");
	document.write("9- quienes son mas inteligentes? "+"</br>"+"-"+sexoAprobado+"</br>");
	document.write("10- las personas menores a 30 años que desaprobaron son: "+"</br>"+"-"+personasDesap+"</br>");



}//FIN DE LA FUNCIÓN