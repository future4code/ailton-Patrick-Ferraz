class User{
    constructor(
        private id:string,
        private email: string,
        private password: string,
        private role: string
    ){}


    getId():string {
        return this.id;
    }
    getEmail(){
        return this.email;
    }

  getPassword(){
        return this.password;
    }

    getRole(){
        return this.role;
    }
}


export default User