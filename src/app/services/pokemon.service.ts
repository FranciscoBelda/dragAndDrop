import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultPokemon} from "../common/interfacePokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getPokemons(): Observable<ApiResultPokemon>{
    return this.http.get<ApiResultPokemon>('https://api.pokemontcg.io/v2/cards?page=1&pageSize=20')
  }
}
