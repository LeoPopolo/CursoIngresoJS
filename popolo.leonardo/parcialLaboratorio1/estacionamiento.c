#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "estacionamiento.h"

void altaAutos(eAutos automovil[])
{
    char patente[20][10];
    char marca[20][15];
    char modelo[20][15];
    int profesor[20] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int i;


     for(i=0; i<20;i++)
     {




             printf("%s","ingrese patente: ");
             fflush(stdin);
             scanf ("%[^\n]s", patente[i]);

             printf("%s","ingrese marca: ");
             fflush(stdin);
             scanf ("%[^\n]s", marca[i]);

             printf("%s","ingrese modelo: ");
             fflush(stdin);
             scanf ("%[^\n]s", modelo[i]);

             break;




    }

     if(i==20)
     {
         printf("Capacidad agotada.\n");
     }

}

void bajaAutos(eAutos automovil[])
{
    int i;
    int patenteAux;
    char rta;
    patenteAux= buscarPatente(automovil);


    for(i=0;i<20;i++)
    {
        if(patenteAux == i)
        {

            printf("Desea eliminarlo? ");
            rta=valS_N();
            if(rta==1)
                automovil[i].estaVacio=1;

            break;
        }
    }
     if(i==20)
    {
        printf("No existe la patente buscada\n");
    }



}
int valS_N()
 {
     char rta;

     printf("S/N? ");
     fflush(stdin);
     rta= getche();
     rta= toupper(rta);

     while(rta!='S' && rta!='N')
     {
         printf("ERROR REINGRESE,continuar? S/N");
         fflush(stdin);
         scanf("%c", &rta);
         rta= toupper(rta);
     }
     if(rta== 'S')
     {
         return 1;
     }
     else
     {
         return 0;
     }
 }
 int buscarPatente(eAutos automovil[])
{
    int ind=0,i;
    long int patenteAux;

    printf("Ingrese la pantente: ");
    scanf("%li", &patenteAux);
    for(i=0;i<20;i++)
    {
        if(patenteAux==automovil[i].patente)
        {
            ind=i;
            break;
        }
    }
    return ind;
}



