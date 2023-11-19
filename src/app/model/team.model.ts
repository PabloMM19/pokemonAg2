import { IPaginationInfo } from "./pagination.model";
import { ITrainer } from "./trainer.model";

export interface ITeamData {
    content: ITeam[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
    }
    
    export interface ITeam {
        id: number;
        entrenador: ITrainer;
        nombre: string;
        descripcion: string;
      }