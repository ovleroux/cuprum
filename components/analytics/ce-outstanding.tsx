"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Card,
  CardHeader, 
} from "@/components/ui/card"

const chartData = [
	{ month: "Jun 25", collections: 0, deliveries: 0},
	{ month: "Jul 25", collections: 0, deliveries: 0},
	{ month: "Aug 25", collections: 0, deliveries: 0},
	{ month: "Sep 25", collections: 0, deliveries: 0},
	{ month: "Oct 25", collections: 0, deliveries: 0},
	{ month: "Nov 25", collections: 0, deliveries: 0},
	{ month: "Dec 25", collections: 0, deliveries: 0},
	{ month: "Jan 26", collections: 0, deliveries: 0},
	{ month: "Feb 26", collections: 0, deliveries: 0},
	{ month: "Mar 26", collections: 0, deliveries: 0},
    { month: "Apr 26", collections: 1, deliveries: 0},
	{ month: "May 26", collections: 0, deliveries: 0},
]

const chartConfig = {
  collections: {
    label: "Collections",
    color: "#A08c64",
  },
  deliveries: {
    label: "Deliveries",
    color: "#73644b",
},
} satisfies ChartConfig

export function CEOutstandingChart() {
  return (
    <Card className="w-1/2">
        <CardHeader>
            <h1 className="text-xl font-semibold text-center mb-6 text-gray-900">CAPITAL EQUIPMENT</h1>
            <h3 className="text-base font-semibold text-center mb-6 text-gray-900">OUTSTANDING DELIVERIES & COLLECTIONS</h3>
        </CardHeader>
        <ChartContainer config={chartConfig} className="h-[400px]">
        <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            
            
            />

            <YAxis 
                orientation="left"
				tick={{ fontSize: 12 }}
				tickLine={false}
				axisLine={{ stroke: "#e5e7eb" }}
                domain={[0,3]}
			    ticks={[0, 1, 2, 3]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="collections" fill="var(--color-collections)" radius={4}  />
            <Bar dataKey="deliveries" fill="var(--color-deliveries)" radius={4}   />
        </BarChart>
        </ChartContainer>
    </Card>
  )
}
