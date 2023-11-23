import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trainer-login-routed',
  templateUrl: './trainer-login-routed.component.html',
  styleUrls: ['./trainer-login-routed.component.css']
})
export class TrainerLoginRoutedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // En TrainerLoginRoutedComponent
handleFormSubmit(form: FormGroup) {
  if (form.valid) {
    const username = form.get('username')?.value;
    const password = form.get('password')?.value;

    // Realiza la lógica de autenticación aquí (puedes llamar a un servicio)
    // E.g., puedes usar un servicio de autenticación para validar el usuario

    // Si es un administrador, realiza alguna acción, por ejemplo, redirigir a una página de administrador
    // Si no es administrador, realiza otra acción, por ejemplo, mostrar un mensaje de error
  }
}

}