
import  { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { productsData, productsInsert } from "../Types/typesProducts";

export default async function createProducts(req: Request, res: Response){
    try {
        const {name,price,image_url}:productsInsert = req.body
        if(!name || !price || !image_url){
            throw new Error("You need to pass name,price and/or image_url.")
        }
        
        const productsData:productsData ={
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const anwser = await insertProduct(productsData)
        res.status(201).send({message:anwser})

    } catch (error:any) {
        res.status(500).send({message:error.message});
    }}