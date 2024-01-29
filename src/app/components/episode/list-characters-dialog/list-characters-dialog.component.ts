import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Episode } from 'src/app/models/episode';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters-dialog.component.html',
  styleUrls: ['./list-characters-dialog.component.scss']
})
export class ListCharactersDialogComponent {

  episodeDetails: Episode;
  charactersImages: string[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: { episode: Episode }, private apiService: ApiService) {
    this.episodeDetails = data.episode;
    if (data && data.episode && data.episode.characters) {
      this.loadCharactersImages(data.episode.characters.map(character => character.toString()));
    }
  }

  loadCharactersImages(characterUrls: string[]): void {
    characterUrls.forEach((characterUrl) => {
      this.apiService.getCharacterByUrl(characterUrl).subscribe((character) => {
        if (character && character.image) {
          this.charactersImages.push(character.image);
        }
      });
    });
  }
}
