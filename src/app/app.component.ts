import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisabled: boolean = true;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  password: string = '';
  passwordLength: number = 0;

  onUseLettersChecked() {
    this.useLetters = !this.useLetters;
    //console.log(this.useLetters);
  }

  onUseNumbersChecked() {
    this.useNumbers = !this.useNumbers;
    //console.log(this.useNumbers);
  }

  onUseSymbolsChecked() {
    this.useSymbols = !this.useSymbols;
    //console.log(this.useSymbols);
  }

  onChangePasswordLength(value: string) {
    //this.passwordLength = parseInt((<HTMLInputElement>event.target).value);
    this.passwordLength = parseInt(value);
  }

  disabledButton() {
    if (this.passwordLength >= 6 && (this.useLetters || this.useNumbers || this.useSymbols)) {
      return this.isDisabled = false;
    } else {
      return this.isDisabled = true;
    }
  }

  onGenerate() {
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '!@#$%^&*()=';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let validCharsLength = validChars.length;

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = validChars.charAt(Math.floor(Math.random() * validCharsLength));
      generatedPassword += index;
    }
    
    this.password = generatedPassword;
    //console.log(this.password);
  }
}
