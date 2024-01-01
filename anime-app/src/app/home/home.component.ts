import { Component, inject } from '@angular/core';
import { MangaBoxComponent } from '../manga-box/manga-box.component';
import { Manga } from '../manga';
import { MangaService } from '../manga.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MangaBoxComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mangaList : Manga[] = [];
  mangaService : MangaService = inject(MangaService);

  constructor()
  {
    this.mangaList = this.mangaService.getAllMangas();
  }

}
