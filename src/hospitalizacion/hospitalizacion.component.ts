import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroHospitalizacionServices } from 'src/services/registrohospitalizacion.services';
@Component({
  selector: 'app-hospitalizacion',
  templateUrl: './hospitalizacion.component.html',
  styleUrls: ['./hospitalizacion.component.css']
})
export class HospitalizacionComponent {
  registroForm!: FormGroup ;
  isRegistroSuccessful:boolean = false;
  constructor(private registroHospitalizacionServices:RegistroHospitalizacionServices ,private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      fecha_ingreso : new FormControl('', Validators.required),
      fecha_salida : new FormControl('', Validators.required),
    cama : new FormControl('', Validators.required),
    motivo_hospitalizacion : new FormControl('', Validators.required),
    diagnostico : new FormControl('', Validators.required),
    tratamiento : new FormControl('', Validators.required),

  });
}
async submitForm() {
  console.log(this.registroForm.value);
    const response = await this.registroHospitalizacionServices.addPlace(this.registroForm.value);
    console.log(response);

    if (response) {
      alert('Gracias los datos se enviaron correctamente.');


    } else {
      console.log('Hubo un error al enviar el mensaje.');
    }

  }
  regreso(): void {
    this.router.navigate(['/inicio']);
  }
}
