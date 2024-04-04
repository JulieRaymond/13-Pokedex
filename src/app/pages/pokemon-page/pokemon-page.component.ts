import {Component} from '@angular/core';
import {Pokemon} from "../../shared/pokemon";
import {PokedexService} from "../../services/pokedex.service";
import {PokemonListComponent} from "../../components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "../../components/pokemon-detail/pokemon-detail.component";

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {
  pokemons!: Pokemon[];
  selectedPokemon!: Pokemon;

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokedexService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
