import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-element',
  standalone: true,
  templateUrl: './lineElement.component.html',
  styleUrl: './lineElement.component.scss'
})

export class LineElementComponent {

  @Input() readonlyMode: boolean = false;

  @Input() number: number = 0;
  @Input() value: string = '';
  markerlessValue: string = '';
  styleMarker: string = '';
  styleArray: string[] = [];

  ngOnInit(): void { 
    this.handleStyle();
  }

  handleStyle(): void {
    this.styleMarker = this.value.substring(0, this.value.indexOf(' '));
    this.markerlessValue = this.value.substring(this.value.indexOf(' ') + 1, this.value.length);

    if (this.styleMarker.includes('###')) {
      this.styleArray.push('p-h3');
    } else if (this.styleMarker.includes('##')) {
      this.styleArray.push('p-h2');
    } else if (this.styleMarker.includes('#')){
      this.styleArray.push('p-h1');
    } else {    

      if (this.styleMarker.includes('***')) {
        this.styleArray.push('p-bold');
        this.styleArray.push('p-italic');
      } else if (this.styleMarker === '**') {
        this.styleArray.push('p-bold');
      } else if (this.styleMarker === '*') {
        this.styleArray.push('p-italic');
      }
  
      if (this.styleMarker.includes('~~')) {
        this.styleArray.push('p-strike');
      }
    }
  }
}
