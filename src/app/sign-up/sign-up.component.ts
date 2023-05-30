import { Component } from '@angular/core';
import { SignUp } from 'src/models/sign-up';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: SignUp = new SignUp("","","","");

  isSubmitted:Boolean=false;
  constructor() { }

  reset() : void {
    this.isSubmitted=false;
  }
  onSubmit(): void {
    // Formulaire envoyé
    this.isSubmitted = true;
    console.log(this.model);
  }
}
