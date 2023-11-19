import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/pokemon.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonViewModalComponent } from '../pokemon-view-modal/pokemon-view-modal.component';
import { PokemonService } from 'src/app/service/pokemon.service.service';

@Component({
  selector: 'app-admin-pokemon-view-unrouted',
  templateUrl: './admin-pokemon-view-unrouted.component.html',
  styleUrls: ['./admin-pokemon-view-unrouted.component.css']
})
export class AdminPokemonViewUnroutedComponent implements OnInit {
  @Input() pokemonData: IPokemon[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  verPokemon(pokemon: IPokemon): void {
    const modalRef = this.modalService.open(PokemonViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.pokemon = pokemon;
  } 

  eliminarPokemon(pokemonId: number): void {
    this.pokemonService.deletePokemon(pokemonId).subscribe(
      () => {
        console.log('Pokemon eliminado con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaPokemon();
      },
      error => {
        console.error('Error al eliminar el pokemon', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaPokemon(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.pokemonService.getPokemonData().subscribe(
      data => {
        this.pokemonData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de pokemon', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  loadPokemon() {
    this.pokemonService.getPokemonDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.pokemonData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadPokemon();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPokemon();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.loadPokemon();
    }
  }
  

  goToFirstPage() {
    this.currentPage = 0;
    this.loadPokemon();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.loadPokemon();
  }

  generatePageNumbers(): (number | string)[] {
    const pageNumbers: (number | string)[] = [];

    // Botón para ir a la primera página (<<)
    pageNumbers.push('<<');

    // Página actual -2, página actual -1, página actual, página actual +1, página actual +2
    for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
      if (i >= 0 && i < this.totalPages) {
        pageNumbers.push(i);
      }
    }

    // Botón para ir a la última página (>>)
    pageNumbers.push('>>');

    return pageNumbers;
  }

  createMultiplePokemon(amount: number): void {
    this.pokemonService.createMultiplePokemon(amount).subscribe(
      () => {
        console.log('Pokemons creados con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaPokemon();
      },
      error => {
        console.error('Error al crear los pokemons', error);
        // Maneja el error según tus necesidades
      }
    );
  }

}
