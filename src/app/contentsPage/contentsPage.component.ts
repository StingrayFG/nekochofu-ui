import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contentsPage.component.html',
  styleUrl: './contentsPage.component.scss'
})

export class ContentsPageComponent {
  contents = '';

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    await axios.get('http://localhost:8000/record/get/' + this.route.snapshot.paramMap.get('uuid'))
    .then(res => {
      this.contents = res.data.contents;
    })
    .catch(err => {
      this.contents = '404 Not Found'
    })
  }
}
