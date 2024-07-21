export interface ILogin {
    username: string;
    password: string;
}

export interface IAddUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    age: number;
  }

export  interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    image: string;
    username: string;
    lastUpdate: string;
    age: number;  
  }