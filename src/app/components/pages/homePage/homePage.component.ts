import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import axios from 'axios';

import { ContentsElementComponent } from '@app/components/elements/contentsElement/contentsElement.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CdkTextareaAutosize, 
    ContentsElementComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss'
})

export class HomePageComponent {
  lastCreatedContents: string = '';
  currentContents: string = '';
  newLink: string = '';
  
  showingMessage: boolean = false;
  message: string = '';

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

  @ViewChild(ContentsElementComponent, {static : true}) child : ContentsElementComponent = {} as ContentsElementComponent;

  async createRecord() {
      this.currentContents = this.child.getContentsString();
      console.log(this.currentContents)
      if (this.lastCreatedContents !== this.currentContents) {
        this.newLink = '...'
        await axios.post('http://localhost:8000/record/add', {contents: this.currentContents})
        .then(res => {
          this.newLink = 'localhost:4200' + '/' + res.data.uuid;
          this.lastCreatedContents = this.currentContents;
        })
        .catch(err => {
          this.newLink = '';
          this.showMessage('Something went wrong');
        })
      }
  }
}
