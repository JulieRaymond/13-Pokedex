import { Routes } from '@angular/router';
import {PokemonPageComponent} from "./pages/pokemon-page/pokemon-page.component";
import {CreatePokemonPageComponent} from "./pages/create-pokemon-page/create-pokemon-page.component";

export const routes: Routes = [
  { path: '', component: PokemonPageComponent },
  { path: 'create', component: CreatePokemonPageComponent }
];
