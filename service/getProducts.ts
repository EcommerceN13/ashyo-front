"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (API:string) => {
    const params = { page: 1, limit: 1000 }

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['products-items'],
        queryFn: () => instance().get('/products-items', { params }).then(res => res.data)
    })
    return {products, isLoading}
}