
export interface IOrdersDB {
    id:string
};


export interface IOrderItemsDB {
  id:string,
  pizza_name:string,
  quantity:number,
  order_id:string
};


export interface OrdemItem{
    id:string,
    pizza_name:string,
    quantity:number,
    order_id:string
}

export class Order {
    constructor(
        private id: string,
        private ordemItems: OrdemItem[],
       
    ) {}
    
    public getId = () => {
        return this.id
    }


    public getOrdemItems = () => {
        return this.ordemItems
    }


    public setOrdemItems = (newOrdemItems: IOrderItemsDB[]) =>{
        this.ordemItems = newOrdemItems
    }

    public addOrdemItems = (newOrdemItems: IOrderItemsDB) => {
        this.ordemItems.push(newOrdemItems)
    }


    public removeOrdemItem = (idToRemove: string) => {
        return this.ordemItems.filter((ordemItem) => ordemItem.id !== idToRemove)
    }

}
