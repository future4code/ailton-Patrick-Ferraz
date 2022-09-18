import { productsData } from "../Types/typesProducts";
import { connection } from "./connection";

const productsType = (product:any) =>{
    const typesProducts:productsData ={
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
    }
    return typesProducts;
}

export default async function selectAllProducts():Promise<productsData[] | undefined>{
    const result = await connection("labecommerce_products")

    const allProductsType = result.map((product:any)=>{
        return productsType(product)
    })

    return allProductsType

}