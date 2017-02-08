function Mostrar()
{
  //tomo la edad  
  var edad;
  edad=document.getElementById('edad').value;
  edad=parseInt(edad);
  if(edad>17)
  {
  	alert("es mayor");
  }
  if(edad<13)
  {
  	alert("es niño");
  }
  if(edad>12 && edad<18)
  {
  	alert("es adolescente");
  }
  
}//FIN DE LA FUNCIÓN