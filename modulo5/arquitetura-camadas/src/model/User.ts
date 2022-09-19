export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
}

export interface IUserDB{
    id: string;
    name: string;
    email: string;
    password: string;
    role: USER_ROLES
}


export class User {
    static TABLE_USERS(TABLE_USERS: any) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES

    )
    {}


   public getId = () => {
     return this.id
    }
   public getName = () => {
     return this.name
    }
   public getEmail = () => {
     return this.email
    }
   public getPassword = () => {
     return this.password
    }
   public getRole = () => {
     return this.role
    }

}  

export interface userDTO{
  name: string,
  email: string,
  password: string,
  role:USER_ROLES
}

export interface UserBD{
  id:string,
  name:string,
  email:string,
}