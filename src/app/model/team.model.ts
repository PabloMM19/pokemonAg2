import { IPokemon } from "./pokemon.model";
import { ITrainer } from "./trainer.model";

export interface ITeamData {
    content: ITeam[];
    }
    
    export interface ITeam {
        id: number;
        entrenador: ITrainer;
        nombre: string;
        descripcion: string;
      }