export class Recipe{
    constructor(
        private id:string,
        private title:string,
        private description:string,
        private createDate:Date,
        private usuarioId:string
    ){}
    getId(){
        return this.id
    }
    getTitle(){
        return this.title
    }
    getDescription(){
        return this.description
    }
    getCreateDate(){
        return this.createDate
    }
    getUserId(){
        return this.usuarioId
    }
}