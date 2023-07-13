export interface RegistroHospitalizaciones {
    id?: string;
    fecha_ingreso : Date;
    fecha_salida : Date;
    cama : number;
    motivo_hospitalizacion : string;
    diagnostico : string;
    tratamiento : string;
   
}
