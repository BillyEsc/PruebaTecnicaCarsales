import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-info-dialog.component.html',
  styleUrls: ['./characters-info-dialog.component.scss']
})
export class CharactersDialogComponent {

  characterDetails: Character;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { character: Character }) {
    this.characterDetails = data.character;
  }

}
