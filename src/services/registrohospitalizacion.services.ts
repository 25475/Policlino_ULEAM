import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroHospitalizaciones } from "src/interfaces/registrohospitalizaciones.interfaces";

@Injectable({
    providedIn: 'root'
})
export class RegistroHospitalizacionServices {
    constructor(private firestore: Firestore){}
    addPlace(RegistroHospitalizacion: RegistroHospitalizaciones){
       const regishospitaRef = collection(this.firestore, 'RegistroHospitalizacion');
       return addDoc(regishospitaRef, RegistroHospitalizacion);
    }
    }
