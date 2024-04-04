import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PokemonPageComponent} from "./pages/pokemon-page/pokemon-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonPageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myFirstPokedex';
}
