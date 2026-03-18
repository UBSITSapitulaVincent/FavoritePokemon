import { Component, signal } from '@angular/core';
import { PokemonForm } from './pokemon-form/pokemon-form.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [PokemonForm],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class App {
    protected readonly title = signal('pokemon-app');
}
