import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroPacientServices } from 'src/services/registropacient.services';
@Component({
  selector: 'app-historialclinico',
  templateUrl: './historialclinico.component.html',
  styleUrls: ['./historialclinico.component.css']
})
export class HistorialclinicoComponent {
  registroForm!: FormGroup ;
  isRegistroSuccessful:boolean = false;

  constructor(private registroPacientServices: RegistroPacientServices ,private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombre : new FormControl('', Validators.required),
      apellido : new FormControl('', Validators.required),
      fecha_nacimiento : new FormControl('', Validators.required),
      direccion : new FormControl('', Validators.required),
      telefono : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      cedula : new FormControl('', Validators.required),
      enfermedades : new FormControl('', Validators.required),
      alergia : new FormControl('', Validators.required),
      tiposangre : new FormControl('', Validators.required),
      historial : new FormControl('', Validators.required),
      edad : new FormControl('', Validators.required),
      genero : new FormControl('', Validators.required),

      });
    }
    async submitForm() {
      console.log(this.registroForm.value);
        const response = await this.registroPacientServices.addPlace(this.registroForm.value);
        console.log(response);

        if (response) {
          alert('Gracias su registro se envio correctamente.');


        } else {
          console.log('Hubo un error al enviar el mensaje.');
        }

    }
      regreso(): void {
        this.router.navigate(['/inicio']);
      }
    }


