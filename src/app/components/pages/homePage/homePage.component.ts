import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import axios from 'axios';

import { LineElementComponent } from '@app/components/elements/lineElement/lineElement.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CdkTextareaAutosize, 
    LineElementComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss'
})

export class HomePageComponent {
  lastOriginalValue = '';
  newLink = '';
  
  showingMessage = false;
  message = ''

  contentsControl = new FormControl()

  copyLink(): void {
    if (this.newLink) {
      this.showMessage('Copied!')
      navigator.clipboard.writeText(this.newLink);
    }
  }

  async showMessage(msg: string) {
    this.message = msg;
    this.showingMessage = true;
    await new Promise(res => setTimeout(res, 1500));
    this.showingMessage = false;
  }

  async createRecord() {
    console.log(this.contentsControl.value)
    if (this.contentsControl.status === 'VALID') {
      if (this.contentsControl.value !== this.lastOriginalValue) {
        this.newLink = '...'
        await axios.post('http://localhost:8000/record/add', {contents: this.contentsControl.value})
        .then(res => {
          this.newLink = 'localhost:4200' + '/' + res.data.uuid;
          this.lastOriginalValue = this.contentsControl.value!;
          console.log(res.data)
        })
        .catch(err => {
          this.newLink = '';
          this.showMessage('Something went wrong');
        })
      }
    } else {
      this.showMessage('Enter a correct link');
    }
  }
}
