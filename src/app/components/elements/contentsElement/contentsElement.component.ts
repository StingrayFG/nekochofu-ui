import { Component, Input } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';

import { LineElementComponent } from '@components/elements/lineElement/lineElement.component';

@Component({
  selector: 'app-contents-element',
  standalone: true,
  imports: [CdkTextareaAutosize, FormsModule, LineElementComponent],
  templateUrl: './contentsElement.component.html',
  styleUrl: './contentsElement.component.scss'
})

export class ContentsElementComponent {

  @Input() readonlyMode: boolean = false;

  contentsString: string = '';
  contentsArray: string[] = [''];

  getContentsString(): string {
    return this.contentsString;
  }

  setContentsString(contents: string): void {
    this.contentsString = contents;
    this.contentsArray = contents.split(/\r?\n/);
  }

  handleContentsChange(event: any): any {
    this.contentsString = event;
    this.contentsArray = event.split(/\r?\n/);
  }
}
