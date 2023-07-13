export interface RegistroPacientes {
    id?: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    direccion: string;
    telefono: number;
    email: string;
    cedula: number;
    enfermedades: string;
    alergia: string;
    tiposangre: string;
    historial: number;
    edad: number;
    genero: string;
  }