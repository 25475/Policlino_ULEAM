import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroConsultas } from "src/interfaces/registroconsultas.interfaces"; 

@Injectable({
    providedIn: 'root'
})
export class RegistroconsultServices {
    constructor(private firestore: Firestore){}
    addPlace(registroconsult: RegistroConsultas){
       const consultRef = collection(this.firestore, 'RegisConsultas');
       return addDoc(consultRef, registroconsult);
    }



    }
