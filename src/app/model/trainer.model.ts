import { IPaginationInfo } from "./pagination.model";

export interface ITrainerData {
    content: ITrainer[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
    }
    
    export interface ITrainer {
        id: number;
        username: string;
        password: string;
        email: string;
        role: number;
        equipos: number;
      }