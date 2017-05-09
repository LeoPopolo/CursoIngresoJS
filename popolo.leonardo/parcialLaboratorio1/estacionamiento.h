typedef struct
{
    char patente[20];
    char marca[20];
    char modelo[20];
    int profesor;
    int estaVacio;


}eAutos;

void altaAutos(eAutos automovil[]);
void bajaAutos(eAutos automovil[]);
int valS_N();
int buscarPatente(eAutos automovil[]);

