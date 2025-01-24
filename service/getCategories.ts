"use client"
import { instance } from "@/hooks/instance"
import React, { SetStateAction, useEffect, useState } from "react"

export const getCategories = (name?: string | null, setIsLoading?: React.Dispatch<SetStateAction<boolean>>) => {
    const params = {page: 1, limit: 1000, name:name ? name: null }
    const [data, setData] = useState([])

    useEffect(() => {
        instance().get('/category', {params}).then(res => setData(res.data.categories)).finally(() => {
            setTimeout(() => {
                if(setIsLoading) setIsLoading(false)
            }, 800)
        })
    }, [name])

    return data
}