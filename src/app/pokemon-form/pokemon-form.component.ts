import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon.service';

@Component({
    selector: 'app-pokemon-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './pokemon-form.component.html',
    styleUrl: './pokemon-form.component.css',
})
export class PokemonForm {
    private formBuilder = inject(FormBuilder);
    pokemonService = inject(Pokemon);

    pokemonForm = this.formBuilder.nonNullable.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        level: [1, [Validators.required, Validators.min(1)]],
        nature: ['', Validators.required],
    });

    onSubmit() {
        if (this.pokemonForm.valid) {
            this.pokemonService.savePokemon(this.pokemonForm.getRawValue()).subscribe(() => {
                this.pokemonService.fetchPokemon(); 
                this.pokemonForm.reset();
                console.log("Pokemon saved successfully!");
            });
        }
    }
}
