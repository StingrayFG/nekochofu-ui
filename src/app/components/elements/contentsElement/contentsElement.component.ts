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
  markerlessContentsString: string = '';
  contentsArray: string[] = [''];

  getContentsString(): string {
    return this.contentsString;
  }

  setContentsString(contents: string): void {
    this.contentsString = contents;
    this.contentsArray = contents.split(/\r?\n/);
    for (let line of this.contentsArray) {
      line = line.substring(line.indexOf(' ') + 1, line.length);
      this.markerlessContentsString += (line + '\n')
      console.log(line)
    }
    console.log(this.markerlessContentsString)
  }

  handleContentsChange(event: any): any {
    this.contentsString = event;
    this.contentsArray = event.split(/\r?\n/);
  }
}
