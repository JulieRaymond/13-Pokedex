import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from '../../shared/pokemon';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemons!: Pokemon[]; // Entrée pour recevoir la liste des Pokemons
  @Output() pokemonSelected = new EventEmitter<Pokemon>(); // Événement pour sélectionner un Pokemon

  constructor() {
  }

  // Méthode pour émettre l'événement de sélection d'un Pokemon
  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}

