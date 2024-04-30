import { Component } from '@angular/core';
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
  
  linesExample = ['123', '43242', '2311']
  contentsString: string = '';
  contentsArray: string[] = [''];

  getContentsString(): string {
    return this.contentsString;
  }

  handleContentsChange(event: any): any {
    this.contentsString = event;
    this.contentsArray = event.split(/\r?\n/);
  }
}
