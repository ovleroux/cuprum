"use client"

import { ColumnDef } from "@tanstack/react-table"

//These types are used to define the shape of our data.
export type HSCodes = {
   section: string
   hscode: string
   description: string
   parent: string
   level: number
}

export const columns: ColumnDef<HSCodes>[] = [
    {
        accessorKey: "section",
        header: "Section"
    },
    {
        accessorKey: "hscode",
        header: "HS Code",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "parent",
        header: "Parent",
    },
    {
        accessorKey: "level",
        header: "Level",
    },
]

