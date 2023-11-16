export interface ITrainerData {
    content: ITrainer[];
    }
    
    export interface ITrainer {
        id: number;
        username: string;
        password: string;
        email: string;
        role: number;
      }