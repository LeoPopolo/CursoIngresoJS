function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil= document.getElementById('estadoCivil').value;
    if(edad<18 && estadoCivil !="soltero"){
    	document.write("es muy pequeño para no ser soltero");
    }

}//FIN DE LA FUNCIÓN