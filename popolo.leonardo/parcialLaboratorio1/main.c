#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint-gcc.h>
#include "estacionamiento.h"

#define FIAT 1
#define FORD 2
#define PEUGEOT 3
#define RENAULT 4
#define VOLKSWAGEN 5





int main()
{
    eAutos automovil[20];



    char seguir='s';

    while(seguir=='s')
    {
        int opcion;
        printf("\n1- Dar de alta un automovil\n");
        printf("2- Dar de baja un automovil\n");
        printf("3- Ingreso del auto a la playa de estacionamiento\n");
        printf("4- Egreso de automovil\n");
        printf("5- Listar todos los autos\n");
        printf("6- Listar los autos estacionados\n");
        printf("7- Autos estacionados de la marca fiat\n");
        printf("8- Listar autos fueras del estacionamiento\n");


        scanf("%d",&opcion);


        switch(opcion)
        {
            case 1:
                altaAutos(automovil);
                break;
            case 2:
                bajaAutos(automovil);
                break;

        }

    }


    return 0;
}



