import {Component} from '@angular/core';
import {Pokemon} from "../../shared/pokemon";
import {PokedexService} from "../../services/pokedex.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './create-pokemon-page.component.html',
  styleUrl: './create-pokemon-page.component.scss'
})
export class CreatePokemonPageComponent {
  pokemon: Pokemon = {
    name: '',
    picture: '',
    description: ''
  };

  constructor(private pokedexService: PokedexService) {}

  onSubmit(): void {
    this.pokedexService.addPokemon(this.pokemon);
    this.pokemon = { name: '', picture: '', description: '' }; // Réinitialise le formulaire après l'ajout du Pokémon
  }
}
