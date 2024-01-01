import { Component, Input } from '@angular/core';
import { Manga } from '../manga';
import { RouterModule, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-box',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './manga-box.component.html',
  styleUrl: './manga-box.component.css'
})
export class MangaBoxComponent {

  @Input() manga!:Manga;

}
