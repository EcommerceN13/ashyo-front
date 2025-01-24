export interface CategoryType {
    id: number;
    name: string;
    image: string;
    icon: string;
    parentCategoryId: number;
    subCategories:[]
}