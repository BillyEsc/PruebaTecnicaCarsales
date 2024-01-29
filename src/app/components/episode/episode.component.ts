import { Component, OnInit, ViewChild } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ListCharactersDialogComponent } from 'src/app/components/episode/list-characters-dialog/list-characters-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  page = 1;
  pages: number;
  episodetoMoldal = null;
  isLoading = false;
  episodes: Episode[];
  displayedColumns = ['id', 'episode', 'name', 'air_date', 'characters'];
  episodesDataSource: MatTableDataSource<Episode>;
  pageEvent: PageEvent;
  request = {};

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.loadEpisodePage();
  }

  loadEpisodePage(): void {
    this.isLoading = true;
    this.apiService.getEpisodes(this.page).subscribe((data) => {
      this.isLoading = false;
      this.episodes = data.results;
      this.pages = data.info.pages;
      this.episodesDataSource = new MatTableDataSource<Episode>(this.episodes);
    });
  }

  setPage(page: number) {
    this.page = page;
    this.loadEpisodePage();
  }

  episodeFilter(id: number): void {
    // Realiza la llamada al endpoint para obtener los detalles del personaje por ID
    this.apiService.getEpisodeById(id).subscribe((episodeCharacterDetails) => {
      // Abre el modal y pasa los detalles del personaje como datos
      this.dialog.open(ListCharactersDialogComponent, {
        data: {
          episode: episodeCharacterDetails,
        },
      });
    });
  }
}
