import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Character } from '../models/character';
import { Episode } from '../models/episode';
import { Location } from '../models/location';
import { ListPage } from '../models/list-page';
import { Observable } from 'rxjs';

function composeFilterQueryString(page: number) {
  return `page=${page}`;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }
  page = 1;

  getEpisodes(page = 1) {
    const queryString = composeFilterQueryString(page);
    const url = `${this.apiUrl}episode/?${queryString}`;
    return this.http.get<ListPage<Episode>>(url);
  }

  getEpisodeById(id: number){
    const url = `${this.apiUrl}episode/${id}`;
    return this.http.get<Episode>(url);
  }

  getCharacters(page = 1) {
    const queryString = composeFilterQueryString(page);
    const url = `${this.apiUrl}character/?${queryString}`;
    return this.http.get<ListPage<Character>>(url);
  }

  getCharacterById(id: number) {
    const url = `${this.apiUrl}character/${id}`;
    return this.http.get<Character>(url);
  }

  getCharacterByUrl(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }

  getLocation(page = 1) {
    const queryString = composeFilterQueryString(page);
    const url = `${this.apiUrl}location/?${queryString}`;
    return this.http.get<ListPage<Location>>(url);
  }
}
