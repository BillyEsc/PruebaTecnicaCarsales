import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  page = 1;
  pages: number;
  isLoading = false;
  locations: Location[];


  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  displayedColumns = ['id', 'name', 'type', 'dimension', 'created'];
  locationsDataSource: MatTableDataSource<Location>;

  ngOnInit() {
    this.loadLocationPage();
  }

  loadLocationPage(){
    this.isLoading = true;
    this.apiService.getLocation(this.page).subscribe((data) => {
      this.isLoading = false;
      this.locations = data.results;
      this.pages = data.info.pages;
       this.locationsDataSource = new MatTableDataSource<Location>(this.locations);

    });
  }

  setPage(page: number) {
    this.page = page;
    this.loadLocationPage();
  }
}
