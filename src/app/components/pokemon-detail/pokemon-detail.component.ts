import {Component, Input} from '@angular/core';
import {Pokemon} from "../../shared/pokemon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon; // Entrée pour recevoir les informations du Pokemon sélectionné

}
