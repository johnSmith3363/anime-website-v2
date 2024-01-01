import { Component, Input } from '@angular/core';
import { Manga } from '../manga';

@Component({
  selector: 'app-manga-box',
  standalone: true,
  imports: [],
  templateUrl: './manga-box.component.html',
  styleUrl: './manga-box.component.css'
})
export class MangaBoxComponent {

  @Input() manga!:Manga;

}
