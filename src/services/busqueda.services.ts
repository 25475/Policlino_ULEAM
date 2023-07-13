import { Injectable } from "@angular/core";
import { Firestore, query, getDocs, addDoc, collectionData } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroPacientes } from "src/interfaces/registropacientes.interfaces";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class BusquedaServices {
    constructor(private firestore: Firestore) {}

    obtenerClases(): Observable<RegistroPacientes[]> {
      const busquedaRef = collection(this.firestore, 'RegistroPacientes');
      return collectionData(busquedaRef, { idField: 'historial' }) as Observable<RegistroPacientes[]>;
    }
  }
    
