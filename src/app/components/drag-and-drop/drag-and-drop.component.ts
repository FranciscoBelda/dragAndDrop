import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../common/interfacePokemon";

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {
  pokemons: Pokemon[] = [];
  pokemons2: Pokemon[] = [];
  constructor(private dataService: PokemonService) {
    this.loadPokemons();
  }

  drop(event: CdkDragDrop<Pokemon[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  private loadPokemons() {
    this.dataService.getPokemons().subscribe(
      {
        next: value => {
          this.pokemons = value.data;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Done');
        }
      }
    )
  }
}
