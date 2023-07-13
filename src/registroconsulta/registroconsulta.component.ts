import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RegistroconsultServices } from 'src/services/registroconsult.services';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registroconsulta',
  templateUrl: './registroconsulta.component.html',
  styleUrls: ['./registroconsulta.component.css']
})
export class RegistroconsultaComponent {
  registroForm!: FormGroup ;
  isRegistroSuccessful:boolean = false;


  constructor(
    private registroconsultServices: RegistroconsultServices,
    private router: Router,
    private formBuilder: FormBuilder) {}
    ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      medico: new FormControl('', Validators.required),
      sintomas: new FormControl('', Validators.required),
      diagnostico: new FormControl('', Validators.required),
      tratamiento: new FormControl('', Validators.required),
    });
  }
  async submitForm() {
    console.log(this.registroForm.value);
        const response = await this.registroconsultServices.addPlace(this.registroForm.value);
        console.log(response);

        if (response) {
        alert('Gracias. La consulta se registró con exito.');

      } else {
        console.log('Hubo un error al enviar el mensaje.');
      }
    }
  }

