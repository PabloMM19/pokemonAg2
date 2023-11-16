export interface IPokemonData {
content: IPokemon[];
}

export interface IPokemon {
    id: number;
  nombre: string;
  tipo1: string;
  tipo2: string;
  ataque1: string;
  ataque2: string;
  ataque3: string;
  ataque4: string;
  generacion: number;
  habilidad: string;
  ataque: number;
  defensa: number;
  ataque_Especial: number;
  defensa_Especial: number;
  velocidad: number;
  salud: number;
  objeto: string;
  naturaleza: string;
  nivel: number;
  }