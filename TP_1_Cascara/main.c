#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"



int main()
{
    char seguir='s';
    int opcion=0;
    int primerNum=0;
    int segundoNum=0;
    int result;




    while(seguir=='s')
    {

        printf("\n1- Ingresar 1er operando (A=x)\n");
        printf("2- Ingresar 2do operando (B=y)\n");
        printf("3- Calcular la suma (A+B)\n");
        printf("4- Calcular la resta (A-B)\n");
        printf("5- Calcular la division (A/B)\n");
        printf("6- Calcular la multiplicacion (A*B)\n");
        printf("7- Calcular el factorial (A!)\n");
        printf("8- Calcular todas las operacione\n");
        printf("9- Salir\n");

        scanf("%d",&opcion);

        switch(opcion)
        {
        case 1:
            printf("ingrese primer numero: ");
            scanf("%d", &primerNum);
            break;
        case 2:
            printf("ingrese segundo numero: ");
            scanf("%d", &segundoNum);
            break;
        case 3:
            result= sumar(primerNum, segundoNum);
            printf("la suma es: %d", result);
            break;
        case 4:
            result= restar(primerNum, segundoNum);
            printf("la resta es %d", result);
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            seguir = 'n';
            break;
        }

    }

    seguir=getche("desea seguir? s/n");


    return 0;
}

