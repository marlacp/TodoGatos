import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
