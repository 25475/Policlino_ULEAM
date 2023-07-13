import { Component, NgZone } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegistroPacientes } from 'src/interfaces/registropacientes.interfaces';
import { BusquedaServices } from 'src/services/busqueda.services';
@Component({
  selector: 'app-buscarpaciente',
  templateUrl: './buscarpaciente.component.html',
  styleUrls: ['./buscarpaciente.component.css']
})
export class BuscarpacienteComponent {
  pacienteEncontrado: any | null = null;

  constructor(private busquedaServices: BusquedaServices, private router: Router, private ngZone: NgZone) {}

  buscar(): void {
    const historial = (document.getElementById('historial') as HTMLInputElement)?.value;

    if (historial === '') {
      alert('Por favor ingrese el historial clínico para realizar la búsqueda del paciente');
      return;
    }

    this.buscarPacientePorHistorial(Number(historial));
  }

  buscarPacientePorHistorial(historial: number) {
    this.busquedaServices.obtenerClases().subscribe((buscarpaciente: RegistroPacientes[]) => {
      const pacientesEncontrados = buscarpaciente.filter((paciente) => paciente.historial === historial);

      this.ngZone.run(() => {
        this.pacienteEncontrado = pacientesEncontrados.length > 0 ? pacientesEncontrados[0] : null;
      });
    });
  }

  regreso(): void {
    this.router.navigate(['/inicio']);
  }
}
