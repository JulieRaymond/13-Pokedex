import {Injectable} from '@angular/core';
import {Pokemon} from "../shared/pokemon";
import {POKEMONS} from "../shared/pokemons-mock";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokemons: Pokemon[] = POKEMONS;

  constructor() {
  }

  // Méthode pour récupérer la liste des Pokemons
  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS); // Retourne un Observable contenant les Pokemons mock
  }

  // Méthode pour ajouter un nouveau Pokemon
  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }
}
