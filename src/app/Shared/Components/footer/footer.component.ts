import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  constructor() {
    // creamos este objeto para tener control sobre su valor, es requerido y tiene una validacion tipo email
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email]);
  }

  ngOnInit() {
  }

  // si ejecuto el metodo emailField  y si es valido me devuelve el valor
  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
