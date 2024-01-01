import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { Manga } from '../manga';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route:ActivatedRoute = inject(ActivatedRoute);
  mangaService:MangaService = inject(MangaService)
  manga : Manga | undefined;


  constructor()
  {
    const mangaId = Number(this.route.snapshot.params["id"]);
    this.manga = this.mangaService.getMangaById(mangaId);
  }
}
