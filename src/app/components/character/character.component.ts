import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from 'src/app/models/character';
import { ApiService } from 'src/app/services/api.service';
import { CharactersDialogComponent } from 'src/app/components/character/character-info-dialog/characters-info-dialog.component';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  page = 1;
  pages: number;
  isLoading = false;
  characters: Character[];

  charactersDataSource: MatTableDataSource<Character>;
  //episodes: Episode[];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
    displayedColumns = ['id', 'episode', 'name', 'air_date'];

  ngOnInit() {
    this.loadCharacterPage();
  }

  loadCharacterPage(){
    this.isLoading = true;
    this.apiService.getCharacters(this.page).subscribe((data) => {
      this.isLoading = false;
      this.characters = data.results;
      this.charactersDataSource = new MatTableDataSource<Character>(this.characters);
      this.pages = data.info.pages;
    });
  }

  openDialog(): void {
    // Lógica para abrir un diálogo utilizando MatDialog
  }

  setPage(page: number) {
    this.page = page;
    this.loadCharacterPage();
  }

  characterFilter(id: number): void {
    // Realiza la llamada al endpoint para obtener los detalles del personaje por ID
    this.apiService.getCharacterById(id).subscribe((characterDetails) => {
      // Abre el modal y pasa los detalles del personaje como datos
      this.dialog.open(CharactersDialogComponent, {
        data: {
          character: characterDetails,
        },
      });
    });
  }
}
