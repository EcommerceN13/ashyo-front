export interface ProductType {
    ProductsItem:any[],
    category_id:number | null,
    description:string | null,
    nasiya:string | null,
    summary:string | null,
    rating:number | null,
    is_aksiya:boolean 
    id:number,
    name:string | null,
    image:string | null,
    price:number
    brand_id:number | null,
}

export interface ProductPageType {
    title:string,
    API:string,
    extraClass?:string,
}

export interface ProductItemType {
    ProductOptions:any[],
    id:number,
    image:string,
    price:number,
    product_id:number,
    color_id:number,
}