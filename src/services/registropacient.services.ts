import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroPacientes } from "src/interfaces/registropacientes.interfaces";
@Injectable({
    providedIn: 'root'
})
export class RegistroPacientServices {
    constructor(private firestore: Firestore){}
    addPlace(registroPaciente: RegistroPacientes){
       const registpacienteRef = collection(this.firestore, 'RegistroPacientes');
       return addDoc(registpacienteRef, registroPaciente);
    }
    }
