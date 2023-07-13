import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'policli';

  constructor(private router: Router){}

  RegistroInicioRoute():boolean{
    const currentRoute=this.router.url;
    return currentRoute.includes("inicio-sesion");
  }
}
