import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

import { ContentsElementComponent } from '@app/components/elements/contentsElement/contentsElement.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contents-page',
  standalone: true,
  imports: [RouterOutlet, 
    ContentsElementComponent],
  templateUrl: './contentsPage.component.html',
  styleUrl: './contentsPage.component.scss'
})

export class ContentsPageComponent {

  contents = '';

  constructor(private route: ActivatedRoute) { }

  @ViewChild(ContentsElementComponent, {static : true}) child : ContentsElementComponent = {} as ContentsElementComponent;

  async ngOnInit() {
    await axios.get(environment.backendUrl + '/record/get/' + this.route.snapshot.paramMap.get('uuid'))
    .then(res => {
      this.contents = res.data.contents;
      this.child.setContentsString(res.data.contents);
    })
    .catch(err => {
      this.contents = '404 Not Found'
    })
  }
}
