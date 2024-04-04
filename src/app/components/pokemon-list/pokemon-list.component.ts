import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from '../../shared/pokemon';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemons!: Pokemon[]; // Entrée pour recevoir la liste des Pokemons
  @Output() pokemonSelected = new EventEmitter<Pokemon>(); // Événement pour sélectionner un Pokemon
  private pokemonSubscription!: Subscription;

  constructor(private pokedexService: PokedexService) {
  }
  ngOnInit(): void {
    this.pokemonSubscription = this.pokedexService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  // Méthode pour émettre l'événement de sélection d'un Pokemon
  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}

